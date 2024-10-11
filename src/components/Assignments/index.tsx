import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { AssignmentProps, AssignmentsProps } from '../../App';


export function Assignments({ assignments, setAssignments }: AssignmentsProps) {
    

    const completedAssignmentsCount = assignments.filter(assignment => assignment.completed).length;

    // Function to remove an assignment by index
    const removeAssignment = (index: number) => {
        setAssignments(assignments.filter((_, i) => i !== index));
    };

    // Function to mark an assignment as completed
    const markAsCompleted = (index: number) => {
        const updatedAssignments = assignments.map((assignment, i) => {
            if (i === index) {
                return { ...assignment, completed: true };
            }
            return assignment;
        });

        setAssignments(updatedAssignments);  // Update the state immutably
    };

    return (
        <section className={styles.assignments}>
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

            <div className={styles.list}>
                {assignments.map((assignment, index) => (
                    <Assignment key={index} index={index} assignment={assignment} removeAssignment={removeAssignment} markAsCompleted={markAsCompleted} />
                ))}
            </div>
        </section>
    );
}
