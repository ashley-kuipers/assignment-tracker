import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
// Create state variables for createdAssignments and completedAssignments (both are arrays of Assignment objects)

// the Assignment object should have a name (string) and a completed (boolean) property

export function Assignments() {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
          {/* <span>{createdAssignments.length}</span> */}
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
          {/* <span>{completedAssignments.length} of {createdAssignments.length}</span> */}
        </div>
      </header>

      <div className={styles.list}>
        {/* For assignment in createdAssignments, display an Assignment component */}
        {/* Pass the whole assignment object so the name and completed props get dealt with */}
        <Assignment />
      </div>
    </section>
  );
}
