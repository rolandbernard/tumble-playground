(this["webpackJsonptumble-playground"]=this["webpackJsonptumble-playground"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.4f27ef60.svg"},function(e,t,a){e.exports=a(25)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=(a(16),a(3)),s=a(6),o=a.n(s),u=a(9),m=null;function p(){return(p=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){window.addEventListener("load",(function(){return e()})),"undefined"!==typeof Tumble&&e()}));case 2:return e.next=4,Tumble({print:function(e){t(e)},printErr:function(e){t(e)}});case 4:return m=e.sent,e.next=7,m.ready;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=a(1);a(18);var f=function(e){var t=e.color,a=e.variant,c=e.isLink,l=e.children,i=e.disabled,s=e.className,o=Object(d.a)(e,["color","variant","isLink","children","disabled","className"]),u=Object(n.createRef)(),m=function(e){var t=e.target,a=t.getBoundingClientRect(),n=e.clientX-a.left,r=e.clientY-a.top,c=document.createElement("span");c.classList.add("ui-touch-ripple-ripple");var l=document.createElement("span");l.classList.add("ui-touch-ripple-child"),c.appendChild(l);var i=Math.sqrt(t.clientWidth*t.clientWidth+t.clientHeight*t.clientHeight);c.style.width=2*i+"px",c.style.height=2*i+"px",c.style.left=n-i+"px",c.style.top=r-i+"px",t.getElementsByClassName("ui-touch-ripple-root")[0].appendChild(c)},p=function(e){var t=e.target.getElementsByClassName("ui-touch-ripple-root")[0];t.childNodes.forEach((function(e){var a=e.childNodes[0];a.classList.contains("ui-touch-ripple-child-exit")||(a.classList.add("ui-touch-ripple-child-exit"),a.addEventListener("animationend",(function(){t.removeChild(e)})))}))},f="ui-button";return a&&"outlined"===a.toLowerCase()?f+=" ui-button-outlined":a&&"text"===a.toLowerCase()&&(f+=" ui-button-text"),t&&"primary"===t.toLowerCase()?f+=" ui-button-primary":t&&"secondary"===t.toLowerCase()&&(f+=" ui-button-secondary"),i&&(f+=" ui-button-disabled"),s&&(f+=" "+s),c?r.a.createElement("a",Object.assign({className:f,onMouseDown:m,onMouseUp:p,onMouseLeave:p},o),r.a.createElement("span",{ref:u,className:"ui-touch-ripple-root"}),r.a.createElement("span",{className:"ui-button-content",children:l})):r.a.createElement("button",Object.assign({className:f,onMouseDown:m,onMouseUp:p,onMouseLeave:p,disabled:i},o),r.a.createElement("span",{ref:u,className:"ui-touch-ripple-root"}),r.a.createElement("span",{className:"ui-button-content",children:l}))},b=a(5);a(19);var h=function(e){var t=e.value,a=e.onChange,c=e.className,l=Object(d.a)(e,["value","onChange","className"]),i=Object(n.createRef)(),s=t?t.split("\n").length:1;return r.a.createElement("div",Object.assign({className:"ui-code-editor "+(c||"")},l),r.a.createElement("div",{className:"ui-code-editor-container"},r.a.createElement("div",{className:"ui-code-editor-lines"},Object(b.a)(Array(s).keys()).map((function(e){return r.a.createElement("span",{key:e,className:"ui-code-editor-linenumber"},e+1)}))),r.a.createElement("textarea",{ref:i,value:t,onChange:function(e){a&&a(e.target.value)},onKeyDown:function(e){if("Tab"===e.key){var n=e.currentTarget.selectionStart,r=e.currentTarget.selectionEnd,c=t.substring(0,n)+"    "+t.substring(r);e.preventDefault(),i.current.value=c,i.current.selectionStart=n+4,i.current.selectionEnd=n+4,a(c)}},className:"ui-code-editor-input",placeholder:"Type some code...",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",scrolling:"no"})))};a(20);var E=function(e){var t=e.className,a=Object(d.a)(e,["className"]);return r.a.createElement("span",Object.assign({className:"ui-paper "+(t||"")},a))};a(21);function v(e){var t=e.className,a=Object(d.a)(e,["className"]);return r.a.createElement("div",Object.assign({className:"ui-header "+(t||"")},a))}function g(e){return r.a.createElement("span",Object.assign({className:"ui-header-spacer"},e))}a(22);var N=function(e){var t=e.className,a=Object(d.a)(e,["className"]);return r.a.createElement("span",Object.assign({className:"ui-spinner "+(t||"")},a),Object(b.a)(Array(10).keys()).map((function(e){return r.a.createElement("span",{key:e})})))},y=a(10),j=a.n(y),x=(a(23),"");var O=function(){var e=Object(n.useState)('\nextern printf(fmt: *i8, ..);\n\nmain() {\n    printf("Hello world!\\n");\n}\n'),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),o=s[0],u=s[1],d=Object(n.useState)(!0),b=Object(i.a)(d,2),y=b[0],O=b[1],C=Object(n.useState)(!1),w=Object(i.a)(C,2),L=w[0],k=w[1];return x=o,Object(n.useEffect)((function(){(function(e){return p.apply(this,arguments)})((function(e){x+=(x?"\n":"")+e})).then((function(){O(!1)}))}),[]),r.a.createElement("div",{className:"app-root"},r.a.createElement(v,{style:{flex:"0 0 auto"}},r.a.createElement(g,null),r.a.createElement("img",{src:j.a,alt:"Logo",className:"header-logo"}),r.a.createElement("span",{className:"header-title"},"Tumbleweed"),r.a.createElement(g,null)),r.a.createElement("div",{className:"app-content"},r.a.createElement("div",{style:{flex:"1 1 100%",display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"app-content-header"},"Input:",r.a.createElement(g,null),r.a.createElement(f,{disabled:L||y,color:"primary",style:{margin:0,flex:"0 0 auto"},onClick:function(){var e;k(!0),e=a,m.FS.writeFile("program.tumble",e),m.callMain(["program.tumble","-e","jit","-t","wasm32","--force-target"]),u(x),k(!1)}},"Run program")),r.a.createElement(h,{style:{flex:"1 1 100%"},value:a,onChange:function(e){return c(e)}})),r.a.createElement("div",{style:{flex:"1 1 75%",display:"flex",flexDirection:"column"}},y?r.a.createElement("div",{className:"app-loading"},r.a.createElement(N,null)):[r.a.createElement("div",{className:"app-content-header"},"Output:",r.a.createElement(g,null),r.a.createElement(f,{variant:"outlined",color:"secondary",style:{margin:0,flex:"0 0 auto"},onClick:function(){u("")}},"Clear output")),r.a.createElement(E,{className:"app-output"},r.a.createElement("pre",null,o.replace(/\x1B\[.*?m/g,"")))])))};a(24);l.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.157a2346.chunk.js.map