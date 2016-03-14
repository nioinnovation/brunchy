---
title: n.io Forms
_options:
  layout: app/layouts/article.static.hbs
---

Use the `.nio-form__text-field` class to style a text field.

<figure class="examples">
  <figcaption>A text field</figcaption>
  <input type="text" placeholder="username" class="nio-form__text-field" />
</figure>

Use the `.nio-form__button` class to style a button. You can group multiple items in the same row using the `.nio-form__row` class.

<figure class="examples">
  <figcaption>Grouping form elements into a row</figcaption>
  <div class="nio-form__row">
    <input type="text" placeholder="email" class="nio-form__text-field" />
    <button class="nio-form__button nio-button--danger" type="button">subscribe</button>
  </div>
</figure>

It is preferred to the HTML `placeholder` attribute to give inputs labels, however explicit `<label>` elements can be styled using the `.nio-form__label` class.

<figure class="examples">
  <figcaption>With an explicit label</figcaption>
  <label class="nio-form__label" for="text_field">Username</label>
  <input type="text" id="text_field" class="nio-form__text-field" />
</figure>

<figure class="examples">
  <figcaption>A login form</figcaption>
  <input type="text" id="username" placeholder="username" class="nio-form__text-field" />
  <input type="text" id="password" placeholder="password" class="nio-form__text-field" />
  <button type="button" id="text_field" class="nio-form__button nio-button--primary">login</button>
</figure>

<figure class="examples">
<figcaption>An example form</figcaption>

<fieldset>
<legend>Legend</legend>

<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.</p>

<form>

  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui.</p>

  <p><label for="text_field">Text Field:</label><br />
  <input type="text" id="text_field" /></p>

  <p><label for="text_area">Text Area:</label><br />
  <textarea id="text_area"></textarea></p>

  <p><label for="select_element">Select Element:</label><br />
    <select name="select_element">
    <optgroup label="Option Group 1">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </optgroup>
    <optgroup label="Option Group 2">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </optgroup>
  </select></p>

  <p><label for="radio_buttons">Radio Buttons:</label><br />
      <input type="radio" class="radio" name="radio_button" value="radio_1" /> Radio 1<br/>
      <input type="radio" class="radio" name="radio_button" value="radio_2" /> Radio 2<br/>
      <input type="radio" class="radio" name="radio_button" value="radio_3" /> Radio 3<br/>
  </p>

  <p><label for="checkboxes">Checkboxes:</label><br />
    <input type="checkbox" class="checkbox" name="checkboxes" value="check_1" /> Radio 1<br/>
      <input type="checkbox" class="checkbox" name="checkboxes" value="check_2" /> Radio 2<br/>
      <input type="checkbox" class="checkbox" name="checkboxes" value="check_3" /> Radio 3<br/>
  </p>

  <p><label for="password">Password:</label><br />
    <input type="password" class="password" name="password" />
  </p>

  <p><label for="file">File Input:</label><br />
    <input type="file" class="file" name="file" />
  </p>

  <p><input class="button" type="reset" value="Clear" /> <input class="button" type="submit" value="Submit" />
  </p>
</form>

</fieldset>
</figure>
