import {useSelector} from "react-redux";
import {StateType} from "../store";
import {UserStateType} from "../store/userReducer";

// 用 userSelector 获取username数据
function useGetUserInfo(){
    const {username} = useSelector<StateType>(state=>state.user) as UserStateType
    return {username}
}

export default useGetUserInfo