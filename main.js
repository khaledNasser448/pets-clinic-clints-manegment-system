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
    total.style.backgroundColor=`green`;
    }else{
        total.style.backgroundColor=`red`;
        total.innerHTML= '';

    }

}
// (3) create product
let clintData;
if(localStorage.client != null){
    clintData = JSON.parse(localStorage.client);
    
}else{
    clintData =[];
}
function create(){
    if(ownerName != '' && phone != ''){
        let newData = {
            ownerName : ownerName.value,
            phone: phone.value,
            animalName: animalName.value,
            type : type.value,
            id:id.value,
            examTexArea :examTexArea.value,
            exPrice: exPrice.value,
            drgPrice : drgPrice.value,
            discount:discount.value,
            total :total.innerHTML,
        }
        clintData.push(newData);
        // (4) save product in the local storage
        localStorage.setItem('client', JSON.stringify(clintData));
        // console.log(clintData);
        clearData();
        read();
    }

}
// (5) clear inputs
function clearData(){
    ownerName.value ='';
    phone.value ='';
    animalName.value ='';
    type.value = '';
    id.value = '';
    examTexArea.value ='';
    exPrice.value = '';
    drgPrice.value = '';
    discount.value = '';
    total.innerHTML = '';
    total.style.backgroundColor =`red`;
}
// (6) read
function read(){
    let table = '';
    for(let i = 0 ; i < clintData.length ; i ++){
        table += `
        <tr>
            <td> ${clintData[i].id} </td>
            <td>${clintData[i].ownerName}</td>
            <td>${clintData[i].phone}</td>
            <td>${clintData[i].animalName}</td>
            <td>${clintData[i].type}</td>
            <td><textarea name="tableTextAtea" id="tableTextAtea"> ${clintData[i].examTexArea}</textarea></td>
            <td>${clintData[i].exPrice}</td>
            <td>${clintData[i].drgPrice}</td>
            <td>${clintData[i].discount}</td>
            <td>${clintData[i].total}</td>
            <td><button id="ubdate" class="ubdate">Ubdate</button></td>
            <td> <button onclick ="DleteClient( ${i} )" id="delete" class="delete">Delete</button></td>
        </tr>
        `
    }
    let tBody = document.getElementById("tbody");
    tBody.innerHTML = table;
}
read();

// (7) delete
function DleteClient(i){
    clintData.splice(i,1);
    localStorage.client = JSON.stringify(clintData);
    read();

}
// (8) ubdate
// (9) search
// (10) clear data