import styles from './EditCanvas.module.scss'
import QuestionTitle from "../../../components/QuestionComponents/QuestionTitle/component";
import QuestionInput from "../../../components/QuestionComponents/QuestionInput/component";
// import { MouseEvent } from 'react';
const EditCanvas = () =>{
    // const handleMouseDown = (event:MouseEvent)=> {
    //     event.preventDefault();
    // }
    return (
        <>
            <div className={styles.canvas}>
                <div className={styles.componentCanvas}>
                    <QuestionTitle></QuestionTitle>
                </div>
                <div className={styles.componentCanvas}>
                        <div className={styles.inputComponent}>
                            <QuestionInput></QuestionInput>
                        </div>
                </div>
            </div>
        </>
    )
}

export default EditCanvas