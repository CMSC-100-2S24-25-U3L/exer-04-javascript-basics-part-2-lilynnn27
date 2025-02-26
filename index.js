import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';


function generateUniqueID(a, b){
    let random = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    var len = 8; //to be used to trim the generated alphanumeric string
    //source for trimming: https://stackoverflow.com/questions/7463658/how-to-trim-a-string-to-n-chars-in-javascript
    let trimRandom = random.substring(0,len);
    let temp = a[0].concat(b);
    let uniqueID = temp.concat(trimRandom).toLowerCase();    return uniqueID;
} //end of generateUniqueID()



function addAccount(userInfo){
    if (!Array.isArray(userInfo) || userInfo.length < 4) {
        return false;
      } //check if the array has all values

    if(typeof(userInfo[0]) !== 'string' || userInfo[0].trim === ""){
        return false;
    } //check is the first name is not a String and is empty

    if(typeof(userInfo[1]) !== 'string' || userInfo[1].trim === ""){
        return false;
    } //check is the last name is not a String and is empty

    if(typeof(userInfo[2]) !== 'string' || userInfo[2].trim === ""){
        return false;
    } //check is the email is not a String and is empty

    if(!validator.isEmail(userInfo[2])){
        return false;
    } //validator package galing , checks if it's an email

    if (userInfo[3] !== 'number' && userInfo[3]<= 18){
        return false;
    }

    userInfo.push(generateUniqueID(userInfo[0], userInfo[1]));

    try {
        let data = userInfo.join(",") + "\n"; // Ensure data is properly formatted
        appendFileSync('users.txt', data, 'utf8');
        console.log(userInfo, 'was appended to file!');
    } catch (err) {
        console.error('Something went wrong!', err);
    }
} //end of addAccount()


//to check generated Unique ID
console.log(generateUniqueID("Alan", "Turing"));
console.log(generateUniqueID("Cleo", "Marie"));
console.log(generateUniqueID("Erin", "Reilley"));

//to check add account
addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);
addAccount(["Cleo", "Marie", "cmarie@email.com", 33]);
addAccount(["Cleo", "Marie", "cmarie@email.com", 3]); //dapat di maprint
addAccount(["Erin", "Reilley", "era@email.com", 20]);

//dapat di maprint
addAccount(["Zian", 100, "zzz", 22]);
addAccount(["Zian", 100, "zzzz@email.com", 22]);

export default {addAccount}