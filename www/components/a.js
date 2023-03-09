function math()
{
    var vl1,vl2,vl3,x,vl5,vl6;
    vl1 = document.getElementById("valor").value;
    vl2 = document.getElementById("vl2").value;
    vl3 = document.getElementById("vl3").value;
    vl5 = document.getElementById("vl5").value;
    vl6 = document.getElementById("vl6").value;
    var resultado = (vl1*(vl5*vl6))/(vl2*vl3);
    document.getElementById("text").textContent = resultado;
    document.getElementById("x").value = resultado;
}