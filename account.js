// const moment = require ("moment");

// class Account {
//     #amount;
//     #account_id;
//     constructor (name, amount, account_id) {
//         this.name = name;
//         this.#amount = amount;
//         this.account_id = account_id;
//     }

//     tellMeBalance () {
//         console.log (`Sizning hisobingizdas=gi qoldiq ${this.#amount}`);
//         return this.#amount;
//     }

//     withdrawMoney (amount) {
//         if(this.#amount > amount) {
//             this.#amount -= amount;
//             console.log (`Hisobdan ${amount} yechildi. Qoldiq ${this.#amount}`);
//         }else {
//             console.log (`Hisobingizda pul yetarli emas: ${this.#amount}`);
//         }
//     }

//     makeDeposit(amount) {
//         this.#amount +=amount;
//         console.log (`Hisobingiz to'ldirildi: ${this.#amount}`);
//     }

//     giveMeDetails () {
//         console.log (`Salom ${this.name}! Sizning hisobingizda ${this.#amount}$ mavjud`);
//         console.log (`Hisob raqamingiz ${this.#account_id}`);
//     }

//     static tellMeAboutClass () {
//         console.log ('Bu class bilan accountlar yasaladi');
//     }

//     static tellMeAboutTime () {
//         console.log (`Hozirgi vaqt ${moment().format("YYYY-MM-DD:mm:ss")}`);
//     }
// }

// module.exports = Account;