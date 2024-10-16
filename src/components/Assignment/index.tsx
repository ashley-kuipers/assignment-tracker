// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import styles from "./assignment.module.css";
import { AssignmentProps } from '../../App';
import { BsCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

// Component representing each individual assignment
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
