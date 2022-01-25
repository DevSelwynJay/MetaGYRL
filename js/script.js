//FAQS
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

//JOIN NOW POP UP
var btn = document.querySelector("#join-now--popup-btn");
var btn2 = document.querySelector("#join-now--popup-btn2");
var backdrop = document.querySelector("#join-now--popup-backdrop");
var form = document.querySelector("#join-now--popup");
var body = document.querySelector("body");

btn.addEventListener('click', function() {
	if (form.classList.contains('open')) {
		form.classList.remove('open');
		backdrop.classList.remove('open');
		body.style.overflowY = "unset";
	} else {
		form.classList.add('open');
		backdrop.classList.add('open');
		body.style.overflowY = "hidden";
	}
});

btn2.addEventListener('click', function() {
	if (form.classList.contains('open')) {
		form.classList.remove('open');
		backdrop.classList.remove('open');
		body.style.overflowY = "unset";
	} else {
		form.classList.add('open');
		backdrop.classList.add('open');
		body.style.overflowY = "hidden";
	}
});

backdrop.addEventListener('click', function() {
	form.classList.remove('open');
	backdrop.classList.remove('open');
	body.style.overflowY = "unset";
});


//BURGER MENU
var burgerMenu = document.querySelector(".burger");
var closeMenu = document.querySelector(".close-btn");
var mobileMenuBody = document.querySelector(".mobile-menu--body");
var backDrop = document.querySelector(".mobile-menu--backdrop");

burgerMenu.addEventListener('click', function() {
	if (mobileMenuBody.classList.contains('show')) {
		mobileMenuBody.classList.remove('show');
		backDrop.classList.remove('show-backdrop');
		body.style.overflowY = "unset";
	} else {
		mobileMenuBody.classList.add('show');
		backDrop.classList.add('show-backdrop');
		body.style.overflowY = "hidden";
	}
});
backDrop.addEventListener('click', function() {
	burgerMenu.classList.remove('cross');
	mobileMenuBody.classList.remove('show');
	backDrop.classList.remove('show-backdrop');
	body.style.overflowY = "unset";
});
closeMenu.addEventListener('click', function() {
	burgerMenu.classList.remove('cross');
	mobileMenuBody.classList.remove('show');
	backDrop.classList.remove('show-backdrop');
	body.style.overflowY = "unset";
});


//AUTOMATICALLY CLOSE SIDEBAR AFTER SELECTING POPUP FORM
var btntest = document.querySelector(".join-now--popup-btn");
btntest.addEventListener('click', function() {
	mobileMenuBody.classList.remove('show');
	burgerMenu.classList.remove('cross');
	body.style.overflowY = "unset";
	backDrop.classList.remove('show-backdrop');
});
var homeLink = document.querySelector(".home-link");
homeLink.addEventListener('click', function() {
	mobileMenuBody.classList.remove('show');
	burgerMenu.classList.remove('cross');
	body.style.overflowY = "unset";
	backDrop.classList.remove('show-backdrop');
});
var advantagesLink = document.querySelector(".advantages-link");
advantagesLink.addEventListener('click', function() {
	mobileMenuBody.classList.remove('show');
	burgerMenu.classList.remove('cross');
	body.style.overflowY = "unset";
	backDrop.classList.remove('show-backdrop');
});
var faqsLink = document.querySelector(".faqs-link");
faqsLink.addEventListener('click', function() {
	mobileMenuBody.classList.remove('show');
	burgerMenu.classList.remove('cross');
	body.style.overflowY = "unset";
	backDrop.classList.remove('show-backdrop');
});
var contactLink = document.querySelector(".contact-link");
contactLink.addEventListener('click', function() {
	mobileMenuBody.classList.remove('show');
	burgerMenu.classList.remove('cross');
	body.style.overflowY = "unset";
	backDrop.classList.remove('show-backdrop');
});


//NAVIGATION ACTIVE STATE BASED ON SCROLLING
var advantages = document.querySelector(".link-advantages");
var faqs = document.querySelector(".link-faqs");
var contact = document.querySelector(".link-contact");
var home = document.querySelector(".link-home");

window.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				if (id == "advantages") {
					advantages.classList.add('active');
					faqs.classList.remove('active');
					contact.classList.remove('active');
					home.classList.remove('active');
				} else if (id == "faqs") {
					advantages.classList.remove('active');
					faqs.classList.add('active');
					contact.classList.remove('active');
					home.classList.remove('active');
				} else if (id == "contact") {
					advantages.classList.remove('active');
					faqs.classList.remove('active');
					contact.classList.add('active');
					home.classList.remove('active');
				} else {
					advantages.classList.remove('active');
					faqs.classList.remove('active');
					contact.classList.remove('active');
					home.classList.add('active');
				}
			}
		});
	});
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
});


//NAVIGATION ACTIVE STATE BASED ON SCROLLING -- MOBILE
var advantages_mobile = document.querySelector(".link-adv");
var faqs_mobile = document.querySelector(".link-faqs");
var contact_mobile = document.querySelector(".link-contact");
var home_mobile = document.querySelector(".hero-link");

window.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				if (id == "advantages") {
					advantages_mobile.classList.add('active');
					faqs_mobile.classList.remove('active');
					contact_mobile.classList.remove('active');
					home_mobile.classList.remove('active');
				} else if (id == "faqs") {
					advantages_mobile.classList.remove('active');
					faqs_mobile.classList.add('active');
					contact_mobile.classList.remove('active');
					home_mobile.classList.remove('active');
				} else if (id == "contact") {
					advantages_mobile.classList.remove('active');
					faqs_mobile.classList.remove('active');
					contact_mobile.classList.add('active');
					home_mobile.classList.remove('active');
				} else {
					advantages_mobile.classList.remove('active');
					faqs_mobile.classList.remove('active');
					contact_mobile.classList.remove('active');
					home_mobile.classList.add('active');
				}
			} else {}
		});
	});
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
});