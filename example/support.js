// jshint browser:true, jquery: true
/* global Handlebars */

export function addLoader(target) {
  let html = '<div class="preloader-wrapper small active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';

  target.addClass('center-align');
  target.html(html);
}

export function removeLoader(target) {
  target.children('.preloader-wrapper').remove();
  target.removeClass('center-align');
}

export function ready() {
  let progress = document.querySelector('.progress');
  progress.parentElement.removeChild(progress);

  let container = document.querySelector('.container');
  container.className = container.className.replace('hide', '');

  serialize();
}

export function errorMessage(reason) {
  console.error(reason);
}

export function serialize() {

  $.fn.serializeObject = function()
  {
    let o = {};
    let a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }

        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });

    return o;
  };

}
