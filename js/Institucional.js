 const audio = document.getElementById("miAudio");
    const img = document.getElementById("audioControl");

    img.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });

    img.addEventListener("dblclick", () => {
      audio.currentTime = 0;
      audio.play();
    });