import{a6 as r,h as c,e as f,B as d,i as p,o as m,a8 as _,a7 as v}from"./index-BAQrwGvC.js";const b={__name:"TheXAxisTitle",setup(T){const t=r();c(()=>{t.seatArrangement&&(s.value=o(t.seatArrangement))});const s=f(""),l=d(()=>t.asOfDate?t.loadedVoteResultsAsOfDate:t.loadedVoteResultsCurrent);p(()=>t.seatArrangement,e=>{s.value=o(e)});function i(e){return Number.isInteger(parseInt(e))}function o(e){let a;const n=i(e);return e&&!n?a=t.seatOptions.find(u=>u.value===e).label:n?a=l.value.get(e).voteTitle:a="",a}return(e,a)=>(m(),_("div",null,v(s.value),1))}};export{b as default};
