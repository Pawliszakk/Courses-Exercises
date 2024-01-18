import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function HomePage() {
	return (
		<main>
			{' '}
			<div>
				<h1>Home</h1>
				<p>This is homepage</p>
				<Link href="/protected">Protected route</Link>
				<button style={{ padding: '5px 10px' }} onClick={() => signIn()}>
					Sign in
				</button>
			</div>
		</main>
	);
}
