// //EXTERNAL MODULI. Ushbu modul Core modulidan farqli ravishda har birini ustanovka qilish kerak boladi
// //Ustanovka qilish quyidagicha amalga oshiriladi: "npm install moment"


// //MOMENT
// const moment = require("moment");
// const time = moment().format("YYYY-MM-DD");
// console.log(time);


// //setInterval
// const moment = require("moment");
// setInterval(() => {
//     const time = moment().format();
//     console.log(`Hozirgi vaqt ${time}`)
// }, 500);


// // VALIDATOR
// const validator = require("validator");
// const test = validator.isEmail("jasur.mardonov@gmail.com");
// console.log("test", test);

// //isIP
// const validator = require("validator");
// const test = validator.isIP("345-534-543-534");
// console.log("test", test);



// //UUID + chalk
// const{v4:uuidv4} = require ("uuid");
// const random = uuidv4();
// console.log("random", random);

// const chalk = require("chalk");
// const log = console.log;
// log (chalk.red(`uuid creates ${chalk}`));



//Module packagelar 3xil boladi:
// 1) Core modul
// 2) External modul
// 3) File modul

//Quyida Core moduli haqida korib chiqamiz.
//Core moduli Nodeni ozida ustanoka qilingan boladi. Shuning uchun ularni ishlatishda ustanovka qilish shart emas.Shunchaki chaqirish bilan ishlatihsimiz mumkin.

// let number = 0;
// setInterval (function () {
//     console.log("hisob", number);
//     number++
// }, 0);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log('******************');

// fs.writeFileSync("./input.txt", `${data} \n\n\t by JasurMardonov`);
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);

