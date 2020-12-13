import itemsElement from './menu.json';
import itemsTemplate from './templates/templates.hbs';
import './switchTheme'
import './styles.css';

const markup = itemsTemplate(itemsElement)
const menuRef = document.querySelector('.js-menu')
menuRef.insertAdjacentHTML('beforeend', markup)