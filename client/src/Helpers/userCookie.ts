import { Cookies } from 'react-cookie';
import { COOKIES } from '../Constants/cookies';

const cookies = new Cookies();

const userCookie = {
    set name(name) {
        cookies.set(COOKIES.NAME, name);
    },
    get name() {
        return cookies.get(COOKIES.NAME);
    },
    set userId(id) {
        cookies.set(COOKIES.ID, id);
    },
    get userId() {
        return cookies.get(COOKIES.ID);
    },
    set userName(userName) {
        cookies.set(COOKIES.USERNAME, userName);
    },
    get userName() {
        return cookies.get(COOKIES.USERNAME);
    },
    set userLanguage(userLanguage) {
        cookies.set(COOKIES.LANGUAGE, userLanguage);
    },
    get userLanguage() {
        return cookies.get(COOKIES.LANGUAGE);
    },

    cleanCookies() {
        cookies.remove(COOKIES.ID);
        cookies.remove(COOKIES.NAME);
        cookies.remove(COOKIES.USERNAME);
        cookies.remove(COOKIES.LANGUAGE);
    },
};

export default userCookie;
