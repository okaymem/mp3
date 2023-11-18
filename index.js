const player=document.querySelector('.player')
const audio=document.querySelector('.audio')
const play=document.querySelector('.play')
const singer=document.querySelector('.singer')
const song=document.querySelector('.song')
const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
const progressBar=document.querySelector('.progress-bar')
const progressLine=document.querySelector('.progress-line')
function Play(){
    audio.play()
    play.classList.add('pause')
    player.classList.add('pause1')
}
function Pause(){
    play.classList.remove('pause')
    audio.pause()
    player.classList.remove('pause1')
}
let clickCounter=0;
play.addEventListener('click', function(){
    clickCounter++;
    if (clickCounter%2===1){
        Play()
    } else {
        Pause()
    }
})
let numb=0;
let songs=[['beyonce.mp3','Beyonce',"Don't Hurt Yourself", 'lemonade.png'], ['dontstartnow.mp3', 'Dua Lipa', "Don't Start Now", 'dontstartnow.png']];
 prev.addEventListener('click', function(){
numb--;
if (numb<0){
    numb=1
}
if (numb>1){
    numb=0
}
audio.src=songs[numb][0];
singer.innerHTML=songs[numb][1];
song.innerHTML=songs[numb][2];
player.style.backgroundImage=`url(${songs[numb][3]})`;

Play()

 })

 next.addEventListener('click', function(){
    numb++;
    if (numb<0){
        numb=1
    }
    if (numb>1){
        numb=0
    }
    audio.src=songs[numb][0];
singer.innerHTML=songs[numb][1];
song.innerHTML=songs[numb][2];
player.style.backgroundImage=`url(${songs[numb][3]})`;

    Play()
    
     })

     audio.addEventListener('timeupdate', function(){
        let width=(audio.currentTime/audio.duration)*100;
        progressLine.style.width=`${width}`+'%'
     })

    progressBar.addEventListener('click', function(elem){
        audio.currentTime=elem.offsetX/this.clientWidth*audio.duration
     })
