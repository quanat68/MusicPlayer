// const wrapper = document.querySelector(".music-card"),
// musicImg = wrapper.querySelector(".music-card__cd img"),
// musicName = wrapper.querySelector(".song .song__name"),
// musicArtist = wrapper.querySelector(".song .song__artist"),
// playBtn = wrapper.querySelector(".btn-play"),
// prevBtn = wrapper.querySelector(".btn-prev"),
// nextBtn = wrapper.querySelector(".btn-next"),
// progressBar = wrapper.querySelector(".progress-bar"),
// progressBarvalue = progressBar.querySelector(".progress-bar__value"),
// mainAudio = progressBarvalue.querySelector(".main-audio"),
// musicList = wrapper.querySelector(".music-list"),
// musicListbtn = wrapper.querySelector(".list-music"),
// closeListmusic = musicList.querySelector(".btn-close");

// let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
// isMusicPaused = true;

// window.addEventListener("load", () => {
//     loadMusic(musicIndex);
//     playingSong();
// });


// function loadMusic(indexNumb){
//     musicName.innerText = allMusic[indexNumb - 1].song__name;
//     musicArtist.innerText = allMusic[indexNumb - 1].song__artist;
//     musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
//     mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
// };

// function playMusic() {
//     wrapper.classList.add("pause");
//     playBtn.querySelector("i").innerText = "paused";
//     mainAudio.play();
// };

// function pauseMusic() {
//     wrapper.classList.remove("pause");
//     playBtn.querySelector("i").innerText = "play_arrow";
//     mainAudio.pause();
// };


// function prevMusic() {
//     musicIndex--;
//     musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
//     loadMusic(musicIndex);
//     playMusic();
//     playingSong();
// };


// function nextMusic() {
//     musicIndex++;
//     musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
//     loadMusic(musicIndex);
//     playMusic();
//     playingSong();
// };

// playBtn.addEventListener("click", () => {
//     const isMusicPlay = wrapper.classList.contains("paused");
//     isMusicPlay ? pauseMusic() : playMusic();
//     playingSong();
// });


// prevBtn.addEventListener("click", () => {
//    prevMusic();
// });

// nextBtn.addEventListener("click", () => {
//     nextMusic();
// });

// mainAudio.addEventListener("timeupdate", (e) => {
//     const currentTime = e.target.currentTime;
//     const duration = e.target.duration;
//     let progressWidth = (currentTime / duration) * 100;
//     progressBarvalue.style.width = `${progressWidth}%`;

//     let musicCurrentTime = wrapper.querySelector(".progress-time__current"),
//     musicDuration = wrapper.querySelector(".progress-time__duration"),
//     mainAudio.addEventListener("loadeddate", () => {
//         let mainAdDuration = mainAudio.duration;
//         let totalMin = Math.floor(mainAdDuration / 60);
//         let totalSec = Math.floor(mainAdDuration % 60);
//         if(totalSec < 10){
//             totalSec =  `0${totalSec}`;
//         }
//         musicDuration.innerText = `${totalMin}:${totalSec}`;
//     })


//     let currentMin = Math.floor(currentTime / 60);
//     let currentSec = Math.floor(currentTime % 60);
//     if(currentSec < 10){ 
//         currentSec = `0${currentSec}`;
//     }
//     musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
// });

// progressBar.addEventListener("click", (e)=>{
//     let progressWidth = progressArea.clientWidth; 
//     let clickedOffsetX = e.offsetX; 
//     let songDuration = mainAudio.duration; 

//     mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
//     playMusic(); 
//     playingSong();
// });



// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const app = {
//     songs: [
//         {
//             song__name: "Khi Người Mình Yêu Khóc",
//             song__artist: "Phan Mạnh Quỳnh ft Bùi Lan Hương",
//             path: "./songs/music-1.mp3",
//             img: "./images/music-1.jpg"

//         },
//         {
//             song__name: "THUẬN THEO Ý TRỜI",
//             song__artist: "Bùi Anh Tuấn",
//             path: "./songs/music-2.mp3",
//             img: "./images/music-2.jpg"

//         },
//         {
//             song__name: "CÔ ĐƠN TRÊN SOFA",
//             song__artist: "Trung Quân",
//             path: "./songs/music-3.mp3",
//             img: "./images/music-3.jpg"

