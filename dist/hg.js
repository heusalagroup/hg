#!/usr/bin/env node
"use strict";function j(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function d(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?j(
Object(r),!0).forEach(function(e){o(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function o(e,t,r){var n;(t="symbol"==typeof(n=function(e){var t;if(
"object"!=typeof e||null===e)return e;if(void 0===(t=e[Symbol.toPrimitive]))return String(e);if("object"!=typeof(
t=t.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(t))?n:String(n)
)in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function I(e){
return e&&"object"==typeof e&&"default"in e?e:{default:e}}function k(r){var n;return r&&r.__esModule?r:(n=Object.create(
null),r&&Object.keys(r).forEach(function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),
Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n))}
function F(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function M(e){var t,
r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function G(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function $(e){e=this.__data__=new lr(e),
this.size=e.size}function z(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new cr;++t<r;)this.add(e[t])}function V(n
,i){function o(){var e=arguments,t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),
o.cache=r.set(t,e)||r,e)}if("function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(
"Expected a function");return o.cache=new(V.Cache||hn),o}function J(e,t){return li(e,t)}function H(e){return"not "+e}
function B(e){return e.join(" or ")}function W(e){return e===L}function Q(e){return c(e)?e:J(e,e=>W(e))?L:Yn(e,e=>!W(e
)&&!!e).join(", ")}function u(e,t){return W(t=Q(t))?L:`property "${e}" `+t}function K(e){return void 0===e}function c(e
){return Be(e)}function X(e){return c(e)?L:"not string"}function Y(e){return K(e)||c(e)}function Z(e){if(
void 0!==e&&""!==e)return""+e}function ee(e){if(void 0!==e&&""!==e)return hi(e)?e:["true","t","on","1","enabled"
].includes((""+e).toLowerCase())}function te(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Z(e)}function h(e){
return Ui(e)}function re(e){return h(e)?L:"not number"}function ne(e){return K(e)||h(e)}function ie(e){return K(e)||Ii(e
)||h(e)}function oe(e){return ie(e)?L:H(B(["number","null","undefined"]))}function se(e){return qi(e)}function ae(e){if(
h(e))switch(e){case i.OPTIONS:return"options";case i.GET:return"get";case i.POST:return"post";case i.PUT:return"put";
case i.DELETE:return"delete";case i.PATCH:return"patch";case i.TRACE:return"trace";case i.HEAD:return"head"}
throw new TypeError("Unsupported value for stringifyRequestMethod(): "+e)}function ue(e){return zo(e)}function le(e,
t=void 0,r=void 0,n=void 0){var i;return!(!zo(e)||(i=null!=(i=null==e?void 0:e.length)?i:0,void 0!==r&&i<r
)||void 0!==n&&n<i)&&(void 0===t||J(e,t))}function ce(e,t,r,n=void 0,i=void 0,o=void 0){return le(r,n,i,o)?L:!ue(r)||(
null==r?void 0:r.length)<1?H(e):H(e)+": "+Q(Ki(r,e=>t(e)))}function de(e,t=c,r=void 0){var n;return!!(void 0===r||vt(n=e
)&&J(eo(n),r))&&(n=void 0!==t?t:c,vt(r=e))&&J(pe(r),n)}function he(e){return vt(e)}function pe(e,t=c){var r;return ue(e
)?(r=Ki(e,(e,t)=>t),Yn(r,e=>t(e))):he(e)?(r=Reflect.ownKeys(e),Yn(r,e=>t(e))):[]}function fe(e,t,r,n){var i,o,s,a,u;
switch(t){case"b":if(s=e,void 0!==(o=ee(a=n)))return o;throw new TypeError(`Argument ${s}: Not a boolean: `+(hi(a
)?L:"not boolean"));case"s":if(i=n,void 0!==(o=function(){if(void 0!==i)return""+i}()))return o;throw new TypeError(
`Argument ${e}: Not a string: `+X(i));case"n":if(s=e,a=n,void 0!==(o=parseFloat(a)))return o;throw new TypeError(
`Argument ${s}: Not a number: `+a);case"i":if(o=e,void 0!==(a=void 0===(u=s=n)||!se(u)&&(c(u)&&0===(u=ze(u)
).length||!se(u=ji(u)))?void 0:u))return a;throw new TypeError(`Argument ${o}: Not integer: `+(Ni(s)?L:"not integer"));
default:throw new TypeError("Unimplemented type: "+t)}}function _e(e,t){return fe(e,t,0,"b"===t?"true":"")}function ve(
...e){return t=>wo(e,e=>e(t))}function ge(e){return!!vt(e)&&!(e instanceof Date||yt(e)||ue(e))&&de(e,c,void 0)}
function Ee(e){return ge(e)?L:"not regular object"}function ye(e){return c(t=e)||h(t)||hi(t)||Ii(t)||Te(e)||ge(t=e)&&de(
t,c,ve(ye,K));var t}function Te(e){return le(e,ve(ye,K))}function be(e,t){return he(e)&&0===(r=t,Yn(pe(e),
e=>!r.includes(e)).length);var r}function Re(e,t){return!ws||be(e,t)}function Oe(e,t){return be(e,t
)?L:"Value had extra properties: "+Yn(pe(e),e=>!t.includes(e))}function me(e,t){return Re(e,t
)?L:"Value had extra properties: "+Yn(pe(e),e=>!t.includes(e))}function Ae(e){switch(e){case l.DAVINCI:
case l.DAVINCI_EDIT_TEXT:case l.DAVINCI_EDIT_CODE:case l.CURIE:case l.BABBAGE:case l.ADA:case l.CONTENT_FILTER:
case l.CODEX:return 1;default:return}}function we(e){return ge(e)&&be(e,["text","index","logprobs","finish_reason"])&&c(
null==e?void 0:e.text)&&h(null==e?void 0:e.index)&&ie(null==e?void 0:e.logprobs)&&c(null==e?void 0:e.finish_reason)}
function Se(e){return Q([Ee(e),Oe(e,["text","index","logprobs","finish_reason"]),u("text",X(null==e?void 0:e.text)),u(
"index",re(null==e?void 0:e.index)),u("logprobs",oe(null==e?void 0:e.logprobs)),u("finish_reason",X(
null==e?void 0:e.finish_reason))])}function Ne(e){return ge(e)&&be(e,["text","index","logprobs","finish_reason"])&&c(
null==e?void 0:e.text)&&h(null==e?void 0:e.index)&&ie(null==e?void 0:e.logprobs)&&Y(null==e?void 0:e.finish_reason)}
function Pe(e){return Q([Ee(e),Oe(e,["text","index","logprobs","finish_reason"]),u("text",X(null==e?void 0:e.text)),u(
"index",re(null==e?void 0:e.index)),u("logprobs",oe(null==e?void 0:e.logprobs)),u("finish_reason",Y(
null==e?void 0:e.finish_reason)?L:H(B(["string","undefined"])))])}function qe(e){return e&&e instanceof Us}function Ce(e
){return ge(e)&&Re(e,["error","code"])&&c(null==e?void 0:e.error)&&ne(null==e?void 0:e.code)}function Le(e){
return ys?`USAGE: ${e} [OPT(s)] ARG(1) [...ARG(N)]

  Heusala Group CLI tool.
  
...and OPT is one of:

    -h --help                Print help
    -v --version             Print version
    --                       Disables option parsing

...and 'hg ai' options are:

    -m --model=NAME             OpenAI Model to use
    -i --suffix=STR             Text that comes after completion of inserted text
    -s --stop=STR               Up to 4 sequences where the API will stop
    -u --user=STR               Unique identifier representing your end-user
    -l --logprobs=INT           Include the log probabilities
    -b --best-of=INT            Amount of completions to generate server-side
    -r --presence-penalty=NUM   Presence penalty between -2.0 and 2.0
    -f --frequency-penalty=NUM  Frequency penalty between -2.0 and 2.0
    -e --echo[=false]           Echo back the prompt in addition
    -n --n=INT                  How many completions to generate for each prompt
    -p --top-p=NUM              Alternative sampling temperature
    -t --temperature=NUM        Sampling temperature
    -x --max-tokens=INT         Maximum number of tokens to generate

...and ARG is one of:

  Environment variables:

    LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`:`USAGE: ${e} ARG(1) [...ARG(N)]
See https://hg.fi
`}function Ue(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function xe(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Wo&&Wo in Object(e)?function(e){var t,r,n=Vo.call(e,Ho),
i=e[Ho];try{t=!(e[Ho]=void 0)}catch(e){}return r=Jo.call(e),t&&(n?e[Ho]=i:delete e[Ho]),r}:function(e){return Bo.call(e)
})(e)}function De(e){return null!=e&&"object"==typeof e}function je(e){return"symbol"==typeof e||Ko(e
)&&"[object Symbol]"==Qo(e)}function Ie(e){var t;return"string"==typeof e?e:Yo(e)?Xo(e,Ie)+"":Zo(e)?es?es.call(e
):"":"0"==(t=e+"")&&1/e==-1/0?"-0":t}function ke(e){return e&&e.slice(0,function(e){for(var t=e.length;t--&&ts.test(
e.charAt(t)););return t}(e)+1).replace(rs,"")}function Fe(e){return e!=e}function Me(e,t,r){var n,i,o,s,a,u,l,c;if(t==t
){for(i=t,o=r-1,s=(n=e).length;++o<s;)if(n[o]===i)return o}else for(u=Fe,l=(a=e).length,c=r+-1;++c<l;)if(u(a[c],c,a)
)return c;return-1}function Ge(e){return null==e?"":hs(e)}function $e(e){return(cs(e)?ds:ls)(e)}function ze(e,t,r){
return(e=_s(e))&&(r||void 0===t)?fs(e):e&&(t=ps(t))?function(e,t,r){var n,i,o,s,a,u=e.length;if(!t&&u<=r)return e;for(
s=-1,(u=(a=(i=e).length)<(u=r)?a:u)<0&&(u+=a),a=u<(o=t<0?a<-t?0:a+t:t)?0:u-o>>>0,o>>>=0,n=Array(a);++s<a;)n[s]=i[s+o];
return n}(r=$e(e),function(e,t){for(var r=-1,n=e.length;++r<n&&-1<is(t,e[r],0););return r}(r,t=$e(t)),function(e,t){for(
var r=e.length;r--&&-1<ns(t,e[r],0););return r}(r,t)+1).join(""):e}var Ve,Je,He,Be,We,Qe,Ke,Xe,Ye,Ze,et,tt,rt,nt,t,it,ot
,st,at,ut,lt,ct,dt,ht,pt,ft,_t,vt,gt,Et,yt,Tt,bt,Rt,Ot,mt,At,wt,St,Nt,Pt,qt,Ct,Lt,Ut,xt,Dt,jt,It,kt,Ft,Mt,Gt,$t,zt,Vt,Jt
,Ht,Bt,Wt,Qt,Kt,Xt,Yt,Zt,er,tr,rr,nr,ir,or,sr,ar,ur,lr,cr,dr,hr,pr,fr,_r,vr,gr,Er,yr,Tr,br,Rr,Or,mr,Ar,wr,Sr,Nr,Pr,qr,Cr
,Lr,Ur,xr,Dr,jr,Ir,kr,Fr,Mr,Gr,$r,zr,Vr,Jr,Hr,Br,Wr,Qr,Kr,Xr,Yr,Zr,en,tn,rn,nn,on,sn,an,un,ln,cn,dn,e,hn,pn,fn,_n,vn,gn,
En,yn,Tn,bn,Rn,On,mn,An,wn,Sn,Nn,r,Pn,qn,Cn,Ln,Un,xn,Dn,jn,In,kn,Fn,Mn,Gn,$n,zn,Vn,Jn,Hn,Bn,Wn,Qn,Kn,Xn,Yn,Zn,ei,ti,ri,
ni,ii,oi,si,ai,ui,li,ci,di,hi,pi,fi,_i,vi,gi,Ei,yi,Ti,bi,Ri,Oi,mi,Ai,wi,Si,Ni,Pi,qi,Ci,Li,Ui,xi,Di,ji,Ii,T,i,ki,Fi,Mi,Gi
,$i,zi,Vi,Ji,Hi,Bi,Wi,Qi,Ki,Xi,Yi,Zi,eo,to,ro,no,io,oo,so,ao,uo,lo,co,ho,po,fo,_o,vo,go,Eo,yo,To,bo,Ro,Oo,mo,Ao,wo,n,So,
No,l,s,Po,qo,Co,Lo,Uo,a,p,xo,f,_,v,g,E,y,Do,jo,Io,ko=require("fs"),b=require("path"),R=require("url"),O=require(
"querystring"),Fo=I(ko),Mo=I(b),Go=I(R),$o=k(O),R="object"==typeof(
b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
)&&b&&b.Object===Object&&b,O="object"==typeof self&&self&&self.Object===Object&&self,O=(b=R||O||Function("return this")(
)).Symbol,zo=Array.isArray,m=Object.prototype,Vo=m.hasOwnProperty,Jo=m.toString,Ho=O?O.toStringTag:void 0,
Bo=Object.prototype.toString,Wo=O?O.toStringTag:void 0,Qo=xe,Ko=De,Xo=Ue,Yo=zo,Zo=je,es=(m=O?O.prototype:void 0
)?m.toString:void 0,ts=/\s/,rs=/^\s+/,ns=Me,is=Me,os=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),ss="["+(m="\\ud800-\\udfff")+"]",
A="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",as="\\ud83c[\\udffb-\\udfff]",w="(?:\\ud83c[\\udde6-\\uddff]){2}",
S="[\\ud800-\\udbff][\\udc00-\\udfff]",N=(N="[\\ufe0e\\ufe0f]?")+(
P="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?")+"(?:\\u200d(?:"+[m="[^"+m+"]",w,S
].join("|")+")"+N+P+")*",P="(?:"+[m+A+"?",A,w,S,ss].join("|")+")",us=RegExp(as+"(?="+as+")|"+P+N,"g"),ls=function(e){
return e.split("")},cs=function(e){return os.test(e)},ds=function(e){return e.match(us)||[]},hs=Ie,ps=Ie,fs=ke,_s=Ge,q={
DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"};class vs{constructor(e,t){o(this,
"_logger",void 0),o(this,"name",void 0),o(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}
getLogLevel(){var e;return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}
debug(...e){(void 0===this._level||this._level<=q.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=q.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=q.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=q.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class C{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case q.DEBUG:return"DEBUG";case q.INFO:return"INFO";case q.WARN:return"WARN";case q.ERROR:return"ERROR";
case q.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=q.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=q.INFO&&this._logger.info(...e)}static warn(...e){this._level<=q.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=q.ERROR&&this._logger.error(...e)}static createLogger(e){return new vs(e,C)}}o(C,
"Level",q),o(C,"_level",q.DEBUG),o(C,"_logger",console);const gs=C.createLogger("ProcessUtils");class Es{
static setLogLevel(e){gs.setLogLevel(e)}static getArguments(){return process.argv.slice(2)}static parseEnvFileLine(e,t){
var r;return t.indexOf("=")<0?t.length&&(e[t]=""):(r=ze((t=t.split("=")).shift())).length&&(e[r]=t.join("=").trim()),e}
static parseEnvFile(e){return Fo.default.readFileSync(e,{encoding:"utf-8"}).split("\n").reduce(Es.parseEnvFileLine,{})}
static initEnvFromFile(e){e=Es.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=Mo.default.join(process.cwd(),".env");Fo.default.existsSync(e)&&Es.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let i=!1;var e=t=>e=>{Es._printErrors(t,e);try{i||(i=!0,r())}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{
"exit"===e?t?gs.debug(`DEBUG: Closing process because "${e}" event: `,t):gs.debug(
`DEBUG: Closing process because "${e}" event`):t?gs.error(`ERROR: Closing process because "${e}" event: `,t):gs.info(
`INFO: Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}Je=zo,
Be=function(e){return"string"==typeof e||!Je(e)&&He(e)&&"[object String]"==Ve(e)},m=function(e,t){for(var r,n=-1,
i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e)&&(s[o++]=r);return s},A=function(e,t,r){for(var n,i=-1,o=Object(e),
s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},w=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},We=Ve=xe,S=function(e){return Qe(e)&&"[object Arguments]"==We(e)},Ke=Qe=He=De,ss=Object.prototype,
Xe=ss.hasOwnProperty,Ye=ss.propertyIsEnumerable,as=S(function(){return arguments}())?S:function(e){return Ke(e
)&&Xe.call(e,"callee")&&!Ye.call(e,"callee")},Ze={},P={get exports(){return Ze},set exports(e){Ze=e}},S=(N=(S=(ss=(N=Ze
)&&!N.nodeType&&N)&&P&&!P.nodeType&&P)&&S.exports===ss?b.Buffer:void 0)?N.isBuffer:void 0,P.exports=S||function(){
return!1},et=/^(?:0|[1-9]\d*)$/,ss=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&et.test(e))&&-1<e&&e%1==0&&e<t},tt=xe,rt=N=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},nt=De,(t={})["[object Float32Array]"]=t[
"[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t[
"[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0,t[
"[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t[
"[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"
]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1,P=function(e){return nt(e)&&rt(
e.length)&&!!t[tt(e)]},S=function(t){return function(e){return t(e)}},it={},Co={get exports(){return it},set exports(e){
it=e}},a=(a=it)&&!a.nodeType&&a,Lo=a&&Co&&!Co.nodeType&&Co,Uo=Lo&&Lo.exports===a&&R.process,a=function(){try{
return Lo&&Lo.require&&Lo.require("util").types||Uo&&Uo.binding&&Uo.binding("util")}catch(e){}}(),Co.exports=a,Co=(
R=it&&it.isTypedArray)?S(R):P,ot=w,st=as,at=zo,ut=Ze,lt=ss,ct=a=Co,S=Object.prototype,dt=S.hasOwnProperty,
ht=Object.prototype,jo=Object.keys,Io=Object,pt=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||ht)},ft=function(e){return jo(Io(e))},R=Object.prototype,_t=R.hasOwnProperty,gt=xe,
Et=vt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Tt=yt=function(e){return!!Et(e)&&(
"[object Function]"==(e=gt(e))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},bt=N
,Rt=function(e,t){var r,n=at(e),i=!n&&st(e),o=!n&&!i&&ut(e),s=!n&&!i&&!o&&ct(e),a=n||i||o||s,u=a?ot(e.length,String):[],
l=u.length;for(r in e)!t&&!dt.call(e,r)||a&&("length"==r||o&&("offset"==r||"parent"==r)||s&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||lt(r,l))||u.push(r);return u},Ot=function(e){var t,r;if(!pt(e)
)return ft(e);for(r in t=[],Object(e))_t.call(e,r)&&"constructor"!=r&&t.push(r);return t},At=A,wt=P=function(e){return(
mt(e)?Rt:Ot)(e)},St=mt=w=function(e){return null!=e&&bt(e.length)&&!Tt(e)},Nt=Co=function(e,t){var r,n,i;if(null!=e){if(
!St(e))return e&&At(e,t,wt);for(r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););}return e},S=function(e,n){var i=[
];return Nt(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Pt=R=function(e,t){return e===t||e!=e&&t!=t},qt=A=function(e,t){
for(var r=e.length;r--;)if(Pt(e[r][0],t))return r;return-1},br=Array.prototype,Ct=br.splice,xt=Ut=Lt=A,br=function(e){
var t=this.__data__;return!((e=qt(t,e))<0||(e==t.length-1?t.pop():Ct.call(t,e,1),--this.size,0))},A=function(e){
var t=this.__data__;return(e=Lt(t,e))<0?void 0:t[e][1]},xo=function(e){return-1<Ut(this.__data__,e)},f=function(e,t){
var r=this.__data__,n=xt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},F.prototype.clear=function(){
this.__data__=[],this.size=0},F.prototype.delete=br,F.prototype.get=A,F.prototype.has=xo,F.prototype.set=f,Dt=br=F,
A=function(){this.__data__=new Dt,this.size=0},xo=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,
e},f=function(e){return this.__data__.get(e)},dr=function(e){return this.__data__.has(e)},p=b["__core-js_shared__"],
p=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||""),jt=p?"Symbol(src)_1."+p:"",p=Function.prototype,It=p.toString,kt=yt,
Ft=function(e){return!!jt&&jt in e},Mt=vt,Gt=p=function(e){if(null!=e){try{return It.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},y=/[\\^$.*+?()[\]{}|]/g,$t=/^\[object .+?Constructor\]$/,e=Function.prototype,g=Object.prototype,
e=e.toString,g=g.hasOwnProperty,zt=RegExp("^"+e.call(g).replace(y,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Vt=function(e){return!(!Mt(e)||Ft(e))&&(kt(e
)?zt:$t).test(Gt(e))},Jt=function(e,t){return null==e?void 0:e[t]},g=(e=function(e,t){return e=Jt(e,t),Vt(e)?e:void 0})(
b,"Map"),y=e(Object,"create"),Bt=Ht=y,_=Object.prototype,Wt=_.hasOwnProperty,Qt=y,_=Object.prototype,Kt=_.hasOwnProperty
,Xt=y,_=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},y=function(e){var t,
r=this.__data__;return Bt?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:Wt.call(r,e)?r[e]:void 0},E=function(e){
var t=this.__data__;return Qt?void 0!==t[e]:Kt.call(t,e)},r=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=Xt&&void 0===t?"__lodash_hash_undefined__":t,this},M.prototype.clear=function(){
this.__data__=Ht?Ht(null):{},this.size=0},M.prototype.delete=_,M.prototype.get=y,M.prototype.has=E,M.prototype.set=r,
Yt=M,Zt=br,er=g,tr=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},or=ir=nr=rr=function(e,t){
return e=e.__data__,tr(t)?e["string"==typeof t?"string":"hash"]:e.map},_=function(e){return e=rr(this,e).delete(e),
this.size-=e?1:0,e},y=function(e){return nr(this,e).get(e)},E=function(e){return ir(this,e).has(e)},r=function(e,t){
var r=or(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},G.prototype.clear=function(){this.size=0,
this.__data__={hash:new Yt,map:new(er||Zt),string:new Yt}},G.prototype.delete=_,G.prototype.get=y,G.prototype.has=E,
G.prototype.set=r,ar=g,ur=_=G,lr=sr=br,y=xo,E=f,r=dr,br=function(e,t){var r,n=this.__data__;if(n instanceof sr){if(
r=n.__data__,!ar||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ur(r)}return n.set(e,t),
this.size=n.size,this},$.prototype.clear=A,$.prototype.delete=y,$.prototype.get=E,$.prototype.has=r,$.prototype.set=br,
xo=$,cr=_,f=function(e){return this.__data__.has(e)},z.prototype.add=z.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},z.prototype.has=f,hr=z,pr=dr=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},fr=function(e,t){return e.has(t)},A=b.Uint8Array,_r=A,vr=R
,gr=y=function(e,t,r,n,i,o){var s,a,u,l,c,d,h,p=1&r,f=e.length,_=t.length;if(f!=_&&!(p&&f<_))return!1;if(_=o.get(e),
s=o.get(t),_&&s)return _==t&&s==e;for(a=-1,u=!0,l=2&r?new hr:void 0,o.set(e,t),o.set(t,e);++a<f;){if(c=e[a],d=t[a],
void 0!==(h=n?p?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;u=!1;break}if(l){if(!pr(t,function(e,t){if(!fr(l,t)&&(
c===e||i(c,e,r,n,o)))return l.push(t)})){u=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){u=!1;break}}return o.delete(e),
o.delete(t),u},Er=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},yr=function(e){
var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},E=O?O.prototype:void 0,Tr=E?E.valueOf:void 0,
r=function(e,t,r,n,i,o,s){var a,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new _r(e),new _r(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return vr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":a=Er;case"[object Set]":return a=a||yr,!!(
e.size==t.size||1&n)&&((u=s.get(e))?u==t:(n|=2,s.set(e,t),u=gr(a(e),a(t),n,i,o,s),s.delete(e),u));case"[object Symbol]":
if(Tr)return Tr.call(e)==Tr.call(t)}return!1},Rr=br=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},Or=zo,mr=m,f=Object.prototype,Ar=f.propertyIsEnumerable,wr=Object.getOwnPropertySymbols,Sr=function(e,t,r){
return t=t(e),Or(e)?t:Rr(t,r(e))},Nr=wr?function(t){return null==t?[]:(t=Object(t),mr(wr(t),function(e){return Ar.call(t
,e)}))}:function(){return[]},Pr=P,qr=function(e){return Sr(e,Pr,Nr)},A=Object.prototype,Cr=A.hasOwnProperty,E=function(e
,t,r,n,i,o){var s,a,u,l,c,d,h,p,f,_=1&r,v=qr(e),g=v.length;if(g!=qr(t).length&&!_)return!1;for(s=g;s--;)if(a=v[s],!(
_?a in t:Cr.call(t,a)))return!1;if(p=o.get(e),f=o.get(t),p&&f)return p==t&&f==e;for(u=!0,o.set(e,t),o.set(t,e),
l=_;++s<g;){if(c=e[a=v[s]],d=t[a],!(void 0===(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){u=!1;break}
l=l||"constructor"==a}return u&&!l&&(p=e.constructor)!=(f=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof f&&f instanceof f)&&(u=!1),o.delete(e),o.delete(t),u},f=e(b,
"DataView"),A=g,g=e(b,"Promise"),v=e(b,"Set"),e=e(b,"WeakMap"),Lr=xe,xr=(Ur=p)(b=f),Dr=Ur(A),jr=Ur(g),Ir=Ur(v),kr=Ur(e),
p=Lr,(b&&"[object DataView]"!=p(new b(new ArrayBuffer(1)))||A&&"[object Map]"!=p(new A)||g&&"[object Promise]"!=p(
g.resolve())||v&&"[object Set]"!=p(new v)||e&&"[object WeakMap]"!=p(new e))&&(p=function(e){var t=Lr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?Ur(e):"")switch(e){case xr:return"[object DataView]";case Dr:
return"[object Map]";case jr:return"[object Promise]";case Ir:return"[object Set]";case kr:return"[object WeakMap]"}
return t}),Fr=xo,Mr=y,Gr=r,$r=E,zr=p,Vr=zo,Jr=Ze,Hr=a,Br="[object Arguments]",Wr="[object Array]",Qr="[object Object]",
f=Object.prototype,Kr=f.hasOwnProperty,Xr=function(e,t,r,n,i,o){var s=Vr(e),a=Vr(t),u=s?Wr:zr(e),a=a?Wr:zr(t),l=(
u=u==Br?Qr:u)==Qr,c=(a=a==Br?Qr:a)==Qr;if((a=u==a)&&Jr(e)){if(!Jr(t))return!1;l=!(s=!0)}return a&&!l?(o=o||new Fr,s||Hr(
e)?Mr(e,t,r,n,i,o):Gr(e,t,u,r,n,i,o)):1&r||(s=l&&Kr.call(e,"__wrapped__"),u=c&&Kr.call(t,"__wrapped__"),!s&&!u)?a&&(
o=o||new Fr,$r(e,t,r,n,i,o)):i(s?e.value():e,u?t.value():t,r,n,o=o||new Fr)},Yr=De,Zr=xo,en=b=function e(t,r,n,i,o){
return t===r||(null==t||null==r||!Yr(t)&&!Yr(r)?t!=t&&r!=r:Xr(t,r,n,i,e,o))},tn=vt,rn=A=function(e){return e==e&&!tn(e)}
,nn=P,on=function(e,t,r,n){var i,o,s,a,u,l,c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2
]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e)
)return!1}else if(u=new Zr,!(void 0===(l=n?n(s,a,o,e,t,u):l)?en(a,s,3,n,u):l))return!1;return!0},sn=function(e){for(
var t,r,n=nn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,rn(r)];return n},an=g=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},v=function(t){var r=sn(t);return 1==r.length&&r[0][2]?an(r[0][0
],r[0][1]):function(e){return e===t||on(e,t,r)}},un=zo,ln=je,cn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
dn=/^\w*$/,e=function(e,t){var r;return!un(e)&&(!("number"!=(r=typeof e)&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ln(e)
)||dn.test(e)||!cn.test(e)||null!=t&&e in Object(t))},hn=_,V.Cache=hn,
pn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fn=/\\(\\)?/g,Do=(
y=V(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(pn,function(e,t,r,n){i.push(r?n.replace(fn,
"$1"):t||e)}),i},function(e){return 500===Do.size&&Do.clear(),e})).cache,gn=y,En=Ge,yn=je,On=Tn=function(e,t){return _n(
e)?e:vn(e,t)?[e]:gn(En(e))},mn=as,Sn=N,Pn=function(e,t){return null!=e&&t in Object(e)},qn=r=function(e,t,r){for(var n,i
,o=(t=On(t,e)).length,s=!(n=-1);++n<o&&(i=Nn(t[n]),s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length
)&&Sn(o)&&wn(i,o)&&(An(e)||mn(e))},Cn=b,Ln=function(e,t,r){return void 0===(e=null==e?void 0:Rn(e,t))?r:e},Un=function(e
,t){return null!=e&&qn(e,t,Pn)},Dn=A,jn=g,kn=Rn=function(e,t){for(var r=0,n=(t=Tn(t,e)).length;null!=e&&r<n;)e=e[bn(t[
r++])];return r&&r==n?e:void 0},Fn=function(t){return function(e){return null==e?void 0:e[t]}},Mn=function(t){
return function(e){return kn(e,t)}},Gn=xn=vn=e,$n=In=Nn=bn=function(e){var t;return"string"==typeof e||yn(e)?e:"0"==(
t=e+"")&&1/e==-1/0?"-0":t},zn=v,Vn=function(r,n){return xn(r)&&Dn(n)?jn(In(r),n):function(e){var t=Ln(e,r);
return void 0===t&&t===n?Un(e,r):Cn(n,t,3)}},Jn=E=function(e){return e},Bn=function(e){return Gn(e)?Fn($n(e)):Mn(e)},
Wn=m,Qn=S,Yn=function(e,t){return(Xn(e)?Wn:Qn)(e,Kn(t))},Zn=Co,ei=R,ti=w,ri=wn=ss,ni=vt,ii=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},oi=function(e,n){var i=!0;return Zn(e,function(e,t,r){
return i=!!n(e,t,r)}),i},si=Kn=p=function(e){return"function"==typeof e?e:null==e?Jn:"object"==typeof e?Hn(e)?Vn(e[0],e[
1]):zn(e):Bn(e)},ai=Xn=Hn=An=_n=zo,ui=a=function(e,t,r){var n;return!!ni(r)&&!!("number"==(n=typeof t)?ti(r)&&ri(t,
r.length):"string"==n&&t in r)&&ei(r[t],e)},li=function(e,t,r){var n=ai(e)?ii:oi;return r&&ui(e,t,r)&&(t=void 0),n(e,si(
t))};const L="OK",ys=(ci=xe,di=De,hi=function(e){return!0===e||!1===e||di(e)&&"[object Boolean]"==ci(e)},xo=null!=(f=te(
""))?f:"hg-command",y=null!=(_=te(""))?_:"",null==(N=function(){if(!"".startsWith("%{")||!"".endsWith("}"))return ee("")
}())||N),Ts=(v=null!=(e=function(e){if(e){if(function(){switch(e){case q.DEBUG:case q.INFO:case q.WARN:case q.ERROR:
case q.NONE:return 1;default:return}}())return e;switch((""+e).toUpperCase()){case"ALL":case"DEBUG":return q.DEBUG;
case"INFO":return q.INFO;case"WARN":case"WARNING":return q.WARN;case"ERR":case"ERROR":return q.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return q.NONE;default:return}}}(null!=(g=Z(null==(b=process)||null==(
A=b.env)?void 0:A.LOG_LEVEL))?g:Z(y)))?e:q.INFO,null!=(R=Z(null==(m=process)||null==(S=m.env)?void 0:S.COMMAND_NAME)
)?R:xo),bs=(pi=ke,fi=vt,_i=je,vi=/^[-+]0x[0-9a-f]+$/i,gi=/^0b[01]+$/i,Ei=/^0o[0-7]+$/i,yi=parseInt,Ti=function(e){var t;
return"number"==typeof e?e:_i(e)?NaN:(fi(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=fi(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=pi(e),(t=gi.test(e))||Ei.test(e)?yi(e.slice(2),t?2:8):vi.test(e)?NaN:+e))},bi=function(
e){return e?(e=Ti(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},Oi=Ie,Ai=Ge,wi=function(e,t,r
){return e=Ai(e),r=null==r?0:Ri(mi(r),0,e.length),t=Oi(t),e.slice(r,r+t.length)==t},Pi=Ni=function(e){
return"number"==typeof e&&e==Si(e)},qi=function(e){return Pi(e)&&-9007199254740991<=e&&e<=9007199254740991},Ci=xe,Li=De,
Ui=function(e){return"number"==typeof e||Li(e)&&"[object Number]"==Ci(e)},xi=Ri=function(e,t,r){return e!=e||(
void 0!==r&&(e=e<=r?e:r),void 0===t)||t<=e?e:t},Di=Si=mi=ss=function(e){var t=(e=bi(e))%1;return e==e?t?e-t:e:0},
ji=function(e){return e?xi(Di(e),-9007199254740991,9007199254740991):0===e?e:0},Ii=function(e){return null===e},(f=T={}
)[f.OK=0]="OK",f[f.GENERAL_ERRORS=1]="GENERAL_ERRORS",f[f.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",f[
f.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",f[f.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",f[f.UNIMPLEMENTED_FEATURE=5
]="UNIMPLEMENTED_FEATURE",f[f.FATAL_ERROR=6]="FATAL_ERROR",f[f.CONFLICT=7]="CONFLICT",f[f.USAGE=64]="USAGE",f[
f.DATAERR=65]="DATAERR",f[f.NOINPUT=66]="NOINPUT",f[f.NOUSER=67]="NOUSER",f[f.NOHOST=68]="NOHOST",f[f.UNAVAILABLE=69
]="UNAVAILABLE",f[f.SOFTWARE=70]="SOFTWARE",f[f.OSERR=71]="OSERR",f[f.OSFILE=72]="OSFILE",f[f.CANTCREAT=73]="CANTCREAT",
f[f.IOERR=74]="IOERR",f[f.TEMPFAIL=75]="TEMPFAIL",f[f.PROTOCOL=76]="PROTOCOL",f[f.NOPERM=77]="NOPERM",f[f.CONFIG=78
]="CONFIG",f[f.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",f[f.COMMAND_NOT_FOUND=127
]="COMMAND_NOT_FOUND",f[f.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",f[f.FATAL_SIGNAL_RANGE_START=129
]="FATAL_SIGNAL_RANGE_START",f[f.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",f[f.EXIT_STATUS_OUT_OF_RANGE=255
]="EXIT_STATUS_OUT_OF_RANGE",(N=(_={}).HttpMethods||(_.HttpMethods={})).GET="get",N.PUT="put",N.POST="post",
N.DELETE="delete",N.OPTIONS="options",N.HEAD="head",N.PATCH="patch",N.TRACE="trace",(A=(b={}).HttpMethods||(
b.HttpMethods={})).GET="get",A.PUT="put",A.POST="post",A.DELETE="delete",A.OPTIONS="options",A.HEAD="head",
A.PATCH="patch",(g=i={})[g.OPTIONS=0]="OPTIONS",g[g.GET=1]="GET",g[g.POST=2]="POST",g[g.PUT=3]="PUT",g[g.DELETE=4
]="DELETE",g[g.PATCH=5]="PATCH",g[g.TRACE=6]="TRACE",g[g.HEAD=7]="HEAD",C.createLogger("RequestClient"));class Rs{
constructor(e){o(this,"_client",void 0),this._client=e}async textRequest(e,t,r,n){return this._client.textRequest(e,t,r,
n)}async getText(e,t){return this._client.textRequest(i.GET,e,t)}async postText(e,t,r){return bs.debug(".postJson: ",e,t
,r),this._client.textRequest(i.POST,e,r,t)}async patchText(e,t,r){return bs.debug(".patchJson: ",e,t,r),
this._client.textRequest(i.PATCH,e,r,t)}async putText(e,t,r){return bs.debug(".putJson: ",e,t,r),
this._client.textRequest(i.PUT,e,r,t)}async deleteText(e,t,r){return bs.debug(".deleteJson: ",e,r,t),
this._client.textRequest(i.DELETE,e,t,r)}async jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
async getJson(e,t){return this._client.jsonRequest(i.GET,e,t)}async postJson(e,t,r){return this._client.jsonRequest(
i.POST,e,r,t)}async patchJson(e,t,r){return this._client.jsonRequest(i.PATCH,e,r,t)}async putJson(e,t,r){
return this._client.jsonRequest(i.PUT,e,r,t)}async deleteJson(e,t,r){return this._client.jsonRequest(i.DELETE,e,t,r)}
static setLogLevel(e){bs.setLogLevel(e)}static setClient(e){this._client=new Rs(e)}static async textRequest(e,t,r,n){if(
this._client)return this._client.textRequest(e,t,r,n);throw this._createClientError()}static async getText(e,t){if(
this._client)return this._client.getText(e,t);throw this._createClientError()}static async postText(e,t,r){if(
this._client)return bs.debug(".postJson: ",e,t,r),this._client.postText(e,t,r);throw this._createClientError()}
static async patchText(e,t,r){if(this._client)return bs.debug(".patchJson: ",e,t,r),this._client.patchText(e,t,r);
throw this._createClientError()}static async putText(e,t,r){if(this._client)return this._client.putText(e,t,r);
throw this._createClientError()}static async deleteText(e,t,r){if(this._client)return this._client.deleteText(e,t,r);
throw this._createClientError()}static async jsonRequest(e,t,r,n){if(this._client)return this._client.jsonRequest(e,t,r,
n);throw this._createClientError()}static async getJson(e,t){if(this._client)return this._client.getJson(e,t);
throw this._createClientError()}static async postJson(e,t,r){if(this._client)return bs.debug(".postJson: ",e,t,r),
this._client.postJson(e,t,r);throw this._createClientError()}static async patchJson(e,t,r){if(this._client
)return this._client.patchJson(e,t,r);throw this._createClientError()}static async putJson(e,t,r){if(this._client
)return this._client.putJson(e,t,r);throw this._createClientError()}static async deleteJson(e,t,r){if(this._client
)return this._client.deleteJson(e,t,r);throw this._createClientError()}static _createClientError(){return new TypeError(
"RequestClient: You must initialize implementation first using HgFrontend.initialize() or HgNode.initialize()")}}o(Rs,
"_client",void 0),ki=E,Fi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},
Gi=function(e){return"function"==typeof e?e:ki},zi=function(e,t){return($i(e)?Fi:Mi)(e,Gi(t))},Vi=Mi=Co,Ji=w,Bi=p,
Wi=function(e,n){var i=-1,o=Ji(e)?Array(e.length):[];return Vi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Qi=$i=zo,
Ki=function(e,t){return(Qi(e)?Hi:Wi)(e,Bi(t))},Xi=Hi=Ue,Yi=function(t,e){return Xi(e,function(e){return t[e]})},Zi=P,
eo=function(e){return null==e?[]:Yi(e,Zi(e))},y=Object.prototype,to=y.hasOwnProperty,ro=function(e,t){
return null!=e&&to.call(e,t)},no=r,io=function(e,t){return null!=e&&no(e,t,ro)},oo=Me,so=ss,ao=Math.max,uo=function(e,t,
r){var n=null==e?0:e.length;return n?((r=null==r?0:so(r))<0&&(r=ao(n+r,0)),oo(e,t,r)):-1},lo=as,co=zo,
ho=O?O.isConcatSpreadable:void 0,fo=function(e){return co(e)||lo(e)||!!(ho&&e&&e[ho])},_o=po=br,vo=function e(t,r,n,i,o
){var s,a=-1,u=t.length;for(n=n||fo,o=o||[];++a<u;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):po(o,s):i||(o[o.length]=s);
return o},go=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},yo=function(){var e,t,r,
n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return _o(Eo(t)?go(t):[t]
,vo(e,1))},To=Co,bo=dr,Ro=p,Oo=function(e,n){var i;return To(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},mo=Eo=zo,Ao=a,
wo=function(e,t,r){var n=mo(e)?bo:Oo;return r&&Ao(e,t,r)&&(t=void 0),n(e,Ro(t))};const Os=C.createLogger("Headers");
class ms{static setLogLevel(e){Os.setLogLevel(e)}constructor(e){o(this,"_value",void 0),o(this,"_uninitializedValue",
void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){var t=this._value,r=this._uninitializedValue;
try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,this._uninitializedValue=r,e}}
clear(){this._value={},this._uninitializedValue=void 0}add(e,t){this._uninitializedValue&&this._initializeValue(),
Os.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&io(this._value,e)?this._value[e]:void 0;
void 0===this._value?this._value={[e]:t}:void 0!==r?Te(r)?this._value=d(d({},this._value),{},{[e]:yo([],r,[t])}
):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{[e]:t})}containsKey(e){
return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),io(this._value,e)}isEmpty(){
this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===pe(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=pe(this._value),
zi(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),io(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),Te(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),c(e)){const r=e;if(!ue(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");zi(t,e=>{this.add(r,e)})}else{const n=e;zi(pe(
n),t=>{var e=n[t];Te(e)?zi(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e),r=d({},this._value);
return r&&io(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),zi(pe(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;var e;return!r||this.isEmpty()?"Headers()":(e=pe(r
),`Headers(${Ki(e,e=>{const t=r[e];return t?ue(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(
", "):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e}).join("; ")})`)}clone(){
return this._uninitializedValue&&this._initializeValue(),new ms(this._value?d({},this._value):void 0)}}class As{
constructor(e){o(this,"_ai",void 0),this._ai=e}async main(e){var t;return 0===e.length?T.USAGE:([e,...t]=e,
"ai"===e?this._ai.main(t):(console.error("Unknown command: "+e),T.COMMAND_NOT_FOUND))}async ai(e){return this._ai.main(e
)}}const ws=!("production"===(m=null!=(e=function(e){if(void 0!==e&&!(!(e=""+e)||e.startsWith("%{")&&e.endsWith("}"))
)return e}("production"))?e:"development")||"test"===m);class Ss{constructor(e){o(this,"_client",void 0),o(this,"_model"
,void 0),o(this,"_echo",void 0),o(this,"_user",void 0),o(this,"_stop",void 0),o(this,"_logProbs",void 0),o(this,
"_bestOf",void 0),o(this,"_maxTokens",void 0),o(this,"_n",void 0),o(this,"_frequencyPenalty",void 0),o(this,
"_presencePenalty",void 0),o(this,"_topP",void 0),o(this,"_temperature",void 0),this._client=e}setModel(e){this._model=e
}setStop(e){this._stop=e}setUser(e){this._user=e}setLogProbs(e){this._logProbs=e}setBestOf(e){this._bestOf=e}
setPresencePenalty(e){this._presencePenalty=e}setFrequencyPenalty(e){this._frequencyPenalty=e}setEcho(e){this._echo=e}
setN(e){this._n=e}setTopP(e){this._topP=e}setTemperature(e){this._temperature=e}setMaxTokens(e){this._maxTokens=e}
async main(t){if(0===t.length)return T.USAGE;try{var[r,...e]=t;switch(r){case"c":case"comp":case"completion":
return await this.completion(e);case"e":case"edit":return await this.edit(e)}return console.error("Unknown command: "+r)
,T.COMMAND_NOT_FOUND}catch(e){if(!(ge(r=t=null==e?void 0:e.body)&&Re(r,["error"])&&ge(r=null==r?void 0:r.error)&&Re(r,[
"message","type"])&&c(null==r?void 0:r.message)&&c(null==r?void 0:r.type)))throw e;console.error(
`ERROR: [${t.error.type}] `+t.error.message)}}async edit(e){var t;return 0===e.length?T.USAGE:([e,...t]=e,t=Ki(t,
e=>ko.existsSync(e)?ko.readFileSync(e,{encoding:"utf8"}).toString():e).join("\n"),e=await this._client.getEdit(e,t,
this._model,this._n,this._temperature,this._topP),t=Ki(e.choices,e=>e.text).join("\n"),console.log(t),T.OK)}
async completion(e){var t;return 0===e.length?T.USAGE:([e,...t]=e,e=await this._client.getCompletion(e,this._model,
this._maxTokens,this._temperature,this._topP,this._frequencyPenalty,this._presencePenalty),e=Ki(e.choices,e=>e.text
).join("\n"),console.log(e),T.OK)}}const U=C.createLogger("HttpService");n={
REQUEST_STARTED:"HttpService:requestStarted",REQUEST_STOPPED:"HttpService:requestStopped"};class Ns{static setLogLevel(e
){U.setLogLevel(e),Rs.setLogLevel(e)}static setRequestLimit(e){this._requestLimit=e}static setBaseUrl(e){
this._baseApiUrl=e}static on(e,t){return this._observer.listenEvent(e,t)}static destroy(){this._observer.destroy()}
static hasOpenRequests(){return 1<=this._requestCount}static getRequestCount(){return this._requestCount}
static async waitUntilNoOpenRequests(){if(this.hasOpenRequests())return U.debug(
"waitUntilNoOpenRequests: Let's wait until no requests"),new Promise((t,r)=>{try{let e=this.on(n.REQUEST_STOPPED,()=>{
try{this.hasOpenRequests()?U.debug(`waitUntilNoOpenRequests: We still have ${this.getRequestCount()} requests`):(
U.debug("waitUntilNoOpenRequests: No requests anymore. We're ready!"),e(),e=void 0,t())}catch(e){U.debug(
"waitUntilNoOpenRequests: Canceling waiting: error: ",e),r(e)}})}catch(e){U.debug(
"waitUntilNoOpenRequests: Canceling waiting: error: ",e),r(e)}});U.debug("No open requests to wait")}
static async getJson(e,t){if(this._requestCount>=this._requestLimit)throw new TypeError(
"getJson: Too many request: "+this._requestCount);try{return this._baseApiUrl&&e.startsWith("/api")&&(
e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,this._observer.hasCallbacks(n.REQUEST_STARTED
)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"GET"),U.debug(
`Started GET request to "${e} "(${this._requestCount} requests)`),await Rs.getJson(e,t)}finally{--this._requestCount,
this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"GET"),U.debug(
`Stopped GET request to "${e}" (${this._requestCount} requests)`)}}static async postJson(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postJson: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"POST"),U.debug(
`Started POST request to "${e}" (${this._requestCount} requests)`),await Rs.postJson(e,t,r)}finally{--this._requestCount
,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"POST"),U.debug(
`Stopped POST request to "${e}" (${this._requestCount} requests)`)}}static async deleteJson(e,t){if(
this._requestCount>=this._requestLimit)throw new TypeError("postJson: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"DELETE"),U.debug(
`Started DELETE request to "${e}" (${this._requestCount} requests)`),await Rs.deleteJson(e,t)}finally{
--this._requestCount,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,
"DELETE"),U.debug(`Stopped DELETE request to "${e}" (${this._requestCount} requests)`)}}static async getText(e,t){if(
this._requestCount>=this._requestLimit)throw new TypeError("getText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"GET"),U.debug(
`Started GET request to "${e} "(${this._requestCount} requests)`),await Rs.getText(e,t)}finally{--this._requestCount,
this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"GET"),U.debug(
`Stopped GET request to "${e}" (${this._requestCount} requests)`)}}static async postText(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"POST"),U.debug(
`Started POST request to "${e}" (${this._requestCount} requests)`),await Rs.postText(e,t,r)}finally{--this._requestCount
,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"POST"),U.debug(
`Stopped POST request to "${e}" (${this._requestCount} requests)`)}}static async deleteText(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"DELETE"),U.debug(
`Started DELETE request to "${e}" (${this._requestCount} requests)`),await Rs.deleteText(e,r)}finally{
--this._requestCount,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,
"DELETE"),U.debug(`Stopped DELETE request to "${e}" (${this._requestCount} requests)`)}}}o(Ns,"_requestLimit",100),o(Ns,
"_baseApiUrl",void 0),o(Ns,"_requestCount",0),o(Ns,"_observer",new class{getName(){return this._name}constructor(e){o(
this,"_name",void 0),o(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,
this._callbacks=void 0}hasCallbacks(e){return io(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(
e=this._callbacks[t],zi(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t.toString()}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t.toString()}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Yn(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e.toString(
)}"`)}async waitForEvent(i,o){await new Promise((r,n)=>{try{let e=void 0,t=void 0;e=setTimeout(()=>{try{e=void 0,t&&(t()
,t=void 0),r()}catch(e){n(e)}},o),t=this.listenEvent(i,()=>{try{e&&(clearTimeout(e),e=void 0),t&&(t(),t=void 0),r()
}catch(e){n(e)}})}catch(e){n(e)}})}}("HttpService")),o(Ns,"Event",n),S=Array.prototype,So=S.join,No=function(e,t){
return null==e?"":So.call(e,t)},l={DAVINCI:"text-davinci-003",DAVINCI_EDIT_TEXT:"text-davinci-edit-001",
DAVINCI_EDIT_CODE:"code-davinci-edit-001",CURIE:"text-curie-001",BABBAGE:"text-babbage-001",ADA:"text-ada-001",
CONTENT_FILTER:"content-filter-alpha",CODEX:"code-davinci-002"};class Ps{static createBearerHeader(e){return"Bearer "+e}
static parseBearerToken(e){var t="Bearer ";if(wi(e,t))return ze(e.substring(t.length))}}const qs=C.createLogger(
"HttpOpenAiClient");class Cs{static setLogLevel(e){qs.setLogLevel(e),Ns.setLogLevel(e)}static setDefaultUrl(e){
this._defaultUrl=e}static getDefaultUrl(){return this._defaultUrl}static create(e,t=Cs._defaultUrl){return new Cs(e,t)}
constructor(e,t=Cs._defaultUrl){o(this,"_url",void 0),o(this,"_apiKey",void 0),this._url=t,this._apiKey=e}getUrl(){
return this._url}async getCompletion(e,t,r,n,i,o,s){var a,e=function(e,t,r,n,i,o,s){if(!c(e))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.prompt: "+e);if(!c(t)&&!K(t))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.model: "+t);if(!ne(r))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.max_tokens: "+r);if(!ne(n))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.temperature: "+n);if(!ne(i))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.top_p: "+i);if(!ne(o))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.frequency_penalty: "+o);if(ne(s))return d(d(d(d(d({prompt:e,
model:null!=t?t:l.DAVINCI},h(r)?{max_tokens:r}:{}),h(n)?{temperature:n}:{}),h(i)?{top_p:i}:{}),h(o)?{frequency_penalty:o
}:{}),h(s)?{presence_penalty:s}:{});throw new TypeError("Invalid OpenAiCompletionRequestDTO.presence_penalty: "+s)}(e,t,
r,n,i,o,s),t=Cs._getHeaders(this._apiKey);if(ge(n=r=await Ns.postJson(this._url+"/v1/completions",e,t))&&be(n,["id",
"object","created","model","choices","usage"])&&c(null==n?void 0:n.id)&&c(null==n?void 0:n.object)&&h(
null==n?void 0:n.created)&&Ae(null==n?void 0:n.model)&&le(null==n?void 0:n.choices,we)&&ge(i=null==n?void 0:n.usage
)&&Re(i,["prompt_tokens","completion_tokens","total_tokens"])&&h(null==i?void 0:i.prompt_tokens)&&h(
null==i?void 0:i.completion_tokens)&&h(null==i?void 0:i.total_tokens))return r;throw qs.debug("getCompletion: result = "
,r),new TypeError("Result was not OpenAiCompletionResponseDTO: "+Q([Ee(o=r),Oe(o,["id","object","created","model",
"choices","usage"]),u("id",X(null==o?void 0:o.id)),u("object",X(null==o?void 0:o.object)),u("created",re(
null==o?void 0:o.created)),u("model",(s=null==o?void 0:o.model,a=l,Ae(e=s)?L:(t=Ki(pe(a),e=>a[e]),
`incorrect enum value "${e}" for OpenApiModel: Accepted values `+No(t,", ")))),u("choices",ce(
"OpenAiCompletionResponseChoice",Se,null==o?void 0:o.responses,we)),u("usage",Q([Ee(n=null==o?void 0:o.usage),me(n,[
"prompt_tokens","completion_tokens","total_tokens"]),u("prompt_tokens",re(null==n?void 0:n.prompt_tokens)),u(
"completion_tokens",re(null==n?void 0:n.completion_tokens)),u("total_tokens",re(null==n?void 0:n.total_tokens))]))]))}
async getEdit(e,t,r,n,i,o){if(e=function(e,t,r,n,i,o){if(!c(e))throw new TypeError(
"Invalid OpenAiEditRequestDTO.instruction: "+e);if(!Y(t))throw new TypeError("Invalid OpenAiEditRequestDTO.input: "+t);
if(!Y(r))throw new TypeError("Invalid OpenAiEditRequestDTO.model: "+r);if(!ne(n))throw new TypeError(
"Invalid OpenAiEditRequestDTO.n: "+n);if(!ne(i))throw new TypeError("Invalid OpenAiEditRequestDTO.temperature: "+i);if(
ne(o))return d(d(d(d({model:null!=r?r:l.DAVINCI_EDIT_TEXT,instruction:e},c(t)?{input:t}:{}),h(n)?{n:n}:{}),h(i)?{
temperature:i}:{}),h(o)?{top_p:o}:{});throw new TypeError("Invalid OpenAiEditRequestDTO.top_p: "+o)}(e,t,r,n,i,o),
t=Cs._getHeaders(this._apiKey),ge(n=r=await Ns.postJson(this._url+"/v1/edits",e,t))&&Re(n,["object","created","choices",
"usage"])&&c(null==n?void 0:n.object)&&h(null==n?void 0:n.created)&&le(null==n?void 0:n.choices,Ne)&&ge(
i=null==n?void 0:n.usage)&&Re(i,["prompt_tokens","completion_tokens","total_tokens"])&&h(null==i?void 0:i.prompt_tokens
)&&h(null==i?void 0:i.completion_tokens)&&h(null==i?void 0:i.total_tokens))return r;throw qs.debug("getEdit: result = ",
r),new TypeError("Result was not OpenAiEditResponseDTO: "+Q([Ee(o=r),Oe(o,["object","created","choices","usage"]),u(
"object",X(null==o?void 0:o.object)),u("created",re(null==o?void 0:o.created)),u("choices",ce("OpenAiEditResponseChoice"
,Pe,null==o?void 0:o.responses,Ne)),u("usage",Q([Ee(e=null==o?void 0:o.usage),me(e,["prompt_tokens","completion_tokens",
"total_tokens"]),u("prompt_tokens",re(null==e?void 0:e.prompt_tokens)),u("completion_tokens",re(
null==e?void 0:e.completion_tokens)),u("total_tokens",re(null==e?void 0:e.total_tokens))]))]))}static _getHeaders(e){
return{Authorization:Ps.createBearerHeader(e)}}}o(Cs,"_defaultUrl","https://api.openai.com");class Ls{
static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)}catch(e){t(e)
}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,t="utf8"){return(
await Ls.getRequestDataAsBuffer(e)).toString(t)}static async getRequestDataAsFormUrlEncoded(e){if(""!==(
e=await Ls.getRequestDataAsString(e)))return $o.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await Ls.getRequestDataAsString(e)))return JSON.parse(e)}}g="WINDOW"===(A=null!=(b=null!=(f=null==(R=process)||null==(
xo=R.env)?void 0:xo.NOR_REQUEST_CLIENT_MODE)?f:null==(_=process)||null==(N=_.env)?void 0:N.REACT_APP_REQUEST_CLIENT_MODE
)?b:"")||!("undefined"==typeof window||!window.fetch),E="NODE"===A||!g,(w=s={Continue:100,100:"Continue",
SwitchingProtocols:101,101:"SwitchingProtocols",Processing:102,102:"Processing",CheckPoint:103,103:"CheckPoint",OK:200,
200:"OK",Created:201,201:"Created",Accepted:202,202:"Accepted",NonAuthoritativeInformation:203,
203:"NonAuthoritativeInformation",NoContent:204,204:"NoContent",ResetContent:205,205:"ResetContent",PartialContent:206,
206:"PartialContent",MultiStatus:207,207:"MultiStatus",AlreadyReported:208,208:"AlreadyReported",IMUsed:226,
226:"IMUsed",MultipleChoices:300,300:"MultipleChoices",MovedPermanently:301,301:"MovedPermanently",Found:302,
302:"Found",SeeOther:303,303:"SeeOther",NotModified:304,304:"NotModified",TemporaryRedirect:307,307:"TemporaryRedirect",
PermanentRedirect:308,308:"PermanentRedirect",BadRequest:400,400:"BadRequest",Unauthorized:401,401:"Unauthorized",
PaymentRequired:402,402:"PaymentRequired",Forbidden:403,403:"Forbidden",NotFound:404,404:"NotFound",
MethodNotAllowed:405,405:"MethodNotAllowed",NotAcceptable:406,406:"NotAcceptable",ProxyAuthenticationRequired:407,
407:"ProxyAuthenticationRequired",RequestTimeout:408,408:"RequestTimeout",Conflict:409,409:"Conflict",Gone:410,
410:"Gone",LengthRequired:411,411:"LengthRequired",PreconditionFailed:412,412:"PreconditionFailed",PayloadTooLarge:413,
413:"PayloadTooLarge",URITooLong:414,414:"URITooLong",UnsupportedMediaType:415,415:"UnsupportedMediaType",
RequestedRangeNotSatisfiable:416,416:"RequestedRangeNotSatisfiable",ExpectationFailed:417,417:"ExpectationFailed",
IAmATeapot:418,418:"IAmATeapot",UnprocessableEntity:422,422:"UnprocessableEntity",Locked:423,423:"Locked",
FailedDependency:424,424:"FailedDependency",TooEarly:425,425:"TooEarly",UpgradeRequired:426,426:"UpgradeRequired",
PreconditionRequired:428,428:"PreconditionRequired",TooManyRequests:429,429:"TooManyRequests",
RequestHeaderFieldsTooLarge:431,431:"RequestHeaderFieldsTooLarge",UnavailableForLegalReasons:451,
451:"UnavailableForLegalReasons",InternalError:500,500:"InternalError",InternalServerError:500})[500
]="InternalServerError",w[w.NotImplemented=501]="NotImplemented",w[w.BadGateway=502]="BadGateway",w[
w.ServiceUnavailable=503]="ServiceUnavailable",w[w.GatewayTimeout=504]="GatewayTimeout",w[w.HttpVersionNotSupported=505
]="HttpVersionNotSupported",w[w.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",w[w.InsufficientStorage=507
]="InsufficientStorage",w[w.LoopDetected=508]="LoopDetected",w[w.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",w[
w.NotExtended=510]="NotExtended",w[w.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Po={
ERROR:"error"};class Us extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||function(e){switch(e){
case s.Continue:return"Continue";case s.SwitchingProtocols:return"Switching Protocols";case s.Processing:
return"Processing";case s.CheckPoint:return"Check Point";case s.OK:return"OK";case s.Created:return"Created";
case s.Accepted:return"Accepted";case s.NonAuthoritativeInformation:return"Non-Authoritative Information";
case s.NoContent:return"No Content";case s.ResetContent:return"Reset Content";case s.PartialContent:
return"Partial Content";case s.MultiStatus:return"Multi Status";case s.AlreadyReported:return"Already Reported";
case s.IMUsed:return"IM Used";case s.MultipleChoices:return"Multiple Choices";case s.MovedPermanently:
return"Moved Permanently";case s.Found:return"Found";case s.SeeOther:return"See Other";case s.NotModified:
return"Not Modified";case s.TemporaryRedirect:return"Temporary Redirect";case s.PermanentRedirect:
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
return this.status+" "+this.message}toJSON(){return{type:Po.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
qo={TEXT:"text/plain",CALENDAR:"text/calendar",JSON:"application/json",
X_WWW_FORM_URLENCODED:"application/x-www-form-urlencoded"};const xs=E?require("fs").promises:void 0,x=C.createLogger(
"NodeRequestClient");class D{static setLogLevel(e){x.setLogLevel(e)}constructor(e,t,r){o(this,"_http",void 0),o(this,
"_https",void 0),o(this,"_defaultOptions",void 0),this._http=e,this._https=t,this._defaultOptions=r}async textRequest(e,
t,r,n){switch(e){case i.GET:return this._getText(t,r,n);case i.POST:return this._postText(t,r,n);case i.PATCH:
return this._patchText(t,r,n);case i.PUT:return this._putText(t,r,n);case i.DELETE:return this._deleteText(t,r,n);
default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}}async _getText(e,t,r){let n={method:"GET",
headers:{"Content-Type":qo.TEXT}};return t&&(n=d(d({},n),{},{headers:d(d({},n.headers),t)})),this._textRequest(i.GET,e,n
,r).then(D._successTextResponse)}async _putText(e,t,r){let n={method:"PUT",headers:{"Content-Type":qo.TEXT}};return t&&(
n=d(d({},n),{},{headers:d(d({},n.headers),t)})),this._textRequest(i.PUT,e,n,r).then(D._successTextResponse)}
async _postText(e,t,r){let n={method:"POST",headers:{"Content-Type":qo.TEXT}};return t&&(n=d(d({},n),{},{headers:d(d({},
n.headers),t)})),this._textRequest(i.POST,e,n,r).then(D._successTextResponse)}async _patchText(e,t,r){let n={
method:"PATCH",headers:{"Content-Type":qo.TEXT}};return t&&(n=d(d({},n),{},{headers:d(d({},n.headers),t)})),
this._textRequest(i.PATCH,e,n,r).then(D._successTextResponse)}async _deleteText(e,t,r){let n={method:"DELETE",headers:{
"Content-Type":qo.TEXT}};return t&&(n=d(d({},n),{},{headers:d(d({},n.headers),t)})),this._textRequest(i.DELETE,e,n,r
).then(D._successTextResponse)}static async _successTextResponse(e){var t,r=null==e?void 0:e.statusCode;if(r<200||400<=r
)throw x.error(`Unsuccessful response with status ${r}: `,e),t=D._stringifyErrorBodyString(null==e?void 0:e.body),
new Us(r,r+(t?` "${t}"`:"")+` for ${ae(e.method)} `+e.url,e.method,e.url,e.body);return e.body}
static _stringifyErrorBodyJson(t){var e,r;try{if(void 0===t)return"";if(e=t){if(qe(e))return e.message;if(Ce(e)
)return e.error;if(c(r=null==e?void 0:e.error))return r}return JSON.stringify(t,null,2)}catch(e){return x.warn(
"Warning! Could not stringify error body: ",e,t),t?JSON.stringify(t,null,2):""}}static _stringifyErrorBodyString(t){
var e,r;try{if(void 0===t)return"";if(e=function(e){try{return JSON.parse(e)}catch(e){}}(t)){if(qe(e))return e.message;
if(Ce(e))return e.error;if(c(r=null==e?void 0:e.error))return r}return t}catch(e){return x.warn(
"Warning! Could not stringify error body: ",e,t),null!=t?t:""}}async _textRequest(e,t,r,n){
return r=await this._httpRequest(t,r,n),n=await Ls.getRequestDataAsString(r),{method:e,url:t,statusCode:null!=(
e=null==r?void 0:r.statusCode)?e:0,headers:r.headers,body:n}}async jsonRequest(e,t,r,n){switch(e){case i.GET:
return this._getJson(t,r,n);case i.POST:return this._postJson(t,r,n);case i.PATCH:return this._patchJson(t,r,n);
case i.PUT:return this._putJson(t,r,n);case i.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
"[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{return!!(await xs.stat(t)).isSocket()
}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))x.debug("_checkSocketFile: ENOTDIR: ",e);else{if("ENOENT"!==t
)throw x.error(`_checkSocketFile: Error "${t}" passed on: `,e),e;x.debug("_checkSocketFile: ENOENT: ",e)}}}
async _findSocketFile(e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Mo.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){var t;void 0!==this._defaultOptions&&(s=d(d({},
this._defaultOptions),s));const a=e||void 0,u=new Go.default.URL(o);let l;const c=null!=(
e=null===u||void 0===u?void 0:u.protocol)?e:"";if("unix:"===c||"socket:"===c){if("/"===(
e=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/"))throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(t=await this._findSocketFile(e)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);e=""+(t.length<e.length?e.substr(t.length):"")+(
"?"!==u.search?u.search:""),s=d(d({},s),{},{socketPath:t,path:e}),o="",l=this._http
}else l="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!l)throw new Error(
"HTTP module not defined. This error should not happen.");var e,i;o&&(s=d(d({},s),{},{hostname:u.hostname,port:null!=(
i=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)?i:"https:"===c?443:80,path:u.pathname+u.search})),(
e=l.request(s,e=>{n?x.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(x.warn("Warning! Request had already ended when the response was received."),x.debug("Error from event: "
,e)):(x.debug("Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(x.warn(
"Warning! Request had already ended when the response was received."),x.debug("Exception: ",e)):(x.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _jsonRequest(e,t,r,n){return n=n?JSON.stringify(n):void 0,
r=await this._httpRequest(t,r,n),n=await Ls.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(
e=null==r?void 0:r.statusCode)?e:0,headers:r.headers,body:n}}async _getJson(e,t,r){let n={method:"GET",headers:{
"Content-Type":qo.JSON}};return t&&(n=d(d({},n),{},{headers:d(d({},n.headers),t)})),this._jsonRequest(i.GET,e,n,r).then(
D._successJsonResponse)}async _putJson(e,t,r){let n={method:"PUT",headers:{"Content-Type":qo.JSON}};return t&&(n=d(d({},
n),{},{headers:d(d({},n.headers),t)})),this._jsonRequest(i.PUT,e,n,r).then(D._successJsonResponse)}async _postJson(e,t,r
){let n={method:"POST",headers:{"Content-Type":qo.JSON}};return t&&(n=d(d({},n),{},{headers:d(d({},n.headers),t)})),
this._jsonRequest(i.POST,e,n,r).then(D._successJsonResponse)}async _patchJson(e,t,r){let n={method:"PATCH",headers:{
"Content-Type":qo.JSON}};return t&&(n=d(d({},n),{},{headers:d(d({},n.headers),t)})),this._jsonRequest(i.PATCH,e,n,r
).then(D._successJsonResponse)}async _deleteJson(e,t,r){let n={method:"DELETE",headers:{"Content-Type":qo.JSON}};
return t&&(n=d(d({},n),{},{headers:d(d({},n.headers),t)})),this._jsonRequest(i.DELETE,e,n,r).then(D._successJsonResponse
)}static async _successJsonResponse(e){var t,r=null==e?void 0:e.statusCode;if(r<200||400<=r)throw x.error(
`Unsuccessful response with status ${r}: `,e),t=D._stringifyErrorBodyJson(null==e?void 0:e.body),new Us(r,r+(
t?` "${t}"`:"")+` for ${ae(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}const Ds=C.createLogger(
"initializeHgNode"),js=(Es.initEnvFromDefaultFiles(),C.setLogLevel(v),Es.setLogLevel(v),C.setLogLevel(v),Es.setLogLevel(
v),D.setLogLevel(q.INFO<=v?q.NONE:v),C.createLogger("main")),Is=null!=(r=Z(null==(P=process)||null==(y=P.env
)?void 0:y.OPENAI_API_KEY))?r:"";process.env.OPENAI_API_KEY="",async function(e=[]){var t,r,n;try{(class{
static setLogLevel(e){Ds.setLogLevel(e)}static initialize(e){var t,r;e||(t=require("http"),r=require("https"),e=new D(t,
r)),Rs.setClient(e)}}).initialize(),ms.setLogLevel(q.INFO),Rs.setLogLevel(q.INFO),js.debug(
"Loglevel as "+C.getLogLevelString());var{scriptName:i,parseStatus:o,exitStatus:s,errorString:a,freeArgs:u,userArgs:l
}=class{static parseArguments(e,t=[],n){var r,i,o,s,a,u,l=null!=(r=t.shift())?r:"",c=null!=(r=t.shift())?r:"";if(!c
)return{parseStatus:1,exitStatus:T.ARGUMENT_PARSE_ERROR,nodePath:l,scriptName:e,freeArgs:[],extraArgs:[],userArgs:{}};
if(0===t.length)return{parseStatus:1,exitStatus:T.ARGUMENT_PARSE_ERROR,nodePath:l,scriptName:c,freeArgs:[],extraArgs:[],
userArgs:{}};let d=!0,h=(o=[],s=[],a={},{}),p={};n&&zi(pe(n),e=>{var[,t,r]=n[e];h[t]=e,p[r]=e});do{if(u=null!=(
i=t.shift())?i:"",d)switch(function(){switch(u){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:
return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:2,exitStatus:T.OK,nodePath:l,scriptName:c,freeArgs:o,
extraArgs:s,userArgs:a};case 1:return{parseStatus:3,exitStatus:T.OK,nodePath:l,scriptName:c,freeArgs:o,extraArgs:s,
userArgs:a};case 2:d=!1;break;default:if(d){if(wi(u,"-")){if(1<=uo(u,"=")){var[f,..._]=u.split("="),_=_.join("=");if(io(
h,f)){var v=h[f],[g]=n[v];a[v]=fe(u,g,0,_);break}if(io(p,f)){var v=p[f],[g]=n[v];a[v]=fe(u,g,0,_);break}}else{if(io(h,u)
){var f=h[u],[_]=n[f];a[f]=_e(u,_);break}if(io(p,u)){var E=p[u],[y]=n[E];a[E]=_e(u,y);break}}return{
errorString:"Unknown argument: "+u,parseStatus:1,exitStatus:T.UNKNOWN_ARGUMENT,nodePath:l,scriptName:c,freeArgs:o,
extraArgs:s,userArgs:a}}o.push(u)}else s.push(u)}}while(1<=t.length);return{parseStatus:0,exitStatus:T.OK,nodePath:l,
scriptName:c,freeArgs:o,extraArgs:s,userArgs:a}}}.parseArguments(Ts,e,{model:["s","--model","-m"],suffix:["s","--suffix"
,"-i"],stop:["s","--stop","-s"],user:["s","--user","-u"],logProbs:["i","--logprobs","-l"],bestOf:["i","--best-of","-b"],
presencePenalty:["n","--presence-penalty","-r"],frequencyPenalty:["n","--frequency-penalty","-f"],echo:["b","--echo",
"-e"],n:["i","--n","-n"],topP:["n","--top-p","-p"],temperature:["n","--temperature","-t"],maxTokens:["i","--max-tokens",
"-x"]});return 2===o||3===o?(console.log(Le(i)),s):a?(console.error("ERROR: "+a),s):(Es.setupDestroyHandler(()=>{
js.debug("Stopping command from process utils event")},e=>{js.error("Error while shutting down the service: ",e)}),
t=new Cs(Is),r=new Ss(t),c(null==l?void 0:l.model)&&r.setModel(null==l?void 0:l.model),c(null==l?void 0:l.stop
)&&r.setStop(null==l?void 0:l.stop),c(null==l?void 0:l.user)&&r.setUser(null==l?void 0:l.user),h(
null==l?void 0:l.logProbs)&&r.setLogProbs(null==l?void 0:l.logProbs),h(null==l?void 0:l.bestOf)&&r.setBestOf(
null==l?void 0:l.bestOf),h(null==l?void 0:l.presencePenalty)&&r.setPresencePenalty(null==l?void 0:l.presencePenalty),h(
null==l?void 0:l.frequencyPenalty)&&r.setFrequencyPenalty(null==l?void 0:l.frequencyPenalty),hi(null==l?void 0:l.echo
)&&r.setEcho(null==l?void 0:l.echo),h(null==l?void 0:l.n)&&r.setN(null==l?void 0:l.n),h(null==l?void 0:l.topP
)&&r.setTopP(null==l?void 0:l.topP),h(null==l?void 0:l.temperature)&&r.setTemperature(null==l?void 0:l.temperature),h(
null==l?void 0:l.maxTokens)&&r.setMaxTokens(null==l?void 0:l.maxTokens),(n=await new As(r).main(u))===T.USAGE?(
console.log(Le(i)),T.USAGE):n)}catch(e){return js.error("Fatal error: ",e),T.FATAL_ERROR}}(process.argv).then(e=>{
process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
