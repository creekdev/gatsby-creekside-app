"use strict";(self.webpackChunkcreekside_logistics_app=self.webpackChunkcreekside_logistics_app||[]).push([[771],{5970:function(e,n){n.Z=function(e){return"string"==typeof e}},6759:function(e,n,t){var o=t(7294).createContext();n.Z=o},1825:function(e,n,t){function o(e){var n=e.props,t=e.states,o=e.muiFormControl;return t.reduce((function(e,t){return e[t]=n[t],o&&void 0===n[t]&&(e[t]=o[t]),e}),{})}t.d(n,{Z:function(){return o}})},8230:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(7294),r=t(6759);function i(){return o.useContext(r.Z)}},7842:function(e,n,t){t.d(n,{rA:function(){return T},Ej:function(){return W},ZP:function(){return j},_o:function(){return N},Gx:function(){return M}});var o=t(885),r=t(4942),i=t(3366),a=t(7462),l=t(3864),u=t(7294),d=t(5505),s=t(8127),c=t(9475),p=t(5176),f=t(6164),m=t(5893),h=["onChange","maxRows","minRows","style","value"];function v(e,n){return parseInt(e[n],10)||0}var b={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},y=u.forwardRef((function(e,n){var t=e.onChange,r=e.maxRows,l=e.minRows,d=void 0===l?1:l,y=e.style,Z=e.value,w=(0,i.Z)(e,h),g=u.useRef(null!=Z).current,x=u.useRef(null),S=(0,s.Z)(n,x),C=u.useRef(null),A=u.useRef(0),R=u.useState({}),k=(0,o.Z)(R,2),z=k[0],E=k[1],F=u.useCallback((function(){var n=x.current,t=(0,c.Z)(n).getComputedStyle(n);if("0px"!==t.width){var o=C.current;o.style.width=t.width,o.value=n.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var i=t["box-sizing"],a=v(t,"padding-bottom")+v(t,"padding-top"),l=v(t,"border-bottom-width")+v(t,"border-top-width"),u=o.scrollHeight;o.value="x";var s=o.scrollHeight,p=u;d&&(p=Math.max(Number(d)*s,p)),r&&(p=Math.min(Number(r)*s,p));var f=(p=Math.max(p,s))+("border-box"===i?a+l:0),m=Math.abs(p-u)<=1;E((function(e){return A.current<20&&(f>0&&Math.abs((e.outerHeightStyle||0)-f)>1||e.overflow!==m)?(A.current+=1,{overflow:m,outerHeightStyle:f}):e}))}}),[r,d,e.placeholder]);u.useEffect((function(){var e,n=(0,p.Z)((function(){A.current=0,F()})),t=(0,c.Z)(x.current);return t.addEventListener("resize",n),"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(n)).observe(x.current),function(){n.clear(),t.removeEventListener("resize",n),e&&e.disconnect()}}),[F]),(0,f.Z)((function(){F()})),u.useEffect((function(){A.current=0}),[Z]);return(0,m.jsxs)(u.Fragment,{children:[(0,m.jsx)("textarea",(0,a.Z)({value:Z,onChange:function(e){A.current=0,g||F(),t&&t(e)},ref:S,rows:d,style:(0,a.Z)({height:z.outerHeightStyle,overflow:z.overflow?"hidden":null},y)},w)),(0,m.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:C,tabIndex:-1,style:(0,a.Z)({},b,y,{padding:0})})]})})),Z=t(600),w=t(5970),g=t(1825),x=t(6759),S=t(8230),C=t(8348),A=t(184),R=t(9240),k=t(5973),z=t(4026),E=t(9612),F=t(19),B=t(3660),L=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],M=function(e,n){var t=e.ownerState;return[n.root,t.formControl&&n.formControl,t.startAdornment&&n.adornedStart,t.endAdornment&&n.adornedEnd,t.error&&n.error,"small"===t.size&&n.sizeSmall,t.multiline&&n.multiline,t.color&&n["color".concat((0,R.Z)(t.color))],t.fullWidth&&n.fullWidth,t.hiddenLabel&&n.hiddenLabel]},N=function(e,n){var t=e.ownerState;return[n.input,"small"===t.size&&n.inputSizeSmall,t.multiline&&n.inputMultiline,"search"===t.type&&n.inputTypeSearch,t.startAdornment&&n.inputAdornedStart,t.endAdornment&&n.inputAdornedEnd,t.hiddenLabel&&n.inputHiddenLabel]},W=(0,C.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:M})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({},n.typography.body1,(0,r.Z)({color:n.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(B.Z.disabled),{color:n.palette.text.disabled,cursor:"default"}),t.multiline&&(0,a.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"})})),T=(0,C.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:N})((function(e){var n,t=e.theme,o=e.ownerState,i="light"===t.palette.mode,l={color:"currentColor",opacity:i?.42:.5,transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})},u={opacity:"0 !important"},d={opacity:i?.42:.5};return(0,a.Z)((n={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},(0,r.Z)(n,"label[data-shrink=false] + .".concat(B.Z.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d}),(0,r.Z)(n,"&.".concat(B.Z.disabled),{opacity:1,WebkitTextFillColor:t.palette.text.disabled}),(0,r.Z)(n,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),n),"small"===o.size&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===o.type&&{MozAppearance:"textfield"})})),H=(0,m.jsx)(E.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),I=u.forwardRef((function(e,n){var t=(0,A.Z)({props:e,name:"MuiInputBase"}),r=t["aria-describedby"],s=t.autoComplete,c=t.autoFocus,p=t.className,f=t.components,h=void 0===f?{}:f,v=t.componentsProps,b=void 0===v?{}:v,C=t.defaultValue,E=t.disabled,M=t.endAdornment,N=t.fullWidth,I=void 0!==N&&N,j=t.id,P=t.inputComponent,O=void 0===P?"input":P,V=t.inputProps,K=void 0===V?{}:V,D=t.inputRef,_=t.maxRows,q=t.minRows,U=t.multiline,G=void 0!==U&&U,J=t.name,Q=t.onBlur,X=t.onChange,Y=t.onClick,$=t.onFocus,ee=t.onKeyDown,ne=t.onKeyUp,te=t.placeholder,oe=t.readOnly,re=t.renderSuffix,ie=t.rows,ae=t.startAdornment,le=t.type,ue=void 0===le?"text":le,de=t.value,se=(0,i.Z)(t,L),ce=null!=K.value?K.value:de,pe=u.useRef(null!=ce).current,fe=u.useRef(),me=u.useCallback((function(e){0}),[]),he=(0,k.Z)(K.ref,me),ve=(0,k.Z)(D,he),be=(0,k.Z)(fe,ve),ye=u.useState(!1),Ze=(0,o.Z)(ye,2),we=Ze[0],ge=Ze[1],xe=(0,S.Z)();var Se=(0,g.Z)({props:t,muiFormControl:xe,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Se.focused=xe?xe.focused:we,u.useEffect((function(){!xe&&E&&we&&(ge(!1),Q&&Q())}),[xe,E,we,Q]);var Ce=xe&&xe.onFilled,Ae=xe&&xe.onEmpty,Re=u.useCallback((function(e){(0,F.vd)(e)?Ce&&Ce():Ae&&Ae()}),[Ce,Ae]);(0,z.Z)((function(){pe&&Re({value:ce})}),[ce,Re,pe]);u.useEffect((function(){Re(fe.current)}),[]);var ke=O,ze=K;G&&"input"===ke&&(ze=ie?(0,a.Z)({type:void 0,minRows:ie,maxRows:ie},ze):(0,a.Z)({type:void 0,maxRows:_,minRows:q},ze),ke=y);u.useEffect((function(){xe&&xe.setAdornedStart(Boolean(ae))}),[xe,ae]);var Ee=(0,a.Z)({},t,{color:Se.color||"primary",disabled:Se.disabled,endAdornment:M,error:Se.error,focused:Se.focused,formControl:xe,fullWidth:I,hiddenLabel:Se.hiddenLabel,multiline:G,size:Se.size,startAdornment:ae,type:ue}),Fe=function(e){var n=e.classes,t=e.color,o=e.disabled,r=e.error,i=e.endAdornment,a=e.focused,l=e.formControl,u=e.fullWidth,d=e.hiddenLabel,s=e.multiline,c=e.size,p=e.startAdornment,f=e.type,m={root:["root","color".concat((0,R.Z)(t)),o&&"disabled",r&&"error",u&&"fullWidth",a&&"focused",l&&"formControl","small"===c&&"sizeSmall",s&&"multiline",p&&"adornedStart",i&&"adornedEnd",d&&"hiddenLabel"],input:["input",o&&"disabled","search"===f&&"inputTypeSearch",s&&"inputMultiline","small"===c&&"inputSizeSmall",d&&"inputHiddenLabel",p&&"inputAdornedStart",i&&"inputAdornedEnd"]};return(0,Z.Z)(m,B.u,n)}(Ee),Be=h.Root||W,Le=b.root||{},Me=h.Input||T;return ze=(0,a.Z)({},ze,b.input),(0,m.jsxs)(u.Fragment,{children:[H,(0,m.jsxs)(Be,(0,a.Z)({},Le,!(0,w.Z)(Be)&&{ownerState:(0,a.Z)({},Ee,Le.ownerState)},{ref:n,onClick:function(e){fe.current&&e.currentTarget===e.target&&fe.current.focus(),Y&&Y(e)}},se,{className:(0,d.Z)(Fe.root,Le.className,p),children:[ae,(0,m.jsx)(x.Z.Provider,{value:null,children:(0,m.jsx)(Me,(0,a.Z)({ownerState:Ee,"aria-invalid":Se.error,"aria-describedby":r,autoComplete:s,autoFocus:c,defaultValue:C,disabled:Se.disabled,id:j,onAnimationStart:function(e){Re("mui-auto-fill-cancel"===e.animationName?fe.current:{value:"x"})},name:J,placeholder:te,readOnly:oe,required:Se.required,rows:ie,value:ce,onKeyDown:ee,onKeyUp:ne,type:ue},ze,!(0,w.Z)(Me)&&{as:ke,ownerState:(0,a.Z)({},Ee,ze.ownerState)},{ref:be,className:(0,d.Z)(Fe.input,ze.className),onBlur:function(e){Q&&Q(e),K.onBlur&&K.onBlur(e),xe&&xe.onBlur?xe.onBlur(e):ge(!1)},onChange:function(e){if(!pe){var n=e.target||fe.current;if(null==n)throw new Error((0,l.Z)(1));Re({value:n.value})}for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];K.onChange&&K.onChange.apply(K,[e].concat(o)),X&&X.apply(void 0,[e].concat(o))},onFocus:function(e){Se.disabled?e.stopPropagation():($&&$(e),K.onFocus&&K.onFocus(e),xe&&xe.onFocus?xe.onFocus(e):ge(!0))}}))}),M,re?re((0,a.Z)({},Se,{startAdornment:ae})):null]}))]})})),j=I},3660:function(e,n,t){t.d(n,{u:function(){return r}});var o=t(2717);function r(e){return(0,o.Z)("MuiInputBase",e)}var i=(0,t(5495).Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);n.Z=i},19:function(e,n,t){function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||n&&o(e.defaultValue)&&""!==e.defaultValue)}function i(e){return e.startAdornment}t.d(n,{vd:function(){return r},B7:function(){return i}})},3128:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(7294);var r=function(e,n){return o.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}},5176:function(e,n,t){function o(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var l=function(){e.apply(o,i)};clearTimeout(n),n=setTimeout(l,t)}return o.clear=function(){clearTimeout(n)},o}t.d(n,{Z:function(){return o}})},9475:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(4694);function r(e){return(0,o.Z)(e).defaultView||window}}}]);
//# sourceMappingURL=883d101e0c499e29b272a3806c2ea25555f41fde-4a51858d1d225f9e0334.js.map