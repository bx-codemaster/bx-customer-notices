/**
 * Customer Notices FlipClock Initialization Script
 * This script initializes the FlipClock countdown timer for customer notices.
 * 
 * Make sure to include this script in the `$script_array` array in the file `general_bottom.js.php` 
 * so that it is loaded properly.
 * 
 *   $script_array = array(
 *   DIR_TMPL_JS.'jquery.mmenulight.js',
 *   DIR_TMPL_JS.'jquery.colorbox.min.js',
 *   DIR_TMPL_JS.'jquery.lazysizes.min.js',
 *   DIR_TMPL_JS.'jquery.viewer.min.js',
 *   DIR_TMPL_JS.'jquery.easyTabs.js',
 *   DIR_TMPL_JS.'jquery.alertable.min.js',
 *   DIR_TMPL_JS.'jquery.sumoselect.min.js',
 *   DIR_TMPL_JS.'splide.min.js',
 *   DIR_TMPL_JS.'extra/bx_customer_notices.js',
 *   DIR_WS_EXTERNAL . 'FlipClock/flip.min.js',
 *  );
 */

  function csnCustomerNoticeFlipInit(tick) {
    var root = tick && tick.root ? tick.root : null,
        remainingSeconds,
        dueDate,
        labelDays,
        labelHours,
        labelMinutes,
        labelSeconds,
        counter;

    if (!root || root.getAttribute('data-csn-flip-ready') === '1') {
      return;
    }

    if (typeof Tick === 'undefined' || !Tick.count || typeof Tick.count.down !== 'function') {
      return;
    }

    root.setAttribute('data-csn-flip-ready', '1');

    remainingSeconds = parseInt(root.getAttribute('data-remaining-seconds'), 10);
    if (isNaN(remainingSeconds) || remainingSeconds < 0) {
      remainingSeconds = 0;
    }

    labelDays    = root.getAttribute('data-label-days') || 'Days';
    labelHours   = root.getAttribute('data-label-hours') || 'Hours';
    labelMinutes = root.getAttribute('data-label-minutes') || 'Minutes';
    labelSeconds = root.getAttribute('data-label-seconds') || 'Seconds';

    tick.setConstant('DAY_SINGULAR', labelDays);
    tick.setConstant('DAY_PLURAL', labelDays);
    tick.setConstant('HOUR_SINGULAR', labelHours);
    tick.setConstant('HOUR_PLURAL', labelHours);
    tick.setConstant('MINUTE_SINGULAR', labelMinutes);
    tick.setConstant('MINUTE_PLURAL', labelMinutes);
    tick.setConstant('SECOND_SINGULAR', labelSeconds);
    tick.setConstant('SECOND_PLURAL', labelSeconds);

    dueDate = new Date(Date.now() + (remainingSeconds * 1000));
    counter = Tick.count.down(dueDate, {
      format: ['d', 'h', 'm', 's'],
      cascade: true,
      interval: 1000
    });

    counter.onupdate = function (value) {
      tick.value = value;
    };
  }
