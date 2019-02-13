
function tableCreate() {
    var cuadro = document.getElementById('cuadro');
    for (var i = 0; i < 8; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 8; j++) {
          var td = document.createElement('td');
          if(i%2==0 && j%2==0) td.setAttribute('class','oscuro')
          if(i%2==0 && j%2!=0) td.setAttribute('class','claro')
          if(i%2!=0 && j%2!=0) td.setAttribute('class','oscuro')
          if(i%2!=0 && j%2==0) td.setAttribute('class','claro')
          var img=document.createElement('img')
          img.setAttribute('src','https://1.bp.blogspot.com/-skTw8HPxVAc/WaUTBxnW1rI/AAAAAAAAClw/EQfBSNOqLqgu5REz2gpq5hrc8V8yhut7wCLcBGAs/s1600/imagenes+tiernas+%284%29.png')
          img.setAttribute('width','50')
          td.appendChild(img)
          tr.appendChild(td)
      }
      cuadro.appendChild(tr);
    }
  }
function test() {
    var date = Date.now()
    var number = Math.random() * 100
    alert('Fecha:' + date + ' Nro: ' + number)

    var text = document.getElementsByTagName('p')
    var text2 = document.getElementById('text')

    document.getElementById('text').textContent = 'Hola desde js'

    var text3 = document.getElementsByClassName('myclass')
    console.log(text, text2, text3);

}
  tableCreate();

// test()