import { useEffect, useState } from 'react';
import styles from './main.module.css';

export default function Main() {
	const [folderName, setFolderName] = useState('');
	const [templates, setTemplates] = useState([]);
	const [selectedTemplate, setSelectedTemplate] = useState('');

	useEffect(() => {
		prepareTemplateNameItems();
	}, []);

	function connectToDropbox() {
		fetch('/auth/url')
			.then((res) => res.json())
			.then((data) => window.location.replace(data.authUrl));
	}

	function prepareTemplateNameItems() {
		fetch('/templates')
			.then((res) => res.json())
			.then((data) => {
				const templateList = data.templateList;
				setTemplates(templateList);
				setSelectedTemplate(templateList[0].value);
			});
	}

	function getSelectedTemplate(e) {
		setSelectedTemplate(e.target.value);
	}

	function createFromTemplate() {
		fetch(
			'/structures?' +
				new URLSearchParams({
					rootName: folderName,
					templateName: selectedTemplate,
				})
		).then(() => window.location.replace('/'));
	}

	return (
		<>
			<div className={styles.taglineContainer}>
				<h1 className={styles.tagline}>DSX - Folder Templates</h1>
			</div>

			<div className={styles.controlsContainer}>
				<button className={styles.button} onClick={connectToDropbox}>
					Connect your team
				</button>

				<div className={styles.horizontalLine} />

				<div className={styles.select}>
					<select value={selectedTemplate} onChange={getSelectedTemplate}>
						{templates.map((template, index) => {
							return (
								<option value={template.value} key={index}>
									{template.label}
								</option>
							);
						})}
					</select>
				</div>

				<input
					className={styles.input}
					placeholder="Enter root folder name"
					value={folderName}
					onChange={(e) => setFolderName(e.target.value)}
				/>

				<button className={styles.button} onClick={createFromTemplate}>
					Create from template
				</button>
			</div>
		</>
	);
}
