import type { NextPage } from 'next'
import { Slides, VirtualPage } from '../src/components'


interface IProps {

}

const Page: NextPage<IProps> = ({ }) => {


    return (
        <>
            <Slides ImageProps={
                [
                    { color: '#F00' },
                    { color: '#FF0' },
                    { color: '#0F0' },
                    { color: '#0FF' },
                    { color: '#00F' },
                    { color: '#F0F' },
                ]
            } />

            <VirtualPage>



            </VirtualPage>
        </>
    )
}



export default Page