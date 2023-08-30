#!/usr/bin/env node
"use strict";

var _lt, _lt2, _ct, _ref2, _rt, _process, _rt2, _process2, _Rt, _ref4, _process$env$NOR_REQU, _process3, _process4, _rt3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function (r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function () { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function (r) { var n = this.s.return; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, throw: function (r) { var n = this.s.return; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }
function t(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function I(t) {
  var e,
    n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r;) e = t[n], this.set(e[0], e[1]);
}
function k(t) {
  var e,
    n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r;) e = t[n], this.set(e[0], e[1]);
}
function D(t) {
  var e,
    n = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++n < r;) e = t[n], this.set(e[0], e[1]);
}
function F(r, i) {
  function o() {
    var t = arguments,
      e = i ? i.apply(this, t) : t[0],
      n = o.cache;
    return n.has(e) ? n.get(e) : (t = r.apply(this, t), o.cache = n.set(e, t) || n, t);
  }
  if ("function" != typeof r || null != i && "function" != typeof i) throw new TypeError("Expected a function");
  return o.cache = new (F.Cache || ye)(), o;
}
function $(t) {
  t = this.__data__ = new Sn(t), this.size = t.size;
}
function M(t) {
  var e = -1,
    n = null == t ? 0 : t.length;
  for (this.__data__ = new On(); ++e < n;) this.add(t[e]);
}
function z(t) {
  return "not " + t;
}
function G(t) {
  return t.join(" or ");
}
function B(t) {
  return t === x;
}
function W(t) {
  return Xe(t) ? t : ii(t, t => B(t)) ? x : y(t, t => !B(t) && !!t).join(", ");
}
function u(t, e) {
  return B(e = W(e)) ? x : `property "${t}" ` + e;
}
function J(t) {
  return void 0 === t;
}
function V(t) {
  return Ki(t);
}
function h(t) {
  return Yi(t);
}
function H(t) {
  return h(t) ? x : "not number";
}
function K(t) {
  return J(t) || h(t);
}
function X(t) {
  return J(t) || V(t) || h(t);
}
function Q(t) {
  var e;
  if (null != t) return Y(t) ? t : Xe(t) && 0 === (t = qi(t)).length || !Y(e = no(t)) || e.toFixed(0) !== t ? void 0 : e;
}
function Y(t) {
  return Hi(t);
}
function Z(t) {
  return Su(t);
}
function f(t) {
  return Xe(t);
}
function tt(t) {
  return f(t) ? x : "not string";
}
function et(t) {
  return J(t) || f(t);
}
function nt(t) {
  return et(t) ? x : z(G(["string", "undefined"]));
}
function rt(t) {
  if (void 0 !== t && "" !== t) return "" + t;
}
function it(t, e) {
  return ii(t, e);
}
function ot(t) {
  return cu(t);
}
function st(t, e = void 0, n = void 0, r = void 0) {
  var _t$length;
  var i;
  return !(!cu(t) || (i = (_t$length = t === null || t === void 0 ? void 0 : t.length) !== null && _t$length !== void 0 ? _t$length : 0, void 0 !== n && i < n) || void 0 !== r && r < i) && (void 0 === e || it(t, e));
}
function ut(t, e, n, r = void 0, i = void 0, o = void 0) {
  return st(n, r, i, o) ? x : !ot(n) || (n === null || n === void 0 ? void 0 : n.length) < 1 ? z(t) : z(t) + ": " + W(p(n, t => e(t)));
}
function m(t, e = f) {
  var n;
  return ot(t) ? (n = p(t, (t, e) => e), y(n, t => e(t))) : Ru(t) ? (n = Reflect.ownKeys(t), y(n, t => e(t))) : [];
}
function at(t) {
  if (null != t && "" !== t) return Do(t) ? t : !!["true", "t", "on", "1", "enabled"].includes(("" + t).toLowerCase()) || !["false", "f", "off", "0", "disabled"].includes(("" + t).toLowerCase()) && void 0;
}
function ct(t) {
  if (!t.startsWith("%{") || !t.endsWith("}")) return at(t);
}
function lt(t) {
  if (!t.startsWith("%{") || !t.endsWith("}")) return rt(t);
}
function ht(t) {
  if (h(t)) switch (t) {
    case i.OPTIONS:
      return "options";
    case i.GET:
      return "get";
    case i.POST:
      return "post";
    case i.PUT:
      return "put";
    case i.DELETE:
      return "delete";
    case i.PATCH:
      return "patch";
    case i.TRACE:
      return "trace";
    case i.HEAD:
      return "head";
  }
  throw new TypeError("Unsupported value for stringifyRequestMethod(): " + t);
}
function ft(t) {
  if (h(e = t) && 0 <= e && e <= 7) return t;
  var e;
  if (f(t)) switch (t = t.toLowerCase()) {
    case "options":
      return i.OPTIONS;
    case "get":
      return i.GET;
    case "post":
      return i.POST;
    case "put":
      return i.PUT;
    case "delete":
      return i.DELETE;
    case "patch":
      return i.PATCH;
    case "trace":
      return i.TRACE;
    case "head":
      return i.HEAD;
  }
  throw new TypeError(`Cannot parse value "${t}" as a valid RequestMethod`);
}
function dt(t, e, n, r) {
  var i, o, s;
  switch (e) {
    case "b":
      if (i = t, void 0 === (s = at(o = n))) throw new TypeError(`Argument ${i}: Not a boolean: ` + (Do(o) ? x : "not boolean"));
      return s;
    case "s":
      if (i = t, void 0 === (s = function (t) {
        if (null != t) return Z(t === null || t === void 0 ? void 0 : t.toString) ? t.toString() : "" + t;
      }(o = n))) throw new TypeError(`Argument ${i}: Not a string: ` + tt(o));
      return s;
    case "s+":
      if (void 0 === (o = rt(i = n))) throw new TypeError(`Argument ${t}: Not a string: ` + (Xe(s = i) && s ? x : "not non-empty string"));
      return o;
    case "n":
      if (i = t, s = n, void 0 === (o = Vu.parseNumber(s))) throw new TypeError(`Argument ${i}: Not a number: ` + s);
      return o;
    case "i":
      if (i = t, void 0 === (o = Q(s = n))) throw new TypeError(`Argument ${i}: ` + (Ji(s) ? x : "not integer"));
      return o;
  }
  if (r && R(r, e) && Z(r[e])) return r[e](n);
  throw new TypeError("Unimplemented type: " + e.toString());
}
function pt(t, e, n) {
  return dt(t, e, "b" === e ? "true" : "", n);
}
function gt(t, e) {
  return ps(t, e);
}
function _t(...t) {
  return e => gt(t, t => t(e));
}
function yt(t, e = f, n = void 0) {
  var r;
  return !!(void 0 === n || Ru(r = t) && it(vs(r), n)) && (r = void 0 !== e ? e : f, Ru(n = t)) && it(m(n), r);
}
function a(t) {
  return !!Ru(t) && !(t instanceof Date || Z(t) || ot(t)) && yt(t, f, void 0);
}
function vt(t) {
  return a(t) ? x : "not regular object";
}
function Et(t) {
  return f(e = t) || h(e) || Do(e) || V(e) || bt(t) || wt(t);
  var e;
}
function wt(t) {
  return a(t) && yt(t, f, _t(Et, J));
}
function bt(t) {
  return st(t, _t(Et, J));
}
function mt(t) {
  return t && t instanceof ta;
}
function Rt(t) {
  if (void 0 !== t && !(!(t = "" + t) || t.startsWith("%{") && t.endsWith("}"))) return t;
}
function Tt(t, e) {
  return Ru(t) && 0 === (n = e, y(m(t), t => !n.includes(t)).length);
  var n;
}
function At(t, e) {
  return !na || Tt(t, e);
}
function St(t, e) {
  return Tt(t, e) ? x : "Value had extra properties: " + y(m(t), t => !e.includes(t));
}
function Ot(t, e) {
  return At(t, e) ? x : "Value had extra properties: " + y(m(t), t => !e.includes(t));
}
function xt(t) {
  return a(t) && At(t, ["message", "type"]) && f(t === null || t === void 0 ? void 0 : t.message) && f(t === null || t === void 0 ? void 0 : t.type);
}
function Ct(t) {
  return a(t) && At(t, ["error"]) && xt(t === null || t === void 0 ? void 0 : t.error);
}
function Nt(t) {
  return a(t) && At(t, ["text", "index", "logprobs", "finish_reason"]) && f(t === null || t === void 0 ? void 0 : t.text) && h(t === null || t === void 0 ? void 0 : t.index) && X(t === null || t === void 0 ? void 0 : t.logprobs) && et(t === null || t === void 0 ? void 0 : t.finish_reason);
}
function Pt(t) {
  return W([vt(t), Ot(t, ["text", "index", "logprobs", "finish_reason"]), u("text", tt(t === null || t === void 0 ? void 0 : t.text)), u("index", H(t === null || t === void 0 ? void 0 : t.index)), u("logprobs", X(t === null || t === void 0 ? void 0 : t.logprobs) ? x : z(G(["number", "null", "undefined"]))), u("finish_reason", nt(t === null || t === void 0 ? void 0 : t.finish_reason))]);
}
function Lt(t) {
  return a(t) && At(t, ["text", "index", "logprobs", "finish_reason"]) && f(t === null || t === void 0 ? void 0 : t.text) && h(t === null || t === void 0 ? void 0 : t.index) && X(t === null || t === void 0 ? void 0 : t.logprobs) && f(t === null || t === void 0 ? void 0 : t.finish_reason);
}
function jt(t) {
  return Lt(t) || xt(t);
}
function qt(t) {
  return jt(t) ? x : "Not OpenAiError or OpenAiCompletionResponseChoice";
}
function Ut(n, r) {
  return m(r).forEach(t => {
    var e = r[t];
    n = function (t, e, n) {
      if (!f(e)) throw new TypeError("replaceAll: from is required");
      if (!f(t)) throw new TypeError("replaceAll: value is not a string");
      if (!f(n)) throw new TypeError("replaceAll: to is not a string");
      if ("" === e) return ["", ...t.split(""), ""].join(n);
      let r = "",
        i = 0,
        o = t.indexOf(e);
      for (; o >= i;) r += t.substring(i, o) + n, i = o + e.length, o = t.indexOf(e, i);
      return r += t.substring(i);
    }(n, t, e);
  }), n;
}
function It(t, e, n) {
  return Ut(`describe("{{CLASS_NAME}}", () => {
    describe("{{METHOD_NAME}}", () => {
        it("{{TEST_NAME}}", () => {
        });
    });
});
`, {
    "{{CLASS_NAME}}": t !== null && t !== void 0 ? t : "ExampleClass",
    "{{METHOD_NAME}}": e !== null && e !== void 0 ? e : "exampleMethod",
    "{{TEST_NAME}}": n !== null && n !== void 0 ? n : "should ..."
  });
}
function kt(t) {
  switch (t) {
    case s.Continue:
      return "Continue";
    case s.SwitchingProtocols:
      return "Switching Protocols";
    case s.Processing:
      return "Processing";
    case s.CheckPoint:
      return "Check Point";
    case s.OK:
      return "OK";
    case s.Created:
      return "Created";
    case s.Accepted:
      return "Accepted";
    case s.NonAuthoritativeInformation:
      return "Non-Authoritative Information";
    case s.NoContent:
      return "No Content";
    case s.ResetContent:
      return "Reset Content";
    case s.PartialContent:
      return "Partial Content";
    case s.MultiStatus:
      return "Multi Status";
    case s.AlreadyReported:
      return "Already Reported";
    case s.IMUsed:
      return "IM Used";
    case s.MultipleChoices:
      return "Multiple Choices";
    case s.MovedPermanently:
      return "Moved Permanently";
    case s.Found:
      return "Found";
    case s.SeeOther:
      return "See Other";
    case s.NotModified:
      return "Not Modified";
    case s.TemporaryRedirect:
      return "Temporary Redirect";
    case s.PermanentRedirect:
      return "Permanent Redirect";
    case s.BadRequest:
      return "Bad Request";
    case s.Unauthorized:
      return "Unauthorized";
    case s.PaymentRequired:
      return "Payment Required";
    case s.Forbidden:
      return "Forbidden";
    case s.NotFound:
      return "Not Found";
    case s.MethodNotAllowed:
      return "Method Not Allowed";
    case s.NotAcceptable:
      return "Not Acceptable";
    case s.ProxyAuthenticationRequired:
      return "Proxy Authentication Required";
    case s.RequestTimeout:
      return "Request Timeout";
    case s.Conflict:
      return "Conflict";
    case s.Gone:
      return "Gone";
    case s.LengthRequired:
      return "Length Required";
    case s.PreconditionFailed:
      return "Precondition Failed";
    case s.PayloadTooLarge:
      return "Payload Too Large";
    case s.URITooLong:
      return "URI Too Long";
    case s.UnsupportedMediaType:
      return "Unsupported Media Type";
    case s.RequestedRangeNotSatisfiable:
      return "Requested Range Not Satisfiable";
    case s.ExpectationFailed:
      return "Expectation Failed";
    case s.IAmATeapot:
      return "I Am a Teapot";
    case s.UnprocessableEntity:
      return "Unprocessable Entity";
    case s.Locked:
      return "Locked";
    case s.FailedDependency:
      return "Failed Dependency";
    case s.TooEarly:
      return "Too Early";
    case s.UpgradeRequired:
      return "Upgrade Required";
    case s.PreconditionRequired:
      return "Precondition Required";
    case s.TooManyRequests:
      return "Too Many Requests";
    case s.RequestHeaderFieldsTooLarge:
      return "Request Header Fields Too Large";
    case s.UnavailableForLegalReasons:
      return "Unavailable For Legal Reasons";
    case s.InternalServerError:
      return "Internal Server Error";
    case s.NotImplemented:
      return "Not Implemented";
    case s.BadGateway:
      return "Bad Gateway";
    case s.ServiceUnavailable:
      return "Service Unavailable";
    case s.GatewayTimeout:
      return "Gateway Timeout";
    case s.HttpVersionNotSupported:
      return "Http Version Not Supported";
    case s.VariantAlsoNegotiates:
      return "Variant Also Negotiates";
    case s.InsufficientStorage:
      return "Insufficient Storage";
    case s.LoopDetected:
      return "Loop Detected";
    case s.BandwidthLimitExceeded:
      return "Bandwidth Limit Exceeded";
    case s.NotExtended:
      return "Not Extended";
    case s.NetworkAuthenticationRequired:
      return "Network Authentication Required";
    default:
      return t < 400 ? "HTTP Status" : "HTTP Error";
  }
}
function Dt(t, e = void 0) {
  return ha.create(t, e);
}
function Ft(t) {
  return t && t instanceof ha;
}
function $t(t) {
  return a(t) && At(t, ["prompt_tokens", "completion_tokens", "total_tokens"]) && h(t === null || t === void 0 ? void 0 : t.prompt_tokens) && h(t === null || t === void 0 ? void 0 : t.completion_tokens) && h(t === null || t === void 0 ? void 0 : t.total_tokens);
}
function Mt(t) {
  return W([vt(t), Ot(t, ["prompt_tokens", "completion_tokens", "total_tokens"]), u("prompt_tokens", H(t === null || t === void 0 ? void 0 : t.prompt_tokens)), u("completion_tokens", H(t === null || t === void 0 ? void 0 : t.completion_tokens)), u("total_tokens", H(t === null || t === void 0 ? void 0 : t.total_tokens))]);
}
function zt(t) {
  switch (t) {
    case Us.USER:
    case Us.SYSTEM:
    case Us.ASSISTANT:
    case Us.FUNCTION:
      return !0;
    default:
      return !1;
  }
}
function Gt(t) {
  switch (("" + t).toLowerCase()) {
    case "user":
      return Us.USER;
    case "system":
      return Us.SYSTEM;
    case "assistant":
      return Us.ASSISTANT;
    case "function":
      return Us.FUNCTION;
    default:
      return;
  }
}
function Bt(t) {
  var _e2, _e3;
  return a(e = t) && At(e, ["name", "args"]) && f((_e2 = e) === null || _e2 === void 0 ? void 0 : _e2.name) && f((_e3 = e) === null || _e3 === void 0 ? void 0 : _e3.args) || J(t);
  var e;
}
function Wt(t) {
  var _e4, _e5, _e6, _e7;
  return a(t) && At(t, ["index", "message", "finish_reason"]) && h(t === null || t === void 0 ? void 0 : t.index) && a(e = t === null || t === void 0 ? void 0 : t.message) && At(e, ["role", "content", "name", "function_call"]) && zt(Gt((_e4 = e) === null || _e4 === void 0 ? void 0 : _e4.role)) && f((_e5 = e) === null || _e5 === void 0 ? void 0 : _e5.content) && et((_e6 = e) === null || _e6 === void 0 ? void 0 : _e6.name) && Bt((_e7 = e) === null || _e7 === void 0 ? void 0 : _e7.function_call) && f(t === null || t === void 0 ? void 0 : t.finish_reason);
  var e;
}
function Jt(t) {
  var _e8, _e9;
  return W([vt(t), Ot(t, ["index", "message", "finish_reason"]), u("index", H(t === null || t === void 0 ? void 0 : t.index)), u("message", W([vt(e = t === null || t === void 0 ? void 0 : t.message), St(e, ["role", "content", "name", "function_call"]), u("role", (r = Gt(e.role), n = Us, zt(r) ? x : `incorrect enum value "${r}" for OpenAiUserType: Accepted values ` + ws(ra.getValues(n), ", "))), u("content", tt(e.content)), u("name", nt((_e8 = e) === null || _e8 === void 0 ? void 0 : _e8.name)), u("function_call", Bt((_e9 = e) === null || _e9 === void 0 ? void 0 : _e9.function_call) ? x : "not OpenAiChatCompletionFunctionCall or undefined")])), u("finish_reason", tt(t === null || t === void 0 ? void 0 : t.finish_reason))]);
  var e, n, r;
}
function Vt(t) {
  return h(t);
}
function Ht(t) {
  return t && t instanceof ma;
}
function Kt(t) {
  return Bu ? `USAGE: ${t} [OPT(s)] ARG(1) [...ARG(N)]

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
    
    hg pkg sync [with-npm]                     Evaluate NPM package versions

  If the argument is a file, it will be read and replaces.

  Environment variables:
    LOG_LEVEL as one of: ALL, DEBUG, INFO, WARN, ERROR, NONE
` : `USAGE: ${t} ARG(1) [...ARG(N)]
See https://hg.fi
`;
}
function Xt(t) {
  return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : (_u && _u in Object(t) ? function (t) {
    var e,
      n,
      r = fu.call(t, pu),
      i = t[pu];
    try {
      e = !(t[pu] = void 0);
    } catch (t) {}
    return n = du.call(t), e && (r ? t[pu] = i : delete t[pu]), n;
  } : function (t) {
    return gu.call(t);
  })(t);
}
function Qt(t) {
  return null != t && "object" == typeof t;
}
function Yt(t) {
  return "symbol" == typeof t || vu(t) && "[object Symbol]" == yu(t);
}
function Zt(t, e) {
  var n;
  return !Eu(t) && (!("number" != (n = typeof t) && "symbol" != n && "boolean" != n && null != t && !wu(t)) || mu.test(t) || !bu.test(t) || null != e && t in Object(e));
}
function te(t) {
  var e = typeof t;
  return null != t && ("object" == e || "function" == e);
}
function ee(t) {
  return !!Au(t) && ("[object Function]" == (t = Tu(t)) || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t);
}
var ne,
  re,
  ie,
  oe,
  se,
  ue,
  ae,
  ce,
  le,
  he,
  fe,
  de,
  pe,
  ge,
  _e,
  ye,
  ve,
  Ee,
  we,
  be,
  me,
  Re,
  Te,
  Ae,
  Se,
  Oe,
  xe,
  Ce,
  Ne,
  Pe,
  Le,
  je,
  qe,
  Ue,
  Ie,
  ke,
  De,
  Fe,
  $e,
  Me,
  ze,
  Ge,
  Be,
  We,
  Je,
  R,
  Ve,
  He,
  Ke,
  Xe,
  Qe,
  Ye,
  Ze,
  e,
  tn,
  en,
  nn,
  rn,
  on,
  sn,
  un,
  an,
  cn,
  ln,
  hn,
  fn,
  dn,
  pn,
  gn,
  _n,
  yn,
  vn,
  En,
  wn,
  bn,
  mn,
  Rn,
  Tn,
  An,
  Sn,
  On,
  xn,
  Cn,
  Nn,
  Pn,
  Ln,
  jn,
  qn,
  Un,
  In,
  kn,
  Dn,
  Fn,
  $n,
  Mn,
  zn,
  Gn,
  Bn,
  Wn,
  Jn,
  Vn,
  Hn,
  Kn,
  Xn,
  Qn,
  Yn,
  Zn,
  tr,
  er,
  nr,
  rr,
  ir,
  or,
  sr,
  ur,
  ar,
  cr,
  lr,
  hr,
  fr,
  dr,
  pr,
  gr,
  _r,
  yr,
  vr,
  Er,
  wr,
  br,
  mr,
  Rr,
  Tr,
  Ar,
  Sr,
  Or,
  xr,
  Cr,
  Nr,
  Pr,
  Lr,
  jr,
  qr,
  Ur,
  Ir,
  kr,
  Dr,
  Fr,
  $r,
  Mr,
  zr,
  Gr,
  Br,
  Wr,
  Jr,
  Vr,
  Hr,
  Kr,
  Xr,
  Qr,
  Yr,
  Zr,
  ti,
  ei,
  ni,
  ri,
  ii,
  oi,
  si,
  ui,
  ai,
  ci,
  y,
  li,
  hi,
  fi,
  di,
  pi,
  gi,
  _i,
  yi,
  vi,
  Ei,
  wi,
  bi,
  mi,
  n,
  Ri,
  Ti,
  Ai,
  Si,
  Oi,
  xi,
  Ci,
  Ni,
  Pi,
  Li,
  ji,
  qi,
  Ui,
  Ii,
  ki,
  Di,
  Fi,
  $i,
  Mi,
  zi,
  Gi,
  Bi,
  Wi,
  Ji,
  Vi,
  Hi,
  Ki,
  Xi,
  Qi,
  Yi,
  Zi,
  to,
  eo,
  no,
  ro,
  io,
  oo,
  so,
  uo,
  ao,
  co,
  lo,
  ho,
  fo,
  po,
  p,
  go,
  _o,
  yo,
  vo,
  Eo,
  wo,
  bo,
  mo,
  Ro,
  To,
  T,
  d,
  Ao,
  So,
  Oo,
  xo,
  Co,
  No,
  Po,
  Lo,
  jo,
  qo,
  Uo,
  Io,
  ko,
  Do,
  i,
  Fo,
  $o,
  Mo,
  zo,
  Go,
  Bo,
  Wo,
  Jo,
  Vo,
  Ho,
  Ko,
  Xo,
  Qo,
  Yo,
  Zo,
  ts,
  es,
  ns,
  rs,
  is,
  os,
  ss,
  us,
  as,
  cs,
  ls,
  hs,
  fs,
  ds,
  ps,
  gs,
  _s,
  ys,
  vs,
  r,
  Es,
  ws,
  bs,
  ms,
  Rs,
  o,
  Ts,
  As,
  Ss,
  Os,
  xs,
  Cs,
  Ns,
  Ps,
  Ls,
  s,
  js,
  qs,
  Us,
  Is,
  ks,
  Ds,
  Fs,
  $s,
  Ms,
  zs,
  c,
  Gs,
  Bs,
  Hu,
  Ku,
  Ws,
  Js,
  l,
  Vs,
  g,
  _,
  v,
  E,
  Hs,
  Ks,
  Xs,
  Qs,
  Ys,
  Zs,
  tu,
  eu,
  nu = require("fs"),
  ru = require("node:fs/promises"),
  iu = require("child_process"),
  ou = require("path"),
  su = require("url"),
  uu = require("querystring"),
  Xu = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
  au = Object.prototype.hasOwnProperty,
  w = Array.isArray,
  cu = t(w),
  lu = "object" == typeof Xu && Xu && Xu.Object === Object && Xu,
  b = "object" == typeof self && self && self.Object === Object && self,
  hu = (b = lu || b || Function("return this")()).Symbol,
  fu = (A = Object.prototype).hasOwnProperty,
  du = A.toString,
  pu = hu ? hu.toStringTag : void 0,
  gu = Object.prototype.toString,
  _u = hu ? hu.toStringTag : void 0,
  yu = Xt,
  vu = Qt,
  Eu = w,
  wu = Yt,
  bu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  mu = /^\w*$/,
  Ru = t(te),
  Tu = Xt,
  Au = te,
  Su = t(ee),
  A = b["__core-js_shared__"],
  Ou = (A = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "")) ? "Symbol(src)_1." + A : "",
  xu = Function.prototype.toString,
  Cu = ee,
  Nu = te,
  Pu = A = function (t) {
    if (null != t) {
      try {
        return xu.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  },
  Lu = /^\[object .+?Constructor\]$/,
  S = Function.prototype,
  O = Object.prototype,
  S = S.toString,
  O = O.hasOwnProperty,
  ju = RegExp("^" + S.call(O).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
  O = (S = function (t, e) {
    return t = null == t ? void 0 : t[e], !Nu(e = t) || Ou && Ou in e || !(Cu(e) ? ju : Lu).test(Pu(e)) ? void 0 : t;
  })(Object, "create"),
  qu = ne = O,
  Uu = Object.prototype.hasOwnProperty,
  Iu = O,
  ku = Object.prototype.hasOwnProperty,
  Du = O;
I.prototype.clear = function () {
  this.__data__ = ne ? ne(null) : {}, this.size = 0;
}, I.prototype.delete = function (t) {
  return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t;
}, I.prototype.get = function (t) {
  var e,
    n = this.__data__;
  return qu ? "__lodash_hash_undefined__" === (e = n[t]) ? void 0 : e : Uu.call(n, t) ? n[t] : void 0;
}, I.prototype.has = function (t) {
  var e = this.__data__;
  return Iu ? void 0 !== e[t] : ku.call(e, t);
}, I.prototype.set = function (t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Du && void 0 === e ? "__lodash_hash_undefined__" : e, this;
}, O = I, re = Zi = function (t, e) {
  return t === e || t != t && e != e;
}, ie = we = function (t, e) {
  for (var n = t.length; n--;) if (re(t[n][0], e)) return n;
  return -1;
}, o = Array.prototype, oe = o.splice, ae = ue = se = we, o = function (t) {
  var e = this.__data__;
  return !((t = ie(e, t)) < 0 || (t == e.length - 1 ? e.pop() : oe.call(e, t, 1), --this.size, 0));
}, we = function (t) {
  var e = this.__data__;
  return (t = se(e, t)) < 0 ? void 0 : e[t][1];
}, v = function (t) {
  return -1 < ue(this.__data__, t);
}, Hs = function (t, e) {
  var n = this.__data__,
    r = ae(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}, k.prototype.clear = function () {
  this.__data__ = [], this.size = 0;
}, k.prototype.delete = o, k.prototype.get = we, k.prototype.has = v, k.prototype.set = Hs, o = k, we = S(b, "Map"), ce = O, le = o, he = v = we, fe = function (t) {
  var e = typeof t;
  return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
}, _e = ge = pe = de = function (t, e) {
  return t = t.__data__, fe(e) ? t["string" == typeof e ? "string" : "hash"] : t.map;
}, Hs = function (t) {
  return t = de(this, t).delete(t), this.size -= t ? 1 : 0, t;
}, O = function (t) {
  return pe(this, t).get(t);
}, we = function (t) {
  return ge(this, t).has(t);
}, Ae = function (t, e) {
  var n = _e(this, t),
    r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}, D.prototype.clear = function () {
  this.size = 0, this.__data__ = {
    hash: new ce(),
    map: new (he || le)(),
    string: new ce()
  };
}, D.prototype.delete = Hs, D.prototype.get = O, D.prototype.has = we, D.prototype.set = Ae, ye = Hs = D, F.Cache = ye, ve = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ee = /\\(\\)?/g, eu = (O = F(function (t) {
  var i = [];
  return 46 === t.charCodeAt(0) && i.push(""), t.replace(ve, function (t, e, n, r) {
    i.push(n ? r.replace(Ee, "$1") : e || t);
  }), i;
}, function (t) {
  return 500 === eu.size && eu.clear(), t;
})).cache, be = we = function (t, e) {
  for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
  return i;
}, me = w, Re = Yt, Ae = hu ? hu.prototype : void 0, Te = Ae ? Ae.toString : void 0, Se = Ae = function t(e) {
  var n;
  return "string" == typeof e ? e : me(e) ? be(e, t) + "" : Re(e) ? Te ? Te.call(e) : "" : "0" == (n = e + "") && 1 / e == -1 / 0 ? "-0" : n;
}, Oe = w, xe = Zt, Ce = O, Ne = O = function (t) {
  return null == t ? "" : Se(t);
}, Ys = function (t, e) {
  return Oe(t) ? t : xe(t, e) ? [t] : Ce(Ne(t));
}, Pe = Xt, Ie = function (t) {
  return Le(t) && "[object Arguments]" == Pe(t);
}, je = Le = Qt, Ts = Object.prototype, qe = Ts.hasOwnProperty, Ue = Ts.propertyIsEnumerable, Ts = Ie(function () {
  return arguments;
}()) ? Ie : function (t) {
  return je(t) && qe.call(t, "callee") && !Ue.call(t, "callee");
}, ke = /^(?:0|[1-9]\d*)$/, De = Yt, Fe = Ys, $e = Ie = Ts, Me = w, ze = Ts = function (t, e) {
  var n = typeof t;
  return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && ke.test(t)) && -1 < t && t % 1 == 0 && t < e;
}, Ge = l = function (t) {
  return "number" == typeof t && -1 < t && t % 1 == 0 && t <= 9007199254740991;
}, Be = Bi = function (t) {
  var e;
  return "string" == typeof t || De(t) ? t : "0" == (e = t + "") && 1 / t == -1 / 0 ? "-0" : e;
}, We = function (t, e) {
  return null != t && au.call(t, e);
}, Je = bi = function (t, e, n) {
  for (var r, i, o = (e = Fe(e, t)).length, s = !(r = -1); ++r < o && (i = Be(e[r]), s = null != t && n(t, i));) t = t[i];
  return s || ++r != o ? s : !!(o = null == t ? 0 : t.length) && Ge(o) && ze(i, o) && (Me(t) || $e(t));
}, R = t(function (t, e) {
  return null != t && Je(t, e, We);
}), Ve = Xt, He = w, Ke = Qt, Xe = t(function (t) {
  return "string" == typeof t || !He(t) && Ke(t) && "[object String]" == Ve(t);
}), E = function (t, e) {
  for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (!e(t[n], n, t)) return !1;
  return !0;
}, n = function (t, e, n) {
  for (var r, i = -1, o = Object(t), s = n(t), u = s.length; u-- && !1 !== e(o[r = s[++i]], r, o););
  return t;
}, yn = function (t, e) {
  for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
  return r;
}, zs = (Ws = (Ws = (zs = (zs = (r = {
  exports: {}
}).exports) && !zs.nodeType && zs) && r && !r.nodeType && r) && Ws.exports === zs ? b.Buffer : void 0) ? Ws.isBuffer : void 0, Ws = r.exports = zs || function () {
  return !1;
}, Qe = Xt, Ye = l, Ze = Qt, (e = {})["[object Float32Array]"] = e["[object Float64Array]"] = e["[object Int8Array]"] = e["[object Int16Array]"] = e["[object Int32Array]"] = e["[object Uint8Array]"] = e["[object Uint8ClampedArray]"] = e["[object Uint16Array]"] = e["[object Uint32Array]"] = !0, e["[object Arguments]"] = e["[object Array]"] = e["[object ArrayBuffer]"] = e["[object Boolean]"] = e["[object DataView]"] = e["[object Date]"] = e["[object Error]"] = e["[object Function]"] = e["[object Map]"] = e["[object Number]"] = e["[object Object]"] = e["[object RegExp]"] = e["[object Set]"] = e["[object String]"] = e["[object WeakMap]"] = !1, r = function (t) {
  return Ze(t) && Ye(t.length) && !!e[Qe(t)];
}, zs = function (e) {
  return function (t) {
    return e(t);
  };
}, _ = (_ = (c = Vs = {
  exports: {}
}).exports) && !_.nodeType && _, Gs = _ && c && !c.nodeType && c, Bs = Gs && Gs.exports === _ && lu.process, _ = function () {
  try {
    return Gs && Gs.require && Gs.require("util").types || Bs && Bs.binding && Bs.binding("util");
  } catch (t) {}
}(), c.exports = _, _ = (c = (lu = Vs.exports) && lu.isTypedArray) ? zs(c) : r, tn = yn, en = Ie, nn = w, rn = Ws, on = Ts, sn = Vs = _, c = Object.prototype, un = c.hasOwnProperty, an = Object.prototype, Zs = Object.keys, tu = Object, cn = function (t) {
  var e = t && t.constructor;
  return t === ("function" == typeof e && e.prototype || an);
}, ln = function (t) {
  return Zs(tu(t));
}, r = Object.prototype, hn = r.hasOwnProperty, fn = ee, dn = l, pn = function (t, e) {
  var n,
    r = nn(t),
    i = !r && en(t),
    o = !r && !i && rn(t),
    s = !r && !i && !o && sn(t),
    u = r || i || o || s,
    a = u ? tn(t.length, String) : [],
    c = a.length;
  for (n in t) !e && !un.call(t, n) || u && ("length" == n || o && ("offset" == n || "parent" == n) || s && ("buffer" == n || "byteLength" == n || "byteOffset" == n) || on(n, c)) || a.push(n);
  return a;
}, gn = function (t) {
  var e, n;
  if (!cn(t)) return ln(t);
  for (n in e = [], Object(t)) hn.call(t, n) && "constructor" != n && e.push(n);
  return e;
}, vn = n, En = yn = function (t) {
  return (_n(t) ? pn : gn)(t);
}, wn = _n = _ = function (t) {
  return null != t && dn(t.length) && !fn(t);
}, bn = c = function (t, e) {
  var n, r, i;
  if (null != t) {
    if (!wn(t)) return t && vn(t, e, En);
    for (n = t.length, r = -1, i = Object(t); ++r < n && !1 !== e(i[r], r, i););
  }
  return t;
}, r = function (t, r) {
  var i = !0;
  return bn(t, function (t, e, n) {
    return i = !!r(t, e, n);
  }), i;
}, Tn = v, An = Hs, Sn = Rn = mn = o, l = function (t) {
  var e = this.__data__,
    t = e.delete(t);
  return this.size = e.size, t;
}, n = function (t) {
  return this.__data__.get(t);
}, o = function (t) {
  return this.__data__.has(t);
}, xn = function (t, e) {
  var n,
    r = this.__data__;
  if (r instanceof Rn) {
    if (n = r.__data__, !Tn || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new An(n);
  }
  return r.set(t, e), this.size = r.size, this;
}, $.prototype.clear = function () {
  this.__data__ = new mn(), this.size = 0;
}, $.prototype.delete = l, $.prototype.get = n, $.prototype.has = o, $.prototype.set = xn, l = $, On = Hs, n = function (t) {
  return this.__data__.has(t);
}, M.prototype.add = M.prototype.push = function (t) {
  return this.__data__.set(t, "__lodash_hash_undefined__"), this;
}, M.prototype.has = n, Cn = o = M, Nn = xn = function (t, e) {
  for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (e(t[n], n, t)) return !0;
  return !1;
}, Pn = Hs = function (t, e) {
  return t.has(e);
}, n = b.Uint8Array, Ln = n, jn = Zi, qn = n = function (t, e, n, r, i, o) {
  var s,
    u,
    a,
    c,
    l,
    h,
    f,
    d = 1 & n,
    p = t.length,
    g = e.length;
  if (p != g && !(d && p < g)) return !1;
  if (g = o.get(t), s = o.get(e), g && s) return g == e && s == t;
  for (u = -1, a = !0, c = 2 & n ? new Cn() : void 0, o.set(t, e), o.set(e, t); ++u < p;) {
    if (l = t[u], h = e[u], void 0 !== (f = r ? d ? r(h, l, u, e, t, o) : r(l, h, u, t, e, o) : f)) {
      if (f) continue;
      a = !1;
      break;
    }
    if (c) {
      if (!Nn(e, function (t, e) {
        if (!Pn(c, e) && (l === t || i(l, t, n, r, o))) return c.push(e);
      })) {
        a = !1;
        break;
      }
    } else if (l !== h && !i(l, h, n, r, o)) {
      a = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), a;
}, Un = function (t) {
  var n = -1,
    r = Array(t.size);
  return t.forEach(function (t, e) {
    r[++n] = [e, t];
  }), r;
}, In = Qs = function (t) {
  var e = -1,
    n = Array(t.size);
  return t.forEach(function (t) {
    n[++e] = t;
  }), n;
}, kr = hu ? hu.prototype : void 0, kn = kr ? kr.valueOf : void 0, kr = function (t, e, n, r, i, o, s) {
  var u, a;
  switch (n) {
    case "[object DataView]":
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
      t = t.buffer, e = e.buffer;
    case "[object ArrayBuffer]":
      return !(t.byteLength != e.byteLength || !o(new Ln(t), new Ln(e)));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return jn(+t, +e);
    case "[object Error]":
      return t.name == e.name && t.message == e.message;
    case "[object RegExp]":
    case "[object String]":
      return t == e + "";
    case "[object Map]":
      u = Un;
    case "[object Set]":
      return u = u || In, !!(t.size == e.size || 1 & r) && ((a = s.get(t)) ? a == e : (r |= 2, s.set(t, e), a = qn(u(t), u(e), r, i, o, s), s.delete(t), a));
    case "[object Symbol]":
      if (kn) return kn.call(t) == kn.call(e);
  }
  return !1;
}, Fn = Dn = function (t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
  return t;
}, $n = w, Mn = Xs = function (t, e) {
  for (var n, r = -1, i = null == t ? 0 : t.length, o = 0, s = []; ++r < i;) e(n = t[r], r, t) && (s[o++] = n);
  return s;
}, Hr = Object.prototype, zn = Hr.propertyIsEnumerable, Gn = Object.getOwnPropertySymbols, Bn = function (t, e, n) {
  return e = e(t), $n(t) ? e : Fn(e, n(t));
}, Wn = Gn ? function (e) {
  return null == e ? [] : (e = Object(e), Mn(Gn(e), function (t) {
    return zn.call(e, t);
  }));
} : function () {
  return [];
}, Jn = yn, Vn = function (t) {
  return Bn(t, Jn, Wn);
}, Hr = Object.prototype, Hn = Hr.hasOwnProperty, Hr = function (t, e, n, r, i, o) {
  var s,
    u,
    a,
    c,
    l,
    h,
    f,
    d,
    p,
    g = 1 & n,
    _ = Vn(t),
    y = _.length;
  if (y != Vn(e).length && !g) return !1;
  for (s = y; s--;) if (u = _[s], !(g ? u in e : Hn.call(e, u))) return !1;
  if (d = o.get(t), p = o.get(e), d && p) return d == e && p == t;
  for (a = !0, o.set(t, e), o.set(e, t), c = g; ++s < y;) {
    if (l = t[u = _[s]], h = e[u], !(void 0 === (f = r ? g ? r(h, l, u, e, t, o) : r(l, h, u, t, e, o) : f) ? l === h || i(l, h, n, r, o) : f)) {
      a = !1;
      break;
    }
    c = c || "constructor" == u;
  }
  return a && !c && (d = t.constructor) != (p = e.constructor) && "constructor" in t && "constructor" in e && !("function" == typeof d && d instanceof d && "function" == typeof p && p instanceof p) && (a = !1), o.delete(t), o.delete(e), a;
}, gi = S(b, "DataView"), Js = S(b, "Promise"), g = Ks = S(b, "Set"), S = S(b, "WeakMap"), Kn = Xt, Qn = (Xn = A)(b = gi), Yn = Xn(v), Zn = Xn(Js), tr = Xn(g), er = Xn(S), A = Kn, (b && "[object DataView]" != A(new b(new ArrayBuffer(1))) || v && "[object Map]" != A(new v()) || Js && "[object Promise]" != A(Js.resolve()) || g && "[object Set]" != A(new g()) || S && "[object WeakMap]" != A(new S())) && (A = function (t) {
  var e = Kn(t);
  if (t = (t = "[object Object]" == e ? t.constructor : void 0) ? Xn(t) : "") switch (t) {
    case Qn:
      return "[object DataView]";
    case Yn:
      return "[object Map]";
    case Zn:
      return "[object Promise]";
    case tr:
      return "[object Set]";
    case er:
      return "[object WeakMap]";
  }
  return e;
}), nr = l, rr = n, ir = kr, or = Hr, sr = A, ur = w, ar = Ws, cr = Vs, lr = "[object Arguments]", hr = "[object Array]", fr = "[object Object]", gi = Object.prototype, dr = gi.hasOwnProperty, pr = function (t, e, n, r, i, o) {
  var s = ur(t),
    u = ur(e),
    a = s ? hr : sr(t),
    u = u ? hr : sr(e),
    c = (a = a == lr ? fr : a) == fr,
    l = (u = u == lr ? fr : u) == fr;
  if ((u = a == u) && ar(t)) {
    if (!ar(e)) return !1;
    c = !(s = !0);
  }
  return u && !c ? (o = o || new nr(), s || cr(t) ? rr(t, e, n, r, i, o) : ir(t, e, a, n, r, i, o)) : 1 & n || (s = c && dr.call(t, "__wrapped__"), a = l && dr.call(e, "__wrapped__"), !s && !a) ? u && (o = o || new nr(), or(t, e, n, r, i, o)) : i(s ? t.value() : t, a ? e.value() : e, n, r, o = o || new nr());
}, gr = Qt, _r = l, yr = b = function t(e, n, r, i, o) {
  return e === n || (null == e || null == n || !gr(e) && !gr(n) ? e != e && n != n : pr(e, n, r, i, t, o));
}, vr = te, Er = v = function (t) {
  return t == t && !vr(t);
}, wr = yn, br = function (t, e, n, r) {
  var i,
    o,
    s,
    u,
    a,
    c,
    l = n.length,
    h = l,
    f = !r;
  if (null == t) return !h;
  for (t = Object(t); l--;) if (i = n[l], f && i[2] ? i[1] !== t[i[0]] : !(i[0] in t)) return !1;
  for (; ++l < h;) if (s = t[o = (i = n[l])[0]], u = i[1], f && i[2]) {
    if (void 0 === s && !(o in t)) return !1;
  } else if (a = new _r(), !(void 0 === (c = r ? r(s, u, o, t, e, a) : c) ? yr(u, s, 3, r, a) : c)) return !1;
  return !0;
}, mr = function (t) {
  for (var e, n, r = wr(t), i = r.length; i--;) n = t[e = r[i]], r[i] = [e, n, Er(n)];
  return r;
}, Rr = Js = function (e, n) {
  return function (t) {
    return null != t && t[e] === n && (void 0 !== n || e in Object(t));
  };
}, g = function (e) {
  var n = mr(e);
  return 1 == n.length && n[0][2] ? Rr(n[0][0], n[0][1]) : function (t) {
    return t === e || br(t, e, n);
  };
}, Tr = Ys, Ar = Bi, Sr = S = function (t, e) {
  for (var n = 0, r = (e = Tr(e, t)).length; null != t && n < r;) t = t[Ar(e[n++])];
  return n && n == r ? t : void 0;
}, Or = t(n = function (t, e, n) {
  return void 0 === (t = null == t ? void 0 : Sr(t, e)) ? n : t;
}), xr = function (t, e) {
  return null != t && e in Object(t);
}, Cr = bi, Nr = b, Pr = n, Lr = function (t, e) {
  return null != t && Cr(t, e, xr);
}, qr = v, Ur = Js, Dr = S, Fr = function (e) {
  return function (t) {
    return null == t ? void 0 : t[e];
  };
}, $r = function (e) {
  return function (t) {
    return Dr(t, e);
  };
}, Mr = jr = Zt, zr = Ir = Bi, Gr = g, Br = function (n, r) {
  return jr(n) && qr(r) ? Ur(Ir(n), r) : function (t) {
    var e = Pr(t, n);
    return void 0 === e && e === r ? Lr(t, n) : Nr(r, e, 3);
  };
}, Wr = kr = function (t) {
  return t;
}, Vr = function (t) {
  return Mr(t) ? Fr(zr(t)) : $r(t);
}, Kr = Zi, Xr = _, Qr = Ts, Yr = te, Zr = E, ti = r, ei = Hr = function (t) {
  return "function" == typeof t ? t : null == t ? Wr : "object" == typeof t ? Jr(t) ? Br(t[0], t[1]) : Gr(t) : Vr(t);
}, ni = Jr = w, ri = A = function (t, e, n) {
  var r;
  return !!Yr(n) && !!("number" == (r = typeof e) ? Xr(n) && Qr(e, n.length) : "string" == r && e in n) && Kr(n[e], t);
}, ii = t(function (t, e, n) {
  var r = ni(t) ? Zr : ti;
  return n && ri(t, e, n) && (e = void 0), r(t, ei(e));
}), oi = c, si = Xs, ui = function (t, r) {
  var i = [];
  return oi(t, function (t, e, n) {
    r(t, e, n) && i.push(t);
  }), i;
}, ai = Hr, ci = w, y = t(function (t, e) {
  return (ci(t) ? si : ui)(t, ai(e));
});
const x = "OK";
Ku = (Hu = Ws = {
  exports: {}
}).exports, function () {
  function Po(t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, n[0]);
      case 2:
        return t.call(e, n[0], n[1]);
      case 3:
        return t.call(e, n[0], n[1], n[2]);
    }
    return t.apply(e, n);
  }
  function us(t, e, n, r) {
    for (var i, o = -1, s = null == t ? 0 : t.length; ++o < s;) e(r, i = t[o], n(i), t);
    return r;
  }
  function Lo(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
    return t;
  }
  function as(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (!e(t[n], n, t)) return !1;
    return !0;
  }
  function jo(t, e) {
    for (var n, r = -1, i = null == t ? 0 : t.length, o = 0, s = []; ++r < i;) e(n = t[r], r, t) && (s[o++] = n);
    return s;
  }
  function cs(t, e) {
    return !(null == t || !t.length) && -1 < Io(t, e, 0);
  }
  function ls(t, e, n) {
    for (var r = -1, i = null == t ? 0 : t.length; ++r < i;) if (n(e, t[r])) return !0;
    return !1;
  }
  function qo(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
    return i;
  }
  function Uo(t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
    return t;
  }
  function hs(t, e, n, r) {
    var i = -1,
      o = null == t ? 0 : t.length;
    for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
    return n;
  }
  function fs(t, e, n, r) {
    var i = null == t ? 0 : t.length;
    for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
    return n;
  }
  function ds(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (e(t[n], n, t)) return !0;
    return !1;
  }
  function ps(t, r, e) {
    var i;
    return e(t, function (t, e, n) {
      if (r(t, e, n)) return i = e, !1;
    }), i;
  }
  function gs(t, e, n, r) {
    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) if (e(t[o], o, t)) return o;
    return -1;
  }
  function Io(t, e, n) {
    if (e != e) return gs(t, ys, n);
    for (var r = t, i = e, o = n - 1, s = r.length; ++o < s;) if (r[o] === i) return o;
    return -1;
  }
  function _s(t, e, n, r) {
    for (var i = n - 1, o = t.length; ++i < o;) if (r(t[i], e)) return i;
    return -1;
  }
  function ys(t) {
    return t != t;
  }
  function vs(t, e) {
    var n = null == t ? 0 : t.length;
    return n ? bs(t, e) / n : NaN;
  }
  function Es(e) {
    return function (t) {
      return null == t ? Go : t[e];
    };
  }
  function s(e) {
    return function (t) {
      return null == e ? Go : e[t];
    };
  }
  function ws(t, r, i, o, e) {
    return e(t, function (t, e, n) {
      i = o ? (o = !1, t) : r(i, t, e, n);
    }), i;
  }
  function bs(t, e) {
    for (var n, r, i = -1, o = t.length; ++i < o;) (r = e(t[i])) !== Go && (n = n === Go ? r : n + r);
    return n;
  }
  function ms(t, e) {
    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
    return r;
  }
  function Rs(t) {
    return t && t.slice(0, Ps(t) + 1).replace(Au, "");
  }
  function ko(e) {
    return function (t) {
      return e(t);
    };
  }
  function Ts(e, t) {
    return qo(t, function (t) {
      return e[t];
    });
  }
  function Do(t, e) {
    return t.has(e);
  }
  function As(t, e) {
    for (var n = -1, r = t.length; ++n < r && -1 < Io(e, t[n], 0););
    return n;
  }
  function Ss(t, e) {
    for (var n = t.length; n-- && -1 < Io(e, t[n], 0););
    return n;
  }
  function Os(t) {
    return "\\" + u[t];
  }
  function Fo(t) {
    return O.test(t);
  }
  function xs(t) {
    var n = -1,
      r = Array(t.size);
    return t.forEach(function (t, e) {
      r[++n] = [e, t];
    }), r;
  }
  function Cs(e, n) {
    return function (t) {
      return e(n(t));
    };
  }
  function $o(t, e) {
    for (var n, r = -1, i = t.length, o = 0, s = []; ++r < i;) (n = t[r]) !== e && n !== Ws || (t[r] = Ws, s[o++] = r);
    return s;
  }
  function Ns(t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t;
    }), n;
  }
  function Mo(t) {
    return (Fo(t) ? function (t) {
      for (var e = S.lastIndex = 0; S.test(t);) ++e;
      return e;
    } : c)(t);
  }
  function zo(t) {
    return Fo(t) ? t.match(S) || [] : t.split("");
  }
  function Ps(t) {
    for (var e = t.length; e-- && l.test(t.charAt(e)););
    return e;
  }
  var Go,
    Bo,
    u,
    Ls,
    js,
    Wo,
    t,
    qs,
    a,
    Us,
    Is,
    ks,
    Ds,
    Fs,
    $s,
    c,
    Ms,
    zs,
    Gs,
    Jo,
    Vo = "Expected a function",
    Bs = "__lodash_hash_undefined__",
    Ws = "__lodash_placeholder__",
    Ho = 9007199254740991,
    Ko = 4294967295,
    Js = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
    Xo = "[object Arguments]",
    Vs = "[object Array]",
    Qo = "[object Boolean]",
    Yo = "[object Date]",
    Hs = "[object Error]",
    Ks = "[object Function]",
    Xs = "[object GeneratorFunction]",
    Zo = "[object Map]",
    ts = "[object Number]",
    es = "[object Object]",
    Qs = "[object Promise]",
    ns = "[object RegExp]",
    rs = "[object Set]",
    is = "[object String]",
    Ys = "[object Symbol]",
    Zs = "[object WeakMap]",
    tu = "[object ArrayBuffer]",
    os = "[object DataView]",
    eu = "[object Float32Array]",
    nu = "[object Float64Array]",
    ru = "[object Int8Array]",
    iu = "[object Int16Array]",
    ou = "[object Int32Array]",
    su = "[object Uint8Array]",
    uu = "[object Uint8ClampedArray]",
    au = "[object Uint16Array]",
    cu = "[object Uint32Array]",
    lu = /\b__p \+= '';/g,
    hu = /\b(__p \+=) '' \+/g,
    fu = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    du = /&(?:amp|lt|gt|quot|#39);/g,
    pu = /[&<>"']/g,
    gu = RegExp(du.source),
    _u = RegExp(pu.source),
    yu = /<%-([\s\S]+?)%>/g,
    vu = /<%([\s\S]+?)%>/g,
    Eu = /<%=([\s\S]+?)%>/g,
    wu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    bu = /^\w*$/,
    mu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Ru = /[\\^$.*+?()[\]{}|]/g,
    Tu = RegExp(Ru.source),
    Au = /^\s+/,
    l = /\s/,
    Su = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    Ou = /\{\n\/\* \[wrapped with (.+)\] \*/,
    xu = /,? & /,
    Cu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    Nu = /[()=,{}\[\]\/\s]/,
    Pu = /\\(\\)?/g,
    Lu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    ju = /\w*$/,
    qu = /^[-+]0x[0-9a-f]+$/i,
    Uu = /^0b[01]+$/i,
    Iu = /^\[object .+?Constructor\]$/,
    ku = /^0o[0-7]+$/i,
    Du = /^(?:0|[1-9]\d*)$/,
    Fu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    $u = /($^)/,
    Mu = /['\n\r\u2028\u2029\\]/g,
    h = "\\ud800-\\udfff",
    f = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
    e = "\\u2700-\\u27bf",
    n = "a-z\\xdf-\\xf6\\xf8-\\xff",
    r = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    d = "\\ufe0e\\ufe0f",
    p = "[" + h + "]",
    g = "[" + (b = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000") + "]",
    i = "[" + f + "]",
    o = "[" + e + "]",
    _ = "[" + n + "]",
    y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    v = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    E = "\\u200d",
    w = "(?:" + _ + "|" + (b = "[^" + h + b + "\\d+" + e + n + r + "]") + ")",
    b = "(?:" + (r = "[" + r + "]") + "|" + b + ")",
    m = "(?:['’](?:d|ll|m|re|s|t|ve))?",
    R = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
    T = (T = "[" + d + "]?") + (A = "(?:" + i + "|" + (e = "\\ud83c[\\udffb-\\udfff]") + ")?") + "(?:" + E + "(?:" + [n = "[^" + h + "]", y, v].join("|") + ")" + T + A + ")*",
    A = "(?:" + [o, y, v].join("|") + ")" + T,
    o = "(?:" + [n + i + "?", i, y, v, p].join("|") + ")",
    zu = RegExp("['’]", "g"),
    Gu = RegExp(i, "g"),
    S = RegExp(e + "(?=" + e + ")|" + o + T, "g"),
    Bu = RegExp([r + "?" + _ + "+" + m + "(?=" + [g, r, "$"].join("|") + ")", b + "+" + R + "(?=" + [g, r + w, "$"].join("|") + ")", r + "?" + w + "+" + m, r + "+" + R, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", A].join("|"), "g"),
    O = RegExp("[" + E + h + f + d + "]"),
    Wu = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    Ju = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
    Vu = -1,
    ss = {};
  ss[eu] = ss[nu] = ss[ru] = ss[iu] = ss[ou] = ss[su] = ss[uu] = ss[au] = ss[cu] = !0, ss[Xo] = ss[Vs] = ss[tu] = ss[Qo] = ss[os] = ss[Yo] = ss[Hs] = ss[Ks] = ss[Zo] = ss[ts] = ss[es] = ss[ns] = ss[rs] = ss[is] = ss[Zs] = !1, (Bo = {})[Xo] = Bo[Vs] = Bo[tu] = Bo[os] = Bo[Qo] = Bo[Yo] = Bo[eu] = Bo[nu] = Bo[ru] = Bo[iu] = Bo[ou] = Bo[Zo] = Bo[ts] = Bo[es] = Bo[ns] = Bo[rs] = Bo[is] = Bo[Ys] = Bo[su] = Bo[uu] = Bo[au] = Bo[cu] = !0, Bo[Hs] = Bo[Ks] = Bo[Zs] = !1, n = {
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "Ç": "C",
    "ç": "c",
    "Ð": "D",
    "ð": "d",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "Ñ": "N",
    "ñ": "n",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "Ý": "Y",
    "ý": "y",
    "ÿ": "y",
    "Æ": "Ae",
    "æ": "ae",
    "Þ": "Th",
    "þ": "th",
    "ß": "ss",
    "Ā": "A",
    "Ă": "A",
    "Ą": "A",
    "ā": "a",
    "ă": "a",
    "ą": "a",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "Ď": "D",
    "Đ": "D",
    "ď": "d",
    "đ": "d",
    "Ē": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ę": "E",
    "Ě": "E",
    "ē": "e",
    "ĕ": "e",
    "ė": "e",
    "ę": "e",
    "ě": "e",
    "Ĝ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ģ": "G",
    "ĝ": "g",
    "ğ": "g",
    "ġ": "g",
    "ģ": "g",
    "Ĥ": "H",
    "Ħ": "H",
    "ĥ": "h",
    "ħ": "h",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "Į": "I",
    "İ": "I",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "į": "i",
    "ı": "i",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "ĸ": "k",
    "Ĺ": "L",
    "Ļ": "L",
    "Ľ": "L",
    "Ŀ": "L",
    "Ł": "L",
    "ĺ": "l",
    "ļ": "l",
    "ľ": "l",
    "ŀ": "l",
    "ł": "l",
    "Ń": "N",
    "Ņ": "N",
    "Ň": "N",
    "Ŋ": "N",
    "ń": "n",
    "ņ": "n",
    "ň": "n",
    "ŋ": "n",
    "Ō": "O",
    "Ŏ": "O",
    "Ő": "O",
    "ō": "o",
    "ŏ": "o",
    "ő": "o",
    "Ŕ": "R",
    "Ŗ": "R",
    "Ř": "R",
    "ŕ": "r",
    "ŗ": "r",
    "ř": "r",
    "Ś": "S",
    "Ŝ": "S",
    "Ş": "S",
    "Š": "S",
    "ś": "s",
    "ŝ": "s",
    "ş": "s",
    "š": "s",
    "Ţ": "T",
    "Ť": "T",
    "Ŧ": "T",
    "ţ": "t",
    "ť": "t",
    "ŧ": "t",
    "Ũ": "U",
    "Ū": "U",
    "Ŭ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ų": "U",
    "ũ": "u",
    "ū": "u",
    "ŭ": "u",
    "ů": "u",
    "ű": "u",
    "ų": "u",
    "Ŵ": "W",
    "ŵ": "w",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Ź": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "ź": "z",
    "ż": "z",
    "ž": "z",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Œ": "Oe",
    "œ": "oe",
    "ŉ": "'n",
    "ſ": "s"
  }, y = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, v = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  }, u = {
    "\\": "\\",
    "'": "'",
    "\n": "n",
    "\r": "r",
    "\u2028": "u2028",
    "\u2029": "u2029"
  }, Ls = parseFloat, js = parseInt, p = "object" == typeof Xu && Xu && Xu.Object === Object && Xu, i = "object" == typeof self && self && self.Object === Object && self, Wo = p || i || Function("return this")(), e = Ku && !Ku.nodeType && Ku, qs = (t = e && !Hu.nodeType && Hu) && t.exports === e, a = qs && p.process, o = function () {
    try {
      return t && t.require && t.require("util").types || a && a.binding && a.binding("util");
    } catch (t) {}
  }(), Us = o && o.isArrayBuffer, Is = o && o.isDate, ks = o && o.isMap, Ds = o && o.isRegExp, Fs = o && o.isSet, $s = o && o.isTypedArray, c = Es("length"), Ms = s(n), zs = s(y), Gs = s(v), Jo = function o(t) {
    function p(t) {
      if (I(t) && !$(t) && !(t instanceof _)) {
        if (t instanceof g) return t;
        if (k.call(t, "__wrapped__")) return Ke(t);
      }
      return new g(t);
    }
    function O() {}
    function g(t, e) {
      this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = Go;
    }
    function _(t) {
      this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ko, this.__views__ = [];
    }
    function x(t) {
      var e,
        n = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++n < r;) e = t[n], this.set(e[0], e[1]);
    }
    function C(t) {
      var e,
        n = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++n < r;) e = t[n], this.set(e[0], e[1]);
    }
    function N(t) {
      var e,
        n = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++n < r;) e = t[n], this.set(e[0], e[1]);
    }
    function M(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.__data__ = new N(); ++e < n;) this.add(t[e]);
    }
    function U(t) {
      t = this.__data__ = new C(t), this.size = t.size;
    }
    function z(t, e) {
      var n,
        r = $(t),
        i = !r && Ni(t),
        o = !r && !i && Li(t),
        s = !r && !i && !o && Ii(t),
        u = r || i || o || s,
        a = u ? ms(t.length, Jn) : [],
        c = a.length;
      for (n in t) !e && !k.call(t, n) || u && ("length" == n || o && ("offset" == n || "parent" == n) || s && ("buffer" == n || "byteLength" == n || "byteOffset" == n) || Ue(n, c)) || a.push(n);
      return a;
    }
    function G(t) {
      var e = t.length;
      return e ? t[Ct(0, e - 1)] : Go;
    }
    function B(t, e, n) {
      (n === Go || gn(t[e], n)) && (n !== Go || e in t) || K(t, e, n);
    }
    function W(t, e, n) {
      var r = t[e];
      k.call(t, e) && gn(r, n) && (n !== Go || e in t) || K(t, e, n);
    }
    function J(t, e) {
      for (var n = t.length; n--;) if (gn(t[n][0], e)) return n;
      return -1;
    }
    function V(t, r, i, o) {
      return Ur(t, function (t, e, n) {
        r(o, t, i(t), n);
      }), o;
    }
    function H(t, e) {
      return t && Zt(e, R(e), t);
    }
    function K(t, e, n) {
      "__proto__" == e && hr ? hr(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
      }) : t[e] = n;
    }
    function X(t, e) {
      for (var n = -1, r = e.length, i = L(r), o = null == t; ++n < r;) i[n] = o ? Go : On(t, e[n]);
      return i;
    }
    function Q(t, e, n) {
      return t != t || (n !== Go && (t = t <= n ? t : n), e === Go) || e <= t ? t : e;
    }
    function y(n, r, i, t, e, o) {
      var s,
        u,
        a,
        c,
        l,
        h,
        f = 1 & r,
        d = 2 & r,
        p = 4 & r;
      if ((s = i ? e ? i(n, t, e, o) : i(n) : s) === Go) {
        if (!b(n)) return n;
        if (t = $(n)) {
          if (l = (c = n).length, h = new c.constructor(l), l && "string" == typeof c[0] && k.call(c, "index") && (h.index = c.index, h.input = c.input), s = h, !f) return m(n, s);
        } else {
          if (l = (u = F(n)) == Ks || u == Xs, Li(n)) return Vt(n, f);
          if (u == es || u == Xo || l && !e) {
            if (s = d || l ? {} : je(n), !f) return d ? (c = n, l = (h = s) && Zt(c, T(c), h), Zt(c, Br(c), l)) : (c = H(s, h = n), Zt(h, Gr(h), c));
          } else {
            if (!Bo[u]) return e ? n : {};
            s = function (t, e) {
              var n,
                r,
                i = t.constructor;
              switch (u) {
                case tu:
                  return Ht(t);
                case Qo:
                case Yo:
                  return new i(+t);
                case os:
                  return n = t, r = e ? Ht(n.buffer) : n.buffer, new n.constructor(r, n.byteOffset, n.byteLength);
                case eu:
                case nu:
                case ru:
                case iu:
                case ou:
                case su:
                case uu:
                case au:
                case cu:
                  return Kt(t, e);
                case Zo:
                  return new i();
                case ts:
                case is:
                  return new i(t);
                case ns:
                  return (n = new (r = t).constructor(r.source, ju.exec(r))).lastIndex = r.lastIndex, n;
                case rs:
                  return new i();
                case Ys:
                  return Lr ? S(Lr.call(t)) : {};
              }
            }(n, f);
          }
        }
        if (l = (o = o || new U()).get(n)) return l;
        o.set(n, s), Ui(n) ? n.forEach(function (t) {
          s.add(y(t, r, i, t, n, o));
        }) : ji(n) && n.forEach(function (t, e) {
          s.set(e, y(t, r, i, e, n, o));
        }), Lo((a = t ? Go : (p ? d ? Se : Ae : d ? T : R)(n)) || n, function (t, e) {
          a && (t = n[e = t]), W(s, e, y(t, r, i, e, n, o));
        });
      }
      return s;
    }
    function Y(t, e, n) {
      var r,
        i,
        o,
        s = n.length;
      if (null == t) return !s;
      for (t = S(t); s--;) if (i = e[r = n[s]], (o = t[r]) === Go && !(r in t) || !i(o)) return !1;
      return !0;
    }
    function Z(t, e, n) {
      if ("function" != typeof t) throw new j(Vo);
      return Vr(function () {
        t.apply(Go, n);
      }, e);
    }
    function tt(t, e, n, r) {
      var i,
        o,
        s,
        u = -1,
        a = cs,
        c = !0,
        l = t.length,
        h = [],
        f = e.length;
      if (l) {
        n && (e = qo(e, ko(n))), r ? (a = ls, c = !1) : 200 <= e.length && (a = Do, c = !1, e = new M(e));
        t: for (; ++u < l;) if (i = t[u], o = null == n ? i : n(i), i = r || 0 !== i ? i : 0, c && o == o) {
          for (s = f; s--;) if (e[s] === o) continue t;
          h.push(i);
        } else a(e, o, r) || h.push(i);
      }
      return h;
    }
    function et(t, e, n) {
      for (var r, i, o, s, u = -1, a = t.length; ++u < a;) null != (i = e(r = t[u])) && (o === Go ? i == i && !v(i) : n(i, o)) && (o = i, s = r);
      return s;
    }
    function nt(t, r) {
      var i = [];
      return Ur(t, function (t, e, n) {
        r(t, e, n) && i.push(t);
      }), i;
    }
    function a(t, e, n, r, i) {
      var o,
        s = -1,
        u = t.length;
      for (n = n || qe, i = i || []; ++s < u;) o = t[s], 0 < e && n(o) ? 1 < e ? a(o, e - 1, n, r, i) : Uo(i, o) : r || (i[i.length] = o);
      return i;
    }
    function rt(t, e) {
      return t && kr(t, e, R);
    }
    function it(t, e) {
      return t && Dr(t, e, R);
    }
    function ot(e, t) {
      return jo(t, function (t) {
        return yn(e[t]);
      });
    }
    function st(t, e) {
      for (var n = 0, r = (e = Wt(e, t)).length; null != t && n < r;) t = t[Ve(e[n++])];
      return n && n == r ? t : Go;
    }
    function ut(t, e, n) {
      return e = e(t), $(t) ? e : Uo(e, n(t));
    }
    function n(t) {
      if (null == t) return t === Go ? "[object Undefined]" : "[object Null]";
      if (lr && lr in S(t)) {
        var e,
          n,
          r = t,
          i = k.call(r, lr),
          o = r[lr];
        try {
          r[lr] = Go, e = !0;
        } catch (t) {}
        return n = Yn.call(r), e && (i ? r[lr] = o : delete r[lr]), n;
      }
      return Yn.call(t);
    }
    function at(t, e) {
      return e < t;
    }
    function ct(t, e) {
      return null != t && k.call(t, e);
    }
    function lt(t, e) {
      return null != t && e in S(t);
    }
    function ht(t, e, n) {
      for (var r, i, o, s, u, a, c = n ? ls : cs, l = t[0].length, h = t.length, f = h, d = L(h), p = 1 / 0, g = []; f--;) r = t[f], f && e && (r = qo(r, ko(e))), p = D(r.length, p), d[f] = !n && (e || 120 <= l && 120 <= r.length) ? new M(f && r) : Go;
      r = t[0], i = -1, o = d[0];
      t: for (; ++i < l && g.length < p;) if (s = r[i], u = e ? e(s) : s, s = n || 0 !== s ? s : 0, !(o ? Do(o, u) : c(g, u, n))) {
        for (f = h; --f;) if (!((a = d[f]) ? Do(a, u) : c(t[f], u, n))) continue t;
        o && o.push(u), g.push(s);
      }
      return g;
    }
    function ft(t, e, n) {
      return null == (e = null == (t = ze(t, e = Wt(e, t))) ? t : t[Ve(r(e))]) ? Go : Po(e, t, n);
    }
    function dt(t) {
      return I(t) && n(t) == Xo;
    }
    function pt(t, e, n, r, i) {
      var o, s, u, a, c, l, h, f, d, p, g, _, y, v, E, w, b, m, R, T, A, S, O, x, C, N, P, L, j, q;
      if (t === e) return !0;
      if (null == t || null == e || !I(t) && !I(e)) return t != t && e != e;
      if (x = pt, v = $(t), o = $(e), E = v ? Vs : F(t), o = o ? Vs : F(e), h = (E = E == Xo ? es : E) == es, f = (o = o == Xo ? es : o) == es, (o = E == o) && Li(t)) {
        if (!Li(e)) return !1;
        h = !(v = !0);
      }
      if (o && !h) {
        if (i = i || new U(), v || Ii(t)) return Re(t, e, n, r, x, i);
        switch (C = t, N = e, P = n, L = r, j = x, q = i, E) {
          case os:
            if (C.byteLength != N.byteLength || C.byteOffset != N.byteOffset) return !1;
            C = C.buffer, N = N.buffer;
          case tu:
            return !(C.byteLength != N.byteLength || !j(new nr(C), new nr(N)));
          case Qo:
          case Yo:
          case ts:
            return gn(+C, +N);
          case Hs:
            return C.name == N.name && C.message == N.message;
          case ns:
          case is:
            return C == N + "";
          case Zo:
            S = xs;
          case rs:
            return S = S || Ns, !(C.size != N.size && !(1 & P)) && ((O = q.get(C)) ? O == N : (P |= 2, q.set(C, N), O = Re(S(C), S(N), P, L, j, q), q.delete(C), O));
          case Ys:
            if (Lr) return Lr.call(C) == Lr.call(N);
        }
      } else {
        if (!(1 & n) && (v = h && k.call(t, "__wrapped__"), E = f && k.call(e, "__wrapped__"), v || E)) return x(v ? t.value() : t, E ? e.value() : e, n, r, i = i || new U());
        if (o) {
          if (b = e, R = r, T = x, A = i = i || new U(), s = 1 & (m = n), (a = (u = Ae(w = t)).length) != Ae(b).length && !s) return !1;
          for (c = a; c--;) if (l = u[c], !(s ? l in b : k.call(b, l))) return !1;
          if (h = A.get(w), f = A.get(b), h && f) return h == b && f == w;
          for (d = !0, A.set(w, b), A.set(b, w), p = s; ++c < a;) {
            if (g = w[l = u[c]], _ = b[l], !((y = R ? s ? R(_, g, l, b, w, A) : R(g, _, l, w, b, A) : y) === Go ? g === _ || T(g, _, m, R, A) : y)) {
              d = !1;
              break;
            }
            p = p || "constructor" == l;
          }
          return d && !p && (v = w.constructor) != (E = b.constructor) && "constructor" in w && "constructor" in b && !("function" == typeof v && v instanceof v && "function" == typeof E && E instanceof E) && (d = !1), A.delete(w), A.delete(b), d;
        }
      }
      return !1;
    }
    function gt(t, e, n, r) {
      var i,
        o,
        s,
        u,
        a,
        c,
        l = n.length,
        h = l,
        f = !r;
      if (null == t) return !h;
      for (t = S(t); l--;) if (i = n[l], f && i[2] ? i[1] !== t[i[0]] : !(i[0] in t)) return !1;
      for (; ++l < h;) if (s = t[o = (i = n[l])[0]], u = i[1], f && i[2]) {
        if (s === Go && !(o in t)) return !1;
      } else if (a = new U(), !((c = r ? r(s, u, o, t, e, a) : c) === Go ? pt(u, s, 3, r, a) : c)) return !1;
      return !0;
    }
    function _t(t) {
      return !(!b(t) || Qn && Qn in t) && (yn(t) ? er : Iu).test(He(t));
    }
    function yt(t) {
      return "function" == typeof t ? t : null == t ? A : "object" == typeof t ? $(t) ? mt(t[0], t[1]) : bt(t) : Dn(t);
    }
    function vt(t) {
      var e, n;
      if (!De(t)) return yr(t);
      for (n in e = [], S(t)) k.call(t, n) && "constructor" != n && e.push(n);
      return e;
    }
    function Et(t, e) {
      return t < e;
    }
    function wt(t, r) {
      var i = -1,
        o = f(t) ? L(t.length) : [];
      return Ur(t, function (t, e, n) {
        o[++i] = r(t, e, n);
      }), o;
    }
    function bt(e) {
      var n = Ne(e);
      return 1 == n.length && n[0][2] ? $e(n[0][0], n[0][1]) : function (t) {
        return t === e || gt(t, e, n);
      };
    }
    function mt(n, r) {
      return Ie(n) && Fe(r) ? $e(Ve(n), r) : function (t) {
        var e = On(t, n);
        return e === Go && e === r ? xn(t, n) : pt(r, e, 3);
      };
    }
    function Rt(g, _, y, v, E) {
      g !== _ && kr(_, function (t, e) {
        var n, r, i, o, s, u, a, c, l, h, f, d, p;
        E = E || new U(), b(t) ? (i = y, o = Rt, s = v, u = E, f = Ge(n = g, r = e), d = Ge(a = _, r), (p = u.get(d)) || ((a = (p = s ? s(f, d, r + "", n, a, u) : Go) === Go) && (l = !(c = $(d)) && Li(d), h = !c && !l && Ii(d), p = d, c || l || h ? p = $(f) ? f : w(f) ? m(f) : l ? Vt(d, !(a = !1)) : h ? Kt(d, !(a = !1)) : [] : bn(d) || Ni(d) ? Ni(p = f) ? p = Sn(f) : b(f) && !yn(f) || (p = je(d)) : a = !1), a && (u.set(d, p), o(p, d, i, s, u), u.delete(d))), B(n, r, p)) : (c = v ? v(Ge(g, e), t, e + "", g, _, E) : Go, B(g, e, c === Go ? t : c));
      }, T);
    }
    function Tt(t, e) {
      var n = t.length;
      if (n) return Ue(e += e < 0 ? n : 0, n) ? t[e] : Go;
    }
    function At(t, r, c) {
      r = r.length ? qo(r, function (e) {
        return $(e) ? function (t) {
          return st(t, 1 === e.length ? e[0] : e);
        } : e;
      }) : [A], i = -1, r = qo(r, ko(l()));
      var i,
        e = wt(t, function (e, t, n) {
          return {
            criteria: qo(r, function (t) {
              return t(e);
            }),
            index: ++i,
            value: e
          };
        }),
        n = e.length;
      for (e.sort(function (t, e) {
        for (var n, r = c, i = -1, o = t.criteria, s = e.criteria, u = o.length, a = r.length; ++i < u;) if (n = Xt(o[i], s[i])) return a <= i ? n : n * ("desc" == r[i] ? -1 : 1);
        return t.index - e.index;
      }); n--;) e[n] = e[n].value;
      return e;
    }
    function St(t, e, n) {
      for (var r, i, o = -1, s = e.length, u = {}; ++o < s;) n(i = st(t, r = e[o]), r) && Pt(u, Wt(r, t), i);
      return u;
    }
    function Ot(t, e, n, r) {
      var i,
        o,
        s,
        u = r ? _s : Io,
        a = -1,
        c = e.length,
        l = t;
      for (t === e && (e = m(e)), n && (l = qo(t, ko(n))); ++a < c;) for (i = 0, o = e[a], s = n ? n(o) : o; -1 < (i = u(l, s, i, r));) l !== t && ur.call(l, i, 1), ur.call(t, i, 1);
      return t;
    }
    function xt(t, e) {
      for (var n, r, i = t ? e.length : 0, o = i - 1; i--;) n = e[i], i != o && n === r || (Ue(r = n) ? ur.call(t, n, 1) : kt(t, n));
    }
    function Ct(t, e) {
      return t + dr(wr() * (e - t + 1));
    }
    function Nt(t, e) {
      var n = "";
      if (!(!t || e < 1 || Ho < e)) for (; e % 2 && (n += t), (e = dr(e / 2)) && (t += t), e;);
      return n;
    }
    function s(t, e) {
      return Hr(Me(t, e, A), t + "");
    }
    function Pt(t, e, n, r) {
      var i, o, s, u, a, c, l;
      if (b(t)) for (i = -1, s = (o = (e = Wt(e, t)).length) - 1, u = t; null != u && ++i < o;) {
        if (c = n, "__proto__" === (a = Ve(e[i])) || "constructor" === a || "prototype" === a) return t;
        W(u, a, c = i != s && (l = u[a], (c = r ? r(l, a, u) : Go) === Go) ? b(l) ? l : Ue(e[i + 1]) ? [] : {} : c), u = u[a];
      }
      return t;
    }
    function u(t, e, n) {
      var r,
        i = -1,
        o = t.length;
      for ((n = o < n ? o : n) < 0 && (n += o), o = n < (e = e < 0 ? o < -e ? 0 : o + e : e) ? 0 : n - e >>> 0, e >>>= 0, r = L(o); ++i < o;) r[i] = t[i + e];
      return r;
    }
    function Lt(t, e, n) {
      var r,
        i,
        o = 0,
        s = null == t ? o : t.length;
      if ("number" == typeof e && e == e && s <= 2147483647) {
        for (; o < s;) null !== (i = t[r = o + s >>> 1]) && !v(i) && (n ? i <= e : i < e) ? o = 1 + r : s = r;
        return s;
      }
      return jt(t, e, A, n);
    }
    function jt(t, e, n, r) {
      var i,
        o,
        s,
        u,
        a,
        c,
        l,
        h,
        f,
        d,
        p = 0,
        g = null == t ? 0 : t.length;
      if (0 === g) return 0;
      for (i = (e = n(e)) != e, o = null === e, s = v(e), u = e === Go; p < g;) l = (c = n(t[a = dr((p + g) / 2)])) !== Go, h = null === c, f = c == c, d = v(c), (i ? r || f : u ? f && (r || l) : o ? f && l && (r || !h) : s ? f && l && !h && (r || !d) : !h && !d && (r ? c <= e : c < e)) ? p = a + 1 : g = a;
      return D(g, 4294967294);
    }
    function qt(t, e) {
      for (var n, r, i, o = -1, s = t.length, u = 0, a = []; ++o < s;) n = t[o], r = e ? e(n) : n, o && gn(r, i) || (i = r, a[u++] = 0 === n ? 0 : n);
      return a;
    }
    function Ut(t) {
      return "number" == typeof t ? t : v(t) ? NaN : +t;
    }
    function c(t) {
      var e;
      return "string" == typeof t ? t : $(t) ? qo(t, c) + "" : v(t) ? jr ? jr.call(t) : "" : "0" == (e = t + "") && 1 / t == -1 / 0 ? "-0" : e;
    }
    function It(t, e, n) {
      var r,
        i,
        o,
        s,
        u = -1,
        a = cs,
        c = t.length,
        l = !0,
        h = [],
        f = h;
      if (n) l = !1, a = ls;else if (200 <= c) {
        if (r = e ? null : Mr(t)) return Ns(r);
        l = !1, a = Do, f = new M();
      } else f = e ? [] : h;
      t: for (; ++u < c;) if (i = t[u], o = e ? e(i) : i, i = n || 0 !== i ? i : 0, l && o == o) {
        for (s = f.length; s--;) if (f[s] === o) continue t;
        e && f.push(o), h.push(i);
      } else a(f, o, n) || (f !== h && f.push(o), h.push(i));
      return h;
    }
    function kt(t, e) {
      return null == (t = ze(t, e = Wt(e, t))) || delete t[Ve(r(e))];
    }
    function Dt(t, e, n, r) {
      return Pt(t, e, n(st(t, e)), r);
    }
    function Ft(t, e, n, r) {
      for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t););
      return n ? u(t, r ? 0 : o, r ? o + 1 : i) : u(t, r ? o + 1 : 0, r ? i : o);
    }
    function $t(t, e) {
      var n = t;
      return hs(e, function (t, e) {
        return e.func.apply(e.thisArg, Uo([t], e.args));
      }, t instanceof _ ? t.value() : n);
    }
    function Mt(t, e, n) {
      var r,
        i,
        o,
        s,
        u = t.length;
      if (u < 2) return u ? It(t[0]) : [];
      for (r = -1, i = L(u); ++r < u;) for (o = t[r], s = -1; ++s < u;) s != r && (i[r] = tt(i[r] || o, t[s], e, n));
      return It(a(i, 1), e, n);
    }
    function zt(t, e, n) {
      for (var r, i = -1, o = t.length, s = e.length, u = {}; ++i < o;) r = i < s ? e[i] : Go, n(u, t[i], r);
      return u;
    }
    function Gt(t) {
      return w(t) ? t : [];
    }
    function Bt(t) {
      return "function" == typeof t ? t : A;
    }
    function Wt(t, e) {
      return $(t) ? t : Ie(t, e) ? [t] : Kr(d(t));
    }
    function Jt(t, e, n) {
      var r = t.length;
      return n = n === Go ? r : n, !e && r <= n ? t : u(t, e, n);
    }
    function Vt(t, e) {
      return e ? t.slice() : (e = t.length, e = rr ? rr(e) : new t.constructor(e), t.copy(e), e);
    }
    function Ht(t) {
      var e = new t.constructor(t.byteLength);
      return new nr(e).set(new nr(t)), e;
    }
    function Kt(t, e) {
      return e = e ? Ht(t.buffer) : t.buffer, new t.constructor(e, t.byteOffset, t.length);
    }
    function Xt(t, e) {
      var n, r, i, o, s, u, a, c;
      if (t !== e) {
        if (n = t !== Go, r = null === t, i = t == t, o = v(t), s = e !== Go, u = null === e, a = e == e, c = v(e), !u && !c && !o && e < t || o && s && a && !u && !c || r && s && a || !n && a || !i) return 1;
        if (!r && !o && !c && t < e || c && n && i && !r && !o || u && n && i || !s && i || !a) return -1;
      }
      return 0;
    }
    function Qt(t, e, n, r) {
      for (var i = -1, o = t.length, s = n.length, u = -1, a = e.length, c = q(o - s, 0), l = L(a + c), h = !r; ++u < a;) l[u] = e[u];
      for (; ++i < s;) (h || i < o) && (l[n[i]] = t[i]);
      for (; c--;) l[u++] = t[i++];
      return l;
    }
    function Yt(t, e, n, r) {
      for (var i, o = -1, s = t.length, u = -1, a = n.length, c = -1, l = e.length, h = q(s - a, 0), f = L(h + l), d = !r; ++o < h;) f[o] = t[o];
      for (i = o; ++c < l;) f[i + c] = e[c];
      for (; ++u < a;) (d || o < s) && (f[i + n[u]] = t[o++]);
      return f;
    }
    function m(t, e) {
      var n = -1,
        r = t.length;
      for (e = e || L(r); ++n < r;) e[n] = t[n];
      return e;
    }
    function Zt(t, e, n, r) {
      var i,
        o,
        s,
        u,
        a = !n;
      for (n = n || {}, i = -1, o = e.length; ++i < o;) (a ? K : W)(n, s = e[i], (u = r ? r(n[s], t[s], s, n, t) : Go) === Go ? t[s] : u);
      return n;
    }
    function te(i, o) {
      return function (t, e) {
        var n = $(t) ? us : V,
          r = o ? o() : {};
        return n(t, i, l(e, 2), r);
      };
    }
    function ee(u) {
      return s(function (t, e) {
        var n,
          r = -1,
          i = e.length,
          o = 1 < i ? e[i - 1] : Go,
          s = 2 < i ? e[2] : Go,
          o = 3 < u.length && "function" == typeof o ? (i--, o) : Go;
        for (s && h(e[0], e[1], s) && (o = i < 3 ? Go : o, i = 1), t = S(t); ++r < i;) (n = e[r]) && u(t, n, r, o);
        return t;
      });
    }
    function ne(o, s) {
      return function (t, e) {
        if (null != t) {
          if (!f(t)) return o(t, e);
          for (var n = t.length, r = s ? n : -1, i = S(t); (s ? r-- : ++r < n) && !1 !== e(i[r], r, i););
        }
        return t;
      };
    }
    function re(a) {
      return function (t, e, n) {
        for (var r, i = -1, o = S(t), s = n(t), u = s.length; u-- && !1 !== e(o[r = s[a ? u : ++i]], r, o););
        return t;
      };
    }
    function ie(r) {
      return function (t) {
        var e = (n = Fo(t = d(t)) ? zo(t) : Go) ? n[0] : t.charAt(0),
          n = n ? Jt(n, 1).join("") : t.slice(1);
        return e[r]() + n;
      };
    }
    function oe(e) {
      return function (t) {
        return hs(jn(Ln(t).replace(zu, "")), e, "");
      };
    }
    function se(r) {
      return function () {
        var t,
          e,
          n = arguments;
        switch (n.length) {
          case 0:
            return new r();
          case 1:
            return new r(n[0]);
          case 2:
            return new r(n[0], n[1]);
          case 3:
            return new r(n[0], n[1], n[2]);
          case 4:
            return new r(n[0], n[1], n[2], n[3]);
          case 5:
            return new r(n[0], n[1], n[2], n[3], n[4]);
          case 6:
            return new r(n[0], n[1], n[2], n[3], n[4], n[5]);
          case 7:
            return new r(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
        }
        return t = qr(r.prototype), b(e = r.apply(t, n)) ? e : t;
      };
    }
    function ue(o) {
      return function (t, e, n) {
        var r,
          i = S(t);
        return f(t) || (r = l(e, 3), t = R(t), e = function (t) {
          return r(i[t], t, i);
        }), -1 < (e = o(t, e, n)) ? i[r ? t[e] : e] : Go;
      };
    }
    function ae(a) {
      return Te(function (i) {
        var t,
          o,
          e,
          n,
          s = i.length,
          r = s,
          u = g.prototype.thru;
        for (a && i.reverse(); r--;) {
          if ("function" != typeof (t = i[r])) throw new j(Vo);
          u && !o && "wrapper" == Oe(t) && (o = new g([], !0));
        }
        for (r = o ? r : s; ++r < s;) n = "wrapper" == (e = Oe(t = i[r])) ? zr(t) : Go, o = n && ke(n[0]) && 424 == n[1] && !n[4].length && 1 == n[9] ? o[Oe(n[0])].apply(o, n[3]) : 1 == t.length && ke(t) ? o[e]() : o.thru(t);
        return function () {
          var t,
            e,
            n = arguments,
            r = n[0];
          if (o && 1 == n.length && $(r)) return o.plant(r).value();
          for (t = 0, e = s ? i[t].apply(this, n) : r; ++t < s;) e = i[t].call(this, e);
          return e;
        };
      });
    }
    function ce(s, u, a, c, l, h, f, d, p, g) {
      var _ = 128 & u,
        y = 1 & u,
        v = 2 & u,
        E = 24 & u,
        w = 512 & u,
        b = v ? Go : se(s);
      return function t() {
        for (var e, n, r = arguments.length, i = L(r), o = r; o--;) i[o] = arguments[o];
        return E && (n = function (t, e) {
          for (var n = t.length, r = 0; n--;) t[n] === e && ++r;
          return r;
        }(i, e = xe(t))), c && (i = Qt(i, c, l, E)), h && (i = Yt(i, h, f, E)), r -= n, E && r < g ? (n = $o(i, e), _e(s, u, ce, t.placeholder, a, i, n, d, p, g - r)) : (e = y ? a : this, n = v ? e[s] : s, r = i.length, d ? i = function (t, e) {
          for (var n, r = t.length, i = D(e.length, r), o = m(t); i--;) n = e[i], t[i] = Ue(n, r) ? o[n] : Go;
          return t;
        }(i, d) : w && 1 < r && i.reverse(), _ && p < r && (i.length = p), (n = this && this !== Wo && this instanceof t ? b || se(n) : n).apply(e, i));
      };
    }
    function le(n, s) {
      return function (t, e) {
        return r = n, i = s(e), o = {}, rt(t, function (t, e, n) {
          r(o, i(t), e, n);
        }), o;
        var r, i, o;
      };
    }
    function he(r, i) {
      return function (t, e) {
        var n;
        if (t === Go && e === Go) return i;
        if (t !== Go && (n = t), e !== Go) {
          if (n === Go) return e;
          e = ("string" == typeof t || "string" == typeof e ? (t = c(t), c) : (t = Ut(t), Ut))(e), n = r(t, e);
        }
        return n;
      };
    }
    function fe(r) {
      return Te(function (t) {
        return t = qo(t, ko(l())), s(function (e) {
          var n = this;
          return r(t, function (t) {
            return Po(t, n, e);
          });
        });
      });
    }
    function de(t, e) {
      var n;
      return (n = (e = e === Go ? " " : c(e)).length) < 2 ? n ? Nt(e, t) : e : (n = Nt(e, fr(t / Mo(e))), Fo(e) ? Jt(zo(n), 0, t).join("") : n.slice(0, t));
    }
    function pe(c) {
      return function (t, e, n) {
        n && "number" != typeof n && h(t, e, n) && (e = n = Go), t = Tn(t), e === Go ? (e = t, t = 0) : e = Tn(e);
        for (var r = t, i = n = n === Go ? t < e ? 1 : -1 : Tn(n), o = c, s = -1, u = q(fr((e - r) / (i || 1)), 0), a = L(u); u--;) a[o ? u : ++s] = r, r += i;
        return a;
      };
    }
    function ge(n) {
      return function (t, e) {
        return "string" == typeof t && "string" == typeof e || (t = E(t), e = E(e)), n(t, e);
      };
    }
    function _e(t, e, n, r, i, o, s, u, a, c) {
      var l = 8 & e;
      return 4 & (e = (e | (l ? 32 : 64)) & ~(l ? 64 : 32)) || (e &= -4), i = n.apply(Go, n = [t, e, i, l ? o : Go, l ? s : Go, l ? Go : o, l ? Go : s, u, a, c]), ke(t) && Jr(i, n), i.placeholder = r, Be(i, t, e);
    }
    function ye(t) {
      var r = Bn[t];
      return function (t, e) {
        var n;
        return t = E(t), (e = null == e ? 0 : D(P(e), 292)) && gr(t) ? (n = (d(t) + "e").split("e"), +((n = (d(r(n[0] + "e" + (+n[1] + e))) + "e").split("e"))[0] + "e" + (+n[1] - e))) : r(t);
      };
    }
    function ve(o) {
      return function (t) {
        var e,
          n,
          r,
          i = F(t);
        return i == Zo ? xs(t) : i == rs ? (i = t, e = -1, n = Array(i.size), i.forEach(function (t) {
          n[++e] = [t, t];
        }), n) : qo(o(r = t), function (t) {
          return [t, r[t]];
        });
      };
    }
    function Ee(t, e, n, r, i, o, s, u) {
      var a,
        c,
        l,
        h,
        f,
        d,
        p,
        g,
        _,
        y,
        v,
        E,
        w,
        b,
        m,
        R,
        T,
        A,
        S,
        O,
        x,
        C,
        N = 2 & e;
      if (N || "function" == typeof t) return (a = r ? r.length : 0) || (e &= -97, r = i = Go), s = s === Go ? s : q(P(s), 0), u = u === Go ? u : P(u), a -= i ? i.length : 0, 64 & e && (l = r, c = i, r = i = Go), l = [t, e, n, r, i, l, c, o, s, u], (c = N ? Go : zr(t)) && (g = (p = (s = (o = l)[1]) | (d = (h = c)[1])) < 131, _ = 128 == d && 8 == s || 128 == d && 256 == s && o[7].length <= h[8] || 384 == d && h[7].length <= h[8] && 8 == s, g || _) && (1 & d && (o[2] = h[2], p |= 1 & s ? 0 : 4), (g = h[3]) && (f = o[3], o[3] = f ? Qt(f, g, h[4]) : g, o[4] = f ? $o(o[3], Ws) : h[4]), (g = h[5]) && (f = o[5], o[5] = f ? Yt(f, g, h[6]) : g, o[6] = f ? $o(o[5], Ws) : h[6]), (g = h[7]) && (o[7] = g), 128 & d && (o[8] = null == o[8] ? h[8] : D(o[8], h[8])), null == o[9] && (o[9] = h[9]), o[0] = h[0], o[1] = p), t = l[0], e = l[1], n = l[2], r = l[3], i = l[4], !(u = l[9] = l[9] === Go ? N ? 0 : t.length : q(l[9] - a, 0)) && 24 & e && (e &= -25), _ = e && 1 != e ? 8 == e || 16 == e ? (O = e, x = u, C = se(S = t), function t() {
        for (var e = arguments.length, n = L(e), r = e, i = xe(t); r--;) n[r] = arguments[r];
        return (e -= (i = e < 3 && n[0] !== i && n[e - 1] !== i ? [] : $o(n, i)).length) < x ? _e(S, O, ce, t.placeholder, Go, n, i, Go, Go, x - e) : Po(this && this !== Wo && this instanceof t ? C : S, this, n);
      }) : 32 != e && 33 != e || i.length ? ce.apply(Go, l) : (m = n, R = r, T = 1 & e, A = se(b = t), function t() {
        for (var e = -1, n = arguments.length, r = -1, i = R.length, o = L(i + n), s = this && this !== Wo && this instanceof t ? A : b; ++r < i;) o[r] = R[r];
        for (; n--;) o[r++] = arguments[++e];
        return Po(s, T ? m : this, o);
      }) : (v = n, E = 1 & e, w = se(y = t), function t() {
        return (this && this !== Wo && this instanceof t ? w : y).apply(E ? v : this, arguments);
      }), Be((c ? Fr : Jr)(_, l), t, e);
      throw new j(Vo);
    }
    function we(t, e, n, r) {
      return t === Go || gn(t, Hn[n]) && !k.call(r, n) ? e : t;
    }
    function be(t, e, n, r, i, o) {
      return b(t) && b(e) && (o.set(e, t), Rt(t, e, Go, be, o), o.delete(e)), t;
    }
    function me(t) {
      return bn(t) ? Go : t;
    }
    function Re(t, e, n, r, i, o) {
      var s,
        u,
        a,
        c,
        l,
        h,
        f,
        d = 1 & n,
        p = t.length,
        g = e.length;
      if (p != g && !(d && p < g)) return !1;
      if (g = o.get(t), s = o.get(e), g && s) return g == e && s == t;
      for (u = -1, a = !0, c = 2 & n ? new M() : Go, o.set(t, e), o.set(e, t); ++u < p;) {
        if (l = t[u], h = e[u], (f = r ? d ? r(h, l, u, e, t, o) : r(l, h, u, t, e, o) : f) !== Go) {
          if (f) continue;
          a = !1;
          break;
        }
        if (c) {
          if (!ds(e, function (t, e) {
            return !Do(c, e) && (l === t || i(l, t, n, r, o)) && c.push(e);
          })) {
            a = !1;
            break;
          }
        } else if (l !== h && !i(l, h, n, r, o)) {
          a = !1;
          break;
        }
      }
      return o.delete(t), o.delete(e), a;
    }
    function Te(t) {
      return Hr(Me(t, Go, Ye), t + "");
    }
    function Ae(t) {
      return ut(t, R, Gr);
    }
    function Se(t) {
      return ut(t, T, Br);
    }
    function Oe(t) {
      for (var e, n, r = t.name + "", i = Sr[r], o = k.call(Sr, r) ? i.length : 0; o--;) if (null == (n = (e = i[o]).func) || n == t) return e.name;
      return r;
    }
    function xe(t) {
      return (k.call(p, "placeholder") ? p : t).placeholder;
    }
    function l() {
      var t = (t = p.iteratee || Un) === Un ? yt : t;
      return arguments.length ? t(arguments[0], arguments[1]) : t;
    }
    function Ce(t, e) {
      var n,
        t = t.__data__;
      return ("string" == (n = typeof e) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e) ? t["string" == typeof e ? "string" : "hash"] : t.map;
    }
    function Ne(t) {
      for (var e, n, r = R(t), i = r.length; i--;) n = t[e = r[i]], r[i] = [e, n, Fe(n)];
      return r;
    }
    function Pe(t, e) {
      return _t(t = null == t ? Go : t[e]) ? t : Go;
    }
    function Le(t, e, n) {
      for (var r, i, o = (e = Wt(e, t)).length, s = !(r = -1); ++r < o && (i = Ve(e[r]), s = null != t && n(t, i));) t = t[i];
      return s || ++r != o ? s : !!(o = null == t ? 0 : t.length) && En(o) && Ue(i, o) && ($(t) || Ni(t));
    }
    function je(t) {
      return "function" != typeof t.constructor || De(t) ? {} : qr(ir(t));
    }
    function qe(t) {
      return $(t) || Ni(t) || !!(ar && t && t[ar]);
    }
    function Ue(t, e) {
      var n = typeof t;
      return !!(e = null == e ? Ho : e) && ("number" == n || "symbol" != n && Du.test(t)) && -1 < t && t % 1 == 0 && t < e;
    }
    function h(t, e, n) {
      var r;
      if (b(n)) return ("number" == (r = typeof e) ? f(n) && Ue(e, n.length) : "string" == r && e in n) && gn(n[e], t);
    }
    function Ie(t, e) {
      var n;
      return !$(t) && ("number" == (n = typeof t) || "symbol" == n || "boolean" == n || null == t || v(t) || bu.test(t) || !wu.test(t) || null != e && t in S(e));
    }
    function ke(t) {
      var e = Oe(t),
        n = p[e];
      return "function" == typeof n && e in _.prototype && (t === n || (e = zr(n)) && t === e[0]);
    }
    function De(t) {
      var e = t && t.constructor;
      return t === ("function" == typeof e && e.prototype || Hn);
    }
    function Fe(t) {
      return t == t && !b(t);
    }
    function $e(e, n) {
      return function (t) {
        return null != t && t[e] === n && (n !== Go || e in S(t));
      };
    }
    function Me(o, s, u) {
      return s = q(s === Go ? o.length - 1 : s, 0), function () {
        for (var t, e = arguments, n = -1, r = q(e.length - s, 0), i = L(r); ++n < r;) i[n] = e[s + n];
        for (n = -1, t = L(s + 1); ++n < s;) t[n] = e[n];
        return t[s] = u(i), Po(o, this, t);
      };
    }
    function ze(t, e) {
      return e.length < 2 ? t : st(t, u(e, 0, -1));
    }
    function Ge(t, e) {
      if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e];
    }
    function Be(t, e, n) {
      var r, i, o;
      return Hr(t, (e = (t = e + "").match(Ou), i = e ? e[1].split(xu) : [], o = n, Lo(Js, function (t) {
        var e = "_." + t[0];
        o & t[1] && !cs(i, e) && i.push(e);
      }), (n = (e = i.sort()).length) ? (e[r = n - 1] = (1 < n ? "& " : "") + e[r], e = e.join(2 < n ? ", " : " "), t.replace(Su, "{\n/* [wrapped with " + e + "] */\n")) : t));
    }
    function We(n) {
      var r = 0,
        i = 0;
      return function () {
        var t = vr(),
          e = 16 - t + +i;
        if (i = t, 0 < e) {
          if (800 <= ++r) return arguments[0];
        } else r = 0;
        return n.apply(Go, arguments);
      };
    }
    function Je(t, e) {
      var n,
        r,
        i = -1,
        o = t.length,
        s = o - 1;
      for (e = e === Go ? o : e; ++i < e;) r = t[n = Ct(i, s)], t[n] = t[i], t[i] = r;
      return t.length = e, t;
    }
    function Ve(t) {
      var e;
      return "string" == typeof t || v(t) ? t : "0" == (e = t + "") && 1 / t == -1 / 0 ? "-0" : e;
    }
    function He(t) {
      if (null != t) {
        try {
          return Kn.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    }
    function Ke(t) {
      var e;
      return t instanceof _ ? t.clone() : ((e = new g(t.__wrapped__, t.__chain__)).__actions__ = m(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e);
    }
    function Xe(t, e, n) {
      var r = null == t ? 0 : t.length;
      return r ? ((n = null == n ? 0 : P(n)) < 0 && (n = q(r + n, 0)), gs(t, l(e, 3), n)) : -1;
    }
    function Qe(t, e, n) {
      var r,
        i = null == t ? 0 : t.length;
      return i ? (r = i - 1, n !== Go && (r = P(n), r = n < 0 ? q(i + r, 0) : D(r, i - 1)), gs(t, l(e, 3), r, !0)) : -1;
    }
    function Ye(t) {
      return null != t && t.length ? a(t, 1) : [];
    }
    function Ze(t) {
      return t && t.length ? t[0] : Go;
    }
    function r(t) {
      var e = null == t ? 0 : t.length;
      return e ? t[e - 1] : Go;
    }
    function tn(t, e) {
      return t && t.length && e && e.length ? Ot(t, e) : t;
    }
    function en(t) {
      return null == t ? t : br.call(t);
    }
    function nn(e) {
      var n;
      return e && e.length ? (n = 0, e = jo(e, function (t) {
        return w(t) && (n = q(t.length, n), 1);
      }), ms(n, function (t) {
        return qo(e, Es(t));
      })) : [];
    }
    function rn(t, e) {
      return t && t.length ? (t = nn(t), null == e ? t : qo(t, function (t) {
        return Po(e, Go, t);
      })) : [];
    }
    function on(t) {
      return (t = p(t)).__chain__ = !0, t;
    }
    function sn(t, e) {
      return e(t);
    }
    function un(t, e) {
      return ($(t) ? Lo : Ur)(t, l(e, 3));
    }
    function an(t, e) {
      return ($(t) ? function (t, e) {
        for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t););
        return t;
      } : Ir)(t, l(e, 3));
    }
    function cn(t, e) {
      return ($(t) ? qo : wt)(t, l(e, 3));
    }
    function ln(t, e, n) {
      return e = n ? Go : e, e = t && null == e ? t.length : e, Ee(t, 128, Go, Go, Go, Go, e);
    }
    function hn(t, e) {
      var n;
      if ("function" != typeof e) throw new j(Vo);
      return t = P(t), function () {
        return 0 < --t && (n = e.apply(this, arguments)), t <= 1 && (e = Go), n;
      };
    }
    function fn(r, n, t) {
      function i(t) {
        var e = a,
          n = c;
        return a = c = Go, p = t, h = r.apply(n, e);
      }
      function o(t) {
        var e = t - d;
        return d === Go || n <= e || e < 0 || _ && l <= t - p;
      }
      function s() {
        var t,
          e = Ei();
        if (o(e)) return u(e);
        f = Vr(s, (t = n - (e - d), _ ? D(t, l - (e - p)) : t));
      }
      function u(t) {
        return f = Go, y && a ? i(t) : (a = c = Go, h);
      }
      function e() {
        var t = Ei(),
          e = o(t);
        if (a = arguments, c = this, d = t, e) {
          if (f === Go) return p = t = d, f = Vr(s, n), g ? i(t) : h;
          if (_) return $r(f), f = Vr(s, n), i(d);
        }
        return f === Go && (f = Vr(s, n)), h;
      }
      var a,
        c,
        l,
        h,
        f,
        d,
        p = 0,
        g = !1,
        _ = !1,
        y = !0;
      if ("function" != typeof r) throw new j(Vo);
      return n = E(n) || 0, b(t) && (g = !!t.leading, _ = "maxWait" in t, l = _ ? q(E(t.maxWait) || 0, n) : l, y = "trailing" in t ? !!t.trailing : y), e.cancel = function () {
        f !== Go && $r(f), p = 0, a = d = c = f = Go;
      }, e.flush = function () {
        return f === Go ? h : u(Ei());
      }, e;
    }
    function dn(r, i) {
      function o() {
        var t = arguments,
          e = i ? i.apply(this, t) : t[0],
          n = o.cache;
        return n.has(e) ? n.get(e) : (t = r.apply(this, t), o.cache = n.set(e, t) || n, t);
      }
      if ("function" != typeof r || null != i && "function" != typeof i) throw new j(Vo);
      return o.cache = new (dn.Cache || N)(), o;
    }
    function pn(e) {
      if ("function" != typeof e) throw new j(Vo);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    function gn(t, e) {
      return t === e || t != t && e != e;
    }
    function f(t) {
      return null != t && En(t.length) && !yn(t);
    }
    function w(t) {
      return I(t) && f(t);
    }
    function _n(t) {
      var e;
      return !!I(t) && ((e = n(t)) == Hs || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !bn(t));
    }
    function yn(t) {
      return !!b(t) && ((t = n(t)) == Ks || t == Xs || "[object AsyncFunction]" == t || "[object Proxy]" == t);
    }
    function vn(t) {
      return "number" == typeof t && t == P(t);
    }
    function En(t) {
      return "number" == typeof t && -1 < t && t % 1 == 0 && t <= Ho;
    }
    function b(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    }
    function I(t) {
      return null != t && "object" == typeof t;
    }
    function wn(t) {
      return "number" == typeof t || I(t) && n(t) == ts;
    }
    function bn(t) {
      return !(!I(t) || n(t) != es) && (null === (t = ir(t)) || "function" == typeof (t = k.call(t, "constructor") && t.constructor) && t instanceof t && Kn.call(t) == Zn);
    }
    function mn(t) {
      return "string" == typeof t || !$(t) && I(t) && n(t) == is;
    }
    function v(t) {
      return "symbol" == typeof t || I(t) && n(t) == Ys;
    }
    function Rn(t) {
      var e, n, r, i;
      if (!t) return [];
      if (f(t)) return (mn(t) ? zo : m)(t);
      if (cr && t[cr]) {
        for (n = t[cr](), r = []; !(e = n.next()).done;) r.push(e.value);
        return r;
      }
      return ((i = F(t)) == Zo ? xs : i == rs ? Ns : Nn)(t);
    }
    function Tn(t) {
      return t ? (t = E(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
    }
    function P(t) {
      var e = (t = Tn(t)) % 1;
      return t == t ? e ? t - e : t : 0;
    }
    function An(t) {
      return t ? Q(P(t), 0, Ko) : 0;
    }
    function E(t) {
      var e;
      return "number" == typeof t ? t : v(t) ? NaN : "string" != typeof (t = b(t) ? b(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e : t) ? 0 === t ? t : +t : (t = Rs(t), (e = Uu.test(t)) || ku.test(t) ? js(t.slice(2), e ? 2 : 8) : qu.test(t) ? NaN : +t);
    }
    function Sn(t) {
      return Zt(t, T(t));
    }
    function d(t) {
      return null == t ? "" : c(t);
    }
    function On(t, e, n) {
      return (t = null == t ? Go : st(t, e)) === Go ? n : t;
    }
    function xn(t, e) {
      return null != t && Le(t, e, lt);
    }
    function R(t) {
      return (f(t) ? z : vt)(t);
    }
    function T(t) {
      if (f(t)) return z(t, !0);
      var e,
        n,
        r,
        i,
        o,
        s = t;
      if (!b(s)) {
        if (i = [], null != s) for (o in S(s)) i.push(o);
        return i;
      }
      for (r in e = De(s), n = [], s) ("constructor" != r || !e && k.call(s, r)) && n.push(r);
      return n;
    }
    function Cn(t, n) {
      var e;
      return null == t ? {} : (e = qo(Se(t), function (t) {
        return [t];
      }), n = l(n), St(t, e, function (t, e) {
        return n(t, e[0]);
      }));
    }
    function Nn(t) {
      return null == t ? [] : Ts(t, R(t));
    }
    function Pn(t) {
      return ao(d(t).toLowerCase());
    }
    function Ln(t) {
      return (t = d(t)) && t.replace(Fu, Ms).replace(Gu, "");
    }
    function jn(t, e, n) {
      return t = d(t), (e = n ? Go : e) === Go ? (n = t, Wu.test(n) ? t.match(Bu) || [] : t.match(Cu) || []) : t.match(e) || [];
    }
    function qn(t) {
      return function () {
        return t;
      };
    }
    function A(t) {
      return t;
    }
    function Un(t) {
      return yt("function" == typeof t ? t : y(t, 1));
    }
    function In(r, e, t) {
      var i,
        o,
        n = R(e),
        s = ot(e, n);
      return null != t || b(e) && (s.length || !n.length) || (t = e, e = r, r = this, s = ot(e, R(e))), i = !(b(t) && "chain" in t && !t.chain), o = yn(r), Lo(s, function (t) {
        var n = e[t];
        r[t] = n, o && (r.prototype[t] = function () {
          var t,
            e = this.__chain__;
          return i || e ? (((t = r(this.__wrapped__)).__actions__ = m(this.__actions__)).push({
            func: n,
            args: arguments,
            thisArg: r
          }), t.__chain__ = e, t) : n.apply(r, Uo([this.value()], arguments));
        });
      }), r;
    }
    function kn() {}
    function Dn(t) {
      return Ie(t) ? Es(Ve(t)) : (e = t, function (t) {
        return st(t, e);
      });
      var e;
    }
    function Fn() {
      return [];
    }
    function $n() {
      return !1;
    }
    function Mn() {}
    var L, zn, Gn, Bn, S, Wn, Jn, j, Vn, Hn, Kn, k, Xn, Qn, Yn, Zn, tr, er, nr, rr, ir, or, sr, ur, ar, cr, lr, hr, fr, dr, pr, gr, _r, yr, q, D, vr, Er, wr, br, mr, Rr, Tr, Ar, Sr, Or, xr, Cr, Nr, Pr, Lr, jr, qr, Ur, Ir, kr, Dr, Fr, $r, Mr, zr, Gr, Br, F, Wr, Jr, Vr, Hr, Kr, Xr, Qr, Yr, Zr, e, ti, ei, ni, ri, ii, oi, si, ui, ai, ci, li, hi, fi, di, pi, gi, _i, yi, vi, Ei, wi, bi, mi, Ri, Ti, Ai, Si, Oi, xi, Ci, Ni, $, Pi, Li, ji, qi, Ui, Ii, ki, Di, Fi, $i, Mi, zi, Gi, Bi, Wi, Ji, Vi, Hi, Ki, Xi, Qi, Yi, Zi, to, eo, no, ro, io, oo, so, uo, ao, co, lo, ho, fo, po, go, _o, yo, vo, Eo, wo, bo, mo, Ro, To, Ao, So, Oo, i, xo, Co, No;
    return t = null == t ? Wo : Jo.defaults(Wo.Object(), t, Jo.pick(Wo, Ju)), L = t.Array, Xr = t.Date, zn = t.Error, Gn = t.Function, Bn = t.Math, S = t.Object, Wn = t.RegExp, Jn = t.String, j = t.TypeError, Vn = L.prototype, i = Gn.prototype, Hn = S.prototype, Yr = t["__core-js_shared__"], Kn = i.toString, k = Hn.hasOwnProperty, Xn = 0, i = /[^.]+$/.exec(Yr && Yr.keys && Yr.keys.IE_PROTO || ""), Qn = i ? "Symbol(src)_1." + i : "", Yn = Hn.toString, Zn = Kn.call(S), tr = Wo._, er = Wn("^" + Kn.call(k).replace(Ru, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), i = qs ? t.Buffer : Go, e = t.Symbol, nr = t.Uint8Array, rr = i ? i.allocUnsafe : Go, ir = Cs(S.getPrototypeOf, S), or = S.create, sr = Hn.propertyIsEnumerable, ur = Vn.splice, ar = e ? e.isConcatSpreadable : Go, cr = e ? e.iterator : Go, lr = e ? e.toStringTag : Go, hr = function () {
      try {
        var t = Pe(S, "defineProperty");
        return t({}, "", {}), t;
      } catch (t) {}
    }(), xo = t.clearTimeout !== Wo.clearTimeout && t.clearTimeout, mi = Xr && Xr.now !== Wo.Date.now && Xr.now, Zr = t.setTimeout !== Wo.setTimeout && t.setTimeout, fr = Bn.ceil, dr = Bn.floor, pr = S.getOwnPropertySymbols, i = i ? i.isBuffer : Go, gr = t.isFinite, _r = Vn.join, yr = Cs(S.keys, S), q = Bn.max, D = Bn.min, vr = Xr.now, Er = t.parseInt, wr = Bn.random, br = Vn.reverse, Xr = Pe(t, "DataView"), mr = Pe(t, "Map"), Qr = Pe(t, "Promise"), Rr = Pe(t, "Set"), t = Pe(t, "WeakMap"), Tr = Pe(S, "create"), Ar = t && new t(), Sr = {}, Or = He(Xr), xr = He(mr), Cr = He(Qr), Nr = He(Rr), Pr = He(t), e = e ? e.prototype : Go, Lr = e ? e.valueOf : Go, jr = e ? e.toString : Go, qr = function (t) {
      return b(t) ? or ? or(t) : (Mn.prototype = t, t = new Mn(), Mn.prototype = Go, t) : {};
    }, p.templateSettings = {
      escape: yu,
      evaluate: vu,
      interpolate: Eu,
      variable: "",
      imports: {
        _: p
      }
    }, (p.prototype = O.prototype).constructor = p, (g.prototype = qr(O.prototype)).constructor = g, (_.prototype = qr(O.prototype)).constructor = _, x.prototype.clear = function () {
      this.__data__ = Tr ? Tr(null) : {}, this.size = 0;
    }, x.prototype.delete = function (t) {
      return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t;
    }, x.prototype.get = function (t) {
      var e,
        n = this.__data__;
      return Tr ? (e = n[t]) === Bs ? Go : e : k.call(n, t) ? n[t] : Go;
    }, x.prototype.has = function (t) {
      var e = this.__data__;
      return Tr ? e[t] !== Go : k.call(e, t);
    }, x.prototype.set = function (t, e) {
      var n = this.__data__;
      return this.size += this.has(t) ? 0 : 1, n[t] = Tr && e === Go ? Bs : e, this;
    }, C.prototype.clear = function () {
      this.__data__ = [], this.size = 0;
    }, C.prototype.delete = function (t) {
      var e = this.__data__;
      return !((t = J(e, t)) < 0 || (t == e.length - 1 ? e.pop() : ur.call(e, t, 1), --this.size, 0));
    }, C.prototype.get = function (t) {
      var e = this.__data__;
      return (t = J(e, t)) < 0 ? Go : e[t][1];
    }, C.prototype.has = function (t) {
      return -1 < J(this.__data__, t);
    }, C.prototype.set = function (t, e) {
      var n = this.__data__,
        r = J(n, t);
      return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
    }, N.prototype.clear = function () {
      this.size = 0, this.__data__ = {
        hash: new x(),
        map: new (mr || C)(),
        string: new x()
      };
    }, N.prototype.delete = function (t) {
      return t = Ce(this, t).delete(t), this.size -= t ? 1 : 0, t;
    }, N.prototype.get = function (t) {
      return Ce(this, t).get(t);
    }, N.prototype.has = function (t) {
      return Ce(this, t).has(t);
    }, N.prototype.set = function (t, e) {
      var n = Ce(this, t),
        r = n.size;
      return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
    }, M.prototype.add = M.prototype.push = function (t) {
      return this.__data__.set(t, Bs), this;
    }, M.prototype.has = function (t) {
      return this.__data__.has(t);
    }, U.prototype.clear = function () {
      this.__data__ = new C(), this.size = 0;
    }, U.prototype.delete = function (t) {
      var e = this.__data__,
        t = e.delete(t);
      return this.size = e.size, t;
    }, U.prototype.get = function (t) {
      return this.__data__.get(t);
    }, U.prototype.has = function (t) {
      return this.__data__.has(t);
    }, U.prototype.set = function (t, e) {
      var n,
        r = this.__data__;
      if (r instanceof C) {
        if (n = r.__data__, !mr || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
        r = this.__data__ = new N(n);
      }
      return r.set(t, e), this.size = r.size, this;
    }, Ur = ne(rt), Ir = ne(it, !0), kr = re(), Dr = re(!0), Fr = Ar ? function (t, e) {
      return Ar.set(t, e), t;
    } : A, e = hr ? function (t, e) {
      return hr(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: qn(e),
        writable: !0
      });
    } : A, Ti = s, $r = xo || function (t) {
      return Wo.clearTimeout(t);
    }, Mr = Rr && 1 / Ns(new Rr([, -0]))[1] == 1 / 0 ? function (t) {
      return new Rr(t);
    } : kn, zr = Ar ? function (t) {
      return Ar.get(t);
    } : kn, Gr = pr ? function (e) {
      return null == e ? [] : (e = S(e), jo(pr(e), function (t) {
        return sr.call(e, t);
      }));
    } : Fn, Br = pr ? function (t) {
      for (var e = []; t;) Uo(e, Gr(t)), t = ir(t);
      return e;
    } : Fn, F = n, (Xr && F(new Xr(new ArrayBuffer(1))) != os || mr && F(new mr()) != Zo || Qr && F(Qr.resolve()) != Qs || Rr && F(new Rr()) != rs || t && F(new t()) != Zs) && (F = function (t) {
      var e = n(t);
      if (t = (t = e == es ? t.constructor : Go) ? He(t) : "") switch (t) {
        case Or:
          return os;
        case xr:
          return Zo;
        case Cr:
          return Qs;
        case Nr:
          return rs;
        case Pr:
          return Zs;
      }
      return e;
    }), Wr = Yr ? yn : $n, Jr = We(Fr), Vr = Zr || function (t, e) {
      return Wo.setTimeout(t, e);
    }, Hr = We(e), Co = (xo = dn(function (t) {
      var i = [];
      return 46 === t.charCodeAt(0) && i.push(""), t.replace(mu, function (t, e, n, r) {
        i.push(n ? r.replace(Pu, "$1") : e || t);
      }), i;
    }, function (t) {
      return 500 === Co.size && Co.clear(), t;
    })).cache, Kr = xo, Xr = s(function (t, e) {
      return w(t) ? tt(t, a(e, 1, w, !0)) : [];
    }), Qr = s(function (t, e) {
      var n = r(e);
      return w(n) && (n = Go), w(t) ? tt(t, a(e, 1, w, !0), l(n, 2)) : [];
    }), t = s(function (t, e) {
      var n = r(e);
      return w(n) && (n = Go), w(t) ? tt(t, a(e, 1, w, !0), Go, n) : [];
    }), Yr = s(function (t) {
      var e = qo(t, Gt);
      return e.length && e[0] === t[0] ? ht(e) : [];
    }), Zr = s(function (t) {
      var e = r(t),
        n = qo(t, Gt);
      return e === r(n) ? e = Go : n.pop(), n.length && n[0] === t[0] ? ht(n, l(e, 2)) : [];
    }), e = s(function (t) {
      var e = r(t),
        n = qo(t, Gt);
      return (e = "function" == typeof e ? e : Go) && n.pop(), n.length && n[0] === t[0] ? ht(n, Go, e) : [];
    }), xo = s(tn), ti = Te(function (t, e) {
      var n = null == t ? 0 : t.length,
        r = X(t, e);
      return xt(t, qo(e, function (t) {
        return Ue(t, n) ? +t : t;
      }).sort(Xt)), r;
    }), ei = s(function (t) {
      return It(a(t, 1, w, !0));
    }), ni = s(function (t) {
      var e = r(t);
      return w(e) && (e = Go), It(a(t, 1, w, !0), l(e, 2));
    }), ri = s(function (t) {
      var e = "function" == typeof (e = r(t)) ? e : Go;
      return It(a(t, 1, w, !0), Go, e);
    }), ii = s(function (t, e) {
      return w(t) ? tt(t, e) : [];
    }), oi = s(function (t) {
      return Mt(jo(t, w));
    }), si = s(function (t) {
      var e = r(t);
      return w(e) && (e = Go), Mt(jo(t, w), l(e, 2));
    }), ui = s(function (t) {
      var e = "function" == typeof (e = r(t)) ? e : Go;
      return Mt(jo(t, w), Go, e);
    }), ai = s(nn), ci = s(function (t) {
      var e = "function" == typeof (e = 1 < (e = t.length) ? t[e - 1] : Go) ? (t.pop(), e) : Go;
      return rn(t, e);
    }), li = Te(function (e) {
      function t(t) {
        return X(t, e);
      }
      var n = e.length,
        r = n ? e[0] : 0,
        i = this.__wrapped__;
      return !(1 < n || this.__actions__.length) && i instanceof _ && Ue(r) ? ((i = i.slice(r, +r + (n ? 1 : 0))).__actions__.push({
        func: sn,
        args: [t],
        thisArg: Go
      }), new g(i, this.__chain__).thru(function (t) {
        return n && !t.length && t.push(Go), t;
      })) : this.thru(t);
    }), hi = te(function (t, e, n) {
      k.call(t, n) ? ++t[n] : K(t, n, 1);
    }), fi = ue(Xe), di = ue(Qe), pi = te(function (t, e, n) {
      k.call(t, n) ? t[n].push(e) : K(t, n, [e]);
    }), gi = s(function (t, e, n) {
      var r = -1,
        i = "function" == typeof e,
        o = f(t) ? L(t.length) : [];
      return Ur(t, function (t) {
        o[++r] = i ? Po(e, t, n) : ft(t, e, n);
      }), o;
    }), _i = te(function (t, e, n) {
      K(t, n, e);
    }), yi = te(function (t, e, n) {
      t[n ? 0 : 1].push(e);
    }, function () {
      return [[], []];
    }), vi = s(function (t, e) {
      var n;
      return null == t ? [] : (1 < (n = e.length) && h(t, e[0], e[1]) ? e = [] : 2 < n && h(e[0], e[1], e[2]) && (e = [e[0]]), At(t, a(e, 1), []));
    }), Ei = mi || function () {
      return Wo.Date.now();
    }, wi = s(function (t, e, n) {
      var r,
        i = 1;
      return n.length && (r = $o(n, xe(wi)), i |= 32), Ee(t, i, e, n, r);
    }), bi = s(function (t, e, n) {
      var r,
        i = 3;
      return n.length && (r = $o(n, xe(bi)), i |= 32), Ee(e, i, t, n, r);
    }), mi = s(function (t, e) {
      return Z(t, 1, e);
    }), Ri = s(function (t, e, n) {
      return Z(t, E(e) || 0, n);
    }), dn.Cache = N, Ti = Ti(function (r, i) {
      var o = (i = 1 == i.length && $(i[0]) ? qo(i[0], ko(l())) : qo(a(i, 1), ko(l()))).length;
      return s(function (t) {
        for (var e = -1, n = D(t.length, o); ++e < n;) t[e] = i[e].call(this, t[e]);
        return Po(r, this, t);
      });
    }), Ai = s(function (t, e) {
      var n = $o(e, xe(Ai));
      return Ee(t, 32, Go, e, n);
    }), Si = s(function (t, e) {
      var n = $o(e, xe(Si));
      return Ee(t, 64, Go, e, n);
    }), Oi = Te(function (t, e) {
      return Ee(t, 256, Go, Go, Go, e);
    }), xi = ge(at), Ci = ge(function (t, e) {
      return e <= t;
    }), Ni = dt(function () {
      return arguments;
    }()) ? dt : function (t) {
      return I(t) && k.call(t, "callee") && !sr.call(t, "callee");
    }, $ = L.isArray, Pi = Us ? ko(Us) : function (t) {
      return I(t) && n(t) == tu;
    }, Li = i || $n, i = Is ? ko(Is) : function (t) {
      return I(t) && n(t) == Yo;
    }, ji = ks ? ko(ks) : function (t) {
      return I(t) && F(t) == Zo;
    }, qi = Ds ? ko(Ds) : function (t) {
      return I(t) && n(t) == ns;
    }, Ui = Fs ? ko(Fs) : function (t) {
      return I(t) && F(t) == rs;
    }, Ii = $s ? ko($s) : function (t) {
      return I(t) && En(t.length) && !!ss[n(t)];
    }, ki = ge(Et), Di = ge(function (t, e) {
      return t <= e;
    }), Fi = ee(function (t, e) {
      if (De(e) || f(e)) Zt(e, R(e), t);else for (var n in e) k.call(e, n) && W(t, n, e[n]);
    }), $i = ee(function (t, e) {
      Zt(e, T(e), t);
    }), Mi = ee(function (t, e, n, r) {
      Zt(e, T(e), t, r);
    }), zi = ee(function (t, e, n, r) {
      Zt(e, R(e), t, r);
    }), Gi = Te(X), Bi = s(function (t, e) {
      var n, r, i, o, s, u, a, c, l;
      for (t = S(t), n = -1, (i = 2 < (r = e.length) ? e[2] : Go) && h(e[0], e[1], i) && (r = 1); ++n < r;) for (u = -1, a = (s = T(o = e[n])).length; ++u < a;) ((l = t[c = s[u]]) === Go || gn(l, Hn[c]) && !k.call(t, c)) && (t[c] = o[c]);
      return t;
    }), Wi = s(function (t) {
      return t.push(Go, be), Po(Xi, Go, t);
    }), Ji = le(function (t, e, n) {
      t[e = null != e && "function" != typeof e.toString ? Yn.call(e) : e] = n;
    }, qn(A)), Vi = le(function (t, e, n) {
      null != e && "function" != typeof e.toString && (e = Yn.call(e)), k.call(t, e) ? t[e].push(n) : t[e] = [n];
    }, l), Hi = s(ft), Ki = ee(function (t, e, n) {
      Rt(t, e, n);
    }), Xi = ee(function (t, e, n, r) {
      Rt(t, e, n, r);
    }), Qi = Te(function (e, t) {
      var n,
        r,
        i = {};
      if (null != e) for (n = !1, t = qo(t, function (t) {
        return t = Wt(t, e), n = n || 1 < t.length, t;
      }), Zt(e, Se(e), i), n && (i = y(i, 7, me)), r = t.length; r--;) kt(i, t[r]);
      return i;
    }), Yi = Te(function (t, e) {
      return null == t ? {} : St(n = t, e, function (t, e) {
        return xn(n, e);
      });
      var n;
    }), Zi = ve(R), to = ve(T), eo = oe(function (t, e, n) {
      return e = e.toLowerCase(), t + (n ? Pn(e) : e);
    }), no = oe(function (t, e, n) {
      return t + (n ? "-" : "") + e.toLowerCase();
    }), ro = oe(function (t, e, n) {
      return t + (n ? " " : "") + e.toLowerCase();
    }), io = ie("toLowerCase"), oo = oe(function (t, e, n) {
      return t + (n ? "_" : "") + e.toLowerCase();
    }), so = oe(function (t, e, n) {
      return t + (n ? " " : "") + ao(e);
    }), uo = oe(function (t, e, n) {
      return t + (n ? " " : "") + e.toUpperCase();
    }), ao = ie("toUpperCase"), co = s(function (t, e) {
      try {
        return Po(t, Go, e);
      } catch (t) {
        return _n(t) ? t : new zn(t);
      }
    }), lo = Te(function (e, t) {
      return Lo(t, function (t) {
        t = Ve(t), K(e, t, wi(e[t], e));
      }), e;
    }), ho = ae(), fo = ae(!0), po = s(function (e, n) {
      return function (t) {
        return ft(t, e, n);
      };
    }), go = s(function (e, n) {
      return function (t) {
        return ft(e, t, n);
      };
    }), _o = fe(qo), yo = fe(as), vo = fe(ds), Eo = pe(), wo = pe(!0), bo = he(function (t, e) {
      return t + e;
    }, 0), mo = ye("ceil"), Ro = he(function (t, e) {
      return t / e;
    }, 1), To = ye("floor"), Ao = he(function (t, e) {
      return t * e;
    }, 1), So = ye("round"), Oo = he(function (t, e) {
      return t - e;
    }, 0), p.after = function (t, e) {
      if ("function" != typeof e) throw new j(Vo);
      return t = P(t), function () {
        if (--t < 1) return e.apply(this, arguments);
      };
    }, p.ary = ln, p.assign = Fi, p.assignIn = $i, p.assignInWith = Mi, p.assignWith = zi, p.at = Gi, p.before = hn, p.bind = wi, p.bindAll = lo, p.bindKey = bi, p.castArray = function () {
      var t;
      return arguments.length ? $(t = arguments[0]) ? t : [t] : [];
    }, p.chain = on, p.chunk = function (t, e, n) {
      var r, i, o, s;
      if (e = (n ? h(t, e, n) : e === Go) ? 1 : q(P(e), 0), !(r = null == t ? 0 : t.length) || e < 1) return [];
      for (o = i = 0, s = L(fr(r / e)); i < r;) s[o++] = u(t, i, i += e);
      return s;
    }, p.compact = function (t) {
      for (var e, n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) (e = t[n]) && (o[i++] = e);
      return o;
    }, p.concat = function () {
      var t,
        e,
        n,
        r = arguments.length;
      if (!r) return [];
      for (t = L(r - 1), e = arguments[0], n = r; n--;) t[n - 1] = arguments[n];
      return Uo($(e) ? m(e) : [e], a(t, 1));
    }, p.cond = function (r) {
      var i = null == r ? 0 : r.length,
        e = l();
      return r = i ? qo(r, function (t) {
        if ("function" != typeof t[1]) throw new j(Vo);
        return [e(t[0]), t[1]];
      }) : [], s(function (t) {
        for (var e, n = -1; ++n < i;) if (Po((e = r[n])[0], this, t)) return Po(e[1], this, t);
      });
    }, p.conforms = function (t) {
      return e = y(t, 1), n = R(e), function (t) {
        return Y(t, e, n);
      };
      var e, n;
    }, p.constant = qn, p.countBy = hi, p.create = function (t, e) {
      return t = qr(t), null == e ? t : H(t, e);
    }, p.curry = function t(e, n, r) {
      return (e = Ee(e, 8, Go, Go, Go, Go, Go, n = r ? Go : n)).placeholder = t.placeholder, e;
    }, p.curryRight = function t(e, n, r) {
      return (e = Ee(e, 16, Go, Go, Go, Go, Go, n = r ? Go : n)).placeholder = t.placeholder, e;
    }, p.debounce = fn, p.defaults = Bi, p.defaultsDeep = Wi, p.defer = mi, p.delay = Ri, p.difference = Xr, p.differenceBy = Qr, p.differenceWith = t, p.drop = function (t, e, n) {
      var r = null == t ? 0 : t.length;
      return r ? u(t, (e = n || e === Go ? 1 : P(e)) < 0 ? 0 : e, r) : [];
    }, p.dropRight = function (t, e, n) {
      var r = null == t ? 0 : t.length;
      return r ? u(t, 0, (e = r - (n || e === Go ? 1 : P(e))) < 0 ? 0 : e) : [];
    }, p.dropRightWhile = function (t, e) {
      return t && t.length ? Ft(t, l(e, 3), !0, !0) : [];
    }, p.dropWhile = function (t, e) {
      return t && t.length ? Ft(t, l(e, 3), !0) : [];
    }, p.fill = function (t, e, n, r) {
      var i,
        o,
        s,
        u,
        a = null == t ? 0 : t.length;
      if (!a) return [];
      for (n && "number" != typeof n && h(t, e, n) && (n = 0, r = a), o = e, s = n, u = r, a = (i = t).length, (s = P(s)) < 0 && (s = a < -s ? 0 : a + s), (u = u === Go || a < u ? a : P(u)) < 0 && (u += a), u = u < s ? 0 : An(u); s < u;) i[s++] = o;
      return i;
    }, p.filter = function (t, e) {
      return ($(t) ? jo : nt)(t, l(e, 3));
    }, p.flatMap = function (t, e) {
      return a(cn(t, e), 1);
    }, p.flatMapDeep = function (t, e) {
      return a(cn(t, e), 1 / 0);
    }, p.flatMapDepth = function (t, e, n) {
      return n = n === Go ? 1 : P(n), a(cn(t, e), n);
    }, p.flatten = Ye, p.flattenDeep = function (t) {
      return null != t && t.length ? a(t, 1 / 0) : [];
    }, p.flattenDepth = function (t, e) {
      return null != t && t.length ? a(t, e = e === Go ? 1 : P(e)) : [];
    }, p.flip = function (t) {
      return Ee(t, 512);
    }, p.flow = ho, p.flowRight = fo, p.fromPairs = function (t) {
      for (var e, n = -1, r = null == t ? 0 : t.length, i = {}; ++n < r;) i[(e = t[n])[0]] = e[1];
      return i;
    }, p.functions = function (t) {
      return null == t ? [] : ot(t, R(t));
    }, p.functionsIn = function (t) {
      return null == t ? [] : ot(t, T(t));
    }, p.groupBy = pi, p.initial = function (t) {
      return null != t && t.length ? u(t, 0, -1) : [];
    }, p.intersection = Yr, p.intersectionBy = Zr, p.intersectionWith = e, p.invert = Ji, p.invertBy = Vi, p.invokeMap = gi, p.iteratee = Un, p.keyBy = _i, p.keys = R, p.keysIn = T, p.map = cn, p.mapKeys = function (t, r) {
      var i = {};
      return r = l(r, 3), rt(t, function (t, e, n) {
        K(i, r(t, e, n), t);
      }), i;
    }, p.mapValues = function (t, r) {
      var i = {};
      return r = l(r, 3), rt(t, function (t, e, n) {
        K(i, e, r(t, e, n));
      }), i;
    }, p.matches = function (t) {
      return bt(y(t, 1));
    }, p.matchesProperty = function (t, e) {
      return mt(t, y(e, 1));
    }, p.memoize = dn, p.merge = Ki, p.mergeWith = Xi, p.method = po, p.methodOf = go, p.mixin = In, p.negate = pn, p.nthArg = function (e) {
      return e = P(e), s(function (t) {
        return Tt(t, e);
      });
    }, p.omit = Qi, p.omitBy = function (t, e) {
      return Cn(t, pn(l(e)));
    }, p.once = function (t) {
      return hn(2, t);
    }, p.orderBy = function (t, e, n, r) {
      return null == t ? [] : At(t, e = $(e) ? e : null == e ? [] : [e], n = $(n = r ? Go : n) ? n : null == n ? [] : [n]);
    }, p.over = _o, p.overArgs = Ti, p.overEvery = yo, p.overSome = vo, p.partial = Ai, p.partialRight = Si, p.partition = yi, p.pick = Yi, p.pickBy = Cn, p.property = Dn, p.propertyOf = function (e) {
      return function (t) {
        return null == e ? Go : st(e, t);
      };
    }, p.pull = xo, p.pullAll = tn, p.pullAllBy = function (t, e, n) {
      return t && t.length && e && e.length ? Ot(t, e, l(n, 2)) : t;
    }, p.pullAllWith = function (t, e, n) {
      return t && t.length && e && e.length ? Ot(t, e, Go, n) : t;
    }, p.pullAt = ti, p.range = Eo, p.rangeRight = wo, p.rearg = Oi, p.reject = function (t, e) {
      return ($(t) ? jo : nt)(t, pn(l(e, 3)));
    }, p.remove = function (t, e) {
      var n,
        r,
        i,
        o,
        s = [];
      if (t && t.length) {
        for (n = -1, r = [], i = t.length, e = l(e, 3); ++n < i;) e(o = t[n], n, t) && (s.push(o), r.push(n));
        xt(t, r);
      }
      return s;
    }, p.rest = function (t, e) {
      if ("function" != typeof t) throw new j(Vo);
      return s(t, e = e === Go ? e : P(e));
    }, p.reverse = en, p.sampleSize = function (t, e, n) {
      return e = (n ? h(t, e, n) : e === Go) ? 1 : P(e), ($(t) ? function (t, e) {
        return Je(m(t), Q(e, 0, t.length));
      } : function (t, e) {
        return Je(t = Nn(t), Q(e, 0, t.length));
      })(t, e);
    }, p.set = function (t, e, n) {
      return null == t ? t : Pt(t, e, n);
    }, p.setWith = function (t, e, n, r) {
      return r = "function" == typeof r ? r : Go, null == t ? t : Pt(t, e, n, r);
    }, p.shuffle = function (t) {
      return ($(t) ? function (t) {
        return Je(m(t));
      } : function (t) {
        return Je(Nn(t));
      })(t);
    }, p.slice = function (t, e, n) {
      var r = null == t ? 0 : t.length;
      return r ? (n = n && "number" != typeof n && h(t, e, n) ? (e = 0, r) : (e = null == e ? 0 : P(e), n === Go ? r : P(n)), u(t, e, n)) : [];
    }, p.sortBy = vi, p.sortedUniq = function (t) {
      return t && t.length ? qt(t) : [];
    }, p.sortedUniqBy = function (t, e) {
      return t && t.length ? qt(t, l(e, 2)) : [];
    }, p.split = function (t, e, n) {
      return n && "number" != typeof n && h(t, e, n) && (e = n = Go), (n = n === Go ? Ko : n >>> 0) ? (t = d(t)) && ("string" == typeof e || null != e && !qi(e)) && !(e = c(e)) && Fo(t) ? Jt(zo(t), 0, n) : t.split(e, n) : [];
    }, p.spread = function (n, r) {
      if ("function" != typeof n) throw new j(Vo);
      return r = null == r ? 0 : q(P(r), 0), s(function (t) {
        var e = t[r],
          t = Jt(t, 0, r);
        return e && Uo(t, e), Po(n, this, t);
      });
    }, p.tail = function (t) {
      var e = null == t ? 0 : t.length;
      return e ? u(t, 1, e) : [];
    }, p.take = function (t, e, n) {
      return t && t.length ? u(t, 0, (e = n || e === Go ? 1 : P(e)) < 0 ? 0 : e) : [];
    }, p.takeRight = function (t, e, n) {
      var r = null == t ? 0 : t.length;
      return r ? u(t, (e = r - (n || e === Go ? 1 : P(e))) < 0 ? 0 : e, r) : [];
    }, p.takeRightWhile = function (t, e) {
      return t && t.length ? Ft(t, l(e, 3), !1, !0) : [];
    }, p.takeWhile = function (t, e) {
      return t && t.length ? Ft(t, l(e, 3)) : [];
    }, p.tap = function (t, e) {
      return e(t), t;
    }, p.throttle = function (t, e, n) {
      var r = !0,
        i = !0;
      if ("function" != typeof t) throw new j(Vo);
      return b(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), fn(t, e, {
        leading: r,
        maxWait: e,
        trailing: i
      });
    }, p.thru = sn, p.toArray = Rn, p.toPairs = Zi, p.toPairsIn = to, p.toPath = function (t) {
      return $(t) ? qo(t, Ve) : v(t) ? [t] : m(Kr(d(t)));
    }, p.toPlainObject = Sn, p.transform = function (t, r, i) {
      var e,
        n = $(t),
        o = n || Li(t) || Ii(t);
      return r = l(r, 4), null == i && (e = t && t.constructor, i = o ? n ? new e() : [] : b(t) && yn(e) ? qr(ir(t)) : {}), (o ? Lo : rt)(t, function (t, e, n) {
        return r(i, t, e, n);
      }), i;
    }, p.unary = function (t) {
      return ln(t, 1);
    }, p.union = ei, p.unionBy = ni, p.unionWith = ri, p.uniq = function (t) {
      return t && t.length ? It(t) : [];
    }, p.uniqBy = function (t, e) {
      return t && t.length ? It(t, l(e, 2)) : [];
    }, p.uniqWith = function (t, e) {
      return e = "function" == typeof e ? e : Go, t && t.length ? It(t, Go, e) : [];
    }, p.unset = function (t, e) {
      return null == t || kt(t, e);
    }, p.unzip = nn, p.unzipWith = rn, p.update = function (t, e, n) {
      return null == t ? t : Dt(t, e, Bt(n));
    }, p.updateWith = function (t, e, n, r) {
      return r = "function" == typeof r ? r : Go, null == t ? t : Dt(t, e, Bt(n), r);
    }, p.values = Nn, p.valuesIn = function (t) {
      return null == t ? [] : Ts(t, T(t));
    }, p.without = ii, p.words = jn, p.wrap = function (t, e) {
      return Ai(Bt(e), t);
    }, p.xor = oi, p.xorBy = si, p.xorWith = ui, p.zip = ai, p.zipObject = function (t, e) {
      return zt(t || [], e || [], W);
    }, p.zipObjectDeep = function (t, e) {
      return zt(t || [], e || [], Pt);
    }, p.zipWith = ci, p.entries = Zi, p.entriesIn = to, p.extend = $i, p.extendWith = Mi, In(p, p), p.add = bo, p.attempt = co, p.camelCase = eo, p.capitalize = Pn, p.ceil = mo, p.clamp = function (t, e, n) {
      return n === Go && (n = e, e = Go), n !== Go && (n = (n = E(n)) == n ? n : 0), e !== Go && (e = (e = E(e)) == e ? e : 0), Q(E(t), e, n);
    }, p.clone = function (t) {
      return y(t, 4);
    }, p.cloneDeep = function (t) {
      return y(t, 5);
    }, p.cloneDeepWith = function (t, e) {
      return y(t, 5, e = "function" == typeof e ? e : Go);
    }, p.cloneWith = function (t, e) {
      return y(t, 4, e = "function" == typeof e ? e : Go);
    }, p.conformsTo = function (t, e) {
      return null == e || Y(t, e, R(e));
    }, p.deburr = Ln, p.defaultTo = function (t, e) {
      return null == t || t != t ? e : t;
    }, p.divide = Ro, p.endsWith = function (t, e, n) {
      var r;
      return t = d(t), e = c(e), r = t.length, r = n = n === Go ? r : Q(P(n), 0, r), 0 <= (n -= e.length) && t.slice(n, r) == e;
    }, p.eq = gn, p.escape = function (t) {
      return (t = d(t)) && _u.test(t) ? t.replace(pu, zs) : t;
    }, p.escapeRegExp = function (t) {
      return (t = d(t)) && Tu.test(t) ? t.replace(Ru, "\\$&") : t;
    }, p.every = function (t, e, n) {
      return ($(t) ? as : function (t, r) {
        var i = !0;
        return Ur(t, function (t, e, n) {
          return i = !!r(t, e, n);
        }), i;
      })(t, l(e = n && h(t, e, n) ? Go : e, 3));
    }, p.find = fi, p.findIndex = Xe, p.findKey = function (t, e) {
      return ps(t, l(e, 3), rt);
    }, p.findLast = di, p.findLastIndex = Qe, p.findLastKey = function (t, e) {
      return ps(t, l(e, 3), it);
    }, p.floor = To, p.forEach = un, p.forEachRight = an, p.forIn = function (t, e) {
      return null == t ? t : kr(t, l(e, 3), T);
    }, p.forInRight = function (t, e) {
      return null == t ? t : Dr(t, l(e, 3), T);
    }, p.forOwn = function (t, e) {
      return t && rt(t, l(e, 3));
    }, p.forOwnRight = function (t, e) {
      return t && it(t, l(e, 3));
    }, p.get = On, p.gt = xi, p.gte = Ci, p.has = function (t, e) {
      return null != t && Le(t, e, ct);
    }, p.hasIn = xn, p.head = Ze, p.identity = A, p.includes = function (t, e, n, r) {
      return t = f(t) ? t : Nn(t), n = n && !r ? P(n) : 0, r = t.length, n < 0 && (n = q(r + n, 0)), mn(t) ? n <= r && -1 < t.indexOf(e, n) : !!r && -1 < Io(t, e, n);
    }, p.indexOf = function (t, e, n) {
      var r = null == t ? 0 : t.length;
      return r ? Io(t, e, (t = null == n ? 0 : P(n)) < 0 ? q(r + t, 0) : t) : -1;
    }, p.inRange = function (t, e, n) {
      return e = Tn(e), n === Go ? (n = e, e = 0) : n = Tn(n), (t = E(t)) >= D(e, n) && t < q(e, n);
    }, p.invoke = Hi, p.isArguments = Ni, p.isArray = $, p.isArrayBuffer = Pi, p.isArrayLike = f, p.isArrayLikeObject = w, p.isBoolean = function (t) {
      return !0 === t || !1 === t || I(t) && n(t) == Qo;
    }, p.isBuffer = Li, p.isDate = i, p.isElement = function (t) {
      return I(t) && 1 === t.nodeType && !bn(t);
    }, p.isEmpty = function (t) {
      var e, n;
      if (null != t) {
        if (f(t) && ($(t) || "string" == typeof t || "function" == typeof t.splice || Li(t) || Ii(t) || Ni(t))) return !t.length;
        if ((e = F(t)) == Zo || e == rs) return !t.size;
        if (De(t)) return !vt(t).length;
        for (n in t) if (k.call(t, n)) return !1;
      }
      return !0;
    }, p.isEqual = function (t, e) {
      return pt(t, e);
    }, p.isEqualWith = function (t, e, n) {
      var r = (n = "function" == typeof n ? n : Go) ? n(t, e) : Go;
      return r === Go ? pt(t, e, Go, n) : !!r;
    }, p.isError = _n, p.isFinite = function (t) {
      return "number" == typeof t && gr(t);
    }, p.isFunction = yn, p.isInteger = vn, p.isLength = En, p.isMap = ji, p.isMatch = function (t, e) {
      return t === e || gt(t, e, Ne(e));
    }, p.isMatchWith = function (t, e, n) {
      return n = "function" == typeof n ? n : Go, gt(t, e, Ne(e), n);
    }, p.isNaN = function (t) {
      return wn(t) && t != +t;
    }, p.isNative = function (t) {
      if (Wr(t)) throw new zn("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
      return _t(t);
    }, p.isNil = function (t) {
      return null == t;
    }, p.isNull = function (t) {
      return null === t;
    }, p.isNumber = wn, p.isObject = b, p.isObjectLike = I, p.isPlainObject = bn, p.isRegExp = qi, p.isSafeInteger = function (t) {
      return vn(t) && -Ho <= t && t <= Ho;
    }, p.isSet = Ui, p.isString = mn, p.isSymbol = v, p.isTypedArray = Ii, p.isUndefined = function (t) {
      return t === Go;
    }, p.isWeakMap = function (t) {
      return I(t) && F(t) == Zs;
    }, p.isWeakSet = function (t) {
      return I(t) && "[object WeakSet]" == n(t);
    }, p.join = function (t, e) {
      return null == t ? "" : _r.call(t, e);
    }, p.kebabCase = no, p.last = r, p.lastIndexOf = function (t, e, n) {
      var r,
        i,
        o,
        s,
        u = null == t ? 0 : t.length;
      if (!u) return -1;
      if (r = u, n !== Go && (r = (r = P(n)) < 0 ? q(u + r, 0) : D(r, u - 1)), e != e) return gs(t, ys, r, !0);
      for (i = t, o = e, s = r + 1; s--;) if (i[s] === o) return s;
      return s;
    }, p.lowerCase = ro, p.lowerFirst = io, p.lt = ki, p.lte = Di, p.max = function (t) {
      return t && t.length ? et(t, A, at) : Go;
    }, p.maxBy = function (t, e) {
      return t && t.length ? et(t, l(e, 2), at) : Go;
    }, p.mean = function (t) {
      return vs(t, A);
    }, p.meanBy = function (t, e) {
      return vs(t, l(e, 2));
    }, p.min = function (t) {
      return t && t.length ? et(t, A, Et) : Go;
    }, p.minBy = function (t, e) {
      return t && t.length ? et(t, l(e, 2), Et) : Go;
    }, p.stubArray = Fn, p.stubFalse = $n, p.stubObject = function () {
      return {};
    }, p.stubString = function () {
      return "";
    }, p.stubTrue = function () {
      return !0;
    }, p.multiply = Ao, p.nth = function (t, e) {
      return t && t.length ? Tt(t, P(e)) : Go;
    }, p.noConflict = function () {
      return Wo._ === this && (Wo._ = tr), this;
    }, p.noop = kn, p.now = Ei, p.pad = function (t, e, n) {
      var r;
      return t = d(t), r = (e = P(e)) ? Mo(t) : 0, !e || e <= r ? t : de(dr(e = (e - r) / 2), n) + t + de(fr(e), n);
    }, p.padEnd = function (t, e, n) {
      t = d(t);
      var r = (e = P(e)) ? Mo(t) : 0;
      return e && r < e ? t + de(e - r, n) : t;
    }, p.padStart = function (t, e, n) {
      t = d(t);
      var r = (e = P(e)) ? Mo(t) : 0;
      return e && r < e ? de(e - r, n) + t : t;
    }, p.parseInt = function (t, e, n) {
      return e = n || null == e ? 0 : e && +e, Er(d(t).replace(Au, ""), e || 0);
    }, p.random = function (t, e, n) {
      var r;
      return n && "boolean" != typeof n && h(t, e, n) && (e = n = Go), n === Go && ("boolean" == typeof e ? (n = e, e = Go) : "boolean" == typeof t && (n = t, t = Go)), t === Go && e === Go ? (t = 0, e = 1) : (t = Tn(t), e === Go ? (e = t, t = 0) : e = Tn(e)), e < t && (r = t, t = e, e = r), n || t % 1 || e % 1 ? (r = wr(), D(t + r * (e - t + Ls("1e-" + ((r + "").length - 1))), e)) : Ct(t, e);
    }, p.reduce = function (t, e, n) {
      var r = $(t) ? hs : ws,
        i = arguments.length < 3;
      return r(t, l(e, 4), n, i, Ur);
    }, p.reduceRight = function (t, e, n) {
      var r = $(t) ? fs : ws,
        i = arguments.length < 3;
      return r(t, l(e, 4), n, i, Ir);
    }, p.repeat = function (t, e, n) {
      return e = (n ? h(t, e, n) : e === Go) ? 1 : P(e), Nt(d(t), e);
    }, p.replace = function () {
      var t = arguments,
        e = d(t[0]);
      return t.length < 3 ? e : e.replace(t[1], t[2]);
    }, p.result = function (t, e, n) {
      var r,
        i,
        o = -1;
      for ((r = (e = Wt(e, t)).length) || (r = 1, t = Go); ++o < r;) (i = null == t ? Go : t[Ve(e[o])]) === Go && (o = r, i = n), t = yn(i) ? i.call(t) : i;
      return t;
    }, p.round = So, p.runInContext = o, p.sample = function (t) {
      return ($(t) ? G : function (t) {
        return G(Nn(t));
      })(t);
    }, p.size = function (t) {
      var e;
      return null == t ? 0 : f(t) ? mn(t) ? Mo(t) : t.length : (e = F(t)) == Zo || e == rs ? t.size : vt(t).length;
    }, p.snakeCase = oo, p.some = function (t, e, n) {
      return ($(t) ? ds : function (t, r) {
        var i;
        return Ur(t, function (t, e, n) {
          return !(i = r(t, e, n));
        }), !!i;
      })(t, l(e = n && h(t, e, n) ? Go : e, 3));
    }, p.sortedIndex = function (t, e) {
      return Lt(t, e);
    }, p.sortedIndexBy = function (t, e, n) {
      return jt(t, e, l(n, 2));
    }, p.sortedIndexOf = function (t, e) {
      var n,
        r = null == t ? 0 : t.length;
      return r && (n = Lt(t, e)) < r && gn(t[n], e) ? n : -1;
    }, p.sortedLastIndex = function (t, e) {
      return Lt(t, e, !0);
    }, p.sortedLastIndexBy = function (t, e, n) {
      return jt(t, e, l(n, 2), !0);
    }, p.sortedLastIndexOf = function (t, e) {
      return null != t && t.length && gn(t[t = Lt(t, e, !0) - 1], e) ? t : -1;
    }, p.startCase = so, p.startsWith = function (t, e, n) {
      return t = d(t), n = null == n ? 0 : Q(P(n), 0, t.length), e = c(e), t.slice(n, n + e.length) == e;
    }, p.subtract = Oo, p.sum = function (t) {
      return t && t.length ? bs(t, A) : 0;
    }, p.sumBy = function (t, e) {
      return t && t.length ? bs(t, l(e, 2)) : 0;
    }, p.template = function (s, t, e) {
      var n,
        r,
        u,
        a,
        c,
        l,
        i,
        o = p.templateSettings;
      if (e && h(s, t, e) && (t = Go), s = d(s), t = Mi({}, t, o, we), e = Mi({}, t.imports, o.imports, we), n = R(e), r = Ts(e, n), c = 0, o = t.interpolate || $u, l = "__p += '", e = Wn((t.escape || $u).source + "|" + o.source + "|" + (o === Eu ? Lu : $u).source + "|" + (t.evaluate || $u).source + "|$", "g"), i = "//# sourceURL=" + (k.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Vu + "]") + "\n", s.replace(e, function (t, e, n, r, i, o) {
        return n = n || r, l += s.slice(c, o).replace(Mu, Os), e && (u = !0, l += "' +\n__e(" + e + ") +\n'"), i && (a = !0, l += "';\n" + i + ";\n__p += '"), n && (l += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), c = o + t.length, t;
      }), l += "';\n", o = k.call(t, "variable") && t.variable) {
        if (Nu.test(o)) throw new zn("Invalid `variable` option passed into `_.template`");
      } else l = "with (obj) {\n" + l + "\n}\n";
      if (l = (a ? l.replace(lu, "") : l).replace(hu, "$1").replace(fu, "$1;"), l = "function(" + (o || "obj") + ") {\n" + (o ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}", (e = co(function () {
        return Gn(n, i + "return " + l).apply(Go, r);
      })).source = l, _n(e)) throw e;
      return e;
    }, p.times = function (t, e) {
      var n, r;
      if ((t = P(t)) < 1 || Ho < t) return [];
      for (r = D(t, n = Ko), e = l(e), t -= Ko, r = ms(r, e); ++n < t;) e(n);
      return r;
    }, p.toFinite = Tn, p.toInteger = P, p.toLength = An, p.toLower = function (t) {
      return d(t).toLowerCase();
    }, p.toNumber = E, p.toSafeInteger = function (t) {
      return t ? Q(P(t), -Ho, Ho) : 0 === t ? t : 0;
    }, p.toString = d, p.toUpper = function (t) {
      return d(t).toUpperCase();
    }, p.trim = function (t, e, n) {
      return (t = d(t)) && (n || e === Go) ? Rs(t) : t && (e = c(e)) ? Jt(n = zo(t), As(n, e = zo(e)), Ss(n, e) + 1).join("") : t;
    }, p.trimEnd = function (t, e, n) {
      return (t = d(t)) && (n || e === Go) ? t.slice(0, Ps(t) + 1) : t && (e = c(e)) ? Jt(n = zo(t), 0, Ss(n, zo(e)) + 1).join("") : t;
    }, p.trimStart = function (t, e, n) {
      return (t = d(t)) && (n || e === Go) ? t.replace(Au, "") : t && (e = c(e)) ? Jt(n = zo(t), As(n, zo(e))).join("") : t;
    }, p.truncate = function (t, e) {
      var n,
        r,
        i,
        o,
        s,
        u = 30,
        a = "...";
      if (b(e) && (n = "separator" in e ? e.separator : n, u = "length" in e ? P(e.length) : u, a = "omission" in e ? c(e.omission) : a), e = (t = d(t)).length, (Fo(t) ? (s = zo(t)).length : e) <= u) return t;
      if ((e = u - Mo(a)) < 1) return a;
      if (u = s ? Jt(s, 0, e).join("") : t.slice(0, e), n !== Go) if (s && (e += u.length - e), qi(n)) {
        if (t.slice(e).search(n)) {
          for (i = u, (n = n.global ? n : Wn(n.source, d(ju.exec(n)) + "g")).lastIndex = 0; r = n.exec(i);) o = r.index;
          u = u.slice(0, o === Go ? e : o);
        }
      } else t.indexOf(c(n), e) != e && -1 < (s = u.lastIndexOf(n)) && (u = u.slice(0, s));
      return u + a;
    }, p.unescape = function (t) {
      return (t = d(t)) && gu.test(t) ? t.replace(du, Gs) : t;
    }, p.uniqueId = function (t) {
      var e = ++Xn;
      return d(t) + e;
    }, p.upperCase = uo, p.upperFirst = ao, p.each = un, p.eachRight = an, p.first = Ze, In(p, (No = {}, rt(p, function (t, e) {
      k.call(p.prototype, e) || (No[e] = t);
    }), No), {
      chain: !1
    }), p.VERSION = "4.17.21", Lo(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
      p[t].placeholder = p;
    }), Lo(["drop", "take"], function (n, r) {
      _.prototype[n] = function (t) {
        t = t === Go ? 1 : q(P(t), 0);
        var e = this.__filtered__ && !r ? new _(this) : this.clone();
        return e.__filtered__ ? e.__takeCount__ = D(t, e.__takeCount__) : e.__views__.push({
          size: D(t, Ko),
          type: n + (e.__dir__ < 0 ? "Right" : "")
        }), e;
      }, _.prototype[n + "Right"] = function (t) {
        return this.reverse()[n](t).reverse();
      };
    }), Lo(["filter", "map", "takeWhile"], function (t, e) {
      var n = e + 1,
        r = 1 == n || 3 == n;
      _.prototype[t] = function (t) {
        var e = this.clone();
        return e.__iteratees__.push({
          iteratee: l(t, 3),
          type: n
        }), e.__filtered__ = e.__filtered__ || r, e;
      };
    }), Lo(["head", "last"], function (t, e) {
      var n = "take" + (e ? "Right" : "");
      _.prototype[t] = function () {
        return this[n](1).value()[0];
      };
    }), Lo(["initial", "tail"], function (t, e) {
      var n = "drop" + (e ? "" : "Right");
      _.prototype[t] = function () {
        return this.__filtered__ ? new _(this) : this[n](1);
      };
    }), _.prototype.compact = function () {
      return this.filter(A);
    }, _.prototype.find = function (t) {
      return this.filter(t).head();
    }, _.prototype.findLast = function (t) {
      return this.reverse().find(t);
    }, _.prototype.invokeMap = s(function (e, n) {
      return "function" == typeof e ? new _(this) : this.map(function (t) {
        return ft(t, e, n);
      });
    }), _.prototype.reject = function (t) {
      return this.filter(pn(l(t)));
    }, _.prototype.slice = function (t, e) {
      t = P(t);
      var n = this;
      return n.__filtered__ && (0 < t || e < 0) ? new _(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== Go ? (e = P(e)) < 0 ? n.dropRight(-e) : n.take(e - t) : n);
    }, _.prototype.takeRightWhile = function (t) {
      return this.reverse().takeWhile(t).reverse();
    }, _.prototype.toArray = function () {
      return this.take(Ko);
    }, rt(_.prototype, function (c, t) {
      var l = /^(?:filter|find|map|reject)|While$/.test(t),
        h = /^(?:head|last)$/.test(t),
        f = p[h ? "take" + ("last" == t ? "Right" : "") : t],
        d = h || /^find/.test(t);
      f && (p.prototype[t] = function () {
        function t(t) {
          return t = f.apply(p, Uo([t], o)), h && e ? t[0] : t;
        }
        var e,
          n,
          r,
          i = this.__wrapped__,
          o = h ? [1] : arguments,
          s = i instanceof _,
          u = o[0],
          a = s || $(i);
        return a && l && "function" == typeof u && 1 != u.length && (s = a = !1), e = this.__chain__, u = !!this.__actions__.length, n = d && !e, s = s && !u, !d && a ? (i = s ? i : new _(this), (r = c.apply(i, o)).__actions__.push({
          func: sn,
          args: [t],
          thisArg: Go
        }), new g(r, e)) : n && s ? c.apply(this, o) : (r = this.thru(t), n ? h ? r.value()[0] : r.value() : r);
      });
    }), Lo(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
      var n = Vn[t],
        r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
        i = /^(?:pop|shift)$/.test(t);
      p.prototype[t] = function () {
        var t,
          e = arguments;
        return i && !this.__chain__ ? (t = this.value(), n.apply($(t) ? t : [], e)) : this[r](function (t) {
          return n.apply($(t) ? t : [], e);
        });
      };
    }), rt(_.prototype, function (t, e) {
      var n,
        r = p[e];
      r && (n = r.name + "", k.call(Sr, n) || (Sr[n] = []), Sr[n].push({
        name: e,
        func: r
      }));
    }), Sr[ce(Go, 2).name] = [{
      name: "wrapper",
      func: Go
    }], _.prototype.clone = function () {
      var t = new _(this.__wrapped__);
      return t.__actions__ = m(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = m(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = m(this.__views__), t;
    }, _.prototype.reverse = function () {
      var t;
      return this.__filtered__ ? ((t = new _(this)).__dir__ = -1, t.__filtered__ = !0) : (t = this.clone()).__dir__ *= -1, t;
    }, _.prototype.value = function () {
      var t,
        e,
        n,
        r,
        i,
        o = this.__wrapped__.value(),
        s = this.__dir__,
        u = $(o),
        a = s < 0,
        c = u ? o.length : 0,
        l = function (t, e, n) {
          for (var r, i, o = -1, s = n.length; ++o < s;) switch (r = n[o], i = r.size, r.type) {
            case "drop":
              t += i;
              break;
            case "dropRight":
              e -= i;
              break;
            case "take":
              e = D(e, t + i);
              break;
            case "takeRight":
              t = q(t, e - i);
          }
          return {
            start: t,
            end: e
          };
        }(0, c, this.__views__),
        h = l.start,
        f = (l = l.end) - h,
        d = a ? l : h - 1,
        p = this.__iteratees__,
        g = p.length,
        _ = 0,
        y = D(f, this.__takeCount__);
      if (!u || !a && c == f && y == f) return $t(o, this.__actions__);
      t = [];
      t: for (; f-- && _ < y;) {
        for (e = -1, n = o[d += s]; ++e < g;) if (i = (r = p[e]).iteratee, r = r.type, i = i(n), 2 == r) n = i;else if (!i) {
          if (1 == r) continue t;
          break t;
        }
        t[_++] = n;
      }
      return t;
    }, p.prototype.at = li, p.prototype.chain = function () {
      return on(this);
    }, p.prototype.commit = function () {
      return new g(this.value(), this.__chain__);
    }, p.prototype.next = function () {
      this.__values__ === Go && (this.__values__ = Rn(this.value()));
      var t = this.__index__ >= this.__values__.length;
      return {
        done: t,
        value: t ? Go : this.__values__[this.__index__++]
      };
    }, p.prototype.plant = function (t) {
      for (var e, n, r, i = this; i instanceof O;) (n = Ke(i)).__index__ = 0, n.__values__ = Go, e ? r.__wrapped__ = n : e = n, r = n, i = i.__wrapped__;
      return r.__wrapped__ = t, e;
    }, p.prototype.reverse = function () {
      var t = this.__wrapped__;
      return t instanceof _ ? ((t = (t = this.__actions__.length ? new _(this) : t).reverse()).__actions__.push({
        func: sn,
        args: [en],
        thisArg: Go
      }), new g(t, this.__chain__)) : this.thru(en);
    }, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = function () {
      return $t(this.__wrapped__, this.__actions__);
    }, p.prototype.first = p.prototype.head, cr && (p.prototype[cr] = function () {
      return this;
    }), p;
  }(), t ? ((t.exports = Jo)._ = Jo, e._ = Jo) : Wo._ = Jo;
}.call(Xu), li = Ws.exports, hi = /\s/, fi = function (t) {
  for (var e = t.length; e-- && hi.test(t.charAt(e)););
  return e;
}, di = /^\s+/, Vs = function (t) {
  return t && t.slice(0, fi(t) + 1).replace(di, "");
}, pi = function (t, e, n) {
  var r,
    i = -1,
    o = t.length;
  for ((n = o < n ? o : n) < 0 && (n += o), o = n < (e = e < 0 ? o < -e ? 0 : o + e : e) ? 0 : n - e >>> 0, e >>>= 0, r = Array(o); ++i < o;) r[i] = t[i + e];
  return r;
}, gi = function (t, e, n) {
  var r = t.length;
  return n = void 0 === n ? r : n, !e && r <= n ? t : pi(t, e, n);
}, _i = function (t, e, n, r) {
  for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) if (e(t[o], o, t)) return o;
  return -1;
}, yi = function (t) {
  return t != t;
}, vi = function (t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i;) if (t[r] === e) return r;
  return -1;
}, l = function (t, e) {
  for (var n = t.length; n-- && -1 < Ei(e, t[n], 0););
  return n;
}, wi = Ei = Ys = function (t, e, n) {
  return e == e ? vi(t, e, n) : _i(t, yi, n);
}, bi = function (t, e) {
  for (var n = -1, r = t.length; ++n < r && -1 < wi(e, t[n], 0););
  return n;
}, b = function (t) {
  return t.split("");
}, mi = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), n = function (t) {
  return mi.test(t);
}, v = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", "(?:\\ud83c[\\udde6-\\uddff]){2}", "[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|") + ")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*", Js = "(?:" + ["[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?", "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "(?:\\ud83c[\\udde6-\\uddff]){2}", "[\\ud800-\\udbff][\\udc00-\\udfff]", "[\\ud800-\\udfff]"].join("|") + ")", Ri = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Js + v, "g"), Ti = b, Ai = n, Si = function (t) {
  return t.match(Ri) || [];
}, Oi = Ae, xi = Vs, Ci = gi, Ni = l, Pi = bi, Li = S = function (t) {
  return (Ai(t) ? Si : Ti)(t);
}, ji = O, qi = t(function (t, e, n) {
  var r;
  return (t = ji(t)) && (n || void 0 === e) ? xi(t) : t && (e = Oi(e)) ? (n = Li(t), e = Li(e), r = Pi(n, e), e = Ni(n, e) + 1, Ci(n, r, e).join("")) : t;
}), Ui = Vs, Ii = te, ki = Yt, Di = /^[-+]0x[0-9a-f]+$/i, Fi = /^0b[01]+$/i, $i = /^0o[0-7]+$/i, Mi = parseInt, zi = function (t) {
  var e;
  return "number" == typeof t ? t : ki(t) ? NaN : (Ii(t) && (e = "function" == typeof t.valueOf ? t.valueOf() : t, t = Ii(e) ? e + "" : e), "string" != typeof t ? 0 === t ? t : +t : (t = Ui(t), (e = Fi.test(t)) || $i.test(t) ? Mi(t.slice(2), e ? 2 : 8) : Di.test(t) ? NaN : +t));
}, Gi = function (t) {
  return t ? (t = zi(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
}, Wi = Bi = function (t) {
  var e = (t = Gi(t)) % 1;
  return t == t ? e ? t - e : t : 0;
}, Ji = t(g = function (t) {
  return "number" == typeof t && t == Wi(t);
}), Vi = g, Hi = t(function (t) {
  return Vi(t) && -9007199254740991 <= t && t <= 9007199254740991;
}), Ki = t(function (t) {
  return null === t;
}), Xi = Xt, Qi = Qt, Yi = t(function (t) {
  return "number" == typeof t || Qi(t) && "[object Number]" == Xi(t);
}), to = Zi = function (t, e, n) {
  return t != t || (void 0 !== n && (t = t <= n ? t : n), void 0 === e) || e <= t ? t : e;
}, eo = Bi, no = t(function (t) {
  return t ? to(eo(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0;
}), ro = Zi, io = Ae, oo = Bi, so = O, uo = t(function (t, e, n) {
  return t = so(t), n = null == n ? 0 : ro(oo(n), 0, t.length), e = io(e), t.slice(n, n + e.length) == e;
}), ao = c, co = _, lo = we, ho = Hr, fo = function (t, r) {
  var i = -1,
    o = co(t) ? Array(t.length) : [];
  return ao(t, function (t, e, n) {
    o[++i] = r(t, e, n);
  }), o;
}, po = w, p = t(function (t, e) {
  return (po(t) ? lo : fo)(t, ho(e));
}), go = Ys, Ts = function (t, e) {
  return !(null == t || !t.length) && -1 < go(t, e, 0);
}, E = function (t, e, n) {
  for (var r = -1, i = null == t ? 0 : t.length; ++r < i;) if (n(e, t[r])) return !0;
  return !1;
}, r = function () {}, Xs = (_o = Ks) && 1 / Qs(new _o([, -0]))[1] == 1 / 0 ? function (t) {
  return new _o(t);
} : r, yo = o, vo = Ts, Eo = E, wo = Hs, bo = Xs, mo = Qs, Ro = function (t, e, n) {
  var r,
    i,
    o,
    s,
    u = -1,
    a = vo,
    c = t.length,
    l = !0,
    h = [],
    f = h;
  if (n) l = !1, a = Eo;else if (200 <= c) {
    if (r = e ? null : bo(t)) return mo(r);
    l = !1, a = wo, f = new yo();
  } else f = e ? [] : h;
  t: for (; ++u < c;) if (i = t[u], o = e ? e(i) : i, i = n || 0 !== i ? i : 0, l && o == o) {
    for (s = f.length; s--;) if (f[s] === o) continue t;
    e && f.push(o), h.push(i);
  } else a(f, o, n) || (f !== h && f.push(o), h.push(i));
  return h;
}, To = t(function (t) {
  return t && t.length ? Ro(t) : [];
}), T = {
  OK: 0,
  0: "OK",
  GENERAL_ERRORS: 1,
  1: "GENERAL_ERRORS",
  MISUSE_OF_SHELL_BUILTINS: 2,
  2: "MISUSE_OF_SHELL_BUILTINS",
  ARGUMENT_PARSE_ERROR: 3,
  3: "ARGUMENT_PARSE_ERROR",
  UNKNOWN_ARGUMENT: 4,
  4: "UNKNOWN_ARGUMENT",
  UNIMPLEMENTED_FEATURE: 5,
  5: "UNIMPLEMENTED_FEATURE",
  FATAL_ERROR: 6,
  6: "FATAL_ERROR",
  CONFLICT: 7,
  7: "CONFLICT",
  USAGE: 64,
  64: "USAGE",
  DATAERR: 65,
  65: "DATAERR",
  NOINPUT: 66,
  66: "NOINPUT",
  NOUSER: 67,
  67: "NOUSER",
  NOHOST: 68,
  68: "NOHOST",
  UNAVAILABLE: 69,
  69: "UNAVAILABLE",
  SOFTWARE: 70,
  70: "SOFTWARE",
  OSERR: 71,
  71: "OSERR",
  OSFILE: 72,
  72: "OSFILE",
  CANTCREAT: 73,
  73: "CANTCREAT",
  IOERR: 74,
  74: "IOERR",
  TEMPFAIL: 75,
  75: "TEMPFAIL",
  PROTOCOL: 76,
  76: "PROTOCOL",
  NOPERM: 77,
  77: "NOPERM",
  CONFIG: 78,
  78: "CONFIG",
  COMMAND_INVOKED_CANNOT_EXECUTE: 126,
  126: "COMMAND_INVOKED_CANNOT_EXECUTE",
  COMMAND_NOT_FOUND: 127,
  127: "COMMAND_NOT_FOUND",
  INVALID_ARGUMENT_TO_EXIT: 128,
  128: "INVALID_ARGUMENT_TO_EXIT",
  FATAL_SIGNAL_RANGE_START: 129,
  129: "FATAL_SIGNAL_RANGE_START",
  FATAL_SIGNAL_RANGE_END: 192,
  192: "FATAL_SIGNAL_RANGE_END",
  EXIT_STATUS_OUT_OF_RANGE: 255,
  255: "EXIT_STATUS_OUT_OF_RANGE"
};
class Fu {
  static create() {
    return new Fu();
  }
  constructor() {}
  async main(t) {
    var e,
      n,
      r,
      i,
      o,
      s,
      u,
      a,
      t = t.includes("with-npm"),
      c = process.cwd(),
      l = await this._getPkgDirectories(c);
    if (0 === l.length) return console.error("Could not find any directories with package.json"), T.CONFLICT;
    e = {};
    for (let t = 0; t < l.length; t += 1) {
      var _await$this$_readJson, _await$this$_readJson2;
      n = l[t], r = ou.join(n, "package.json"), r = (_await$this$_readJson = (_await$this$_readJson2 = await this._readJson(r)) === null || _await$this$_readJson2 === void 0 ? void 0 : _await$this$_readJson2.devDependencies) !== null && _await$this$_readJson !== void 0 ? _await$this$_readJson : [], e[n] = r;
    }
    let h = {};
    for (let t = 0; t < l.length; t += 1) if (i = l[t], R(e, i)) {
      const f = m(e[i]);
      for (let t = 0; t < f.length; t += 1) o = f[t], R(h, o) || (h[o] = {}), h[o][i] = {
        exists: !0,
        version: e[i][o]
      };
    }
    const f = m(h);
    if (t) for (let t = 0; t < f.length; t += 1) s = f[t], u = qi(iu.execSync(`npm info '${s.replace(/'/g, "\\'")}' version`, {
      encoding: "utf8"
    })), h[s].__NPM__ = {
      exists: !!u,
      version: "^" + u
    };
    for (let t = 0; t < f.length; t += 1) {
      const d = f[t];
      a = m(h[d]), 2 <= To(p(a, t => h[d][t].version)).length && console.log(`Multiple versions available for ${d}: ` + p(a, t => t + ` (${h[d][t].version})`).join(" "));
    }
    return T.OK;
  }
  async _readJson(e) {
    try {
      var t = await ru.readFile(e, {
        encoding: "utf8"
      });
      return JSON.parse(t);
    } catch (t) {
      throw new Error(`Could not read file ${e}: ` + t);
    }
  }
  async _getPkgDirectories(t) {
    var e = ou.join(t, "package.json");
    return nu.existsSync(e) ? [t] : this._getSubPkgDirectories(t);
  }
  async _getSubPkgDirectories(t) {
    var e,
      n,
      r = [];
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = _asyncIterator(await ru.opendir("./")), _step; _iteratorAbruptCompletion = !(_step = await _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const i = _step.value;
        {
          i.isDirectory() && (e = ou.join(t, i.name), n = ou.join(e, "package.json"), nu.existsSync(n)) && r.push(e);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          await _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    return r;
  }
}
class $u {
  constructor(t, e, n) {
    _defineProperty(this, "_parentLogger", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "_level", void 0);
    this.name = t, this._parentLogger = e, this._level = n !== null && n !== void 0 ? n : void 0;
  }
  getLogLevel() {
    var _ref, _this$_level;
    return (_ref = (_this$_level = this._level) !== null && _this$_level !== void 0 ? _this$_level : this._parentLogger.getLogLevel()) !== null && _ref !== void 0 ? _ref : d.DEBUG;
  }
  setLogLevel(t) {
    return this._level = t, this;
  }
  debug(...t) {
    this.getLogLevel() <= d.DEBUG && this._parentLogger.debug(`[${this.name}]`, ...t);
  }
  info(...t) {
    this.getLogLevel() <= d.INFO && this._parentLogger.info(`[${this.name}]`, ...t);
  }
  warn(...t) {
    this.getLogLevel() <= d.WARN && this._parentLogger.warn(`[${this.name}]`, ...t);
  }
  error(...t) {
    this.getLogLevel() <= d.ERROR && this._parentLogger.error(`[${this.name}]`, ...t);
  }
}
class Mu {
  constructor(t) {
    _defineProperty(this, "_level", void 0);
    this._level = t !== null && t !== void 0 ? t : d.DEBUG;
  }
  getLogLevel() {
    var _this$_level2;
    return (_this$_level2 = this._level) !== null && _this$_level2 !== void 0 ? _this$_level2 : d.DEBUG;
  }
  setLogLevel(t) {
    return this._level = t !== null && t !== void 0 ? t : d.DEBUG, this;
  }
  debug(...t) {
    this.getLogLevel() <= d.DEBUG && console.debug(...t);
  }
  info(...t) {
    this.getLogLevel() <= d.INFO && console.info(...t);
  }
  warn(...t) {
    this.getLogLevel() <= d.WARN && console.warn(...t);
  }
  error(...t) {
    this.getLogLevel() <= d.ERROR && console.error(...t);
  }
}
class C {
  static setLogLevel(t) {
    return this._level = t !== null && t !== void 0 ? t : d.DEBUG, this;
  }
  static getLogLevel() {
    return this._level;
  }
  static getLogLevelString() {
    var t = this._level;
    switch (t) {
      case d.DEBUG:
        return "DEBUG";
      case d.INFO:
        return "INFO";
      case d.WARN:
        return "WARN";
      case d.ERROR:
        return "ERROR";
      case d.NONE:
        return "NONE";
      default:
        return "Unknown:" + t;
    }
  }
  static setLogger(t) {
    if (!t) throw new TypeError("The logger was not defined");
    this._logger = t;
  }
  static getLogger() {
    return this._logger;
  }
  static debug(...t) {
    this._level <= d.DEBUG && this._logger.debug(...t);
  }
  static info(...t) {
    this._level <= d.INFO && this._logger.info(...t);
  }
  static warn(...t) {
    this._level <= d.WARN && this._logger.warn(...t);
  }
  static error(...t) {
    this._level <= d.ERROR && this._logger.error(...t);
  }
  static createLogger(t) {
    return new $u(t, C);
  }
}
_defineProperty(C, "Level", d = {
  DEBUG: 0,
  0: "DEBUG",
  INFO: 1,
  1: "INFO",
  WARN: 2,
  2: "WARN",
  ERROR: 3,
  3: "ERROR",
  NONE: 4,
  4: "NONE"
});
_defineProperty(C, "_level", d.DEBUG);
_defineProperty(C, "_logger", new Mu());
Ao = Ys, So = Bi, Oo = Math.max, xo = t(function (t, e, n) {
  var r = null == t ? 0 : t.length;
  return r ? ((n = null == n ? 0 : So(n)) < 0 && (n = Oo(r + n, 0)), Ao(t, e, n)) : -1;
}), Co = Ae, No = gi, Po = bi, Lo = S, jo = O, qo = /^\s+/, Uo = t(function (t, e, n) {
  return (t = jo(t)) && (n || void 0 === e) ? t.replace(qo, "") : t && (e = Co(e)) ? (n = Lo(t), e = Po(n, Lo(e)), No(n, e).join("")) : t;
});
const zu = C.createLogger("ProcessUtils");
class Gu {
  static setLogLevel(t) {
    zu.setLogLevel(t);
  }
  static getArguments() {
    return process.argv.slice(2);
  }
  static parseEnvFileLine(t, e) {
    var n, r;
    if (!e || !Uo(e)) return t;
    let i;
    if ((n = xo(e, "=")) < 0) return (i = qi(e)).length ? _objectSpread(_objectSpread({}, t), {}, {
      [i]: ""
    }) : t;
    if (i = e.substring(0, n), i = qi(i), n === e.length - 1) return _objectSpread(_objectSpread({}, t), {}, {
      [e]: ""
    });
    let o;
    if ('"' !== e[n + 1]) return (r = xo(e, "\n", n)) < 0 ? (o = (o = e.substring(n + 1).trim()).replace(/\\n/g, "\n"), _objectSpread(_objectSpread({}, t), {}, {
      [i]: o
    })) : (o = (o = e.substring(n + 1, r).trim()).replace(/\\n/g, "\n"), this.parseEnvFileLine(_objectSpread(_objectSpread({}, t), {}, {
      [i]: o
    }), e.substring(r + 1)));
    if (0 <= (r = xo(e, '"', n + 2))) return o = e.substring(n + 2, r), this.parseEnvFileLine(_objectSpread(_objectSpread({}, t), {}, {
      [i]: o
    }), e.substring(r + 1));
    throw new TypeError("ProcessUtils.parseEnvFileLine: No ending for double quote detected");
  }
  static parseEnvString(t) {
    return Gu.parseEnvFileLine({}, t);
  }
  static parseEnvFile(t) {
    return t = nu.readFileSync(t, {
      encoding: "utf-8"
    }), this.parseEnvString(t);
  }
  static initEnvFromRecord(t) {
    process.env = _objectSpread(_objectSpread({}, t), process.env);
  }
  static initEnvFromFile(t) {
    t = Gu.parseEnvFile(t), this.initEnvFromRecord(t);
  }
  static initEnvFromDefaultFiles() {
    var t = ou.join(process.cwd(), ".env");
    nu.existsSync(t) && Gu.initEnvFromFile(t);
  }
  static setupDestroyHandler(n, r) {
    let i = !1;
    var t = e => t => {
      Gu._printErrors(e, t);
      try {
        i || (i = !0, n());
      } catch (t) {
        r(t);
      }
    };
    process.on("exit", t("exit")), process.on("SIGTERM", t("SIGTERM")), process.on("SIGINT", t("SIGINT")), process.on("SIGUSR1", t("SIGUSR1")), process.on("SIGUSR2", t("SIGUSR2")), process.on("uncaughtException", t("uncaughtException"));
  }
  static _printErrors(t, e) {
    try {
      "exit" === t ? e ? zu.debug(`DEBUG: Closing process because "${t}" event: `, e) : zu.debug(`DEBUG: Closing process because "${t}" event`) : e ? zu.error(`ERROR: Closing process because "${t}" event: `, e) : zu.info(`INFO: Closing process because "${t}" event`);
    } catch (t) {
      console.error("Error while printing errors: ", t);
    }
  }
}
Io = Xt, ko = Qt, Do = t(function (t) {
  return !0 === t || !1 === t || ko(t) && "[object Boolean]" == Io(t);
}), Ws = (_lt = lt("")) !== null && _lt !== void 0 ? _lt : "hg-command", Js = (_lt2 = lt("")) !== null && _lt2 !== void 0 ? _lt2 : "";
const Bu = (_ct = ct("")) !== null && _ct !== void 0 ? _ct : !0,
  Wu = (v = (_ref2 = function (t) {
    if (t) {
      if (function () {
        switch (t) {
          case d.DEBUG:
          case d.INFO:
          case d.WARN:
          case d.ERROR:
          case d.NONE:
            return 1;
          default:
            return;
        }
      }()) return t;
      switch (("" + t).toUpperCase()) {
        case "ALL":
        case "DEBUG":
          return d.DEBUG;
        case "INFO":
          return d.INFO;
        case "WARN":
        case "WARNING":
          return d.WARN;
        case "ERR":
        case "ERROR":
          return d.ERROR;
        case "FALSE":
        case "OFF":
        case "QUIET":
        case "SILENT":
        case "NONE":
          return d.NONE;
        default:
          return;
      }
    }
  }((_rt = rt((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.LOG_LEVEL)) !== null && _rt !== void 0 ? _rt : rt(Js))) !== null && _ref2 !== void 0 ? _ref2 : d.INFO, (_rt2 = rt((_process2 = process) === null || _process2 === void 0 || (_process2 = _process2.env) === null || _process2 === void 0 ? void 0 : _process2.COMMAND_NAME)) !== null && _rt2 !== void 0 ? _rt2 : Ws),
  N = ((l = (b = {}).HttpMethods || (b.HttpMethods = {})).GET = "get", l.PUT = "put", l.POST = "post", l.DELETE = "delete", l.OPTIONS = "options", l.HEAD = "head", l.PATCH = "patch", l.TRACE = "trace", (g = (Vs = {}).HttpMethods || (Vs.HttpMethods = {})).GET = "get", g.PUT = "put", g.POST = "post", g.DELETE = "delete", g.OPTIONS = "options", g.HEAD = "head", g.PATCH = "patch", (_ = i = {})[_.OPTIONS = 0] = "OPTIONS", _[_.GET = 1] = "GET", _[_.POST = 2] = "POST", _[_.PUT = 3] = "PUT", _[_.DELETE = 4] = "DELETE", _[_.PATCH = 5] = "PATCH", _[_.TRACE = 6] = "TRACE", _[_.HEAD = 7] = "HEAD", C.createLogger("RequestClientImpl"));
class P {
  constructor(t) {
    _defineProperty(this, "_adapter", void 0);
    this._adapter = t;
  }
  getClient() {
    return this._adapter;
  }
  async textEntityRequest(t, e, n, r) {
    return this._adapter.textEntityRequest(t, e, n, r);
  }
  async getTextEntity(t, e) {
    return this._adapter.textEntityRequest(i.GET, t, e);
  }
  async postTextEntity(t, e, n) {
    return N.debug(".postJson: ", t, e, n), this._adapter.textEntityRequest(i.POST, t, n, e);
  }
  async patchTextEntity(t, e, n) {
    return N.debug(".patchJson: ", t, e, n), this._adapter.textEntityRequest(i.PATCH, t, n, e);
  }
  async putTextEntity(t, e, n) {
    return N.debug(".putJson: ", t, e, n), this._adapter.textEntityRequest(i.PUT, t, n, e);
  }
  async deleteTextEntity(t, e, n) {
    return N.debug(".deleteJson: ", t, n, e), this._adapter.textEntityRequest(i.DELETE, t, e, n);
  }
  async textRequest(t, e, n, r) {
    return this._adapter.textRequest(t, e, n, r);
  }
  async getText(t, e) {
    return this._adapter.textRequest(i.GET, t, e);
  }
  async postText(t, e, n) {
    return N.debug(".postJson: ", t, e, n), this._adapter.textRequest(i.POST, t, n, e);
  }
  async patchText(t, e, n) {
    return N.debug(".patchJson: ", t, e, n), this._adapter.textRequest(i.PATCH, t, n, e);
  }
  async putText(t, e, n) {
    return N.debug(".putJson: ", t, e, n), this._adapter.textRequest(i.PUT, t, n, e);
  }
  async deleteText(t, e, n) {
    return N.debug(".deleteJson: ", t, n, e), this._adapter.textRequest(i.DELETE, t, e, n);
  }
  async jsonRequest(t, e, n, r) {
    return this._adapter.jsonRequest(t, e, n, r);
  }
  async getJson(t, e) {
    return this._adapter.jsonRequest(i.GET, t, e);
  }
  async postJson(t, e, n) {
    return this._adapter.jsonRequest(i.POST, t, n, e);
  }
  async patchJson(t, e, n) {
    return this._adapter.jsonRequest(i.PATCH, t, n, e);
  }
  async putJson(t, e, n) {
    return this._adapter.jsonRequest(i.PUT, t, n, e);
  }
  async deleteJson(t, e, n) {
    return this._adapter.jsonRequest(i.DELETE, t, e, n);
  }
  async jsonEntityRequest(t, e, n, r) {
    return this._adapter.jsonEntityRequest(t, e, n, r);
  }
  async getJsonEntity(t, e) {
    return this._adapter.jsonEntityRequest(i.GET, t, e);
  }
  async postJsonEntity(t, e, n) {
    return this._adapter.jsonEntityRequest(i.POST, t, n, e);
  }
  async patchJsonEntity(t, e, n) {
    return this._adapter.jsonEntityRequest(i.PATCH, t, n, e);
  }
  async putJsonEntity(t, e, n) {
    return this._adapter.jsonEntityRequest(i.PUT, t, n, e);
  }
  async deleteJsonEntity(t, e, n) {
    return this._adapter.jsonEntityRequest(i.DELETE, t, e, n);
  }
  static create(t) {
    return new P(t);
  }
  static setLogLevel(t) {
    N.setLogLevel(t);
  }
  static setClient(t) {
    this._client = new P(t);
  }
  static hasClient() {
    return !!this._client;
  }
  static getClient() {
    if (this._client) return this._client.getClient();
    throw new TypeError("Client has not been initialized yet");
  }
  static async textRequest(t, e, n, r) {
    if (this._client) return this._client.textRequest(t, e, n, r);
    throw this._createClientError();
  }
  static async getText(t, e) {
    if (this._client) return this._client.getText(t, e);
    throw this._createClientError();
  }
  static async postText(t, e, n) {
    if (this._client) return N.debug(".postJson: ", t, e, n), this._client.postText(t, e, n);
    throw this._createClientError();
  }
  static async patchText(t, e, n) {
    if (this._client) return N.debug(".patchJson: ", t, e, n), this._client.patchText(t, e, n);
    throw this._createClientError();
  }
  static async putText(t, e, n) {
    if (this._client) return this._client.putText(t, e, n);
    throw this._createClientError();
  }
  static async deleteText(t, e, n) {
    if (this._client) return this._client.deleteText(t, e, n);
    throw this._createClientError();
  }
  static async jsonRequest(t, e, n, r) {
    if (this._client) return this._client.jsonRequest(t, e, n, r);
    throw this._createClientError();
  }
  static async getJson(t, e) {
    if (this._client) return this._client.getJson(t, e);
    throw this._createClientError();
  }
  static async postJson(t, e, n) {
    if (this._client) return N.debug(".postJson: ", t, e, n), this._client.postJson(t, e, n);
    throw this._createClientError();
  }
  static async patchJson(t, e, n) {
    if (this._client) return this._client.patchJson(t, e, n);
    throw this._createClientError();
  }
  static async putJson(t, e, n) {
    if (this._client) return this._client.putJson(t, e, n);
    throw this._createClientError();
  }
  static async deleteJson(t, e, n) {
    if (this._client) return this._client.deleteJson(t, e, n);
    throw this._createClientError();
  }
  static async textEntityRequest(t, e, n, r) {
    if (this._client) return this._client.textEntityRequest(t, e, n, r);
    throw this._createClientError();
  }
  static async getTextEntity(t, e) {
    if (this._client) return this._client.getTextEntity(t, e);
    throw this._createClientError();
  }
  static async postTextEntity(t, e, n) {
    if (this._client) return N.debug(".postJson: ", t, e, n), this._client.postTextEntity(t, e, n);
    throw this._createClientError();
  }
  static async patchTextEntity(t, e, n) {
    if (this._client) return N.debug(".patchJson: ", t, e, n), this._client.patchTextEntity(t, e, n);
    throw this._createClientError();
  }
  static async putTextEntity(t, e, n) {
    if (this._client) return this._client.putTextEntity(t, e, n);
    throw this._createClientError();
  }
  static async deleteTextEntity(t, e, n) {
    if (this._client) return this._client.deleteTextEntity(t, e, n);
    throw this._createClientError();
  }
  static async jsonEntityRequest(t, e, n, r) {
    if (this._client) return this._client.jsonEntityRequest(t, e, n, r);
    throw this._createClientError();
  }
  static async getJsonEntity(t, e) {
    if (this._client) return this._client.getJsonEntity(t, e);
    throw this._createClientError();
  }
  static async postJsonEntity(t, e, n) {
    if (this._client) return N.debug(".postJson: ", t, e, n), this._client.postJsonEntity(t, e, n);
    throw this._createClientError();
  }
  static async patchJsonEntity(t, e, n) {
    if (this._client) return this._client.patchJsonEntity(t, e, n);
    throw this._createClientError();
  }
  static async putJsonEntity(t, e, n) {
    if (this._client) return this._client.putJsonEntity(t, e, n);
    throw this._createClientError();
  }
  static async deleteJsonEntity(t, e, n) {
    if (this._client) return this._client.deleteJsonEntity(t, e, n);
    throw this._createClientError();
  }
  static _createClientError() {
    return new TypeError("RequestClient: You must initialize implementation first using HgFrontend.initialize() or HgNode.initialize()");
  }
}
_defineProperty(P, "_client", void 0);
Fo = kr, $o = function (t, e) {
  for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
  return t;
}, Mo = c, zo = function (t) {
  return "function" == typeof t ? t : Fo;
}, Go = w, Bo = t(function (t, e) {
  return (Go(t) ? $o : Mo)(t, zo(e));
}), Wo = {
  OK: 0,
  0: "OK",
  ERROR: 1,
  1: "ERROR",
  HELP: 2,
  2: "HELP",
  VERSION: 3,
  3: "VERSION"
};
const Ju = C.createLogger("NumberUtils");
class Vu {
  static parseNumber(e) {
    try {
      var t;
      if (void 0 !== e && (f(e) || (e = "" + e), "" !== (e = li.trim(e)))) return t = parseFloat(e), isNaN(t) ? void 0 : t;
    } catch (t) {
      Ju.warn(`toNumber: Error while parsing value as number "${e}": `, t);
    }
  }
}
const Qu = C.createLogger("CommandArgumentUtils");
class Yu {
  static setLogLevel(t) {
    Qu.setLogLevel(t);
  }
  static parseArguments(t, e = [], n, r) {
    var _c$shift, _c$shift2;
    var i,
      o,
      s,
      u,
      a,
      c = [...e];
    Qu.debug("myArgs = ", c), i = (_c$shift = c.shift()) !== null && _c$shift !== void 0 ? _c$shift : "", Qu.debug("nodePath = ", i), o = (_c$shift2 = c.shift()) !== null && _c$shift2 !== void 0 ? _c$shift2 : "", Qu.debug("scriptNameFromArgs = ", o);
    const l = n || {};
    if (!o) return {
      parseStatus: Wo.ERROR,
      exitStatus: T.ARGUMENT_PARSE_ERROR,
      nodePath: i,
      scriptName: t,
      freeArgs: [],
      extraArgs: [],
      userArgs: {}
    };
    if (0 === c.length) return {
      parseStatus: Wo.ERROR,
      exitStatus: T.ARGUMENT_PARSE_ERROR,
      nodePath: i,
      scriptName: o,
      freeArgs: [],
      extraArgs: [],
      userArgs: {}
    };
    let h = !0,
      f = (s = [], u = [], {}),
      d = {},
      p = {},
      g = {};
    Bo(m(l), t => {
      var [, e, n, r] = l[t];
      e && (d[e] = t), n && (p[n] = t), r && (g[r] = t);
    });
    do {
      var _c$shift3;
      if (a = (_c$shift3 = c.shift()) !== null && _c$shift3 !== void 0 ? _c$shift3 : "", h) switch (function () {
        switch (a) {
          case "-h":
          case "--help":
          case 0:
            return 0;
          case "-v":
          case "--version":
          case 1:
            return 1;
          case "--":
          case 2:
            return 2;
        }
      }()) {
        case 0:
          return {
            parseStatus: Wo.HELP,
            exitStatus: T.OK,
            nodePath: i,
            scriptName: o,
            freeArgs: s,
            extraArgs: u,
            userArgs: f
          };
        case 1:
          return {
            parseStatus: Wo.VERSION,
            exitStatus: T.OK,
            nodePath: i,
            scriptName: o,
            freeArgs: s,
            extraArgs: u,
            userArgs: f
          };
        case 2:
          h = !1;
          break;
        default:
          if (!uo(a, "-")) {
            s.push(a);
            break;
          }
          if (1 <= xo(a, "=")) {
            var [_, ...y] = a.split("="),
              y = y.join("=");
            if (R(d, _)) {
              var v = d[_],
                [E,,,,] = l[v];
              try {
                f[v] = dt(a, E, y, r);
              } catch (t) {
                return Yu._getArgumentParseError(t, i, o, s, u, f);
              }
              break;
            }
            if (R(p, _)) {
              var v = p[_],
                [E,,,,] = l[v];
              try {
                f[v] = dt(a, E, y, r);
              } catch (t) {
                return Yu._getArgumentParseError(t, i, o, s, u, f);
              }
              break;
            }
          } else {
            if (R(d, a)) {
              var _ = d[a],
                [y,,,,] = l[_];
              try {
                f[_] = pt(a, y, r);
              } catch (t) {
                return Yu._getArgumentParseError(t, i, o, s, u, f);
              }
              break;
            }
            if (R(p, a)) {
              var w = p[a],
                [b,,,,] = l[w];
              try {
                f[w] = pt(a, b, r);
              } catch (t) {
                return Yu._getArgumentParseError(t, i, o, s, u, f);
              }
              break;
            }
          }
          return {
            errorString: "Unknown argument: " + a,
            parseStatus: Wo.ERROR,
            exitStatus: T.UNKNOWN_ARGUMENT,
            nodePath: i,
            scriptName: o,
            freeArgs: s,
            extraArgs: u,
            userArgs: f
          };
      } else u.push(a);
    } while (1 <= c.length);
    return Bo(m(g), t => {
      var e = g[t],
        [n,,,] = l[e];
      R(process.env, t) && !R(f, e) && (f[e] = dt(t, n, process.env[t], r));
    }), {
      parseStatus: Wo.OK,
      exitStatus: T.OK,
      nodePath: i,
      scriptName: o,
      freeArgs: s,
      extraArgs: u,
      userArgs: f
    };
  }
  static _getArgumentParseError(t, e, n, r, i, o) {
    return {
      errorString: "Argument parse error: " + t,
      parseStatus: Wo.ERROR,
      exitStatus: T.ARGUMENT_PARSE_ERROR,
      nodePath: e,
      scriptName: n,
      freeArgs: r,
      extraArgs: i,
      userArgs: o
    };
  }
}
Jo = Ie, Vo = w, Ho = hu ? hu.isConcatSpreadable : void 0, Xo = function (t) {
  return Vo(t) || Jo(t) || !!(Ho && t && t[Ho]);
}, Qo = Ko = Dn, Yo = function t(e, n, r, i, o) {
  var s,
    u = -1,
    a = e.length;
  for (r = r || Xo, o = o || []; ++u < a;) s = e[u], 0 < n && r(s) ? 1 < n ? t(s, n - 1, r, i, o) : Ko(o, s) : i || (o[o.length] = s);
  return o;
}, Zo = function (t, e) {
  var n = -1,
    r = t.length;
  for (e = e || Array(r); ++n < r;) e[n] = t[n];
  return e;
}, ts = w, es = t(function () {
  var t,
    e,
    n,
    r = arguments.length;
  if (!r) return [];
  for (t = Array(r - 1), e = arguments[0], n = r; n--;) t[n - 1] = arguments[n];
  return Qo(ts(e) ? Zo(e) : [e], Yo(t, 1));
}), ns = function (t, e, n, r) {
  var i = -1,
    o = null == t ? 0 : t.length;
  for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
  return n;
}, rs = c, is = Hr, os = function (t, r, i, o, e) {
  return e(t, function (t, e, n) {
    i = o ? (o = !1, t) : r(i, t, e, n);
  }), i;
}, ss = w, us = t(function (t, e, n) {
  var r = ss(t) ? ns : os,
    i = arguments.length < 3;
  return r(t, is(e), n, i, rs);
}), as = c, cs = xn, ls = Hr, hs = function (t, r) {
  var i;
  return as(t, function (t, e, n) {
    return !(i = r(t, e, n));
  }), !!i;
}, fs = w, ds = A, ps = t(function (t, e, n) {
  var r = fs(t) ? cs : hs;
  return n && ds(t, e, n) && (e = void 0), r(t, ls(e));
}), gs = we, _s = function (e, t) {
  return gs(t, function (t) {
    return e[t];
  });
}, ys = yn, vs = t(function (t) {
  return null == t ? [] : _s(t, ys(t));
});
const Zu = C.createLogger("Headers");
class ta {
  static setLogLevel(t) {
    Zu.setLogLevel(t);
  }
  constructor(t) {
    _defineProperty(this, "_value", void 0);
    _defineProperty(this, "_uninitializedValue", void 0);
    this._value = void 0, this._uninitializedValue = t;
  }
  static create(t) {
    return new ta(t);
  }
  _initializeValue() {
    var e = this._value,
      n = this._uninitializedValue;
    try {
      n && (this._uninitializedValue = void 0, this.addAll(n));
    } catch (t) {
      throw this._value = e, this._uninitializedValue = n, t;
    }
  }
  clear() {
    this._value = {}, this._uninitializedValue = void 0;
  }
  add(t, e) {
    this._uninitializedValue && this._initializeValue(), Zu.debug("add header: ", t, e), t = t.toLowerCase();
    var n = this._value && R(this._value, t) ? this._value[t] : void 0;
    void 0 === this._value ? this._value = {
      [t]: e
    } : void 0 !== n ? bt(n) ? this._value = _objectSpread(_objectSpread({}, this._value), {}, {
      [t]: es([], n, [e])
    }) : this._value = _objectSpread(_objectSpread({}, this._value), {}, {
      [t]: [n, e]
    }) : this._value = _objectSpread(_objectSpread({}, this._value), {}, {
      [t]: e
    });
  }
  containsKey(t) {
    return this._uninitializedValue && this._initializeValue(), t = t.toLowerCase(), R(this._value, t);
  }
  isEmpty() {
    this._uninitializedValue && this._initializeValue();
    var t = this._value;
    return !t || 0 === m(t).length;
  }
  keySet() {
    this._uninitializedValue && this._initializeValue();
    const e = new Set();
    var t;
    return void 0 !== this._value && (t = m(this._value), Bo(t, t => {
      e.add(t);
    })), e;
  }
  getValue(t) {
    if (this._uninitializedValue && this._initializeValue(), this._value) return t = t.toLowerCase(), R(this._value, t) ? this._value[t] : void 0;
  }
  getFirst(t) {
    return this._uninitializedValue && this._initializeValue(), bt(t = this.getValue(t)) ? t.length ? t[0] : void 0 : t;
  }
  getHost() {
    return this._uninitializedValue && this._initializeValue(), this.getFirst("host");
  }
  addAll(t, e) {
    if (this._uninitializedValue && this._initializeValue(), f(t)) {
      const n = t;
      if (!ot(e)) throw new TypeError("Headers.addAll signature must be (string, string[]) or (HeadersObject)");
      Bo(e, t => {
        this.add(n, t);
      });
    } else {
      const r = t;
      Bo(m(r), e => {
        var t = r[e];
        bt(t) ? Bo(t, t => {
          this.add(e, t);
        }) : void 0 !== t && this.add(e, t);
      });
    }
  }
  remove(t) {
    this._uninitializedValue && this._initializeValue(), t = t.toLowerCase();
    var e = this.getValue(t),
      n = _objectSpread({}, this._value);
    return n && R(n, t) && delete n[t], this._value = n, e;
  }
  set(t, e) {
    this._uninitializedValue && this._initializeValue(), t = t.toLowerCase(), void 0 === this._value ? this._value = {
      [t]: e
    } : this._value = _objectSpread(_objectSpread({}, this._value), {}, {
      [t]: e
    });
  }
  setAll(e) {
    this._uninitializedValue && this._initializeValue(), Bo(m(e), t => {
      this.set(t, e[t]);
    });
  }
  valueOf() {
    var _this$_value;
    return this._uninitializedValue && this._initializeValue(), (_this$_value = this._value) !== null && _this$_value !== void 0 ? _this$_value : void 0;
  }
  toJSON() {
    return this.valueOf();
  }
  toString() {
    this._uninitializedValue && this._initializeValue();
    const n = this._value;
    var t;
    return !n || this.isEmpty() ? "Headers()" : (t = m(n), `Headers(${p(t, t => {
      const e = n[t];
      return e ? ot(e) ? t + ": " + e.map(() => 0 <= e.indexOf(";") || 0 <= e.indexOf(",") ? `"${e}"` : e).join(", ") : 0 <= e.indexOf(";") ? `${t}: "${e}"` : t + ": " + e : "" + t;
    }).join("; ")})`);
  }
  clone() {
    return this._uninitializedValue && this._initializeValue(), new ta(this._value ? _objectSpread({}, this._value) : void 0);
  }
}
class ea {
  static create(t, e) {
    return new ea(t, e);
  }
  constructor(t, e) {
    _defineProperty(this, "_ai", void 0);
    _defineProperty(this, "_pkg", void 0);
    this._ai = t, this._pkg = e;
  }
  async main(t) {
    if (0 === t.length) return T.USAGE;
    var [t, ...e] = t;
    switch (t) {
      case "ai":
        return this._ai.main(e);
      case "pkg":
        return this._pkg.main(e);
    }
    return console.error("Unknown command: " + t), T.COMMAND_NOT_FOUND;
  }
  async ai(t) {
    return this._ai.main(t);
  }
}
const na = !("production" === (Ks = (_Rt = Rt("production")) !== null && _Rt !== void 0 ? _Rt : "development") || "test" === Ks);
r = Array.prototype, Es = r.join, ws = t(function (t, e) {
  return null == t ? "" : Es.call(t, e);
});
class ra {
  static getKeyValuePairs(e) {
    return p(ra.getKeys(e), t => [t, e[t]]);
  }
  static getValues(e) {
    return p(ra.getKeys(e), t => e[t]);
  }
  static getKeys(t) {
    return y(Object.keys(t), t => !t || "0123456789".indexOf(t[0]) < 0);
  }
  static createFilteredKeysFromValues(t, e) {
    return p(y(ra.getKeyValuePairs(t), t => e.includes(t[1])), t => t[0]);
  }
}
bs = {
  DAVINCI: "text-davinci-003",
  DAVINCI_EDIT_TEXT: "text-davinci-edit-001",
  DAVINCI_EDIT_CODE: "code-davinci-edit-001",
  CURIE: "text-curie-001",
  BABBAGE: "text-babbage-001",
  ADA: "text-ada-001",
  CONTENT_FILTER: "content-filter-alpha",
  CODEX: "code-davinci-002",
  GPT_4: "gpt-4",
  GPT_4_32K: "gpt-4-32k",
  GPT_3_5_TURBO: "gpt-3.5-turbo",
  GPT_3_5_TURBO_16K: "gpt-3.5-turbo-16k"
}, ms = Xt, Rs = Qt, Ts = (o = lu && lu.isRegExp) ? zs(o) : function (t) {
  return Rs(t) && "[object RegExp]" == ms(t);
}, As = Ae, Ss = gi, Os = n, xs = A, Cs = Ts, Ns = S, Ps = O, Ls = t(function (t, e, n) {
  return n && "number" != typeof n && xs(t, e, n) && (e = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (t = Ps(t)) && ("string" == typeof e || null != e && !Cs(e)) && !(e = As(e)) && Os(t) ? Ss(Ns(t), 0, n) : t.split(e, n) : [];
});
const ia = "TypeScript",
  oa = bs.DAVINCI,
  sa = bs.DAVINCI,
  ua = bs.DAVINCI_EDIT_CODE,
  aa = bs.DAVINCI_EDIT_CODE,
  L = C.createLogger("HgAiCommandServiceImpl");
class ca {
  static setLogLevel(t) {
    L.setLogLevel(t);
  }
  constructor(t) {
    _defineProperty(this, "_iterations", void 0);
    _defineProperty(this, "_client", void 0);
    _defineProperty(this, "_suffix", void 0);
    _defineProperty(this, "_language", void 0);
    _defineProperty(this, "_model", void 0);
    _defineProperty(this, "_echo", void 0);
    _defineProperty(this, "_user", void 0);
    _defineProperty(this, "_stop", void 0);
    _defineProperty(this, "_logProbs", void 0);
    _defineProperty(this, "_bestOf", void 0);
    _defineProperty(this, "_maxTokens", void 0);
    _defineProperty(this, "_n", void 0);
    _defineProperty(this, "_frequencyPenalty", void 0);
    _defineProperty(this, "_presencePenalty", void 0);
    _defineProperty(this, "_topP", void 0);
    _defineProperty(this, "_temperature", void 0);
    this._client = t;
  }
  setIterations(t) {
    this._iterations = t;
  }
  getIterations() {
    return this._iterations;
  }
  setLanguage(t) {
    this._language = t;
  }
  getLanguage() {
    return this._language;
  }
  setSuffix(t) {
    this._suffix = t;
  }
  getSuffix() {
    return this._suffix;
  }
  setModel(t) {
    this._model = t;
  }
  getModel() {
    return this._model;
  }
  setStop(t) {
    this._stop = t;
  }
  getStop() {
    return this._stop;
  }
  setUser(t) {
    this._user = t;
  }
  getUser() {
    return this._user;
  }
  setLogProbs(t) {
    this._logProbs = t;
  }
  getLogProbs() {
    return this._logProbs;
  }
  setBestOf(t) {
    this._bestOf = t;
  }
  getBestOf() {
    return this._bestOf;
  }
  setPresencePenalty(t) {
    this._presencePenalty = t;
  }
  getPresencePenalty() {
    return this._presencePenalty;
  }
  setFrequencyPenalty(t) {
    this._frequencyPenalty = t;
  }
  getFrequencyPenalty() {
    return this._frequencyPenalty;
  }
  setEcho(t) {
    this._echo = t;
  }
  getEcho() {
    return this._echo;
  }
  setN(t) {
    this._n = t;
  }
  getN() {
    return this._n;
  }
  setTopP(t) {
    this._topP = t;
  }
  getTopP() {
    return this._topP;
  }
  setTemperature(t) {
    this._temperature = t;
  }
  getTemperature() {
    return this._temperature;
  }
  setMaxTokens(t) {
    this._maxTokens = t;
  }
  getMaxTokens() {
    return this._maxTokens;
  }
  async main(e) {
    if (0 === e.length) return T.USAGE;
    try {
      var [t, ...n] = e;
      switch (t) {
        case "c":
        case "comp":
        case "completion":
          return await this.completion(n);
        case "e":
        case "edit":
          return await this.edit(n);
        case "t":
        case "test":
          return await this.test(n);
        case "d":
        case "doc":
        case "document":
          return await this.document(n);
        case "dd":
        case "desc":
        case "describe":
          return await this.describe(n);
        case "cl":
        case "changelog":
          return await this.changelog(n);
      }
      return console.error("Unknown command: " + t), T.COMMAND_NOT_FOUND;
    } catch (t) {
      if (Ct(e = t === null || t === void 0 ? void 0 : t.body)) return console.error(`ERROR: [${e.error.type}] ` + e.error.message), T.GENERAL_ERRORS;
      throw t;
    }
  }
  async test(t) {
    var _this$_language, _e10, _It;
    var e;
    return void 0 === this._model && this.setModel(ua), void 0 === this._n && this.setN(1), void 0 === this._temperature && this.setTemperature(0), e = (_this$_language = this._language) !== null && _this$_language !== void 0 ? _this$_language : ia, L.debug("test: language: ", e), e = Ut(`// {{LANG}}
// Write test cases.
// Framework: {{FRAMEWORK}}

{{EXAMPLES}}`, {
      "{{LANG}}": (_e10 = e) !== null && _e10 !== void 0 ? _e10 : "TypeScript",
      "{{FRAMEWORK}}": "Jest",
      "{{EXAMPLES}}": (_It = It("ExampleClassName", "exampleMethodName", "should ...")) !== null && _It !== void 0 ? _It : It()
    }), this.edit([e, ...t]);
  }
  async document(t) {
    var _this$_language2, _e11, _await$this$_populate, _e12, _n2, _n3;
    if (0 === t.length) return T.USAGE;
    L.debug("document: args: ", t);
    var e = (_this$_language2 = this._language) !== null && _this$_language2 !== void 0 ? _this$_language2 : ia,
      n = (L.debug("document: language: ", e), L.debug("document: framework: ", "JSDoc"), void 0 === this._model && this.setModel(aa), void 0 === this._n && this.setN(1), void 0 === this._temperature && this.setTemperature(.1), void 0 === this._topP && this.setTopP(.9), void 0 === this._iterations && this.setIterations(4), Ut(`Let's go step by step.
Document the public interface from the following {{LANGUAGE}} code using {{FRAMEWORK}}.
Include the source code unmodified.

{{EXAMPLES}}
`, {
        "{{LANGUAGE}}": (_e11 = e) !== null && _e11 !== void 0 ? _e11 : "TypeScript",
        "{{FRAMEWORK}}": "JSDoc",
        "{{EXAMPLES}}": (_await$this$_populate = (await this._populateFiles(t)).join("\n\n")) !== null && _await$this$_populate !== void 0 ? _await$this$_populate : ""
      })),
      n = (L.debug("document: aiDocumentPrompt: ", n), await this._client.getCompletion(n, oa, 3600, .1, .9, this._frequencyPenalty, this._presencePenalty)),
      {
        textChoice: n,
        hasText: r
      } = (L.debug("result = ", n), this._parseCompletionResponse(n)),
      e = Ut(`Let's go step by step.
Improve the {{FRAMEWORK}} documentations from the following {{LANG}} code:`, {
        "{{LANG}}": (_e12 = e) !== null && _e12 !== void 0 ? _e12 : "TypeScript",
        "{{FRAMEWORK}}": "JSDoc"
      });
    if (0 === t.length) throw new TypeError("No args detected anymore");
    return r ? this.edit([e + ((_n2 = n) !== null && _n2 !== void 0 && _n2.text ? "\n\n" + ((_n3 = n) === null || _n3 === void 0 ? void 0 : _n3.text) : ""), ...t]) : this.edit([e, ...t]);
  }
  async describe(t) {
    var _this$_language3, _e13;
    var e;
    if (0 === t.length) return T.USAGE;
    L.debug("describe: args: ", t), void 0 === this._model && this.setModel(oa), void 0 === this._maxTokens && this.setMaxTokens(3600), void 0 === this._temperature && this.setTemperature(.1), void 0 === this._topP && this.setTopP(.9), e = (_this$_language3 = this._language) !== null && _this$_language3 !== void 0 ? _this$_language3 : ia, L.debug("describe: language: ", e);
    let n = !1;
    if ("verbose" === t[0]) {
      var [, ...r] = t;
      if (t = r, n = !0, 0 === t.length) return T.USAGE;
      L.debug("describe: params: ", t, n);
    }
    return r = Ut(n ? `Let's go step by step.
Describe in detail what this {{LANG}} does?` : `Let's go step by step.
Describe what this {{LANG}} does?`, {
      "{{LANG}}": (_e13 = e) !== null && _e13 !== void 0 ? _e13 : "TypeScript"
    }), L.debug("describe: instruction: ", r), this.completion([r, ...t]);
  }
  async changelog(t) {
    var e, o, n, r;
    if (0 === t.length) return T.USAGE;
    L.debug("changelog: args: ", t), void 0 === this._model && this.setModel(sa), void 0 === this._maxTokens && this.setMaxTokens(2e3), void 0 === this._temperature && this.setTemperature(.1), void 0 === this._topP && this.setTopP(.9), e = "Write a change log for the following commit diff:", L.debug(`changelog: instruction: "${e}"`), L.debug('changelog: aiChunkSize size of "6000"');
    let i = "";
    if (o = (await this._populateFiles(t)).join("\n"), L.debug(`changelog: diff size of "${o.length}"`), 0 !== o.length && (n = us(function () {
      var t,
        e = [];
      let n = "",
        r = null;
      for (const i of Ls(o, "\n")) uo(i, "diff --git") ? (n && e.push(n), n = i + "\n", r = null) : uo(i, "@@") ? ((t = function (t) {
        if ((r = /^@@ -(\d+),\d+ \+(\d+)(,\d+)? @@/.exec(t)) && 3 <= r.length) {
          var [, e, n] = r,
            e = Q(e),
            n = Q(n);
          if (void 0 !== e && void 0 !== n) return {
            oldStart: e,
            oldLines: 0,
            newStart: n,
            newLines: 0
          };
        }
        if ((r = /^@@ -(\d+) \+(\d+)(,\d+)? @@/.exec(t)) && 3 <= r.length) {
          var [, e, n] = r,
            t = Q(e),
            r = Q(n);
          if (void 0 !== t && void 0 !== r) return {
            oldStart: t,
            oldLines: 0,
            newStart: r,
            newLines: 0
          };
        }
        return null;
      }(i)) && (r = t), n += i + "\n") : r || uo(i, "-") ? (n += i + "\n", r && (uo(i, "-") ? r.oldLines-- : (uo(i, "+") || r.oldLines--, r.newLines--))) : n += i + "\n";
      return n && e.push(n.substring(0, n.length - 1)), e;
    }(), (t, e) => 6e3 < e.length ? [...t, ...function (e) {
      var n = [];
      for (let t = 0; t < e.length; t += 6e3) n.push(e.slice(t, t + 6e3));
      return n;
    }(e)] : [...t, e], []), L.debug(`changelog: chunks size of "${n.length}"`), 0 !== n.length)) for (; void 0 !== (r = n.shift()) && (L.debug(`changelog: processing chunk size of "${r.length}"`), 0 !== i.length && 6e3 < i.length + r.length && (L.debug(`changelog: Sending "${i.length}" characters to completion`), await this.completion([e, i]), i = ""), i += r), 6e3 <= i.length && (L.debug(`changelog: Sending ${i.length} characters to completion`), await this.completion([e, i]), i = ""), n.length;);
    return T.OK;
  }
  async edit(t) {
    var e, n, r, i, o, s, u;
    if (0 === t.length) return T.USAGE;
    var [t, ...a] = await this._populateFiles(t),
      a = a.join("\n\n"),
      c = this._model,
      l = this._temperature,
      h = this._topP,
      f = this._n,
      d = void 0 !== c,
      p = void 0 !== f,
      g = void 0 !== l,
      _ = void 0 !== h;
    try {
      var _i$text, _i2;
      return e = await (_ ? this._client.getEdit(t, a, c, f, l, h) : g ? this._client.getEdit(t, a, c, f, l) : p ? this._client.getEdit(t, a, c, f) : d ? this._client.getEdit(t, a, c) : this._client.getEdit(t, a)), n = y(e.choices, t => !Nt(t)), o = void 0 !== (i = (r = y(e.choices, t => Nt(t))).shift()), s = !!n.length, u = !!r.length, o && console.log((_i$text = (_i2 = i) === null || _i2 === void 0 ? void 0 : _i2.text) !== null && _i$text !== void 0 ? _i$text : ""), u && console.warn("Alternative choices: " + JSON.stringify(r, null, 2)), s && console.error("Other items detected: " + JSON.stringify(n, null, 2)), !s && o ? T.OK : T.GENERAL_ERRORS;
    } catch (t) {
      if (Ct(t)) return console.error(`Error: [${t.error.type}]: ` + t.error.message), T.GENERAL_ERRORS;
      throw t;
    }
  }
  async completion(t) {
    if (0 === t.length) return T.USAGE;
    L.debug("args = ", t), t = (await this._populateFiles(t)).join("\n\n"), L.debug(`prompt = "${t}"`);
    try {
      var e = await this._client.getCompletion(t, this._model, this._maxTokens, this._temperature, this._topP, this._frequencyPenalty, this._presencePenalty),
        {
          errorChoices: n,
          alternativeTexts: r,
          textChoice: i,
          hasText: o,
          hasErrors: s,
          hasAlternativeTexts: u
        } = (L.debug("result = ", e), this._parseCompletionResponse(e));
      if (o) {
        var _i$text2, _i$text3;
        if ("stop" !== (i === null || i === void 0 ? void 0 : i.finish_reason)) return console.warn(`Warning! Partial response: "${(_i$text2 = i === null || i === void 0 ? void 0 : i.text) !== null && _i$text2 !== void 0 ? _i$text2 : ""}"`), console.error('Error: Please increase "maxTokens" property to get complete response.'), T.GENERAL_ERRORS;
        console.log((_i$text3 = i === null || i === void 0 ? void 0 : i.text) !== null && _i$text3 !== void 0 ? _i$text3 : "");
      }
      return u && console.warn("Alternative choices: " + JSON.stringify(r, null, 2)), s && console.error("Other items detected: " + JSON.stringify(n, null, 2)), !s && o ? T.OK : T.GENERAL_ERRORS;
    } catch (t) {
      if (Ct(t)) return console.error(`Error: [${t.error.type}]: ` + t.error.message), T.GENERAL_ERRORS;
      throw t;
    }
  }
  async _populateFiles(t) {
    return p(t, t => nu.existsSync(t) ? nu.readFileSync(t, {
      encoding: "utf8"
    }).toString() : t);
  }
  _parseCompletionResponse(t) {
    var e = y(t.choices, t => !Lt(t)),
      n = (t = y(t.choices, t => Lt(t))).shift();
    return {
      errorChoices: e,
      alternativeTexts: t,
      textChoice: n,
      hasText: void 0 !== n,
      hasErrors: !!e.length,
      hasAlternativeTexts: !!t.length
    };
  }
}
class la {
  getName() {
    return this._name;
  }
  constructor(t) {
    _defineProperty(this, "_name", void 0);
    _defineProperty(this, "_callbacks", void 0);
    this._name = t, this._callbacks = {};
  }
  static create(t) {
    return new la(t);
  }
  destroy() {
    this._name = void 0, this._callbacks = void 0;
  }
  hasCallbacks(t) {
    return R(this._callbacks, t);
  }
  triggerEvent(e, ...n) {
    var t;
    this.hasCallbacks(e) ? (t = this._callbacks[e], Bo(t, t => {
      try {
        t(e, ...n);
      } catch (t) {
        console.error(`Observer "${this._name}" and the event handler for "${e.toString()}" returned an exception: `, t);
      }
    })) : console.warn(`Warning! The observer for "${this._name}" did not have anything listening "${e.toString()}"`);
  }
  listenEvent(t, e) {
    return this.hasCallbacks(t) ? this._callbacks[t].push(e) : this._callbacks[t] = [e], () => this.removeListener(t, e);
  }
  removeListener(t, n) {
    if (this.hasCallbacks(t)) {
      let e = !1;
      this._callbacks[t] = y(this._callbacks[t], t => !(!e && t === n && (e = !0))), 0 === this._callbacks[t].length && delete this._callbacks[t], e || console.warn(`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`);
    } else console.warn(`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${t.toString()}"`);
  }
  async waitForEvent(i, o) {
    await new Promise((n, r) => {
      try {
        let t = void 0,
          e = void 0;
        t = setTimeout(() => {
          try {
            t = void 0, e && (e(), e = void 0), n();
          } catch (t) {
            r(t);
          }
        }, o), e = this.listenEvent(i, () => {
          try {
            t && (clearTimeout(t), t = void 0), e && (e(), e = void 0), n();
          } catch (t) {
            r(t);
          }
        });
      } catch (t) {
        r(t);
      }
    });
  }
}
(E = s = {
  Continue: 100,
  100: "Continue",
  SwitchingProtocols: 101,
  101: "SwitchingProtocols",
  Processing: 102,
  102: "Processing",
  CheckPoint: 103,
  103: "CheckPoint",
  OK: 200,
  200: "OK",
  Created: 201,
  201: "Created",
  Accepted: 202,
  202: "Accepted",
  NonAuthoritativeInformation: 203,
  203: "NonAuthoritativeInformation",
  NoContent: 204,
  204: "NoContent",
  ResetContent: 205,
  205: "ResetContent",
  PartialContent: 206,
  206: "PartialContent",
  MultiStatus: 207,
  207: "MultiStatus",
  AlreadyReported: 208,
  208: "AlreadyReported",
  IMUsed: 226,
  226: "IMUsed",
  MultipleChoices: 300,
  300: "MultipleChoices",
  MovedPermanently: 301,
  301: "MovedPermanently",
  Found: 302,
  302: "Found",
  SeeOther: 303,
  303: "SeeOther",
  NotModified: 304,
  304: "NotModified",
  TemporaryRedirect: 307,
  307: "TemporaryRedirect",
  PermanentRedirect: 308,
  308: "PermanentRedirect",
  BadRequest: 400,
  400: "BadRequest",
  Unauthorized: 401,
  401: "Unauthorized",
  PaymentRequired: 402,
  402: "PaymentRequired",
  Forbidden: 403,
  403: "Forbidden",
  NotFound: 404,
  404: "NotFound",
  MethodNotAllowed: 405,
  405: "MethodNotAllowed",
  NotAcceptable: 406,
  406: "NotAcceptable",
  ProxyAuthenticationRequired: 407,
  407: "ProxyAuthenticationRequired",
  RequestTimeout: 408,
  408: "RequestTimeout",
  Conflict: 409,
  409: "Conflict",
  Gone: 410,
  410: "Gone",
  LengthRequired: 411,
  411: "LengthRequired",
  PreconditionFailed: 412,
  412: "PreconditionFailed",
  PayloadTooLarge: 413,
  413: "PayloadTooLarge",
  URITooLong: 414,
  414: "URITooLong",
  UnsupportedMediaType: 415,
  415: "UnsupportedMediaType",
  RequestedRangeNotSatisfiable: 416,
  416: "RequestedRangeNotSatisfiable",
  ExpectationFailed: 417,
  417: "ExpectationFailed",
  IAmATeapot: 418,
  418: "IAmATeapot",
  UnprocessableEntity: 422,
  422: "UnprocessableEntity",
  Locked: 423,
  423: "Locked",
  FailedDependency: 424,
  424: "FailedDependency",
  TooEarly: 425,
  425: "TooEarly",
  UpgradeRequired: 426,
  426: "UpgradeRequired",
  PreconditionRequired: 428,
  428: "PreconditionRequired",
  TooManyRequests: 429,
  429: "TooManyRequests",
  RequestHeaderFieldsTooLarge: 431,
  431: "RequestHeaderFieldsTooLarge",
  UnavailableForLegalReasons: 451,
  451: "UnavailableForLegalReasons",
  InternalError: 500,
  500: "InternalError",
  InternalServerError: 500
})[500] = "InternalServerError", E[E.NotImplemented = 501] = "NotImplemented", E[E.BadGateway = 502] = "BadGateway", E[E.ServiceUnavailable = 503] = "ServiceUnavailable", E[E.GatewayTimeout = 504] = "GatewayTimeout", E[E.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", E[E.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", E[E.InsufficientStorage = 507] = "InsufficientStorage", E[E.LoopDetected = 508] = "LoopDetected", E[E.BandwidthLimitExceeded = 509] = "BandwidthLimitExceeded", E[E.NotExtended = 510] = "NotExtended", E[E.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", js = {
  ERROR: "error"
};
class ha extends Error {
  constructor(t, e = void 0, n = void 0, r = void 0, i = void 0, o = void 0) {
    (super(e || kt(t)), _defineProperty(this, "status", void 0), _defineProperty(this, "method", void 0), _defineProperty(this, "url", void 0), _defineProperty(this, "body", void 0), _defineProperty(this, "headers", void 0), _defineProperty(this, "__proto__", void 0)), e = new.target.prototype, Object.setPrototypeOf ? Object.setPrototypeOf(this, e) : this.__proto__ = e, this.status = t, this.method = n, this.url = r, this.body = i, this.headers = o;
  }
  valueOf() {
    return this.status;
  }
  toString() {
    return this.status + " " + this.message;
  }
  toJSON() {
    return {
      type: js.ERROR,
      status: this.status,
      message: this.message,
      method: this.method,
      url: this.url,
      body: this.body,
      headers: this.headers ? this.headers.toJSON() : void 0
    };
  }
  getStatusCode() {
    return this.status;
  }
  getMethod() {
    return this.method;
  }
  getUrl() {
    return this.url;
  }
  getBody() {
    return this.body;
  }
  getHeaders() {
    return this.headers;
  }
  static create(t, e = void 0) {
    return new ha(t, e);
  }
  static createBadRequestError(t) {
    return Dt(s.BadRequest, t);
  }
  static createNotFoundRequestError(t) {
    return Dt(s.NotFound, t);
  }
  static createMethodNotAllowedRequestError(t) {
    return Dt(s.MethodNotAllowed, t);
  }
  static createConflictRequestError(t) {
    return Dt(s.Conflict, t);
  }
  static createInternalErrorRequestError(t) {
    return Dt(s.InternalServerError, t);
  }
  static throwBadRequestError(t) {
    throw ha.createBadRequestError(t);
  }
  static throwNotFoundRequestError(t) {
    throw ha.createNotFoundRequestError(t);
  }
  static throwMethodNotAllowedRequestError(t) {
    throw ha.createMethodNotAllowedRequestError(t);
  }
  static throwConflictRequestError(t) {
    throw ha.createConflictRequestError(t);
  }
  static throwInternalErrorRequestError(t) {
    throw ha.createInternalErrorRequestError(t);
  }
}
const fa = C.createLogger("HttpService");
qs = {
  REQUEST_STARTED: "HttpService:requestStarted",
  REQUEST_STOPPED: "HttpService:requestStopped"
};
class da {
  static setLogLevel(t) {
    fa.setLogLevel(t), P.setLogLevel(t);
  }
  static setRequestLimit(t) {
    this._requestLimit = t;
  }
  static setDefaultRetryLimit(t) {
    this._defaultRetryDelay = t;
  }
  static setBaseUrl(t) {
    this._baseApiUrl = t;
  }
  static on(t, e) {
    return this._observer.listenEvent(t, e);
  }
  static destroy() {
    this._observer.destroy();
  }
  static hasOpenRequests() {
    return 1 <= this._requestCount;
  }
  static getRequestCount() {
    return this._requestCount;
  }
  static async waitUntilNoOpenRequests() {
    if (this.hasOpenRequests()) return fa.debug("waitUntilNoOpenRequests: Let's wait until no requests"), new Promise((e, n) => {
      try {
        let t = this.on(qs.REQUEST_STOPPED, () => {
          try {
            this.hasOpenRequests() ? fa.debug(`waitUntilNoOpenRequests: We still have ${this.getRequestCount()} requests`) : (fa.debug("waitUntilNoOpenRequests: No requests anymore. We're ready!"), t(), t = void 0, e());
          } catch (t) {
            fa.debug("waitUntilNoOpenRequests: Canceling waiting: error: ", t), n(t);
          }
        });
      } catch (t) {
        fa.debug("waitUntilNoOpenRequests: Canceling waiting: error: ", t), n(t);
      }
    });
    fa.debug("No open requests to wait");
  }
  static _prepareUrl(t) {
    return this._baseApiUrl && t.startsWith("/api") ? "" + this._baseApiUrl + t.substring("/api".length) : t;
  }
  static async _request(e, n, r, i, o, s, u) {
    var _ref3, _u2, _s2;
    var a, c, l, h, f, d, p;
    if (u = (_ref3 = (_u2 = u) !== null && _u2 !== void 0 ? _u2 : o === null || o === void 0 ? void 0 : o.baseDelay) !== null && _ref3 !== void 0 ? _ref3 : this._defaultRetryDelay, 0 === (s = (_s2 = s) !== null && _s2 !== void 0 ? _s2 : 0) && this._requestCount >= this._requestLimit) throw new TypeError(e + ": Too many requests: " + this._requestCount);
    try {
      return 0 === s ? (this._requestCount += 1, this._observer.hasCallbacks(qs.REQUEST_STARTED) && this._observer.triggerEvent(qs.REQUEST_STARTED, r, n), fa.debug(`Started ${n} request to "${r} "(${this._requestCount} requests)`)) : fa.debug(`Started attempt ${s} for ${n} request to "${r} "(${this._requestCount} requests)`), await i();
    } catch (t) {
      if (a = t === null || t === void 0 ? void 0 : t.code, c = Ft(t) ? t.status : 0, o) {
        if (f = n, d = c, p = a, s >= (h = o).maxAttempts || !gt(h.onMethod, t => t === f) || !(gt(h.onStatus, t => {
          var [t, e] = t;
          return t <= d && d <= e;
        }) || void 0 !== p && gt(h.onCode, t => t === p))) throw t;
        return fa.warn(`Error in ${n} "${r}": ${t} ${a} ` + c), fa.debug(`Waiting next attempt for ${n} request to "${r} "(${this._requestCount} requests)`), await this._waitForRetry(u), l = u, l += o === null || o === void 0 ? void 0 : o.increasingDelayStep, u = void 0 !== (o === null || o === void 0 ? void 0 : o.maxDelay) && l > o.maxDelay ? o.maxDelay : l, await this._request(e, n, r, i, o, s + 1, u);
      }
      throw t;
    } finally {
      0 === s && (--this._requestCount, this._observer.hasCallbacks(qs.REQUEST_STOPPED) && this._observer.triggerEvent(qs.REQUEST_STOPPED, r, n), fa.debug(`Stopped ${n} request to "${r}" (${this._requestCount} requests)`));
    }
  }
  static async _waitForRetry(n) {
    return fa.debug("Waiting for retry time: ", n), new Promise((t, e) => {
      try {
        setTimeout(() => {
          t();
        }, n);
      } catch (t) {
        e(t);
      }
    });
  }
  static async getJson(t, e, n) {
    return t = this._prepareUrl(t), this._request("getJson", "GET", t, async () => P.getJson(t, e), n);
  }
  static async postJson(t, e, n, r) {
    return t = this._prepareUrl(t), this._request("postJson", "POST", t, async () => P.postJson(t, e, n), r);
  }
  static async deleteJson(t, e, n) {
    return t = this._prepareUrl(t), this._request("deleteJson", "DELETE", t, async () => P.deleteJson(t, e), n);
  }
  static async getText(t, e, n) {
    return t = this._prepareUrl(t), this._request("getText", "GET", t, async () => P.getText(t, e), n);
  }
  static async postText(t, e, n, r) {
    return t = this._prepareUrl(t), this._request("postText", "POST", t, async () => P.postText(t, e, n), r);
  }
  static async deleteText(t, e, n) {
    return t = this._prepareUrl(t), this._request("deleteText", "DELETE", t, async () => P.deleteText(t, e), n);
  }
  static async getJsonEntity(t, e, n) {
    return t = this._prepareUrl(t), this._request("getJsonEntity", "GET", t, async () => P.getJsonEntity(t, e), n);
  }
  static async postJsonEntity(t, e, n, r) {
    return t = this._prepareUrl(t), this._request("postJsonEntity", "POST", t, async () => P.postJsonEntity(t, e, n), r);
  }
  static async deleteJsonEntity(t, e, n) {
    return t = this._prepareUrl(t), this._request("deleteJsonEntity", "DELETE", t, async () => P.deleteJsonEntity(t, e), n);
  }
  static async getTextEntity(t, e, n) {
    return t = this._prepareUrl(t), this._request("getTextEntity", "GET", t, async () => P.getTextEntity(t, e), n);
  }
  static async postTextEntity(t, e, n, r) {
    return t = this._prepareUrl(t), this._request("postTextEntity", "POST", t, async () => P.postTextEntity(t, e, n), r);
  }
  static async deleteTextEntity(t, e, n) {
    return t = this._prepareUrl(t), this._request("deleteTextEntity", "DELETE", t, async () => P.deleteTextEntity(t, e), n);
  }
}
_defineProperty(da, "_defaultRetryDelay", 1e3);
_defineProperty(da, "_requestLimit", 100);
_defineProperty(da, "_baseApiUrl", void 0);
_defineProperty(da, "_requestCount", 0);
_defineProperty(da, "_observer", new la("HttpService"));
_defineProperty(da, "Event", qs);
class pa {
  static createBasicHeader(t) {
    return "Basic " + t;
  }
  static createBasicHeaderTokenWithUserAndPassword(t, e) {
    return btoa(unescape(encodeURIComponent(t) + ":" + encodeURIComponent(e)));
  }
  static createBasicHeaderWithUserAndPassword(t, e) {
    return pa.createBasicHeader(pa.createBasicHeaderTokenWithUserAndPassword(t, e));
  }
  static parseBasicToken(t) {
    if (uo(t, "Basic ")) return qi(t.substring("Basic ".length));
  }
  static createBearerHeader(t) {
    return "Bearer " + t;
  }
  static parseBearerToken(t) {
    if (uo(t, "Bearer ")) return qi(t.substring("Bearer ".length));
  }
}
(Hs = Us = Us || {}).USER = "user", Hs.SYSTEM = "system", Hs.ASSISTANT = "assistant", Hs.FUNCTION = "function";
const ga = C.createLogger("HttpOpenAiClient");
class _a {
  static setLogLevel(t) {
    ga.setLogLevel(t), da.setLogLevel(t);
  }
  static setDefaultUrl(t) {
    this._defaultUrl = t;
  }
  static getDefaultUrl() {
    return this._defaultUrl;
  }
  static create(t, e = _a._defaultUrl) {
    return new _a(t, e);
  }
  constructor(t, e = _a._defaultUrl) {
    _defineProperty(this, "_url", void 0);
    _defineProperty(this, "_apiKey", void 0);
    this._url = e, this._apiKey = t;
  }
  getUrl() {
    return this._url;
  }
  async getCompletion(t, e, n, r, i, o, s) {
    var _r2, _r3, _r4, _r5, _r6, _r7, _r8, _i3, _i4, _i5, _i6, _i7, _i8, _i9;
    if (t = function (t, e, n, r, i, o, s) {
      if (!f(t)) throw new TypeError("Invalid OpenAiCompletionRequestDTO.prompt: " + t);
      if (!f(e) && !J(e)) throw new TypeError("Invalid OpenAiCompletionRequestDTO.model: " + e);
      if (!K(n)) throw new TypeError("Invalid OpenAiCompletionRequestDTO.max_tokens: " + n);
      if (!K(r)) throw new TypeError("Invalid OpenAiCompletionRequestDTO.temperature: " + r);
      if (!K(i)) throw new TypeError("Invalid OpenAiCompletionRequestDTO.top_p: " + i);
      if (!K(o)) throw new TypeError("Invalid OpenAiCompletionRequestDTO.frequency_penalty: " + o);
      if (K(s)) return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        prompt: t,
        model: e !== null && e !== void 0 ? e : bs.DAVINCI
      }, h(n) ? {
        max_tokens: n
      } : {}), h(r) ? {
        temperature: r
      } : {}), h(i) ? {
        top_p: i
      } : {}), h(o) ? {
        frequency_penalty: o
      } : {}), h(s) ? {
        presence_penalty: s
      } : {});
      throw new TypeError("Invalid OpenAiCompletionRequestDTO.presence_penalty: " + s);
    }(t, e, n, r, i, o, s), e = _a._getHeaders(this._apiKey), ga.debug("getCompletion: body = ", t), a(r = n = await da.postJson(this._url + "/v1/completions", t, e)) && Tt(r, ["id", "object", "created", "model", "choices", "usage", "warning"]) && f((_r2 = r) === null || _r2 === void 0 ? void 0 : _r2.id) && f((_r3 = r) === null || _r3 === void 0 ? void 0 : _r3.object) && h((_r4 = r) === null || _r4 === void 0 ? void 0 : _r4.created) && f((_r5 = r) === null || _r5 === void 0 ? void 0 : _r5.model) && st((_r6 = r) === null || _r6 === void 0 ? void 0 : _r6.choices, jt) && $t((_r7 = r) === null || _r7 === void 0 ? void 0 : _r7.usage) && et((_r8 = r) === null || _r8 === void 0 ? void 0 : _r8.warning)) return ga.debug("getCompletion: result = ", n), n;
    throw ga.error("getCompletion: result = ", n), new TypeError("Result was not OpenAiCompletionResponseDTO: " + W([vt(i = n), St(i, ["id", "object", "created", "model", "choices", "usage", "warning"]), u("id", tt((_i3 = i) === null || _i3 === void 0 ? void 0 : _i3.id)), u("object", tt((_i4 = i) === null || _i4 === void 0 ? void 0 : _i4.object)), u("created", H((_i5 = i) === null || _i5 === void 0 ? void 0 : _i5.created)), u("model", tt((_i6 = i) === null || _i6 === void 0 ? void 0 : _i6.model)), u("choices", ut("OpenAiCompletionResponseChoice|OpenAiError", qt, (_i7 = i) === null || _i7 === void 0 ? void 0 : _i7.choices, jt)), u("usage", Mt((_i8 = i) === null || _i8 === void 0 ? void 0 : _i8.usage)), u("warning", nt((_i9 = i) === null || _i9 === void 0 ? void 0 : _i9.warning))]));
  }
  async getChatCompletion(t, e, n, r, i, o, s) {
    var _e14, _r9, _r10, _r11, _r12, _r13, _r14, _r15, _i10, _i11, _i12, _i13, _i14, _i15, _i16;
    if (t = {
      messages: [t],
      model: (_e14 = e) !== null && _e14 !== void 0 ? _e14 : bs.GPT_4,
      functions: void 0,
      max_tokens: n,
      temperature: r,
      top_p: i,
      frequency_penalty: o,
      presence_penalty: s,
      function_call: void 0,
      n: void 0,
      stream: void 0,
      stop: void 0,
      logit_bias: void 0,
      user: void 0
    }, e = _a._getHeaders(this._apiKey), ga.debug("getChatCompletion: body = ", t), a(r = n = await da.postJson(this._url + "/v1/chat/completions", t, e)) && Tt(r, ["id", "object", "created", "model", "choices", "usage", "warning"]) && f((_r9 = r) === null || _r9 === void 0 ? void 0 : _r9.id) && f((_r10 = r) === null || _r10 === void 0 ? void 0 : _r10.object) && h((_r11 = r) === null || _r11 === void 0 ? void 0 : _r11.created) && f((_r12 = r) === null || _r12 === void 0 ? void 0 : _r12.model) && st((_r13 = r) === null || _r13 === void 0 ? void 0 : _r13.choices, Wt) && $t((_r14 = r) === null || _r14 === void 0 ? void 0 : _r14.usage) && et((_r15 = r) === null || _r15 === void 0 ? void 0 : _r15.warning)) return ga.debug("getChatCompletion: result = ", n), n;
    throw ga.error("getChatCompletion: result = ", n), new TypeError("Result was not OpenAiChatCompletionResponseDTO: " + W([vt(i = n), St(i, ["id", "object", "created", "model", "choices", "usage", "warning"]), u("id", tt((_i10 = i) === null || _i10 === void 0 ? void 0 : _i10.id)), u("object", tt((_i11 = i) === null || _i11 === void 0 ? void 0 : _i11.object)), u("created", H((_i12 = i) === null || _i12 === void 0 ? void 0 : _i12.created)), u("model", tt((_i13 = i) === null || _i13 === void 0 ? void 0 : _i13.model)), u("choices", ut("OpenAiChatCompletionResponseChoice|OpenAiError", Jt, (_i14 = i) === null || _i14 === void 0 ? void 0 : _i14.choices, Wt)), u("usage", Mt((_i15 = i) === null || _i15 === void 0 ? void 0 : _i15.usage)), u("warning", nt((_i16 = i) === null || _i16 === void 0 ? void 0 : _i16.warning))]));
  }
  async getEdit(t, e, n, r, i, o) {
    var _r16, _r17, _r18, _r19, _i17, _i18, _i19, _o2, _o3, _o4, _o5, _t2, _t3, _t4;
    if (t = function (t, e, n, r, i, o) {
      if (!f(t)) throw new TypeError("Invalid OpenAiEditRequestDTO.instruction: " + t);
      if (!et(e)) throw new TypeError("Invalid OpenAiEditRequestDTO.input: " + e);
      if (!et(n)) throw new TypeError("Invalid OpenAiEditRequestDTO.model: " + n);
      if (!K(r)) throw new TypeError("Invalid OpenAiEditRequestDTO.n: " + r);
      if (!K(i)) throw new TypeError("Invalid OpenAiEditRequestDTO.temperature: " + i);
      if (K(o)) return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
        model: n !== null && n !== void 0 ? n : bs.DAVINCI_EDIT_TEXT,
        instruction: t
      }, f(e) ? {
        input: e
      } : {}), h(r) ? {
        n: r
      } : {}), h(i) ? {
        temperature: i
      } : {}), h(o) ? {
        top_p: o
      } : {});
      throw new TypeError("Invalid OpenAiEditRequestDTO.top_p: " + o);
    }(t, e, n, r, i, o), ga.debug("getEdit: body = ", t), e = _a._getHeaders(this._apiKey), a(r = n = await da.postJson(this._url + "/v1/edits", t, e)) && At(r, ["object", "created", "choices", "usage"]) && f((_r16 = r) === null || _r16 === void 0 ? void 0 : _r16.object) && h((_r17 = r) === null || _r17 === void 0 ? void 0 : _r17.created) && st((_r18 = r) === null || _r18 === void 0 ? void 0 : _r18.choices, Nt) && a(i = (_r19 = r) === null || _r19 === void 0 ? void 0 : _r19.usage) && At(i, ["prompt_tokens", "completion_tokens", "total_tokens"]) && h((_i17 = i) === null || _i17 === void 0 ? void 0 : _i17.prompt_tokens) && h((_i18 = i) === null || _i18 === void 0 ? void 0 : _i18.completion_tokens) && h((_i19 = i) === null || _i19 === void 0 ? void 0 : _i19.total_tokens)) return ga.debug("getEdit: result = ", n), n;
    throw ga.error("getEdit: result = ", n), new TypeError("Result was not OpenAiEditResponseDTO: " + W([vt(o = n), St(o, ["object", "created", "choices", "usage"]), u("object", tt((_o2 = o) === null || _o2 === void 0 ? void 0 : _o2.object)), u("created", H((_o3 = o) === null || _o3 === void 0 ? void 0 : _o3.created)), u("choices", ut("OpenAiEditResponseChoice", Pt, (_o4 = o) === null || _o4 === void 0 ? void 0 : _o4.choices, Nt)), u("usage", W([vt(t = (_o5 = o) === null || _o5 === void 0 ? void 0 : _o5.usage), Ot(t, ["prompt_tokens", "completion_tokens", "total_tokens"]), u("prompt_tokens", H((_t2 = t) === null || _t2 === void 0 ? void 0 : _t2.prompt_tokens)), u("completion_tokens", H((_t3 = t) === null || _t3 === void 0 ? void 0 : _t3.completion_tokens)), u("total_tokens", H((_t4 = t) === null || _t4 === void 0 ? void 0 : _t4.total_tokens))]))]));
  }
  static _getHeaders(t) {
    return {
      Authorization: pa.createBearerHeader(t)
    };
  }
}
_defineProperty(_a, "_defaultUrl", "https://api.openai.com");
class ya {
  static async getStreamDataAsBuffer(r) {
    return new Promise((t, e) => {
      const n = [];
      r.on("data", t => {
        try {
          n.push(t);
        } catch (t) {
          e(t);
        }
      }), r.on("end", () => {
        try {
          t(Buffer.concat(n));
        } catch (t) {
          e(t);
        }
      });
    });
  }
  static async getStreamDataAsString(t, e = "utf8") {
    return (await ya.getStreamDataAsBuffer(t)).toString(e);
  }
  static async getStreamDataAsFormUrlEncoded(t) {
    if ("" !== (t = await ya.getStreamDataAsString(t))) return uu.parse(t);
  }
  static async getStreamDataAsJson(t) {
    if ("" !== (t = await ya.getStreamDataAsString(t))) return JSON.parse(t);
  }
}
class va {
  static async getRequestDataAsBuffer(t) {
    return ya.getStreamDataAsBuffer(t);
  }
  static async getRequestDataAsString(t, e = "utf8") {
    return ya.getStreamDataAsString(t, e);
  }
  static async getRequestDataAsFormUrlEncoded(t) {
    return ya.getStreamDataAsFormUrlEncoded(t);
  }
  static async getRequestDataAsJson(t) {
    return ya.getStreamDataAsJson(t);
  }
}
Qs = "WINDOW" === (Xs = (_ref4 = (_process$env$NOR_REQU = (_process3 = process) === null || _process3 === void 0 || (_process3 = _process3.env) === null || _process3 === void 0 ? void 0 : _process3.NOR_REQUEST_CLIENT_MODE) !== null && _process$env$NOR_REQU !== void 0 ? _process$env$NOR_REQU : (_process4 = process) === null || _process4 === void 0 || (_process4 = _process4.env) === null || _process4 === void 0 ? void 0 : _process4.REACT_APP_REQUEST_CLIENT_MODE) !== null && _ref4 !== void 0 ? _ref4 : "") || !("undefined" == typeof window || !window.fetch), Ys = "NODE" === Xs || !Qs, Is = {
  TEXT: "text/plain",
  CALENDAR: "text/calendar",
  JSON: "application/json",
  X_WWW_FORM_URLENCODED: "application/x-www-form-urlencoded"
}, ks = Zi, Ds = Ae, Fs = Bi, $s = O, Ms = t(function (t, e, n) {
  var r;
  return t = $s(t), e = Ds(e), r = t.length, r = n = void 0 === n ? r : ks(Fs(n), 0, r), 0 <= (n -= e.length) && t.slice(n, r) == e;
});
class Ea {
  static toString(...t) {
    return p(t, t => V(t) ? "null" : "" + t).join("");
  }
  static processVariables(r, i, o, s, u = void 0) {
    return bt(r) ? p(r, t => Ea.processVariables(t, i, o, s, u)) : wt(r) ? us(m(r), (t, e) => {
      var n = r[e];
      return t["" + Ea.processVariables(e, i, o, s, u)] = Ea.processVariables(n, i, o, s, u), t;
    }, {}) : f(r) ? Ea.processVariablesInString(r, i, o, s, u) : r;
  }
  static isValidKeyword(t) {
    return !(t.length <= 0) && (!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(t[0]) || it(t, t => "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(t)));
  }
  static processVariablesInString(e, n, r, i, o = void 0) {
    var t, s, u, a, c, l;
    if (0 === e.length) return "";
    if (l = Z(n) ? n : t => Or(n, t, o), uo(e, r) && Ms(e, i)) {
      let t = e.substr(r.length, e.length - r.length - i.length);
      if (t.indexOf(r) < 0 && (t = qi(t), Ea.isValidKeyword(t))) return l(t);
    }
    let h = "",
      f = 0;
    for (; 0 <= f && f < e.length;) if (t = f, (f = e.indexOf(r, t)) < 0) h += e.substr(t), f = e.length;else {
      if (u = (s = f) + r.length, (c = e.indexOf(i, u)) < 0) throw new TypeError(`Parse error near "${e.substr(s).substr(0, 20)}". End of variable not detected.`);
      a = c + i.length, c = qi(e.substr(u, c - u)), f = (Ea.isValidKeyword(c) ? (u = l(c), h += "" + e.substr(t, s - t) + u) : h += "" + e.substr(t, a - t), a);
    }
    return h;
  }
  static formatNumber(t, e = " ", n = ".") {
    return t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, e).replace(/\./, n);
  }
  static endsWithCharacters(t, e) {
    var n = t.length;
    return !(1 <= n) || e.includes(t[n - 1]);
  }
  static startsWithCharacters(t, e) {
    return !(1 <= t.length) || e.includes(t[0]);
  }
  static hasOnlyCharacters(t, e) {
    return 0 === t.length || it(t, t => e.includes(t));
  }
  static validateStringCharacters(t, e = void 0, n = e, r = n, i = 0, o = void 0) {
    var _t$length2;
    var s = (_t$length2 = t === null || t === void 0 ? void 0 : t.length) !== null && _t$length2 !== void 0 ? _t$length2 : 0;
    return (void 0 === e || Ea.startsWithCharacters(t, e)) && (void 0 === n || Ea.hasOnlyCharacters(t.substring(1, s - 1), n)) && (void 0 === r || Ea.endsWithCharacters(t, r)) && i <= s && (void 0 === o || s <= o);
  }
}
class wa {
  constructor(t, e, n) {
    var _i20;
    _defineProperty(this, "_status", void 0);
    _defineProperty(this, "_headers", void 0);
    _defineProperty(this, "_body", void 0);
    let r, i, o;
    if (!Vt(t) || Vt(e) || Vt(n)) {
      if (Vt(e) && !Vt(n)) {
        if (void 0 !== n) throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");
        mt(t) ? i = t : o = t, r = e;
      } else {
        if (!Vt(n)) throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");
        if (!mt(e)) throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");
        o = t, i = e, r = n;
      }
    } else {
      if (r = t, void 0 !== e) throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");
      if (void 0 !== n) throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");
    }
    this._status = r, this._headers = (_i20 = i) !== null && _i20 !== void 0 ? _i20 : new ta(), this._body = o;
  }
  getStatusCode() {
    return this._status;
  }
  getStatusCodeValue() {
    return this._status;
  }
  status(t) {
    return this._status = t, this;
  }
  headers(t) {
    return mt(t) ? this._headers = t : this._headers = new ta(t), this;
  }
  body(t) {
    return this._body = t, this;
  }
  getHeaders() {
    return this._headers;
  }
  allow(...t) {
    return t = p(t, ft), t = p(t, t => ht(t).toUpperCase()), this._headers.set("Allow", t.join(", ")), this;
  }
  hasBody() {
    return void 0 !== this._body;
  }
  getBody() {
    if (void 0 === this._body) throw new TypeError("No body");
    return this._body;
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    var t = kt(this._status),
      e = (e = this._headers).isEmpty() ? "" : Ea.toString(e),
      n = this._body;
    return void 0 === n ? e ? `ResponseEntity(${t}, ${e})` : `ResponseEntity(${t})` : (n = Et(n) ? JSON.stringify(n, null, 2) : Ea.toString(n), e ? `ResponseEntity(${t}, ${e}, Body(${n}))` : `ResponseEntity(${t}, Body(${n}))`);
  }
  static accepted() {
    return new wa(s.Accepted);
  }
  static badRequest() {
    return new wa(s.BadRequest);
  }
  static created(t) {
    return new wa(new ta({
      Location: t
    }), s.Created);
  }
  static noContent() {
    return new wa(s.NoContent);
  }
  static notFound() {
    return new wa(s.NotFound);
  }
  static notImplemented() {
    return new wa(s.NotImplemented);
  }
  static internalServerError() {
    return new wa(s.InternalServerError);
  }
  static methodNotAllowed() {
    return new wa(s.MethodNotAllowed);
  }
  static unprocessableEntity() {
    return new wa(s.UnprocessableEntity);
  }
  static ok(t) {
    return void 0 !== t ? new wa(t, s.OK) : new wa(s.OK);
  }
}
const ba = Ys ? require("fs").promises : void 0,
  j = C.createLogger("NodeRequestClient");
class q {
  static setLogLevel(t) {
    j.setLogLevel(t);
  }
  constructor(t, e, n) {
    _defineProperty(this, "_http", void 0);
    _defineProperty(this, "_https", void 0);
    _defineProperty(this, "_defaultOptions", void 0);
    this._http = t, this._https = e, this._defaultOptions = n;
  }
  static create(t, e, n) {
    return new q(t, e, n);
  }
  async bufferRequest(t, e, n, r) {
    switch (t) {
      case i.GET:
        return this._bufferRequest(i.GET, e, n, r);
      case i.POST:
        return this._bufferRequest(i.POST, e, n, r);
      case i.PATCH:
        return this._bufferRequest(i.PATCH, e, n, r);
      case i.PUT:
        return this._bufferRequest(i.PUT, e, n, r);
      case i.DELETE:
        return this._bufferRequest(i.DELETE, e, n, r);
      default:
        throw new TypeError("NodeRequestClient: Unsupported method: " + t);
    }
  }
  async textRequest(t, e, n, r) {
    switch (t) {
      case i.GET:
        return this._textRequest(i.GET, e, n, r).then(q._successTextResponse);
      case i.POST:
        return this._textRequest(i.POST, e, n, r).then(q._successTextResponse);
      case i.PATCH:
        return this._textRequest(i.PATCH, e, n, r).then(q._successTextResponse);
      case i.PUT:
        return this._textRequest(i.PUT, e, n, r).then(q._successTextResponse);
      case i.DELETE:
        return this._textRequest(i.DELETE, e, n, r).then(q._successTextResponse);
      default:
        throw new TypeError("NodeRequestClient: Unsupported method: " + t);
    }
  }
  async jsonRequest(t, e, n, r) {
    switch (t) {
      case i.GET:
        return this._jsonRequest(i.GET, e, n, r).then(q._successJsonResponse);
      case i.POST:
        return this._jsonRequest(i.POST, e, n, r).then(q._successJsonResponse);
      case i.PATCH:
        return this._jsonRequest(i.PATCH, e, n, r).then(q._successJsonResponse);
      case i.PUT:
        return this._jsonRequest(i.PUT, e, n, r).then(q._successJsonResponse);
      case i.DELETE:
        return this._jsonRequest(i.DELETE, e, n, r).then(q._successJsonResponse);
      default:
        throw new TypeError("NodeRequestClient: Unsupported method: " + t);
    }
  }
  async textEntityRequest(t, e, n, r) {
    switch (t) {
      case i.GET:
        return this._textRequest(i.GET, e, n, r).then(q._successTextEntityResponse);
      case i.POST:
        return this._textRequest(i.POST, e, n, r).then(q._successTextEntityResponse);
      case i.PATCH:
        return this._textRequest(i.PATCH, e, n, r).then(q._successTextEntityResponse);
      case i.PUT:
        return this._textRequest(i.PUT, e, n, r).then(q._successTextEntityResponse);
      case i.DELETE:
        return this._textRequest(i.DELETE, e, n, r).then(q._successTextEntityResponse);
      default:
        throw new TypeError("NodeRequestClient: Unsupported method: " + t);
    }
  }
  async jsonEntityRequest(t, e, n, r) {
    switch (t) {
      case i.GET:
        return this._jsonRequest(i.GET, e, n, r).then(q._successJsonEntityResponse);
      case i.POST:
        return this._jsonRequest(i.POST, e, n, r).then(q._successJsonEntityResponse);
      case i.PATCH:
        return this._jsonRequest(i.PATCH, e, n, r).then(q._successJsonEntityResponse);
      case i.PUT:
        return this._jsonRequest(i.PUT, e, n, r).then(q._successJsonEntityResponse);
      case i.DELETE:
        return this._jsonRequest(i.DELETE, e, n, r).then(q._successJsonEntityResponse);
      default:
        throw new TypeError("NodeRequestClient: Unsupported method: " + t);
    }
  }
  async _bufferRequest(t, e, n, r, i) {
    let o = {
      method: q._getMethod(t),
      headers: _objectSpread({}, i ? {
        "Content-Type": i
      } : {})
    };
    return j.debug("_bufferRequest: options = ", o), n && (o = _objectSpread(_objectSpread({}, o), {}, {
      headers: _objectSpread(_objectSpread({}, o.headers), n)
    })), this._httpRequest(e, o, r);
  }
  async _textRequest(t, e, n, r, i) {
    var _n$statusCode, _n4;
    return n = await this._bufferRequest(t, e, n, r, i !== null && i !== void 0 ? i : Is.TEXT), r = await va.getRequestDataAsString(n), {
      method: t,
      url: e,
      statusCode: (_n$statusCode = (_n4 = n) === null || _n4 === void 0 ? void 0 : _n4.statusCode) !== null && _n$statusCode !== void 0 ? _n$statusCode : 0,
      headers: n.headers,
      body: r
    };
  }
  async _jsonRequest(t, e, n, r, i) {
    var _n$statusCode2, _n5;
    return n = await this._bufferRequest(t, e, n, r ? JSON.stringify(r) : void 0, i !== null && i !== void 0 ? i : Is.JSON), r = await va.getRequestDataAsJson(n), {
      method: t,
      url: e,
      statusCode: (_n$statusCode2 = (_n5 = n) === null || _n5 === void 0 ? void 0 : _n5.statusCode) !== null && _n$statusCode2 !== void 0 ? _n$statusCode2 : 0,
      headers: n.headers,
      body: r
    };
  }
  static _getMethod(t) {
    switch (t) {
      case i.OPTIONS:
        return "OPTIONS";
      case i.GET:
        return "GET";
      case i.POST:
        return "POST";
      case i.PUT:
        return "PUT";
      case i.DELETE:
        return "DELETE";
      case i.PATCH:
        return "PATCH";
      case i.TRACE:
        return "TRACE";
      case i.HEAD:
        return "HEAD";
    }
    throw new TypeError("Unknown method: " + t);
  }
  async _httpRequest(i, o, t) {
    var _u$protocol;
    var e;
    void 0 !== this._defaultOptions && (o = _objectSpread(_objectSpread({}, this._defaultOptions), o));
    const s = t || void 0,
      u = new su.URL(i);
    let a;
    const c = (_u$protocol = u === null || u === void 0 ? void 0 : u.protocol) !== null && _u$protocol !== void 0 ? _u$protocol : "";
    if ("unix:" === c || "socket:" === c) {
      if ("/" === (t = (u === null || u === void 0 ? void 0 : u.pathname) || "/")) throw new TypeError("No socket path found for unix protocol URL: " + i);
      if (!(e = await this._findSocketFile(t))) throw new TypeError("No socket path found for unix protocol URL: " + i);
      t = "" + (e.length < t.length ? t.substring(e.length) : "") + ("?" !== u.search ? u.search : ""), o = _objectSpread(_objectSpread({}, o), {}, {
        socketPath: e,
        path: t
      }), i = "", a = this._http;
    } else a = "https:" === c ? this._https : this._http;
    return new Promise((e, n) => {
      let r = !1;
      try {
        var _ref5;
        if (!a) throw new Error("HTTP module not defined. This error should not happen.");
        var t;
        i && (o = _objectSpread(_objectSpread({}, o), {}, {
          hostname: u.hostname,
          port: (_ref5 = u !== null && u !== void 0 && u.port ? parseInt(u.port, 10) : void 0) !== null && _ref5 !== void 0 ? _ref5 : "https:" === c ? 443 : 80,
          path: u.pathname + u.search
        })), (t = a.request(o, t => {
          r ? j.warn("Warning! Request had already ended when the response was received.") : (r = !0, e(t));
        })).on("error", t => {
          r ? (j.warn("Warning! Request had already ended when the response was received."), j.debug("Error from event: ", t)) : (j.debug("Passing on error from event: ", t), r = !0, n(t));
        }), s && t.write(s), t.end();
      } catch (t) {
        r ? (j.warn("Warning! Request had already ended when the response was received."), j.debug("Exception: ", t)) : (j.debug("Passing on error: ", t), r = !0, n(t));
      }
    });
  }
  static async _successJsonResponse(t) {
    var e = t === null || t === void 0 ? void 0 : t.statusCode;
    if (e < 200 || 400 <= e) throw q._createUnsuccessfulResponseWithStatus(e, t);
    return j.debug(`Successful response with status ${e}: `, t), t.body;
  }
  static async _successTextResponse(t) {
    return q._handleResponseStatusCode(t), t.body;
  }
  static async _successJsonEntityResponse(t) {
    var e,
      n = t === null || t === void 0 ? void 0 : t.statusCode;
    if (n < 200 || 400 <= n) throw q._createUnsuccessfulResponseWithStatus(n, t);
    return j.debug(`Successful response with status ${n}: `, t), e = new ta(t === null || t === void 0 ? void 0 : t.headers), new wa(t.body, e, n);
  }
  static async _successTextEntityResponse(t) {
    var e = q._handleResponseStatusCode(t),
      n = t.body,
      t = new ta(t.headers);
    return new wa(n, t, e);
  }
  async _checkSocketFile(e) {
    var t;
    try {
      return j.debug("_checkSocketFile: path =", e), t = await ba.stat(e), j.debug("_checkSocketFile: stat =", t), !!t.isSocket();
    } catch (t) {
      if ("ENOTDIR" === (e = t === null || t === void 0 ? void 0 : t.code)) j.debug("_checkSocketFile: ENOTDIR: ", t);else {
        if ("ENOENT" !== e) throw j.debug(`_checkSocketFile: Error "${e}" passed on: `, t), t;
        j.debug("_checkSocketFile: ENOENT: ", t);
      }
    }
  }
  async _findSocketFile(t) {
    var e;
    return j.debug("_findSocketFile: fullPath: ", t), e = await this._checkSocketFile(t), j.debug("_findSocketFile: socketExists: ", e), !0 === e ? t : !1 !== e && (e = ou.dirname(t), j.debug("_findSocketFile: parentPath: ", e), "/" !== e) && e !== t ? this._findSocketFile(e) : void 0;
  }
  static _handleResponseStatusCode(t) {
    var e = t === null || t === void 0 ? void 0 : t.statusCode;
    if (e < 200 || 400 <= e) throw q._createUnsuccessfulResponseWithStatus(e, t);
    return j.debug(`Successful response with status ${e}: `, t), e;
  }
  static _createUnsuccessfulResponseWithStatus(t, e) {
    j.debug(`Unsuccessful response with status ${t}: `, e);
    var n = new ta(e === null || e === void 0 ? void 0 : e.headers),
      r = q._stringifyErrorBodyJson(e === null || e === void 0 ? void 0 : e.body);
    return new ha(t, t + (r ? ` "${r}"` : "") + ` for ${ht(e === null || e === void 0 ? void 0 : e.method)} ` + (e === null || e === void 0 ? void 0 : e.url), e.method, e.url, e.body, n);
  }
  static _stringifyErrorBodyJson(e) {
    var t, n, r;
    try {
      if (void 0 === e) return "";
      if (t = e) {
        var _r20, _r21, _t5;
        if (Ft(t)) return t.message;
        if (a(r = t) && At(r, ["error", "code"]) && f((_r20 = r) === null || _r20 === void 0 ? void 0 : _r20.error) && K((_r21 = r) === null || _r21 === void 0 ? void 0 : _r21.code)) return t.error;
        if (f(n = (_t5 = t) === null || _t5 === void 0 ? void 0 : _t5.error)) return n;
      }
      return JSON.stringify(e, null, 2);
    } catch (t) {
      return j.warn("Warning! Could not stringify error body: ", t, e), e ? JSON.stringify(e, null, 2) : "";
    }
  }
}
class ma extends Error {
  constructor(t, e, n, r, i) {
    super(ma.stringifyExceptionArguments(t, e, n, r, i));
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "args", void 0);
    _defineProperty(this, "status", void 0);
    _defineProperty(this, "signal", void 0);
    _defineProperty(this, "origMessage", void 0);
    _defineProperty(this, "__proto__", void 0);
    var o = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, o) : this.__proto__ = o, this.name = t, this.args = e, this.status = n, this.signal = r, this.origMessage = i;
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return ma.stringifyExceptionArguments(this.name, this.args, this.status, this.signal, this.origMessage);
  }
  toJSON() {
    var {
      name: t,
      args: e,
      status: n,
      signal: r,
      message: i
    } = this;
    return {
      name: t,
      args: e,
      status: n,
      signal: r,
      message: i
    };
  }
  getStatusCode() {
    return this.status;
  }
  static stringifyExceptionArguments(t, e, n, r, i) {
    return `Command "${t}${e !== null && e !== void 0 && e.length ? " " : ""}${(e !== null && e !== void 0 ? e : []).join(" ")}": ` + (i || (r ? "Signal " + r : n ? "Exit status " + n : "Unspecified error"));
  }
  static create(t, e, n, r, i) {
    return new ma(t, e, n, r, i);
  }
}
const U = C.createLogger("NodeChildProcessService");
class Ra {
  static setLogLevel(t) {
    U.setLogLevel(t);
  }
  constructor() {
    _defineProperty(this, "_children", void 0);
    _defineProperty(this, "_destroyed", void 0);
    this._destroyed = !1, this._children = [];
  }
  static create() {
    return new Ra();
  }
  isDestroyed() {
    return this._destroyed;
  }
  destroy() {
    var _this$_children;
    this._destroyed ? U.warn("The service was already destroyed.") : (this._destroyed = !0, U.debug(`destroying ${(_this$_children = this._children) === null || _this$_children === void 0 ? void 0 : _this$_children.length} children: ` + p(this._children, t => {
      var _t$child;
      return t === null || t === void 0 || (_t$child = t.child) === null || _t$child === void 0 ? void 0 : _t$child.pid;
    }).join(", ")), this._shutdownChildProcesses().catch(t => {
      U.error("Error happened when shutting down the service: ", t);
    }));
  }
  async countChildProcesses() {
    var _this$_children2;
    return U.debug(`countChildProcesses: ${(_this$_children2 = this._children) === null || _this$_children2 === void 0 ? void 0 : _this$_children2.length}: ` + p(this._children, t => {
      var _t$child2;
      return t === null || t === void 0 || (_t$child2 = t.child) === null || _t$child2 === void 0 ? void 0 : _t$child2.pid;
    }).join(", ")), this._children.length;
  }
  async waitAllChildProcessesStopped() {
    var _this$_children3, _this$_children$lengt, _this$_children4;
    var t;
    (_this$_children3 = this._children) !== null && _this$_children3 !== void 0 && _this$_children3.length ? (U.debug("start: waitAllChildProcessesStopped: " + p(this._children, t => {
      var _t$child3;
      return t === null || t === void 0 || (_t$child3 = t.child) === null || _t$child3 === void 0 ? void 0 : _t$child3.pid;
    }).join(", ")), t = this._children, t = p(t, async e => {
      try {
        e.promise && (await e.promise);
      } catch (t) {
        var _e$killSignal;
        var n, r, i, o, s, u, a, c;
        Ht(t) && t.signal === ((_e$killSignal = e.killSignal) !== null && _e$killSignal !== void 0 ? _e$killSignal : "SIGTERM") ? (({
          name: r,
          pid: n,
          running: i,
          abort: s,
          initializing: o,
          streamsOpen: u,
          exitSignal: c,
          exitCode: a
        } = e), U.debug(`Child #${n} (name=${r}, running=${i}, initializing=${o}, abort=${s}, streamsOpen=${u}, exitCode=${a}, exitSignal=${c}) successfully shutdown with signal ` + t.signal)) : (({
          name: n,
          pid: r,
          running: i,
          abort: o,
          initializing: s,
          streamsOpen: u,
          exitSignal: a,
          exitCode: c
        } = e), U.debug(`Child #${r} (name=${n}, running=${i}, initializing=${s}, abort=${o}, streamsOpen=${u}, exitCode=${c}, exitSignal=${a}) failed to shutdown: `, t));
      }
    }), U.debug(`Waiting for ${t.length} children to shutdown: ` + p(this._children, t => {
      var _t$child4;
      return t === null || t === void 0 || (_t$child4 = t.child) === null || _t$child4 === void 0 ? void 0 : _t$child4.pid;
    }).join(", ")), await Promise.allSettled(t), U.debug("end: waitAllChildProcessesStopped: " + p(this._children, t => {
      var _t$child5;
      return t === null || t === void 0 || (_t$child5 = t.child) === null || _t$child5 === void 0 ? void 0 : _t$child5.pid;
    }).join(", ")), (t = (_this$_children$lengt = (_this$_children4 = this._children) === null || _this$_children4 === void 0 ? void 0 : _this$_children4.length) !== null && _this$_children$lengt !== void 0 ? _this$_children$lengt : 0) && U.warn(`Warning! ${t} children detected at the end of waitAllChildProcessesStopped(): ` + p(this._children, t => {
      var _t$child6;
      return t === null || t === void 0 || (_t$child6 = t.child) === null || _t$child6 === void 0 ? void 0 : _t$child6.pid;
    }).join(", "))) : U.debug("waitAllChildProcessesStopped: No children detected.");
  }
  async shutdownChildProcesses() {
    if (this._destroyed) throw new TypeError("shutdownChildProcesses: Service already destroyed");
    await this._shutdownChildProcesses();
  }
  async _shutdownChildProcesses() {
    U.debug("start: shutdownChildProcesses: ", this._children), this._sendShutdownToChildProcesses(), await this.waitAllChildProcessesStopped(), U.debug("end: shutdownChildProcesses: ", this._children);
  }
  async executeCommand(t, e, n) {
    if (this._destroyed) throw new TypeError("The service has been destroyed");
    U.debug("start: executeCommand: ", t, e, n, "Running: " + p(this._children, t => {
      var _t$child7;
      return t === null || t === void 0 || (_t$child7 = t.child) === null || _t$child7 === void 0 ? void 0 : _t$child7.pid;
    }).join(", "));
    var r = await this._execFile(t, e, n);
    return U.debug("end: executeCommand: ", t, e, n, "Running: " + p(this._children, t => {
      var _t$child8;
      return t === null || t === void 0 || (_t$child8 = t.child) === null || _t$child8 === void 0 ? void 0 : _t$child8.pid;
    }).join(", ")), r;
  }
  async _execFile(l, h, t) {
    if (this._destroyed) throw new TypeError("_execFile: Service already destroyed");
    U.debug("_execFile: ", l, h, t, "Running: " + p(this._children, t => {
      var _t$child9;
      return t === null || t === void 0 || (_t$child9 = t.child) === null || _t$child9 === void 0 ? void 0 : _t$child9.pid;
    }).join(", "));
    var {
      cwd: t,
      env: e,
      argv0: n,
      serialization: r,
      timeout: i,
      uid: o,
      gid: s,
      killSignal: u,
      stdio: a,
      detached: c
    } = t = t || {};
    const f = {
        name: l,
        args: h = h || [],
        pid: void 0,
        abort: !1,
        initializing: !0,
        streamsOpen: !1,
        running: !1,
        child: void 0,
        stdout: [],
        stderr: [],
        killSignal: u
      },
      d = (this._children.push(f), _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, void 0 !== t ? {
        cwd: t
      } : {}), void 0 !== e ? {
        env: e
      } : {}), void 0 !== n ? {
        argv0: n
      } : {}), void 0 !== r ? {
        serialization: r
      } : {}), void 0 !== c ? {
        detached: c
      } : {}), void 0 !== i ? {
        timeout: i
      } : {}), void 0 !== o ? {
        uid: o
      } : {}), void 0 !== s ? {
        gid: s
      } : {}), void 0 !== a ? {
        stdio: a
      } : {}), void 0 !== u ? {
        killSignal: u
      } : {}));
    return f.promise = new Promise((u, a) => {
      try {
        if (this._destroyed) a(new TypeError("Service destroyed")), f.promise = void 0;else if (f !== null && f !== void 0 && f.child) a(new TypeError("Child is already created")), f.promise = void 0;else {
          var _h;
          f.running = !1, f.streamsOpen = !1;
          const c = iu.spawn(l, (_h = h) !== null && _h !== void 0 ? _h : [], d);
          f.child = c, f.pid = c === null || c === void 0 ? void 0 : c.pid, c.on("spawn", () => {
            f.initializing = !1, f.running = !0, f.streamsOpen = !0, void 0 === f.pid && (f.pid = c === null || c === void 0 ? void 0 : c.pid), f.abort && (f.abort = !1, this._stopChild(f));
          }), c.on("error", t => {
            f.running ? (U.warn("Unexpected error: ", t), a(t || new TypeError('Event "error" without error information detected'))) : U.warn("The child process could not be spawned: ", t);
          }), c.stdout && c.stdout.on("data", t => {
            var _i21;
            var e, n, r, i;
            this._destroyed ? U.debug("Event 'data': Service already destroyed; stdout data ignored.") : (({
              child: i,
              running: e,
              streamsOpen: n,
              initializing: r
            } = f), i = (_i21 = i) === null || _i21 === void 0 ? void 0 : _i21.pid, U.debug(`stdout data on: child #${i}, running=${e}, streamsOpen=${n}, initializing=` + r), f.stdout.push(t));
          }), c.stderr && c.stderr.on("data", t => {
            var _i22;
            var e, n, r, i;
            this._destroyed ? U.debug("Event 'data' on stderr: Service already destroyed; stderr data ignored.") : (({
              child: i,
              running: e,
              streamsOpen: n,
              initializing: r
            } = f), i = (_i22 = i) === null || _i22 === void 0 ? void 0 : _i22.pid, U.debug(`stderr data on: child #${i}, running=${e}, streamsOpen=${n}, initializing=` + r), f.stderr.push(t));
          }), c.on("exit", (t, e) => {
            f.running = !1, f.exitCode = t, f.exitSignal = e;
          }), c.on("close", () => {
            var _h2, _ref6, _Q, _ref7, _f$exitSignal;
            var t;
            if (f.running = !1, f.streamsOpen = !1, this._destroyed) {
              const {
                child: c,
                running: e,
                streamsOpen: n,
                initializing: r
              } = f;
              t = c === null || c === void 0 ? void 0 : c.pid, U.debug(`close on destroyed service item: child #${t}, running=${e}, streamsOpen=${n}, initializing=` + r);
            } else {
              const {
                child: c,
                running: i,
                streamsOpen: o,
                initializing: s
              } = f;
              t = c === null || c === void 0 ? void 0 : c.pid, U.debug(`close on item: child #${t}, running=${i}, streamsOpen=${o}, initializing=` + s);
            }
            this._onStoredChildClose(l, (_h2 = h) !== null && _h2 !== void 0 ? _h2 : [], f, (_ref6 = (_Q = Q(f.exitCode)) !== null && _Q !== void 0 ? _Q : Q(c.exitCode)) !== null && _ref6 !== void 0 ? _ref6 : void 0, (_ref7 = (_f$exitSignal = f.exitSignal) !== null && _f$exitSignal !== void 0 ? _f$exitSignal : c.signalCode) !== null && _ref7 !== void 0 ? _ref7 : void 0).then(t => {
              u(t), f.promise = void 0;
            }, t => {
              a(t), f.promise = void 0;
            });
          });
        }
      } catch (t) {
        var _h3, _h4, _h5;
        U.warn(`Exception handled from command "${l}${(_h3 = h) !== null && _h3 !== void 0 && _h3.length ? " " : ""}${((_h4 = h) !== null && _h4 !== void 0 ? _h4 : []).join(" ")}": `, t), a(new ma(l, (_h5 = h) !== null && _h5 !== void 0 ? _h5 : [], -4)), f.promise = void 0;
      }
    });
  }
  sendShutdownToChildProcesses() {
    if (this._destroyed) throw new TypeError("sendShutdownToChildProcesses: Service already destroyed");
    return this._sendShutdownToChildProcesses();
  }
  _sendShutdownToChildProcesses() {
    var t = this._children;
    U.debug(`Sending shutdown to ${t.length} children: ` + p(this._children, t => {
      var _t$child10;
      return t === null || t === void 0 || (_t$child10 = t.child) === null || _t$child10 === void 0 ? void 0 : _t$child10.pid;
    }).join(", ")), Bo(t, t => {
      try {
        var {
          child: e,
          initializing: n,
          abort: r
        } = t;
        U.debug(`#${e === null || e === void 0 ? void 0 : e.pid}: initializing=${n}, abort=` + r), n ? r ? U.debug(`The child #${e === null || e === void 0 ? void 0 : e.pid} was already aborting later`) : (U.debug(`The child #${e === null || e === void 0 ? void 0 : e.pid} will be aborted later`), t.abort = !0) : this._stopChild(t);
      } catch (t) {
        U.warn("Warning! Could not send shutdown signal to child: ", t);
      }
    });
  }
  _stopChild(t) {
    var _t6, _t7, _t8, _t9;
    var {
      child: t,
      killSignal: e,
      running: n
    } = t;
    U.debug(`#${(_t6 = t) === null || _t6 === void 0 ? void 0 : _t6.pid}: killSignal=${e}, running=` + n), t && n ? (U.debug(`Sending ${e !== null && e !== void 0 ? e : "default signal"} to child #` + ((_t7 = t) === null || _t7 === void 0 ? void 0 : _t7.pid)), (e ? t.kill(e) : t.kill()) || U.warn(`Warning! Could not signal child process ${(_t8 = t) === null || _t8 === void 0 ? void 0 : _t8.pid} to stop`)) : t ? n || U.warn(`Warning! The child #${(_t9 = t) === null || _t9 === void 0 ? void 0 : _t9.pid} was not running`) : U.warn("Warning! The child was not yet created");
  }
  async _onStoredChildClose(e, n, r, t, i) {
    var _o6;
    var {
        child: o,
        running: s,
        streamsOpen: u,
        initializing: a
      } = r,
      o = (_o6 = o) === null || _o6 === void 0 ? void 0 : _o6.pid,
      o = (U.debug(`_onStoredChildClose on child #${o}, running=${s}, streamsOpen=${u}, initializing=` + a), Buffer.concat(r.stderr).toString("utf8")),
      s = Buffer.concat(r.stdout).toString("utf8");
    try {
      return await this._onChildProcessClose(e, n, t, i, s, o);
    } catch (t) {
      if (Ht(t)) throw t;
      throw U.warn(`Unexpected exception handled: "${e} ${(n !== null && n !== void 0 ? n : []).join(" ")}": `, t), new ma(e, n !== null && n !== void 0 ? n : [], -3, void 0, o);
    } finally {
      try {
        r && (this._children = y(this._children, t => t !== r), r.child = void 0, r.killSignal = void 0);
      } catch (t) {
        U.warn("Error when removing the child from internal array: ", t);
      }
    }
  }
  async _onChildProcessClose(t, e, n, r, i, o) {
    if (void 0 !== r) throw U.debug(`Command failed: "${t}${e !== null && e !== void 0 && e.length ? " " : ""}${(e !== null && e !== void 0 ? e : []).join(" ")}": Signal received: ${r}: `, i, o), new ma(t, e !== null && e !== void 0 ? e : [], -2, r, o);
    if (void 0 !== n && 0 !== n) throw 0 <= (r = h(n) ? n : -1) ? U.debug(`Command failed: "${t}${e !== null && e !== void 0 && e.length ? " " : ""}${(e !== null && e !== void 0 ? e : []).join(" ")}": Exit code: ${r}: `, i, o) : U.debug(`Command failed: "${t}${e !== null && e !== void 0 && e.length ? " " : ""}${(e !== null && e !== void 0 ? e : []).join(" ")}": `, i, o), new ma(t, e !== null && e !== void 0 ? e : [], r, void 0, o);
    return U.debug(`Command succeed: "${t}${e !== null && e !== void 0 && e.length ? " " : ""}${(e !== null && e !== void 0 ? e : []).join(" ")}": `, i, o), _objectSpread({
      name: t,
      args: e,
      output: i !== null && i !== void 0 ? i : ""
    }, o ? {
      errors: o
    } : {});
  }
}
const Ta = C.createLogger("SystemService");
class Aa {
  constructor() {
    _defineProperty(this, "_data", void 0);
    this._data = new Map();
  }
  hasName(t) {
    return this._data.has(t);
  }
  getName(t) {
    if (this.hasName(t)) return this._data.get(t);
    throw new TypeError("Autowire service did not have name: " + t);
  }
  setName(t, e) {
    this._data.set(t, e);
  }
  deleteName(t) {
    this._data.delete(t);
  }
  static create() {
    return new Aa();
  }
  static setAutowireService(t) {
    this._autowireService = t;
  }
  static getAutowireService() {
    if (this._autowireService) return this._autowireService;
    throw new TypeError("Autowire service has not been initialized");
  }
}
_defineProperty(Aa, "_autowireService", void 0);
const Sa = C.createLogger("HgNode"),
  Oa = (Gu.initEnvFromDefaultFiles(), C.setLogLevel(v), Gu.setLogLevel(v), C.setLogLevel(v), Gu.setLogLevel(v), q.setLogLevel(v >= d.INFO ? d.NONE : v), C.createLogger("main")),
  xa = (_rt3 = rt(process.env.OPENAI_API_KEY)) !== null && _rt3 !== void 0 ? _rt3 : "";
