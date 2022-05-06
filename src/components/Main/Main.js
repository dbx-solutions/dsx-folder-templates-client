import { useState } from "react";
import styles from "./main.module.css";

export default function Main() {
  const [folderName, setFolderName] = useState("");

  function connectToDropbox() {
    fetch("/authurl")
    .then((res) => res.json())
    .then((authUrl) => window.location.replace(authUrl.url))
  }
  
  function createFromTemplate() {
    fetch("/template?" + new URLSearchParams({
      rootName: folderName,
    }))
    .then(() => window.location.replace("/"))
  }

   return (
    <>
      <div className={styles.taglineContainer}>
        <h1 className={styles.tagline}>
          DSX Folder Templates
        </h1>
      </div>

      <div className={styles.controlsContainer}>
        <button className={styles.button} onClick={connectToDropbox}>Connect your team</button>

        <div className={styles.horizontalLine} />

        <input 
          className={styles.input} 
          placeholder="Enter root folder name"
          value={folderName} 
          onChange={e => setFolderName(e.target.value)}
        />
        <button className={styles.button} onClick={createFromTemplate}>Create from template</button>
      </div>
    </>
  )
}