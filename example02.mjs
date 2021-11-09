import { pipeline, Readable, Writable, Transform } from "stream"
import { promisify } from "util"
import { createWriteStream } from "fs"

const pipelineAsync = promisify(pipeline)
{
  const readableStream = Readable({
    read() {
      this.push('arou')
      this.push('eae meo')
      this.push('é os guri')
      this.push(null)
    }
  })

  const writableStream = Writable({
    write(chunk, enconding, cb) {
      console.log('msg', chunk.toString())
      cb()
    }
  })
}

{

  const readableStream = Readable({
    read() {
      for (let index = 0; index < 1e5; index++) {
        const person = { id: Date.now() + index, name: `pessoa-${index}`}
        const data = JSON.stringify(person)
        this.push(data)
      }
      this.push(null)
    }
  })

  const writableMapToCsv = Transform({
    transform(chunk, enconding, cb) {
      const data = JSON.parse(chunk)
      const result = `${data.id},${data.name.toUpperCase()}\n`

      cb(null, result)
    }
  })

  const setHeader = Transform({
    transform(chunk, enconding, cb) {
      this.counter = this.counter ?? 0
      if (this.counter) {
        return cb(null, chunk)
      }
      this.counter += 1
      cb(null, 'id,name\n'.concat(chunk))
    }
  })

  await pipelineAsync(
    readableStream,
    writableMapToCsv,
    setHeader,
    createWriteStream('pessoas.csv')
    // process.stdout
    // writableStream
  )
}
