// import {useParams} from 'react-router-dom'
// import useLoading from "../../hooks/useLoading";
import styles from './Edit.module.scss'
import EditCanvas from "./EditCanvas";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
import {useDispatch} from "react-redux";
import {changeSelectedId} from "../../../store/componentsReducer";
import LeftPanel from './LeftPanel'
import RightPanel from "./RightPanel";
import EditHeader from "./EditHeader";
function Edit(){

    // return <div>
    //     {loading?<p>加载中</p>:<p>{JSON.stringify(questionData)}</p>}
    // </div>
    // const {loading, questionData}  = useLoading()
    const {loading} = useLoadQuestionData()
    const dispatch = useDispatch()
    const clearSelectedId = ()=>{
        dispatch(changeSelectedId(""))
    }
    return (
        <div className={styles.container}>
            <div style={{backgroundColor:'#fff'}}><EditHeader/></div>

            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <LeftPanel/>
                    </div>
                    <div className={styles.main} onClick={clearSelectedId}>
                        <div className={styles.canvasWrapper}>
                            <EditCanvas loading={loading}></EditCanvas>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <RightPanel/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit
