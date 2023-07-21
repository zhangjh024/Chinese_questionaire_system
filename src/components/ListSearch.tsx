import {Input} from "antd";
import {ChangeEvent, useState, useEffect} from "react";
import {useNavigate, useLocation, useSearchParams} from "react-router-dom";

const ListSearch = () => {
    const {Search} = Input
    const {pathname} = useLocation()
    const nav = useNavigate()
    const [searchParams] = useSearchParams()
    const [value, setValue] = useState("")

    useEffect(()=>{
    //每当参数变化，都会执行
        const newVal = searchParams.get('keyword')||''
        setValue(newVal)
    }, [searchParams])
    const handleSearch = (value: string) =>{
        nav({
            pathname,
            search:`keyword=${value}`
        })
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    return (
        <Search
            placeholder="请输出关键字"
            allowClear
            onSearch={handleSearch}
            style={{width:"200px"}}
            size="large"
            value={value}
            onChange={handleChange}
        ></Search>
    )
}

export default ListSearch