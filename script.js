console.log("welcome to spotify");

//initialize the variables
let  songIndex=0;
let audioElement=new Audio('songs/music.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"stay with me",filePath:"songs/music.mp3",coverPath:"covers/coverimg.png"},
    {songName:"vellipomakey",filePath:"songs/[iSongs.info] 05 - Vellipomaakey.mp3",coverPath:"covers/1.jpeg"},
    {songName:"terimeri",filePath:"songs/Teri-Meri-Gallan-Hogi-Mashhur(PagalWorldl).mp3",coverPath:"covers/7.jpg"},
    {songName:"sterio",filePath:"songs/My-Heart-Stereo(PagalWorld).mp3",coverPath:"covers/4.jpg"},
    {songName:"Kanne_kanne",filePath:"songs/2.mp3",coverPath:"covers/2.jpeg"},
    {songName:"Nenu_nuvvantu",filePath:"songs/[iSongs.info] 03 - Nenu Nuvvantu.mp3",coverPath:"covers/5.jpeg"},
    {songName:"Lutegaye",filePath:"songs/Lut Gaye - Jubin Nautiyal 128 Kbps.mp3",coverPath:"covers/9.jpeg"},
    {songName:"Neeyadalo",filePath:"songs/[iSongs.info] 05 - Nee Yadalo Naaku.mp3",coverPath:"covers/3.jpeg"},
    {songName:"Chustuchustuney",filePath:"songs/Chustu-Chustune-Rojulu-Gadiche(PagalWorldl).mp3",coverPath:"covers/6.jpg"},
]
songItem.forEach((element,i)=>{
    console.log(element,i);
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }
    else{
       
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
            

    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllplays =()=>{
    element.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    })

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');


    })
})
        
  