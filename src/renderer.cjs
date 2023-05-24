const { ipcRenderer } = require('electron');



const closeBtn = document.getElementById('close-btn');
const maxBtn = document.getElementById('maximize-btn');
const minBtn = document.getElementById('minimize-btn');

let isMaximized = false; 
let prevWidth = window.innerWidth; 
let prevHeight = window.innerHeight; 

minBtn.addEventListener('click', () => {
  ipcRenderer.send('minimize-window');
})

maxBtn.addEventListener('click', () => {
  if (isMaximized) {
    window.resizeTo(prevWidth, prevHeight);
    isMaximized = false;
  } else {
    prevWidth = window.innerWidth;
    prevHeight = window.innerHeight; 
    window.moveTo(0, 0);
    window.resizeTo(window.screen.width, window.screen.height);
    isMaximized = true;
  }
});

closeBtn.addEventListener('click', () => {
  window.close();
});
