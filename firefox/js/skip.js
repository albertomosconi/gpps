const simulateClick = (el) => {
  el.click();
};

browser.storage.sync.get('state', ({ state }) => {
  let el;
  if (
    (document.domain.includes('youtube') && state.youtube) ||
    (document.domain.includes('consent.google') && state.google)
  ) {
    el = document.getElementsByTagName('button')[1];
  } else if (document.domain.includes('google') && state.search) {
    el = document.getElementsByTagName('button')[5];
  }
  simulateClick(el);
});
