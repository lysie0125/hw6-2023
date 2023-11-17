var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    
    video = document.getElementById("player1");

    video.autoplay = false;
    video.loop = false;

    document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
        video.play();
        updateVolumeInfo();
    });

    document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow Down");
        video.playbackRate -= 0.1;
        console.log("New Speed:", video.playbackRate);
        updateVolumeInfo();
    });

    document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate += 0.1;
        console.log("New Speed:", video.playbackRate);
        updateVolumeInfo();
    });

    document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log("Current Time:", video.currentTime);
    });

    document.querySelector("#mute").addEventListener("click", function() {
        video.muted = !video.muted;
        updateMuteButton();
		console.log((video.muted ? "Muted" : "Unmuted"));
    });

    document.querySelector("#slider").addEventListener("input", function() {
        console.log("Volume Slider");
        video.volume = this.value / 100;
        updateVolumeInfo();
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});

function updateVolumeInfo() {
    document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
}

function updateMuteButton() {
    document.getElementById("mute").textContent = video.muted ? "Unmute" : "Mute";
}


