import axios from 'axios';
import { USER } from './Url';

export const login = (refToken, userID) => {
    console.log(refToken);
    console.log(userID);
    localStorage.setItem("REFTOKEN", refToken);
    localStorage.setItem("USERID", userID);
};

export const logout = () => {
    localStorage.removeItem("REFTOKEN");
    localStorage.removeItem("USERID");
};

export const isLogin = () => {
    if (localStorage.getItem("REFTOKEN")) {
        return true;
    }
    return false;
};

export const getRefToken = () => {
    return localStorage.getItem("REFTOKEN");
};

export const getToken = async () => {
    try{
        const tokenRespon = await axios.post(USER + "token", {
            userID: getUserID(),
            refreshToken: getRefToken()
        });
        return tokenRespon.data.token;
    } catch(err){
        console.log(err.response.status);
        return err.response.status;
    }
};

export const getUserID = () => {
    return localStorage.getItem("USERID");
};