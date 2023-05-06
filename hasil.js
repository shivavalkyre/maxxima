var mysql = require('./mysql.js')



var Create = function (req,res)
{
    var data = req.body
    //console.log(data)
    

    var query = "INSERT INTO hasil(id_ujian,id_matpel,peserta,hasil) VALUES ('"+ data.id_ujian +"','"+ data.id_matpel +"','"+ data.peserta +"','"+ data.hasil +"')"
    mysql.DBView.query(query,null,'INSERT',function(getRes){
        res.send(getRes)
    })
}
module.exports.Create = Create

var Read = function (req,res)
{
    // format
    //{"total":"1","rows":[{"id":"1","username":"Admin","password":"Admin","level":"Administrator"}]}
    //console.log(req.body)
    var data = {"total":"0","rows": []}
    var page = req.body.page;
    var rows =  req.body.rows;
    var offset = (page - 1) * rows
    var query = "SELECT COUNT(*) as total FROM hasil" 
    mysql.DBView.query(query,null,'SELECT',function(getRes1){
    //console.log('getRes1',getRes1)
    if(getRes1[0].total >0)
    {
        data.total = getRes1[0].total
        //console.log('total:',data.total)
        var query = "SELECT * FROM hasil LIMIT "+ offset +"," + rows + ""
        mysql.DBView.query(query,null,'SELECT',function(getRes2){
            //console.log('getRes2',getRes2)
            data.rows = getRes2
            res.send(data)
        })
    }
    else
    {
        res.send(data)
    }
   
})

}
module.exports.Read = Read

var ReadProducts = function (req,res)
{
    //var data = {"total":"0","rows": []}
    var query = "SELECT COUNT(*) as total FROM tbl_product" 
    mysql.DBView.query(query,null,'SELECT',function(getRes3){
    //console.log('getRes1',getRes1)
    if(getRes3[0].total >0)
    {
        //data.total = getRes3[0].total
        //console.log('total:',data.total)
        var query = "SELECT * FROM tbl_product"
        mysql.DBView.query(query,null,'SELECT',function(getRes4){
            //console.log('getRes4',getRes4)
            // console.log(data)
            //data.rows = getRes4
            //console.log(getRes4)
            res.send(getRes4)
        })
    }
    else
    {
        res.send(data)
    }
    })
}
module.exports.ReadProducts = ReadProducts

var Update = function (req,res)
{
    var data = req.body
    //console.log(req.body)
    //console.log(req.params)
    var id= req.params.id
    //console.log(id)

    var query = "UPDATE hasil SET id_ujian='"+ data.id_ujian +"',id_matpel='"+ data.id_matpel +"',peserta='"+ data.peserta +"',hasil='"+ data.hasil +"' WHERE id='"+ id +"'"
    //console.log(query)
    mysql.DBView.query(query,null,'UPDATE',function(getRes){
        //console.log(getRes)
        res.send(getRes)
    })

}
module.exports.Update = Update

var Delete = function (req,res)
{
    var id = (req.body.id)
    var query = "DELETE FROM hasil WHERE id='"+ id +"'"
    mysql.DBView.query(query,null,'DELETE',function(getRes){
        //console.log(getRes)
        res.send(getRes)
    })
}
module.exports.Delete = Delete

