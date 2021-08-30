import { FunctionComponent } from 'react'
import { VirtualPage } from '../../components'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <VirtualPage>
            <header>
                <h1>this is a header of page</h1>
            </header>
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas pariatur iure rerum voluptatum autem quibusdam officiis velit dolor veritatis non error ut, tempore placeat officia? Enim esse deleniti autem.</p>
            </main>
            <footer>
                <h3>this is a footer of page</h3>
            </footer>
        </VirtualPage>
    )
}


export default Component