process.env.OPENAI_API_KEY = "", async function (t = []) {
  var e, n, r, i;
  try {
    (class {
      static setLogLevel(t) {
        Sa.setLogLevel(t);
      }
      static initialize(t, e) {
        var _class17;
        var n, r;
        t || (n = require("http"), r = require("https"), t = q.create(n, r)), P.setClient(t), (_class17 = class {
          static destroy() {
            this._childProcessService && (this._childProcessService.destroy(), this._childProcessService = void 0);
          }
          static initialize(t) {
            void 0 === this._childProcessService ? this._childProcessService = t : Ta.warn("Warning! Child process service was already initialized");
          }
          static _getChildProcessService() {
            if (this._childProcessService) return this._childProcessService;
            throw new TypeError("You must call HgNode.initialize() before using this service");
          }
          static async executeCommand(t, e, n) {
            return this._getChildProcessService().executeCommand(t, e, n);
          }
          static countChildProcesses() {
            return this._getChildProcessService().countChildProcesses();
          }
          static shutdownChildProcesses() {
            return this._getChildProcessService().shutdownChildProcesses();
          }
          static waitAllChildProcessesStopped() {
            return this._getChildProcessService().waitAllChildProcessesStopped();
          }
        }, _defineProperty(_class17, "_childProcessService", void 0), _class17).initialize(Ra.create()), Aa.setAutowireService(e !== null && e !== void 0 ? e : Aa.create());
      }
    }).initialize(), ta.setLogLevel(d.INFO), P.setLogLevel(d.INFO), Oa.debug("Loglevel as " + C.getLogLevelString());
    var {
      scriptName: o,
      parseStatus: s,
      exitStatus: u,
      errorString: a,
      freeArgs: c,
      userArgs: l
    } = Yu.parseArguments(Wu, t, {
      language: ["s", "--language", "-l"],
      model: ["s", "--model", "-m"],
      suffix: ["s", "--suffix", "-s"],
      stop: ["s", "--stop", "-S"],
      user: ["s", "--user", "-u"],
      logProbs: ["i", "--logprobs", "-L"],
      bestOf: ["i", "--best-of", "-b"],
      presencePenalty: ["n", "--presence-penalty", "-P"],
      frequencyPenalty: ["n", "--frequency-penalty", "-f"],
      echo: ["b", "--echo", "-e"],
      n: ["i", "--n", "-n"],
      topP: ["n", "--top-p", "-p"],
      temperature: ["n", "--temperature", "-t"],
      maxTokens: ["i", "--max-tokens", "-T"]
    });
    return s === Wo.HELP || s === Wo.VERSION ? (console.log(Kt(o)), u) : a ? (console.error("ERROR: " + a), u) : (Gu.setupDestroyHandler(() => {
      Oa.debug("Stopping command from process utils event");
    }, t => {
      Oa.error("Error while shutting down the service: ", t);
    }), e = Fu.create(), n = new _a(xa), r = new ca(n), f(l === null || l === void 0 ? void 0 : l.language) && r.setLanguage(l === null || l === void 0 ? void 0 : l.language), f(l === null || l === void 0 ? void 0 : l.model) && r.setModel(l === null || l === void 0 ? void 0 : l.model), f(l === null || l === void 0 ? void 0 : l.suffix) && r.setSuffix(l === null || l === void 0 ? void 0 : l.suffix), f(l === null || l === void 0 ? void 0 : l.stop) && r.setStop(l === null || l === void 0 ? void 0 : l.stop), f(l === null || l === void 0 ? void 0 : l.user) && r.setUser(l === null || l === void 0 ? void 0 : l.user), h(l === null || l === void 0 ? void 0 : l.logProbs) && r.setLogProbs(l === null || l === void 0 ? void 0 : l.logProbs), h(l === null || l === void 0 ? void 0 : l.bestOf) && r.setBestOf(l === null || l === void 0 ? void 0 : l.bestOf), h(l === null || l === void 0 ? void 0 : l.presencePenalty) && r.setPresencePenalty(l === null || l === void 0 ? void 0 : l.presencePenalty), h(l === null || l === void 0 ? void 0 : l.frequencyPenalty) && r.setFrequencyPenalty(l === null || l === void 0 ? void 0 : l.frequencyPenalty), Do(l === null || l === void 0 ? void 0 : l.echo) && r.setEcho(l === null || l === void 0 ? void 0 : l.echo), h(l === null || l === void 0 ? void 0 : l.n) && r.setN(l === null || l === void 0 ? void 0 : l.n), h(l === null || l === void 0 ? void 0 : l.topP) && r.setTopP(l === null || l === void 0 ? void 0 : l.topP), h(l === null || l === void 0 ? void 0 : l.temperature) && r.setTemperature(l === null || l === void 0 ? void 0 : l.temperature), h(l === null || l === void 0 ? void 0 : l.maxTokens) && r.setMaxTokens(l === null || l === void 0 ? void 0 : l.maxTokens), (i = await ea.create(r, e).main(c)) === T.USAGE ? (console.log(Kt(o)), T.USAGE) : i);
  } catch (t) {
    return Oa.error("Fatal error: ", t), T.FATAL_ERROR;
  }
}(process.argv).then(t => {
  process.exit(t);
}).catch(t => {
  console.error("Error: ", t), process.exit(1);
});
