import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { AssignmentProps, AssignmentsProps } from '../../App';


export function Assignments({ assignments, setAssignments }: AssignmentsProps) {
    

    const completedAssignmentsCount = assignments.filter(assignment => assignment.completed).length;

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
                {/* For assignment in createdAssignments, display an Assignment component */}
                {/* Pass the whole assignment object so the name and completed props get dealt with */}
                {assignments.map((assignment, index) => (
                    <Assignment key={index} assignment={assignment} />
                ))}
            </div>
        </section>
    );
}
