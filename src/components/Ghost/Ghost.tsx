import styles from "./Ghost.module.css";
import GhostIcon from "./GhostIcon";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

function Ghost() {
const ghostElementRef = useRef<HTMLElement | null>(null);

const baseX = -35;

const ghostRef = useCallback((element: HTMLElement | null) => {
  ghostElementRef.current = element;

  if (!element) return;

  setGhostTop(GhostPosition(element));
  setGhostReady(true);
}, []);

const [ghostTop, setGhostTop] = useState<number>(() => GhostPosition());
const [ghostReady, setGhostReady] = useState<boolean>(false);
const [isAnimating, setIsAnimating] = useState(false);
const [isOverProjects, setIsOverProjects] = useState(false);

const [xFloat, setXFloat] = useState(0);
const [yFloat, setYFloat] = useState(0);
const [delay, setDelay] = useState(5);


function GhostPosition (element?: HTMLElement | null): number {
  const page = document.getElementById("page-content");
  const pageHeight: number = page?.getBoundingClientRect().height || 0;
  const GhostHeight: number = element?.offsetHeight || 0;
  const minTop: number = 0;
  const bottomMargin = 100;
  const maxTop = Math.max(0, pageHeight - GhostHeight - bottomMargin);

  return Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
} 

function randomizeGhost() {
  setGhostTop(GhostPosition());
  setXFloat(Math.floor(Math.random() * 21) - 10);
  setYFloat(Math.floor(Math.random() * 21) - 10);
  setDelay(Math.floor(Math.random() * 11) + 5);
}

function checkProjectsOverlap() {
  const ghost = ghostElementRef.current;
  const projects = document.getElementById("projects");

  if (!ghost || !projects) return;

  const ghostRect = ghost.getBoundingClientRect();
  const projectsRect = projects.getBoundingClientRect();

  const ghostMiddle = ghostRect.top + ghostRect.height / 2;

  const isInsideProjects =
    ghostMiddle >= projectsRect.top &&
    ghostMiddle <= projectsRect.bottom;

  setIsOverProjects(current =>
    current === isInsideProjects ? current : isInsideProjects
  );
}
 
  useEffect(() => {
    setGhostReady(true);
  }, []);

  useEffect(() => {
  if (!ghostReady || isAnimating) return;
  setTimeout(() => {
    randomizeGhost();
    setIsAnimating(true);
  }, delay * 1000);
  }, [isAnimating, ghostReady]);

  return (
    <motion.aside ref={ghostRef} style={{top: ghostTop}} initial={{  left: -425 }} animate={
      isAnimating
    ? { left: [-425, baseX + xFloat, baseX - xFloat, baseX + xFloat, baseX - xFloat, -425],
        y: [0, yFloat, -yFloat, yFloat, -yFloat, 0]
     }
    : { left: -425 }
    }
    onUpdate={checkProjectsOverlap}
    transition={{ duration: 4.25 /*, repeat: Infinity, repeatType: "loop" */ }}
    onAnimationComplete={() => { setIsAnimating(false); }}
    className={`${styles.ghostAside} ${
  isOverProjects ? styles.ghostAsideLight : ""
}`}
    >
      <div className={styles.ghostContent}>
        <GhostIcon />
        <div className={styles.ghostText}>
          <h3 className={styles.line1}>Nothing to fear</h3>
          <h3 className={styles.line2}>Nothing to doubt</h3>
          <h4 className={styles.date}>2025-06-08</h4>
        </div>
      </div>
    </motion.aside>

  )
}

export default Ghost