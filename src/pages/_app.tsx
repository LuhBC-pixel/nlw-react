import '../styles/global.css';
import { useSession } from 'next-auth/client';
import Login from './login';

function MyApp({ Component, pageProps }) {
  const [session] = useSession();

  return (
    <div>
      {!session ? <Login /> : <Component {...pageProps} session={session} />}
    </div>
  )
}

export default MyApp
