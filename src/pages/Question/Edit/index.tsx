// import {useParams} from 'react-router-dom'
// import useLoading from "../../hooks/useLoading";
import styles from './Edit.module.scss'
import EditCanvas from "./EditCanvas";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
function Edit(){

    // return <div>
    //     {loading?<p>加载中</p>:<p>{JSON.stringify(questionData)}</p>}
    // </div>
    // const {loading, questionData}  = useLoading()
    const {loading} = useLoadQuestionData()
    return (
        <div className={styles.container}>
            <div style={{backgroundColor:'#fff'}}>Header</div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>left</div>
                    <div className={styles.main}>
                        <div className={styles.canvasWrapper}>
                            <EditCanvas loading={loading}></EditCanvas>
                        </div>
                    </div>
                    <div className={styles.right}>right</div>
                </div>
            </div>
        </div>
    )
}
export default Edit