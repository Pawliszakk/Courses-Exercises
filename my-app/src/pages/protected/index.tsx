import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import Image from 'next/image';

export default function ProtectedPage() {
	const { data: session } = useSession();

	if (session) {
		return (
			<main>
				<div>
					<h1>This is a Protected page</h1>
					<p>Welcome {session?.user?.name}</p>
					{session?.user?.image && (
						<Image
							src={session?.user?.image}
							alt="avatar of user"
							width={300}
							height={300}
						/>
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

export const getServerSideProps = async (context: any) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};
