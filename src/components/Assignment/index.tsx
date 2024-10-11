import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { AssignmentProps } from '../../App';
import { BsCheckCircleFill } from "react-icons/bs";


export function Assignment({index, assignment, removeAssignment, markAsCompleted}: AssignmentProps) {

    return (
        <div className={styles.assignment}>
            <button className={styles.checkContainer} onClick={() => markAsCompleted(index)}>
                {assignment.completed ? <BsCheckCircleFill /> : <div />}
            </button>

            <p className={assignment.completed ? styles.textCompleted : ''}>{assignment.name}</p>

            <button className={styles.deleteButton}  onClick={() => removeAssignment(index)}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}
