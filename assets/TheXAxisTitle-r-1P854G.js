import{i as f,j as p,r as d,c as v,n as i,o as g,f as x,t as m}from"./index-CH6Wmo5d.js";const l="(log2-Skala)",$={__name:"TheXAxisTitle",setup(_){const t=f();p(()=>{t.seatArrangement&&(s.value=o(t.seatArrangement))});const s=d(""),u=v(()=>t.asOfDate?t.loadedVoteResultsAsOfDate:t.loadedVoteResultsCurrent);i(()=>t.seatArrangement,e=>{s.value=o(e)}),i(()=>t.xAxisIsLog,e=>{e?s.value=`${s.value.replace(l,"")} ${l}`:s.value=`${s.value.replace(l,"")}`});function r(e){return Number.isInteger(parseInt(e))}function o(e){let a;const n=r(e);return e&&!n?a=t.seatOptions.find(c=>c.value===e).label:n?a=u.value.get(e).voteTitle:a="",t.xAxisIsLog?`${a} ${l}`:a}return(e,a)=>(g(),x("div",null,m(s.value),1))}};export{$ as default};
