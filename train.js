       

//+++++++++++++++++++++++++++++  D TASK   +++++++++++++++++++++++++++++++++++++// 

const moment = require ("moment")

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    Qoldiq() {
        console.log(`${moment().format("HH:mm:ss")} Sotuvda ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud`);
    }

    Sotish(product, quantity) {
        if (this[product] >= quantity) {
            this[product] -= quantity;
            console.log(`${moment().format("HH:mm:ss")} ${quantity}ta ${product} sotildi. Qoldiq ${this[product]}`);
        } else {
            console.log(`${moment().format("HH:mm:ss")} Bizda yetarli ${product} mavjud emas. Qoldiq ${this[product]}`);
        }
    }

    Qabul(product, quantity) {
        this[product] += quantity;
        console.log(`${moment().format("YYY.MM.DD. HH:mm:ss")} ${quantity}ta ${product} qabul qilindi. Qoldiq ${this[product]}`);
    }
}

const shop = new Shop(2, 4, 6);
shop.Qoldiq();
shop.Sotish('non', 1);
shop.Qabul('lagmon', 3);




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


