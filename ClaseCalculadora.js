//Clase calculadora
class Calculadora{ //declaramos la clase o molde para pbjeto
    constructor(numero1,numero2){//funcion donde se declaran parametros
        this.Numero1=numero1;//atributos
        this.Numero2=numero2;//atributos
    }
    suma(){//funcion atributo 
        return parseInt(this.Numero1) + parseInt(this.Numero2);//retorna el resultado
    }
    resta(){//funcion atributo 
        return parseInt(this.Numero1) - parseInt(this.Numero2);//retorna el resultado
    }
    multiplicacion(){//funcion atributo 
        return parseInt(this.Numero1) * parseInt(this.Numero2);//retorna el resultado
    }
    division(){//funcion atributo 
        return parseInt(this.Numero1) / parseInt(this.Numero2);//retorna el resultado
    }
}
//Proceso de calculo
//Declaramos variables globales
let G_Numero1 = 0;
let G_Numero2 = 0;
let G_Signo = "";
//click en los numeros
function numeros(a){
    document.getElementById("resultado").value = document.getElementById("resultado").value+a;
}
function signo(b){
    G_Numero1 = document.getElementById("resultado").value;
    G_Signo = b;
    document.getElementById("resultado").value="";
}
function igual(){
    G_Numero2 = document.getElementById("resultado").value;
    let claseinstanciada = new Calculadora(G_Numero1,G_Numero2);
    switch (G_Signo){
    case '+':
    document.getElementById("resultado").value = claseinstanciada.suma();
    break;
    case '-':
    document.getElementById("resultado").value = claseinstanciada.resta();
    break;
    case '*':
    document.getElementById("resultado").value = claseinstanciada.multiplicacion();
    break;
    case '/':
    document.getElementById("resultado").value = claseinstanciada.division();
    break;
    }
}
