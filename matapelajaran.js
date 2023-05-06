var mysql = require('./mysql.js')


var Create = function (req,res)
{
    var data = req.body
    //console.log(data)
    

    var query = "INSERT INTO mata_pelajaran(nama_matpel) VALUES ('"+ data.nama_matpel +"')"
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
    var query = "SELECT COUNT(*) as total FROM mata_pelajaran" 
    mysql.DBView.query(query,null,'SELECT',function(getRes1){
    //console.log('getRes1',getRes1)
    if(getRes1[0].total >0)
    {
        data.total = getRes1[0].total
        //console.log('total:',data.total)
        var query = "SELECT * FROM mata_pelajaran LIMIT "+ offset +"," + rows + ""
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

var ReadMatapelajarans = function (req,res)
{
    //var data = {"total":"0","rows": []}
    var query = "SELECT COUNT(*) as total FROM mata_pelajaran" 
    mysql.DBView.query(query,null,'SELECT',function(getRes3){
    //console.log('getRes1',getRes1)
    if(getRes3[0].total >0)
    {
        //data.total = getRes3[0].total
        //console.log('total:',data.total)
        var query = "SELECT * FROM  mata_pelajaran"
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
module.exports.ReadMatapelajarans = ReadMatapelajarans


var ReadMatapelajaranSelected = function (req,res)
{
    //var data = {"total":"0","rows": []}
    var id= req.params.id
    var query = "SELECT COUNT(*) as total FROM mata_pelajaran" 
    mysql.DBView.query(query,null,'SELECT',function(getRes3){
    //console.log('getRes1',getRes1)
    if(getRes3[0].total >0)
    {
        //data.total = getRes3[0].total
        //console.log('total:',data.total)
        var query = "SELECT ujian.id_matpel,mata_pelajaran.nama_matpel FROM ujian INNER JOIN mata_pelajaran ON ujian.id_matpel = mata_pelajaran.id_matpel WHERE ujian.id ='"+ id +"'"
        // var query = "SELECT * FROM  mata_pelajaran"
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
module.exports.ReadMatapelajaranSelected = ReadMatapelajaranSelected

var Update = function (req,res)
{
    var data = req.body
    //console.log(req.body)
    //console.log(req.params)
    var id= req.params.id
    //console.log(id)

    var query = "UPDATE mata_pelajaran SET nama_matpel='"+ data.nama_matpel +"' WHERE id_matpel='"+ id +"'"
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
    var query = "DELETE FROM mata_pelajaran WHERE id_matpel='"+ id +"'"
    mysql.DBView.query(query,null,'DELETE',function(getRes){
        //console.log(getRes)
        res.send(getRes)
    })
}
module.exports.Delete = Delete

