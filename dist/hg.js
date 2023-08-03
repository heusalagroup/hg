#!/usr/bin/env node
"use strict";function I(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(
n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),
r.push.apply(r,n)),r}function p(e){for(var n,t=1;t<arguments.length;t++)n=null!=arguments[t]?arguments[t]:{},t%2?I(
Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,
Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,
Object.getOwnPropertyDescriptor(n,t))});return e}function s(t,e,n){var r;(e="symbol"==typeof(r=function(t){var e;if(
"object"!=typeof t||null===t)return t;if(void 0===(e=t[Symbol.toPrimitive]))return String(t);if("object"!=typeof(
e=e.call(t,"string")))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}(e))?r:String(r)
)in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}function D(t){
return t&&"object"==typeof t&&"default"in t?t:{default:t}}function k(t){var e,n=-1,r=null==t?0:t.length;for(this.clear(
);++n<r;)e=t[n],this.set(e[0],e[1])}function F(t){var e,n=-1,r=null==t?0:t.length;for(this.clear();++n<r;)e=t[n],
this.set(e[0],e[1])}function $(t){var e,n=-1,r=null==t?0:t.length;for(this.clear();++n<r;)e=t[n],this.set(e[0],e[1])}
function M(t){t=this.__data__=new Wn(t),this.size=t.size}function z(t){var e=-1,n=null==t?0:t.length;for(
this.__data__=new Jn;++e<n;)this.add(t[e])}function G(r,i){function o(){var t=arguments,e=i?i.apply(this,t):t[0],
n=o.cache;return n.has(e)?n.get(e):(t=r.apply(this,t),o.cache=n.set(e,t)||n,t)}if(
"function"!=typeof r||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");return o.cache=new(
G.Cache||Hr),o}function B(t){return"not "+t}function W(t){return t.join(" or ")}function J(t){return t===N}function H(t
){return Ae(t)?t:$i(t,t=>J(t))?N:y(t,t=>!J(t)&&!!t).join(", ")}function u(t,e){return J(e=H(e))?N:`property "${t}" `+e}
function V(t){return void 0===t}function K(t){return Zi(t)}function l(t){return eo(t)}function X(t){return l(t
)?N:"not number"}function Q(t){return V(t)||l(t)}function Z(t){return V(t)||K(t)||l(t)}function Y(t){var e;if(null!=t
)return tt(t)?t:Ae(t)&&0===(t=pu(t)).length||!tt(e=io(t))||e.toFixed(0)!==t?void 0:e}function tt(t){return Qi(t)}
function et(t){return Ye(t)}function h(t){return Ae(t)}function nt(t){return h(t)?N:"not string"}function rt(t){
return V(t)||h(t)}function it(t){if(void 0!==t&&""!==t)return""+t}function ot(t){if(null!=t&&""!==t)return fo(t)?t:!![
"true","t","on","1","enabled"].includes((""+t).toLowerCase())||!["false","f","off","0","disabled"].includes((""+t
).toLowerCase())&&void 0}function st(t){if(!t.startsWith("%{")||!t.endsWith("}"))return it(t)}function ut(t){if(l(t)
)switch(t){case i.OPTIONS:return"options";case i.GET:return"get";case i.POST:return"post";case i.PUT:return"put";
case i.DELETE:return"delete";case i.PATCH:return"patch";case i.TRACE:return"trace";case i.HEAD:return"head"}
throw new TypeError("Unsupported value for stringifyRequestMethod(): "+t)}function at(t){if(l(e=t)&&0<=e&&e<=7)return t;
var e;if(h(t))switch(t=t.toLowerCase()){case"options":return i.OPTIONS;case"get":return i.GET;case"post":return i.POST;
case"put":return i.PUT;case"delete":return i.DELETE;case"patch":return i.PATCH;case"trace":return i.TRACE;case"head":
return i.HEAD}throw new TypeError(`Cannot parse value "${t}" as a valid RequestMethod`)}function ct(t,e){return $i(t,e)}
function lt(t){return $s(t)}function ht(t,e=void 0,n=void 0,r=void 0){var i;return!(!$s(t)||(i=null!=(
i=null==t?void 0:t.length)?i:0,void 0!==n&&i<n)||void 0!==r&&r<i)&&(void 0===e||ct(t,e))}function ft(t,e,n,r=void 0,
i=void 0,o=void 0){return ht(n,r,i,o)?N:!lt(n)||(null==n?void 0:n.length)<1?B(t):B(t)+": "+H(g(n,t=>e(t)))}function R(t,
e=h){var n;return lt(t)?(n=g(t,(t,e)=>e),y(n,t=>e(t))):ee(t)?(n=Reflect.ownKeys(t),y(n,t=>e(t))):[]}function dt(t,e,n,r,
i){var o,s,u;switch(e){case"b":if(o=t,void 0===(u=ot(s=r)))throw new TypeError(`Argument ${o}: Not a boolean: `+(fo(s
)?N:"not boolean"));return u;case"s":if(o=t,void 0===(u=function(t){if(null!=t)return et(null==t?void 0:t.toString
)?t.toString():""+t}(s=r)))throw new TypeError(`Argument ${o}: Not a string: `+nt(s));return u;case"s+":if(void 0===(
s=it(o=r)))throw new TypeError(`Argument ${t}: Not a string: `+(Ae(u=o)&&u?N:"not non-empty string"));return s;case"n":
if(o=t,u=r,void 0===(s=wu.parseNumber(u)))throw new TypeError(`Argument ${o}: Not a number: `+u);return s;case"i":if(o=t
,void 0===(s=Y(u=r)))throw new TypeError(`Argument ${o}: `+(Vi(u)?N:"not integer"));return s}if(i&&A(i,e)&&et(i[e])
)return i[e](r);throw new TypeError("Unimplemented type: "+e.toString())}function pt(t,e,n){return dt(t,e,0,
"b"===e?"true":"",n)}function gt(t,e){return Zo(t,e)}function _t(...t){return e=>gt(t,t=>t(e))}function vt(t,e=h,
n=void 0){var r;return!!(void 0===n||ee(r=t)&&ct(ns(r),n))&&(r=void 0!==e?e:h,ee(n=t))&&ct(R(n),r)}function yt(t){
return!!ee(t)&&!(t instanceof Date||et(t)||lt(t))&&vt(t,h,void 0)}function Et(t){return yt(t)?N:"not regular object"}
function bt(t){return h(e=t)||l(e)||fo(e)||K(e)||mt(t)||wt(t);var e}function wt(t){return yt(t)&&vt(t,h,_t(bt,V))}
function mt(t){return ht(t,_t(bt,V))}function Rt(t){return t&&t instanceof Au}function Tt(t,e){return ee(t)&&0===(n=e,y(
R(t),t=>!n.includes(t)).length);var n}function At(t,e){return!Su||Tt(t,e)}function Ot(t,e){return Tt(t,e
)?N:"Value had extra properties: "+y(R(t),t=>!e.includes(t))}function St(t,e){return At(t,e
)?N:"Value had extra properties: "+y(R(t),t=>!e.includes(t))}function xt(t){return yt(t)&&At(t,["message","type"])&&h(
null==t?void 0:t.message)&&h(null==t?void 0:t.type)}function Nt(t){return yt(t)&&At(t,["error"])&&xt(
null==t?void 0:t.error)}function Ct(t){return yt(t)&&At(t,["text","index","logprobs","finish_reason"])&&h(
null==t?void 0:t.text)&&l(null==t?void 0:t.index)&&Z(null==t?void 0:t.logprobs)&&rt(null==t?void 0:t.finish_reason)}
function Pt(t){return H([Et(t),St(t,["text","index","logprobs","finish_reason"]),u("text",nt(null==t?void 0:t.text)),u(
"index",X(null==t?void 0:t.index)),u("logprobs",Z(null==t?void 0:t.logprobs)?N:B(W(["number","null","undefined"]))),u(
"finish_reason",rt(null==t?void 0:t.finish_reason)?N:B(W(["string","undefined"])))])}function Lt(t){return yt(t)&&At(t,[
"text","index","logprobs","finish_reason"])&&h(null==t?void 0:t.text)&&l(null==t?void 0:t.index)&&Z(
null==t?void 0:t.logprobs)&&h(null==t?void 0:t.finish_reason)}function jt(t){return Lt(t)||xt(t)}function qt(t){
return jt(t)?N:"Not OpenAiError or OpenAiCompletionResponseChoice"}function Ut(n,r){return R(r).forEach(t=>{var e=r[t];
n=function(t,e,n){if(!h(e))throw new TypeError("replaceAll: from is required");if(!h(t))throw new TypeError(
"replaceAll: value is not a string");if(!h(n))throw new TypeError("replaceAll: to is not a string");if(""===e)return["",
...t.split(""),""].join(n);let r="",i=0,o=t.indexOf(e);for(;o>=i;)r+=t.substring(i,o)+n,i=o+e.length,o=t.indexOf(e,i);
return r+=t.substring(i)}(n,t,e)}),n}function It(t,e,n){return Ut(`describe("{{CLASS_NAME}}", () => {
    describe("{{METHOD_NAME}}", () => {
        it("{{TEST_NAME}}", () => {
        });
    });
});
`,{"{{CLASS_NAME}}":null!=t?t:"ExampleClass","{{METHOD_NAME}}":null!=e?e:"exampleMethod",
"{{TEST_NAME}}":null!=n?n:"should ..."})}function Dt(t){switch(t){case o.Continue:return"Continue";
case o.SwitchingProtocols:return"Switching Protocols";case o.Processing:return"Processing";case o.CheckPoint:
return"Check Point";case o.OK:return"OK";case o.Created:return"Created";case o.Accepted:return"Accepted";
case o.NonAuthoritativeInformation:return"Non-Authoritative Information";case o.NoContent:return"No Content";
case o.ResetContent:return"Reset Content";case o.PartialContent:return"Partial Content";case o.MultiStatus:
return"Multi Status";case o.AlreadyReported:return"Already Reported";case o.IMUsed:return"IM Used";
case o.MultipleChoices:return"Multiple Choices";case o.MovedPermanently:return"Moved Permanently";case o.Found:
return"Found";case o.SeeOther:return"See Other";case o.NotModified:return"Not Modified";case o.TemporaryRedirect:
return"Temporary Redirect";case o.PermanentRedirect:return"Permanent Redirect";case o.BadRequest:return"Bad Request";
case o.Unauthorized:return"Unauthorized";case o.PaymentRequired:return"Payment Required";case o.Forbidden:
return"Forbidden";case o.NotFound:return"Not Found";case o.MethodNotAllowed:return"Method Not Allowed";
case o.NotAcceptable:return"Not Acceptable";case o.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case o.RequestTimeout:return"Request Timeout";case o.Conflict:return"Conflict";case o.Gone:return"Gone";
case o.LengthRequired:return"Length Required";case o.PreconditionFailed:return"Precondition Failed";
case o.PayloadTooLarge:return"Payload Too Large";case o.URITooLong:return"URI Too Long";case o.UnsupportedMediaType:
return"Unsupported Media Type";case o.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case o.ExpectationFailed:return"Expectation Failed";case o.IAmATeapot:return"I Am a Teapot";case o.UnprocessableEntity:
return"Unprocessable Entity";case o.Locked:return"Locked";case o.FailedDependency:return"Failed Dependency";
case o.TooEarly:return"Too Early";case o.UpgradeRequired:return"Upgrade Required";case o.PreconditionRequired:
return"Precondition Required";case o.TooManyRequests:return"Too Many Requests";case o.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case o.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case o.InternalServerError:return"Internal Server Error";case o.NotImplemented:return"Not Implemented";
case o.BadGateway:return"Bad Gateway";case o.ServiceUnavailable:return"Service Unavailable";case o.GatewayTimeout:
return"Gateway Timeout";case o.HttpVersionNotSupported:return"Http Version Not Supported";case o.VariantAlsoNegotiates:
return"Variant Also Negotiates";case o.InsufficientStorage:return"Insufficient Storage";case o.LoopDetected:
return"Loop Detected";case o.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case o.NotExtended:
return"Not Extended";case o.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return t<400?"HTTP Status":"HTTP Error"}}function kt(t,e=void 0){return qu.create(t,e)}function Ft(t){
return t&&t instanceof qu}function $t(t){return yt(t)&&At(t,["error","code"])&&h(null==t?void 0:t.error)&&Q(
null==t?void 0:t.code)}function Mt(t){return l(t)}function zt(t){return t&&t instanceof Wu}function Gt(t){
return yu?`USAGE: ${t} [OPT(s)] ARG(1) [...ARG(N)]

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

    hg ai desc[ribe] [verbose] CODE            Describe code [in detail]
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
`:`USAGE: ${t} ARG(1) [...ARG(N)]
See https://hg.fi
`}function Bt(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function Wt(t){var e;
return"string"==typeof t?t:Xs(t)?Ks(t,Wt)+"":Qs(t)?Ys?Ys.call(t):"":"0"==(e=t+"")&&1/t==-1/0?"-0":e}function Jt(t){
return t&&t.slice(0,function(t){for(var e=t.length;e--&&tu.test(t.charAt(e)););return e}(t)+1).replace(eu,"")}
function Ht(t,e,n){var r,i,o,s,u,a=t.length;if(n=void 0===n?a:n,!e&&a<=n)return t;for(a=n,s=-1,(a=(u=(i=t).length)<a?u:a
)<0&&(a+=u),u=a<(o=e<0?u<-e?0:u+e:e)?0:a-o>>>0,o>>>=0,r=Array(u);++s<u;)r[s]=i[s+o];return r}function Vt(t){return t!=t}
function Kt(t,e){for(var n=-1,r=t.length;++n<r&&-1<nu(e,t[n],0););return n}function Xt(t){return ru.test(t)}var Qt,Zt,Yt
,te,ee,ne,re,ie,oe,se,ue,ae,ce,le,he,fe,de,pe,ge,_e,ve,ye,Ee,be,we,me,Re,Te,Ae,Oe,Se,xe,Ne,Ce,Pe,Le,je,qe,Ue,Ie,De,e,ke,
Fe,$e,Me,ze,Ge,Be,We,Je,He,Ve,Ke,Xe,Qe,Ze,Ye,tn,en,nn,rn,on,sn,un,an,cn,ln,hn,fn,dn,pn,gn,_n,vn,yn,En,bn,wn,mn,Rn,Tn,An,
On,Sn,xn,Nn,Cn,Pn,Ln,jn,qn,Un,In,Dn,kn,Fn,$n,Mn,zn,Gn,Bn,Wn,Jn,Hn,Vn,Kn,Xn,Qn,Zn,Yn,tr,er,nr,rr,ir,or,sr,ur,ar,cr,lr,hr,
fr,dr,pr,gr,_r,vr,yr,Er,br,wr,mr,Rr,Tr,Ar,Or,Sr,xr,Nr,Cr,Pr,Lr,jr,qr,Ur,Ir,Dr,t,kr,Fr,$r,Mr,zr,Gr,Br,Wr,Jr,Hr,Vr,Kr,Xr,
Qr,Zr,Yr,ti,ei,ni,ri,ii,oi,si,ui,ai,ci,li,hi,fi,di,pi,gi,_i,vi,yi,Ei,bi,wi,mi,Ri,Ti,Ai,Oi,Si,xi,Ni,Ci,Pi,Li,ji,qi,Ui,Ii,
Di,ki,Fi,$i,Mi,zi,Gi,Bi,Wi,y,Ji,Hi,Vi,Ki,Xi,Qi,Zi,Yi,to,eo,n,no,ro,io,oo,so,uo,ao,co,lo,ho,fo,i,T,po,go,_o,vo,yo,Eo,bo,
wo,mo,Ro,To,Ao,g,Oo,So,xo,A,No,Co,Po,Lo,jo,qo,Uo,Io,Do,ko,Fo,$o,Mo,zo,Go,Bo,Wo,Jo,Ho,Vo,Ko,Xo,Qo,Zo,Yo,ts,es,ns,rs,is,os
,r,ss,us,as,cs,ls,hs,fs,ds,ps,o,gs,_s,vs,ys,Es,bs,ws,ms,Rs,Ts,As,a,c,Vu,Ku,f,d,_,Os,Ss,v,E,xs,b,w,m,Ns,Cs,Ps,Ls=require(
"fs"),js=require("path"),O=require("url"),qs=require("querystring"),Us=require("child_process"),Is=D(Ls),Ds=D(js),ks=D(O
),js="object"==typeof(
Qt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
)&&Qt&&Qt.Object===Object&&Qt,O="object"==typeof self&&self&&self.Object===Object&&self,Fs=(O=js||O||Function(
"return this")()).Symbol,$s=Array.isArray,Ms=Object.prototype,zs=Ms.hasOwnProperty,Gs=Ms.toString,
Bs=Fs?Fs.toStringTag:void 0,Ws=Object.prototype.toString,Js=Fs?Fs.toStringTag:void 0,Hs=Ms=function(t){
return null==t?void 0===t?"[object Undefined]":"[object Null]":(Js&&Js in Object(t)?function(t){var e,n,r=zs.call(t,Bs),
i=t[Bs];try{e=!(t[Bs]=void 0)}catch(t){}return n=Gs.call(t),e&&(r?t[Bs]=i:delete t[Bs]),n}:function(t){return Ws.call(t)
})(t)},Vs=Zt=function(t){return null!=t&&"object"==typeof t},Ks=Bt,Xs=$s,Qs=v=function(t){return"symbol"==typeof t||Vs(t
)&&"[object Symbol]"==Hs(t)},Zs=Fs?Fs.prototype:void 0,Ys=Zs?Zs.toString:void 0,tu=/\s/,eu=/^\s+/,nu=Yt=Zs=function(t,e,
n){var r,i,o,s,u,a,c,l;if(e==e){for(i=e,o=n-1,s=(r=t).length;++o<s;)if(r[o]===i)return o}else for(a=Vt,c=(u=t).length,
l=n+-1;++l<c;)if(a(u[l],l,u))return l;return-1},ru=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
iu="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",ou="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",su=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+ou+iu,"g"),uu=Xt,au=te=Wt,cu=Jt,lu=Ht,hu=Kt,fu=ou=function(t){
return(uu(t)?function(t){return t.match(su)||[]}:function(t){return t.split("")})(t)},du=iu=function(t){
return null==t?"":te(t)},pu=function(t,e,n){var r;return(t=du(t))&&(n||void 0===e)?cu(t):t&&(e=au(e))?(n=fu(t),e=fu(e),
r=hu(n,e),e=function(t,e){for(var n=t.length;n--&&-1<Yt(e,t[n],0););return n}(n,e)+1,lu(n,r,e).join("")):t},S={DEBUG:0,
0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"};class gu{constructor(t,e,n){s(this,
"_parentLogger",void 0),s(this,"name",void 0),s(this,"_level",void 0),this.name=t,this._parentLogger=e,
this._level=null!=n?n:void 0}getLogLevel(){var t;return null!=(t=null!=(t=this._level)?t:this._parentLogger.getLogLevel(
))?t:S.DEBUG}setLogLevel(t){return this._level=t,this}debug(...t){this.getLogLevel()<=S.DEBUG&&this._parentLogger.debug(
`[${this.name}]`,...t)}info(...t){this.getLogLevel()<=S.INFO&&this._parentLogger.info(`[${this.name}]`,...t)}warn(...t){
this.getLogLevel()<=S.WARN&&this._parentLogger.warn(`[${this.name}]`,...t)}error(...t){this.getLogLevel(
)<=S.ERROR&&this._parentLogger.error(`[${this.name}]`,...t)}}class x{static setLogLevel(t){
return this._level=null!=t?t:S.DEBUG,this}static getLogLevel(){return this._level}static getLogLevelString(){
var t=this._level;switch(t){case S.DEBUG:return"DEBUG";case S.INFO:return"INFO";case S.WARN:return"WARN";case S.ERROR:
return"ERROR";case S.NONE:return"NONE";default:return"Unknown:"+t}}static setLogger(t){if(!t)throw new TypeError(
"The logger was not defined");this._logger=t}static getLogger(){return this._logger}static debug(...t){
this._level<=S.DEBUG&&this._logger.debug(...t)}static info(...t){this._level<=S.INFO&&this._logger.info(...t)}
static warn(...t){this._level<=S.WARN&&this._logger.warn(...t)}static error(...t){
this._level<=S.ERROR&&this._logger.error(...t)}static createLogger(t){return new gu(t,x)}}s(x,"Level",S),s(x,"_level",
S.DEBUG),s(x,"_logger",new class{constructor(t){s(this,"_level",void 0),this._level=null!=t?t:S.DEBUG}getLogLevel(){
var t;return null!=(t=this._level)?t:S.DEBUG}setLogLevel(t){return this._level=null!=t?t:S.DEBUG,this}debug(...t){
this.getLogLevel()<=S.DEBUG&&console.debug(...t)}info(...t){this.getLogLevel()<=S.INFO&&console.info(...t)}warn(...t){
this.getLogLevel()<=S.WARN&&console.warn(...t)}error(...t){this.getLogLevel()<=S.ERROR&&console.error(...t)}}),ne=Jt,
re=ee=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ie=v,oe=/^[-+]0x[0-9a-f]+$/i,
se=/^0b[01]+$/i,ue=/^0o[0-7]+$/i,ae=parseInt,ce=function(t){var e;return"number"==typeof t?t:ie(t)?NaN:(re(t)&&(
e="function"==typeof t.valueOf?t.valueOf():t,t=re(e)?e+"":e),"string"!=typeof t?0===t?t:+t:(t=ne(t),(e=se.test(t)
)||ue.test(t)?ae(t.slice(2),e?2:8):oe.test(t)?NaN:+t))},le=function(t){return t?(t=ce(t)
)===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0},he=Zs,fe=Zs=function(t){var e=(t=le(t))%1;
return t==t?e?t-e:t:0},de=Math.max,pe=function(t,e,n){var r=null==t?0:t.length;return r?((n=null==n?0:fe(n))<0&&(n=de(
r+n,0)),he(t,e,n)):-1},ge=Wt,_e=Ht,ve=Kt,ye=ou,Ee=iu,be=/^\s+/,we=function(t,e,n){return(t=Ee(t))&&(n||void 0===e
)?t.replace(be,""):t&&(e=ge(e))?(n=ye(t),e=ve(n,ye(e)),_e(n,e).join("")):t};const _u=x.createLogger("ProcessUtils");
class vu{static setLogLevel(t){_u.setLogLevel(t)}static getArguments(){return process.argv.slice(2)}
static parseEnvFileLine(t,e){var n,r;if(!e||!we(e))return t;let i;if((n=pe(e,"="))<0)return(i=pu(e)).length?p(p({},t),{}
,{[i]:""}):t;if(i=e.substring(0,n),i=pu(i),n===e.length-1)return p(p({},t),{},{[e]:""});let o;if('"'!==e[n+1])return(
r=pe(e,"\n",n))<0?(o=(o=e.substring(n+1).trim()).replace(/\\n/g,"\n"),p(p({},t),{},{[i]:o})):(o=(o=e.substring(n+1,r
).trim()).replace(/\\n/g,"\n"),this.parseEnvFileLine(p(p({},t),{},{[i]:o}),e.substring(r+1)));if(0<=(r=pe(e,'"',n+2))
)return o=e.substring(n+2,r),this.parseEnvFileLine(p(p({},t),{},{[i]:o}),e.substring(r+1));throw new TypeError(
"ProcessUtils.parseEnvFileLine: No ending for double quote detected")}static parseEnvString(t){
return vu.parseEnvFileLine({},t)}static parseEnvFile(t){return t=Is.default.readFileSync(t,{encoding:"utf-8"}),
this.parseEnvString(t)}static initEnvFromRecord(t){process.env=p(p({},t),process.env)}static initEnvFromFile(t){
t=vu.parseEnvFile(t),this.initEnvFromRecord(t)}static initEnvFromDefaultFiles(){var t=Ds.default.join(process.cwd(),
".env");Is.default.existsSync(t)&&vu.initEnvFromFile(t)}static setupDestroyHandler(n,r){let i=!1;var t=e=>t=>{
vu._printErrors(e,t);try{i||(i=!0,n())}catch(t){r(t)}};process.on("exit",t("exit")),process.on("SIGTERM",t("SIGTERM")),
process.on("SIGINT",t("SIGINT")),process.on("SIGUSR1",t("SIGUSR1")),process.on("SIGUSR2",t("SIGUSR2")),process.on(
"uncaughtException",t("uncaughtException"))}static _printErrors(t,e){try{"exit"===t?e?_u.debug(
`DEBUG: Closing process because "${t}" event: `,e):_u.debug(`DEBUG: Closing process because "${t}" event`):e?_u.error(
`ERROR: Closing process because "${t}" event: `,e):_u.info(`INFO: Closing process because "${t}" event`)}catch(t){
console.error("Error while printing errors: ",t)}}}Re=$s,Ae=function(t){return"string"==typeof t||!Re(t)&&Te(t
)&&"[object String]"==me(t)},Oe=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0
},ss=function(t,e,n){for(var r,i=-1,o=Object(t),s=n(t),u=s.length;u--&&!1!==e(o[r=s[++i]],r,o););return t},sn=function(t
,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},Se=me=Ms,b=function(t){return xe(t)&&"[object Arguments]"==Se(t)}
,Ne=xe=Te=Zt,Le=Object.prototype,Ce=Le.hasOwnProperty,Pe=Le.propertyIsEnumerable,Le=b(function(){return arguments}()
)?b:function(t){return Ne(t)&&Ce.call(t,"callee")&&!Pe.call(t,"callee")},je={},b={get exports(){return je},set exports(t
){je=t}},d=(E=(E=(d=(d=je)&&!d.nodeType&&d)&&b&&!b.nodeType&&b)&&E.exports===d?O.Buffer:void 0)?E.isBuffer:void 0,
b.exports=d||function(){return!1},qe=/^(?:0|[1-9]\d*)$/,E=function(t,e){var n=typeof t;return!!(
e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&qe.test(t))&&-1<t&&t%1==0&&t<e},Ue=Ms,Ie=b=function(t){
return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991},De=Zt,(e={})["[object Float32Array]"]=e[
"[object Float64Array]"]=e["[object Int8Array]"]=e["[object Int16Array]"]=e["[object Int32Array]"]=e[
"[object Uint8Array]"]=e["[object Uint8ClampedArray]"]=e["[object Uint16Array]"]=e["[object Uint32Array]"]=!0,e[
"[object Arguments]"]=e["[object Array]"]=e["[object ArrayBuffer]"]=e["[object Boolean]"]=e["[object DataView]"]=e[
"[object Date]"]=e["[object Error]"]=e["[object Function]"]=e["[object Map]"]=e["[object Number]"]=e["[object Object]"
]=e["[object RegExp]"]=e["[object Set]"]=e["[object String]"]=e["[object WeakMap]"]=!1,d=function(t){return De(t)&&Ie(
t.length)&&!!e[Ue(t)]},ke=function(e){return function(t){return e(t)}},Fe={},Rs={get exports(){return Fe},set exports(t
){Fe=t}},a=(a=Fe)&&!a.nodeType&&a,Ts=a&&Rs&&!Rs.nodeType&&Rs,As=Ts&&Ts.exports===a&&js.process,a=function(){try{
return Ts&&Ts.require&&Ts.require("util").types||As&&As.binding&&As.binding("util")}catch(t){}}(),Rs.exports=a,Rs=(
js=Fe&&Fe.isTypedArray)?ke(js):d,$e=sn,Me=Le,ze=$s,Ge=je,Be=E,We=a=Rs,js=Object.prototype,Je=js.hasOwnProperty,
He=Object.prototype,Cs=Object.keys,Ps=Object,Ve=function(t){var e=t&&t.constructor;return t===(
"function"==typeof e&&e.prototype||He)},Ke=function(t){return Cs(Ps(t))},d=Object.prototype,Xe=d.hasOwnProperty,Qe=Ms,
Ze=ee,tn=Ye=function(t){return!!Ze(t)&&("[object Function]"==(t=Qe(t)
)||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)},en=b,nn=function(t,e){var n,r=ze(
t),i=!r&&Me(t),o=!r&&!i&&Ge(t),s=!r&&!i&&!o&&We(t),u=r||i||o||s,a=u?$e(t.length,String):[],c=a.length;for(n in t
)!e&&!Je.call(t,n)||u&&("length"==n||o&&("offset"==n||"parent"==n)||s&&("buffer"==n||"byteLength"==n||"byteOffset"==n
)||Be(n,c))||a.push(n);return a},rn=function(t){var e,n;if(!Ve(t))return Ke(t);for(n in e=[],Object(t))Xe.call(t,n
)&&"constructor"!=n&&e.push(n);return e},un=ss,an=sn=function(t){return(on(t)?nn:rn)(t)},cn=on=Rs=function(t){
return null!=t&&en(t.length)&&!tn(t)},ln=js=function(t,e){var n,r,i;if(null!=t){if(!cn(t))return t&&un(t,e,an);for(
n=t.length,r=-1,i=Object(t);++r<n&&!1!==e(i[r],r,i););}return t},d=function(t,r){var i=!0;return ln(t,function(t,e,n){
return i=!!r(t,e,n)}),i},hn=ss=function(t,e){return t===e||t!=t&&e!=e},fn=w=function(t,e){for(var n=t.length;n--;)if(hn(
t[n][0],e))return n;return-1},rr=Array.prototype,dn=rr.splice,_n=gn=pn=w,rr=function(t){var e=this.__data__;return!((
t=fn(e,t))<0||(t==e.length-1?e.pop():dn.call(e,t,1),--this.size,0))},w=function(t){var e=this.__data__;return(t=pn(e,t)
)<0?void 0:e[t][1]},Os=function(t){return-1<gn(this.__data__,t)},_=function(t,e){var n=this.__data__,r=_n(n,t);
return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},k.prototype.clear=function(){this.__data__=[],this.size=0},
k.prototype.delete=rr,k.prototype.get=w,k.prototype.has=Os,k.prototype.set=_,vn=rr=k,w=function(){this.__data__=new vn,
this.size=0},Os=function(t){var e=this.__data__,t=e.delete(t);return this.size=e.size,t},_=function(t){
return this.__data__.get(t)},Hn=function(t){return this.__data__.has(t)},c=O["__core-js_shared__"],c=/[^.]+$/.exec(
c&&c.keys&&c.keys.IE_PROTO||""),yn=c?"Symbol(src)_1."+c:"",c=Function.prototype,En=c.toString,bn=Ye,wn=function(t){
return!!yn&&yn in t},mn=ee,Rn=c=function(t){if(null!=t){try{return En.call(t)}catch(t){}try{return t+""}catch(t){}}
return""},m=/[\\^$.*+?()[\]{}|]/g,Tn=/^\[object .+?Constructor\]$/,r=Function.prototype,t=Object.prototype,r=r.toString,
t=t.hasOwnProperty,An=RegExp("^"+r.call(t).replace(m,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),On=function(t){return!(!mn(t)||wn(t))&&(bn(t
)?An:Tn).test(Rn(t))},Sn=function(t,e){return null==t?void 0:t[e]},t=(r=function(t,e){return t=Sn(t,e),On(t)?t:void 0})(
O,"Map"),m=r(Object,"create"),Nn=xn=m,f=Object.prototype,Cn=f.hasOwnProperty,Pn=m,f=Object.prototype,Ln=f.hasOwnProperty
,jn=m,f=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},m=function(t){var e,
n=this.__data__;return Nn?"__lodash_hash_undefined__"===(e=n[t])?void 0:e:Cn.call(n,t)?n[t]:void 0},n=function(t){
var e=this.__data__;return Pn?void 0!==e[t]:Ln.call(e,t)},hi=function(t,e){var n=this.__data__;
return this.size+=this.has(t)?0:1,n[t]=jn&&void 0===e?"__lodash_hash_undefined__":e,this},F.prototype.clear=function(){
this.__data__=xn?xn(null):{},this.size=0},F.prototype.delete=f,F.prototype.get=m,F.prototype.has=n,F.prototype.set=hi,
qn=F,Un=rr,In=t,Dn=function(t){var e=typeof t;
return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t},Mn=$n=Fn=kn=function(t,e){
return t=t.__data__,Dn(e)?t["string"==typeof e?"string":"hash"]:t.map},f=function(t){return t=kn(this,t).delete(t),
this.size-=t?1:0,t},m=function(t){return Fn(this,t).get(t)},n=function(t){return $n(this,t).has(t)},hi=function(t,e){
var n=Mn(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},$.prototype.clear=function(){this.size=0,
this.__data__={hash:new qn,map:new(In||Un),string:new qn}},$.prototype.delete=f,$.prototype.get=m,$.prototype.has=n,
$.prototype.set=hi,Gn=t,Bn=f=$,Wn=zn=rr,m=Os,n=_,hi=Hn,rr=function(t,e){var n,r=this.__data__;if(r instanceof zn){if(
n=r.__data__,!Gn||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Bn(n)}return r.set(t,e),
this.size=r.size,this},M.prototype.clear=w,M.prototype.delete=m,M.prototype.get=n,M.prototype.has=hi,M.prototype.set=rr,
Os=M,Jn=f,_=function(t){return this.__data__.has(t)},z.prototype.add=z.prototype.push=function(t){
return this.__data__.set(t,"__lodash_hash_undefined__"),this},z.prototype.has=_,Vn=z,Kn=Hn=function(t,e){for(var n=-1,
r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},Xn=function(t,e){return t.has(e)},w=O.Uint8Array,Qn=w,
Zn=ss,Yn=m=function(t,e,n,r,i,o){var s,u,a,c,l,h,f,d=1&n,p=t.length,g=e.length;if(p!=g&&!(d&&p<g))return!1;if(g=o.get(t)
,s=o.get(e),g&&s)return g==e&&s==t;for(u=-1,a=!0,c=2&n?new Vn:void 0,o.set(t,e),o.set(e,t);++u<p;){if(l=t[u],h=e[u],
void 0!==(f=r?d?r(h,l,u,e,t,o):r(l,h,u,t,e,o):f)){if(f)continue;a=!1;break}if(c){if(!Kn(e,function(t,e){if(!Xn(c,e)&&(
l===t||i(l,t,n,r,o)))return c.push(e)})){a=!1;break}}else if(l!==h&&!i(l,h,n,r,o)){a=!1;break}}return o.delete(t),
o.delete(e),a},tr=function(t){var n=-1,r=Array(t.size);return t.forEach(function(t,e){r[++n]=[e,t]}),r},er=function(t){
var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n},n=Fs?Fs.prototype:void 0,nr=n?n.valueOf:void 0,
hi=function(t,e,n,r,i,o,s){var u,a;switch(n){case"[object DataView]":if(
t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":
return!(t.byteLength!=e.byteLength||!o(new Qn(t),new Qn(e)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return Zn(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;
case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":u=tr;case"[object Set]":return u=u||er,!!(
t.size==e.size||1&r)&&((a=s.get(t))?a==e:(r|=2,s.set(t,e),a=Yn(u(t),u(e),r,i,o,s),s.delete(t),a));case"[object Symbol]":
if(nr)return nr.call(t)==nr.call(e)}return!1},ir=rr=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];
return t},or=$s,sr=_=function(t,e){for(var n,r=-1,i=null==t?0:t.length,o=0,s=[];++r<i;)e(n=t[r],r,t)&&(s[o++]=n);
return s},w=Object.prototype,ur=w.propertyIsEnumerable,ar=Object.getOwnPropertySymbols,cr=function(t,e,n){return e=e(t),
or(t)?e:ir(e,n(t))},lr=ar?function(e){return null==e?[]:(e=Object(e),sr(ar(e),function(t){return ur.call(e,t)}))
}:function(){return[]},hr=sn,fr=function(t){return cr(t,hr,lr)},n=Object.prototype,dr=n.hasOwnProperty,w=function(t,e,n,
r,i,o){var s,u,a,c,l,h,f,d,p,g=1&n,_=fr(t),v=_.length;if(v!=fr(e).length&&!g)return!1;for(s=v;s--;)if(u=_[s],!(
g?u in e:dr.call(e,u)))return!1;if(d=o.get(t),p=o.get(e),d&&p)return d==e&&p==t;for(a=!0,o.set(t,e),o.set(e,t),
c=g;++s<v;){if(l=t[u=_[s]],h=e[u],!(void 0===(f=r?g?r(h,l,u,e,t,o):r(l,h,u,t,e,o):f)?l===h||i(l,h,n,r,o):f)){a=!1;break}
c=c||"constructor"==u}return a&&!c&&(d=t.constructor)!=(p=e.constructor)&&"constructor"in t&&"constructor"in e&&!(
"function"==typeof d&&d instanceof d&&"function"==typeof p&&p instanceof p)&&(a=!1),o.delete(t),o.delete(e),a},n=r(O,
"DataView"),xs=r(O,"Promise"),Ss=r(O,"Set"),r=r(O,"WeakMap"),pr=Ms,_r=(gr=c)(O=n),vr=gr(t),yr=gr(xs),Er=gr(Ss),br=gr(r),
c=pr,(O&&"[object DataView]"!=c(new O(new ArrayBuffer(1)))||t&&"[object Map]"!=c(new t)||xs&&"[object Promise]"!=c(
xs.resolve())||Ss&&"[object Set]"!=c(new Ss)||r&&"[object WeakMap]"!=c(new r))&&(c=function(t){var e=pr(t);if(t=(
t="[object Object]"==e?t.constructor:void 0)?gr(t):"")switch(t){case _r:return"[object DataView]";case vr:
return"[object Map]";case yr:return"[object Promise]";case Er:return"[object Set]";case br:return"[object WeakMap]"}
return e}),wr=Os,mr=m,Rr=hi,Tr=w,Ar=c,Or=$s,Sr=je,xr=a,Nr="[object Arguments]",Cr="[object Array]",Pr="[object Object]",
n=Object.prototype,Lr=n.hasOwnProperty,jr=function(t,e,n,r,i,o){var s=Or(t),u=Or(e),a=s?Cr:Ar(t),u=u?Cr:Ar(e),c=(
a=a==Nr?Pr:a)==Pr,l=(u=u==Nr?Pr:u)==Pr;if((u=a==u)&&Sr(t)){if(!Sr(e))return!1;c=!(s=!0)}return u&&!c?(o=o||new wr,s||xr(
t)?mr(t,e,n,r,i,o):Rr(t,e,a,n,r,i,o)):1&n||(s=c&&Lr.call(t,"__wrapped__"),a=l&&Lr.call(e,"__wrapped__"),!s&&!a)?u&&(
o=o||new wr,Tr(t,e,n,r,i,o)):i(s?t.value():t,a?e.value():e,n,r,o=o||new wr)},qr=Zt,Ur=Os,Ir=O=function t(e,n,r,i,o){
return e===n||(null==e||null==n||!qr(e)&&!qr(n)?e!=e&&n!=n:jr(e,n,r,i,t,o))},Dr=ee,kr=t=function(t){return t==t&&!Dr(t)}
,Fr=sn,$r=function(t,e,n,r){var i,o,s,u,a,c,l=n.length,h=l,f=!r;if(null==t)return!h;for(t=Object(t);l--;)if(i=n[l],f&&i[
2]?i[1]!==t[i[0]]:!(i[0]in t))return!1;for(;++l<h;)if(s=t[o=(i=n[l])[0]],u=i[1],f&&i[2]){if(void 0===s&&!(o in t)
)return!1}else if(a=new Ur,!(void 0===(c=r?r(s,u,o,t,e,a):c)?Ir(u,s,3,r,a):c))return!1;return!0},Mr=function(t){for(
var e,n,r=Fr(t),i=r.length;i--;)n=t[e=r[i]],r[i]=[e,n,kr(n)];return r},zr=xs=function(e,n){return function(t){
return null!=t&&t[e]===n&&(void 0!==n||e in Object(t))}},Ss=function(e){var n=Mr(e);return 1==n.length&&n[0][2]?zr(n[0][
0],n[0][1]):function(t){return t===e||$r(t,e,n)}},Gr=$s,Br=v,Wr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
Jr=/^\w*$/,r=function(t,e){var n;return!Gr(t)&&(!("number"!=(n=typeof t)&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Br(t)
)||Jr.test(t)||!Wr.test(t)||null!=e&&t in Object(e))},Hr=f,G.Cache=Hr,
Vr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kr=/\\(\\)?/g,Ns=(
m=G(function(t){var i=[];return 46===t.charCodeAt(0)&&i.push(""),t.replace(Vr,function(t,e,n,r){i.push(n?r.replace(Kr,
"$1"):e||t)}),i},function(t){return 500===Ns.size&&Ns.clear(),t})).cache,Zr=m,Yr=iu,ti=v,oi=ei=function(t,e){return Xr(t
)?t:Qr(t,e)?[t]:Zr(Yr(t))},si=Le,ci=b,fi=function(t,e){return null!=t&&e in Object(t)},di=hi=function(t,e,n){for(var r,i
,o=(e=oi(e,t)).length,s=!(r=-1);++r<o&&(i=li(e[r]),s=null!=t&&n(t,i));)t=t[i];return s||++r!=o?s:!!(o=null==t?0:t.length
)&&ci(o)&&ai(i,o)&&(ui(t)||si(t))},pi=O,gi=ii=function(t,e,n){return void 0===(t=null==t?void 0:ri(t,e))?n:t},
_i=function(t,e){return null!=t&&di(t,e,fi)},yi=t,Ei=xs,wi=ri=function(t,e){for(var n=0,r=(e=ei(e,t)
).length;null!=t&&n<r;)t=t[ni(e[n++])];return n&&n==r?t:void 0},mi=function(e){return function(t){
return null==t?void 0:t[e]}},Ri=function(e){return function(t){return wi(t,e)}},Ti=vi=Qr=r,Ai=bi=li=ni=function(t){var e
return"string"==typeof t||ti(t)?t:"0"==(e=t+"")&&1/t==-1/0?"-0":e},Oi=Ss,Si=function(n,r){return vi(n)&&yi(r)?Ei(bi(n),r
):function(t){var e=gi(t,n);return void 0===e&&e===r?_i(t,n):pi(r,e,3)}},xi=w=function(t){return t},Ci=function(t){
return Ti(t)?mi(Ai(t)):Ri(t)},Pi=ss,Li=Rs,ji=ai=E,qi=ee,Ui=Oe,Ii=d,Fi=c=function(t,e,n){var r;return!!qi(n)&&!!(
"number"==(r=typeof e)?Li(n)&&ji(e,n.length):"string"==r&&e in n)&&Pi(n[e],t)},$i=function(t,e,n){var r=ki(t)?Ui:Ii;
return n&&Fi(t,e,n)&&(e=void 0),r(t,Di(e))},Mi=js,zi=_,Gi=function(t,r){var i=[];return Mi(t,function(t,e,n){r(t,e,n
)&&i.push(t)}),i},Bi=Di=a=function(t){return"function"==typeof t?t:null==t?xi:"object"==typeof t?Ni(t)?Si(t[0],t[1]):Oi(
t):Ci(t)},Wi=ki=Ni=ui=Xr=$s,y=function(t,e){return(Wi(t)?zi:Gi)(t,Bi(e))};const N="OK",yu=(Ji={},Vu={get exports(){
return Ji},set exports(t){Ji=t}},Ku=Ji,function(){function Po(t,e,n){switch(n.length){case 0:return t.call(e);case 1:
return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}
function us(t,e,n,r){for(var i,o=-1,s=null==t?0:t.length;++o<s;)e(r,i=t[o],n(i),t);return r}function Lo(t,e){for(
var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function as(t,e){for(var n=-1,
r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function jo(t,e){for(var n,r=-1,i=null==t?0:t.length,o=0,
s=[];++r<i;)e(n=t[r],r,t)&&(s[o++]=n);return s}function cs(t,e){return!(null==t||!t.length)&&-1<Io(t,e,0)}function ls(t,
e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}function qo(t,e){for(var n=-1,
r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function Uo(t,e){for(var n=-1,r=e.length,
i=t.length;++n<r;)t[i+n]=e[n];return t}function hs(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;
)n=e(n,t[i],i,t);return n}function fs(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);
return n}function ds(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function ps(t,r,e){
var i;return e(t,function(t,e,n){if(r(t,e,n))return i=e,!1}),i}function gs(t,e,n,r){for(var i=t.length,o=n+(r?1:-1
);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}function Io(t,e,n){if(e!=e)return gs(t,vs,n);for(var r=t,i=e,o=n-1,
s=r.length;++o<s;)if(r[o]===i)return o;return-1}function _s(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e)
)return i;return-1}function vs(t){return t!=t}function ys(t,e){var n=null==t?0:t.length;return n?ws(t,e)/n:NaN}
function Es(e){return function(t){return null==t?Go:t[e]}}function s(e){return function(t){return null==e?Go:e[t]}}
function bs(t,r,i,o,e){return e(t,function(t,e,n){i=o?(o=!1,t):r(i,t,e,n)}),i}function ws(t,e){for(var n,r,i=-1,
o=t.length;++i<o;)(r=e(t[i]))!==Go&&(n=n===Go?r:n+r);return n}function ms(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);
return r}function Rs(t){return t&&t.slice(0,Ps(t)+1).replace(Au,"")}function Do(e){return function(t){return e(t)}}
function Ts(e,t){return qo(t,function(t){return e[t]})}function ko(t,e){return t.has(e)}function As(t,e){for(var n=-1,
r=t.length;++n<r&&-1<Io(e,t[n],0););return n}function Os(t,e){for(var n=t.length;n--&&-1<Io(e,t[n],0););return n}
function Ss(t){return"\\"+u[t]}function Fo(t){return S.test(t)}function xs(t){var n=-1,r=Array(t.size);return t.forEach(
function(t,e){r[++n]=[e,t]}),r}function Ns(e,n){return function(t){return e(n(t))}}function $o(t,e){for(var n,r=-1,
i=t.length,o=0,s=[];++r<i;)(n=t[r])!==e&&n!==Ws||(t[r]=Ws,s[o++]=r);return s}function Cs(t){var e=-1,n=Array(t.size);
return t.forEach(function(t){n[++e]=t}),n}function Mo(t){return(Fo(t)?function(t){for(var e=O.lastIndex=0;O.test(t);)++e
return e}:c)(t)}function zo(t){return Fo(t)?t.match(O)||[]:t.split("")}function Ps(t){for(var e=t.length;e--&&l.test(
t.charAt(e)););return e}var Go,Bo,u,Ls,js,Wo,t,qs,a,Us,Is,Ds,ks,Fs,$s,c,Ms,zs,Gs,Jo,Ho="Expected a function",
Bs="__lodash_hash_undefined__",Ws="__lodash_placeholder__",Vo=9007199254740991,Ko=4294967295,Js=[["ary",128],["bind",1],
["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],
Xo="[object Arguments]",Hs="[object Array]",Qo="[object Boolean]",Zo="[object Date]",Vs="[object Error]",
Ks="[object Function]",Xs="[object GeneratorFunction]",Yo="[object Map]",ts="[object Number]",es="[object Object]",
Qs="[object Promise]",ns="[object RegExp]",rs="[object Set]",is="[object String]",Zs="[object Symbol]",
Ys="[object WeakMap]",tu="[object ArrayBuffer]",os="[object DataView]",eu="[object Float32Array]",
nu="[object Float64Array]",ru="[object Int8Array]",iu="[object Int16Array]",ou="[object Int32Array]",
su="[object Uint8Array]",uu="[object Uint8ClampedArray]",au="[object Uint16Array]",cu="[object Uint32Array]",
lu=/\b__p \+= '';/g,hu=/\b(__p \+=) '' \+/g,fu=/(__e\(.*?\)|\b__t\)) \+\n'';/g,du=/&(?:amp|lt|gt|quot|#39);/g,
pu=/[&<>"']/g,gu=RegExp(du.source),_u=RegExp(pu.source),vu=/<%-([\s\S]+?)%>/g,yu=/<%([\s\S]+?)%>/g,Eu=/<%=([\s\S]+?)%>/g
,bu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wu=/^\w*$/,
mu=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
Ru=/[\\^$.*+?()[\]{}|]/g,Tu=RegExp(Ru.source),Au=/^\s+/,l=/\s/,Ou=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
Su=/\{\n\/\* \[wrapped with (.+)\] \*/,xu=/,? & /,Nu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Cu=/[()=,{}\[\]\/\s]/,
Pu=/\\(\\)?/g,Lu=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ju=/\w*$/,qu=/^[-+]0x[0-9a-f]+$/i,Uu=/^0b[01]+$/i,
Iu=/^\[object .+?Constructor\]$/,Du=/^0o[0-7]+$/i,ku=/^(?:0|[1-9]\d*)$/,Fu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
,$u=/($^)/,Mu=/['\n\r\u2028\u2029\\]/g,h="\\ud800-\\udfff",f="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
e="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",d="\\ufe0e\\ufe0f",p="["+h+"]",g="["+(
w="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"
)+"]",i="["+f+"]",o="["+e+"]",_="["+n+"]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",
E="\\u200d",b="(?:"+_+"|"+(w="[^"+h+w+"\\d+"+e+n+r+"]")+")",w="(?:"+(r="["+r+"]")+"|"+w+")",
m="(?:['’](?:d|ll|m|re|s|t|ve))?",R="(?:['’](?:D|LL|M|RE|S|T|VE))?",T=(T="["+d+"]?")+(A="(?:"+i+"|"+(
e="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:"+E+"(?:"+[n="[^"+h+"]",v,y].join("|")+")"+T+A+")*",A="(?:"+[o,v,y].join("|"
)+")"+T,o="(?:"+[n+i+"?",i,v,y,p].join("|")+")",zu=RegExp("['’]","g"),Gu=RegExp(i,"g"),O=RegExp(e+"(?="+e+")|"+o+T,"g"),
Bu=RegExp([r+"?"+_+"+"+m+"(?="+[g,r,"$"].join("|")+")",w+"+"+R+"(?="+[g,r+b,"$"].join("|")+")",r+"?"+b+"+"+m,r+"+"+R,
"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",A].join("|"
),"g"),S=RegExp("["+E+h+f+d+"]"),Wu=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ju=["Array",
"Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map",
"Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array",
"Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Hu=-1,ss={};ss[eu]=ss[nu]=ss[ru]=ss[iu
]=ss[ou]=ss[su]=ss[uu]=ss[au]=ss[cu]=!0,ss[Xo]=ss[Hs]=ss[tu]=ss[Qo]=ss[os]=ss[Zo]=ss[Vs]=ss[Ks]=ss[Yo]=ss[ts]=ss[es]=ss[
ns]=ss[rs]=ss[is]=ss[Ys]=!1,(Bo={})[Xo]=Bo[Hs]=Bo[tu]=Bo[os]=Bo[Qo]=Bo[Zo]=Bo[eu]=Bo[nu]=Bo[ru]=Bo[iu]=Bo[ou]=Bo[Yo]=Bo[
ts]=Bo[es]=Bo[ns]=Bo[rs]=Bo[is]=Bo[Zs]=Bo[su]=Bo[uu]=Bo[au]=Bo[cu]=!0,Bo[Vs]=Bo[Ks]=Bo[Ys]=!1,n={"À":"A","Á":"A",
"Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E",
"É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i",
"Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U",
"Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th",
"ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c",
"č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e",
"Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I",
"Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L",
"Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n",
"Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S",
"Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U",
"Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z",
"Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},v={"&":"&amp;","<":"&lt;",
">":"&gt;",'"':"&quot;","'":"&#39;"},y={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},u={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ls=parseFloat,js=parseInt,
p="object"==typeof Qt&&Qt&&Qt.Object===Object&&Qt,i="object"==typeof self&&self&&self.Object===Object&&self,
Wo=p||i||Function("return this")(),e=Ku&&!Ku.nodeType&&Ku,t=e&&!Vu.nodeType&&Vu,qs=t&&t.exports===e,a=qs&&p.process,
o=function(){try{return t&&t.require&&t.require("util").types||a&&a.binding&&a.binding("util")}catch(t){}}(),
Us=o&&o.isArrayBuffer,Is=o&&o.isDate,Ds=o&&o.isMap,ks=o&&o.isRegExp,Fs=o&&o.isSet,$s=o&&o.isTypedArray,c=Es("length"),
Ms=s(n),zs=s(v),Gs=s(y),Jo=function o(t){function p(t){if(I(t)&&!$(t)&&!(t instanceof _)){if(t instanceof g)return t;if(
D.call(t,"__wrapped__"))return Ke(t)}return new g(t)}function S(){}function g(t,e){this.__wrapped__=t,this.__actions__=[
],this.__chain__=!!e,this.__index__=0,this.__values__=Go}function _(t){this.__wrapped__=t,this.__actions__=[],
this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ko,this.__views__=[]}function x(t){var e,
n=-1,r=null==t?0:t.length;for(this.clear();++n<r;)e=t[n],this.set(e[0],e[1])}function N(t){var e,n=-1,
r=null==t?0:t.length;for(this.clear();++n<r;)e=t[n],this.set(e[0],e[1])}function C(t){var e,n=-1,r=null==t?0:t.length;
for(this.clear();++n<r;)e=t[n],this.set(e[0],e[1])}function M(t){var e=-1,n=null==t?0:t.length;for(
this.__data__=new C;++e<n;)this.add(t[e])}function U(t){t=this.__data__=new N(t),this.size=t.size}function z(t,e){var n,
r=$(t),i=!r&&Ci(t),o=!r&&!i&&Li(t),s=!r&&!i&&!o&&Ii(t),u=r||i||o||s,a=u?ms(t.length,Jn):[],c=a.length;for(n in t
)!e&&!D.call(t,n)||u&&("length"==n||o&&("offset"==n||"parent"==n)||s&&("buffer"==n||"byteLength"==n||"byteOffset"==n
)||Ue(n,c))||a.push(n);return a}function G(t){var e=t.length;return e?t[Nt(0,e-1)]:Go}function B(t,e,n){(n===Go||gn(t[e]
,n))&&(n!==Go||e in t)||K(t,e,n)}function W(t,e,n){var r=t[e];D.call(t,e)&&gn(r,n)&&(n!==Go||e in t)||K(t,e,n)}
function J(t,e){for(var n=t.length;n--;)if(gn(t[n][0],e))return n;return-1}function H(t,r,i,o){return Ur(t,function(t,e,
n){r(o,t,i(t),n)}),o}function V(t,e){return t&&Yt(e,R(e),t)}function K(t,e,n){"__proto__"==e&&hr?hr(t,e,{
configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function X(t,e){for(var n=-1,r=e.length,i=L(r),
o=null==t;++n<r;)i[n]=o?Go:Sn(t,e[n]);return i}function Q(t,e,n){return t!=t||(n!==Go&&(t=t<=n?t:n),e===Go)||e<=t?t:e}
function v(n,r,i,t,e,o){var s,u,a,c,l,h,f=1&r,d=2&r,p=4&r;if((s=i?e?i(n,t,e,o):i(n):s)===Go){if(!w(n))return n;if(t=$(n)
){if(l=(c=n).length,h=new c.constructor(l),l&&"string"==typeof c[0]&&D.call(c,"index")&&(h.index=c.index,h.input=c.input
),s=h,!f)return m(n,s)}else{if(l=(u=F(n))==Ks||u==Xs,Li(n))return Ht(n,f);if(u==es||u==Xo||l&&!e){if(s=d||l?{}:je(n),!f
)return d?(c=n,l=(h=s)&&Yt(c,T(c),h),Yt(c,Br(c),l)):(c=V(s,h=n),Yt(h,Gr(h),c))}else{if(!Bo[u])return e?n:{};s=function(t
,e){var n,r,i=t.constructor;switch(u){case tu:return Vt(t);case Qo:case Zo:return new i(+t);case os:return n=t,r=e?Vt(
n.buffer):n.buffer,new n.constructor(r,n.byteOffset,n.byteLength);case eu:case nu:case ru:case iu:case ou:case su:
case uu:case au:case cu:return Kt(t,e);case Yo:return new i;case ts:case is:return new i(t);case ns:return(n=new(r=t
).constructor(r.source,ju.exec(r))).lastIndex=r.lastIndex,n;case rs:return new i;case Zs:return Lr?O(Lr.call(t)):{}}}(n,
f)}}if(l=(o=o||new U).get(n))return l;o.set(n,s),Ui(n)?n.forEach(function(t){s.add(v(t,r,i,t,n,o))}):ji(n)&&n.forEach(
function(t,e){s.set(e,v(t,r,i,e,n,o))}),Lo((a=t?Go:(p?d?Oe:Ae:d?T:R)(n))||n,function(t,e){a&&(t=n[e=t]),W(s,e,v(t,r,i,e,
n,o))})}return s}function Z(t,e,n){var r,i,o,s=n.length;if(null==t)return!s;for(t=O(t);s--;)if(i=e[r=n[s]],(o=t[r]
)===Go&&!(r in t)||!i(o))return!1;return!0}function Y(t,e,n){if("function"!=typeof t)throw new j(Ho);return Hr(function(
){t.apply(Go,n)},e)}function tt(t,e,n,r){var i,o,s,u=-1,a=cs,c=!0,l=t.length,h=[],f=e.length;if(l){n&&(e=qo(e,Do(n))),
r?(a=ls,c=!1):200<=e.length&&(a=ko,c=!1,e=new M(e));t:for(;++u<l;)if(i=t[u],o=null==n?i:n(i),i=r||0!==i?i:0,c&&o==o){
for(s=f;s--;)if(e[s]===o)continue t;h.push(i)}else a(e,o,r)||h.push(i)}return h}function et(t,e,n){for(var r,i,o,s,u=-1,
a=t.length;++u<a;)null!=(i=e(r=t[u]))&&(o===Go?i==i&&!y(i):n(i,o))&&(o=i,s=r);return s}function nt(t,r){var i=[];
return Ur(t,function(t,e,n){r(t,e,n)&&i.push(t)}),i}function a(t,e,n,r,i){var o,s=-1,u=t.length;for(n=n||qe,i=i||[
];++s<u;)o=t[s],0<e&&n(o)?1<e?a(o,e-1,n,r,i):Uo(i,o):r||(i[i.length]=o);return i}function rt(t,e){return t&&Dr(t,e,R)}
function it(t,e){return t&&kr(t,e,R)}function ot(e,t){return jo(t,function(t){return vn(e[t])})}function st(t,e){for(
var n=0,r=(e=Wt(e,t)).length;null!=t&&n<r;)t=t[He(e[n++])];return n&&n==r?t:Go}function ut(t,e,n){return e=e(t),$(t
)?e:Uo(e,n(t))}function n(t){if(null==t)return t===Go?"[object Undefined]":"[object Null]";if(lr&&lr in O(t)){var e,n,
r=t,i=D.call(r,lr),o=r[lr];try{r[lr]=Go,e=!0}catch(t){}return n=Zn.call(r),e&&(i?r[lr]=o:delete r[lr]),n}return Zn.call(
t)}function at(t,e){return e<t}function ct(t,e){return null!=t&&D.call(t,e)}function lt(t,e){return null!=t&&e in O(t)}
function ht(t,e,n){for(var r,i,o,s,u,a,c=n?ls:cs,l=t[0].length,h=t.length,f=h,d=L(h),p=1/0,g=[];f--;)r=t[f],f&&e&&(r=qo(
r,Do(e))),p=k(r.length,p),d[f]=!n&&(e||120<=l&&120<=r.length)?new M(f&&r):Go;r=t[0],i=-1,o=d[0];t:for(
;++i<l&&g.length<p;)if(s=r[i],u=e?e(s):s,s=n||0!==s?s:0,!(o?ko(o,u):c(g,u,n))){for(f=h;--f;)if(!((a=d[f])?ko(a,u):c(t[f]
,u,n)))continue t;o&&o.push(u),g.push(s)}return g}function ft(t,e,n){return null==(e=null==(t=ze(t,e=Wt(e,t)))?t:t[He(r(
e))])?Go:Po(e,t,n)}function dt(t){return I(t)&&n(t)==Xo}function pt(t,e,n,r,i){var o,s,u,a,c,l,h,f,d,p,g,_,v,y,E,b,w,m,R
,T,A,O,S,x,N,C,P,L,j,q;if(t===e)return!0;if(null==t||null==e||!I(t)&&!I(e))return t!=t&&e!=e;if(x=pt,y=$(t),o=$(e),
E=y?Hs:F(t),o=o?Hs:F(e),h=(E=E==Xo?es:E)==es,f=(o=o==Xo?es:o)==es,(o=E==o)&&Li(t)){if(!Li(e))return!1;h=!(y=!0)}if(o&&!h
){if(i=i||new U,y||Ii(t))return Re(t,e,n,r,x,i);switch(N=t,C=e,P=n,L=r,j=x,q=i,E){case os:if(
N.byteLength!=C.byteLength||N.byteOffset!=C.byteOffset)return!1;N=N.buffer,C=C.buffer;case tu:return!(
N.byteLength!=C.byteLength||!j(new nr(N),new nr(C)));case Qo:case Zo:case ts:return gn(+N,+C);case Vs:
return N.name==C.name&&N.message==C.message;case ns:case is:return N==C+"";case Yo:O=xs;case rs:return O=O||Cs,!(
N.size!=C.size&&!(1&P))&&((S=q.get(N))?S==C:(P|=2,q.set(N,C),S=Re(O(N),O(C),P,L,j,q),q.delete(N),S));case Zs:if(Lr
)return Lr.call(N)==Lr.call(C)}}else{if(!(1&n)&&(y=h&&D.call(t,"__wrapped__"),E=f&&D.call(e,"__wrapped__"),y||E)
)return x(y?t.value():t,E?e.value():e,n,r,i=i||new U);if(o){if(w=e,R=r,T=x,A=i=i||new U,s=1&(m=n),(a=(u=Ae(b=t)).length
)!=Ae(w).length&&!s)return!1;for(c=a;c--;)if(l=u[c],!(s?l in w:D.call(w,l)))return!1;if(h=A.get(b),f=A.get(w),h&&f
)return h==w&&f==b;for(d=!0,A.set(b,w),A.set(w,b),p=s;++c<a;){if(g=b[l=u[c]],_=w[l],!((v=R?s?R(_,g,l,w,b,A):R(g,_,l,b,w,
A):v)===Go?g===_||T(g,_,m,R,A):v)){d=!1;break}p=p||"constructor"==l}return d&&!p&&(y=b.constructor)!=(E=w.constructor
)&&"constructor"in b&&"constructor"in w&&!("function"==typeof y&&y instanceof y&&"function"==typeof E&&E instanceof E
)&&(d=!1),A.delete(b),A.delete(w),d}}return!1}function gt(t,e,n,r){var i,o,s,u,a,c,l=n.length,h=l,f=!r;if(null==t
)return!h;for(t=O(t);l--;)if(i=n[l],f&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1;for(;++l<h;)if(s=t[o=(i=n[l])[0]],u=i[1]
,f&&i[2]){if(s===Go&&!(o in t))return!1}else if(a=new U,!((c=r?r(s,u,o,t,e,a):c)===Go?pt(u,s,3,r,a):c))return!1;return!0
}function _t(t){return!(!w(t)||Qn&&Qn in t)&&(vn(t)?er:Iu).test(Ve(t))}function vt(t){
return"function"==typeof t?t:null==t?A:"object"==typeof t?$(t)?mt(t[0],t[1]):wt(t):kn(t)}function yt(t){var e,n;if(!ke(t
))return vr(t);for(n in e=[],O(t))D.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Et(t,e){return t<e}
function bt(t,r){var i=-1,o=f(t)?L(t.length):[];return Ur(t,function(t,e,n){o[++i]=r(t,e,n)}),o}function wt(e){var n=Ce(
e);return 1==n.length&&n[0][2]?$e(n[0][0],n[0][1]):function(t){return t===e||gt(t,e,n)}}function mt(n,r){return Ie(n
)&&Fe(r)?$e(He(n),r):function(t){var e=Sn(t,n);return e===Go&&e===r?xn(t,n):pt(r,e,3)}}function Rt(g,_,v,y,E){g!==_&&Dr(
_,function(t,e){var n,r,i,o,s,u,a,c,l,h,f,d,p;E=E||new U,w(t)?(i=v,o=Rt,s=y,u=E,f=Ge(n=g,r=e),d=Ge(a=_,r),(p=u.get(d)
)||((a=(p=s?s(f,d,r+"",n,a,u):Go)===Go)&&(l=!(c=$(d))&&Li(d),h=!c&&!l&&Ii(d),p=d,c||l||h?p=$(f)?f:b(f)?m(f):l?Ht(d,!(
a=!1)):h?Kt(d,!(a=!1)):[]:wn(d)||Ci(d)?Ci(p=f)?p=On(f):w(f)&&!vn(f)||(p=je(d)):a=!1),a&&(u.set(d,p),o(p,d,i,s,u),
u.delete(d))),B(n,r,p)):(c=y?y(Ge(g,e),t,e+"",g,_,E):Go,B(g,e,c===Go?t:c))},T)}function Tt(t,e){var n=t.length;if(n
)return Ue(e+=e<0?n:0,n)?t[e]:Go}function At(t,r,c){r=r.length?qo(r,function(e){return $(e)?function(t){return st(t,
1===e.length?e[0]:e)}:e}):[A],i=-1,r=qo(r,Do(l()));var i,e=bt(t,function(e,t,n){return{criteria:qo(r,function(t){
return t(e)}),index:++i,value:e}}),n=e.length;for(e.sort(function(t,e){for(var n,r=c,i=-1,o=t.criteria,s=e.criteria,
u=o.length,a=r.length;++i<u;)if(n=Xt(o[i],s[i]))return a<=i?n:n*("desc"==r[i]?-1:1);return t.index-e.index});n--;)e[n
]=e[n].value;return e}function Ot(t,e,n){for(var r,i,o=-1,s=e.length,u={};++o<s;)n(i=st(t,r=e[o]),r)&&Pt(u,Wt(r,t),i);
return u}function St(t,e,n,r){var i,o,s,u=r?_s:Io,a=-1,c=e.length,l=t;for(t===e&&(e=m(e)),n&&(l=qo(t,Do(n)));++a<c;)for(
i=0,o=e[a],s=n?n(o):o;-1<(i=u(l,s,i,r));)l!==t&&ur.call(l,i,1),ur.call(t,i,1);return t}function xt(t,e){for(var n,r,
i=t?e.length:0,o=i-1;i--;)n=e[i],i!=o&&n===r||(Ue(r=n)?ur.call(t,n,1):Dt(t,n))}function Nt(t,e){return t+dr(br()*(e-t+1)
)}function Ct(t,e){var n="";if(!(!t||e<1||Vo<e))for(;e%2&&(n+=t),(e=dr(e/2))&&(t+=t),e;);return n}function s(t,e){
return Vr(Me(t,e,A),t+"")}function Pt(t,e,n,r){var i,o,s,u,a,c,l;if(w(t))for(i=-1,s=(o=(e=Wt(e,t)).length)-1,
u=t;null!=u&&++i<o;){if(c=n,"__proto__"===(a=He(e[i]))||"constructor"===a||"prototype"===a)return t;W(u,a,c=i!=s&&(l=u[a
],(c=r?r(l,a,u):Go)===Go)?w(l)?l:Ue(e[i+1])?[]:{}:c),u=u[a]}return t}function u(t,e,n){var r,i=-1,o=t.length;for((
n=o<n?o:n)<0&&(n+=o),o=n<(e=e<0?o<-e?0:o+e:e)?0:n-e>>>0,e>>>=0,r=L(o);++i<o;)r[i]=t[i+e];return r}function Lt(t,e,n){
var r,i,o=0,s=null==t?o:t.length;if("number"==typeof e&&e==e&&s<=2147483647){for(;o<s;)null!==(i=t[r=o+s>>>1])&&!y(i)&&(
n?i<=e:i<e)?o=1+r:s=r;return s}return jt(t,e,A,n)}function jt(t,e,n,r){var i,o,s,u,a,c,l,h,f,d,p=0,g=null==t?0:t.length;
if(0===g)return 0;for(i=(e=n(e))!=e,o=null===e,s=y(e),u=e===Go;p<g;)l=(c=n(t[a=dr((p+g)/2)]))!==Go,h=null===c,f=c==c,
d=y(c),(i?r||f:u?f&&(r||l):o?f&&l&&(r||!h):s?f&&l&&!h&&(r||!d):!h&&!d&&(r?c<=e:c<e))?p=a+1:g=a;return k(g,4294967294)}
function qt(t,e){for(var n,r,i,o=-1,s=t.length,u=0,a=[];++o<s;)n=t[o],r=e?e(n):n,o&&gn(r,i)||(i=r,a[u++]=0===n?0:n);
return a}function Ut(t){return"number"==typeof t?t:y(t)?NaN:+t}function c(t){var e;return"string"==typeof t?t:$(t)?qo(t,
c)+"":y(t)?jr?jr.call(t):"":"0"==(e=t+"")&&1/t==-1/0?"-0":e}function It(t,e,n){var r,i,o,s,u=-1,a=cs,c=t.length,l=!0,h=[
],f=h;if(n)l=!1,a=ls;else if(200<=c){if(r=e?null:Mr(t))return Cs(r);l=!1,a=ko,f=new M}else f=e?[]:h;t:for(;++u<c;)if(
i=t[u],o=e?e(i):i,i=n||0!==i?i:0,l&&o==o){for(s=f.length;s--;)if(f[s]===o)continue t;e&&f.push(o),h.push(i)}else a(f,o,n
)||(f!==h&&f.push(o),h.push(i));return h}function Dt(t,e){return null==(t=ze(t,e=Wt(e,t)))||delete t[He(r(e))]}
function kt(t,e,n,r){return Pt(t,e,n(st(t,e)),r)}function Ft(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],
o,t););return n?u(t,r?0:o,r?o+1:i):u(t,r?o+1:0,r?i:o)}function $t(t,e){var n=t;return hs(e,function(t,e){
return e.func.apply(e.thisArg,Uo([t],e.args))},t instanceof _?t.value():n)}function Mt(t,e,n){var r,i,o,s,u=t.length;if(
u<2)return u?It(t[0]):[];for(r=-1,i=L(u);++r<u;)for(o=t[r],s=-1;++s<u;)s!=r&&(i[r]=tt(i[r]||o,t[s],e,n));return It(a(i,1
),e,n)}function zt(t,e,n){for(var r,i=-1,o=t.length,s=e.length,u={};++i<o;)r=i<s?e[i]:Go,n(u,t[i],r);return u}
function Gt(t){return b(t)?t:[]}function Bt(t){return"function"==typeof t?t:A}function Wt(t,e){return $(t)?t:Ie(t,e)?[t
]:Kr(d(t))}function Jt(t,e,n){var r=t.length;return n=n===Go?r:n,!e&&r<=n?t:u(t,e,n)}function Ht(t,e){return e?t.slice(
):(e=t.length,e=rr?rr(e):new t.constructor(e),t.copy(e),e)}function Vt(t){var e=new t.constructor(t.byteLength);
return new nr(e).set(new nr(t)),e}function Kt(t,e){return e=e?Vt(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,
t.length)}function Xt(t,e){var n,r,i,o,s,u,a,c;if(t!==e){if(n=t!==Go,r=null===t,i=t==t,o=y(t),s=e!==Go,u=null===e,a=e==e
,c=y(e),!u&&!c&&!o&&e<t||o&&s&&a&&!u&&!c||r&&s&&a||!n&&a||!i)return 1;if(
!r&&!o&&!c&&t<e||c&&n&&i&&!r&&!o||u&&n&&i||!s&&i||!a)return-1}return 0}function Qt(t,e,n,r){for(var i=-1,o=t.length,
s=n.length,u=-1,a=e.length,c=q(o-s,0),l=L(a+c),h=!r;++u<a;)l[u]=e[u];for(;++i<s;)(h||i<o)&&(l[n[i]]=t[i]);for(;c--;)l[
u++]=t[i++];return l}function Zt(t,e,n,r){for(var i,o=-1,s=t.length,u=-1,a=n.length,c=-1,l=e.length,h=q(s-a,0),f=L(h+l),
d=!r;++o<h;)f[o]=t[o];for(i=o;++c<l;)f[i+c]=e[c];for(;++u<a;)(d||o<s)&&(f[i+n[u]]=t[o++]);return f}function m(t,e){
var n=-1,r=t.length;for(e=e||L(r);++n<r;)e[n]=t[n];return e}function Yt(t,e,n,r){var i,o,s,u,a=!n;for(n=n||{},i=-1,
o=e.length;++i<o;)(a?K:W)(n,s=e[i],(u=r?r(n[s],t[s],s,n,t):Go)===Go?t[s]:u);return n}function te(i,o){return function(t,
e){var n=$(t)?us:H,r=o?o():{};return n(t,i,l(e,2),r)}}function ee(u){return s(function(t,e){var n,r=-1,i=e.length,
o=1<i?e[i-1]:Go,s=2<i?e[2]:Go,o=3<u.length&&"function"==typeof o?(i--,o):Go;for(s&&h(e[0],e[1],s)&&(o=i<3?Go:o,i=1),t=O(
t);++r<i;)(n=e[r])&&u(t,n,r,o);return t})}function ne(o,s){return function(t,e){if(null!=t){if(!f(t))return o(t,e);for(
var n=t.length,r=s?n:-1,i=O(t);(s?r--:++r<n)&&!1!==e(i[r],r,i););}return t}}function re(a){return function(t,e,n){for(
var r,i=-1,o=O(t),s=n(t),u=s.length;u--&&!1!==e(o[r=s[a?u:++i]],r,o););return t}}function ie(r){return function(t){
var e=(n=Fo(t=d(t))?zo(t):Go)?n[0]:t.charAt(0),n=n?Jt(n,1).join(""):t.slice(1);return e[r]()+n}}function oe(e){
return function(t){return hs(jn(Ln(t).replace(zu,"")),e,"")}}function se(r){return function(){var t,e,n=arguments;
switch(n.length){case 0:return new r;case 1:return new r(n[0]);case 2:return new r(n[0],n[1]);case 3:return new r(n[0],
n[1],n[2]);case 4:return new r(n[0],n[1],n[2],n[3]);case 5:return new r(n[0],n[1],n[2],n[3],n[4]);case 6:return new r(n[
0],n[1],n[2],n[3],n[4],n[5]);case 7:return new r(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}return t=qr(r.prototype),w(
e=r.apply(t,n))?e:t}}function ue(o){return function(t,e,n){var r,i=O(t);return f(t)||(r=l(e,3),t=R(t),e=function(t){
return r(i[t],t,i)}),-1<(e=o(t,e,n))?i[r?t[e]:e]:Go}}function ae(a){return Te(function(i){var t,o,e,n,s=i.length,r=s,
u=g.prototype.thru;for(a&&i.reverse();r--;){if("function"!=typeof(t=i[r]))throw new j(Ho);u&&!o&&"wrapper"==Se(t)&&(
o=new g([],!0))}for(r=o?r:s;++r<s;)n="wrapper"==(e=Se(t=i[r]))?zr(t):Go,o=n&&De(n[0])&&424==n[1]&&!n[4].length&&1==n[9
]?o[Se(n[0])].apply(o,n[3]):1==t.length&&De(t)?o[e]():o.thru(t);return function(){var t,e,n=arguments,r=n[0];if(
o&&1==n.length&&$(r))return o.plant(r).value();for(t=0,e=s?i[t].apply(this,n):r;++t<s;)e=i[t].call(this,e);return e}})}
function ce(s,u,a,c,l,h,f,d,p,g){var _=128&u,v=1&u,y=2&u,E=24&u,b=512&u,w=y?Go:se(s);return function t(){for(var e,n,
r=arguments.length,i=L(r),o=r;o--;)i[o]=arguments[o];return E&&(n=function(t,e){for(var n=t.length,r=0;n--;)t[n
]===e&&++r;return r}(i,e=xe(t))),c&&(i=Qt(i,c,l,E)),h&&(i=Zt(i,h,f,E)),r-=n,E&&r<g?(n=$o(i,e),_e(s,u,ce,t.placeholder,a,
i,n,d,p,g-r)):(e=v?a:this,n=y?e[s]:s,r=i.length,d?i=function(t,e){for(var n,r=t.length,i=k(e.length,r),o=m(t);i--;)n=e[i
],t[i]=Ue(n,r)?o[n]:Go;return t}(i,d):b&&1<r&&i.reverse(),_&&p<r&&(i.length=p),(
n=this&&this!==Wo&&this instanceof t?w||se(n):n).apply(e,i))}}function le(n,s){return function(t,e){return r=n,i=s(e),
o={},rt(t,function(t,e,n){r(o,i(t),e,n)}),o;var r,i,o}}function he(r,i){return function(t,e){var n;if(t===Go&&e===Go
)return i;if(t!==Go&&(n=t),e!==Go){if(n===Go)return e;e=("string"==typeof t||"string"==typeof e?(t=c(t),c):(t=Ut(t),Ut)
)(e),n=r(t,e)}return n}}function fe(r){return Te(function(t){return t=qo(t,Do(l())),s(function(e){var n=this;return r(t,
function(t){return Po(t,n,e)})})})}function de(t,e){var n;return(n=(e=e===Go?" ":c(e)).length)<2?n?Ct(e,t):e:(n=Ct(e,fr(
t/Mo(e))),Fo(e)?Jt(zo(n),0,t).join(""):n.slice(0,t))}function pe(c){return function(t,e,n){n&&"number"!=typeof n&&h(t,e,
n)&&(e=n=Go),t=Tn(t),e===Go?(e=t,t=0):e=Tn(e);for(var r=t,i=n=n===Go?t<e?1:-1:Tn(n),o=c,s=-1,u=q(fr((e-r)/(i||1)),0),
a=L(u);u--;)a[o?u:++s]=r,r+=i;return a}}function ge(n){return function(t,e){
return"string"==typeof t&&"string"==typeof e||(t=E(t),e=E(e)),n(t,e)}}function _e(t,e,n,r,i,o,s,u,a,c){var l=8&e;
return 4&(e=(e|(l?32:64))&~(l?64:32))||(e&=-4),i=n.apply(Go,n=[t,e,i,l?o:Go,l?s:Go,l?Go:o,l?Go:s,u,a,c]),De(t)&&Jr(i,n),
i.placeholder=r,Be(i,t,e)}function ve(t){var r=Bn[t];return function(t,e){var n;return t=E(t),(e=null==e?0:k(P(e),292)
)&&gr(t)?(n=(d(t)+"e").split("e"),+((n=(d(r(n[0]+"e"+(+n[1]+e)))+"e").split("e"))[0]+"e"+(+n[1]-e))):r(t)}}function ye(o
){return function(t){var e,n,r,i=F(t);return i==Yo?xs(t):i==rs?(i=t,e=-1,n=Array(i.size),i.forEach(function(t){n[++e]=[t
,t]}),n):qo(o(r=t),function(t){return[t,r[t]]})}}function Ee(t,e,n,r,i,o,s,u){var a,c,l,h,f,d,p,g,_,v,y,E,b,w,m,R,T,A,O,
S,x,N,C=2&e;if(C||"function"==typeof t)return(a=r?r.length:0)||(e&=-97,r=i=Go),s=s===Go?s:q(P(s),0),u=u===Go?u:P(u),
a-=i?i.length:0,64&e&&(l=r,c=i,r=i=Go),l=[t,e,n,r,i,l,c,o,s,u],(c=C?Go:zr(t))&&(g=(p=(s=(o=l)[1])|(d=(h=c)[1]))<131,
_=128==d&&8==s||128==d&&256==s&&o[7].length<=h[8]||384==d&&h[7].length<=h[8]&&8==s,g||_)&&(1&d&&(o[2]=h[2],p|=1&s?0:4),(
g=h[3])&&(f=o[3],o[3]=f?Qt(f,g,h[4]):g,o[4]=f?$o(o[3],Ws):h[4]),(g=h[5])&&(f=o[5],o[5]=f?Zt(f,g,h[6]):g,o[6]=f?$o(o[5],
Ws):h[6]),(g=h[7])&&(o[7]=g),128&d&&(o[8]=null==o[8]?h[8]:k(o[8],h[8])),null==o[9]&&(o[9]=h[9]),o[0]=h[0],o[1]=p),t=l[0]
,e=l[1],n=l[2],r=l[3],i=l[4],!(u=l[9]=l[9]===Go?C?0:t.length:q(l[9]-a,0))&&24&e&&(e&=-25),_=e&&1!=e?8==e||16==e?(S=e,x=u
,N=se(O=t),function t(){for(var e=arguments.length,n=L(e),r=e,i=xe(t);r--;)n[r]=arguments[r];return(e-=(i=e<3&&n[0
]!==i&&n[e-1]!==i?[]:$o(n,i)).length)<x?_e(O,S,ce,t.placeholder,Go,n,i,Go,Go,x-e):Po(
this&&this!==Wo&&this instanceof t?N:O,this,n)}):32!=e&&33!=e||i.length?ce.apply(Go,l):(m=n,R=r,T=1&e,A=se(w=t),
function t(){for(var e=-1,n=arguments.length,r=-1,i=R.length,o=L(i+n),s=this&&this!==Wo&&this instanceof t?A:w;++r<i;)o[
r]=R[r];for(;n--;)o[r++]=arguments[++e];return Po(s,T?m:this,o)}):(y=n,E=1&e,b=se(v=t),function t(){return(
this&&this!==Wo&&this instanceof t?b:v).apply(E?y:this,arguments)}),Be((c?Fr:Jr)(_,l),t,e);throw new j(Ho)}function be(t
,e,n,r){return t===Go||gn(t,Vn[n])&&!D.call(r,n)?e:t}function we(t,e,n,r,i,o){return w(t)&&w(e)&&(o.set(e,t),Rt(t,e,Go,
we,o),o.delete(e)),t}function me(t){return wn(t)?Go:t}function Re(t,e,n,r,i,o){var s,u,a,c,l,h,f,d=1&n,p=t.length,
g=e.length;if(p!=g&&!(d&&p<g))return!1;if(g=o.get(t),s=o.get(e),g&&s)return g==e&&s==t;for(u=-1,a=!0,c=2&n?new M:Go,
o.set(t,e),o.set(e,t);++u<p;){if(l=t[u],h=e[u],(f=r?d?r(h,l,u,e,t,o):r(l,h,u,t,e,o):f)!==Go){if(f)continue;a=!1;break}
if(c){if(!ds(e,function(t,e){return!ko(c,e)&&(l===t||i(l,t,n,r,o))&&c.push(e)})){a=!1;break}}else if(l!==h&&!i(l,h,n,r,o
)){a=!1;break}}return o.delete(t),o.delete(e),a}function Te(t){return Vr(Me(t,Go,Ze),t+"")}function Ae(t){return ut(t,R,
Gr)}function Oe(t){return ut(t,T,Br)}function Se(t){for(var e,n,r=t.name+"",i=Or[r],o=D.call(Or,r)?i.length:0;o--;)if(
null==(n=(e=i[o]).func)||n==t)return e.name;return r}function xe(t){return(D.call(p,"placeholder")?p:t).placeholder}
function l(){var t=(t=p.iteratee||Un)===Un?vt:t;return arguments.length?t(arguments[0],arguments[1]):t}function Ne(t,e){
var n,t=t.__data__;return("string"==(n=typeof e)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?t[
"string"==typeof e?"string":"hash"]:t.map}function Ce(t){for(var e,n,r=R(t),i=r.length;i--;)n=t[e=r[i]],r[i]=[e,n,Fe(n)]
return r}function Pe(t,e){return _t(t=null==t?Go:t[e])?t:Go}function Le(t,e,n){for(var r,i,o=(e=Wt(e,t)).length,s=!(r=-1
);++r<o&&(i=He(e[r]),s=null!=t&&n(t,i));)t=t[i];return s||++r!=o?s:!!(o=null==t?0:t.length)&&En(o)&&Ue(i,o)&&($(t)||Ci(t
))}function je(t){return"function"!=typeof t.constructor||ke(t)?{}:qr(ir(t))}function qe(t){return $(t)||Ci(t)||!!(
ar&&t&&t[ar])}function Ue(t,e){var n=typeof t;return!!(e=null==e?Vo:e)&&("number"==n||"symbol"!=n&&ku.test(t)
)&&-1<t&&t%1==0&&t<e}function h(t,e,n){var r;if(w(n))return("number"==(r=typeof e)?f(n)&&Ue(e,n.length
):"string"==r&&e in n)&&gn(n[e],t)}function Ie(t,e){var n;return!$(t)&&("number"==(n=typeof t
)||"symbol"==n||"boolean"==n||null==t||y(t)||wu.test(t)||!bu.test(t)||null!=e&&t in O(e))}function De(t){var e=Se(t),
n=p[e];return"function"==typeof n&&e in _.prototype&&(t===n||(e=zr(n))&&t===e[0])}function ke(t){var e=t&&t.constructor;
return t===("function"==typeof e&&e.prototype||Vn)}function Fe(t){return t==t&&!w(t)}function $e(e,n){return function(t
){return null!=t&&t[e]===n&&(n!==Go||e in O(t))}}function Me(o,s,u){return s=q(s===Go?o.length-1:s,0),function(){for(
var t,e=arguments,n=-1,r=q(e.length-s,0),i=L(r);++n<r;)i[n]=e[s+n];for(n=-1,t=L(s+1);++n<s;)t[n]=e[n];return t[s]=u(i),
Po(o,this,t)}}function ze(t,e){return e.length<2?t:st(t,u(e,0,-1))}function Ge(t,e){if((
"constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}function Be(t,e,n){var r,i,o;return Vr(t,(e=(
t=e+"").match(Su),i=e?e[1].split(xu):[],o=n,Lo(Js,function(t){var e="_."+t[0];o&t[1]&&!cs(i,e)&&i.push(e)}),(n=(
e=i.sort()).length)?(e[r=n-1]=(1<n?"& ":"")+e[r],e=e.join(2<n?", ":" "),t.replace(Ou,"{\n/* [wrapped with "+e+"] */\n")
):t))}function We(n){var r=0,i=0;return function(){var t=yr(),e=16-t+ +i;if(i=t,0<e){if(800<=++r)return arguments[0]
}else r=0;return n.apply(Go,arguments)}}function Je(t,e){var n,r,i=-1,o=t.length,s=o-1;for(e=e===Go?o:e;++i<e;)r=t[n=Nt(
i,s)],t[n]=t[i],t[i]=r;return t.length=e,t}function He(t){var e;return"string"==typeof t||y(t)?t:"0"==(e=t+""
)&&1/t==-1/0?"-0":e}function Ve(t){if(null!=t){try{return Kn.call(t)}catch(t){}try{return t+""}catch(t){}}return""}
function Ke(t){var e;return t instanceof _?t.clone():((e=new g(t.__wrapped__,t.__chain__)).__actions__=m(t.__actions__),
e.__index__=t.__index__,e.__values__=t.__values__,e)}function Xe(t,e,n){var r=null==t?0:t.length;return r?((
n=null==n?0:P(n))<0&&(n=q(r+n,0)),gs(t,l(e,3),n)):-1}function Qe(t,e,n){var r,i=null==t?0:t.length;return i?(r=i-1,
n!==Go&&(r=P(n),r=n<0?q(i+r,0):k(r,i-1)),gs(t,l(e,3),r,!0)):-1}function Ze(t){return null!=t&&t.length?a(t,1):[]}
function Ye(t){return t&&t.length?t[0]:Go}function r(t){var e=null==t?0:t.length;return e?t[e-1]:Go}function tn(t,e){
return t&&t.length&&e&&e.length?St(t,e):t}function en(t){return null==t?t:wr.call(t)}function nn(e){var n;
return e&&e.length?(n=0,e=jo(e,function(t){return b(t)&&(n=q(t.length,n),1)}),ms(n,function(t){return qo(e,Es(t))})):[]}
function rn(t,e){return t&&t.length?(t=nn(t),null==e?t:qo(t,function(t){return Po(e,Go,t)})):[]}function on(t){return(
t=p(t)).__chain__=!0,t}function sn(t,e){return e(t)}function un(t,e){return($(t)?Lo:Ur)(t,l(e,3))}function an(t,e){
return($(t)?function(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}:Ir)(t,l(e,3))}function cn(t,e){
return($(t)?qo:bt)(t,l(e,3))}function ln(t,e,n){return e=n?Go:e,e=t&&null==e?t.length:e,Ee(t,128,Go,Go,Go,Go,e)}
function hn(t,e){var n;if("function"!=typeof e)throw new j(Ho);return t=P(t),function(){return 0<--t&&(n=e.apply(this,
arguments)),t<=1&&(e=Go),n}}function fn(r,n,t){function i(t){var e=a,n=c;return a=c=Go,p=t,h=r.apply(n,e)}function o(t){
var e=t-d;return d===Go||n<=e||e<0||_&&l<=t-p}function s(){var t,e=Ei();if(o(e))return u(e);f=Hr(s,(t=n-(e-d),_?k(t,l-(
e-p)):t))}function u(t){return f=Go,v&&a?i(t):(a=c=Go,h)}function e(){var t=Ei(),e=o(t);if(a=arguments,c=this,d=t,e){if(
f===Go)return p=t=d,f=Hr(s,n),g?i(t):h;if(_)return $r(f),f=Hr(s,n),i(d)}return f===Go&&(f=Hr(s,n)),h}var a,c,l,h,f,d,p=0
,g=!1,_=!1,v=!0;if("function"!=typeof r)throw new j(Ho);return n=E(n)||0,w(t)&&(g=!!t.leading,_="maxWait"in t,l=_?q(E(
t.maxWait)||0,n):l,v="trailing"in t?!!t.trailing:v),e.cancel=function(){f!==Go&&$r(f),p=0,a=d=c=f=Go},e.flush=function(
){return f===Go?h:u(Ei())},e}function dn(r,i){function o(){var t=arguments,e=i?i.apply(this,t):t[0],n=o.cache;
return n.has(e)?n.get(e):(t=r.apply(this,t),o.cache=n.set(e,t)||n,t)}if(
"function"!=typeof r||null!=i&&"function"!=typeof i)throw new j(Ho);return o.cache=new(dn.Cache||C),o}function pn(e){if(
"function"!=typeof e)throw new j(Ho);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);
case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}
return!e.apply(this,t)}}function gn(t,e){return t===e||t!=t&&e!=e}function f(t){return null!=t&&En(t.length)&&!vn(t)}
function b(t){return I(t)&&f(t)}function _n(t){var e;return!!I(t)&&((e=n(t)
)==Vs||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!wn(t))}function vn(t){
return!!w(t)&&((t=n(t))==Ks||t==Xs||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function yn(t){
return"number"==typeof t&&t==P(t)}function En(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=Vo}function w(t){
var e=typeof t;return null!=t&&("object"==e||"function"==e)}function I(t){return null!=t&&"object"==typeof t}
function bn(t){return"number"==typeof t||I(t)&&n(t)==ts}function wn(t){return!(!I(t)||n(t)!=es)&&(null===(t=ir(t)
)||"function"==typeof(t=D.call(t,"constructor")&&t.constructor)&&t instanceof t&&Kn.call(t)==Yn)}function mn(t){
return"string"==typeof t||!$(t)&&I(t)&&n(t)==is}function y(t){return"symbol"==typeof t||I(t)&&n(t)==Zs}function Rn(t){
var e,n,r,i;if(!t)return[];if(f(t))return(mn(t)?zo:m)(t);if(cr&&t[cr]){for(n=t[cr](),r=[];!(e=n.next()).done;)r.push(
e.value);return r}return((i=F(t))==Yo?xs:i==rs?Cs:Cn)(t)}function Tn(t){return t?(t=E(t)
)===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function P(t){var e=(t=Tn(t))%1;
return t==t?e?t-e:t:0}function An(t){return t?Q(P(t),0,Ko):0}function E(t){var e;return"number"==typeof t?t:y(t
)?NaN:"string"!=typeof(t=w(t)?w(e="function"==typeof t.valueOf?t.valueOf():t)?e+"":e:t)?0===t?t:+t:(t=Rs(t),(e=Uu.test(t
))||Du.test(t)?js(t.slice(2),e?2:8):qu.test(t)?NaN:+t)}function On(t){return Yt(t,T(t))}function d(t){
return null==t?"":c(t)}function Sn(t,e,n){return(t=null==t?Go:st(t,e))===Go?n:t}function xn(t,e){return null!=t&&Le(t,e,
lt)}function R(t){return(f(t)?z:yt)(t)}function T(t){if(f(t))return z(t,!0);var e,n,r,i,o,s=t;if(!w(s)){if(i=[],null!=s
)for(o in O(s))i.push(o);return i}for(r in e=ke(s),n=[],s)("constructor"!=r||!e&&D.call(s,r))&&n.push(r);return n}
function Nn(t,n){var e;return null==t?{}:(e=qo(Oe(t),function(t){return[t]}),n=l(n),Ot(t,e,function(t,e){return n(t,e[0]
)}))}function Cn(t){return null==t?[]:Ts(t,R(t))}function Pn(t){return ao(d(t).toLowerCase())}function Ln(t){return(t=d(
t))&&t.replace(Fu,Ms).replace(Gu,"")}function jn(t,e,n){return t=d(t),(e=n?Go:e)===Go?(n=t,Wu.test(n)?t.match(Bu)||[
]:t.match(Nu)||[]):t.match(e)||[]}function qn(t){return function(){return t}}function A(t){return t}function Un(t){
return vt("function"==typeof t?t:v(t,1))}function In(r,e,t){var i,o,n=R(e),s=ot(e,n);return null!=t||w(e)&&(
s.length||!n.length)||(t=e,e=r,r=this,s=ot(e,R(e))),i=!(w(t)&&"chain"in t&&!t.chain),o=vn(r),Lo(s,function(t){var n=e[t]
r[t]=n,o&&(r.prototype[t]=function(){var t,e=this.__chain__;return i||e?(((t=r(this.__wrapped__)).__actions__=m(
this.__actions__)).push({func:n,args:arguments,thisArg:r}),t.__chain__=e,t):n.apply(r,Uo([this.value()],arguments))})}),
r}function Dn(){}function kn(t){return Ie(t)?Es(He(t)):(e=t,function(t){return st(t,e)});var e}function Fn(){return[]}
function $n(){return!1}function Mn(){}var L,zn,Gn,Bn,O,Wn,Jn,j,Hn,Vn,Kn,D,Xn,Qn,Zn,Yn,tr,er,nr,rr,ir,or,sr,ur,ar,cr,lr,
hr,fr,dr,pr,gr,_r,vr,q,k,yr,Er,br,wr,mr,Rr,Tr,Ar,Or,Sr,xr,Nr,Cr,Pr,Lr,jr,qr,Ur,Ir,Dr,kr,Fr,$r,Mr,zr,Gr,Br,F,Wr,Jr,Hr,Vr,
Kr,Xr,Qr,Zr,Yr,e,ti,ei,ni,ri,ii,oi,si,ui,ai,ci,li,hi,fi,di,pi,gi,_i,vi,yi,Ei,bi,wi,mi,Ri,Ti,Ai,Oi,Si,xi,Ni,Ci,$,Pi,Li,ji
,qi,Ui,Ii,Di,ki,Fi,$i,Mi,zi,Gi,Bi,Wi,Ji,Hi,Vi,Ki,Xi,Qi,Zi,Yi,to,eo,no,ro,io,oo,so,uo,ao,co,lo,ho,fo,po,go,_o,vo,yo,Eo,bo
,wo,mo,Ro,To,Ao,Oo,So,i,xo,No,Co;return t=null==t?Wo:Jo.defaults(Wo.Object(),t,Jo.pick(Wo,Ju)),L=t.Array,Xr=t.Date,
zn=t.Error,Gn=t.Function,Bn=t.Math,O=t.Object,Wn=t.RegExp,Jn=t.String,j=t.TypeError,Hn=L.prototype,i=Gn.prototype,
Vn=O.prototype,Zr=t["__core-js_shared__"],Kn=i.toString,D=Vn.hasOwnProperty,Xn=0,i=/[^.]+$/.exec(
Zr&&Zr.keys&&Zr.keys.IE_PROTO||""),Qn=i?"Symbol(src)_1."+i:"",Zn=Vn.toString,Yn=Kn.call(O),tr=Wo._,er=Wn("^"+Kn.call(D
).replace(Ru,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),i=qs?t.Buffer:Go,
e=t.Symbol,nr=t.Uint8Array,rr=i?i.allocUnsafe:Go,ir=Ns(O.getPrototypeOf,O),or=O.create,sr=Vn.propertyIsEnumerable,
ur=Hn.splice,ar=e?e.isConcatSpreadable:Go,cr=e?e.iterator:Go,lr=e?e.toStringTag:Go,hr=function(){try{var t=Pe(O,
"defineProperty");return t({},"",{}),t}catch(t){}}(),xo=t.clearTimeout!==Wo.clearTimeout&&t.clearTimeout,
mi=Xr&&Xr.now!==Wo.Date.now&&Xr.now,Yr=t.setTimeout!==Wo.setTimeout&&t.setTimeout,fr=Bn.ceil,dr=Bn.floor,
pr=O.getOwnPropertySymbols,i=i?i.isBuffer:Go,gr=t.isFinite,_r=Hn.join,vr=Ns(O.keys,O),q=Bn.max,k=Bn.min,yr=Xr.now,
Er=t.parseInt,br=Bn.random,wr=Hn.reverse,Xr=Pe(t,"DataView"),mr=Pe(t,"Map"),Qr=Pe(t,"Promise"),Rr=Pe(t,"Set"),t=Pe(t,
"WeakMap"),Tr=Pe(O,"create"),Ar=t&&new t,Or={},Sr=Ve(Xr),xr=Ve(mr),Nr=Ve(Qr),Cr=Ve(Rr),Pr=Ve(t),e=e?e.prototype:Go,
Lr=e?e.valueOf:Go,jr=e?e.toString:Go,qr=function(t){return w(t)?or?or(t):(Mn.prototype=t,t=new Mn,Mn.prototype=Go,t):{}}
,p.templateSettings={escape:vu,evaluate:yu,interpolate:Eu,variable:"",imports:{_:p}},(p.prototype=S.prototype
).constructor=p,(g.prototype=qr(S.prototype)).constructor=g,(_.prototype=qr(S.prototype)).constructor=_,
x.prototype.clear=function(){this.__data__=Tr?Tr(null):{},this.size=0},x.prototype.delete=function(t){return t=this.has(
t)&&delete this.__data__[t],this.size-=t?1:0,t},x.prototype.get=function(t){var e,n=this.__data__;return Tr?(e=n[t]
)===Bs?Go:e:D.call(n,t)?n[t]:Go},x.prototype.has=function(t){var e=this.__data__;return Tr?e[t]!==Go:D.call(e,t)},
x.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Tr&&e===Go?Bs:e,this},
N.prototype.clear=function(){this.__data__=[],this.size=0},N.prototype.delete=function(t){var e=this.__data__;return!((
t=J(e,t))<0||(t==e.length-1?e.pop():ur.call(e,t,1),--this.size,0))},N.prototype.get=function(t){var e=this.__data__;
return(t=J(e,t))<0?Go:e[t][1]},N.prototype.has=function(t){return-1<J(this.__data__,t)},N.prototype.set=function(t,e){
var n=this.__data__,r=J(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},C.prototype.clear=function(){
this.size=0,this.__data__={hash:new x,map:new(mr||N),string:new x}},C.prototype.delete=function(t){return t=Ne(this,t
).delete(t),this.size-=t?1:0,t},C.prototype.get=function(t){return Ne(this,t).get(t)},C.prototype.has=function(t){
return Ne(this,t).has(t)},C.prototype.set=function(t,e){var n=Ne(this,t),r=n.size;return n.set(t,e),
this.size+=n.size==r?0:1,this},M.prototype.add=M.prototype.push=function(t){return this.__data__.set(t,Bs),this},
M.prototype.has=function(t){return this.__data__.has(t)},U.prototype.clear=function(){this.__data__=new N,this.size=0},
U.prototype.delete=function(t){var e=this.__data__,t=e.delete(t);return this.size=e.size,t},U.prototype.get=function(t){
return this.__data__.get(t)},U.prototype.has=function(t){return this.__data__.has(t)},U.prototype.set=function(t,e){
var n,r=this.__data__;if(r instanceof N){if(n=r.__data__,!mr||n.length<199)return n.push([t,e]),this.size=++r.size,this;
r=this.__data__=new C(n)}return r.set(t,e),this.size=r.size,this},Ur=ne(rt),Ir=ne(it,!0),Dr=re(),kr=re(!0),
Fr=Ar?function(t,e){return Ar.set(t,e),t}:A,e=hr?function(t,e){return hr(t,"toString",{configurable:!0,enumerable:!1,
value:qn(e),writable:!0})}:A,Ti=s,$r=xo||function(t){return Wo.clearTimeout(t)},Mr=Rr&&1/Cs(new Rr([,-0]))[1
]==1/0?function(t){return new Rr(t)}:Dn,zr=Ar?function(t){return Ar.get(t)}:Dn,Gr=pr?function(e){return null==e?[]:(e=O(
e),jo(pr(e),function(t){return sr.call(e,t)}))}:Fn,Br=pr?function(t){for(var e=[];t;)Uo(e,Gr(t)),t=ir(t);return e}:Fn,
F=n,(Xr&&F(new Xr(new ArrayBuffer(1)))!=os||mr&&F(new mr)!=Yo||Qr&&F(Qr.resolve())!=Qs||Rr&&F(new Rr)!=rs||t&&F(new t
)!=Ys)&&(F=function(t){var e=n(t);if(t=(t=e==es?t.constructor:Go)?Ve(t):"")switch(t){case Sr:return os;case xr:return Yo
case Nr:return Qs;case Cr:return rs;case Pr:return Ys}return e}),Wr=Zr?vn:$n,Jr=We(Fr),Hr=Yr||function(t,e){
return Wo.setTimeout(t,e)},Vr=We(e),No=(xo=dn(function(t){var i=[];return 46===t.charCodeAt(0)&&i.push(""),t.replace(mu,
function(t,e,n,r){i.push(n?r.replace(Pu,"$1"):e||t)}),i},function(t){return 500===No.size&&No.clear(),t})).cache,Kr=xo,
Xr=s(function(t,e){return b(t)?tt(t,a(e,1,b,!0)):[]}),Qr=s(function(t,e){var n=r(e);return b(n)&&(n=Go),b(t)?tt(t,a(e,1,
b,!0),l(n,2)):[]}),t=s(function(t,e){var n=r(e);return b(n)&&(n=Go),b(t)?tt(t,a(e,1,b,!0),Go,n):[]}),Zr=s(function(t){
var e=qo(t,Gt);return e.length&&e[0]===t[0]?ht(e):[]}),Yr=s(function(t){var e=r(t),n=qo(t,Gt);return e===r(n
)?e=Go:n.pop(),n.length&&n[0]===t[0]?ht(n,l(e,2)):[]}),e=s(function(t){var e=r(t),n=qo(t,Gt);return(
e="function"==typeof e?e:Go)&&n.pop(),n.length&&n[0]===t[0]?ht(n,Go,e):[]}),xo=s(tn),ti=Te(function(t,e){
var n=null==t?0:t.length,r=X(t,e);return xt(t,qo(e,function(t){return Ue(t,n)?+t:t}).sort(Xt)),r}),ei=s(function(t){
return It(a(t,1,b,!0))}),ni=s(function(t){var e=r(t);return b(e)&&(e=Go),It(a(t,1,b,!0),l(e,2))}),ri=s(function(t){
var e="function"==typeof(e=r(t))?e:Go;return It(a(t,1,b,!0),Go,e)}),ii=s(function(t,e){return b(t)?tt(t,e):[]}),oi=s(
function(t){return Mt(jo(t,b))}),si=s(function(t){var e=r(t);return b(e)&&(e=Go),Mt(jo(t,b),l(e,2))}),ui=s(function(t){
var e="function"==typeof(e=r(t))?e:Go;return Mt(jo(t,b),Go,e)}),ai=s(nn),ci=s(function(t){var e="function"==typeof(e=1<(
e=t.length)?t[e-1]:Go)?(t.pop(),e):Go;return rn(t,e)}),li=Te(function(e){function t(t){return X(t,e)}var n=e.length,
r=n?e[0]:0,i=this.__wrapped__;return!(1<n||this.__actions__.length)&&i instanceof _&&Ue(r)?((i=i.slice(r,+r+(n?1:0))
).__actions__.push({func:sn,args:[t],thisArg:Go}),new g(i,this.__chain__).thru(function(t){return n&&!t.length&&t.push(
Go),t})):this.thru(t)}),hi=te(function(t,e,n){D.call(t,n)?++t[n]:K(t,n,1)}),fi=ue(Xe),di=ue(Qe),pi=te(function(t,e,n){
D.call(t,n)?t[n].push(e):K(t,n,[e])}),gi=s(function(t,e,n){var r=-1,i="function"==typeof e,o=f(t)?L(t.length):[];
return Ur(t,function(t){o[++r]=i?Po(e,t,n):ft(t,e,n)}),o}),_i=te(function(t,e,n){K(t,n,e)}),vi=te(function(t,e,n){t[
n?0:1].push(e)},function(){return[[],[]]}),yi=s(function(t,e){var n;return null==t?[]:(1<(n=e.length)&&h(t,e[0],e[1]
)?e=[]:2<n&&h(e[0],e[1],e[2])&&(e=[e[0]]),At(t,a(e,1),[]))}),Ei=mi||function(){return Wo.Date.now()},bi=s(function(t,e,n
){var r,i=1;return n.length&&(r=$o(n,xe(bi)),i|=32),Ee(t,i,e,n,r)}),wi=s(function(t,e,n){var r,i=3;return n.length&&(
r=$o(n,xe(wi)),i|=32),Ee(e,i,t,n,r)}),mi=s(function(t,e){return Y(t,1,e)}),Ri=s(function(t,e,n){return Y(t,E(e)||0,n)}),
dn.Cache=C,Ti=Ti(function(r,i){var o=(i=1==i.length&&$(i[0])?qo(i[0],Do(l())):qo(a(i,1),Do(l()))).length;return s(
function(t){for(var e=-1,n=k(t.length,o);++e<n;)t[e]=i[e].call(this,t[e]);return Po(r,this,t)})}),Ai=s(function(t,e){
var n=$o(e,xe(Ai));return Ee(t,32,Go,e,n)}),Oi=s(function(t,e){var n=$o(e,xe(Oi));return Ee(t,64,Go,e,n)}),Si=Te(
function(t,e){return Ee(t,256,Go,Go,Go,e)}),xi=ge(at),Ni=ge(function(t,e){return e<=t}),Ci=dt(function(){
return arguments}())?dt:function(t){return I(t)&&D.call(t,"callee")&&!sr.call(t,"callee")},$=L.isArray,Pi=Us?Do(Us
):function(t){return I(t)&&n(t)==tu},Li=i||$n,i=Is?Do(Is):function(t){return I(t)&&n(t)==Zo},ji=Ds?Do(Ds):function(t){
return I(t)&&F(t)==Yo},qi=ks?Do(ks):function(t){return I(t)&&n(t)==ns},Ui=Fs?Do(Fs):function(t){return I(t)&&F(t)==rs},
Ii=$s?Do($s):function(t){return I(t)&&En(t.length)&&!!ss[n(t)]},Di=ge(Et),ki=ge(function(t,e){return t<=e}),Fi=ee(
function(t,e){if(ke(e)||f(e))Yt(e,R(e),t);else for(var n in e)D.call(e,n)&&W(t,n,e[n])}),$i=ee(function(t,e){Yt(e,T(e),t
)}),Mi=ee(function(t,e,n,r){Yt(e,T(e),t,r)}),zi=ee(function(t,e,n,r){Yt(e,R(e),t,r)}),Gi=Te(X),Bi=s(function(t,e){var n,
r,i,o,s,u,a,c,l;for(t=O(t),n=-1,(i=2<(r=e.length)?e[2]:Go)&&h(e[0],e[1],i)&&(r=1);++n<r;)for(u=-1,a=(s=T(o=e[n])
).length;++u<a;)((l=t[c=s[u]])===Go||gn(l,Vn[c])&&!D.call(t,c))&&(t[c]=o[c]);return t}),Wi=s(function(t){return t.push(
Go,we),Po(Xi,Go,t)}),Ji=le(function(t,e,n){t[e=null!=e&&"function"!=typeof e.toString?Zn.call(e):e]=n},qn(A)),Hi=le(
function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Zn.call(e)),D.call(t,e)?t[e].push(n):t[e]=[n]},l),Vi=s(ft),
Ki=ee(function(t,e,n){Rt(t,e,n)}),Xi=ee(function(t,e,n,r){Rt(t,e,n,r)}),Qi=Te(function(e,t){var n,r,i={};if(null!=e)for(
n=!1,t=qo(t,function(t){return t=Wt(t,e),n=n||1<t.length,t}),Yt(e,Oe(e),i),n&&(i=v(i,7,me)),r=t.length;r--;)Dt(i,t[r]);
return i}),Zi=Te(function(t,e){return null==t?{}:Ot(n=t,e,function(t,e){return xn(n,e)});var n}),Yi=ye(R),to=ye(T),
eo=oe(function(t,e,n){return e=e.toLowerCase(),t+(n?Pn(e):e)}),no=oe(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()
}),ro=oe(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),io=ie("toLowerCase"),oo=oe(function(t,e,n){return t+(
n?"_":"")+e.toLowerCase()}),so=oe(function(t,e,n){return t+(n?" ":"")+ao(e)}),uo=oe(function(t,e,n){return t+(n?" ":""
)+e.toUpperCase()}),ao=ie("toUpperCase"),co=s(function(t,e){try{return Po(t,Go,e)}catch(t){return _n(t)?t:new zn(t)}}),
lo=Te(function(e,t){return Lo(t,function(t){t=He(t),K(e,t,bi(e[t],e))}),e}),ho=ae(),fo=ae(!0),po=s(function(e,n){
return function(t){return ft(t,e,n)}}),go=s(function(e,n){return function(t){return ft(e,t,n)}}),_o=fe(qo),vo=fe(as),
yo=fe(ds),Eo=pe(),bo=pe(!0),wo=he(function(t,e){return t+e},0),mo=ve("ceil"),Ro=he(function(t,e){return t/e},1),To=ve(
"floor"),Ao=he(function(t,e){return t*e},1),Oo=ve("round"),So=he(function(t,e){return t-e},0),p.after=function(t,e){if(
"function"!=typeof e)throw new j(Ho);return t=P(t),function(){if(--t<1)return e.apply(this,arguments)}},p.ary=ln,
p.assign=Fi,p.assignIn=$i,p.assignInWith=Mi,p.assignWith=zi,p.at=Gi,p.before=hn,p.bind=bi,p.bindAll=lo,p.bindKey=wi,
p.castArray=function(){var t;return arguments.length?$(t=arguments[0])?t:[t]:[]},p.chain=on,p.chunk=function(t,e,n){
var r,i,o,s;if(e=(n?h(t,e,n):e===Go)?1:q(P(e),0),!(r=null==t?0:t.length)||e<1)return[];for(o=i=0,s=L(fr(r/e));i<r;)s[o++
]=u(t,i,i+=e);return s},p.compact=function(t){for(var e,n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;)(e=t[n])&&(o[i++]=e);
return o},p.concat=function(){var t,e,n,r=arguments.length;if(!r)return[];for(t=L(r-1),e=arguments[0],n=r;n--;)t[n-1
]=arguments[n];return Uo($(e)?m(e):[e],a(t,1))},p.cond=function(r){var i=null==r?0:r.length,e=l();return r=i?qo(r,
function(t){if("function"!=typeof t[1])throw new j(Ho);return[e(t[0]),t[1]]}):[],s(function(t){for(var e,n=-1;++n<i;)if(
Po((e=r[n])[0],this,t))return Po(e[1],this,t)})},p.conforms=function(t){return e=v(t,1),n=R(e),function(t){return Z(t,e,
n)};var e,n},p.constant=qn,p.countBy=hi,p.create=function(t,e){return t=qr(t),null==e?t:V(t,e)},p.curry=function t(e,n,r
){return(e=Ee(e,8,Go,Go,Go,Go,Go,n=r?Go:n)).placeholder=t.placeholder,e},p.curryRight=function t(e,n,r){return(e=Ee(e,16
,Go,Go,Go,Go,Go,n=r?Go:n)).placeholder=t.placeholder,e},p.debounce=fn,p.defaults=Bi,p.defaultsDeep=Wi,p.defer=mi,
p.delay=Ri,p.difference=Xr,p.differenceBy=Qr,p.differenceWith=t,p.drop=function(t,e,n){var r=null==t?0:t.length;
return r?u(t,(e=n||e===Go?1:P(e))<0?0:e,r):[]},p.dropRight=function(t,e,n){var r=null==t?0:t.length;return r?u(t,0,(
e=r-(n||e===Go?1:P(e)))<0?0:e):[]},p.dropRightWhile=function(t,e){return t&&t.length?Ft(t,l(e,3),!0,!0):[]},
p.dropWhile=function(t,e){return t&&t.length?Ft(t,l(e,3),!0):[]},p.fill=function(t,e,n,r){var i,o,s,u,
a=null==t?0:t.length;if(!a)return[];for(n&&"number"!=typeof n&&h(t,e,n)&&(n=0,r=a),o=e,s=n,u=r,a=(i=t).length,(s=P(s)
)<0&&(s=a<-s?0:a+s),(u=u===Go||a<u?a:P(u))<0&&(u+=a),u=u<s?0:An(u);s<u;)i[s++]=o;return i},p.filter=function(t,e){
return($(t)?jo:nt)(t,l(e,3))},p.flatMap=function(t,e){return a(cn(t,e),1)},p.flatMapDeep=function(t,e){return a(cn(t,e),
1/0)},p.flatMapDepth=function(t,e,n){return n=n===Go?1:P(n),a(cn(t,e),n)},p.flatten=Ze,p.flattenDeep=function(t){
return null!=t&&t.length?a(t,1/0):[]},p.flattenDepth=function(t,e){return null!=t&&t.length?a(t,e=e===Go?1:P(e)):[]},
p.flip=function(t){return Ee(t,512)},p.flow=ho,p.flowRight=fo,p.fromPairs=function(t){for(var e,n=-1,
r=null==t?0:t.length,i={};++n<r;)i[(e=t[n])[0]]=e[1];return i},p.functions=function(t){return null==t?[]:ot(t,R(t))},
p.functionsIn=function(t){return null==t?[]:ot(t,T(t))},p.groupBy=pi,p.initial=function(t){return null!=t&&t.length?u(t,
0,-1):[]},p.intersection=Zr,p.intersectionBy=Yr,p.intersectionWith=e,p.invert=Ji,p.invertBy=Hi,p.invokeMap=gi,
p.iteratee=Un,p.keyBy=_i,p.keys=R,p.keysIn=T,p.map=cn,p.mapKeys=function(t,r){var i={};return r=l(r,3),rt(t,function(t,e
,n){K(i,r(t,e,n),t)}),i},p.mapValues=function(t,r){var i={};return r=l(r,3),rt(t,function(t,e,n){K(i,e,r(t,e,n))}),i},
p.matches=function(t){return wt(v(t,1))},p.matchesProperty=function(t,e){return mt(t,v(e,1))},p.memoize=dn,p.merge=Ki,
p.mergeWith=Xi,p.method=po,p.methodOf=go,p.mixin=In,p.negate=pn,p.nthArg=function(e){return e=P(e),s(function(t){
return Tt(t,e)})},p.omit=Qi,p.omitBy=function(t,e){return Nn(t,pn(l(e)))},p.once=function(t){return hn(2,t)},
p.orderBy=function(t,e,n,r){return null==t?[]:At(t,e=$(e)?e:null==e?[]:[e],n=$(n=r?Go:n)?n:null==n?[]:[n])},p.over=_o,
p.overArgs=Ti,p.overEvery=vo,p.overSome=yo,p.partial=Ai,p.partialRight=Oi,p.partition=vi,p.pick=Zi,p.pickBy=Nn,
p.property=kn,p.propertyOf=function(e){return function(t){return null==e?Go:st(e,t)}},p.pull=xo,p.pullAll=tn,
p.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?St(t,e,l(n,2)):t},p.pullAllWith=function(t,e,n){
return t&&t.length&&e&&e.length?St(t,e,Go,n):t},p.pullAt=ti,p.range=Eo,p.rangeRight=bo,p.rearg=Si,p.reject=function(t,e
){return($(t)?jo:nt)(t,pn(l(e,3)))},p.remove=function(t,e){var n,r,i,o,s=[];if(t&&t.length){for(n=-1,r=[],i=t.length,
e=l(e,3);++n<i;)e(o=t[n],n,t)&&(s.push(o),r.push(n));xt(t,r)}return s},p.rest=function(t,e){if("function"!=typeof t
)throw new j(Ho);return s(t,e=e===Go?e:P(e))},p.reverse=en,p.sampleSize=function(t,e,n){return e=(n?h(t,e,n):e===Go
)?1:P(e),($(t)?function(t,e){return Je(m(t),Q(e,0,t.length))}:function(t,e){return Je(t=Cn(t),Q(e,0,t.length))})(t,e)},
p.set=function(t,e,n){return null==t?t:Pt(t,e,n)},p.setWith=function(t,e,n,r){return r="function"==typeof r?r:Go,
null==t?t:Pt(t,e,n,r)},p.shuffle=function(t){return($(t)?function(t){return Je(m(t))}:function(t){return Je(Cn(t))})(t)}
,p.slice=function(t,e,n){var r=null==t?0:t.length;return r?(n=n&&"number"!=typeof n&&h(t,e,n)?(e=0,r):(e=null==e?0:P(e),
n===Go?r:P(n)),u(t,e,n)):[]},p.sortBy=yi,p.sortedUniq=function(t){return t&&t.length?qt(t):[]},p.sortedUniqBy=function(t
,e){return t&&t.length?qt(t,l(e,2)):[]},p.split=function(t,e,n){return n&&"number"!=typeof n&&h(t,e,n)&&(e=n=Go),(
n=n===Go?Ko:n>>>0)?(t=d(t))&&("string"==typeof e||null!=e&&!qi(e))&&!(e=c(e))&&Fo(t)?Jt(zo(t),0,n):t.split(e,n):[]},
p.spread=function(n,r){if("function"!=typeof n)throw new j(Ho);return r=null==r?0:q(P(r),0),s(function(t){var e=t[r],
t=Jt(t,0,r);return e&&Uo(t,e),Po(n,this,t)})},p.tail=function(t){var e=null==t?0:t.length;return e?u(t,1,e):[]},
p.take=function(t,e,n){return t&&t.length?u(t,0,(e=n||e===Go?1:P(e))<0?0:e):[]},p.takeRight=function(t,e,n){
var r=null==t?0:t.length;return r?u(t,(e=r-(n||e===Go?1:P(e)))<0?0:e,r):[]},p.takeRightWhile=function(t,e){
return t&&t.length?Ft(t,l(e,3),!1,!0):[]},p.takeWhile=function(t,e){return t&&t.length?Ft(t,l(e,3)):[]},p.tap=function(t
,e){return e(t),t},p.throttle=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new j(Ho);return w(n)&&(
r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),fn(t,e,{leading:r,maxWait:e,trailing:i})},p.thru=sn,
p.toArray=Rn,p.toPairs=Yi,p.toPairsIn=to,p.toPath=function(t){return $(t)?qo(t,He):y(t)?[t]:m(Kr(d(t)))},
p.toPlainObject=On,p.transform=function(t,r,i){var e,n=$(t),o=n||Li(t)||Ii(t);return r=l(r,4),null==i&&(
e=t&&t.constructor,i=o?n?new e:[]:w(t)&&vn(e)?qr(ir(t)):{}),(o?Lo:rt)(t,function(t,e,n){return r(i,t,e,n)}),i},
p.unary=function(t){return ln(t,1)},p.union=ei,p.unionBy=ni,p.unionWith=ri,p.uniq=function(t){return t&&t.length?It(t):[
]},p.uniqBy=function(t,e){return t&&t.length?It(t,l(e,2)):[]},p.uniqWith=function(t,e){
return e="function"==typeof e?e:Go,t&&t.length?It(t,Go,e):[]},p.unset=function(t,e){return null==t||Dt(t,e)},p.unzip=nn,
p.unzipWith=rn,p.update=function(t,e,n){return null==t?t:kt(t,e,Bt(n))},p.updateWith=function(t,e,n,r){
return r="function"==typeof r?r:Go,null==t?t:kt(t,e,Bt(n),r)},p.values=Cn,p.valuesIn=function(t){return null==t?[]:Ts(t,
T(t))},p.without=ii,p.words=jn,p.wrap=function(t,e){return Ai(Bt(e),t)},p.xor=oi,p.xorBy=si,p.xorWith=ui,p.zip=ai,
p.zipObject=function(t,e){return zt(t||[],e||[],W)},p.zipObjectDeep=function(t,e){return zt(t||[],e||[],Pt)},
p.zipWith=ci,p.entries=Yi,p.entriesIn=to,p.extend=$i,p.extendWith=Mi,In(p,p),p.add=wo,p.attempt=co,p.camelCase=eo,
p.capitalize=Pn,p.ceil=mo,p.clamp=function(t,e,n){return n===Go&&(n=e,e=Go),n!==Go&&(n=(n=E(n))==n?n:0),e!==Go&&(e=(e=E(
e))==e?e:0),Q(E(t),e,n)},p.clone=function(t){return v(t,4)},p.cloneDeep=function(t){return v(t,5)},
p.cloneDeepWith=function(t,e){return v(t,5,e="function"==typeof e?e:Go)},p.cloneWith=function(t,e){return v(t,4,
e="function"==typeof e?e:Go)},p.conformsTo=function(t,e){return null==e||Z(t,e,R(e))},p.deburr=Ln,p.defaultTo=function(t
,e){return null==t||t!=t?e:t},p.divide=Ro,p.endsWith=function(t,e,n){var r;return t=d(t),e=c(e),r=t.length,
r=n=n===Go?r:Q(P(n),0,r),0<=(n-=e.length)&&t.slice(n,r)==e},p.eq=gn,p.escape=function(t){return(t=d(t))&&_u.test(t
)?t.replace(pu,zs):t},p.escapeRegExp=function(t){return(t=d(t))&&Tu.test(t)?t.replace(Ru,"\\$&"):t},p.every=function(t,e
,n){return($(t)?as:function(t,r){var i=!0;return Ur(t,function(t,e,n){return i=!!r(t,e,n)}),i})(t,l(e=n&&h(t,e,n)?Go:e,3
))},p.find=fi,p.findIndex=Xe,p.findKey=function(t,e){return ps(t,l(e,3),rt)},p.findLast=di,p.findLastIndex=Qe,
p.findLastKey=function(t,e){return ps(t,l(e,3),it)},p.floor=To,p.forEach=un,p.forEachRight=an,p.forIn=function(t,e){
return null==t?t:Dr(t,l(e,3),T)},p.forInRight=function(t,e){return null==t?t:kr(t,l(e,3),T)},p.forOwn=function(t,e){
return t&&rt(t,l(e,3))},p.forOwnRight=function(t,e){return t&&it(t,l(e,3))},p.get=Sn,p.gt=xi,p.gte=Ni,p.has=function(t,e
){return null!=t&&Le(t,e,ct)},p.hasIn=xn,p.head=Ye,p.identity=A,p.includes=function(t,e,n,r){return t=f(t)?t:Cn(t),
n=n&&!r?P(n):0,r=t.length,n<0&&(n=q(r+n,0)),mn(t)?n<=r&&-1<t.indexOf(e,n):!!r&&-1<Io(t,e,n)},p.indexOf=function(t,e,n){
var r=null==t?0:t.length;return r?Io(t,e,(t=null==n?0:P(n))<0?q(r+t,0):t):-1},p.inRange=function(t,e,n){return e=Tn(e),
n===Go?(n=e,e=0):n=Tn(n),(t=E(t))>=k(e,n)&&t<q(e,n)},p.invoke=Vi,p.isArguments=Ci,p.isArray=$,p.isArrayBuffer=Pi,
p.isArrayLike=f,p.isArrayLikeObject=b,p.isBoolean=function(t){return!0===t||!1===t||I(t)&&n(t)==Qo},p.isBuffer=Li,
p.isDate=i,p.isElement=function(t){return I(t)&&1===t.nodeType&&!wn(t)},p.isEmpty=function(t){var e,n;if(null!=t){if(f(t
)&&($(t)||"string"==typeof t||"function"==typeof t.splice||Li(t)||Ii(t)||Ci(t)))return!t.length;if((e=F(t))==Yo||e==rs
)return!t.size;if(ke(t))return!yt(t).length;for(n in t)if(D.call(t,n))return!1}return!0},p.isEqual=function(t,e){
return pt(t,e)},p.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:Go)?n(t,e):Go;return r===Go?pt(t,e,Go,n
):!!r},p.isError=_n,p.isFinite=function(t){return"number"==typeof t&&gr(t)},p.isFunction=vn,p.isInteger=yn,p.isLength=En
,p.isMap=ji,p.isMatch=function(t,e){return t===e||gt(t,e,Ce(e))},p.isMatchWith=function(t,e,n){
return n="function"==typeof n?n:Go,gt(t,e,Ce(e),n)},p.isNaN=function(t){return bn(t)&&t!=+t},p.isNative=function(t){if(
Wr(t))throw new zn("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return _t(t)},p.isNil=function(t){
return null==t},p.isNull=function(t){return null===t},p.isNumber=bn,p.isObject=w,p.isObjectLike=I,p.isPlainObject=wn,
p.isRegExp=qi,p.isSafeInteger=function(t){return yn(t)&&-Vo<=t&&t<=Vo},p.isSet=Ui,p.isString=mn,p.isSymbol=y,
p.isTypedArray=Ii,p.isUndefined=function(t){return t===Go},p.isWeakMap=function(t){return I(t)&&F(t)==Ys},
p.isWeakSet=function(t){return I(t)&&"[object WeakSet]"==n(t)},p.join=function(t,e){return null==t?"":_r.call(t,e)},
p.kebabCase=no,p.last=r,p.lastIndexOf=function(t,e,n){var r,i,o,s,u=null==t?0:t.length;if(!u)return-1;if(r=u,n!==Go&&(
r=(r=P(n))<0?q(u+r,0):k(r,u-1)),e!=e)return gs(t,vs,r,!0);for(i=t,o=e,s=r+1;s--;)if(i[s]===o)return s;return s},
p.lowerCase=ro,p.lowerFirst=io,p.lt=Di,p.lte=ki,p.max=function(t){return t&&t.length?et(t,A,at):Go},p.maxBy=function(t,e
){return t&&t.length?et(t,l(e,2),at):Go},p.mean=function(t){return ys(t,A)},p.meanBy=function(t,e){return ys(t,l(e,2))},
p.min=function(t){return t&&t.length?et(t,A,Et):Go},p.minBy=function(t,e){return t&&t.length?et(t,l(e,2),Et):Go},
p.stubArray=Fn,p.stubFalse=$n,p.stubObject=function(){return{}},p.stubString=function(){return""},p.stubTrue=function(){
return!0},p.multiply=Ao,p.nth=function(t,e){return t&&t.length?Tt(t,P(e)):Go},p.noConflict=function(){
return Wo._===this&&(Wo._=tr),this},p.noop=Dn,p.now=Ei,p.pad=function(t,e,n){var r;return t=d(t),r=(e=P(e))?Mo(t):0,
!e||e<=r?t:de(dr(e=(e-r)/2),n)+t+de(fr(e),n)},p.padEnd=function(t,e,n){t=d(t);var r=(e=P(e))?Mo(t):0;return e&&r<e?t+de(
e-r,n):t},p.padStart=function(t,e,n){t=d(t);var r=(e=P(e))?Mo(t):0;return e&&r<e?de(e-r,n)+t:t},p.parseInt=function(t,e,
n){return e=n||null==e?0:e&&+e,Er(d(t).replace(Au,""),e||0)},p.random=function(t,e,n){var r;
return n&&"boolean"!=typeof n&&h(t,e,n)&&(e=n=Go),n===Go&&("boolean"==typeof e?(n=e,e=Go):"boolean"==typeof t&&(n=t,t=Go
)),t===Go&&e===Go?(t=0,e=1):(t=Tn(t),e===Go?(e=t,t=0):e=Tn(e)),e<t&&(r=t,t=e,e=r),n||t%1||e%1?(r=br(),k(t+r*(e-t+Ls(
"1e-"+((r+"").length-1))),e)):Nt(t,e)},p.reduce=function(t,e,n){var r=$(t)?hs:bs,i=arguments.length<3;return r(t,l(e,4),
n,i,Ur)},p.reduceRight=function(t,e,n){var r=$(t)?fs:bs,i=arguments.length<3;return r(t,l(e,4),n,i,Ir)},
p.repeat=function(t,e,n){return e=(n?h(t,e,n):e===Go)?1:P(e),Ct(d(t),e)},p.replace=function(){var t=arguments,e=d(t[0]);
return t.length<3?e:e.replace(t[1],t[2])},p.result=function(t,e,n){var r,i,o=-1;for((r=(e=Wt(e,t)).length)||(r=1,t=Go
);++o<r;)(i=null==t?Go:t[He(e[o])])===Go&&(o=r,i=n),t=vn(i)?i.call(t):i;return t},p.round=Oo,p.runInContext=o,
p.sample=function(t){return($(t)?G:function(t){return G(Cn(t))})(t)},p.size=function(t){var e;return null==t?0:f(t)?mn(t
)?Mo(t):t.length:(e=F(t))==Yo||e==rs?t.size:yt(t).length},p.snakeCase=oo,p.some=function(t,e,n){return($(t)?ds:function(
t,r){var i;return Ur(t,function(t,e,n){return!(i=r(t,e,n))}),!!i})(t,l(e=n&&h(t,e,n)?Go:e,3))},p.sortedIndex=function(t,
e){return Lt(t,e)},p.sortedIndexBy=function(t,e,n){return jt(t,e,l(n,2))},p.sortedIndexOf=function(t,e){var n,
r=null==t?0:t.length;return r&&(n=Lt(t,e))<r&&gn(t[n],e)?n:-1},p.sortedLastIndex=function(t,e){return Lt(t,e,!0)},
p.sortedLastIndexBy=function(t,e,n){return jt(t,e,l(n,2),!0)},p.sortedLastIndexOf=function(t,e){
return null!=t&&t.length&&gn(t[t=Lt(t,e,!0)-1],e)?t:-1},p.startCase=so,p.startsWith=function(t,e,n){return t=d(t),
n=null==n?0:Q(P(n),0,t.length),e=c(e),t.slice(n,n+e.length)==e},p.subtract=So,p.sum=function(t){return t&&t.length?ws(t,
A):0},p.sumBy=function(t,e){return t&&t.length?ws(t,l(e,2)):0},p.template=function(s,t,e){var n,r,u,a,c,l,i,
o=p.templateSettings;if(e&&h(s,t,e)&&(t=Go),s=d(s),t=Mi({},t,o,be),e=Mi({},t.imports,o.imports,be),n=R(e),r=Ts(e,n),c=0,
o=t.interpolate||$u,l="__p += '",e=Wn((t.escape||$u).source+"|"+o.source+"|"+(o===Eu?Lu:$u).source+"|"+(t.evaluate||$u
).source+"|$","g"),i="//# sourceURL="+(D.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "
):"lodash.templateSources["+ ++Hu+"]")+"\n",s.replace(e,function(t,e,n,r,i,o){return n=n||r,l+=s.slice(c,o).replace(Mu,
Ss),e&&(u=!0,l+="' +\n__e("+e+") +\n'"),i&&(a=!0,l+="';\n"+i+";\n__p += '"),n&&(
l+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=o+t.length,t}),l+="';\n",o=D.call(t,"variable")&&t.variable){if(
Cu.test(o))throw new zn("Invalid `variable` option passed into `_.template`")}else l="with (obj) {\n"+l+"\n}\n";if(l=(
a?l.replace(lu,""):l).replace(hu,"$1").replace(fu,"$1;"),l="function("+(o||"obj")+") {\n"+(o?"":"obj || (obj = {});\n"
)+"var __t, __p = ''"+(u?", __e = _.escape":"")+(
a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+l+"return __p\n}",(e=co(
function(){return Gn(n,i+"return "+l).apply(Go,r)})).source=l,_n(e))throw e;return e},p.times=function(t,e){var n,r;if((
t=P(t))<1||Vo<t)return[];for(r=k(t,n=Ko),e=l(e),t-=Ko,r=ms(r,e);++n<t;)e(n);return r},p.toFinite=Tn,p.toInteger=P,
p.toLength=An,p.toLower=function(t){return d(t).toLowerCase()},p.toNumber=E,p.toSafeInteger=function(t){return t?Q(P(t),
-Vo,Vo):0===t?t:0},p.toString=d,p.toUpper=function(t){return d(t).toUpperCase()},p.trim=function(t,e,n){return(t=d(t)
)&&(n||e===Go)?Rs(t):t&&(e=c(e))?Jt(n=zo(t),As(n,e=zo(e)),Os(n,e)+1).join(""):t},p.trimEnd=function(t,e,n){return(t=d(t)
)&&(n||e===Go)?t.slice(0,Ps(t)+1):t&&(e=c(e))?Jt(n=zo(t),0,Os(n,zo(e))+1).join(""):t},p.trimStart=function(t,e,n){
return(t=d(t))&&(n||e===Go)?t.replace(Au,""):t&&(e=c(e))?Jt(n=zo(t),As(n,zo(e))).join(""):t},p.truncate=function(t,e){
var n,r,i,o,s,u=30,a="...";if(w(e)&&(n="separator"in e?e.separator:n,u="length"in e?P(e.length):u,a="omission"in e?c(
e.omission):a),e=(t=d(t)).length,(Fo(t)?(s=zo(t)).length:e)<=u)return t;if((e=u-Mo(a))<1)return a;if(u=s?Jt(s,0,e).join(
""):t.slice(0,e),n!==Go)if(s&&(e+=u.length-e),qi(n)){if(t.slice(e).search(n)){for(i=u,(n=n.global?n:Wn(n.source,d(
ju.exec(n))+"g")).lastIndex=0;r=n.exec(i);)o=r.index;u=u.slice(0,o===Go?e:o)}}else t.indexOf(c(n),e)!=e&&-1<(
s=u.lastIndexOf(n))&&(u=u.slice(0,s));return u+a},p.unescape=function(t){return(t=d(t))&&gu.test(t)?t.replace(du,Gs):t},
p.uniqueId=function(t){var e=++Xn;return d(t)+e},p.upperCase=uo,p.upperFirst=ao,p.each=un,p.eachRight=an,p.first=Ye,In(p
,(Co={},rt(p,function(t,e){D.call(p.prototype,e)||(Co[e]=t)}),Co),{chain:!1}),p.VERSION="4.17.21",Lo(["bind","bindKey",
"curry","curryRight","partial","partialRight"],function(t){p[t].placeholder=p}),Lo(["drop","take"],function(n,r){
_.prototype[n]=function(t){t=t===Go?1:q(P(t),0);var e=this.__filtered__&&!r?new _(this):this.clone();
return e.__filtered__?e.__takeCount__=k(t,e.__takeCount__):e.__views__.push({size:k(t,Ko),type:n+(e.__dir__<0?"Right":""
)}),e},_.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Lo(["filter","map","takeWhile"],
function(t,e){var n=e+1,r=1==n||3==n;_.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({
iteratee:l(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),Lo(["head","last"],function(t,e){var n="take"+(
e?"Right":"");_.prototype[t]=function(){return this[n](1).value()[0]}}),Lo(["initial","tail"],function(t,e){
var n="drop"+(e?"":"Right");_.prototype[t]=function(){return this.__filtered__?new _(this):this[n](1)}}),
_.prototype.compact=function(){return this.filter(A)},_.prototype.find=function(t){return this.filter(t).head()},
_.prototype.findLast=function(t){return this.reverse().find(t)},_.prototype.invokeMap=s(function(e,n){
return"function"==typeof e?new _(this):this.map(function(t){return ft(t,e,n)})}),_.prototype.reject=function(t){
return this.filter(pn(l(t)))},_.prototype.slice=function(t,e){t=P(t);var n=this;return n.__filtered__&&(0<t||e<0)?new _(
n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==Go?(e=P(e))<0?n.dropRight(-e):n.take(e-t):n)},
_.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},_.prototype.toArray=function(){
return this.take(Ko)},rt(_.prototype,function(c,t){var l=/^(?:filter|find|map|reject)|While$/.test(t),
h=/^(?:head|last)$/.test(t),f=p[h?"take"+("last"==t?"Right":""):t],d=h||/^find/.test(t);f&&(p.prototype[t]=function(){
function t(t){return t=f.apply(p,Uo([t],o)),h&&e?t[0]:t}var e,n,r,i=this.__wrapped__,o=h?[1]:arguments,s=i instanceof _,
u=o[0],a=s||$(i);return a&&l&&"function"==typeof u&&1!=u.length&&(s=a=!1),e=this.__chain__,u=!!this.__actions__.length,
n=d&&!e,s=s&&!u,!d&&a?(i=s?i:new _(this),(r=c.apply(i,o)).__actions__.push({func:sn,args:[t],thisArg:Go}),new g(r,e)
):n&&s?c.apply(this,o):(r=this.thru(t),n?h?r.value()[0]:r.value():r)})}),Lo(["pop","push","shift","sort","splice",
"unshift"],function(t){var n=Hn[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|shift)$/.test(t);
p.prototype[t]=function(){var t,e=arguments;return i&&!this.__chain__?(t=this.value(),n.apply($(t)?t:[],e)):this[r](
function(t){return n.apply($(t)?t:[],e)})}}),rt(_.prototype,function(t,e){var n,r=p[e];r&&(n=r.name+"",D.call(Or,n)||(
Or[n]=[]),Or[n].push({name:e,func:r}))}),Or[ce(Go,2).name]=[{name:"wrapper",func:Go}],_.prototype.clone=function(){
var t=new _(this.__wrapped__);return t.__actions__=m(this.__actions__),t.__dir__=this.__dir__,
t.__filtered__=this.__filtered__,t.__iteratees__=m(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=m(
this.__views__),t},_.prototype.reverse=function(){var t;return this.__filtered__?((t=new _(this)).__dir__=-1,
t.__filtered__=!0):(t=this.clone()).__dir__*=-1,t},_.prototype.value=function(){var t,e,n,r,i,o=this.__wrapped__.value()
,s=this.__dir__,u=$(o),a=s<0,c=u?o.length:0,l=function(t,e,n){for(var r,i,o=-1,s=n.length;++o<s;)switch(r=n[o],i=r.size,
r.type){case"drop":t+=i;break;case"dropRight":e-=i;break;case"take":e=k(e,t+i);break;case"takeRight":t=q(t,e-i)}return{
start:t,end:e}}(0,c,this.__views__),h=l.start,f=(l=l.end)-h,d=a?l:h-1,p=this.__iteratees__,g=p.length,_=0,v=k(f,
this.__takeCount__);if(!u||!a&&c==f&&v==f)return $t(o,this.__actions__);t=[];t:for(;f--&&_<v;){for(e=-1,n=o[d+=s];++e<g;
)if(i=(r=p[e]).iteratee,r=r.type,i=i(n),2==r)n=i;else if(!i){if(1==r)continue t;break t}t[_++]=n}return t},
p.prototype.at=li,p.prototype.chain=function(){return on(this)},p.prototype.commit=function(){return new g(this.value(),
this.__chain__)},p.prototype.next=function(){this.__values__===Go&&(this.__values__=Rn(this.value()));
var t=this.__index__>=this.__values__.length;return{done:t,value:t?Go:this.__values__[this.__index__++]}},
p.prototype.plant=function(t){for(var e,n,r,i=this;i instanceof S;)(n=Ke(i)).__index__=0,n.__values__=Go,
e?r.__wrapped__=n:e=n,r=n,i=i.__wrapped__;return r.__wrapped__=t,e},p.prototype.reverse=function(){
var t=this.__wrapped__;return t instanceof _?((t=(t=this.__actions__.length?new _(this):t).reverse()).__actions__.push({
func:sn,args:[en],thisArg:Go}),new g(t,this.__chain__)):this.thru(en)},
p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=function(){return $t(this.__wrapped__,this.__actions__)},
p.prototype.first=p.prototype.head,cr&&(p.prototype[cr]=function(){return this}),p}(),t?((t.exports=Jo)._=Jo,e._=Jo
):Wo._=Jo}.call(Qt),Ki=Vi=function(t){return"number"==typeof t&&t==Hi(t)},Qi=function(t){return Ki(t)&&-Xi<=t&&t<=Xi},
Zi=function(t){return null===t},eo=function(t){return"number"==typeof t||to(t)&&"[object Number]"==Yi(t)},
Xi=9007199254740991,io=function(t){return t?no(ro(t),-9007199254740991,9007199254740991):0===t?t:0},oo=no=n=function(t,e
,n){return t!=t||(void 0!==n&&(t=t<=n?t:n),void 0===e)||e<=t?t:e},so=Wt,uo=ro=Hi=Zs,ao=iu,co=function(t,e,n){
return t=ao(t),n=null==n?0:oo(uo(n),0,t.length),e=so(e),t.slice(n,n+e.length)==e},lo=Yi=Ms,ho=to=Zt,fo=function(t){
return!0===t||!1===t||ho(t)&&"[object Boolean]"==lo(t)},f=null!=(Os=st(""))?Os:"hg-command",v=null!=(m=st(""))?m:"",
null==(b=function(){if(!"".startsWith("%{")||!"".endsWith("}"))return ot("")}())||b),Eu=(Ss=null!=(r=function(t){if(t){
if(function(){switch(t){case S.DEBUG:case S.INFO:case S.WARN:case S.ERROR:case S.NONE:return 1;default:return}}()
)return t;switch((""+t).toUpperCase()){case"ALL":case"DEBUG":return S.DEBUG;case"INFO":return S.INFO;case"WARN":
case"WARNING":return S.WARN;case"ERR":case"ERROR":return S.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":
case"NONE":return S.NONE;default:return}}}(null!=(xs=it(null==(O=process)||null==(t=O.env)?void 0:t.LOG_LEVEL))?xs:it(v)
))?r:S.INFO,null!=(Oe=it(null==(ss=process)||null==(E=ss.env)?void 0:E.COMMAND_NAME))?Oe:f),C=((_=(d={}).HttpMethods||(
d.HttpMethods={})).GET="get",_.PUT="put",_.POST="post",_.DELETE="delete",_.OPTIONS="options",_.HEAD="head",
_.PATCH="patch",_.TRACE="trace",(m=(Os={}).HttpMethods||(Os.HttpMethods={})).GET="get",m.PUT="put",m.POST="post",
m.DELETE="delete",m.OPTIONS="options",m.HEAD="head",m.PATCH="patch",(b=i={})[b.OPTIONS=0]="OPTIONS",b[b.GET=1]="GET",b[
b.POST=2]="POST",b[b.PUT=3]="PUT",b[b.DELETE=4]="DELETE",b[b.PATCH=5]="PATCH",b[b.TRACE=6]="TRACE",b[b.HEAD=7]="HEAD",
x.createLogger("RequestClientImpl"));class P{constructor(t){s(this,"_adapter",void 0),this._adapter=t}getClient(){
return this._adapter}async textEntityRequest(t,e,n,r){return this._adapter.textEntityRequest(t,e,n,r)}
async getTextEntity(t,e){return this._adapter.textEntityRequest(i.GET,t,e)}async postTextEntity(t,e,n){return C.debug(
".postJson: ",t,e,n),this._adapter.textEntityRequest(i.POST,t,n,e)}async patchTextEntity(t,e,n){return C.debug(
".patchJson: ",t,e,n),this._adapter.textEntityRequest(i.PATCH,t,n,e)}async putTextEntity(t,e,n){return C.debug(
".putJson: ",t,e,n),this._adapter.textEntityRequest(i.PUT,t,n,e)}async deleteTextEntity(t,e,n){return C.debug(
".deleteJson: ",t,n,e),this._adapter.textEntityRequest(i.DELETE,t,e,n)}async textRequest(t,e,n,r){
return this._adapter.textRequest(t,e,n,r)}async getText(t,e){return this._adapter.textRequest(i.GET,t,e)}async postText(
t,e,n){return C.debug(".postJson: ",t,e,n),this._adapter.textRequest(i.POST,t,n,e)}async patchText(t,e,n){
return C.debug(".patchJson: ",t,e,n),this._adapter.textRequest(i.PATCH,t,n,e)}async putText(t,e,n){return C.debug(
".putJson: ",t,e,n),this._adapter.textRequest(i.PUT,t,n,e)}async deleteText(t,e,n){return C.debug(".deleteJson: ",t,n,e)
,this._adapter.textRequest(i.DELETE,t,e,n)}async jsonRequest(t,e,n,r){return this._adapter.jsonRequest(t,e,n,r)}
async getJson(t,e){return this._adapter.jsonRequest(i.GET,t,e)}async postJson(t,e,n){return this._adapter.jsonRequest(
i.POST,t,n,e)}async patchJson(t,e,n){return this._adapter.jsonRequest(i.PATCH,t,n,e)}async putJson(t,e,n){
return this._adapter.jsonRequest(i.PUT,t,n,e)}async deleteJson(t,e,n){return this._adapter.jsonRequest(i.DELETE,t,e,n)}
async jsonEntityRequest(t,e,n,r){return this._adapter.jsonEntityRequest(t,e,n,r)}async getJsonEntity(t,e){
return this._adapter.jsonEntityRequest(i.GET,t,e)}async postJsonEntity(t,e,n){return this._adapter.jsonEntityRequest(
i.POST,t,n,e)}async patchJsonEntity(t,e,n){return this._adapter.jsonEntityRequest(i.PATCH,t,n,e)}async putJsonEntity(t,e
,n){return this._adapter.jsonEntityRequest(i.PUT,t,n,e)}async deleteJsonEntity(t,e,n){
return this._adapter.jsonEntityRequest(i.DELETE,t,e,n)}static create(t){return new P(t)}static setLogLevel(t){
C.setLogLevel(t)}static setClient(t){this._client=new P(t)}static hasClient(){return!!this._client}static getClient(){
if(this._client)return this._client.getClient();throw new TypeError("Client has not been initialized yet")}
static async textRequest(t,e,n,r){if(this._client)return this._client.textRequest(t,e,n,r);
throw this._createClientError()}static async getText(t,e){if(this._client)return this._client.getText(t,e);
throw this._createClientError()}static async postText(t,e,n){if(this._client)return C.debug(".postJson: ",t,e,n),
this._client.postText(t,e,n);throw this._createClientError()}static async patchText(t,e,n){if(this._client
)return C.debug(".patchJson: ",t,e,n),this._client.patchText(t,e,n);throw this._createClientError()}
static async putText(t,e,n){if(this._client)return this._client.putText(t,e,n);throw this._createClientError()}
static async deleteText(t,e,n){if(this._client)return this._client.deleteText(t,e,n);throw this._createClientError()}
static async jsonRequest(t,e,n,r){if(this._client)return this._client.jsonRequest(t,e,n,r);
throw this._createClientError()}static async getJson(t,e){if(this._client)return this._client.getJson(t,e);
throw this._createClientError()}static async postJson(t,e,n){if(this._client)return C.debug(".postJson: ",t,e,n),
this._client.postJson(t,e,n);throw this._createClientError()}static async patchJson(t,e,n){if(this._client
)return this._client.patchJson(t,e,n);throw this._createClientError()}static async putJson(t,e,n){if(this._client
)return this._client.putJson(t,e,n);throw this._createClientError()}static async deleteJson(t,e,n){if(this._client
)return this._client.deleteJson(t,e,n);throw this._createClientError()}static async textEntityRequest(t,e,n,r){if(
this._client)return this._client.textEntityRequest(t,e,n,r);throw this._createClientError()}static async getTextEntity(t
,e){if(this._client)return this._client.getTextEntity(t,e);throw this._createClientError()}static async postTextEntity(t
,e,n){if(this._client)return C.debug(".postJson: ",t,e,n),this._client.postTextEntity(t,e,n);
throw this._createClientError()}static async patchTextEntity(t,e,n){if(this._client)return C.debug(".patchJson: ",t,e,n)
,this._client.patchTextEntity(t,e,n);throw this._createClientError()}static async putTextEntity(t,e,n){if(this._client
)return this._client.putTextEntity(t,e,n);throw this._createClientError()}static async deleteTextEntity(t,e,n){if(
this._client)return this._client.deleteTextEntity(t,e,n);throw this._createClientError()}static async jsonEntityRequest(
t,e,n,r){if(this._client)return this._client.jsonEntityRequest(t,e,n,r);throw this._createClientError()}
static async getJsonEntity(t,e){if(this._client)return this._client.getJsonEntity(t,e);throw this._createClientError()}
static async postJsonEntity(t,e,n){if(this._client)return C.debug(".postJson: ",t,e,n),this._client.postJsonEntity(t,e,n
);throw this._createClientError()}static async patchJsonEntity(t,e,n){if(this._client
)return this._client.patchJsonEntity(t,e,n);throw this._createClientError()}static async putJsonEntity(t,e,n){if(
this._client)return this._client.putJsonEntity(t,e,n);throw this._createClientError()}static async deleteJsonEntity(t,e,
n){if(this._client)return this._client.deleteJsonEntity(t,e,n);throw this._createClientError()}
static _createClientError(){return new TypeError(
"RequestClient: You must initialize implementation first using HgFrontend.initialize() or HgNode.initialize()")}}s(P,
"_client",void 0),T={OK:0,0:"OK",GENERAL_ERRORS:1,1:"GENERAL_ERRORS",MISUSE_OF_SHELL_BUILTINS:2,
2:"MISUSE_OF_SHELL_BUILTINS",ARGUMENT_PARSE_ERROR:3,3:"ARGUMENT_PARSE_ERROR",UNKNOWN_ARGUMENT:4,4:"UNKNOWN_ARGUMENT",
UNIMPLEMENTED_FEATURE:5,5:"UNIMPLEMENTED_FEATURE",FATAL_ERROR:6,6:"FATAL_ERROR",CONFLICT:7,7:"CONFLICT",USAGE:64,
64:"USAGE",DATAERR:65,65:"DATAERR",NOINPUT:66,66:"NOINPUT",NOUSER:67,67:"NOUSER",NOHOST:68,68:"NOHOST",UNAVAILABLE:69,
69:"UNAVAILABLE",SOFTWARE:70,70:"SOFTWARE",OSERR:71,71:"OSERR",OSFILE:72,72:"OSFILE",CANTCREAT:73,73:"CANTCREAT",
IOERR:74,74:"IOERR",TEMPFAIL:75,75:"TEMPFAIL",PROTOCOL:76,76:"PROTOCOL",NOPERM:77,77:"NOPERM",CONFIG:78,78:"CONFIG",
COMMAND_INVOKED_CANNOT_EXECUTE:126,126:"COMMAND_INVOKED_CANNOT_EXECUTE",COMMAND_NOT_FOUND:127,127:"COMMAND_NOT_FOUND",
INVALID_ARGUMENT_TO_EXIT:128,128:"INVALID_ARGUMENT_TO_EXIT",FATAL_SIGNAL_RANGE_START:129,129:"FATAL_SIGNAL_RANGE_START",
FATAL_SIGNAL_RANGE_END:192,192:"FATAL_SIGNAL_RANGE_END",EXIT_STATUS_OUT_OF_RANGE:255,255:"EXIT_STATUS_OUT_OF_RANGE"},
po=w,go=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},vo=function(t){
return"function"==typeof t?t:po},Eo=function(t,e){return(yo(t)?go:_o)(t,vo(e))},bo=_o=js,wo=Rs,mo=Bt,Ro=a,To=function(t,
r){var i=-1,o=wo(t)?Array(t.length):[];return bo(t,function(t,e,n){o[++i]=r(t,e,n)}),o},Ao=yo=$s,g=function(t,e){return(
Ao(t)?mo:To)(t,Ro(e))},O=Object.prototype,Oo=O.hasOwnProperty,So=function(t,e){return null!=t&&Oo.call(t,e)},xo=hi,
A=function(t,e){return null!=t&&xo(t,e,So)},No={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};
const bu=x.createLogger("NumberUtils");class wu{static parseNumber(e){try{var t;if(void 0!==e&&(h(e)||(e=""+e),""!==(
e=Ji.trim(e))))return t=parseFloat(e),isNaN(t)?void 0:t}catch(t){bu.warn(
`toNumber: Error while parsing value as number "${e}": `,t)}}}const mu=x.createLogger("CommandArgumentUtils");class Ru{
static setLogLevel(t){mu.setLogLevel(t)}static parseArguments(t,e=[],n,r){var i,o,s,u,a,c,l=[...e];mu.debug("myArgs = ",
l),o=null!=(e=l.shift())?e:"",mu.debug("nodePath = ",o),s=null!=(e=l.shift())?e:"",mu.debug("scriptNameFromArgs = ",s);
const h=n||{};if(!s)return{parseStatus:No.ERROR,exitStatus:T.ARGUMENT_PARSE_ERROR,nodePath:o,scriptName:t,freeArgs:[],
extraArgs:[],userArgs:{}};if(0===l.length)return{parseStatus:No.ERROR,exitStatus:T.ARGUMENT_PARSE_ERROR,nodePath:o,
scriptName:s,freeArgs:[],extraArgs:[],userArgs:{}};let f=!0,d=(u=[],a=[],{}),p={},g={},_={};Eo(R(h),t=>{var[,e,n,r]=h[t]
e&&(p[e]=t),n&&(g[n]=t),r&&(_[r]=t)});do{if(c=null!=(i=l.shift())?i:"",f)switch(function(){switch(c){case"-h":
case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return{
parseStatus:No.HELP,exitStatus:T.OK,nodePath:o,scriptName:s,freeArgs:u,extraArgs:a,userArgs:d};case 1:return{
parseStatus:No.VERSION,exitStatus:T.OK,nodePath:o,scriptName:s,freeArgs:u,extraArgs:a,userArgs:d};case 2:f=!1;break;
default:if(!co(c,"-")){u.push(c);break}if(1<=pe(c,"=")){var[v,...y]=c.split("="),y=y.join("=");if(A(p,v)){var E=p[v],[b,
,,,,]=h[E];try{d[E]=dt(c,b,0,y,r)}catch(t){return Ru._getArgumentParseError(t,o,s,u,a,d)}break}if(A(g,v)){var E=g[v],[b,
,,,,]=h[E];try{d[E]=dt(c,b,0,y,r)}catch(t){return Ru._getArgumentParseError(t,o,s,u,a,d)}break}}else{if(A(p,c)){var v=p[
c],[y,,,,,]=h[v];try{d[v]=pt(c,y,r)}catch(t){return Ru._getArgumentParseError(t,o,s,u,a,d)}break}if(A(g,c)){var w=g[c],[
m,,,,,]=h[w];try{d[w]=pt(c,m,r)}catch(t){return Ru._getArgumentParseError(t,o,s,u,a,d)}break}}return{
errorString:"Unknown argument: "+c,parseStatus:No.ERROR,exitStatus:T.UNKNOWN_ARGUMENT,nodePath:o,scriptName:s,
freeArgs:u,extraArgs:a,userArgs:d}}else a.push(c)}while(1<=l.length);return Eo(R(_),t=>{var e=_[t],[n,,,]=h[e];A(
process.env,t)&&!A(d,e)&&(d[e]=dt(t,n,0,process.env[t],r))}),{parseStatus:No.OK,exitStatus:T.OK,nodePath:o,scriptName:s,
freeArgs:u,extraArgs:a,userArgs:d}}static _getArgumentParseError(t,e,n,r,i,o){return{
errorString:"Argument parse error: "+t,parseStatus:No.ERROR,exitStatus:T.ARGUMENT_PARSE_ERROR,nodePath:e,scriptName:n,
freeArgs:r,extraArgs:i,userArgs:o}}}Co=Le,Po=$s,Lo=Fs?Fs.isConcatSpreadable:void 0,qo=function(t){return Po(t)||Co(t
)||!!(Lo&&t&&t[Lo])},Uo=jo=rr,Io=function t(e,n,r,i,o){var s,u=-1,a=e.length;for(r=r||qo,o=o||[];++u<a;)s=e[u],0<n&&r(s
)?1<n?t(s,n-1,r,i,o):jo(o,s):i||(o[o.length]=s);return o},Do=function(t,e){var n=-1,r=t.length;for(e=e||Array(r);++n<r;
)e[n]=t[n];return e},Fo=function(){var t,e,n,r=arguments.length;if(!r)return[];for(t=Array(r-1),e=arguments[0],n=r;n--;
)t[n-1]=arguments[n];return Uo(ko(e)?Do(e):[e],Io(t,1))},$o=function(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(
n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n},Go=function(t,r,i,o,e){return e(t,function(t,e,n){i=o?(o=!1,t):r(i,t,e,n)}),i
},Wo=function(t,e,n){var r=Bo(t)?$o:Go,i=arguments.length<3;return r(t,zo(e),n,i,Mo)},Jo=Mo=js,Ho=Hn,Vo=zo=a,
Ko=function(t,r){var i;return Jo(t,function(t,e,n){return!(i=r(t,e,n))}),!!i},Xo=Bo=ko=$s,Qo=c,Zo=function(t,e,n){
var r=Xo(t)?Ho:Ko;return n&&Qo(t,e,n)&&(e=void 0),r(t,Vo(e))},Yo=Bt,ts=function(e,t){return Yo(t,function(t){return e[t]
})},es=sn,ns=function(t){return null==t?[]:ts(t,es(t))};const Tu=x.createLogger("Headers");class Au{static setLogLevel(t
){Tu.setLogLevel(t)}constructor(t){s(this,"_value",void 0),s(this,"_uninitializedValue",void 0),this._value=void 0,
this._uninitializedValue=t}static create(t){return new Au(t)}_initializeValue(){var e=this._value,
n=this._uninitializedValue;try{n&&(this._uninitializedValue=void 0,this.addAll(n))}catch(t){throw this._value=e,
this._uninitializedValue=n,t}}clear(){this._value={},this._uninitializedValue=void 0}add(t,e){
this._uninitializedValue&&this._initializeValue(),Tu.debug("add header: ",t,e),t=t.toLowerCase();var n=this._value&&A(
this._value,t)?this._value[t]:void 0;void 0===this._value?this._value={[t]:e}:void 0!==n?mt(n)?this._value=p(p({},
this._value),{},{[t]:Fo([],n,[e])}):this._value=p(p({},this._value),{},{[t]:[n,e]}):this._value=p(p({},this._value),{},{
[t]:e})}containsKey(t){return this._uninitializedValue&&this._initializeValue(),t=t.toLowerCase(),A(this._value,t)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var t=this._value;return!t||0===R(t).length}keySet(){
this._uninitializedValue&&this._initializeValue();const e=new Set;var t;return void 0!==this._value&&(t=R(this._value),
Eo(t,t=>{e.add(t)})),e}getValue(t){if(this._uninitializedValue&&this._initializeValue(),this._value
)return t=t.toLowerCase(),A(this._value,t)?this._value[t]:void 0}getFirst(t){
return this._uninitializedValue&&this._initializeValue(),mt(t=this.getValue(t))?t.length?t[0]:void 0:t}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(t,e){if(
this._uninitializedValue&&this._initializeValue(),h(t)){const n=t;if(!lt(e))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");Eo(e,t=>{this.add(n,t)})}else{const r=t;Eo(R(r
),e=>{var t=r[e];mt(t)?Eo(t,t=>{this.add(e,t)}):void 0!==t&&this.add(e,t)})}}remove(t){
this._uninitializedValue&&this._initializeValue(),t=t.toLowerCase();var e=this.getValue(t),n=p({},this._value);
return n&&A(n,t)&&delete n[t],this._value=n,e}set(t,e){this._uninitializedValue&&this._initializeValue(),
t=t.toLowerCase(),void 0===this._value?this._value={[t]:e}:this._value=p(p({},this._value),{},{[t]:e})}setAll(e){
this._uninitializedValue&&this._initializeValue(),Eo(R(e),t=>{this.set(t,e[t])})}valueOf(){var t;
return this._uninitializedValue&&this._initializeValue(),null!=(t=this._value)?t:void 0}toJSON(){return this.valueOf()}
toString(){this._uninitializedValue&&this._initializeValue();const n=this._value;var t;return!n||this.isEmpty(
)?"Headers()":(t=R(n),`Headers(${g(t,t=>{const e=n[t];return e?lt(e)?t+": "+e.map(t=>0<=e.indexOf(";")||0<=e.indexOf(","
)?`"${e}"`:e).join(", "):0<=e.indexOf(";")?`${t}: "${e}"`:t+": "+e:""+t}).join("; ")})`)}clone(){
return this._uninitializedValue&&this._initializeValue(),new Au(this._value?p({},this._value):void 0)}}class Ou{
constructor(t){s(this,"_ai",void 0),this._ai=t}async main(t){var e;return 0===t.length?T.USAGE:([t,...e]=t,
"ai"===t?this._ai.main(e):(console.error("Unknown command: "+t),T.COMMAND_NOT_FOUND))}async ai(t){return this._ai.main(t
)}}const Su=!("production"===(xs=null!=(t=function(t){if(void 0!==t&&!(!(t=""+t)||t.startsWith("%{")&&t.endsWith("}"))
)return t}("production"))?t:"development")||"test"===xs),xu=((v=rs={}).DAVINCI="text-davinci-003",
v.DAVINCI_EDIT_TEXT="text-davinci-edit-001",v.DAVINCI_EDIT_CODE="code-davinci-edit-001",v.CURIE="text-curie-001",
v.BABBAGE="text-babbage-001",v.ADA="text-ada-001",v.CONTENT_FILTER="content-filter-alpha",v.CODEX="code-davinci-002",
is=Ms,os=Zt,ss=(r=Fe&&Fe.isRegExp)?ke(r):function(t){return os(t)&&"[object RegExp]"==is(t)},us=Wt,as=Ht,cs=Xt,ls=c,
hs=ss,fs=ou,ds=iu,ps=function(t,e,n){return n&&"number"!=typeof n&&ls(t,e,n)&&(e=n=void 0),(
n=void 0===n?4294967295:n>>>0)?(t=ds(t))&&("string"==typeof e||null!=e&&!hs(e))&&!(e=us(e))&&cs(t)?as(fs(t),0,n
):t.split(e,n):[]},"TypeScript"),Nu=rs.DAVINCI,Cu=rs.DAVINCI,Pu=rs.DAVINCI_EDIT_CODE,Lu=rs.DAVINCI_EDIT_CODE,
L=x.createLogger("HgAiCommandServiceImpl");class ju{static setLogLevel(t){L.setLogLevel(t)}constructor(t){s(this,
"_iterations",void 0),s(this,"_client",void 0),s(this,"_suffix",void 0),s(this,"_language",void 0),s(this,"_model",
void 0),s(this,"_echo",void 0),s(this,"_user",void 0),s(this,"_stop",void 0),s(this,"_logProbs",void 0),s(this,"_bestOf"
,void 0),s(this,"_maxTokens",void 0),s(this,"_n",void 0),s(this,"_frequencyPenalty",void 0),s(this,"_presencePenalty",
void 0),s(this,"_topP",void 0),s(this,"_temperature",void 0),this._client=t}setIterations(t){this._iterations=t}
setLanguage(t){this._language=t}setSuffix(t){this._suffix=t}setModel(t){this._model=t}setStop(t){this._stop=t}setUser(t
){this._user=t}setLogProbs(t){this._logProbs=t}setBestOf(t){this._bestOf=t}setPresencePenalty(t){this._presencePenalty=t
}setFrequencyPenalty(t){this._frequencyPenalty=t}setEcho(t){this._echo=t}setN(t){this._n=t}setTopP(t){this._topP=t}
setTemperature(t){this._temperature=t}setMaxTokens(t){this._maxTokens=t}async main(e){if(0===e.length)return T.USAGE;
try{var[t,...n]=e;switch(t){case"c":case"comp":case"completion":return await this.completion(n);case"e":case"edit":
return await this.edit(n);case"t":case"test":return await this.test(n);case"d":case"doc":case"document":
return await this.document(n);case"dd":case"desc":case"describe":return await this.describe(n);case"cl":case"changelog":
return await this.changelog(n)}return console.error("Unknown command: "+t),T.COMMAND_NOT_FOUND}catch(t){if(Nt(
e=null==t?void 0:t.body))return console.error(`ERROR: [${e.error.type}] `+e.error.message),T.GENERAL_ERRORS;throw t}}
async test(t){void 0===this._model&&this.setModel(Pu),void 0===this._n&&this.setN(1),
void 0===this._temperature&&this.setTemperature(0);var e=null!=(e=this._language)?e:xu,n=(L.debug("test: language: ",e),
It("ExampleClassName","exampleMethodName","should ...")),e=Ut(`// {{LANG}}
// Write test cases.
// Framework: {{FRAMEWORK}}

{{EXAMPLES}}`,{"{{LANG}}":null!=e?e:"TypeScript","{{FRAMEWORK}}":"Jest","{{EXAMPLES}}":null!=n?n:It()});
return this.edit([e,...t])}async document(t){if(0===t.length)return T.USAGE;L.debug("document: args: ",t);var e=null!=(
e=this._language)?e:xu,n=(L.debug("document: language: ",e),L.debug("document: framework: ","JSDoc"),
void 0===this._model&&this.setModel(Lu),void 0===this._n&&this.setN(1),void 0===this._temperature&&this.setTemperature(
.1),void 0===this._topP&&this.setTopP(.9),void 0===this._iterations&&this.setIterations(4),Ut(`Let's go step by step.
Document the public interface from the following {{LANGUAGE}} code using {{FRAMEWORK}}.
Include the source code unmodified.

{{EXAMPLES}}
`,{"{{LANGUAGE}}":null!=e?e:"TypeScript","{{FRAMEWORK}}":"JSDoc","{{EXAMPLES}}":null!=(n=(await this._populateFiles(t)
).join("\n\n"))?n:""})),n=(L.debug("document: aiDocumentPrompt: ",n),await this._client.getCompletion(n,Nu,3600,.1,.9,
this._frequencyPenalty,this._presencePenalty)),{textChoice:n,hasText:r}=(L.debug("result = ",n),
this._parseCompletionResponse(n)),e=Ut(`Let's go step by step.
Improve the {{FRAMEWORK}} documentations from the following {{LANG}} code:`,{"{{LANG}}":null!=e?e:"TypeScript",
"{{FRAMEWORK}}":"JSDoc"});if(0===t.length)throw new TypeError("No args detected anymore");return r?this.edit([e+(
null!=n&&n.text?"\n\n"+(null==n?void 0:n.text):""),...t]):this.edit([e,...t])}async describe(t){var e;if(0===t.length
)return T.USAGE;L.debug("describe: args: ",t),void 0===this._model&&this.setModel(Nu),
void 0===this._maxTokens&&this.setMaxTokens(3600),void 0===this._temperature&&this.setTemperature(.1),
void 0===this._topP&&this.setTopP(.9),e=null!=(e=this._language)?e:xu,L.debug("describe: language: ",e);let n=!1;if(
"verbose"===t[0]){var[,...r]=t;if(t=r,n=!0,0===t.length)return T.USAGE;L.debug("describe: params: ",t,n)}return r=Ut(
n?`Let's go step by step.
Describe in detail what this {{LANG}} does?`:`Let's go step by step.
Describe what this {{LANG}} does?`,{"{{LANG}}":null!=e?e:"TypeScript"}),L.debug("describe: instruction: ",r),
this.completion([r,...t])}async changelog(t){var e,o,n,r;if(0===t.length)return T.USAGE;L.debug("changelog: args: ",t),
void 0===this._model&&this.setModel(Cu),void 0===this._maxTokens&&this.setMaxTokens(2e3),
void 0===this._temperature&&this.setTemperature(.1),void 0===this._topP&&this.setTopP(.9),
e="Write a change log for the following commit diff:",L.debug(`changelog: instruction: "${e}"`),L.debug(
'changelog: aiChunkSize size of "6000"');let i="";if(o=(await this._populateFiles(t)).join("\n"),L.debug(
`changelog: diff size of "${o.length}"`),0!==o.length&&(n=Wo(function(){var t,e=[];let n="",r=null;for(const i of ps(o,
"\n"))co(i,"diff --git")?(n&&e.push(n),n=i+"\n",r=null):co(i,"@@")?((t=function(t){if((
r=/^@@ -(\d+),\d+ \+(\d+)(,\d+)? @@/.exec(t))&&3<=r.length){var[,e,n]=r,e=Y(e),n=Y(n);if(void 0!==e&&void 0!==n)return{
oldStart:e,oldLines:0,newStart:n,newLines:0}}if((r=/^@@ -(\d+) \+(\d+)(,\d+)? @@/.exec(t))&&3<=r.length){var[,e,n]=r,
t=Y(e),r=Y(n);if(void 0!==t&&void 0!==r)return{oldStart:t,oldLines:0,newStart:r,newLines:0}}return null}(i))&&(r=t),
n+=i+"\n"):r||co(i,"-")?(n+=i+"\n",r&&(co(i,"-")?r.oldLines--:(co(i,"+")||r.oldLines--,r.newLines--))):n+=i+"\n";
return n&&e.push(n.substring(0,n.length-1)),e}(),(t,e)=>6e3<e.length?[...t,...function(e){var n=[];for(
let t=0;t<e.length;t+=6e3)n.push(e.slice(t,t+6e3));return n}(e)]:[...t,e],[]),L.debug(
`changelog: chunks size of "${n.length}"`),0!==n.length))for(;void 0!==(r=n.shift())&&(L.debug(
`changelog: processing chunk size of "${r.length}"`),0!==i.length&&6e3<i.length+r.length&&(L.debug(
`changelog: Sending "${i.length}" characters to completion`),await this.completion([e,i]),i=""),i+=r),6e3<=i.length&&(
L.debug(`changelog: Sending ${i.length} characters to completion`),await this.completion([e,i]),i=""),n.length;);
return T.OK}async edit(t){var e,n,r,i,o,s,u,a;if(0===t.length)return T.USAGE;var[t,...c]=await this._populateFiles(t),
c=c.join("\n\n"),l=this._model,h=this._temperature,f=this._topP,d=this._n,p=void 0!==l,g=void 0!==d,_=void 0!==h,
v=void 0!==f;try{return n=await(v?this._client.getEdit(t,c,l,d,h,f):_?this._client.getEdit(t,c,l,d,h
):g?this._client.getEdit(t,c,l,d):p?this._client.getEdit(t,c,l):this._client.getEdit(t,c)),r=y(n.choices,t=>!Ct(t)),
s=void 0!==(o=(i=y(n.choices,t=>Ct(t))).shift()),u=!!r.length,a=!!i.length,s&&console.log(null!=(e=null==o?void 0:o.text
)?e:""),a&&console.warn("Alternative choices: "+JSON.stringify(i,null,2)),u&&console.error(
"Other items detected: "+JSON.stringify(r,null,2)),!u&&s?T.OK:T.GENERAL_ERRORS}catch(t){if(Nt(t))return console.error(
`Error: [${t.error.type}]: `+t.error.message),T.GENERAL_ERRORS;throw t}}async completion(t){var e,n;if(0===t.length
)return T.USAGE;L.debug("args = ",t),t=(await this._populateFiles(t)).join("\n\n"),L.debug(`prompt = "${t}"`);try{
var r=await this._client.getCompletion(t,this._model,this._maxTokens,this._temperature,this._topP,this._frequencyPenalty
,this._presencePenalty),{errorChoices:i,alternativeTexts:o,textChoice:s,hasText:u,hasErrors:a,hasAlternativeTexts:c}=(
L.debug("result = ",r),this._parseCompletionResponse(r));if(u){if("stop"!==(null==s?void 0:s.finish_reason)
)return console.warn(`Warning! Partial response: "${null!=(n=null==s?void 0:s.text)?n:""}"`),console.error(
'Error: Please increase "maxTokens" property to get complete response.'),T.GENERAL_ERRORS;console.log(null!=(
e=null==s?void 0:s.text)?e:"")}return c&&console.warn("Alternative choices: "+JSON.stringify(o,null,2)),
a&&console.error("Other items detected: "+JSON.stringify(i,null,2)),!a&&u?T.OK:T.GENERAL_ERRORS}catch(t){if(Nt(t)
)return console.error(`Error: [${t.error.type}]: `+t.error.message),T.GENERAL_ERRORS;throw t}}async _populateFiles(t){
return g(t,t=>Ls.existsSync(t)?Ls.readFileSync(t,{encoding:"utf8"}).toString():t)}_parseCompletionResponse(t){var e=y(
t.choices,t=>!Lt(t)),n=(t=y(t.choices,t=>Lt(t))).shift();return{errorChoices:e,alternativeTexts:t,textChoice:n,
hasText:void 0!==n,hasErrors:!!e.length,hasAlternativeTexts:!!t.length}}}(E=o={Continue:100,100:"Continue",
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
]="InternalServerError",E[E.NotImplemented=501]="NotImplemented",E[E.BadGateway=502]="BadGateway",E[
E.ServiceUnavailable=503]="ServiceUnavailable",E[E.GatewayTimeout=504]="GatewayTimeout",E[E.HttpVersionNotSupported=505
]="HttpVersionNotSupported",E[E.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",E[E.InsufficientStorage=507
]="InsufficientStorage",E[E.LoopDetected=508]="LoopDetected",E[E.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",E[
E.NotExtended=510]="NotExtended",E[E.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",gs={
ERROR:"error"};class qu extends Error{constructor(t,e=void 0,n=void 0,r=void 0,i=void 0,o=void 0){super(e||Dt(t)),s(this
,"status",void 0),s(this,"method",void 0),s(this,"url",void 0),s(this,"body",void 0),s(this,"headers",void 0),s(this,
"__proto__",void 0),e=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,e):this.__proto__=e,
this.status=t,this.method=n,this.url=r,this.body=i,this.headers=o}valueOf(){return this.status}toString(){
return this.status+" "+this.message}toJSON(){return{type:gs.ERROR,status:this.status,message:this.message,
method:this.method,url:this.url,body:this.body,headers:this.headers?this.headers.toJSON():void 0}}getStatusCode(){
return this.status}getMethod(){return this.method}getUrl(){return this.url}getBody(){return this.body}getHeaders(){
return this.headers}static create(t,e=void 0){return new qu(t,e)}static createBadRequestError(t){return kt(o.BadRequest,
t)}static createNotFoundRequestError(t){return kt(o.NotFound,t)}static createMethodNotAllowedRequestError(t){return kt(
o.MethodNotAllowed,t)}static createConflictRequestError(t){return kt(o.Conflict,t)}
static createInternalErrorRequestError(t){return kt(o.InternalServerError,t)}static throwBadRequestError(t){
throw qu.createBadRequestError(t)}static throwNotFoundRequestError(t){throw qu.createNotFoundRequestError(t)}
static throwMethodNotAllowedRequestError(t){throw qu.createMethodNotAllowedRequestError(t)}
static throwConflictRequestError(t){throw qu.createConflictRequestError(t)}static throwInternalErrorRequestError(t){
throw qu.createInternalErrorRequestError(t)}}const Uu=x.createLogger("HttpService");_s={
REQUEST_STARTED:"HttpService:requestStarted",REQUEST_STOPPED:"HttpService:requestStopped"};class Iu{static setLogLevel(t
){Uu.setLogLevel(t),P.setLogLevel(t)}static setRequestLimit(t){this._requestLimit=t}static setDefaultRetryLimit(t){
this._defaultRetryDelay=t}static setBaseUrl(t){this._baseApiUrl=t}static on(t,e){return this._observer.listenEvent(t,e)}
static destroy(){this._observer.destroy()}static hasOpenRequests(){return 1<=this._requestCount}static getRequestCount(
){return this._requestCount}static async waitUntilNoOpenRequests(){if(this.hasOpenRequests())return Uu.debug(
"waitUntilNoOpenRequests: Let's wait until no requests"),new Promise((e,n)=>{try{let t=this.on(_s.REQUEST_STOPPED,()=>{
try{this.hasOpenRequests()?Uu.debug(`waitUntilNoOpenRequests: We still have ${this.getRequestCount()} requests`):(
Uu.debug("waitUntilNoOpenRequests: No requests anymore. We're ready!"),t(),t=void 0,e())}catch(t){Uu.debug(
"waitUntilNoOpenRequests: Canceling waiting: error: ",t),n(t)}})}catch(t){Uu.debug(
"waitUntilNoOpenRequests: Canceling waiting: error: ",t),n(t)}});Uu.debug("No open requests to wait")}
static _prepareUrl(t){return this._baseApiUrl&&t.startsWith("/api")?""+this._baseApiUrl+t.substring("/api".length):t}
static async _request(e,n,r,i,o,s,u){var t,a,c,l,h,f,d,p;if(u=null!=(t=null!=u?u:null==o?void 0:o.baseDelay
)?t:this._defaultRetryDelay,0===(s=null!=s?s:0)&&this._requestCount>=this._requestLimit)throw new TypeError(
e+": Too many requests: "+this._requestCount);try{return 0===s?(this._requestCount+=1,this._observer.hasCallbacks(
_s.REQUEST_STARTED)&&this._observer.triggerEvent(_s.REQUEST_STARTED,r,n),Uu.debug(
`Started ${n} request to "${r} "(${this._requestCount} requests)`)):Uu.debug(
`Started attempt ${s} for ${n} request to "${r} "(${this._requestCount} requests)`),await i()}catch(t){if(
d=null==t?void 0:t.code,p=Ft(t)?t.status:0,o){if(l=n,h=p,f=d,s>=(c=o).maxAttempts||!gt(c.onMethod,t=>t===l)||!(gt(
c.onStatus,t=>{var[t,e]=t;return t<=h&&h<=e})||void 0!==f&&gt(c.onCode,t=>t===f)))throw t;return Uu.warn(
`Error in ${n} "${r}": ${t} ${d} `+p),Uu.debug(
`Waiting next attempt for ${n} request to "${r} "(${this._requestCount} requests)`),await this._waitForRetry(u),a=u,
a+=null==o?void 0:o.increasingDelayStep,u=void 0!==(null==o?void 0:o.maxDelay)&&a>o.maxDelay?o.maxDelay:a,
await this._request(e,n,r,i,o,s+1,u)}throw t}finally{0===s&&(--this._requestCount,this._observer.hasCallbacks(
_s.REQUEST_STOPPED)&&this._observer.triggerEvent(_s.REQUEST_STOPPED,r,n),Uu.debug(
`Stopped ${n} request to "${r}" (${this._requestCount} requests)`))}}static async _waitForRetry(n){return Uu.debug(
"Waiting for retry time: ",n),new Promise((t,e)=>{try{setTimeout(()=>{t()},n)}catch(t){e(t)}})}static async getJson(t,e,
n){return t=this._prepareUrl(t),this._request("getJson","GET",t,async()=>P.getJson(t,e),n)}static async postJson(t,e,n,r
){return t=this._prepareUrl(t),this._request("postJson","POST",t,async()=>P.postJson(t,e,n),r)}static async deleteJson(t
,e,n){return t=this._prepareUrl(t),this._request("deleteJson","DELETE",t,async()=>P.deleteJson(t,e),n)}
static async getText(t,e,n){return t=this._prepareUrl(t),this._request("getText","GET",t,async()=>P.getText(t,e),n)}
static async postText(t,e,n,r){return t=this._prepareUrl(t),this._request("postText","POST",t,async()=>P.postText(t,e,n)
,r)}static async deleteText(t,e,n,r){return t=this._prepareUrl(t),this._request("deleteText","DELETE",t,async(
)=>P.deleteText(t,n),r)}static async getJsonEntity(t,e,n){return t=this._prepareUrl(t),this._request("getJsonEntity",
"GET",t,async()=>P.getJsonEntity(t,e),n)}static async postJsonEntity(t,e,n,r){return t=this._prepareUrl(t),
this._request("postJsonEntity","POST",t,async()=>P.postJsonEntity(t,e,n),r)}static async deleteJsonEntity(t,e,n){
return t=this._prepareUrl(t),this._request("deleteJsonEntity","DELETE",t,async()=>P.deleteJsonEntity(t,e),n)}
static async getTextEntity(t,e,n){return t=this._prepareUrl(t),this._request("getTextEntity","GET",t,async(
)=>P.getTextEntity(t,e),n)}static async postTextEntity(t,e,n,r){return t=this._prepareUrl(t),this._request(
"postTextEntity","POST",t,async()=>P.postTextEntity(t,e,n),r)}static async deleteTextEntity(t,e,n,r){
return t=this._prepareUrl(t),this._request("deleteTextEntity","DELETE",t,async()=>P.deleteTextEntity(t,n),r)}}s(Iu,
"_defaultRetryDelay",1e3),s(Iu,"_requestLimit",100),s(Iu,"_baseApiUrl",void 0),s(Iu,"_requestCount",0),s(Iu,"_observer",
new class ea{getName(){return this._name}constructor(t){s(this,"_name",void 0),s(this,"_callbacks",void 0),this._name=t,
this._callbacks={}}static create(t){return new ea(t)}destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(t){
return A(this._callbacks,t)}triggerEvent(e,...n){var t;this.hasCallbacks(e)?(t=this._callbacks[e],Eo(t,t=>{try{t(e,...n)
}catch(t){console.error(`Observer "${this._name}" and the event handler for "${e.toString()}" returned an exception: `,t
)}})):console.warn(`Warning! The observer for "${this._name}" did not have anything listening "${e.toString()}"`)}
listenEvent(t,e){return this.hasCallbacks(t)?this._callbacks[t].push(e):this._callbacks[t]=[e],()=>this.removeListener(t
,e)}removeListener(t,n){if(this.hasCallbacks(t)){let e=!1;this._callbacks[t]=y(this._callbacks[t],t=>!(!e&&t===n&&(e=!0)
)),0===this._callbacks[t].length&&delete this._callbacks[t],e||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${t.toString(
)}"`)}async waitForEvent(i,o){await new Promise((n,r)=>{try{let t=void 0,e=void 0;t=setTimeout(()=>{try{t=void 0,e&&(e()
,e=void 0),n()}catch(t){r(t)}},o),e=this.listenEvent(i,()=>{try{t&&(clearTimeout(t),t=void 0),e&&(e(),e=void 0),n()
}catch(t){r(t)}})}catch(t){r(t)}})}}("HttpService")),s(Iu,"Event",_s);class Du{static createBasicHeader(t){
return"Basic "+t}static createBasicHeaderTokenWithUserAndPassword(t,e){return btoa(unescape(encodeURIComponent(t
)+":"+encodeURIComponent(e)))}static createBasicHeaderWithUserAndPassword(t,e){return Du.createBasicHeader(
Du.createBasicHeaderTokenWithUserAndPassword(t,e))}static parseBasicToken(t){if(co(t,"Basic "))return pu(t.substring(
"Basic ".length))}static createBearerHeader(t){return"Bearer "+t}static parseBearerToken(t){if(co(t,"Bearer ")
)return pu(t.substring("Bearer ".length))}}const ku=x.createLogger("HttpOpenAiClient");class Fu{static setLogLevel(t){
ku.setLogLevel(t),Iu.setLogLevel(t)}static setDefaultUrl(t){this._defaultUrl=t}static getDefaultUrl(){
return this._defaultUrl}static create(t,e=Fu._defaultUrl){return new Fu(t,e)}constructor(t,e=Fu._defaultUrl){s(this,
"_url",void 0),s(this,"_apiKey",void 0),this._url=e,this._apiKey=t}getUrl(){return this._url}async getCompletion(t,e,n,r
,i,o,s){if(t=function(t,e,n,r,i,o,s){if(!h(t))throw new TypeError("Invalid OpenAiCompletionRequestDTO.prompt: "+t);if(
!h(e)&&!V(e))throw new TypeError("Invalid OpenAiCompletionRequestDTO.model: "+e);if(!Q(n))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.max_tokens: "+n);if(!Q(r))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.temperature: "+r);if(!Q(i))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.top_p: "+i);if(!Q(o))throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.frequency_penalty: "+o);if(Q(s))return p(p(p(p(p({prompt:t,
model:null!=e?e:rs.DAVINCI},l(n)?{max_tokens:n}:{}),l(r)?{temperature:r}:{}),l(i)?{top_p:i}:{}),l(o)?{
frequency_penalty:o}:{}),l(s)?{presence_penalty:s}:{});throw new TypeError(
"Invalid OpenAiCompletionRequestDTO.presence_penalty: "+s)}(t,e,n,r,i,o,s),e=Fu._getHeaders(this._apiKey),ku.debug(
"getCompletion: body = ",t),yt(r=n=await Iu.postJson(this._url+"/v1/completions",t,e))&&Tt(r,["id","object","created",
"model","choices","usage"])&&h(null==r?void 0:r.id)&&h(null==r?void 0:r.object)&&l(null==r?void 0:r.created)&&h(
null==r?void 0:r.model)&&ht(null==r?void 0:r.choices,jt)&&yt(i=null==r?void 0:r.usage)&&At(i,["prompt_tokens",
"completion_tokens","total_tokens"])&&l(null==i?void 0:i.prompt_tokens)&&l(null==i?void 0:i.completion_tokens)&&l(
null==i?void 0:i.total_tokens))return ku.debug("getCompletion: result = ",n),n;throw ku.error("getCompletion: result = "
,n),new TypeError("Result was not OpenAiCompletionResponseDTO: "+H([Et(o=n),Ot(o,["id","object","created","model",
"choices","usage"]),u("id",nt(null==o?void 0:o.id)),u("object",nt(null==o?void 0:o.object)),u("created",X(
null==o?void 0:o.created)),u("model",nt(null==o?void 0:o.model)),u("choices",ft(
"OpenAiCompletionResponseChoice|OpenAiError",qt,null==o?void 0:o.choices,jt)),u("usage",H([Et(s=null==o?void 0:o.usage),
St(s,["prompt_tokens","completion_tokens","total_tokens"]),u("prompt_tokens",X(null==s?void 0:s.prompt_tokens)),u(
"completion_tokens",X(null==s?void 0:s.completion_tokens)),u("total_tokens",X(null==s?void 0:s.total_tokens))]))]))}
async getEdit(t,e,n,r,i,o){if(t=function(t,e,n,r,i,o){if(!h(t))throw new TypeError(
"Invalid OpenAiEditRequestDTO.instruction: "+t);if(!rt(e))throw new TypeError("Invalid OpenAiEditRequestDTO.input: "+e);
if(!rt(n))throw new TypeError("Invalid OpenAiEditRequestDTO.model: "+n);if(!Q(r))throw new TypeError(
"Invalid OpenAiEditRequestDTO.n: "+r);if(!Q(i))throw new TypeError("Invalid OpenAiEditRequestDTO.temperature: "+i);if(Q(
o))return p(p(p(p({model:null!=n?n:rs.DAVINCI_EDIT_TEXT,instruction:t},h(e)?{input:e}:{}),l(r)?{n:r}:{}),l(i)?{
temperature:i}:{}),l(o)?{top_p:o}:{});throw new TypeError("Invalid OpenAiEditRequestDTO.top_p: "+o)}(t,e,n,r,i,o),
ku.debug("getEdit: body = ",t),e=Fu._getHeaders(this._apiKey),yt(r=n=await Iu.postJson(this._url+"/v1/edits",t,e))&&At(r
,["object","created","choices","usage"])&&h(null==r?void 0:r.object)&&l(null==r?void 0:r.created)&&ht(
null==r?void 0:r.choices,Ct)&&yt(i=null==r?void 0:r.usage)&&At(i,["prompt_tokens","completion_tokens","total_tokens"]
)&&l(null==i?void 0:i.prompt_tokens)&&l(null==i?void 0:i.completion_tokens)&&l(null==i?void 0:i.total_tokens)
)return ku.debug("getEdit: result = ",n),n;throw ku.error("getEdit: result = ",n),new TypeError(
"Result was not OpenAiEditResponseDTO: "+H([Et(o=n),Ot(o,["object","created","choices","usage"]),u("object",nt(
null==o?void 0:o.object)),u("created",X(null==o?void 0:o.created)),u("choices",ft("OpenAiEditResponseChoice",Pt,
null==o?void 0:o.choices,Ct)),u("usage",H([Et(t=null==o?void 0:o.usage),St(t,["prompt_tokens","completion_tokens",
"total_tokens"]),u("prompt_tokens",X(null==t?void 0:t.prompt_tokens)),u("completion_tokens",X(
null==t?void 0:t.completion_tokens)),u("total_tokens",X(null==t?void 0:t.total_tokens))]))]))}static _getHeaders(t){
return{Authorization:Du.createBearerHeader(t)}}}s(Fu,"_defaultUrl","https://api.openai.com");class $u{
static async getStreamDataAsBuffer(r){return new Promise((t,e)=>{const n=[];r.on("data",t=>{try{n.push(t)}catch(t){e(t)}
}),r.on("end",()=>{try{t(Buffer.concat(n))}catch(t){e(t)}})})}static async getStreamDataAsString(t,e="utf8"){return(
await $u.getStreamDataAsBuffer(t)).toString(e)}static async getStreamDataAsFormUrlEncoded(t){if(""!==(
t=await $u.getStreamDataAsString(t)))return qs.parse(t)}static async getStreamDataAsJson(t){if(""!==(
t=await $u.getStreamDataAsString(t)))return JSON.parse(t)}}class Mu{static async getRequestDataAsBuffer(t){
return $u.getStreamDataAsBuffer(t)}static async getRequestDataAsString(t,e=0){return $u.getStreamDataAsString(t)}
static async getRequestDataAsFormUrlEncoded(t){return $u.getStreamDataAsFormUrlEncoded(t)}
static async getRequestDataAsJson(t){return $u.getStreamDataAsJson(t)}}w="WINDOW"===(b=null!=(m=null!=(d=null==(
Oe=process)||null==(f=Oe.env)?void 0:f.NOR_REQUEST_CLIENT_MODE)?d:null==(_=process)||null==(Os=_.env
)?void 0:Os.REACT_APP_REQUEST_CLIENT_MODE)?m:"")||!("undefined"==typeof window||!window.fetch),vs={TEXT:"text/plain",
CALENDAR:"text/calendar",JSON:"application/json",X_WWW_FORM_URLENCODED:"application/x-www-form-urlencoded"},ys=n,Es=Wt,
bs=Zs,ws=iu,ms=function(t,e,n){var r;return t=ws(t),e=Es(e),r=t.length,r=n=void 0===n?r:ys(bs(n),0,r),0<=(n-=e.length
)&&t.slice(n,r)==e};class zu{static toString(...t){return g(t,t=>K(t)?"null":""+t).join("")}static processVariables(r,i,
o,s,u=void 0){return mt(r)?g(r,t=>zu.processVariables(t,i,o,s,u)):wt(r)?Wo(R(r),(t,e)=>{var n=r[e];return t[
""+zu.processVariables(e,i,o,s,u)]=zu.processVariables(n,i,o,s,u),t},{}):h(r)?zu.processVariablesInString(r,i,o,s,u):r}
static isValidKeyword(t){return!(t.length<=0)&&(!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(t[0]
)||ct(t,t=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(t)))}
static processVariablesInString(e,n,r,i,o=void 0){var t,s,u,a,c,l;if(0===e.length)return"";if(l=et(n)?n:t=>ii(n,t,o),co(
e,r)&&ms(e,i)){let t=e.substr(r.length,e.length-r.length-i.length);if(t.indexOf(r)<0&&(t=pu(t),zu.isValidKeyword(t))
)return l(t)}let h="",f=0;for(;0<=f&&f<e.length;)if(t=f,(f=e.indexOf(r,t))<0)h+=e.substr(t),f=e.length;else{if(u=(s=f
)+r.length,(c=e.indexOf(i,u))<0)throw new TypeError(`Parse error near "${e.substr(s).substr(0,20
)}". End of variable not detected.`);a=c+i.length,c=pu(e.substr(u,c-u)),f=(zu.isValidKeyword(c)?(u=l(c),h+=""+e.substr(t
,s-t)+u):h+=""+e.substr(t,a-t),a)}return h}static formatNumber(t,e=" ",n="."){return t.toFixed(2).replace(
/\B(?=(\d{3})+(?!\d))/g,e).replace(/\./,n)}static endsWithCharacters(t,e){var n=t.length;return!(1<=n)||e.includes(t[n-1
])}static startsWithCharacters(t,e){return!(1<=t.length)||e.includes(t[0])}static hasOnlyCharacters(t,e){
return 0===t.length||ct(t,t=>e.includes(t))}static validateStringCharacters(t,e=void 0,n=e,r=n,i=0,o=void 0){
var s=null!=(s=null==t?void 0:t.length)?s:0;return(void 0===e||zu.startsWithCharacters(t,e))&&(
void 0===n||zu.hasOnlyCharacters(t.substring(1,s-1),n))&&(void 0===r||zu.endsWithCharacters(t,r))&&i<=s&&(
void 0===o||s<=o)}}class Gu{constructor(t,e,n){s(this,"_status",void 0),s(this,"_headers",void 0),s(this,"_body",void 0)
let r,i,o;if(!Mt(t)||Mt(e)||Mt(n))if(Mt(e)&&!Mt(n)){if(void 0!==n)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");Rt(t)?i=t:o=t,r=e}else{if(!Mt(n))throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");if(!Rt(e))throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");o=t,i=e,r=n}else{if(r=t,void 0!==e)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");if(void 0!==n)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status")}this._status=r,this._headers=null!=(t=i)?t:new Au,this._body=o}
getStatusCode(){return this._status}getStatusCodeValue(){return this._status}status(t){return this._status=t,this}
headers(t){return Rt(t)?this._headers=t:this._headers=new Au(t),this}body(t){return this._body=t,this}getHeaders(){
return this._headers}allow(...t){return t=g(t,at),t=g(t,t=>ut(t).toUpperCase()),this._headers.set("Allow",t.join(", ")),
this}hasBody(){return void 0!==this._body}getBody(){if(void 0===this._body)throw new TypeError("No body");
return this._body}valueOf(){return this.toString()}toString(){var t=Dt(this._status),e=(e=this._headers).isEmpty(
)?"":zu.toString(e),n=this._body;return void 0===n?e?`ResponseEntity(${t}, ${e})`:`ResponseEntity(${t})`:(n=bt(n
)?JSON.stringify(n,null,2):zu.toString(n),e?`ResponseEntity(${t}, ${e}, Body(${n}))`:`ResponseEntity(${t}, Body(${n}))`)
}static accepted(){return new Gu(o.Accepted)}static badRequest(){return new Gu(o.BadRequest)}static created(t){
return new Gu(new Au({Location:t}),o.Created)}static noContent(){return new Gu(o.NoContent)}static notFound(){
return new Gu(o.NotFound)}static notImplemented(){return new Gu(o.NotImplemented)}static internalServerError(){
return new Gu(o.InternalServerError)}static methodNotAllowed(){return new Gu(o.MethodNotAllowed)}
static unprocessableEntity(){return new Gu(o.UnprocessableEntity)}static ok(t){return void 0!==t?new Gu(t,o.OK):new Gu(
o.OK)}}const Bu="NODE"!==b&&w?void 0:require("fs").promises,j=x.createLogger("NodeRequestClient");class q{
static setLogLevel(t){j.setLogLevel(t)}constructor(t,e,n){s(this,"_http",void 0),s(this,"_https",void 0),s(this,
"_defaultOptions",void 0),this._http=t,this._https=e,this._defaultOptions=n}static create(t,e,n){return new q(t,e,n)}
async bufferRequest(t,e,n,r){switch(t){case i.GET:return this._bufferRequest(i.GET,e,n,r);case i.POST:
return this._bufferRequest(i.POST,e,n,r);case i.PATCH:return this._bufferRequest(i.PATCH,e,n,r);case i.PUT:
return this._bufferRequest(i.PUT,e,n,r);case i.DELETE:return this._bufferRequest(i.DELETE,e,n,r);default:
throw new TypeError("NodeRequestClient: Unsupported method: "+t)}}async textRequest(t,e,n,r){switch(t){case i.GET:
return this._textRequest(i.GET,e,n,r).then(q._successTextResponse);case i.POST:return this._textRequest(i.POST,e,n,r
).then(q._successTextResponse);case i.PATCH:return this._textRequest(i.PATCH,e,n,r).then(q._successTextResponse);
case i.PUT:return this._textRequest(i.PUT,e,n,r).then(q._successTextResponse);case i.DELETE:return this._textRequest(
i.DELETE,e,n,r).then(q._successTextResponse);default:throw new TypeError("NodeRequestClient: Unsupported method: "+t)}}
async jsonRequest(t,e,n,r){switch(t){case i.GET:return this._jsonRequest(i.GET,e,n,r).then(q._successJsonResponse);
case i.POST:return this._jsonRequest(i.POST,e,n,r).then(q._successJsonResponse);case i.PATCH:return this._jsonRequest(
i.PATCH,e,n,r).then(q._successJsonResponse);case i.PUT:return this._jsonRequest(i.PUT,e,n,r).then(q._successJsonResponse
);case i.DELETE:return this._jsonRequest(i.DELETE,e,n,r).then(q._successJsonResponse);default:throw new TypeError(
"NodeRequestClient: Unsupported method: "+t)}}async textEntityRequest(t,e,n,r){switch(t){case i.GET:
return this._textRequest(i.GET,e,n,r).then(q._successTextEntityResponse);case i.POST:return this._textRequest(i.POST,e,n
,r).then(q._successTextEntityResponse);case i.PATCH:return this._textRequest(i.PATCH,e,n,r).then(
q._successTextEntityResponse);case i.PUT:return this._textRequest(i.PUT,e,n,r).then(q._successTextEntityResponse);
case i.DELETE:return this._textRequest(i.DELETE,e,n,r).then(q._successTextEntityResponse);default:throw new TypeError(
"NodeRequestClient: Unsupported method: "+t)}}async jsonEntityRequest(t,e,n,r){switch(t){case i.GET:
return this._jsonRequest(i.GET,e,n,r).then(q._successJsonEntityResponse);case i.POST:return this._jsonRequest(i.POST,e,n
,r).then(q._successJsonEntityResponse);case i.PATCH:return this._jsonRequest(i.PATCH,e,n,r).then(
q._successJsonEntityResponse);case i.PUT:return this._jsonRequest(i.PUT,e,n,r).then(q._successJsonEntityResponse);
case i.DELETE:return this._jsonRequest(i.DELETE,e,n,r).then(q._successJsonEntityResponse);default:throw new TypeError(
"NodeRequestClient: Unsupported method: "+t)}}async _bufferRequest(t,e,n,r,i){let o={method:q._getMethod(t),headers:p({}
,i?{"Content-Type":i}:{})};return j.debug("_bufferRequest: options = ",o),n&&(o=p(p({},o),{},{headers:p(p({},o.headers),
n)})),this._httpRequest(e,o,r)}async _textRequest(t,e,n,r,i){return n=await this._bufferRequest(t,e,n,r,
null!=i?i:vs.TEXT),r=await Mu.getRequestDataAsString(n),{method:t,url:e,statusCode:null!=(i=null==n?void 0:n.statusCode
)?i:0,headers:n.headers,body:r}}async _jsonRequest(t,e,n,r,i){return n=await this._bufferRequest(t,e,n,r?JSON.stringify(
r):void 0,null!=i?i:vs.JSON),r=await Mu.getRequestDataAsJson(n),{method:t,url:e,statusCode:null!=(
i=null==n?void 0:n.statusCode)?i:0,headers:n.headers,body:r}}static _getMethod(t){switch(t){case i.OPTIONS:
return"OPTIONS";case i.GET:return"GET";case i.POST:return"POST";case i.PUT:return"PUT";case i.DELETE:return"DELETE";
case i.PATCH:return"PATCH";case i.TRACE:return"TRACE";case i.HEAD:return"HEAD"}throw new TypeError("Unknown method: "+t)
}async _httpRequest(o,s,t){var e;void 0!==this._defaultOptions&&(s=p(p({},this._defaultOptions),s));const u=t||void 0,
a=new ks.default.URL(o);let c;const l=null!=(t=null===a||void 0===a?void 0:a.protocol)?t:"";if(
"unix:"===l||"socket:"===l){if("/"===(t=null!==a&&void 0!==a&&a.pathname?null===a||void 0===a?void 0:a.pathname:"/")
)throw new TypeError("No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(t))
)throw new TypeError("No socket path found for unix protocol URL: "+o);t=""+(e.length<t.length?t.substring(e.length):""
)+("?"!==a.search?a.search:""),s=p(p({},s),{},{socketPath:e,path:t}),o="",c=this._http
}else c="https:"===l?this._https:this._http;return new Promise((e,n)=>{let r=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var t,i;o&&(s=p(p({},s),{},{hostname:a.hostname,port:null!=(
i=null!==a&&void 0!==a&&a.port?parseInt(a.port,10):void 0)?i:"https:"===l?443:80,path:a.pathname+a.search})),(
t=c.request(s,t=>{r?j.warn("Warning! Request had already ended when the response was received."):(r=!0,e(t))})).on(
"error",t=>{r?(j.warn("Warning! Request had already ended when the response was received."),j.debug("Error from event: "
,t)):(j.debug("Passing on error from event: ",t),r=!0,n(t))}),u&&t.write(u),t.end()}catch(t){r?(j.warn(
"Warning! Request had already ended when the response was received."),j.debug("Exception: ",t)):(j.debug(
"Passing on error: ",t),r=!0,n(t))}})}static async _successJsonResponse(t){var e=null==t?void 0:t.statusCode;if(
e<200||400<=e)throw q._createUnsuccessfulResponseWithStatus(e,t);return j.debug(`Successful response with status ${e}: `
,t),t.body}static async _successTextResponse(t){return q._handleResponseStatusCode(t),t.body}
static async _successJsonEntityResponse(t){var e,n=null==t?void 0:t.statusCode;if(n<200||400<=n
)throw q._createUnsuccessfulResponseWithStatus(n,t);return j.debug(`Successful response with status ${n}: `,t),e=new Au(
null==t?void 0:t.headers),new Gu(t.body,e,n)}static async _successTextEntityResponse(t){
var e=q._handleResponseStatusCode(t),n=t.body,t=new Au(t.headers);return new Gu(n,t,e)}async _checkSocketFile(e){var t;
try{return j.debug("_checkSocketFile: path =",e),t=await Bu.stat(e),j.debug("_checkSocketFile: stat =",t),!!t.isSocket()
}catch(t){if("ENOTDIR"===(e=null==t?void 0:t.code))j.debug("_checkSocketFile: ENOTDIR: ",t);else{if("ENOENT"!==e
)throw j.debug(`_checkSocketFile: Error "${e}" passed on: `,t),t;j.debug("_checkSocketFile: ENOENT: ",t)}}}
async _findSocketFile(t){var e;return j.debug("_findSocketFile: fullPath: ",t),e=await this._checkSocketFile(t),j.debug(
"_findSocketFile: socketExists: ",e),!0===e?t:!1!==e&&(e=Ds.default.dirname(t),j.debug("_findSocketFile: parentPath: ",e
),"/"!==e)&&e!==t?this._findSocketFile(e):void 0}static _handleResponseStatusCode(t){var e=null==t?void 0:t.statusCode;
if(e<200||400<=e)throw q._createUnsuccessfulResponseWithStatus(e,t);return j.debug(
`Successful response with status ${e}: `,t),e}static _createUnsuccessfulResponseWithStatus(t,e){j.debug(
`Unsuccessful response with status ${t}: `,e);var n=new Au(null==e?void 0:e.headers),r=q._stringifyErrorBodyJson(
null==e?void 0:e.body);return new qu(t,t+(r?` "${r}"`:"")+` for ${ut(null==e?void 0:e.method)} `+(null==e?void 0:e.url),
e.method,e.url,e.body,n)}static _stringifyErrorBodyJson(e){var t,n;try{if(void 0===e)return"";if(t=e){if(Ft(t)
)return t.message;if($t(t))return t.error;if(h(n=null==t?void 0:t.error))return n}return JSON.stringify(e,null,2)}catch(
t){return j.warn("Warning! Could not stringify error body: ",t,e),e?JSON.stringify(e,null,2):""}}
static _stringifyErrorBodyString(e){var t,n;try{if(void 0===e)return"";if(t=function(t){try{return JSON.parse(t)}catch(t
){}}(e)){if(Ft(t))return t.message;if($t(t))return t.error;if(h(n=null==t?void 0:t.error))return n}return e}catch(t){
return j.warn("Warning! Could not stringify error body: ",t,e),null!=e?e:""}}}class Wu extends Error{constructor(t,e,n,r
,i){super(Wu.stringifyExceptionArguments(t,e,n,r,i)),s(this,"name",void 0),s(this,"args",void 0),s(this,"status",void 0)
,s(this,"signal",void 0),s(this,"origMessage",void 0),s(this,"__proto__",void 0);var o=new.target.prototype;
Object.setPrototypeOf?Object.setPrototypeOf(this,o):this.__proto__=o,this.name=t,this.args=e,this.status=n,this.signal=r
,this.origMessage=i}valueOf(){return this.toString()}toString(){return Wu.stringifyExceptionArguments(this.name,
this.args,this.status,this.signal,this.origMessage)}toJSON(){var{name:t,args:e,status:n,signal:r,message:i}=this;return{
name:t,args:e,status:n,signal:r,message:i}}getStatusCode(){return this.status}static stringifyExceptionArguments(t,e,n,r
,i){return`Command "${t}${null!=e&&e.length?" ":""}${(null!=e?e:[]).join(" ")}": `+(i||(
r?"Signal "+r:n?"Exit status "+n:"Unspecified error"))}static create(t,e,n,r,i){return new Wu(t,e,n,r,i)}}
const U=x.createLogger("NodeChildProcessService");class Ju{static setLogLevel(t){U.setLogLevel(t)}constructor(){s(this,
"_children",void 0),s(this,"_destroyed",void 0),this._destroyed=!1,this._children=[]}static create(){return new Ju}
isDestroyed(){return this._destroyed}destroy(){var t;this._destroyed?U.warn("The service was already destroyed."):(
this._destroyed=!0,U.debug(`destroying ${null==(t=this._children)?void 0:t.length} children: `+g(this._children,
t=>null==t||null==(t=t.child)?void 0:t.pid).join(", ")),this._shutdownChildProcesses().catch(t=>{U.error(
"Error happened when shutting down the service: ",t)}))}async countChildProcesses(){var t;return U.debug(
`countChildProcesses: ${null==(t=this._children)?void 0:t.length}: `+g(this._children,t=>null==t||null==(t=t.child
)?void 0:t.pid).join(", ")),this._children.length}async waitAllChildProcessesStopped(){var t;null!=(t=this._children
)&&t.length?(U.debug("start: waitAllChildProcessesStopped: "+g(this._children,t=>null==t||null==(t=t.child)?void 0:t.pid
).join(", ")),t=this._children,t=g(t,async e=>{try{e.promise&&await e.promise}catch(t){var n,r,i,o,s,u,a,c;zt(t
)&&t.signal===(null!=(r=e.killSignal)?r:"SIGTERM")?({name:r,pid:n,running:i,abort:s,initializing:o,streamsOpen:u,
exitSignal:c,exitCode:a}=e,U.debug(
`Child #${n} (name=${r}, running=${i}, initializing=${o}, abort=${s}, streamsOpen=${u}, exitCode=${a}, exitSignal=${c}) successfully shutdown with signal `+t.signal
)):({name:n,pid:r,running:i,abort:o,initializing:s,streamsOpen:u,exitSignal:a,exitCode:c}=e,U.debug(
`Child #${r} (name=${n}, running=${i}, initializing=${s}, abort=${o}, streamsOpen=${u}, exitCode=${c}, exitSignal=${a}) failed to shutdown: `
,t))}}),U.debug(`Waiting for ${t.length} children to shutdown: `+g(this._children,t=>null==t||null==(t=t.child
)?void 0:t.pid).join(", ")),await Promise.allSettled(t),U.debug("end: waitAllChildProcessesStopped: "+g(this._children,
t=>null==t||null==(t=t.child)?void 0:t.pid).join(", ")),(t=null!=(t=null==(t=this._children)?void 0:t.length)?t:0
)&&U.warn(`Warning! ${t} children detected at the end of waitAllChildProcessesStopped(): `+g(this._children,
t=>null==t||null==(t=t.child)?void 0:t.pid).join(", "))):U.debug("waitAllChildProcessesStopped: No children detected.")}
async shutdownChildProcesses(){if(this._destroyed)throw new TypeError(
"shutdownChildProcesses: Service already destroyed");await this._shutdownChildProcesses()}async _shutdownChildProcesses(
){U.debug("start: shutdownChildProcesses: ",this._children),this._sendShutdownToChildProcesses(),
await this.waitAllChildProcessesStopped(),U.debug("end: shutdownChildProcesses: ",this._children)}async executeCommand(t
,e,n){if(this._destroyed)throw new TypeError("The service has been destroyed");U.debug("start: executeCommand: ",t,e,n,
"Running: "+g(this._children,t=>null==t||null==(t=t.child)?void 0:t.pid).join(", "));var r=await this._execFile(t,e,n);
return U.debug("end: executeCommand: ",t,e,n,"Running: "+g(this._children,t=>null==t||null==(t=t.child)?void 0:t.pid
).join(", ")),r}async _execFile(l,h,t){if(this._destroyed)throw new TypeError("_execFile: Service already destroyed");
U.debug("_execFile: ",l,h,t,"Running: "+g(this._children,t=>null==t||null==(t=t.child)?void 0:t.pid).join(", "));var{
cwd:t,env:e,argv0:n,serialization:r,timeout:i,uid:o,gid:s,killSignal:u,stdio:a,detached:c}=t=t||{};const f={name:l,
args:h=h||[],pid:void 0,abort:!1,initializing:!0,streamsOpen:!1,running:!1,child:void 0,stdout:[],stderr:[],killSignal:u
},d=(this._children.push(f),p(p(p(p(p(p(p(p(p(p({},void 0!==t?{cwd:t}:{}),void 0!==e?{env:e}:{}),void 0!==n?{argv0:n}:{}
),void 0!==r?{serialization:r}:{}),void 0!==c?{detached:c}:{}),void 0!==i?{timeout:i}:{}),void 0!==o?{uid:o}:{}),
void 0!==s?{gid:s}:{}),void 0!==a?{stdio:a}:{}),void 0!==u?{killSignal:u}:{}));return f.promise=new Promise((u,a)=>{
var e;try{if(this._destroyed)a(new TypeError("Service destroyed")),f.promise=void 0;else if(
null!==f&&void 0!==f&&f.child)a(new TypeError("Child is already created")),f.promise=void 0;else{f.running=!1,
f.streamsOpen=!1;const c=Us.spawn(l,null!=h?h:[],d);f.child=c,f.pid=null===c||void 0===c?void 0:c.pid,c.on("spawn",()=>{
f.initializing=!1,f.running=!0,f.streamsOpen=!0,void 0===f.pid&&(f.pid=null===c||void 0===c?void 0:c.pid),f.abort&&(
f.abort=!1,this._stopChild(f))}),c.on("error",t=>{f.running?(U.warn("Unexpected error: ",t),a(t||new TypeError(
'Event "error" without error information detected'))):U.warn("The child process could not be spawned: ",t)}),
c.stdout&&c.stdout.on("data",t=>{var e,n,r,i;this._destroyed?U.debug(
"Event 'data': Service already destroyed; stdout data ignored."):({child:i,running:e,streamsOpen:n,initializing:r}=f,
i=null==i?void 0:i.pid,U.debug(`stdout data on: child #${i}, running=${e}, streamsOpen=${n}, initializing=`+r),
f.stdout.push(t))}),c.stderr&&c.stderr.on("data",t=>{var e,n,r,i;this._destroyed?U.debug(
"Event 'data' on stderr: Service already destroyed; stderr data ignored."):({child:i,running:e,streamsOpen:n,
initializing:r}=f,i=null==i?void 0:i.pid,U.debug(
`stderr data on: child #${i}, running=${e}, streamsOpen=${n}, initializing=`+r),f.stderr.push(t))}),c.on("exit",(t,e)=>{
f.running=!1,f.exitCode=t,f.exitSignal=e}),c.on("close",()=>{var t;if(f.running=!1,f.streamsOpen=!1,this._destroyed){
const{child:c,running:e,streamsOpen:n,initializing:r}=f;t=null===c||void 0===c?void 0:c.pid,U.debug(
`close on destroyed service item: child #${t}, running=${e}, streamsOpen=${n}, initializing=`+r)}else{const{child:c,
running:i,streamsOpen:o,initializing:s}=f;t=null===c||void 0===c?void 0:c.pid,U.debug(
`close on item: child #${t}, running=${i}, streamsOpen=${o}, initializing=`+s)}this._onStoredChildClose(l,null!=h?h:[],f
,null!=(t=null!=(t=Y(f.exitCode))?t:Y(c.exitCode))?t:void 0,null!=(t=null!=(t=f.exitSignal)?t:c.signalCode)?t:void 0
).then(t=>{u(t),f.promise=void 0},t=>{a(t),f.promise=void 0})})}}catch(t){U.warn(
`Exception handled from command "${l}${null!=(e=h)&&e.length?" ":""}${(null!=(e=h)?e:[]).join(" ")}": `,t),a(new Wu(l,
null!=h?h:[],-4)),f.promise=void 0}})}sendShutdownToChildProcesses(){if(this._destroyed)throw new TypeError(
"sendShutdownToChildProcesses: Service already destroyed");return this._sendShutdownToChildProcesses()}
_sendShutdownToChildProcesses(){var t=this._children;U.debug(`Sending shutdown to ${t.length} children: `+g(
this._children,t=>null==t||null==(t=t.child)?void 0:t.pid).join(", ")),Eo(t,t=>{try{var{child:e,initializing:n,abort:r
}=t;U.debug(`#${null==e?void 0:e.pid}: initializing=${n}, abort=`+r),n?r?U.debug(
`The child #${null==e?void 0:e.pid} was already aborting later`):(U.debug(
`The child #${null==e?void 0:e.pid} will be aborted later`),t.abort=!0):this._stopChild(t)}catch(t){U.warn(
"Warning! Could not send shutdown signal to child: ",t)}})}_stopChild(t){var{child:t,killSignal:e,running:n}=t;U.debug(
`#${null==t?void 0:t.pid}: killSignal=${e}, running=`+n),t&&n?(U.debug(
`Sending ${null!=e?e:"default signal"} to child #`+(null==t?void 0:t.pid)),(e?t.kill(e):t.kill())||U.warn(
`Warning! Could not signal child process ${null==t?void 0:t.pid} to stop`)):t?n||U.warn(
`Warning! The child #${null==t?void 0:t.pid} was not running`):U.warn("Warning! The child was not yet created")}
async _onStoredChildClose(e,n,r,t,i){var{child:o,running:s,streamsOpen:u,initializing:a}=r,o=null==o?void 0:o.pid,o=(
U.debug(`_onStoredChildClose on child #${o}, running=${s}, streamsOpen=${u}, initializing=`+a),Buffer.concat(r.stderr
).toString("utf8")),s=Buffer.concat(r.stdout).toString("utf8");try{return await this._onChildProcessClose(e,n,t,i,s,o)
}catch(t){if(zt(t))throw t;throw U.warn(`Unexpected exception handled: "${e} ${(null!=n?n:[]).join(" ")}": `,t),new Wu(e
,null!=n?n:[],-3,void 0,o)}finally{try{r&&(this._children=y(this._children,t=>t!==r),r.child=void 0,r.killSignal=void 0)
}catch(t){U.warn("Error when removing the child from internal array: ",t)}}}async _onChildProcessClose(t,e,n,r,i,o){if(
void 0!==r)throw U.debug(`Command failed: "${t}${null!=e&&e.length?" ":""}${(null!=e?e:[]).join(" "
)}": Signal received: ${r}: `,i,o),new Wu(t,null!=e?e:[],-2,r,o);if(void 0!==n&&0!==n)throw 0<=(r=l(n)?n:-1)?U.debug(
`Command failed: "${t}${null!=e&&e.length?" ":""}${(null!=e?e:[]).join(" ")}": Exit code: ${r}: `,i,o):U.debug(
`Command failed: "${t}${null!=e&&e.length?" ":""}${(null!=e?e:[]).join(" ")}": `,i,o),new Wu(t,null!=e?e:[],r,void 0,o);
return U.debug(`Command succeed: "${t}${null!=e&&e.length?" ":""}${(null!=e?e:[]).join(" ")}": `,i,o),p({name:t,args:e,
output:null!=i?i:""},o?{errors:o}:{})}}const Hu=x.createLogger("SystemService");class Xu{static destroy(){
this._childProcessService&&(this._childProcessService.destroy(),this._childProcessService=void 0)}static initialize(t){
void 0===this._childProcessService?this._childProcessService=t:Hu.warn(
"Warning! Child process service was already initialized")}static _getChildProcessService(){if(this._childProcessService
)return this._childProcessService;throw new TypeError("You must call HgNode.initialize() before using this service")}
static async executeCommand(t,e,n){return this._getChildProcessService().executeCommand(t,e,n)}
static countChildProcesses(){return this._getChildProcessService().countChildProcesses()}static shutdownChildProcesses(
){return this._getChildProcessService().shutdownChildProcesses()}static waitAllChildProcessesStopped(){
return this._getChildProcessService().waitAllChildProcessesStopped()}}s(Xu,"_childProcessService",void 0);class Qu{
constructor(){s(this,"_data",void 0),this._data=new Map}hasName(t){return this._data.has(t)}getName(t){if(this.hasName(t
))return this._data.get(t);throw new TypeError("Autowire service did not have name: "+t)}setName(t,e){this._data.set(t,e
)}deleteName(t){this._data.delete(t)}static create(){return new Qu}static setAutowireService(t){this._autowireService=t}
static getAutowireService(){if(this._autowireService)return this._autowireService;throw new TypeError(
"Autowire service has not been initialized")}}s(Qu,"_autowireService",void 0);const Zu=x.createLogger("HgNode"),Yu=(
vu.initEnvFromDefaultFiles(),x.setLogLevel(Ss),vu.setLogLevel(Ss),x.setLogLevel(Ss),vu.setLogLevel(Ss),q.setLogLevel(
S.INFO<=Ss?S.NONE:Ss),x.createLogger("main")),ta=null!=(Rs=it(process.env.OPENAI_API_KEY))?Rs:"";
process.env.OPENAI_API_KEY="",async function(t=[]){var e,n,r;try{(class{static setLogLevel(t){Zu.setLogLevel(t)}
static initialize(t,e){var n,r;t||(n=require("http"),r=require("https"),t=q.create(n,r)),P.setClient(t),Xu.initialize(
Ju.create()),Qu.setAutowireService(null!=e?e:Qu.create())}}).initialize(),Au.setLogLevel(S.INFO),P.setLogLevel(S.INFO),
Yu.debug("Loglevel as "+x.getLogLevelString());var{scriptName:i,parseStatus:o,exitStatus:s,errorString:u,freeArgs:a,
userArgs:c}=Ru.parseArguments(Eu,t,{language:["s","--language","-l"],model:["s","--model","-m"],suffix:["s","--suffix",
"-s"],stop:["s","--stop","-S"],user:["s","--user","-u"],logProbs:["i","--logprobs","-L"],bestOf:["i","--best-of","-b"],
presencePenalty:["n","--presence-penalty","-P"],frequencyPenalty:["n","--frequency-penalty","-f"],echo:["b","--echo",
"-e"],n:["i","--n","-n"],topP:["n","--top-p","-p"],temperature:["n","--temperature","-t"],maxTokens:["i","--max-tokens",
"-T"]});return o===No.HELP||o===No.VERSION?(console.log(Gt(i)),s):u?(console.error("ERROR: "+u),s):(
vu.setupDestroyHandler(()=>{Yu.debug("Stopping command from process utils event")},t=>{Yu.error(
"Error while shutting down the service: ",t)}),e=new Fu(ta),n=new ju(e),h(null==c?void 0:c.language)&&n.setLanguage(
null==c?void 0:c.language),h(null==c?void 0:c.model)&&n.setModel(null==c?void 0:c.model),h(null==c?void 0:c.suffix
)&&n.setSuffix(null==c?void 0:c.suffix),h(null==c?void 0:c.stop)&&n.setStop(null==c?void 0:c.stop),h(
null==c?void 0:c.user)&&n.setUser(null==c?void 0:c.user),l(null==c?void 0:c.logProbs)&&n.setLogProbs(
null==c?void 0:c.logProbs),l(null==c?void 0:c.bestOf)&&n.setBestOf(null==c?void 0:c.bestOf),l(
null==c?void 0:c.presencePenalty)&&n.setPresencePenalty(null==c?void 0:c.presencePenalty),l(
null==c?void 0:c.frequencyPenalty)&&n.setFrequencyPenalty(null==c?void 0:c.frequencyPenalty),fo(null==c?void 0:c.echo
)&&n.setEcho(null==c?void 0:c.echo),l(null==c?void 0:c.n)&&n.setN(null==c?void 0:c.n),l(null==c?void 0:c.topP
)&&n.setTopP(null==c?void 0:c.topP),l(null==c?void 0:c.temperature)&&n.setTemperature(null==c?void 0:c.temperature),l(
null==c?void 0:c.maxTokens)&&n.setMaxTokens(null==c?void 0:c.maxTokens),(r=await new Ou(n).main(a))===T.USAGE?(
console.log(Gt(i)),T.USAGE):r)}catch(t){return Yu.error("Fatal error: ",t),T.FATAL_ERROR}}(process.argv).then(t=>{
process.exit(t)}).catch(t=>{console.error("Error: ",t),process.exit(1)});
