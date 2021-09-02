const bcrypt = require("bcryptjs")
const fs = require("fs")
const XLSX = require('xlsx')
exports.pankaj =  function(filename,data){
    return new Promise(function(resolve,reject){
        var string = JSON.stringify(data)+"\n"
        fs.appendFile(filename,string,function(error){
         if(error){
             reject()
         }
         else{
             resolve()
         }
     })
    })
}


exports.anurag = function(password){
    return new Promise(function(resolve,reject){
        var saltrounds = 10
        bcrypt.hash(password,saltrounds,function(error,hash){
            if(error){
                reject(error)
            }else{
                resolve(hash)
            }
        })
    })
}
// exports.abhijeet=function(data){
//     console.log(data)
//     return new Promise(function(resolve,reject){
//         const ws = XLSX.utils.aoa_to_sheet(data)+"\n"
//         const wb = XLSX.utils.book_new()
//         XLSX.writeFile(wb, 'user.export.xlsx')
//         XLSX.utils.book_append_sheet(wb, ws,function(error){
//             if(error){
//                 reject()
//             }
//             else{
//                 resolve()
//             }
//         })
        
//     })
// }