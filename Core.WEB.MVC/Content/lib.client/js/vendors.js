/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
; window.Modernizr = function (a, b, c) {
    function D(a) {
        j.cssText = a
    }
    function E(a, b) {
        return D(n.join(a + ";") + (b || ""))
    }
    function F(a, b) {
        return typeof a === b
    }
    function G(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
            , e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "),
            I(e, b, c))
    }
    function K() {
        e.input = function (c) {
            for (var d = 0, e = c.length; d < e; d++)
                u[c[d]] = c[d] in k;
            return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
                u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
            e.inputtypes = function (a) {
                for (var d = 0, e, f, h, i = a.length; d < i; d++)
                    k.setAttribute("type", f = a[d]),
                        e = k.type !== "text",
                        e && (k.value = l,
                            k.style.cssText = "position:absolute;visibility:hidden;",
                            /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k),
                                h = b.defaultView,
                                e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0,
                                g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)),
                        t[a[d]] = !!e;
                return t
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
        svg: "http://www.w3.org/2000/svg"
    }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function (a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                    j.id = e ? e[d] : h + (d + 1),
                    l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
            l.id = h,
            (m ? l : n).innerHTML += f,
            n.appendChild(l),
            m || (n.style.background = "",
                n.style.overflow = "hidden",
                k = g.style.overflow,
                g.style.overflow = "hidden",
                g.appendChild(n)),
            i = c(l, a),
            m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
                g.style.overflow = k),
            !!i
    }, z = function (b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c)
            return c(b) && c(b).matches || !1;
        var d;
        return y("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
        }),
            d
    }, A = function () {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"),
                d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")),
                e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""),
                    f = F(e[d], "function"),
                    F(e[d], "undefined") || (e[d] = c),
                    e.removeAttribute(d))),
                e = null,
                f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    }(), B = {}.hasOwnProperty, C;
    !F(B, "undefined") && !F(B.call, "undefined") ? C = function (a, b) {
        return B.call(a, b)
    }
        : C = function (a, b) {
            return b in a && F(a.constructor.prototype[b], "undefined")
        }
        ,
        Function.prototype.bind || (Function.prototype.bind = function (b) {
            var c = this;
            if (typeof c != "function")
                throw new TypeError;
            var d = w.call(arguments, 1)
                , e = function () {
                    if (this instanceof e) {
                        var a = function () { };
                        a.prototype = c.prototype;
                        var f = new a
                            , g = c.apply(f, d.concat(w.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(w.call(arguments)))
                };
            return e
        }
        ),
        s.flexbox = function () {
            return J("flexWrap")
        }
        ,
        s.canvas = function () {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }
        ,
        s.canvastext = function () {
            return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function")
        }
        ,
        s.webgl = function () {
            return !!a.WebGLRenderingContext
        }
        ,
        s.touch = function () {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
                c = a.offsetTop === 9
            }),
                c
        }
        ,
        s.geolocation = function () {
            return "geolocation" in navigator
        }
        ,
        s.postmessage = function () {
            return !!a.postMessage
        }
        ,
        s.websqldatabase = function () {
            return !!a.openDatabase
        }
        ,
        s.indexedDB = function () {
            return !!J("indexedDB", a)
        }
        ,
        s.hashchange = function () {
            return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }
        ,
        s.history = function () {
            return !!a.history && !!history.pushState
        }
        ,
        s.draganddrop = function () {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }
        ,
        s.websockets = function () {
            return "WebSocket" in a || "MozWebSocket" in a
        }
        ,
        s.rgba = function () {
            return D("background-color:rgba(150,255,150,.5)"),
                G(j.backgroundColor, "rgba")
        }
        ,
        s.hsla = function () {
            return D("background-color:hsla(120,40%,100%,.5)"),
                G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
        }
        ,
        s.multiplebgs = function () {
            return D("background:url(https://),url(https://),red url(https://)"),
                /(url\s*\(.*?){3}/.test(j.background)
        }
        ,
        s.backgroundsize = function () {
            return J("backgroundSize")
        }
        ,
        s.borderimage = function () {
            return J("borderImage")
        }
        ,
        s.borderradius = function () {
            return J("borderRadius")
        }
        ,
        s.boxshadow = function () {
            return J("boxShadow")
        }
        ,
        s.textshadow = function () {
            return b.createElement("div").style.textShadow === ""
        }
        ,
        s.opacity = function () {
            return E("opacity:.55"),
                /^0.55$/.test(j.opacity)
        }
        ,
        s.cssanimations = function () {
            return J("animationName")
        }
        ,
        s.csscolumns = function () {
            return J("columnCount")
        }
        ,
        s.cssgradients = function () {
            var a = "background-image:"
                , b = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
                , c = "linear-gradient(left top,#9f9, white);";
            return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)),
                G(j.backgroundImage, "gradient")
        }
        ,
        s.cssreflections = function () {
            return J("boxReflect")
        }
        ,
        s.csstransforms = function () {
            return !!J("transform")
        }
        ,
        s.csstransforms3d = function () {
            var a = !!J("perspective");
            return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }),
                a
        }
        ,
        s.csstransitions = function () {
            return J("transition")
        }
        ,
        s.fontface = function () {
            var a;
            return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
                var e = b.getElementById("smodernizr")
                    , f = e.sheet || e.styleSheet
                    , g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }),
                a
        }
        ,
        s.generatedcontent = function () {
            var a;
            return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
                a = b.offsetHeight >= 3
            }),
                a
        }
        ,
        s.video = function () {
            var a = b.createElement("video")
                , c = !1;
            try {
                if (c = !!a.canPlayType)
                    c = new Boolean(c),
                        c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                        c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                        c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (d) { }
            return c
        }
        ,
        s.audio = function () {
            var a = b.createElement("audio")
                , c = !1;
            try {
                if (c = !!a.canPlayType)
                    c = new Boolean(c),
                        c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                        c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                        c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (d) { }
            return c
        }
        ,
        s.localstorage = function () {
            try {
                return localStorage.setItem(h, h),
                    localStorage.removeItem(h),
                    !0
            } catch (a) {
                return !1
            }
        }
        ,
        s.sessionstorage = function () {
            try {
                return sessionStorage.setItem(h, h),
                    sessionStorage.removeItem(h),
                    !0
            } catch (a) {
                return !1
            }
        }
        ,
        s.webworkers = function () {
            return !!a.Worker
        }
        ,
        s.applicationcache = function () {
            return !!a.applicationCache
        }
        ,
        s.svg = function () {
            return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
        }
        ,
        s.inlinesvg = function () {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>",
                (a.firstChild && a.firstChild.namespaceURI) == r.svg
        }
        ,
        s.smil = function () {
            return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
        }
        ,
        s.svgclippaths = function () {
            return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
        }
        ;
    for (var L in s)
        C(s, L) && (x = L.toLowerCase(),
            e[x] = s[L](),
            v.push((e[x] ? "" : "no-") + x));
    return e.input || K(),
        e.addTest = function (a, b) {
            if (typeof a == "object")
                for (var d in a)
                    C(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c)
                    return e;
                b = typeof b == "function" ? b() : b,
                    typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a),
                    e[a] = b
            }
            return e
        }
        ,
        D(""),
        i = k = null,
        function (a, b) {
            function l(a, b) {
                var c = a.createElement("p")
                    , d = a.getElementsByTagName("head")[0] || a.documentElement;
                return c.innerHTML = "x<style>" + b + "</style>",
                    d.insertBefore(c.lastChild, d.firstChild)
            }
            function m() {
                var a = s.elements;
                return typeof a == "string" ? a.split(" ") : a
            }
            function n(a) {
                var b = j[a[h]];
                return b || (b = {},
                    i++,
                    a[h] = i,
                    j[i] = b),
                    b
            }
            function o(a, c, d) {
                c || (c = b);
                if (k)
                    return c.createElement(a);
                d || (d = n(c));
                var g;
                return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a),
                    g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
            }
            function p(a, c) {
                a || (a = b);
                if (k)
                    return a.createDocumentFragment();
                c = c || n(a);
                var d = c.frag.cloneNode()
                    , e = 0
                    , f = m()
                    , g = f.length;
                for (; e < g; e++)
                    d.createElement(f[e]);
                return d
            }
            function q(a, b) {
                b.cache || (b.cache = {},
                    b.createElem = a.createElement,
                    b.createFrag = a.createDocumentFragment,
                    b.frag = b.createFrag()),
                    a.createElement = function (c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }
                    ,
                    a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
                        return b.createElem(a),
                            b.frag.createElement(a),
                            'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
            }
            function r(a) {
                a || (a = b);
                var c = n(a);
                return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
                    k || q(a, c),
                    a
            }
            var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
            (function () {
                try {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>",
                        g = "hidden" in a,
                        k = a.childNodes.length == 1 || function () {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                } catch (c) {
                    g = !0,
                        k = !0
                }
            }
            )();
            var s = {
                elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: c,
                shivCSS: d.shivCSS !== !1,
                supportsUnknownElements: k,
                shivMethods: d.shivMethods !== !1,
                type: "default",
                shivDocument: r,
                createElement: o,
                createDocumentFragment: p
            };
            a.html5 = s,
                r(b)
        }(this, b),
        e._version = d,
        e._prefixes = n,
        e._domPrefixes = q,
        e._cssomPrefixes = p,
        e.mq = z,
        e.hasEvent = A,
        e.testProp = function (a) {
            return H([a])
        }
        ,
        e.testAllProps = J,
        e.testStyles = y,
        e.prefixed = function (a, b, c) {
            return b ? J(a, b, c) : J(a, "pfx")
        }
        ,
        g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""),
        e
}(this, this.document),
    function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }
        function e(a) {
            return "string" == typeof a
        }
        function f() { }
        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }
        function h() {
            var a = p.shift();
            q = 1,
                a ? a.t ? m(function () {
                    ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
                }, 0) : (a(),
                    h()) : q = 0
        }
        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1,
                    !q && h(),
                    l.onload = l.onreadystatechange = null,
                    b)) {
                    "img" != a && m(function () {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c])
                        y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout
                , l = b.createElement(a)
                , o = 0
                , r = 0
                , u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1,
                y[c] = []),
                "object" == a ? l.data = c : (l.src = c,
                    l.type = a),
                l.width = l.height = "0",
                l.onerror = l.onload = l.onreadystatechange = function () {
                    k.call(this, r)
                }
                ,
                p.splice(e, 0, u),
                "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
                    m(k, j)) : y[c].push(l))
        }
        function j(a, b, c, d, f) {
            return q = 0,
                b = b || "j",
                e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
                    1 == p.length && h()),
                this
        }
        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            },
                a
        }
        var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
            return "[object Array]" == o.call(a)
        }
            , x = [], y = {}, z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]),
                        a
                }
            }, A, B;
        B = function (a) {
            function b(a) {
                var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                }, e, f, g;
                for (f = 0; f < d; f++)
                    g = a[f].split("="),
                        (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++)
                    c = x[f](c);
                return c
            }
            function g(a, e, f, g, h) {
                var i = b(a)
                    , j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(),
                    i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
                        i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
                            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
                            (d(e) || d(j)) && f.load(function () {
                                k(),
                                    e && e(i.origUrl, h, g),
                                    j && j(i.origUrl, h, g),
                                    y[i.url] = 2
                            })))
            }
            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a))
                            c || (j = function () {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                    l()
                            }
                            ),
                                g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function () {
                                var b = 0, c;
                                for (c in a)
                                    a.hasOwnProperty(c) && b++;
                                return b
                            }(),
                                a)
                                a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a),
                                        l()
                                }
                                    : j[n] = function (a) {
                                        return function () {
                                            var b = [].slice.call(arguments);
                                            a && a.apply(this, b),
                                                l()
                                        }
                                    }(k[n])),
                                    g(a[n], j, b, n, h))
                    } else
                        !c && l()
                }
                var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
                c(h ? a.yep : a.nope, !!i),
                    i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a))
                g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++)
                    j = a[i],
                        e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else
                Object(a) === a && h(a, l)
        }
            ,
            B.addPrefix = function (a, b) {
                z[a] = b
            }
            ,
            B.addFilter = function (a) {
                x.push(a)
            }
            ,
            B.errorTimeout = 1e4,
            null == b.readyState && b.addEventListener && (b.readyState = "loading",
                b.addEventListener("DOMContentLoaded", A = function () {
                    b.removeEventListener("DOMContentLoaded", A, 0),
                        b.readyState = "complete"
                }
                    , 0)),
            a.yepnope = k(),
            a.yepnope.executeStack = h,
            a.yepnope.injectJs = function (a, c, d, e, i, j) {
                var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
                k.src = a;
                for (o in d)
                    k.setAttribute(o, d[o]);
                c = j ? h : c || f,
                    k.onreadystatechange = k.onload = function () {
                        !l && g(k.readyState) && (l = 1,
                            c(),
                            k.onload = k.onreadystatechange = null)
                    }
                    ,
                    m(function () {
                        l || (l = 1,
                            c(1))
                    }, e),
                    i ? k.onload() : n.parentNode.insertBefore(k, n)
            }
            ,
            a.yepnope.injectCss = function (a, c, d, e, g, i) {
                var e = b.createElement("link"), j, c = i ? h : c || f;
                e.href = a,
                    e.rel = "stylesheet",
                    e.type = "text/css";
                for (j in d)
                    e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n),
                    m(c, 0))
            }
    }(this, document),
    Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }
    ;

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = []
        , E = C.document
        , r = Object.getPrototypeOf
        , s = t.slice
        , g = t.concat
        , u = t.push
        , i = t.indexOf
        , n = {}
        , o = n.toString
        , v = n.hasOwnProperty
        , a = v.toString
        , l = a.call(Object)
        , y = {}
        , m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
        , x = function (e) {
            return null != e && e === e.window
        }
        , c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
            t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1"
        , k = function (e, t) {
            return new k.fn.init(e, t)
        }
        , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length" in e && e.length
            , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
                t
        },
        each: function (e) {
            return k.each(this, e)
        },
        map: function (n) {
            return this.pushStack(k.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
        k.extend = k.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                "object" == typeof a || m(a) || (a = {}),
                s === u && (a = this,
                    s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        r = e[t],
                            "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                                o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {},
                                i = !1,
                                a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        k.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () { },
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function (e, t) {
                b(e, {
                    nonce: t && t.nonce
                })
            },
            each: function (e, t) {
                var n, r = 0;
                if (d(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r]))
                            break
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(p, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
                    n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function (e, t, n) {
                var r, i, o = 0, a = [];
                if (d(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && a.push(i);
                return g.apply([], a)
            },
            guid: 1,
            support: y
        }),
        "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
        k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
    var h = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function (e, t) {
            return e === t && (l = !0),
                0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function () {
            T()
        }, ae = be(function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes),
                t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                }
                    : function (e, t) {
                        var n = e.length
                            , r = 0;
                        while (e[n++] = t[r++])
                            ;
                        e.length = n - 1
                    }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
                "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e),
                e = e || C,
                E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                                n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                                n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                        f = e,
                        1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k),
                            o = (l = h(t)).length;
                        while (o--)
                            l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","),
                            f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                            n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    e[t + " "] = n
            }
        }
        function le(e) {
            return e[k] = !0,
                e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
                , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function (o) {
                return o = +o,
                    le(function (e, t) {
                        var n, r = a([], e.length, o), i = r.length;
                        while (i--)
                            e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
            i = se.isXML = function (e) {
                var t = e.namespaceURI
                    , n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }
            ,
            T = se.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
                    E = !i(C),
                    m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
                    d.attributes = ce(function (e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    d.getElementsByTagName = ce(function (e) {
                        return e.appendChild(C.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    d.getElementsByClassName = K.test(C.getElementsByClassName),
                    d.getById = ce(function (e) {
                        return a.appendChild(e).id = k,
                            !C.getElementsByName || !C.getElementsByName(k).length
                    }),
                    d.getById ? (b.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }
                        ,
                        b.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && E) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                    ) : (b.filter.ID = function (e) {
                        var n = e.replace(te, ne);
                        return function (e) {
                            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }
                        ,
                        b.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && E) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o];
                                    i = t.getElementsByName(e),
                                        r = 0;
                                    while (o = i[r++])
                                        if ((n = o.getAttributeNode("id")) && n.value === e)
                                            return [o]
                                }
                                return []
                            }
                        }
                        ),
                    b.find.TAG = d.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function (e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                while (n = o[i++])
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                    ,
                    b.find.CLASS = d.getElementsByClassName && function (e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && E)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    s = [],
                    v = [],
                    (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                            e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                            e.querySelectorAll(":checked").length || v.push(":checked"),
                            e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                    }),
                        ce(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                a.appendChild(e).disabled = !0,
                                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                v.push(",.*:")
                        })),
                    (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                        d.disconnectedMatch = c.call(e, "*"),
                            c.call(e, "[s!='']:x"),
                            s.push("!=", $)
                    }),
                    v = v.length && new RegExp(v.join("|")),
                    s = s.length && new RegExp(s.join("|")),
                    t = K.test(a.compareDocumentPosition),
                    y = t || K.test(a.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                        : function (e, t) {
                            if (t)
                                while (t = t.parentNode)
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    D = t ? function (e, t) {
                        if (e === t)
                            return l = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                    }
                        : function (e, t) {
                            if (e === t)
                                return l = !0,
                                    0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                            if (!i || !o)
                                return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                            if (i === o)
                                return pe(e, t);
                            n = e;
                            while (n = n.parentNode)
                                a.unshift(n);
                            n = t;
                            while (n = n.parentNode)
                                s.unshift(n);
                            while (a[r] === s[r])
                                r++;
                            return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                        }
                ),
                    C
            }
            ,
            se.matches = function (e, t) {
                return se(e, null, null, t)
            }
            ,
            se.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== C && T(e),
                    d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                    try {
                        var n = c.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {
                        A(t, !0)
                    }
                return 0 < se(t, C, null, [e]).length
            }
            ,
            se.contains = function (e, t) {
                return (e.ownerDocument || e) !== C && T(e),
                    y(e, t)
            }
            ,
            se.attr = function (e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()]
                    , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            se.escape = function (e) {
                return (e + "").replace(re, ie)
            }
            ,
            se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            se.uniqueSort = function (e) {
                var t, n = [], r = 0, i = 0;
                if (l = !d.detectDuplicates,
                    u = !d.sortStable && e.slice(0),
                    e.sort(D),
                    l) {
                    while (t = e[i++])
                        t === e[i] && (r = n.push(i));
                    while (r--)
                        e.splice(n[r], 1)
                }
                return u = null,
                    e
            }
            ,
            o = se.getText = function (e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    while (t = e[r++])
                        n += o(t);
                return n
            }
            ,
            (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
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
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                            e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function (e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "",
                                "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3)
                            , m = "last" !== h.slice(-4)
                            , x = "of-type" === e;
                        return 1 === g && 0 === v ? function (e) {
                            return !!e.parentNode
                        }
                            : function (e, t, n) {
                                var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                                if (c) {
                                    if (y) {
                                        while (l) {
                                            a = e;
                                            while (a = a[l])
                                                if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                                    return !1;
                                            u = l = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [m ? c.firstChild : c.lastChild],
                                        m && p) {
                                        d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                            a = s && c.childNodes[s];
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                            if (1 === a.nodeType && ++d && a === e) {
                                                i[h] = [S, s, d];
                                                break
                                            }
                                    } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                                        !1 === d)
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                            if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]),
                                                a === e))
                                                break;
                                    return (d -= v) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                            b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                                var n, r = a(e, o), i = r.length;
                                while (i--)
                                    e[n = P(e, r[i])] = !(t[n] = r[i])
                            }) : function (e) {
                                return a(e, 0, t)
                            }
                        ) : a
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var r = []
                            , i = []
                            , s = f(e.replace(B, "$1"));
                        return s[k] ? le(function (e, t, n, r) {
                            var i, o = s(e, null, r, []), a = e.length;
                            while (a--)
                                (i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e,
                                s(r, null, n, i),
                                r[0] = null,
                                !i.pop()
                        }
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function (t) {
                        return t = t.replace(te, ne),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function (n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n),
                            n = n.replace(te, ne).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType); return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function () {
                        return [0]
                    }),
                    last: ve(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)
                            e.push(r);
                        return e
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;)
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() { }
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
                , l = e.next
                , c = l || u
                , f = t && "parentNode" === c
                , p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
                : function (e, t, n) {
                    var r, i, o, a = [S, p];
                    if (n) {
                        while (e = e[u])
                            if ((1 === e.nodeType || f) && s(e, t, n))
                                return !0
                    } else
                        while (e = e[u])
                            if (1 === e.nodeType || f)
                                if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                                    l && l === e.nodeName.toLowerCase())
                                    e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === S && r[1] === p)
                                        return a[2] = r[2];
                                    if ((i[c] = a)[2] = s(e, t, n))
                                        return !0
                                }
                    return !1
                }
        }
        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
                : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                    l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)),
                y && !y[k] && (y = Ce(y, e)),
                le(function (e, t, n, r) {
                    var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                    if (g && g(f, p, n, r),
                        v) {
                        i = Te(p, u),
                            v(i, [], n, r),
                            o = i.length;
                        while (o--)
                            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                i = [],
                                    o = p.length;
                                while (o--)
                                    (a = p[o]) && i.push(f[o] = a);
                                y(null, p = [], i, r)
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else
                        p = Te(p === t ? p.splice(l, p.length) : p),
                            y ? y(null, t, p, r) : H.apply(t, p)
                })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                    r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
            b.setFilters = new me,
            h = se.tokenize = function (e, t) {
                var n, r, i, o, a, s, u, l = x[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                a = e,
                    s = [],
                    u = b.preFilter;
                while (a) {
                    for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                        s.push(i = [])),
                        n = !1,
                        (r = z.exec(a)) && (n = r.shift(),
                            i.push({
                                value: n,
                                type: r[0].replace(B, " ")
                            }),
                            a = a.slice(n.length)),
                        b.filter)
                        !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                            i.push({
                                value: n,
                                type: o,
                                matches: r
                            }),
                            a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
            }
            ,
            f = se.compile = function (e, t) {
                var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
                if (!a) {
                    t || (t = h(e)),
                        n = t.length;
                    while (n--)
                        (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                    (a = N(e, (v = o,
                        m = 0 < (y = i).length,
                        x = 0 < v.length,
                        r = function (e, t, n, r, i) {
                            var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                            for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    a = 0,
                                        t || o.ownerDocument === C || (T(o),
                                            n = !E);
                                    while (s = v[a++])
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break
                                        }
                                    i && (S = h)
                                }
                                m && ((o = !s && o) && u--,
                                    e && c.push(o))
                            }
                            if (u += l,
                                m && l !== u) {
                                a = 0;
                                while (s = y[a++])
                                    s(c, f, t, n);
                                if (e) {
                                    if (0 < u)
                                        while (l--)
                                            c[l] || f[l] || (f[l] = q.call(r));
                                    f = Te(f)
                                }
                                H.apply(r, f),
                                    i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                            }
                            return i && (S = h,
                                w = p),
                                c
                        }
                        ,
                        m ? le(r) : r))).selector = e
                }
                return a
            }
            ,
            g = se.select = function (e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
                if (n = n || [],
                    1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (a = o[i],
                            b.relative[s = a.type])
                            break;
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                !(e = r.length && xe(o)))
                                return H.apply(n, r),
                                    n;
                            break
                        }
                    }
                }
                return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
                    n
            }
            ,
            d.sortStable = k.split("").sort(D).join("") === k,
            d.detectDuplicates = !!l,
            T(),
            d.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }),
            ce(function (e) {
                return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function (e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            d.attributes && ce(function (e) {
                return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
            }) || fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            ce(function (e) {
                return null == e.getAttribute("disabled")
            }) || fe(R, function (e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            se
    }(C);
    k.find = h,
        k.expr = h.selectors,
        k.expr[":"] = k.expr.pseudos,
        k.uniqueSort = k.unique = h.uniqueSort,
        k.text = h.getText,
        k.isXMLDoc = h.isXML,
        k.contains = h.contains,
        k.escapeSelector = h.escape;
    var T = function (e, t, n) {
        var r = []
            , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && k(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
        , S = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        , N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
                return 1 === e.nodeType
            }))
    }
        ,
        k.fn.extend({
            find: function (e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(k(e).filter(function () {
                        for (t = 0; t < r; t++)
                            if (k.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                    t = 0; t < r; t++)
                    k.find(e, i[t], n);
                return 1 < r ? k.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0))
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
            }
        });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function (e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || q,
            "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t,
                    k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                    D.test(r[1]) && k.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
                this.length = 1),
                this
        }
        return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }
    ).prototype = k.fn,
        q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/
        , O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    k.fn.extend({
        has: function (e) {
            var t = k(e, this)
                , n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        k.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return T(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return T(e, "parentNode", n)
            },
            next: function (e) {
                return P(e, "nextSibling")
            },
            prev: function (e) {
                return P(e, "previousSibling")
            },
            nextAll: function (e) {
                return T(e, "nextSibling")
            },
            prevAll: function (e) {
                return T(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return T(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return T(e, "previousSibling", n)
            },
            siblings: function (e) {
                return S((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return S(e.firstChild)
            },
            contents: function (e) {
                return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
                    k.merge([], e.childNodes))
            }
        }, function (r, i) {
            k.fn[r] = function (e, t) {
                var n = k.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e),
                    t && "string" == typeof t && (n = k.filter(t, n)),
                    1 < this.length && (O[r] || k.uniqueSort(n),
                        H.test(r) && n.reverse()),
                    this.pushStack(n)
            }
        });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function I(e) {
        throw e
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
            n = {},
            k.each(e.match(R) || [], function (e, t) {
                n[t] = !0
            }),
            n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once,
                o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                        t = !1)
            }
            r.memory || (t = !1),
                i = !1,
                a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1,
                    u.push(t)),
                    function n(e) {
                        k.each(e, function (e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments),
                    t && !i && c()),
                    this
            },
            remove: function () {
                return k.each(arguments, function (e, t) {
                    var n;
                    while (-1 < (n = k.inArray(t, s, n)))
                        s.splice(n, 1),
                            n <= l && l--
                }),
                    this
            },
            has: function (e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length
            },
            empty: function () {
                return s && (s = []),
                    this
            },
            disable: function () {
                return a = u = [],
                    s = t = "",
                    this
            },
            disabled: function () {
                return !s
            },
            lock: function () {
                return a = u = [],
                    t || i || (s = t = ""),
                    this
            },
            locked: function () {
                return !!a
            },
            fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                    u.push(t),
                    i || c()),
                    this
            },
            fire: function () {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!o
            }
        };
        return f
    }
        ,
        k.extend({
            Deferred: function (e) {
                var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
                    , i = "pending"
                    , a = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments),
                                this
                        },
                        "catch": function (e) {
                            return a.then(null, e)
                        },
                        pipe: function () {
                            var i = arguments;
                            return k.Deferred(function (r) {
                                k.each(o, function (e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }),
                                    i = null
                            }).promise()
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this
                                        , r = arguments
                                        , e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                    m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++,
                                                        t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0,
                                                            r = [e]),
                                                            (s || o.resolveWith)(n, r))
                                            }
                                        }
                                        , t = s ? e : function () {
                                            try {
                                                e()
                                            } catch (e) {
                                                k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                                                    u <= i + 1 && (a !== I && (n = void 0,
                                                        r = [e]),
                                                        o.rejectWith(n, r))
                                            }
                                        }
                                        ;
                                    i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                                        C.setTimeout(t))
                                }
                            }
                            return k.Deferred(function (e) {
                                o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                                    o[1][3].add(l(0, e, m(t) ? t : M)),
                                    o[2][3].add(l(0, e, m(n) ? n : I))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? k.extend(e, a) : a
                        }
                    }
                    , s = {};
                return k.each(o, function (e, t) {
                    var n = t[2]
                        , r = t[5];
                    a[t[1]] = n.add,
                        r && n.add(function () {
                            i = r
                        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                        n.add(t[3].fire),
                        s[t[0]] = function () {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                                this
                        }
                        ,
                        s[t[0] + "With"] = n.fireWith
                }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
            },
            when: function (e) {
                var n = arguments.length
                    , t = n
                    , r = Array(t)
                    , i = s.call(arguments)
                    , o = k.Deferred()
                    , a = function (t) {
                        return function (e) {
                            r[t] = this,
                                i[t] = 1 < arguments.length ? s.call(arguments) : e,
                                --n || o.resolveWith(r, i)
                        }
                    };
                if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n),
                    "pending" === o.state() || m(i[t] && i[t].then)))
                    return o.then();
                while (t--)
                    W(i[t], a(t), o.reject);
                return o.promise()
            }
        });
    //var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    //k.Deferred.exceptionHook = function (e, t) {
    //    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    //}
    //    ,
    //    k.readyException = function (e) {
    //        C.setTimeout(function () {
    //            throw e
    //        })
    //    }
    //    ;
    var F = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
            C.removeEventListener("load", B),
            k.ready()
    }
    k.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            k.readyException(e)
        }),
            this
    }
        ,
        k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
            }
        }),
        k.ready.then = F.then,
        "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B),
            C.addEventListener("load", B));
    var _ = function (e, t, n, r, i, o, a) {
        var s = 0
            , u = e.length
            , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
                n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
            m(r) || (a = !0),
            l && (a ? (t.call(e, r),
                t = null) : (l = t,
                    t = function (e, t, n) {
                        return l.call(k(e), n)
                    }
                )),
            t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
        , z = /^-ms-/
        , U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1,
        Y.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {},
                    G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
            },
            set: function (e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[V(t)] = n;
                else
                    for (r in t)
                        i[V(r)] = t[r];
                return i
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                        while (n--)
                            delete r[t[n]]
                    }
                    (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t)
            }
        };
    var Q = new Y
        , J = new Y
        , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) { }
                J.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function (e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function (e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function (e, t) {
            J.remove(e, t)
        },
        _data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function (e, t) {
            Q.remove(e, t)
        }
    }),
        k.fn.extend({
            data: function (n, e) {
                var t, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && (i = J.get(o),
                        1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--)
                            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)),
                                ee(o, r, i[r]));
                        Q.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof n ? this.each(function () {
                    J.set(this, n)
                }) : _(this, function (e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                    this.each(function () {
                        J.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    J.remove(this, e)
                })
            }
        }),
        k.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                        r = Q.get(e, t),
                        n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)),
                        r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = k.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = k._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                    r--),
                    i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, function () {
                            k.dequeue(e, t)
                        }, o)),
                    !r && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: k.Callbacks("once memory").add(function () {
                        Q.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        k.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                    t = "fx",
                    e--),
                    arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                        var e = k.queue(this, t, n);
                        k._queueHooks(this, t),
                            "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
                    })
            },
            dequeue: function (e) {
                return this.each(function () {
                    k.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                "string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx";
                while (a--)
                    (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i")
        , re = ["Top", "Right", "Bottom", "Left"]
        , ie = E.documentElement
        , oe = function (e) {
            return k.contains(e.ownerDocument, e)
        }
        , ae = {
            composed: !0
        };
    ie.getRootNode && (oe = function (e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    }
    );
    var se = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
    }
        , ue = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                    e.style[o] = t[o];
            for (o in i = n.apply(e, r || []),
                t)
                e.style[o] = a[o];
            return i
        };
    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
            return r.cur()
        }
            : function () {
                return k.css(e, t, "")
            }
            , u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
                l = l || c[3],
                c = +u || 1;
            while (a--)
                k.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                    c /= o;
            c *= 2,
                k.style(e, t, c + l),
                n = n || []
        }
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = l,
                r.start = c,
                r.end = i)),
            i
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
                t ? ("none" === n && (l[c] = Q.get(r, "display") || null,
                    l[c] || (r.style.display = "")),
                    "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0,
                        a = (i = r).ownerDocument,
                        s = i.nodeName,
                        (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)),
                            u = k.css(o, "display"),
                            o.parentNode.removeChild(o),
                            "none" === u && (u = "block"),
                            ce[s] = u)))) : "none" !== n && (l[c] = "none",
                                Q.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function () {
            return fe(this, !0)
        },
        hide: function () {
            return fe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
        , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
        , he = /^$|^module$|\/(?:java|ecma)script/i
        , ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option,
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
        ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                        s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                        u = ge[s] || ge._default,
                        a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                        c = u[0];
                    while (c--)
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                        (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
            d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r))
                i && i.push(o);
            else if (l = oe(o),
                a = ve(f.appendChild(o), "script"),
                l && ye(a),
                n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")),
        (xe = E.createElement("input")).setAttribute("type", "radio"),
        xe.setAttribute("checked", "checked"),
        xe.setAttribute("name", "t"),
        me.appendChild(xe),
        y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
        me.innerHTML = "<textarea>x</textarea>",
        y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/
        , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0
    }
    function Se() {
        return !1
    }
    function Ne(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) { }
        }() == ("focus" === t)
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                    r = n,
                    n = void 0)),
            !1 === i)
            i = Se;
        else if (!i)
            return e;
        return 1 === o && (a = i,
            (i = function (e) {
                return k().off(e),
                    a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = k.guid++)),
            e.each(function () {
                k.event.add(this, t, i, r, n)
            })
    }
    function De(e, i, o) {
        o ? (Q.set(e, i, !1),
            k.event.add(e, i, {
                namespace: !1,
                handler: function (e) {
                    var t, n, r = Q.get(this, i);
                    if (1 & e.isTrigger && this[i]) {
                        if (r.length)
                            (k.event.special[i] || {}).delegateType && e.stopPropagation();
                        else if (r = s.call(arguments),
                            Q.set(this, i, r),
                            t = o(this, i),
                            this[i](),
                            r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {},
                            r !== n)
                            return e.stopImmediatePropagation(),
                                e.preventDefault(),
                                n.value
                    } else
                        r.length && (Q.set(this, i, {
                            value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                        }),
                            e.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler,
                    i = o.selector),
                    i && k.find.matchesSelector(ie, i),
                    n.guid || (n.guid = k.guid++),
                    (u = v.events) || (u = v.events = {}),
                    (a = v.handle) || (a = v.handle = function (e) {
                        return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    l = (e = (e || "").match(R) || [""]).length;
                while (l--)
                    d = g = (s = Ee.exec(e[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d && (f = k.event.special[d] || {},
                            d = (i ? f.delegateType : f.bindType) || d,
                            f = k.event.special[d] || {},
                            c = k.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && k.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o),
                            (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                                f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                            f.add && (f.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            k.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                        f = k.event.special[d] || {},
                            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = o = p.length;
                        while (o--)
                            c = p[o],
                                !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s,
                t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l),
                    t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem,
                        n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                            s.data = o.data,
                            void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                                s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                            a = {},
                            n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
                u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }),
                s
        },
        addProp: function (t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                    : function () {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                ,
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
                        !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"),
                        !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        k.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        k.Event = function (e, t) {
            if (!(this instanceof k.Event))
                return new k.Event(e, t);
            e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && k.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[k.expando] = !0
        }
        ,
        k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Se,
            isPropagationStopped: Se,
            isImmediatePropagationStopped: Se,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke,
                    e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = ke,
                    e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        k.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, k.event.addProp),
        k.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            k.event.special[e] = {
                setup: function () {
                    return De(this, e, Ne),
                        !1
                },
                trigger: function () {
                    return De(this, e),
                        !0
                },
                delegateType: t
            }
        }),
        k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, i) {
            k.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t, n = e.relatedTarget, r = e.handleObj;
                    return n && (n === this || k.contains(this, n)) || (e.type = r.origType,
                        t = r.handler.apply(this, arguments),
                        e.type = i),
                        t
                }
            }
        }),
        k.fn.extend({
            on: function (e, t, n, r) {
                return Ae(this, e, t, n, r)
            },
            one: function (e, t, n, r) {
                return Ae(this, e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = Se),
                    this.each(function () {
                        k.event.remove(this, e, n, t)
                    })
            }
        });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , qe = /<script|<style|<link/i
        , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
        , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
                a = Q.set(t, o),
                l = o.events))
                for (i in delete a.handle,
                    a.events = {},
                    l)
                    for (n = 0,
                        r = l[i].length; n < r; n++)
                        k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e),
                u = k.extend({}, s),
                J.set(t, u))
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                    Ie(t, r, i, o)
            });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild,
            1 === e.childNodes.length && (e = t),
            t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
                u = e,
                    c !== p && (u = k.clone(u, !0, !0),
                        s && k.merge(a, ve(u, "script"))),
                    i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                    k.map(a, Re),
                    c = 0; c < s; c++)
                    u = a[c],
                        he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(ve(r)),
                r.parentNode && (n && oe(r) && ye(ve(r, "script")),
                    r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function (e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c),
                    r = 0,
                    i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                        u = a[r],
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                        a = a || ve(c),
                        r = 0,
                        i = o.length; r < i; r++)
                        Me(o[r], a[r]);
                else
                    Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
                c
        },
        cleanData: function (e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }),
        k.fn.extend({
            detach: function (e) {
                return We(this, e, !0)
            },
            remove: function (e) {
                return We(this, e)
            },
            text: function (e) {
                return _(this, function (e) {
                    return void 0 === e ? k.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return Ie(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return Ie(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return Ie(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return Ie(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (k.cleanData(ve(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function () {
                        return k.clone(this, e, t)
                    })
            },
            html: function (e) {
                return _(this, function (e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = k.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) { }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var n = [];
                return Ie(this, arguments, function (e) {
                    var t = this.parentNode;
                    k.inArray(this, n) < 0 && (k.cleanData(ve(this)),
                        t && t.replaceChild(e, this))
                }, n)
            }
        }),
        k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, a) {
            k.fn[e] = function (e) {
                for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                    t = o === i ? this : this.clone(!0),
                        k(r[o])[a](t),
                        u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i")
        , Fe = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C),
                t.getComputedStyle(e)
        }
        , Be = new RegExp(re.join("|"), "i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
            !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width,
                i = s.minWidth,
                o = s.maxWidth,
                s.minWidth = s.maxWidth = s.width = a,
                a = n.width,
                s.width = r,
                s.minWidth = i,
                s.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function () {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function () {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top,
                    a = 12 === t(e.marginLeft),
                    u.style.right = "60%",
                    o = 36 === t(e.right),
                    r = 36 === t(e.width),
                    u.style.position = "absolute",
                    i = 12 === t(u.offsetWidth / 3),
                    ie.removeChild(s),
                    u = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            y.clearCloneStyle = "content-box" === u.style.backgroundClip,
            k.extend(y, {
                boxSizingReliable: function () {
                    return e(),
                        r
                },
                pixelBoxStyles: function () {
                    return e(),
                        o
                },
                pixelPosition: function () {
                    return e(),
                        n
                },
                reliableMarginLeft: function () {
                    return e(),
                        a
                },
                scrollboxSize: function () {
                    return e(),
                        i
                }
            }))
    }();
    var Ue = ["Webkit", "Moz", "ms"]
        , Xe = E.createElement("div").style
        , Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1)
                , n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe)
                    return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/
        , Qe = /^--/
        , Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
            , s = 0
            , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + re[a], !0, i)),
                r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
                    "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i),
                        "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
            u
    }
    function tt(e, t, n) {
        var r = Fe(e)
            , i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r)
            , o = i
            , a = _e(e, t, r)
            , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r),
            (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)),
                    a = k.cssHooks[t] || k.cssHooks[s],
                    void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i),
                    o = "number"),
                    null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")),
                        y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)),
                (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = _e(e, t, r)),
                "normal" === i && t in Ke && (i = Ke[t]),
                "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
        k.each(["height", "width"], function (e, u) {
            k.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
                            return tt(e, u, n)
                        })
                },
                set: function (e, t, n) {
                    var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                    return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)),
                        s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                            t = k.css(e, u)),
                        Ze(0, t, s)
                }
            }
        }),
        k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (i, o) {
            k.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            },
                "margin" !== i && (k.cssHooks[i + o].set = Ze)
        }),
        k.fn.extend({
            css: function (e, t) {
                return _(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Fe(e),
                            i = t.length; a < i; a++)
                            o[t[a]] = k.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        ((k.Tween = nt).prototype = {
            constructor: nt,
            init: function (e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || k.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (k.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                    this
            }
        }).init.prototype = nt.prototype,
        (nt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = nt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        k.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        k.fx = nt.prototype.init,
        k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval),
            k.fx.tick())
    }
    function ct() {
        return C.setTimeout(function () {
            rt = void 0
        }),
            rt = Date.now()
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a)
                return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
                n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l]),
                    !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                    n
            },
            stop: function (e) {
                var t = 0
                    , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                    this
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = V(n)],
                    o = e[n],
                    Array.isArray(o) && (i = o[1],
                        o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                        delete e[n]),
                    (a = k.cssHooks[r]) && "expand" in a)
                    for (n in o = a.expand(o),
                        delete e[r],
                        o)
                        n in e || (e[n] = o[n],
                            t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                    n;
        return k.map(c, pt, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            k.fx.timer(k.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })),
            l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n),
                    n
            }
            ]
        },
        tweener: function (e, t) {
            m(e) ? (t = e,
                e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                    dt.tweeners[n] = dt.tweeners[n] || [],
                    dt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function () {
                    a.unqueued || s()
                }
            ),
                a.unqueued++,
                p.always(function () {
                    p.always(function () {
                        a.unqueued--,
                            k.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                if (i = t[r],
                    st.test(i)) {
                    if (delete t[r],
                        o = o || "toggle" === i,
                        i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (l = v && v.display) && (l = Q.get(e, "display")),
                    "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0),
                        l = e.style.display || l,
                        c = k.css(e, "display"),
                        fe([e]))),
                    ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }),
                        null == l && (c = h.display,
                            l = "none" === c ? "" : c)),
                        h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                        p.always(function () {
                            h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                        })),
                    u = !1,
                    d)
                    u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                        display: l
                    }),
                        o && (v.hidden = !g),
                        g && fe([e], !0),
                        p.done(function () {
                            for (r in g || fe([e]),
                                Q.remove(e, "fxshow"),
                                d)
                                k.style(e, r, d[r])
                        })),
                        u = pt(g ? v[r] : 0, r, p),
                        r in v || (v[r] = u.start,
                            g && (u.end = u.start,
                                u.start = 0))
        }
        ],
        prefilter: function (e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }),
        k.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? k.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function () {
                    m(r.old) && r.old.call(this),
                        r.queue && k.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        k.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (t, e, n, r) {
                var i = k.isEmptyObject(t)
                    , o = k.speed(e, n, r)
                    , a = function () {
                        var e = dt(this, k.extend({}, t), o);
                        (i || Q.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a,
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop,
                        t(o)
                };
                return "string" != typeof i && (o = e,
                    e = i,
                    i = void 0),
                    e && !1 !== i && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0
                            , t = null != i && i + "queueHooks"
                            , n = k.timers
                            , r = Q.get(this);
                        if (t)
                            r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && ut.test(t) && a(r[t]);
                        for (t = n.length; t--;)
                            n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                                e = !1,
                                n.splice(t, 1));
                        !e && o || k.dequeue(this, i)
                    })
            },
            finish: function (a) {
                return !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                        for (t.finish = !0,
                            k.queue(this, a, []),
                            r && r.stop && r.stop.call(this, !0),
                            e = i.length; e--;)
                            i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                                i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        k.each(["toggle", "show", "hide"], function (e, r) {
            var i = k.fn[r];
            k.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
            }
        }),
        k.each({
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, r) {
            k.fn[e] = function (e, t, n) {
                return this.animate(r, e, t, n)
            }
        }),
        k.timers = [],
        k.fx.tick = function () {
            var e, t = 0, n = k.timers;
            for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(),
                rt = void 0
        }
        ,
        k.fx.timer = function (e) {
            k.timers.push(e),
                k.fx.start()
        }
        ,
        k.fx.interval = 13,
        k.fx.start = function () {
            it || (it = !0,
                lt())
        }
        ,
        k.fx.stop = function () {
            it = null
        }
        ,
        k.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        k.fn.delay = function (r, e) {
            return r = k.fx && k.fx.speeds[r] || r,
                e = e || "fx",
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n)
                    }
                })
        }
        ,
        ot = E.createElement("input"),
        at = E.createElement("select").appendChild(E.createElement("option")),
        ot.type = "checkbox",
        y.checkOn = "" !== ot.value,
        y.optSelected = at.selected,
        (ot = E.createElement("input")).value = "t",
        ot.type = "radio",
        y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function (e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                k.removeAttr(this, e)
            })
        }
    }),
        k.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)),
                        void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, r = 0, i = t && t.match(R);
                if (i && 1 === e.nodeType)
                    while (n = i[r++])
                        e.removeAttribute(n)
            }
        }),
        ht = {
            set: function (e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = gt[t] || k.find.attr;
            gt[t] = function (e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = gt[o],
                    gt[o] = r,
                    r = null != a(e, t, n) ? o : null,
                    gt[o] = i),
                    r
            }
        });
    var vt = /^(?:input|select|textarea|button)$/i
        , yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(" ")
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function (e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[k.propFix[e] || e]
            })
        }
    }),
        k.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                        i = k.propHooks[t]),
                        void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = k.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        y.optSelected || (k.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                    null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            k.propFix[this.toLowerCase()] = this
        }),
        k.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a, s, u = 0;
                if (m(t))
                    return this.each(function (e) {
                        k(this).addClass(t.call(this, e, xt(this)))
                    });
                if ((e = bt(t)).length)
                    while (n = this[u++])
                        if (i = xt(n),
                            r = 1 === n.nodeType && " " + mt(i) + " ") {
                            a = 0;
                            while (o = e[a++])
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = mt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function (t) {
                var e, n, r, i, o, a, s, u = 0;
                if (m(t))
                    return this.each(function (e) {
                        k(this).removeClass(t.call(this, e, xt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = bt(t)).length)
                    while (n = this[u++])
                        if (i = xt(n),
                            r = 1 === n.nodeType && " " + mt(i) + " ") {
                            a = 0;
                            while (o = e[a++])
                                while (-1 < r.indexOf(" " + o + " "))
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = mt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function (i, t) {
                var o = typeof i
                    , a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                    k(this).toggleClass(i.call(this, e, xt(this), t), t)
                }) : this.each(function () {
                    var e, t, n, r;
                    if (a) {
                        t = 0,
                            n = k(this),
                            r = bt(i);
                        while (e = r[t++])
                            n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                    } else
                        void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e),
                            this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++])
                    if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
                        return !0;
                return !1
            }
        });
    var wt = /\r/g;
    k.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
                this.each(function (e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
                        return null == e ? "" : e + ""
                    })),
                        (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }),
        k.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = k.find.attr(e, "value");
                        return null != t ? t : mt(k.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = k(n).val(),
                                    a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function (e, t) {
                        var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                        while (a--)
                            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        k.each(["radio", "checkbox"], function () {
            k.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return e.checked = -1 < k.inArray(k(e).val(), t)
                }
            },
                y.checkOn || (k.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
        }),
        y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/
        , Ct = function (e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
                3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
                    h.sort()),
                    u = d.indexOf(":") < 0 && "on" + d,
                    (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3,
                    e.namespace = h.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = n),
                    t = null == t ? [e] : k.makeArray(t, [e]),
                    c = k.event.special[d] || {},
                    r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                        Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                            a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                        e.type = 1 < i ? s : c.bindType || d,
                        (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t),
                            !1 === e.result && e.preventDefault());
                return e.type = d,
                    r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                        k.event.triggered = d,
                        e.isPropagationStopped() && f.addEventListener(d, Ct),
                        n[d](),
                        e.isPropagationStopped() && f.removeEventListener(d, Ct),
                        k.event.triggered = void 0,
                        a && (n[u] = a)),
                    e.result
            }
        },
        simulate: function (e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }),
        k.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    k.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n)
                    return k.event.trigger(e, t, n, !0)
            }
        }),
        y.focusin || k.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, r) {
            var i = function (e) {
                k.event.simulate(r, e.target, k.event.fix(e))
            };
            k.event.special[r] = {
                setup: function () {
                    var e = this.ownerDocument || this
                        , t = Q.access(e, r);
                    t || e.addEventListener(n, i, !0),
                        Q.access(e, r, (t || 0) + 1)
                },
                teardown: function () {
                    var e = this.ownerDocument || this
                        , t = Q.access(e, r) - 1;
                    t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0),
                        Q.remove(e, r))
                }
            }
        });
    var Et = C.location
        , kt = Date.now()
        , St = /\?/;
    k.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
            t
    }
        ;
    var Nt = /\[\]$/
        , At = /\r?\n/g
        , Dt = /^(?:submit|button|image|reset|file)$/i
        , jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function (e, t) {
                r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function () {
                i(this.name, this.value)
            });
        else
            for (n in e)
                qt(n, e[n], t, i);
        return r.join("&")
    }
        ,
        k.fn.extend({
            serialize: function () {
                return k.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = k.prop(this, "elements");
                    return e ? k.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
                }).map(function (e, t) {
                    var n = k(this).val();
                    return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(At, "\r\n")
                        }
                    }) : {
                            name: t.name,
                            value: n.replace(At, "\r\n")
                        }
                }).get()
            }
        });
    var Lt = /%20/g
        , Ht = /#.*$/
        , Ot = /([?&])_=[^&]*/
        , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , Rt = /^(?:GET|HEAD)$/
        , Mt = /^\/\//
        , It = {}
        , Wt = {}
        , $t = "*/".concat("*")
        , Ft = E.createElement("a");
    function Bt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e,
                e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function _t(t, i, o, a) {
        var s = {}
            , u = t === Wt;
        function l(e) {
            var r;
            return s[e] = !0,
                k.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                        l(n),
                        !1)
                }),
                r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r),
            e
    }
    Ft.href = Et.href,
        k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
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
                    "text json": JSON.parse,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
            },
            ajaxPrefilter: Bt(It),
            ajaxTransport: Bt(Wt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Pt.exec(p))
                                    n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                            a[e] = t),
                            this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e),
                            this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t),
                            l(0, t),
                            this
                    }
                };
                if (x.promise(T),
                    v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"),
                    v.type = t.method || t.type || v.method || v.type,
                    v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""],
                    null == v.crossDomain) {
                    r = E.createElement("a");
                    try {
                        r.href = v.url,
                            r.href = r.href,
                            v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                    } catch (e) {
                        v.crossDomain = !0
                    }
                }
                if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)),
                    _t(It, v, t, T),
                    h)
                    return T;
                for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                    v.type = v.type.toUpperCase(),
                    v.hasContent = !Rt.test(v.type),
                    f = v.url.replace(Ht, ""),
                    v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length),
                        v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data,
                            delete v.data),
                        !1 === v.cache && (f = f.replace(Ot, "$1"),
                            o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o),
                        v.url = f + o),
                    v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
                        k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
                    (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
                    T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]),
                    v.headers)
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                    return T.abort();
                if (u = "abort",
                    b.add(v.complete),
                    T.done(v.success),
                    T.fail(v.error),
                    c = _t(Wt, v, t, T)) {
                    if (T.readyState = 1,
                        g && m.trigger("ajaxSend", [T, v]),
                        h)
                        return T;
                    v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                        T.abort("timeout")
                    }, v.timeout));
                    try {
                        h = !1,
                            c.send(a, l)
                    } catch (e) {
                        if (h)
                            throw e;
                        l(-1, e)
                    }
                } else
                    l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i, o, a, s, u, l = t;
                    h || (h = !0,
                        d && C.clearTimeout(d),
                        c = void 0,
                        p = r || "",
                        T.readyState = 0 < e ? 4 : 0,
                        i = 200 <= e && e < 300 || 304 === e,
                        n && (s = function (e, t, n) {
                            var r, i, o, a, s = e.contents, u = e.dataTypes;
                            while ("*" === u[0])
                                u.shift(),
                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n)
                                o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o)
                                return o !== u[0] && u.unshift(o),
                                    n[o]
                        }(v, T, n)),
                        s = function (e, t, n, r) {
                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    u = o,
                                    o = c.shift())
                                    if ("*" === o)
                                        o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                        c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"])
                                                t = a(t);
                                            else
                                                try {
                                                    t = a(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? e : "No conversion from " + u + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(v, s, T, i),
                        i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u),
                            (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                            204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                                o = s.data,
                                i = !(a = s.error))) : (a = l,
                                    !e && l || (l = "error",
                                        e < 0 && (e = 0))),
                        T.status = e,
                        T.statusText = (t || l) + "",
                        i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        w = void 0,
                        g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                        b.fireWith(y, [T, l]),
                        g && (m.trigger("ajaxComplete", [T, v]),
                            --k.active || k.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function (e, t, n) {
                return k.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return k.get(e, void 0, t, "script")
            }
        }),
        k.each(["get", "post"], function (e, i) {
            k[i] = function (e, t, n, r) {
                return m(t) && (r = r || n,
                    n = t,
                    t = void 0),
                    k.ajax(k.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    }, k.isPlainObject(e) && e))
            }
        }),
        k._evalUrl = function (e, t) {
            return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () { }
                },
                dataFilter: function (e) {
                    k.globalEval(e, t)
                }
            })
        }
        ,
        k.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])),
                    t = k(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function () {
                        var e = this;
                        while (e.firstElementChild)
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function (n) {
                return m(n) ? this.each(function (e) {
                    k(this).wrapInner(n.call(this, e))
                }) : this.each(function () {
                    var e = k(this)
                        , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    k(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    k(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        k.expr.pseudos.hidden = function (e) {
            return !k.expr.pseudos.visible(e)
        }
        ,
        k.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        k.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest
            } catch (e) { }
        }
        ;
    var Ut = {
        0: 200,
        1223: 204
    }
        , Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt,
        y.ajax = Xt = !!Xt,
        k.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || Xt && !i.crossDomain)
                return {
                    send: function (e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password),
                            i.xhrFields)
                            for (n in i.xhrFields)
                                r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                            i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                            e)
                            r.setRequestHeader(n, e[n]);
                        o = function (e) {
                            return function () {
                                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                                    "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                        binary: r.response
                                    } : {
                                            text: r.responseText
                                        }, r.getAllResponseHeaders()))
                            }
                        }
                            ,
                            r.onload = o(),
                            a = r.onerror = r.ontimeout = o("error"),
                            void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                                4 === r.readyState && C.setTimeout(function () {
                                    o && a()
                                })
                            }
                            ,
                            o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (o)
                                throw e
                        }
                    },
                    abort: function () {
                        o && o()
                    }
                }
        }),
        k.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return k.globalEval(e),
                        e
                }
            }
        }),
        k.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
        }),
        k.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        r = k("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function (e) {
                            r.remove(),
                                i = null,
                                e && t("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                            E.head.appendChild(r[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
        });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0,
                e
        }
    }),
        k.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    e.converters["script json"] = function () {
                        return o || k.error(r + " was not called"),
                            o[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    i = C[r],
                    C[r] = function () {
                        o = arguments
                    }
                    ,
                    n.always(function () {
                        void 0 === i ? k(C).removeProp(r) : C[r] = i,
                            e[r] && (e.jsonpCallback = t.jsonpCallback,
                                Gt.push(r)),
                            o && m(i) && i(o[0]),
                            o = i = void 0
                    }),
                    "script"
        }),
        y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
            2 === Vt.childNodes.length),
        k.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                t = !1),
                t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
                    t.head.appendChild(r)) : t = E),
                o = !n && [],
                (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o),
                    o && o.length && k(o).remove(),
                    k.merge([], i.childNodes)));
            var r, i, o
        }
        ,
        k.fn.load = function (e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return -1 < s && (r = mt(e.slice(s)),
                e = e.slice(0, s)),
                m(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
                0 < a.length && k.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments,
                        a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    a.each(function () {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
                ),
                this
        }
        ,
        k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            k.fn[t] = function (e) {
                return this.on(t, e)
            }
        }),
        k.expr.pseudos.animated = function (t) {
            return k.grep(k.timers, function (e) {
                return t === e.elem
            }).length
        }
        ,
        k.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
                "static" === l && (e.style.position = "relative"),
                    s = c.offset(),
                    o = k.css(e, "top"),
                    u = k.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
                        i = r.left) : (a = parseFloat(o) || 0,
                            i = parseFloat(u) || 0),
                    m(t) && (t = t.call(e, n, k.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f)
            }
        },
        k.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function (e) {
                        k.offset.setOffset(this, t, e)
                    });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
                    n = r.ownerDocument.defaultView,
                {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                        top: 0,
                        left: 0
                    } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === k.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        t = this.offset(),
                            n = r.ownerDocument,
                            e = r.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"))
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                            i.left += k.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - k.css(r, "marginTop", !0),
                        left: t.left - i.left - k.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === k.css(e, "position"))
                        e = e.offsetParent;
                    return e || ie
                })
            }
        }),
        k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, i) {
            var o = "pageYOffset" === i;
            k.fn[t] = function (e) {
                return _(this, function (e, t, n) {
                    var r;
                    if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === n)
                        return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }),
        k.each(["top", "left"], function (e, n) {
            k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
                if (t)
                    return t = _e(e, n),
                        $e.test(t) ? k(e).position()[n] + "px" : t
            })
        }),
        k.each({
            Height: "height",
            Width: "width"
        }, function (a, s) {
            k.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function (r, o) {
                k.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e)
                        , i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return _(this, function (e, t, n) {
                        var r;
                        return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                            Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                    }, s, n ? e : void 0, n)
                }
            })
        }),
        k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            k.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        k.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        k.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        k.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
                t = e,
                e = n),
                m(e))
                return r = s.call(arguments, 2),
                    (i = function () {
                        return e.apply(t || this, r.concat(s.call(arguments)))
                    }
                    ).guid = e.guid = e.guid || k.guid++,
                    i
        }
        ,
        k.holdReady = function (e) {
            e ? k.readyWait++ : k.ready(!0)
        }
        ,
        k.isArray = Array.isArray,
        k.parseJSON = JSON.parse,
        k.nodeName = A,
        k.isFunction = m,
        k.isWindow = x,
        k.camelCase = V,
        k.type = w,
        k.now = Date.now,
        k.isNumeric = function (e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return k
        });
    var Qt = C.jQuery
        , Jt = C.$;
    return k.noConflict = function (e) {
        return C.$ === k && (C.$ = Jt),
            e && C.jQuery === k && (C.jQuery = Qt),
            k
    }
        ,
        e || (C.jQuery = C.$ = k),
        k
});

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
            n && i(t, n),
            t
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
                , e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))),
                e.forEach(function (t) {
                    var e, n, i;
                    e = o,
                        i = r[n = t],
                        n in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g,
        u = u && u.hasOwnProperty("default") ? u.default : u;
    var e = "transitionend";
    function n(t) {
        var e = this
            , n = !1;
        return g(this).one(_.TRANSITION_END, function () {
            n = !0
        }),
            setTimeout(function () {
                n || _.triggerTransitionEnd(e)
            }, t),
            this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            for (; t += ~~(1e6 * Math.random()),
                document.getElementById(t);)
                ;
            return t
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t)
                return 0;
            var e = g(t).css("transition-duration")
                , n = g(t).css("transition-delay")
                , i = parseFloat(e)
                , o = parseFloat(n);
            return i || o ? (e = e.split(",")[0],
                n = n.split(",")[0],
                1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function (t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function (t) {
            g(t).trigger(e)
        },
        supportsTransitionEnd: function () {
            return Boolean(e)
        },
        isElement: function (t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                        , r = e[i]
                        , s = r && _.isElement(r) ? "element" : (a = r,
                            {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    g.fn.emulateTransitionEnd = n,
        g.event.special[_.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function (t) {
                if (g(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        };
    var o = "alert"
        , r = "bs.alert"
        , a = "." + r
        , c = g.fn[o]
        , h = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }
        , f = "alert"
        , d = "fade"
        , m = "show"
        , p = function () {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)),
                    this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }
                ,
                t.dispose = function () {
                    g.removeData(this._element, r),
                        this._element = null
                }
                ,
                t._getRootElement = function (t) {
                    var e = _.getSelectorFromElement(t)
                        , n = !1;
                    return e && (n = document.querySelector(e)),
                        n || (n = g(t).closest("." + f)[0]),
                        n
                }
                ,
                t._triggerCloseEvent = function (t) {
                    var e = g.Event(h.CLOSE);
                    return g(t).trigger(e),
                        e
                }
                ,
                t._removeElement = function (e) {
                    var n = this;
                    if (g(e).removeClass(m),
                        g(e).hasClass(d)) {
                        var t = _.getTransitionDurationFromElement(e);
                        g(e).one(_.TRANSITION_END, function (t) {
                            return n._destroyElement(e, t)
                        }).emulateTransitionEnd(t)
                    } else
                        this._destroyElement(e)
                }
                ,
                t._destroyElement = function (t) {
                    g(t).detach().trigger(h.CLOSED).remove()
                }
                ,
                i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this)
                            , e = t.data(r);
                        e || (e = new i(this),
                            t.data(r, e)),
                            "close" === n && e[n](this)
                    })
                }
                ,
                i._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(),
                            e.close(this)
                    }
                }
                ,
                s(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }]),
                i
        }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
        g.fn[o] = p._jQueryInterface,
        g.fn[o].Constructor = p,
        g.fn[o].noConflict = function () {
            return g.fn[o] = c,
                p._jQueryInterface
        }
        ;
    var v = "button"
        , y = "bs.button"
        , E = "." + y
        , C = ".data-api"
        , T = g.fn[v]
        , S = "active"
        , b = "btn"
        , I = "focus"
        , D = '[data-toggle^="button"]'
        , w = '[data-toggle="buttons"]'
        , A = 'input:not([type="hidden"])'
        , N = ".active"
        , O = ".btn"
        , k = {
            CLICK_DATA_API: "click" + E + C,
            FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
        }
        , P = function () {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function () {
                var t = !0
                    , e = !0
                    , n = g(this._element).closest(w)[0];
                if (n) {
                    var i = this._element.querySelector(A);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(S))
                                t = !1;
                            else {
                                var o = n.querySelector(N);
                                o && g(o).removeClass(S)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                                return;
                            i.checked = !this._element.classList.contains(S),
                                g(i).trigger("change")
                        }
                        i.focus(),
                            e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)),
                    t && g(this._element).toggleClass(S)
            }
                ,
                t.dispose = function () {
                    g.removeData(this._element, y),
                        this._element = null
                }
                ,
                n._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(y);
                        t || (t = new n(this),
                            g(this).data(y, t)),
                            "toggle" === e && t[e]()
                    })
                }
                ,
                s(n, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }]),
                n
        }();
    g(document).on(k.CLICK_DATA_API, D, function (t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(b) || (e = g(e).closest(O)),
            P._jQueryInterface.call(g(e), "toggle")
    }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
        var e = g(t.target).closest(O)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }),
        g.fn[v] = P._jQueryInterface,
        g.fn[v].Constructor = P,
        g.fn[v].noConflict = function () {
            return g.fn[v] = T,
                P._jQueryInterface
        }
        ;
    var L = "carousel"
        , j = "bs.carousel"
        , H = "." + j
        , R = ".data-api"
        , x = g.fn[L]
        , F = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        }
        , U = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }
        , W = "next"
        , q = "prev"
        , M = "left"
        , K = "right"
        , Q = {
            SLIDE: "slide" + H,
            SLID: "slid" + H,
            KEYDOWN: "keydown" + H,
            MOUSEENTER: "mouseenter" + H,
            MOUSELEAVE: "mouseleave" + H,
            TOUCHSTART: "touchstart" + H,
            TOUCHMOVE: "touchmove" + H,
            TOUCHEND: "touchend" + H,
            POINTERDOWN: "pointerdown" + H,
            POINTERUP: "pointerup" + H,
            DRAG_START: "dragstart" + H,
            LOAD_DATA_API: "load" + H + R,
            CLICK_DATA_API: "click" + H + R
        }
        , B = "carousel"
        , V = "active"
        , Y = "slide"
        , z = "carousel-item-right"
        , X = "carousel-item-left"
        , $ = "carousel-item-next"
        , G = "carousel-item-prev"
        , J = "pointer-event"
        , Z = ".active"
        , tt = ".active.carousel-item"
        , et = ".carousel-item"
        , nt = ".carousel-item img"
        , it = ".carousel-item-next, .carousel-item-prev"
        , ot = ".carousel-indicators"
        , rt = "[data-slide], [data-slide-to]"
        , st = '[data-ride="carousel"]'
        , at = {
            TOUCH: "touch",
            PEN: "pen"
        }
        , lt = function () {
            function r(t, e) {
                this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this.touchTimeout = null,
                    this.touchStartX = 0,
                    this.touchDeltaX = 0,
                    this._config = this._getConfig(e),
                    this._element = t,
                    this._indicatorsElement = this._element.querySelector(ot),
                    this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints,
                    this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                    this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function () {
                this._isSliding || this._slide(W)
            }
                ,
                t.nextWhenVisible = function () {
                    !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
                }
                ,
                t.prev = function () {
                    this._isSliding || this._slide(q)
                }
                ,
                t.pause = function (t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(it) && (_.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                }
                ,
                t.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval),
                            this._interval = null),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                ,
                t.to = function (t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(tt);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            g(this._element).one(Q.SLID, function () {
                                return e.to(t)
                            });
                        else {
                            if (n === t)
                                return this.pause(),
                                    void this.cycle();
                            var i = n < t ? W : q;
                            this._slide(i, this._items[t])
                        }
                }
                ,
                t.dispose = function () {
                    g(this._element).off(H),
                        g.removeData(this._element, j),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                }
                ,
                t._getConfig = function (t) {
                    return t = l({}, F, t),
                        _.typeCheckConfig(L, t, U),
                        t
                }
                ,
                t._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        0 < e && this.prev(),
                            e < 0 && this.next()
                    }
                }
                ,
                t._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
                        return e._keydown(t)
                    }),
                        "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
                            return e.pause(t)
                        }).on(Q.MOUSELEAVE, function (t) {
                            return e.cycle(t)
                        }),
                        this._config.touch && this._addTouchEventListeners()
                }
                ,
                t._addTouchEventListeners = function () {
                    var n = this;
                    if (this._touchSupported) {
                        var e = function (t) {
                            n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                        }
                            , i = function (t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                                    n._handleSwipe(),
                                    "hover" === n._config.pause && (n.pause(),
                                        n.touchTimeout && clearTimeout(n.touchTimeout),
                                        n.touchTimeout = setTimeout(function (t) {
                                            return n.cycle(t)
                                        }, 500 + n._config.interval))
                            };
                        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
                            return t.preventDefault()
                        }),
                            this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
                                return e(t)
                            }),
                                g(this._element).on(Q.POINTERUP, function (t) {
                                    return i(t)
                                }),
                                this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
                                    return e(t)
                                }),
                                    g(this._element).on(Q.TOUCHMOVE, function (t) {
                                        var e;
                                        (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                                    }),
                                    g(this._element).on(Q.TOUCHEND, function (t) {
                                        return i(t)
                                    }))
                    }
                }
                ,
                t._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(),
                                    this.prev();
                                break;
                            case 39:
                                t.preventDefault(),
                                    this.next()
                        }
                }
                ,
                t._getItemIndex = function (t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [],
                        this._items.indexOf(t)
                }
                ,
                t._getItemByDirection = function (t, e) {
                    var n = t === W
                        , i = t === q
                        , o = this._getItemIndex(e)
                        , r = this._items.length - 1;
                    if ((i && 0 === o || n && o === r) && !this._config.wrap)
                        return e;
                    var s = (o + (t === q ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }
                ,
                t._triggerSlideEvent = function (t, e) {
                    var n = this._getItemIndex(t)
                        , i = this._getItemIndex(this._element.querySelector(tt))
                        , o = g.Event(Q.SLIDE, {
                            relatedTarget: t,
                            direction: e,
                            from: i,
                            to: n
                        });
                    return g(this._element).trigger(o),
                        o
                }
                ,
                t._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                        g(e).removeClass(V);
                        var n = this._indicatorsElement.children[this._getItemIndex(t)];
                        n && g(n).addClass(V)
                    }
                }
                ,
                t._slide = function (t, e) {
                    var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
                    if (o = t === W ? (n = X,
                        i = $,
                        M) : (n = z,
                            i = G,
                            K),
                        l && g(l).hasClass(V))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                        this._isSliding = !0,
                            h && this.pause(),
                            this._setActiveIndicatorElement(l);
                        var u = g.Event(Q.SLID, {
                            relatedTarget: l,
                            direction: o,
                            from: a,
                            to: c
                        });
                        if (g(this._element).hasClass(Y)) {
                            g(l).addClass(i),
                                _.reflow(l),
                                g(s).addClass(n),
                                g(l).addClass(n);
                            var f = parseInt(l.getAttribute("data-interval"), 10);
                            this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                                f) : this._config.defaultInterval || this._config.interval;
                            var d = _.getTransitionDurationFromElement(s);
                            g(s).one(_.TRANSITION_END, function () {
                                g(l).removeClass(n + " " + i).addClass(V),
                                    g(s).removeClass(V + " " + i + " " + n),
                                    r._isSliding = !1,
                                    setTimeout(function () {
                                        return g(r._element).trigger(u)
                                    }, 0)
                            }).emulateTransitionEnd(d)
                        } else
                            g(s).removeClass(V),
                                g(l).addClass(V),
                                this._isSliding = !1,
                                g(this._element).trigger(u);
                        h && this.cycle()
                    }
                }
                ,
                r._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = g(this).data(j)
                            , e = l({}, F, g(this).data());
                        "object" == typeof i && (e = l({}, e, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if (t || (t = new r(this, e),
                            g(this).data(j, t)),
                            "number" == typeof i)
                            t.to(i);
                        else if ("string" == typeof n) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        } else
                            e.interval && e.ride && (t.pause(),
                                t.cycle())
                    })
                }
                ,
                r._dataApiClickHandler = function (t) {
                    var e = _.getSelectorFromElement(this);
                    if (e) {
                        var n = g(e)[0];
                        if (n && g(n).hasClass(B)) {
                            var i = l({}, g(n).data(), g(this).data())
                                , o = this.getAttribute("data-slide-to");
                            o && (i.interval = !1),
                                r._jQueryInterface.call(g(n), i),
                                o && g(n).data(j).to(o),
                                t.preventDefault()
                        }
                    }
                }
                ,
                s(r, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return F
                    }
                }]),
                r
        }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
        g(window).on(Q.LOAD_DATA_API, function () {
            for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
                var i = g(t[e]);
                lt._jQueryInterface.call(i, i.data())
            }
        }),
        g.fn[L] = lt._jQueryInterface,
        g.fn[L].Constructor = lt,
        g.fn[L].noConflict = function () {
            return g.fn[L] = x,
                lt._jQueryInterface
        }
        ;
    var ct = "collapse"
        , ht = "bs.collapse"
        , ut = "." + ht
        , ft = g.fn[ct]
        , dt = {
            toggle: !0,
            parent: ""
        }
        , gt = {
            toggle: "boolean",
            parent: "(string|element)"
        }
        , _t = {
            SHOW: "show" + ut,
            SHOWN: "shown" + ut,
            HIDE: "hide" + ut,
            HIDDEN: "hidden" + ut,
            CLICK_DATA_API: "click" + ut + ".data-api"
        }
        , mt = "show"
        , pt = "collapse"
        , vt = "collapsing"
        , yt = "collapsed"
        , Et = "width"
        , Ct = "height"
        , Tt = ".show, .collapsing"
        , St = '[data-toggle="collapse"]'
        , bt = function () {
            function a(e, t) {
                this._isTransitioning = !1,
                    this._element = e,
                    this._config = this._getConfig(t),
                    this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i]
                        , s = _.getSelectorFromElement(r)
                        , a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s,
                        this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                    this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function () {
                g(this._element).hasClass(mt) ? this.hide() : this.show()
            }
                ,
                t.show = function () {
                    var t, e, n = this;
                    if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
                        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
                    })).length && (t = null),
                        !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                        var i = g.Event(_t.SHOW);
                        if (g(this._element).trigger(i),
                            !i.isDefaultPrevented()) {
                            t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                                e || g(t).data(ht, null));
                            var o = this._getDimension();
                            g(this._element).removeClass(pt).addClass(vt),
                                this._element.style[o] = 0,
                                this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                                , s = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function () {
                                g(n._element).removeClass(vt).addClass(pt).addClass(mt),
                                    n._element.style[o] = "",
                                    n.setTransitioning(!1),
                                    g(n._element).trigger(_t.SHOWN)
                            }).emulateTransitionEnd(s),
                                this._element.style[o] = this._element[r] + "px"
                        }
                    }
                }
                ,
                t.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                        var e = g.Event(_t.HIDE);
                        if (g(this._element).trigger(e),
                            !e.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                                _.reflow(this._element),
                                g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var o = 0; o < i; o++) {
                                    var r = this._triggerArray[o]
                                        , s = _.getSelectorFromElement(r);
                                    if (null !== s)
                                        g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var a = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function () {
                                t.setTransitioning(!1),
                                    g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                            }).emulateTransitionEnd(a)
                        }
                    }
                }
                ,
                t.setTransitioning = function (t) {
                    this._isTransitioning = t
                }
                ,
                t.dispose = function () {
                    g.removeData(this._element, ht),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                }
                ,
                t._getConfig = function (t) {
                    return (t = l({}, dt, t)).toggle = Boolean(t.toggle),
                        _.typeCheckConfig(ct, t, gt),
                        t
                }
                ,
                t._getDimension = function () {
                    return g(this._element).hasClass(Et) ? Et : Ct
                }
                ,
                t._getParent = function () {
                    var t, n = this;
                    _.isElement(this._config.parent) ? (t = this._config.parent,
                        "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
                        , i = [].slice.call(t.querySelectorAll(e));
                    return g(i).each(function (t, e) {
                        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                    }),
                        t
                }
                ,
                t._addAriaAndCollapsedClass = function (t, e) {
                    var n = g(t).hasClass(mt);
                    e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
                }
                ,
                a._getTargetFromElement = function (t) {
                    var e = _.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                }
                ,
                a._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = g(this)
                            , e = t.data(ht)
                            , n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                            e || (e = new a(this, n),
                                t.data(ht, e)),
                            "string" == typeof i) {
                            if ("undefined" == typeof e[i])
                                throw new TypeError('No method named "' + i + '"');
                            e[i]()
                        }
                    })
                }
                ,
                s(a, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return dt
                    }
                }]),
                a
        }();
    g(document).on(_t.CLICK_DATA_API, St, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this)
            , e = _.getSelectorFromElement(this)
            , i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function () {
            var t = g(this)
                , e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e)
        })
    }),
        g.fn[ct] = bt._jQueryInterface,
        g.fn[ct].Constructor = bt,
        g.fn[ct].noConflict = function () {
            return g.fn[ct] = ft,
                bt._jQueryInterface
        }
        ;
    var It = "dropdown"
        , Dt = "bs.dropdown"
        , wt = "." + Dt
        , At = ".data-api"
        , Nt = g.fn[It]
        , Ot = new RegExp("38|40|27")
        , kt = {
            HIDE: "hide" + wt,
            HIDDEN: "hidden" + wt,
            SHOW: "show" + wt,
            SHOWN: "shown" + wt,
            CLICK: "click" + wt,
            CLICK_DATA_API: "click" + wt + At,
            KEYDOWN_DATA_API: "keydown" + wt + At,
            KEYUP_DATA_API: "keyup" + wt + At
        }
        , Pt = "disabled"
        , Lt = "show"
        , jt = "dropup"
        , Ht = "dropright"
        , Rt = "dropleft"
        , xt = "dropdown-menu-right"
        , Ft = "position-static"
        , Ut = '[data-toggle="dropdown"]'
        , Wt = ".dropdown form"
        , qt = ".dropdown-menu"
        , Mt = ".navbar-nav"
        , Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
        , Qt = "top-start"
        , Bt = "top-end"
        , Vt = "bottom-start"
        , Yt = "bottom-end"
        , zt = "right-start"
        , Xt = "left-start"
        , $t = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }
        , Gt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }
        , Jt = function () {
            function c(t, e) {
                this._element = t,
                    this._popper = null,
                    this._config = this._getConfig(e),
                    this._menu = this._getMenuElement(),
                    this._inNavbar = this._detectNavbar(),
                    this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                    var t = c._getParentFromElement(this._element)
                        , e = g(this._menu).hasClass(Lt);
                    if (c._clearMenus(),
                        !e) {
                        var n = {
                            relatedTarget: this._element
                        }
                            , i = g.Event(kt.SHOW, n);
                        if (g(t).trigger(i),
                            !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof u)
                                    throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference,
                                    "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary && g(t).addClass(Ft),
                                    this._popper = new u(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                g(this._menu).toggleClass(Lt),
                                g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                        }
                    }
                }
            }
                ,
                t.show = function () {
                    if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                        var t = {
                            relatedTarget: this._element
                        }
                            , e = g.Event(kt.SHOW, t)
                            , n = c._getParentFromElement(this._element);
                        g(n).trigger(e),
                            e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                                g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
                    }
                }
                ,
                t.hide = function () {
                    if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                        var t = {
                            relatedTarget: this._element
                        }
                            , e = g.Event(kt.HIDE, t)
                            , n = c._getParentFromElement(this._element);
                        g(n).trigger(e),
                            e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                                g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
                    }
                }
                ,
                t.dispose = function () {
                    g.removeData(this._element, Dt),
                        g(this._element).off(wt),
                        this._element = null,
                        (this._menu = null) !== this._popper && (this._popper.destroy(),
                            this._popper = null)
                }
                ,
                t.update = function () {
                    this._inNavbar = this._detectNavbar(),
                        null !== this._popper && this._popper.scheduleUpdate()
                }
                ,
                t._addEventListeners = function () {
                    var e = this;
                    g(this._element).on(kt.CLICK, function (t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            e.toggle()
                    })
                }
                ,
                t._getConfig = function (t) {
                    return t = l({}, this.constructor.Default, g(this._element).data(), t),
                        _.typeCheckConfig(It, t, this.constructor.DefaultType),
                        t
                }
                ,
                t._getMenuElement = function () {
                    if (!this._menu) {
                        var t = c._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(qt))
                    }
                    return this._menu
                }
                ,
                t._getPlacement = function () {
                    var t = g(this._element.parentNode)
                        , e = Vt;
                    return t.hasClass(jt) ? (e = Qt,
                        g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt),
                        e
                }
                ,
                t._detectNavbar = function () {
                    return 0 < g(this._element).closest(".navbar").length
                }
                ,
                t._getOffset = function () {
                    var e = this
                        , t = {};
                    return "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}),
                            t
                    }
                        : t.offset = this._config.offset,
                        t
                }
                ,
                t._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (t.modifiers.applyStyle = {
                        enabled: !1
                    }),
                        t
                }
                ,
                c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(Dt);
                        if (t || (t = new c(this, "object" == typeof e ? e : null),
                            g(this).data(Dt, t)),
                            "string" == typeof e) {
                            if ("undefined" == typeof t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                }
                ,
                c._clearMenus = function (t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                            var o = c._getParentFromElement(e[n])
                                , r = g(e[n]).data(Dt)
                                , s = {
                                    relatedTarget: e[n]
                                };
                            if (t && "click" === t.type && (s.clickEvent = t),
                                r) {
                                var a = r._menu;
                                if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                                    var l = g.Event(kt.HIDE, s);
                                    g(o).trigger(l),
                                        l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                                            e[n].setAttribute("aria-expanded", "false"),
                                            g(a).removeClass(Lt),
                                            g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                                }
                            }
                        }
                }
                ,
                c._getParentFromElement = function (t) {
                    var e, n = _.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)),
                        e || t.parentNode
                }
                ,
                c._dataApiKeydownHandler = function (t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(),
                        t.stopPropagation(),
                        !this.disabled && !g(this).hasClass(Pt))) {
                        var e = c._getParentFromElement(this)
                            , n = g(e).hasClass(Lt);
                        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                            var i = [].slice.call(e.querySelectorAll(Kt));
                            if (0 !== i.length) {
                                var o = i.indexOf(t.target);
                                38 === t.which && 0 < o && o--,
                                    40 === t.which && o < i.length - 1 && o++,
                                    o < 0 && (o = 0),
                                    i[o].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var r = e.querySelector(Ut);
                                g(r).trigger("focus")
                            }
                            g(this).trigger("click")
                        }
                    }
                }
                ,
                s(c, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return $t
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Gt
                    }
                }]),
                c
        }();
    g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
        t.preventDefault(),
            t.stopPropagation(),
            Jt._jQueryInterface.call(g(this), "toggle")
    }).on(kt.CLICK_DATA_API, Wt, function (t) {
        t.stopPropagation()
    }),
        g.fn[It] = Jt._jQueryInterface,
        g.fn[It].Constructor = Jt,
        g.fn[It].noConflict = function () {
            return g.fn[It] = Nt,
                Jt._jQueryInterface
        }
        ;
    var Zt = "modal"
        , te = "bs.modal"
        , ee = "." + te
        , ne = g.fn[Zt]
        , ie = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
        , oe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
        , re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            FOCUSIN: "focusin" + ee,
            RESIZE: "resize" + ee,
            CLICK_DISMISS: "click.dismiss" + ee,
            KEYDOWN_DISMISS: "keydown.dismiss" + ee,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
            CLICK_DATA_API: "click" + ee + ".data-api"
        }
        , se = "modal-dialog-scrollable"
        , ae = "modal-scrollbar-measure"
        , le = "modal-backdrop"
        , ce = "modal-open"
        , he = "fade"
        , ue = "show"
        , fe = ".modal-dialog"
        , de = ".modal-body"
        , ge = '[data-toggle="modal"]'
        , _e = '[data-dismiss="modal"]'
        , me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
        , pe = ".sticky-top"
        , ve = function () {
            function o(t, e) {
                this._config = this._getConfig(e),
                    this._element = t,
                    this._dialog = t.querySelector(fe),
                    this._backdrop = null,
                    this._isShown = !1,
                    this._isBodyOverflowing = !1,
                    this._ignoreBackdropClick = !1,
                    this._isTransitioning = !1,
                    this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }
                ,
                t.show = function (t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        g(this._element).hasClass(he) && (this._isTransitioning = !0);
                        var n = g.Event(re.SHOW, {
                            relatedTarget: t
                        });
                        g(this._element).trigger(n),
                            this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
                                    return e.hide(t)
                                }),
                                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
                                    g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
                                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                                    })
                                }),
                                this._showBackdrop(function () {
                                    return e._showElement(t)
                                }))
                    }
                }
                ,
                t.hide = function (t) {
                    var e = this;
                    if (t && t.preventDefault(),
                        this._isShown && !this._isTransitioning) {
                        var n = g.Event(re.HIDE);
                        if (g(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = g(this._element).hasClass(he);
                            if (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(document).off(re.FOCUSIN),
                                g(this._element).removeClass(ue),
                                g(this._element).off(re.CLICK_DISMISS),
                                g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                                i) {
                                var o = _.getTransitionDurationFromElement(this._element);
                                g(this._element).one(_.TRANSITION_END, function (t) {
                                    return e._hideModal(t)
                                }).emulateTransitionEnd(o)
                            } else
                                this._hideModal()
                        }
                    }
                }
                ,
                t.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return g(t).off(ee)
                    }),
                        g(document).off(re.FOCUSIN),
                        g.removeData(this._element, te),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._isTransitioning = null,
                        this._scrollbarWidth = null
                }
                ,
                t.handleUpdate = function () {
                    this._adjustDialog()
                }
                ,
                t._getConfig = function (t) {
                    return t = l({}, ie, t),
                        _.typeCheckConfig(Zt, t, oe),
                        t
                }
                ,
                t._showElement = function (t) {
                    var e = this
                        , n = g(this._element).hasClass(he);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0,
                        n && _.reflow(this._element),
                        g(this._element).addClass(ue),
                        this._config.focus && this._enforceFocus();
                    var i = g.Event(re.SHOWN, {
                        relatedTarget: t
                    })
                        , o = function () {
                            e._config.focus && e._element.focus(),
                                e._isTransitioning = !1,
                                g(e._element).trigger(i)
                        };
                    if (n) {
                        var r = _.getTransitionDurationFromElement(this._dialog);
                        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else
                        o()
                }
                ,
                t._enforceFocus = function () {
                    var e = this;
                    g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
                        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
                    })
                }
                ,
                t._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
                        27 === t.which && (t.preventDefault(),
                            e.hide())
                    }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
                }
                ,
                t._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? g(window).on(re.RESIZE, function (t) {
                        return e.handleUpdate(t)
                    }) : g(window).off(re.RESIZE)
                }
                ,
                t._hideModal = function () {
                    var t = this;
                    this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._isTransitioning = !1,
                        this._showBackdrop(function () {
                            g(document.body).removeClass(ce),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                g(t._element).trigger(re.HIDDEN)
                        })
                }
                ,
                t._removeBackdrop = function () {
                    this._backdrop && (g(this._backdrop).remove(),
                        this._backdrop = null)
                }
                ,
                t._showBackdrop = function (t) {
                    var e = this
                        , n = g(this._element).hasClass(he) ? he : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"),
                            this._backdrop.className = le,
                            n && this._backdrop.classList.add(n),
                            g(this._backdrop).appendTo(document.body),
                            g(this._element).on(re.CLICK_DISMISS, function (t) {
                                e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                            }),
                            n && _.reflow(this._backdrop),
                            g(this._backdrop).addClass(ue),
                            !t)
                            return;
                        if (!n)
                            return void t();
                        var i = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        g(this._backdrop).removeClass(ue);
                        var o = function () {
                            e._removeBackdrop(),
                                t && t()
                        };
                        if (g(this._element).hasClass(he)) {
                            var r = _.getTransitionDurationFromElement(this._backdrop);
                            g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else
                            o()
                    } else
                        t && t()
                }
                ,
                t._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }
                ,
                t._resetAdjustments = function () {
                    this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                }
                ,
                t._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                }
                ,
                t._setScrollbar = function () {
                    var o = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(me))
                            , e = [].slice.call(document.querySelectorAll(pe));
                        g(t).each(function (t, e) {
                            var n = e.style.paddingRight
                                , i = g(e).css("padding-right");
                            g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                        }),
                            g(e).each(function (t, e) {
                                var n = e.style.marginRight
                                    , i = g(e).css("margin-right");
                                g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                            });
                        var n = document.body.style.paddingRight
                            , i = g(document.body).css("padding-right");
                        g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                    g(document.body).addClass(ce)
                }
                ,
                t._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(me));
                    g(t).each(function (t, e) {
                        var n = g(e).data("padding-right");
                        g(e).removeData("padding-right"),
                            e.style.paddingRight = n || ""
                    });
                    var e = [].slice.call(document.querySelectorAll("" + pe));
                    g(e).each(function (t, e) {
                        var n = g(e).data("margin-right");
                        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
                    });
                    var n = g(document.body).data("padding-right");
                    g(document.body).removeData("padding-right"),
                        document.body.style.paddingRight = n || ""
                }
                ,
                t._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    t.className = ae,
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t),
                        e
                }
                ,
                o._jQueryInterface = function (n, i) {
                    return this.each(function () {
                        var t = g(this).data(te)
                            , e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                        if (t || (t = new o(this, e),
                            g(this).data(te, t)),
                            "string" == typeof n) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n](i)
                        } else
                            e.show && t.show(i)
                    })
                }
                ,
                s(o, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ie
                    }
                }]),
                o
        }();
    g(document).on(re.CLICK_DATA_API, ge, function (t) {
        var e, n = this, i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(re.SHOW, function (t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
                g(n).is(":visible") && n.focus()
            })
        });
        ve._jQueryInterface.call(g(e), o, this)
    }),
        g.fn[Zt] = ve._jQueryInterface,
        g.fn[Zt].Constructor = ve,
        g.fn[Zt].noConflict = function () {
            return g.fn[Zt] = ne,
                ve._jQueryInterface
        }
        ;
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
        , Ee = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
        , Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
        , Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Se(t, s, e) {
        if (0 === t.length)
            return t;
        if (e && "function" == typeof e)
            return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function (t, e) {
            var n = l[t]
                , i = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                return n.parentNode.removeChild(n),
                    "continue";
            var o = [].slice.call(n.attributes)
                , r = [].concat(s["*"] || [], s[i] || []);
            o.forEach(function (t) {
                (function (t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                    for (var i = e.filter(function (t) {
                        return t instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, r) || n.removeAttribute(t.nodeName)
            })
        }, o = 0, r = l.length; o < r; o++)
            i(o);
        return n.body.innerHTML
    }
    var be = "tooltip"
        , Ie = "bs.tooltip"
        , De = "." + Ie
        , we = g.fn[be]
        , Ae = "bs-tooltip"
        , Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g")
        , Oe = ["sanitize", "whiteList", "sanitizeFn"]
        , ke = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        }
        , Pe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
        , Le = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Ee
        }
        , je = "show"
        , He = "out"
        , Re = {
            HIDE: "hide" + De,
            HIDDEN: "hidden" + De,
            SHOW: "show" + De,
            SHOWN: "shown" + De,
            INSERTED: "inserted" + De,
            CLICK: "click" + De,
            FOCUSIN: "focusin" + De,
            FOCUSOUT: "focusout" + De,
            MOUSEENTER: "mouseenter" + De,
            MOUSELEAVE: "mouseleave" + De
        }
        , xe = "fade"
        , Fe = "show"
        , Ue = ".tooltip-inner"
        , We = ".arrow"
        , qe = "hover"
        , Me = "focus"
        , Ke = "click"
        , Qe = "manual"
        , Be = function () {
            function i(t, e) {
                if ("undefined" == typeof u)
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0,
                    this._timeout = 0,
                    this._hoverState = "",
                    this._activeTrigger = {},
                    this._popper = null,
                    this.element = t,
                    this.config = this._getConfig(e),
                    this.tip = null,
                    this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }
                ,
                t.disable = function () {
                    this._isEnabled = !1
                }
                ,
                t.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }
                ,
                t.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY
                                , n = g(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                                g(t.currentTarget).data(e, n)),
                                n._activeTrigger.click = !n._activeTrigger.click,
                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (g(this.getTipElement()).hasClass(Fe))
                                return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }
                ,
                t.dispose = function () {
                    clearTimeout(this._timeout),
                        g.removeData(this.element, this.constructor.DATA_KEY),
                        g(this.element).off(this.constructor.EVENT_KEY),
                        g(this.element).closest(".modal").off("hide.bs.modal"),
                        this.tip && g(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                }
                ,
                t.show = function () {
                    var e = this;
                    if ("none" === g(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var t = g.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        g(this.element).trigger(t);
                        var n = _.findShadowRoot(this.element)
                            , i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i)
                            return;
                        var o = this.getTipElement()
                            , r = _.getUID(this.constructor.NAME);
                        o.setAttribute("id", r),
                            this.element.setAttribute("aria-describedby", r),
                            this.setContent(),
                            this.config.animation && g(o).addClass(xe);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                            , a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        g(o).data(this.constructor.DATA_KEY, this),
                            g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                            g(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new u(this.element, o, {
                                placement: a,
                                modifiers: {
                                    offset: this._getOffset(),
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: We
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function (t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function (t) {
                                    return e._handlePopperPlacementChange(t)
                                }
                            }),
                            g(o).addClass(Fe),
                            "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                        var c = function () {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null,
                                g(e.element).trigger(e.constructor.Event.SHOWN),
                                t === He && e._leave(null, e)
                        };
                        if (g(this.tip).hasClass(xe)) {
                            var h = _.getTransitionDurationFromElement(this.tip);
                            g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                        } else
                            c()
                    }
                }
                ,
                t.hide = function (t) {
                    var e = this
                        , n = this.getTipElement()
                        , i = g.Event(this.constructor.Event.HIDE)
                        , o = function () {
                            e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                                e._cleanTipClass(),
                                e.element.removeAttribute("aria-describedby"),
                                g(e.element).trigger(e.constructor.Event.HIDDEN),
                                null !== e._popper && e._popper.destroy(),
                                t && t()
                        };
                    if (g(this.element).trigger(i),
                        !i.isDefaultPrevented()) {
                        if (g(n).removeClass(Fe),
                            "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                            this._activeTrigger[Ke] = !1,
                            this._activeTrigger[Me] = !1,
                            this._activeTrigger[qe] = !1,
                            g(this.tip).hasClass(xe)) {
                            var r = _.getTransitionDurationFromElement(n);
                            g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else
                            o();
                        this._hoverState = ""
                    }
                }
                ,
                t.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }
                ,
                t.isWithContent = function () {
                    return Boolean(this.getTitle())
                }
                ,
                t.addAttachmentClass = function (t) {
                    g(this.getTipElement()).addClass(Ae + "-" + t)
                }
                ,
                t.getTipElement = function () {
                    return this.tip = this.tip || g(this.config.template)[0],
                        this.tip
                }
                ,
                t.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()),
                        g(t).removeClass(xe + " " + Fe)
                }
                ,
                t.setElementContent = function (t, e) {
                    "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)),
                        t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
                }
                ,
                t.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        t
                }
                ,
                t._getOffset = function () {
                    var e = this
                        , t = {};
                    return "function" == typeof this.config.offset ? t.fn = function (t) {
                        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}),
                            t
                    }
                        : t.offset = this.config.offset,
                        t
                }
                ,
                t._getContainer = function () {
                    return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
                }
                ,
                t._getAttachment = function (t) {
                    return Pe[t.toUpperCase()]
                }
                ,
                t._setListeners = function () {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function (t) {
                        if ("click" === t)
                            g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                                return i.toggle(t)
                            });
                        else if (t !== Qe) {
                            var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                                , n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                            g(i.element).on(e, i.config.selector, function (t) {
                                return i._enter(t)
                            }).on(n, i.config.selector, function (t) {
                                return i._leave(t)
                            })
                        }
                    }),
                        g(this.element).closest(".modal").on("hide.bs.modal", function () {
                            i.element && i.hide()
                        }),
                        this.config.selector ? this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                }
                ,
                t._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                }
                ,
                t._enter = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                        g(t.currentTarget).data(n, e)),
                        t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0),
                        g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout),
                            e._hoverState = je,
                            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                                e._hoverState === je && e.show()
                            }, e.config.delay.show) : e.show())
                }
                ,
                t._leave = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                        g(t.currentTarget).data(n, e)),
                        t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1),
                        e._isWithActiveTrigger() || (clearTimeout(e._timeout),
                            e._hoverState = He,
                            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                                e._hoverState === He && e.hide()
                            }, e.config.delay.hide) : e.hide())
                }
                ,
                t._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t])
                            return !0;
                    return !1
                }
                ,
                t._getConfig = function (t) {
                    var e = g(this.element).data();
                    return Object.keys(e).forEach(function (t) {
                        -1 !== Oe.indexOf(t) && delete e[t]
                    }),
                        "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        _.typeCheckConfig(be, t, this.constructor.DefaultType),
                        t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
                        t
                }
                ,
                t._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }
                ,
                t._cleanTipClass = function () {
                    var t = g(this.getTipElement())
                        , e = t.attr("class").match(Ne);
                    null !== e && e.length && t.removeClass(e.join(""))
                }
                ,
                t._handlePopperPlacementChange = function (t) {
                    var e = t.instance;
                    this.tip = e.popper,
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(t.placement))
                }
                ,
                t._fixTransition = function () {
                    var t = this.getTipElement()
                        , e = this.config.animation;
                    null === t.getAttribute("x-placement") && (g(t).removeClass(xe),
                        this.config.animation = !1,
                        this.hide(),
                        this.show(),
                        this.config.animation = e)
                }
                ,
                i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this).data(Ie)
                            , e = "object" == typeof n && n;
                        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e),
                            g(this).data(Ie, t)),
                            "string" == typeof n)) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }
                ,
                s(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Le
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return be
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return Ie
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return Re
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return De
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return ke
                    }
                }]),
                i
        }();
    g.fn[be] = Be._jQueryInterface,
        g.fn[be].Constructor = Be,
        g.fn[be].noConflict = function () {
            return g.fn[be] = we,
                Be._jQueryInterface
        }
        ;
    var Ve = "popover"
        , Ye = "bs.popover"
        , ze = "." + Ye
        , Xe = g.fn[Ve]
        , $e = "bs-popover"
        , Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g")
        , Je = l({}, Be.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
        , Ze = l({}, Be.DefaultType, {
            content: "(string|element|function)"
        })
        , tn = "fade"
        , en = "show"
        , nn = ".popover-header"
        , on = ".popover-body"
        , rn = {
            HIDE: "hide" + ze,
            HIDDEN: "hidden" + ze,
            SHOW: "show" + ze,
            SHOWN: "shown" + ze,
            INSERTED: "inserted" + ze,
            CLICK: "click" + ze,
            FOCUSIN: "focusin" + ze,
            FOCUSOUT: "focusout" + ze,
            MOUSEENTER: "mouseenter" + ze,
            MOUSELEAVE: "mouseleave" + ze
        }
        , sn = function (t) {
            var e, n;
            function i() {
                return t.apply(this, arguments) || this
            }
            n = t,
                (e = i).prototype = Object.create(n.prototype),
                (e.prototype.constructor = e).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }
                ,
                o.addAttachmentClass = function (t) {
                    g(this.getTipElement()).addClass($e + "-" + t)
                }
                ,
                o.getTipElement = function () {
                    return this.tip = this.tip || g(this.config.template)[0],
                        this.tip
                }
                ,
                o.setContent = function () {
                    var t = g(this.getTipElement());
                    this.setElementContent(t.find(nn), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                        this.setElementContent(t.find(on), e),
                        t.removeClass(tn + " " + en)
                }
                ,
                o._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }
                ,
                o._cleanTipClass = function () {
                    var t = g(this.getTipElement())
                        , e = t.attr("class").match(Ge);
                    null !== e && 0 < e.length && t.removeClass(e.join(""))
                }
                ,
                i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this).data(Ye)
                            , e = "object" == typeof n ? n : null;
                        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e),
                            g(this).data(Ye, t)),
                            "string" == typeof n)) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }
                ,
                s(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Je
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Ve
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return Ye
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return rn
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ze
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Ze
                    }
                }]),
                i
        }(Be);
    g.fn[Ve] = sn._jQueryInterface,
        g.fn[Ve].Constructor = sn,
        g.fn[Ve].noConflict = function () {
            return g.fn[Ve] = Xe,
                sn._jQueryInterface
        }
        ;
    var an = "scrollspy"
        , ln = "bs.scrollspy"
        , cn = "." + ln
        , hn = g.fn[an]
        , un = {
            offset: 10,
            method: "auto",
            target: ""
        }
        , fn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
        , dn = {
            ACTIVATE: "activate" + cn,
            SCROLL: "scroll" + cn,
            LOAD_DATA_API: "load" + cn + ".data-api"
        }
        , gn = "dropdown-item"
        , _n = "active"
        , mn = '[data-spy="scroll"]'
        , pn = ".nav, .list-group"
        , vn = ".nav-link"
        , yn = ".nav-item"
        , En = ".list-group-item"
        , Cn = ".dropdown"
        , Tn = ".dropdown-item"
        , Sn = ".dropdown-toggle"
        , bn = "offset"
        , In = "position"
        , Dn = function () {
            function n(t, e) {
                var n = this;
                this._element = t,
                    this._scrollElement = "BODY" === t.tagName ? window : t,
                    this._config = this._getConfig(e),
                    this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn,
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    g(this._scrollElement).on(dn.SCROLL, function (t) {
                        return n._process(t)
                    }),
                    this.refresh(),
                    this._process()
            }
            var t = n.prototype;
            return t.refresh = function () {
                var e = this
                    , t = this._scrollElement === this._scrollElement.window ? bn : In
                    , o = "auto" === this._config.method ? t : this._config.method
                    , r = o === In ? this._getScrollTop() : 0;
                this._offsets = [],
                    this._targets = [],
                    this._scrollHeight = this._getScrollHeight(),
                    [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                        var e, n = _.getSelectorFromElement(t);
                        if (n && (e = document.querySelector(n)),
                            e) {
                            var i = e.getBoundingClientRect();
                            if (i.width || i.height)
                                return [g(e)[o]().top + r, n]
                        }
                        return null
                    }).filter(function (t) {
                        return t
                    }).sort(function (t, e) {
                        return t[0] - e[0]
                    }).forEach(function (t) {
                        e._offsets.push(t[0]),
                            e._targets.push(t[1])
                    })
            }
                ,
                t.dispose = function () {
                    g.removeData(this._element, ln),
                        g(this._scrollElement).off(cn),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                }
                ,
                t._getConfig = function (t) {
                    if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                        var e = g(t.target).attr("id");
                        e || (e = _.getUID(an),
                            g(t.target).attr("id", e)),
                            t.target = "#" + e
                    }
                    return _.typeCheckConfig(an, t, fn),
                        t
                }
                ,
                t._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                ,
                t._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                ,
                t._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
                ,
                t._process = function () {
                    var t = this._getScrollTop() + this._config.offset
                        , e = this._getScrollHeight()
                        , n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(),
                        n <= t) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                            return this._activeTarget = null,
                                void this._clear();
                        for (var o = this._offsets.length; o--;) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                        }
                    }
                }
                ,
                t._activate = function (e) {
                    this._activeTarget = e,
                        this._clear();
                    var t = this._selector.split(",").map(function (t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    })
                        , n = g([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n),
                        n.addClass(_n)) : (n.addClass(_n),
                            n.parents(pn).prev(vn + ", " + En).addClass(_n),
                            n.parents(pn).prev(yn).children(vn).addClass(_n)),
                        g(this._scrollElement).trigger(dn.ACTIVATE, {
                            relatedTarget: e
                        })
                }
                ,
                t._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
                        return t.classList.contains(_n)
                    }).forEach(function (t) {
                        return t.classList.remove(_n)
                    })
                }
                ,
                n._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(ln);
                        if (t || (t = new n(this, "object" == typeof e && e),
                            g(this).data(ln, t)),
                            "string" == typeof e) {
                            if ("undefined" == typeof t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                }
                ,
                s(n, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return un
                    }
                }]),
                n
        }();
    g(window).on(dn.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
            var n = g(t[e]);
            Dn._jQueryInterface.call(n, n.data())
        }
    }),
        g.fn[an] = Dn._jQueryInterface,
        g.fn[an].Constructor = Dn,
        g.fn[an].noConflict = function () {
            return g.fn[an] = hn,
                Dn._jQueryInterface
        }
        ;
    var wn = "bs.tab"
        , An = "." + wn
        , Nn = g.fn.tab
        , On = {
            HIDE: "hide" + An,
            HIDDEN: "hidden" + An,
            SHOW: "show" + An,
            SHOWN: "shown" + An,
            CLICK_DATA_API: "click" + An + ".data-api"
        }
        , kn = "dropdown-menu"
        , Pn = "active"
        , Ln = "disabled"
        , jn = "fade"
        , Hn = "show"
        , Rn = ".dropdown"
        , xn = ".nav, .list-group"
        , Fn = ".active"
        , Un = "> li > .active"
        , Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
        , qn = ".dropdown-toggle"
        , Mn = "> .dropdown-menu .active"
        , Kn = function () {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                    var t, i, e = g(this._element).closest(xn)[0], o = _.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                        i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                    }
                    var s = g.Event(On.HIDE, {
                        relatedTarget: this._element
                    })
                        , a = g.Event(On.SHOW, {
                            relatedTarget: i
                        });
                    if (i && g(i).trigger(s),
                        g(this._element).trigger(a),
                        !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)),
                            this._activate(this._element, e);
                        var l = function () {
                            var t = g.Event(On.HIDDEN, {
                                relatedTarget: n._element
                            })
                                , e = g.Event(On.SHOWN, {
                                    relatedTarget: i
                                });
                            g(i).trigger(t),
                                g(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }
                ,
                t.dispose = function () {
                    g.removeData(this._element, wn),
                        this._element = null
                }
                ,
                t._activate = function (t, e, n) {
                    var i = this
                        , o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0]
                        , r = n && o && g(o).hasClass(jn)
                        , s = function () {
                            return i._transitionComplete(t, o, n)
                        };
                    if (o && r) {
                        var a = _.getTransitionDurationFromElement(o);
                        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else
                        s()
                }
                ,
                t._transitionComplete = function (t, e, n) {
                    if (e) {
                        g(e).removeClass(Pn);
                        var i = g(e.parentNode).find(Mn)[0];
                        i && g(i).removeClass(Pn),
                            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    if (g(t).addClass(Pn),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                        _.reflow(t),
                        t.classList.contains(jn) && t.classList.add(Hn),
                        t.parentNode && g(t.parentNode).hasClass(kn)) {
                        var o = g(t).closest(Rn)[0];
                        if (o) {
                            var r = [].slice.call(o.querySelectorAll(qn));
                            g(r).addClass(Pn)
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }
                ,
                i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this)
                            , e = t.data(wn);
                        if (e || (e = new i(this),
                            t.data(wn, e)),
                            "string" == typeof n) {
                            if ("undefined" == typeof e[n])
                                throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }
                ,
                s(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }]),
                i
        }();
    g(document).on(On.CLICK_DATA_API, Wn, function (t) {
        t.preventDefault(),
            Kn._jQueryInterface.call(g(this), "show")
    }),
        g.fn.tab = Kn._jQueryInterface,
        g.fn.tab.Constructor = Kn,
        g.fn.tab.noConflict = function () {
            return g.fn.tab = Nn,
                Kn._jQueryInterface
        }
        ;
    var Qn = "toast"
        , Bn = "bs.toast"
        , Vn = "." + Bn
        , Yn = g.fn[Qn]
        , zn = {
            CLICK_DISMISS: "click.dismiss" + Vn,
            HIDE: "hide" + Vn,
            HIDDEN: "hidden" + Vn,
            SHOW: "show" + Vn,
            SHOWN: "shown" + Vn
        }
        , Xn = "fade"
        , $n = "hide"
        , Gn = "show"
        , Jn = "showing"
        , Zn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        }
        , ti = {
            animation: !0,
            autohide: !0,
            delay: 500
        }
        , ei = '[data-dismiss="toast"]'
        , ni = function () {
            function i(t, e) {
                this._element = t,
                    this._config = this._getConfig(e),
                    this._timeout = null,
                    this._setListeners()
            }
            var t = i.prototype;
            return t.show = function () {
                var t = this;
                g(this._element).trigger(zn.SHOW),
                    this._config.animation && this._element.classList.add(Xn);
                var e = function () {
                    t._element.classList.remove(Jn),
                        t._element.classList.add(Gn),
                        g(t._element).trigger(zn.SHOWN),
                        t._config.autohide && t.hide()
                };
                if (this._element.classList.remove($n),
                    this._element.classList.add(Jn),
                    this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                } else
                    e()
            }
                ,
                t.hide = function (t) {
                    var e = this;
                    this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE),
                        t ? this._close() : this._timeout = setTimeout(function () {
                            e._close()
                        }, this._config.delay))
                }
                ,
                t.dispose = function () {
                    clearTimeout(this._timeout),
                        this._timeout = null,
                        this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
                        g(this._element).off(zn.CLICK_DISMISS),
                        g.removeData(this._element, Bn),
                        this._element = null,
                        this._config = null
                }
                ,
                t._getConfig = function (t) {
                    return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}),
                        _.typeCheckConfig(Qn, t, this.constructor.DefaultType),
                        t
                }
                ,
                t._setListeners = function () {
                    var t = this;
                    g(this._element).on(zn.CLICK_DISMISS, ei, function () {
                        return t.hide(!0)
                    })
                }
                ,
                t._close = function () {
                    var t = this
                        , e = function () {
                            t._element.classList.add($n),
                                g(t._element).trigger(zn.HIDDEN)
                        };
                    if (this._element.classList.remove(Gn),
                        this._config.animation) {
                        var n = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                    } else
                        e()
                }
                ,
                i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this)
                            , e = t.data(Bn);
                        if (e || (e = new i(this, "object" == typeof n && n),
                            t.data(Bn, e)),
                            "string" == typeof n) {
                            if ("undefined" == typeof e[n])
                                throw new TypeError('No method named "' + n + '"');
                            e[n](this)
                        }
                    })
                }
                ,
                s(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Zn
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ti
                    }
                }]),
                i
        }();
    g.fn[Qn] = ni._jQueryInterface,
        g.fn[Qn].Constructor = ni,
        g.fn[Qn].noConflict = function () {
            return g.fn[Qn] = Yn,
                ni._jQueryInterface
        }
        ,
        function () {
            if ("undefined" == typeof g)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(),
        t.Util = _,
        t.Alert = p,
        t.Button = P,
        t.Carousel = lt,
        t.Collapse = bt,
        t.Dropdown = Jt,
        t.Modal = ve,
        t.Popover = sn,
        t.Scrollspy = Dn,
        t.Tab = Kn,
        t.Toast = ni,
        t.Tooltip = Be,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
});
//# sourceMappingURL=bootstrap.min.js.map

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function () {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName))
            return window.document.body;
        var i = t(e)
            , r = i.overflow
            , p = i.overflowX
            , s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    }
    function r(e) {
        var o = e && e.offsetParent
            , i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
    }
    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }
    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
            , i = o ? e : t
            , n = o ? t : e
            , a = document.createRange();
        a.setStart(i, 0),
            a.setEnd(n, 0);
        var f = a.commonAncestorContainer;
        if (e !== f && t !== f || i.contains(n))
            return p(f) ? f : r(f);
        var l = s(e);
        return l.host ? d(l.host, t) : d(e, s(t).host)
    }
    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
            , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
            , i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = window.document.documentElement
                , r = window.document.scrollingElement || n;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
            , i = a(t, 'top')
            , n = a(t, 'left')
            , r = o ? -1 : 1;
        return e.top += i * r,
            e.bottom += i * r,
            e.left += n * r,
            e.right += n * r,
            e
    }
    function l(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
            , i = 'Left' == o ? 'Right' : 'Bottom';
        return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
    }
    function m(e, t, o, i) {
        return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }
    function h() {
        var e = window.document.body
            , t = window.document.documentElement
            , o = ie() && window.getComputedStyle(t);
        return {
            height: m('Height', e, t, o),
            width: m('Width', e, t, o)
        }
    }
    function c(e) {
        return se({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function g(e) {
        var o = {};
        if (ie())
            try {
                o = e.getBoundingClientRect();
                var i = a(e, 'top')
                    , n = a(e, 'left');
                o.top += i,
                    o.left += n,
                    o.bottom += i,
                    o.right += n
            } catch (e) { }
        else
            o = e.getBoundingClientRect();
        var r = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
            , p = 'HTML' === e.nodeName ? h() : {}
            , s = p.width || e.clientWidth || r.right - r.left
            , d = p.height || e.clientHeight || r.bottom - r.top
            , f = e.offsetWidth - s
            , m = e.offsetHeight - d;
        if (f || m) {
            var g = t(e);
            f -= l(g, 'x'),
                m -= l(g, 'y'),
                r.width -= f,
                r.height -= m
        }
        return c(r)
    }
    function u(e, o) {
        var i = ie()
            , r = 'HTML' === o.nodeName
            , p = g(e)
            , s = g(o)
            , d = n(e)
            , a = t(o)
            , l = +a.borderTopWidth.split('px')[0]
            , m = +a.borderLeftWidth.split('px')[0]
            , h = c({
                top: p.top - s.top - l,
                left: p.left - s.left - m,
                width: p.width,
                height: p.height
            });
        if (h.marginTop = 0,
            h.marginLeft = 0,
            !i && r) {
            var u = +a.marginTop.split('px')[0]
                , b = +a.marginLeft.split('px')[0];
            h.top -= l - u,
                h.bottom -= l - u,
                h.left -= m - b,
                h.right -= m - b,
                h.marginTop = u,
                h.marginLeft = b
        }
        return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)),
            h
    }
    function b(e) {
        var t = window.document.documentElement
            , o = u(e, t)
            , i = _(t.clientWidth, window.innerWidth || 0)
            , n = _(t.clientHeight, window.innerHeight || 0)
            , r = a(t)
            , p = a(t, 'left')
            , s = {
                top: r - o.top + o.marginTop,
                left: p - o.left + o.marginLeft,
                width: i,
                height: n
            };
        return c(s)
    }
    function y(e) {
        var i = e.nodeName;
        return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }
    function w(e, t, i, r) {
        var p = {
            top: 0,
            left: 0
        }
            , s = d(e, t);
        if ('viewport' === r)
            p = b(s);
        else {
            var a;
            'scrollParent' === r ? (a = n(o(e)),
                'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
            var f = u(a, s);
            if ('HTML' === a.nodeName && !y(s)) {
                var l = h()
                    , m = l.height
                    , c = l.width;
                p.top += f.top - f.marginTop,
                    p.bottom = m + f.top,
                    p.left += f.left - f.marginLeft,
                    p.right = c + f.left
            } else
                p = f
        }
        return p.left += i,
            p.top += i,
            p.right -= i,
            p.bottom -= i,
            p
    }
    function v(e) {
        var t = e.width
            , o = e.height;
        return t * o
    }
    function E(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = w(o, i, r, n)
            , s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            }
            , d = Object.keys(s).map(function (e) {
                return se({
                    key: e
                }, s[e], {
                    area: v(s[e])
                })
            }).sort(function (e, t) {
                return t.area - e.area
            })
            , a = d.filter(function (e) {
                var t = e.width
                    , i = e.height;
                return t >= o.clientWidth && i >= o.clientHeight
            })
            , f = 0 < a.length ? a[0].key : d[0].key
            , l = e.split('-')[1];
        return f + (l ? '-' + l : '')
    }
    function x(e, t, o) {
        var i = d(t, o);
        return u(o, i)
    }
    function O(e) {
        var t = window.getComputedStyle(e)
            , o = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
            , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
            , n = {
                width: e.offsetWidth + i,
                height: e.offsetHeight + o
            };
        return n
    }
    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }
    function S(e, t, o) {
        o = o.split('-')[0];
        var i = O(e)
            , n = {
                width: i.width,
                height: i.height
            }
            , r = -1 !== ['right', 'left'].indexOf(o)
            , p = r ? 'top' : 'left'
            , s = r ? 'left' : 'top'
            , d = r ? 'height' : 'width'
            , a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2,
            n[s] = o === s ? t[s] - i[a] : t[L(s)],
            n
    }
    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function C(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === o
            });
        var i = T(e, function (e) {
            return e[t] === o
        });
        return e.indexOf(i)
    }
    function N(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
        return n.forEach(function (t) {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t.function || t.fn;
            t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper),
                o.offsets.reference = c(o.offsets.reference),
                o = i(o, t))
        }),
            o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference),
                e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                e.originalPlacement = e.placement,
                e.offsets.popper = S(this.popper, e.offsets.reference, e.placement),
                e.offsets.popper.position = 'absolute',
                e = N(this.modifiers, e),
                this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                    this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function (e) {
            var o = e.name
                , i = e.enabled;
            return i && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n]
                , r = i ? '' + i + o : e;
            if ('undefined' != typeof window.document.body.style[r])
                return r
        }
        return null
    }
    function D() {
        return this.state.isDestroyed = !0,
            W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
                this.popper.style.left = '',
                this.popper.style.position = '',
                this.popper.style.top = '',
                this.popper.style[B('transform')] = ''),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
    }
    function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName
            , p = r ? window : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
            r || H(n(p.parentNode), t, o, i),
            i.push(p)
    }
    function P(e, t, o, i) {
        o.updateBound = i,
            window.addEventListener('resize', o.updateBound, {
                passive: !0
            });
        var r = n(e);
        return H(r, 'scroll', o.updateBound, o.scrollParents),
            o.scrollElement = r,
            o.eventsEnabled = !0,
            o
    }
    function A() {
        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function M(e, t) {
        return window.removeEventListener('resize', t.updateBound),
            t.scrollParents.forEach(function (e) {
                e.removeEventListener('scroll', t.updateBound)
            }),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t
    }
    function I() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate),
            this.state = M(this.reference, this.state))
    }
    function R(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function U(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'),
                e.style[o] = t[o] + i
        })
    }
    function Y(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function F(e, t, o) {
        var i = T(e, function (e) {
            var o = e.name;
            return o === t
        })
            , n = !!i && e.some(function (e) {
                return e.name === o && e.enabled && e.order < i.order
            });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return n
    }
    function j(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
            , o = ae.indexOf(e)
            , i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i
    }
    function q(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
            , r = +n[1]
            , p = n[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = i;
            }
            var d = c(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0),
                a / 100 * r
        }
        return r
    }
    function G(e, t, o, i) {
        var n = [0, 0]
            , r = -1 !== ['right', 'left'].indexOf(i)
            , p = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            })
            , s = p.indexOf(T(p, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
            , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function (e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width'
                , p = !1;
            return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                    p = !0,
                    e) : p ? (e[e.length - 1] += t,
                        p = !1,
                        e) : e.concat(t)
            }, []).map(function (e) {
                return q(e, n, t, o)
            })
        }),
            a.forEach(function (e, t) {
                e.forEach(function (o, i) {
                    R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
                })
            }),
            n
    }
    for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function (e) {
        return X.some(function (t) {
            return -1 < (e || '').toString().indexOf(t)
        })
    }, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
        if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;
            break
        }
    var i, te = J && Q(window.MutationObserver), oe = te ? function (e) {
        var t = !1
            , o = 0
            , i = document.createElement('span')
            , n = new MutationObserver(function () {
                e(),
                    t = !1
            }
            );
        return n.observe(i, {
            attributes: !0
        }),
            function () {
                t || (t = !0,
                    i.setAttribute('x-index', o),
                    ++o)
            }
    }
        : function (e) {
            var t = !1;
            return function () {
                t || (t = !0,
                    setTimeout(function () {
                        t = !1,
                            e()
                    }, $))
            }
        }
        , ie = function () {
            return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')),
                i
        }, ne = function (e, t) {
            if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
        }, re = function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++)
                    o = t[n],
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
            }
            return function (t, o, i) {
                return o && e(t.prototype, o),
                    i && e(t, i),
                    t
            }
        }(), pe = function (e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
                e
        }, se = Object.assign || function (e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var i in t = arguments[o],
                    t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        , de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], ae = de.slice(3), fe = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        }, le = function () {
            function t(o, i) {
                var n = this
                    , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ne(this, t),
                    this.scheduleUpdate = function () {
                        return requestAnimationFrame(n.update)
                    }
                    ,
                    this.update = oe(this.update.bind(this)),
                    this.options = se({}, t.Defaults, r),
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    },
                    this.reference = o.jquery ? o[0] : o,
                    this.popper = i.jquery ? i[0] : i,
                    this.options.modifiers = {},
                    Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                        n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                    }),
                    this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                        return se({
                            name: e
                        }, n.options.modifiers[e])
                    }).sort(function (e, t) {
                        return e.order - t.order
                    }),
                    this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(),
                    this.state.eventsEnabled = p
            }
            return re(t, [{
                key: 'update',
                value: function () {
                    return k.call(this)
                }
            }, {
                key: 'destroy',
                value: function () {
                    return D.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function () {
                    return A.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function () {
                    return I.call(this)
                }
            }]),
                t
        }();
    return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
        le.placements = de,
        le.Defaults = {
            placement: 'bottom',
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () { },
            onUpdate: function () { },
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement
                            , o = t.split('-')[0]
                            , i = t.split('-')[1];
                        if (i) {
                            var n = e.offsets
                                , r = n.reference
                                , p = n.popper
                                , s = -1 !== ['bottom', 'top'].indexOf(o)
                                , d = s ? 'left' : 'top'
                                , a = s ? 'width' : 'height'
                                , f = {
                                    start: pe({}, d, r[d]),
                                    end: pe({}, d, r[d] + r[a] - p[a])
                                };
                            e.offsets.popper = se({}, p, f[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (e, t) {
                        var o, i = t.offset, n = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = n.split('-')[0];
                        return o = R(+i) ? [+i, 0] : G(i, p, s, d),
                            'left' === d ? (p.top += o[0],
                                p.left -= o[1]) : 'right' === d ? (p.top += o[0],
                                    p.left += o[1]) : 'top' === d ? (p.left += o[0],
                                        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
                                            p.top += o[1]),
                            e.popper = p,
                            e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.boundariesElement || r(e.instance.popper);
                        e.instance.reference === o && (o = r(o));
                        var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                        t.boundaries = i;
                        var n = t.priority
                            , p = e.offsets.popper
                            , s = {
                                primary: function (e) {
                                    var o = p[e];
                                    return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])),
                                        pe({}, e, o)
                                },
                                secondary: function (e) {
                                    var o = 'right' === e ? 'left' : 'top'
                                        , n = p[o];
                                    return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))),
                                        pe({}, o, n)
                                }
                            };
                        return n.forEach(function (e) {
                            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                            p = se({}, p, s[t](e))
                        }),
                            e.offsets.popper = p,
                            e
                    },
                    priority: ['left', 'right', 'top', 'bottom'],
                    padding: 5,
                    boundariesElement: 'scrollParent'
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets
                            , o = t.popper
                            , i = t.reference
                            , n = e.placement.split('-')[0]
                            , r = V
                            , p = -1 !== ['top', 'bottom'].indexOf(n)
                            , s = p ? 'right' : 'bottom'
                            , d = p ? 'left' : 'top'
                            , a = p ? 'width' : 'height';
                        return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]),
                            o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
                            e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, t) {
                        if (!F(e.instance.modifiers, 'arrow', 'keepTogether'))
                            return e;
                        var o = t.element;
                        if ('string' == typeof o) {
                            if (o = e.instance.popper.querySelector(o),
                                !o)
                                return e;
                        } else if (!e.instance.popper.contains(o))
                            return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                                e;
                        var i = e.placement.split('-')[0]
                            , n = e.offsets
                            , r = n.popper
                            , p = n.reference
                            , s = -1 !== ['left', 'right'].indexOf(i)
                            , d = s ? 'height' : 'width'
                            , a = s ? 'top' : 'left'
                            , f = s ? 'left' : 'top'
                            , l = s ? 'bottom' : 'right'
                            , m = O(o)[d];
                        p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)),
                            p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
                        var h = p[a] + p[d] / 2 - m / 2
                            , g = h - c(e.offsets.popper)[a];
                        return g = _(z(r[d] - m, g), 0),
                            e.arrowElement = o,
                            e.offsets.arrow = {},
                            e.offsets.arrow[a] = Math.round(g),
                            e.offsets.arrow[f] = '',
                            e
                    },
                    element: '[x-arrow]'
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (W(e.instance.modifiers, 'inner'))
                            return e;
                        if (e.flipped && e.placement === e.originalPlacement)
                            return e;
                        var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement)
                            , i = e.placement.split('-')[0]
                            , n = L(i)
                            , r = e.placement.split('-')[1] || ''
                            , p = [];
                        switch (t.behavior) {
                            case fe.FLIP:
                                p = [i, n];
                                break;
                            case fe.CLOCKWISE:
                                p = K(i);
                                break;
                            case fe.COUNTERCLOCKWISE:
                                p = K(i, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return p.forEach(function (s, d) {
                            if (i !== s || p.length === d + 1)
                                return e;
                            i = e.placement.split('-')[0],
                                n = L(i);
                            var a = e.offsets.popper
                                , f = e.offsets.reference
                                , l = V
                                , m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom)
                                , h = l(a.left) < l(o.left)
                                , c = l(a.right) > l(o.right)
                                , g = l(a.top) < l(o.top)
                                , u = l(a.bottom) > l(o.bottom)
                                , b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u
                                , y = -1 !== ['top', 'bottom'].indexOf(i)
                                , w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                            (m || b || w) && (e.flipped = !0,
                                (m || b) && (i = p[d + 1]),
                                w && (r = j(r)),
                                e.placement = i + (r ? '-' + r : ''),
                                e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)),
                                e = N(e.instance.modifiers, e, 'flip'))
                        }),
                            e
                    },
                    behavior: 'flip',
                    padding: 5,
                    boundariesElement: 'viewport'
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement
                            , o = t.split('-')[0]
                            , i = e.offsets
                            , n = i.popper
                            , r = i.reference
                            , p = -1 !== ['left', 'right'].indexOf(o)
                            , s = -1 === ['top', 'left'].indexOf(o);
                        return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0),
                            e.placement = L(t),
                            e.offsets.popper = c(n),
                            e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!F(e.instance.modifiers, 'hide', 'preventOverflow'))
                            return e;
                        var t = e.offsets.reference
                            , o = T(e.instance.modifiers, function (e) {
                                return 'preventOverflow' === e.name
                            }).boundaries;
                        if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                            if (!0 === e.hide)
                                return e;
                            e.hide = !0,
                                e.attributes['x-out-of-boundaries'] = ''
                        } else {
                            if (!1 === e.hide)
                                return e;
                            e.hide = !1,
                                e.attributes['x-out-of-boundaries'] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.x
                            , i = t.y
                            , n = e.offsets.popper
                            , p = T(e.instance.modifiers, function (e) {
                                return 'applyStyle' === e.name
                            }).gpuAcceleration;
                        void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                        var s, d, a = void 0 === p ? t.gpuAcceleration : p, f = r(e.instance.popper), l = g(f), m = {
                            position: n.position
                        }, h = {
                            left: V(n.left),
                            top: V(n.top),
                            bottom: V(n.bottom),
                            right: V(n.right)
                        }, c = 'bottom' === o ? 'top' : 'bottom', u = 'right' === i ? 'left' : 'right', b = B('transform');
                        if (d = 'bottom' == c ? -l.height + h.bottom : h.top,
                            s = 'right' == u ? -l.width + h.right : h.left,
                            a && b)
                            m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                                m[c] = 0,
                                m[u] = 0,
                                m.willChange = 'transform';
                        else {
                            var y = 'bottom' == c ? -1 : 1
                                , w = 'right' == u ? -1 : 1;
                            m[c] = d * y,
                                m[u] = s * w,
                                m.willChange = c + ', ' + u
                        }
                        var v = {
                            "x-placement": e.placement
                        };
                        return e.attributes = se({}, v, e.attributes),
                            e.styles = se({}, m, e.styles),
                            e
                    },
                    gpuAcceleration: !0,
                    x: 'bottom',
                    y: 'right'
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return U(e.instance.popper, e.styles),
                            Y(e.instance.popper, e.attributes),
                            e.offsets.arrow && U(e.arrowElement, e.offsets.arrow),
                            e
                    },
                    onLoad: function (e, t, o, i, n) {
                        var r = x(n, t, e)
                            , p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                        return t.setAttribute('x-placement', p),
                            U(t, {
                                position: 'absolute'
                            }),
                            o
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        le
});

