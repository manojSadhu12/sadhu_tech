import{l as e,m as n,o as t,n as a,t as s,p as r,q as o,e as c,s as i,C as p,c as m,d as l,b as d,f,h as u,i as g,S as $,j as h,k as b}from"./client.9c259cf4.js";import"./Icon.680bd4d0.js";import"./Button.44f5306d.js";import"./Image.c8019b1e.js";import"./stores.2b7dbef2.js";import{H as k,a as y,P as C,C as v}from"./index.7beba4f9.js";function R(c){let i;const p=new k({props:{data:"useCallback",id:"useCallback",isBig:"true"}}),m=new y({props:{language:"javascript",uid:"7a6119b1-6b49-11ea-8d59-1328692dfd92",data:"/**\n* @param first param is a function.\n* @param second param is the list of dependencies\n* @returns a memoized version of the callback that only changes if one of the dependencies has changed.\n*/\n\nconst memoizedCallback = useCallback(\n    () => {\n        //callback code\n    },\n    [\n        //dependencies list\n    ],\n)",pic:"",ratio:"4",highlight:""}}),l=new C({props:{data:"<p><br></p><p>We know that all the code inside the function component executes for every render. So all the functions inside the component will be recreated for every so it is an performance issue.</p><p><br></p><p>So we can use the useCallback hook to only recreate the function if any of the dependencies in the second param (dependencies list) is changed, React makes a shallow comparision(i.e reference comparision) of dependencies to find out the changes.</p><p><br></p><p>Every value used in the callback function should be mentioned in the dependencies list.</p><p><br></p>"}}),d=new y({props:{language:"javascript",uid:"287b1431-6b4d-11ea-8d59-1328692dfd92",data:"import React, {useEffect, useState} from 'react';\nimport ReactDOM from 'react-dom';\nimport './App.css';\n\nconst List = () => {\n    const [list, setList] = useState([]);\n\n    const itemClick = (name) => {\n        alert(name)\n    };\n\n    useEffect(() => {\n        let count = 0;\n        setInterval(() => {\n            setList(list => {\n                return [...list, \"item\" + count++]\n            });\n        }, 1000)\n    }, []);\n\n    return (\n        <React.Fragment>\n            {\n                list.map((item, index) => <ListItem key={item} name={item}\n                                                    click={itemClick}/>)\n            }\n        </React.Fragment>\n    );\n};\n\nconst ListItem = React.memo((props) => {\n    console.log(\"Rendering: \" + props.name);\n    return (\n        <p onClick={()=>{props.click(props.name)}}>{props.name}</p>\n    )\n});\n\nexport default List;\n\nReactDOM.render(<List/>, document.getElementById('root'));",pic:"/images/da86ed50-f336-11e9-b4ff-ad48fafeab92___a47f2da0-6cb5-11ea-be7d-4d9e3d4dc015.png",ratio:"7",highlight:""}}),f=new C({props:{data:'<p>W know that <a href="/courses/reactJs/reactComponents/reactMemo" target="_blank">React.memo</a> makes the reference equality check for for all the props and rerender conponent only when a prop is changed. If we run the above code for every second all the items in the list are re-rendered because <span style="background-color: black;"> itemClick() </span> is is re-created for every render (for every second inthis example) so the reference for <span style="background-color: black;"> itemClick </span> is changed for every render. So React.memo treats props are changed so all the ListItem are re-rendered.</p><p><br></p><p>So in this case <strong>useCallback</strong> does the job for us, let us wrap <span style="background-color: black;"> itemClick() </span> with <strong>useCallback</strong>.</p>'}}),u=new y({props:{language:"javascript",uid:"66457d41-6bee-11ea-8814-75a433d0b8be",data:"import React, {useEffect, useState, useCallback} from 'react';\nimport ReactDOM from 'react-dom';\nimport './App.css';\n\nconst List = () => {\n    const [list, setList] = useState([]);\n\n    const itemClick = useCallback((name) => {\n        alert(name)\n    }, []);\n\n    useEffect(() => {\n        let count = 0;\n        setInterval(() => {\n            setList(list => {\n                return [...list, \"item\" + count++]\n            });\n        }, 1000)\n    }, []);\n\n    return (\n        <React.Fragment>\n            {\n                list.map((item, index) => <ListItem key={item} name={item}\n                                                    click={itemClick}/>)\n            }\n        </React.Fragment>\n    );\n};\n\nconst ListItem = React.memo((props) => {\n    console.log(\"Rendering: \" + props.name);\n    return (\n        <p onClick={()=>{props.click(props.name)}}>{props.name}</p>\n    )\n});\n\nexport default List;\n\nReactDOM.render(<List/>, document.getElementById('root'));",pic:"/images/da86ed50-f336-11e9-b4ff-ad48fafeab92___91027840-6cb5-11ea-be7d-4d9e3d4dc015.png",ratio:"7",highlight:"8-10"}}),g=new C({props:{data:'<p>Here output is as expected a ListItem is created only once.</p><p><br></p><p>Here as useCallback is not dependent on any variable we have passed empty array. So useCallback is executed only once. For every render useCallback returns the memoized function (i.e, same function if dependencies are not changed). So <span style="background-color: black;"> </span><span style="background-color: black; color: rgb(255, 255, 255);">itemClick </span> passes the reference equality check of <strong>React.memo </strong>and prevents unnecessary re-renders.</p>'}});return{c(){e(p.$$.fragment),e(m.$$.fragment),e(l.$$.fragment),e(d.$$.fragment),e(f.$$.fragment),e(u.$$.fragment),e(g.$$.fragment)},l(e){n(p.$$.fragment,e),n(m.$$.fragment,e),n(l.$$.fragment,e),n(d.$$.fragment,e),n(f.$$.fragment,e),n(u.$$.fragment,e),n(g.$$.fragment,e)},m(e,n){t(p,e,n),t(m,e,n),t(l,e,n),t(d,e,n),t(f,e,n),t(u,e,n),t(g,e,n),i=!0},p:a,i(e){i||(s(p.$$.fragment,e),s(m.$$.fragment,e),s(l.$$.fragment,e),s(d.$$.fragment,e),s(f.$$.fragment,e),s(u.$$.fragment,e),s(g.$$.fragment,e),i=!0)},o(e){r(p.$$.fragment,e),r(m.$$.fragment,e),r(l.$$.fragment,e),r(d.$$.fragment,e),r(f.$$.fragment,e),r(u.$$.fragment,e),r(g.$$.fragment,e),i=!1},d(e){o(p,e),o(m,e),o(l,e),o(d,e),o(f,e),o(u,e),o(g,e)}}}function w(a){let $,h,b;const k=new v({props:{$$slots:{default:[R]},$$scope:{ctx:a}}});return{c(){$=c("meta"),h=i(),e(k.$$.fragment),this.h()},l(e){const t=p('[data-svelte="svelte-vsedzf"]',document.head);$=m(t,"META",{name:!0,content:!0}),t.forEach(l),h=d(e),n(k.$$.fragment,e),this.h()},h(){document.title="React useCallback",f($,"name","description"),f($,"content","React useCallback")},m(e,n){u(document.head,$),g(e,h,n),t(k,e,n),b=!0},p(e,[n]){const t={};1&n&&(t.$$scope={dirty:n,ctx:e}),k.$set(t)},i(e){b||(s(k.$$.fragment,e),b=!0)},o(e){r(k.$$.fragment,e),b=!1},d(e){l($),e&&l(h),o(k,e)}}}export default class extends ${constructor(e){super(),h(this,e,null,w,b,{})}}
