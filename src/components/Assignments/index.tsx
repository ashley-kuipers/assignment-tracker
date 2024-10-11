import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import React, { useState } from 'react';

// the Assignment object should have a name (string) and a completed (boolean) property
export type AssignmentType = {
    name: string;
    completed: boolean;
};

const testData: AssignmentType[] = [
    { name: 'New Task 1', completed: true },
    { name: 'New Task 2', completed: false },
    { name: 'New Task 3', completed: false },
    { name: 'New Task 4', completed: false },
];

export function Assignments() {
    // Create state variables for createdAssignments and completedAssignments (both are arrays of Assignment objects)
    const [assignments, setAssignments] = useState<AssignmentType[]>(testData);

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
