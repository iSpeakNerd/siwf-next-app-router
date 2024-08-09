import Login from '@/components/login';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import HomePage from '@/components/homepage';

export default async function ClientPage() {
  const session = await auth();
  if (session?.user) {
    session.user = {
      id: session.user.id,
      name: session.user.name,
      image: session.user.image,
    };
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <SessionProvider basePath={'/api/auth'} session={session}>
        <Login />
      </SessionProvider>
      <HomePage />
    </main>
  );
}
