var express = require ('express')
var bodyParser = require('body-parser');
var util = require('util');
var futil = require('./utility.js');
var path = require('path')



// ================ SIM SISWA ====================
var validate = require('./validate.js')
var siswa = require('./siswa.js')
var matapelajaran = require('./matapelajaran.js')
var peserta = require('./peserta.js')
var ujian = require('./ujian.js')
var hasil = require('./hasil.js')

var app = express()
var router = express.Router()

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// EJS PART =================================

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/home', (req, res)=>{
    res.render('home');
});

router.get('/piramid', (req, res)=>{
    res.render('piramid');
});

router.get('/bilanganganjil', (req, res)=>{
    res.render('bilanganganjil');
});

router.get('/faktorial', (req, res)=>{
    res.render('faktorial');
});

router.get('/kabisat', (req, res)=>{
    res.render('kabisat');
});


router.get('/siswa', (req, res)=>{
    res.render('siswa');
});

router.get('/peserta', (req, res)=>{
    res.render('peserta');
});

router.get('/matapelajaran', (req, res)=>{
    res.render('matapelajaran');
});

router.get('/ujian', (req, res)=>{
    res.render('ujian');
});

router.get('/hasil', (req, res)=>{
    res.render('hasil');
});

// EJS PART =================================

// ROUTING PART =============================

router.post('/validate',function(req,res){
    validate.Read(req,res)
})



// ============= Siswa ============

router.post('/get_siswa',function(req,res){
    siswa.Read(req,res)
})

router.post('/get_siswa_all',function(req,res){
    siswa.ReadSiswas(req,res)
})

router.post('/save_siswa',function(req,res){
    siswa.Create(req,res)
})

 router.post('/update_siswa/:id',function(req,res){
    siswa.Update(req,res)
})

router.delete('/destroy_siswa',function(req,res){
    siswa.Delete(req,res)
})

router.post('/get_siswa_all',function(req,res){
    siswa.ReadSiswas(req,res)
})
// ============== Siswa =============

// ============= Peserta ============

router.post('/get_peserta',function(req,res){
    peserta.Read(req,res)
})

router.post('/get_peserta_selected_by_ujian/:id',function(req,res){
    peserta.ReadPesertas(req,res)
})

router.post('/save_peserta',function(req,res){
    peserta.Create(req,res)
})

 router.post('/update_peserta/:id',function(req,res){
    peserta.Update(req,res)
})

router.delete('/destroy_peserta',function(req,res){
    peserta.Delete(req,res)
})
// ============== Peserta =============

// ============= Mata Pelajaran ============

router.post('/get_matapelajaran',function(req,res){
    matapelajaran.Read(req,res)
})

router.post('/get_matapelajaran_all',function(req,res){
    matapelajaran.ReadMatapelajarans(req,res)
})

router.post('/get_matapelajaran_selected_by_ujian/:id',function(req,res){
    matapelajaran.ReadMatapelajaranSelected(req,res)
})

router.post('/save_matapelajaran',function(req,res){
    matapelajaran.Create(req,res)
})


 router.post('/update_matapelajaran/:id',function(req,res){
    matapelajaran.Update(req,res)
})

router.delete('/destroy_matapelajaran',function(req,res){
    matapelajaran.Delete(req,res)
})

router.post('/get_matapelajaran_all',function(req,res){
    matapelajaran.ReadSiswas(req,res)
})
// ============== Mata pelajaran =============

// ============= Ujian ============

router.post('/get_ujian',function(req,res){
    ujian.Read(req,res)
})

router.post('/get_ujian_all',function(req,res){
    ujian.ReadUjians(req,res)
})

router.post('/save_ujian',function(req,res){
    ujian.Create(req,res)
})

 router.post('/update_ujian/:id',function(req,res){
    ujian.Update(req,res)
})

router.delete('/destroy_ujian',function(req,res){
    ujian.Delete(req,res)
})

router.post('/get_ujian_all',function(req,res){
    ujian.ReadSiswas(req,res)
})
// ============== Ujian =============

// ============= Hasil ============

router.post('/get_hasil',function(req,res){
    hasil.Read(req,res)
})

router.post('/save_hasil',function(req,res){
    hasil.Create(req,res)
})

 router.post('/update_hasil/:id',function(req,res){
    hasil.Update(req,res)
})

router.delete('/destroy_hasil',function(req,res){
    hasil.Delete(req,res)
})

router.post('/get_hasil_all',function(req,res){
    hasil.ReadSiswas(req,res)
})
// ============== Hasil =============

// ROUTING PART =============================


app.use(router)

var server = app.listen(process.env.SERVER_PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    futil.logger.debug('\n' + futil.shtm() + '- [ W A K E   U P ] | STARTING ' + util.inspect(process.env.TITLE));
    futil.logger.debug(futil.shtm() + '- [ W A K E   U P ] | RUN AT PATH: /api/controller/pattern, PORT: ' + port);
});
