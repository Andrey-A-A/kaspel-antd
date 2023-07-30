import{r as u,j as r,a as S}from"./react-edf7a294.js";import{c as b}from"./react-dom-524d7060.js";import{P as p}from"./prop-types-c02b782a.js";import{h as c}from"./moment-fbc5633a.js";import{B as F,T as P,M,I as Y,F as f,D as T}from"./antd-0783f493.js";import{y as E,z as L}from"./@ant-design-dd055676.js";import"./classnames-4ba1ba1a.js";import"./scheduler-765c72db.js";import"./rc-util-257278b1.js";import"./react-is-e8e5dbb3.js";import"./@babel-f0771d6b.js";import"./rc-resize-observer-7fcc4f71.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-motion-e5411b45.js";import"./rc-picker-ff929779.js";import"./dayjs-38b8c362.js";import"./@rc-component-85299d54.js";import"./rc-menu-e1a19dc1.js";import"./rc-overflow-14495212.js";import"./rc-select-eda50ff1.js";import"./rc-virtual-list-388eb757.js";import"./@ctrl-fb5a5473.js";import"./rc-field-form-739e3e1a.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-dialog-eae92a9b.js";import"./rc-table-b84d16f8.js";import"./rc-pagination-acf56f66.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-793adbd5.js";import"./rc-dropdown-7343e9ee.js";import"./rc-tooltip-01eacc62.js";import"./rc-tree-4ce80efb.js";import"./rc-input-9c2f66e9.js";import"./rc-textarea-a47829bb.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const k=({open:d,onCreate:i,onCancel:a,onChange:s})=>{const[o]=f.useForm();return r.jsx(M,{open:d,title:"Create new Student",okText:"Create",onCancel:a,onOk:()=>{o.validateFields().then(n=>{o.resetFields(),i(n)}).catch(n=>{console.log("Validate Failed:",n)})},children:r.jsxs(f,{form:o,layout:"vertical",name:"form_in_modal",children:[r.jsx(f.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Пожалуйста, введите имя!"}],children:r.jsx(Y,{})}),r.jsx(f.Item,{label:"DatePicker",name:"date",rules:[{required:!0,message:"Пожалуйста, введите дату!"}],children:r.jsx(T,{onChange:s,format:"DD.MM.YYYY"})})]})})};k.propTypes={open:p.bool,onCreate:p.func,onCancel:p.func,valueKey:p.number};function N(){const[d,i]=u.useState(!1),[a,s]=u.useState(null),[o,n]=u.useState(null),[m,y]=u.useState([{key:1,name:"Semen",date:c("20.08.2023",["MM.DD.YYYY","DD.MM.YYYY"],!0).format("DD.MM.YYYY")},{key:2,name:"Andrey",date:c("18.03.2023",["MM.DD.YYYY","DD.MM.YYYY"],!0).format("DD.MM.YYYY")},{key:3,name:"Petr",date:c("01.03.2023",["MM.DD.YYYY","DD.MM.YYYY"],!0).format("DD.MM.YYYY")},{key:4,name:"Ivan",date:c("15.04.2023",["MM.DD.YYYY","DD.MM.YYYY"],!0).format("DD.MM.YYYY")}]),[h,D]=u.useState(!1),g=e=>{const t=parseInt(Math.random()*1e3);y(l=>{const O={key:t,name:e.name,date:o};return[...l,O]}),D(!1)},j=(e,t)=>(n(t),t),C=[{title:"Номер",dataIndex:"key",key:"key",sorter:(e,t)=>e.key-t.key,render:(e,t,l)=>(++l,l),showSorterTooltip:!1},{key:"2",title:"Имя",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name),sortDirections:["descend"]},{key:"3",title:"Дата",dataIndex:"date",sorter:(e,t)=>c(e).valueOf()-c(t).valueOf()},{key:"4",title:"Действия",render:e=>r.jsxs(r.Fragment,{children:[r.jsx(E,{onClick:()=>{I(e)}}),r.jsx(L,{onClick:()=>{v(e)},style:{color:"red",marginLeft:12}})]})}],v=e=>{M.confirm({title:"Вы уверены, что хотите удалить эту запись?",okText:"Да",okType:"danger",onOk:()=>{y(t=>t.filter(l=>l.key!==e.key))}})},I=e=>{i(!0),s({...e})},x=()=>{i(!1),s(null)};return r.jsx(r.Fragment,{children:r.jsxs("div",{children:[r.jsx(F,{className:"btn",type:"primary",onClick:()=>{D(!0)},children:"Добавить запись"}),r.jsx(P,{columns:C,dataSource:m}),r.jsx(k,{open:h,onCreate:g,onCancel:()=>{D(!1)},onChange:j}),r.jsxs(M,{title:"Редактирование записи",open:d,okText:"Сохранить",onCancel:()=>{x()},onOk:()=>{y(e=>(console.log("dataSource",m),e.map(t=>t.key===a.key?a:t))),x()},children:[r.jsx(Y,{type:"number",value:a==null?void 0:a.key,onChange:e=>{s(t=>({...t,key:e.target.value}))}}),r.jsx(Y,{value:a==null?void 0:a.name,onChange:e=>{s(t=>({...t,name:e.target.value}))}}),r.jsx(Y,{value:a==null?void 0:a.date,onChange:e=>{s(t=>({...t,date:e.target.value}))}})]})]})})}b.createRoot(document.getElementById("root")).render(r.jsx(S.StrictMode,{children:r.jsx(N,{})}));