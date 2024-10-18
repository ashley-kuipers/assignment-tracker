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

    // Function to remove assignment from list when deleted
    function removeAssign(id: number) {
        setAssignments((assignments: AssignmentType[]) => {
            return assignments.filter((assignment: AssignmentType) => assignment.id !== id);
        });
    }
    
    // Function to update the assignment as completed when checked off
    function updateAssign(id:number) {

        setAssignments( (assignments:AssignmentType[]) => {
            // iterate over each assignment in the list
            return assignments.map((assignment) => {
                if (assignment.id === id) {
                    // toggle assignment completion status
                    return { ...assignment, completed: !assignment.completed }

                }
                return assignment;
            });
        })
        
    }

    // function to calculate the number of days between the due date and today
    function calculateDays (dueDate: Date | undefined) {
        const today = new Date();

        // if duedate is undefined (shouldn't happen), return nothing
        if (!dueDate){
            return "";
        }

        // calculate difference between dates in days
        const timeDifference = dueDate.getTime() - today.getTime();
        const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // return appropriate version of p
        if (dayDifference == 1){
            return <p className={styles.dueRed}>Due: tomorrow</p>;
        }
        if (dayDifference > 1){
            return <p className={styles.dueGrey}>Due: {dayDifference} days</p>;
        }
        if (dayDifference <= 0){
            return <p className={styles.dueRed}>Due: now</p>;
        }

    }

    return (
        <div className={styles.assignment}>
            {/* Assignment info */}
            <div className={styles.assignmentName}>
                <button className={styles.checkContainer} onClick={() => updateAssign(assignment.id)}>
                    {assignment.completed ? <BsCheckCircleFill /> : <div />}
                </button>

                <p className={assignment.completed ? styles.textCompleted : ''}>{assignment.name}</p>

                {calculateDays(assignment.dueDate)}
            </div>
            
            {/* Delete button */}
            <button className={styles.deleteButton}  onClick={() => removeAssign(assignment.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}
