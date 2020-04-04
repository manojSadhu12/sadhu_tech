import{l as e,m as t,o as n,n as a,t as o,p as r,q as s,e as p,s as i,C as m,c as d,d as c,b as g,f as $,h as f,i as l,S as h,j as u,k as w}from"./client.f707559f.js";import"./Icon.b3087117.js";import"./Button.46d81a0e.js";import"./Image.a80d16de.js";import"./stores.ec09ff7a.js";import{H as C,P as b,a as y,N as H,C as D}from"./index.b8f1b6e6.js";function O(p){let i;const m=new C({props:{data:"Higher Order Components",id:"higherOrderComponents",isBig:"true"}}),d=new b({props:{data:"<p>Higher Order Components are commonly called as <em>HOC</em>.</p><p><em>HOC</em> is not a React feature, it a pattern that aims to share common statefull logic amount components.</p>"}}),c=new C({props:{data:"What is Higher order function",id:"whatIsHigherOrderFunction"}}),g=new b({props:{data:"<p><em>Higher order function</em> is general programming pattern.</p><p>A function is called <em>Higher order function</em> if it satisfies one of the below conditions:</p><ul><li>takes one or more function as arguments.</li><li>returns a function as result.</li></ul>"}}),$=new y({props:{language:"javascript",uid:"3799a770-7641-11ea-bf1d-2b9523073973",data:"const add = (x) => (y) => x + y;\nadd(5)(20); //25",pic:"",ratio:"4",highlight:""}}),f=new b({props:{data:"<p>The above code snippet is an example of <em>Higher order function</em> in Javascript.</p><p>The same concept can be applied to React components which is called as <em>HOC</em>. </p>"}}),l=new C({props:{data:"React HOC",id:"reactHOC"}}),h=new y({props:{language:"javascript",uid:"3877cb11-7644-11ea-bf1d-2b9523073973",data:"const withSomeAddedFunctionality = (WrappedComponent, /* Any Extra arguments */) => {\n    // Some statefull logic\n    const NewComponent = (props) => (\n        <WrappedComponent {...props} /*Any extra props*//>\n    );\n    return NewComponent;\n};",pic:"",ratio:"4",highlight:"4"}}),u=new b({props:{data:"<p>This is how a <em>HOC</em> looks in React.</p><p><em>withSomeAddedFunctionality</em> accepts <em>WrappedComponent</em> and any optional arguments. Does some statefull logic and returns a <em>NewComponent</em> with some added functionality.</p>"}}),w=new H({props:{data:"<p>Observe line 4, <em>{...props}</em> is very important. Without this our original component cannot acces the props that we add from our component nesting.</p>"}}),D=new b({props:{data:"<p>Now let us take a real example, While fetching some data from rest most developers shows a loading indication, To implement this there is no need to manage loading state in each and every component. We can make a <em>HOC</em> which holds the common code of maintaining loading state.</p>"}}),O=new y({props:{language:"javascript",uid:"50b0be11-7646-11ea-bf1d-2b9523073973",data:"const withFetchAndLoading = (WrappedComponent, url) => {\n    class FetchAndLoadingComponent extends React.Component {\n        state = {\n            responseData: null\n        };\n\n        async componentDidMount() {\n            this.setState({responseData: await (await fetch(url)).json()})\n        }\n\n        render() {\n            return (\n                this.state.responseData\n                    ? <WrappedComponent {...this.props} responseData={this.state.responseData}/>\n                    : <span>Loading...</span>\n            );\n        }\n    }\n    return LoadingComponent;\n};",pic:"",ratio:"4",highlight:"13-15"}}),L=new b({props:{data:"<p><em>withFetchAndLoading</em> is a HOC that accepts <em>WrappedComponent</em> and <em>url</em> as arguments.</p><p><em>withFetchAndLoading</em> creates a new component <em>FetchAndLoadingComponent</em> which fetches data from the passed url, before data is fetched a loading indication (at line 15) is returned when fetching is it returns <em>WrappedComponent</em> (original component, at line 14) with the default props and the data we fetch from the rest.</p><p><br></p><p>Now any component that requires data fetching and loading indication can we passed to this <em>HOC</em>.</p>"}}),j=new y({props:{language:"javascript",uid:"3ed41231-7648-11ea-bf1d-2b9523073973",data:'const UsersList = withLoading(({responseData}) => {\n    return <React.Fragment>{responseData.map(user => <p key={user.id}>{user.name}</p>)}</React.Fragment>\n}, "https://jsonplaceholder.typicode.com/users");',pic:"",ratio:"4",highlight:""}}),v=new b({props:{data:"<p>Now let us see the full example of using HOC</p>"}}),x=new y({props:{language:"javascript",uid:"577a7ef1-7648-11ea-bf1d-2b9523073973",data:"import React from 'react';\nimport ReactDOM from 'react-dom'\nimport './App.css';\n\nconst withLoading = (WrappedComponent, url) => {\n    class HOC extends React.Component {\n        state = {\n            responseData: null\n        };\n\n        async componentDidMount() {\n            this.setState({responseData: await (await fetch(url)).json()})\n        }\n\n        render() {\n            return (\n                this.state.responseData\n                    ? (\n                        <div style={{color: this.props.color}}>\n                            <h1>{this.props.title}</h1>\n                            <WrappedComponent {...this.props} responseData={this.state.responseData}/>\n                        </div>\n                    )\n                    : <span style={{color: this.props.color}}>Loading...</span>\n            );\n        }\n    }\n\n    return HOC;\n};\n\nconst UsersList = withLoading(({responseData}) => {\n    return <React.Fragment>{responseData.map(user => <p key={user.id}>{user.name}</p>)}</React.Fragment>\n}, \"https://jsonplaceholder.typicode.com/users\");\n\nconst PostsList = withLoading(({responseData}) => {\n    return <React.Fragment>{responseData.map(post => <p key={post.id}>{post.title}</p>)}</React.Fragment>\n}, \"https://jsonplaceholder.typicode.com/posts\");\n\nconst MyApp = () => {\n    return (\n        <div style={{display: 'flex'}}>\n            <UsersList color='red' title='Users List'/>\n            <PostsList color='blue' title='Posts List'/>\n        </div>\n    );\n};\n\nexport default MyApp;\n\nReactDOM.render(<MyApp/>, document.getElementById('root'));",pic:"/images/da86ed50-f336-11e9-b4ff-ad48fafeab92___6cd5b850-7648-11ea-bf1d-2b9523073973.gif",ratio:"8",highlight:""}}),R=new b({props:{data:"<p><em>withLoading</em> is made to use color and title props passed at line 43 and 45.</p>"}});return{c(){e(m.$$.fragment),e(d.$$.fragment),e(c.$$.fragment),e(g.$$.fragment),e($.$$.fragment),e(f.$$.fragment),e(l.$$.fragment),e(h.$$.fragment),e(u.$$.fragment),e(w.$$.fragment),e(D.$$.fragment),e(O.$$.fragment),e(L.$$.fragment),e(j.$$.fragment),e(v.$$.fragment),e(x.$$.fragment),e(R.$$.fragment)},l(e){t(m.$$.fragment,e),t(d.$$.fragment,e),t(c.$$.fragment,e),t(g.$$.fragment,e),t($.$$.fragment,e),t(f.$$.fragment,e),t(l.$$.fragment,e),t(h.$$.fragment,e),t(u.$$.fragment,e),t(w.$$.fragment,e),t(D.$$.fragment,e),t(O.$$.fragment,e),t(L.$$.fragment,e),t(j.$$.fragment,e),t(v.$$.fragment,e),t(x.$$.fragment,e),t(R.$$.fragment,e)},m(e,t){n(m,e,t),n(d,e,t),n(c,e,t),n(g,e,t),n($,e,t),n(f,e,t),n(l,e,t),n(h,e,t),n(u,e,t),n(w,e,t),n(D,e,t),n(O,e,t),n(L,e,t),n(j,e,t),n(v,e,t),n(x,e,t),n(R,e,t),i=!0},p:a,i(e){i||(o(m.$$.fragment,e),o(d.$$.fragment,e),o(c.$$.fragment,e),o(g.$$.fragment,e),o($.$$.fragment,e),o(f.$$.fragment,e),o(l.$$.fragment,e),o(h.$$.fragment,e),o(u.$$.fragment,e),o(w.$$.fragment,e),o(D.$$.fragment,e),o(O.$$.fragment,e),o(L.$$.fragment,e),o(j.$$.fragment,e),o(v.$$.fragment,e),o(x.$$.fragment,e),o(R.$$.fragment,e),i=!0)},o(e){r(m.$$.fragment,e),r(d.$$.fragment,e),r(c.$$.fragment,e),r(g.$$.fragment,e),r($.$$.fragment,e),r(f.$$.fragment,e),r(l.$$.fragment,e),r(h.$$.fragment,e),r(u.$$.fragment,e),r(w.$$.fragment,e),r(D.$$.fragment,e),r(O.$$.fragment,e),r(L.$$.fragment,e),r(j.$$.fragment,e),r(v.$$.fragment,e),r(x.$$.fragment,e),r(R.$$.fragment,e),i=!1},d(e){s(m,e),s(d,e),s(c,e),s(g,e),s($,e),s(f,e),s(l,e),s(h,e),s(u,e),s(w,e),s(D,e),s(O,e),s(L,e),s(j,e),s(v,e),s(x,e),s(R,e)}}}function L(a){let h,u,w;const C=new D({props:{$$slots:{default:[O]},$$scope:{ctx:a}}});return{c(){h=p("meta"),u=i(),e(C.$$.fragment),this.h()},l(e){const n=m('[data-svelte="svelte-gdj3sx"]',document.head);h=d(n,"META",{name:!0,content:!0}),n.forEach(c),u=g(e),t(C.$$.fragment,e),this.h()},h(){document.title="React Higher Order Components",$(h,"name","description"),$(h,"content","React Higher Order Components")},m(e,t){f(document.head,h),l(e,u,t),n(C,e,t),w=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),C.$set(n)},i(e){w||(o(C.$$.fragment,e),w=!0)},o(e){r(C.$$.fragment,e),w=!1},d(e){c(h),e&&c(u),s(C,e)}}}export default class extends h{constructor(e){super(),u(this,e,null,L,w,{})}}
