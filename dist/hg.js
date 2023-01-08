#!/usr/bin/env node
"use strict";function I(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function d(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?I(
Object(r),!0).forEach(function(e){o(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function o(e,t,r){var n;(t="symbol"==typeof(n=function(e){var t;if(
"object"!=typeof e||null===e)return e;if(void 0===(t=e[Symbol.toPrimitive]))return String(e);if("object"!=typeof(
t=t.call(e,"string")))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}(t))?n:String(n)
)in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function j(e){
return e&&"object"==typeof e&&"default"in e?e:{default:e}}function k(r){var n;return r&&r.__esModule?r:(n=Object.create(
null),r&&Object.keys(r).forEach(function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),
Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n))}
function F(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function M(e){var t,
r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function G(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function $(e){e=this.__data__=new hr(e),
this.size=e.size}function z(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new pr;++t<r;)this.add(e[t])}function J(n
,i){function o(){var e=arguments,t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),
o.cache=r.set(t,e)||r,e)}if("function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(
"Expected a function");return o.cache=new(J.Cache||_n),o}function V(e,t){return di(e,t)}function H(e){return"not "+e}
function B(e){return e.join(" or ")}function W(e){return e===L}function Q(e){return c(e)?e:V(e,e=>W(e))?L:E(e,e=>!W(e
)&&!!e).join(", ")}function a(e,t){return W(t=Q(t))?L:`property "${e}" `+t}function K(e){return void 0===e}function c(e
){return Ke(e)}function X(e){return c(e)?L:"not string"}function Y(e){return K(e)||c(e)}function Z(e){if(
void 0!==e&&""!==e)return""+e}function ee(e){if(void 0!==e&&""!==e)return fi(e)?e:["true","t","on","1","enabled"
].includes((""+e).toLowerCase())}function te(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Z(e)}function h(e){
return Di(e)}function re(e){return h(e)?L:"not number"}function ne(e){return K(e)||h(e)}function ie(e){return K(e)||Fi(e
)||h(e)}function oe(e){return Li(e)}function se(e){if(h(e))switch(e){case i.OPTIONS:return"options";case i.GET:
return"get";case i.POST:return"post";case i.PUT:return"put";case i.DELETE:return"delete";case i.PATCH:return"patch";
case i.TRACE:return"trace";case i.HEAD:return"head"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function ae(e){return Jo(e)}function ue(e,t=void 0,r=void 0,
n=void 0){var i;return!(!Jo(e)||(i=null!=(i=null==e?void 0:e.length)?i:0,void 0!==r&&i<r)||void 0!==n&&n<i)&&(
void 0===t||V(e,t))}function le(e,t,r,n=void 0,i=void 0,o=void 0){return ue(r,n,i,o)?L:!ae(r)||(null==r?void 0:r.length
)<1?H(e):H(e)+": "+Q(Yi(r,e=>t(e)))}function ce(e,t=c,r=void 0){var n;return!!(void 0===r||yt(n=e)&&V(ro(n),r))&&(
n=void 0!==t?t:c,yt(r=e))&&V(he(r),n)}function de(e){return yt(e)}function he(e,t=c){var r;return ae(e)?(r=Yi(e,(e,t)=>t
),E(r,e=>t(e))):de(e)?(r=Reflect.ownKeys(e),E(r,e=>t(e))):[]}function pe(e,t,r,n){var i,o,s,a,u;switch(t){case"b":if(s=e
,void 0!==(o=ee(a=n)))return o;throw new TypeError(`Argument ${s}: Not a boolean: `+(fi(a)?L:"not boolean"));case"s":if(
i=n,void 0!==(o=function(){if(void 0!==i)return""+i}()))return o;throw new TypeError(`Argument ${e}: Not a string: `+X(i
));case"n":if(s=e,a=n,void 0!==(o=parseFloat(a)))return o;throw new TypeError(`Argument ${s}: Not a number: `+a);
case"i":if(o=e,void 0!==(a=void 0===(u=s=n)||!oe(u)&&(c(u)&&0===(u=He(u)).length||!oe(u=ki(u)))?void 0:u))return a;
throw new TypeError(`Argument ${o}: Not integer: `+(Ci(s)?L:"not integer"));default:throw new TypeError(
"Unimplemented type: "+t)}}function fe(e,t){return pe(e,t,0,"b"===t?"true":"")}function _e(...e){return t=>No(e,e=>e(t))
}function ge(e){return!!yt(e)&&!(e instanceof Date||Rt(e)||ae(e))&&ce(e,c,void 0)}function ve(e){return ge(e
)?L:"not regular object"}function Ee(e){return c(t=e)||h(t)||fi(t)||Fi(t)||ye(e)||ge(t=e)&&ce(t,c,_e(Ee,K));var t}
function ye(e){return ue(e,_e(Ee,K))}function Te(e,t){return de(e)&&0===(r=t,E(he(e),e=>!r.includes(e)).length);var r}
function be(e,t){return!ws||Te(e,t)}function Re(e,t){return Te(e,t)?L:"Value had extra properties: "+E(he(e),
e=>!t.includes(e))}function Oe(e,t){return be(e,t)?L:"Value had extra properties: "+E(he(e),e=>!t.includes(e))}
function me(e){return ge(e)&&be(e,["message","type"])&&c(null==e?void 0:e.message)&&c(null==e?void 0:e.type)}
function Ae(e){return ge(e)&&be(e,["error"])&&me(null==e?void 0:e.error)}function Se(e){return ge(e)&&be(e,["text",
"index","logprobs","finish_reason"])&&c(null==e?void 0:e.text)&&h(null==e?void 0:e.index)&&ie(null==e?void 0:e.logprobs
)&&Y(null==e?void 0:e.finish_reason)}function we(e){return Q([ve(e),Oe(e,["text","index","logprobs","finish_reason"]),a(
"text",X(null==e?void 0:e.text)),a("index",re(null==e?void 0:e.index)),a("logprobs",ie(null==e?void 0:e.logprobs)?L:H(B(
["number","null","undefined"]))),a("finish_reason",Y(null==e?void 0:e.finish_reason)?L:H(B(["string","undefined"])))])}
function Ne(e){return ge(e)&&be(e,["text","index","logprobs","finish_reason"])&&c(null==e?void 0:e.text)&&h(
null==e?void 0:e.index)&&ie(null==e?void 0:e.logprobs)&&c(null==e?void 0:e.finish_reason)}function Pe(e){return Ne(e
)||me(e)}function Ce(e){return Pe(e)?L:"Not OpenAiError or OpenAiCompletionResponseChoice"}function qe(r,n){return he(n
).forEach(e=>{var t=n[e];r=function(e,t,r){if(!c(t))throw new TypeError("replaceAll: from is required");if(!c(e)
)throw new TypeError("replaceAll: value is not a string");if(!c(r))throw new TypeError("replaceAll: to is not a string")
if(""===t)return["",...e.split(""),""].join(r);let n="",i=0,o=e.indexOf(t);for(;o>=i;)n+=e.substring(i,o)+r,i=o+t.length
,o=e.indexOf(t,i);return n+=e.substring(i)}(r,e,t)}),r}function Le(e,t,r){return qe(`describe("{{CLASS_NAME}}", () => {
    describe("{{METHOD_NAME}}", () => {
        it("{{TEST_NAME}}", () => {
        });
    });
});
`,{"{{CLASS_NAME}}":null!=e?e:"ExampleClass","{{METHOD_NAME}}":null!=t?t:"exampleMethod",
"{{TEST_NAME}}":null!=r?r:"should ..."})}function Ue(e){return e&&e instanceof Ds}function xe(e){return ge(e)&&be(e,[
"error","code"])&&c(null==e?void 0:e.error)&&ne(null==e?void 0:e.code)}function De(e){
return Ts?`USAGE: ${e} [OPT(s)] ARG(1) [...ARG(N)]

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

    hg ai desc[ribe] CODE                      Describe code
    hg ai doc[ument] CODE                      Document code
    hg ai test CODE                            Write tests for code
    hg ai comp[letion] PROMPT [..PROMPT2]      OpenAI completion request
    hg ai edit INSTRUCTION [INPUT [..INPUT2]]  OpenAI edit request

  If the argument is a file, it will be read and replaces.

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
`}function Ie(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function je(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Qo&&Qo in Object(e)?function(e){var t,r,n=Vo.call(e,Bo),
i=e[Bo];try{t=!(e[Bo]=void 0)}catch(e){}return r=Ho.call(e),t&&(n?e[Bo]=i:delete e[Bo]),r}:function(e){return Wo.call(e)
})(e)}function ke(e){return null!=e&&"object"==typeof e}function Fe(e){return"symbol"==typeof e||Xo(e
)&&"[object Symbol]"==Ko(e)}function Me(e){var t;return"string"==typeof e?e:Zo(e)?Yo(e,Me)+"":es(e)?ts?ts.call(e
):"":"0"==(t=e+"")&&1/e==-1/0?"-0":t}function Ge(e){return e&&e.slice(0,function(e){for(var t=e.length;t--&&rs.test(
e.charAt(t)););return t}(e)+1).replace(ns,"")}function $e(e){return e!=e}function ze(e,t,r){var n,i,o,s,a,u,l,c;if(t==t
){for(i=t,o=r-1,s=(n=e).length;++o<s;)if(n[o]===i)return o}else for(u=$e,l=(a=e).length,c=r+-1;++c<l;)if(u(a[c],c,a)
)return c;return-1}function Je(e){return null==e?"":ps(e)}function Ve(e){return(ds(e)?hs:cs)(e)}function He(e,t,r){
return(e=gs(e))&&(r||void 0===t)?_s(e):e&&(t=fs(t))?function(e,t,r){var n,i,o,s,a,u=e.length;if(!t&&u<=r)return e;for(
s=-1,(u=(a=(i=e).length)<(u=r)?a:u)<0&&(u+=a),a=u<(o=t<0?a<-t?0:a+t:t)?0:u-o>>>0,o>>>=0,n=Array(a);++s<a;)n[s]=i[s+o];
return n}(r=Ve(e),function(e,t){for(var r=-1,n=e.length;++r<n&&-1<os(t,e[r],0););return r}(r,t=Ve(t)),function(e,t){for(
var r=e.length;r--&&-1<is(t,e[r],0););return r}(r,t)+1).join(""):e}var Be,We,Qe,Ke,Xe,Ye,Ze,et,tt,rt,nt,it,ot,st,t,at,ut
,lt,ct,dt,ht,pt,ft,_t,gt,vt,Et,yt,Tt,bt,Rt,Ot,mt,At,St,wt,Nt,Pt,Ct,qt,Lt,Ut,xt,Dt,It,jt,kt,Ft,Mt,Gt,$t,zt,Jt,Vt,Ht,Bt,Wt
,Qt,Kt,Xt,Yt,Zt,er,tr,rr,nr,ir,or,sr,ar,ur,lr,cr,dr,hr,pr,fr,_r,gr,vr,Er,yr,Tr,br,Rr,Or,mr,Ar,Sr,wr,Nr,Pr,Cr,qr,Lr,Ur,xr
,Dr,Ir,jr,kr,Fr,Mr,Gr,$r,zr,Jr,Vr,Hr,Br,Wr,Qr,Kr,Xr,Yr,Zr,en,tn,rn,nn,on,sn,an,un,ln,cn,dn,hn,pn,fn,e,_n,gn,vn,En,yn,Tn,
bn,Rn,On,mn,An,Sn,wn,Nn,Pn,Cn,qn,r,Ln,Un,xn,Dn,In,jn,kn,Fn,Mn,Gn,$n,zn,Jn,Vn,Hn,Bn,Wn,Qn,Kn,Xn,Yn,Zn,ei,E,ti,ri,ni,ii,oi
,si,ai,ui,li,ci,di,hi,pi,fi,_i,gi,vi,Ei,yi,Ti,bi,Ri,Oi,mi,Ai,Si,wi,Ni,Pi,Ci,qi,Li,Ui,xi,Di,Ii,ji,ki,Fi,T,i,Mi,Gi,$i,zi,
Ji,Vi,Hi,Bi,Wi,Qi,Ki,Xi,Yi,Zi,eo,to,ro,no,io,oo,so,ao,uo,lo,co,ho,po,fo,_o,go,vo,Eo,yo,To,bo,Ro,Oo,mo,Ao,So,wo,No,Po,n,s
,Co,qo,Lo,Uo,xo,u,l,Do,p,f,_,g,v,y,Io,jo,ko,Fo=require("fs"),b=require("path"),R=require("url"),O=require("querystring")
,Mo=j(Fo),Go=j(b),$o=j(R),zo=k(O),R="object"==typeof(
b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
)&&b&&b.Object===Object&&b,O="object"==typeof self&&self&&self.Object===Object&&self,O=(b=R||O||Function("return this")(
)).Symbol,Jo=Array.isArray,m=Object.prototype,Vo=m.hasOwnProperty,Ho=m.toString,Bo=O?O.toStringTag:void 0,
Wo=Object.prototype.toString,Qo=O?O.toStringTag:void 0,Ko=je,Xo=ke,Yo=Ie,Zo=Jo,es=Fe,ts=(m=O?O.prototype:void 0
)?m.toString:void 0,rs=/\s/,ns=/^\s+/,is=ze,os=ze,ss=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),as="["+(m="\\ud800-\\udfff")+"]",
A="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",us="\\ud83c[\\udffb-\\udfff]",S="(?:\\ud83c[\\udde6-\\uddff]){2}",
w="[\\ud800-\\udbff][\\udc00-\\udfff]",N=(N="[\\ufe0e\\ufe0f]?")+(
P="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?")+"(?:\\u200d(?:"+[m="[^"+m+"]",S,w
].join("|")+")"+N+P+")*",P="(?:"+[m+A+"?",A,S,w,as].join("|")+")",ls=RegExp(us+"(?="+us+")|"+P+N,"g"),cs=function(e){
return e.split("")},ds=function(e){return ss.test(e)},hs=function(e){return e.match(ls)||[]},ps=Me,fs=Me,_s=Ge,gs=Je,C={
DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"};class vs{constructor(e,t){o(this,
"_logger",void 0),o(this,"name",void 0),o(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}
getLogLevel(){var e;return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}
debug(...e){(void 0===this._level||this._level<=C.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=C.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=C.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=C.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class q{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case C.DEBUG:return"DEBUG";case C.INFO:return"INFO";case C.WARN:return"WARN";case C.ERROR:return"ERROR";
case C.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=C.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=C.INFO&&this._logger.info(...e)}static warn(...e){this._level<=C.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=C.ERROR&&this._logger.error(...e)}static createLogger(e){return new vs(e,q)}}o(q,
"Level",C),o(q,"_level",C.DEBUG),o(q,"_logger",console);const Es=q.createLogger("ProcessUtils");class ys{
static setLogLevel(e){Es.setLogLevel(e)}static getArguments(){return process.argv.slice(2)}static parseEnvFileLine(e,t){
var r;return t.indexOf("=")<0?t.length&&(e[t]=""):(r=He((t=t.split("=")).shift())).length&&(e[r]=t.join("=").trim()),e}
static parseEnvFile(e){return Mo.default.readFileSync(e,{encoding:"utf-8"}).split("\n").reduce(ys.parseEnvFileLine,{})}
static initEnvFromFile(e){e=ys.parseEnvFile(e),process.env=d(d({},e),process.env)}static initEnvFromDefaultFiles(){
var e=Go.default.join(process.cwd(),".env");Mo.default.existsSync(e)&&ys.initEnvFromFile(e)}static setupDestroyHandler(r
,n){let i=!1;var e=t=>e=>{ys._printErrors(t,e);try{i||(i=!0,r())}catch(e){n(e)}};process.on("exit",e("exit")),
process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on(
"SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{
"exit"===e?t?Es.debug(`DEBUG: Closing process because "${e}" event: `,t):Es.debug(
`DEBUG: Closing process because "${e}" event`):t?Es.error(`ERROR: Closing process because "${e}" event: `,t):Es.info(
`INFO: Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}We=Jo,
Ke=function(e){return"string"==typeof e||!We(e)&&Qe(e)&&"[object String]"==Be(e)},m=function(e,t){for(var r,n=-1,
i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e)&&(s[o++]=r);return s},A=function(e,t,r){for(var n,i=-1,o=Object(e),
s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},S=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},Xe=Be=je,w=function(e){return Ye(e)&&"[object Arguments]"==Xe(e)},Ze=Ye=Qe=ke,as=Object.prototype,
et=as.hasOwnProperty,tt=as.propertyIsEnumerable,us=w(function(){return arguments}())?w:function(e){return Ze(e
)&&et.call(e,"callee")&&!tt.call(e,"callee")},rt={},P={get exports(){return rt},set exports(e){rt=e}},w=(N=(w=(as=(N=rt
)&&!N.nodeType&&N)&&P&&!P.nodeType&&P)&&w.exports===as?b.Buffer:void 0)?N.isBuffer:void 0,P.exports=w||function(){
return!1},nt=/^(?:0|[1-9]\d*)$/,as=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&nt.test(e))&&-1<e&&e%1==0&&e<t},it=je,ot=N=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},st=ke,(t={})["[object Float32Array]"]=t[
"[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t[
"[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0,t[
"[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t[
"[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"
]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1,P=function(e){return st(e)&&ot(
e.length)&&!!t[it(e)]},w=function(t){return function(e){return t(e)}},at={},Lo={get exports(){return at},set exports(e){
at=e}},u=(u=at)&&!u.nodeType&&u,Uo=u&&Lo&&!Lo.nodeType&&Lo,xo=Uo&&Uo.exports===u&&R.process,u=function(){try{
return Uo&&Uo.require&&Uo.require("util").types||xo&&xo.binding&&xo.binding("util")}catch(e){}}(),Lo.exports=u,Lo=(
R=at&&at.isTypedArray)?w(R):P,ut=S,lt=us,ct=Jo,dt=rt,ht=as,pt=u=Lo,w=Object.prototype,ft=w.hasOwnProperty,
_t=Object.prototype,jo=Object.keys,ko=Object,gt=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||_t)},vt=function(e){return jo(ko(e))},R=Object.prototype,Et=R.hasOwnProperty,Tt=je,
bt=yt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ot=Rt=function(e){return!!bt(e)&&(
"[object Function]"==(e=Tt(e))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},mt=N
,At=function(e,t){var r,n=ct(e),i=!n&&lt(e),o=!n&&!i&&dt(e),s=!n&&!i&&!o&&pt(e),a=n||i||o||s,u=a?ut(e.length,String):[],
l=u.length;for(r in e)!t&&!ft.call(e,r)||a&&("length"==r||o&&("offset"==r||"parent"==r)||s&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||ht(r,l))||u.push(r);return u},St=function(e){var t,r;if(!gt(e)
)return vt(e);for(r in t=[],Object(e))Et.call(e,r)&&"constructor"!=r&&t.push(r);return t},Nt=A,Pt=P=function(e){return(
wt(e)?At:St)(e)},Ct=wt=S=function(e){return null!=e&&mt(e.length)&&!Ot(e)},qt=Lo=function(e,t){var r,n,i;if(null!=e){if(
!Ct(e))return e&&Nt(e,t,Pt);for(r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););}return e},w=function(e,n){var i=[
];return qt(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Lt=R=function(e,t){return e===t||e!=e&&t!=t},Ut=A=function(e,t){
for(var r=e.length;r--;)if(Lt(e[r][0],t))return r;return-1},mr=Array.prototype,xt=mr.splice,jt=It=Dt=A,mr=function(e){
var t=this.__data__;return!((e=Ut(t,e))<0||(e==t.length-1?t.pop():xt.call(t,e,1),--this.size,0))},A=function(e){
var t=this.__data__;return(e=Dt(t,e))<0?void 0:t[e][1]},Do=function(e){return-1<It(this.__data__,e)},p=function(e,t){
var r=this.__data__,n=jt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},F.prototype.clear=function(){
this.__data__=[],this.size=0},F.prototype.delete=mr,F.prototype.get=A,F.prototype.has=Do,F.prototype.set=p,kt=mr=F,
A=function(){this.__data__=new kt,this.size=0},Do=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,
e},p=function(e){return this.__data__.get(e)},fr=function(e){return this.__data__.has(e)},l=b["__core-js_shared__"],
l=/[^.]+$/.exec(l&&l.keys&&l.keys.IE_PROTO||""),Ft=l?"Symbol(src)_1."+l:"",l=Function.prototype,Mt=l.toString,Gt=Rt,
$t=function(e){return!!Ft&&Ft in e},zt=yt,Jt=l=function(e){if(null!=e){try{return Mt.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},y=/[\\^$.*+?()[\]{}|]/g,Vt=/^\[object .+?Constructor\]$/,e=Function.prototype,g=Object.prototype,
e=e.toString,g=g.hasOwnProperty,Ht=RegExp("^"+e.call(g).replace(y,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bt=function(e){return!(!zt(e)||$t(e))&&(Gt(e
)?Ht:Vt).test(Jt(e))},Wt=function(e,t){return null==e?void 0:e[t]},g=(e=function(e,t){return e=Wt(e,t),Bt(e)?e:void 0})(
b,"Map"),y=e(Object,"create"),Kt=Qt=y,f=Object.prototype,Xt=f.hasOwnProperty,Yt=y,f=Object.prototype,Zt=f.hasOwnProperty
,er=y,f=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},y=function(e){var t,
r=this.__data__;return Kt?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:Xt.call(r,e)?r[e]:void 0},v=function(e){
var t=this.__data__;return Yt?void 0!==t[e]:Zt.call(t,e)},r=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=er&&void 0===t?"__lodash_hash_undefined__":t,this},M.prototype.clear=function(){
this.__data__=Qt?Qt(null):{},this.size=0},M.prototype.delete=f,M.prototype.get=y,M.prototype.has=v,M.prototype.set=r,
tr=M,rr=mr,nr=g,ir=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},ur=ar=sr=or=function(e,t){
return e=e.__data__,ir(t)?e["string"==typeof t?"string":"hash"]:e.map},f=function(e){return e=or(this,e).delete(e),
this.size-=e?1:0,e},y=function(e){return sr(this,e).get(e)},v=function(e){return ar(this,e).has(e)},r=function(e,t){
var r=ur(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},G.prototype.clear=function(){this.size=0,
this.__data__={hash:new tr,map:new(nr||rr),string:new tr}},G.prototype.delete=f,G.prototype.get=y,G.prototype.has=v,
G.prototype.set=r,cr=g,dr=f=G,hr=lr=mr,y=Do,v=p,r=fr,mr=function(e,t){var r,n=this.__data__;if(n instanceof lr){if(
r=n.__data__,!cr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new dr(r)}return n.set(e,t),
this.size=n.size,this},$.prototype.clear=A,$.prototype.delete=y,$.prototype.get=v,$.prototype.has=r,$.prototype.set=mr,
Do=$,pr=f,p=function(e){return this.__data__.has(e)},z.prototype.add=z.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},z.prototype.has=p,_r=z,gr=fr=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},vr=function(e,t){return e.has(t)},A=b.Uint8Array,Er=A,yr=R
,Tr=y=function(e,t,r,n,i,o){var s,a,u,l,c,d,h,p=1&r,f=e.length,_=t.length;if(f!=_&&!(p&&f<_))return!1;if(_=o.get(e),
s=o.get(t),_&&s)return _==t&&s==e;for(a=-1,u=!0,l=2&r?new _r:void 0,o.set(e,t),o.set(t,e);++a<f;){if(c=e[a],d=t[a],
void 0!==(h=n?p?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;u=!1;break}if(l){if(!gr(t,function(e,t){if(!vr(l,t)&&(
c===e||i(c,e,r,n,o)))return l.push(t)})){u=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){u=!1;break}}return o.delete(e),
o.delete(t),u},br=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},Rr=function(e){
var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},v=O?O.prototype:void 0,Or=v?v.valueOf:void 0,
r=function(e,t,r,n,i,o,s){var a,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new Er(e),new Er(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return yr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":a=br;case"[object Set]":return a=a||Rr,!!(
e.size==t.size||1&n)&&((u=s.get(e))?u==t:(n|=2,s.set(e,t),u=Tr(a(e),a(t),n,i,o,s),s.delete(e),u));case"[object Symbol]":
if(Or)return Or.call(e)==Or.call(t)}return!1},Ar=mr=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},Sr=Jo,wr=m,p=Object.prototype,Nr=p.propertyIsEnumerable,Pr=Object.getOwnPropertySymbols,Cr=function(e,t,r){
return t=t(e),Sr(e)?t:Ar(t,r(e))},qr=Pr?function(t){return null==t?[]:(t=Object(t),wr(Pr(t),function(e){return Nr.call(t
,e)}))}:function(){return[]},Lr=P,Ur=function(e){return Cr(e,Lr,qr)},A=Object.prototype,xr=A.hasOwnProperty,v=function(e
,t,r,n,i,o){var s,a,u,l,c,d,h,p,f,_=1&r,g=Ur(e),v=g.length;if(v!=Ur(t).length&&!_)return!1;for(s=v;s--;)if(a=g[s],!(
_?a in t:xr.call(t,a)))return!1;if(p=o.get(e),f=o.get(t),p&&f)return p==t&&f==e;for(u=!0,o.set(e,t),o.set(t,e),
l=_;++s<v;){if(c=e[a=g[s]],d=t[a],!(void 0===(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){u=!1;break}
l=l||"constructor"==a}return u&&!l&&(p=e.constructor)!=(f=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof f&&f instanceof f)&&(u=!1),o.delete(e),o.delete(t),u},p=e(b,
"DataView"),A=g,g=e(b,"Promise"),_=e(b,"Set"),e=e(b,"WeakMap"),Dr=je,jr=(Ir=l)(b=p),kr=Ir(A),Fr=Ir(g),Mr=Ir(_),Gr=Ir(e),
l=Dr,(b&&"[object DataView]"!=l(new b(new ArrayBuffer(1)))||A&&"[object Map]"!=l(new A)||g&&"[object Promise]"!=l(
g.resolve())||_&&"[object Set]"!=l(new _)||e&&"[object WeakMap]"!=l(new e))&&(l=function(e){var t=Dr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?Ir(e):"")switch(e){case jr:return"[object DataView]";case kr:
return"[object Map]";case Fr:return"[object Promise]";case Mr:return"[object Set]";case Gr:return"[object WeakMap]"}
return t}),$r=Do,zr=y,Jr=r,Vr=v,Hr=l,Br=Jo,Wr=rt,Qr=u,Kr="[object Arguments]",Xr="[object Array]",Yr="[object Object]",
p=Object.prototype,Zr=p.hasOwnProperty,en=function(e,t,r,n,i,o){var s=Br(e),a=Br(t),u=s?Xr:Hr(e),a=a?Xr:Hr(t),l=(
u=u==Kr?Yr:u)==Yr,c=(a=a==Kr?Yr:a)==Yr;if((a=u==a)&&Wr(e)){if(!Wr(t))return!1;l=!(s=!0)}return a&&!l?(o=o||new $r,s||Qr(
e)?zr(e,t,r,n,i,o):Jr(e,t,u,r,n,i,o)):1&r||(s=l&&Zr.call(e,"__wrapped__"),u=c&&Zr.call(t,"__wrapped__"),!s&&!u)?a&&(
o=o||new $r,Vr(e,t,r,n,i,o)):i(s?e.value():e,u?t.value():t,r,n,o=o||new $r)},tn=ke,rn=Do,nn=b=function e(t,r,n,i,o){
return t===r||(null==t||null==r||!tn(t)&&!tn(r)?t!=t&&r!=r:en(t,r,n,i,e,o))},on=yt,sn=A=function(e){return e==e&&!on(e)}
,an=P,un=function(e,t,r,n){var i,o,s,a,u,l,c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2
]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e)
)return!1}else if(u=new rn,!(void 0===(l=n?n(s,a,o,e,t,u):l)?nn(a,s,3,n,u):l))return!1;return!0},ln=function(e){for(
var t,r,n=an(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,sn(r)];return n},cn=g=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},_=function(t){var r=ln(t);return 1==r.length&&r[0][2]?cn(r[0][0
],r[0][1]):function(e){return e===t||un(e,t,r)}},dn=Jo,hn=Fe,pn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
fn=/^\w*$/,e=function(e,t){var r;return!dn(e)&&(!("number"!=(r=typeof e)&&"symbol"!=r&&"boolean"!=r&&null!=e&&!hn(e)
)||fn.test(e)||!pn.test(e)||null!=t&&e in Object(t))},_n=f,J.Cache=_n,
gn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vn=/\\(\\)?/g,Io=(
y=J(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(gn,function(e,t,r,n){i.push(r?n.replace(vn,
"$1"):t||e)}),i},function(e){return 500===Io.size&&Io.clear(),e})).cache,Tn=y,bn=Je,Rn=Fe,Sn=On=function(e,t){return En(
e)?e:yn(e,t)?[e]:Tn(bn(e))},wn=us,Cn=N,Ln=function(e,t){return null!=e&&t in Object(e)},Un=r=function(e,t,r){for(var n,i
,o=(t=Sn(t,e)).length,s=!(n=-1);++n<o&&(i=qn(t[n]),s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length
)&&Cn(o)&&Pn(i,o)&&(Nn(e)||wn(e))},xn=b,Dn=function(e,t,r){return void 0===(e=null==e?void 0:An(e,t))?r:e},In=function(e
,t){return null!=e&&Un(e,t,Ln)},kn=A,Fn=g,Gn=An=function(e,t){for(var r=0,n=(t=On(t,e)).length;null!=e&&r<n;)e=e[mn(t[
r++])];return r&&r==n?e:void 0},$n=function(t){return function(e){return null==e?void 0:e[t]}},zn=function(t){
return function(e){return Gn(e,t)}},Jn=jn=yn=e,Vn=Mn=qn=mn=function(e){var t;return"string"==typeof e||Rn(e)?e:"0"==(
t=e+"")&&1/e==-1/0?"-0":t},Hn=_,Bn=function(r,n){return jn(r)&&kn(n)?Fn(Mn(r),n):function(e){var t=Dn(e,r);
return void 0===t&&t===n?In(e,r):xn(n,t,3)}},Wn=v=function(e){return e},Kn=function(e){return Jn(e)?$n(Vn(e)):zn(e)},
Xn=m,Yn=w,E=function(e,t){return(ei(e)?Xn:Yn)(e,Zn(t))},ti=Lo,ri=R,ni=S,ii=Pn=as,oi=yt,si=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},ai=function(e,n){var i=!0;return ti(e,function(e,t,r){
return i=!!n(e,t,r)}),i},ui=Zn=l=function(e){return"function"==typeof e?e:null==e?Wn:"object"==typeof e?Qn(e)?Bn(e[0],e[
1]):Hn(e):Kn(e)},li=ei=Qn=Nn=En=Jo,ci=u=function(e,t,r){var n;return!!oi(r)&&!!("number"==(n=typeof t)?ni(r)&&ii(t,
r.length):"string"==n&&t in r)&&ri(r[t],e)},di=function(e,t,r){var n=li(e)?si:ai;return r&&ci(e,t,r)&&(t=void 0),n(e,ui(
t))};const L="OK",Ts=(hi=je,pi=ke,fi=function(e){return!0===e||!1===e||pi(e)&&"[object Boolean]"==hi(e)},Do=null!=(p=te(
""))?p:"hg-command",y=null!=(f=te(""))?f:"",null==(N=function(){if(!"".startsWith("%{")||!"".endsWith("}"))return ee("")
}())||N),bs=(_=null!=(e=function(e){if(e){if(function(){switch(e){case C.DEBUG:case C.INFO:case C.WARN:case C.ERROR:
case C.NONE:return 1;default:return}}())return e;switch((""+e).toUpperCase()){case"ALL":case"DEBUG":return C.DEBUG;
case"INFO":return C.INFO;case"WARN":case"WARNING":return C.WARN;case"ERR":case"ERROR":return C.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return C.NONE;default:return}}}(null!=(g=Z(null==(b=process)||null==(
A=b.env)?void 0:A.LOG_LEVEL))?g:Z(y)))?e:C.INFO,null!=(R=Z(null==(m=process)||null==(w=m.env)?void 0:w.COMMAND_NAME)
)?R:Do),Rs=(_i=Ge,gi=yt,vi=Fe,Ei=/^[-+]0x[0-9a-f]+$/i,yi=/^0b[01]+$/i,Ti=/^0o[0-7]+$/i,bi=parseInt,Ri=function(e){var t;
return"number"==typeof e?e:vi(e)?NaN:(gi(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=gi(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=_i(e),(t=yi.test(e))||Ti.test(e)?bi(e.slice(2),t?2:8):Ei.test(e)?NaN:+e))},Oi=function(
e){return e?(e=Ri(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},Ai=Me,wi=Je,Ni=function(e,t,r
){return e=wi(e),r=null==r?0:mi(Si(r),0,e.length),t=Ai(t),e.slice(r,r+t.length)==t},qi=Ci=function(e){
return"number"==typeof e&&e==Pi(e)},Li=function(e){return qi(e)&&-9007199254740991<=e&&e<=9007199254740991},Ui=je,xi=ke,
Di=function(e){return"number"==typeof e||xi(e)&&"[object Number]"==Ui(e)},Ii=mi=function(e,t,r){return e!=e||(
void 0!==r&&(e=e<=r?e:r),void 0===t)||t<=e?e:t},ji=Pi=Si=as=function(e){var t=(e=Oi(e))%1;return e==e?t?e-t:e:0},
ki=function(e){return e?Ii(ji(e),-9007199254740991,9007199254740991):0===e?e:0},Fi=function(e){return null===e},(p=T={}
)[p.OK=0]="OK",p[p.GENERAL_ERRORS=1]="GENERAL_ERRORS",p[p.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",p[
p.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",p[p.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",p[p.UNIMPLEMENTED_FEATURE=5
]="UNIMPLEMENTED_FEATURE",p[p.FATAL_ERROR=6]="FATAL_ERROR",p[p.CONFLICT=7]="CONFLICT",p[p.USAGE=64]="USAGE",p[
p.DATAERR=65]="DATAERR",p[p.NOINPUT=66]="NOINPUT",p[p.NOUSER=67]="NOUSER",p[p.NOHOST=68]="NOHOST",p[p.UNAVAILABLE=69
]="UNAVAILABLE",p[p.SOFTWARE=70]="SOFTWARE",p[p.OSERR=71]="OSERR",p[p.OSFILE=72]="OSFILE",p[p.CANTCREAT=73]="CANTCREAT",
p[p.IOERR=74]="IOERR",p[p.TEMPFAIL=75]="TEMPFAIL",p[p.PROTOCOL=76]="PROTOCOL",p[p.NOPERM=77]="NOPERM",p[p.CONFIG=78
]="CONFIG",p[p.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",p[p.COMMAND_NOT_FOUND=127
]="COMMAND_NOT_FOUND",p[p.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",p[p.FATAL_SIGNAL_RANGE_START=129
]="FATAL_SIGNAL_RANGE_START",p[p.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",p[p.EXIT_STATUS_OUT_OF_RANGE=255
]="EXIT_STATUS_OUT_OF_RANGE",(N=(f={}).HttpMethods||(f.HttpMethods={})).GET="get",N.PUT="put",N.POST="post",
N.DELETE="delete",N.OPTIONS="options",N.HEAD="head",N.PATCH="patch",N.TRACE="trace",(A=(b={}).HttpMethods||(
b.HttpMethods={})).GET="get",A.PUT="put",A.POST="post",A.DELETE="delete",A.OPTIONS="options",A.HEAD="head",
A.PATCH="patch",(g=i={})[g.OPTIONS=0]="OPTIONS",g[g.GET=1]="GET",g[g.POST=2]="POST",g[g.PUT=3]="PUT",g[g.DELETE=4
]="DELETE",g[g.PATCH=5]="PATCH",g[g.TRACE=6]="TRACE",g[g.HEAD=7]="HEAD",q.createLogger("RequestClient"));class Os{
constructor(e){o(this,"_client",void 0),this._client=e}async textRequest(e,t,r,n){return this._client.textRequest(e,t,r,
n)}async getText(e,t){return this._client.textRequest(i.GET,e,t)}async postText(e,t,r){return Rs.debug(".postJson: ",e,t
,r),this._client.textRequest(i.POST,e,r,t)}async patchText(e,t,r){return Rs.debug(".patchJson: ",e,t,r),
this._client.textRequest(i.PATCH,e,r,t)}async putText(e,t,r){return Rs.debug(".putJson: ",e,t,r),
this._client.textRequest(i.PUT,e,r,t)}async deleteText(e,t,r){return Rs.debug(".deleteJson: ",e,r,t),
this._client.textRequest(i.DELETE,e,t,r)}async jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
async getJson(e,t){return this._client.jsonRequest(i.GET,e,t)}async postJson(e,t,r){return this._client.jsonRequest(
i.POST,e,r,t)}async patchJson(e,t,r){return this._client.jsonRequest(i.PATCH,e,r,t)}async putJson(e,t,r){
return this._client.jsonRequest(i.PUT,e,r,t)}async deleteJson(e,t,r){return this._client.jsonRequest(i.DELETE,e,t,r)}
static setLogLevel(e){Rs.setLogLevel(e)}static setClient(e){this._client=new Os(e)}static async textRequest(e,t,r,n){if(
this._client)return this._client.textRequest(e,t,r,n);throw this._createClientError()}static async getText(e,t){if(
this._client)return this._client.getText(e,t);throw this._createClientError()}static async postText(e,t,r){if(
this._client)return Rs.debug(".postJson: ",e,t,r),this._client.postText(e,t,r);throw this._createClientError()}
static async patchText(e,t,r){if(this._client)return Rs.debug(".patchJson: ",e,t,r),this._client.patchText(e,t,r);
throw this._createClientError()}static async putText(e,t,r){if(this._client)return this._client.putText(e,t,r);
throw this._createClientError()}static async deleteText(e,t,r){if(this._client)return this._client.deleteText(e,t,r);
throw this._createClientError()}static async jsonRequest(e,t,r,n){if(this._client)return this._client.jsonRequest(e,t,r,
n);throw this._createClientError()}static async getJson(e,t){if(this._client)return this._client.getJson(e,t);
throw this._createClientError()}static async postJson(e,t,r){if(this._client)return Rs.debug(".postJson: ",e,t,r),
this._client.postJson(e,t,r);throw this._createClientError()}static async patchJson(e,t,r){if(this._client
)return this._client.patchJson(e,t,r);throw this._createClientError()}static async putJson(e,t,r){if(this._client
)return this._client.putJson(e,t,r);throw this._createClientError()}static async deleteJson(e,t,r){if(this._client
)return this._client.deleteJson(e,t,r);throw this._createClientError()}static _createClientError(){return new TypeError(
"RequestClient: You must initialize implementation first using HgFrontend.initialize() or HgNode.initialize()")}}o(Os,
"_client",void 0),Mi=v,Gi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},
zi=function(e){return"function"==typeof e?e:Mi},Vi=function(e,t){return(Ji(e)?Gi:$i)(e,zi(t))},Hi=$i=Lo,Bi=S,Qi=l,
Ki=function(e,n){var i=-1,o=Bi(e)?Array(e.length):[];return Hi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Xi=Ji=Jo,
Yi=function(e,t){return(Xi(e)?Wi:Ki)(e,Qi(t))},Zi=Wi=Ie,eo=function(t,e){return Zi(e,function(e){return t[e]})},to=P,
ro=function(e){return null==e?[]:eo(e,to(e))},y=Object.prototype,no=y.hasOwnProperty,io=function(e,t){
return null!=e&&no.call(e,t)},oo=r,so=function(e,t){return null!=e&&oo(e,t,io)},ao=ze,uo=as,lo=Math.max,co=function(e,t,
r){var n=null==e?0:e.length;return n?((r=null==r?0:uo(r))<0&&(r=lo(n+r,0)),ao(e,t,r)):-1},ho=us,po=Jo,
fo=O?O.isConcatSpreadable:void 0,go=function(e){return po(e)||ho(e)||!!(fo&&e&&e[fo])},vo=_o=mr,Eo=function e(t,r,n,i,o
){var s,a=-1,u=t.length;for(n=n||go,o=o||[];++a<u;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):_o(o,s):i||(o[o.length]=s);
return o},yo=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},bo=function(){var e,t,r,
n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return vo(To(t)?yo(t):[t]
,Eo(e,1))},Ro=Lo,Oo=fr,mo=l,Ao=function(e,n){var i;return Ro(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},So=To=Jo,wo=u,
No=function(e,t,r){var n=So(e)?Oo:Ao;return r&&wo(e,t,r)&&(t=void 0),n(e,mo(t))};const ms=q.createLogger("Headers");
class As{static setLogLevel(e){ms.setLogLevel(e)}constructor(e){o(this,"_value",void 0),o(this,"_uninitializedValue",
void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){var t=this._value,r=this._uninitializedValue;
try{r&&(this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,this._uninitializedValue=r,e}}
clear(){this._value={},this._uninitializedValue=void 0}add(e,t){this._uninitializedValue&&this._initializeValue(),
ms.debug("add header: ",e,t),e=e.toLowerCase();var r=this._value&&so(this._value,e)?this._value[e]:void 0;
void 0===this._value?this._value={[e]:t}:void 0!==r?ye(r)?this._value=d(d({},this._value),{},{[e]:bo([],r,[t])}
):this._value=d(d({},this._value),{},{[e]:[r,t]}):this._value=d(d({},this._value),{},{[e]:t})}containsKey(e){
return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),so(this._value,e)}isEmpty(){
this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===he(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=he(this._value),
Vi(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),so(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),ye(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),c(e)){const r=e;if(!ae(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");Vi(t,e=>{this.add(r,e)})}else{const n=e;Vi(he(
n),t=>{var e=n[t];ye(e)?Vi(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e),r=d({},this._value);
return r&&so(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=d(d({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),Vi(he(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;var e;return!r||this.isEmpty()?"Headers()":(e=he(r
),`Headers(${Yi(e,e=>{const t=r[e];return t?ae(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(
", "):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e}).join("; ")})`)}clone(){
return this._uninitializedValue&&this._initializeValue(),new As(this._value?d({},this._value):void 0)}}class Ss{
constructor(e){o(this,"_ai",void 0),this._ai=e}async main(e){var t;return 0===e.length?T.USAGE:([e,...t]=e,
"ai"===e?this._ai.main(t):(console.error("Unknown command: "+e),T.COMMAND_NOT_FOUND))}async ai(e){return this._ai.main(e
)}}const ws=!("production"===(m=null!=(e=function(e){if(void 0!==e&&!(!(e=""+e)||e.startsWith("%{")&&e.endsWith("}"))
)return e}("production"))?e:"development")||"test"===m),Ns=((w=Po={}).DAVINCI="text-davinci-003",
w.DAVINCI_EDIT_TEXT="text-davinci-edit-001",w.DAVINCI_EDIT_CODE="code-davinci-edit-001",w.CURIE="text-curie-001",
w.BABBAGE="text-babbage-001",w.ADA="text-ada-001",w.CONTENT_FILTER="content-filter-alpha",w.CODEX="code-davinci-002",
q.createLogger("HgAiCommandServiceImpl"));class Ps{constructor(e){o(this,"_iterations",void 0),o(this,"_client",void 0),
o(this,"_suffix",void 0),o(this,"_language",void 0),o(this,"_model",void 0),o(this,"_echo",void 0),o(this,"_user",void 0
),o(this,"_stop",void 0),o(this,"_logProbs",void 0),o(this,"_bestOf",void 0),o(this,"_maxTokens",void 0),o(this,"_n",
void 0),o(this,"_frequencyPenalty",void 0),o(this,"_presencePenalty",void 0),o(this,"_topP",void 0),o(this,
"_temperature",void 0),this._client=e}setIterations(e){this._iterations=e}setLanguage(e){this._language=e}setSuffix(e){
this._suffix=e}setModel(e){this._model=e}setStop(e){this._stop=e}setUser(e){this._user=e}setLogProbs(e){this._logProbs=e
}setBestOf(e){this._bestOf=e}setPresencePenalty(e){this._presencePenalty=e}setFrequencyPenalty(e){
this._frequencyPenalty=e}setEcho(e){this._echo=e}setN(e){this._n=e}setTopP(e){this._topP=e}setTemperature(e){
this._temperature=e}setMaxTokens(e){this._maxTokens=e}async main(t){if(0===t.length)return T.USAGE;try{var[e,...r]=t;
switch(e){case"c":case"comp":case"completion":return await this.completion(r);case"e":case"edit":return await this.edit(
r);case"t":case"test":return await this.test(r);case"d":case"doc":case"document":return await this.document(r);case"dd":
case"desc":case"describe":return await this.describe(r)}return console.error("Unknown command: "+e),T.COMMAND_NOT_FOUND
}catch(e){if(Ae(t=null==e?void 0:e.body))return console.error(`ERROR: [${t.error.type}] `+t.error.message),
T.GENERAL_ERRORS;throw e}}async edit(e){var t,r,n,i,o,s,a,u;if(0===e.length)return T.USAGE;var[e,...l
]=await this._populateFiles(e),l=l.join("\n\n"),c=this._model,d=this._temperature,h=this._topP,p=this._n,f=void 0!==c,
_=void 0!==p,g=void 0!==d,v=void 0!==h;try{return r=await(v?this._client.getEdit(e,l,c,p,d,h):g?this._client.getEdit(e,l
,c,p,d):_?this._client.getEdit(e,l,c,p):f?this._client.getEdit(e,l,c):this._client.getEdit(e,l)),n=E(r.choices,e=>!Se(e)
),s=void 0!==(o=(i=E(r.choices,e=>Se(e))).shift()),a=!!n.length,u=!!i.length,s&&console.log(null!=(
t=null==o?void 0:o.text)?t:""),u&&console.warn("Alternative choices: "+JSON.stringify(i,null,2)),a&&console.error(
"Other items detected: "+JSON.stringify(n,null,2)),!a&&s?T.OK:T.GENERAL_ERRORS}catch(e){if(Ae(e))return console.error(
`Error: [${e.error.type}]: `+e.error.message),T.GENERAL_ERRORS;throw e}}async completion(e){var t,r,n,i,o,s,a,u;if(
0===e.length)return T.USAGE;Ns.debug("args = ",e),e=(await this._populateFiles(e)).join("\n\n"),Ns.debug(
`prompt = "${e}"`);try{return r=await this._client.getCompletion(e,this._model,this._maxTokens,this._temperature,
this._topP,this._frequencyPenalty,this._presencePenalty),Ns.debug("result = ",r),n=E(r.choices,e=>!Ne(e)),s=void 0!==(
o=(i=E(r.choices,e=>Ne(e))).shift()),a=!!n.length,u=!!i.length,s&&console.log(null!=(t=null==o?void 0:o.text)?t:""),
u&&console.warn("Alternative choices: "+JSON.stringify(i,null,2)),a&&console.error(
"Other items detected: "+JSON.stringify(n,null,2)),!a&&s?T.OK:T.GENERAL_ERRORS}catch(e){if(Ae(e))return console.error(
`Error: [${e.error.type}]: `+e.error.message),T.GENERAL_ERRORS;throw e}}async test(e){
void 0===this._model&&this.setModel(Po.DAVINCI_EDIT_CODE),void 0===this._n&&this.setN(1),
void 0===this._temperature&&this.setTemperature(0);var t=null!=(t=this._language)?t:"TypeScript",r=(Ns.debug(
"test: language: ",t),Le("ExampleClassName","exampleMethodName","should ...")),t=qe(`// {{LANG}}
// Write test cases.
// Framework: {{FRAMEWORK}}

{{EXAMPLES}}`,{"{{LANG}}":null!=t?t:"TypeScript","{{FRAMEWORK}}":"Jest","{{EXAMPLES}}":null!=r?r:Le()});
return this.edit([t,...e])}async document(e){var t;return 0===e.length?T.USAGE:(t=null!=(t=this._language
)?t:"TypeScript",Ns.debug("document: language: ",t),void 0===this._model&&this.setModel(Po.DAVINCI_EDIT_CODE),
void 0===this._n&&this.setN(1),void 0===this._temperature&&this.setTemperature(.1),void 0===this._topP&&this.setTopP(.9)
,void 0===this._iterations&&this.setIterations(4),t=qe(`// {{LANG}}
// Document using {{FRAMEWORK}}
`,{"{{LANG}}":null!=t?t:"TypeScript","{{FRAMEWORK}}":"JSDoc"}),this.edit([t,...e]))}async describe(e){var t;if(
0===e.length)return T.USAGE;Ns.debug("describe: args: ",e),void 0===this._model&&this.setModel(Po.DAVINCI),
void 0===this._maxTokens&&this.setMaxTokens(3600),void 0===this._temperature&&this.setTemperature(.1),
void 0===this._topP&&this.setTopP(.9),t=null!=(t=this._language)?t:"TypeScript",Ns.debug("describe: language: ",t);
let r=!1;if("verbose"===e[0]){var[,...n]=e;if(e=n,r=!0,0===e.length)return T.USAGE;Ns.debug("describe: params: ",e,r)}
return n=qe(r?`Let's go step by step.
Describe in detail what this {{LANG}} does?`:`Let's go step by step.
Describe what this {{LANG}} does?`,{"{{LANG}}":null!=t?t:"TypeScript"}),Ns.debug("describe: instruction: ",n),
this.completion([n,...e])}async _populateFiles(e){return Yi(e,e=>Fo.existsSync(e)?Fo.readFileSync(e,{encoding:"utf8"}
).toString():e)}}const U=q.createLogger("HttpService");n={REQUEST_STARTED:"HttpService:requestStarted",
REQUEST_STOPPED:"HttpService:requestStopped"};class Cs{static setLogLevel(e){U.setLogLevel(e),Os.setLogLevel(e)}
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
`Started GET request to "${e} "(${this._requestCount} requests)`),await Os.getJson(e,t)}finally{--this._requestCount,
this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"GET"),U.debug(
`Stopped GET request to "${e}" (${this._requestCount} requests)`)}}static async postJson(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postJson: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"POST"),U.debug(
`Started POST request to "${e}" (${this._requestCount} requests)`),await Os.postJson(e,t,r)}finally{--this._requestCount
,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"POST"),U.debug(
`Stopped POST request to "${e}" (${this._requestCount} requests)`)}}static async deleteJson(e,t){if(
this._requestCount>=this._requestLimit)throw new TypeError("postJson: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"DELETE"),U.debug(
`Started DELETE request to "${e}" (${this._requestCount} requests)`),await Os.deleteJson(e,t)}finally{
--this._requestCount,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,
"DELETE"),U.debug(`Stopped DELETE request to "${e}" (${this._requestCount} requests)`)}}static async getText(e,t){if(
this._requestCount>=this._requestLimit)throw new TypeError("getText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"GET"),U.debug(
`Started GET request to "${e} "(${this._requestCount} requests)`),await Os.getText(e,t)}finally{--this._requestCount,
this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"GET"),U.debug(
`Stopped GET request to "${e}" (${this._requestCount} requests)`)}}static async postText(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"POST"),U.debug(
`Started POST request to "${e}" (${this._requestCount} requests)`),await Os.postText(e,t,r)}finally{--this._requestCount
,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,"POST"),U.debug(
`Stopped POST request to "${e}" (${this._requestCount} requests)`)}}static async deleteText(e,t,r){if(
this._requestCount>=this._requestLimit)throw new TypeError("postText: Too many request: "+this._requestCount);try{
return this._baseApiUrl&&e.startsWith("/api")&&(e=""+this._baseApiUrl+e.substring("/api".length)),this._requestCount+=1,
this._observer.hasCallbacks(n.REQUEST_STARTED)&&this._observer.triggerEvent(n.REQUEST_STARTED,e,"DELETE"),U.debug(
`Started DELETE request to "${e}" (${this._requestCount} requests)`),await Os.deleteText(e,r)}finally{
--this._requestCount,this._observer.hasCallbacks(n.REQUEST_STOPPED)&&this._observer.triggerEvent(n.REQUEST_STOPPED,e,
"DELETE"),U.debug(`Stopped DELETE request to "${e}" (${this._requestCount} requests)`)}}}o(Cs,"_requestLimit",100),o(Cs,
"_baseApiUrl",void 0),o(Cs,"_requestCount",0),o(Cs,"_observer",new class{getName(){return this._name}constructor(e){o(
this,"_name",void 0),o(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,
this._callbacks=void 0}hasCallbacks(e){return so(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(
e=this._callbacks[t],Vi(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t.toString()}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t.toString()}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=E(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e.toString(
)}"`)}async waitForEvent(i,o){await new Promise((r,n)=>{try{let e=void 0,t=void 0;e=setTimeout(()=>{try{e=void 0,t&&(t()
,t=void 0),r()}catch(e){n(e)}},o),t=this.listenEvent(i,()=>{try{e&&(clearTimeout(e),e=void 0),t&&(t(),t=void 0),r()
}catch(e){n(e)}})}catch(e){n(e)}})}}("HttpService")),o(Cs,"Event",n);class qs{static createBearerHeader(e){
return"Bearer "+e}static parseBearerToken(e){var t="Bearer ";if(Ni(e,t))return He(e.substring(t.length))}}
const Ls=q.createLogger("HttpOpenAiClient");class Us{static setLogLevel(e){Ls.setLogLevel(e),Cs.setLogLevel(e)}
static setDefaultUrl(e){this._defaultUrl=e}static getDefaultUrl(){return this._defaultUrl}static create(e,
t=Us._defaultUrl){return new Us(e,t)}constructor(e,t=Us._defaultUrl){o(this,"_url",void 0),o(this,"_apiKey",void 0),
this._url=t,this._apiKey=e}getUrl(){return this._url}async getCompletion(e,t,r,n,i,o,s){if(e=function(e,t,r,n,i,o,s){if(
!c(e))throw new TypeError("Invalid OpenAiCompletionRequestDTO.prompt: "+e);if(!c(t)&&!K(t))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.model: "+t);if(!ne(r))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.max_tokens: "+r);if(!ne(n))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.temperature: "+n);if(!ne(i))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.top_p: "+i);if(!ne(o))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.frequency_penalty: "+o);if(ne(s))return d(d(d(d(d({prompt:e,
model:null!=t?t:Po.DAVINCI},h(r)?{max_tokens:r}:{}),h(n)?{temperature:n}:{}),h(i)?{top_p:i}:{}),h(o)?{
frequency_penalty:o}:{}),h(s)?{presence_penalty:s}:{});throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.presence_penalty: "+s)}(e,t,r,n,i,o,s),t=Us._getHeaders(this._apiKey),Ls.debug(
"getCompletion: body = ",e),ge(n=r=await Cs.postJson(this._url+"/v1/completions",e,t))&&Te(n,["id","object","created",
"model","choices","usage"])&&c(null==n?void 0:n.id)&&c(null==n?void 0:n.object)&&h(null==n?void 0:n.created)&&c(
null==n?void 0:n.model)&&ue(null==n?void 0:n.choices,Pe)&&ge(i=null==n?void 0:n.usage)&&be(i,["prompt_tokens",
"completion_tokens","total_tokens"])&&h(null==i?void 0:i.prompt_tokens)&&h(null==i?void 0:i.completion_tokens)&&h(
null==i?void 0:i.total_tokens))return Ls.debug("getCompletion: result = ",r),r;throw Ls.error("getCompletion: result = "
,r),new TypeError("Result was not OpenAiCompletionResponseDTO: "+Q([ve(o=r),Re(o,["id","object","created","model",
"choices","usage"]),a("id",X(null==o?void 0:o.id)),a("object",X(null==o?void 0:o.object)),a("created",re(
null==o?void 0:o.created)),a("model",X(null==o?void 0:o.model)),a("choices",le(
"OpenAiCompletionResponseChoice|OpenAiError",Ce,null==o?void 0:o.choices,Pe)),a("usage",Q([ve(s=null==o?void 0:o.usage),
Oe(s,["prompt_tokens","completion_tokens","total_tokens"]),a("prompt_tokens",re(null==s?void 0:s.prompt_tokens)),a(
"completion_tokens",re(null==s?void 0:s.completion_tokens)),a("total_tokens",re(null==s?void 0:s.total_tokens))]))]))}
async getEdit(e,t,r,n,i,o){if(e=function(e,t,r,n,i,o){if(!c(e))throw new TypeError(
"Invalid OpenAiEditRequestDTO.instruction: "+e);if(!Y(t))throw new TypeError("Invalid OpenAiEditRequestDTO.input: "+t);
if(!Y(r))throw new TypeError("Invalid OpenAiEditRequestDTO.model: "+r);if(!ne(n))throw new TypeError(
"Invalid OpenAiEditRequestDTO.n: "+n);if(!ne(i))throw new TypeError("Invalid OpenAiEditRequestDTO.temperature: "+i);if(
ne(o))return d(d(d(d({model:null!=r?r:Po.DAVINCI_EDIT_TEXT,instruction:e},c(t)?{input:t}:{}),h(n)?{n:n}:{}),h(i)?{
temperature:i}:{}),h(o)?{top_p:o}:{});throw new TypeError("Invalid OpenAiEditRequestDTO.top_p: "+o)}(e,t,r,n,i,o),
Ls.debug("getEdit: body = ",e),t=Us._getHeaders(this._apiKey),ge(n=r=await Cs.postJson(this._url+"/v1/edits",e,t))&&be(n
,["object","created","choices","usage"])&&c(null==n?void 0:n.object)&&h(null==n?void 0:n.created)&&ue(
null==n?void 0:n.choices,Se)&&ge(i=null==n?void 0:n.usage)&&be(i,["prompt_tokens","completion_tokens","total_tokens"]
)&&h(null==i?void 0:i.prompt_tokens)&&h(null==i?void 0:i.completion_tokens)&&h(null==i?void 0:i.total_tokens)
)return Ls.debug("getEdit: result = ",r),r;throw Ls.error("getEdit: result = ",r),new TypeError(
"Result was not OpenAiEditResponseDTO: "+Q([ve(o=r),Re(o,["object","created","choices","usage"]),a("object",X(
null==o?void 0:o.object)),a("created",re(null==o?void 0:o.created)),a("choices",le("OpenAiEditResponseChoice",we,
null==o?void 0:o.choices,Se)),a("usage",Q([ve(e=null==o?void 0:o.usage),Oe(e,["prompt_tokens","completion_tokens",
"total_tokens"]),a("prompt_tokens",re(null==e?void 0:e.prompt_tokens)),a("completion_tokens",re(
null==e?void 0:e.completion_tokens)),a("total_tokens",re(null==e?void 0:e.total_tokens))]))]))}static _getHeaders(e){
return{Authorization:qs.createBearerHeader(e)}}}o(Us,"_defaultUrl","https://api.openai.com");class xs{
static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)}catch(e){t(e)
}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,t="utf8"){return(
await xs.getRequestDataAsBuffer(e)).toString(t)}static async getRequestDataAsFormUrlEncoded(e){if(""!==(
e=await xs.getRequestDataAsString(e)))return zo.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await xs.getRequestDataAsString(e)))return JSON.parse(e)}}g="WINDOW"===(A=null!=(b=null!=(p=null==(R=process)||null==(
Do=R.env)?void 0:Do.NOR_REQUEST_CLIENT_MODE)?p:null==(f=process)||null==(N=f.env)?void 0:N.REACT_APP_REQUEST_CLIENT_MODE
)?b:"")||!("undefined"==typeof window||!window.fetch),v="NODE"===A||!g,(S=s={Continue:100,100:"Continue",
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
]="InternalServerError",S[S.NotImplemented=501]="NotImplemented",S[S.BadGateway=502]="BadGateway",S[
S.ServiceUnavailable=503]="ServiceUnavailable",S[S.GatewayTimeout=504]="GatewayTimeout",S[S.HttpVersionNotSupported=505
]="HttpVersionNotSupported",S[S.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",S[S.InsufficientStorage=507
]="InsufficientStorage",S[S.LoopDetected=508]="LoopDetected",S[S.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",S[
S.NotExtended=510]="NotExtended",S[S.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Co={
ERROR:"error"};class Ds extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||function(e){switch(e){
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
return this.status+" "+this.message}toJSON(){return{type:Co.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}}
qo={TEXT:"text/plain",CALENDAR:"text/calendar",JSON:"application/json",
X_WWW_FORM_URLENCODED:"application/x-www-form-urlencoded"};const Is=v?require("fs").promises:void 0,x=q.createLogger(
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
new Ds(r,r+(t?` "${t}"`:"")+` for ${se(e.method)} `+e.url,e.method,e.url,e.body);return e.body}
static _stringifyErrorBodyJson(t){var e,r;try{if(void 0===t)return"";if(e=t){if(Ue(e))return e.message;if(xe(e)
)return e.error;if(c(r=null==e?void 0:e.error))return r}return JSON.stringify(t,null,2)}catch(e){return x.warn(
"Warning! Could not stringify error body: ",e,t),t?JSON.stringify(t,null,2):""}}static _stringifyErrorBodyString(t){
var e,r;try{if(void 0===t)return"";if(e=function(e){try{return JSON.parse(e)}catch(e){}}(t)){if(Ue(e))return e.message;
if(xe(e))return e.error;if(c(r=null==e?void 0:e.error))return r}return t}catch(e){return x.warn(
"Warning! Could not stringify error body: ",e,t),null!=t?t:""}}async _textRequest(e,t,r,n){
return r=await this._httpRequest(t,r,n),n=await xs.getRequestDataAsString(r),{method:e,url:t,statusCode:null!=(
e=null==r?void 0:r.statusCode)?e:0,headers:r.headers,body:n}}async jsonRequest(e,t,r,n){switch(e){case i.GET:
return this._getJson(t,r,n);case i.POST:return this._postJson(t,r,n);case i.PATCH:return this._patchJson(t,r,n);
case i.PUT:return this._putJson(t,r,n);case i.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
"[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{return!!(await Is.stat(t)).isSocket()
}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))x.debug("_checkSocketFile: ENOTDIR: ",e);else{if("ENOENT"!==t
)throw x.error(`_checkSocketFile: Error "${t}" passed on: `,e),e;x.debug("_checkSocketFile: ENOENT: ",e)}}}
async _findSocketFile(e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Go.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){var t;void 0!==this._defaultOptions&&(s=d(d({},
this._defaultOptions),s));const a=e||void 0,u=new $o.default.URL(o);let l;const c=null!=(
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
r=await this._httpRequest(t,r,n),n=await xs.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(
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
`Unsuccessful response with status ${r}: `,e),t=D._stringifyErrorBodyJson(null==e?void 0:e.body),new Ds(r,r+(
t?` "${t}"`:"")+` for ${se(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}const js=q.createLogger(
"initializeHgNode"),ks=(ys.initEnvFromDefaultFiles(),q.setLogLevel(_),ys.setLogLevel(_),q.setLogLevel(_),ys.setLogLevel(
_),D.setLogLevel(C.INFO<=_?C.NONE:_),q.createLogger("main")),Fs=null!=(r=Z(null==(P=process)||null==(y=P.env
)?void 0:y.OPENAI_API_KEY))?r:"";process.env.OPENAI_API_KEY="",async function(e=[]){var t,r,n;try{(class{
static setLogLevel(e){js.setLogLevel(e)}static initialize(e){var t,r;e||(t=require("http"),r=require("https"),e=new D(t,
r)),Os.setClient(e)}}).initialize(),As.setLogLevel(C.INFO),Os.setLogLevel(C.INFO),ks.debug(
"Loglevel as "+q.getLogLevelString());var{scriptName:i,parseStatus:o,exitStatus:s,errorString:a,freeArgs:u,userArgs:l
}=class{static parseArguments(e,t=[],n){var r,i,o,s,a,u,l=null!=(r=t.shift())?r:"",c=null!=(r=t.shift())?r:"";if(!c
)return{parseStatus:1,exitStatus:T.ARGUMENT_PARSE_ERROR,nodePath:l,scriptName:e,freeArgs:[],extraArgs:[],userArgs:{}};
if(0===t.length)return{parseStatus:1,exitStatus:T.ARGUMENT_PARSE_ERROR,nodePath:l,scriptName:c,freeArgs:[],extraArgs:[],
userArgs:{}};let d=!0,h=(o=[],s=[],a={},{}),p={};n&&Vi(he(n),e=>{var[,t,r]=n[e];h[t]=e,p[r]=e});do{if(u=null!=(
i=t.shift())?i:"",d)switch(function(){switch(u){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:
return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:2,exitStatus:T.OK,nodePath:l,scriptName:c,freeArgs:o,
extraArgs:s,userArgs:a};case 1:return{parseStatus:3,exitStatus:T.OK,nodePath:l,scriptName:c,freeArgs:o,extraArgs:s,
userArgs:a};case 2:d=!1;break;default:if(d){if(Ni(u,"-")){if(1<=co(u,"=")){var[f,..._]=u.split("="),_=_.join("=");if(so(
h,f)){var g=h[f],[v]=n[g];a[g]=pe(u,v,0,_);break}if(so(p,f)){var g=p[f],[v]=n[g];a[g]=pe(u,v,0,_);break}}else{if(so(h,u)
){var f=h[u],[_]=n[f];a[f]=fe(u,_);break}if(so(p,u)){var E=p[u],[y]=n[E];a[E]=fe(u,y);break}}return{
errorString:"Unknown argument: "+u,parseStatus:1,exitStatus:T.UNKNOWN_ARGUMENT,nodePath:l,scriptName:c,freeArgs:o,
extraArgs:s,userArgs:a}}o.push(u)}else s.push(u)}}while(1<=t.length);return{parseStatus:0,exitStatus:T.OK,nodePath:l,
scriptName:c,freeArgs:o,extraArgs:s,userArgs:a}}}.parseArguments(bs,e,{language:["s","--language","-l"],model:["s",
"--model","-m"],suffix:["s","--suffix","-s"],stop:["s","--stop","-S"],user:["s","--user","-u"],logProbs:["i",
"--logprobs","-L"],bestOf:["i","--best-of","-b"],presencePenalty:["n","--presence-penalty","-P"],frequencyPenalty:["n",
"--frequency-penalty","-f"],echo:["b","--echo","-e"],n:["i","--n","-n"],topP:["n","--top-p","-p"],temperature:["n",
"--temperature","-t"],maxTokens:["i","--max-tokens","-T"]});return 2===o||3===o?(console.log(De(i)),s):a?(console.error(
"ERROR: "+a),s):(ys.setupDestroyHandler(()=>{ks.debug("Stopping command from process utils event")},e=>{ks.error(
"Error while shutting down the service: ",e)}),t=new Us(Fs),r=new Ps(t),c(null==l?void 0:l.language)&&r.setLanguage(
null==l?void 0:l.language),c(null==l?void 0:l.model)&&r.setModel(null==l?void 0:l.model),c(null==l?void 0:l.suffix
)&&r.setSuffix(null==l?void 0:l.suffix),c(null==l?void 0:l.stop)&&r.setStop(null==l?void 0:l.stop),c(
null==l?void 0:l.user)&&r.setUser(null==l?void 0:l.user),h(null==l?void 0:l.logProbs)&&r.setLogProbs(
null==l?void 0:l.logProbs),h(null==l?void 0:l.bestOf)&&r.setBestOf(null==l?void 0:l.bestOf),h(
null==l?void 0:l.presencePenalty)&&r.setPresencePenalty(null==l?void 0:l.presencePenalty),h(
null==l?void 0:l.frequencyPenalty)&&r.setFrequencyPenalty(null==l?void 0:l.frequencyPenalty),fi(null==l?void 0:l.echo
)&&r.setEcho(null==l?void 0:l.echo),h(null==l?void 0:l.n)&&r.setN(null==l?void 0:l.n),h(null==l?void 0:l.topP
)&&r.setTopP(null==l?void 0:l.topP),h(null==l?void 0:l.temperature)&&r.setTemperature(null==l?void 0:l.temperature),h(
null==l?void 0:l.maxTokens)&&r.setMaxTokens(null==l?void 0:l.maxTokens),(n=await new Ss(r).main(u))===T.USAGE?(
console.log(De(i)),T.USAGE):n)}catch(e){return ks.error("Fatal error: ",e),T.FATAL_ERROR}}(process.argv).then(e=>{
process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
