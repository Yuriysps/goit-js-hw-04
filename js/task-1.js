console.log('task-1.js');
//! document.getElementById("task-3/1").innerHTML = 


//todo Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

//todo Функція оголошує два параметри:

//todo products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
//todocontainerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
//todoФункція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
//   };



// const products = {
//     key:[] 
//     key:[] 
// }
  
   



function isEnoughCapacity(products, containerSize) {
  
    let EnoughCapacity = 0;
    for (const product in products) {
        EnoughCapacity += products[product]
    }
        
       if ( EnoughCapacity <= containerSize) {
        return true;
       } else {
        return false;
       }
    
}



console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false


//   ------------------------------------
   
document.getElementById("task-4/1").innerHTML = 
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ; // true
  
  document.getElementById("task-4/2").innerHTML = 
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ; // false
  
  document.getElementById("task-4/3").innerHTML = 
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ; // true
  
  document.getElementById("task-4/4").innerHTML = 
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ; // false