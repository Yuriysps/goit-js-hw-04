console.log('task-3.js');
//! document.getElementById("task-3/1").innerHTML = 


//todo Об’єкт profile описує профіль користувача на ігровій платформі. У його властивостях зберігається ім’я профілю username та кількість активних годин playTime, проведених у грі.

// const profile = {
//     username: "Jacob",
//   playTime: 300,
// };

//todo Доповни об’єкт profile методами для роботи з його властивостями.

//todo Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
//todo Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
//todo Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.

// const profile = {
//     username: "Jacob",
//   playTime: 300,
  
//    changeUsername(newName) {
//       // profile.username = newName;
//     this.username = newName;
  

    
    
//              // function newFunction() {
//                 //     profile.username = newName;
//              //     newName = [];
//                 // }
        
//      updatePlayTime (hours) {
//             // profile.playTime +=  hours;
//          this.playTime +=  hours;}
      
//     }
//          getInfo(changeUsername) {
//             return  `${Username} has ${playTime} active hours!`
//          }   
       

    //   ----------------------------------  


        // ------------------------  

        const profile = {
            username: "Jacob",
          playTime: 300,
        
            changeUsername(newName) {
            // ...
            // profile.username = newUsername;
            this.username = newName;
        
        },
            updatePlayTime (hours) {
                // profile.playTime += hours;
                this.playTime += hours;
            
            },
            
            getInfo () {
                 return  `${this.username} has ${this.playTime} active hours!`
            }
         
          
        };
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

// -------------------------
document.getElementById("task-3/1").innerHTML = profile.getInfo(); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
document.getElementById("task-3/2").innerHTML = profile.getInfo(); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
document.getElementById("task-3/3").innerHTML = profile.getInfo(); // "Marco has 320 active hours!"