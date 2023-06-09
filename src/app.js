//* File: app.js
//*Author: Mócsány Petra
//*Copyright: 2023, Mócsány Petra
//*Group: Szoft I-2-E
//*Date: 2023-06-09
//*Github: https://github.com/pmocsany/


const doc ={
    sideInput:document.querySelector('#side'),
    radiusInput:document.querySelector('#radius'),
    calcButton:document.querySelector('#calcButton')
}
const state={
 side: null,
 radius: null
}
window.addEventListener('load', () =>{
 init()
})

function init(){
    onClickCalcButton()
}
function onClickCalcButton(){
   if(doc.calcButton){
    doc.calcButton.addEventListener('click',()=>{
        startCalc()})
    } 
    }

function startCalc(){
    let sideStr = doc.sideInput.value
    if(checkInput(sideStr)){
        state.side= Number(doc.sideInput.value)
        state.radius= calcRadius(state.side)
        render()
    }else{
        alert('Hiba! Az input nem megfelelő!')
    }
   
}
function checkInput(input){
    let inputStr = String(input)
    if(inputStr.match(/[0-9.]+/)){
        return true
    }else{
        return false
    }

    }



function calcRadius(side){
    let radius= Math.sqrt(side)/2;
    return radius;
}
function render(){
 doc.radiusInput.value = state.radius
}