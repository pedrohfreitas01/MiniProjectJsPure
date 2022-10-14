


function insert(number){
    let numberTaked = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numberTaked + number

}




function clearResult(){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring()
}



function calcu(){

    let result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result)
        //eval() para calcular o resultado depois
        // como aplicação simples , evitar de usar eval() em grande apps !!! 
    }
    else{
        document.getElementById('result').innerHTML = '...'
    }


}


function clearResult(){
    document.getElementById('result').innerHTML = " ";

}