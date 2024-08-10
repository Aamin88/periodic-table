const driver = window.driver.js.driver;
const driverObj = driver();

const tdEls = document.querySelectorAll("td");
const audioEls = document.querySelectorAll("audio");

function tour() {
  driverObj.highlight({
    element: tdEls[0],
    popover: {
      description: "click any box to hear the name of the element",
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const checkVisit = JSON.parse(localStorage.getItem("visit"));

  console.log(checkVisit);

  if (!checkVisit) {
    tour();
    localStorage.setItem("visit", JSON.stringify(true));
  }
});

tdEls.forEach((tdEl) => {
  tdEl.addEventListener("click", (e) => callout(e, tdEl));
});

function callout(e, tdEl) {
  stopPronunciation();
  const audioEL = tdEl.querySelector("audio");
  audioEL.play();
}

// prevent one than sounds from playing at a time
function stopPronunciation() {
  audioEls.forEach((audioEl) => {
    audioEl.pause();
    audioEl.currentTime = 0;
  });
}
