console.log("WElcome To Spotify")
let songIndex =0;
let songinfo= document.getElementsByClassName('songInfo')
let masterPlay = document.getElementById('MasterPlay')
let forward = document.getElementById('forward')
let backward = document.getElementById('backward')
let songitem = document.getElementById('SongItems')
let myprogressbar = document.getElementById('songprogress')

let songs = [
    {songname:"Dream on - Aerosmith",filepath:"sources/Songs/DreamOn.mp3",coverpath:"sources/covers/DreamOn.jpeg"},
    {songname:"Good Riddance - Green Day",filepath:"sources/Songs/GoodRiddance.mp3",coverpath:"sources/covers/goodridance.jpeg"},
    {songname:"Hotel California - Eagles",filepath:"sources/Songs/HotelCalifornia.mp3",coverpath:"sources/covers/hotel.jpeg"},
    {songname:"Knockin on.. - Gun N' Roses",filepath:"sources/Songs/KnockinOnHeavensDoor.mp3",coverpath:"sources/covers/goodridance.jpeg"},
    {songname:"Stairway To Heaven - Led Z",filepath:"sources/Songs/Stairway to Heaven.mp3",coverpath:"sources/covers/Stairway.jpeg"},
    {songname:"Sweater Weather - The Neighbourhood",filepath:"sources/Songs/Sweater Weather.mp3",coverpath:"sources/covers/sweaterweather.jpeg"},
    {songname:"Sweet Child O' Mine - Guns N' Roses",filepath:"sources/Songs/Sweet Child O' Mine.mp3",coverpath:"sources/covers/sweet.jpeg"}
]   

let songpath = songs[songIndex]['filepath']
let coverpath =songs[songIndex]['coverpath']
let songname = songs[songIndex]['songname']
console.log(songname)
let audioElement= new Audio (songpath)
// handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')

    }

})  

audioElement.addEventListener('timeupdate',()=>{

    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value=progress

})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= (myprogressbar.value*audioElement.duration)/100
})