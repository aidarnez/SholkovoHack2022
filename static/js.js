document.querySelector('#play').onclick = play;
document.querySelector('#cursor').onclick = cursor;


let video;
let display;
let progress;
let cutstart;
let cutfinish;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');
cutstart = document.querySelector('#starttime');
cutfinish = document.querySelector('#finishtime');

progress.onclick = videoRewind;
video.ontimeupdate = progressUpdate;
function isEmpty(str) {
    return !str.trim().length;
}
function play() {
    if(document.querySelector('video').paused){
    video.play();
    } else {
    video.pause();
    }
}
function cursor() {
   console.log(isEmpty(starttime.value));
   if(!(isEmpty(starttime.value)) && !(isEmpty(finishtime.value))){
   starttime.value = "";
   finishtime.value = ""}
   if(!(isEmpty(starttime.value)) && isEmpty(finishtime.value)){
   finishtime.value = video.currentTime}
   if(isEmpty(starttime.value) && isEmpty(finishtime.value)){
   starttime.value = video.currentTime}
}
function progressUpdate() {
    c = video.currentTime;
    d = video.duration;
    progress.value = (c/d)*100
}
function videoRewind() {
    let w = this.offsetWidth;
    console.log(w)
    let o = event.offsetX;
    console.log(o)
    this.value = (0/w)*100
    video.pause()
    video.currentTime = video.duration * (o/w)
}
