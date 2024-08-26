export const popup = () => {

	const popupLinks = document.querySelectorAll('[data-modal]');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll(".lock-padding");
	let unlock = true;
	const timeout = 300;

	popupLinks.forEach(popupLink => {
		popupLink.addEventListener("click", (e) => {
			e.preventDefault();
			const isParent = popupLink.dataset.modal === "back";
			const popupName = popupLink.getAttribute('href').replace("#", '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup, isParent);
		});
	});

	const popupCloseIcon = document.querySelectorAll('.modal__close');
	popupCloseIcon.forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			popupClose(el.closest('.modal'));
		});
	});

	function popupOpen(curentPopup, isParent) {
		if (curentPopup && unlock) {
			const popupActive = document.querySelector('.modal.open');

			if (popupActive) {
				if (isParent) {
					popupActive.classList.add('hidden');
				}
				if (!curentPopup.classList.contains('modal-video')) {
					popupClose(popupActive, false);
				}
			} else {
				bodyLock();
			}

			if (curentPopup.classList.contains('modal-video')) {
				curentPopup.querySelector('video').play();
			}

			curentPopup.classList.add('open');
			curentPopup.classList.remove('hidden');
			curentPopup.addEventListener('click', (e) => {
				if (e.target.classList.contains('modal')) {
					popupClose(e.target.closest('.modal'));
				}
			});
		}
	}


	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('open');

			if (popupActive.classList.contains('modal-video')) {
				popupActive.querySelector('video').pause();
			}

			const hiddenPopup = document.querySelector('.modal.open.hidden');
			if (hiddenPopup) {
				hiddenPopup.classList.remove('hidden');
			} else if (doUnlock) {
				bodyUnLock();
			}
		}
	}

	function applyPadding(paddingValue) {
		lockPadding.forEach(el => el.style.paddingRight = paddingValue);
		body.style.paddingRight = paddingValue;
	}

	function bodyLock() {
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		applyPadding(lockPaddingValue);
		body.classList.add('modal-lock');

		setUnlockTimeout();
	}

	function bodyUnLock() {
		setTimeout(() => applyPadding("0px"), timeout);
		body.classList.remove('modal-lock');
		setUnlockTimeout();
	}

	function setUnlockTimeout() {
		unlock = false;
		setTimeout(() => {
			unlock = true;
		}, timeout);
	}

	// Полифил для closest
	(function () {
		if (!Element.prototype.closest) {
			Element.prototype.closest = function (css) {
				let node = this;
				while (node && !node.matches(css)) {
					node = node.parentElement;
				}
				return node;
			};
		}
	})();

	// Полифил для matches
	(function () {
		if (!Element.prototype.matches) {
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();


}

