import useLoading from "../../hooks/useLoading";
function Stat(){
    const {loading, questionData}  = useLoading()
    return <div>
        {loading?<p>加载中</p>:<p>{JSON.stringify(questionData)}</p>}
    </div>
}
export default Stat
