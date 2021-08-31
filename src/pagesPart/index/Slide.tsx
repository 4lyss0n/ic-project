import { FunctionComponent } from 'react'
import { Slides } from '../../components'

interface IProps {
}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <>
            <Slides ImageProps={[
                { color: '#a8f' },
                { color: '#888' },
            ]} />
        </>
    )
}


export default Component