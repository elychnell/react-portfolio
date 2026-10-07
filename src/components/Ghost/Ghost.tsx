import styles from "./Ghost.module.css";
import GhostIcon from "./GhostIcon";

function Ghost() {
  return (

    <aside className={styles.ghostAside}>
      <div className={styles.ghostContent}>
        <GhostIcon />
        <div className={styles.ghostText}>
          <h3 className={styles.line1}>Nothing to fear</h3>
          <h3 className={styles.line2}>Nothing to doubt</h3>
          <h4 className={styles.date}>2025-06-08</h4>
        </div>
      </div>
    </aside>

  )
}

export default Ghost