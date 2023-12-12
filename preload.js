const fs = require('fs');
const { ipcRenderer } = require('electron')


window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});


ipcRenderer.on('popUpBox', (event, message) => {
  // Send a message back to the main process to call the 'showpopupbox' function.
  ipcRenderer.invoke('showPopupBox', message)
})