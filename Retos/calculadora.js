var number1 = document.getElementById("numero1");
var boton1 = document.getElementById("submit1");
boton1.addEventListener("click",calcularDecimal);


function calcularDecimal(){
    let v = parseInt(number1.value)
    let res = v
    let binario = [];
    let modu;
    do{
        if(res==1){
            binario.push(1);
            res=0;
        }
        else{
            modu = res%2;
            res = Math.floor(res/2);
            binario.push(modu);
        }
    } while (res>=1)
    document.getElementById("bin").innerHTML = JSON.stringify(binario);
    calcularOctal();
    calcularHexa();
}

function calcularOctal(){
    let v = parseInt(number1.value)
    let res = v
    let binario = [];
    let modu;
    do{
        if(res==1){
            binario.push(1);
            res=0;
        }
        else{
            modu = res%8;
            res = Math.floor(res/8);
            binario.push(modu);
        }
    } while (res>=1)
    document.getElementById("oc").innerHTML = JSON.stringify(binario);
}

function calcularHexa(){
    let v = parseInt(number1.value)
    let res = v
    let binario = [];
    let modu;
    do{
        if(res==1){
            binario.push(1);
            res=0;
        }
        else{
            modu = res%16;
            res = Math.floor(res/16);
            binario.push(modu);
        }
    } while (res>=1)
    for(let i=0;i<binario.length;i++){
        if (binario[i]==10){
            binario[i]="A";
        }
        else if (binario[i]==11){
            binario[i]="B";
        }
        else if (binario[i]==12){
            binario[i]="C";
        }
        else if (binario[i]==13){
            binario[i]="D";
        }
        else if (binario[i]==14){
            binario[i]="E";
        }
        else if (binario[i]==15){
            binario[i]="F";
        }
    }
    document.getElementById("hex").innerHTML = JSON.stringify(binario);
}


