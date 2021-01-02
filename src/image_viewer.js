import small from '../assets/small.png';
import '../styles/image_viewer.css';

export const imageViewer = () => {
  const image = document.createElement('img');
  image.src = small;

  document.body.appendChild(image);
};
