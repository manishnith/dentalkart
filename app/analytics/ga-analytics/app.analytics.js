	var googleAnalytics = function(){
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', googleAnalyticsId , 'auto');
		ga('send', 'pageview');

		/* fire Google-analytics  */
		$('a.analytics').on('click', function(evt){
			var _this= $(this);
			ga("send", "event", _this.data("source"), _this.data("ga-type"), _this.data("title") );
		});
	};
	
