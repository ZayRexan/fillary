export function initDrag() {
	const dropZone = document.getElementById('drop-zone');
	const fileInput = document.getElementById('file-upload');

	// функция для обновления текста
	function updateLabel(files) {
		if (files.length > 0) {
			const names = Array.from(files)
				.map((f) => f.name)
				.join(', ');
			dropZone.textContent = 'Выбраны файлы: ' + names;
		} else {
			dropZone.textContent = 'Перетяните сюда или выберите файл(ы)';
		}
	}

	// отменяем дефолт браузера
	['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
		dropZone.addEventListener(eventName, (e) => {
			e.preventDefault();
			e.stopPropagation();
		});
	});

	// дроп файлов
	dropZone.addEventListener('drop', (e) => {
		const files = e.dataTransfer.files;
		fileInput.files = files; // вставляем в input
		updateLabel(files);
	});

	// выбор файлов через input
	fileInput.addEventListener('change', () => {
		updateLabel(fileInput.files);
	});
}
