// (1)clalling the html
let ownerName = document.getElementById("owner name");
let phone = document.getElementById("Owner Phone Number");
let animalName = document.getElementById("Animal Name");
let type = document.getElementById("type");
let id = document.getElementById("ID");
let examTexArea = document.getElementById("exam");
let exPrice = document.getElementById("exPrice");
let drgPrice =document.getElementById("drgPrice");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let createBtn = document.getElementById("submit");
// console.log(ownerName,phone,animalName,type,id,examTexArea,exPrice,drgPrice,discount,total,createBtn);


// (2) get total
function totalSum(value){
if (exPrice.value != 0){
    total.innerHTML= +exPrice.value + +drgPrice.value - +discount.value ;
    total.style.backgroundColor=`green`
    }else{
        total.style.backgroundColor=`red`;
        total.innerHTML= '';

    }

}

    
        

    
    
        
    
// (3) create product
// (4) save product in the local storage
// (5) clear inputs
// (6) read
// (7) delete
// (8) ubdate
// (9) search
// (10) clear data