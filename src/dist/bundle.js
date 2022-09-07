/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var t="(prefers-reduced-motion: reduce)";function e(n){n.length=0}function i(n,t,e){return Array.prototype.slice.call(n,t,e)}function o(n){return n.bind.apply(n,[null].concat(i(arguments,1)))}var r=setTimeout,u=function(){};function a(n){return requestAnimationFrame(n)}function s(n,t){return typeof t===n}function c(n){return!v(n)&&s("object",n)}var l=Array.isArray,f=o(s,"function"),d=o(s,"string"),p=o(s,"undefined");function v(n){return null===n}function g(n){return n instanceof HTMLElement}function h(n){return l(n)?n:[n]}function m(n,t){h(n).forEach(t)}function y(n,t){return n.indexOf(t)>-1}function b(n,t){return n.push.apply(n,h(t)),n}function w(n,t,e){n&&m(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function E(n,t){w(n,d(t)?t.split(" "):t,!0)}function S(n,t){m(t,n.appendChild.bind(n))}function _(n,t){m(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function x(n,t){return g(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function C(n,t){var e=n?i(n.children):[];return t?e.filter((function(n){return x(n,t)})):e}function L(n,t){return t?C(n,t)[0]:n.firstElementChild}var k=Object.keys;function P(n,t,e){if(n){var i=k(n);i=e?i.reverse():i;for(var o=0;o<i.length;o++){var r=i[o];if("__proto__"!==r&&!1===t(n[r],r))break}}return n}function A(n){return i(arguments,1).forEach((function(t){P(t,(function(e,i){n[i]=t[i]}))})),n}function D(n){return i(arguments,1).forEach((function(t){P(t,(function(t,e){l(t)?n[e]=t.slice():c(t)?n[e]=D({},c(n[e])?n[e]:{},t):n[e]=t}))})),n}function M(n,t){h(t||k(n)).forEach((function(t){delete n[t]}))}function z(n,t){m(n,(function(n){m(t,(function(t){n&&n.removeAttribute(t)}))}))}function O(n,t,e){c(t)?P(t,(function(t,e){O(n,e,t)})):m(n,(function(n){v(e)||""===e?z(n,t):n.setAttribute(t,String(e))}))}function N(n,t,e){var i=document.createElement(n);return t&&(d(t)?E(i,t):O(i,t)),e&&S(e,i),i}function I(n,t,e){if(p(e))return getComputedStyle(n)[t];v(e)||(n.style[t]=""+e)}function q(n,t){I(n,"display",t)}function T(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function F(n,t){return n.getAttribute(t)}function j(n,t){return n&&n.classList.contains(t)}function R(n){return n.getBoundingClientRect()}function W(n){m(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function H(n){return L((new DOMParser).parseFromString(n,"text/html").body)}function G(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function X(n,t){return n&&n.querySelector(t)}function B(n,t){return t?i(n.querySelectorAll(t)):[]}function Y(n,t){w(n,t,!1)}function U(n){return n.timeStamp}function K(n){return d(n)?n:n?n+"px":""}var J="splide";function $(n,t){if(!n)throw new Error("[splide] "+(t||""))}var Q=Math.min,V=Math.max,Z=Math.floor,nn=Math.ceil,tn=Math.abs;function en(n,t,e){return tn(n-t)<e}function on(n,t,e,i){var o=Q(t,e),r=V(t,e);return i?o<n&&n<r:o<=n&&n<=r}function rn(n,t,e){var i=Q(t,e),o=V(t,e);return Q(V(i,n),o)}function un(n){return+(n>0)-+(n<0)}function an(n,t){return m(t,(function(t){n=n.replace("%s",""+t)})),n}function sn(n){return n<10?"0"+n:""+n}var cn={};function ln(){var n=[];function t(n,t,e){m(n,(function(n){n&&m(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);u?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,a])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),e(n)}}}var fn="mounted",dn="ready",pn="move",vn="moved",gn="shifted",hn="click",mn="slide:keydown",yn="refresh",bn="updated",wn="resize",En="resized",Sn="scroll",_n="scrolled",xn="destroy",Cn="navigation:mounted",Ln="autoplay:play",kn="autoplay:pause",Pn="lazyload:loaded";function An(n){var t=n?n.event.bus:document.createDocumentFragment(),e=ln();return n&&n.event.on(xn,e.destroy),A(e,{bus:t,on:function(n,i){e.bind(t,h(n).join(" "),(function(n){i.apply(i,l(n.detail)?n.detail:[])}))},off:o(e.unbind,t),emit:function(n){e.dispatch(t,n,i(arguments,1))}})}function Dn(n,t,e,i){var o,r,u=Date.now,s=0,c=!0,l=0;function f(){if(!c){if(s=n?Q((u()-o)/n,1):1,e&&e(s),s>=1&&(t(),o=u(),i&&++l>=i))return d();a(f)}}function d(){c=!0}function p(){r&&cancelAnimationFrame(r),s=0,r=0,c=!0}return{start:function(t){!t&&p(),o=u()-(t?s*n:0),c=!1,a(f)},rewind:function(){o=u(),s=0,e&&e(s)},pause:d,cancel:p,set:function(t){n=t},isPaused:function(){return c}}}var Mn="ArrowLeft",zn="ArrowRight",On="ArrowUp",Nn="ArrowDown",In="ttb",qn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[On,zn],ArrowRight:[Nn,Mn]};var Tn="role",Fn="tabindex",jn="aria-controls",Rn="aria-current",Wn="aria-selected",Hn="aria-label",Gn="aria-labelledby",Xn="aria-hidden",Bn="aria-orientation",Yn="aria-roledescription",Un="aria-live",Kn="aria-busy",Jn="aria-atomic",$n=[Tn,Fn,"disabled",jn,Rn,Hn,Gn,Xn,Bn,Yn],Qn=J,Vn="splide__track",Zn="splide__slide",nt=Zn+"--clone",tt="splide__arrows",et="splide__arrow",it=et+"--prev",ot=et+"--next",rt="splide__pagination",ut="is-active",at="is-prev",st="is-next",ct="is-visible",lt="is-loading",ft="is-focus-in",dt=[ut,ct,at,st,lt,ft],pt={slide:Zn,clone:nt,arrows:tt,arrow:et,prev:it,next:ot,pagination:rt,page:"splide__pagination__page",spinner:"splide__spinner"},vt="touchmove mousemove",gt="touchend touchcancel mouseup click",ht="slide",mt="loop",yt="fade";var bt={passive:!1,capture:!0},wt={Spacebar:" ",Right:zn,Left:Mn,Up:On,Down:Nn};function Et(n){return n=d(n)?n:n.key,wt[n]||n}var St="keydown",_t="data-splide-lazy",xt="data-splide-lazy-srcset",Ct=[" ","Enter"],Lt=Object.freeze({__proto__:null,Media:function(n,e,i){var o=n.state,r=i.breakpoints||{},u=i.reducedMotion||{},a=ln(),s=[];function c(n){n&&a.destroy()}function l(n,t){var e=matchMedia(t);a.bind(e,"change",f),s.push([n,e])}function f(){var t=o.is(7),e=i.direction,r=s.reduce((function(n,t){return D(n,t[1].matches?t[0]:{})}),{});M(i),d(r),i.destroy?n.destroy("completely"===i.destroy):t?(c(!0),n.mount()):e!==i.direction&&n.refresh()}function d(t,e){D(i,t),e&&D(Object.getPrototypeOf(i),t),o.is(1)||n.emit(bn,i)}return{setup:function(){var n="min"===i.mediaQuery;k(r).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(r[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(u,t),f()},destroy:c,reduce:function(n){matchMedia(t).matches&&(n?D(i,u):M(i,k(u)))},set:d}},Direction:function(n,t,e){return{resolve:function(n,t,i){var o="rtl"!==(i=i||e.direction)||t?i===In?0:-1:1;return qn[n]&&qn[n][o]||n.replace(/width|left|right/i,(function(n,t){var e=qn[n.toLowerCase()][o]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,i){var o,r,u,a=An(n),s=a.on,c=a.bind,l=n.root,d=i.i18n,p={},v=[],g=[],h=[];function m(){var n,t,e;o=_("."+Vn),r=L(o,".splide__list"),$(o&&r,"A track/list element is missing."),b(v,C(r,".splide__slide:not(."+nt+")")),P({arrows:tt,pagination:rt,prev:it,next:ot,bar:"splide__progress__bar",toggle:"splide__toggle"},(function(n,t){p[t]=_("."+n)})),A(p,{root:l,track:o,list:r,slides:v}),t=l.id||""+(n=J)+sn(cn[n]=(cn[n]||0)+1),e=i.role,l.id=t,o.id=o.id||t+"-track",r.id=r.id||t+"-list",!F(l,Tn)&&"SECTION"!==l.tagName&&e&&O(l,Tn,e),O(l,Yn,d.carousel),O(r,Tn,"presentation"),S()}function y(n){var t=$n.concat("style");e(v),Y(l,g),Y(o,h),z([o,r],t),z(l,n?t:["style",Yn])}function S(){Y(l,g),Y(o,h),g=k(Qn),h=k(Vn),E(l,g),E(o,h),O(l,Hn,i.label),O(l,Gn,i.labelledby)}function _(n){var t=X(l,n);return t&&function(n,t){if(f(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!x(e,t);)e=e.parentElement;return e}(t,".splide")===l?t:void 0}function k(n){return[n+"--"+i.type,n+"--"+i.direction,i.drag&&n+"--draggable",i.isNavigation&&n+"--nav",n===Qn&&ut]}return A(p,{setup:m,mount:function(){s(yn,y),s(yn,m),s(bn,S),c(document,"touchstart mousedown keydown",(function(n){u="keydown"===n.type}),{capture:!0}),c(l,"focusin",(function(){w(l,ft,!!u)}))},destroy:y})},Slides:function(n,t,i){var r=An(n),u=r.on,a=r.emit,s=r.bind,c=t.Elements,l=c.slides,p=c.list,v=[];function b(){l.forEach((function(n,t){k(n,t,-1)}))}function C(){A((function(n){n.destroy()})),e(v)}function k(t,e,i){var r=function(n,t,e,i){var r,u=An(n),a=u.on,s=u.emit,c=u.bind,l=n.Components,f=n.root,d=n.options,p=d.isNavigation,v=d.updateOnMove,g=d.i18n,h=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=F(i,"style"),E=F(i,Hn),S=e>-1,_=L(i,".splide__slide__container");function x(){var o=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");O(i,Hn,an(g.slideX,(S?e:t)+1)),O(i,jn,o),O(i,Tn,m?"button":""),m&&z(i,Yn)}function C(){r||k()}function k(){if(!r){var e=n.index;(o=P())!==j(i,ut)&&(w(i,ut,o),O(i,Rn,p&&o||""),s(o?"active":"inactive",A)),function(){var t=function(){if(n.is(yt))return P();var t=R(l.Elements.track),e=R(i),o=y("left",!0),r=y("right",!0);return Z(t[o])<=nn(e[o])&&Z(e[r])<=nn(t[r])}(),e=!t&&(!P()||S);if(n.state.is([4,5])||O(i,Xn,e||""),O(B(i,d.focusableNodes||""),Fn,e?-1:""),m&&O(i,Fn,e?-1:0),t!==j(i,ct)&&(w(i,ct,t),s(t?"visible":"hidden",A)),!t&&document.activeElement===i){var o=l.Slides.getAt(n.index);o&&T(o.slide)}}(),w(i,at,t===e-1),w(i,st,t===e+1)}var o}function P(){var i=n.index;return i===t||d.cloneStatus&&i===e}var A={index:t,slideIndex:e,slide:i,container:_,isClone:S,mount:function(){S||(i.id=f.id+"-slide"+sn(t+1),O(i,Tn,h?"tabpanel":"group"),O(i,Yn,g.slide),O(i,Hn,E||an(g.slideLabel,[t+1,n.length]))),c(i,"click",o(s,hn,A)),c(i,"keydown",o(s,mn,A)),a([vn,gn,_n],k),a(Cn,x),v&&a(pn,C)},destroy:function(){r=!0,u.destroy(),Y(i,dt),z(i,$n),O(i,"style",b),O(i,Hn,E||"")},update:k,style:function(n,t,e){I(e&&_||i,n,t)},isWithin:function(e,i){var o=tn(e-t);return S||!d.rewind&&!n.is(mt)||(o=Q(o,n.length-o)),o<=i}};return A}(n,e,i,t);r.mount(),v.push(r),v.sort((function(n,t){return n.index-t.index}))}function P(n){return n?D((function(n){return!n.isClone})):v}function A(n,t){P(t).forEach(n)}function D(n){return v.filter(f(n)?n:function(t){return d(n)?x(t.slide,n):y(h(n),t.index)})}return{mount:function(){b(),u(yn,C),u(yn,b)},destroy:C,update:function(){A((function(n){n.update()}))},register:k,get:P,getIn:function(n){var e=t.Controller,o=e.toIndex(n),r=e.hasFocus()?1:i.perPage;return D((function(n){return on(n.index,o,o+r-1)}))},getAt:function(n){return D(n)[0]},add:function(n,t){m(n,(function(n){if(d(n)&&(n=H(n)),g(n)){var e=l[t];e?_(n,e):S(p,n),E(n,i.classes.slide),r=n,u=o(a,wn),c=B(r,"img"),(f=c.length)?c.forEach((function(n){s(n,"load error",(function(){--f||u()}))})):u()}var r,u,c,f})),a(yn)},remove:function(n){W(D(n).map((function(n){return n.slide}))),a(yn)},forEach:A,filter:D,style:function(n,t,e){A((function(i){i.style(n,t,e)}))},getLength:function(n){return n?l.length:v.length},isEnough:function(){return v.length>i.perPage}}},Layout:function(n,t,e){var i,r,u=An(n),a=u.on,s=u.bind,l=u.emit,f=t.Slides,d=t.Direction.resolve,p=t.Elements,v=p.root,g=p.track,h=p.list,m=f.getAt,y=f.style;function b(){r=null,i=e.direction===In,I(v,"maxWidth",K(e.width)),I(g,d("paddingLeft"),E(!1)),I(g,d("paddingRight"),E(!0)),w()}function w(){var n,t=R(v);r&&r.width===t.width&&r.height===t.height||(I(g,"height",(n="",i&&($(n=S(),"height or heightRatio is missing."),n="calc("+n+" - "+E(!1)+" - "+E(!0)+")"),n)),y(d("marginRight"),K(e.gap)),y("width",e.autoWidth?null:K(e.fixedWidth)||(i?"":_())),y("height",K(e.fixedHeight)||(i?e.autoHeight?null:_():S()),!0),r=t,l(En))}function E(n){var t=e.padding,i=d(n?"right":"left");return t&&K(t[i]||(c(t)?0:t))||"0px"}function S(){return K(e.height||R(h).width*e.heightRatio)}function _(){var n=K(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function x(n,t){var e=m(n);if(e){var i=R(e.slide)[d("right")],o=R(h)[d("left")];return tn(i-o)+(t?0:C())}return 0}function C(){var n=m(0);return n&&parseFloat(I(n.slide,d("marginRight")))||0}return{mount:function(){var n,t;b(),s(window,"resize load",(n=o(l,wn),function(){t||(t=Dn(0,(function(){n(),t=null}),null,1)).start()})),a([bn,yn],b),a(wn,w)},listSize:function(){return R(h)[d("width")]},slideSize:function(n,t){var e=m(n||0);return e?R(e.slide)[d("width")]+(t?0:C()):0},sliderSize:function(){return x(n.length-1,!0)-x(-1,!0)},totalSize:x,getPadding:function(n){return parseFloat(I(g,d("padding"+(n?"Right":"Left"))))||0}}},Clones:function(n,t,i){var o,r=An(n),u=r.on,a=r.emit,s=t.Elements,c=t.Slides,l=t.Direction.resolve,f=[];function d(){(o=g())&&(function(t){var e=c.get().slice(),o=e.length;if(o){for(;e.length<t;)b(e,e);b(e.slice(-t),e.slice(0,t)).forEach((function(r,u){var a=u<t,l=function(t,e){var o=t.cloneNode(!0);return E(o,i.classes.clone),o.id=n.root.id+"-clone"+sn(e+1),o}(r.slide,u);a?_(l,e[0].slide):S(s.list,l),b(f,l),c.register(l,u-t+(a?0:o),r.index)}))}}(o),a(wn))}function p(){W(f),e(f)}function v(){o<g()&&a(yn)}function g(){var e=i.clones;if(n.is(mt)){if(!e){var o=i[l("fixedWidth")]&&t.Layout.slideSize(0);e=o&&nn(R(s.track)[l("width")]/o)||i[l("autoWidth")]&&n.length||2*i.perPage}}else e=0;return e}return{mount:function(){d(),u(yn,p),u(yn,d),u([bn,wn],v)},destroy:p}},Move:function(n,t,e){var i,o=An(n),r=o.on,u=o.emit,a=n.state.set,s=t.Layout,c=s.slideSize,l=s.getPadding,f=s.totalSize,d=s.listSize,v=s.sliderSize,g=t.Direction,h=g.resolve,m=g.orient,y=t.Elements,b=y.list,w=y.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),S(n.index),t.Slides.update())}function S(n){_(k(n,!0))}function _(e,i){if(!n.is(yt)){var o=i?e:function(e){if(n.is(mt)){var i=L(e),o=i>t.Controller.getEnd();(i<0||o)&&(e=x(e,o))}return e}(e);I(b,"transform","translate"+h("X")+"("+o+"px)"),e!==o&&u(gn)}}function x(n,t){var e=n-A(t),i=v();return n-m(i*(nn(tn(e)/i)||1))*(t?1:-1)}function C(){_(P()),i.cancel()}function L(n){for(var e=t.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var u=e[r].index,a=tn(k(u,!0)-n);if(!(a<=o))break;o=a,i=u}return i}function k(t,i){var o=m(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-c(n,!0))/2:+t*c(n)||0}(t));return i?function(t){return e.trimSpace&&n.is(ht)&&(t=rn(t,0,m(v()-d()))),t}(o):o}function P(){var n=h("left");return R(b)[n]-R(w)[n]+m(l(!1))}function A(n){return k(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,r([fn,En,bn,yn],E)},move:function(n,t,e,o){var r,s;n!==t&&(r=n>e,s=m(x(P(),r)),r?s>=0:s<=b[h("scrollWidth")]-R(w)[h("width")])&&(C(),_(x(P(),n>e),!0)),a(4),u(pn,t,e,n),i.start(t,(function(){a(3),u(vn,t,e,n),o&&o()}))},jump:S,translate:_,shift:x,cancel:C,toIndex:L,toPosition:k,getPosition:P,getLimit:A,exceededLimit:function(n,t){t=p(t)?P():t;var e=!0!==n&&m(t)<m(A(!1)),i=!1!==n&&m(t)>m(A(!0));return e||i},reposition:E}},Controller:function(n,t,e){var i,r,u,a=An(n).on,s=t.Move,c=s.getPosition,l=s.getLimit,f=s.toPosition,v=t.Slides,g=v.isEnough,h=v.getLength,m=n.is(mt),y=n.is(ht),b=o(x,!1),w=o(x,!0),E=e.start||0,S=E;function _(){i=h(!0),r=e.perMove,u=e.perPage;var n=rn(E,0,i-1);n!==E&&(E=n,s.reposition())}function x(n,t){var e=r||(M()?1:u),i=C(E+e*(n?-1:1),E,!(r||M()));return-1===i&&y&&!en(c(),l(!n),1)?n?0:k():t?i:L(i)}function C(t,o,a){if(g()||M()){var s=k(),l=function(t){if(y&&"move"===e.trimSpace&&t!==E)for(var i=c();i===f(t,!0)&&on(t,0,n.length-1,!e.rewind);)t<E?--t:++t;return t}(t);l!==t&&(o=t,t=l,a=!1),t<0||t>s?t=r||!on(0,t,o,!0)&&!on(s,o,t,!0)?m?a?t<0?-(i%u||u):i:t:e.rewind?t<0?s:0:-1:P(A(t)):a&&t!==o&&(t=P(A(o)+(t<o?-1:1)))}else t=-1;return t}function L(n){return m?(n+i)%i||0:n}function k(){return V(i-(M()||m&&r?1:u),0)}function P(n){return rn(M()?n:u*n,0,k())}function A(n){return M()?n:Z((n>=k()?i-1:n)/u)}function D(n){n!==E&&(S=E,E=n)}function M(){return!p(e.focus)||e.isNavigation}function z(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){_(),a([bn,yn],_)},go:function(n,t,e){if(!z()){var i=function(n){var t=E;if(d(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],i=e[1],o=e[2];"+"===i||"-"===i?t=C(E+ +(""+i+(+o||1)),E):">"===i?t=o?P(+o):b(!0):"<"===i&&(t=w(!0))}else t=m?n:rn(n,0,k());return t}(n),o=L(i);o>-1&&(t||o!==E)&&(D(o),s.move(i,o,S,e))}},scroll:function(n,e,i,o){t.Scroll.scroll(n,e,i,(function(){D(L(s.toIndex(c()))),o&&o()}))},getNext:b,getPrev:w,getAdjacent:x,getEnd:k,setIndex:D,getIndex:function(n){return n?S:E},toIndex:P,toPage:A,toDest:function(n){var t=s.toIndex(n);return y?rn(t,0,k()):t},hasFocus:M,isBusy:z}},Arrows:function(n,t,e){var i,r,u=An(n),a=u.on,s=u.bind,c=u.emit,l=e.classes,f=e.i18n,d=t.Elements,p=t.Controller,v=d.arrows,g=d.track,h=v,m=d.prev,y=d.next,b={};function w(){var n;!(n=e.arrows)||m&&y||(h=v||N("div",l.arrows),m=k(!0),y=k(!1),i=!0,S(h,[m,y]),!v&&_(h,g)),m&&y&&(A(b,{prev:m,next:y}),q(h,n?"":"none"),E(h,r=tt+"--"+e.direction),n&&(a([vn,yn,_n],P),s(y,"click",o(L,">")),s(m,"click",o(L,"<")),P(),O([m,y],jn,g.id),c("arrows:mounted",m,y))),a(bn,x)}function x(){C(),w()}function C(){u.destroy(),Y(h,r),i?(W(v?[m,y]:h),m=y=null):z([m,y],$n)}function L(n){p.go(n,!0)}function k(n){return H('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){var t=n.index,e=p.getPrev(),i=p.getNext(),o=e>-1&&t<e?f.last:f.prev,r=i>-1&&t>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,O(m,Hn,o),O(y,Hn,r),c("arrows:updated",m,y,e,i)}return{arrows:b,mount:w,destroy:C}},Autoplay:function(n,t,e){var i,o,r=An(n),u=r.on,a=r.bind,s=r.emit,c=Dn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&I(t,"width",100*n+"%"),s("autoplay:playing",n)})),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,v=d.toggle,g=e.autoplay,h="pause"===g;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),o=i=h=!1,E(),s(Ln))}function y(n){void 0===n&&(n=!0),h=!!n,E(),l()||(c.pause(),s(kn))}function b(){h||(i||o?y(!1):m())}function E(){v&&(w(v,ut,!h),O(v,Hn,e.i18n[h?"play":"pause"]))}function S(n){var i=t.Slides.getAt(n);c.set(i&&+F(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){g&&(e.pauseOnHover&&a(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()})),e.pauseOnFocus&&a(p,"focusin focusout",(function(n){o="focusin"===n.type,b()})),v&&a(v,"click",(function(){h?m():y(!0)})),u([pn,Sn,yn],c.rewind),u(pn,S),v&&O(v,jn,f.track.id),h||m(),E())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=An(n).on;function r(n){t.Slides.forEach((function(t){var e=L(t.container||t.slide,"img");e&&e.src&&u(n,e,t)}))}function u(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),q(t,n?"none":"")}return{mount:function(){e.cover&&(i(Pn,o(u,!0)),i([fn,bn,yn],o(r,!0)))},destroy:o(r,!1)}},Scroll:function(n,t,e){var i,r,u=An(n),a=u.on,s=u.emit,c=n.state.set,l=t.Move,f=l.getPosition,d=l.getLimit,p=l.exceededLimit,v=l.translate,g=1;function h(n,e,u,a,d){var p=f();if(b(),u){var v=t.Layout.sliderSize(),h=un(n)*v*Z(tn(n)/v)||0;n=l.toPosition(t.Controller.toDest(n%v))+h}var w=en(p,n,1);g=1,e=w?0:e||V(tn(n-p)/1.5,800),r=a,i=Dn(e,m,o(y,p,n,d),1),c(5),s(Sn),i.start()}function m(){c(3),r&&r(),s(_n)}function y(t,i,o,u){var a,s,c=f(),l=(t+(i-t)*(a=u,(s=e.easingFunc)?s(a):1-Math.pow(1-a,4))-c)*g;v(c+l),n.is(ht)&&!o&&p()&&(g*=.6,tn(l)<10&&h(d(p(!0)),600,!1,r,!0))}function b(){i&&i.cancel()}function w(){i&&!i.isPaused()&&(b(),m())}return{mount:function(){a(pn,b),a([bn,yn],w)},destroy:b,scroll:h,cancel:w}},Drag:function(n,t,e){var i,o,r,a,s,l,f,d,p=An(n),v=p.on,g=p.emit,h=p.bind,m=p.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,S=t.Elements.track,_=t.Media.reduce,C=t.Direction,L=C.resolve,k=C.orient,P=b.getPosition,A=b.exceededLimit,D=!1;function M(){var n=e.drag;H(!n),a="free"===n}function z(n){if(l=!1,!f){var t=W(n);i=n.target,o=e.noDrag,x(i,".splide__pagination__page, ."+et)||o&&x(i,o)||!t&&n.button||(E.isBusy()?G(n,!0):(d=t?S:window,s=y.is([4,5]),r=null,h(d,vt,O,bt),h(d,gt,N,bt),b.cancel(),w.cancel(),q(n)))}var i,o}function O(t){if(y.is(6)||(y.set(6),g("drag")),t.cancelable)if(s){b.translate(i+T(t)/(D&&n.is(ht)?5:1));var o=F(t)>200,r=D!==(D=A());(o||r)&&q(t),l=!0,g("dragging"),G(t)}else(function(n){return tn(T(n))>tn(T(n,!0))})(t)&&(s=function(n){var t=e.dragMinThreshold,i=c(t),o=i&&t.mouse||0,r=(i?t.touch:+t)||10;return tn(T(n))>(W(n)?r:o)}(t),G(t))}function N(i){y.is(6)&&(y.set(3),g("dragged")),s&&(function(i){var o=function(t){if(n.is(mt)||!D){var e=F(t);if(e&&e<200)return T(t)/e}return 0}(i),r=function(n){return P()+un(n)*Q(tn(n)*(e.flickPower||600),a?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(o),u=e.rewind&&e.rewindByDrag;_(!1),a?E.scroll(r,0,e.snap):n.is(yt)?E.go(k(un(o))<0?u?"<":"-":u?">":"+"):n.is(ht)&&D&&u?E.go(A(!0)?">":"<"):E.go(E.toDest(r),!0),_(!0)}(i),G(i)),m(d,vt,O),m(d,gt,N),s=!1}function I(n){!f&&l&&G(n,!0)}function q(n){r=o,o=n,i=P()}function T(n,t){return R(n,t)-R(j(n),t)}function F(n){return U(n)-U(j(n))}function j(n){return o===n&&r||o}function R(n,t){return(W(n)?n.changedTouches[0]:n)["page"+L(t?"Y":"X")]}function W(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function H(n){f=n}return{mount:function(){h(S,vt,u,bt),h(S,gt,u,bt),h(S,"touchstart mousedown",z,bt),h(S,"click",I,{capture:!0}),h(S,"dragstart",G),v([fn,bn],M)},disable:H,isDragging:function(){return s}}},Keyboard:function(n,t,e){var i,o,u=An(n),a=u.on,s=u.bind,c=u.unbind,l=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:l,s(i,St,g))}function p(){c(i,St)}function v(){var n=o;o=!0,r((function(){o=n}))}function g(t){if(!o){var e=Et(t);e===f(Mn)?n.go("<"):e===f(zn)&&n.go(">")}}return{mount:function(){d(),a(bn,p),a(bn,d),a(pn,v)},destroy:p,disable:function(n){o=n}}},LazyLoad:function(n,t,i){var r=An(n),u=r.on,a=r.off,s=r.bind,c=r.emit,l="sequential"===i.lazyLoad,f=[vn,_n],d=[];function p(){e(d),t.Slides.forEach((function(n){B(n.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(t){var e=F(t,_t),o=F(t,xt);if(e!==t.src||o!==t.srcset){var r=i.classes.spinner,u=t.parentElement,a=L(u,"."+r)||N("span",r,u);d.push([t,n,a]),t.src||q(t,"none")}}))})),l?m():(a(f),u(f,v),v())}function v(){(d=d.filter((function(t){var e=i.perPage*((i.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,e)||g(t)}))).length||a(f)}function g(n){var t=n[0];E(n[1].slide,lt),s(t,"load error",o(h,n)),O(t,"src",F(t,_t)),O(t,"srcset",F(t,xt)),z(t,_t),z(t,xt)}function h(n,t){var e=n[0],i=n[1];Y(i.slide,lt),"error"!==t.type&&(W(n[2]),q(e,""),c(Pn,e,i),c(wn)),l&&m()}function m(){d.length&&g(d.shift())}return{mount:function(){i.lazyLoad&&(p(),u(yn,p))},destroy:o(e,d),check:v}},Pagination:function(n,t,r){var u,a,s=An(n),c=s.on,l=s.emit,f=s.bind,d=t.Slides,p=t.Elements,v=t.Controller,g=v.hasFocus,h=v.getIndex,m=v.go,y=t.Direction.resolve,b=p.pagination,w=[];function S(){u&&(W(b?i(u.children):u),Y(u,a),e(w),u=null),s.destroy()}function _(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=Et(t),o=C(),r=-1;i===y(zn,!1,o)?r=++n%e:i===y(Mn,!1,o)?r=(--n+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var u=w[r];u&&(T(u.button),m(">"+r),G(t,!0))}function C(){return r.paginationDirection||r.direction}function L(n){return w[v.toPage(n)]}function k(){var n=L(h(!0)),t=L(h());if(n){var e=n.button;Y(e,ut),z(e,Wn),O(e,Fn,-1)}if(t){var i=t.button;E(i,ut),O(i,Wn,!0),O(i,Fn,"")}l("pagination:updated",{list:u,items:w},n,t)}return{items:w,mount:function t(){S(),c([bn,yn],t);var e=r.pagination&&d.isEnough();b&&q(b,e?"":"none"),e&&(c([pn,Sn,_n],k),function(){var t=n.length,e=r.classes,i=r.i18n,s=r.perPage,c=g()?t:nn(t/s);E(u=b||N("ul",e.pagination,p.track.parentElement),a=rt+"--"+C()),O(u,Tn,"tablist"),O(u,Hn,i.select),O(u,Bn,C()===In?"vertical":"");for(var l=0;l<c;l++){var v=N("li",null,u),h=N("button",{class:e.page,type:"button"},v),m=d.getIn(l).map((function(n){return n.slide.id})),y=!g()&&s>1?i.pageX:i.slideX;f(h,"click",o(_,l)),r.paginationKeyboard&&f(h,"keydown",o(x,l)),O(v,Tn,"presentation"),O(h,Tn,"tab"),O(h,jn,m.join(" ")),O(h,Hn,an(y,l+1)),O(h,Fn,-1),w.push({li:v,button:h,page:l})}}(),k(),l("pagination:mounted",{list:u,items:w},L(n.index)))},destroy:S,getAt:L,update:k}},Sync:function(n,t,i){var o=i.isNavigation,r=i.slideFocus,u=[];function a(){var t,e;n.splides.forEach((function(t){t.isParent||(c(n,t.splide),c(t.splide,n))})),o&&((e=(t=An(n)).on)(hn,f),e(mn,d),e([fn,bn],l),u.push(t),t.emit(Cn,n.splides))}function s(){u.forEach((function(n){n.destroy()})),e(u)}function c(n,t){var e=An(n);e.on(pn,(function(n,e,i){t.go(t.is(mt)?i:n)})),u.push(e)}function l(){O(t.Elements.list,Bn,i.direction===In?"vertical":"")}function f(t){n.go(t.index)}function d(n,t){y(Ct,Et(t))&&(f(n),G(t))}return{setup:function(){n.options={slideFocus:p(r)?o:r}},mount:a,destroy:s,remount:function(){s(),a()}}},Wheel:function(n,t,e){var i=An(n).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,u=r<0,a=U(i),s=e.wheelMinThreshold||0,c=e.wheelSleep||0;tn(r)>s&&a-o>c&&(n.go(u?"<":">"),o=a),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(u)&&G(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",r,bt)}}},Live:function(n,t,e){var i=An(n).on,r=t.Elements.track,u=e.live&&!e.isNavigation,a=N("span","splide__sr"),s=Dn(90,o(c,!1));function c(n){O(r,Kn,n),n?(S(r,a),s.start()):W(a)}function l(n){u&&O(r,Un,n?"off":"polite")}return{mount:function(){u&&(l(!t.Autoplay.isPaused()),O(r,Jn,!0),a.textContent="…",i(Ln,o(l,!0)),i(kn,o(l,!1)),i([vn,_n],o(c,!0)))},disable:l,destroy:function(){z(r,[Un,Jn,Kn]),W(a)}}}}),kt={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:pt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Pt(n,t,e){var i=An(n).on;return{mount:function(){i([fn,yn],(function(){r((function(){t.Slides.style("transition","opacity "+e.speed+"ms "+e.easing)}))}))},start:function(n,e){var i=t.Elements.track;I(i,"height",K(R(i).height)),r((function(){e(),I(i,"height","")}))},cancel:u}}function At(n,t,e){var i,r=An(n).bind,u=t.Move,a=t.Controller,s=t.Scroll,c=t.Elements.list,l=o(I,c,"transition");function f(){l(""),s.cancel()}return{mount:function(){r(c,"transitionend",(function(n){n.target===c&&i&&(f(),i())}))},start:function(t,o){var r=u.toPosition(t,!0),c=u.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(ht)&&i){var o=a.getIndex(!0),r=a.getEnd();if(0===o&&t>=r||o>=r&&0===t)return i}return e.speed}(t);tn(r-c)>=1&&f>=1?e.useScroll?s.scroll(r,f,!1,o):(l("transform "+f+"ms "+e.easing),u.translate(r,!0),i=o):(u.jump(t),o())},cancel:f}}var Dt=function(){function t(n,e){var i;this.event=An(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return y(h(n),i)}}),this.splides=[],this._o={},this._E={};var o=d(n)?X(document,n):n;$(o,o+" is invalid."),this.root=o,e=D({label:F(o,Hn)||"",labelledby:F(o,Gn)||""},kt,t.defaults,e||{});try{D(e,JSON.parse(F(o,"data-splide")))}catch(n){$(!1,"Invalid JSON")}this._o=Object.create(D({},e))}var o,r,u=t.prototype;return u.mount=function(n,t){var e=this,i=this.state,o=this.Components;return $(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=t||this._T||(this.is(yt)?Pt:At),this._E=n||this._E,P(A({},Lt,this._E,{Transition:this._T}),(function(n,t){var i=n(e,o,e._o);o[t]=i,i.setup&&i.setup()})),P(o,(function(n){n.mount&&n.mount()})),this.emit(fn),E(this.root,"is-initialized"),i.set(3),this.emit(dn),this},u.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},u.go=function(n){return this._C.Controller.go(n),this},u.on=function(n,t){return this.event.on(n,t),this},u.off=function(n){return this.event.off(n),this},u.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(i(arguments,1))),this},u.add=function(n,t){return this._C.Slides.add(n,t),this},u.remove=function(n){return this._C.Slides.remove(n),this},u.is=function(n){return this._o.type===n},u.refresh=function(){return this.emit(yn),this},u.destroy=function(n){void 0===n&&(n=!0);var t=this.event,i=this.state;return i.is(1)?An(this).on(dn,this.destroy.bind(this,n)):(P(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(xn),t.destroy(),n&&e(this.splides),i.set(7)),this},o=t,(r=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&n(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),t}();function Mt(n,t,e){return Array.prototype.slice.call(n,t,e)}function zt(n){return n.bind.apply(n,[null].concat(Mt(arguments,1)))}function Ot(n){return requestAnimationFrame(n)}function Nt(n,t){return typeof t===n}Dt.defaults={},Dt.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};var It=Array.isArray;function qt(n){return It(n)?n:[n]}function Tt(n,t){qt(n).forEach(t)}zt(Nt,"function"),zt(Nt,"string"),zt(Nt,"undefined");var Ft=Object.keys;function jt(n,t,e){if(n){var i=Ft(n);i=e?i.reverse():i;for(var o=0;o<i.length;o++){var r=i[o];if("__proto__"!==r&&!1===t(n[r],r))break}}return n}var Rt=Math.min,Wt="move",Ht="moved",Gt="drag",Xt="scroll",Bt="scrolled";function Yt(n,t,e,i){var o,r,u=Date.now,a=0,s=!0,c=0;function l(){if(!s){if(a=n?Rt((u()-o)/n,1):1,e&&e(a),a>=1&&(t(),o=u(),i&&++c>=i))return f();Ot(l)}}function f(){s=!0}function d(){r&&cancelAnimationFrame(r),a=0,r=0,s=!0}return{start:function(t){!t&&d(),o=u()-(t?a*n:0),s=!1,Ot(l)},rewind:function(){o=u(),a=0,e&&e(a)},pause:f,cancel:d,set:function(t){n=t},isPaused:function(){return s}}}function Ut(n,t,e){return Array.prototype.slice.call(n,t,e)}function Kt(n){return n.bind(null,...Ut(arguments,1))}function Jt(n,t){return typeof t===n}function $t(n){return!Zt(n)&&Jt("object",n)}const Qt=Array.isArray;Kt(Jt,"function"),Kt(Jt,"string");const Vt=Kt(Jt,"undefined");function Zt(n){return null===n}function ne(n,t){var e;(e=n,Qt(e)?e:[e]).forEach(t)}const te=Object.keys;function ee(n,t,e){if(n){let i=te(n);i=e?i.reverse():i;for(let e=0;e<i.length;e++){const o=i[e];if("__proto__"!==o&&!1===t(n[o],o))break}}return n}function ie(n){return Ut(arguments,1).forEach((t=>{ee(t,((e,i)=>{n[i]=t[i]}))})),n}function oe(n,t,e){$t(t)?ee(t,((t,e)=>{oe(n,e,t)})):ne(n,(n=>{Zt(e)||""===e?function(n,t){ne(n,(n=>{ne(t,(t=>{n&&n.removeAttribute(t)}))}))}(n,t):n.setAttribute(t,String(e))}))}const{min:re,max:ue,floor:ae,ceil:se,abs:ce}=Math,le={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},fe={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function de(n,t,e){const{on:i,off:o,bind:r,unbind:u}=function(n){var t=n?n.event.bus:document.createDocumentFragment(),e=function(){var n=[];function t(n,t,e){Tt(n,(function(n){n&&Tt(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);u?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,a])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),n.length=0}}}();return n&&n.event.on("destroy",e.destroy),function(n){return Mt(arguments,1).forEach((function(t){jt(t,(function(e,i){n[i]=t[i]}))})),n}(e,{bus:t,on:function(n,i){e.bind(t,qt(n).join(" "),(function(n){i.apply(i,It(n.detail)?n.detail:[])}))},off:zt(e.unbind,t),emit:function(n){e.dispatch(t,n,Mt(arguments,1))}})}(n),{translate:a,getPosition:s,toIndex:c,getLimit:l}=t.Move,{setIndex:f,getIndex:d}=t.Controller,{orient:p}=t.Direction,{toggle:v}=t.Elements,{Live:g}=t,{root:h}=n,m=function(n,t){var e;return function(){e||(e=Yt(500,(function(){n(),e=null}),null,1)).start()}}(t.Arrows.update);let y,b,w,E,S,_,x={};function C(){n.is("fade")||y||!1===e.autoScroll||(y=Yt(0,M),x.pauseOnHover&&r(h,"mouseenter mouseleave",(n=>{w="mouseenter"===n.type,D()})),x.pauseOnFocus&&r(h,"focusin focusout",(n=>{E="focusin"===n.type,D()})),x.useToggleButton&&r(v,"click",(()=>{b?P():A()})),i("updated",k),i([Wt,Gt,Xt],(()=>{S=!0,A(!1)})),i([Ht,"dragged",Bt],(()=>{S=!1,D()})),x.autoStart&&("complete"===document.readyState?P():r(window,"load",P)))}function L(){y&&(y.cancel(),y=null,_=void 0,o([Wt,Gt,Xt,Ht,Bt]),u(h,"mouseenter mouseleave focusin focusout"),u(v,"click"))}function k(){const{autoScroll:n}=e;!1!==n?(x=ie({},x,$t(n)?n:{}),C()):L(),y&&!Vt(_)&&a(_)}function P(){O()&&(y.start(!0),g.disable(!0),E=w=b=!1,z())}function A(n=!0){b||(b=n,z(),O()||(y.pause(),g.disable(!1)))}function D(){b||(w||E||S?A(!1):P())}function M(){const i=s(),o=function(t){const e=x.speed||1;return t+=p(e),n.is("slide")&&(t=function(n,t,e){const i=re(t,e),o=ue(t,e);return re(ue(i,n),o)}(t,l(!1),l(!0))),t}(i);i!==o?(a(o),function(i){const{length:o}=n,r=(c(i)+o)%o;r!==d()&&(f(r),t.Slides.update(),t.Pagination.update(),"nearby"===e.lazyLoad&&t.LazyLoad.check())}(_=s())):(A(!1),x.rewind&&n.go(x.speed>0?0:t.Controller.getEnd())),m()}function z(){if(v){const i=b?"startScroll":"pauseScroll";"is-active",t=!b,(n=v)&&ne("is-active",(e=>{e&&n.classList[t?"add":"remove"](e)})),oe(v,"aria-label",e.i18n[i]||fe[i])}var n,t}function O(){return!y||y.isPaused()}return{setup:function(){const{autoScroll:n}=e;x=ie({},le,$t(n)?n:{})},mount:C,destroy:L,play:P,pause:A,isPaused:O}}document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector(".header-banner_close-btn"),t=document.querySelector(".header-banner"),e=document.querySelector(".container-fluid"),i=document.querySelector(".frequently-questions-block");n.addEventListener("click",(()=>{e.style.transform=`translateY(-${window.getComputedStyle(t,null).height})`,setTimeout((()=>{e.style.transitionDuration="0s",t.parentElement.removeChild(t),e.style.transform="translateY(0)"}),500)})),i.addEventListener("click",(n=>{const t=n.target.parentNode.parentNode;n.target.classList.contains("int-part_question_question-head_toogle-btn")&&(n.target.classList.toggle("active"),t.querySelector(".int-part_question_question-answer").style.maxHeight=0===t.querySelector(".int-part_question_question-answer").offsetHeight?`${t.querySelector(".int-part_question_question-answer_inner").offsetHeight}px`:"0px")}));const o=new Dt(".splide-introducion",{type:"loop",drag:"free",autoWidth:!0,pagination:!1,arrows:!1}),r=new Dt(".decoration-slider",{type:"loop",drag:"free",autoWidth:!0,pagination:!1,arrows:!1,autoScroll:{speed:1}});o.mount(),r.mount({AutoScroll:de})}))})();