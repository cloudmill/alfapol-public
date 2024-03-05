function animateMarquee(el, duration) {
  const innerEl = el.querySelector("[data-marquee]");

  if (!innerEl) return;
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);
  el.appendChild(cloneEl);

  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;

    if (progress > 1) {
      progress %= 1;
      start = now;
    }

    translateX = innerWidth * progress;

    innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    requestAnimationFrame(step);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.querySelector("[data-marquee-wrapper]");

  if (!marquee) return;
  animateMarquee(marquee, 100000);
});
