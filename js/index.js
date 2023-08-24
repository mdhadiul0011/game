let playerone = document.querySelector('.playerone');
let playeroneinput = document.querySelector('.playeroneinput');
let playeronebtn = document.querySelector('.playeronebtn');
let error = document.querySelector('.error');
let playertwo = document.querySelector('.playertwo');
let playertwoinput = document.querySelector('.playertwoinput');
let playertwobtn = document.querySelector('.playertwobtn');
let chance = document.querySelector('.chance');
let win = document.querySelector('.win');


let playernumberstore;
let count = 3;

playeronebtn.addEventListener('click', function(){
    if(playeroneinput.value){
        error.innerHTML = '';
        if(playeroneinput.value - 10){
            error.innerHTML = '';
            if(playeroneinput.value >= 0 && playeroneinput.value <= 10){
                playernumberstore = playeroneinput.value;
                playerone.style.display = 'none';
                playertwo.style.display = 'block';
            }else{
                error.innerHTML = 'Please give a number which is greater than 0 and less than 10';
                error.style.color = 'red';
                error.style.marginTop = '15px';
                error.style.fontSize = '20px'
            }
        }else{
            error.innerHTML = 'Please give a number';
            error.style.color = 'red';
            error.style.marginTop = '15px';
            error.style.fontSize = '20px'
        }
    }else{
        error.innerHTML = 'Please give a value';
        error.style.color = 'red';
        error.style.marginTop = '15px';
        error.style.fontSize = '20px'
    }
});

playertwobtn.addEventListener('click', function(){
    if(playertwoinput.value){
        error.innerHTML = '';
        if(playertwoinput.value - 10){
            error.innerHTML = '';
            if(playertwoinput.value >= 0 && playertwoinput.value <= 10){
                count--;
                if(count != 0){
                    if(playernumberstore == playertwoinput.value){
                        playertwoinput.style.display = 'none';                        
                        playertwobtn.style.display = 'none';
                        win.innerHTML = 'player 2 is winner';
                        win.style.color = 'burlywood'
                        win.style.fontSize = '20px'
                        win.style.marginTop = '20px'
                    }else{
                        chance.innerHTML = 'Chance' + ' ' + count;
                        chance.style.color = 'burlywood'
                        chance.style.marginTop ='20px'
                    }
                }else{
                    chance.innerHTML = 'Chance' + ' ' + count;
                    playertwoinput.style.display = 'none';                        
                        playertwobtn.style.display = 'none';
                        win.innerHTML = 'player 2 is looser';
                        win.style.color = 'burlywood'
                        win.style.fontSize = '20px'
                        win.style.marginTop = '20px'
                }
            }else{
                error.innerHTML = 'Please give a number which is greater than 0 and less than 10';
                error.style.color = 'red';
                error.style.marginTop = '15px';
                error.style.fontSize = '20px'
            }
        }else{
            error.innerHTML = 'Please give a number';
            error.style.color = 'red';
            error.style.marginTop = '15px';
            error.style.fontSize = '20px'
        }
    }else{
        error.innerHTML = 'Please give a value';
        error.style.color = 'red';
        error.style.marginTop = '15px';
        error.style.fontSize = '20px'
    }
});