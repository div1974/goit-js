import './styles.css';
import menu from './menu.json';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const Handlebars = require('handlebars');
const template = Handlebars.compile(`
{{#each this}}
<li class="menu__item">
  <div class="card">
    <img
      src={{image}}
      alt={{name}}
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">{{name}}</h2>
      <p class="card__price">
        <i class="material-icons">
          monetization_on
        </i>
        {{price}} кредитов
      </p>

      <p class="card__descr">
        {{description}}
      </p>

      <ul class="tag-list">
      {{#each ingredients}}
        <li class="tag-list__item">{{this}}</li>
        
        {{/each}}
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon">
        shopping_cart
      </i>
      В корзину
    </button>
  </div>
  </li>
  {{/each}}`);


const menuItems = template(menu);
document.querySelector('.js-menu').insertAdjacentHTML('beforeend', menuItems);

document.body.classList.add(Theme.LIGHT);

const changeThemeBtn = document.querySelector('.js-switch-input');
changeThemeBtn.checked = false;
const activeTheme = localStorage.getItem('checkedTheme');
// console.log(activeTheme);
if (activeTheme) {
  if (activeTheme ==='DARK') {
    changeThemeBtn.checked = true;
    if (document.body.classList.contains(Theme.LIGHT)) {
      document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    }
  }
}

changeThemeBtn.addEventListener('change', e => {
  

  if (changeThemeBtn.checked){
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('checkedTheme', 'DARK');
    
  } else if (!changeThemeBtn.checked){
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('checkedTheme', 'LIGHT');
    
  }
});
