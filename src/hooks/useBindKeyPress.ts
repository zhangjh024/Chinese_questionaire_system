import {useKeyPress} from 'ahooks'
import {useDispatch} from "react-redux";
import {removeSelectedComponent, copyComponent, pasteComponent,selectPrevComponent,selectNextComponent} from "../store/componentsReducer";

function isActiveElementValid(){
    const activeElm = document.activeElement;
    if(activeElm == document.body) return true;
    return false;
}

const useBindKeyPress = () =>{
    const dispatch = useDispatch();

    // 删除组件
    useKeyPress(['backspace', 'delete'], ()=>{
        if(!isActiveElementValid()) return;
        dispatch(removeSelectedComponent())
    })

    // 复制组件快捷键
    useKeyPress(['ctrl.c', 'meta.c'], ()=>{
        if(!isActiveElementValid()) return;
        dispatch(copyComponent())
    })

    // 粘贴组件快捷键
    useKeyPress(['ctrl.v', 'meta.v'],()=>{
        if(!isActiveElementValid()) return;
        dispatch(pasteComponent())
    })

    // 选中上一个
    useKeyPress(['uparrow'],()=>{
        if(!isActiveElementValid()) return;
        dispatch(selectPrevComponent())
    })

    // 选中下一个
    useKeyPress(['downarrow'],()=>{
        if(!isActiveElementValid()) return;
        dispatch(selectNextComponent());
    })
}

export default useBindKeyPress
