import {FC, useEffect, useState} from 'react'
import classnames from 'classnames'
import styles from './QuestionCard.module.scss'
import {Button, Space, Divider, Tag, Popconfirm, Modal, message} from "antd";
import {EditOutlined,LineChartOutlined,StarOutlined,DeleteOutlined,CopyOutlined,ExclamationOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import {copyQuestionService, updateQuestionService} from "../services/qustion";
import {useRequest} from "ahooks";
// ts 自定义类型
type PropsType = {
    _id: string
    title: string
    isStar:boolean
    isPublished: boolean
    answerCount: number
    createdAt: string
}

// FC - functional component
const QuestionCard: FC<PropsType> = props => {
    const {confirm} = Modal
    const {loading:deleteLoading, run:deleteQuestion} = useRequest(async ()=>{
        const data = await updateQuestionService(_id,{isDeleted:true})
        return data
    },{
        manual:true,
        onSuccess(){
            message.success("已删除")
            setIsDel(true)
        }
    })
    const [isDel, setIsDel] = useState(false)
    const del = ()=>{
        confirm({
            title:"确定删除？",
            icon:<ExclamationOutlined/>,
            onOk:()=>{
                deleteQuestion()
            }
        })
    }
    const { _id, title,isStar, createdAt, answerCount, isPublished } = props
    const nav = useNavigate()
    const [isStarState, setIsStarState] = useState(isStar)
    const {loading:changeStarLoading,run:changeStar } = useRequest(async()=>{
        const data = await updateQuestionService(_id,{isStar:!isStarState})
        return data
    },{
        manual:true,
        onSuccess(){
            setIsStarState(!isStarState)
            message.success("已更新")
        }
    })

    const {loading:copyLoading, run:copy} = useRequest(async ()=>{
       const data = await copyQuestionService(_id)
        return data
    },{
        manual:true,
        onSuccess(result:any){
            nav(`/question/edit/${result.id}`)
            message.success("复制成功")
        }
    })
    if(isDel)   return null
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.left}>
                    <Link to={isPublished?`/question/stat/${_id}`:`/question/edit/${_id}`}>
                        <Space>
                            {isStarState&&<StarOutlined style={{color:"red"}}/>}
                            {title}
                        </Space>
                    </Link>
                </div>
                <div className={styles.right}>
                    <Space>
                        {isPublished?<Tag color="processing">已发布</Tag>:<Tag>未发布</Tag>}
                        <span>答卷：{answerCount}</span>
                        <span>创建时间:{createdAt}</span>
                    </Space>
                </div>
            </div>
            <Divider></Divider>
            <div className={styles['button-container']}>
                <div className={styles.left}>
                    <Space>
                        <Button
                            icon={<EditOutlined/>}
                            type='text'
                            size="small"
                            onClick={()=>nav(`/question/edit/${_id}`)}
                        >编辑问卷</Button>
                        <Button
                            icon={<LineChartOutlined/>}
                            type='text'
                            size="small"
                            onClick={()=>nav(`/question/stat/${_id}`)}
                        >数据统计</Button>
                    </Space>
                </div>
                <div className={styles.right}>
                    <Space>
                        <Button
                            icon={<StarOutlined/>}
                            type='text'
                            size="small"
                            onClick={changeStar}
                            disabled={changeStarLoading}
                        >{isStarState?"取消标星":"标星"}</Button>
                        <Popconfirm
                            title="确定复制该问卷?"
                            okText="确定"
                            cancelText="取消"
                            onConfirm={copy}
                        >
                            <Button
                                icon={<CopyOutlined/>}
                                type='text'
                                size="small"
                                disabled={copyLoading}
                            >复制</Button>
                        </Popconfirm>
                        <Button
                            icon={<DeleteOutlined/>}
                            type='text'
                            size="small"
                            onClick={del}
                            disabled={deleteLoading}
                        >删除</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
