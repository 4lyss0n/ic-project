import { FunctionComponent } from 'react'
import { VirtualPage, ContentBlock } from '../../components'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <VirtualPage>
            <div className="page-container">
                <header>
                    <h1>Ansiedade e Depressão</h1>
                </header>
                <main>
                    <ContentBlock title={<h2>Objetivos</h2>} initEnable={true}>
                        Os objetivos de nosso projeto é fornecer apoio a pessoas que sofrem de doenças como ansiedade e depressão.
                    </ContentBlock>
                    <ContentBlock title={<h2>Justificativa</h2>} initEnable={true}>
                        Escolhemos esse tema, porque muitas pessoas sofrem com essas doenças esperamos ajudar essas pessoas de alguma forma. Será um incentivo para essas procurarem ajuda profissional e mostrar que elas não estão sozinhas
                    </ContentBlock>
                </main>
                <footer>
                    <h3>this is a footer of page</h3>
                </footer>
            </div>
        </VirtualPage>
    )
}


export default Component