//         },
//         {
//             song__name: "TÌNH YÊU CÓ CÒN TỒN TẠI",
//             song__artist: "KHẢI ĐĂNG",
//             path: "./songs/music-4.mp3",
//             img: "./images/music-4.jpg"

//         },
//         {
//             song__name: "Ngày Mai Em Đi Mất",
//             song__artist: "Đạt G",
//             path: "./songs/music-5.mp3",
//             img: "./images/music-5.jpg"

//         },
//         {
//             song__name: "PHẢN BỘI CHÍNH MÌNH",
//             song__artist: "QUÂN A.P x VƯƠNG ANH TÚ",
//             path: "./songs/music-6.mp3",
//             img: "./images/music-6.jpg"

//         },
//         {
//             song__name: "Nơi Tình Yêu Kết Thúc",
//             song__artist: "Bùi Anh Tuấn",
//             path: "./songs/music-7.mp3",
//             img: "./images/music-7.jpg"

//         },
//         {
//             song__name: "GIÚP ANH TRẢ LỜI NHỮNG CÂU HỎI",
//             song__artist: "VƯƠNG ANH TÚ",
//             path: "./songs/music-8.mp3",
//             img: "./images/music-8.jpg"

//         },
//         {
//             song__name: "SUỐT ĐỜI KHÔNG XỨNG",
//             song__artist: "KHẢI ĐĂNG",
//             path: "./songs/music-9.mp3",
//             img: "./images/music-9.jpg"

//         },
//         {
//             song__name: "từ chối nhẹ nhàng thôi",
//             song__artist: "PHÚC DU feat. @BICHPHUONGOFFICIAL",
//             path: "./songs/music-10.mp3",
//             img: "./images/music-10.jpg"

//         },
//         {
//             song__name: "CUỘC SỐNG EM ỔN KHÔNG",
//             song__artist: "ANH TÚ",
//             path: "./songs/music-11.mp3",
//             img: "./images/music-11.jpg"

//         },
//         {
//             song__name: "YÊU THƯƠNG LÀ BÃO TỐ",
//             song__artist: "HÙNG QUÂN",
//             path: "./songs/music-12.mp3",
//             img: "./images/music-12.jpg"

//         },
//         {
//             song__name: "Chạm Khẽ Tim Anh Một Chút Thôi",
//             song__artist: "Noo Phước Thịnh",
//             path: "./songs/music-13.mp3",
//             img: "./images/music-13.jpg"

//         },
//         {
//             song__name: "Em Muốn Ta Là Gì",
//             song__artist: "Thanh Hưng",
//             path: "./songs/music-14.mp3",
//             img: "./images/music-14.jpg"

//         },
//         {
//             song__name: "Nỗi Nhớ Mang Tên Mình",
//             song__artist: "Hoài Lâm",
//             path: "./songs/music-15.mp3",
//             img: "./images/music-15.jpg"

//         },
//         {
//             song__name: "NƯỚC MẮT LƯNG TRÒNG",
//             song__artist: "VƯƠNG ANH TÚ",
//             path: "./songs/music-16.mp3",
//             img: "./images/music-16.jpg"

//         },
//         {
//             song__name: "Hẹn Một Mai",
//             song__artist: "Bùi Anh Tuấn",
//             path: "./songs/music-17.mp3",
//             img: "./images/music-17.jpg"

//         },
//         {
//             song__name: "LÂU LÂU NHẮC LẠI",
//             song__artist: "Hà Nhi ft Khói",
//             path: "./songs/music-18.mp3",
//             img: "./images/music-18.jpg"

//         },
//         {
//             song__name: "CHƯA BAO GIỜ",
//             song__artist: "TRUNG QUÂN",
//             path: "./songs/music-19.mp3",
//             img: "./images/music-19.jpg"

//         },
//         {
//             song__name: "Thêm bao nhiêu lâu",
//             song__artist: "Đạt G",
//             path: "./songs/music-20.mp3",
//             img: "./images/music-20.jpg"

//         }
//     ],
//     render: function () {
//         const htmls = this.songs.map(song => {
//             return `
//                 <li>
//                     <h3 class="tittle">${song.song__name}</h3>
//                     <p class="artist">${song.song__artist}</p>
//                 </li>
//             `
//         })
//         $('.play-list').innerHTML = htmls.join('')
//     },
//     start: function () {
//         this.render()
//     }
// }

// app.start()

