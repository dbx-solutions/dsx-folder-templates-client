import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import AuthToken from './components/Auth/AuthToken';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/auth/token" element={<AuthToken />} />
		</Routes>
	);
}
