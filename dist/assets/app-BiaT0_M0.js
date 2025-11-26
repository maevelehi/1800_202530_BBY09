(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const Yg=()=>{};var Ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Xg=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],c=n[e++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,A=d&63;u||(A=64,a||(E=64)),r.push(e[f],e[m],e[E],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Kd(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Xg(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const m=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new Jg;const E=i<<2|c>>4;if(r.push(E),d!==64){const A=c<<4&240|d>>2;if(r.push(A),m!==64){const N=d<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zg=function(n){const t=Kd(n);return Gd.encodeByteArray(t,!0)},Gi=function(n){return Zg(n).replace(/\./g,"")},Qd=function(n){try{return Gd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=()=>t_().__FIREBASE_DEFAULTS__,n_=()=>{if(typeof process>"u"||typeof Ou>"u")return;const n=Ou.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},r_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Qd(n[1]);return t&&JSON.parse(t)},Eo=()=>{try{return Yg()||e_()||n_()||r_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yd=n=>Eo()?.emulatorHosts?.[n],s_=n=>{const t=Yd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Xd=()=>Eo()?.config,Jd=n=>Eo()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Gi(JSON.stringify(e)),Gi(JSON.stringify(a)),""].join(".")}const ws={};function a_(){const n={prod:[],emulator:[]};for(const t of Object.keys(ws))ws[t]?n.emulator.push(t):n.prod.push(t);return n}function c_(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ku=!1;function tf(n,t){if(typeof window>"u"||typeof document>"u"||!Lr(window.location.host)||ws[n]===t||ws[n]||ku)return;ws[n]=t;function e(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=a_().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,A){E.setAttribute("width","24"),E.setAttribute("id",A),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{ku=!0,a()},E}function f(E,A){E.setAttribute("id",A),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function m(){const E=c_(r),A=e("text"),N=document.getElementById(A)||document.createElement("span"),D=e("learnmore"),R=document.getElementById(D)||document.createElement("a"),L=e("preprendIcon"),x=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const $=E.element;c($),f(R,D);const B=d();u(x,L),$.append(x,N,R,B),document.body.appendChild($)}i?(N.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function u_(){const n=Eo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function h_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function p_(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function m_(){return!u_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function g_(){try{return typeof indexedDB=="object"}catch{return!1}}function __(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="FirebaseError";class ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=y_,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?E_(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ke(s,c,r)}}function E_(n,t){return n.replace(v_,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;function T_(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ln(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(Vu(i)&&Vu(a)){if(!Ln(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Vu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function gs(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function _s(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function w_(n,t){const e=new I_(n,t);return e.subscribe.bind(e)}class I_{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");A_(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=ya),s.error===void 0&&(s.error=ya),s.complete===void 0&&(s.complete=ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A_(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ya(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new i_;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(C_(t))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Sn){return this.instances.has(t)}getOptions(t=Sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:S_(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Sn){return this.component?this.component.multipleInstances?t:Sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S_(n){return n===Sn?void 0:n}function C_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new b_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const P_={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},N_=Q.INFO,D_={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},O_=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=D_[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cc{constructor(t){this.name=t,this._logLevel=N_,this._logHandler=O_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?P_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const k_=(n,t)=>t.some(e=>n instanceof e);let Lu,Mu;function V_(){return Lu||(Lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L_(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ef=new WeakMap,za=new WeakMap,nf=new WeakMap,Ea=new WeakMap,Rc=new WeakMap;function M_(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(Je(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ef.set(e,n)}).catch(()=>{}),Rc.set(t,n),t}function x_(n){if(za.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});za.set(n,t)}let Ka={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return za.get(n);if(t==="objectStoreNames")return n.objectStoreNames||nf.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Je(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function F_(n){Ka=n(Ka)}function U_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(va(this),t,...e);return nf.set(r,t.sort?t.sort():[t]),Je(r)}:L_().includes(n)?function(...t){return n.apply(va(this),t),Je(ef.get(this))}:function(...t){return Je(n.apply(va(this),t))}}function $_(n){return typeof n=="function"?U_(n):(n instanceof IDBTransaction&&x_(n),k_(n,V_())?new Proxy(n,Ka):n)}function Je(n){if(n instanceof IDBRequest)return M_(n);if(Ea.has(n))return Ea.get(n);const t=$_(n);return t!==n&&(Ea.set(n,t),Rc.set(t,n)),t}const va=n=>Rc.get(n);function B_(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),c=Je(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Je(a.result),u.oldVersion,u.newVersion,Je(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const j_=["get","getKey","getAll","getAllKeys","count"],q_=["put","add","delete","clear"],Ta=new Map;function xu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ta.get(t))return Ta.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=q_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||j_.includes(e)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&u.done]))[0]};return Ta.set(t,i),i}F_(n=>({...n,get:(t,e,r)=>xu(t,e)||n.get(t,e,r),has:(t,e)=>!!xu(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(W_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function W_(n){return n.getComponent()?.type==="VERSION"}const Ga="@firebase/app",Fu="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new Cc("@firebase/app"),z_="@firebase/app-compat",K_="@firebase/analytics-compat",G_="@firebase/analytics",Q_="@firebase/app-check-compat",Y_="@firebase/app-check",X_="@firebase/auth",J_="@firebase/auth-compat",Z_="@firebase/database",ty="@firebase/data-connect",ey="@firebase/database-compat",ny="@firebase/functions",ry="@firebase/functions-compat",sy="@firebase/installations",iy="@firebase/installations-compat",oy="@firebase/messaging",ay="@firebase/messaging-compat",cy="@firebase/performance",ly="@firebase/performance-compat",uy="@firebase/remote-config",hy="@firebase/remote-config-compat",dy="@firebase/storage",fy="@firebase/storage-compat",py="@firebase/firestore",my="@firebase/ai",gy="@firebase/firestore-compat",_y="firebase",yy="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]",Ey={[Ga]:"fire-core",[z_]:"fire-core-compat",[G_]:"fire-analytics",[K_]:"fire-analytics-compat",[Y_]:"fire-app-check",[Q_]:"fire-app-check-compat",[X_]:"fire-auth",[J_]:"fire-auth-compat",[Z_]:"fire-rtdb",[ty]:"fire-data-connect",[ey]:"fire-rtdb-compat",[ny]:"fire-fn",[ry]:"fire-fn-compat",[sy]:"fire-iid",[iy]:"fire-iid-compat",[oy]:"fire-fcm",[ay]:"fire-fcm-compat",[cy]:"fire-perf",[ly]:"fire-perf-compat",[uy]:"fire-rc",[hy]:"fire-rc-compat",[dy]:"fire-gcs",[fy]:"fire-gcs-compat",[py]:"fire-fst",[gy]:"fire-fst-compat",[my]:"fire-vertex","fire-js":"fire-js",[_y]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Map,vy=new Map,Ya=new Map;function Uu(n,t){try{n.container.addComponent(t)}catch(e){Ce.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Er(n){const t=n.name;if(Ya.has(t))return Ce.debug(`There were multiple attempts to register component ${t}.`),!1;Ya.set(t,n);for(const e of Qi.values())Uu(e,n);for(const e of vy.values())Uu(e,n);return!0}function Pc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function qt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ze=new js("app","Firebase",Ty);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=yy;function rf(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Qa,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Ze.create("bad-app-name",{appName:String(s)});if(e||(e=Xd()),!e)throw Ze.create("no-options");const i=Qi.get(s);if(i){if(Ln(e,i.options)&&Ln(r,i.config))return i;throw Ze.create("duplicate-app",{appName:s})}const a=new R_(s);for(const u of Ya.values())a.addComponent(u);const c=new wy(e,r,a);return Qi.set(s,c),c}function sf(n=Qa){const t=Qi.get(n);if(!t&&n===Qa&&Xd())return rf();if(!t)throw Ze.create("no-app",{appName:n});return t}function tn(n,t,e){let r=Ey[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ce.warn(a.join(" "));return}Er(new Mn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firebase-heartbeat-database",Ay=1,Ns="firebase-heartbeat-store";let wa=null;function of(){return wa||(wa=B_(Iy,Ay,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ns)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ze.create("idb-open",{originalErrorMessage:n.message})})),wa}async function by(n){try{const e=(await of()).transaction(Ns),r=await e.objectStore(Ns).get(af(n));return await e.done,r}catch(t){if(t instanceof ke)Ce.warn(t.message);else{const e=Ze.create("idb-get",{originalErrorMessage:t?.message});Ce.warn(e.message)}}}async function $u(n,t){try{const r=(await of()).transaction(Ns,"readwrite");await r.objectStore(Ns).put(t,af(n)),await r.done}catch(e){if(e instanceof ke)Ce.warn(e.message);else{const r=Ze.create("idb-set",{originalErrorMessage:e?.message});Ce.warn(r.message)}}}function af(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=1024,Cy=30;class Ry{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ny(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>Cy){const s=Dy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Ce.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bu(),{heartbeatsToSend:e,unsentEntries:r}=Py(this._heartbeatsCache.heartbeats),s=Gi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ce.warn(t),""}}}function Bu(){return new Date().toISOString().substring(0,10)}function Py(n,t=Sy){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ju(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ju(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ny{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return g_()?__().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await by(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return $u(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return $u(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ju(n){return Gi(JSON.stringify({version:2,heartbeats:n})).length}function Dy(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n){Er(new Mn("platform-logger",t=>new H_(t),"PRIVATE")),Er(new Mn("heartbeat",t=>new Ry(t),"PRIVATE")),tn(Ga,Fu,n),tn(Ga,Fu,"esm2020"),tn("fire-js","")}Oy("");function cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ky=cf,lf=new js("auth","Firebase",cf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Cc("@firebase/auth");function Vy(n,...t){Yi.logLevel<=Q.WARN&&Yi.warn(`Auth (${Mr}): ${n}`,...t)}function Vi(n,...t){Yi.logLevel<=Q.ERROR&&Yi.error(`Auth (${Mr}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n,...t){throw Nc(n,...t)}function oe(n,...t){return Nc(n,...t)}function uf(n,t,e){const r={...ky(),[t]:e};return new js("auth","Firebase",r).create(t,{appName:n.name})}function Ie(n){return uf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nc(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return lf.create(n,...t)}function j(n,t,...e){if(!n)throw Nc(t,...e)}function Te(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Vi(t),new Error(t)}function Re(n,t){n||Te(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return typeof self<"u"&&self.location?.href||""}function Ly(){return qu()==="http:"||qu()==="https:"}function qu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ly()||d_()||"connection"in navigator)?navigator.onLine:!0}function xy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){this.shortDelay=t,this.longDelay=e,Re(e>t,"Short delay should be less than long delay!"),this.isMobile=l_()||f_()}get(){return My()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n,t){Re(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$y=new Hs(3e4,6e4);function fn(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function Ve(n,t,e,r,s={}){return df(n,s,async()=>{let i={},a={};r&&(t==="GET"?a=r:i={body:JSON.stringify(r)});const c=qs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:t,headers:u,...i};return h_()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Lr(n.emulatorConfig.host)&&(d.credentials="include"),hf.fetch()(await ff(n,n.config.apiHost,e,c),d)})}async function df(n,t,e){n._canInitEmulator=!1;const r={...Fy,...t};try{const s=new jy(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ti(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ti(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ti(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw uf(n,f,d);te(n,f)}}catch(s){if(s instanceof ke)throw s;te(n,"network-request-failed",{message:String(s)})}}async function Ws(n,t,e,r,s={}){const i=await Ve(n,t,e,r,s);return"mfaPendingCredential"in i&&te(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ff(n,t,e,r){const s=`${t}${e}?${r}`,i=n,a=i.config.emulator?Dc(n.config,s):`${n.config.apiScheme}://${s}`;return Uy.includes(e)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function By(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(oe(this.auth,"network-request-failed")),$y.get())})}}function Ti(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=oe(n,t,r);return s.customData._tokenResponse=e,s}function Hu(n){return n!==void 0&&n.enterprise!==void 0}class qy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return By(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hy(n,t){return Ve(n,"GET","/v2/recaptchaConfig",fn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(n,t){return Ve(n,"POST","/v1/accounts:delete",t)}async function Xi(n,t){return Ve(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zy(n,t=!1){const e=ft(n),r=await e.getIdToken(t),s=Oc(r);j(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Is(Ia(s.auth_time)),issuedAtTime:Is(Ia(s.iat)),expirationTime:Is(Ia(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ia(n){return Number(n)*1e3}function Oc(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qd(e);return s?JSON.parse(s):(Vi("Failed to decode base64 JWT payload"),null)}catch(s){return Vi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Wu(n){const t=Oc(n);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof ke&&Ky(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ky({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(n){const t=n.auth,e=await n.getIdToken(),r=await vr(n,Xi(t,{idToken:e}));j(r?.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?pf(s.providerUserInfo):[],a=Yy(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ja(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function Qy(n){const t=ft(n);await Ji(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Yy(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function pf(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,t){const e=await df(n,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ff(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Lr(n.emulatorConfig.host)&&(u.credentials="include"),hf.fetch()(a,u)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Jy(n,t){return Ve(n,"POST","/v2/accounts:revokeToken",fn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){j(t.length!==0,"internal-error");const e=Wu(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xy(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,a=new mr;return r&&(j(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,t){j(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Zt{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ja(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await vr(this,this.stsTokenManager.getToken(this.auth,t));return j(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return zy(this,t)}reload(){return Qy(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Zt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(Ie(this.auth));const t=await this.getIdToken();return await vr(this,Wy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,i=e.phoneNumber??void 0,a=e.photoURL??void 0,c=e.tenantId??void 0,u=e._redirectEventId??void 0,d=e.createdAt??void 0,f=e.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:A,providerData:N,stsTokenManager:D}=e;j(m&&D,t,"internal-error");const R=mr.fromJSON(this.name,D);j(typeof m=="string",t,"internal-error"),We(r,t.name),We(s,t.name),j(typeof E=="boolean",t,"internal-error"),j(typeof A=="boolean",t,"internal-error"),We(i,t.name),We(a,t.name),We(c,t.name),We(u,t.name),We(d,t.name),We(f,t.name);const L=new Zt({uid:m,auth:t,email:s,emailVerified:E,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:R,createdAt:d,lastLoginAt:f});return N&&Array.isArray(N)&&(L.providerData=N.map(x=>({...x}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(t,e,r=!1){const s=new mr;s.updateFromServerResponse(e);const i=new Zt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Ji(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new mr;c.updateFromIdToken(r);const u=new Zt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ja(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map;function we(n){Re(n instanceof Function,"Expected a class definition");let t=zu.get(n);return t?(Re(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,zu.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}mf.type="NONE";const Ku=mf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n,t,e){return`firebase:${n}:${t}:${e}`}class gr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Li(this.userKey,s.apiKey,i),this.fullPersistenceKey=Li("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Xi(this.auth,{idToken:t}).catch(()=>{});return e?Zt._fromGetAccountInfoResponse(this.auth,e,t):null}return Zt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new gr(we(Ku),t,r);const s=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||we(Ku);const a=Li(r,t.config.apiKey,t.name);let c=null;for(const d of e)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const E=await Xi(t,{idToken:f}).catch(()=>{});if(!E)break;m=await Zt._fromGetAccountInfoResponse(t,E,f)}else m=Zt._fromJSON(t,f);d!==i&&(c=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new gr(i,t,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(e.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new gr(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ef(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Tf(t))return"Blackberry";if(wf(t))return"Webos";if(_f(t))return"Safari";if((t.includes("chrome/")||yf(t))&&!t.includes("edge/"))return"Chrome";if(vf(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if(r?.length===2)return r[1]}return"Other"}function gf(n=bt()){return/firefox\//i.test(n)}function _f(n=bt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yf(n=bt()){return/crios\//i.test(n)}function Ef(n=bt()){return/iemobile/i.test(n)}function vf(n=bt()){return/android/i.test(n)}function Tf(n=bt()){return/blackberry/i.test(n)}function wf(n=bt()){return/webos/i.test(n)}function kc(n=bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Zy(n=bt()){return kc(n)&&!!window.navigator?.standalone}function tE(){return p_()&&document.documentMode===10}function If(n=bt()){return kc(n)||vf(n)||wf(n)||Tf(n)||/windows phone/i.test(n)||Ef(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n,t=[]){let e;switch(n){case"Browser":e=Gu(bt());break;case"Worker":e=`${Gu(bt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((a,c)=>{try{const u=t(i);a(u)}catch(u){c(u)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(n,t={}){return Ve(n,"GET","/v2/passwordPolicy",fn(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=6;class sE{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??rE,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qu(this),this.idTokenSubscription=new Qu(this),this.beforeStateQueue=new eE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=we(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await gr.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Xi(this,{idToken:t}),r=await Zt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(qt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(t);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ji(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=xy()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(qt(this.app))return Promise.reject(Ie(this));const e=t?ft(t):null;return e&&j(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(Ie(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return qt(this.app)?Promise.reject(Ie(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(we(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await nE(this),e=new sE(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new js("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jy(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&we(t)||this._popupRedirectResolver;j(e,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[we(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,s);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Af(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Vy(`Error while retrieving App Check token: ${t.error}`),t?.token}}function qn(n){return ft(n)}class Qu{constructor(t){this.auth=t,this.observer=null,this.addObserver=w_(e=>this.observer=e)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oE(n){vo=n}function bf(n){return vo.loadJS(n)}function aE(){return vo.recaptchaEnterpriseScript}function cE(){return vo.gapiScript}function lE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class uE{constructor(){this.enterprise=new hE}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class hE{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const dE="recaptcha-enterprise",Sf="NO_RECAPTCHA";class fE{constructor(t){this.type=dE,this.auth=qn(t)}async verify(t="verify",e=!1){async function r(i){if(!e){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Hy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new qy(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Hu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:t}).then(d=>{a(d)}).catch(()=>{a(Sf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uE().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!e&&Hu(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=aE();u.length!==0&&(u+=c),bf(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Yu(n,t,e,r=!1,s=!1){const i=new fE(n);let a;if(s)a=Sf;else try{a=await i.verify(e)}catch{a=await i.verify(e,!0)}const c={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Za(n,t,e,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Yu(n,t,e,e==="getOobCode");return r(n,i)}else return r(n,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Yu(n,t,e,e==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n,t){const e=Pc(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(Ln(i,t??{}))return s;te(s,"already-initialized")}return e.initialize({options:t})}function mE(n,t){const e=t?.persistence||[],r=(Array.isArray(e)?e:[e]).map(we);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t?.popupRedirectResolver)}function gE(n,t,e){const r=qn(n);j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Cf(t),{host:a,port:c}=_E(t),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(Ln(d,r.config.emulator)&&Ln(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Lr(a)?(Zd(`${i}//${a}${u}`),tf("Auth",!0)):yE()}function Cf(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function _E(n){const t=Cf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Xu(a)}}}function Xu(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function yE(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Te("not implemented")}_getIdTokenResponse(t){return Te("not implemented")}_linkToIdToken(t,e){return Te("not implemented")}_getReauthenticationResolver(t){return Te("not implemented")}}async function EE(n,t){return Ve(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(n,t){return Ws(n,"POST","/v1/accounts:signInWithPassword",fn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TE(n,t){return Ws(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,t))}async function wE(n,t){return Ws(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Vc{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new Ds(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Ds(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e?.email&&e?.password){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Za(t,e,"signInWithPassword",vE);case"emailLink":return TE(t,{email:this._email,oobCode:this._password});default:te(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Za(t,r,"signUpPassword",EE);case"emailLink":return wE(t,{idToken:e,email:this._email,oobCode:this._password});default:te(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(n,t){return Ws(n,"POST","/v1/accounts:signInWithIdp",fn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="http://localhost";class xn extends Vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new xn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):te("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=e;if(!r||!s)return null;const a=new xn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return _r(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,_r(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,_r(t,e)}buildRequest(){const t={requestUri:IE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=qs(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bE(n){const t=gs(_s(n)).link,e=t?gs(_s(t)).deep_link_id:null,r=gs(_s(n)).deep_link_id;return(r?gs(_s(r)).link:null)||r||e||t||n}class Lc{constructor(t){const e=gs(_s(t)),r=e.apiKey??null,s=e.oobCode??null,i=AE(e.mode??null);j(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=bE(t);try{return new Lc(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.providerId=xr.PROVIDER_ID}static credential(t,e){return Ds._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=Lc.parseLink(e);return j(r,"argument-error"),Ds._fromEmailAndCode(t,r.code,r.tenantId)}}xr.PROVIDER_ID="password";xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Rf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends zs{constructor(){super("facebook.com")}static credential(t){return xn._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ke.credentialFromTaggedObject(t)}static credentialFromError(t){return Ke.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ke.credential(t.oauthAccessToken)}catch{return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ke.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return xn._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ge.credentialFromTaggedObject(t)}static credentialFromError(t){return Ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ge.credential(e,r)}catch{return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com";Ge.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends zs{constructor(){super("github.com")}static credential(t){return xn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qe.credentialFromTaggedObject(t)}static credentialFromError(t){return Qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qe.credential(t.oauthAccessToken)}catch{return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com";Qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends zs{constructor(){super("twitter.com")}static credential(t,e){return xn._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ye.credentialFromTaggedObject(t)}static credentialFromError(t){return Ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Ye.credential(e,r)}catch{return null}}}Ye.TWITTER_SIGN_IN_METHOD="twitter.com";Ye.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(n,t){return Ws(n,"POST","/v1/accounts:signUp",fn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await Zt._fromIdTokenResponse(t,r,s),a=Ju(r);return new Fn({user:i,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Ju(r);return new Fn({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Ju(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends ke{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zi.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Zi(t,e,r,s)}}function Pf(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zi._fromErrorAndOperation(n,i,t,r):i})}async function CE(n,t,e=!1){const r=await vr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Fn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(n,t,e=!1){const{auth:r}=n;if(qt(r.app))return Promise.reject(Ie(r));const s="reauthenticate";try{const i=await vr(n,Pf(r,s,t,n),e);j(i.idToken,r,"internal-error");const a=Oc(i.idToken);j(a,r,"internal-error");const{sub:c}=a;return j(n.uid===c,r,"user-mismatch"),Fn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&te(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nf(n,t,e=!1){if(qt(n.app))return Promise.reject(Ie(n));const r="signIn",s=await Pf(n,r,t),i=await Fn._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}async function PE(n,t){return Nf(qn(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(n){const t=qn(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function NE(n,t,e){if(qt(n.app))return Promise.reject(Ie(n));const r=qn(n),a=await Za(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Df(n),u}),c=await Fn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function DE(n,t,e){return qt(n.app)?Promise.reject(Ie(n)):PE(ft(n),xr.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Df(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(n,t){return Ve(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=ft(n),i={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},a=await vr(r,OE(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function VE(n,t,e,r){return ft(n).onIdTokenChanged(t,e,r)}function LE(n,t,e){return ft(n).beforeAuthStateChanged(t,e)}function ME(n,t,e,r){return ft(n).onAuthStateChanged(t,e,r)}function xE(n){return ft(n).signOut()}const to="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(to,"1"),this.storage.removeItem(to),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=1e3,UE=10;class kf extends Of{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=If(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);tE()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,UE):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},FE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}kf.type="LOCAL";const $E=kf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends Of{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Vf.type="SESSION";const Lf=Vf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new To(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!a?.size)return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(e.origin,i)),u=await BE(c);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Mc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return window}function qE(n){ae().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){return typeof ae().WorkerGlobalScope<"u"&&typeof ae().importScripts=="function"}async function HE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WE(){return navigator?.serviceWorker?.controller||null}function zE(){return Mf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="firebaseLocalStorageDb",KE=1,eo="firebaseLocalStorage",Ff="fbase_key";class Ks{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function wo(n,t){return n.transaction([eo],t?"readwrite":"readonly").objectStore(eo)}function GE(){const n=indexedDB.deleteDatabase(xf);return new Ks(n).toPromise()}function tc(){const n=indexedDB.open(xf,KE);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(eo,{keyPath:Ff})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(eo)?t(r):(r.close(),await GE(),t(await tc()))})})}async function Zu(n,t,e){const r=wo(n,!0).put({[Ff]:t,value:e});return new Ks(r).toPromise()}async function QE(n,t){const e=wo(n,!1).get(t),r=await new Ks(e).toPromise();return r===void 0?null:r.value}function th(n,t){const e=wo(n,!0).delete(t);return new Ks(e).toPromise()}const YE=800,XE=3;class Uf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tc(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>XE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(zE()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await HE(),!this.activeServiceWorker)return;this.sender=new jE(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||WE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await tc();return await Zu(t,to,"1"),await th(t,to),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zu(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>QE(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>th(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=wo(s,!1).getAll();return new Ks(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uf.type="LOCAL";const JE=Uf;new Hs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(n,t){return t?we(t):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Vc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return _r(t,this._buildIdpRequest())}_linkToIdToken(t,e){return _r(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return _r(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function tv(n){return Nf(n.auth,new xc(n),n.bypassAuthState)}function ev(n){const{auth:t,user:e}=n;return j(e,t,"internal-error"),RE(e,new xc(n),n.bypassAuthState)}async function nv(n){const{auth:t,user:e}=n;return j(e,t,"internal-error"),CE(e,new xc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return tv;case"linkViaPopup":case"linkViaRedirect":return nv;case"reauthViaPopup":case"reauthViaRedirect":return ev;default:te(this.auth,"internal-error")}}resolve(t){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Hs(2e3,1e4);class fr extends $f{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){Re(this.filter.length===1,"Popup operations only handle one event");const t=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rv.get())};t()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="pendingRedirect",Mi=new Map;class iv extends $f{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Mi.get(this.auth._key());if(!t){try{const r=await ov(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Mi.set(this.auth._key(),t)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ov(n,t){const e=lv(t),r=cv(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function av(n,t){Mi.set(n._key(),t)}function cv(n){return we(n._redirectPersistence)}function lv(n){return Li(sv,n.config.apiKey,n.name)}async function uv(n,t,e=!1){if(qt(n.app))return Promise.reject(Ie(n));const r=qn(n),s=ZE(r,t),a=await new iv(r,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=10*60*1e3;class dv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fv(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!Bf(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";e.onError(oe(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=hv&&this.cachedEventUids.clear(),this.cachedEventUids.has(eh(t))}saveEventToCache(t){this.cachedEventUids.add(eh(t)),this.lastProcessedEventTime=Date.now()}}function eh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Bf({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function fv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(n,t={}){return Ve(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gv=/^https?/;async function _v(n){if(n.config.emulator)return;const{authorizedDomains:t}=await pv(n);for(const e of t)try{if(yv(e))return}catch{}te(n,"unauthorized-domain")}function yv(n){const t=Xa(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!gv.test(e))return!1;if(mv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=new Hs(3e4,6e4);function nh(){const n=ae().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function vv(n){return new Promise((t,e)=>{function r(){nh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nh(),e(oe(n,"network-request-failed"))},timeout:Ev.get()})}if(ae().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(ae().gapi?.load)r();else{const s=lE("iframefcb");return ae()[s]=()=>{gapi.load?r():e(oe(n,"network-request-failed"))},bf(`${cE()}?onload=${s}`).catch(i=>e(i))}}).catch(t=>{throw xi=null,t})}let xi=null;function Tv(n){return xi=xi||vv(n),xi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Hs(5e3,15e3),Iv="__/auth/iframe",Av="emulator/auth/iframe",bv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cv(n){const t=n.config;j(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Dc(t,Av):`https://${n.config.authDomain}/${Iv}`,r={apiKey:t.apiKey,appName:n.name,v:Mr},s=Sv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${qs(r).slice(1)}`}async function Rv(n){const t=await Tv(n),e=ae().gapi;return j(e,n,"internal-error"),t.open({where:document.body,url:Cv(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=oe(n,"network-request-failed"),c=ae().setTimeout(()=>{i(a)},wv.get());function u(){ae().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nv=500,Dv=600,Ov="_blank",kv="http://localhost";class rh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vv(n,t,e,r=Nv,s=Dv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...Pv,width:r.toString(),height:s.toString(),top:i,left:a},d=bt().toLowerCase();e&&(c=yf(d)?Ov:e),gf(d)&&(t=t||kv,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[A,N])=>`${E}${A}=${N},`,"");if(Zy(d)&&c!=="_self")return Lv(t||"",c),new rh(null);const m=window.open(t||"",c,f);j(m,n,"popup-blocked");try{m.focus()}catch{}return new rh(m)}function Lv(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="__/auth/handler",xv="emulator/auth/handler",Fv=encodeURIComponent("fac");async function sh(n,t,e,r,s,i){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Mr,eventId:s};if(t instanceof Rf){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",T_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(t instanceof zs){const f=t.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${Fv}=${encodeURIComponent(u)}`:"";return`${Uv(n)}?${qs(c).slice(1)}${d}`}function Uv({config:n}){return n.emulator?Dc(n,xv):`https://${n.authDomain}/${Mv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="webStorageSupport";class $v{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lf,this._completeRedirectFn=uv,this._overrideRedirectResult=av}async _openPopup(t,e,r,s){Re(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await sh(t,e,r,Xa(),s);return Vv(t,i,Mc())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await sh(t,e,r,Xa(),s);return qE(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(Re(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Rv(t),r=new dv(t);return e.register("authEvent",s=>(j(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Aa,{type:Aa},s=>{const i=s?.[0]?.[Aa];i!==void 0&&e(!!i),te(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=_v(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return If()||_f()||kc()}}const Bv=$v;var ih="@firebase/auth",oh="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hv(n){Er(new Mn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Af(n)},d=new iE(r,s,i,u);return mE(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Er(new Mn("auth-internal",t=>{const e=qn(t.getProvider("auth").getImmediate());return(r=>new jv(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(ih,oh,qv(n)),tn(ih,oh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=5*60,zv=Jd("authIdTokenMaxAge")||Wv;let ah=null;const Kv=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>zv)return;const s=e?.token;ah!==s&&(ah=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gv(n=sf()){const t=Pc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=pE(n,{popupRedirectResolver:Bv,persistence:[JE,$E,Lf]}),r=Jd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Kv(i.toString());LE(e,a,()=>a(e.currentUser)),VE(e,c=>a(c))}}const s=Yd("auth");return s&&gE(e,`http://${s}`),e}function Qv(){return document.getElementsByTagName("head")?.[0]??document}oE({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=oe("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Qv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hv("Browser");var Yv="firebase",Xv="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(Yv,Xv,"app");var ch=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var en,jf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,g){function y(){}y.prototype=g.prototype,T.F=g.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(w,v,I){for(var _=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)_[ot-2]=arguments[ot];return g.prototype[v].apply(w,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,y){y||(y=0);const w=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)w[v]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(v=0;v<16;++v)w[v]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=T.g[0],y=T.g[1],v=T.g[2];let I=T.g[3],_;_=g+(I^y&(v^I))+w[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+w[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+w[2]+606105819&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+w[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+w[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+w[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+w[6]+2821735955&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+w[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+w[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+w[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+w[10]+4294925233&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+w[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(I^y&(v^I))+w[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(v^g&(y^v))+w[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=v+(y^I&(g^y))+w[14]+2792965006&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(g^v&(I^g))+w[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(v^I&(y^v))+w[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+w[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+w[11]+643717713&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+w[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+w[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+w[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+w[15]+3634488961&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+w[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+w[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+w[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+w[3]+4107603335&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+w[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^I&(y^v))+w[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(g^y))+w[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(I^g))+w[7]+1735328473&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(v^I))+w[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(y^v^I)+w[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+w[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+w[11]+1839030562&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+w[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+w[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+w[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+w[7]+4139469664&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+w[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+w[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+w[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+w[3]+3572445317&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+w[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^I)+w[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^v)+w[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=v+(I^g^y)+w[15]+530742520&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^g)+w[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(v^(y|~I))+w[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+w[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+w[14]+2878612391&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+w[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+w[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+w[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+w[10]+4293915773&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+w[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+w[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+w[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+w[6]+2734768916&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+w[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~I))+w[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~v))+w[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=v+(g^(I|~y))+w[2]+718787259&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~g))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.v=function(T,g){g===void 0&&(g=T.length);const y=g-this.blockSize,w=this.C;let v=this.h,I=0;for(;I<g;){if(v==0)for(;I<=y;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<g;)if(w[v++]=T.charCodeAt(I++),v==this.blockSize){s(this,w),v=0;break}}else for(;I<g;)if(w[v++]=T[I++],v==this.blockSize){s(this,w),v=0;break}}this.h=v,this.o+=g},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)T[g++]=this.g[y]>>>w&255;return T};function i(T,g){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=g(T)}function a(T,g){this.h=g;const y=[];let w=!0;for(let v=T.length-1;v>=0;v--){const I=T[v]|0;w&&I==g||(y[v]=I,w=!1)}this.g=y}var c={};function u(T){return-128<=T&&T<128?i(T,function(g){return new a([g|0],g<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return R(d(-T));const g=[];let y=1;for(let w=0;T>=y;w++)g[w]=T/y|0,y*=4294967296;return new a(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return R(f(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let w=m;for(let I=0;I<T.length;I+=8){var v=Math.min(8,T.length-I);const _=parseInt(T.substring(I,I+v),g);v<8?(v=d(Math.pow(g,v)),w=w.j(v).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var m=u(0),E=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-R(this).m();let T=0,g=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);T+=(w>=0?w:4294967296+w)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(D(this))return"-"+R(this).toString(T);const g=d(Math.pow(T,6));var y=this;let w="";for(;;){const v=B(y,g).g;y=L(y,v.j(g));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=v,N(y))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=L(this,T),D(T)?-1:N(T)?0:1};function R(T){const g=T.g.length,y=[];for(let w=0;w<g;w++)y[w]=~T.g[w];return new a(y,~T.h).add(E)}n.abs=function(){return D(this)?R(this):this},n.add=function(T){const g=Math.max(this.g.length,T.g.length),y=[];let w=0;for(let v=0;v<=g;v++){let I=w+(this.i(v)&65535)+(T.i(v)&65535),_=(I>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);w=_>>>16,I&=65535,_&=65535,y[v]=_<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function L(T,g){return T.add(R(g))}n.j=function(T){if(N(this)||N(T))return m;if(D(this))return D(T)?R(this).j(R(T)):R(R(this).j(T));if(D(T))return R(this.j(R(T)));if(this.l(A)<0&&T.l(A)<0)return d(this.m()*T.m());const g=this.g.length+T.g.length,y=[];for(var w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let v=0;v<T.g.length;v++){const I=this.i(w)>>>16,_=this.i(w)&65535,ot=T.i(v)>>>16,St=T.i(v)&65535;y[2*w+2*v]+=_*St,x(y,2*w+2*v),y[2*w+2*v+1]+=I*St,x(y,2*w+2*v+1),y[2*w+2*v+1]+=_*ot,x(y,2*w+2*v+1),y[2*w+2*v+2]+=I*ot,x(y,2*w+2*v+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function x(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function $(T,g){this.g=T,this.h=g}function B(T,g){if(N(g))throw Error("division by zero");if(N(T))return new $(m,m);if(D(T))return g=B(R(T),g),new $(R(g.g),R(g.h));if(D(g))return g=B(T,R(g)),new $(R(g.g),g.h);if(T.g.length>30){if(D(T)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,w=g;w.l(T)<=0;)y=K(y),w=K(w);var v=H(y,1),I=H(w,1);for(w=H(w,2),y=H(y,2);!N(w);){var _=I.add(w);_.l(T)<=0&&(v=v.add(y),I=_),w=H(w,1),y=H(y,1)}return g=L(T,v.j(g)),new $(v,g)}for(v=m;T.l(g)>=0;){for(y=Math.max(1,Math.floor(T.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=d(y),_=I.j(g);D(_)||_.l(T)>0;)y-=w,I=d(y),_=I.j(g);N(I)&&(I=E),v=v.add(I),T=L(T,_)}return new $(v,T)}n.B=function(T){return B(this,T).h},n.and=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)&T.i(w);return new a(y,this.h&T.h)},n.or=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)|T.i(w);return new a(y,this.h|T.h)},n.xor=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)^T.i(w);return new a(y,this.h^T.h)};function K(T){const g=T.g.length+1,y=[];for(let w=0;w<g;w++)y[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(y,T.h)}function H(T,g){const y=g>>5;g%=32;const w=T.g.length-y,v=[];for(let I=0;I<w;I++)v[I]=g>0?T.i(I+y)>>>g|T.i(I+y+1)<<32-g:T.i(I+y);return new a(v,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,en=a}).apply(typeof ch<"u"?ch:typeof self<"u"?self:typeof window<"u"?window:{});var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qf,ys,Hf,Fi,ec,Wf,zf,Kf;(function(){var n,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof wi=="object"&&wi];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(o,l){if(l)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break t;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function f(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,b,S){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return l.prototype[b].apply(p,k)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function N(o,l){for(let p=1;p<arguments.length;p++){const b=arguments[p];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const S=b.length||0;o.length=h+S;for(let k=0;k<S;k++)o[h+k]=b[k]}else o.push(b)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function R(o){a.setTimeout(()=>{throw o},0)}function L(){var o=T;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class x{constructor(){this.h=this.g=null}add(l,h){const p=$.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var $=new D(()=>new B,o=>o.reset());class B{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let K,H=!1,T=new x,g=()=>{const o=Promise.resolve(void 0);K=()=>{o.then(y)}};function y(){for(var o;o=L();){try{o.h.call(o.g)}catch(h){R(h)}var l=$;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}H=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function ot(o,l){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}m(ot,v),ot.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ot.Z.h.call(this)},ot.prototype.h=function(){ot.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var St="closure_listenable_"+(Math.random()*1e6|0),Ct=0;function Lt(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++Ct,this.da=this.fa=!1}function ge(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Bt(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function Gn(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Qn(o){const l={};for(const h in o)l[h]=o[h];return l}const Me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vn(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let S=0;S<Me.length;S++)h=Me[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Xt(o){this.src=o,this.g={},this.h=0}Xt.prototype.add=function(o,l,h,p,b){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const k=_e(o,l,p,b);return k>-1?(l=o[k],h||(l.fa=!1)):(l=new Lt(l,this.src,S,!!p,b),l.fa=h,o.push(l)),l};function jt(o,l){const h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),S;(S=b>=0)&&Array.prototype.splice.call(p,b,1),S&&(ge(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function _e(o,l,h,p){for(let b=0;b<o.length;++b){const S=o[b];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return b}return-1}var xe="closure_lm_"+(Math.random()*1e6|0),Jt={};function Yn(o,l,h,p,b){if(Array.isArray(l)){for(let S=0;S<l.length;S++)Yn(o,l[S],h,p,b);return null}return h=ci(h),o&&o[St]?o.J(l,h,c(p)?!!p.capture:!1,b):ta(o,l,h,!1,p,b)}function ta(o,l,h,p,b,S){if(!l)throw Error("Invalid event type");const k=c(b)?!!b.capture:!!b;let G=Jn(o);if(G||(o[xe]=G=new Xt(o)),h=G.add(l,h,p,k,S),h.proxy)return h;if(p=Kr(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)I||(b=k),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(ai(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Kr(){function o(h){return l.call(o.src,o.listener,h)}const l=ea;return o}function oi(o,l,h,p,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)oi(o,l[S],h,p,b);else p=c(p)?!!p.capture:!!p,h=ci(h),o&&o[St]?(o=o.i,S=String(l).toString(),S in o.g&&(l=o.g[S],h=_e(l,h,p,b),h>-1&&(ge(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[S],o.h--)))):o&&(o=Jn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=_e(l,h,p,b)),(h=o>-1?l[o]:null)&&Xn(h))}function Xn(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[St])jt(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(ai(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Jn(l))?(jt(h,o),h.h==0&&(h.src=null,l[xe]=null)):ge(o)}}}function ai(o){return o in Jt?Jt[o]:Jt[o]="on"+o}function ea(o,l){if(o.da)o=!0;else{l=new ot(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&Xn(o),o=h.call(p,l)}return o}function Jn(o){return o=o[xe],o instanceof Xt?o:null}var Zn="__closure_events_fn_"+(Math.random()*1e9>>>0);function ci(o){return typeof o=="function"?o:(o[Zn]||(o[Zn]=function(l){return o.handleEvent(l)}),o[Zn])}function gt(){w.call(this),this.i=new Xt(this),this.M=this,this.G=null}m(gt,w),gt.prototype[St]=!0,gt.prototype.removeEventListener=function(o,l,h,p){oi(this,o,l,h,p)};function st(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new v(l,o);else if(l instanceof v)l.target=l.target||o;else{var b=l;l=new v(p,o),vn(l,b)}b=!0;let S,k;if(h)for(k=h.length-1;k>=0;k--)S=l.g=h[k],b=ye(S,p,!0,l)&&b;if(S=l.g=o,b=ye(S,p,!0,l)&&b,b=ye(S,p,!1,l)&&b,h)for(k=0;k<h.length;k++)S=l.g=h[k],b=ye(S,p,!1,l)&&b}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)ge(h[p]);delete o.g[l],o.h--}}this.G=null},gt.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},gt.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function ye(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let S=0;S<l.length;++S){const k=l[S];if(k&&!k.da&&k.capture==h){const G=k.listener,pt=k.ha||k.src;k.fa&&jt(o.i,k),b=G.call(pt,p)!==!1&&b}}return b&&!p.defaultPrevented}function li(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Gr(o){o.g=li(()=>{o.g=null,o.i&&(o.i=!1,Gr(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Qr extends w{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Gr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(o){w.call(this),this.h=o,this.g={}}m(Fe,w);var Yr=[];function Xr(o){Bt(o.g,function(l,h){this.g.hasOwnProperty(h)&&Xn(l)},o),o.g={}}Fe.prototype.N=function(){Fe.Z.N.call(this),Xr(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tr=a.JSON.stringify,Sg=a.JSON.parse,Cg=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Bl(){}function jl(){}var Jr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function na(){v.call(this,"d")}m(na,v);function ra(){v.call(this,"c")}m(ra,v);var Tn={},ql=null;function ui(){return ql=ql||new gt}Tn.Ia="serverreachability";function Hl(o){v.call(this,Tn.Ia,o)}m(Hl,v);function Zr(o){const l=ui();st(l,new Hl(l))}Tn.STAT_EVENT="statevent";function Wl(o,l){v.call(this,Tn.STAT_EVENT,o),this.stat=l}m(Wl,v);function Rt(o){const l=ui();st(l,new Wl(l,o))}Tn.Ja="timingevent";function zl(o,l){v.call(this,Tn.Ja,o),this.size=l}m(zl,v);function ts(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function es(){this.g=!0}es.prototype.ua=function(){this.g=!1};function Rg(o,l,h,p,b,S){o.info(function(){if(o.g)if(S){var k="",G=S.split("&");for(let tt=0;tt<G.length;tt++){var pt=G[tt].split("=");if(pt.length>1){const _t=pt[0];pt=pt[1];const se=_t.split("_");k=se.length>=2&&se[1]=="type"?k+(_t+"="+pt+"&"):k+(_t+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+k})}function Pg(o,l,h,p,b,S,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+S+" "+k})}function er(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Dg(o,h)+(p?" "+p:"")})}function Ng(o,l){o.info(function(){return"TIMEOUT: "+l})}es.prototype.info=function(){};function Dg(o,l){if(!o.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var b=p[0];if(b!="noop"&&b!="stop"&&b!="close")for(let k=1;k<p.length;k++)p[k]=""}}}}return tr(S)}catch{return l}}var hi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Gl;function sa(){}m(sa,Bl),sa.prototype.g=function(){return new XMLHttpRequest},Gl=new sa;function ns(o){return encodeURIComponent(String(o))}function Og(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function Ue(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new Fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ql}function Ql(){this.i=null,this.g="",this.h=!1}var Yl={},ia={};function oa(o,l,h){o.M=1,o.A=fi(re(l)),o.u=h,o.R=!0,Xl(o,null)}function Xl(o,l){o.F=Date.now(),di(o),o.B=re(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),uu(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Ql,o.g=Ru(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Qr(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(Yr[0]=b.toString()),b=Yr);for(let S=0;S<b.length;S++){const k=Yn(h,b[S],p||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.J?Qn(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Zr(),Rg(o.i,o.v,o.B,o.l,o.S,o.u)}Ue.prototype.ba=function(o){o=o.target;const l=this.O;l&&je(o)==3?l.j():this.Y(o)},Ue.prototype.Y=function(o){try{if(o==this.g)t:{const G=je(this.g),pt=this.g.ya(),tt=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||_u(this.g)))){this.K||G!=4||pt==7||(pt==8||tt<=0?Zr(3):Zr(2)),aa(this);var l=this.g.ca();this.X=l;var h=kg(this);if(this.o=l==200,Pg(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){e:{if(this.g){var p,b=this.g;if((p=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var S=p;break e}}S=null}if(o=S)er(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ca(this,o);else{this.o=!1,this.m=3,Rt(12),wn(this),rs(this);break t}}if(this.R){o=!0;let _t;for(;!this.K&&this.C<h.length;)if(_t=Vg(this,h),_t==ia){G==4&&(this.m=4,Rt(14),o=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==Yl){this.m=4,Rt(15),er(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else er(this.i,this.l,_t,null),ca(this,_t);if(Jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||h.length!=0||this.h.h||(this.m=1,Rt(16),o=!1),this.o=this.o&&o,!o)er(this.i,this.l,h,"[Invalid Chunked Response]"),wn(this),rs(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ga(k),k.P=!0,Rt(11))}}else er(this.i,this.l,h,null),ca(this,h);G==4&&wn(this),this.o&&!this.K&&(G==4?Au(this.j,this):(this.o=!1,di(this)))}else Gg(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),wn(this),rs(this)}}}catch{}finally{}};function kg(o){if(!Jl(o))return o.g.la();const l=_u(o.g);if(l==="")return"";let h="";const p=l.length,b=je(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return wn(o),rs(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,h+=o.h.i.decode(l[S],{stream:!(b&&S==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Jl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Vg(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?ia:(h=Number(l.substring(h,p)),isNaN(h)?Yl:(p+=1,p+h>l.length?ia:(l=l.slice(p,p+h),o.C=p+h,l)))}Ue.prototype.cancel=function(){this.K=!0,wn(this)};function di(o){o.T=Date.now()+o.H,Zl(o,o.H)}function Zl(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ts(d(o.aa,o),l)}function aa(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ue.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Ng(this.i,this.B),this.M!=2&&(Zr(),Rt(17)),wn(this),this.m=2,rs(this)):Zl(this,this.T-o)};function rs(o){o.j.I==0||o.K||Au(o.j,o)}function wn(o){aa(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Xr(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function ca(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||la(h.h,o))){if(!o.L&&la(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)yi(h),gi(h);else break t;ma(h),Rt(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=ts(d(h.Va,h),6e3));nu(h.h)<=1&&h.ta&&(h.ta=void 0)}else An(h,11)}else if((o.L||h.g==o)&&yi(h),!_(l))for(b=h.Ba.g.parse(l),l=0;l<b.length;l++){let tt=b[l];const _t=tt[0];if(!(_t<=h.K))if(h.K=_t,tt=tt[1],h.I==2)if(tt[0]=="c"){h.M=tt[1],h.ba=tt[2];const se=tt[3];se!=null&&(h.ka=se,h.j.info("VER="+h.ka));const bn=tt[4];bn!=null&&(h.za=bn,h.j.info("SVER="+h.za));const qe=tt[5];qe!=null&&typeof qe=="number"&&qe>0&&(p=1.5*qe,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const He=o.g;if(He){const vi=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vi){var S=p.h;S.g||vi.indexOf("spdy")==-1&&vi.indexOf("quic")==-1&&vi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ua(S,S.h),S.h=null))}if(p.G){const _a=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;_a&&(p.wa=_a,nt(p.J,p.G,_a))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var k=o;if(p.na=Cu(p,p.L?p.ba:null,p.W),k.L){ru(p.h,k);var G=k,pt=p.O;pt&&(G.H=pt),G.D&&(aa(G),di(G)),p.g=k}else wu(p);h.i.length>0&&_i(h)}else tt[0]!="stop"&&tt[0]!="close"||An(h,7);else h.I==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?An(h,7):pa(h):tt[0]!="noop"&&h.l&&h.l.qa(tt),h.A=0)}}Zr(4)}catch{}}var Lg=class{constructor(o,l){this.g=o,this.map=l}};function tu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function eu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nu(o){return o.h?1:o.g?o.g.size:0}function la(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ua(o,l){o.g?o.g.add(l):o.h=l}function ru(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}tu.prototype.cancel=function(){if(this.i=su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function su(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return A(o.i)}var iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mg(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let b,S=null;p>=0?(b=o[h].substring(0,p),S=o[h].substring(p+1)):b=o[h],l(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function $e(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof $e?(this.l=o.l,ss(this,o.j),this.o=o.o,this.g=o.g,is(this,o.u),this.h=o.h,ha(this,hu(o.i)),this.m=o.m):o&&(l=String(o).match(iu))?(this.l=!1,ss(this,l[1]||"",!0),this.o=os(l[2]||""),this.g=os(l[3]||"",!0),is(this,l[4]),this.h=os(l[5]||"",!0),ha(this,l[6]||"",!0),this.m=os(l[7]||"")):(this.l=!1,this.i=new cs(null,this.l))}$e.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(as(l,ou,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(as(l,ou,!0),"@"),o.push(ns(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(as(h,h.charAt(0)=="/"?Ug:Fg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",as(h,Bg)),o.join("")},$e.prototype.resolve=function(o){const l=re(this);let h=!!o.j;h?ss(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)is(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var b=l.h.lastIndexOf("/");b!=-1&&(p=l.h.slice(0,b+1)+p)}if(b=p,b==".."||b==".")p="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){p=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let k=0;k<b.length;){const G=b[k++];G=="."?p&&k==b.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&k==b.length&&S.push("")):(S.push(G),p=!0)}p=S.join("/")}else p=b}return h?l.h=p:h=o.i.toString()!=="",h?ha(l,hu(o.i)):h=!!o.m,h&&(l.m=o.m),l};function re(o){return new $e(o)}function ss(o,l,h){o.j=h?os(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function ha(o,l,h){l instanceof cs?(o.i=l,jg(o.i,o.l)):(h||(l=as(l,$g)),o.i=new cs(l,o.l))}function nt(o,l,h){o.i.set(l,h)}function fi(o){return nt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function os(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function as(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,xg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ou=/[#\/\?@]/g,Fg=/[#\?:]/g,Ug=/[#\?]/g,$g=/[#\?@]/g,Bg=/#/g;function cs(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function In(o){o.g||(o.g=new Map,o.h=0,o.i&&Mg(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=cs.prototype,n.add=function(o,l){In(this),this.i=null,o=nr(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function au(o,l){In(o),l=nr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function cu(o,l){return In(o),l=nr(o,l),o.g.has(l)}n.forEach=function(o,l){In(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)};function lu(o,l){In(o);let h=[];if(typeof l=="string")cu(o,l)&&(h=h.concat(o.g.get(nr(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return In(this),this.i=null,o=nr(this,o),cu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=lu(this,o),o.length>0?String(o[0]):l):l};function uu(o,l,h){au(o,l),h.length>0&&(o.i=null,o.g.set(nr(o,l),A(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const b=ns(h);h=lu(this,h);for(let S=0;S<h.length;S++){let k=b;h[S]!==""&&(k+="="+ns(h[S])),o.push(k)}}return this.i=o.join("&")};function hu(o){const l=new cs;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function nr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function jg(o,l){l&&!o.j&&(In(o),o.i=null,o.g.forEach(function(h,p){const b=p.toLowerCase();p!=b&&(au(this,p),uu(this,b,h))},o)),o.j=l}function qg(o,l){const h=new es;if(a.Image){const p=new Image;p.onload=f(Be,h,"TestLoadImage: loaded",!0,l,p),p.onerror=f(Be,h,"TestLoadImage: error",!1,l,p),p.onabort=f(Be,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=f(Be,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Hg(o,l){const h=new es,p=new AbortController,b=setTimeout(()=>{p.abort(),Be(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?Be(h,"TestPingServer: ok",!0,l):Be(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Be(h,"TestPingServer: error",!1,l)})}function Be(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function Wg(){this.g=new Cg}function da(o){this.i=o.Sb||null,this.h=o.ab||!1}m(da,Bl),da.prototype.g=function(){return new pi(this.i,this.h)};function pi(o,l){gt.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(pi,gt),n=pi.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,us(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;du(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function du(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ls(this):us(this),this.readyState==3&&du(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ls(this))},n.Na=function(o){this.g&&(this.response=o,ls(this))},n.ga=function(){this.g&&ls(this)};function ls(o){o.readyState=4,o.l=null,o.j=null,o.B=null,us(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function us(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function fu(o){let l="";return Bt(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function fa(o,l,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=fu(h),typeof o=="string"?h!=null&&ns(h):nt(o,l,h))}function at(o){gt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(at,gt);var zg=/^https?$/i,Kg=["POST","PUT"];n=at.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gl.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){pu(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Kg,l,void 0)>=0)||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){pu(this,S)}};function pu(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,mu(o),mi(o)}function mu(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,st(this,"complete"),st(this,"abort"),mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),at.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?gu(this):this.Xa())},n.Xa=function(){gu(this)};function gu(o){if(o.h&&typeof i<"u"){if(o.v&&je(o)==4)setTimeout(o.Ca.bind(o),0);else if(st(o,"readystatechange"),je(o)==4){o.h=!1;try{const S=o.ca();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var p;if(p=S===0){let k=String(o.D).match(iu)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),p=!zg.test(k?k.toLowerCase():"")}h=p}if(h)st(o,"complete"),st(o,"success");else{o.o=6;try{var b=je(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",mu(o)}}finally{mi(o)}}}}function mi(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||st(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function je(o){return o.g?o.g.readyState:0}n.ca=function(){try{return je(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Sg(l)}};function _u(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Gg(o){const l={};o=(o.g&&je(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var h=Og(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[b]||[];l[b]=S,S.push(h)}Gn(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function yu(o){this.za=0,this.i=[],this.j=new es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hs("baseRetryDelayMs",5e3,o),this.Za=hs("retryDelaySeedMs",1e4,o),this.Ta=hs("forwardChannelMaxRetries",2,o),this.va=hs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new tu(o&&o.concurrentRequestLimit),this.Ba=new Wg,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=yu.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){Rt(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Cu(this,null,this.W),_i(this)};function pa(o){if(Eu(o),o.I==3){var l=o.V++,h=re(o.J);if(nt(h,"SID",o.M),nt(h,"RID",l),nt(h,"TYPE","terminate"),ds(o,h),l=new Ue(o,o.j,l),l.M=2,l.A=fi(re(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=Ru(l.j,null),l.g.ea(l.A)),l.F=Date.now(),di(l)}Su(o)}function gi(o){o.g&&(ga(o),o.g.cancel(),o.g=null)}function Eu(o){gi(o),o.v&&(a.clearTimeout(o.v),o.v=null),yi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function _i(o){if(!eu(o.h)&&!o.m){o.m=!0;var l=o.Ea;K||g(),H||(K(),H=!0),T.add(l,o),o.D=0}}function Qg(o,l){return nu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ts(d(o.Ea,o,l),bu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new Ue(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Qn(S),vn(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=Tu(this,b,l),h=re(this.J),nt(h,"RID",o),nt(h,"CVER",22),this.G&&nt(h,"X-HTTP-Session-Id",this.G),ds(this,h),S&&(this.R?l="headers="+ns(fu(S))+"&"+l:this.u&&fa(h,this.u,S)),ua(this.h,b),this.Ra&&nt(h,"TYPE","init"),this.S?(nt(h,"$req",l),nt(h,"SID","null"),b.U=!0,oa(b,h,null)):oa(b,h,l),this.I=2}}else this.I==3&&(o?vu(this,o):this.i.length==0||eu(this.h)||vu(this))};function vu(o,l){var h;l?h=l.l:h=o.V++;const p=re(o.J);nt(p,"SID",o.M),nt(p,"RID",h),nt(p,"AID",o.K),ds(o,p),o.u&&o.o&&fa(p,o.u,o.o),h=new Ue(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Tu(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ua(o.h,h),oa(h,p,l)}function ds(o,l){o.H&&Bt(o.H,function(h,p){nt(l,p,h)}),o.l&&Bt({},function(h,p){nt(l,p,h)})}function Tu(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;t:{var b=o.i;let G=-1;for(;;){const pt=["count="+h];G==-1?h>0?(G=b[0].g,pt.push("ofs="+G)):G=0:pt.push("ofs="+G);let tt=!0;for(let _t=0;_t<h;_t++){var S=b[_t].g;const se=b[_t].map;if(S-=G,S<0)G=Math.max(0,b[_t].g-100),tt=!1;else try{S="req"+S+"_"||"";try{var k=se instanceof Map?se:Object.entries(se);for(const[bn,qe]of k){let He=qe;c(qe)&&(He=tr(qe)),pt.push(S+bn+"="+encodeURIComponent(He))}}catch(bn){throw pt.push(S+"type="+encodeURIComponent("_badmap")),bn}}catch{p&&p(se)}}if(tt){k=pt.join("&");break t}}k=void 0}return o=o.i.splice(0,h),l.G=o,k}function wu(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;K||g(),H||(K(),H=!0),T.add(l,o),o.A=0}}function ma(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ts(d(o.Da,o),bu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Iu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ts(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),gi(this),Iu(this))};function ga(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Iu(o){o.g=new Ue(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=re(o.na);nt(l,"RID","rpc"),nt(l,"SID",o.M),nt(l,"AID",o.K),nt(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&nt(l,"TO",o.ia),nt(l,"TYPE","xmlhttp"),ds(o,l),o.u&&o.o&&fa(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=fi(re(l)),h.u=null,h.R=!0,Xl(h,o)}n.Va=function(){this.C!=null&&(this.C=null,gi(this),ma(this),Rt(19))};function yi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Au(o,l){var h=null;if(o.g==l){yi(o),ga(o),o.g=null;var p=2}else if(la(o.h,l))h=l.G,ru(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var b=o.D;p=ui(),st(p,new zl(p,h)),_i(o)}else wu(o);else if(b=l.m,b==3||b==0&&l.X>0||!(p==1&&Qg(o,l)||p==2&&ma(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),b){case 1:An(o,5);break;case 4:An(o,10);break;case 3:An(o,6);break;default:An(o,2)}}}function bu(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function An(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const b=!p;p=new $e(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ss(p,"https"),fi(p),b?qg(p.toString(),h):Hg(p.toString(),h)}else Rt(2);o.I=0,o.l&&o.l.pa(l),Su(o),Eu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Su(o){if(o.I=0,o.ja=[],o.l){const l=su(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ja,l),N(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function Cu(o,l,h){var p=h instanceof $e?re(h):new $e(h);if(p.g!="")l&&(p.g=l+"."+p.g),is(p,p.u);else{var b=a.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const S=new $e(null);p&&ss(S,p),l&&(S.g=l),b&&is(S,b),h&&(S.h=h),p=S}return h=o.G,l=o.wa,h&&l&&nt(p,h,l),nt(p,"VER",o.ka),ds(o,p),p}function Ru(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new at(new da({ab:h})):new at(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pu(){}n=Pu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ei(){}Ei.prototype.g=function(o,l){return new Mt(o,l)};function Mt(o,l){gt.call(this),this.g=new yu(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!_(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new rr(this)}m(Mt,gt),Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){pa(this.g)},Mt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=tr(o),o=h);l.i.push(new Lg(l.Ya++,o)),l.I==3&&_i(l)},Mt.prototype.N=function(){this.g.l=null,delete this.j,pa(this.g),delete this.g,Mt.Z.N.call(this)};function Nu(o){na.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}m(Nu,na);function Du(){ra.call(this),this.status=1}m(Du,ra);function rr(o){this.g=o}m(rr,Pu),rr.prototype.ra=function(){st(this.g,"a")},rr.prototype.qa=function(o){st(this.g,new Nu(o))},rr.prototype.pa=function(o){st(this.g,new Du)},rr.prototype.oa=function(){st(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Kf=function(){return new Ei},zf=function(){return ui()},Wf=Tn,ec={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hi.NO_ERROR=0,hi.TIMEOUT=8,hi.HTTP_ERROR=6,Fi=hi,Kl.COMPLETE="complete",Hf=Kl,jl.EventType=Jr,Jr.OPEN="a",Jr.CLOSE="b",Jr.ERROR="c",Jr.MESSAGE="d",gt.prototype.listen=gt.prototype.J,ys=jl,at.prototype.listenOnce=at.prototype.K,at.prototype.getLastError=at.prototype.Ha,at.prototype.getLastErrorCode=at.prototype.ya,at.prototype.getStatus=at.prototype.ca,at.prototype.getResponseJson=at.prototype.La,at.prototype.getResponseText=at.prototype.la,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Fa,qf=at}).apply(typeof wi<"u"?wi:typeof self<"u"?self:typeof window<"u"?window:{});const lh="@firebase/firestore",uh="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Cc("@firebase/firestore");function or(){return Un.logLevel}function M(n,...t){if(Un.logLevel<=Q.DEBUG){const e=t.map(Fc);Un.debug(`Firestore (${Fr}): ${n}`,...e)}}function Pe(n,...t){if(Un.logLevel<=Q.ERROR){const e=t.map(Fc);Un.error(`Firestore (${Fr}): ${n}`,...e)}}function Tr(n,...t){if(Un.logLevel<=Q.WARN){const e=t.map(Fc);Un.warn(`Firestore (${Fr}): ${n}`,...e)}}function Fc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Gf(n,r,e)}function Gf(n,t,e){let r=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Pe(r),new Error(r)}function Z(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Gf(t,s,r)}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class Zv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class tT{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Z(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let i=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ae,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ae)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new Qf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string",2055,{h:t}),new It(t)}}class eT{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nT{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new eT(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rT{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Z(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hh(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new hh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function Y(n,t){return n<t?-1:n>t?1:0}function nc(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return ba(s)===ba(i)?Y(s,i):ba(s)?1:-1}return Y(n.length,t.length)}const iT=55296,oT=57343;function ba(n){const t=n.charCodeAt(0);return t>=iT&&t<=oT}function wr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="__name__";class ie{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&q(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ie.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ie?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=ie.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return Y(t.length,e.length)}static compareSegments(t,e){const r=ie.isNumericId(t),s=ie.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?ie.extractNumericId(t).compare(ie.extractNumericId(e)):nc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return en.fromString(t.substring(4,t.length-2))}}class et extends ie{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const aT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends ie{construct(t,e,r){return new vt(t,e,r)}static isValidIdentifier(t){return aT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dh}static keyField(){return new vt([dh])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vt(e)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(et.fromString(t))}static fromName(t){return new F(et.fromString(t).popFirst(5))}static empty(){return new F(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new et(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,t,e){if(!e)throw new V(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function cT(n,t,e,r){if(t===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fh(n){if(!F.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ph(n){if(F.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Vt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Io(n);throw new V(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Gs(n,t){if(!Xf(n))throw new V(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new V(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=-62135596800,gh=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*gh);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<mh)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gh}_compareTo(t){return this.seconds===t.seconds?Y(this.nanoseconds,t.nanoseconds):Y(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Gs(t,rt._jsonSchema))return new rt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-mh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:dt("string",rt._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new rt(0,0))}static max(){return new W(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=-1;function lT(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new rn(s,F.empty(),t)}function uT(n){return new rn(n.readTime,n.key,Os)}class rn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new rn(W.min(),F.empty(),Os)}static max(){return new rn(W.max(),F.empty(),Os)}}function hT(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:Y(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==dT)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,i=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&e()},u=>r(u))}),a=!0,i===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;e(t[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(t,e){return new P((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}function pT(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ao.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=-1;function bo(n){return n==null}function no(n){return n===0&&1/n==-1/0}function mT(n){return typeof n=="number"&&Number.isInteger(n)&&!no(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="";function gT(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=_h(t)),t=_T(n.get(e),t);return _h(t)}function _T(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case Jf:e+="";break;default:e+=i}}return e}function _h(n){return n+Jf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function pn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Zf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||Et.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ii(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ii(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ii(this.root,t,this.comparator,!0)}}class Ii{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Et(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw q(27949);return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Eh(this.data.getIterator())}getIteratorFrom(t){return new Eh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class Eh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.fields=t,t.sort(vt.comparator)}static empty(){return new xt([])}unionWith(t){let e=new mt(vt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return wr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tp("Invalid base64 string: "+i):i}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Y(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const yT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sn(n){if(Z(!!n,39018),typeof n=="string"){let t=0;const e=yT.exec(n);if(Z(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Tt.fromBase64String(n):Tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="server_timestamp",np="__type__",rp="__previous_value__",sp="__local_write_time__";function Bc(n){return(n?.mapValue?.fields||{})[np]?.stringValue===ep}function So(n){const t=n.mapValue.fields[rp];return Bc(t)?So(t):t}function ks(n){const t=sn(n.mapValue.fields[sp].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(t,e,r,s,i,a,c,u,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const ro="(default)";class Vs{constructor(t,e){this.projectId=t,this.database=e||ro}static empty(){return new Vs("","")}get isDefaultDatabase(){return this.database===ro}isEqual(t){return t instanceof Vs&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="__type__",vT="__max__",Ai={mapValue:{}},op="__vector__",so="value";function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bc(n)?4:wT(n)?9007199254740991:TT(n)?10:11:q(28295,{value:n})}function pe(n,t){if(n===t)return!0;const e=an(n);if(e!==an(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ks(n).isEqual(ks(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=sn(s.timestampValue),c=sn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return on(s.bytesValue).isEqual(on(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return lt(s.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return lt(s.integerValue)===lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=lt(s.doubleValue),c=lt(i.doubleValue);return a===c?no(a)===no(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return wr(n.arrayValue.values||[],t.arrayValue.values||[],pe);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(yh(a)!==yh(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!pe(a[u],c[u])))return!1;return!0}(n,t);default:return q(52216,{left:n})}}function Ls(n,t){return(n.values||[]).find(e=>pe(e,t))!==void 0}function Ir(n,t){if(n===t)return 0;const e=an(n),r=an(t);if(e!==r)return Y(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,t.booleanValue);case 2:return function(i,a){const c=lt(i.integerValue||i.doubleValue),u=lt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,t);case 3:return vh(n.timestampValue,t.timestampValue);case 4:return vh(ks(n),ks(t));case 5:return nc(n.stringValue,t.stringValue);case 6:return function(i,a){const c=on(i),u=on(a);return c.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=Y(c[d],u[d]);if(f!==0)return f}return Y(c.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,a){const c=Y(lt(i.latitude),lt(a.latitude));return c!==0?c:Y(lt(i.longitude),lt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Th(n.arrayValue,t.arrayValue);case 10:return function(i,a){const c=i.fields||{},u=a.fields||{},d=c[so]?.arrayValue,f=u[so]?.arrayValue,m=Y(d?.values?.length||0,f?.values?.length||0);return m!==0?m:Th(d,f)}(n.mapValue,t.mapValue);case 11:return function(i,a){if(i===Ai.mapValue&&a===Ai.mapValue)return 0;if(i===Ai.mapValue)return 1;if(a===Ai.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const E=nc(u[m],f[m]);if(E!==0)return E;const A=Ir(c[u[m]],d[f[m]]);if(A!==0)return A}return Y(u.length,f.length)}(n.mapValue,t.mapValue);default:throw q(23264,{he:e})}}function vh(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Y(n,t);const e=sn(n),r=sn(t),s=Y(e.seconds,r.seconds);return s!==0?s:Y(e.nanos,r.nanos)}function Th(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=Ir(e[s],r[s]);if(i)return i}return Y(e.length,r.length)}function Ar(n){return rc(n)}function rc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=sn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return on(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=rc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${rc(e.fields[a])}`;return s+"}"}(n.mapValue):q(61005,{value:n})}function Ui(n){switch(an(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=So(n);return t?16+Ui(t):16;case 5:return 2*n.stringValue.length;case 6:return on(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ui(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return pn(r.fields,(i,a)=>{s+=i.length+Ui(a)}),s}(n.mapValue);default:throw q(13486,{value:n})}}function wh(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function sc(n){return!!n&&"integerValue"in n}function jc(n){return!!n&&"arrayValue"in n}function Ih(n){return!!n&&"nullValue"in n}function Ah(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $i(n){return!!n&&"mapValue"in n}function TT(n){return(n?.mapValue?.fields||{})[ip]?.stringValue===op}function As(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return pn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=As(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=As(n.arrayValue.values[e]);return t}return{...n}}function wT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!$i(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=As(e)}setAll(t){let e=vt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=As(a):s.push(c.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());$i(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return pe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];$i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){pn(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ot(As(this.value))}}function ap(n){const t=[];return pn(n.fields,(e,r)=>{const s=new vt([e]);if($i(r)){const i=ap(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new xt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,i,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new At(t,0,W.min(),W.min(),W.min(),Ot.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,W.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,W.min(),W.min(),Ot.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,W.min(),W.min(),Ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e){this.position=t,this.inclusive=e}}function bh(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=Ir(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sh(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!pe(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e="asc"){this.field=t,this.dir=e}}function IT(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{}class ht extends cp{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new bT(t,e,r):e==="array-contains"?new RT(t,r):e==="in"?new PT(t,r):e==="not-in"?new NT(t,r):e==="array-contains-any"?new DT(t,r):new ht(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ST(t,r):new CT(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ir(e,this.value)):e!==null&&an(this.value)===an(e)&&this.matchesComparison(Ir(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ee extends cp{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new ee(t,e)}matches(t){return lp(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lp(n){return n.op==="and"}function up(n){return AT(n)&&lp(n)}function AT(n){for(const t of n.filters)if(t instanceof ee)return!1;return!0}function ic(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+Ar(n.value);if(up(n))return n.filters.map(t=>ic(t)).join(",");{const t=n.filters.map(e=>ic(e)).join(",");return`${n.op}(${t})`}}function hp(n,t){return n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.field.isEqual(s.field)&&pe(r.value,s.value)}(n,t):n instanceof ee?function(r,s){return s instanceof ee&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&hp(a,s.filters[c]),!0):!1}(n,t):void q(19439)}function dp(n){return n instanceof ht?function(e){return`${e.field.canonicalString()} ${e.op} ${Ar(e.value)}`}(n):n instanceof ee?function(e){return e.op.toString()+" {"+e.getFilters().map(dp).join(" ,")+"}"}(n):"Filter"}class bT extends ht{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class ST extends ht{constructor(t,e){super(t,"in",e),this.keys=fp("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class CT extends ht{constructor(t,e){super(t,"not-in",e),this.keys=fp("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function fp(n,t){return(t.arrayValue?.values||[]).map(e=>F.fromName(e.referenceValue))}class RT extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return jc(e)&&Ls(e.arrayValue,this.value)}}class PT extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ls(this.value.arrayValue,e)}}class NT extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ls(this.value.arrayValue,e)}}class DT extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!jc(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ls(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(t,e=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Ch(n,t=null,e=[],r=[],s=null,i=null,a=null){return new OT(n,t,e,r,s,i,a)}function qc(n){const t=z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ic(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ar(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ar(r)).join(",")),t.Te=e}return t.Te}function Hc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!IT(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!hp(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Sh(n.startAt,t.startAt)&&Sh(n.endAt,t.endAt)}function oc(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kT(n,t,e,r,s,i,a,c){return new Br(n,t,e,r,s,i,a,c)}function Co(n){return new Br(n)}function Rh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pp(n){return n.collectionGroup!==null}function bs(n){const t=z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new mt(vt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Ms(i,r))}),e.has(vt.keyField().canonicalString())||t.Ie.push(new Ms(vt.keyField(),r))}return t.Ie}function ce(n){const t=z(n);return t.Ee||(t.Ee=VT(t,bs(n))),t.Ee}function VT(n,t){if(n.limitType==="F")return Ch(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ms(s.field,i)});const e=n.endAt?new io(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new io(n.startAt.position,n.startAt.inclusive):null;return Ch(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ac(n,t){const e=n.filters.concat([t]);return new Br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function cc(n,t,e){return new Br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ro(n,t){return Hc(ce(n),ce(t))&&n.limitType===t.limitType}function mp(n){return`${qc(ce(n))}|lt:${n.limitType}`}function ar(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>dp(s)).join(", ")}]`),bo(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ar(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ar(s)).join(",")),`Target(${r})`}(ce(n))}; limitType=${n.limitType})`}function Po(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=bh(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,bs(r),s)||r.endAt&&!function(a,c,u){const d=bh(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,bs(r),s))}(n,t)}function LT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gp(n){return(t,e)=>{let r=!1;for(const s of bs(n)){const i=MT(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function MT(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Ir(u,d):q(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){pn(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Zf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new it(F.comparator);function Ne(){return xT}const _p=new it(F.comparator);function Es(...n){let t=_p;for(const e of n)t=t.insert(e.key,e);return t}function yp(n){let t=_p;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Cn(){return Ss()}function Ep(){return Ss()}function Ss(){return new Hn(n=>n.toString(),(n,t)=>n.isEqual(t))}const FT=new it(F.comparator),UT=new mt(F.comparator);function X(...n){let t=UT;for(const e of n)t=t.add(e);return t}const $T=new mt(Y);function BT(){return $T}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:no(t)?"-0":t}}function vp(n){return{integerValue:""+n}}function Tp(n,t){return mT(t)?vp(t):Wc(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this._=void 0}}function jT(n,t,e){return n instanceof xs?function(s,i){const a={fields:{[np]:{stringValue:ep},[sp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bc(i)&&(i=So(i)),i&&(a.fields[rp]=i),{mapValue:a}}(e,t):n instanceof Fs?Ip(n,t):n instanceof Us?Ap(n,t):function(s,i){const a=wp(s,i),c=Ph(a)+Ph(s.Ae);return sc(a)&&sc(s.Ae)?vp(c):Wc(s.serializer,c)}(n,t)}function qT(n,t,e){return n instanceof Fs?Ip(n,t):n instanceof Us?Ap(n,t):e}function wp(n,t){return n instanceof $s?function(r){return sc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class xs extends No{}class Fs extends No{constructor(t){super(),this.elements=t}}function Ip(n,t){const e=bp(t);for(const r of n.elements)e.some(s=>pe(s,r))||e.push(r);return{arrayValue:{values:e}}}class Us extends No{constructor(t){super(),this.elements=t}}function Ap(n,t){let e=bp(t);for(const r of n.elements)e=e.filter(s=>!pe(s,r));return{arrayValue:{values:e}}}class $s extends No{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ph(n){return lt(n.integerValue||n.doubleValue)}function bp(n){return jc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,e){this.field=t,this.transform=e}}function HT(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Fs&&s instanceof Fs||r instanceof Us&&s instanceof Us?wr(r.elements,s.elements,pe):r instanceof $s&&s instanceof $s?pe(r.Ae,s.Ae):r instanceof xs&&s instanceof xs}(n.transform,t.transform)}class WT{constructor(t,e){this.version=t,this.transformResults=e}}class zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new zt}static exists(t){return new zt(void 0,t)}static updateTime(t){return new zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Do{}function Cp(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new zc(n.key,zt.none()):new Qs(n.key,n.data,zt.none());{const e=n.data,r=Ot.empty();let s=new mt(vt.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new mn(n.key,r,new xt(s.toArray()),zt.none())}}function zT(n,t,e){n instanceof Qs?function(s,i,a){const c=s.value.clone(),u=Dh(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof mn?function(s,i,a){if(!Bi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Dh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Rp(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Cs(n,t,e,r){return n instanceof Qs?function(i,a,c,u){if(!Bi(i.precondition,a))return c;const d=i.value.clone(),f=Oh(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof mn?function(i,a,c,u){if(!Bi(i.precondition,a))return c;const d=Oh(i.fieldTransforms,u,a),f=a.data;return f.setAll(Rp(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,t,e,r):function(i,a,c){return Bi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function KT(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=wp(r.transform,s||null);i!=null&&(e===null&&(e=Ot.empty()),e.set(r.field,i))}return e||null}function Nh(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wr(r,s,(i,a)=>HT(i,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Qs extends Do{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mn extends Do{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rp(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Dh(n,t,e){const r=new Map;Z(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,qT(a,c,e[s]))}return r}function Oh(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,jT(i,a,t))}return r}class zc extends Do{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GT extends Do{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&zT(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Cs(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Cs(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ep();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const u=Cp(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&wr(this.mutations,t.mutations,(e,r)=>Nh(e,r))&&wr(this.baseMutations,t.baseMutations,(e,r)=>Nh(e,r))}}class Kc{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Z(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return FT}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Kc(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,J;function JT(n){switch(n){case C.OK:return q(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function Pp(n){if(n===void 0)return Pe("GRPC error has no .code"),C.UNKNOWN;switch(n){case ut.OK:return C.OK;case ut.CANCELLED:return C.CANCELLED;case ut.UNKNOWN:return C.UNKNOWN;case ut.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ut.INTERNAL:return C.INTERNAL;case ut.UNAVAILABLE:return C.UNAVAILABLE;case ut.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ut.NOT_FOUND:return C.NOT_FOUND;case ut.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ut.ABORTED:return C.ABORTED;case ut.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ut.DATA_LOSS:return C.DATA_LOSS;default:return q(39323,{code:n})}}(J=ut||(ut={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new en([4294967295,4294967295],0);function kh(n){const t=ZT().encode(n),e=new jf;return e.update(t),new Uint8Array(e.digest())}function Vh(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new en([e,r],0),new en([s,i],0)]}class Gc{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new vs(`Invalid padding: ${e}`);if(r<0)throw new vs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new vs(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=en.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(en.fromNumber(r)));return s.compare(tw)===1&&(s=new en([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=kh(t),[r,s]=Vh(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Gc(i,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const e=kh(t),[r,s]=Vh(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Ys.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Oo(W.min(),s,new it(Y),Ne(),X())}}class Ys{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Ys(r,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Np{constructor(t,e){this.targetId=t,this.Ce=e}}class Dp{constructor(t,e,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Lh{constructor(){this.ve=0,this.Fe=Mh(),this.Me=Tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=X(),e=X(),r=X();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}}),new Ys(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Mh()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ew{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ne(),this.Je=bi(),this.He=bi(),this.Ye=new it(Y)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:q(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(oc(i))if(r===0){const a=new F(i.path);this.et(e,a,At.newNoDocument(a,W.min()))}else Z(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),u=c?this.ct(c,t,a):1;if(u!==0){this.it(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=on(r).toUint8Array()}catch(u){if(u instanceof tp)return Tr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Gc(a,s,i)}catch(u){return Tr(u instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&oc(c.target)){const u=new F(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,At.newNoDocument(u,t))}i.Be&&(e.set(a,i.ke()),i.qe())}});let r=X();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new Oo(t,e,this.Ye,this.je,r);return this.je=Ne(),this.Je=bi(),this.He=bi(),this.Ye=new it(Y),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Lh,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new mt(Y),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new mt(Y),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Lh),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function bi(){return new it(F.comparator)}function Mh(){return new it(F.comparator)}const nw={asc:"ASCENDING",desc:"DESCENDING"},rw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sw={and:"AND",or:"OR"};class iw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function lc(n,t){return n.useProto3Json||bo(t)?t:{value:t}}function oo(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Op(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ow(n,t){return oo(n,t.toTimestamp())}function le(n){return Z(!!n,49232),W.fromTimestamp(function(e){const r=sn(e);return new rt(r.seconds,r.nanos)}(n))}function Qc(n,t){return uc(n,t).canonicalString()}function uc(n,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function kp(n){const t=et.fromString(n);return Z(Fp(t),10190,{key:t.toString()}),t}function hc(n,t){return Qc(n.databaseId,t.path)}function Sa(n,t){const e=kp(t);if(e.get(1)!==n.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(Lp(e))}function Vp(n,t){return Qc(n.databaseId,t)}function aw(n){const t=kp(n);return t.length===4?et.emptyPath():Lp(t)}function dc(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lp(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xh(n,t,e){return{name:hc(n,t),fields:e.value.mapValue.fields}}function cw(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string",58123),Tt.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Tt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const f=d.code===void 0?C.UNKNOWN:Pp(d.code);return new V(f,d.message||"")}(a);e=new Dp(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sa(n,r.document.name),i=le(r.document.updateTime),a=r.document.createTime?le(r.document.createTime):W.min(),c=new Ot({mapValue:{fields:r.document.fields}}),u=At.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];e=new ji(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Sa(n,r.document),i=r.readTime?le(r.readTime):W.min(),a=At.newNoDocument(s,i),c=r.removedTargetIds||[];e=new ji([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Sa(n,r.document),i=r.removedTargetIds||[];e=new ji([],i,s,null)}else{if(!("filter"in t))return q(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new XT(s,i),c=r.targetId;e=new Np(c,a)}}return e}function lw(n,t){let e;if(t instanceof Qs)e={update:xh(n,t.key,t.value)};else if(t instanceof zc)e={delete:hc(n,t.key)};else if(t instanceof mn)e={update:xh(n,t.key,t.data),updateMask:yw(t.fieldMask)};else{if(!(t instanceof GT))return q(16599,{Vt:t.type});e={verify:hc(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof xs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Fs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Us)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof $s)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ow(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(n,t.precondition)),e}function uw(n,t){return n&&n.length>0?(Z(t!==void 0,14353),n.map(e=>function(s,i){let a=s.updateTime?le(s.updateTime):le(i);return a.isEqual(W.min())&&(a=le(i)),new WT(a,s.transformResults||[])}(e,t))):[]}function hw(n,t){return{documents:[Vp(n,t.path)]}}function dw(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Vp(n,s);const i=function(d){if(d.length!==0)return xp(ee.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:cr(E.field),direction:mw(E.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=lc(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function fw(n){let t=aw(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Z(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(m){const E=Mp(m);return E instanceof ee&&up(E)?E.getFilters():[E]}(e.where));let a=[];e.orderBy&&(a=function(m){return m.map(E=>function(N){return new Ms(lr(N.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(E))}(e.orderBy));let c=null;e.limit&&(c=function(m){let E;return E=typeof m=="object"?m.value:m,bo(E)?null:E}(e.limit));let u=null;e.startAt&&(u=function(m){const E=!!m.before,A=m.values||[];return new io(A,E)}(e.startAt));let d=null;return e.endAt&&(d=function(m){const E=!m.before,A=m.values||[];return new io(A,E)}(e.endAt)),kT(t,s,a,i,c,"F",u,d)}function pw(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Mp(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=lr(e.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=lr(e.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=lr(e.unaryFilter.field);return ht.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=lr(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(e){return ht.create(lr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ee.create(e.compositeFilter.filters.map(r=>Mp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(e.compositeFilter.op))}(n):q(30097,{filter:n})}function mw(n){return nw[n]}function gw(n){return rw[n]}function _w(n){return sw[n]}function cr(n){return{fieldPath:n.canonicalString()}}function lr(n){return vt.fromServerFormat(n.fieldPath)}function xp(n){return n instanceof ht?function(e){if(e.op==="=="){if(Ah(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NAN"}};if(Ih(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ah(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NOT_NAN"}};if(Ih(e.value))return{unaryFilter:{field:cr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cr(e.field),op:gw(e.op),value:e.value}}}(n):n instanceof ee?function(e){const r=e.getFilters().map(s=>xp(s));return r.length===1?r[0]:{compositeFilter:{op:_w(e.op),filters:r}}}(n):q(54877,{filter:n})}function yw(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e,r,s,i=W.min(),a=W.min(),c=Tt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new Xe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(t){this.yt=t}}function vw(n){const t=fw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.Cn=new ww}addToCollectionParentIndex(t,e){return this.Cn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(rn.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(rn.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class ww{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new mt(et.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new mt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Up=41943040;class Dt{static withCacheSize(t){return new Dt(t,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(Up,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new br(0)}static cr(){return new br(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="LruGarbageCollector",Iw=1048576;function $h([n,t],[e,r]){const s=Y(n,e);return s===0?Y(t,r):s}class Aw{constructor(t){this.Ir=t,this.buffer=new mt($h),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();$h(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bw{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){M(Uh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){$r(e)?M(Uh,"Ignoring IndexedDB error during garbage collection: ",e):await Ur(e)}await this.Vr(3e5)})}}class Sw{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Ao.ce);const r=new Aw(e);return this.mr.forEachTarget(t,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Fh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fh):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(t,r,e))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(m=>(d=Date.now(),or()<=Q.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function Cw(n,t){return new Sw(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.changes=new Hn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Cs(r.mutation,s,xt.empty(),rt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,e,r=X()){const s=Cn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let a=Es();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Cn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,X()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let i=Ne();const a=Ss(),c=function(){return Ss()}();return e.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof mn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Cs(f.mutation,d,f.mutation.getFieldMask(),rt.now())):a.set(d.key,xt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>c.set(d,new Pw(f,a.get(d)??null))),c))}recalculateAndSaveOverlays(t,e){const r=Ss();let s=new it((a,c)=>a-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||xt.empty();f=c.applyToLocalView(d,f),r.set(u,f);const m=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,m=Ep();f.forEach(E=>{if(!i.has(E)){const A=Cp(e.get(E),r.get(E));A!==null&&m.set(E,A),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,m))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):P.resolve(Cn());let c=Os,u=i;return a.next(d=>P.forEach(d,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(t,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,u,d,X())).next(f=>({batchId:c,changes:yp(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let s=Es();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=Es();return this.indexManager.getCollectionParents(t,i).next(c=>P.forEach(c,u=>{const d=function(m,E){return new Br(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(f=>{f.forEach((m,E)=>{a=a.insert(m,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,At.newInvalidDocument(f)))});let c=Es();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&Cs(f.mutation,d,xt.empty(),rt.now()),Po(e,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return P.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:le(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:vw(s.bundledQuery),readTime:le(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.overlays=new it(F.comparator),this.qr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Cn();return P.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.St(t,e,i)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=Cn(),i=e.length+1,a=new F(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new it((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Cn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Cn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return P.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new YT(e,r));let i=this.qr.get(e);i===void 0&&(i=X(),this.qr.set(e,i)),this.qr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.Qr=new mt(yt.$r),this.Ur=new mt(yt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new yt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new yt(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new F(new et([])),r=new yt(e,t),s=new yt(e,t+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new et([])),r=new yt(e,t),s=new yt(e,t+1);let i=X();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new yt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class yt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||Y(t.Yr,e.Yr)}static Kr(t,e){return Y(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new mt(yt.$r)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new QT(i,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new yt(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?$c:this.tr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(Y);return e.forEach(s=>{const i=new yt(s,0),a=new yt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new yt(new F(i),0);let c=new mt(Y);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Yr)),!0)},a),P.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(r=>{const s=this.Xr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Z(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(e.mutations,s=>{const i=new yt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new yt(e,0),s=this.Zr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t){this.ri=t,this.docs=function(){return new it(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Ne();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Ne();const a=e.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||hT(uT(f),r)<=0||(s.has(f.key)||Po(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(t,e,r,s){q(9500)}ii(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Mw(this)}getSize(t){return P.resolve(this.size)}}class Mw extends Rw{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(t){this.persistence=t,this.si=new Hn(e=>qc(e),Hc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Yc,this.targetCount=0,this.ai=br.ur()}forEachTarget(t,e){return this.si.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),P.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new br(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Pr(e),P.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t,e){this.ui={},this.overlays={},this.ci=new Ao(0),this.li=!1,this.li=!0,this.hi=new kw,this.referenceDelegate=t(this),this.Pi=new xw(this),this.indexManager=new Tw,this.remoteDocumentCache=function(s){return new Lw(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Ew(e),this.Ii=new Dw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ow,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Vw(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new Fw(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(t,e){return P.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class Fw extends fT{constructor(t){super(),this.currentSequenceNumber=t}}class Xc{constructor(t){this.persistence=t,this.Ri=new Yc,this.Vi=null}static mi(t){return new Xc(t)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,r=>{const s=F.fromPath(r);return this.gi(t,s).next(i=>{i||e.removeEntry(s,W.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class ao{constructor(t,e){this.persistence=t,this.pi=new Hn(r=>gT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Cw(this,e)}static mi(t,e){return new ao(t,e)}Ei(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}wr(t){let e=0;return this.pr(t,r=>{e++}).next(()=>e)}pr(t,e){return P.forEach(this.pi,(r,s)=>this.br(t,r,s).next(i=>i?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(c=>{c||(r++,i.removeEntry(a,W.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ui(t.data.value)),e}br(t,e,r){return P.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=X(),s=X();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jc(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return m_()?8:pT(bt())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ys(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(t,e,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Uw;return this.Ss(t,e,a).next(c=>{if(i.result=c,this.Vs)return this.bs(t,e,a,c.size)})}).next(()=>i.result)}bs(t,e,r,s){return r.documentReadCount<this.fs?(or()<=Q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",ar(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(or()<=Q.DEBUG&&M("QueryEngine","Query:",ar(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(or()<=Q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",ar(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ce(e))):P.resolve())}ys(t,e){if(Rh(e))return P.resolve(null);let r=ce(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=cc(e,null,"F"),r=ce(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=X(...i);return this.ps.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.Ds(e,c);return this.Cs(e,d,a,u.readTime)?this.ys(t,cc(e,null,"F")):this.vs(t,d,e,u)}))})))}ws(t,e,r,s){return Rh(e)||s.isEqual(W.min())?P.resolve(null):this.ps.getDocuments(t,r).next(i=>{const a=this.Ds(e,i);return this.Cs(e,a,r,s)?P.resolve(null):(or()<=Q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ar(e)),this.vs(t,a,e,lT(s,Os)).next(c=>c))})}Ds(t,e){let r=new mt(gp(t));return e.forEach((s,i)=>{Po(t,i)&&(r=r.add(i))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,r){return or()<=Q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",ar(e)),this.ps.getDocumentsMatchingQuery(t,e,rn.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="LocalStore",Bw=3e8;class jw{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new it(Y),this.xs=new Hn(i=>qc(i),Hc),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function qw(n,t,e,r){return new jw(n,t,e,r)}async function Bp(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=X();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function Hw(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const m=d.batch,E=m.keys();let A=P.resolve();return E.forEach(N=>{A=A.next(()=>f.getEntry(u,N)).next(D=>{const R=d.docVersions.get(N);Z(R!==null,48541),D.version.compareTo(R)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=X();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function jp(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Ww(n,t){const e=z(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach((f,m)=>{const E=s.get(m);if(!E)return;c.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>e.Pi.addMatchingKeys(i,f.addedDocuments,m)));let A=E.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(m)!==null?A=A.withResumeToken(Tt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),function(D,R,L){return D.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Bw?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(E,A,f)&&c.push(e.Pi.updateTargetData(i,A))});let u=Ne(),d=X();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(zw(i,a,t.documentUpdates).next(f=>{u=f.ks,d=f.qs})),!r.isEqual(W.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next(m=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return P.waitFor(c).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(e.Ms=s,i))}function zw(n,t,e){let r=X(),s=X();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let a=Ne();return e.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):M(Zc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:s}})}function Kw(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=$c),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Gw(n,t){const e=z(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Pi.getTargetData(r,t).next(i=>i?(s=i,P.resolve(s)):e.Pi.allocateTargetId(r).next(a=>(s=new Xe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r})}async function fc(n,t,e){const r=z(n),s=r.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!$r(a))throw a;M(Zc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Bh(n,t,e){const r=z(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const m=z(u),E=m.xs.get(f);return E!==void 0?P.resolve(m.Ms.get(E)):m.Pi.getTargetData(d,f)}(r,a,ce(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:W.min(),e?i:X())).next(c=>(Qw(r,LT(t),c),{documents:c,Qs:i})))}function Qw(n,t,e){let r=n.Os.get(t)||W.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(t,r)}class jh{constructor(){this.activeTargetIds=BT()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yw{constructor(){this.Mo=new jh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new jh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="ConnectivityMonitor";class Hh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(qh,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){M(qh,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si=null;function pc(){return Si===null?Si=function(){return 268435456+Math.round(2147483648*Math.random())}():Si++,"0x"+Si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="RestConnection",Jw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zw{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ro?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,i){const a=pc(),c=this.zo(t,e.toUriEncodedString());M(Ca,`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(c),f=Lr(d);return this.Jo(t,c,u,r,f).then(m=>(M(Ca,`Received RPC '${t}' ${a}: `,m),m),m=>{throw Tr(Ca,`RPC '${t}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Ho(t,e,r,s,i,a){return this.Go(t,e,r,s,i)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}zo(t,e){const r=Jw[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class eI extends Zw{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,i){const a=pc();return new Promise((c,u)=>{const d=new qf;d.setWithCredentials(!0),d.listenOnce(Hf.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Fi.NO_ERROR:const m=d.getResponseJson();M(wt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),c(m);break;case Fi.TIMEOUT:M(wt,`RPC '${t}' ${a} timed out`),u(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case Fi.HTTP_ERROR:const E=d.getStatus();if(M(wt,`RPC '${t}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const N=A?.error;if(N&&N.status&&N.message){const D=function(L){const x=L.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(x)>=0?x:C.UNKNOWN}(N.status);u(new V(D,N.message))}else u(new V(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(C.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(wt,`RPC '${t}' ${a} completed.`)}});const f=JSON.stringify(s);M(wt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,r,15)})}T_(t,e,r){const s=pc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Kf(),c=zf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=i.join("");M(wt,`Creating RPC '${t}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let E=!1,A=!1;const N=new tI({Yo:R=>{A?M(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,R):(E||(M(wt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),E=!0),M(wt,`RPC '${t}' stream ${s} sending:`,R),m.send(R))},Zo:()=>m.close()}),D=(R,L,x)=>{R.listen(L,$=>{try{x($)}catch(B){setTimeout(()=>{throw B},0)}})};return D(m,ys.EventType.OPEN,()=>{A||(M(wt,`RPC '${t}' stream ${s} transport opened.`),N.o_())}),D(m,ys.EventType.CLOSE,()=>{A||(A=!0,M(wt,`RPC '${t}' stream ${s} transport closed`),N.a_(),this.E_(m))}),D(m,ys.EventType.ERROR,R=>{A||(A=!0,Tr(wt,`RPC '${t}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),N.a_(new V(C.UNAVAILABLE,"The operation could not be completed")))}),D(m,ys.EventType.MESSAGE,R=>{if(!A){const L=R.data[0];Z(!!L,16349);const x=L,$=x?.error||x[0]?.error;if($){M(wt,`RPC '${t}' stream ${s} received error:`,$);const B=$.status;let K=function(g){const y=ut[g];if(y!==void 0)return Pp(y)}(B),H=$.message;K===void 0&&(K=C.INTERNAL,H="Unknown error status: "+B+" with message "+$.message),A=!0,N.a_(new V(K,H)),m.close()}else M(wt,`RPC '${t}' stream ${s} received:`,L),N.u_(L)}}),D(c,Wf.STAT_EVENT,R=>{R.stat===ec.PROXY?M(wt,`RPC '${t}' stream ${s} detected buffering proxy`):R.stat===ec.NOPROXY&&M(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n){return new iw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t,e,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="PersistentStream";class Hp{constructor(t,e,r,s,i,a,c,u){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qp(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Pe(e.toString()),Pe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return M(Wh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(M(Wh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nI extends Hp{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=cw(this.serializer,t),r=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?le(a.readTime):W.min()}(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=dc(this.serializer),e.addTarget=function(i,a){let c;const u=a.target;if(c=oc(u)?{documents:hw(i,u)}:{query:dw(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Op(i,a.resumeToken);const d=lc(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=oo(i,a.snapshotVersion.toTimestamp());const d=lc(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=pw(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=dc(this.serializer),e.removeTarget=t,this.q_(e)}}class rI extends Hp{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=uw(t.writeResults,t.commitTime),r=le(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=dc(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>lw(this.serializer,r))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{}class iI extends sI{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(t,uc(e,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(C.UNKNOWN,i.toString())})}Ho(t,e,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(t,uc(e,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class oI{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pe(e),this.aa=!1):M("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="RemoteStore";class aI{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Wn(this)&&(M($n,"Restarting streams for network reachability change."),await async function(u){const d=z(u);d.Ea.add(4),await Xs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Vo(d)}(this))})}),this.Ra=new oI(r,s)}}async function Vo(n){if(Wn(n))for(const t of n.da)await t(!0)}async function Xs(n){for(const t of n.da)await t(!1)}function Wp(n,t){const e=z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),rl(e)?nl(e):jr(e).O_()&&el(e,t))}function tl(n,t){const e=z(n),r=jr(e);e.Ia.delete(t),r.O_()&&zp(e,t),e.Ia.size===0&&(r.O_()?r.L_():Wn(e)&&e.Ra.set("Unknown"))}function el(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}jr(n).Y_(t)}function zp(n,t){n.Va.Ue(t),jr(n).Z_(t)}function nl(n){n.Va=new ew({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),jr(n).start(),n.Ra.ua()}function rl(n){return Wn(n)&&!jr(n).x_()&&n.Ia.size>0}function Wn(n){return z(n).Ea.size===0}function Kp(n){n.Va=void 0}async function cI(n){n.Ra.set("Online")}async function lI(n){n.Ia.forEach((t,e)=>{el(n,t)})}async function uI(n,t){Kp(n),rl(n)?(n.Ra.ha(t),nl(n)):n.Ra.set("Unknown")}async function hI(n,t,e){if(n.Ra.set("Online"),t instanceof Dp&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,t)}catch(r){M($n,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await co(n,r)}else if(t instanceof ji?n.Va.Ze(t):t instanceof Np?n.Va.st(t):n.Va.tt(t),!e.isEqual(W.min()))try{const r=await jp(n.localStore);e.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Tt.EMPTY_BYTE_STRING,f.snapshotVersion)),zp(i,u);const m=new Xe(f.target,u,d,f.sequenceNumber);el(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){M($n,"Failed to raise snapshot:",r),await co(n,r)}}async function co(n,t,e){if(!$r(t))throw t;n.Ea.add(1),await Xs(n),n.Ra.set("Offline"),e||(e=()=>jp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M($n,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Vo(n)})}function Gp(n,t){return t().catch(e=>co(n,e,t))}async function Lo(n){const t=z(n),e=cn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:$c;for(;dI(t);)try{const s=await Kw(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,fI(t,s)}catch(s){await co(t,s)}Qp(t)&&Yp(t)}function dI(n){return Wn(n)&&n.Ta.length<10}function fI(n,t){n.Ta.push(t);const e=cn(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Qp(n){return Wn(n)&&!cn(n).x_()&&n.Ta.length>0}function Yp(n){cn(n).start()}async function pI(n){cn(n).ra()}async function mI(n){const t=cn(n);for(const e of n.Ta)t.ea(e.mutations)}async function gI(n,t,e){const r=n.Ta.shift(),s=Kc.from(r,t,e);await Gp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Lo(n)}async function _I(n,t){t&&cn(n).X_&&await async function(r,s){if(function(a){return JT(a)&&a!==C.ABORTED}(s.code)){const i=r.Ta.shift();cn(r).B_(),await Gp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Lo(r)}}(n,t),Qp(n)&&Yp(n)}async function zh(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),M($n,"RemoteStore received new credentials");const r=Wn(e);e.Ea.add(3),await Xs(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Vo(e)}async function yI(n,t){const e=z(n);t?(e.Ea.delete(2),await Vo(e)):t||(e.Ea.add(2),await Xs(e),e.Ra.set("Unknown"))}function jr(n){return n.ma||(n.ma=function(e,r,s){const i=z(e);return i.sa(),new nI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:cI.bind(null,n),t_:lI.bind(null,n),r_:uI.bind(null,n),H_:hI.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),rl(n)?nl(n):n.Ra.set("Unknown")):(await n.ma.stop(),Kp(n))})),n.ma}function cn(n){return n.fa||(n.fa=function(e,r,s){const i=z(e);return i.sa(),new rI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:pI.bind(null,n),r_:_I.bind(null,n),ta:mI.bind(null,n),na:gI.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await Lo(n)):(await n.fa.stop(),n.Ta.length>0&&(M($n,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,c=new sl(t,e,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function il(n,t){if(Pe("AsyncQueue",`${t}: ${n}`),$r(n))return new V(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{static emptySet(t){return new yr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=Es(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new yr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.ga=new it(F.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):q(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class Sr{constructor(t,e,r,s,i,a,c,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Sr(t,e,yr.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ro(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class vI{constructor(){this.queries=Gh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=z(e),i=s.queries;s.queries=Gh(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new V(C.ABORTED,"Firestore shutting down"))}}function Gh(){return new Hn(n=>mp(n),Ro)}async function ol(n,t){const e=z(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new EI,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=il(a,`Initialization of query '${ar(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&cl(e)}async function al(n,t){const e=z(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function TI(n,t){const e=z(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&cl(e)}function wI(n,t,e){const r=z(n),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);r.queries.delete(t)}function cl(n){n.Ca.forEach(t=>{t.next()})}var mc,Qh;(Qh=mc||(mc={})).Ma="default",Qh.Cache="cache";class ll{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Sr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Sr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==mc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(t){this.key=t}}class Jp{constructor(t){this.key=t}}class II{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=gp(t),this.tu=new yr(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new Kh,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,m)=>{const E=s.get(f),A=Po(this.query,m)?m:null,N=!!E&&this.mutatedKeys.has(E.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;E&&A?E.data.isEqual(A.data)?N!==D&&(r.track({type:3,doc:A}),R=!0):this.su(E,A)||(r.track({type:2,doc:A}),R=!0,(u&&this.eu(A,u)>0||d&&this.eu(A,d)<0)&&(c=!0)):!E&&A?(r.track({type:0,doc:A}),R=!0):E&&!A&&(r.track({type:1,doc:E}),R=!0,(u||d)&&(c=!0)),R&&(A?(a=a.add(A),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((f,m)=>function(A,N){const D=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:R})}};return D(A)-D(N)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new Sr(this.query,t.tu,i,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Kh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=X(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const e=[];return t.forEach(r=>{this.Xa.has(r)||e.push(new Jp(r))}),this.Xa.forEach(r=>{t.has(r)||e.push(new Xp(r))}),e}cu(t){this.Ya=t.Qs,this.Xa=X();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Sr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ul="SyncEngine";class AI{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class bI{constructor(t){this.key=t,this.hu=!1}}class SI{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Hn(c=>mp(c),Ro),this.Iu=new Map,this.Eu=new Set,this.du=new it(F.comparator),this.Au=new Map,this.Ru=new Yc,this.Vu={},this.mu=new Map,this.fu=br.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function CI(n,t,e=!0){const r=sm(n);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Zp(r,t,e,!0),s}async function RI(n,t){const e=sm(n);await Zp(e,t,!0,!1)}async function Zp(n,t,e,r){const s=await Gw(n.localStore,ce(t)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,e);let c;return r&&(c=await PI(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Wp(n.remoteStore,s),c}async function PI(n,t,e,r,s){n.pu=(m,E,A)=>async function(D,R,L,x){let $=R.view.ru(L);$.Cs&&($=await Bh(D.localStore,R.query,!1).then(({documents:T})=>R.view.ru(T,$)));const B=x&&x.targetChanges.get(R.targetId),K=x&&x.targetMismatches.get(R.targetId)!=null,H=R.view.applyChanges($,D.isPrimaryClient,B,K);return Xh(D,R.targetId,H.au),H.snapshot}(n,m,E,A);const i=await Bh(n.localStore,t,!0),a=new II(t,i.Qs),c=a.ru(i.documents),u=Ys.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Xh(n,e,d.au);const f=new AI(t,e,a);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function NI(n,t,e){const r=z(n),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!Ro(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&tl(r.remoteStore,s.targetId),gc(r,s.targetId)}).catch(Ur)):(gc(r,s.targetId),await fc(r.localStore,s.targetId,!0))}async function DI(n,t){const e=z(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),tl(e.remoteStore,r.targetId))}async function OI(n,t,e){const r=UI(n);try{const s=await function(a,c){const u=z(a),d=rt.now(),f=c.reduce((A,N)=>A.add(N.key),X());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let N=Ne(),D=X();return u.Ns.getEntries(A,f).next(R=>{N=R,N.forEach((L,x)=>{x.isValidDocument()||(D=D.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,N)).next(R=>{m=R;const L=[];for(const x of c){const $=KT(x,m.get(x.key).overlayedDocument);$!=null&&L.push(new mn(x.key,$,ap($.value.mapValue),zt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,L,c)}).next(R=>{E=R;const L=R.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(A,R.batchId,L)})}).then(()=>({batchId:E.batchId,changes:yp(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new it(Y)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,e),await Js(r,s.changes),await Lo(r.remoteStore)}catch(s){const i=il(s,"Failed to persist write");e.reject(i)}}async function tm(n,t){const e=z(n);try{const r=await Ww(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Au.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Z(a.hu,14607):s.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))}),await Js(e,r,t)}catch(r){await Ur(r)}}function Yh(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=z(a);u.onlineState=c;let d=!1;u.queries.forEach((f,m)=>{for(const E of m.Sa)E.va(c)&&(d=!0)}),d&&cl(u)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kI(n,t,e){const r=z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new it(F.comparator);a=a.insert(i,At.newNoDocument(i,W.min()));const c=X().add(i),u=new Oo(W.min(),new Map,new it(Y),a,c);await tm(r,u),r.du=r.du.remove(i),r.Au.delete(t),hl(r)}else await fc(r.localStore,t,!1).then(()=>gc(r,t,e)).catch(Ur)}async function VI(n,t){const e=z(n),r=t.batch.batchId;try{const s=await Hw(e.localStore,t);nm(e,r,null),em(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Js(e,s)}catch(s){await Ur(s)}}async function LI(n,t,e){const r=z(n);try{const s=await function(a,c){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(m=>(Z(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,t);nm(r,t,e),em(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Js(r,s)}catch(s){await Ur(s)}}function em(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function nm(n,t,e){const r=z(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function gc(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(r=>{n.Ru.containsKey(r)||rm(n,r)})}function rm(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(tl(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),hl(n))}function Xh(n,t,e){for(const r of e)r instanceof Xp?(n.Ru.addReference(r.key,t),MI(n,r)):r instanceof Jp?(M(ul,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||rm(n,r.key)):q(19791,{wu:r})}function MI(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(M(ul,"New document in limbo: "+e),n.Eu.add(r),hl(n))}function hl(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new F(et.fromString(t)),r=n.fu.next();n.Au.set(r,new bI(e)),n.du=n.du.insert(e,r),Wp(n.remoteStore,new Xe(ce(Co(e.path)),r,"TargetPurposeLimboResolution",Ao.ce))}}async function Js(n,t,e){const r=z(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const f=d?!d.fromCache:e?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Jc.As(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,d){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(d,E=>P.forEach(E.Es,A=>f.persistence.referenceDelegate.addReference(m,E.targetId,A)).next(()=>P.forEach(E.ds,A=>f.persistence.referenceDelegate.removeReference(m,E.targetId,A)))))}catch(m){if(!$r(m))throw m;M(Zc,"Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const A=f.Ms.get(E),N=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(N);f.Ms=f.Ms.insert(E,D)}}}(r.localStore,i))}async function xI(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){M(ul,"User change. New user:",t.toKey());const r=await Bp(e.localStore,t);e.currentUser=t,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new V(C.CANCELLED,a))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Js(e,r.Ls)}}function FI(n,t){const e=z(n),r=e.Au.get(t);if(r&&r.hu)return X().add(r.key);{let s=X();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function sm(n){const t=z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=FI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kI.bind(null,t),t.Pu.H_=TI.bind(null,t.eventManager),t.Pu.yu=wI.bind(null,t.eventManager),t}function UI(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=VI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=LI.bind(null,t),t}class lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ko(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return qw(this.persistence,new $w,t.initialUser,this.serializer)}Cu(t){return new $p(Xc.mi,this.serializer)}Du(t){return new Yw}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lo.provider={build:()=>new lo};class $I extends lo{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Z(this.persistence.referenceDelegate instanceof ao,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bw(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new $p(r=>ao.mi(r,e),this.serializer)}}class _c{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xI.bind(null,this.syncEngine),await yI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new vI}()}createDatastore(t){const e=ko(t.databaseInfo.databaseId),r=function(i){return new eI(i)}(t.databaseInfo);return function(i,a,c,u){return new iI(i,a,c,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,a,c){return new aI(r,s,i,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Yh(this.syncEngine,e,0),function(){return Hh.v()?new Hh:new Xw}())}createSyncEngine(t,e){return function(s,i,a,c,u,d,f){const m=new SI(s,i,a,c,u,d);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(e){const r=z(e);M($n,"RemoteStore shutting down."),r.Ea.add(5),await Xs(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}_c.provider={build:()=>new _c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Pe("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="FirestoreClient";class BI{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Uc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M(ln,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M(ln,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=il(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Pa(n,t){n.asyncQueue.verifyOperationInProgress(),M(ln,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bp(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Jh(n,t){n.asyncQueue.verifyOperationInProgress();const e=await jI(n);M(ln,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>zh(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>zh(t.remoteStore,s)),n._onlineComponents=t}async function jI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(ln,"Using user provided OfflineComponentProvider");try{await Pa(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Tr("Error using user provided cache. Falling back to memory cache: "+e),await Pa(n,new lo)}}else M(ln,"Using default OfflineComponentProvider"),await Pa(n,new $I(void 0));return n._offlineComponents}async function im(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(ln,"Using user provided OnlineComponentProvider"),await Jh(n,n._uninitializedComponentsProvider._online)):(M(ln,"Using default OnlineComponentProvider"),await Jh(n,new _c))),n._onlineComponents}function qI(n){return im(n).then(t=>t.syncEngine)}async function uo(n){const t=await im(n),e=t.eventManager;return e.onListen=CI.bind(null,t.syncEngine),e.onUnlisten=NI.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=RI.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=DI.bind(null,t.syncEngine),e}function HI(n,t,e={}){const r=new Ae;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const f=new dl({next:E=>{f.Nu(),a.enqueueAndForget(()=>al(i,m));const A=E.docs.has(c);!A&&E.fromCache?d.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&E.fromCache&&u&&u.source==="server"?d.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new ll(Co(c.path),f,{includeMetadataChanges:!0,qa:!0});return ol(i,m)}(await uo(n),n.asyncQueue,t,e,r)),r.promise}function WI(n,t,e={}){const r=new Ae;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const f=new dl({next:E=>{f.Nu(),a.enqueueAndForget(()=>al(i,m)),E.fromCache&&u.source==="server"?d.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new ll(c,f,{includeMetadataChanges:!0,qa:!0});return ol(i,m)}(await uo(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firestore.googleapis.com",td=!0;class ed{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=am,this.ssl=td}else this.host=t.host,this.ssl=t.ssl??td;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Up;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Iw)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=om(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Mo{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ed({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ed(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jv;switch(r.type){case"firstParty":return new nT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Zh.get(e);r&&(M("ComponentProvider","Removing Datastore"),Zh.delete(e),r.terminate())}(this),Promise.resolve()}}function zI(n,t,e,r={}){n=Vt(n,Mo);const s=Lr(t),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(Zd(`https://${c}`),tf("Firestore",!0)),i.host!==am&&i.host!==c&&Tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Ln(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=It.MOCK_USER;else{d=o_(r.mockUserToken,n._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new It(m)}n._authCredentials=new Zv(new Qf(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new gn(this.firestore,t,this._query)}}class ct{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Gs(e,ct._jsonSchema))return new ct(t,r||null,new F(et.fromString(e.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:dt("string",ct._jsonSchemaVersion),referencePath:dt("string")};class nn extends gn{constructor(t,e,r){super(t,e,Co(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new F(t))}withConverter(t){return new nn(this.firestore,t,this._path)}}function Dn(n,t,...e){if(n=ft(n),Yf("collection","path",t),n instanceof Mo){const r=et.fromString(t,...e);return ph(r),new nn(n,null,r)}{if(!(n instanceof ct||n instanceof nn))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return ph(r),new nn(n.firestore,null,r)}}function Cr(n,t,...e){if(n=ft(n),arguments.length===1&&(t=Uc.newId()),Yf("doc","path",t),n instanceof Mo){const r=et.fromString(t,...e);return fh(r),new ct(n,null,new F(r))}{if(!(n instanceof ct||n instanceof nn))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return fh(r),new ct(n.firestore,n instanceof nn?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="AsyncQueue";class rd{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qp(this,"async_queue_retry"),this._c=()=>{const r=Ra();r&&M(nd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Ra();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ra();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Ae;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!$r(t))throw t;M(nd,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Pe("INTERNAL UNHANDLED ERROR: ",sd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=sl.createAndSchedule(this,t,e,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&q(47125,{Pc:sd(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function sd(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class De extends Mo{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new rd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new rd(t),this._firestoreClient=void 0,await t}}}function KI(n,t){const e=typeof n=="object"?n:sf(),r=typeof n=="string"?n:ro,s=Pc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=s_("firestore");i&&zI(s,...i)}return s}function xo(n){if(n._terminated)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||GI(n),n._firestoreClient}function GI(n){const t=n._freezeSettings(),e=function(s,i,a,c){return new ET(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,om(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new BI(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ht(Tt.fromBase64String(t))}catch(e){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ht(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Gs(t,Ht._jsonSchema))return Ht.fromBase64String(t.bytes)}}Ht._jsonSchemaVersion="firestore/bytes/1.0",Ht._jsonSchema={type:dt("string",Ht._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Y(this._lat,t._lat)||Y(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ue._jsonSchemaVersion}}static fromJSON(t){if(Gs(t,ue._jsonSchema))return new ue(t.latitude,t.longitude)}}ue._jsonSchemaVersion="firestore/geoPoint/1.0",ue._jsonSchema={type:dt("string",ue._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:he._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Gs(t,he._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new he(t.vectorValues);throw new V(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}he._jsonSchemaVersion="firestore/vectorValue/1.0",he._jsonSchema={type:dt("string",he._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=/^__.*__$/;class YI{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new mn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Qs(t,this.data,e,this.fieldTransforms)}}class cm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new mn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function lm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class fl{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new fl({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ho(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(lm(this.Ac)&&QI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class XI{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ko(t)}Cc(t,e,r,s=!1){return new fl({Ac:t,methodName:e,Dc:r,path:vt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uo(n){const t=n._freezeSettings(),e=ko(n._databaseId);return new XI(n._databaseId,!!t.ignoreUndefinedProperties,e)}function um(n,t,e,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,t,e,s);gl("Data must be an object, but it was:",a,r);const c=hm(r,a);let u,d;if(i.merge)u=new xt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const E=yc(t,m,e);if(!a.contains(E))throw new V(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);fm(f,E)||f.push(E)}u=new xt(f),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new YI(new Ot(c),u,d)}class $o extends Zs{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $o}}class pl extends Zs{_toFieldTransform(t){return new Sp(t.path,new xs)}isEqual(t){return t instanceof pl}}class ml extends Zs{constructor(t,e){super(t),this.Fc=e}_toFieldTransform(t){const e=new $s(t.serializer,Tp(t.serializer,this.Fc));return new Sp(t.path,e)}isEqual(t){return t instanceof ml&&this.Fc===t.Fc}}function JI(n,t,e,r){const s=n.Cc(1,t,e);gl("Data must be an object, but it was:",s,r);const i=[],a=Ot.empty();pn(r,(u,d)=>{const f=_l(t,u,e);d=ft(d);const m=s.yc(f);if(d instanceof $o)i.push(f);else{const E=ti(d,m);E!=null&&(i.push(f),a.set(f,E))}});const c=new xt(i);return new cm(a,c,s.fieldTransforms)}function ZI(n,t,e,r,s,i){const a=n.Cc(1,t,e),c=[yc(t,r,e)],u=[s];if(i.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(yc(t,i[E])),u.push(i[E+1]);const d=[],f=Ot.empty();for(let E=c.length-1;E>=0;--E)if(!fm(d,c[E])){const A=c[E];let N=u[E];N=ft(N);const D=a.yc(A);if(N instanceof $o)d.push(A);else{const R=ti(N,D);R!=null&&(d.push(A),f.set(A,R))}}const m=new xt(d);return new cm(f,m,a.fieldTransforms)}function tA(n,t,e,r=!1){return ti(e,n.Cc(r?4:3,t))}function ti(n,t){if(dm(n=ft(n)))return gl("Unsupported field value:",t,n),hm(n,t);if(n instanceof Zs)return function(r,s){if(!lm(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=ti(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:oo(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oo(s.serializer,i)}}if(r instanceof ue)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ht)return{bytesValue:Op(s.serializer,r._byteString)};if(r instanceof ct){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof he)return function(a,c){return{mapValue:{fields:{[ip]:{stringValue:op},[so]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Wc(c.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Io(r)}`)}(n,t)}function hm(n,t){const e={};return Zf(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pn(n,(r,s)=>{const i=ti(s,t.mc(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function dm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof ue||n instanceof Ht||n instanceof ct||n instanceof Zs||n instanceof he)}function gl(n,t,e){if(!dm(e)||!Xf(e)){const r=Io(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function yc(n,t,e){if((t=ft(t))instanceof Fo)return t._internalPath;if(typeof t=="string")return _l(n,t);throw ho("Field path arguments must be of type string or ",n,!1,void 0,e)}const eA=new RegExp("[~\\*/\\[\\]]");function _l(n,t,e){if(t.search(eA)>=0)throw ho(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Fo(...t.split("."))._internalPath}catch{throw ho(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ho(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(C.INVALID_ARGUMENT,c+n+u)}function fm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new nA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Bo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class nA extends pm{data(){return super.data()}}function Bo(n,t){return typeof t=="string"?_l(n,t):t instanceof Fo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yl{}class gm extends yl{}function fo(n,t,...e){let r=[];t instanceof yl&&r.push(t),r=r.concat(e),function(i){const a=i.filter(u=>u instanceof El).length,c=i.filter(u=>u instanceof jo).length;if(a>1||a>0&&c>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class jo extends gm{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new jo(t,e,r)}_apply(t){const e=this._parse(t);return ym(t._query,e),new gn(t.firestore,t.converter,ac(t._query,e))}_parse(t){const e=Uo(t.firestore);return function(i,a,c,u,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){cd(m,f);const N=[];for(const D of m)N.push(ad(u,i,D));E={arrayValue:{values:N}}}else E=ad(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||cd(m,f),E=tA(c,a,m,f==="in"||f==="not-in");return ht.create(d,f,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function od(n,t,e){const r=t,s=Bo("where",n);return jo._create(s,r,e)}class El extends yl{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new El(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ee.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)ym(a,u),a=ac(a,u)}(t._query,e),new gn(t.firestore,t.converter,ac(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vl extends gm{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new vl(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ms(i,a)}(t._query,this._field,this._direction);return new gn(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Br(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function _m(n,t="asc"){const e=t,r=Bo("orderBy",n);return vl._create(r,e)}function ad(n,t,e){if(typeof(e=ft(e))=="string"){if(e==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pp(t)&&e.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!F.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wh(n,new F(r))}if(e instanceof ct)return wh(n,e._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Io(e)}.`)}function cd(n,t){if(!Array.isArray(n)||n.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ym(n,t){const e=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class rA{convertValue(t,e="none"){switch(an(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(on(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return pn(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertVectorValue(t){const e=t.fields?.[so].arrayValue?.values?.map(r=>lt(r.doubleValue));return new he(e)}convertGeoPoint(t){return new ue(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=So(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(ks(t));default:return null}}convertTimestamp(t){const e=sn(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);Z(Fp(r),9688,{name:t});const s=new Vs(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(e)||Pe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Ts{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class On extends pm{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Bo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=On._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}On._jsonSchemaVersion="firestore/documentSnapshot/1.0",On._jsonSchema={type:dt("string",On._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class qi extends On{data(t={}){return super.data(t)}}class kn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ts(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new qi(this._firestore,this._userDataWriter,r.key,r,new Ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new qi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new qi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:sA(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=kn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Uc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function sA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(n){n=Vt(n,ct);const t=Vt(n.firestore,De);return HI(xo(t),n._key).then(e=>wm(t,n,e))}kn._jsonSchemaVersion="firestore/querySnapshot/1.0",kn._jsonSchema={type:dt("string",kn._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class Tl extends rA{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ht(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ct(this.firestore,null,e)}}function ld(n){n=Vt(n,gn);const t=Vt(n.firestore,De),e=xo(t),r=new Tl(t);return mm(n._query),WI(e,n._query).then(s=>new kn(t,r,n,s))}function oA(n,t,e){n=Vt(n,ct);const r=Vt(n.firestore,De),s=Em(n.converter,t);return qo(r,[um(Uo(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,zt.none())])}function aA(n,t,e,...r){n=Vt(n,ct);const s=Vt(n.firestore,De),i=Uo(s);let a;return a=typeof(t=ft(t))=="string"||t instanceof Fo?ZI(i,"updateDoc",n._key,t,e,r):JI(i,"updateDoc",n._key,t),qo(s,[a.toMutation(n._key,zt.exists(!0))])}function vm(n){return qo(Vt(n.firestore,De),[new zc(n._key,zt.none())])}function wl(n,t){const e=Vt(n.firestore,De),r=Cr(n),s=Em(n.converter,t);return qo(e,[um(Uo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Tm(n,...t){n=ft(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||id(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(id(t[r])){const u=t[r];t[r]=u.next?.bind(u),t[r+1]=u.error?.bind(u),t[r+2]=u.complete?.bind(u)}let i,a,c;if(n instanceof ct)a=Vt(n.firestore,De),c=Co(n._key.path),i={next:u=>{t[r]&&t[r](wm(a,n,u))},error:t[r+1],complete:t[r+2]};else{const u=Vt(n,gn);a=Vt(u.firestore,De),c=u._query;const d=new Tl(a);i={next:f=>{t[r]&&t[r](new kn(a,d,u,f))},error:t[r+1],complete:t[r+2]},mm(n._query)}return function(d,f,m,E){const A=new dl(E),N=new ll(f,A,m);return d.asyncQueue.enqueueAndForget(async()=>ol(await uo(d),N)),()=>{A.Nu(),d.asyncQueue.enqueueAndForget(async()=>al(await uo(d),N))}}(xo(a),c,s,i)}function qo(n,t){return function(r,s){const i=new Ae;return r.asyncQueue.enqueueAndForget(async()=>OI(await qI(r),s,i)),i.promise}(xo(n),t)}function wm(n,t,e){const r=e.docs.get(t._key),s=new Tl(n);return new On(n,s,t._key,r,new Ts(e.hasPendingWrites,e.fromCache),t.converter)}function Im(){return new pl("serverTimestamp")}function cA(n){return new ml("increment",n)}(function(t,e=!0){(function(s){Fr=s})(Mr),Er(new Mn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new De(new tT(r.getProvider("auth-internal")),new rT(a,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(d.options.projectId,f)}(a,s),a);return i={useFetchStreams:e,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),tn(lh,uh,t),tn(lh,uh,"esm2020")})();const lA={apiKey:"AIzaSyAkg2Uj1ZZvPnZpTi_zQkoaudbHTsK0GO8",authDomain:"flipit-b1370.firebaseapp.com",projectId:"flipit-b1370",appId:"1:579768461113:web:141fb0dd010e2197d32ae8"},Am=rf(lA),Ho=Gv(Am),Wt=KI(Am);async function yP(n,t){return DE(Ho,n,t)}async function EP(n,t,e,r="default"){const s=await NE(Ho,t,e);return await kE(s.user,{displayName:n}),await oA(Cr(Wt,"users",s.user.uid),{name:n,email:t,group:r,createdAt:new Date}),s.user}async function vP(){await xE(Ho),window.location.href="index.html"}function Wo(n){return ME(Ho,n)}function TP(n){const t=(n?.code||"").toLowerCase();return{"auth/invalid-credential":"Wrong email or password.","auth/invalid-email":"Please enter a valid email address.","auth/user-not-found":"No account found with that email.","auth/wrong-password":"Incorrect password.","auth/too-many-requests":"Too many attempts. Try again later.","auth/email-already-in-use":"Email is already in use.","auth/weak-password":"Password too weak (min 6 characters).","auth/missing-password":"Password cannot be empty.","auth/network-request-failed":"Network error. Try again."}[t]||"Something went wrong. Please try again."}var Pt="top",Ft="bottom",Ut="right",Nt="left",zo="auto",qr=[Pt,Ft,Ut,Nt],Bn="start",Rr="end",bm="clippingParents",Il="viewport",ur="popper",Sm="reference",Ec=qr.reduce(function(n,t){return n.concat([t+"-"+Bn,t+"-"+Rr])},[]),Al=[].concat(qr,[zo]).reduce(function(n,t){return n.concat([t,t+"-"+Bn,t+"-"+Rr])},[]),Cm="beforeRead",Rm="read",Pm="afterRead",Nm="beforeMain",Dm="main",Om="afterMain",km="beforeWrite",Vm="write",Lm="afterWrite",Mm=[Cm,Rm,Pm,Nm,Dm,Om,km,Vm,Lm];function me(n){return n?(n.nodeName||"").toLowerCase():null}function $t(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function jn(n){var t=$t(n).Element;return n instanceof t||n instanceof Element}function Kt(n){var t=$t(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function bl(n){if(typeof ShadowRoot>"u")return!1;var t=$t(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function uA(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},s=t.attributes[e]||{},i=t.elements[e];!Kt(i)||!me(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(a){var c=s[a];c===!1?i.removeAttribute(a):i.setAttribute(a,c===!0?"":c)}))})}function hA(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(r){var s=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:e[r]),c=a.reduce(function(u,d){return u[d]="",u},{});!Kt(s)||!me(s)||(Object.assign(s.style,c),Object.keys(i).forEach(function(u){s.removeAttribute(u)}))})}}const Sl={name:"applyStyles",enabled:!0,phase:"write",fn:uA,effect:hA,requires:["computeStyles"]};function de(n){return n.split("-")[0]}var Vn=Math.max,po=Math.min,Pr=Math.round;function vc(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function xm(){return!/^((?!chrome|android).)*safari/i.test(vc())}function Nr(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var r=n.getBoundingClientRect(),s=1,i=1;t&&Kt(n)&&(s=n.offsetWidth>0&&Pr(r.width)/n.offsetWidth||1,i=n.offsetHeight>0&&Pr(r.height)/n.offsetHeight||1);var a=jn(n)?$t(n):window,c=a.visualViewport,u=!xm()&&e,d=(r.left+(u&&c?c.offsetLeft:0))/s,f=(r.top+(u&&c?c.offsetTop:0))/i,m=r.width/s,E=r.height/i;return{width:m,height:E,top:f,right:d+m,bottom:f+E,left:d,x:d,y:f}}function Cl(n){var t=Nr(n),e=n.offsetWidth,r=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:r}}function Fm(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&bl(e)){var r=t;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Oe(n){return $t(n).getComputedStyle(n)}function dA(n){return["table","td","th"].indexOf(me(n))>=0}function _n(n){return((jn(n)?n.ownerDocument:n.document)||window.document).documentElement}function Ko(n){return me(n)==="html"?n:n.assignedSlot||n.parentNode||(bl(n)?n.host:null)||_n(n)}function ud(n){return!Kt(n)||Oe(n).position==="fixed"?null:n.offsetParent}function fA(n){var t=/firefox/i.test(vc()),e=/Trident/i.test(vc());if(e&&Kt(n)){var r=Oe(n);if(r.position==="fixed")return null}var s=Ko(n);for(bl(s)&&(s=s.host);Kt(s)&&["html","body"].indexOf(me(s))<0;){var i=Oe(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function ei(n){for(var t=$t(n),e=ud(n);e&&dA(e)&&Oe(e).position==="static";)e=ud(e);return e&&(me(e)==="html"||me(e)==="body"&&Oe(e).position==="static")?t:e||fA(n)||t}function Rl(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Rs(n,t,e){return Vn(n,po(t,e))}function pA(n,t,e){var r=Rs(n,t,e);return r>e?e:r}function Um(){return{top:0,right:0,bottom:0,left:0}}function $m(n){return Object.assign({},Um(),n)}function Bm(n,t){return t.reduce(function(e,r){return e[r]=n,e},{})}var mA=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,$m(typeof t!="number"?t:Bm(t,qr))};function gA(n){var t,e=n.state,r=n.name,s=n.options,i=e.elements.arrow,a=e.modifiersData.popperOffsets,c=de(e.placement),u=Rl(c),d=[Nt,Ut].indexOf(c)>=0,f=d?"height":"width";if(!(!i||!a)){var m=mA(s.padding,e),E=Cl(i),A=u==="y"?Pt:Nt,N=u==="y"?Ft:Ut,D=e.rects.reference[f]+e.rects.reference[u]-a[u]-e.rects.popper[f],R=a[u]-e.rects.reference[u],L=ei(i),x=L?u==="y"?L.clientHeight||0:L.clientWidth||0:0,$=D/2-R/2,B=m[A],K=x-E[f]-m[N],H=x/2-E[f]/2+$,T=Rs(B,H,K),g=u;e.modifiersData[r]=(t={},t[g]=T,t.centerOffset=T-H,t)}}function _A(n){var t=n.state,e=n.options,r=e.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||Fm(t.elements.popper,s)&&(t.elements.arrow=s))}const jm={name:"arrow",enabled:!0,phase:"main",fn:gA,effect:_A,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Dr(n){return n.split("-")[1]}var yA={top:"auto",right:"auto",bottom:"auto",left:"auto"};function EA(n,t){var e=n.x,r=n.y,s=t.devicePixelRatio||1;return{x:Pr(e*s)/s||0,y:Pr(r*s)/s||0}}function hd(n){var t,e=n.popper,r=n.popperRect,s=n.placement,i=n.variation,a=n.offsets,c=n.position,u=n.gpuAcceleration,d=n.adaptive,f=n.roundOffsets,m=n.isFixed,E=a.x,A=E===void 0?0:E,N=a.y,D=N===void 0?0:N,R=typeof f=="function"?f({x:A,y:D}):{x:A,y:D};A=R.x,D=R.y;var L=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),$=Nt,B=Pt,K=window;if(d){var H=ei(e),T="clientHeight",g="clientWidth";if(H===$t(e)&&(H=_n(e),Oe(H).position!=="static"&&c==="absolute"&&(T="scrollHeight",g="scrollWidth")),H=H,s===Pt||(s===Nt||s===Ut)&&i===Rr){B=Ft;var y=m&&H===K&&K.visualViewport?K.visualViewport.height:H[T];D-=y-r.height,D*=u?1:-1}if(s===Nt||(s===Pt||s===Ft)&&i===Rr){$=Ut;var w=m&&H===K&&K.visualViewport?K.visualViewport.width:H[g];A-=w-r.width,A*=u?1:-1}}var v=Object.assign({position:c},d&&yA),I=f===!0?EA({x:A,y:D},$t(e)):{x:A,y:D};if(A=I.x,D=I.y,u){var _;return Object.assign({},v,(_={},_[B]=x?"0":"",_[$]=L?"0":"",_.transform=(K.devicePixelRatio||1)<=1?"translate("+A+"px, "+D+"px)":"translate3d("+A+"px, "+D+"px, 0)",_))}return Object.assign({},v,(t={},t[B]=x?D+"px":"",t[$]=L?A+"px":"",t.transform="",t))}function vA(n){var t=n.state,e=n.options,r=e.gpuAcceleration,s=r===void 0?!0:r,i=e.adaptive,a=i===void 0?!0:i,c=e.roundOffsets,u=c===void 0?!0:c,d={placement:de(t.placement),variation:Dr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,hd(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,hd(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Pl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vA,data:{}};var Ci={passive:!0};function TA(n){var t=n.state,e=n.instance,r=n.options,s=r.scroll,i=s===void 0?!0:s,a=r.resize,c=a===void 0?!0:a,u=$t(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&d.forEach(function(f){f.addEventListener("scroll",e.update,Ci)}),c&&u.addEventListener("resize",e.update,Ci),function(){i&&d.forEach(function(f){f.removeEventListener("scroll",e.update,Ci)}),c&&u.removeEventListener("resize",e.update,Ci)}}const Nl={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:TA,data:{}};var wA={left:"right",right:"left",bottom:"top",top:"bottom"};function Hi(n){return n.replace(/left|right|bottom|top/g,function(t){return wA[t]})}var IA={start:"end",end:"start"};function dd(n){return n.replace(/start|end/g,function(t){return IA[t]})}function Dl(n){var t=$t(n),e=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:e,scrollTop:r}}function Ol(n){return Nr(_n(n)).left+Dl(n).scrollLeft}function AA(n,t){var e=$t(n),r=_n(n),s=e.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){i=s.width,a=s.height;var d=xm();(d||!d&&t==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:i,height:a,x:c+Ol(n),y:u}}function bA(n){var t,e=_n(n),r=Dl(n),s=(t=n.ownerDocument)==null?void 0:t.body,i=Vn(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),a=Vn(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),c=-r.scrollLeft+Ol(n),u=-r.scrollTop;return Oe(s||e).direction==="rtl"&&(c+=Vn(e.clientWidth,s?s.clientWidth:0)-i),{width:i,height:a,x:c,y:u}}function kl(n){var t=Oe(n),e=t.overflow,r=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+r)}function qm(n){return["html","body","#document"].indexOf(me(n))>=0?n.ownerDocument.body:Kt(n)&&kl(n)?n:qm(Ko(n))}function Ps(n,t){var e;t===void 0&&(t=[]);var r=qm(n),s=r===((e=n.ownerDocument)==null?void 0:e.body),i=$t(r),a=s?[i].concat(i.visualViewport||[],kl(r)?r:[]):r,c=t.concat(a);return s?c:c.concat(Ps(Ko(a)))}function Tc(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function SA(n,t){var e=Nr(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function fd(n,t,e){return t===Il?Tc(AA(n,e)):jn(t)?SA(t,e):Tc(bA(_n(n)))}function CA(n){var t=Ps(Ko(n)),e=["absolute","fixed"].indexOf(Oe(n).position)>=0,r=e&&Kt(n)?ei(n):n;return jn(r)?t.filter(function(s){return jn(s)&&Fm(s,r)&&me(s)!=="body"}):[]}function RA(n,t,e,r){var s=t==="clippingParents"?CA(n):[].concat(t),i=[].concat(s,[e]),a=i[0],c=i.reduce(function(u,d){var f=fd(n,d,r);return u.top=Vn(f.top,u.top),u.right=po(f.right,u.right),u.bottom=po(f.bottom,u.bottom),u.left=Vn(f.left,u.left),u},fd(n,a,r));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function Hm(n){var t=n.reference,e=n.element,r=n.placement,s=r?de(r):null,i=r?Dr(r):null,a=t.x+t.width/2-e.width/2,c=t.y+t.height/2-e.height/2,u;switch(s){case Pt:u={x:a,y:t.y-e.height};break;case Ft:u={x:a,y:t.y+t.height};break;case Ut:u={x:t.x+t.width,y:c};break;case Nt:u={x:t.x-e.width,y:c};break;default:u={x:t.x,y:t.y}}var d=s?Rl(s):null;if(d!=null){var f=d==="y"?"height":"width";switch(i){case Bn:u[d]=u[d]-(t[f]/2-e[f]/2);break;case Rr:u[d]=u[d]+(t[f]/2-e[f]/2);break}}return u}function Or(n,t){t===void 0&&(t={});var e=t,r=e.placement,s=r===void 0?n.placement:r,i=e.strategy,a=i===void 0?n.strategy:i,c=e.boundary,u=c===void 0?bm:c,d=e.rootBoundary,f=d===void 0?Il:d,m=e.elementContext,E=m===void 0?ur:m,A=e.altBoundary,N=A===void 0?!1:A,D=e.padding,R=D===void 0?0:D,L=$m(typeof R!="number"?R:Bm(R,qr)),x=E===ur?Sm:ur,$=n.rects.popper,B=n.elements[N?x:E],K=RA(jn(B)?B:B.contextElement||_n(n.elements.popper),u,f,a),H=Nr(n.elements.reference),T=Hm({reference:H,element:$,placement:s}),g=Tc(Object.assign({},$,T)),y=E===ur?g:H,w={top:K.top-y.top+L.top,bottom:y.bottom-K.bottom+L.bottom,left:K.left-y.left+L.left,right:y.right-K.right+L.right},v=n.modifiersData.offset;if(E===ur&&v){var I=v[s];Object.keys(w).forEach(function(_){var ot=[Ut,Ft].indexOf(_)>=0?1:-1,St=[Pt,Ft].indexOf(_)>=0?"y":"x";w[_]+=I[St]*ot})}return w}function PA(n,t){t===void 0&&(t={});var e=t,r=e.placement,s=e.boundary,i=e.rootBoundary,a=e.padding,c=e.flipVariations,u=e.allowedAutoPlacements,d=u===void 0?Al:u,f=Dr(r),m=f?c?Ec:Ec.filter(function(N){return Dr(N)===f}):qr,E=m.filter(function(N){return d.indexOf(N)>=0});E.length===0&&(E=m);var A=E.reduce(function(N,D){return N[D]=Or(n,{placement:D,boundary:s,rootBoundary:i,padding:a})[de(D)],N},{});return Object.keys(A).sort(function(N,D){return A[N]-A[D]})}function NA(n){if(de(n)===zo)return[];var t=Hi(n);return[dd(n),t,dd(t)]}function DA(n){var t=n.state,e=n.options,r=n.name;if(!t.modifiersData[r]._skip){for(var s=e.mainAxis,i=s===void 0?!0:s,a=e.altAxis,c=a===void 0?!0:a,u=e.fallbackPlacements,d=e.padding,f=e.boundary,m=e.rootBoundary,E=e.altBoundary,A=e.flipVariations,N=A===void 0?!0:A,D=e.allowedAutoPlacements,R=t.options.placement,L=de(R),x=L===R,$=u||(x||!N?[Hi(R)]:NA(R)),B=[R].concat($).reduce(function(Xt,jt){return Xt.concat(de(jt)===zo?PA(t,{placement:jt,boundary:f,rootBoundary:m,padding:d,flipVariations:N,allowedAutoPlacements:D}):jt)},[]),K=t.rects.reference,H=t.rects.popper,T=new Map,g=!0,y=B[0],w=0;w<B.length;w++){var v=B[w],I=de(v),_=Dr(v)===Bn,ot=[Pt,Ft].indexOf(I)>=0,St=ot?"width":"height",Ct=Or(t,{placement:v,boundary:f,rootBoundary:m,altBoundary:E,padding:d}),Lt=ot?_?Ut:Nt:_?Ft:Pt;K[St]>H[St]&&(Lt=Hi(Lt));var ge=Hi(Lt),Bt=[];if(i&&Bt.push(Ct[I]<=0),c&&Bt.push(Ct[Lt]<=0,Ct[ge]<=0),Bt.every(function(Xt){return Xt})){y=v,g=!1;break}T.set(v,Bt)}if(g)for(var Gn=N?3:1,Qn=function(jt){var _e=B.find(function(xe){var Jt=T.get(xe);if(Jt)return Jt.slice(0,jt).every(function(Yn){return Yn})});if(_e)return y=_e,"break"},Me=Gn;Me>0;Me--){var vn=Qn(Me);if(vn==="break")break}t.placement!==y&&(t.modifiersData[r]._skip=!0,t.placement=y,t.reset=!0)}}const Wm={name:"flip",enabled:!0,phase:"main",fn:DA,requiresIfExists:["offset"],data:{_skip:!1}};function pd(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function md(n){return[Pt,Ut,Ft,Nt].some(function(t){return n[t]>=0})}function OA(n){var t=n.state,e=n.name,r=t.rects.reference,s=t.rects.popper,i=t.modifiersData.preventOverflow,a=Or(t,{elementContext:"reference"}),c=Or(t,{altBoundary:!0}),u=pd(a,r),d=pd(c,s,i),f=md(u),m=md(d);t.modifiersData[e]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:f,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":m})}const zm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:OA};function kA(n,t,e){var r=de(n),s=[Nt,Pt].indexOf(r)>=0?-1:1,i=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,a=i[0],c=i[1];return a=a||0,c=(c||0)*s,[Nt,Ut].indexOf(r)>=0?{x:c,y:a}:{x:a,y:c}}function VA(n){var t=n.state,e=n.options,r=n.name,s=e.offset,i=s===void 0?[0,0]:s,a=Al.reduce(function(f,m){return f[m]=kA(m,t.rects,i),f},{}),c=a[t.placement],u=c.x,d=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=a}const Km={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:VA};function LA(n){var t=n.state,e=n.name;t.modifiersData[e]=Hm({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Vl={name:"popperOffsets",enabled:!0,phase:"read",fn:LA,data:{}};function MA(n){return n==="x"?"y":"x"}function xA(n){var t=n.state,e=n.options,r=n.name,s=e.mainAxis,i=s===void 0?!0:s,a=e.altAxis,c=a===void 0?!1:a,u=e.boundary,d=e.rootBoundary,f=e.altBoundary,m=e.padding,E=e.tether,A=E===void 0?!0:E,N=e.tetherOffset,D=N===void 0?0:N,R=Or(t,{boundary:u,rootBoundary:d,padding:m,altBoundary:f}),L=de(t.placement),x=Dr(t.placement),$=!x,B=Rl(L),K=MA(B),H=t.modifiersData.popperOffsets,T=t.rects.reference,g=t.rects.popper,y=typeof D=="function"?D(Object.assign({},t.rects,{placement:t.placement})):D,w=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),v=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(H){if(i){var _,ot=B==="y"?Pt:Nt,St=B==="y"?Ft:Ut,Ct=B==="y"?"height":"width",Lt=H[B],ge=Lt+R[ot],Bt=Lt-R[St],Gn=A?-g[Ct]/2:0,Qn=x===Bn?T[Ct]:g[Ct],Me=x===Bn?-g[Ct]:-T[Ct],vn=t.elements.arrow,Xt=A&&vn?Cl(vn):{width:0,height:0},jt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Um(),_e=jt[ot],xe=jt[St],Jt=Rs(0,T[Ct],Xt[Ct]),Yn=$?T[Ct]/2-Gn-Jt-_e-w.mainAxis:Qn-Jt-_e-w.mainAxis,ta=$?-T[Ct]/2+Gn+Jt+xe+w.mainAxis:Me+Jt+xe+w.mainAxis,Kr=t.elements.arrow&&ei(t.elements.arrow),oi=Kr?B==="y"?Kr.clientTop||0:Kr.clientLeft||0:0,Xn=(_=v?.[B])!=null?_:0,ai=Lt+Yn-Xn-oi,ea=Lt+ta-Xn,Jn=Rs(A?po(ge,ai):ge,Lt,A?Vn(Bt,ea):Bt);H[B]=Jn,I[B]=Jn-Lt}if(c){var Zn,ci=B==="x"?Pt:Nt,gt=B==="x"?Ft:Ut,st=H[K],ye=K==="y"?"height":"width",li=st+R[ci],Gr=st-R[gt],Qr=[Pt,Nt].indexOf(L)!==-1,Fe=(Zn=v?.[K])!=null?Zn:0,Yr=Qr?li:st-T[ye]-g[ye]-Fe+w.altAxis,Xr=Qr?st+T[ye]+g[ye]-Fe-w.altAxis:Gr,tr=A&&Qr?pA(Yr,st,Xr):Rs(A?Yr:li,st,A?Xr:Gr);H[K]=tr,I[K]=tr-st}t.modifiersData[r]=I}}const Gm={name:"preventOverflow",enabled:!0,phase:"main",fn:xA,requiresIfExists:["offset"]};function FA(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function UA(n){return n===$t(n)||!Kt(n)?Dl(n):FA(n)}function $A(n){var t=n.getBoundingClientRect(),e=Pr(t.width)/n.offsetWidth||1,r=Pr(t.height)/n.offsetHeight||1;return e!==1||r!==1}function BA(n,t,e){e===void 0&&(e=!1);var r=Kt(t),s=Kt(t)&&$A(t),i=_n(t),a=Nr(n,s,e),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!e)&&((me(t)!=="body"||kl(i))&&(c=UA(t)),Kt(t)?(u=Nr(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=Ol(i))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function jA(n){var t=new Map,e=new Set,r=[];n.forEach(function(i){t.set(i.name,i)});function s(i){e.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(c){if(!e.has(c)){var u=t.get(c);u&&s(u)}}),r.push(i)}return n.forEach(function(i){e.has(i.name)||s(i)}),r}function qA(n){var t=jA(n);return Mm.reduce(function(e,r){return e.concat(t.filter(function(s){return s.phase===r}))},[])}function HA(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function WA(n){var t=n.reduce(function(e,r){var s=e[r.name];return e[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,e},{});return Object.keys(t).map(function(e){return t[e]})}var gd={placement:"bottom",modifiers:[],strategy:"absolute"};function _d(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Go(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,r=e===void 0?[]:e,s=t.defaultOptions,i=s===void 0?gd:s;return function(c,u,d){d===void 0&&(d=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},gd,i),modifiersData:{},elements:{reference:c,popper:u},attributes:{},styles:{}},m=[],E=!1,A={state:f,setOptions:function(L){var x=typeof L=="function"?L(f.options):L;D(),f.options=Object.assign({},i,f.options,x),f.scrollParents={reference:jn(c)?Ps(c):c.contextElement?Ps(c.contextElement):[],popper:Ps(u)};var $=qA(WA([].concat(r,f.options.modifiers)));return f.orderedModifiers=$.filter(function(B){return B.enabled}),N(),A.update()},forceUpdate:function(){if(!E){var L=f.elements,x=L.reference,$=L.popper;if(_d(x,$)){f.rects={reference:BA(x,ei($),f.options.strategy==="fixed"),popper:Cl($)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(w){return f.modifiersData[w.name]=Object.assign({},w.data)});for(var B=0;B<f.orderedModifiers.length;B++){if(f.reset===!0){f.reset=!1,B=-1;continue}var K=f.orderedModifiers[B],H=K.fn,T=K.options,g=T===void 0?{}:T,y=K.name;typeof H=="function"&&(f=H({state:f,options:g,name:y,instance:A})||f)}}}},update:HA(function(){return new Promise(function(R){A.forceUpdate(),R(f)})}),destroy:function(){D(),E=!0}};if(!_d(c,u))return A;A.setOptions(d).then(function(R){!E&&d.onFirstUpdate&&d.onFirstUpdate(R)});function N(){f.orderedModifiers.forEach(function(R){var L=R.name,x=R.options,$=x===void 0?{}:x,B=R.effect;if(typeof B=="function"){var K=B({state:f,name:L,instance:A,options:$}),H=function(){};m.push(K||H)}})}function D(){m.forEach(function(R){return R()}),m=[]}return A}}var zA=Go(),KA=[Nl,Vl,Pl,Sl],GA=Go({defaultModifiers:KA}),QA=[Nl,Vl,Pl,Sl,Km,Wm,Gm,jm,zm],Ll=Go({defaultModifiers:QA});const Qm=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Om,afterRead:Pm,afterWrite:Lm,applyStyles:Sl,arrow:jm,auto:zo,basePlacements:qr,beforeMain:Nm,beforeRead:Cm,beforeWrite:km,bottom:Ft,clippingParents:bm,computeStyles:Pl,createPopper:Ll,createPopperBase:zA,createPopperLite:GA,detectOverflow:Or,end:Rr,eventListeners:Nl,flip:Wm,hide:zm,left:Nt,main:Dm,modifierPhases:Mm,offset:Km,placements:Al,popper:ur,popperGenerator:Go,popperOffsets:Vl,preventOverflow:Gm,read:Rm,reference:Sm,right:Ut,start:Bn,top:Pt,variationPlacements:Ec,viewport:Il,write:Vm},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ze=new Map,Na={set(n,t,e){ze.has(n)||ze.set(n,new Map);const r=ze.get(n);if(!r.has(t)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(t,e)},get(n,t){return ze.has(n)&&ze.get(n).get(t)||null},remove(n,t){if(!ze.has(n))return;const e=ze.get(n);e.delete(t),e.size===0&&ze.delete(n)}},YA=1e6,XA=1e3,wc="transitionend",Ym=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),JA=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),ZA=n=>{do n+=Math.floor(Math.random()*YA);while(document.getElementById(n));return n},tb=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const r=Number.parseFloat(t),s=Number.parseFloat(e);return!r&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*XA)},Xm=n=>{n.dispatchEvent(new Event(wc))},be=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),un=n=>be(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Ym(n)):null,Hr=n=>{if(!be(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const r=n.closest("summary");if(r&&r.parentNode!==e||r===null)return!1}return t},hn=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Jm=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Jm(n.parentNode):null},mo=()=>{},ni=n=>{n.offsetHeight},Zm=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Da=[],eb=n=>{document.readyState==="loading"?(Da.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Da)t()}),Da.push(n)):n()},Gt=()=>document.documentElement.dir==="rtl",Yt=n=>{eb(()=>{const t=Zm();if(t){const e=n.NAME,r=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=r,n.jQueryInterface)}})},kt=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,tg=(n,t,e=!0)=>{if(!e){kt(n);return}const s=tb(t)+5;let i=!1;const a=({target:c})=>{c===t&&(i=!0,t.removeEventListener(wc,a),kt(n))};t.addEventListener(wc,a),setTimeout(()=>{i||Xm(t)},s)},Ml=(n,t,e,r)=>{const s=n.length;let i=n.indexOf(t);return i===-1?!e&&r?n[s-1]:n[0]:(i+=e?1:-1,r&&(i=(i+s)%s),n[Math.max(0,Math.min(i,s-1))])},nb=/[^.]*(?=\..*)\.|.*/,rb=/\..*/,sb=/::\d+$/,Oa={};let yd=1;const eg={mouseenter:"mouseover",mouseleave:"mouseout"},ib=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ng(n,t){return t&&`${t}::${yd++}`||n.uidEvent||yd++}function rg(n){const t=ng(n);return n.uidEvent=t,Oa[t]=Oa[t]||{},Oa[t]}function ob(n,t){return function e(r){return xl(r,{delegateTarget:n}),e.oneOff&&O.off(n,r.type,t),t.apply(n,[r])}}function ab(n,t,e){return function r(s){const i=n.querySelectorAll(t);for(let{target:a}=s;a&&a!==this;a=a.parentNode)for(const c of i)if(c===a)return xl(s,{delegateTarget:a}),r.oneOff&&O.off(n,s.type,t,e),e.apply(a,[s])}}function sg(n,t,e=null){return Object.values(n).find(r=>r.callable===t&&r.delegationSelector===e)}function ig(n,t,e){const r=typeof t=="string",s=r?e:t||e;let i=og(n);return ib.has(i)||(i=n),[r,s,i]}function Ed(n,t,e,r,s){if(typeof t!="string"||!n)return;let[i,a,c]=ig(t,e,r);t in eg&&(a=(N=>function(D){if(!D.relatedTarget||D.relatedTarget!==D.delegateTarget&&!D.delegateTarget.contains(D.relatedTarget))return N.call(this,D)})(a));const u=rg(n),d=u[c]||(u[c]={}),f=sg(d,a,i?e:null);if(f){f.oneOff=f.oneOff&&s;return}const m=ng(a,t.replace(nb,"")),E=i?ab(n,e,a):ob(n,a);E.delegationSelector=i?e:null,E.callable=a,E.oneOff=s,E.uidEvent=m,d[m]=E,n.addEventListener(c,E,i)}function Ic(n,t,e,r,s){const i=sg(t[e],r,s);i&&(n.removeEventListener(e,i,!!s),delete t[e][i.uidEvent])}function cb(n,t,e,r){const s=t[e]||{};for(const[i,a]of Object.entries(s))i.includes(r)&&Ic(n,t,e,a.callable,a.delegationSelector)}function og(n){return n=n.replace(rb,""),eg[n]||n}const O={on(n,t,e,r){Ed(n,t,e,r,!1)},one(n,t,e,r){Ed(n,t,e,r,!0)},off(n,t,e,r){if(typeof t!="string"||!n)return;const[s,i,a]=ig(t,e,r),c=a!==t,u=rg(n),d=u[a]||{},f=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(d).length)return;Ic(n,u,a,i,s?e:null);return}if(f)for(const m of Object.keys(u))cb(n,u,m,t.slice(1));for(const[m,E]of Object.entries(d)){const A=m.replace(sb,"");(!c||t.includes(A))&&Ic(n,u,a,E.callable,E.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const r=Zm(),s=og(t),i=t!==s;let a=null,c=!0,u=!0,d=!1;i&&r&&(a=r.Event(t,e),r(n).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented());const f=xl(new Event(t,{bubbles:c,cancelable:!0}),e);return d&&f.preventDefault(),u&&n.dispatchEvent(f),f.defaultPrevented&&a&&a.preventDefault(),f}};function xl(n,t={}){for(const[e,r]of Object.entries(t))try{n[e]=r}catch{Object.defineProperty(n,e,{configurable:!0,get(){return r}})}return n}function vd(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function ka(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Se={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${ka(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${ka(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of e){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),t[s]=vd(n.dataset[r])}return t},getDataAttribute(n,t){return vd(n.getAttribute(`data-bs-${ka(t)}`))}};class ri{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=be(e)?Se.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...be(e)?Se.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,s]of Object.entries(e)){const i=t[r],a=be(i)?"element":JA(i);if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${s}".`)}}}const lb="5.3.8";class ne extends ri{constructor(t,e){super(),t=un(t),t&&(this._element=t,this._config=this._getConfig(e),Na.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Na.remove(this._element,this.constructor.DATA_KEY),O.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){tg(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Na.get(un(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return lb}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Va=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Ym(e)).join(","):null},U={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let r=n.parentNode.closest(t);for(;r;)e.push(r),r=r.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!hn(e)&&Hr(e))},getSelectorFromElement(n){const t=Va(n);return t&&U.findOne(t)?t:null},getElementFromSelector(n){const t=Va(n);return t?U.findOne(t):null},getMultipleElementsFromSelector(n){const t=Va(n);return t?U.find(t):[]}},Qo=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,r=n.NAME;O.on(document,e,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),hn(this))return;const i=U.getElementFromSelector(this)||this.closest(`.${r}`);n.getOrCreateInstance(i)[t]()})},ub="alert",hb="bs.alert",ag=`.${hb}`,db=`close${ag}`,fb=`closed${ag}`,pb="fade",mb="show";class Yo extends ne{static get NAME(){return ub}close(){if(O.trigger(this._element,db).defaultPrevented)return;this._element.classList.remove(mb);const e=this._element.classList.contains(pb);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),O.trigger(this._element,fb),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Yo.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Qo(Yo,"close");Yt(Yo);const gb="button",_b="bs.button",yb=`.${_b}`,Eb=".data-api",vb="active",Td='[data-bs-toggle="button"]',Tb=`click${yb}${Eb}`;class Xo extends ne{static get NAME(){return gb}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(vb))}static jQueryInterface(t){return this.each(function(){const e=Xo.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}O.on(document,Tb,Td,n=>{n.preventDefault();const t=n.target.closest(Td);Xo.getOrCreateInstance(t).toggle()});Yt(Xo);const wb="swipe",Wr=".bs.swipe",Ib=`touchstart${Wr}`,Ab=`touchmove${Wr}`,bb=`touchend${Wr}`,Sb=`pointerdown${Wr}`,Cb=`pointerup${Wr}`,Rb="touch",Pb="pen",Nb="pointer-event",Db=40,Ob={endCallback:null,leftCallback:null,rightCallback:null},kb={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class go extends ri{constructor(t,e){super(),this._element=t,!(!t||!go.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Ob}static get DefaultType(){return kb}static get NAME(){return wb}dispose(){O.off(this._element,Wr)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),kt(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Db)return;const e=t/this._deltaX;this._deltaX=0,e&&kt(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(O.on(this._element,Sb,t=>this._start(t)),O.on(this._element,Cb,t=>this._end(t)),this._element.classList.add(Nb)):(O.on(this._element,Ib,t=>this._start(t)),O.on(this._element,Ab,t=>this._move(t)),O.on(this._element,bb,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Pb||t.pointerType===Rb)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Vb="carousel",Lb="bs.carousel",yn=`.${Lb}`,cg=".data-api",Mb="ArrowLeft",xb="ArrowRight",Fb=500,fs="next",sr="prev",hr="left",Wi="right",Ub=`slide${yn}`,La=`slid${yn}`,$b=`keydown${yn}`,Bb=`mouseenter${yn}`,jb=`mouseleave${yn}`,qb=`dragstart${yn}`,Hb=`load${yn}${cg}`,Wb=`click${yn}${cg}`,lg="carousel",Ri="active",zb="slide",Kb="carousel-item-end",Gb="carousel-item-start",Qb="carousel-item-next",Yb="carousel-item-prev",ug=".active",hg=".carousel-item",Xb=ug+hg,Jb=".carousel-item img",Zb=".carousel-indicators",tS="[data-bs-slide], [data-bs-slide-to]",eS='[data-bs-ride="carousel"]',nS={[Mb]:Wi,[xb]:hr},rS={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},sS={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class si extends ne{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=U.findOne(Zb,this._element),this._addEventListeners(),this._config.ride===lg&&this.cycle()}static get Default(){return rS}static get DefaultType(){return sS}static get NAME(){return Vb}next(){this._slide(fs)}nextWhenVisible(){!document.hidden&&Hr(this._element)&&this.next()}prev(){this._slide(sr)}pause(){this._isSliding&&Xm(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){O.one(this._element,La,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){O.one(this._element,La,()=>this.to(t));return}const r=this._getItemIndex(this._getActive());if(r===t)return;const s=t>r?fs:sr;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&O.on(this._element,$b,t=>this._keydown(t)),this._config.pause==="hover"&&(O.on(this._element,Bb,()=>this.pause()),O.on(this._element,jb,()=>this._maybeEnableCycle())),this._config.touch&&go.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of U.find(Jb,this._element))O.on(r,qb,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(hr)),rightCallback:()=>this._slide(this._directionToOrder(Wi)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Fb+this._config.interval))}};this._swipeHelper=new go(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=nS[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=U.findOne(ug,this._indicatorsElement);e.classList.remove(Ri),e.removeAttribute("aria-current");const r=U.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add(Ri),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const r=this._getActive(),s=t===fs,i=e||Ml(this._getItems(),r,s,this._config.wrap);if(i===r)return;const a=this._getItemIndex(i),c=A=>O.trigger(this._element,A,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:a});if(c(Ub).defaultPrevented||!r||!i)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;const f=s?Gb:Kb,m=s?Qb:Yb;i.classList.add(m),ni(i),r.classList.add(f),i.classList.add(f);const E=()=>{i.classList.remove(f,m),i.classList.add(Ri),r.classList.remove(Ri,m,f),this._isSliding=!1,c(La)};this._queueCallback(E,r,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(zb)}_getActive(){return U.findOne(Xb,this._element)}_getItems(){return U.find(hg,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Gt()?t===hr?sr:fs:t===hr?fs:sr}_orderToDirection(t){return Gt()?t===sr?hr:Wi:t===sr?Wi:hr}static jQueryInterface(t){return this.each(function(){const e=si.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}O.on(document,Wb,tS,function(n){const t=U.getElementFromSelector(this);if(!t||!t.classList.contains(lg))return;n.preventDefault();const e=si.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");if(r){e.to(r),e._maybeEnableCycle();return}if(Se.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});O.on(window,Hb,()=>{const n=U.find(eS);for(const t of n)si.getOrCreateInstance(t)});Yt(si);const iS="collapse",oS="bs.collapse",ii=`.${oS}`,aS=".data-api",cS=`show${ii}`,lS=`shown${ii}`,uS=`hide${ii}`,hS=`hidden${ii}`,dS=`click${ii}${aS}`,Ma="show",pr="collapse",Pi="collapsing",fS="collapsed",pS=`:scope .${pr} .${pr}`,mS="collapse-horizontal",gS="width",_S="height",yS=".collapse.show, .collapse.collapsing",Ac='[data-bs-toggle="collapse"]',ES={parent:null,toggle:!0},vS={parent:"(null|element)",toggle:"boolean"};class Bs extends ne{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=U.find(Ac);for(const s of r){const i=U.getSelectorFromElement(s),a=U.find(i).filter(c=>c===this._element);i!==null&&a.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ES}static get DefaultType(){return vS}static get NAME(){return iS}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(yS).filter(c=>c!==this._element).map(c=>Bs.getOrCreateInstance(c,{toggle:!1}))),t.length&&t[0]._isTransitioning||O.trigger(this._element,cS).defaultPrevented)return;for(const c of t)c.hide();const r=this._getDimension();this._element.classList.remove(pr),this._element.classList.add(Pi),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Pi),this._element.classList.add(pr,Ma),this._element.style[r]="",O.trigger(this._element,lS)},a=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||O.trigger(this._element,uS).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,ni(this._element),this._element.classList.add(Pi),this._element.classList.remove(pr,Ma);for(const s of this._triggerArray){const i=U.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Pi),this._element.classList.add(pr),O.trigger(this._element,hS)};this._element.style[e]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Ma)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=un(t.parent),t}_getDimension(){return this._element.classList.contains(mS)?gS:_S}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ac);for(const e of t){const r=U.getElementFromSelector(e);r&&this._addAriaAndCollapsedClass([e],this._isShown(r))}}_getFirstLevelChildren(t){const e=U.find(pS,this._config.parent);return U.find(t,this._config.parent).filter(r=>!e.includes(r))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle(fS,!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=Bs.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t]()}})}}O.on(document,dS,Ac,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of U.getMultipleElementsFromSelector(this))Bs.getOrCreateInstance(t,{toggle:!1}).toggle()});Yt(Bs);const wd="dropdown",TS="bs.dropdown",zn=`.${TS}`,Fl=".data-api",wS="Escape",Id="Tab",IS="ArrowUp",Ad="ArrowDown",AS=2,bS=`hide${zn}`,SS=`hidden${zn}`,CS=`show${zn}`,RS=`shown${zn}`,dg=`click${zn}${Fl}`,fg=`keydown${zn}${Fl}`,PS=`keyup${zn}${Fl}`,dr="show",NS="dropup",DS="dropend",OS="dropstart",kS="dropup-center",VS="dropdown-center",Rn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',LS=`${Rn}.${dr}`,zi=".dropdown-menu",MS=".navbar",xS=".navbar-nav",FS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",US=Gt()?"top-end":"top-start",$S=Gt()?"top-start":"top-end",BS=Gt()?"bottom-end":"bottom-start",jS=Gt()?"bottom-start":"bottom-end",qS=Gt()?"left-start":"right-start",HS=Gt()?"right-start":"left-start",WS="top",zS="bottom",KS={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},GS={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class fe extends ne{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=U.next(this._element,zi)[0]||U.prev(this._element,zi)[0]||U.findOne(zi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return KS}static get DefaultType(){return GS}static get NAME(){return wd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(hn(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!O.trigger(this._element,CS,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(xS))for(const r of[].concat(...document.body.children))O.on(r,"mouseover",mo);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(dr),this._element.classList.add(dr),O.trigger(this._element,RS,t)}}hide(){if(hn(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!O.trigger(this._element,bS,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))O.off(r,"mouseover",mo);this._popper&&this._popper.destroy(),this._menu.classList.remove(dr),this._element.classList.remove(dr),this._element.setAttribute("aria-expanded","false"),Se.removeDataAttribute(this._menu,"popper"),O.trigger(this._element,SS,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!be(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${wd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Qm>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:be(this._config.reference)?t=un(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Ll(t,this._menu,e)}_isShown(){return this._menu.classList.contains(dr)}_getPlacement(){const t=this._parent;if(t.classList.contains(DS))return qS;if(t.classList.contains(OS))return HS;if(t.classList.contains(kS))return WS;if(t.classList.contains(VS))return zS;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(NS)?e?$S:US:e?jS:BS}_detectNavbar(){return this._element.closest(MS)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Se.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...kt(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const r=U.find(FS,this._menu).filter(s=>Hr(s));r.length&&Ml(r,e,t===Ad,!r.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=fe.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===AS||t.type==="keyup"&&t.key!==Id)return;const e=U.find(LS);for(const r of e){const s=fe.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=t.composedPath(),a=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!a||s._config.autoClose==="outside"&&a||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Id||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const c={relatedTarget:s._element};t.type==="click"&&(c.clickEvent=t),s._completeHide(c)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),r=t.key===wS,s=[IS,Ad].includes(t.key);if(!s&&!r||e&&!r)return;t.preventDefault();const i=this.matches(Rn)?this:U.prev(this,Rn)[0]||U.next(this,Rn)[0]||U.findOne(Rn,t.delegateTarget.parentNode),a=fe.getOrCreateInstance(i);if(s){t.stopPropagation(),a.show(),a._selectMenuItem(t);return}a._isShown()&&(t.stopPropagation(),a.hide(),i.focus())}}O.on(document,fg,Rn,fe.dataApiKeydownHandler);O.on(document,fg,zi,fe.dataApiKeydownHandler);O.on(document,dg,fe.clearMenus);O.on(document,PS,fe.clearMenus);O.on(document,dg,Rn,function(n){n.preventDefault(),fe.getOrCreateInstance(this).toggle()});Yt(fe);const pg="backdrop",QS="fade",bd="show",Sd=`mousedown.bs.${pg}`,YS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},XS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class mg extends ri{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return YS}static get DefaultType(){return XS}static get NAME(){return pg}show(t){if(!this._config.isVisible){kt(t);return}this._append();const e=this._getElement();this._config.isAnimated&&ni(e),e.classList.add(bd),this._emulateAnimation(()=>{kt(t)})}hide(t){if(!this._config.isVisible){kt(t);return}this._getElement().classList.remove(bd),this._emulateAnimation(()=>{this.dispose(),kt(t)})}dispose(){this._isAppended&&(O.off(this._element,Sd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(QS),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=un(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),O.on(t,Sd,()=>{kt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){tg(t,this._getElement(),this._config.isAnimated)}}const JS="focustrap",ZS="bs.focustrap",_o=`.${ZS}`,tC=`focusin${_o}`,eC=`keydown.tab${_o}`,nC="Tab",rC="forward",Cd="backward",sC={autofocus:!0,trapElement:null},iC={autofocus:"boolean",trapElement:"element"};class gg extends ri{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return sC}static get DefaultType(){return iC}static get NAME(){return JS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),O.off(document,_o),O.on(document,tC,t=>this._handleFocusin(t)),O.on(document,eC,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,O.off(document,_o))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const r=U.focusableChildren(e);r.length===0?e.focus():this._lastTabNavDirection===Cd?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===nC&&(this._lastTabNavDirection=t.shiftKey?Cd:rC)}}const Rd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Pd=".sticky-top",Ni="padding-right",Nd="margin-right";class bc{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ni,e=>e+t),this._setElementAttributes(Rd,Ni,e=>e+t),this._setElementAttributes(Pd,Nd,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ni),this._resetElementAttributes(Rd,Ni),this._resetElementAttributes(Pd,Nd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,r){const s=this.getWidth(),i=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+s)return;this._saveInitialAttribute(a,e);const c=window.getComputedStyle(a).getPropertyValue(e);a.style.setProperty(e,`${r(Number.parseFloat(c))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,e){const r=t.style.getPropertyValue(e);r&&Se.setDataAttribute(t,e,r)}_resetElementAttributes(t,e){const r=s=>{const i=Se.getDataAttribute(s,e);if(i===null){s.style.removeProperty(e);return}Se.removeDataAttribute(s,e),s.style.setProperty(e,i)};this._applyManipulationCallback(t,r)}_applyManipulationCallback(t,e){if(be(t)){e(t);return}for(const r of U.find(t,this._element))e(r)}}const oC="modal",aC="bs.modal",Qt=`.${aC}`,cC=".data-api",lC="Escape",uC=`hide${Qt}`,hC=`hidePrevented${Qt}`,_g=`hidden${Qt}`,yg=`show${Qt}`,dC=`shown${Qt}`,fC=`resize${Qt}`,pC=`click.dismiss${Qt}`,mC=`mousedown.dismiss${Qt}`,gC=`keydown.dismiss${Qt}`,_C=`click${Qt}${cC}`,Dd="modal-open",yC="fade",Od="show",xa="modal-static",EC=".modal.show",vC=".modal-dialog",TC=".modal-body",wC='[data-bs-toggle="modal"]',IC={backdrop:!0,focus:!0,keyboard:!0},AC={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class kr extends ne{constructor(t,e){super(t,e),this._dialog=U.findOne(vC,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new bc,this._addEventListeners()}static get Default(){return IC}static get DefaultType(){return AC}static get NAME(){return oC}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||O.trigger(this._element,yg,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Dd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||O.trigger(this._element,uC).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Od),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){O.off(window,Qt),O.off(this._dialog,Qt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new mg({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new gg({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=U.findOne(TC,this._dialog);e&&(e.scrollTop=0),ni(this._element),this._element.classList.add(Od);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,O.trigger(this._element,dC,{relatedTarget:t})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){O.on(this._element,gC,t=>{if(t.key===lC){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),O.on(window,fC,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),O.on(this._element,mC,t=>{O.one(this._element,pC,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Dd),this._resetAdjustments(),this._scrollBar.reset(),O.trigger(this._element,_g)})}_isAnimated(){return this._element.classList.contains(yC)}_triggerBackdropTransition(){if(O.trigger(this._element,hC).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(xa)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(xa),this._queueCallback(()=>{this._element.classList.remove(xa),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),r=e>0;if(r&&!t){const s=Gt()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!r&&t){const s=Gt()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const r=kr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t](e)}})}}O.on(document,_C,wC,function(n){const t=U.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),O.one(t,yg,s=>{s.defaultPrevented||O.one(t,_g,()=>{Hr(this)&&this.focus()})});const e=U.findOne(EC);e&&kr.getInstance(e).hide(),kr.getOrCreateInstance(t).toggle(this)});Qo(kr);Yt(kr);const bC="offcanvas",SC="bs.offcanvas",Le=`.${SC}`,Eg=".data-api",CC=`load${Le}${Eg}`,RC="Escape",kd="show",Vd="showing",Ld="hiding",PC="offcanvas-backdrop",vg=".offcanvas.show",NC=`show${Le}`,DC=`shown${Le}`,OC=`hide${Le}`,Md=`hidePrevented${Le}`,Tg=`hidden${Le}`,kC=`resize${Le}`,VC=`click${Le}${Eg}`,LC=`keydown.dismiss${Le}`,MC='[data-bs-toggle="offcanvas"]',xC={backdrop:!0,keyboard:!0,scroll:!1},FC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class dn extends ne{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return xC}static get DefaultType(){return FC}static get NAME(){return bC}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||O.trigger(this._element,NC,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new bc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Vd);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(kd),this._element.classList.remove(Vd),O.trigger(this._element,DC,{relatedTarget:t})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||O.trigger(this._element,OC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ld),this._backdrop.hide();const e=()=>{this._element.classList.remove(kd,Ld),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new bc().reset(),O.trigger(this._element,Tg)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){O.trigger(this._element,Md);return}this.hide()},e=!!this._config.backdrop;return new mg({className:PC,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new gg({trapElement:this._element})}_addEventListeners(){O.on(this._element,LC,t=>{if(t.key===RC){if(this._config.keyboard){this.hide();return}O.trigger(this._element,Md)}})}static jQueryInterface(t){return this.each(function(){const e=dn.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}O.on(document,VC,MC,function(n){const t=U.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),hn(this))return;O.one(t,Tg,()=>{Hr(this)&&this.focus()});const e=U.findOne(vg);e&&e!==t&&dn.getInstance(e).hide(),dn.getOrCreateInstance(t).toggle(this)});O.on(window,CC,()=>{for(const n of U.find(vg))dn.getOrCreateInstance(n).show()});O.on(window,kC,()=>{for(const n of U.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&dn.getOrCreateInstance(n).hide()});Qo(dn);Yt(dn);const UC=/^aria-[\w-]*$/i,wg={"*":["class","dir","id","lang","role",UC],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},$C=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),BC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,jC=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?$C.has(e)?!!BC.test(n.nodeValue):!0:t.filter(r=>r instanceof RegExp).some(r=>r.test(e))};function qC(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const a of i){const c=a.nodeName.toLowerCase();if(!Object.keys(t).includes(c)){a.remove();continue}const u=[].concat(...a.attributes),d=[].concat(t["*"]||[],t[c]||[]);for(const f of u)jC(f,d)||a.removeAttribute(f.nodeName)}return s.body.innerHTML}const HC="TemplateFactory",WC={allowList:wg,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},zC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},KC={entry:"(string|element|function|null)",selector:"(string|element)"};class GC extends ri{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return WC}static get DefaultType(){return zC}static get NAME(){return HC}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(t,i,s);const e=t.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&e.classList.add(...r.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,r]of Object.entries(t))super._typeCheckConfig({selector:e,entry:r},KC)}_setContent(t,e,r){const s=U.findOne(r,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(be(e)){this._putElementInTemplate(un(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?qC(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return kt(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const QC="tooltip",YC=new Set(["sanitize","allowList","sanitizeFn"]),Fa="fade",XC="modal",Di="show",JC=".tooltip-inner",xd=`.${XC}`,Fd="hide.bs.modal",ps="hover",Ua="focus",$a="click",ZC="manual",tR="hide",eR="hidden",nR="show",rR="shown",sR="inserted",iR="click",oR="focusin",aR="focusout",cR="mouseenter",lR="mouseleave",uR={AUTO:"auto",TOP:"top",RIGHT:Gt()?"left":"right",BOTTOM:"bottom",LEFT:Gt()?"right":"left"},hR={allowList:wg,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},dR={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class zr extends ne{constructor(t,e){if(typeof Qm>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return hR}static get DefaultType(){return dR}static get NAME(){return QC}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),O.off(this._element.closest(xd),Fd,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=O.trigger(this._element,this.constructor.eventName(nR)),r=(Jm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),O.trigger(this._element,this.constructor.eventName(sR))),this._popper=this._createPopper(s),s.classList.add(Di),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))O.on(c,"mouseover",mo);const a=()=>{O.trigger(this._element,this.constructor.eventName(rR)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||O.trigger(this._element,this.constructor.eventName(tR)).defaultPrevented)return;if(this._getTipElement().classList.remove(Di),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))O.off(s,"mouseover",mo);this._activeTrigger[$a]=!1,this._activeTrigger[Ua]=!1,this._activeTrigger[ps]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),O.trigger(this._element,this.constructor.eventName(eR)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Fa,Di),e.classList.add(`bs-${this.constructor.NAME}-auto`);const r=ZA(this.constructor.NAME).toString();return e.setAttribute("id",r),this._isAnimated()&&e.classList.add(Fa),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new GC({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[JC]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Fa)}_isShown(){return this.tip&&this.tip.classList.contains(Di)}_createPopper(t){const e=kt(this._config.placement,[this,t,this._element]),r=uR[e.toUpperCase()];return Ll(this._element,t,this._getPopperConfig(r))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return kt(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...e,...kt(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")O.on(this._element,this.constructor.eventName(iR),this._config.selector,r=>{const s=this._initializeOnDelegatedTarget(r);s._activeTrigger[$a]=!(s._isShown()&&s._activeTrigger[$a]),s.toggle()});else if(e!==ZC){const r=e===ps?this.constructor.eventName(cR):this.constructor.eventName(oR),s=e===ps?this.constructor.eventName(lR):this.constructor.eventName(aR);O.on(this._element,r,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusin"?Ua:ps]=!0,a._enter()}),O.on(this._element,s,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusout"?Ua:ps]=a._element.contains(i.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},O.on(this._element.closest(xd),Fd,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Se.getDataAttributes(this._element);for(const r of Object.keys(e))YC.has(r)&&delete e[r];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:un(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,r]of Object.entries(this._config))this.constructor.Default[e]!==r&&(t[e]=r);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=zr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Yt(zr);const fR="popover",pR=".popover-header",mR=".popover-body",gR={...zr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},_R={...zr.DefaultType,content:"(null|string|element|function)"};class Ul extends zr{static get Default(){return gR}static get DefaultType(){return _R}static get NAME(){return fR}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[pR]:this._getTitle(),[mR]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Ul.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Yt(Ul);const yR="scrollspy",ER="bs.scrollspy",$l=`.${ER}`,vR=".data-api",TR=`activate${$l}`,Ud=`click${$l}`,wR=`load${$l}${vR}`,IR="dropdown-item",ir="active",AR='[data-bs-spy="scroll"]',Ba="[href]",bR=".nav, .list-group",$d=".nav-link",SR=".nav-item",CR=".list-group-item",RR=`${$d}, ${SR} > ${$d}, ${CR}`,PR=".dropdown",NR=".dropdown-toggle",DR={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},OR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Jo extends ne{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return DR}static get DefaultType(){return OR}static get NAME(){return yR}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=un(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(O.off(this._config.target,Ud),O.on(this._config.target,Ud,Ba,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const r=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=a=>this._targetLinks.get(`#${a.target.id}`),r=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(e(a))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const a of t){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(a));continue}const c=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&c){if(r(a),!s)return;continue}!i&&!c&&r(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=U.find(Ba,this._config.target);for(const e of t){if(!e.hash||hn(e))continue;const r=U.findOne(decodeURI(e.hash),this._element);Hr(r)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,r))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(ir),this._activateParents(t),O.trigger(this._element,TR,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(IR)){U.findOne(NR,t.closest(PR)).classList.add(ir);return}for(const e of U.parents(t,bR))for(const r of U.prev(e,RR))r.classList.add(ir)}_clearActiveClass(t){t.classList.remove(ir);const e=U.find(`${Ba}.${ir}`,t);for(const r of e)r.classList.remove(ir)}static jQueryInterface(t){return this.each(function(){const e=Jo.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}O.on(window,wR,()=>{for(const n of U.find(AR))Jo.getOrCreateInstance(n)});Yt(Jo);const kR="tab",VR="bs.tab",Kn=`.${VR}`,LR=`hide${Kn}`,MR=`hidden${Kn}`,xR=`show${Kn}`,FR=`shown${Kn}`,UR=`click${Kn}`,$R=`keydown${Kn}`,BR=`load${Kn}`,jR="ArrowLeft",Bd="ArrowRight",qR="ArrowUp",jd="ArrowDown",ja="Home",qd="End",Pn="active",Hd="fade",qa="show",HR="dropdown",Ig=".dropdown-toggle",WR=".dropdown-menu",Ha=`:not(${Ig})`,zR='.list-group, .nav, [role="tablist"]',KR=".nav-item, .list-group-item",GR=`.nav-link${Ha}, .list-group-item${Ha}, [role="tab"]${Ha}`,Ag='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Wa=`${GR}, ${Ag}`,QR=`.${Pn}[data-bs-toggle="tab"], .${Pn}[data-bs-toggle="pill"], .${Pn}[data-bs-toggle="list"]`;class Vr extends ne{constructor(t){super(t),this._parent=this._element.closest(zR),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),O.on(this._element,$R,e=>this._keydown(e)))}static get NAME(){return kR}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),r=e?O.trigger(e,LR,{relatedTarget:t}):null;O.trigger(t,xR,{relatedTarget:e}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Pn),this._activate(U.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(qa);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),O.trigger(t,FR,{relatedTarget:e})};this._queueCallback(r,t,t.classList.contains(Hd))}_deactivate(t,e){if(!t)return;t.classList.remove(Pn),t.blur(),this._deactivate(U.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(qa);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),O.trigger(t,MR,{relatedTarget:e})};this._queueCallback(r,t,t.classList.contains(Hd))}_keydown(t){if(![jR,Bd,qR,jd,ja,qd].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!hn(s));let r;if([ja,qd].includes(t.key))r=e[t.key===ja?0:e.length-1];else{const s=[Bd,jd].includes(t.key);r=Ml(e,t.target,s,!0)}r&&(r.focus({preventScroll:!0}),Vr.getOrCreateInstance(r).show())}_getChildren(){return U.find(Wa,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const r of e)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),r=this._getOuterElement(t);t.setAttribute("aria-selected",e),r!==t&&this._setAttributeIfNotExists(r,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=U.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const r=this._getOuterElement(t);if(!r.classList.contains(HR))return;const s=(i,a)=>{const c=U.findOne(i,r);c&&c.classList.toggle(a,e)};s(Ig,Pn),s(WR,qa),r.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,r){t.hasAttribute(e)||t.setAttribute(e,r)}_elemIsActive(t){return t.classList.contains(Pn)}_getInnerElement(t){return t.matches(Wa)?t:U.findOne(Wa,t)}_getOuterElement(t){return t.closest(KR)||t}static jQueryInterface(t){return this.each(function(){const e=Vr.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}O.on(document,UR,Ag,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!hn(this)&&Vr.getOrCreateInstance(this).show()});O.on(window,BR,()=>{for(const n of U.find(QR))Vr.getOrCreateInstance(n)});Yt(Vr);const YR="toast",XR="bs.toast",En=`.${XR}`,JR=`mouseover${En}`,ZR=`mouseout${En}`,tP=`focusin${En}`,eP=`focusout${En}`,nP=`hide${En}`,rP=`hidden${En}`,sP=`show${En}`,iP=`shown${En}`,oP="fade",Wd="hide",Oi="show",ki="showing",aP={animation:"boolean",autohide:"boolean",delay:"number"},cP={animation:!0,autohide:!0,delay:5e3};class Zo extends ne{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return cP}static get DefaultType(){return aP}static get NAME(){return YR}show(){if(O.trigger(this._element,sP).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(oP);const e=()=>{this._element.classList.remove(ki),O.trigger(this._element,iP),this._maybeScheduleHide()};this._element.classList.remove(Wd),ni(this._element),this._element.classList.add(Oi,ki),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||O.trigger(this._element,nP).defaultPrevented)return;const e=()=>{this._element.classList.add(Wd),this._element.classList.remove(ki,Oi),O.trigger(this._element,rP)};this._element.classList.add(ki),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Oi),super.dispose()}isShown(){return this._element.classList.contains(Oi)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const r=t.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){O.on(this._element,JR,t=>this._onInteraction(t,!0)),O.on(this._element,ZR,t=>this._onInteraction(t,!1)),O.on(this._element,tP,t=>this._onInteraction(t,!0)),O.on(this._element,eP,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Zo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Qo(Zo);Yt(Zo);let yo=null;function lP(n){const t=document.getElementById("cards-go-here"),e=document.getElementById("cardTemplate");if(!t||!e)return;const r=Dn(Wt,"cards"),s=fo(r,_m("createdAt","desc")),i={};Tm(s,a=>{t.innerHTML="",a.forEach(c=>{const u=c.data(),d=c.id;if(u.group!==n)return;const f=e.content.cloneNode(!0),m=f.querySelector(".question-card");m.dataset.cardId=c.id;let E="Chapter 1";if(u.label){E=u.label.toString();const R=E.match(/\d+/),L=R?parseInt(R[0]):1,x=m.querySelector(".chapter-label");x.className=`chapter-label chapter-label${L}`,x.textContent=E}m.querySelector(".question-text").textContent=u.question||"";const A=m.querySelector(".answer-text");A.textContent=u.answer||"",i[d]?A.style.display="block":A.style.display="none",t.appendChild(f);const N=m.querySelector(".flip-btn");N.onclick=async()=>{const R=window.getComputedStyle(A).display==="block";if(A.style.display=R?"none":"block",i[d]=!R,!(!yo||!d))try{const L=Cr(Wt,"cards",d);await aA(L,{flipCount:cA(1),lastFlipped:new Date}),await uP(d,yo.uid)}catch(L){console.error("Error updating flip count:",L)}};const D=m.querySelector(".remove-btn");D.onclick=async()=>{if(confirm("Are you sure you want to delete this card?")){const R=Cr(Wt,"cards",d),L=D.closest(".question-card");L.classList.add("fade-out");try{await vm(R),console.log("Card deleted successfully")}catch(x){console.error("Error deleting card:",x),alert("Failed to delete card. Please try again."),L.classList.remove("fade-out")}}}})})}async function uP(n,t){try{await wl(Dn(Wt,"flipLogs"),{cardId:n,uid:t,timestamp:Im()})}catch(e){console.error("Error logging flip:",e)}}Wo(n=>{yo=n});Wo(n=>{yo=n});let Sc=[],Ee={},ve="",Nn="",bg=null;function hP(n){Wo(t=>{t&&(bg=t,console.log("User authenticated:",t.uid)),dP(),fP(n)})}function dP(){const n=document.getElementById("topicFilter"),t=document.getElementById("chapterFilter"),e=document.getElementById("clearFilter");if(!n||!t||!e){console.error("The filter control element cannot be found");return}n.addEventListener("change",r=>{ve=r.target.value||"",Nn="",console.log("Select Topic:",ve),ve?(mP(ve),t.disabled=!1):(zd(),t.disabled=!0),Ki()}),t.addEventListener("change",r=>{Nn=r.target.value||"",console.log("📖 choose Chapter:",Nn),Ki()}),e.addEventListener("click",()=>{console.log("delete"),ve="",Nn="",n.value="",zd(),t.disabled=!0,Ki()})}function fP(n){const t=Dn(Wt,"cards"),e=fo(t,_m("createdAt","desc"));Tm(e,r=>{Sc=[],Ee={},r.forEach(s=>{const i=s.data(),a=s.id;if(i.group!==n)return;const c={...i,id:a};Sc.push(c);const u=i.topic||"not classified",d=i.label||"not classified";Ee[u]||(Ee[u]=new Set),Ee[u].add(d)}),Object.keys(Ee).forEach(s=>{Ee[s]=Array.from(Ee[s])}),pP(),Ki()})}function pP(){const n=document.getElementById("topicFilter");n&&(n.innerHTML='<option value="">Select Topic</option>',Object.keys(Ee).sort().forEach(t=>{const e=document.createElement("option");e.value=t,e.textContent=t,n.appendChild(e)}))}function mP(n){const t=document.getElementById("chapterFilter");if(!t)return;const e=Ee[n]||[];t.innerHTML='<option value="">Select Chapter</option>',e.sort().forEach(r=>{const s=document.createElement("option");s.value=r,s.textContent=r,t.appendChild(s)})}function zd(){const n=document.getElementById("chapterFilter");n&&(n.innerHTML='<option value="">Select Chapter</option>')}function Ki(){const n=document.getElementById("cards-go-here");if(!n)return;let t=Sc;ve&&Nn?t=t.filter(e=>e.topic===ve&&e.label===Nn):ve&&!Nn&&(t=t.filter(e=>e.topic===ve)),gP(n,t)}function gP(n,t){const e=document.getElementById("cardTemplate");if(e){if(n.innerHTML="",t.length===0){n.innerHTML=`
      <div class="no-cards-message">
        <p>didn't find the card</p>
      </div>
    `;return}t.forEach(r=>{const s=e.content.cloneNode(!0),i=s.querySelector(".question-card");i.dataset.cardId=r.id;let a=r.label||"Chapter 1";const c=i.querySelector(".chapter-label"),u=a.match(/\d+/),d=u?parseInt(u[0]):1;c.className=`chapter-label chapter-label${d}`,c.textContent=a,i.querySelector(".question-text").textContent=r.question||"";const f=i.querySelector(".answer-text");f.textContent=r.answer||"",f.style.display="none";const m=i.querySelector(".flip-btn");m.onclick=async()=>{const A=f.style.display==="none";f.style.display=A?"block":"none";try{const N=Dn(Wt,"flipLogs");await wl(N,{uid:bg.uid,cardId:r.id,timestamp:Im()})}catch(N){console.error("Error logging flip:",N)}};const E=i.querySelector(".remove-btn");E.onclick=async A=>{if(A.stopPropagation(),confirm("Are you sure you want to delete this card?")){const N=A.target.closest(".question-card");N.classList.add("fade-out");try{const D=Cr(Wt,"cards",r.id);await vm(D),console.log("Card deleted successfully")}catch(D){console.error("Error deleting card:",D),alert("Failed to delete card. Please try again."),N.classList.remove("fade-out")}}},n.appendChild(s)})}}let ms="default";document.addEventListener("DOMContentLoaded",()=>{Wo(async n=>{if(!n)return;const t=await iA(Cr(Wt,"users",n.uid));t.exists()&&(ms=t.data().group||"default"),hP(ms),lP(ms);async function e(i){const a=fo(Dn(Wt,"cards"),od("group","==",i)),c=await ld(a),u=document.getElementById("totalCards");u&&(u.textContent=c.size)}async function r(i){const a=Dn(Wt,"flipLogs"),c=await ld(fo(a,od("uid","==",i))),u=new Date;u.setHours(0,0,0,0);let d=0;c.forEach(m=>{const E=m.data().timestamp?.toDate?.();E&&E>=u&&d++});const f=document.getElementById("studiedToday");f&&(f.textContent=d)}e(ms),r(n.uid),document.getElementById("submitCard")?.addEventListener("click",async()=>{const i=document.getElementById("questionInput").value.trim(),a=document.getElementById("answerInput").value.trim(),c=document.getElementById("labelInput").value.trim(),u=document.getElementById("topicInput").value.trim();if(!i||!a||!c||!u)return alert("All fields required!");await wl(Dn(Wt,"cards"),{question:i,answer:a,label:c,topic:u,group:ms,createdBy:n.uid}),document.getElementById("cardForm").reset()})})});export{Ho as a,Wt as b,Wo as c,Cr as d,Dn as e,_m as f,iA as g,ld as h,wl as i,yP as j,TP as k,vP as l,ME as o,fo as q,EP as s,aA as u,od as w};