/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/
!function ($) {
    "use strict";
    $.fn.meanmenu = function (e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function () {
            var n = e.meanMenuTarget
                , t = e.meanMenuContainer
                , r = e.meanMenuClose
                , i = e.meanMenuCloseSize
                , s = e.meanMenuOpen
                , u = e.meanRevealPosition
                , m = e.meanRevealPositionDistance
                , l = e.meanRevealColour
                , o = e.meanScreenWidth
                , c = e.meanNavPush
                , v = ".meanmenu-reveal"
                , h = e.meanShowChildren
                , d = e.meanExpandableChildren
                , y = e.meanExpand
                , j = e.meanContract
                , Q = e.meanRemoveAttrs
                , f = e.onePage
                , g = e.meanDisplay
                , p = e.removeElements
                , C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0),
                (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = ""
                , x = function () {
                    if ("center" === u) {
                        var e = window.innerWidth || document.documentElement.clientWidth
                            , n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;",
                            C ? jQuery(".meanmenu-reveal").animate({
                                left: n
                            }) : jQuery(".meanmenu-reveal").css("left", n)
                    }
                }
                , A = !1
                , E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"),
                "left" === u && (w = "left:" + m + ";right:auto;"),
                x();
            var M = ""
                , P = function () {
                    M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
                }
                , W = function () {
                    jQuery(".mean-bar,.mean-push").remove(),
                        jQuery(t).removeClass("mean-container"),
                        jQuery(n).css("display", g),
                        A = !1,
                        E = !1,
                        jQuery(p).removeClass("mean-remove")
                }
                , b = function () {
                    var e = "background:" + l + ";color:" + l + ";" + w;
                    if (o >= a) {
                        jQuery(p).addClass("mean-remove"),
                            E = !0,
                            jQuery(t).addClass("mean-container"),
                            jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var r = jQuery(n).html();
                        jQuery(".mean-nav").html(r),
                            Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                                jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"),
                                    jQuery(this).removeAttr("id")
                            }),
                            jQuery(n).before('<div class="mean-push" />'),
                            jQuery(".mean-push").css("margin-top", c),
                            jQuery(n).hide(),
                            jQuery(".meanmenu-reveal").show(),
                            jQuery(v).html(s),
                            M = jQuery(v),
                            jQuery(".mean-nav ul").hide(),
                            h ? d ? (jQuery(".mean-nav ul ul").each(function () {
                                jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                            }),
                                jQuery(".mean-expand").on("click", function (e) {
                                    e.preventDefault(),
                                        jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y),
                                            jQuery(this).prev("ul").slideUp(300, function () { })) : (jQuery(this).text(j),
                                                jQuery(this).prev("ul").slideDown(300, function () { })),
                                        jQuery(this).toggleClass("mean-clicked")
                                })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(),
                            jQuery(".mean-nav ul li").last().addClass("mean-last"),
                            M.removeClass("meanclose"),
                            jQuery(M).click(function (e) {
                                e.preventDefault(),
                                    A === !1 ? (M.css("text-align", "center"),
                                        M.css("text-indent", "0"),
                                        M.css("font-size", i),
                                        jQuery(".mean-nav ul:first").slideDown(),
                                        A = !0) : (jQuery(".mean-nav ul:first").slideUp(),
                                            A = !1),
                                    M.toggleClass("meanclose"),
                                    P(),
                                    jQuery(p).addClass("mean-remove")
                            }),
                            f && jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                                jQuery(".mean-nav ul:first").slideUp(),
                                    A = !1,
                                    jQuery(M).toggleClass("meanclose").html(s)
                            })
                    } else
                        W()
                };
            C || jQuery(window).resize(function () {
                a = window.innerWidth || document.documentElement.clientWidth,
                    a > o,
                    W(),
                    o >= a ? (b(),
                        x()) : W()
            }),
                jQuery(window).resize(function () {
                    a = window.innerWidth || document.documentElement.clientWidth,
                        C ? (x(),
                            o >= a ? E === !1 && b() : W()) : (W(),
                                o >= a && (b(),
                                    x()))
                }),
                b()
        })
    }
}(jQuery);

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e()
}(this, function () {
    "use strict";
    function t(t) {
        return getComputedStyle(t)
    }
    function e(t, e) {
        for (var i in e) {
            var r = e[i];
            "number" == typeof r && (r += "px"),
                t.style[i] = r
        }
        return t
    }
    function i(t) {
        var e = document.createElement("div");
        return e.className = t,
            e
    }
    function r(t, e) {
        if (!v)
            throw new Error("No element matching method supported");
        return v.call(t, e)
    }
    function l(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }
    function n(t, e) {
        return Array.prototype.filter.call(t.children, function (t) {
            return r(t, e)
        })
    }
    function o(t, e) {
        var i = t.element.classList
            , r = m.state.scrolling(e);
        i.contains(r) ? clearTimeout(Y[e]) : i.add(r)
    }
    function s(t, e) {
        Y[e] = setTimeout(function () {
            return t.isAlive && t.element.classList.remove(m.state.scrolling(e))
        }, t.settings.scrollingThreshold)
    }
    function a(t, e) {
        o(t, e),
            s(t, e)
    }
    function c(t) {
        if ("function" == typeof window.CustomEvent)
            return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0),
            e
    }
    function h(t, e, i, r, l) {
        var n = i[0]
            , o = i[1]
            , s = i[2]
            , h = i[3]
            , u = i[4]
            , d = i[5];
        void 0 === r && (r = !0),
            void 0 === l && (l = !1);
        var f = t.element;
        t.reach[h] = null,
            f[s] < 1 && (t.reach[h] = "start"),
            f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"),
            e && (f.dispatchEvent(c("ps-scroll-" + h)),
                e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)),
                r && a(t, h)),
            t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]))
    }
    function u(t) {
        return parseInt(t, 10) || 0
    }
    function d(t) {
        return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]")
    }
    function f(e) {
        var i = t(e);
        return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth)
    }
    function p(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)),
            t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)),
            e
    }
    function b(t, i) {
        var r = {
            width: i.railXWidth
        }
            , l = Math.floor(t.scrollTop);
        i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft,
            i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l,
            e(i.scrollbarXRail, r);
        var n = {
            top: l,
            height: i.railYHeight
        };
        i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft,
            e(i.scrollbarYRail, n),
            e(i.scrollbarX, {
                left: i.scrollbarXLeft,
                width: i.scrollbarXWidth - i.railBorderXWidth
            }),
            e(i.scrollbarY, {
                top: i.scrollbarYTop,
                height: i.scrollbarYHeight - i.railBorderYWidth
            })
    }
    function g(t, e) {
        function i(e) {
            b[d] = g + Y * (e[a] - v),
                o(t, f),
                R(t),
                e.stopPropagation(),
                e.preventDefault()
        }
        function r() {
            s(t, f),
                t[p].classList.remove(m.state.clicking),
                t.event.unbind(t.ownerDocument, "mousemove", i)
        }
        var l = e[0]
            , n = e[1]
            , a = e[2]
            , c = e[3]
            , h = e[4]
            , u = e[5]
            , d = e[6]
            , f = e[7]
            , p = e[8]
            , b = t.element
            , g = null
            , v = null
            , Y = null;
        t.event.bind(t[h], "mousedown", function (e) {
            g = b[d],
                v = e[a],
                Y = (t[n] - t[l]) / (t[c] - t[u]),
                t.event.bind(t.ownerDocument, "mousemove", i),
                t.event.once(t.ownerDocument, "mouseup", r),
                t[p].classList.add(m.state.clicking),
                e.stopPropagation(),
                e.preventDefault()
        })
    }
    var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector)
        , m = {
            main: "ps",
            element: {
                thumb: function (t) {
                    return "ps__thumb-" + t
                },
                rail: function (t) {
                    return "ps__rail-" + t
                },
                consuming: "ps__child--consume"
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function (t) {
                    return "ps--active-" + t
                },
                scrolling: function (t) {
                    return "ps--scrolling-" + t
                }
            }
        }
        , Y = {
            x: null,
            y: null
        }
        , X = function (t) {
            this.element = t,
                this.handlers = {}
        }
        , w = {
            isEmpty: {
                configurable: !0
            }
        };
    X.prototype.bind = function (t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []),
            this.handlers[t].push(e),
            this.element.addEventListener(t, e, !1)
    }
        ,
        X.prototype.unbind = function (t, e) {
            var i = this;
            this.handlers[t] = this.handlers[t].filter(function (r) {
                return !(!e || r === e) || (i.element.removeEventListener(t, r, !1),
                    !1)
            })
        }
        ,
        X.prototype.unbindAll = function () {
            var t = this;
            for (var e in t.handlers)
                t.unbind(e)
        }
        ,
        w.isEmpty.get = function () {
            var t = this;
            return Object.keys(this.handlers).every(function (e) {
                return 0 === t.handlers[e].length
            })
        }
        ,
        Object.defineProperties(X.prototype, w);
    var y = function () {
        this.eventElements = []
    };
    y.prototype.eventElement = function (t) {
        var e = this.eventElements.filter(function (e) {
            return e.element === t
        })[0];
        return e || (e = new X(t),
            this.eventElements.push(e)),
            e
    }
        ,
        y.prototype.bind = function (t, e, i) {
            this.eventElement(t).bind(e, i)
        }
        ,
        y.prototype.unbind = function (t, e, i) {
            var r = this.eventElement(t);
            r.unbind(e, i),
                r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
        }
        ,
        y.prototype.unbindAll = function () {
            this.eventElements.forEach(function (t) {
                return t.unbindAll()
            }),
                this.eventElements = []
        }
        ,
        y.prototype.once = function (t, e, i) {
            var r = this.eventElement(t)
                , l = function (t) {
                    r.unbind(e, l),
                        i(t)
                };
            r.bind(e, l)
        }
        ;
    var W = function (t, e, i, r, l) {
        void 0 === r && (r = !0),
            void 0 === l && (l = !1);
        var n;
        if ("top" === e)
            n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== e)
                throw new Error("A proper axis should be provided");
            n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }
        h(t, i, n, r, l)
    }
        , L = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        }
        , R = function (t) {
            var e = t.element
                , i = Math.floor(e.scrollTop);
            t.containerWidth = e.clientWidth,
                t.containerHeight = e.clientHeight,
                t.contentWidth = e.scrollWidth,
                t.contentHeight = e.scrollHeight,
                e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function (t) {
                    return l(t)
                }),
                    e.appendChild(t.scrollbarXRail)),
                e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function (t) {
                    return l(t)
                }),
                    e.appendChild(t.scrollbarYRail)),
                !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0,
                    t.railXWidth = t.containerWidth - t.railXMarginWidth,
                    t.railXRatio = t.containerWidth / t.railXWidth,
                    t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)),
                    t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1,
                !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0,
                    t.railYHeight = t.containerHeight - t.railYMarginHeight,
                    t.railYRatio = t.containerHeight / t.railYHeight,
                    t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)),
                    t.scrollbarYTop = u(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1,
                t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
                t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
                b(e, t),
                t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")),
                    t.scrollbarXWidth = 0,
                    t.scrollbarXLeft = 0,
                    e.scrollLeft = 0),
                t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")),
                    t.scrollbarYHeight = 0,
                    t.scrollbarYTop = 0,
                    e.scrollTop = 0)
        }
        , T = {
            "click-rail": function (t) {
                t.event.bind(t.scrollbarY, "mousedown", function (t) {
                    return t.stopPropagation()
                }),
                    t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
                        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                        t.element.scrollTop += i * t.containerHeight,
                            R(t),
                            e.stopPropagation()
                    }),
                    t.event.bind(t.scrollbarX, "mousedown", function (t) {
                        return t.stopPropagation()
                    }),
                    t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
                        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                        t.element.scrollLeft += i * t.containerWidth,
                            R(t),
                            e.stopPropagation()
                    })
            },
            "drag-thumb": function (t) {
                g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
                    g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function (t) {
                function e(e, r) {
                    var l = Math.floor(i.scrollTop);
                    if (0 === e) {
                        if (!t.scrollbarYActive)
                            return !1;
                        if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0)
                            return !t.settings.wheelPropagation
                    }
                    var n = i.scrollLeft;
                    if (0 === r) {
                        if (!t.scrollbarXActive)
                            return !1;
                        if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0)
                            return !t.settings.wheelPropagation
                    }
                    return !0
                }
                var i = t.element
                    , l = function () {
                        return r(i, ":hover")
                    }
                    , n = function () {
                        return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus")
                    };
                t.event.bind(t.ownerDocument, "keydown", function (r) {
                    if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) {
                        var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (o) {
                            if ("IFRAME" === o.tagName)
                                o = o.contentDocument.activeElement;
                            else
                                for (; o.shadowRoot;)
                                    o = o.shadowRoot.activeElement;
                            if (d(o))
                                return
                        }
                        var s = 0
                            , a = 0;
                        switch (r.which) {
                            case 37:
                                s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                                break;
                            case 32:
                                a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                                break;
                            case 33:
                                a = t.containerHeight;
                                break;
                            case 34:
                                a = -t.containerHeight;
                                break;
                            case 36:
                                a = t.contentHeight;
                                break;
                            case 35:
                                a = -t.contentHeight;
                                break;
                            default:
                                return
                        }
                        t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a,
                            i.scrollLeft += s,
                            R(t),
                            e(s, a) && r.preventDefault())
                    }
                })
            },
            wheel: function (e) {
                function i(t, i) {
                    var r = Math.floor(o.scrollTop)
                        , l = 0 === o.scrollTop
                        , n = r + o.offsetHeight === o.scrollHeight
                        , s = 0 === o.scrollLeft
                        , a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                    return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation
                }
                function r(t) {
                    var e = t.deltaX
                        , i = -1 * t.deltaY;
                    return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6,
                        i = t.wheelDeltaY / 6),
                        t.deltaMode && 1 === t.deltaMode && (e *= 10,
                            i *= 10),
                        e !== e && i !== i && (e = 0,
                            i = t.wheelDelta),
                        t.shiftKey ? [-i, -e] : [e, i]
                }
                function l(e, i, r) {
                    if (!L.isWebKit && o.querySelector("select:focus"))
                        return !0;
                    if (!o.contains(e))
                        return !1;
                    for (var l = e; l && l !== o;) {
                        if (l.classList.contains(m.element.consuming))
                            return !0;
                        var n = t(l);
                        if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                            var s = l.scrollHeight - l.clientHeight;
                            if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0))
                                return !0;
                            var a = l.scrollWidth - l.clientWidth;
                            if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0))
                                return !0
                        }
                        l = l.parentNode
                    }
                    return !1
                }
                function n(t) {
                    var n = r(t)
                        , s = n[0]
                        , a = n[1];
                    if (!l(t.target, s, a)) {
                        var c = !1;
                        e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed,
                            c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed,
                                c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed,
                                    o.scrollLeft += s * e.settings.wheelSpeed),
                            R(e),
                            (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(),
                                t.preventDefault())
                    }
                }
                var o = e.element;
                void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n)
            },
            touch: function (e) {
                function i(t, i) {
                    var r = Math.floor(h.scrollTop)
                        , l = h.scrollLeft
                        , n = Math.abs(t)
                        , o = Math.abs(i);
                    if (o > n) {
                        if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r)
                            return 0 === window.scrollY && i > 0 && L.isChrome
                    } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l))
                        return !0;
                    return !0
                }
                function r(t, i) {
                    h.scrollTop -= i,
                        h.scrollLeft -= t,
                        R(e)
                }
                function l(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }
                function n(t) {
                    return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                }
                function o(t) {
                    if (n(t)) {
                        var e = l(t);
                        u.pageX = e.pageX,
                            u.pageY = e.pageY,
                            d = (new Date).getTime(),
                            null !== p && clearInterval(p)
                    }
                }
                function s(e, i, r) {
                    if (!h.contains(e))
                        return !1;
                    for (var l = e; l && l !== h;) {
                        if (l.classList.contains(m.element.consuming))
                            return !0;
                        var n = t(l);
                        if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                            var o = l.scrollHeight - l.clientHeight;
                            if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0))
                                return !0;
                            var s = l.scrollLeft - l.clientWidth;
                            if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0))
                                return !0
                        }
                        l = l.parentNode
                    }
                    return !1
                }
                function a(t) {
                    if (n(t)) {
                        var e = l(t)
                            , o = {
                                pageX: e.pageX,
                                pageY: e.pageY
                            }
                            , a = o.pageX - u.pageX
                            , c = o.pageY - u.pageY;
                        if (s(t.target, a, c))
                            return;
                        r(a, c),
                            u = o;
                        var h = (new Date).getTime()
                            , p = h - d;
                        p > 0 && (f.x = a / p,
                            f.y = c / p,
                            d = h),
                            i(a, c) && t.preventDefault()
                    }
                }
                function c() {
                    e.settings.swipeEasing && (clearInterval(p),
                        p = setInterval(function () {
                            e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y),
                                f.x *= .8,
                                f.y *= .8) : clearInterval(p)
                        }, 10))
                }
                if (L.supportsTouch || L.supportsIePointer) {
                    var h = e.element
                        , u = {}
                        , d = 0
                        , f = {}
                        , p = null;
                    L.supportsTouch ? (e.event.bind(h, "touchstart", o),
                        e.event.bind(h, "touchmove", a),
                        e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o),
                            e.event.bind(h, "pointermove", a),
                            e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o),
                                e.event.bind(h, "MSPointerMove", a),
                                e.event.bind(h, "MSPointerUp", c)))
                }
            }
        }
        , H = function (r, l) {
            var n = this;
            if (void 0 === l && (l = {}),
                "string" == typeof r && (r = document.querySelector(r)),
                !r || !r.nodeName)
                throw new Error("no element is specified to initialize PerfectScrollbar");
            this.element = r,
                r.classList.add(m.main),
                this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                };
            for (var o in l)
                n.settings[o] = l[o];
            this.containerWidth = null,
                this.containerHeight = null,
                this.contentWidth = null,
                this.contentHeight = null;
            var s = function () {
                return r.classList.add(m.state.focus)
            }
                , a = function () {
                    return r.classList.remove(m.state.focus)
                };
            this.isRtl = "rtl" === t(r).direction,
                this.isNegativeScroll = function () {
                    var t = r.scrollLeft
                        , e = null;
                    return r.scrollLeft = -1,
                        e = r.scrollLeft < 0,
                        r.scrollLeft = t,
                        e
                }(),
                this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0,
                this.event = new y,
                this.ownerDocument = r.ownerDocument || document,
                this.scrollbarXRail = i(m.element.rail("x")),
                r.appendChild(this.scrollbarXRail),
                this.scrollbarX = i(m.element.thumb("x")),
                this.scrollbarXRail.appendChild(this.scrollbarX),
                this.scrollbarX.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarX, "focus", s),
                this.event.bind(this.scrollbarX, "blur", a),
                this.scrollbarXActive = null,
                this.scrollbarXWidth = null,
                this.scrollbarXLeft = null;
            var c = t(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(c.bottom, 10),
                isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1,
                    this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0,
                this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth),
                e(this.scrollbarXRail, {
                    display: "block"
                }),
                this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight),
                e(this.scrollbarXRail, {
                    display: ""
                }),
                this.railXWidth = null,
                this.railXRatio = null,
                this.scrollbarYRail = i(m.element.rail("y")),
                r.appendChild(this.scrollbarYRail),
                this.scrollbarY = i(m.element.thumb("y")),
                this.scrollbarYRail.appendChild(this.scrollbarY),
                this.scrollbarY.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarY, "focus", s),
                this.event.bind(this.scrollbarY, "blur", a),
                this.scrollbarYActive = null,
                this.scrollbarYHeight = null,
                this.scrollbarYTop = null;
            var h = t(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(h.right, 10),
                isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1,
                    this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0,
                this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null,
                this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth),
                e(this.scrollbarYRail, {
                    display: "block"
                }),
                this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom),
                e(this.scrollbarYRail, {
                    display: ""
                }),
                this.railYHeight = null,
                this.railYRatio = null,
                this.reach = {
                    x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                },
                this.isAlive = !0,
                this.settings.handlers.forEach(function (t) {
                    return T[t](n)
                }),
                this.lastScrollTop = Math.floor(r.scrollTop),
                this.lastScrollLeft = r.scrollLeft,
                this.event.bind(this.element, "scroll", function (t) {
                    return n.onScroll(t)
                }),
                R(this)
        };
    return H.prototype.update = function () {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0,
            e(this.scrollbarXRail, {
                display: "block"
            }),
            e(this.scrollbarYRail, {
                display: "block"
            }),
            this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight),
            this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom),
            e(this.scrollbarXRail, {
                display: "none"
            }),
            e(this.scrollbarYRail, {
                display: "none"
            }),
            R(this),
            W(this, "top", 0, !1, !0),
            W(this, "left", 0, !1, !0),
            e(this.scrollbarXRail, {
                display: ""
            }),
            e(this.scrollbarYRail, {
                display: ""
            }))
    }
        ,
        H.prototype.onScroll = function (t) {
            this.isAlive && (R(this),
                W(this, "top", this.element.scrollTop - this.lastScrollTop),
                W(this, "left", this.element.scrollLeft - this.lastScrollLeft),
                this.lastScrollTop = Math.floor(this.element.scrollTop),
                this.lastScrollLeft = this.element.scrollLeft)
        }
        ,
        H.prototype.destroy = function () {
            this.isAlive && (this.event.unbindAll(),
                l(this.scrollbarX),
                l(this.scrollbarY),
                l(this.scrollbarXRail),
                l(this.scrollbarYRail),
                this.removePsClasses(),
                this.element = null,
                this.scrollbarX = null,
                this.scrollbarY = null,
                this.scrollbarXRail = null,
                this.scrollbarYRail = null,
                this.isAlive = !1)
        }
        ,
        H.prototype.removePsClasses = function () {
            this.element.className = this.element.className.split(" ").filter(function (t) {
                return !t.match(/^ps([-_].+|)$/)
            }).join(" ")
        }
        ,
        H
});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}
)(function (i) {
    "use strict";
    var e = window.Slick || {};
    e = function () {
        function e(e, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(e),
                appendDots: i(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
                n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                },
                i.extend(n, n.initials),
                n.activeBreakpoint = null,
                n.animType = null,
                n.animProp = null,
                n.breakpoints = [],
                n.breakpointSettings = [],
                n.cssTransitions = !1,
                n.focussed = !1,
                n.interrupted = !1,
                n.hidden = "hidden",
                n.paused = !0,
                n.positionProp = null,
                n.respondTo = null,
                n.rowCount = 1,
                n.shouldClick = !0,
                n.$slider = i(e),
                n.$slidesCache = null,
                n.transformType = null,
                n.transitionType = null,
                n.visibilityChange = "visibilitychange",
                n.windowWidth = 0,
                n.windowTimer = null,
                s = i(e).data("slick") || {},
                n.options = i.extend({}, n.defaults, o, s),
                n.currentSlide = n.options.initialSlide,
                n.originalSettings = n.options,
                "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden",
                    n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden",
                        n.visibilityChange = "webkitvisibilitychange"),
                n.autoPlay = i.proxy(n.autoPlay, n),
                n.autoPlayClear = i.proxy(n.autoPlayClear, n),
                n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
                n.changeSlide = i.proxy(n.changeSlide, n),
                n.clickHandler = i.proxy(n.clickHandler, n),
                n.selectHandler = i.proxy(n.selectHandler, n),
                n.setPosition = i.proxy(n.setPosition, n),
                n.swipeHandler = i.proxy(n.swipeHandler, n),
                n.dragHandler = i.proxy(n.dragHandler, n),
                n.keyHandler = i.proxy(n.keyHandler, n),
                n.instanceUid = t++,
                n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                n.registerBreakpoints(),
                n.init(!0)
        }
        var t = 0;
        return e
    }(),
        e.prototype.activateADA = function () {
            var i = this;
            i.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }
        ,
        e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
            var s = this;
            if ("boolean" == typeof t)
                o = t,
                    t = null;
            else if (t < 0 || t >= s.slideCount)
                return !1;
            s.unload(),
                "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
                s.$slides = s.$slideTrack.children(this.options.slide),
                s.$slideTrack.children(this.options.slide).detach(),
                s.$slideTrack.append(s.$slides),
                s.$slides.each(function (e, t) {
                    i(t).attr("data-slick-index", e)
                }),
                s.$slidesCache = s.$slides,
                s.reinit()
        }
        ,
        e.prototype.animateHeight = function () {
            var i = this;
            if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({
                    height: e
                }, i.options.speed)
            }
        }
        ,
        e.prototype.animateSlide = function (e, t) {
            var o = {}
                , s = this;
            s.animateHeight(),
                s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
                s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
                    left: e
                }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                    top: e
                }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
                    i({
                        animStart: s.currentLeft
                    }).animate({
                        animStart: e
                    }, {
                        duration: s.options.speed,
                        easing: s.options.easing,
                        step: function (i) {
                            i = Math.ceil(i),
                                s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)",
                                    s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                                        s.$slideTrack.css(o))
                        },
                        complete: function () {
                            t && t.call()
                        }
                    })) : (s.applyTransition(),
                        e = Math.ceil(e),
                        s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
                        s.$slideTrack.css(o),
                        t && setTimeout(function () {
                            s.disableTransition(),
                                t.call()
                        }, s.options.speed))
        }
        ,
        e.prototype.getNavTarget = function () {
            var e = this
                , t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)),
                t
        }
        ,
        e.prototype.asNavFor = function (e) {
            var t = this
                , o = t.getNavTarget();
            null !== o && "object" == typeof o && o.each(function () {
                var t = i(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0)
            })
        }
        ,
        e.prototype.applyTransition = function (i) {
            var e = this
                , t = {};
            e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
                e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
        }
        ,
        e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
        }
        ,
        e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer)
        }
        ,
        e.prototype.autoPlayIterator = function () {
            var i = this
                , e = i.currentSlide + i.options.slidesToScroll;
            i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
                i.currentSlide - 1 === 0 && (i.direction = 1))),
                i.slideHandler(e))
        }
        ,
        e.prototype.buildArrows = function () {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
                e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
                e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                    e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                    e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                        "aria-disabled": "true",
                        tabindex: "-1"
                    }))
        }
        ,
        e.prototype.buildDots = function () {
            var e, t, o = this;
            if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
                for (o.$slider.addClass("slick-dotted"),
                    t = i("<ul />").addClass(o.options.dotsClass),
                    e = 0; e <= o.getDotCount(); e += 1)
                    t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                o.$dots = t.appendTo(o.options.appendDots),
                    o.$dots.find("li").first().addClass("slick-active")
            }
        }
        ,
        e.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                e.slideCount = e.$slides.length,
                e.$slides.each(function (e, t) {
                    i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
                }),
                e.$slider.addClass("slick-slider"),
                e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
                e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                e.$slideTrack.css("opacity", 0),
                e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.options.draggable === !0 && e.$list.addClass("draggable")
        }
        ,
        e.prototype.buildRows = function () {
            var i, e, t, o, s, n, r, l = this;
            if (o = document.createDocumentFragment(),
                n = l.$slider.children(),
                l.options.rows > 0) {
                for (r = l.options.slidesPerRow * l.options.rows,
                    s = Math.ceil(n.length / r),
                    i = 0; i < s; i++) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c))
                        }
                        d.appendChild(a)
                    }
                    o.appendChild(d)
                }
                l.$slider.empty().append(o),
                    l.$slider.children().children().children().css({
                        width: 100 / l.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
            }
        }
        ,
        e.prototype.checkResponsive = function (e, t) {
            var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
            if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
                    "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
                        e === !0 && (r.currentSlide = r.options.initialSlide),
                        r.refresh(e)),
                    l = s) : (r.activeBreakpoint = s,
                        "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
                            e === !0 && (r.currentSlide = r.options.initialSlide),
                            r.refresh(e)),
                        l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
                            r.options = r.originalSettings,
                            e === !0 && (r.currentSlide = r.options.initialSlide),
                            r.refresh(e),
                            l = s),
                    e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
            }
        }
        ,
        e.prototype.changeSlide = function (e, t) {
            var o, s, n, r = this, l = i(e.currentTarget);
            switch (l.is("a") && e.preventDefault(),
            l.is("li") || (l = l.closest("li")),
            n = r.slideCount % r.options.slidesToScroll !== 0,
            o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
            e.data.message) {
                case "previous":
                    s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
                        r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    s = 0 === o ? r.options.slidesToScroll : o,
                        r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return
            }
        }
        ,
        e.prototype.checkNavigable = function (i) {
            var e, t, o = this;
            if (e = o.getNavigableIndexes(),
                t = 0,
                i > e[e.length - 1])
                i = e[e.length - 1];
            else
                for (var s in e) {
                    if (i < e[s]) {
                        i = t;
                        break
                    }
                    t = e[s]
                }
            return i
        }
        ,
        e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                    e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
                i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }
        ,
        e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
        }
        ,
        e.prototype.cleanUpRows = function () {
            var i, e = this;
            e.options.rows > 0 && (i = e.$slides.children().children(),
                i.removeAttr("style"),
                e.$slider.empty().append(i))
        }
        ,
        e.prototype.clickHandler = function (i) {
            var e = this;
            e.shouldClick === !1 && (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault())
        }
        ,
        e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                t.touchObject = {},
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
                t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
                t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                    i(this).attr("style", i(this).data("originalStyling"))
                }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                t.unslicked = !0,
                e || t.$slider.trigger("destroy", [t])
        }
        ,
        e.prototype.disableTransition = function (i) {
            var e = this
                , t = {};
            t[e.transitionType] = "",
                e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
        }
        ,
        e.prototype.fadeSlide = function (i, e) {
            var t = this;
            t.cssTransitions === !1 ? (t.$slides.eq(i).css({
                zIndex: t.options.zIndex
            }),
                t.$slides.eq(i).animate({
                    opacity: 1
                }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
                    t.$slides.eq(i).css({
                        opacity: 1,
                        zIndex: t.options.zIndex
                    }),
                    e && setTimeout(function () {
                        t.disableTransition(i),
                            e.call()
                    }, t.options.speed))
        }
        ,
        e.prototype.fadeSlideOut = function (i) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(i).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(i),
                e.$slides.eq(i).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }))
        }
        ,
        e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
            var e = this;
            null !== i && (e.$slidesCache = e.$slides,
                e.unload(),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                e.reinit())
        }
        ,
        e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (t) {
                var o = i(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0,
                        e.autoPlay())
                }, 0)
            }).on("blur.slick", "*", function (t) {
                i(this);
                e.options.pauseOnFocus && (e.focussed = !1,
                    e.autoPlay())
            })
        }
        ,
        e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            var i = this;
            return i.currentSlide
        }
        ,
        e.prototype.getDotCount = function () {
            var i = this
                , e = 0
                , t = 0
                , o = 0;
            if (i.options.infinite === !0)
                if (i.slideCount <= i.options.slidesToShow)
                    ++o;
                else
                    for (; e < i.slideCount;)
                        ++o,
                            e = t + i.options.slidesToScroll,
                            t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else if (i.options.centerMode === !0)
                o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount;)
                    ++o,
                        e = t + i.options.slidesToScroll,
                        t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else
                o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            return o - 1
        }
        ,
        e.prototype.getLeft = function (i) {
            var e, t, o, s, n = this, r = 0;
            return n.slideOffset = 0,
                t = n.$slides.first().outerHeight(!0),
                n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
                    s = -1,
                    n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
                    r = t * n.options.slidesToShow * s),
                    n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
                        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
                            r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
                                r = (i + n.options.slidesToShow - n.slideCount) * t),
                n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
                    r = 0),
                n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0,
                    n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
                e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
                n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
                    e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0,
                    n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
                        e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0,
                        e += (n.$list.width() - o.outerWidth()) / 2)),
                e
        }
        ,
        e.prototype.getOption = e.prototype.slickGetOption = function (i) {
            var e = this;
            return e.options[i]
        }
        ,
        e.prototype.getNavigableIndexes = function () {
            var i, e = this, t = 0, o = 0, s = [];
            for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1,
                o = e.options.slidesToScroll * -1,
                i = 2 * e.slideCount); t < i;)
                s.push(t),
                    t = o + e.options.slidesToScroll,
                    o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }
        ,
        e.prototype.getSlick = function () {
            return this
        }
        ,
        e.prototype.getSlideCount = function () {
            var e, t, o, s, n = this;
            return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0,
                o = n.swipeLeft * -1 + s,
                n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
                    var r, l, d;
                    if (r = i(s).outerWidth(),
                        l = s.offsetLeft,
                        n.options.centerMode !== !0 && (l += r / 2),
                        d = l + r,
                        o < d)
                        return t = s,
                            !1
                }),
                    e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }
        ,
        e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
            var t = this;
            t.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(i)
                }
            }, e)
        }
        ,
        e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                t.options.accessibility === !0 && t.initADA(),
                t.options.autoplay && (t.paused = !1,
                    t.autoPlay())
        }
        ,
        e.prototype.initADA = function () {
            var e = this
                , t = Math.ceil(e.slideCount / e.options.slidesToShow)
                , o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }),
                null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
                    var s = o.indexOf(t);
                    if (i(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + e.instanceUid + t,
                        tabindex: -1
                    }),
                        s !== -1) {
                        var n = "slick-slide-control" + e.instanceUid + s;
                        i("#" + n).length && i(this).attr({
                            "aria-describedby": n
                        })
                    }
                }),
                    e.$dots.attr("role", "tablist").find("li").each(function (s) {
                        var n = o[s];
                        i(this).attr({
                            role: "presentation"
                        }),
                            i(this).find("button").first().attr({
                                role: "tab",
                                id: "slick-slide-control" + e.instanceUid + s,
                                "aria-controls": "slick-slide" + e.instanceUid + n,
                                "aria-label": s + 1 + " of " + t,
                                "aria-selected": null,
                                tabindex: "-1"
                            })
                    }).eq(e.currentSlide).find("button").attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }).end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
                e.options.focusOnChange ? e.$slides.eq(s).attr({
                    tabindex: "0"
                }) : e.$slides.eq(s).removeAttr("tabindex");
            e.activateADA()
        }
        ,
        e.prototype.initArrowEvents = function () {
            var i = this;
            i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, i.changeSlide),
                i.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, i.changeSlide),
                i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler),
                    i.$nextArrow.on("keydown.slick", i.keyHandler)))
        }
        ,
        e.prototype.initDotEvents = function () {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide),
                e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)),
                e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
        }
        ,
        e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
        }
        ,
        e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, e.swipeHandler),
                e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, e.swipeHandler),
                e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, e.swipeHandler),
                e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, e.swipeHandler),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
                i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
                i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                i(e.setPosition)
        }
        ,
        e.prototype.initUI = function () {
            var i = this;
            i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
                i.$nextArrow.show()),
                i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
        }
        ,
        e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }
        ,
        e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this)
                        , t = i(this).attr("data-lazy")
                        , o = i(this).attr("data-srcset")
                        , s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes")
                        , n = document.createElement("img");
                    n.onload = function () {
                        e.animate({
                            opacity: 0
                        }, 100, function () {
                            o && (e.attr("srcset", o),
                                s && e.attr("sizes", s)),
                                e.attr("src", t).animate({
                                    opacity: 1
                                }, 200, function () {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                }),
                                r.$slider.trigger("lazyLoaded", [r, e, t])
                        })
                    }
                        ,
                        n.onerror = function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                r.$slider.trigger("lazyLoadError", [r, e, t])
                        }
                        ,
                        n.src = t
                })
            }
            var t, o, s, n, r = this;
            if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1),
                n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)),
                    n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide,
                        n = Math.ceil(s + r.options.slidesToShow),
                        r.options.fade === !0 && (s > 0 && s--,
                            n <= r.slideCount && n++)),
                t = r.$slider.find(".slick-slide").slice(s, n),
                "anticipated" === r.options.lazyLoad)
                for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++)
                    l < 0 && (l = r.slideCount - 1),
                        t = t.add(a.eq(l)),
                        t = t.add(a.eq(d)),
                        l--,
                        d++;
            e(t),
                r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"),
                    e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow),
                        e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1),
                            e(o))
        }
        ,
        e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({
                    opacity: 1
                }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
        }
        ,
        e.prototype.next = e.prototype.slickNext = function () {
            var i = this;
            i.changeSlide({
                data: {
                    message: "next"
                }
            })
        }
        ,
        e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(),
                i.setPosition()
        }
        ,
        e.prototype.pause = e.prototype.slickPause = function () {
            var i = this;
            i.autoPlayClear(),
                i.paused = !0
        }
        ,
        e.prototype.play = e.prototype.slickPlay = function () {
            var i = this;
            i.autoPlay(),
                i.options.autoplay = !0,
                i.paused = !1,
                i.focussed = !1,
                i.interrupted = !1
        }
        ,
        e.prototype.postSlide = function (e) {
            var t = this;
            if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]),
                t.animating = !1,
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                t.swipeLeft = null,
                t.options.autoplay && t.autoPlay(),
                t.options.accessibility === !0 && (t.initADA(),
                    t.options.focusOnChange))) {
                var o = i(t.$slides.get(t.currentSlide));
                o.attr("tabindex", 0).focus()
            }
        }
        ,
        e.prototype.prev = e.prototype.slickPrev = function () {
            var i = this;
            i.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }
        ,
        e.prototype.preventDefault = function (i) {
            i.preventDefault()
        }
        ,
        e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
            d.length ? (t = d.first(),
                o = t.attr("data-lazy"),
                s = t.attr("data-srcset"),
                n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
                r = document.createElement("img"),
                r.onload = function () {
                    s && (t.attr("srcset", s),
                        n && t.attr("sizes", n)),
                        t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                        l.options.adaptiveHeight === !0 && l.setPosition(),
                        l.$slider.trigger("lazyLoaded", [l, t, o]),
                        l.progressiveLazyLoad()
                }
                ,
                r.onerror = function () {
                    e < 3 ? setTimeout(function () {
                        l.progressiveLazyLoad(e + 1)
                    }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                        l.$slider.trigger("lazyLoadError", [l, t, o]),
                        l.progressiveLazyLoad())
                }
                ,
                r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
        }
        ,
        e.prototype.refresh = function (e) {
            var t, o, s = this;
            o = s.slideCount - s.options.slidesToShow,
                !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                t = s.currentSlide,
                s.destroy(!0),
                i.extend(s, s.initials, {
                    currentSlide: t
                }),
                s.init(),
                e || s.changeSlide({
                    data: {
                        message: "index",
                        index: t
                    }
                }, !1)
        }
        ,
        e.prototype.registerBreakpoints = function () {
            var e, t, o, s = this, n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (o = s.breakpoints.length - 1,
                        n.hasOwnProperty(e)) {
                        for (t = n[e].breakpoint; o >= 0;)
                            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            s.breakpointSettings[t] = n[e].settings
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i
                })
            }
        }
        ,
        e.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
                e.slideCount = e.$slides.length,
                e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.setPosition(),
                e.focusHandler(),
                e.paused = !e.options.autoplay,
                e.autoPlay(),
                e.$slider.trigger("reInit", [e])
        }
        ,
        e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
                e.windowDelay = window.setTimeout(function () {
                    e.windowWidth = i(window).width(),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition()
                }, 50))
        }
        ,
        e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
            var o = this;
            return "boolean" == typeof i ? (e = i,
                i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i,
                !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(),
                    t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
                    o.$slides = o.$slideTrack.children(this.options.slide),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    o.$slidesCache = o.$slides,
                    void o.reinit())
        }
        ,
        e.prototype.setCSS = function (i) {
            var e, t, o = this, s = {};
            o.options.rtl === !0 && (i = -i),
                e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
                t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
                s[o.positionProp] = i,
                o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {},
                    o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")",
                        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
                            o.$slideTrack.css(s)))
        }
        ,
        e.prototype.setDimensions = function () {
            var i = this;
            i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
                padding: "0px " + i.options.centerPadding
            }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
                i.options.centerMode === !0 && i.$list.css({
                    padding: i.options.centerPadding + " 0px"
                })),
                i.listWidth = i.$list.width(),
                i.listHeight = i.$list.height(),
                i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
                    i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
                        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
        }
        ,
        e.prototype.setFade = function () {
            var e, t = this;
            t.$slides.each(function (o, s) {
                e = t.slideWidth * o * -1,
                    t.options.rtl === !0 ? i(s).css({
                        position: "relative",
                        right: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    }) : i(s).css({
                        position: "relative",
                        left: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    })
            }),
                t.$slides.eq(t.currentSlide).css({
                    zIndex: t.options.zIndex - 1,
                    opacity: 1
                })
        }
        ,
        e.prototype.setHeight = function () {
            var i = this;
            if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e)
            }
        }
        ,
        e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e, t, o, s, n, r = this, l = !1;
            if ("object" === i.type(arguments[0]) ? (o = arguments[0],
                l = arguments[1],
                n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
                    s = arguments[1],
                    l = arguments[2],
                    "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")),
                "single" === n)
                r.options[o] = s;
            else if ("multiple" === n)
                i.each(o, function (i, e) {
                    r.options[i] = e
                });
            else if ("responsive" === n)
                for (t in s)
                    if ("array" !== i.type(r.options.responsive))
                        r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;)
                            r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                                e--;
                        r.options.responsive.push(s[t])
                    }
            l && (r.unload(),
                r.reinit())
        }
        ,
        e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
                i.$slider.trigger("setPosition", [i])
        }
        ,
        e.prototype.setProps = function () {
            var i = this
                , e = document.body.style;
            i.positionProp = i.options.vertical === !0 ? "top" : "left",
                "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
                void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0),
                i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
                void 0 !== e.OTransform && (i.animType = "OTransform",
                    i.transformType = "-o-transform",
                    i.transitionType = "OTransition",
                    void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
                void 0 !== e.MozTransform && (i.animType = "MozTransform",
                    i.transformType = "-moz-transform",
                    i.transitionType = "MozTransition",
                    void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
                void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
                    i.transformType = "-webkit-transform",
                    i.transitionType = "webkitTransition",
                    void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
                void 0 !== e.msTransform && (i.animType = "msTransform",
                    i.transformType = "-ms-transform",
                    i.transitionType = "msTransition",
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform",
                    i.transformType = "transform",
                    i.transitionType = "transition"),
                i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
        }
        ,
        e.prototype.setSlideClasses = function (i) {
            var e, t, o, s, n = this;
            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                n.$slides.eq(i).addClass("slick-current"),
                n.options.centerMode === !0) {
                var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
                e = Math.floor(n.options.slidesToShow / 2),
                    n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
                        t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
                        0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center")
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
                    o = n.options.infinite === !0 ? n.options.slidesToShow + i : i,
                    n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
        }
        ,
        e.prototype.setupInfinite = function () {
            var e, t, o, s = this;
            if (s.options.fade === !0 && (s.options.centerMode = !1),
                s.options.infinite === !0 && s.options.fade === !1 && (t = null,
                    s.slideCount > s.options.slidesToShow)) {
                for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow,
                    e = s.slideCount; e > s.slideCount - o; e -= 1)
                    t = e - 1,
                        i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    t = e,
                        i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    i(this).attr("id", "")
                })
            }
        }
        ,
        e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(),
                e.interrupted = i
        }
        ,
        e.prototype.selectHandler = function (e) {
            var t = this
                , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
                , s = parseInt(o.attr("data-slick-index"));
            return s || (s = 0),
                t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s)
        }
        ,
        e.prototype.slideHandler = function (i, e, t) {
            var o, s, n, r, l, d = null, a = this;
            if (e = e || !1,
                !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i))
                return e === !1 && a.asNavFor(i),
                    o = i,
                    d = a.getLeft(o),
                    r = a.getLeft(a.currentSlide),
                    a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
                    a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide,
                        t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
                            a.postSlide(o)
                        }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide,
                            t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
                                a.postSlide(o)
                            }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer),
                                s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o,
                                a.animating = !0,
                                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                                n = a.currentSlide,
                                a.currentSlide = s,
                                a.setSlideClasses(a.currentSlide),
                                a.options.asNavFor && (l = a.getNavTarget(),
                                    l = l.slick("getSlick"),
                                    l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)),
                                a.updateDots(),
                                a.updateArrows(),
                                a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n),
                                    a.fadeSlide(s, function () {
                                        a.postSlide(s)
                                    })) : a.postSlide(s),
                                    void a.animateHeight()) : void (t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function () {
                                        a.postSlide(s)
                                    }) : a.postSlide(s)))
        }
        ,
        e.prototype.startLoad = function () {
            var i = this;
            i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
                i.$nextArrow.hide()),
                i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
                i.$slider.addClass("slick-loading")
        }
        ,
        e.prototype.swipeDirection = function () {
            var i, e, t, o, s = this;
            return i = s.touchObject.startX - s.touchObject.curX,
                e = s.touchObject.startY - s.touchObject.curY,
                t = Math.atan2(e, i),
                o = Math.round(180 * t / Math.PI),
                o < 0 && (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
        }
        ,
        e.prototype.swipeEnd = function (i) {
            var e, t, o = this;
            if (o.dragging = !1,
                o.swiping = !1,
                o.scrolling)
                return o.scrolling = !1,
                    !1;
            if (o.interrupted = !1,
                o.shouldClick = !(o.touchObject.swipeLength > 10),
                void 0 === o.touchObject.curX)
                return !1;
            if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (t = o.swipeDirection()) {
                    case "left":
                    case "down":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                            o.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                            o.currentDirection = 1
                }
                "vertical" != t && (o.slideHandler(e),
                    o.touchObject = {},
                    o.$slider.trigger("swipe", [o, t]))
            } else
                o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
                    o.touchObject = {})
        }
        ,
        e.prototype.swipeHandler = function (i) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1))
                switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
                e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
                e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                i.data.action) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i)
                }
        }
        ,
        e.prototype.swipeMove = function (i) {
            var e, t, o, s, n, r, l = this;
            return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
                !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
                    l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
                    l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
                    l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
                    r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
                    !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
                        !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r),
                            t = l.swipeDirection(),
                            void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
                                i.preventDefault()),
                            s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
                            l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                            o = l.touchObject.swipeLength,
                            l.touchObject.edgeHit = !1,
                            l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
                                l.touchObject.edgeHit = !0),
                            l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
                            l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
                            l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null,
                                !1) : void l.setCSS(l.swipeLeft))))
        }
        ,
        e.prototype.swipeStart = function (i) {
            var e, t = this;
            return t.interrupted = !0,
                1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {},
                    !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
                        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
                        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
                        void (t.dragging = !0))
        }
        ,
        e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var i = this;
            null !== i.$slidesCache && (i.unload(),
                i.$slideTrack.children(this.options.slide).detach(),
                i.$slidesCache.appendTo(i.$slideTrack),
                i.reinit())
        }
        ,
        e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }
        ,
        e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]),
                e.destroy()
        }
        ,
        e.prototype.updateArrows = function () {
            var i, e = this;
            i = Math.floor(e.options.slidesToShow / 2),
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                            e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }
        ,
        e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
        }
        ,
        e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
        }
        ,
        i.fn.slick = function () {
            var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
            for (i = 0; i < r; i++)
                if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n),
                    "undefined" != typeof t)
                    return t;
            return o
        }
});

