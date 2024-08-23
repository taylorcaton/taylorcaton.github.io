<!-- eslint-disable max-len -->
<template>
  <section class="container" :class="{ rock: this.isAnimated }">
    <div class="heading-container">
      <h1 class="title is-spaced">
        <span :class="{ wave: this.isAnimated }" @mouseover="$emit('hyperSpeed', 0.8)" @focus="$emit('hyperSpeed', 0.4)"
          @mouseleave="$emit('hyperSpeed', 0.1)" @blur="$emit('hyperSpeed', 0.1)">
          ✌🏻&nbsp;
        </span>
        <span :class="{ gemini: this.isAnimated }">Taylor Caton</span>
      </h1>
      <p v-show="this.isAnimated" class="subtitle" id="typewriter" aria-label="Professional full-stack developer, teacher, ADA enthusiast, and musician with a proven track record of leading
        front-end teams to deliver high-quality results."></p>
      <p v-show="!this.isAnimated" class="subtitle">
        Professional full-stack developer, teacher, ADA enthusiast, and musician with a proven track
        record of leading front-end teams to deliver high-quality results.
      </p>
      <a href="https://github.com/taylorcaton" target="_blank" @mouseover="$emit('hyperSpeed', 0.4)"
        @focus="$emit('hyperSpeed', 0.4)" @mouseleave="$emit('hyperSpeed', 0.1)" @blur="$emit('hyperSpeed', 0.1)">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="github-logo">
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633
            17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809
             1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3
               1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
                3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805
                 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0
                  .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/taylorcaton/" target="_blank" @mouseover="$emit('hyperSpeed', 0.4)"
        @focus="$emit('hyperSpeed', 0.4)" @mouseleave="$emit('hyperSpeed', 0.1)" @blur="$emit('hyperSpeed', 0.1)">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136
             2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37
              4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063
               2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782
                13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0
                 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2
                  0 22.222 0h.003z" />
        </svg>
        Linkedin
      </a>
    </div>
  </section>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core'

export default {
  name: 'PortfolioContainer',
  props: {
    isRunning: Boolean
  },
  data() {
    return {
      isAnimated: this.isRunning,
      typer: null
    }
  },
  watch: {
    // eslint-disable-next-line func-names
    isRunning() {
      // watch it
      this.isAnimated = this.isRunning
      if (this.isAnimated) this.runTyper()
    }
  },
  mounted() {
    this.runTyper()
  },
  methods: {
    runTyper() {
      if (!this.typer) {
        // eslint-disable-next-line no-new
        this.typer = new Typewriter('#typewriter', {
          delay: 70
        })

        this.typer
          .pauseFor(2500)
          .typeString(
            'Professional <strong style="color:#ffe81f">full-stack developer</strong>, speaker, '
          )
          .pauseFor(300)
          .deleteChars(9)
          .typeString(
            '<strong style="color:#ffe81f">teacher</strong>, <strong style="color:#ffe81f">ADA enthusiast</strong>, and <strong style="color:#ffe81f">musician</strong> '
          )
          .typeString(
            'with a proven track record of leading front-end teams to deliver high-quality results.'
          )
          .pauseFor(1000)
          .start()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$offWhite: #ececec;
$banana: #ffe81f;

.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rock {
  animation: 10s rock infinite ease-in-out;
}

h1 {
  text-rendering: optimizeLegibility;
  color: $offWhite;
  font-size: 28px;
}

p {
  color: $offWhite;
}

.subtitle {
  min-height: 150px;

  @media (min-width: 768px) {
    min-height: auto;
  }
}

.heading-container {
  margin: 100px 25px;
  width: 100%;
  backdrop-filter: blur(1.3px);

  @media (min-width: 768px) {
    width: 600px;
    margin: 100px auto;
  }
}

svg {
  width: 24px;
  fill: $offWhite;
  vertical-align: middle;
}

a {
  color: $offWhite;
  margin-right: 20px;

  &:hover,
  &:focus {
    color: $banana !important;
    text-decoration: underline;
    background-color: transparent;

    svg {
      fill: $banana;
    }
  }
}

.wave {
  animation-name: wave-animation;
  /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s;
  /* Change to speed up or slow down */
  animation-iteration-count: infinite;
  /* Never stop waving :) */
  transform-origin: 70% 70%;
  /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(14deg);
  }

  20% {
    transform: rotate(-8deg);
  }

  30% {
    transform: rotate(14deg);
  }

  40% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(0deg);
  }

  /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}

@keyframes rock {

  0%,
  100% {
    transform: rotate(-1deg);
  }

  50% {
    transform: rotate(1deg);
  }
}

.gemini {
  background: linear-gradient($banana, $offWhite);
  background-clip: text;
  color: transparent;
  animation: gemini 2s linear;
  background-size: 200% 200%;
}

@keyframes gemini {
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 0% 0%;
  }
}
</style>
