#!/usr/bin/env node
"use strict";function x(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function h(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?x(
Object(r),!0).forEach(function(e){o(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function o(e,t,r){var n;(t="symbol"==typeof(n=function(e){var t;if(
"object"!=typeof e||null===e)return e;if(void 0===(t=e[Symbol.toPrimitive]))return String(e);if("object"!=typeof(
t=t.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(t))?n:String(n)
)in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function I(e){
return e&&"object"==typeof e&&"default"in e?e:{default:e}}function F(r){var n;return r&&r.__esModule?r:(n=Object.create(
null),r&&Object.keys(r).forEach(function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),
Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n))}
function k(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function G(e){var t,
r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function M(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function z(e){e=this.__data__=new or(e),
this.size=e.size}function V(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new sr;++t<r;)this.add(e[t])}function $(n
,i){function o(){var e=arguments,t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),
o.cache=r.set(t,e)||r,e)}if("function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(
"Expected a function");return o.cache=new($.Cache||an),o}function J(e,t){return oi(e,t)}function H(e){return"not "+e}
function B(e){return e.join(" or ")}function W(e){return e===ns}function Q(e){return c(e)?e:J(e,e=>W(e))?ns:Wn(e,e=>!W(e
)&&!!e).join(", ")}function u(e,t){return W(t=Q(t))?ns:`property "${e}" `+t}function K(e){return void 0===e}function c(e
){return Ve(e)}function X(e){return c(e)?ns:"not string"}function Y(e){return K(e)||c(e)}function Z(e){if(
void 0!==e&&""!==e)return""+e}function ee(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Z(e)}function l(e){
return Si(e)}function te(e){return l(e)?ns:"not number"}function re(e){return K(e)||l(e)}function ne(e){return K(e)||mi(
e)||l(e)}function ie(e){return ne(e)?ns:H(B(["number","null","undefined"]))}function oe(e){if(l(e))switch(e){
case i.OPTIONS:return"options";case i.GET:return"get";case i.POST:return"post";case i.PUT:return"put";case i.DELETE:
return"delete";case i.PATCH:return"patch";case i.TRACE:return"trace";case i.HEAD:return"head"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function se(...e){return t=>so(e,e=>e(t))}function ae(e){return O(
e)}function ue(e,t=void 0,r=void 0,n=void 0){var i;return!(!O(e)||(i=null!=(i=null==e?void 0:e.length)?i:0,
void 0!==r&&i<r)||void 0!==n&&n<i)&&(void 0===t||J(e,t))}function ce(e,t,r,n=void 0,i=void 0,o=void 0){return ue(r,n,i,o
)?ns:!ae(r)||(null==r?void 0:r.length)<1?H(e):H(e)+": "+Q(Zi(r,e=>t(e)))}function le(e){return dt(e)}function he(e,t=c){
var r;return ae(e)?(r=Zi(e,(e,t)=>t),Wn(r,e=>t(e))):le(e)?(r=Reflect.ownKeys(e),Wn(r,e=>t(e))):[]}function de(e,t=c,
r=void 0){var n;return!!(void 0===r||dt(n=e)&&J(lo(n),r))&&(n=void 0!==t?t:c,dt(r=e))&&J(he(r),n)}function pe(e){
return!!dt(e)&&!(e instanceof Date||_t(e)||ae(e))&&de(e,c,void 0)}function fe(e){return pe(e)?ns:"not regular object"}
function _e(e){return c(t=e)||l(t)||ui(t)||mi(t)||ve(e)||pe(t=e)&&de(t,c,se(_e,K));var t}function ve(e){return ue(e,se(
_e,K))}function ge(e,t){return le(e)&&0===(r=t,Wn(he(e),e=>!r.includes(e)).length);var r}function Ee(e,t){return!ls||ge(
e,t)}function Te(e,t){return ge(e,t)?ns:"Value had extra properties: "+Wn(he(e),e=>!t.includes(e))}function ye(e,t){
return Ee(e,t)?ns:"Value had extra properties: "+Wn(he(e),e=>!t.includes(e))}function be(e){switch(e){case p.DAVINCI:
case p.DAVINCI_EDIT_TEXT:case p.DAVINCI_EDIT_CODE:case p.CURIE:case p.BABBAGE:case p.ADA:case p.CONTENT_FILTER:
case p.CODEX:return 1;default:return}}function Re(e){return pe(e)&&ge(e,["text","index","logprobs","finish_reason"])&&c(
null==e?void 0:e.text)&&l(null==e?void 0:e.index)&&ne(null==e?void 0:e.logprobs)&&c(null==e?void 0:e.finish_reason)}
function Oe(e){return Q([fe(e),Te(e,["text","index","logprobs","finish_reason"]),u("text",X(null==e?void 0:e.text)),u(
"index",te(null==e?void 0:e.index)),u("logprobs",ie(null==e?void 0:e.logprobs)),u("finish_reason",X(
null==e?void 0:e.finish_reason))])}function Ae(e){return pe(e)&&ge(e,["text","index","logprobs","finish_reason"])&&c(
null==e?void 0:e.text)&&l(null==e?void 0:e.index)&&ne(null==e?void 0:e.logprobs)&&Y(null==e?void 0:e.finish_reason)}
function Se(e){return Q([fe(e),Te(e,["text","index","logprobs","finish_reason"]),u("text",X(null==e?void 0:e.text)),u(
"index",te(null==e?void 0:e.index)),u("logprobs",ie(null==e?void 0:e.logprobs)),u("finish_reason",Y(
null==e?void 0:e.finish_reason)?ns:H(B(["string","undefined"])))])}function me(e){return e&&e instanceof gs}function we(
e){return pe(e)&&Ee(e,["error","code"])&&c(null==e?void 0:e.error)&&re(null==e?void 0:e.code)}function Ne(e){
return`USAGE: ${e} [OPT(s)] ARG(1) [...ARG(N)]

  Heusala Group CLI tool.
  
...and OPT is one of:

    -h --help          Print help
    -v --version       Print version
    --                 Disables option parsing

  Environment variables:

    LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`}function Ce(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function qe(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Uo&&Uo in Object(e)?function(e){var t,r,n=Co.call(e,Lo),
i=e[Lo];try{t=!(e[Lo]=void 0)}catch(e){}return r=qo.call(e),t&&(n?e[Lo]=i:delete e[Lo]),r}:function(e){return Po.call(e)
})(e)}function Le(e){return null!=e&&"object"==typeof e}function Pe(e){return"symbol"==typeof e||jo(e
)&&"[object Symbol]"==Do(e)}function Ue(e){var t;return"string"==typeof e?e:Io(e)?xo(e,Ue)+"":Fo(e)?ko?ko.call(e
):"":"0"==(t=e+"")&&1/e==-1/0?"-0":t}function De(e){return e&&e.slice(0,function(e){for(var t=e.length;t--&&Go.test(
e.charAt(t)););return t}(e)+1).replace(Mo,"")}function je(e){return e!=e}function xe(e,t,r){var n,i,o,s,a,u,c,l;if(t==t
){for(i=t,o=r-1,s=(n=e).length;++o<s;)if(n[o]===i)return o}else for(u=je,c=(a=e).length,l=r+-1;++l<c;)if(u(a[l],l,a)
)return l;return-1}function Ie(e){return null==e?"":Ko(e)}function Fe(e){return(Wo(e)?Qo:Bo)(e)}function ke(e,t,r){
return(e=Zo(e))&&(r||void 0===t)?Yo(e):e&&(t=Xo(t))?function(e,t,r){var n,i,o,s,a,u=e.length;if(!t&&u<=r)return e;for(
s=-1,(u=(a=(i=e).length)<(u=r)?a:u)<0&&(u+=a),a=u<(o=t<0?a<-t?0:a+t:t)?0:u-o>>>0,o>>>=0,n=Array(a);++s<a;)n[s]=i[s+o];
return n}(r=Fe(e),function(e,t){for(var r=-1,n=e.length;++r<n&&-1<Vo(t,e[r],0););return r}(r,t=Fe(t)),function(e,t){for(
var r=e.length;r--&&-1<zo(t,e[r],0););return r}(r,t)+1).join(""):e}var Ge,Me,ze,Ve,$e,Je,He,Be,We,Qe,Ke,Xe,Ye,Ze,t,et,tt
,rt,nt,it,ot,st,at,ut,ct,lt,ht,dt,pt,ft,_t,vt,gt,Et,Tt,yt,bt,Rt,Ot,At,St,mt,wt,Nt,Ct,qt,Lt,Pt,Ut,Dt,jt,xt,It,Ft,kt,Gt,Mt
,zt,Vt,$t,Jt,Ht,Bt,Wt,Qt,Kt,Xt,Yt,Zt,er,tr,rr,nr,ir,or,sr,ar,ur,cr,lr,hr,dr,pr,fr,_r,vr,e,gr,Er,Tr,yr,br,Rr,Or,Ar,Sr,mr,
wr,Nr,Cr,qr,Lr,Pr,Ur,Dr,jr,xr,Ir,Fr,kr,Gr,Mr,zr,Vr,$r,Jr,Hr,Br,Wr,Qr,Kr,Xr,Yr,Zr,en,tn,rn,nn,on,sn,an,un,cn,ln,hn,dn,pn,
fn,_n,vn,gn,En,Tn,yn,bn,Rn,On,An,Sn,mn,wn,Nn,Cn,qn,Ln,Pn,Un,r,Dn,jn,xn,In,Fn,kn,Gn,Mn,zn,Vn,$n,Jn,Hn,Bn,Wn,Qn,Kn,Xn,Yn,
Zn,ei,ti,ri,ni,ii,oi,si,ai,ui,ci,li,hi,di,pi,fi,_i,vi,gi,Ei,Ti,yi,bi,Ri,Oi,Ai,Si,mi,d,i,wi,Ni,Ci,qi,Li,Pi,Ui,Di,ji,xi,Ii
,Fi,ki,Gi,Mi,zi,Vi,$i,Ji,Hi,Bi,Wi,Qi,Ki,Xi,Yi,Zi,eo,to,ro,no,io,oo,so,ao,uo,co,lo,n,ho,po,fo,p,s,_o,vo,go,Eo,To,a,f,yo,_
,v,g,E,T,bo,Ro,Oo,Ao=require("fs"),y=require("path"),b=require("url"),R=require("querystring"),So=I(Ao),mo=I(y),wo=I(b),
No=F(R),b="object"==typeof(
y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
)&&y&&y.Object===Object&&y,R="object"==typeof self&&self&&self.Object===Object&&self,R=(y=b||R||Function("return this")(
)).Symbol,O=Array.isArray,A=Object.prototype,Co=A.hasOwnProperty,qo=A.toString,Lo=R?R.toStringTag:void 0,
Po=Object.prototype.toString,Uo=R?R.toStringTag:void 0,Do=qe,jo=Le,xo=Ce,Io=O,Fo=Pe,ko=(A=R?R.prototype:void 0
)?A.toString:void 0,Go=/\s/,Mo=/^\s+/,zo=xe,Vo=xe,$o=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),S="["+(A="\\ud800-\\udfff")+"]",
m="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",w="\\ud83c[\\udffb-\\udfff]",Jo="(?:\\ud83c[\\udde6-\\uddff]){2}",
N="[\\ud800-\\udbff][\\udc00-\\udfff]",C=(C="[\\ufe0e\\ufe0f]?")+(
q="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?")+"(?:\\u200d(?:"+[A="[^"+A+"]",Jo,N
].join("|")+")"+C+q+")*",q="(?:"+[A+m+"?",m,Jo,N,S].join("|")+")",Ho=RegExp(w+"(?="+w+")|"+q+C,"g"),Bo=function(e){
return e.split("")},Wo=function(e){return $o.test(e)},Qo=function(e){return e.match(Ho)||[]},Ko=Ue,Xo=Ue,Yo=De,Zo=Ie,L={
DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"};class es{constructor(e,t){o(this,
"_logger",void 0),o(this,"name",void 0),o(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}
getLogLevel(){var e;return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}
debug(...e){(void 0===this._level||this._level<=L.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=L.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=L.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=L.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class P{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case L.DEBUG:return"DEBUG";case L.INFO:return"INFO";case L.WARN:return"WARN";case L.ERROR:return"ERROR";
case L.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=L.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=L.INFO&&this._logger.info(...e)}static warn(...e){this._level<=L.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=L.ERROR&&this._logger.error(...e)}static createLogger(e){return new es(e,P)}}o(P,
"Level",L),o(P,"_level",L.DEBUG),o(P,"_logger",console);const ts=P.createLogger("ProcessUtils");class rs{
static setLogLevel(e){ts.setLogLevel(e)}static getArguments(){return process.argv.slice(2)}static parseEnvFileLine(e,t){
var r;return t.indexOf("=")<0?t.length&&(e[t]=""):(r=ke((t=t.split("=")).shift())).length&&(e[r]=t.join("=").trim()),e}
static parseEnvFile(e){return So.default.readFileSync(e,{encoding:"utf-8"}).split("\n").reduce(rs.parseEnvFileLine,{})}
static initEnvFromFile(e){e=rs.parseEnvFile(e),process.env=h(h({},e),process.env)}static initEnvFromDefaultFiles(){
var e=mo.default.join(process.cwd(),".env");So.default.existsSync(e)&&rs.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let i=!1;var e=t=>e=>{rs._printErrors(t,e);try{i||(i=!0,r())}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{
"exit"===e?t?ts.debug(`DEBUG: Closing process because "${e}" event: `,t):ts.debug(
`DEBUG: Closing process because "${e}" event`):t?ts.error(`ERROR: Closing process because "${e}" event: `,t):ts.info(
`INFO: Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}Me=O,
Ve=function(e){return"string"==typeof e||!Me(e)&&ze(e)&&"[object String]"==Ge(e)},A=function(e,t){for(var r,n=-1,
i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e)&&(s[o++]=r);return s},m=function(e,t,r){for(var n,i=-1,o=Object(e),
s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Jo=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},$e=Ge=qe,N=function(e){return Je(e)&&"[object Arguments]"==$e(e)},He=Je=ze=Le,S=Object.prototype,
Be=S.hasOwnProperty,We=S.propertyIsEnumerable,w=N(function(){return arguments}())?N:function(e){return He(e)&&Be.call(e,
"callee")&&!We.call(e,"callee")},Qe={},q={get exports(){return Qe},set exports(e){Qe=e}},N=(C=(N=(S=(C=Qe
)&&!C.nodeType&&C)&&q&&!q.nodeType&&q)&&N.exports===S?y.Buffer:void 0)?C.isBuffer:void 0,q.exports=N||function(){
return!1},Ke=/^(?:0|[1-9]\d*)$/,S=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&Ke.test(e))&&-1<e&&e%1==0&&e<t},Xe=qe,Ye=C=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Ze=Le,(t={})["[object Float32Array]"]=t[
"[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t[
"[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0,t[
"[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t[
"[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"
]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1,q=function(e){return Ze(e)&&Ye(
e.length)&&!!t[Xe(e)]},N=function(t){return function(e){return t(e)}},et={},go={get exports(){return et},set exports(e){
et=e}},a=(a=et)&&!a.nodeType&&a,Eo=a&&go&&!go.nodeType&&go,To=Eo&&Eo.exports===a&&b.process,a=function(){try{
return Eo&&Eo.require&&Eo.require("util").types||To&&To.binding&&To.binding("util")}catch(e){}}(),go.exports=a,go=(
b=et&&et.isTypedArray)?N(b):q,tt=Jo,rt=w,nt=O,it=Qe,ot=S,st=a=go,N=Object.prototype,at=N.hasOwnProperty,
ut=Object.prototype,Ro=Object.keys,Oo=Object,ct=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||ut)},lt=function(e){return Ro(Oo(e))},b=Object.prototype,ht=b.hasOwnProperty,pt=qe,
ft=dt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},vt=_t=function(e){return!!ft(e)&&(
"[object Function]"==(e=pt(e))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},gt=C
,Et=function(e,t){var r,n=nt(e),i=!n&&rt(e),o=!n&&!i&&it(e),s=!n&&!i&&!o&&st(e),a=n||i||o||s,u=a?tt(e.length,String):[],
c=u.length;for(r in e)!t&&!at.call(e,r)||a&&("length"==r||o&&("offset"==r||"parent"==r)||s&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||ot(r,c))||u.push(r);return u},Tt=function(e){var t,r;if(!ct(e)
)return lt(e);for(r in t=[],Object(e))ht.call(e,r)&&"constructor"!=r&&t.push(r);return t},bt=m,Rt=q=function(e){return(
yt(e)?Et:Tt)(e)},Ot=yt=Jo=function(e){return null!=e&&gt(e.length)&&!vt(e)},At=go=function(e,t){var r,n,i;if(null!=e){
if(!Ot(e))return e&&bt(e,t,Rt);for(r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););}return e},N=function(e,n){
var i=[];return At(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},St=b=function(e,t){return e===t||e!=e&&t!=t},
mt=m=function(e,t){for(var r=e.length;r--;)if(St(e[r][0],t))return r;return-1},e=Array.prototype,wt=e.splice,qt=Ct=Nt=m,
e=function(e){var t=this.__data__;return!((e=mt(t,e))<0||(e==t.length-1?t.pop():wt.call(t,e,1),--this.size,0))},
m=function(e){var t=this.__data__;return(e=Nt(t,e))<0?void 0:t[e][1]},yo=function(e){return-1<Ct(this.__data__,e)},
_=function(e,t){var r=this.__data__,n=qt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},
k.prototype.clear=function(){this.__data__=[],this.size=0},k.prototype.delete=e,k.prototype.get=m,k.prototype.has=yo,
k.prototype.set=_,Lt=e=k,m=function(){this.__data__=new Lt,this.size=0},yo=function(e){var t=this.__data__,e=t.delete(e)
return this.size=t.size,e},_=function(e){return this.__data__.get(e)},ar=function(e){return this.__data__.has(e)},f=y[
"__core-js_shared__"],f=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""),Pt=f?"Symbol(src)_1."+f:"",f=Function.prototype,
Ut=f.toString,Dt=_t,jt=function(e){return!!Pt&&Pt in e},xt=dt,It=f=function(e){if(null!=e){try{return Ut.call(e)}catch(e
){}try{return e+""}catch(e){}}return""},T=/[\\^$.*+?()[\]{}|]/g,Ft=/^\[object .+?Constructor\]$/,v=Function.prototype,
g=Object.prototype,v=v.toString,g=g.hasOwnProperty,kt=RegExp("^"+v.call(g).replace(T,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gt=function(e){return!(!xt(e)||jt(e))&&(Dt(e
)?kt:Ft).test(It(e))},Mt=function(e,t){return null==e?void 0:e[t]},g=(v=function(e,t){return e=Mt(e,t),Gt(e)?e:void 0})(
y,"Map"),T=v(Object,"create"),Vt=zt=T,E=Object.prototype,$t=E.hasOwnProperty,Jt=T,E=Object.prototype,Ht=E.hasOwnProperty
,Bt=T,E=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},T=function(e){var t,
r=this.__data__;return Vt?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:$t.call(r,e)?r[e]:void 0},r=function(e){
var t=this.__data__;return Jt?void 0!==t[e]:Ht.call(t,e)},An=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=Bt&&void 0===t?"__lodash_hash_undefined__":t,this},G.prototype.clear=function(){
this.__data__=zt?zt(null):{},this.size=0},G.prototype.delete=E,G.prototype.get=T,G.prototype.has=r,G.prototype.set=An,
Wt=G,Qt=e,Kt=g,Xt=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},tr=er=Zt=Yt=function(e,t){
return e=e.__data__,Xt(t)?e["string"==typeof t?"string":"hash"]:e.map},E=function(e){return e=Yt(this,e).delete(e),
this.size-=e?1:0,e},T=function(e){return Zt(this,e).get(e)},r=function(e){return er(this,e).has(e)},An=function(e,t){
var r=tr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},M.prototype.clear=function(){this.size=0,
this.__data__={hash:new Wt,map:new(Kt||Qt),string:new Wt}},M.prototype.delete=E,M.prototype.get=T,M.prototype.has=r,
M.prototype.set=An,nr=g,ir=E=M,or=rr=e,T=yo,r=_,An=ar,e=function(e,t){var r,n=this.__data__;if(n instanceof rr){if(
r=n.__data__,!nr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ir(r)}return n.set(e,t),
this.size=n.size,this},z.prototype.clear=m,z.prototype.delete=T,z.prototype.get=r,z.prototype.has=An,z.prototype.set=e,
yo=z,sr=E,_=function(e){return this.__data__.has(e)},V.prototype.add=V.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},V.prototype.has=_,ur=V,cr=ar=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},lr=function(e,t){return e.has(t)},m=y.Uint8Array,hr=m,dr=b
,pr=T=function(e,t,r,n,i,o){var s,a,u,c,l,h,d,p=1&r,f=e.length,_=t.length;if(f!=_&&!(p&&f<_))return!1;if(_=o.get(e),
s=o.get(t),_&&s)return _==t&&s==e;for(a=-1,u=!0,c=2&r?new ur:void 0,o.set(e,t),o.set(t,e);++a<f;){if(l=e[a],h=t[a],
void 0!==(d=n?p?n(h,l,a,t,e,o):n(l,h,a,e,t,o):d)){if(d)continue;u=!1;break}if(c){if(!cr(t,function(e,t){if(!lr(c,t)&&(
l===e||i(l,e,r,n,o)))return c.push(t)})){u=!1;break}}else if(l!==h&&!i(l,h,r,n,o)){u=!1;break}}return o.delete(e),
o.delete(t),u},fr=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},_r=function(e){
var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},r=R?R.prototype:void 0,vr=r?r.valueOf:void 0,
An=function(e,t,r,n,i,o,s){var a,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new hr(e),new hr(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return dr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":a=fr;case"[object Set]":return a=a||_r,!!(
e.size==t.size||1&n)&&((u=s.get(e))?u==t:(n|=2,s.set(e,t),u=pr(a(e),a(t),n,i,o,s),s.delete(e),u));case"[object Symbol]":
if(vr)return vr.call(e)==vr.call(t)}return!1},gr=e=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},Er=O,Tr=A,_=Object.prototype,yr=_.propertyIsEnumerable,br=Object.getOwnPropertySymbols,Rr=function(e,t,r){
return t=t(e),Er(e)?t:gr(t,r(e))},Or=br?function(t){return null==t?[]:(t=Object(t),Tr(br(t),function(e){return yr.call(t
,e)}))}:function(){return[]},Ar=q,Sr=function(e){return Rr(e,Ar,Or)},m=Object.prototype,mr=m.hasOwnProperty,r=function(e
,t,r,n,i,o){var s,a,u,c,l,h,d,p,f,_=1&r,v=Sr(e),g=v.length;if(g!=Sr(t).length&&!_)return!1;for(s=g;s--;)if(a=v[s],!(
_?a in t:mr.call(t,a)))return!1;if(p=o.get(e),f=o.get(t),p&&f)return p==t&&f==e;for(u=!0,o.set(e,t),o.set(t,e),
c=_;++s<g;){if(l=e[a=v[s]],h=t[a],!(void 0===(d=n?_?n(h,l,a,t,e,o):n(l,h,a,e,t,o):d)?l===h||i(l,h,r,n,o):d)){u=!1;break}
c=c||"constructor"==a}return u&&!c&&(p=e.constructor)!=(f=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof f&&f instanceof f)&&(u=!1),o.delete(e),o.delete(t),u},_=v(y,
"DataView"),m=g,g=v(y,"Promise"),ho=v(y,"Set"),v=v(y,"WeakMap"),wr=qe,Cr=(Nr=f)(y=_),qr=Nr(m),Lr=Nr(g),Pr=Nr(ho),Ur=Nr(v
),f=wr,(y&&"[object DataView]"!=f(new y(new ArrayBuffer(1)))||m&&"[object Map]"!=f(new m)||g&&"[object Promise]"!=f(
g.resolve())||ho&&"[object Set]"!=f(new ho)||v&&"[object WeakMap]"!=f(new v))&&(f=function(e){var t=wr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?Nr(e):"")switch(e){case Cr:return"[object DataView]";case qr:
return"[object Map]";case Lr:return"[object Promise]";case Pr:return"[object Set]";case Ur:return"[object WeakMap]"}
return t}),Dr=yo,jr=T,xr=An,Ir=r,Fr=f,kr=O,Gr=Qe,Mr=a,zr="[object Arguments]",Vr="[object Array]",$r="[object Object]",
_=Object.prototype,Jr=_.hasOwnProperty,Hr=function(e,t,r,n,i,o){var s=kr(e),a=kr(t),u=s?Vr:Fr(e),a=a?Vr:Fr(t),c=(
u=u==zr?$r:u)==$r,l=(a=a==zr?$r:a)==$r;if((a=u==a)&&Gr(e)){if(!Gr(t))return!1;c=!(s=!0)}return a&&!c?(o=o||new Dr,s||Mr(
e)?jr(e,t,r,n,i,o):xr(e,t,u,r,n,i,o)):1&r||(s=c&&Jr.call(e,"__wrapped__"),u=l&&Jr.call(t,"__wrapped__"),!s&&!u)?a&&(
o=o||new Dr,Ir(e,t,r,n,i,o)):i(s?e.value():e,u?t.value():t,r,n,o=o||new Dr)},Br=Le,Wr=yo,Qr=y=function e(t,r,n,i,o){
return t===r||(null==t||null==r||!Br(t)&&!Br(r)?t!=t&&r!=r:Hr(t,r,n,i,e,o))},Kr=dt,Xr=m=function(e){return e==e&&!Kr(e)}
,Yr=q,Zr=function(e,t,r,n){var i,o,s,a,u,c,l=r.length,h=l,d=!n;if(null==e)return!h;for(e=Object(e);l--;)if(i=r[l],d&&i[2
]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++l<h;)if(s=e[o=(i=r[l])[0]],a=i[1],d&&i[2]){if(void 0===s&&!(o in e)
)return!1}else if(u=new Wr,!(void 0===(c=n?n(s,a,o,e,t,u):c)?Qr(a,s,3,n,u):c))return!1;return!0},en=function(e){for(
var t,r,n=Yr(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,Xr(r)];return n},tn=g=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},ho=function(t){var r=en(t);return 1==r.length&&r[0][2]?tn(r[0][
0],r[0][1]):function(e){return e===t||Zr(e,t,r)}},rn=O,nn=Pe,on=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
sn=/^\w*$/,v=function(e,t){var r;return!rn(e)&&(!("number"!=(r=typeof e)&&"symbol"!=r&&"boolean"!=r&&null!=e&&!nn(e)
)||sn.test(e)||!on.test(e)||null!=t&&e in Object(t))},an=E,$.Cache=an,
un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cn=/\\(\\)?/g,bo=(
T=$(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(un,function(e,t,r,n){i.push(r?n.replace(cn,
"$1"):t||e)}),i},function(e){return 500===bo.size&&bo.clear(),e})).cache,dn=T,pn=Ie,fn=Pe,En=_n=function(e,t){return ln(
e)?e:hn(e,t)?[e]:dn(pn(e))},Tn=w,Rn=C,Sn=function(e,t){return null!=e&&t in Object(e)},mn=An=function(e,t,r){for(var n,i
,o=(t=En(t,e)).length,s=!(n=-1);++n<o&&(i=On(t[n]),s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length
)&&Rn(o)&&bn(i,o)&&(yn(e)||Tn(e))},wn=y,Nn=function(e,t,r){return void 0===(e=null==e?void 0:gn(e,t))?r:e},Cn=function(e
,t){return null!=e&&mn(e,t,Sn)},Ln=m,Pn=g,Dn=gn=function(e,t){for(var r=0,n=(t=_n(t,e)).length;null!=e&&r<n;)e=e[vn(t[
r++])];return r&&r==n?e:void 0},jn=function(t){return function(e){return null==e?void 0:e[t]}},xn=function(t){
return function(e){return Dn(e,t)}},In=qn=hn=v,Fn=Un=On=vn=function(e){var t;return"string"==typeof e||fn(e)?e:"0"==(
t=e+"")&&1/e==-1/0?"-0":t},kn=ho,Gn=function(r,n){return qn(r)&&Ln(n)?Pn(Un(r),n):function(e){var t=Nn(e,r);
return void 0===t&&t===n?Cn(e,r):wn(n,t,3)}},Mn=r=function(e){return e},Vn=function(e){return In(e)?jn(Fn(e)):xn(e)},
$n=A,Jn=N,Wn=function(e,t){return(Bn(e)?$n:Jn)(e,Hn(t))},Qn=go,Kn=b,Xn=Jo,Yn=bn=S,Zn=dt,ei=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},ti=function(e,n){var i=!0;return Qn(e,function(e,t,r){
return i=!!n(e,t,r)}),i},ri=Hn=f=function(e){return"function"==typeof e?e:null==e?Mn:"object"==typeof e?zn(e)?Gn(e[0],e[
1]):kn(e):Vn(e)},ni=Bn=zn=yn=ln=O,ii=a=function(e,t,r){var n;return!!Zn(r)&&!!("number"==(n=typeof t)?Xn(r)&&Yn(t,
r.length):"string"==n&&t in r)&&Kn(r[t],e)},oi=function(e,t,r){var n=ni(e)?ei:ti;return r&&ii(e,t,r)&&(t=void 0),n(e,ri(
t))};const ns="OK",is=(si=qe,ai=Le,ui=function(e){return!0===e||!1===e||ai(e)&&"[object Boolean]"==si(e)},yo=null!=(
_=ee(""))?_:"hg-command",T=null!=(E=ee(""))?E:"","".startsWith("%{")&&"".endsWith("}"),v=null!=(g=function(e){if(e){if(
function(){switch(e){case L.DEBUG:case L.INFO:case L.WARN:case L.ERROR:case L.NONE:return 1;default:return}}())return e;
switch((""+e).toUpperCase()){case"ALL":case"DEBUG":return L.DEBUG;case"INFO":return L.INFO;case"WARN":case"WARNING":
return L.WARN;case"ERR":case"ERROR":return L.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":
return L.NONE;default:return}}}(null!=(m=Z(null==(C=process)||null==(y=C.env)?void 0:y.LOG_LEVEL))?m:Z(T)))?g:L.INFO,
null!=(N=Z(null==(ho=process)||null==(A=ho.env)?void 0:A.COMMAND_NAME))?N:yo),os=(ci=De,li=dt,hi=Pe,
di=/^[-+]0x[0-9a-f]+$/i,pi=/^0b[01]+$/i,fi=/^0o[0-7]+$/i,_i=parseInt,vi=function(e){var t;return"number"==typeof e?e:hi(
e)?NaN:(li(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=li(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=ci(e),(
t=pi.test(e))||fi.test(e)?_i(e.slice(2),t?2:8):di.test(e)?NaN:+e))},gi=function(e){return e?(e=vi(e)
)===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},Ei=function(e,t,r){return e!=e||(void 0!==r&&(
e=e<=r?e:r),void 0===t)||t<=e?e:t},Ti=Ue,yi=function(e){var t=(e=gi(e))%1;return e==e?t?e-t:e:0},bi=Ie,Ri=function(e,t,r
){return e=bi(e),r=null==r?0:Ei(yi(r),0,e.length),t=Ti(t),e.slice(r,r+t.length)==t},Oi=qe,Ai=Le,Si=function(e){
return"number"==typeof e||Ai(e)&&"[object Number]"==Oi(e)},mi=function(e){return null===e},(b=d={})[b.OK=0]="OK",b[
b.GENERAL_ERRORS=1]="GENERAL_ERRORS",b[b.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",b[
b.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",b[b.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",b[b.UNIMPLEMENTED_FEATURE=5
]="UNIMPLEMENTED_FEATURE",b[b.FATAL_ERROR=6]="FATAL_ERROR",b[b.CONFLICT=7]="CONFLICT",b[b.USAGE=64]="USAGE",b[
b.DATAERR=65]="DATAERR",b[b.NOINPUT=66]="NOINPUT",b[b.NOUSER=67]="NOUSER",b[b.NOHOST=68]="NOHOST",b[b.UNAVAILABLE=69
]="UNAVAILABLE",b[b.SOFTWARE=70]="SOFTWARE",b[b.OSERR=71]="OSERR",b[b.OSFILE=72]="OSFILE",b[b.CANTCREAT=73]="CANTCREAT",
b[b.IOERR=74]="IOERR",b[b.TEMPFAIL=75]="TEMPFAIL",b[b.PROTOCOL=76]="PROTOCOL",b[b.NOPERM=77]="NOPERM",b[b.CONFIG=78
]="CONFIG",b[b.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",b[b.COMMAND_NOT_FOUND=127
]="COMMAND_NOT_FOUND",b[b.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",b[b.FATAL_SIGNAL_RANGE_START=129
]="FATAL_SIGNAL_RANGE_START",b[b.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",b[b.EXIT_STATUS_OUT_OF_RANGE=255
]="EXIT_STATUS_OUT_OF_RANGE",(_=(S={}).HttpMethods||(S.HttpMethods={})).GET="get",_.PUT="put",_.POST="post",
_.DELETE="delete",_.OPTIONS="options",_.HEAD="head",_.PATCH="patch",_.TRACE="trace",(C=(E={}).HttpMethods||(
E.HttpMethods={})).GET="get",C.PUT="put",C.POST="post",C.DELETE="delete",C.OPTIONS="options",C.HEAD="head",
C.PATCH="patch",(y=i={})[y.OPTIONS=0]="OPTIONS",y[y.GET=1]="GET",y[y.POST=2]="POST",y[y.PUT=3]="PUT",y[y.DELETE=4
]="DELETE",y[y.PATCH=5]="PATCH",y[y.TRACE=6]="TRACE",y[y.HEAD=7]="HEAD",P.createLogger("RequestClient"));class ss{
constructor(e){o(this,"_client",void 0),this._client=e}async textRequest(e,t,r,n){return this._client.textRequest(e,t,r,
n)}async getText(e,t){return this._client.textRequest(i.GET,e,t)}async postText(e,t,r){return os.debug(".postJson: ",e,t
,r),this._client.textRequest(i.POST,e,r,t)}async patchText(e,t,r){return os.debug(".patchJson: ",e,t,r),
this._client.textRequest(i.PATCH,e,r,t)}async putText(e,t,r){return os.debug(".putJson: ",e,t,r),
this._client.textRequest(i.PUT,e,r,t)}async deleteText(e,t,r){return os.debug(".deleteJson: ",e,r,t),
this._client.textRequest(i.DELETE,e,t,r)}async jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
async getJson(e,t){return this._client.jsonRequest(i.GET,e,t)}async postJson(e,t,r){return this._client.jsonRequest(
i.POST,e,r,t)}async patchJson(e,t,r){return this._client.jsonRequest(i.PATCH,e,r,t)}async putJson(e,t,r){
return this._client.jsonRequest(i.PUT,e,r,t)}async deleteJson(e,t,r){return this._client.jsonRequest(i.DELETE,e,t,r)}
static setLogLevel(e){os.setLogLevel(e)}static setClient(e){this._client=new ss(e)}static async textRequest(e,t,r,n){if(
this._client)return this._client.textRequest(e,t,r,n);throw this._createClientError()}static async getText(e,t){if(
this._client)return this._client.getText(e,t);throw this._createClientError()}static async postText(e,t,r){if(
this._client)return os.debug(".postJson: ",e,t,r),this._client.postText(e,t,r);throw this._createClientError()}
static async patchText(e,t,r){if(this._client)return os.debug(".patchJson: ",e,t,r),this._client.patchText(e,t,r);
throw this._createClientError()}static async putText(e,t,r){if(this._client)return this._client.putText(e,t,r);
throw this._createClientError()}static async deleteText(e,t,r){if(this._client)return this._client.deleteText(e,t,r);
throw this._createClientError()}static async jsonRequest(e,t,r,n){if(this._client)return this._client.jsonRequest(e,t,r,
n);throw this._createClientError()}static async getJson(e,t){if(this._client)return this._client.getJson(e,t);
throw this._createClientError()}static async postJson(e,t,r){if(this._client)return os.debug(".postJson: ",e,t,r),
this._client.postJson(e,t,r);throw this._createClientError()}static async patchJson(e,t,r){if(this._client
)return this._client.patchJson(e,t,r);throw this._createClientError()}static async putJson(e,t,r){if(this._client
)return this._client.putJson(e,t,r);throw this._createClientError()}static async deleteJson(e,t,r){if(this._client
)return this._client.deleteJson(e,t,r);throw this._createClientError()}static _createClientError(){return new TypeError(
"RequestClient: You must initialize implementation first using HgFrontend.initialize() or HgNode.initialize()")}}o(ss,
"_client",void 0),wi=w,Ni=O,Ci=R?R.isConcatSpreadable:void 0,Li=function(e){return Ni(e)||wi(e)||!!(Ci&&e&&e[Ci])},
Pi=qi=e,Ui=function e(t,r,n,i,o){var s,a=-1,u=t.length;for(n=n||Li,o=o||[];++a<u;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o
):qi(o,s):i||(o[o.length]=s);return o},Di=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t}
,xi=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];
return Pi(ji(t)?Di(t):[t],Ui(e,1))},Ii=r,Fi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););
return e},ki=go,Gi=function(e){return"function"==typeof e?e:Ii},Mi=ji=O,zi=function(e,t){return(Mi(e)?Fi:ki)(e,Gi(t))},
m=Object.prototype,Vi=m.hasOwnProperty,$i=function(e,t){return null!=e&&Vi.call(e,t)},Ji=An,Hi=function(e,t){
return null!=e&&Ji(e,t,$i)},Wi=Jo,Xi=function(e,n){var i=-1,o=Wi(e)?Array(e.length):[];return Bi(e,function(e,t,r){o[++i
]=n(e,t,r)}),o},Zi=function(e,t){return(Yi(e)?Qi:Xi)(e,Ki(t))},eo=Bi=go,to=ar,ro=Ki=f,no=function(e,n){var i;return eo(e
,function(e,t,r){return!(i=n(e,t,r))}),!!i},io=Yi=O,oo=a,so=function(e,t,r){var n=io(e)?to:no;return r&&oo(e,t,r)&&(
t=void 0),n(e,ro(t))},ao=Qi=Ce,uo=function(t,e){return ao(e,function(e){return t[e]})},co=q,lo=function(e){
return null==e?[]:uo(e,co(e))};const as=P.createLogger("Headers");class us{static setLogLevel(e){as.setLogLevel(e)}
constructor(e){o(this,"_value",void 0),o(this,"_uninitializedValue",void 0),this._value=void 0,
this._uninitializedValue=e}_initializeValue(){var t=this._value,r=this._uninitializedValue;try{r&&(
this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,this._uninitializedValue=r,e}}clear(){
this._value={},this._uninitializedValue=void 0}add(e,t){this._uninitializedValue&&this._initializeValue(),as.debug(
"add header: ",e,t),e=e.toLowerCase();var r=this._value&&Hi(this._value,e)?this._value[e]:void 0;
void 0===this._value?this._value={[e]:t}:void 0!==r?ve(r)?this._value=h(h({},this._value),{},{[e]:xi([],r,[t])}
):this._value=h(h({},this._value),{},{[e]:[r,t]}):this._value=h(h({},this._value),{},{[e]:t})}containsKey(e){
return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),Hi(this._value,e)}isEmpty(){
this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===he(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=he(this._value),
zi(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),Hi(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),ve(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),c(e)){const r=e;if(!ae(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");zi(t,e=>{this.add(r,e)})}else{const n=e;zi(he(
n),t=>{var e=n[t];ve(e)?zi(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e),r=h({},this._value);
return r&&Hi(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=h(h({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),zi(he(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;var e;return!r||this.isEmpty()?"Headers()":(e=he(r
),`Headers(${Zi(e,e=>{const t=r[e];return t?ae(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(
", "):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e}).join("; ")})`)}clone(){
return this._uninitializedValue&&this._initializeValue(),new us(this._value?h({},this._value):void 0)}}class cs{
constructor(e){o(this,"_ai",void 0),this._ai=e}async main(e){var t;return 0===e.length?d.USAGE:([e,...t]=e,
"ai"===e?this._ai.main(t):(console.error("Unknown command: "+e),d.COMMAND_NOT_FOUND))}async ai(e){return this._ai.main(e
)}}const ls=!("production"===(g=null!=(T=function(e){if(void 0!==e&&!(!(e=""+e)||e.startsWith("%{")&&e.endsWith("}"))
)return e}("production"))?T:"development")||"test"===g);class hs{constructor(e){o(this,"_client",void 0),this._client=e}
async main(t){if(0===t.length)return d.USAGE;try{var[r,...e]=t;switch(r){case"c":case"comp":case"completion":
return await this.completion(e);case"e":case"edit":return await this.edit(e)}return console.error("Unknown command: "+r)
,d.COMMAND_NOT_FOUND}catch(e){if(!(pe(r=t=null==e?void 0:e.body)&&Ee(r,["error"])&&pe(r=null==r?void 0:r.error)&&Ee(r,[
"message","type"])&&c(null==r?void 0:r.message)&&c(null==r?void 0:r.type)))throw e;console.error(
`ERROR: [${t.error.type}] `+t.error.message)}}async edit(e){var t;return 0===e.length?d.USAGE:([e,...t]=e,t=Zi(t,
e=>Ao.existsSync(e)?Ao.readFileSync(e,{encoding:"utf8"}).toString():e).join("\n"),e=await this._client.getEdit(e,t),
t=Zi(e.choices,e=>e.text).join("\n"),console.log(t),d.OK)}async completion(e){var t;return 0===e.length?d.USAGE:([e,...t
]=e,e=await this._client.getCompletion(e),e=Zi(e.choices,e=>e.text).join("\n"),console.log(e),d.OK)}}
const U=P.createLogger("HttpService");n={REQUEST_STARTED:"HttpService:requestStarted",
REQUEST_STOPPED:"HttpService:requestStopped"};class ds{static setLogLevel(e){U.setLogLevel(e),ss.setLogLevel(e)}
static setRequestLimit(e){this._requestLimit=e}static setBaseUrl(e){this._baseApiUrl=e}static on(e,t){
return this._observer.listenEvent(e,t)}static destroy(){this._observer.destroy()}static hasOpenRequests(){
return 1<=this._requestCount}static getRequestCount(){return this._requestCount}static async waitUntilNoOpenRequests(){
if(this.hasOpenRequests())return U.debug("waitUntilNoOpenRequests: Let's wait until no requests"),new Promise((t,r)=>{
try{let e=this.on(n.REQUEST_STOPPED,()=>{try{this.hasOpenRequests()?U.debug(
`waitUntilNoOpenRequests: We still have ${this.getRequestCount()} requests`):(U.debug(
"waitUntilNoOpenRequests: No requests anymore. We're ready!"),e(),e=void 0,t())}catch(e){U.debug(
"waitUntilNoOpenRequests: Canceling waiting: error: ",e),r(e)}})}catch(e){U.debug(
"waitUntilNoOpenRequests: Canceling waiting: error: ",e),r(e)}});U.debug("No open requests to wait")}
static async getJson(e,t){if(this._requestCount>=this._requestLimit)throw new TypeError(
"getJson: Too many request: "+this._requestCount);try{return this._baseApiUrl&&e.startsWith("/api")&&(
e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,this._observer.hasCallbacks(n.REQUEST_STARTED
)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"GET"),U.debug(
`Started GET request to "${e} "(${this._requestCount} requests)`),await ss.getJson(e,t)}finally{--this._requestCount,
this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"GET"),U.debug(
`Stopped GET request to "${e}" (${this._requestCount} requests)`)}}static async postJson(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postJson: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"POST"),U.debug(
`Started POST request to "${e}" (${this._requestCount} requests)`),await ss.postJson(e,t,r)}finally{--this._requestCount
,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"POST"),U.debug(
`Stopped POST request to "${e}" (${this._requestCount} requests)`)}}static async deleteJson(e,t){if(
this._requestCount>=this._requestLimit)throw new TypeError("postJson: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"DELETE"),U.debug(
`Started DELETE request to "${e}" (${this._requestCount} requests)`),await ss.deleteJson(e,t)}finally{
--this._requestCount,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,
"DELETE"),U.debug(`Stopped DELETE request to "${e}" (${this._requestCount} requests)`)}}static async getText(e,t){if(
this._requestCount>=this._requestLimit)throw new TypeError("getText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"GET"),U.debug(
`Started GET request to "${e} "(${this._requestCount} requests)`),await ss.getText(e,t)}finally{--this._requestCount,
this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"GET"),U.debug(
`Stopped GET request to "${e}" (${this._requestCount} requests)`)}}static async postText(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"POST"),U.debug(
`Started POST request to "${e}" (${this._requestCount} requests)`),await ss.postText(e,t,r)}finally{--this._requestCount
,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"POST"),U.debug(
`Stopped POST request to "${e}" (${this._requestCount} requests)`)}}static async deleteText(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"DELETE"),U.debug(
`Started DELETE request to "${e}" (${this._requestCount} requests)`),await ss.deleteText(e,r)}finally{
--this._requestCount,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,
"DELETE"),U.debug(`Stopped DELETE request to "${e}" (${this._requestCount} requests)`)}}}o(ds,"_requestLimit",100),o(ds,
"_baseApiUrl",void 0),o(ds,"_requestCount",0),o(ds,"_observer",new class{getName(){return this._name}constructor(e){o(
this,"_name",void 0),o(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,
this._callbacks=void 0}hasCallbacks(e){return Hi(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(
e=this._callbacks[t],zi(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t.toString()}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t.toString()}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Wn(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e.toString(
)}"`)}async waitForEvent(i,o){await new Promise((r,n)=>{try{let e=void 0,t=void 0;e=setTimeout(()=>{try{e=void 0,t&&(t()
,t=void 0),r()}catch(e){n(e)}},o),t=this.listenEvent(i,()=>{try{e&&(clearTimeout(e),e=void 0),t&&(t(),t=void 0),r()
}catch(e){n(e)}})}catch(e){n(e)}})}}("HttpService")),o(ds,"Event",n),ho=Array.prototype,po=ho.join,fo=function(e,t){
return null==e?"":po.call(e,t)},p={DAVINCI:"text-davinci-003",DAVINCI_EDIT_TEXT:"text-davinci-edit-001",
DAVINCI_EDIT_CODE:"code-davinci-edit-001",CURIE:"text-curie-001",BABBAGE:"text-babbage-001",ADA:"text-ada-001",
CONTENT_FILTER:"content-filter-alpha",CODEX:"code-davinci-002"};class ps{static createBearerHeader(e){return"Bearer "+e}
static parseBearerToken(e){var t="Bearer ";if(Ri(e,t))return ke(e.substring(t.length))}}const fs=P.createLogger(
"HttpOpenAiClient");class _s{static setLogLevel(e){fs.setLogLevel(e),ds.setLogLevel(e)}static setDefaultUrl(e){
this._defaultUrl=e}static getDefaultUrl(){return this._defaultUrl}static create(e,t=_s._defaultUrl){return new _s(e,t)}
constructor(e,t=_s._defaultUrl){o(this,"_url",void 0),o(this,"_apiKey",void 0),this._url=t,this._apiKey=e}getUrl(){
return this._url}async getCompletion(e,t,r,n,i,o,s){var a,e=function(e,t,r,n,i,o,s){if(!c(e))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.prompt: "+e);if(!be(t)&&!K(t))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.model: "+t);if(!re(r))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.max_tokens: "+r);if(!re(n))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.temperature: "+n);if(!re(i))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.top_p: "+i);if(!re(o))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.frequency_penalty: "+o);if(re(s))return h(h(h(h(h({prompt:e,
model:null!=t?t:p.DAVINCI},l(r)?{max_tokens:r}:{}),l(n)?{temperature:n}:{}),l(i)?{top_p:i}:{}),l(o)?{frequency_penalty:o
}:{}),l(s)?{presence_penalty:s}:{});throw new TypeError("Invalid OpenAiCompletionRequestDTO.presence_penalty: "+s)}(e,t,
r,n,i,o,s),t=_s._getHeaders(this._apiKey);if(pe(n=r=await ds.postJson(this._url+"/v1/completions",e,t))&&ge(n,["id",
"object","created","model","choices","usage"])&&c(null==n?void 0:n.id)&&c(null==n?void 0:n.object)&&l(
null==n?void 0:n.created)&&be(null==n?void 0:n.model)&&ue(null==n?void 0:n.choices,Re)&&pe(i=null==n?void 0:n.usage
)&&Ee(i,["prompt_tokens","completion_tokens","total_tokens"])&&l(null==i?void 0:i.prompt_tokens)&&l(
null==i?void 0:i.completion_tokens)&&l(null==i?void 0:i.total_tokens))return r;throw fs.debug("getCompletion: result = "
,r),new TypeError("Result was not OpenAiCompletionResponseDTO: "+Q([fe(o=r),Te(o,["id","object","created","model",
"choices","usage"]),u("id",X(null==o?void 0:o.id)),u("object",X(null==o?void 0:o.object)),u("created",te(
null==o?void 0:o.created)),u("model",(s=null==o?void 0:o.model,a=p,be(e=s)?ns:(t=Zi(he(a),e=>a[e]),
`incorrect enum value "${e}" for OpenApiModel: Accepted values `+fo(t,", ")))),u("choices",ce(
"OpenAiCompletionResponseChoice",Oe,null==o?void 0:o.responses,Re)),u("usage",Q([fe(n=null==o?void 0:o.usage),ye(n,[
"prompt_tokens","completion_tokens","total_tokens"]),u("prompt_tokens",te(null==n?void 0:n.prompt_tokens)),u(
"completion_tokens",te(null==n?void 0:n.completion_tokens)),u("total_tokens",te(null==n?void 0:n.total_tokens))]))]))}
async getEdit(e,t,r,n,i,o){if(e=function(e,t,r,n,i,o){if(!c(e))throw new TypeError(
"Invalid OpenAiEditRequestDTO.instruction: "+e);if(!Y(t))throw new TypeError("Invalid OpenAiEditRequestDTO.input: "+t);
if(!be(r)&&!K(r))throw new TypeError("Invalid OpenAiEditRequestDTO.model: "+r);if(!re(n))throw new TypeError(
"Invalid OpenAiEditRequestDTO.n: "+n);if(!re(i))throw new TypeError("Invalid OpenAiEditRequestDTO.temperature: "+i);if(
re(o))return h(h(h(h({model:null!=r?r:p.DAVINCI_EDIT_TEXT,instruction:e},c(t)?{input:t}:{}),l(n)?{n:n}:{}),l(i)?{
temperature:i}:{}),l(o)?{top_p:o}:{});throw new TypeError("Invalid OpenAiEditRequestDTO.top_p: "+o)}(e,t,r,n,i,o),
t=_s._getHeaders(this._apiKey),pe(n=r=await ds.postJson(this._url+"/v1/edits",e,t))&&Ee(n,["object","created","choices",
"usage"])&&c(null==n?void 0:n.object)&&l(null==n?void 0:n.created)&&ue(null==n?void 0:n.choices,Ae)&&pe(
i=null==n?void 0:n.usage)&&Ee(i,["prompt_tokens","completion_tokens","total_tokens"])&&l(null==i?void 0:i.prompt_tokens
)&&l(null==i?void 0:i.completion_tokens)&&l(null==i?void 0:i.total_tokens))return r;throw fs.debug("getEdit: result = ",
r),new TypeError("Result was not OpenAiEditResponseDTO: "+Q([fe(o=r),Te(o,["object","created","choices","usage"]),u(
"object",X(null==o?void 0:o.object)),u("created",te(null==o?void 0:o.created)),u("choices",ce("OpenAiEditResponseChoice"
,Se,null==o?void 0:o.responses,Ae)),u("usage",Q([fe(e=null==o?void 0:o.usage),ye(e,["prompt_tokens","completion_tokens",
"total_tokens"]),u("prompt_tokens",te(null==e?void 0:e.prompt_tokens)),u("completion_tokens",te(
null==e?void 0:e.completion_tokens)),u("total_tokens",te(null==e?void 0:e.total_tokens))]))]))}static _getHeaders(e){
return{Authorization:ps.createBearerHeader(e)}}}o(_s,"_defaultUrl","https://api.openai.com");class vs{
static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)}catch(e){t(e)
}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,t="utf8"){return(
await vs.getRequestDataAsBuffer(e)).toString(t)}static async getRequestDataAsFormUrlEncoded(e){if(""!==(
e=await vs.getRequestDataAsString(e)))return No.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await vs.getRequestDataAsString(e)))return JSON.parse(e)}}C="WINDOW"===(E=null!=(_=null!=(yo=null==(A=process
)||null==(N=A.env)?void 0:N.NOR_REQUEST_CLIENT_MODE)?yo:null==(b=process)||null==(S=b.env
)?void 0:S.REACT_APP_REQUEST_CLIENT_MODE)?_:"")||!("undefined"==typeof window||!window.fetch),y="NODE"===E||!C,(w=s={
Continue:100,100:"Continue",SwitchingProtocols:101,101:"SwitchingProtocols",Processing:102,102:"Processing",
CheckPoint:103,103:"CheckPoint",OK:200,200:"OK",Created:201,201:"Created",Accepted:202,202:"Accepted",
NonAuthoritativeInformation:203,203:"NonAuthoritativeInformation",NoContent:204,204:"NoContent",ResetContent:205,
205:"ResetContent",PartialContent:206,206:"PartialContent",MultiStatus:207,207:"MultiStatus",AlreadyReported:208,
208:"AlreadyReported",IMUsed:226,226:"IMUsed",MultipleChoices:300,300:"MultipleChoices",MovedPermanently:301,
301:"MovedPermanently",Found:302,302:"Found",SeeOther:303,303:"SeeOther",NotModified:304,304:"NotModified",
TemporaryRedirect:307,307:"TemporaryRedirect",PermanentRedirect:308,308:"PermanentRedirect",BadRequest:400,
400:"BadRequest",Unauthorized:401,401:"Unauthorized",PaymentRequired:402,402:"PaymentRequired",Forbidden:403,
403:"Forbidden",NotFound:404,404:"NotFound",MethodNotAllowed:405,405:"MethodNotAllowed",NotAcceptable:406,
406:"NotAcceptable",ProxyAuthenticationRequired:407,407:"ProxyAuthenticationRequired",RequestTimeout:408,
408:"RequestTimeout",Conflict:409,409:"Conflict",Gone:410,410:"Gone",LengthRequired:411,411:"LengthRequired",
PreconditionFailed:412,412:"PreconditionFailed",PayloadTooLarge:413,413:"PayloadTooLarge",URITooLong:414,
414:"URITooLong",UnsupportedMediaType:415,415:"UnsupportedMediaType",RequestedRangeNotSatisfiable:416,
416:"RequestedRangeNotSatisfiable",ExpectationFailed:417,417:"ExpectationFailed",IAmATeapot:418,418:"IAmATeapot",
UnprocessableEntity:422,422:"UnprocessableEntity",Locked:423,423:"Locked",FailedDependency:424,424:"FailedDependency",
TooEarly:425,425:"TooEarly",UpgradeRequired:426,426:"UpgradeRequired",PreconditionRequired:428,
428:"PreconditionRequired",TooManyRequests:429,429:"TooManyRequests",RequestHeaderFieldsTooLarge:431,
431:"RequestHeaderFieldsTooLarge",UnavailableForLegalReasons:451,451:"UnavailableForLegalReasons",InternalError:500,
500:"InternalError",InternalServerError:500})[500]="InternalServerError",w[w.NotImplemented=501]="NotImplemented",w[
w.BadGateway=502]="BadGateway",w[w.ServiceUnavailable=503]="ServiceUnavailable",w[w.GatewayTimeout=504]="GatewayTimeout"
,w[w.HttpVersionNotSupported=505]="HttpVersionNotSupported",w[w.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",w[
w.InsufficientStorage=507]="InsufficientStorage",w[w.LoopDetected=508]="LoopDetected",w[w.BandwidthLimitExceeded=509
]="BandwidthLimitExceeded",w[w.NotExtended=510]="NotExtended",w[w.NetworkAuthenticationRequired=511
]="NetworkAuthenticationRequired",_o={ERROR:"error"};class gs extends Error{constructor(e,t=void 0,r=void 0,n=void 0,
i=void 0){super(t||function(e){switch(e){case s.Continue:return"Continue";case s.SwitchingProtocols:
return"Switching Protocols";case s.Processing:return"Processing";case s.CheckPoint:return"Check Point";case s.OK:
return"OK";case s.Created:return"Created";case s.Accepted:return"Accepted";case s.NonAuthoritativeInformation:
return"Non-Authoritative Information";case s.NoContent:return"No Content";case s.ResetContent:return"Reset Content";
case s.PartialContent:return"Partial Content";case s.MultiStatus:return"Multi Status";case s.AlreadyReported:
return"Already Reported";case s.IMUsed:return"IM Used";case s.MultipleChoices:return"Multiple Choices";
case s.MovedPermanently:return"Moved Permanently";case s.Found:return"Found";case s.SeeOther:return"See Other";
case s.NotModified:return"Not Modified";case s.TemporaryRedirect:return"Temporary Redirect";case s.PermanentRedirect:
return"Permanent Redirect";case s.BadRequest:return"Bad Request";case s.Unauthorized:return"Unauthorized";
case s.PaymentRequired:return"Payment Required";case s.Forbidden:return"Forbidden";case s.NotFound:return"Not Found";
case s.MethodNotAllowed:return"Method Not Allowed";case s.NotAcceptable:return"Not Acceptable";
case s.ProxyAuthenticationRequired:return"Proxy Authentication Required";case s.RequestTimeout:return"Request Timeout";
case s.Conflict:return"Conflict";case s.Gone:return"Gone";case s.LengthRequired:return"Length Required";
case s.PreconditionFailed:return"Precondition Failed";case s.PayloadTooLarge:return"Payload Too Large";
case s.URITooLong:return"URI Too Long";case s.UnsupportedMediaType:return"Unsupported Media Type";
case s.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";case s.ExpectationFailed:
return"Expectation Failed";case s.IAmATeapot:return"I Am a Teapot";case s.UnprocessableEntity:
return"Unprocessable Entity";case s.Locked:return"Locked";case s.FailedDependency:return"Failed Dependency";
case s.TooEarly:return"Too Early";case s.UpgradeRequired:return"Upgrade Required";case s.PreconditionRequired:
return"Precondition Required";case s.TooManyRequests:return"Too Many Requests";case s.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case s.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case s.InternalServerError:return"Internal Server Error";case s.NotImplemented:return"Not Implemented";
case s.BadGateway:return"Bad Gateway";case s.ServiceUnavailable:return"Service Unavailable";case s.GatewayTimeout:
return"Gateway Timeout";case s.HttpVersionNotSupported:return"Http Version Not Supported";case s.VariantAlsoNegotiates:
return"Variant Also Negotiates";case s.InsufficientStorage:return"Insufficient Storage";case s.LoopDetected:
return"Loop Detected";case s.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case s.NotExtended:
return"Not Extended";case s.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}(e)),o(this,"status",void 0),o(this,"method",void 0),o(this,"url",void 0),o(
this,"body",void 0),o(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}valueOf(){return this.status}toString(){
return this.status+" "+this.message}toJSON(){return{type:_o.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
vo={TEXT:"text/plain",CALENDAR:"text/calendar",JSON:"application/json",
X_WWW_FORM_URLENCODED:"application/x-www-form-urlencoded"};const Es=y?require("fs").promises:void 0,D=P.createLogger(
"NodeRequestClient");class j{static setLogLevel(e){D.setLogLevel(e)}constructor(e,t,r){o(this,"_http",void 0),o(this,
"_https",void 0),o(this,"_defaultOptions",void 0),this._http=e,this._https=t,this._defaultOptions=r}async textRequest(e,
t,r,n){switch(e){case i.GET:return this._getText(t,r,n);case i.POST:return this._postText(t,r,n);case i.PATCH:
return this._patchText(t,r,n);case i.PUT:return this._putText(t,r,n);case i.DELETE:return this._deleteText(t,r,n);
default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _getText(e,t,r){let n={method:"GET",
headers:{"Content-Type":vo.TEXT}};return t&&(n=h(h({},n),{},{headers:h(h({},n.headers),t)})),this._textRequest(i.GET,e,n
,r).then(j._successTextResponse)}async _putText(e,t,r){let n={method:"PUT",headers:{"Content-Type":vo.TEXT}};return t&&(
n=h(h({},n),{},{headers:h(h({},n.headers),t)})),this._textRequest(i.PUT,e,n,r).then(j._successTextResponse)}
async _postText(e,t,r){let n={method:"POST",headers:{"Content-Type":vo.TEXT}};return t&&(n=h(h({},n),{},{headers:h(h({},
n.headers),t)})),this._textRequest(i.POST,e,n,r).then(j._successTextResponse)}async _patchText(e,t,r){let n={
method:"PATCH",headers:{"Content-Type":vo.TEXT}};return t&&(n=h(h({},n),{},{headers:h(h({},n.headers),t)})),
this._textRequest(i.PATCH,e,n,r).then(j._successTextResponse)}async _deleteText(e,t,r){let n={method:"DELETE",headers:{
"Content-Type":vo.TEXT}};return t&&(n=h(h({},n),{},{headers:h(h({},n.headers),t)})),this._textRequest(i.DELETE,e,n,r
).then(j._successTextResponse)}static async _successTextResponse(e){var t,r=null==e?void 0:e.statusCode;if(r<200||400<=r
)throw D.error(`Unsuccessful response with status ${r}: `,e),t=j._stringifyErrorBodyString(null==e?void 0:e.body),
new gs(r,r+(t?` "${t}"`:"")+` for ${oe(e.method)} `+e.url,e.method,e.url,e.body);return e.body}
static _stringifyErrorBodyJson(t){var e,r;try{if(void 0===t)return"";if(e=t){if(me(e))return e.message;if(we(e)
)return e.error;if(c(r=null==e?void 0:e.error))return r}return JSON.stringify(t,null,2)}catch(e){return D.warn(
"Warning! Could not stringify error body: ",e,t),t?JSON.stringify(t,null,2):""}}static _stringifyErrorBodyString(t){
var e,r;try{if(void 0===t)return"";if(e=function(e){try{return JSON.parse(e)}catch(e){}}(t)){if(me(e))return e.message;
if(we(e))return e.error;if(c(r=null==e?void 0:e.error))return r}return t}catch(e){return D.warn(
"Warning! Could not stringify error body: ",e,t),null!=t?t:""}}async _textRequest(e,t,r,n){
return r=await this._httpRequest(t,r,n),n=await vs.getRequestDataAsString(r),{method:e,url:t,statusCode:null!=(
e=null==r?void 0:r.statusCode)?e:0,headers:r.headers,body:n}}async jsonRequest(e,t,r,n){switch(e){case i.GET:
return this._getJson(t,r,n);case i.POST:return this._postJson(t,r,n);case i.PATCH:return this._patchJson(t,r,n);
case i.PUT:return this._putJson(t,r,n);case i.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
"[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{return!!(await Es.stat(t)).isSocket()
}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))D.debug("_checkSocketFile: ENOTDIR: ",e);else{if("ENOENT"!==t
)throw D.error(`_checkSocketFile: Error "${t}" passed on: `,e),e;D.debug("_checkSocketFile: ENOENT: ",e)}}}
async _findSocketFile(e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=mo.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){var t;void 0!==this._defaultOptions&&(s=h(h({},
this._defaultOptions),s));const a=e||void 0,u=new wo.default.URL(o);let c;const l=null!=(
e=null===u||void 0===u?void 0:u.protocol)?e:"";if("unix:"===l||"socket:"===l){if("/"===(
e=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/"))throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(t=await this._findSocketFile(e)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);e=""+(t.length<e.length?e.substr(t.length):"")+(
"?"!==u.search?u.search:""),s=h(h({},s),{},{socketPath:t,path:e}),o="",c=this._http
}else c="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var e,i;o&&(s=h(h({},s),{},{hostname:u.hostname,port:null!=(
i=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)?i:"https:"===l?443:80,path:u.pathname+u.search})),(
e=c.request(s,e=>{n?D.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(D.warn("Warning! Request had already ended when the response was received."),D.debug("Error from event: "
,e)):(D.debug("Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(D.warn(
"Warning! Request had already ended when the response was received."),D.debug("Exception: ",e)):(D.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _jsonRequest(e,t,r,n){return n=n?JSON.stringify(n):void 0,
r=await this._httpRequest(t,r,n),n=await vs.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(
e=null==r?void 0:r.statusCode)?e:0,headers:r.headers,body:n}}async _getJson(e,t,r){let n={method:"GET",headers:{
"Content-Type":vo.JSON}};return t&&(n=h(h({},n),{},{headers:h(h({},n.headers),t)})),this._jsonRequest(i.GET,e,n,r).then(
j._successJsonResponse)}async _putJson(e,t,r){let n={method:"PUT",headers:{"Content-Type":vo.JSON}};return t&&(n=h(h({},
n),{},{headers:h(h({},n.headers),t)})),this._jsonRequest(i.PUT,e,n,r).then(j._successJsonResponse)}async _postJson(e,t,r
){let n={method:"POST",headers:{"Content-Type":vo.JSON}};return t&&(n=h(h({},n),{},{headers:h(h({},n.headers),t)})),
this._jsonRequest(i.POST,e,n,r).then(j._successJsonResponse)}async _patchJson(e,t,r){let n={method:"PATCH",headers:{
"Content-Type":vo.JSON}};return t&&(n=h(h({},n),{},{headers:h(h({},n.headers),t)})),this._jsonRequest(i.PATCH,e,n,r
).then(j._successJsonResponse)}async _deleteJson(e,t,r){let n={method:"DELETE",headers:{"Content-Type":vo.JSON}};
return t&&(n=h(h({},n),{},{headers:h(h({},n.headers),t)})),this._jsonRequest(i.DELETE,e,n,r).then(j._successJsonResponse
)}static async _successJsonResponse(e){var t,r=null==e?void 0:e.statusCode;if(r<200||400<=r)throw D.error(
`Unsuccessful response with status ${r}: `,e),t=j._stringifyErrorBodyJson(null==e?void 0:e.body),new gs(r,r+(
t?` "${t}"`:"")+` for ${oe(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}const Ts=P.createLogger(
"initializeHgNode"),ys=(rs.initEnvFromDefaultFiles(),P.setLogLevel(v),rs.setLogLevel(v),P.setLogLevel(v),rs.setLogLevel(
v),j.setLogLevel(L.INFO<=v?L.NONE:v),P.createLogger("main")),bs=null!=(r=Z(null==(R=process)||null==(e=R.env
)?void 0:e.OPENAI_API_KEY))?r:"";process.env.OPENAI_API_KEY="",async function(e=[]){var t,r,n;try{(class{
static setLogLevel(e){Ts.setLogLevel(e)}static initialize(e){var t,r;e||(t=require("http"),r=require("https"),e=new j(t,
r)),ss.setClient(e)}}).initialize(),us.setLogLevel(L.INFO),ss.setLogLevel(L.INFO),ys.debug(
"Loglevel as "+P.getLogLevelString());var{scriptName:i,parseStatus:o,exitStatus:s,errorString:a,freeArgs:u}=class{
static parseArguments(e,t=[]){var r,n,i,o,s,a=null!=(r=t.shift())?r:"",u=null!=(r=t.shift())?r:"";if(!u)return{
parseStatus:1,exitStatus:d.ARGUMENT_PARSE_ERROR,nodePath:a,scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length
)return{parseStatus:1,exitStatus:d.ARGUMENT_PARSE_ERROR,nodePath:a,scriptName:u,freeArgs:[],extraArgs:[]};let c=!0;i=[],
o=[];do{if(s=null!=(n=t.shift())?n:"",c)switch(function(){switch(s){case"-h":case"--help":case 0:return 0;case"-v":
case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:2,exitStatus:d.OK,nodePath:a,
scriptName:u,freeArgs:i,extraArgs:o};case 1:return{parseStatus:3,exitStatus:d.OK,nodePath:a,scriptName:u,freeArgs:i,
extraArgs:o};case 2:c=!1;break;default:if(c){if(Ri(s,"-"))return{errorString:"Unknown argument: "+s,parseStatus:1,
exitStatus:d.UNKNOWN_ARGUMENT,nodePath:a,scriptName:u,freeArgs:i,extraArgs:o};i.push(s)}else o.push(s)}}while(
1<=t.length);return{parseStatus:0,exitStatus:d.OK,nodePath:a,scriptName:u,freeArgs:i,extraArgs:o}}}.parseArguments(is,e)
return 2===o||3===o?(console.log(Ne(i)),s):a?(console.error("ERROR: "+a),s):(rs.setupDestroyHandler(()=>{ys.debug(
"Stopping command from process utils event")},e=>{ys.error("Error while shutting down the service: ",e)}),t=new _s(bs),
r=new hs(t),(n=await new cs(r).main(u))===d.USAGE?(console.log(Ne(i)),d.USAGE):n)}catch(e){return ys.error(
"Fatal error: ",e),d.FATAL_ERROR}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),
process.exit(1)});
