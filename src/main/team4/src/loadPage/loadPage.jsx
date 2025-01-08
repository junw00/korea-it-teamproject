import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmail, setUserCode, setUserPassword, setUserTel, setUsername } from "../stores/authAction";


// 새로고침이나 페이지 이동한 경우 유저 정보 가져오기
const token = localStorage.getItem('jwtToken')

export const loadPage = async(token, dispatch) => {
    try {
        const response = await axios.get("/loadPage", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.status == 200) {
            dispatch(setEmail(response.data.data.user_email))
            dispatch(setUserCode(response.data.data.user_code))
            dispatch(setUsername(response.data.data.user_name))
            dispatch(setUserTel(response.data.data.user_tel))
            dispatch(setUserPassword(response.data.data.user_password))
        } else {
            throw new Error("사용자 정보를 가져오는데 실패했습니다.")
        }
    } catch (error) {
        throw new Error(`사용자 정보를 가져오는 도중 에러: ${error.message}`)
    }
}