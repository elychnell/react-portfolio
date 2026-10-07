import styles from "./Ghost.module.css";
import GhostIcon from "./GhostIcon";

function Ghost() {
  return (

    <aside className={styles.ghost}>
      <div className="ghostContent">
        <div className="ghostText">
          <h3 className="line1">Nothing to fear</h3>
          <h3 className="line2">Nothing to doubt</h3>
          <h4 className="date">2025-06-08</h4>
        </div>
      <GhostIcon />
      </div>
    </aside>

  )
}

export default Ghost