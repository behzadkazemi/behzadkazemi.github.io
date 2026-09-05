(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Il(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},xr=[],kn=()=>{},Ju=()=>!1,xa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Sa=n=>n.startsWith("onUpdate:"),Ft=Object.assign,Ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kd=Object.prototype.hasOwnProperty,ct=(n,e)=>Kd.call(n,e),$e=Array.isArray,Pi=n=>us(n)==="[object Map]",ia=n=>us(n)==="[object Set]",yc=n=>us(n)==="[object Date]",Ke=n=>typeof n=="function",Tt=n=>typeof n=="string",Wn=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",Qu=n=>(ht(n)||Ke(n))&&Ke(n.then)&&Ke(n.catch),ju=Object.prototype.toString,us=n=>ju.call(n),Zd=n=>us(n).slice(8,-1),ef=n=>us(n)==="[object Object]",Ul=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zr=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jd=/-\w/g,Mn=Ma(n=>n.replace(Jd,e=>e.slice(1).toUpperCase())),Qd=/\B([A-Z])/g,Qi=Ma(n=>n.replace(Qd,"-$1").toLowerCase()),tf=Ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),ka=Ma(n=>n?`on${tf(n)}`:""),On=(n,e)=>!Object.is(n,e),$s=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Nl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ec;const ba=()=>Ec||(Ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dr(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Tt(i)?nh(i):Dr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Tt(n)||ht(n))return n}const jd=/;(?![^(]*\))/g,eh=/:([^]+)/,th=/\/\*[^]*?\*\//g;function nh(n){const e={};return n.replace(th,"").split(jd).forEach(t=>{if(t){const i=t.split(eh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function fn(n){let e="";if(Tt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=fn(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ih="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=Il(ih);function rf(n){return!!n||n===""}function sh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ya(n[i],e[i]);return t}function Tc(n,e){if(n.size!==e.size)return!1;const t=Array.from(e),i=new Uint8Array(t.length);for(const r of n){let s=-1;for(let a=0;a<t.length;a++)if(!i[a]&&ya(r,t[a])){s=a;break}if(s<0)return!1;i[s]=1}return!0}function ya(n,e){if(n===e)return!0;let t=yc(n),i=yc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Wn(n),i=Wn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?sh(n,e):!1;if(t=ht(n),i=ht(e),t||i){if(!t||!i)return!1;if(t=Pi(n),i=Pi(e),t||i||(t=ia(n),i=ia(e),t||i))return t&&i?Tc(n,e):!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ya(n[a],e[a]))return!1}}return String(n)===String(e)}const sf=n=>!!(n&&n.__v_isRef===!0),Be=n=>Tt(n)?n:n==null?"":$e(n)||ht(n)&&(n.toString===ju||!Ke(n.toString))?sf(n)?Be(n.value):JSON.stringify(n,af,2):String(n),af=(n,e)=>sf(e)?af(n,e.value):Pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ha(i,s)+" =>"]=r,t),{})}:ia(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ha(t))}:Wn(e)?Ha(e):ht(e)&&!$e(e)&&!ef(e)?String(e):e,Ha=(n,e="")=>{var t;return Wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class ah{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ut&&(Ut.active?(this.parent=Ut,this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ut;try{return Ut=this,e()}finally{Ut=t}}}on(){++this._on===1&&(this.prevScope=Ut,Ut=this)}off(){if(this._on>0&&--this._on===0){if(Ut===this)Ut=this.prevScope;else{let e=Ut;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function oh(){return Ut}let xt;const Va=new WeakSet;class of{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&(Ut.active?Ut.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Va.has(this)&&(Va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ac(this),uf(this);const e=xt,t=bn;xt=this,bn=!0;try{return this.fn()}finally{ff(this),xt=e,bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,Ac(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Io(this)&&this.run()}get dirty(){return Io(this)}}let lf=0,Jr,Qr;function cf(n,e=!1){if(n.flags|=8,e){n.next=Qr,Qr=n;return}n.next=Jr,Jr=n}function Fl(){lf++}function Ol(){if(--lf>0)return;if(Qr){let e=Qr;for(Qr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Jr;){let e=Jr;for(Jr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ff(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Bl(i),lh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Io(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(df(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function df(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ns)||(n.globalVersion=ns,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Io(n))))return;n.flags|=2;const e=n.dep,t=xt,i=bn;xt=n,bn=!0;try{uf(n);const r=n.fn(n._value);(e.version===0||On(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=t,bn=i,ff(n),n.flags&=-3}}function Bl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Bl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function lh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bn=!0;const hf=[];function ui(){hf.push(bn),bn=!1}function fi(){const n=hf.pop();bn=n===void 0?!0:n}function Ac(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=xt;xt=void 0;try{e()}finally{xt=t}}}let ns=0;class ch{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!bn||xt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==xt)t=this.activeLink=new ch(xt,this),xt.deps?(t.prevDep=xt.depsTail,xt.depsTail.nextDep=t,xt.depsTail=t):xt.deps=xt.depsTail=t,pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=xt.depsTail,t.nextDep=void 0,xt.depsTail.nextDep=t,xt.depsTail=t,xt.deps===t&&(xt.deps=i)}return t}trigger(e){this.version++,ns++,this.notify(e)}notify(e){Fl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ol()}}}function pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Lo=new WeakMap,Xi=Symbol(""),Uo=Symbol(""),is=Symbol("");function kt(n,e,t){if(bn&&xt){let i=Lo.get(n);i||Lo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new zl),r.map=i,r.key=t),r.track()}}function ni(n,e,t,i,r,s){const a=Lo.get(n);if(!a){ns++;return}const o=l=>{l&&l.trigger()};if(Fl(),e==="clear")a.forEach(o);else{const l=$e(n),c=l&&Ul(t);if(l&&t==="length"){const u=Number(i);a.forEach((d,f)=>{(f==="length"||f===is||!Wn(f)&&f>=u)&&o(d)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(is)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Xi)),Pi(n)&&o(a.get(Uo)));break;case"delete":l||(o(a.get(Xi)),Pi(n)&&o(a.get(Uo)));break;case"set":Pi(n)&&o(a.get(Xi));break}}Ol()}function nr(n){const e=lt(n);return e===n?e:(kt(e,"iterate",is),pn(n)?e:e.map(yn))}function Ea(n){return kt(n=lt(n),"iterate",is),n}function Un(n,e){return di(n)?Tr(qi(n)?yn(e):e):yn(e)}const uh={__proto__:null,[Symbol.iterator](){return Ga(this,Symbol.iterator,n=>Un(this,n))},concat(...n){return nr(this).concat(...n.map(e=>$e(e)?nr(e):e))},entries(){return Ga(this,"entries",n=>(n[1]=Un(this,n[1]),n))},every(n,e){return Yn(this,"every",n,e,void 0,arguments)},filter(n,e){return Yn(this,"filter",n,e,t=>t.map(i=>Un(this,i)),arguments)},find(n,e){return Yn(this,"find",n,e,t=>Un(this,t),arguments)},findIndex(n,e){return Yn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Yn(this,"findLast",n,e,t=>Un(this,t),arguments)},findLastIndex(n,e){return Yn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Yn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Wa(this,"includes",n)},indexOf(...n){return Wa(this,"indexOf",n)},join(n){return nr(this).join(n)},lastIndexOf(...n){return Wa(this,"lastIndexOf",n)},map(n,e){return Yn(this,"map",n,e,void 0,arguments)},pop(){return Nr(this,"pop")},push(...n){return Nr(this,"push",n)},reduce(n,...e){return wc(this,"reduce",n,e)},reduceRight(n,...e){return wc(this,"reduceRight",n,e)},shift(){return Nr(this,"shift")},some(n,e){return Yn(this,"some",n,e,void 0,arguments)},splice(...n){return Nr(this,"splice",n)},toReversed(){return nr(this).toReversed()},toSorted(n){return nr(this).toSorted(n)},toSpliced(...n){return nr(this).toSpliced(...n)},unshift(...n){return Nr(this,"unshift",n)},values(){return Ga(this,"values",n=>Un(this,n))}};function Ga(n,e,t){const i=Ea(n),r=i[e]();return i!==n&&!pn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fh=Array.prototype;function Yn(n,e,t,i,r,s){const a=Ea(n),o=a!==n&&!pn(n),l=a[e];if(l!==fh[e]){const d=l.apply(n,s);return o?yn(d):d}let c=t;a!==n&&(o?c=function(d,f){return t.call(this,Un(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function wc(n,e,t,i){const r=Ea(n),s=r!==n&&!pn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,d){return o&&(o=!1,c=Un(n,c)),t.call(this,c,Un(n,u),d,n)}):t.length>3&&(a=function(c,u,d){return t.call(this,c,u,d,n)}));const l=r[e](a,...i);return o?Un(n,l):l}function Wa(n,e,t){const i=lt(n);kt(i,"iterate",is);const r=i[e](...t);return(r===-1||r===!1)&&Gl(t[0])?(t[0]=lt(t[0]),i[e](...t)):r}function Nr(n,e,t=[]){ui(),Fl();const i=lt(n)[e].apply(n,t);return Ol(),fi(),i}const dh=Il("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wn));function hh(n){Wn(n)||(n=String(n));const e=lt(this);return kt(e,"has",n),e.hasOwnProperty(n)}class gf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?yh:Sf:s?xf:vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=$e(e);if(!r){let l;if(a&&(l=uh[t]))return l;if(t==="hasOwnProperty")return hh}const o=Reflect.get(e,t,Vt(e)?e:i);if((Wn(t)?mf.has(t):dh(t))||(r||kt(e,"get",t),s))return o;if(Vt(o)){const l=a&&Ul(t)?o:o.value;return r&&ht(l)?Fo(l):l}return ht(o)?r?Fo(o):Hl(o):o}}class _f extends gf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=$e(e)&&Ul(t);if(!this._isShallow){const c=di(s);if(!pn(i)&&!di(i)&&(s=lt(s),i=lt(i)),!a&&Vt(s)&&!Vt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:ct(e,t),l=Reflect.set(e,t,i,Vt(e)?e:r);return e===lt(r)&&l&&(o?On(i,s)&&ni(e,"set",t,i):ni(e,"add",t,i)),l}deleteProperty(e,t){const i=ct(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ni(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Wn(t)||!mf.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",$e(e)?"length":Xi),Reflect.ownKeys(e)}}class ph extends gf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mh=new _f,gh=new ph,_h=new _f(!0);const No=n=>n,vs=n=>Reflect.getPrototypeOf(n);function vh(n,e,t){return function(...i){const r=this.__v_raw,s=lt(r),a=Pi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?No:e?Tr:yn;return!e&&kt(s,"iterate",l?Uo:Xi),Ft(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function xs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xh(n,e){const t={get(r){const s=this.__v_raw,a=lt(s),o=lt(r);n||(On(r,o)&&kt(a,"get",r),kt(a,"get",o));const{has:l}=vs(a),c=e?No:n?Tr:yn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&kt(lt(r),"iterate",Xi),r.size},has(r){const s=this.__v_raw,a=lt(s),o=lt(r);return n||(On(r,o)&&kt(a,"has",r),kt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=lt(o),c=e?No:n?Tr:yn;return!n&&kt(l,"iterate",Xi),o.forEach((u,d)=>r.call(s,c(u),c(d),a))}};return Ft(t,n?{add:xs("add"),set:xs("set"),delete:xs("delete"),clear:xs("clear")}:{add(r){const s=lt(this),a=vs(s),o=lt(r),l=!e&&!pn(r)&&!di(r)?o:r;return a.has.call(s,l)||On(r,l)&&a.has.call(s,r)||On(o,l)&&a.has.call(s,o)||(s.add(l),ni(s,"add",l,l)),this},set(r,s){!e&&!pn(s)&&!di(s)&&(s=lt(s));const a=lt(this),{has:o,get:l}=vs(a);let c=o.call(a,r);c||(r=lt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?On(s,u)&&ni(a,"set",r,s):ni(a,"add",r,s),this},delete(r){const s=lt(this),{has:a,get:o}=vs(s);let l=a.call(s,r);l||(r=lt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&ni(s,"delete",r,void 0),c},clear(){const r=lt(this),s=r.size!==0,a=r.clear();return s&&ni(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=vh(r,n,e)}),t}function kl(n,e){const t=xh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ct(t,r)&&r in i?t:i,r,s)}const Sh={get:kl(!1,!1)},Mh={get:kl(!1,!0)},bh={get:kl(!0,!1)};const vf=new WeakMap,xf=new WeakMap,Sf=new WeakMap,yh=new WeakMap;function Eh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hl(n){return di(n)?n:Vl(n,!1,mh,Sh,vf)}function Th(n){return Vl(n,!1,_h,Mh,xf)}function Fo(n){return Vl(n,!0,gh,bh,Sf)}function Vl(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=Eh(Zd(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function qi(n){return di(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function di(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function Gl(n){return n?!!n.__v_raw:!1}function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}function Ah(n){return!ct(n,"__v_skip")&&Object.isExtensible(n)&&nf(n,"__v_skip",!0),n}const yn=n=>ht(n)?Hl(n):n,Tr=n=>ht(n)?Fo(n):n;function Vt(n){return n?n.__v_isRef===!0:!1}function ot(n){return wh(n,!1)}function wh(n,e){return Vt(n)?n:new Rh(n,e)}class Rh{constructor(e,t){this.dep=new zl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:lt(e),this._value=t?e:yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||pn(e)||di(e);e=i?e:lt(e),On(e,t)&&(this._rawValue=e,this._value=i?e:yn(e),this.dep.trigger())}}function si(n){return Vt(n)?n.value:n}const Ch={get:(n,e,t)=>e==="__v_raw"?n:si(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Vt(r)&&!Vt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Mf(n){return qi(n)?n:new Proxy(n,Ch)}class Ph{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new zl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return cf(this,!0),!0}get value(){const e=this.dep.track();return df(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dh(n,e,t=!1){let i,r;return Ke(n)?i=n:(i=n.get,r=n.set),new Ph(i,r,t)}const Ss={},ra=new WeakMap;let zi;function Ih(n,e=!1,t=zi){if(t){let i=ra.get(t);i||ra.set(t,i=[]),i.push(n)}}function Lh(n,e,t=gt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=x=>r?x:pn(x)||r===!1||r===0?ii(x,1):ii(x);let u,d,f,m,v=!1,b=!1;if(Vt(n)?(d=()=>n.value,v=pn(n)):qi(n)?(d=()=>c(n),v=!0):$e(n)?(b=!0,v=n.some(x=>qi(x)||pn(x)),d=()=>n.map(x=>{if(Vt(x))return x.value;if(qi(x))return c(x);if(Ke(x))return l?l(x,2):x()})):Ke(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){ui();try{f()}finally{fi()}}const x=zi;zi=u;try{return l?l(n,3,[m]):n(m)}finally{zi=x}}:d=kn,e&&r){const x=d,A=r===!0?1/0:r;d=()=>ii(x(),A)}const g=oh(),h=()=>{u.stop(),g&&g.active&&Ll(g.effects,u)};if(s&&e){const x=e;e=(...A)=>{const M=x(...A);return h(),M}}let y=b?new Array(n.length).fill(Ss):Ss;const T=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const A=u.run();if(x||r||v||(b?A.some((M,R)=>On(M,y[R])):On(A,y))){f&&f();const M=zi;zi=u;try{const R=[A,y===Ss?void 0:b&&y[0]===Ss?[]:y,m];y=A,l?l(e,3,R):e(...R)}finally{zi=M}}}else u.run()};return o&&o(T),u=new of(d),u.scheduler=a?()=>a(T,!1):T,m=x=>Ih(x,!1,u),f=u.onStop=()=>{const x=ra.get(u);if(x){if(l)l(x,4);else for(const A of x)A();ra.delete(u)}},e?i?T(!0):y=u.run():a?a(T.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ii(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Vt(n))ii(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)ii(n[i],e,t);else if(ia(n)||Pi(n))n.forEach(i=>{ii(i,e,t)});else if(ef(n)){for(const i in n)ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ii(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fs(n,e,t,i){try{return i?n(...i):n()}catch(r){Ta(r,e,t)}}function En(n,e,t,i){if(Ke(n)){const r=fs(n,e,t,i);return r&&Qu(r)&&r.catch(s=>{Ta(s,e,t)}),r}if($e(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}}function Ta(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||gt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}o=o.parent}if(s){ui(),fs(s,null,10,[n,l,c]),fi();return}}Uh(n,t,r,i,a)}function Uh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Xt=[];let Ln=-1;const Sr=[];let Ai=null,_r=0;const bf=Promise.resolve();let sa=null;function yf(n){const e=sa||bf;return n?e.then(this?n.bind(this):n):e}function Nh(n){let e=Ln+1,t=Xt.length;for(;e<t;){const i=e+t>>>1,r=Xt[i],s=rs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Wl(n){if(!(n.flags&1)){const e=rs(n),t=Xt[Xt.length-1];!t||!(n.flags&2)&&e>=rs(t)?Xt.push(n):Xt.splice(Nh(e),0,n),n.flags|=1,Ef()}}function Ef(){sa||(sa=bf.then(Af))}function Fh(n){if(!$e(n))Ai&&n.id===-1?Ai.splice(_r+1,0,n):n.flags&1||(Sr.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Sr.push(n[e]);Ef()}function Rc(n,e,t=Ln+1){for(;t<Xt.length;t++){const i=Xt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Xt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Tf(n){if(Sr.length){const e=[...new Set(Sr)].sort((t,i)=>rs(t)-rs(i));if(Sr.length=0,Ai){for(let t=0;t<e.length;t++)Ai.push(e[t]);return}for(Ai=e,_r=0;_r<Ai.length;_r++){const t=Ai[_r];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ai=null,_r=0}}const rs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Af(n){try{for(Ln=0;Ln<Xt.length;Ln++){const e=Xt[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<Xt.length;Ln++){const e=Xt[Ln];e&&(e.flags&=-2)}Ln=-1,Xt.length=0,Tf(),sa=null,(Xt.length||Sr.length)&&Af()}}let dn=null,wf=null;function aa(n){const e=dn;return dn=n,wf=n&&n.type.__scopeId||null,e}function Oh(n,e=dn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&zc(-1);const s=aa(e),a=$i.length;let o;try{o=n(...r)}finally{for(let l=$i.length;l>a;l--)Jf();aa(s),i._d&&zc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ai(n,e){if(dn===null)return n;const t=Da(dn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=gt]=e[r];s&&(Ke(s)&&(s={mounted:s,updated:s}),s.deep&&ii(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Li(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ui(),En(l,t,8,[n.el,o,n,e]),fi())}}function Bh(n,e){if($t){let t=$t.provides;const i=$t.parent&&$t.parent.provides;i===t&&(t=$t.provides=Object.create(i)),t[n]=e}}function Ys(n,e,t=!1){const i=Lp();if(i||Mr){let r=Mr?Mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}const zh=Symbol.for("v-scx"),kh=()=>Ys(zh);function Xa(n,e,t){return Rf(n,e,t)}function Rf(n,e,t=gt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Ft({},t),l=e&&i||!e&&s!=="post";let c;if(os){if(s==="sync"){const m=kh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=kn,m.resume=kn,m.pause=kn,m}}const u=$t;o.call=(m,v,b)=>En(m,u,v,b);let d=!1;s==="post"?o.scheduler=m=>{Jt(m,u&&u.suspense)}:s!=="sync"&&(d=!0,o.scheduler=(m,v)=>{v?m():Wl(m)}),o.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=Lh(n,e,o);return os&&(c?c.push(f):l&&f()),f}function Hh(n,e,t){const i=this.proxy,r=Tt(n)?n.includes(".")?Cf(i,n):()=>i[n]:n.bind(i,i);let s;Ke(e)?s=e:(s=e.handler,t=e);const a=ds(this),o=Rf(r,s.bind(i),t);return a(),o}function Cf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vh=Symbol("_vte"),Aa=n=>n.__isTeleport,qa=Symbol("_leaveCb");function Gh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==hi){e=t;break}}return e}function Pf(n){if(!ql(n))return Aa(n.type)&&n.children?Gh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ke(t.default))return t.default()}}function Xl(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Xl(Aa(t.type)&&Pf(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function An(n,e){return Ke(n)?Ft({name:n.name},e,{setup:n}):n}function Df(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Cc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const oa=new WeakMap;function jr(n,e,t,i,r=!1){if($e(n)){n.forEach((b,g)=>jr(b,e&&($e(e)?e[g]:e),t,i,r));return}if(es(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&jr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Da(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===gt?o.refs={}:o.refs,d=o.setupState,f=lt(d),m=d===gt?Ju:b=>Cc(u,b)?!1:ct(f,b),v=(b,g)=>!(g&&Cc(u,g));if(c!=null&&c!==l){if(Pc(e),Tt(c))u[c]=null,m(c)&&(d[c]=null);else if(Vt(c)){const b=e;v(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(Ke(l))fs(l,o,12,[a,u]);else{const b=Tt(l),g=Vt(l);if(b||g){const h=()=>{if(n.f){const y=b?m(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)$e(y)&&Ll(y,s);else if($e(y))y.includes(s)||y.push(s);else if(b)u[l]=[s],m(l)&&(d[l]=u[l]);else{const T=[s];v(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else b?(u[l]=a,m(l)&&(d[l]=a)):g&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const y=()=>{h(),oa.delete(n)};y.id=-1,oa.set(n,y),Jt(y,t)}else Pc(n),h()}}}function Pc(n){const e=oa.get(n);e&&(e.flags|=8,oa.delete(n))}ba().requestIdleCallback;ba().cancelIdleCallback;const es=n=>!!n.type.__asyncLoader,ql=n=>n.type.__isKeepAlive;function Wh(n,e){If(n,"a",e)}function Xh(n,e){If(n,"da",e)}function If(n,e,t=$t){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(wa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ql(r.parent.vnode)&&qh(i,e,t,r),r=r.parent}}function qh(n,e,t,i){const r=wa(e,n,i,!0);$l(()=>{Ll(i[e],r)},t)}function wa(n,e,t=$t,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{ui();const o=ds(t),l=En(e,t,n,a);return o(),fi(),l});return i?r.unshift(s):r.push(s),s}}const gi=n=>(e,t=$t)=>{(!os||n==="sp")&&wa(n,(...i)=>e(...i),t)},$h=gi("bm"),Ra=gi("m"),Yh=gi("bu"),Kh=gi("u"),Lf=gi("bum"),$l=gi("um"),Zh=gi("sp"),Jh=gi("rtg"),Qh=gi("rtc");function jh(n,e=$t){wa("ec",n,e)}const ep=Symbol.for("v-ndc");function qt(n,e,t,i){let r;const s=t,a=$e(n);if(a||Tt(n)){const o=a&&qi(n);let l=!1,c=!1;o&&(l=!pn(n),c=di(n),n=Ea(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Tr(yn(n[u])):yn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Oo=n=>n?td(n)?Da(n):Oo(n.parent):null,ts=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Oo(n.parent),$root:n=>Oo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Nf(n),$forceUpdate:n=>n.f||(n.f=()=>{Wl(n.update)}),$nextTick:n=>n.n||(n.n=yf.bind(n.proxy)),$watch:n=>Hh.bind(n)}),$a=(n,e)=>n!==gt&&!n.__isScriptSetup&&ct(n,e),tp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if($a(i,e))return a[e]=1,i[e];if(r!==gt&&ct(r,e))return a[e]=2,r[e];if(ct(s,e))return a[e]=3,s[e];if(t!==gt&&ct(t,e))return a[e]=4,t[e];Bo&&(a[e]=0)}}const c=ts[e];let u,d;if(c)return e==="$attrs"&&kt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==gt&&ct(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,ct(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return $a(r,e)?(r[e]=t,!0):i!==gt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==gt&&o[0]!=="$"&&ct(n,o)||$a(e,o)||ct(s,o)||ct(i,o)||ct(ts,o)||ct(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Dc(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Bo=!0;function np(n){const e=Nf(n),t=n.proxy,i=n.ctx;Bo=!1,e.beforeCreate&&Ic(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:v,activated:b,deactivated:g,beforeDestroy:h,beforeUnmount:y,destroyed:T,unmounted:x,render:A,renderTracked:M,renderTriggered:R,errorCaptured:_,serverPrefetch:w,expose:N,inheritAttrs:L,components:k,directives:te,filters:se}=e;if(c&&ip(c,i,null),a)for(const z in a){const Y=a[z];Ke(Y)&&(i[z]=Y.bind(t))}if(r){const z=r.call(t,t);ht(z)&&(n.data=Hl(z))}if(Bo=!0,s)for(const z in s){const Y=s[z],le=Ke(Y)?Y.bind(t,t):Ke(Y.get)?Y.get.bind(t,t):kn,_e=!Ke(Y)&&Ke(Y.set)?Y.set.bind(t):kn,ve=Yi({get:le,set:_e});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Te=>ve.value=Te})}if(o)for(const z in o)Uf(o[z],i,t,z);if(l){const z=Ke(l)?l.call(t):l;Reflect.ownKeys(z).forEach(Y=>{Bh(Y,z[Y])})}u&&Ic(u,n,"c");function J(z,Y){$e(Y)?Y.forEach(le=>z(le.bind(t))):Y&&z(Y.bind(t))}if(J($h,d),J(Ra,f),J(Yh,m),J(Kh,v),J(Wh,b),J(Xh,g),J(jh,_),J(Qh,M),J(Jh,R),J(Lf,y),J($l,x),J(Zh,w),$e(N))if(N.length){const z=n.exposed||(n.exposed={});N.forEach(Y=>{Object.defineProperty(z,Y,{get:()=>t[Y],set:le=>t[Y]=le,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===kn&&(n.render=A),L!=null&&(n.inheritAttrs=L),k&&(n.components=k),te&&(n.directives=te),w&&Df(n)}function ip(n,e,t=kn){$e(n)&&(n=zo(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=Ys(r.from||i,r.default,!0):s=Ys(r.from||i):s=Ys(r),Vt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ic(n,e,t){En($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Uf(n,e,t,i){let r=i.includes(".")?Cf(t,i):()=>t[i];if(Tt(n)){const s=e[n];Ke(s)&&Xa(r,s)}else if(Ke(n))Xa(r,n.bind(t));else if(ht(n))if($e(n))n.forEach(s=>Uf(s,e,t,i));else{const s=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(s)&&Xa(r,s,n)}}function Nf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>la(l,c,a,!0)),la(l,e,a)),ht(e)&&s.set(e,l),l}function la(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&la(n,s,t,!0),r&&r.forEach(a=>la(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=rp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const rp={data:Lc,props:Uc,emits:Uc,methods:Xr,computed:Xr,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Xr,directives:Xr,watch:ap,provide:Lc,inject:sp};function Lc(n,e){return e?n?function(){return Ft(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function sp(n,e){return Xr(zo(n),zo(e))}function zo(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function Xr(n,e){return n?Ft(Object.create(null),n,e):e}function Uc(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Ft(Object.create(null),Dc(n),Dc(e??{})):e}function ap(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function Ff(){return{app:null,config:{isNativeTag:Ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let op=0;function lp(n,e){return function(i,r=null){Ke(i)||(i=Ft({},i)),r!=null&&!ht(r)&&(r=null);const s=Ff(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:op++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:zp,get config(){return s.config},set config(u){},use(u,...d){return a.has(u)||(u&&Ke(u.install)?(a.add(u),u.install(c,...d)):Ke(u)&&(a.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const m=c._ceVNode||Lt(i,r);return m.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,Da(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(En(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=Mr;Mr=c;try{return u()}finally{Mr=d}}};return c}}let Mr=null;const cp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Mn(e)}Modifiers`]||n[`${Qi(e)}Modifiers`];function up(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let r=t;const s=e.startsWith("update:"),a=s&&cp(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Tt(u)?u.trim():u)),a.number&&(r=r.map(Nl)));let o,l=i[o=ka(e)]||i[o=ka(Mn(e))];!l&&s&&(l=i[o=ka(Qi(e))]),l&&En(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,En(c,n,6,r)}}const fp=new WeakMap;function Of(n,e,t=!1){const i=t?fp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ke(n)){const l=c=>{const u=Of(c,e,!0);u&&(o=!0,Ft(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(ht(n)&&i.set(n,null),null):($e(s)?s.forEach(l=>a[l]=null):Ft(a,s),ht(n)&&i.set(n,a),a)}function Ca(n,e){return!n||!xa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,Qi(e))||ct(n,e))}function Nc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:f,setupState:m,ctx:v,inheritAttrs:b}=n,g=aa(n);let h,y;try{if(t.shapeFlag&4){const x=r||i,A=x;h=Nn(c.call(A,x,u,d,m,f,v)),y=o}else{const x=e;h=Nn(x.length>1?x(d,{attrs:o,slots:a,emit:l}):x(d,null)),y=e.props?o:dp(o)}}catch(x){$i.length=0,Ta(x,n,1),h=Lt(hi)}let T=h;if(y&&b!==!1){const x=Object.keys(y),{shapeFlag:A}=T;x.length&&A&7&&(s&&x.some(Sa)&&(y=hp(y,s)),T=Ar(T,y,!1,!0))}if(t.dirs&&(T=Ar(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition){const x=Aa(T.type)&&Pf(T)||T;Xl(x,t.transition)}return h=T,aa(g),h}const dp=n=>{let e;for(const t in n)(t==="class"||t==="style"||xa(t))&&((e||(e={}))[t]=n[t]);return e},hp=(n,e)=>{const t={};for(const i in n)(!Sa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function pp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Fc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Bf(a,i,f)&&!Ca(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Fc(i,a,c):!0:!!a;return!1}function Fc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Bf(e,n,s)&&!Ca(t,s))return!0}return!1}function Bf(n,e,t){const i=n[t],r=e[t];return t==="style"&&ht(i)&&ht(r)?!ya(i,r):i!==r}function mp({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const zf={},kf=()=>Object.create(zf),Hf=n=>Object.getPrototypeOf(n)===zf;function gp(n,e,t,i=!1){const r={},s=kf();n.propsDefaults=Object.create(null),Vf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Th(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function _p(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=lt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ca(n.emitsOptions,f))continue;const m=e[f];if(l)if(ct(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const v=Mn(f);r[v]=ko(l,o,v,m,n,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Vf(n,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!ct(e,d)&&((u=Qi(d))===d||!ct(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=ko(l,o,d,void 0,n,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!ct(e,d))&&(delete s[d],c=!0)}c&&ni(n.attrs,"set","")}function Vf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Zr(l))continue;const c=e[l];let u;r&&ct(r,u=Mn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ca(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=lt(t),c=o||gt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=ko(r,l,d,c[d],n,!ct(c,d))}}return a}function ko(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ct(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ds(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Qi(t))&&(i=!0))}return i}const vp=new WeakMap;function Gf(n,e,t=!1){const i=t?vp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ke(n)){const u=d=>{l=!0;const[f,m]=Gf(d,e,!0);Ft(a,f),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,xr),xr;if($e(s))for(let u=0;u<s.length;u++){const d=Mn(s[u]);Oc(d)&&(a[d]=gt)}else if(s)for(const u in s){const d=Mn(u);if(Oc(d)){const f=s[u],m=a[d]=$e(f)||Ke(f)?{type:f}:Ft({},f),v=m.type;let b=!1,g=!0;if($e(v))for(let h=0;h<v.length;++h){const y=v[h],T=Ke(y)&&y.name;if(T==="Boolean"){b=!0;break}else T==="String"&&(g=!1)}else b=Ke(v)&&v.name==="Boolean";m[0]=b,m[1]=g,(b||ct(m,"default"))&&o.push(d)}}const c=[a,o];return ht(n)&&i.set(n,c),c}function Oc(n){return n[0]!=="$"&&!Zr(n)}const Yl=n=>n==="_"||n==="_ctx"||n==="$stable",Kl=n=>$e(n)?n.map(Nn):[Nn(n)],xp=(n,e,t)=>{if(e._n)return e;const i=Oh((...r)=>Kl(e(...r)),t);return i._c=!1,i},Wf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Yl(r))continue;const s=n[r];if(Ke(s))e[r]=xp(r,s,i);else if(s!=null){const a=Kl(s);e[r]=()=>a}}},Xf=(n,e)=>{const t=Kl(e);n.slots.default=()=>t},qf=(n,e,t)=>{for(const i in e)(t||!Yl(i))&&(n[i]=e[i])},Sp=(n,e,t)=>{const i=n.slots=kf();if(n.vnode.shapeFlag&32){const r=e._;r?(qf(i,e,t),t&&nf(i,"_",r,!0)):Wf(e,i)}else e&&Xf(n,e)},Mp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=gt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:qf(r,e,t):(s=!e.$stable,Wf(e,r)),a=e}else e&&(Xf(n,e),a={default:1});if(s)for(const o in r)!Yl(o)&&a[o]==null&&delete r[o]},Jt=Ap;function bp(n){return yp(n)}function yp(n,e){const t=ba();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=kn,insertStaticContent:v}=n,b=(P,I,W,Q=null,K=null,ee=null,de=void 0,ce=null,oe=!!I.dynamicChildren)=>{if(P===I)return;P&&!Fr(P,I)&&(Q=me(P),Te(P,K,ee,!0),P=null),I.patchFlag===-2&&(oe=!1,I.dynamicChildren=null);const{type:j,ref:Ce,shapeFlag:C}=I;switch(j){case Pa:g(P,I,W,Q);break;case hi:h(P,I,W,Q);break;case Ks:P==null&&y(I,W,Q,de);break;case St:k(P,I,W,Q,K,ee,de,ce,oe);break;default:C&1?A(P,I,W,Q,K,ee,de,ce,oe):C&6?te(P,I,W,Q,K,ee,de,ce,oe):(C&64||C&128)&&j.process(P,I,W,Q,K,ee,de,ce,oe,Xe)}Ce!=null&&K?jr(Ce,P&&P.ref,ee,I||P,!I):Ce==null&&P&&P.ref!=null&&jr(P.ref,null,ee,P,!0)},g=(P,I,W,Q)=>{if(P==null)i(I.el=o(I.children),W,Q);else{const K=I.el=P.el;I.children!==P.children&&c(K,I.children)}},h=(P,I,W,Q)=>{P==null?i(I.el=l(I.children||""),W,Q):I.el=P.el},y=(P,I,W,Q)=>{[P.el,P.anchor]=v(P.children,I,W,Q,P.el,P.anchor)},T=({el:P,anchor:I},W,Q)=>{let K;for(;P&&P!==I;)K=f(P),i(P,W,Q),P=K;i(I,W,Q)},x=({el:P,anchor:I})=>{let W;for(;P&&P!==I;)W=f(P),r(P),P=W;r(I)},A=(P,I,W,Q,K,ee,de,ce,oe)=>{if(I.type==="svg"?de="svg":I.type==="math"&&(de="mathml"),P==null)M(I,W,Q,K,ee,de,ce,oe);else{const j=P.el&&P.el._isVueCE?P.el:null;try{j&&j._beginPatch(),w(P,I,K,ee,de,ce,oe)}finally{j&&j._endPatch()}}},M=(P,I,W,Q,K,ee,de,ce)=>{let oe,j;const{props:Ce,shapeFlag:C,transition:De,dirs:be}=P;if(oe=P.el=a(P.type,ee,Ce&&Ce.is,Ce),C&8?u(oe,P.children):C&16&&_(P.children,oe,null,Q,K,Ya(P,ee),de,ce),be&&Li(P,null,Q,"created"),R(oe,P,P.scopeId,de,Q),Ce){for(const p in Ce)p!=="value"&&!Zr(p)&&s(oe,p,null,Ce[p],ee,Q);"value"in Ce&&s(oe,"value",null,Ce.value,ee),(j=Ce.onVnodeBeforeMount)&&Pn(j,Q,P)}be&&Li(P,null,Q,"beforeMount");const E=Ep(K,De);E&&De.beforeEnter(oe),i(oe,I,W),((j=Ce&&Ce.onVnodeMounted)||E||be)&&Jt(()=>{try{j&&Pn(j,Q,P),E&&De.enter(oe),be&&Li(P,null,Q,"mounted")}finally{}},K)},R=(P,I,W,Q,K)=>{if(W&&m(P,W),Q)for(let ee=0;ee<Q.length;ee++)m(P,Q[ee]);if(K){let ee=K.subTree;if(I===ee||Zf(ee.type)&&(ee.ssContent===I||ee.ssFallback===I)){const de=K.vnode;R(P,de,de.scopeId,de.slotScopeIds,K.parent)}}},_=(P,I,W,Q,K,ee,de,ce,oe=0)=>{for(let j=oe;j<P.length;j++){const Ce=P[j]=ce?ti(P[j]):Nn(P[j]);b(null,Ce,I,W,Q,K,ee,de,ce)}},w=(P,I,W,Q,K,ee,de)=>{const ce=I.el=P.el;let{patchFlag:oe,dynamicChildren:j,dirs:Ce}=I;oe|=P.patchFlag&16;const C=P.props||gt,De=I.props||gt;let be;if(W&&Ui(W,!1),(be=De.onVnodeBeforeUpdate)&&Pn(be,W,I,P),Ce&&Li(I,P,W,"beforeUpdate"),W&&Ui(W,!0),j&&(!P.dynamicChildren||P.dynamicChildren.length!==j.length)&&(oe=0,de=!1,j=null),(C.innerHTML&&De.innerHTML==null||C.textContent&&De.textContent==null)&&u(ce,""),j?N(P.dynamicChildren,j,ce,W,Q,Ya(I,K),ee):de||Y(P,I,ce,null,W,Q,Ya(I,K),ee,!1),oe>0){if(oe&16)L(ce,C,De,W,K);else if(oe&2&&C.class!==De.class&&s(ce,"class",null,De.class,K),oe&4&&s(ce,"style",C.style,De.style,K),oe&8){const E=I.dynamicProps;for(let p=0;p<E.length;p++){const U=E[p],B=C[U],q=De[U];(q!==B||U==="value")&&s(ce,U,B,q,K,W)}}oe&1&&P.children!==I.children&&u(ce,I.children)}else!de&&j==null&&L(ce,C,De,W,K);((be=De.onVnodeUpdated)||Ce)&&Jt(()=>{be&&Pn(be,W,I,P),Ce&&Li(I,P,W,"updated")},Q)},N=(P,I,W,Q,K,ee,de)=>{for(let ce=0;ce<I.length;ce++){const oe=P[ce],j=I[ce],Ce=oe.el&&(oe.type===St||!Fr(oe,j)||oe.shapeFlag&198)?d(oe.el):W;b(oe,j,Ce,null,Q,K,ee,de,!0)}},L=(P,I,W,Q,K)=>{if(I!==W){if(I!==gt)for(const ee in I)!Zr(ee)&&!(ee in W)&&s(P,ee,I[ee],null,K,Q);for(const ee in W){if(Zr(ee))continue;const de=W[ee],ce=I[ee];de!==ce&&ee!=="value"&&s(P,ee,ce,de,K,Q)}"value"in W&&s(P,"value",I.value,W.value,K)}},k=(P,I,W,Q,K,ee,de,ce,oe)=>{const j=I.el=P?P.el:o(""),Ce=I.anchor=P?P.anchor:o("");let{patchFlag:C,dynamicChildren:De,slotScopeIds:be}=I;be&&(ce=ce?ce.concat(be):be),P==null?(i(j,W,Q),i(Ce,W,Q),_(I.children||[],W,Ce,K,ee,de,ce,oe)):C>0&&C&64&&De&&P.dynamicChildren&&P.dynamicChildren.length===De.length?(N(P.dynamicChildren,De,W,K,ee,de,ce),(I.key!=null||K&&I===K.subTree)&&$f(P,I,!0)):Y(P,I,W,Ce,K,ee,de,ce,oe)},te=(P,I,W,Q,K,ee,de,ce,oe)=>{I.slotScopeIds=ce,P==null?I.shapeFlag&512?K.ctx.activate(I,W,Q,de,oe):se(I,W,Q,K,ee,de,oe):V(P,I,oe)},se=(P,I,W,Q,K,ee,de)=>{const ce=P.component=Ip(P,Q,K);if(ql(P)&&(ce.ctx.renderer=Xe),Up(ce,!1,de),ce.asyncDep){if(K&&K.registerDep(ce,J,de),!P.el){const oe=ce.subTree=Lt(hi);h(null,oe,I,W),P.placeholder=oe.el}}else J(ce,P,I,W,K,ee,de)},V=(P,I,W)=>{const Q=I.component=P.component;if(pp(P,I,W))if(Q.asyncDep&&!Q.asyncResolved){z(Q,I,W);return}else Q.next=I,Q.update();else I.el=P.el,Q.vnode=I},J=(P,I,W,Q,K,ee,de)=>{const ce=()=>{if(P.isMounted){let{next:C,bu:De,u:be,parent:E,vnode:p}=P;{const pe=Yf(P);if(pe){C&&(C.el=p.el,z(P,C,de)),pe.asyncDep.then(()=>{Jt(()=>{P.isUnmounted||j()},K)});return}}let U=C,B;Ui(P,!1),C?(C.el=p.el,z(P,C,de)):C=p,De&&$s(De),(B=C.props&&C.props.onVnodeBeforeUpdate)&&Pn(B,E,C,p),Ui(P,!0);const q=Nc(P),ue=P.subTree;P.subTree=q,b(ue,q,d(ue.el),me(ue),P,K,ee),C.el=q.el,U===null&&mp(P,q.el),be&&Jt(be,K),(B=C.props&&C.props.onVnodeUpdated)&&Jt(()=>Pn(B,E,C,p),K)}else{let C;const{el:De,props:be}=I,{bm:E,m:p,parent:U,root:B,type:q}=P,ue=es(I);Ui(P,!1),E&&$s(E),!ue&&(C=be&&be.onVnodeBeforeMount)&&Pn(C,U,I),Ui(P,!0);{B.ce&&B.ce._hasShadowRoot()&&B.ce._injectChildStyle(q,P.parent?P.parent.type:void 0);const pe=P.subTree=Nc(P);b(null,pe,W,Q,P,K,ee),I.el=pe.el}if(p&&Jt(p,K),!ue&&(C=be&&be.onVnodeMounted)){const pe=I;Jt(()=>Pn(C,U,pe),K)}(I.shapeFlag&256||U&&es(U.vnode)&&U.vnode.shapeFlag&256)&&P.a&&Jt(P.a,K),P.isMounted=!0,I=W=Q=null}};P.scope.on();const oe=P.effect=new of(ce);P.scope.off();const j=P.update=oe.run.bind(oe),Ce=P.job=oe.runIfDirty.bind(oe);Ce.i=P,Ce.id=P.uid,oe.scheduler=()=>Wl(Ce),Ui(P,!0),j()},z=(P,I,W)=>{I.component=P;const Q=P.vnode.props;P.vnode=I,P.next=null,_p(P,I.props,Q,W),Mp(P,I.children,W),ui(),Rc(P),fi()},Y=(P,I,W,Q,K,ee,de,ce,oe=!1)=>{const j=P&&P.children,Ce=P?P.shapeFlag:0,C=I.children,{patchFlag:De,shapeFlag:be}=I;if(De>0){if(De&128){_e(j,C,W,Q,K,ee,de,ce,oe);return}else if(De&256){le(j,C,W,Q,K,ee,de,ce,oe);return}}be&8?(Ce&16&&ne(j,K,ee),C!==j&&u(W,C)):Ce&16?be&16?_e(j,C,W,Q,K,ee,de,ce,oe):ne(j,K,ee,!0):(Ce&8&&u(W,""),be&16&&_(C,W,Q,K,ee,de,ce,oe))},le=(P,I,W,Q,K,ee,de,ce,oe)=>{P=P||xr,I=I||xr;const j=P.length,Ce=I.length,C=Math.min(j,Ce);let De;for(De=0;De<C;De++){const be=I[De]=oe?ti(I[De]):Nn(I[De]);b(P[De],be,W,null,K,ee,de,ce,oe)}j>Ce?ne(P,K,ee,!0,!1,C):_(I,W,Q,K,ee,de,ce,oe,C)},_e=(P,I,W,Q,K,ee,de,ce,oe)=>{let j=0;const Ce=I.length;let C=P.length-1,De=Ce-1;for(;j<=C&&j<=De;){const be=P[j],E=I[j]=oe?ti(I[j]):Nn(I[j]);if(Fr(be,E))b(be,E,W,null,K,ee,de,ce,oe);else break;j++}for(;j<=C&&j<=De;){const be=P[C],E=I[De]=oe?ti(I[De]):Nn(I[De]);if(Fr(be,E))b(be,E,W,null,K,ee,de,ce,oe);else break;C--,De--}if(j>C){if(j<=De){const be=De+1,E=be<Ce?I[be].el:Q;for(;j<=De;)b(null,I[j]=oe?ti(I[j]):Nn(I[j]),W,E,K,ee,de,ce,oe),j++}}else if(j>De)for(;j<=C;)Te(P[j],K,ee,!0),j++;else{const be=j,E=j,p=new Map;for(j=E;j<=De;j++){const he=I[j]=oe?ti(I[j]):Nn(I[j]);he.key!=null&&p.set(he.key,j)}let U,B=0;const q=De-E+1;let ue=!1,pe=0;const Z=new Array(q);for(j=0;j<q;j++)Z[j]=0;for(j=be;j<=C;j++){const he=P[j];if(B>=q){Te(he,K,ee,!0);continue}let Ie;if(he.key!=null)Ie=p.get(he.key);else for(U=E;U<=De;U++)if(Z[U-E]===0&&Fr(he,I[U])){Ie=U;break}Ie===void 0?Te(he,K,ee,!0):(Z[Ie-E]=j+1,Ie>=pe?pe=Ie:ue=!0,b(he,I[Ie],W,null,K,ee,de,ce,oe),B++)}const ie=ue?Tp(Z):xr;for(U=ie.length-1,j=q-1;j>=0;j--){const he=E+j,Ie=I[he],Se=I[he+1],ge=he+1<Ce?Se.el||Kf(Se):Q;Z[j]===0?b(null,Ie,W,ge,K,ee,de,ce,oe):ue&&(U<0||j!==ie[U]?ve(Ie,W,ge,2):U--)}}},ve=(P,I,W,Q,K=null)=>{const{el:ee,type:de,transition:ce,children:oe,shapeFlag:j}=P;if(j&6){ve(P.component.subTree,I,W,Q);return}if(j&128){P.suspense.move(I,W,Q);return}if(j&64){de.move(P,I,W,Xe);return}if(de===St){i(ee,I,W);for(let C=0;C<oe.length;C++)ve(oe[C],I,W,Q);i(P.anchor,I,W);return}if(de===Ks){T(P,I,W);return}if(Q!==2&&j&1&&ce)if(Q===0)ce.persisted&&!ee[qa]?i(ee,I,W):(ce.beforeEnter(ee),i(ee,I,W),Jt(()=>ce.enter(ee),K));else{const{leave:C,delayLeave:De,afterLeave:be}=ce,E=()=>{P.ctx.isUnmounted?r(ee):i(ee,I,W)},p=()=>{const U=ee._isLeaving||!!ee[qa];ee._isLeaving&&ee[qa](!0),ce.persisted&&!U?E():C(ee,()=>{E(),be&&be()})};De?De(ee,E,p):p()}else i(ee,I,W)},Te=(P,I,W,Q=!1,K=!1)=>{const{type:ee,props:de,ref:ce,children:oe,dynamicChildren:j,shapeFlag:Ce,patchFlag:C,dirs:De,cacheIndex:be,memo:E}=P;if(C===-2&&(K=!1),ce!=null&&(ui(),jr(ce,null,W,P,!0),fi()),be!=null&&(I.renderCache[be]=void 0),Ce&256){I.ctx.deactivate(P);return}const p=Ce&1&&De,U=!es(P);let B;if(U&&(B=de&&de.onVnodeBeforeUnmount)&&Pn(B,I,P),Ce&6)rt(P.component,W,Q);else{if(Ce&128){P.suspense.unmount(W,Q);return}p&&Li(P,null,I,"beforeUnmount"),Ce&64?P.type.remove(P,I,W,Xe,Q):j&&!j.hasOnce&&(ee!==St||C>0&&C&64)?ne(j,I,W,!1,!0):(ee===St&&C&384||!K&&Ce&16)&&ne(oe,I,W),Q&&it(P)}const q=E!=null&&be==null;(U&&(B=de&&de.onVnodeUnmounted)||p||q)&&Jt(()=>{B&&Pn(B,I,P),p&&Li(P,null,I,"unmounted"),q&&(P.el=null)},W)},it=P=>{const{type:I,el:W,anchor:Q,transition:K}=P;if(I===St){Mt(W,Q);return}if(I===Ks){x(P);return}const ee=()=>{r(W),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(P.shapeFlag&1&&K&&!K.persisted){const{leave:de,delayLeave:ce}=K,oe=()=>de(W,ee);ce?ce(P.el,ee,oe):oe()}else ee()},Mt=(P,I)=>{let W;for(;P!==I;)W=f(P),r(P),P=W;r(I)},rt=(P,I,W)=>{const{bum:Q,scope:K,job:ee,subTree:de,um:ce,m:oe,a:j}=P;Bc(oe),Bc(j),Q&&$s(Q),K.stop(),ee&&(ee.flags|=8,Te(de,P,I,W)),ce&&Jt(ce,I),Jt(()=>{P.isUnmounted=!0},I)},ne=(P,I,W,Q=!1,K=!1,ee=0)=>{for(let de=ee;de<P.length;de++)Te(P[de],I,W,Q,K)},me=P=>{if(P.shapeFlag&6)return me(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const I=f(P.anchor||P.el),W=I&&I[Vh];return W?f(W):I};let fe=!1;const We=(P,I,W)=>{let Q;P==null?I._vnode&&(Te(I._vnode,null,null,!0),Q=I._vnode.component):b(I._vnode||null,P,I,null,null,null,W),I._vnode=P,fe||(fe=!0,Rc(Q),Tf(),fe=!1)},Xe={p:b,um:Te,m:ve,r:it,mt:se,mc:_,pc:Y,pbc:N,n:me,o:n};return{render:We,hydrate:void 0,createApp:lp(We)}}function Ya({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ep(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function $f(n,e,t=!1){const i=n.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ti(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&$f(a,o)),o.type===Pa&&(o.patchFlag===-1&&(o=r[s]=ti(o)),o.el=a.el),o.type===hi&&!o.el&&(o.el=a.el)}}function Tp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Yf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yf(e)}function Bc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Kf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Kf(e.subTree):null}const Zf=n=>n.__isSuspense;function Ap(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Fh(n)}const St=Symbol.for("v-fgt"),Pa=Symbol.for("v-txt"),hi=Symbol.for("v-cmt"),Ks=Symbol.for("v-stc"),$i=[];let rn=null;function Ee(n=!1){$i.push(rn=n?null:[])}function Jf(){$i.pop(),rn=$i[$i.length-1]||null}let ss=1;function zc(n,e=!1){ss+=n,n<0&&rn&&e&&(rn.hasOnce=!0)}function Qf(n){return n.dynamicChildren=ss>0?rn||xr:null,Jf(),ss>0&&rn&&rn.push(n),n}function Pe(n,e,t,i,r,s){return Qf(D(n,e,t,i,r,s,!0))}function qr(n,e,t,i,r){return Qf(Lt(n,e,t,i,r,!0))}function jf(n){return n?n.__v_isVNode===!0:!1}function Fr(n,e){return n.type===e.type&&n.key===e.key}const ed=({key:n})=>n??null,Zs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||Vt(n)||Ke(n)?{i:dn,r:n,k:e,f:!!t}:n:null);function D(n,e=null,t=null,i=0,r=null,s=n===St?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ed(e),ref:e&&Zs(e),scopeId:wf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dn};return o?(ca(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),ss>0&&!a&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const Lt=wp;function wp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ep)&&(n=hi),jf(n)){const o=Ar(n,e,!0);return t&&ca(o,t),ss>0&&!s&&rn&&(o.shapeFlag&6?rn[rn.indexOf(n)]=o:rn.push(o)),o.patchFlag=-2,o}if(Bp(n)&&(n=n.__vccOpts),e){e=Rp(e);let{class:o,style:l}=e;o&&!Tt(o)&&(e.class=fn(o)),ht(l)&&(Gl(l)&&!$e(l)&&(l=Ft({},l)),e.style=Dr(l))}const a=Tt(n)?1:Zf(n)?128:Aa(n)?64:ht(n)?4:Ke(n)?2:0;return D(n,e,t,i,r,a,s,!0)}function Rp(n){return n?Gl(n)||Hf(n)?Ft({},n):n:null}function Ar(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Cp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ed(c),ref:e&&e.ref?t&&s?$e(s)?s.concat(Zs(e)):[s,Zs(e)]:Zs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==St?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ar(n.ssContent),ssFallback:n.ssFallback&&Ar(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Xl(u,l.clone(u)),u}function hn(n=" ",e=0){return Lt(Pa,null,n,e)}function Ir(n,e){const t=Lt(Ks,null,n);return t.staticCount=e,t}function Yt(n="",e=!1){return e?(Ee(),qr(hi,null,n)):Lt(hi,null,n)}function Nn(n){return n==null||typeof n=="boolean"?Lt(hi):$e(n)?Lt(St,null,n.slice()):jf(n)?ti(n):Lt(Pa,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ar(n)}function ca(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ca(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Hf(e)?e._ctx=dn:r===3&&dn&&(dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ke(e)){if(i&65){ca(n,{default:e});return}e={default:e,_ctx:dn},t=32}else e=String(e),i&64?(t=16,e=[hn(e)]):t=8;n.children=e,n.shapeFlag|=t}function Cp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=fn([e.class,i.class]));else if(r==="style")e.style=Dr([e.style,i.style]);else if(xa(r)){const s=e[r],a=i[r];a&&s!==a&&!($e(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!Sa(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function Pn(n,e,t,i=null){En(n,e,7,[t,i])}const Pp=Ff();let Dp=0;function Ip(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Pp,s={uid:Dp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(i,r),emitsOptions:Of(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=up.bind(null,s),n.ce&&n.ce(s),s}let $t=null;const Lp=()=>$t||dn;let ua,as;{const n=ba(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ua=e("__VUE_INSTANCE_SETTERS__",t=>$t=t),as=e("__VUE_SSR_SETTERS__",t=>os=t)}const ds=n=>{const e=$t;return ua(n),n.scope.on(),()=>{n.scope.off(),ua(e)}},kc=()=>{$t&&$t.scope.off(),ua(null)};function td(n){return n.vnode.shapeFlag&4}let os=!1;function Up(n,e=!1,t=!1){e&&as(e);const{props:i,children:r}=n.vnode,s=td(n);gp(n,i,s,e),Sp(n,r,t||e);const a=s?Np(n,e):void 0;return e&&as(!1),a}function Np(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,tp);const{setup:i}=t;if(i){ui();const r=n.setupContext=i.length>1?Op(n):null,s=ds(n),a=fs(i,n,0,[n.props,r]),o=Qu(a);if(fi(),s(),(o||n.sp)&&!es(n)&&Df(n),o){if(a.then(kc,kc),e)return a.then(l=>{as(!0);try{Hc(n,l,e)}finally{as(!1)}}).catch(l=>{Ta(l,n,0)});n.asyncDep=a}else Hc(n,a)}else nd(n)}function Hc(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=Mf(e)),nd(n)}function nd(n,e,t){const i=n.type;n.render||(n.render=i.render||kn);{const r=ds(n);ui();try{np(n)}finally{fi(),r()}}}const Fp={get(n,e){return kt(n,"get",""),n[e]}};function Op(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Fp),slots:n.slots,emit:n.emit,expose:e}}function Da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mf(Ah(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ts)return ts[t](n)},has(e,t){return t in e||t in ts}})):n.proxy}function Bp(n){return Ke(n)&&"__vccOpts"in n}const Yi=(n,e)=>Dh(n,e,os),zp="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ho;const Vc=typeof window<"u"&&window.trustedTypes;if(Vc)try{Ho=Vc.createPolicy("vue",{createHTML:n=>n})}catch{}const id=Ho?n=>Ho.createHTML(n):n=>n,kp="http://www.w3.org/2000/svg",Hp="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,Gc=ei&&ei.createElement("template"),Vp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ei.createElementNS(kp,n):e==="mathml"?ei.createElementNS(Hp,n):t?ei.createElement(n,{is:t}):ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Gc.innerHTML=id(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Gc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gp=Symbol("_vtc");function Wp(n,e,t){const i=n[Gp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const fa=Symbol("_vod"),rd=Symbol("_vsh"),Xp={name:"show",beforeMount(n,{value:e},{transition:t}){n[fa]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Or(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Or(n,!0),i.enter(n)):i.leave(n,()=>{Or(n,!1)}):Or(n,e))},beforeUnmount(n,{value:e}){Or(n,e)}};function Or(n,e){n.style.display=e?n[fa]:"none",n[rd]=!e}const qp=Symbol(""),$p=/(?:^|;)\s*display\s*:/;function Yp(n,e,t){const i=n.style,r=Tt(t);let s=!1;if(t&&!r){if(e)if(Tt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&$r(i,o,"")}else for(const a in e)t[a]==null&&$r(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?Zp(n,a,!Tt(e)&&e?e[a]:void 0,o)||$r(i,a,o):$r(i,a,"")}}else if(r){if(e!==t){const a=i[qp];a&&(t+=";"+a),i.cssText=t,s=$p.test(t)}}else e&&n.removeAttribute("style");fa in n&&(n[fa]=s?i.display:"",n[rd]&&(i.display="none"))}const Ms=/\s*!important$/;function $r(n,e,t){if($e(t))t.forEach(i=>$r(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Ms.test(t)?n.setProperty(e,t.replace(Ms,""),"important"):n.setProperty(e,t);else{const i=Kp(n,e);Ms.test(t)?n.setProperty(Qi(i),t.replace(Ms,""),"important"):n[i]=t}}const Wc=["Webkit","Moz","ms"],Ka={};function Kp(n,e){const t=Ka[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return Ka[e]=i;i=tf(i);for(let r=0;r<Wc.length;r++){const s=Wc[r]+i;if(s in n)return Ka[e]=s}return e}function Zp(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Tt(i)&&t===i}const Xc="http://www.w3.org/1999/xlink";function qc(n,e,t,i,r,s=rh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Xc,e.slice(6,e.length)):n.setAttributeNS(Xc,e,t):t==null||s&&!rf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Wn(t)?String(t):t)}function $c(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?id(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=rf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function vr(n,e,t,i){n.addEventListener(e,t,i)}function Jp(n,e,t,i){n.removeEventListener(e,t,i)}const Yc=Symbol("_vei");function Qp(n,e,t,i,r=null){const s=n[Yc]||(n[Yc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=tm(e);if(i){const c=s[e]=rm(i,r);vr(n,o,c,l)}else a&&(Jp(n,o,a,l),s[e]=void 0)}}const jp=/(Once|Passive|Capture)$/,em=/^on:?(?:Once|Passive|Capture)$/;function tm(n){let e,t;for(;(t=n.match(jp))&&!em.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Qi(n.slice(2)),e]}let Za=0;const nm=Promise.resolve(),im=()=>Za||(nm.then(()=>Za=0),Za=Date.now());function rm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if($e(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&En(c,e,5,o)}}else En(r,e,5,[i])};return t.value=n,t.attached=im(),t}const Kc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,sm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Wp(n,i,a):e==="style"?Yp(n,t,i):xa(e)?Sa(e)||Qp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):am(n,e,i,a))?($c(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qc(n,e,i,a,s,e!=="value")):n._isVueCE&&(om(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Tt(i)))?$c(n,Mn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),qc(n,e,i,a))};function am(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Kc(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Kc(e)&&Tt(t)?!1:e in n}function om(n,e){const t=n._def.props;if(!t)return!1;const i=Mn(e);return Array.isArray(t)?t.some(r=>Mn(r)===i):Object.keys(t).some(r=>Mn(r)===i)}const Zc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>$s(e,t):e};function lm(n){n.target.composing=!0}function Jc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bs=Symbol("_assign"),ys=Symbol("_initialValue");function Ja(n,e,t){return e&&(n=n.trim()),t&&(n=Nl(n)),n}const Ri={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[ys]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[ys]=n.defaultValue.replace(/\r\n?/g,`
`))),n[bs]=Zc(r);const s=i||r.props&&r.props.type==="number";vr(n,e?"change":"input",a=>{a.target.composing||n[bs](Ja(n.value,t,s))}),(t||s)&&vr(n,"change",()=>{n.value=Ja(n.value,t,s)}),e||(vr(n,"compositionstart",lm),vr(n,"compositionend",Jc),vr(n,"change",Jc))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[ys];delete n[ys],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[bs](Ja(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[bs]=Zc(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Nl(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},cm=["ctrl","shift","alt","meta"],um={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>cm.some(t=>n[`${t}Key`]&&!e.includes(t))},Ia=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=um[e[a]];if(o&&o(r,e))return}return n(r,...s)})},fm=Ft({patchProp:sm},Vp);let Qc;function dm(){return Qc||(Qc=bp(fm))}const hm=(...n)=>{const e=dm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=mm(i);if(!r)return;const s=e._component;!Ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,pm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function pm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function mm(n){return Tt(n)?document.querySelector(n):n}const gm={class:"container header-content"},_m={key:0,class:"mobile-nav"},vm=An({__name:"Header",setup(n){const e=ot(!1),t=ot(!1),i=ot(!1),r=()=>{e.value=window.scrollY>50},s=()=>{t.value=window.innerWidth<768,t.value===!1&&(i.value=!1)},a=()=>{i.value=!i.value},o=()=>{i.value=!1};return Ra(()=>{window.addEventListener("scroll",r),window.addEventListener("resize",s),s()}),$l(()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",s)}),(l,c)=>(Ee(),Pe("header",{class:fn(["header",{scrolled:e.value}])},[D("div",gm,[c[1]||(c[1]=Ir('<div class="logo" data-v-50a56130><h2 data-v-50a56130>BK</h2></div><nav class="nav" data-v-50a56130><a href="#about" class="nav-link" data-v-50a56130>About</a><a href="#skills" class="nav-link" data-v-50a56130>Skills</a><a href="#experience" class="nav-link" data-v-50a56130>Experience</a><a href="#projects" class="nav-link" data-v-50a56130>Projects</a><a href="#contact" class="nav-link" data-v-50a56130>Contact</a></nav><div class="social-links" style="background-color:var(--panel-strong);" data-v-50a56130><a href="https://github.com/behzadkazemi" target="_blank" rel="noopener noreferrer" title="GitHub" data-v-50a56130><svg class="icon" viewBox="0 0 24 24" fill="currentColor" data-v-50a56130><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-50a56130></path></svg></a><a href="https://linkedin.com/in/behzadkazemi" target="_blank" rel="noopener noreferrer" title="LinkedIn" data-v-50a56130><svg class="icon" viewBox="0 0 24 24" fill="currentColor" data-v-50a56130><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" data-v-50a56130></path></svg></a></div>',3)),ai(D("button",{class:"mobile-menu-btn",onClick:a},[...c[0]||(c[0]=[D("span",null,null,-1),D("span",null,null,-1),D("span",null,null,-1)])],512),[[Xp,t.value]])]),i.value?(Ee(),Pe("nav",_m,[D("a",{href:"#about",class:"nav-link",onClick:o},"About"),D("a",{href:"#skills",class:"nav-link",onClick:o},"Skills"),D("a",{href:"#experience",class:"nav-link",onClick:o},"Experience"),D("a",{href:"#projects",class:"nav-link",onClick:o},"Projects"),D("a",{href:"#contact",class:"nav-link",onClick:o},"Contact")])):Yt("",!0)],2))}}),an=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},xm=an(vm,[["__scopeId","data-v-50a56130"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zl="185",Sm=0,jc=1,Mm=2,Js=1,bm=2,Yr=3,Di=0,Qt=1,ri=2,li=0,br=1,eu=2,tu=3,nu=4,ym=5,Hi=100,Em=101,Tm=102,Am=103,wm=104,Rm=200,Cm=201,Pm=202,Dm=203,Vo=204,Go=205,Im=206,Lm=207,Um=208,Nm=209,Fm=210,Om=211,Bm=212,zm=213,km=214,Wo=0,Xo=1,qo=2,wr=3,$o=4,Yo=5,Ko=6,Zo=7,sd=0,Hm=1,Vm=2,Hn=0,ad=1,od=2,ld=3,cd=4,ud=5,fd=6,dd=7,hd=300,Ki=301,Rr=302,Qa=303,ja=304,La=306,Jo=1e3,oi=1001,Qo=1002,Nt=1003,Gm=1004,Es=1005,Ht=1006,eo=1007,Gi=1008,un=1009,pd=1010,md=1011,ls=1012,Jl=1013,Xn=1014,Bn=1015,pi=1016,Ql=1017,jl=1018,cs=1020,gd=35902,_d=35899,vd=1021,xd=1022,Sn=1023,mi=1026,Wi=1027,Sd=1028,ec=1029,Zi=1030,tc=1031,nc=1033,Qs=33776,js=33777,ea=33778,ta=33779,jo=35840,el=35841,tl=35842,nl=35843,il=36196,rl=37492,sl=37496,al=37488,ol=37489,da=37490,ll=37491,cl=37808,ul=37809,fl=37810,dl=37811,hl=37812,pl=37813,ml=37814,gl=37815,_l=37816,vl=37817,xl=37818,Sl=37819,Ml=37820,bl=37821,yl=36492,El=36494,Tl=36495,Al=36283,wl=36284,ha=36285,Rl=36286,Wm=3200,iu=0,Xm=1,wi="",nn="srgb",pa="srgb-linear",ma="linear",ft="srgb",ir=7680,ru=519,qm=512,$m=513,Ym=514,ic=515,Km=516,Zm=517,rc=518,Jm=519,su=35044,au="300 es",zn=2e3,ga=2001;function Qm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jm(){const n=_a("canvas");return n.style.display="block",n}const ou={};function lu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Md(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=Md(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=Md(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function yr(...n){const e=n.join(" ");e in ou||(ou[e]=!0,qe(...n))}function eg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const tg={[Wo]:Xo,[qo]:Ko,[$o]:Zo,[wr]:Yo,[Xo]:Wo,[Ko]:qo,[Zo]:$o,[Yo]:wr};class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Cl=180/Math.PI;function hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function ng(n,e){return(n%e+e)%e}function no(n,e,t){return(1-t)*n+t*e}function Br(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const cc=class cc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cc.prototype.isVector2=!0;let nt=cc;class Lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],b=s[a+3];if(d!==b||l!==f||c!==m||u!==v){let g=l*f+c*m+u*v+d*b;g<0&&(f=-f,m=-m,v=-v,b=-b,g=-g);let h=1-o;if(g<.9995){const y=Math.acos(g),T=Math.sin(y);h=Math.sin(h*y)/T,o=Math.sin(o*y)/T,l=l*h+f*o,c=c*h+m*o,u=u*h+v*o,d=d*h+b*o}else{l=l*h+f*o,c=c*h+m*o,u=u*h+v*o,d=d*h+b*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-o*m,e[t+2]=c*v+u*m+o*f-l*d,e[t+3]=u*v-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uc=class uc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uc.prototype.isVector3=!0;let H=uc;const io=new H,cu=new Lr,fc=class fc{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],v=i[8],b=r[0],g=r[3],h=r[6],y=r[1],T=r[4],x=r[7],A=r[2],M=r[5],R=r[8];return s[0]=a*b+o*y+l*A,s[3]=a*g+o*T+l*M,s[6]=a*h+o*x+l*R,s[1]=c*b+u*y+d*A,s[4]=c*g+u*T+d*M,s[7]=c*h+u*x+d*R,s[2]=f*b+m*y+v*A,s[5]=f*g+m*T+v*M,s[8]=f*h+m*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,m=c*s-a*l,v=t*d+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=d*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=f*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=m*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ro.makeScale(e,t)),this}rotate(e){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fc.prototype.isMatrix3=!0;let Ye=fc;const ro=new Ye,uu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ig(){const n={enabled:!0,workingColorSpace:pa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?ma:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pa]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const et=ig();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class rg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=_a("canvas")),rr.width=e.width,rr.height=e.height;const r=rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sg=0;class sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(so(r[a].image)):s.push(so(r[a]))}else s=so(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let ag=0;const ao=new H;class Kt extends ji{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=oi,r=oi,s=Ht,a=Gi,o=Sn,l=un,c=Kt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=hs(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jo:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jo:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=hd;Kt.DEFAULT_ANISOTROPY=1;const dc=class dc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],b=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(m+1)/2,A=(h+1)/2,M=(u+f)/4,R=(d+b)/4,_=(v+g)/4;return T>x&&T>A?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=M/i,s=R/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=M/r,s=_/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=_/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-v)*(g-v)+(d-b)*(d-b)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-v)/y,this.y=(d-b)/y,this.z=(f-u)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dc.prototype.isVector4=!0;let Et=dc;class og extends ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends og{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bd extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lg extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const va=class va{constructor(e,t,i,r,s,a,o,l,c,u,d,f,m,v,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,m,v,b,g)}set(e,t,i,r,s,a,o,l,c,u,d,f,m,v,b,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=v,h[11]=b,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*d,v=o*u,b=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,b=c*d;t[0]=f+b*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=b+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,b=c*d;t[0]=f-b*o,t[4]=-a*d,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=b-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,v=o*u,b=o*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+b,t[1]=l*d,t[5]=b*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=b-f*d,t[8]=v*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-b*d}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,b=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+b,t[5]=a*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=o*u,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cg,e,ug)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Si.crossVectors(i,en),Si.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Si.crossVectors(i,en)),Si.normalize(),Ts.crossVectors(en,Si),r[0]=Si.x,r[4]=Ts.x,r[8]=en.x,r[1]=Si.y,r[5]=Ts.y,r[9]=en.y,r[2]=Si.z,r[6]=Ts.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],v=i[2],b=i[6],g=i[10],h=i[14],y=i[3],T=i[7],x=i[11],A=i[15],M=r[0],R=r[4],_=r[8],w=r[12],N=r[1],L=r[5],k=r[9],te=r[13],se=r[2],V=r[6],J=r[10],z=r[14],Y=r[3],le=r[7],_e=r[11],ve=r[15];return s[0]=a*M+o*N+l*se+c*Y,s[4]=a*R+o*L+l*V+c*le,s[8]=a*_+o*k+l*J+c*_e,s[12]=a*w+o*te+l*z+c*ve,s[1]=u*M+d*N+f*se+m*Y,s[5]=u*R+d*L+f*V+m*le,s[9]=u*_+d*k+f*J+m*_e,s[13]=u*w+d*te+f*z+m*ve,s[2]=v*M+b*N+g*se+h*Y,s[6]=v*R+b*L+g*V+h*le,s[10]=v*_+b*k+g*J+h*_e,s[14]=v*w+b*te+g*z+h*ve,s[3]=y*M+T*N+x*se+A*Y,s[7]=y*R+T*L+x*V+A*le,s[11]=y*_+T*k+x*J+A*_e,s[15]=y*w+T*te+x*z+A*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],b=e[7],g=e[11],h=e[15],y=l*m-c*f,T=o*m-c*d,x=o*f-l*d,A=a*m-c*u,M=a*f-l*u,R=a*d-o*u;return t*(b*y-g*T+h*x)-i*(v*y-g*A+h*M)+r*(v*T-b*A+h*R)-s*(v*x-b*M+g*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],b=e[13],g=e[14],h=e[15],y=t*o-i*a,T=t*l-r*a,x=t*c-s*a,A=i*l-r*o,M=i*c-s*o,R=r*c-s*l,_=u*b-d*v,w=u*g-f*v,N=u*h-m*v,L=d*g-f*b,k=d*h-m*b,te=f*h-m*g,se=y*te-T*k+x*L+A*N-M*w+R*_;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/se;return e[0]=(o*te-l*k+c*L)*V,e[1]=(r*k-i*te-s*L)*V,e[2]=(b*R-g*M+h*A)*V,e[3]=(f*M-d*R-m*A)*V,e[4]=(l*N-a*te-c*w)*V,e[5]=(t*te-r*N+s*w)*V,e[6]=(g*x-v*R-h*T)*V,e[7]=(u*R-f*x+m*T)*V,e[8]=(a*k-o*N+c*_)*V,e[9]=(i*N-t*k-s*_)*V,e[10]=(v*M-b*x+h*y)*V,e[11]=(d*x-u*M-m*y)*V,e[12]=(o*w-a*L-l*_)*V,e[13]=(t*L-i*w+r*_)*V,e[14]=(b*T-v*A-g*y)*V,e[15]=(u*A-d*T+f*y)*V,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,m=s*u,v=s*d,b=a*u,g=a*d,h=o*d,y=l*c,T=l*u,x=l*d,A=i.x,M=i.y,R=i.z;return r[0]=(1-(b+h))*A,r[1]=(m+x)*A,r[2]=(v-T)*A,r[3]=0,r[4]=(m-x)*M,r[5]=(1-(f+h))*M,r[6]=(g+y)*M,r[7]=0,r[8]=(v+T)*R,r[9]=(g-y)*R,r[10]=(1-(f+b))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),l=sr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gn.copy(this);const c=1/a,u=1/o,d=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=zn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let v,b;if(l)v=s/(a-s),b=a*s/(a-s);else if(o===zn)v=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===ga)v=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=zn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let v,b;if(l)v=1/(a-s),b=a/(a-s);else if(o===zn)v=-2/(a-s),b=-(a+s)/(a-s);else if(o===ga)v=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};va.prototype.isMatrix4=!0;let Ct=va;const sr=new H,gn=new Ct,cg=new H(0,0,0),ug=new H(1,1,1),Si=new H,Ts=new H,en=new H,du=new Ct,hu=new Lr;class Ji{constructor(e=0,t=0,i=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fg=0;const pu=new H,ar=new Lr,Kn=new Ct,As=new H,zr=new H,dg=new H,hg=new Lr,mu=new H(1,0,0),gu=new H(0,1,0),_u=new H(0,0,1),vu={type:"added"},pg={type:"removed"},or={type:"childadded",child:null},oo={type:"childremoved",child:null};class sn extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new H,t=new Ji,i=new Lr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ye}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?As.copy(e):As.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(zr,As,this.up):Kn.lookAt(As,zr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Kn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),or.child=e,this.dispatchEvent(or),or.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pg),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new H(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ws extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),h=this._getHandJoint(c,b);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=ng(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=co(a,s,e+1/3),this.g=co(a,s,e),this.b=co(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return et.workingToColorSpace(zt.copy(this),e),Math.round(tt(zt.r*255,0,255))*65536+Math.round(tt(zt.g*255,0,255))*256+Math.round(tt(zt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=nn){et.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Rs);const i=no(Mi.h,Rs.h,t),r=no(Mi.s,Rs.s,t),s=no(Mi.l,Rs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ut;ut.NAMES=Ed;class gg extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _n=new H,Zn=new H,uo=new H,Jn=new H,lr=new H,cr=new H,xu=new H,fo=new H,ho=new H,po=new H,mo=new Et,go=new Et,_o=new Et;class xn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Zn.subVectors(i,t),uo.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Zn),l=_n.dot(uo),c=Zn.dot(Zn),u=Zn.dot(uo),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,v=(a*u-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,i),_o.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(mo,s.x),a.addScaledVector(go,s.y),a.addScaledVector(_o,s.z),a}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Zn.subVectors(e,t),_n.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),_n.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;lr.subVectors(r,i),cr.subVectors(s,i),fo.subVectors(e,i);const l=lr.dot(fo),c=cr.dot(fo);if(l<=0&&c<=0)return t.copy(i);ho.subVectors(e,r);const u=lr.dot(ho),d=cr.dot(ho);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(lr,a);po.subVectors(e,s);const m=lr.dot(po),v=cr.dot(po);if(v>=0&&m<=v)return t.copy(s);const b=m*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(cr,o);const g=u*v-m*d;if(g<=0&&d-u>=0&&m-v>=0)return xu.subVectors(s,r),o=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(xu,o);const h=1/(g+b+f);return a=b*h,o=f*h,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ps{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cs.copy(i.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Ps.subVectors(this.max,kr),ur.subVectors(e.a,kr),fr.subVectors(e.b,kr),dr.subVectors(e.c,kr),bi.subVectors(fr,ur),yi.subVectors(dr,fr),Ni.subVectors(ur,dr);let t=[0,-bi.z,bi.y,0,-yi.z,yi.y,0,-Ni.z,Ni.y,bi.z,0,-bi.x,yi.z,0,-yi.x,Ni.z,0,-Ni.x,-bi.y,bi.x,0,-yi.y,yi.x,0,-Ni.y,Ni.x,0];return!vo(t,ur,fr,dr,Ps)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,ur,fr,dr,Ps))?!1:(Ds.crossVectors(bi,yi),t=[Ds.x,Ds.y,Ds.z],vo(t,ur,fr,dr,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new H,new H,new H,new H,new H,new H,new H,new H],vn=new H,Cs=new ps,ur=new H,fr=new H,dr=new H,bi=new H,yi=new H,Ni=new H,kr=new H,Ps=new H,Ds=new H,Fi=new H;function vo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Fi.fromArray(n,s);const o=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),u=i.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Rt=new H,Is=new nt;let _g=0;class Gn extends ji{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_g++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=su,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Br(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Td extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ad extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const vg=new ps,Hr=new H,xo=new H;class ac{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(xo)),this.expandByPoint(Hr.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xg=0;const ln=new Ct,So=new sn,hr=new H,tn=new ps,Vr=new ps,It=new H;class $n extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qm(e)?Ad:Td)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(tn.min,Vr.min),tn.expandByPoint(It),It.addVectors(tn.max,Vr.max),tn.expandByPoint(It)):(tn.expandByPoint(Vr.min),tn.expandByPoint(Vr.max))}tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(e,c),It.add(hr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new H,l[_]=new H;const c=new H,u=new H,d=new H,f=new nt,m=new nt,v=new nt,b=new H,g=new H;function h(_,w,N){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,N),f.fromBufferAttribute(s,_),m.fromBufferAttribute(s,w),v.fromBufferAttribute(s,N),u.sub(c),d.sub(c),m.sub(f),v.sub(f);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(L),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(L),o[_].add(b),o[w].add(b),o[N].add(b),l[_].add(g),l[w].add(g),l[N].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,w=y.length;_<w;++_){const N=y[_],L=N.start,k=N.count;for(let te=L,se=L+k;te<se;te+=3)h(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const T=new H,x=new H,A=new H,M=new H;function R(_){A.fromBufferAttribute(r,_),M.copy(A);const w=o[_];T.copy(w),T.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(M,w);const L=x.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,L)}for(let _=0,w=y.length;_<w;++_){const N=y[_],L=N.start,k=N.count;for(let te=L,se=L+k;te<se;te+=3)R(e.getX(te+0)),R(e.getX(te+1)),R(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*u;for(let h=0;h<u;h++)f[v++]=c[m++]}return new Gn(f,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Sg=0;class Ua extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=br,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Go,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vo&&(i.blendSrc=this.blendSrc),this.blendDst!==Go&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jn=new H,Mo=new H,Ls=new H,Ei=new H,bo=new H,Us=new H,yo=new H;class Mg{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mo.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Mo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ls),o=Ei.dot(this.direction),l=-Ei.dot(Ls),c=Ei.lengthSq(),u=Math.abs(1-a*a);let d,f,m,v;if(u>0)if(d=a*l-o,f=a*o-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const b=1/u;d*=b,f*=b,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Mo).addScaledVector(Ls,f),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){bo.subVectors(t,e),Us.subVectors(i,e),yo.crossVectors(bo,Us);let a=this.direction.dot(yo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(Us.crossVectors(Ei,Us));if(l<0)return null;const c=o*this.direction.dot(bo.cross(Ei));if(c<0||l+c>a)return null;const u=-o*Ei.dot(yo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wd extends Ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Su=new Ct,Oi=new Mg,Ns=new ac,Mu=new H,Fs=new H,Os=new H,Bs=new H,Eo=new H,zs=new H,bu=new H,ks=new H;class qn extends sn{constructor(e=new $n,t=new wd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Eo.fromBufferAttribute(d,e),a?zs.addScaledVector(Eo,u):zs.addScaledVector(Eo.sub(t),u))}t.add(zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Ns.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Ns,Mu)===null||Oi.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(Su.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Su),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=f.length;v<b;v++){const g=f[v],h=a[g.materialIndex],y=Math.max(g.start,m.start),T=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let x=y,A=T;x<A;x+=3){const M=o.getX(x),R=o.getX(x+1),_=o.getX(x+2);r=Hs(this,h,e,i,c,u,d,M,R,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=v,h=b;g<h;g+=3){const y=o.getX(g),T=o.getX(g+1),x=o.getX(g+2);r=Hs(this,a,e,i,c,u,d,y,T,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=f.length;v<b;v++){const g=f[v],h=a[g.materialIndex],y=Math.max(g.start,m.start),T=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let x=y,A=T;x<A;x+=3){const M=x,R=x+1,_=x+2;r=Hs(this,h,e,i,c,u,d,M,R,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=v,h=b;g<h;g+=3){const y=g,T=g+1,x=g+2;r=Hs(this,a,e,i,c,u,d,y,T,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function bg(n,e,t,i,r,s,a,o){let l;if(e.side===Qt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Di,o),l===null)return null;ks.copy(o),ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:n}}function Hs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Fs),n.getVertexPosition(l,Os),n.getVertexPosition(c,Bs);const u=bg(n,e,t,i,Fs,Os,Bs,bu);if(u){const d=new H;xn.getBarycoord(bu,Fs,Os,Bs,d),r&&(u.uv=xn.getInterpolatedAttribute(r,o,l,c,d,new nt)),s&&(u.uv1=xn.getInterpolatedAttribute(s,o,l,c,d,new nt)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};xn.getNormal(Fs,Os,Bs,f.normal),u.face=f,u.barycoord=d}return u}class yg extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Nt,u=Nt,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const To=new H,Eg=new H,Tg=new Ye;class ki{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=To.subVectors(i,t).cross(Eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(To),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tg.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new ac,Ag=new nt(.5,.5),Vs=new H;class Rd{constructor(e=new ki,t=new ki,i=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],m=s[7],v=s[8],b=s[9],g=s[10],h=s[11],y=s[12],T=s[13],x=s[14],A=s[15];if(r[0].setComponents(c-a,m-u,h-v,A-y).normalize(),r[1].setComponents(c+a,m+u,h+v,A+y).normalize(),r[2].setComponents(c+o,m+d,h+b,A+T).normalize(),r[3].setComponents(c-o,m-d,h-b,A-T).normalize(),i)r[4].setComponents(l,f,g,x).normalize(),r[5].setComponents(c-l,m-f,h-g,A-x).normalize();else if(r[4].setComponents(c-l,m-f,h-g,A-x).normalize(),t===zn)r[5].setComponents(c+l,m+f,h+g,A+x).normalize();else if(t===ga)r[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=Ag.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cd extends Kt{constructor(e=[],t=Ki,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cr extends Kt{constructor(e,t,i=Xn,r,s,a,o=Nt,l=Nt,c,u=mi,d=1){if(u!==mi&&u!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wg extends Cr{constructor(e,t=Xn,i=Ki,r,s,a=Nt,o=Nt,l,c=mi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Pd extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ms extends $n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(d,2));function v(b,g,h,y,T,x,A,M,R,_,w){const N=x/R,L=A/_,k=x/2,te=A/2,se=M/2,V=R+1,J=_+1;let z=0,Y=0;const le=new H;for(let _e=0;_e<J;_e++){const ve=_e*L-te;for(let Te=0;Te<V;Te++){const it=Te*N-k;le[b]=it*y,le[g]=ve*T,le[h]=se,c.push(le.x,le.y,le.z),le[b]=0,le[g]=0,le[h]=M>0?1:-1,u.push(le.x,le.y,le.z),d.push(Te/R),d.push(1-_e/_),z+=1}}for(let _e=0;_e<_;_e++)for(let ve=0;ve<R;ve++){const Te=f+ve+V*_e,it=f+ve+V*(_e+1),Mt=f+(ve+1)+V*(_e+1),rt=f+(ve+1)+V*_e;l.push(Te,it,rt),l.push(it,Mt,rt),Y+=6}o.addGroup(m,Y,w),m+=Y,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oc extends $n{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new mn(s,3)),this.setAttribute("normal",new mn(s.slice(),3)),this.setAttribute("uv",new mn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new H,x=new H,A=new H;for(let M=0;M<t.length;M+=3)m(t[M+0],T),m(t[M+1],x),m(t[M+2],A),l(T,x,A,y)}function l(y,T,x,A){const M=A+1,R=[];for(let _=0;_<=M;_++){R[_]=[];const w=y.clone().lerp(x,_/M),N=T.clone().lerp(x,_/M),L=M-_;for(let k=0;k<=L;k++)k===0&&_===M?R[_][k]=w:R[_][k]=w.clone().lerp(N,k/L)}for(let _=0;_<M;_++)for(let w=0;w<2*(M-_)-1;w++){const N=Math.floor(w/2);w%2===0?(f(R[_][N+1]),f(R[_+1][N]),f(R[_][N])):(f(R[_][N+1]),f(R[_+1][N+1]),f(R[_+1][N]))}}function c(y){const T=new H;for(let x=0;x<s.length;x+=3)T.x=s[x+0],T.y=s[x+1],T.z=s[x+2],T.normalize().multiplyScalar(y),s[x+0]=T.x,s[x+1]=T.y,s[x+2]=T.z}function u(){const y=new H;for(let T=0;T<s.length;T+=3){y.x=s[T+0],y.y=s[T+1],y.z=s[T+2];const x=g(y)/2/Math.PI+.5,A=h(y)/Math.PI+.5;a.push(x,1-A)}v(),d()}function d(){for(let y=0;y<a.length;y+=6){const T=a[y+0],x=a[y+2],A=a[y+4],M=Math.max(T,x,A),R=Math.min(T,x,A);M>.9&&R<.1&&(T<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function m(y,T){const x=y*3;T.x=e[x+0],T.y=e[x+1],T.z=e[x+2]}function v(){const y=new H,T=new H,x=new H,A=new H,M=new nt,R=new nt,_=new nt;for(let w=0,N=0;w<s.length;w+=9,N+=6){y.set(s[w+0],s[w+1],s[w+2]),T.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),M.set(a[N+0],a[N+1]),R.set(a[N+2],a[N+3]),_.set(a[N+4],a[N+5]),A.copy(y).add(T).add(x).divideScalar(3);const L=g(A);b(M,N+0,y,L),b(R,N+2,T,L),b(_,N+4,x,L)}}function b(y,T,x,A){A<0&&y.x===1&&(a[T]=y.x-1),x.x===0&&x.z===0&&(a[T]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.vertices,e.indices,e.radius,e.detail)}}class lc extends oc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lc(e.radius,e.detail)}}class Na extends $n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,m=[],v=[],b=[],g=[];for(let h=0;h<u;h++){const y=h*f-a;for(let T=0;T<c;T++){const x=T*d-s;v.push(x,-y,0),b.push(0,0,1),g.push(T/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const T=y+c*h,x=y+c*(h+1),A=y+1+c*(h+1),M=y+1+c*h;m.push(T,x,M),m.push(x,A,M)}this.setIndex(m),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(b,3)),this.setAttribute("uv",new mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}function Pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(yu(r))r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(yu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Pr(n[t]);for(const r in i)e[r]=i[r]}return e}function yu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Cg={clone:Pr,merge:Wt};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(r.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ig extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lg extends Ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ug extends Ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gs=new H,Ws=new Lr,Dn=new H;class Id extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gs,Ws,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Ws,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Gs,Ws,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Ws,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new H,Eu=new nt,Tu=new nt;class cn extends Id{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,Tu),t.subVectors(Tu,Eu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ld extends Id{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=-90,mr=1;class Ng extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(pr,mr,e,t);r.layers=this.layers,this.add(r);const s=new cn(pr,mr,e,t);s.layers=this.layers,this.add(s);const a=new cn(pr,mr,e,t);a.layers=this.layers,this.add(a);const o=new cn(pr,mr,e,t);o.layers=this.layers,this.add(o);const l=new cn(pr,mr,e,t);l.layers=this.layers,this.add(l);const c=new cn(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Fg extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hc=class hc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};hc.prototype.isMatrix2=!0;let Au=hc;function wu(n,e,t,i){const r=Og(i);switch(t){case vd:return n*e;case Sd:return n*e/r.components*r.byteLength;case ec:return n*e/r.components*r.byteLength;case Zi:return n*e*2/r.components*r.byteLength;case tc:return n*e*2/r.components*r.byteLength;case xd:return n*e*3/r.components*r.byteLength;case Sn:return n*e*4/r.components*r.byteLength;case nc:return n*e*4/r.components*r.byteLength;case Qs:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(n,16)*Math.max(e,8)/4;case jo:case tl:return Math.max(n,8)*Math.max(e,8)/2;case il:case rl:case al:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:case da:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yl:case El:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Al:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ha:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(n){switch(n){case un:case pd:return{byteLength:1,components:1};case ls:case md:case pi:return{byteLength:2,components:1};case Ql:case jl:return{byteLength:2,components:4};case Xn:case Jl:case Bn:return{byteLength:4,components:1};case gd:case _d:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ud(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bg(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],b=d[m];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++f,d[f]=b)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const b=d[m];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,l_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m_="gl_FragColor = linearToOutputTexel( gl_FragColor );",g_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,__=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,D_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:zg,alphahash_pars_fragment:kg,alphamap_fragment:Hg,alphamap_pars_fragment:Vg,alphatest_fragment:Gg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:qg,batching_pars_vertex:$g,batching_vertex:Yg,begin_vertex:Kg,beginnormal_vertex:Zg,bsdfs:Jg,iridescence_fragment:Qg,bumpmap_pars_fragment:jg,clipping_planes_fragment:e_,clipping_planes_pars_fragment:t_,clipping_planes_pars_vertex:n_,clipping_planes_vertex:i_,color_fragment:r_,color_pars_fragment:s_,color_pars_vertex:a_,color_vertex:o_,common:l_,cube_uv_reflection_fragment:c_,defaultnormal_vertex:u_,displacementmap_pars_vertex:f_,displacementmap_vertex:d_,emissivemap_fragment:h_,emissivemap_pars_fragment:p_,colorspace_fragment:m_,colorspace_pars_fragment:g_,envmap_fragment:__,envmap_common_pars_fragment:v_,envmap_pars_fragment:x_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:D_,envmap_vertex:M_,fog_vertex:b_,fog_pars_vertex:y_,fog_fragment:E_,fog_pars_fragment:T_,gradientmap_pars_fragment:A_,lightmap_pars_fragment:w_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:C_,lights_pars_begin:P_,lights_toon_fragment:I_,lights_toon_pars_fragment:L_,lights_phong_fragment:U_,lights_phong_pars_fragment:N_,lights_physical_fragment:F_,lights_physical_pars_fragment:O_,lights_fragment_begin:B_,lights_fragment_maps:z_,lights_fragment_end:k_,lightprobes_pars_fragment:H_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:X_,map_fragment:q_,map_pars_fragment:$_,map_particle_fragment:Y_,map_particle_pars_fragment:K_,metalnessmap_fragment:Z_,metalnessmap_pars_fragment:J_,morphinstance_vertex:Q_,morphcolor_vertex:j_,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:r0,normal_pars_fragment:s0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:d0,opaque_fragment:h0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:_0,dithering_pars_fragment:v0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:b0,shadowmap_vertex:y0,shadowmask_pars_fragment:E0,skinbase_vertex:T0,skinning_pars_vertex:A0,skinning_vertex:w0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:D0,tonemapping_pars_fragment:I0,transmission_fragment:L0,transmission_pars_fragment:U0,uv_pars_fragment:N0,uv_pars_vertex:F0,uv_vertex:O0,worldpos_vertex:B0,background_vert:z0,background_frag:k0,backgroundCube_vert:H0,backgroundCube_frag:V0,cube_vert:G0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distance_vert:$0,distance_frag:Y0,equirect_vert:K0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:Q0,meshbasic_vert:j0,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:rv,meshnormal_vert:sv,meshnormal_frag:av,meshphong_vert:ov,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:uv,meshtoon_vert:fv,meshtoon_frag:dv,points_vert:hv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:_v,sprite_frag:vv},ye={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Fn={basic:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Wt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Wt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ut(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Wt([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Wt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Wt([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Wt([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Wt([ye.common,ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Wt([ye.lights,ye.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Fn.physical={uniforms:Wt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Xs={r:0,b:0,g:0},xv=new Ct,Nd=new Ye;Nd.set(-1,0,0,0,1,0,0,0,1);function Sv(n,e,t,i,r,s){const a=new ut(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const x=y.backgroundBlurriness>0;T=e.get(T,x)}return T}function v(y){let T=!1;const x=m(y);x===null?g(a,o):x&&x.isColor&&(g(x,1),T=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(y,T){const x=m(T);x&&(x.isCubeTexture||x.mapping===La)?(c===void 0&&(c=new qn(new ms(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Pr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nd),c.material.toneMapped=et.getTransfer(x.colorSpace)!==ft,(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new qn(new Na(2,2),new Tn({name:"BackgroundMaterial",uniforms:Pr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(Xs,Dd(n)),t.buffers.color.setClear(Xs.r,Xs.g,Xs.b,T,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:v,addToRenderList:b,dispose:h}}function Mv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,k,te,se,V){let J=!1;const z=d(L,se,te,k);s!==z&&(s=z,c(s.object)),J=m(L,se,te,V),J&&v(L,se,te,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(L,k,te,se),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,k,te,se){const V=se.wireframe===!0;let J=i[k.id];J===void 0&&(J={},i[k.id]=J);const z=L.isInstancedMesh===!0?L.id:0;let Y=J[z];Y===void 0&&(Y={},J[z]=Y);let le=Y[te.id];le===void 0&&(le={},Y[te.id]=le);let _e=le[V];return _e===void 0&&(_e=f(l()),le[V]=_e),_e}function f(L){const k=[],te=[],se=[];for(let V=0;V<t;V++)k[V]=0,te[V]=0,se[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:se,object:L,attributes:{},index:null}}function m(L,k,te,se){const V=s.attributes,J=k.attributes;let z=0;const Y=te.getAttributes();for(const le in Y)if(Y[le].location>=0){const ve=V[le];let Te=J[le];if(Te===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(Te=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(Te=L.instanceColor)),ve===void 0||ve.attribute!==Te||Te&&ve.data!==Te.data)return!0;z++}return s.attributesNum!==z||s.index!==se}function v(L,k,te,se){const V={},J=k.attributes;let z=0;const Y=te.getAttributes();for(const le in Y)if(Y[le].location>=0){let ve=J[le];ve===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor));const Te={};Te.attribute=ve,ve&&ve.data&&(Te.data=ve.data),V[le]=Te,z++}s.attributes=V,s.attributesNum=z,s.index=se}function b(){const L=s.newAttributes;for(let k=0,te=L.length;k<te;k++)L[k]=0}function g(L){h(L,0)}function h(L,k){const te=s.newAttributes,se=s.enabledAttributes,V=s.attributeDivisors;te[L]=1,se[L]===0&&(n.enableVertexAttribArray(L),se[L]=1),V[L]!==k&&(n.vertexAttribDivisor(L,k),V[L]=k)}function y(){const L=s.newAttributes,k=s.enabledAttributes;for(let te=0,se=k.length;te<se;te++)k[te]!==L[te]&&(n.disableVertexAttribArray(te),k[te]=0)}function T(L,k,te,se,V,J,z){z===!0?n.vertexAttribIPointer(L,k,te,V,J):n.vertexAttribPointer(L,k,te,se,V,J)}function x(L,k,te,se){b();const V=se.attributes,J=te.getAttributes(),z=k.defaultAttributeValues;for(const Y in J){const le=J[Y];if(le.location>=0){let _e=V[Y];if(_e===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),_e!==void 0){const ve=_e.normalized,Te=_e.itemSize,it=e.get(_e);if(it===void 0)continue;const Mt=it.buffer,rt=it.type,ne=it.bytesPerElement,me=rt===n.INT||rt===n.UNSIGNED_INT||_e.gpuType===Jl;if(_e.isInterleavedBufferAttribute){const fe=_e.data,We=fe.stride,Xe=_e.offset;if(fe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<le.locationSize;Ve++)h(le.location+Ve,fe.meshPerAttribute);L.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ve=0;Ve<le.locationSize;Ve++)g(le.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Ve=0;Ve<le.locationSize;Ve++)T(le.location+Ve,Te/le.locationSize,rt,ve,We*ne,(Xe+Te/le.locationSize*Ve)*ne,me)}else{if(_e.isInstancedBufferAttribute){for(let fe=0;fe<le.locationSize;fe++)h(le.location+fe,_e.meshPerAttribute);L.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let fe=0;fe<le.locationSize;fe++)g(le.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let fe=0;fe<le.locationSize;fe++)T(le.location+fe,Te/le.locationSize,rt,ve,Te*ne,Te/le.locationSize*fe*ne,me)}}else if(z!==void 0){const ve=z[Y];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(le.location,ve);break;case 3:n.vertexAttrib3fv(le.location,ve);break;case 4:n.vertexAttrib4fv(le.location,ve);break;default:n.vertexAttrib1fv(le.location,ve)}}}}y()}function A(){w();for(const L in i){const k=i[L];for(const te in k){const se=k[te];for(const V in se){const J=se[V];for(const z in J)u(J[z].object),delete J[z];delete se[V]}}delete i[L]}}function M(L){if(i[L.id]===void 0)return;const k=i[L.id];for(const te in k){const se=k[te];for(const V in se){const J=se[V];for(const z in J)u(J[z].object),delete J[z];delete se[V]}}delete i[L.id]}function R(L){for(const k in i){const te=i[k];for(const se in te){const V=te[se];if(V[L.id]===void 0)continue;const J=V[L.id];for(const z in J)u(J[z].object),delete J[z];delete V[L.id]}}}function _(L){for(const k in i){const te=i[k],se=L.isInstancedMesh===!0?L.id:0,V=te[se];if(V!==void 0){for(const J in V){const z=V[J];for(const Y in z)u(z[Y].object),delete z[Y];delete V[J]}delete te[se],Object.keys(te).length===0&&delete i[k]}}}function w(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function bv(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function yv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==un&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!_)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:x,maxSamples:A,samples:M}}function Ev(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ki,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const y=s?0:i,T=y*4;let x=h.clippingState||null;l.value=x,x=u(v,f,T,m);for(let A=0;A!==T;++A)x[A]=t[A];h.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,v){const b=d!==null?d.length:0;let g=null;if(b!==0){if(g=l.value,v!==!0||g===null){const h=m+b*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<h)&&(g=new Float32Array(h));for(let T=0,x=m;T!==b;++T,x+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const Ci=4,Ru=[.125,.215,.35,.446,.526,.582],Vi=20,Tv=256,Gr=new Ld,Cu=new ut;let Ao=null,wo=0,Ro=0,Co=!1;const Av=new H;class Pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Av}=s;Ao=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao,wo,Ro),this._renderer.xr.enabled=Co,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:pi,format:Sn,colorSpace:pa,depthBuffer:!1},r=Du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wv(s)),this._blurMaterial=Cv(s,e,t),this._ggxMaterial=Rv(s,e,t)}return r}_compileMaterial(e){const t=new qn(new $n,e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,i,r,s){const l=new cn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Cu),d.toneMapping=Hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qn(new ms,new wd({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let h=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,h=!0):(g.color.copy(Cu),h=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const A=this._cubeSize;gr(r,x*A,T>2?A:0,A,A),d.setRenderTarget(r),h&&d.render(b,l),d.render(e,l)}d.toneMapping=m,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Gr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,m=d*f,{_lodMax:v}=this,b=this._sizeLods[i],g=3*b*(i>v-Ci?i-v+Ci:0),h=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,gr(s,g,h,3*b,2*b),r.setRenderTarget(s),r.render(o,Gr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,gr(e,g,h,3*b,2*b),r.setRenderTarget(e),r.render(o,Gr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),b=s/v,g=isFinite(s)?1+Math.floor(u*b):Vi;g>Vi&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vi}`);const h=[];let y=0;for(let R=0;R<Vi;++R){const _=R/b,w=Math.exp(-_*_/2);h.push(w),R===0?y+=w:R<g&&(y+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-i;const x=this._sizeLods[r],A=3*x*(r>T-Ci?r-T+Ci:0),M=4*(this._cubeSize-x);gr(t,A,M,3*x,2*x),l.setRenderTarget(t),l.render(d,Gr)}}function wv(n){const e=[],t=[],i=[];let r=n;const s=n-Ci+1+Ru.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ci?l=Ru[a-n+Ci-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,b=3,g=2,h=1,y=new Float32Array(b*v*m),T=new Float32Array(g*v*m),x=new Float32Array(h*v*m);for(let M=0;M<m;M++){const R=M%3*2/3-1,_=M>2?0:-1,w=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];y.set(w,b*v*M),T.set(f,g*v*M);const N=[M,M,M,M,M,M];x.set(N,h*v*M)}const A=new $n;A.setAttribute("position",new Gn(y,b)),A.setAttribute("uv",new Gn(T,g)),A.setAttribute("faceIndex",new Gn(x,h)),i.push(new qn(A,null)),r>Ci&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Du(n,e,t){const i=new Vn(n,e,t);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rv(n,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Cv(n,e,t){const i=new Float32Array(Vi),r=new H(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Iu(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Lu(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Fd extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ms(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:li});s.uniforms.tEquirect.value=t;const a=new qn(r,s),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Ht),new Ng(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Pv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Qa||m===ja)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const b=new Fd(v.height);return b.fromEquirectangularTexture(n,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,v=m===Qa||m===ja,b=m===Ki||m===Rr;if(v||b){let g=t.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new Pu(n)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return v&&y&&y.height>0||b&&y&&l(y)?(i===null&&(i=new Pu(n)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,m){return m===Qa?f.mapping=Ki:m===ja&&(f.mapping=Rr),f}function l(f){let m=0;const v=6;for(let b=0;b<v;b++)f[b]!==void 0&&m++;return m===v}function c(f){const m=f.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function u(f){const m=f.target;m.removeEventListener("dispose",u);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Dv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&yr("WebGLRenderer: "+i+" extension not supported."),r}}}function Iv(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,v=d.attributes.position;let b=0;if(v===void 0)return;if(m!==null){const y=m.array;b=m.version;for(let T=0,x=y.length;T<x;T+=3){const A=y[T+0],M=y[T+1],R=y[T+2];f.push(A,M,M,R,R,A)}}else{const y=v.array;b=v.version;for(let T=0,x=y.length/3-1;T<x;T+=3){const A=T+0,M=T+1,R=T+2;f.push(A,M,M,R,R,A)}}const g=new(v.count>=65535?Ad:Td)(f,1);g.version=b;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Lv(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,d*a,m),t.update(f,i,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,m);let b=0;for(let g=0;g<m;g++)b+=f[g];t.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Uv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Nv(n,e,t){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let N=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),b===!0&&(x=2),g===!0&&(x=3);let A=o.attributes.position.count*x,M=1;A>e.maxTextureSize&&(M=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*M*4*d),_=new bd(R,A,M,d);_.type=Bn,_.needsUpdate=!0;const w=x*4;for(let L=0;L<d;L++){const k=h[L],te=y[L],se=T[L],V=A*M*4*L;for(let J=0;J<k.count;J++){const z=J*w;v===!0&&(r.fromBufferAttribute(k,J),R[V+z+0]=r.x,R[V+z+1]=r.y,R[V+z+2]=r.z,R[V+z+3]=0),b===!0&&(r.fromBufferAttribute(te,J),R[V+z+4]=r.x,R[V+z+5]=r.y,R[V+z+6]=r.z,R[V+z+7]=0),g===!0&&(r.fromBufferAttribute(se,J),R[V+z+8]=r.x,R[V+z+9]=r.y,R[V+z+10]=r.z,R[V+z+11]=se.itemSize===4?r.w:1)}}f={count:d,texture:_,size:new nt(A,M)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const b=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Fv(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Ov={[ad]:"LINEAR_TONE_MAPPING",[od]:"REINHARD_TONE_MAPPING",[ld]:"CINEON_TONE_MAPPING",[cd]:"ACES_FILMIC_TONE_MAPPING",[fd]:"AGX_TONE_MAPPING",[dd]:"NEUTRAL_TONE_MAPPING",[ud]:"CUSTOM_TONE_MAPPING"};function Bv(n,e,t,i,r,s){const a=new Vn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Cr(e,t):void 0}),o=new Vn(e,t,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new $n;l.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new mn([0,2,0,0,2,0],2));const c=new Ig({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qn(l,c),d=new Ld(-1,1,1,-1,0,1);let f=null,m=null,v=!1,b,g=null,h=[],y=!1;this.setSize=function(T,x){a.setSize(T,x),o.setSize(T,x);for(let A=0;A<h.length;A++){const M=h[A];M.setSize&&M.setSize(T,x)}},this.setEffects=function(T){h=T,y=h.length>0&&h[0].isRenderPass===!0;const x=a.width,A=a.height;for(let M=0;M<h.length;M++){const R=h[M];R.setSize&&R.setSize(x,A)}},this.begin=function(T,x){if(v||T.toneMapping===Hn&&h.length===0)return!1;if(g=x,x!==null){const A=x.width,M=x.height;(a.width!==A||a.height!==M)&&this.setSize(A,M)}return y===!1&&T.setRenderTarget(a),b=T.toneMapping,T.toneMapping=Hn,!0},this.hasRenderPass=function(){return y},this.end=function(T,x){T.toneMapping=b,v=!0;let A=a,M=o;for(let R=0;R<h.length;R++){const _=h[R];if(_.enabled!==!1&&(_.render(T,M,A,x),_.needsSwap!==!1)){const w=A;A=M,M=w}}if(f!==T.outputColorSpace||m!==T.toneMapping){f=T.outputColorSpace,m=T.toneMapping,c.defines={},et.getTransfer(f)===ft&&(c.defines.SRGB_TRANSFER="");const R=Ov[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,T.setRenderTarget(g),T.render(u,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Od=new Kt,Pl=new Cr(1,1),Bd=new bd,zd=new lg,kd=new Cd,Uu=[],Nu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function Ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Uu[r];if(s===void 0&&(s=new Float32Array(r),Uu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oa(n,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Bu.set(i),n.uniformMatrix2fv(this.addr,!1,Bu),Dt(t,i)}}function Wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Ou.set(i),n.uniformMatrix3fv(this.addr,!1,Ou),Dt(t,i)}}function Xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Fu.set(i),n.uniformMatrix4fv(this.addr,!1,Fu),Dt(t,i)}}function qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Zv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function ex(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pl.compareFunction=t.isReversedDepthBuffer()?rc:ic,s=Pl):s=Od,t.setTexture2D(e||s,r)}function tx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zd,r)}function nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kd,r)}function ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bd,r)}function rx(n){switch(n){case 5126:return zv;case 35664:return kv;case 35665:return Hv;case 35666:return Vv;case 35674:return Gv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return $v;case 35668:case 35672:return Yv;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return Jv;case 36295:return Qv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function sx(n,e){n.uniform1fv(this.addr,e)}function ax(n,e){const t=Ur(e,this.size,2);n.uniform2fv(this.addr,t)}function ox(n,e){const t=Ur(e,this.size,3);n.uniform3fv(this.addr,t)}function lx(n,e){const t=Ur(e,this.size,4);n.uniform4fv(this.addr,t)}function cx(n,e){const t=Ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ux(n,e){const t=Ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fx(n,e){const t=Ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dx(n,e){n.uniform1iv(this.addr,e)}function hx(n,e){n.uniform2iv(this.addr,e)}function px(n,e){n.uniform3iv(this.addr,e)}function mx(n,e){n.uniform4iv(this.addr,e)}function gx(n,e){n.uniform1uiv(this.addr,e)}function _x(n,e){n.uniform2uiv(this.addr,e)}function vx(n,e){n.uniform3uiv(this.addr,e)}function xx(n,e){n.uniform4uiv(this.addr,e)}function Sx(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Pl:a=Od;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Mx(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zd,s[a])}function bx(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||kd,s[a])}function yx(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bd,s[a])}function Ex(n){switch(n){case 5126:return sx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return hx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return vx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return yx}}class Tx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rx(t.type)}}class Ax{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}}class wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function zu(n,e){n.seq.push(e),n.map[e.id]=e}function Rx(n,e,t){const i=n.name,r=i.length;for(Po.lastIndex=0;;){const s=Po.exec(i),a=Po.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){zu(t,c===void 0?new Tx(o,n,e):new Ax(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new wx(o),zu(t,d)),t=d}}}class na{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Rx(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cx=37297;let Px=0;function Dx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Hu=new Ye;function Ix(n){et._getMatrix(Hu,et.workingColorSpace,n);const e=`mat3( ${Hu.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case ma:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Dx(n.getShaderSource(e),o)}else return s}function Lx(n,e){const t=Ix(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ux={[ad]:"Linear",[od]:"Reinhard",[ld]:"Cineon",[cd]:"ACESFilmic",[fd]:"AgX",[dd]:"Neutral",[ud]:"Custom"};function Nx(n,e){const t=Ux[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qs=new H;function Fx(){et.getLuminanceCoefficients(qs);const n=qs.x.toFixed(4),e=qs.y.toFixed(4),t=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Bx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Kr(n){return n!==""}function Gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(kx,Vx)}const Hx=new Map;function Vx(n,e){let t=Qe[e];if(t===void 0){const i=Hx.get(e);if(i!==void 0)t=Qe[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dl(t)}const Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(Gx,Wx)}function Wx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Xx={[Js]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function qx(n){return Xx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $x={[Ki]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function Yx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$x[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Kx={[Rr]:"ENVMAP_MODE_REFRACTION"};function Zx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Kx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jx={[sd]:"ENVMAP_BLENDING_MULTIPLY",[Hm]:"ENVMAP_BLENDING_MIX",[Vm]:"ENVMAP_BLENDING_ADD"};function Qx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Jx[n.combine]||"ENVMAP_BLENDING_NONE"}function jx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function eS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qx(t),c=Yx(t),u=Zx(t),d=Qx(t),f=jx(t),m=Ox(t),v=Bx(s),b=r.createProgram();let g,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Kr).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Kr).join(`
`),h.length>0&&(h+=`
`)):(g=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),h=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Dl(a),a=Gu(a,t),a=Wu(a,t),o=Dl(o),o=Gu(o,t),o=Wu(o,t),a=Xu(a),o=Xu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=y+g+a,x=y+h+o,A=ku(r,r.VERTEX_SHADER,T),M=ku(r,r.FRAGMENT_SHADER,x);r.attachShader(b,A),r.attachShader(b,M),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(L){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(b)||"",te=r.getShaderInfoLog(A)||"",se=r.getShaderInfoLog(M)||"",V=k.trim(),J=te.trim(),z=se.trim();let Y=!0,le=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,A,M);else{const _e=Vu(r,A,"vertex"),ve=Vu(r,M,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+_e+`
`+ve)}else V!==""?qe("WebGLProgram: Program Info Log:",V):(J===""||z==="")&&(le=!1);le&&(L.diagnostics={runnable:Y,programLog:V,vertexShader:{log:J,prefix:g},fragmentShader:{log:z,prefix:h}})}r.deleteShader(A),r.deleteShader(M),_=new na(r,b),w=zx(r,b)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(b,Cx)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=M,this}let tS=0;class nS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new iS(e),t.set(e,i)),i}}class iS{constructor(e){this.id=tS++,this.code=e,this.usedTimes=0}}function rS(n){return n===Zi||n===da||n===ha}function sS(n,e,t,i,r,s){const a=new yd,o=new nS,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,w,N,L,k,te){const se=L.fog,V=k.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||J,z),le=Y&&Y.mapping===La?Y.image.height:null,_e=m[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&qe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Te=ve!==void 0?ve.length:0;let it=0;V.morphAttributes.position!==void 0&&(it=1),V.morphAttributes.normal!==void 0&&(it=2),V.morphAttributes.color!==void 0&&(it=3);let Mt,rt,ne,me;if(_e){const Ne=Fn[_e];Mt=Ne.vertexShader,rt=Ne.fragmentShader}else{Mt=_.vertexShader,rt=_.fragmentShader;const Ne=o.getVertexShaderStage(_),bt=o.getFragmentShaderStage(_);o.update(_,Ne,bt),ne=Ne.id,me=bt.id}const fe=n.getRenderTarget(),We=n.state.buffers.depth.getReversed(),Xe=k.isInstancedMesh===!0,Ve=k.isBatchedMesh===!0,P=!!_.map,I=!!_.matcap,W=!!Y,Q=!!_.aoMap,K=!!_.lightMap,ee=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,ce=!!_.displacementMap,oe=!!_.emissiveMap,j=!!_.metalnessMap,Ce=!!_.roughnessMap,C=_.anisotropy>0,De=_.clearcoat>0,be=_.dispersion>0,E=_.iridescence>0,p=_.sheen>0,U=_.transmission>0,B=C&&!!_.anisotropyMap,q=De&&!!_.clearcoatMap,ue=De&&!!_.clearcoatNormalMap,pe=De&&!!_.clearcoatRoughnessMap,Z=E&&!!_.iridescenceMap,ie=E&&!!_.iridescenceThicknessMap,he=p&&!!_.sheenColorMap,Ie=p&&!!_.sheenRoughnessMap,Se=!!_.specularMap,ge=!!_.specularColorMap,He=!!_.specularIntensityMap,Ge=U&&!!_.transmissionMap,Ze=U&&!!_.thicknessMap,F=!!_.gradientMap,xe=!!_.alphaMap,re=_.alphaTest>0,Me=!!_.alphaHash,Re=!!_.extensions;let ae=Hn;_.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ae=n.toneMapping);const Oe={shaderID:_e,shaderType:_.type,shaderName:_.name,vertexShader:Mt,fragmentShader:rt,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&k._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&k.instanceColor!==null,instancingMorph:Xe&&k.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:P,matcap:I,envMap:W,envMapMode:W&&Y.mapping,envMapCubeUVHeight:le,aoMap:Q,lightMap:K,bumpMap:ee,normalMap:de,displacementMap:ce,emissiveMap:oe,normalMapObjectSpace:de&&_.normalMapType===Xm,normalMapTangentSpace:de&&_.normalMapType===iu,packedNormalMap:de&&_.normalMapType===iu&&rS(_.normalMap.format),metalnessMap:j,roughnessMap:Ce,anisotropy:C,anisotropyMap:B,clearcoat:De,clearcoatMap:q,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,dispersion:be,iridescence:E,iridescenceMap:Z,iridescenceThicknessMap:ie,sheen:p,sheenColorMap:he,sheenRoughnessMap:Ie,specularMap:Se,specularColorMap:ge,specularIntensityMap:He,transmission:U,transmissionMap:Ge,thicknessMap:Ze,gradientMap:F,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:re,alphaHash:Me,combine:_.combine,mapUv:P&&v(_.map.channel),aoMapUv:Q&&v(_.aoMap.channel),lightMapUv:K&&v(_.lightMap.channel),bumpMapUv:ee&&v(_.bumpMap.channel),normalMapUv:de&&v(_.normalMap.channel),displacementMapUv:ce&&v(_.displacementMap.channel),emissiveMapUv:oe&&v(_.emissiveMap.channel),metalnessMapUv:j&&v(_.metalnessMap.channel),roughnessMapUv:Ce&&v(_.roughnessMap.channel),anisotropyMapUv:B&&v(_.anisotropyMap.channel),clearcoatMapUv:q&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(_.sheenRoughnessMap.channel),specularMapUv:Se&&v(_.specularMap.channel),specularColorMapUv:ge&&v(_.specularColorMap.channel),specularIntensityMapUv:He&&v(_.specularIntensityMap.channel),transmissionMapUv:Ge&&v(_.transmissionMap.channel),thicknessMapUv:Ze&&v(_.thicknessMap.channel),alphaMapUv:xe&&v(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(de||C),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(P||xe),fog:!!se,useFog:_.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:We,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:P&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===ft,decodeVideoTextureEmissive:oe&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ri,flipSided:_.side===Qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&_.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)w.push(N),w.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(h(w,_),y(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function h(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){const w=m[_.type];let N;if(w){const L=Fn[w];N=Cg.clone(L.uniforms)}else N=_.uniforms;return N}function x(_,w){let N=u.get(w);return N!==void 0?++N.usedTimes:(N=new eS(n,w,_,r),c.push(N),u.set(w,N)),N}function A(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:T,acquireProgram:x,releaseProgram:A,releaseShaderCache:M,programs:c,dispose:R}}function aS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function oS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,v,b,g,h){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:h},n[e]=y):(y.id=f.id,y.object=f,y.geometry=m,y.material=v,y.materialVariant=a(f),y.groupOrder=b,y.renderOrder=f.renderOrder,y.z=g,y.group=h),e++,y}function l(f,m,v,b,g,h){const y=o(f,m,v,b,g,h);v.transmission>0?i.push(y):v.transparent===!0?r.push(y):t.push(y)}function c(f,m,v,b,g,h){const y=o(f,m,v,b,g,h);v.transmission>0?i.unshift(y):v.transparent===!0?r.unshift(y):t.unshift(y)}function u(f,m,v){t.length>1&&t.sort(f||oS),i.length>1&&i.sort(m||$u),r.length>1&&r.sort(m||$u),v&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,m=n.length;f<m;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function lS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Yu,n.set(i,[a])):r>=s.length?(a=new Yu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function cS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ut};break;case"SpotLight":t={position:new H,direction:new H,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function uS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fS=0;function dS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hS(n){const e=new cS,t=uS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Ct,a=new Ct;function o(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,v=0,b=0,g=0,h=0,y=0,T=0,x=0,A=0,M=0,R=0;c.sort(dS);for(let w=0,N=c.length;w<N;w++){const L=c[w],k=L.color,te=L.intensity,se=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zi?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=k.r*te,d+=k.g*te,f+=k.b*te;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],te);R++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,Y=t.get(L);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=L.shadow.matrix,y++}i.directional[m]=J,m++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(k).multiplyScalar(te),J.distance=se,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[b]=J;const z=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,z.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[b]=z.matrix,L.castShadow){const Y=t.get(L);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,i.spotShadow[b]=Y,i.spotShadowMap[b]=V,x++}b++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(k).multiplyScalar(te),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=J,g++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const z=L.shadow,Y=t.get(L);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,i.pointShadow[v]=Y,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=L.shadow.matrix,T++}i.point[v]=J,v++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(te),J.groundColor.copy(L.groundColor).multiplyScalar(te),i.hemi[h]=J,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==m||_.pointLength!==v||_.spotLength!==b||_.rectAreaLength!==g||_.hemiLength!==h||_.numDirectionalShadows!==y||_.numPointShadows!==T||_.numSpotShadows!==x||_.numSpotMaps!==A||_.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=x+A-M,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,_.directionalLength=m,_.pointLength=v,_.spotLength=b,_.rectAreaLength=g,_.hemiLength=h,_.numDirectionalShadows=y,_.numPointShadows=T,_.numSpotShadows=x,_.numSpotMaps=A,_.numLightProbes=R,i.version=fS++)}function l(c,u){let d=0,f=0,m=0,v=0,b=0;const g=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const T=c[h];if(T.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(T.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const x=i.hemi[b];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function Ku(n){const e=new hS(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function pS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ku(n),e.set(r,[o])):s>=a.length?(o=new Ku(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const mS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_S=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],vS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Zu=new Ct,Wr=new H,Do=new H;function xS(n,e,t){let i=new Rd;const r=new nt,s=new nt,a=new Et,o=new Lg,l=new Ug,c={},u=t.maxTextureSize,d={[Di]:Qt,[Qt]:Di,[ri]:ri},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:mS,fragmentShader:gS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new $n;v.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new qn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let h=this.type;this.render=function(M,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===bm&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Js);const w=n.getRenderTarget(),N=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const te=h!==this.type;te&&R.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(V=>V.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,V=M.length;se<V;se++){const J=M[se],z=J.shadow;if(z===void 0){qe("WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Y=z.getFrameExtents();r.multiply(Y),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,z.mapSize.y=s.y));const le=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=le,z.map===null||te===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Yr){if(J.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Vn(r.x,r.y,{format:Zi,type:pi,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),z.map.texture.name=J.name+".shadowMap",z.map.depthTexture=new Cr(r.x,r.y,Bn),z.map.depthTexture.name=J.name+".shadowMapDepth",z.map.depthTexture.format=mi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nt,z.map.depthTexture.magFilter=Nt}else J.isPointLight?(z.map=new Fd(r.x),z.map.depthTexture=new wg(r.x,Xn)):(z.map=new Vn(r.x,r.y),z.map.depthTexture=new Cr(r.x,r.y,Xn)),z.map.depthTexture.name=J.name+".shadowMap",z.map.depthTexture.format=mi,this.type===Js?(z.map.depthTexture.compareFunction=le?rc:ic,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nt,z.map.depthTexture.magFilter=Nt);z.camera.updateProjectionMatrix()}const _e=z.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<_e;ve++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(z.map),n.clear());const Te=z.getViewport(ve);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),k.viewport(a)}if(J.isPointLight){const Te=z.camera,it=z.matrix,Mt=J.distance||Te.far;Mt!==Te.far&&(Te.far=Mt,Te.updateProjectionMatrix()),Wr.setFromMatrixPosition(J.matrixWorld),Te.position.copy(Wr),Do.copy(Te.position),Do.add(_S[ve]),Te.up.copy(vS[ve]),Te.lookAt(Do),Te.updateMatrixWorld(),it.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Zu.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Zu,Te.coordinateSystem,Te.reversedDepth)}else z.updateMatrices(J);i=z.getFrustum(),x(R,_,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===Yr&&y(z,_),z.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(w,N,L)};function y(M,R){const _=e.update(b);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vn(r.x,r.y,{format:Zi,type:pi})),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,_,f,b,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,_,m,b,null)}function T(M,R,_,w){let N=null;const L=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)N=L;else if(N=_.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=N.uuid,te=R.uuid;let se=c[k];se===void 0&&(se={},c[k]=se);let V=se[te];V===void 0&&(V=N.clone(),se[te]=V,R.addEventListener("dispose",A)),N=V}if(N.visible=R.visible,N.wireframe=R.wireframe,w===Yr?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:d[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const k=n.properties.get(N);k.light=_}return N}function x(M,R,_,w,N){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===Yr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const te=e.update(M),se=M.material;if(Array.isArray(se)){const V=te.groups;for(let J=0,z=V.length;J<z;J++){const Y=V[J],le=se[Y.materialIndex];if(le&&le.visible){const _e=T(M,le,w,N);M.onBeforeShadow(n,M,R,_,te,_e,Y),n.renderBufferDirect(_,null,te,_e,M,Y),M.onAfterShadow(n,M,R,_,te,_e,Y)}}}else if(se.visible){const V=T(M,se,w,N);M.onBeforeShadow(n,M,R,_,te,V,null),n.renderBufferDirect(_,null,te,V,M,null),M.onAfterShadow(n,M,R,_,te,V,null)}}const k=M.children;for(let te=0,se=k.length;te<se;te++)x(k[te],R,_,w,N)}function A(M){M.target.removeEventListener("dispose",A);for(const _ in c){const w=c[_],N=M.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function SS(n,e){function t(){let F=!1;const xe=new Et;let re=null;const Me=new Et(0,0,0,0);return{setMask:function(Re){re!==Re&&!F&&(n.colorMask(Re,Re,Re,Re),re=Re)},setLocked:function(Re){F=Re},setClear:function(Re,ae,Oe,Ne,bt){bt===!0&&(Re*=Ne,ae*=Ne,Oe*=Ne),xe.set(Re,ae,Oe,Ne),Me.equals(xe)===!1&&(n.clearColor(Re,ae,Oe,Ne),Me.copy(xe))},reset:function(){F=!1,re=null,Me.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,re=null,Me=null,Re=null;return{setReversed:function(ae){if(xe!==ae){const Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;const Ne=Re;Re=null,this.setClear(Ne)}},getReversed:function(){return xe},setTest:function(ae){ae?fe(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(ae){re!==ae&&!F&&(n.depthMask(ae),re=ae)},setFunc:function(ae){if(xe&&(ae=tg[ae]),Me!==ae){switch(ae){case Wo:n.depthFunc(n.NEVER);break;case Xo:n.depthFunc(n.ALWAYS);break;case qo:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case $o:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case Ko:n.depthFunc(n.GREATER);break;case Zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=ae}},setLocked:function(ae){F=ae},setClear:function(ae){Re!==ae&&(Re=ae,xe&&(ae=1-ae),n.clearDepth(ae))},reset:function(){F=!1,re=null,Me=null,Re=null,xe=!1}}}function r(){let F=!1,xe=null,re=null,Me=null,Re=null,ae=null,Oe=null,Ne=null,bt=null;return{setTest:function(_t){F||(_t?fe(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function(_t){xe!==_t&&!F&&(n.stencilMask(_t),xe=_t)},setFunc:function(_t,wn,Rn){(re!==_t||Me!==wn||Re!==Rn)&&(n.stencilFunc(_t,wn,Rn),re=_t,Me=wn,Re=Rn)},setOp:function(_t,wn,Rn){(ae!==_t||Oe!==wn||Ne!==Rn)&&(n.stencilOp(_t,wn,Rn),ae=_t,Oe=wn,Ne=Rn)},setLocked:function(_t){F=_t},setClear:function(_t){bt!==_t&&(n.clearStencil(_t),bt=_t)},reset:function(){F=!1,xe=null,re=null,Me=null,Re=null,ae=null,Oe=null,Ne=null,bt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},m=new WeakMap,v=[],b=null,g=!1,h=null,y=null,T=null,x=null,A=null,M=null,R=null,_=new ut(0,0,0),w=0,N=!1,L=null,k=null,te=null,se=null,V=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(le)[1]),z=Y>=1):le.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),z=Y>=2);let _e=null,ve={};const Te=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),Mt=new Et().fromArray(Te),rt=new Et().fromArray(it);function ne(F,xe,re,Me){const Re=new Uint8Array(4),ae=n.createTexture();n.bindTexture(F,ae),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<re;Oe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(xe+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return ae}const me={};me[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(wr),ee(!1),de(jc),fe(n.CULL_FACE),Q(li);function fe(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function We(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Xe(F,xe){return f[F]!==xe?(n.bindFramebuffer(F,xe),f[F]=xe,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ve(F,xe){let re=v,Me=!1;if(F){re=m.get(xe),re===void 0&&(re=[],m.set(xe,re));const Re=F.textures;if(re.length!==Re.length||re[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Oe=Re.length;ae<Oe;ae++)re[ae]=n.COLOR_ATTACHMENT0+ae;re.length=Re.length,Me=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,Me=!0);Me&&n.drawBuffers(re)}function P(F){return b!==F?(n.useProgram(F),b=F,!0):!1}const I={[Hi]:n.FUNC_ADD,[Em]:n.FUNC_SUBTRACT,[Tm]:n.FUNC_REVERSE_SUBTRACT};I[Am]=n.MIN,I[wm]=n.MAX;const W={[Rm]:n.ZERO,[Cm]:n.ONE,[Pm]:n.SRC_COLOR,[Vo]:n.SRC_ALPHA,[Fm]:n.SRC_ALPHA_SATURATE,[Um]:n.DST_COLOR,[Im]:n.DST_ALPHA,[Dm]:n.ONE_MINUS_SRC_COLOR,[Go]:n.ONE_MINUS_SRC_ALPHA,[Nm]:n.ONE_MINUS_DST_COLOR,[Lm]:n.ONE_MINUS_DST_ALPHA,[Om]:n.CONSTANT_COLOR,[Bm]:n.ONE_MINUS_CONSTANT_COLOR,[zm]:n.CONSTANT_ALPHA,[km]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(F,xe,re,Me,Re,ae,Oe,Ne,bt,_t){if(F===li){g===!0&&(We(n.BLEND),g=!1);return}if(g===!1&&(fe(n.BLEND),g=!0),F!==ym){if(F!==h||_t!==N){if((y!==Hi||A!==Hi)&&(n.blendEquation(n.FUNC_ADD),y=Hi,A=Hi),_t)switch(F){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eu:n.blendFunc(n.ONE,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",F);break}else switch(F){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tu:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",F);break}T=null,x=null,M=null,R=null,_.set(0,0,0),w=0,h=F,N=_t}return}Re=Re||xe,ae=ae||re,Oe=Oe||Me,(xe!==y||Re!==A)&&(n.blendEquationSeparate(I[xe],I[Re]),y=xe,A=Re),(re!==T||Me!==x||ae!==M||Oe!==R)&&(n.blendFuncSeparate(W[re],W[Me],W[ae],W[Oe]),T=re,x=Me,M=ae,R=Oe),(Ne.equals(_)===!1||bt!==w)&&(n.blendColor(Ne.r,Ne.g,Ne.b,bt),_.copy(Ne),w=bt),h=F,N=!1}function K(F,xe){F.side===ri?We(n.CULL_FACE):fe(n.CULL_FACE);let re=F.side===Qt;xe&&(re=!re),ee(re),F.blending===br&&F.transparent===!1?Q(li):Q(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Me=F.stencilWrite;o.setTest(Me),Me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function de(F){F!==Sm?(fe(n.CULL_FACE),F!==k&&(F===jc?n.cullFace(n.BACK):F===Mm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),k=F}function ce(F){F!==te&&(z&&n.lineWidth(F),te=F)}function oe(F,xe,re){F?(fe(n.POLYGON_OFFSET_FILL),(se!==xe||V!==re)&&(se=xe,V=re,a.getReversed()&&(xe=-xe),n.polygonOffset(xe,re))):We(n.POLYGON_OFFSET_FILL)}function j(F){F?fe(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function Ce(F){F===void 0&&(F=n.TEXTURE0+J-1),_e!==F&&(n.activeTexture(F),_e=F)}function C(F,xe,re){re===void 0&&(_e===null?re=n.TEXTURE0+J-1:re=_e);let Me=ve[re];Me===void 0&&(Me={type:void 0,texture:void 0},ve[re]=Me),(Me.type!==F||Me.texture!==xe)&&(_e!==re&&(n.activeTexture(re),_e=re),n.bindTexture(F,xe||me[F]),Me.type=F,Me.texture=xe)}function De(){const F=ve[_e];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function be(){try{n.compressedTexImage2D(...arguments)}catch(F){at("WebGLState:",F)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(F){at("WebGLState:",F)}}function p(){try{n.texSubImage2D(...arguments)}catch(F){at("WebGLState:",F)}}function U(){try{n.texSubImage3D(...arguments)}catch(F){at("WebGLState:",F)}}function B(){try{n.compressedTexSubImage2D(...arguments)}catch(F){at("WebGLState:",F)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(F){at("WebGLState:",F)}}function ue(){try{n.texStorage2D(...arguments)}catch(F){at("WebGLState:",F)}}function pe(){try{n.texStorage3D(...arguments)}catch(F){at("WebGLState:",F)}}function Z(){try{n.texImage2D(...arguments)}catch(F){at("WebGLState:",F)}}function ie(){try{n.texImage3D(...arguments)}catch(F){at("WebGLState:",F)}}function he(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function Ie(F,xe){d[F]!==xe&&(n.pixelStorei(F,xe),d[F]=xe)}function Se(F){Mt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Mt.copy(F))}function ge(F){rt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function He(F,xe){let re=c.get(xe);re===void 0&&(re=new WeakMap,c.set(xe,re));let Me=re.get(F);Me===void 0&&(Me=n.getUniformBlockIndex(xe,F.name),re.set(F,Me))}function Ge(F,xe){const Me=c.get(xe).get(F);l.get(xe)!==Me&&(n.uniformBlockBinding(xe,Me,F.__bindingPointIndex),l.set(xe,Me))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},_e=null,ve={},f={},m=new WeakMap,v=[],b=null,g=!1,h=null,y=null,T=null,x=null,A=null,M=null,R=null,_=new ut(0,0,0),w=0,N=!1,L=null,k=null,te=null,se=null,V=null,Mt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:We,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:P,setBlending:Q,setMaterial:K,setFlipSided:ee,setCullFace:de,setLineWidth:ce,setPolygonOffset:oe,setScissorTest:j,activeTexture:Ce,bindTexture:C,unbindTexture:De,compressedTexImage2D:be,compressedTexImage3D:E,texImage2D:Z,texImage3D:ie,pixelStorei:Ie,getParameter:he,updateUBOMapping:He,uniformBlockBinding:Ge,texStorage2D:ue,texStorage3D:pe,texSubImage2D:p,texSubImage3D:U,compressedTexSubImage2D:B,compressedTexSubImage3D:q,scissor:Se,viewport:ge,reset:Ze}}function MS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap,d=new Set;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,p){return v?new OffscreenCanvas(E,p):_a("canvas")}function g(E,p,U){let B=1;const q=be(E);if((q.width>U||q.height>U)&&(B=U/Math.max(q.width,q.height)),B<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ue=Math.floor(B*q.width),pe=Math.floor(B*q.height);f===void 0&&(f=b(ue,pe));const Z=p?b(ue,pe):f;return Z.width=ue,Z.height=pe,Z.getContext("2d").drawImage(E,0,0,ue,pe),qe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ue+"x"+pe+")."),Z}else return"data"in E&&qe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),E;return E}function h(E){return E.generateMipmaps}function y(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(E,p,U,B,q,ue=!1){if(E!==null){if(n[E]!==void 0)return n[E];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pe;B&&(pe=e.get("EXT_texture_norm16"),pe||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=p;if(p===n.RED&&(U===n.FLOAT&&(Z=n.R32F),U===n.HALF_FLOAT&&(Z=n.R16F),U===n.UNSIGNED_BYTE&&(Z=n.R8),U===n.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),U===n.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),p===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.R8UI),U===n.UNSIGNED_SHORT&&(Z=n.R16UI),U===n.UNSIGNED_INT&&(Z=n.R32UI),U===n.BYTE&&(Z=n.R8I),U===n.SHORT&&(Z=n.R16I),U===n.INT&&(Z=n.R32I)),p===n.RG&&(U===n.FLOAT&&(Z=n.RG32F),U===n.HALF_FLOAT&&(Z=n.RG16F),U===n.UNSIGNED_BYTE&&(Z=n.RG8),U===n.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),U===n.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),p===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RG8UI),U===n.UNSIGNED_SHORT&&(Z=n.RG16UI),U===n.UNSIGNED_INT&&(Z=n.RG32UI),U===n.BYTE&&(Z=n.RG8I),U===n.SHORT&&(Z=n.RG16I),U===n.INT&&(Z=n.RG32I)),p===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),U===n.UNSIGNED_INT&&(Z=n.RGB32UI),U===n.BYTE&&(Z=n.RGB8I),U===n.SHORT&&(Z=n.RGB16I),U===n.INT&&(Z=n.RGB32I)),p===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),U===n.UNSIGNED_INT&&(Z=n.RGBA32UI),U===n.BYTE&&(Z=n.RGBA8I),U===n.SHORT&&(Z=n.RGBA16I),U===n.INT&&(Z=n.RGBA32I)),p===n.RGB&&(U===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),U===n.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),p===n.RGBA){const ie=ue?ma:et.getTransfer(q);U===n.FLOAT&&(Z=n.RGBA32F),U===n.HALF_FLOAT&&(Z=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Z=ie===ft?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),U===n.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function A(E,p){let U;return E?p===null||p===Xn||p===cs?U=n.DEPTH24_STENCIL8:p===Bn?U=n.DEPTH32F_STENCIL8:p===ls&&(U=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Xn||p===cs?U=n.DEPTH_COMPONENT24:p===Bn?U=n.DEPTH_COMPONENT32F:p===ls&&(U=n.DEPTH_COMPONENT16),U}function M(E,p){return h(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==Ht?Math.log2(Math.max(p.width,p.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?p.mipmaps.length:1}function R(E){const p=E.target;p.removeEventListener("dispose",R),w(p),p.isVideoTexture&&u.delete(p),p.isHTMLTexture&&d.delete(p)}function _(E){const p=E.target;p.removeEventListener("dispose",_),L(p)}function w(E){const p=i.get(E);if(p.__webglInit===void 0)return;const U=E.source,B=m.get(U);if(B){const q=B[p.__cacheKey];q.usedTimes--,q.usedTimes===0&&N(E),Object.keys(B).length===0&&m.delete(U)}i.remove(E)}function N(E){const p=i.get(E);n.deleteTexture(p.__webglTexture);const U=E.source,B=m.get(U);delete B[p.__cacheKey],a.memory.textures--}function L(E){const p=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(p.__webglFramebuffer[B]))for(let q=0;q<p.__webglFramebuffer[B].length;q++)n.deleteFramebuffer(p.__webglFramebuffer[B][q]);else n.deleteFramebuffer(p.__webglFramebuffer[B]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[B])}else{if(Array.isArray(p.__webglFramebuffer))for(let B=0;B<p.__webglFramebuffer.length;B++)n.deleteFramebuffer(p.__webglFramebuffer[B]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let B=0;B<p.__webglColorRenderbuffer.length;B++)p.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[B]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const U=E.textures;for(let B=0,q=U.length;B<q;B++){const ue=i.get(U[B]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(U[B])}i.remove(E)}let k=0;function te(){k=0}function se(){return k}function V(E){k=E}function J(){const E=k;return E>=r.maxTextures&&qe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),k+=1,E}function z(E){const p=[];return p.push(E.wrapS),p.push(E.wrapT),p.push(E.wrapR||0),p.push(E.magFilter),p.push(E.minFilter),p.push(E.anisotropy),p.push(E.internalFormat),p.push(E.format),p.push(E.type),p.push(E.generateMipmaps),p.push(E.premultiplyAlpha),p.push(E.flipY),p.push(E.unpackAlignment),p.push(E.colorSpace),p.join()}function Y(E,p){const U=i.get(E);if(E.isVideoTexture&&C(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const B=E.image;if(B===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{We(U,E,p);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+p)}function le(E,p){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){We(U,E,p);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+p)}function _e(E,p){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){We(U,E,p);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+p)}function ve(E,p){const U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Xe(U,E,p);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+p)}const Te={[Jo]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Qo]:n.MIRRORED_REPEAT},it={[Nt]:n.NEAREST,[Gm]:n.NEAREST_MIPMAP_NEAREST,[Es]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[eo]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},Mt={[qm]:n.NEVER,[Jm]:n.ALWAYS,[$m]:n.LESS,[ic]:n.LEQUAL,[Ym]:n.EQUAL,[rc]:n.GEQUAL,[Km]:n.GREATER,[Zm]:n.NOTEQUAL};function rt(E,p){if(p.type===Bn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===Ht||p.magFilter===eo||p.magFilter===Es||p.magFilter===Gi||p.minFilter===Ht||p.minFilter===eo||p.minFilter===Es||p.minFilter===Gi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Te[p.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Te[p.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Te[p.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,it[p.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,it[p.minFilter]),p.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Mt[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Nt||p.minFilter!==Es&&p.minFilter!==Gi||p.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function ne(E,p){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,p.addEventListener("dispose",R));const B=p.source;let q=m.get(B);q===void 0&&(q={},m.set(B,q));const ue=z(p);if(ue!==E.__cacheKey){q[ue]===void 0&&(q[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),q[ue].usedTimes++;const pe=q[E.__cacheKey];pe!==void 0&&(q[E.__cacheKey].usedTimes--,pe.usedTimes===0&&N(p)),E.__cacheKey=ue,E.__webglTexture=q[ue].texture}return U}function me(E,p,U){return Math.floor(Math.floor(E/U)/p)}function fe(E,p,U,B){const ue=E.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,p.width,p.height,U,B,p.data);else{ue.sort((Ie,Se)=>Ie.start-Se.start);let pe=0;for(let Ie=1;Ie<ue.length;Ie++){const Se=ue[pe],ge=ue[Ie],He=Se.start+Se.count,Ge=me(ge.start,p.width,4),Ze=me(Se.start,p.width,4);ge.start<=He+1&&Ge===Ze&&me(ge.start+ge.count-1,p.width,4)===Ge?Se.count=Math.max(Se.count,ge.start+ge.count-Se.start):(++pe,ue[pe]=ge)}ue.length=pe+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),ie=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,p.width);for(let Ie=0,Se=ue.length;Ie<Se;Ie++){const ge=ue[Ie],He=Math.floor(ge.start/4),Ge=Math.ceil(ge.count/4),Ze=He%p.width,F=Math.floor(He/p.width),xe=Ge,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ze,F,xe,re,U,B,p.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function We(E,p,U){let B=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(B=n.TEXTURE_3D);const q=ne(E,p),ue=p.source;t.bindTexture(B,E.__webglTexture,n.TEXTURE0+U);const pe=i.get(ue);if(ue.version!==pe.__version||q===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){const re=et.getPrimaries(et.workingColorSpace),Me=p.colorSpace===wi?null:et.getPrimaries(p.colorSpace),Re=p.colorSpace===wi||re===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment);let ie=g(p.image,!1,r.maxTextureSize);ie=De(p,ie);const he=s.convert(p.format,p.colorSpace),Ie=s.convert(p.type);let Se=x(p.internalFormat,he,Ie,p.normalized,p.colorSpace,p.isVideoTexture);rt(B,p);let ge;const He=p.mipmaps,Ge=p.isVideoTexture!==!0,Ze=pe.__version===void 0||q===!0,F=ue.dataReady,xe=M(p,ie);if(p.isDepthTexture)Se=A(p.format===Wi,p.type),Ze&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Se,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Se,ie.width,ie.height,0,he,Ie,null));else if(p.isDataTexture)if(He.length>0){Ge&&Ze&&t.texStorage2D(n.TEXTURE_2D,xe,Se,He[0].width,He[0].height);for(let re=0,Me=He.length;re<Me;re++)ge=He[re],Ge?F&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,he,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,re,Se,ge.width,ge.height,0,he,Ie,ge.data);p.generateMipmaps=!1}else Ge?(Ze&&t.texStorage2D(n.TEXTURE_2D,xe,Se,ie.width,ie.height),F&&fe(p,ie,he,Ie)):t.texImage2D(n.TEXTURE_2D,0,Se,ie.width,ie.height,0,he,Ie,ie.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Ge&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Se,He[0].width,He[0].height,ie.depth);for(let re=0,Me=He.length;re<Me;re++)if(ge=He[re],p.format!==Sn)if(he!==null)if(Ge){if(F)if(p.layerUpdates.size>0){const Re=wu(ge.width,ge.height,p.format,p.type);for(const ae of p.layerUpdates){const Oe=ge.data.subarray(ae*Re/ge.data.BYTES_PER_ELEMENT,(ae+1)*Re/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ae,ge.width,ge.height,1,he,Oe)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ie.depth,he,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Se,ge.width,ge.height,ie.depth,0,ge.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ie.depth,he,Ie,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Se,ge.width,ge.height,ie.depth,0,he,Ie,ge.data)}else{Ge&&Ze&&t.texStorage2D(n.TEXTURE_2D,xe,Se,He[0].width,He[0].height);for(let re=0,Me=He.length;re<Me;re++)ge=He[re],p.format!==Sn?he!==null?Ge?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,he,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Se,ge.width,ge.height,0,ge.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ge.width,ge.height,he,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,re,Se,ge.width,ge.height,0,he,Ie,ge.data)}else if(p.isDataArrayTexture)if(Ge){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Se,ie.width,ie.height,ie.depth),F)if(p.layerUpdates.size>0){const re=wu(ie.width,ie.height,p.format,p.type);for(const Me of p.layerUpdates){const Re=ie.data.subarray(Me*re/ie.data.BYTES_PER_ELEMENT,(Me+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,ie.width,ie.height,1,he,Ie,Re)}p.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Ie,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,he,Ie,ie.data);else if(p.isData3DTexture)Ge?(Ze&&t.texStorage3D(n.TEXTURE_3D,xe,Se,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Ie,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,he,Ie,ie.data);else if(p.isFramebufferTexture){if(Ze)if(Ge)t.texStorage2D(n.TEXTURE_2D,xe,Se,ie.width,ie.height);else{let re=ie.width,Me=ie.height;for(let Re=0;Re<xe;Re++)t.texImage2D(n.TEXTURE_2D,Re,Se,re,Me,0,he,Ie,null),re>>=1,Me>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ie.parentNode!==re){re.appendChild(ie),d.add(p),re.onpaint=Me=>{const Re=Me.changedElements;for(const ae of d)Re.includes(ae.image)&&(ae.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ie);else{const Re=n.RGBA,ae=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Re,ae,Oe,ie)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(He.length>0){if(Ge&&Ze){const re=be(He[0]);t.texStorage2D(n.TEXTURE_2D,xe,Se,re.width,re.height)}for(let re=0,Me=He.length;re<Me;re++)ge=He[re],Ge?F&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,he,Ie,ge):t.texImage2D(n.TEXTURE_2D,re,Se,he,Ie,ge);p.generateMipmaps=!1}else if(Ge){if(Ze){const re=be(ie);t.texStorage2D(n.TEXTURE_2D,xe,Se,re.width,re.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Ie,ie)}else t.texImage2D(n.TEXTURE_2D,0,Se,he,Ie,ie);h(p)&&y(B),pe.__version=ue.version,p.onUpdate&&p.onUpdate(p)}E.__version=p.version}function Xe(E,p,U){if(p.image.length!==6)return;const B=ne(E,p),q=p.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const ue=i.get(q);if(q.version!==ue.__version||B===!0){t.activeTexture(n.TEXTURE0+U);const pe=et.getPrimaries(et.workingColorSpace),Z=p.colorSpace===wi?null:et.getPrimaries(p.colorSpace),ie=p.colorSpace===wi||pe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const he=p.isCompressedTexture||p.image[0].isCompressedTexture,Ie=p.image[0]&&p.image[0].isDataTexture,Se=[];for(let ae=0;ae<6;ae++)!he&&!Ie?Se[ae]=g(p.image[ae],!0,r.maxCubemapSize):Se[ae]=Ie?p.image[ae].image:p.image[ae],Se[ae]=De(p,Se[ae]);const ge=Se[0],He=s.convert(p.format,p.colorSpace),Ge=s.convert(p.type),Ze=x(p.internalFormat,He,Ge,p.normalized,p.colorSpace),F=p.isVideoTexture!==!0,xe=ue.__version===void 0||B===!0,re=q.dataReady;let Me=M(p,ge);rt(n.TEXTURE_CUBE_MAP,p);let Re;if(he){F&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ze,ge.width,ge.height);for(let ae=0;ae<6;ae++){Re=Se[ae].mipmaps;for(let Oe=0;Oe<Re.length;Oe++){const Ne=Re[Oe];p.format!==Sn?He!==null?F?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Ne.width,Ne.height,He,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,Ze,Ne.width,Ne.height,0,Ne.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Ne.width,Ne.height,He,Ge,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,Ze,Ne.width,Ne.height,0,He,Ge,Ne.data)}}}else{if(Re=p.mipmaps,F&&xe){Re.length>0&&Me++;const ae=be(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ie){F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Se[ae].width,Se[ae].height,He,Ge,Se[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,Se[ae].width,Se[ae].height,0,He,Ge,Se[ae].data);for(let Oe=0;Oe<Re.length;Oe++){const bt=Re[Oe].image[ae].image;F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,bt.width,bt.height,He,Ge,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,Ze,bt.width,bt.height,0,He,Ge,bt.data)}}else{F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,He,Ge,Se[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,He,Ge,Se[ae]);for(let Oe=0;Oe<Re.length;Oe++){const Ne=Re[Oe];F?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,He,Ge,Ne.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,Ze,He,Ge,Ne.image[ae])}}}h(p)&&y(n.TEXTURE_CUBE_MAP),ue.__version=q.version,p.onUpdate&&p.onUpdate(p)}E.__version=p.version}function Ve(E,p,U,B,q,ue){const pe=s.convert(U.format,U.colorSpace),Z=s.convert(U.type),ie=x(U.internalFormat,pe,Z,U.normalized,U.colorSpace),he=i.get(p),Ie=i.get(U);if(Ie.__renderTarget=p,!he.__hasExternalTextures){const Se=Math.max(1,p.width>>ue),ge=Math.max(1,p.height>>ue);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,ue,ie,Se,ge,p.depth,0,pe,Z,null):t.texImage2D(q,ue,ie,Se,ge,0,pe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ce(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,q,Ie.__webglTexture,0,j(p)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,q,Ie.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(E,p,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),p.depthBuffer){const B=p.depthTexture,q=B&&B.isDepthTexture?B.type:null,ue=A(p.stencilBuffer,q),pe=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ce(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j(p),ue,p.width,p.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,j(p),ue,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,ue,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,E)}else{const B=p.textures;for(let q=0;q<B.length;q++){const ue=B[q],pe=s.convert(ue.format,ue.colorSpace),Z=s.convert(ue.type),ie=x(ue.internalFormat,pe,Z,ue.normalized,ue.colorSpace);Ce(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j(p),ie,p.width,p.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,j(p),ie,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,ie,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function I(E,p,U){const B=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(p.depthTexture);if(q.__renderTarget=p,(!q.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),B){if(q.__webglInit===void 0&&(q.__webglInit=!0,p.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),rt(n.TEXTURE_CUBE_MAP,p.depthTexture);const he=s.convert(p.depthTexture.format),Ie=s.convert(p.depthTexture.type);let Se;p.depthTexture.format===mi?Se=n.DEPTH_COMPONENT24:p.depthTexture.format===Wi&&(Se=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Se,p.width,p.height,0,he,Ie,null)}}else Y(p.depthTexture,0);const ue=q.__webglTexture,pe=j(p),Z=B?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,ie=p.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(p.depthTexture.format===mi)Ce(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Z,ue,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ie,Z,ue,0);else if(p.depthTexture.format===Wi)Ce(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Z,ue,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ie,Z,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function W(E){const p=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==E.depthTexture){const B=E.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),B){const q=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,B.removeEventListener("dispose",q)};B.addEventListener("dispose",q),p.__depthDisposeCallback=q}p.__boundDepthTexture=B}if(E.depthTexture&&!p.__autoAllocateDepthBuffer)if(U)for(let B=0;B<6;B++)I(p.__webglFramebuffer[B],E,B);else{const B=E.texture.mipmaps;B&&B.length>0?I(p.__webglFramebuffer[0],E,0):I(p.__webglFramebuffer,E,0)}else if(U){p.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[B]),p.__webglDepthbuffer[B]===void 0)p.__webglDepthbuffer[B]=n.createRenderbuffer(),P(p.__webglDepthbuffer[B],E,!1);else{const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=p.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ue)}}else{const B=E.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),P(p.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(E,p,U){const B=i.get(E);p!==void 0&&Ve(B.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&W(E)}function K(E){const p=E.texture,U=i.get(E),B=i.get(p);E.addEventListener("dispose",_);const q=E.textures,ue=E.isWebGLCubeRenderTarget===!0,pe=q.length>1;if(pe||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=p.version,a.memory.textures++),ue){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(p.mipmaps&&p.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let ie=0;ie<p.mipmaps.length;ie++)U.__webglFramebuffer[Z][ie]=n.createFramebuffer()}else U.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<p.mipmaps.length;Z++)U.__webglFramebuffer[Z]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Z=0,ie=q.length;Z<ie;Z++){const he=i.get(q[Z]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ce(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){const ie=q[Z];U.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);const he=s.convert(ie.format,ie.colorSpace),Ie=s.convert(ie.type),Se=x(ie.internalFormat,he,Ie,ie.normalized,ie.colorSpace,E.isXRRenderTarget===!0),ge=j(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),P(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),rt(n.TEXTURE_CUBE_MAP,p);for(let Z=0;Z<6;Z++)if(p.mipmaps&&p.mipmaps.length>0)for(let ie=0;ie<p.mipmaps.length;ie++)Ve(U.__webglFramebuffer[Z][ie],E,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie);else Ve(U.__webglFramebuffer[Z],E,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);h(p)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Z=0,ie=q.length;Z<ie;Z++){const he=q[Z],Ie=i.get(he);let Se=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,Ie.__webglTexture),rt(Se,he),Ve(U.__webglFramebuffer,E,he,n.COLOR_ATTACHMENT0+Z,Se,0),h(he)&&y(Se)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,B.__webglTexture),rt(Z,p),p.mipmaps&&p.mipmaps.length>0)for(let ie=0;ie<p.mipmaps.length;ie++)Ve(U.__webglFramebuffer[ie],E,p,n.COLOR_ATTACHMENT0,Z,ie);else Ve(U.__webglFramebuffer,E,p,n.COLOR_ATTACHMENT0,Z,0);h(p)&&y(Z),t.unbindTexture()}E.depthBuffer&&W(E)}function ee(E){const p=E.textures;for(let U=0,B=p.length;U<B;U++){const q=p[U];if(h(q)){const ue=T(E),pe=i.get(q).__webglTexture;t.bindTexture(ue,pe),y(ue),t.unbindTexture()}}}const de=[],ce=[];function oe(E){if(E.samples>0){if(Ce(E)===!1){const p=E.textures,U=E.width,B=E.height;let q=n.COLOR_BUFFER_BIT;const ue=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(E),Z=p.length>1;if(Z)for(let he=0;he<p.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ie=E.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let he=0;he<p.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);const Ie=i.get(p[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,U,B,0,0,U,B,q,n.NEAREST),l===!0&&(de.length=0,ce.length=0,de.push(n.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.resolveDepthBuffer===!1&&(de.push(ue),ce.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let he=0;he<p.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);const Ie=i.get(p[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const p=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function j(E){return Math.min(r.maxSamples,E.samples)}function Ce(E){const p=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function C(E){const p=a.render.frame;u.get(E)!==p&&(u.set(E,p),E.update())}function De(E,p){const U=E.colorSpace,B=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==pa&&U!==wi&&(et.getTransfer(U)===ft?(B!==Sn||q!==un)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",U)),p}function be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=te,this.getTextureUnits=se,this.setTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=le,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Q,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bS(n,e){function t(i,r=wi){let s;const a=et.getTransfer(r);if(i===un)return n.UNSIGNED_BYTE;if(i===Ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pd)return n.BYTE;if(i===md)return n.SHORT;if(i===ls)return n.UNSIGNED_SHORT;if(i===Jl)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===vd)return n.ALPHA;if(i===xd)return n.RGB;if(i===Sn)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===Sd)return n.RED;if(i===ec)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===tc)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===Qs||i===js||i===ea||i===ta)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===el)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===rl||i===sl||i===al||i===ol||i===da||i===ll)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===il||i===rl)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===al)return s.COMPRESSED_R11_EAC;if(i===ol)return s.COMPRESSED_SIGNED_R11_EAC;if(i===da)return s.COMPRESSED_RG11_EAC;if(i===ll)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cl||i===ul||i===fl||i===dl||i===hl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml||i===bl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ul)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ml)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_l)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yl||i===El||i===Tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yl)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Al||i===wl||i===ha||i===Rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const yS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ES=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Pd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Tn({vertexShader:yS,fragmentShader:ES,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AS extends ji{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const b=typeof XRWebGLBinding<"u",g=new TS,h={},y=t.getContextAttributes();let T=null,x=null;const A=[],M=[],R=new nt;let _=null;const w=new cn;w.viewport=new Et;const N=new cn;N.viewport=new Et;const L=[w,N],k=new Fg;let te=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=A[ne];return me===void 0&&(me=new lo,A[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=A[ne];return me===void 0&&(me=new lo,A[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=A[ne];return me===void 0&&(me=new lo,A[ne]=me),me.getHandSpace()};function V(ne){const me=M.indexOf(ne.inputSource);if(me===-1)return;const fe=A[me];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,c||a),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",z);for(let ne=0;ne<A.length;ne++){const me=M[ne];me!==null&&(M[ne]=null,A[ne].disconnect(me))}te=null,se=null,g.reset();for(const ne in h)delete h[ne];e.setRenderTarget(T),m=null,f=null,d=null,r=null,x=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,We=null,Xe=null;y.depth&&(Xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Wi:mi,We=y.stencil?cs:Xn);const Ve={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Vn(f.textureWidth,f.textureHeight,{format:Sn,type:un,depthTexture:new Cr(f.textureWidth,f.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Vn(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(ne){for(let me=0;me<ne.removed.length;me++){const fe=ne.removed[me],We=M.indexOf(fe);We>=0&&(M[We]=null,A[We].disconnect(fe))}for(let me=0;me<ne.added.length;me++){const fe=ne.added[me];let We=M.indexOf(fe);if(We===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=M.length){M.push(fe),We=Ve;break}else if(M[Ve]===null){M[Ve]=fe,We=Ve;break}if(We===-1)break}const Xe=A[We];Xe&&Xe.connect(fe)}}const Y=new H,le=new H;function _e(ne,me,fe){Y.setFromMatrixPosition(me.matrixWorld),le.setFromMatrixPosition(fe.matrixWorld);const We=Y.distanceTo(le),Xe=me.projectionMatrix.elements,Ve=fe.projectionMatrix.elements,P=Xe[14]/(Xe[10]-1),I=Xe[14]/(Xe[10]+1),W=(Xe[9]+1)/Xe[5],Q=(Xe[9]-1)/Xe[5],K=(Xe[8]-1)/Xe[0],ee=(Ve[8]+1)/Ve[0],de=P*K,ce=P*ee,oe=We/(-K+ee),j=oe*-K;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(j),ne.translateZ(oe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Xe[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ce=P+oe,C=I+oe,De=de-j,be=ce+(We-j),E=W*I/C*Ce,p=Q*I/C*Ce;ne.projectionMatrix.makePerspective(De,be,E,p,Ce,C),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ve(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let me=ne.near,fe=ne.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),k.near=N.near=w.near=me,k.far=N.far=w.far=fe,(te!==k.near||se!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),te=k.near,se=k.far),k.layers.mask=ne.layers.mask|6,w.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;const We=ne.parent,Xe=k.cameras;ve(k,We);for(let Ve=0;Ve<Xe.length;Ve++)ve(Xe[Ve],We);Xe.length===2?_e(k,w,N):k.projectionMatrix.copy(w.projectionMatrix),Te(ne,k,We)};function Te(ne,me,fe){fe===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Cl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(ne){return h[ne]};let it=null;function Mt(ne,me){if(u=me.getViewerPose(c||a),v=me,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let We=!1;fe.length!==k.cameras.length&&(k.cameras.length=0,We=!0);for(let I=0;I<fe.length;I++){const W=fe[I];let Q=null;if(m!==null)Q=m.getViewport(W);else{const ee=d.getViewSubImage(f,W);Q=ee.viewport,I===0&&(e.setRenderTargetTextures(x,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(x))}let K=L[I];K===void 0&&(K=new cn,K.layers.enable(I),K.viewport=new Et,L[I]=K),K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(W.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(k.matrix.copy(K.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),We===!0&&k.cameras.push(K)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=i.getBinding();const I=d.getDepthInformation(fe[0]);I&&I.isValid&&I.texture&&g.init(I,r.renderState)}if(Xe&&Xe.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<fe.length;I++){const W=fe[I].camera;if(W){let Q=h[W];Q||(Q=new Pd,h[W]=Q);const K=d.getCameraImage(W);Q.sourceTexture=K}}}}for(let fe=0;fe<A.length;fe++){const We=M[fe],Xe=A[fe];We!==null&&Xe!==void 0&&Xe.update(We,me,c||a)}it&&it(ne,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const rt=new Ud;rt.setAnimationLoop(Mt),this.setAnimationLoop=function(ne){it=ne},this.dispose=function(){}}}const wS=new Ct,Hd=new Ye;Hd.set(-1,0,0,0,1,0,0,0,1);function RS(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Dd(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,y,T,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&m(g,h,x)):h.isMeshMatcapMaterial?(s(g,h),v(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),b(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,y,T):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Qt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Qt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const y=e.get(h),T=y.envMap,x=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(wS.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hd),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,y,T){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*y,g.scale.value=T*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,y){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Qt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function b(g,h){const y=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,A){const M=A.program;i.uniformBlockBinding(x,M)}function c(x,A){let M=r[x.id];M===void 0&&(g(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",y));const R=A.program;i.updateUBOMapping(x,R);const _=e.render.frame;s[x.id]!==_&&(f(x),s[x.id]=_)}function u(x){const A=d();x.__bindingPointIndex=A;const M=n.createBuffer(),R=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const A=r[x.id],M=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let _=0,w=M.length;_<w;_++){const N=M[_];if(Array.isArray(N))for(let L=0,k=N.length;L<k;L++)m(N[L],_,L,R);else m(N,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,A,M,R){if(b(x,A,M,R)===!0){const _=x.__offset,w=x.value;if(Array.isArray(w)){let N=0;for(let L=0;L<w.length;L++){const k=w[L],te=h(k);v(k,x.__data,N),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(N+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function v(x,A,M){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,M)}function b(x,A,M,R){const _=x.value,w=A+"_"+M;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{const N=R[w];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function g(x){const A=x.uniforms;let M=0;const R=16;for(let w=0,N=A.length;w<N;w++){const L=Array.isArray(A[w])?A[w]:[A[w]];for(let k=0,te=L.length;k<te;k++){const se=L[k],V=Array.isArray(se.value)?se.value:[se.value];for(let J=0,z=V.length;J<z;J++){const Y=V[J],le=h(Y),_e=M%R,ve=_e%le.boundary,Te=_e+ve;M+=ve,Te!==0&&R-Te<le.storage&&(M+=R-Te),se.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=M,M+=le.storage}}}const _=M%R;return _>0&&(M+=R-_),x.__size=M,x.__cache={},this}function h(x){const A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",x),A}function y(x){const A=x.target;A.removeEventListener("dispose",y);const M=a.indexOf(A.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function T(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:T}}const PS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function DS(){return In===null&&(In=new yg(PS,16,16,Zi,pi),In.name="DFG_LUT",In.minFilter=Ht,In.magFilter=Ht,In.wrapS=oi,In.wrapT=oi,In.generateMipmaps=!1,In.needsUpdate=!0),In}class IS{constructor(e={}){const{canvas:t=jm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:m=un}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const b=m,g=new Set([nc,tc,ec]),h=new Set([un,Xn,ls,cs,Ql,jl]),y=new Uint32Array(4),T=new Int32Array(4),x=new H;let A=null,M=null;const R=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let L=!1,k=null,te=null,se=null,V=null;this._outputColorSpace=nn;let J=0,z=0,Y=null,le=-1,_e=null;const ve=new Et,Te=new Et;let it=null;const Mt=new ut(0);let rt=0,ne=t.width,me=t.height,fe=1,We=null,Xe=null;const Ve=new Et(0,0,ne,me),P=new Et(0,0,ne,me);let I=!1;const W=new Rd;let Q=!1,K=!1;const ee=new Ct,de=new H,ce=new Et,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function Ce(){return Y===null?fe:1}let C=i;function De(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zl}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",wn,!1),C===null){const O="webgl2";if(C=De(O,S),C===null)throw De(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw at("WebGLRenderer: "+S.message),S}let be,E,p,U,B,q,ue,pe,Z,ie,he,Ie,Se,ge,He,Ge,Ze,F,xe,re,Me,Re,ae;function Oe(){be=new Dv(C),be.init(),Me=new bS(C,be),E=new yv(C,be,e,Me),p=new SS(C,be),E.reversedDepthBuffer&&f&&p.buffers.depth.setReversed(!0),te=C.createFramebuffer(),se=C.createFramebuffer(),V=C.createFramebuffer(),U=new Uv(C),B=new aS,q=new MS(C,be,p,B,E,Me,U),ue=new Pv(N),pe=new Bg(C),Re=new Mv(C,pe),Z=new Iv(C,pe,U,Re),ie=new Fv(C,Z,pe,Re,U),F=new Nv(C,E,q),He=new Ev(B),he=new sS(N,ue,be,E,Re,He),Ie=new RS(N,B),Se=new lS,ge=new pS(be),Ze=new Sv(N,ue,p,ie,v,l),Ge=new xS(N,ie,E),ae=new CS(C,U,E,p),xe=new bv(C,be,U),re=new Lv(C,be,U),U.programs=he.programs,N.capabilities=E,N.extensions=be,N.properties=B,N.renderLists=Se,N.shadowMap=Ge,N.state=p,N.info=U}Oe(),b!==un&&(w=new Bv(b,t.width,t.height,o,r,s));const Ne=new AS(N,C);this.xr=Ne,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(S){S!==void 0&&(fe=S,this.setSize(ne,me,!1))},this.getSize=function(S){return S.set(ne,me)},this.setSize=function(S,O,$=!0){if(Ne.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=S,me=O,t.width=Math.floor(S*fe),t.height=Math.floor(O*fe),$===!0&&(t.style.width=S+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(ne*fe,me*fe).floor()},this.setDrawingBufferSize=function(S,O,$){ne=S,me=O,fe=$,t.width=Math.floor(S*$),t.height=Math.floor(O*$),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(b===un){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ve)},this.getViewport=function(S){return S.copy(Ve)},this.setViewport=function(S,O,$,G){S.isVector4?Ve.set(S.x,S.y,S.z,S.w):Ve.set(S,O,$,G),p.viewport(ve.copy(Ve).multiplyScalar(fe).round())},this.getScissor=function(S){return S.copy(P)},this.setScissor=function(S,O,$,G){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,O,$,G),p.scissor(Te.copy(P).multiplyScalar(fe).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(S){p.setScissorTest(I=S)},this.setOpaqueSort=function(S){We=S},this.setTransparentSort=function(S){Xe=S},this.getClearColor=function(S){return S.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,$=!0){let G=0;if(S){let X=!1;if(Y!==null){const we=Y.texture.format;X=g.has(we)}if(X){const we=Y.texture.type,Ue=h.has(we),Ae=Ze.getClearColor(),Fe=Ze.getClearAlpha(),ze=Ae.r,Je=Ae.g,je=Ae.b;Ue?(y[0]=ze,y[1]=Je,y[2]=je,y[3]=Fe,C.clearBufferuiv(C.COLOR,0,y)):(T[0]=ze,T[1]=Je,T[2]=je,T[3]=Fe,C.clearBufferiv(C.COLOR,0,T))}else G|=C.COLOR_BUFFER_BIT}O&&(G|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),Ze.dispose(),Se.dispose(),ge.dispose(),B.dispose(),ue.dispose(),ie.dispose(),Re.dispose(),ae.dispose(),he.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",mc),Ne.removeEventListener("sessionend",gc),Ii.stop()};function bt(S){S.preventDefault(),lu("WebGLRenderer: Context Lost."),L=!0}function _t(){lu("WebGLRenderer: Context Restored."),L=!1;const S=U.autoReset,O=Ge.enabled,$=Ge.autoUpdate,G=Ge.needsUpdate,X=Ge.type;Oe(),U.autoReset=S,Ge.enabled=O,Ge.autoUpdate=$,Ge.needsUpdate=G,Ge.type=X}function wn(S){at("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rn(S){const O=S.target;O.removeEventListener("dispose",Rn),Vd(O)}function Vd(S){Gd(S),B.remove(S)}function Gd(S){const O=B.get(S).programs;O!==void 0&&(O.forEach(function($){he.releaseProgram($)}),S.isShaderMaterial&&he.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,$,G,X,we){O===null&&(O=oe);const Ue=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ae=qd(S,O,$,G,X);p.setMaterial(G,Ue);let Fe=$.index,ze=1;if(G.wireframe===!0){if(Fe=Z.getWireframeAttribute($),Fe===void 0)return;ze=2}const Je=$.drawRange,je=$.attributes.position;let ke=Je.start*ze,dt=(Je.start+Je.count)*ze;we!==null&&(ke=Math.max(ke,we.start*ze),dt=Math.min(dt,(we.start+we.count)*ze)),Fe!==null?(ke=Math.max(ke,0),dt=Math.min(dt,Fe.count)):je!=null&&(ke=Math.max(ke,0),dt=Math.min(dt,je.count));const At=dt-ke;if(At<0||At===1/0)return;Re.setup(X,G,Ae,$,Fe);let yt,pt=xe;if(Fe!==null&&(yt=pe.get(Fe),pt=re,pt.setIndex(yt)),X.isMesh)G.wireframe===!0?(p.setLineWidth(G.wireframeLinewidth*Ce()),pt.setMode(C.LINES)):pt.setMode(C.TRIANGLES);else if(X.isLine){let Ot=G.linewidth;Ot===void 0&&(Ot=1),p.setLineWidth(Ot*Ce()),X.isLineSegments?pt.setMode(C.LINES):X.isLineLoop?pt.setMode(C.LINE_LOOP):pt.setMode(C.LINE_STRIP)}else X.isPoints?pt.setMode(C.POINTS):X.isSprite&&pt.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(be.get("WEBGL_multi_draw"))pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ot=X._multiDrawStarts,Le=X._multiDrawCounts,jt=X._multiDrawCount,st=Fe?pe.get(Fe).bytesPerElement:1,on=B.get(G).currentProgram.getUniforms();for(let Cn=0;Cn<jt;Cn++)on.setValue(C,"_gl_DrawID",Cn),pt.render(Ot[Cn]/st,Le[Cn])}else if(X.isInstancedMesh)pt.renderInstances(ke,At,X.count);else if($.isInstancedBufferGeometry){const Ot=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Le=Math.min($.instanceCount,Ot);pt.renderInstances(ke,At,Le)}else pt.render(ke,At)};function pc(S,O,$){S.transparent===!0&&S.side===ri&&S.forceSinglePass===!1?(S.side=Qt,S.needsUpdate=!0,_s(S,O,$),S.side=Di,S.needsUpdate=!0,_s(S,O,$),S.side=ri):_s(S,O,$)}this.compile=function(S,O,$=null){$===null&&($=S),M=ge.get($),M.init(O),_.push(M),$.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),S!==$&&S.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights();const G=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const Ae=we[Ue];pc(Ae,$,X),G.add(Ae)}else pc(we,$,X),G.add(we)}),M=_.pop(),G},this.compileAsync=function(S,O,$=null){const G=this.compile(S,O,$);return new Promise(X=>{function we(){if(G.forEach(function(Ue){B.get(Ue).currentProgram.isReady()&&G.delete(Ue)}),G.size===0){X(S);return}setTimeout(we,10)}be.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ba=null;function Wd(S){Ba&&Ba(S)}function mc(){Ii.stop()}function gc(){Ii.start()}const Ii=new Ud;Ii.setAnimationLoop(Wd),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(S){Ba=S,Ne.setAnimationLoop(S),S===null?Ii.stop():Ii.start()},Ne.addEventListener("sessionstart",mc),Ne.addEventListener("sessionend",gc),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;k!==null&&k.renderStart(S,O);const $=Ne.enabled===!0&&Ne.isPresenting===!0,G=w!==null&&(Y===null||$)&&w.begin(N,Y);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(O),O=Ne.getCamera()),S.isScene===!0&&S.onBeforeRender(N,S,O,Y),M=ge.get(S,_.length),M.init(O),M.state.textureUnits=q.getTextureUnits(),_.push(M),ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(ee,zn,O.reversedDepth),K=this.localClippingEnabled,Q=He.init(this.clippingPlanes,K),A=Se.get(S,R.length),A.init(),R.push(A),Ne.enabled===!0&&Ne.isPresenting===!0){const Ue=N.xr.getDepthSensingMesh();Ue!==null&&za(Ue,O,-1/0,N.sortObjects)}za(S,O,0,N.sortObjects),A.finish(),N.sortObjects===!0&&A.sort(We,Xe,O.reversedDepth),j=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,j&&Ze.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&He.beginShadows();const X=M.state.shadowsArray;if(Ge.render(X,S,O),Q===!0&&He.endShadows(),(G&&w.hasRenderPass())===!1){const Ue=A.opaque,Ae=A.transmissive;if(M.setupLights(),O.isArrayCamera){const Fe=O.cameras;if(Ae.length>0)for(let ze=0,Je=Fe.length;ze<Je;ze++){const je=Fe[ze];vc(Ue,Ae,S,je)}j&&Ze.render(S);for(let ze=0,Je=Fe.length;ze<Je;ze++){const je=Fe[ze];_c(A,S,je,je.viewport)}}else Ae.length>0&&vc(Ue,Ae,S,O),j&&Ze.render(S),_c(A,S,O)}Y!==null&&z===0&&(q.updateMultisampleRenderTarget(Y),q.updateRenderTargetMipmap(Y)),G&&w.end(N),S.isScene===!0&&S.onAfterRender(N,S,O),Re.resetDefaultState(),le=-1,_e=null,_.pop(),_.length>0?(M=_[_.length-1],q.setTextureUnits(M.state.textureUnits),Q===!0&&He.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,k!==null&&k.renderEnd()};function za(S,O,$,G){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){G&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ee);const Ue=ie.update(S),Ae=S.material;Ae.visible&&A.push(S,Ue,Ae,$,ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){const Ue=ie.update(S),Ae=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ce.copy(S.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ce.copy(Ue.boundingSphere.center)),ce.applyMatrix4(S.matrixWorld).applyMatrix4(ee)),Array.isArray(Ae)){const Fe=Ue.groups;for(let ze=0,Je=Fe.length;ze<Je;ze++){const je=Fe[ze],ke=Ae[je.materialIndex];ke&&ke.visible&&A.push(S,Ue,ke,$,ce.z,je)}}else Ae.visible&&A.push(S,Ue,Ae,$,ce.z,null)}}const we=S.children;for(let Ue=0,Ae=we.length;Ue<Ae;Ue++)za(we[Ue],O,$,G)}function _c(S,O,$,G){const{opaque:X,transmissive:we,transparent:Ue}=S;M.setupLightsView($),Q===!0&&He.setGlobalState(N.clippingPlanes,$),G&&p.viewport(ve.copy(G)),X.length>0&&gs(X,O,$),we.length>0&&gs(we,O,$),Ue.length>0&&gs(Ue,O,$),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function vc(S,O,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){const ke=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new Vn(1,1,{generateMipmaps:!0,type:ke?pi:un,minFilter:Gi,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const we=M.state.transmissionRenderTarget[G.id],Ue=G.viewport||ve;we.setSize(Ue.z*N.transmissionResolutionScale,Ue.w*N.transmissionResolutionScale);const Ae=N.getRenderTarget(),Fe=N.getActiveCubeFace(),ze=N.getActiveMipmapLevel();N.setRenderTarget(we),N.getClearColor(Mt),rt=N.getClearAlpha(),rt<1&&N.setClearColor(16777215,.5),N.clear(),j&&Ze.render($);const Je=N.toneMapping;N.toneMapping=Hn;const je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),Q===!0&&He.setGlobalState(N.clippingPlanes,G),gs(S,$,G),q.updateMultisampleRenderTarget(we),q.updateRenderTargetMipmap(we),be.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let dt=0,At=O.length;dt<At;dt++){const yt=O[dt],{object:pt,geometry:Ot,material:Le,group:jt}=yt;if(Le.side===ri&&pt.layers.test(G.layers)){const st=Le.side;Le.side=Qt,Le.needsUpdate=!0,xc(pt,$,G,Ot,Le,jt),Le.side=st,Le.needsUpdate=!0,ke=!0}}ke===!0&&(q.updateMultisampleRenderTarget(we),q.updateRenderTargetMipmap(we))}N.setRenderTarget(Ae,Fe,ze),N.setClearColor(Mt,rt),je!==void 0&&(G.viewport=je),N.toneMapping=Je}function gs(S,O,$){const G=O.isScene===!0?O.overrideMaterial:null;for(let X=0,we=S.length;X<we;X++){const Ue=S[X],{object:Ae,geometry:Fe,group:ze}=Ue;let Je=Ue.material;Je.allowOverride===!0&&G!==null&&(Je=G),Ae.layers.test($.layers)&&xc(Ae,O,$,Fe,Je,ze)}}function xc(S,O,$,G,X,we){S.onBeforeRender(N,O,$,G,X,we),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(N,O,$,G,S,we),X.transparent===!0&&X.side===ri&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,N.renderBufferDirect($,O,G,X,S,we),X.side=Di,X.needsUpdate=!0,N.renderBufferDirect($,O,G,X,S,we),X.side=ri):N.renderBufferDirect($,O,G,X,S,we),S.onAfterRender(N,O,$,G,X,we)}function _s(S,O,$){O.isScene!==!0&&(O=oe);const G=B.get(S),X=M.state.lights,we=M.state.shadowsArray,Ue=X.state.version,Ae=he.getParameters(S,X.state,we,O,$,M.state.lightProbeGridArray),Fe=he.getProgramCacheKey(Ae);let ze=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Je=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=ue.get(S.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",Rn),ze=new Map,G.programs=ze);let je=ze.get(Fe);if(je!==void 0){if(G.currentProgram===je&&G.lightsStateVersion===Ue)return Mc(S,Ae),je}else Ae.uniforms=he.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,$,Ae),S.onBeforeCompile(Ae,N),je=he.acquireProgram(Ae,Fe),ze.set(Fe,je),G.uniforms=Ae.uniforms;const ke=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=He.uniform),Mc(S,Ae),G.needsLights=Yd(S),G.lightsStateVersion=Ue,G.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=je,G.uniformsList=null,je}function Sc(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=na.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Mc(S,O){const $=B.get(S);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Xd(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let $=0,G=S.length;$<G;$++){const X=S[$];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function qd(S,O,$,G,X){O.isScene!==!0&&(O=oe),q.resetTextureUnits();const we=O.fog,Ue=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Ae=Y===null?N.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:et.workingColorSpace,Fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,ze=ue.get(G.envMap||Ue,Fe),Je=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,At=!!$.morphAttributes.color;let yt=Hn;G.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(yt=N.toneMapping);const pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ot=pt!==void 0?pt.length:0,Le=B.get(G),jt=M.state.lights;if(Q===!0&&(K===!0||S!==_e)){const vt=S===_e&&G.id===le;He.setState(G,S,vt)}let st=!1;G.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==jt.state.version||Le.outputColorSpace!==Ae||X.isBatchedMesh&&Le.batching===!1||!X.isBatchedMesh&&Le.batching===!0||X.isBatchedMesh&&Le.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Le.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Le.instancing===!1||!X.isInstancedMesh&&Le.instancing===!0||X.isSkinnedMesh&&Le.skinning===!1||!X.isSkinnedMesh&&Le.skinning===!0||X.isInstancedMesh&&Le.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Le.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Le.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Le.instancingMorph===!1&&X.morphTexture!==null||Le.envMap!==ze||G.fog===!0&&Le.fog!==we||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==He.numPlanes||Le.numIntersection!==He.numIntersection)||Le.vertexAlphas!==Je||Le.vertexTangents!==je||Le.morphTargets!==ke||Le.morphNormals!==dt||Le.morphColors!==At||Le.toneMapping!==yt||Le.morphTargetsCount!==Ot||!!Le.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Le.__version=G.version);let on=Le.currentProgram;st===!0&&(on=_s(G,O,X),k&&G.isNodeMaterial&&k.onUpdateProgram(G,on,Le));let Cn=!1,_i=!1,er=!1;const mt=on.getUniforms(),wt=Le.uniforms;if(p.useProgram(on.program)&&(Cn=!0,_i=!0,er=!0),G.id!==le&&(le=G.id,_i=!0),Le.needsLights){const vt=Xd(M.state.lightProbeGridArray,X);Le.lightProbeGrid!==vt&&(Le.lightProbeGrid=vt,_i=!0)}if(Cn||_e!==S){p.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),mt.setValue(C,"projectionMatrix",S.projectionMatrix),mt.setValue(C,"viewMatrix",S.matrixWorldInverse);const xi=mt.map.cameraPosition;xi!==void 0&&xi.setValue(C,de.setFromMatrixPosition(S.matrixWorld)),E.logarithmicDepthBuffer&&mt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),_e!==S&&(_e=S,_i=!0,er=!0)}if(Le.needsLights&&(jt.state.directionalShadowMap.length>0&&mt.setValue(C,"directionalShadowMap",jt.state.directionalShadowMap,q),jt.state.spotShadowMap.length>0&&mt.setValue(C,"spotShadowMap",jt.state.spotShadowMap,q),jt.state.pointShadowMap.length>0&&mt.setValue(C,"pointShadowMap",jt.state.pointShadowMap,q)),X.isSkinnedMesh){mt.setOptional(C,X,"bindMatrix"),mt.setOptional(C,X,"bindMatrixInverse");const vt=X.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(C,"boneTexture",vt.boneTexture,q))}X.isBatchedMesh&&(mt.setOptional(C,X,"batchingTexture"),mt.setValue(C,"batchingTexture",X._matricesTexture,q),mt.setOptional(C,X,"batchingIdTexture"),mt.setValue(C,"batchingIdTexture",X._indirectTexture,q),mt.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&mt.setValue(C,"batchingColorTexture",X._colorsTexture,q));const vi=$.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&F.update(X,$,on),(_i||Le.receiveShadow!==X.receiveShadow)&&(Le.receiveShadow=X.receiveShadow,mt.setValue(C,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(wt.envMapIntensity.value=O.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=DS()),_i){if(mt.setValue(C,"toneMappingExposure",N.toneMappingExposure),Le.needsLights&&$d(wt,er),we&&G.fog===!0&&Ie.refreshFogUniforms(wt,we),Ie.refreshMaterialUniforms(wt,G,fe,me,M.state.transmissionRenderTarget[S.id]),Le.needsLights&&Le.lightProbeGrid){const vt=Le.lightProbeGrid;wt.probesSH.value=vt.texture,wt.probesMin.value.copy(vt.boundingBox.min),wt.probesMax.value.copy(vt.boundingBox.max),wt.probesResolution.value.copy(vt.resolution)}na.upload(C,Sc(Le),wt,q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(na.upload(C,Sc(Le),wt,q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(C,"center",X.center),mt.setValue(C,"modelViewMatrix",X.modelViewMatrix),mt.setValue(C,"normalMatrix",X.normalMatrix),mt.setValue(C,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){const vt=G.uniformsGroups;for(let xi=0,tr=vt.length;xi<tr;xi++){const bc=vt[xi];ae.update(bc,on),ae.bind(bc,on)}}return on}function $d(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Yd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(S,O,$){const G=B.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),B.get(S.texture).__webglTexture=O,B.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const $=B.get(S);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,$=0){Y=S,J=O,z=$;let G=null,X=!1,we=!1;if(S){const Ae=B.get(S);if(Ae.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(C.FRAMEBUFFER,Ae.__webglFramebuffer),ve.copy(S.viewport),Te.copy(S.scissor),it=S.scissorTest,p.viewport(ve),p.scissor(Te),p.setScissorTest(it),le=-1;return}else if(Ae.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(Ae.__hasExternalTextures)q.rebindTextures(S,B.get(S.texture).__webglTexture,B.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Je=S.depthTexture;if(Ae.__boundDepthTexture!==Je){if(Je!==null&&B.has(Je)&&(S.width!==Je.image.width||S.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const ze=B.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?G=ze[O][$]:G=ze[O],X=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?G=B.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[$]:G=ze,ve.copy(S.viewport),Te.copy(S.scissor),it=S.scissorTest}else ve.copy(Ve).multiplyScalar(fe).floor(),Te.copy(P).multiplyScalar(fe).floor(),it=I;if($!==0&&(G=te),p.bindFramebuffer(C.FRAMEBUFFER,G)&&p.drawBuffers(S,G),p.viewport(ve),p.scissor(Te),p.setScissorTest(it),X){const Ae=B.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,$)}else if(we){const Ae=O;for(let Fe=0;Fe<S.textures.length;Fe++){const ze=B.get(S.textures[Fe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,$,Ae)}}else if(S!==null&&$!==0){const Ae=B.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ae.__webglTexture,$)}le=-1},this.readRenderTargetPixels=function(S,O,$,G,X,we,Ue,Ae=0){if(!(S&&S.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=B.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){p.bindFramebuffer(C.FRAMEBUFFER,Fe);try{const ze=S.textures[Ae],Je=ze.format,je=ze.type;if(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),!E.textureFormatReadable(Je)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(je)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-G&&$>=0&&$<=S.height-X&&C.readPixels(O,$,G,X,Me.convert(Je),Me.convert(je),we)}finally{const ze=Y!==null?B.get(Y).__webglFramebuffer:null;p.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,O,$,G,X,we,Ue,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=B.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(O>=0&&O<=S.width-G&&$>=0&&$<=S.height-X){p.bindFramebuffer(C.FRAMEBUFFER,Fe);const ze=S.textures[Ae],Je=ze.format,je=ze.type;if(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),!E.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.bufferData(C.PIXEL_PACK_BUFFER,we.byteLength,C.STREAM_READ),C.readPixels(O,$,G,X,Me.convert(Je),Me.convert(je),0);const dt=Y!==null?B.get(Y).__webglFramebuffer:null;p.bindFramebuffer(C.FRAMEBUFFER,dt);const At=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await eg(C,At,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,we),C.deleteBuffer(ke),C.deleteSync(At),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,$=0){const G=Math.pow(2,-$),X=Math.floor(S.image.width*G),we=Math.floor(S.image.height*G),Ue=O!==null?O.x:0,Ae=O!==null?O.y:0;q.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,Ue,Ae,X,we),p.unbindTexture()},this.copyTextureToTexture=function(S,O,$=null,G=null,X=0,we=0){let Ue,Ae,Fe,ze,Je,je,ke,dt,At;const yt=S.isCompressedTexture?S.mipmaps[we]:S.image;if($!==null)Ue=$.max.x-$.min.x,Ae=$.max.y-$.min.y,Fe=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,Je=$.min.y,je=$.isBox3?$.min.z:0;else{const wt=Math.pow(2,-X);Ue=Math.floor(yt.width*wt),Ae=Math.floor(yt.height*wt),S.isDataArrayTexture?Fe=yt.depth:S.isData3DTexture?Fe=Math.floor(yt.depth*wt):Fe=1,ze=0,Je=0,je=0}G!==null?(ke=G.x,dt=G.y,At=G.z):(ke=0,dt=0,At=0);const pt=Me.convert(O.format),Ot=Me.convert(O.type);let Le;O.isData3DTexture?(q.setTexture3D(O,0),Le=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(q.setTexture2DArray(O,0),Le=C.TEXTURE_2D_ARRAY):(q.setTexture2D(O,0),Le=C.TEXTURE_2D),p.activeTexture(C.TEXTURE0),p.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),p.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),p.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const jt=p.getParameter(C.UNPACK_ROW_LENGTH),st=p.getParameter(C.UNPACK_IMAGE_HEIGHT),on=p.getParameter(C.UNPACK_SKIP_PIXELS),Cn=p.getParameter(C.UNPACK_SKIP_ROWS),_i=p.getParameter(C.UNPACK_SKIP_IMAGES);p.pixelStorei(C.UNPACK_ROW_LENGTH,yt.width),p.pixelStorei(C.UNPACK_IMAGE_HEIGHT,yt.height),p.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),p.pixelStorei(C.UNPACK_SKIP_ROWS,Je),p.pixelStorei(C.UNPACK_SKIP_IMAGES,je);const er=S.isDataArrayTexture||S.isData3DTexture,mt=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const wt=B.get(S),vi=B.get(O),vt=B.get(wt.__renderTarget),xi=B.get(vi.__renderTarget);p.bindFramebuffer(C.READ_FRAMEBUFFER,vt.__webglFramebuffer),p.bindFramebuffer(C.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let tr=0;tr<Fe;tr++)er&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,B.get(S).__webglTexture,X,je+tr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,B.get(O).__webglTexture,we,At+tr)),C.blitFramebuffer(ze,Je,Ue,Ae,ke,dt,Ue,Ae,C.DEPTH_BUFFER_BIT,C.NEAREST);p.bindFramebuffer(C.READ_FRAMEBUFFER,null),p.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||B.has(S)){const wt=B.get(S),vi=B.get(O);p.bindFramebuffer(C.READ_FRAMEBUFFER,se),p.bindFramebuffer(C.DRAW_FRAMEBUFFER,V);for(let vt=0;vt<Fe;vt++)er?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,wt.__webglTexture,X,je+vt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,wt.__webglTexture,X),mt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vi.__webglTexture,we,At+vt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,vi.__webglTexture,we),X!==0?C.blitFramebuffer(ze,Je,Ue,Ae,ke,dt,Ue,Ae,C.COLOR_BUFFER_BIT,C.NEAREST):mt?C.copyTexSubImage3D(Le,we,ke,dt,At+vt,ze,Je,Ue,Ae):C.copyTexSubImage2D(Le,we,ke,dt,ze,Je,Ue,Ae);p.bindFramebuffer(C.READ_FRAMEBUFFER,null),p.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else mt?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Le,we,ke,dt,At,Ue,Ae,Fe,pt,Ot,yt.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Le,we,ke,dt,At,Ue,Ae,Fe,pt,yt.data):C.texSubImage3D(Le,we,ke,dt,At,Ue,Ae,Fe,pt,Ot,yt):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,we,ke,dt,Ue,Ae,pt,Ot,yt.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,we,ke,dt,yt.width,yt.height,pt,yt.data):C.texSubImage2D(C.TEXTURE_2D,we,ke,dt,Ue,Ae,pt,Ot,yt);p.pixelStorei(C.UNPACK_ROW_LENGTH,jt),p.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st),p.pixelStorei(C.UNPACK_SKIP_PIXELS,on),p.pixelStorei(C.UNPACK_SKIP_ROWS,Cn),p.pixelStorei(C.UNPACK_SKIP_IMAGES,_i),we===0&&O.generateMipmaps&&C.generateMipmap(Le),p.unbindTexture()},this.initRenderTarget=function(S){B.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),p.unbindTexture()},this.resetState=function(){J=0,z=0,Y=null,p.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const LS={class:"hero",id:"hero"},US={class:"container"},NS={class:"hero-visual fade-in-down"},FS=An({__name:"Hero",setup(n){const e=ot(null);let t=null,i=0,r=null;return Ra(()=>{if(!e.value)return;const s=new gg,a=new cn(42,1,.1,100);a.position.z=5.8,t=new IS({alpha:!0,antialias:!0}),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.outputColorSpace=nn,e.value.appendChild(t.domElement);const o={uTime:{value:0},uPointer:{value:new nt(0,0)}},l=new lc(1.55,64),c=new Tn({uniforms:o,vertexShader:`
      uniform float uTime;
      uniform vec2 uPointer;
      varying vec3 vNormal;
      varying vec3 vPosition;

      float wave(vec3 point) {
        return sin(point.x * 3.2 + uTime * 1.1)
          + sin(point.y * 4.1 - uTime * 0.8)
          + sin(point.z * 5.0 + uTime * 0.9);
      }

      void main() {
        vec3 displaced = position + normal * wave(position) * 0.075;
        displaced += normal * sin(position.y * 8.0 + uTime * 1.4) * 0.035;
        displaced.x += uPointer.x * 0.08;
        displaced.y += uPointer.y * 0.08;
        vNormal = normalize(normalMatrix * normal);
        vPosition = displaced;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec3 light = normalize(vec3(-0.5, 0.8, 1.0));
        float glow = pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 2.0);
        float lighting = max(dot(vNormal, light), 0.0);
        float ripple = sin(vPosition.y * 5.0 + uTime) * 0.08;
        vec3 deep = vec3(0.01, 0.07, 0.045);
        vec3 emerald = vec3(0.05, 0.72, 0.35);
        vec3 lime = vec3(0.55, 1.0, 0.22);
        vec3 color = mix(deep, emerald, lighting + glow * 0.7);
        color = mix(color, lime, smoothstep(0.25, 0.95, vPosition.x + ripple) * 0.4);
        gl_FragColor = vec4(color + glow * 0.18, 0.96);
      }
    `}),u=new qn(l,c);s.add(u);const d=()=>{if(!e.value||!t)return;const{clientWidth:v,clientHeight:b}=e.value;a.aspect=v/b,a.updateProjectionMatrix(),t.setSize(v,b,!1)},f=v=>{if(!e.value)return;const b=e.value.getBoundingClientRect();o.uPointer.value.set(((v.clientX-b.left)/b.width-.5)*2,-((v.clientY-b.top)/b.height-.5)*2)},m=v=>{o.uTime.value=v*.001,u.rotation.y=v*12e-5,u.rotation.x=Math.sin(v*25e-5)*.12,t==null||t.render(s,a),i=requestAnimationFrame(m)};d(),window.addEventListener("resize",d),e.value.addEventListener("pointermove",f),i=requestAnimationFrame(m),r=()=>{var v;cancelAnimationFrame(i),window.removeEventListener("resize",d),(v=e.value)==null||v.removeEventListener("pointermove",f),l.dispose(),c.dispose(),t==null||t.dispose(),t==null||t.domElement.remove(),t=null}}),Lf(()=>r==null?void 0:r()),(s,a)=>(Ee(),Pe("section",LS,[D("div",US,[a[1]||(a[1]=Ir('<div class="hero-content fade-in-up" data-v-50e234d5><h1 data-v-50e234d5>Hi, I&#39;m Behzad Kazemi</h1><p class="subtitle" data-v-50e234d5>Frontend Developer | Software Engineer</p><p class="description" data-v-50e234d5> I build beautiful and functional web applications using modern technologies like Vue.js, React, and TypeScript. Based in Berlin 🇩🇪, I&#39;m passionate about creating seamless user experiences and clean code. </p><div class="hero-buttons" data-v-50e234d5><a href="#contact" class="btn-primary" data-v-50e234d5>Get In Touch</a><a href="https://github.com/behzadkazemi" target="_blank" rel="noopener noreferrer" class="btn-secondary" data-v-50e234d5> View My Work </a></div></div>',1)),D("div",NS,[D("div",{ref_key:"sceneHost",ref:e,class:"liquid-scene","aria-hidden":"true"},null,512),a[0]||(a[0]=D("div",{class:"scene-caption"},"Creative systems / Berlin",-1))])])]))}}),OS=an(FS,[["__scopeId","data-v-50e234d5"]]),BS={},zS={class:"about",id:"about"};function kS(n,e){return Ee(),Pe("section",zS,[...e[0]||(e[0]=[Ir('<div class="container" data-v-0ace5747><div class="section-title" data-v-0ace5747><h2 data-v-0ace5747>About Me</h2></div><div class="about-content grid grid-2" data-v-0ace5747><div class="about-text fade-in-up" data-v-0ace5747><p data-v-0ace5747> I&#39;m a Software Engineer with a Master&#39;s degree in IT, based in Berlin with a passion for building elegant digital solutions. Beyond coding, I&#39;m also a professional badminton player and a passionate santoor musician, which keeps me creative and focused. </p><p data-v-0ace5747> At <strong data-v-0ace5747>a&amp;o Hostels</strong>, I&#39;m working as a Frontend Developer, creating responsive and intuitive web interfaces. Previously, I contributed to innovative projects at <strong data-v-0ace5747>Avodaq</strong> and gained diverse experience at <strong data-v-0ace5747>Teleperformance</strong>. </p><p data-v-0ace5747> I thrive in collaborative environments, constantly learning new technologies and pushing the boundaries of what&#39;s possible with modern web technologies. My goal is to create meaningful digital experiences that make a difference. </p><div class="quick-facts" data-v-0ace5747><div class="fact" data-v-0ace5747><span class="fact-label" data-v-0ace5747>Location</span><span class="fact-value" data-v-0ace5747>Berlin, Germany 🇩🇪</span></div><div class="fact" data-v-0ace5747><span class="fact-label" data-v-0ace5747>Current Role</span><span class="fact-value" data-v-0ace5747>Frontend Developer at a&amp;o Hostels</span></div><div class="fact" data-v-0ace5747><span class="fact-label" data-v-0ace5747>Education</span><span class="fact-value" data-v-0ace5747>Master&#39;s in IT</span></div><div class="fact" data-v-0ace5747><span class="fact-label" data-v-0ace5747>Interests</span><span class="fact-value" data-v-0ace5747>Web Dev, Badminton, Music 🎵</span></div></div></div><div class="about-stats fade-in-up" data-v-0ace5747><div class="stat-card" data-v-0ace5747><div class="stat-number" data-v-0ace5747>5+</div><div class="stat-label" data-v-0ace5747>Years of Experience</div><p data-v-0ace5747>Building modern web applications with cutting-edge technologies</p></div><div class="stat-card" data-v-0ace5747><div class="stat-number" data-v-0ace5747>10+</div><div class="stat-label" data-v-0ace5747>Projects Completed</div><p data-v-0ace5747>From startups to established companies, diverse and impactful work</p></div><div class="stat-card" data-v-0ace5747><div class="stat-number" data-v-0ace5747>500+</div><div class="stat-label" data-v-0ace5747>Professional Network</div><p data-v-0ace5747>Connected with talented professionals and tech enthusiasts</p></div></div></div></div>',1)])])}const HS=an(BS,[["render",kS],["__scopeId","data-v-0ace5747"]]),VS={class:"skills",id:"skills"},GS={class:"container"},WS={class:"skills-grid"},XS={class:"category-title"},qS={class:"skills-list"},$S=An({__name:"Skills",setup(n){const e=ot([{name:"Frontend Frameworks",skills:["Vue.js","React","AngularJS","Vite","Next.js"]},{name:"Languages",skills:["JavaScript","TypeScript","HTML5","CSS3","Python"]},{name:"Styling",skills:["Tailwind CSS","SCSS/SASS","CSS Modules","Styled Components","Bootstrap"]},{name:"Tools & Platforms",skills:["Git","GitHub","npm","Yarn","Docker","Linux"]},{name:"Development",skills:["REST APIs","Web Components","Responsive Design","Performance Optimization","Testing"]},{name:"Other Skills",skills:["Problem Solving","Team Collaboration","Communication","Learning Mindset","Agile/Scrum"]}]);return(t,i)=>(Ee(),Pe("section",VS,[D("div",GS,[i[0]||(i[0]=D("div",{class:"section-title"},[D("h2",null,"Skills & Technologies")],-1)),D("div",WS,[(Ee(!0),Pe(St,null,qt(e.value,(r,s)=>(Ee(),Pe("div",{class:"skill-category fade-in-up",key:s,style:Dr({animationDelay:`${s*.1}s`})},[D("h3",XS,Be(r.name),1),D("div",qS,[(Ee(!0),Pe(St,null,qt(r.skills,a=>(Ee(),Pe("span",{class:"skill-badge",key:a},Be(a),1))),128))])],4))),128))])])]))}}),YS=an($S,[["__scopeId","data-v-936a22af"]]),KS={class:"experience",id:"experience"},ZS={class:"container"},JS={class:"timeline"},QS={class:"timeline-content"},jS={class:"job-header"},eM={class:"job-title"},tM={class:"company"},nM={class:"job-period"},iM={class:"period"},rM={class:"duration"},sM={class:"job-location"},aM={class:"job-description"},oM={class:"job-tags"},lM=An({__name:"Experience",setup(n){const e=ot([{title:"Frontend Developer",company:"a&o Hostels",period:"Oct 2025 – Present",duration:"11 months",location:"Berlin, Deutschland",type:"Hybrid",description:["Develop responsive and user-friendly frontend interfaces for the a&o Hostels web platform","Collaborate with cross-functional teams to translate design requirements into functional code","Optimize application performance and ensure compatibility across browsers and devices"],technologies:["Vue.js","TypeScript","CSS3","REST APIs"]},{title:"Software Developer (Frontend)",company:"Avodaq AG",period:"Jan 2024 – Sept 2025",duration:"1 year 9 months",location:"Berlin, Deutschland",type:"Remote",description:["Developed and innovated an internal portal for customers, enhancing functionality and usability","Built responsive components using modern frontend technologies","Improved application performance and user experience through optimization techniques","Participated in code reviews and maintained high code quality standards"],technologies:["React","TypeScript","JavaScript","SCSS","API Integration"]},{title:"Web Content Developer",company:"Teleperformance",period:"Dec 2022 – Jan 2024",duration:"1 year 2 months",location:"Berlin, Deutschland",type:"On-site",description:["Supported team in analyzing data and web content","Gained foundational experience in web development and content management","First professional role in Germany, building strong technical foundation"],technologies:["HTML","CSS","JavaScript","Web Analysis"]}]);return(t,i)=>(Ee(),Pe("section",KS,[D("div",ZS,[i[1]||(i[1]=D("div",{class:"section-title"},[D("h2",null,"Work Experience")],-1)),D("div",JS,[(Ee(!0),Pe(St,null,qt(e.value,(r,s)=>(Ee(),Pe("div",{class:"timeline-item fade-in-up",key:s,style:Dr({animationDelay:`${s*.15}s`})},[i[0]||(i[0]=D("div",{class:"timeline-marker"},null,-1)),D("div",QS,[D("div",jS,[D("div",eM,[D("h3",null,Be(r.title),1),D("p",tM,Be(r.company),1)]),D("div",nM,[D("span",iM,Be(r.period),1),D("span",rM,Be(r.duration),1)])]),D("p",sM,"📍 "+Be(r.location)+" · "+Be(r.type),1),D("div",aM,[(Ee(!0),Pe(St,null,qt(r.description,(a,o)=>(Ee(),Pe("p",{key:o},Be(a),1))),128))]),D("div",oM,[(Ee(!0),Pe(St,null,qt(r.technologies,a=>(Ee(),Pe("span",{class:"tag",key:a},Be(a),1))),128))])])],4))),128))])])]))}}),cM=an(lM,[["__scopeId","data-v-ef1012e9"]]),uM={class:"projects",id:"projects"},fM={class:"container"},dM={class:"projects-grid"},hM={class:"project-image"},pM=["src","alt"],mM={class:"image-fallback"},gM={class:"project-content"},_M={class:"project-description"},vM={class:"project-tech"},xM={class:"project-links"},SM=["href"],MM=["href","target","rel"],bM=An({__name:"Projects",setup(n){const e=s=>/^https?:\/\//.test(s),t=s=>`https://image.thum.io/get/width/1200/crop/500/${e(s.live||"")?s.live:`https://behzadkazemi.github.io${s.live}`}`,i=s=>{s.target.style.display="none"},r=ot([{title:"BMI Calculator",description:"Interactive Body Mass Index calculator. Enter weight and height to get your BMI and category, then use the live demo without leaving this site.",icon:"⚖️",technologies:["React","TypeScript","Tailwind CSS","Vite"],github:"https://github.com/behzadkazemi/BMI-Calculator",live:"/bmi-calculator/"},{title:"Weather App",description:"A weather application for checking current conditions and forecasts through a focused, responsive interface.",icon:"☁️",technologies:["JavaScript","Weather API","CSS3"],github:"https://github.com/behzadkazemi/WeatherApp",live:"/weather-app/"},{title:"Ito-Ito Code Challenge",description:"A coding challenge project demonstrating practical frontend problem-solving and interactive user interface work.",icon:"🧩",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/behzad-itoito-code-challengee",live:"/ito-ito-challenge/"},{title:"Color Challenge",description:"An interactive color-based challenge built around quick decisions, visual feedback, and playful browser interactions.",icon:"🎨",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/Color-Challenge",live:"https://behzadkazemi.github.io/Color-Challenge/"},{title:"Income Tracker",description:"A practical browser tool for recording income and keeping personal financial information organized.",icon:"📈",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/IncomeTracker",live:"https://behzadkazemi.github.io/IncomeTracker/"},{title:"Queen Burger",description:"A restaurant website concept with an engaging menu experience and responsive presentation for burger lovers.",icon:"🍔",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/queenBurger",live:"https://behzadkazemi.github.io/queenBurger/"},{title:"Berlin Budget Secrets",description:"A city-focused project exploring useful budget ideas and accessible information for life in Berlin.",icon:"🏙️",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/BerlinBudgetSecrets",live:"https://behzadkazemi.github.io/BerlinBudgetSecrets/"},{title:"MultiLanguage Form",description:"A multilingual form experience designed to make data entry clearer and more accessible across languages.",icon:"🌍",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/MultiLanguage-From",live:"https://behzadkazemi.github.io/MultiLanguage-From/"},{title:"To-Do List",description:"A simple task management application for adding, organizing, and completing everyday tasks.",icon:"✅",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/to-do-list",live:"https://behzadkazemi.github.io/to-do-list/"},{title:"Game of Thrones",description:"A themed project inspired by Game of Thrones, showcasing content presentation and interactive frontend work.",icon:"🐉",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/GOT",live:"/game-of-thrones/"},{title:"Harry Potter",description:"A themed Harry Potter project demonstrating creative interface design and responsive web presentation.",icon:"⚡",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/HarryPotter",live:"/harry-potter/"},{title:"Ext JS Training",description:"Training work exploring Ext JS components, layouts, and application patterns.",icon:"🛠️",technologies:["Ext JS","JavaScript","HTML5"],github:"https://github.com/behzadkazemi/ExtJsTraining",live:"https://behzadkazemi.github.io/ExtJsTraining/"},{title:"Question Answering Tool",description:"A question-and-answer interface focused on presenting information through a clear and direct workflow.",icon:"❓",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/Question-Answering-Tool",live:"https://behzadkazemi.github.io/Question-Answering-Tool/"},{title:"Random Movie Adviser",description:"A lightweight movie discovery tool that suggests a random film for the next viewing session.",icon:"🎬",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/Random-movie-adviser",live:"/random-movie-adviser/"},{title:"IMDb Top 250",description:"A movie browsing project presenting titles from IMDb's highly rated Top 250 collection.",icon:"🏆",technologies:["JavaScript","HTML5","CSS3"],github:"https://github.com/behzadkazemi/imdb-top-250",live:"/imdb-top-250/"},{title:"Personal Portfolio",description:"A modern, responsive portfolio website built with Vue 3 and TypeScript. Showcases projects, skills, and experience with a smooth, animated user interface.",icon:"💼",technologies:["Vue 3","TypeScript","Vite","CSS3"],github:"https://github.com/behzadkazemi/behzadkazemi.github.io",live:"https://behzadkazemi.github.io"},{title:"a&o Hostels Portal",description:"Internal customer portal featuring responsive design and enhanced functionality. Built with modern web technologies to improve user experience and performance.",icon:"🏨",technologies:["Vue.js","TypeScript","REST API","SCSS"],github:"",live:""},{title:"Avodaq Internal Portal",description:"Innovative internal portal for a software development company, featuring complex data visualization and real-time updates. Optimized for performance and usability.",icon:"⚙️",technologies:["React","TypeScript","Redux","API Integration"],github:"",live:""},{title:"Web Development Projects",description:"Collection of web projects demonstrating proficiency in HTML5, CSS3, and JavaScript. Includes responsive design implementations and interactive features.",icon:"🌐",technologies:["HTML5","CSS3","JavaScript","Responsive Design"],github:"https://github.com/behzadkazemi",live:""}]);return(s,a)=>(Ee(),Pe("section",uM,[D("div",fM,[a[2]||(a[2]=D("div",{class:"section-title"},[D("h2",null,"Featured Projects")],-1)),D("div",dM,[(Ee(!0),Pe(St,null,qt(r.value,(o,l)=>(Ee(),Pe("div",{class:"project-card fade-in-up",key:l,style:Dr({animationDelay:`${l*.15}s`})},[D("div",hM,[o.live?(Ee(),Pe("img",{key:0,src:t(o),alt:`${o.title} live demo preview`,onError:i},null,40,pM)):Yt("",!0),D("div",mM,Be(o.title),1)]),D("div",gM,[D("h3",null,Be(o.title),1),D("p",_M,Be(o.description),1),D("div",vM,[(Ee(!0),Pe(St,null,qt(o.technologies,c=>(Ee(),Pe("span",{class:"tech-badge",key:c},Be(c),1))),128))]),D("div",xM,[o.github?(Ee(),Pe("a",{key:0,href:o.github,target:"_blank",rel:"noopener noreferrer",class:"project-link"},[...a[0]||(a[0]=[D("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[D("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),hn(" Code ",-1)])],8,SM)):Yt("",!0),o.live?(Ee(),Pe("a",{key:1,href:o.live,target:e(o.live)?"_blank":void 0,rel:e(o.live)?"noopener noreferrer":void 0,class:"project-link live"},[...a[1]||(a[1]=[D("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[D("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})],-1),hn(" Live ",-1)])],8,MM)):Yt("",!0)])])],4))),128))]),a[3]||(a[3]=D("div",{class:"more-projects"},[D("p",null,[hn("Interested in more? Check out my "),D("a",{href:"https://github.com/behzadkazemi",target:"_blank",rel:"noopener noreferrer"},"GitHub profile"),hn(" for additional projects.")])],-1))])]))}}),yM=an(bM,[["__scopeId","data-v-8fb814bd"]]),EM={class:"contact",id:"contact"},TM={class:"container"},AM={class:"contact-content"},wM={class:"contact-form fade-in-up"},RM={class:"form-group"},CM={class:"form-group"},PM={class:"form-group"},DM={class:"form-group"},IM=An({__name:"Contact",setup(n){const e=ot({name:"",email:"",subject:"",message:""}),t=ot(null),i=async()=>{try{console.log("Form submitted:",e.value),t.value={type:"success",message:"Message sent successfully! I'll get back to you soon."},e.value={name:"",email:"",subject:"",message:""},setTimeout(()=>{t.value=null},5e3)}catch{t.value={type:"error",message:"Failed to send message. Please try again or email me directly."}}};return(r,s)=>(Ee(),Pe("section",EM,[D("div",TM,[s[10]||(s[10]=D("div",{class:"section-title"},[D("h2",null,"Get In Touch")],-1)),D("div",AM,[s[9]||(s[9]=Ir('<div class="contact-text fade-in-up" data-v-efac7281><p data-v-efac7281> I&#39;m always interested in hearing about new opportunities and collaborative projects. Whether you&#39;d like to discuss a potential project, have a question, or just want to say hello, feel free to reach out! </p><p data-v-efac7281> I&#39;ll do my best to respond as quickly as possible. </p><div class="contact-methods" style="background-color:rgba(13, 29, 22, 0.86);" data-v-efac7281><div class="contact-method" data-v-efac7281><div class="method-icon" data-v-efac7281>✉️</div><div class="method-info" data-v-efac7281><h4 data-v-efac7281>Email</h4><a href="mailto:bkazemi1994@gmail.com" data-v-efac7281>bkazemi1994@gmail.com</a></div></div><div class="contact-method" data-v-efac7281><div class="method-icon" data-v-efac7281>💼</div><div class="method-info" data-v-efac7281><h4 data-v-efac7281>LinkedIn</h4><a href="https://linkedin.com/in/behzadkazemi" target="_blank" rel="noopener noreferrer" data-v-efac7281>linkedin.com/in/behzadkazemi</a></div></div><div class="contact-method" data-v-efac7281><div class="method-icon" data-v-efac7281>💻</div><div class="method-info" data-v-efac7281><h4 data-v-efac7281>GitHub</h4><a href="https://github.com/behzadkazemi" target="_blank" rel="noopener noreferrer" data-v-efac7281>github.com/behzadkazemi</a></div></div><div class="contact-method" data-v-efac7281><div class="method-icon" data-v-efac7281>📍</div><div class="method-info" data-v-efac7281><h4 data-v-efac7281>Location</h4><p data-v-efac7281>Berlin, Germany 🇩🇪</p></div></div></div></div>',1)),D("div",wM,[D("form",{onSubmit:Ia(i,["prevent"])},[D("div",RM,[s[4]||(s[4]=D("label",{for:"name"},"Name",-1)),ai(D("input",{type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=a=>e.value.name=a),required:"",placeholder:"Your name"},null,512),[[Ri,e.value.name]])]),D("div",CM,[s[5]||(s[5]=D("label",{for:"email"},"Email",-1)),ai(D("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=a=>e.value.email=a),required:"",placeholder:"your@email.com"},null,512),[[Ri,e.value.email]])]),D("div",PM,[s[6]||(s[6]=D("label",{for:"subject"},"Subject",-1)),ai(D("input",{type:"text",id:"subject","onUpdate:modelValue":s[2]||(s[2]=a=>e.value.subject=a),required:"",placeholder:"Subject of your message"},null,512),[[Ri,e.value.subject]])]),D("div",DM,[s[7]||(s[7]=D("label",{for:"message"},"Message",-1)),ai(D("textarea",{id:"message","onUpdate:modelValue":s[3]||(s[3]=a=>e.value.message=a),required:"",placeholder:"Your message...",rows:"6"},null,512),[[Ri,e.value.message]])]),s[8]||(s[8]=D("button",{type:"submit",class:"btn-primary",style:{"background-color":"rgba(17, 39, 28, 0.9)"}},"Send Message",-1)),t.value?(Ee(),Pe("p",{key:0,class:fn(["form-status",t.value.type])},Be(t.value.message),3)):Yt("",!0)],32)])])])]))}}),LM=an(IM,[["__scopeId","data-v-efac7281"]]),UM={},NM={class:"footer"};function FM(n,e){return Ee(),Pe("footer",NM,[...e[0]||(e[0]=[Ir('<div class="container footer-content" data-v-5d5b0fbf><div class="footer-section" data-v-5d5b0fbf><h3 data-v-5d5b0fbf>Behzad Kazemi</h3><p data-v-5d5b0fbf>Frontend Developer &amp; Software Engineer based in Berlin</p></div><div class="footer-section" data-v-5d5b0fbf><h4 data-v-5d5b0fbf>Quick Links</h4><ul data-v-5d5b0fbf><li data-v-5d5b0fbf><a href="#about" data-v-5d5b0fbf>About</a></li><li data-v-5d5b0fbf><a href="#skills" data-v-5d5b0fbf>Skills</a></li><li data-v-5d5b0fbf><a href="#experience" data-v-5d5b0fbf>Experience</a></li><li data-v-5d5b0fbf><a href="#projects" data-v-5d5b0fbf>Projects</a></li><li data-v-5d5b0fbf><a href="#contact" data-v-5d5b0fbf>Contact</a></li></ul></div><div class="footer-section" data-v-5d5b0fbf><h4 data-v-5d5b0fbf>Social</h4><div class="social-links" data-v-5d5b0fbf><a href="https://github.com/behzadkazemi" target="_blank" rel="noopener noreferrer" title="GitHub" data-v-5d5b0fbf><svg class="icon" viewBox="0 0 24 24" fill="currentColor" data-v-5d5b0fbf><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-5d5b0fbf></path></svg></a><a href="https://linkedin.com/in/behzadkazemi" target="_blank" rel="noopener noreferrer" title="LinkedIn" data-v-5d5b0fbf><svg class="icon" viewBox="0 0 24 24" fill="currentColor" data-v-5d5b0fbf><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" data-v-5d5b0fbf></path></svg></a></div></div></div><div class="footer-bottom" data-v-5d5b0fbf><p data-v-5d5b0fbf>© 2026 Behzad Kazemi. All rights reserved. Built with Vue 3 + TypeScript.</p></div>',2)])])}const OM=an(UM,[["render",FM],["__scopeId","data-v-5d5b0fbf"]]),BM={class:"bmi-page"},zM={class:"container"},kM={class:"bmi-card fade-in-up"},HM={key:0,class:"error"},VM={class:"result-value"},GM={class:"result-status"},WM=An({__name:"BmiCalculator",setup(n){const e=ot(""),t=ot(""),i=ot(null),r=ot(""),s=ot(""),a=Yi(()=>r.value.toLowerCase().replace(/\s+/g,"-")),o=()=>{const c=parseFloat(e.value),u=parseFloat(t.value);if(!Number.isFinite(c)||!Number.isFinite(u)||c<=0||u<=0){s.value="Please enter a valid weight and height.",i.value=null,r.value="";return}const d=u/100,f=c/(d*d);s.value="",i.value=f,f<18.5?r.value="Underweight":f<24.9?r.value="Normal weight":f<29.9?r.value="Overweight":r.value="Obesity"},l=()=>{e.value="",t.value="",i.value=null,r.value="",s.value=""};return(c,u)=>(Ee(),Pe("section",BM,[D("div",zM,[u[10]||(u[10]=D("a",{class:"back-link",href:"/"},"← Back to portfolio",-1)),D("div",kM,[u[6]||(u[6]=D("p",{class:"eyebrow"},"Project demo",-1)),u[7]||(u[7]=D("h1",null,"BMI Calculator",-1)),u[8]||(u[8]=D("p",{class:"intro"},[hn(" Enter your weight and height to calculate Body Mass Index, using the same formula as my "),D("a",{href:"https://github.com/behzadkazemi/BMI-Calculator",target:"_blank",rel:"noopener noreferrer"},"BMI-Calculator"),hn(" repository. ")],-1)),D("form",{class:"bmi-form",onSubmit:Ia(o,["prevent"])},[D("label",null,[u[2]||(u[2]=hn(" Weight (kg) ",-1)),ai(D("input",{"onUpdate:modelValue":u[0]||(u[0]=d=>e.value=d),type:"number",min:"1",max:"400",step:"0.1",inputmode:"decimal",placeholder:"e.g. 70",required:""},null,512),[[Ri,e.value]])]),D("label",null,[u[3]||(u[3]=hn(" Height (cm) ",-1)),ai(D("input",{"onUpdate:modelValue":u[1]||(u[1]=d=>t.value=d),type:"number",min:"50",max:"250",step:"0.1",inputmode:"decimal",placeholder:"e.g. 175",required:""},null,512),[[Ri,t.value]])]),s.value?(Ee(),Pe("p",HM,Be(s.value),1)):Yt("",!0),D("div",{class:"actions"},[u[4]||(u[4]=D("button",{type:"submit",class:"btn-primary"},"Calculate BMI",-1)),D("button",{type:"button",class:"btn-secondary",onClick:l},"Reset")])],32),i.value!==null?(Ee(),Pe("div",{key:0,class:fn(["result",a.value])},[u[5]||(u[5]=D("p",{class:"result-label"},"Your BMI is",-1)),D("p",VM,Be(i.value.toFixed(1)),1),D("p",GM,Be(r.value),1)],2)):Yt("",!0),u[9]||(u[9]=Ir('<ul class="legend" data-v-6625fd8e><li data-v-6625fd8e><span class="dot underweight" data-v-6625fd8e></span> Underweight: below 18.5</li><li data-v-6625fd8e><span class="dot normal" data-v-6625fd8e></span> Normal weight: 18.5 – 24.8</li><li data-v-6625fd8e><span class="dot overweight" data-v-6625fd8e></span> Overweight: 24.9 – 29.8</li><li data-v-6625fd8e><span class="dot obesity" data-v-6625fd8e></span> Obesity: 29.9 and above</li></ul><p class="disclaimer" data-v-6625fd8e> BMI is a screening estimate, not a medical diagnosis. Talk to a healthcare professional for personal advice. </p>',2))])])]))}}),XM=an(WM,[["__scopeId","data-v-6625fd8e"]]),qM={class:"weather-page"},$M={class:"weather-shell"},YM={class:"weather-card","aria-live":"polite"},KM={class:"search-row"},ZM=["disabled"],JM={key:0,class:"message error"},QM={key:1,class:"message"},jM={key:2,class:"weather-result"},eb={class:"date"},tb={class:"weather-icon","aria-hidden":"true"},nb={class:"temperature"},ib={class:"condition"},rb={class:"details"},sb=An({__name:"WeatherDemo",setup(n){const e=ot("Berlin"),t=ot(null),i=ot(""),r=ot(!1),s=Yi(()=>new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(new Date)),a=Yi(()=>{var u,d;const c=(d=(u=t.value)==null?void 0:u.weather[0])==null?void 0:d.main;return c==="Clear"?"☀️":c==="Rain"?"🌧️":c==="Snow"?"❄️":c==="Haze"?"🌫️":"☁️"}),o=async()=>{var u;const c=e.value.trim();if(c){r.value=!0,i.value="";try{const d=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(c)}&count=1&language=en&format=json`),f=await d.json();if(!d.ok||!((u=f.results)!=null&&u.length))throw new Error("City not found. Try another city.");const m=f.results[0],v=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${m.latitude}&longitude=${m.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&timezone=auto`),b=await v.json();if(!v.ok)throw new Error("Weather data is unavailable right now.");t.value={name:m.name,country:m.country_code,main:{temp:b.current.temperature_2m,feels_like:b.current.apparent_temperature,humidity:b.current.relative_humidity_2m},weather:[{main:l(b.current.weather_code)}]}}catch(d){t.value=null,i.value=d instanceof Error?d.message:"Unable to load weather right now."}finally{r.value=!1}}};Ra(o);const l=c=>c===0?"Clear":c<=3?"Clouds":c<=67||c>=80&&c<=82?"Rain":c<=77||c>=85?"Snow":"Haze";return(c,u)=>(Ee(),Pe("main",qM,[D("div",$M,[u[5]||(u[5]=D("a",{class:"back-link",href:"/"},"← Back to portfolio",-1)),D("section",YM,[u[2]||(u[2]=D("p",{class:"eyebrow"},"Project demo",-1)),u[3]||(u[3]=D("h1",null,"Weather App",-1)),u[4]||(u[4]=D("p",{class:"intro"},[hn(" Search for a city to see its current weather, just like the original "),D("a",{href:"https://github.com/behzadkazemi/WeatherApp",target:"_blank",rel:"noopener noreferrer"},"React project"),hn(". ")],-1)),D("form",{class:"search-form",onSubmit:Ia(o,["prevent"])},[u[1]||(u[1]=D("label",{for:"city"},"City",-1)),D("div",KM,[ai(D("input",{id:"city","onUpdate:modelValue":u[0]||(u[0]=d=>e.value=d),type:"search",placeholder:"Enter city name",required:""},null,512),[[Ri,e.value]]),D("button",{type:"submit",disabled:r.value},Be(r.value?"Searching...":"Search"),9,ZM)])],32),i.value?(Ee(),Pe("p",JM,Be(i.value),1)):r.value?(Ee(),Pe("p",QM,"Loading weather for "+Be(e.value)+"...",1)):Yt("",!0),t.value?(Ee(),Pe("div",jM,[D("p",eb,Be(s.value),1),D("h2",null,Be(t.value.name)+", "+Be(t.value.country),1),D("div",tb,Be(a.value),1),D("p",nb,Be(Math.round(t.value.main.temp))+"°C",1),D("p",ib,Be(t.value.weather[0].main),1),D("div",rb,[D("span",null,"Feels like "+Be(Math.round(t.value.main.feels_like))+"°C",1),D("span",null,"Humidity "+Be(t.value.main.humidity)+"%",1)])])):Yt("",!0)])])]))}}),ab=an(sb,[["__scopeId","data-v-04551de3"]]),ob={class:"ito-page"},lb={class:"ito-shell"},cb={class:"workspace"},ub={class:"patterns-panel"},fb={class:"panel-heading"},db={key:0,class:"empty-state"},hb={class:"slot-label"},pb=["innerHTML"],mb=["viewBox"],gb=["x1","y1","x2","y2"],_b=["x1","y1","x2","y2"],vb=["cx","cy"],xb={key:2,class:"error-message"},Sb={key:3,class:"hint"},Mb={class:"lines-panel"},bb={class:"panel-heading compact"},yb={class:"line-count"},Eb={class:"controls"},Tb=["disabled"],Ab=["disabled"],wb={key:0,class:"line-list"},Rb={key:1,class:"no-lines"},Cb=An({__name:"ItoItoDemo",setup(n){const e=ot(null),t=ot(null),i=ot([]),r=ot([]),s=ot(null),a=ot(null),o=ot(""),l=ot({width:1e3,height:600}),c=Yi(()=>!s.value||!a.value?null:{start:s.value,end:a.value}),u=async y=>{const T=y.target,x=Array.from(T.files||[]);if(x.length!==2){o.value="Please select exactly two SVG files.";return}i.value=await Promise.all(x.map(async A=>({name:A.name,content:await A.text()}))),r.value=[],s.value=null,a.value=null,o.value="",await yf(),d()},d=()=>{if(!t.value)return;const y=t.value.getBoundingClientRect();l.value={width:y.width,height:y.height}},f=y=>{if(!t.value)return null;const T=t.value.getBoundingClientRect();return{x:y.clientX-T.left,y:y.clientY-T.top}},m=y=>{const T=f(y);if(T){if(!s.value){s.value=T,a.value=T;return}r.value.push({start:s.value,end:T,color:y.button===2?"blue":"red"}),s.value=null,a.value=null}},v=y=>{s.value&&(a.value=f(y))},b=()=>{s.value=null,a.value=null},g=()=>r.value.pop(),h=()=>{r.value=[],b()};return(y,T)=>(Ee(),Pe("main",ob,[D("div",lb,[T[8]||(T[8]=D("a",{class:"back-link",href:"/"},"← Back to portfolio",-1)),T[9]||(T[9]=D("section",{class:"ito-header"},[D("div",null,[D("p",{class:"eyebrow"},"Project demo"),D("h1",null,"SVG Pattern Connector"),D("p",null,"Upload two SVG patterns, then connect matching points with colored lines.")]),D("a",{class:"source-link",href:"https://github.com/behzadkazemi/behzad-itoito-code-challengee",target:"_blank",rel:"noopener noreferrer"},"View React source")],-1)),D("section",cb,[D("div",ub,[D("div",fb,[T[3]||(T[3]=D("div",null,[D("p",{class:"eyebrow"},"Pattern workspace"),D("h2",null,"Two SVG files")],-1)),D("button",{class:"upload-button",type:"button",onClick:T[0]||(T[0]=x=>{var A;return(A=e.value)==null?void 0:A.click()})},"Upload 2 SVGs"),D("input",{ref_key:"fileInput",ref:e,class:"file-input",type:"file",accept:".svg,image/svg+xml",multiple:"",onChange:u},null,544)]),i.value.length===0?(Ee(),Pe("div",db,[T[4]||(T[4]=D("div",{class:"upload-mark"},"+",-1)),T[5]||(T[5]=D("h3",null,"Start with two patterns",-1)),T[6]||(T[6]=D("p",null,"Select exactly two SVG files to begin drawing connections.",-1)),D("button",{class:"primary-button",type:"button",onClick:T[1]||(T[1]=x=>{var A;return(A=e.value)==null?void 0:A.click()})},"Choose SVG files")])):(Ee(),Pe("div",{key:1,class:"svg-stage",ref_key:"stage",ref:t,onPointerdown:m,onPointermove:v,onPointerleave:b,onContextmenu:T[2]||(T[2]=Ia(()=>{},["prevent"]))},[(Ee(!0),Pe(St,null,qt(i.value,(x,A)=>(Ee(),Pe("div",{class:"svg-slot",key:x.name},[D("span",hb,Be(A===0?"Pattern A":"Pattern B"),1),D("div",{class:"svg-content",innerHTML:x.content},null,8,pb)]))),128)),(Ee(),Pe("svg",{class:"line-layer",viewBox:`0 0 ${l.value.width} ${l.value.height}`,"aria-hidden":"true"},[(Ee(!0),Pe(St,null,qt(r.value,(x,A)=>(Ee(),Pe("line",{key:A,x1:x.start.x,y1:x.start.y,x2:x.end.x,y2:x.end.y,class:fn(x.color)},null,10,gb))),128)),c.value?(Ee(),Pe("line",{key:0,x1:c.value.start.x,y1:c.value.start.y,x2:c.value.end.x,y2:c.value.end.y,class:"preview"},null,8,_b)):Yt("",!0),s.value?(Ee(),Pe("circle",{key:1,cx:s.value.x,cy:s.value.y,r:"7",class:"active-dot"},null,8,vb)):Yt("",!0)],8,mb))],544)),o.value?(Ee(),Pe("p",xb,Be(o.value),1)):i.value.length>0?(Ee(),Pe("p",Sb,"Click a point on either pattern, then click a second point. Right-click creates a blue guide line.")):Yt("",!0)]),D("aside",Mb,[D("div",bb,[T[7]||(T[7]=D("div",null,[D("p",{class:"eyebrow"},"Connections"),D("h2",null,"Defined lines")],-1)),D("span",yb,Be(r.value.length),1)]),D("div",Eb,[D("button",{type:"button",class:"secondary-button",disabled:r.value.length===0,onClick:g},"Undo last",8,Tb),D("button",{type:"button",class:"danger-button",disabled:r.value.length===0,onClick:h},"Reset all",8,Ab)]),r.value.length?(Ee(),Pe("ol",wb,[(Ee(!0),Pe(St,null,qt(r.value,(x,A)=>(Ee(),Pe("li",{key:A},[D("span",{class:fn(["line-swatch",x.color])},null,2),D("span",null,[hn("Line "+Be(A+1),1),D("small",null,Be(x.color==="red"?"Primary connection":"Guide connection"),1)])]))),128))])):(Ee(),Pe("p",Rb,"No lines defined yet."))])])])]))}}),Pb=an(Cb,[["__scopeId","data-v-81dae0a8"]]),Db={class:"media-shell"},Ib={key:0,class:"media-card random-card"},Lb=["src","alt"],Ub={class:"movie-details"},Nb={class:"rank"},Fb={class:"year"},Ob=["href"],Bb={key:1,class:"media-card imdb-card"},zb={class:"movie-list"},kb={class:"movie-rank"},Hb={key:0,class:"empty-message"},Vb={key:2,class:"media-card got-card"},Gb={class:"got-tabs"},Wb=["onClick"],Xb={key:0,class:"character-grid"},qb=["onClick"],$b={class:"sigil"},Yb={key:1,class:"quote-box"},Kb={class:"quote-author"},Zb={key:2,class:"character-detail"},Jb={key:3,class:"media-card potter-card"},Qb={class:"house-filter"},jb=["onClick"],ey={class:"wizard-grid"},ty=["onClick"],ny=["src","alt"],iy={class:"wizard-copy"},ry={key:0,class:"wizard-detail"},sy=["src","alt"],ay=An({__name:"MediaDemos",setup(n){const e=window.location.pathname.replace(/\/+$/,""),t=e.endsWith("/random-movie-adviser")?"random-movie":e.endsWith("/imdb-top-250")?"imdb":e.endsWith("/game-of-thrones")?"got":"harry-potter",i=[{title:"The Shawshank Redemption",year:1994,rank:1,imdbId:"tt0111161"},{title:"The Godfather",year:1972,rank:2,imdbId:"tt0068646"},{title:"The Dark Knight",year:2008,rank:3,imdbId:"tt0468569"},{title:"The Godfather Part II",year:1974,rank:4,imdbId:"tt0071562"},{title:"12 Angry Men",year:1957,rank:5,imdbId:"tt0050083"},{title:"Schindler's List",year:1993,rank:6,imdbId:"tt0108052"},{title:"The Lord of the Rings: The Return of the King",year:2003,rank:7,imdbId:"tt0167260"},{title:"Pulp Fiction",year:1994,rank:8,imdbId:"tt0110912"},{title:"The Good, the Bad and the Ugly",year:1966,rank:9,imdbId:"tt0060196"},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001,rank:10,imdbId:"tt0120737"}],r=ot(null),s=ot(""),a=Yi(()=>i.filter(A=>A.title.toLowerCase().includes(s.value.toLowerCase()))),o=()=>{r.value=i[Math.floor(Math.random()*i.length)]},l=A=>`https://images.metahub.space/poster/medium/${A.imdbId}/img`,c=A=>{A.target.style.visibility="hidden"},u=[{name:"Jon Snow",house:"House Stark",sigil:"ST",description:"The reluctant hero of the North, raised at Winterfell and bound by duty."},{name:"Daenerys Targaryen",house:"House Targaryen",sigil:"TG",description:"The Dragon Queen, determined to reclaim the throne of Westeros."},{name:"Tyrion Lannister",house:"House Lannister",sigil:"LI",description:"A sharp-minded strategist whose wit is as formidable as any sword."},{name:"Arya Stark",house:"House Stark",sigil:"ST",description:"A fiercely independent survivor trained to move unseen."}],d=ot("Characters"),f=ot(null),m=ot({text:"Winter is coming.",author:"Ned Stark"}),v=[{text:"Winter is coming.",author:"Ned Stark"},{text:"A mind needs books as a sword needs a whetstone.",author:"Tyrion Lannister"},{text:"The things we do for love.",author:"Jaime Lannister"},{text:"Not today.",author:"Arya Stark"}],b=()=>{m.value=v[Math.floor(Math.random()*v.length)]},g=[{name:"Harry Potter",house:"Gryffindor",sigil:"HP",image:"https://ik.imagekit.io/hpapi/harry.jpg",role:"Auror",wand:"Holly, phoenix feather, 11 inches",patronus:"Stag",description:"The Boy Who Lived, known for courage, loyalty, and a talent for finding trouble."},{name:"Hermione Granger",house:"Gryffindor",sigil:"HG",image:"https://ik.imagekit.io/hpapi/hermione.jpeg",role:"Minister for Magic",wand:"Vine, dragon heartstring, 10¾ inches",patronus:"Otter",description:"A brilliant witch whose preparation and compassion repeatedly save the day."},{name:"Draco Malfoy",house:"Slytherin",sigil:"DM",image:"https://ik.imagekit.io/hpapi/draco.jpg",role:"Slytherin student",wand:"Hawthorn, unicorn hair, 10 inches",patronus:"Unknown",description:"A Slytherin student shaped by family expectations and difficult choices."},{name:"Luna Lovegood",house:"Ravenclaw",sigil:"LL",image:"https://ik.imagekit.io/hpapi/luna.jpg",role:"Magizoologist",wand:"Unknown",patronus:"Hare",description:"An original thinker with fierce loyalty and an unshakable sense of wonder."},{name:"Cedric Diggory",house:"Hufflepuff",sigil:"CD",image:"https://ik.imagekit.io/hpapi/cedric.png",role:"Triwizard champion",wand:"Ash, unicorn hair, 12¼ inches",patronus:"Unknown",description:"A fair-minded champion remembered for his generosity and integrity."}],h=["All","Gryffindor","Slytherin","Ravenclaw","Hufflepuff"],y=ot("All"),T=ot(null),x=Yi(()=>y.value==="All"?g:g.filter(A=>A.house===y.value));return(A,M)=>(Ee(),Pe("main",{class:fn(["media-page",si(t)])},[D("div",Db,[M[27]||(M[27]=D("a",{class:"back-link",href:"/"},"← Back to portfolio",-1)),si(t)==="random-movie"?(Ee(),Pe("section",Ib,[M[4]||(M[4]=D("p",{class:"eyebrow"},"Project demo / React original",-1)),M[5]||(M[5]=D("h1",null,"Random Movie Adviser",-1)),M[6]||(M[6]=D("p",{class:"lead"},"Need something good to watch? Roll the dice for a title from the IMDb Top 250.",-1)),D("div",{class:fn(["movie-pick",{empty:!r.value}])},[r.value?(Ee(),Pe(St,{key:0},[D("img",{class:"movie-poster",src:l(r.value),alt:`${r.value.title} poster`,onError:c},null,40,Lb),D("div",Ub,[D("p",Nb,"Rank #"+Be(r.value.rank),1),D("h2",null,Be(r.value.title),1),D("p",Fb,"Released "+Be(r.value.year),1),M[1]||(M[1]=D("p",{class:"detail-copy"},"A highly rated classic selected from the IMDb Top 250 collection.",-1)),D("a",{class:"imdb-link",href:`https://www.imdb.com/title/${r.value.imdbId}/`,target:"_blank",rel:"noopener noreferrer"},"View IMDb details →",8,Ob)])],64)):(Ee(),Pe(St,{key:1},[M[2]||(M[2]=D("div",{class:"empty-poster"},"?",-1)),M[3]||(M[3]=D("div",{class:"movie-details"},[D("p",{class:"rank"},"Ready when you are"),D("h2",null,"Your next movie"),D("p",{class:"year"},"A random recommendation awaits")],-1))],64))],2),D("button",{class:"primary-button dice-button",type:"button",onClick:o},"Roll the dice"),M[7]||(M[7]=D("a",{class:"source-link",href:"https://github.com/behzadkazemi/Random-movie-adviser",target:"_blank",rel:"noopener noreferrer"},"View source on GitHub",-1))])):si(t)==="imdb"?(Ee(),Pe("section",Bb,[M[8]||(M[8]=D("p",{class:"eyebrow"},"Project demo / movie data",-1)),M[9]||(M[9]=D("h1",null,"IMDb Top 250",-1)),M[10]||(M[10]=D("p",{class:"lead"},"Browse a curated slice of the world's most highly ranked films.",-1)),M[11]||(M[11]=D("label",{class:"search-label",for:"movie-search"},"Search titles",-1)),ai(D("input",{id:"movie-search","onUpdate:modelValue":M[0]||(M[0]=R=>s.value=R),type:"search",placeholder:"Try The Godfather"},null,512),[[Ri,s.value]]),D("ol",zb,[(Ee(!0),Pe(St,null,qt(a.value,R=>(Ee(),Pe("li",{key:R.rank},[D("span",kb,Be(R.rank),1),D("span",null,[D("strong",null,Be(R.title),1),D("small",null,Be(R.year),1)])]))),128))]),a.value.length===0?(Ee(),Pe("p",Hb,"No matching titles.")):Yt("",!0),M[12]||(M[12]=D("a",{class:"source-link",href:"https://github.com/behzadkazemi/imdb-top-250",target:"_blank",rel:"noopener noreferrer"},"View source on GitHub",-1))])):si(t)==="got"?(Ee(),Pe("section",Vb,[M[14]||(M[14]=D("p",{class:"eyebrow"},"Project demo / Westeros archive",-1)),M[15]||(M[15]=D("h1",null,"Game of Thrones",-1)),M[16]||(M[16]=D("p",{class:"lead"},"Explore a small character archive and summon a quote from the Seven Kingdoms.",-1)),D("div",Gb,[(Ee(),Pe(St,null,qt(["Characters","Quote"],R=>D("button",{key:R,type:"button",class:fn({active:d.value===R}),onClick:_=>d.value=R},Be(R),11,Wb)),64))]),d.value==="Characters"?(Ee(),Pe("div",Xb,[(Ee(),Pe(St,null,qt(u,R=>D("button",{key:R.name,type:"button",class:"character",onClick:_=>f.value=R},[D("span",$b,Be(R.sigil),1),D("strong",null,Be(R.name),1),D("small",null,Be(R.house),1)],8,qb)),64))])):(Ee(),Pe("div",Yb,[M[13]||(M[13]=D("p",{class:"quote-mark"},"“",-1)),D("blockquote",null,Be(m.value.text),1),D("p",Kb,Be(m.value.author),1),D("button",{class:"primary-button",type:"button",onClick:b},"Fetch another quote")])),f.value&&d.value==="Characters"?(Ee(),Pe("div",Zb,[D("strong",null,Be(f.value.name),1),D("span",null,Be(f.value.description),1)])):Yt("",!0),M[17]||(M[17]=D("a",{class:"source-link",href:"https://github.com/behzadkazemi/GOT",target:"_blank",rel:"noopener noreferrer"},"View source on GitHub",-1))])):(Ee(),Pe("section",Jb,[M[23]||(M[23]=D("p",{class:"eyebrow"},"Project demo / Ext JS original",-1)),M[24]||(M[24]=D("h1",null,"Harry Potter",-1)),M[25]||(M[25]=D("p",{class:"lead"},"Browse a compact character guide inspired by the original Ext JS training app.",-1)),D("div",Qb,[(Ee(),Pe(St,null,qt(h,R=>D("button",{key:R,type:"button",class:fn({active:y.value===R}),onClick:_=>y.value=R},Be(R),11,jb)),64))]),D("div",ey,[(Ee(!0),Pe(St,null,qt(x.value,R=>(Ee(),Pe("button",{key:R.name,type:"button",class:"wizard",onClick:_=>T.value=R},[D("img",{src:R.image,alt:`${R.name} portrait`},null,8,ny),D("span",iy,[D("strong",null,Be(R.name),1),D("small",null,Be(R.house),1)])],8,ty))),128))]),T.value?(Ee(),Pe("div",ry,[D("img",{src:T.value.image,alt:`${T.value.name} portrait`},null,8,sy),D("div",null,[M[22]||(M[22]=D("span",{class:"eyebrow"},"Character profile",-1)),D("h2",null,Be(T.value.name),1),D("p",null,Be(T.value.description),1),D("dl",null,[D("div",null,[M[18]||(M[18]=D("dt",null,"House",-1)),D("dd",null,Be(T.value.house),1)]),D("div",null,[M[19]||(M[19]=D("dt",null,"Role",-1)),D("dd",null,Be(T.value.role),1)]),D("div",null,[M[20]||(M[20]=D("dt",null,"Wand",-1)),D("dd",null,Be(T.value.wand),1)]),D("div",null,[M[21]||(M[21]=D("dt",null,"Patronus",-1)),D("dd",null,Be(T.value.patronus),1)])])])])):Yt("",!0),M[26]||(M[26]=D("a",{class:"source-link",href:"https://github.com/behzadkazemi/HarryPotter",target:"_blank",rel:"noopener noreferrer"},"View source on GitHub",-1))]))])],2))}}),oy=an(ay,[["__scopeId","data-v-43ff0fed"]]),ly={key:4,id:"app",class:"app"},cy=An({__name:"App",setup(n){const e=window.location.pathname.replace(/\/+$/,""),t=e.endsWith("/bmi-calculator"),i=e.endsWith("/weather-app"),r=e.endsWith("/ito-ito-challenge"),s=["/random-movie-adviser","/imdb-top-250","/game-of-thrones","/harry-potter"].some(a=>e.endsWith(a));return(a,o)=>si(t)?(Ee(),qr(XM,{key:0})):si(i)?(Ee(),qr(ab,{key:1})):si(r)?(Ee(),qr(Pb,{key:2})):si(s)?(Ee(),qr(oy,{key:3})):(Ee(),Pe("div",ly,[Lt(xm),Lt(OS),Lt(HS),Lt(YS),Lt(cM),Lt(yM),Lt(LM),Lt(OM)]))}}),uy=an(cy,[["__scopeId","data-v-96ac2297"]]),fy=hm(uy);fy.mount("#app");
