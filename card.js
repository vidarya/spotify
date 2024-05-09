import { songs } from './songsData.js';
let currentSongIndex = 0;
let currentAudioElement = new Audio(songs[currentSongIndex].url);
let songUL = document.querySelector('.songList').getElementsByTagName('ul')[0];
let isPlaying = false;

const cardContainer = document.querySelector('.cardContainer');
const PlayButtonSVG = document.querySelector('.cardSongPlay')
const previousButton = document.querySelector('.previousButton');
const playButton = document.querySelector('#playButton');
const nextButton = document.querySelector('#nextButton');

function updateProgressbar() {
  currentAudioElement.addEventListener('timeupdate', () => {
    const currentTime = currentAudioElement.currentTime;
    const duration = currentAudioElement.duration;
    const progress = (currentTime / duration) * 100;
    document.querySelector('.progressBar').style.width = progress + '%';
});
}





function PlaySong(song) {
  // Pause the current song if it's playing
  if (currentAudioElement && !currentAudioElement.paused) {
      currentAudioElement.pause();
      isPlaying = false;
      playButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.5"/>
              <path d="M15.4531 12.3948C15.3016 13.0215 14.5857 13.4644 13.1539 14.3502C11.7697 15.2064 11.0777 15.6346 10.5199 15.4625C10.2893 15.3913 10.0793 15.2562 9.90982 15.07C9.5 14.6198 9.5 13.7465 9.5 12C9.5 10.2535 9.5 9.38018 9.90982 8.92995C10.0793 8.74381 10.2893 8.60868 10.5199 8.53753C11.0777 8.36544 11.7697 8.79357 13.1539 9.64983C14.5857 10.5356 15.3016 10.9785 15.4531 11.6052C15.5156 11.8639 15.5156 12.1361 15.4531 12.3948Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
      `;
      updateProgressbar()
  } else {
      // Create a new audio element for the clicked song
      currentAudioElement = new Audio(song.url);
      currentAudioElement.play(); // Play the clicked song
      isPlaying = true;
      playButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#000000" stroke-width="1.5"/>
              <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#000000" stroke-width="1.5"/>
          </svg>
      `;
  }

  updateProgressbar()
}




for (const song of songs) {
  currentAudioElement = new Audio(song.url);
    const li = document.createElement('li');
    const cardContainer = document.querySelector('.cardContainer');
   
    li.innerHTML = `
        <img class="coverImage" src="${song.imgurl}" alt="">
        <img class="invert" src="covers/music.svg" alt="">
        <div class="info">
            <div>${song.name}</div>
            <div>Anuv&nbspJain</div>
        </div> 
        <div class="playNow">
            <span id="playPauseButton">Play Now</span>
            <img class="invert" src="playbutton.svg" alt="">
        </div>
    `;
    const playPauseButton = li.querySelector('#playPauseButton');
    playPauseButton.addEventListener('click', () => {
        PlaySong(song);
    });
     
    songUL.appendChild(li);
}

playButton.addEventListener('click', () => {
if (isPlaying  &&  !currentAudioElement.paused){
currentAudioElement.pause();
isPlaying = false;
playButton.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.5"/>
<path d="M15.4531 12.3948C15.3016 13.0215 14.5857 13.4644 13.1539 14.3502C11.7697 15.2064 11.0777 15.6346 10.5199 15.4625C10.2893 15.3913 10.0793 15.2562 9.90982 15.07C9.5 14.6198 9.5 13.7465 9.5 12C9.5 10.2535 9.5 9.38018 9.90982 8.92995C10.0793 8.74381 10.2893 8.60868 10.5199 8.53753C11.0777 8.36544 11.7697 8.79357 13.1539 9.64983C14.5857 10.5356 15.3016 10.9785 15.4531 11.6052C15.5156 11.8639 15.5156 12.1361 15.4531 12.3948Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
`
updateProgressbar()
} else {
  currentAudioElement.play();
  isPlaying = true;
  playButton.innerHTML =  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#000000" stroke-width="1.5"/>
<path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#000000" stroke-width="1.5"/>
</svg>
  `
  updateProgressbar()
}

})