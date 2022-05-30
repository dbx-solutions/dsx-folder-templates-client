import { React } from 'react';
import OAuth from '../Auth/OAuth';
import FolderStructure from '../FolderStructure/FolderStructure';
import styles from './main.module.css';

export default function Main() {
	return (
		<>
			<div className={styles.taglineContainer}>
				<h1 className={styles.tagline}>DSX - Folder Templates</h1>
			</div>

			<div className={styles.controlsContainer}>
				<OAuth />

				<div className={styles.horizontalLine} />

				<FolderStructure />
			</div>
		</>
	);
}
