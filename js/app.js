var Calculadora = {
  display: document.getElementById('display'),
  uno: document.getElementById('1'),
  dos: document.getElementById('2'),
  tres: document.getElementById('3'),
  cuatro: document.getElementById('4'),
  cinco: document.getElementById('5'),
  seis: document.getElementById('6'),
  siete: document.getElementById('7'),
  ocho: document.getElementById('8'),
  nueve: document.getElementById('9'),
  cero: document.getElementById('0'),
  on: document.getElementById('on'),
  punto: document.getElementById('punto'),
  mas: document.getElementById('mas'),
  menos: document.getElementById('menos'),
  por: document.getElementById('por'),
  dividido: document.getElementById('dividido'),
  igual: document.getElementById('igual'),
  sign: document.getElementById('sign'),
  res: 0,
  aux: 0,
  aux2: 0,
  aux3: 0,
  re2: 0,
  init: (function() {
    this.eventos()
  }),
  eventos: function() {
    this.uno.addEventListener('click', function() {
      Calculadora.mostrar("1")
    });
    this.dos.addEventListener('click', function() {
      Calculadora.mostrar("2")
    });
    this.tres.addEventListener('click', function() {
      Calculadora.mostrar("3")
    });
    this.cuatro.addEventListener('click', function() {
      Calculadora.mostrar("4")
    });
    this.cinco.addEventListener('click', function() {
      Calculadora.mostrar("5")
    });
    this.seis.addEventListener('click', function() {
      Calculadora.mostrar("6")
    });
    this.siete.addEventListener('click', function() {
      Calculadora.mostrar("7")
    });
    this.ocho.addEventListener('click', function() {
      Calculadora.mostrar("8")
    });
    this.nueve.addEventListener('click', function() {
      Calculadora.mostrar("9")
    });
    this.cero.addEventListener('click', function() {
      Calculadora.mostrar("0")
    });
    this.on.addEventListener('click', function() {
      display.innerHTML = 0
      Calculadora.reset()
    });
    this.punto.addEventListener('click', function() {
      if (document.getElementById("display").textContent.indexOf(".")==-1) {
          Calculadora.mostrar(".")
      }
    });
    this.mas.addEventListener('click', function() {
      Calculadora.sumar(parseFloat(document.getElementById("display").textContent))
    });

    this.menos.addEventListener('click', function() {
      Calculadora.restar(parseFloat(document.getElementById("display").textContent))
    });
    this.por.addEventListener('click', function() {
      Calculadora.multiplicar(parseFloat(document.getElementById("display").textContent))
    });
    this.dividido.addEventListener('click', function() {
      Calculadora.dividir(parseFloat(document.getElementById("display").textContent))
    });
    this.sign.addEventListener('click', function() {
      Calculadora.csigno(parseFloat(document.getElementById("display").textContent))
    });

    this.igual.addEventListener('click', function() {
      Calculadora.resultado()
    });
  },
  mostrar: function(num) {
            if (this.aux2==1) {
                document.getElementById("display").innerHTML = "";
                this.aux2=0;
            }

            if (document.getElementById("display").textContent=="") {
              if (num==".") {
                num = "0.";
              }
            }

            if (document.getElementById("display").textContent=="0") {
              if (num==".") {
                num = "0.";
              }
            }
            else {
              num = document.getElementById("display").textContent + num;
              num = num.substring(0,8);
            }

            document.getElementById("display").innerHTML = num;
            this.aux3=0;
  },

  sumar: function(suma) {
    this.res = parseFloat(suma);
    this.aux = 1;
    document.getElementById("display").innerHTML = "";
  },

  restar: function(resta) {
    this.res = parseFloat(resta);
    this.aux = 2;
    document.getElementById("display").innerHTML = "";
  },
  multiplicar: function(multi) {
    this.res = parseFloat(multi);
    this.aux = 3;
    document.getElementById("display").innerHTML = "";
  },
  dividir: function(divi) {
    this.res = parseFloat(divi);
    this.aux = 4;
    document.getElementById("display").innerHTML = "";
  },

  resultado: function() {
    if (this.aux3==0) {
      this.res2 = parseFloat(document.getElementById("display").textContent);
      this.aux3=1;
    }

    if (this.aux==1) {
      this.res = this.res + this.res2;
    }
    if (this.aux==2) {
      this.res = this.res - this.res2;
    }
    if (this.aux==3) {
      this.res = this.res * this.res2;
    }
    if (this.aux==4) {
      this.res = this.res / this.res2;
    }

    document.getElementById("display").innerHTML = this.res.toString().substring(0,8);
    this.aux2 = 1;
  },

  reset: function(){
    this.res=0;
  },

  csigno: function(cambias){
    cambias = parseFloat(cambias) * -1;
    document.getElementById("display").innerHTML = cambias;
  }

}
Calculadora.init()
