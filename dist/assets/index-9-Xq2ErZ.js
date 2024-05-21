(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oa(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Z={},bn=[],ke=()=>{},pd=()=>!1,Si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ca=e=>e.startsWith("onUpdate:"),he=Object.assign,la=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},md=Object.prototype.hasOwnProperty,W=(e,t)=>md.call(e,t),D=Array.isArray,_n=e=>Ai(e)==="[object Map]",ml=e=>Ai(e)==="[object Set]",j=e=>typeof e=="function",ue=e=>typeof e=="string",rn=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",gl=e=>(re(e)||j(e))&&j(e.then)&&j(e.catch),vl=Object.prototype.toString,Ai=e=>vl.call(e),gd=e=>Ai(e).slice(8,-1),yl=e=>Ai(e)==="[object Object]",ua=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vn=oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ci=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vd=/-(\w)/g,An=Ci(e=>e.replace(vd,(t,n)=>n?n.toUpperCase():"")),yd=/\B([A-Z])/g,sn=Ci(e=>e.replace(yd,"-$1").toLowerCase()),bl=Ci(e=>e.charAt(0).toUpperCase()+e.slice(1)),es=Ci(e=>e?`on${bl(e)}`:""),kt=(e,t)=>!Object.is(e,t),zr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_l=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},As=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fo;const wl=()=>fo||(fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fa(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ue(r)?Id(r):fa(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(ue(e)||re(e))return e}const bd=/;(?![^(]*\))/g,_d=/:([^]+)/,wd=/\/\*[^]*?\*\//g;function Id(e){const t={};return e.replace(wd,"").split(bd).forEach(n=>{if(n){const r=n.split(_d);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Cn(e){let t="";if(ue(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=Cn(e[n]);r&&(t+=r+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ed="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Td=oa(Ed);function Il(e){return!!e||e===""}const El=e=>ue(e)?e:e==null?"":D(e)||re(e)&&(e.toString===vl||!j(e.toString))?JSON.stringify(e,Tl,2):String(e),Tl=(e,t)=>t&&t.__v_isRef?Tl(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[ts(r,s)+" =>"]=i,n),{})}:ml(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ts(n))}:rn(t)?ts(t):re(t)&&!D(t)&&!yl(t)?String(t):t,ts=(e,t="")=>{var n;return rn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Sd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ad(e,t=Pe){t&&t.active&&t.effects.push(e)}function Cd(){return Pe}let Gt;class da{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ad(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Nt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Od(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Lt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Tt,n=Gt;try{return Tt=!0,Gt=this,this._runnings++,ho(this),this.fn()}finally{po(this),this._runnings--,Gt=n,Tt=t}}stop(){this.active&&(ho(this),po(this),this.onStop&&this.onStop(),this.active=!1)}}function Od(e){return e.value}function ho(e){e._trackId++,e._depsLength=0}function po(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Sl(e.deps[t],e);e.deps.length=e._depsLength}}function Sl(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Tt=!0,Cs=0;const Al=[];function Nt(){Al.push(Tt),Tt=!1}function Lt(){const e=Al.pop();Tt=e===void 0?!0:e}function ha(){Cs++}function pa(){for(Cs--;!Cs&&Os.length;)Os.shift()()}function Cl(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Sl(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Os=[];function Ol(e,t,n){ha();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Os.push(r.scheduler)))}pa()}const kl=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ks=new WeakMap,qt=Symbol(""),Rs=Symbol("");function Ee(e,t,n){if(Tt&&Gt){let r=ks.get(e);r||ks.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=kl(()=>r.delete(n))),Cl(Gt,i)}}function rt(e,t,n,r,i,s){const a=ks.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&D(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||!rn(u)&&u>=c)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":D(e)?ua(n)&&o.push(a.get("length")):(o.push(a.get(qt)),_n(e)&&o.push(a.get(Rs)));break;case"delete":D(e)||(o.push(a.get(qt)),_n(e)&&o.push(a.get(Rs)));break;case"set":_n(e)&&o.push(a.get(qt));break}ha();for(const c of o)c&&Ol(c,4);pa()}const kd=oa("__proto__,__v_isRef,__isVue"),Rl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rn)),mo=Rd();function Rd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let s=0,a=this.length;s<a;s++)Ee(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(K)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt(),ha();const r=K(this)[t].apply(this,n);return pa(),Lt(),r}}),e}function Pd(e){rn(e)||(e=String(e));const t=K(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Pl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?zd:Ml:s?Ll:Nl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=D(t);if(!i){if(a&&W(mo,n))return Reflect.get(mo,n,r);if(n==="hasOwnProperty")return Pd}const o=Reflect.get(t,n,r);return(rn(n)?Rl.has(n):kd(n))||(i||Ee(t,"get",n),s)?o:Te(o)?a&&ua(n)?o:o.value:re(o)?i?Dl(o):va(o):o}}class xl extends Pl{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const c=er(s);if(!oi(r)&&!er(r)&&(s=K(s),r=K(r)),!D(t)&&Te(s)&&!Te(r))return c?!1:(s.value=r,!0)}const a=D(t)&&ua(n)?Number(n)<t.length:W(t,n),o=Reflect.set(t,n,r,i);return t===K(i)&&(a?kt(r,s)&&rt(t,"set",n,r):rt(t,"add",n,r)),o}deleteProperty(t,n){const r=W(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&rt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!rn(n)||!Rl.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",D(t)?"length":qt),Reflect.ownKeys(t)}}class xd extends Pl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Nd=new xl,Ld=new xd,Md=new xl(!0);const ma=e=>e,Oi=e=>Reflect.getPrototypeOf(e);function Cr(e,t,n=!1,r=!1){e=e.__v_raw;const i=K(e),s=K(t);n||(kt(t,s)&&Ee(i,"get",t),Ee(i,"get",s));const{has:a}=Oi(i),o=r?ma:n?ba:tr;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function Or(e,t=!1){const n=this.__v_raw,r=K(n),i=K(e);return t||(kt(e,i)&&Ee(r,"has",e),Ee(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function kr(e,t=!1){return e=e.__v_raw,!t&&Ee(K(e),"iterate",qt),Reflect.get(e,"size",e)}function go(e){e=K(e);const t=K(this);return Oi(t).has.call(t,e)||(t.add(e),rt(t,"add",e,e)),this}function vo(e,t){t=K(t);const n=K(this),{has:r,get:i}=Oi(n);let s=r.call(n,e);s||(e=K(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?kt(t,a)&&rt(n,"set",e,t):rt(n,"add",e,t),this}function yo(e){const t=K(this),{has:n,get:r}=Oi(t);let i=n.call(t,e);i||(e=K(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&rt(t,"delete",e,void 0),s}function bo(){const e=K(this),t=e.size!==0,n=e.clear();return t&&rt(e,"clear",void 0,void 0),n}function Rr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=K(a),c=t?ma:e?ba:tr;return!e&&Ee(o,"iterate",qt),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Pr(e,t,n){return function(...r){const i=this.__v_raw,s=K(i),a=_n(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?ma:t?ba:tr;return!t&&Ee(s,"iterate",c?Rs:qt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:o?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Dd(){const e={get(s){return Cr(this,s)},get size(){return kr(this)},has:Or,add:go,set:vo,delete:yo,clear:bo,forEach:Rr(!1,!1)},t={get(s){return Cr(this,s,!1,!0)},get size(){return kr(this)},has:Or,add:go,set:vo,delete:yo,clear:bo,forEach:Rr(!1,!0)},n={get(s){return Cr(this,s,!0)},get size(){return kr(this,!0)},has(s){return Or.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Rr(!0,!1)},r={get(s){return Cr(this,s,!0,!0)},get size(){return kr(this,!0)},has(s){return Or.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Pr(s,!1,!1),n[s]=Pr(s,!0,!1),t[s]=Pr(s,!1,!0),r[s]=Pr(s,!0,!0)}),[e,n,t,r]}const[Fd,Ud,$d,jd]=Dd();function ga(e,t){const n=t?e?jd:$d:e?Ud:Fd;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(W(n,i)&&i in r?n:r,i,s)}const Hd={get:ga(!1,!1)},Bd={get:ga(!1,!0)},Vd={get:ga(!0,!1)};const Nl=new WeakMap,Ll=new WeakMap,Ml=new WeakMap,zd=new WeakMap;function Wd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kd(e){return e.__v_skip||!Object.isExtensible(e)?0:Wd(gd(e))}function va(e){return er(e)?e:ya(e,!1,Nd,Hd,Nl)}function Gd(e){return ya(e,!1,Md,Bd,Ll)}function Dl(e){return ya(e,!0,Ld,Vd,Ml)}function ya(e,t,n,r,i){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=Kd(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function zn(e){return er(e)?zn(e.__v_raw):!!(e&&e.__v_isReactive)}function er(e){return!!(e&&e.__v_isReadonly)}function oi(e){return!!(e&&e.__v_isShallow)}function Fl(e){return e?!!e.__v_raw:!1}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function qd(e){return Object.isExtensible(e)&&_l(e,"__v_skip",!0),e}const tr=e=>re(e)?va(e):e,ba=e=>re(e)?Dl(e):e;class Ul{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new da(()=>t(this._value),()=>Wr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=K(this);return(!t._cacheable||t.effect.dirty)&&kt(t._value,t._value=t.effect.run())&&Wr(t,4),$l(t),t.effect._dirtyLevel>=2&&Wr(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Yd(e,t,n=!1){let r,i;const s=j(e);return s?(r=e,i=ke):(r=e.get,i=e.set),new Ul(r,i,s||!i,n)}function $l(e){var t;Tt&&Gt&&(e=K(e),Cl(Gt,(t=e.dep)!=null?t:e.dep=kl(()=>e.dep=void 0,e instanceof Ul?e:void 0)))}function Wr(e,t=4,n){e=K(e);const r=e.dep;r&&Ol(r,t)}function Te(e){return!!(e&&e.__v_isRef===!0)}function le(e){return Jd(e,!1)}function Jd(e,t){return Te(e)?e:new Xd(e,t)}class Xd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:tr(t)}get value(){return $l(this),this._value}set value(t){const n=this.__v_isShallow||oi(t)||er(t);t=n?t:K(t),kt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tr(t),Wr(this,4))}}function mt(e){return Te(e)?e.value:e}const Qd={get:(e,t,n)=>mt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function jl(e){return zn(e)?e:new Proxy(e,Qd)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function St(e,t,n,r){try{return r?e(...r):e()}catch(i){ki(i,t,n)}}function De(e,t,n,r){if(j(e)){const i=St(e,t,n,r);return i&&gl(i)&&i.catch(s=>{ki(s,t,n)}),i}if(D(e)){const i=[];for(let s=0;s<e.length;s++)i.push(De(e[s],t,n,r));return i}}function ki(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Nt(),St(c,null,10,[e,a,o]),Lt();return}}Zd(e,n,i,r)}function Zd(e,t,n,r=!0){console.error(e)}let nr=!1,Ps=!1;const pe=[];let Ve=0;const wn=[];let gt=null,Bt=0;const Hl=Promise.resolve();let _a=null;function eh(e){const t=_a||Hl;return e?t.then(this?e.bind(this):e):t}function th(e){let t=Ve+1,n=pe.length;for(;t<n;){const r=t+n>>>1,i=pe[r],s=rr(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function wa(e){(!pe.length||!pe.includes(e,nr&&e.allowRecurse?Ve+1:Ve))&&(e.id==null?pe.push(e):pe.splice(th(e.id),0,e),Bl())}function Bl(){!nr&&!Ps&&(Ps=!0,_a=Hl.then(zl))}function nh(e){const t=pe.indexOf(e);t>Ve&&pe.splice(t,1)}function rh(e){D(e)?wn.push(...e):(!gt||!gt.includes(e,e.allowRecurse?Bt+1:Bt))&&wn.push(e),Bl()}function _o(e,t,n=nr?Ve+1:0){for(;n<pe.length;n++){const r=pe[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;pe.splice(n,1),n--,r()}}}function Vl(e){if(wn.length){const t=[...new Set(wn)].sort((n,r)=>rr(n)-rr(r));if(wn.length=0,gt){gt.push(...t);return}for(gt=t,Bt=0;Bt<gt.length;Bt++)gt[Bt]();gt=null,Bt=0}}const rr=e=>e.id==null?1/0:e.id,ih=(e,t)=>{const n=rr(e)-rr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function zl(e){Ps=!1,nr=!0,pe.sort(ih);try{for(Ve=0;Ve<pe.length;Ve++){const t=pe[Ve];t&&t.active!==!1&&St(t,null,14)}}finally{Ve=0,pe.length=0,Vl(),nr=!1,_a=null,(pe.length||wn.length)&&zl()}}function sh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:p}=r[u]||Z;p&&(i=n.map(g=>ue(g)?g.trim():g)),d&&(i=n.map(As))}let o,c=r[o=es(t)]||r[o=es(An(t))];!c&&s&&(c=r[o=es(sn(t))]),c&&De(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,De(l,e,6,i)}}function Wl(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!j(e)){const c=l=>{const u=Wl(l,t,!0);u&&(o=!0,he(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(re(e)&&r.set(e,null),null):(D(s)?s.forEach(c=>a[c]=null):he(a,s),re(e)&&r.set(e,a),a)}function Ri(e,t){return!e||!Si(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,sn(t))||W(e,t))}let Ae=null,Pi=null;function ci(e){const t=Ae;return Ae=e,Pi=e&&e.type.__scopeId||null,t}function xi(e){Pi=e}function Ni(){Pi=null}function ah(e,t=Ae,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Ro(-1);const s=ci(t);let a;try{a=e(...i)}finally{ci(s),r._d&&Ro(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ns(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:c,render:l,renderCache:u,props:d,data:p,setupState:g,ctx:x,inheritAttrs:P}=e,z=ci(e);let I,T;try{if(n.shapeFlag&4){const F=i||r,H=F;I=Be(l.call(H,F,u,d,g,p,x)),T=o}else{const F=t;I=Be(F.length>1?F(d,{attrs:o,slots:a,emit:c}):F(d,null)),T=t.props?o:oh(o)}}catch(F){Gn.length=0,ki(F,e,1),I=oe(Yt)}let O=I;if(T&&P!==!1){const F=Object.keys(T),{shapeFlag:H}=O;F.length&&H&7&&(s&&F.some(ca)&&(T=ch(T,s)),O=On(O,T,!1,!0))}return n.dirs&&(O=On(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),I=O,ci(z),I}const oh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Si(n))&&((t||(t={}))[n]=e[n]);return t},ch=(e,t)=>{const n={};for(const r in e)(!ca(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function lh(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wo(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(a[p]!==r[p]&&!Ri(l,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?wo(r,a,l):!0:!!a;return!1}function wo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ri(n,s))return!0}return!1}function uh({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const fh=Symbol.for("v-ndc"),dh=e=>e.__isSuspense;function hh(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):rh(e)}const ph=Symbol.for("v-scx"),mh=()=>Yr(ph),xr={};function Kr(e,t,n){return Kl(e,t,n)}function Kl(e,t,{immediate:n,deep:r,flush:i,once:s,onTrack:a,onTrigger:o}=Z){if(t&&s){const M=t;t=(...X)=>{M(...X),H()}}const c=be,l=M=>r===!0?M:Vt(M,r===!1?1:void 0);let u,d=!1,p=!1;if(Te(e)?(u=()=>e.value,d=oi(e)):zn(e)?(u=()=>l(e),d=!0):D(e)?(p=!0,d=e.some(M=>zn(M)||oi(M)),u=()=>e.map(M=>{if(Te(M))return M.value;if(zn(M))return l(M);if(j(M))return St(M,c,2)})):j(e)?t?u=()=>St(e,c,2):u=()=>(g&&g(),De(e,c,3,[x])):u=ke,t&&r){const M=u;u=()=>Vt(M())}let g,x=M=>{g=O.onStop=()=>{St(M,c,4),g=O.onStop=void 0}},P;if(Fi)if(x=ke,t?n&&De(t,c,3,[u(),p?[]:void 0,x]):u(),i==="sync"){const M=mh();P=M.__watcherHandles||(M.__watcherHandles=[])}else return ke;let z=p?new Array(e.length).fill(xr):xr;const I=()=>{if(!(!O.active||!O.dirty))if(t){const M=O.run();(r||d||(p?M.some((X,G)=>kt(X,z[G])):kt(M,z)))&&(g&&g(),De(t,c,3,[M,z===xr?void 0:p&&z[0]===xr?[]:z,x]),z=M)}else O.run()};I.allowRecurse=!!t;let T;i==="sync"?T=I:i==="post"?T=()=>we(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),T=()=>wa(I));const O=new da(u,ke,T),F=Cd(),H=()=>{O.stop(),F&&la(F.effects,O)};return t?n?I():z=O.run():i==="post"?we(O.run.bind(O),c&&c.suspense):O.run(),P&&P.push(H),H}function gh(e,t,n){const r=this.proxy,i=ue(e)?e.includes(".")?Gl(r,e):()=>r[e]:e.bind(r,r);let s;j(t)?s=t:(s=t.handler,n=t);const a=mr(this),o=Kl(i,s.bind(r),n);return a(),o}function Gl(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Vt(e,t=1/0,n){if(t<=0||!re(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Te(e))Vt(e.value,t,n);else if(D(e))for(let r=0;r<e.length;r++)Vt(e[r],t,n);else if(ml(e)||_n(e))e.forEach(r=>{Vt(r,t,n)});else if(yl(e))for(const r in e)Vt(e[r],t,n);return e}function Gr(e,t){if(Ae===null)return e;const n=Ui(Ae)||Ae.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,c=Z]=t[i];s&&(j(s)&&(s={mounted:s,updated:s}),s.deep&&Vt(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:c}))}return e}function Ut(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(Nt(),De(c,n,8,[e.el,o,e,t]),Lt())}}/*! #__NO_SIDE_EFFECTS__ */function vh(e,t){return j(e)?he({name:e.name},t,{setup:e}):e}const qr=e=>!!e.type.__asyncLoader,ql=e=>e.type.__isKeepAlive;function yh(e,t){Yl(e,"a",t)}function bh(e,t){Yl(e,"da",t)}function Yl(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Li(t,r,n),n){let i=n.parent;for(;i&&i.parent;)ql(i.parent.vnode)&&_h(r,t,n,i),i=i.parent}}function _h(e,t,n,r){const i=Li(t,e,r,!0);Mi(()=>{la(r[t],i)},n)}function Li(e,t,n=be,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Nt();const o=mr(n),c=De(t,n,e,a);return o(),Lt(),c});return r?i.unshift(s):i.push(s),s}}const lt=e=>(t,n=be)=>(!Fi||e==="sp")&&Li(e,(...r)=>t(...r),n),wh=lt("bm"),Ia=lt("m"),Ih=lt("bu"),Eh=lt("u"),Th=lt("bum"),Mi=lt("um"),Sh=lt("sp"),Ah=lt("rtg"),Ch=lt("rtc");function Oh(e,t=be){Li("ec",e,t)}function kh(e,t,n,r){let i;const s=n&&n[r];if(D(e)||ue(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(re(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,c=a.length;o<c;o++){const l=a[o];i[o]=t(e[l],l,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const xs=e=>e?uu(e)?Ui(e)||e.proxy:xs(e.parent):null,Wn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xs(e.parent),$root:e=>xs(e.root),$emit:e=>e.emit,$options:e=>Ea(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,wa(e.update)}),$nextTick:e=>e.n||(e.n=eh.bind(e.proxy)),$watch:e=>gh.bind(e)}),rs=(e,t)=>e!==Z&&!e.__isScriptSetup&&W(e,t),Rh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(rs(r,t))return a[t]=1,r[t];if(i!==Z&&W(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&W(l,t))return a[t]=3,s[t];if(n!==Z&&W(n,t))return a[t]=4,n[t];Ns&&(a[t]=0)}}const u=Wn[t];let d,p;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(n!==Z&&W(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return rs(i,t)?(i[t]=n,!0):r!==Z&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==Z&&W(e,a)||rs(t,a)||(o=s[0])&&W(o,a)||W(r,a)||W(Wn,a)||W(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Io(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ns=!0;function Ph(e){const t=Ea(e),n=e.proxy,r=e.ctx;Ns=!1,t.beforeCreate&&Eo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:x,activated:P,deactivated:z,beforeDestroy:I,beforeUnmount:T,destroyed:O,unmounted:F,render:H,renderTracked:M,renderTriggered:X,errorCaptured:G,serverPrefetch:B,expose:ce,inheritAttrs:Je,components:Mn,directives:cn,filters:Dn}=t;if(l&&xh(l,r,null),a)for(const ie in a){const Q=a[ie];j(Q)&&(r[ie]=Q.bind(n))}if(i){const ie=i.call(n,n);re(ie)&&(e.data=va(ie))}if(Ns=!0,s)for(const ie in s){const Q=s[ie],Dt=j(Q)?Q.bind(n,n):j(Q.get)?Q.get.bind(n,n):ke,Sr=!j(Q)&&j(Q.set)?Q.set.bind(n):ke,Ft=jt({get:Dt,set:Sr});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:$e=>Ft.value=$e})}if(o)for(const ie in o)Jl(o[ie],r,n,ie);if(c){const ie=j(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(Q=>{Uh(Q,ie[Q])})}u&&Eo(u,e,"c");function ge(ie,Q){D(Q)?Q.forEach(Dt=>ie(Dt.bind(n))):Q&&ie(Q.bind(n))}if(ge(wh,d),ge(Ia,p),ge(Ih,g),ge(Eh,x),ge(yh,P),ge(bh,z),ge(Oh,G),ge(Ch,M),ge(Ah,X),ge(Th,T),ge(Mi,F),ge(Sh,B),D(ce))if(ce.length){const ie=e.exposed||(e.exposed={});ce.forEach(Q=>{Object.defineProperty(ie,Q,{get:()=>n[Q],set:Dt=>n[Q]=Dt})})}else e.exposed||(e.exposed={});H&&e.render===ke&&(e.render=H),Je!=null&&(e.inheritAttrs=Je),Mn&&(e.components=Mn),cn&&(e.directives=cn)}function xh(e,t,n=ke){D(e)&&(e=Ls(e));for(const r in e){const i=e[r];let s;re(i)?"default"in i?s=Yr(i.from||r,i.default,!0):s=Yr(i.from||r):s=Yr(i),Te(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Eo(e,t,n){De(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Jl(e,t,n,r){const i=r.includes(".")?Gl(n,r):()=>n[r];if(ue(e)){const s=t[e];j(s)&&Kr(i,s)}else if(j(e))Kr(i,e.bind(n));else if(re(e))if(D(e))e.forEach(s=>Jl(s,t,n,r));else{const s=j(e.handler)?e.handler.bind(n):t[e.handler];j(s)&&Kr(i,s,e)}}function Ea(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>li(c,l,a,!0)),li(c,t,a)),re(t)&&s.set(t,c),c}function li(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&li(e,s,n,!0),i&&i.forEach(a=>li(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=Nh[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Nh={data:To,props:So,emits:So,methods:$n,computed:$n,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:$n,directives:$n,watch:Mh,provide:To,inject:Lh};function To(e,t){return t?e?function(){return he(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Lh(e,t){return $n(Ls(e),Ls(t))}function Ls(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function $n(e,t){return e?he(Object.create(null),e,t):t}function So(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:he(Object.create(null),Io(e),Io(t??{})):t}function Mh(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Xl(){return{app:null,config:{isNativeTag:pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dh=0;function Fh(e,t){return function(r,i=null){j(r)||(r=he({},r)),i!=null&&!re(i)&&(i=null);const s=Xl(),a=new WeakSet;let o=!1;const c=s.app={_uid:Dh++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:cp,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&j(l.install)?(a.add(l),l.install(c,...u)):j(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,d){if(!o){const p=oe(r,i);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(p,l):e(p,l,d),o=!0,c._container=l,l.__vue_app__=c,Ui(p.component)||p.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){const u=Kn;Kn=c;try{return l()}finally{Kn=u}}};return c}}let Kn=null;function Uh(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function Yr(e,t,n=!1){const r=be||Ae;if(r||Kn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Kn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}const Ql={},Zl=()=>Object.create(Ql),eu=e=>Object.getPrototypeOf(e)===Ql;function $h(e,t,n,r=!1){const i={},s=Zl();e.propsDefaults=Object.create(null),tu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:Gd(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function jh(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=K(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Ri(e.emitsOptions,p))continue;const g=t[p];if(c)if(W(s,p))g!==s[p]&&(s[p]=g,l=!0);else{const x=An(p);i[x]=Ms(c,o,x,g,e,!1)}else g!==s[p]&&(s[p]=g,l=!0)}}}else{tu(e,t,i,s)&&(l=!0);let u;for(const d in o)(!t||!W(t,d)&&((u=sn(d))===d||!W(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ms(c,o,d,void 0,e,!0)):delete i[d]);if(s!==o)for(const d in s)(!t||!W(t,d))&&(delete s[d],l=!0)}l&&rt(e.attrs,"set","")}function tu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(Vn(c))continue;const l=t[c];let u;i&&W(i,u=An(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:Ri(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=K(n),l=o||Z;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Ms(i,c,d,l[d],e,!W(l,d))}}return a}function Ms(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=W(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&j(c)){const{propsDefaults:l}=i;if(n in l)r=l[n];else{const u=mr(i);r=l[n]=c.call(null,t),u()}}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===sn(n))&&(r=!0))}return r}function nu(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!j(e)){const u=d=>{c=!0;const[p,g]=nu(d,t,!0);he(a,p),g&&o.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return re(e)&&r.set(e,bn),bn;if(D(s))for(let u=0;u<s.length;u++){const d=An(s[u]);Ao(d)&&(a[d]=Z)}else if(s)for(const u in s){const d=An(u);if(Ao(d)){const p=s[u],g=a[d]=D(p)||j(p)?{type:p}:he({},p);if(g){const x=ko(Boolean,g.type),P=ko(String,g.type);g[0]=x>-1,g[1]=P<0||x<P,(x>-1||W(g,"default"))&&o.push(d)}}}const l=[a,o];return re(e)&&r.set(e,l),l}function Ao(e){return e[0]!=="$"&&!Vn(e)}function Co(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Oo(e,t){return Co(e)===Co(t)}function ko(e,t){return D(t)?t.findIndex(n=>Oo(n,e)):j(t)&&Oo(t,e)?0:-1}const ru=e=>e[0]==="_"||e==="$stable",Ta=e=>D(e)?e.map(Be):[Be(e)],Hh=(e,t,n)=>{if(t._n)return t;const r=ah((...i)=>Ta(t(...i)),n);return r._c=!1,r},iu=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ru(i))continue;const s=e[i];if(j(s))t[i]=Hh(i,s,r);else if(s!=null){const a=Ta(s);t[i]=()=>a}}},su=(e,t)=>{const n=Ta(t);e.slots.default=()=>n},Bh=(e,t)=>{const n=e.slots=Zl();if(e.vnode.shapeFlag&32){const r=t._;r?(he(n,t),_l(n,"_",r,!0)):iu(t,n)}else t&&su(e,t)},Vh=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=Z;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(he(i,t),!n&&o===1&&delete i._):(s=!t.$stable,iu(t,i)),a=t}else t&&(su(e,t),a={default:1});if(s)for(const o in i)!ru(o)&&a[o]==null&&delete i[o]};function Ds(e,t,n,r,i=!1){if(D(e)){e.forEach((p,g)=>Ds(p,t&&(D(t)?t[g]:t),n,r,i));return}if(qr(r)&&!i)return;const s=r.shapeFlag&4?Ui(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===Z?o.refs={}:o.refs,d=o.setupState;if(l!=null&&l!==c&&(ue(l)?(u[l]=null,W(d,l)&&(d[l]=null)):Te(l)&&(l.value=null)),j(c))St(c,o,12,[a,u]);else{const p=ue(c),g=Te(c);if(p||g){const x=()=>{if(e.f){const P=p?W(d,c)?d[c]:u[c]:c.value;i?D(P)&&la(P,s):D(P)?P.includes(s)||P.push(s):p?(u[c]=[s],W(d,c)&&(d[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else p?(u[c]=a,W(d,c)&&(d[c]=a)):g&&(c.value=a,e.k&&(u[e.k]=a))};a?(x.id=-1,we(x,n)):x()}}}const we=hh;function zh(e){return Wh(e)}function Wh(e,t){const n=wl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=ke,insertStaticContent:x}=e,P=(f,h,m,v=null,y=null,w=null,S=void 0,_=null,E=!!h.dynamicChildren)=>{if(f===h)return;f&&!Un(f,h)&&(v=Ar(f),$e(f,y,w,!0),f=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:b,ref:C,shapeFlag:L}=h;switch(b){case Di:z(f,h,m,v);break;case Yt:I(f,h,m,v);break;case ss:f==null&&T(h,m,v,S);break;case Ne:Mn(f,h,m,v,y,w,S,_,E);break;default:L&1?H(f,h,m,v,y,w,S,_,E):L&6?cn(f,h,m,v,y,w,S,_,E):(L&64||L&128)&&b.process(f,h,m,v,y,w,S,_,E,ln)}C!=null&&y&&Ds(C,f&&f.ref,w,h||f,!h)},z=(f,h,m,v)=>{if(f==null)r(h.el=o(h.children),m,v);else{const y=h.el=f.el;h.children!==f.children&&l(y,h.children)}},I=(f,h,m,v)=>{f==null?r(h.el=c(h.children||""),m,v):h.el=f.el},T=(f,h,m,v)=>{[f.el,f.anchor]=x(f.children,h,m,v,f.el,f.anchor)},O=({el:f,anchor:h},m,v)=>{let y;for(;f&&f!==h;)y=p(f),r(f,m,v),f=y;r(h,m,v)},F=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),i(f),f=m;i(h)},H=(f,h,m,v,y,w,S,_,E)=>{h.type==="svg"?S="svg":h.type==="math"&&(S="mathml"),f==null?M(h,m,v,y,w,S,_,E):B(f,h,y,w,S,_,E)},M=(f,h,m,v,y,w,S,_)=>{let E,b;const{props:C,shapeFlag:L,transition:R,dirs:U}=f;if(E=f.el=a(f.type,w,C&&C.is,C),L&8?u(E,f.children):L&16&&G(f.children,E,null,v,y,is(f,w),S,_),U&&Ut(f,null,v,"created"),X(E,f,f.scopeId,S,v),C){for(const q in C)q!=="value"&&!Vn(q)&&s(E,q,null,C[q],w,f.children,v,y,Xe);"value"in C&&s(E,"value",null,C.value,w),(b=C.onVnodeBeforeMount)&&He(b,v,f)}U&&Ut(f,null,v,"beforeMount");const V=Kh(y,R);V&&R.beforeEnter(E),r(E,h,m),((b=C&&C.onVnodeMounted)||V||U)&&we(()=>{b&&He(b,v,f),V&&R.enter(E),U&&Ut(f,null,v,"mounted")},y)},X=(f,h,m,v,y)=>{if(m&&g(f,m),v)for(let w=0;w<v.length;w++)g(f,v[w]);if(y){let w=y.subTree;if(h===w){const S=y.vnode;X(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},G=(f,h,m,v,y,w,S,_,E=0)=>{for(let b=E;b<f.length;b++){const C=f[b]=_?vt(f[b]):Be(f[b]);P(null,C,h,m,v,y,w,S,_)}},B=(f,h,m,v,y,w,S)=>{const _=h.el=f.el;let{patchFlag:E,dynamicChildren:b,dirs:C}=h;E|=f.patchFlag&16;const L=f.props||Z,R=h.props||Z;let U;if(m&&$t(m,!1),(U=R.onVnodeBeforeUpdate)&&He(U,m,h,f),C&&Ut(h,f,m,"beforeUpdate"),m&&$t(m,!0),b?ce(f.dynamicChildren,b,_,m,v,is(h,y),w):S||Q(f,h,_,null,m,v,is(h,y),w,!1),E>0){if(E&16)Je(_,h,L,R,m,v,y);else if(E&2&&L.class!==R.class&&s(_,"class",null,R.class,y),E&4&&s(_,"style",L.style,R.style,y),E&8){const V=h.dynamicProps;for(let q=0;q<V.length;q++){const ne=V[q],de=L[ne],Re=R[ne];(Re!==de||ne==="value")&&s(_,ne,de,Re,y,f.children,m,v,Xe)}}E&1&&f.children!==h.children&&u(_,h.children)}else!S&&b==null&&Je(_,h,L,R,m,v,y);((U=R.onVnodeUpdated)||C)&&we(()=>{U&&He(U,m,h,f),C&&Ut(h,f,m,"updated")},v)},ce=(f,h,m,v,y,w,S)=>{for(let _=0;_<h.length;_++){const E=f[_],b=h[_],C=E.el&&(E.type===Ne||!Un(E,b)||E.shapeFlag&70)?d(E.el):m;P(E,b,C,null,v,y,w,S,!0)}},Je=(f,h,m,v,y,w,S)=>{if(m!==v){if(m!==Z)for(const _ in m)!Vn(_)&&!(_ in v)&&s(f,_,m[_],null,S,h.children,y,w,Xe);for(const _ in v){if(Vn(_))continue;const E=v[_],b=m[_];E!==b&&_!=="value"&&s(f,_,b,E,S,h.children,y,w,Xe)}"value"in v&&s(f,"value",m.value,v.value,S)}},Mn=(f,h,m,v,y,w,S,_,E)=>{const b=h.el=f?f.el:o(""),C=h.anchor=f?f.anchor:o("");let{patchFlag:L,dynamicChildren:R,slotScopeIds:U}=h;U&&(_=_?_.concat(U):U),f==null?(r(b,m,v),r(C,m,v),G(h.children||[],m,C,y,w,S,_,E)):L>0&&L&64&&R&&f.dynamicChildren?(ce(f.dynamicChildren,R,m,y,w,S,_),(h.key!=null||y&&h===y.subTree)&&au(f,h,!0)):Q(f,h,m,C,y,w,S,_,E)},cn=(f,h,m,v,y,w,S,_,E)=>{h.slotScopeIds=_,f==null?h.shapeFlag&512?y.ctx.activate(h,m,v,S,E):Dn(h,m,v,y,w,S,E):so(f,h,E)},Dn=(f,h,m,v,y,w,S)=>{const _=f.component=tp(f,v,y);if(ql(f)&&(_.ctx.renderer=ln),np(_),_.asyncDep){if(y&&y.registerDep(_,ge),!f.el){const E=_.subTree=oe(Yt);I(null,E,h,m)}}else ge(_,f,h,m,y,w,S)},so=(f,h,m)=>{const v=h.component=f.component;if(lh(f,h,m))if(v.asyncDep&&!v.asyncResolved){ie(v,h,m);return}else v.next=h,nh(v.update),v.effect.dirty=!0,v.update();else h.el=f.el,v.vnode=h},ge=(f,h,m,v,y,w,S)=>{const _=()=>{if(f.isMounted){let{next:C,bu:L,u:R,parent:U,vnode:V}=f;{const un=ou(f);if(un){C&&(C.el=V.el,ie(f,C,S)),un.asyncDep.then(()=>{f.isUnmounted||_()});return}}let q=C,ne;$t(f,!1),C?(C.el=V.el,ie(f,C,S)):C=V,L&&zr(L),(ne=C.props&&C.props.onVnodeBeforeUpdate)&&He(ne,U,C,V),$t(f,!0);const de=ns(f),Re=f.subTree;f.subTree=de,P(Re,de,d(Re.el),Ar(Re),f,y,w),C.el=de.el,q===null&&uh(f,de.el),R&&we(R,y),(ne=C.props&&C.props.onVnodeUpdated)&&we(()=>He(ne,U,C,V),y)}else{let C;const{el:L,props:R}=h,{bm:U,m:V,parent:q}=f,ne=qr(h);if($t(f,!1),U&&zr(U),!ne&&(C=R&&R.onVnodeBeforeMount)&&He(C,q,h),$t(f,!0),L&&Zi){const de=()=>{f.subTree=ns(f),Zi(L,f.subTree,f,y,null)};ne?h.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=ns(f);P(null,de,m,v,f,y,w),h.el=de.el}if(V&&we(V,y),!ne&&(C=R&&R.onVnodeMounted)){const de=h;we(()=>He(C,q,de),y)}(h.shapeFlag&256||q&&qr(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&we(f.a,y),f.isMounted=!0,h=m=v=null}},E=f.effect=new da(_,ke,()=>wa(b),f.scope),b=f.update=()=>{E.dirty&&E.run()};b.id=f.uid,$t(f,!0),b()},ie=(f,h,m)=>{h.component=f;const v=f.vnode.props;f.vnode=h,f.next=null,jh(f,h.props,v,m),Vh(f,h.children,m),Nt(),_o(f),Lt()},Q=(f,h,m,v,y,w,S,_,E=!1)=>{const b=f&&f.children,C=f?f.shapeFlag:0,L=h.children,{patchFlag:R,shapeFlag:U}=h;if(R>0){if(R&128){Sr(b,L,m,v,y,w,S,_,E);return}else if(R&256){Dt(b,L,m,v,y,w,S,_,E);return}}U&8?(C&16&&Xe(b,y,w),L!==b&&u(m,L)):C&16?U&16?Sr(b,L,m,v,y,w,S,_,E):Xe(b,y,w,!0):(C&8&&u(m,""),U&16&&G(L,m,v,y,w,S,_,E))},Dt=(f,h,m,v,y,w,S,_,E)=>{f=f||bn,h=h||bn;const b=f.length,C=h.length,L=Math.min(b,C);let R;for(R=0;R<L;R++){const U=h[R]=E?vt(h[R]):Be(h[R]);P(f[R],U,m,null,y,w,S,_,E)}b>C?Xe(f,y,w,!0,!1,L):G(h,m,v,y,w,S,_,E,L)},Sr=(f,h,m,v,y,w,S,_,E)=>{let b=0;const C=h.length;let L=f.length-1,R=C-1;for(;b<=L&&b<=R;){const U=f[b],V=h[b]=E?vt(h[b]):Be(h[b]);if(Un(U,V))P(U,V,m,null,y,w,S,_,E);else break;b++}for(;b<=L&&b<=R;){const U=f[L],V=h[R]=E?vt(h[R]):Be(h[R]);if(Un(U,V))P(U,V,m,null,y,w,S,_,E);else break;L--,R--}if(b>L){if(b<=R){const U=R+1,V=U<C?h[U].el:v;for(;b<=R;)P(null,h[b]=E?vt(h[b]):Be(h[b]),m,V,y,w,S,_,E),b++}}else if(b>R)for(;b<=L;)$e(f[b],y,w,!0),b++;else{const U=b,V=b,q=new Map;for(b=V;b<=R;b++){const Se=h[b]=E?vt(h[b]):Be(h[b]);Se.key!=null&&q.set(Se.key,b)}let ne,de=0;const Re=R-V+1;let un=!1,co=0;const Fn=new Array(Re);for(b=0;b<Re;b++)Fn[b]=0;for(b=U;b<=L;b++){const Se=f[b];if(de>=Re){$e(Se,y,w,!0);continue}let je;if(Se.key!=null)je=q.get(Se.key);else for(ne=V;ne<=R;ne++)if(Fn[ne-V]===0&&Un(Se,h[ne])){je=ne;break}je===void 0?$e(Se,y,w,!0):(Fn[je-V]=b+1,je>=co?co=je:un=!0,P(Se,h[je],m,null,y,w,S,_,E),de++)}const lo=un?Gh(Fn):bn;for(ne=lo.length-1,b=Re-1;b>=0;b--){const Se=V+b,je=h[Se],uo=Se+1<C?h[Se+1].el:v;Fn[b]===0?P(null,je,m,uo,y,w,S,_,E):un&&(ne<0||b!==lo[ne]?Ft(je,m,uo,2):ne--)}}},Ft=(f,h,m,v,y=null)=>{const{el:w,type:S,transition:_,children:E,shapeFlag:b}=f;if(b&6){Ft(f.component.subTree,h,m,v);return}if(b&128){f.suspense.move(h,m,v);return}if(b&64){S.move(f,h,m,ln);return}if(S===Ne){r(w,h,m);for(let L=0;L<E.length;L++)Ft(E[L],h,m,v);r(f.anchor,h,m);return}if(S===ss){O(f,h,m);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(w),r(w,h,m),we(()=>_.enter(w),y);else{const{leave:L,delayLeave:R,afterLeave:U}=_,V=()=>r(w,h,m),q=()=>{L(w,()=>{V(),U&&U()})};R?R(w,V,q):q()}else r(w,h,m)},$e=(f,h,m,v=!1,y=!1)=>{const{type:w,props:S,ref:_,children:E,dynamicChildren:b,shapeFlag:C,patchFlag:L,dirs:R}=f;if(_!=null&&Ds(_,null,m,f,!0),C&256){h.ctx.deactivate(f);return}const U=C&1&&R,V=!qr(f);let q;if(V&&(q=S&&S.onVnodeBeforeUnmount)&&He(q,h,f),C&6)hd(f.component,m,v);else{if(C&128){f.suspense.unmount(m,v);return}U&&Ut(f,null,h,"beforeUnmount"),C&64?f.type.remove(f,h,m,y,ln,v):b&&(w!==Ne||L>0&&L&64)?Xe(b,h,m,!1,!0):(w===Ne&&L&384||!y&&C&16)&&Xe(E,h,m),v&&ao(f)}(V&&(q=S&&S.onVnodeUnmounted)||U)&&we(()=>{q&&He(q,h,f),U&&Ut(f,null,h,"unmounted")},m)},ao=f=>{const{type:h,el:m,anchor:v,transition:y}=f;if(h===Ne){dd(m,v);return}if(h===ss){F(f);return}const w=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:_}=y,E=()=>S(m,w);_?_(f.el,w,E):E()}else w()},dd=(f,h)=>{let m;for(;f!==h;)m=p(f),i(f),f=m;i(h)},hd=(f,h,m)=>{const{bum:v,scope:y,update:w,subTree:S,um:_}=f;v&&zr(v),y.stop(),w&&(w.active=!1,$e(S,f,h,m)),_&&we(_,h),we(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Xe=(f,h,m,v=!1,y=!1,w=0)=>{for(let S=w;S<f.length;S++)$e(f[S],h,m,v,y)},Ar=f=>f.shapeFlag&6?Ar(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let Xi=!1;const oo=(f,h,m)=>{f==null?h._vnode&&$e(h._vnode,null,null,!0):P(h._vnode||null,f,h,null,null,null,m),Xi||(Xi=!0,_o(),Vl(),Xi=!1),h._vnode=f},ln={p:P,um:$e,m:Ft,r:ao,mt:Dn,mc:G,pc:Q,pbc:ce,n:Ar,o:e};let Qi,Zi;return t&&([Qi,Zi]=t(ln)),{render:oo,hydrate:Qi,createApp:Fh(oo,Qi)}}function is({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function $t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Kh(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function au(e,t,n=!1){const r=e.children,i=t.children;if(D(r)&&D(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=vt(i[s]),o.el=a.el),n||au(a,o)),o.type===Di&&(o.el=a.el)}}function Gh(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function ou(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ou(t)}const qh=e=>e.__isTeleport,Ne=Symbol.for("v-fgt"),Di=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),ss=Symbol.for("v-stc"),Gn=[];let Le=null;function Y(e=!1){Gn.push(Le=e?null:[])}function Yh(){Gn.pop(),Le=Gn[Gn.length-1]||null}let ir=1;function Ro(e){ir+=e}function cu(e){return e.dynamicChildren=ir>0?Le||bn:null,Yh(),ir>0&&Le&&Le.push(e),e}function se(e,t,n,r,i,s){return cu($(e,t,n,r,i,s,!0))}function qn(e,t,n,r,i){return cu(oe(e,t,n,r,i,!0))}function Fs(e){return e?e.__v_isVNode===!0:!1}function Un(e,t){return e.type===t.type&&e.key===t.key}const lu=({key:e})=>e??null,Jr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||Te(e)||j(e)?{i:Ae,r:e,k:t,f:!!n}:e:null);function $(e,t=null,n=null,r=0,i=null,s=e===Ne?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lu(t),ref:t&&Jr(t),scopeId:Pi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ae};return o?(Aa(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),ir>0&&!a&&Le&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Le.push(c),c}const oe=Jh;function Jh(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===fh)&&(e=Yt),Fs(e)){const o=On(e,t,!0);return n&&Aa(o,n),ir>0&&!s&&Le&&(o.shapeFlag&6?Le[Le.indexOf(e)]=o:Le.push(o)),o.patchFlag|=-2,o}if(ap(e)&&(e=e.__vccOpts),t){t=Xh(t);let{class:o,style:c}=t;o&&!ue(o)&&(t.class=Cn(o)),re(c)&&(Fl(c)&&!D(c)&&(c=he({},c)),t.style=fa(c))}const a=ue(e)?1:dh(e)?128:qh(e)?64:re(e)?4:j(e)?2:0;return $(e,t,n,r,i,a,s,!0)}function Xh(e){return e?Fl(e)||eu(e)?he({},e):e:null}function On(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:c}=e,l=t?Qh(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&lu(l),ref:t&&t.ref?n&&s?D(s)?s.concat(Jr(t)):[s,Jr(t)]:Jr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&On(e.ssContent),ssFallback:e.ssFallback&&On(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&(u.transition=c.clone(u)),u}function Sa(e=" ",t=0){return oe(Di,null,e,t)}function xe(e="",t=!1){return t?(Y(),qn(Yt,null,e)):oe(Yt,null,e)}function Be(e){return e==null||typeof e=="boolean"?oe(Yt):D(e)?oe(Ne,null,e.slice()):typeof e=="object"?vt(e):oe(Di,null,String(e))}function vt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:On(e)}function Aa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Aa(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!eu(t)?t._ctx=Ae:i===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[Sa(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Cn([t.class,r.class]));else if(i==="style")t.style=fa([t.style,r.style]);else if(Si(i)){const s=t[i],a=r[i];a&&s!==a&&!(D(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function He(e,t,n,r=null){De(e,t,7,[n,r])}const Zh=Xl();let ep=0;function tp(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Zh,s={uid:ep++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nu(r,i),emitsOptions:Wl(r,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=sh.bind(null,s),e.ce&&e.ce(s),s}let be=null,ui,Us;{const e=wl(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};ui=t("__VUE_INSTANCE_SETTERS__",n=>be=n),Us=t("__VUE_SSR_SETTERS__",n=>Fi=n)}const mr=e=>{const t=be;return ui(e),e.scope.on(),()=>{e.scope.off(),ui(t)}},Po=()=>{be&&be.scope.off(),ui(null)};function uu(e){return e.vnode.shapeFlag&4}let Fi=!1;function np(e,t=!1){t&&Us(t);const{props:n,children:r}=e.vnode,i=uu(e);$h(e,n,i,t),Bh(e,r);const s=i?rp(e,t):void 0;return t&&Us(!1),s}function rp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rh);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?sp(e):null,s=mr(e);Nt();const a=St(r,e,0,[e.props,i]);if(Lt(),s(),gl(a)){if(a.then(Po,Po),t)return a.then(o=>{xo(e,o,t)}).catch(o=>{ki(o,e,0)});e.asyncDep=a}else xo(e,a,t)}else fu(e,t)}function xo(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=jl(t)),fu(e,n)}let No;function fu(e,t,n){const r=e.type;if(!e.render){if(!t&&No&&!r.render){const i=r.template||Ea(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=he(he({isCustomElement:s,delimiters:o},a),c);r.render=No(i,l)}}e.render=r.render||ke}{const i=mr(e);Nt();try{Ph(e)}finally{Lt(),i()}}}const ip={get(e,t){return Ee(e,"get",""),e[t]}};function sp(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ip),slots:e.slots,emit:e.emit,expose:t}}function Ui(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(jl(qd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wn)return Wn[n](e)},has(t,n){return n in t||n in Wn}}))}function ap(e){return j(e)&&"__vccOpts"in e}const jt=(e,t)=>Yd(e,t,Fi);function op(e,t,n){const r=arguments.length;return r===2?re(t)&&!D(t)?Fs(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fs(n)&&(n=[n]),oe(e,t,n))}const cp="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const lp="http://www.w3.org/2000/svg",up="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,Lo=yt&&yt.createElement("template"),fp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?yt.createElementNS(lp,e):t==="mathml"?yt.createElementNS(up,e):yt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Lo.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const o=Lo.content;if(r==="svg"||r==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},dp=Symbol("_vtc");function hp(e,t,n){const r=e[dp];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Mo=Symbol("_vod"),pp=Symbol("_vsh"),mp=Symbol(""),gp=/(^|;)\s*display\s*:/;function vp(e,t,n){const r=e.style,i=ue(n);let s=!1;if(n&&!i){if(t)if(ue(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Xr(r,o,"")}else for(const a in t)n[a]==null&&Xr(r,a,"");for(const a in n)a==="display"&&(s=!0),Xr(r,a,n[a])}else if(i){if(t!==n){const a=r[mp];a&&(n+=";"+a),r.cssText=n,s=gp.test(n)}}else t&&e.removeAttribute("style");Mo in e&&(e[Mo]=s?r.display:"",e[pp]&&(r.display="none"))}const Do=/\s*!important$/;function Xr(e,t,n){if(D(n))n.forEach(r=>Xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yp(e,t);Do.test(n)?e.setProperty(sn(r),n.replace(Do,""),"important"):e[r]=n}}const Fo=["Webkit","Moz","ms"],as={};function yp(e,t){const n=as[t];if(n)return n;let r=An(t);if(r!=="filter"&&r in e)return as[t]=r;r=bl(r);for(let i=0;i<Fo.length;i++){const s=Fo[i]+r;if(s in e)return as[t]=s}return t}const Uo="http://www.w3.org/1999/xlink";function bp(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Uo,t.slice(6,t.length)):e.setAttributeNS(Uo,t,n);else{const s=Td(t);n==null||s&&!Il(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function _p(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Il(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function hn(e,t,n,r){e.addEventListener(t,n,r)}function wp(e,t,n,r){e.removeEventListener(t,n,r)}const $o=Symbol("_vei");function Ip(e,t,n,r,i=null){const s=e[$o]||(e[$o]={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=Ep(t);if(r){const l=s[t]=Ap(r,i);hn(e,o,l,c)}else a&&(wp(e,o,a,c),s[t]=void 0)}}const jo=/(?:Once|Passive|Capture)$/;function Ep(e){let t;if(jo.test(e)){t={};let r;for(;r=e.match(jo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):sn(e.slice(2)),t]}let os=0;const Tp=Promise.resolve(),Sp=()=>os||(Tp.then(()=>os=0),os=Date.now());function Ap(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(Cp(r,n.value),t,5,[r])};return n.value=e,n.attached=Sp(),n}function Cp(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Op=(e,t,n,r,i,s,a,o,c)=>{const l=i==="svg";t==="class"?hp(e,r,l):t==="style"?vp(e,n,r):Si(t)?ca(t)||Ip(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kp(e,t,r,l))?_p(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bp(e,t,r,l))};function kp(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ho(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ho(t)&&ue(n)?!1:t in e}const Bo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>zr(t,n):t};function Rp(e){e.target.composing=!0}function Vo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const cs=Symbol("_assign"),Qr={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[cs]=Bo(i);const s=r||i.props&&i.props.type==="number";hn(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=As(o)),e[cs](o)}),n&&hn(e,"change",()=>{e.value=e.value.trim()}),t||(hn(e,"compositionstart",Rp),hn(e,"compositionend",Vo),hn(e,"change",Vo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e[cs]=Bo(s),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?As(e.value):e.value,o=t??"";a!==o&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===o)||(e.value=o))}},Pp=["ctrl","shift","alt","meta"],xp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Pp.some(n=>e[`${n}Key`]&&!t.includes(n))},Np=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let a=0;a<t.length;a++){const o=xp[t[a]];if(o&&o(i,t))return}return e(i,...s)})},Lp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zo=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=sn(i.key);if(t.some(a=>a===s||Lp[a]===s))return e(i)})},Mp=he({patchProp:Op},fp);let Wo;function Dp(){return Wo||(Wo=zh(Mp))}const Fp=(...e)=>{const t=Dp().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=$p(r);if(!i)return;const s=t._component;!j(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,Up(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function Up(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $p(e){return ue(e)?document.querySelector(e):e}var Ko={};/**
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
 */const du=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},jp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,d=(s&3)<<4|o>>4;let p=(o&15)<<2|l>>6,g=l&63;c||(g=64,a||(p=64)),r.push(n[u],n[d],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(du(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):jp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||d==null)throw new Hp;const p=s<<2|o>>4;if(r.push(p),l!==64){const g=o<<4&240|l>>2;if(r.push(g),d!==64){const x=l<<6&192|d;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Hp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bp=function(e){const t=du(e);return hu.encodeByteArray(t,!0)},pu=function(e){return Bp(e).replace(/\./g,"")},mu=function(e){try{return hu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Vp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zp=()=>Vp().__FIREBASE_DEFAULTS__,Wp=()=>{if(typeof process>"u"||typeof Ko>"u")return;const e=Ko.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Kp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mu(e[1]);return t&&JSON.parse(t)},Ca=()=>{try{return zp()||Wp()||Kp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Gp=e=>{var t,n;return(n=(t=Ca())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},gu=()=>{var e;return(e=Ca())===null||e===void 0?void 0:e.config},vu=e=>{var t;return(t=Ca())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function yu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Jp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xp(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function bu(){try{return typeof indexedDB=="object"}catch{return!1}}function _u(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Qp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Zp="FirebaseError";class Ye extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Zp,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?em(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Ye(i,o,r)}}function em(e,t){return e.replace(tm,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const tm=/\{\$([^}]+)}/g;function nm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function sr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Go(s)&&Go(a)){if(!sr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Go(e){return e!==null&&typeof e=="object"}/**
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
 */function gr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function jn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Hn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function rm(e,t){const n=new im(e,t);return n.subscribe.bind(n)}class im{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ls),i.error===void 0&&(i.error=ls),i.complete===void 0&&(i.complete=ls);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ls(){}/**
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
 */const am=1e3,om=2,cm=4*60*60*1e3,lm=.5;function qo(e,t=am,n=om){const r=t*Math.pow(n,e),i=Math.round(lm*r*(Math.random()-.5)*2);return Math.min(cm,r+i)}/**
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
 */function Ue(e){return e&&e._delegate?e._delegate:e}class qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class um{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new qp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dm(t))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ht){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ht){return this.instances.has(t)}getOptions(t=Ht){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ht){return this.component?this.component.multipleInstances?t:Ht:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fm(e){return e===Ht?void 0:e}function dm(e){return e.instantiationMode==="EAGER"}/**
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
 */class hm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new um(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const pm={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},mm=J.INFO,gm={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},vm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=gm[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oa{constructor(t){this.name=t,this._logLevel=mm,this._logHandler=vm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const ym=(e,t)=>t.some(n=>e instanceof n);let Yo,Jo;function bm(){return Yo||(Yo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _m(){return Jo||(Jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wu=new WeakMap,$s=new WeakMap,Iu=new WeakMap,us=new WeakMap,ka=new WeakMap;function wm(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(At(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&wu.set(n,e)}).catch(()=>{}),ka.set(t,e),t}function Im(e){if($s.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});$s.set(e,t)}let js={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $s.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Iu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Em(e){js=e(js)}function Tm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(fs(this),t,...n);return Iu.set(r,t.sort?t.sort():[t]),At(r)}:_m().includes(e)?function(...t){return e.apply(fs(this),t),At(wu.get(this))}:function(...t){return At(e.apply(fs(this),t))}}function Sm(e){return typeof e=="function"?Tm(e):(e instanceof IDBTransaction&&Im(e),ym(e,bm())?new Proxy(e,js):e)}function At(e){if(e instanceof IDBRequest)return wm(e);if(us.has(e))return us.get(e);const t=Sm(e);return t!==e&&(us.set(e,t),ka.set(t,e)),t}const fs=e=>ka.get(e);function Eu(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=At(a);return r&&a.addEventListener("upgradeneeded",c=>{r(At(a.result),c.oldVersion,c.newVersion,At(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Am=["get","getKey","getAll","getAllKeys","count"],Cm=["put","add","delete","clear"],ds=new Map;function Xo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Cm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Am.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return ds.set(t,s),s}Em(e=>({...e,get:(t,n,r)=>Xo(t,n)||e.get(t,n,r),has:(t,n)=>!!Xo(t,n)||e.has(t,n)}));/**
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
 */class Om{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(km(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function km(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hs="@firebase/app",Qo="0.10.4";/**
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
 */const Jt=new Oa("@firebase/app"),Rm="@firebase/app-compat",Pm="@firebase/analytics-compat",xm="@firebase/analytics",Nm="@firebase/app-check-compat",Lm="@firebase/app-check",Mm="@firebase/auth",Dm="@firebase/auth-compat",Fm="@firebase/database",Um="@firebase/database-compat",$m="@firebase/functions",jm="@firebase/functions-compat",Hm="@firebase/installations",Bm="@firebase/installations-compat",Vm="@firebase/messaging",zm="@firebase/messaging-compat",Wm="@firebase/performance",Km="@firebase/performance-compat",Gm="@firebase/remote-config",qm="@firebase/remote-config-compat",Ym="@firebase/storage",Jm="@firebase/storage-compat",Xm="@firebase/firestore",Qm="@firebase/vertexai-preview",Zm="@firebase/firestore-compat",eg="firebase",tg="10.12.1";/**
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
 */const Bs="[DEFAULT]",ng={[Hs]:"fire-core",[Rm]:"fire-core-compat",[xm]:"fire-analytics",[Pm]:"fire-analytics-compat",[Lm]:"fire-app-check",[Nm]:"fire-app-check-compat",[Mm]:"fire-auth",[Dm]:"fire-auth-compat",[Fm]:"fire-rtdb",[Um]:"fire-rtdb-compat",[$m]:"fire-fn",[jm]:"fire-fn-compat",[Hm]:"fire-iid",[Bm]:"fire-iid-compat",[Vm]:"fire-fcm",[zm]:"fire-fcm-compat",[Wm]:"fire-perf",[Km]:"fire-perf-compat",[Gm]:"fire-rc",[qm]:"fire-rc-compat",[Ym]:"fire-gcs",[Jm]:"fire-gcs-compat",[Xm]:"fire-fst",[Zm]:"fire-fst-compat",[Qm]:"fire-vertex","fire-js":"fire-js",[eg]:"fire-js-all"};/**
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
 */const fi=new Map,rg=new Map,Vs=new Map;function Zo(e,t){try{e.container.addComponent(t)}catch(n){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function it(e){const t=e.name;if(Vs.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;Vs.set(t,e);for(const n of fi.values())Zo(n,e);for(const n of rg.values())Zo(n,e);return!0}function Pn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ze(e){return e.settings!==void 0}/**
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
 */const ig={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new an("app","Firebase",ig);/**
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
 */class sg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const vr=tg;function Tu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Bs,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ct.create("bad-app-name",{appName:String(i)});if(n||(n=gu()),!n)throw Ct.create("no-options");const s=fi.get(i);if(s){if(sr(n,s.options)&&sr(r,s.config))return s;throw Ct.create("duplicate-app",{appName:i})}const a=new hm(i);for(const c of Vs.values())a.addComponent(c);const o=new sg(n,r,a);return fi.set(i,o),o}function Su(e=Bs){const t=fi.get(e);if(!t&&e===Bs&&gu())return Tu();if(!t)throw Ct.create("no-app",{appName:e});return t}function We(e,t,n){var r;let i=(r=ng[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(o.join(" "));return}it(new qe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const ag="firebase-heartbeat-database",og=1,ar="firebase-heartbeat-store";let hs=null;function Au(){return hs||(hs=Eu(ag,og,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ar)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ct.create("idb-open",{originalErrorMessage:e.message})})),hs}async function cg(e){try{const n=(await Au()).transaction(ar),r=await n.objectStore(ar).get(Cu(e));return await n.done,r}catch(t){if(t instanceof Ye)Jt.warn(t.message);else{const n=Ct.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(n.message)}}}async function ec(e,t){try{const r=(await Au()).transaction(ar,"readwrite");await r.objectStore(ar).put(t,Cu(e)),await r.done}catch(n){if(n instanceof Ye)Jt.warn(n.message);else{const r=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(r.message)}}}function Cu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const lg=1024,ug=30*24*60*60*1e3;class fg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=ug}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tc(),{heartbeatsToSend:r,unsentEntries:i}=dg(this._heartbeatsCache.heartbeats),s=pu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tc(){return new Date().toISOString().substring(0,10)}function dg(e,t=lg){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),nc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bu()?_u().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function nc(e){return pu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function pg(e){it(new qe("platform-logger",t=>new Om(t),"PRIVATE")),it(new qe("heartbeat",t=>new fg(t),"PRIVATE")),We(Hs,Qo,e),We(Hs,Qo,"esm2017"),We("fire-js","")}pg("");var mg="firebase",gg="10.12.1";/**
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
 */We(mg,gg,"app");const Ou="@firebase/installations",Ra="0.6.7";/**
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
 */const ku=1e4,Ru=`w:${Ra}`,Pu="FIS_v2",vg="https://firebaseinstallations.googleapis.com/v1",yg=60*60*1e3,bg="installations",_g="Installations";/**
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
 */const wg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xt=new an(bg,_g,wg);function xu(e){return e instanceof Ye&&e.code.includes("request-failed")}/**
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
 */function Nu({projectId:e}){return`${vg}/projects/${e}/installations`}function Lu(e){return{token:e.token,requestStatus:2,expiresIn:Eg(e.expiresIn),creationTime:Date.now()}}async function Mu(e,t){const r=(await t.json()).error;return Xt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Du({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ig(e,{refreshToken:t}){const n=Du(e);return n.append("Authorization",Tg(t)),n}async function Fu(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Eg(e){return Number(e.replace("s","000"))}function Tg(e){return`${Pu} ${e}`}/**
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
 */async function Sg({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Nu(e),i=Du(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={fid:n,authVersion:Pu,appId:e.appId,sdkVersion:Ru},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Fu(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Lu(l.authToken)}}else throw await Mu("Create Installation",c)}/**
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
 */function Uu(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Ag(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Cg=/^[cdef][\w-]{21}$/,zs="";function Og(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=kg(e);return Cg.test(n)?n:zs}catch{return zs}}function kg(e){return Ag(e).substr(0,22)}/**
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
 */function $i(e){return`${e.appName}!${e.appId}`}/**
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
 */const $u=new Map;function ju(e,t){const n=$i(e);Hu(n,t),Rg(n,t)}function Hu(e,t){const n=$u.get(e);if(n)for(const r of n)r(t)}function Rg(e,t){const n=Pg();n&&n.postMessage({key:e,fid:t}),xg()}let zt=null;function Pg(){return!zt&&"BroadcastChannel"in self&&(zt=new BroadcastChannel("[Firebase] FID Change"),zt.onmessage=e=>{Hu(e.data.key,e.data.fid)}),zt}function xg(){$u.size===0&&zt&&(zt.close(),zt=null)}/**
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
 */const Ng="firebase-installations-database",Lg=1,Qt="firebase-installations-store";let ps=null;function Pa(){return ps||(ps=Eu(Ng,Lg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qt)}}})),ps}async function di(e,t){const n=$i(e),i=(await Pa()).transaction(Qt,"readwrite"),s=i.objectStore(Qt),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&ju(e,t.fid),t}async function Bu(e){const t=$i(e),r=(await Pa()).transaction(Qt,"readwrite");await r.objectStore(Qt).delete(t),await r.done}async function ji(e,t){const n=$i(e),i=(await Pa()).transaction(Qt,"readwrite"),s=i.objectStore(Qt),a=await s.get(n),o=t(a);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!a||a.fid!==o.fid)&&ju(e,o.fid),o}/**
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
 */async function xa(e){let t;const n=await ji(e.appConfig,r=>{const i=Mg(r),s=Dg(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===zs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Mg(e){const t=e||{fid:Og(),registrationStatus:0};return Vu(t)}function Dg(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xt.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Fg(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ug(e)}:{installationEntry:t}}async function Fg(e,t){try{const n=await Sg(e,t);return di(e.appConfig,n)}catch(n){throw xu(n)&&n.customData.serverCode===409?await Bu(e.appConfig):await di(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ug(e){let t=await rc(e.appConfig);for(;t.registrationStatus===1;)await Uu(100),t=await rc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xa(e);return r||n}return t}function rc(e){return ji(e,t=>{if(!t)throw Xt.create("installation-not-found");return Vu(t)})}function Vu(e){return $g(e)?{fid:e.fid,registrationStatus:0}:e}function $g(e){return e.registrationStatus===1&&e.registrationTime+ku<Date.now()}/**
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
 */async function jg({appConfig:e,heartbeatServiceProvider:t},n){const r=Hg(e,n),i=Ig(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={installation:{sdkVersion:Ru,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Fu(()=>fetch(r,o));if(c.ok){const l=await c.json();return Lu(l)}else throw await Mu("Generate Auth Token",c)}function Hg(e,{fid:t}){return`${Nu(e)}/${t}/authTokens:generate`}/**
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
 */async function Na(e,t=!1){let n;const r=await ji(e.appConfig,s=>{if(!zu(s))throw Xt.create("not-registered");const a=s.authToken;if(!t&&zg(a))return s;if(a.requestStatus===1)return n=Bg(e,t),s;{if(!navigator.onLine)throw Xt.create("app-offline");const o=Kg(s);return n=Vg(e,o),o}});return n?await n:r.authToken}async function Bg(e,t){let n=await ic(e.appConfig);for(;n.authToken.requestStatus===1;)await Uu(100),n=await ic(e.appConfig);const r=n.authToken;return r.requestStatus===0?Na(e,t):r}function ic(e){return ji(e,t=>{if(!zu(t))throw Xt.create("not-registered");const n=t.authToken;return Gg(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Vg(e,t){try{const n=await jg(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await di(e.appConfig,r),n}catch(n){if(xu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bu(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await di(e.appConfig,r)}throw n}}function zu(e){return e!==void 0&&e.registrationStatus===2}function zg(e){return e.requestStatus===2&&!Wg(e)}function Wg(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yg}function Kg(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Gg(e){return e.requestStatus===1&&e.requestTime+ku<Date.now()}/**
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
 */async function qg(e){const t=e,{installationEntry:n,registrationPromise:r}=await xa(t);return r?r.catch(console.error):Na(t).catch(console.error),n.fid}/**
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
 */async function Yg(e,t=!1){const n=e;return await Jg(n),(await Na(n,t)).token}async function Jg(e){const{registrationPromise:t}=await xa(e);t&&await t}/**
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
 */function Xg(e){if(!e||!e.options)throw ms("App Configuration");if(!e.name)throw ms("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ms(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ms(e){return Xt.create("missing-app-config-values",{valueName:e})}/**
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
 */const Wu="installations",Qg="installations-internal",Zg=e=>{const t=e.getProvider("app").getImmediate(),n=Xg(t),r=Pn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ev=e=>{const t=e.getProvider("app").getImmediate(),n=Pn(t,Wu).getImmediate();return{getId:()=>qg(n),getToken:i=>Yg(n,i)}};function tv(){it(new qe(Wu,Zg,"PUBLIC")),it(new qe(Qg,ev,"PRIVATE"))}tv();We(Ou,Ra);We(Ou,Ra,"esm2017");/**
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
 */const hi="analytics",nv="firebase_id",rv="origin",iv=60*1e3,sv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",La="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ie=new Oa("@firebase/analytics");/**
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
 */const av={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ce=new an("analytics","Analytics",av);/**
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
 */function ov(e){if(!e.startsWith(La)){const t=Ce.create("invalid-gtag-resource",{gtagURL:e});return Ie.warn(t.message),""}return e}function Ku(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function cv(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function lv(e,t){const n=cv("firebase-js-sdk-policy",{createScriptURL:ov}),r=document.createElement("script"),i=`${La}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function uv(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function fv(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await Ku(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){Ie.error(o)}e("config",i,s)}async function dv(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const o=await Ku(n);for(const c of a){const l=o.find(d=>d.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ie.error(s)}}function hv(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[o,c]=a;await dv(e,t,n,o,c)}else if(s==="config"){const[o,c]=a;await fv(e,t,n,r,o,c)}else if(s==="consent"){const[o,c]=a;e("consent",o,c)}else if(s==="get"){const[o,c,l]=a;e("get",o,c,l)}else if(s==="set"){const[o]=a;e("set",o)}else e(s,...a)}catch(o){Ie.error(o)}}return i}function pv(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=hv(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function mv(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(La)&&n.src.includes(e))return n;return null}/**
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
 */const gv=30,vv=1e3;class yv{constructor(t={},n=vv){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Gu=new yv;function bv(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function _v(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:bv(r)},s=sv.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw Ce.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function wv(e,t=Gu,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ce.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ce.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Tv;return setTimeout(async()=>{o.abort()},n!==void 0?n:iv),qu({appId:r,apiKey:i,measurementId:s},a,o,t)}async function qu(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Gu){var s;const{appId:a,measurementId:o}=e;try{await Iv(r,t)}catch(c){if(o)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await _v(e);return i.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!Ev(l)){if(i.deleteThrottleMetadata(a),o)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?qo(n,i.intervalMillis,gv):qo(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,d),Ie.debug(`Calling attemptFetch again in ${u} millis`),qu(e,d,r,i)}}function Iv(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ce.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ev(e){if(!(e instanceof Ye)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Tv{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Sv(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
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
 */async function Av(){if(bu())try{await _u()}catch(e){return Ie.warn(Ce.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ie.warn(Ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cv(e,t,n,r,i,s,a){var o;const c=wv(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ie.error(g)),t.push(c);const l=Av().then(g=>{if(g)return r.getId()}),[u,d]=await Promise.all([c,l]);mv(s)||lv(s,u.measurementId),i("js",new Date);const p=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return p[rv]="firebase",p.update=!0,d!=null&&(p[nv]=d),i("config",u.measurementId,p),u.measurementId}/**
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
 */class Ov{constructor(t){this.app=t}_delete(){return delete Yn[this.app.options.appId],Promise.resolve()}}let Yn={},sc=[];const ac={};let gs="dataLayer",kv="gtag",oc,Yu,cc=!1;function Rv(){const e=[];if(yu()&&e.push("This is a browser extension environment."),Qp()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ce.create("invalid-analytics-context",{errorInfo:t});Ie.warn(n.message)}}function Pv(e,t,n){Rv();const r=e.options.appId;if(!r)throw Ce.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ce.create("no-api-key");if(Yn[r]!=null)throw Ce.create("already-exists",{id:r});if(!cc){uv(gs);const{wrappedGtag:s,gtagCore:a}=pv(Yn,sc,ac,gs,kv);Yu=s,oc=a,cc=!0}return Yn[r]=Cv(e,sc,ac,t,oc,gs,n),new Ov(e)}function xv(e=Su()){e=Ue(e);const t=Pn(e,hi);return t.isInitialized()?t.getImmediate():Nv(e)}function Nv(e,t={}){const n=Pn(e,hi);if(n.isInitialized()){const i=n.getImmediate();if(sr(t,n.getOptions()))return i;throw Ce.create("already-initialized")}return n.initialize({options:t})}function Lv(e,t,n,r){e=Ue(e),Sv(Yu,Yn[e.app.options.appId],t,n,r).catch(i=>Ie.error(i))}const lc="@firebase/analytics",uc="0.10.4";function Mv(){it(new qe(hi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Pv(r,i,n)},"PUBLIC")),it(new qe("analytics-internal",e,"PRIVATE")),We(lc,uc),We(lc,uc,"esm2017");function e(t){try{const n=t.getProvider(hi).getImmediate();return{logEvent:(r,i,s)=>Lv(n,r,i,s)}}catch(n){throw Ce.create("interop-component-reg-failed",{reason:n})}}}Mv();function Ma(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ju(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dv=Ju,Xu=new an("auth","Firebase",Ju());/**
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
 */const pi=new Oa("@firebase/auth");function Fv(e,...t){pi.logLevel<=J.WARN&&pi.warn(`Auth (${vr}): ${e}`,...t)}function Zr(e,...t){pi.logLevel<=J.ERROR&&pi.error(`Auth (${vr}): ${e}`,...t)}/**
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
 */function Fe(e,...t){throw Da(e,...t)}function Ke(e,...t){return Da(e,...t)}function Qu(e,t,n){const r=Object.assign(Object.assign({},Dv()),{[t]:n});return new an("auth","Firebase",r).create(t,{appName:e.name})}function Ot(e){return Qu(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Da(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xu.create(e,...t)}function N(e,t,...n){if(!e)throw Da(t,...n)}function et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zr(t),new Error(t)}function st(e,t){e||et(t)}/**
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
 */function Ws(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Uv(){return fc()==="http:"||fc()==="https:"}function fc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function $v(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uv()||yu()||"connection"in navigator)?navigator.onLine:!0}function jv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class yr{constructor(t,n){this.shortDelay=t,this.longDelay=n,st(n>t,"Short delay should be less than long delay!"),this.isMobile=Yp()||Jp()}get(){return $v()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fa(e,t){st(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Zu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Hv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bv=new yr(3e4,6e4);function Mt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ut(e,t,n,r,i={}){return ef(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=gr(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Zu.fetch()(tf(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function ef(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hv),t);try{const i=new zv(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Nr(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Nr(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Nr(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qu(e,u,l);Fe(e,u)}}catch(i){if(i instanceof Ye)throw i;Fe(e,"network-request-failed",{message:String(i)})}}async function Hi(e,t,n,r,i={}){const s=await ut(e,t,n,r,i);return"mfaPendingCredential"in s&&Fe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function tf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Fa(e.config,i):`${e.config.apiScheme}://${i}`}function Vv(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Bv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(e,t,r);return i.customData._tokenResponse=n,i}function dc(e){return e!==void 0&&e.enterprise!==void 0}class Wv{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Vv(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Kv(e,t){return ut(e,"GET","/v2/recaptchaConfig",Mt(e,t))}/**
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
 */async function Gv(e,t){return ut(e,"POST","/v1/accounts:delete",t)}async function nf(e,t){return ut(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Jn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qv(e,t=!1){const n=Ue(e),r=await n.getIdToken(t),i=Ua(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jn(vs(i.auth_time)),issuedAtTime:Jn(vs(i.iat)),expirationTime:Jn(vs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vs(e){return Number(e)*1e3}function Ua(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Zr("JWT malformed, contained fewer than 3 sections"),null;try{const i=mu(n);return i?JSON.parse(i):(Zr("Failed to decode base64 JWT payload"),null)}catch(i){return Zr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hc(e){const t=Ua(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ye&&Yv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Yv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Jv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ks{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await or(e,nf(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?rf(s.providerUserInfo):[],o=Qv(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ks(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Xv(e){const t=Ue(e);await mi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Qv(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function rf(e){return e.map(t=>{var{providerId:n}=t,r=Ma(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Zv(e,t){const n=await ef(e,{},async()=>{const r=gr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=tf(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Zu.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ey(e,t){return ut(e,"POST","/v2/accounts:revokeToken",Mt(e,t))}/**
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
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){N(t.length!==0,"internal-error");const n=hc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Zv(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new In;return r&&(N(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function ht(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ma(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ks(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await or(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return qv(this,t)}reload(){return Xv(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await mi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(Ot(this.auth));const t=await this.getIdToken();return await or(this,Gv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,P=(o=n.tenantId)!==null&&o!==void 0?o:void 0,z=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:F,isAnonymous:H,providerData:M,stsTokenManager:X}=n;N(O&&X,t,"internal-error");const G=In.fromJSON(this.name,X);N(typeof O=="string",t,"internal-error"),ht(d,t.name),ht(p,t.name),N(typeof F=="boolean",t,"internal-error"),N(typeof H=="boolean",t,"internal-error"),ht(g,t.name),ht(x,t.name),ht(P,t.name),ht(z,t.name),ht(I,t.name),ht(T,t.name);const B=new tt({uid:O,auth:t,email:p,emailVerified:F,displayName:d,isAnonymous:H,photoURL:x,phoneNumber:g,tenantId:P,stsTokenManager:G,createdAt:I,lastLoginAt:T});return M&&Array.isArray(M)&&(B.providerData=M.map(ce=>Object.assign({},ce))),z&&(B._redirectEventId=z),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new In;i.updateFromServerResponse(n);const s=new tt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await mi(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rf(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new In;o.updateFromIdToken(r);const c=new tt({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ks(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
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
 */const pc=new Map;function nt(e){st(e instanceof Function,"Expected a class definition");let t=pc.get(e);return t?(st(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pc.set(e,t),t)}/**
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
 */class sf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}sf.type="NONE";const mc=sf;/**
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
 */function ei(e,t,n){return`firebase:${e}:${t}:${n}`}class En{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ei(this.userKey,i.apiKey,s),this.fullPersistenceKey=ei("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new En(nt(mc),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||nt(mc);const a=ei(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const d=tt._fromJSON(t,u);l!==s&&(o=d),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new En(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new En(s,t,r))}}/**
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
 */function gc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(af(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(uf(t))return"Blackberry";if(ff(t))return"Webos";if($a(t))return"Safari";if((t.includes("chrome/")||of(t))&&!t.includes("edge/"))return"Chrome";if(lf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function af(e=me()){return/firefox\//i.test(e)}function $a(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function of(e=me()){return/crios\//i.test(e)}function cf(e=me()){return/iemobile/i.test(e)}function lf(e=me()){return/android/i.test(e)}function uf(e=me()){return/blackberry/i.test(e)}function ff(e=me()){return/webos/i.test(e)}function Bi(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ty(e=me()){var t;return Bi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function ny(){return Xp()&&document.documentMode===10}function df(e=me()){return Bi(e)||lf(e)||ff(e)||uf(e)||/windows phone/i.test(e)||cf(e)}function ry(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hf(e,t=[]){let n;switch(e){case"Browser":n=gc(me());break;case"Worker":n=`${gc(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}/**
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
 */class iy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sy(e,t={}){return ut(e,"GET","/v2/passwordPolicy",Mt(e,t))}/**
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
 */const ay=6;class oy{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:ay,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class cy{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vc(this),this.idTokenSubscription=new vc(this),this.beforeStateQueue=new iy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await nf(this,{idToken:t}),r=await tt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ze(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await mi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=jv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ze(this.app))return Promise.reject(Ot(this));const n=t?Ue(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ze(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await sy(this),n=new oy(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new an("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ey(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&nt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Fv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function on(e){return Ue(e)}class vc{constructor(t){this.auth=t,this.observer=null,this.addObserver=rm(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ly(e){Vi=e}function pf(e){return Vi.loadJS(e)}function uy(){return Vi.recaptchaEnterpriseScript}function fy(){return Vi.gapiScript}function dy(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const hy="recaptcha-enterprise",py="NO_RECAPTCHA";class my{constructor(t){this.type=hy,this.auth=on(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{Kv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new Wv(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;dc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{a(l)}).catch(()=>{a(py)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&dc(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=uy();c.length!==0&&(c+=o),pf(c).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}async function yc(e,t,n,r=!1){const i=new my(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Gs(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yc(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await yc(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
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
 */function gy(e,t){const n=Pn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sr(s,t??{}))return i;Fe(i,"already-initialized")}return n.initialize({options:t})}function vy(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function yy(e,t,n){const r=on(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mf(t),{host:a,port:o}=by(t),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_y()}function mf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function by(e){const t=mf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:bc(a)}}}function bc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function _y(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ja{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(t){return et("not implemented")}_linkToIdToken(t,n){return et("not implemented")}_getReauthenticationResolver(t){return et("not implemented")}}async function wy(e,t){return ut(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Iy(e,t){return Hi(e,"POST","/v1/accounts:signInWithPassword",Mt(e,t))}async function Ey(e,t){return ut(e,"POST","/v1/accounts:sendOobCode",Mt(e,t))}async function Ty(e,t){return Ey(e,t)}/**
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
 */async function Sy(e,t){return Hi(e,"POST","/v1/accounts:signInWithEmailLink",Mt(e,t))}async function Ay(e,t){return Hi(e,"POST","/v1/accounts:signInWithEmailLink",Mt(e,t))}/**
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
 */class cr extends ja{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new cr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new cr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gs(t,n,"signInWithPassword",Iy);case"emailLink":return Sy(t,{email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gs(t,r,"signUpPassword",wy);case"emailLink":return Ay(t,{idToken:n,email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Tn(e,t){return Hi(e,"POST","/v1/accounts:signInWithIdp",Mt(e,t))}/**
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
 */const Cy="http://localhost";class Zt extends ja{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ma(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Zt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Tn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Tn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Tn(t,n)}buildRequest(){const t={requestUri:Cy,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=gr(n)}return t}}/**
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
 */function Oy(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ky(e){const t=jn(Hn(e)).link,n=t?jn(Hn(t)).deep_link_id:null,r=jn(Hn(e)).deep_link_id;return(r?jn(Hn(r)).link:null)||r||n||t||e}class Ha{constructor(t){var n,r,i,s,a,o;const c=jn(Hn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Oy((i=c.mode)!==null&&i!==void 0?i:null);N(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=ky(t);try{return new Ha(n)}catch{return null}}}/**
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
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(t,n){return cr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ha.parseLink(n);return N(r,"argument-error"),cr._fromEmailAndCode(t,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class br extends gf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class _t extends br{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
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
 */class wt extends br{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Zt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
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
 */class It extends br{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class Et extends br{constructor(){super("twitter.com")}static credential(t,n){return Zt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
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
 */class kn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await tt._fromIdTokenResponse(t,r,i),a=_c(r);return new kn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=_c(r);return new kn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function _c(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class gi extends Ye{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new gi(t,n,r,i)}}function vf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gi._fromErrorAndOperation(e,s,t,r):s})}async function Ry(e,t,n=!1){const r=await or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kn._forOperation(e,"link",r)}/**
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
 */async function Py(e,t,n=!1){const{auth:r}=e;if(Ze(r.app))return Promise.reject(Ot(r));const i="reauthenticate";try{const s=await or(e,vf(r,i,t,e),n);N(s.idToken,r,"internal-error");const a=Ua(s.idToken);N(a,r,"internal-error");const{sub:o}=a;return N(e.uid===o,r,"user-mismatch"),kn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),s}}/**
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
 */async function yf(e,t,n=!1){if(Ze(e.app))return Promise.reject(Ot(e));const r="signIn",i=await vf(e,r,t),s=await kn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function xy(e,t){return yf(on(e),t)}/**
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
 */function Ny(e,t,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
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
 */async function Ly(e){const t=on(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function My(e,t,n){const r=on(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&Ny(r,i,n),await Gs(r,i,"getOobCode",Ty)}function Dy(e,t,n){return Ze(e.app)?Promise.reject(Ot(e)):xy(Ue(e),xn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ly(e),r})}function Fy(e,t,n,r){return Ue(e).onIdTokenChanged(t,n,r)}function Uy(e,t,n){return Ue(e).beforeAuthStateChanged(t,n)}function bf(e,t,n,r){return Ue(e).onAuthStateChanged(t,n,r)}function $y(e){return Ue(e).signOut()}const vi="__sak";/**
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
 */class _f{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vi,"1"),this.storage.removeItem(vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jy(){const e=me();return $a(e)||Bi(e)}const Hy=1e3,By=10;class wf extends _f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jy()&&ry(),this.fallbackToPolling=df(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);ny()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,By):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Hy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}wf.type="LOCAL";const Vy=wf;/**
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
 */class If extends _f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}If.type="SESSION";const Ef=If;/**
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
 */function zy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new zi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await zy(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
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
 */function Ba(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Wy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=Ba("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ge(){return window}function Ky(e){Ge().location.href=e}/**
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
 */function Tf(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Gy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qy(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Yy(){return Tf()?self:null}/**
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
 */const Sf="firebaseLocalStorageDb",Jy=1,yi="firebaseLocalStorage",Af="fbase_key";class _r{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wi(e,t){return e.transaction([yi],t?"readwrite":"readonly").objectStore(yi)}function Xy(){const e=indexedDB.deleteDatabase(Sf);return new _r(e).toPromise()}function qs(){const e=indexedDB.open(Sf,Jy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(yi,{keyPath:Af})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(yi)?t(r):(r.close(),await Xy(),t(await qs()))})})}async function wc(e,t,n){const r=Wi(e,!0).put({[Af]:t,value:n});return new _r(r).toPromise()}async function Qy(e,t){const n=Wi(e,!1).get(t),r=await new _r(n).toPromise();return r===void 0?null:r.value}function Ic(e,t){const n=Wi(e,!0).delete(t);return new _r(n).toPromise()}const Zy=800,eb=3;class Cf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qs(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>eb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(Yy()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Gy(),!this.activeServiceWorker)return;this.sender=new Wy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||qy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await qs();return await wc(t,vi,"1"),await Ic(t,vi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Qy(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ic(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Wi(i,!1).getAll();return new _r(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cf.type="LOCAL";const tb=Cf;new yr(3e4,6e4);/**
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
 */function nb(e,t){return t?nt(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Va extends ja{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Tn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Tn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Tn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function rb(e){return yf(e.auth,new Va(e),e.bypassAuthState)}function ib(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Py(n,new Va(e),e.bypassAuthState)}async function sb(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Ry(n,new Va(e),e.bypassAuthState)}/**
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
 */class Of{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rb;case"linkViaPopup":case"linkViaRedirect":return sb;case"reauthViaPopup":case"reauthViaRedirect":return ib;default:Fe(this.auth,"internal-error")}}resolve(t){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ab=new yr(2e3,1e4);class pn extends Of{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const t=Ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ab.get())};t()}}pn.currentPopupAction=null;/**
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
 */const ob="pendingRedirect",ti=new Map;class cb extends Of{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ti.get(this.auth._key());if(!t){try{const r=await lb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ti.set(this.auth._key(),t)}return this.bypassAuthState||ti.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lb(e,t){const n=db(t),r=fb(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ub(e,t){ti.set(e._key(),t)}function fb(e){return nt(e._redirectPersistence)}function db(e){return ei(ob,e.config.apiKey,e.name)}async function hb(e,t,n=!1){if(Ze(e.app))return Promise.reject(Ot(e));const r=on(e),i=nb(r,t),a=await new cb(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const pb=10*60*1e3;class mb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!gb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!kf(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=pb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ec(t))}saveEventToCache(t){this.cachedEventUids.add(Ec(t)),this.lastProcessedEventTime=Date.now()}}function Ec(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function kf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function gb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kf(e);default:return!1}}/**
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
 */async function vb(e,t={}){return ut(e,"GET","/v1/projects",t)}/**
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
 */const yb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bb=/^https?/;async function _b(e){if(e.config.emulator)return;const{authorizedDomains:t}=await vb(e);for(const n of t)try{if(wb(n))return}catch{}Fe(e,"unauthorized-domain")}function wb(e){const t=Ws(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!bb.test(n))return!1;if(yb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ib=new yr(3e4,6e4);function Tc(){const e=Ge().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Eb(e){return new Promise((t,n)=>{var r,i,s;function a(){Tc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tc(),n(Ke(e,"network-request-failed"))},timeout:Ib.get()})}if(!((i=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ge().gapi)===null||s===void 0)&&s.load)a();else{const o=dy("iframefcb");return Ge()[o]=()=>{gapi.load?a():n(Ke(e,"network-request-failed"))},pf(`${fy()}?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw ni=null,t})}let ni=null;function Tb(e){return ni=ni||Eb(e),ni}/**
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
 */const Sb=new yr(5e3,15e3),Ab="__/auth/iframe",Cb="emulator/auth/iframe",Ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rb(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fa(t,Cb):`https://${e.config.authDomain}/${Ab}`,r={apiKey:t.apiKey,appName:e.name,v:vr},i=kb.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${gr(r).slice(1)}`}async function Pb(e){const t=await Tb(e),n=Ge().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:Rb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ob,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ke(e,"network-request-failed"),o=Ge().setTimeout(()=>{s(a)},Sb.get());function c(){Ge().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const xb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nb=500,Lb=600,Mb="_blank",Db="http://localhost";class Sc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fb(e,t,n,r=Nb,i=Lb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},xb),{width:r.toString(),height:i.toString(),top:s,left:a}),l=me().toLowerCase();n&&(o=of(l)?Mb:n),af(l)&&(t=t||Db,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,x])=>`${p}${g}=${x},`,"");if(ty(l)&&o!=="_self")return Ub(t||"",o),new Sc(null);const d=window.open(t||"",o,u);N(d,e,"popup-blocked");try{d.focus()}catch{}return new Sc(d)}function Ub(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $b="__/auth/handler",jb="emulator/auth/handler",Hb=encodeURIComponent("fac");async function Ac(e,t,n,r,i,s){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:vr,eventId:i};if(t instanceof gf){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",nm(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))a[u]=d}if(t instanceof br){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${Hb}=${encodeURIComponent(c)}`:"";return`${Bb(e)}?${gr(o).slice(1)}${l}`}function Bb({config:e}){return e.emulator?Fa(e,jb):`https://${e.authDomain}/${$b}`}/**
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
 */const ys="webStorageSupport";class Vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ef,this._completeRedirectFn=hb,this._overrideRedirectResult=ub}async _openPopup(t,n,r,i){var s;st((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Ac(t,n,r,Ws(),i);return Fb(t,a,Ba())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Ac(t,n,r,Ws(),i);return Ky(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(st(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Pb(t),r=new mb(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ys,{type:ys},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ys];a!==void 0&&n(!!a),Fe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_b(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return df()||$a()||Bi()}}const zb=Vb;var Cc="@firebase/auth",Oc="1.7.3";/**
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
 */class Wb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gb(e){it(new qe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;N(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hf(e)},l=new cy(r,i,s,c);return vy(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),it(new qe("auth-internal",t=>{const n=on(t.getProvider("auth").getImmediate());return(r=>new Wb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(Cc,Oc,Kb(e)),We(Cc,Oc,"esm2017")}/**
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
 */const qb=5*60,Yb=vu("authIdTokenMaxAge")||qb;let kc=null;const Jb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yb)return;const i=n==null?void 0:n.token;kc!==i&&(kc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xb(e=Su()){const t=Pn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=gy(e,{popupRedirectResolver:zb,persistence:[tb,Vy,Ef]}),r=vu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Jb(s.toString());Uy(n,a,()=>a(n.currentUser)),Fy(n,o=>a(o))}}const i=Gp("auth");return i&&yy(n,`http://${i}`),n}function Qb(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}ly({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gb("Browser");const Zb={apiKey:"AIzaSyDSzWq6xP2i62e49guX2w_MdpeD3F52Teo",authDomain:"aimg-to-text.firebaseapp.com",projectId:"aimg-to-text",storageBucket:"aimg-to-text.appspot.com",messagingSenderId:"378643863813",appId:"1:378643863813:web:38f655b2be01ceaeb27f6c",measurementId:"G-5GYBZB9Z5L"},Rf=Tu(Zb);xv(Rf);const Xn=Xb(Rf);/**
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
 */const Rc=["user","model","function","system"];var mn;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(mn||(mn={}));var gn;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(gn||(gn={}));var Pc;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(Pc||(Pc={}));var xc;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(xc||(xc={}));var bi;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(bi||(bi={}));var Nc;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(Nc||(Nc={}));var Lc;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(Lc||(Lc={}));/**
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
 */var Mc;(function(e){e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT"})(Mc||(Mc={}));/**
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
 */class ye extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class fn extends ye{constructor(t,n){super(t),this.response=n}}class Dc extends ye{constructor(t,n,r,i){super(t),this.status=n,this.statusText=r,this.errorDetails=i}}class ri extends ye{}/**
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
 */const e_="https://generativelanguage.googleapis.com",t_="v1beta",n_="0.11.1",r_="genai-js";var en;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(en||(en={}));class Pf{constructor(t,n,r,i,s){this.model=t,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var t,n;const r=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||t_;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||e_}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function i_(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${r_}/${n_}`),t.join(" ")}async function s_(e){const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",i_(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let n=e.requestOptions.customHeaders;if(n){if(!(n instanceof Headers))try{n=new Headers(n)}catch(r){throw new ri(`unable to convert customHeaders value ${JSON.stringify(n)} to Headers: ${r.message}`)}for(const[r,i]of n.entries()){if(r==="x-goog-api-key")throw new ri(`Cannot set reserved header name ${r}`);if(r==="x-goog-api-client")throw new ri(`Header name ${r} can only be set using the apiClient field`);t.append(r,i)}}return t}async function a_(e,t,n,r,i,s){const a=new Pf(e,t,n,r,s);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},c_(s)),{method:"POST",headers:await s_(a),body:i})}}async function wr(e,t,n,r,i,s){return o_(e,t,n,r,i,s,fetch)}async function o_(e,t,n,r,i,s,a=fetch){const o=new Pf(e,t,n,r,s);let c;try{const l=await a_(e,t,n,r,i,s);if(c=await a(l.url,l.fetchOptions),!c.ok){let u="",d;try{const p=await c.json();u=p.error.message,p.error.details&&(u+=` ${JSON.stringify(p.error.details)}`,d=p.error.details)}catch{}throw new Dc(`Error fetching from ${o.toString()}: [${c.status} ${c.statusText}] ${u}`,c.status,c.statusText,d)}}catch(l){let u=l;throw l instanceof Dc||l instanceof ri||(u=new ye(`Error fetching from ${o.toString()}: ${l.message}`),u.stack=l.stack),u}return c}function c_(e){const t={};if((e==null?void 0:e.timeout)>=0){const n=new AbortController,r=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=r}return t}/**
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
 */function za(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),ii(e.candidates[0]))throw new fn(`${bt(e)}`,e);return l_(e)}else if(e.promptFeedback)throw new fn(`Text not available. ${bt(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ii(e.candidates[0]))throw new fn(`${bt(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Fc(e)[0]}else if(e.promptFeedback)throw new fn(`Function call not available. ${bt(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ii(e.candidates[0]))throw new fn(`${bt(e)}`,e);return Fc(e)}else if(e.promptFeedback)throw new fn(`Function call not available. ${bt(e)}`,e)},e}function l_(e){var t,n,r,i;const s=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(i=(r=e.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)a.text&&s.push(a.text);return s.length>0?s.join(""):""}function Fc(e){var t,n,r,i;const s=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(i=(r=e.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)a.functionCall&&s.push(a.functionCall);if(s.length>0)return s}const u_=[bi.RECITATION,bi.SAFETY];function ii(e){return!!e.finishReason&&u_.includes(e.finishReason)}function bt(e){var t,n,r;let i="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)i+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(i+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((r=e.candidates)===null||r===void 0)&&r[0]){const s=e.candidates[0];ii(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function lr(e){return this instanceof lr?(this.v=e,this):new lr(e)}function f_(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,s=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(p){r[p]&&(i[p]=function(g){return new Promise(function(x,P){s.push([p,g,x,P])>1||o(p,g)})})}function o(p,g){try{c(r[p](g))}catch(x){d(s[0][3],x)}}function c(p){p.value instanceof lr?Promise.resolve(p.value.v).then(l,u):d(s[0][2],p)}function l(p){o("next",p)}function u(p){o("throw",p)}function d(p,g){p(g),s.shift(),s.length&&o(s[0][0],s[0][1])}}/**
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
 */const Uc=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function d_(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=m_(t),[r,i]=n.tee();return{stream:p_(r),response:h_(i)}}async function h_(e){const t=[],n=e.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return za(g_(t));t.push(i)}}function p_(e){return f_(this,arguments,function*(){const n=e.getReader();for(;;){const{value:r,done:i}=yield lr(n.read());if(i)break;yield yield lr(za(r))}})}function m_(e){const t=e.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return t.read().then(({value:a,done:o})=>{if(o){if(i.trim()){r.error(new ye("Failed to parse stream"));return}r.close();return}i+=a;let c=i.match(Uc),l;for(;c;){try{l=JSON.parse(c[1])}catch{r.error(new ye(`Error parsing JSON response: "${c[1]}"`));return}r.enqueue(l),i=i.substring(c[0].length),c=i.match(Uc)}return s()})}}})}function g_(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const r of e)if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const a={};for(const o of i.content.parts)o.text&&(a.text=o.text),o.functionCall&&(a.functionCall=o.functionCall),Object.keys(a).length===0&&(a.text=""),n.candidates[s].content.parts.push(a)}}return n}/**
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
 */async function xf(e,t,n,r){const i=await wr(t,en.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),r);return d_(i)}async function Nf(e,t,n,r){const s=await(await wr(t,en.GENERATE_CONTENT,e,!1,JSON.stringify(n),r)).json();return{response:za(s)}}/**
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
 */function Lf(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function _i(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return v_(t)}function v_(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of e)"functionResponse"in s?(n.parts.push(s),i=!0):(t.parts.push(s),r=!0);if(r&&i)throw new ye("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new ye("No content is provided for sending chat message.");return r?t:n}function bs(e){let t;return e.contents?t=e:t={contents:[_i(e)]},e.systemInstruction&&(t.systemInstruction=Lf(e.systemInstruction)),t}function y_(e){return typeof e=="string"||Array.isArray(e)?{content:_i(e)}:e}/**
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
 */const $c=["text","inlineData","functionCall","functionResponse"],b_={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"],system:["text"]},jc={user:["model"],function:["model"],model:["user","function"],system:[]};function __(e){let t;for(const n of e){const{role:r,parts:i}=n;if(!t&&r!=="user")throw new ye(`First content should be with role 'user', got ${r}`);if(!Rc.includes(r))throw new ye(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Rc)}`);if(!Array.isArray(i))throw new ye("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new ye("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0};for(const o of i)for(const c of $c)c in o&&(s[c]+=1);const a=b_[r];for(const o of $c)if(!a.includes(o)&&s[o]>0)throw new ye(`Content with role '${r}' can't contain '${o}' part`);if(t&&!jc[r].includes(t.role))throw new ye(`Content with role '${r}' can't follow '${t.role}'. Valid previous roles: ${JSON.stringify(jc)}`);t=n}}/**
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
 */const Hc="SILENT_ERROR";class w_{constructor(t,n,r,i){this.model=n,this.params=r,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,r!=null&&r.history&&(__(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){var n,r,i,s,a;await this._sendPromise;const o=_i(t),c={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(s=this.params)===null||s===void 0?void 0:s.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,contents:[...this._history,o]};let l;return this._sendPromise=this._sendPromise.then(()=>Nf(this._apiKey,this.model,c,this.requestOptions)).then(u=>{var d;if(u.response.candidates&&u.response.candidates.length>0){this._history.push(o);const p=Object.assign({parts:[],role:"model"},(d=u.response.candidates)===null||d===void 0?void 0:d[0].content);this._history.push(p)}else{const p=bt(u.response);p&&console.warn(`sendMessage() was unsuccessful. ${p}. Inspect response object for details.`)}l=u}),await this._sendPromise,l}async sendMessageStream(t){var n,r,i,s,a;await this._sendPromise;const o=_i(t),c={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(s=this.params)===null||s===void 0?void 0:s.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,contents:[...this._history,o]},l=xf(this._apiKey,this.model,c,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>l).catch(u=>{throw new Error(Hc)}).then(u=>u.response).then(u=>{if(u.candidates&&u.candidates.length>0){this._history.push(o);const d=Object.assign({},u.candidates[0].content);d.role||(d.role="model"),this._history.push(d)}else{const d=bt(u);d&&console.warn(`sendMessageStream() was unsuccessful. ${d}. Inspect response object for details.`)}}).catch(u=>{u.message!==Hc&&console.error(u)}),l}}/**
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
 */async function I_(e,t,n,r){return(await wr(t,en.COUNT_TOKENS,e,!1,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),r)).json()}/**
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
 */async function E_(e,t,n,r){return(await wr(t,en.EMBED_CONTENT,e,!1,JSON.stringify(n),r)).json()}async function T_(e,t,n,r){const i=n.requests.map(a=>Object.assign(Object.assign({},a),{model:t}));return(await wr(t,en.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),r)).json()}/**
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
 */class S_{constructor(t,n,r){this.apiKey=t,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Lf(n.systemInstruction),this.requestOptions=r||{}}async generateContent(t){const n=bs(t);return Nf(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},n),this.requestOptions)}async generateContentStream(t){const n=bs(t);return xf(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},n),this.requestOptions)}startChat(t){return new w_(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},t),this.requestOptions)}async countTokens(t){const n=bs(t);return I_(this.apiKey,this.model,n,this.requestOptions)}async embedContent(t){const n=y_(t);return E_(this.apiKey,this.model,n,this.requestOptions)}async batchEmbedContents(t){return T_(this.apiKey,this.model,t,this.requestOptions)}}/**
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
 */class A_{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new ye("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new S_(this.apiKey,t,n)}}const Ki=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},C_=e=>(xi("data-v-e24614bd"),e=e(),Ni(),e),O_={key:0,class:"loading-overlay"},k_=C_(()=>$("div",{class:"loader"},null,-1)),R_=[k_],P_={__name:"Loading",setup(e,{expose:t}){const n=le(!1);return t({showLoading:()=>{n.value=!0},hideLoading:()=>{n.value=!1}}),(s,a)=>n.value?(Y(),se("div",O_,R_)):xe("",!0)}},x_=Ki(P_,[["__scopeId","data-v-e24614bd"]]),N_={},L_=e=>(xi("data-v-38387e30"),e=e(),Ni(),e),M_={class:"loading-overlay"},D_=L_(()=>$("div",{class:"loader"},null,-1)),F_=[D_];function U_(e,t){return Y(),se("div",M_,F_)}const $_=Ki(N_,[["render",U_],["__scopeId","data-v-38387e30"]]),Mf="/assets/icon-IVEolpHv.png",Nn=e=>(xi("data-v-96128160"),e=e(),Ni(),e),j_={key:0,class:"overlay fadeIn"},H_={class:"form-container"},B_=Nn(()=>$("img",{src:Mf,class:"logo"},null,-1)),V_=Nn(()=>$("h2",null,[$("span",{class:"ai-color"},"AI"),Sa("mg to txt")],-1)),z_={key:0,class:"fadeIn"},W_={class:"form-group"},K_=Nn(()=>$("label",{for:"email"},"Email:",-1)),G_={class:"form-group"},q_=Nn(()=>$("label",{for:"password"},"Senha:",-1)),Y_={key:1,class:"fadeIn"},J_=Nn(()=>$("p",{class:"text-info-forgot"},"Digite seu email para receber instruções de recuperação da sua senha.",-1)),X_={class:"form-group"},Q_=Nn(()=>$("label",{for:"email"},"Email:",-1)),Z_={__name:"UserLogin",setup(e){const t=le(!0),n=le(""),r=le(""),i=le({}),s=le(!0),a=le(null),o=()=>{t.value=!1},c=()=>{Dy(Xn,n.value,r.value).then(u=>{o()}).catch(u=>{i.value={message:`Oops... Algo deu errado!
Verifique se os dados estão corretos.`,type:"error"},console.log(u.message)})},l=()=>{My(Xn,n.value).then(()=>{i.value={message:"E-mail enviado! Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.",type:"success"},s.value=!0}).catch(u=>{i.value={message:"Erro ao enviar e-mail de recuperação.",type:"error"},console.log(u.message)})};return Ia(()=>{const u=bf(Xn,d=>{a.value=d||null});Mi(()=>{u()})}),(u,d)=>a.value==null?(Y(),se("div",j_,[$("div",H_,[B_,V_,s.value?(Y(),se("div",z_,[$("div",W_,[K_,Gr($("input",{type:"email",id:"email","onUpdate:modelValue":d[0]||(d[0]=p=>n.value=p),required:"",placeholder:"Digite seu email"},null,512),[[Qr,n.value]])]),$("div",G_,[q_,Gr($("input",{type:"password",id:"password","onUpdate:modelValue":d[1]||(d[1]=p=>r.value=p),required:"",placeholder:"Digite sua senha"},null,512),[[Qr,r.value]])]),$("button",{class:"form-button",onClick:c,onKeydown:zo(c,["enter"])},"Login",32),$("button",{class:"forgot-btn",onClick:d[2]||(d[2]=p=>{s.value=!1,i.value={}})},"Esqueci minha senha")])):(Y(),se("div",Y_,[J_,$("div",X_,[Q_,Gr($("input",{type:"email",id:"email","onUpdate:modelValue":d[3]||(d[3]=p=>n.value=p),required:"",placeholder:"Digite seu email"},null,512),[[Qr,n.value]])]),$("button",{class:"form-button",onClick:l,onKeydown:zo(l,["enter"])},"Recuperar",32),$("button",{class:"forgot-btn",onClick:d[4]||(d[4]=p=>{s.value=!0,i.value={}})},"Voltar para o login")])),$("p",{class:Cn(i.value.type=="success"?"success-message":"error-message")},El(i.value.message),3)])])):xe("",!0)}},ew=Ki(Z_,[["__scopeId","data-v-96128160"]]),Wa=e=>(xi("data-v-200376d2"),e=e(),Ni(),e),tw={key:0,class:"overlay fadeIn"},nw=Wa(()=>$("img",{src:Mf,class:"logo"},null,-1)),rw=Wa(()=>$("h3",null,"Tem certeza que deseja sair?",-1)),iw=Wa(()=>$("p",{class:"text-note"},"Fique tranquilo. Você pode voltar a qualquer momento e continuar fazendo suas conversões.",-1)),sw={__name:"LogoutConfirm",setup(e,{expose:t}){const n=le(!1);le(null);const r=()=>{n.value=!1},i=()=>{$y(Xn).then(()=>{n.value=!1}).catch(s=>{console.log(s)})};return t({showOverlay:n}),(s,a)=>n.value?(Y(),se("div",tw,[$("div",{class:"form-container"},[nw,rw,iw,$("div",{class:"btn-container"},[$("button",{class:"form-button-secondary",onClick:r},"Cancelar"),$("button",{class:"form-button",onClick:i},"sair")])])])):xe("",!0)}},aw=Ki(sw,[["__scopeId","data-v-200376d2"]]);function Bc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bc(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wi(e)}function ow(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cw(e,t,n){return t&&Vc(e.prototype,t),n&&Vc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ka(e,t){return uw(e)||dw(e,t)||Df(e,t)||pw()}function Ir(e){return lw(e)||fw(e)||Df(e)||hw()}function lw(e){if(Array.isArray(e))return Ys(e)}function uw(e){if(Array.isArray(e))return e}function fw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function Df(e,t){if(e){if(typeof e=="string")return Ys(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ys(e,t)}}function Ys(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zc=function(){},Ga={},Ff={},Uf=null,$f={mark:zc,measure:zc};try{typeof window<"u"&&(Ga=window),typeof document<"u"&&(Ff=document),typeof MutationObserver<"u"&&(Uf=MutationObserver),typeof performance<"u"&&($f=performance)}catch{}var mw=Ga.navigator||{},Wc=mw.userAgent,Kc=Wc===void 0?"":Wc,Rt=Ga,te=Ff,Gc=Uf,Lr=$f;Rt.document;var ft=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",jf=~Kc.indexOf("MSIE")||~Kc.indexOf("Trident/"),Mr,Dr,Fr,Ur,$r,at="___FONT_AWESOME___",Js=16,Hf="fa",Bf="svg-inline--fa",tn="data-fa-i2svg",Xs="data-fa-pseudo-element",gw="data-fa-pseudo-element-pending",qa="data-prefix",Ya="data-icon",qc="fontawesome-i2svg",vw="async",yw=["HTML","HEAD","STYLE","SCRIPT"],Vf=function(){try{return!0}catch{return!1}}(),ee="classic",ae="sharp",Ja=[ee,ae];function Er(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var ur=Er((Mr={},fe(Mr,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),fe(Mr,ae,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Mr)),fr=Er((Dr={},fe(Dr,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Dr,ae,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Dr)),dr=Er((Fr={},fe(Fr,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Fr,ae,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Fr)),bw=Er((Ur={},fe(Ur,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Ur,ae,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ur)),_w=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,zf="fa-layers-text",ww=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Iw=Er(($r={},fe($r,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe($r,ae,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),$r)),Wf=[1,2,3,4,5,6,7,8,9,10],Ew=Wf.concat([11,12,13,14,15,16,17,18,19,20]),Tw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hr=new Set;Object.keys(fr[ee]).map(hr.add.bind(hr));Object.keys(fr[ae]).map(hr.add.bind(hr));var Sw=[].concat(Ja,Ir(hr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wt.GROUP,Wt.SWAP_OPACITY,Wt.PRIMARY,Wt.SECONDARY]).concat(Wf.map(function(e){return"".concat(e,"x")})).concat(Ew.map(function(e){return"w-".concat(e)})),Qn=Rt.FontAwesomeConfig||{};function Aw(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Cw(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var Ow=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ow.forEach(function(e){var t=Ka(e,2),n=t[0],r=t[1],i=Cw(Aw(n));i!=null&&(Qn[r]=i)})}var Kf={styleDefault:"solid",familyDefault:"classic",cssPrefix:Hf,replacementClass:Bf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qn.familyPrefix&&(Qn.cssPrefix=Qn.familyPrefix);var Rn=A(A({},Kf),Qn);Rn.autoReplaceSvg||(Rn.observeMutations=!1);var k={};Object.keys(Kf).forEach(function(e){Object.defineProperty(k,e,{enumerable:!0,set:function(n){Rn[e]=n,Zn.forEach(function(r){return r(k)})},get:function(){return Rn[e]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(t){Rn.cssPrefix=t,Zn.forEach(function(n){return n(k)})},get:function(){return Rn.cssPrefix}});Rt.FontAwesomeConfig=k;var Zn=[];function kw(e){return Zn.push(e),function(){Zn.splice(Zn.indexOf(e),1)}}var pt=Js,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rw(e){if(!(!e||!ft)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return te.head.insertBefore(t,r),e}}var Pw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pr(){for(var e=12,t="";e-- >0;)t+=Pw[Math.random()*62|0];return t}function Ln(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xa(e){return e.classList?Ln(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Gf(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xw(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Gf(e[n]),'" ')},"").trim()}function Gi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qa(e){return e.size!==ze.size||e.x!==ze.x||e.y!==ze.y||e.rotate!==ze.rotate||e.flipX||e.flipY}function Nw(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function Lw(e){var t=e.transform,n=e.width,r=n===void 0?Js:n,i=e.height,s=i===void 0?Js:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&jf?c+="translate(".concat(t.x/pt-r/2,"em, ").concat(t.y/pt-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/pt,"em), calc(-50% + ").concat(t.y/pt,"em)) "):c+="translate(".concat(t.x/pt,"em, ").concat(t.y/pt,"em) "),c+="scale(".concat(t.size/pt*(t.flipX?-1:1),", ").concat(t.size/pt*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Mw=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qf(){var e=Hf,t=Bf,n=k.cssPrefix,r=k.replacementClass,i=Mw;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Yc=!1;function _s(){k.autoAddCss&&!Yc&&(Rw(qf()),Yc=!0)}var Dw={mixout:function(){return{dom:{css:qf,insertCss:_s}}},hooks:function(){return{beforeDOMElementCreation:function(){_s()},beforeI2svg:function(){_s()}}}},ot=Rt||{};ot[at]||(ot[at]={});ot[at].styles||(ot[at].styles={});ot[at].hooks||(ot[at].hooks={});ot[at].shims||(ot[at].shims=[]);var Me=ot[at],Yf=[],Fw=function e(){te.removeEventListener("DOMContentLoaded",e),Ii=1,Yf.map(function(t){return t()})},Ii=!1;ft&&(Ii=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),Ii||te.addEventListener("DOMContentLoaded",Fw));function Uw(e){ft&&(Ii?setTimeout(e,0):Yf.push(e))}function Tr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Gf(e):"<".concat(t," ").concat(xw(r),">").concat(s.map(Tr).join(""),"</").concat(t,">")}function Jc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $w=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},ws=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?$w(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function jw(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Qs(e){var t=jw(e);return t.length===1?t[0].toString(16):null}function Hw(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Xc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Zs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Xc(t);typeof Me.hooks.addPack=="function"&&!i?Me.hooks.addPack(e,Xc(t)):Me.styles[e]=A(A({},Me.styles[e]||{}),s),e==="fas"&&Zs("fa",t)}var jr,Hr,Br,vn=Me.styles,Bw=Me.shims,Vw=(jr={},fe(jr,ee,Object.values(dr[ee])),fe(jr,ae,Object.values(dr[ae])),jr),Za=null,Jf={},Xf={},Qf={},Zf={},ed={},zw=(Hr={},fe(Hr,ee,Object.keys(ur[ee])),fe(Hr,ae,Object.keys(ur[ae])),Hr);function Ww(e){return~Sw.indexOf(e)}function Kw(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Ww(i)?i:null}var td=function(){var t=function(s){return ws(vn,function(a,o,c){return a[c]=ws(o,s,{}),a},{})};Jf=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),Xf=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),ed=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in vn||k.autoFetchSvg,r=ws(Bw,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Qf=r.names,Zf=r.unicodes,Za=qi(k.styleDefault,{family:k.familyDefault})};kw(function(e){Za=qi(e.styleDefault,{family:k.familyDefault})});td();function eo(e,t){return(Jf[e]||{})[t]}function Gw(e,t){return(Xf[e]||{})[t]}function Kt(e,t){return(ed[e]||{})[t]}function nd(e){return Qf[e]||{prefix:null,iconName:null}}function qw(e){var t=Zf[e],n=eo("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pt(){return Za}var to=function(){return{prefix:null,iconName:null,rest:[]}};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,i=ur[r][e],s=fr[r][e]||fr[r][i],a=e in Me.styles?e:null;return s||a||null}var Qc=(Br={},fe(Br,ee,Object.keys(dr[ee])),fe(Br,ae,Object.keys(dr[ae])),Br);function Yi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},fe(t,ee,"".concat(k.cssPrefix,"-").concat(ee)),fe(t,ae,"".concat(k.cssPrefix,"-").concat(ae)),t),a=null,o=ee;(e.includes(s[ee])||e.some(function(l){return Qc[ee].includes(l)}))&&(o=ee),(e.includes(s[ae])||e.some(function(l){return Qc[ae].includes(l)}))&&(o=ae);var c=e.reduce(function(l,u){var d=Kw(k.cssPrefix,u);if(vn[u]?(u=Vw[o].includes(u)?bw[o][u]:u,a=u,l.prefix=u):zw[o].indexOf(u)>-1?(a=u,l.prefix=qi(u,{family:o})):d?l.iconName=d:u!==k.replacementClass&&u!==s[ee]&&u!==s[ae]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var p=a==="fa"?nd(l.iconName):{},g=Kt(l.prefix,l.iconName);p.prefix&&(a=null),l.iconName=p.iconName||g||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!vn.far&&vn.fas&&!k.autoFetchSvg&&(l.prefix="fas")}return l},to());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===ae&&(vn.fass||k.autoFetchSvg)&&(c.prefix="fass",c.iconName=Kt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Pt()||"fas"),c}var Yw=function(){function e(){ow(this,e),this.definitions={}}return cw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=A(A({},n.definitions[o]||{}),a[o]),Zs(o,a[o]);var c=dr[ee][o];c&&Zs(c,a[o]),td()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[o][d]=l)}),n[o][c]=l}),n}}]),e}(),Zc=[],yn={},Sn={},Jw=Object.keys(Sn);function Xw(e,t){var n=t.mixoutsTo;return Zc=e,yn={},Object.keys(Sn).forEach(function(r){Jw.indexOf(r)===-1&&delete Sn[r]}),Zc.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),wi(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){yn[a]||(yn[a]=[]),yn[a].push(s[a])})}r.provides&&r.provides(Sn)}),n}function ea(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=yn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=yn[e]||[];i.forEach(function(s){s.apply(null,n)})}function ct(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Sn[e]?Sn[e].apply(null,t):void 0}function ta(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Pt();if(t)return t=Kt(n,t)||t,Jc(rd.definitions,n,t)||Jc(Me.styles,n,t)}var rd=new Yw,Qw=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,nn("noAuto")},Zw={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ft?(nn("beforeI2svg",t),ct("pseudoElements2svg",t),ct("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Uw(function(){t0({autoReplaceSvgRoot:n}),nn("watch",t)})}},e0={icon:function(t){if(t===null)return null;if(wi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=qi(t[0]);return{prefix:r,iconName:Kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(k.cssPrefix,"-"))>-1||t.match(_w))){var i=Yi(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Pt(),iconName:Kt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Pt();return{prefix:s,iconName:Kt(s,t)||t}}}},Oe={noAuto:Qw,config:k,dom:Zw,parse:e0,library:rd,findIconDefinition:ta,toHtml:Tr},t0=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Me.styles).length>0||k.autoFetchSvg)&&ft&&k.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Ji(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Tr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ft){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function n0(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(Qa(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=Gi(A(A({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function r0(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(k.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:a}),children:r}]}]}function no(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,x=r.found?r:n,P=x.width,z=x.height,I=i==="fak",T=[k.replacementClass,s?"".concat(k.cssPrefix,"-").concat(s):""].filter(function(B){return d.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(d.classes).join(" "),O={children:[],attributes:A(A({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:T,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(z)})},F=I&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/z*16*.0625,"em")}:{};g&&(O.attributes[tn]=""),c&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||pr())},children:[c]}),delete O.attributes.title);var H=A(A({},O),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:A(A({},F),d.styles)}),M=r.found&&n.found?ct("generateAbstractMask",H)||{children:[],attributes:{}}:ct("generateAbstractIcon",H)||{children:[],attributes:{}},X=M.children,G=M.attributes;return H.children=X,H.attributes=G,o?r0(H):n0(H)}function el(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=A(A(A({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[tn]="");var u=A({},a.styles);Qa(i)&&(u.transform=Lw({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=Gi(u);d.length>0&&(l.style=d);var p=[];return p.push({tag:"span",attributes:l,children:[t]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function i0(e){var t=e.content,n=e.title,r=e.extra,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Gi(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Is=Me.styles;function na(e){var t=e[0],n=e[1],r=e.slice(4),i=Ka(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(Wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(Wt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(Wt.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var s0={found:!1,width:512,height:512};function a0(e,t){!Vf&&!k.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ra(e,t){var n=t;return t==="fa"&&k.styleDefault!==null&&(t=Pt()),new Promise(function(r,i){if(ct("missingIconAbstract"),n==="fa"){var s=nd(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Is[t]&&Is[t][e]){var a=Is[t][e];return r(na(a))}a0(e,t),r(A(A({},s0),{},{icon:k.showMissingIcons&&e?ct("missingIconAbstract")||{}:{}}))})}var tl=function(){},ia=k.measurePerformance&&Lr&&Lr.mark&&Lr.measure?Lr:{mark:tl,measure:tl},Bn='FA "6.5.2"',o0=function(t){return ia.mark("".concat(Bn," ").concat(t," begins")),function(){return id(t)}},id=function(t){ia.mark("".concat(Bn," ").concat(t," ends")),ia.measure("".concat(Bn," ").concat(t),"".concat(Bn," ").concat(t," begins"),"".concat(Bn," ").concat(t," ends"))},ro={begin:o0,end:id},si=function(){};function nl(e){var t=e.getAttribute?e.getAttribute(tn):null;return typeof t=="string"}function c0(e){var t=e.getAttribute?e.getAttribute(qa):null,n=e.getAttribute?e.getAttribute(Ya):null;return t&&n}function l0(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(k.replacementClass)}function u0(){if(k.autoReplaceSvg===!0)return ai.replace;var e=ai[k.autoReplaceSvg];return e||ai.replace}function f0(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function d0(e){return te.createElement(e)}function sd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?f0:d0:n;if(typeof e=="string")return te.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(sd(a,{ceFn:r}))}),i}function h0(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ai={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(sd(i),n)}),n.getAttribute(tn)===null&&k.keepOriginalSource){var r=te.createComment(h0(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Xa(n).indexOf(k.replacementClass))return ai.replace(t);var i=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===k.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Tr(o)}).join(`
`);n.setAttribute(tn,""),n.innerHTML=a}};function rl(e){e()}function ad(e,t){var n=typeof t=="function"?t:si;if(e.length===0)n();else{var r=rl;k.mutateApproach===vw&&(r=Rt.requestAnimationFrame||rl),r(function(){var i=u0(),s=ro.begin("mutate");e.map(i),s(),n()})}}var io=!1;function od(){io=!0}function sa(){io=!1}var Ei=null;function il(e){if(Gc&&k.observeMutations){var t=e.treeCallback,n=t===void 0?si:t,r=e.nodeCallback,i=r===void 0?si:r,s=e.pseudoElementsCallback,a=s===void 0?si:s,o=e.observeMutationsRoot,c=o===void 0?te:o;Ei=new Gc(function(l){if(!io){var u=Pt();Ln(l).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!nl(d.addedNodes[0])&&(k.searchPseudoElements&&a(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&k.searchPseudoElements&&a(d.target.parentNode),d.type==="attributes"&&nl(d.target)&&~Tw.indexOf(d.attributeName))if(d.attributeName==="class"&&c0(d.target)){var p=Yi(Xa(d.target)),g=p.prefix,x=p.iconName;d.target.setAttribute(qa,g||u),x&&d.target.setAttribute(Ya,x)}else l0(d.target)&&i(d.target)})}}),ft&&Ei.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function p0(){Ei&&Ei.disconnect()}function m0(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function g0(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Yi(Xa(e));return i.prefix||(i.prefix=Pt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Gw(i.prefix,e.innerText)||eo(i.prefix,Qs(e.innerText))),!i.iconName&&k.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function v0(e){var t=Ln(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return k.autoA11y&&(n?t["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(r||pr()):(t["aria-hidden"]="true",t.focusable="false")),t}function y0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=g0(e),r=n.iconName,i=n.prefix,s=n.rest,a=v0(e),o=ea("parseNodeAttributes",{},e),c=t.styleParser?m0(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var b0=Me.styles;function cd(e){var t=k.autoReplaceSvg==="nest"?sl(e,{styleParser:!1}):sl(e);return~t.extra.classes.indexOf(zf)?ct("generateLayersText",e,t):ct("generateSvgReplacementMutation",e,t)}var xt=new Set;Ja.map(function(e){xt.add("fa-".concat(e))});Object.keys(ur[ee]).map(xt.add.bind(xt));Object.keys(ur[ae]).map(xt.add.bind(xt));xt=Ir(xt);function al(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ft)return Promise.resolve();var n=te.documentElement.classList,r=function(d){return n.add("".concat(qc,"-").concat(d))},i=function(d){return n.remove("".concat(qc,"-").concat(d))},s=k.autoFetchSvg?xt:Ja.map(function(u){return"fa-".concat(u)}).concat(Object.keys(b0));s.includes("fa")||s.push("fa");var a=[".".concat(zf,":not([").concat(tn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(tn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Ln(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=ro.begin("onTree"),l=o.reduce(function(u,d){try{var p=cd(d);p&&u.push(p)}catch(g){Vf||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,d){Promise.all(l).then(function(p){ad(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(p){c(),d(p)})})}function _0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cd(e).then(function(n){n&&ad([n],t)})}function w0(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ta(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ta(i||{})),e(r,A(A({},n),{},{mask:i}))}}var I0=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ze:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,d=n.title,p=d===void 0?null:d,g=n.titleId,x=g===void 0?null:g,P=n.classes,z=P===void 0?[]:P,I=n.attributes,T=I===void 0?{}:I,O=n.styles,F=O===void 0?{}:O;if(t){var H=t.prefix,M=t.iconName,X=t.icon;return Ji(A({type:"icon"},t),function(){return nn("beforeDOMElementCreation",{iconDefinition:t,params:n}),k.autoA11y&&(p?T["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(x||pr()):(T["aria-hidden"]="true",T.focusable="false")),no({icons:{main:na(X),mask:c?na(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:M,transform:A(A({},ze),i),symbol:a,title:p,maskId:u,titleId:x,extra:{attributes:T,styles:F,classes:z}})})}},E0={mixout:function(){return{icon:w0(I0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=al,n.nodeCallback=_0,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?te:r,s=n.callback,a=s===void 0?function(){}:s;return al(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,x){Promise.all([ra(i,o),u.iconName?ra(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var z=Ka(P,2),I=z[0],T=z[1];g([n,no({icons:{main:I,mask:T},prefix:o,iconName:i,transform:c,symbol:l,maskId:d,title:s,titleId:a,extra:p,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=Gi(o);c.length>0&&(i.style=c);var l;return Qa(a)&&(l=ct("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},T0={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ji({type:"layer"},function(){nn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(Ir(s)).join(" ")},children:a}]})}}}},S0={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,d=u===void 0?{}:u;return Ji({type:"counter",content:n},function(){return nn("beforeDOMElementCreation",{content:n,params:r}),i0({content:n.toString(),title:s,extra:{attributes:l,styles:d,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(Ir(o))}})})}}}},A0={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?ze:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,d=u===void 0?{}:u,p=r.styles,g=p===void 0?{}:p;return Ji({type:"text",content:n},function(){return nn("beforeDOMElementCreation",{content:n,params:r}),el({content:n,transform:A(A({},ze),s),title:o,extra:{attributes:d,styles:g,classes:["".concat(k.cssPrefix,"-layers-text")].concat(Ir(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(jf){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return k.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,el({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},C0=new RegExp('"',"ug"),ol=[1105920,1112319];function O0(e){var t=e.replace(C0,""),n=Hw(t,0),r=n>=ol[0]&&n<=ol[1],i=t.length===2?t[0]===t[1]:!1;return{value:Qs(i?t[0]:t),isSecondary:r||i}}function cl(e,t){var n="".concat(gw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Ln(e.children),a=s.filter(function(X){return X.getAttribute(Xs)===t})[0],o=Rt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(ww),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var d=o.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?ae:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?fr[p][c[2].toLowerCase()]:Iw[p][l],x=O0(d),P=x.value,z=x.isSecondary,I=c[0].startsWith("FontAwesome"),T=eo(g,P),O=T;if(I){var F=qw(P);F.iconName&&F.prefix&&(T=F.iconName,g=F.prefix)}if(T&&!z&&(!a||a.getAttribute(qa)!==g||a.getAttribute(Ya)!==O)){e.setAttribute(n,O),a&&e.removeChild(a);var H=y0(),M=H.extra;M.attributes[Xs]=t,ra(T,g).then(function(X){var G=no(A(A({},H),{},{icons:{main:X,mask:to()},prefix:g,iconName:O,extra:M,watchable:!0})),B=te.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=G.map(function(ce){return Tr(ce)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function k0(e){return Promise.all([cl(e,"::before"),cl(e,"::after")])}function R0(e){return e.parentNode!==document.head&&!~yw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ll(e){if(ft)return new Promise(function(t,n){var r=Ln(e.querySelectorAll("*")).filter(R0).map(k0),i=ro.begin("searchPseudoElements");od(),Promise.all(r).then(function(){i(),sa(),t()}).catch(function(){i(),sa(),n()})})}var P0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ll,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?te:r;k.searchPseudoElements&&ll(i)}}},ul=!1,x0={mixout:function(){return{dom:{unwatch:function(){od(),ul=!0}}}},hooks:function(){return{bootstrap:function(){il(ea("mutationObserverCallbacks",{}))},noAuto:function(){p0()},watch:function(n){var r=n.observeMutationsRoot;ul?sa():il(ea("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},fl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},N0={mixout:function(){return{parse:{transform:function(n){return fl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=fl(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(c," ").concat(l," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},g={outer:o,inner:d,path:p};return{tag:"g",attributes:A({},g.outer),children:[{tag:"g",attributes:A({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),g.path)}]}]}}}},Es={x:0,y:0,width:"100%",height:"100%"};function dl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function L0(e){return e.tag==="g"?e.children:[e]}var M0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Yi(i.split(" ").map(function(a){return a.trim()})):to();return s.prefix||(s.prefix=Pt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,d=a.width,p=a.icon,g=Nw({transform:c,containerWidth:d,iconWidth:l}),x={tag:"rect",attributes:A(A({},Es),{},{fill:"white"})},P=u.children?{children:u.children.map(dl)}:{},z={tag:"g",attributes:A({},g.inner),children:[dl(A({tag:u.tag,attributes:A(A({},u.attributes),g.path)},P))]},I={tag:"g",attributes:A({},g.outer),children:[z]},T="mask-".concat(o||pr()),O="clip-".concat(o||pr()),F={tag:"mask",attributes:A(A({},Es),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,I]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:L0(p)},F]};return r.push(H,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(T,")")},Es)}),{children:r,attributes:i}}}},D0={provides:function(t){var n=!1;Rt.matchMedia&&(n=Rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=A(A({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:A(A({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:A(A({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:A(A({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},F0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},U0=[Dw,E0,T0,S0,A0,P0,x0,N0,M0,D0,F0];Xw(U0,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;var aa=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var $0=Oe.icon;Oe.layer;Oe.text;Oe.counter;function hl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hl(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function _e(e,t,n){return t=V0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function H0(e,t){if(e==null)return{};var n=j0(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function B0(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function V0(e){var t=B0(e,"string");return typeof t=="symbol"?t:String(t)}var z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ld={exports:{}};(function(e){(function(t){var n=function(I,T,O){if(!l(T)||d(T)||p(T)||g(T)||c(T))return T;var F,H=0,M=0;if(u(T))for(F=[],M=T.length;H<M;H++)F.push(n(I,T[H],O));else{F={};for(var X in T)Object.prototype.hasOwnProperty.call(T,X)&&(F[I(X,O)]=n(I,T[X],O))}return F},r=function(I,T){T=T||{};var O=T.separator||"_",F=T.split||/(?=[A-Z])/;return I.split(F).join(O)},i=function(I){return x(I)?I:(I=I.replace(/[\-_\s]+(.)?/g,function(T,O){return O?O.toUpperCase():""}),I.substr(0,1).toLowerCase()+I.substr(1))},s=function(I){var T=i(I);return T.substr(0,1).toUpperCase()+T.substr(1)},a=function(I,T){return r(I,T).toLowerCase()},o=Object.prototype.toString,c=function(I){return typeof I=="function"},l=function(I){return I===Object(I)},u=function(I){return o.call(I)=="[object Array]"},d=function(I){return o.call(I)=="[object Date]"},p=function(I){return o.call(I)=="[object RegExp]"},g=function(I){return o.call(I)=="[object Boolean]"},x=function(I){return I=I-0,I===I},P=function(I,T){var O=T&&"process"in T?T.process:T;return typeof O!="function"?I:function(F,H){return O(F,I,H)}},z={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(I,T){return n(P(i,T),I)},decamelizeKeys:function(I,T){return n(P(a,T),I,T)},pascalizeKeys:function(I,T){return n(P(s,T),I)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(z0)})(ld);var W0=ld.exports,K0=["class","style"];function G0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=W0.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function q0(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return ud(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=q0(u);break;case"style":c.style=G0(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=H0(n,K0);return op(e.tag,Qe(Qe(Qe({},t),{},{class:i.class,style:Qe(Qe({},i.style),a)},i.attrs),o),r)}var fd=!1;try{fd=!0}catch{}function Y0(){if(!fd&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ts(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function J0(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function pl(e){if(e&&Ti(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(aa.icon)return aa.icon(e);if(e===null)return null;if(Ti(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var X0=vh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=jt(function(){return pl(t.icon)}),s=jt(function(){return Ts("classes",J0(t))}),a=jt(function(){return Ts("transform",typeof t.transform=="string"?aa.transform(t.transform):t.transform)}),o=jt(function(){return Ts("mask",pl(t.mask))}),c=jt(function(){return $0(i.value,Qe(Qe(Qe(Qe({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Kr(c,function(u){if(!u)return Y0("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=jt(function(){return c.value?ud(c.value.abstract[0],{},r):null});return function(){return l.value}}});const dn={__name:"IconStart",props:{icon:{type:[Object,Array],required:!0},size:{type:String,default:"lg"},color:{type:String,default:"gray"}},setup(e){return(t,n)=>(Y(),qn(mt(X0),{icon:e.icon,size:e.size,color:e.color},null,8,["icon","size","color"]))}};var Q0={prefix:"fas",iconName:"toggle-off",icon:[576,512,[],"f204","M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"]},Z0={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},eI=Z0,tI={prefix:"fas",iconName:"toggle-on",icon:[576,512,[],"f205","M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Ss={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},Vr={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};const nI={class:"group-container"},rI={key:0},iI={class:"img-ref fadeIn"},sI=["src"],aI={key:1,class:"title-box"},oI={class:"icon-pos fadeIn"},cI=["src"],lI={key:1,class:"placeholder-txt fadeIn"},uI={key:0},fI={key:1},dI={key:4,class:"form-btn-container"},hI=$("span",{class:"btn-copy-txt"},"edit",-1),pI=$("span",{class:"btn-copy-txt"},"ok",-1),mI="gemini-1.0-pro-vision-latest",gI={__name:"App",setup(e){const t=le(null),n="AIzaSyDaDes5BIXoHb4phcJAFOiSiPYHkaLzDnM",r={temperature:.3,topK:35,topP:.5,maxOutputTokens:4096},i=[{category:mn.HARM_CATEGORY_HARASSMENT,threshold:gn.BLOCK_MEDIUM_AND_ABOVE},{category:mn.HARM_CATEGORY_HATE_SPEECH,threshold:gn.BLOCK_MEDIUM_AND_ABOVE},{category:mn.HARM_CATEGORY_SEXUALLY_EXPLICIT,threshold:gn.BLOCK_MEDIUM_AND_ABOVE},{category:mn.HARM_CATEGORY_DANGEROUS_CONTENT,threshold:gn.BLOCK_MEDIUM_AND_ABOVE}],s=le(null),a=le(!1),o=le(null),c=le(null),l=le(""),u=le(null),d=le(!1),p=le(""),g=le(Ss),x=()=>o.value.showLoading(),P=()=>o.value.hideLoading(),z=()=>{c.value=null,l.value="",u.value=null,d.value=!1,g.value=Ss},I=G=>{G.preventDefault();const B=G.dataTransfer.files[0];c.value=B,B.type.startsWith("image/")?u.value=URL.createObjectURL(B):alert("Por favor, selecione um arquivo de imagem.")},T=G=>{const B=G.target.files[0];c.value=B,B.type.startsWith("image/")?u.value=URL.createObjectURL(B):alert("Por favor, selecione um arquivo de imagem.")},O=()=>{document.querySelector('input[type="file"]').click()},F=()=>{const G=l.value.join(`
`);navigator.clipboard.writeText(G).then(()=>{g.value=Vr}).catch(B=>{console.error("Erro ao copiar o texto: ",B)})},H=()=>{d.value?l.value=p.value.split(`
`):p.value=l.value.join(`
`),d.value=!d.value,g.value=Ss},M=()=>{t.value.showOverlay=!0},X=async()=>{x();const B=new A_(n).getGenerativeModel({model:mI});if(!c.value)throw new Error("Por favor, selecione um arquivo de imagem.");const ce=new FileReader;ce.readAsDataURL(c.value),ce.onload=async()=>{const Je=[{text:"Descreva o ambiente da imagem enviada. Seja objetivo e utilize tópicos."},{inlineData:{mimeType:"image/jpeg",data:ce.result.split(",")[1]}}],cn=(await B.generateContent({contents:[{role:"user",parts:Je}],generationConfig:r,safetySettings:i})).response;l.value=cn.text().match(/[^.!?]+[.!?]?/g).map(Dn=>`• ${Dn.trim()}`),P()}};return Ia(()=>{a.value=!0;const G=bf(Xn,B=>{B?(a.value=!1,s.value=B):(s.value=null,a.value=!1)});Mi(()=>{G(),a.value=!1})}),(G,B)=>(Y(),se(Ne,null,[a.value?(Y(),qn($_,{key:0})):xe("",!0),oe(ew),oe(aw,{ref_key:"logoutConfirm",ref:t},null,512),$("button",{class:"logout-btn fadeIn",onClick:M},"Logout"),oe(x_,{ref_key:"isLoading",ref:o},null,512),$("div",nI,[l.value==""?(Y(),se("div",rI,[c.value==null?(Y(),qn(dn,{key:0,class:"fadeIn",icon:mt(Q0),size:"2x",color:"grey"},null,8,["icon"])):(Y(),qn(dn,{key:1,class:"fadeIn",icon:mt(tI),size:"2x",color:"blueviolet"},null,8,["icon"]))])):xe("",!0),$("div",iI,[l.value!=""?(Y(),se("img",{key:0,class:"img-placeholder-ref",src:u.value,alt:"Imagem"},null,8,sI)):xe("",!0)]),l.value!=""?(Y(),se("h2",aI,[$("span",oI,[oe(dn,{icon:mt(Vr),size:"1x",color:"green"},null,8,["icon"])]),Sa(" Descrição da imagem. ")])):xe("",!0),l.value==""?(Y(),se("div",{key:2,class:"drop-area fadeIn",onDragover:B[0]||(B[0]=Np(()=>{},["prevent"])),onDrop:I,onClick:O},[$("input",{type:"file",accept:"image/*",ref:"fileInput",onChange:T,style:{display:"none"}},null,544),u.value?(Y(),se("img",{key:0,class:"img-placeholder fadeIn",src:u.value,alt:"Imagem"},null,8,cI)):(Y(),se("span",lI,"Arraste e solte sua imagem aqui ou clique para selecionar!"))],32)):xe("",!0),u.value&&l.value==""?(Y(),se("button",{key:3,class:"form-btn-send fadeIn",onClick:X}," Descrever imagem em texto. ")):xe("",!0),$("div",{class:Cn(["fadeIn",l.value!=""?" result-text":""])},[d.value?(Y(),se("div",fI,[Gr($("textarea",{"onUpdate:modelValue":B[1]||(B[1]=ce=>p.value=ce),class:"edit-area"},null,512),[[Qr,p.value]])])):(Y(),se("div",uI,[(Y(!0),se(Ne,null,kh(l.value,(ce,Je)=>(Y(),se("p",{key:Je},El(ce),1))),128))]))],2),l.value!=""?(Y(),se("div",dI,[$("button",{class:"form-btn-copy",onClick:F},[oe(dn,{icon:mt(Vr),size:"1x",color:g.value.iconName=="check"?"greenyellow":"white"},null,8,["icon","color"]),$("span",{class:Cn(g.value.iconName=="check"?"btn-copy-txt-green":"btn-copy-txt")},"copy",2)]),d.value?(Y(),se("button",{key:1,class:"form-btn-edit fadeIn",onClick:H},[oe(dn,{icon:mt(Vr),size:"1x",color:"white"},null,8,["icon"]),pI])):(Y(),se("button",{key:0,class:"form-btn-edit fadeIn",onClick:H},[oe(dn,{icon:mt(eI),size:"1x",color:"white"},null,8,["icon"]),hI]))])):xe("",!0),l.value!=""?(Y(),se("button",{key:5,class:"form-btn-clear fadeIn",onClick:z}," Descrever outra imagem. ")):xe("",!0)])],64))}};Fp(gI).mount("#app");
