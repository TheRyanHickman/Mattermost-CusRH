(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1505:function(e,t,r){"use strict";r.d(t,"a",function(){return b});r(88),r(43);var n=r(30),a=r.n(n),o=r(7),s=r.n(o),i=r(56),c=r(1482);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,s.a.PureComponent),r=t,(n=[{key:"render",value:function(){return s.a.createElement("div",{id:"back_button",className:"signup-header"},s.a.createElement(c.a,{onClick:this.props.onClick,to:this.props.url},s.a.createElement(i.c,{id:"generic_icons.back",defaultMessage:"Back Icon"},function(e){return s.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e})}),s.a.createElement(i.c,{id:"web.header.back",defaultMessage:"Back"})))}}])&&l(r.prototype,n),a&&l(r,a),t}();m(b,"propTypes",{url:a.a.string,onClick:a.a.func}),m(b,"defaultProps",{url:"/"})},2367:function(e,t,r){"use strict";r.r(t);var n=r(20),a=r(418),o=r(40),s=(r(88),r(43),r(116),r(25),r(117),r(30)),i=r.n(s),c=r(7),u=r.n(c),l=r(56),f=r(76),p=r(1505),d=r(1499),m=r(57);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(e){function t(){var e,r,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return n=this,a=(e=w(t)).call.apply(e,[this].concat(s)),r=!a||"object"!==b(a)&&"function"!=typeof a?v(n):a,g(v(r),"state",{error:null,updateText:null}),g(v(r),"resetForm",u.a.createRef()),g(v(r),"emailInput",u.a.createRef()),g(v(r),"handleSendLink",function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n,a,o,s,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=r.emailInput.current&&r.emailInput.current.input.current,(a=n&&n.value.trim().toLowerCase())&&Object(f.isEmail)(a)){e.next=6;break}return r.setState({error:u.a.createElement(l.c,{id:"password_send.error",defaultMessage:"Please enter a valid email address."})}),e.abrupt("return");case 6:return r.setState({error:null}),e.next=9,r.props.actions.sendPasswordResetEmail(a);case 9:o=e.sent,s=o.data,i=o.error,s?(r.setState({error:null,updateText:u.a.createElement("div",{id:"passwordResetEmailSent",className:"reset-form alert alert-success"},u.a.createElement(l.c,{id:"password_send.link",defaultMessage:"If the account exists, a password reset email will be sent to:"}),u.a.createElement("div",null,u.a.createElement("b",null,a)),u.a.createElement("br",null),u.a.createElement(l.c,{id:"password_send.checkInbox",defaultMessage:"Please check your inbox."}))}),r.resetForm.current&&(r.resetForm.current.hidden=!0)):i&&r.setState({error:i.message,update_text:null});case 13:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function s(e){y(o,n,a,s,i,"next",e)}function i(e){y(o,n,a,s,i,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}()),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,u.a.PureComponent),r=t,(n=[{key:"render",value:function(){var e=null;this.state.error&&(e=u.a.createElement("div",{className:"form-group has-error"},u.a.createElement("label",{className:"control-label"},this.state.error)));var t="form-group";return e&&(t+=" has-error"),u.a.createElement("div",null,u.a.createElement(p.a,null),u.a.createElement("div",{className:"col-sm-12"},u.a.createElement("div",{className:"signup-team__container"},u.a.createElement("h3",null,u.a.createElement(l.c,{id:"password_send.title",defaultMessage:"Password Reset"})),this.state.updateText,u.a.createElement("form",{onSubmit:this.handleSendLink,ref:this.resetForm},u.a.createElement("p",null,u.a.createElement(l.c,{id:"password_send.description",defaultMessage:"To reset your password, enter the email address you used to sign up"})),u.a.createElement("div",{className:t},u.a.createElement(d.a,{id:"passwordResetEmailInput",type:"email",className:"form-control",name:"email",placeholder:{id:Object(m.b)("password_send.email"),defaultMessage:"Email"},ref:this.emailInput,spellCheck:"false",autoFocus:!0})),e,u.a.createElement("button",{id:"passwordResetButton",type:"submit",className:"btn btn-primary"},u.a.createElement(l.c,{id:"password_send.reset",defaultMessage:"Reset my password"}))))))}}])&&h(r.prototype,n),a&&h(r,a),t}();g(_,"propTypes",{actions:i.a.shape({sendPasswordResetEmail:i.a.func.isRequired}).isRequired});t.default=Object(a.connect)(null,function(e){return{actions:Object(n.bindActionCreators)({sendPasswordResetEmail:o.sendPasswordResetEmail},e)}})(_)}}]);
//# sourceMappingURL=23.86356b756c19f51677af.js.map