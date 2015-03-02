var divSide = document.getElementById('sidebar');
divSide.innerHTML = 	'' +
	'<div class="header">' +
				'<center><img src="img/photo.jpg" class="photo"/></center>' +
				'Jack Jamieson' +
				'<div id="nav">' +

				'</div>' +

			'</div>' +
	'';


var divNav = document.getElementById('nav');
divNav.innerHTML = 	'' +
	'&#8594; <a href="http://www.jackjamieson.me">About</a><br>' +
	'&#8594; <a href="resume.pdf">Resume</a><br>' +
	'&#8594; <a href="projects.html">Projects</a><br>' +
    '<div id="logos"><a href="https://github.com/jackjamieson" class="imga"><img src="img/git.png"/></a> ' + ' <a href="https://www.linkedin.com/pub/jack-jamieson/3a/256/367"  class="imga"><img src="img/in.png"/></a> '+ ' <a href="https://twitter.com/jamieson_jack"  class="imga"><img src="img/tw.png"/></a></div>' ;


//Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40920141-1', 'auto');
  ga('send', 'pageview');
