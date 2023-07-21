import {useContext} from "react";
import {ThemeContext} from "./Father";

const GrandSon = ()=>{
    const theme = useContext(ThemeContext)
    const style1 = {color:theme.fore, backgroundColor:theme.background}
    return(
        <div>
            <button style={style1}>孙</button>
        </div>
    )
}

export default GrandSon