/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi
*/
//(function ($) {
//    "use strict";
//    $.ajaxChimp = {
//        responses: {
//            "We have sent you a confirmation email": 0,
//            "Please enter a value": 1,
//            "An email address must contain a single @": 2,
//            "The domain portion of the email address is invalid (the portion after the @: )": 3,
//            "The username portion of the email address is invalid (the portion before the @: )": 4,
//            "This email address looks fake or invalid. Please enter a real email address": 5
//        },
//        translations: {
//            en: null
//        },
//        init: function (selector, options) {
//            $(selector).ajaxChimp(options)
//        }
//    };
//    $.fn.ajaxChimp = function (options) {
//        $(this).each(function (i, elem) {
//            var form = $(elem);
//            var email = form.find("input[type=email]");
//            var label = form.find("label[for=" + email.attr("id") + "]");
//            var settings = $.extend({
//                url: form.attr("action"),
//                language: "en"
//            }, options);
//            var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
//            form.attr("novalidate", "true");
//            email.attr("name", "EMAIL");
//            form.submit(function () {
//                var msg;
//                function successCallback(resp) {
//                    if (resp.result === "success") {
//                        msg = "We have sent you a confirmation email";
//                        label.removeClass("error").addClass("valid");
//                        email.removeClass("error").addClass("valid")
//                    } else {
//                        email.removeClass("valid").addClass("error");
//                        label.removeClass("valid").addClass("error");
//                        var index = -1;
//                        try {
//                            var parts = resp.msg.split(" - ", 2);
//                            if (parts[1] === undefined) {
//                                msg = resp.msg
//                            } else {
//                                var i = parseInt(parts[0], 10);
//                                if (i.toString() === parts[0]) {
//                                    index = parts[0];
//                                    msg = parts[1]
//                                } else {
//                                    index = -1;
//                                    msg = resp.msg
//                                }
//                            }
//                        } catch (e) {
//                            index = -1;
//                            msg = resp.msg
//                        }
//                    }
//                    if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
//                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
//                    }
//                    label.html(msg);
//                    label.show(2e3);
//                    if (settings.callback) {
//                        settings.callback(resp)
//                    }
//                }
//                var data = {};
//                var dataArray = form.serializeArray();
//                $.each(dataArray, function (index, item) {
//                    data[item.name] = item.value
//                });
//                $.ajax({
//                    url: url,
//                    data: data,
//                    success: successCallback,
//                    dataType: "jsonp",
//                    error: function (resp, text) {
//                        console.log("mailchimp ajax submit error: " + text)
//                    }
//                });
//                var submitMsg = "Submitting...";
//                if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
//                    submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
//                }
//                label.html(submitMsg).show(2e3);
//                return false
//            })
//        });
//        return this
//    }
//}
//)(jQuery);

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    "use strict";
    function b(a) {
        if (a instanceof Date)
            return a;
        if (String(a).match(g))
            return String(a).match(/^[0-9]*$/) && (a = Number(a)),
                String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
                new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }
    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }
    function d(a) {
        return function (b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                        , j = c(h[0])
                        , k = h[1] || ""
                        , l = h[3] || ""
                        , m = null;
                    h = h[2],
                        i.hasOwnProperty(h) && (m = i[h],
                            m = Number(a[m])),
                        null !== m && ("!" === k && (m = e(l, m)),
                            "" === k && m < 10 && (m = "0" + m.toString()),
                            b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }
    function e(a, b) {
        var c = "s"
            , d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/),
            1 === a.length ? c = a[0] : (d = a[0],
                c = a[1])),
            Math.abs(b) > 1 ? c : d
    }
    var f = []
        , g = []
        , h = {
            precision: 100,
            elapse: !1,
            defer: !1
        };
    g.push(/^[0-9]*$/.source),
        g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
        g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
        g = new RegExp(g.join("|"));
    var i = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    }
        , j = function (b, c, d) {
            this.el = b,
                this.$el = a(b),
                this.interval = null,
                this.offset = {},
                this.options = a.extend({}, h),
                this.firstTick = !0,
                this.instanceNumber = f.length,
                f.push(this),
                this.$el.data("countdown-instance", this.instanceNumber),
                d && ("function" == typeof d ? (this.$el.on("update.countdown", d),
                    this.$el.on("stoped.countdown", d),
                    this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)),
                this.setFinalDate(c),
                this.options.defer === !1 && this.start()
        };
    a.extend(j.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(),
                this.interval = setInterval(function () {
                    a.update.call(a)
                }, this.options.precision)
        },
        stop: function () {
            clearInterval(this.interval),
                this.interval = null,
                this.dispatchEvent("stoped")
        },
        toggle: function () {
            this.interval ? this.stop() : this.start()
        },
        pause: function () {
            this.stop()
        },
        resume: function () {
            this.start()
        },
        remove: function () {
            this.stop.call(this),
                f[this.instanceNumber] = null,
                delete this.$el.data().countdownInstance
        },
        setFinalDate: function (a) {
            this.finalDate = b(a)
        },
        update: function () {
            if (0 === this.$el.closest("html").length)
                return void this.remove();
            var a, b = new Date;
            return a = this.finalDate.getTime() - b.getTime(),
                a = Math.ceil(a / 1e3),
                a = !this.options.elapse && a < 0 ? 0 : Math.abs(a),
                this.totalSecsLeft === a || this.firstTick ? void (this.firstTick = !1) : (this.totalSecsLeft = a,
                    this.elapsed = b >= this.finalDate,
                    this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                        totalMinutes: Math.floor(this.totalSecsLeft / 60),
                        totalSeconds: this.totalSecsLeft
                    },
                    void (this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(),
                        this.dispatchEvent("finish"))))
        },
        dispatchEvent: function (b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate,
                c.elapsed = this.elapsed,
                c.offset = a.extend({}, this.offset),
                c.strftime = d(this.offset),
                this.$el.trigger(c)
        }
    }),
        a.fn.countdown = function () {
            var b = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var c = a(this).data("countdown-instance");
                if (void 0 !== c) {
                    var d = f[c]
                        , e = b[0];
                    j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e),
                        d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
                } else
                    new j(this, b[0], b[1])
            })
        }
});

