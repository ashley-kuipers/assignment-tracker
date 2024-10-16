// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import React, { useState } from 'react';

// Type representing a single assignment
export type AssignmentType = {
    name: string;
    completed: boolean;
};

// Type representing props of an assignment (for passing down to components)
export type AssignmentProps = {
    // variables
    assignment: AssignmentType;
    index: number;
    // functions
    removeAssignment: (index: number) => void;
    markAsCompleted: (index: number) => void;
};

// Type representing props for the Assignments array (to pass down to component)
export type AssignmentsProps = {
    // Array of assignments
    assignments: AssignmentType[];
    // state function to update assignments variable
    setAssignments: React.Dispatch<React.SetStateAction<AssignmentType[]>>;
};

// Test data to demonstrate application
const testData: AssignmentType[] = [
    { name: 'New Assignment 1', completed: true },
    { name: 'New Assignment 2', completed: false },
    { name: 'New Assignment 3', completed: false },
    { name: 'New Assignment 4', completed: false },
];

function App() {
    // creating state variable for assignments array
    const [assignments, setAssignments] = useState<AssignmentType[]>(testData);

    return (
        <>
            <Header assignments={assignments} setAssignments={setAssignments} />
            <Assignments assignments={assignments} setAssignments={setAssignments} />
        </>
    );
}

export default App;
