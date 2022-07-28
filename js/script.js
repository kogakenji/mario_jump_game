const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe');

// add jump to mario and removes after timeout of 500ms
const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

// loop to verify pipe position and stop animation when hits the pipe
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 130 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // changes image of mario when losing
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // stops loop when losing
        clearInterval(loop);
    }

}, 10)


document.addEventListener('keydown', jump);