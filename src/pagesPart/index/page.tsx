import { FunctionComponent } from 'react'
import { VirtualPage, ContentBlock } from '../../components'
import Footer from './footer'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <VirtualPage>
            <div className="page">
                <div className="page-container">
                    <Footer />
                </div>
            </div>
        </VirtualPage>
    )
}


export default Component