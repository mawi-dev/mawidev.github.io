document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

	var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {
      // specify options here
    });

	var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      // specify options here
    });
  });