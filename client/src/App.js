import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p></p>
				<a
					className="App-link"
					href="https://christian-react-app.herokuapp.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					A Christian Jones <code>Create("shun")</code>
				</a>
			</header>
		</div>
	);
}

export default App;
