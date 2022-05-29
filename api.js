const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

app.get('/bank', (req, res)=>{
    client.query('Select * from bank', (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/bank/:ifsc', (req, res)=>{
    client.query(`Select * from bank where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end
})
app.post('/bank', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into bank(ifsc,bank_id,branch,address,city,district,state,bank_name) 
                       values(${user.ifsc}, '${user.bank_id}', '${user.branch}', '${user.address}','${user.city}','${user.district}','${user.state}','${user.bank_name}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set  ifsc =${bank.ifsc}, 
                       bank_id ='${bank.bank_id}', 
                       branch ='${bank.branch}', 
                       address='${bank.address}',
                       city = '${bank.city}',
                       district ='${bank.district}',
                       state ='${bank.state}',
                       bank_name ='${bank.bank_name}')`


    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
app.delete('/bank/:ifsc', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.ifsc}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
