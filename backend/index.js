var express = require('express');
var appConfig = require('./src/app.config');
const  routes= require('./src/app.routes'); 
const path =require('path')
const app = express();
 


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(appConfig);

app.use("/api",routes, ()=>{throw 'server error'})
app.use("/", express.static(path.join(__dirname, "./src/public/frontend/browser")) )

app.get('/*', (req, res)=>{
    res.sendFile('./src/public/frontend/browser/index.html');
});
 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });
    return;
});


app.listen(process.env.PORT, () => {
    console.log("Running in Port:" + process.env.PORT);
})