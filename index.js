const ocultar=(boton,ocultar,mensaje)=>{
    //  SET TIME
    setTimeout(function(){
    const botone=document.getElementById(boton);
    const rata=document.getElementById(ocultar);
    //rata.style.display="none";
    if(botone.textContent=="➖"){
        botone.textContent=`➕ ${mensaje}`
        rata.style.display="none";        
    }else{
        botone.textContent="➖";
        rata.style.display="block";
    }
    }, 200);
}