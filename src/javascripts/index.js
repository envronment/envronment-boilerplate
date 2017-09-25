import aframe from 'aframe';
import aframeExtras from 'aframe-extras';

import rotateImage from './rotate-image'

aframeExtras.registerAll();

aframe.registerComponent('rotate-image', rotateImage);

