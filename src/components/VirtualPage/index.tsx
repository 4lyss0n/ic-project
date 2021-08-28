import { FunctionComponent } from 'react'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ children }) => {
    return (
        <div className="VirtualPage">
            {children}
        </div>
    )
}


export default Component