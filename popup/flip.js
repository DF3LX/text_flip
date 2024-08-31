function listenForClicks() {
  document.addEventListener("click", (e) => {
    function changeState(state) {
      switch (state) {
        case "ON":
        case "OFF":
          return flipAllText();
        default:
          console.error("Unknown state:", state);
      }
    }

    let state = e.target.dataset.state;
    if (state) {
      changeState(state);
    }
  });
}

function flipAllText() {
  browser.tabs.executeScript({
    file: "../flip.js"
  }).catch((error) => {
    console.error(`Error`);
  });
}

listenForClicks();
