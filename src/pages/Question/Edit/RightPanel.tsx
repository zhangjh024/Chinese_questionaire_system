import {FileTextOutlined,SettingOutlined} from '@ant-design/icons'
import {Tabs} from "antd";
import RightProp from "./RightProp";
const RightPanel = () =>{
    const tablesItem = [
        {
            key:'prop',
            label:(
                <span>
                    <FileTextOutlined/>
                    属性
                </span>
            ),
            children:<RightProp/>
        },
        {
            key:"setting",
            label: (<span>
                <SettingOutlined/>
                设置
            </span>),
            children: (<div>设置children</div>)
        }
    ]
    return (
        <Tabs items={tablesItem} defaultActiveKey="prop"></Tabs>
    )
}

export default RightPanel