 window.onload = function (){ document.getElementById("prices").addEventListener("click",pricesConstr);
document.getElementById("close").onclick = function() {
document.getElementById("prices_module").style.display = "none";
}
 }
 
function pricesConstr(){
document.getElementById("prices_module").style.display="block";
$("<div class='price_list' id='price_list'><div").appendTo("#prices_module");		
$("<p>Прайс лист</p>").appendTo("#price_list");
$("<p>Наша фирма предлагает любые виды ремонта пластиковых окон и алюминиевых конструкций:</p>").appendTo("#price_list");
$("<p>РЕГУЛИРОВКА СТВОРОК</p>").appendTo("#price_list");
$("<p>Виды работ </p>").appendTo("#price_list");




}


