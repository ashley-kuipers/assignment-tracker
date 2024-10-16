// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import styles from "./assignments.module.css";
import { Assignment } from "../Assignment";
import { AssignmentsProps } from '../../App';

// Component to display the assignments list
export function Assignments({ assignments, setAssignments }: AssignmentsProps) {
    
    const completedAssignmentsCount = assignments.filter(assignment => assignment.completed).length;

    // Function to remove an assignment by index
    const removeAssignment = (index: number) => {
        setAssignments(assignments.filter((_, i) => i !== index));
    };

    // Function to mark an assignment as completed
    const markAsCompleted = (index: number) => {
        // go through each assignment in the assignments object and find the assignment at the index
        const updatedAssignments = assignments.map((assignment, i) => {
            if (i === index) {
                // if assignment is already marked as completed, toggle off
                if (assignment.completed){
                    return { ...assignment, completed: false }
                }
                // else toggle completed on
                return { ...assignment, completed: true };
            }
            return assignment;
        });

        // re-render the assignments component
        setAssignments(updatedAssignments);
    };

    return (
        <section className={styles.assignments}>
            {/* Assignments block header */}
            <header className={styles.header}>
                <div>
                    <p>Created Assignments</p>
                    <span>{assignments.length}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed Assignments</p>
                    <span>{completedAssignmentsCount} of {assignments.length}</span>
                </div>
            </header>

            {/* Display each assignment in a list - pass down data and functions*/}
            <div className={styles.list}>
                {assignments.map((assignment, index) => (
                    <Assignment key={index} index={index} assignment={assignment} removeAssignment={removeAssignment} markAsCompleted={markAsCompleted} />
                ))}
            </div>
        </section>
    );
}
