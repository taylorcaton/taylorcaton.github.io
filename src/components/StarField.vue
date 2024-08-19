<template>
  <canvas id="canvas" style="width: 100%; height: 100%; padding: 0; margin: 0"></canvas>
</template>

<script>
export default {
  name: 'StarField',
  props: {
    isRunning: Boolean,
    starSpeed: Number,
  },
  data() {
    return {
      isAnimated: this.isRunning,
      starSpeeder: this.starSpeed,
    };
  },
  mounted() {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');

    let w;
    let h;

    const setCanvasExtents = () => {
      w = document.body.clientWidth;
      h = document.body.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };

    setCanvasExtents();

    window.onresize = () => {
      setCanvasExtents();
    };

    const makeStars = (count) => {
      const out = [];
      for (let i = 0; i < count; i += 1) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        };
        out.push(s);
      }
      return out;
    };

    const stars = makeStars(2000);

    const clear = () => {
      c.fillStyle = 'black';
      c.fillRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x, y, brightness) => {
      const intensity = brightness * 255;
      const size = intensity < 200 ? 1 : 2;
      const rgb = `rgb(${intensity},${intensity},${intensity})`;
      c.fillStyle = rgb;
      c.fillRect(x, y, size, size);
    };

    const moveStars = (distance) => {
      if (this.isAnimated) {
        const count = stars.length;
        for (let i = 0; i < count; i += 1) {
          const s = stars[i];
          s.z -= distance;
          while (s.z <= 1) {
            s.z += 1000;
          }
        }
      }
    };

    let prevTime;
    const init = (time) => {
      prevTime = time;
      // eslint-disable-next-line no-use-before-define
      requestAnimationFrame(tick);
    };

    const tick = (time) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * this.starSpeeder);

      clear();

      const cx = w / 2;
      const cy = h / 2;

      const count = stars.length;
      for (let i = 0; i < count; i += 1) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) {
          // eslint-disable-next-line no-continue
          continue;
        }

        const d = star.z / 1000.0;
        const b = 1 - d * d;

        putPixel(x, y, b);
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(init);
  },
  watch: {
    // eslint-disable-next-line func-names
    isRunning() { // watch it
      this.isAnimated = this.isRunning;
    },
    starSpeed() {
      this.starSpeeder = this.starSpeed;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
