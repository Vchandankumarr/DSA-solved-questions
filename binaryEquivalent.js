const http=require("http")
const fs=require("fs");
const { text } = require("stream/consumers");



const server=http.createServer((req,res)=>{

    if(req.url==='/'){
const folder='./'
const files=fs.readdirSync(folder,'utf-8');
res.setHeader("Content-type","text/html")
files.map((file)=>
res.write(`<a href=${file}><li>${file}</li></a>`))


    res.end()
}else if(re .url==="/public"){
    const folder='./public'
    const files=fs.readdirSync(folder,'utf-8')
    res.setHeader("content-type","text/html")
    files.map((file)=>
    res.write(`<a href=${file}><li>${file}</li></a>`)
    )
    res.end()
}
})