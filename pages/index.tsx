import type { NextPage } from 'next'
import { Slides } from '../src/components'


interface IProps {

}

const Page: NextPage<IProps> = ({ }) => {
    return (
        <>
            <Slides />
        </>
    )
}


export default Page