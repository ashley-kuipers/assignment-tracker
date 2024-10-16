// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { AssignmentsProps } from '../../App';
import { useState, ChangeEvent, FormEvent  } from "react";

// Component representing the header of the page, including the new assignment form
export function Header({ assignments, setAssignments }: AssignmentsProps) {

    // set state variable and change function for input
    const [text, setText] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    // Form submission function
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setAssignments([...assignments, { name: text, completed: false }]);
        setText('');
    }


    return (
        <header className={styles.header}>
            <h1>{uppercase("bcit")} Assignment Tracker</h1>

            {/* Form submission function */}
            <form className={styles.newAssignmentForm} onSubmit={(e: FormEvent) => handleSubmit(e)}>

                <input placeholder="Add a new assignment" type="text" onChange={handleChange} value={text}/>

                {/* Button is disabled if input (text variable) is empty */}
                <button type="submit" disabled={!text}>
                    Create <AiOutlinePlusCircle size={20} />
                </button>

            </form>
        </header>
    );
}
