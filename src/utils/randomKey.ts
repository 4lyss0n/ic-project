import { randomBytes } from 'crypto'
type randomKeyFunction = (length: number, enconding?: BufferEncoding) => string

const randomKey: randomKeyFunction = (length = 1, enconding = 'hex') => {
    let result = ''
    let run = true
    while (run) {
        const buffer = Buffer.from(randomBytes(length))
        result += buffer.toString(enconding)
        if (result.length >= length) run = false
    }
    result = result.slice(0, length)
    return result
}

export default randomKey
