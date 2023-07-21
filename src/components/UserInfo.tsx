import {Link, useNavigate} from 'react-router-dom'
// import {useRequest} from "ahooks";
// import {getUserInfoService} from "../services/user";
import {UserOutlined} from '@ant-design/icons'
import {Button} from "antd";
import {removeToken} from "../utils/user_token";
import useGetUserInfo from "../hooks/useGetUserInfo";
import {useDispatch} from "react-redux";
import {logoutReducer} from "../store/userReducer";

function UserInfo(){
    //对于已经登陆的用户，展示点什么

    // const {data} = useRequest(getUserInfoService)
    // const {username} = data ||{}
    const {username} = useGetUserInfo()
    const dispatch = useDispatch()
    const nav = useNavigate()
    const logout = ()=>{
        dispatch(logoutReducer())   //退出清空了redux中的数据
        removeToken()
        nav('/')
    }
    const UserFragment = (
        <>
            <span style={{color:'#e8e8e8'}}>
               <UserOutlined/>
                {username}
            </span>
            <Button type="link" onClick={logout}>退出</Button>
        </>
    )
    return(<div>
        {username?UserFragment:<Link to='/login'>登陆</Link>  }
    </div>)
}

export default UserInfo