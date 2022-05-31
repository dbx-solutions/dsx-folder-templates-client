import { React } from 'react';
import Icon from '../Elements/Icon';
import Nav from '../Nav/Nav';
import ToolsBar from '../ToolsBar/ToolsBar';
import styles from './layout.module.css';

export default function Layout(props) {
	return (
		<>
			<div className={styles.navContainer}>
				<Nav />
			</div>

			<div className={styles.toolsBarContainer}>
				<ToolsBar />
			</div>

			<div className={styles.contentContainer}>
				<div className={styles.contentLeftSide}>
					<span className={styles.artText}>
						Create folder structures in seconds
					</span>
					<div className={styles.art}>{Icon.folder}</div>
				</div>

				<div className={styles.contentRightSide}>{props.children}</div>
			</div>
		</>
	);
}
