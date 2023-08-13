import styles from './EditCanvas.module.scss'
// import QuestionTitle from "../../../components/QuestionComponents/QuestionTitle/component";
// import QuestionInput from "../../../components/QuestionComponents/QuestionInput/component";
import {FC} from "react";
import {Spin} from "antd";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import {getComponentConfByType} from '../../../components/QuestionComponents'
import {changeSelectedId, ComponentInfoType} from "../../../store/componentsReducer";
import {useDispatch} from "react-redux";
import classNames from 'classnames';
import useBindKeyPress from "../../../hooks/useBindKeyPress";

type PropsType = {
    loading:boolean
}
function genComponent(componentInfo:ComponentInfoType){
    const {type, props} = componentInfo
    const componentConfig = getComponentConfByType(type)
    if(componentConfig == null)
        return null;
    const {Component} = componentConfig
    return <Component {...props}/>
}


const EditCanvas:FC<PropsType> = ({loading}) =>{

    const {componentList,selectedId} = useGetComponentInfo()
    console.log(componentList)
    const dispatch = useDispatch()
    const handleClick = (e:MouseEvent,id:string)=>{
        e.stopPropagation()
        dispatch(changeSelectedId(id))
    }
    // 绑定快捷键
    useBindKeyPress();
    if(loading){
        return <div style={{textAlign:'center',marginTop:'24px'}}>
            <Spin/>
        </div>
    }

    return (
        <div className={styles.canvas}>
            {
                componentList.filter(c=>!c.isHidden).map(c=>{
                    const {fe_id, isLocked} = c
                    // 拼接className
                    const componentCanvasDefault = styles.componentCanvas;
                    const selectedClassName =styles.selected;
                    const lockedName = styles.locked
                    const wrapperClassName = classNames({
                        [componentCanvasDefault]:true,
                        [selectedClassName]:fe_id === selectedId,
                        [lockedName]:isLocked,
                    })


                    return (
                        <div key={fe_id} className={wrapperClassName} onClick={(e)=>handleClick(e,fe_id)}>
                            <div className={styles.inputComponent}>
                                {genComponent(c)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        // <>
        //     <div className={styles.canvas}>
        //         <div className={styles.componentCanvas}>
        //             <QuestionTitle></QuestionTitle>
        //         </div>
        //         <div className={styles.componentCanvas}>
        //                 <div className={styles.inputComponent}>
        //                     <QuestionInput></QuestionInput>
        //                 </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default EditCanvas