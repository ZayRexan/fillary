/* eslint-disable no-empty */
import { initHeader } from './modules/header/header.js';
import { initSwiper } from './scripts/initSwiper.js';
import { initDrag } from './scripts/initDrag.js';
import { initModal } from './scripts/initModal.js';

initHeader();
initSwiper();
try {
	initDrag();
} catch {}
initModal();
