(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_components_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_css_style_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),_css_style_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__),App=function(_Component){function App(props){var _this;return Object(C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.reset=function(){_this.setState({current:"0",previous:[],nextIsReset:!1})},_this.addToCurrent=function(_){if(["/","*","-","+"].indexOf(_)>-1){var e=_this.state.previous;e.push(_this.state.current+_),_this.setState({previous:e,nextIsReset:!0})}else"0"===_this.state.current&&"."!==_||_this.state.nextIsReset?_this.setState({current:_,nextIsReset:!1}):_this.setState({current:_this.state.current+_})},_this.calculate=function(symbol){var _this$state=_this.state,current=_this$state.current,previous=_this$state.previous,nextIsReset=_this$state.nextIsReset;previous.length>0&&(current=eval(String(previous[previous.length-1]+current)),_this.setState({current:current,previous:[],nextIsReset:!0}))},_this.state={current:"0",previous:[],nextIsReset:!1},_this}return Object(C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(C_Users_Dariusz_Desktop_react_projects_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){var _=[{symbol:"C",cols:3,action:this.reset},{symbol:"/",cols:1,action:this.addToCurrent},{symbol:"7",cols:1,action:this.addToCurrent},{symbol:"8",cols:1,action:this.addToCurrent},{symbol:"9",cols:1,action:this.addToCurrent},{symbol:"*",cols:1,action:this.addToCurrent},{symbol:"4",cols:1,action:this.addToCurrent},{symbol:"5",cols:1,action:this.addToCurrent},{symbol:"6",cols:1,action:this.addToCurrent},{symbol:"-",cols:1,action:this.addToCurrent},{symbol:"1",cols:1,action:this.addToCurrent},{symbol:"2",cols:1,action:this.addToCurrent},{symbol:"3",cols:1,action:this.addToCurrent},{symbol:"+",cols:1,action:this.addToCurrent},{symbol:"0",cols:2,action:this.addToCurrent},{symbol:".",cols:1,action:this.addToCurrent},{symbol:"=",cols:1,action:this.calculate}];return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"App"},this.state.previous.length>0?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"floaty-last"},this.state.previous[this.state.previous.length-1]):null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{className:"result",type:"text",value:this.state.current}),_.map((function(_,e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_6__.a,{key:e,symbol:_.symbol,cols:_.cols,action:function(e){return _.action(e)}})})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(_,e,t){"use strict";var s=t(1),r=t(2),o=t(4),a=t(3),c=t(5),n=t(0),i=t.n(n),l=function(_){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(c.a)(e,_),Object(r.a)(e,[{key:"render",value:function(){var _=this;return i.a.createElement("div",{className:"column-".concat(this.props.cols)},i.a.createElement("button",{className:"calc-button",onClick:function(){return _.props.action(_.props.symbol)}},this.props.symbol))}}]),e}(n.Component);e.a=l},function(_,e,t){_.exports=t(17)},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var s=t(0),r=t.n(s),o=t(7),a=t.n(o),c=(t(15),t(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c54700b4.chunk.js.map