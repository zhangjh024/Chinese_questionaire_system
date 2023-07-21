import {useState} from "react";
import styles from './common.module.scss'
import {Typography, Empty, Table, Tag, Space, Button, Modal, message} from 'antd'
import { ExclamationOutlined } from '@ant-design/icons'
import ListSearch from "../../components/ListSearch";
import useLoadQuestionList from "../../hooks/useLoadQuestionList";
import {useRequest} from "ahooks";
import {deleteQuestionService, updateQuestionService} from "../../services/qustion";
function Trash(){

    const {data={}, loading,refresh} = useLoadQuestionList({isDeleted:true})
    const {list=[] , total=0} = data

    const [selectIds, setSelectIds]  = useState<string[]>([])
    const {Title} = Typography
    const {confirm} = Modal
    const {run:deleteQuestion} = useRequest(async ()=>{
        deleteQuestionService(selectIds)
    },
        {
            manual:true,
            onSuccess(){
                message.success("删除成功")
                refresh()
                setSelectIds([])
            }
        })
    const del = ()=>{
        confirm({
            title:"彻底删除该问卷？",
            content:"删除后将不可恢复",
            icon:<ExclamationOutlined/>,
            onOk:deleteQuestion
        })
    }

    const {run:recover } = useRequest(async()=>{
        for await(const id of selectIds)
        {
            await updateQuestionService(id,{isDeleted:false})
        }
    },{
        manual:true,
        debounceWait:200,
        onSuccess(){
            message.success("恢复成功")
            refresh()
            setSelectIds([])
        }
    })
    const tableColumns = [
        {
            title:"标题",
            dataIndex:"title",
            key:"title"
        },
        {
            title:"是否发布",
            dataIndex:"isPublished",
            key:"isPublished",
            render:(isPublished:boolean)=>{
                return isPublished?<Tag color="processing">已发布</Tag>:<Tag>未发布</Tag>
            }
        },
        {
            title:"答卷数量",
            dataIndex:"answerCount",
            key:"answerCount"
        },
        {
            title:"创建时间",
            dataIndex:"createdAt",
            key:"createdAt"
        }
    ]
    const TableElem = (<>
        <div style={{marginBottom:"25px"}}>
            <Space>
                <Button type='primary' disabled={selectIds.length===0} onClick={recover}>恢复</Button>
                <Button danger disabled={selectIds.length===0} onClick={del}>删除</Button>
            </Space>
        </div>
        <Table
            dataSource={list}
            columns={tableColumns}
            pagination={false}
            rowKey={q=>q._id}
            rowSelection={{
                type:"checkbox",
                onChange:selectedRowKeys => {
                    console.log(selectedRowKeys)
                    setSelectIds(selectedRowKeys as string[])
                }
            }}
        ></Table>)
    </>)
    return <>
        <div className={styles.header}>
            <div className={styles.left}><Title level={3}>回收站</Title></div>
            <div className={styles.right}><ListSearch/></div>
        </div>
        <div className={styles.content}>
            {list.length==0 && <Empty description="暂无数据"/>}
            {TableElem}
        </div>
    </>
}
export default Trash
