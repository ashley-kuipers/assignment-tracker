import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { AssignmentsProps } from '../../App';
import { useState, ChangeEvent, FormEvent  } from "react";

// If input is empty, have to disable button
export function Header({ assignments, setAssignments }: AssignmentsProps) {

    const [text, setText] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setAssignments([...assignments, { name: text, completed: false }]);
        setText('');
    }

    return (
        <header className={styles.header}>
            <h1>{uppercase("bcit")} Assignment Tracker</h1>
            <form className={styles.newAssignmentForm} onSubmit={(e: FormEvent) => handleSubmit(e)}>

                <input placeholder="Add a new assignment" type="text" onChange={handleChange} value={text}/>

                <button type="submit" disabled={!text}>
                    Create <AiOutlinePlusCircle size={20} />
                </button>

            </form>
        </header>
    );
}
