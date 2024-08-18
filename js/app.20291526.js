(function(){"use strict";var n={442:function(n,t,e){var r=e(242),o=e(396);function i(n,t,e,r,i,a){const s=(0,o.up)("star-field"),c=(0,o.up)("Portfolio");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s,{runStars:n.runStars},null,8,["runStars"]),(0,o.Wm)(c),(0,o._)("button",{class:"button is-small is-dark toggle-stars",onClick:t[0]||(t[0]=t=>n.runStars=!n.runStars)}," Toggle Animation ")],64)}const a=n=>((0,o.dD)("data-v-8921d05e"),n=n(),(0,o.Cn)(),n),s={class:"container"},c=a((()=>(0,o._)("div",{class:"heading-container"},[(0,o._)("h1",{class:"title"},[(0,o._)("span",{class:"wave"},"✌🏻"),(0,o.Uk)(" Taylor Caton")]),(0,o._)("p",{class:"subtitle"}," Experienced full-stack developer, teacher, ADA enthusiast, and musician with a proven track record of leading front-end teams to deliver high-quality projects. "),(0,o._)("a",{href:"https://github.com/taylorcaton",target:"_blank"},[(0,o._)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"github-logo"},[(0,o._)("title",null,"GitHub"),(0,o._)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577\n            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633\n            17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809\n             1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93\n              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3\n               1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23\n                3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805\n                 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0\n                  .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]),(0,o.Uk)(" GitHub ")]),(0,o._)("a",{href:"https://www.linkedin.com/in/taylorcaton/",target:"_blank"},[(0,o._)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("title",null,"LinkedIn"),(0,o._)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136\n             2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37\n              4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063\n               2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782\n                13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0\n                 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2\n                  0 22.222 0h.003z"})]),(0,o.Uk)(" Linkedin ")])],-1))),l=[c];function u(n,t,e,r,i,a){return(0,o.wg)(),(0,o.iD)("section",s,l)}var h={name:"PortfolioContainer",props:{msg:String}},d=e(89);const f=(0,d.Z)(h,[["render",u],["__scopeId","data-v-8921d05e"]]);var g=f;const v={id:"canvas",style:{width:"100%",height:"100%",padding:"0",margin:"0"}};function p(n,t,e,r,i,a){return(0,o.wg)(),(0,o.iD)("canvas",v)}var m={name:"StarField",props:{runStars:Boolean},data(){return{isRunning:this.runStars}},mounted(){const n=document.getElementById("canvas"),t=n.getContext("2d");let e,r;const o=()=>{e=document.body.clientWidth,r=document.body.clientHeight,n.width=e,n.height=r};o(),window.onresize=()=>{o()};const i=n=>{const t=[];for(let e=0;e<n;e+=1){const n={x:1600*Math.random()-800,y:900*Math.random()-450,z:1e3*Math.random()};t.push(n)}return t},a=i(3e3),s=()=>{t.fillStyle="black",t.fillRect(0,0,n.width,n.height)},c=(n,e,r)=>{const o=255*r,i=o<200?1:2,a=`rgb(${o},${o},${o})`;t.fillStyle=a,t.fillRect(n,e,i,i)},l=n=>{if(this.isRunning){const t=a.length;for(let e=0;e<t;e+=1){const t=a[e];t.z-=n;while(t.z<=1)t.z+=1e3}}};let u;const h=n=>{u=n,requestAnimationFrame(d)},d=n=>{const t=n-u;u=n,l(.1*t),s();const o=e/2,i=r/2,h=a.length;for(let s=0;s<h;s+=1){const n=a[s],t=o+n.x/(.001*n.z),l=i+n.y/(.001*n.z);if(t<0||t>=e||l<0||l>=r)continue;const u=n.z/1e3,h=1-u*u;c(t,l,h)}requestAnimationFrame(d)};requestAnimationFrame(h)},watch:{runStars(n,t){console.log("runStars changed: ",n," | was: ",t),this.isRunning=this.runStars}}};const w=(0,d.Z)(m,[["render",p]]);var b=w,y={name:"App",components:{Portfolio:g,"star-field":b},data:()=>({runStars:!0})};const _=(0,d.Z)(y,[["render",i]]);var k=_;(0,r.ri)(k).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var a=1/0;for(u=0;u<n.length;u++){r=n[u][0],o=n[u][1],i=n[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){n.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[r,o,i]}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==n[t]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(c)var u=c(e)}for(t&&t(r);l<a.length;l++)i=a[l],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(u)},r=self["webpackChunktaylor_caton"]=self["webpackChunktaylor_caton"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(442)}));r=e.O(r)})();
//# sourceMappingURL=app.20291526.js.map