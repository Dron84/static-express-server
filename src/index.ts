import express from 'express'
import path from 'path'

const runServer = async () => {
  const app = express()
  const cssPath = path.join(__dirname, '..', 'client/css') // this 'client/css' is a need to get in index.html folder
  const jsPath = path.join(__dirname, '..', 'client/js') // this 'client/js' is a need to get in index.html folder
  const imgPath = path.join(__dirname, '..', 'client/img') // this 'client/img' is a need to get in index.html folder
  const indexPath = path.join(__dirname, '..', '/client/index.html')

  app.use('/css', express.static(cssPath)) // folder name you need to get from index.html file like '/css'
  app.use('/js', express.static(jsPath)) // folder name you need to get from index.html file like '/js'
  app.use('/img', express.static(imgPath)) // folder name you need to get from index.html file like '/img'

  app.get('/*', function (req, res) {
    res.sendFile(indexPath)
  })

  app.listen(5000, () => {
    console.log('Running a server at http://localhost:5000')
  })
}

try {
  runServer()
} catch (e) {
  console.error(`Error: ${e}`)
}
