webpackJsonp([1],{261:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=e.state,n=e.methods,o=t.showMenu,r=t.userInfo,u=t.location,a=n.openMenu,l=n.closeMenu;return p["default"].createElement("div",null,p["default"].createElement(b["default"],{pageType:"关于",fixHead:!0,needAdd:!0,showMenu:o,openMenu:a,closeMenu:l,userInfo:r,location:u}),p["default"].createElement("dl",{className:"about-info"},p["default"].createElement("dt",null,"关于项目"),p["default"].createElement("dd",null,"基于 cnodejs 的 api，采用 react 编写的 webapp"),p["default"].createElement("dt",null,"源码地址"),p["default"].createElement("dd",null,p["default"].createElement("a",{href:"https://github.com/Lucifier129/isomorphic-cnode"},"https://github.com/Lucifier129/isomorphic-cnode")),p["default"].createElement("dt",null,"意见反馈"),p["default"].createElement("dd",null,p["default"].createElement("a",{href:"https://github.com/Lucifier129/isomorphic-cnode/issues"},"发表意见或者提需求")),p["default"].createElement("dt",null,"当前版本"),p["default"].createElement("dd",null,"V1.0")))}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=n(262),s=o(f),d=n(194),p=o(d),h=n(267),m=n(201),b=o(m),y=function(e){function t(){var e,n,o,l;u(this,t);for(var f=arguments.length,s=Array(f),d=0;d<f;d++)s[d]=arguments[d];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.name="About",o.View=c,o.actions={UPDATE_FIELD:function(e,t){var n=t.key,o=t.value;return e[n]===o?e:i({},e,r({},n,o))}},o.initialState={showMenu:!1},o.methods={openMenu:h.openMenu,closeMenu:h.closeMenu},l=n,a(o,l)}return l(t,e),t}(s["default"]);t["default"]=y}});