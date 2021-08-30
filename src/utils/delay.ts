
type delayFunction = (ms: number, ...props: any[]) => Promise<any[]>


const delay: delayFunction = (ms, ...props) => new Promise(resolve => setTimeout(() => { resolve(props) }, ms))

export default delay