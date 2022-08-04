"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[422],{9044:function(n,e,t){t.d(e,{a:function(){return s}});var r,a=t(4772),i=t(168),o=t(6088).Z.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),c=t(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.g4,{color:"#00BFFF",height:80,width:80})})}},4422:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return O}});var r,a,i,o,c,s,u,l,d=t(5861),p=t(885),f=t(7757),h=t.n(f),v=t(2791),x=t(6871),m=t(168),g=t(6088),w=t(501),b=t(33),j=g.Z.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  margin-bottom: ",";\n  box-shadow: ",";\n  background-color: ",";\n\n  @media screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n    height: 360px;\n  }\n"])),b.r.spacing(5),b.r.shadows.regular,b.r.colors.sand),Z=g.Z.img(a||(a=(0,m.Z)(["\n  height: auto;\n  max-width: 100%;\n\n  @media screen and (min-width: 768px) {\n    height: 100%;\n    max-width: 280px;\n  }\n"]))),y=g.Z.div(i||(i=(0,m.Z)(["\n  padding: 24px;\n  overflow-y: auto;\n"]))),k=g.Z.ul(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n"]))),_=g.Z.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ",";\n  background-color: ",";\n  box-shadow: ",";\n  margin-bottom: ",";\n"])),b.r.spacing(3),b.r.colors.sand,b.r.shadows.regular,b.r.spacing(5)),S=g.Z.h3(s||(s=(0,m.Z)(["\n  font-size: ",";\n  margin-bottom: ",";\n"])),b.r.fontSizes.medium,b.r.spacing(2)),z=(0,g.Z)(w.OL)(u||(u=(0,m.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-size: ",";\n  color: black;\n  font-weight: 500;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &.active {\n    color: white;\n    background-color: ",";\n  }\n"])),b.r.fontSizes.medium,b.r.colors.royalBlue),U=g.Z.p(l||(l=(0,m.Z)(["\n  font-size: ",";\n"])),b.r.fontSizes.medium),M=t(9044),C=t(6481),F=t(4635),I=t(184),O=function(){var n,e,t,r,a,i,o=(0,v.useState)({}),c=(0,p.Z)(o,2),s=c[0],u=c[1],l=(0,v.useState)([]),f=(0,p.Z)(l,2),m=f[0],g=f[1],w=(0,v.useState)(null),b=(0,p.Z)(w,2),O=b[0],P=b[1],T=(0,v.useState)(!1),B=(0,p.Z)(T,2),E=B[0],G=B[1],q=(0,x.UO)().movieId,A=(0,x.TH)(),D=null!==(n=null===A||void 0===A||null===(e=A.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,v.useEffect)((function(){var n=function(){var n=(0,d.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return G(!0),n.prev=1,n.next=4,(0,F.TP)(q);case 4:e=n.sent,u(e),g(e.genres),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),P(n.t0.message);case 12:return n.prev=12,G(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[q]);var H=s.title,J=s.vote_average,L=s.overview,Q=s.poster_path;return(0,I.jsxs)("main",{children:[E&&(0,I.jsx)(M.a,{}),O&&(0,I.jsx)(U,{children:"Movie is not available \ud83d\ude15. Please, try again later"}),!O&&(0,I.jsxs)("section",{children:[(0,I.jsx)(z,{to:D,children:"Go back"}),(0,I.jsxs)(j,{children:[(0,I.jsx)(Z,{src:Q?"".concat(F.lM).concat(Q):C,alt:H,loading:"lazy"}),(0,I.jsxs)(y,{children:[(0,I.jsx)("h1",{children:H}),(0,I.jsxs)("p",{children:["User score: ",Math.round(10*J),"%"]}),(0,I.jsx)("h3",{children:"Overview"}),(0,I.jsx)("p",{children:L}),(0,I.jsx)("h3",{children:"Genres"}),(0,I.jsx)(k,{children:m.map((function(n,e){var t=n.name;return(0,I.jsxs)("li",{children:[t," "]},e+1)}))})]})]}),(0,I.jsxs)(_,{children:[(0,I.jsx)(S,{children:"Additianal information"}),(0,I.jsxs)("ul",{children:[(0,I.jsx)(z,{to:"cast",state:{from:null!==(t=null===A||void 0===A||null===(r=A.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"}),(0,I.jsx)(z,{to:"reviews",state:{from:null!==(a=null===A||void 0===A||null===(i=A.state)||void 0===i?void 0:i.from)&&void 0!==a?a:"/"},children:"Reviews"})]})]})]}),(0,I.jsx)(v.Suspense,{fallback:null,children:(0,I.jsx)(x.j3,{})})]})}},4635:function(n,e,t){t.d(e,{IQ:function(){return p},Jh:function(){return f},TP:function(){return d},cI:function(){return l},lM:function(){return u},mE:function(){return h}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o),s="18ae920eccc30023e44661ce76c3e71c",u="https://image.tmdb.org/t/p/w500",l=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("https://api.themoviedb.org/3/movie/popular?api_key=".concat(s,"&language=en-US"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6481:function(n,e,t){n.exports=t.p+"static/media/image_not_available.cf7bdd9ed793b51038df.jpg"}}]);
//# sourceMappingURL=422.62a2e652.chunk.js.map