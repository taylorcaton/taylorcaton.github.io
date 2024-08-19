(function(){"use strict";var n={22:function(n,t,e){var i=e(242),r=e(396),o=e(139);function s(n,t,e,i,s,a){const l=(0,r.up)("star-field"),c=(0,r.up)("Portfolio");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{isRunning:n.isRunning},null,8,["isRunning"]),(0,r.Wm)(c,{isRunning:n.isRunning},null,8,["isRunning"]),(0,r._)("button",{class:(0,o.C_)(["button is-small toggle-stars",{"is-dark":n.isRunning,"is-black":!n.isRunning}]),onClick:t[0]||(t[0]=t=>n.isRunning=!n.isRunning)}," Toggle Animation ",2)],64)}const a=n=>((0,r.dD)("data-v-37b79c6c"),n=n(),(0,r.Cn)(),n),l={class:"heading-container"},c={class:"title is-spaced"},u={class:"subtitle",id:"typewriter","aria-label":"Professional full-stack developer, teacher, ADA enthusiast, and musician with a proven track record of leading\n        front-end teams to deliver high-quality results."},d={class:"subtitle"},h=a((()=>(0,r._)("a",{href:"https://github.com/taylorcaton",target:"_blank"},[(0,r._)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"github-logo"},[(0,r._)("title",null,"GitHub"),(0,r._)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577\n            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633\n            17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809\n             1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93\n              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3\n               1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23\n                3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805\n                 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0\n                  .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]),(0,r.Uk)(" GitHub ")],-1))),f=a((()=>(0,r._)("a",{href:"https://www.linkedin.com/in/taylorcaton/",target:"_blank"},[(0,r._)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("title",null,"LinkedIn"),(0,r._)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136\n             2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37\n              4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063\n               2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782\n                13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0\n                 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2\n                  0 22.222 0h.003z"})]),(0,r.Uk)(" Linkedin ")],-1)));function g(n,t,e,s,a,g){return(0,r.wg)(),(0,r.iD)("section",{class:(0,o.C_)(["container",{rock:this.isAnimated}])},[(0,r._)("div",l,[(0,r._)("h1",c,[(0,r._)("span",{class:(0,o.C_)({wave:this.isAnimated})},"✌🏻 ",2),(0,r._)("span",{class:(0,o.C_)({gemini:this.isAnimated})},"Taylor Caton",2)]),(0,r.wy)((0,r._)("p",u,null,512),[[i.F8,this.isAnimated]]),(0,r.wy)((0,r._)("p",d," Professional full-stack developer, teacher, ADA enthusiast, and musician with a proven track record of leading front-end teams to deliver high-quality results. ",512),[[i.F8,!this.isAnimated]]),h,f])],2)}var p=e(863),m=e.n(p),v={name:"PortfolioContainer",props:{isRunning:Boolean},data(){return{isAnimated:this.isRunning,typer:null}},watch:{isRunning(){this.isAnimated=this.isRunning,this.isAnimated&&this.runTyper()}},mounted(){this.runTyper()},methods:{runTyper(){this.typer||(this.typer=new(m())("#typewriter",{delay:70}),this.typer.pauseFor(2500).typeString('Professional <strong style="color:#ffe81f">full-stack developer</strong>, speaker, ').pauseFor(300).deleteChars(9).typeString('<strong style="color:#ffe81f">teacher</strong>, <strong style="color:#ffe81f">ADA enthusiast</strong>, and <strong style="color:#ffe81f">musician</strong> ').typeString("with a proven track record of leading front-end teams to deliver high-quality results.").pauseFor(1e3).start())}}},y=e(89);const w=(0,y.Z)(v,[["render",g],["__scopeId","data-v-37b79c6c"]]);var b=w;const _={id:"canvas",style:{width:"100%",height:"100%",padding:"0",margin:"0"}};function k(n,t,e,i,o,s){return(0,r.wg)(),(0,r.iD)("canvas",_)}var A={name:"StarField",props:{isRunning:Boolean},data(){return{isAnimated:this.isRunning}},mounted(){const n=document.getElementById("canvas"),t=n.getContext("2d");let e,i;const r=()=>{e=document.body.clientWidth,i=document.body.clientHeight,n.width=e,n.height=i};r(),window.onresize=()=>{r()};const o=n=>{const t=[];for(let e=0;e<n;e+=1){const n={x:1600*Math.random()-800,y:900*Math.random()-450,z:1e3*Math.random()};t.push(n)}return t},s=o(2e3),a=()=>{t.fillStyle="black",t.fillRect(0,0,n.width,n.height)},l=(n,e,i)=>{const r=255*i,o=r<200?1:2,s=`rgb(${r},${r},${r})`;t.fillStyle=s,t.fillRect(n,e,o,o)},c=n=>{if(this.isAnimated){const t=s.length;for(let e=0;e<t;e+=1){const t=s[e];t.z-=n;while(t.z<=1)t.z+=1e3}}};let u;const d=n=>{u=n,requestAnimationFrame(h)},h=n=>{const t=n-u;u=n,c(.1*t),a();const r=e/2,o=i/2,d=s.length;for(let a=0;a<d;a+=1){const n=s[a],t=r+n.x/(.001*n.z),c=o+n.y/(.001*n.z);if(t<0||t>=e||c<0||c>=i)continue;const u=n.z/1e3,d=1-u*u;l(t,c,d)}requestAnimationFrame(h)};requestAnimationFrame(d)},watch:{isRunning(){this.isAnimated=this.isRunning}}};const R=(0,y.Z)(A,[["render",k]]);var C=R,x={name:"App",components:{Portfolio:b,"star-field":C},data:()=>({isRunning:!0})};const z=(0,y.Z)(x,[["render",s]]);var O=z;(0,i.ri)(O).mount("#app")}},t={};function e(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return n[i].call(o.exports,o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,i,r,o){if(!i){var s=1/0;for(u=0;u<n.length;u++){i=n[u][0],r=n[u][1],o=n[u][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(e.O).every((function(n){return e.O[n](i[l])}))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){n.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[i,r,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,i){var r,o,s=i[0],a=i[1],l=i[2],c=0;if(s.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(l)var u=l(e)}for(t&&t(i);c<s.length;c++)o=s[c],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(u)},i=self["webpackChunktaylor_caton"]=self["webpackChunktaylor_caton"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(22)}));i=e.O(i)})();
//# sourceMappingURL=app.2bda1793.js.map