(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),i=(a(96),a(14)),o=a(15),s=a(18),u=a(16),m=a(17),h=a(31),d=a(8),g=a(3),p=a.n(g),f=a(10),b=a(4),E=a.n(b),v=E()({input:{borderRadius:".5rem",height:"3rem",width:"25rem",paddingLeft:"1rem",border:".3rem white solid",backgroundColor:"#282c34",color:"white"}})(function(e){var t=e.classes,a=Object(f.a)(e,["classes"]);return r.a.createElement("input",Object.assign({type:"text",className:t.input,placeholder:"Enter repozitory name . . .",name:"searchInput"},a))});var w=function(e){return r.a.createElement(v,{onChange:e.handleChangeInput,value:e.value})},P=a(49),O=a.n(P),j=a(88),C=a.n(j),k=a(84),y=a.n(k),I=a(87),S=a.n(I),x=a(48),N=a.n(x),D=a(30),B=a.n(D),R=a(85),z=a.n(R),_=a(86),L=a.n(_),J=a(79),M=a.n(J),T=E()({loader:{color:"white"}})(function(e){var t=e.classes;return r.a.createElement(M.a,{className:t.loader})});var Y=function(){return r.a.createElement(T,null)},F=a(80),W=a.n(F),A=a(81),G=a.n(A),Q=a(82),U=a.n(Q),X=a(83),q=a.n(X),V=E()({select:{},option:{}})(function(e){var t=e.classes,a=Object(f.a)(e,["classes"]);return r.a.createElement("select",Object.assign({type:"select",className:t.input},a),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:10},"10"),r.a.createElement("option",{value:15},"15"))});var Z=function(e){var t=e.onChangeRowsPerPage,a=e.rowsPerPage;return r.a.createElement(V,{onChange:t,value:a})},$={iconButton:{color:"white"},div:{color:"white",fontSize:"1.2rem",marginRight:"1rem"}},H=E()($)(function(e){var t=e.classes,a=e.children,n=Object(f.a)(e,["classes","children"]);return r.a.createElement(B.a,Object.assign({className:t.iconButton},n),a)}),K=E()($)(function(e){var t=e.classes,a=e.children;return r.a.createElement("div",{className:t.div},a)}),ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleFirstPageButtonClick=function(e){a.props.onChangePage(e,0)},a.handleBackButtonClick=function(e){a.props.onChangePage(e,a.props.page-1)},a.handleNextButtonClick=function(e){a.props.onChangePage(e,a.props.page+1)},a.handleLastPageButtonClick=function(e){a.props.onChangePage(e,Math.max(0,Math.ceil(a.props.count/a.props.rowsPerPage)-1))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.count,a=e.page,n=e.rowsPerPage;return r.a.createElement(p.a,{container:!0,style:{alignItems:"center",justifyContent:"flex-end"}},r.a.createElement(p.a,{item:!0},r.a.createElement(K,null,"Rows per page: ")),r.a.createElement(p.a,{item:!0},r.a.createElement(Z,{onChangeRowsPerPage:this.props.onChangeRowsPerPage,rowsPerPage:this.props.rowsPerPage})),r.a.createElement(p.a,{item:!0},r.a.createElement(H,{onClick:this.handleFirstPageButtonClick,disabled:0===a,"aria-label":"First Page"},r.a.createElement(W.a,null))),r.a.createElement(p.a,{item:!0},r.a.createElement(H,{onClick:this.handleBackButtonClick,disabled:0===a,"aria-label":"Previous Page"},r.a.createElement(G.a,null))),r.a.createElement(p.a,{item:!0},r.a.createElement(H,{onClick:this.handleNextButtonClick,disabled:a>=Math.ceil(t/n)-1,"aria-label":"Next Page"},r.a.createElement(U.a,null))),r.a.createElement(p.a,{item:!0},r.a.createElement(H,{onClick:this.handleLastPageButtonClick,disabled:a>=Math.ceil(t/n)-1,"aria-label":"Last Page"},r.a.createElement(q.a,null))))}}]),t}(n.Component),te={tableCell:{color:"white",fontSize:"1.6rem",width:"13rem"},arrowUp:{color:"white",zIndex:-1},arrowDown:{color:"white",zIndex:-1},activeRow:{cursor:"pointer","&:hover":{backgroundColor:"#434956"}},"@media (max-width: 1024px)":{tableCell:{width:"7rem"}},"@media (max-width: 640px)":{tableCell:{width:"5rem"}}},ae=E()(te)(function(e){var t=e.classes,a=e.children,n=Object(f.a)(e,["classes","children"]);return r.a.createElement(N.a,Object.assign({className:t.activeRow},n),a)}),ne=E()(te)(function(e){var t=e.classes,a=e.children;return r.a.createElement(y.a,{className:t.tableCell},a)}),re=E()(te)(function(e){var t=e.classes,a=Object(f.a)(e,["classes"]);return r.a.createElement(z.a,Object.assign({className:t.arrowUp},a))}),ce=E()(te)(function(e){var t=e.classes,a=Object(f.a)(e,["classes"]);return r.a.createElement(L.a,Object.assign({className:t.arrowDown},a))}),le=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={page:0,rowsPerPage:5},e.handleChangePage=e.handleChangePage.bind(Object(d.a)(Object(d.a)(e))),e.handleChangeRowsPerPage=e.handleChangeRowsPerPage.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChangePage",value:function(e,t){this.setState({page:t})}},{key:"handleChangeRowsPerPage",value:function(e){this.setState({page:0,rowsPerPage:+e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.page,n=t.rowsPerPage,c=this.props.data.slice(a*n,a*n+n).map(function(t,c){return r.a.createElement(ae,{key:c,"data-index":0===a?c:a*n+c,onClick:e.props.triggerPopup},r.a.createElement(ne,null,t.id),r.a.createElement(ne,null,t.name),r.a.createElement(ne,null,t.owner.login),r.a.createElement(ne,null,t.stargazers_count),r.a.createElement(ne,null,t.created_at.slice(0,10)))});return r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(N.a,null,[{title:"ID",name:"id"},{title:"Repo Title",name:"name"},{title:"Owner",name:"owner"},{title:"Stars",name:"stargazers_count"},{title:"Created at",name:"created_at"}].map(function(t){return r.a.createElement(ne,{key:t.name},t.title,r.a.createElement(B.a,{onClick:e.props.handleSort,"data-sort":t.name},"asc"===e.props.state[t.name]?r.a.createElement(re,null):r.a.createElement(ce,null)))})))),this.props.isLoading?r.a.createElement(p.a,{item:!0,style:{marginTop:"2rem"}},r.a.createElement(Y,null)):r.a.createElement(O.a,null,r.a.createElement(C.a,null,c))),r.a.createElement(ee,{onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,rowsPerPage:this.state.rowsPerPage,page:this.state.page,count:30}))}}]),t}(n.Component),ie=a(89),oe=a.n(ie),se=a(90),ue=a.n(se),me={popup:{position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)",backgroundColor:"white",width:"40rem",height:"auto",borderRadius:".5rem",flexDirection:"column",zIndex:"2",boxShadow:"0 .5rem 1rem rgba(0, 0, 0, 1)",padding:"1rem"},button:{marginTop:"2rem",color:"#282c34",backgroundColor:"white",fontWeight:"900",borderBottom:"1px solid #282c34",display:"inline-block",textDecoration:"none",padding:"1rem",fontSize:"1.4rem",transition:"all .2s",outline:"none !important",border:"none",marginBottom:"1.5rem",transform:"translateZ(0) scale(1.0, 1.0)",backfaceVisibility:"hidden","&:hover":{backgroundColor:"#282c34",color:"white",boxShadow:"0 1rem 2rem rgba(0, 0, 0, .4)",transform:"translateY(-2px)"},"&:active":{boxShadow:"0 .5rem 1rem rgba(0, 0, 0, .4)",transform:"translateY(0)"}}},he=E()(me)(function(e){var t=e.classes,a=e.children,n=Object(f.a)(e,["classes","children"]);return r.a.createElement("a",{className:t.button,href:n.data[n.selectedItem].html_url,target:"_blank"},a)}),de=E()(me)(function(e){var t=e.classes,a=Object(f.a)(e,["classes"]);return r.a.createElement(p.a,{container:!0,className:t.popup},r.a.createElement(p.a,{item:!0,style:{marginLeft:"auto"}},r.a.createElement(ue.a,{style:{cursor:"pointer",color:"#282c34"},onClick:a.triggerPopup})),r.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(p.a,{item:!0},r.a.createElement("h1",{style:{color:"#282c34"}},a.data[a.selectedItem].name)),r.a.createElement(p.a,{item:!0},r.a.createElement("p",{style:{color:"#282c34"}},a.data[a.selectedItem].description)),r.a.createElement(p.a,{item:!0},r.a.createElement(he,a,"Go to repo \u2192"))))});var ge=function(e){return r.a.createElement(de,{triggerPopup:e.triggerPopup,data:e.data,selectedItem:e.selectedItem})},pe=E()({overlay:{zIndex:1,top:0,left:0,position:"absolute",backgroundColor:"rgba(0, 0, 0, .55)",width:"100%",height:"100%"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.overlay})});var fe=function(){return r.a.createElement(pe,null)},be=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={searchInput:"",fetchedData:[],isLoading:!0,id:"asc",name:"asc",owner:"asc",stargazers_count:"asc",created_at:"asc",isPopupOpen:!1,selectedItem:null},e.handleChangeInput=e.handleChangeInput.bind(Object(d.a)(Object(d.a)(e))),e.getData=oe()(e.getData,500),e.handleSort=e.handleSort.bind(Object(d.a)(Object(d.a)(e))),e.triggerPopup=e.triggerPopup.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData("tetris")}},{key:"handleChangeInput",value:function(e){var t;e.persist();var a=e.target,n=a.name,r=a.value;this.setState((t={},Object(h.a)(t,n,r),Object(h.a)(t,"isLoading",!0),t),function(){this.state.searchInput&&this.getData(this.state.searchInput)})}},{key:"getData",value:function(e){var t=this,a=JSON.parse(localStorage.getItem("cachedQuery")),n=JSON.parse(localStorage.getItem("cachedData"));n&&a&&e!==a&&"tetris"===e?this.setState({fetchedData:n,searchInput:a,isLoading:!1}):fetch("https://api.github.com/search/repositories?q=".concat(e)).then(function(e){return e.json()}).then(function(e){t.setState({fetchedData:e.items,isLoading:!1},function(){localStorage.setItem("cachedQuery",JSON.stringify(this.state.searchInput)),localStorage.setItem("cachedData",JSON.stringify(this.state.fetchedData))})})}},{key:"handleSort",value:function(e){var t,a,n,r;a="id"===(a=e.target.dataset.sort)||"name"===a||"owner"===a||"stargazers_count"===a||"created_at"===a?a:e.target.parentNode.dataset.sort,n="asc"===this.state[a]?"desc":"asc",r=this.state.fetchedData.sort(function(e,t){if("asc"===n){if("name"===a){if(e[a]>t[a])return-1;if(e[a]<t[a])return 1}else if("owner"===a){if(e[a].login>t[a].login)return-1;if(e[a].login<t[a].login)return 1}else if("created_at"===a)return e[a].slice(0,10).split("-").join("")-t[a].slice(0,10).split("-").join("");return e[a]-t[a]}if("name"===a){if(e[a]<t[a])return-1;if(e[a]>t[a])return 1}else if("owner"===a){if(e[a].login<t[a].login)return-1;if(e[a].login>t[a].login)return 1}else if("created_at"===a)return t[a].slice(0,10).split("-").join("")-e[a].slice(0,10).split("-").join("");return t[a]-e[a]}),this.setState((t={},Object(h.a)(t,a,n),Object(h.a)(t,"fetchedData",r),t))}},{key:"triggerPopup",value:function(e){var t=e.target.parentNode.dataset.index;this.setState(function(e){return{isPopupOpen:!e.isPopupOpen,selectedItem:t}})}},{key:"render",value:function(){return r.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(p.a,{item:!0},r.a.createElement(w,{handleChangeInput:this.handleChangeInput,value:this.state.searchInput})),r.a.createElement(p.a,{item:!0,style:{marginTop:"2rem"}},r.a.createElement(le,{data:this.state.fetchedData,isLoading:this.state.isLoading,handleSort:this.handleSort,triggerPopup:this.triggerPopup,state:this.state})),this.state.isPopupOpen&&r.a.createElement(ge,{triggerPopup:this.triggerPopup,selectedItem:this.state.selectedItem,data:this.state.fetchedData}),this.state.isPopupOpen&&r.a.createElement(fe,null))}}]),t}(n.Component),Ee={header:{fontSize:"6rem",paddingTop:"3rem",paddingBottom:"6rem",color:"white",textAlign:"center"},link:{cursor:"pointer",textDecoration:"none",color:"inherit",transition:"transform .3s ease-out",display:"inline-block","&:hover":{transform:"skewY(3deg) skewX(15deg) scale(1.1)"}},"@media (max-width: 640px)":{header:{fontSize:"4rem"}}},ve=E()(Ee)(function(e){var t=e.classes,a=e.children;return r.a.createElement("a",{className:t.link,href:"https://github.com",target:"_blank"},a)}),we=E()(Ee)(function(e){var t=e.classes,a=e.children;return r.a.createElement("div",{className:t.header},r.a.createElement(ve,null,a))});var Pe=function(){return r.a.createElement(we,null,"Github Repozitory Searcher")},Oe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{container:!0,justify:"center",direction:"column"},r.a.createElement(p.a,{item:!0},r.a.createElement(Pe,null)),r.a.createElement(p.a,{item:!0},r.a.createElement(be,null)))}}]),t}(n.Component),je=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(204)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.287e1f95.chunk.js.map