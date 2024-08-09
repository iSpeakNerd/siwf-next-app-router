'use client';

import '@farcaster/auth-kit/styles.css';
import { useSession, signIn, signOut, getCsrfToken } from 'next-auth/react';
import {
  SignInButton,
  AuthKitProvider,
  StatusAPIResponse,
} from '@farcaster/auth-kit';
import { useCallback, useState } from 'react';

const config = {
  relay: 'https://relay.farcaster.xyz',
  rpcUrl: 'https://mainnet.optimism.io',
  siweUri: 'http://tabletop.xyz/login',
  domain: 'tabletop.xyz',
};

export default function Login() {
  return (
    <>
      <main style={{ fontFamily: 'Inter, sans-serif' }}>
        <AuthKitProvider config={config}>
          <Content />
        </AuthKitProvider>
      </main>
    </>
  );
}

function Content() {
  const [error, setError] = useState(false);

  const getNonce = useCallback(async () => {
    console.log('Getting CSRF token...');
    const nonce = await getCsrfToken();
    console.log('CSRF token:', nonce);
    if (!nonce) throw new Error('Unable to generate nonce');
    return nonce;
  }, []);

  const handleSuccess = useCallback((res: StatusAPIResponse) => {
    console.log('Success response:', res);
    signIn('credentials', {
      message: res.message,
      signature: res.signature,
      name: res.username,
      pfp: res.pfpUrl,
      csrfToken: (res as unknown as any).csrfToken,
      redirect: false,
    });
  }, []);

  return (
    <div>
      <div style={{ position: 'fixed', top: '12px', right: '12px' }}>
        <SignInButton
          nonce={getNonce}
          onSuccess={handleSuccess}
          onError={() => setError(true)}
          onSignOut={() => signOut()}
        />
        {error && <div>Unable to sign in at this time.</div>}
      </div>
      <div style={{ textAlign: 'center' }}>{/* <Profile /> */}</div>
    </div>
  );
}

function Profile() {
  const { data: session } = useSession();

  return session ? (
    <div style={{ fontFamily: 'sans-serif', color: 'black' }}>
      <p>Signed in as {session.user?.name}</p>
      <p>
        <button
          type='button'
          style={{ padding: '6px 12px', cursor: 'pointer' }}
          onClick={() => signOut()}
        >
          Click here to sign out
        </button>
      </p>
    </div>
  ) : (
    <p>
      Click the &quot;Sign in with Farcaster&quot; button above, then scan the
      QR code to sign in.
    </p>
  );
}
