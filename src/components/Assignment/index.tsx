// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import styles from "./assignment.module.css";
import { AssignmentType } from '../../App';
import { BsCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

export type Props = {
    assignment: AssignmentType;
    removeAssignment: (index: number) => void;
    markAsCompleted: (index: number) => void;
};

// Component representing each individual assignment
export function Assignment({assignment, removeAssignment, markAsCompleted}: Props) {

    return (
        <div className={styles.assignment}>
            <button className={styles.checkContainer} onClick={() => markAsCompleted(assignment.id)}>
                {assignment.completed ? <BsCheckCircleFill /> : <div />}
            </button>

            <p className={assignment.completed ? styles.textCompleted : ''}>{assignment.name}</p>

            <button className={styles.deleteButton}  onClick={() => removeAssignment(assignment.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}
