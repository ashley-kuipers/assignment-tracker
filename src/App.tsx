// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

// Type representing a single assignment
export type AssignmentType = {
    id:number;
    name: string;
    completed: boolean;
};

// Test data to demonstrate application
const testData: AssignmentType[] = [
    { id:1, name: 'New Assignment 1', completed: true },
    { id:2, name: 'New Assignment 2', completed: false },
    { id:3, name: 'New Assignment 3', completed: false },
    { id:4, name: 'New Assignment 4', completed: false },
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
