// authAction.js

import axios from 'axios';

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token
});

export const setEmail = (user_email) => ({
    type: 'SET_USER_EMAIL',
    payload: user_email
})

export const setUsername = (user_name) => ({
    type: 'SET_USER_NAME',
    payload: user_name
    });

export const setUserPassword = (user_password) => ({
    type: 'SET_USER_PASSWORD',
    payload: user_password
})

export const setUserCode = (user_code) => ({
    type: 'SET_USER_CODE',
    payload: user_code
})

export const setUserTel = (user_tel) => ({
    type: 'SET_USER_TEL',
    payload: user_tel
})

export const login = (email, pw, navigate) => async (dispatch) => {
    try {
    const response = await axios.post('/signin', { email, password: pw });
    if (response.data.data === null) {
        alert('아이디, 비밀번호를 확인해주세요');
    } else {
        console.log(typeof(response.data.data.token))
        localStorage.setItem('jwtToken', response.data.data.token);
        dispatch(setToken(response.data.data.token));
        dispatch(setUsername(response.data.data.user_name));
        dispatch(setUserCode(response.data.data.user_code));
        dispatch(setUserPassword(response.data.data.user_password));
        dispatch(setUserTel(response.data.data.user_tel));
        dispatch(setEmail(response.data.data.user_email));
        navigate("/"); 
    }
    } catch (error) {
    console.error(error);
    }
};
