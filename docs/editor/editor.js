var pn = Array.isArray, fr = Array.prototype.indexOf, et = Array.prototype.includes, kt = Array.from, cr = Object.defineProperty, Je = Object.getOwnPropertyDescriptor, hn = Object.getOwnPropertyDescriptors, dr = Object.prototype, _r = Array.prototype, jt = Object.getPrototypeOf, en = Object.isExtensible;
const vr = () => {
};
function pr(n) {
  return n();
}
function Dt(n) {
  for (var r = 0; r < n.length; r++)
    n[r]();
}
function mn() {
  var n, r, t = new Promise((o, i) => {
    n = o, r = i;
  });
  return { promise: t, resolve: n, reject: r };
}
const Z = 2, St = 4, pt = 8, gn = 1 << 24, Ee = 16, me = 32, Qe = 64, Bt = 128, ue = 512, X = 1024, K = 2048, fe = 4096, re = 8192, Se = 16384, We = 32768, tt = 65536, tn = 1 << 17, bn = 1 << 18, it = 1 << 19, yn = 1 << 20, ke = 1 << 25, je = 65536, Rt = 1 << 21, Xt = 1 << 22, Le = 1 << 23, $e = /* @__PURE__ */ Symbol("$state"), hr = /* @__PURE__ */ Symbol("legacy props"), mr = /* @__PURE__ */ Symbol(""), He = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), gr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function br() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function yr(n, r, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function wr(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ar() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Tr(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function xr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function kr(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Sr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Er() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ir() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Cr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Mr = 1, Or = 2, wn = 4, Lr = 8, Pr = 16, Dr = 1, Br = 2, Rr = 4, Fr = 8, Nr = 16, Hr = 1, qr = 2, Q = /* @__PURE__ */ Symbol(), An = "http://www.w3.org/1999/xhtml";
function Gr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Tn(n) {
  return n === this.v;
}
function Vr(n, r) {
  return n != n ? r == r : n !== r || n !== null && typeof n == "object" || typeof n == "function";
}
function xn(n) {
  return !Vr(n, this.v);
}
let ht = !1;
function Ur() {
  ht = !0;
}
let j = null;
function nt(n) {
  j = n;
}
function H(n, r = !1, t) {
  j = {
    p: j,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    l: ht && !r ? { s: null, u: null, $: [] } : null
  };
}
function q(n) {
  var r = (
    /** @type {ComponentContext} */
    j
  ), t = r.e;
  if (t !== null) {
    r.e = null;
    for (var o of t)
      Un(o);
  }
  return r.i = !0, j = r.p, /** @type {T} */
  {};
}
function mt() {
  return !ht || j !== null && j.l === null;
}
let qe = [];
function kn() {
  var n = qe;
  qe = [], Dt(n);
}
function Pe(n) {
  if (qe.length === 0 && !ct) {
    var r = qe;
    queueMicrotask(() => {
      r === qe && kn();
    });
  }
  qe.push(n);
}
function Wr() {
  for (; qe.length > 0; )
    kn();
}
function Sn(n) {
  var r = F;
  if (r === null)
    return R.f |= Le, n;
  if ((r.f & We) === 0 && (r.f & St) === 0)
    throw n;
  Oe(n, r);
}
function Oe(n, r) {
  for (; r !== null; ) {
    if ((r.f & Bt) !== 0) {
      if ((r.f & We) === 0)
        throw n;
      try {
        r.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    }
    r = r.parent;
  }
  throw n;
}
const jr = -7169;
function U(n, r) {
  n.f = n.f & jr | r;
}
function Yt(n) {
  (n.f & ue) !== 0 || n.deps === null ? U(n, X) : U(n, fe);
}
function En(n) {
  if (n !== null)
    for (const r of n)
      (r.f & Z) === 0 || (r.f & je) === 0 || (r.f ^= je, En(
        /** @type {Derived} */
        r.deps
      ));
}
function In(n, r, t) {
  (n.f & K) !== 0 ? r.add(n) : (n.f & fe) !== 0 && t.add(n), En(n.deps), U(n, X);
}
const bt = /* @__PURE__ */ new Set();
let N = null, Ft = null, ve = null, $ = [], Et = null, Nt = !1, ct = !1;
class De {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #l = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #e = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #i = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #n = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #a = /* @__PURE__ */ new Map();
  is_fork = !1;
  #u = !1;
  #f() {
    return this.is_fork || this.#i > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(r) {
    this.#a.has(r) || this.#a.set(r, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(r) {
    var t = this.#a.get(r);
    if (t) {
      this.#a.delete(r);
      for (var o of t.d)
        U(o, K), pe(o);
      for (o of t.m)
        U(o, fe), pe(o);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(r) {
    $ = [], this.apply();
    var t = [], o = [];
    for (const i of r)
      this.#s(i, t, o);
    if (this.#f()) {
      this.#c(o), this.#c(t);
      for (const [i, u] of this.#a)
        Ln(i, u);
    } else {
      for (const i of this.#t) i();
      this.#t.clear(), this.#e === 0 && this.#_(), Ft = this, N = null, nn(o), nn(t), Ft = null, this.#n?.resolve();
    }
    ve = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #s(r, t, o) {
    r.f ^= X;
    for (var i = r.first; i !== null; ) {
      var u = i.f, f = (u & (me | Qe)) !== 0, h = f && (u & X) !== 0, c = h || (u & re) !== 0 || this.#a.has(i);
      if (!c && i.fn !== null) {
        f ? i.f ^= X : (u & St) !== 0 ? t.push(i) : ot(i) && ((u & Ee) !== 0 && this.#r.add(i), ze(i));
        var p = i.first;
        if (p !== null) {
          i = p;
          continue;
        }
      }
      for (; i !== null; ) {
        var m = i.next;
        if (m !== null) {
          i = m;
          break;
        }
        i = i.parent;
      }
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #c(r) {
    for (var t = 0; t < r.length; t += 1)
      In(r[t], this.#o, this.#r);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(r, t) {
    t !== Q && !this.previous.has(r) && this.previous.set(r, t), (r.f & Le) === 0 && (this.current.set(r, r.v), ve?.set(r, r.v));
  }
  activate() {
    N = this, this.apply();
  }
  deactivate() {
    N === this && (N = null, ve = null);
  }
  flush() {
    if (this.activate(), $.length > 0) {
      if (Cn(), N !== null && N !== this)
        return;
    } else this.#e === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const r of this.#l) r(this);
    this.#l.clear();
  }
  #_() {
    if (bt.size > 1) {
      this.previous.clear();
      var r = ve, t = !0;
      for (const i of bt) {
        if (i === this) {
          t = !1;
          continue;
        }
        const u = [];
        for (const [h, c] of this.current) {
          if (i.current.has(h))
            if (t && c !== i.current.get(h))
              i.current.set(h, c);
            else
              continue;
          u.push(h);
        }
        if (u.length === 0)
          continue;
        const f = [...i.current.keys()].filter((h) => !this.current.has(h));
        if (f.length > 0) {
          var o = $;
          $ = [];
          const h = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const p of u)
            Mn(p, f, h, c);
          if ($.length > 0) {
            N = i, i.apply();
            for (const p of $)
              i.#s(p, [], []);
            i.deactivate();
          }
          $ = o;
        }
      }
      N = null, ve = r;
    }
    bt.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(r) {
    this.#e += 1, r && (this.#i += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(r) {
    this.#e -= 1, r && (this.#i -= 1), !this.#u && (this.#u = !0, Pe(() => {
      this.#u = !1, this.#f() ? $.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const r of this.#o)
      this.#r.delete(r), U(r, K), pe(r);
    for (const r of this.#r)
      U(r, fe), pe(r);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(r) {
    this.#t.add(r);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(r) {
    this.#l.add(r);
  }
  settled() {
    return (this.#n ??= mn()).promise;
  }
  static ensure() {
    if (N === null) {
      const r = N = new De();
      bt.add(N), ct || Pe(() => {
        N === r && r.flush();
      });
    }
    return N;
  }
  apply() {
  }
}
function Xr(n) {
  var r = ct;
  ct = !0;
  try {
    for (var t; ; ) {
      if (Wr(), $.length === 0 && (N?.flush(), $.length === 0))
        return Et = null, /** @type {T} */
        t;
      Cn();
    }
  } finally {
    ct = r;
  }
}
function Cn() {
  Nt = !0;
  var n = null;
  try {
    for (var r = 0; $.length > 0; ) {
      var t = De.ensure();
      if (r++ > 1e3) {
        var o, i;
        Yr();
      }
      t.process($), Be.clear();
    }
  } finally {
    $ = [], Nt = !1, Et = null;
  }
}
function Yr() {
  try {
    xr();
  } catch (n) {
    Oe(n, Et);
  }
}
let xe = null;
function nn(n) {
  var r = n.length;
  if (r !== 0) {
    for (var t = 0; t < r; ) {
      var o = n[t++];
      if ((o.f & (Se | re)) === 0 && ot(o) && (xe = /* @__PURE__ */ new Set(), ze(o), o.deps === null && o.first === null && o.nodes === null && o.teardown === null && o.ac === null && Yn(o), xe?.size > 0)) {
        Be.clear();
        for (const i of xe) {
          if ((i.f & (Se | re)) !== 0) continue;
          const u = [i];
          let f = i.parent;
          for (; f !== null; )
            xe.has(f) && (xe.delete(f), u.push(f)), f = f.parent;
          for (let h = u.length - 1; h >= 0; h--) {
            const c = u[h];
            (c.f & (Se | re)) === 0 && ze(c);
          }
        }
        xe.clear();
      }
    }
    xe = null;
  }
}
function Mn(n, r, t, o) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const i of n.reactions) {
      const u = i.f;
      (u & Z) !== 0 ? Mn(
        /** @type {Derived} */
        i,
        r,
        t,
        o
      ) : (u & (Xt | Ee)) !== 0 && (u & K) === 0 && On(i, r, o) && (U(i, K), pe(
        /** @type {Effect} */
        i
      ));
    }
}
function On(n, r, t) {
  const o = t.get(n);
  if (o !== void 0) return o;
  if (n.deps !== null)
    for (const i of n.deps) {
      if (et.call(r, i))
        return !0;
      if ((i.f & Z) !== 0 && On(
        /** @type {Derived} */
        i,
        r,
        t
      ))
        return t.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function pe(n) {
  var r = Et = n, t = r.b;
  if (t?.is_pending && (n.f & (St | pt | gn)) !== 0 && (n.f & We) === 0) {
    t.defer_effect(n);
    return;
  }
  for (; r.parent !== null; ) {
    r = r.parent;
    var o = r.f;
    if (Nt && r === F && (o & Ee) !== 0 && (o & bn) === 0 && (o & We) !== 0)
      return;
    if ((o & (Qe | me)) !== 0) {
      if ((o & X) === 0)
        return;
      r.f ^= X;
    }
  }
  $.push(r);
}
function Ln(n, r) {
  if (!((n.f & me) !== 0 && (n.f & X) !== 0)) {
    (n.f & K) !== 0 ? r.d.push(n) : (n.f & fe) !== 0 && r.m.push(n), U(n, X);
    for (var t = n.first; t !== null; )
      Ln(t, r), t = t.next;
  }
}
function zr(n) {
  let r = 0, t = Xe(0), o;
  return () => {
    Qt() && (w(t), Mt(() => (r === 0 && (o = M(() => n(() => dt(t)))), r += 1, () => {
      Pe(() => {
        r -= 1, r === 0 && (o?.(), o = void 0, dt(t));
      });
    })));
  };
}
var Qr = tt | it;
function Zr(n, r, t, o) {
  new Kr(n, r, t, o);
}
class Kr {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #l = null;
  /** @type {BoundaryProps} */
  #e;
  /** @type {((anchor: Node) => void)} */
  #i;
  /** @type {Effect} */
  #n;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  #f = 0;
  #s = 0;
  #c = !1;
  /** @type {Set<Effect>} */
  #_ = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #v = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #b = zr(() => (this.#d = Xe(this.#f), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(r, t, o, i) {
    this.#t = r, this.#e = t, this.#i = (u) => {
      var f = (
        /** @type {Effect} */
        F
      );
      f.b = this, f.f |= Bt, o(u);
    }, this.parent = /** @type {Effect} */
    F.b, this.transform_error = i ?? this.parent?.transform_error ?? ((u) => u), this.#n = Zt(() => {
      this.#m();
    }, Qr);
  }
  #y() {
    try {
      this.#o = oe(() => this.#i(this.#t));
    } catch (r) {
      this.error(r);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #w(r) {
    const t = this.#e.failed;
    t && (this.#a = oe(() => {
      t(
        this.#t,
        () => r,
        () => () => {
        }
      );
    }));
  }
  #A() {
    const r = this.#e.pending;
    r && (this.is_pending = !0, this.#r = oe(() => r(this.#t)), Pe(() => {
      var t = this.#u = document.createDocumentFragment(), o = Re();
      t.append(o), this.#o = this.#h(() => (De.ensure(), oe(() => this.#i(o)))), this.#s === 0 && (this.#t.before(t), this.#u = null, Ve(
        /** @type {Effect} */
        this.#r,
        () => {
          this.#r = null;
        }
      ), this.#p());
    }));
  }
  #m() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#s = 0, this.#f = 0, this.#o = oe(() => {
        this.#i(this.#t);
      }), this.#s > 0) {
        var r = this.#u = document.createDocumentFragment();
        Zn(this.#o, r);
        const t = (
          /** @type {(anchor: Node) => void} */
          this.#e.pending
        );
        this.#r = oe(() => t(this.#t));
      } else
        this.#p();
    } catch (t) {
      this.error(t);
    }
  }
  #p() {
    this.is_pending = !1;
    for (const r of this.#_)
      U(r, K), pe(r);
    for (const r of this.#v)
      U(r, fe), pe(r);
    this.#_.clear(), this.#v.clear();
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(r) {
    In(r, this.#_, this.#v);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #h(r) {
    var t = F, o = R, i = j;
    ye(this.#n), ce(this.#n), nt(this.#n.ctx);
    try {
      return r();
    } catch (u) {
      return Sn(u), null;
    } finally {
      ye(t), ce(o), nt(i);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #g(r) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#g(r);
      return;
    }
    this.#s += r, this.#s === 0 && (this.#p(), this.#r && Ve(this.#r, () => {
      this.#r = null;
    }), this.#u && (this.#t.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(r) {
    this.#g(r), this.#f += r, !(!this.#d || this.#c) && (this.#c = !0, Pe(() => {
      this.#c = !1, this.#d && Ye(this.#d, this.#f);
    }));
  }
  get_effect_pending() {
    return this.#b(), w(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(r) {
    var t = this.#e.onerror;
    let o = this.#e.failed;
    if (!t && !o)
      throw r;
    this.#o && (te(this.#o), this.#o = null), this.#r && (te(this.#r), this.#r = null), this.#a && (te(this.#a), this.#a = null);
    var i = !1, u = !1;
    const f = () => {
      if (i) {
        Gr();
        return;
      }
      i = !0, u && Cr(), this.#a !== null && Ve(this.#a, () => {
        this.#a = null;
      }), this.#h(() => {
        De.ensure(), this.#m();
      });
    }, h = (c) => {
      try {
        u = !0, t?.(c, f), u = !1;
      } catch (p) {
        Oe(p, this.#n && this.#n.parent);
      }
      o && (this.#a = this.#h(() => {
        De.ensure();
        try {
          return oe(() => {
            var p = (
              /** @type {Effect} */
              F
            );
            p.b = this, p.f |= Bt, o(
              this.#t,
              () => c,
              () => f
            );
          });
        } catch (p) {
          return Oe(
            p,
            /** @type {Effect} */
            this.#n.parent
          ), null;
        }
      }));
    };
    Pe(() => {
      var c;
      try {
        c = this.transform_error(r);
      } catch (p) {
        Oe(p, this.#n && this.#n.parent);
        return;
      }
      c !== null && typeof c == "object" && typeof /** @type {any} */
      c.then == "function" ? c.then(
        h,
        /** @param {unknown} e */
        (p) => Oe(p, this.#n && this.#n.parent)
      ) : h(c);
    });
  }
}
function Jr(n, r, t, o) {
  const i = mt() ? It : ae;
  var u = n.filter((e) => !e.settled);
  if (t.length === 0 && u.length === 0) {
    o(r.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    F
  ), h = $r(), c = u.length === 1 ? u[0].promise : u.length > 1 ? Promise.all(u.map((e) => e.promise)) : null;
  function p(e) {
    h();
    try {
      o(e);
    } catch (a) {
      (f.f & Se) === 0 && Oe(a, f);
    }
    Ht();
  }
  if (t.length === 0) {
    c.then(() => p(r.map(i)));
    return;
  }
  function m() {
    h(), Promise.all(t.map((e) => /* @__PURE__ */ ta(e))).then((e) => p([...r.map(i), ...e])).catch((e) => Oe(e, f));
  }
  c ? c.then(m) : m();
}
function $r() {
  var n = F, r = R, t = j, o = N;
  return function(u = !0) {
    ye(n), ce(r), nt(t), u && o?.activate();
  };
}
function Ht(n = !0) {
  ye(null), ce(null), nt(null), n && N?.deactivate();
}
function ea() {
  var n = (
    /** @type {Boundary} */
    /** @type {Effect} */
    F.b
  ), r = (
    /** @type {Batch} */
    N
  ), t = n.is_rendered();
  return n.update_pending_count(1), r.increment(t), () => {
    n.update_pending_count(-1), r.decrement(t);
  };
}
// @__NO_SIDE_EFFECTS__
function It(n) {
  var r = Z | K, t = R !== null && (R.f & Z) !== 0 ? (
    /** @type {Derived} */
    R
  ) : null;
  return F !== null && (F.f |= it), {
    ctx: j,
    deps: null,
    effects: null,
    equals: Tn,
    f: r,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Q
    ),
    wv: 0,
    parent: t ?? F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ta(n, r, t) {
  /** @type {Effect | null} */
  F === null && br();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), u = Xe(
    /** @type {V} */
    Q
  ), f = !R, h = /* @__PURE__ */ new Map();
  return va(() => {
    var c = mn();
    i = c.promise;
    try {
      Promise.resolve(n()).then(c.resolve, c.reject).finally(Ht);
    } catch (a) {
      c.reject(a), Ht();
    }
    var p = (
      /** @type {Batch} */
      N
    );
    if (f) {
      var m = ea();
      h.get(p)?.reject(He), h.delete(p), h.set(p, c);
    }
    const e = (a, l = void 0) => {
      if (p.activate(), l)
        l !== He && (u.f |= Le, Ye(u, l));
      else {
        (u.f & Le) !== 0 && (u.f ^= Le), Ye(u, a);
        for (const [s, d] of h) {
          if (h.delete(s), s === p) break;
          d.reject(He);
        }
      }
      m && m();
    };
    c.promise.then(e, (a) => e(null, a || "unknown"));
  }), Vn(() => {
    for (const c of h.values())
      c.reject(He);
  }), new Promise((c) => {
    function p(m) {
      function e() {
        m === i ? c(u) : p(i);
      }
      m.then(e, e);
    }
    p(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ae(n) {
  const r = /* @__PURE__ */ It(n);
  return r.equals = xn, r;
}
function na(n) {
  var r = n.effects;
  if (r !== null) {
    n.effects = null;
    for (var t = 0; t < r.length; t += 1)
      te(
        /** @type {Effect} */
        r[t]
      );
  }
}
function ra(n) {
  for (var r = n.parent; r !== null; ) {
    if ((r.f & Z) === 0)
      return (r.f & Se) === 0 ? (
        /** @type {Effect} */
        r
      ) : null;
    r = r.parent;
  }
  return null;
}
function zt(n) {
  var r, t = F;
  ye(ra(n));
  try {
    n.f &= ~je, na(n), r = er(n);
  } finally {
    ye(t);
  }
  return r;
}
function Pn(n) {
  var r = zt(n);
  if (!n.equals(r) && (n.wv = Jn(), (!N?.is_fork || n.deps === null) && (n.v = r, n.deps === null))) {
    U(n, X);
    return;
  }
  Ne || (ve !== null ? (Qt() || N?.is_fork) && ve.set(n, r) : Yt(n));
}
function aa(n) {
  if (n.effects !== null)
    for (const r of n.effects)
      (r.teardown || r.ac) && (r.teardown?.(), r.ac?.abort(He), r.teardown = vr, r.ac = null, _t(r, 0), Kt(r));
}
function Dn(n) {
  if (n.effects !== null)
    for (const r of n.effects)
      r.teardown && ze(r);
}
let qt = /* @__PURE__ */ new Set();
const Be = /* @__PURE__ */ new Map();
let Bn = !1;
function Xe(n, r) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Tn,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function Ce(n, r) {
  const t = Xe(n);
  return ba(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(n, r = !1, t = !0) {
  const o = Xe(n);
  return r || (o.equals = xn), ht && t && j !== null && j.l !== null && (j.l.s ??= []).push(o), o;
}
function z(n, r, t = !1) {
  R !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!he || (R.f & tn) !== 0) && mt() && (R.f & (Z | Ee | Xt | tn)) !== 0 && (se === null || !et.call(se, n)) && Ir();
  let o = t ? Ke(r) : r;
  return Ye(n, o);
}
function Ye(n, r) {
  if (!n.equals(r)) {
    var t = n.v;
    Ne ? Be.set(n, r) : Be.set(n, t), n.v = r;
    var o = De.ensure();
    if (o.capture(n, t), (n.f & Z) !== 0) {
      const i = (
        /** @type {Derived} */
        n
      );
      (n.f & K) !== 0 && zt(i), Yt(i);
    }
    n.wv = Jn(), Rn(n, K), mt() && F !== null && (F.f & X) !== 0 && (F.f & (me | Qe)) === 0 && (ie === null ? ya([n]) : ie.push(n)), !o.is_fork && qt.size > 0 && !Bn && ia();
  }
  return r;
}
function ia() {
  Bn = !1;
  for (const n of qt)
    (n.f & X) !== 0 && U(n, fe), ot(n) && ze(n);
  qt.clear();
}
function dt(n) {
  z(n, n.v + 1);
}
function Rn(n, r) {
  var t = n.reactions;
  if (t !== null)
    for (var o = mt(), i = t.length, u = 0; u < i; u++) {
      var f = t[u], h = f.f;
      if (!(!o && f === F)) {
        var c = (h & K) === 0;
        if (c && U(f, r), (h & Z) !== 0) {
          var p = (
            /** @type {Derived} */
            f
          );
          ve?.delete(p), (h & je) === 0 && (h & ue && (f.f |= je), Rn(p, fe));
        } else c && ((h & Ee) !== 0 && xe !== null && xe.add(
          /** @type {Effect} */
          f
        ), pe(
          /** @type {Effect} */
          f
        ));
      }
    }
}
function Ke(n) {
  if (typeof n != "object" || n === null || $e in n)
    return n;
  const r = jt(n);
  if (r !== dr && r !== _r)
    return n;
  var t = /* @__PURE__ */ new Map(), o = pn(n), i = /* @__PURE__ */ Ce(0), u = Ue, f = (h) => {
    if (Ue === u)
      return h();
    var c = R, p = Ue;
    ce(null), un(u);
    var m = h();
    return ce(c), un(p), m;
  };
  return o && t.set("length", /* @__PURE__ */ Ce(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(h, c, p) {
        (!("value" in p) || p.configurable === !1 || p.enumerable === !1 || p.writable === !1) && Sr();
        var m = t.get(c);
        return m === void 0 ? f(() => {
          var e = /* @__PURE__ */ Ce(p.value);
          return t.set(c, e), e;
        }) : z(m, p.value, !0), !0;
      },
      deleteProperty(h, c) {
        var p = t.get(c);
        if (p === void 0) {
          if (c in h) {
            const m = f(() => /* @__PURE__ */ Ce(Q));
            t.set(c, m), dt(i);
          }
        } else
          z(p, Q), dt(i);
        return !0;
      },
      get(h, c, p) {
        if (c === $e)
          return n;
        var m = t.get(c), e = c in h;
        if (m === void 0 && (!e || Je(h, c)?.writable) && (m = f(() => {
          var l = Ke(e ? h[c] : Q), s = /* @__PURE__ */ Ce(l);
          return s;
        }), t.set(c, m)), m !== void 0) {
          var a = w(m);
          return a === Q ? void 0 : a;
        }
        return Reflect.get(h, c, p);
      },
      getOwnPropertyDescriptor(h, c) {
        var p = Reflect.getOwnPropertyDescriptor(h, c);
        if (p && "value" in p) {
          var m = t.get(c);
          m && (p.value = w(m));
        } else if (p === void 0) {
          var e = t.get(c), a = e?.v;
          if (e !== void 0 && a !== Q)
            return {
              enumerable: !0,
              configurable: !0,
              value: a,
              writable: !0
            };
        }
        return p;
      },
      has(h, c) {
        if (c === $e)
          return !0;
        var p = t.get(c), m = p !== void 0 && p.v !== Q || Reflect.has(h, c);
        if (p !== void 0 || F !== null && (!m || Je(h, c)?.writable)) {
          p === void 0 && (p = f(() => {
            var a = m ? Ke(h[c]) : Q, l = /* @__PURE__ */ Ce(a);
            return l;
          }), t.set(c, p));
          var e = w(p);
          if (e === Q)
            return !1;
        }
        return m;
      },
      set(h, c, p, m) {
        var e = t.get(c), a = c in h;
        if (o && c === "length")
          for (var l = p; l < /** @type {Source<number>} */
          e.v; l += 1) {
            var s = t.get(l + "");
            s !== void 0 ? z(s, Q) : l in h && (s = f(() => /* @__PURE__ */ Ce(Q)), t.set(l + "", s));
          }
        if (e === void 0)
          (!a || Je(h, c)?.writable) && (e = f(() => /* @__PURE__ */ Ce(void 0)), z(e, Ke(p)), t.set(c, e));
        else {
          a = e.v !== Q;
          var d = f(() => Ke(p));
          z(e, d);
        }
        var v = Reflect.getOwnPropertyDescriptor(h, c);
        if (v?.set && v.set.call(m, p), !a) {
          if (o && typeof c == "string") {
            var _ = (
              /** @type {Source<number>} */
              t.get("length")
            ), y = Number(c);
            Number.isInteger(y) && y >= _.v && z(_, y + 1);
          }
          dt(i);
        }
        return !0;
      },
      ownKeys(h) {
        w(i);
        var c = Reflect.ownKeys(h).filter((e) => {
          var a = t.get(e);
          return a === void 0 || a.v !== Q;
        });
        for (var [p, m] of t)
          m.v !== Q && !(p in h) && c.push(p);
        return c;
      },
      setPrototypeOf() {
        Er();
      }
    }
  );
}
var rn, Fn, Nn, Hn;
function oa() {
  if (rn === void 0) {
    rn = window, Fn = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, r = Node.prototype, t = Text.prototype;
    Nn = Je(r, "firstChild").get, Hn = Je(r, "nextSibling").get, en(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), en(t) && (t.__t = void 0);
  }
}
function Re(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function xt(n) {
  return (
    /** @type {TemplateNode | null} */
    Nn.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function gt(n) {
  return (
    /** @type {TemplateNode | null} */
    Hn.call(n)
  );
}
function k(n, r) {
  return /* @__PURE__ */ xt(n);
}
function rt(n, r = !1) {
  {
    var t = /* @__PURE__ */ xt(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ gt(t) : t;
  }
}
function b(n, r = 1, t = !1) {
  let o = n;
  for (; r--; )
    o = /** @type {TemplateNode} */
    /* @__PURE__ */ gt(o);
  return o;
}
function la(n) {
  n.textContent = "";
}
function qn() {
  return !1;
}
function ua(n, r, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(An, n, void 0)
  );
}
let an = !1;
function sa() {
  an || (an = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        if (!n.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            r.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ct(n) {
  var r = R, t = F;
  ce(null), ye(null);
  try {
    return n();
  } finally {
    ce(r), ye(t);
  }
}
function fa(n, r, t, o = t) {
  n.addEventListener(r, () => Ct(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), o(!0);
  } : n.__on_r = () => o(!0), sa();
}
function Gn(n) {
  F === null && (R === null && Tr(), Ar()), Ne && wr();
}
function ca(n, r) {
  var t = r.last;
  t === null ? r.last = r.first = n : (t.next = n, n.prev = t, r.last = n);
}
function Ie(n, r, t) {
  var o = F;
  o !== null && (o.f & re) !== 0 && (n |= re);
  var i = {
    ctx: j,
    deps: null,
    nodes: null,
    f: n | K | ue,
    first: null,
    fn: r,
    last: null,
    next: null,
    parent: o,
    b: o && o.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (t)
    try {
      ze(i);
    } catch (h) {
      throw te(i), h;
    }
  else r !== null && pe(i);
  var u = i;
  if (t && u.deps === null && u.teardown === null && u.nodes === null && u.first === u.last && // either `null`, or a singular child
  (u.f & it) === 0 && (u = u.first, (n & Ee) !== 0 && (n & tt) !== 0 && u !== null && (u.f |= tt)), u !== null && (u.parent = o, o !== null && ca(u, o), R !== null && (R.f & Z) !== 0 && (n & Qe) === 0)) {
    var f = (
      /** @type {Derived} */
      R
    );
    (f.effects ??= []).push(u);
  }
  return i;
}
function Qt() {
  return R !== null && !he;
}
function Vn(n) {
  const r = Ie(pt, null, !1);
  return U(r, X), r.teardown = n, r;
}
function on(n) {
  Gn();
  var r = (
    /** @type {Effect} */
    F.f
  ), t = !R && (r & me) !== 0 && (r & We) === 0;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      j
    );
    (o.e ??= []).push(n);
  } else
    return Un(n);
}
function Un(n) {
  return Ie(St | yn, n, !1);
}
function da(n) {
  return Gn(), Ie(pt | yn, n, !0);
}
function _a(n) {
  De.ensure();
  const r = Ie(Qe | it, n, !0);
  return (t = {}) => new Promise((o) => {
    t.outro ? Ve(r, () => {
      te(r), o(void 0);
    }) : (te(r), o(void 0));
  });
}
function Wn(n, r) {
  var t = (
    /** @type {ComponentContextLegacy} */
    j
  ), o = { effect: null, ran: !1, deps: n };
  t.l.$.push(o), o.effect = Mt(() => {
    n(), !o.ran && (o.ran = !0, M(r));
  });
}
function jn() {
  var n = (
    /** @type {ComponentContextLegacy} */
    j
  );
  Mt(() => {
    for (var r of n.l.$) {
      r.deps();
      var t = r.effect;
      (t.f & X) !== 0 && t.deps !== null && U(t, fe), ot(t) && ze(t), r.ran = !1;
    }
  });
}
function va(n) {
  return Ie(Xt | it, n, !0);
}
function Mt(n, r = 0) {
  return Ie(pt | r, n, !0);
}
function V(n, r = [], t = [], o = []) {
  Jr(o, r, t, (i) => {
    Ie(pt, () => n(...i.map(w)), !0);
  });
}
function Zt(n, r = 0) {
  var t = Ie(Ee | r, n, !0);
  return t;
}
function oe(n) {
  return Ie(me | it, n, !0);
}
function Xn(n) {
  var r = n.teardown;
  if (r !== null) {
    const t = Ne, o = R;
    ln(!0), ce(null);
    try {
      r.call(null);
    } finally {
      ln(t), ce(o);
    }
  }
}
function Kt(n, r = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Ct(() => {
      i.abort(He);
    });
    var o = t.next;
    (t.f & Qe) !== 0 ? t.parent = null : te(t, r), t = o;
  }
}
function pa(n) {
  for (var r = n.first; r !== null; ) {
    var t = r.next;
    (r.f & me) === 0 && te(r), r = t;
  }
}
function te(n, r = !0) {
  var t = !1;
  (r || (n.f & bn) !== 0) && n.nodes !== null && n.nodes.end !== null && (ha(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), Kt(n, r && !t), _t(n, 0), U(n, Se);
  var o = n.nodes && n.nodes.t;
  if (o !== null)
    for (const u of o)
      u.stop();
  Xn(n);
  var i = n.parent;
  i !== null && i.first !== null && Yn(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = null;
}
function ha(n, r) {
  for (; n !== null; ) {
    var t = n === r ? null : /* @__PURE__ */ gt(n);
    n.remove(), n = t;
  }
}
function Yn(n) {
  var r = n.parent, t = n.prev, o = n.next;
  t !== null && (t.next = o), o !== null && (o.prev = t), r !== null && (r.first === n && (r.first = o), r.last === n && (r.last = t));
}
function Ve(n, r, t = !0) {
  var o = [];
  zn(n, o, !0);
  var i = () => {
    t && te(n), r && r();
  }, u = o.length;
  if (u > 0) {
    var f = () => --u || i();
    for (var h of o)
      h.out(f);
  } else
    i();
}
function zn(n, r, t) {
  if ((n.f & re) === 0) {
    n.f ^= re;
    var o = n.nodes && n.nodes.t;
    if (o !== null)
      for (const h of o)
        (h.is_global || t) && r.push(h);
    for (var i = n.first; i !== null; ) {
      var u = i.next, f = (i.f & tt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & me) !== 0 && (n.f & Ee) !== 0;
      zn(i, r, f ? t : !1), i = u;
    }
  }
}
function Jt(n) {
  Qn(n, !0);
}
function Qn(n, r) {
  if ((n.f & re) !== 0) {
    n.f ^= re, (n.f & X) === 0 && (U(n, K), pe(n));
    for (var t = n.first; t !== null; ) {
      var o = t.next, i = (t.f & tt) !== 0 || (t.f & me) !== 0;
      Qn(t, i ? r : !1), t = o;
    }
    var u = n.nodes && n.nodes.t;
    if (u !== null)
      for (const f of u)
        (f.is_global || r) && f.in();
  }
}
function Zn(n, r) {
  if (n.nodes)
    for (var t = n.nodes.start, o = n.nodes.end; t !== null; ) {
      var i = t === o ? null : /* @__PURE__ */ gt(t);
      r.append(t), t = i;
    }
}
let Ze = null;
function ma(n) {
  var r = Ze;
  try {
    if (Ze = /* @__PURE__ */ new Set(), M(n), r !== null)
      for (var t of Ze)
        r.add(t);
    return Ze;
  } finally {
    Ze = r;
  }
}
function ga(n) {
  for (var r of ma(n))
    Ye(r, r.v);
}
let Tt = !1, Ne = !1;
function ln(n) {
  Ne = n;
}
let R = null, he = !1;
function ce(n) {
  R = n;
}
let F = null;
function ye(n) {
  F = n;
}
let se = null;
function ba(n) {
  R !== null && (se === null ? se = [n] : se.push(n));
}
let ee = null, ne = 0, ie = null;
function ya(n) {
  ie = n;
}
let Kn = 1, Ge = 0, Ue = Ge;
function un(n) {
  Ue = n;
}
function Jn() {
  return ++Kn;
}
function ot(n) {
  var r = n.f;
  if ((r & K) !== 0)
    return !0;
  if (r & Z && (n.f &= ~je), (r & fe) !== 0) {
    for (var t = (
      /** @type {Value[]} */
      n.deps
    ), o = t.length, i = 0; i < o; i++) {
      var u = t[i];
      if (ot(
        /** @type {Derived} */
        u
      ) && Pn(
        /** @type {Derived} */
        u
      ), u.wv > n.wv)
        return !0;
    }
    (r & ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ve === null && U(n, X);
  }
  return !1;
}
function $n(n, r, t = !0) {
  var o = n.reactions;
  if (o !== null && !(se !== null && et.call(se, n)))
    for (var i = 0; i < o.length; i++) {
      var u = o[i];
      (u.f & Z) !== 0 ? $n(
        /** @type {Derived} */
        u,
        r,
        !1
      ) : r === u && (t ? U(u, K) : (u.f & X) !== 0 && U(u, fe), pe(
        /** @type {Effect} */
        u
      ));
    }
}
function er(n) {
  var r = ee, t = ne, o = ie, i = R, u = se, f = j, h = he, c = Ue, p = n.f;
  ee = /** @type {null | Value[]} */
  null, ne = 0, ie = null, R = (p & (me | Qe)) === 0 ? n : null, se = null, nt(n.ctx), he = !1, Ue = ++Ge, n.ac !== null && (Ct(() => {
    n.ac.abort(He);
  }), n.ac = null);
  try {
    n.f |= Rt;
    var m = (
      /** @type {Function} */
      n.fn
    ), e = m();
    n.f |= We;
    var a = n.deps, l = N?.is_fork;
    if (ee !== null) {
      var s;
      if (l || _t(n, ne), a !== null && ne > 0)
        for (a.length = ne + ee.length, s = 0; s < ee.length; s++)
          a[ne + s] = ee[s];
      else
        n.deps = a = ee;
      if (Qt() && (n.f & ue) !== 0)
        for (s = ne; s < a.length; s++)
          (a[s].reactions ??= []).push(n);
    } else !l && a !== null && ne < a.length && (_t(n, ne), a.length = ne);
    if (mt() && ie !== null && !he && a !== null && (n.f & (Z | fe | K)) === 0)
      for (s = 0; s < /** @type {Source[]} */
      ie.length; s++)
        $n(
          ie[s],
          /** @type {Effect} */
          n
        );
    if (i !== null && i !== n) {
      if (Ge++, i.deps !== null)
        for (let d = 0; d < t; d += 1)
          i.deps[d].rv = Ge;
      if (r !== null)
        for (const d of r)
          d.rv = Ge;
      ie !== null && (o === null ? o = ie : o.push(.../** @type {Source[]} */
      ie));
    }
    return (n.f & Le) !== 0 && (n.f ^= Le), e;
  } catch (d) {
    return Sn(d);
  } finally {
    n.f ^= Rt, ee = r, ne = t, ie = o, R = i, se = u, nt(f), he = h, Ue = c;
  }
}
function wa(n, r) {
  let t = r.reactions;
  if (t !== null) {
    var o = fr.call(t, n);
    if (o !== -1) {
      var i = t.length - 1;
      i === 0 ? t = r.reactions = null : (t[o] = t[i], t.pop());
    }
  }
  if (t === null && (r.f & Z) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !et.call(ee, r))) {
    var u = (
      /** @type {Derived} */
      r
    );
    (u.f & ue) !== 0 && (u.f ^= ue, u.f &= ~je), Yt(u), aa(u), _t(u, 0);
  }
}
function _t(n, r) {
  var t = n.deps;
  if (t !== null)
    for (var o = r; o < t.length; o++)
      wa(n, t[o]);
}
function ze(n) {
  var r = n.f;
  if ((r & Se) === 0) {
    U(n, X);
    var t = F, o = Tt;
    F = n, Tt = !0;
    try {
      (r & (Ee | gn)) !== 0 ? pa(n) : Kt(n), Xn(n);
      var i = er(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Kn;
      var u;
    } finally {
      Tt = o, F = t;
    }
  }
}
async function Aa() {
  await Promise.resolve(), Xr();
}
function w(n) {
  var r = n.f, t = (r & Z) !== 0;
  if (Ze?.add(n), R !== null && !he) {
    var o = F !== null && (F.f & Se) !== 0;
    if (!o && (se === null || !et.call(se, n))) {
      var i = R.deps;
      if ((R.f & Rt) !== 0)
        n.rv < Ge && (n.rv = Ge, ee === null && i !== null && i[ne] === n ? ne++ : ee === null ? ee = [n] : ee.push(n));
      else {
        (R.deps ??= []).push(n);
        var u = n.reactions;
        u === null ? n.reactions = [R] : et.call(u, R) || u.push(R);
      }
    }
  }
  if (Ne && Be.has(n))
    return Be.get(n);
  if (t) {
    var f = (
      /** @type {Derived} */
      n
    );
    if (Ne) {
      var h = f.v;
      return ((f.f & X) === 0 && f.reactions !== null || nr(f)) && (h = zt(f)), Be.set(f, h), h;
    }
    var c = (f.f & ue) === 0 && !he && R !== null && (Tt || (R.f & ue) !== 0), p = (f.f & We) === 0;
    ot(f) && (c && (f.f |= ue), Pn(f)), c && !p && (Dn(f), tr(f));
  }
  if (ve?.has(n))
    return ve.get(n);
  if ((n.f & Le) !== 0)
    throw n.v;
  return n.v;
}
function tr(n) {
  if (n.f |= ue, n.deps !== null)
    for (const r of n.deps)
      (r.reactions ??= []).push(n), (r.f & Z) !== 0 && (r.f & ue) === 0 && (Dn(
        /** @type {Derived} */
        r
      ), tr(
        /** @type {Derived} */
        r
      ));
}
function nr(n) {
  if (n.v === Q) return !0;
  if (n.deps === null) return !1;
  for (const r of n.deps)
    if (Be.has(r) || (r.f & Z) !== 0 && nr(
      /** @type {Derived} */
      r
    ))
      return !0;
  return !1;
}
function M(n) {
  var r = he;
  try {
    return he = !0, n();
  } finally {
    he = r;
  }
}
function le(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if ($e in n)
      Gt(n);
    else if (!Array.isArray(n))
      for (let r in n) {
        const t = n[r];
        typeof t == "object" && t && $e in t && Gt(t);
      }
  }
}
function Gt(n, r = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !r.has(n)) {
    r.add(n), n instanceof Date && n.getTime();
    for (let o in n)
      try {
        Gt(n[o], r);
      } catch {
      }
    const t = jt(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const o = hn(t);
      for (let i in o) {
        const u = o[i].get;
        if (u)
          try {
            u.call(n);
          } catch {
          }
      }
    }
  }
}
const Ta = ["touchstart", "touchmove"];
function xa(n) {
  return Ta.includes(n);
}
const yt = /* @__PURE__ */ Symbol("events"), ka = /* @__PURE__ */ new Set(), sn = /* @__PURE__ */ new Set();
function Sa(n, r, t, o = {}) {
  function i(u) {
    if (o.capture || Vt.call(r, u), !u.cancelBubble)
      return Ct(() => t?.call(this, u));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Pe(() => {
    r.addEventListener(n, i, o);
  }) : r.addEventListener(n, i, o), i;
}
function x(n, r, t, o, i) {
  var u = { capture: o, passive: i }, f = Sa(n, r, t, u);
  (r === document.body || // @ts-ignore
  r === window || // @ts-ignore
  r === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  r instanceof HTMLMediaElement) && Vn(() => {
    r.removeEventListener(n, f, u);
  });
}
let fn = null;
function Vt(n) {
  var r = this, t = (
    /** @type {Node} */
    r.ownerDocument
  ), o = n.type, i = n.composedPath?.() || [], u = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  fn = n;
  var f = 0, h = fn === n && n[yt];
  if (h) {
    var c = i.indexOf(h);
    if (c !== -1 && (r === document || r === /** @type {any} */
    window)) {
      n[yt] = r;
      return;
    }
    var p = i.indexOf(r);
    if (p === -1)
      return;
    c <= p && (f = c);
  }
  if (u = /** @type {Element} */
  i[f] || n.target, u !== r) {
    cr(n, "currentTarget", {
      configurable: !0,
      get() {
        return u || t;
      }
    });
    var m = R, e = F;
    ce(null), ye(null);
    try {
      for (var a, l = []; u !== null; ) {
        var s = u.assignedSlot || u.parentNode || /** @type {any} */
        u.host || null;
        try {
          var d = u[yt]?.[o];
          d != null && (!/** @type {any} */
          u.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === u) && d.call(u, n);
        } catch (v) {
          a ? l.push(v) : a = v;
        }
        if (n.cancelBubble || s === r || s === null)
          break;
        u = s;
      }
      if (a) {
        for (let v of l)
          queueMicrotask(() => {
            throw v;
          });
        throw a;
      }
    } finally {
      n[yt] = r, delete n.currentTarget, ce(m), ye(e);
    }
  }
}
const Ea = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function Ia(n) {
  return (
    /** @type {string} */
    Ea?.createHTML(n) ?? n
  );
}
function Ca(n) {
  var r = ua("template");
  return r.innerHTML = Ia(n.replaceAll("<!>", "<!---->")), r.content;
}
function Ut(n, r) {
  var t = (
    /** @type {Effect} */
    F
  );
  t.nodes === null && (t.nodes = { start: n, end: r, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function P(n, r) {
  var t = (r & Hr) !== 0, o = (r & qr) !== 0, i, u = !n.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ca(u ? n : "<!>" + n), t || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ xt(i)));
    var f = (
      /** @type {TemplateNode} */
      o || Fn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var h = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(f)
      ), c = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Ut(h, c);
    } else
      Ut(f, f);
    return f;
  };
}
function rr() {
  var n = document.createDocumentFragment(), r = document.createComment(""), t = Re();
  return n.append(r, t), Ut(r, t), n;
}
function L(n, r) {
  n !== null && n.before(
    /** @type {Node} */
    r
  );
}
function vt(n, r) {
  var t = r == null ? "" : typeof r == "object" ? r + "" : r;
  t !== (n.__t ??= n.nodeValue) && (n.__t = t, n.nodeValue = t + "");
}
function Ma(n, r) {
  return Oa(n, r);
}
const wt = /* @__PURE__ */ new Map();
function Oa(n, { target: r, anchor: t, props: o = {}, events: i, context: u, intro: f = !0, transformError: h }) {
  oa();
  var c = void 0, p = _a(() => {
    var m = t ?? r.appendChild(Re());
    Zr(
      /** @type {TemplateNode} */
      m,
      {
        pending: () => {
        }
      },
      (l) => {
        H({});
        var s = (
          /** @type {ComponentContext} */
          j
        );
        u && (s.c = u), i && (o.$$events = i), c = n(l, o) || {}, q();
      },
      h
    );
    var e = /* @__PURE__ */ new Set(), a = (l) => {
      for (var s = 0; s < l.length; s++) {
        var d = l[s];
        if (!e.has(d)) {
          e.add(d);
          var v = xa(d);
          for (const g of [r, document]) {
            var _ = wt.get(g);
            _ === void 0 && (_ = /* @__PURE__ */ new Map(), wt.set(g, _));
            var y = _.get(d);
            y === void 0 ? (g.addEventListener(d, Vt, { passive: v }), _.set(d, 1)) : _.set(d, y + 1);
          }
        }
      }
    };
    return a(kt(ka)), sn.add(a), () => {
      for (var l of e)
        for (const v of [r, document]) {
          var s = (
            /** @type {Map<string, number>} */
            wt.get(v)
          ), d = (
            /** @type {number} */
            s.get(l)
          );
          --d == 0 ? (v.removeEventListener(l, Vt), s.delete(l), s.size === 0 && wt.delete(v)) : s.set(l, d);
        }
      sn.delete(a), m !== t && m.parentNode?.removeChild(m);
    };
  });
  return La.set(c, p), c;
}
let La = /* @__PURE__ */ new WeakMap();
class Pa {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #l = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #n = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(r, t = !0) {
    this.anchor = r, this.#n = t;
  }
  #o = () => {
    var r = (
      /** @type {Batch} */
      N
    );
    if (this.#t.has(r)) {
      var t = (
        /** @type {Key} */
        this.#t.get(r)
      ), o = this.#l.get(t);
      if (o)
        Jt(o), this.#i.delete(t);
      else {
        var i = this.#e.get(t);
        i && (this.#l.set(t, i.effect), this.#e.delete(t), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), o = i.effect);
      }
      for (const [u, f] of this.#t) {
        if (this.#t.delete(u), u === r)
          break;
        const h = this.#e.get(f);
        h && (te(h.effect), this.#e.delete(f));
      }
      for (const [u, f] of this.#l) {
        if (u === t || this.#i.has(u)) continue;
        const h = () => {
          if (Array.from(this.#t.values()).includes(u)) {
            var p = document.createDocumentFragment();
            Zn(f, p), p.append(Re()), this.#e.set(u, { effect: f, fragment: p });
          } else
            te(f);
          this.#i.delete(u), this.#l.delete(u);
        };
        this.#n || !o ? (this.#i.add(u), Ve(f, h, !1)) : h();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #r = (r) => {
    this.#t.delete(r);
    const t = Array.from(this.#t.values());
    for (const [o, i] of this.#e)
      t.includes(o) || (te(i.effect), this.#e.delete(o));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(r, t) {
    var o = (
      /** @type {Batch} */
      N
    ), i = qn();
    if (t && !this.#l.has(r) && !this.#e.has(r))
      if (i) {
        var u = document.createDocumentFragment(), f = Re();
        u.append(f), this.#e.set(r, {
          effect: oe(() => t(f)),
          fragment: u
        });
      } else
        this.#l.set(
          r,
          oe(() => t(this.anchor))
        );
    if (this.#t.set(o, r), i) {
      for (const [h, c] of this.#l)
        h === r ? o.unskip_effect(c) : o.skip_effect(c);
      for (const [h, c] of this.#e)
        h === r ? o.unskip_effect(c.effect) : o.skip_effect(c.effect);
      o.oncommit(this.#o), o.ondiscard(this.#r);
    } else
      this.#o();
  }
}
function at(n, r, t = !1) {
  var o = new Pa(n), i = t ? tt : 0;
  function u(f, h) {
    o.ensure(f, h);
  }
  Zt(() => {
    var f = !1;
    r((h, c = 0) => {
      f = !0, u(c, h);
    }), f || u(!1, null);
  }, i);
}
function we(n, r) {
  return r;
}
function Da(n, r, t) {
  for (var o = [], i = r.length, u, f = r.length, h = 0; h < i; h++) {
    let e = r[h];
    Ve(
      e,
      () => {
        if (u) {
          if (u.pending.delete(e), u.done.add(e), u.pending.size === 0) {
            var a = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Wt(kt(u.done)), a.delete(u), a.size === 0 && (n.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var c = o.length === 0 && t !== null;
    if (c) {
      var p = (
        /** @type {Element} */
        t
      ), m = (
        /** @type {Element} */
        p.parentNode
      );
      la(m), m.append(p), n.items.clear();
    }
    Wt(r, !c);
  } else
    u = {
      pending: new Set(r),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ??= /* @__PURE__ */ new Set()).add(u);
}
function Wt(n, r = !0) {
  for (var t = 0; t < n.length; t++)
    te(n[t], r);
}
var cn;
function Ae(n, r, t, o, i, u = null) {
  var f = n, h = /* @__PURE__ */ new Map(), c = (r & wn) !== 0;
  if (c) {
    var p = (
      /** @type {Element} */
      n
    );
    f = p.appendChild(Re());
  }
  var m = null, e = /* @__PURE__ */ ae(() => {
    var _ = t();
    return pn(_) ? _ : _ == null ? [] : kt(_);
  }), a, l = !0;
  function s() {
    v.fallback = m, Ba(v, a, f, r, o), m !== null && (a.length === 0 ? (m.f & ke) === 0 ? Jt(m) : (m.f ^= ke, ft(m, null, f)) : Ve(m, () => {
      m = null;
    }));
  }
  var d = Zt(() => {
    a = /** @type {V[]} */
    w(e);
    for (var _ = a.length, y = /* @__PURE__ */ new Set(), g = (
      /** @type {Batch} */
      N
    ), T = qn(), I = 0; I < _; I += 1) {
      var C = a[I], E = o(C, I), A = l ? null : h.get(E);
      A ? (A.v && Ye(A.v, C), A.i && Ye(A.i, I), T && g.unskip_effect(A.e)) : (A = Ra(
        h,
        l ? f : cn ??= Re(),
        C,
        E,
        I,
        i,
        r,
        t
      ), l || (A.e.f |= ke), h.set(E, A)), y.add(E);
    }
    if (_ === 0 && u && !m && (l ? m = oe(() => u(f)) : (m = oe(() => u(cn ??= Re())), m.f |= ke)), _ > y.size && yr(), !l)
      if (T) {
        for (const [O, D] of h)
          y.has(O) || g.skip_effect(D.e);
        g.oncommit(s), g.ondiscard(() => {
        });
      } else
        s();
    w(e);
  }), v = { effect: d, items: h, outrogroups: null, fallback: m };
  l = !1;
}
function ut(n) {
  for (; n !== null && (n.f & me) === 0; )
    n = n.next;
  return n;
}
function Ba(n, r, t, o, i) {
  var u = (o & Lr) !== 0, f = r.length, h = n.items, c = ut(n.effect.first), p, m = null, e, a = [], l = [], s, d, v, _;
  if (u)
    for (_ = 0; _ < f; _ += 1)
      s = r[_], d = i(s, _), v = /** @type {EachItem} */
      h.get(d).e, (v.f & ke) === 0 && (v.nodes?.a?.measure(), (e ??= /* @__PURE__ */ new Set()).add(v));
  for (_ = 0; _ < f; _ += 1) {
    if (s = r[_], d = i(s, _), v = /** @type {EachItem} */
    h.get(d).e, n.outrogroups !== null)
      for (const D of n.outrogroups)
        D.pending.delete(v), D.done.delete(v);
    if ((v.f & ke) !== 0)
      if (v.f ^= ke, v === c)
        ft(v, null, t);
      else {
        var y = m ? m.next : c;
        v === n.effect.last && (n.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), Me(n, m, v), Me(n, v, y), ft(v, y, t), m = v, a = [], l = [], c = ut(m.next);
        continue;
      }
    if ((v.f & re) !== 0 && (Jt(v), u && (v.nodes?.a?.unfix(), (e ??= /* @__PURE__ */ new Set()).delete(v))), v !== c) {
      if (p !== void 0 && p.has(v)) {
        if (a.length < l.length) {
          var g = l[0], T;
          m = g.prev;
          var I = a[0], C = a[a.length - 1];
          for (T = 0; T < a.length; T += 1)
            ft(a[T], g, t);
          for (T = 0; T < l.length; T += 1)
            p.delete(l[T]);
          Me(n, I.prev, C.next), Me(n, m, I), Me(n, C, g), c = g, m = C, _ -= 1, a = [], l = [];
        } else
          p.delete(v), ft(v, c, t), Me(n, v.prev, v.next), Me(n, v, m === null ? n.effect.first : m.next), Me(n, m, v), m = v;
        continue;
      }
      for (a = [], l = []; c !== null && c !== v; )
        (p ??= /* @__PURE__ */ new Set()).add(c), l.push(c), c = ut(c.next);
      if (c === null)
        continue;
    }
    (v.f & ke) === 0 && a.push(v), m = v, c = ut(v.next);
  }
  if (n.outrogroups !== null) {
    for (const D of n.outrogroups)
      D.pending.size === 0 && (Wt(kt(D.done)), n.outrogroups?.delete(D));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (c !== null || p !== void 0) {
    var E = [];
    if (p !== void 0)
      for (v of p)
        (v.f & re) === 0 && E.push(v);
    for (; c !== null; )
      (c.f & re) === 0 && c !== n.fallback && E.push(c), c = ut(c.next);
    var A = E.length;
    if (A > 0) {
      var O = (o & wn) !== 0 && f === 0 ? t : null;
      if (u) {
        for (_ = 0; _ < A; _ += 1)
          E[_].nodes?.a?.measure();
        for (_ = 0; _ < A; _ += 1)
          E[_].nodes?.a?.fix();
      }
      Da(n, E, O);
    }
  }
  u && Pe(() => {
    if (e !== void 0)
      for (v of e)
        v.nodes?.a?.apply();
  });
}
function Ra(n, r, t, o, i, u, f, h) {
  var c = (f & Mr) !== 0 ? (f & Pr) === 0 ? /* @__PURE__ */ be(t, !1, !1) : Xe(t) : null, p = (f & Or) !== 0 ? Xe(i) : null;
  return {
    v: c,
    i: p,
    e: oe(() => (u(r, c ?? t, p ?? i, h), () => {
      n.delete(o);
    }))
  };
}
function ft(n, r, t) {
  if (n.nodes)
    for (var o = n.nodes.start, i = n.nodes.end, u = r && (r.f & ke) === 0 ? (
      /** @type {EffectNodes} */
      r.nodes.start
    ) : t; o !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(o)
      );
      if (u.before(o), o === i)
        return;
      o = f;
    }
}
function Me(n, r, t) {
  r === null ? n.effect.first = t : r.next = t, t === null ? n.effect.last = r : t.prev = r;
}
const Fa = /* @__PURE__ */ Symbol("is custom element"), Na = /* @__PURE__ */ Symbol("is html"), Ha = gr ? "progress" : "PROGRESS";
function B(n, r) {
  var t = ir(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  r ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === r && (r !== 0 || n.nodeName !== Ha) || (n.value = r ?? "");
}
function ar(n, r, t, o) {
  var i = ir(n);
  i[r] !== (i[r] = t) && (r === "loading" && (n[mr] = t), t == null ? n.removeAttribute(r) : typeof t != "string" && qa(n).includes(r) ? n[r] = t : n.setAttribute(r, t));
}
function ir(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ??= {
      [Fa]: n.nodeName.includes("-"),
      [Na]: n.namespaceURI === An
    }
  );
}
var dn = /* @__PURE__ */ new Map();
function qa(n) {
  var r = n.getAttribute("is") || n.nodeName, t = dn.get(r);
  if (t) return t;
  dn.set(r, t = []);
  for (var o, i = n, u = Element.prototype; u !== i; ) {
    o = hn(i);
    for (var f in o)
      o[f].set && t.push(f);
    i = jt(i);
  }
  return t;
}
function Fe(n, r, t = r) {
  var o = /* @__PURE__ */ new WeakSet();
  fa(n, "input", async (i) => {
    var u = i ? n.defaultValue : n.value;
    if (u = Ot(n) ? Lt(u) : u, t(u), N !== null && o.add(N), await Aa(), u !== (u = r())) {
      var f = n.selectionStart, h = n.selectionEnd, c = n.value.length;
      if (n.value = u ?? "", h !== null) {
        var p = n.value.length;
        f === h && h === c && p > c ? (n.selectionStart = p, n.selectionEnd = p) : (n.selectionStart = f, n.selectionEnd = Math.min(h, p));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  M(r) == null && n.value && (t(Ot(n) ? Lt(n.value) : n.value), N !== null && o.add(N)), Mt(() => {
    var i = r();
    if (n === document.activeElement) {
      var u = (
        /** @type {Batch} */
        Ft ?? N
      );
      if (o.has(u))
        return;
    }
    Ot(n) && i === Lt(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function Ot(n) {
  var r = n.type;
  return r === "number" || r === "range";
}
function Lt(n) {
  return n === "" ? null : +n;
}
function G(n = !1) {
  const r = (
    /** @type {ComponentContextLegacy} */
    j
  ), t = r.l.u;
  if (!t) return;
  let o = () => le(r.s);
  if (n) {
    let i = 0, u = (
      /** @type {Record<string, any>} */
      {}
    );
    const f = /* @__PURE__ */ It(() => {
      let h = !1;
      const c = r.s;
      for (const p in c)
        c[p] !== u[p] && (u[p] = c[p], h = !0);
      return h && i++, i;
    });
    o = () => w(f);
  }
  t.b.length && da(() => {
    _n(r, o), Dt(t.b);
  }), on(() => {
    const i = M(() => t.m.map(pr));
    return () => {
      for (const u of i)
        typeof u == "function" && u();
    };
  }), t.a.length && on(() => {
    _n(r, o), Dt(t.a);
  });
}
function _n(n, r) {
  if (n.l.s)
    for (const t of n.l.s) w(t);
  r();
}
let At = !1;
function Ga(n) {
  var r = At;
  try {
    return At = !1, [n(), At];
  } finally {
    At = r;
  }
}
function S(n, r, t, o) {
  var i = !ht || (t & Br) !== 0, u = (t & Fr) !== 0, f = (t & Nr) !== 0, h = (
    /** @type {V} */
    o
  ), c = !0, p = () => (c && (c = !1, h = f ? M(
    /** @type {() => V} */
    o
  ) : (
    /** @type {V} */
    o
  )), h), m;
  if (u) {
    var e = $e in n || hr in n;
    m = Je(n, r)?.set ?? (e && r in n ? (g) => n[r] = g : void 0);
  }
  var a, l = !1;
  u ? [a, l] = Ga(() => (
    /** @type {V} */
    n[r]
  )) : a = /** @type {V} */
  n[r], a === void 0 && o !== void 0 && (a = p(), m && (i && kr(), m(a)));
  var s;
  if (i ? s = () => {
    var g = (
      /** @type {V} */
      n[r]
    );
    return g === void 0 ? p() : (c = !0, g);
  } : s = () => {
    var g = (
      /** @type {V} */
      n[r]
    );
    return g !== void 0 && (h = /** @type {V} */
    void 0), g === void 0 ? h : g;
  }, i && (t & Rr) === 0)
    return s;
  if (m) {
    var d = n.$$legacy;
    return (
      /** @type {() => V} */
      (function(g, T) {
        return arguments.length > 0 ? ((!i || !T || d || l) && m(T ? s() : g), g) : s();
      })
    );
  }
  var v = !1, _ = ((t & Dr) !== 0 ? It : ae)(() => (v = !1, s()));
  u && w(_);
  var y = (
    /** @type {Effect} */
    F
  );
  return (
    /** @type {() => V} */
    (function(g, T) {
      if (arguments.length > 0) {
        const I = T ? w(_) : i && u ? Ke(g) : g;
        return z(_, I), v = !0, h !== void 0 && (h = I), g;
      }
      return Ne && v || (y.f & Se) !== 0 ? _.v : w(_);
    })
  );
}
const Va = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Va);
Ur();
var Ua = /* @__PURE__ */ P('<div class="toolbar svelte-1fy8usx"><div class="row controls svelte-1fy8usx"><button class="btn svelte-1fy8usx">✨ New</button> <input class="deck-input svelte-1fy8usx" type="text" placeholder="deck name"/> <input class="audio-input svelte-1fy8usx" type="text" placeholder="lesson1.opus"/> <button class="btn subtle svelte-1fy8usx">⏱</button> <button class="btn primary svelte-1fy8usx">💾</button></div> <div class="row slides svelte-1fy8usx"><button title="Title &amp; Subtitle" class="svelte-1fy8usx">🅣</button> <button title="Paragraph" class="svelte-1fy8usx">📄</button> <button title="Bullet List" class="svelte-1fy8usx">• • •</button> <button title="Two Column" class="svelte-1fy8usx">☰</button> <button title="Image" class="svelte-1fy8usx">🖼</button> <button title="Image Left / Bullets Right" class="svelte-1fy8usx">⬅️</button> <button title="Image Right / Bullets Left" class="svelte-1fy8usx">➡️</button> <button title="Table" class="svelte-1fy8usx">🔲</button> <button title="Bar Chart" class="svelte-1fy8usx">📊</button> <button title="Progress Bar" class="svelte-1fy8usx">📈</button> <button title="Quote" class="svelte-1fy8usx">❝ ❞</button> <button title="Key Ideas" class="svelte-1fy8usx">💡</button> <button title="Equation" class="svelte-1fy8usx">∑</button> <button title="Image With Title" class="svelte-1fy8usx">🖼️🅣</button> <button title="Image With Caption" class="svelte-1fy8usx">🖼️💬</button> <button title="Fill Image" class="svelte-1fy8usx">🧱</button></div></div>');
function Wa(n, r) {
  H(r, !1);
  let t = S(r, "deckName", 12, "taleem-deck-new"), o = S(r, "audio", 12, ""), i = S(r, "onNew", 8, () => {
  }), u = S(r, "onAddSlide", 8, () => {
  }), f = S(r, "onMockTimings", 8, () => {
  }), h = S(r, "onDownload", 8, () => {
  });
  G();
  var c = Ua(), p = k(c), m = k(p), e = b(m, 2), a = b(e, 2), l = b(a, 2), s = b(l, 2), d = b(p, 2), v = k(d), _ = b(v, 2), y = b(_, 2), g = b(y, 2), T = b(g, 2), I = b(T, 2), C = b(I, 2), E = b(C, 2), A = b(E, 2), O = b(A, 2), D = b(O, 2), Y = b(D, 2), de = b(Y, 2), J = b(de, 2), W = b(J, 2), _e = b(W, 2);
  x("click", m, function(...ge) {
    i()?.apply(this, ge);
  }), Fe(e, t), Fe(a, o), x("click", l, function(...ge) {
    f()?.apply(this, ge);
  }), x("click", s, function(...ge) {
    h()?.apply(this, ge);
  }), x("click", v, () => u()("titleAndSubtitle")), x("click", _, () => u()("titleAndPara")), x("click", y, () => u()("bulletList")), x("click", g, () => u()("twoColumnText")), x("click", T, () => u()("imageSlide")), x("click", I, () => u()("imageLeftBulletsRight")), x("click", C, () => u()("imageRightBulletsLeft")), x("click", E, () => u()("table")), x("click", A, () => u()("barChart")), x("click", O, () => u()("progressbar")), x("click", D, () => u()("quoteSlide")), x("click", Y, () => u()("keyIdeasSlide")), x("click", de, () => u()("eq")), x("click", J, () => u()("imageWithTitle")), x("click", W, () => u()("imageWithCaption")), x("click", _e, () => u()("fillImage")), L(n, c), q();
}
var st = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pt = {};
var vn;
function ja() {
  return vn || (vn = 1, (function(n) {
    (function() {
      var r = function() {
        this.init();
      };
      r.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function() {
          var e = this || t;
          return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = typeof window < "u" && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e;
        },
        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function(e) {
          var a = this || t;
          if (e = parseFloat(e), a.ctx || m(), typeof e < "u" && e >= 0 && e <= 1) {
            if (a._volume = e, a._muted)
              return a;
            a.usingWebAudio && a.masterGain.gain.setValueAtTime(e, t.ctx.currentTime);
            for (var l = 0; l < a._howls.length; l++)
              if (!a._howls[l]._webAudio)
                for (var s = a._howls[l]._getSoundIds(), d = 0; d < s.length; d++) {
                  var v = a._howls[l]._soundById(s[d]);
                  v && v._node && (v._node.volume = v._volume * e);
                }
            return a;
          }
          return a._volume;
        },
        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function(e) {
          var a = this || t;
          a.ctx || m(), a._muted = e, a.usingWebAudio && a.masterGain.gain.setValueAtTime(e ? 0 : a._volume, t.ctx.currentTime);
          for (var l = 0; l < a._howls.length; l++)
            if (!a._howls[l]._webAudio)
              for (var s = a._howls[l]._getSoundIds(), d = 0; d < s.length; d++) {
                var v = a._howls[l]._soundById(s[d]);
                v && v._node && (v._node.muted = e ? !0 : v._muted);
              }
          return a;
        },
        /**
         * Handle stopping all sounds globally.
         */
        stop: function() {
          for (var e = this || t, a = 0; a < e._howls.length; a++)
            e._howls[a].stop();
          return e;
        },
        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function() {
          for (var e = this || t, a = e._howls.length - 1; a >= 0; a--)
            e._howls[a].unload();
          return e.usingWebAudio && e.ctx && typeof e.ctx.close < "u" && (e.ctx.close(), e.ctx = null, m()), e;
        },
        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function(e) {
          return (this || t)._codecs[e.replace(/^x-/, "")];
        },
        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function() {
          var e = this || t;
          if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio)
            if (typeof Audio < "u")
              try {
                var a = new Audio();
                typeof a.oncanplaythrough > "u" && (e._canPlayEvent = "canplay");
              } catch {
                e.noAudio = !0;
              }
            else
              e.noAudio = !0;
          try {
            var a = new Audio();
            a.muted && (e.noAudio = !0);
          } catch {
          }
          return e.noAudio || e._setupCodecs(), e;
        },
        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function() {
          var e = this || t, a = null;
          try {
            a = typeof Audio < "u" ? new Audio() : null;
          } catch {
            return e;
          }
          if (!a || typeof a.canPlayType != "function")
            return e;
          var l = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), s = e._navigator ? e._navigator.userAgent : "", d = s.match(/OPR\/(\d+)/g), v = d && parseInt(d[0].split("/")[1], 10) < 33, _ = s.indexOf("Safari") !== -1 && s.indexOf("Chrome") === -1, y = s.match(/Version\/(.*?) /), g = _ && y && parseInt(y[1], 10) < 15;
          return e._codecs = {
            mp3: !!(!v && (l || a.canPlayType("audio/mp3;").replace(/^no$/, ""))),
            mpeg: !!l,
            opus: !!a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(a.canPlayType('audio/wav; codecs="1"') || a.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!a.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!a.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(a.canPlayType("audio/x-m4b;") || a.canPlayType("audio/m4b;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(a.canPlayType("audio/x-mp4;") || a.canPlayType("audio/mp4;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!(!g && a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !!(!g && a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!a.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(a.canPlayType("audio/x-flac;") || a.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, e;
        },
        /**
         * Some browsers/devices will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _unlockAudio: function() {
          var e = this || t;
          if (!(e._audioUnlocked || !e.ctx)) {
            e._audioUnlocked = !1, e.autoUnlock = !1, !e._mobileUnloaded && e.ctx.sampleRate !== 44100 && (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
            var a = function(l) {
              for (; e._html5AudioPool.length < e.html5PoolSize; )
                try {
                  var s = new Audio();
                  s._unlocked = !0, e._releaseHtml5Audio(s);
                } catch {
                  e.noAudio = !0;
                  break;
                }
              for (var d = 0; d < e._howls.length; d++)
                if (!e._howls[d]._webAudio)
                  for (var v = e._howls[d]._getSoundIds(), _ = 0; _ < v.length; _++) {
                    var y = e._howls[d]._soundById(v[_]);
                    y && y._node && !y._node._unlocked && (y._node._unlocked = !0, y._node.load());
                  }
              e._autoResume();
              var g = e.ctx.createBufferSource();
              g.buffer = e._scratchBuffer, g.connect(e.ctx.destination), typeof g.start > "u" ? g.noteOn(0) : g.start(0), typeof e.ctx.resume == "function" && e.ctx.resume(), g.onended = function() {
                g.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", a, !0), document.removeEventListener("touchend", a, !0), document.removeEventListener("click", a, !0), document.removeEventListener("keydown", a, !0);
                for (var T = 0; T < e._howls.length; T++)
                  e._howls[T]._emit("unlock");
              };
            };
            return document.addEventListener("touchstart", a, !0), document.addEventListener("touchend", a, !0), document.addEventListener("click", a, !0), document.addEventListener("keydown", a, !0), e;
          }
        },
        /**
         * Get an unlocked HTML5 Audio object from the pool. If none are left,
         * return a new Audio object and throw a warning.
         * @return {Audio} HTML5 Audio object.
         */
        _obtainHtml5Audio: function() {
          var e = this || t;
          if (e._html5AudioPool.length)
            return e._html5AudioPool.pop();
          var a = new Audio().play();
          return a && typeof Promise < "u" && (a instanceof Promise || typeof a.then == "function") && a.catch(function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
          }), new Audio();
        },
        /**
         * Return an activated HTML5 Audio object to the pool.
         * @return {Howler}
         */
        _releaseHtml5Audio: function(e) {
          var a = this || t;
          return e._unlocked && a._html5AudioPool.push(e), a;
        },
        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function() {
          var e = this;
          if (!(!e.autoSuspend || !e.ctx || typeof e.ctx.suspend > "u" || !t.usingWebAudio)) {
            for (var a = 0; a < e._howls.length; a++)
              if (e._howls[a]._webAudio) {
                for (var l = 0; l < e._howls[a]._sounds.length; l++)
                  if (!e._howls[a]._sounds[l]._paused)
                    return e;
              }
            return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
              if (e.autoSuspend) {
                e._suspendTimer = null, e.state = "suspending";
                var s = function() {
                  e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
                };
                e.ctx.suspend().then(s, s);
              }
            }, 3e4), e;
          }
        },
        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function() {
          var e = this;
          if (!(!e.ctx || typeof e.ctx.resume > "u" || !t.usingWebAudio))
            return e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : e.state === "suspended" || e.state === "running" && e.ctx.state === "interrupted" ? (e.ctx.resume().then(function() {
              e.state = "running";
              for (var a = 0; a < e._howls.length; a++)
                e._howls[a]._emit("resume");
            }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : e.state === "suspending" && (e._resumeAfterSuspend = !0), e;
        }
      };
      var t = new r(), o = function(e) {
        var a = this;
        if (!e.src || e.src.length === 0) {
          console.error("An array of source files must be passed with any new Howl.");
          return;
        }
        a.init(e);
      };
      o.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function(e) {
          var a = this;
          return t.ctx || m(), a._autoplay = e.autoplay || !1, a._format = typeof e.format != "string" ? e.format : [e.format], a._html5 = e.html5 || !1, a._muted = e.mute || !1, a._loop = e.loop || !1, a._pool = e.pool || 5, a._preload = typeof e.preload == "boolean" || e.preload === "metadata" ? e.preload : !0, a._rate = e.rate || 1, a._sprite = e.sprite || {}, a._src = typeof e.src != "string" ? e.src : [e.src], a._volume = e.volume !== void 0 ? e.volume : 1, a._xhr = {
            method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
            headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
            withCredentials: e.xhr && e.xhr.withCredentials ? e.xhr.withCredentials : !1
          }, a._duration = 0, a._state = "unloaded", a._sounds = [], a._endTimers = {}, a._queue = [], a._playLock = !1, a._onend = e.onend ? [{ fn: e.onend }] : [], a._onfade = e.onfade ? [{ fn: e.onfade }] : [], a._onload = e.onload ? [{ fn: e.onload }] : [], a._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : [], a._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : [], a._onpause = e.onpause ? [{ fn: e.onpause }] : [], a._onplay = e.onplay ? [{ fn: e.onplay }] : [], a._onstop = e.onstop ? [{ fn: e.onstop }] : [], a._onmute = e.onmute ? [{ fn: e.onmute }] : [], a._onvolume = e.onvolume ? [{ fn: e.onvolume }] : [], a._onrate = e.onrate ? [{ fn: e.onrate }] : [], a._onseek = e.onseek ? [{ fn: e.onseek }] : [], a._onunlock = e.onunlock ? [{ fn: e.onunlock }] : [], a._onresume = [], a._webAudio = t.usingWebAudio && !a._html5, typeof t.ctx < "u" && t.ctx && t.autoUnlock && t._unlockAudio(), t._howls.push(a), a._autoplay && a._queue.push({
            event: "play",
            action: function() {
              a.play();
            }
          }), a._preload && a._preload !== "none" && a.load(), a;
        },
        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function() {
          var e = this, a = null;
          if (t.noAudio) {
            e._emit("loaderror", null, "No audio support.");
            return;
          }
          typeof e._src == "string" && (e._src = [e._src]);
          for (var l = 0; l < e._src.length; l++) {
            var s, d;
            if (e._format && e._format[l])
              s = e._format[l];
            else {
              if (d = e._src[l], typeof d != "string") {
                e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              s = /^data:audio\/([^;,]+);/i.exec(d), s || (s = /\.([^.]+)$/.exec(d.split("?", 1)[0])), s && (s = s[1].toLowerCase());
            }
            if (s || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), s && t.codecs(s)) {
              a = e._src[l];
              break;
            }
          }
          if (!a) {
            e._emit("loaderror", null, "No codec support for selected audio sources.");
            return;
          }
          return e._src = a, e._state = "loading", window.location.protocol === "https:" && a.slice(0, 5) === "http:" && (e._html5 = !0, e._webAudio = !1), new i(e), e._webAudio && f(e), e;
        },
        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function(e, a) {
          var l = this, s = null;
          if (typeof e == "number")
            s = e, e = null;
          else {
            if (typeof e == "string" && l._state === "loaded" && !l._sprite[e])
              return null;
            if (typeof e > "u" && (e = "__default", !l._playLock)) {
              for (var d = 0, v = 0; v < l._sounds.length; v++)
                l._sounds[v]._paused && !l._sounds[v]._ended && (d++, s = l._sounds[v]._id);
              d === 1 ? e = null : s = null;
            }
          }
          var _ = s ? l._soundById(s) : l._inactiveSound();
          if (!_)
            return null;
          if (s && !e && (e = _._sprite || "__default"), l._state !== "loaded") {
            _._sprite = e, _._ended = !1;
            var y = _._id;
            return l._queue.push({
              event: "play",
              action: function() {
                l.play(y);
              }
            }), y;
          }
          if (s && !_._paused)
            return a || l._loadQueue("play"), _._id;
          l._webAudio && t._autoResume();
          var g = Math.max(0, _._seek > 0 ? _._seek : l._sprite[e][0] / 1e3), T = Math.max(0, (l._sprite[e][0] + l._sprite[e][1]) / 1e3 - g), I = T * 1e3 / Math.abs(_._rate), C = l._sprite[e][0] / 1e3, E = (l._sprite[e][0] + l._sprite[e][1]) / 1e3;
          _._sprite = e, _._ended = !1;
          var A = function() {
            _._paused = !1, _._seek = g, _._start = C, _._stop = E, _._loop = !!(_._loop || l._sprite[e][2]);
          };
          if (g >= E) {
            l._ended(_);
            return;
          }
          var O = _._node;
          if (l._webAudio) {
            var D = function() {
              l._playLock = !1, A(), l._refreshBuffer(_);
              var W = _._muted || l._muted ? 0 : _._volume;
              O.gain.setValueAtTime(W, t.ctx.currentTime), _._playStart = t.ctx.currentTime, typeof O.bufferSource.start > "u" ? _._loop ? O.bufferSource.noteGrainOn(0, g, 86400) : O.bufferSource.noteGrainOn(0, g, T) : _._loop ? O.bufferSource.start(0, g, 86400) : O.bufferSource.start(0, g, T), I !== 1 / 0 && (l._endTimers[_._id] = setTimeout(l._ended.bind(l, _), I)), a || setTimeout(function() {
                l._emit("play", _._id), l._loadQueue();
              }, 0);
            };
            t.state === "running" && t.ctx.state !== "interrupted" ? D() : (l._playLock = !0, l.once("resume", D), l._clearTimer(_._id));
          } else {
            var Y = function() {
              O.currentTime = g, O.muted = _._muted || l._muted || t._muted || O.muted, O.volume = _._volume * t.volume(), O.playbackRate = _._rate;
              try {
                var W = O.play();
                if (W && typeof Promise < "u" && (W instanceof Promise || typeof W.then == "function") ? (l._playLock = !0, A(), W.then(function() {
                  l._playLock = !1, O._unlocked = !0, a ? l._loadQueue() : l._emit("play", _._id);
                }).catch(function() {
                  l._playLock = !1, l._emit("playerror", _._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), _._ended = !0, _._paused = !0;
                })) : a || (l._playLock = !1, A(), l._emit("play", _._id)), O.playbackRate = _._rate, O.paused) {
                  l._emit("playerror", _._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  return;
                }
                e !== "__default" || _._loop ? l._endTimers[_._id] = setTimeout(l._ended.bind(l, _), I) : (l._endTimers[_._id] = function() {
                  l._ended(_), O.removeEventListener("ended", l._endTimers[_._id], !1);
                }, O.addEventListener("ended", l._endTimers[_._id], !1));
              } catch (_e) {
                l._emit("playerror", _._id, _e);
              }
            };
            O.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (O.src = l._src, O.load());
            var de = window && window.ejecta || !O.readyState && t._navigator.isCocoonJS;
            if (O.readyState >= 3 || de)
              Y();
            else {
              l._playLock = !0, l._state = "loading";
              var J = function() {
                l._state = "loaded", Y(), O.removeEventListener(t._canPlayEvent, J, !1);
              };
              O.addEventListener(t._canPlayEvent, J, !1), l._clearTimer(_._id);
            }
          }
          return _._id;
        },
        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function(e) {
          var a = this;
          if (a._state !== "loaded" || a._playLock)
            return a._queue.push({
              event: "pause",
              action: function() {
                a.pause(e);
              }
            }), a;
          for (var l = a._getSoundIds(e), s = 0; s < l.length; s++) {
            a._clearTimer(l[s]);
            var d = a._soundById(l[s]);
            if (d && !d._paused && (d._seek = a.seek(l[s]), d._rateSeek = 0, d._paused = !0, a._stopFade(l[s]), d._node))
              if (a._webAudio) {
                if (!d._node.bufferSource)
                  continue;
                typeof d._node.bufferSource.stop > "u" ? d._node.bufferSource.noteOff(0) : d._node.bufferSource.stop(0), a._cleanBuffer(d._node);
              } else (!isNaN(d._node.duration) || d._node.duration === 1 / 0) && d._node.pause();
            arguments[1] || a._emit("pause", d ? d._id : null);
          }
          return a;
        },
        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function(e, a) {
          var l = this;
          if (l._state !== "loaded" || l._playLock)
            return l._queue.push({
              event: "stop",
              action: function() {
                l.stop(e);
              }
            }), l;
          for (var s = l._getSoundIds(e), d = 0; d < s.length; d++) {
            l._clearTimer(s[d]);
            var v = l._soundById(s[d]);
            v && (v._seek = v._start || 0, v._rateSeek = 0, v._paused = !0, v._ended = !0, l._stopFade(s[d]), v._node && (l._webAudio ? v._node.bufferSource && (typeof v._node.bufferSource.stop > "u" ? v._node.bufferSource.noteOff(0) : v._node.bufferSource.stop(0), l._cleanBuffer(v._node)) : (!isNaN(v._node.duration) || v._node.duration === 1 / 0) && (v._node.currentTime = v._start || 0, v._node.pause(), v._node.duration === 1 / 0 && l._clearSound(v._node))), a || l._emit("stop", v._id));
          }
          return l;
        },
        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function(e, a) {
          var l = this;
          if (l._state !== "loaded" || l._playLock)
            return l._queue.push({
              event: "mute",
              action: function() {
                l.mute(e, a);
              }
            }), l;
          if (typeof a > "u")
            if (typeof e == "boolean")
              l._muted = e;
            else
              return l._muted;
          for (var s = l._getSoundIds(a), d = 0; d < s.length; d++) {
            var v = l._soundById(s[d]);
            v && (v._muted = e, v._interval && l._stopFade(v._id), l._webAudio && v._node ? v._node.gain.setValueAtTime(e ? 0 : v._volume, t.ctx.currentTime) : v._node && (v._node.muted = t._muted ? !0 : e), l._emit("mute", v._id));
          }
          return l;
        },
        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function() {
          var e = this, a = arguments, l, s;
          if (a.length === 0)
            return e._volume;
          if (a.length === 1 || a.length === 2 && typeof a[1] > "u") {
            var d = e._getSoundIds(), v = d.indexOf(a[0]);
            v >= 0 ? s = parseInt(a[0], 10) : l = parseFloat(a[0]);
          } else a.length >= 2 && (l = parseFloat(a[0]), s = parseInt(a[1], 10));
          var _;
          if (typeof l < "u" && l >= 0 && l <= 1) {
            if (e._state !== "loaded" || e._playLock)
              return e._queue.push({
                event: "volume",
                action: function() {
                  e.volume.apply(e, a);
                }
              }), e;
            typeof s > "u" && (e._volume = l), s = e._getSoundIds(s);
            for (var y = 0; y < s.length; y++)
              _ = e._soundById(s[y]), _ && (_._volume = l, a[2] || e._stopFade(s[y]), e._webAudio && _._node && !_._muted ? _._node.gain.setValueAtTime(l, t.ctx.currentTime) : _._node && !_._muted && (_._node.volume = l * t.volume()), e._emit("volume", _._id));
          } else
            return _ = s ? e._soundById(s) : e._sounds[0], _ ? _._volume : 0;
          return e;
        },
        /**
         * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function(e, a, l, s) {
          var d = this;
          if (d._state !== "loaded" || d._playLock)
            return d._queue.push({
              event: "fade",
              action: function() {
                d.fade(e, a, l, s);
              }
            }), d;
          e = Math.min(Math.max(0, parseFloat(e)), 1), a = Math.min(Math.max(0, parseFloat(a)), 1), l = parseFloat(l), d.volume(e, s);
          for (var v = d._getSoundIds(s), _ = 0; _ < v.length; _++) {
            var y = d._soundById(v[_]);
            if (y) {
              if (s || d._stopFade(v[_]), d._webAudio && !y._muted) {
                var g = t.ctx.currentTime, T = g + l / 1e3;
                y._volume = e, y._node.gain.setValueAtTime(e, g), y._node.gain.linearRampToValueAtTime(a, T);
              }
              d._startFadeInterval(y, e, a, l, v[_], typeof s > "u");
            }
          }
          return d;
        },
        /**
         * Starts the internal interval to fade a sound.
         * @param  {Object} sound Reference to sound to fade.
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id to fade.
         * @param  {Boolean} isGroup   If true, set the volume on the group.
         */
        _startFadeInterval: function(e, a, l, s, d, v) {
          var _ = this, y = a, g = l - a, T = Math.abs(g / 0.01), I = Math.max(4, T > 0 ? s / T : s), C = Date.now();
          e._fadeTo = l, e._interval = setInterval(function() {
            var E = (Date.now() - C) / s;
            C = Date.now(), y += g * E, y = Math.round(y * 100) / 100, g < 0 ? y = Math.max(l, y) : y = Math.min(l, y), _._webAudio ? e._volume = y : _.volume(y, e._id, !0), v && (_._volume = y), (l < a && y <= l || l > a && y >= l) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, _.volume(l, e._id), _._emit("fade", e._id));
          }, I);
        },
        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function(e) {
          var a = this, l = a._soundById(e);
          return l && l._interval && (a._webAudio && l._node.gain.cancelScheduledValues(t.ctx.currentTime), clearInterval(l._interval), l._interval = null, a.volume(l._fadeTo, e), l._fadeTo = null, a._emit("fade", e)), a;
        },
        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function() {
          var e = this, a = arguments, l, s, d;
          if (a.length === 0)
            return e._loop;
          if (a.length === 1)
            if (typeof a[0] == "boolean")
              l = a[0], e._loop = l;
            else
              return d = e._soundById(parseInt(a[0], 10)), d ? d._loop : !1;
          else a.length === 2 && (l = a[0], s = parseInt(a[1], 10));
          for (var v = e._getSoundIds(s), _ = 0; _ < v.length; _++)
            d = e._soundById(v[_]), d && (d._loop = l, e._webAudio && d._node && d._node.bufferSource && (d._node.bufferSource.loop = l, l && (d._node.bufferSource.loopStart = d._start || 0, d._node.bufferSource.loopEnd = d._stop, e.playing(v[_]) && (e.pause(v[_], !0), e.play(v[_], !0)))));
          return e;
        },
        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function() {
          var e = this, a = arguments, l, s;
          if (a.length === 0)
            s = e._sounds[0]._id;
          else if (a.length === 1) {
            var d = e._getSoundIds(), v = d.indexOf(a[0]);
            v >= 0 ? s = parseInt(a[0], 10) : l = parseFloat(a[0]);
          } else a.length === 2 && (l = parseFloat(a[0]), s = parseInt(a[1], 10));
          var _;
          if (typeof l == "number") {
            if (e._state !== "loaded" || e._playLock)
              return e._queue.push({
                event: "rate",
                action: function() {
                  e.rate.apply(e, a);
                }
              }), e;
            typeof s > "u" && (e._rate = l), s = e._getSoundIds(s);
            for (var y = 0; y < s.length; y++)
              if (_ = e._soundById(s[y]), _) {
                e.playing(s[y]) && (_._rateSeek = e.seek(s[y]), _._playStart = e._webAudio ? t.ctx.currentTime : _._playStart), _._rate = l, e._webAudio && _._node && _._node.bufferSource ? _._node.bufferSource.playbackRate.setValueAtTime(l, t.ctx.currentTime) : _._node && (_._node.playbackRate = l);
                var g = e.seek(s[y]), T = (e._sprite[_._sprite][0] + e._sprite[_._sprite][1]) / 1e3 - g, I = T * 1e3 / Math.abs(_._rate);
                (e._endTimers[s[y]] || !_._paused) && (e._clearTimer(s[y]), e._endTimers[s[y]] = setTimeout(e._ended.bind(e, _), I)), e._emit("rate", _._id);
              }
          } else
            return _ = e._soundById(s), _ ? _._rate : e._rate;
          return e;
        },
        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function() {
          var e = this, a = arguments, l, s;
          if (a.length === 0)
            e._sounds.length && (s = e._sounds[0]._id);
          else if (a.length === 1) {
            var d = e._getSoundIds(), v = d.indexOf(a[0]);
            v >= 0 ? s = parseInt(a[0], 10) : e._sounds.length && (s = e._sounds[0]._id, l = parseFloat(a[0]));
          } else a.length === 2 && (l = parseFloat(a[0]), s = parseInt(a[1], 10));
          if (typeof s > "u")
            return 0;
          if (typeof l == "number" && (e._state !== "loaded" || e._playLock))
            return e._queue.push({
              event: "seek",
              action: function() {
                e.seek.apply(e, a);
              }
            }), e;
          var _ = e._soundById(s);
          if (_)
            if (typeof l == "number" && l >= 0) {
              var y = e.playing(s);
              y && e.pause(s, !0), _._seek = l, _._ended = !1, e._clearTimer(s), !e._webAudio && _._node && !isNaN(_._node.duration) && (_._node.currentTime = l);
              var g = function() {
                y && e.play(s, !0), e._emit("seek", s);
              };
              if (y && !e._webAudio) {
                var T = function() {
                  e._playLock ? setTimeout(T, 0) : g();
                };
                setTimeout(T, 0);
              } else
                g();
            } else if (e._webAudio) {
              var I = e.playing(s) ? t.ctx.currentTime - _._playStart : 0, C = _._rateSeek ? _._rateSeek - _._seek : 0;
              return _._seek + (C + I * Math.abs(_._rate));
            } else
              return _._node.currentTime;
          return e;
        },
        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function(e) {
          var a = this;
          if (typeof e == "number") {
            var l = a._soundById(e);
            return l ? !l._paused : !1;
          }
          for (var s = 0; s < a._sounds.length; s++)
            if (!a._sounds[s]._paused)
              return !0;
          return !1;
        },
        /**
         * Get the duration of this sound. Passing a sound id will return the sprite duration.
         * @param  {Number} id The sound id to check. If none is passed, return full source duration.
         * @return {Number} Audio duration in seconds.
         */
        duration: function(e) {
          var a = this, l = a._duration, s = a._soundById(e);
          return s && (l = a._sprite[s._sprite][1] / 1e3), l;
        },
        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function() {
          return this._state;
        },
        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function() {
          for (var e = this, a = e._sounds, l = 0; l < a.length; l++)
            a[l]._paused || e.stop(a[l]._id), e._webAudio || (e._clearSound(a[l]._node), a[l]._node.removeEventListener("error", a[l]._errorFn, !1), a[l]._node.removeEventListener(t._canPlayEvent, a[l]._loadFn, !1), a[l]._node.removeEventListener("ended", a[l]._endFn, !1), t._releaseHtml5Audio(a[l]._node)), delete a[l]._node, e._clearTimer(a[l]._id);
          var s = t._howls.indexOf(e);
          s >= 0 && t._howls.splice(s, 1);
          var d = !0;
          for (l = 0; l < t._howls.length; l++)
            if (t._howls[l]._src === e._src || e._src.indexOf(t._howls[l]._src) >= 0) {
              d = !1;
              break;
            }
          return u && d && delete u[e._src], t.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null;
        },
        /**
         * Listen to a custom event.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
         * @return {Howl}
         */
        on: function(e, a, l, s) {
          var d = this, v = d["_on" + e];
          return typeof a == "function" && v.push(s ? { id: l, fn: a, once: s } : { id: l, fn: a }), d;
        },
        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function(e, a, l) {
          var s = this, d = s["_on" + e], v = 0;
          if (typeof a == "number" && (l = a, a = null), a || l)
            for (v = 0; v < d.length; v++) {
              var _ = l === d[v].id;
              if (a === d[v].fn && _ || !a && _) {
                d.splice(v, 1);
                break;
              }
            }
          else if (e)
            s["_on" + e] = [];
          else {
            var y = Object.keys(s);
            for (v = 0; v < y.length; v++)
              y[v].indexOf("_on") === 0 && Array.isArray(s[y[v]]) && (s[y[v]] = []);
          }
          return s;
        },
        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function(e, a, l) {
          var s = this;
          return s.on(e, a, l, 1), s;
        },
        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function(e, a, l) {
          for (var s = this, d = s["_on" + e], v = d.length - 1; v >= 0; v--)
            (!d[v].id || d[v].id === a || e === "load") && (setTimeout((function(_) {
              _.call(this, a, l);
            }).bind(s, d[v].fn), 0), d[v].once && s.off(e, d[v].fn, d[v].id));
          return s._loadQueue(e), s;
        },
        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function(e) {
          var a = this;
          if (a._queue.length > 0) {
            var l = a._queue[0];
            l.event === e && (a._queue.shift(), a._loadQueue()), e || l.action();
          }
          return a;
        },
        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function(e) {
          var a = this, l = e._sprite;
          if (!a._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
            return setTimeout(a._ended.bind(a, e), 100), a;
          var s = !!(e._loop || a._sprite[l][2]);
          if (a._emit("end", e._id), !a._webAudio && s && a.stop(e._id, !0).play(e._id), a._webAudio && s) {
            a._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = t.ctx.currentTime;
            var d = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
            a._endTimers[e._id] = setTimeout(a._ended.bind(a, e), d);
          }
          return a._webAudio && !s && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, a._clearTimer(e._id), a._cleanBuffer(e._node), t._autoSuspend()), !a._webAudio && !s && a.stop(e._id, !0), a;
        },
        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function(e) {
          var a = this;
          if (a._endTimers[e]) {
            if (typeof a._endTimers[e] != "function")
              clearTimeout(a._endTimers[e]);
            else {
              var l = a._soundById(e);
              l && l._node && l._node.removeEventListener("ended", a._endTimers[e], !1);
            }
            delete a._endTimers[e];
          }
          return a;
        },
        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function(e) {
          for (var a = this, l = 0; l < a._sounds.length; l++)
            if (e === a._sounds[l]._id)
              return a._sounds[l];
          return null;
        },
        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function() {
          var e = this;
          e._drain();
          for (var a = 0; a < e._sounds.length; a++)
            if (e._sounds[a]._ended)
              return e._sounds[a].reset();
          return new i(e);
        },
        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function() {
          var e = this, a = e._pool, l = 0, s = 0;
          if (!(e._sounds.length < a)) {
            for (s = 0; s < e._sounds.length; s++)
              e._sounds[s]._ended && l++;
            for (s = e._sounds.length - 1; s >= 0; s--) {
              if (l <= a)
                return;
              e._sounds[s]._ended && (e._webAudio && e._sounds[s]._node && e._sounds[s]._node.disconnect(0), e._sounds.splice(s, 1), l--);
            }
          }
        },
        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function(e) {
          var a = this;
          if (typeof e > "u") {
            for (var l = [], s = 0; s < a._sounds.length; s++)
              l.push(a._sounds[s]._id);
            return l;
          } else
            return [e];
        },
        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function(e) {
          var a = this;
          return e._node.bufferSource = t.ctx.createBufferSource(), e._node.bufferSource.buffer = u[a._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, t.ctx.currentTime), a;
        },
        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function(e) {
          var a = this, l = t._navigator && t._navigator.vendor.indexOf("Apple") >= 0;
          if (!e.bufferSource)
            return a;
          if (t._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), l))
            try {
              e.bufferSource.buffer = t._scratchBuffer;
            } catch {
            }
          return e.bufferSource = null, a;
        },
        /**
         * Set the source to a 0-second silence to stop any downloading (except in IE).
         * @param  {Object} node Audio node to clear.
         */
        _clearSound: function(e) {
          var a = /MSIE |Trident\//.test(t._navigator && t._navigator.userAgent);
          a || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
        }
      };
      var i = function(e) {
        this._parent = e, this.init();
      };
      i.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function() {
          var e = this, a = e._parent;
          return e._muted = a._muted, e._loop = a._loop, e._volume = a._volume, e._rate = a._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++t._counter, a._sounds.push(e), e.create(), e;
        },
        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function() {
          var e = this, a = e._parent, l = t._muted || e._muted || e._parent._muted ? 0 : e._volume;
          return a._webAudio ? (e._node = typeof t.ctx.createGain > "u" ? t.ctx.createGainNode() : t.ctx.createGain(), e._node.gain.setValueAtTime(l, t.ctx.currentTime), e._node.paused = !0, e._node.connect(t.masterGain)) : t.noAudio || (e._node = t._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(t._canPlayEvent, e._loadFn, !1), e._endFn = e._endListener.bind(e), e._node.addEventListener("ended", e._endFn, !1), e._node.src = a._src, e._node.preload = a._preload === !0 ? "auto" : a._preload, e._node.volume = l * t.volume(), e._node.load()), e;
        },
        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function() {
          var e = this, a = e._parent;
          return e._muted = a._muted, e._loop = a._loop, e._volume = a._volume, e._rate = a._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++t._counter, e;
        },
        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function() {
          var e = this;
          e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1);
        },
        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function() {
          var e = this, a = e._parent;
          a._duration = Math.ceil(e._node.duration * 10) / 10, Object.keys(a._sprite).length === 0 && (a._sprite = { __default: [0, a._duration * 1e3] }), a._state !== "loaded" && (a._state = "loaded", a._emit("load"), a._loadQueue()), e._node.removeEventListener(t._canPlayEvent, e._loadFn, !1);
        },
        /**
         * HTML5 Audio ended listener callback.
         */
        _endListener: function() {
          var e = this, a = e._parent;
          a._duration === 1 / 0 && (a._duration = Math.ceil(e._node.duration * 10) / 10, a._sprite.__default[1] === 1 / 0 && (a._sprite.__default[1] = a._duration * 1e3), a._ended(e)), e._node.removeEventListener("ended", e._endFn, !1);
        }
      };
      var u = {}, f = function(e) {
        var a = e._src;
        if (u[a]) {
          e._duration = u[a].duration, p(e);
          return;
        }
        if (/^data:[^;]+;base64,/.test(a)) {
          for (var l = atob(a.split(",")[1]), s = new Uint8Array(l.length), d = 0; d < l.length; ++d)
            s[d] = l.charCodeAt(d);
          c(s.buffer, e);
        } else {
          var v = new XMLHttpRequest();
          v.open(e._xhr.method, a, !0), v.withCredentials = e._xhr.withCredentials, v.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(_) {
            v.setRequestHeader(_, e._xhr.headers[_]);
          }), v.onload = function() {
            var _ = (v.status + "")[0];
            if (_ !== "0" && _ !== "2" && _ !== "3") {
              e._emit("loaderror", null, "Failed loading audio file with status: " + v.status + ".");
              return;
            }
            c(v.response, e);
          }, v.onerror = function() {
            e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete u[a], e.load());
          }, h(v);
        }
      }, h = function(e) {
        try {
          e.send();
        } catch {
          e.onerror();
        }
      }, c = function(e, a) {
        var l = function() {
          a._emit("loaderror", null, "Decoding audio data failed.");
        }, s = function(d) {
          d && a._sounds.length > 0 ? (u[a._src] = d, p(a, d)) : l();
        };
        typeof Promise < "u" && t.ctx.decodeAudioData.length === 1 ? t.ctx.decodeAudioData(e).then(s).catch(l) : t.ctx.decodeAudioData(e, s, l);
      }, p = function(e, a) {
        a && !e._duration && (e._duration = a.duration), Object.keys(e._sprite).length === 0 && (e._sprite = { __default: [0, e._duration * 1e3] }), e._state !== "loaded" && (e._state = "loaded", e._emit("load"), e._loadQueue());
      }, m = function() {
        if (t.usingWebAudio) {
          try {
            typeof AudioContext < "u" ? t.ctx = new AudioContext() : typeof webkitAudioContext < "u" ? t.ctx = new webkitAudioContext() : t.usingWebAudio = !1;
          } catch {
            t.usingWebAudio = !1;
          }
          t.ctx || (t.usingWebAudio = !1);
          var e = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform), a = t._navigator && t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), l = a ? parseInt(a[1], 10) : null;
          if (e && l && l < 9) {
            var s = /safari/.test(t._navigator && t._navigator.userAgent.toLowerCase());
            t._navigator && !s && (t.usingWebAudio = !1);
          }
          t.usingWebAudio && (t.masterGain = typeof t.ctx.createGain > "u" ? t.ctx.createGainNode() : t.ctx.createGain(), t.masterGain.gain.setValueAtTime(t._muted ? 0 : t._volume, t.ctx.currentTime), t.masterGain.connect(t.ctx.destination)), t._setup();
        }
      };
      n.Howler = t, n.Howl = o, typeof st < "u" ? (st.HowlerGlobal = r, st.Howler = t, st.Howl = o, st.Sound = i) : typeof window < "u" && (window.HowlerGlobal = r, window.Howler = t, window.Howl = o, window.Sound = i);
    })();
    (function() {
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(t) {
        var o = this;
        if (!o.ctx || !o.ctx.listener)
          return o;
        for (var i = o._howls.length - 1; i >= 0; i--)
          o._howls[i].stereo(t);
        return o;
      }, HowlerGlobal.prototype.pos = function(t, o, i) {
        var u = this;
        if (!u.ctx || !u.ctx.listener)
          return u;
        if (o = typeof o != "number" ? u._pos[1] : o, i = typeof i != "number" ? u._pos[2] : i, typeof t == "number")
          u._pos = [t, o, i], typeof u.ctx.listener.positionX < "u" ? (u.ctx.listener.positionX.setTargetAtTime(u._pos[0], Howler.ctx.currentTime, 0.1), u.ctx.listener.positionY.setTargetAtTime(u._pos[1], Howler.ctx.currentTime, 0.1), u.ctx.listener.positionZ.setTargetAtTime(u._pos[2], Howler.ctx.currentTime, 0.1)) : u.ctx.listener.setPosition(u._pos[0], u._pos[1], u._pos[2]);
        else
          return u._pos;
        return u;
      }, HowlerGlobal.prototype.orientation = function(t, o, i, u, f, h) {
        var c = this;
        if (!c.ctx || !c.ctx.listener)
          return c;
        var p = c._orientation;
        if (o = typeof o != "number" ? p[1] : o, i = typeof i != "number" ? p[2] : i, u = typeof u != "number" ? p[3] : u, f = typeof f != "number" ? p[4] : f, h = typeof h != "number" ? p[5] : h, typeof t == "number")
          c._orientation = [t, o, i, u, f, h], typeof c.ctx.listener.forwardX < "u" ? (c.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, 0.1), c.ctx.listener.forwardY.setTargetAtTime(o, Howler.ctx.currentTime, 0.1), c.ctx.listener.forwardZ.setTargetAtTime(i, Howler.ctx.currentTime, 0.1), c.ctx.listener.upX.setTargetAtTime(u, Howler.ctx.currentTime, 0.1), c.ctx.listener.upY.setTargetAtTime(f, Howler.ctx.currentTime, 0.1), c.ctx.listener.upZ.setTargetAtTime(h, Howler.ctx.currentTime, 0.1)) : c.ctx.listener.setOrientation(t, o, i, u, f, h);
        else
          return p;
        return c;
      }, Howl.prototype.init = /* @__PURE__ */ (function(t) {
        return function(o) {
          var i = this;
          return i._orientation = o.orientation || [1, 0, 0], i._stereo = o.stereo || null, i._pos = o.pos || null, i._pannerAttr = {
            coneInnerAngle: typeof o.coneInnerAngle < "u" ? o.coneInnerAngle : 360,
            coneOuterAngle: typeof o.coneOuterAngle < "u" ? o.coneOuterAngle : 360,
            coneOuterGain: typeof o.coneOuterGain < "u" ? o.coneOuterGain : 0,
            distanceModel: typeof o.distanceModel < "u" ? o.distanceModel : "inverse",
            maxDistance: typeof o.maxDistance < "u" ? o.maxDistance : 1e4,
            panningModel: typeof o.panningModel < "u" ? o.panningModel : "HRTF",
            refDistance: typeof o.refDistance < "u" ? o.refDistance : 1,
            rolloffFactor: typeof o.rolloffFactor < "u" ? o.rolloffFactor : 1
          }, i._onstereo = o.onstereo ? [{ fn: o.onstereo }] : [], i._onpos = o.onpos ? [{ fn: o.onpos }] : [], i._onorientation = o.onorientation ? [{ fn: o.onorientation }] : [], t.call(this, o);
        };
      })(Howl.prototype.init), Howl.prototype.stereo = function(t, o) {
        var i = this;
        if (!i._webAudio)
          return i;
        if (i._state !== "loaded")
          return i._queue.push({
            event: "stereo",
            action: function() {
              i.stereo(t, o);
            }
          }), i;
        var u = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
        if (typeof o > "u")
          if (typeof t == "number")
            i._stereo = t, i._pos = [t, 0, 0];
          else
            return i._stereo;
        for (var f = i._getSoundIds(o), h = 0; h < f.length; h++) {
          var c = i._soundById(f[h]);
          if (c)
            if (typeof t == "number")
              c._stereo = t, c._pos = [t, 0, 0], c._node && (c._pannerAttr.panningModel = "equalpower", (!c._panner || !c._panner.pan) && r(c, u), u === "spatial" ? typeof c._panner.positionX < "u" ? (c._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), c._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), c._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : c._panner.setPosition(t, 0, 0) : c._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)), i._emit("stereo", c._id);
            else
              return c._stereo;
        }
        return i;
      }, Howl.prototype.pos = function(t, o, i, u) {
        var f = this;
        if (!f._webAudio)
          return f;
        if (f._state !== "loaded")
          return f._queue.push({
            event: "pos",
            action: function() {
              f.pos(t, o, i, u);
            }
          }), f;
        if (o = typeof o != "number" ? 0 : o, i = typeof i != "number" ? -0.5 : i, typeof u > "u")
          if (typeof t == "number")
            f._pos = [t, o, i];
          else
            return f._pos;
        for (var h = f._getSoundIds(u), c = 0; c < h.length; c++) {
          var p = f._soundById(h[c]);
          if (p)
            if (typeof t == "number")
              p._pos = [t, o, i], p._node && ((!p._panner || p._panner.pan) && r(p, "spatial"), typeof p._panner.positionX < "u" ? (p._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), p._panner.positionY.setValueAtTime(o, Howler.ctx.currentTime), p._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : p._panner.setPosition(t, o, i)), f._emit("pos", p._id);
            else
              return p._pos;
        }
        return f;
      }, Howl.prototype.orientation = function(t, o, i, u) {
        var f = this;
        if (!f._webAudio)
          return f;
        if (f._state !== "loaded")
          return f._queue.push({
            event: "orientation",
            action: function() {
              f.orientation(t, o, i, u);
            }
          }), f;
        if (o = typeof o != "number" ? f._orientation[1] : o, i = typeof i != "number" ? f._orientation[2] : i, typeof u > "u")
          if (typeof t == "number")
            f._orientation = [t, o, i];
          else
            return f._orientation;
        for (var h = f._getSoundIds(u), c = 0; c < h.length; c++) {
          var p = f._soundById(h[c]);
          if (p)
            if (typeof t == "number")
              p._orientation = [t, o, i], p._node && (p._panner || (p._pos || (p._pos = f._pos || [0, 0, -0.5]), r(p, "spatial")), typeof p._panner.orientationX < "u" ? (p._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime), p._panner.orientationY.setValueAtTime(o, Howler.ctx.currentTime), p._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : p._panner.setOrientation(t, o, i)), f._emit("orientation", p._id);
            else
              return p._orientation;
        }
        return f;
      }, Howl.prototype.pannerAttr = function() {
        var t = this, o = arguments, i, u, f;
        if (!t._webAudio)
          return t;
        if (o.length === 0)
          return t._pannerAttr;
        if (o.length === 1)
          if (typeof o[0] == "object")
            i = o[0], typeof u > "u" && (i.pannerAttr || (i.pannerAttr = {
              coneInnerAngle: i.coneInnerAngle,
              coneOuterAngle: i.coneOuterAngle,
              coneOuterGain: i.coneOuterGain,
              distanceModel: i.distanceModel,
              maxDistance: i.maxDistance,
              refDistance: i.refDistance,
              rolloffFactor: i.rolloffFactor,
              panningModel: i.panningModel
            }), t._pannerAttr = {
              coneInnerAngle: typeof i.pannerAttr.coneInnerAngle < "u" ? i.pannerAttr.coneInnerAngle : t._coneInnerAngle,
              coneOuterAngle: typeof i.pannerAttr.coneOuterAngle < "u" ? i.pannerAttr.coneOuterAngle : t._coneOuterAngle,
              coneOuterGain: typeof i.pannerAttr.coneOuterGain < "u" ? i.pannerAttr.coneOuterGain : t._coneOuterGain,
              distanceModel: typeof i.pannerAttr.distanceModel < "u" ? i.pannerAttr.distanceModel : t._distanceModel,
              maxDistance: typeof i.pannerAttr.maxDistance < "u" ? i.pannerAttr.maxDistance : t._maxDistance,
              refDistance: typeof i.pannerAttr.refDistance < "u" ? i.pannerAttr.refDistance : t._refDistance,
              rolloffFactor: typeof i.pannerAttr.rolloffFactor < "u" ? i.pannerAttr.rolloffFactor : t._rolloffFactor,
              panningModel: typeof i.pannerAttr.panningModel < "u" ? i.pannerAttr.panningModel : t._panningModel
            });
          else
            return f = t._soundById(parseInt(o[0], 10)), f ? f._pannerAttr : t._pannerAttr;
        else o.length === 2 && (i = o[0], u = parseInt(o[1], 10));
        for (var h = t._getSoundIds(u), c = 0; c < h.length; c++)
          if (f = t._soundById(h[c]), f) {
            var p = f._pannerAttr;
            p = {
              coneInnerAngle: typeof i.coneInnerAngle < "u" ? i.coneInnerAngle : p.coneInnerAngle,
              coneOuterAngle: typeof i.coneOuterAngle < "u" ? i.coneOuterAngle : p.coneOuterAngle,
              coneOuterGain: typeof i.coneOuterGain < "u" ? i.coneOuterGain : p.coneOuterGain,
              distanceModel: typeof i.distanceModel < "u" ? i.distanceModel : p.distanceModel,
              maxDistance: typeof i.maxDistance < "u" ? i.maxDistance : p.maxDistance,
              refDistance: typeof i.refDistance < "u" ? i.refDistance : p.refDistance,
              rolloffFactor: typeof i.rolloffFactor < "u" ? i.rolloffFactor : p.rolloffFactor,
              panningModel: typeof i.panningModel < "u" ? i.panningModel : p.panningModel
            };
            var m = f._panner;
            m || (f._pos || (f._pos = t._pos || [0, 0, -0.5]), r(f, "spatial"), m = f._panner), m.coneInnerAngle = p.coneInnerAngle, m.coneOuterAngle = p.coneOuterAngle, m.coneOuterGain = p.coneOuterGain, m.distanceModel = p.distanceModel, m.maxDistance = p.maxDistance, m.refDistance = p.refDistance, m.rolloffFactor = p.rolloffFactor, m.panningModel = p.panningModel;
          }
        return t;
      }, Sound.prototype.init = /* @__PURE__ */ (function(t) {
        return function() {
          var o = this, i = o._parent;
          o._orientation = i._orientation, o._stereo = i._stereo, o._pos = i._pos, o._pannerAttr = i._pannerAttr, t.call(this), o._stereo ? i.stereo(o._stereo) : o._pos && i.pos(o._pos[0], o._pos[1], o._pos[2], o._id);
        };
      })(Sound.prototype.init), Sound.prototype.reset = /* @__PURE__ */ (function(t) {
        return function() {
          var o = this, i = o._parent;
          return o._orientation = i._orientation, o._stereo = i._stereo, o._pos = i._pos, o._pannerAttr = i._pannerAttr, o._stereo ? i.stereo(o._stereo) : o._pos ? i.pos(o._pos[0], o._pos[1], o._pos[2], o._id) : o._panner && (o._panner.disconnect(0), o._panner = void 0, i._refreshBuffer(o)), t.call(this);
        };
      })(Sound.prototype.reset);
      var r = function(t, o) {
        o = o || "spatial", o === "spatial" ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.panningModel = t._pannerAttr.panningModel, typeof t._panner.positionX < "u" ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime), t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime), t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), typeof t._panner.orientationX < "u" ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime), t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime), t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id, !0);
      };
    })();
  })(Pt)), Pt;
}
var Xa = ja(), Ya = /* @__PURE__ */ P('<div class="sound-bar svelte-1yz87zz"><button class="svelte-1yz87zz">Load Sound</button></div>'), za = /* @__PURE__ */ P('<div class="sound-bar svelte-1yz87zz"><button class="svelte-1yz87zz">▶</button> <button class="svelte-1yz87zz">⏸</button> <button class="svelte-1yz87zz">⏹</button> <span class="time svelte-1yz87zz"> </span> <input class="scrub svelte-1yz87zz" type="range" min="0" step="0.01"/></div>');
function Qa(n, r) {
  H(r, !1);
  let t = S(r, "onTimeUpdate", 8, () => {
  }), o = null, i = /* @__PURE__ */ be(!1), u = /* @__PURE__ */ be(0), f = /* @__PURE__ */ be(0), h = !1;
  function c() {
    const C = document.createElement("input");
    C.type = "file", C.accept = "audio/*", C.onchange = (E) => {
      const A = E.target.files[0];
      if (!A) return;
      o && (o.unload(), o = null);
      const O = A.type?.split("/")[1];
      o = new Xa.Howl({
        src: [URL.createObjectURL(A)],
        format: O ? [O] : void 0,
        html5: !0,
        onload: () => {
          z(f, o.duration()), z(i, !0);
        },
        onplay: () => {
          m();
        },
        onpause: () => {
        },
        onstop: () => {
          p(0);
        }
      });
    }, C.click();
  }
  function p(C) {
    z(u, C), t()(C);
  }
  function m() {
    !o || !o.playing() || (h || p(o.seek() || 0), requestAnimationFrame(m));
  }
  function e() {
    o?.play();
  }
  function a() {
    o?.pause();
  }
  function l() {
    o?.stop();
  }
  function s() {
    h = !0;
  }
  function d(C) {
    p(Number(C.target.value));
  }
  function v() {
    o?.seek(w(u)), h = !1;
  }
  function _(C) {
    return C.toFixed(2) + "s";
  }
  G();
  var y = rr(), g = rt(y);
  {
    var T = (C) => {
      var E = Ya(), A = k(E);
      x("click", A, c), L(C, E);
    }, I = (C) => {
      var E = za(), A = k(E), O = b(A, 2), D = b(O, 2), Y = b(D, 2), de = k(Y), J = b(Y, 2);
      V(
        (W, _e) => {
          vt(de, `${W ?? ""} / ${_e ?? ""}`), ar(J, "max", w(f));
        },
        [
          () => (w(u), M(() => _(w(u)))),
          () => (w(f), M(() => _(w(f))))
        ]
      ), x("click", A, e), x("click", O, a), x("click", D, l), Fe(J, () => w(u), (W) => z(u, W)), x("mousedown", J, s), x("input", J, d), x("mouseup", J, v), L(C, E);
    };
    at(g, (C) => {
      w(i) ? C(I, !1) : C(T);
    });
  }
  L(n, y), q();
}
var Za = /* @__PURE__ */ P('<div style="margin-top:8px;display:flex;gap:8px;"><button>↑</button> <button>↓</button> <button>Delete</button></div>');
function Ka(n, r) {
  H(r, !1);
  let t = S(r, "index", 8), o = S(r, "onDelete", 8), i = S(r, "onMove", 8);
  G();
  var u = Za(), f = k(u), h = b(f, 2), c = b(h, 2);
  x("click", f, () => i()(t(), t() - 1)), x("click", h, () => i()(t(), t() + 1)), x("click", c, () => o()(t())), L(n, u), q();
}
var Ja = /* @__PURE__ */ P('<div class="wrap svelte-f6mjpr"><input type="number" step="0.01" class="svelte-f6mjpr"/> <button title="Set showAt to current time" class="svelte-f6mjpr">⏱️</button></div>');
function Te(n, r) {
  H(r, !1);
  let t = S(r, "value", 8, 0), o = S(r, "currentTime", 8, 0), i = S(r, "onChange", 8, () => {
  });
  G();
  var u = Ja(), f = k(u), h = b(f, 2);
  V(() => B(f, t())), x("input", f, (c) => i()(Number(c.target.value) || 0)), x("click", h, () => i()(o())), L(n, u), q();
}
var $a = /* @__PURE__ */ P('<div style="margin-top:8px;"><div><label>Title<br/> <input type="text" style="width:100%;"/></label> <div style="margin-top:4px;"><label>showAt<br/> <input type="number" style="width:100%;"/></label></div></div> <div style="margin-top:12px;"><label>Subtitle<br/> <input type="text" style="width:100%;"/></label> <div style="margin-top:4px;"><label>showAt<br/> <input type="number" style="width:100%;"/></label></div></div></div>');
function ei(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8);
  S(r, "currentTime", 8, 0);
  function i(g) {
    return t().find((T) => T.name === g) || { content: "", showAt: 0 };
  }
  function u(g, T, I) {
    const C = t().filter((A) => A.name !== g), E = i(g);
    o()([
      ...C,
      {
        name: g,
        content: T === "content" ? I : E.content,
        showAt: T === "showAt" ? Number(I) || 0 : E.showAt ?? 0
      }
    ]);
  }
  G();
  var f = $a(), h = k(f), c = k(h), p = b(k(c), 3), m = b(c, 2), e = k(m), a = b(k(e), 3), l = b(h, 2), s = k(l), d = b(k(s), 3), v = b(s, 2), _ = k(v), y = b(k(_), 3);
  V(
    (g, T, I, C) => {
      B(p, g), B(a, T), B(d, I), B(y, C);
    },
    [
      () => M(() => i("title").content),
      () => M(() => i("title").showAt ?? 0),
      () => M(() => i("subtitle").content),
      () => M(() => i("subtitle").showAt ?? 0)
    ]
  ), x("input", p, (g) => u("title", "content", g.target.value)), x("input", a, (g) => u("title", "showAt", g.target.value)), x("input", d, (g) => u("subtitle", "content", g.target.value)), x("input", y, (g) => u("subtitle", "showAt", g.target.value)), L(n, f), q();
}
var ti = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Title<br/> <input type="text" style="width:100%;"/></label> <label style="display:block;margin-top:4px;">showAt<br/> <input type="number" style="width:100%;"/></label> <label style="display:block;margin-top:8px;">Paragraph<br/> <textarea rows="4" style="width:100%;"></textarea></label> <label style="display:block;margin-top:4px;">showAt<br/> <input type="number" style="width:100%;"/></label></div>');
function ni(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8);
  S(r, "currentTime", 8, 0);
  function i(d) {
    return t().find((v) => v.name === d) || { content: "", showAt: 0 };
  }
  function u(d, v, _) {
    const y = t().filter((T) => T.name !== d), g = i(d);
    o()([
      ...y,
      {
        name: d,
        content: v === "content" ? _ : g.content,
        showAt: v === "showAt" ? Number(_) || 0 : g.showAt ?? 0
      }
    ]);
  }
  G();
  var f = ti(), h = k(f), c = b(k(h), 3), p = b(h, 2), m = b(k(p), 3), e = b(p, 2), a = b(k(e), 3), l = b(e, 2), s = b(k(l), 3);
  V(
    (d, v, _, y) => {
      B(c, d), B(m, v), B(a, _), B(s, y);
    },
    [
      () => M(() => i("title").content),
      () => M(() => i("title").showAt ?? 0),
      () => M(() => i("para").content),
      () => M(() => i("para").showAt ?? 0)
    ]
  ), x("input", c, (d) => u("title", "content", d.target.value)), x("input", m, (d) => u("title", "showAt", d.target.value)), x("input", a, (d) => u("para", "content", d.target.value)), x("input", s, (d) => u("para", "showAt", d.target.value)), L(n, f), q();
}
var ri = /* @__PURE__ */ P('<div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;"><input type="text" style="flex:1;"/> <!> <button>✕</button></div>'), ai = /* @__PURE__ */ P('<div style="margin-top:8px;"><!> <button>+ Add bullet</button></div>');
function ii(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8), i = S(r, "currentTime", 8, 0);
  function u() {
    o()([...t(), { name: "bullet", content: "", showAt: 0 }]);
  }
  function f(e, a, l) {
    const s = [...t()];
    s[e] = {
      ...s[e],
      [a]: a === "showAt" ? Number(l) || 0 : l
    }, o()(s);
  }
  function h(e) {
    o()(t().filter((a, l) => l !== e));
  }
  G();
  var c = ai(), p = k(c);
  Ae(p, 1, t, we, (e, a, l) => {
    var s = ri(), d = k(s), v = b(d, 2);
    {
      let y = /* @__PURE__ */ ae(() => (w(a), M(() => w(a).showAt ?? 0)));
      Te(v, {
        get value() {
          return w(y);
        },
        get currentTime() {
          return i();
        },
        onChange: (g) => f(l, "showAt", g)
      });
    }
    var _ = b(v, 2);
    V(() => B(d, (w(a), M(() => w(a).content)))), x("input", d, (y) => f(l, "content", y.target.value)), x("click", _, () => h(l)), L(e, s);
  });
  var m = b(p, 2);
  x("click", m, u), L(n, c), q();
}
var oi = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Left column<br/> <textarea rows="4" style="width:100%;"></textarea></label> <label style="display:block;margin-top:4px;">showAt<br/> <!></label> <label style="display:block;margin-top:8px;">Right column<br/> <textarea rows="4" style="width:100%;"></textarea></label> <label style="display:block;margin-top:4px;"><!></label></div>');
function li(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8), i = S(r, "currentTime", 8, 0);
  function u(v) {
    return t().find((_) => _.name === v) || { content: "", showAt: 0 };
  }
  function f(v, _, y) {
    const g = t().filter((I) => I.name !== v), T = u(v);
    o()([
      ...g,
      {
        name: v,
        content: _ === "content" ? y : T.content,
        showAt: _ === "showAt" ? Number(y) || 0 : T.showAt ?? 0
      }
    ]);
  }
  G();
  var h = oi(), c = k(h), p = b(k(c), 3), m = b(c, 2), e = b(k(m), 3);
  {
    let v = /* @__PURE__ */ ae(() => M(() => u("left").showAt ?? 0));
    Te(e, {
      get value() {
        return w(v);
      },
      get currentTime() {
        return i();
      },
      onChange: (_) => f("left", "showAt", _)
    });
  }
  var a = b(m, 2), l = b(k(a), 3), s = b(a, 2), d = k(s);
  {
    let v = /* @__PURE__ */ ae(() => M(() => u("right").showAt ?? 0));
    Te(d, {
      get value() {
        return w(v);
      },
      get currentTime() {
        return i();
      },
      onChange: (_) => f("right", "showAt", _)
    });
  }
  V(
    (v, _) => {
      B(p, v), B(l, _);
    },
    [
      () => M(() => u("left").content),
      () => M(() => u("right").content)
    ]
  ), x("input", p, (v) => f("left", "content", v.target.value)), x("input", l, (v) => f("right", "content", v.target.value)), L(n, h), q();
}
var ui = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Image filename<br/> <input type="text" style="width:100%;" placeholder="example.webp"/></label></div>');
function si(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8);
  S(r, "currentTime", 8, 0);
  function i() {
    return t().find((p) => p.name === "image") || { content: "", showAt: 0 };
  }
  function u(p, m) {
    const e = i();
    o()([
      {
        name: "image",
        content: m,
        showAt: e.showAt ?? 0
      }
    ]);
  }
  G();
  var f = ui(), h = k(f), c = b(k(h), 3);
  V((p) => B(c, p), [() => M(() => i().content)]), x("input", c, (p) => u("content", p.target.value)), L(n, f), q();
}
var fi = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Title<br/> <input type="text" style="width:100%;"/></label> <label style="display:block;margin-top:4px;">showAt<br/> <input type="number" style="width:100%;"/></label> <label style="display:block;margin-top:8px;">Image filename<br/> <input type="text" style="width:100%;"/></label> <label style="display:block;margin-top:4px;">showAt<br/> <input type="number" style="width:100%;"/></label></div>');
function ci(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8);
  S(r, "currentTime", 8, 0);
  function i(d) {
    return t().find((v) => v.name === d) || { content: "", showAt: 0 };
  }
  function u(d, v, _) {
    const y = t().filter((T) => T.name !== d), g = i(d);
    o()([
      ...y,
      {
        name: d,
        content: v === "content" ? _ : g.content,
        showAt: v === "showAt" ? Number(_) || 0 : g.showAt ?? 0
      }
    ]);
  }
  G();
  var f = fi(), h = k(f), c = b(k(h), 3), p = b(h, 2), m = b(k(p), 3), e = b(p, 2), a = b(k(e), 3), l = b(e, 2), s = b(k(l), 3);
  V(
    (d, v, _, y) => {
      B(c, d), B(m, v), B(a, _), B(s, y);
    },
    [
      () => M(() => i("title").content),
      () => M(() => i("title").showAt ?? 0),
      () => M(() => i("image").content),
      () => M(() => i("image").showAt ?? 0)
    ]
  ), x("input", c, (d) => u("title", "content", d.target.value)), x("input", m, (d) => u("title", "showAt", d.target.value)), x("input", a, (d) => u("image", "content", d.target.value)), x("input", s, (d) => u("image", "showAt", d.target.value)), L(n, f), q();
}
var di = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Image filename<br/> <input type="text" style="width:100%;"/></label> <label style="display:block;margin-top:8px;">Caption<br/> <input type="text" style="width:100%;"/></label> <label style="display:block;margin-top:4px;"><!></label></div>');
function _i(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8), i = S(r, "currentTime", 8, 0);
  function u(s) {
    return t().find((d) => d.name === s) || { content: "", showAt: 0 };
  }
  function f(s, d, v) {
    const _ = t().filter((g) => g.name !== s), y = u(s);
    o()([
      ..._,
      {
        name: s,
        content: d === "content" ? v : y.content,
        showAt: d === "showAt" ? Number(v) || 0 : y.showAt ?? 0
      }
    ]);
  }
  G();
  var h = di(), c = k(h), p = b(k(c), 3), m = b(c, 2), e = b(k(m), 3), a = b(m, 2), l = k(a);
  {
    let s = /* @__PURE__ */ ae(() => M(() => u("caption").showAt ?? 0));
    Te(l, {
      get value() {
        return w(s);
      },
      get currentTime() {
        return i();
      },
      onChange: (d) => f("caption", "showAt", d)
    });
  }
  V(
    (s, d) => {
      B(p, s), B(e, d);
    },
    [
      () => M(() => u("image").content),
      () => M(() => u("caption").content)
    ]
  ), x("input", p, (s) => f("image", "content", s.target.value)), x("input", e, (s) => f("caption", "content", s.target.value)), L(n, h), q();
}
var vi = /* @__PURE__ */ P('<div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;"><input type="text" style="flex:1;"/> <!> <button>✕</button></div>'), pi = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Image filename<br/> <input type="text" style="width:100%;"/></label> <div style="margin-top:4px;"><!></div> <div style="margin-top:8px;"><!> <button>+ Add bullet</button></div></div>');
function hi(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8), i = S(r, "currentTime", 8, 0), u = /* @__PURE__ */ be({ content: "", showAt: 0 }), f = /* @__PURE__ */ be([]);
  function h(g = w(u), T = w(f)) {
    o()([
      {
        name: "image",
        content: g.content,
        showAt: g.showAt ?? 0
      },
      ...T.map((I) => ({ name: "bullet", content: I.content, showAt: I.showAt ?? 0 }))
    ]);
  }
  function c() {
    h(w(u), [...w(f), { content: "", showAt: 0 }]);
  }
  function p(g, T, I) {
    const C = [...w(f)];
    C[g] = {
      ...C[g],
      [T]: T === "showAt" ? Number(I) || 0 : I
    }, h(w(u), C);
  }
  function m(g) {
    h(w(u), w(f).filter((T, I) => I !== g));
  }
  Wn(() => le(t()), () => {
    z(u, t().find((g) => g.name === "image") || { content: "", showAt: 0 }), z(f, t().filter((g) => g.name === "bullet"));
  }), jn(), G();
  var e = pi(), a = k(e), l = b(k(a), 3), s = b(a, 2), d = k(s);
  {
    let g = /* @__PURE__ */ ae(() => (w(u), M(() => w(u).showAt ?? 0)));
    Te(d, {
      get value() {
        return w(g);
      },
      get currentTime() {
        return i();
      },
      onChange: (T) => h({ ...w(u), showAt: T }, w(f))
    });
  }
  var v = b(s, 2), _ = k(v);
  Ae(_, 1, () => w(f), we, (g, T, I) => {
    var C = vi(), E = k(C), A = b(E, 2);
    {
      let D = /* @__PURE__ */ ae(() => (w(T), M(() => w(T).showAt ?? 0)));
      Te(A, {
        get value() {
          return w(D);
        },
        get currentTime() {
          return i();
        },
        onChange: (Y) => p(I, "showAt", Y)
      });
    }
    var O = b(A, 2);
    V(() => B(E, (w(T), M(() => w(T).content)))), x("input", E, (D) => p(I, "content", D.target.value)), x("click", O, () => m(I)), L(g, C);
  });
  var y = b(_, 2);
  V(() => B(l, (w(u), M(() => w(u).content)))), x("input", l, (g) => h({ ...w(u), content: g.target.value }, w(f))), x("click", y, c), L(n, e), q();
}
var mi = /* @__PURE__ */ P('<div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;"><input type="text" style="flex:1;"/> <!> <button>✕</button></div>'), gi = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Image filename<br/> <input type="text" style="width:100%;"/></label> <div style="margin-top:4px;"><!></div> <div style="margin-top:8px;"><!> <button>+ Add bullet</button></div></div>');
function bi(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8), i = S(r, "currentTime", 8, 0), u = /* @__PURE__ */ be({ content: "", showAt: 0 }), f = /* @__PURE__ */ be([]);
  function h(g = w(u), T = w(f)) {
    o()([
      {
        name: "image",
        content: g.content,
        showAt: g.showAt ?? 0
      },
      ...T.map((I) => ({ name: "bullet", content: I.content, showAt: I.showAt ?? 0 }))
    ]);
  }
  function c() {
    h(w(u), [...w(f), { content: "", showAt: 0 }]);
  }
  function p(g, T, I) {
    const C = [...w(f)];
    C[g] = {
      ...C[g],
      [T]: T === "showAt" ? Number(I) || 0 : I
    }, h(w(u), C);
  }
  function m(g) {
    h(w(u), w(f).filter((T, I) => I !== g));
  }
  Wn(() => le(t()), () => {
    z(u, t().find((g) => g.name === "image") || { content: "", showAt: 0 }), z(f, t().filter((g) => g.name === "bullet"));
  }), jn(), G();
  var e = gi(), a = k(e), l = b(k(a), 3), s = b(a, 2), d = k(s);
  {
    let g = /* @__PURE__ */ ae(() => (w(u), M(() => w(u).showAt ?? 0)));
    Te(d, {
      get value() {
        return w(g);
      },
      get currentTime() {
        return i();
      },
      onChange: (T) => h({ ...w(u), showAt: T }, w(f))
    });
  }
  var v = b(s, 2), _ = k(v);
  Ae(_, 1, () => w(f), we, (g, T, I) => {
    var C = mi(), E = k(C), A = b(E, 2);
    {
      let D = /* @__PURE__ */ ae(() => (w(T), M(() => w(T).showAt ?? 0)));
      Te(A, {
        get value() {
          return w(D);
        },
        get currentTime() {
          return i();
        },
        onChange: (Y) => p(I, "showAt", Y)
      });
    }
    var O = b(A, 2);
    V(() => B(E, (w(T), M(() => w(T).content)))), x("input", E, (D) => p(I, "content", D.target.value)), x("click", O, () => m(I)), L(g, C);
  });
  var y = b(_, 2);
  V(() => B(l, (w(u), M(() => w(u).content)))), x("input", l, (g) => h({ ...w(u), content: g.target.value }, w(f))), x("click", y, c), L(n, e), q();
}
var yi = /* @__PURE__ */ P("<button>+ Add table</button>"), wi = /* @__PURE__ */ P('<td><input type="text"/></td>'), Ai = /* @__PURE__ */ P("<tr><!><td><button>✕</button></td></tr>"), Ti = /* @__PURE__ */ P('<table border="1" cellpadding="4" cellspacing="0"></table> <div style="margin-top:8px;display:flex;gap:8px;"><button>+ Row</button> <button>+ Column</button> <button>− Last column</button></div>', 1), xi = /* @__PURE__ */ P('<div style="margin-top:8px;"><!></div>');
function ki(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8);
  function i(l, s, d) {
    const v = t().map((_) => [..._]);
    v[l][s] = d, o()(v);
  }
  function u() {
    t().length === 0 ? o()([[""]]) : o()([...t(), Array(t()[0].length).fill("")]);
  }
  function f() {
    const l = t().map((s) => [...s, ""]);
    o()(l);
  }
  function h(l) {
    o()(t().filter((s, d) => d !== l));
  }
  function c(l) {
    o()(t().map((s) => s.filter((d, v) => v !== l)));
  }
  G();
  var p = xi(), m = k(p);
  {
    var e = (l) => {
      var s = yi();
      x("click", s, u), L(l, s);
    }, a = (l) => {
      var s = Ti(), d = rt(s);
      Ae(d, 5, t, we, (T, I, C) => {
        var E = Ai(), A = k(E);
        Ae(A, 1, () => w(I), we, (Y, de, J) => {
          var W = wi(), _e = k(W);
          V(() => B(_e, w(de))), x("input", _e, (ge) => i(C, J, ge.target.value)), L(Y, W);
        });
        var O = b(A), D = k(O);
        x("click", D, () => h(C)), L(T, E);
      });
      var v = b(d, 2), _ = k(v), y = b(_, 2), g = b(y, 2);
      x("click", _, u), x("click", y, f), x("click", g, () => c(t()[0].length - 1)), L(l, s);
    };
    at(m, (l) => {
      le(t()), M(() => t().length === 0) ? l(e) : l(a, !1);
    });
  }
  L(n, p), q();
}
var Si = /* @__PURE__ */ P('<div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;"><input type="text" placeholder="Label" style="flex:1;"/> <input type="number" placeholder="Value" style="width:80px;"/> <!> <button>✕</button></div>'), Ei = /* @__PURE__ */ P('<div style="margin-top:8px;"><!> <button>+ Add bar</button></div>');
function Ii(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8), i = S(r, "currentTime", 8, 0);
  function u() {
    o()([...t(), { name: "bar", label: "", value: 0, showAt: 0 }]);
  }
  function f(e, a, l) {
    const s = [...t()];
    s[e] = {
      ...s[e],
      [a]: a === "value" || a === "showAt" ? Number(l) || 0 : l
    }, o()(s);
  }
  function h(e) {
    o()(t().filter((a, l) => l !== e));
  }
  G();
  var c = Ei(), p = k(c);
  Ae(p, 1, t, we, (e, a, l) => {
    var s = Si(), d = k(s), v = b(d, 2), _ = b(v, 2);
    {
      let g = /* @__PURE__ */ ae(() => (w(a), M(() => w(a).showAt ?? 0)));
      Te(_, {
        get value() {
          return w(g);
        },
        get currentTime() {
          return i();
        },
        onChange: (T) => f(l, "showAt", T)
      });
    }
    var y = b(_, 2);
    V(() => {
      B(d, (w(a), M(() => w(a).label))), B(v, (w(a), M(() => w(a).value)));
    }), x("input", d, (g) => f(l, "label", g.target.value)), x("input", v, (g) => f(l, "value", g.target.value)), x("click", y, () => h(l)), L(e, s);
  });
  var m = b(p, 2);
  x("click", m, u), L(n, c), q();
}
var Ci = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Label<br/> <input type="text" style="width:100%;"/></label> <label style="display:block;margin-top:8px;">Value<br/> <input type="number" style="width:100px;"/></label> <label style="display:block;margin-top:8px;">showAt<br/> <input type="number" style="width:100px;"/></label></div>');
function Mi(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8);
  S(r, "currentTime", 8, 0);
  function i() {
    return t()[0] || { name: "bar", label: "", value: 0, showAt: 0 };
  }
  function u(l, s) {
    const d = i();
    o()([
      {
        name: "bar",
        label: l === "label" ? s : d.label,
        value: l === "value" ? Number(s) || 0 : d.value,
        showAt: l === "showAt" ? Number(s) || 0 : d.showAt ?? 0
      }
    ]);
  }
  G();
  var f = Ci(), h = k(f), c = b(k(h), 3), p = b(h, 2), m = b(k(p), 3), e = b(p, 2), a = b(k(e), 3);
  V(
    (l, s, d) => {
      B(c, l), B(m, s), B(a, d);
    },
    [
      () => M(() => i().label),
      () => M(() => i().value),
      () => M(() => i().showAt ?? 0)
    ]
  ), x("input", c, (l) => u("label", l.target.value)), x("input", m, (l) => u("value", l.target.value)), x("input", a, (l) => u("showAt", l.target.value)), L(n, f), q();
}
var Oi = /* @__PURE__ */ P('<div style="margin-top:8px;"><label>Quote<br/> <textarea rows="3" style="width:100%;"></textarea></label> <label style="display:block;margin-top:4px;">showAt<br/> <input type="number" style="width:100%;"/></label> <label style="display:block;margin-top:8px;">Author<br/> <input type="text" style="width:100%;"/></label> <label style="display:block;margin-top:4px;">showAt<br/> <input type="number" style="width:100%;"/></label></div>');
function Li(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8);
  S(r, "currentTime", 8, 0);
  function i(d) {
    return t().find((v) => v.name === d) || { content: "", showAt: 0 };
  }
  function u(d, v, _) {
    const y = t().filter((T) => T.name !== d), g = i(d);
    o()([
      ...y,
      {
        name: d,
        content: v === "content" ? _ : g.content,
        showAt: v === "showAt" ? Number(_) || 0 : g.showAt ?? 0
      }
    ]);
  }
  G();
  var f = Oi(), h = k(f), c = b(k(h), 3), p = b(h, 2), m = b(k(p), 3), e = b(p, 2), a = b(k(e), 3), l = b(e, 2), s = b(k(l), 3);
  V(
    (d, v, _, y) => {
      B(c, d), B(m, v), B(a, _), B(s, y);
    },
    [
      () => M(() => i("quote").content),
      () => M(() => i("quote").showAt ?? 0),
      () => M(() => i("author").content),
      () => M(() => i("author").showAt ?? 0)
    ]
  ), x("input", c, (d) => u("quote", "content", d.target.value)), x("input", m, (d) => u("quote", "showAt", d.target.value)), x("input", a, (d) => u("author", "content", d.target.value)), x("input", s, (d) => u("author", "showAt", d.target.value)), L(n, f), q();
}
var Pi = /* @__PURE__ */ P('<div style="border:1px solid #333;padding:8px;margin-bottom:8px;"><strong></strong> <div style="margin-top:6px;"><label>Icon<br/> <input type="text" placeholder="🧠"/></label></div> <div style="margin-top:6px;"><label>Label<br/> <input type="text" style="width:100%;"/></label></div> <div style="margin-top:6px;"><!></div></div>'), Di = /* @__PURE__ */ P('<div style="margin-top:8px;"></div>');
function Bi(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8), i = S(r, "currentTime", 8, 0);
  const u = 4;
  function f() {
    const p = [...t()];
    for (; p.length < u; )
      p.push({ name: "card", icon: "", label: "", showAt: 0 });
    return p.slice(0, u);
  }
  function h(p, m, e) {
    const a = f();
    a[p] = {
      ...a[p],
      [m]: m === "showAt" ? Number(e) || 0 : e
    }, o()(a);
  }
  G();
  var c = Di();
  Ae(c, 5, () => M(f), we, (p, m, e) => {
    var a = Pi(), l = k(a);
    l.textContent = `Card ${e + 1}`;
    var s = b(l, 2), d = k(s), v = b(k(d), 3), _ = b(s, 2), y = k(_), g = b(k(y), 3), T = b(_, 2), I = k(T);
    {
      let C = /* @__PURE__ */ ae(() => (w(m), M(() => w(m).showAt ?? 0)));
      Te(I, {
        get value() {
          return w(C);
        },
        get currentTime() {
          return i();
        },
        onChange: (E) => h(e, "showAt", E)
      });
    }
    V(() => {
      B(v, (w(m), M(() => w(m).icon))), B(g, (w(m), M(() => w(m).label)));
    }), x("input", v, (C) => h(e, "icon", C.target.value)), x("input", g, (C) => h(e, "label", C.target.value)), L(p, a);
  }), L(n, c), q();
}
var Ri = /* @__PURE__ */ P('<div class="sp-item svelte-uaknxz"><input/> <button>✖</button></div>'), Fi = /* @__PURE__ */ P('<div class="sp-editor svelte-uaknxz"><div class="sp-toolbar"><button>➕ Text</button> <button>➕ Math</button> <button>➕ Image</button></div> <!></div>');
function Ni(n, r) {
  H(r, !1);
  let t = S(r, "items", 24, () => []), o = S(r, "onChange", 8);
  function i(l) {
    o()([...t(), { type: l, content: "" }]);
  }
  function u(l, s) {
    const d = t().slice();
    d[l] = { ...d[l], content: s }, o()(d);
  }
  function f(l) {
    const s = t().slice();
    s.splice(l, 1), o()(s);
  }
  G();
  var h = Fi(), c = k(h), p = k(c), m = b(p, 2), e = b(m, 2), a = b(c, 2);
  Ae(a, 1, t, we, (l, s, d) => {
    var v = Ri(), _ = k(v), y = b(_, 2);
    V(() => ar(_, "placeholder", (w(s), M(() => w(s).type)))), Fe(_, () => w(s).content, (g) => (w(s).content = g, ga(() => t()))), x("input", _, (g) => u(d, g.target.value)), x("click", y, () => f(d)), L(l, v);
  }), x("click", p, () => i("spText")), x("click", m, () => i("spMath")), x("click", e, () => i("spImage")), L(n, h), q();
}
var Hi = /* @__PURE__ */ P('<div class="eq-line svelte-q8n4ls"><div class="eq-line-header svelte-q8n4ls"><strong> </strong> <button>✖</button></div> <textarea placeholder="content"></textarea> <!></div>');
function qi(n, r) {
  H(r, !1);
  let t = S(r, "line", 12), o = S(r, "onUpdate", 8), i = S(r, "onDelete", 8);
  function u(l, s) {
    o()({ ...t(), [l]: s });
  }
  G();
  var f = Hi(), h = k(f), c = k(h), p = k(c), m = b(c, 2), e = b(h, 2), a = b(e, 2);
  Ni(a, {
    get items() {
      return le(t()), M(() => t().spItems);
    },
    onChange: (l) => u("spItems", l)
  }), V(() => vt(p, (le(t()), M(() => t().type)))), x("click", m, function(...l) {
    i()?.apply(this, l);
  }), Fe(e, () => t().content, (l) => t(t().content = l, !0)), x("input", e, (l) => u("content", l.target.value)), L(n, f), q();
}
var Gi = /* @__PURE__ */ P('<div class="eq-editor svelte-1yzgpd4"><div class="eq-toolbar svelte-1yzgpd4"><button>➕ Heading</button> <button>➕ Math</button> <button>➕ Text</button></div> <!></div>');
function Vi(n, r) {
  H(r, !1);
  let t = S(r, "data", 24, () => []), o = S(r, "onChange", 8);
  S(r, "currentTime", 8, 0);
  function i(l) {
    o()([...t(), { name: "line", type: l, content: "", spItems: [] }]);
  }
  function u(l, s) {
    const d = t().slice();
    d[l] = s, o()(d);
  }
  function f(l) {
    const s = t().slice();
    s.splice(l, 1), o()(s);
  }
  G();
  var h = Gi(), c = k(h), p = k(c), m = b(p, 2), e = b(m, 2), a = b(c, 2);
  Ae(a, 1, t, we, (l, s, d) => {
    qi(l, {
      get line() {
        return w(s);
      },
      onUpdate: (v) => u(d, v),
      onDelete: () => f(d)
    });
  }), x("click", p, () => i("heading")), x("click", m, () => i("math")), x("click", e, () => i("text")), L(n, h), q();
}
var Ui = /* @__PURE__ */ P('<div style="margin-top:8px;color:red;">Unknown slide type: <b> </b></div>');
function Wi(n, r) {
  let t = S(r, "type", 8), o = S(r, "data", 24, () => []), i = S(r, "onChange", 8), u = S(r, "currentTime", 8, 0);
  var f = rr(), h = rt(f);
  {
    var c = (A) => {
      ei(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, p = (A) => {
      ni(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, m = (A) => {
      ii(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, e = (A) => {
      li(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, a = (A) => {
      si(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, l = (A) => {
      ci(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, s = (A) => {
      _i(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, d = (A) => {
      hi(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, v = (A) => {
      bi(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, _ = (A) => {
      ki(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, y = (A) => {
      Ii(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, g = (A) => {
      Mi(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, T = (A) => {
      Li(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, I = (A) => {
      Bi(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, C = (A) => {
      Vi(A, {
        get data() {
          return o();
        },
        get onChange() {
          return i();
        },
        get currentTime() {
          return u();
        }
      });
    }, E = (A) => {
      var O = Ui(), D = b(k(O)), Y = k(D);
      V(() => vt(Y, t())), L(A, O);
    };
    at(h, (A) => {
      t() === "titleAndSubtitle" ? A(c) : t() === "titleAndPara" ? A(p, 1) : t() === "bulletList" ? A(m, 2) : t() === "twoColumnText" ? A(e, 3) : t() === "imageSlide" || t() === "fillImage" ? A(a, 4) : t() === "imageWithTitle" ? A(l, 5) : t() === "imageWithCaption" ? A(s, 6) : t() === "imageLeftBulletsRight" ? A(d, 7) : t() === "imageRightBulletsLeft" ? A(v, 8) : t() === "table" ? A(_, 9) : t() === "barChart" ? A(y, 10) : t() === "progressbar" ? A(g, 11) : t() === "quoteSlide" ? A(T, 12) : t() === "keyIdeasSlide" ? A(I, 13) : t() === "eq" ? A(C, 14) : A(E, !1);
    });
  }
  L(n, f);
}
var ji = /* @__PURE__ */ P('<div class="timing svelte-g5lm5s"><div class="field svelte-g5lm5s"><label>Start</label> <input type="number" step="0.01" class="svelte-g5lm5s"/> <button title="Set start to current time" class="svelte-g5lm5s">⏱️</button></div> <div class="field svelte-g5lm5s"><label>End</label> <input type="number" step="0.01" class="svelte-g5lm5s"/> <button title="Set end to current time" class="svelte-g5lm5s">⏱️</button></div></div>');
function Xi(n, r) {
  H(r, !1);
  let t = S(r, "start", 12, 0), o = S(r, "end", 12, 0), i = S(r, "onChange", 8, () => {
  }), u = S(r, "currentTime", 8, 0);
  function f(_) {
    t(_), i()(t(), o());
  }
  function h(_) {
    o(_), i()(t(), o());
  }
  function c() {
    f(u());
  }
  function p() {
    h(u());
  }
  G();
  var m = ji(), e = k(m), a = b(k(e), 2), l = b(a, 2), s = b(e, 2), d = b(k(s), 2), v = b(d, 2);
  V(() => {
    B(a, t()), B(d, o());
  }), x("input", a, (_) => f(+_.target.value)), x("click", l, c), x("input", d, (_) => h(+_.target.value)), x("click", v, p), L(n, m), q();
}
var Yi = /* @__PURE__ */ P("<!> <!>", 1), zi = /* @__PURE__ */ P('<div style="border:1px solid #ccc;margin-bottom:12px;padding:12px;"><div style="display:flex;justify-content:space-between;align-items:center;"><strong> </strong> <button> </button></div> <!> <!></div>');
function Qi(n, r) {
  H(r, !1);
  let t = S(r, "slide", 8), o = S(r, "index", 8), i = S(r, "onUpdate", 8), u = S(r, "onDelete", 8), f = S(r, "onMove", 8), h = S(r, "currentTime", 8, 0), c = /* @__PURE__ */ be(!1);
  function p(T) {
    i()(o(), { ...t(), data: T });
  }
  function m(T, I) {
    i()(o(), { ...t(), start: T, end: I });
  }
  G();
  var e = zi(), a = k(e), l = k(a), s = k(l), d = b(l, 2), v = k(d), _ = b(a, 2);
  {
    var y = (T) => {
      var I = Yi(), C = rt(I);
      Xi(C, {
        get start() {
          return le(t()), M(() => t().start);
        },
        get end() {
          return le(t()), M(() => t().end);
        },
        onChange: m,
        get currentTime() {
          return h();
        }
      });
      var E = b(C, 2);
      Wi(E, {
        get currentTime() {
          return h();
        },
        get type() {
          return le(t()), M(() => t().type);
        },
        get data() {
          return le(t()), M(() => t().data);
        },
        onChange: p
      }), L(T, I);
    };
    at(_, (T) => {
      w(c) || T(y);
    });
  }
  var g = b(_, 2);
  Ka(g, {
    get index() {
      return o();
    },
    get onDelete() {
      return u();
    },
    get onMove() {
      return f();
    }
  }), V(() => {
    vt(s, `${o() + 1}. ${le(t()), M(() => t().type) ?? ""}`), vt(v, w(c) ? "Unfold" : "Fold");
  }), x("click", d, () => z(c, !w(c))), L(n, e), q();
}
var Zi = /* @__PURE__ */ P('<div style="padding:16px;"></div>');
function Ki(n, r) {
  let t = S(r, "slides", 24, () => []), o = S(r, "onUpdate", 8), i = S(r, "currentTime", 8, 0), u = S(r, "onDelete", 8), f = S(r, "onMove", 8);
  var h = Zi();
  Ae(h, 5, t, we, (c, p, m) => {
    Qi(c, {
      get currentTime() {
        return i();
      },
      get slide() {
        return w(p);
      },
      index: m,
      get onUpdate() {
        return o();
      },
      get onDelete() {
        return u();
      },
      get onMove() {
        return f();
      }
    });
  }), L(n, h);
}
var Ji = /* @__PURE__ */ P('<div class="empty-state svelte-o5tkq6">No deck loaded. Click 🆕 New or ➕ Add slide to begin.</div>'), $i = /* @__PURE__ */ P('<div class="bg-form svelte-o5tkq6"><label>Color: <input type="color"/></label> <label>Image URL: <input type="text" placeholder="image.jpg"/></label> <label>Image Opacity: <input type="range" min="0" max="1" step="0.05"/></label></div>'), eo = /* @__PURE__ */ P('<button style="margin: 8px 14px;">🎨 Background</button> <!> <!> <!>', 1), to = /* @__PURE__ */ P("<!> <!>", 1);
function no(n, r) {
  H(r, !1);
  const t = {
    backgroundColor: "#111111",
    backgroundImage: null,
    backgroundImageOpacity: 0.3
  };
  function o() {
    return [
      {
        type: "titleAndSubtitle",
        start: 0,
        end: 5,
        data: [
          { name: "line", type: "text", content: "Title Here" },
          { name: "line", type: "text", content: "Subtitle Here" }
        ]
      }
    ];
  }
  let i = S(r, "slides", 28, () => []), u = S(r, "currentTime", 12, 0), f = S(r, "deckName", 12, ""), h = S(r, "audio", 12, ""), c = S(r, "background", 28, () => ({ ...t })), p = /* @__PURE__ */ be(!1);
  function m() {
    f("taleem-deck-new"), h(""), c({ ...t }), i(o());
  }
  function e(E) {
    i([...i(), { type: E, start: 0, end: 5, data: [] }]);
  }
  function a() {
    let E = 0;
    i(i().map((A) => {
      const O = E, D = E + 5;
      return E = D, { ...A, start: O, end: D };
    }));
  }
  function l(E, A) {
    i(i()[E] = A, !0), i(i());
  }
  function s(E) {
    i().splice(E, 1), i(i());
  }
  function d(E, A) {
    const O = i().splice(E, 1)[0];
    i().splice(A, 0, O), i(i());
  }
  function v(E) {
    u(E);
  }
  function _() {
    const E = {
      version: "deck-v1",
      name: f() || "taleem-deck",
      audio: h(),
      background: c(),
      deck: i()
    }, A = new Blob([JSON.stringify(E, null, 2)], { type: "application/json" }), O = URL.createObjectURL(A), D = document.createElement("a");
    D.href = O, D.download = `${f() || "deck"}.json`, D.click(), URL.revokeObjectURL(O);
  }
  G();
  var y = to(), g = rt(y);
  Wa(g, {
    onNew: m,
    onAddSlide: e,
    onMockTimings: a,
    onDownload: _,
    get deckName() {
      return f();
    },
    set deckName(E) {
      f(E);
    },
    get audio() {
      return h();
    },
    set audio(E) {
      h(E);
    },
    $$legacy: !0
  });
  var T = b(g, 2);
  {
    var I = (E) => {
      var A = Ji();
      L(E, A);
    }, C = (E) => {
      var A = eo(), O = rt(A), D = b(O, 2);
      {
        var Y = (W) => {
          var _e = $i(), ge = k(_e), or = b(k(ge)), $t = b(ge, 2), lr = b(k($t)), ur = b($t, 2), sr = b(k(ur));
          Fe(or, () => c().backgroundColor, (lt) => c(c().backgroundColor = lt, !0)), Fe(lr, () => c().backgroundImage, (lt) => c(c().backgroundImage = lt, !0)), Fe(sr, () => c().backgroundImageOpacity, (lt) => c(c().backgroundImageOpacity = lt, !0)), L(W, _e);
        };
        at(D, (W) => {
          w(p) && W(Y);
        });
      }
      var de = b(D, 2);
      Qa(de, { onTimeUpdate: v });
      var J = b(de, 2);
      Ki(J, {
        get currentTime() {
          return u();
        },
        get slides() {
          return i();
        },
        onUpdate: l,
        onDelete: s,
        onMove: d
      }), x("click", O, () => z(p, !w(p))), L(E, A);
    };
    at(T, (E) => {
      le(i()), M(() => i().length === 0) ? E(I) : E(C, !1);
    });
  }
  L(n, y), q();
}
window.createTaleemEditor = (n) => Ma(no, n);
