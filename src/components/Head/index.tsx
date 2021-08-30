import { FunctionComponent } from 'react'
import Head from 'next/head'


interface IProps {
    title?: string
}

const Component: FunctionComponent<IProps> = ({ title = "" }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}


export default Component