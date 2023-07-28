const He = /* @__PURE__ */ new Map();
function se(e) {
  let t = He.get(e);
  return t === void 0 && (t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), He.set(e, t)), t;
}
function he(e) {
  return `<${String(e.tagName).toLowerCase()}>`;
}
function be(e, t) {
  e.nodeType === globalThis.Node.ELEMENT_NODE && (t(e), e.shadowRoot && be(e.shadowRoot, t));
  const n = globalThis.document.createTreeWalker(
    e,
    globalThis.NodeFilter.SHOW_ELEMENT,
    null,
    !1
  );
  for (; n.nextNode(); ) {
    const o = n.currentNode;
    t(o), o.shadowRoot && be(o.shadowRoot, t);
  }
}
const we = Promise.resolve(), Ve = /* @__PURE__ */ new WeakMap(), Re = be.name === "walkInShadow", Q = /* @__PURE__ */ new Set();
function vt(e) {
  Q.size || we.then(Xt), Q.add(e);
}
function Ut(e) {
  Q.delete(e);
}
function Xt() {
  for (const e of Q)
    try {
      e();
    } catch (t) {
      console.error(t);
    }
  Q.clear();
}
const Z = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new Set();
function Tt(e) {
  const t = /* @__PURE__ */ new Set(), n = t.values();
  for (; e; ) {
    if (e.resolved = !1, e.deps) {
      for (const o of e.deps)
        o.contexts.delete(e);
      e.deps.clear();
    }
    if (e.contexts)
      for (const o of e.contexts)
        G.has(o) || (t.add(o), e.contexts.delete(o));
    e.observe && vt(e.observe), e = n.next().value;
  }
}
function B(e, t) {
  let n = Z.get(e);
  n || (n = /* @__PURE__ */ new Map(), Z.set(e, n));
  let o = n.get(t);
  return o || (o = {
    key: t,
    target: e,
    value: void 0,
    lastValue: void 0,
    resolved: !1,
    contexts: void 0,
    deps: void 0,
    observe: void 0
  }, n.set(t, o)), o;
}
function $t(e) {
  const t = Z.get(e);
  return t ? [...t.values()] : [];
}
let j = null;
function W(e, t, n) {
  const o = B(e, t);
  if (j && (o.contexts || (o.contexts = /* @__PURE__ */ new Set()), j.deps || (j.deps = /* @__PURE__ */ new Set()), o.contexts.add(j), j.deps.add(o)), o.resolved)
    return o.value;
  const i = j;
  try {
    if (G.has(o))
      throw Error(`Circular get invocation is forbidden: '${t}'`);
    j = o, G.add(o), o.value = n(e, o.value), o.resolved = !0, j = i, G.delete(o);
  } catch (r) {
    throw j = i, G.delete(o), j && (j.deps.delete(o), o.contexts.delete(j)), r;
  }
  return o.value;
}
function ve(e, t, n, o) {
  const i = B(e, t), r = n(e, o, i.value);
  r !== i.value && (i.value = r, Tt(i));
}
function Jt(e, t, n, o) {
  const i = B(e, t);
  i.observe = () => {
    const r = W(e, t, n);
    r !== i.lastValue && (o(e, r, i.lastValue), i.lastValue = r);
  };
  try {
    i.observe();
  } catch (r) {
    console.error(r);
  }
  return () => {
    Ut(i.observe), i.observe = void 0, i.lastValue = void 0;
  };
}
const ce = /* @__PURE__ */ new Set();
function qt(e) {
  ce.size || setTimeout(() => {
    for (const t of ce)
      if (!t.contexts || t.contexts.size === 0) {
        if (t.deps)
          for (const o of t.deps)
            o.contexts.delete(t);
        Z.get(t.target).delete(t.key);
      }
    ce.clear();
  }), ce.add(e);
}
function St(e, t) {
  Tt(e), t.clearValue && (e.value = void 0, e.lastValue = void 0), t.deleteEntry && qt(e);
}
function Te(e, t, n = {}) {
  const o = B(e, t);
  St(o, n);
}
function Et(e, t = {}) {
  const n = Z.get(e);
  if (n)
    for (const o of n.values())
      St(o, t);
}
function Ye(e, t) {
  return {
    get: t ? (n) => {
      const o = e(n), i = n.shadowRoot || n.attachShadow({
        mode: "open",
        delegatesFocus: e.delegatesFocus || !1
      });
      return () => (o(n, i), i);
    } : (n) => {
      const o = e(n);
      return () => (o(n, n), n);
    },
    observe(n, o) {
      o();
    }
  };
}
const xt = {
  string: (e, t, n) => {
    const o = t ? String(t) : "";
    return o ? e.setAttribute(n, o) : e.removeAttribute(n), o;
  },
  number: (e, t, n) => {
    const o = Number(t);
    return e.setAttribute(n, o), o;
  },
  boolean: (e, t, n) => {
    const o = !!t;
    return o ? e.setAttribute(n, "") : e.removeAttribute(n), o;
  },
  undefined: (e, t, n) => {
    const o = typeof t, i = o !== "undefined" && xt[o];
    return i ? i(e, t, n) : (e.hasAttribute(n) && e.removeAttribute(n), t);
  }
}, Kt = {
  string: (e, t) => e.getAttribute(t),
  number: (e, t) => Number(e.getAttribute(t)) || 0,
  boolean: (e, t) => e.hasAttribute(t),
  undefined: (e, t) => e.getAttribute(t)
};
function Gt(e, t) {
  const n = typeof t.value, o = xt[n], i = Kt[n];
  if (!o)
    throw TypeError(
      `Invalid default value for '${e}' property - it must be a string, number, boolean or undefined: ${n}`
    );
  const r = se(e);
  return {
    get: (s, c) => c === void 0 ? i(s, r) || t.value : c,
    set: (s, c) => o(s, c, r),
    connect: n !== "undefined" ? (s, c, f) => (!s.hasAttribute(r) && s[c] === t.value && (s[c] = o(s, t.value, r)), t.connect && t.connect(s, c, f)) : t.connect,
    observe: t.observe
  };
}
const ee = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap();
function Me(e, t) {
  if (t) {
    const r = ee.get(t);
    if (e === r)
      return t;
    for (const s of Object.keys(r))
      s !== "tag" && delete t.prototype[s];
  } else
    t = class extends globalThis.HTMLElement {
      connectedCallback() {
        for (const s of t.settable) {
          if (!hasOwnProperty.call(this, s))
            continue;
          const c = this[s];
          delete this[s], this[s] = c;
        }
        const r = /* @__PURE__ */ new Set();
        fe.set(this, r), vt(() => {
          if (r === fe.get(this)) {
            for (const s of t.connects)
              r.add(s(this));
            for (const s of t.observers)
              r.add(s(this));
          }
        });
      }
      disconnectedCallback() {
        const r = fe.get(this);
        for (const s of r)
          s && s();
        fe.delete(this), Et(this);
      }
    };
  ee.set(t, Object.freeze(e));
  const n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  for (const r of Object.keys(e)) {
    if (r === "tag")
      continue;
    let s = e[r];
    const c = typeof s;
    if (c === "function")
      r === "render" ? s = Ye(s, !0) : r === "content" ? s = Ye(s) : s = { get: s };
    else if (c !== "object" || s === null)
      s = { value: s };
    else if (s.set) {
      if (hasOwnProperty.call(s, "value"))
        throw TypeError(
          `Invalid property descriptor for '${r}' property - it must not have 'value' and 'set' properties at the same time.`
        );
      const f = se(r), h = s.get || ((b, l) => l);
      s.get = (b, l) => (l === void 0 && (l = s.set(b, b.getAttribute(f) || l)), h(b, l));
    }
    if (hasOwnProperty.call(s, "value"))
      s = Gt(r, s);
    else if (!s.get)
      throw TypeError(
        `Invalid descriptor for '${r}' property - it must contain 'value' or 'get' option`
      );
    s.set && i.add(r), Object.defineProperty(t.prototype, r, {
      get: function() {
        return W(this, r, s.get);
      },
      set: s.set && function(h) {
        ve(this, r, s.set, h);
      },
      enumerable: !0,
      configurable: !0
    }), s.connect && n.add(
      (f) => s.connect(f, r, () => {
        Te(f, r);
      })
    ), s.observe && o.add((f) => Jt(f, r, s.get, s.observe));
  }
  return t.connects = n, t.observers = o, t.settable = i, t;
}
const q = /* @__PURE__ */ new Map();
function Ht(e) {
  q.size || we.then(() => {
    be(globalThis.document.body, (t) => {
      if (q.has(t.constructor)) {
        const n = q.get(t.constructor), o = ee.get(t.constructor);
        t.disconnectedCallback();
        for (const i of Object.keys(o)) {
          const r = typeof o[i], s = r !== "object" && r !== "function" && o[i] !== n[i];
          s && t.removeAttribute(se(i)), Te(t, i, { clearValue: s });
        }
        t.connectedCallback();
      }
    }), q.clear();
  }), q.set(e, ee.get(e));
}
function Ot(e) {
  if (!e.tag)
    throw TypeError(
      "Error while defining hybrids: 'tag' property with dashed tag name is required"
    );
  const t = globalThis.customElements.get(e.tag);
  if (t) {
    if (ee.get(t))
      return Ht(t), Me(e, t), e;
    throw TypeError(
      `Custom element with '${e.tag}' tag name already defined outside of the hybrids context`
    );
  }
  return globalThis.customElements.define(e.tag, Me(e)), e;
}
function Yt(e, { root: t = "", prefix: n } = {}) {
  for (const o of Object.keys(e)) {
    const i = e[o];
    if (!i.tag) {
      const r = se(
        [].concat(t).reduce((s, c) => s.replace(c, ""), o).replace(/^[./]+/, "").replace(/\//g, "-").replace(/\.[a-zA-Z]+$/, "")
      );
      i.tag = n ? `${n}-${r}` : r;
    }
    Ot(i);
  }
  return e;
}
const Ue = Object.freeze(
  Object.assign(Ot, {
    compile: (e) => Me(e),
    from: Yt
  })
), Xe = Symbol("store.connect"), x = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakSet();
function Je(e, t, n) {
  if (n && (x.set(n, null), $e.set(n, t)), x.set(t, e), e.storage.observe) {
    const o = t && e.isInstance(t) ? t : null, i = n && e.isInstance(n) ? n : null;
    o !== i && e.storage.observe(o, i);
  }
  return t;
}
function Qt(e, t) {
  return Object.keys(e).every((n) => e[n] === t[n]);
}
function Zt(e, t, n) {
  return Je(e, t, n), e.invalidate && (!n || ae(t) || !e.isInstance(n) || !Qt(t, n)) && e.invalidate(), t;
}
function I(e, t, n, o = !0) {
  return ve(e, t, o ? Zt : Je, n), n;
}
let ue;
function P() {
  return ue || (ue = Date.now(), we.then(() => {
    ue = void 0;
  })), ue;
}
const me = /* @__PURE__ */ new WeakMap();
function xe(e) {
  let t = me.get(e);
  return t || (t = P(), me.set(e, t)), t;
}
function Oe(e) {
  return me.set(e, P()), e;
}
function Qe(e) {
  return me.set(e, 1), e;
}
function _e(e) {
  return globalThis.btoa(
    Array.from(e).reduce(
      (t, n) => Math.imul(31, t) + n.charCodeAt(0) | 0,
      0
    )
  );
}
const Ne = "hybrids:store:cache", je = {};
let Ce;
function en(e, t) {
  const n = `${Ne}:${_e(JSON.stringify(e.model))}`;
  return je[n] = P() + t, Ce || (Ce = Promise.resolve().then(() => {
    const o = JSON.parse(globalThis.localStorage.getItem(Ne)) || {}, i = P();
    for (const r of Object.keys(o))
      !je[r] && o[r] < i && (globalThis.localStorage.removeItem(r), delete o[r]);
    globalThis.localStorage.setItem(
      Ne,
      JSON.stringify({ ...o, ...je })
    ), Ce = null;
  })), n;
}
const tn = /^\{.+\}$/;
function jt(e, t) {
  typeof t == "function" && (t = { get: t });
  const n = {
    cache: !0,
    loose: !1,
    ...t
  };
  if (n.observe) {
    const o = n.observe;
    if (typeof o != "function")
      throw TypeError(
        `Storage 'observe' property must be a function: ${typeof n.observe}`
      );
    n.observe = (i, r) => {
      try {
        let s = r ? r.id : i.id;
        if (tn.test(s))
          try {
            s = JSON.parse(s);
          } catch {
          }
        o(s, i, r);
      } catch (s) {
        console.error(s);
      }
    };
  }
  if (n.cache === !1 || n.cache === 0)
    n.validate = (o) => !o || xe(o) === P();
  else if (typeof n.cache == "number")
    n.validate = (o) => !o || xe(o) + n.cache > P();
  else {
    if (n.cache !== !0)
      throw TypeError(
        `Storage 'cache' property must be a boolean or number: ${typeof n.cache}`
      );
    n.validate = (o) => xe(o) !== 1;
  }
  if (n.get || (n.get = (o) => {
    throw ne(te(o));
  }), n.offline)
    try {
      const o = n.offline === !0, i = o ? 1e3 * 60 * 60 * 24 * 30 : n.offline, r = en(e, i), s = JSON.parse(globalThis.localStorage.getItem(r)) || {};
      let c;
      n.offline = Object.freeze({
        key: r,
        threshold: i,
        get: o ? (f) => hasOwnProperty.call(s, f) ? JSON.parse(s[f][1]) : null : (f) => {
          if (hasOwnProperty.call(s, f)) {
            const h = s[f];
            return h[0] + i < P() ? (delete s[f], null) : JSON.parse(h[1]);
          }
          return null;
        },
        set(f, h) {
          return h ? s[f] = [
            P(),
            JSON.stringify(h, function(l, a) {
              if (a === this[""])
                return a;
              if (a && typeof a == "object") {
                const p = x.get(a);
                if (p === e && a.id === f)
                  return String(a);
                if (p && p.storage.offline)
                  return p.list ? a.map((d) => (ge.get(p.model).storage.offline.set(d.id, d), `${d}`)) : (p.storage.offline.set(a.id, a), `${a}`);
              }
              return a;
            })
          ] : delete s[f], c || (c = Promise.resolve().then(() => {
            const b = P();
            for (const l of Object.keys(s))
              s[l][0] + i < b && delete s[l];
            globalThis.localStorage.setItem(
              r,
              JSON.stringify(s)
            ), c = null;
          })), h;
        }
      });
    } catch (o) {
      console.error("Error while setup offline cache", o), n.offline = !1;
    }
  return Object.freeze(n);
}
function nn(e) {
  return {
    get: e.enumerable ? () => {
    } : () => e.create({}),
    set: e.enumerable ? (t, n) => n : (t, n) => n === null ? { id: t } : n,
    list: e.enumerable && function(n) {
      if (n)
        throw TypeError("Memory-based model definition does not support id");
      const o = [];
      for (const { key: i, value: r } of $t(e))
        i !== e && r && !ae(r) && o.push(i);
      return o;
    },
    loose: !0
  };
}
function M(e, t) {
  return Array.isArray(e) ? cn(e[0], t) : At(e, t);
}
function Ze(e, t) {
  switch (e) {
    case "string":
      return (n) => n != null ? String(n) : "";
    case "number":
      return Number;
    case "boolean":
      return Boolean;
    default:
      throw TypeError(
        `The value of the '${t}' must be a string, number or boolean: ${e}`
      );
  }
}
const on = (e, t, n) => t.state === "error" ? { state: "error", error: t.value } : (t.error = !!n && n.error, t);
function R(e, t, n = e) {
  return ve(e, "state", on, { state: t, value: n }), e;
}
const rn = (e, t = { state: "ready", value: e, error: !1 }) => t;
function le(e) {
  return W(e, "state", rn);
}
function Ct(e) {
  return e ? (e ^ Math.random() * 16 >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, Ct);
}
function sn(e) {
  if (typeof e != "function")
    throw TypeError(`The first argument must be a function: ${typeof e}`);
  return Nt.add(e), e;
}
const Pt = /* @__PURE__ */ new WeakMap();
function ln(e, t, n) {
  let o = n.model[t];
  Nt.has(o) && (o = o());
  let i = typeof o;
  if (o instanceof String || o instanceof Number || o instanceof Boolean) {
    const r = Pt.get(o);
    if (!r)
      throw TypeError(
        L(
          e,
          `You must use primitive ${typeof o.valueOf()} value for '${t}' property of the provided model definition`
        )
      );
    o = o.valueOf(), i = typeof o, n.checks.set(t, r);
  }
  return { defaultValue: o, type: i };
}
function L(e, t) {
  return `${t}

Model = ${JSON.stringify(e, null, 2)}
`;
}
const an = Promise.resolve(), ge = /* @__PURE__ */ new WeakMap();
function At(e, t) {
  if (typeof e != "object" || e === null)
    throw TypeError(`Model definition must be an object: ${typeof e}`);
  let n = ge.get(e);
  if (n && !n.enumerable) {
    if (t && !n.nested)
      throw TypeError(
        L(
          e,
          "Provided model definition for nested object already used as a root definition"
        )
      );
    if (!t && n.nested)
      throw TypeError(
        L(
          e,
          "Nested model definition cannot be used outside of the parent definition"
        )
      );
  }
  if (!n) {
    const o = e[Xe];
    typeof o == "object" && Object.freeze(o);
    let i;
    const r = hasOwnProperty.call(e, "id"), s = !!o, c = /* @__PURE__ */ new Map(), f = {};
    Object.defineProperty(f, "toString", {
      value: function() {
        return this.id;
      }
    });
    const h = Object.create(f);
    n = {
      model: e,
      external: s,
      enumerable: r,
      nested: !r && !s && t,
      placeholder: (l) => {
        const a = Object.create(h);
        return x.set(a, n), r && (a.id = l), Object.freeze(a);
      },
      isInstance: (l) => Object.getPrototypeOf(l) !== h,
      invalidate: () => {
        i || (i = an.then(() => {
          Te(n, n, { clearValue: !0 }), i = null;
        }));
      },
      checks: c
    }, ge.set(e, n), n.storage = jt(n, o || nn(n));
    const b = Object.keys(Object.freeze(e)).map((l) => {
      if (l !== "id" && Object.defineProperty(h, l, {
        get() {
          throw Error(
            `Model instance in ${le(this).state} state - use store.pending(), store.error(), or store.ready() guards`
          );
        },
        enumerable: !0
      }), l === "id") {
        if (e[l] !== !0)
          throw TypeError(
            "The 'id' property in the model definition must be set to 'true' or not be defined"
          );
        return (u, d, y) => {
          let g;
          hasOwnProperty.call(d, "id") ? g = te(d.id) : y ? g = y.id : g = Ct(), Object.defineProperty(u, "id", { value: g, enumerable: !0 });
        };
      }
      const { defaultValue: a, type: p } = ln(e, l, n);
      switch (p) {
        case "function":
          return (u) => {
            Object.defineProperty(u, l, {
              get() {
                return W(this, l, () => a(this));
              }
            });
          };
        case "object": {
          if (a === null)
            throw TypeError(
              `The value for the '${l}' must be an object instance: ${a}`
            );
          if (Array.isArray(a)) {
            const y = typeof a[0];
            if (y !== "object") {
              if (y === "function" && ![String, Number, Boolean].includes(a[0]))
                throw TypeError(
                  `The array item for the '${l}' must be one of the primitive types constructor: String, Number, or Boolean`
                );
              const w = y === "function" ? a[0] : Ze(y, l), m = y === "function" ? [] : Object.freeze(a.map(w));
              return (v, $, T) => {
                if (hasOwnProperty.call($, l)) {
                  if (!Array.isArray($[l]))
                    throw TypeError(
                      `The value for '${l}' property must be an array: ${typeof $[l]}`
                    );
                  v[l] = Object.freeze($[l].map(w));
                } else
                  T && hasOwnProperty.call(T, l) ? v[l] = T[l] : v[l] = m;
              };
            }
            const g = M(a, !0);
            if (g.external && n.storage.offline && g.storage.offline && g.storage.offline.threshold < n.storage.offline.threshold)
              throw Error(
                `External nested model for '${l}' property has lower offline threshold (${g.storage.offline.threshold} ms) than the parent definition (${n.storage.offline.threshold} ms)`
              );
            if (g.enumerable && a[1]) {
              const w = a[1];
              if (typeof w != "object")
                throw TypeError(
                  `Options for '${l}' array property must be an object instance: ${typeof w}`
                );
              w.loose && (n.contexts = n.contexts || /* @__PURE__ */ new Set(), n.contexts.add(M(a[0])));
            }
            return (w, m, v) => {
              if (hasOwnProperty.call(m, l)) {
                if (!Array.isArray(m[l]))
                  throw TypeError(
                    `The value for '${l}' property must be an array: ${typeof m[l]}`
                  );
                w[l] = g.create(m[l], !0);
              } else
                w[l] = v && v[l] || !g.enumerable && g.create(a) || [];
            };
          }
          const d = M(a, !0);
          if (d.enumerable || d.external) {
            if (n.storage.offline && d.storage.offline && d.storage.offline.threshold < n.storage.offline.threshold)
              throw Error(
                `External nested model for '${l}' property has lower offline threshold (${d.storage.offline.threshold} ms) than the parent definition (${n.storage.offline.threshold} ms)`
              );
            return (y, g, w) => {
              let m;
              if (hasOwnProperty.call(g, l)) {
                const v = g[l];
                if (typeof v != "object" || v === null)
                  v != null && (m = { id: v });
                else {
                  const $ = x.get(v);
                  if ($) {
                    if ($.model !== a)
                      throw TypeError(
                        "Model instance must match the definition"
                      );
                    m = v;
                  } else {
                    const T = B(
                      d,
                      g[l].id
                    ).value;
                    m = d.create(
                      v,
                      T && d.isInstance(T) ? T : void 0
                    ), I(d, m.id, m);
                  }
                }
              } else
                m = w && w[l];
              if (m) {
                const v = m.id;
                Object.defineProperty(y, l, {
                  get() {
                    return W(this, l, () => A(a, v));
                  },
                  enumerable: !0
                });
              } else
                y[l] = void 0;
            };
          }
          return (y, g, w) => {
            hasOwnProperty.call(g, l) ? y[l] = g[l] === null ? d.create({}) : d.create(g[l], w && w[l]) : y[l] = w ? w[l] : d.create({});
          };
        }
        default: {
          const u = Ze(p, l);
          return (d, y, g) => {
            hasOwnProperty.call(y, l) ? d[l] = u(y[l]) : g && hasOwnProperty.call(g, l) ? d[l] = g[l] : d[l] = a;
          };
        }
      }
    });
    n.create = function(a, p) {
      if (a === null)
        return null;
      if (typeof a != "object")
        throw TypeError(`Model values must be an object instance: ${a}`);
      const u = Object.create(f);
      for (const d of b)
        d(u, a, p);
      return x.set(u, n), Ve.set(u, qe), Object.freeze(u);
    }, Object.freeze(h), Object.freeze(n);
  }
  return n;
}
const et = Object.getOwnPropertyNames(
  Array.prototype
).reduce((e, t) => (t === "length" || t === "constructor" || Object.defineProperty(e, t, {
  get() {
    throw Error(
      `Model list instance in ${le(this).state} state - use store.pending(), store.error(), or store.ready() guards`
    );
  }
}), e), []), ze = /* @__PURE__ */ new WeakMap();
function cn(e, t) {
  let n = ze.get(e);
  if (n && !n.enumerable && !t && n.nested)
    throw TypeError(
      L(
        e,
        "Nested model definition cannot be used outside of the parent definition"
      )
    );
  if (!n) {
    const o = At(e), i = /* @__PURE__ */ new Set();
    if (o.storage.loose && i.add(o), !t) {
      if (!o.enumerable)
        throw TypeError(
          L(
            e,
            "Provided model definition does not support listing (it must be enumerable - set `id` property to `true`)"
          )
        );
      if (!o.storage.list)
        throw TypeError(
          L(
            e,
            "Provided model definition storage does not support `list` action"
          )
        );
    }
    t = !o.enumerable && !o.external && t, n = {
      list: !0,
      nested: t,
      model: e,
      contexts: i,
      enumerable: o.enumerable,
      external: o.external,
      placeholder: () => {
        const r = Object.create(et);
        return x.set(r, n), Object.freeze(r);
      },
      isInstance: (r) => Object.getPrototypeOf(r) !== et,
      create(r, s = !1) {
        if (r === null)
          return null;
        const c = [];
        for (const f of r) {
          let h = f;
          if (typeof f == "object" && f !== null) {
            h = f.id;
            const b = x.get(f);
            let l = f;
            if (b) {
              if (b.model !== e)
                throw TypeError("Model instance must match the definition");
            } else {
              const a = o.enumerable && B(o, f.id).value;
              l = o.create(
                f,
                a && o.isInstance(a) ? a : void 0
              ), o.enumerable && (h = l.id, I(o, h, l, s));
            }
            o.enumerable || c.push(l);
          } else if (!o.enumerable)
            throw TypeError(`Model instance must be an object: ${typeof f}`);
          if (o.enumerable) {
            const b = c.length;
            Object.defineProperty(c, b, {
              get() {
                return W(this, b, () => A(e, h));
              },
              enumerable: !0
            });
          }
        }
        return Object.defineProperties(c, {
          id: { value: r.id },
          toString: {
            value: function() {
              return this.id;
            }
          }
        }), x.set(c, n), Ve.set(c, qe), Object.freeze(c);
      }
    }, n.storage = Object.freeze({
      ...jt(n, {
        cache: o.storage.cache,
        get: !t && ((r) => o.storage.list(r))
      }),
      offline: o.storage.offline && {
        threshold: o.storage.offline.threshold,
        get: (r) => {
          const s = te(r);
          let c = o.storage.offline.get(
            _e(String(s))
          );
          return c ? (c = c.map(
            (f) => o.storage.offline.get(f)
          ), c.id = s, c) : null;
        },
        set: (r, s) => {
          o.storage.offline.set(
            _e(String(te(r))),
            s.map((c) => (o.storage.offline.set(c.id, c), c.id))
          );
        }
      }
    }), ze.set(e, Object.freeze(n));
  }
  return n;
}
function fn(e, t) {
  return t || P();
}
function te(e) {
  switch (typeof e) {
    case "object": {
      const t = {};
      for (const n of Object.keys(e).sort()) {
        if (typeof e[n] == "object" && e[n] !== null)
          throw TypeError(
            `You must use primitive value for '${n}' key: ${typeof e[n]}`
          );
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
const Lt = /* @__PURE__ */ new WeakSet();
function ne(e, t) {
  const n = Error(
    L(
      e,
      `Model instance ${t !== void 0 ? `with '${t}' id ` : ""}does not exist`
    )
  );
  return Lt.add(n), n;
}
function ye(e, t, n) {
  return n !== !1 && !Lt.has(t) && console.error(t), R(e, "error", t);
}
function A(e, t) {
  const n = M(e);
  let o;
  if (n.enumerable) {
    if (o = te(t), !o && !n.list && !oe.get(n))
      throw TypeError(
        L(
          e,
          `Provided model definition requires non-empty id: "${o}"`
        )
      );
  } else if (t !== void 0)
    throw TypeError(
      L(e, "Provided model definition does not support id")
    );
  const i = n.storage.offline, r = n.storage.validate, s = B(n, o);
  return s.value && !r(s.value) && (s.resolved = !1), W(n, o, (c, f) => {
    if (f && F(f))
      return f;
    let h = !0;
    if (n.contexts)
      for (const l of n.contexts)
        W(l, l, fn) === P() && (h = !1);
    if (h && f && r(f))
      return f;
    const b = () => f || i && n.create(i.get(o)) || n.placeholder(o);
    try {
      let l = n.storage.get(t);
      if (typeof l != "object" || l === null)
        throw i && i.set(o, null), ne(e, o);
      if (l instanceof Promise)
        return l = l.then((p) => {
          if (typeof p != "object" || p === null)
            throw i && i.set(o, null), ne(e, o);
          p.id !== o && (p.id = o);
          const u = n.create(p);
          return i && i.set(o, u), I(n, o, Oe(u));
        }).catch((p) => I(n, o, ye(b(), p))), R(b(), "pending", l);
      l.id !== o && (l.id = o);
      const a = n.create(l);
      return i && Promise.resolve().then(() => {
        i.set(o, a);
      }), Je(n, Oe(a), f);
    } catch (l) {
      return Oe(ye(b(), l));
    }
  });
}
const oe = /* @__PURE__ */ new WeakMap();
function tt(e) {
  const t = Object.keys(e), n = Error(
    `Model validation failed (${t.join(
      ", "
    )}) - read the details from 'errors' property`
  );
  return n.errors = e, n;
}
function H(e, t = {}) {
  let n = x.get(e);
  if (n === null && (e = $e.get(e), n = x.get(e)), n === null)
    throw Error(
      "Provided model instance has expired. Haven't you used stale value?"
    );
  let o = !!n;
  if (n || (n = M(e)), n.nested)
    throw L(
      n.model,
      TypeError(
        "Setting provided nested model instance is not supported, use the root model instance"
      )
    );
  if (n.list)
    throw TypeError("Listing model definition does not support 'set' method");
  if (!n.storage.set)
    throw L(
      n.model,
      TypeError(
        "Provided model definition storage does not support 'set' method"
      )
    );
  if (!o && !n.enumerable && (o = !0, e = A(e)), o) {
    const s = F(e);
    if (s)
      return s.then((c) => H(c, t));
  }
  const i = oe.get(n);
  let r;
  try {
    if (n.enumerable && !o && (!t || typeof t != "object"))
      throw TypeError(`Values must be an object instance: ${t}`);
    if (!i && t && hasOwnProperty.call(t, "id"))
      throw TypeError(`Values must not contain 'id' property: ${t.id}`);
    const s = n.create(t, o ? e : void 0), c = t ? Object.keys(t) : [], f = {}, h = o && i && ae(e);
    let b = !1;
    if (s) {
      for (const [a, p] of n.checks.entries()) {
        if (c.indexOf(a) === -1 && (h && h.errors && h.errors[a] && (b = !0, f[a] = h.errors[a]), i && s[a] == n.model[a]))
          continue;
        let u;
        try {
          u = p(s[a], a, s);
        } catch (d) {
          u = d;
        }
        u !== !0 && u !== void 0 && (b = !0, f[a] = u || !0);
      }
      if (b && !i)
        throw tt(f);
    }
    r = s ? s.id : e.id;
    const l = Promise.resolve(
      n.storage.set(o ? r : void 0, s, c)
    ).then((a) => {
      const p = a === s ? s : n.create(a);
      if (o && p && r !== p.id)
        throw TypeError(
          `Local and storage data must have the same id: '${r}', '${p.id}'`
        );
      let u = p ? p.id : r;
      return b && i && R(p, "error", tt(f)), i && o && hasOwnProperty.call(a, "id") && (!s || s.id !== e.id) ? u = e.id : n.storage.offline && n.storage.offline.set(u, p), I(
        n,
        u,
        p || ye(
          n.placeholder(u),
          ne(n.model, r),
          !1
        ),
        !0
      );
    }).catch((a) => {
      throw a = a !== void 0 ? a : Error("Undefined error"), o && R(e, "error", a), a;
    });
    return o && R(e, "pending", l), l;
  } catch (s) {
    return o && R(e, "error", s), Promise.reject(s);
  }
}
function un(e, t) {
  if (typeof t != "object")
    throw TypeError(`Values must be an object instance: ${t}`);
  let n = x.get(e);
  if (n === null && (e = $e.get(e), n = x.get(e)), n === null)
    throw Error(
      "Provided model instance has expired. Haven't you used stale value?"
    );
  if (n === void 0) {
    if (!t)
      throw TypeError("Values must be defined for usage with model definition");
    n = M(e), e = void 0;
  } else if (t && hasOwnProperty.call(t, "id"))
    throw TypeError(`Values must not contain 'id' property: ${t.id}`);
  if (n.list)
    throw TypeError("Listing model definition is not supported in sync method");
  const o = n.create(t, e), i = t ? o.id : e.id;
  return I(
    n,
    i,
    o || ye(n.placeholder(i), ne(n.model, i), !1)
  );
}
function De(e, t = !0) {
  if (typeof e != "object" || e === null)
    throw TypeError(
      `The first argument must be a model instance or a model definition: ${e}`
    );
  let n = x.get(e);
  if (n === null)
    throw Error(
      "Provided model instance has expired. Haven't you used stale value from the outer scope?"
    );
  if (n) {
    const o = t && n.storage.offline;
    o && o.set(e.id, null), Qe(e), Te(n, e.id, { clearValue: t, deleteEntry: t });
  } else {
    if (!ge.get(e) && !ze.get(e[0]))
      throw Error(
        "Model definition must be used before - passed argument is probably not a model definition"
      );
    n = M(e);
    const o = t && n.storage.offline;
    for (const i of $t(n))
      o && o.set(i.key, null), i.value && Qe(i.value);
    Et(n, { clearValue: t, deleteEntry: t });
  }
}
function F(...e) {
  let t = !1;
  const n = e.map((o) => {
    try {
      const { state: i, value: r } = le(o);
      if (i === "pending")
        return t = !0, r;
    } catch {
    }
    return Promise.resolve(o);
  });
  return t && (e.length > 1 ? Promise.all(n) : n[0]);
}
function kt(e, t) {
  e = $e.get(e) || e, x.get(e) || (e = A(e, t));
  const n = F(e);
  if (!n) {
    const o = ae(e);
    return o ? Promise.reject(o) : Promise.resolve(e);
  }
  return n.then((o) => kt(o));
}
function ae(e, t) {
  if (e === null || typeof e != "object")
    return !1;
  const n = le(e);
  if (t !== void 0) {
    const o = typeof n.error == "object" && n.error && n.error.errors;
    return t === null ? !o && n.error : o[t];
  }
  return n.error;
}
function We(...e) {
  return e.length > 0 && e.every((t) => {
    const n = x.get(t);
    return !!(n && n.isInstance(t));
  });
}
function nt(e, t) {
  return e = { ...e, ...t }, delete e.id, e;
}
function dn(e, t = {}) {
  const n = x.get(e);
  if (!n || !oe.has(n))
    throw TypeError(`Provided model instance is not a draft: ${e}`);
  if (F(e))
    throw Error("Model draft in pending state");
  const o = oe.get(n);
  let i;
  if (B(o, e.id).value) {
    const r = A(o.model, e.id);
    i = Promise.resolve(F(r) || r).then(
      (s) => H(s, nt(e, t))
    );
  } else
    i = H(o.model, nt(e, t));
  return i = i.then((r) => (R(e, "ready"), H(e, r).then(() => r))).catch((r) => (R(e, "error", r), Promise.reject(r))), R(e, "pending", i), i;
}
function pn(e, t) {
  return !!e || `${t} is required`;
}
function hn(e, t = pn, n = "") {
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
      throw TypeError(
        `Default value must be a string, number or boolean: ${typeof e}`
      );
  }
  let o;
  if (t instanceof RegExp)
    o = (i) => t.test(i) || n;
  else if (typeof t == "function")
    o = (...i) => {
      const r = t(...i);
      return r !== !0 && r !== void 0 && n || r;
    };
  else
    throw TypeError(
      `The second argument must be a RegExp instance or a function: ${typeof t}`
    );
  return Pt.set(e, o), e;
}
function bn(e) {
  const t = x.get(e), n = Object.freeze(Object.create(e));
  return x.set(n, t), n;
}
function qe(e, t = {}) {
  const n = M(e);
  if (t.id !== void 0 && typeof t.id != "function") {
    const i = t.id;
    t.id = (r) => r[i];
  }
  if (t.id && !n.enumerable)
    throw TypeError(
      "Store factory for singleton model definition does not support 'id' option"
    );
  let o;
  if (t.draft) {
    if (n.list)
      throw TypeError(
        "Draft mode is not supported for listing model definition"
      );
    o = M({
      ...e,
      [Xe]: {
        get(i) {
          const r = A(n.model, i);
          return F(r) || r;
        },
        set(i, r) {
          return r === null ? { id: i } : r;
        }
      }
    }), oe.set(o, n), e = o.model;
  }
  return !t.id && n.enumerable && !n.list ? {
    get(i, r) {
      const c = x.get(r) !== void 0 ? r.id : r;
      if (o && r == null) {
        const f = o.create({}, { id: void 0 });
        return I(o, void 0, f, !1), A(e, void 0);
      }
      return r ? A(e, c) : void 0;
    },
    set: (i, r) => r,
    connect: o ? (i, r) => () => {
      const s = i[r];
      s && s.id && De(s, !0);
    } : void 0
  } : {
    get: (i, r) => {
      const s = x.get(r), c = t.id && t.id(i) || (s !== void 0 ? r.id : r);
      if (o && !c && r == null) {
        const h = o.create({});
        return I(o, void 0, h, !1), A(e, void 0);
      }
      if (!n.list && n.enumerable && c === void 0)
        return;
      const f = A(e, c);
      if (f !== r && We(r) && !We(f)) {
        const h = bn(r);
        return ve(h, "state", () => le(f)), h;
      }
      return f;
    },
    set: !t.id && n.list || o && !n.enumerable ? (i, r) => r : void 0,
    connect: o && n.enumerable ? (i, r) => () => {
      const s = i[r];
      s && s.id && De(s, !0);
    } : void 0
  };
}
const X = Object.freeze(
  Object.assign(qe, {
    // storage
    connect: Xe,
    // actions
    get: A,
    set: H,
    sync: un,
    clear: De,
    // guards
    pending: F,
    error: ae,
    ready: We,
    // helpers
    submit: dn,
    value: hn,
    resolve: kt,
    ref: sn
  })
), Y = /* @__PURE__ */ new WeakMap();
function D(e) {
  let t = Y.get(e);
  return t || (Y.set(e, t = {}), t);
}
function Se(e) {
  let t;
  for (; e && (t = D(e)) && t.endNode; )
    e = t.endNode;
  return e;
}
function re(e) {
  if (e.nodeType === globalThis.Node.TEXT_NODE) {
    const t = Y.get(e);
    if (t && t.startNode) {
      const n = Se(t.endNode);
      let o = t.startNode;
      const i = n.nextSibling;
      for (; o; ) {
        const r = o.nextSibling;
        o.parentNode.removeChild(o), o = r !== i && r;
      }
      Y.set(e, {});
    }
  } else {
    let t = e.childNodes[0];
    for (; t; )
      e.removeChild(t), t = e.childNodes[0];
    Y.set(e, {});
  }
}
const mn = Date.now(), _ = (e = 0) => `H-${mn}-${e}`, Ke = !!(globalThis.document && globalThis.document.adoptedStyleSheets), Pe = /^\d+$/, gn = {
  // base
  block: (e, t) => ({
    display: "block",
    "text-align": t
  }),
  inline: ({ display: e }) => ({
    display: `inline${e ? `-${e}` : ""}`
  }),
  contents: { display: "contents" },
  hidden: { display: "none" },
  // flexbox
  ...["row", "row-reverse", "column", "column-reverse"].reduce((e, t) => (e[t] = (n, o = "nowrap") => ({
    display: "flex",
    "flex-flow": `${t} ${o}`
  }), e), {}),
  grow: (e, t = 1) => ({ "flex-grow": t }),
  shrink: (e, t = 1) => ({ "flex-shrink": t }),
  basis: (e, t) => ({ "flex-basis": E(t) }),
  order: (e, t = 0) => ({ order: t }),
  // grid
  grid: (e, t = "1", n = "", o = "", i = "") => ({
    display: "grid",
    ...["columns", "rows"].reduce((r, s) => {
      const c = s === "columns" ? t : n;
      return r[`grid-template-${s}`] = c && c.split("|").map(
        (f) => f.match(Pe) ? `repeat(${f}, minmax(0, 1fr))` : E(f)
      ).join(" "), r;
    }, {}),
    "grid-auto-flow": `${o} ${i && "dense"}`
  }),
  area: (e, t = "", n = "") => ({
    "grid-column": t.match(Pe) ? `span ${t}` : t,
    "grid-row": n.match(Pe) ? `span ${n}` : n
  }),
  gap: (e, t = 1, n = "") => ({
    "column-gap": E(t),
    "row-gap": E(n || t)
  }),
  // alignment
  items: (e, t = "start", n = "") => ({
    "place-items": `${t} ${n}`
  }),
  content: (e, t = "start", n = "") => ({
    "place-content": `${t} ${n}`
  }),
  self: (e, t = "start", n = "") => ({
    "place-self": `${t} ${n}`
  }),
  center: { "place-items": "center", "place-content": "center" },
  // size
  size: (e, t, n = t) => ({
    width: E(t),
    height: E(n),
    "box-sizing": "border-box"
  }),
  width: (e, t, n, o) => ({
    width: E(t),
    "min-width": E(n),
    "max-width": E(o),
    "box-sizing": "border-box"
  }),
  height: (e, t, n, o) => ({
    height: E(t),
    "min-height": E(n),
    "max-height": E(o),
    "box-sizing": "border-box"
  }),
  ratio: (e, t) => ({ "aspect-ratio": t }),
  overflow: (e, t = "hidden", n = "") => {
    const o = n ? `-${t}` : "", i = n || t;
    return {
      [`overflow${o}`]: i,
      ...i === "scroll" ? {
        "flex-grow": e["flex-grow"] || 1,
        "flex-basis": 0,
        "overscroll-behavior": "contain",
        "--webkit-overflow-scrolling": "touch"
      } : {}
    };
  },
  margin: (e, t = "1", n, o, i) => t.match(/top|bottom|left|right/) ? {
    [`margin-${t}`]: E(n || "1")
  } : {
    margin: `${E(t)} ${E(n)} ${E(o)} ${E(
      i
    )}`
  },
  padding: (e, t = "1", n, o, i) => t.match(/top|bottom|left|right/) ? {
    [`padding-${t}`]: E(n || "1")
  } : {
    padding: `${E(t)} ${E(n)} ${E(o)} ${E(
      i
    )}`
  },
  // position types
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  fixed: { position: "fixed" },
  sticky: { position: "sticky" },
  static: { position: "static" },
  // position values
  inset: (e, t = 0) => {
    const n = E(t);
    return { top: n, right: n, bottom: n, left: n };
  },
  top: (e, t = 0) => ({ top: E(t) }),
  bottom: (e, t = 0) => ({ bottom: E(t) }),
  left: (e, t = 0) => ({ left: E(t) }),
  right: (e, t = 0) => ({ right: E(t) }),
  layer: (e, t = 1) => ({ "z-index": t }),
  "": (e, t, ...n) => {
    if (n.length < 2)
      throw new Error(
        "Generic rule '::' requires at least two arguments, eg.: ::[property]:[name]"
      );
    return {
      [n[n.length - 2]]: `var(--${n.join("-")})`
    };
  },
  view: (e, t) => ({ "view-transition-name": t })
}, yn = {
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
  full: "100%"
}, wn = {
  portrait: "orientation: portrait",
  landscape: "orientation: landscape"
};
function E(e) {
  return e = yn[e] || e, /^-?\d+(\.\d+)*$/.test(String(e)) ? `${e * 8}px` : e || "";
}
let V;
function Rt() {
  if (V)
    return V;
  if (Ke)
    V = new globalThis.CSSStyleSheet();
  else {
    const e = globalThis.document.createElement("style");
    e.appendChild(globalThis.document.createTextNode("")), globalThis.document.head.appendChild(e), V = e.sheet;
  }
  return V.insertRule(":host([hidden]) { display: none; }"), V;
}
const ot = /* @__PURE__ */ new WeakMap();
let Ie = /* @__PURE__ */ new WeakSet();
function vn(e) {
  const t = e.getRootNode();
  if (Ie.has(t))
    return;
  const n = Rt();
  if (Ke)
    t.adoptedStyleSheets = [...t.adoptedStyleSheets, n];
  else {
    if (t === globalThis.document)
      return;
    let o = ot.get(t);
    o || (o = globalThis.document.createElement("style"), t.appendChild(o), ot.set(t, o));
    let i = "";
    for (let r = 0; r < n.cssRules.length; r++)
      i += n.cssRules[r].cssText;
    o.textContent = i;
  }
  Ie.add(t);
}
const rt = /* @__PURE__ */ new Map();
function it(e, t, n, o) {
  let i = rt.get(e);
  i || (i = `l-${Math.random().toString(36).substr(2, 5)}`, rt.set(e, i)), Ke || (Ie = /* @__PURE__ */ new WeakSet());
  const r = Rt(), [s, c = ""] = t.split("@"), f = Object.entries(
    n.replace(/\s+/g, " ").trim().split(" ").reduce((b, l) => {
      const [a, ...p] = l.split(":"), u = gn[a];
      if (!u)
        throw TypeError(`Unsupported layout rule: '${a}'`);
      return Object.assign(
        b,
        typeof u == "function" ? u(b, ...p.map((d) => d.match(/--.*/) ? `var(${d})` : d)) : u
      );
    }, {})
  ).reduce(
    (b, [l, a]) => a !== void 0 && a !== "" ? b + `${l}: ${a};` : b,
    ""
  ), h = c.split(":").reduce((b, l) => l === "" ? b : b + ` and (${wn[l] || `min-width: ${l}`})`, "@media screen");
  if (o) {
    const b = `:host(.${i}-s${s})`, l = `:where(.${i}-c${s})`;
    [b, l].forEach((a) => {
      r.insertRule(
        c ? `${h} { ${a} { ${f} } }` : `${a} { ${f} }`,
        r.cssRules.length - 1
      );
    });
  } else {
    const b = `.${i}${s}`;
    r.insertRule(
      c ? `${h} { ${b} { ${f} } }` : `${b} { ${f} }`,
      r.cssRules.length - 1
    );
  }
  return i;
}
const Be = /* @__PURE__ */ new WeakMap();
function Tn(e, t) {
  const n = D(e), o = n.startNode, i = Se(n.endNode);
  t.parentNode.insertBefore(e, t.nextSibling);
  let r = e, s = o;
  for (; s; ) {
    const c = s.nextSibling;
    r.parentNode.insertBefore(s, r.nextSibling), r = s, s = c !== i.nextSibling && c;
  }
}
function $n(e, t, n, o, i) {
  let r = Be.get(t);
  const s = n.map((b, l) => ({
    id: hasOwnProperty.call(b, "id") ? b.id : l,
    value: b,
    placeholder: null,
    available: !0
  }));
  if (Be.set(t, s), r) {
    const b = /* @__PURE__ */ new Set();
    for (const l of s)
      b.add(l.id);
    r = r.filter((l) => b.has(l.id) ? !0 : (re(l.placeholder), l.placeholder.parentNode.removeChild(l.placeholder), !1));
  }
  let c = t;
  const f = n.length - 1, h = D(t);
  for (let b = 0; b < s.length; b += 1) {
    const l = s[b];
    let a;
    if (r) {
      for (let p = 0; p < r.length; p += 1)
        if (r[p].available && r[p].id === l.id) {
          a = r[p];
          break;
        }
    }
    a ? (a.available = !1, l.placeholder = a.placeholder, l.placeholder.previousSibling !== c && Tn(l.placeholder, c), a.value !== l.value && o(
      e,
      l.placeholder,
      l.value,
      a.value,
      i
    )) : (l.placeholder = globalThis.document.createTextNode(""), c.parentNode.insertBefore(
      l.placeholder,
      c.nextSibling
    ), o(e, l.placeholder, l.value, void 0, i)), c = Se(
      D(l.placeholder).endNode || l.placeholder
    ), b === 0 && (h.startNode = l.placeholder), b === f && (h.endNode = c);
  }
  if (r)
    for (const b of r)
      b.available && (re(b.placeholder), b.placeholder.parentNode.removeChild(b.placeholder));
}
function Sn(e, t, n) {
  re(t);
  const o = D(t);
  o.startNode = o.endNode = n, t.parentNode.insertBefore(n, t.nextSibling);
}
function st(e) {
  const t = typeof e;
  if (t === "object") {
    if (Array.isArray(e))
      return "array";
    if (e instanceof globalThis.Node)
      return "node";
  }
  return t;
}
function ie(e, t, n, o, i) {
  const r = st(n), s = st(o);
  switch (s !== "undefined" && r !== s && (r !== "function" && re(t), s === "array" ? Be.delete(t) : s !== "node" && s !== "function" && (t.textContent = "")), r) {
    case "array":
      $n(e, t, n, ie, i);
      break;
    case "node":
      Sn(e, t, n);
      break;
    case "function":
      i && (n.useLayout = !0), n(e, t);
      break;
    default:
      t.textContent = r === "number" || n ? n : "";
  }
}
const Ae = /* @__PURE__ */ new WeakMap();
function En(e) {
  return (t, n, o, i) => {
    if (i) {
      const r = Ae.get(n);
      n.removeEventListener(
        e,
        r.get(i),
        i.options !== void 0 ? i.options : !1
      );
    }
    if (o) {
      if (typeof o != "function")
        throw Error(`Event listener must be a function: ${typeof o}`);
      let r = Ae.get(n);
      r || (r = /* @__PURE__ */ new WeakMap(), Ae.set(n, r));
      const s = o.bind(null, t);
      r.set(o, s), n.addEventListener(
        e,
        s,
        o.options !== void 0 ? o.options : !1
      );
    }
  };
}
function xn(e, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      n && t.add(n);
  else if (e !== null && typeof e == "object")
    for (const [n, o] of Object.entries(e))
      n && o && t.add(n);
  else
    e && t.add(e);
  return t;
}
const lt = /* @__PURE__ */ new WeakMap();
function On(e, t, n) {
  const o = lt.get(t) || /* @__PURE__ */ new Set(), i = xn(n);
  lt.set(t, i);
  for (const r of i)
    t.classList.add(r), o.delete(r);
  for (const r of o)
    t.classList.remove(r);
}
const at = /* @__PURE__ */ new WeakMap();
function Nn(e, t, n) {
  if (n === null || typeof n != "object")
    throw TypeError(
      `Style value must be an object in ${he(t)}:`,
      n
    );
  const o = at.get(t) || /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const r of Object.keys(n)) {
    const s = se(r), c = n[r];
    !c && c !== 0 ? t.style.removeProperty(s) : t.style.setProperty(s, c), i.set(s, c), o.delete(s);
  }
  for (const r of o.keys())
    t.style[r] = "";
  at.set(t, i);
}
function jn(e, t, n) {
  if (t.substr(0, 2) === "on") {
    const o = t.substr(2);
    return En(o);
  }
  switch (e) {
    case "class":
      return On;
    case "style":
      return Nn;
    default: {
      let o = !1;
      return (i, r, s) => {
        if (o = o || !n && !(r instanceof globalThis.SVGElement) && t in r, o)
          r[t] = s;
        else if (s === !1 || s === void 0 || s === null)
          r.removeAttribute(e);
        else {
          const c = s === !0 ? "" : String(s);
          r.setAttribute(e, c);
        }
      };
    }
  }
}
const Mt = _("(\\d+)"), K = new RegExp(`^${Mt}$`), U = new RegExp(Mt, "g"), Cn = /^[^A-Za-z]+$/;
function Pn(e) {
  let t = e[0], n = !1;
  for (let o = 1; o < e.length; o += 1)
    n = n || e[o - 1].match(
      /<\s*(table|tr|thead|tbody|tfoot|colgroup)([^<>]|"[^"]*"|'[^']*')*>\s*$/
    ), t += (n ? `<!--${_(o - 1)}-->` : _(o - 1)) + e[o], n = n && !e[o].match(/<\/\s*(table|tr|thead|tbody|tfoot|colgroup)\s*>/);
  return t;
}
function An(e) {
  return e.replace(/\s*=\s*['"]*$/g, "").split(/\s+/).pop();
}
function ct(e) {
  return globalThis.document.createTreeWalker(
    e,
    globalThis.NodeFilter.SHOW_ELEMENT | globalThis.NodeFilter.SHOW_TEXT | globalThis.NodeFilter.SHOW_COMMENT,
    null,
    !1
  );
}
function Ln(e, t = 0) {
  e = e.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g, "");
  let n = e.indexOf(`
`);
  if (n > -1) {
    let o = 0 - t - 2;
    for (n += 1; e[n] === " " && n < e.length; n += 1)
      o += 1;
    return e.replace(
      /\n +/g,
      (i) => i.substr(0, Math.max(i.length - o, 1))
    );
  }
  return e;
}
function ft(e, t) {
  const n = _(t);
  return `${Ln(e).split(`
`).filter((i) => i).map((i) => {
    const r = i.indexOf(n);
    return r > -1 ? `| ${i}
--${"-".repeat(r)}${"^".repeat(6)}` : `| ${i}`;
  }).join(`
`).replace(U, "${...}")}`;
}
const ut = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new WeakMap();
function kn(e, t) {
  const n = dt.get(e);
  if (!n && !t)
    return;
  const o = t && t.map((r) => {
    let s = r;
    return s instanceof globalThis.CSSStyleSheet || (s = ut.get(r), s || (s = new globalThis.CSSStyleSheet(), s.replaceSync(r), ut.set(r, s))), s;
  });
  let i;
  if (n) {
    if (o && o.length === n.length && o.every((r, s) => r === n[s]))
      return;
    i = e.adoptedStyleSheets.filter(
      (r) => !n.includes(r)
    );
  }
  o && (i = (i || e.adoptedStyleSheets).concat(o)), e.adoptedStyleSheets = i, dt.set(e, o);
}
const Le = /* @__PURE__ */ new WeakMap();
function _t(e, t) {
  let n = Le.get(e);
  if (t) {
    (!n || n.parentNode !== e) && (n = globalThis.document.createElement("style"), Le.set(e, n), e = Se(e), e.nodeType === globalThis.Node.TEXT_NODE ? e.parentNode.insertBefore(n, e.nextSibling) : e.appendChild(n));
    const o = [...t].join(`
/*------*/
`);
    n.textContent !== o && (n.textContent = o);
  } else
    n && (n.parentNode.removeChild(n), Le.set(e, null));
}
const pt = /* @__PURE__ */ new WeakMap();
function Rn(e, t) {
  let n = pt.get(e);
  n || (n = e.adoptedStyleSheets ? kn : _t, pt.set(e, n)), n(e, t);
}
function Mn(e, t, n, o) {
  let i = globalThis.document.createElement("template");
  const r = {}, s = n ? e : Pn(e);
  if (i.innerHTML = t ? `<svg>${s}</svg>` : s, t) {
    const u = i.content.firstChild;
    i.content.removeChild(u);
    for (const d of Array.from(u.childNodes))
      i.content.appendChild(d);
  }
  let c;
  const f = i.content.children[0];
  if (f instanceof globalThis.HTMLTemplateElement) {
    for (const u of Array.from(f.attributes)) {
      const d = u.value.trim();
      if (d && u.name.startsWith("layout")) {
        if (d.match(U))
          throw Error("Layout attribute cannot contain expressions");
        c = it(
          f,
          u.name.substr(6),
          d,
          !0
        );
      }
    }
    if (c !== void 0 && i.content.children.length > 1)
      throw Error(
        "Template, which uses layout system must have only the '<template>' root element"
      );
    o = c || f.hasAttribute("layout"), i = f;
  }
  const h = ct(i.content), b = [];
  let l = 0, a = null;
  for (; h.nextNode(); ) {
    let u = h.currentNode;
    if (a && !a.contains(u) && (a = null), u.nodeType === globalThis.Node.COMMENT_NODE && K.test(u.textContent) && (u.parentNode.insertBefore(
      globalThis.document.createTextNode(u.textContent),
      u.nextSibling
    ), h.nextNode(), u.parentNode.removeChild(u), u = h.currentNode), u.nodeType === globalThis.Node.TEXT_NODE) {
      let d = u.textContent;
      const y = d.match(K);
      if (y)
        u.textContent = "", r[y[1]] = [l, ie];
      else {
        if (Qn() && !n && !a && !d.match(/^\s*$/)) {
          let w;
          const m = d.trim(), v = m.replace(/\s+/g, " ").replace(U, ($, T) => (T = Number(T), w === void 0 && (w = T), `\${${T - w}}`));
          if (!v.match(Cn)) {
            let $ = u.previousSibling && u.previousSibling.nodeType === globalThis.Node.COMMENT_NODE ? u.previousSibling : "";
            $ && ($.parentNode.removeChild($), l -= 1, $ = ($.textContent.split("|")[1] || "").trim().replace(/\s+/g, " "));
            const T = Zn(v, $).replace(
              /\${(\d+)}/g,
              (S, O) => _(Number(O) + w)
            );
            d = d.replace(m, T), u.textContent = d;
          }
        }
        const g = d.match(U);
        if (g) {
          let w = u;
          g.reduce(
            (m, v) => {
              const [$, T] = m.pop().split(v);
              return $ && m.push($), m.push(v), T && m.push(T), m;
            },
            [d]
          ).forEach((m, v) => {
            v === 0 ? w.textContent = m : (w = w.parentNode.insertBefore(
              globalThis.document.createTextNode(m),
              w.nextSibling
            ), h.currentNode = w, l += 1);
            const $ = w.textContent.match(
              K
            );
            $ && (w.textContent = "", r[$[1]] = [l, ie]);
          });
        }
      }
    } else if (u.nodeType === globalThis.Node.ELEMENT_NODE) {
      if (!a && (u.getAttribute("translate") === "no" || u.tagName.toLowerCase() === "script" || u.tagName.toLowerCase() === "style") && (a = u), Re) {
        const d = u.tagName.toLowerCase();
        d.match(/.+-.+/) && !globalThis.customElements.get(d) && !b.includes(d) && b.push(d);
      }
      for (const d of Array.from(u.attributes)) {
        const y = d.value.trim(), g = d.name;
        if (o && g.startsWith("layout") && y) {
          if (y.match(U))
            throw Error("Layout attribute cannot contain expressions");
          const m = it(u, g.substr(6), y);
          u.removeAttribute(g), u.classList.add(m);
          continue;
        }
        const w = y.match(K);
        if (w) {
          const m = An(e[w[1]]);
          r[w[1]] = [
            l,
            jn(g, m, t)
          ], u.removeAttribute(d.name);
        } else {
          const m = y.match(U);
          if (m) {
            const v = `attr__${g}`;
            for (const [$, T] of m.entries()) {
              const [, S] = T.match(K);
              let O = !1;
              r[S] = [
                l,
                (C, N, k) => {
                  const z = D(N);
                  z[v] = (z[v] || y).replace(
                    T,
                    k ?? ""
                  ), (m.length === 1 || $ + 1 === m.length) && (O = O || !t && !(N instanceof globalThis.SVGElement) && g in N, O ? N[g] = z[v] : N.setAttribute(g, z[v]), z[v] = void 0);
                }
              ];
            }
            d.value = "";
          }
        }
      }
    }
    l += 1;
  }
  Re && b.length && console.warn(
    `Not defined ${b.map((u) => `<${u}>`).join(", ")} element${b.length > 1 ? "s" : ""} found in the template:
${ft(s, -1)}`
  );
  const p = Object.keys(r);
  return function(d, y, g, { styleSheets: w }) {
    let m = D(y);
    if (i !== m.template) {
      const v = globalThis.document.importNode(i.content, !0), $ = ct(v), T = [];
      let S = 0, O = 0, C = r[p[O]];
      for (; $.nextNode(); ) {
        const N = $.currentNode;
        for (; C && C[0] === S; )
          T.push({
            index: p[O],
            node: N,
            fn: C[1]
          }), O += 1, C = r[p[O]];
        S += 1;
      }
      if (m.hostLayout && d.classList.remove(m.hostLayout), re(y), m = D(y), m.template = i, m.markers = T, y.nodeType === globalThis.Node.TEXT_NODE) {
        _t(y), m.startNode = v.childNodes[0], m.endNode = v.childNodes[v.childNodes.length - 1];
        let N = y, k = v.childNodes[0];
        for (; k; )
          y.parentNode.insertBefore(k, N.nextSibling), N = k, k = v.childNodes[0];
      } else {
        if (o) {
          const N = `${c}-${d === y ? "c" : "s"}`;
          d.classList.add(N), m.hostLayout = N;
        }
        y.appendChild(v);
      }
      o && vn(y);
    }
    Rn(y, w);
    for (const v of m.markers) {
      const $ = g[v.index], T = m.prevArgs && m.prevArgs[v.index];
      if (!(m.prevArgs && $ === T))
        try {
          v.fn(d, v.node, $, T, o);
        } catch (S) {
          throw console.error(
            `Error while updating template expression in ${he(
              d
            )}:
${ft(s, v.index)}`
          ), S;
        }
    }
    m.prevArgs = g;
  };
}
const ke = /* @__PURE__ */ new WeakMap();
function _n(e, t, n = 200) {
  return function o(i, r) {
    const s = o.useLayout;
    let c;
    t && (c = setTimeout(() => {
      c = void 0, ie(i, r, t, void 0, s);
    }, n)), ke.set(r, e), e.then((f) => {
      c && clearTimeout(c), ke.get(r) === e && (ie(
        i,
        r,
        f,
        t && !c ? t : void 0,
        s
      ), ke.set(r, null));
    });
  };
}
function ht({ target: e, detail: t }, n) {
  let o;
  switch (e.type) {
    case "radio":
    case "checkbox":
      o = e.checked && e.value;
      break;
    case "file":
      o = e.files;
      break;
    default:
      o = t && hasOwnProperty.call(t, "value") ? t.value : e.value;
  }
  n(o);
}
function zn(e, t) {
  return e.split(".").reverse().reduce((n, o) => n ? { [o]: n } : { [o]: t }, null);
}
const bt = /* @__PURE__ */ new Map();
function Dn(e, t) {
  if (!e)
    throw Error(
      `The first argument must be a property name or an object instance: ${e}`
    );
  if (typeof e == "object") {
    if (t === void 0)
      throw Error(
        "For model instance property the second argument must be defined"
      );
    const o = Ve.get(e);
    if (!o)
      throw Error("Provided object must be a model instance of the store");
    return t === null ? () => {
      o.set(e, null);
    } : (i, r) => {
      ht(r, (s) => {
        o.set(e, zn(t, s));
      });
    };
  }
  if (arguments.length === 2)
    return (o) => {
      o[e] = t;
    };
  let n = bt.get(e);
  return n || (n = (o, i) => {
    ht(i, (r) => {
      o[e] = r;
    });
  }, bt.set(e, n)), n;
}
let de;
const Wn = globalThis.document && globalThis.document.startViewTransition !== void 0 && function(t) {
  return function n(o, i) {
    if (de) {
      console.warn(
        `${he(
          o
        )}: view transition already started in ${he(de)}`
      ), t(o, i);
      return;
    }
    t.useLayout = n.useLayout, de = o, globalThis.document.startViewTransition(() => (t(o, i), we.then(() => {
      de = void 0;
    })));
  };
} || // istanbul ignore next
((e) => e), In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  resolve: _n,
  set: Dn,
  transition: Wn
}, Symbol.toStringTag, { value: "Module" }));
function Bn(e) {
  return this.id = e, this;
}
function Fn(...e) {
  return this.styleSheets = this.styleSheets || [], this.styleSheets.push(...e), this;
}
function Vn(e, ...t) {
  this.styleSheets = this.styleSheets || [];
  let n = e[0];
  for (let o = 1; o < e.length; o++)
    n += (t[o - 1] !== void 0 ? t[o - 1] : "") + e[o];
  return this.styleSheets.push(n), this;
}
function Un(e) {
  return this.plugins = this.plugins || [], this.plugins.push(e), this;
}
const Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Vn,
  key: Bn,
  style: Fn,
  use: Un
}, Symbol.toStringTag, { value: "Module" })), Jn = _(), qn = _("svg"), Kn = _("msg"), Gn = _("layout"), mt = /* @__PURE__ */ new Map();
function Hn(e, t, n, o) {
  function i(r, s = r) {
    let c = o ? e + Kn : e.join(Jn);
    n && (c += qn);
    const f = i.useLayout;
    f && (c += Gn);
    let h = mt.get(c);
    h || (h = Mn(e, n, o, f), mt.set(c, h)), i.plugins ? i.plugins.reduce(
      (b, l) => l(b),
      () => h(r, s, t, i)
    )(r, s) : h(r, s, t, i);
  }
  return Object.assign(i, Xn);
}
function Ee(e, ...t) {
  return Hn(e, t, !1, !1);
}
Object.freeze(Object.assign(Ee, In));
const pe = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map();
let zt = null;
const Yn = (() => {
  let e;
  try {
    e = globalThis.navigator.languages || [globalThis.navigator.language];
  } catch {
    e = [];
  }
  return e.reduce((t, n) => {
    const o = n.split("-")[0];
    return t.add(n), n !== o && t.add(o), t;
  }, /* @__PURE__ */ new Set());
})();
function Qn() {
  return zt !== null || pe.size;
}
const yt = /* @__PURE__ */ new Map();
function Zn(e, t, n = []) {
  e = e.trim().replace(/\s+/g, " "), t = t.trim();
  const o = `${e} | ${t}`;
  let i = gt.get(o);
  if (!i) {
    if (pe.size)
      for (const r of Yn) {
        const s = pe.get(r);
        if (s && (i = s[o] || s[e], i)) {
          if (i = i.message, typeof i == "object") {
            let c = yt.get(r);
            c || (c = new Intl.PluralRules(r), yt.set(r, c));
            const f = i;
            i = (h) => h === 0 && f.zero || f[c.select(h)] || f.other || "";
          }
          break;
        }
      }
    i || i || (i = e, (pe.size || zt) && Re && console.warn(
      `Missing translation: "${e}"${t ? ` [${t}]` : ""}`
    )), gt.set(o, i);
  }
  return typeof i == "function" ? i(n[0]) : i;
}
var Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fe = { exports: {} };
(function(e, t) {
  (function(n, o) {
    o(t);
  })(Dt, function(n) {
    const o = () => {
      var a;
      return !!(!((a = navigator.mediaDevices) === null || a === void 0) && a.getDisplayMedia);
    };
    /*! *****************************************************************************
    	    Copyright (c) Microsoft Corporation.
    
    	    Permission to use, copy, modify, and/or distribute this software for any
    	    purpose with or without fee is hereby granted.
    
    	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    	    PERFORMANCE OF THIS SOFTWARE.
    	    ***************************************************************************** */
    function i(a, p, u, d) {
      function y(g) {
        return g instanceof u ? g : new u(function(w) {
          w(g);
        });
      }
      return new (u || (u = Promise))(function(g, w) {
        function m(T) {
          try {
            $(d.next(T));
          } catch (S) {
            w(S);
          }
        }
        function v(T) {
          try {
            $(d.throw(T));
          } catch (S) {
            w(S);
          }
        }
        function $(T) {
          T.done ? g(T.value) : y(T.value).then(m, v);
        }
        $((d = d.apply(a, p || [])).next());
      });
    }
    const r = (a) => {
      const p = document.createElement("video");
      return p.autoplay = !0, p.muted = !0, p.playsInline = !0, p.srcObject = a, p.setAttribute("style", "position:fixed;top:0;left:0;pointer-events:none;visibility:hidden;"), p;
    }, s = (a) => {
      var p, u, d;
      const y = (p = a.srcObject) === null || p === void 0 ? void 0 : p.getTracks()[0].getSettings(), g = document.createElement("canvas");
      g.width = (u = y == null ? void 0 : y.width) !== null && u !== void 0 ? u : 0, g.height = (d = y == null ? void 0 : y.height) !== null && d !== void 0 ? d : 0;
      const w = g.getContext("2d");
      return w == null || w.drawImage(a, 0, 0), g;
    }, c = (a) => {
      const p = document.createElement("audio");
      p.loop = !1, p.src = a, p.play(), p.remove();
    }, f = (a = 300) => new Promise((p) => {
      setTimeout(p, a);
    }), h = (a) => {
      var p;
      const u = (p = a.srcObject) === null || p === void 0 ? void 0 : p.getTracks();
      u == null || u.forEach((d) => d.stop()), a.srcObject = null, a.remove();
    }, b = (a) => i(void 0, void 0, void 0, function* () {
      return yield f(), document.hasFocus() ? a : b(a);
    }), l = ({ onCaptureEnd: a, onCaptureStart: p, quality: u = 0.7, type: d = "image/jpeg", soundEffectUrl: y } = {}) => i(void 0, void 0, void 0, function* () {
      return yield p == null ? void 0 : p(), navigator.mediaDevices.getDisplayMedia({
        // This is actually supported, but only in Chrome so not yet part of the TS typedefs, so
        // @ts-ignore
        preferCurrentTab: !0,
        video: { frameRate: 30 }
      }).then(b).then((g) => i(void 0, void 0, void 0, function* () {
        const w = r(g);
        document.body.appendChild(w), y && c(y), yield f();
        const m = s(w), v = m.toDataURL(d, u);
        return h(w), m.remove(), yield a == null ? void 0 : a(), v;
      }));
    });
    n.checkIfBrowserSupported = o, n.takeScreenshot = l, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Fe, Fe.exports);
var wt = Fe.exports, eo = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Dt, function() {
    return function n(o, i, r) {
      var s = window, c = "application/octet-stream", f = r || c, h = o, b = !i && !r && h, l = document.createElement("a"), a = function(S) {
        return String(S);
      }, p = s.Blob || s.MozBlob || s.WebKitBlob || a, u = i || "download", d, y;
      if (p = p.call ? p.bind(s) : Blob, String(this) === "true" && (h = [h, f], f = h[0], h = h[1]), b && b.length < 2048 && (u = b.split("/").pop().split("?")[0], l.href = b, l.href.indexOf(b) !== -1)) {
        var g = new XMLHttpRequest();
        return g.open("GET", b, !0), g.responseType = "blob", g.onload = function(S) {
          n(S.target.response, u, c);
        }, setTimeout(function() {
          g.send();
        }, 0), g;
      }
      if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(h))
        if (h.length > 1024 * 1024 * 1.999 && p !== a)
          h = $(h), f = h.type || c;
        else
          return navigator.msSaveBlob ? (
            // IE10 can't do a[download], only Blobs:
            navigator.msSaveBlob($(h), u)
          ) : T(h);
      else if (/([\x80-\xff])/.test(h)) {
        var w = 0, m = new Uint8Array(h.length), v = m.length;
        for (w; w < v; ++w)
          m[w] = h.charCodeAt(w);
        h = new p([m], { type: f });
      }
      d = h instanceof p ? h : new p([h], { type: f });
      function $(S) {
        var O = S.split(/[:;,]/), C = O[1], N = O[2] == "base64" ? atob : decodeURIComponent, k = N(O.pop()), z = k.length, J = 0, Ge = new Uint8Array(z);
        for (J; J < z; ++J)
          Ge[J] = k.charCodeAt(J);
        return new p([Ge], { type: C });
      }
      function T(S, O) {
        if ("download" in l)
          return l.href = S, l.setAttribute("download", u), l.className = "download-js-link", l.innerHTML = "downloading...", l.style.display = "none", document.body.appendChild(l), setTimeout(function() {
            l.click(), document.body.removeChild(l), O === !0 && setTimeout(function() {
              s.URL.revokeObjectURL(l.href);
            }, 250);
          }, 66), !0;
        if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))
          return /^data:/.test(S) && (S = "data:" + S.replace(/^data:([\w\/\-\+]+)/, c)), window.open(S) || confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`) && (location.href = S), !0;
        var C = document.createElement("iframe");
        document.body.appendChild(C), !O && /^data:/.test(S) && (S = "data:" + S.replace(/^data:([\w\/\-\+]+)/, c)), C.src = S, setTimeout(function() {
          document.body.removeChild(C);
        }, 333);
      }
      if (navigator.msSaveBlob)
        return navigator.msSaveBlob(d, u);
      if (s.URL)
        T(s.URL.createObjectURL(d), !0);
      else {
        if (typeof d == "string" || d.constructor === a)
          try {
            return T("data:" + f + ";base64," + s.btoa(d));
          } catch {
            return T("data:" + f + "," + encodeURIComponent(d));
          }
        y = new FileReader(), y.onload = function(S) {
          T(this.result);
        }, y.readAsDataURL(d);
      }
      return !0;
    };
  });
})(eo);
const Wt = "4a3fb7dc39032a123e911f41fc0c17e3", It = "ATTA9c52ab7e727e26698f5ef71b9c2a1102cf0e598221b773cbfd549376ddc516661169EF54", to = "https://api.trello.com/1", no = `key=${Wt}&token=${It}`, Bt = {
  name: "Name",
  desc: "Description",
  expectedBehaviour: "Expected Behaviour"
}, Ft = {
  name: "",
  desc: ""
};
function oo() {
  const e = `
  **Name:** ${X.name}
  **Description:** ${X.desc}
  **Expected Behaviour:** ${X.expectedBehaviour}
  `;
  return {
    ...X.get(Ft),
    desc: e,
    pos: "bottom"
  };
}
function ro(e) {
  return fetch(e).then((t) => t.blob()).then((t) => new File([t], "Screenshot", { type: "image/png" }));
}
function io(e, t) {
  const n = new FormData();
  n.append("name", "Screenshot"), n.append("file", t), n.append("mimeType", "image/png"), n.append("key", Wt), n.append("token", It);
  const o = new XMLHttpRequest();
  o.responseType = "json", o.onreadystatechange = function() {
    o.readyState === 4 && console.log(`Successfully uploaded at: ${o.response.date}`);
  }, o.open("POST", `https://api.trello.com/1/cards/${cardId}/attachments/`), o.send(n);
}
function so(e, t) {
  t.preventDefault();
  const n = `${to}/cards?idList=${e.idlist}&${no}`, o = oo();
  fetch(n, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...X.get(o)
    })
  }).then((i) => i.json()).then((i) => {
    wt.checkIfBrowserSupported() && wt.takeScreenshot().then(ro).then((r) => {
      console.log(r), io(i.id, r);
    });
  });
}
function Vt(e, t) {
  X.set(Ft, { [t.target.name]: t.target.value });
}
Ue({
  tag: "lunar-bug-tool",
  idlist: "",
  render: () => Ee`
    <div class="lunar-bug-tool">
      <h4>Report a bug</h4>
      <form onsubmit="${so}">
        <lunar-bug-tool-input name="name"></lunar-bug-tool-input>
        <lunar-bug-tool-textarea name="desc"></lunar-bug-tool-textarea>
        <lunar-bug-tool-textarea
          name="expectedBehaviour"
        ></lunar-bug-tool-textarea>

        <button>Submit</button>
      </form>
    </div>
  `.css`
    form {
      margin: .5rem 0;
    }

    .lunar-bug-tool {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      padding: 0 1rem .5rem;
      font-family: 'Gotham Rounded', Arial, sans-serif;
      background: linear-gradient(45deg, #272c40, #485b9c 200%);
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.8);
    }

    .lunar-bug-tool h4 {
      color: white;
    }
  `
});
Ue({
  tag: "lunar-bug-tool-input",
  name: "",
  value: "",
  render: ({ value: e, name: t }) => Ee`
    <div>
      <label>${Bt[t]}</label>
      <input
        type="text"
        name="${t}"
        value="${e}"
        oninput="${Vt}"
      />
    </div>
  `.css`
    label {
      display: block;
      color: white;
    }
    input {
      display: block;
      margin-bottom: 1rem;
    }
  `
});
Ue({
  tag: "lunar-bug-tool-textarea",
  name: "",
  value: "",
  render: ({ value: e, name: t }) => Ee`
    <div>
      <label>${Bt[t]}</label>
      <textarea
        type="text"
        name="${t}"
        value="${e}"
        oninput="${Vt}"
      ></textarea>
    </div>
  `.css`
    label {
      display: block;
      color: white;
    }
    textarea {
      display: block;
      margin-bottom: 1rem;
    }
  `
});
