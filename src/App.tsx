import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import React, { useState } from 'react';

export type AssignmentType = {
    name: string;
    completed: boolean;
};

export type AssignmentProps = {
    assignment: AssignmentType;
    removeAssignment:(index: number) => void;
    index: number;
    markAsCompleted: (index: number) => void;
};

export type AssignmentsProps = {
    assignments: AssignmentType[];  // Array of assignments
    setAssignments: React.Dispatch<React.SetStateAction<AssignmentType[]>>;  // Function to update assignments
};

const testData: AssignmentType[] = [
    { name: 'New Task 1', completed: true },
    { name: 'New Task 2', completed: false },
    { name: 'New Task 3', completed: false },
    { name: 'New Task 4', completed: false },
];

function App() {

    const [assignments, setAssignments] = useState<AssignmentType[]>(testData);

  return (
    <>
      <Header assignments={assignments} setAssignments={setAssignments}/>
      <Assignments assignments={assignments} setAssignments={setAssignments}/>
    </>
  );
}

export default App;
