!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,f=setTimeout(O,t),s?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=p();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=p(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return T(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=a.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var T=document.querySelector("input"),j=document.querySelector("textarea"),O=document.querySelector(".feedback-form"),h="feedback-form-state",w=localStorage.getItem(h),x=JSON.parse(w);null===x&&localStorage.setItem(h,'{"email":"", "message":""}'),T.value=x.email,j.value=x.message;var N={};O.addEventListener("input",n((function(e){e.currentTarget&&(N.email=e.currentTarget.elements.email.value,N.message=e.currentTarget.elements.message.value),localStorage.setItem(h,JSON.stringify(N))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(x,x.email,x.message),localStorage.removeItem(h),T.value="",j.value=""}))}();
//# sourceMappingURL=03-feedback.c3da6155.js.map
