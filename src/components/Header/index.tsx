// Ashley Kuipers | Comp 3013 | Lab 3 | A01447667 | Fall 2024
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { AssignmentType } from '../../App';
import { useState, ChangeEvent, FormEvent } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { BsCalendar3 } from "react-icons/bs";
import styles from "./header.module.css";

type Props = {
    assignments: AssignmentType[];
    setAssignments: React.Dispatch<React.SetStateAction<AssignmentType[]>>;
}

let idCount = 5;

// Component representing the header of the page, including the new assignment form
export function Header({ assignments, setAssignments }: Props) {

    // create state variables for date picker
    const [selected, setSelected] = useState<Date>();
    const [showPicker, setShowPicker] = useState(false);

    // Function to toggle the visibility of the date picker
    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    // create state variable and change function for input
    const [text, setText] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    // Form submission function
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setAssignments([...assignments, { id: idCount, name: text, completed: false, dueDate: selected}]);
        setText('');
        idCount++;
    }

    return (
        <header className={styles.header}>
            <h1>{uppercase("bcit")} Assignment Tracker</h1>

            {/* Form submission function */}
            <form className={styles.newAssignmentForm} onSubmit={(e: FormEvent) => handleSubmit(e)}>

                <input placeholder="Add a new assignment" type="text" onChange={handleChange} value={text} />

                {/* Datepicker  */}
                <a href="#" className={styles.btn} onClick={togglePicker}>
                    {selected ? selected.toLocaleDateString() : <BsCalendar3 />}
                </a>
                {showPicker && (
                    <div className={styles.datePickerOverlay}>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                )}

                {/* Button is disabled if input (text variable) or due date is empty */}
                <button className={styles.btn} type="submit" disabled={text.trim() === '' || !selected}>
                    Create <AiOutlinePlusCircle size={20} />
                </button>

            </form>
        </header>
    );
}
