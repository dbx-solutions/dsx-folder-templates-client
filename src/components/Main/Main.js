import { useEffect, useState } from "react";
import Select from 'react-select'
import styles from "./main.module.css";

export default function Main() {
  const [folderName, setFolderName] = useState("");
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  useEffect(() => {
    prepareTemplateNameItems()
  }, []);

  function connectToDropbox() {
    fetch("/auth/url")
    .then((res) => res.json())
    .then((data) => window.location.replace(data.authUrl))
  }

  function prepareTemplateNameItems() {
    fetch("/templates")
    .then((res) => res.json())
    .then((data) => setTemplates(data.templateList))
  }

  function getSelectedTemplate(e) {
    setSelectedTemplate(e.value)
  }

  function createFromTemplate() {
    fetch("/structures?" + new URLSearchParams({
      rootName: folderName,
      templateName: selectedTemplate,
    }))
    .then(() => window.location.replace("/"))
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "5vh",
      border: "none",
      borderRadius: "0.5em",
      backgroundColor: "transparent"
    }),
  }

  return (
    <>
      <div className={styles.taglineContainer}>
        <h1 className={styles.tagline}>
          DSX - Folder Templates
        </h1>
      </div>

      <div className={styles.controlsContainer}>
        <button className={styles.button} onClick={connectToDropbox}>Connect your team</button>

        <div className={styles.horizontalLine} />

        <Select
          options={templates}
          styles={customStyles}
          className={styles.selectContainer}
          isClearable={false}
          onChange={getSelectedTemplate}
          classNamePrefix="select"
        />

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
