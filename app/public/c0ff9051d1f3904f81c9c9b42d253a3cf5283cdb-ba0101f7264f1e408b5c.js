(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+oPb":function(e,n,t){"use strict";t("OGtf")("blink",(function(e){return function(){return e(this,"blink","","")}}))},"8Z9I":function(e,n,t){t("XfO3"),t("HEwt"),t("+oPb"),t("pIFo"),t("Oyvg"),t("rGqo"),t("yt8O"),t("f3/d"),t("rE2o"),t("ioFf"),t("Z2Ku"),t("FLlr"),t("VRzm"),t("Btvt"),t("91GP"),e.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}return t.m=e,t.c=n,t.p="",t(0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(1),i=p(a),u=p(t(2)),l=p(t(10)),s=p(t(12)),c=p(t(13)),f=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(14));function p(e){return e&&e.__esModule?e:{default:e}}var d=["🔙","⏰"],y=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={textLines:[],isDone:!1},t.onTypingDone=function(){t.mounted&&(t.setState({isDone:!0}),t.props.onTypingDone())},t.delayGenerator=function(e,n,r,o){var a=t.props.avgTypingDelay,i=t.props.stdTypingDelay;return t.props.delayGenerator(a,i,{line:e,lineIdx:n,character:r,charIdx:o,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return f.gaussianRnd(e,n)}})},t.typeLine=function(e,n){if(!t.mounted)return Promise.resolve();var r=e,o=t.props.onLineTyped;return f.isBackspaceElement(e)?(e.props.delay>0&&(t.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):f.isDelayElement(e)&&(t.introducedDelay=e.props.ms,r="⏰"),new Promise((function(e,a){t.setState({textLines:t.state.textLines.concat([""])},(function(){f.eachPromise(r,t.typeCharacter,r,n).then((function(){return o(r,n)})).then(e).catch(a)}))}))},t.typeCharacter=function(e,n,r,o){if(!t.mounted)return Promise.resolve();var a=t.props.onCharacterTyped;return new Promise((function(i){var u=t.state.textLines.slice();f.sleep(t.introducedDelay).then((function(){t.introducedDelay=null;var l="🔙"===e;if("⏰"===e)i();else{if(l&&o>0){for(var s=o-1,c=u[s],f=s;f>=0&&(!(c.length>0)||d.includes(c[0]));f--)c=u[s=f];u[s]=c.substr(0,c.length-1)}else u[o]+=e;t.setState({textLines:u},(function(){var u=t.delayGenerator(r,o,e,n);a(e,n),setTimeout(i,u)}))}}))}))},t.mounted=!1,t.linesToType=[],t.introducedDelay=null,e.children&&(t.linesToType=f.extractTextFromElement(e.children)),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,n=e.children,t=e.startDelay;n?t>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),t):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,n){if(n.textLines.length!==this.state.textLines.length)return!0;for(var t=0;t<n.textLines.length;t++){if(this.state.textLines[t]!==n.textLines[t])return!0}return this.state.isDone!==n.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return f.eachPromise(n,this.typeLine).then((function(){return e.onTypingDone()}))}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.cursor,o=this.state.isDone,a=f.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return i.default.createElement("div",{className:"Typist "+n},a,i.default.createElement(l.default,r({isDone:o},t)))}}]),n}(a.Component);y.propTypes={children:u.default.node,className:u.default.string,avgTypingDelay:u.default.number,stdTypingDelay:u.default.number,startDelay:u.default.number,cursor:u.default.object,onCharacterTyped:u.default.func,onLineTyped:u.default.func,onTypingDone:u.default.func,delayGenerator:u.default.func},y.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:f.gaussianRnd},n.default=y,y.Backspace=s.default,y.Delay=c.default},function(e,n){e.exports=t("q1tI")},function(e,n,t){e.exports=t(9)()},function(e,n,t){"use strict";var r=t(4),o=t(5),a=t(6),i=t(7),u=t(8);e.exports=function(e,n){var t="function"==typeof Symbol&&Symbol.iterator;var l={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:f(r.thatReturnsNull),arrayOf:function(e){return f((function(n,t,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=n[t];if(!Array.isArray(u))return new c("Invalid "+o+" `"+a+"` of type `"+y(u)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<u.length;l++){var s=e(u,l,r,o,a+"["+l+"]",i);if(s instanceof Error)return s}return null}))},element:f((function(n,t,r,o,a){var i=n[t];return e(i)?null:new c("Invalid "+o+" `"+a+"` of type `"+y(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return f((function(n,t,r,o,a){if(!(n[t]instanceof e)){var i=e.name||"<<anonymous>>";return new c("Invalid "+o+" `"+a+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(n[t])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}))},node:f((function(e,n,t,r,o){return d(e[n])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(n,t,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=n[t],l=y(u);if("object"!==l)return new c("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(u.hasOwnProperty(s)){var f=e(u,s,r,o,a+"."+s,i);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return f((function(n,t,r,o,a){for(var i=n[t],u=0;u<e.length;u++)if(s(i,e[u]))return null;return new c("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var n=0;n<e.length;n++){var t=e[n];if("function"!=typeof t)return a(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",h(t),n),r.thatReturnsNull}return f((function(n,t,r,o,a){for(var u=0;u<e.length;u++){if(null==(0,e[u])(n,t,r,o,a,i))return null}return new c("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return f((function(n,t,r,o,a){var u=n[t],l=y(u);if("object"!==l)return new c("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(u,s,r,o,a+"."+s,i);if(p)return p}}return null}))}};function s(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function c(e){this.message=e,this.stack=""}function f(e){function t(t,r,a,u,l,s,f){(u=u||"<<anonymous>>",s=s||a,f!==i)&&(n&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[a]?t?null===r[a]?new c("The "+l+" `"+s+"` is marked as required in `"+u+"`, but its value is `null`."):new c("The "+l+" `"+s+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(r,a,u,l,s)}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r}function p(e){return f((function(n,t,r,o,a,i){var u=n[t];return y(u)!==e?new c("Invalid "+o+" `"+a+"` of type `"+m(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function d(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(d);if(null===n||e(n))return!0;var r=function(e){var n=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!r)return!1;var o,a=r.call(n);if(r!==n.entries){for(;!(o=a.next()).done;)if(!d(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!d(i[1]))return!1}return!0;default:return!1}}function y(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function m(e){if(null==e)return""+e;var n=y(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function h(e){var n=m(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return c.prototype=Error.prototype,l.checkPropTypes=u,l.PropTypes=l,l}},function(e,n){"use strict";function t(e){return function(){return e}}var r=function(){};r.thatReturns=t,r.thatReturnsFalse=t(!1),r.thatReturnsTrue=t(!0),r.thatReturnsNull=t(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,n){"use strict";e.exports=function(e,n,t,r,o,a,i,u){if(!e){var l;if(void 0===n)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,r,o,a,i,u],c=0;(l=new Error(n.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,n,t){"use strict";var r=t(4);e.exports=r},function(e,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){"use strict";e.exports=function(e,n,t,r,o){}},function(e,n,t){"use strict";var r=t(4),o=t(5),a=t(7);e.exports=function(){function e(e,n,t,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n};return t.checkPropTypes=r,t.PropTypes=t,t}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=t(1),a=u(o),i=u(t(2));function u(e){return e&&e.__esModule?e:{default:e}}t(11);var l=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._isReRenderingCursor=!1,t.state={shouldRender:t.props.show},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout((function(){return n.setState({shouldRender:!1})}),this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,n=e.show,t=e.isDone;n&&(t||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},(function(){e.setState({shouldRender:!0},(function(){e._isReRenderingCursor=!1}))}))}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return a.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),n}(o.Component);l.propTypes={blink:i.default.bool,show:i.default.bool,element:i.default.node,hideWhenDone:i.default.bool,hideWhenDoneDelay:i.default.number,isDone:i.default.bool},l.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},n.default=l},function(e,n){},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=a(t(1)),o=a(t(2));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("noscript",null)};i.componentName="Backspace",i.propTypes={count:o.default.number,delay:o.default.number},i.defaultProps={count:1,delay:0},n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=a(t(1)),o=a(t(2));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("noscript",null)};i.componentName="Delay",i.propTypes={ms:o.default.number.isRequired},n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sleep=void 0;var r=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.gaussianRnd=function(e,n){for(var t=0,r=0;r<12;r++)t+=Math.random();return t-=6,Math.round(t*n)+e},n.eachPromise=function(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];var a=function(e,t,o){return e.then((function(){return n.apply(void 0,[t,o].concat(r))}))};return Array.from(e).reduce(a,Promise.resolve())},n.exclude=u,n.isBackspaceElement=l,n.isDelayElement=s,n.extractTextFromElement=function(e){var n=e?[e]:[],t=[];for(;n.length>0;){var r=n.pop();if(i.default.isValidElement(r))l(r)||s(r)?t.unshift(r):i.default.Children.forEach(r.props.children,(function(e){n.push(e)}));else if(Array.isArray(r)){var o=!0,a=!1,u=void 0;try{for(var c,f=r[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var p=c.value;n.push(p)}}catch(d){a=!0,u=d}finally{try{!o&&f.return&&f.return()}finally{if(a)throw u}}}else t.unshift(r)}return t},n.cloneElement=c,n.cloneElementWithSpecifiedText=function(e){var n=e.element,t=e.textLines;if(!n)return;return function e(n,t,o){if(o>=t.length)return[null,o];var a=o,u=function(n){var o=e(n,t,a),i=r(o,2),u=i[0],l=i[1];return a=l,u};if(i.default.isValidElement(n)&&!l(n)&&!s(n)){var f=i.default.Children.map(n.props.children,u)||[];return[c(n,f),a]}if(Array.isArray(n)){return[n.map(u),a]}return[t[a],a+1]}(n,t,0)[0]};var o,a=t(1),i=(o=a)&&o.__esModule?o:{default:o};n.sleep=function(e){return new Promise((function(n){return null!=e?setTimeout(n,e):n()}))};function u(e,n){var t={};for(var r in e)-1===n.indexOf(r)&&(t[r]=e[r]);return t}function l(e){return e&&e.type&&"Backspace"===e.type.componentName}function s(e){return e&&e.type&&"Delay"===e.type.componentName}function c(e,n){var t=e.type,r=u(e.props,["children"]),o=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+t+"-"+o,i.default.createElement.apply(i.default,[t,r].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(n)))}}])},"8blX":function(e,n,t){},FLlr:function(e,n,t){var r=t("XKFU");r(r.P,"String",{repeat:t("l0Rn")})},l0Rn:function(e,n,t){"use strict";var r=t("RYi7"),o=t("vhPU");e.exports=function(e){var n=String(o(this)),t="",a=r(e);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(n+=n))1&a&&(t+=n);return t}},lgVb:function(e,n,t){"use strict";t("KKXr");var r=t("q1tI"),o=t.n(r),a=t("vOnD"),i=t("8Z9I"),u=t.n(i),l=t("p/d+");function s(){var e=x(["\nletter-spacing: 12px;\n"]);return s=function(){return e},e}function c(){var e=x(["\n"]);return c=function(){return e},e}function f(){var e=x(["\n  letter-spacing: 17px;\n  max-width: 100%;\n  font-size: 48px;\n  line-height: 80px;\n  font-weight: 100;\n  text-transform: uppercase;\n  margin-top: 10%;\n  text-align: center;\n  ","\n  ","\n"]);return f=function(){return e},e}function p(){var e=x(["\n  letter-spacing: 12px;\n"]);return p=function(){return e},e}function d(){var e=x(["\n"]);return d=function(){return e},e}function y(){var e=x(["\n  letter-spacing: 17px;\n  max-width: 100%;\n  font-size: 48px;\n  line-height: 80px;\n  font-weight: 100;\n  text-transform: uppercase;\n  margin-top: 10%;\n  text-align: center;\n  ","\n  ","\n"]);return y=function(){return e},e}function m(){var e=x(["\nleft: 3%;\ntop: 15%;\nletter-spacing: 12px;\n"]);return m=function(){return e},e}function h(){var e=x(["\nleft: 25%;\ntop: 40%;\n"]);return h=function(){return e},e}function v(){var e=x(["\n  letter-spacing: 17px;\n  max-width: 100%;\n  font-size: 48px;\n  line-height: 80px;\n  font-weight: 100;\n  text-transform: uppercase;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  ","\n  ","\n"]);return v=function(){return e},e}function b(){var e=x(["\n  left: 3%;\n  top: 15%;\n  letter-spacing: 12px;\n"]);return b=function(){return e},e}function g(){var e=x(["\n  left: 25%;\n  top: 40%;\n"]);return g=function(){return e},e}function E(){var e=x(["\n  letter-spacing: 17px;\n  max-width: 100%;\n  font-size: 48px;\n  line-height: 80px;\n  font-weight: 100;\n  text-transform: uppercase;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  ","\n  ","\n"]);return E=function(){return e},e}function x(e,n){return n||(n=e.slice(0)),e.raw=n,e}var w=Object(a.default)(u.a)(E(),l.a.md(g()),l.a.xs(b())),O=a.default.div(v(),l.a.md(h()),l.a.xs(m())),T=Object(a.default)(u.a)(y(),l.a.md(d()),l.a.xs(p())),D=a.default.div(f(),l.a.md(c()),l.a.xs(s()));n.a=function(e){var n=e.darkMode,t=e.text,r=o.a.useState(!1),a=r[0],i=r[1];n!==a&&i(n);var l=o.a.useState(!1),s=l[0],c=l[1];return"COMMING SOON... Under Construction."===t?s?o.a.createElement(D,null,o.a.createElement("span",{style:{color:a?"#fff":"#000",fontSize:28,fontFamily:"MADE Evolve Sans Light EVO"}},"Under Construction."),o.a.createElement("strong",{style:{fontFamily:"MADE Evolve Sans Bold EVO",color:a?"#fff":"#000",display:"block",fontSize:38}},"COMMING SOON...")):o.a.createElement(T,{cursor:{show:!1},onTypingDone:function(){c(!0)}},o.a.createElement("span",{style:{color:a?"#fff":"#000",fontSize:28,fontFamily:"MADE Evolve Sans Light EVO"}},t.split(" ").slice(2).join(" ")),o.a.createElement("strong",{style:{fontFamily:"MADE Evolve Sans Bold EVO",color:a?"#fff":"#000",display:"block",fontSize:38}},t.split(" ").slice(0,2).join(" "),o.a.createElement("br",null))):""!==t?s?o.a.createElement(O,null,o.a.createElement("strong",{style:{fontFamily:"MADE Evolve Sans Bold EVO",color:a?"#fff":"#000",display:"block"}},"404")," ",o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}},"Page Not Found")):o.a.createElement(w,{cursor:{show:!1},onTypingDone:function(){c(!0)}},o.a.createElement("strong",{style:{fontFamily:"MADE Evolve Sans Bold EVO",color:a?"#fff":"#000"}},t.split(" ").slice(0,1),o.a.createElement("br",null)),o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}},t.split(" ").slice(1).join(" "))):s?o.a.createElement(O,null,o.a.createElement("strong",{style:{fontFamily:"MADE Evolve Sans Bold EVO",color:a?"#fff":"#000"}},"But Mostly Just")," ",o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}},"Cool Web Stuff")):o.a.createElement(w,{cursor:{show:!1},onTypingDone:function(){c(!0)}},o.a.createElement("strong",{style:{fontFamily:"MADE Evolve Sans Bold EVO",color:a?"#fff":"#000"}},"I Make")," ",o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}},"Websites"),o.a.createElement(u.a.Backspace,{count:9,delay:300}),o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}}," ","Web Apps"),o.a.createElement(u.a.Backspace,{count:9,delay:300}),o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}}," ","Mobile Apps"),o.a.createElement(u.a.Backspace,{count:12,delay:300}),o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}}," ","Poor Life Decisions"),o.a.createElement(u.a.Delay,{ms:100}),o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}},"."),o.a.createElement(u.a.Delay,{ms:200}),o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}},"."),o.a.createElement(u.a.Delay,{ms:300}),o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}},"."),o.a.createElement(u.a.Backspace,{count:29,delay:10}),o.a.createElement("strong",{style:{fontFamily:"MADE Evolve Sans Bold EVO",color:a?"#fff":"#000"}},"But Mostly Just")," ",o.a.createElement("span",{style:{fontFamily:"Acrom Light",color:a?"#fff":"#000"}},"Cool Web Stuff"))}},"p/d+":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("vOnD");function o(){var e=s(["\n    @media (min-width: 1200px) {\n      ","\n    }\n  "]);return o=function(){return e},e}function a(){var e=s(["\n    @media (max-width: 1199px) {\n      ","\n    }\n  "]);return a=function(){return e},e}function i(){var e=s(["\n    @media (max-width: 991px) {\n      ","\n    }\n  "]);return i=function(){return e},e}function u(){var e=s(["\n    @media (max-width: 767px) {\n      ","\n    }\n  "]);return u=function(){return e},e}function l(){var e=s(["\n    @media (max-width: 280px) {\n      ","\n    }\n  "]);return l=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),e.raw=n,e}var c={ws:function(){return Object(r.css)(l(),r.css.apply(void 0,arguments))},xs:function(){return Object(r.css)(u(),r.css.apply(void 0,arguments))},sm:function(){return Object(r.css)(i(),r.css.apply(void 0,arguments))},md:function(){return Object(r.css)(a(),r.css.apply(void 0,arguments))},lg:function(){return Object(r.css)(o(),r.css.apply(void 0,arguments))}}},tr08:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("aXM8"),o=(t("q1tI"),t("cNwE"));function a(){return Object(r.a)()||o.a}}}]);
//# sourceMappingURL=c0ff9051d1f3904f81c9c9b42d253a3cf5283cdb-ba0101f7264f1e408b5c.js.map