const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const myNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function(){
    hideMessage();
    if(billAmount.value > 0){
        if(billAmount.value <= cashAmount.value){
            const remainAmount = cashAmount.value - billAmount.value;
            changeCalculate(remainAmount);
        }else{
            setTableData();
            showMessage("Your given cash should be atleast equal to bill amount !");  
        }
    }else{
        setTableData();
        showMessage("Bill amount should be greater than zero !");
    }
});

function changeCalculate(amountToReturn){
    for(let i=0;i<myNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToReturn / myNotes[i]);
        amountToReturn = amountToReturn % myNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
function setTableData(){
    for(let i=0;i<myNotes.length;i++){
        noOfNotes[i].innerText = "";
    }
}
function hideMessage(){
    message.style.display="none";
}
function showMessage(msg){
    message.style.display="block";
    message.innerText = msg;
}