function myf() {
	var url = window.top.getBrowser().selectedBrowser.contentWindow.location.href;
	target = url + (/\?./.test(url) 
		? "&XDEBUG_SESSION_START=1" 
		: /\?$/.test(url)
			? "XDEBUG_SESSION_START=1"
			: "?XDEBUG_SESSION_START=1");
	content.wrappedJSObject.location=target;
}
