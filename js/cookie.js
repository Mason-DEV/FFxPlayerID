function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function scores() {
    for (var s = 1; s < 11; s++) {
        var time = localStorage.getItem("TIME_" + s);
        var clicks = localStorage.getItem("CLICKS_" + s);
        var acc = localStorage.getItem("ACC_" + s);
        createCookie("TIME_" + s, time + " sec");
        createCookie("CLICKS_" + s, clicks);
        createCookie("ACC_" + s, acc + "%");
    }
}

function createCookie(name, value) {
    document.cookie = escape(name) + "=" + escape(value) + "; path=/";
}