import styles from "./main.module.css";

export default function Main() {
   return (
    <>
      <h1 className={styles.tagline}>
        DSX Folder Templates
      </h1>

      <div className={styles.controls}>
        <button className={styles.button} onClick={connectToDropbox}>Connect</button>
        <button className={styles.button} onClick={createFromTemplate}>Create from template</button>
      </div>
    </>
  )
}

function connectToDropbox() {
  fetch("/login")
  .then((res) => res.json())
  .then((authUrl) => window.location.replace(authUrl.url))
}

function createFromTemplate() {
  fetch("/template")
  .then((authUrl) => window.location.replace("/"))
}