import {Pagination} from 'antd'
import {useEffect, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

type PropsType = {
    total:number
}
const ListPagination = (props:PropsType)=>{
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const {total} = props

    const nav = useNavigate()
    const {pathname} = useLocation()
    const [searchParams] = useSearchParams()
    useEffect(()=>{
        const page = parseInt(searchParams.get('page')||'')||1
        const pageSize = parseInt(searchParams.get('pageSize')||'')||10
        setCurrent(page)
        setPageSize(pageSize)
    },[searchParams])
    function handlePageChange(page:number, pageSize:number){
        searchParams.set('page',page.toString())
        searchParams.set('pageSize',pageSize.toString())
        nav({
            pathname,
            search:searchParams.toString()
        })
    }
    return <Pagination current={current} pageSize={pageSize} total={total} onChange={handlePageChange}/>
}

export default ListPagination
