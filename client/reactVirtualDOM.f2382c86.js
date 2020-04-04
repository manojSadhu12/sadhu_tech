import{l as e,m as t,o as a,n,t as s,p as r,q as o,e as i,s as c,C as d,c as m,d as $,b as p,f as l,h as f,i as g,S as u,j as h,k as w}from"./client.f707559f.js";import"./Icon.b3087117.js";import"./Button.46d81a0e.js";import"./Image.a80d16de.js";import"./stores.ec09ff7a.js";import{H as b,P as M,a as D,N as O,C as y}from"./index.b8f1b6e6.js";function v(i){let c;const d=new b({props:{data:"React Virtual DOM",id:"reactVirtualDOM",isBig:"true"}}),m=new M({props:{data:"<p>Virtual DOM is the virtual representation of the real DOM.</p>"}}),$=new b({props:{data:"Why virtual DOM in React",id:"whyVirtualDOMInReact"}}),p=new M({props:{data:"<p>Updating DOM is fast because DOM maintains web elements in a tree data structure but rendering DOM is slow because every element should be painted. <strong>So updating DOM with more UI components is very slow because of re-painting.</strong>  </p>"}}),l=new b({props:{data:"How React uses virtual DOM",id:"howReactUsesVirtualDOM"}}),f=new M({props:{data:'<p>Virtual DOM is copy of real DOM which is in memory. React uses <span style="color: rgb(51, 51, 51);">observable pattern to identify changes in</span> state and props. When state or props are changed React makes a call to render() so React generates a new virtual DOM, now React compares this new virtual DOM with the old one and identifies which nodes to be updated/created/removed (this process is called diffing) and passes only the modified nodes to the real DOM.</p><p><br></p><p>So because of this process only parts of the UI that are modified will only be updated to the real DOM. If no differences are found between old virtual DOM and newly generated virtual DOM then React does not touch real DOM.</p>'}}),g=new b({props:{data:"Batch updates in React",id:"batchUpdatesInReact"}}),u=new M({props:{data:"<p>React always makes batch updates to the DOM. That means React does not call render() for every setState() call. It groups all the state modifications and call render() only once.</p>"}}),h=new D({props:{language:"javascript",uid:"84f29b41-2c71-11ea-b47c-254220e6644c",data:'import React from \'react\';\n\nclass Person extends React.Component {\n    state = {\n        name: "Manoj",\n        age: 26\n    };\n\n    updateState = () => {\n        this.setState({\n            age: 20\n        });\n        this.setState({\n            age: 21\n        });\n        this.setState({\n            name: "Manoj Sadhu"\n        })\n    };\n\n    render() {\n        console.log("Rendering");\n        return (\n            <div>\n                <h1>{this.state.name} aged {this.state.age}.</h1>\n                <button onClick={this.updateState}>Update State</button>\n            </div>\n        )\n    }\n}\n\nconst element = <Person/>;\nReactDOM.render(element, document.getElementById(\'root\'));',pic:"/images/da86ed50-f336-11e9-b4ff-ad48fafeab92___9597dbc0-2c73-11ea-b47c-254220e6644c.jpg",ratio:"8",highlight:"10-18"}}),w=new M({props:{data:"<p>In the above example setState() is called 3 times on <em>Update State</em> button click. But render() is only called once. Because React batches the state changes.</p>"}}),y=new O({props:{data:"<p>Now we have understood how React uses virtual DOM to update UI efficiently. But if you create components with very heavily nested elements then creating a virtual DOM and comparing with old virtual DOM can be slow. So always try to keep Components as small as possible so React will try to render only small part so it leads to high performant app.</p>"}});return{c(){e(d.$$.fragment),e(m.$$.fragment),e($.$$.fragment),e(p.$$.fragment),e(l.$$.fragment),e(f.$$.fragment),e(g.$$.fragment),e(u.$$.fragment),e(h.$$.fragment),e(w.$$.fragment),e(y.$$.fragment)},l(e){t(d.$$.fragment,e),t(m.$$.fragment,e),t($.$$.fragment,e),t(p.$$.fragment,e),t(l.$$.fragment,e),t(f.$$.fragment,e),t(g.$$.fragment,e),t(u.$$.fragment,e),t(h.$$.fragment,e),t(w.$$.fragment,e),t(y.$$.fragment,e)},m(e,t){a(d,e,t),a(m,e,t),a($,e,t),a(p,e,t),a(l,e,t),a(f,e,t),a(g,e,t),a(u,e,t),a(h,e,t),a(w,e,t),a(y,e,t),c=!0},p:n,i(e){c||(s(d.$$.fragment,e),s(m.$$.fragment,e),s($.$$.fragment,e),s(p.$$.fragment,e),s(l.$$.fragment,e),s(f.$$.fragment,e),s(g.$$.fragment,e),s(u.$$.fragment,e),s(h.$$.fragment,e),s(w.$$.fragment,e),s(y.$$.fragment,e),c=!0)},o(e){r(d.$$.fragment,e),r(m.$$.fragment,e),r($.$$.fragment,e),r(p.$$.fragment,e),r(l.$$.fragment,e),r(f.$$.fragment,e),r(g.$$.fragment,e),r(u.$$.fragment,e),r(h.$$.fragment,e),r(w.$$.fragment,e),r(y.$$.fragment,e),c=!1},d(e){o(d,e),o(m,e),o($,e),o(p,e),o(l,e),o(f,e),o(g,e),o(u,e),o(h,e),o(w,e),o(y,e)}}}function R(n){let u,h,w;const b=new y({props:{$$slots:{default:[v]},$$scope:{ctx:n}}});return{c(){u=i("meta"),h=c(),e(b.$$.fragment),this.h()},l(e){const a=d('[data-svelte="svelte-1yfee1p"]',document.head);u=m(a,"META",{name:!0,content:!0}),a.forEach($),h=p(e),t(b.$$.fragment,e),this.h()},h(){document.title="React Virtual DOM",l(u,"name","description"),l(u,"content","React Virtual DOM")},m(e,t){f(document.head,u),g(e,h,t),a(b,e,t),w=!0},p(e,[t]){const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),b.$set(a)},i(e){w||(s(b.$$.fragment,e),w=!0)},o(e){r(b.$$.fragment,e),w=!1},d(e){$(u),e&&$(h),o(b,e)}}}export default class extends u{constructor(e){super(),h(this,e,null,R,w,{})}}
