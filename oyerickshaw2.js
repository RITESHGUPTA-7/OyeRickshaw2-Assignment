function calc(a){

    let screen1=document.getElementById('input1');
    let screen2=document.getElementById('output1');

    btnval=a.innerText;

    if(btnval=='x')
    {
        btnval='*';
    }
    else if(btnval=='÷')
    {
        btnval='/';
    }

    screen1.value+=btnval;
    
    if(a.innerText=='C')
    {
        screen1.value="";
        screen2.value="";
    }
  
}