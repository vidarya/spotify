import { songs } from './songsData.js';
let currentSongIndex = 0;
let currentAudioElement = new Audio(songs[currentSongIndex].url);
let songUL = document.querySelector('.songList').getElementsByTagName('ul')[0];
let isPlaying = false;

const previousButton = document.querySelector('#previousButton');
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


// function PlayCARDSong(song) {
//   if (currentAudioElement && !currentAudioElement.paused) {
//     currentAudioElement.pause();
//     isPlaying = false;
//     // Update play button icon
//     button.innerHTML = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//     <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#000000" stroke-width="1.5" fill="#000" stroke-linejoin="round"/>
//   </svg> 
//     `;
// } else {
//     currentAudioElement = new Audio(song.url);
//     currentAudioElement.play(); // Play the clicked song
//     isPlaying = true;
//     // Update play button icon
//     button.innerHTML = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//     <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#000000" stroke-width="1.5"/>
//     <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#000000" stroke-width="1.5"/>
//   </svg>
//     `;
// }
// }


for (const song of songs) {
  currentAudioElement = new Audio(song.url);
    const li = document.createElement('li');
   
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


nextButton.addEventListener('click', () => {
  if (currentAudioElement) {
    currentAudioElement.pause();
}
currentSongIndex = (currentSongIndex + 1) % songs.length;
currentAudioElement = new Audio(songs[currentSongIndex].url)


currentAudioElement.oncanplaythrough = () => {
  currentAudioElement.play();
  updateProgressbar()
  // Optionally, handle cleanup after playback
  currentAudioElement.onended = () => {
      // Clean up the Audio element after playback ends
     currentAudioElement.pause();
     currentAudioElement.oncanplaythrough = null;
      currentAudioElement.onended = null;
  }
};
}
)


previousButton.addEventListener(
'click' , () => {
    if (currentAudioElement) {
        currentAudioElement.pause();
    }
    currentSongIndex = ((currentSongIndex - 1) + songs.length) % songs.length
    currentAudioElement = new Audio (songs[currentSongIndex].url)
    
 currentAudioElement.oncanplaythrough = () => {
    currentAudioElement.play();
  updateProgressbar()
 }


}
)


const searchButton = document.querySelector('.search')
const searchBar = document.querySelector('.search-container')
console.log(searchButton)
searchButton.addEventListener(
  'click', () => {
    searchBar.style.opacity = searchBar.style.opacity === '1' ? '0' : '1';

  }
)




for (let i = 0; i < songs.length; i++) {
  const currentAudioElement = new Audio(songs[i].url);
  const cardContainer = document.querySelector('.cardContainer');
  cardContainer.innerHTML += `
      <div class="card">
          <div class="play">
              <svg class="cardSongPlay" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#000000" stroke-width="1.5" fill="#000" stroke-linejoin="round"/>
              </svg>
          </div>
          <img src="${songs[i].cardImage}" alt="">
          <h2>${songs[i].name}</h2>
          <p>Get All Your Favorite Songs Here!</p>
      </div>
  `;

  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach(cardContainer => {
      const cardSongPlay = cardContainer.querySelector('.cardSongPlay');

      cardSongPlay.addEventListener('click', () => {
          if (currentAudioElement.paused) {
              currentAudioElement.play();
              cardSongPlay.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#000000" stroke-width="1.5"/>
                      <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#000000" stroke-width="1.5"/>
                  </svg>
              `;

          } else {
              currentAudioElement.pause();
              cardSongPlay.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#000000" stroke-width="1.5" fill="#000" stroke-linejoin="round"/>
                  </svg>
              `;

          }
      });
     
  });
};




// songs.forEach(song => {
//   const currentAudioElement = new Audio(song.url); // Create an Audio element for each song

//   const cardContainer = document.querySelector('.cardContainer');
//   cardContainer.innerHTML += `
//       <div class="card">
//           <div class="play">
//               <svg class="cardSongPlay" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#000000" stroke-width="1.5" fill="#000" stroke-linejoin="round"/>
//               </svg>
//           </div>
//           <img src="${song.cardImage}" alt="">
//           <h2>Kaise Muje Tum</h2>
//           <p> Kaise Mujhe from the Bollywood movie - Ghajini</p>
//       </div>
//   `;

//   const cardContainers = document.querySelectorAll('.card');
//   cardContainers.forEach(cardContainer => {
//       const cardSongPlay = cardContainer.querySelector('.cardSongPlay');
      
//       cardSongPlay.addEventListener('click', () => {
//           if (currentAudioElement.paused) {
//               currentAudioElement.play();
//               isPlaying = true;
//               cardSongPlay.innerHTML = `
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#000000" stroke-width="1.5"/>
//               <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#000000" stroke-width="1.5"/>
//           </svg>
//               `;
//           } else {
//               currentAudioElement.currentTime = 0;
//               currentAudioElement.pause();
//               isPlaying = false;
//               cardSongPlay.innerHTML = `
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#000000" stroke-width="1.5" fill="#000" stroke-linejoin="round"/>
//               </svg>
              
//               `;
//           }
//       });
//   });
// });







// if (currentAudioElement && currentAudioElement.paused) {
//   currentAudioElement.play();
//   playPauseButton.innerHTML = `
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.5"/>
//   <path d="M15.4531 12.3948C15.3016 13.0215 14.5857 13.4644 13.1539 14.3502C11.7697 15.2064 11.0777 15.6346 10.5199 15.4625C10.2893 15.3913 10.0793 15.2562 9.90982 15.07C9.5 14.6198 9.5 13.7465 9.5 12C9.5 10.2535 9.5 9.38018 9.90982 8.92995C10.0793 8.74381 10.2893 8.60868 10.5199 8.53753C11.0777 8.36544 11.7697 8.79357 13.1539 9.64983C14.5857 10.5356 15.3016 10.9785 15.4531 11.6052C15.5156 11.8639 15.5156 12.1361 15.4531 12.3948Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
//   </svg>
//       `;
// } else {
// currentAudioElement.pause();
//   playPauseButton.innerHTML = `
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#000000" stroke-width="1.5"/>
//   <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#000000" stroke-width="1.5"/>
//   </svg>
//       `;
// }
// ':




// const firstSong = songs[9];
// const firstSongUrl = firstSong.url;
// const audio = new Audio(firstSongUrl);
// const playPauseButton = document.querySelector('.kaisemujeplay');
// const buttonsvg = document.querySelector('.play');

// playPauseButton.addEventListener('click', () => {
//   if (audio.paused) {
//     audio.play();
//     playPauseButton.innerHTML = `
      // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      //   <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#000000" stroke-width="1.5"/>
      //   <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#000000" stroke-width="1.5"/>
      // </svg>
// `;

//   } else {
//     audio.pause();
//     playPauseButton.innerHTML = `
      // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      //   <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#000000" stroke-width="1.5" fill="#000" stroke-linejoin="round"/>
      // </svg>

// `;
    
//   }
//   buttonsvg.classList.toggle('playing');
// });


 
















































































