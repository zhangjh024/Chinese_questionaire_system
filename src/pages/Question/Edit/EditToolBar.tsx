import {Button, Space, Tooltip} from "antd";
import {DeleteOutlined } from '@ant-design/icons'
import {useDispatch} from "react-redux";
// 删除选中的组件,在store中删除,通过selectedId 删除组件
import {removeSelectedComponent, changeComponentHidden, toggleComponentLock} from "../../../store/componentsReducer";
import {EyeInvisibleOutlined, LockOutlined} from '@ant-design/icons'
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
const EditToolBar = () => {
    const dispatch = useDispatch()
    const {selectedId, selectedComponent} = useGetComponentInfo()
    const {isLocked} = selectedComponent || {}
    const handleDelete = () =>{
        dispatch(removeSelectedComponent())
    }
    const handleHidden = () =>{
        dispatch(changeComponentHidden({fe_id:selectedId,isHidden:true}))
    }
    const handleLock = () => {
        dispatch(toggleComponentLock({fe_id:selectedId}))
    }
    return (
        <>
            <Space>
                <Tooltip title="删除">
                    <Button shape='circle' icon={<DeleteOutlined/>} onClick={handleDelete}></Button>
                </Tooltip>
                <Tooltip title="隐藏">
                    <Button shape='circle' icon={<EyeInvisibleOutlined/>} onClick={handleHidden}></Button>
                </Tooltip>
                <Tooltip title="锁定">
                    <Button shape='circle'
                            type={isLocked?"primary":"default"}
                            icon={<LockOutlined/>}
                            onClick={handleLock}>

                    </Button>
                </Tooltip>
            </Space>

        </>
    )
}

export default EditToolBar