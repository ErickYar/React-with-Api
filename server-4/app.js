const express = require('express')
const cors = require('cors')

const usersRouter = require('./user.router')

const app = express()



app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
res.json({message:'Server Nuevo'})
})

app.use('/',usersRouter)

app.listen(4091,()=>{
    console.log('la practica hace el maestro')
})
