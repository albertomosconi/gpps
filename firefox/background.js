let state = { youtube: true, google: true, search: true };

browser.runtime.onInstalled.addListener(() => {
  browser.storage.sync
    .set({ state })
    .then(() => console.log('Initialized extension', state));
});
