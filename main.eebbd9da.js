(()=>{"use strict";var e,n={883:(e,n,r)=>{var i=r(365),t=r(51),o=r(779),d=r(724),a=r(173),w=r(734),s=r(588);const c=new i.x,f=new t.c(75,window.innerWidth/window.innerHeight,.1,1e3);f.position.z=2;const p=new o.C;p.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(p.domElement);const u=new s.z(f,p.domElement),v=new d.D,h=new a.v({color:65280,wireframe:!0}),l=new w.K(v,h);function m(){p.render(c,f)}c.add(l),window.addEventListener("resize",(function(){f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight),m()}),!1),function e(){requestAnimationFrame(e),l.rotation.x+=.01,l.rotation.y+=.01,u.update(),m()}()}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.m=n,e=[],i.O=(n,r,t,o)=>{if(!r){var d=1/0;for(c=0;c<e.length;c++){for(var[r,t,o]=e[c],a=!0,w=0;w<r.length;w++)(!1&o||d>=o)&&Object.keys(i.O).every((e=>i.O[e](r[w])))?r.splice(w--,1):(a=!1,o<d&&(d=o));if(a){e.splice(c--,1);var s=t();void 0!==s&&(n=s)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,t,o]},i.d=(e,n)=>{for(var r in n)i.o(n,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0};i.O.j=n=>0===e[n];var n=(n,r)=>{var t,o,[d,a,w]=r,s=0;if(d.some((n=>0!==e[n]))){for(t in a)i.o(a,t)&&(i.m[t]=a[t]);if(w)var c=w(i)}for(n&&n(r);s<d.length;s++)o=d[s],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var t=i.O(void 0,[825],(()=>i(883)));t=i.O(t)})();