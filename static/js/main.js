document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

	var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {});

	var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

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

function setColorScheme(scheme) {
	var body = document.querySelector('body');
	var icon = document.getElementsByName('dark_toggle_icon');
	switch(scheme){
	  case 'dark':
		body.classList.add('dark');
		body.classList.remove('light');

		localStorage.setItem('mode', 'dark');

		icon[0] = 'light_mode';
		
		break;
	  case 'light':
		body.classList.remove('dark');
		localStorage.setItem('mode', 'light');

		icon[0] = 'dark_mode';
		break;
	  default:
		body.classList.remove('dark');
		localStorage.setItem('mode', 'light');

		icon[0] = 'dark_mode';
		break;
	}
  }

function getPreferredColorScheme() {
	// if the user overrides to system default
	//var savedColorScheme = localStorage.getItem('mode');
	//if (savedColorScheme) {
	//	return savedColorScheme;
	//}

	if (window.matchMedia) {
	  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
		return 'dark';
	  } else {
		return 'light';
	  }
	}
	return 'light';
}

// adding event listener
function updateColorScheme(){
	preferred = getPreferredColorScheme();
    setColorScheme(preferred);
	console.log("preferred = " + preferred);
}

if(window.matchMedia){
	var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
	colorSchemeQuery.addEventListener('change', updateColorScheme);
}

updateColorScheme();