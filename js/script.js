let $ = document
let height = $.getElementById('height')
let weight = $.getElementById('weight')
let weightValue = $.getElementById("weight-val")
let heightValue = $.getElementById("height-val")
let result = $.getElementById("result")
let category = $.getElementById("category")
function calculate(){
    weightValue.innerHTML = weight.value + "kg"
    heightValue.innerHTML = height.value + "cm"
    let nowWeight = +weight.value
    let nowHeight = +height.value / 100
    let bmi = nowWeight / (nowHeight ** 2)
    console.log(typeof bmi)
    result.innerHTML = bmi.toFixed(2)
    if(bmi <= 18.4){
        category.innerHTML = "Underweight"
    }else if(18.5 <= bmi && bmi < 25){
        category.innerHTML = "Normal"
    }else if(25 <= bmi && bmi < 39.9){
        category.innerHTML = "OverWeight"
    }else{
        category.innerHTML = "Obese"
    }
}
