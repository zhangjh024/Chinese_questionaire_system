import {useSelector} from "react-redux";
import {StateType} from '../store'
import {ComponentListType} from '../store/componentsReducer'
function useGetComponentInfo(){
    const components = useSelector<StateType>(state => state.components) as ComponentListType
    const {componentList=[],selectedId} = components
    const selectedComponent = componentList.find((c)=>c.fe_id==selectedId)
    return {
        selectedComponent,
        componentList,selectedId
    }
}

export default useGetComponentInfo