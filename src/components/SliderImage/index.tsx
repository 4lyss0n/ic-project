import { FunctionComponent } from 'react'

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    color?: string


}

const Component: FunctionComponent<IProps> = ({ color, style = {}, ...props }) => {
    return (
        <>
            <div
                style={{
                    backgroundColor: color || "#000",
                    height: '100vh',
                    width: '100vw',
                    ...style
                }}
                {...props}
            ></div>
        </>
    )
}


export default Component
export type ImageSlider = IProps