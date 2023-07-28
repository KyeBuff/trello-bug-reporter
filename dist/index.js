const Ke = /* @__PURE__ */ new Map();
function ie(e) {
  let t = Ke.get(e);
  return t === void 0 && (t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Ke.set(e, t)), t;
}
function pe(e) {
  return `<${String(e.tagName).toLowerCase()}>`;
}
function he(e, t) {
  e.nodeType === globalThis.Node.ELEMENT_NODE && (t(e), e.shadowRoot && he(e.shadowRoot, t));
  const n = globalThis.document.createTreeWalker(
    e,
    globalThis.NodeFilter.SHOW_ELEMENT,
    null,
    !1
  );
  for (; n.nextNode(); ) {
    const o = n.currentNode;
    t(o), o.shadowRoot && he(o.shadowRoot, t);
  }
}
const ye = Promise.resolve(), Fe = /* @__PURE__ */ new WeakMap(), ke = he.name === "walkInShadow", Y = /* @__PURE__ */ new Set();
function bt(e) {
  Y.size || ye.then(Vt), Y.add(e);
}
function Ft(e) {
  Y.delete(e);
}
function Vt() {
  for (const e of Y)
    try {
      e();
    } catch (t) {
      console.error(t);
    }
  Y.clear();
}
const Q = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new Set();
function yt(e) {
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
    e.observe && bt(e.observe), e = n.next().value;
  }
}
function W(e, t) {
  let n = Q.get(e);
  n || (n = /* @__PURE__ */ new Map(), Q.set(e, n));
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
function wt(e) {
  const t = Q.get(e);
  return t ? [...t.values()] : [];
}
let O = null;
function R(e, t, n) {
  const o = W(e, t);
  if (O && (o.contexts || (o.contexts = /* @__PURE__ */ new Set()), O.deps || (O.deps = /* @__PURE__ */ new Set()), o.contexts.add(O), O.deps.add(o)), o.resolved)
    return o.value;
  const i = O;
  try {
    if (G.has(o))
      throw Error(`Circular get invocation is forbidden: '${t}'`);
    O = o, G.add(o), o.value = n(e, o.value), o.resolved = !0, O = i, G.delete(o);
  } catch (r) {
    throw O = i, G.delete(o), O && (O.deps.delete(o), o.contexts.delete(O)), r;
  }
  return o.value;
}
function we(e, t, n, o) {
  const i = W(e, t), r = n(e, o, i.value);
  r !== i.value && (i.value = r, yt(i));
}
function Jt(e, t, n, o) {
  const i = W(e, t);
  i.observe = () => {
    const r = R(e, t, n);
    r !== i.lastValue && (o(e, r, i.lastValue), i.lastValue = r);
  };
  try {
    i.observe();
  } catch (r) {
    console.error(r);
  }
  return () => {
    Ft(i.observe), i.observe = void 0, i.lastValue = void 0;
  };
}
const ce = /* @__PURE__ */ new Set();
function Xt(e) {
  ce.size || setTimeout(() => {
    for (const t of ce)
      if (!t.contexts || t.contexts.size === 0) {
        if (t.deps)
          for (const o of t.deps)
            o.contexts.delete(t);
        Q.get(t.target).delete(t.key);
      }
    ce.clear();
  }), ce.add(e);
}
function vt(e, t) {
  yt(e), t.clearValue && (e.value = void 0, e.lastValue = void 0), t.deleteEntry && Xt(e);
}
function ve(e, t, n = {}) {
  const o = W(e, t);
  vt(o, n);
}
function Tt(e, t = {}) {
  const n = Q.get(e);
  if (n)
    for (const o of n.values())
      vt(o, t);
}
function Ge(e, t) {
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
const $t = {
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
    const o = typeof t, i = o !== "undefined" && $t[o];
    return i ? i(e, t, n) : (e.hasAttribute(n) && e.removeAttribute(n), t);
  }
}, qt = {
  string: (e, t) => e.getAttribute(t),
  number: (e, t) => Number(e.getAttribute(t)) || 0,
  boolean: (e, t) => e.hasAttribute(t),
  undefined: (e, t) => e.getAttribute(t)
};
function Kt(e, t) {
  const n = typeof t.value, o = $t[n], i = qt[n];
  if (!o)
    throw TypeError(
      `Invalid default value for '${e}' property - it must be a string, number, boolean or undefined: ${n}`
    );
  const r = ie(e);
  return {
    get: (s, a) => a === void 0 ? i(s, r) || t.value : a,
    set: (s, a) => o(s, a, r),
    connect: n !== "undefined" ? (s, a, f) => (!s.hasAttribute(r) && s[a] === t.value && (s[a] = o(s, t.value, r)), t.connect && t.connect(s, a, f)) : t.connect,
    observe: t.observe
  };
}
const Z = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap();
function Me(e, t) {
  if (t) {
    const r = Z.get(t);
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
          const a = this[s];
          delete this[s], this[s] = a;
        }
        const r = /* @__PURE__ */ new Set();
        ae.set(this, r), bt(() => {
          if (r === ae.get(this)) {
            for (const s of t.connects)
              r.add(s(this));
            for (const s of t.observers)
              r.add(s(this));
          }
        });
      }
      disconnectedCallback() {
        const r = ae.get(this);
        for (const s of r)
          s && s();
        ae.delete(this), Tt(this);
      }
    };
  Z.set(t, Object.freeze(e));
  const n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  for (const r of Object.keys(e)) {
    if (r === "tag")
      continue;
    let s = e[r];
    const a = typeof s;
    if (a === "function")
      r === "render" ? s = Ge(s, !0) : r === "content" ? s = Ge(s) : s = { get: s };
    else if (a !== "object" || s === null)
      s = { value: s };
    else if (s.set) {
      if (hasOwnProperty.call(s, "value"))
        throw TypeError(
          `Invalid property descriptor for '${r}' property - it must not have 'value' and 'set' properties at the same time.`
        );
      const f = ie(r), g = s.get || ((h, l) => l);
      s.get = (h, l) => (l === void 0 && (l = s.set(h, h.getAttribute(f) || l)), g(h, l));
    }
    if (hasOwnProperty.call(s, "value"))
      s = Kt(r, s);
    else if (!s.get)
      throw TypeError(
        `Invalid descriptor for '${r}' property - it must contain 'value' or 'get' option`
      );
    s.set && i.add(r), Object.defineProperty(t.prototype, r, {
      get: function() {
        return R(this, r, s.get);
      },
      set: s.set && function(g) {
        we(this, r, s.set, g);
      },
      enumerable: !0,
      configurable: !0
    }), s.connect && n.add(
      (f) => s.connect(f, r, () => {
        ve(f, r);
      })
    ), s.observe && o.add((f) => Jt(f, r, s.get, s.observe));
  }
  return t.connects = n, t.observers = o, t.settable = i, t;
}
const q = /* @__PURE__ */ new Map();
function Gt(e) {
  q.size || ye.then(() => {
    he(globalThis.document.body, (t) => {
      if (q.has(t.constructor)) {
        const n = q.get(t.constructor), o = Z.get(t.constructor);
        t.disconnectedCallback();
        for (const i of Object.keys(o)) {
          const r = typeof o[i], s = r !== "object" && r !== "function" && o[i] !== n[i];
          s && t.removeAttribute(ie(i)), ve(t, i, { clearValue: s });
        }
        t.connectedCallback();
      }
    }), q.clear();
  }), q.set(e, Z.get(e));
}
function Et(e) {
  if (!e.tag)
    throw TypeError(
      "Error while defining hybrids: 'tag' property with dashed tag name is required"
    );
  const t = globalThis.customElements.get(e.tag);
  if (t) {
    if (Z.get(t))
      return Gt(t), Me(e, t), e;
    throw TypeError(
      `Custom element with '${e.tag}' tag name already defined outside of the hybrids context`
    );
  }
  return globalThis.customElements.define(e.tag, Me(e)), e;
}
function Ht(e, { root: t = "", prefix: n } = {}) {
  for (const o of Object.keys(e)) {
    const i = e[o];
    if (!i.tag) {
      const r = ie(
        [].concat(t).reduce((s, a) => s.replace(a, ""), o).replace(/^[./]+/, "").replace(/\//g, "-").replace(/\.[a-zA-Z]+$/, "")
      );
      i.tag = n ? `${n}-${r}` : r;
    }
    Et(i);
  }
  return e;
}
const St = Object.freeze(
  Object.assign(Et, {
    compile: (e) => Me(e),
    from: Ht
  })
), Ve = Symbol("store.connect"), S = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakSet();
function Je(e, t, n) {
  if (n && (S.set(n, null), Te.set(n, t)), S.set(t, e), e.storage.observe) {
    const o = t && e.isInstance(t) ? t : null, i = n && e.isInstance(n) ? n : null;
    o !== i && e.storage.observe(o, i);
  }
  return t;
}
function Ut(e, t) {
  return Object.keys(e).every((n) => e[n] === t[n]);
}
function Yt(e, t, n) {
  return Je(e, t, n), e.invalidate && (!n || le(t) || !e.isInstance(n) || !Ut(t, n)) && e.invalidate(), t;
}
function z(e, t, n, o = !0) {
  return we(e, t, o ? Yt : Je, n), n;
}
let fe;
function j() {
  return fe || (fe = Date.now(), ye.then(() => {
    fe = void 0;
  })), fe;
}
const ge = /* @__PURE__ */ new WeakMap();
function Se(e) {
  let t = ge.get(e);
  return t || (t = j(), ge.set(e, t)), t;
}
function xe(e) {
  return ge.set(e, j()), e;
}
function He(e) {
  return ge.set(e, 1), e;
}
function _e(e) {
  return globalThis.btoa(
    Array.from(e).reduce(
      (t, n) => Math.imul(31, t) + n.charCodeAt(0) | 0,
      0
    )
  );
}
const Oe = "hybrids:store:cache", Ne = {};
let je;
function Qt(e, t) {
  const n = `${Oe}:${_e(JSON.stringify(e.model))}`;
  return Ne[n] = j() + t, je || (je = Promise.resolve().then(() => {
    const o = JSON.parse(globalThis.localStorage.getItem(Oe)) || {}, i = j();
    for (const r of Object.keys(o))
      !Ne[r] && o[r] < i && (globalThis.localStorage.removeItem(r), delete o[r]);
    globalThis.localStorage.setItem(
      Oe,
      JSON.stringify({ ...o, ...Ne })
    ), je = null;
  })), n;
}
const Zt = /^\{.+\}$/;
function Ot(e, t) {
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
        if (Zt.test(s))
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
    n.validate = (o) => !o || Se(o) === j();
  else if (typeof n.cache == "number")
    n.validate = (o) => !o || Se(o) + n.cache > j();
  else {
    if (n.cache !== !0)
      throw TypeError(
        `Storage 'cache' property must be a boolean or number: ${typeof n.cache}`
      );
    n.validate = (o) => Se(o) !== 1;
  }
  if (n.get || (n.get = (o) => {
    throw te(ee(o));
  }), n.offline)
    try {
      const o = n.offline === !0, i = o ? 1e3 * 60 * 60 * 24 * 30 : n.offline, r = Qt(e, i), s = JSON.parse(globalThis.localStorage.getItem(r)) || {};
      let a;
      n.offline = Object.freeze({
        key: r,
        threshold: i,
        get: o ? (f) => hasOwnProperty.call(s, f) ? JSON.parse(s[f][1]) : null : (f) => {
          if (hasOwnProperty.call(s, f)) {
            const g = s[f];
            return g[0] + i < j() ? (delete s[f], null) : JSON.parse(g[1]);
          }
          return null;
        },
        set(f, g) {
          return g ? s[f] = [
            j(),
            JSON.stringify(g, function(l, c) {
              if (c === this[""])
                return c;
              if (c && typeof c == "object") {
                const p = S.get(c);
                if (p === e && c.id === f)
                  return String(c);
                if (p && p.storage.offline)
                  return p.list ? c.map((d) => (me.get(p.model).storage.offline.set(d.id, d), `${d}`)) : (p.storage.offline.set(c.id, c), `${c}`);
              }
              return c;
            })
          ] : delete s[f], a || (a = Promise.resolve().then(() => {
            const h = j();
            for (const l of Object.keys(s))
              s[l][0] + i < h && delete s[l];
            globalThis.localStorage.setItem(
              r,
              JSON.stringify(s)
            ), a = null;
          })), g;
        }
      });
    } catch (o) {
      console.error("Error while setup offline cache", o), n.offline = !1;
    }
  return Object.freeze(n);
}
function en(e) {
  return {
    get: e.enumerable ? () => {
    } : () => e.create({}),
    set: e.enumerable ? (t, n) => n : (t, n) => n === null ? { id: t } : n,
    list: e.enumerable && function(n) {
      if (n)
        throw TypeError("Memory-based model definition does not support id");
      const o = [];
      for (const { key: i, value: r } of wt(e))
        i !== e && r && !le(r) && o.push(i);
      return o;
    },
    loose: !0
  };
}
function k(e, t) {
  return Array.isArray(e) ? ln(e[0], t) : Pt(e, t);
}
function Ue(e, t) {
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
const tn = (e, t, n) => t.state === "error" ? { state: "error", error: t.value } : (t.error = !!n && n.error, t);
function L(e, t, n = e) {
  return we(e, "state", tn, { state: t, value: n }), e;
}
const nn = (e, t = { state: "ready", value: e, error: !1 }) => t;
function se(e) {
  return R(e, "state", nn);
}
function Nt(e) {
  return e ? (e ^ Math.random() * 16 >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, Nt);
}
function on(e) {
  if (typeof e != "function")
    throw TypeError(`The first argument must be a function: ${typeof e}`);
  return xt.add(e), e;
}
const jt = /* @__PURE__ */ new WeakMap();
function rn(e, t, n) {
  let o = n.model[t];
  xt.has(o) && (o = o());
  let i = typeof o;
  if (o instanceof String || o instanceof Number || o instanceof Boolean) {
    const r = jt.get(o);
    if (!r)
      throw TypeError(
        C(
          e,
          `You must use primitive ${typeof o.valueOf()} value for '${t}' property of the provided model definition`
        )
      );
    o = o.valueOf(), i = typeof o, n.checks.set(t, r);
  }
  return { defaultValue: o, type: i };
}
function C(e, t) {
  return `${t}

Model = ${JSON.stringify(e, null, 2)}
`;
}
const sn = Promise.resolve(), me = /* @__PURE__ */ new WeakMap();
function Pt(e, t) {
  if (typeof e != "object" || e === null)
    throw TypeError(`Model definition must be an object: ${typeof e}`);
  let n = me.get(e);
  if (n && !n.enumerable) {
    if (t && !n.nested)
      throw TypeError(
        C(
          e,
          "Provided model definition for nested object already used as a root definition"
        )
      );
    if (!t && n.nested)
      throw TypeError(
        C(
          e,
          "Nested model definition cannot be used outside of the parent definition"
        )
      );
  }
  if (!n) {
    const o = e[Ve];
    typeof o == "object" && Object.freeze(o);
    let i;
    const r = hasOwnProperty.call(e, "id"), s = !!o, a = /* @__PURE__ */ new Map(), f = {};
    Object.defineProperty(f, "toString", {
      value: function() {
        return this.id;
      }
    });
    const g = Object.create(f);
    n = {
      model: e,
      external: s,
      enumerable: r,
      nested: !r && !s && t,
      placeholder: (l) => {
        const c = Object.create(g);
        return S.set(c, n), r && (c.id = l), Object.freeze(c);
      },
      isInstance: (l) => Object.getPrototypeOf(l) !== g,
      invalidate: () => {
        i || (i = sn.then(() => {
          ve(n, n, { clearValue: !0 }), i = null;
        }));
      },
      checks: a
    }, me.set(e, n), n.storage = Ot(n, o || en(n));
    const h = Object.keys(Object.freeze(e)).map((l) => {
      if (l !== "id" && Object.defineProperty(g, l, {
        get() {
          throw Error(
            `Model instance in ${se(this).state} state - use store.pending(), store.error(), or store.ready() guards`
          );
        },
        enumerable: !0
      }), l === "id") {
        if (e[l] !== !0)
          throw TypeError(
            "The 'id' property in the model definition must be set to 'true' or not be defined"
          );
        return (u, d, y) => {
          let b;
          hasOwnProperty.call(d, "id") ? b = ee(d.id) : y ? b = y.id : b = Nt(), Object.defineProperty(u, "id", { value: b, enumerable: !0 });
        };
      }
      const { defaultValue: c, type: p } = rn(e, l, n);
      switch (p) {
        case "function":
          return (u) => {
            Object.defineProperty(u, l, {
              get() {
                return R(this, l, () => c(this));
              }
            });
          };
        case "object": {
          if (c === null)
            throw TypeError(
              `The value for the '${l}' must be an object instance: ${c}`
            );
          if (Array.isArray(c)) {
            const y = typeof c[0];
            if (y !== "object") {
              if (y === "function" && ![String, Number, Boolean].includes(c[0]))
                throw TypeError(
                  `The array item for the '${l}' must be one of the primitive types constructor: String, Number, or Boolean`
                );
              const w = y === "function" ? c[0] : Ue(y, l), m = y === "function" ? [] : Object.freeze(c.map(w));
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
            const b = k(c, !0);
            if (b.external && n.storage.offline && b.storage.offline && b.storage.offline.threshold < n.storage.offline.threshold)
              throw Error(
                `External nested model for '${l}' property has lower offline threshold (${b.storage.offline.threshold} ms) than the parent definition (${n.storage.offline.threshold} ms)`
              );
            if (b.enumerable && c[1]) {
              const w = c[1];
              if (typeof w != "object")
                throw TypeError(
                  `Options for '${l}' array property must be an object instance: ${typeof w}`
                );
              w.loose && (n.contexts = n.contexts || /* @__PURE__ */ new Set(), n.contexts.add(k(c[0])));
            }
            return (w, m, v) => {
              if (hasOwnProperty.call(m, l)) {
                if (!Array.isArray(m[l]))
                  throw TypeError(
                    `The value for '${l}' property must be an array: ${typeof m[l]}`
                  );
                w[l] = b.create(m[l], !0);
              } else
                w[l] = v && v[l] || !b.enumerable && b.create(c) || [];
            };
          }
          const d = k(c, !0);
          if (d.enumerable || d.external) {
            if (n.storage.offline && d.storage.offline && d.storage.offline.threshold < n.storage.offline.threshold)
              throw Error(
                `External nested model for '${l}' property has lower offline threshold (${d.storage.offline.threshold} ms) than the parent definition (${n.storage.offline.threshold} ms)`
              );
            return (y, b, w) => {
              let m;
              if (hasOwnProperty.call(b, l)) {
                const v = b[l];
                if (typeof v != "object" || v === null)
                  v != null && (m = { id: v });
                else {
                  const $ = S.get(v);
                  if ($) {
                    if ($.model !== c)
                      throw TypeError(
                        "Model instance must match the definition"
                      );
                    m = v;
                  } else {
                    const T = W(
                      d,
                      b[l].id
                    ).value;
                    m = d.create(
                      v,
                      T && d.isInstance(T) ? T : void 0
                    ), z(d, m.id, m);
                  }
                }
              } else
                m = w && w[l];
              if (m) {
                const v = m.id;
                Object.defineProperty(y, l, {
                  get() {
                    return R(this, l, () => P(c, v));
                  },
                  enumerable: !0
                });
              } else
                y[l] = void 0;
            };
          }
          return (y, b, w) => {
            hasOwnProperty.call(b, l) ? y[l] = b[l] === null ? d.create({}) : d.create(b[l], w && w[l]) : y[l] = w ? w[l] : d.create({});
          };
        }
        default: {
          const u = Ue(p, l);
          return (d, y, b) => {
            hasOwnProperty.call(y, l) ? d[l] = u(y[l]) : b && hasOwnProperty.call(b, l) ? d[l] = b[l] : d[l] = c;
          };
        }
      }
    });
    n.create = function(c, p) {
      if (c === null)
        return null;
      if (typeof c != "object")
        throw TypeError(`Model values must be an object instance: ${c}`);
      const u = Object.create(f);
      for (const d of h)
        d(u, c, p);
      return S.set(u, n), Fe.set(u, Xe), Object.freeze(u);
    }, Object.freeze(g), Object.freeze(n);
  }
  return n;
}
const Ye = Object.getOwnPropertyNames(
  Array.prototype
).reduce((e, t) => (t === "length" || t === "constructor" || Object.defineProperty(e, t, {
  get() {
    throw Error(
      `Model list instance in ${se(this).state} state - use store.pending(), store.error(), or store.ready() guards`
    );
  }
}), e), []), Re = /* @__PURE__ */ new WeakMap();
function ln(e, t) {
  let n = Re.get(e);
  if (n && !n.enumerable && !t && n.nested)
    throw TypeError(
      C(
        e,
        "Nested model definition cannot be used outside of the parent definition"
      )
    );
  if (!n) {
    const o = Pt(e), i = /* @__PURE__ */ new Set();
    if (o.storage.loose && i.add(o), !t) {
      if (!o.enumerable)
        throw TypeError(
          C(
            e,
            "Provided model definition does not support listing (it must be enumerable - set `id` property to `true`)"
          )
        );
      if (!o.storage.list)
        throw TypeError(
          C(
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
        const r = Object.create(Ye);
        return S.set(r, n), Object.freeze(r);
      },
      isInstance: (r) => Object.getPrototypeOf(r) !== Ye,
      create(r, s = !1) {
        if (r === null)
          return null;
        const a = [];
        for (const f of r) {
          let g = f;
          if (typeof f == "object" && f !== null) {
            g = f.id;
            const h = S.get(f);
            let l = f;
            if (h) {
              if (h.model !== e)
                throw TypeError("Model instance must match the definition");
            } else {
              const c = o.enumerable && W(o, f.id).value;
              l = o.create(
                f,
                c && o.isInstance(c) ? c : void 0
              ), o.enumerable && (g = l.id, z(o, g, l, s));
            }
            o.enumerable || a.push(l);
          } else if (!o.enumerable)
            throw TypeError(`Model instance must be an object: ${typeof f}`);
          if (o.enumerable) {
            const h = a.length;
            Object.defineProperty(a, h, {
              get() {
                return R(this, h, () => P(e, g));
              },
              enumerable: !0
            });
          }
        }
        return Object.defineProperties(a, {
          id: { value: r.id },
          toString: {
            value: function() {
              return this.id;
            }
          }
        }), S.set(a, n), Fe.set(a, Xe), Object.freeze(a);
      }
    }, n.storage = Object.freeze({
      ...Ot(n, {
        cache: o.storage.cache,
        get: !t && ((r) => o.storage.list(r))
      }),
      offline: o.storage.offline && {
        threshold: o.storage.offline.threshold,
        get: (r) => {
          const s = ee(r);
          let a = o.storage.offline.get(
            _e(String(s))
          );
          return a ? (a = a.map(
            (f) => o.storage.offline.get(f)
          ), a.id = s, a) : null;
        },
        set: (r, s) => {
          o.storage.offline.set(
            _e(String(ee(r))),
            s.map((a) => (o.storage.offline.set(a.id, a), a.id))
          );
        }
      }
    }), Re.set(e, Object.freeze(n));
  }
  return n;
}
function cn(e, t) {
  return t || j();
}
function ee(e) {
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
const Ct = /* @__PURE__ */ new WeakSet();
function te(e, t) {
  const n = Error(
    C(
      e,
      `Model instance ${t !== void 0 ? `with '${t}' id ` : ""}does not exist`
    )
  );
  return Ct.add(n), n;
}
function be(e, t, n) {
  return n !== !1 && !Ct.has(t) && console.error(t), L(e, "error", t);
}
function P(e, t) {
  const n = k(e);
  let o;
  if (n.enumerable) {
    if (o = ee(t), !o && !n.list && !ne.get(n))
      throw TypeError(
        C(
          e,
          `Provided model definition requires non-empty id: "${o}"`
        )
      );
  } else if (t !== void 0)
    throw TypeError(
      C(e, "Provided model definition does not support id")
    );
  const i = n.storage.offline, r = n.storage.validate, s = W(n, o);
  return s.value && !r(s.value) && (s.resolved = !1), R(n, o, (a, f) => {
    if (f && B(f))
      return f;
    let g = !0;
    if (n.contexts)
      for (const l of n.contexts)
        R(l, l, cn) === j() && (g = !1);
    if (g && f && r(f))
      return f;
    const h = () => f || i && n.create(i.get(o)) || n.placeholder(o);
    try {
      let l = n.storage.get(t);
      if (typeof l != "object" || l === null)
        throw i && i.set(o, null), te(e, o);
      if (l instanceof Promise)
        return l = l.then((p) => {
          if (typeof p != "object" || p === null)
            throw i && i.set(o, null), te(e, o);
          p.id !== o && (p.id = o);
          const u = n.create(p);
          return i && i.set(o, u), z(n, o, xe(u));
        }).catch((p) => z(n, o, be(h(), p))), L(h(), "pending", l);
      l.id !== o && (l.id = o);
      const c = n.create(l);
      return i && Promise.resolve().then(() => {
        i.set(o, c);
      }), Je(n, xe(c), f);
    } catch (l) {
      return xe(be(h(), l));
    }
  });
}
const ne = /* @__PURE__ */ new WeakMap();
function Qe(e) {
  const t = Object.keys(e), n = Error(
    `Model validation failed (${t.join(
      ", "
    )}) - read the details from 'errors' property`
  );
  return n.errors = e, n;
}
function H(e, t = {}) {
  let n = S.get(e);
  if (n === null && (e = Te.get(e), n = S.get(e)), n === null)
    throw Error(
      "Provided model instance has expired. Haven't you used stale value?"
    );
  let o = !!n;
  if (n || (n = k(e)), n.nested)
    throw C(
      n.model,
      TypeError(
        "Setting provided nested model instance is not supported, use the root model instance"
      )
    );
  if (n.list)
    throw TypeError("Listing model definition does not support 'set' method");
  if (!n.storage.set)
    throw C(
      n.model,
      TypeError(
        "Provided model definition storage does not support 'set' method"
      )
    );
  if (!o && !n.enumerable && (o = !0, e = P(e)), o) {
    const s = B(e);
    if (s)
      return s.then((a) => H(a, t));
  }
  const i = ne.get(n);
  let r;
  try {
    if (n.enumerable && !o && (!t || typeof t != "object"))
      throw TypeError(`Values must be an object instance: ${t}`);
    if (!i && t && hasOwnProperty.call(t, "id"))
      throw TypeError(`Values must not contain 'id' property: ${t.id}`);
    const s = n.create(t, o ? e : void 0), a = t ? Object.keys(t) : [], f = {}, g = o && i && le(e);
    let h = !1;
    if (s) {
      for (const [c, p] of n.checks.entries()) {
        if (a.indexOf(c) === -1 && (g && g.errors && g.errors[c] && (h = !0, f[c] = g.errors[c]), i && s[c] == n.model[c]))
          continue;
        let u;
        try {
          u = p(s[c], c, s);
        } catch (d) {
          u = d;
        }
        u !== !0 && u !== void 0 && (h = !0, f[c] = u || !0);
      }
      if (h && !i)
        throw Qe(f);
    }
    r = s ? s.id : e.id;
    const l = Promise.resolve(
      n.storage.set(o ? r : void 0, s, a)
    ).then((c) => {
      const p = c === s ? s : n.create(c);
      if (o && p && r !== p.id)
        throw TypeError(
          `Local and storage data must have the same id: '${r}', '${p.id}'`
        );
      let u = p ? p.id : r;
      return h && i && L(p, "error", Qe(f)), i && o && hasOwnProperty.call(c, "id") && (!s || s.id !== e.id) ? u = e.id : n.storage.offline && n.storage.offline.set(u, p), z(
        n,
        u,
        p || be(
          n.placeholder(u),
          te(n.model, r),
          !1
        ),
        !0
      );
    }).catch((c) => {
      throw c = c !== void 0 ? c : Error("Undefined error"), o && L(e, "error", c), c;
    });
    return o && L(e, "pending", l), l;
  } catch (s) {
    return o && L(e, "error", s), Promise.reject(s);
  }
}
function an(e, t) {
  if (typeof t != "object")
    throw TypeError(`Values must be an object instance: ${t}`);
  let n = S.get(e);
  if (n === null && (e = Te.get(e), n = S.get(e)), n === null)
    throw Error(
      "Provided model instance has expired. Haven't you used stale value?"
    );
  if (n === void 0) {
    if (!t)
      throw TypeError("Values must be defined for usage with model definition");
    n = k(e), e = void 0;
  } else if (t && hasOwnProperty.call(t, "id"))
    throw TypeError(`Values must not contain 'id' property: ${t.id}`);
  if (n.list)
    throw TypeError("Listing model definition is not supported in sync method");
  const o = n.create(t, e), i = t ? o.id : e.id;
  return z(
    n,
    i,
    o || be(n.placeholder(i), te(n.model, i), !1)
  );
}
function ze(e, t = !0) {
  if (typeof e != "object" || e === null)
    throw TypeError(
      `The first argument must be a model instance or a model definition: ${e}`
    );
  let n = S.get(e);
  if (n === null)
    throw Error(
      "Provided model instance has expired. Haven't you used stale value from the outer scope?"
    );
  if (n) {
    const o = t && n.storage.offline;
    o && o.set(e.id, null), He(e), ve(n, e.id, { clearValue: t, deleteEntry: t });
  } else {
    if (!me.get(e) && !Re.get(e[0]))
      throw Error(
        "Model definition must be used before - passed argument is probably not a model definition"
      );
    n = k(e);
    const o = t && n.storage.offline;
    for (const i of wt(n))
      o && o.set(i.key, null), i.value && He(i.value);
    Tt(n, { clearValue: t, deleteEntry: t });
  }
}
function B(...e) {
  let t = !1;
  const n = e.map((o) => {
    try {
      const { state: i, value: r } = se(o);
      if (i === "pending")
        return t = !0, r;
    } catch {
    }
    return Promise.resolve(o);
  });
  return t && (e.length > 1 ? Promise.all(n) : n[0]);
}
function At(e, t) {
  e = Te.get(e) || e, S.get(e) || (e = P(e, t));
  const n = B(e);
  if (!n) {
    const o = le(e);
    return o ? Promise.reject(o) : Promise.resolve(e);
  }
  return n.then((o) => At(o));
}
function le(e, t) {
  if (e === null || typeof e != "object")
    return !1;
  const n = se(e);
  if (t !== void 0) {
    const o = typeof n.error == "object" && n.error && n.error.errors;
    return t === null ? !o && n.error : o[t];
  }
  return n.error;
}
function We(...e) {
  return e.length > 0 && e.every((t) => {
    const n = S.get(t);
    return !!(n && n.isInstance(t));
  });
}
function Ze(e, t) {
  return e = { ...e, ...t }, delete e.id, e;
}
function fn(e, t = {}) {
  const n = S.get(e);
  if (!n || !ne.has(n))
    throw TypeError(`Provided model instance is not a draft: ${e}`);
  if (B(e))
    throw Error("Model draft in pending state");
  const o = ne.get(n);
  let i;
  if (W(o, e.id).value) {
    const r = P(o.model, e.id);
    i = Promise.resolve(B(r) || r).then(
      (s) => H(s, Ze(e, t))
    );
  } else
    i = H(o.model, Ze(e, t));
  return i = i.then((r) => (L(e, "ready"), H(e, r).then(() => r))).catch((r) => (L(e, "error", r), Promise.reject(r))), L(e, "pending", i), i;
}
function un(e, t) {
  return !!e || `${t} is required`;
}
function dn(e, t = un, n = "") {
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
  return jt.set(e, o), e;
}
function pn(e) {
  const t = S.get(e), n = Object.freeze(Object.create(e));
  return S.set(n, t), n;
}
function Xe(e, t = {}) {
  const n = k(e);
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
    o = k({
      ...e,
      [Ve]: {
        get(i) {
          const r = P(n.model, i);
          return B(r) || r;
        },
        set(i, r) {
          return r === null ? { id: i } : r;
        }
      }
    }), ne.set(o, n), e = o.model;
  }
  return !t.id && n.enumerable && !n.list ? {
    get(i, r) {
      const a = S.get(r) !== void 0 ? r.id : r;
      if (o && r == null) {
        const f = o.create({}, { id: void 0 });
        return z(o, void 0, f, !1), P(e, void 0);
      }
      return r ? P(e, a) : void 0;
    },
    set: (i, r) => r,
    connect: o ? (i, r) => () => {
      const s = i[r];
      s && s.id && ze(s, !0);
    } : void 0
  } : {
    get: (i, r) => {
      const s = S.get(r), a = t.id && t.id(i) || (s !== void 0 ? r.id : r);
      if (o && !a && r == null) {
        const g = o.create({});
        return z(o, void 0, g, !1), P(e, void 0);
      }
      if (!n.list && n.enumerable && a === void 0)
        return;
      const f = P(e, a);
      if (f !== r && We(r) && !We(f)) {
        const g = pn(r);
        return we(g, "state", () => se(f)), g;
      }
      return f;
    },
    set: !t.id && n.list || o && !n.enumerable ? (i, r) => r : void 0,
    connect: o && n.enumerable ? (i, r) => () => {
      const s = i[r];
      s && s.id && ze(s, !0);
    } : void 0
  };
}
const D = Object.freeze(
  Object.assign(Xe, {
    // storage
    connect: Ve,
    // actions
    get: P,
    set: H,
    sync: an,
    clear: ze,
    // guards
    pending: B,
    error: le,
    ready: We,
    // helpers
    submit: fn,
    value: dn,
    resolve: At,
    ref: on
  })
), U = /* @__PURE__ */ new WeakMap();
function _(e) {
  let t = U.get(e);
  return t || (U.set(e, t = {}), t);
}
function $e(e) {
  let t;
  for (; e && (t = _(e)) && t.endNode; )
    e = t.endNode;
  return e;
}
function oe(e) {
  if (e.nodeType === globalThis.Node.TEXT_NODE) {
    const t = U.get(e);
    if (t && t.startNode) {
      const n = $e(t.endNode);
      let o = t.startNode;
      const i = n.nextSibling;
      for (; o; ) {
        const r = o.nextSibling;
        o.parentNode.removeChild(o), o = r !== i && r;
      }
      U.set(e, {});
    }
  } else {
    let t = e.childNodes[0];
    for (; t; )
      e.removeChild(t), t = e.childNodes[0];
    U.set(e, {});
  }
}
const hn = Date.now(), M = (e = 0) => `H-${hn}-${e}`, qe = !!(globalThis.document && globalThis.document.adoptedStyleSheets), Pe = /^\d+$/, gn = {
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
      const a = s === "columns" ? t : n;
      return r[`grid-template-${s}`] = a && a.split("|").map(
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
}, mn = {
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
  full: "100%"
}, bn = {
  portrait: "orientation: portrait",
  landscape: "orientation: landscape"
};
function E(e) {
  return e = mn[e] || e, /^-?\d+(\.\d+)*$/.test(String(e)) ? `${e * 8}px` : e || "";
}
let F;
function Lt() {
  if (F)
    return F;
  if (qe)
    F = new globalThis.CSSStyleSheet();
  else {
    const e = globalThis.document.createElement("style");
    e.appendChild(globalThis.document.createTextNode("")), globalThis.document.head.appendChild(e), F = e.sheet;
  }
  return F.insertRule(":host([hidden]) { display: none; }"), F;
}
const et = /* @__PURE__ */ new WeakMap();
let Ie = /* @__PURE__ */ new WeakSet();
function yn(e) {
  const t = e.getRootNode();
  if (Ie.has(t))
    return;
  const n = Lt();
  if (qe)
    t.adoptedStyleSheets = [...t.adoptedStyleSheets, n];
  else {
    if (t === globalThis.document)
      return;
    let o = et.get(t);
    o || (o = globalThis.document.createElement("style"), t.appendChild(o), et.set(t, o));
    let i = "";
    for (let r = 0; r < n.cssRules.length; r++)
      i += n.cssRules[r].cssText;
    o.textContent = i;
  }
  Ie.add(t);
}
const tt = /* @__PURE__ */ new Map();
function nt(e, t, n, o) {
  let i = tt.get(e);
  i || (i = `l-${Math.random().toString(36).substr(2, 5)}`, tt.set(e, i)), qe || (Ie = /* @__PURE__ */ new WeakSet());
  const r = Lt(), [s, a = ""] = t.split("@"), f = Object.entries(
    n.replace(/\s+/g, " ").trim().split(" ").reduce((h, l) => {
      const [c, ...p] = l.split(":"), u = gn[c];
      if (!u)
        throw TypeError(`Unsupported layout rule: '${c}'`);
      return Object.assign(
        h,
        typeof u == "function" ? u(h, ...p.map((d) => d.match(/--.*/) ? `var(${d})` : d)) : u
      );
    }, {})
  ).reduce(
    (h, [l, c]) => c !== void 0 && c !== "" ? h + `${l}: ${c};` : h,
    ""
  ), g = a.split(":").reduce((h, l) => l === "" ? h : h + ` and (${bn[l] || `min-width: ${l}`})`, "@media screen");
  if (o) {
    const h = `:host(.${i}-s${s})`, l = `:where(.${i}-c${s})`;
    [h, l].forEach((c) => {
      r.insertRule(
        a ? `${g} { ${c} { ${f} } }` : `${c} { ${f} }`,
        r.cssRules.length - 1
      );
    });
  } else {
    const h = `.${i}${s}`;
    r.insertRule(
      a ? `${g} { ${h} { ${f} } }` : `${h} { ${f} }`,
      r.cssRules.length - 1
    );
  }
  return i;
}
const De = /* @__PURE__ */ new WeakMap();
function wn(e, t) {
  const n = _(e), o = n.startNode, i = $e(n.endNode);
  t.parentNode.insertBefore(e, t.nextSibling);
  let r = e, s = o;
  for (; s; ) {
    const a = s.nextSibling;
    r.parentNode.insertBefore(s, r.nextSibling), r = s, s = a !== i.nextSibling && a;
  }
}
function vn(e, t, n, o, i) {
  let r = De.get(t);
  const s = n.map((h, l) => ({
    id: hasOwnProperty.call(h, "id") ? h.id : l,
    value: h,
    placeholder: null,
    available: !0
  }));
  if (De.set(t, s), r) {
    const h = /* @__PURE__ */ new Set();
    for (const l of s)
      h.add(l.id);
    r = r.filter((l) => h.has(l.id) ? !0 : (oe(l.placeholder), l.placeholder.parentNode.removeChild(l.placeholder), !1));
  }
  let a = t;
  const f = n.length - 1, g = _(t);
  for (let h = 0; h < s.length; h += 1) {
    const l = s[h];
    let c;
    if (r) {
      for (let p = 0; p < r.length; p += 1)
        if (r[p].available && r[p].id === l.id) {
          c = r[p];
          break;
        }
    }
    c ? (c.available = !1, l.placeholder = c.placeholder, l.placeholder.previousSibling !== a && wn(l.placeholder, a), c.value !== l.value && o(
      e,
      l.placeholder,
      l.value,
      c.value,
      i
    )) : (l.placeholder = globalThis.document.createTextNode(""), a.parentNode.insertBefore(
      l.placeholder,
      a.nextSibling
    ), o(e, l.placeholder, l.value, void 0, i)), a = $e(
      _(l.placeholder).endNode || l.placeholder
    ), h === 0 && (g.startNode = l.placeholder), h === f && (g.endNode = a);
  }
  if (r)
    for (const h of r)
      h.available && (oe(h.placeholder), h.placeholder.parentNode.removeChild(h.placeholder));
}
function Tn(e, t, n) {
  oe(t);
  const o = _(t);
  o.startNode = o.endNode = n, t.parentNode.insertBefore(n, t.nextSibling);
}
function ot(e) {
  const t = typeof e;
  if (t === "object") {
    if (Array.isArray(e))
      return "array";
    if (e instanceof globalThis.Node)
      return "node";
  }
  return t;
}
function re(e, t, n, o, i) {
  const r = ot(n), s = ot(o);
  switch (s !== "undefined" && r !== s && (r !== "function" && oe(t), s === "array" ? De.delete(t) : s !== "node" && s !== "function" && (t.textContent = "")), r) {
    case "array":
      vn(e, t, n, re, i);
      break;
    case "node":
      Tn(e, t, n);
      break;
    case "function":
      i && (n.useLayout = !0), n(e, t);
      break;
    default:
      t.textContent = r === "number" || n ? n : "";
  }
}
const Ce = /* @__PURE__ */ new WeakMap();
function $n(e) {
  return (t, n, o, i) => {
    if (i) {
      const r = Ce.get(n);
      n.removeEventListener(
        e,
        r.get(i),
        i.options !== void 0 ? i.options : !1
      );
    }
    if (o) {
      if (typeof o != "function")
        throw Error(`Event listener must be a function: ${typeof o}`);
      let r = Ce.get(n);
      r || (r = /* @__PURE__ */ new WeakMap(), Ce.set(n, r));
      const s = o.bind(null, t);
      r.set(o, s), n.addEventListener(
        e,
        s,
        o.options !== void 0 ? o.options : !1
      );
    }
  };
}
function En(e, t = /* @__PURE__ */ new Set()) {
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
const rt = /* @__PURE__ */ new WeakMap();
function Sn(e, t, n) {
  const o = rt.get(t) || /* @__PURE__ */ new Set(), i = En(n);
  rt.set(t, i);
  for (const r of i)
    t.classList.add(r), o.delete(r);
  for (const r of o)
    t.classList.remove(r);
}
const it = /* @__PURE__ */ new WeakMap();
function xn(e, t, n) {
  if (n === null || typeof n != "object")
    throw TypeError(
      `Style value must be an object in ${pe(t)}:`,
      n
    );
  const o = it.get(t) || /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const r of Object.keys(n)) {
    const s = ie(r), a = n[r];
    !a && a !== 0 ? t.style.removeProperty(s) : t.style.setProperty(s, a), i.set(s, a), o.delete(s);
  }
  for (const r of o.keys())
    t.style[r] = "";
  it.set(t, i);
}
function On(e, t, n) {
  if (t.substr(0, 2) === "on") {
    const o = t.substr(2);
    return $n(o);
  }
  switch (e) {
    case "class":
      return Sn;
    case "style":
      return xn;
    default: {
      let o = !1;
      return (i, r, s) => {
        if (o = o || !n && !(r instanceof globalThis.SVGElement) && t in r, o)
          r[t] = s;
        else if (s === !1 || s === void 0 || s === null)
          r.removeAttribute(e);
        else {
          const a = s === !0 ? "" : String(s);
          r.setAttribute(e, a);
        }
      };
    }
  }
}
const kt = M("(\\d+)"), K = new RegExp(`^${kt}$`), V = new RegExp(kt, "g"), Nn = /^[^A-Za-z]+$/;
function jn(e) {
  let t = e[0], n = !1;
  for (let o = 1; o < e.length; o += 1)
    n = n || e[o - 1].match(
      /<\s*(table|tr|thead|tbody|tfoot|colgroup)([^<>]|"[^"]*"|'[^']*')*>\s*$/
    ), t += (n ? `<!--${M(o - 1)}-->` : M(o - 1)) + e[o], n = n && !e[o].match(/<\/\s*(table|tr|thead|tbody|tfoot|colgroup)\s*>/);
  return t;
}
function Pn(e) {
  return e.replace(/\s*=\s*['"]*$/g, "").split(/\s+/).pop();
}
function st(e) {
  return globalThis.document.createTreeWalker(
    e,
    globalThis.NodeFilter.SHOW_ELEMENT | globalThis.NodeFilter.SHOW_TEXT | globalThis.NodeFilter.SHOW_COMMENT,
    null,
    !1
  );
}
function Cn(e, t = 0) {
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
function lt(e, t) {
  const n = M(t);
  return `${Cn(e).split(`
`).filter((i) => i).map((i) => {
    const r = i.indexOf(n);
    return r > -1 ? `| ${i}
--${"-".repeat(r)}${"^".repeat(6)}` : `| ${i}`;
  }).join(`
`).replace(V, "${...}")}`;
}
const ct = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new WeakMap();
function An(e, t) {
  const n = at.get(e);
  if (!n && !t)
    return;
  const o = t && t.map((r) => {
    let s = r;
    return s instanceof globalThis.CSSStyleSheet || (s = ct.get(r), s || (s = new globalThis.CSSStyleSheet(), s.replaceSync(r), ct.set(r, s))), s;
  });
  let i;
  if (n) {
    if (o && o.length === n.length && o.every((r, s) => r === n[s]))
      return;
    i = e.adoptedStyleSheets.filter(
      (r) => !n.includes(r)
    );
  }
  o && (i = (i || e.adoptedStyleSheets).concat(o)), e.adoptedStyleSheets = i, at.set(e, o);
}
const Ae = /* @__PURE__ */ new WeakMap();
function Mt(e, t) {
  let n = Ae.get(e);
  if (t) {
    (!n || n.parentNode !== e) && (n = globalThis.document.createElement("style"), Ae.set(e, n), e = $e(e), e.nodeType === globalThis.Node.TEXT_NODE ? e.parentNode.insertBefore(n, e.nextSibling) : e.appendChild(n));
    const o = [...t].join(`
/*------*/
`);
    n.textContent !== o && (n.textContent = o);
  } else
    n && (n.parentNode.removeChild(n), Ae.set(e, null));
}
const ft = /* @__PURE__ */ new WeakMap();
function Ln(e, t) {
  let n = ft.get(e);
  n || (n = e.adoptedStyleSheets ? An : Mt, ft.set(e, n)), n(e, t);
}
function kn(e, t, n, o) {
  let i = globalThis.document.createElement("template");
  const r = {}, s = n ? e : jn(e);
  if (i.innerHTML = t ? `<svg>${s}</svg>` : s, t) {
    const u = i.content.firstChild;
    i.content.removeChild(u);
    for (const d of Array.from(u.childNodes))
      i.content.appendChild(d);
  }
  let a;
  const f = i.content.children[0];
  if (f instanceof globalThis.HTMLTemplateElement) {
    for (const u of Array.from(f.attributes)) {
      const d = u.value.trim();
      if (d && u.name.startsWith("layout")) {
        if (d.match(V))
          throw Error("Layout attribute cannot contain expressions");
        a = nt(
          f,
          u.name.substr(6),
          d,
          !0
        );
      }
    }
    if (a !== void 0 && i.content.children.length > 1)
      throw Error(
        "Template, which uses layout system must have only the '<template>' root element"
      );
    o = a || f.hasAttribute("layout"), i = f;
  }
  const g = st(i.content), h = [];
  let l = 0, c = null;
  for (; g.nextNode(); ) {
    let u = g.currentNode;
    if (c && !c.contains(u) && (c = null), u.nodeType === globalThis.Node.COMMENT_NODE && K.test(u.textContent) && (u.parentNode.insertBefore(
      globalThis.document.createTextNode(u.textContent),
      u.nextSibling
    ), g.nextNode(), u.parentNode.removeChild(u), u = g.currentNode), u.nodeType === globalThis.Node.TEXT_NODE) {
      let d = u.textContent;
      const y = d.match(K);
      if (y)
        u.textContent = "", r[y[1]] = [l, re];
      else {
        if (Un() && !n && !c && !d.match(/^\s*$/)) {
          let w;
          const m = d.trim(), v = m.replace(/\s+/g, " ").replace(V, ($, T) => (T = Number(T), w === void 0 && (w = T), `\${${T - w}}`));
          if (!v.match(Nn)) {
            let $ = u.previousSibling && u.previousSibling.nodeType === globalThis.Node.COMMENT_NODE ? u.previousSibling : "";
            $ && ($.parentNode.removeChild($), l -= 1, $ = ($.textContent.split("|")[1] || "").trim().replace(/\s+/g, " "));
            const T = Yn(v, $).replace(
              /\${(\d+)}/g,
              (N, A) => M(Number(A) + w)
            );
            d = d.replace(m, T), u.textContent = d;
          }
        }
        const b = d.match(V);
        if (b) {
          let w = u;
          b.reduce(
            (m, v) => {
              const [$, T] = m.pop().split(v);
              return $ && m.push($), m.push(v), T && m.push(T), m;
            },
            [d]
          ).forEach((m, v) => {
            v === 0 ? w.textContent = m : (w = w.parentNode.insertBefore(
              globalThis.document.createTextNode(m),
              w.nextSibling
            ), g.currentNode = w, l += 1);
            const $ = w.textContent.match(
              K
            );
            $ && (w.textContent = "", r[$[1]] = [l, re]);
          });
        }
      }
    } else if (u.nodeType === globalThis.Node.ELEMENT_NODE) {
      if (!c && (u.getAttribute("translate") === "no" || u.tagName.toLowerCase() === "script" || u.tagName.toLowerCase() === "style") && (c = u), ke) {
        const d = u.tagName.toLowerCase();
        d.match(/.+-.+/) && !globalThis.customElements.get(d) && !h.includes(d) && h.push(d);
      }
      for (const d of Array.from(u.attributes)) {
        const y = d.value.trim(), b = d.name;
        if (o && b.startsWith("layout") && y) {
          if (y.match(V))
            throw Error("Layout attribute cannot contain expressions");
          const m = nt(u, b.substr(6), y);
          u.removeAttribute(b), u.classList.add(m);
          continue;
        }
        const w = y.match(K);
        if (w) {
          const m = Pn(e[w[1]]);
          r[w[1]] = [
            l,
            On(b, m, t)
          ], u.removeAttribute(d.name);
        } else {
          const m = y.match(V);
          if (m) {
            const v = `attr__${b}`;
            for (const [$, T] of m.entries()) {
              const [, N] = T.match(K);
              let A = !1;
              r[N] = [
                l,
                (J, x, I) => {
                  const X = _(x);
                  X[v] = (X[v] || y).replace(
                    T,
                    I ?? ""
                  ), (m.length === 1 || $ + 1 === m.length) && (A = A || !t && !(x instanceof globalThis.SVGElement) && b in x, A ? x[b] = X[v] : x.setAttribute(b, X[v]), X[v] = void 0);
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
  ke && h.length && console.warn(
    `Not defined ${h.map((u) => `<${u}>`).join(", ")} element${h.length > 1 ? "s" : ""} found in the template:
${lt(s, -1)}`
  );
  const p = Object.keys(r);
  return function(d, y, b, { styleSheets: w }) {
    let m = _(y);
    if (i !== m.template) {
      const v = globalThis.document.importNode(i.content, !0), $ = st(v), T = [];
      let N = 0, A = 0, J = r[p[A]];
      for (; $.nextNode(); ) {
        const x = $.currentNode;
        for (; J && J[0] === N; )
          T.push({
            index: p[A],
            node: x,
            fn: J[1]
          }), A += 1, J = r[p[A]];
        N += 1;
      }
      if (m.hostLayout && d.classList.remove(m.hostLayout), oe(y), m = _(y), m.template = i, m.markers = T, y.nodeType === globalThis.Node.TEXT_NODE) {
        Mt(y), m.startNode = v.childNodes[0], m.endNode = v.childNodes[v.childNodes.length - 1];
        let x = y, I = v.childNodes[0];
        for (; I; )
          y.parentNode.insertBefore(I, x.nextSibling), x = I, I = v.childNodes[0];
      } else {
        if (o) {
          const x = `${a}-${d === y ? "c" : "s"}`;
          d.classList.add(x), m.hostLayout = x;
        }
        y.appendChild(v);
      }
      o && yn(y);
    }
    Ln(y, w);
    for (const v of m.markers) {
      const $ = b[v.index], T = m.prevArgs && m.prevArgs[v.index];
      if (!(m.prevArgs && $ === T))
        try {
          v.fn(d, v.node, $, T, o);
        } catch (N) {
          throw console.error(
            `Error while updating template expression in ${pe(
              d
            )}:
${lt(s, v.index)}`
          ), N;
        }
    }
    m.prevArgs = b;
  };
}
const Le = /* @__PURE__ */ new WeakMap();
function Mn(e, t, n = 200) {
  return function o(i, r) {
    const s = o.useLayout;
    let a;
    t && (a = setTimeout(() => {
      a = void 0, re(i, r, t, void 0, s);
    }, n)), Le.set(r, e), e.then((f) => {
      a && clearTimeout(a), Le.get(r) === e && (re(
        i,
        r,
        f,
        t && !a ? t : void 0,
        s
      ), Le.set(r, null));
    });
  };
}
function ut({ target: e, detail: t }, n) {
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
function _n(e, t) {
  return e.split(".").reverse().reduce((n, o) => n ? { [o]: n } : { [o]: t }, null);
}
const dt = /* @__PURE__ */ new Map();
function Rn(e, t) {
  if (!e)
    throw Error(
      `The first argument must be a property name or an object instance: ${e}`
    );
  if (typeof e == "object") {
    if (t === void 0)
      throw Error(
        "For model instance property the second argument must be defined"
      );
    const o = Fe.get(e);
    if (!o)
      throw Error("Provided object must be a model instance of the store");
    return t === null ? () => {
      o.set(e, null);
    } : (i, r) => {
      ut(r, (s) => {
        o.set(e, _n(t, s));
      });
    };
  }
  if (arguments.length === 2)
    return (o) => {
      o[e] = t;
    };
  let n = dt.get(e);
  return n || (n = (o, i) => {
    ut(i, (r) => {
      o[e] = r;
    });
  }, dt.set(e, n)), n;
}
let ue;
const zn = globalThis.document && globalThis.document.startViewTransition !== void 0 && function(t) {
  return function n(o, i) {
    if (ue) {
      console.warn(
        `${pe(
          o
        )}: view transition already started in ${pe(ue)}`
      ), t(o, i);
      return;
    }
    t.useLayout = n.useLayout, ue = o, globalThis.document.startViewTransition(() => (t(o, i), ye.then(() => {
      ue = void 0;
    })));
  };
} || // istanbul ignore next
((e) => e), Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  resolve: Mn,
  set: Rn,
  transition: zn
}, Symbol.toStringTag, { value: "Module" }));
function In(e) {
  return this.id = e, this;
}
function Dn(...e) {
  return this.styleSheets = this.styleSheets || [], this.styleSheets.push(...e), this;
}
function Bn(e, ...t) {
  this.styleSheets = this.styleSheets || [];
  let n = e[0];
  for (let o = 1; o < e.length; o++)
    n += (t[o - 1] !== void 0 ? t[o - 1] : "") + e[o];
  return this.styleSheets.push(n), this;
}
function Fn(e) {
  return this.plugins = this.plugins || [], this.plugins.push(e), this;
}
const Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Bn,
  key: In,
  style: Dn,
  use: Fn
}, Symbol.toStringTag, { value: "Module" })), Jn = M(), Xn = M("svg"), qn = M("msg"), Kn = M("layout"), pt = /* @__PURE__ */ new Map();
function Gn(e, t, n, o) {
  function i(r, s = r) {
    let a = o ? e + qn : e.join(Jn);
    n && (a += Xn);
    const f = i.useLayout;
    f && (a += Kn);
    let g = pt.get(a);
    g || (g = kn(e, n, o, f), pt.set(a, g)), i.plugins ? i.plugins.reduce(
      (h, l) => l(h),
      () => g(r, s, t, i)
    )(r, s) : g(r, s, t, i);
  }
  return Object.assign(i, Vn);
}
function Ee(e, ...t) {
  return Gn(e, t, !1, !1);
}
Object.freeze(Object.assign(Ee, Wn));
const de = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
let _t = null;
const Hn = (() => {
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
function Un() {
  return _t !== null || de.size;
}
const gt = /* @__PURE__ */ new Map();
function Yn(e, t, n = []) {
  e = e.trim().replace(/\s+/g, " "), t = t.trim();
  const o = `${e} | ${t}`;
  let i = ht.get(o);
  if (!i) {
    if (de.size)
      for (const r of Hn) {
        const s = de.get(r);
        if (s && (i = s[o] || s[e], i)) {
          if (i = i.message, typeof i == "object") {
            let a = gt.get(r);
            a || (a = new Intl.PluralRules(r), gt.set(r, a));
            const f = i;
            i = (g) => g === 0 && f.zero || f[a.select(g)] || f.other || "";
          }
          break;
        }
      }
    i || i || (i = e, (de.size || _t) && ke && console.warn(
      `Missing translation: "${e}"${t ? ` [${t}]` : ""}`
    )), ht.set(o, i);
  }
  return typeof i == "function" ? i(n[0]) : i;
}
var Qn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Be = { exports: {} };
(function(e, t) {
  (function(n, o) {
    o(t);
  })(Qn, function(n) {
    const o = () => {
      var c;
      return !!(!((c = navigator.mediaDevices) === null || c === void 0) && c.getDisplayMedia);
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
    function i(c, p, u, d) {
      function y(b) {
        return b instanceof u ? b : new u(function(w) {
          w(b);
        });
      }
      return new (u || (u = Promise))(function(b, w) {
        function m(T) {
          try {
            $(d.next(T));
          } catch (N) {
            w(N);
          }
        }
        function v(T) {
          try {
            $(d.throw(T));
          } catch (N) {
            w(N);
          }
        }
        function $(T) {
          T.done ? b(T.value) : y(T.value).then(m, v);
        }
        $((d = d.apply(c, p || [])).next());
      });
    }
    const r = (c) => {
      const p = document.createElement("video");
      return p.autoplay = !0, p.muted = !0, p.playsInline = !0, p.srcObject = c, p.setAttribute("style", "position:fixed;top:0;left:0;pointer-events:none;visibility:hidden;"), p;
    }, s = (c) => {
      var p, u, d;
      const y = (p = c.srcObject) === null || p === void 0 ? void 0 : p.getTracks()[0].getSettings(), b = document.createElement("canvas");
      b.width = (u = y == null ? void 0 : y.width) !== null && u !== void 0 ? u : 0, b.height = (d = y == null ? void 0 : y.height) !== null && d !== void 0 ? d : 0;
      const w = b.getContext("2d");
      return w == null || w.drawImage(c, 0, 0), b;
    }, a = (c) => {
      const p = document.createElement("audio");
      p.loop = !1, p.src = c, p.play(), p.remove();
    }, f = (c = 300) => new Promise((p) => {
      setTimeout(p, c);
    }), g = (c) => {
      var p;
      const u = (p = c.srcObject) === null || p === void 0 ? void 0 : p.getTracks();
      u == null || u.forEach((d) => d.stop()), c.srcObject = null, c.remove();
    }, h = (c) => i(void 0, void 0, void 0, function* () {
      return yield f(), document.hasFocus() ? c : h(c);
    }), l = ({ onCaptureEnd: c, onCaptureStart: p, quality: u = 0.7, type: d = "image/jpeg", soundEffectUrl: y } = {}) => i(void 0, void 0, void 0, function* () {
      return yield p == null ? void 0 : p(), navigator.mediaDevices.getDisplayMedia({
        // This is actually supported, but only in Chrome so not yet part of the TS typedefs, so
        // @ts-ignore
        preferCurrentTab: !0,
        video: { frameRate: 30 }
      }).then(h).then((b) => i(void 0, void 0, void 0, function* () {
        const w = r(b);
        document.body.appendChild(w), y && a(y), yield f();
        const m = s(w), v = m.toDataURL(d, u);
        return g(w), m.remove(), yield c == null ? void 0 : c(), v;
      }));
    });
    n.checkIfBrowserSupported = o, n.takeScreenshot = l, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Be, Be.exports);
var mt = Be.exports;
const Rt = {
  name: "Name",
  desc: "Description",
  expectedBehaviour: "Expected Behaviour"
}, zt = (e) => (t) => ({
  create: () => St({
    ...e,
    render: t
  })
}), Zn = {
  name: "",
  desc: ""
}, Wt = D(Zn), It = (e, t) => {
  D.set(Wt, { [t.target.name]: t.target.value });
}, eo = zt({
  tag: "lunar-bug-tool-textarea",
  name: "",
  value: ""
})(
  ({ value: e, name: t }) => Ee`
    <div>
      <label>${Rt[t]}</label>
      <textarea
        type="text"
        name="${t}"
        value="${e}"
        oninput="${It}"
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
), to = zt({
  tag: "lunar-bug-tool-input",
  name: "",
  value: ""
})(
  ({ value: e, name: t }) => Ee`
    <div>
      <label>${Rt[t]}</label>
      <input
        type="text"
        name="${t}"
        value="${e}"
        oninput="${It}"
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
), Dt = "4a3fb7dc39032a123e911f41fc0c17e3", Bt = "ATTA9c52ab7e727e26698f5ef71b9c2a1102cf0e598221b773cbfd549376ddc516661169EF54", no = "https://api.trello.com/1", oo = `key=${Dt}&token=${Bt}`;
function ro() {
  const e = `
  **Name:** ${D.name}
  **Description:** ${D.desc}
  **Expected Behaviour:** ${D.expectedBehaviour}
  `;
  return {
    ...D.get(Wt),
    desc: e,
    pos: "bottom"
  };
}
function io(e) {
  return fetch(e).then((t) => t.blob()).then((t) => new File([t], "Screenshot", { type: "image/png" }));
}
function so(e, t) {
  const n = new FormData();
  n.append("name", "Screenshot"), n.append("file", t), n.append("mimeType", "image/png"), n.append("key", Dt), n.append("token", Bt);
  const o = new XMLHttpRequest();
  o.responseType = "json", o.onreadystatechange = function() {
    o.readyState === 4 && console.log(`Successfully uploaded at: ${o.response.date}`);
  }, o.open("POST", `https://api.trello.com/1/cards/${cardId}/attachments/`), o.send(n);
}
function lo(e, t) {
  t.preventDefault();
  const n = `${no}/cards?idList=${e.idlist}&${oo}`, o = ro();
  fetch(n, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...D.get(o)
    })
  }).then((i) => i.json()).then((i) => {
    mt.checkIfBrowserSupported() && mt.takeScreenshot().then(io).then((r) => {
      console.log(r), so(i.id, r);
    });
  });
}
St({
  tag: "lunar-bug-tool",
  idlist: "",
  render: () => Ee`
    <div class="lunar-bug-tool">
      <h4>Report a bug</h4>
      <form onsubmit="${lo}">
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
to.create();
eo.create();
