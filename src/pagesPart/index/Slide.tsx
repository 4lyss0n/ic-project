import { FunctionComponent } from 'react'
import { Slides } from '../../components'

interface IProps {
}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <>
            <Slides ImageProps={[
                { color: '#f00' },
                { color: '#ff0' },
                { color: '#0f0' },
                { color: '#0ff' },
                { color: '#00f' },
                { color: '#f0f' },
            ]} />
        </>
    )
}


export default Component