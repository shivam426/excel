
const express = require('express')
// const Mailer  =require('./mail')
const bodyparser = require('body-parser')
const fs = require('fs')
const bcrypt = require('bcryptjs')
const common = require("./common")
const XLSX = require('xlsx')
const Port = process.env.PORT || 8001
let server = express()
server.use(bodyparser.json())

server.post("/adduser", function(req,res){
    
    fs.exists(__dirname+'/users/'+req.query.email+".json", function(result){
        if(result){
            res.send("User already Exists")
        }else{
            common.anurag(req.body.password).then(function(hashedpassword){
                req.body.password =  hashedpassword
                common.pankaj('users.txt', req.body).then(function(){
                     res.send("user added")
          
            })
        })
        }
      
    })

})

server.get("/download", function(req,res){
    
    if(fs.exists('users.txt')){
        common.pankaj('users.txt', req.body)
        .then(function(result){
            if(result)

            abhijeet=function(data){
       
                return new Promise(function(resolve,reject){
                    const ws = XLSX.utils.aoa_to_sheet(data)+"\n"
                    res.send(data)
                    const wb = XLSX.utils.book_new()
                    XLSX.writeFile(wb, 'userexport.xlsx')
                    XLSX.utils.book_append_sheet(wb, ws,function(error){
                        if(error){
                            reject()
                        }
                        else{
                            resolve(
                                res.download('user.export.xlsx')
                            )
                        }
                    })
                    
                })
            }

            else{

            }

    })
}
})
server.listen(Port, function(){
    console.log("Server is running on" , Port)
})