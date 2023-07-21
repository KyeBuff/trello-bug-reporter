const Xe = /* @__PURE__ */ new Map();
function oe(e) {
  let t = Xe.get(e);
  return t === void 0 && (t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Xe.set(e, t)), t;
}
function de(e) {
  return `<${String(e.tagName).toLowerCase()}>`;
}
function ge(e, t) {
  e.nodeType === globalThis.Node.ELEMENT_NODE && (t(e), e.shadowRoot && ge(e.shadowRoot, t));
  const n = globalThis.document.createTreeWalker(e, globalThis.NodeFilter.SHOW_ELEMENT, null, !1);
  for (; n.nextNode(); ) {
    const r = n.currentNode;
    t(r), r.shadowRoot && ge(r.shadowRoot, t);
  }
}
const be = Promise.resolve(), ke = /* @__PURE__ */ new WeakMap(), Ae = ge.name === "walkInShadow", U = /* @__PURE__ */ new Set();
function pt(e) {
  U.size || be.then(Rt), U.add(e);
}
function Wt(e) {
  U.delete(e);
}
function Rt() {
  for (const e of U)
    try {
      e();
    } catch (t) {
      console.error(t);
    }
  U.clear();
}
const Y = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new Set();
function ht(e) {
  const t = /* @__PURE__ */ new Set(), n = t.values();
  for (; e; ) {
    if (e.resolved = !1, e.deps) {
      for (const r of e.deps)
        r.contexts.delete(e);
      e.deps.clear();
    }
    if (e.contexts)
      for (const r of e.contexts)
        q.has(r) || (t.add(r), e.contexts.delete(r));
    e.observe && pt(e.observe), e = n.next().value;
  }
}
function _(e, t) {
  let n = Y.get(e);
  n || (n = /* @__PURE__ */ new Map(), Y.set(e, n));
  let r = n.get(t);
  return r || (r = {
    key: t,
    target: e,
    value: void 0,
    lastValue: void 0,
    resolved: !1,
    contexts: void 0,
    deps: void 0,
    observe: void 0
  }, n.set(t, r)), r;
}
function mt(e) {
  const t = Y.get(e);
  return t ? [...t.values()] : [];
}
let x = null;
function D(e, t, n) {
  const r = _(e, t);
  if (x && (r.contexts || (r.contexts = /* @__PURE__ */ new Set()), x.deps || (x.deps = /* @__PURE__ */ new Set()), r.contexts.add(x), x.deps.add(r)), r.resolved)
    return r.value;
  const s = x;
  try {
    if (q.has(r))
      throw Error(`Circular get invocation is forbidden: '${t}'`);
    x = r, q.add(r), r.value = n(e, r.value), r.resolved = !0, x = s, q.delete(r);
  } catch (o) {
    throw x = s, q.delete(r), x && (x.deps.delete(r), r.contexts.delete(x)), o;
  }
  return r.value;
}
function ye(e, t, n, r) {
  const s = _(e, t), o = n(e, r, s.value);
  o !== s.value && (s.value = o, ht(s));
}
function It(e, t, n, r) {
  const s = _(e, t);
  s.observe = () => {
    const o = D(e, t, n);
    o !== s.lastValue && (r(e, o, s.lastValue), s.lastValue = o);
  };
  try {
    s.observe();
  } catch (o) {
    console.error(o);
  }
  return () => {
    Wt(s.observe), s.observe = void 0, s.lastValue = void 0;
  };
}
const le = /* @__PURE__ */ new Set();
function Dt(e) {
  le.size || setTimeout(() => {
    for (const t of le)
      if (!t.contexts || t.contexts.size === 0) {
        if (t.deps)
          for (const r of t.deps)
            r.contexts.delete(t);
        Y.get(t.target).delete(t.key);
      }
    le.clear();
  }), le.add(e);
}
function bt(e, t) {
  ht(e), t.clearValue && (e.value = void 0, e.lastValue = void 0), t.deleteEntry && Dt(e);
}
function we(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = _(e, t);
  bt(r, n);
}
function yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = Y.get(e);
  if (n)
    for (const r of n.values())
      bt(r, t);
}
function Ke(e, t) {
  return {
    get: t ? (n) => {
      const r = e(n), s = n.shadowRoot || n.attachShadow({
        mode: "open",
        delegatesFocus: e.delegatesFocus || !1
      });
      return () => (r(n, s), s);
    } : (n) => {
      const r = e(n);
      return () => (r(n, n), n);
    },
    observe(n, r) {
      r();
    }
  };
}
const wt = {
  string: (e, t, n) => {
    const r = t ? String(t) : "";
    return r ? e.setAttribute(n, r) : e.removeAttribute(n), r;
  },
  number: (e, t, n) => {
    const r = Number(t);
    return e.setAttribute(n, r), r;
  },
  boolean: (e, t, n) => {
    const r = !!t;
    return r ? e.setAttribute(n, "") : e.removeAttribute(n), r;
  },
  undefined: (e, t, n) => {
    const r = typeof t, s = r !== "undefined" && wt[r];
    return s ? s(e, t, n) : (e.hasAttribute(n) && e.removeAttribute(n), t);
  }
}, kt = {
  string: (e, t) => e.getAttribute(t),
  number: (e, t) => Number(e.getAttribute(t)) || 0,
  boolean: (e, t) => e.hasAttribute(t),
  undefined: (e, t) => e.getAttribute(t)
};
function _t(e, t) {
  const n = typeof t.value, r = wt[n], s = kt[n];
  if (!r)
    throw TypeError(`Invalid default value for '${e}' property - it must be a string, number, boolean or undefined: ${n}`);
  const o = oe(e);
  return {
    get: (i, a) => a === void 0 ? s(i, o) || t.value : a,
    set: (i, a) => r(i, a, o),
    connect: n !== "undefined" ? (i, a, c) => (!i.hasAttribute(o) && i[a] === t.value && (i[a] = r(i, t.value, o)), t.connect && t.connect(i, a, c)) : t.connect,
    observe: t.observe
  };
}
const Q = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap();
function Le(e, t) {
  if (t) {
    const o = Q.get(t);
    if (e === o)
      return t;
    for (const i of Object.keys(o))
      i !== "tag" && delete t.prototype[i];
  } else
    t = class extends globalThis.HTMLElement {
      connectedCallback() {
        for (const i of t.settable) {
          if (!hasOwnProperty.call(this, i))
            continue;
          const a = this[i];
          delete this[i], this[i] = a;
        }
        const o = /* @__PURE__ */ new Set();
        ae.set(this, o), pt(() => {
          if (o === ae.get(this)) {
            for (const i of t.connects)
              o.add(i(this));
            for (const i of t.observers)
              o.add(i(this));
          }
        });
      }
      disconnectedCallback() {
        const o = ae.get(this);
        for (const i of o)
          i && i();
        ae.delete(this), yt(this);
      }
    };
  Q.set(t, Object.freeze(e));
  const n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  for (const o of Object.keys(e)) {
    if (o === "tag")
      continue;
    let i = e[o];
    const a = typeof i;
    if (a === "function")
      o === "render" ? i = Ke(i, !0) : o === "content" ? i = Ke(i) : i = {
        get: i
      };
    else if (a !== "object" || i === null)
      i = {
        value: i
      };
    else if (i.set) {
      if (hasOwnProperty.call(i, "value"))
        throw TypeError(`Invalid property descriptor for '${o}' property - it must not have 'value' and 'set' properties at the same time.`);
      const c = oe(o), p = i.get || ((d, l) => l);
      i.get = (d, l) => (l === void 0 && (l = i.set(d, d.getAttribute(c) || l)), p(d, l));
    }
    if (hasOwnProperty.call(i, "value"))
      i = _t(o, i);
    else if (!i.get)
      throw TypeError(`Invalid descriptor for '${o}' property - it must contain 'value' or 'get' option`);
    i.set && s.add(o), Object.defineProperty(t.prototype, o, {
      get: function() {
        return D(this, o, i.get);
      },
      set: i.set && function(p) {
        ye(this, o, i.set, p);
      },
      enumerable: !0,
      configurable: !0
    }), i.connect && n.add((c) => i.connect(c, o, () => {
      we(c, o);
    })), i.observe && r.add((c) => It(c, o, i.get, i.observe));
  }
  return t.connects = n, t.observers = r, t.settable = s, t;
}
const X = /* @__PURE__ */ new Map();
function Vt(e) {
  X.size || be.then(() => {
    ge(globalThis.document.body, (t) => {
      if (X.has(t.constructor)) {
        const n = X.get(t.constructor), r = Q.get(t.constructor);
        t.disconnectedCallback();
        for (const s of Object.keys(r)) {
          const o = typeof r[s], i = o !== "object" && o !== "function" && r[s] !== n[s];
          i && t.removeAttribute(oe(s)), we(t, s, {
            clearValue: i
          });
        }
        t.connectedCallback();
      }
    }), X.clear();
  }), X.set(e, Q.get(e));
}
function vt(e) {
  if (!e.tag)
    throw TypeError("Error while defining hybrids: 'tag' property with dashed tag name is required");
  const t = globalThis.customElements.get(e.tag);
  if (t) {
    if (Q.get(t))
      return Vt(t), Le(e, t), e;
    throw TypeError(`Custom element with '${e.tag}' tag name already defined outside of the hybrids context`);
  }
  return globalThis.customElements.define(e.tag, Le(e)), e;
}
function Bt(e) {
  let {
    root: t = "",
    prefix: n
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  for (const r of Object.keys(e)) {
    const s = e[r];
    if (!s.tag) {
      const o = oe([].concat(t).reduce((i, a) => i.replace(a, ""), r).replace(/^[./]+/, "").replace(/\//g, "-").replace(/\.[a-zA-Z]+$/, ""));
      s.tag = n ? `${n}-${o}` : o;
    }
    vt(s);
  }
  return e;
}
const Tt = Object.freeze(Object.assign(vt, {
  compile: (e) => Le(e),
  from: Bt
})), _e = Symbol("store.connect"), S = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakSet();
function Ve(e, t, n) {
  if (n && (S.set(n, null), ve.set(n, t)), S.set(t, e), e.storage.observe) {
    const r = t && e.isInstance(t) ? t : null, s = n && e.isInstance(n) ? n : null;
    r !== s && e.storage.observe(r, s);
  }
  return t;
}
function Ft(e, t) {
  return Object.keys(e).every((n) => e[n] === t[n]);
}
function Jt(e, t, n) {
  return Ve(e, t, n), e.invalidate && (!n || ie(t) || !e.isInstance(n) || !Ft(t, n)) && e.invalidate(), t;
}
function k(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
  return ye(e, t, r ? Jt : Ve, n), n;
}
let ue;
function O() {
  return ue || (ue = Date.now(), be.then(() => {
    ue = void 0;
  })), ue;
}
const pe = /* @__PURE__ */ new WeakMap();
function $e(e) {
  let t = pe.get(e);
  return t || (t = O(), pe.set(e, t)), t;
}
function Ee(e) {
  return pe.set(e, O()), e;
}
function qe(e) {
  return pe.set(e, 1), e;
}
function Me(e) {
  return globalThis.btoa(Array.from(e).reduce((t, n) => Math.imul(31, t) + n.charCodeAt(0) | 0, 0));
}
const Se = "hybrids:store:cache", xe = {};
let Oe;
function Xt(e, t) {
  const n = `${Se}:${Me(JSON.stringify(e.model))}`;
  return xe[n] = O() + t, Oe || (Oe = Promise.resolve().then(() => {
    const r = JSON.parse(globalThis.localStorage.getItem(Se)) || {}, s = O();
    for (const o of Object.keys(r))
      !xe[o] && r[o] < s && (globalThis.localStorage.removeItem(o), delete r[o]);
    globalThis.localStorage.setItem(Se, JSON.stringify({
      ...r,
      ...xe
    })), Oe = null;
  })), n;
}
const Kt = /^\{.+\}$/;
function Et(e, t) {
  typeof t == "function" && (t = {
    get: t
  });
  const n = {
    cache: !0,
    loose: !1,
    ...t
  };
  if (n.observe) {
    const r = n.observe;
    if (typeof r != "function")
      throw TypeError(`Storage 'observe' property must be a function: ${typeof n.observe}`);
    n.observe = (s, o) => {
      try {
        let i = o ? o.id : s.id;
        if (Kt.test(i))
          try {
            i = JSON.parse(i);
          } catch {
          }
        r(i, s, o);
      } catch (i) {
        console.error(i);
      }
    };
  }
  if (n.cache === !1 || n.cache === 0)
    n.validate = (r) => !r || $e(r) === O();
  else if (typeof n.cache == "number")
    n.validate = (r) => !r || $e(r) + n.cache > O();
  else {
    if (n.cache !== !0)
      throw TypeError(`Storage 'cache' property must be a boolean or number: ${typeof n.cache}`);
    n.validate = (r) => $e(r) !== 1;
  }
  if (n.get || (n.get = (r) => {
    throw ee(Z(r));
  }), n.offline)
    try {
      const r = n.offline === !0, s = r ? 1e3 * 60 * 60 * 24 * 30 : n.offline, o = Xt(e, s), i = JSON.parse(globalThis.localStorage.getItem(o)) || {};
      let a;
      n.offline = Object.freeze({
        key: o,
        threshold: s,
        get: r ? (c) => hasOwnProperty.call(i, c) ? JSON.parse(i[c][1]) : null : (c) => {
          if (hasOwnProperty.call(i, c)) {
            const p = i[c];
            return p[0] + s < O() ? (delete i[c], null) : JSON.parse(p[1]);
          }
          return null;
        },
        set(c, p) {
          return p ? i[c] = [O(), JSON.stringify(p, function(l, u) {
            if (u === this[""])
              return u;
            if (u && typeof u == "object") {
              const h = S.get(u);
              if (h === e && u.id === c)
                return String(u);
              if (h && h.storage.offline)
                return h.list ? u.map((g) => (he.get(h.model).storage.offline.set(g.id, g), `${g}`)) : (h.storage.offline.set(u.id, u), `${u}`);
            }
            return u;
          })] : delete i[c], a || (a = Promise.resolve().then(() => {
            const d = O();
            for (const l of Object.keys(i))
              i[l][0] + s < d && delete i[l];
            globalThis.localStorage.setItem(o, JSON.stringify(i)), a = null;
          })), p;
        }
      });
    } catch (r) {
      console.error("Error while setup offline cache", r), n.offline = !1;
    }
  return Object.freeze(n);
}
function qt(e) {
  return {
    get: e.enumerable ? () => {
    } : () => e.create({}),
    set: e.enumerable ? (t, n) => n : (t, n) => n === null ? {
      id: t
    } : n,
    list: e.enumerable && function(n) {
      if (n)
        throw TypeError("Memory-based model definition does not support id");
      const r = [];
      for (const {
        key: s,
        value: o
      } of mt(e))
        s !== e && o && !ie(o) && r.push(s);
      return r;
    },
    loose: !0
  };
}
function z(e, t) {
  return Array.isArray(e) ? Zt(e[0], t) : Ot(e, t);
}
function Ge(e, t) {
  switch (e) {
    case "string":
      return (n) => n != null ? String(n) : "";
    case "number":
      return Number;
    case "boolean":
      return Boolean;
    default:
      throw TypeError(`The value of the '${t}' must be a string, number or boolean: ${e}`);
  }
}
const Gt = (e, t, n) => t.state === "error" ? {
  state: "error",
  error: t.value
} : (t.error = !!n && n.error, t);
function M(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e;
  return ye(e, "state", Gt, {
    state: t,
    value: n
  }), e;
}
const Ht = function(e) {
  return arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    state: "ready",
    value: e,
    error: !1
  };
};
function se(e) {
  return D(e, "state", Ht);
}
function St(e) {
  return e ? (e ^ Math.random() * 16 >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, St);
}
function Ut(e) {
  if (typeof e != "function")
    throw TypeError(`The first argument must be a function: ${typeof e}`);
  return $t.add(e), e;
}
const xt = /* @__PURE__ */ new WeakMap();
function Yt(e, t, n) {
  let r = n.model[t];
  $t.has(r) && (r = r());
  let s = typeof r;
  if (r instanceof String || r instanceof Number || r instanceof Boolean) {
    const o = xt.get(r);
    if (!o)
      throw TypeError(j(e, `You must use primitive ${typeof r.valueOf()} value for '${t}' property of the provided model definition`));
    r = r.valueOf(), s = typeof r, n.checks.set(t, o);
  }
  return {
    defaultValue: r,
    type: s
  };
}
function j(e, t) {
  return `${t}

Model = ${JSON.stringify(e, null, 2)}
`;
}
const Qt = Promise.resolve(), he = /* @__PURE__ */ new WeakMap();
function Ot(e, t) {
  if (typeof e != "object" || e === null)
    throw TypeError(`Model definition must be an object: ${typeof e}`);
  let n = he.get(e);
  if (n && !n.enumerable) {
    if (t && !n.nested)
      throw TypeError(j(e, "Provided model definition for nested object already used as a root definition"));
    if (!t && n.nested)
      throw TypeError(j(e, "Nested model definition cannot be used outside of the parent definition"));
  }
  if (!n) {
    const r = e[_e];
    typeof r == "object" && Object.freeze(r);
    let s;
    const o = hasOwnProperty.call(e, "id"), i = !!r, a = /* @__PURE__ */ new Map(), c = {};
    Object.defineProperty(c, "toString", {
      value: function() {
        return this.id;
      }
    });
    const p = Object.create(c);
    n = {
      model: e,
      external: i,
      enumerable: o,
      nested: !o && !i && t,
      placeholder: (l) => {
        const u = Object.create(p);
        return S.set(u, n), o && (u.id = l), Object.freeze(u);
      },
      isInstance: (l) => Object.getPrototypeOf(l) !== p,
      invalidate: () => {
        s || (s = Qt.then(() => {
          we(n, n, {
            clearValue: !0
          }), s = null;
        }));
      },
      checks: a
    }, he.set(e, n), n.storage = Et(n, r || qt(n));
    const d = Object.keys(Object.freeze(e)).map((l) => {
      if (l !== "id" && Object.defineProperty(p, l, {
        get() {
          throw Error(`Model instance in ${se(this).state} state - use store.pending(), store.error(), or store.ready() guards`);
        },
        enumerable: !0
      }), l === "id") {
        if (e[l] !== !0)
          throw TypeError("The 'id' property in the model definition must be set to 'true' or not be defined");
        return (f, g, y) => {
          let b;
          hasOwnProperty.call(g, "id") ? b = Z(g.id) : y ? b = y.id : b = St(), Object.defineProperty(f, "id", {
            value: b,
            enumerable: !0
          });
        };
      }
      const {
        defaultValue: u,
        type: h
      } = Yt(e, l, n);
      switch (h) {
        case "function":
          return (f) => {
            Object.defineProperty(f, l, {
              get() {
                return D(this, l, () => u(this));
              }
            });
          };
        case "object": {
          if (u === null)
            throw TypeError(`The value for the '${l}' must be an object instance: ${u}`);
          if (Array.isArray(u)) {
            const y = typeof u[0];
            if (y !== "object") {
              if (y === "function" && ![String, Number, Boolean].includes(u[0]))
                throw TypeError(`The array item for the '${l}' must be one of the primitive types constructor: String, Number, or Boolean`);
              const T = y === "function" ? u[0] : Ge(y, l), w = y === "function" ? [] : Object.freeze(u.map(T));
              return (m, v, E) => {
                if (hasOwnProperty.call(v, l)) {
                  if (!Array.isArray(v[l]))
                    throw TypeError(`The value for '${l}' property must be an array: ${typeof v[l]}`);
                  m[l] = Object.freeze(v[l].map(T));
                } else
                  E && hasOwnProperty.call(E, l) ? m[l] = E[l] : m[l] = w;
              };
            }
            const b = z(u, !0);
            if (b.external && n.storage.offline && b.storage.offline && b.storage.offline.threshold < n.storage.offline.threshold)
              throw Error(`External nested model for '${l}' property has lower offline threshold (${b.storage.offline.threshold} ms) than the parent definition (${n.storage.offline.threshold} ms)`);
            if (b.enumerable && u[1]) {
              const T = u[1];
              if (typeof T != "object")
                throw TypeError(`Options for '${l}' array property must be an object instance: ${typeof T}`);
              T.loose && (n.contexts = n.contexts || /* @__PURE__ */ new Set(), n.contexts.add(z(u[0])));
            }
            return (T, w, m) => {
              if (hasOwnProperty.call(w, l)) {
                if (!Array.isArray(w[l]))
                  throw TypeError(`The value for '${l}' property must be an array: ${typeof w[l]}`);
                T[l] = b.create(w[l], !0);
              } else
                T[l] = m && m[l] || !b.enumerable && b.create(u) || [];
            };
          }
          const g = z(u, !0);
          if (g.enumerable || g.external) {
            if (n.storage.offline && g.storage.offline && g.storage.offline.threshold < n.storage.offline.threshold)
              throw Error(`External nested model for '${l}' property has lower offline threshold (${g.storage.offline.threshold} ms) than the parent definition (${n.storage.offline.threshold} ms)`);
            return (y, b, T) => {
              let w;
              if (hasOwnProperty.call(b, l)) {
                const m = b[l];
                if (typeof m != "object" || m === null)
                  m != null && (w = {
                    id: m
                  });
                else {
                  const v = S.get(m);
                  if (v) {
                    if (v.model !== u)
                      throw TypeError("Model instance must match the definition");
                    w = m;
                  } else {
                    const E = _(g, b[l].id).value;
                    w = g.create(m, E && g.isInstance(E) ? E : void 0), k(g, w.id, w);
                  }
                }
              } else
                w = T && T[l];
              if (w) {
                const m = w.id;
                Object.defineProperty(y, l, {
                  get() {
                    return D(this, l, () => N(u, m));
                  },
                  enumerable: !0
                });
              } else
                y[l] = void 0;
            };
          }
          return (y, b, T) => {
            hasOwnProperty.call(b, l) ? y[l] = b[l] === null ? g.create({}) : g.create(b[l], T && T[l]) : y[l] = T ? T[l] : g.create({});
          };
        }
        default: {
          const f = Ge(h, l);
          return (g, y, b) => {
            hasOwnProperty.call(y, l) ? g[l] = f(y[l]) : b && hasOwnProperty.call(b, l) ? g[l] = b[l] : g[l] = u;
          };
        }
      }
    });
    n.create = function(u, h) {
      if (u === null)
        return null;
      if (typeof u != "object")
        throw TypeError(`Model values must be an object instance: ${u}`);
      const f = Object.create(c);
      for (const g of d)
        g(f, u, h);
      return S.set(f, n), ke.set(f, Be), Object.freeze(f);
    }, Object.freeze(p), Object.freeze(n);
  }
  return n;
}
const He = Object.getOwnPropertyNames(Array.prototype).reduce((e, t) => (t === "length" || t === "constructor" || Object.defineProperty(e, t, {
  get() {
    throw Error(`Model list instance in ${se(this).state} state - use store.pending(), store.error(), or store.ready() guards`);
  }
}), e), []), ze = /* @__PURE__ */ new WeakMap();
function Zt(e, t) {
  let n = ze.get(e);
  if (n && !n.enumerable && !t && n.nested)
    throw TypeError(j(e, "Nested model definition cannot be used outside of the parent definition"));
  if (!n) {
    const r = Ot(e), s = /* @__PURE__ */ new Set();
    if (r.storage.loose && s.add(r), !t) {
      if (!r.enumerable)
        throw TypeError(j(e, "Provided model definition does not support listing (it must be enumerable - set `id` property to `true`)"));
      if (!r.storage.list)
        throw TypeError(j(e, "Provided model definition storage does not support `list` action"));
    }
    t = !r.enumerable && !r.external && t, n = {
      list: !0,
      nested: t,
      model: e,
      contexts: s,
      enumerable: r.enumerable,
      external: r.external,
      placeholder: () => {
        const o = Object.create(He);
        return S.set(o, n), Object.freeze(o);
      },
      isInstance: (o) => Object.getPrototypeOf(o) !== He,
      create(o) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (o === null)
          return null;
        const a = [];
        for (const c of o) {
          let p = c;
          if (typeof c == "object" && c !== null) {
            p = c.id;
            const d = S.get(c);
            let l = c;
            if (d) {
              if (d.model !== e)
                throw TypeError("Model instance must match the definition");
            } else {
              const u = r.enumerable && _(r, c.id).value;
              l = r.create(c, u && r.isInstance(u) ? u : void 0), r.enumerable && (p = l.id, k(r, p, l, i));
            }
            r.enumerable || a.push(l);
          } else if (!r.enumerable)
            throw TypeError(`Model instance must be an object: ${typeof c}`);
          if (r.enumerable) {
            const d = a.length;
            Object.defineProperty(a, d, {
              get() {
                return D(this, d, () => N(e, p));
              },
              enumerable: !0
            });
          }
        }
        return Object.defineProperties(a, {
          id: {
            value: o.id
          },
          toString: {
            value: function() {
              return this.id;
            }
          }
        }), S.set(a, n), ke.set(a, Be), Object.freeze(a);
      }
    }, n.storage = Object.freeze({
      ...Et(n, {
        cache: r.storage.cache,
        get: !t && ((o) => r.storage.list(o))
      }),
      offline: r.storage.offline && {
        threshold: r.storage.offline.threshold,
        get: (o) => {
          const i = Z(o);
          let a = r.storage.offline.get(Me(String(i)));
          return a ? (a = a.map((c) => r.storage.offline.get(c)), a.id = i, a) : null;
        },
        set: (o, i) => {
          r.storage.offline.set(Me(String(Z(o))), i.map((a) => (r.storage.offline.set(a.id, a), a.id)));
        }
      }
    }), ze.set(e, Object.freeze(n));
  }
  return n;
}
function en(e, t) {
  return t || O();
}
function Z(e) {
  switch (typeof e) {
    case "object": {
      const t = {};
      for (const n of Object.keys(e).sort()) {
        if (typeof e[n] == "object" && e[n] !== null)
          throw TypeError(`You must use primitive value for '${n}' key: ${typeof e[n]}`);
        t[n] = e[n];
      }
      return JSON.stringify(t);
    }
    case "undefined":
      return;
    default:
      return String(e);
  }
}
const Nt = /* @__PURE__ */ new WeakSet();
function ee(e, t) {
  const n = Error(j(e, `Model instance ${t !== void 0 ? `with '${t}' id ` : ""}does not exist`));
  return Nt.add(n), n;
}
function me(e, t, n) {
  return n !== !1 && !Nt.has(t) && console.error(t), M(e, "error", t);
}
function N(e, t) {
  const n = z(e);
  let r;
  if (n.enumerable) {
    if (r = Z(t), !r && !n.list && !te.get(n))
      throw TypeError(j(e, `Provided model definition requires non-empty id: "${r}"`));
  } else if (t !== void 0)
    throw TypeError(j(e, "Provided model definition does not support id"));
  const s = n.storage.offline, o = n.storage.validate, i = _(n, r);
  return i.value && !o(i.value) && (i.resolved = !1), D(n, r, (a, c) => {
    if (c && V(c))
      return c;
    let p = !0;
    if (n.contexts)
      for (const l of n.contexts)
        D(l, l, en) === O() && (p = !1);
    if (p && c && o(c))
      return c;
    const d = () => c || s && n.create(s.get(r)) || n.placeholder(r);
    try {
      let l = n.storage.get(t);
      if (typeof l != "object" || l === null)
        throw s && s.set(r, null), ee(e, r);
      if (l instanceof Promise)
        return l = l.then((h) => {
          if (typeof h != "object" || h === null)
            throw s && s.set(r, null), ee(e, r);
          h.id !== r && (h.id = r);
          const f = n.create(h);
          return s && s.set(r, f), k(n, r, Ee(f));
        }).catch((h) => k(n, r, me(d(), h))), M(d(), "pending", l);
      l.id !== r && (l.id = r);
      const u = n.create(l);
      return s && Promise.resolve().then(() => {
        s.set(r, u);
      }), Ve(n, Ee(u), c);
    } catch (l) {
      return Ee(me(d(), l));
    }
  });
}
const te = /* @__PURE__ */ new WeakMap();
function Ue(e) {
  const t = Object.keys(e), n = Error(`Model validation failed (${t.join(", ")}) - read the details from 'errors' property`);
  return n.errors = e, n;
}
function G(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = S.get(e);
  if (n === null && (e = ve.get(e), n = S.get(e)), n === null)
    throw Error("Provided model instance has expired. Haven't you used stale value?");
  let r = !!n;
  if (n || (n = z(e)), n.nested)
    throw j(n.model, TypeError("Setting provided nested model instance is not supported, use the root model instance"));
  if (n.list)
    throw TypeError("Listing model definition does not support 'set' method");
  if (!n.storage.set)
    throw j(n.model, TypeError("Provided model definition storage does not support 'set' method"));
  if (!r && !n.enumerable && (r = !0, e = N(e)), r) {
    const i = V(e);
    if (i)
      return i.then((a) => G(a, t));
  }
  const s = te.get(n);
  let o;
  try {
    if (n.enumerable && !r && (!t || typeof t != "object"))
      throw TypeError(`Values must be an object instance: ${t}`);
    if (!s && t && hasOwnProperty.call(t, "id"))
      throw TypeError(`Values must not contain 'id' property: ${t.id}`);
    const i = n.create(t, r ? e : void 0), a = t ? Object.keys(t) : [], c = {}, p = r && s && ie(e);
    let d = !1;
    if (i) {
      for (const [u, h] of n.checks.entries()) {
        if (a.indexOf(u) === -1 && (p && p.errors && p.errors[u] && (d = !0, c[u] = p.errors[u]), s && i[u] == n.model[u]))
          continue;
        let f;
        try {
          f = h(i[u], u, i);
        } catch (g) {
          f = g;
        }
        f !== !0 && f !== void 0 && (d = !0, c[u] = f || !0);
      }
      if (d && !s)
        throw Ue(c);
    }
    o = i ? i.id : e.id;
    const l = Promise.resolve(n.storage.set(r ? o : void 0, i, a)).then((u) => {
      const h = u === i ? i : n.create(u);
      if (r && h && o !== h.id)
        throw TypeError(`Local and storage data must have the same id: '${o}', '${h.id}'`);
      let f = h ? h.id : o;
      return d && s && M(h, "error", Ue(c)), s && r && hasOwnProperty.call(u, "id") && (!i || i.id !== e.id) ? f = e.id : n.storage.offline && n.storage.offline.set(f, h), k(n, f, h || me(n.placeholder(f), ee(n.model, o), !1), !0);
    }).catch((u) => {
      throw u = u !== void 0 ? u : Error("Undefined error"), r && M(e, "error", u), u;
    });
    return r && M(e, "pending", l), l;
  } catch (i) {
    return r && M(e, "error", i), Promise.reject(i);
  }
}
function tn(e, t) {
  if (typeof t != "object")
    throw TypeError(`Values must be an object instance: ${t}`);
  let n = S.get(e);
  if (n === null && (e = ve.get(e), n = S.get(e)), n === null)
    throw Error("Provided model instance has expired. Haven't you used stale value?");
  if (n === void 0) {
    if (!t)
      throw TypeError("Values must be defined for usage with model definition");
    n = z(e), e = void 0;
  } else if (t && hasOwnProperty.call(t, "id"))
    throw TypeError(`Values must not contain 'id' property: ${t.id}`);
  if (n.list)
    throw TypeError("Listing model definition is not supported in sync method");
  const r = n.create(t, e), s = t ? r.id : e.id;
  return k(n, s, r || me(n.placeholder(s), ee(n.model, s), !1));
}
function We(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (typeof e != "object" || e === null)
    throw TypeError(`The first argument must be a model instance or a model definition: ${e}`);
  let n = S.get(e);
  if (n === null)
    throw Error("Provided model instance has expired. Haven't you used stale value from the outer scope?");
  if (n) {
    const r = t && n.storage.offline;
    r && r.set(e.id, null), qe(e), we(n, e.id, {
      clearValue: t,
      deleteEntry: t
    });
  } else {
    if (!he.get(e) && !ze.get(e[0]))
      throw Error("Model definition must be used before - passed argument is probably not a model definition");
    n = z(e);
    const r = t && n.storage.offline;
    for (const s of mt(n))
      r && r.set(s.key, null), s.value && qe(s.value);
    yt(n, {
      clearValue: t,
      deleteEntry: t
    });
  }
}
function V() {
  let e = !1;
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const s = n.map((o) => {
    try {
      const {
        state: i,
        value: a
      } = se(o);
      if (i === "pending")
        return e = !0, a;
    } catch {
    }
    return Promise.resolve(o);
  });
  return e && (n.length > 1 ? Promise.all(s) : s[0]);
}
function jt(e, t) {
  e = ve.get(e) || e, S.get(e) || (e = N(e, t));
  const n = V(e);
  if (!n) {
    const r = ie(e);
    return r ? Promise.reject(r) : Promise.resolve(e);
  }
  return n.then((r) => jt(r));
}
function ie(e, t) {
  if (e === null || typeof e != "object")
    return !1;
  const n = se(e);
  if (t !== void 0) {
    const r = typeof n.error == "object" && n.error && n.error.errors;
    return t === null ? !r && n.error : r[t];
  }
  return n.error;
}
function Re() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length > 0 && t.every((r) => {
    const s = S.get(r);
    return !!(s && s.isInstance(r));
  });
}
function Ye(e, t) {
  return e = {
    ...e,
    ...t
  }, delete e.id, e;
}
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = S.get(e);
  if (!n || !te.has(n))
    throw TypeError(`Provided model instance is not a draft: ${e}`);
  if (V(e))
    throw Error("Model draft in pending state");
  const r = te.get(n);
  let s;
  if (_(r, e.id).value) {
    const o = N(r.model, e.id);
    s = Promise.resolve(V(o) || o).then((i) => G(i, Ye(e, t)));
  } else
    s = G(r.model, Ye(e, t));
  return s = s.then((o) => (M(e, "ready"), G(e, o).then(() => o))).catch((o) => (M(e, "error", o), Promise.reject(o))), M(e, "pending", s), s;
}
function rn(e, t) {
  return !!e || `${t} is required`;
}
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rn, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  switch (typeof e) {
    case "string":
      e = new String(e);
      break;
    case "number":
      e = new Number(e);
      break;
    case "boolean":
      e = new Boolean(e);
      break;
    default:
      throw TypeError(`Default value must be a string, number or boolean: ${typeof e}`);
  }
  let r;
  if (t instanceof RegExp)
    r = (s) => t.test(s) || n;
  else if (typeof t == "function")
    r = function() {
      const s = t(...arguments);
      return s !== !0 && s !== void 0 && n || s;
    };
  else
    throw TypeError(`The second argument must be a RegExp instance or a function: ${typeof t}`);
  return xt.set(e, r), e;
}
function sn(e) {
  const t = S.get(e), n = Object.freeze(Object.create(e));
  return S.set(n, t), n;
}
function Be(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = z(e);
  if (t.id !== void 0 && typeof t.id != "function") {
    const s = t.id;
    t.id = (o) => o[s];
  }
  if (t.id && !n.enumerable)
    throw TypeError("Store factory for singleton model definition does not support 'id' option");
  let r;
  if (t.draft) {
    if (n.list)
      throw TypeError("Draft mode is not supported for listing model definition");
    r = z({
      ...e,
      [_e]: {
        get(s) {
          const o = N(n.model, s);
          return V(o) || o;
        },
        set(s, o) {
          return o === null ? {
            id: s
          } : o;
        }
      }
    }), te.set(r, n), e = r.model;
  }
  return !t.id && n.enumerable && !n.list ? {
    get(s, o) {
      const a = S.get(o) !== void 0 ? o.id : o;
      if (r && o == null) {
        const c = r.create({}, {
          id: void 0
        });
        return k(r, void 0, c, !1), N(e, void 0);
      }
      return o ? N(e, a) : void 0;
    },
    set: (s, o) => o,
    connect: r ? (s, o) => () => {
      const i = s[o];
      i && i.id && We(i, !0);
    } : void 0
  } : {
    get: (s, o) => {
      const i = S.get(o), a = t.id && t.id(s) || (i !== void 0 ? o.id : o);
      if (r && !a && o == null) {
        const p = r.create({});
        return k(r, void 0, p, !1), N(e, void 0);
      }
      if (!n.list && n.enumerable && a === void 0)
        return;
      const c = N(e, a);
      if (c !== o && Re(o) && !Re(c)) {
        const p = sn(o);
        return ye(p, "state", () => se(c)), p;
      }
      return c;
    },
    set: !t.id && n.list || r && !n.enumerable ? (s, o) => o : void 0,
    connect: r && n.enumerable ? (s, o) => () => {
      const i = s[o];
      i && i.id && We(i, !0);
    } : void 0
  };
}
const Pt = Object.freeze(Object.assign(Be, {
  // storage
  connect: _e,
  // actions
  get: N,
  set: G,
  sync: tn,
  clear: We,
  // guards
  pending: V,
  error: ie,
  ready: Re,
  // helpers
  submit: nn,
  value: on,
  resolve: jt,
  ref: Ut
})), H = /* @__PURE__ */ new WeakMap();
function I(e) {
  let t = H.get(e);
  return t || (H.set(e, t = {}), t);
}
function Te(e) {
  let t;
  for (; e && (t = I(e)) && t.endNode; )
    e = t.endNode;
  return e;
}
function ne(e) {
  if (e.nodeType === globalThis.Node.TEXT_NODE) {
    const t = H.get(e);
    if (t && t.startNode) {
      const n = Te(t.endNode);
      let r = t.startNode;
      const s = n.nextSibling;
      for (; r; ) {
        const o = r.nextSibling;
        r.parentNode.removeChild(r), r = o !== s && o;
      }
      H.set(e, {});
    }
  } else {
    let t = e.childNodes[0];
    for (; t; )
      e.removeChild(t), t = e.childNodes[0];
    H.set(e, {});
  }
}
const ln = Date.now(), W = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return `H-${ln}-${e}`;
}, Fe = !!(globalThis.document && globalThis.document.adoptedStyleSheets), Ne = /^\d+$/, an = {
  // base
  block: (e, t) => ({
    display: "block",
    "text-align": t
  }),
  inline: (e) => {
    let {
      display: t
    } = e;
    return {
      display: `inline${t ? `-${t}` : ""}`
    };
  },
  contents: {
    display: "contents"
  },
  hidden: {
    display: "none"
  },
  // flexbox
  ...["row", "row-reverse", "column", "column-reverse"].reduce((e, t) => (e[t] = function(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "nowrap";
    return {
      display: "flex",
      "flex-flow": `${t} ${r}`
    };
  }, e), {}),
  grow: function(e) {
    return {
      "flex-grow": arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
    };
  },
  shrink: function(e) {
    return {
      "flex-shrink": arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
    };
  },
  basis: (e, t) => ({
    "flex-basis": $(t)
  }),
  order: function(e) {
    return {
      order: arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
    };
  },
  // grid
  grid: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "1", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "";
    return {
      display: "grid",
      ...["columns", "rows"].reduce((o, i) => {
        const a = i === "columns" ? t : n;
        return o[`grid-template-${i}`] = a && a.split("|").map((c) => c.match(Ne) ? `repeat(${c}, minmax(0, 1fr))` : $(c)).join(" "), o;
      }, {}),
      "grid-auto-flow": `${r} ${s && "dense"}`
    };
  },
  area: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return {
      "grid-column": t.match(Ne) ? `span ${t}` : t,
      "grid-row": n.match(Ne) ? `span ${n}` : n
    };
  },
  gap: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return {
      "column-gap": $(t),
      "row-gap": $(n || t)
    };
  },
  // alignment
  items: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "start", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return {
      "place-items": `${t} ${n}`
    };
  },
  content: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "start", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return {
      "place-content": `${t} ${n}`
    };
  },
  self: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "start", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return {
      "place-self": `${t} ${n}`
    };
  },
  center: {
    "place-items": "center",
    "place-content": "center"
  },
  // size
  size: function(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t;
    return {
      width: $(t),
      height: $(n),
      "box-sizing": "border-box"
    };
  },
  width: (e, t, n, r) => ({
    width: $(t),
    "min-width": $(n),
    "max-width": $(r),
    "box-sizing": "border-box"
  }),
  height: (e, t, n, r) => ({
    height: $(t),
    "min-height": $(n),
    "max-height": $(r),
    "box-sizing": "border-box"
  }),
  ratio: (e, t) => ({
    "aspect-ratio": t
  }),
  overflow: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "hidden", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    const r = n ? `-${t}` : "", s = n || t;
    return {
      [`overflow${r}`]: s,
      ...s === "scroll" ? {
        "flex-grow": e["flex-grow"] || 1,
        "flex-basis": 0,
        "overscroll-behavior": "contain",
        "--webkit-overflow-scrolling": "touch"
      } : {}
    };
  },
  margin: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "1", n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    return t.match(/top|bottom|left|right/) ? {
      [`margin-${t}`]: $(n || "1")
    } : {
      margin: `${$(t)} ${$(n)} ${$(r)} ${$(s)}`
    };
  },
  padding: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "1", n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    return t.match(/top|bottom|left|right/) ? {
      [`padding-${t}`]: $(n || "1")
    } : {
      padding: `${$(t)} ${$(n)} ${$(r)} ${$(s)}`
    };
  },
  // position types
  absolute: {
    position: "absolute"
  },
  relative: {
    position: "relative"
  },
  fixed: {
    position: "fixed"
  },
  sticky: {
    position: "sticky"
  },
  static: {
    position: "static"
  },
  // position values
  inset: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const n = $(t);
    return {
      top: n,
      right: n,
      bottom: n,
      left: n
    };
  },
  top: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return {
      top: $(t)
    };
  },
  bottom: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return {
      bottom: $(t)
    };
  },
  left: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return {
      left: $(t)
    };
  },
  right: function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return {
      right: $(t)
    };
  },
  layer: function(e) {
    return {
      "z-index": arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
    };
  },
  "": function(e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
      r[s - 2] = arguments[s];
    if (r.length < 2)
      throw new Error("Generic rule '::' requires at least two arguments, eg.: ::[property]:[name]");
    return {
      [r[r.length - 2]]: `var(--${r.join("-")})`
    };
  },
  view: (e, t) => ({
    "view-transition-name": t
  })
}, un = {
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
  full: "100%"
}, cn = {
  portrait: "orientation: portrait",
  landscape: "orientation: landscape"
};
function $(e) {
  return e = un[e] || e, /^-?\d+(\.\d+)*$/.test(String(e)) ? `${e * 8}px` : e || "";
}
let B;
function Ct() {
  if (B)
    return B;
  if (Fe)
    B = new globalThis.CSSStyleSheet();
  else {
    const e = globalThis.document.createElement("style");
    e.appendChild(globalThis.document.createTextNode("")), globalThis.document.head.appendChild(e), B = e.sheet;
  }
  return B.insertRule(":host([hidden]) { display: none; }"), B;
}
const Qe = /* @__PURE__ */ new WeakMap();
let Ie = /* @__PURE__ */ new WeakSet();
function fn(e) {
  const t = e.getRootNode();
  if (Ie.has(t))
    return;
  const n = Ct();
  if (Fe)
    t.adoptedStyleSheets = [...t.adoptedStyleSheets, n];
  else {
    if (t === globalThis.document)
      return;
    let r = Qe.get(t);
    r || (r = globalThis.document.createElement("style"), t.appendChild(r), Qe.set(t, r));
    let s = "";
    for (let o = 0; o < n.cssRules.length; o++)
      s += n.cssRules[o].cssText;
    r.textContent = s;
  }
  Ie.add(t);
}
const Ze = /* @__PURE__ */ new Map();
function et(e, t, n, r) {
  let s = Ze.get(e);
  s || (s = `l-${Math.random().toString(36).substr(2, 5)}`, Ze.set(e, s)), Fe || (Ie = /* @__PURE__ */ new WeakSet());
  const o = Ct(), [i, a = ""] = t.split("@"), c = Object.entries(n.replace(/\s+/g, " ").trim().split(" ").reduce((d, l) => {
    const [u, ...h] = l.split(":"), f = an[u];
    if (!f)
      throw TypeError(`Unsupported layout rule: '${u}'`);
    return Object.assign(d, typeof f == "function" ? f(d, ...h.map((g) => g.match(/--.*/) ? `var(${g})` : g)) : f);
  }, {})).reduce((d, l) => {
    let [u, h] = l;
    return h !== void 0 && h !== "" ? d + `${u}: ${h};` : d;
  }, ""), p = a.split(":").reduce((d, l) => l === "" ? d : d + ` and (${cn[l] || `min-width: ${l}`})`, "@media screen");
  if (r) {
    const d = `:host(.${s}-s${i})`, l = `:where(.${s}-c${i})`;
    [d, l].forEach((u) => {
      o.insertRule(a ? `${p} { ${u} { ${c} } }` : `${u} { ${c} }`, o.cssRules.length - 1);
    });
  } else {
    const d = `.${s}${i}`;
    o.insertRule(a ? `${p} { ${d} { ${c} } }` : `${d} { ${c} }`, o.cssRules.length - 1);
  }
  return s;
}
const De = /* @__PURE__ */ new WeakMap();
function dn(e, t) {
  const n = I(e), r = n.startNode, s = Te(n.endNode);
  t.parentNode.insertBefore(e, t.nextSibling);
  let o = e, i = r;
  for (; i; ) {
    const a = i.nextSibling;
    o.parentNode.insertBefore(i, o.nextSibling), o = i, i = a !== s.nextSibling && a;
  }
}
function gn(e, t, n, r, s) {
  let o = De.get(t);
  const i = n.map((d, l) => ({
    id: hasOwnProperty.call(d, "id") ? d.id : l,
    value: d,
    placeholder: null,
    available: !0
  }));
  if (De.set(t, i), o) {
    const d = /* @__PURE__ */ new Set();
    for (const l of i)
      d.add(l.id);
    o = o.filter((l) => d.has(l.id) ? !0 : (ne(l.placeholder), l.placeholder.parentNode.removeChild(l.placeholder), !1));
  }
  let a = t;
  const c = n.length - 1, p = I(t);
  for (let d = 0; d < i.length; d += 1) {
    const l = i[d];
    let u;
    if (o) {
      for (let h = 0; h < o.length; h += 1)
        if (o[h].available && o[h].id === l.id) {
          u = o[h];
          break;
        }
    }
    u ? (u.available = !1, l.placeholder = u.placeholder, l.placeholder.previousSibling !== a && dn(l.placeholder, a), u.value !== l.value && r(e, l.placeholder, l.value, u.value, s)) : (l.placeholder = globalThis.document.createTextNode(""), a.parentNode.insertBefore(l.placeholder, a.nextSibling), r(e, l.placeholder, l.value, void 0, s)), a = Te(I(l.placeholder).endNode || l.placeholder), d === 0 && (p.startNode = l.placeholder), d === c && (p.endNode = a);
  }
  if (o)
    for (const d of o)
      d.available && (ne(d.placeholder), d.placeholder.parentNode.removeChild(d.placeholder));
}
function pn(e, t, n) {
  ne(t);
  const r = I(t);
  r.startNode = r.endNode = n, t.parentNode.insertBefore(n, t.nextSibling);
}
function tt(e) {
  const t = typeof e;
  if (t === "object") {
    if (Array.isArray(e))
      return "array";
    if (e instanceof globalThis.Node)
      return "node";
  }
  return t;
}
function re(e, t, n, r, s) {
  const o = tt(n), i = tt(r);
  switch (i !== "undefined" && o !== i && (o !== "function" && ne(t), i === "array" ? De.delete(t) : i !== "node" && i !== "function" && (t.textContent = "")), o) {
    case "array":
      gn(e, t, n, re, s);
      break;
    case "node":
      pn(e, t, n);
      break;
    case "function":
      s && (n.useLayout = !0), n(e, t);
      break;
    default:
      t.textContent = o === "number" || n ? n : "";
  }
}
const je = /* @__PURE__ */ new WeakMap();
function hn(e) {
  return (t, n, r, s) => {
    if (s) {
      const o = je.get(n);
      n.removeEventListener(e, o.get(s), s.options !== void 0 ? s.options : !1);
    }
    if (r) {
      if (typeof r != "function")
        throw Error(`Event listener must be a function: ${typeof r}`);
      let o = je.get(n);
      o || (o = /* @__PURE__ */ new WeakMap(), je.set(n, o));
      const i = r.bind(null, t);
      o.set(r, i), n.addEventListener(e, i, r.options !== void 0 ? r.options : !1);
    }
  };
}
function mn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  if (Array.isArray(e))
    for (const n of e)
      n && t.add(n);
  else if (e !== null && typeof e == "object")
    for (const [n, r] of Object.entries(e))
      n && r && t.add(n);
  else
    e && t.add(e);
  return t;
}
const nt = /* @__PURE__ */ new WeakMap();
function bn(e, t, n) {
  const r = nt.get(t) || /* @__PURE__ */ new Set(), s = mn(n);
  nt.set(t, s);
  for (const o of s)
    t.classList.add(o), r.delete(o);
  for (const o of r)
    t.classList.remove(o);
}
const rt = /* @__PURE__ */ new WeakMap();
function yn(e, t, n) {
  if (n === null || typeof n != "object")
    throw TypeError(`Style value must be an object in ${de(t)}:`, n);
  const r = rt.get(t) || /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  for (const o of Object.keys(n)) {
    const i = oe(o), a = n[o];
    !a && a !== 0 ? t.style.removeProperty(i) : t.style.setProperty(i, a), s.set(i, a), r.delete(i);
  }
  for (const o of r.keys())
    t.style[o] = "";
  rt.set(t, s);
}
function wn(e, t, n) {
  if (t.substr(0, 2) === "on") {
    const r = t.substr(2);
    return hn(r);
  }
  switch (e) {
    case "class":
      return bn;
    case "style":
      return yn;
    default: {
      let r = !1;
      return (s, o, i) => {
        if (r = r || !n && !(o instanceof globalThis.SVGElement) && t in o, r)
          o[t] = i;
        else if (i === !1 || i === void 0 || i === null)
          o.removeAttribute(e);
        else {
          const a = i === !0 ? "" : String(i);
          o.setAttribute(e, a);
        }
      };
    }
  }
}
const At = W("(\\d+)"), K = new RegExp(`^${At}$`), F = new RegExp(At, "g"), vn = /^[^A-Za-z]+$/;
function Tn(e) {
  let t = e[0], n = !1;
  for (let r = 1; r < e.length; r += 1)
    n = n || e[r - 1].match(/<\s*(table|tr|thead|tbody|tfoot|colgroup)([^<>]|"[^"]*"|'[^']*')*>\s*$/), t += (n ? `<!--${W(r - 1)}-->` : W(r - 1)) + e[r], n = n && !e[r].match(/<\/\s*(table|tr|thead|tbody|tfoot|colgroup)\s*>/);
  return t;
}
function $n(e) {
  return e.replace(/\s*=\s*['"]*$/g, "").split(/\s+/).pop();
}
function ot(e) {
  return globalThis.document.createTreeWalker(e, globalThis.NodeFilter.SHOW_ELEMENT | globalThis.NodeFilter.SHOW_TEXT | globalThis.NodeFilter.SHOW_COMMENT, null, !1);
}
function En(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  e = e.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g, "");
  let n = e.indexOf(`
`);
  if (n > -1) {
    let r = 0 - t - 2;
    for (n += 1; e[n] === " " && n < e.length; n += 1)
      r += 1;
    return e.replace(/\n +/g, (s) => s.substr(0, Math.max(s.length - r, 1)));
  }
  return e;
}
function st(e, t) {
  const n = W(t);
  return `${En(e).split(`
`).filter((s) => s).map((s) => {
    const o = s.indexOf(n);
    return o > -1 ? `| ${s}
--${"-".repeat(o)}${"^".repeat(6)}` : `| ${s}`;
  }).join(`
`).replace(F, "${...}")}`;
}
const it = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new WeakMap();
function Sn(e, t) {
  const n = lt.get(e);
  if (!n && !t)
    return;
  const r = t && t.map((o) => {
    let i = o;
    return i instanceof globalThis.CSSStyleSheet || (i = it.get(o), i || (i = new globalThis.CSSStyleSheet(), i.replaceSync(o), it.set(o, i))), i;
  });
  let s;
  if (n) {
    if (r && r.length === n.length && r.every((o, i) => o === n[i]))
      return;
    s = e.adoptedStyleSheets.filter((o) => !n.includes(o));
  }
  r && (s = (s || e.adoptedStyleSheets).concat(r)), e.adoptedStyleSheets = s, lt.set(e, r);
}
const Pe = /* @__PURE__ */ new WeakMap();
function Lt(e, t) {
  let n = Pe.get(e);
  if (t) {
    (!n || n.parentNode !== e) && (n = globalThis.document.createElement("style"), Pe.set(e, n), e = Te(e), e.nodeType === globalThis.Node.TEXT_NODE ? e.parentNode.insertBefore(n, e.nextSibling) : e.appendChild(n));
    const r = [...t].join(`
/*------*/
`);
    n.textContent !== r && (n.textContent = r);
  } else
    n && (n.parentNode.removeChild(n), Pe.set(e, null));
}
const at = /* @__PURE__ */ new WeakMap();
function xn(e, t) {
  let n = at.get(e);
  n || (n = e.adoptedStyleSheets ? Sn : Lt, at.set(e, n)), n(e, t);
}
function On(e, t, n, r) {
  let s = globalThis.document.createElement("template");
  const o = {}, i = n ? e : Tn(e);
  if (s.innerHTML = t ? `<svg>${i}</svg>` : i, t) {
    const f = s.content.firstChild;
    s.content.removeChild(f);
    for (const g of Array.from(f.childNodes))
      s.content.appendChild(g);
  }
  let a;
  const c = s.content.children[0];
  if (c instanceof globalThis.HTMLTemplateElement) {
    for (const f of Array.from(c.attributes)) {
      const g = f.value.trim();
      if (g && f.name.startsWith("layout")) {
        if (g.match(F))
          throw Error("Layout attribute cannot contain expressions");
        a = et(c, f.name.substr(6), g, !0);
      }
    }
    if (a !== void 0 && s.content.children.length > 1)
      throw Error("Template, which uses layout system must have only the '<template>' root element");
    r = a || c.hasAttribute("layout"), s = c;
  }
  const p = ot(s.content), d = [];
  let l = 0, u = null;
  for (; p.nextNode(); ) {
    let f = p.currentNode;
    if (u && !u.contains(f) && (u = null), f.nodeType === globalThis.Node.COMMENT_NODE && K.test(f.textContent) && (f.parentNode.insertBefore(globalThis.document.createTextNode(f.textContent), f.nextSibling), p.nextNode(), f.parentNode.removeChild(f), f = p.currentNode), f.nodeType === globalThis.Node.TEXT_NODE) {
      let g = f.textContent;
      const y = g.match(K);
      if (y)
        f.textContent = "", o[y[1]] = [l, re];
      else {
        if (Fn() && !n && !u && !g.match(/^\s*$/)) {
          let T;
          const w = g.trim(), m = w.replace(/\s+/g, " ").replace(F, (v, E) => (E = Number(E), T === void 0 && (T = E), `\${${E - T}}`));
          if (!m.match(vn)) {
            let v = f.previousSibling && f.previousSibling.nodeType === globalThis.Node.COMMENT_NODE ? f.previousSibling : "";
            v && (v.parentNode.removeChild(v), l -= 1, v = (v.textContent.split("|")[1] || "").trim().replace(/\s+/g, " "));
            const E = Jn(m, v).replace(/\${(\d+)}/g, (R, P) => W(Number(P) + T));
            g = g.replace(w, E), f.textContent = g;
          }
        }
        const b = g.match(F);
        if (b) {
          let T = f;
          b.reduce((w, m) => {
            const [v, E] = w.pop().split(m);
            return v && w.push(v), w.push(m), E && w.push(E), w;
          }, [g]).forEach((w, m) => {
            m === 0 ? T.textContent = w : (T = T.parentNode.insertBefore(globalThis.document.createTextNode(w), T.nextSibling), p.currentNode = T, l += 1);
            const v = T.textContent.match(K);
            v && (T.textContent = "", o[v[1]] = [l, re]);
          });
        }
      }
    } else if (f.nodeType === globalThis.Node.ELEMENT_NODE) {
      if (!u && (f.getAttribute("translate") === "no" || f.tagName.toLowerCase() === "script" || f.tagName.toLowerCase() === "style") && (u = f), Ae) {
        const g = f.tagName.toLowerCase();
        g.match(/.+-.+/) && !globalThis.customElements.get(g) && !d.includes(g) && d.push(g);
      }
      for (const g of Array.from(f.attributes)) {
        const y = g.value.trim(), b = g.name;
        if (r && b.startsWith("layout") && y) {
          if (y.match(F))
            throw Error("Layout attribute cannot contain expressions");
          const w = et(f, b.substr(6), y);
          f.removeAttribute(b), f.classList.add(w);
          continue;
        }
        const T = y.match(K);
        if (T) {
          const w = $n(e[T[1]]);
          o[T[1]] = [l, wn(b, w, t)], f.removeAttribute(g.name);
        } else {
          const w = y.match(F);
          if (w) {
            const m = `attr__${b}`;
            for (const [v, E] of w.entries()) {
              const [, R] = E.match(K);
              let P = !1;
              o[R] = [l, (J, C, A) => {
                const L = I(C);
                L[m] = (L[m] || y).replace(E, A ?? ""), (w.length === 1 || v + 1 === w.length) && (P = P || !t && !(C instanceof globalThis.SVGElement) && b in C, P ? C[b] = L[m] : C.setAttribute(b, L[m]), L[m] = void 0);
              }];
            }
            g.value = "";
          }
        }
      }
    }
    l += 1;
  }
  Ae && d.length && console.warn(`Not defined ${d.map((f) => `<${f}>`).join(", ")} element${d.length > 1 ? "s" : ""} found in the template:
${st(i, -1)}`);
  const h = Object.keys(o);
  return function(g, y, b, T) {
    let {
      styleSheets: w
    } = T, m = I(y);
    if (s !== m.template) {
      const v = globalThis.document.importNode(s.content, !0), E = ot(v), R = [];
      let P = 0, J = 0, C = o[h[J]];
      for (; E.nextNode(); ) {
        const A = E.currentNode;
        for (; C && C[0] === P; )
          R.push({
            index: h[J],
            node: A,
            fn: C[1]
          }), J += 1, C = o[h[J]];
        P += 1;
      }
      if (m.hostLayout && g.classList.remove(m.hostLayout), ne(y), m = I(y), m.template = s, m.markers = R, y.nodeType === globalThis.Node.TEXT_NODE) {
        Lt(y), m.startNode = v.childNodes[0], m.endNode = v.childNodes[v.childNodes.length - 1];
        let A = y, L = v.childNodes[0];
        for (; L; )
          y.parentNode.insertBefore(L, A.nextSibling), A = L, L = v.childNodes[0];
      } else {
        if (r) {
          const A = `${a}-${g === y ? "c" : "s"}`;
          g.classList.add(A), m.hostLayout = A;
        }
        y.appendChild(v);
      }
      r && fn(y);
    }
    xn(y, w);
    for (const v of m.markers) {
      const E = b[v.index], R = m.prevArgs && m.prevArgs[v.index];
      if (!(m.prevArgs && E === R))
        try {
          v.fn(g, v.node, E, R, r);
        } catch (P) {
          throw console.error(`Error while updating template expression in ${de(g)}:
${st(i, v.index)}`), P;
        }
    }
    m.prevArgs = b;
  };
}
const Ce = /* @__PURE__ */ new WeakMap();
function Nn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  return function r(s, o) {
    const i = r.useLayout;
    let a;
    t && (a = setTimeout(() => {
      a = void 0, re(s, o, t, void 0, i);
    }, n)), Ce.set(o, e), e.then((c) => {
      a && clearTimeout(a), Ce.get(o) === e && (re(s, o, c, t && !a ? t : void 0, i), Ce.set(o, null));
    });
  };
}
function ut(e, t) {
  let {
    target: n,
    detail: r
  } = e, s;
  switch (n.type) {
    case "radio":
    case "checkbox":
      s = n.checked && n.value;
      break;
    case "file":
      s = n.files;
      break;
    default:
      s = r && hasOwnProperty.call(r, "value") ? r.value : n.value;
  }
  t(s);
}
function jn(e, t) {
  return e.split(".").reverse().reduce((n, r) => n ? {
    [r]: n
  } : {
    [r]: t
  }, null);
}
const ct = /* @__PURE__ */ new Map();
function Pn(e, t) {
  if (!e)
    throw Error(`The first argument must be a property name or an object instance: ${e}`);
  if (typeof e == "object") {
    if (t === void 0)
      throw Error("For model instance property the second argument must be defined");
    const r = ke.get(e);
    if (!r)
      throw Error("Provided object must be a model instance of the store");
    return t === null ? () => {
      r.set(e, null);
    } : (s, o) => {
      ut(o, (i) => {
        r.set(e, jn(t, i));
      });
    };
  }
  if (arguments.length === 2)
    return (r) => {
      r[e] = t;
    };
  let n = ct.get(e);
  return n || (n = (r, s) => {
    ut(s, (o) => {
      r[e] = o;
    });
  }, ct.set(e, n)), n;
}
let ce;
const Cn = globalThis.document && globalThis.document.startViewTransition !== void 0 && function(t) {
  return function n(r, s) {
    if (ce) {
      console.warn(`${de(r)}: view transition already started in ${de(ce)}`), t(r, s);
      return;
    }
    t.useLayout = n.useLayout, ce = r, globalThis.document.startViewTransition(() => (t(r, s), be.then(() => {
      ce = void 0;
    })));
  };
} || // istanbul ignore next
((e) => e), An = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  resolve: Nn,
  set: Pn,
  transition: Cn
}, Symbol.toStringTag, {
  value: "Module"
}));
function Ln(e) {
  return this.id = e, this;
}
function Mn() {
  return this.styleSheets = this.styleSheets || [], this.styleSheets.push(...arguments), this;
}
function zn(e) {
  this.styleSheets = this.styleSheets || [];
  let t = e[0];
  for (let n = 1; n < e.length; n++)
    t += ((n - 1 + 1 < 1 || arguments.length <= n - 1 + 1 ? void 0 : arguments[n - 1 + 1]) !== void 0 ? n - 1 + 1 < 1 || arguments.length <= n - 1 + 1 ? void 0 : arguments[n - 1 + 1] : "") + e[n];
  return this.styleSheets.push(t), this;
}
function Wn(e) {
  return this.plugins = this.plugins || [], this.plugins.push(e), this;
}
const Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: zn,
  key: Ln,
  style: Mn,
  use: Wn
}, Symbol.toStringTag, {
  value: "Module"
})), In = W(), Dn = W("svg"), kn = W("msg"), _n = W("layout"), ft = /* @__PURE__ */ new Map();
function Vn(e, t, n, r) {
  function s(o) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, a = r ? e + kn : e.join(In);
    n && (a += Dn);
    const c = s.useLayout;
    c && (a += _n);
    let p = ft.get(a);
    p || (p = On(e, n, r, c), ft.set(a, p)), s.plugins ? s.plugins.reduce((d, l) => l(d), () => p(o, i, t, s))(o, i) : p(o, i, t, s);
  }
  return Object.assign(s, Rn);
}
function Je(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return Vn(e, n, !1, !1);
}
Object.freeze(Object.assign(Je, An));
const fe = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map();
let Mt = null;
const Bn = (() => {
  let e;
  try {
    e = globalThis.navigator.languages || [globalThis.navigator.language];
  } catch {
    e = [];
  }
  return e.reduce((t, n) => {
    const r = n.split("-")[0];
    return t.add(n), n !== r && t.add(r), t;
  }, /* @__PURE__ */ new Set());
})();
function Fn() {
  return Mt !== null || fe.size;
}
const gt = /* @__PURE__ */ new Map();
function Jn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  e = e.trim().replace(/\s+/g, " "), t = t.trim();
  const r = `${e} | ${t}`;
  let s = dt.get(r);
  if (!s) {
    if (fe.size)
      for (const o of Bn) {
        const i = fe.get(o);
        if (i && (s = i[r] || i[e], s)) {
          if (s = s.message, typeof s == "object") {
            let a = gt.get(o);
            a || (a = new Intl.PluralRules(o), gt.set(o, a));
            const c = s;
            s = (p) => p === 0 && c.zero || c[a.select(p)] || c.other || "";
          }
          break;
        }
      }
    s || s || (s = e, (fe.size || Mt) && Ae && console.warn(`Missing translation: "${e}"${t ? ` [${t}]` : ""}`)), dt.set(r, s);
  }
  return typeof s == "function" ? s(n[0]) : s;
}
const zt = {
  title: "",
  description: "",
  expectedBehaviour: ""
};
function Xn(e, t) {
  t.preventDefault(), console.log(Pt.get(zt));
}
function Kn(e, t) {
  Pt.set(zt, {
    [t.target.name]: t.target.value
  }).then((n) => {
    console.log(n, t.target.name, t.target.value);
  });
}
Tt({
  tag: "lunar-bug-tool",
  render: () => Je`
    <form onsubmit="${Xn}">
      <lunar-bug-tool-input name="title"></lunar-bug-tool-input>
      <lunar-bug-tool-input name="description"></lunar-bug-tool-input>
      <lunar-bug-tool-input name="expectedBehaviour"></lunar-bug-tool-input>

      <button>Submit</button>
    </form>
  `
});
Tt({
  tag: "lunar-bug-tool-input",
  name: "",
  value: "",
  render: (e) => {
    let {
      value: t,
      name: n
    } = e;
    return Je`
    <div>
      <input type="text" name="${n}" value="${t}" oninput="${Kn}" />
    </div>
  `;
  }
});
document.body.appendChild(document.createElement("lunar-bug-tool"));
