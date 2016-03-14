var moment = require('moment');

module.exports = {
  moment: (dt) => moment(dt, 'YYYYMMDD').format('LL'),
  'blog-list': require('./hbs-blog-list')
}
