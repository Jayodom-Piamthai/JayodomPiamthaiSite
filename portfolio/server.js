const express = require('express')
const app = express()
import fs from 'fs'
import path from 'path'

// app.set('view engine','ejs')

app.get('/' , (req,res) =>{
    fs.readFile(path.resolve('./index.html '),'utf-8',(err,data)=>{
        if(err){
            return res.status(500).send('ERROR!!! sorry for the inconvenient');
        }
        return res.send(
            data.replace(
                ' <div id="root"></div>',
                ` <div id="root">${ReactDOMServer.renderToString(<Main />)}</div>`
            )
        )
    })
})

app.get('/portfolio' , (req,res) =>{
    fs.readFile(path.resolve('./index.html '),'utf-8',(err,data)=>{
        if(err){
            return res.status(500).send('ERROR!!! sorry for the inconvenient');
        }
        return res.send(
            data.replace(
                ' <div id="root"></div>',
                ` <div id="root">${ReactDOMServer.renderToString(<Portfolio />)}</div>`
            )
        )
    })
})

app.use('/blog')

// app.use(express.static(path.resolve(__dirname,'..','')))

app.listen(1359)