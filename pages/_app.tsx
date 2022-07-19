import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AlertState from '../context/alert/AlertState';
import WalletState from '../context/wallet/WalletState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<AlertState>
				<WalletState>
					<Component {...pageProps} />
				</WalletState>
		</AlertState>
	);
}

export default MyApp
