'use strict';

window.io = require('socket.io-client');
var axios = require('axios');
var d3 = require('d3');
var moment = require('moment');
var sortedBy;
var ascending = false;
var sortDescUnicode = '\uf0dd';
var sortAscUnicode = '\uf0de'

function parse_link_header(header) {
  if (header.length === 0) {
    throw new Error('input must not be longer than 0');
  }

  // Split parts by comma
  var parts = header.split(',');
  var links = {};
  // Parse each part into a named link
  for (var i = 0; i < parts.length; i++) {
    var section = parts[i].split(';');
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    var url = section[0].replace(/<(.*)>/, '$1').trim();
    var name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  }
  return links;
}

function renderRows(data, targetElement, sortByKey, reversed) {
  sortedBy = sortByKey;
  var rows = targetElement.selectAll('tr')
  .data(data, function(d) {
    return d.name;
  });

  rows.sort(function(a, b) {
    if (reversed === true) {
      var temp = a;
      a = b;
      b = temp;
    }
    return d3.ascending(a[sortByKey], b[sortByKey]);
  });

  var row = rows.enter()
  .append('tr');

  row.selectAll('td').data(function(d) {
    var link = '<a class="nio-link" href=' + d.html_url + '>' + d.name + '</a>';
    var created = moment(d.created_at).format('MMM YYYY');
    var updated = moment(d.updated_at).format('MMM YYYY');
    var nio2 = d.default_branch === 'nio2';
    nio2 = nio2 ? '<div class="check-mark">\u2713<\div>' : '';
    return [link, nio2, d.description, created, updated];
  })
  .enter()
  .append('td')
  .html(function(d) {
    return d;
  });

  rows.exit();
}

function renderTable(data) {
  var app = d3.select('#app');
  var repoTable = app.append('table').classed('nio-table nio-table--striped', true);
  var tableBody = repoTable.append('tbody');

  var tableHeader = repoTable.append('thead').append('tr');
  var blockHeader = tableHeader.append('th').html('Block')
    .style('cursor', 'pointer')
    .on('click', function() {
      ascending = sortedBy === 'name' ? !ascending : false;
      renderRows(data, tableBody, 'name', ascending);
      toggleClasses(blockHeader, ascending);
    });
  appendSortArrows(blockHeader);

  var defaultHeader = tableHeader.append('th').html('2.0')
    .style('cursor', 'pointer')
    .on('click', function() {
      ascending = sortedBy === 'default_branch' ? !ascending : true;
      renderRows(data, tableBody, 'default_branch', ascending);
      toggleClasses(defaultHeader, ascending);
    });
  appendSortArrows(defaultHeader);

  tableHeader.append('th').html('Description');

  var createdHeader = tableHeader.append('th').html('Created')
    .style('cursor', 'pointer')
    .on('click', function() {
      ascending = sortedBy === 'created_at' ? !ascending : true;
      renderRows(data, tableBody, 'created_at', ascending);
      toggleClasses(createdHeader, ascending);
    });
  appendSortArrows(createdHeader);

  var updatedHeader = tableHeader.append('th').html('Updated')
    .style('cursor', 'pointer')
    .on('click', function() {
      ascending = sortedBy === 'updated_at' ? !ascending : true;
      renderRows(data, tableBody, 'updated_at', ascending);
      toggleClasses(updatedHeader, ascending);
    });
  appendSortArrows(updatedHeader);

  renderRows(data, tableBody);

  return repoTable;
}

function toggleClasses(headerEl, ascending) {
  headerEl.classed({
    'up': ascending,
    'down': !ascending
  });
  d3.selectAll('text').style('color', '#9C9C9C');
  if (ascending) {
    headerEl.select('text:nth-child(1)').style('color', '#000');
  } else {
    headerEl.select('text:nth-child(2)').style('color', '#000');
  }
}

function appendSortArrows(headerEl) {
  headerEl.append('text')
    .style('font-family', 'FontAwesome')
    .style('font-size', '0.1em')
    .style('float', 'right')
    .text(sortDescUnicode)
    .classed('fa', true);
  headerEl.append('text')
    .style('font-family', 'FontAwesome')
    .style('font-size', '0.1em')
    .style('float', 'right')
    .text(sortAscUnicode)
    .classed('fa', true);
}

document.addEventListener('DOMContentLoaded', function init() {

  axios.get('//api.github.com/orgs/nio-blocks/repos?per_page=100')
  .then(function(response) {
    var data = response.data;
    // response.headers.link does not exist with fewer than 100 blocks
    if (response.headers.link) {
      var link_header = parse_link_header(response.headers.link);
      axios.get(link_header.next)
      .then(function(nextResponse) {
        var newData = nextResponse.data;
        link_header = parse_link_header(nextResponse.headers.link);
        data = data.concat(newData);
        renderTable(data);
      });
    }
    else {
      renderTable(data);
    }
  })
  .catch(function(response) {
    console.log('error connecting to github api');
  });
});