/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function (o) {
    var t = {
        url: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };
    o.zoom = function (t, n, e, i) {
        var u, c, a, r, m, l, s, f = o(t), h = f.css("position"), d = o(n);
        return t.style.position = /(absolute|fixed)/.test(h) ? h : "relative",
            t.style.overflow = "hidden",
            e.style.width = e.style.height = "",
            o(e).addClass("zoomImg").css({
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                width: e.width * i,
                height: e.height * i,
                border: "none",
                maxWidth: "none",
                maxHeight: "none"
            }).appendTo(t),
        {
            init: function () {
                c = f.outerWidth(),
                    u = f.outerHeight(),
                    n === t ? (r = c,
                        a = u) : (r = d.outerWidth(),
                            a = d.outerHeight()),
                    m = (e.width - c) / r,
                    l = (e.height - u) / a,
                    s = d.offset()
            },
            move: function (o) {
                var t = o.pageX - s.left
                    , n = o.pageY - s.top;
                n = Math.max(Math.min(n, a), 0),
                    t = Math.max(Math.min(t, r), 0),
                    e.style.left = t * -m + "px",
                    e.style.top = n * -l + "px"
            }
        }
    }
        ,
        o.fn.zoom = function (n) {
            return this.each(function () {
                var e = o.extend({}, t, n || {})
                    , i = e.target && o(e.target)[0] || this
                    , u = this
                    , c = o(u)
                    , a = document.createElement("img")
                    , r = o(a)
                    , m = "mousemove.zoom"
                    , l = !1
                    , s = !1;
                if (!e.url) {
                    var f = u.querySelector("img");
                    if (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src),
                        !e.url)
                        return
                }
                c.one("zoom.destroy", function (o, t) {
                    c.off(".zoom"),
                        i.style.position = o,
                        i.style.overflow = t,
                        a.onload = null,
                        r.remove()
                }
                    .bind(this, i.style.position, i.style.overflow)),
                    a.onload = function () {
                        function t(t) {
                            f.init(),
                                f.move(t),
                                r.stop().fadeTo(o.support.opacity ? e.duration : 0, 1, o.isFunction(e.onZoomIn) ? e.onZoomIn.call(a) : !1)
                        }
                        function n() {
                            r.stop().fadeTo(e.duration, 0, o.isFunction(e.onZoomOut) ? e.onZoomOut.call(a) : !1)
                        }
                        var f = o.zoom(i, u, a, e.magnify);
                        "grab" === e.on ? c.on("mousedown.zoom", function (e) {
                            1 === e.which && (o(document).one("mouseup.zoom", function () {
                                n(),
                                    o(document).off(m, f.move)
                            }),
                                t(e),
                                o(document).on(m, f.move),
                                e.preventDefault())
                        }) : "click" === e.on ? c.on("click.zoom", function (e) {
                            return l ? void 0 : (l = !0,
                                t(e),
                                o(document).on(m, f.move),
                                o(document).one("click.zoom", function () {
                                    n(),
                                        l = !1,
                                        o(document).off(m, f.move)
                                }),
                                !1)
                        }) : "toggle" === e.on ? c.on("click.zoom", function (o) {
                            l ? n() : t(o),
                                l = !l
                        }) : "mouseover" === e.on && (f.init(),
                            c.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(m, f.move)),
                            e.touch && c.on("touchstart.zoom", function (o) {
                                o.preventDefault(),
                                    s ? (s = !1,
                                        n()) : (s = !0,
                                            t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]))
                            }).on("touchmove.zoom", function (o) {
                                o.preventDefault(),
                                    f.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0])
                            }).on("touchend.zoom", function (o) {
                                o.preventDefault(),
                                    s && (s = !1,
                                        n())
                            }),
                            o.isFunction(e.callback) && e.callback.call(a)
                    }
                    ,
                    a.setAttribute("role", "presentation"),
                    a.alt = "",
                    a.src = e.url
            })
        }
        ,
        o.fn.zoom.defaults = t
}
)(window.jQuery);

