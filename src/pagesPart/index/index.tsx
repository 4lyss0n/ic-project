import { FunctionComponent } from 'react'
import Slide from './Slide'
import Page from './page'


interface IProps {

}

const PagePart: FunctionComponent<IProps> = ({ }) => {
    return (
        <>
            <Slide />
            <Page />
        </>
    )
}


export default PagePart