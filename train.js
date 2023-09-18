function Sonlar(soz) {
    let position = 0;
    let count = 0;
    let number = "0123456789";
    for( position; position < soz.length; position++) {
      if (number.includes(soz.charAt(position))) {
        count++
      }
    }
    
    return count;
  }
  
  const result = Sonlar('bir2uch4b33esh6s');
  console.log(result);
  