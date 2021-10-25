const ocultar = (boton, ocultar, mensaje) => {
  //  SET TIME
  setTimeout(function () {
    const botone = document.getElementById(boton);
    const rata = document.getElementById(ocultar);
    //rata.style.display="none";
    if (botone.textContent == "➖") {
      botone.textContent = `➕ ${mensaje}`;
      //rata.style.display = "none";
      rata.style.visibility = "hidden";
    } else {
      botone.textContent = "➖";
      //rata.style.display = "block";
      rata.style.visibility = "visible";
    }
  }, 200);
};
/*
const Ubicaina=()=>{
    const proba=document.getElementById("ubicacion");
    console.log(proba);
    console.log(document.getElementById("ciudad").textContent);
}

Ubicaina();*/
