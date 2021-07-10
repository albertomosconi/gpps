let switchYoutube = document.getElementById('switchYoutube');
let switchGoogle = document.getElementById('switchGoogle');
let switchSearch = document.getElementById('switchSearch');

browser.storage.sync.get('state', ({ state }) => {
  switchYoutube.checked = state.youtube;
  switchGoogle.checked = state.google;
  switchSearch.checked = state.search;
});

const toggleSwitch = (name) => {
  browser.storage.sync.get('state', ({ state }) => {
    let newState = { ...state };
    newState[`${name}`] = !state[`${name}`];
    browser.storage.sync.set({ state: newState });
  });
};

switchYoutube.addEventListener('click', () => toggleSwitch('youtube'));
switchGoogle.addEventListener('click', () => toggleSwitch('google'));
switchSearch.addEventListener('click', () => toggleSwitch('search'));
