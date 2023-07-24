import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import {getComponentConfByType,ComponentPropsType} from "../../../components/QuestionComponents";
import {useDispatch} from "react-redux";
import {changeComponentProps} from "../../../store/componentsReducer";

const NoProps = ()=>{
    return <div style={{textAlign:"center"}}>未选中组件</div>
}
const RightProp = () =>{
    const dispatch = useDispatch()
    const {selectedComponent} = useGetComponentInfo()
    if(selectedComponent == null)
        return <NoProps/>
    const {type, props} = selectedComponent
    const component = getComponentConfByType(type)
    if(component == null)
        return <NoProps/>
    const {PropComponent} = component
    const changeProps = (newProps:ComponentPropsType)=>{
        if(selectedComponent == null) return
        const {fe_id} = selectedComponent
        // console.log(newProps)
        dispatch(changeComponentProps({fe_id, newProps}))
    }
    return (
        <PropComponent {...props} onChange={changeProps}/>
    )
}

export default RightProp