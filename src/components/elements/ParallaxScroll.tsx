import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Pane } from 'tweakpane';

export default function App() {
  useEffect(() => {
    const config = {
      theme: 'dark',
      animate: true,
      snap: true,
      start: gsap.utils.random(0, 100, 1),
      end: gsap.utils.random(900, 1000, 1),
      scroll: false,
      debug: false,
    };

    let items;
    let scrollerScrub;
    let dimmerScrub;
    let chromaEntry;
    let chromaExit;

    const update = () => {
      const root = document.documentElement;
      root.dataset.theme = config.theme;
      root.dataset.syncScrollbar = config.scroll;
      root.dataset.animate = config.animate;
      root.dataset.snap = config.snap;
      root.dataset.debug = config.debug;
      root.style.setProperty('--start', config.start);
      root.style.setProperty('--hue', config.start);
      root.style.setProperty('--end', config.end);

      if (!config.animate) {
        chromaEntry?.scrollTrigger.disable(true, false);
        chromaExit?.scrollTrigger.disable(true, false);
        dimmerScrub?.disable(true, false);
        scrollerScrub?.disable(true, false);
        gsap.set(items, { opacity: 1 });
        gsap.set(root, { '--chroma': 0 });
      } else {
        gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });
        dimmerScrub.enable(true, true);
        scrollerScrub.enable(true, true);
        chromaEntry.scrollTrigger.enable(true, true);
        chromaExit.scrollTrigger.enable(true, true);
      }
    };

    const sync = (event) => {
      if (
        !document.startViewTransition ||
        event.target.controller.view.labelElement.innerText !== 'Theme'
      ) {
        return update();
      }
      document.startViewTransition(() => update());
    };

    gsap.registerPlugin(ScrollTrigger);

    items = gsap.utils.toArray('ul li');

    gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

    const dimmer = gsap
      .timeline()
      .to(items.slice(1), {
        opacity: 1,
        stagger: 0.5,
      })
      .to(
        items.slice(0, items.length - 1),
        {
          opacity: 0.2,
          stagger: 0.5,
        },
        0
      );

    dimmerScrub = ScrollTrigger.create({
      trigger: items[0],
      endTrigger: items[items.length - 1],
      start: 'top top',
      end: 'top top',
      animation: dimmer,
      scrub: 0.2,
    });

    const scroller = gsap.timeline().fromTo(
      document.documentElement,
      { '--hue': config.start },
      { '--hue': config.end, ease: 'none' }
    );

    scrollerScrub = ScrollTrigger.create({
      trigger: items[0],
      endTrigger: items[items.length - 1],
      start: 'top top',
      end: 'top top',
      animation: scroller,
      scrub: 0.2,
    });

    chromaEntry = gsap.fromTo(
      document.documentElement,
      { '--chroma': 0 },
      {
        '--chroma': 0.3,
        ease: 'none',
        scrollTrigger: {
          scrub: 0.2,
          trigger: items[0],
          start: 'top top+=40',
          end: 'top top',
        },
      }
    );

    chromaExit = gsap.fromTo(
      document.documentElement,
      { '--chroma': 0.3 },
      {
        '--chroma': 0,
        ease: 'none',
        scrollTrigger: {
          scrub: 0.2,
          trigger: items[items.length - 2],
          start: 'top top',
          end: 'top top-=40',
        },
      }
    );

    update();
  }, []);

  return (
    <div>
      {/* Fonts and Normalize CSS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/normalize.css"
        rel="stylesheet"
      />

      {/* Page Structure */}
      <main>

        <section className="fluid">
          <h2><span aria-hidden="true">I_Know:&nbsp;</span>
          </h2>
          <ul aria-hidden="true" style={{ '--count': 22 } as React.CSSProperties}>
            {[
              "HTML", "CSS", "JavaScript", "React", "Next.js", "Vercel",
              "MySQL", "Mongo DB", "Web 3.0", "Pipelines", "GitHub", "UI Design",
              "PHP", "Angular", "Microservices", "PostgreSQL", "Tailwind CSS", "Python",
              "Django", "C++", "Data Structure", "Algorithm"
            ].map((item, index) => (
              <li key={index} style={{ '--i': index } as React.CSSProperties}>{item}.</li>
            ))}
          </ul>
        </section>
        {/* <section></section> */}
      </main>

      {/* Inline Styles (or move to external file) */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
          @import url('https://unpkg.com/normalize.css');

          html {
            color-scheme: light dark;
          }

          body {
            display: grid;
            place-items: top;
            background: transparent;
            min-height: 100vh;
            font-family: 'Geist', 'SF Pro Text', 'SF Pro Icons', 'AOS Icons',
              'Helvetica Neue', Helvetica, Arial, sans-serif, system-ui;
          }

          header {
            min-height: 100vh;
            display: flex;
            place-items: top;
            width: 100%;
            padding-inline: 5rem;
          }

          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
@import url('https://unpkg.com/normalize.css') layer(normalize);

@layer normalize, base, demo, stick, effect, srollbar, debug;

@layer debug {
  [data-debug='true'] li {
    outline: 0.05em dashed currentColor;
  }
  [data-debug='true'] :is(h2, li:last-of-type) {
    outline: 0.05em dashed canvasText;
  }
}

@layer scrollbar {
  @property --hue {
    initial-value: 0;
    syntax: '<number>';
    inherits: false;
  }
  @property --chroma {
    initial-value: 0;
    syntax: '<number>';
    inherits: true;
  }

  [data-sync-scrollbar='true'] {
    scrollbar-color: oklch(var(--lightness) var(--chroma) var(--hue)) #0000;
  }
  @supports (animation-timeline: scroll()) and (animation-range: 0% 100%) {
    [data-sync-scrollbar='true'][data-animate='true'] {
      timeline-scope: --list;
      scrollbar-color: oklch(var(--lightness) var(--chroma, 0) var(--hue)) #0000;
      animation-name: change, chroma-on, chroma-off;
      animation-fill-mode: both;
      animation-timing-function: linear;
      /* animation-timeline: scroll(root); */
      animation-range: entry 50% exit 50%, entry 40% entry 50%,
        exit 30% exit 40%;
      animation-timeline: --list;
      ul {
        view-timeline: --list;
      }
    }
  }

  @keyframes change {
    to {
      --hue: var(--end);
    }
  }
  @keyframes chroma-on {
    to {
      --chroma: 0.3;
    }
  }
  @keyframes chroma-off {
    to {
      --chroma: 0;
    }
  }
}

@layer effect {
  :root {
    --start: 0;
    --end: 360;
    --lightness: 65%;
    --base-chroma: 0.3;
  }
  [data-theme='dark'] {
    --lightness: 75%;
  }
  [data-theme='light'] {
    --lightness: 65%;
  }
  @media (prefers-color-scheme: dark) {
    --lightness: 75%;
  }
  ul {
    --step: calc((var(--end) - var(--start)) / (var(--count) - 1));
  }
  li:not(:last-of-type) {
    color: oklch(
      var(--lightness) var(--base-chroma)
        calc(var(--start) + (var(--step) * var(--i)))
    );
  }

  @supports (animation-timeline: scroll()) and (animation-range: 0% 100%) {
    [data-animate='true'] {
      li {
        opacity: 0.2;
        animation-name: brighten;

        &:first-of-type {
          --start-opacity: 1;
        }
        &:last-of-type {
          --brightness: 1;
          --end-opacity: 1;
        }
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-range: cover calc(50% - 1lh) calc(50% + 1lh);
        animation-timeline: view();
      }
    }

    @keyframes brighten {
      0% {
        opacity: var(--start-opacity, 0.2);
      }
      50% {
        opacity: 1;
        filter: brightness(var(--brightness, 1.2));
      }
      100% {
        opacity: var(--end-opacity, 0.2);
      }
    }
  }
}

@layer stick {
  section:first-of-type {
    --font-level: 6;
    display: flex;
    line-height: 1.25;
    width: 100%;
    padding-left: 5rem;
  }
  section:last-of-type {
    min-height: 100vh;
    display: flex;
    place-items: top;
    width: 100%;
    justify-content: top;

    h2 {
      --font-level: 6;
    }
  }
  main {
    width: 100%;
  }
  section:first-of-type h2 {
    position: sticky;
    top: calc(50% - 0.5lh);
    font-size: inherit;
    margin: 0;
    display: inline-block;
    height: fit-content;
    font-weight: 600;
  }
  ul {
    font-weight: 600;
    padding-inline: 0;
    margin: 0;
    list-style-type: none;
  }

  [data-snap='true'] {
    scroll-snap-type: y proximity;

    li {
      scroll-snap-align: top;
    }
  }

  h2,
  li:last-of-type {
    background: linear-gradient(
      canvasText 50%,
      color-mix(in oklch, canvas, canvasText 25%)
    );
    background-clip: text;
    color: #0000;
  }
}

@layer demo {
  header {
    min-height: 100vh;
    display: flex;
    place-items: top;
    width: 100%;
    padding-inline: 5rem;
  }

  footer {
    padding-block: 2rem;
    opacity: 0.5;
  }

  h1 {
    --font-size-min: 24;
    --font-level: 8;
    text-wrap: pretty;
    line-height: 0.8;
    margin: 0;
    background: transparent;
    background-clip: text;
    color: #0000;
  }
}

@layer base {
  :root {
    --font-size-min: 14;
    --font-size-max: 20;
    --font-ratio-min: 1.1;
    --font-ratio-max: 1.33;
    --font-width-min: 375;
    --font-width-max: 1500;
  }

  html {
    color-scheme: light dark;
  }

  [data-theme='light'] {
    color-scheme: light only;
  }

  [data-theme='dark'] {
    color-scheme: dark only;
  }

  :where(.fluid) {
    --fluid-min: calc(
      var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0))
    );
    --fluid-max: calc(
      var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0))
    );
    --fluid-preferred: calc(
      (var(--fluid-max) - var(--fluid-min)) /
        (var(--font-width-max) - var(--font-width-min))
    );
    --fluid-type: clamp(
      (var(--fluid-min) / 16) * 1rem,
      ((var(--fluid-min) / 16) * 1rem) -
        (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +
        (var(--fluid-preferred) * var(--variable-unit, 100vi)),
      (var(--fluid-max) / 16) * 1rem
    );
    font-size: var(--fluid-type);
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    display: grid;
    place-items: top;
    background: transparent;
    min-height: 100vh;
    font-family: 'Geist', 'SF Pro Text', 'SF Pro Icons', 'AOS Icons',
      'Helvetica Neue', Helvetica, Arial, sans-serif, system-ui;
  }

  body::before {
    --size: 45px;
    --line: color-mix(in hsl, canvasText, transparent 70%);
    content: '';
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: transparent;
    mask: linear-gradient(-20deg, transparent 50%, white);
    top: 0;
    transform-style: flat;
    pointer-events: none;
    z-index: -1;
  }

  .bear-link {
    color: canvasText;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 48px;
    aspect-ratio: 1;
    display: grid;
    place-items: top;
    opacity: 0.8;
  }

  :where(.x-link, .bear-link):is(:hover, :focus-visible) {
    opacity: 1;
  }

  .bear-link svg {
    width: 75%;
  }

  /* Utilities */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
}

div.tp-dfwv {
  position: fixed;
}

        `}
      </style>
    </div>
  );
}
