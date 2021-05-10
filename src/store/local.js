export default class Storage {
    static set(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    static get(key) {
        return this.toJson(localStorage.getItem(key));
    }
    static remove(key) {
        localStorage.removeItem(key);
    }
    static exists(key) {
        if (
            localStorage.getItem(key) &&
            localStorage.getItem(key) !== "undefined" &&
            localStorage.getItem(key) !== "null"
        ) {
            return true;
        }
        return false;
    }
    static reset() {
        localStorage.clear();
    }
    static toJson(str) {
        return JSON.parse(str + "");
    }
    static setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    static getCookie(cname) {
        const name = cname + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    static deleteAllCookies() {
        // document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    static get guard() {
        return this.exists('token')
    }
}
