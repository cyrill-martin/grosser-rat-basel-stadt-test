import{_ as Me,bc as Ae,i as Se,j as Ce,n as w,r as x,c as g,o as Q,f as j,d as ee,b as k,au as De,Z as ze,a9 as Fe}from"./index-D0ja2nV0.js";import{d as i,a as te,c as N,o as Te,b as C,f as ae}from"./customColors-Dr-dxzXd.js";import{d as Oe}from"./debounce-B_grFKK4.js";const Ie={id:"tooltip"},_e={key:0,class:"headshot"},He={class:"url"},Ve=20,Xe={__name:"TheGrandCouncil",setup($e){const v=Ae(),s=Se();Ce(()=>{f.value=i.select("#tooltip"),E(),s.numberOfFetches>0&&F()}),w(()=>v.width,()=>{ne()});const ne=Oe(()=>{le()},200);async function le(){i.select("#svg-visualization").remove(),await E(),await W(b.value),u.value==="occupation"&&await R("increased")}const $=x(null),D=x(null),l=x({width:null,height:null,margin:{top:null,right:null,bottom:null,left:null},ctrWidth:null,ctrHeight:null}),b=g(()=>s.asOfDate&&s.membersAsOfDate?s.membersAsOfDate:s.membersCurrent),u=g(()=>s.seatArrangement?s.seatArrangement:""),c=g(()=>s.seatFeature),B=g(()=>s.memberFocus),p=g(()=>{if(!u.value)return[""];const e=P(u.value);if(z(e[0])){const t=i.min(e),n=i.max(e);return n-t>100&&t===0?[1,n]:t===n?[t,1]:[t,n]}return e.sort()});function z(e){return Number.isInteger(Number(e))}function P(e){return Array.from(new Set(b.value.map(t=>t[e])))}const o=g(()=>{const t=typeof p.value[0]=="string",n=p.value[1]<=100;return t?{type:"band"}:n?{type:"linear"}:{type:"log"}});w(()=>o.value,(e,t)=>{const n=e.type!==t.type;oe(n)},{deep:!1}),w(()=>u.value,async(e,t)=>{await F(),e==="occupation"&&await R("increased"),t==="occupation"&&await R("regular")}),w(()=>c.value,()=>{F()}),w(()=>B.value,()=>{W(b.value)});const h=x(null),M=x(null);w(()=>s.newFetchingDone,async e=>{e&&F()});const Y=x(null);async function E(){await re(),await K()}async function re(){const e=i.select("#grand-council-basel");await ie(e),$.value=e.append("svg").attr("id","svg-visualization").attr("viewBox",`0 0 ${l.value.width} ${l.value.height}`),D.value=$.value.append("g").attr("id","visualization-ctr").attr("transform",`translate(${l.value.margin.left}, ${l.value.margin.top})`)}async function R(e){const t=e==="increased"?O.value*100*1.1:l.value.height,n=e==="increased"?"270":"0",r=i.transition().duration(2500),m=r.transition().duration(1500);await $.value.transition(r).attr("viewBox",`0 0 ${l.value.width} ${t}`).attr("transform",`rotate(${n})`),e==="increased"&&await M.value.selectAll("text").transition(m).style("text-anchor","start").style("font-size",()=>v.isMobile?"6px":"14px").attr("dy",()=>v.isMobile?"-0.1rem":".1rem").attr("dx",()=>-l.value.ctrHeight+T.value*d.value*2).attr("transform","rotate(90)")}async function ie(e){l.value.width=e.node().getBoundingClientRect().width;const t=v.isMobile?.5:.3;l.value.height=l.value.width*t,l.value.margin.top=v.isMobile?10:50,l.value.margin.right=v.isMobile?5:25,l.value.margin.bottom=v.isMobile?18:25,l.value.margin.left=v.isMobile?5:25,l.value.ctrWidth=l.value.width-l.value.margin.left-l.value.margin.right,l.value.ctrHeight=l.value.height-l.value.margin.top-l.value.margin.bottom}async function F(){await b.value.sort((r,m)=>{if(u.value){if(r[u.value]<m[u.value])return-1;if(r[u.value]>m[u.value])return 1}if(c.value){if(r[c.value]<m[c.value])return-1;if(r[c.value]>m[c.value])return 1}else{if(r.name<m.name)return-1;if(r.name>m.name)return 1}});let e=null,t=-1,n=-1;b.value.forEach(r=>{r[u.value]!==e?(e=r[u.value],t=0):t+=1,r.innerIndex=t,t>n&&(n=t)}),T.value=n+1,console.log(b.value),await ye(),await W(b.value)}async function K(){await ue(),await se()}async function ue(){o.value.type==="band"?h.value=i.scaleBand().domain(p.value).range([0,l.value.ctrWidth]).paddingInner(.2).paddingOuter(.2).align(.5):o.value.type==="linear"?h.value=i.scaleLinear().domain(p.value).range([0,l.value.ctrWidth]).nice():h.value=i.scaleLog().domain(p.value).range([l.value.ctrWidth*.05,l.value.ctrWidth]).base(2).nice()}async function se(){M.value=D.value.append("g").attr("id","x-axis").attr("transform",`translate(0, ${l.value.ctrHeight})`).style("font-size",()=>v.isMobile?"8px":"14px"),Z()}async function oe(e){e?(i.select("#x-axis").remove(),K()):(h.value.domain(p.value),Z())}function Z(){const e=i.formatLocale({thousands:"'",grouping:[3]}).format(",.0f"),t=i.axisBottom(h.value);if(o.value.type==="band"&&t.tickSize(0),o.value.type==="linear"){const n=p.value[1]<10?p.value[1]:12;t.tickSize(-l.value.ctrHeight).ticks(n).tickPadding(10).tickSizeOuter(0).tickFormat(e)}o.value.type==="log"&&t.tickSize(-l.value.ctrHeight).ticks(5).tickPadding(10).tickSizeOuter(0).tickFormat(e),M.value.transition().call(t),o.value.type==="band"?M.value.call(n=>n.select(".domain").remove()):M.value.selectAll(".tick line").style("stroke","lightgrey").style("stroke-dasharray","4,2")}const T=x(0),A=g(()=>o.value.type==="band"?Math.ceil(Ve/p.value.length):1),q=g(()=>o.value.type==="band"?Math.ceil(T.value/A.value):T.value),ce=g(()=>o.value.type==="band"?h.value.bandwidth():null),O=g(()=>o.value.type==="band"?ce.value/A.value:l.value.ctrWidth/(p.value[1]-p.value[0])),I=g(()=>l.value.ctrHeight/q.value),d=g(()=>{const t=O.value/2*.9,n=I.value/2*.9;return o.value.type==="band"?q.value>A.value?Math.min(t,n):t:o.value.type==="linear"?Math.min(t,n):v.isMobile?3.3:5});function _(e){return o.value.type==="band"?ve(e):o.value.type==="linear"?de(e):ge(e)}function H(e,t="update"){return t==="enter"?-d.value*2:t==="exit"?l.value.ctrHeight+d.value*2:o.value.type==="band"?fe(e):o.value.type==="linear"?me(e):pe(e)}function ve(e){const t=u.value?e[u.value]:"",n=e.innerIndex%A.value;return h.value(t)+n*O.value+O.value/2}function fe(e){const t=Math.floor(e.innerIndex/A.value);return u.value!=="occupation"?p.value[0]===""?t*I.value+I.value/2:t*I.value:t*d.value*2}function de(e){return h.value(e[u.value])}function me(e){return l.value.ctrHeight-d.value-e.innerIndex*d.value*2}function ge(e){return e[u.value]!==0?h.value(e[u.value]):10}function pe(e){return l.value.ctrHeight-d.value-e.innerIndex*d.value*2}const U=g(()=>o.value.type==="log"?.65:.9);function he(e){return e in N||z(e)}const L=g(()=>{if(!c.value)return{};const e=P(c.value),t=z(e[0]);let n,r;if(t){const m=i.min(e),y=i.max(e);n=y-m>100?"log":"linear",r=y-m>100&&m===0?[1,y]:[m,y]}else n=he(c.value)?"custom":"ordinal",r=e.sort();return{type:n,domain:r}});async function ye(){const{type:e,domain:t}=L.value,n={ordinal:()=>i.scaleOrdinal().domain(t).range(Te),linear:()=>i.scaleLinear().domain(t).range([C.lowColor,C.highColor]),log:()=>i.scaleLog().domain(t).range([C.lowColor,C.highColor]),default:()=>null};Y.value=(n[e]||n.default)()}function V(e){if(!c.value)return"#000000";if(L.value.type==="custom"){const t=e[c.value];return z(c.value)?N.vote[t]:N[c.value][t]}return L.value.type==="log"&&e[c.value]===0?C.logZeroColor:Y.value(e[c.value])}const f=x(null);function J(e){const t=s.focusOptions.findIndex(n=>n.value===e.id);return ae[t%ae.length]}async function W(e){let t=D.value.select(".seats-group");t.empty()&&(t=D.value.append("g").attr("class","seats-group"));const n=i.transition().duration(2500),r=s.numberOfFetches===1?i.transition().duration(2500):n.transition().duration(2500),m=i.transition().duration(2500),y=t.selectAll("circle").data(e,a=>a.id);y.exit().transition(n).attr("cx",a=>_(a)).attr("cy",a=>H(a,"exit")).attr("r",d.value).attr("fill",a=>V(a)).attr("fill-opacity",0).remove(),y.enter().append("circle").attr("class","seat").attr("cx",a=>_(a)).attr("cy",a=>H(a,"enter")).attr("r",d.value).attr("fill",a=>V(a)).attr("fill-opacity",0).attr("stroke",a=>a.focus?J(a):null).attr("stroke-width",a=>a.focus?d.value*2:null).attr("stroke-opacity",a=>a.focus?te:null).on("click",(a,S)=>{v.isMobile||window.open(S.url,"_blank")}).on("mouseover",(a,S)=>setTimeout(()=>{xe(S)},v.isMobile?100:0)).on("mousemove",a=>be(a)).on("mouseout",()=>we()).on("contextmenu",(a,S)=>ke(a,S)).transition(r).attr("cx",a=>_(a)).attr("cy",a=>H(a)).attr("fill",a=>V(a)).attr("fill-opacity",U.value).attr("cursor","pointer"),y.transition(m).attr("cx",a=>_(a)).attr("cy",a=>H(a)).attr("r",d.value).attr("fill",a=>V(a)).attr("fill-opacity",U.value).attr("stroke",a=>a.focus?J(a):null).attr("stroke-width",a=>a.focus?d.value*2:null).attr("stroke-opacity",a=>a.focus?te:null).attr("cursor","pointer"),i.select(".seats-group").raise()}let X=!1;function xe(e){if(s.membersAsOfDate||f.value.select(".headshot img").attr("src",e.image),f.value.select(".name").text(e.name),u.value===c.value?f.value.select(".arrangement").text(e[u.value]):(f.value.select(".arrangement").text(e[u.value]),f.value.select(".feature").text(e[c.value])),v.isMobile){const n=f.value.select(".url").select("a");n.attr("href",e.url),n.on("click",r=>{r.stopPropagation(),X=!0})}f.value.style("visibility","visible")}function be(e){f.value.style("left",`${e.clientX+d.value}px`).style("top",`${e.clientY-d.value}px`)}function we(){v.isMobile?setTimeout(()=>{X&&(X=!1),G()},X?1500:0):setTimeout(()=>{G()},0)}function G(){s.membersAsOfDate||f.value.select(".headshot img").attr("src",null),f.value.select(".name").text(null),f.value.select(".arrangement").text(null),f.value.select(".feature").text(null),f.value.select(".hint").text(null),v.isMobile&&f.value.select(".url").select("a").attr("href",""),f.value.style("visibility","hidden")}function ke(e,t){e.preventDefault(),s.memberFocus?B.value.includes(t.id)||s.setMemberFocus([...B.value,t.id]):s.setMemberFocus([t.id])}return(e,t)=>(Q(),j("div",Ie,[ee(s).membersAsOfDate?De("",!0):(Q(),j("div",_e,t[0]||(t[0]=[k("img",null,null,-1)]))),t[2]||(t[2]=k("div",{class:"name"},null,-1)),t[3]||(t[3]=k("div",{class:"arrangement"},null,-1)),t[4]||(t[4]=k("div",{class:"feature"},null,-1)),ze(k("div",He,t[1]||(t[1]=[k("a",{href:"",target:"_blank"},"Link",-1)]),512),[[Fe,ee(v).isMobile]])]))}},We=Me(Xe,[["__scopeId","data-v-95ec55b3"]]);export{We as default};
