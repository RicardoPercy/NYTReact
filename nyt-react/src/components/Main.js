import React from 'react';
import { render } from 'react-dom';

import Search from '/components';
import Saved from '/components';
import Results from '/components';

class Main extends React.Component {
	render() {
		return (
			<div className='jumbotron'>
			<h1>New York Times Article Scrubber </h1>
			<p> Search for and annotate articles of interest! </p>
			</div>


			);
	}
}


export default Main;

