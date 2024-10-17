// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import styles from "./assignment.module.css";
import { AssignmentType } from '../../App';
import { BsCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

export type Props = {
    assignment: AssignmentType;
    setAssignments: React.Dispatch<React.SetStateAction<AssignmentType[]>>;
};



// Component representing each individual assignment
export function Assignment({assignment, setAssignments}: Props) {

    function removeAssign(id: number) {
        setAssignments((assignments: AssignmentType[]) => {
            return assignments.filter((assignment: AssignmentType) => assignment.id !== id);
        });
    }
    

    function updateAssign(id:number) {
        setAssignments( (assignments:AssignmentType[]) => {
            return assignments.map((assignment) => {
                if (assignment.id === id) {
                    // if assignment is already marked as completed, toggle off
                    if (assignment.completed) {
                        return { ...assignment, completed: false }
                    }
                    // else toggle completed on
                    return { ...assignment, completed: true };
                }
                return assignment;
            });
        })
        

    }

    return (
        <div className={styles.assignment}>
            <button className={styles.checkContainer} onClick={() => updateAssign(assignment.id)}>
                {assignment.completed ? <BsCheckCircleFill /> : <div />}
            </button>

            <p className={assignment.completed ? styles.textCompleted : ''}>{assignment.name}</p>

            <button className={styles.deleteButton}  onClick={() => removeAssign(assignment.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}
