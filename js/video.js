const play_btn = document.querySelector(".play_btn");
const pause_btn = document.querySelector(".pause_btn");

const video = document.querySelector(".video_wrapper video");

play_btn.addEventListener("click", () => {
    play_btn.style.display = "none";
    pause_btn.style.display = "block";
    video.play();
});
pause_btn.addEventListener("click", () => {
    pause_btn.style.display = "none";
    play_btn.style.display = "block";
    video.pause();
});
