import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { AssignmentType } from '../Assignments';

type AssignmentProps = {
    assignment: AssignmentType;  // Ensure you're passing the correct type as props
};

export function Assignment({assignment}: AssignmentProps) {
    console.log(" completed " + assignment.completed)
    return (
        <div className={styles.assignment}>
            <button className={styles.checkContainer}>
                <div className={assignment.completed ? styles.checked : ''}/>
            </button>

            <p className={assignment.completed ? styles.textCompleted : ''}>{assignment.name}</p>

            <button className={styles.deleteButton}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}
