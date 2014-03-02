//     e.js 0.1.0

//     (c) 2013-2014 Venkatraman, UI Architect
//     For all details and documentation:
//     https://github.com/ramsunvtech/e.js

  // Initial Setup
  // -------------
  var E = {};

  // Current version of the library. Keep in sync with `package.json`.
  E.VERSION = '0.1.0';

  // Comparison Methods.

  E.eq = function (vars, value) {
    return (vars == value) ? true : false;
  };

  E.or = function (var1, var2) {
    return (var1 || var2) ? true : false;
  };

  E.between = function (vars, from, to) {
    return (vars > from && vars < to) ? true : false;
  };

  // E.key
  // --------------

  // A object key has methods will manipulate keyboards keys by `keyCode`.
  E.key = {

    // Is alphabet keys exist?
    isAlphabet: function (e) {
      return E.between(e.keyCode, 64, 91);
    },

    // Is Number keys exist?
    isNumber: function (e) {
      return E.or(E.between(e.keyCode, 47, 58), E.between(e.keyCode, 95, 106));
    },

    // Is AlphaNumeric keys exist?
    isAlphaNumeric: function (e) {
      return E.or(this.isAlphabet(e), this.isNumber(e));
    },

    // Is Home Key Pressed?
    isHome: function (e) {
      return E.eq(e.keyCode, 36);
    },

    // Is End Key Pressed?
    isEnd: function (e) {
      return E.eq(e.keyCode, 35);
    },

    // Is Ctrl Key Pressed?
    isCtrl: function (e) {
      return E.or(e.ctrlKey, E.eq(e.keyCode, 17));
    },

    // Is Alt Key Pressed?
    isAlt: function (e) {
      return E.or(e.altKey, E.eq(e.keyCode, 18));
    },

    // Is backspace Key Pressed?
    isBackSpace: function (e) {
      return E.eq(e.keyCode, 8);
    },

    // Is Tab Key Pressed?
    isTab: function (e) {
      return E.eq(e.keyCode, 9);
    },

    // Is Enter Key Pressed?
    isEnter: function (e) {
      return E.eq(e.keyCode, 13);
    },

    // Is Meta Key Pressed?
    isMeta: function (e) {
      
    },

    // Is Shift Key Pressed?
    isShift: function (e) {
      return E.or(e.shiftKey, E.eq(e.keyCode, 16));
    },

    // Is ; Pressed?
    isSemiColon: function (e) {
     return E.eq(e.keyCode, 186);
    },

    // Is = Pressed?
    isEqualSign: function (e) {
     return E.eq(e.keyCode, 187);
    },

    // Is , Pressed?
    isComma: function (e) {
     return E.eq(e.keyCode, 188);
    },

    // Is - Pressed?
    isDash: function (e) {
     return E.eq(e.keyCode, 189);
    },

    // Is . Pressed?
    isPeriod: function (e) {
      return E.eq(e.keyCode, 190);
    },
  };

  // Common Methods.

  E.isBubbles = function (e) {
    return (e.bubbles) ? true : false;
  };

  E.stop = function (e) {
    e.preventDefault();
  };

  E.stopBubble = function (e) {
    e.stopPropogation();
  };

  E.stopAll = function (e) {
    E.stop(e);
    E.stopBubble(e);
  };

  // E.type
  // --------------

  // A object type has methods will manipulate to verify the event type.
  E.event = {
    isFocus: function (e) {
      return E.eq(e.type, 'focus');
    },

    isBlur: function (e) {
      return E.eq(e.type, 'blur');
    },

    isKeyDown: function (e) {
      return E.eq(e.type, 'keydown');
    },

    isKeyPress: function (e) {
      return E.eq(e.type, 'keypress');
    },

    isKeyUp: function (e) {
      return E.eq(e.type, 'keyup');
    },

    isChange: function (e) {
      return E.eq(e.type, 'change');
    },

    isSelect: function (e) {
      return E.eq(e.type, 'select');
    },

    isClick: function (e) {
      return E.eq(e.type, 'click');
    },

    isDblClick: function (e) {
      return E.eq(e.type, 'dblclick');
    },

    isMouseDown: function (e) {
      return E.eq(e.type, 'mousedown');
    },

    isMouseMove: function (e) {
      return E.eq(e.type, 'mousemove');
    },

    isMouseOver: function (e) {
      return E.eq(e.type, 'mouseover');
    },

    isMouseOut: function (e) {
      return E.eq(e.type, 'mouseover');
    },

    isMouseUp: function (e) {
      return E.eq(e.type, 'mouseup');
    }

  };

