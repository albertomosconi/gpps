let switchYoutube = document.getElementById('switchYoutube');
let switchGoogle = document.getElementById('switchGoogle');
let switchSearch = document.getElementById('switchSearch');

chrome.storage.sync.get('state', ({ state }) => {
  switchYoutube.checked = state.youtube;
  switchGoogle.checked = state.google;
  switchSearch.checked = state.search;
});

const toggleSwitch = (name) => {
  chrome.storage.sync.get('state', ({ state }) => {
    let newState = { ...state };
    newState[`${name}`] = !state[`${name}`];
    chrome.storage.sync.set({ state: newState });
  });
};

switchYoutube.addEventListener('click', () => toggleSwitch('youtube'));
switchGoogle.addEventListener('click', () => toggleSwitch('google'));
switchSearch.addEventListener('click', () => toggleSwitch('search'));
