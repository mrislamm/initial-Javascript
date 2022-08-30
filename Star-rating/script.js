function rate(){
    let inputSname = document.getElementById('songName')
    let song = inputSname.value

    let inputAname = document.getElementById('artistName')
    let artist = inputAname.value;
    
    let rate = document.getElementById('rating')
    rate2 = rate.value
    let starSymbol = '&#9733;'

    

    let div = document.getElementById('output')
    div.innerHTML = div.innerHTML += '<div class="div"><span>' + song + '</span> by <span> ' + artist + '</span> <span class="star"> ' + starSymbol.repeat(rate2) + '</span> </div>' 
   
    if (song===""){
    alert ('Please Enter project name.')
    inputSname.style.border = '1.5px solid red'
    }
    if (artist== ''){
        alert('Please Enter Dveloper name .')
        inputAname.style.border = '1.5px solid red'
    }
    if(rate2 >5){
        alert('Rate must be between 1 - 5 ')
        rate.style.border = '1.5px solid red'
    }
}
function requirment(){
    if (song==="")
    alert ('please Song name can not be empty')
}