let currentIndex = 0;
	const slides = document.querySelector('.slides');
	const totalSlides = document.querySelectorAll('.slide').length;

	function showSlide(index) {
		const offset = -index * 100; // Move the slides left
		slides.style.transform = `translateX(${offset}%)`;
	}

	function nextSlide() {
		currentIndex++;
		if (currentIndex >= totalSlides) {
			slides.style.transition = 'none'; // Disable transition
			currentIndex = 0; // Reset to first slide
			showSlide(currentIndex); // Immediately show first slide
			setTimeout(() => {
				slides.style.transition = 'transform 0.5s ease'; // Re-enable transition
				currentIndex++; // Move to the next slide
				showSlide(currentIndex);
			}, 50); // Small timeout to allow for transition to take effect
		} else {
			showSlide(currentIndex);
		}
	}

	setInterval(nextSlide, 3000); // Change slide every 3 seconds





	const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq, index) => {
	faq.addEventListener('click', () => {
		const answer = document.querySelectorAll('.answer')[index];
		const toggleIcon = faq.querySelector('.toggle-icon');

		if (answer.style.display === 'block') {
			answer.style.display = 'none';
			toggleIcon.textContent = '+';
		} else {
			answer.style.display = 'block';
			toggleIcon.textContent = '−';
		}
	});
});