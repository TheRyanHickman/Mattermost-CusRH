(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{2376:function(e,t,r){"use strict";r.r(t);var n=r(20),a=r(418),o=r(24),s=r(40),c=(r(88),r(43),r(116),r(25),r(304),r(117),r(30)),i=r.n(c),u=r(7),l=r.n(u),f=r(419),p=r.n(f),m=r(56),d=r(119),b=r(0),w=r(1499),h=r(57);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,r,n,a,o,s){try{var c=e[o](s),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=P(t).call(this,e),r=!a||"object"!==y(a)&&"function"!=typeof a?E(n):a,N(E(r),"handlePasswordReset",function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n,a,o,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n=p.a.findDOMNode(r.refs.password).value)&&!(n.length<b.Q.MIN_PASSWORD_LENGTH)){e.next=5;break}return r.setState({error:l.a.createElement(m.c,{id:"password_form.error",defaultMessage:"Please enter at least {chars} characters.",values:{chars:b.Q.MIN_PASSWORD_LENGTH}})}),e.abrupt("return");case 5:return r.setState({error:null}),a=new URLSearchParams(r.props.location.search).get("token"),e.next=9,r.props.actions.resetUserPassword(a,n);case 9:o=e.sent,s=o.data,c=o.error,s?(d.a.push("/login?extra="+b.Q.PASSWORD_CHANGE),r.setState({error:null})):c&&r.setState({error:c.message});case 13:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function s(e){v(o,n,a,s,c,"next",e)}function c(e){v(o,n,a,s,c,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}()),r.state={error:null},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,l.a.PureComponent),r=t,(n=[{key:"render",value:function(){var e=null;this.state.error&&(e=l.a.createElement("div",{className:"form-group has-error"},l.a.createElement("label",{className:"control-label"},this.state.error)));var t="form-group";return e&&(t+=" has-error"),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"signup-team__container"},l.a.createElement("h3",null,l.a.createElement(m.c,{id:"password_form.title",defaultMessage:"Password Reset"})),l.a.createElement("form",{onSubmit:this.handlePasswordReset},l.a.createElement("p",null,l.a.createElement(m.c,{id:"password_form.enter",defaultMessage:"Enter a new password for your {siteName} account.",values:{siteName:this.props.siteName}})),l.a.createElement("div",{className:t},l.a.createElement(w.a,{id:"resetPasswordInput",type:"password",className:"form-control",name:"password",ref:"password",placeholder:{id:Object(h.b)("password_form.pwd"),defaultMessage:"Password"},spellCheck:"false",autoFocus:!0})),e,l.a.createElement("button",{id:"resetPasswordButton",type:"submit",className:"btn btn-primary"},l.a.createElement(m.c,{id:"password_form.change",defaultMessage:"Change my password"})))))}}])&&g(r.prototype,n),a&&g(r,a),t}();N(O,"propTypes",{location:i.a.object.isRequired,siteName:i.a.string,actions:i.a.shape({resetUserPassword:i.a.func.isRequired}).isRequired});t.default=Object(a.connect)(function(e){return{siteName:Object(o.getConfig)(e).SiteName}},function(e){return{actions:Object(n.bindActionCreators)({resetUserPassword:s.resetUserPassword},e)}})(O)}}]);
//# sourceMappingURL=30.8c95e9bc68c8080f2071.js.map