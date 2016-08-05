
//Parse cookies to object
var cookies = {};
var cookiesArray = document.cookie.split(';');
cookiesArray.map(function(cookie){
    cookie = cookie.trim().split(/\=/gi)
    cookies[cookie[0]] = cookie[1];
});
