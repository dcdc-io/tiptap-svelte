(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{111:function(e,t,c){"use strict";c.r(t);var n=c(0),b=c(1),o=c(2),j=c(10),O=c(11);function r(e){let t,c,b;const o=new j.e({props:{class:"menubar",editor:e[0],$$slots:{default:[s,({commands:e})=>({2:e}),({commands:e})=>e?4:0]},$$scope:{ctx:e}}}),O=new j.c({props:{class:"editor__content",editor:e[0]}});return{c(){t=Object(n.y)("div"),Object(n.r)(o.$$.fragment),c=Object(n.bb)(),Object(n.r)(O.$$.fragment),this.h()},l(e){t=Object(n.n)(e,"DIV",{class:!0});var b=Object(n.l)(t);Object(n.m)(o.$$.fragment,b),c=Object(n.o)(b),Object(n.m)(O.$$.fragment,b),b.forEach(n.v),this.h()},h(){Object(n.g)(t,"class","editor")},m(e,j){Object(n.J)(e,t,j),Object(n.O)(o,t,null),Object(n.d)(t,c),Object(n.O)(O,t,null),b=!0},p(e,t){const c={};1&t&&(c.editor=e[0]),12&t&&(c.$$scope={dirty:t,ctx:e}),o.$set(c);const n={};1&t&&(n.editor=e[0]),O.$set(n)},i(e){b||(Object(n.ib)(o.$$.fragment,e),Object(n.ib)(O.$$.fragment,e),b=!0)},o(e){Object(n.jb)(o.$$.fragment,e),Object(n.jb)(O.$$.fragment,e),b=!1},d(e){e&&Object(n.v)(t),Object(n.u)(o),Object(n.u)(O)}}}function s(e){let t,c,b,j,O;const r=new o.a({props:{name:"undo"}}),s=new o.a({props:{name:"redo"}});return{c(){t=Object(n.y)("button"),Object(n.r)(r.$$.fragment),c=Object(n.bb)(),b=Object(n.y)("button"),Object(n.r)(s.$$.fragment),this.h()},l(e){t=Object(n.n)(e,"BUTTON",{class:!0});var o=Object(n.l)(t);Object(n.m)(r.$$.fragment,o),o.forEach(n.v),c=Object(n.o)(e),b=Object(n.n)(e,"BUTTON",{class:!0});var j=Object(n.l)(b);Object(n.m)(s.$$.fragment,j),j.forEach(n.v),this.h()},h(){Object(n.g)(t,"class","menubar__button"),Object(n.g)(b,"class","menubar__button")},m(o,a){Object(n.J)(o,t,a),Object(n.O)(r,t,null),Object(n.J)(o,c,a),Object(n.J)(o,b,a),Object(n.O)(s,b,null),j=!0,O=[Object(n.M)(t,"click",(function(){Object(n.L)(e[2].undo)&&e[2].undo.apply(this,arguments)})),Object(n.M)(b,"click",(function(){Object(n.L)(e[2].redo)&&e[2].redo.apply(this,arguments)}))]},p(t,c){e=t},i(e){j||(Object(n.ib)(r.$$.fragment,e),Object(n.ib)(s.$$.fragment,e),j=!0)},o(e){Object(n.jb)(r.$$.fragment,e),Object(n.jb)(s.$$.fragment,e),j=!1},d(e){e&&Object(n.v)(t),Object(n.u)(r),e&&Object(n.v)(c),e&&Object(n.v)(b),Object(n.u)(s),Object(n.V)(O)}}}function a(e){let t,c,b=e[0]&&r(e);return{c(){b&&b.c(),t=Object(n.z)()},l(e){b&&b.l(e),t=Object(n.z)()},m(e,o){b&&b.m(e,o),Object(n.J)(e,t,o),c=!0},p(e,[c]){e[0]?b?(b.p(e,c),Object(n.ib)(b,1)):(b=r(e),b.c(),Object(n.ib)(b,1),b.m(t.parentNode,t)):b&&(Object(n.H)(),Object(n.jb)(b,1,1,()=>{b=null}),Object(n.k)())},i(e){c||(Object(n.ib)(b),c=!0)},o(e){Object(n.jb)(b),c=!1},d(e){b&&b.d(e),e&&Object(n.v)(t)}}}function i(e,t,c){let n,o;return Object(b.d)(()=>{c(0,n=new j.b({extensions:[new O.i,new O.j({levels:[1,2,3]}),new O.b,new O.d,new O.n,new O.k],content:"\n          <h2>\n            History\n          </h2>\n          <p>\n            Try to change some content here. With the <code>History</code> extension you are able to undo and redo your changes. You can also use keyboard shortcuts for this (<code>cmd+z</code> and <code>cmd+shift+z</code>).\n          </p>\n        "})),n.on("transaction",()=>{o=n.isActive})}),Object(b.c)(()=>{n&&n.destroy()}),[n]}class d extends n.a{constructor(e){super(),Object(n.I)(this,e,i,a,n.W,{})}}t.default=d}}]);