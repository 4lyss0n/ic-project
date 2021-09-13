import { FunctionComponent } from 'react'
import { ContentBlock } from '../../components'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <main style={{ /*minHeight: '100vh' */ }}>
            <article className="main-content">
                <section>


                    <h2>O que é Depressão ?</h2>

                    <p>Depressão ou trastorno depressivo maior é uma doença comum e séria que afeta negativamente como você se sente, como pensa e como age.</p>

                    <p>Contudo, felizmente tambem é tratavel.</p>

                    {/* <h2>Sintomas de Depressão:</h2> */}
                    <ContentBlock title={
                        <h2>Sintomas de Depressão:</h2>
                    }>
                        <ul>
                            <li>alteração do sono</li>
                            <li>dificuldade de concentração</li>
                            <li>irritabilidade</li>
                            <li>angustia</li>
                            <li>cansaço</li>
                            <li>tristeza profunda</li>
                            <li>falta de vontade de fazer tarefas do dia a dia</li>
                        </ul>
                    </ContentBlock>
                </section>

                <section>

                    <h2>O que é Ansiedade ?</h2>
                    <p>Ansiedade pode ser considerada como uma emoção de alarme que se encontra associada a sensações de angústia, tensão e insegurança que, quando são frequentemente e/ou intensas e incontrolaveis, causando mal estar significativo, conduzem a doença.</p>

                    <ContentBlock title={<h2>Sintomas de Ansiedade</h2>}>
                        <ul>
                            <li>Medos irracionais</li>
                            <li>Insegurança</li>
                            <li>Pânico</li>
                            <li>Comportamentos obsessivos constantes</li>
                            <li>Problemas como sono</li>
                            <li>Medo de falar em publico</li>
                            <li>Preocupação em excesso</li>
                        </ul>
                    </ContentBlock>
                </section>
            </article>


            <article className="more-content">
                <h2>Como tratar a Ansiedade e a Depressão ?</h2>

                <p>O primeiro passo para tratar a ansiedade e a depressão e procurar ajuda medica psicológica e familiar não guarde para você, fale, desabafe você é importante sim, sua vida importa sim.</p>

                <p>E se você não tiver com quem falar ou desabafar ligue 188.</p>

                <p>Você não esta sozinho. Jesus te Ama.</p>

            </article>

        </main>
    )
}


export default Component