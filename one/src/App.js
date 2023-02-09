import React, {useState} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'Description' },
	])
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(p=> p.id !== post.id))
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{margin: '15px'}}/>
			<div>
				<MySelect
					defaultValue="Сортировка"
					options={[{ value: 'title', name: 'По названию' },
					{ value: 'body', name: ' По описанию' }
					]}
				/>
			</div>
			{posts.length
				?
				<PostList remove={removePost} posts={posts} title="JS"/>
				:
				<h1 style={{ textAlign: 'center' }}>Посты не были найдены
				</h1>
			}
			
		</div>
	);
}

export default App;