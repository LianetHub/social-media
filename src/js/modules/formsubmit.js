export const formSubmit = () => {


	const forms = document.querySelectorAll('form');

	forms.forEach(form => {
		form.addEventListener('submit', formSend);
	})

	async function formSend(e) {
		const form = e.target;
		e.preventDefault();

		let formData = new FormData(form);

		// for(let [name, value] of formData) {
		// 	console.log(`${name} = ${value}`); 
		//   }

		let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('succes');
						if (form.classList.contains('popup__form')) {
							form.innerHTML = `
							<div class="form__succes">
								<div class="form__title form__title-lg">
									Отправлено
								</div>
								<div class="form__info">
									Ожидайте, скоро с вами свяжется наш специалист 
								</div>
								<div class="form__btns">
									<button type="button" class="popup__close btn btn-green btn-sm btn-mw">Закрыть</button>
								</div>
							</div>
							`
						}

					} else {
						console.log('fail');
					}
				}
			}
			xhr.open('POST', 'sendmail.php', true);

			xhr.send(formData);

			form.reset();
	}







}
