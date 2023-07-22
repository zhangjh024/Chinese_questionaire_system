import {useSelector} from "react-redux";
import {StateType} from '../store'
import {ComponentListType} from '../store/componentsReducer'
function useGetComponentInfo(){
    const components = useSelector<StateType>(state => state.components) as ComponentListType
    const {componentList=[]} = components
    return {
        componentList
    }
}

export default useGetComponentInfo