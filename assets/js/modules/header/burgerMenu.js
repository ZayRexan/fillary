import { burgerMenuBtn } from '../vars.js';
import { BURGER_MENU, toggleBurgerMenuVisibility, toggleBurgerMenu } from '../helpers.js';

const burgerMenu = () => {
	toggleBurgerMenuVisibility(BURGER_MENU.SHOW);
};

export const initBurgerMenu = () => {
	document.addEventListener('DOMContentLoaded', burgerMenu);

	window.addEventListener('resize', burgerMenu);

	burgerMenuBtn.addEventListener('click', () => {
		toggleBurgerMenu();
	});
};
