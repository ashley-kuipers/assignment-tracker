// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

// Type representing a single assignment
// because duedate can technically be undefined (when no date is picked yet using the picker), have to account for that situation
export type AssignmentType = {
    id:number;
    name: string;
    completed: boolean;
    dueDate:  Date | undefined;
};

// Test data to demonstrate application
const testData: AssignmentType[] = [
    { id:1, name: 'New Assignment 1', completed: true, dueDate: new Date("10/20/2024") },
    { id:2, name: 'New Assignment 2', completed: false, dueDate: new Date("10/19/2024")  },
    { id:3, name: 'New Assignment 3', completed: false, dueDate: new Date("10/23/2024")  },
    { id:4, name: 'New Assignment 4', completed: false, dueDate: new Date("10/31/2024")  },
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
