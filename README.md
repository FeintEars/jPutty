jPutty (jQuery plugin)
=================
jPutty is a jQuery plugin for easy static page-proof.

You can design various responsive web-pages using JavaScript. Turns out it's pretty easy. For example, responsive design with two fixed columns:

	$(window).readyresize(function(width, height) {
		if(width < 1000) width = 1000;
		if(height < 500) height = 500;
			
		$('#header').putty('xysize', 0, 0, width, 150);
		$('#sideLeft').putty('xysize', 0, 150, 250, height - 300);
		$('#content').putty('xysize', width/2 - 250, 150, 500, height - 300);
		$('#sideRight').putty('xysize', width - 250, 150, 250, height - 300);
		$('#footer').putty('xysize', 0, height - 150, width, 150);
	});

---
	
	<body>
		<header id="header">
			<strong>Header:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor. Praesent dictum, libero ut tempus dictum, neque eros elementum mauris, quis mollis arcu velit ac diam. Etiam neque. Quisque nec turpis. Aliquam arcu nulla, dictum et, lacinia a, mollis in, ante. Sed eu felis in elit tempor venenatis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ultricies porttitor purus. Proin non tellus at ligula fringilla tristique. Fusce vehicula quam. Curabitur vel tortor vitae pede imperdiet ultrices. Sed tortor.
		</header>
		<aside id="sideLeft">
			<strong>Left Sidebar:</strong> Integer velit. Vestibulum nisi nunc, accumsan ut, vehicula sit amet, porta a, mi. Nam nisl tellus, placerat eget, posuere eget, egestas eget, dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In elementum urna a eros. Integer iaculis. Maecenas vel elit.
		</aside>
		<div id="content">
			<strong>Content:</strong> Sed placerat accumsan ligula. Aliquam felis magna, congue quis, tempus eu, aliquam vitae, ante. Cras neque justo, ultrices at, rhoncus a, facilisis eget, nisl. Quisque vitae pede. Nam et augue. Sed a elit. Ut vel massa. Suspendisse nibh pede, ultrices vitae, ultrices nec, mollis non, nibh. In sit amet pede quis leo vulputate hendrerit. Cras laoreet leo et justo auctor condimentum. Integer id enim. Suspendisse egestas, dui ac egestas mollis, libero orci hendrerit lacus, et malesuada lorem neque ac libero. Morbi tempor pulvinar pede. Donec vel elit.
		</div>
		<aside id="sideRight">
			<strong>Right Sidebar:</strong> Integer velit. Vestibulum nisi nunc, accumsan ut, vehicula sit amet, porta a, mi. Nam nisl tellus, placerat eget, posuere eget, egestas eget, dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In elementum urna a eros. Integer iaculis. Maecenas vel elit.
		</aside>
		<footer id="footer">
			<strong>Footer:</strong> Mus elit Morbi mus enim lacus at quis Nam eget morbi. Et semper urna urna non at cursus dolor vestibulum neque enim. Tellus interdum at laoreet laoreet lacinia lacinia sed Quisque justo quis. Hendrerit scelerisque lorem elit orci tempor tincidunt enim Phasellus dignissim tincidunt. Nunc vel et Sed nisl Vestibulum odio montes Aliquam volutpat pellentesque. Ut pede sagittis et quis nunc gravida porttitor ligula.
		</footer>
	</body>

Licence
=================
jPutty licensed under the [MIT](http://opensource.org/licenses/MIT)