/*  jQuery Nice Select - v1.0
https://github.com/hernansartorio/jquery-nice-select
Made by Hernán Sartorio 
*/
!function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next()
                , n = t.find("option")
                , i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
                n.each(function (t) {
                    var n = e(this)
                        , i = n.data("display");
                    s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
                })
        }
        if ("string" == typeof t)
            return "update" == t ? this.each(function () {
                var t = e(this)
                    , n = e(this).next(".nice-select")
                    , i = n.hasClass("open");
                n.length && (n.remove(),
                    s(t),
                    i && t.next().trigger("click"))
            }) : "destroy" == t ? (this.each(function () {
                var t = e(this)
                    , s = e(this).next(".nice-select");
                s.length && (s.remove(),
                    t.css("display", ""))
            }),
                0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'),
                this;
        this.hide(),
            this.each(function () {
                var t = e(this);
                t.next().hasClass("nice-select") || s(t)
            }),
            e(document).off(".nice_select"),
            e(document).on("click.nice_select", ".nice-select", function (t) {
                var s = e(this);
                e(".nice-select").not(s).removeClass("open"),
                    s.toggleClass("open"),
                    s.hasClass("open") ? (s.find(".option"),
                        s.find(".focus").removeClass("focus"),
                        s.find(".selected").addClass("focus")) : s.focus()
            }),
            e(document).on("click.nice_select", function (t) {
                0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
            }),
            e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
                var s = e(this)
                    , n = s.closest(".nice-select");
                n.find(".selected").removeClass("selected"),
                    s.addClass("selected");
                var i = s.data("display") || s.text();
                n.find(".current").text(i),
                    n.prev("select").val(s.data("value")).trigger("change")
            }),
            e(document).on("keydown.nice_select", ".nice-select", function (t) {
                var s = e(this)
                    , n = e(s.find(".focus") || s.find(".list .option.selected"));
                if (32 == t.keyCode || 13 == t.keyCode)
                    return s.hasClass("open") ? n.trigger("click") : s.trigger("click"),
                        !1;
                if (40 == t.keyCode) {
                    if (s.hasClass("open")) {
                        var i = n.nextAll(".option:not(.disabled)").first();
                        i.length > 0 && (s.find(".focus").removeClass("focus"),
                            i.addClass("focus"))
                    } else
                        s.trigger("click");
                    return !1
                }
                if (38 == t.keyCode) {
                    if (s.hasClass("open")) {
                        var l = n.prevAll(".option:not(.disabled)").first();
                        l.length > 0 && (s.find(".focus").removeClass("focus"),
                            l.addClass("focus"))
                    } else
                        s.trigger("click");
                    return !1
                }
                if (27 == t.keyCode)
                    s.hasClass("open") && s.trigger("click");
                else if (9 == t.keyCode && s.hasClass("open"))
                    return !1
            });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto",
            "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
            this
    }
}(jQuery);

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.StickySidebar = e()
}(this, function () {
    "use strict";
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    function t(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
            e.exports
    }
    var i = e(function (t, e) {
        (function (t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l, n, e = function () {
                function n(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                    }
                }
                return function (t, e, i) {
                    return e && n(t.prototype, e),
                        i && n(t, i),
                        t
                }
            }(), i = (l = ".stickySidebar",
                n = {
                    topSpacing: 0,
                    bottomSpacing: 0,
                    containerSelector: !1,
                    innerWrapperSelector: ".inner-wrapper-sticky",
                    stickyClass: "is-affixed",
                    resizeSensor: !0,
                    minWidth: !1
                },
                function () {
                    function c(t) {
                        var e = this
                            , i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        if (function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, c),
                            this.options = c.extend(n, i),
                            this.sidebar = "string" == typeof t ? document.querySelector(t) : t,
                            void 0 === this.sidebar)
                            throw new Error("There is no specific sidebar element.");
                        this.sidebarInner = !1,
                            this.container = this.sidebar.parentElement,
                            this.affixedType = "STATIC",
                            this.direction = "down",
                            this.support = {
                                transform: !1,
                                transform3d: !1
                            },
                            this._initialized = !1,
                            this._reStyle = !1,
                            this._breakpoint = !1,
                            this.dimensions = {
                                translateY: 0,
                                maxTranslateY: 0,
                                topSpacing: 0,
                                lastTopSpacing: 0,
                                bottomSpacing: 0,
                                lastBottomSpacing: 0,
                                sidebarHeight: 0,
                                sidebarWidth: 0,
                                containerTop: 0,
                                containerHeight: 0,
                                viewportHeight: 0,
                                viewportTop: 0,
                                lastViewportTop: 0
                            },
                            ["handleEvent"].forEach(function (t) {
                                e[t] = e[t].bind(e)
                            }),
                            this.initialize()
                    }
                    return e(c, [{
                        key: "initialize",
                        value: function () {
                            var i = this;
                            if (this._setSupportFeatures(),
                                this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector),
                                    null === this.sidebarInner && (this.sidebarInner = !1)),
                                !this.sidebarInner) {
                                var t = document.createElement("div");
                                for (t.setAttribute("class", "inner-wrapper-sticky"),
                                    this.sidebar.appendChild(t); this.sidebar.firstChild != t;)
                                    t.appendChild(this.sidebar.firstChild);
                                this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
                            }
                            if (this.options.containerSelector) {
                                var e = document.querySelectorAll(this.options.containerSelector);
                                if ((e = Array.prototype.slice.call(e)).forEach(function (t, e) {
                                    t.contains(i.sidebar) && (i.container = t)
                                }),
                                    !e.length)
                                    throw new Error("The container does not contains on the sidebar.")
                            }
                            "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0),
                                "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0),
                                this._widthBreakpoint(),
                                this.calcDimensions(),
                                this.stickyPosition(),
                                this.bindEvents(),
                                this._initialized = !0
                        }
                    }, {
                        key: "bindEvents",
                        value: function () {
                            window.addEventListener("resize", this, {
                                passive: !0,
                                capture: !1
                            }),
                                window.addEventListener("scroll", this, {
                                    passive: !0,
                                    capture: !1
                                }),
                                this.sidebar.addEventListener("update" + l, this),
                                this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent),
                                    new ResizeSensor(this.container, this.handleEvent))
                        }
                    }, {
                        key: "handleEvent",
                        value: function (t) {
                            this.updateSticky(t)
                        }
                    }, {
                        key: "calcDimensions",
                        value: function () {
                            if (!this._breakpoint) {
                                var t = this.dimensions;
                                t.containerTop = c.offsetRelative(this.container).top,
                                    t.containerHeight = this.container.clientHeight,
                                    t.containerBottom = t.containerTop + t.containerHeight,
                                    t.sidebarHeight = this.sidebarInner.offsetHeight,
                                    t.sidebarWidth = this.sidebarInner.offsetWidth,
                                    t.viewportHeight = window.innerHeight,
                                    t.maxTranslateY = t.containerHeight - t.sidebarHeight,
                                    this._calcDimensionsWithScroll()
                            }
                        }
                    }, {
                        key: "_calcDimensionsWithScroll",
                        value: function () {
                            var t = this.dimensions;
                            t.sidebarLeft = c.offsetRelative(this.sidebar).left,
                                t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop,
                                t.viewportBottom = t.viewportTop + t.viewportHeight,
                                t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
                                t.topSpacing = this.options.topSpacing,
                                t.bottomSpacing = this.options.bottomSpacing,
                                "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0),
                                "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0),
                                "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing,
                                    this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing,
                                        this._reStyle = !0),
                                t.lastTopSpacing = t.topSpacing,
                                t.lastBottomSpacing = t.bottomSpacing
                        }
                    }, {
                        key: "isSidebarFitsViewport",
                        value: function () {
                            var t = this.dimensions
                                , e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
                            return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight
                        }
                    }, {
                        key: "observeScrollDir",
                        value: function () {
                            var t = this.dimensions;
                            if (t.lastViewportTop !== t.viewportTop) {
                                var e = "down" === this.direction ? Math.min : Math.max;
                                t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
                            }
                        }
                    }, {
                        key: "getAffixType",
                        value: function () {
                            this._calcDimensionsWithScroll();
                            var t = this.dimensions
                                , e = t.viewportTop + t.topSpacing
                                , i = this.affixedType;
                            return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0,
                                i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(),
                                t.translateY = Math.max(0, t.translateY),
                                t.translateY = Math.min(t.containerHeight, t.translateY),
                                t.translateY = Math.round(t.translateY),
                                t.lastViewportTop = t.viewportTop,
                                i
                        }
                    }, {
                        key: "_getAffixTypeScrollingDown",
                        value: function () {
                            var t = this.dimensions
                                , e = t.sidebarHeight + t.containerTop
                                , i = t.viewportTop + t.topSpacing
                                , n = t.viewportBottom - t.bottomSpacing
                                , o = this.affixedType;
                            return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e,
                                o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop,
                                    o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e,
                                        o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e,
                                            o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"),
                                o
                        }
                    }, {
                        key: "_getAffixTypeScrollingUp",
                        value: function () {
                            var t = this.dimensions
                                , e = t.sidebarHeight + t.containerTop
                                , i = t.viewportTop + t.topSpacing
                                , n = t.viewportBottom - t.bottomSpacing
                                , o = this.affixedType;
                            return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop,
                                o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e,
                                    o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"),
                                o
                        }
                    }, {
                        key: "_getStyle",
                        value: function (t) {
                            if (void 0 !== t) {
                                var e = {
                                    inner: {},
                                    outer: {}
                                }
                                    , i = this.dimensions;
                                switch (t) {
                                    case "VIEWPORT-TOP":
                                        e.inner = {
                                            position: "fixed",
                                            top: i.topSpacing,
                                            left: i.sidebarLeft - i.viewportLeft,
                                            width: i.sidebarWidth
                                        };
                                        break;
                                    case "VIEWPORT-BOTTOM":
                                        e.inner = {
                                            position: "fixed",
                                            top: "auto",
                                            left: i.sidebarLeft,
                                            bottom: i.bottomSpacing,
                                            width: i.sidebarWidth
                                        };
                                        break;
                                    case "CONTAINER-BOTTOM":
                                    case "VIEWPORT-UNBOTTOM":
                                        var n = this._getTranslate(0, i.translateY + "px");
                                        e.inner = n ? {
                                            transform: n
                                        } : {
                                                position: "absolute",
                                                top: i.translateY,
                                                width: i.sidebarWidth
                                            }
                                }
                                switch (t) {
                                    case "VIEWPORT-TOP":
                                    case "VIEWPORT-BOTTOM":
                                    case "VIEWPORT-UNBOTTOM":
                                    case "CONTAINER-BOTTOM":
                                        e.outer = {
                                            height: i.sidebarHeight,
                                            position: "relative"
                                        }
                                }
                                return e.outer = c.extend({
                                    height: "",
                                    position: ""
                                }, e.outer),
                                    e.inner = c.extend({
                                        position: "relative",
                                        top: "",
                                        left: "",
                                        bottom: "",
                                        width: "",
                                        transform: ""
                                    }, e.inner),
                                    e
                            }
                        }
                    }, {
                        key: "stickyPosition",
                        value: function (t) {
                            if (!this._breakpoint) {
                                t = this._reStyle || t || !1,
                                    this.options.topSpacing,
                                    this.options.bottomSpacing;
                                var e = this.getAffixType()
                                    , i = this._getStyle(e);
                                if ((this.affixedType != e || t) && e) {
                                    var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;
                                    for (var o in c.eventTrigger(this.sidebar, n),
                                        "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass),
                                        i.outer) {
                                        var s = "number" == typeof i.outer[o] ? "px" : "";
                                        this.sidebar.style[o] = i.outer[o] + s
                                    }
                                    for (var r in i.inner) {
                                        var a = "number" == typeof i.inner[r] ? "px" : "";
                                        this.sidebarInner.style[r] = i.inner[r] + a
                                    }
                                    var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
                                    c.eventTrigger(this.sidebar, p)
                                } else
                                    this._initialized && (this.sidebarInner.style.left = i.inner.left);
                                this.affixedType = e
                            }
                        }
                    }, {
                        key: "_widthBreakpoint",
                        value: function () {
                            window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0,
                                this.affixedType = "STATIC",
                                this.sidebar.removeAttribute("style"),
                                c.removeClass(this.sidebar, this.options.stickyClass),
                                this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
                        }
                    }, {
                        key: "updateSticky",
                        value: function () {
                            var t, e = this, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            this._running || (this._running = !0,
                                t = i.type,
                                requestAnimationFrame(function () {
                                    switch (t) {
                                        case "scroll":
                                            e._calcDimensionsWithScroll(),
                                                e.observeScrollDir(),
                                                e.stickyPosition();
                                            break;
                                        case "resize":
                                        default:
                                            e._widthBreakpoint(),
                                                e.calcDimensions(),
                                                e.stickyPosition(!0)
                                    }
                                    e._running = !1
                                }))
                        }
                    }, {
                        key: "_setSupportFeatures",
                        value: function () {
                            var t = this.support;
                            t.transform = c.supportTransform(),
                                t.transform3d = c.supportTransform(!0)
                        }
                    }, {
                        key: "_getTranslate",
                        value: function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                                , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0
                                , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                            return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            window.removeEventListener("resize", this, {
                                capture: !1
                            }),
                                window.removeEventListener("scroll", this, {
                                    capture: !1
                                }),
                                this.sidebar.classList.remove(this.options.stickyClass),
                                this.sidebar.style.minHeight = "",
                                this.sidebar.removeEventListener("update" + l, this);
                            var t = {
                                inner: {},
                                outer: {}
                            };
                            for (var e in t.inner = {
                                position: "",
                                top: "",
                                left: "",
                                bottom: "",
                                width: "",
                                transform: ""
                            },
                                t.outer = {
                                    height: "",
                                    position: ""
                                },
                                t.outer)
                                this.sidebar.style[e] = t.outer[e];
                            for (var i in t.inner)
                                this.sidebarInner.style[i] = t.inner[i];
                            this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent),
                                ResizeSensor.detach(this.container, this.handleEvent))
                        }
                    }], [{
                        key: "supportTransform",
                        value: function (t) {
                            var i = !1
                                , e = t ? "perspective" : "transform"
                                , n = e.charAt(0).toUpperCase() + e.slice(1)
                                , o = document.createElement("support").style;
                            return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (t, e) {
                                if (void 0 !== o[t])
                                    return i = t,
                                        !1
                            }),
                                i
                        }
                    }, {
                        key: "eventTrigger",
                        value: function (t, e, i) {
                            try {
                                var n = new CustomEvent(e, {
                                    detail: i
                                })
                            } catch (t) {
                                (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
                            }
                            t.dispatchEvent(n)
                        }
                    }, {
                        key: "extend",
                        value: function (t, e) {
                            var i = {};
                            for (var n in t)
                                void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
                            return i
                        }
                    }, {
                        key: "offsetRelative",
                        value: function (t) {
                            var e = {
                                left: 0,
                                top: 0
                            };
                            do {
                                var i = t.offsetTop
                                    , n = t.offsetLeft;
                                isNaN(i) || (e.top += i),
                                    isNaN(n) || (e.left += n),
                                    t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
                            } while (t); return e
                        }
                    }, {
                        key: "addClass",
                        value: function (t, e) {
                            c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e)
                        }
                    }, {
                        key: "removeClass",
                        value: function (t, e) {
                            c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                        }
                    }, {
                        key: "hasClass",
                        value: function (t, e) {
                            return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
                        }
                    }, {
                        key: "defaults",
                        get: function () {
                            return n
                        }
                    }]),
                        c
                }());
            t.default = i,
                window.StickySidebar = i
        }
        )(e)
    });
    return t(i),
        t(e(function (t, e) {
            (function (t) {
                var e, s = (e = t) && e.__esModule ? e : {
                    default: e
                };
                !function () {
                    if ("undefined" != typeof window) {
                        var n = window.$ || window.jQuery || window.Zepto
                            , o = "stickySidebar";
                        if (n) {
                            n.fn.stickySidebar = function (i) {
                                return this.each(function () {
                                    var t = n(this)
                                        , e = n(this).data(o);
                                    if (e || (e = new s.default(this, "object" == typeof i && i),
                                        t.data(o, e)),
                                        "string" == typeof i) {
                                        if (void 0 === e[i] && -1 === ["destroy", "updateSticky"].indexOf(i))
                                            throw new Error('No method named "' + i + '"');
                                        e[i]()
                                    }
                                })
                            }
                                ,
                                n.fn.stickySidebar.Constructor = s.default;
                            var t = n.fn.stickySidebar;
                            n.fn.stickySidebar.noConflict = function () {
                                return n.fn.stickySidebar = t,
                                    this
                            }
                        }
                    }
                }()
            }
            )(i)
        }))
});

