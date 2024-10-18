// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import styles from "./assignments.module.css";
import { Assignment } from "../Assignment";
import { AssignmentType } from '../../App';

type Props = {
    assignments: AssignmentType[];
    setAssignments: React.Dispatch<React.SetStateAction<AssignmentType[]>>;
}

// Component to display the assignments list
export function Assignments({ assignments, setAssignments }: Props) {
    // Getting number of completed assignments
    const completedAssignmentsCount = assignments.filter(assignment => assignment.completed).length;

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

            {/* Display each assignment in a list */}
            <div className={styles.list}>
                {assignments.map((assignment, index) => (
                    <Assignment key={index} assignment={assignment} setAssignments={setAssignments} />
                ))}
            </div>
        </section>
    );
}
