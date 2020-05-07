! function (n) {
    var e = {};

    function t(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = n, t.c = e, t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: r
        })
    }, t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, t.t = function (n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var o in n) t.d(r, o, function (e) {
                return n[e]
            }.bind(null, o));
        return r
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "", t(t.s = 0)
}([function (n, e, t) {
    "use strict";
    t.r(e);
    t(1);

    function r(n) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
            return typeof n
        } : function (n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        })(n)
    }

    function o(n, e) {
        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(n, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
        }
    }

    function a(n, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function (n) {
            if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }(n) : e
    }

    function c(n) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (c = function (n) {
            if (null === n || (t = n, -1 === Function.toString.call(t).indexOf("[native code]"))) return n;
            var t;
            if ("function" != typeof n) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(n)) return e.get(n);
                e.set(n, r)
            }

            function r() {
                return l(n, arguments, f(this).constructor)
            }
            return r.prototype = Object.create(n.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), u(r, n)
        })(n)
    }

    function l(n, e, t) {
        return (l = s() ? Reflect.construct : function (n, e, t) {
            var r = [null];
            r.push.apply(r, e);
            var o = new(Function.bind.apply(n, r));
            return t && u(o, t.prototype), o
        }).apply(null, arguments)
    }

    function s() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (n) {
            return !1
        }
    }

    function u(n, e) {
        return (u = Object.setPrototypeOf || function (n, e) {
            return n.__proto__ = e, n
        })(n, e)
    }

    function f(n) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n)
        })(n)
    }

    function p() {
        var n = document.getElementById("search_query").value;
        if (n.length < 1) alert("Error: Requires atleast 1 or more characters");
        else {
            var e = "https://api.jikan.moe/v3/search/anime?q=".concat(n, "&nolimit");
            document.getElementById("search_query_url").innerHTML = "( ^ _ ^ )", fetch(e).then((function (n) {
                return n.json()
            })).then((function (n) {
                document.getElementById("search_query_url").innerHTML = e, document.getElementById("search_query_url").href = e;
                for (var t = document.getElementById("search_results"); t.firstChild;) t.removeChild(t.firstChild);
                n.results.forEach((function (n) {
                    document.getElementById("search_results").insertAdjacentHTML("beforeend", '\n                <a href="'.concat(n.url, '" class="card">\n                    <div><span class="name">').concat(n.title, '</span></div>\n                    <div><img class="image" src="').concat(n.image_url, '" /></div>\n                    <div><span class="score">Score : ').concat(n.score, "</span></div>\n                </a>\n                "))
                }))
            }))
        }
    }
    document.getElementById("search").onclick = function () {
        return p()
    }, document.getElementById("search_query").onkeydown = function (n) {
        13 === n.keyCode && p()
    };
    var d = function (n) {
        ! function (n, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            n.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: n,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(n, e)
        }(d, n);
        var e, t, r, c, l, p = (e = d, t = s(), function () {
            var n, r = f(e);
            if (t) {
                var o = f(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return a(this, n)
        });

        function d() {
            return o(this, d), p.apply(this, arguments)
        }
        return r = d, (c = [{
            key: "connectedCallback",
            value: function () {
                this.render()
            }
        }, {
            key: "render",
            value: function () {
                this.innerHTML = '<a class="footer">Design by Al-Hikni</a>'
            }
        }]) && i(r.prototype, c), l && i(r, l), d
    }(c(HTMLElement));
    customElements.define("foo-nime", d);
    var h, m, b, g = new Image(215, 60),
        y = document.getElementById("logo");
    g.onload = function () {
        y.appendChild(g)
    }, g.src = "./logo.png", h = "./fav.png", m = document.querySelector("head"), (b = document.createElement("link")).setAttribute("rel", "shortcut icon"), b.setAttribute("href", h), m.appendChild(b)
}, function (n, e, t) {
    var r = t(2),
        o = t(3);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [
        [n.i, o, ""]
    ]);
    var i = {
        insert: "head",
        singleton: !1
    };
    r(o, i);
    n.exports = o.locals || {}
}, function (n, e, t) {
    "use strict";
    var r, o = function () {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
        },
        i = function () {
            var n = {};
            return function (e) {
                if (void 0 === n[e]) {
                    var t = document.querySelector(e);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (n) {
                        t = null
                    }
                    n[e] = t
                }
                return n[e]
            }
        }(),
        a = [];

    function c(n) {
        for (var e = -1, t = 0; t < a.length; t++)
            if (a[t].identifier === n) {
                e = t;
                break
            } return e
    }

    function l(n, e) {
        for (var t = {}, r = [], o = 0; o < n.length; o++) {
            var i = n[o],
                l = e.base ? i[0] + e.base : i[0],
                s = t[l] || 0,
                u = "".concat(l, " ").concat(s);
            t[l] = s + 1;
            var f = c(u),
                p = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                }; - 1 !== f ? (a[f].references++, a[f].updater(p)) : a.push({
                identifier: u,
                updater: b(p, e),
                references: 1
            }), r.push(u)
        }
        return r
    }

    function s(n) {
        var e = document.createElement("style"),
            r = n.attributes || {};
        if (void 0 === r.nonce) {
            var o = t.nc;
            o && (r.nonce = o)
        }
        if (Object.keys(r).forEach((function (n) {
                e.setAttribute(n, r[n])
            })), "function" == typeof n.insert) n.insert(e);
        else {
            var a = i(n.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(e)
        }
        return e
    }
    var u, f = (u = [], function (n, e) {
        return u[n] = e, u.filter(Boolean).join("\n")
    });

    function p(n, e, t, r) {
        var o = t ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (n.styleSheet) n.styleSheet.cssText = f(e, o);
        else {
            var i = document.createTextNode(o),
                a = n.childNodes;
            a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(i, a[e]) : n.appendChild(i)
        }
    }

    function d(n, e, t) {
        var r = t.css,
            o = t.media,
            i = t.sourceMap;
        if (o ? n.setAttribute("media", o) : n.removeAttribute("media"), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), n.styleSheet) n.styleSheet.cssText = r;
        else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(r))
        }
    }
    var h = null,
        m = 0;

    function b(n, e) {
        var t, r, o;
        if (e.singleton) {
            var i = m++;
            t = h || (h = s(e)), r = p.bind(null, t, i, !1), o = p.bind(null, t, i, !0)
        } else t = s(e), r = d.bind(null, t, e), o = function () {
            ! function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n)
            }(t)
        };
        return r(n),
            function (e) {
                if (e) {
                    if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                    r(n = e)
                } else o()
            }
    }
    n.exports = function (n, e) {
        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
        var t = l(n = n || [], e);
        return function (n) {
            if (n = n || [], "[object Array]" === Object.prototype.toString.call(n)) {
                for (var r = 0; r < t.length; r++) {
                    var o = c(t[r]);
                    a[o].references--
                }
                for (var i = l(n, e), s = 0; s < t.length; s++) {
                    var u = c(t[s]);
                    0 === a[u].references && (a[u].updater(), a.splice(u, 1))
                }
                t = i
            }
        }
    }
}, function (n, e, t) {
    (e = t(4)(!1)).push([n.i, '*, *:before, *:after {\n  background: none;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  outline: none;\n}\n\n@media (min-width: 900px) {\n  a,\n  input,\n  select,\n  textarea,\n  button,\n  footer {\n    font-family: sans-serif;\n    -webkit-transition: all .9s ease;\n    transition: all .9s ease;\n  }\n}\n\n.footer {\n  font-size: larger;\n  font-variant: small-caps;\n  font-family: sans-serif;\n  word-spacing: 5px;\n  color: teal;\n  position: fixed;\n  z-index: -1;\n  bottom: 10px;\n  left: -20px;\n  width: 100%;\n  text-align: right;\n}\n\n::-webkit-search-decoration,\n::-webkit-search-cancel-button,\n::-webkit-search-results-button,\n::-webkit-search-results-decoration {\n  display: none;\n}\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.691);\n}\n\n::-webkit-scrollbar-thumb {\n  background: teal;\n  border-radius: 10px;\n}\n\nheader {\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 60px;\n  position: fixed;\n  background-color: teal;\n  display: flex;\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);\n}\n\n.form {\n  left: 61%;\n  position: fixed;\n  padding-top: 10px;\n}\n\ninput {\n  background-color: white;\n  width: 230px;\n  height: 40px;\n  padding-left: 30px;\n  font-style: italic;\n  border-radius: 30px;\n}\n\ninput[type="text"] {\n    width: 250px;\n    height: 30px;\n    font-variant: small-caps;\n}\n\ninput[type="text"]::placeholder {\n    color: teal;\n    font-family: sans-serif;\n    font-size: medium;\n    width: 100%;\n    height: 100%;\n}\n\n#search{\n  background-color: white;\n  border-radius: 30px;\n  height: 40px;\n  left: 53%;\n  font-variant: small-caps;\n  width: 90px;\n  font-weight: bolder;\n  position: relative;\n  top: 10px;\n  color: teal;\n  font-family: sans-serif;\n}\n\n@media (max-width: 1300px) {\n  #search {\n    left: 53%;\n  }\n  \n  .form {\n    left: 64%;\n    position: fixed;\n    padding-top: 10px;\n  }\n}\n\n#app {\n  margin: 50px auto;\n  padding-top: 50px;\n}\n\n#logo {\n  position: fixed;\n  max-width: 215px;\n  top: 0px;\n  z-index: 1;\n}\n\n.card {\n  max-height: 150px;\n  margin: 10px;\n  padding: 10px;\n  max-width: 15%;\n  display: inline-table;\n}\n\n.image {\n  width: 100%;\n  max-width: 300px;\n  border-radius: 25px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.name {\n  font-family: sans-serif;\n  font-size: large;\n  font-weight: bolder;\n  text-decoration: none;\n  color: teal;\n  text-align: center;\n  align-content: stretch;\n}\n\n.score {\n  font-family: sans-serif;\n  font-size: medium;\n  font-weight: bolder;\n  margin-top: 20px;\n  text-decoration: none;\n  color: teal;\n}\n\na:link, a:visited {\n  text-align: center;\n  font-variant: small-caps;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-decoration: none;\n}\n\n.debug {\n  max-width: 10px;\n  border-radius: 55px;\n}\n\n.cols {\n  font-size: 0;\n  margin: 0 10px;\n}\n\n#search_query_url {\n  display: none;\n  visibility: hidden;\n}\n\nfoo-nime {\n  text-align: right;\n  position: relative;\n}\n\n @media (max-width: 900px) {\n    body {\n      text-rendering: optimizeSpeed;\n      font-family: sans-serif;\n      -webkit-transition: all .9s ease;\n      transition: all .9s ease;\n      background-color: teal;\n    }\n    header{\n        display: -webkit-inline-box;\n    }\n    #logo {\n      position: relative;\n      width: 100%;\n      top: 85px;\n      margin-left: 20%;\n      color: inherit;\n      height: 100%;\n    }\n    .form {\n      left: 55px;\n      position: relative;\n      padding-top: 10px;\n    }\n    .input {\n        background-color: white;\n        color: teal;\n    }\n    .card {\n      max-width: 300px;\n      padding: 20px;\n      margin: 30px;\n    }\n    span.name {\n        color: white;\n    }\n    span.score {\n        color: white;\n    }\n    input[type="text"]::placeholder {\n        font-size: small;\n        margin-left: 30px;\n    }\n    #search {\n      right: 20px;\n      width: 70px;\n      height: 40px;\n      color: white;\n      border: 1px white;\n      border-style: solid;\n      background-color: teal;\n      position: relative;\n      left: 0px;\n    }\n    .footer {\n      padding: 2px;\n      background-color: white;\n    }\n}\n\n', ""]), n.exports = e
}, function (n, e, t) {
    "use strict";
    n.exports = function (n) {
        var e = [];
        return e.toString = function () {
            return this.map((function (e) {
                var t = function (n, e) {
                    var t = n[1] || "",
                        r = n[3];
                    if (!r) return t;
                    if (e && "function" == typeof btoa) {
                        var o = (a = r, c = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(l, " */")),
                            i = r.sources.map((function (n) {
                                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(n, " */")
                            }));
                        return [t].concat(i).concat([o]).join("\n")
                    }
                    var a, c, l;
                    return [t].join("\n")
                }(e, n);
                return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
            })).join("")
        }, e.i = function (n, t, r) {
            "string" == typeof n && (n = [
                [null, n, ""]
            ]);
            var o = {};
            if (r)
                for (var i = 0; i < this.length; i++) {
                    var a = this[i][0];
                    null != a && (o[a] = !0)
                }
            for (var c = 0; c < n.length; c++) {
                var l = [].concat(n[c]);
                r && o[l[0]] || (t && (l[2] ? l[2] = "".concat(t, " and ").concat(l[2]) : l[2] = t), e.push(l))
            }
        }, e
    }
}]);