let state = { youtube: true, google: true, search: true };

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ state });
  console.log('Initialized extension', state);
});
