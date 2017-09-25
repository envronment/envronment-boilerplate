import AFRAME from 'aframe';
import aframeExtras from 'aframe-extras';

aframeExtras.registerAll();

AFRAME.registerComponent('rotate-image', {
  schema: {
    speed: { default: 10 },
  },
  tick() {
    const el = this.el;
    const { speed } = this.data;
    const rotation = el.getAttribute('rotation');
    rotation.y += speed;
    el.setAttribute('rotation', rotation);
  },
});

