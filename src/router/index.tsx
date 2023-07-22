import {createBrowserRouter} from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Regisiter from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import Notfound from "../pages/NotFound";
import ManageLayout from "../layouts/ManageLayout";
import List from "../pages/Manage/List";
import Star from "../pages/Manage/Star";
import Trash from "../pages/Manage/Trash";
import QuestionLayout from "../layouts/QuestionLayout";
import Index from "../pages/Question/Edit";
import Stat from "../pages/Question/Stat";
// ## 页面对应的路由
//
// - 首页 `/`
// - 登录 `/login`
// - 注册 `/register`
// - 问卷管理
// - 我的问卷 `/manage/list`
// - 星标问卷 `/manage/star`
// - 回收站 `/manage/trash`
// - 问卷详情
// - 编辑问卷 `/question/edit/:id` （动态路由）
//     - 问卷统计 `/question/stat/:id`
//     - 404

const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Regisiter/>
            },
            {
                path:'manage',
                element:<ManageLayout/>,
                children:[
                    {
                        path:'list',
                        element:<List/>
                    },
                    {
                        path:'star',
                        element: <Star/>
                    },
                    {
                        path:'trash',
                        element: <Trash/>
                    }
                ]
            },
            {
                path:'*',
                element:<Notfound/>
            }

        ]
    },
    {
        path:'question',
        element:<QuestionLayout/>,
        children:[
            {
                path:'edit/:id',
                element: <Index/>
            },
            {
                path: 'stat/:id',
                element: <Stat/>
            },

        ]
    }
])

export default router