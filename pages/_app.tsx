import '../src/styles/index.css'

import type { AppProps } from 'next/app'

type AppFunction = (param0: AppProps) => JSX.Element

const App: AppFunction = ({ Component, pageProps }) => <Component {...pageProps} />

export default App