/*! jQuery UI - v1.11.4 - 2015-12-02
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}
)(function (e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode,
            a = n.name,
            t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0],
                !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }
    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    e.ui = e.ui || {},
        e.extend(e.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }),
        e.fn.extend({
            scrollParent: function (t) {
                var i = this.css("position")
                    , s = "absolute" === i
                    , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                    , a = this.parents().filter(function () {
                        var t = e(this);
                        return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
            },
            uniqueId: function () {
                var e = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }),
        e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
                return function (i) {
                    return !!e.data(i, t)
                }
            }) : function (t, i, s) {
                return !!e.data(t, s[3])
            }
            ,
            focusable: function (i) {
                return t(i, !isNaN(e.attr(i, "tabindex")))
            },
            tabbable: function (i) {
                var s = e.attr(i, "tabindex")
                    , n = isNaN(s);
                return (n || s >= 0) && t(i, !n)
            }
        }),
        e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
            function s(t, i, s, a) {
                return e.each(n, function () {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0,
                        s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                        a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }),
                    i
            }
            var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
                , a = i.toLowerCase()
                , o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + i] = function (t) {
                return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                    e(this).css(a, s(this, t) + "px")
                })
            }
                ,
                e.fn["outer" + i] = function (t, n) {
                    return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                        e(this).css(a, s(this, t, !0, n) + "px")
                    })
                }
        }),
        e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
        ),
        e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
            return function (i) {
                return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
            }
        }(e.fn.removeData)),
        e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        e.fn.extend({
            focus: function (t) {
                return function (i, s) {
                    return "number" == typeof i ? this.each(function () {
                        var t = this;
                        setTimeout(function () {
                            e(t).focus(),
                                s && s.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            disableSelection: function () {
                var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.bind(e + ".ui-disableSelection", function (e) {
                        e.preventDefault()
                    })
                }
            }(),
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function (t) {
                if (void 0 !== t)
                    return this.css("zIndex", t);
                if (this.length)
                    for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                        if (i = n.css("position"),
                            ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10),
                                !isNaN(s) && 0 !== s))
                            return s;
                        n = n.parent()
                    }
                return 0
            }
        }),
        e.ui.plugin = {
            add: function (t, i, s) {
                var n, a = e.ui[t].prototype;
                for (n in s)
                    a.plugins[n] = a.plugins[n] || [],
                        a.plugins[n].push([i, s[n]])
            },
            call: function (e, t, i, s) {
                var n, a = e.plugins[t];
                if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (n = 0; a.length > n; n++)
                        e.options[a[n][0]] && a[n][1].apply(e.element, i)
            }
        };
    var s = 0
        , n = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++)
                try {
                    s = e._data(n, "events"),
                        s && s.remove && e(n).triggerHandler("remove")
                } catch (o) { }
            t(i)
        }
    }(e.cleanData),
        e.widget = function (t, i, s) {
            var n, a, o, r, h = {}, l = t.split(".")[0];
            return t = t.split(".")[1],
                n = l + "-" + t,
                s || (s = i,
                    i = e.Widget),
                e.expr[":"][n.toLowerCase()] = function (t) {
                    return !!e.data(t, n)
                }
                ,
                e[l] = e[l] || {},
                a = e[l][t],
                o = e[l][t] = function (e, t) {
                    return this._createWidget ? (arguments.length && this._createWidget(e, t),
                        void 0) : new o(e, t)
                }
                ,
                e.extend(o, a, {
                    version: s.version,
                    _proto: e.extend({}, s),
                    _childConstructors: []
                }),
                r = new i,
                r.options = e.widget.extend({}, r.options),
                e.each(s, function (t, s) {
                    return e.isFunction(s) ? (h[t] = function () {
                        var e = function () {
                            return i.prototype[t].apply(this, arguments)
                        }
                            , n = function (e) {
                                return i.prototype[t].apply(this, e)
                            };
                        return function () {
                            var t, i = this._super, a = this._superApply;
                            return this._super = e,
                                this._superApply = n,
                                t = s.apply(this, arguments),
                                this._super = i,
                                this._superApply = a,
                                t
                        }
                    }(),
                        void 0) : (h[t] = s,
                            void 0)
                }),
                o.prototype = e.widget.extend(r, {
                    widgetEventPrefix: a ? r.widgetEventPrefix || t : t
                }, h, {
                    constructor: o,
                    namespace: l,
                    widgetName: t,
                    widgetFullName: n
                }),
                a ? (e.each(a._childConstructors, function (t, i) {
                    var s = i.prototype;
                    e.widget(s.namespace + "." + s.widgetName, o, i._proto)
                }),
                    delete a._childConstructors) : i._childConstructors.push(o),
                e.widget.bridge(t, o),
                o
        }
        ,
        e.widget.extend = function (t) {
            for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
                for (i in a[o])
                    s = a[o][i],
                        a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
            return t
        }
        ,
        e.widget.bridge = function (t, i) {
            var s = i.prototype.widgetFullName || t;
            e.fn[t] = function (a) {
                var o = "string" == typeof a
                    , r = n.call(arguments, 1)
                    , h = this;
                return o ? this.each(function () {
                    var i, n = e.data(this, s);
                    return "instance" === a ? (h = n,
                        !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r),
                            i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i,
                                !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
                }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))),
                    this.each(function () {
                        var t = e.data(this, s);
                        t ? (t.option(a || {}),
                            t._init && t._init()) : e.data(this, s, new i(a, this))
                    })),
                    h
            }
        }
        ,
        e.Widget = function () { }
        ,
        e.Widget._childConstructors = [],
        e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function (t, i) {
                i = e(i || this.defaultElement || this)[0],
                    this.element = e(i),
                    this.uuid = s++,
                    this.eventNamespace = "." + this.widgetName + this.uuid,
                    this.bindings = e(),
                    this.hoverable = e(),
                    this.focusable = e(),
                    i !== this && (e.data(i, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (e) {
                                e.target === i && this.destroy()
                            }
                        }),
                        this.document = e(i.style ? i.ownerDocument : i.document || i),
                        this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                    this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                this._destroy(),
                    this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                    this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function () {
                return this.element
            },
            option: function (t, i) {
                var s, n, a, o = t;
                if (0 === arguments.length)
                    return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (o = {},
                        s = t.split("."),
                        t = s.shift(),
                        s.length) {
                        for (n = o[t] = e.widget.extend({}, this.options[t]),
                            a = 0; s.length - 1 > a; a++)
                            n[s[a]] = n[s[a]] || {},
                                n = n[s[a]];
                        if (t = s.pop(),
                            1 === arguments.length)
                            return void 0 === n[t] ? null : n[t];
                        n[t] = i
                    } else {
                        if (1 === arguments.length)
                            return void 0 === this.options[t] ? null : this.options[t];
                        o[t] = i
                    }
                return this._setOptions(o),
                    this
            },
            _setOptions: function (e) {
                var t;
                for (t in e)
                    this._setOption(t, e[t]);
                return this
            },
            _setOption: function (e, t) {
                return this.options[e] = t,
                    "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
                        t && (this.hoverable.removeClass("ui-state-hover"),
                            this.focusable.removeClass("ui-state-focus"))),
                    this
            },
            enable: function () {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function () {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function (t, i, s) {
                var n, a = this;
                "boolean" != typeof t && (s = i,
                    i = t,
                    t = !1),
                    s ? (i = n = e(i),
                        this.bindings = this.bindings.add(i)) : (s = i,
                            i = this.element,
                            n = this.widget()),
                    e.each(s, function (s, o) {
                        function r() {
                            return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                        }
                        "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                        var h = s.match(/^([\w:-]*)\s*(.*)$/)
                            , l = h[1] + a.eventNamespace
                            , u = h[2];
                        u ? n.delegate(u, l, r) : i.bind(l, r)
                    })
            },
            _off: function (t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                    t.unbind(i).undelegate(i),
                    this.bindings = e(this.bindings.not(t).get()),
                    this.focusable = e(this.focusable.not(t).get()),
                    this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function (e, t) {
                function i() {
                    return ("string" == typeof e ? s[e] : e).apply(s, arguments)
                }
                var s = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t),
                    this._on(t, {
                        mouseenter: function (t) {
                            e(t.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function (t) {
                            e(t.currentTarget).removeClass("ui-state-hover")
                        }
                    })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t),
                    this._on(t, {
                        focusin: function (t) {
                            e(t.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function (t) {
                            e(t.currentTarget).removeClass("ui-state-focus")
                        }
                    })
            },
            _trigger: function (t, i, s) {
                var n, a, o = this.options[t];
                if (s = s || {},
                    i = e.Event(i),
                    i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
                    i.target = this.element[0],
                    a = i.originalEvent)
                    for (n in a)
                        n in i || (i[n] = a[n]);
                return this.element.trigger(i, s),
                    !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
            }
        },
        e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (t, i) {
            e.Widget.prototype["_" + t] = function (s, n, a) {
                "string" == typeof n && (n = {
                    effect: n
                });
                var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
                n = n || {},
                    "number" == typeof n && (n = {
                        duration: n
                    }),
                    o = !e.isEmptyObject(n),
                    n.complete = a,
                    n.delay && s.delay(n.delay),
                    o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
                        e(this)[t](),
                            a && a.call(s[0]),
                            i()
                    })
            }
        }),
        e.widget;
    var a = !1;
    e(document).mouseup(function () {
        a = !1
    }),
        e.widget("ui.mouse", {
            version: "1.11.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function () {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function (e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function (i) {
                    return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                        i.stopImmediatePropagation(),
                        !1) : void 0
                }),
                    this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName),
                    this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (t) {
                if (!a) {
                    this._mouseMoved = !1,
                        this._mouseStarted && this._mouseUp(t),
                        this._mouseDownEvent = t;
                    var i = this
                        , s = 1 === t.which
                        , n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay,
                        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                            i.mouseDelayMet = !0
                        }, this.options.delay)),
                        this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1,
                            !this._mouseStarted) ? (t.preventDefault(),
                                !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
                                    this._mouseMoveDelegate = function (e) {
                                        return i._mouseMove(e)
                                    }
                                    ,
                                    this._mouseUpDelegate = function (e) {
                                        return i._mouseUp(e)
                                    }
                                    ,
                                    this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                                    t.preventDefault(),
                                    a = !0,
                                    !0)) : !0
                }
            },
            _mouseMove: function (t) {
                if (this._mouseMoved) {
                    if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button)
                        return this._mouseUp(t);
                    if (!t.which)
                        return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0),
                    this._mouseStarted ? (this._mouseDrag(t),
                        t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
                            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
                            !this._mouseStarted)
            },
            _mouseUp: function (t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && (this._mouseStarted = !1,
                        t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
                        this._mouseStop(t)),
                    a = !1,
                    !1
            },
            _mouseDistanceMet: function (e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () { },
            _mouseDrag: function () { },
            _mouseStop: function () { },
            _mouseCapture: function () {
                return !0
            }
        }),
        e.widget("ui.slider", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function () {
                this._keySliding = !1,
                    this._mouseSliding = !1,
                    this._animateOff = !0,
                    this._handleIndex = null,
                    this._detectOrientation(),
                    this._mouseInit(),
                    this._calculateNewMax(),
                    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"),
                    this._refresh(),
                    this._setOption("disabled", this.options.disabled),
                    this._animateOff = !1
            },
            _refresh: function () {
                this._createRange(),
                    this._createHandles(),
                    this._setupEvents(),
                    this._refreshValue()
            },
            _createHandles: function () {
                var t, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", o = [];
                for (i = s.values && s.values.length || 1,
                    n.length > i && (n.slice(i).remove(),
                        n = n.slice(0, i)),
                    t = n.length; i > t; t++)
                    o.push(a);
                this.handles = n.add(e(o.join("")).appendTo(this.element)),
                    this.handle = this.handles.eq(0),
                    this.handles.each(function (t) {
                        e(this).data("ui-slider-handle-index", t)
                    })
            },
            _createRange: function () {
                var t = this.options
                    , i = "";
                t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]),
                    this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }) : (this.range = e("<div></div>").appendTo(this.element),
                        i = "ui-slider-range ui-widget-header ui-corner-all"),
                    this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(),
                        this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles),
                    this._on(this.handles, this._handleEvents),
                    this._hoverable(this.handles),
                    this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove(),
                    this.range && this.range.remove(),
                    this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
                    this._mouseDestroy()
            },
            _mouseCapture: function (t) {
                var i, s, n, a, o, r, h, l, u = this, d = this.options;
                return d.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                },
                    this.elementOffset = this.element.offset(),
                    i = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    s = this._normValueFromMouse(i),
                    n = this._valueMax() - this._valueMin() + 1,
                    this.handles.each(function (t) {
                        var i = Math.abs(s - u.values(t));
                        (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i,
                            a = e(this),
                            o = t)
                    }),
                    r = this._start(t, o),
                    r === !1 ? !1 : (this._mouseSliding = !0,
                        this._handleIndex = o,
                        a.addClass("ui-state-active").focus(),
                        h = a.offset(),
                        l = !e(t.target).parents().addBack().is(".ui-slider-handle"),
                        this._clickOffset = l ? {
                            left: 0,
                            top: 0
                        } : {
                                left: t.pageX - h.left - a.width() / 2,
                                top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
                            },
                        this.handles.hasClass("ui-state-hover") || this._slide(t, o, s),
                        this._animateOff = !0,
                        !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (e) {
                var t = {
                    x: e.pageX,
                    y: e.pageY
                }
                    , i = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, i),
                    !1
            },
            _mouseStop: function (e) {
                return this.handles.removeClass("ui-state-active"),
                    this._mouseSliding = !1,
                    this._stop(e, this._handleIndex),
                    this._change(e, this._handleIndex),
                    this._handleIndex = null,
                    this._clickOffset = null,
                    this._animateOff = !1,
                    !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (e) {
                var t, i, s, n, a;
                return "horizontal" === this.orientation ? (t = this.elementSize.width,
                    i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height,
                        i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                    s = i / t,
                    s > 1 && (s = 1),
                    0 > s && (s = 0),
                    "vertical" === this.orientation && (s = 1 - s),
                    n = this._valueMax() - this._valueMin(),
                    a = this._valueMin() + s * n,
                    this._trimAlignValue(a)
            },
            _start: function (e, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(t),
                    i.values = this.values()),
                    this._trigger("start", e, i)
            },
            _slide: function (e, t, i) {
                var s, n, a;
                this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1),
                    2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s),
                    i !== this.values(t) && (n = this.values(),
                        n[t] = i,
                        a = this._trigger("slide", e, {
                            handle: this.handles[t],
                            value: i,
                            values: n
                        }),
                        s = this.values(t ? 0 : 1),
                        a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
                            handle: this.handles[t],
                            value: i
                        }),
                            a !== !1 && this.value(i))
            },
            _stop: function (e, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t),
                    i.values = this.values()),
                    this._trigger("stop", e, i)
            },
            _change: function (e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t),
                        i.values = this.values()),
                        this._lastChangedValue = t,
                        this._trigger("change", e, i)
                }
            },
            value: function (e) {
                return arguments.length ? (this.options.value = this._trimAlignValue(e),
                    this._refreshValue(),
                    this._change(null, 0),
                    void 0) : this._value()
            },
            values: function (t, i) {
                var s, n, a;
                if (arguments.length > 1)
                    return this.options.values[t] = this._trimAlignValue(i),
                        this._refreshValue(),
                        this._change(null, t),
                        void 0;
                if (!arguments.length)
                    return this._values();
                if (!e.isArray(arguments[0]))
                    return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (s = this.options.values,
                    n = arguments[0],
                    a = 0; s.length > a; a += 1)
                    s[a] = this._trimAlignValue(n[a]),
                        this._change(null, a);
                this._refreshValue()
            },
            _setOption: function (t, i) {
                var s, n = 0;
                switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0),
                    this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
                        this.options.values = null)),
                e.isArray(this.options.values) && (n = this.options.values.length),
                "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i),
                this._super(t, i),
                t) {
                    case "orientation":
                        this._detectOrientation(),
                            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                            this._refreshValue(),
                            this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._change(null, 0),
                            this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0,
                            this._refreshValue(),
                            s = 0; n > s; s += 1)
                            this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0,
                            this._calculateNewMax(),
                            this._refreshValue(),
                            this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0,
                            this._refresh(),
                            this._animateOff = !1
                }
            },
            _value: function () {
                var e = this.options.value;
                return e = this._trimAlignValue(e)
            },
            _values: function (e) {
                var t, i, s;
                if (arguments.length)
                    return t = this.options.values[e],
                        t = this._trimAlignValue(t);
                if (this.options.values && this.options.values.length) {
                    for (i = this.options.values.slice(),
                        s = 0; i.length > s; s += 1)
                        i[s] = this._trimAlignValue(i[s]);
                    return i
                }
                return []
            },
            _trimAlignValue: function (e) {
                if (this._valueMin() >= e)
                    return this._valueMin();
                if (e >= this._valueMax())
                    return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1
                    , i = (e - this._valueMin()) % t
                    , s = e - i;
                return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t),
                    parseFloat(s.toFixed(5))
            },
            _calculateNewMax: function () {
                var e = this.options.max
                    , t = this._valueMin()
                    , i = this.options.step
                    , s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
                e = s + t,
                    this.max = parseFloat(e.toFixed(this._precision()))
            },
            _precision: function () {
                var e = this._precisionOf(this.options.step);
                return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))),
                    e
            },
            _precisionOf: function (e) {
                var t = "" + e
                    , i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshValue: function () {
                var t, i, s, n, a, o = this.options.range, r = this.options, h = this, l = this._animateOff ? !1 : r.animate, u = {};
                this.options.values && this.options.values.length ? this.handles.each(function (s) {
                    i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())),
                        u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%",
                        e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate),
                        h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                            left: i + "%"
                        }, r.animate),
                            1 === s && h.range[l ? "animate" : "css"]({
                                width: i - t + "%"
                            }, {
                                queue: !1,
                                duration: r.animate
                            })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                                bottom: i + "%"
                            }, r.animate),
                                1 === s && h.range[l ? "animate" : "css"]({
                                    height: i - t + "%"
                                }, {
                                    queue: !1,
                                    duration: r.animate
                                }))),
                        t = i
                }) : (s = this.value(),
                    n = this._valueMin(),
                    a = this._valueMax(),
                    i = a !== n ? 100 * ((s - n) / (a - n)) : 0,
                    u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
                    this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate),
                    "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                        width: i + "%"
                    }, r.animate),
                    "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                        width: 100 - i + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }),
                    "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                        height: i + "%"
                    }, r.animate),
                    "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                        height: 100 - i + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))
            },
            _handleEvents: {
                keydown: function (t) {
                    var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (t.preventDefault(),
                                !this._keySliding && (this._keySliding = !0,
                                    e(t.target).addClass("ui-state-active"),
                                    i = this._start(t, o),
                                    i === !1))
                                return
                    }
                    switch (a = this.options.step,
                    s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(),
                    t.keyCode) {
                        case e.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (s === this._valueMax())
                                return;
                            n = this._trimAlignValue(s + a);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (s === this._valueMin())
                                return;
                            n = this._trimAlignValue(s - a)
                    }
                    this._slide(t, o, n)
                },
                keyup: function (t) {
                    var i = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1,
                        this._stop(t, i),
                        this._change(t, i),
                        e(t.target).removeClass("ui-state-active"))
                }
            }
        })
});

/**
 * Tippy JS
 * version 3.1.3
 *
 */

