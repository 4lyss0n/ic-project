import { FunctionComponent, useEffect, useState } from 'react'
import { SlideImage } from '../'
import type { ImageSlider } from '../SliderImage'

import { GrNext } from 'react-icons/gr'
import { delay, randomKey } from '../../utils'
import { useCallback } from 'react'


interface IProps {
    ImageProps: ImageSlider[]
}




const Component: FunctionComponent<IProps> = ({ ImageProps }) => {


    const [image, setImage] = useState<JSX.Element>()
    const [imageOut, setImageOut] = useState<JSX.Element>()

    const [showIndex, setShowIndex] = useState<[number, -1 | 1 | 0]>([0, 0])
    const [key, setKey] = useState('')

    const animation = (keyProp: string) => {
        const key = document.querySelector('html')?.getAttribute('slide-animation-key')
        if (keyProp == key) {
            addStep(1)
        }
    }

    useEffect(() => {
        document.querySelector('html')?.setAttribute('slide-animation-key', key)
    }, [key])


    useEffect(() => {
        if (!image) {
            setImage(<SlideImage {...ImageProps[showIndex[0]]} />)
            delay(15 * 1000, '').then((props: string[]) => {
                animation(props[0])
            })
            return
        }


        const newKey = randomKey(10)
        delay(15 * 1000, newKey).then((props: string[]) => {
            animation(props[0])
        })
        setKey(newKey)

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
            <div className="slide">
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
