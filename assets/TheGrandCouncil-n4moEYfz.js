import{_ as Ae,bc as Me,i as Se,j as Ce,n as w,r as x,c as g,o as Q,f as j,d as ee,b as k,au as De,Z as ze,a9 as Ie}from"./index-CH6Wmo5d.js";import{d as u,a as te,c as N,o as Fe,b as C,f as ae}from"./customColors-Dr-dxzXd.js";import{d as Te}from"./debounce-B_grFKK4.js";const Oe={id:"tooltip"},Xe={key:0,class:"headshot"},_e={class:"url"},He=20,Le={__name:"TheGrandCouncil",setup(Ve){const v=Me(),r=Se();Ce(()=>{f.value=u.select("#tooltip"),E(),r.numberOfFetches>0&&I()}),w(()=>v.width,()=>{ne()});const ne=Te(()=>{le()},200);async function le(){u.select("#svg-visualization").remove(),await E(),await W(b.value),s.value==="occupation"&&await B("increased")}const V=x(null),D=x(null),l=x({width:null,height:null,margin:{top:null,right:null,bottom:null,left:null},ctrWidth:null,ctrHeight:null}),b=g(()=>r.asOfDate&&r.membersAsOfDate?r.membersAsOfDate:r.membersCurrent),s=g(()=>r.seatArrangement?r.seatArrangement:""),c=g(()=>r.seatFeature),$=g(()=>r.memberFocus),p=g(()=>{if(!s.value)return[""];const e=P(s.value);if(z(e[0])){const t=u.min(e),n=u.max(e);return n-t>100&&t===0?[1,n]:t===n?[t,1]:[t,n]}return e.sort()});function z(e){return Number.isInteger(Number(e))}function P(e){return Array.from(new Set(b.value.map(t=>t[e])))}const o=g(()=>{const t=typeof p.value[0]=="string",n=p.value[1]<=100;return t?(r.setXAxisIsLog(!1),{type:"band"}):!t&&n?(r.setXAxisIsLog(!1),{type:"linear"}):(r.setXAxisIsLog(!0),{type:"log"})});w(()=>o.value,(e,t)=>{const n=e.type!==t.type;oe(n)},{deep:!1}),w(()=>s.value,async(e,t)=>{await I(),e==="occupation"&&await B("increased"),t==="occupation"&&await B("regular")}),w(()=>c.value,()=>{I()}),w(()=>$.value,()=>{W(b.value)});const h=x(null),A=x(null);w(()=>r.newFetchingDone,async e=>{e&&I()});const Y=x(null);async function E(){await re(),await K()}async function re(){const e=u.select("#grand-council-basel");await ie(e),V.value=e.append("svg").attr("id","svg-visualization").attr("viewBox",`0 0 ${l.value.width} ${l.value.height}`),D.value=V.value.append("g").attr("id","visualization-ctr").attr("transform",`translate(${l.value.margin.left}, ${l.value.margin.top})`)}async function B(e){const t=e==="increased"?T.value*100*1.1:l.value.height,n=e==="increased"?"270":"0",i=u.transition().duration(2500),m=i.transition().duration(1500);await V.value.transition(i).attr("viewBox",`0 0 ${l.value.width} ${t}`).attr("transform",`rotate(${n})`),e==="increased"&&await A.value.selectAll("text").transition(m).style("text-anchor","start").style("font-size",()=>v.isMobile?"6px":"14px").attr("dy",()=>v.isMobile?"-0.1rem":".1rem").attr("dx",()=>-l.value.ctrHeight+F.value*d.value*2).attr("transform","rotate(90)")}async function ie(e){l.value.width=e.node().getBoundingClientRect().width;const t=v.isMobile?.5:.3;l.value.height=l.value.width*t,l.value.margin.top=v.isMobile?10:50,l.value.margin.right=v.isMobile?5:25,l.value.margin.bottom=v.isMobile?18:25,l.value.margin.left=v.isMobile?5:25,l.value.ctrWidth=l.value.width-l.value.margin.left-l.value.margin.right,l.value.ctrHeight=l.value.height-l.value.margin.top-l.value.margin.bottom}async function I(){await b.value.sort((i,m)=>{if(s.value){if(i[s.value]<m[s.value])return-1;if(i[s.value]>m[s.value])return 1}if(c.value){if(i[c.value]<m[c.value])return-1;if(i[c.value]>m[c.value])return 1}else{if(i.name<m.name)return-1;if(i.name>m.name)return 1}});let e=null,t=-1,n=-1;b.value.forEach(i=>{i[s.value]!==e?(e=i[s.value],t=0):t+=1,i.innerIndex=t,t>n&&(n=t)}),F.value=n+1,console.log(b.value),await ye(),await W(b.value)}async function K(){await ue(),await se()}async function ue(){o.value.type==="band"?h.value=u.scaleBand().domain(p.value).range([0,l.value.ctrWidth]).paddingInner(.2).paddingOuter(.2).align(.5):o.value.type==="linear"?h.value=u.scaleLinear().domain(p.value).range([0,l.value.ctrWidth]).nice():h.value=u.scaleLog().domain(p.value).range([l.value.ctrWidth*.05,l.value.ctrWidth]).base(2).nice()}async function se(){A.value=D.value.append("g").attr("id","x-axis").attr("transform",`translate(0, ${l.value.ctrHeight})`).style("font-size",()=>v.isMobile?"8px":"14px"),Z()}async function oe(e){e?(u.select("#x-axis").remove(),K()):(h.value.domain(p.value),Z())}function Z(){const e=u.formatLocale({thousands:"'",grouping:[3]}).format(",.0f"),t=u.axisBottom(h.value);if(o.value.type==="band"&&t.tickSize(0),o.value.type==="linear"){const n=p.value[1]<10?p.value[1]:12;t.tickSize(-l.value.ctrHeight).ticks(n).tickPadding(10).tickSizeOuter(0).tickFormat(e)}o.value.type==="log"&&t.tickSize(-l.value.ctrHeight).ticks(5).tickPadding(10).tickSizeOuter(0).tickFormat(e),A.value.transition().call(t),o.value.type==="band"?A.value.call(n=>n.select(".domain").remove()):A.value.selectAll(".tick line").style("stroke","lightgrey").style("stroke-dasharray","4,2")}const F=x(0),M=g(()=>o.value.type==="band"?Math.ceil(He/p.value.length):1),q=g(()=>o.value.type==="band"?Math.ceil(F.value/M.value):F.value),ce=g(()=>o.value.type==="band"?h.value.bandwidth():null),T=g(()=>o.value.type==="band"?ce.value/M.value:l.value.ctrWidth/(p.value[1]-p.value[0])),O=g(()=>l.value.ctrHeight/q.value),d=g(()=>{const t=T.value/2*.9,n=O.value/2*.9;return o.value.type==="band"?q.value>M.value?Math.min(t,n):t:o.value.type==="linear"?Math.min(t,n):v.isMobile?3.3:5});function X(e){return o.value.type==="band"?ve(e):o.value.type==="linear"?de(e):ge(e)}function _(e,t="update"){return t==="enter"?-d.value*2:t==="exit"?l.value.ctrHeight+d.value*2:o.value.type==="band"?fe(e):o.value.type==="linear"?me(e):pe(e)}function ve(e){const t=s.value?e[s.value]:"",n=e.innerIndex%M.value;return h.value(t)+n*T.value+T.value/2}function fe(e){const t=Math.floor(e.innerIndex/M.value);return s.value!=="occupation"?p.value[0]===""?t*O.value+O.value/2:t*O.value:t*d.value*2}function de(e){return h.value(e[s.value])}function me(e){return l.value.ctrHeight-d.value-e.innerIndex*d.value*2}function ge(e){return e[s.value]!==0?h.value(e[s.value]):10}function pe(e){return l.value.ctrHeight-d.value-e.innerIndex*d.value*2}const U=g(()=>o.value.type==="log"?.65:.9);function he(e){return e in N||z(e)}const R=g(()=>{if(!c.value)return{};const e=P(c.value),t=z(e[0]);let n,i;if(t){const m=u.min(e),y=u.max(e);n=y-m>100?"log":"linear",i=y-m>100&&m===0?[1,y]:[m,y]}else n=he(c.value)?"custom":"ordinal",i=e.sort();return{type:n,domain:i}});async function ye(){const{type:e,domain:t}=R.value,n={ordinal:()=>u.scaleOrdinal().domain(t).range(Fe),linear:()=>u.scaleLinear().domain(t).range([C.lowColor,C.highColor]),log:()=>u.scaleLog().domain(t).range([C.lowColor,C.highColor]),default:()=>null};Y.value=(n[e]||n.default)()}function H(e){if(!c.value)return"#000000";if(R.value.type==="custom"){const t=e[c.value];return z(c.value)?N.vote[t]:N[c.value][t]}return R.value.type==="log"&&e[c.value]===0?C.logZeroColor:Y.value(e[c.value])}const f=x(null);function J(e){const t=r.focusOptions.findIndex(n=>n.value===e.id);return ae[t%ae.length]}async function W(e){let t=D.value.select(".seats-group");t.empty()&&(t=D.value.append("g").attr("class","seats-group"));const n=u.transition().duration(2500),i=r.numberOfFetches===1?u.transition().duration(2500):n.transition().duration(2500),m=u.transition().duration(2500),y=t.selectAll("circle").data(e,a=>a.id);y.exit().transition(n).attr("cx",a=>X(a)).attr("cy",a=>_(a,"exit")).attr("r",d.value).attr("fill",a=>H(a)).attr("fill-opacity",0).remove(),y.enter().append("circle").attr("class","seat").attr("cx",a=>X(a)).attr("cy",a=>_(a,"enter")).attr("r",d.value).attr("fill",a=>H(a)).attr("fill-opacity",0).attr("stroke",a=>a.focus?J(a):null).attr("stroke-width",a=>a.focus?d.value*2:null).attr("stroke-opacity",a=>a.focus?te:null).on("click",(a,S)=>{v.isMobile||window.open(S.url,"_blank")}).on("mouseover",(a,S)=>setTimeout(()=>{xe(S)},v.isMobile?100:0)).on("mousemove",a=>be(a)).on("mouseout",()=>we()).on("contextmenu",(a,S)=>ke(a,S)).transition(i).attr("cx",a=>X(a)).attr("cy",a=>_(a)).attr("fill",a=>H(a)).attr("fill-opacity",U.value).attr("cursor","pointer"),y.transition(m).attr("cx",a=>X(a)).attr("cy",a=>_(a)).attr("r",d.value).attr("fill",a=>H(a)).attr("fill-opacity",U.value).attr("stroke",a=>a.focus?J(a):null).attr("stroke-width",a=>a.focus?d.value*2:null).attr("stroke-opacity",a=>a.focus?te:null).attr("cursor","pointer"),u.select(".seats-group").raise()}let L=!1;function xe(e){if(r.membersAsOfDate||f.value.select(".headshot img").attr("src",e.image),f.value.select(".name").text(e.name),s.value===c.value?f.value.select(".arrangement").text(e[s.value]):(f.value.select(".arrangement").text(e[s.value]),f.value.select(".feature").text(e[c.value])),v.isMobile){const n=f.value.select(".url").select("a");n.attr("href",e.url),n.on("click",i=>{i.stopPropagation(),L=!0})}f.value.style("visibility","visible")}function be(e){f.value.style("left",`${e.clientX+d.value}px`).style("top",`${e.clientY-d.value}px`)}function we(){v.isMobile?setTimeout(()=>{L&&(L=!1),G()},L?1500:0):setTimeout(()=>{G()},0)}function G(){r.membersAsOfDate||f.value.select(".headshot img").attr("src",null),f.value.select(".name").text(null),f.value.select(".arrangement").text(null),f.value.select(".feature").text(null),f.value.select(".hint").text(null),v.isMobile&&f.value.select(".url").select("a").attr("href",""),f.value.style("visibility","hidden")}function ke(e,t){e.preventDefault(),r.memberFocus?$.value.includes(t.id)||r.setMemberFocus([...$.value,t.id]):r.setMemberFocus([t.id])}return(e,t)=>(Q(),j("div",Oe,[ee(r).membersAsOfDate?De("",!0):(Q(),j("div",Xe,t[0]||(t[0]=[k("img",null,null,-1)]))),t[2]||(t[2]=k("div",{class:"name"},null,-1)),t[3]||(t[3]=k("div",{class:"arrangement"},null,-1)),t[4]||(t[4]=k("div",{class:"feature"},null,-1)),ze(k("div",_e,t[1]||(t[1]=[k("a",{href:"",target:"_blank"},"Link",-1)]),512),[[Ie,ee(v).isMobile]])]))}},We=Ae(Le,[["__scopeId","data-v-32831db6"]]);export{We as default};
