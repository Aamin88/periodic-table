const driver = window.driver.js.driver;
const tdEls = document.querySelectorAll("td");
const audioEls = document.querySelectorAll("audio");

// const driverObj = driver();

// driverObj.highlight({
//   element: tdEls[0],
//   popover: {
//     title: "Title",
//     description: "Description",
//   },
// });

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
