# static-express-server

This is a simple node java script server with expressjs framework

> WARNING: You need to NODEJS. Link below!  

Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org).

> Note: Documentation by expressjs framwork. Link below!

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)


<!-- [![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url] -->



### if you need to change static folder from your server you need to change 'src/index.ts' file


```js
const cssPath = path.join(__dirname, '..', 'client/css')
```
        
this 'client/css' is a need to get in index.html folder
```js
const jsPath = path.join(__dirname, '..', 'client/js')
```

this 'client/js' is a need to get in index.html folder
```js
const imgPath = path.join(__dirname, '..', 'client/img')
```

this 'client/img' is a need to get in index.html folder
```js
const indexPath = path.join(__dirname, '..', '/client/index.html')
```

this '/client/index.html' is a file you need to start a index file from server


### if you added a some folder actualy you need to add a some routes

```js
app.use('/css', express.static(cssPath)) 
// folder name you need to get from index.html file like '/css'

app.use('/js', express.static(jsPath)) 
// folder name you need to get from index.html file like '/js'

app.use('/img', express.static(imgPath)) 
// folder name you need to get from index.html file like '/img'

```

> WARNING: if you change the src/index.ts file you need to build the file. If you what see the changes you need to run command below



to build the project you need to run this command
```sh
npm run build
```

> NOTE: To start a server you need to run the command below and install all dependencies

Install dependencies

```sh
npm install 
```


Run server
```sh
npm run start 
```