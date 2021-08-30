import type { NextPage } from 'next'
import { Head } from '../src/components'

import PagePart from '../src/pagesPart/index'


interface IProps {

}

const Page: NextPage<IProps> = ({ }) => {


    return (
        <>
            <Head title="I.C. Project" />
            <PagePart />
        </>
    )
}



export default Page