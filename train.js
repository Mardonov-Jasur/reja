       
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
 
function checkSimilarity(str1, str2) {
    if (str1.length !== str2.length) {
      return false; 
    }
  
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) {
        return false; 
      }
    }
    
    return true;
  }
  
  const result = checkSimilarity("entriw", "winter");
  console.log(result);
