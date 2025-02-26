import user from './index.js'



//to check generated Unique ID
user.generateUniqueID("Alan", "Turing");
user.generateUniqueID("Cleo", "Marie");
user.generateUniqueID("Erin", "Reilley");

//to check add account
user.addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);
user.addAccount(["Cleo", "Marie", "cmarie@email.com", 33]);
user.addAccount(["Erin", "Reilley", "era@email.com", 20]);

//dapat di maprint
user.addAccount(["Zian", 100, "zzz", 22]);
user.addAccount(["Zian", 100, "zzzz@email.com", 22]);
user.addAccount(["Cleo", "Marie", "cmarie@email.com", 3]); 


