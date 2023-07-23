import {Typography} from "antd";
import {componentConfGroup,ComponentConfType} from '../../../components/QuestionComponents'
import styles from './ComponentLib.module.scss'
import {useDispatch} from "react-redux";
import {addComponent} from "../../../store/componentsReducer";
import {nanoid} from "@reduxjs/toolkit";
const {Title} = Typography
function genComponent(c:ComponentConfType,dispatch:any){
    const { Component, type,defaultProps,title} = c
    const handleClick = () =>{
        dispatch(addComponent({
            fe_id:nanoid(),
            type,
            title,
            props:defaultProps
        }))
    }
    return <div  key={type} className={styles.wrapper} onClick={handleClick}>
        <div className={styles.component}>
            <Component/>
        </div>
    </div>
}
const ComponentLib = ()=>{
    const dispatch = useDispatch()
    return(
        <>
            {
                componentConfGroup.map((group,index)=>{
                    const {groupId,groupName,components} = group
                    return (<div key={groupId}>
                        <Title
                            level={3}
                            style={{fontSize:'16px', marginTop:index>0?'20px':'0'}}
                        >{groupName}</Title>
                        <div>{components.map(c => genComponent(c,dispatch))}</div>
                    </div>)
                })
            }
        </>
    )
}
export default ComponentLib