(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.tippy = t()
}
)(this, function () {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var r = e.ownerDocument.defaultView
            , a = r.getComputedStyle(e, null);
        return t ? a[t] : a
    }
    function r(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function a(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var p = t(e)
            , o = p.overflow
            , i = p.overflowX
            , n = p.overflowY;
        return /(auto|scroll|overlay)/.test(o + n + i) ? e : a(r(e))
    }
    function p(e) {
        return 11 === e ? ve : 10 === e ? ke : ve || ke
    }
    function o(e) {
        if (!e)
            return document.documentElement;
        for (var r = p(10) ? document.body : null, a = e.offsetParent || null; a === r && e.nextElementSibling;)
            a = (e = e.nextElementSibling).offsetParent;
        var i = a && a.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(a.nodeName) && 'static' === t(a, 'position') ? o(a) : a : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function n(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || o(e.firstElementChild) === e)
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }
    function l(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
            , a = r ? e : t
            , p = r ? t : e
            , i = document.createRange();
        i.setStart(a, 0),
            i.setEnd(p, 0);
        var d = i.commonAncestorContainer;
        if (e !== d && t !== d || a.contains(p))
            return n(d) ? d : o(d);
        var m = s(e);
        return m.host ? l(m.host, t) : l(e, s(t).host)
    }
    function d(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
            , r = 'top' === t ? 'scrollTop' : 'scrollLeft'
            , a = e.nodeName;
        if ('BODY' === a || 'HTML' === a) {
            var p = e.ownerDocument.documentElement
                , o = e.ownerDocument.scrollingElement || p;
            return o[r]
        }
        return e[r]
    }
    function m(e, t) {
        var r = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2]
            , a = d(t, 'top')
            , p = d(t, 'left')
            , o = r ? -1 : 1;
        return e.top += a * o,
            e.bottom += a * o,
            e.left += p * o,
            e.right += p * o,
            e
    }
    function c(e, t) {
        var r = 'x' === t ? 'Left' : 'Top'
            , a = 'Left' === r ? 'Right' : 'Bottom';
        return parseFloat(e['border' + r + 'Width'], 10) + parseFloat(e['border' + a + 'Width'], 10)
    }
    function f(e, t, r, a) {
        return re(t['offset' + e], t['scroll' + e], r['client' + e], r['offset' + e], r['scroll' + e], p(10) ? parseInt(r['offset' + e]) + parseInt(a['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(a['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }
    function h(e) {
        var t = e.body
            , r = e.documentElement
            , a = p(10) && getComputedStyle(r);
        return {
            height: f('Height', t, r, a),
            width: f('Width', t, r, a)
        }
    }
    function b(e) {
        return Le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function u(e) {
        var r = {};
        try {
            if (p(10)) {
                r = e.getBoundingClientRect();
                var a = d(e, 'top')
                    , o = d(e, 'left');
                r.top += a,
                    r.left += o,
                    r.bottom += a,
                    r.right += o
            } else
                r = e.getBoundingClientRect()
        } catch (t) { }
        var i = {
            left: r.left,
            top: r.top,
            width: r.right - r.left,
            height: r.bottom - r.top
        }
            , n = 'HTML' === e.nodeName ? h(e.ownerDocument) : {}
            , s = n.width || e.clientWidth || i.right - i.left
            , l = n.height || e.clientHeight || i.bottom - i.top
            , m = e.offsetWidth - s
            , f = e.offsetHeight - l;
        if (m || f) {
            var y = t(e);
            m -= c(y, 'x'),
                f -= c(y, 'y'),
                i.width -= m,
                i.height -= f
        }
        return b(i)
    }
    function y(e, r) {
        var o = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2]
            , i = p(10)
            , n = 'HTML' === r.nodeName
            , s = u(e)
            , l = u(r)
            , d = a(e)
            , c = t(r)
            , f = parseFloat(c.borderTopWidth, 10)
            , h = parseFloat(c.borderLeftWidth, 10);
        o && n && (l.top = re(l.top, 0),
            l.left = re(l.left, 0));
        var y = b({
            top: s.top - l.top - f,
            left: s.left - l.left - h,
            width: s.width,
            height: s.height
        });
        if (y.marginTop = 0,
            y.marginLeft = 0,
            !i && n) {
            var g = parseFloat(c.marginTop, 10)
                , w = parseFloat(c.marginLeft, 10);
            y.top -= f - g,
                y.bottom -= f - g,
                y.left -= h - w,
                y.right -= h - w,
                y.marginTop = g,
                y.marginLeft = w
        }
        return (i && !o ? r.contains(d) : r === d && 'BODY' !== d.nodeName) && (y = m(y, r)),
            y
    }
    function g(e) {
        var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1]
            , r = e.ownerDocument.documentElement
            , a = y(e, r)
            , p = re(r.clientWidth, window.innerWidth || 0)
            , o = re(r.clientHeight, window.innerHeight || 0)
            , i = t ? 0 : d(r)
            , n = t ? 0 : d(r, 'left')
            , s = {
                top: i - a.top + a.marginTop,
                left: n - a.left + a.marginLeft,
                width: p,
                height: o
            };
        return b(s)
    }
    function w(e) {
        var a = e.nodeName;
        return 'BODY' !== a && 'HTML' !== a && ('fixed' === t(e, 'position') || w(r(e)))
    }
    function x(e) {
        if (!e || !e.parentElement || p())
            return document.documentElement;
        for (var r = e.parentElement; r && 'none' === t(r, 'transform');)
            r = r.parentElement;
        return r || document.documentElement
    }
    function v(e, t, p, o) {
        var i = !!(4 < arguments.length && void 0 !== arguments[4]) && arguments[4]
            , n = {
                top: 0,
                left: 0
            }
            , s = i ? x(e) : l(e, t);
        if ('viewport' === o)
            n = g(s, i);
        else {
            var d;
            'scrollParent' === o ? (d = a(r(t)),
                'BODY' === d.nodeName && (d = e.ownerDocument.documentElement)) : 'window' === o ? d = e.ownerDocument.documentElement : d = o;
            var m = y(d, s, i);
            if ('HTML' === d.nodeName && !w(s)) {
                var c = h(e.ownerDocument)
                    , f = c.height
                    , b = c.width;
                n.top += m.top - m.marginTop,
                    n.bottom = f + m.top,
                    n.left += m.left - m.marginLeft,
                    n.right = b + m.left
            } else
                n = m
        }
        p = p || 0;
        var u = 'number' == typeof p;
        return n.left += u ? p : p.left || 0,
            n.top += u ? p : p.top || 0,
            n.right -= u ? p : p.right || 0,
            n.bottom -= u ? p : p.bottom || 0,
            n
    }
    function k(e) {
        var t = e.width
            , r = e.height;
        return t * r
    }
    function E(e, t, r, a, p) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var i = v(r, a, o, p)
            , n = {
                top: {
                    width: i.width,
                    height: t.top - i.top
                },
                right: {
                    width: i.right - t.right,
                    height: i.height
                },
                bottom: {
                    width: i.width,
                    height: i.bottom - t.bottom
                },
                left: {
                    width: t.left - i.left,
                    height: i.height
                }
            }
            , s = Object.keys(n).map(function (e) {
                return Le({
                    key: e
                }, n[e], {
                    area: k(n[e])
                })
            }).sort(function (e, t) {
                return t.area - e.area
            })
            , l = s.filter(function (e) {
                var t = e.width
                    , a = e.height;
                return t >= r.clientWidth && a >= r.clientHeight
            })
            , d = 0 < l.length ? l[0].key : s[0].key
            , m = e.split('-')[1];
        return d + (m ? '-' + m : '')
    }
    function O(e, t, r) {
        var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
            , p = a ? x(t) : l(t, r);
        return y(r, p, a)
    }
    function C(e) {
        var t = e.ownerDocument.defaultView
            , r = t.getComputedStyle(e)
            , a = parseFloat(r.marginTop) + parseFloat(r.marginBottom)
            , p = parseFloat(r.marginLeft) + parseFloat(r.marginRight)
            , o = {
                width: e.offsetWidth + p,
                height: e.offsetHeight + a
            };
        return o
    }
    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }
    function T(e, t, r) {
        r = r.split('-')[0];
        var a = C(e)
            , p = {
                width: a.width,
                height: a.height
            }
            , o = -1 !== ['right', 'left'].indexOf(r)
            , i = o ? 'top' : 'left'
            , n = o ? 'left' : 'top'
            , s = o ? 'height' : 'width'
            , l = o ? 'width' : 'height';
        return p[i] = t[i] + t[s] / 2 - a[s] / 2,
            p[n] = r === n ? t[n] - a[l] : t[L(n)],
            p
    }
    function A(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function P(e, t, r) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === r
            });
        var a = A(e, function (e) {
            return e[t] === r
        });
        return e.indexOf(a)
    }
    function S(t, r, a) {
        var p = void 0 === a ? t : t.slice(0, P(t, 'name', a));
        return p.forEach(function (t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var a = t['function'] || t.fn;
            t.enabled && e(a) && (r.offsets.popper = b(r.offsets.popper),
                r.offsets.reference = b(r.offsets.reference),
                r = a(r, t))
        }),
            r
    }
    function Y() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed),
                e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                e.originalPlacement = e.placement,
                e.positionFixed = this.options.positionFixed,
                e.offsets.popper = T(this.popper, e.offsets.reference, e.placement),
                e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
                e = S(this.modifiers, e),
                this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                    this.options.onCreate(e))
        }
    }
    function D(e, t) {
        return e.some(function (e) {
            var r = e.name
                , a = e.enabled;
            return a && r === t
        })
    }
    function X(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], r = e.charAt(0).toUpperCase() + e.slice(1), a = 0; a < t.length; a++) {
            var p = t[a]
                , o = p ? '' + p + r : e;
            if ('undefined' != typeof document.body.style[o])
                return o
        }
        return null
    }
    function I() {
        return this.state.isDestroyed = !0,
            D(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
                this.popper.style.position = '',
                this.popper.style.top = '',
                this.popper.style.left = '',
                this.popper.style.right = '',
                this.popper.style.bottom = '',
                this.popper.style.willChange = '',
                this.popper.style[X('transform')] = ''),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
    }
    function N(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function H(e, t, r, p) {
        var o = 'BODY' === e.nodeName
            , i = o ? e.ownerDocument.defaultView : e;
        i.addEventListener(t, r, {
            passive: !0
        }),
            o || H(a(i.parentNode), t, r, p),
            p.push(i)
    }
    function R(e, t, r, p) {
        r.updateBound = p,
            N(e).addEventListener('resize', r.updateBound, {
                passive: !0
            });
        var o = a(e);
        return H(o, 'scroll', r.updateBound, r.scrollParents),
            r.scrollElement = o,
            r.eventsEnabled = !0,
            r
    }
    function B() {
        this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function M(e, t) {
        return N(e).removeEventListener('resize', t.updateBound),
            t.scrollParents.forEach(function (e) {
                e.removeEventListener('scroll', t.updateBound)
            }),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t
    }
    function W() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = M(this.reference, this.state))
    }
    function z(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function _(e, t) {
        Object.keys(t).forEach(function (r) {
            var a = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(r) && z(t[r]) && (a = 'px'),
                e.style[r] = t[r] + a
        })
    }
    function U(e, t) {
        Object.keys(t).forEach(function (r) {
            var a = t[r];
            !1 === a ? e.removeAttribute(r) : e.setAttribute(r, t[r])
        })
    }
    function F(e, t, r) {
        var a = A(e, function (e) {
            var r = e.name;
            return r === t
        })
            , p = !!a && e.some(function (e) {
                return e.name === r && e.enabled && e.order < a.order
            });
        if (!p) {
            var o = '`' + t + '`';
            console.warn('`' + r + '`' + ' modifier is required by ' + o + ' modifier in order to work, be sure to include it before ' + o + '!')
        }
        return p
    }
    function V(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function q(e) {
        var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1]
            , r = Ae.indexOf(e)
            , a = Ae.slice(r + 1).concat(Ae.slice(0, r));
        return t ? a.reverse() : a
    }
    function j(e, t, r, a) {
        var p = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
            , o = +p[1]
            , i = p[2];
        if (!o)
            return e;
        if (0 === i.indexOf('%')) {
            var n;
            switch (i) {
                case '%p':
                    n = r;
                    break;
                case '%':
                case '%r':
                default:
                    n = a;
            }
            var s = b(n);
            return s[t] / 100 * o
        }
        if ('vh' === i || 'vw' === i) {
            var l;
            return l = 'vh' === i ? re(document.documentElement.clientHeight, window.innerHeight || 0) : re(document.documentElement.clientWidth, window.innerWidth || 0),
                l / 100 * o
        }
        return o
    }
    function K(e, t, r, a) {
        var p = [0, 0]
            , o = -1 !== ['right', 'left'].indexOf(a)
            , i = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            })
            , n = i.indexOf(A(i, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
        i[n] && -1 === i[n].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var s = /\s*,\s*|\s+/
            , l = -1 === n ? [i] : [i.slice(0, n).concat([i[n].split(s)[0]]), [i[n].split(s)[1]].concat(i.slice(n + 1))];
        return l = l.map(function (e, a) {
            var p = (1 === a ? !o : o) ? 'height' : 'width'
                , i = !1;
            return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                    i = !0,
                    e) : i ? (e[e.length - 1] += t,
                        i = !1,
                        e) : e.concat(t)
            }, []).map(function (e) {
                return j(e, p, t, r)
            })
        }),
            l.forEach(function (e, t) {
                e.forEach(function (r, a) {
                    z(r) && (p[t] += r * ('-' === e[a - 1] ? -1 : 1))
                })
            }),
            p
    }
    function G(e, t) {
        var r = t.offset
            , a = e.placement
            , p = e.offsets
            , o = p.popper
            , i = p.reference
            , n = a.split('-')[0]
            , s = void 0;
        return s = z(+r) ? [+r, 0] : K(r, o, i, n),
            'left' === n ? (o.top += s[0],
                o.left -= s[1]) : 'right' === n ? (o.top += s[0],
                    o.left += s[1]) : 'top' === n ? (o.left += s[0],
                        o.top -= s[1]) : 'bottom' === n && (o.left += s[0],
                            o.top += s[1]),
            e.popper = o,
            e
    }
    function Q(e) {
        document.addEventListener('click', Lt, e),
            document.addEventListener('touchstart', Et, {
                passive: !0
            }),
            window.addEventListener('blur', Tt),
            window.addEventListener('resize', At),
            !be && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) && document.addEventListener('pointerdown', Et)
    }
    function Z(e, t) {
        function r() {
            ht(function () {
                z = !1
            })
        }
        function a() {
            X = new MutationObserver(function () {
                q.popperInstance.update()
            }
            ),
                X.observe(F, {
                    childList: !0,
                    subtree: !0
                })
        }
        function p(e) {
            var t = N = e
                , r = t.clientX
                , a = t.clientY;
            if (q.popperInstance) {
                var p = ut(q.popper)
                    , o = q.popperChildren.arrow ? 20 : 5
                    , i = 'top' === p || 'bottom' === p
                    , n = 'left' === p || 'right' === p
                    , s = i ? re(o, r) : r
                    , l = n ? re(o, a) : a;
                i && s > o && (s = J(r, window.innerWidth - o)),
                    n && l > o && (l = J(a, window.innerHeight - o));
                var d = q.reference.getBoundingClientRect()
                    , m = q.props.followCursor
                    , c = 'horizontal' === m
                    , f = 'vertical' === m;
                q.popperInstance.reference = {
                    getBoundingClientRect: function () {
                        return {
                            width: 0,
                            height: 0,
                            top: c ? d.top : l,
                            bottom: c ? d.bottom : l,
                            left: f ? d.left : s,
                            right: f ? d.right : s
                        }
                    },
                    clientWidth: 0,
                    clientHeight: 0
                },
                    q.popperInstance.scheduleUpdate()
            }
        }
        function o(e) {
            var t = rt(e.target, q.props.target);
            t && !t._tippy && (Z(t, oe({}, q.props, {
                target: '',
                showOnInit: !0
            })),
                i(e))
        }
        function i(e) {
            if (T(),
                !q.state.isVisible) {
                if (q.props.target)
                    return o(e);
                if (B = !0,
                    q.props.wait)
                    return q.props.wait(q, e);
                w() && document.addEventListener('mousemove', p);
                var t = Ue(q.props.delay, 0, ie.delay);
                t ? H = setTimeout(function () {
                    P()
                }, t) : P()
            }
        }
        function n() {
            if (T(),
                !q.state.isVisible)
                return s();
            B = !1;
            var e = Ue(q.props.delay, 1, ie.delay);
            e ? R = setTimeout(function () {
                q.state.isVisible && S()
            }, e) : S()
        }
        function s() {
            document.removeEventListener('mousemove', p),
                N = null
        }
        function l() {
            document.body.removeEventListener('mouseleave', n),
                document.removeEventListener('mousemove', _)
        }
        function d(e) {
            !q.state.isEnabled || y(e) || (!q.state.isVisible && (I = e),
                'click' === e.type && !1 !== q.props.hideOnClick && q.state.isVisible ? n() : i(e))
        }
        function m(e) {
            var t = at(e.target, function (e) {
                return e._tippy
            })
                , r = rt(e.target, Ye.POPPER) === q.popper
                , a = t === q.reference;
            r || a || bt(ut(q.popper), q.popper.getBoundingClientRect(), e, q.props) && (l(),
                n())
        }
        function c(e) {
            return y(e) ? void 0 : q.props.interactive ? (document.body.addEventListener('mouseleave', n),
                void document.addEventListener('mousemove', _)) : void n()
        }
        function f(e) {
            if (e.target === q.reference) {
                if (q.props.interactive) {
                    if (!e.relatedTarget)
                        return;
                    if (rt(e.relatedTarget, Ye.POPPER))
                        return
                }
                n()
            }
        }
        function h(e) {
            rt(e.target, q.props.target) && i(e)
        }
        function b(e) {
            rt(e.target, q.props.target) && n()
        }
        function y(e) {
            var t = -1 < e.type.indexOf('touch')
                , r = be && kt && q.props.touchHold && !t
                , a = kt && !q.props.touchHold && t;
            return r || a
        }
        function u() {
            var e = q.popperChildren.tooltip
                , t = q.props.popperOptions
                , r = Ye['round' === q.props.arrowType ? 'ROUND_ARROW' : 'ARROW']
                , p = e.querySelector(r)
                , o = oe({
                    placement: q.props.placement
                }, t || {}, {
                    modifiers: oe({}, t ? t.modifiers : {}, {
                        arrow: oe({
                            element: r
                        }, t && t.modifiers ? t.modifiers.arrow : {}),
                        flip: oe({
                            enabled: q.props.flip,
                            padding: q.props.distance + 5,
                            behavior: q.props.flipBehavior
                        }, t && t.modifiers ? t.modifiers.flip : {}),
                        offset: oe({
                            offset: q.props.offset
                        }, t && t.modifiers ? t.modifiers.offset : {})
                    }),
                    onCreate: function () {
                        e.style[ut(q.popper)] = yt(q.props.distance, ie.distance),
                            p && q.props.arrowTransform && mt(p, q.props.arrowTransform)
                    },
                    onUpdate: function () {
                        var t = e.style;
                        t.top = '',
                            t.bottom = '',
                            t.left = '',
                            t.right = '',
                            t[ut(q.popper)] = yt(q.props.distance, ie.distance),
                            p && q.props.arrowTransform && mt(p, q.props.arrowTransform)
                    }
                });
            return X || a(),
                new Se(q.reference, q.popper, o)
        }
        function g(e) {
            q.popperInstance ? !w() && (q.popperInstance.scheduleUpdate(),
                q.props.livePlacement && q.popperInstance.enableEventListeners()) : (q.popperInstance = u(),
                    (!q.props.livePlacement || w()) && q.popperInstance.disableEventListeners()),
                q.popperInstance.reference = q.reference;
            var t = q.popperChildren.arrow;
            if (w()) {
                t && (t.style.margin = '0');
                var r = Ue(q.props.delay, 0, ie.delay);
                I.type && p(r && N ? N : I)
            } else
                t && (t.style.margin = '');
            ft(q.popperInstance, e),
                q.props.appendTo.contains(q.popper) || (q.props.appendTo.appendChild(q.popper),
                    q.props.onMount(q),
                    q.state.isMounted = !0)
        }
        function w() {
            return q.props.followCursor && !kt && 'focus' !== I.type
        }
        function x() {
            He([q.popper], fe ? 0 : q.props.updateDuration);
            (function e() {
                q.popperInstance && q.popperInstance.scheduleUpdate(),
                    q.state.isMounted ? requestAnimationFrame(e) : He([q.popper], 0)
            }
            )()
        }
        function v(e, t) {
            E(e, function () {
                !q.state.isVisible && q.props.appendTo.contains(q.popper) && t()
            })
        }
        function k(e, t) {
            E(e, t)
        }
        function E(e, t) {
            if (0 === e)
                return t();
            var r = q.popperChildren.tooltip
                , a = function a(p) {
                    p.target === r && (wt(r, 'remove', a),
                        t())
                };
            wt(r, 'remove', M),
                wt(r, 'add', a),
                M = a
        }
        function O(e, t, r) {
            q.reference.addEventListener(e, t),
                r.push({
                    eventType: e,
                    handler: t
                })
        }
        function C() {
            W = q.props.trigger.trim().split(' ').reduce(function (e, t) {
                return 'manual' === t ? e : (q.props.target ? 'mouseenter' === t ? (O('mouseover', h, e),
                    O('mouseout', b, e)) : 'focus' === t ? (O('focusin', h, e),
                        O('focusout', b, e)) : 'click' === t ? O(t, h, e) : void 0 : (O(t, d, e),
                            q.props.touchHold && (O('touchstart', d, e),
                                O('touchend', c, e)),
                            'mouseenter' === t ? O('mouseleave', c, e) : 'focus' === t ? O(fe ? 'focusout' : 'blur', f, e) : void 0),
                    e)
            }, [])
        }
        function L() {
            W.forEach(function (e) {
                var t = e.eventType
                    , r = e.handler;
                q.reference.removeEventListener(t, r)
            })
        }
        function T() {
            clearTimeout(H),
                clearTimeout(R)
        }
        function A() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            vt(e, ie);
            var t = q.props
                , r = gt(q.reference, oe({}, q.props, e, {
                    performance: !0
                }));
            r.performance = e.hasOwnProperty('performance') ? e.performance : t.performance,
                q.props = r,
                (e.hasOwnProperty('trigger') || e.hasOwnProperty('touchHold')) && (L(),
                    C()),
                e.hasOwnProperty('interactiveDebounce') && (l(),
                    _ = xt(m, e.interactiveDebounce)),
                Ze(q.popper, t, r),
                q.popperChildren = Re(q.popper),
                q.popperInstance && se.some(function (t) {
                    return e.hasOwnProperty(t)
                }) && (q.popperInstance.destroy(),
                    q.popperInstance = u(),
                    !q.state.isVisible && q.popperInstance.disableEventListeners(),
                    q.props.followCursor && N && p(N))
        }
        function P() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ue(q.props.duration, 0, ie.duration[0]);
            return q.state.isDestroyed || !q.state.isEnabled || kt && !q.props.touch ? void 0 : q.reference.isVirtual || document.documentElement.contains(q.reference) ? q.reference.hasAttribute('disabled') ? void 0 : z ? void (z = !1) : void (!1 === q.props.onShow(q) || (q.popper.style.visibility = 'visible',
                q.state.isVisible = !0,
                He([q.popper, q.popperChildren.tooltip, q.popperChildren.backdrop], 0),
                g(function () {
                    q.state.isVisible && (!w() && q.popperInstance.update(),
                        He([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], e),
                        q.popperChildren.backdrop && (q.popperChildren.content.style.transitionDelay = ee(e / 6) + 'ms'),
                        q.props.interactive && q.reference.classList.add('tippy-active'),
                        q.props.sticky && x(),
                        ct([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], 'visible'),
                        k(e, function () {
                            0 === q.props.updateDuration && q.popperChildren.tooltip.classList.add('tippy-notransition'),
                                q.props.interactive && -1 < ['focus', 'click'].indexOf(I.type) && pt(q.popper),
                                q.reference.setAttribute('aria-describedby', q.popper.id),
                                q.props.onShown(q),
                                q.state.isShown = !0
                        }))
                }))) : Y()
        }
        function S() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ue(q.props.duration, 1, ie.duration[1]);
            q.state.isDestroyed || !q.state.isEnabled || !1 === q.props.onHide(q) || (0 === q.props.updateDuration && q.popperChildren.tooltip.classList.remove('tippy-notransition'),
                q.props.interactive && q.reference.classList.remove('tippy-active'),
                q.popper.style.visibility = 'hidden',
                q.state.isVisible = !1,
                q.state.isShown = !1,
                He([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], e),
                ct([q.popperChildren.tooltip, q.popperChildren.backdrop, q.popperChildren.content], 'hidden'),
                q.props.interactive && !z && -1 < ['focus', 'click'].indexOf(I.type) && ('focus' === I.type && (z = !0),
                    pt(q.reference)),
                v(e, function () {
                    B || s(),
                        q.reference.removeAttribute('aria-describedby'),
                        q.popperInstance.disableEventListeners(),
                        q.props.appendTo.removeChild(q.popper),
                        q.state.isMounted = !1,
                        q.props.onHidden(q)
                }))
        }
        function Y(e) {
            q.state.isDestroyed || (q.state.isVisible && S(0),
                L(),
                q.reference.removeEventListener('click', r),
                delete q.reference._tippy,
                q.props.target && e && Xe(q.reference.querySelectorAll(q.props.target)).forEach(function (e) {
                    return e._tippy && e._tippy.destroy()
                }),
                q.popperInstance && q.popperInstance.destroy(),
                X && X.disconnect(),
                q.state.isDestroyed = !0)
        }
        var D = gt(e, t);
        if (!D.multiple && e._tippy)
            return null;
        var X = null
            , I = {}
            , N = null
            , H = 0
            , R = 0
            , B = !1
            , M = function () { }
            , W = []
            , z = !1
            , _ = 0 < D.interactiveDebounce ? xt(m, D.interactiveDebounce) : m
            , U = Pt++
            , F = Qe(U, D);
        F.addEventListener('mouseenter', function (e) {
            q.props.interactive && q.state.isVisible && 'mouseenter' === I.type && i(e)
        }),
            F.addEventListener('mouseleave', function (e) {
                q.props.interactive && 'mouseenter' === I.type && 0 === q.props.interactiveDebounce && bt(ut(F), F.getBoundingClientRect(), e, q.props) && n()
            });
        var V = Re(F)
            , q = {
                id: U,
                reference: e,
                popper: F,
                popperChildren: V,
                popperInstance: null,
                props: D,
                state: {
                    isEnabled: !0,
                    isVisible: !1,
                    isDestroyed: !1,
                    isMounted: !1,
                    isShown: !1
                },
                clearDelayTimeouts: T,
                set: A,
                setContent: function (e) {
                    A({
                        content: e
                    })
                },
                show: P,
                hide: S,
                enable: function () {
                    q.state.isEnabled = !0
                },
                disable: function () {
                    q.state.isEnabled = !1
                },
                destroy: Y
            };
        return C(),
            e.addEventListener('click', r),
            D.lazy || (q.popperInstance = u(),
                q.popperInstance.disableEventListeners()),
            D.showOnInit && i(),
            !D.a11y || D.target || Ne(e) || e.setAttribute('tabindex', '0'),
            e._tippy = q,
            F._tippy = q,
            q
    }
    function $(e, t, r) {
        vt(t, ie),
            St || (Q(Yt),
                St = !0);
        var a = oe({}, ie, t);
        Be(e) && et(e);
        var p = ze(e)
            , o = p[0]
            , i = (r && o ? [o] : p).reduce(function (e, t) {
                var r = t && Z(t, a);
                return r && e.push(r),
                    e
            }, []);
        return {
            targets: e,
            props: a,
            instances: i,
            destroyAll: function () {
                this.instances.forEach(function (e) {
                    e.destroy()
                }),
                    this.instances = []
            }
        }
    }
    for (var J = Math.min, ee = Math.round, te = Math.floor, re = Math.max, ae = '.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(60deg);transform:translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-60deg);transform:translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-60deg);transform:translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(60deg);transform:translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;max-width:350px;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}', pe = '3.1.3', oe = Object.assign || function (e) {
        for (var t, r = 1; r < arguments.length; r++)
            for (var a in t = arguments[r],
                t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e
    }
        , ie = {
            a11y: !0,
            allowHTML: !0,
            animateFill: !0,
            animation: 'shift-away',
            appendTo: function () {
                return document.body
            },
            arrow: !1,
            arrowTransform: '',
            arrowType: 'sharp',
            content: '',
            delay: [0, 20],
            distance: 10,
            duration: [325, 275],
            flip: !0,
            flipBehavior: 'flip',
            followCursor: !1,
            hideOnClick: !0,
            inertia: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            lazy: !0,
            livePlacement: !0,
            multiple: !1,
            offset: 0,
            onHidden: function () { },
            onHide: function () { },
            onMount: function () { },
            onShow: function () { },
            onShown: function () { },
            performance: !1,
            placement: 'top',
            popperOptions: {},
            shouldPopperHideOnBlur: function () {
                return !0
            },
            showOnInit: !1,
            size: 'regular',
            sticky: !1,
            target: '',
            theme: 'dark',
            touch: !0,
            touchHold: !1,
            trigger: 'mouseenter focus',
            updateDuration: 200,
            wait: null,
            zIndex: 9999
        }, ne = function (e) {
            ie = oe({}, ie, e)
        }, se = ['arrowType', 'distance', 'flip', 'flipBehavior', 'offset', 'placement', 'popperOptions'], le = 'undefined' != typeof window, de = le ? navigator : {}, me = le ? window : {}, ce = ('MutationObserver' in me), fe = /MSIE |Trident\//.test(de.userAgent), he = /iPhone|iPad|iPod/.test(de.platform) && !me.MSStream, be = ('ontouchstart' in me), ye = 'undefined' != typeof window && 'undefined' != typeof document, ue = ['Edge', 'Trident', 'Firefox'], ge = 0, we = 0; we < ue.length; we += 1)
        if (ye && 0 <= navigator.userAgent.indexOf(ue[we])) {
            ge = 1;
            break
        }
    var i = ye && window.Promise
        , xe = i ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0,
                    window.Promise.resolve().then(function () {
                        t = !1,
                            e()
                    }))
            }
        }
            : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0,
                        setTimeout(function () {
                            t = !1,
                                e()
                        }, ge))
                }
            }
        , ve = ye && !!(window.MSInputMethodContext && document.documentMode)
        , ke = ye && /MSIE 10/.test(navigator.userAgent)
        , Ee = function (e, t) {
            if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
        }
        , Oe = function () {
            function e(e, t) {
                for (var r, a = 0; a < t.length; a++)
                    r = t[a],
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
            }
            return function (t, r, a) {
                return r && e(t.prototype, r),
                    a && e(t, a),
                    t
            }
        }()
        , Ce = function (e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
                e
        }
        , Le = Object.assign || function (e) {
            for (var t, r = 1; r < arguments.length; r++)
                for (var a in t = arguments[r],
                    t)
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }
        , Te = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
        , Ae = Te.slice(3)
        , Pe = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        }
        , Se = function () {
            function t(r, a) {
                var p = this
                    , o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Ee(this, t),
                    this.scheduleUpdate = function () {
                        return requestAnimationFrame(p.update)
                    }
                    ,
                    this.update = xe(this.update.bind(this)),
                    this.options = Le({}, t.Defaults, o),
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    },
                    this.reference = r && r.jquery ? r[0] : r,
                    this.popper = a && a.jquery ? a[0] : a,
                    this.options.modifiers = {},
                    Object.keys(Le({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                        p.options.modifiers[e] = Le({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                    }),
                    this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                        return Le({
                            name: e
                        }, p.options.modifiers[e])
                    }).sort(function (e, t) {
                        return e.order - t.order
                    }),
                    this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(p.reference, p.popper, p.options, t, p.state)
                    }),
                    this.update();
                var i = this.options.eventsEnabled;
                i && this.enableEventListeners(),
                    this.state.eventsEnabled = i
            }
            return Oe(t, [{
                key: 'update',
                value: function () {
                    return Y.call(this)
                }
            }, {
                key: 'destroy',
                value: function () {
                    return I.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function () {
                    return B.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function () {
                    return W.call(this)
                }
            }]),
                t
        }();
    Se.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
        Se.placements = Te,
        Se.Defaults = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () { },
            onUpdate: function () { },
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement
                            , r = t.split('-')[0]
                            , a = t.split('-')[1];
                        if (a) {
                            var p = e.offsets
                                , o = p.reference
                                , i = p.popper
                                , n = -1 !== ['bottom', 'top'].indexOf(r)
                                , s = n ? 'left' : 'top'
                                , l = n ? 'width' : 'height'
                                , d = {
                                    start: Ce({}, s, o[s]),
                                    end: Ce({}, s, o[s] + o[l] - i[l])
                                };
                            e.offsets.popper = Le({}, i, d[a])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: G,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var r = t.boundariesElement || o(e.instance.popper);
                        e.instance.reference === r && (r = o(r));
                        var a = X('transform')
                            , p = e.instance.popper.style
                            , i = p.top
                            , n = p.left
                            , s = p[a];
                        p.top = '',
                            p.left = '',
                            p[a] = '';
                        var l = v(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
                        p.top = i,
                            p.left = n,
                            p[a] = s,
                            t.boundaries = l;
                        var d = t.priority
                            , m = e.offsets.popper
                            , c = {
                                primary: function (e) {
                                    var r = m[e];
                                    return m[e] < l[e] && !t.escapeWithReference && (r = re(m[e], l[e])),
                                        Ce({}, e, r)
                                },
                                secondary: function (e) {
                                    var r = 'right' === e ? 'left' : 'top'
                                        , a = m[r];
                                    return m[e] > l[e] && !t.escapeWithReference && (a = J(m[r], l[e] - ('right' === e ? m.width : m.height))),
                                        Ce({}, r, a)
                                }
                            };
                        return d.forEach(function (e) {
                            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                            m = Le({}, m, c[t](e))
                        }),
                            e.offsets.popper = m,
                            e
                    },
                    priority: ['left', 'right', 'top', 'bottom'],
                    padding: 5,
                    boundariesElement: 'scrollParent'
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets
                            , r = t.popper
                            , a = t.reference
                            , p = e.placement.split('-')[0]
                            , o = te
                            , i = -1 !== ['top', 'bottom'].indexOf(p)
                            , n = i ? 'right' : 'bottom'
                            , s = i ? 'left' : 'top'
                            , l = i ? 'width' : 'height';
                        return r[n] < o(a[s]) && (e.offsets.popper[s] = o(a[s]) - r[l]),
                            r[s] > o(a[n]) && (e.offsets.popper[s] = o(a[n])),
                            e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, r) {
                        var a;
                        if (!F(e.instance.modifiers, 'arrow', 'keepTogether'))
                            return e;
                        var p = r.element;
                        if ('string' == typeof p) {
                            if (p = e.instance.popper.querySelector(p),
                                !p)
                                return e;
                        } else if (!e.instance.popper.contains(p))
                            return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                                e;
                        var o = e.placement.split('-')[0]
                            , i = e.offsets
                            , n = i.popper
                            , s = i.reference
                            , l = -1 !== ['left', 'right'].indexOf(o)
                            , d = l ? 'height' : 'width'
                            , m = l ? 'Top' : 'Left'
                            , c = m.toLowerCase()
                            , f = l ? 'left' : 'top'
                            , h = l ? 'bottom' : 'right'
                            , y = C(p)[d];
                        s[h] - y < n[c] && (e.offsets.popper[c] -= n[c] - (s[h] - y)),
                            s[c] + y > n[h] && (e.offsets.popper[c] += s[c] + y - n[h]),
                            e.offsets.popper = b(e.offsets.popper);
                        var u = s[c] + s[d] / 2 - y / 2
                            , g = t(e.instance.popper)
                            , w = parseFloat(g['margin' + m], 10)
                            , x = parseFloat(g['border' + m + 'Width'], 10)
                            , v = u - e.offsets.popper[c] - w - x;
                        return v = re(J(n[d] - y, v), 0),
                            e.arrowElement = p,
                            e.offsets.arrow = (a = {},
                                Ce(a, c, ee(v)),
                                Ce(a, f, ''),
                                a),
                            e
                    },
                    element: '[x-arrow]'
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (D(e.instance.modifiers, 'inner'))
                            return e;
                        if (e.flipped && e.placement === e.originalPlacement)
                            return e;
                        var r = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                            , a = e.placement.split('-')[0]
                            , p = L(a)
                            , o = e.placement.split('-')[1] || ''
                            , i = [];
                        switch (t.behavior) {
                            case Pe.FLIP:
                                i = [a, p];
                                break;
                            case Pe.CLOCKWISE:
                                i = q(a);
                                break;
                            case Pe.COUNTERCLOCKWISE:
                                i = q(a, !0);
                                break;
                            default:
                                i = t.behavior;
                        }
                        return i.forEach(function (n, s) {
                            if (a !== n || i.length === s + 1)
                                return e;
                            a = e.placement.split('-')[0],
                                p = L(a);
                            var l = e.offsets.popper
                                , d = e.offsets.reference
                                , m = te
                                , c = 'left' === a && m(l.right) > m(d.left) || 'right' === a && m(l.left) < m(d.right) || 'top' === a && m(l.bottom) > m(d.top) || 'bottom' === a && m(l.top) < m(d.bottom)
                                , f = m(l.left) < m(r.left)
                                , h = m(l.right) > m(r.right)
                                , b = m(l.top) < m(r.top)
                                , y = m(l.bottom) > m(r.bottom)
                                , u = 'left' === a && f || 'right' === a && h || 'top' === a && b || 'bottom' === a && y
                                , g = -1 !== ['top', 'bottom'].indexOf(a)
                                , w = !!t.flipVariations && (g && 'start' === o && f || g && 'end' === o && h || !g && 'start' === o && b || !g && 'end' === o && y);
                            (c || u || w) && (e.flipped = !0,
                                (c || u) && (a = i[s + 1]),
                                w && (o = V(o)),
                                e.placement = a + (o ? '-' + o : ''),
                                e.offsets.popper = Le({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)),
                                e = S(e.instance.modifiers, e, 'flip'))
                        }),
                            e
                    },
                    behavior: 'flip',
                    padding: 5,
                    boundariesElement: 'viewport'
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement
                            , r = t.split('-')[0]
                            , a = e.offsets
                            , p = a.popper
                            , o = a.reference
                            , i = -1 !== ['left', 'right'].indexOf(r)
                            , n = -1 === ['top', 'left'].indexOf(r);
                        return p[i ? 'left' : 'top'] = o[r] - (n ? p[i ? 'width' : 'height'] : 0),
                            e.placement = L(t),
                            e.offsets.popper = b(p),
                            e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!F(e.instance.modifiers, 'hide', 'preventOverflow'))
                            return e;
                        var t = e.offsets.reference
                            , r = A(e.instance.modifiers, function (e) {
                                return 'preventOverflow' === e.name
                            }).boundaries;
                        if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
                            if (!0 === e.hide)
                                return e;
                            e.hide = !0,
                                e.attributes['x-out-of-boundaries'] = ''
                        } else {
                            if (!1 === e.hide)
                                return e;
                            e.hide = !1,
                                e.attributes['x-out-of-boundaries'] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var r = t.x
                            , a = t.y
                            , p = e.offsets.popper
                            , i = A(e.instance.modifiers, function (e) {
                                return 'applyStyle' === e.name
                            }).gpuAcceleration;
                        void 0 !== i && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                        var n = void 0 === i ? t.gpuAcceleration : i
                            , s = o(e.instance.popper)
                            , l = u(s)
                            , d = {
                                position: p.position
                            }
                            , m = {
                                left: te(p.left),
                                top: ee(p.top),
                                bottom: ee(p.bottom),
                                right: te(p.right)
                            }
                            , c = 'bottom' === r ? 'top' : 'bottom'
                            , f = 'right' === a ? 'left' : 'right'
                            , h = X('transform')
                            , b = void 0
                            , y = void 0;
                        if (y = 'bottom' == c ? 'HTML' === s.nodeName ? -s.clientHeight + m.bottom : -l.height + m.bottom : m.top,
                            b = 'right' == f ? 'HTML' === s.nodeName ? -s.clientWidth + m.right : -l.width + m.right : m.left,
                            n && h)
                            d[h] = 'translate3d(' + b + 'px, ' + y + 'px, 0)',
                                d[c] = 0,
                                d[f] = 0,
                                d.willChange = 'transform';
                        else {
                            var g = 'bottom' == c ? -1 : 1
                                , w = 'right' == f ? -1 : 1;
                            d[c] = y * g,
                                d[f] = b * w,
                                d.willChange = c + ', ' + f
                        }
                        var x = {
                            "x-placement": e.placement
                        };
                        return e.attributes = Le({}, x, e.attributes),
                            e.styles = Le({}, d, e.styles),
                            e.arrowStyles = Le({}, e.offsets.arrow, e.arrowStyles),
                            e
                    },
                    gpuAcceleration: !0,
                    x: 'bottom',
                    y: 'right'
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return _(e.instance.popper, e.styles),
                            U(e.instance.popper, e.attributes),
                            e.arrowElement && Object.keys(e.arrowStyles).length && _(e.arrowElement, e.arrowStyles),
                            e
                    },
                    onLoad: function (e, t, r, a, p) {
                        var o = O(p, t, e, r.positionFixed)
                            , i = E(r.placement, o, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
                        return t.setAttribute('x-placement', i),
                            _(t, {
                                position: r.positionFixed ? 'fixed' : 'absolute'
                            }),
                            r
                    },
                    gpuAcceleration: void 0
                }
            }
        };
    var Ye = {
        POPPER: '.tippy-popper',
        TOOLTIP: '.tippy-tooltip',
        CONTENT: '.tippy-content',
        BACKDROP: '.tippy-backdrop',
        ARROW: '.tippy-arrow',
        ROUND_ARROW: '.tippy-roundarrow'
    }
        , De = {
            x: !0
        }
        , Xe = function (e) {
            return [].slice.call(e)
        }
        , Ie = function (e, t) {
            t.content instanceof Element ? (We(e, ''),
                e.appendChild(t.content)) : e[t.allowHTML ? 'innerHTML' : 'textContent'] = t.content
        }
        , Ne = function (e) {
            return !(e instanceof Element) || tt.call(e, 'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]') && !e.hasAttribute('disabled')
        }
        , He = function (e, t) {
            e.filter(Boolean).forEach(function (e) {
                e.style.transitionDuration = t + 'ms'
            })
        }
        , Re = function (e) {
            var t = function (t) {
                return e.querySelector(t)
            };
            return {
                tooltip: t(Ye.TOOLTIP),
                backdrop: t(Ye.BACKDROP),
                content: t(Ye.CONTENT),
                arrow: t(Ye.ARROW) || t(Ye.ROUND_ARROW)
            }
        }
        , Be = function (e) {
            return '[object Object]' === {}.toString.call(e)
        }
        , Me = function () {
            return document.createElement('div')
        }
        , We = function (e, t) {
            e[De.x && 'innerHTML'] = t instanceof Element ? t[De.x && 'innerHTML'] : t
        }
        , ze = function (e) {
            if (e instanceof Element || Be(e))
                return [e];
            if (e instanceof NodeList)
                return Xe(e);
            if (Array.isArray(e))
                return e;
            try {
                return Xe(document.querySelectorAll(e))
            } catch (t) {
                return []
            }
        }
        , _e = function (e) {
            return !isNaN(e) && !isNaN(parseFloat(e))
        }
        , Ue = function (e, t, r) {
            if (Array.isArray(e)) {
                var a = e[t];
                return null == a ? r : a
            }
            return e
        }
        , Fe = function (e) {
            var t = Me();
            return 'round' === e ? (t.className = 'tippy-roundarrow',
                We(t, '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')) : t.className = 'tippy-arrow',
                t
        }
        , Ve = function () {
            var e = Me();
            return e.className = 'tippy-backdrop',
                e.setAttribute('data-state', 'hidden'),
                e
        }
        , qe = function (e, t) {
            e.setAttribute('tabindex', '-1'),
                t.setAttribute('data-interactive', '')
        }
        , je = function (e, t) {
            e.removeAttribute('tabindex'),
                t.removeAttribute('data-interactive')
        }
        , Ke = function (e) {
            e.setAttribute('data-inertia', '')
        }
        , Ge = function (e) {
            e.removeAttribute('data-inertia')
        }
        , Qe = function (e, t) {
            var r = Me();
            r.className = 'tippy-popper',
                r.setAttribute('role', 'tooltip'),
                r.id = 'tippy-' + e,
                r.style.zIndex = t.zIndex;
            var a = Me();
            a.className = 'tippy-tooltip',
                a.setAttribute('data-size', t.size),
                a.setAttribute('data-animation', t.animation),
                a.setAttribute('data-state', 'hidden'),
                t.theme.split(' ').forEach(function (e) {
                    a.classList.add(e + '-theme')
                });
            var p = Me();
            return p.className = 'tippy-content',
                p.setAttribute('data-state', 'hidden'),
                t.interactive && qe(r, a),
                t.arrow && a.appendChild(Fe(t.arrowType)),
                t.animateFill && (a.appendChild(Ve()),
                    a.setAttribute('data-animatefill', '')),
                t.inertia && a.setAttribute('data-inertia', ''),
                Ie(p, t),
                a.appendChild(p),
                r.appendChild(a),
                r.addEventListener('focusout', function (t) {
                    t.relatedTarget && r._tippy && !at(t.relatedTarget, function (e) {
                        return e === r
                    }) && t.relatedTarget !== r._tippy.reference && r._tippy.props.shouldPopperHideOnBlur(t) && r._tippy.hide()
                }),
                r
        }
        , Ze = function (e, t, r) {
            var a = Re(e)
                , p = a.tooltip
                , o = a.content
                , i = a.backdrop
                , n = a.arrow;
            e.style.zIndex = r.zIndex,
                p.setAttribute('data-size', r.size),
                p.setAttribute('data-animation', r.animation),
                t.content !== r.content && Ie(o, r),
                !t.animateFill && r.animateFill ? (p.appendChild(Ve()),
                    p.setAttribute('data-animatefill', '')) : t.animateFill && !r.animateFill && (p.removeChild(i),
                        p.removeAttribute('data-animatefill')),
                !t.arrow && r.arrow ? p.appendChild(Fe(r.arrowType)) : t.arrow && !r.arrow && p.removeChild(n),
                t.arrow && r.arrow && t.arrowType !== r.arrowType && p.replaceChild(Fe(r.arrowType), n),
                !t.interactive && r.interactive ? qe(e, p) : t.interactive && !r.interactive && je(e, p),
                !t.inertia && r.inertia ? Ke(p) : t.inertia && !r.inertia && Ge(p),
                t.theme !== r.theme && (t.theme.split(' ').forEach(function (e) {
                    p.classList.remove(e + '-theme')
                }),
                    r.theme.split(' ').forEach(function (e) {
                        p.classList.add(e + '-theme')
                    }))
        }
        , $e = function (e) {
            Xe(document.querySelectorAll(Ye.POPPER)).forEach(function (t) {
                var r = t._tippy;
                r && !0 === r.props.hideOnClick && (!e || t !== e.popper) && r.hide()
            })
        }
        , Je = function (e) {
            return Object.keys(ie).reduce(function (t, r) {
                var a = (e.getAttribute('data-tippy-' + r) || '').trim();
                return a ? (t[r] = 'content' === r ? a : 'true' === a || 'false' !== a && (_e(a) ? +a : '[' === a[0] || '{' === a[0] ? JSON.parse(a) : a),
                    t) : t
            }, {})
        }
        , et = function (e) {
            var t = {
                isVirtual: !0,
                attributes: e.attributes || {},
                setAttribute: function (t, r) {
                    e.attributes[t] = r
                },
                getAttribute: function (t) {
                    return e.attributes[t]
                },
                removeAttribute: function (t) {
                    delete e.attributes[t]
                },
                hasAttribute: function (t) {
                    return t in e.attributes
                },
                addEventListener: function () { },
                removeEventListener: function () { },
                classList: {
                    classNames: {},
                    add: function (t) {
                        e.classList.classNames[t] = !0
                    },
                    remove: function (t) {
                        delete e.classList.classNames[t]
                    },
                    contains: function (t) {
                        return t in e.classList.classNames
                    }
                }
            };
            for (var r in t)
                e[r] = t[r];
            return e
        }
        , tt = function () {
            if (le) {
                var t = Element.prototype;
                return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector
            }
        }()
        , rt = function (e, t) {
            return (Element.prototype.closest || function (e) {
                for (var t = this; t;) {
                    if (tt.call(t, e))
                        return t;
                    t = t.parentElement
                }
            }
            ).call(e, t)
        }
        , at = function (e, t) {
            for (; e;) {
                if (t(e))
                    return e;
                e = e.parentElement
            }
        }
        , pt = function (e) {
            var t = window.scrollX || window.pageXOffset
                , r = window.scrollY || window.pageYOffset;
            e.focus(),
                scroll(t, r)
        }
        , ot = function (e) {
            void e.offsetHeight
        }
        , it = function (e, t) {
            return (t ? e : {
                X: 'Y',
                Y: 'X'
            }[e]) || ''
        }
        , nt = function (e, t, r, p) {
            var o = t[0]
                , i = t[1];
            if (!o && !i)
                return '';
            var n = {
                scale: function () {
                    return i ? r ? o + ', ' + i : i + ', ' + o : '' + o
                }(),
                translate: function () {
                    return i ? r ? p ? o + 'px, ' + -i + 'px' : o + 'px, ' + i + 'px' : p ? -i + 'px, ' + o + 'px' : i + 'px, ' + o + 'px' : p ? -o + 'px' : o + 'px'
                }()
            };
            return n[e]
        }
        , st = function (e, t) {
            var r = e.match(new RegExp(t + '([XY])'));
            return r ? r[1] : ''
        }
        , lt = function (e, t) {
            var r = e.match(t);
            return r ? r[1].split(',').map(parseFloat) : []
        }
        , dt = {
            translate: /translateX?Y?\(([^)]+)\)/,
            scale: /scaleX?Y?\(([^)]+)\)/
        }
        , mt = function (e, t) {
            var r = ut(rt(e, Ye.POPPER))
                , a = 'top' === r || 'bottom' === r
                , p = 'right' === r || 'bottom' === r
                , o = {
                    translate: {
                        axis: st(t, 'translate'),
                        numbers: lt(t, dt.translate)
                    },
                    scale: {
                        axis: st(t, 'scale'),
                        numbers: lt(t, dt.scale)
                    }
                }
                , i = t.replace(dt.translate, 'translate' + it(o.translate.axis, a) + '(' + nt('translate', o.translate.numbers, a, p) + ')').replace(dt.scale, 'scale' + it(o.scale.axis, a) + '(' + nt('scale', o.scale.numbers, a, p) + ')');
            e.style['undefined' == typeof document.body.style.transform ? 'webkitTransform' : 'transform'] = i
        }
        , ct = function (e, t) {
            e.filter(Boolean).forEach(function (e) {
                e.setAttribute('data-state', t)
            })
        }
        , ft = function (e, t) {
            var r = e.popper
                , a = e.options
                , p = a.onCreate
                , o = a.onUpdate;
            a.onCreate = a.onUpdate = function () {
                ot(r),
                    t(),
                    o(),
                    a.onCreate = p,
                    a.onUpdate = o
            }
        }
        , ht = function (e) {
            setTimeout(e, 1)
        }
        , bt = function (e, t, r, a) {
            if (!e)
                return !0;
            var p = r.clientX
                , o = r.clientY
                , i = a.interactiveBorder
                , n = a.distance
                , s = t.top - o > ('top' === e ? i + n : i)
                , l = o - t.bottom > ('bottom' === e ? i + n : i)
                , d = t.left - p > ('left' === e ? i + n : i)
                , m = p - t.right > ('right' === e ? i + n : i);
            return s || l || d || m
        }
        , yt = function (e, t) {
            return -(e - t) + 'px'
        }
        , ut = function (e) {
            var t = e.getAttribute('x-placement');
            return t ? t.split('-')[0] : ''
        }
        , gt = function (e, t) {
            var r = oe({}, t, t.performance ? {} : Je(e));
            return r.arrow && (r.animateFill = !1),
                'function' == typeof r.appendTo && (r.appendTo = t.appendTo(e)),
                'function' == typeof r.content && (r.content = t.content(e)),
                r
        }
        , wt = function (e, t, r) {
            e[t + 'EventListener']('transitionend', r)
        }
        , xt = function (e, t) {
            var r;
            return function () {
                var a = this
                    , p = arguments;
                clearTimeout(r),
                    r = setTimeout(function () {
                        return e.apply(a, p)
                    }, t)
            }
        }
        , vt = function (e, t) {
            for (var r in e || {})
                if (!(r in t))
                    throw Error('[tippy]: `' + r + '` is not a valid option')
        }
        , kt = !1
        , Et = function () {
            kt || (kt = !0,
                he && document.body.classList.add('tippy-iOS'),
                window.performance && document.addEventListener('mousemove', Ct))
        }
        , Ot = 0
        , Ct = function e() {
            var t = performance.now();
            20 > t - Ot && (kt = !1,
                document.removeEventListener('mousemove', e),
                !he && document.body.classList.remove('tippy-iOS')),
                Ot = t
        }
        , Lt = function (e) {
            var t = e.target;
            if (!(t instanceof Element))
                return $e();
            var r = rt(t, Ye.POPPER);
            if (!(r && r._tippy && r._tippy.props.interactive)) {
                var a = at(t, function (e) {
                    return e._tippy && e._tippy.reference === e
                });
                if (a) {
                    var p = a._tippy
                        , o = -1 < p.props.trigger.indexOf('click');
                    if (kt || o)
                        return $e(p);
                    if (!0 !== p.props.hideOnClick || o)
                        return;
                    p.clearDelayTimeouts()
                }
                $e()
            }
        }
        , Tt = function () {
            var e = document
                , t = e.activeElement;
            t && t.blur && t._tippy && t.blur()
        }
        , At = function () {
            Xe(document.querySelectorAll(Ye.POPPER)).forEach(function (e) {
                var t = e._tippy;
                t.props.livePlacement || t.popperInstance.scheduleUpdate()
            })
        }
        , Pt = 1
        , St = !1
        , Yt = !1;
    $.version = pe,
        $.defaults = ie,
        $.one = function (e, t) {
            return $(e, t, !0).instances[0]
        }
        ,
        $.setDefaults = function (e) {
            ne(e),
                $.defaults = ie
        }
        ,
        $.disableAnimations = function () {
            $.setDefaults({
                duration: 0,
                updateDuration: 0,
                animateFill: !1
            })
        }
        ,
        $.hideAllPoppers = $e,
        $.useCapture = function () {
            Yt = !0
        }
        ;
    return le && setTimeout(function () {
        Xe(document.querySelectorAll('[data-tippy]')).forEach(function (e) {
            var t = e.getAttribute('data-tippy');
            t && $(e, {
                content: t
            })
        })
    }),
        function (e) {
            if (ce) {
                var t = document.createElement('style');
                t.type = 'text/css',
                    t.textContent = e,
                    document.head.insertBefore(t, document.head.firstChild)
            }
        }(ae),
        $
});
//# sourceMappingURL=tippy.all.min.js.map
