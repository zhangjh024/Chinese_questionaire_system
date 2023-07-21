import {createContext, useState} from "react";
import Son from "./Son";

const themes = {
    light:{
        fore: '#000',
        background: '#eee'
    },
    dark:{
        fore: '#fff',
        background: '#222',
    }
}
export const ThemeContext = createContext(themes.light)
const Father = () =>{
    const [theme, setTheme] = useState(themes.light)
    function toDark(){
        setTheme(themes.dark)
    }
    return (
        <>
            <ThemeContext.Provider value={theme}>
                <p>Context</p>
                <button onClick={toDark}>dark</button>
                <Son/>
            </ThemeContext.Provider>
        </>
    )
}

export default Father