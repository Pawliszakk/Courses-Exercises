import { useSession, signIn, signOut } from 'next-auth/react';

export default function ProtectedPage() {
	const { data: session } = useSession();
	if (session) {
		return (
			<main>
				<div>
					<h1>This is a Protected page</h1>
					<p>Welcome {session?.user?.name}</p>
					{session?.user?.image && (
						<img src={session?.user?.image} alt="avatar of user" />
					)}
					<button onClick={() => signOut()}>Sign out</button>
				</div>
			</main>
		);
	}
	return (
		<main>
			<div>
				<h1>Protected</h1>
				<p>You need to be signed to view this page</p>

				<button style={{ padding: '5px 10px' }} onClick={() => signIn()}>
					Sign in
				</button>
			</div>
		</main>
	);
}
