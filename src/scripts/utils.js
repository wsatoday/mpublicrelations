 // From https://davidwalsh.name/javascript-debounce-function.
function _debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const offsetTop = function(section) {
  const mainHeader = document.getElementById('js-main-header');
  const boundingSection = section.getBoundingClientRect();
  const sectionHeight = boundingSection.height;
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', _debounce(() => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    (st > sectionHeight) ? mainHeader.classList.add('is--red') : mainHeader.classList.remove('is--red');

    lastScrollTop = st;
  }, 0));
};

export {offsetTop}