// ===================================================================

    const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img-area img"),
    musicName = wrapper.querySelector(".song-details .name"),
    musicArtist = wrapper.querySelector(".song-details .artist"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn = wrapper.querySelector(".prev"),
    nextBtn = wrapper.querySelector(".next"),
    mainAudio = wrapper.querySelector(".main-audio"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar"),
    musicList = wrapper.querySelector(".music-list"),
    moreMusicBtn = wrapper.querySelector(".more-music"),
    closemoreMusic = musicList.querySelector(".close");

    let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
    isMusicPaused = true;

    window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    playingSong(); 
    });

    function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
    }


    function playMusic(){
    wrapper.classList.add("paused");
    // playPauseBtn.querySelector("i").innerText = "  ";
    mainAudio.play();
    }


    function pauseMusic(){
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = " ";
    mainAudio.pause();
    }


    function prevMusic(){
    musicIndex--; 
    
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong(); 
    }


    function nextMusic(){
    musicIndex++; 
    
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong(); 
    }


    playPauseBtn.addEventListener("click", ()=>{
    const isMusicPlay = wrapper.classList.contains("paused");
    
    isMusicPlay ? pauseMusic() : playMusic();
    playingSong();
    });


    prevBtn.addEventListener("click", ()=>{
    prevMusic();
    });


    nextBtn.addEventListener("click", ()=>{
    nextMusic();
    });


    mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime; 
    const duration = e.target.duration; 
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current-time"),
    musicDuartion = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", ()=>{
    
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if(totalSec < 10){ 
        totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });
    
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){ 
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
    });


    progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth; 
    let clickedOffsetX = e.offsetX; 
    let songDuration = mainAudio.duration; 
    
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); 
    playingSong();
    });


    const repeatBtn = wrapper.querySelector(".repeat-plist");
    repeatBtn.addEventListener("click", ()=>{
    let getText = repeatBtn.innerText; 
    switch(getText){
        case "repeat":
        repeatBtn.innerText = "repeat_one";
        repeatBtn.setAttribute("title", "Song looped");
        break;
        case "repeat_one":
        repeatBtn.innerText = "shuffle";
        repeatBtn.setAttribute("title", "Playback shuffled");
        break;
        case "shuffle":
        repeatBtn.innerText = "repeat";
        repeatBtn.setAttribute("title", "Playlist looped");
        break;
    }
    });


    mainAudio.addEventListener("ended", ()=>{
    
    let getText = repeatBtn.innerText; 
    switch(getText){
        case "repeat":
        nextMusic();
        break;
        case "repeat_one":
        mainAudio.currentTime = 0; 
        loadMusic(musicIndex); 
        playMusic(); 
        break;
        case "shuffle":
        let randIndex = Math.floor((Math.random() * allMusic.length) + 1); 
        do{
            randIndex = Math.floor((Math.random() * allMusic.length) + 1);
        }while(musicIndex == randIndex); 
        musicIndex = randIndex; 
        loadMusic(musicIndex);
        playMusic();
        playingSong();
        break;
    }
    });


    moreMusicBtn.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
    });
    closemoreMusic.addEventListener("click", ()=>{
    moreMusicBtn.click();
    });

    const ulTag = wrapper.querySelector("ul");

    for (let i = 0; i < allMusic.length; i++) {
    
    let liTag = `<li li-index="${i + 1}">
                    <div class="row">
                    <span>${allMusic[i].name}</span>
                    <p>${allMusic[i].artist}</p>
                    </div>
                    <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                    <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
                </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag); 

    let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
    liAudioTag.addEventListener("loadeddata", ()=>{
        let duration = liAudioTag.duration;
        let totalMin = Math.floor(duration / 60);
        let totalSec = Math.floor(duration % 60);
        if(totalSec < 10){ 
        totalSec = `0${totalSec}`;
        };
        liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`; 
        liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); 
    });
    }


    function playingSong(){
    const allLiTag = ulTag.querySelectorAll("li");
    
    for (let j = 0; j < allLiTag.length; j++) {
        let audioTag = allLiTag[j].querySelector(".audio-duration");
        
        if(allLiTag[j].classList.contains("playing")){
        allLiTag[j].classList.remove("playing");
        let adDuration = audioTag.getAttribute("t-duration");
        audioTag.innerText = adDuration;
        }

        
        if(allLiTag[j].getAttribute("li-index") == musicIndex){
        allLiTag[j].classList.add("playing");
        audioTag.innerText = "Playing";
        }

        allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
    }


    function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
    }