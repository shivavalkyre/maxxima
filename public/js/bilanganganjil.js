
$('#rs').textbox().css('text-align','center');
var arr_bilangan =[];

$('#btn').bind('click', function(){
    var jumlah_bilangan = parseInt($('#jb').textbox('getValue'));
    var angka_mulai = parseInt($('#st').textbox('getValue'));
    var operator = $('#op').textbox('getValue');
    arr_bilangan = []
    cetak_bil_ganjil(jumlah_bilangan,angka_mulai,operator)
    var deret = ''
    var hasil_operasi =0;
    for (var i=0;i<arr_bilangan.length;i++)
    {
        deret+=arr_bilangan[i]+','
        if (operator == 'A'){
            hasil_operasi = hasil_operasi + arr_bilangan[i]
            console.log(hasil_operasi)
        }else if(operator == 'B'){

            if (i>0){
                hasil_operasi = hasil_operasi - arr_bilangan[i]
            }else{
                hasil_operasi = arr_bilangan[i]
            }
            
            console.log(hasil_operasi)
        }
    }
    deret = deret.substring(0,deret.length-1) + '\n' + hasil_operasi;

    console.log(deret)
    $('#rs').textbox('setValue',deret)
});

function cetak_bil_ganjil (jml_bilangan,angka_mulai,operator){
    var limit = jml_bilangan
    var start_from = parseInt(angka_mulai)
    
    
    while(arr_bilangan.length < limit)
    {
        if(start_from%2 !== 0)
        {
            console.log('ganjil: ' + start_from)
            arr_bilangan.push(start_from)
        }
        start_from++
    }
   

    return arr_bilangan 
}