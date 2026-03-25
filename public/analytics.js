window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-KM75GGR3XC');
        
// PWA Service worker 
if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("./sw.js");
}
