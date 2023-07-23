import {Tabs} from 'antd'
import {AppstoreOutlined,BarsOutlined} from '@ant-design/icons'
import ComponentLib from "./ComponentLib";
import Layers from "./Layers";
const LeftPanel = ()=>{
    const tabItems = [
        {
            key:"componentLib",
            label:(
                <span>
                    <AppstoreOutlined/>
                    组件库
                </span>
            ),
            children:<ComponentLib/>
        },
        {
            key:"layers",
            label: (
                <span>
                    <BarsOutlined/>
                    图层
                </span>
            ),
            children: <Layers/>
        }
    ]

    return (
        <Tabs defaultActiveKey="componentLib" items={tabItems}></Tabs>
    )
}

export default LeftPanel