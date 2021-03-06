/**
 * Plugin for Avalon 1.5.x
 */

(function() {

    var evhook = function(data) {
        setTimeout(function() {
            data.rollback && data.rollback();
        }, 0);
        //基本参数
        var element = data.element;
        var callback = function(ev, args) {
            args = data.args.concat(ev);
            return data.getter.apply(element, args);
        };
        //注册监听
        touch(element).on(data.param, callback);
    };

    var userEvents = [
        'tap', 'longtap', 'doubletap',
        'swipe', 'swipestart', 'swipeend',
        'swipeup', 'swiperight', 'swipedown', 'swipeleft'
    ];

    var mouseEvents = ['mouseup', 'mousedown', 'mousemove', 'mouseout'],
        touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel']
    ;

    userEvents.concat(mouseEvents, touchEvents).forEach(function(name) {
        handle[name + 'Hook'] = evhook;
    });

})();
