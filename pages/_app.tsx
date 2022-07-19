import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AlertState from '../context/alert/AlertState';
import WalletState from '../context/wallet/WalletState';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AlertState>
			<WalletState>
				<Toaster position='top-right' />
				<Component {...pageProps} />
			</WalletState>
		</AlertState>
	);
}

export default MyApp;
