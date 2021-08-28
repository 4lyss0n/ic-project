import { FunctionComponent, useEffect, useState } from 'react'
import { SlideImage } from '../'
import type { ImageSlider } from '../SliderImage'

import { GrNext } from 'react-icons/gr'


interface IProps {
    ImageProps: ImageSlider[]
}




const Component: FunctionComponent<IProps> = ({ ImageProps }) => {


    const [image, setImage] = useState<JSX.Element>()
    const [imageOut, setImageOut] = useState<JSX.Element>()

    const [showIndex, setShowIndex] = useState<[number, -1 | 1 | 0]>([0, 0])

    useEffect(() => {
        if (!image) {
            setImage(<SlideImage {...ImageProps[showIndex[0]]} />)
            return
        }


        setImageOut(<SlideImage {...ImageProps[showIndex[0]]}

            style={{
                animation: `${showIndex[1] === 1 ? 'OneCenter' : 'UnOneCenter'} 100ms`
            }}
            onAnimationEnd={e => {
                setImage(<SlideImage {...ImageProps[showIndex[0]]} />)

                setImageOut(undefined)
            }}
        />)







    }, [showIndex])


    const addStep = (step: -1 | 1) => {
        if (step === 1) {
            if ((showIndex[0] + 1) >= ImageProps.length) {
                setShowIndex([0, step])
            } else {
                setShowIndex([showIndex[0] + 1, step])
            }
        }
        if (step === -1) {
            if ((showIndex[0] - 1) < 0) {
                setShowIndex([ImageProps.length - 1, step])
            } else {
                setShowIndex([showIndex[0] - 1, step])
            }
        }
    }


    return (
        <>
            <div className="slides-container">
                <div className="image-container">
                    {image}
                    {imageOut}
                </div>




                <div className="buttons-container">
                    <button onClick={e => addStep(-1)}>
                        <GrNext style={{ transform: 'rotate(180deg)' }} />
                    </button>


                    <button onClick={e => addStep(1)}>
                        <GrNext />
                    </button>
                </div>
            </div>
        </>
    )
}


export default Component
