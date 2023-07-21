import styles from './common.module.scss'
import QuestionCard from "../../components/QuestionCard";
import {Typography, Empty, Spin} from 'antd'
import ListSearch from "../../components/ListSearch";
import useLoadQuestionList from "../../hooks/useLoadQuestionList";
import ListPagination from "../../components/ListPagination";
function Star(){

    const {data={}, loading} = useLoadQuestionList({isStar:true})
    const {list=[] , total=0} = data
    const {Title} = Typography
    return <>
        <div className={styles.header}>
            <div className={styles.left}><Title level={3}>星标问卷</Title></div>
            <div className={styles.right}><ListSearch/></div>
        </div>
        {loading && <div style={{textAlign:"center"}}><Spin size="large" /></div>}
        <div className={styles.content}>
            {!loading && list.length==0 && <Empty description="暂无数据"/>}
            {list.map((q:any) => {
                const { _id } = q
                return <QuestionCard key={_id} {...q}/>
            })}
        </div>
        <div className={styles.footer}>
            <ListPagination total={total}/>
        </div>
    </>
}
export default Star
