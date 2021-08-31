import { memo, FunctionComponent, useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

interface IProps {
    title: JSX.Element | string
    initEnable?: boolean
    children: JSX.Element | string
}

const Component: FunctionComponent<IProps> = ({ children, title, initEnable = false }) => {
    const [isEnable, setEnable] = useState(initEnable)

    return (
        <div className="content-block">
            <div className="title">
                <button onClick={e => setEnable(!isEnable)}><AiFillCaretRight className={isEnable ? 'rotate' : ''} /></button>
                <div>{title}</div>
            </div>
            <div className={"content " + `${isEnable ? 'enable' : 'disnable'}`}
                style={{ display: isEnable ? 'block' : undefined }}
                onAnimationEnd={e => {
                    if (e.animationName == "go-in") {
                        e.currentTarget.style.display = 'none'
                    }
                }}
            >{children}</div>
        </div>
    )
}


export default memo(Component)