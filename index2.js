const Account = require ("./account");
Account.tellMeAboutClass();
Account.tellMeAboutTime ();

const myAccount = new Account ("Jasur", 200000, 3459834886987);
myAccount.giveMeDetails();

myAccount.makeDeposit(100000);
//40000 ferarri
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);