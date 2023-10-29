function updateNav() {
    var e = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;
    $vlinks.width() > e ? (breaks.push($vlinks.width()),
    $vlinks.children().last().prependTo($hlinks),
    $btn.hasClass("hidden") && $btn.removeClass("hidden")) : (e > breaks[breaks.length - 1] && ($hlinks.children().first().appendTo($vlinks),
    breaks.pop()),
    breaks.length < 1 && ($btn.addClass("hidden"),
    $hlinks.addClass("hidden"))),
    $btn.attr("count", breaks.length),
    $vlinks.width() > e && updateNav()
}
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        if (pe.isFunction(t))
            return pe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return pe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Te.test(t))
                return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }
    function r(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function o(e) {
        var t = {};
        return pe.each(e.match(Ae) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s),
        e.detachEvent("onload", s))
    }
    function s() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(),
        pe.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(He, "-$1").toLowerCase();
            if (n = e.getAttribute(i),
            "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {}
                pe.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, i) {
        if (De(e)) {
            var r, o, a = pe.expando, s = e.nodeType, l = s ? pe.cache : e, u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t)
                return u || (u = s ? e[a] = ne.pop() || pe.guid++ : a),
                l[u] || (l[u] = s ? {} : {
                    toJSON: pe.noop
                }),
                "object" != typeof t && "function" != typeof t || (i ? l[u] = pe.extend(l[u], t) : l[u].data = pe.extend(l[u].data, t)),
                o = l[u],
                i || (o.data || (o.data = {}),
                o = o.data),
                void 0 !== n && (o[pe.camelCase(t)] = n),
                "string" == typeof t ? (r = o[t],
                null == r && (r = o[pe.camelCase(t)])) : r = o,
                r
        }
    }
    function d(e, t, n) {
        if (De(e)) {
            var i, r, o = e.nodeType, a = o ? pe.cache : e, s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t),
                    t = t in i ? [t] : t.split(" ")),
                    r = t.length;
                    for (; r--; )
                        delete i[t[r]];
                    if (n ? !u(i) : !pe.isEmptyObject(i))
                        return
                }
                (n || (delete a[s].data,
                u(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function f(e, t, n, i) {
        var r, o = 1, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return pe.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (pe.cssNumber[t] ? "" : "px"), c = (pe.cssNumber[t] || "px" !== u && +l) && Me.exec(pe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do
                o = o || ".5",
                c /= o,
                pe.style(e, t, c + u);
            while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    function p(e) {
        var t = We.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        var n, i, r = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
            n = e.childNodes || e; null != (i = n[r]); r++)
                !t || pe.nodeName(i, t) ? o.push(i) : pe.merge(o, h(i, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }
    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
    }
    function g(e) {
        qe.test(e.type) && (e.defaultChecked = e.checked)
    }
    function v(e, t, n, i, r) {
        for (var o, a, s, l, u, c, d, f = e.length, v = p(t), y = [], b = 0; f > b; b++)
            if (a = e[b],
            a || 0 === a)
                if ("object" === pe.type(a))
                    pe.merge(y, a.nodeType ? [a] : a);
                else if (Ye.test(a)) {
                    for (l = l || v.appendChild(t.createElement("div")),
                    u = ($e.exec(a) || ["", ""])[1].toLowerCase(),
                    d = Xe[u] || Xe._default,
                    l.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2],
                    o = d[0]; o--; )
                        l = l.lastChild;
                    if (!de.leadingWhitespace && Re.test(a) && y.push(t.createTextNode(Re.exec(a)[0])),
                    !de.tbody)
                        for (a = "table" !== u || Ue.test(a) ? "<table>" !== d[1] || Ue.test(a) ? 0 : l : l.firstChild,
                        o = a && a.childNodes.length; o--; )
                            pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (pe.merge(y, l.childNodes),
                    l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = v.lastChild
                } else
                    y.push(t.createTextNode(a));
        for (l && v.removeChild(l),
        de.appendChecked || pe.grep(h(y, "input"), g),
        b = 0; a = y[b++]; )
            if (i && pe.inArray(a, i) > -1)
                r && r.push(a);
            else if (s = pe.contains(a.ownerDocument, a),
            l = h(v.appendChild(a), "script"),
            s && m(l),
            n)
                for (o = 0; a = l[o++]; )
                    ze.test(a.type || "") && n.push(a);
        return l = null,
        v
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function x() {
        try {
            return ie.activeElement
        } catch (e) {}
    }
    function w(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (s in t)
                w(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        r === !1)
            r = b;
        else if (!r)
            return e;
        return 1 === o && (a = r,
        r = function(e) {
            return pe().off(e),
            a.apply(this, arguments)
        }
        ,
        r.guid = a.guid || (a.guid = pe.guid++)),
        e.each(function() {
            pe.event.add(this, t, r, i, n)
        })
    }
    function C(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function T(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function k(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function E(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, i, r, o = pe._data(e), a = pe._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (i = 0,
                    r = s[n].length; r > i; i++)
                        pe.event.add(t, n, s[n][i])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }
    function S(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !de.noCloneEvent && t[pe.expando]) {
                r = pe._data(t);
                for (i in r.events)
                    pe.removeEvent(t, i, r.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (T(t).text = e.text,
            k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function N(e, t, n, i) {
        t = oe.apply([], t);
        var r, o, a, s, l, u, c = 0, d = e.length, f = d - 1, p = t[0], m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && it.test(p))
            return e.each(function(r) {
                var o = e.eq(r);
                m && (t[0] = p.call(this, r, o.html())),
                N(o, t, n, i)
            });
        if (d && (u = v(t, e[0].ownerDocument, !1, e, i),
        r = u.firstChild,
        1 === u.childNodes.length && (u = r),
        r || i)) {
            for (s = pe.map(h(u, "script"), T),
            a = s.length; d > c; c++)
                o = u,
                c !== f && (o = pe.clone(o, !0, !0),
                a && pe.merge(s, h(o, "script"))),
                n.call(e[c], o, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                pe.map(s, k),
                c = 0; a > c; c++)
                    o = s[c],
                    ze.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(l, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            u = r = null
        }
        return e
    }
    function L(e, t, n) {
        for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || pe.cleanData(h(i)),
            i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(h(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    function A(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body)
          , i = pe.css(n[0], "display");
        return n.detach(),
        i
    }
    function j(e) {
        var t = ie
          , n = ut[e];
        return n || (n = A(e, t),
        "none" !== n && n || (lt = (lt || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (lt[0].contentWindow || lt[0].contentDocument).document,
        t.write(),
        t.close(),
        n = A(e, t),
        lt.detach()),
        ut[e] = n),
        n
    }
    function _(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function D(e) {
        if (e in kt)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--; )
            if (e = Tt[n] + t,
            e in kt)
                return e
    }
    function I(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++)
            i = e[a],
            i.style && (o[a] = pe._data(i, "olddisplay"),
            n = i.style.display,
            t ? (o[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && Be(i) && (o[a] = pe._data(i, "olddisplay", j(i.nodeName)))) : (r = Be(i),
            (n && "none" !== n || !r) && pe._data(i, "olddisplay", r ? n : pe.css(i, "display"))));
        for (a = 0; s > a; a++)
            i = e[a],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function H(e, t, n) {
        var i = xt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function O(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += pe.css(e, n + Pe[o], !0, r)),
            i ? ("content" === n && (a -= pe.css(e, "padding" + Pe[o], !0, r)),
            "margin" !== n && (a -= pe.css(e, "border" + Pe[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + Pe[o], !0, r),
            "padding" !== n && (a += pe.css(e, "border" + Pe[o] + "Width", !0, r)));
        return a
    }
    function M(e, t, n) {
        var i = !0
          , r = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = ht(e)
          , a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = mt(e, t, o),
            (0 > r || null == r) && (r = e.style[t]),
            dt.test(r))
                return r;
            i = a && (de.boxSizingReliable() || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + O(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }
    function P(e, t, n, i, r) {
        return new P.prototype.init(e,t,n,i,r)
    }
    function B() {
        return e.setTimeout(function() {
            Et = void 0
        }),
        Et = pe.now()
    }
    function F(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Pe[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function q(e, t, n) {
        for (var i, r = (R.tweeners[t] || []).concat(R.tweeners["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function $(e, t, n) {
        var i, r, o, a, s, l, u, c, d = this, f = {}, p = e.style, h = e.nodeType && Be(e), m = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        d.always(function() {
            d.always(function() {
                s.unqueued--,
                pe.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        u = pe.css(e, "display"),
        c = "none" === u ? pe._data(e, "olddisplay") || j(e.nodeName) : u,
        "inline" === c && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        de.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i],
            Nt.exec(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;
                    h = !0
                }
                f[i] = m && m[i] || pe.style(e, i)
            } else
                u = void 0;
        if (pe.isEmptyObject(f))
            "inline" === ("none" === u ? j(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden"in m && (h = m.hidden) : m = pe._data(e, "fxshow", {}),
            o && (m.hidden = !h),
            h ? pe(e).show() : d.done(function() {
                pe(e).hide()
            }),
            d.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in f)
                    pe.style(e, t, f[t])
            });
            for (i in f)
                a = q(h ? m[i] : 0, i, d),
                i in m || (m[i] = a.start,
                h && (a.end = a.start,
                a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function z(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = pe.camelCase(n),
            r = t[i],
            o = e[n],
            pe.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            a = pe.cssHooks[i],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function R(e, t, n) {
        var i, r, o = 0, a = R.prefilters.length, s = pe.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = Et || B(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            1 > o && l ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {
                specialEasing: {},
                easing: pe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Et || B(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (z(c, u.opts.specialEasing); a > o; o++)
            if (i = R.prefilters[o].call(u, e, c, u.opts))
                return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)),
                i;
        return pe.map(c, q, u),
        pe.isFunction(u.opts.start) && u.opts.start.call(e, u),
        pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function W(e) {
        return pe.attr(e, "class") || ""
    }
    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(Ae) || [];
            if (pe.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function Y(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0,
            pe.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                r(u),
                !1)
            }),
            l
        }
        var o = {}
          , a = e === Jt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function U(e, t) {
        var n, i, r = pe.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && pe.extend(!0, e, n),
        e
    }
    function V(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o),
        n[o]) : void 0
    }
    function G(e, t, n, i) {
        var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (a = u[l + " " + o] || u["* " + o],
                    !a)
                        for (r in u)
                            if (s = r.split(" "),
                            s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Q(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }
    function Z(e) {
        if (!pe.contains(e.ownerDocument || ie, e))
            return !0;
        for (; e && 1 === e.nodeType; ) {
            if ("none" === Q(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function J(e, t, n, i) {
        var r;
        if (pe.isArray(t))
            pe.each(t, function(t, r) {
                n || rn.test(e) ? i(e, r) : J(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== pe.type(t))
            i(e, t);
        else
            for (r in t)
                J(e + "[" + r + "]", t[r], n, i)
    }
    function K() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = []
      , ie = e.document
      , re = ne.slice
      , oe = ne.concat
      , ae = ne.push
      , se = ne.indexOf
      , le = {}
      , ue = le.toString
      , ce = le.hasOwnProperty
      , de = {}
      , fe = "1.12.4"
      , pe = function(e, t) {
        return new pe.fn.init(e,t)
    }
      , he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , me = /^-ms-/
      , ge = /-([\da-z])/gi
      , ve = function(e, t) {
        return t.toUpperCase()
    };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : re.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    },
    pe.extend = pe.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || pe.isFunction(a) || (a = {}),
        s === l && (a = this,
        s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r)
                    e = a[i],
                    n = r[i],
                    a !== n && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1,
                    o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {},
                    a[i] = pe.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }
    ,
    pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e)
                    return ce.call(e, t);
            for (t in e)
                ;
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++)
                    ;
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (se)
                    return se.call(t, e, n);
                for (i = t.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; )
                e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i]; )
                    e[r++] = t[i++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++)
                i = !t(e[o], o),
                i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o, a = 0, s = [];
            if (n(e))
                for (r = e.length; r > a; a++)
                    o = t(e[a], a, i),
                    null != o && s.push(o);
            else
                for (a in e)
                    o = t(e[a], a, i),
                    null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t],
            t = e,
            e = r),
            pe.isFunction(e) ? (n = re.call(arguments, 2),
            i = function() {
                return e.apply(t || this, n.concat(re.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || pe.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: de
    }),
    "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, d, p, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== D && _(t),
            t = t || D,
            H)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(r)))
                                return n;
                            if (a.id === r)
                                return n.push(a),
                                n
                        } else if (h && (a = h.getElementById(r)) && B(t, a) && a.id === r)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return J.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return J.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (w.qsa && !X[e + " "] && (!O || !O.test(e))) {
                    if (1 !== m)
                        h = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = F),
                        d = E(e),
                        o = d.length,
                        l = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--; )
                            d[o] = l + " " + f(d[o]);
                        p = d.join(","),
                        h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return J.apply(n, h.querySelectorAll(p)),
                            n
                        } catch (e) {} finally {
                            s === F && t.removeAttribute("id")
                        }
                }
            }
            return N(e.replace(se, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[F] = !0,
            e
        }
        function r(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                C.attrHandle[n[i]] = t
        }
        function a(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)
                i += e[t].value;
            return i
        }
        function p(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = z++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, l, u, c = [$, o];
                if (a) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r) {
                            if (u = t[F] || (t[F] = {}),
                            l = u[t.uniqueID] || (u[t.uniqueID] = {}),
                            (s = l[i]) && s[0] === $ && s[1] === o)
                                return c[2] = s[2];
                            if (l[i] = c,
                            c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                t(e, n[r], i);
            return i
        }
        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)
                (o = e[s]) && (n && !n(o, i, r) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function v(e, t, n, r, o, a) {
            return r && !r[F] && (r = v(r)),
            o && !o[F] && (o = v(o, a)),
            i(function(i, a, s, l) {
                var u, c, d, f = [], p = [], h = a.length, v = i || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? v : g(v, f, e, s, l), b = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, b, s, l),
                r)
                    for (u = g(b, p),
                    r(u, [], s, l),
                    c = u.length; c--; )
                        (d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            c = b.length; c--; )
                                (d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (d = b[c]) && (u = o ? ee(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else
                    b = g(b === a ? b.splice(h, b.length) : b),
                    o ? o(null, a, b, l) : J.apply(a, b)
            })
        }
        function y(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                return e === t
            }, a, !0), u = p(function(e) {
                return ee(t, e) > -1
            }, a, !0), c = [function(e, n, i) {
                var r = !o && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null,
                r
            }
            ]; r > s; s++)
                if (n = C.relative[e[s].type])
                    c = [p(h(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches),
                    n[F]) {
                        for (i = ++s; r > i && !C.relative[e[i].type]; i++)
                            ;
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function b(e, n) {
            var r = n.length > 0
              , o = e.length > 0
              , a = function(i, a, s, l, u) {
                var c, d, f, p = 0, h = "0", m = i && [], v = [], y = L, b = i || o && C.find.TAG("*", u), x = $ += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (L = a === D || a || u); h !== w && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (d = 0,
                        a || c.ownerDocument === D || (_(c),
                        s = !H); f = e[d++]; )
                            if (f(c, a || D, s)) {
                                l.push(c);
                                break
                            }
                        u && ($ = x)
                    }
                    r && ((c = !f && c) && p--,
                    i && m.push(c))
                }
                if (p += h,
                r && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (i) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = Q.call(l));
                        v = g(v)
                    }
                    J.apply(l, v),
                    u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return u && ($ = x,
                L = y),
                m
            };
            return r ? i(a) : a
        }
        var x, w, C, T, k, E, S, N, L, A, j, _, D, I, H, O, M, P, B, F = "sizzle" + 1 * new Date, q = e.document, $ = 0, z = 0, R = n(), W = n(), X = n(), Y = function(e, t) {
            return e === t && (j = !0),
            0
        }, U = 1 << 31, V = {}.hasOwnProperty, G = [], Q = G.pop, Z = G.push, J = G.push, K = G.slice, ee = function(e, t) {
            for (var n = 0, i = e.length; i > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), fe = new RegExp("^" + ie + "$"), pe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, Ce = function() {
            _()
        };
        try {
            J.apply(G = K.call(q.childNodes), q.childNodes),
            G[q.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: G.length ? function(e, t) {
                    Z.apply(e, K.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        _ = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i,
            I = D.documentElement,
            H = !k(D),
            (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
            w.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = r(function(e) {
                return e.appendChild(D.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = ge.test(D.getElementsByClassName),
            w.getById = r(function(e) {
                return I.appendChild(e).id = F,
                !D.getElementsByName || !D.getElementsByName(F).length
            }),
            w.getById ? (C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete C.find.ID,
            C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            C.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            C.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
            }
            ,
            M = [],
            O = [],
            (w.qsa = ge.test(D.querySelectorAll)) && (r(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + F + "-]").length || O.push("~="),
                e.querySelectorAll(":checked").length || O.push(":checked"),
                e.querySelectorAll("a#" + F + "+*").length || O.push(".#.+[+~]")
            }),
            r(function(e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                O.push(",.*:")
            })),
            (w.matchesSelector = ge.test(P = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = P.call(e, "div"),
                P.call(e, "[s!='']:x"),
                M.push("!=", oe)
            }),
            O = O.length && new RegExp(O.join("|")),
            M = M.length && new RegExp(M.join("|")),
            t = ge.test(I.compareDocumentPosition),
            B = t || ge.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Y = t ? function(e, t) {
                if (e === t)
                    return j = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === q && B(q, e) ? -1 : t === D || t.ownerDocument === q && B(q, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return j = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], l = [t];
                if (!r || !o)
                    return e === D ? -1 : t === D ? 1 : r ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (r === o)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; s[i] === l[i]; )
                    i++;
                return i ? a(s[i], l[i]) : s[i] === q ? -1 : l[i] === q ? 1 : 0
            }
            ,
            D) : D
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && _(e),
            n = n.replace(ce, "='$1']"),
            w.matchesSelector && H && !X[n + " "] && (!M || !M.test(n)) && (!O || !O.test(n)))
                try {
                    var i = P.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return t(n, D, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && _(e),
            B(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && _(e);
            var n = C.attrHandle[t.toLowerCase()]
              , i = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== i ? i : w.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (j = !w.detectDuplicates,
            A = !w.sortStable && e.slice(0),
            e.sort(Y),
            j) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return A = null,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += T(t);
            return n
        }
        ,
        C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, we),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (f = t; f = f[m]; )
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (f = g,
                                d = f[F] || (f[F] = {}),
                                c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                u = c[e] || [],
                                p = u[0] === $ && u[1],
                                b = p && u[2],
                                f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [$, p, b];
                                        break
                                    }
                            } else if (y && (f = t,
                            d = f[F] || (f[F] = {}),
                            c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                            u = c[e] || [],
                            p = u[0] === $ && u[1],
                            b = p),
                            b === !1)
                                for (; (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[F] || (f[F] = {}),
                                c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                c[e] = [$, b]),
                                f !== t)); )
                                    ;
                            return b -= r,
                            b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                    C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--; )
                            i = ee(e, r[a]),
                            e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , r = S(e.replace(se, "$1"));
                    return r[F] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xe, we),
                    function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(xe, we).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        C.pseudos.nth = C.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            C.pseudos[x] = s(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos,
        C.setFilters = new d,
        E = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = W[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = C.preFilter; s; ) {
                i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                l.push(o = [])),
                i = !1,
                (r = ue.exec(s)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(se, " ")
                }),
                s = s.slice(i.length));
                for (a in C.filter)
                    !(r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }
        ,
        S = t.compile = function(e, t) {
            var n, i = [], r = [], o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[F] ? i.push(o) : r.push(o);
                o = X(e, b(r, i)),
                o.selector = e
            }
            return o
        }
        ,
        N = t.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e, d = !i && E(e = u.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (o = d[0] = d[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && H && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(xe, we), t) || [])[0],
                    !t)
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                !C.relative[s = a.type]); )
                    if ((l = C.find[s]) && (i = l(a.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        e = i.length && f(o),
                        !e)
                            return J.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || S(e, d))(i, t, !H, n, !t || ye.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = F.split("").sort(Y).join("") === F,
        w.detectDuplicates = !!j,
        _(),
        w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    pe.find = ye,
    pe.expr = ye.selectors,
    pe.expr[":"] = pe.expr.pseudos,
    pe.uniqueSort = pe.unique = ye.uniqueSort,
    pe.text = ye.getText,
    pe.isXMLDoc = ye.isXML,
    pe.contains = ye.contains;
    var be = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && pe(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , we = pe.expr.match.needsContext
      , Ce = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , Te = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    pe.fn.extend({
        find: function(e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)
                return this.pushStack(pe(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (pe.contains(i[t], this))
                            return !0
                }));
            for (t = 0; r > t; t++)
                pe.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? pe.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var ke, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Se = pe.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || ke,
        "string" == typeof e) {
            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ee.exec(e),
            !i || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t,
                pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)),
                Ce.test(i[1]) && pe.isPlainObject(t))
                    for (i in t)
                        pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if (r = ie.getElementById(i[2]),
            r && r.parentNode) {
                if (r.id !== i[2])
                    return ke.find(e);
                this.length = 1,
                this[0] = r
            }
            return this.context = ie,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        pe.makeArray(e, this))
    }
    ;
    Se.prototype = pe.fn,
    ke = pe(ie);
    var Ne = /^(?:parents|prev(?:Until|All))/
      , Le = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (pe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var r = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = pe.filter(i, r)),
            this.length > 1 && (Le[e] || (r = pe.uniqueSort(r)),
            Ne.test(e) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var Ae = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, n, i, r, a = [], s = [], l = -1, u = function() {
            for (r = e.once,
            i = t = !0; s.length; l = -1)
                for (n = s.shift(); ++l < a.length; )
                    a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            r && (a = n ? [] : "")
        }, c = {
            add: function() {
                return a && (n && !t && (l = a.length - 1,
                s.push(n)),
                function t(n) {
                    pe.each(n, function(n, i) {
                        pe.isFunction(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return pe.each(arguments, function(e, t) {
                    for (var n; (n = pe.inArray(t, a, n)) > -1; )
                        a.splice(n, 1),
                        l >= n && l--
                }),
                this
            },
            has: function(e) {
                return e ? pe.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return r = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return r = !0,
                n || c.disable(),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, n) {
                return r || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                s.push(n),
                t || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    pe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return pe.Deferred(function(n) {
                        pe.each(t, function(t, o) {
                            var a = pe.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? pe.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            pe.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                i[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = a.fireWith
            }),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = re.call(arguments), a = o.length, s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0, l = 1 === s ? e : pe.Deferred(), u = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? re.call(arguments) : r,
                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                i = new Array(a); a > r; r++)
                    o[r] && pe.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --s;
            return s || l.resolveWith(i, o),
            l.promise()
        }
    });
    var je;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e),
        this
    }
    ,
    pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0,
            e !== !0 && --pe.readyWait > 0 || (je.resolveWith(ie, [pe]),
            pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"),
            pe(ie).off("ready"))))
        }
    }),
    pe.ready.promise = function(t) {
        if (!je)
            if (je = pe.Deferred(),
            "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll)
                e.setTimeout(pe.ready);
            else if (ie.addEventListener)
                ie.addEventListener("DOMContentLoaded", s),
                e.addEventListener("load", s);
            else {
                ie.attachEvent("onreadystatechange", s),
                e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (e) {}
                n && n.doScroll && !function t() {
                    if (!pe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        a(),
                        pe.ready()
                    }
                }()
            }
        return je.promise(t)
    }
    ,
    pe.ready.promise();
    var _e;
    for (_e in pe(de))
        break;
    de.ownFirst = "0" === _e,
    de.inlineBlockNeedsLayout = !1,
    pe(function() {
        var e, t, n, i;
        n = ie.getElementsByTagName("body")[0],
        n && n.style && (t = ie.createElement("div"),
        i = ie.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var e = ie.createElement("div");
        de.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            de.deleteExpando = !1
        }
        e = null
    }();
    var De = function(e) {
        var t = pe.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
    }
      , Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , He = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando],
            !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    pe.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = pe.data(o),
                1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (i = a[n].name,
                        0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)),
                        l(o, i, r[i])));
                    pe._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                pe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                pe.data(this, e, t)
            }) : o ? l(o, e, pe.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                pe.removeData(this, e)
            })
        }
    }),
    pe.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue",
            i = pe._data(e, t),
            n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = pe._queueHooks(e, t)
              , a = function() {
                pe.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    pe._removeData(e, t + "queue"),
                    pe._removeData(e, n)
                })
            })
        }
    }),
    pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = pe.Deferred(), o = this, a = this.length, s = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                n = pe._data(o[a], e + "queueHooks"),
                n && n.empty && (i++,
                n.empty.add(s));
            return s(),
            r.promise(t)
        }
    }),
    function() {
        var e;
        de.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, i;
            return n = ie.getElementsByTagName("body")[0],
            n && n.style ? (t = ie.createElement("div"),
            i = ie.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t),
            "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(ie.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(i),
            e) : void 0
        }
    }();
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Me = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$","i")
      , Pe = ["Top", "Right", "Bottom", "Left"]
      , Be = function(e, t) {
        return e = t || e,
        "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
    }
      , Fe = function(e, t, n, i, r, o, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === pe.type(n)) {
            r = !0;
            for (s in n)
                Fe(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0,
        pe.isFunction(i) || (a = !0),
        u && (a ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(pe(e), n)
        }
        )),
        t))
            for (; l > s; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , qe = /^(?:checkbox|radio)$/i
      , $e = /<([\w:-]+)/
      , ze = /^$|\/(?:java|ecma)script/i
      , Re = /^\s+/
      , We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = ie.createElement("div")
          , t = ie.createDocumentFragment()
          , n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        de.leadingWhitespace = 3 === e.firstChild.nodeType,
        de.tbody = !e.getElementsByTagName("tbody").length,
        de.htmlSerialize = !!e.getElementsByTagName("link").length,
        de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        t.appendChild(n),
        de.appendChecked = n.checked,
        e.innerHTML = "<textarea>x</textarea>",
        de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        t.appendChild(e),
        n = ie.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        de.noCloneEvent = !!e.addEventListener,
        e[pe.expando] = 1,
        de.attributes = !e.getAttribute(pe.expando)
    }();
    var Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Xe.optgroup = Xe.option,
    Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead,
    Xe.th = Xe.td;
    var Ye = /<|&#?\w+;/
      , Ue = /<tbody/i;
    !function() {
        var t, n, i = ie.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (de[t] = n in e) || (i.setAttribute(n, "t"),
            de[t] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ve = /^(?:input|select|textarea)$/i
      , Ge = /^key/
      , Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ze = /^(?:focusinfocus|focusoutblur)$/
      , Je = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = pe._data(e);
            if (g) {
                for (n.handler && (l = n,
                n = l.handler,
                r = l.selector),
                n.guid || (n.guid = pe.guid++),
                (a = g.events) || (a = g.events = {}),
                (c = g.handle) || (c = g.handle = function(e) {
                    return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = e),
                t = (t || "").match(Ae) || [""],
                s = t.length; s--; )
                    o = Je.exec(t[s]) || [],
                    p = m = o[1],
                    h = (o[2] || "").split(".").sort(),
                    p && (u = pe.event.special[p] || {},
                    p = (r ? u.delegateType : u.bindType) || p,
                    u = pe.event.special[p] || {},
                    d = pe.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && pe.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, l),
                    (f = a[p]) || (f = a[p] = [],
                    f.delegateCount = 0,
                    u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))),
                    u.add && (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = pe.hasData(e) && pe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(Ae) || [""],
                u = t.length; u--; )
                    if (s = Je.exec(t[u]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = pe.event.special[p] || {},
                        p = (i ? d.delegateType : d.bindType) || p,
                        f = c[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = f.length; o--; )
                            a = f[o],
                            !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || pe.removeEvent(e, p, g.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            pe.event.remove(e, p + t[u], n, i, !0);
                pe.isEmptyObject(c) && (delete g.handle,
                pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, d, f = [i || ie], p = ce.call(t, "type") ? t.type : t, h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || ie,
            3 !== i.nodeType && 8 !== i.nodeType && !Ze.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            a = p.indexOf(":") < 0 && "on" + p,
            t = t[pe.expando] ? t : new pe.Event(p,"object" == typeof t && t),
            t.isTrigger = r ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : pe.makeArray(n, [t]),
            u = pe.event.special[p] || {},
            r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !pe.isWindow(i)) {
                    for (l = u.delegateType || p,
                    Ze.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        c = s;
                    c === (i.ownerDocument || ie) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? l : u.bindType || p,
                    o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"),
                    o && o.apply(s, n),
                    o = a && s[a],
                    o && o.apply && De(s) && (t.result = o.apply(s, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = p,
                !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && De(i) && a && i[p] && !pe.isWindow(i)) {
                    c = i[a],
                    c && (i[a] = null),
                    pe.event.triggered = p;
                    try {
                        i[p]()
                    } catch (e) {}
                    pe.event.triggered = void 0,
                    c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, i, r, o, a = [], s = re.call(arguments), l = (pe._data(this, "events") || {})[e.type] || [], u = pe.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = pe.event.handlers.call(this, e, l),
                t = 0; (r = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s),
                        void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [],
                        n = 0; s > n; n++)
                            o = t[n],
                            r = o.selector + " ",
                            void 0 === i[r] && (i[r] = o.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length),
                            i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[pe.expando])
                return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Qe.test(r) ? this.mouseHooks : Ge.test(r) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new pe.Event(o),
            t = i.length; t--; )
                n = i[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || ie),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie,
                r = i.documentElement,
                n = i.body,
                e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    pe.removeEvent = ie.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null),
        e.detachEvent(i, n))
    }
    ,
    pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e,
        t && pe.extend(this, t),
        this.timeStamp = e && e.timeStamp || pe.now(),
        void (this[pe.expando] = !0)) : new pe.Event(e,t)
    }
    ,
    pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || pe.contains(i, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    de.submit || (pe.event.special.submit = {
        setup: function() {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }),
                pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble,
            this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
        }
    }),
    de.change || (pe.event.special.change = {
        setup: function() {
            return Ve.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }),
            pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1),
                pe.event.simulate("change", this, e)
            })),
            !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ve.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }),
                pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return pe.event.remove(this, "._change"),
            !Ve.test(this.nodeName)
        }
    }),
    de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = pe._data(i, t);
                r || i.addEventListener(e, n, !0),
                pe._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = pe._data(i, t) - 1;
                r ? pe._data(i, t, r) : (i.removeEventListener(e, n, !0),
                pe._removeData(i, t))
            }
        }
    }),
    pe.fn.extend({
        on: function(e, t, n, i) {
            return w(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return w(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t,
            t = void 0),
            n === !1 && (n = b),
            this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? pe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ke = / jQuery\d+="(?:null|\d+)"/g
      , et = new RegExp("<(?:" + We + ")[\\s/>]","i")
      , tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , nt = /<script|<style|<link/i
      , it = /checked\s*(?:[^=]|=\s*.checked.)/i
      , rt = /^true\/(.*)/
      , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , at = p(ie)
      , st = at.appendChild(ie.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s, l = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML,
            st.removeChild(o = st.firstChild)),
            !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (i = h(o),
                s = h(e),
                a = 0; null != (r = s[a]); ++a)
                    i[a] && S(r, i[a]);
            if (t)
                if (n)
                    for (s = s || h(e),
                    i = i || h(o),
                    a = 0; null != (r = s[a]); a++)
                        E(r, i[a]);
                else
                    E(e, o);
            return i = h(o, "script"),
            i.length > 0 && m(i, !l && h(e, "script")),
            i = s = r = null,
            o
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = pe.expando, l = pe.cache, u = de.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || De(n)) && (r = n[s],
                o = r && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            c[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r],
                    u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s),
                    ne.push(r))
                }
        }
    }),
    pe.fn.extend({
        domManip: N,
        detach: function(e) {
            return L(this, e, !0)
        },
        remove: function(e) {
            return L(this, e)
        },
        text: function(e) {
            return Fe(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Fe(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Ke, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !Re.test(e)) && !Xe[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; i > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (pe.cleanData(h(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return N(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = pe(e), a = o.length - 1; a >= i; i++)
                n = i === a ? this : this.clone(!0),
                pe(o[i])[t](n),
                ae.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var lt, ut = {
        HTML: "block",
        BODY: "block"
    }, ct = /^margin/, dt = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$","i"), ft = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)
            e.style[o] = a[o];
        return r
    }, pt = ie.documentElement;
    !function() {
        function t() {
            var t, c, d = ie.documentElement;
            d.appendChild(l),
            u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = r = s = !1,
            i = a = !0,
            e.getComputedStyle && (c = e.getComputedStyle(u),
            n = "1%" !== (c || {}).top,
            s = "2px" === (c || {}).marginLeft,
            r = "4px" === (c || {
                width: "4px"
            }).width,
            u.style.marginRight = "50%",
            i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight,
            t = u.appendChild(ie.createElement("div")),
            t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            t.style.marginRight = t.style.width = "0",
            u.style.width = "1px",
            a = !parseFloat((e.getComputedStyle(t) || {}).marginRight),
            u.removeChild(t)),
            u.style.display = "none",
            o = 0 === u.getClientRects().length,
            o && (u.style.display = "",
            u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            u.childNodes[0].style.borderCollapse = "separate",
            t = u.getElementsByTagName("td"),
            t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            o = 0 === t[0].offsetHeight,
            o && (t[0].style.display = "",
            t[1].style.display = "none",
            o = 0 === t[0].offsetHeight)),
            d.removeChild(l)
        }
        var n, i, r, o, a, s, l = ie.createElement("div"), u = ie.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5",
        de.opacity = "0.5" === u.style.opacity,
        de.cssFloat = !!u.style.cssFloat,
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        de.clearCloneStyle = "content-box" === u.style.backgroundClip,
        l = ie.createElement("div"),
        l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        u.innerHTML = "",
        l.appendChild(u),
        de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
        pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(),
                o
            },
            boxSizingReliable: function() {
                return null == n && t(),
                r
            },
            pixelMarginRight: function() {
                return null == n && t(),
                i
            },
            pixelPosition: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                return null == n && t(),
                a
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                s
            }
        }))
    }();
    var ht, mt, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
    ,
    mt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ht(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)),
        n && !de.pixelMarginRight() && dt.test(a) && ct.test(t) && (i = s.width,
        r = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = r,
        s.maxWidth = o),
        void 0 === a ? a : a + ""
    }
    ) : pt.currentStyle && (ht = function(e) {
        return e.currentStyle
    }
    ,
    mt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ht(e),
        a = n ? n[t] : void 0,
        null == a && s && s[t] && (a = s[t]),
        dt.test(a) && !gt.test(t) && (i = s.left,
        r = e.runtimeStyle,
        o = r && r.left,
        o && (r.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = i,
        o && (r.left = o)),
        void 0 === a ? a : a + "" || "auto"
    }
    );
    var vt = /alpha\([^)]*\)/i
      , yt = /opacity\s*=\s*([^)]*)/i
      , bt = /^(none|table(?!-c[ea]).+)/
      , xt = new RegExp("^(" + Oe + ")(.*)$","i")
      , wt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ct = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Tt = ["Webkit", "O", "Moz", "ms"]
      , kt = ie.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = pe.camelCase(t), l = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = D(s) || s),
                a = pe.cssHooks[t] || pe.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n,
                "string" === o && (r = Me.exec(n)) && r[1] && (n = f(e, t, r),
                o = "number"),
                null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")),
                de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(e, n, i)))))
                    try {
                        l[t] = n
                    } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = D(s) || s),
            a = pe.cssHooks[t] || pe.cssHooks[s],
            a && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = mt(e, t, i)),
            "normal" === o && t in Ct && (o = Ct[t]),
            "" === n || n ? (r = parseFloat(o),
            n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }),
    pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? bt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, wt, function() {
                    return M(e, t, i)
                }) : M(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && ht(e);
                return H(e, n, i ? O(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === pe.trim(o.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = vt.test(o) ? o.replace(vt, r) : o + " " + r)
        }
    }),
    pe.cssHooks.marginRight = _(de.reliableMarginRight, function(e, t) {
        return t ? ft(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"]) : void 0
    }),
    pe.cssHooks.marginLeft = _(de.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(mt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[e + Pe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        ct.test(e) || (pe.cssHooks[e + t].set = H)
    }),
    pe.fn.extend({
        css: function(e, t) {
            return Fe(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (pe.isArray(t)) {
                    for (i = ht(e),
                    r = t.length; r > a; a++)
                        o[t[a]] = pe.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Be(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }),
    pe.Tween = P,
    P.prototype = {
        constructor: P,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || pe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : P.propHooks._default.set(this),
            this
        }
    },
    P.prototype.init.prototype = P.prototype,
    P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    pe.fx = P.prototype.init,
    pe.fx.step = {};
    var Et, St, Nt = /^(?:toggle|show|hide)$/, Lt = /queueHooks$/;
    pe.Animation = pe.extend(R, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return f(n.elem, e, Me.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(Ae);
            for (var n, i = 0, r = e.length; r > i; i++)
                n = e[i],
                R.tweeners[n] = R.tweeners[n] || [],
                R.tweeners[n].unshift(t)
        },
        prefilters: [$],
        prefilter: function(e, t) {
            t ? R.prefilters.unshift(e) : R.prefilters.push(e)
        }
    }),
    pe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default,
        null != i.queue && i.queue !== !0 || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            pe.isFunction(i.old) && i.old.call(this),
            i.queue && pe.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    pe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Be).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = pe.isEmptyObject(e)
              , o = pe.speed(t, n, i)
              , a = function() {
                var t = R(this, pe.extend({}, e), o);
                (r || pe._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = pe.timers
                  , a = pe._data(this);
                if (r)
                    a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && Lt.test(r) && i(a[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || pe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = pe._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = pe.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                pe.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    pe.each(["toggle", "show", "hide"], function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
        }
    }),
    pe.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        pe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    pe.timers = [],
    pe.fx.tick = function() {
        var e, t = pe.timers, n = 0;
        for (Et = pe.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(),
        Et = void 0
    }
    ,
    pe.fx.timer = function(e) {
        pe.timers.push(e),
        e() ? pe.fx.start() : pe.timers.pop()
    }
    ,
    pe.fx.interval = 13,
    pe.fx.start = function() {
        St || (St = e.setInterval(pe.fx.tick, pe.fx.interval))
    }
    ,
    pe.fx.stop = function() {
        e.clearInterval(St),
        St = null
    }
    ,
    pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    pe.fn.delay = function(t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e, t = ie.createElement("input"), n = ie.createElement("div"), i = ie.createElement("select"), r = i.appendChild(ie.createElement("option"));
        n = ie.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px",
        de.getSetAttribute = "t" !== n.className,
        de.style = /top/.test(e.getAttribute("style")),
        de.hrefNormalized = "/a" === e.getAttribute("href"),
        de.checkOn = !!t.value,
        de.optSelected = r.selected,
        de.enctype = !!ie.createElement("form").enctype,
        i.disabled = !0,
        de.optDisabled = !r.disabled,
        t = ie.createElement("input"),
        t.setAttribute("value", ""),
        de.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        de.radioValue = "t" === t.value
    }();
    var At = /\r/g
      , jt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = pe.isFunction(e),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e,
                null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function(e) {
                    return null == e ? "" : e + ""
                })),
                t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
            "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)) : void 0
        }
    }),
    pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(jt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l],
                        (n.selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = pe.makeArray(t), a = r.length; a--; )
                        if (i = r[a],
                        pe.inArray(pe.valHooks.option.get(i), o) > -1)
                            try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0
            }
        },
        de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var _t, Dt, It = pe.expr.attrHandle, Ht = /^(?:checked|selected)$/i, Ot = de.getSetAttribute, Mt = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return Fe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }),
    pe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(),
                r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Dt : _t)),
                void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t),
                null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(Ae);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    i = pe.propFix[n] || n,
                    pe.expr.match.bool.test(n) ? Mt && Ot || !Ht.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""),
                    e.removeAttribute(Ot ? n : i)
        }
    }),
    Dt = {
        set: function(e, t, n) {
            return t === !1 ? pe.removeAttr(e, n) : Mt && Ot || !Ht.test(n) ? e.setAttribute(!Ot && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = It[t] || pe.find.attr;
        Mt && Ot || !Ht.test(t) ? It[t] = function(e, t, i) {
            var r, o;
            return i || (o = It[t],
            It[t] = r,
            r = null != n(e, t, i) ? t.toLowerCase() : null,
            It[t] = o),
            r
        }
        : It[t] = function(e, t, n) {
            return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Mt && Ot || (pe.attrHooks.value = {
        set: function(e, t, n) {
            return pe.nodeName(e, "input") ? void (e.defaultValue = t) : _t && _t.set(e, t, n)
        }
    }),
    Ot || (_t = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    It.id = It.name = It.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }
    ,
    pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: _t.set
    },
    pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            _t.set(e, "" !== t && t, n)
        }
    },
    pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    })),
    de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Pt = /^(?:input|select|textarea|button|object)$/i
      , Bt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Fe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (e) {}
            })
        }
    }),
    pe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t,
                r = pe.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }),
    de.enctype || (pe.propFix.enctype = "encoding");
    var Ft = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, W(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++]; )
                    if (r = W(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(Ft, " ")) {
                        for (a = 0; o = t[a++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = pe.trim(i),
                        r !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, W(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++]; )
                    if (r = W(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(Ft, " ")) {
                        for (a = 0; o = t[a++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        s = pe.trim(i),
                        r !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0,
                    r = pe(this),
                    o = e.match(Ae) || []; t = o[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = W(this),
                    t && pe._data(this, "__className__", t),
                    pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + W(n) + " ").replace(Ft, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    }),
    pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var qt = e.location
      , $t = pe.now()
      , zt = /\?/
      , Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, i = null, r = pe.trim(t + "");
        return r && !pe.trim(r.replace(Rt, function(e, t, r, o) {
            return n && t && (i = 0),
            0 === i ? e : (n = r || t,
            i += !o - !r,
            "")
        })) ? Function("return " + r)() : pe.error("Invalid JSON: " + t)
    }
    ,
    pe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (i = new e.DOMParser,
            n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t),
        n
    }
    ;
    var Wt = /#.*$/
      , Xt = /([?&])_=[^&]*/
      , Yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Vt = /^(?:GET|HEAD)$/
      , Gt = /^\/\//
      , Qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Zt = {}
      , Jt = {}
      , Kt = "*/".concat("*")
      , en = qt.href
      , tn = Qt.exec(en.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: en,
            type: "GET",
            isLocal: Ut.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? U(U(e, pe.ajaxSettings), t) : U(pe.ajaxSettings, e)
        },
        ajaxPrefilter: X(Zt),
        ajaxTransport: X(Jt),
        ajax: function(t, n) {
            function i(t, n, i, r) {
                var o, d, y, b, w, T = n;
                2 !== x && (x = 2,
                l && e.clearTimeout(l),
                c = void 0,
                s = r || "",
                C.readyState = t > 0 ? 4 : 0,
                o = t >= 200 && 300 > t || 304 === t,
                i && (b = V(f, C, i)),
                b = G(f, b, C, o),
                o ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"),
                w && (pe.lastModified[a] = w),
                w = C.getResponseHeader("etag"),
                w && (pe.etag[a] = w)),
                204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                d = b.data,
                y = b.error,
                o = !y)) : (y = T,
                !t && T || (T = "error",
                0 > t && (t = 0))),
                C.status = t,
                C.statusText = (n || T) + "",
                o ? m.resolveWith(p, [d, T, C]) : m.rejectWith(p, [C, T, y]),
                C.statusCode(v),
                v = void 0,
                u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? d : y]),
                g.fireWith(p, [C, T]),
                u && (h.trigger("ajaxComplete", [C, f]),
                --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, a, s, l, u, c, d, f = pe.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event, m = pe.Deferred(), g = pe.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!d)
                            for (d = {}; t = Yt.exec(s); )
                                d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            C.always(e[C.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t),
                    i(0, t),
                    this
                }
            };
            if (m.promise(C).complete = g.add,
            C.success = C.done,
            C.error = C.fail,
            f.url = ((t || f.url || en) + "").replace(Wt, "").replace(Gt, tn[1] + "//"),
            f.type = n.method || n.type || f.method || f.type,
            f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(Ae) || [""],
            null == f.crossDomain && (r = Qt.exec(f.url.toLowerCase()),
            f.crossDomain = !(!r || r[1] === tn[1] && r[2] === tn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)),
            Y(Zt, f, n, C),
            2 === x)
                return C;
            u = pe.event && f.global,
            u && 0 === pe.active++ && pe.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Vt.test(f.type),
            a = f.url,
            f.hasContent || (f.data && (a = f.url += (zt.test(a) ? "&" : "?") + f.data,
            delete f.data),
            f.cache === !1 && (f.url = Xt.test(a) ? a.replace(Xt, "$1_=" + $t++) : a + (zt.test(a) ? "&" : "?") + "_=" + $t++)),
            f.ifModified && (pe.lastModified[a] && C.setRequestHeader("If-Modified-Since", pe.lastModified[a]),
            pe.etag[a] && C.setRequestHeader("If-None-Match", pe.etag[a])),
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType),
            C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers)
                C.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, C, f) === !1 || 2 === x))
                return C.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                C[o](f[o]);
            if (c = Y(Jt, f, n, C)) {
                if (C.readyState = 1,
                u && h.trigger("ajaxSend", [C, f]),
                2 === x)
                    return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    x = 1,
                    c.send(y, i)
                } catch (e) {
                    if (!(2 > x))
                        throw e;
                    i(-1, e)
                }
            } else
                i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }),
    pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, i, r) {
            return pe.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }),
    pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Z(e)
    }
    ,
    pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    }
    ;
    var nn = /%20/g
      , rn = /\[\]$/
      , on = /\r?\n/g
      , an = /^(?:submit|button|image|reset|file)$/i
      , sn = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = pe.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional),
        pe.isArray(e) || e.jquery && !pe.isPlainObject(e))
            pe.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                J(n, e[n], t, r);
        return i.join("&").replace(nn, "+")
    }
    ,
    pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && sn.test(this.nodeName) && !an.test(e) && (this.checked || !qe.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }),
    pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || ee()
    }
    : K;
    var ln = 0
      , un = {}
      , cn = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in un)
            un[e](void 0, !0)
    }),
    de.cors = !!cn && "withCredentials"in cn,
    cn = de.ajax = !!cn,
    cn && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(i, r) {
                    var o, a = t.xhr(), s = ++ln;
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i)
                        void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                    a.send(t.hasContent && t.data || null),
                    n = function(e, i) {
                        var o, l, u;
                        if (n && (i || 4 === a.readyState))
                            if (delete un[s],
                            n = void 0,
                            a.onreadystatechange = pe.noop,
                            i)
                                4 !== a.readyState && a.abort();
                            else {
                                u = {},
                                o = a.status,
                                "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (e) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        u && r(o, l, u, a.getAllResponseHeaders())
                    }
                    ,
                    t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = un[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e),
                e
            }
        }
    }),
    pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || pe("head")[0] || ie.documentElement;
            return {
                send: function(i, r) {
                    t = ie.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || r(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var dn = []
      , fn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = dn.pop() || pe.expando + "_" + $t++;
            return this[e] = !0,
            e
        }
    }),
    pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (fn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(fn, "$1" + r) : t.jsonp !== !1 && (t.url += (zt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
        t.converters["script json"] = function() {
            return a || pe.error(r + " was not called"),
            a[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[r],
        e[r] = function() {
            a = arguments
        }
        ,
        i.always(function() {
            void 0 === o ? pe(e).removeProp(r) : e[r] = o,
            t[r] && (t.jsonpCallback = n.jsonpCallback,
            dn.push(r)),
            a && pe.isFunction(o) && o(a[0]),
            a = o = void 0
        }),
        "script") : void 0
    }),
    pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || ie;
        var i = Ce.exec(e)
          , r = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, r),
        r && r.length && pe(r).remove(),
        pe.merge([], i.childNodes))
    }
    ;
    var pn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && pn)
            return pn.apply(this, arguments);
        var i, r, o, a = this, s = e.indexOf(" ");
        return s > -1 && (i = pe.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        pe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        a.length > 0 && pe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    pe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, c = pe.css(e, "position"), d = pe(e), f = {};
            "static" === c && (e.style.position = "relative"),
            s = d.offset(),
            o = pe.css(e, "top"),
            l = pe.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, l]) > -1,
            u ? (i = d.position(),
            a = i.top,
            r = i.left) : (a = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + r),
            "using"in t ? t.using.call(e, f) : d.css(f)
        }
    },
    pe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
            var t, n, i = {
                top: 0,
                left: 0
            }, r = this[0], o = r && r.ownerDocument;
            return o ? (t = o.documentElement,
            pe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()),
            n = te(o),
            {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                pe.nodeName(e[0], "html") || (n = e.offset()),
                n.top += pe.css(e[0], "borderTopWidth", !0),
                n.left += pe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - pe.css(i, "marginTop", !0),
                    left: t.left - n.left - pe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position"); )
                    e = e.offsetParent;
                return e || pt
            })
        }
    }),
    pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(i) {
            return Fe(this, function(e, i, r) {
                var o = te(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void (o ? o.scrollTo(n ? pe(o).scrollLeft() : r, n ? r : pe(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }),
    pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = _(de.pixelPosition, function(e, n) {
            return n ? (n = mt(e, t),
            dt.test(n) ? pe(e).position()[t] + "px" : n) : void 0
        })
    }),
    pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Fe(this, function(t, n, i) {
                    var r;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? pe.css(t, n, a) : pe.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }),
    pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    pe.fn.size = function() {
        return this.length
    }
    ,
    pe.fn.andSelf = pe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var hn = e.jQuery
      , mn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = mn),
        t && e.jQuery === pe && (e.jQuery = hn),
        pe
    }
    ,
    t || (e.jQuery = e.$ = pe),
    pe
}),
function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0]
              , r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}"
              , o = document.createElement("div");
            o.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>",
            i.appendChild(o.childNodes[1])
        }
        return t && e.extend(n, t),
        this.each(function() {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var i = ".fitvidsignore";
            n.ignore && (i = i + ", " + n.ignore);
            var r = e(this).find(t.join(","));
            r = r.not("object object"),
            r = r.not(i),
            r.each(function(t) {
                var n = e(this);
                if (!(n.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length)) {
                    n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9),
                    n.attr("width", 16));
                    var r = "object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height()
                      , o = isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10)
                      , a = r / o;
                    if (!n.attr("id")) {
                        var s = "fitvid" + t;
                        n.attr("id", s)
                    }
                    n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"),
                    n.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
var $nav = $("#site-nav")
  , $btn = $("#site-nav button")
  , $vlinks = $("#site-nav .visible-links")
  , $hlinks = $("#site-nav .hidden-links")
  , breaks = [];
$(window).resize(function() {
    updateNav()
}),
$btn.on("click", function() {
    $hlinks.toggleClass("hidden"),
    $(this).toggleClass("close")
}),
updateNav(),
function(e) {
    var t, n, i, r, o, a, s, l = "Close", u = "BeforeClose", c = "AfterClose", d = "BeforeAppend", f = "MarkupParse", p = "Open", h = "Change", m = "mfp", g = "." + m, v = "mfp-ready", y = "mfp-removing", b = "mfp-prevent-close", x = function() {}, w = !!window.jQuery, C = e(window), T = function(e, n) {
        t.ev.on(m + e + g, n)
    }, k = function(t, n, i, r) {
        var o = document.createElement("div");
        return o.className = "mfp-" + t,
        i && (o.innerHTML = i),
        r ? n && n.appendChild(o) : (o = e(o),
        n && o.appendTo(n)),
        o
    }, E = function(n, i) {
        t.ev.triggerHandler(m + n, i),
        t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1),
        t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
    }, S = function(n) {
        return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
        s = n),
        t.currTemplate.closeBtn
    }, N = function() {
        e.magnificPopup.instance || (t = new x,
        t.init(),
        e.magnificPopup.instance = t)
    }, L = function() {
        var e = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition"in e)
                return !0;
        return !1
    };
    x.prototype = {
        constructor: x,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = n.indexOf("MSIE 7.") !== -1,
            t.isIE8 = n.indexOf("MSIE 8.") !== -1,
            t.isLowIE = t.isIE7 || t.isIE8,
            t.isAndroid = /android/gi.test(n),
            t.isIOS = /iphone|ipad|ipod/gi.test(n),
            t.supportsTransition = L(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            r = e(document),
            t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var o;
            if (n.isObj === !1) {
                t.items = n.items.toArray(),
                t.index = 0;
                var s, l = n.items;
                for (o = 0; o < l.length; o++)
                    if (s = l[o],
                    s.parsed && (s = s.el[0]),
                    s === n.el[0]) {
                        t.index = o;
                        break
                    }
            } else
                t.items = e.isArray(n.items) ? n.items : [n.items],
                t.index = n.index || 0;
            if (t.isOpen)
                return void t.updateItemHTML();
            t.types = [],
            a = "",
            n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = r,
            n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
            t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {},
            t.st = e.extend(!0, {}, e.magnificPopup.defaults, n),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1,
            t.st.closeOnBgClick = !1,
            t.st.showCloseBtn = !1,
            t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = k("bg").on("click" + g, function() {
                t.close()
            }),
            t.wrap = k("wrap").attr("tabindex", -1).on("click" + g, function(e) {
                t._checkIfClose(e.target) && t.close()
            }),
            t.container = k("container", t.wrap)),
            t.contentContainer = k("content"),
            t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var u = e.magnificPopup.modules;
            for (o = 0; o < u.length; o++) {
                var c = u[o];
                c = c.charAt(0).toUpperCase() + c.slice(1),
                t["init" + c].call(t)
            }
            E("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? (T(f, function(e, t, n, i) {
                n.close_replaceWith = S(i.type)
            }),
            a += " mfp-close-btn-in") : t.wrap.append(S())),
            t.st.alignTop && (a += " mfp-align-top"),
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: C.scrollTop(),
                position: "absolute"
            }),
            (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: r.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && r.on("keyup" + g, function(e) {
                27 === e.keyCode && t.close()
            }),
            C.on("resize" + g, function() {
                t.updateSize()
            }),
            t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
            a && t.wrap.addClass(a);
            var d = t.wH = C.height()
              , h = {};
            if (t.fixedContentPos && t._hasScrollBar(d)) {
                var m = t._getScrollbarSize();
                m && (h.marginRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
            var y = t.st.mainClass;
            return t.isIE7 && (y += " mfp-ie7"),
            y && t._addClassToMFP(y),
            t.updateItemHTML(),
            E("BuildControls"),
            e("html").css(h),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                t.content ? (t._addClassToMFP(v),
                t._setFocus()) : t.bgOverlay.addClass(v),
                r.on("focusin" + g, t._onFocusIn)
            }, 16),
            t.isOpen = !0,
            t.updateSize(d),
            E(p),
            n
        },
        close: function() {
            t.isOpen && (E(u),
            t.isOpen = !1,
            t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y),
            setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            E(l);
            var n = y + " " + v + " ";
            if (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (n += t.st.mainClass + " "),
            t._removeClassFromMFP(n),
            t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "",
                e("html").css(i)
            }
            r.off("keyup" + g + " focusin" + g),
            t.ev.off(g),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null,
            t.content = null,
            t.currTemplate = null,
            t.prevHeight = 0,
            E(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth
                  , i = window.innerHeight * n;
                t.wrap.css("height", i),
                t.wH = i
            } else
                t.wH = e || C.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            E("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (E("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
            t.currItem = n,
            !t.currTemplate[i]) {
                var r = !!t.st[i] && t.st[i].markup;
                E("FirstMarkupParse", r),
                r ? t.currTemplate[i] = e(r) : t.currTemplate[i] = !0
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i),
            n.preloaded = !0,
            E(h, n),
            o = n.type,
            t.container.prepend(t.contentContainer),
            E("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "",
            E(d),
            t.container.addClass("mfp-" + n + "-holder"),
            t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, r = t.items[n];
            if (r.tagName ? r = {
                el: e(r)
            } : (i = r.type,
            r = {
                data: r,
                src: r.src
            }),
            r.el) {
                for (var o = t.types, a = 0; a < o.length; a++)
                    if (r.el.hasClass("mfp-" + o[a])) {
                        i = o[a];
                        break
                    }
                r.src = r.el.attr("data-mfp-src"),
                r.src || (r.src = r.el.attr("href"))
            }
            return r.type = i || t.st.type || "inline",
            r.index = n,
            r.parsed = !0,
            t.items[n] = r,
            E("ElementParse", r),
            t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this,
                t._openClick(i, e, n)
            };
            n || (n = {});
            var r = "click.magnificPopup";
            n.mainEl = e,
            n.items ? (n.isObj = !0,
            e.off(r).on(r, i)) : (n.isObj = !1,
            n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e,
            e.off(r).on(r, i)))
        },
        _openClick: function(n, i, r) {
            var o = void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick;
            if (o || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t))
                            return !0
                    } else if (C.width() < a)
                        return !0;
                n.type && (n.preventDefault(),
                t.isOpen && n.stopPropagation()),
                r.el = e(n.mfpEl),
                r.delegate && (r.items = i.find(r.delegate)),
                t.open(r)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n),
                i || "loading" !== e || (i = t.st.tLoading);
                var r = {
                    status: e,
                    text: i
                };
                E("UpdateStatus", r),
                e = r.status,
                i = r.text,
                t.preloader.html(i),
                t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }),
                t.container.addClass("mfp-s-" + e),
                n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(b)) {
                var i = t.st.closeOnContentClick
                  , r = t.st.closeOnBgClick;
                if (i && r)
                    return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0])
                    return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i)
                        return !0
                } else if (r && e.contains(document, n))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || C.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target))
                return t._setFocus(),
                !1
        },
        _parseMarkup: function(t, n, i) {
            var r;
            i.data && (n = e.extend(i.data, n)),
            E(f, [t, n, i]),
            e.each(n, function(e, n) {
                if (void 0 === n || n === !1)
                    return !0;
                if (r = e.split("_"),
                r.length > 1) {
                    var i = t.find(g + "-" + r[0]);
                    if (i.length > 0) {
                        var o = r[1];
                        "replaceWith" === o ? i[0] !== n[0] && i.replaceWith(n) : "img" === o ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(r[1], n)
                    }
                } else
                    t.find(g + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm",
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    },
    e.magnificPopup = {
        instance: null,
        proto: x.prototype,
        modules: [],
        open: function(t, n) {
            return N(),
            t = t ? e.extend(!0, {}, t) : {},
            t.isObj = !0,
            t.index = n || 0,
            this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    e.fn.magnificPopup = function(n) {
        N();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var r, o = w ? i.data("magnificPopup") : i[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
                o.items ? r = o.items[a] : (r = i,
                o.delegate && (r = r.find(o.delegate)),
                r = r.eq(a)),
                t._openClick({
                    mfpEl: r
                }, i, o)
            } else
                t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            n = e.extend(!0, {}, n),
            w ? i.data("magnificPopup", n) : i[0].magnificPopup = n,
            t.addGroup(i, n);
        return i
    }
    ;
    var A, j, _, D = "inline", I = function() {
        _ && (j.after(_.addClass(A)).detach(),
        _ = null)
    };
    e.magnificPopup.registerModule(D, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(D),
                T(l + "." + D, function() {
                    I()
                })
            },
            getInline: function(n, i) {
                if (I(),
                n.src) {
                    var r = t.st.inline
                      , o = e(n.src);
                    if (o.length) {
                        var a = o[0].parentNode;
                        a && a.tagName && (j || (A = r.hiddenClass,
                        j = k(A),
                        A = "mfp-" + A),
                        _ = o.after(j).detach().removeClass(A)),
                        t.updateStatus("ready")
                    } else
                        t.updateStatus("error", r.tNotFound),
                        o = e("<div>");
                    return n.inlineElement = o,
                    o
                }
                return t.updateStatus("ready"),
                t._parseMarkup(i, {}, n),
                i
            }
        }
    });
    var H, O = "ajax", M = function() {
        H && i.removeClass(H)
    }, P = function() {
        M(),
        t.req && t.req.abort()
    };
    e.magnificPopup.registerModule(O, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(O),
                H = t.st.ajax.cursor,
                T(l + "." + O, P),
                T("BeforeChange." + O, P)
            },
            getAjax: function(n) {
                H && i.addClass(H),
                t.updateStatus("loading");
                var r = e.extend({
                    url: n.src,
                    success: function(i, r, o) {
                        var a = {
                            data: i,
                            xhr: o
                        };
                        E("ParseAjax", a),
                        t.appendContent(e(a.data), O),
                        n.finished = !0,
                        M(),
                        t._setFocus(),
                        setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16),
                        t.updateStatus("ready"),
                        E("AjaxContentAdded")
                    },
                    error: function() {
                        M(),
                        n.finished = n.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(r),
                ""
            }
        }
    });
    var B, F = function(n) {
        if (n.data && void 0 !== n.data.title)
            return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i))
                return i.call(t, n);
            if (n.el)
                return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image
                  , n = ".image";
                t.types.push("image"),
                T(p + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }),
                T(l + n, function() {
                    e.cursor && i.removeClass(e.cursor),
                    C.off("resize" + g)
                }),
                T("Resize" + n, t.resizeImage),
                t.isLowIE && T("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                B && clearInterval(B),
                e.isCheckingImgSize = !1,
                E("ImageHasSize", e),
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0
                  , i = e.img[0]
                  , r = function(o) {
                    B && clearInterval(B),
                    B = setInterval(function() {
                        return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(B),
                        n++,
                        void (3 === n ? r(10) : 40 === n ? r(50) : 100 === n && r(500)))
                    }, o)
                };
                r(1)
            },
            getImage: function(n, i) {
                var r = 0
                  , o = function() {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"),
                    n === t.currItem && (t._onImageHasSize(n),
                    t.updateStatus("ready")),
                    n.hasSize = !0,
                    n.loaded = !0,
                    E("ImageLoadComplete")) : (r++,
                    r < 200 ? setTimeout(o, 100) : a()))
                }
                  , a = function() {
                    n && (n.img.off(".mfploader"),
                    n === t.currItem && (t._onImageHasSize(n),
                    t.updateStatus("error", s.tError.replace("%url%", n.src))),
                    n.hasSize = !0,
                    n.loaded = !0,
                    n.loadError = !0)
                }
                  , s = t.st.image
                  , l = i.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img",
                    n.img = e(u).on("load.mfploader", o).on("error.mfploader", a),
                    u.src = n.src,
                    l.is("img") && (n.img = n.img.clone()),
                    u = n.img[0],
                    u.naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: F(n),
                    img_replaceWith: n.img
                }, n),
                t.resizeImage(),
                n.hasSize ? (B && clearInterval(B),
                n.loadError ? (i.addClass("mfp-loading"),
                t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"),
                t.updateStatus("ready")),
                i) : (t.updateStatus("loading"),
                n.loading = !0,
                n.hasSize || (n.imgHidden = !0,
                i.addClass("mfp-loading"),
                t.findImageSize(n)),
                i)
            }
        }
    });
    var q, $ = function() {
        return void 0 === q && (q = void 0 !== document.createElement("p").style.MozTransform),
        q
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom, i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var r, o, a = n.duration, s = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , i = "all " + n.duration / 1e3 + "s " + n.easing
                          , r = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , o = "transition";
                        return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i,
                        t.css(r),
                        t
                    }, c = function() {
                        t.content.css("visibility", "visible")
                    };
                    T("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(r),
                            t.content.css("visibility", "hidden"),
                            e = t._getItemToZoom(),
                            !e)
                                return void c();
                            o = s(e),
                            o.css(t._getOffset()),
                            t.wrap.append(o),
                            r = setTimeout(function() {
                                o.css(t._getOffset(!0)),
                                r = setTimeout(function() {
                                    c(),
                                    setTimeout(function() {
                                        o.remove(),
                                        e = o = null,
                                        E("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }),
                    T(u + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(r),
                            t.st.removalDelay = a,
                            !e) {
                                if (e = t._getItemToZoom(),
                                !e)
                                    return;
                                o = s(e)
                            }
                            o.css(t._getOffset(!0)),
                            t.wrap.append(o),
                            t.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                o.css(t._getOffset())
                            }, 16)
                        }
                    }),
                    T(l + i, function() {
                        t._allowZoom() && (c(),
                        o && o.remove(),
                        e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var r = i.offset()
                  , o = parseInt(i.css("padding-top"), 10)
                  , a = parseInt(i.css("padding-bottom"), 10);
                r.top -= e(window).scrollTop() - o;
                var s = {
                    width: i.width(),
                    height: (w ? i.innerHeight() : i[0].offsetHeight) - a - o
                };
                return $() ? s["-moz-transform"] = s.transform = "translate(" + r.left + "px," + r.top + "px)" : (s.left = r.left,
                s.top = r.top),
                s
            }
        }
    });
    var z = "iframe"
      , R = "//about:blank"
      , W = function(e) {
        if (t.currTemplate[z]) {
            var n = t.currTemplate[z].find("iframe");
            n.length && (e || (n[0].src = R),
            t.isIE8 && n.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(z),
                T("BeforeChange", function(e, t, n) {
                    t !== n && (t === z ? W() : n === z && W(!0))
                }),
                T(l + "." + z, function() {
                    W()
                })
            },
            getIframe: function(n, i) {
                var r = n.src
                  , o = t.st.iframe;
                e.each(o.patterns, function() {
                    if (r.indexOf(this.index) > -1)
                        return this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)),
                        r = this.src.replace("%id%", r),
                        !1
                });
                var a = {};
                return o.srcAction && (a[o.srcAction] = r),
                t._parseMarkup(i, a, n),
                t.updateStatus("ready"),
                i
            }
        }
    });
    var X = function(e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : e < 0 ? n + e : e
    }
      , Y = function(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery
                  , i = ".mfp-gallery"
                  , o = Boolean(e.fn.mfpFastClick);
                return t.direction = !0,
                !(!n || !n.enabled) && (a += " mfp-gallery",
                T(p + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        if (t.items.length > 1)
                            return t.next(),
                            !1
                    }),
                    r.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }),
                T("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }),
                T(f + i, function(e, i, r, o) {
                    var a = t.items.length;
                    r.counter = a > 1 ? Y(n.tCounter, o.index, a) : ""
                }),
                T("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup
                          , r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(b)
                          , a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(b)
                          , s = o ? "mfpFastClick" : "click";
                        r[s](function() {
                            t.prev()
                        }),
                        a[s](function() {
                            t.next()
                        }),
                        t.isIE7 && (k("b", r[0], !1, !0),
                        k("a", r[0], !1, !0),
                        k("b", a[0], !1, !0),
                        k("a", a[0], !1, !0)),
                        t.container.append(r.add(a))
                    }
                }),
                T(h + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null
                    }, 16)
                }),
                void T(l + i, function() {
                    r.off(i),
                    t.wrap.off("click" + i),
                    t.arrowLeft && o && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                    t.arrowRight = t.arrowLeft = null
                }))
            },
            next: function() {
                t.direction = !0,
                t.index = X(t.index + 1),
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1,
                t.index = X(t.index - 1),
                t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload, i = Math.min(n[0], t.items.length), r = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? r : i); e++)
                    t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : r); e++)
                    t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = X(n),
                !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)),
                    E("LazyLoad", i),
                    "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0,
                        i.loadError = !0,
                        E("LazyLoadError", i)
                    }).attr("src", i.src)),
                    i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina
                      , n = e.ratio;
                    n = isNaN(n) ? n() : n,
                    n > 1 && (T("ImageHasSize." + U, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }),
                    T("ElementParse." + U, function(t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),
    function() {
        var t = 1e3
          , n = "ontouchstart"in window
          , i = function() {
            C.off("touchmove" + o + " touchend" + o)
        }
          , r = "mfpFastClick"
          , o = "." + r;
        e.fn.mfpFastClick = function(r) {
            return e(this).each(function() {
                var a, s = e(this);
                if (n) {
                    var l, u, c, d, f, p;
                    s.on("touchstart" + o, function(e) {
                        d = !1,
                        p = 1,
                        f = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0],
                        u = f.clientX,
                        c = f.clientY,
                        C.on("touchmove" + o, function(e) {
                            f = e.originalEvent ? e.originalEvent.touches : e.touches,
                            p = f.length,
                            f = f[0],
                            (Math.abs(f.clientX - u) > 10 || Math.abs(f.clientY - c) > 10) && (d = !0,
                            i())
                        }).on("touchend" + o, function(e) {
                            i(),
                            d || p > 1 || (a = !0,
                            e.preventDefault(),
                            clearTimeout(l),
                            l = setTimeout(function() {
                                a = !1
                            }, t),
                            r())
                        })
                    })
                }
                s.on("click" + o, function() {
                    a || r()
                })
            })
        }
        ,
        e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + o + " click" + o),
            n && C.off("touchmove" + o + " touchend" + o)
        }
    }(),
    N()
}(window.jQuery || window.Zepto),
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
    var t = "1.7.2"
      , n = {}
      , i = {
        exclude: [],
        excludeWithin: [],
        offset: 0,
        direction: "top",
        delegateSelector: null,
        scrollElement: null,
        scrollTarget: null,
        beforeScroll: function() {},
        afterScroll: function() {},
        easing: "swing",
        speed: 400,
        autoCoefficient: 2,
        preventDefault: !0
    }
      , r = function(t) {
        var n = []
          , i = !1
          , r = t.dir && "left" === t.dir ? "scrollLeft" : "scrollTop";
        return this.each(function() {
            var t = e(this);
            if (this !== document && this !== window)
                return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void (t[r]() > 0 ? n.push(this) : (t[r](1),
                i = t[r]() > 0,
                i && n.push(this),
                t[r](0))) : (n.push(document.scrollingElement),
                !1)
        }),
        n.length || this.each(function() {
            this === document.documentElement && "smooth" === e(this).css("scrollBehavior") && (n = [this]),
            n.length || "BODY" !== this.nodeName || (n = [this])
        }),
        "first" === t.el && n.length > 1 && (n = [n[0]]),
        n
    };
    e.fn.extend({
        scrollable: function(e) {
            var t = r.call(this, {
                dir: e
            });
            return this.pushStack(t)
        },
        firstScrollable: function(e) {
            var t = r.call(this, {
                el: "first",
                dir: e
            });
            return this.pushStack(t)
        },
        smoothScroll: function(t, n) {
            if (t = t || {},
            "options" === t)
                return n ? this.each(function() {
                    var t = e(this)
                      , i = e.extend(t.data("ssOpts") || {}, n);
                    e(this).data("ssOpts", i)
                }) : this.first().data("ssOpts");
            var i = e.extend({}, e.fn.smoothScroll.defaults, t)
              , r = function(t) {
                var n = function(e) {
                    return e.replace(/(:|\.|\/)/g, "\\$1")
                }
                  , r = this
                  , o = e(this)
                  , a = e.extend({}, i, o.data("ssOpts") || {})
                  , s = i.exclude
                  , l = a.excludeWithin
                  , u = 0
                  , c = 0
                  , d = !0
                  , f = {}
                  , p = e.smoothScroll.filterPath(location.pathname)
                  , h = e.smoothScroll.filterPath(r.pathname)
                  , m = location.hostname === r.hostname || !r.hostname
                  , g = a.scrollTarget || h === p
                  , v = n(r.hash);
                if (v && !e(v).length && (d = !1),
                a.scrollTarget || m && g && v) {
                    for (; d && u < s.length; )
                        o.is(n(s[u++])) && (d = !1);
                    for (; d && c < l.length; )
                        o.closest(l[c++]).length && (d = !1)
                } else
                    d = !1;
                d && (a.preventDefault && t.preventDefault(),
                e.extend(f, a, {
                    scrollTarget: a.scrollTarget || v,
                    link: r
                }),
                e.smoothScroll(f))
            };
            return null !== t.delegateSelector ? this.undelegate(t.delegateSelector, "click.smoothscroll").delegate(t.delegateSelector, "click.smoothscroll", r) : this.unbind("click.smoothscroll").bind("click.smoothscroll", r),
            this
        }
    }),
    e.smoothScroll = function(t, i) {
        if ("options" === t && "object" == typeof i)
            return e.extend(n, i);
        var r, o, a, s, l, u = 0, c = "offset", d = "scrollTop", f = {}, p = {};
        "number" == typeof t ? (r = e.extend({
            link: null
        }, e.fn.smoothScroll.defaults, n),
        a = t) : (r = e.extend({
            link: null
        }, e.fn.smoothScroll.defaults, t || {}, n),
        r.scrollElement && (c = "position",
        "static" === r.scrollElement.css("position") && r.scrollElement.css("position", "relative"))),
        d = "left" === r.direction ? "scrollLeft" : d,
        r.scrollElement ? (o = r.scrollElement,
        /^(?:HTML|BODY)$/.test(o[0].nodeName) || (u = o[d]())) : o = e("html, body").firstScrollable(r.direction),
        r.beforeScroll.call(o, r),
        a = "number" == typeof t ? t : i || e(r.scrollTarget)[c]() && e(r.scrollTarget)[c]()[r.direction] || 0,
        f[d] = a + u + r.offset,
        s = r.speed,
        "auto" === s && (l = Math.abs(f[d] - o[d]()),
        s = l / r.autoCoefficient),
        p = {
            duration: s,
            easing: r.easing,
            complete: function() {
                r.afterScroll.call(r.link, r)
            }
        },
        r.step && (p.step = r.step),
        o.length ? o.stop().animate(f, p) : r.afterScroll.call(r.link, r)
    }
    ,
    e.smoothScroll.version = t,
    e.smoothScroll.filterPath = function(e) {
        return e = e || "",
        e.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }
    ,
    e.fn.smoothScroll.defaults = i
}),
!function(e, t) {
    function n() {
        k = A = E = S = N = L = M
    }
    function i(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n])
    }
    function r(e) {
        return parseFloat(e) || 0
    }
    function o() {
        _ = {
            top: t.pageYOffset,
            left: t.pageXOffset
        }
    }
    function a() {
        return t.pageXOffset != _.left ? (o(),
        void E()) : void (t.pageYOffset != _.top && (o(),
        l()))
    }
    function s(e) {
        setTimeout(function() {
            t.pageYOffset != _.top && (_.top = t.pageYOffset,
            l())
        }, 0)
    }
    function l() {
        for (var e = I.length - 1; e >= 0; e--)
            u(I[e])
    }
    function u(e) {
        if (e.inited) {
            var t = _.top <= e.limit.start ? 0 : _.top >= e.limit.end ? 2 : 1;
            e.mode != t && m(e, t)
        }
    }
    function c() {
        for (var e = I.length - 1; e >= 0; e--)
            if (I[e].inited) {
                var t = Math.abs(b(I[e].clone) - I[e].docOffsetTop)
                  , n = Math.abs(I[e].parent.node.offsetHeight - I[e].parent.height);
                if (t >= 2 || n >= 2)
                    return !1
            }
        return !0
    }
    function d(e) {
        isNaN(parseFloat(e.computed.top)) || e.isCell || "none" == e.computed.display || (e.inited = !0,
        e.clone || g(e),
        "absolute" != e.parent.computed.position && "relative" != e.parent.computed.position && (e.parent.node.style.position = "relative"),
        u(e),
        e.parent.height = e.parent.node.offsetHeight,
        e.docOffsetTop = b(e.clone))
    }
    function f(e) {
        var t = !0;
        e.clone && v(e),
        i(e.node.style, e.css);
        for (var n = I.length - 1; n >= 0; n--)
            if (I[n].node !== e.node && I[n].parent.node === e.parent.node) {
                t = !1;
                break
            }
        t && (e.parent.node.style.position = e.parent.css.position),
        e.mode = -1
    }
    function p() {
        for (var e = I.length - 1; e >= 0; e--)
            d(I[e])
    }
    function h() {
        for (var e = I.length - 1; e >= 0; e--)
            f(I[e])
    }
    function m(e, t) {
        var n = e.node.style;
        switch (t) {
        case 0:
            n.position = "absolute",
            n.left = e.offset.left + "px",
            n.right = e.offset.right + "px",
            n.top = e.offset.top + "px",
            n.bottom = "auto",
            n.width = "auto",
            n.marginLeft = 0,
            n.marginRight = 0,
            n.marginTop = 0;
            break;
        case 1:
            n.position = "fixed",
            n.left = e.box.left + "px",
            n.right = e.box.right + "px",
            n.top = e.css.top,
            n.bottom = "auto",
            n.width = "auto",
            n.marginLeft = 0,
            n.marginRight = 0,
            n.marginTop = 0;
            break;
        case 2:
            n.position = "absolute",
            n.left = e.offset.left + "px",
            n.right = e.offset.right + "px",
            n.top = "auto",
            n.bottom = 0,
            n.width = "auto",
            n.marginLeft = 0,
            n.marginRight = 0
        }
        e.mode = t
    }
    function g(e) {
        e.clone = document.createElement("div");
        var t = e.node.nextSibling || e.node
          , n = e.clone.style;
        n.height = e.height + "px",
        n.width = e.width + "px",
        n.marginTop = e.computed.marginTop,
        n.marginBottom = e.computed.marginBottom,
        n.marginLeft = e.computed.marginLeft,
        n.marginRight = e.computed.marginRight,
        n.padding = n.border = n.borderSpacing = 0,
        n.fontSize = "1em",
        n.position = "static",
        n.cssFloat = e.computed.cssFloat,
        e.node.parentNode.insertBefore(e.clone, t)
    }
    function v(e) {
        e.clone.parentNode.removeChild(e.clone),
        e.clone = void 0
    }
    function y(e) {
        var t = getComputedStyle(e)
          , n = e.parentNode
          , i = getComputedStyle(n)
          , o = e.style.position;
        e.style.position = "relative";
        var a = {
            top: t.top,
            marginTop: t.marginTop,
            marginBottom: t.marginBottom,
            marginLeft: t.marginLeft,
            marginRight: t.marginRight,
            cssFloat: t.cssFloat,
            display: t.display
        }
          , s = {
            top: r(t.top),
            marginBottom: r(t.marginBottom),
            paddingLeft: r(t.paddingLeft),
            paddingRight: r(t.paddingRight),
            borderLeftWidth: r(t.borderLeftWidth),
            borderRightWidth: r(t.borderRightWidth)
        };
        e.style.position = o;
        var l = {
            position: e.style.position,
            top: e.style.top,
            bottom: e.style.bottom,
            left: e.style.left,
            right: e.style.right,
            width: e.style.width,
            marginTop: e.style.marginTop,
            marginLeft: e.style.marginLeft,
            marginRight: e.style.marginRight
        }
          , u = x(e)
          , c = x(n)
          , d = {
            node: n,
            css: {
                position: n.style.position
            },
            computed: {
                position: i.position
            },
            numeric: {
                borderLeftWidth: r(i.borderLeftWidth),
                borderRightWidth: r(i.borderRightWidth),
                borderTopWidth: r(i.borderTopWidth),
                borderBottomWidth: r(i.borderBottomWidth)
            }
        }
          , f = {
            node: e,
            box: {
                left: u.win.left,
                right: O.clientWidth - u.win.right
            },
            offset: {
                top: u.win.top - c.win.top - d.numeric.borderTopWidth,
                left: u.win.left - c.win.left - d.numeric.borderLeftWidth,
                right: -u.win.right + c.win.right - d.numeric.borderRightWidth
            },
            css: l,
            isCell: "table-cell" == t.display,
            computed: a,
            numeric: s,
            width: u.win.right - u.win.left,
            height: u.win.bottom - u.win.top,
            mode: -1,
            inited: !1,
            parent: d,
            limit: {
                start: u.doc.top - s.top,
                end: c.doc.top + n.offsetHeight - d.numeric.borderBottomWidth - e.offsetHeight - s.top - s.marginBottom
            }
        };
        return f
    }
    function b(e) {
        for (var t = 0; e; )
            t += e.offsetTop,
            e = e.offsetParent;
        return t
    }
    function x(e) {
        var n = e.getBoundingClientRect();
        return {
            doc: {
                top: n.top + t.pageYOffset,
                left: n.left + t.pageXOffset
            },
            win: n
        }
    }
    function w() {
        D = setInterval(function() {
            !c() && E()
        }, 500)
    }
    function C() {
        clearInterval(D)
    }
    function T() {
        H && (document[P] ? C() : w())
    }
    function k() {
        H || (o(),
        p(),
        t.addEventListener("scroll", a),
        t.addEventListener("wheel", s),
        t.addEventListener("resize", E),
        t.addEventListener("orientationchange", E),
        e.addEventListener(B, T),
        w(),
        H = !0)
    }
    function E() {
        if (H) {
            h();
            for (var e = I.length - 1; e >= 0; e--)
                I[e] = y(I[e].node);
            p()
        }
    }
    function S() {
        t.removeEventListener("scroll", a),
        t.removeEventListener("wheel", s),
        t.removeEventListener("resize", E),
        t.removeEventListener("orientationchange", E),
        e.removeEventListener(B, T),
        C(),
        H = !1
    }
    function N() {
        S(),
        h()
    }
    function L() {
        for (N(); I.length; )
            I.pop()
    }
    function A(e) {
        for (var t = I.length - 1; t >= 0; t--)
            if (I[t].node === e)
                return;
        var n = y(e);
        I.push(n),
        H ? d(n) : k()
    }
    function j(e) {
        for (var t = I.length - 1; t >= 0; t--)
            I[t].node === e && (f(I[t]),
            I.splice(t, 1))
    }
    var _, D, I = [], H = !1, O = e.documentElement, M = function() {}, P = "hidden", B = "visibilitychange";
    void 0 !== e.webkitHidden && (P = "webkitHidden",
    B = "webkitvisibilitychange"),
    t.getComputedStyle || n();
    for (var F = ["", "-webkit-", "-moz-", "-ms-"], q = document.createElement("div"), $ = F.length - 1; $ >= 0; $--) {
        try {
            q.style.position = F[$] + "sticky"
        } catch (e) {}
        "" != q.style.position && n()
    }
    o(),
    t.Stickyfill = {
        stickies: I,
        add: A,
        remove: j,
        init: k,
        rebuild: E,
        pause: S,
        stop: N,
        kill: L
    }
}(document, window),
window.jQuery && !function(e) {
    e.fn.Stickyfill = function(e) {
        return this.each(function() {
            Stickyfill.add(this)
        }),
        this
    }
}(window.jQuery),
$(document).ready(function() {
    $("#main").fitVids(),
    $(".sticky").Stickyfill();
    var e = function() {
        var e = 0 === $(".author__urls-wrapper button").length ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
        e ? (Stickyfill.rebuild(),
        Stickyfill.init(),
        $(".author__urls").show()) : (Stickyfill.stop(),
        $(".author__urls").hide())
    };
    e(),
    $(window).resize(function() {
        e()
    }),
    $(".author__urls-wrapper button").on("click", function() {
        $(".author__urls").fadeToggle("fast", function() {}),
        $(".author__urls-wrapper button").toggleClass("open")
    }),
    $("a").smoothScroll({
        offset: -20
    }),
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup"),
    $(".image-popup").magnificPopup({
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
        },
        removalDelay: 500,
        mainClass: "mfp-zoom-in",
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
            }
        },
        closeOnContentClick: !0,
        midClick: !0
    })
});
