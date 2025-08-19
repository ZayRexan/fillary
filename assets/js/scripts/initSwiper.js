import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initSwiper() {
	new Swiper('.level__slider', {
		modules: [Navigation],
		loop: true,
		slidesPerView: 1.2,
		centeredSlides: true,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			993: {
				slidesPerView: 2.2,
			},
			769: {
				slidesPerView: 1.5,
			},
		},
	});

	new Swiper('.events__slider', {
		modules: [Navigation],
		loop: false,
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			1201: {
				slidesPerView: 4,
			},
			993: {
				slidesPerView: 3,
			},
			769: {
				slidesPerView: 2,
			},
		},
	});

	const halls = document.querySelectorAll('.hall__slider');
	halls.forEach((hall) => {
		new Swiper(hall, {
			modules: [Navigation],
			slidesPerView: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	});

	new Swiper('.stock__slider', {
		modules: [Navigation],
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			1201: {
				slidesPerView: 4,
			},
			993: {
				slidesPerView: 3,
			},
			769: {
				slidesPerView: 2,
			},
		},
	});

	new Swiper('.dishes__slider', {
		modules: [Navigation],
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.dishes .swiper-button-next',
			prevEl: '.dishes .swiper-button-prev',
		},
	});

	new Swiper('.child__slider', {
		modules: [Navigation],
		loop: true,
		slidesPerView: 1.2,
		centeredSlides: true,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			993: {
				slidesPerView: 2.2,
			},
			769: {
				slidesPerView: 1.5,
			},
		},
	});
}
