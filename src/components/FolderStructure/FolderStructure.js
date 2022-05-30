import { useEffect, useState } from 'react';
import ApiRoutes from '../../ApiRoutes';
import Button from '../Elements/Button/Button';
import styles from './folder_structure.module.css';

export default function FolderStructure() {
	const [templates, setTemplates] = useState([]);
	const [template, setTemplate] = useState('');
	const [folderName, setFolderName] = useState('');

	useEffect(() => {
		prepareTemplateList();
	}, []);

	function prepareTemplateList() {
		fetch(ApiRoutes.templateList)
			.then((res) => res.json())
			.then((data) => {
				const templateList = data.templateList;
				setTemplates(templateList);
				setTemplate(templateList[0].value);
			});
	}

	function createFromTemplate() {
		fetch(
			ApiRoutes.folderStructure +
				'?' +
				new URLSearchParams({
					rootName: folderName,
					templateName: template,
				})
		).then(() => window.location.replace('/'));
	}

	return (
		<>
			<div className={styles.select}>
				<select onChange={(e) => setTemplate(e.target.value)}>
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
				placeholder="Enter project name"
				value={folderName}
				onChange={(e) => setFolderName(e.target.value)}
			/>

			<Button
				caption="Create from template"
				handleOnClick={createFromTemplate}
			/>
		</>
	);
}
