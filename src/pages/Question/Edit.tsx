// import {useParams} from 'react-router-dom'
// import useLoading from "../../hooks/useLoading";
import styles from './Edit.module.scss'
function Edit(){
    // const {loading, questionData}  = useLoading()
    // return <div>
    //     {loading?<p>加载中</p>:<p>{JSON.stringify(questionData)}</p>}
    // </div>

    return (
        <div className={styles.container}>
            <div style={{backgroundColor:'#fff'}}>Header</div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>left</div>
                    <div className={styles.main}>
                        <div className={styles.canvasWrapper}>
                            <div style={{height:'900px'}}>测试滚动</div>
                        </div>
                    </div>
                    <div className={styles.right}>right</div>
                </div>
            </div>
        </div>
    )
}
export default Edit