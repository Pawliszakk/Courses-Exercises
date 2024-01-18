import React from 'react';
import Link from 'next/link';

export default function HomePage() {
	return (
		<main>
			{' '}
			<div>
				<h1>Home</h1>
				<p>This is homepage</p>
				<Link href="/protected">Protected route</Link>
			</div>
		</main>
	);
}
