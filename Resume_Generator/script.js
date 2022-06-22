// Work experience
function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 4);
    newNode.setAttribute('placeholder', 'Enter here')

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}
// Academic Qualification
function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 4);
    newNode.setAttribute('placeholder', 'Enter here')

    let weOb = document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}
//generating CV

function generateCV() {
    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById('nameT1')

    nameT1.innerHTML = nameField;

    //direct

    document.getElementById('nameT2').innerHTML = nameField;

    //contacts

    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

    //email

    document.getElementById('emailT').innerHTML = document.getElementById("emailField").value;

    //address

    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;

    // skills  skillField'
    
    document.getElementById('skillT').innerHTML = document.getElementById("skillField").value;

    //links

    document.getElementById('instaT').innerHTML = document.getElementById("instaField").value;

    document.getElementById('fbT').innerHTML = document.getElementById("fbField").value;

    document.getElementById('linkedT').innerHTML = document.getElementById("linkedField").value;

    //Objective

    document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;

    //  work experience

// console.log("It is working");

    let wes = document.getElementsByClassName('weField');
    let str = '';
    for (let e of wes) {
    str = str +`<li> ${e.value} </li>`; }
    document.getElementById('weT').innerHTML = str;

    // Aq

    let aqs = document.getElementsByClassName("eqField");
    let str1 = '';
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    //code for setting image

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
     console.log(reader.reasult);
     reader.onloadend=function()
     {
        document.getElementById('imgTemplate').src=reader.result;
     }

    //printing form in another page

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById("cv-template").style.display = "block";

}

// print CV

function printCV() {
    window.print();
}



//try catch block example

// for (var key in fdata) {
//     try{
//         document.getElementById(key).innerHTML = fdata[key];
//     }
//     catch(e){
//         console.log("errorwithfields "+key);
//     }
     
// var reader = new FileReader();
//             reader.onload = function (e) {
//                 $('#imgshow').attr('src', e.target.result);
//             }
//             reader.readAsDataURL(this.files[0]);

// }
