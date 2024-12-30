function display()
{
    var companys= {'name1': 'Nike', 'color' : 'blue', 'weight':'200 grams'}  ;
document.getElementById("p1").innerHTML = "My name1 is "+ companys.name1  + "My color is" + companys.color + "My weight is " + companys.weight ; 
}
display() ;

//arrays
var companys = ['Nike', 'Puma', 'Adidas'] ;
document.getElementById("p2").innerHTML =companys[0] ;

