import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {

	const [value, setValue] = useState('Текст в инпуте')

	return (
		<div className='App'>
			<PostItem value={ "1234"} item = {{title: 0}} number ={1} />

		</div>
	);
}

export default App;