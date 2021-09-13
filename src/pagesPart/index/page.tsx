import { FunctionComponent } from 'react'
import { VirtualPage, ContentBlock } from '../../components'
import Footer from './footer'
import Main from './main'
import Header from './header'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <VirtualPage>
            <div className="page">
                <div className="page-container">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        </VirtualPage>
    )
}


export default Component