"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[325],{1690:function(e,n,s){var t=s(5666),c=s.n(t),i=s(5893),r=(s(7294),s(2175)),a=s(1664),l=s(2806);function o(e,n,s,t,c,i,r){try{var a=e[i](r),l=a.value}catch(o){return void s(o)}a.done?n(l):Promise.resolve(l).then(t,c)}n.Z=function(){var e,n=function(e){var n;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(n="Invalid email address"):n="Required",n},s=function(e){return new Promise((function(n){return setTimeout(n,e)}))};return(0,i.jsx)("footer",{className:"footer-half sub-bg section-padding pb-0",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-5",children:(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:"".concat(l.E8),alt:""})})})}),(0,i.jsx)("div",{className:"con-info custom-font",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"Email : "})," Avo_support@website.com"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"Address : "})," A32 , Ave 15th Street, Door 211, San Franciso, USA 32490."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"Phone : "})," (+1) 2345 678 44 88"]})]})}),(0,i.jsxs)("div",{className:"social-icon",children:[(0,i.jsx)("h6",{className:"custom-font stit simple-btn",children:"Follow Us"}),(0,i.jsxs)("div",{className:"social",children:[(0,i.jsx)("a",{href:"#0",className:"icon",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#0",className:"icon",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#0",className:"icon",children:(0,i.jsx)("i",{className:"fab fa-pinterest"})}),(0,i.jsx)("a",{href:"#0",className:"icon",children:(0,i.jsx)("i",{className:"fab fa-behance"})})]})]})]})}),(0,i.jsx)("div",{className:"col-lg-5 offset-lg-2",children:(0,i.jsxs)("div",{className:"subscribe mb-50",children:[(0,i.jsx)("h6",{className:"custom-font stit simple-btn",children:"Newsletter"}),(0,i.jsx)("p",{children:"Sign up for subscribe out newsletter!"}),(0,i.jsx)(r.J9,{initialValues:{subscribe:""},onSubmit:(e=c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(500);case 2:alert(JSON.stringify(n,null,2)),n.subscribe="";case 4:case"end":return e.stop()}}),e)})),function(){var n=this,s=arguments;return new Promise((function(t,c){var i=e.apply(n,s);function r(e){o(i,t,c,r,a,"next",e)}function a(e){o(i,t,c,r,a,"throw",e)}r(void 0)}))}),children:function(e){var s=e.errors,t=e.touched;return(0,i.jsx)(r.l0,{children:(0,i.jsxs)("div",{className:"form-group custom-font",children:[(0,i.jsx)(r.gN,{validate:n,type:"email",name:"subscribe",placeholder:"Your Email"}),s.email&&t.email&&(0,i.jsx)("div",{children:s.email}),(0,i.jsx)("button",{className:"cursor-pointer",children:"Subscribe"})]})})}})]})})]}),(0,i.jsx)("div",{className:"copyrights text-center",children:(0,i.jsx)("p",{children:"\xa9 2022, LTO Network"})})]})})}},5579:function(e,n,s){s.d(n,{Z:function(){return m}});var t=s(5893),c=s(7294),i=s(8636),r=s(1664),a=s(2806),l=s(2455),o=function(){var e=function(){window.scrollTo(0,0)},n=!1,s=document.querySelector(".topnav.dark"),t=document.querySelector(".topnav.dark .logo img"),c=document.querySelector(".topnav .menu-icon"),i=document.querySelector(".topnav .menu-text");c&&(c.addEventListener("click",(function(){n=!n,document.querySelector(".hamenu").classList.toggle("open"),n?((0,l.mM)(document.querySelector(".hamenu"),"0px"),document.querySelector(".topnav .menu-icon ").classList.add("open"),i.innerHTML="Close",s&&s.classList.add("navlit"),t&&t.setAttribute("src",a.E8),window.addEventListener("scroll",e)):((0,l.gw)(300,(0,l.mM)(document.querySelector(".hamenu"),"-100%")),document.querySelector(".topnav .menu-icon").classList.remove("open"),i.innerHTML="Menu",s&&s.classList.remove("navlit"),t&&t.setAttribute("src",a.Q1),window.removeEventListener("scroll",e)),Splitting({target:i})})),document.querySelectorAll(".main-menu a").forEach((function(n){n.addEventListener("click",(function(){(0,l.gw)(300,(0,l.mM)(document.querySelector(".hamenu"),"-100%")),document.querySelector(".topnav .menu-icon").classList.remove("open"),s&&s.classList.remove("navlit"),t&&t.setAttribute("src",a.Q1),window.removeEventListener("scroll",e)}))}))),document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(e){e.addEventListener("mouseenter",(function(){this.style.opacity="1",(0,l.m7)(this).forEach((function(e){e.style.opacity=".5"}))})),e.addEventListener("mouseleave",(function(){document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(e){e.style.opacity="1"}))}))})),document.querySelectorAll(".main-menu > li .dmenu").length&&document.querySelectorAll(".main-menu > li .dmenu").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".main-menu").classList.add("gosub"),(0,l.m7)(this.parentNode.parentNode).forEach((function(e){e.childNodes[1]&&e.childNodes[1].classList.remove("sub-open")})),this.parentNode.parentNode.childNodes[1].classList.add("sub-open")}))})),document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length&&document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".main-menu").classList.remove("gosub"),document.querySelector(".main-menu").classList.remove("sub-open")}))}))},d=(s(9008),s(4298)),u=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.default,{type:"text/javascript",src:"https://crypto.com/price/static/widget/index.js"}),(0,t.jsx)("div",{id:"crypto-widget-CoinTicker","data-theme":"dark","data-design":"classic","data-coins":"lto-network"})]})},m=function(e){var n=e.theme;e.lr;return c.useEffect((function(){o()}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{id:"navi",className:"topnav ".concat(n&&"light"===n?"light":""),children:(0,t.jsxs)("div",{className:"container-fluid",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)(r.default,{href:"/",children:(0,t.jsx)("a",{children:n&&"light"===n?(0,t.jsx)("img",{src:"".concat(a.Q1),alt:"logo"}):(0,t.jsx)("img",{src:"".concat(a.E8),alt:"logo"})})})}),(0,t.jsxs)("div",{className:"menu-icon",children:[(0,t.jsxs)("span",{className:"icon",children:[(0,t.jsx)("i",{}),(0,t.jsx)("i",{})]}),(0,t.jsx)(i.Z,{children:(0,t.jsx)("span",{className:"text","data-splitting":!0,style:{paddingTop:"4px"},children:(0,t.jsx)("span",{className:"menu-text",children:"Menu"})})})]})]})}),(0,t.jsx)("div",{className:"hamenu",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-7 col-md-6",children:(0,t.jsx)("div",{className:"menu-links",children:(0,t.jsxs)("ul",{className:"main-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{className:"o-hidden",children:(0,t.jsx)(r.default,{href:"/",children:(0,t.jsxs)("a",{className:"link",children:[(0,t.jsx)("span",{className:"nm",children:"01."}),"Home"]})})})}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{className:"o-hidden",children:(0,t.jsx)(r.default,{href:"/#about",children:(0,t.jsxs)("a",{className:"link",children:[(0,t.jsx)("span",{className:"nm",children:"02."}),"What is LTO Network?"]})})})}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{className:"o-hidden",children:(0,t.jsx)(r.default,{href:"https://docs.ltonetwork.com",children:(0,t.jsxs)("a",{className:"link",children:[(0,t.jsx)("span",{className:"nm",children:"03."}),"HowTo & Docs"]})})})}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{className:"o-hidden",children:(0,t.jsx)(r.default,{href:"/news",children:(0,t.jsxs)("a",{className:"link",children:[(0,t.jsx)("span",{className:"nm",children:"04."}),"News"]})})})}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{className:"o-hidden",children:(0,t.jsx)(r.default,{href:"/partnerships",children:(0,t.jsxs)("a",{className:"link",children:[(0,t.jsx)("span",{className:"nm",children:"05."}),"Partnerships & Projects"]})})})})]})})}),(0,t.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,t.jsxs)("div",{className:"cont-info",children:[(0,t.jsx)("div",{className:"item",children:(0,t.jsx)(u,{})}),(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("h6",{children:"Telegram"}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"https://t.me/ltonetwork",children:"@ltonetwork"})})]}),(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("h6",{children:"Twitter"}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"https://twitter.com/theltonetwork",children:"@TheLTONetwork"})})]}),(0,t.jsxs)("div",{className:"item social-icon",children:[(0,t.jsx)("a",{className:"icon",href:"https://www.linkedin.com/company/ltonetwork/",children:(0,t.jsx)("i",{className:"fab fa-linkedin"})}),(0,t.jsx)("a",{className:"icon",href:"https://github.com/ltonetwork",children:(0,t.jsx)("i",{className:"fab fa-github"})}),(0,t.jsx)("a",{className:"icon",href:"https://www.youtube.com/channel/UCaHcF-xterKYTKSpY4xgKiw",children:(0,t.jsx)("i",{className:"fab fa-youtube"})}),(0,t.jsx)("a",{className:"icon",href:"https://reddit.com/r/LTONetwork",children:(0,t.jsx)("i",{className:"fab fa-reddit"})})]})]})})]})})})]})}},8636:function(e,n,s){var t=s(5893),c=s(7294);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?i(e):n}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,t=o(e);if(n){var c=o(this).constructor;s=Reflect.construct(t,arguments,c)}else s=t.apply(this,arguments);return d(this,s)}}var f=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(m,e);var n,s,o,d=h(m);function m(){var e;return r(this,m),l(i(e=d.apply(this,arguments)),"target",c.createRef()),l(i(e),"split",(function(){e.target.current&&Splitting({target:e.target.current})})),l(i(e),"componentDidMount",e.split),l(i(e),"componentDidUpdate",e.split),e}return n=m,(s=[{key:"render",value:function(){return(0,t.jsx)("div",{ref:this.target,children:this.props.children})}}])&&a(n.prototype,s),o&&a(n,o),m}(c.Component);n.Z=f},2532:function(e,n,s){var t=s(5893),c=(s(7294),s(9008));n.Z=function(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.default,{children:(0,t.jsx)("link",{rel:"stylesheet",href:"/css/dark.css"})}),n]})}}}]);