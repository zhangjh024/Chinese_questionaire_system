import styles from './EditCanvas.module.scss'
import QuestionTitle from "../../../components/QuestionComponents/QuestionTitle/component";
import QuestionInput from "../../../components/QuestionComponents/QuestionInput/component";
import {FC} from "react";
import {Spin} from "antd";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import {getComponentConfByType} from '../../../components/QuestionComponents'
import {ComponentInfoType} from "../../../store/componentsReducer";

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

    const {componentList} = useGetComponentInfo()
    console.log(componentList)
    if(loading){
        return <div style={{textAlign:'center',marginTop:'24px'}}>
            <Spin/>
        </div>
    }
    return (
        <div className={styles.canvas}>
            {
                componentList.map(c=>{
                    const {fe_id} = c
                    return (
                        <div key={fe_id} className={styles.componentCanvas}>
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