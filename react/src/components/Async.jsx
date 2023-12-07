import React, { useEffect, useState } from 'react';

const Async = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			});
		// const handlePostsFetch = async () => {
		// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		// 	const resData = res.json();
		// 	setPosts(resData);
		// };
		// handlePostsFetch();
	}, []);

	return (
		<div>
			<ul>
				{posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
				{!posts && <p>We found no posts</p>}
			</ul>
		</div>
	);
};

export default Async;
