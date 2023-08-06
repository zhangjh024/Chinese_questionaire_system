import {Button, Space, Tooltip} from "antd";
import {DeleteOutlined } from '@ant-design/icons'
import {useDispatch} from "react-redux";
// 删除选中的组件,在store中删除,通过selectedId 删除组件
import {removeSelectedComponent} from "../../../store/componentsReducer";

const EditToolBar = () => {
    const dispatch = useDispatch()
    const handleDelete = () =>{
        dispatch(removeSelectedComponent())
    }
    return (
        <>
            <Space>
                <Tooltip title="删除">
                    <Button shape='circle' icon={<DeleteOutlined/>} onClick={handleDelete}></Button>
                </Tooltip>
            </Space>
        </>
    )
}

export default EditToolBar