webpackJsonp([6],{294:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),c=u.value}catch(i){return void n(i)}return u.done?void e(c):Promise.resolve(c).then(function(e){return r("next",e)},function(e){return r("throw",e)})}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(262),f=o(s),l=n(295),p=o(l),h=n(296),v=r(h),y=n(267),d=function(e){function t(){var e,n,r,o;u(this,t);for(var i=arguments.length,s=Array(i),f=0;f<i;f++)s[f]=arguments[f];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.name="Message",r.needLogin=!0,r.View=p["default"],r.actions=v,r.initialState={showMenu:!1,user:{},selectItem:"hasnot_read",currentData:[]},r.methods={openMenu:y.openMenu,closeMenu:y.closeMenu,changeItem:function(e){var t=e.currentTarget,n=this.store.actions.UPDATE_FIELD,r=t.getAttribute("data-type");n({key:"selectItem",value:r})},markAll:function(){var e=this;return a(regeneratorRuntime.mark(function t(){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store.actions,r=n.MARK_ALL_MESSAGES,o=n.INIT,t.prev=3,t.next=6,r();case 6:return t.next=8,o();case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),alert(t.t0.message);case 13:case"end":return t.stop()}},t,e,[[3,10]])}))()}},o=n,c(r,o)}return i(t,e),t}(f["default"]);t["default"]=d}});