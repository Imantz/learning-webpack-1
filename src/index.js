const button = document.createElement('button');
button.innerText = 'click me';
button.onclick = () => {
  System.import('./image_viewer').then((module) => {
    module.imageViewer();
  });
};

document.body.appendChild(button);
