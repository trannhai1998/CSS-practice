let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function () {
	showSlider('next');
};
prevDom.onclick = function () {
	showSlider('prev');
};

let timeRunning = 2000;
let runTimeout;
let timeAutoNext = 7000;
let runTimeoutAuto 

function showSlider(type) {
	let itemSlider = document.querySelectorAll('.carousel .list .item');
	let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

	if (type === 'next') {
		listItemDom.appendChild(itemSlider[0]);
		thumbnailDom.appendChild(itemThumbnail[0]);
		carouselDom.classList.add('next');
	}

	if (type === 'prev') {
		let positionLastItem = itemSlider.length - 1;
		listItemDom.prepend(itemSlider[positionLastItem]);
		thumbnailDom.prepend(itemThumbnail[positionLastItem]);
		carouselDom.classList.add('prev');
	}

	if (runTimeout) {
		clearTimeout(runTimeout);
	}

	runTimeout = setTimeout(function () {
		carouselDom.classList.remove(type == 'next' ? 'next' : 'prev');
	}, timeRunning);

	clearTimeout(runTimeoutAuto);
	runTimeoutAuto = setTimeout(function () {
		nextDom.click();
	}, timeAutoNext);
}
