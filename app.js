const euro = document.getElementById('euro');
const dollar = document.getElementById('dollar');
const indianRs = document.getElementById('indianRs');
const lankRs = document.getElementById('lankRs');
euro.addEventListener('input', euroToDolarToIndianRsToLankaRs);
function euroToDolarToIndianRsToLankaRs(){
    const eu = parseInt(euro.value);
    const dl = 1.11*eu;
    const ir = eu*76.76;
    const lr= eu*196.41;
    dollar.value = dl;
    indianRs.value = ir;
    lankRs.value = lr; 
}
euroToDolarToIndianRsToLankaRs();
dollar.addEventListener('input', dollarToEuroToIndianRsToLankaRs);
function dollarToEuroToIndianRsToLankaRs (){
 const dl = parseFloat(dollar.value)
    const eu = dl*0.90;
    const ir = dl*68.86;
    const lr= dl*176.19;
    euro.value = eu;
    indianRs.value = ir;
    lankRs.value = lr;
}
dollarToEuroToIndianRsToLankaRs();
indianRs.addEventListener('input',indianRsToEuroToDollarToLankaRs);
function indianRsToEuroToDollarToLankaRs(){
    const ir = parseFloat(indianRs.value)
    const eu = ir*0.13;
    const dl = ir*0.015;
    const lr = ir*2.56;
    euro.value = eu;
    dollar.value = dl;
    lankRs.value = lr;   
}
indianRsToEuroToDollarToLankaRs();
lankRs.addEventListener('input',lankRsToEuroToDollarToIndianRs);
function lankRsToEuroToDollarToIndianRs(){
    const lr = parseFloat(lankRs.value)
    const eu = lr*0.0051;
    const dl = lr*0.0057;
    const ir= lr*0.39;
    euro.value = eu;
    dollar.value = dl;
    indianRs.value = ir;
}
lankRsToEuroToDollarToindianRs();
function main(){
  euroToDolarToIndianRsToLankaRs();  
  dollarToEuroToIndianRsToLankaRs();
  indianRsToEuroToDollarToLankaRs(); 
  lankRsToEuroToDollarToindianRs();
}
