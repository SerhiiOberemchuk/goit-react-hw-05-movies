"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[13],{13:function(t,r,e){e.r(r);var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(553),i=e(791),o=e(689),f=e(184);r.default=function(){var t=(0,i.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],p=(0,o.UO)().id;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Z6)(p);case 3:r=t.sent,c(r.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[p]),(0,f.jsx)("div",{className:"my-3",children:e.length?(0,f.jsx)("ul",{children:e.map((function(t){var r=t.name,e=t.id,n=t.profile_path,a=t.character;return(0,f.jsxs)("li",{className:"py-3",children:[(0,f.jsx)("img",{src:n&&"https://image.tmdb.org/t/p/w200/".concat(n),alt:r,height:300,className:"mb-2"}),(0,f.jsx)("h4",{className:"mb-2",children:r}),(0,f.jsxs)("h5",{children:["Character: ",a]})]},e)}))}):(0,f.jsx)("div",{children:"We don`t have casts for this movie"})})}},553:function(t,r,e){e.d(r,{Hg:function(){return s},TP:function(){return i},Z6:function(){return o},qF:function(){return p},tx:function(){return f}});var n=e(861),a=e(757),c=e.n(a),u=e(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"cba4a9d06446c18bc3af1e3af31e1bf6",language:"en-US"};var s=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/all/day");case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(r,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?query=".concat(r,"&include_adult=false&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=13.7c2e8cc7.chunk.js.map