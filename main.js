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
let Mood = 'create';
let Atmp;


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
            animalName: animalName.value.toLowerCase(),
            type : type.value,
            id:id.value.toLowerCase(),
            examTexArea :examTexArea.value,
            exPrice: exPrice.value,
            drgPrice : drgPrice.value,
            discount:discount.value,
            total :total.innerHTML,
        }
        if(Mood==='create'){
            clintData.push(newData);

        }else{
            clintData[Atmp] =newData;
            Mood = 'create';
            createBtn.innerHTML ='create';
        }
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
            <td><button onclick ="Ubdate(${i})" id="ubdate" class="ubdate">Ubdate</button></td>
            <td> <button onclick ="DleteClient( ${i} )" id="delete" class="delete">Delete</button></td>
        </tr>
        `
    }
    let tBody = document.getElementById("tbody");
    tBody.innerHTML = table;
    let deleteAllDiv = document.getElementById("deleteAllDiv");
    if(clintData.length>0){
        deleteAllDiv.innerHTML = `
        <button  onclick ="deleteAll()" class="deleteAll"> Delete All(${clintData.length}) </button>
        `
    }else{
        deleteAllDiv.innerHTML = '';
    }
}
read();

// (7) delete
function DleteClient(i){
    clintData.splice(i,1);
    localStorage.client = JSON.stringify(clintData);
    read();

}
// (8) DeletaAll 
function deleteAll(){
    clintData.splice(0);
    localStorage.clear();
    read();

}
// (9) ubdate
function Ubdate(i){
    id.value =clintData[i].id;
    ownerName.value = clintData[i].ownerName;
    phone.value = clintData[i].phone;
    animalName.value = clintData[i].animalName;
    type.value =clintData[i].value;
    examTexArea.value= clintData[i].examTexArea;
    exPrice.value = clintData[i].exPrice;
    drgPrice.value = clintData[i].drgPrice;
    discount.value =clintData[i].discount;
    createBtn.innerHTML = 'Ubdate';
    Mood = 'update'
    Atmp= i;
    scroll({
        top:0,
        behavior:"smooth",
    });
    totalSum();
    
}
// (10) search
let searchMood = 'id';
function srchMood(idValue){
    let searchInput =document.getElementById("search");
    if(idValue=='searchById'){
        searchMood ='id'
        searchInput.placeholder ='Search by ID';
    }else{
        searchMood = 'animalName';
        searchInput.placeholder ='Search by Animal Name';

    }
    searchInput.focus();
    searchInput.value ='';
    read();

}
function searchFun(value){
    let table ='';
    if(searchMood =='id'){
        for(let i =0 ; i < clintData.length; i++){
            if(clintData[i].id.includes(value)){
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
                        <td><button onclick ="Ubdate(${i})" id="ubdate" class="ubdate">Ubdate</button></td>
                        <td> <button onclick ="DleteClient( ${i} )" id="delete" class="delete">Delete</button></td>
                    </tr>
                    `
            }
        }
    }else{
        for(let i =0 ; i < clintData.length; i++){
            if(clintData[i].animalName.includes(value.toLowerCase())){
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
                        <td><button onclick ="Ubdate(${i})" id="ubdate" class="ubdate">Ubdate</button></td>
                        <td> <button onclick ="DleteClient( ${i} )" id="delete" class="delete">Delete</button></td>
                    </tr>
                    `
            }

        }
    
    }
    tBody = document.getElementById("tbody");
    tBody.innerHTML = table;

}
// (11) clean data
