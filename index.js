import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail';

function generateUniqueID(a, b){
    let random = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    var len = 8; //to be used to trim the generated alphanumeric string
    //source for trimming: https://stackoverflow.com/questions/7463658/how-to-trim-a-string-to-n-chars-in-javascript
    var trimRandom = random.substring(0,len);
    let temp = a[0].concat(b);
    let uniqueID = temp.concat(trimRandom).toLowerCase();    return uniqueID;
} //end of generateUniqueID()



function addAccount(...arr){

    isEmail(arr[2]); //validator package galing 
    if (arr[3] > 18){

    }
} //end of addAccount()

console.log(generateUniqueID("Alan", "Turing"));

addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);

export default {addAccount, generateUniqueID}