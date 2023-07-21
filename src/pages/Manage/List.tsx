import QuestionCard from "../../components/QuestionCard";
import styles from './common.module.scss'
import {Alert, Empty, Typography} from 'antd'
import ListSearch from "../../components/ListSearch";
import {Spin} from 'antd'
import useLoadQuestionList from "../../hooks/useLoadQuestionList";
import {useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useDebounceFn, useRequest, useUnmountedRef} from "ahooks";
import {getQuetionListService} from "../../services/qustion";
function List(){

    // const {data={},loading} = useLoadQuestionList({})
    // const {list=[], total=0} = data
    // console.log(total)
    // 问卷列表数据
    // const [questionList, setQuestionList] = useState([])
    // const [total, setTotal] = useState(0)
    // useEffect(()=>{
    //     async function load(){
    //         const data = await getQuetionListService()
    //         const {list=[] ,total=0} = data
    //         setQuestionList(list)
    //         setTotal(total)
    //     }
    //     load()
    // },[])
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [searchParams] = useSearchParams()
    const haveMoreData = total > list.length
    const containerRef = useRef<HTMLDivElement>(null)
    const keyword = searchParams.get('keyword')||''
    useEffect(()=>{
        setList([])
        setPage(1)
        setTotal(0)
    },[keyword])
    // 请求数据
    const {run:load, loading} = useRequest(async ()=>{
        const data = await getQuetionListService({
            page,
            pageSize:10,
            keyword
        })
        return data
    },{
        manual:true,
        onSuccess(result){
            const {list:l=[],total=0} = result
            setList(list.concat(l))
            setTotal(total)
            setPage(page+1)
        }
    })

    // 防抖
    const {run:tryLoadMore} = useDebounceFn(()=>{
        const elem = containerRef.current
        if(elem == null)
            return
        const domRect = elem.getBoundingClientRect()
        if(domRect == null)
            return
        const {bottom} = domRect
        if(bottom <= document.body.clientHeight)
            load()
    },{wait:1000})


    useEffect(()=>{
        tryLoadMore()
    },[searchParams])
    // 当页面滚动时， 尝试触发加载
    useEffect(()=>{
        if(haveMoreData){
            window.addEventListener('scroll',tryLoadMore)
        }
        return ()=>{window.removeEventListener('scroll',tryLoadMore)}
    },[searchParams, haveMoreData])

    const {Title} = Typography
    const loadMoreContent = ()=>{
        if(loading) return <Spin/>
        if(total == 0) return <Empty description="暂无数据"/>
        if(!haveMoreData) return <Spin>没有更多了...</Spin>
        return  <Spin tip="Loading...">
            <Alert
                message="开始加载下一页"
                type="info"
            />
        </Spin>
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>我的问卷</Title>
                </div>
                <div className={styles.right}><ListSearch/></div>
            </div>
            <div className={styles.content}>
                {list.map((q:any) => {
                    const { _id } = q
                    return <QuestionCard key={_id} {...q}/>
                })}
            </div>
            <div className={styles.footer}>
                <div ref={containerRef}>{loadMoreContent()}</div>
            </div>
        </div>
    )
}

export default List
