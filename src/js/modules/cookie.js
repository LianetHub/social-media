export const cookies = () => {

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options) {
        options = options || {};
        let expires = options.expires;
        if (typeof expires == "number" && expires) {
            let d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        let updatedCookie = name + "=" + value;
        for (let propName in options) {
            updatedCookie += "; " + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    }

    function deleteCookie(name) {
        setCookie(name, "", {
            expires: -1
        })
    }

    let noticed = getCookie('cookie-block');

    if (typeof (noticed) == 'undefined' || noticed != 1) {

        document.querySelector('.cookie-block').classList.remove('hidden');

        document.querySelector('.btn-cookie').addEventListener('click', () => {
            setCookie('cookie-block', 1);
            document.querySelector('.cookie-block').classList.add('hide');
        });

        document.querySelector('.btn-close-cookie').addEventListener('click', () => {
            document.querySelector('.cookie-block').classList.add('hide');
        });

    }

}

