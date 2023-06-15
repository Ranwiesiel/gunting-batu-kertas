function tebak(){
  var cek= confirm("Siap main?");
  while (cek){
    alert("Siap-siap bang!");
    var rawTebak= prompt("Gunting, batu, atau kertas?");
    var tebak= rawTebak.toLowerCase();
    var random= Math.random();
    if (tebak != ["gunting", "batu", "kertas"]){
      alert("yang bener lah bangg..");
      return true;
    }
    if (random < 0.34){
      random="gunting";
    } else if (random < 0.20){
      random="kertas";
    } else if (random > 0.40){
      random="batu";
    }
    if (random==="gunting"){
      gunting()
    } else if (random==="kertas"){
      kertas()
    } else if (random==="batu"){
      batu()
    }
    cek=confirm("mau lagi???")
  }
  
  function kalah(){
    alert("Halah kalah, huuu!!! musuhnya " + random)
  }
  
  function gunting(){
    if (tebak === random){
      alert("Sama-sama "+tebak);
    } else if (tebak == "batu"){
      alert("Anjayy menang!! musuhnya "+random);
    } else{
      kalah()
    }
  }
  
  function kertas(){
    if (tebak === random){
      alert("Sama-sama "+tebak);
    } else if (tebak == "gunting"){
      alert("Anjayy menang!! musuhnya "+random);
    } else{
      kalah()
    }
  }
  
  function batu(){
    if (tebak === random){
      alert("Sama-sama "+tebak);
    } else if (tebak == "kertas"){
      alert("Anjayy menang!! musuhnya "+random);
    } else{
      kalah()
    }
  }
}