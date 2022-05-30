import React from 'react';
import ApiRoutes from '../../ApiRoutes';
import Button from '../Elements/Button/Button';

export default function OAuth() {
	function connectToDropbox() {
		fetch(ApiRoutes.authUrl)
			.then((res) => res.json())
			.then((data) => window.location.replace(data.authUrl));
	}

	return (
		<Button
			caption="Connect your Dropbox Team"
			handleOnClick={connectToDropbox}
		/>
	);
}
