function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let bmi = weight / (height**2)
  alert(bmi)


  if(bmi < 18.5){
    alert("Underweight")
  }

  if(bmi > 18.5 && bmi < 24.9){
    alert("healthy weight")
  }

  if(bmi > 25 && bmi < 29.9){
    alert("overweight")
  }

  if(bmi > 30){
    alert("obesity")
  }



  if(age > 19 && age < 24 && bmi > 19 && bmi < 24){
    alert("healty")
  }else{
    alert("not healthy")
  }


  if(age > 25 && age < 34 && bmi > 20 && bmi < 25){
    alert("healty")
  }else{
    alert("not healthy")
  }

  if(age > 35 && age < 44 && bmi > 21 && bmi < 26){
    alert("healty")
  }else{
    alert("not healthy")
  }

  if(age > 45 && age < 54 && bmi > 22 && bmi < 27){
    alert("healty")
  }else{
    alert("not healthy")
  }

  if(age > 55 && age < 64 && bmi > 23 && bmi < 28){
    alert("healty")
  }else{
    alert("not healthy")
  }

  if(age > 65 && bmi > 24 && bmi < 29){
    alert("healty")
  }else{
    alert("not healthy")
  }


}





// if(age > 19 && age < 24) {
//   if (bmi > 19 && bmi < 24) {
//     alert("healty")
//   }
//   else {
//     alert("not healthy")
//   }
// } else if(age > 25 && age < 34){

//   if (bmi > 20 && bmi < 25) {
//     alert("healty")
//   }else{
//     alert("not healthy")
//   }


// }