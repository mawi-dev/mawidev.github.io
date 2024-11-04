document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

	var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {});

	var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

	// sets default do dark mode
	localStorage.setItem('mode', 'dark');

});

function toggle_darkmode(elem) {

	var body = document.querySelector('body')
	_mode = localStorage.getItem('mode');

	if (_mode == 'dark') {
		body.classList.add('light');
		body.classList.remove('dark');
		localStorage.setItem('mode', 'light');
		elem.childNodes[0].innerHTML = 'dark_mode';
	} else if (_mode == 'light') {
		body.classList.add('dark');
		body.classList.remove('light');
		localStorage.setItem('mode', 'dark');
		elem.childNodes[0].innerHTML = 'light_mode';
	}
}