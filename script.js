const checkBox = document.querySelectorAll('.checkBoxes');
const generatePasswordBtn = document.querySelector('#generate-btn');
const passwordLength = document.querySelector('#char-length');
const generatedPassword = document.querySelector("#generated-password");
const copyThePasswordBtn = document.querySelector("#copy");
const upperCaseDataSet = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
const lowerCaseDataSet = 'mnbvcxzasdfghjklpoiuytrewq';
const numberDataSet = '5678904321';
const symbolDataSet = '@!#)(*&^%$}{][;:,.</?>';
let password;
console.log(passwordLength.value)
const getRandomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}
function generatePassword(password='') {
    if (passwordLength.value <1) {
        passwordLength.value = 8;
    }
    if(checkBox[0].checked){
       password += getRandomData(upperCaseDataSet)
    }
    if(checkBox[1].checked){
        password += getRandomData(lowerCaseDataSet)
     }
     if(checkBox[2].checked){
        password += getRandomData(numberDataSet)
     }
     if(checkBox[3].checked){
        password += getRandomData(symbolDataSet)
     }
    
     if(password.length < passwordLength.value){
        return generatePassword(password);
     }
     if (password.length > passwordLength.value) {
        let temp = password;
        password='';
        for (let i = 0; i < passwordLength.value ; i++) {
            password+= temp[i]
        } 
     }
     generatedPassword.value = password
    
}
copyThePasswordBtn.addEventListener("click",()=>{
    
    copyThePasswordBtn.innerHTML = 'Copied'
    navigator.clipboard.writeText(generatedPassword.value);
    
})
generatePasswordBtn.addEventListener('click',()=>{
    if(!checkBox[0].checked && !checkBox[1].checked && !checkBox[2].checked && !checkBox[3].checked)
    {
       generatedPassword.value = "Please checked some parameter given below "
    }
    else{
        copyThePasswordBtn.innerHTML = 'Copy'
        generatePassword();
    }
    
})