
let button2 = document.getElementById('add')
button2.style.display = 'none'

function showAlert(){
  let button1 = document.getElementById('alert')
  button1.style.display = 'none'

  let button2 = document.getElementById('add')
  button2.style.display = 'inline-block'
}
function showAdd(){
  let button2 = document.getElementById('add')
  button2.style.display = 'inline-block'

  let button1 = document.getElementById('alert')
  button1.style.display = 'none'

 let input = document.getElementById('box') 
 let message = input.value;
 

 let colorInput = document.getElementById('color')
 let color = colorInput.value;

 let div = document.getElementById( 'output')
 div.innerHTML = div.innerHTML + '<div style="color:' + color + ';">' + message + '</div> '
 div.style.background = 'red'
 div.style.width = '60%'
 

}