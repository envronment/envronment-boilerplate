export default {
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
};
