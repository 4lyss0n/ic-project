import { FunctionComponent } from 'react'
import Slide from './Slide'
import Page from './page'
import { useState, useEffect } from 'react'

interface IProps {

}

interface IRotation {
    x?: number
    y?: number
    z?: number
}

interface IVector {
    x: number
    y: number
    z?: number
    rotation?: IRotation
}

interface IGameProps {
    pointPosition: IVector
    rotation: IRotation

    direction: IVector
    velocity: IVector
    rotationCount: IRotation
}

const PagePart: FunctionComponent<IProps> = ({ }) => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
    const gameProps: IGameProps = {
        pointPosition: {
            x: 100,
            y: 100,
        },
        direction: {
            x: 1,
            y: 1,
        },
        velocity: {
            x: 6.5,
            y: 4,
        },
        rotation: {
            z: 0
        },
        rotationCount: {
            z: Math.PI * 2 / 360 * 2
        }
    }
    const colors = {
        r: 0,
        g: 0,
        b: 0,
        case: 0,
        increment: .05
    }


    useEffect(() => {
        const canvas: any = document.getElementById('background-canvas')
        if (canvas) {
            setCtx(canvas.getContext('2d'))
        }
    }, [])


    useEffect(() => {
        if (ctx) {
            ctx.canvas.width = document.body.clientWidth
            ctx.canvas.height = document.body.clientHeight

            window.addEventListener('resize', e => {
                ctx.canvas.width = document.body.clientWidth
                ctx.canvas.height = document.body.clientHeight
                gameProps.direction.x = 1
                gameProps.direction.y = 1
                gameProps.pointPosition.x = 0
                gameProps.pointPosition.y = 0
                ctx.fillStyle = "#f4a"
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

            })

            const linearForm = (cx: number, cy: number, r1: number, r2: number, p: number, rot: number = 0, ctx: CanvasRenderingContext2D) => {
                ctx.beginPath()
                const steps = p * 2
                for (let c = 0; c <= steps; c++) {
                    const rotate = ((Math.PI * 2 / steps) * c) - (Math.PI / 2) + rot
                    const isPar = c % 2 == 1 ? false : true
                    const x = cx + Math.cos(rotate) * (isPar ? r1 : r2);
                    const y = cy + Math.sin(rotate) * (isPar ? r1 : r2);
                    if (c == 0) {
                        ctx.moveTo(x, y)
                    } else {
                        ctx.lineTo(x, y)
                    }
                }
            }



            const draw = () => {
                ctx.beginPath()
                linearForm(
                    gameProps.pointPosition.x,
                    gameProps.pointPosition.y,
                    85, 85 / 3, 3, gameProps.rotation.z,
                    ctx
                )
                updateColor()
                ctx.strokeStyle = '#444'
                ctx.fillStyle = `rgb(${colors.r},${colors.g},${colors.b})`
                ctx.fill()
                ctx.stroke()

            }


            const updateColor = () => {
                switch (colors.case) {
                    case 0:
                        colors.r = colors.r + colors.increment
                        if (colors.r >= 255) colors.case++
                        break;
                    case 1:
                        colors.g = colors.g + colors.increment
                        if (colors.g >= 255) colors.case++
                        break
                    case 2:
                        colors.r = colors.r - colors.increment
                        if (colors.r <= 0) colors.case++
                        break
                    case 3:
                        colors.b = colors.b + colors.increment
                        if (colors.b >= 255) colors.case++
                        break
                    case 4:
                        colors.g = colors.g - colors.increment
                        if (colors.g <= 0) colors.case++
                        break
                    case 5:
                        colors.r = colors.r + colors.increment
                        if (colors.r > 255) colors.case++
                        break
                    case 6:
                        colors.b = colors.b - colors.increment
                        if (colors.b <= 0) colors.case = 1
                        break
                    default:
                        colors.r = 0
                        colors.g = 0
                        colors.b = 0
                        colors.case = 0
                        break
                }

            }

            const update = () => {

                if (
                    gameProps.pointPosition.x + (gameProps.direction.x * gameProps.velocity.x) < 0 ||
                    gameProps.pointPosition.x + (gameProps.direction.x * gameProps.velocity.x) > ctx.canvas.width
                ) gameProps.direction.x = -gameProps.direction.x

                if (
                    gameProps.pointPosition.y + (gameProps.direction.y * gameProps.velocity.y) < 0 ||
                    gameProps.pointPosition.y + (gameProps.direction.y * gameProps.velocity.y) > ctx.canvas.height
                ) gameProps.direction.y = -gameProps.direction.y

                if ((gameProps.direction.x != 1) && (gameProps.direction.x != -1)) {
                    gameProps.direction.x = 1
                }
                if ((gameProps.direction.y != 1) && (gameProps.direction.y != -1)) {
                    gameProps.direction.y = 1
                }

                gameProps.pointPosition.x = gameProps.pointPosition.x + (gameProps.direction.x * gameProps.velocity.x)
                gameProps.pointPosition.y = gameProps.pointPosition.y + (gameProps.direction.y * gameProps.velocity.y)

                gameProps.rotation.z = (gameProps.rotation.z || 0) + (gameProps.rotationCount.z || 0)
                draw()
            }


            ctx.fillStyle = "#370050"
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            setInterval(update, 2)



        }
    }, [ctx])


    return (
        <>
            <canvas id="background-canvas" style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                opacity: .85
            }}
            >

            </canvas>

            {/* <Slide /> */}
            <Page />
        </>
    )
}


export default PagePart