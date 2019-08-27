export class cf7Extension {
  constructor() {
    $(() => {
      this.setEvents();
    });
  }

  setEvents() {
    document.addEventListener('wpcf7submit', e => this.hideMessage(e), false);

    let wpcf7Elm = document.querySelector( '.wpcf7' );
    if ( wpcf7Elm ) {
      this.animatePlaceholder('.field', 'filled');
    }
  }

  hideMessage(e) {
    let form = e.target,
      message = form.querySelector( '.wpcf7-response-output' );

    setTimeout(()=>{
      message.removeAttribute('style')
    }, 20000);
  }

  animatePlaceholder(selector, active = 'active') {
    // let selectorClass = selector.attr('class').split(' ')[0].split('form-');
    let $inputs = $(selector).find('input, textarea');

    if ( $inputs ) {
      $inputs.each( (index, item) => {
        let $input = $(item),
          $wrap = $input.closest(selector);

        if ($input.val()) {
          $wrap.addClass(active);
        }
      });

      $inputs.focus(function () {
        let $input = $(this);
        if (!$input.val()) {
          $input.closest(selector).addClass(active);
        }
      });

      $inputs.blur(function () {
        let $input = $(this);
        if (!$input.val()) {
          $input.closest(selector).removeClass(active);
        }
      });
    }
  }

}
