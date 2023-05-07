const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const navLinks = document.querySelectorAll('.nav__link');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    navLinks.forEach(item => {
		item.addEventListener('click', () => {
            navBtn.classList.toggle('is-active');
			navMobile.classList.remove('nav-mobile--active');
           
		})
	})
}



const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}


navBtn.addEventListener('click', handleNav);
handleCurrentYear();