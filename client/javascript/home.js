webpackJsonp([4],{286:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var u=t[o](i),c=u.value}catch(a){return void n(a)}return u.done?void e(c):Promise.resolve(c).then(function(e){return r("next",e)},function(e){return r("throw",e)})}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(262),l=o(s),f=n(287),p=o(f),h=n(288),d=r(h),w=n(267),y=function(e){function t(){var e,n,r,o;u(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.name="List",r.View=p["default"],r.actions=d,r.initialState={topics:[],showMenu:!1,searchKey:{page:1,limit:20,tab:"all",mdrender:!0},userInfo:{}},r.isFetching=!1,r.methods={openMenu:w.openMenu,closeMenu:w.closeMenu,handleScroll:function(){var e=this;return i(regeneratorRuntime.mark(function t(){var n,r,o,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.store.getState(),r=n.showMenu,!e.isFetching&&!r){t.next=4;break}return t.abrupt("return");case 4:if(o=window.innerHeight+window.scrollY,i=document.body.scrollHeight||document.documentElement.scrollHeight,!(i-o<=200)){t.next=12;break}return u=e.store.actions.FETCH_NEXT_TOPICS,e.isFetching=!0,t.next=11,u();case 11:e.isFetching=!1;case 12:case"end":return t.stop()}},t,e)}))()}},o=n,c(r,o)}return a(t,e),t}(l["default"]);t["default"]=y}});