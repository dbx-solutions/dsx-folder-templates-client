import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import AuthToken from './components/Auth/AuthToken';
import FolderStructure from './components/FolderStructure/FolderStructure';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/auth/token" element={<AuthToken />} />
			<Route path="/folder-structure/create/" element={<FolderStructure />} />
			<Route path="/template/create" element={<Main />} />
			<Route path="/template/view" element={<Main />} />
		</Routes>
	);
}
