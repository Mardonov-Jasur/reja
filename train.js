//*********************    E TASK   ******************************* */

function reverseName (str) {
    const result = str.split("");
    const reverse = result.reverse("");
    const join = reverse.join(""); 
    console.log (join);
}

reverseName('evender');






//*********************SYNC VA ASYNC FUNCTIONLAR**************************** */


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "o'zingizni ishlaringizni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, fodasi yo'q", //60
// ];


// //Asynchronous function
// async function maslahatBering (a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <=30) return list[1];
//     else if (a > 30 && a <=40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 & a <= 60) return list[4];
//     else {
//         return new Promise ((resolve, reject) => {
//              setTimeout(() => {
//                 resolve(list[5]);
//              }, 5000);
//         });
       
//     }
// }

// //asyn/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();


//call via then/catch
// console.log ('passed here 0');
// maslahatBering(25) 
//     .then((data) => {
//         console.log ("javob:", data);
//     })
//     .catch((err) => {
//         console.log ("ERROR:", err);
//     });
//     console.log("passed here 1");



//callback function
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "o'zingizni ishlaringizni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, fodasi yo'q", //60
// ];

// function maslahatBering (a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <=30) callback(null, list[1]);
//     else if (a > 30 && a <=40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 & a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }


// console.log ('passed here 0');
// maslahatBering(45, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);  
//     }
// });
// console.log ('passed here 1')










//+++++++++++++++++++++++++++++  D TASK   +++++++++++++++++++++++++++++++++++++// 

// const moment = require ("moment")

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     Qoldiq() {
//         console.log(`${moment().format("HH:mm:ss")} Sotuvda ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud`);
//     }

//     Sotish(product, quantity) {
//         if (this[product] >= quantity) {
//             this[product] -= quantity;
//             console.log(`${moment().format("HH:mm:ss")} ${quantity}ta ${product} sotildi. Qoldiq ${this[product]}`);
//         } else {
//             console.log(`${moment().format("HH:mm:ss")} Bizda yetarli ${product} mavjud emas. Qoldiq ${this[product]}`);
//         }
//     }

//     Qabul(product, quantity) {
//         this[product] += quantity;
//         console.log(`${moment().format("HH:mm:ss")} ${quantity}ta ${product} qabul qilindi. Qoldiq ${this[product]}`);
//     }
// }

// const shop = new Shop(2, 4, 6);
// shop.Qoldiq();
// shop.Sotish('non', 1);
// shop.Qabul('lagmon', 3);



//++++++++++++++    B TASK   +++++++++++++//

// function Sonlar(soz) {
//     let position = 0;
//     let count = 0;
//     let number = "0123456789";
//     for( position; position < soz.length; position++) {
//       if (number.includes(soz.charAt(position))) {
//         count++
//       }
//     }
    
//     return count;
//   }
  
//   const result = Sonlar('bir2uch4b33esh6s');
//   console.log(result);
  


 //++++++++++++    C TASK     ++++++++++++++++//
 
// function checkSimilarity(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false; 
//     }
  
//     for (let i = 0; i < str1.length; i++) {
//       if (str1[i] === str2[i]) {
//         return false; 
//       }
//     }
    
//     return true;
//   }
  
//   const result = checkSimilarity("entriw", "winter");
//   console.log(result);


