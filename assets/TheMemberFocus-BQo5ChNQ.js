import{_ as d,i as b,u as v,h as g,j as _,k as h,n as u,d as l,o as F,f as k,b as y,t as $,g as C,au as M,q as N}from"./index-BjTw597_.js";import{d as O,f as m,a as S}from"./customColors-3l6lgcQx.js";import{u as i}from"./updateUrl-DpWSfZP5.js";import{e as x,k as T}from"./Select-g9jlXrkg.js";import"./Suffix-C3LCPvgu.js";const B={key:0},V={for:"member-focus"},w={__name:"TheMemberFocus",setup(D){const o=b(),c=v(),n=g();_(()=>{t.value=o.memberFocus});const t=h(null);u(()=>t.value,e=>{o.setMemberFocus(e)}),u(()=>o.memberFocus,e=>{t.value=e,i(c,n)}),u(()=>o.focusOptions,()=>{o.memberFocus&&(o.memberFocus.length=0),i(c,n)});function p(e){const s=O.color(m[e%m.length]);return`rgba(${s.r}, ${s.g}, ${s.b}, ${S})`}function f({option:e,handleClose:s}){const r=o.focusOptions.findIndex(a=>a.value===e.value);return N(T,{type:e.type,closable:!0,onMousedown:a=>{a.preventDefault()},onClose:a=>{a.stopPropagation(),s()},style:{backgroundColor:p(r)}},{default:()=>e.label})}return(e,s)=>l(o).focusOptions?(F(),k("div",B,[y("label",V,$(e.$t("memberFocusSelection.label")),1),C(l(x),{placeholder:e.$t("memberFocusSelection.placeholder"),value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),options:l(o).focusOptions,id:"member-focus",multiple:"","max-tag-count":12,"render-tag":f,filterable:""},null,8,["placeholder","value","options"])])):M("",!0)}},A=d(w,[["__scopeId","data-v-cf913f33"]]);export{A as default};
