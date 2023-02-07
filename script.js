console.log("WElcome To Spotify")
let songIndex =0;

let masterPlay = document.getElementById('MasterPlay')
let myprogressbar = document.getElementById('songprogress')
let songs = [
    {songname:"Dream on - Aerosmith",filepath:"sources\\Songs\\DreamOn.mp3",coverpath:"sources\\covers\\DreamOn.jpeg"},
    {songname:"Good Riddance - Green Day",filepath:"sources\\Songs\\GoodRiddance.mp3",coverpath:"sources\\covers\\goodridance.jpeg"},
    {songname:"Hotel California - Eagles",filepath:"sources\\Songs\\HotelCalifornia.mp3",coverpath:"sources\\covers\\hotel.jpeg"},
    {songname:"Knockin on.. - Gun N' Roses",filepath:"sources\\Songs\\KnockinOnHeavensDoor.mp3",coverpath:"sources\\covers\\Knockin.jpeg"},
    {songname:"Stairway To Heaven - Led Z",filepath:"sources\\Songs\\Stairway to Heaven.mp3",coverpath:"sources\\covers\\Stairway.jpeg"},
    {songname:"Sweater Weather - The Neighbourhood",filepath:"sources\\Songs\\Sweater Weather.mp3",coverpath:"sources\\covers\\sweaterweather.jpeg"},
    {songname:"Sweet Child O' Mine - Guns N' Roses",filepath:"sources\\Songs\\Sweet Child O' Mine.mp3",coverpath:"sources\\covers\\sweet.jpeg"}
]   
let audioElement= new Audio ("sources\\Songs\\DreamOn.mp3")
// handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
    }
})  
myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')

})