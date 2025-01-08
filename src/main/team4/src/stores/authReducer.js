// authReducer.js

const initialState = {
    token: localStorage.getItem('jwtToken') || null,
    user_name: null,
    user_code: -1,
    user_password: '',
    user_tel: '',
    user_email: ''
    };
    
    const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
        return {
            ...state,
            token: action.payload,
        };
        case 'SET_USER_NAME':
        return {
            ...state,
            user_name: action.payload,
        }
        case 'SET_USER_CODE':
        return {
            ...state,
            user_code: action.payload,
        }
        case 'SET_USER_PASSWORD':
        return {
            ...state,
            user_password: action.payload
        }
        case 'SET_USER_TEL':
        return {
            ...state,
            user_tel: action.payload
        }
        case 'SET_USER_EMAIL':
        return {
            ...state,
            user_email: action.payload
        }
        default:
        return state;
    }
    };
    
    export default authReducer;
    