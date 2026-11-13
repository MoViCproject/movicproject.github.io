/*!
 * MoViC project page
 * Plays each looping demo video only while it is on screen,
 * so the page does not decode six videos at once.
 */
(function () {
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var videos = Array.prototype.slice.call(document.querySelectorAll('video[data-autoplay]'));

  if (reduceMotion) {
    videos.forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); });
    return;
  }

  if (!('IntersectionObserver' in window)) {
    videos.forEach(function (v) { v.play().catch(function () {}); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var v = entry.target;
      if (entry.isIntersecting) {
        if (v.preload !== 'auto') v.preload = 'auto';
        v.play().catch(function () {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { threshold: 0.25 });

  videos.forEach(function (v) { observer.observe(v); });
})();
