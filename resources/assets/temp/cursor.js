// /*
// object-assign
// (c) Sindre Sorhus
// @license MIT
// */
// e.exports = function shouldUseNative() {
//   try {
//     if (!Object.assign) return !1;
//     var e = new String("abc");
//     if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
//     for (var t = {}, i = 0; i < 10; i++) t["_" + String.fromCharCode(i)] = i;
//     if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
//       return t[e]
//     }).join("")) return !1;
//     var r = {};
//     return "abcdefghijklmnopqrst".split("").forEach(function (e) {
//       r[e] = e
//     }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
//   } catch (e) {
//     return !1
//   }
// }() ? Object.assign : function (e, t) {
//   for (var o, s, a = function toObject(e) {
//     if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
//     return Object(e)
//   }(e), l = 1; l < arguments.length; l++) {
//     for (var u in o = Object(arguments[l])) r.call(o, u) && (a[u] = o[u]);
//     if (i) {
//       s = i(o);
//       for (var c = 0; c < s.length; c++) n.call(o, s[c]) && (a[s[c]] = o[s[c]])
//     }
//   }
//   return a
// }
// },
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }();
//   var r = function () {
//     function ObservablePoint(e, t) {
//       var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
//         r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, ObservablePoint), this._x = i, this._y = r, this.cb = e, this.scope = t
//     }
//
//     return ObservablePoint.prototype.clone = function clone() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
//         t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
//       return new ObservablePoint(e || this.cb, t || this.scope, this._x, this._y)
//     }, ObservablePoint.prototype.set = function set(e, t) {
//       var i = e || 0, r = t || (0 !== t ? i : 0);
//       this._x === i && this._y === r || (this._x = i, this._y = r, this.cb.call(this.scope))
//     }, ObservablePoint.prototype.copy = function copy(e) {
//       this._x === e.x && this._y === e.y || (this._x = e.x, this._y = e.y, this.cb.call(this.scope))
//     }, ObservablePoint.prototype.equals = function equals(e) {
//       return e.x === this._x && e.y === this._y
//     }, i(ObservablePoint, [{
//       key: "x", get: function get() {
//         return this._x
//       }, set: function set(e) {
//         this._x !== e && (this._x = e, this.cb.call(this.scope))
//       }
//     }, {
//       key: "y", get: function get() {
//         return this._y
//       }, set: function set(e) {
//         this._y !== e && (this._y = e, this.cb.call(this.scope))
//       }
//     }]), ObservablePoint
//   }();
//   t.default = r
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(34));
//   var n = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
//     o = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
//     s = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
//     a = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], l = [], u = [];
//
//   function signum(e) {
//     return e < 0 ? -1 : e > 0 ? 1 : 0
//   }
//
//   !function init() {
//     for (var e = 0; e < 16; e++) {
//       var t = [];
//       u.push(t);
//       for (var i = 0; i < 16; i++) for (var c = signum(n[e] * n[i] + s[e] * o[i]), h = signum(o[e] * n[i] + a[e] * o[i]), d = signum(n[e] * s[i] + s[e] * a[i]), f = signum(o[e] * s[i] + a[e] * a[i]), p = 0; p < 16; p++) if (n[p] === c && o[p] === h && s[p] === d && a[p] === f) {
//         t.push(p);
//         break
//       }
//     }
//     for (var g = 0; g < 16; g++) {
//       var m = new r.default;
//       m.set(n[g], o[g], s[g], a[g], 0, 0), l.push(m)
//     }
//   }();
//   var c = {
//     E: 0,
//     SE: 1,
//     S: 2,
//     SW: 3,
//     W: 4,
//     NW: 5,
//     N: 6,
//     NE: 7,
//     MIRROR_VERTICAL: 8,
//     MIRROR_HORIZONTAL: 12,
//     uX: function uX(e) {
//       return n[e]
//     },
//     uY: function uY(e) {
//       return o[e]
//     },
//     vX: function vX(e) {
//       return s[e]
//     },
//     vY: function vY(e) {
//       return a[e]
//     },
//     inv: function inv(e) {
//       return 8 & e ? 15 & e : 7 & -e
//     },
//     add: function add(e, t) {
//       return u[e][t]
//     },
//     sub: function sub(e, t) {
//       return u[e][c.inv(t)]
//     },
//     rotate180: function rotate180(e) {
//       return 4 ^ e
//     },
//     isVertical: function isVertical(e) {
//       return 2 == (3 & e)
//     },
//     byDirection: function byDirection(e, t) {
//       return 2 * Math.abs(e) <= Math.abs(t) ? t >= 0 ? c.S : c.N : 2 * Math.abs(t) <= Math.abs(e) ? e > 0 ? c.E : c.W : t > 0 ? e > 0 ? c.SE : c.SW : e > 0 ? c.NE : c.NW
//     },
//     matrixAppendRotationInv: function matrixAppendRotationInv(e, t) {
//       var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
//         r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, n = l[c.inv(t)];
//       n.tx = i, n.ty = r, e.append(n)
//     }
//   };
//   t.default = c
// }
//
// ,
//
// function (e, t) {
//   e.exports = function (e, t, i) {
//     var r;
//     if (i) {
//       var n = i.tempAttribState, o = i.attribState;
//       for (r = 0; r < n.length; r++) n[r] = !1;
//       for (r = 0; r < t.length; r++) n[t[r].attribute.location] = !0;
//       for (r = 0; r < o.length; r++) o[r] !== n[r] && (o[r] = n[r], i.attribState[r] ? e.enableVertexAttribArray(r) : e.disableVertexAttribArray(r))
//     } else for (r = 0; r < t.length; r++) {
//       var s = t[r];
//       e.enableVertexAttribArray(s.attribute.location)
//     }
//   }
// }
//
// ,
//
// function (e, t) {
//   var i = function (e, t, i, r, n) {
//     this.gl = e, this.texture = e.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = t || -1, this.height = i || -1, this.format = r || e.RGBA, this.type = n || e.UNSIGNED_BYTE
//   };
//   i.prototype.upload = function (e) {
//     this.bind();
//     var t = this.gl;
//     t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
//     var i = e.videoWidth || e.width, r = e.videoHeight || e.height;
//     r !== this.height || i !== this.width ? t.texImage2D(t.TEXTURE_2D, 0, this.format, this.format, this.type, e) : t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, this.format, this.type, e), this.width = i, this.height = r
//   };
//   var r = !1;
//   i.prototype.uploadData = function (e, t, i) {
//     this.bind();
//     var n = this.gl;
//     if (e instanceof Float32Array) {
//       if (!r) {
//         if (!n.getExtension("OES_texture_float")) throw new Error("floating point textures not available");
//         r = !0
//       }
//       this.type = n.FLOAT
//     } else this.type = this.type || n.UNSIGNED_BYTE;
//     n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), t !== this.width || i !== this.height ? n.texImage2D(n.TEXTURE_2D, 0, this.format, t, i, 0, this.format, this.type, e || null) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, t, i, this.format, this.type, e || null), this.width = t, this.height = i
//   }, i.prototype.bind = function (e) {
//     var t = this.gl;
//     void 0 !== e && t.activeTexture(t.TEXTURE0 + e), t.bindTexture(t.TEXTURE_2D, this.texture)
//   }, i.prototype.unbind = function () {
//     var e = this.gl;
//     e.bindTexture(e.TEXTURE_2D, null)
//   }, i.prototype.minFilter = function (e) {
//     var t = this.gl;
//     this.bind(), this.mipmap ? t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, e ? t.LINEAR_MIPMAP_LINEAR : t.NEAREST_MIPMAP_NEAREST) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, e ? t.LINEAR : t.NEAREST)
//   }, i.prototype.magFilter = function (e) {
//     var t = this.gl;
//     this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, e ? t.LINEAR : t.NEAREST)
//   }, i.prototype.enableMipmap = function () {
//     var e = this.gl;
//     this.bind(), this.mipmap = !0, e.generateMipmap(e.TEXTURE_2D)
//   }, i.prototype.enableLinearScaling = function () {
//     this.minFilter(!0), this.magFilter(!0)
//   }, i.prototype.enableNearestScaling = function () {
//     this.minFilter(!1), this.magFilter(!1)
//   }, i.prototype.enableWrapClamp = function () {
//     var e = this.gl;
//     this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
//   }, i.prototype.enableWrapRepeat = function () {
//     var e = this.gl;
//     this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)
//   }, i.prototype.enableWrapMirrorRepeat = function () {
//     var e = this.gl;
//     this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.MIRRORED_REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.MIRRORED_REPEAT)
//   }, i.prototype.destroy = function () {
//     this.gl.deleteTexture(this.texture)
//   }, i.fromSource = function (e, t, r) {
//     var n = new i(e);
//     return n.premultiplyAlpha = r || !1, n.upload(t), n
//   }, i.fromData = function (e, t, r, n) {
//     var o = new i(e);
//     return o.uploadData(t, r, n), o
//   }, e.exports = i
// }
//
// ,
//
// function (e, t) {
//   var i = function (e, t, i) {
//     var r = e.createShader(t);
//     return e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (console.log(e.getShaderInfoLog(r)), null)
//   };
//   e.exports = function (e, t, r, n) {
//     var o = i(e, e.VERTEX_SHADER, t), s = i(e, e.FRAGMENT_SHADER, r), a = e.createProgram();
//     if (e.attachShader(a, o), e.attachShader(a, s), n) for (var l in n) e.bindAttribLocation(a, n[l], l);
//     return e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", e.getProgramParameter(a, e.VALIDATE_STATUS)), console.error("gl.getError()", e.getError()), "" !== e.getProgramInfoLog(a) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(a)), e.deleteProgram(a), a = null), e.deleteShader(o), e.deleteShader(s), a
//   }
// }
//
// ,
//
// function (e, t, i) {
//   var r = i(36), n = i(58), o = function (e, t, i, r) {
//     gl.vertexAttribPointer(this.location, this.size, e || gl.FLOAT, t || !1, i || 0, r || 0)
//   };
//   e.exports = function (e, t) {
//     for (var i = {}, s = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), a = 0; a < s; a++) {
//       var l = e.getActiveAttrib(t, a), u = r(e, l.type);
//       i[l.name] = {type: u, size: n(u), location: e.getAttribLocation(t, l.name), pointer: o}
//     }
//     return i
//   }
// }
//
// ,
//
// function (e, t) {
//   var i = {
//     float: 1,
//     vec2: 2,
//     vec3: 3,
//     vec4: 4,
//     int: 1,
//     ivec2: 2,
//     ivec3: 3,
//     ivec4: 4,
//     bool: 1,
//     bvec2: 2,
//     bvec3: 3,
//     bvec4: 4,
//     mat2: 4,
//     mat3: 9,
//     mat4: 16,
//     sampler2D: 1
//   };
//   e.exports = function (e) {
//     return i[e]
//   }
// }
//
// ,
//
// function (e, t, i) {
//   var r = i(36), n = i(60);
//   e.exports = function (e, t) {
//     for (var i = {}, o = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), s = 0; s < o; s++) {
//       var a = e.getActiveUniform(t, s), l = a.name.replace(/\[.*?\]/, ""), u = r(e, a.type);
//       i[l] = {type: u, size: a.size, location: e.getUniformLocation(t, l), value: n(u, a.size)}
//     }
//     return i
//   }
// }
//
// ,
//
// function (e, t) {
//   var i = function (e) {
//     for (var t = new Array(e), i = 0; i < t.length; i++) t[i] = !1;
//     return t
//   };
//   e.exports = function (e, t) {
//     switch (e) {
//       case"float":
//         return 0;
//       case"vec2":
//         return new Float32Array(2 * t);
//       case"vec3":
//         return new Float32Array(3 * t);
//       case"vec4":
//         return new Float32Array(4 * t);
//       case"int":
//       case"sampler2D":
//         return 0;
//       case"ivec2":
//         return new Int32Array(2 * t);
//       case"ivec3":
//         return new Int32Array(3 * t);
//       case"ivec4":
//         return new Int32Array(4 * t);
//       case"bool":
//         return !1;
//       case"bvec2":
//         return i(2 * t);
//       case"bvec3":
//         return i(3 * t);
//       case"bvec4":
//         return i(4 * t);
//       case"mat2":
//         return new Float32Array([1, 0, 0, 1]);
//       case"mat3":
//         return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
//       case"mat4":
//         return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
//     }
//   }
// }
//
// ,
//
// function (e, t) {
//   e.exports = function (e, t) {
//     return "precision" !== e.substring(0, 9) ? "precision " + t + " float;\n" + e : e
//   }
// }
//
// ,
//
// function (e, t) {
//   var i = function (e) {
//     return function () {
//       return this.data[e].value
//     }
//   }, r = {
//     float: function setSingleFloat(e, t, i) {
//       e.uniform1f(t, i)
//     }, vec2: function setSingleVec2(e, t, i) {
//       e.uniform2f(t, i[0], i[1])
//     }, vec3: function setSingleVec3(e, t, i) {
//       e.uniform3f(t, i[0], i[1], i[2])
//     }, vec4: function setSingleVec4(e, t, i) {
//       e.uniform4f(t, i[0], i[1], i[2], i[3])
//     }, int: function setSingleInt(e, t, i) {
//       e.uniform1i(t, i)
//     }, ivec2: function setSingleIvec2(e, t, i) {
//       e.uniform2i(t, i[0], i[1])
//     }, ivec3: function setSingleIvec3(e, t, i) {
//       e.uniform3i(t, i[0], i[1], i[2])
//     }, ivec4: function setSingleIvec4(e, t, i) {
//       e.uniform4i(t, i[0], i[1], i[2], i[3])
//     }, bool: function setSingleBool(e, t, i) {
//       e.uniform1i(t, i)
//     }, bvec2: function setSingleBvec2(e, t, i) {
//       e.uniform2i(t, i[0], i[1])
//     }, bvec3: function setSingleBvec3(e, t, i) {
//       e.uniform3i(t, i[0], i[1], i[2])
//     }, bvec4: function setSingleBvec4(e, t, i) {
//       e.uniform4i(t, i[0], i[1], i[2], i[3])
//     }, mat2: function setSingleMat2(e, t, i) {
//       e.uniformMatrix2fv(t, !1, i)
//     }, mat3: function setSingleMat3(e, t, i) {
//       e.uniformMatrix3fv(t, !1, i)
//     }, mat4: function setSingleMat4(e, t, i) {
//       e.uniformMatrix4fv(t, !1, i)
//     }, sampler2D: function setSingleSampler2D(e, t, i) {
//       e.uniform1i(t, i)
//     }
//   }, n = {
//     float: function setFloatArray(e, t, i) {
//       e.uniform1fv(t, i)
//     }, vec2: function setVec2Array(e, t, i) {
//       e.uniform2fv(t, i)
//     }, vec3: function setVec3Array(e, t, i) {
//       e.uniform3fv(t, i)
//     }, vec4: function setVec4Array(e, t, i) {
//       e.uniform4fv(t, i)
//     }, int: function setIntArray(e, t, i) {
//       e.uniform1iv(t, i)
//     }, ivec2: function setIvec2Array(e, t, i) {
//       e.uniform2iv(t, i)
//     }, ivec3: function setIvec3Array(e, t, i) {
//       e.uniform3iv(t, i)
//     }, ivec4: function setIvec4Array(e, t, i) {
//       e.uniform4iv(t, i)
//     }, bool: function setBoolArray(e, t, i) {
//       e.uniform1iv(t, i)
//     }, bvec2: function setBvec2Array(e, t, i) {
//       e.uniform2iv(t, i)
//     }, bvec3: function setBvec3Array(e, t, i) {
//       e.uniform3iv(t, i)
//     }, bvec4: function setBvec4Array(e, t, i) {
//       e.uniform4iv(t, i)
//     }, sampler2D: function setSampler2DArray(e, t, i) {
//       e.uniform1iv(t, i)
//     }
//   };
//
//   function generateSetter(e, t) {
//     return function (i) {
//       this.data[e].value = i;
//       var o = this.data[e].location;
//       1 === t.size ? r[t.type](this.gl, o, i) : n[t.type](this.gl, o, i)
//     }
//   }
//
//   function getUniformGroup(e, t) {
//     for (var i = t, r = 0; r < e.length - 1; r++) {
//       var n = i[e[r]] || {data: {}};
//       i[e[r]] = n, i = n
//     }
//     return i
//   }
//
//   e.exports = function (e, t) {
//     var r = {data: {}};
//     r.gl = e;
//     for (var n = Object.keys(t), o = 0; o < n.length; o++) {
//       var s = n[o], a = s.split("."), l = a[a.length - 1], u = getUniformGroup(a, r), c = t[s];
//       u.data[l] = c, u.gl = e, Object.defineProperty(u, l, {get: i(l), set: generateSetter(l, c)})
//     }
//     return r
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }(), n = _interopRequireDefault(i(15)), o = i(1), s = _interopRequireDefault(i(5)), a = _interopRequireDefault(i(64)),
//     l = _interopRequireDefault(i(65)), u = _interopRequireDefault(i(37)), c = i(7);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var h = function (e) {
//     function DisplayObject() {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, DisplayObject);
//       var t = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this)), i = s.default.TRANSFORM_MODE === o.TRANSFORM_MODE.STATIC ? a.default : l.default;
//       return t.tempDisplayObjectParent = null, t.transform = new i, t.alpha = 1, t.visible = !0, t.renderable = !0, t.parent = null, t.worldAlpha = 1, t.filterArea = null, t._filters = null, t._enabledFilters = null, t._bounds = new u.default, t._boundsID = 0, t._lastBoundsID = -1, t._boundsRect = null, t._localBoundsRect = null, t._mask = null, t._destroyed = !1, t
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(DisplayObject, e), DisplayObject.prototype.updateTransform = function updateTransform() {
//       this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
//     }, DisplayObject.prototype._recursivePostUpdateTransform = function _recursivePostUpdateTransform() {
//       this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
//     }, DisplayObject.prototype.getBounds = function getBounds(e, t) {
//       return e || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), t || (this._boundsRect || (this._boundsRect = new c.Rectangle), t = this._boundsRect), this._bounds.getRectangle(t)
//     }, DisplayObject.prototype.getLocalBounds = function getLocalBounds(e) {
//       var t = this.transform, i = this.parent;
//       this.parent = null, this.transform = this._tempDisplayObjectParent.transform, e || (this._localBoundsRect || (this._localBoundsRect = new c.Rectangle), e = this._localBoundsRect);
//       var r = this.getBounds(!1, e);
//       return this.parent = i, this.transform = t, r
//     }, DisplayObject.prototype.toGlobal = function toGlobal(e, t) {
//       return arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(e, t)
//     }, DisplayObject.prototype.toLocal = function toLocal(e, t, i, r) {
//       return t && (e = t.toGlobal(e, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(e, i)
//     }, DisplayObject.prototype.renderWebGL = function renderWebGL(e) {
//     }, DisplayObject.prototype.renderCanvas = function renderCanvas(e) {
//     }, DisplayObject.prototype.setParent = function setParent(e) {
//       if (!e || !e.addChild) throw new Error("setParent: Argument must be a Container");
//       return e.addChild(this), e
//     }, DisplayObject.prototype.setTransform = function setTransform() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
//         t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
//         i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
//         r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
//         n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
//         o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
//         s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
//         a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
//         l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
//       return this.position.x = e, this.position.y = t, this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = l, this
//     }, DisplayObject.prototype.destroy = function destroy() {
//       this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
//     }, r(DisplayObject, [{
//       key: "_tempDisplayObjectParent", get: function get() {
//         return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new DisplayObject), this.tempDisplayObjectParent
//       }
//     }, {
//       key: "x", get: function get() {
//         return this.position.x
//       }, set: function set(e) {
//         this.transform.position.x = e
//       }
//     }, {
//       key: "y", get: function get() {
//         return this.position.y
//       }, set: function set(e) {
//         this.transform.position.y = e
//       }
//     }, {
//       key: "worldTransform", get: function get() {
//         return this.transform.worldTransform
//       }
//     }, {
//       key: "localTransform", get: function get() {
//         return this.transform.localTransform
//       }
//     }, {
//       key: "position", get: function get() {
//         return this.transform.position
//       }, set: function set(e) {
//         this.transform.position.copy(e)
//       }
//     }, {
//       key: "scale", get: function get() {
//         return this.transform.scale
//       }, set: function set(e) {
//         this.transform.scale.copy(e)
//       }
//     }, {
//       key: "pivot", get: function get() {
//         return this.transform.pivot
//       }, set: function set(e) {
//         this.transform.pivot.copy(e)
//       }
//     }, {
//       key: "skew", get: function get() {
//         return this.transform.skew
//       }, set: function set(e) {
//         this.transform.skew.copy(e)
//       }
//     }, {
//       key: "rotation", get: function get() {
//         return this.transform.rotation
//       }, set: function set(e) {
//         this.transform.rotation = e
//       }
//     }, {
//       key: "worldVisible", get: function get() {
//         var e = this;
//         do {
//           if (!e.visible) return !1;
//           e = e.parent
//         } while (e);
//         return !0
//       }
//     }, {
//       key: "mask", get: function get() {
//         return this._mask
//       }, set: function set(e) {
//         this._mask && (this._mask.renderable = !0, this._mask.isMask = !1), this._mask = e, this._mask && (this._mask.renderable = !1, this._mask.isMask = !0)
//       }
//     }, {
//       key: "filters", get: function get() {
//         return this._filters && this._filters.slice()
//       }, set: function set(e) {
//         this._filters = e && e.slice()
//       }
//     }]), DisplayObject
//   }(n.default);
//   t.default = h, h.prototype.displayObjectUpdateTransform = h.prototype.updateTransform
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = i(7);
//   var o = function (e) {
//     function TransformStatic() {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TransformStatic);
//       var t = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this));
//       return t.position = new n.ObservablePoint(t.onChange, t, 0, 0), t.scale = new n.ObservablePoint(t.onChange, t, 1, 1), t.pivot = new n.ObservablePoint(t.onChange, t, 0, 0), t.skew = new n.ObservablePoint(t.updateSkew, t, 0, 0), t._rotation = 0, t._cx = 1, t._sx = 0, t._cy = 0, t._sy = 1, t._localID = 0, t._currentLocalID = 0, t
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(TransformStatic, e), TransformStatic.prototype.onChange = function onChange() {
//       this._localID++
//     }, TransformStatic.prototype.updateSkew = function updateSkew() {
//       this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++
//     }, TransformStatic.prototype.updateLocalTransform = function updateLocalTransform() {
//       var e = this.localTransform;
//       this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x, e.b = this._sx * this.scale._x, e.c = this._cy * this.scale._y, e.d = this._sy * this.scale._y, e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c), e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d), this._currentLocalID = this._localID, this._parentID = -1)
//     }, TransformStatic.prototype.updateTransform = function updateTransform(e) {
//       var t = this.localTransform;
//       if (this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x, t.b = this._sx * this.scale._x, t.c = this._cy * this.scale._y, t.d = this._sy * this.scale._y, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== e._worldID) {
//         var i = e.worldTransform, r = this.worldTransform;
//         r.a = t.a * i.a + t.b * i.c, r.b = t.a * i.b + t.b * i.d, r.c = t.c * i.a + t.d * i.c, r.d = t.c * i.b + t.d * i.d, r.tx = t.tx * i.a + t.ty * i.c + i.tx, r.ty = t.tx * i.b + t.ty * i.d + i.ty, this._parentID = e._worldID, this._worldID++
//       }
//     }, TransformStatic.prototype.setFromMatrix = function setFromMatrix(e) {
//       e.decompose(this), this._localID++
//     }, r(TransformStatic, [{
//       key: "rotation", get: function get() {
//         return this._rotation
//       }, set: function set(e) {
//         this._rotation = e, this.updateSkew()
//       }
//     }]), TransformStatic
//   }(function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(39)).default);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = i(7);
//   var o = function (e) {
//     function Transform() {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Transform);
//       var t = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this));
//       return t.position = new n.Point(0, 0), t.scale = new n.Point(1, 1), t.skew = new n.ObservablePoint(t.updateSkew, t, 0, 0), t.pivot = new n.Point(0, 0), t._rotation = 0, t._cx = 1, t._sx = 0, t._cy = 0, t._sy = 1, t
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(Transform, e), Transform.prototype.updateSkew = function updateSkew() {
//       this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x)
//     }, Transform.prototype.updateLocalTransform = function updateLocalTransform() {
//       var e = this.localTransform;
//       e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d)
//     }, Transform.prototype.updateTransform = function updateTransform(e) {
//       var t = this.localTransform;
//       t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d);
//       var i = e.worldTransform, r = this.worldTransform;
//       r.a = t.a * i.a + t.b * i.c, r.b = t.a * i.b + t.b * i.d, r.c = t.c * i.a + t.d * i.c, r.d = t.c * i.b + t.d * i.d, r.tx = t.tx * i.a + t.ty * i.c + i.tx, r.ty = t.tx * i.b + t.ty * i.d + i.ty, this._worldID++
//     }, Transform.prototype.setFromMatrix = function setFromMatrix(e) {
//       e.decompose(this)
//     }, r(Transform, [{
//       key: "rotation", get: function get() {
//         return this._rotation
//       }, set: function set(e) {
//         this._rotation = e, this.updateSkew()
//       }
//     }]), Transform
//   }(function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(39)).default);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function determineCrossOrigin(e) {
//     var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
//     if (0 === e.indexOf("data:")) return "";
//     t = t || window.location, n || (n = document.createElement("a"));
//     n.href = e;
//     var i = !(e = r.default.parse(n.href)).port && "" === t.port || e.port === t.port;
//     if (e.hostname !== t.hostname || !i || e.protocol !== t.protocol) return "anonymous";
//     return ""
//   };
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(67));
//   var n = void 0
// }
//
// ,
//
// function (e, t, i) {
//   var r = i(155), n = i(156);
//
//   function Url() {
//     this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
//   }
//
//   t.parse = urlParse, t.resolve = function urlResolve(e, t) {
//     return urlParse(e, !1, !0).resolve(t)
//   }, t.resolveObject = function urlResolveObject(e, t) {
//     return e ? urlParse(e, !1, !0).resolveObject(t) : t
//   }, t.format = function urlFormat(e) {
//     n.isString(e) && (e = urlParse(e));
//     return e instanceof Url ? e.format() : Url.prototype.format.call(e)
//   }, t.Url = Url;
//   var o = /^([a-z0-9.+-]+:)/i, s = /:[0-9]*$/, a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
//     l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), u = ["'"].concat(l),
//     c = ["%", "/", "?", ";", "#"].concat(u), h = ["/", "?", "#"], d = /^[+a-z0-9A-Z_-]{0,63}$/,
//     f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, p = {javascript: !0, "javascript:": !0},
//     g = {javascript: !0, "javascript:": !0}, m = {
//       http: !0,
//       https: !0,
//       ftp: !0,
//       gopher: !0,
//       file: !0,
//       "http:": !0,
//       "https:": !0,
//       "ftp:": !0,
//       "gopher:": !0,
//       "file:": !0
//     }, v = i(157);
//
//   function urlParse(e, t, i) {
//     if (e && n.isObject(e) && e instanceof Url) return e;
//     var r = new Url;
//     return r.parse(e, t, i), r
//   }
//
//   Url.prototype.parse = function (e, t, i) {
//     if (!n.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
//     var s = e.indexOf("?"), l = -1 !== s && s < e.indexOf("#") ? "?" : "#", y = e.split(l);
//     y[0] = y[0].replace(/\\/g, "/");
//     var _ = e = y.join(l);
//     if (_ = _.trim(), !i && 1 === e.split("#").length) {
//       var b = a.exec(_);
//       if (b) return this.path = _, this.href = _, this.pathname = b[1], b[2] ? (this.search = b[2], this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
//     }
//     var x = o.exec(_);
//     if (x) {
//       var w = (x = x[0]).toLowerCase();
//       this.protocol = w, _ = _.substr(x.length)
//     }
//     if (i || x || _.match(/^\/\/[^@\/]+@[^@\/]+/)) {
//       var T = "//" === _.substr(0, 2);
//       !T || x && g[x] || (_ = _.substr(2), this.slashes = !0)
//     }
//     if (!g[x] && (T || x && !m[x])) {
//       for (var C, S, E = -1, P = 0; P < h.length; P++) {
//         -1 !== (M = _.indexOf(h[P])) && (-1 === E || M < E) && (E = M)
//       }
//       -1 !== (S = -1 === E ? _.lastIndexOf("@") : _.lastIndexOf("@", E)) && (C = _.slice(0, S), _ = _.slice(S + 1), this.auth = decodeURIComponent(C)), E = -1;
//       for (P = 0; P < c.length; P++) {
//         var M;
//         -1 !== (M = _.indexOf(c[P])) && (-1 === E || M < E) && (E = M)
//       }
//       -1 === E && (E = _.length), this.host = _.slice(0, E), _ = _.slice(E), this.parseHost(), this.hostname = this.hostname || "";
//       var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
//       if (!O) for (var R = this.hostname.split(/\./), D = (P = 0, R.length); P < D; P++) {
//         var A = R[P];
//         if (A && !A.match(d)) {
//           for (var k = "", I = 0, L = A.length; I < L; I++) A.charCodeAt(I) > 127 ? k += "x" : k += A[I];
//           if (!k.match(d)) {
//             var N = R.slice(0, P), F = R.slice(P + 1), B = A.match(f);
//             B && (N.push(B[1]), F.unshift(B[2])), F.length && (_ = "/" + F.join(".") + _), this.hostname = N.join(".");
//             break
//           }
//         }
//       }
//       this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = r.toASCII(this.hostname));
//       var j = this.port ? ":" + this.port : "", z = this.hostname || "";
//       this.host = z + j, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== _[0] && (_ = "/" + _))
//     }
//     if (!p[w]) for (P = 0, D = u.length; P < D; P++) {
//       var U = u[P];
//       if (-1 !== _.indexOf(U)) {
//         var q = encodeURIComponent(U);
//         q === U && (q = escape(U)), _ = _.split(U).join(q)
//       }
//     }
//     var H = _.indexOf("#");
//     -1 !== H && (this.hash = _.substr(H), _ = _.slice(0, H));
//     var W = _.indexOf("?");
//     if (-1 !== W ? (this.search = _.substr(W), this.query = _.substr(W + 1), t && (this.query = v.parse(this.query)), _ = _.slice(0, W)) : t && (this.search = "", this.query = {}), _ && (this.pathname = _), m[w] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
//       j = this.pathname || "";
//       var X = this.search || "";
//       this.path = j + X
//     }
//     return this.href = this.format(), this
//   }, Url.prototype.format = function () {
//     var e = this.auth || "";
//     e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
//     var t = this.protocol || "", i = this.pathname || "", r = this.hash || "", o = !1, s = "";
//     this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && n.isObject(this.query) && Object.keys(this.query).length && (s = v.stringify(this.query));
//     var a = this.search || s && "?" + s || "";
//     return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || m[t]) && !1 !== o ? (o = "//" + (o || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : o || (o = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), t + o + (i = i.replace(/[?#]/g, function (e) {
//       return encodeURIComponent(e)
//     })) + (a = a.replace("#", "%23")) + r
//   }, Url.prototype.resolve = function (e) {
//     return this.resolveObject(urlParse(e, !1, !0)).format()
//   }, Url.prototype.resolveObject = function (e) {
//     if (n.isString(e)) {
//       var t = new Url;
//       t.parse(e, !1, !0), e = t
//     }
//     for (var i = new Url, r = Object.keys(this), o = 0; o < r.length; o++) {
//       var s = r[o];
//       i[s] = this[s]
//     }
//     if (i.hash = e.hash, "" === e.href) return i.href = i.format(), i;
//     if (e.slashes && !e.protocol) {
//       for (var a = Object.keys(e), l = 0; l < a.length; l++) {
//         var u = a[l];
//         "protocol" !== u && (i[u] = e[u])
//       }
//       return m[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
//     }
//     if (e.protocol && e.protocol !== i.protocol) {
//       if (!m[e.protocol]) {
//         for (var c = Object.keys(e), h = 0; h < c.length; h++) {
//           var d = c[h];
//           i[d] = e[d]
//         }
//         return i.href = i.format(), i
//       }
//       if (i.protocol = e.protocol, e.host || g[e.protocol]) i.pathname = e.pathname; else {
//         for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift());) ;
//         e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), i.pathname = f.join("/")
//       }
//       if (i.search = e.search, i.query = e.query, i.host = e.host || "", i.auth = e.auth, i.hostname = e.hostname || e.host, i.port = e.port, i.pathname || i.search) {
//         var p = i.pathname || "", v = i.search || "";
//         i.path = p + v
//       }
//       return i.slashes = i.slashes || e.slashes, i.href = i.format(), i
//     }
//     var y = i.pathname && "/" === i.pathname.charAt(0), _ = e.host || e.pathname && "/" === e.pathname.charAt(0),
//       b = _ || y || i.host && e.pathname, x = b, w = i.pathname && i.pathname.split("/") || [],
//       T = (f = e.pathname && e.pathname.split("/") || [], i.protocol && !m[i.protocol]);
//     if (T && (i.hostname = "", i.port = null, i.host && ("" === w[0] ? w[0] = i.host : w.unshift(i.host)), i.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), b = b && ("" === f[0] || "" === w[0])), _) i.host = e.host || "" === e.host ? e.host : i.host, i.hostname = e.hostname || "" === e.hostname ? e.hostname : i.hostname, i.search = e.search, i.query = e.query, w = f; else if (f.length) w || (w = []), w.pop(), w = w.concat(f), i.search = e.search, i.query = e.query; else if (!n.isNullOrUndefined(e.search)) {
//       if (T) i.hostname = i.host = w.shift(), (M = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = M.shift(), i.host = i.hostname = M.shift());
//       return i.search = e.search, i.query = e.query, n.isNull(i.pathname) && n.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
//     }
//     if (!w.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
//     for (var C = w.slice(-1)[0], S = (i.host || e.host || w.length > 1) && ("." === C || ".." === C) || "" === C, E = 0, P = w.length; P >= 0; P--) "." === (C = w[P]) ? w.splice(P, 1) : ".." === C ? (w.splice(P, 1), E++) : E && (w.splice(P, 1), E--);
//     if (!b && !x) for (; E--; E) w.unshift("..");
//     !b || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), S && "/" !== w.join("/").substr(-1) && w.push("");
//     var M, O = "" === w[0] || w[0] && "/" === w[0].charAt(0);
//     T && (i.hostname = i.host = O ? "" : w.length ? w.shift() : "", (M = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = M.shift(), i.host = i.hostname = M.shift()));
//     return (b = b || i.host && w.length) && !O && w.unshift(""), w.length ? i.pathname = w.join("/") : (i.pathname = null, i.path = null), n.isNull(i.pathname) && n.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = e.auth || i.auth, i.slashes = i.slashes || e.slashes, i.href = i.format(), i
//   }, Url.prototype.parseHost = function () {
//     var e = this.host, t = s.exec(e);
//     t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = _interopRequireDefault(i(18)), o = i(3), s = i(43), a = i(1), l = _interopRequireDefault(i(66));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var u = function (e) {
//     function VideoBaseTexture(t, i) {
//       if (function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, VideoBaseTexture), !t) throw new Error("No video source element specified.");
//       (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0);
//       var r = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t, i));
//       return r.width = t.videoWidth, r.height = t.videoHeight, r._autoUpdate = !0, r._isAutoUpdating = !1, r.autoPlay = !0, r.update = r.update.bind(r), r._onCanPlay = r._onCanPlay.bind(r), t.addEventListener("play", r._onPlayStart.bind(r)), t.addEventListener("pause", r._onPlayStop.bind(r)), r.hasLoaded = !1, r.__loaded = !1, r._isSourceReady() ? r._onCanPlay() : (t.addEventListener("canplay", r._onCanPlay), t.addEventListener("canplaythrough", r._onCanPlay)), r
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(VideoBaseTexture, e), VideoBaseTexture.prototype._isSourcePlaying = function _isSourcePlaying() {
//       var e = this.source;
//       return e.currentTime > 0 && !1 === e.paused && !1 === e.ended && e.readyState > 2
//     }, VideoBaseTexture.prototype._isSourceReady = function _isSourceReady() {
//       return 3 === this.source.readyState || 4 === this.source.readyState
//     }, VideoBaseTexture.prototype._onPlayStart = function _onPlayStart() {
//       this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (s.shared.add(this.update, this, a.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0)
//     }, VideoBaseTexture.prototype._onPlayStop = function _onPlayStop() {
//       this._isAutoUpdating && (s.shared.remove(this.update, this), this._isAutoUpdating = !1)
//     }, VideoBaseTexture.prototype._onCanPlay = function _onCanPlay() {
//       this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.emit("loaded", this)), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play())
//     }, VideoBaseTexture.prototype.destroy = function destroy() {
//       this._isAutoUpdating && s.shared.remove(this.update, this), this.source && this.source._pixiId && (n.default.removeFromCache(this.source._pixiId), delete this.source._pixiId, this.source.pause(), this.source.src = "", this.source.load()), e.prototype.destroy.call(this)
//     }, VideoBaseTexture.fromVideo = function fromVideo(e, t) {
//       e._pixiId || (e._pixiId = "video_" + (0, o.uid)());
//       var i = o.BaseTextureCache[e._pixiId];
//       return i || (i = new VideoBaseTexture(e, t), n.default.addToCache(i, e._pixiId)), i
//     }, VideoBaseTexture.fromUrl = function fromUrl(e, t, i) {
//       var r = document.createElement("video");
//       r.setAttribute("webkit-playsinline", ""), r.setAttribute("playsinline", "");
//       var n = Array.isArray(e) ? e[0].src || e[0] : e.src || e;
//       if (void 0 === i && 0 !== n.indexOf("data:") ? r.crossOrigin = (0, l.default)(n) : i && (r.crossOrigin = "string" == typeof i ? i : "anonymous"), Array.isArray(e)) for (var o = 0; o < e.length; ++o) r.appendChild(createSource(e[o].src || e[o], e[o].mime)); else r.appendChild(createSource(n, e.mime));
//       return r.load(), VideoBaseTexture.fromVideo(r, t)
//     }, r(VideoBaseTexture, [{
//       key: "autoUpdate", get: function get() {
//         return this._autoUpdate
//       }, set: function set(e) {
//         e !== this._autoUpdate && (this._autoUpdate = e, !this._autoUpdate && this._isAutoUpdating ? (s.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (s.shared.add(this.update, this, a.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0))
//       }
//     }]), VideoBaseTexture
//   }(n.default);
//
//   function createSource(e, t) {
//     t || (t = "video/" + (e = e.split("?").shift().toLowerCase()).substr(e.lastIndexOf(".") + 1));
//     var i = document.createElement("source");
//     return i.src = e, i.type = t, i
//   }
//
//   t.default = u, u.fromUrls = u.fromUrl
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(53));
//   var n = function () {
//     function TextureUvs() {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TextureUvs), this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
//     }
//
//     return TextureUvs.prototype.set = function set(e, t, i) {
//       var n = t.width, o = t.height;
//       if (i) {
//         var s = e.width / 2 / n, a = e.height / 2 / o, l = e.x / n + s, u = e.y / o + a;
//         i = r.default.add(i, r.default.NW), this.x0 = l + s * r.default.uX(i), this.y0 = u + a * r.default.uY(i), i = r.default.add(i, 2), this.x1 = l + s * r.default.uX(i), this.y1 = u + a * r.default.uY(i), i = r.default.add(i, 2), this.x2 = l + s * r.default.uX(i), this.y2 = u + a * r.default.uY(i), i = r.default.add(i, 2), this.x3 = l + s * r.default.uX(i), this.y3 = u + a * r.default.uY(i)
//       } else this.x0 = e.x / n, this.y0 = e.y / o, this.x1 = (e.x + e.width) / n, this.y1 = e.y / o, this.x2 = (e.x + e.width) / n, this.y2 = (e.y + e.height) / o, this.x3 = e.x / n, this.y3 = (e.y + e.height) / o;
//       this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
//     }, TextureUvs
//   }();
//   t.default = n
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }(), n = i(3), o = i(7), s = i(1), a = _interopRequireDefault(i(5)), l = _interopRequireDefault(i(20)),
//     u = _interopRequireDefault(i(44)), c = _interopRequireDefault(i(15));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var h = new o.Matrix, d = function (e) {
//     function SystemRenderer(t, i, r, u) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, SystemRenderer);
//       var c = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this));
//       return (0, n.sayHello)(t), "number" == typeof i && (i = Object.assign({
//         width: i,
//         height: r || a.default.RENDER_OPTIONS.height
//       }, u)), i = Object.assign({}, a.default.RENDER_OPTIONS, i), c.options = i, c.type = s.RENDERER_TYPE.UNKNOWN, c.screen = new o.Rectangle(0, 0, i.width, i.height), c.view = i.view || document.createElement("canvas"), c.resolution = i.resolution || a.default.RESOLUTION, c.transparent = i.transparent, c.autoResize = i.autoResize || !1, c.blendModes = null, c.preserveDrawingBuffer = i.preserveDrawingBuffer, c.clearBeforeRender = i.clearBeforeRender, c.roundPixels = i.roundPixels, c._backgroundColor = 0, c._backgroundColorRgba = [0, 0, 0, 0], c._backgroundColorString = "#000000", c.backgroundColor = i.backgroundColor || c._backgroundColor, c._tempDisplayObjectParent = new l.default, c._lastObjectRendered = c._tempDisplayObjectParent, c
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(SystemRenderer, e), SystemRenderer.prototype.resize = function resize(e, t) {
//       this.screen.width = e, this.screen.height = t, this.view.width = e * this.resolution, this.view.height = t * this.resolution, this.autoResize && (this.view.style.width = e + "px", this.view.style.height = t + "px")
//     }, SystemRenderer.prototype.generateTexture = function generateTexture(e, t, i, r) {
//       r = r || e.getLocalBounds();
//       var n = u.default.create(0 | r.width, 0 | r.height, t, i);
//       return h.tx = -r.x, h.ty = -r.y, this.render(e, n, !1, h, !!e.parent), n
//     }, SystemRenderer.prototype.destroy = function destroy(e) {
//       e && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = s.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
//     }, r(SystemRenderer, [{
//       key: "width", get: function get() {
//         return this.view.width
//       }
//     }, {
//       key: "height", get: function get() {
//         return this.view.height
//       }
//     }, {
//       key: "backgroundColor", get: function get() {
//         return this._backgroundColor
//       }, set: function set(e) {
//         this._backgroundColor = e, this._backgroundColorString = (0, n.hex2string)(e), (0, n.hex2rgb)(e, this._backgroundColorRgba)
//       }
//     }]), SystemRenderer
//   }(c.default);
//   t.default = d
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(18)), n = _interopRequireDefault(i(5));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var o = function (e) {
//     function BaseRenderTexture() {
//       var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
//         i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, r = arguments[2], o = arguments[3];
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, BaseRenderTexture);
//       var s = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, null, r));
//       return s.resolution = o || n.default.RESOLUTION, s.width = Math.ceil(t), s.height = Math.ceil(i), s.realWidth = s.width * s.resolution, s.realHeight = s.height * s.resolution, s.scaleMode = void 0 !== r ? r : n.default.SCALE_MODE, s.hasLoaded = !0, s._glRenderTargets = {}, s._canvasRenderTarget = null, s.valid = !1, s
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(BaseRenderTexture, e), BaseRenderTexture.prototype.resize = function resize(e, t) {
//       e = Math.ceil(e), t = Math.ceil(t), e === this.width && t === this.height || (this.valid = e > 0 && t > 0, this.width = e, this.height = t, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
//     }, BaseRenderTexture.prototype.destroy = function destroy() {
//       e.prototype.destroy.call(this, !0), this.renderer = null
//     }, BaseRenderTexture
//   }(r.default);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(5));
//   var o = function () {
//     function CanvasRenderTarget(e, t, i) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, CanvasRenderTarget), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || n.default.RESOLUTION, this.resize(e, t)
//     }
//
//     return CanvasRenderTarget.prototype.clear = function clear() {
//       this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
//     }, CanvasRenderTarget.prototype.resize = function resize(e, t) {
//       this.canvas.width = e * this.resolution, this.canvas.height = t * this.resolution
//     }, CanvasRenderTarget.prototype.destroy = function destroy() {
//       this.context = null, this.canvas = null
//     }, r(CanvasRenderTarget, [{
//       key: "width", get: function get() {
//         return this.canvas.width
//       }, set: function set(e) {
//         this.canvas.width = e
//       }
//     }, {
//       key: "height", get: function get() {
//         return this.canvas.height
//       }, set: function set(e) {
//         this.canvas.height = e
//       }
//     }]), CanvasRenderTarget
//   }();
//   t.default = o
// }
//
// ,
//
// function (e, t) {
//   function createColoredCanvas(e) {
//     var t = document.createElement("canvas");
//     t.width = 6, t.height = 1;
//     var i = t.getContext("2d");
//     return i.fillStyle = e, i.fillRect(0, 0, 6, 1), t
//   }
//
//   t.__esModule = !0, t.default = function canUseNewCanvasBlendModes() {
//     if ("undefined" == typeof document) return !1;
//     var e = createColoredCanvas("#ff00ff"), t = createColoredCanvas("#ffff00"), i = document.createElement("canvas");
//     i.width = 6, i.height = 1;
//     var r = i.getContext("2d");
//     r.globalCompositeOperation = "multiply", r.drawImage(e, 0, 0), r.drawImage(t, 2, 0);
//     var n = r.getImageData(2, 0, 1, 1);
//     if (!n) return !1;
//     var o = n.data;
//     return 255 === o[0] && 0 === o[1] && 0 === o[2]
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(75)), n = i(7), o = (i(11), _interopRequireDefault(i(76)));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var s = function (e) {
//     function SpriteMaskFilter(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, SpriteMaskFilter);
//       var i = new n.Matrix, r = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));
//       return t.renderable = !1, r.maskSprite = t, r.maskMatrix = i, r
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(SpriteMaskFilter, e), SpriteMaskFilter.prototype.apply = function apply(e, t, i) {
//       var r = this.maskSprite, n = this.maskSprite.texture;
//       n.valid && (n.transform || (n.transform = new o.default(n, 0)), n.transform.update(), this.uniforms.mask = n, this.uniforms.otherMatrix = e.calculateSpriteMatrix(this.maskMatrix, r).prepend(n.transform.mapCoord), this.uniforms.alpha = r.worldAlpha, this.uniforms.maskClamp = n.transform.uClampFrame, e.applyFilter(this, t, i))
//     }, SpriteMaskFilter
//   }(r.default);
//   t.default = s
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = _interopRequireDefault(i(167)), o = i(3), s = i(1), a = _interopRequireDefault(i(5));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var l = {}, u = function () {
//     function Filter(e, t, i) {
//       for (var r in function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Filter), this.vertexSrc = e || Filter.defaultVertexSrc, this.fragmentSrc = t || Filter.defaultFragmentSrc, this._blendMode = s.BLEND_MODES.NORMAL, this.uniformData = i || (0, n.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {}, this.uniformData) this.uniforms[r] = this.uniformData[r].value, this.uniformData[r].type && (this.uniformData[r].type = this.uniformData[r].type.toLowerCase());
//       this.glShaders = {}, l[this.vertexSrc + this.fragmentSrc] || (l[this.vertexSrc + this.fragmentSrc] = (0, o.uid)()), this.glShaderKey = l[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = a.default.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0
//     }
//
//     return Filter.prototype.apply = function apply(e, t, i, r, n) {
//       e.applyFilter(this, t, i, r)
//     }, r(Filter, [{
//       key: "blendMode", get: function get() {
//         return this._blendMode
//       }, set: function set(e) {
//         this._blendMode = e
//       }
//     }], [{
//       key: "defaultVertexSrc", get: function get() {
//         return ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n")
//       }
//     }, {
//       key: "defaultFragmentSrc", get: function get() {
//         return ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
//       }
//     }]), Filter
//   }();
//   t.default = u
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(34));
//   var o = new n.default, s = function () {
//     function TextureMatrix(e, t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TextureMatrix), this._texture = e, this.mapCoord = new n.default, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._lastTextureID = -1, this.clampOffset = 0, this.clampMargin = void 0 === t ? .5 : t
//     }
//
//     return TextureMatrix.prototype.multiplyUvs = function multiplyUvs(e, t) {
//       void 0 === t && (t = e);
//       for (var i = this.mapCoord, r = 0; r < e.length; r += 2) {
//         var n = e[r], o = e[r + 1];
//         t[r] = n * i.a + o * i.c + i.tx, t[r + 1] = n * i.b + o * i.d + i.ty
//       }
//       return t
//     }, TextureMatrix.prototype.update = function update(e) {
//       var t = this._texture;
//       if (!t || !t.valid) return !1;
//       if (!e && this._lastTextureID === t._updateID) return !1;
//       this._lastTextureID = t._updateID;
//       var i = t._uvs;
//       this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
//       var r = t.orig, n = t.trim;
//       n && (o.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(o));
//       var s = t.baseTexture, a = this.uClampFrame, l = this.clampMargin / s.resolution, u = this.clampOffset;
//       return a[0] = (t._frame.x + l + u) / s.width, a[1] = (t._frame.y + l + u) / s.height, a[2] = (t._frame.x + t._frame.width - l + u) / s.width, a[3] = (t._frame.y + t._frame.height - l + u) / s.height, this.uClampOffset[0] = u / s.realWidth, this.uClampOffset[1] = u / s.realHeight, !0
//     }, r(TextureMatrix, [{
//       key: "texture", get: function get() {
//         return this._texture
//       }, set: function set(e) {
//         this._texture = e, this._lastTextureID = -1
//       }
//     }]), TextureMatrix
//   }();
//   t.default = s
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(9)), n = _interopRequireDefault(i(46));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var o = function () {
//     function Quad(e, t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Quad), this.gl = e, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
//       for (var i = 0; i < 4; i++) this.interleaved[4 * i] = this.vertices[2 * i], this.interleaved[4 * i + 1] = this.vertices[2 * i + 1], this.interleaved[4 * i + 2] = this.uvs[2 * i], this.interleaved[4 * i + 3] = this.uvs[2 * i + 1];
//       this.indices = (0, n.default)(1), this.vertexBuffer = r.default.GLBuffer.createVertexBuffer(e, this.interleaved, e.STATIC_DRAW), this.indexBuffer = r.default.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW), this.vao = new r.default.VertexArrayObject(e, t)
//     }
//
//     return Quad.prototype.initVao = function initVao(e) {
//       this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, e.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, e.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
//     }, Quad.prototype.map = function map(e, t) {
//       var i = 0, r = 0;
//       return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + t.width / e.width, this.uvs[3] = r, this.uvs[4] = i + t.width / e.width, this.uvs[5] = r + t.height / e.height, this.uvs[6] = i, this.uvs[7] = r + t.height / e.height, i = t.x, r = t.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + t.width, this.vertices[3] = r, this.vertices[4] = i + t.width, this.vertices[5] = r + t.height, this.vertices[6] = i, this.vertices[7] = r + t.height, this
//     }, Quad.prototype.upload = function upload() {
//       for (var e = 0; e < 4; e++) this.interleaved[4 * e] = this.vertices[2 * e], this.interleaved[4 * e + 1] = this.vertices[2 * e + 1], this.interleaved[4 * e + 2] = this.uvs[2 * e], this.interleaved[4 * e + 3] = this.uvs[2 * e + 1];
//       return this.vertexBuffer.upload(this.interleaved), this
//     }, Quad.prototype.destroy = function destroy() {
//       var e = this.gl;
//       e.deleteBuffer(this.vertexBuffer), e.deleteBuffer(this.indexBuffer)
//     }, Quad
//   }();
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = i(1), o = i(3);
//   var s = {
//     align: "left",
//     breakWords: !1,
//     dropShadow: !1,
//     dropShadowAlpha: 1,
//     dropShadowAngle: Math.PI / 6,
//     dropShadowBlur: 0,
//     dropShadowColor: "black",
//     dropShadowDistance: 5,
//     fill: "black",
//     fillGradientType: n.TEXT_GRADIENT.LINEAR_VERTICAL,
//     fillGradientStops: [],
//     fontFamily: "Arial",
//     fontSize: 26,
//     fontStyle: "normal",
//     fontVariant: "normal",
//     fontWeight: "normal",
//     letterSpacing: 0,
//     lineHeight: 0,
//     lineJoin: "miter",
//     miterLimit: 10,
//     padding: 0,
//     stroke: "black",
//     strokeThickness: 0,
//     textBaseline: "alphabetic",
//     trim: !1,
//     whiteSpace: "pre",
//     wordWrap: !1,
//     wordWrapWidth: 100,
//     leading: 0
//   }, a = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"], l = function () {
//     function TextStyle(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TextStyle), this.styleID = 0, this.reset(), deepCopyProperties(this, e, e)
//     }
//
//     return TextStyle.prototype.clone = function clone() {
//       var e = {};
//       return deepCopyProperties(e, this, s), new TextStyle(e)
//     }, TextStyle.prototype.reset = function reset() {
//       deepCopyProperties(this, s, s)
//     }, TextStyle.prototype.toFontString = function toFontString() {
//       var e = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize, t = this.fontFamily;
//       Array.isArray(this.fontFamily) || (t = this.fontFamily.split(","));
//       for (var i = t.length - 1; i >= 0; i--) {
//         var r = t[i].trim();
//         !/([\"\'])[^\'\"]+\1/.test(r) && a.indexOf(r) < 0 && (r = '"' + r + '"'), t[i] = r
//       }
//       return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + e + " " + t.join(",")
//     }, r(TextStyle, [{
//       key: "align", get: function get() {
//         return this._align
//       }, set: function set(e) {
//         this._align !== e && (this._align = e, this.styleID++)
//       }
//     }, {
//       key: "breakWords", get: function get() {
//         return this._breakWords
//       }, set: function set(e) {
//         this._breakWords !== e && (this._breakWords = e, this.styleID++)
//       }
//     }, {
//       key: "dropShadow", get: function get() {
//         return this._dropShadow
//       }, set: function set(e) {
//         this._dropShadow !== e && (this._dropShadow = e, this.styleID++)
//       }
//     }, {
//       key: "dropShadowAlpha", get: function get() {
//         return this._dropShadowAlpha
//       }, set: function set(e) {
//         this._dropShadowAlpha !== e && (this._dropShadowAlpha = e, this.styleID++)
//       }
//     }, {
//       key: "dropShadowAngle", get: function get() {
//         return this._dropShadowAngle
//       }, set: function set(e) {
//         this._dropShadowAngle !== e && (this._dropShadowAngle = e, this.styleID++)
//       }
//     }, {
//       key: "dropShadowBlur", get: function get() {
//         return this._dropShadowBlur
//       }, set: function set(e) {
//         this._dropShadowBlur !== e && (this._dropShadowBlur = e, this.styleID++)
//       }
//     }, {
//       key: "dropShadowColor", get: function get() {
//         return this._dropShadowColor
//       }, set: function set(e) {
//         var t = getColor(e);
//         this._dropShadowColor !== t && (this._dropShadowColor = t, this.styleID++)
//       }
//     }, {
//       key: "dropShadowDistance", get: function get() {
//         return this._dropShadowDistance
//       }, set: function set(e) {
//         this._dropShadowDistance !== e && (this._dropShadowDistance = e, this.styleID++)
//       }
//     }, {
//       key: "fill", get: function get() {
//         return this._fill
//       }, set: function set(e) {
//         var t = getColor(e);
//         this._fill !== t && (this._fill = t, this.styleID++)
//       }
//     }, {
//       key: "fillGradientType", get: function get() {
//         return this._fillGradientType
//       }, set: function set(e) {
//         this._fillGradientType !== e && (this._fillGradientType = e, this.styleID++)
//       }
//     }, {
//       key: "fillGradientStops", get: function get() {
//         return this._fillGradientStops
//       }, set: function set(e) {
//         (function areArraysEqual(e, t) {
//           if (!Array.isArray(e) || !Array.isArray(t)) return !1;
//           if (e.length !== t.length) return !1;
//           for (var i = 0; i < e.length; ++i) if (e[i] !== t[i]) return !1;
//           return !0
//         })(this._fillGradientStops, e) || (this._fillGradientStops = e, this.styleID++)
//       }
//     }, {
//       key: "fontFamily", get: function get() {
//         return this._fontFamily
//       }, set: function set(e) {
//         this.fontFamily !== e && (this._fontFamily = e, this.styleID++)
//       }
//     }, {
//       key: "fontSize", get: function get() {
//         return this._fontSize
//       }, set: function set(e) {
//         this._fontSize !== e && (this._fontSize = e, this.styleID++)
//       }
//     }, {
//       key: "fontStyle", get: function get() {
//         return this._fontStyle
//       }, set: function set(e) {
//         this._fontStyle !== e && (this._fontStyle = e, this.styleID++)
//       }
//     }, {
//       key: "fontVariant", get: function get() {
//         return this._fontVariant
//       }, set: function set(e) {
//         this._fontVariant !== e && (this._fontVariant = e, this.styleID++)
//       }
//     }, {
//       key: "fontWeight", get: function get() {
//         return this._fontWeight
//       }, set: function set(e) {
//         this._fontWeight !== e && (this._fontWeight = e, this.styleID++)
//       }
//     }, {
//       key: "letterSpacing", get: function get() {
//         return this._letterSpacing
//       }, set: function set(e) {
//         this._letterSpacing !== e && (this._letterSpacing = e, this.styleID++)
//       }
//     }, {
//       key: "lineHeight", get: function get() {
//         return this._lineHeight
//       }, set: function set(e) {
//         this._lineHeight !== e && (this._lineHeight = e, this.styleID++)
//       }
//     }, {
//       key: "leading", get: function get() {
//         return this._leading
//       }, set: function set(e) {
//         this._leading !== e && (this._leading = e, this.styleID++)
//       }
//     }, {
//       key: "lineJoin", get: function get() {
//         return this._lineJoin
//       }, set: function set(e) {
//         this._lineJoin !== e && (this._lineJoin = e, this.styleID++)
//       }
//     }, {
//       key: "miterLimit", get: function get() {
//         return this._miterLimit
//       }, set: function set(e) {
//         this._miterLimit !== e && (this._miterLimit = e, this.styleID++)
//       }
//     }, {
//       key: "padding", get: function get() {
//         return this._padding
//       }, set: function set(e) {
//         this._padding !== e && (this._padding = e, this.styleID++)
//       }
//     }, {
//       key: "stroke", get: function get() {
//         return this._stroke
//       }, set: function set(e) {
//         var t = getColor(e);
//         this._stroke !== t && (this._stroke = t, this.styleID++)
//       }
//     }, {
//       key: "strokeThickness", get: function get() {
//         return this._strokeThickness
//       }, set: function set(e) {
//         this._strokeThickness !== e && (this._strokeThickness = e, this.styleID++)
//       }
//     }, {
//       key: "textBaseline", get: function get() {
//         return this._textBaseline
//       }, set: function set(e) {
//         this._textBaseline !== e && (this._textBaseline = e, this.styleID++)
//       }
//     }, {
//       key: "trim", get: function get() {
//         return this._trim
//       }, set: function set(e) {
//         this._trim !== e && (this._trim = e, this.styleID++)
//       }
//     }, {
//       key: "whiteSpace", get: function get() {
//         return this._whiteSpace
//       }, set: function set(e) {
//         this._whiteSpace !== e && (this._whiteSpace = e, this.styleID++)
//       }
//     }, {
//       key: "wordWrap", get: function get() {
//         return this._wordWrap
//       }, set: function set(e) {
//         this._wordWrap !== e && (this._wordWrap = e, this.styleID++)
//       }
//     }, {
//       key: "wordWrapWidth", get: function get() {
//         return this._wordWrapWidth
//       }, set: function set(e) {
//         this._wordWrapWidth !== e && (this._wordWrapWidth = e, this.styleID++)
//       }
//     }]), TextStyle
//   }();
//
//   function getSingleColor(e) {
//     return "number" == typeof e ? (0, o.hex2string)(e) : ("string" == typeof e && 0 === e.indexOf("0x") && (e = e.replace("0x", "#")), e)
//   }
//
//   function getColor(e) {
//     if (Array.isArray(e)) {
//       for (var t = 0; t < e.length; ++t) e[t] = getSingleColor(e[t]);
//       return e
//     }
//     return getSingleColor(e)
//   }
//
//   function deepCopyProperties(e, t, i) {
//     for (var r in i) Array.isArray(t[r]) ? e[r] = t[r].slice() : e[r] = t[r]
//   }
//
//   t.default = l
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function TextMetrics(e, t, i, r, n, o, s, a, l) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TextMetrics), this.text = e, this.style = t, this.width = i, this.height = r, this.lines = n, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = l
//     }
//
//     return TextMetrics.measureText = function measureText(e, t, i) {
//       var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TextMetrics._canvas;
//       i = void 0 === i || null === i ? t.wordWrap : i;
//       var n = t.toFontString(), o = TextMetrics.measureFont(n), s = r.getContext("2d");
//       s.font = n;
//       for (var a = (i ? TextMetrics.wordWrap(e, t, r) : e).split(/(?:\r\n|\r|\n)/), l = new Array(a.length), u = 0, c = 0; c < a.length; c++) {
//         var h = s.measureText(a[c]).width + (a[c].length - 1) * t.letterSpacing;
//         l[c] = h, u = Math.max(u, h)
//       }
//       var d = u + t.strokeThickness;
//       t.dropShadow && (d += t.dropShadowDistance);
//       var f = t.lineHeight || o.fontSize + t.strokeThickness,
//         p = Math.max(f, o.fontSize + t.strokeThickness) + (a.length - 1) * (f + t.leading);
//       return t.dropShadow && (p += t.dropShadowDistance), new TextMetrics(e, t, d, p, a, l, f + t.leading, u, o)
//     }, TextMetrics.wordWrap = function wordWrap(e, t) {
//       for (var i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TextMetrics._canvas).getContext("2d"), r = 0, n = "", o = "", s = {}, a = t.letterSpacing, l = t.whiteSpace, u = TextMetrics.collapseSpaces(l), c = TextMetrics.collapseNewlines(l), h = !u, d = t.wordWrapWidth + a, f = TextMetrics.tokenize(e), p = 0; p < f.length; p++) {
//         var g = f[p];
//         if (TextMetrics.isNewline(g)) {
//           if (!c) {
//             o += TextMetrics.addLine(n), h = !u, n = "", r = 0;
//             continue
//           }
//           g = " "
//         }
//         if (u) {
//           var m = TextMetrics.isBreakingSpace(g), v = TextMetrics.isBreakingSpace(n[n.length - 1]);
//           if (m && v) continue
//         }
//         var y = TextMetrics.getFromCache(g, a, s, i);
//         if (y > d) if ("" !== n && (o += TextMetrics.addLine(n), n = "", r = 0), TextMetrics.canBreakWords(g, t.breakWords)) for (var _ = g.split(""), b = 0; b < _.length; b++) {
//           for (var x = _[b], w = 1; _[b + w];) {
//             var T = _[b + w], C = x[x.length - 1];
//             if (TextMetrics.canBreakChars(C, T, g, b, t.breakWords)) break;
//             x += T, w++
//           }
//           b += x.length - 1;
//           var S = TextMetrics.getFromCache(x, a, s, i);
//           S + r > d && (o += TextMetrics.addLine(n), h = !1, n = "", r = 0), n += x, r += S
//         } else {
//           n.length > 0 && (o += TextMetrics.addLine(n), n = "", r = 0);
//           var E = p === f.length - 1;
//           o += TextMetrics.addLine(g, !E), h = !1, n = "", r = 0
//         } else y + r > d && (h = !1, o += TextMetrics.addLine(n), n = "", r = 0), (n.length > 0 || !TextMetrics.isBreakingSpace(g) || h) && (n += g, r += y)
//       }
//       return o += TextMetrics.addLine(n, !1)
//     }, TextMetrics.addLine = function addLine(e) {
//       var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
//       return e = TextMetrics.trimRight(e), e = t ? e + "\n" : e
//     }, TextMetrics.getFromCache = function getFromCache(e, t, i, r) {
//       var n = i[e];
//       if (void 0 === n) {
//         var o = e.length * t;
//         n = r.measureText(e).width + o, i[e] = n
//       }
//       return n
//     }, TextMetrics.collapseSpaces = function collapseSpaces(e) {
//       return "normal" === e || "pre-line" === e
//     }, TextMetrics.collapseNewlines = function collapseNewlines(e) {
//       return "normal" === e
//     }, TextMetrics.trimRight = function trimRight(e) {
//       if ("string" != typeof e) return "";
//       for (var t = e.length - 1; t >= 0; t--) {
//         var i = e[t];
//         if (!TextMetrics.isBreakingSpace(i)) break;
//         e = e.slice(0, -1)
//       }
//       return e
//     }, TextMetrics.isNewline = function isNewline(e) {
//       return "string" == typeof e && TextMetrics._newlines.indexOf(e.charCodeAt(0)) >= 0
//     }, TextMetrics.isBreakingSpace = function isBreakingSpace(e) {
//       return "string" == typeof e && TextMetrics._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
//     }, TextMetrics.tokenize = function tokenize(e) {
//       var t = [], i = "";
//       if ("string" != typeof e) return t;
//       for (var r = 0; r < e.length; r++) {
//         var n = e[r];
//         TextMetrics.isBreakingSpace(n) || TextMetrics.isNewline(n) ? ("" !== i && (t.push(i), i = ""), t.push(n)) : i += n
//       }
//       return "" !== i && t.push(i), t
//     }, TextMetrics.canBreakWords = function canBreakWords(e, t) {
//       return t
//     }, TextMetrics.canBreakChars = function canBreakChars(e, t, i, r, n) {
//       return !0
//     }, TextMetrics.measureFont = function measureFont(e) {
//       if (TextMetrics._fonts[e]) return TextMetrics._fonts[e];
//       var t = {}, i = TextMetrics._canvas, r = TextMetrics._context;
//       r.font = e;
//       var n = TextMetrics.METRICS_STRING + TextMetrics.BASELINE_SYMBOL, o = Math.ceil(r.measureText(n).width),
//         s = Math.ceil(r.measureText(TextMetrics.BASELINE_SYMBOL).width), a = 2 * s;
//       s = s * TextMetrics.BASELINE_MULTIPLIER | 0, i.width = o, i.height = a, r.fillStyle = "#f00", r.fillRect(0, 0, o, a), r.font = e, r.textBaseline = "alphabetic", r.fillStyle = "#000", r.fillText(n, 0, s);
//       var l = r.getImageData(0, 0, o, a).data, u = l.length, c = 4 * o, h = 0, d = 0, f = !1;
//       for (h = 0; h < s; ++h) {
//         for (var p = 0; p < c; p += 4) if (255 !== l[d + p]) {
//           f = !0;
//           break
//         }
//         if (f) break;
//         d += c
//       }
//       for (t.ascent = s - h, d = u - c, f = !1, h = a; h > s; --h) {
//         for (var g = 0; g < c; g += 4) if (255 !== l[d + g]) {
//           f = !0;
//           break
//         }
//         if (f) break;
//         d -= c
//       }
//       return t.descent = h - s, t.fontSize = t.ascent + t.descent, TextMetrics._fonts[e] = t, t
//     }, TextMetrics.clearMetrics = function clearMetrics() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
//       e ? delete TextMetrics._fonts[e] : TextMetrics._fonts = {}
//     }, TextMetrics
//   }();
//   t.default = i;
//   var r = document.createElement("canvas");
//   r.width = r.height = 10, i._canvas = r, i._context = r.getContext("2d"), i._fonts = {}, i.METRICS_STRING = "|Éq", i.BASELINE_SYMBOL = "M", i.BASELINE_MULTIPLIER = 1.4, i._newlines = [10, 13], i._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288]
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function GraphicsData(e, t, i, r, n, o, s, a, l) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, GraphicsData), this.lineWidth = e, this.lineAlignment = l, this.nativeLines = s, this.lineColor = t, this.lineAlpha = i, this._lineTint = t, this.fillColor = r, this.fillAlpha = n, this._fillTint = r, this.fill = o, this.holes = [], this.shape = a, this.type = a.type
//     }
//
//     return GraphicsData.prototype.clone = function clone() {
//       return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape)
//     }, GraphicsData.prototype.addHole = function addHole(e) {
//       this.holes.push(e)
//     }, GraphicsData.prototype.destroy = function destroy() {
//       this.shape = null, this.holes = null
//     }, GraphicsData
//   }();
//   t.default = i
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = i(82), o = _interopRequireDefault(i(20)), s = i(43), a = _interopRequireDefault(i(5)), l = i(1);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var u = function () {
//     function Application(e, t, i, r, l) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Application), "number" == typeof e && (e = Object.assign({
//         width: e,
//         height: t || a.default.RENDER_OPTIONS.height,
//         forceCanvas: !!r,
//         sharedTicker: !!l
//       }, i)), this._options = e = Object.assign({
//         autoStart: !0,
//         sharedTicker: !1,
//         forceCanvas: !1,
//         sharedLoader: !1
//       }, e), this.renderer = (0, n.autoDetectRenderer)(e), this.stage = new o.default, this._ticker = null, this.ticker = e.sharedTicker ? s.shared : new s.Ticker, e.autoStart && this.start()
//     }
//
//     return Application.prototype.render = function render() {
//       this.renderer.render(this.stage)
//     }, Application.prototype.stop = function stop() {
//       this._ticker.stop()
//     }, Application.prototype.start = function start() {
//       this._ticker.start()
//     }, Application.prototype.destroy = function destroy(e, t) {
//       if (this._ticker) {
//         var i = this._ticker;
//         this.ticker = null, i.destroy()
//       }
//       this.stage.destroy(t), this.stage = null, this.renderer.destroy(e), this.renderer = null, this._options = null
//     }, r(Application, [{
//       key: "ticker", set: function set(e) {
//         this._ticker && this._ticker.remove(this.render, this), this._ticker = e, e && e.add(this.render, this, l.UPDATE_PRIORITY.LOW)
//       }, get: function get() {
//         return this._ticker
//       }
//     }, {
//       key: "view", get: function get() {
//         return this.renderer.view
//       }
//     }, {
//       key: "screen", get: function get() {
//         return this.renderer.screen
//       }
//     }]), Application
//   }();
//   t.default = u
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.autoDetectRenderer = function autoDetectRenderer(e, t, i, s) {
//     var a = e && e.forceCanvas;
//     void 0 !== s && (a = s);
//     if (!a && r.isWebGLSupported()) return new o.default(e, t, i);
//     return new n.default(e, t, i)
//   };
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(3)), n = _interopRequireDefault(i(21)), o = _interopRequireDefault(i(28));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = {
//     accessible: !1,
//     accessibleTitle: null,
//     accessibleHint: null,
//     tabIndex: 0,
//     _accessibleActive: !1,
//     _accessibleDiv: !1
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.BitmapText = t.TilingSpriteRenderer = t.TilingSprite = t.AnimatedSprite = void 0;
//   var r = i(200);
//   Object.defineProperty(t, "AnimatedSprite", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   });
//   var n = i(201);
//   Object.defineProperty(t, "TilingSprite", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   });
//   var o = i(202);
//   Object.defineProperty(t, "TilingSpriteRenderer", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(o).default
//     }
//   });
//   var s = i(203);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   Object.defineProperty(t, "BitmapText", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(s).default
//     }
//   }), i(204), i(205), i(206)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), o = _interopRequireDefault(i(86)), s = _interopRequireDefault(i(87)), a = _interopRequireDefault(i(88));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var l = function (e) {
//     function BlurXFilter(t, i, r, a) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, BlurXFilter), a = a || 5;
//       var l = (0, o.default)(a, !0), u = (0, s.default)(a), c = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, l, u));
//       return c.resolution = r || n.settings.RESOLUTION, c._quality = 0, c.quality = i || 4, c.strength = t || 8, c.firstRun = !0, c
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(BlurXFilter, e), BlurXFilter.prototype.apply = function apply(e, t, i, r) {
//       if (this.firstRun) {
//         var n = e.renderer.gl, l = (0, a.default)(n);
//         this.vertexSrc = (0, o.default)(l, !0), this.fragmentSrc = (0, s.default)(l), this.firstRun = !1
//       }
//       if (this.uniforms.strength = 1 / i.size.width * (i.size.width / t.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) e.applyFilter(this, t, i, r); else {
//         for (var u = e.getRenderTarget(!0), c = t, h = u, d = 0; d < this.passes - 1; d++) {
//           e.applyFilter(this, c, h, !0);
//           var f = h;
//           h = c, c = f
//         }
//         e.applyFilter(this, c, i, r), e.returnRenderTarget(u)
//       }
//     }, r(BlurXFilter, [{
//       key: "blur", get: function get() {
//         return this.strength
//       }, set: function set(e) {
//         this.padding = 2 * Math.abs(e), this.strength = e
//       }
//     }, {
//       key: "quality", get: function get() {
//         return this._quality
//       }, set: function set(e) {
//         this._quality = e, this.passes = e
//       }
//     }]), BlurXFilter
//   }(n.Filter);
//   t.default = l
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = function generateVertBlurSource(e, t) {
//     var r = Math.ceil(e / 2), n = i, o = "", s = void 0;
//     s = t ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
//     for (var a = 0; a < e; a++) {
//       var l = s.replace("%index%", a);
//       l = l.replace("%sampleIndex%", a - (r - 1) + ".0"), o += l, o += "\n"
//     }
//     return n = (n = n.replace("%blur%", o)).replace("%size%", e)
//   };
//   var i = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n")
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = function generateFragBlurSource(e) {
//     for (var t = i[e], n = t.length, o = r, s = "", a = void 0, l = 0; l < e; l++) {
//       var u = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", l);
//       a = l, l >= n && (a = e - l - 1), u = u.replace("%value%", t[a]), s += u, s += "\n"
//     }
//     return o = (o = o.replace("%blur%", s)).replace("%size%", e)
//   };
//   var i = {
//       5: [.153388, .221461, .250301],
//       7: [.071303, .131514, .189879, .214607],
//       9: [.028532, .067234, .124009, .179044, .20236],
//       11: [.0093, .028002, .065984, .121703, .175713, .198596],
//       13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
//       15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
//     },
//     r = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n")
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = function getMaxKernelSize(e) {
//     var t = e.getParameter(e.MAX_VARYING_VECTORS), i = 15;
//     for (; i > t;) i -= 2;
//     return i
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), o = _interopRequireDefault(i(86)), s = _interopRequireDefault(i(87)), a = _interopRequireDefault(i(88));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var l = function (e) {
//     function BlurYFilter(t, i, r, a) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, BlurYFilter), a = a || 5;
//       var l = (0, o.default)(a, !1), u = (0, s.default)(a), c = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, l, u));
//       return c.resolution = r || n.settings.RESOLUTION, c._quality = 0, c.quality = i || 4, c.strength = t || 8, c.firstRun = !0, c
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(BlurYFilter, e), BlurYFilter.prototype.apply = function apply(e, t, i, r) {
//       if (this.firstRun) {
//         var n = e.renderer.gl, l = (0, a.default)(n);
//         this.vertexSrc = (0, o.default)(l, !1), this.fragmentSrc = (0, s.default)(l), this.firstRun = !1
//       }
//       if (this.uniforms.strength = 1 / i.size.height * (i.size.height / t.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) e.applyFilter(this, t, i, r); else {
//         for (var u = e.getRenderTarget(!0), c = t, h = u, d = 0; d < this.passes - 1; d++) {
//           e.applyFilter(this, c, h, !0);
//           var f = h;
//           h = c, c = f
//         }
//         e.applyFilter(this, c, i, r), e.returnRenderTarget(u)
//       }
//     }, r(BlurYFilter, [{
//       key: "blur", get: function get() {
//         return this.strength
//       }, set: function set(e) {
//         this.padding = 2 * Math.abs(e), this.strength = e
//       }
//     }, {
//       key: "quality", get: function get() {
//         return this._quality
//       }, set: function set(e) {
//         this._quality = e, this.passes = e
//       }
//     }]), BlurYFilter
//   }(n.Filter);
//   t.default = l
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   var o = function () {
//     function InteractionData() {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, InteractionData), this.global = new n.Point, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
//     }
//
//     return InteractionData.prototype.getLocalPosition = function getLocalPosition(e, t, i) {
//       return e.worldTransform.applyInverse(i || this.global, t)
//     }, InteractionData.prototype.copyEvent = function copyEvent(e) {
//       e.isPrimary && (this.isPrimary = !0), this.button = e.button, this.buttons = Number.isInteger(e.buttons) ? e.buttons : e.which, this.width = e.width, this.height = e.height, this.tiltX = e.tiltX, this.tiltY = e.tiltY, this.pointerType = e.pointerType, this.pressure = e.pressure, this.rotationAngle = e.rotationAngle, this.twist = e.twist || 0, this.tangentialPressure = e.tangentialPressure || 0
//     }, InteractionData.prototype.reset = function reset() {
//       this.isPrimary = !1
//     }, r(InteractionData, [{
//       key: "pointerId", get: function get() {
//         return this.identifier
//       }
//     }]), InteractionData
//   }();
//   t.default = o
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function InteractionEvent() {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, InteractionEvent), this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
//     }
//
//     return InteractionEvent.prototype.stopPropagation = function stopPropagation() {
//       this.stopped = !0
//     }, InteractionEvent.prototype.reset = function reset() {
//       this.stopped = !1, this.currentTarget = null, this.target = null
//     }, InteractionEvent
//   }();
//   t.default = i
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }();
//   var r = function () {
//     function InteractionTrackingData(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, InteractionTrackingData), this._pointerId = e, this._flags = InteractionTrackingData.FLAGS.NONE
//     }
//
//     return InteractionTrackingData.prototype._doSet = function _doSet(e, t) {
//       this._flags = t ? this._flags | e : this._flags & ~e
//     }, i(InteractionTrackingData, [{
//       key: "pointerId", get: function get() {
//         return this._pointerId
//       }
//     }, {
//       key: "flags", get: function get() {
//         return this._flags
//       }, set: function set(e) {
//         this._flags = e
//       }
//     }, {
//       key: "none", get: function get() {
//         return this._flags === this.constructor.FLAGS.NONE
//       }
//     }, {
//       key: "over", get: function get() {
//         return 0 != (this._flags & this.constructor.FLAGS.OVER)
//       }, set: function set(e) {
//         this._doSet(this.constructor.FLAGS.OVER, e)
//       }
//     }, {
//       key: "rightDown", get: function get() {
//         return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN)
//       }, set: function set(e) {
//         this._doSet(this.constructor.FLAGS.RIGHT_DOWN, e)
//       }
//     }, {
//       key: "leftDown", get: function get() {
//         return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN)
//       }, set: function set(e) {
//         this._doSet(this.constructor.FLAGS.LEFT_DOWN, e)
//       }
//     }]), InteractionTrackingData
//   }();
//   t.default = r, r.FLAGS = Object.freeze({NONE: 0, OVER: 1, LEFT_DOWN: 2, RIGHT_DOWN: 4})
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = {
//     interactive: !1, interactiveChildren: !0, hitArea: null, get buttonMode() {
//       return "pointer" === this.cursor
//     }, set buttonMode(e) {
//       e ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
//     }, cursor: null, get trackedPointers() {
//       return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
//     }, _trackedPointers: void 0
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.parse = parse, t.default = function () {
//     return function bitmapFontParser(e, t) {
//       if (e.data && e.type === n.Resource.TYPE.XML) if (0 !== e.data.getElementsByTagName("page").length && 0 !== e.data.getElementsByTagName("info").length && null !== e.data.getElementsByTagName("info")[0].getAttribute("face")) {
//         var i = e.isDataUrl ? "" : r.dirname(e.url);
//         e.isDataUrl && ("." === i && (i = ""), this.baseUrl && i && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/")), (i = i.replace(this.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/");
//         for (var o = e.data.getElementsByTagName("page"), s = {}, a = function completed(i) {
//           s[i.metadata.pageFile] = i.texture, Object.keys(s).length === o.length && (parse(e, s), t())
//         }, l = 0; l < o.length; ++l) {
//           var u = o[l].getAttribute("file"), c = i + u, h = !1;
//           for (var d in this.resources) {
//             var f = this.resources[d];
//             if (f.url === c) {
//               f.metadata.pageFile = u, f.texture ? a(f) : f.onAfterMiddleware.add(a), h = !0;
//               break
//             }
//           }
//           if (!h) {
//             var p = {
//               crossOrigin: e.crossOrigin,
//               loadType: n.Resource.LOAD_TYPE.IMAGE,
//               metadata: Object.assign({pageFile: u}, e.metadata.imageMetadata),
//               parentResource: e
//             };
//             this.add(c, p, a)
//           }
//         }
//       } else t(); else t()
//     }
//   };
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(11)), n = i(24), o = i(84);
//
//   function parse(e, t) {
//     e.bitmapFont = o.BitmapText.registerFont(e.data, t)
//   }
// }
//
// ,
//
// function (e, t) {
//   Object.defineProperty(t, "__esModule", {value: !0});
//   var i = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }();
//
//   function _classCallCheck(e, t) {
//     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//   }
//
//   var r = function () {
//     function MiniSignalBinding(e, t, i) {
//       void 0 === t && (t = !1), _classCallCheck(this, MiniSignalBinding), this._fn = e, this._once = t, this._thisArg = i, this._next = this._prev = this._owner = null
//     }
//
//     return i(MiniSignalBinding, [{
//       key: "detach", value: function detach() {
//         return null !== this._owner && (this._owner.detach(this), !0)
//       }
//     }]), MiniSignalBinding
//   }();
//
//   function _addMiniSignalBinding(e, t) {
//     return e._head ? (e._tail._next = t, t._prev = e._tail, e._tail = t) : (e._head = t, e._tail = t), t._owner = e, t
//   }
//
//   var n = function () {
//     function MiniSignal() {
//       _classCallCheck(this, MiniSignal), this._head = this._tail = void 0
//     }
//
//     return i(MiniSignal, [{
//       key: "handlers", value: function handlers() {
//         var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0], t = this._head;
//         if (e) return !!t;
//         for (var i = []; t;) i.push(t), t = t._next;
//         return i
//       }
//     }, {
//       key: "has", value: function has(e) {
//         if (!(e instanceof r)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
//         return e._owner === this
//       }
//     }, {
//       key: "dispatch", value: function dispatch() {
//         var e = this._head;
//         if (!e) return !1;
//         for (; e;) e._once && this.detach(e), e._fn.apply(e._thisArg, arguments), e = e._next;
//         return !0
//       }
//     }, {
//       key: "add", value: function add(e) {
//         var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
//         if ("function" != typeof e) throw new Error("MiniSignal#add(): First arg must be a Function.");
//         return _addMiniSignalBinding(this, new r(e, !1, t))
//       }
//     }, {
//       key: "once", value: function once(e) {
//         var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
//         if ("function" != typeof e) throw new Error("MiniSignal#once(): First arg must be a Function.");
//         return _addMiniSignalBinding(this, new r(e, !0, t))
//       }
//     }, {
//       key: "detach", value: function detach(e) {
//         if (!(e instanceof r)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
//         return e._owner !== this ? this : (e._prev && (e._prev._next = e._next), e._next && (e._next._prev = e._prev), e === this._head ? (this._head = e._next, null === e._next && (this._tail = null)) : e === this._tail && (this._tail = e._prev, this._tail._next = null), e._owner = null, this)
//       }
//     }, {
//       key: "detachAll", value: function detachAll() {
//         var e = this._head;
//         if (!e) return this;
//         for (this._head = this._tail = null; e;) e._owner = null, e = e._next;
//         return this
//       }
//     }]), MiniSignal
//   }();
//   n.MiniSignalBinding = r, t.default = n, e.exports = t.default
// }
//
// ,
//
// function (e, t) {
//   e.exports = function parseURI(e, t) {
//     t = t || {};
//     for (var i = {
//       key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
//       q: {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g},
//       parser: {
//         strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
//         loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
//       }
//     }, r = i.parser[t.strictMode ? "strict" : "loose"].exec(e), n = {}, o = 14; o--;) n[i.key[o]] = r[o] || "";
//     return n[i.q.name] = {}, n[i.key[12]].replace(i.q.parser, function (e, t, r) {
//       t && (n[i.q.name][t] = r)
//     }), n
//   }
// }
//
// ,
//
// function (e, t) {
//   function _noop() {
//   }
//
//   function onlyOnce(e) {
//     return function onceWrapper() {
//       if (null === e) throw new Error("Callback was already called.");
//       var t = e;
//       e = null, t.apply(this, arguments)
//     }
//   }
//
//   t.__esModule = !0, t.eachSeries = function eachSeries(e, t, i, r) {
//     var n = 0, o = e.length;
//     !function next(s) {
//       s || n === o ? i && i(s) : r ? setTimeout(function () {
//         t(e[n++], next)
//       }, 1) : t(e[n++], next)
//     }()
//   }, t.queue = function queue(e, t) {
//     if (null == t) t = 1; else if (0 === t) throw new Error("Concurrency must not be zero");
//     var i = 0, r = {
//       _tasks: [],
//       concurrency: t,
//       saturated: _noop,
//       unsaturated: _noop,
//       buffer: t / 4,
//       empty: _noop,
//       drain: _noop,
//       error: _noop,
//       started: !1,
//       paused: !1,
//       push: function push(e, t) {
//         _insert(e, !1, t)
//       },
//       kill: function kill() {
//         i = 0, r.drain = _noop, r.started = !1, r._tasks = []
//       },
//       unshift: function unshift(e, t) {
//         _insert(e, !0, t)
//       },
//       process: function process() {
//         for (; !r.paused && i < r.concurrency && r._tasks.length;) {
//           var t = r._tasks.shift();
//           0 === r._tasks.length && r.empty(), (i += 1) === r.concurrency && r.saturated(), e(t.data, onlyOnce(_next(t)))
//         }
//       },
//       length: function length() {
//         return r._tasks.length
//       },
//       running: function running() {
//         return i
//       },
//       idle: function idle() {
//         return r._tasks.length + i === 0
//       },
//       pause: function pause() {
//         !0 !== r.paused && (r.paused = !0)
//       },
//       resume: function resume() {
//         if (!1 !== r.paused) {
//           r.paused = !1;
//           for (var e = 1; e <= r.concurrency; e++) r.process()
//         }
//       }
//     };
//
//     function _insert(e, t, i) {
//       if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
//       if (r.started = !0, null == e && r.idle()) setTimeout(function () {
//         return r.drain()
//       }, 1); else {
//         var n = {data: e, callback: "function" == typeof i ? i : _noop};
//         t ? r._tasks.unshift(n) : r._tasks.push(n), setTimeout(function () {
//           return r.process()
//         }, 1)
//       }
//     }
//
//     function _next(e) {
//       return function next() {
//         i -= 1, e.callback.apply(e, arguments), null != arguments[0] && r.error(arguments[0], e.data), i <= r.concurrency - r.buffer && r.unsaturated(), r.idle() && r.drain(), r.process()
//       }
//     }
//
//     return r
//   }
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.encodeBinary = function encodeBinary(e) {
//     var t = "", r = 0;
//     for (; r < e.length;) {
//       for (var n = [0, 0, 0], o = [0, 0, 0, 0], s = 0; s < n.length; ++s) r < e.length ? n[s] = 255 & e.charCodeAt(r++) : n[s] = 0;
//       o[0] = n[0] >> 2, o[1] = (3 & n[0]) << 4 | n[1] >> 4, o[2] = (15 & n[1]) << 2 | n[2] >> 6, o[3] = 63 & n[2];
//       var a = r - (e.length - 1);
//       switch (a) {
//         case 2:
//           o[3] = 64, o[2] = 64;
//           break;
//         case 1:
//           o[3] = 64
//       }
//       for (var l = 0; l < o.length; ++l) t += i.charAt(o[l])
//     }
//     return t
//   };
//   var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function () {
//     return function spritesheetParser(e, t) {
//       var i = e.name + "_image";
//       if (e.data && e.type === r.Resource.TYPE.JSON && e.data.frames && !this.resources[i]) {
//         var n = {crossOrigin: e.crossOrigin, metadata: e.metadata.imageMetadata, parentResource: e},
//           s = getResourcePath(e, this.baseUrl);
//         this.add(i, s, n, function onImageLoad(i) {
//           if (i.error) t(i.error); else {
//             var r = new o.Spritesheet(i.texture.baseTexture, e.data, e.url);
//             r.parse(function () {
//               e.spritesheet = r, e.textures = r.textures, t()
//             })
//           }
//         })
//       } else t()
//     }
//   }, t.getResourcePath = getResourcePath;
//   var r = i(24), n = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(67)), o = i(2);
//
//   function getResourcePath(e, t) {
//     return e.isDataUrl ? e.data.meta.image : n.default.resolve(e.url.replace(t, ""), e.data.meta.image)
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function () {
//     return function textureParser(e, t) {
//       e.data && e.type === r.Resource.TYPE.IMAGE && (e.texture = n.default.fromLoader(e.data, e.url, e.name)), t()
//     }
//   };
//   var r = i(24), n = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(14))
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(25));
//   var n = function (e) {
//     function Plane(t, i, n) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Plane);
//       var o = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return o._ready = !0, o.verticesX = i || 10, o.verticesY = n || 10, o.drawMode = r.default.DRAW_MODES.TRIANGLES, o.refresh(), o
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(Plane, e), Plane.prototype._refresh = function _refresh() {
//       for (var e = this._texture, t = this.verticesX * this.verticesY, i = [], r = [], n = [], o = this.verticesX - 1, s = this.verticesY - 1, a = e.width / o, l = e.height / s, u = 0; u < t; u++) {
//         var c = u % this.verticesX, h = u / this.verticesX | 0;
//         i.push(c * a, h * l), r.push(c / o, h / s)
//       }
//       for (var d = o * s, f = 0; f < d; f++) {
//         var p = f % o, g = f / o | 0, m = g * this.verticesX + p, v = g * this.verticesX + p + 1,
//           y = (g + 1) * this.verticesX + p, _ = (g + 1) * this.verticesX + p + 1;
//         n.push(m, v, y), n.push(v, _, y)
//       }
//       this.vertices = new Float32Array(i), this.uvs = new Float32Array(r), this.colors = new Float32Array([]), this.indices = new Uint16Array(n), this.dirty++, this.indexDirty++, this.multiplyUvs()
//     }, Plane.prototype._onTextureUpdate = function _onTextureUpdate() {
//       r.default.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
//     }, Plane
//   }(r.default);
//   t.default = n
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function CountLimiter(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, CountLimiter), this.maxItemsPerFrame = e, this.itemsLeft = 0
//     }
//
//     return CountLimiter.prototype.beginFrame = function beginFrame() {
//       this.itemsLeft = this.maxItemsPerFrame
//     }, CountLimiter.prototype.allowedToUpload = function allowedToUpload() {
//       return this.itemsLeft-- > 0
//     }, CountLimiter
//   }();
//   t.default = i
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }();
//   var n = function () {
//     function Router(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Router), this.routes = e
//     }
//
//     return r(Router, [{
//       key: "load", value: function load() {
//         var e = this;
//         this.routes.map(function (t) {
//           var i = t.resolve;
//           void 0 !== t.resolve ? document.querySelectorAll(i).length && e.runInitialization(t) : e.runInitialization(t)
//         })
//       }
//     }, {
//       key: "runInitialization", value: function runInitialization(e) {
//         e.file.init.apply(null, e.dependencies)
//       }
//     }]), Router
//   }();
//   t.a = n
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     var i = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }();
//     var r = function () {
//       function Menu(e, t) {
//         var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
//         !function _classCallCheck(e, t) {
//           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//         }(this, Menu), this.bindMethods(), this.menuWrapper = e, this.menuButton = t, this.menuTimeline = this.initTimeline(), this.params = this.initParams(i)
//       }
//
//       return i(Menu, [{
//         key: "bindMethods", value: function bindMethods() {
//           this.handleComplete = this.handleComplete.bind(this), this.handleReverseComplete = this.handleReverseComplete.bind(this)
//         }
//       }, {
//         key: "initParams", value: function initParams(e) {
//           var t = e.activeClass, i = e.reverseTimeScale;
//           return {activeClass: this.isDefined(t) ? t : "menu-active", reverseTimeScale: this.isDefined(i) ? i : 1}
//         }
//       }, {
//         key: "initTimeline", value: function initTimeline() {
//           return new TimelineMax({
//             paused: !0,
//             onComplete: this.handleComplete,
//             onReverseComplete: this.handleReverseComplete
//           })
//         }
//       }, {
//         key: "init", value: function init() {
//           this.menuWrapperExist() && this.menuButtonExist() && this.handleToggleMenu()
//         }
//       }, {
//         key: "handleToggleMenu", value: function handleToggleMenu() {
//           var e = this, t = this.menuButton, i = this.menuTimeline, r = this.params.reverseTimeScale;
//           t.on("click", function () {
//             e.toggleMenuState(), e.menuIsActive() ? i.play().timeScale(1) : i.reverse().timeScale(r), e.dispachEvent(e.menuWrapper, e.menuIsActive() ? "menu:open" : "menu:close")
//           })
//         }
//       }, {
//         key: "handleComplete", value: function handleComplete() {
//           this.dispachEvent(this.menuWrapper, "menu:opened")
//         }
//       }, {
//         key: "handleReverseComplete", value: function handleReverseComplete() {
//           this.dispachEvent(this.menuWrapper, "menu:closed")
//         }
//       }, {
//         key: "toggleMenuState", value: function toggleMenuState() {
//           this.menuWrapper.toggleClass(this.params.activeClass)
//         }
//       }, {
//         key: "menuIsActive", value: function menuIsActive() {
//           return this.menuWrapper.hasClass(this.params.activeClass)
//         }
//       }, {
//         key: "menuWrapperExist", value: function menuWrapperExist() {
//           return this.control(this.exist(this.menuWrapper), this.getMessage("menuWrapperExist"))
//         }
//       }, {
//         key: "menuButtonExist", value: function menuButtonExist() {
//           return this.control(this.exist(this.menuButton), this.getMessage("menuButtonExist"))
//         }
//       }, {
//         key: "isDefined", value: function isDefined(e) {
//           return void 0 !== e
//         }
//       }, {
//         key: "exist", value: function exist(e) {
//           return e.length
//         }
//       }, {
//         key: "control", value: function control(e, t) {
//           var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
//           return e || (null === i ? console.error(t) : console.error(t, i)), e
//         }
//       }, {
//         key: "dispachEvent", value: function dispachEvent(t, i) {
//           var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e.Event(i);
//           null !== r && e.each(r, function (e, t) {
//             n[e] = t
//           }), t.trigger(n)
//         }
//       }, {
//         key: "getMessage", value: function getMessage(e) {
//           arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
//           return "Menu: " + {
//             menuWrapperExist: "The menu wrapper (specified as 1st parameter) does not exist",
//             menuButtonExist: "The button menu (specified as 2nd parameter) does not exist"
//           }[e]
//         }
//       }]), Menu
//     }();
//     t.a = r
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     var i = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }();
//     var r = function () {
//       function MaterializeForm(e) {
//         var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//         !function _classCallCheck(e, t) {
//           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//         }(this, MaterializeForm), this.formWrapper = e, this.params = this.initParams(t), this.init()
//       }
//
//       return i(MaterializeForm, [{
//         key: "initParams", value: function initParams(e) {
//           var t = e.selectors, i = e.labelEffect, r = t.group, n = t.label, o = t.input, s = i.duration, a = i.scale,
//             l = i.y, u = i.ease;
//           return {
//             selectors: {
//               group: this.isDefined(r) ? r : "form-group",
//               label: this.isDefined(n) ? n : "label",
//               input: this.isDefined(o) ? o : "input"
//             },
//             labelEffect: {
//               duration: this.isDefined(s) ? s : .3,
//               scale: this.isDefined(a) ? a : .7,
//               y: this.isDefined(l) ? l : -10,
//               ease: this.isDefined(u) ? u : Power1.easeOut
//             },
//             focusedClasses: {
//               group: "materialize-group-focused",
//               label: "materialize-label-focused",
//               input: "materialize-input-focused"
//             }
//           }
//         }
//       }, {
//         key: "initTimeline", value: function initTimeline() {
//           return new TimelineMax({
//             paused: !0,
//             onComplete: this.handleComplete,
//             onReverseComplete: this.handleReverseComplete
//           })
//         }
//       }, {
//         key: "init", value: function init() {
//           this.formWrapperExist() && this.handleToggleInputs()
//         }
//       }, {
//         key: "handleToggleInputs", value: function handleToggleInputs() {
//           var t = this, i = this.formWrapper, r = this.params.selectors, n = r.group, o = r.input;
//           i.find(n + " " + o).on("blur focus", function (i) {
//             var r = i.type, o = e(this), s = o.closest(n), a = s.find("label");
//             "focus" === r && t.handleFocus(s, a), "blur" === r && t.handleBlur(s, a, o)
//           })
//         }
//       }, {
//         key: "handleFocus", value: function handleFocus(e, t) {
//           var i = this.params.focusedClasses, r = i.group, n = i.label, o = this.params.labelEffect, s = o.duration,
//             a = o.scale, l = o.y, u = o.ease;
//           e.addClass(r), t.addClass(n), TweenMax.to(t, s, {scale: a, y: l, transformOrigin: "left top", ease: u})
//         }
//       }, {
//         key: "handleBlur", value: function handleBlur(e, t, i) {
//           var r = this.params.focusedClasses, n = r.group, o = r.label, s = this.params.labelEffect, a = s.duration,
//             l = s.ease;
//           "" === i.val() && (e.removeClass(n), t.removeClass(o), TweenMax.to(t, a, {
//             scale: 1,
//             y: 0,
//             transformOrigin: "left top",
//             ease: l
//           }))
//         }
//       }, {
//         key: "formWrapperExist", value: function formWrapperExist() {
//           return this.control(this.exist(this.formWrapper), this.getMessage("formWrapperExist"), this.formWrapper)
//         }
//       }, {
//         key: "isDefined", value: function isDefined(e) {
//           return void 0 !== e
//         }
//       }, {
//         key: "exist", value: function exist(e) {
//           return e.length
//         }
//       }, {
//         key: "control", value: function control(e, t) {
//           var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
//           return e || (null === i ? console.error(t) : console.error(t, i)), e
//         }
//       }, {
//         key: "getMessage", value: function getMessage(e) {
//           arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
//           return "Materialize form: " + {formWrapperExist: "The form wrapper (specified as 1st parameter) does not exist:"}[e]
//         }
//       }]), MaterializeForm
//     }();
//     t.a = r
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     var i = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }();
//     var r = function () {
//       function Placeholder(e, t) {
//         !function _classCallCheck(e, t) {
//           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//         }(this, Placeholder), this.field = e, this.placeholder = t, this.init()
//       }
//
//       return i(Placeholder, [{
//         key: "init", value: function init() {
//           this.simulatePlaceholder()
//         }
//       }, {
//         key: "simulatePlaceholder", value: function simulatePlaceholder() {
//           var t = this;
//           this.field.on("focus blur", function (i) {
//             var r = i.type, n = e(this), o = n.val();
//             "focus" === r && t.handleFocus(n, o), "blur" === r && t.handleBlur(n, o)
//           })
//         }
//       }, {
//         key: "handleFocus", value: function handleFocus(e, t) {
//           t == this.placeholder && e.addClass("placeholder_disabled").val("")
//         }
//       }, {
//         key: "handleBlur", value: function handleBlur(e, t) {
//           var i = this.placeholder;
//           ("" == t || t == i) && e.removeClass("placeholder_disabled").val(i)
//         }
//       }]), Placeholder
//     }();
//     t.a = r
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     var i = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }();
//     var r = function () {
//       function customGoogleMap(e, t) {
//         !function _classCallCheck(e, t) {
//           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//         }(this, customGoogleMap), this.map = e, this.params = t, this.init()
//       }
//
//       return i(customGoogleMap, [{
//         key: "init", value: function init() {
//           var t = this, i = new google.maps.Map(t.map[0], {
//             zoom: 1,
//             scrollwheel: !1,
//             center: new google.maps.LatLng(0, 0),
//             mapTypeId: google.maps.MapTypeId.ROADMAP,
//             styles: this.getCustomization()
//           });
//           return i.markers = [], e.each(this.params.markers, function () {
//             t.add_marker(e(this), i)
//           }), t.center_map(i), i
//         }
//       }, {
//         key: "add_marker", value: function add_marker(e, t) {
//           var i = new google.maps.LatLng(e.data("lat"), e.data("lng")), r = {
//             url: e.data("icon"),
//             scaledSize: new google.maps.Size(60, 60),
//             origin: new google.maps.Point(0, 0),
//             anchor: new google.maps.Point(0, 0)
//           }, n = new google.maps.Marker({position: i, map: t, icon: r});
//           if (t.markers.push(n), e.html()) {
//             var o = new google.maps.InfoWindow({content: '<div class="map-card">' + e.html() + "</div>"});
//             google.maps.event.addListener(n, "click", function () {
//               o.open(t, n)
//             })
//           }
//         }
//       }, {
//         key: "center_map", value: function center_map(t) {
//           var i = new google.maps.LatLngBounds;
//           e.each(t.markers, function (e, t) {
//             var r = new google.maps.LatLng(t.position.lat(), t.position.lng());
//             i.extend(r)
//           }), 1 == t.markers.length ? (t.setCenter(i.getCenter()), t.setZoom(this.params.zoom)) : t.fitBounds(i)
//         }
//       }, {
//         key: "getCustomization", value: function getCustomization() {
//           return [{elementType: "geometry", stylers: [{color: "#f5f5f5"}]}, {
//             elementType: "labels.icon",
//             stylers: [{visibility: "off"}]
//           }, {elementType: "labels.text.fill", stylers: [{color: "#616161"}]}, {
//             elementType: "labels.text.stroke",
//             stylers: [{color: "#f5f5f5"}]
//           }, {
//             featureType: "administrative.land_parcel",
//             elementType: "labels.text.fill",
//             stylers: [{color: "#bdbdbd"}]
//           }, {featureType: "poi", elementType: "geometry", stylers: [{color: "#eeeeee"}]}, {
//             featureType: "poi",
//             elementType: "labels.text.fill",
//             stylers: [{color: "#757575"}]
//           }, {
//             featureType: "poi.park",
//             elementType: "geometry",
//             stylers: [{color: "#e5e5e5"}]
//           }, {
//             featureType: "poi.park",
//             elementType: "labels.text.fill",
//             stylers: [{color: "#9e9e9e"}]
//           }, {
//             featureType: "road",
//             elementType: "geometry",
//             stylers: [{color: "#ffffff"}]
//           }, {
//             featureType: "road.arterial",
//             elementType: "labels.text.fill",
//             stylers: [{color: "#757575"}]
//           }, {
//             featureType: "road.highway",
//             elementType: "geometry",
//             stylers: [{color: "#dadada"}]
//           }, {
//             featureType: "road.highway",
//             elementType: "labels.text.fill",
//             stylers: [{color: "#616161"}]
//           }, {
//             featureType: "road.local",
//             elementType: "labels.text.fill",
//             stylers: [{color: "#9e9e9e"}]
//           }, {
//             featureType: "transit.line",
//             elementType: "geometry",
//             stylers: [{color: "#e5e5e5"}]
//           }, {
//             featureType: "transit.station",
//             elementType: "geometry",
//             stylers: [{color: "#eeeeee"}]
//           }, {featureType: "water", elementType: "geometry", stylers: [{color: "#c9c9c9"}]}, {
//             featureType: "water",
//             elementType: "labels.text.fill",
//             stylers: [{color: "#9e9e9e"}]
//           }]
//         }
//       }]), customGoogleMap
//     }();
//     t.a = r
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }();
//   var n = function () {
//     function MobileDetect() {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, MobileDetect)
//     }
//
//     return r(MobileDetect, [{
//       key: "isAndroid", value: function isAndroid() {
//         return navigator.userAgent.match(/Android/i)
//       }
//     }, {
//       key: "isBlackBerry", value: function isBlackBerry() {
//         return navigator.userAgent.match(/BlackBerry/i)
//       }
//     }, {
//       key: "isIOS", value: function isIOS() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i)
//       }
//     }, {
//       key: "isOpera", value: function isOpera() {
//         return navigator.userAgent.match(/Opera Mini/i)
//       }
//     }, {
//       key: "isWindows", value: function isWindows() {
//         return navigator.userAgent.match(/IEMobile/i)
//       }
//     }, {
//       key: "isMobile", value: function isMobile() {
//         return this.isAndroid() || this.isBlackBerry() || this.isIOS() || this.isOpera() || this.isWindows()
//       }
//     }]), MobileDetect
//   }();
//   t.a = n
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     var r = i(12), n = i.n(r), o = Object.assign || function (e) {
//       for (var t = 1; t < arguments.length; t++) {
//         var i = arguments[t];
//         for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
//       }
//       return e
//     }, s = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }();
//     var a = function () {
//       function BarbaManager() {
//         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
//         !function _classCallCheck(e, t) {
//           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//         }(this, BarbaManager), this.runTimeline = this.runTimeline.bind(this), this.params = this.initParams(e), this.rcal = null, this.init()
//       }
//
//       return s(BarbaManager, [{
//         key: "initParams", value: function initParams(e) {
//           var t = e.prefetch, i = e.xhrTimeout, r = e.dependencies;
//           return {
//             prefetch: !!this.isDefined(t) && t,
//             xhrTimeout: this.isDefined(i) ? i : 1e4,
//             dependencies: this.isDefined(r) ? r : {}
//           }
//         }
//       }, {
//         key: "init", value: function init() {
//           this.initBarba(), this.initBarbaPrefetch(), this.initBarbaUtils(), this.initPreventRedirectionOnCurrentPage(), this.initBarbaEventsHandling(), this.initBarbaPageTransition()
//         }
//       }, {
//         key: "initBarba", value: function initBarba() {
//           n.a.Pjax.start()
//         }
//       }, {
//         key: "initBarbaPrefetch", value: function initBarbaPrefetch() {
//           this.params.prefetch && n.a.Prefetch.init()
//         }
//       }, {
//         key: "initBarbaUtils", value: function initBarbaUtils() {
//           n.a.Utils.xhrTimeout = this.params.xhrTimeout
//         }
//       }, {
//         key: "initPreventRedirectionOnCurrentPage", value: function initPreventRedirectionOnCurrentPage() {
//           e("body").on("click", "a", function (e) {
//             e.currentTarget.href === window.location.href && (e.preventDefault(), e.stopPropagation())
//           })
//         }
//       }, {
//         key: "initBarbaEventsHandling", value: function initBarbaEventsHandling() {
//           n.a.Dispatcher.on("linkClicked", this.handleLinkClicked), n.a.Dispatcher.on("initStateChange", this.handleInitStateChanged), n.a.Dispatcher.on("newPageReady", this.handleNewPageReady), n.a.Dispatcher.on("transitionCompleted", this.handleTransitionCompleted)
//         }
//       }, {
//         key: "handleLinkClicked", value: function handleLinkClicked(t, i) {
//           var r = e("body");
//           !r.hasClass("ajax-loaded") && r.addClass("ajax-loaded")
//         }
//       }, {
//         key: "handleInitStateChanged", value: function handleInitStateChanged(e) {
//         }
//       }, {
//         key: "handleNewPageReady", value: function handleNewPageReady(e, t, i, r) {
//         }
//       }, {
//         key: "handleTransitionCompleted", value: function handleTransitionCompleted(e, t) {
//         }
//       }, {
//         key: "initBarbaPageTransition", value: function initBarbaPageTransition() {
//           var e = this;
//           n.a.Pjax.getTransition = function () {
//             return n.a.BaseTransition.extend(e.handleBarbaPageTransition())
//           }
//         }
//       }, {
//         key: "handleBarbaPageTransition", value: function handleBarbaPageTransition() {
//           return {
//             start: this.handleTranstionStart,
//             processing: this.handleTransitionProcessing,
//             complete: this.handleTranstionComplete,
//             runTimeline: this.runTimeline,
//             reloadScripts: this.reloadScripts
//           }
//         }
//       }, {
//         key: "handleTranstionStart", value: function handleTranstionStart() {
//           Promise.all([this.newContainerLoading, this.processing()]).then(this.complete.bind(this))
//         }
//       }, {
//         key: "handleTransitionProcessing", value: function handleTransitionProcessing() {
//           var t = this;
//           return new Promise(function (i) {
//             var r = new TimelineMax({
//               paused: !0, onComplete: function onComplete() {
//                 return i(!0)
//               }
//             });
//             t.runTimeline(r, e(t.oldContainer))
//           })
//         }
//       }, {
//         key: "handleTranstionComplete", value: function handleTranstionComplete() {
//           this.done(), this.reloadScripts()
//         }
//       }, {
//         key: "runTimeline", value: function runTimeline(t, i) {
//           var r = this, n = e(".ajax-page-loader"), s = {a: 0}, a = document.querySelector("#canvas-ajax-loader"),
//             l = e("body").data("images-root") + "/animations/img/dmaps/512x512/clouds.jpg";
//           window.rcal = new this.params.dependencies.PixiRipple(a, o({}, this.params.dependencies.canvasLoaderConfig, {
//             mainImage: a.dataset.canvasImage,
//             displacementImage: l
//           })), t.to(s, .8, {
//             a: 20, onUpdate: function onUpdate(e) {
//               return r.updateBlur(i, s)
//             }, ease: Power1.easeOut
//           }, "start").to(i, .8, {autoAlpha: 0, ease: Power1.easeOut}, "start+=0").set(n, {autoAlpha: 1}), t.play()
//         }
//       }, {
//         key: "clearAjaxLoaderRipple", value: function clearAjaxLoaderRipple() {
//           TweenMax.to(ripples["ajax-page-loader"].displacementFilter.scale, .8, {x: 0, y: 0, ease: Power1.easeOut})
//         }
//       }, {
//         key: "updateBlur", value: function updateBlur(e, t) {
//           TweenMax.set(e, {webkitFilter: "blur(" + t.a + "px)", filter: "blur(" + t.a + "px)"})
//         }
//       }, {
//         key: "reloadScripts", value: function reloadScripts() {
//           e.each(e(".app-script"), function () {
//             var t = document.createElement("script");
//             t.classList.add("app-script"), t.src = e(this).attr("src"), e(this).remove(), document.body.appendChild(t)
//           })
//         }
//       }, {
//         key: "isDefined", value: function isDefined(e) {
//           return void 0 !== e
//         }
//       }]), BarbaManager
//     }();
//     t.a = a
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     var r = i(111), n = i(114), o = Object.assign || function (e) {
//       for (var t = 1; t < arguments.length; t++) {
//         var i = arguments[t];
//         for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
//       }
//       return e
//     }, s = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }();
//     var a = function () {
//       function SmoothScrollingManager(e) {
//         var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//         !function _classCallCheck(e, t) {
//           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//         }(this, SmoothScrollingManager), this.container = e, this.defaults = this.initDefaults(), this.params = this.initParams(t), this.instance = null, this.scrollbar = null, this.init()
//       }
//
//       return s(SmoothScrollingManager, [{
//         key: "initDefaults", value: function initDefaults() {
//           return {
//             smooth: {native: !1, ease: .1, preload: !0},
//             vs: {limitInertia: !1, mouseMultiplier: .3, touchMultiplier: 1.8, firefoxMultiplier: 30}
//           }
//         }
//       }, {
//         key: "initParams", value: function initParams(e) {
//           var t = e.init, i = e.smooth, r = e.vs, n = e.parallax;
//           return {
//             init: !this.isDefined(t) || t,
//             smooth: o({}, this.defaults.smooth, i),
//             vs: o({}, this.defaults.vs, r),
//             parallax: !!this.isDefined(n) && n
//           }
//         }
//       }, {
//         key: "init", value: function init() {
//           if (this.containerExist()) {
//             var e = this.params, t = (e.init, e.smooth), i = e.vs, s = e.parallax,
//               a = o({}, t, {section: this.container});
//             this.instance = s ? new n.a(o({}, a, {
//               vs: i,
//               divs: s
//             })) : new r.a(o({}, a, {vs: i})), this.instance.init(), this.initProperties()
//           }
//         }
//       }, {
//         key: "initProperties", value: function initProperties() {
//           this.scrollbar = e(this.instance.dom.scrollbar.el)
//         }
//       }, {
//         key: "on", value: function on() {
//           this.instance.on(), this.scrollbar.show()
//         }
//       }, {
//         key: "off", value: function off() {
//           this.instance.off(), this.scrollbar.hide()
//         }
//       }, {
//         key: "destroy", value: function destroy() {
//           this.instance.destroy(), this.scrollbar.remove()
//         }
//       }, {
//         key: "containerExist", value: function containerExist() {
//           return this.control(null !== this.container, this.getMessage("containerExist"), this.container)
//         }
//       }, {
//         key: "isDefined", value: function isDefined(e) {
//           return void 0 !== e
//         }
//       }, {
//         key: "exist", value: function exist(e) {
//           return e.length
//         }
//       }, {
//         key: "control", value: function control(e, t) {
//           var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
//           return e || (null === i ? console.error(t) : console.error(t, i)), e
//         }
//       }, {
//         key: "getMessage", value: function getMessage(e) {
//           arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
//           return "SmoothScrollingManager: " + {containerExist: "The SmoothScrolling container (specified as 1st parameter) does not exist:"}[e]
//         }
//       }]), SmoothScrollingManager
//     }();
//     t.a = a
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   var r = i(10), n = i.n(r), o = i(32), s = i.n(o), a = i(112), l = i.n(a), u = i(113), c = i.n(u), h = i(8),
//     d = i.n(h), f = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }();
//   var p = function () {
//     function Smooth() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Smooth), this.createBound(), this.options = e, this.prefix = l()("transform"), this.rAF = void 0, this.isRAFCanceled = !1;
//       var t = this.constructor.name ? this.constructor.name : "Smooth";
//       this.extends = void 0 === e.extends ? this.constructor !== Smooth : e.extends, this.callback = this.options.callback || null, this.vars = {
//         direction: this.options.direction || "vertical",
//         native: this.options.native || !1,
//         ease: this.options.ease || .075,
//         preload: this.options.preload || !1,
//         current: 0,
//         last: 0,
//         target: 0,
//         height: window.innerHeight,
//         width: window.innerWidth,
//         bounding: 0,
//         timer: null,
//         ticking: !1
//       }, this.vs = this.vars.native ? null : new c.a({
//         limitInertia: this.options.vs && this.options.vs.limitInertia || !1,
//         mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
//         touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
//         firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
//         preventTouch: this.options.vs && this.options.vs.preventTouch || !0
//       }), this.dom = {
//         listener: this.options.listener || document.body,
//         section: this.options.section || document.querySelector(".vs-section") || null,
//         scrollbar: this.vars.native || this.options.noscrollbar ? null : {
//           state: {clicked: !1, x: 0},
//           el: s()({
//             selector: "div",
//             styles: "vs-scrollbar vs-" + this.vars.direction + " vs-scrollbar-" + t.toLowerCase()
//           }),
//           drag: {el: s()({selector: "div", styles: "vs-scrolldrag"}), delta: 0, height: 50}
//         }
//       }
//     }
//
//     return f(Smooth, [{
//       key: "createBound", value: function createBound() {
//         var e = this;
//         ["run", "calc", "debounce", "resize", "mouseUp", "mouseDown", "mouseMove", "calcScroll", "scrollTo"].forEach(function (t) {
//           return e[t] = e[t].bind(e)
//         })
//       }
//     }, {
//       key: "init", value: function init() {
//         this.addClasses(), this.vars.preload && this.preloadImages(), this.vars.native ? this.addFakeScrollHeight() : !this.options.noscrollbar && this.addFakeScrollBar(), this.addEvents(), this.resize()
//       }
//     }, {
//       key: "addClasses", value: function addClasses() {
//         var e = this.vars.native ? "native" : "virtual", t = "vertical" === this.vars.direction ? "y" : "x";
//         n.a.add(this.dom.listener, "is-" + e + "-scroll"), n.a.add(this.dom.listener, t + "-scroll")
//       }
//     }, {
//       key: "preloadImages", value: function preloadImages() {
//         var e = this, t = Array.prototype.slice.call(this.dom.listener.querySelectorAll("img"), 0);
//         t.forEach(function (i) {
//           var r = document.createElement("img");
//           d.a.once(r, "load", function () {
//             t.splice(t.indexOf(i), 1), 0 === t.length && e.resize()
//           }), r.src = i.getAttribute("src")
//         })
//       }
//     }, {
//       key: "calc", value: function calc(e) {
//         var t = "horizontal" == this.vars.direction ? e.deltaX : e.deltaY;
//         this.vars.target += -1 * t, this.clampTarget()
//       }
//     }, {
//       key: "debounce", value: function debounce() {
//         var e = this, t = this.dom.listener === document.body;
//         this.vars.target = "vertical" === this.vars.direction ? t ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : t ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft, clearTimeout(this.vars.timer), this.vars.ticking || (this.vars.ticking = !0, n.a.add(this.dom.listener, "is-scrolling")), this.vars.timer = setTimeout(function () {
//           e.vars.ticking = !1, n.a.remove(e.dom.listener, "is-scrolling")
//         }, 200)
//       }
//     }, {
//       key: "run", value: function run() {
//         if (!this.isRAFCanceled) {
//           if (this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease, this.vars.current < .1 && (this.vars.current = 0), this.requestAnimationFrame(), this.extends || (this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2))), !this.vars.native && !this.options.noscrollbar) {
//             var e = this.dom.scrollbar.drag.height,
//               t = "vertical" === this.vars.direction ? this.vars.height : this.vars.width,
//               i = Math.abs(this.vars.current) / (this.vars.bounding / (t - e)) + e / .5 - e,
//               r = Math.max(0, Math.min(i - e, i + e));
//             this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(r.toFixed(2))
//           }
//           this.callback && this.vars.current !== this.vars.last && this.callback(this.vars.current), this.vars.last = this.vars.current
//         }
//       }
//     }, {
//       key: "getTransform", value: function getTransform(e) {
//         return "vertical" === this.vars.direction ? "translate3d(0," + e + "px,0)" : "translate3d(" + e + "px,0,0)"
//       }
//     }, {
//       key: "on", value: function on() {
//         var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
//         this.isRAFCanceled && (this.isRAFCanceled = !1);
//         var t = this.dom.listener === document.body ? window : this.dom.listener;
//         this.vars.native ? d.a.on(t, "scroll", this.debounce) : this.vs && this.vs.on(this.calc), e && this.requestAnimationFrame()
//       }
//     }, {
//       key: "off", value: function off() {
//         var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
//           t = this.dom.listener === document.body ? window : this.dom.listener;
//         this.vars.native ? d.a.off(t, "scroll", this.debounce) : this.vs && this.vs.off(this.calc), e && this.cancelAnimationFrame()
//       }
//     }, {
//       key: "requestAnimationFrame", value: function (e) {
//         function requestAnimationFrame() {
//           return e.apply(this, arguments)
//         }
//
//         return requestAnimationFrame.toString = function () {
//           return e.toString()
//         }, requestAnimationFrame
//       }(function () {
//         this.rAF = requestAnimationFrame(this.run)
//       })
//     }, {
//       key: "cancelAnimationFrame", value: function (e) {
//         function cancelAnimationFrame() {
//           return e.apply(this, arguments)
//         }
//
//         return cancelAnimationFrame.toString = function () {
//           return e.toString()
//         }, cancelAnimationFrame
//       }(function () {
//         this.isRAFCanceled = !0, cancelAnimationFrame(this.rAF)
//       })
//     }, {
//       key: "addEvents", value: function addEvents() {
//         this.on(), d.a.on(window, "resize", this.resize)
//       }
//     }, {
//       key: "removeEvents", value: function removeEvents() {
//         this.off(), d.a.off(window, "resize", this.resize)
//       }
//     }, {
//       key: "addFakeScrollBar", value: function addFakeScrollBar() {
//         this.dom.listener.appendChild(this.dom.scrollbar.el), this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el), d.a.on(this.dom.scrollbar.el, "click", this.calcScroll), d.a.on(this.dom.scrollbar.el, "mousedown", this.mouseDown), d.a.on(document, "mousemove", this.mouseMove), d.a.on(document, "mouseup", this.mouseUp)
//       }
//     }, {
//       key: "removeFakeScrollBar", value: function removeFakeScrollBar() {
//         d.a.off(this.dom.scrollbar.el, "click", this.calcScroll), d.a.off(this.dom.scrollbar.el, "mousedown", this.mouseDown), d.a.off(document, "mousemove", this.mouseMove), d.a.off(document, "mouseup", this.mouseUp), this.dom.listener.removeChild(this.dom.scrollbar.el)
//       }
//     }, {
//       key: "mouseDown", value: function mouseDown(e) {
//         e.preventDefault(), 1 == e.which && (this.dom.scrollbar.state.clicked = !0)
//       }
//     }, {
//       key: "mouseUp", value: function mouseUp(e) {
//         this.dom.scrollbar.state.clicked = !1, n.a.remove(this.dom.listener, "is-dragging")
//       }
//     }, {
//       key: "mouseMove", value: function mouseMove(e) {
//         this.dom.scrollbar.state.clicked && this.calcScroll(e)
//       }
//     }, {
//       key: "addFakeScrollHeight", value: function addFakeScrollHeight() {
//         this.dom.scroll = s()({
//           selector: "div",
//           styles: "vs-scroll-view"
//         }), this.dom.listener.appendChild(this.dom.scroll)
//       }
//     }, {
//       key: "removeFakeScrollHeight", value: function removeFakeScrollHeight() {
//         this.dom.listener.removeChild(this.dom.scroll)
//       }
//     }, {
//       key: "calcScroll", value: function calcScroll(e) {
//         var t = "vertical" == this.vars.direction ? e.clientY : e.clientX,
//           i = "vertical" == this.vars.direction ? this.vars.height : this.vars.width, r = t * (this.vars.bounding / i);
//         n.a.add(this.dom.listener, "is-dragging"), this.vars.target = r, this.clampTarget(), this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
//       }
//     }, {
//       key: "scrollTo", value: function scrollTo(e) {
//         this.vars.native ? "vertical" == this.vars.direction ? window.scrollTo(0, e) : window.scrollTo(e, 0) : (this.vars.target = e, this.clampTarget())
//       }
//     }, {
//       key: "resize", value: function resize() {
//         var e = "vertical" === this.vars.direction ? "height" : "width";
//         if (this.vars.height = window.innerHeight, this.vars.width = window.innerWidth, !this.extends) {
//           var t = this.dom.section.getBoundingClientRect();
//           this.vars.bounding = "vertical" === this.vars.direction ? t.height - (this.vars.native ? 0 : this.vars.height) : t.right - (this.vars.native ? 0 : this.vars.width)
//         }
//         this.vars.native || this.options.noscrollbar ? this.vars.native && (this.dom.scroll.style[e] = this.vars.bounding + "px") : (this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height)), this.dom.scrollbar.drag.el.style[e] = this.dom.scrollbar.drag.height + "px"), !this.vars.native && this.clampTarget()
//       }
//     }, {
//       key: "clampTarget", value: function clampTarget() {
//         this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)))
//       }
//     }, {
//       key: "destroy", value: function destroy() {
//         this.vars.native ? (n.a.remove(this.dom.listener, "is-native-scroll"), this.removeFakeScrollHeight()) : (n.a.remove(this.dom.listener, "is-virtual-scroll"), !this.options.noscrollbar && this.removeFakeScrollBar()), "vertical" === this.vars.direction ? n.a.remove(this.dom.listener, "y-scroll") : n.a.remove(this.dom.listener, "x-scroll"), this.vars.current = 0, this.vs && (this.vs.destroy(), this.vs = null), this.removeEvents()
//       }
//     }]), Smooth
//   }();
//   t.a = p, window.Smooth = p
// }
//
// ,
//
// function (e, t) {
//   var i = "undefined" != typeof document ? document.createElement("p").style : {}, r = ["O", "ms", "Moz", "Webkit"],
//     n = /([A-Z])/g, o = {};
//
//   function prefix(e) {
//     if (e = e.replace(/-([a-z])/g, function (e, t) {
//       return t.toUpperCase()
//     }), void 0 !== i[e]) return e;
//     for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = r.length; n--;) {
//       var o = r[n] + t;
//       if (void 0 !== i[o]) return o
//     }
//     return e
//   }
//
//   e.exports = function prefixMemozied(e) {
//     return e in o ? o[e] : o[e] = prefix(e)
//   }, e.exports.dash = function prefixDashed(e) {
//     return e = prefix(e), n.test(e) && (e = "-" + e.replace(n, "-$1"), n.lastIndex = 0), e.toLowerCase()
//   }
// }
//
// ,
//
// function (e, t, i) {
//   var r = i(51), n = i(240), o = i(241).Lethargy, s = i(242), a = (i(243), i(244)), l = "virtualscroll";
//   e.exports = VirtualScroll;
//   var u = 37, c = 38, h = 39, d = 40, f = 32;
//
//   function VirtualScroll(e) {
//     a(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, e && e.el && (this.el = e.el, delete e.el), this.options = r({
//       mouseMultiplier: 1,
//       touchMultiplier: 2,
//       firefoxMultiplier: 15,
//       keyStep: 120,
//       preventTouch: !1,
//       unpreventTouchClass: "vs-touchmove-allowed",
//       limitInertia: !1
//     }, e), this.options.limitInertia && (this._lethargy = new o), this._emitter = new n, this._event = {
//       y: 0,
//       x: 0,
//       deltaX: 0,
//       deltaY: 0
//     }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {passive: this.options.passive})
//   }
//
//   VirtualScroll.prototype._notify = function (e) {
//     var t = this._event;
//     t.x += t.deltaX, t.y += t.deltaY, this._emitter.emit(l, {
//       x: t.x,
//       y: t.y,
//       deltaX: t.deltaX,
//       deltaY: t.deltaY,
//       originalEvent: e
//     })
//   }, VirtualScroll.prototype._onWheel = function (e) {
//     var t = this.options;
//     if (!this._lethargy || !1 !== this._lethargy.check(e)) {
//       var i = this._event;
//       i.deltaX = e.wheelDeltaX || -1 * e.deltaX, i.deltaY = e.wheelDeltaY || -1 * e.deltaY, s.isFirefox && 1 == e.deltaMode && (i.deltaX *= t.firefoxMultiplier, i.deltaY *= t.firefoxMultiplier), i.deltaX *= t.mouseMultiplier, i.deltaY *= t.mouseMultiplier, this._notify(e)
//     }
//   }, VirtualScroll.prototype._onMouseWheel = function (e) {
//     if (!this.options.limitInertia || !1 !== this._lethargy.check(e)) {
//       var t = this._event;
//       t.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0, t.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta, this._notify(e)
//     }
//   }, VirtualScroll.prototype._onTouchStart = function (e) {
//     var t = e.targetTouches ? e.targetTouches[0] : e;
//     this.touchStartX = t.pageX, this.touchStartY = t.pageY
//   }, VirtualScroll.prototype._onTouchMove = function (e) {
//     var t = this.options;
//     t.preventTouch && !e.target.classList.contains(t.unpreventTouchClass) && e.preventDefault();
//     var i = this._event, r = e.targetTouches ? e.targetTouches[0] : e;
//     i.deltaX = (r.pageX - this.touchStartX) * t.touchMultiplier, i.deltaY = (r.pageY - this.touchStartY) * t.touchMultiplier, this.touchStartX = r.pageX, this.touchStartY = r.pageY, this._notify(e)
//   }, VirtualScroll.prototype._onKeyDown = function (e) {
//     var t = this._event;
//     t.deltaX = t.deltaY = 0;
//     var i = window.innerHeight - 40;
//     switch (e.keyCode) {
//       case u:
//       case c:
//         t.deltaY = this.options.keyStep;
//         break;
//       case h:
//       case d:
//         t.deltaY = -this.options.keyStep;
//         break;
//       case f && e.shiftKey:
//         t.deltaY = i;
//         break;
//       case f:
//         t.deltaY = -i;
//         break;
//       default:
//         return
//     }
//     this._notify(e)
//   }, VirtualScroll.prototype._bind = function () {
//     s.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), s.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s.hasTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s.hasPointer && s.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && document.addEventListener("keydown", this._onKeyDown)
//   }, VirtualScroll.prototype._unbind = function () {
//     s.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), s.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), s.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), s.hasPointer && s.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && document.removeEventListener("keydown", this._onKeyDown)
//   }, VirtualScroll.prototype.on = function (e, t) {
//     this._emitter.on(l, e, t);
//     var i = this._emitter.e;
//     i && i[l] && 1 === i[l].length && this._bind()
//   }, VirtualScroll.prototype.off = function (e, t) {
//     this._emitter.off(l, e, t);
//     var i = this._emitter.e;
//     (!i[l] || i[l].length <= 0) && this._unbind()
//   }, VirtualScroll.prototype.reset = function () {
//     var e = this._event;
//     e.x = 0, e.y = 0
//   }, VirtualScroll.prototype.destroy = function () {
//     this._emitter.off(), this._unbind()
//   }
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function get(e, t, i) {
//     null === e && (e = Function.prototype);
//     var r = Object.getOwnPropertyDescriptor(e, t);
//     if (void 0 === r) {
//       var n = Object.getPrototypeOf(e);
//       return null === n ? void 0 : get(n, t, i)
//     }
//     if ("value" in r) return r.value;
//     var o = r.get;
//     return void 0 !== o ? o.call(i) : void 0
//   };
//   var o = function (e) {
//     function SmoothScrollingParallax(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, SmoothScrollingParallax);
//       var t = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, (SmoothScrollingParallax.__proto__ || Object.getPrototypeOf(SmoothScrollingParallax)).call(this, e));
//       return t.createExtraBound(), t.resizing = !1, t.cache = null, t.dom.divs = Array.prototype.slice.call(e.divs, 0), t
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(SmoothScrollingParallax, Smooth), r(SmoothScrollingParallax, [{
//       key: "createExtraBound",
//       value: function createExtraBound() {
//         var e = this;
//         ["getCache", "inViewport"].forEach(function (t) {
//           return e[t] = e[t].bind(e)
//         })
//       }
//     }, {
//       key: "resize", value: function resize() {
//         this.resizing = !0, this.getCache(), n(SmoothScrollingParallax.prototype.__proto__ || Object.getPrototypeOf(SmoothScrollingParallax.prototype), "resize", this).call(this), this.resizing = !1
//       }
//     }, {
//       key: "getCache", value: function getCache() {
//         var e = this;
//         this.cache = [], this.dom.divs.forEach(function (t, i) {
//           t.style.display = "block", t.style.transform = "none";
//           var r = e.vars.target, n = t.getBoundingClientRect(), o = {
//             el: t,
//             state: !0,
//             top: n.top + r,
//             left: n.left,
//             center: n.height / 2,
//             bottom: n.bottom + r,
//             speed: t.getAttribute("data-smooth-parallax") || "-1"
//           };
//           4 === i && console.log(n.top, r, o.top), e.cache.push(o)
//         }), this.vars.bounding = this.dom.section.getBoundingClientRect().height - (this.vars.native ? 0 : this.vars.height)
//       }
//     }, {
//       key: "run", value: function run() {
//         this.dom.divs.forEach(this.inViewport), this.dom.section.style[this.prefix] = this.getTransform(-1 * this.vars.current), n(SmoothScrollingParallax.prototype.__proto__ || Object.getPrototypeOf(SmoothScrollingParallax.prototype), "run", this).call(this)
//       }
//     }, {
//       key: "inViewport", value: function inViewport(e, t) {
//         if (this.cache && !this.resizing) {
//           var i = this.cache[t], r = this.vars.current, n = (i.top + i.center - r) * i.speed,
//             o = Math.round(i.top + n - r);
//           Math.round(i.bottom + n - r) > 0 && this.vars.height;
//           e.style[this.prefix] = this.getTransform(n)
//         }
//       }
//     }]), SmoothScrollingParallax
//   }();
//   t.a = o
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }();
//   var n = function () {
//     function Tilter(e) {
//       var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Tilter), this.section = e, this.params = this.initParams(t), this.mouseX = 0, this.mouseY = 0, this.init()
//     }
//
//     return r(Tilter, [{
//       key: "initParams", value: function initParams(e) {
//         var t = e.forceX, i = e.forceY, r = e.effectX, n = e.effectY, o = e.duration, s = e.ease;
//         return {
//           forceX: this.isDefined(t) ? t : 20,
//           forceY: this.isDefined(i) ? i : 20,
//           effectX: this.isDefined(r) ? r : "push",
//           effectY: this.isDefined(n) ? n : "push",
//           duration: this.isDefined(o) ? o : .5,
//           ease: this.isDefined(s) ? s : Quad.easeOut
//         }
//       }
//     }, {
//       key: "init", value: function init() {
//         var e = this;
//         this.sectionExist() && window.addEventListener("mousemove", function (t) {
//           return e.handleMouseMove(t)
//         }, !1)
//       }
//     }, {
//       key: "handleMouseMove", value: function handleMouseMove(e) {
//         var t = this.params, i = t.forceX, r = t.forceY, n = t.effectX, o = t.effectY, s = t.duration, a = t.ease;
//         this.mouseX = e.pageX, this.mouseY = e.pageY;
//         var l = this.mouseX / window.innerWidth - .5, u = this.mouseY / window.innerHeight - .5,
//           c = "push" === n ? 1 : -1, h = "push" === o ? -1 : 1;
//         TweenLite.to(this.section, s, {
//           rotationY: i * l * c,
//           rotationX: r * u * h,
//           ease: a,
//           transformPerspective: 900,
//           transformOrigin: "center"
//         })
//       }
//     }, {
//       key: "sectionExist", value: function sectionExist() {
//         return this.control(this.exist(this.section), this.getMessage("sectionExist"), this.section)
//       }
//     }, {
//       key: "isDefined", value: function isDefined(e) {
//         return void 0 !== e
//       }
//     }, {
//       key: "exist", value: function exist(e) {
//         return e.length
//       }
//     }, {
//       key: "control", value: function control(e, t) {
//         var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
//         return e || (null === i ? console.error(t) : console.error(t, i)), e
//       }
//     }, {
//       key: "getMessage", value: function getMessage(e) {
//         arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
//         return "Tilter: " + {sectionExist: "The tilting section (specified as 1st parameter) does not exist:"}[e]
//       }
//     }]), Tilter
//   }();
//   t.a = n
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     var i = Object.assign || function (e) {
//       for (var t = 1; t < arguments.length; t++) {
//         var i = arguments[t];
//         for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
//       }
//       return e
//     };
//     t.a = {
//       init: function init(t, r, n, o, s, a, l, u, c) {
//         var h, d = e("body"),
//           f = e('a, button, img, canvas, [class^="bg-img"], .owl-products-categories .owl-carousel .owl-item-content, .back-to-top, .slider-cursor'),
//           p = d.hasClass("ajax-loaded"), g = d.data("images-root"), m = document.querySelector("#canvas-loader"),
//           v = document.querySelectorAll("[data-canvas-image]"),
//           y = (document.querySelector("#canvas-ajax-loader"), e(".menu-images-container")),
//           _ = (document.querySelectorAll(".menu-images-container .canvas-ripple"), e(".back-to-top")),
//           b = g + "/animations/img/dmaps/512x512/clouds.jpg", x = e("body, #site-container, #menu-container"),
//           w = e(".custom-cursor"), T = e(".cc-1"), C = e(".cc-2"), S = e(".page-loader"), E = e(".ajax-page-loader"),
//           P = document.getElementById("site-container"), M = document.getElementById("menu-container"),
//           O = e(".vs-scrollbar"), R = e("#header"), D = R.find(".logo"), A = e("#menu-container"), k = A.find("ul"),
//           I = k.find("li"), L = I.find("a"), N = R.find(".btn-menu"), F = N.find(".bars").find("> span"),
//           B = e(".contact-form"), j = null, z = null, U = [], q = {
//             displacementImageSize: (e(window).width(), [420, 444]),
//             autoPlay: !0,
//             autoPlaySpeed: [10, 3],
//             displacementScale: [-120, 10],
//             events: [],
//             imageBehavior: !1,
//             cover: !1,
//             dispatchPointerOver: !1
//           }, H = new l;
//         if (null == (h = H.isMobile()) ? x.addClass("isDesktop") : x.addClass("isMobile"), null === h) new a({
//           prefetch: !1,
//           xhrTimeout: 15e3,
//           dependencies: {PixiRipple: u, canvasLoaderConfig: q}
//         });
//         O.remove(), d.on("loaderEnd", function () {
//           null == h && (j = new n(P, {
//             smooth: {callback: onScroll},
//             parallax: document.querySelectorAll("[data-smooth-parallax]")
//           }), (z = new n(M)).off())
//         });
//         var W = 0, X = !1, G = !0, V = new TimelineMax({paused: !0});
//
//         function onScroll(e) {
//           var t = Math.floor(e);
//           t != W && (e < 200 ? (G = !0, X && (V.reverse(), X = !1)) : (X = !0, G && (V.play(), G = !1))), W = t
//         }
//
//         if (V.fromTo(_.find(".item-line"), .3, {scaleX: 0}, {
//           scaleX: 1,
//           transformOrigin: "left top",
//           ease: Power1.easeOut
//         }, "start").fromTo(_.find(".item-text"), .6, {autoAlpha: 0, x: 10}, {
//           autoAlpha: 1,
//           x: 0,
//           ease: Power1.easeOut
//         }, "start"), null != h ? (window.scrollTo(0, 0), _.remove()) : _.on("click", function () {
//           return j.instance.scrollTo(0)
//         }), Array.prototype.forEach.call(v, function (e) {
//           return !t.inArray(e.dataset.canvasImage, U) && U.push(e.dataset.canvasImage)
//         }), PIXI.loader.add(U), p) {
//           var $ = new TimelineMax({
//             paused: !0, onComplete: function onComplete() {
//               t.dispachEvent(d, "loaderEnd")
//             }
//           });
//           $.addCallback(function clearAjaxLoaderRipple() {
//             TweenMax.to(window.rcal.displacementFilter.scale, .8, {x: 0, y: 0, ease: Power1.easeOut})
//           }, "start+=0.5").to(E, .8, {autoAlpha: 0, ease: Power1.easeOut}, "+=0.8"), $.play()
//         } else {
//           var Y = new u(m, i({}, q, {mainImage: m.dataset.canvasImage, displacementImage: b})), K = new TimelineMax({
//             paused: !0, onComplete: function onComplete() {
//               t.dispachEvent(d, "loaderEnd"), S.remove()
//             }
//           });
//           K.addCallback(function clearloaderRipple() {
//             TweenMax.to(Y.displacementFilter.scale, .8, {x: 0, y: 0, ease: Power1.easeOut})
//           }, "start+=0.5").to(S, .8, {autoAlpha: 0, ease: Power1.easeOut}, "+=0.8"), e(window).on("load", function () {
//             K.play()
//           })
//         }
//         var Z = new r(A, N, {reverseTimeScale: 1.5});
//         y.hide();
//         var Q = {a: 20};
//         if (Z.menuTimeline.to(F.eq(1), .3, {y: -14, scaleX: .8, rotation: 90}, "start").to(F.eq(0), .25, {
//           y: 4,
//           x: -2.5
//         }, "start").to(F.eq(2), .25, {y: -4, x: 2.5}, "start").to(F.eq(1), .4, {
//           y: 40,
//           ease: Power2.easeOut
//         }, "start+=0.3").to(F.eq(0), .5, {
//           x: 0,
//           y: 4,
//           rotation: 225,
//           ease: Power1.easeOut
//         }, "start+=0.3").to(F.eq(2), .5, {
//           x: 0,
//           y: -4,
//           rotation: -225,
//           ease: Power1.easeOut
//         }, "start+=0.3").to(D, .6, {autoAlpha: 0, ease: Power1.easeOut}, "start+=0.3").from(A, .5, {
//           autoAlpha: 0,
//           ease: Power1.easeOut
//         }, "start+=0.3").staggerFrom(I, .8, {autoAlpha: 0, y: 50}, "0.2", "+=0").to(Q, .6, {
//           a: 0,
//           onUpdate: function onUpdate(e) {
//             return t.updateBlur(k, Q)
//           },
//           ease: Power1.easeOut
//         }, "-=1.6"), Z.init(), null == h) {
//           var J = !1;
//           A.on("menu:open", function () {
//             if (j.off(), z.on(), !J) {
//               J = !0;
//               var t = k.find(".current-menu-item");
//               if (t.length) {
//                 var i = Math.floor(t.offset().top - e(window).height() / 2 + t.outerHeight() / 2);
//                 setTimeout(function () {
//                   z.instance.scrollTo(i)
//                 }, 1e3)
//               }
//             }
//           }), A.on("menu:close", function () {
//             z.off(), j.on()
//           }), e(window).width() > 992 && (A.on("menu:open", function () {
//             y.show()
//           }), A.on("menu:close", function () {
//             y.fadeOut()
//           }))
//         } else A.on("menu:open", function () {
//           d.addClass("o-h")
//         }), A.on("menu:closed", function () {
//           d.removeClass("o-h")
//         });
//         var ee = {};
//         null === h && e(window).width() > 992 && L.on("mouseover", function () {
//           var i = e(this).data("menu-img"), r = e("." + i);
//           if (!t.isDefined(ee["tl-" + i])) {
//             var n = new TimelineMax({paused: !0});
//             n.fromTo(r, 1, {x: 15, autoAlpha: 0}, {
//               x: 0,
//               autoAlpha: 1,
//               ease: Power1.easeOut
//             }, "start"), ee["tl-" + i] = n
//           }
//           ee["tl-" + i].play().timeScale(1)
//         }).on("mouseleave", function () {
//           var t = e(this).data("menu-img");
//           ee["tl-" + t].reverse().timeScale(1.5)
//         });
//         var te = new c.Controller, ie = [];
//         e.each(L, function () {
//           var i = e(this), r = i.find(".phonetic"), n = new SplitText(r, {type: "words, chars"}), o = {a: 20},
//             s = new TimelineMax;
//           s.to(o, .5, {
//             a: 0, onUpdate: function onUpdate(e) {
//               return t.updateBlur(i, o)
//             }, ease: Power1.easeOut
//           }, "start"), s.staggerFrom(n.chars, .6, {y: 5, autoAlpha: 0, ease: Power1.easeOut}, .01, "-=0.3");
//           var a = new c.Scene({triggerElement: i, triggerHook: .65}).setTween(s);
//           ie.push(a)
//         }), te.addScene(ie), B.length && (new o(B, {
//           selectors: {
//             group: ".gfield",
//             label: ".gfield_label",
//             input: ".ginput_container_text input, .ginput_container_email input"
//           }, labelEffect: {duration: .3, ease: Power2.easeOut}
//         }), new s(B.find("textarea"), "Message")), e(window).on("mousemove", function (e) {
//           w.show(), TweenMax.set(T, {x: e.pageX, y: e.pageY}), TweenMax.to(C, 1, {
//             x: e.pageX,
//             y: e.pageY,
//             ease: Power4.easeOut
//           })
//         }), e(document).mouseleave(function () {
//           TweenMax.to(w, .8, {autoAlpha: 0, ease: Power4.easeOut})
//         }), e(document).mouseenter(function () {
//           TweenMax.to(w, .8, {autoAlpha: 1, ease: Power4.easeOut})
//         });
//         var re = T.css("background-color"), ne = C.css("background-color");
//         f.on("mouseover", function () {
//           var t = e(this).hasClass("slider-cursor"), i = t ? "#000" : "transparent", r = t ? 35 : 25, n = t ? 1 : 0;
//           t && TweenMax.set(C, {autoAlpha: 0}), TweenMax.to(T, 1, {
//             width: r,
//             height: r,
//             backgroundColor: i,
//             ease: Elastic.easeOut
//           }), TweenMax.to(T.find("svg"), .4, {
//             autoAlpha: n,
//             ease: Power2.easeOut,
//             delay: 0
//           }), TweenMax.to(C, 1, {width: 25, height: 25, backgroundColor: "transparent", ease: Elastic.easeOut})
//         }).on("mouseleave", function () {
//           e(this).hasClass("slider-cursor") && TweenMax.set(C, {autoAlpha: 1}), TweenMax.set(T.find("svg"), {autoAlpha: 0}), TweenMax.to(T, .6, {
//             width: 10,
//             height: 10,
//             backgroundColor: re,
//             ease: Power1.easeOut
//           }), TweenMax.to(C, .6, {width: 10, height: 10, backgroundColor: ne, ease: Power1.easeOut})
//         }), e(".mkx-modal-loop").length && (e(".mkx-modal-loop").iziModal({
//           history: !1,
//           iframe: !0,
//           fullscreen: !0,
//           header: !1,
//           radius: 0,
//           loop: !0,
//           bottom: null,
//           borderBottom: !1,
//           overlayColor: "rgba(0, 0, 0, 0.95)"
//         }), e(".mkx-modal-loop").iziModal("setHeader", !1)), e(document).on("keydown", function (e) {
//           32 == e.keyCode && j.off()
//         }), e(document).on("keyup", function (e) {
//           32 == e.keyCode && j.on()
//         })
//       }
//     }
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     t.a = {
//       init: function init(t, i, r, n, o) {
//         var s = e("body"), a = s.data("images-root") + "/animations/img/dmaps/2048x2048/clouds.jpg",
//           l = document.querySelectorAll("#site-container .canvas-ripple"), u = e("[data-tilter]"),
//           c = e("[data-banner]"), h = c.find("[data-banner-title]"), d = c.find("[data-banner-phonetic]"),
//           f = c.find("[data-banner-content]"), p = c.find("[data-banner-link]"), g = c.find("[data-banner-ripple]"),
//           m = c.find("[data-banner-form]"), v = e(".bloc-hover"), y = {};
//         if (l.length && Array.prototype.forEach.call(l, function (e) {
//           y[e.dataset.canvasId] = new n(e, {
//             mainImage: e.dataset.canvasImage,
//             displacementImage: a,
//             autoPlay: !0,
//             autoPlaySpeed: [8, 3],
//             displacementScale: [-100, 10],
//             events: ["click", "hover"],
//             imageBehavior: !1,
//             cover: !0,
//             dispatchPointerOver: !1
//           })
//         }), e.each(u, function () {
//           var t = e(this);
//           new o(t)
//         }), c.length) {
//           var _ = h.find("span:first"), b = t.cloneAndDisplay(_, _), x = new TimelineMax({paused: !0}),
//             w = new SplitText(h, {type: "words, chars"}), T = {a: 10}, C = {a: 10}, S = {a: 10};
//           x.staggerFrom(w.chars, .9, {
//             y: 10,
//             autoAlpha: 0,
//             ease: Power1.easeOut
//           }, "0.02", "start").to(b, 1, {width: "100%", ease: Power4.easeInOut}, "-=1.1").to(T, 1, {
//             a: 0,
//             onUpdate: function onUpdate(e) {
//               return t.updateBlur(d, T)
//             },
//             ease: Power1.easeOut
//           }, "coco-=0.7").from(d, .5, {autoAlpha: 0, y: 10, ease: Power1.easeOut}, "coco-=0.7").to(C, 1, {
//             a: 0,
//             onUpdate: function onUpdate(e) {
//               return t.updateBlur(f, C)
//             },
//             ease: Power1.easeOut
//           }, "cucu-=0.6").from(f, .5, {
//             autoAlpha: 0,
//             y: 10,
//             ease: Power1.easeOut
//           }, "cucu-=0.6"), p.length && x.to(S, 1, {
//             a: 0, onUpdate: function onUpdate(e) {
//               return t.updateBlur(p, S)
//             }, ease: Power1.easeOut
//           }, "cici-=0.6").from(p, .5, {
//             autoAlpha: 0,
//             y: 10,
//             ease: Power1.easeOut
//           }, "cici-=0.6"), g.length && x.from(g, 1, {
//             autoAlpha: 0,
//             x: 15,
//             ease: Power1.easeOut
//           }, "-=0.8").addCallback(function clearBannerRipple() {
//             TweenMax.to(y["banner-ripple"].displacementFilter.scale, .6, {x: 0, y: 0, ease: Power1.easeOut})
//           }, "end"), m.length && x.from(m, 1, {
//             autoAlpha: 0,
//             x: 15,
//             ease: Power1.easeOut
//           }, "-=0.6"), s.on("loaderEnd", function () {
//             return x.play()
//           })
//         }
//         var E = !1, P = "from-top";
//         e.each(v, function () {
//           var t = e(this), i = t.find(".item-mask"), r = t.find(".item-number, .item-title, .item-cms, .item-link"),
//             n = t.find(".item-link"), o = new TimelineMax({paused: !0});
//           o.to(i, 1, {backgroundPosition: "100%", ease: SteppedEase.config(75)}, "start").to(i, 1, {
//             autoAlpha: 0,
//             ease: Power1.easeOut
//           }, "start").fromTo(r, 1, {color: "#333333"}, {
//             color: "#ffffff",
//             ease: Power1.easeOut
//           }, "start").from(n, 1, {
//             autoAlpha: 0,
//             ease: Power1.easeOut
//           }, "start"), t.find("[data-from]").on("mouseenter", function (t) {
//             var i = e(this).data("from");
//             E || (P = i, E = !0)
//           }), t.on("mouseover", function () {
//             i.addClass(P), o.play().timeScale(1)
//           }), t.on("mouseout", function () {
//             i.removeClass("from-left from-right from-top from-bottom"), E = !1, o.reverse().timeScale(1.5)
//           })
//         });
//         var M = new i.Controller, O = [], R = [], D = e("[data-timeline]");
//         e.each(D, function () {
//           var i = e(this), r = new TimelineMax;
//           e.each(i.find("[data-timeline-item]"), function (i, n) {
//             var o = e(this), s = "[data-stagger-item]", a = o.data("timeline-item"), l = 0 === i ? "start" : "-=0.6",
//               u = o.data("start") ? o.data("start") : l;
//             if ("spanned-title" === a) {
//               var c = o.find("span:first"), h = t.cloneAndDisplay(c, c);
//               r.set(h, {className: "+=ws-nowrap"}), r.from(o, .6, {
//                 y: -50,
//                 autoAlpha: 0,
//                 ease: Power2.easeOut
//               }, u), r.to(h, 1, {width: "100%", ease: Power3.easeInOut}, "-=0.6"), r.set(h, {className: "-=ws-nowrap"})
//             }
//             if ("spanned-title-alt" === a) {
//               var d = o.find("span:first"), f = t.cloneAndDisplay(d, d);
//               r.set(f, {className: "+=ws-nowrap"}), r.from(o, .7, {
//                 y: 30,
//                 autoAlpha: 0,
//                 ease: Power1.easeOut
//               }, u), r.to(f, 1, {width: "100%", ease: Power3.easeInOut}, "-=0.6"), r.set(f, {className: "-=ws-nowrap"})
//             }
//             if ("split-spanned-title" === a) {
//               var p = o.find("span:first"), g = t.cloneAndDisplay(p, p), m = new SplitText(o, {type: "words, chars"});
//               r.set(g, {className: "+=ws-nowrap"}), r.staggerFrom(m.chars, .7, {
//                 y: 5,
//                 autoAlpha: 0,
//                 ease: Power1.easeOut
//               }, "0.02", u), r.to(g, 1, {
//                 width: "100%",
//                 ease: Power3.easeInOut
//               }, "-=1"), r.set(g, {className: "-=ws-nowrap"})
//             }
//             if ("splittext.sm" === a) {
//               var v = new SplitText(o, {type: "words, chars"});
//               r.staggerFrom(v.chars, .6, {y: 5, autoAlpha: 0, ease: Power1.easeOut}, .02, u)
//             }
//             if ("splittext.md" === a) {
//               var y = new SplitText(o, {type: "words, chars"});
//               r.staggerFrom(y.chars, .6, {y: 5, autoAlpha: 0, ease: Power1.easeOut}, .008, u)
//             }
//             if ("splittext.xxl" === a) {
//               var _ = new SplitText(o, {type: "words, chars"});
//               r.staggerFrom(_.chars, .9, {y: -60, autoAlpha: 0, ease: Power2.easeOut}, "0.05", u)
//             }
//             if ("fadeInUp.parallax" === a && r.from(o, 1.2, {
//               y: 150,
//               autoAlpha: 0,
//               ease: Power1.easeOut
//             }, u), "fadeInUp.parallax.smooth" === a && r.from(o, 1.2, {
//               y: 100,
//               autoAlpha: 0,
//               ease: Power1.easeOut
//             }, u), "fadeInUp.parallax.sm" === a && r.from(o, 1.2, {
//               y: 50,
//               autoAlpha: 0,
//               ease: Power1.easeOut
//             }, u), "fadeInUp.parallax.smooth.stagger" === a && r.staggerFrom(o.find(s), 1.2, {
//               y: 100,
//               autoAlpha: 0,
//               ease: Power1.easeOut
//             }, .6, u), "fadeInUp.parallax.smooth.stagger.sm" === a && r.staggerFrom(o.find(s), .8, {
//               y: 50,
//               autoAlpha: 0,
//               ease: Power1.easeOut
//             }, .4, u), "fadeInUp.stagger.sm" === a && r.staggerFrom(o.find(s), .8, {
//               y: 50,
//               autoAlpha: 0,
//               ease: Power2.easeOut
//             }, .1, u), "blur" == a) {
//               var b = {a: 10};
//               r.to(b, .8, {
//                 a: 0, onUpdate: function onUpdate(e) {
//                   return t.updateBlur(o, b)
//                 }, ease: Power2.easeOut
//               }, u), r.from(o, .5, {autoAlpha: 0, y: 10, ease: Power2.easeOut}, u)
//             }
//             if ("blurInLeft" == a) {
//               var x = {a: 10};
//               r.to(x, .8, {
//                 a: 0, onUpdate: function onUpdate(e) {
//                   return t.updateBlur(o, x)
//                 }, ease: Power2.easeOut
//               }, u), r.from(o, .5, {autoAlpha: 0, x: 10, ease: Power2.easeOut}, u)
//             }
//             if ("custom-list" === a) {
//               var w = [], T = o.find("li"), C = T.find(".item-bullet"), S = T.find(".item-line"),
//                 E = T.find(".item-line-alt");
//               e.each(T.find(".item-title"), function () {
//                 var i = e(this), r = t.cloneAndDisplay(i, i);
//                 w.push(r)
//               }), r.set(w, {className: "+=ws-nowrap"}), r.from(C, .5, {
//                 x: -15,
//                 autoAlpha: 0,
//                 ease: Power1.easeOut
//               }, u), r.to(E, .7, {
//                 scaleX: 1,
//                 transformOrigin: "left top",
//                 ease: Expo.easeInOut
//               }, "-=0.4"), r.to(S, .4, {
//                 scaleX: 1,
//                 transformOrigin: "left top",
//                 ease: Power2.easeOut
//               }, "-=0.2"), r.from(T.find(".item-inner"), 1, {
//                 x: 15,
//                 autoAlpha: 0,
//                 ease: Power1.easeOut
//               }, "-=0.4"), r.to(w, 1, {
//                 width: "100%",
//                 ease: Power3.easeInOut
//               }, "-=1"), r.set(w, {className: "-=ws-nowrap"})
//             }
//             if ("custom-list-2" === a) {
//               var P = o.find("li"), M = P.find(".item-number"), O = P.find(".item-title"),
//                 R = P.find(".item-title, .item-content"), D = P.find(".item-line"), A = P.find(".item-line-alt");
//               new SplitText(O, {type: "words, chars"});
//               r.to(A, .7, {scaleX: 1, transformOrigin: "left top", ease: Expo.easeInOut}, u), r.to(D, .4, {
//                 scaleX: 1,
//                 transformOrigin: "left top",
//                 ease: Power2.easeOut
//               }, "-=0.2"), r.from(M, .5, {x: 15, autoAlpha: 0, ease: Power1.easeOut}, "-=0.4"), r.from(R, .6, {
//                 x: 15,
//                 autoAlpha: 0,
//                 ease: Power1.easeOut
//               }, "-=0.2")
//             }
//             "scaleInLeft" === a && r.from(o, 1.5, {scaleX: 0, transformOrigin: "left top", ease: Power4.easeInOut})
//           }), R.push({triggerElement: i, timeline: r, hook: i.data("hook")})
//         }), R.map(function (e) {
//           O.push(function createScene(e) {
//             return new i.Scene({
//               triggerElement: e.triggerElement,
//               triggerHook: t.isDefined(e.hook) ? e.hook : "onEnter"
//             }).setTween(e.timeline)
//           }(e))
//         }), M.addScene(O)
//       }
//     }
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     t.a = {
//       init: function init(t) {
//         var i = e(".owl-addons .owl-carousel"), r = e(".owl-addons .arrow"), n = e(".owl-clients .owl-carousel"),
//           o = e(".owl-medias .owl-carousel"), s = e(".owl-clients .arrow");
//         i.owlCarousel({
//           autoplay: !0,
//           autoplayTimeout: 3e3,
//           autoplayHoverPause: !1,
//           loop: !0,
//           margin: 30,
//           nav: !1,
//           dots: !1,
//           rewind: !1,
//           slideTransition: "ease-out",
//           smartSpeed: 500,
//           responsive: {
//             0: {items: 1, center: !0},
//             578: {items: 2, center: !1},
//             768: {items: 3, center: !1},
//             992: {items: 2.5, center: !1}
//           }
//         }), i.on("click", function () {
//           i.trigger("next.owl.carousel")
//         }), r.on("click", function () {
//           var t = e(this).hasClass("arrow-left") ? "prev.owl.carousel" : "next.owl.carousel";
//           i.trigger(t)
//         }), n.owlCarousel({
//           loop: !1,
//           margin: 30,
//           nav: !1,
//           dots: !1,
//           rewind: !1,
//           slideTransition: "ease-out",
//           smartSpeed: 700,
//           responsive: {0: {items: 1, center: !0}, 768: {items: 3}, 992: {items: 4}, 1200: {items: 6}}
//         }), o.owlCarousel({
//           autoplay: !1,
//           autoplayTimeout: 2e3,
//           autoplayHoverPause: !1,
//           loop: !1,
//           margin: 30,
//           nav: !1,
//           dots: !1,
//           rewind: !1,
//           slideTransition: "ease-out",
//           smartSpeed: 700,
//           responsive: {0: {items: 1, center: !0}, 768: {items: 3}, 992: {items: 4}, 1200: {items: 6}}
//         }), n.on("click", function () {
//           n.trigger("next.owl.carousel")
//         }), s.on("click", function () {
//           var t = e(this).hasClass("arrow-left") ? "prev.owl.carousel" : "next.owl.carousel";
//           n.trigger(t)
//         }), e(window).on("keyup", function (e) {
//           if (e.preventDefault(), t.inViewport(document.querySelector(".owl-addons .owl-carousel"))) {
//             var r = e.keyCode;
//             37 !== r && 39 !== r || (console.log(r), 37 === r && i.trigger("prev.owl.carousel"), 39 === r && i.trigger("next.owl.carousel"))
//           }
//           if (t.inViewport(document.querySelector(".owl-clients .owl-carousel"))) {
//             var o = e.keyCode;
//             37 !== o && 39 !== o || (37 === o && n.trigger("prev.owl.carousel"), 39 === o && n.trigger("next.owl.carousel"))
//           }
//         })
//       }
//     }
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     t.a = {
//       init: function init(t) {
//         var i = e(".owl-products .owl-carousel");
//
//         function doAnimation(i) {
//           var r = t.getSlide(i).others, n = t.getSlide(i).active, o = t.getSlide(i).previous, s = e(window).width(),
//             a = s < 992, l = s < 578, u = {};
//           u.transformOrigin = a ? "center" : "left center", u.x = a ? 0 : 100, n.addClass("current"), o.addClass("previous"), a && (u.scale = 1.6), l && (u.scale = 1), a || l || (u.scale = 1.8), TweenMax.set(r, {zIndex: 0}), TweenMax.set(n, {zIndex: 1}), TweenMax.to(r, .7, {
//             scale: 1,
//             x: u.x,
//             transformOrigin: u.transformOrigin,
//             ease: Power1.easeOut
//           }), TweenMax.to(n, .7, {scale: u.scale, x: 0, transformOrigin: u.transformOrigin, ease: Power1.easeOut})
//         }
//
//         i.owlCarousel({
//           loop: !0,
//           margin: 30,
//           nav: !1,
//           dots: !1,
//           rewind: !1,
//           slideTransition: "ease-out",
//           smartSpeed: 700,
//           onTranslate: function handleTranslate(e) {
//             doAnimation(e)
//           },
//           onInitialized: function handleInitialized(e) {
//             doAnimation(e)
//           },
//           onResize: function handleResize(e) {
//             doAnimation(e)
//           },
//           responsive: {0: {items: 1, center: !0}, 578: {items: 3, center: !0}, 992: {items: 4, center: !1}}
//         }), i.on("click", function () {
//           i.trigger("next.owl.carousel")
//         }), e(window).on("keyup", function (e) {
//           if (e.preventDefault(), t.inViewport(document.querySelector(".owl-products .owl-carousel"))) {
//             var r = e.keyCode;
//             37 !== r && 39 !== r || (37 === r && i.trigger("prev.owl.carousel"), 39 === r && i.trigger("next.owl.carousel"))
//           }
//         })
//       }
//     }
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     t.a = {
//       init: function init(t) {
//         var i = e(".owl-categories .owl-carousel"), r = e(".news-container"), n = e(".custom-pagination"), o = null;
//
//         function doAnimation(e) {
//           var i = t.getSlide(e).others, r = t.getSlide(e).active;
//           TweenMax.set(i, {zIndex: 0}), TweenMax.set(r, {zIndex: 1}), TweenMax.to(i.find(".title-xxl"), .7, {
//             autoAlpha: .2,
//             ease: Power1.easeOut
//           }), TweenMax.to(r.find(".title-xxl"), .7, {
//             autoAlpha: 1,
//             ease: Power1.easeOut
//           }), n[r.find(".all-news").length ? "show" : "hide"]()
//         }
//
//         i.owlCarousel({
//           loop: !1,
//           items: 1,
//           center: !0,
//           autoWidth: !0,
//           nav: !1,
//           dots: !1,
//           rewind: !1,
//           slideTransition: "ease-out",
//           smartSpeed: 800,
//           onTranslate: function handleTranslate(e) {
//             doAnimation(e)
//           },
//           onInitialized: function handleInitialized(e) {
//             doAnimation(e)
//           },
//           onResize: function handleResize(e) {
//             doAnimation(e)
//           },
//           onTranslated: function handleTranslated(i) {
//             !function ajaxFindByCategory(t) {
//               1, null !== o && o.abort();
//               o = e.ajax({
//                 url: t, type: "GET", dataType: "json", beforeSend: function beforeSend() {
//                   r.hide().html(""), e(".ajax-loader").fadeIn(400)
//                 }, success: function success(t, i) {
//                   var n = e(t).find(".owl-category-articles .owl-carousel");
//                   r.html(t).fadeIn(800, function () {
//                     if (n.length) {
//                       var t = e(".owl-category-articles .arrow"), i = e(".owl-category-articles .owl-carousel");
//                       i.owlCarousel({
//                         margin: 30,
//                         nav: !1,
//                         dots: !1,
//                         rewind: !1,
//                         slideTransition: "ease-out",
//                         smartSpeed: 500,
//                         responsive: {
//                           0: {items: 1, center: !0},
//                           768: {items: 2, center: !1},
//                           992: {items: 3, center: !1}
//                         }
//                       }), t.on("click", function () {
//                         var t = e(this), r = t.hasClass("arrow-left") ? "prev.owl.carousel" : "next.owl.carousel";
//                         i.trigger(r)
//                       })
//                     }
//                   }), e(".ajax-loader").hide(), o = null
//                 }, error: function error(e, t, i) {
//                 }
//               })
//             }(t.getSlide(i).active.find(".owl-item-content").data("ajax-url"))
//           }
//         }), e(document).on("click", ".owl-item", function () {
//           var t = e(this).index();
//           i.trigger("to.owl.carousel", t)
//         }), e(window).on("keyup", function (e) {
//           if (e.preventDefault(), t.inViewport(document.querySelector(".owl-categories .owl-carousel"))) {
//             var r = e.keyCode;
//             37 !== r && 39 !== r || (37 === r && i.trigger("prev.owl.carousel"), 39 === r && i.trigger("next.owl.carousel"))
//           }
//         })
//       }
//     }
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     t.a = {
//       init: function init(t, i) {
//         var r = e("#map");
//         e.each(r, function () {
//           var t = e(this);
//           new i(t, {markers: t.find(".marker"), zoom: 16})
//         })
//       }
//     }
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     t.a = {
//       init: function init(t, i, r) {
//         var n = e("body"), o = e(".owl-products-categories .owl-carousel"),
//           s = document.querySelectorAll(".hoverable-ripple"),
//           a = n.data("images-root") + "/animations/img/dmaps/512x512/clouds.jpg", l = e(".btn-show-product"),
//           u = e(".owl-products-categories .owl-products-categories-arrows span"), c = (n.hasClass("isMobile"), {}),
//           h = n.hasClass("isDesktop");
//
//         function doAnimation(e) {
//           var i = t.getSlide(e).others, r = t.getSlide(e).active, n = i.find(".slide-header .item-title > span.cloned"),
//             o = r.find(".slide-header .item-title > span.cloned");
//           TweenMax.to(n, 1, {width: "0%", ease: Power3.easeOut}), TweenMax.to(o, 1, {
//             width: "100%",
//             ease: Power3.easeOut
//           })
//         }
//
//         if (o.owlCarousel({
//           loop: !1,
//           margin: 120,
//           nav: !1,
//           dots: !1,
//           rewind: !1,
//           slideTransition: "ease-out",
//           smartSpeed: 800,
//           onTranslate: function handleTranslate(e) {
//             doAnimation(e)
//           },
//           onInitialized: function handleInitialized(i) {
//             e.each(o.find(".owl-item"), function () {
//               var i = e(this), r = i.find(".slide-header .item-title"), n = r.find("span");
//               t.cloneAndDisplay(n, r)
//             }), doAnimation(i)
//           },
//           onResize: function handleResize(e) {
//             doAnimation(e)
//           },
//           responsive: {0: {items: 1}, 992: {items: 2}, 1600: {items: 3}}
//         }), e(window).on("keyup", function (e) {
//           if (e.preventDefault(), t.inViewport(document.querySelector(".owl-products-categories .owl-carousel"))) {
//             var i = e.keyCode;
//             37 !== i && 39 !== i || (37 === i && o.trigger("prev.owl.carousel"), 39 === i && o.trigger("next.owl.carousel"))
//           }
//         }), u.on("click", function () {
//           var t = e(this).hasClass("arrow-left") ? "prev.owl.carousel" : "next.owl.carousel";
//           o.trigger(t)
//         }), e("body").on("click", ".owl-products-categories .owl-carousel .owl-item", function () {
//           o.trigger("to.owl.carousel", [e(this).index()])
//         }), h && e(window).width() > 1200) {
//           s.length && (Array.prototype.forEach.call(s, function (e) {
//             c[e.dataset.canvasId] = new i(e, {
//               mainImage: e.dataset.canvasImage,
//               displacementImage: a,
//               autoPlay: !0,
//               autoPlaySpeed: [3, 1],
//               displacementScale: [-20, 3],
//               events: ["click", "hover"],
//               imageBehavior: !1,
//               cover: !0,
//               dispatchPointerOver: !1
//             })
//           }), console.log(c));
//           var d = {};
//           e.each(o.find(".owl-item"), function (t, i) {
//             var r = e(this);
//             if (!r.find(".fake-slide").length) {
//               var n = r.find(".owl-item-content").data("slide-id"), o = r.find(".slide-header"),
//                 s = (o.find(".item-title"), o.find(".item-separator .above")), a = o.find(".item-content"),
//                 l = r.find(".slide-products"), u = l.find(".item-product"),
//                 c = (l.find(".item-moving-bloc"), new SplitText(a, {type: "words, chars"})),
//                 h = new TimelineMax({paused: !0});
//               h.from(s, .9, {
//                 scaleX: 0,
//                 transformOrigin: "left top",
//                 ease: Expo.easeInOut
//               }, "start").staggerFrom(c.chars, .7, {
//                 y: 5,
//                 autoAlpha: 0,
//                 ease: Power1.easeOut
//               }, .007, "-=0.45").staggerFrom(u, .8, {
//                 y: 10,
//                 autoAlpha: 0,
//                 ease: Power1.easeOut
//               }, .2, "-=0.6"), d[n] = h, r.on("mouseover", function () {
//                 h.play().timeScale(1)
//               }).on("mouseleave", function () {
//                 h.reverse().timeScale(1.5)
//               })
//             }
//           });
//           var f = new r.Controller,
//             p = new r.Scene({triggerElement: e(".owl-products-categories"), triggerHook: "onCenter"});
//           p.on("enter", function () {
//             d["slide-1"].play().timeScale(1)
//           }), p.addTo(f);
//           var g = !1;
//           e.each(o.find(".owl-item .slide-products .item-product"), function () {
//             var t = e(this), i = t.find(".item-moving-bloc"), r = new TimelineMax({paused: !0});
//             r.from(i, .6, {autoAlpha: 0, x: 15, ease: Power1.easeOut}, "start"), t.on("mousemove", function (e) {
//               var n = e.pageX - t.offset().left + 50, o = e.pageY - t.offset().top - i.height() / 2;
//               TweenMax.to(i, .5, {left: n, top: o}), g || (r.play().timeScale(1), g = !0)
//             }).on("mouseleave", function () {
//               r.reverse().timeScale(2), g = !1
//             })
//           })
//         } else {
//           var m = {};
//           e(".item-product .item-img.mobile").hide(), l.on("click", function () {
//             var i = e(this), r = "tl-" + i.data("btn-id"), n = i.closest(".item-product");
//             if (!t.isDefined(m[r])) {
//               var o = new TimelineMax({
//                 paused: !0, onReverseComplete: function onReverseComplete() {
//                   i.find(".item-text").text(i.data("text-show"))
//                 }
//               });
//               o.set(n.find(".item-img.mobile"), {className: "+=d-b"}).set(n.find(".item-lists"), {className: "+=d-b"}).from(n.find(".item-img.mobile"), .6, {
//                 autoAlpha: 0,
//                 y: 30,
//                 ease: Power1.easeOut
//               }, "start").staggerFrom(n.find(".item-lists li"), .5, {
//                 autoAlpha: 0,
//                 x: 10,
//                 ease: Power2.easeOut
//               }, .1, "-=0.4"), m[r] = o
//             }
//             m[r].totalProgress() <= 0 ? (m[r].play().timeScale(1), i.find(".item-text").text(i.data("text-hide"))) : m[r].reverse().timeScale(2)
//           })
//         }
//       }
//     }
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   "use strict";
//   (function (e) {
//     t.a = {
//       init: function init(t) {
//         var i = document.getElementById("input_1_1") || document.getElementById("input_2_1"),
//           r = document.getElementById("input_1_2") || document.getElementById("input_2_2"),
//           n = document.getElementById("input_1_3") || document.getElementById("input_2_3"),
//           o = document.getElementById("input_1_5") || document.getElementById("input_2_5"),
//           s = document.getElementById("input_1_6") || document.getElementById("input_2_6"),
//           a = document.getElementById("gform_submit_button_1") || document.getElementById("gform_submit_button_2"),
//           l = [[i, "[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]{2,}", 2, null], [r, "[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]{2,}", 2, null], [n, "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$", 2, null], [o, "[0-9A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]{2,}", 2, null], [s, "[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]{2,}", 2, null]];
//
//         function addAttributes(e, t, i, r) {
//           null != t && e.setAttribute("pattern", t), null != i && e.setAttribute("minLenght", i), null != r && e.setAttribute("maxLenght", r)
//         }
//
//         function getMessage(e) {
//           var t = document.createElement("div"), i = document.createTextNode(e);
//           return t.appendChild(i), t.classList.add("gfield_description"), t.classList.add("validation_message"), t.id = "gform_confirmation", t.style.display = "none", t
//         }
//
//         !function initialize() {
//           e("#gform_1").removeAttr("action");
//           var t = !0, u = !1, c = void 0;
//           try {
//             for (var h, d = l[Symbol.iterator](); !(t = (h = d.next()).done); t = !0) {
//               var f = h.value;
//               addAttributes(f[0], f[1], f[2], f[3])
//             }
//           } catch (e) {
//             u = !0, c = e
//           } finally {
//             try {
//               !t && d.return && d.return()
//             } finally {
//               if (u) throw c
//             }
//           }
//           a.addEventListener("click", function (t) {
//             var a = [], u = !1, c = !1, h = !1, d = !1, f = !1, p = function _loop(t) {
//               t[0].parentNode.parentNode.querySelector(".validation_message") && (e(".validation_message").fadeOut(300), setTimeout(function () {
//                 t[0].parentNode.parentNode.removeChild(document.querySelector(".validation_message"))
//               }, 300)), a.push(function isValid(e) {
//                 return e.validity.patternMismatch || "" == e.value ? (e.classList.add("errorInput"), e.parentNode.parentNode.querySelector(".gfield_label").style.bottom = "inherit", e.parentNode.parentNode.querySelector(".gfield_label").style.top = "5px", !1) : (e.classList.remove("errorInput"), !0)
//               }(t[0]))
//             }, g = !0, m = !1, v = void 0;
//             try {
//               for (var y, _ = l[Symbol.iterator](); !(g = (y = _.next()).done); g = !0) {
//                 var b = y.value;
//                 p(b)
//               }
//             } catch (e) {
//               m = !0, v = e
//             } finally {
//               try {
//                 !g && _.return && _.return()
//               } finally {
//                 if (m) throw v
//               }
//             }
//             for (var x = 0; x < a.length; x++) if (a[x]) switch (x) {
//               case 0:
//                 u = !0;
//                 break;
//               case 1:
//                 c = !0;
//                 break;
//               case 2:
//                 h = !0;
//                 break;
//               case 3:
//                 d = !0;
//                 break;
//               case 4:
//                 f = !0
//             }
//             if (!(u && c && h && d && f)) return u || (document.getElementById("input_1_1") ? (i.parentNode.parentNode.appendChild(getMessage("Veuillez bien remplir le champ")), e(".validation_message").fadeIn(600)) : (i.parentNode.parentNode.appendChild(getMessage("Please verify this field")), e(".validation_message").fadeIn(600))), c || (document.getElementById("input_1_1") ? (r.parentNode.parentNode.appendChild(getMessage("Veuillez bien remplir le champ")), e(".validation_message").fadeIn(600)) : (r.parentNode.parentNode.appendChild(getMessage("Please verify this field")), e(".validation_message").fadeIn(600))), h || (document.getElementById("input_1_1") ? (n.parentNode.parentNode.appendChild(getMessage("Veuillez bien remplir le champ")), e(".validation_message").fadeIn(600)) : (n.parentNode.parentNode.appendChild(getMessage("Please verify this field")), e(".validation_message").fadeIn(600))), d || (document.getElementById("input_1_1") ? (o.parentNode.parentNode.appendChild(getMessage("Veuillez bien remplir le champ")), e(".validation_message").fadeIn(600)) : (o.parentNode.parentNode.appendChild(getMessage("Please verify this field")), e(".validation_message").fadeIn(600))), f || (document.getElementById("input_1_1") ? (s.parentNode.parentNode.appendChild(getMessage("Veuillez bien remplir le champ")), e(".validation_message").fadeIn(600)) : (s.parentNode.parentNode.appendChild(getMessage("Please verify this field")), e(".validation_message").fadeIn(600))), t.preventDefault(), !1;
//             document.getElementById("gform_1") ? (e("#gform_1").submit(), document.getElementById("gform_wrapper_1").appendChild(getMessage("Merci de nous avoir contactés ! Nous vous répondrons dans les plus brefs délais.")), e("#gform_1").fadeOut(1e3)) : (e("#gform_2").submit(), document.getElementById("gform_wrapper_2").appendChild(getMessage("Thank you for contacting us! We will respond as soon as possible.")), e("#gform_2").fadeOut(1e3)), e(".validation_message").delay(1500).fadeIn(600)
//           }, !1)
//         }()
//       }
//     }
//   }).call(this, i(4))
// }
//
// ,
//
// function (e, t, i) {
//   i(125), i(127), i(129), e.exports = i(131)
// }
//
// ,
//
// function (e, t, i) {
// }
//
// ,,
//
// function (e, t, i) {
// }
//
// ,,
//
// function (e, t, i) {
// }
//
// ,,
//
// function (e, t, i) {
//   "use strict";
//   i.r(t), function (e, t) {
//     i(132);
//     var r = i(49), n = (i(234), i(235), i(237), i(238), i(16)), o = i.n(n), s = (i(253), i(103)), a = i(13), l = i(104),
//       u = i(105), c = i(106), h = i(107), d = i(108), f = i(109), p = i(31), g = i(110), m = i(115), v = i(116),
//       y = i(117), _ = i(118), b = i(119), x = i(120), w = i(121), T = i(122), C = i(123);
//     i(133)(e), new s.a([{file: v.a, dependencies: [a, l.a, g.a, u.a, c.a, f.a, d.a, p.a, o.a]}, {
//       file: y.a,
//       dependencies: [a, o.a, r, p.a, m.a]
//     }, {file: _.a, dependencies: [a], resolve: "#page-home"}, {
//       file: b.a,
//       dependencies: [a],
//       resolve: ".page-product"
//     }, {file: x.a, dependencies: [a], resolve: ".page-news"}, {
//       file: w.a,
//       dependencies: [a, h.a],
//       resolve: "#page-contact"
//     }, {file: T.a, dependencies: [a, p.a, o.a], resolve: ".owl-products-categories"}, {
//       file: C.a,
//       dependencies: [a],
//       resolve: ".materialize-form"
//     }]).load()
//   }.call(this, i(4), i(4))
// }
//
// ,
//
// function (e, t, i) {
//   (function (e, t) {
//     !function (e, i, r, n) {
//       function Owl(t, i) {
//         this.settings = null, this.options = e.extend({}, Owl.Defaults, i), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
//           time: null,
//           target: null,
//           pointer: null,
//           stage: {start: null, current: null},
//           direction: null
//         }, this._states = {
//           current: {},
//           tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
//         }, e.each(["onResize", "onThrottledResize"], e.proxy(function (t, i) {
//           this._handlers[i] = e.proxy(this[i], this)
//         }, this)), e.each(Owl.Plugins, e.proxy(function (e, t) {
//           this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
//         }, this)), e.each(Owl.Workers, e.proxy(function (t, i) {
//           this._pipe.push({filter: i.filter, run: e.proxy(i.run, this)})
//         }, this)), this.setup(), this.initialize()
//       }
//
//       Owl.Defaults = {
//         items: 3,
//         loop: !1,
//         center: !1,
//         rewind: !1,
//         checkVisibility: !0,
//         mouseDrag: !0,
//         touchDrag: !0,
//         pullDrag: !0,
//         freeDrag: !1,
//         margin: 0,
//         stagePadding: 0,
//         merge: !1,
//         mergeFit: !0,
//         autoWidth: !1,
//         startPosition: 0,
//         rtl: !1,
//         smartSpeed: 250,
//         fluidSpeed: !1,
//         dragEndSpeed: !1,
//         responsive: {},
//         responsiveRefreshRate: 200,
//         responsiveBaseElement: i,
//         fallbackEasing: "swing",
//         slideTransition: "",
//         info: !1,
//         nestedItemSelector: !1,
//         itemElement: "div",
//         stageElement: "div",
//         refreshClass: "owl-refresh",
//         loadedClass: "owl-loaded",
//         loadingClass: "owl-loading",
//         rtlClass: "owl-rtl",
//         responsiveClass: "owl-responsive",
//         dragClass: "owl-drag",
//         itemClass: "owl-item",
//         stageClass: "owl-stage",
//         stageOuterClass: "owl-stage-outer",
//         grabClass: "owl-grab"
//       }, Owl.Width = {Default: "default", Inner: "inner", Outer: "outer"}, Owl.Type = {
//         Event: "event",
//         State: "state"
//       }, Owl.Plugins = {}, Owl.Workers = [{
//         filter: ["width", "settings"], run: function () {
//           this._width = this.$element.width()
//         }
//       }, {
//         filter: ["width", "items", "settings"], run: function (e) {
//           e.current = this._items && this._items[this.relative(this._current)]
//         }
//       }, {
//         filter: ["items", "settings"], run: function () {
//           this.$stage.children(".cloned").remove()
//         }
//       }, {
//         filter: ["width", "items", "settings"], run: function (e) {
//           var t = this.settings.margin || "", i = !this.settings.autoWidth, r = this.settings.rtl,
//             n = {width: "auto", "margin-left": r ? t : "", "margin-right": r ? "" : t};
//           !i && this.$stage.children().css(n), e.css = n
//         }
//       }, {
//         filter: ["width", "items", "settings"], run: function (e) {
//           var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
//             r = this._items.length, n = !this.settings.autoWidth, o = [];
//           for (e.items = {
//             merge: !1,
//             width: t
//           }; r--;) i = this._mergers[r], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, e.items.merge = i > 1 || e.items.merge, o[r] = n ? t * i : this._items[r].width();
//           this._widths = o
//         }
//       }, {
//         filter: ["items", "settings"], run: function () {
//           var t = [], i = this._items, r = this.settings, n = Math.max(2 * r.items, 4), o = 2 * Math.ceil(i.length / 2),
//             s = r.loop && i.length ? r.rewind ? n : Math.max(n, o) : 0, a = "", l = "";
//           for (s /= 2; s > 0;) t.push(this.normalize(t.length / 2, !0)), a += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), l = i[t[t.length - 1]][0].outerHTML + l, s -= 1;
//           this._clones = t, e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
//         }
//       }, {
//         filter: ["width", "items", "settings"], run: function () {
//           for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = -1, r = 0, n = 0, o = []; ++i < t;) r = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(r + n * e);
//           this._coordinates = o
//         }
//       }, {
//         filter: ["width", "items", "settings"], run: function () {
//           var e = this.settings.stagePadding, t = this._coordinates, i = {
//             width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
//             "padding-left": e || "",
//             "padding-right": e || ""
//           };
//           this.$stage.css(i)
//         }
//       }, {
//         filter: ["width", "items", "settings"], run: function (e) {
//           var t = this._coordinates.length, i = !this.settings.autoWidth, r = this.$stage.children();
//           if (i && e.items.merge) for (; t--;) e.css.width = this._widths[this.relative(t)], r.eq(t).css(e.css); else i && (e.css.width = e.items.width, r.css(e.css))
//         }
//       }, {
//         filter: ["items"], run: function () {
//           this._coordinates.length < 1 && this.$stage.removeAttr("style")
//         }
//       }, {
//         filter: ["width", "items", "settings"], run: function (e) {
//           e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
//         }
//       }, {
//         filter: ["position"], run: function () {
//           this.animate(this.coordinates(this._current))
//         }
//       }, {
//         filter: ["width", "position", "items", "settings"], run: function () {
//           var e, t, i, r, n = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding,
//             s = this.coordinates(this.current()) + o, a = s + this.width() * n, l = [];
//           for (i = 0, r = this._coordinates.length; i < r; i++) e = this._coordinates[i - 1] || 0, t = Math.abs(this._coordinates[i]) + o * n, (this.op(e, "<=", s) && this.op(e, ">", a) || this.op(t, "<", s) && this.op(t, ">", a)) && l.push(i);
//           this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
//         }
//       }], Owl.prototype.initializeStage = function () {
//         this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(e("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
//       }, Owl.prototype.initializeItems = function () {
//         var t = this.$element.find(".owl-item");
//         if (t.length) return this._items = t.get().map(function (t) {
//           return e(t)
//         }), this._mergers = this._items.map(function () {
//           return 1
//         }), void this.refresh();
//         this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
//       }, Owl.prototype.initialize = function () {
//         var e, t, i;
//         (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, i = this.$element.children(t).width(), e.length && i <= 0 && this.preloadAutoWidthImages(e));
//         this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
//       }, Owl.prototype.isVisible = function () {
//         return !this.settings.checkVisibility || this.$element.is(":visible")
//       }, Owl.prototype.setup = function () {
//         var t = this.viewport(), i = this.options.responsive, r = -1, n = null;
//         i ? (e.each(i, function (e) {
//           e <= t && e > r && (r = Number(e))
//         }), "function" == typeof (n = e.extend({}, this.options, i[r])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + r))) : n = e.extend({}, this.options), this.trigger("change", {
//           property: {
//             name: "settings",
//             value: n
//           }
//         }), this._breakpoint = r, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
//           property: {
//             name: "settings",
//             value: this.settings
//           }
//         })
//       }, Owl.prototype.optionsLogic = function () {
//         this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
//       }, Owl.prototype.prepare = function (t) {
//         var i = this.trigger("prepare", {content: t});
//         return i.data || (i.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {content: i.data}), i.data
//       }, Owl.prototype.update = function () {
//         for (var t = 0, i = this._pipe.length, r = e.proxy(function (e) {
//           return this[e]
//         }, this._invalidated), n = {}; t < i;) (this._invalidated.all || e.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(n), t++;
//         this._invalidated = {}, !this.is("valid") && this.enter("valid")
//       }, Owl.prototype.width = function (e) {
//         switch (e = e || Owl.Width.Default) {
//           case Owl.Width.Inner:
//           case Owl.Width.Outer:
//             return this._width;
//           default:
//             return this._width - 2 * this.settings.stagePadding + this.settings.margin
//         }
//       }, Owl.prototype.refresh = function () {
//         this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
//       }, Owl.prototype.onThrottledResize = function () {
//         i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
//       }, Owl.prototype.onResize = function () {
//         return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
//       }, Owl.prototype.registerEventHandlers = function () {
//         e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
//           return !1
//         })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
//       }, Owl.prototype.onDragStart = function (t) {
//         var i = null;
//         3 !== t.which && (e.support.transform ? i = {
//           x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
//           y: i[16 === i.length ? 13 : 5]
//         } : (i = this.$stage.position(), i = {
//           x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
//           y: i.top
//         }), this.is("animating") && (e.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(t), e(r).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(r).one("mousemove.owl.core touchmove.owl.core", e.proxy(function (t) {
//           var i = this.difference(this._drag.pointer, this.pointer(t));
//           e(r).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
//         }, this)))
//       }, Owl.prototype.onDragMove = function (e) {
//         var t = null, i = null, r = null, n = this.difference(this._drag.pointer, this.pointer(e)),
//           o = this.difference(this._drag.stage.start, n);
//         this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, o.x = ((o.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), r = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, t + r), i + r)), this._drag.stage.current = o, this.animate(o.x))
//       }, Owl.prototype.onDragEnd = function (t) {
//         var i = this.difference(this._drag.pointer, this.pointer(t)), n = this._drag.stage.current,
//           o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
//         e(r).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
//           return !1
//         })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
//       }, Owl.prototype.closest = function (t, i) {
//         var r = -1, n = this.width(), o = this.coordinates();
//         return this.settings.freeDrag || e.each(o, e.proxy(function (e, s) {
//           return "left" === i && t > s - 30 && t < s + 30 ? r = e : "right" === i && t > s - n - 30 && t < s - n + 30 ? r = e + 1 : this.op(t, "<", s) && this.op(t, ">", void 0 !== o[e + 1] ? o[e + 1] : s - n) && (r = "left" === i ? e + 1 : e), -1 === r
//         }, this)), this.settings.loop || (this.op(t, ">", o[this.minimum()]) ? r = t = this.minimum() : this.op(t, "<", o[this.maximum()]) && (r = t = this.maximum())), r
//       }, Owl.prototype.animate = function (t) {
//         var i = this.speed() > 0;
//         this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
//           transform: "translate3d(" + t + "px,0px,0px)",
//           transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
//         }) : i ? this.$stage.animate({left: t + "px"}, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: t + "px"})
//       }, Owl.prototype.is = function (e) {
//         return this._states.current[e] && this._states.current[e] > 0
//       }, Owl.prototype.current = function (e) {
//         if (void 0 === e) return this._current;
//         if (0 !== this._items.length) {
//           if (e = this.normalize(e), this._current !== e) {
//             var t = this.trigger("change", {property: {name: "position", value: e}});
//             void 0 !== t.data && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
//               property: {
//                 name: "position",
//                 value: this._current
//               }
//             })
//           }
//           return this._current
//         }
//       }, Owl.prototype.invalidate = function (t) {
//         return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function (e, t) {
//           return t
//         })
//       }, Owl.prototype.reset = function (e) {
//         void 0 !== (e = this.normalize(e)) && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
//       }, Owl.prototype.normalize = function (e, t) {
//         var i = this._items.length, r = t ? 0 : this._clones.length;
//         return !this.isNumeric(e) || i < 1 ? e = void 0 : (e < 0 || e >= i + r) && (e = ((e - r / 2) % i + i) % i + r / 2), e
//       }, Owl.prototype.relative = function (e) {
//         return e -= this._clones.length / 2, this.normalize(e, !0)
//       }, Owl.prototype.maximum = function (e) {
//         var t, i, r, n = this.settings, o = this._coordinates.length;
//         if (n.loop) o = this._clones.length / 2 + this._items.length - 1; else if (n.autoWidth || n.merge) {
//           if (t = this._items.length) for (i = this._items[--t].width(), r = this.$element.width(); t-- && !((i += this._items[t].width() + this.settings.margin) > r);) ;
//           o = t + 1
//         } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
//         return e && (o -= this._clones.length / 2), Math.max(o, 0)
//       }, Owl.prototype.minimum = function (e) {
//         return e ? 0 : this._clones.length / 2
//       }, Owl.prototype.items = function (e) {
//         return void 0 === e ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
//       }, Owl.prototype.mergers = function (e) {
//         return void 0 === e ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
//       }, Owl.prototype.clones = function (t) {
//         var i = this._clones.length / 2, r = i + this._items.length, n = function (e) {
//           return e % 2 == 0 ? r + e / 2 : i - (e + 1) / 2
//         };
//         return void 0 === t ? e.map(this._clones, function (e, t) {
//           return n(t)
//         }) : e.map(this._clones, function (e, i) {
//           return e === t ? n(i) : null
//         })
//       }, Owl.prototype.speed = function (e) {
//         return void 0 !== e && (this._speed = e), this._speed
//       }, Owl.prototype.coordinates = function (t) {
//         var i, r = 1, n = t - 1;
//         return void 0 === t ? e.map(this._coordinates, e.proxy(function (e, t) {
//           return this.coordinates(t)
//         }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, n = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[n] || 0)) / 2 * r) : i = this._coordinates[n] || 0, i = Math.ceil(i))
//       }, Owl.prototype.duration = function (e, t, i) {
//         return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed)
//       }, Owl.prototype.to = function (e, t) {
//         var i = this.current(), r = null, n = e - this.relative(i), o = (n > 0) - (n < 0), s = this._items.length,
//           a = this.minimum(), l = this.maximum();
//         this.settings.loop ? (!this.settings.rewind && Math.abs(n) > s / 2 && (n += -1 * o * s), (r = (((e = i + n) - a) % s + s) % s + a) !== e && r - n <= l && r - n > 0 && (i = r - n, e = r, this.reset(i))) : e = this.settings.rewind ? (e % (l += 1) + l) % l : Math.max(a, Math.min(l, e)), this.speed(this.duration(i, e, t)), this.current(e), this.isVisible() && this.update()
//       }, Owl.prototype.next = function (e) {
//         e = e || !1, this.to(this.relative(this.current()) + 1, e)
//       }, Owl.prototype.prev = function (e) {
//         e = e || !1, this.to(this.relative(this.current()) - 1, e)
//       }, Owl.prototype.onTransitionEnd = function (e) {
//         if (void 0 !== e && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
//         this.leave("animating"), this.trigger("translated")
//       }, Owl.prototype.viewport = function () {
//         var t;
//         return this.options.responsiveBaseElement !== i ? t = e(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : r.documentElement && r.documentElement.clientWidth ? t = r.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
//       }, Owl.prototype.replace = function (i) {
//         this.$stage.empty(), this._items = [], i && (i = i instanceof t ? i : e(i)), this.settings.nestedItemSelector && (i = i.find("." + this.settings.nestedItemSelector)), i.filter(function () {
//           return 1 === this.nodeType
//         }).each(e.proxy(function (e, t) {
//           t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
//         }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
//       }, Owl.prototype.add = function (i, r) {
//         var n = this.relative(this._current);
//         r = void 0 === r ? this._items.length : this.normalize(r, !0), i = i instanceof t ? i : e(i), this.trigger("add", {
//           content: i,
//           position: r
//         }), i = this.prepare(i), 0 === this._items.length || r === this._items.length ? (0 === this._items.length && this.$stage.append(i), 0 !== this._items.length && this._items[r - 1].after(i), this._items.push(i), this._mergers.push(1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[r].before(i), this._items.splice(r, 0, i), this._mergers.splice(r, 0, 1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
//           content: i,
//           position: r
//         })
//       }, Owl.prototype.remove = function (e) {
//         void 0 !== (e = this.normalize(e, !0)) && (this.trigger("remove", {
//           content: this._items[e],
//           position: e
//         }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
//           content: null,
//           position: e
//         }))
//       }, Owl.prototype.preloadAutoWidthImages = function (t) {
//         t.each(e.proxy(function (t, i) {
//           this.enter("pre-loading"), i = e(i), e(new Image).one("load", e.proxy(function (e) {
//             i.attr("src", e.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
//           }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
//         }, this))
//       }, Owl.prototype.destroy = function () {
//         for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(r).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
//         this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
//       }, Owl.prototype.op = function (e, t, i) {
//         var r = this.settings.rtl;
//         switch (t) {
//           case"<":
//             return r ? e > i : e < i;
//           case">":
//             return r ? e < i : e > i;
//           case">=":
//             return r ? e <= i : e >= i;
//           case"<=":
//             return r ? e >= i : e <= i
//         }
//       }, Owl.prototype.on = function (e, t, i, r) {
//         e.addEventListener ? e.addEventListener(t, i, r) : e.attachEvent && e.attachEvent("on" + t, i)
//       }, Owl.prototype.off = function (e, t, i, r) {
//         e.removeEventListener ? e.removeEventListener(t, i, r) : e.detachEvent && e.detachEvent("on" + t, i)
//       }, Owl.prototype.trigger = function (t, i, r, n, o) {
//         var s = {item: {count: this._items.length, index: this.current()}},
//           a = e.camelCase(e.grep(["on", t, r], function (e) {
//             return e
//           }).join("-").toLowerCase()),
//           l = e.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), e.extend({relatedTarget: this}, s, i));
//         return this._supress[t] || (e.each(this._plugins, function (e, t) {
//           t.onTrigger && t.onTrigger(l)
//         }), this.register({
//           type: Owl.Type.Event,
//           name: t
//         }), this.$element.trigger(l), this.settings && "function" == typeof this.settings[a] && this.settings[a].call(this, l)), l
//       }, Owl.prototype.enter = function (t) {
//         e.each([t].concat(this._states.tags[t] || []), e.proxy(function (e, t) {
//           void 0 === this._states.current[t] && (this._states.current[t] = 0), this._states.current[t]++
//         }, this))
//       }, Owl.prototype.leave = function (t) {
//         e.each([t].concat(this._states.tags[t] || []), e.proxy(function (e, t) {
//           this._states.current[t]--
//         }, this))
//       }, Owl.prototype.register = function (t) {
//         if (t.type === Owl.Type.Event) {
//           if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
//             var i = e.event.special[t.name]._default;
//             e.event.special[t.name]._default = function (e) {
//               return !i || !i.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
//             }, e.event.special[t.name].owl = !0
//           }
//         } else t.type === Owl.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function (i, r) {
//           return e.inArray(i, this._states.tags[t.name]) === r
//         }, this)))
//       }, Owl.prototype.suppress = function (t) {
//         e.each(t, e.proxy(function (e, t) {
//           this._supress[t] = !0
//         }, this))
//       }, Owl.prototype.release = function (t) {
//         e.each(t, e.proxy(function (e, t) {
//           delete this._supress[t]
//         }, this))
//       }, Owl.prototype.pointer = function (e) {
//         var t = {x: null, y: null};
//         return (e = (e = e.originalEvent || e || i.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
//       }, Owl.prototype.isNumeric = function (e) {
//         return !isNaN(parseFloat(e))
//       }, Owl.prototype.difference = function (e, t) {
//         return {x: e.x - t.x, y: e.y - t.y}
//       }, e.fn.owlCarousel = function (t) {
//         var i = Array.prototype.slice.call(arguments, 1);
//         return this.each(function () {
//           var r = e(this), n = r.data("owl.carousel");
//           n || (n = new Owl(this, "object" == typeof t && t), r.data("owl.carousel", n), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, i) {
//             n.register({type: Owl.Type.Event, name: i}), n.$element.on(i + ".owl.carousel.core", e.proxy(function (e) {
//               e.namespace && e.relatedTarget !== this && (this.suppress([i]), n[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
//             }, n))
//           })), "string" == typeof t && "_" !== t.charAt(0) && n[t].apply(n, i)
//         })
//       }, e.fn.owlCarousel.Constructor = Owl
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       var n = function (t) {
//         this._core = t, this._interval = null, this._visible = null, this._handlers = {
//           "initialized.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.settings.autoRefresh && this.watch()
//           }, this)
//         }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
//       };
//       n.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, n.prototype.watch = function () {
//         this._interval || (this._visible = this._core.isVisible(), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
//       }, n.prototype.refresh = function () {
//         this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
//       }, n.prototype.destroy = function () {
//         var e, i;
//         for (e in t.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
//         for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
//       }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       var n = function (t) {
//         this._core = t, this._loaded = [], this._handlers = {
//           "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function (t) {
//             if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
//               var i = this._core.settings, r = i.center && Math.ceil(i.items / 2) || i.items,
//                 n = i.center && -1 * r || 0,
//                 o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n,
//                 s = this._core.clones().length, a = e.proxy(function (e, t) {
//                   this.load(t)
//                 }, this);
//               for (i.lazyLoadEager > 0 && (r += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, r++)); n++ < r;) this.load(s / 2 + this._core.relative(o)), s && e.each(this._core.clones(this._core.relative(o)), a), o++
//             }
//           }, this)
//         }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
//       };
//       n.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, n.prototype.load = function (i) {
//         var r = this._core.$stage.children().eq(i), n = r && r.find(".owl-lazy");
//         !n || e.inArray(r.get(0), this._loaded) > -1 || (n.each(e.proxy(function (i, r) {
//           var n, o = e(r),
//             s = t.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
//           this._core.trigger("load", {
//             element: o,
//             url: s
//           }, "lazy"), o.is("img") ? o.one("load.owl.lazy", e.proxy(function () {
//             o.css("opacity", 1), this._core.trigger("loaded", {element: o, url: s}, "lazy")
//           }, this)).attr("src", s) : o.is("source") ? o.one("load.owl.lazy", e.proxy(function () {
//             this._core.trigger("loaded", {element: o, url: s}, "lazy")
//           }, this)).attr("srcset", s) : ((n = new Image).onload = e.proxy(function () {
//             o.css({"background-image": 'url("' + s + '")', opacity: "1"}), this._core.trigger("loaded", {
//               element: o,
//               url: s
//             }, "lazy")
//           }, this), n.src = s)
//         }, this)), this._loaded.push(r.get(0)))
//       }, n.prototype.destroy = function () {
//         var e, t;
//         for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
//         for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
//       }, e.fn.owlCarousel.Constructor.Plugins.Lazy = n
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       var n = function (i) {
//         this._core = i, this._previousHeight = null, this._handlers = {
//           "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.settings.autoHeight && this.update()
//           }, this), "changed.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
//           }, this), "loaded.owl.lazy": e.proxy(function (e) {
//             e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
//           }, this)
//         }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
//         var r = this;
//         e(t).on("load", function () {
//           r._core.settings.autoHeight && r.update()
//         }), e(t).resize(function () {
//           r._core.settings.autoHeight && (null != r._intervalId && clearTimeout(r._intervalId), r._intervalId = setTimeout(function () {
//             r.update()
//           }, 250))
//         })
//       };
//       n.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, n.prototype.update = function () {
//         var t = this._core._current, i = t + this._core.settings.items, r = this._core.settings.lazyLoad,
//           n = this._core.$stage.children().toArray().slice(t, i), o = [], s = 0;
//         e.each(n, function (t, i) {
//           o.push(e(i).height())
//         }), (s = Math.max.apply(null, o)) <= 1 && r && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
//       }, n.prototype.destroy = function () {
//         var e, t;
//         for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
//         for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
//       }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       var n = function (t) {
//         this._core = t, this._videos = {}, this._playing = null, this._handlers = {
//           "initialized.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
//           }, this), "resize.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
//           }, this), "refreshed.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
//           }, this), "changed.owl.carousel": e.proxy(function (e) {
//             e.namespace && "position" === e.property.name && this._playing && this.stop()
//           }, this), "prepared.owl.carousel": e.proxy(function (t) {
//             if (t.namespace) {
//               var i = e(t.content).find(".owl-video");
//               i.length && (i.css("display", "none"), this.fetch(i, e(t.content)))
//             }
//           }, this)
//         }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function (e) {
//           this.play(e)
//         }, this))
//       };
//       n.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, n.prototype.fetch = function (e, t) {
//         var i = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
//           r = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
//           n = e.attr("data-width") || this._core.settings.videoWidth,
//           o = e.attr("data-height") || this._core.settings.videoHeight, s = e.attr("href");
//         if (!s) throw new Error("Missing video URL.");
//         if ((r = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube"; else if (r[3].indexOf("vimeo") > -1) i = "vimeo"; else {
//           if (!(r[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
//           i = "vzaar"
//         }
//         r = r[6], this._videos[s] = {
//           type: i,
//           id: r,
//           width: n,
//           height: o
//         }, t.attr("data-video", s), this.thumbnail(e, this._videos[s])
//       }, n.prototype.thumbnail = function (t, i) {
//         var r, n, o, s = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
//           a = t.find("img"), l = "src", u = "", c = this._core.settings, h = function (i) {
//             n = '<div class="owl-video-play-icon"></div>', r = c.lazyLoad ? e("<div/>", {
//               class: "owl-video-tn " + u,
//               srcType: i
//             }) : e("<div/>", {
//               class: "owl-video-tn",
//               style: "opacity:1;background-image:url(" + i + ")"
//             }), t.after(r), t.after(n)
//           };
//         if (t.wrap(e("<div/>", {
//           class: "owl-video-wrapper",
//           style: s
//         })), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), a.length) return h(a.attr(l)), a.remove(), !1;
//         "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(o)) : "vimeo" === i.type ? e.ajax({
//           type: "GET",
//           url: "//vimeo.com/api/v2/video/" + i.id + ".json",
//           jsonp: "callback",
//           dataType: "jsonp",
//           success: function (e) {
//             o = e[0].thumbnail_large, h(o)
//           }
//         }) : "vzaar" === i.type && e.ajax({
//           type: "GET",
//           url: "//vzaar.com/api/videos/" + i.id + ".json",
//           jsonp: "callback",
//           dataType: "jsonp",
//           success: function (e) {
//             o = e.framegrab_url, h(o)
//           }
//         })
//       }, n.prototype.stop = function () {
//         this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
//       }, n.prototype.play = function (t) {
//         var i, r = e(t.target).closest("." + this._core.settings.itemClass), n = this._videos[r.attr("data-video")],
//           o = n.width || "100%", s = n.height || this._core.$stage.height();
//         this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), (i = e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), i.attr("width", o), "youtube" === n.type ? i.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? i.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && i.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), e(i).wrap('<div class="owl-video-frame" />').insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
//       }, n.prototype.isInFullScreen = function () {
//         var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
//         return t && e(t).parent().hasClass("owl-video-frame")
//       }, n.prototype.destroy = function () {
//         var e, t;
//         for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
//         for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
//       }, e.fn.owlCarousel.Constructor.Plugins.Video = n
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       var n = function (t) {
//         this.core = t, this.core.options = e.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
//           "change.owl.carousel": e.proxy(function (e) {
//             e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
//           }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function (e) {
//             e.namespace && (this.swapping = "translated" == e.type)
//           }, this), "translate.owl.carousel": e.proxy(function (e) {
//             e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
//           }, this)
//         }, this.core.$element.on(this.handlers)
//       };
//       n.Defaults = {animateOut: !1, animateIn: !1}, n.prototype.swap = function () {
//         if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
//           this.core.speed(0);
//           var t, i = e.proxy(this.clear, this), r = this.core.$stage.children().eq(this.previous),
//             n = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn,
//             s = this.core.settings.animateOut;
//           this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), r.one(e.support.animation.end, i).css({left: t + "px"}).addClass("animated owl-animated-out").addClass(s)), o && n.one(e.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
//         }
//       }, n.prototype.clear = function (t) {
//         e(t.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
//       }, n.prototype.destroy = function () {
//         var e, t;
//         for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
//         for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
//       }, e.fn.owlCarousel.Constructor.Plugins.Animate = n
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       var n = function (t) {
//         this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
//           "changed.owl.carousel": e.proxy(function (e) {
//             e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
//           }, this), "initialized.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.settings.autoplay && this.play()
//           }, this), "play.owl.autoplay": e.proxy(function (e, t, i) {
//             e.namespace && this.play(t, i)
//           }, this), "stop.owl.autoplay": e.proxy(function (e) {
//             e.namespace && this.stop()
//           }, this), "mouseover.owl.autoplay": e.proxy(function () {
//             this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
//           }, this), "mouseleave.owl.autoplay": e.proxy(function () {
//             this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
//           }, this), "touchstart.owl.core": e.proxy(function () {
//             this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
//           }, this), "touchend.owl.core": e.proxy(function () {
//             this._core.settings.autoplayHoverPause && this.play()
//           }, this)
//         }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, n.Defaults, this._core.options)
//       };
//       n.Defaults = {
//         autoplay: !1,
//         autoplayTimeout: 5e3,
//         autoplayHoverPause: !1,
//         autoplaySpeed: !1
//       }, n.prototype._next = function (r) {
//         this._call = t.setTimeout(e.proxy(this._next, this, r), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
//       }, n.prototype.read = function () {
//         return (new Date).getTime() - this._time
//       }, n.prototype.play = function (i, r) {
//         var n;
//         this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call), this._time += this.read() % i - n, this._timeout = i, this._call = t.setTimeout(e.proxy(this._next, this, r), i - n)
//       }, n.prototype.stop = function () {
//         this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating"))
//       }, n.prototype.pause = function () {
//         this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call))
//       }, n.prototype.destroy = function () {
//         var e, t;
//         for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
//         for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
//       }, e.fn.owlCarousel.Constructor.Plugins.autoplay = n
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       "use strict";
//       var n = function (t) {
//         this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
//           next: this._core.next,
//           prev: this._core.prev,
//           to: this._core.to
//         }, this._handlers = {
//           "prepared.owl.carousel": e.proxy(function (t) {
//             t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
//           }, this), "added.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
//           }, this), "remove.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
//           }, this), "changed.owl.carousel": e.proxy(function (e) {
//             e.namespace && "position" == e.property.name && this.draw()
//           }, this), "initialized.owl.carousel": e.proxy(function (e) {
//             e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
//           }, this), "refreshed.owl.carousel": e.proxy(function (e) {
//             e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
//           }, this)
//         }, this._core.options = e.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
//       };
//       n.Defaults = {
//         nav: !1,
//         navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
//         navSpeed: !1,
//         navElement: 'button type="button" role="presentation"',
//         navContainer: !1,
//         navContainerClass: "owl-nav",
//         navClass: ["owl-prev", "owl-next"],
//         slideBy: 1,
//         dotClass: "owl-dot",
//         dotsClass: "owl-dots",
//         dots: !0,
//         dotsEach: !1,
//         dotsData: !1,
//         dotsSpeed: !1,
//         dotsContainer: !1
//       }, n.prototype.initialize = function () {
//         var t, i = this._core.settings;
//         for (t in this._controls.$relative = (i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function (e) {
//           this.prev(i.navSpeed)
//         }, this)), this._controls.$next = e("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function (e) {
//           this.next(i.navSpeed)
//         }, this)), i.dotsData || (this._templates = [e('<button role="button">').addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? e(i.dotsContainer) : e("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", e.proxy(function (t) {
//           var r = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
//           t.preventDefault(), this.to(r, i.dotsSpeed)
//         }, this)), this._overrides) this._core[t] = e.proxy(this[t], this)
//       }, n.prototype.destroy = function () {
//         var e, t, i, r, n;
//         for (e in n = this._core.settings, this._handlers) this.$element.off(e, this._handlers[e]);
//         for (t in this._controls) "$relative" === t && n.navContainer ? this._controls[t].html("") : this._controls[t].remove();
//         for (r in this.overides) this._core[r] = this._overrides[r];
//         for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
//       }, n.prototype.update = function () {
//         var e, t, i = this._core.clones().length / 2, r = i + this._core.items().length, n = this._core.maximum(!0),
//           o = this._core.settings, s = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
//         if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], e = i, t = 0, 0; e < r; e++) {
//           if (t >= s || 0 === t) {
//             if (this._pages.push({start: Math.min(n, e - i), end: e - i + s - 1}), Math.min(n, e - i) === n) break;
//             t = 0, 0
//           }
//           t += this._core.mergers(this._core.relative(e))
//         }
//       }, n.prototype.draw = function () {
//         var t, i = this._core.settings, r = this._core.items().length <= i.items,
//           n = this._core.relative(this._core.current()), o = i.loop || i.rewind;
//         this._controls.$relative.toggleClass("disabled", !i.nav || r), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || r), i.dots && (t = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
//       }, n.prototype.onTrigger = function (t) {
//         var i = this._core.settings;
//         t.page = {
//           index: e.inArray(this.current(), this._pages),
//           count: this._pages.length,
//           size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
//         }
//       }, n.prototype.current = function () {
//         var t = this._core.relative(this._core.current());
//         return e.grep(this._pages, e.proxy(function (e, i) {
//           return e.start <= t && e.end >= t
//         }, this)).pop()
//       }, n.prototype.getPosition = function (t) {
//         var i, r, n = this._core.settings;
//         return "page" == n.slideBy ? (i = e.inArray(this.current(), this._pages), r = this._pages.length, t ? ++i : --i, i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()), r = this._core.items().length, t ? i += n.slideBy : i -= n.slideBy), i
//       }, n.prototype.next = function (t) {
//         e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
//       }, n.prototype.prev = function (t) {
//         e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
//       }, n.prototype.to = function (t, i, r) {
//         var n;
//         !r && this._pages.length ? (n = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, i)) : e.proxy(this._overrides.to, this._core)(t, i)
//       }, e.fn.owlCarousel.Constructor.Plugins.Navigation = n
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       "use strict";
//       var n = function (i) {
//         this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
//           "initialized.owl.carousel": e.proxy(function (i) {
//             i.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
//           }, this), "prepared.owl.carousel": e.proxy(function (t) {
//             if (t.namespace) {
//               var i = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
//               if (!i) return;
//               this._hashes[i] = t.content
//             }
//           }, this), "changed.owl.carousel": e.proxy(function (i) {
//             if (i.namespace && "position" === i.property.name) {
//               var r = this._core.items(this._core.relative(this._core.current())),
//                 n = e.map(this._hashes, function (e, t) {
//                   return e === r ? t : null
//                 }).join();
//               if (!n || t.location.hash.slice(1) === n) return;
//               t.location.hash = n
//             }
//           }, this)
//         }, this._core.options = e.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function (e) {
//           var i = t.location.hash.substring(1), r = this._core.$stage.children(),
//             n = this._hashes[i] && r.index(this._hashes[i]);
//           void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
//         }, this))
//       };
//       n.Defaults = {URLhashListener: !1}, n.prototype.destroy = function () {
//         var i, r;
//         for (i in e(t).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
//         for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
//       }, e.fn.owlCarousel.Constructor.Plugins.Hash = n
//     }(window.Zepto || e, window, document), function (e, t, i, r) {
//       var n = e("<support>").get(0).style, o = "Webkit Moz O ms".split(" "), s = {
//         transition: {
//           end: {
//             WebkitTransition: "webkitTransitionEnd",
//             MozTransition: "transitionend",
//             OTransition: "oTransitionEnd",
//             transition: "transitionend"
//           }
//         },
//         animation: {
//           end: {
//             WebkitAnimation: "webkitAnimationEnd",
//             MozAnimation: "animationend",
//             OAnimation: "oAnimationEnd",
//             animation: "animationend"
//           }
//         }
//       }, a = function () {
//         return !!test("transform")
//       }, l = function () {
//         return !!test("perspective")
//       }, u = function () {
//         return !!test("animation")
//       };
//
//       function test(t, i) {
//         var s = !1, a = t.charAt(0).toUpperCase() + t.slice(1);
//         return e.each((t + " " + o.join(a + " ") + a).split(" "), function (e, t) {
//           if (n[t] !== r) return s = !i || t, !1
//         }), s
//       }
//
//       function prefixed(e) {
//         return test(e, !0)
//       }
//
//       (function () {
//         return !!test("transition")
//       })() && (e.support.transition = new String(prefixed("transition")), e.support.transition.end = s.transition.end[e.support.transition]), u() && (e.support.animation = new String(prefixed("animation")), e.support.animation.end = s.animation.end[e.support.animation]), a() && (e.support.transform = new String(prefixed("transform")), e.support.transform3d = l())
//     }(window.Zepto || e, window, document)
//   }).call(this, i(4), i(4))
// }
//
// ,
//
// function (e, t, i) {
//   (function (e, t) {
//     var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//       return typeof e
//     } : function (e) {
//       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//     };
//     !function (n) {
//       "object" === r(e) && e.exports ? e.exports = function (e, t) {
//         return void 0 === t && (t = "undefined" != typeof window ? i(4) : i(4)(e)), n(t), t
//       } : n(t)
//     }(function (e) {
//       var t = e(window), i = e(document), n = "iziModal",
//         o = {CLOSING: "closing", CLOSED: "closed", OPENING: "opening", OPENED: "opened", DESTROYED: "destroyed"};
//
//       function isIE(e) {
//         return 9 === e ? -1 !== navigator.appVersion.indexOf("MSIE 9.") : (userAgent = navigator.userAgent, userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1)
//       }
//
//       function clearValue(e) {
//         return parseInt(String(e).split(/%|px|em|cm|vh|vw/)[0])
//       }
//
//       var s = function whichAnimationEvent() {
//         var e, t = document.createElement("fakeelement"), i = {
//           animation: "animationend",
//           OAnimation: "oAnimationEnd",
//           MozAnimation: "animationend",
//           WebkitAnimation: "webkitAnimationEnd"
//         };
//         for (e in i) if (void 0 !== t.style[e]) return i[e]
//       }(), a = !!/Mobi/.test(navigator.userAgent);
//       window.$iziModal = {}, window.$iziModal.autoOpen = 0, window.$iziModal.history = !1;
//       var l = function iziModal(e, t) {
//         this.init(e, t)
//       };
//       return l.prototype = {
//         constructor: l, init: function init(t, i) {
//           var s = this;
//           this.$element = e(t), void 0 !== this.$element[0].id && "" !== this.$element[0].id ? this.id = this.$element[0].id : (this.id = n + Math.floor(1e7 * Math.random() + 1), this.$element.attr("id", this.id)), this.classes = void 0 !== this.$element.attr("class") ? this.$element.attr("class") : "", this.content = this.$element.html(), this.state = o.CLOSED, this.options = i, this.width = 0, this.timer = null, this.timerTimeout = null, this.progressBar = null, this.isPaused = !1, this.isFullscreen = !1, this.headerHeight = 0, this.modalHeight = 0, this.$overlay = e('<div class="' + n + '-overlay" style="background-color:' + i.overlayColor + '"></div>'), this.$navigate = e('<div class="' + n + '-navigate"><div class="' + n + '-navigate-caption">Use</div><button class="' + n + '-navigate-prev"></button><button class="' + n + '-navigate-next"></button></div>'), this.group = {
//             name: this.$element.attr("data-" + n + "-group"),
//             index: null,
//             ids: []
//           }, this.$element.attr("aria-hidden", "true"), this.$element.attr("aria-labelledby", this.id), this.$element.attr("role", "dialog"), this.$element.hasClass("iziModal") || this.$element.addClass("iziModal"), void 0 === this.group.name && "" !== i.group && (this.group.name = i.group, this.$element.attr("data-" + n + "-group", i.group)), !0 === this.options.loop && this.$element.attr("data-" + n + "-loop", !0), e.each(this.options, function (e, t) {
//             var o = s.$element.attr("data-" + n + "-" + e);
//             try {
//               "undefined" !== (void 0 === o ? "undefined" : r(o)) && (i[e] = "" === o || "true" == o || "false" != o && ("function" == typeof t ? new Function(o) : o))
//             } catch (e) {
//             }
//           }), !1 !== i.appendTo && this.$element.appendTo(i.appendTo), !0 === i.iframe ? (this.$element.html('<div class="' + n + '-wrap"><div class="' + n + '-content"><iframe class="' + n + '-iframe"></iframe>' + this.content + "</div></div>"), null !== i.iframeHeight && this.$element.find("." + n + "-iframe").css("height", i.iframeHeight)) : this.$element.html('<div class="' + n + '-wrap"><div class="' + n + '-content">' + this.content + "</div></div>"), null !== this.options.background && this.$element.css("background", this.options.background), this.$wrap = this.$element.find("." + n + "-wrap"), null === i.zindex || isNaN(parseInt(i.zindex)) || (this.$element.css("z-index", i.zindex), this.$navigate.css("z-index", i.zindex - 1), this.$overlay.css("z-index", i.zindex - 2)), "" !== i.radius && this.$element.css("border-radius", i.radius), "" !== i.padding && this.$element.find("." + n + "-content").css("padding", i.padding), "" !== i.theme && ("light" === i.theme ? this.$element.addClass(n + "-light") : this.$element.addClass(i.theme)), !0 === i.rtl && this.$element.addClass(n + "-rtl"), !0 === i.openFullscreen && (this.isFullscreen = !0, this.$element.addClass("isFullscreen")), this.createHeader(), this.recalcWidth(), this.recalcVerticalPos(), !s.options.afterRender || "function" != typeof s.options.afterRender && "object" !== r(s.options.afterRender) || s.options.afterRender(s)
//         }, createHeader: function createHeader() {
//           this.$header = e('<div class="' + n + '-header"><h2 class="' + n + '-header-title">' + this.options.title + '</h2><p class="' + n + '-header-subtitle">' + this.options.subtitle + '</p><div class="' + n + '-header-buttons"></div></div>'), !0 === this.options.closeButton && this.$header.find("." + n + "-header-buttons").append('<a href="javascript:void(0)" class="' + n + "-button " + n + '-button-close" data-' + n + "-close></a>"), !0 === this.options.fullscreen && this.$header.find("." + n + "-header-buttons").append('<a href="javascript:void(0)" class="' + n + "-button " + n + '-button-fullscreen" data-' + n + "-fullscreen></a>"), !0 === this.options.timeoutProgressbar && this.$header.prepend('<div class="' + n + '-progressbar"><div style="background-color:' + this.options.timeoutProgressbarColor + '"></div></div>'), "" === this.options.subtitle && this.$header.addClass(n + "-noSubtitle"), "" !== this.options.title && (null !== this.options.headerColor && (!0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + this.options.headerColor), this.$header.css("background", this.options.headerColor)), null === this.options.icon && null === this.options.iconText || (this.$header.prepend('<i class="' + n + '-header-icon"></i>'), null !== this.options.icon && this.$header.find("." + n + "-header-icon").addClass(this.options.icon).css("color", this.options.iconColor), null !== this.options.iconText && this.$header.find("." + n + "-header-icon").html(this.options.iconText)), this.$element.css("overflow", "hidden").prepend(this.$header))
//         }, setGroup: function setGroup(t) {
//           var i = this, r = this.group.name || t;
//           if (this.group.ids = [], void 0 !== t && t !== this.group.name && (r = t, this.group.name = r, this.$element.attr("data-" + n + "-group", r)), void 0 !== r && "" !== r) {
//             var o = 0;
//             e.each(e("." + n + "[data-" + n + "-group=" + r + "]"), function (t, r) {
//               i.group.ids.push(e(this)[0].id), i.id == e(this)[0].id && (i.group.index = o), o++
//             })
//           }
//         }, toggle: function toggle() {
//           this.state == o.OPENED && this.close(), this.state == o.CLOSED && this.open()
//         }, startProgress: function startProgress(e) {
//           var t = this;
//           this.isPaused = !1, clearTimeout(this.timerTimeout), !0 === this.options.timeoutProgressbar ? (this.progressBar = {
//             hideEta: null,
//             maxHideTime: null,
//             currentTime: (new Date).getTime(),
//             el: this.$element.find("." + n + "-progressbar > div"),
//             updateProgress: function updateProgress() {
//               if (!t.isPaused) {
//                 t.progressBar.currentTime = t.progressBar.currentTime + 10;
//                 var e = (t.progressBar.hideEta - t.progressBar.currentTime) / t.progressBar.maxHideTime * 100;
//                 t.progressBar.el.width(e + "%"), e < 0 && t.close()
//               }
//             }
//           }, e > 0 && (this.progressBar.maxHideTime = parseFloat(e), this.progressBar.hideEta = (new Date).getTime() + this.progressBar.maxHideTime, this.timerTimeout = setInterval(this.progressBar.updateProgress, 10))) : this.timerTimeout = setTimeout(function () {
//             t.close()
//           }, t.options.timeout)
//         }, pauseProgress: function pauseProgress() {
//           this.isPaused = !0
//         }, resumeProgress: function resumeProgress() {
//           this.isPaused = !1
//         }, resetProgress: function resetProgress(e) {
//           clearTimeout(this.timerTimeout), this.progressBar = {}, this.$element.find("." + n + "-progressbar > div").width("100%")
//         }, open: function open(t) {
//           var l = this;
//           try {
//             void 0 !== t && !1 === t.preventClose && e.each(e("." + n), function (t, i) {
//               if (void 0 !== e(i).data().iziModal) {
//                 var r = e(i).iziModal("getState");
//                 "opened" != r && "opening" != r || e(i).iziModal("close")
//               }
//             })
//           } catch (e) {
//           }
//
//           function opened() {
//             l.state = o.OPENED, l.$element.trigger(o.OPENED), !l.options.onOpened || "function" != typeof l.options.onOpened && "object" !== r(l.options.onOpened) || l.options.onOpened(l)
//           }
//
//           if (function urlHash() {
//             if (l.options.history) {
//               var t = document.title;
//               document.title = t + " - " + l.options.title, function changeHashWithoutScrolling(t) {
//                 var i = t.replace(/^.*#/, ""), r = e(t);
//                 r.attr("id", i + "-tmp"), window.location.hash = t, r.attr("id", i)
//               }("#" + l.id), document.title = t, window.$iziModal.history = !0
//             } else window.$iziModal.history = !1
//           }(), this.state == o.CLOSED) {
//             if (function bindEvents() {
//               l.$element.off("click", "[data-" + n + "-close]").on("click", "[data-" + n + "-close]", function (t) {
//                 t.preventDefault();
//                 var i = e(t.currentTarget).attr("data-" + n + "-transitionOut");
//                 void 0 !== i ? l.close({transition: i}) : l.close()
//               }), l.$element.off("click", "[data-" + n + "-fullscreen]").on("click", "[data-" + n + "-fullscreen]", function (e) {
//                 e.preventDefault(), !0 === l.isFullscreen ? (l.isFullscreen = !1, l.$element.removeClass("isFullscreen")) : (l.isFullscreen = !0, l.$element.addClass("isFullscreen")), l.options.onFullscreen && "function" == typeof l.options.onFullscreen && l.options.onFullscreen(l), l.$element.trigger("fullscreen", l)
//               }), l.$navigate.off("click", "." + n + "-navigate-next").on("click", "." + n + "-navigate-next", function (e) {
//                 l.next(e)
//               }), l.$element.off("click", "[data-" + n + "-next]").on("click", "[data-" + n + "-next]", function (e) {
//                 l.next(e)
//               }), l.$navigate.off("click", "." + n + "-navigate-prev").on("click", "." + n + "-navigate-prev", function (e) {
//                 l.prev(e)
//               }), l.$element.off("click", "[data-" + n + "-prev]").on("click", "[data-" + n + "-prev]", function (e) {
//                 l.prev(e)
//               })
//             }(), this.setGroup(), this.state = o.OPENING, this.$element.trigger(o.OPENING), this.$element.attr("aria-hidden", "false"), !0 === this.options.timeoutProgressbar && this.$element.find("." + n + "-progressbar > div").width("100%"), !0 === this.options.iframe) {
//               this.$element.find("." + n + "-content").addClass(n + "-content-loader"), this.$element.find("." + n + "-iframe").on("load", function () {
//                 e(this).parent().removeClass(n + "-content-loader")
//               });
//               var u = null;
//               try {
//                 u = "" !== e(t.currentTarget).attr("href") ? e(t.currentTarget).attr("href") : null
//               } catch (e) {
//               }
//               if (null === this.options.iframeURL || null !== u && void 0 !== u || (u = this.options.iframeURL), null === u || void 0 === u) throw new Error("Failed to find iframe URL");
//               this.$element.find("." + n + "-iframe").attr("src", u)
//             }
//             (this.options.bodyOverflow || a) && (e("html").addClass(n + "-isOverflow"), a && e("body").css("overflow", "hidden")), this.options.onOpening && "function" == typeof this.options.onOpening && this.options.onOpening(this), function open() {
//               if (l.group.ids.length > 1) {
//                 l.$navigate.appendTo("body"), l.$navigate.addClass("fadeIn"), !0 === l.options.navigateCaption && l.$navigate.find("." + n + "-navigate-caption").show();
//                 var i = l.$element.outerWidth();
//                 !1 !== l.options.navigateArrows ? "closeScreenEdge" === l.options.navigateArrows ? (l.$navigate.find("." + n + "-navigate-prev").css("left", 0).show(), l.$navigate.find("." + n + "-navigate-next").css("right", 0).show()) : (l.$navigate.find("." + n + "-navigate-prev").css("margin-left", -(i / 2 + 84)).show(), l.$navigate.find("." + n + "-navigate-next").css("margin-right", -(i / 2 + 84)).show()) : (l.$navigate.find("." + n + "-navigate-prev").hide(), l.$navigate.find("." + n + "-navigate-next").hide()), 0 === l.group.index && 0 === e("." + n + "[data-" + n + '-group="' + l.group.name + '"][data-' + n + "-loop]").length && !1 === l.options.loop && l.$navigate.find("." + n + "-navigate-prev").hide(), l.group.index + 1 === l.group.ids.length && 0 === e("." + n + "[data-" + n + '-group="' + l.group.name + '"][data-' + n + "-loop]").length && !1 === l.options.loop && l.$navigate.find("." + n + "-navigate-next").hide()
//               }
//               !0 === l.options.overlay && (!1 === l.options.appendToOverlay ? l.$overlay.appendTo("body") : l.$overlay.appendTo(l.options.appendToOverlay)), l.options.transitionInOverlay && l.$overlay.addClass(l.options.transitionInOverlay);
//               var o = l.options.transitionIn;
//               "object" == (void 0 === t ? "undefined" : r(t)) && (void 0 === t.transition && void 0 === t.transitionIn || (o = t.transition || t.transitionIn), void 0 !== t.zindex && l.setZindex(t.zindex)), "" !== o && void 0 !== s ? (l.$element.addClass("transitionIn " + o).show(), l.$wrap.one(s, function () {
//                 l.$element.removeClass(o + " transitionIn"), l.$overlay.removeClass(l.options.transitionInOverlay), l.$navigate.removeClass("fadeIn"), opened()
//               })) : (l.$element.show(), opened()), !0 !== l.options.pauseOnHover || !0 !== l.options.pauseOnHover || !1 === l.options.timeout || isNaN(parseInt(l.options.timeout)) || !1 === l.options.timeout || 0 === l.options.timeout || (l.$element.off("mouseenter").on("mouseenter", function (e) {
//                 e.preventDefault(), l.isPaused = !0
//               }), l.$element.off("mouseleave").on("mouseleave", function (e) {
//                 e.preventDefault(), l.isPaused = !1
//               }))
//             }(), !1 === this.options.timeout || isNaN(parseInt(this.options.timeout)) || !1 === this.options.timeout || 0 === this.options.timeout || l.startProgress(this.options.timeout), this.options.overlayClose && !this.$element.hasClass(this.options.transitionOut) && this.$overlay.click(function () {
//               l.close()
//             }), this.options.focusInput && this.$element.find(":input:not(button):enabled:visible:first").focus(), function updateTimer() {
//               l.recalcLayout(), l.timer = setTimeout(updateTimer, 300)
//             }(), i.on("keydown." + n, function (e) {
//               l.options.closeOnEscape && 27 === e.keyCode && l.close()
//             })
//           }
//         }, close: function close(t) {
//           var l = this;
//
//           function closed() {
//             l.state = o.CLOSED, l.$element.trigger(o.CLOSED), !0 === l.options.iframe && l.$element.find("." + n + "-iframe").attr("src", ""), (l.options.bodyOverflow || a) && (e("html").removeClass(n + "-isOverflow"), a && e("body").css("overflow", "auto")), l.options.onClosed && "function" == typeof l.options.onClosed && l.options.onClosed(l), !0 === l.options.restoreDefaultContent && l.$element.find("." + n + "-content").html(l.content), 0 === e("." + n + ":visible").length && e("html").removeClass(n + "-isAttached")
//           }
//
//           if (this.state == o.OPENED || this.state == o.OPENING) {
//             i.off("keydown." + n), this.state = o.CLOSING, this.$element.trigger(o.CLOSING), this.$element.attr("aria-hidden", "true"), clearTimeout(this.timer), clearTimeout(this.timerTimeout), l.options.onClosing && "function" == typeof l.options.onClosing && l.options.onClosing(this);
//             var u = this.options.transitionOut;
//             "object" == (void 0 === t ? "undefined" : r(t)) && (void 0 === t.transition && void 0 === t.transitionOut || (u = t.transition || t.transitionOut)), !1 === u || "" === u || void 0 === s ? (this.$element.hide(), this.$overlay.remove(), this.$navigate.remove(), closed()) : (this.$element.attr("class", [this.classes, n, u, "light" == this.options.theme ? n + "-light" : this.options.theme, !0 === this.isFullscreen ? "isFullscreen" : "", this.options.rtl ? n + "-rtl" : ""].join(" ")), this.$overlay.attr("class", n + "-overlay " + this.options.transitionOutOverlay), !1 === l.options.navigateArrows || a || this.$navigate.attr("class", n + "-navigate fadeOut"), this.$element.one(s, function () {
//               l.$element.hasClass(u) && l.$element.removeClass(u + " transitionOut").hide(), l.$overlay.removeClass(l.options.transitionOutOverlay).remove(), l.$navigate.removeClass("fadeOut").remove(), closed()
//             }))
//           }
//         }, next: function next(t) {
//           var i = this, o = "fadeInRight", s = "fadeOutLeft", a = e("." + n + ":visible"), l = {};
//           l.out = this, void 0 !== t && "object" !== (void 0 === t ? "undefined" : r(t)) ? (t.preventDefault(), a = e(t.currentTarget), o = a.attr("data-" + n + "-transitionIn"), s = a.attr("data-" + n + "-transitionOut")) : void 0 !== t && (void 0 !== t.transitionIn && (o = t.transitionIn), void 0 !== t.transitionOut && (s = t.transitionOut)), this.close({transition: s}), setTimeout(function () {
//             for (var t = e("." + n + "[data-" + n + '-group="' + i.group.name + '"][data-' + n + "-loop]").length, r = i.group.index + 1; r <= i.group.ids.length; r++) {
//               try {
//                 l.in = e("#" + i.group.ids[r]).data().iziModal
//               } catch (e) {
//               }
//               if (void 0 !== l.in) {
//                 e("#" + i.group.ids[r]).iziModal("open", {transition: o});
//                 break
//               }
//               if (r == i.group.ids.length && t > 0 || !0 === i.options.loop) for (var s = 0; s <= i.group.ids.length; s++) if (l.in = e("#" + i.group.ids[s]).data().iziModal, void 0 !== l.in) {
//                 e("#" + i.group.ids[s]).iziModal("open", {transition: o});
//                 break
//               }
//             }
//           }, 200), e(document).trigger(n + "-group-change", l)
//         }, prev: function prev(t) {
//           var i = this, o = "fadeInLeft", s = "fadeOutRight", a = e("." + n + ":visible"), l = {};
//           l.out = this, void 0 !== t && "object" !== (void 0 === t ? "undefined" : r(t)) ? (t.preventDefault(), a = e(t.currentTarget), o = a.attr("data-" + n + "-transitionIn"), s = a.attr("data-" + n + "-transitionOut")) : void 0 !== t && (void 0 !== t.transitionIn && (o = t.transitionIn), void 0 !== t.transitionOut && (s = t.transitionOut)), this.close({transition: s}), setTimeout(function () {
//             for (var t = e("." + n + "[data-" + n + '-group="' + i.group.name + '"][data-' + n + "-loop]").length, r = i.group.index; r >= 0; r--) {
//               try {
//                 l.in = e("#" + i.group.ids[r - 1]).data().iziModal
//               } catch (e) {
//               }
//               if (void 0 !== l.in) {
//                 e("#" + i.group.ids[r - 1]).iziModal("open", {transition: o});
//                 break
//               }
//               if (0 === r && t > 0 || !0 === i.options.loop) for (var s = i.group.ids.length - 1; s >= 0; s--) if (l.in = e("#" + i.group.ids[s]).data().iziModal, void 0 !== l.in) {
//                 e("#" + i.group.ids[s]).iziModal("open", {transition: o});
//                 break
//               }
//             }
//           }, 200), e(document).trigger(n + "-group-change", l)
//         }, destroy: function destroy() {
//           var t = e.Event("destroy");
//           this.$element.trigger(t), i.off("keydown." + n), clearTimeout(this.timer), clearTimeout(this.timerTimeout), !0 === this.options.iframe && this.$element.find("." + n + "-iframe").remove(), this.$element.html(this.$element.find("." + n + "-content").html()), this.$element.off("click", "[data-" + n + "-close]"), this.$element.off("click", "[data-" + n + "-fullscreen]"), this.$element.off("." + n).removeData(n).attr("style", ""), this.$overlay.remove(), this.$navigate.remove(), this.$element.trigger(o.DESTROYED), this.$element = null
//         }, getState: function getState() {
//           return this.state
//         }, getGroup: function getGroup() {
//           return this.group
//         }, setWidth: function setWidth(e) {
//           this.options.width = e, this.recalcWidth();
//           var t = this.$element.outerWidth();
//           !0 !== this.options.navigateArrows && "closeToModal" != this.options.navigateArrows || (this.$navigate.find("." + n + "-navigate-prev").css("margin-left", -(t / 2 + 84)).show(), this.$navigate.find("." + n + "-navigate-next").css("margin-right", -(t / 2 + 84)).show())
//         }, setTop: function setTop(e) {
//           this.options.top = e, this.recalcVerticalPos(!1)
//         }, setBottom: function setBottom(e) {
//           this.options.bottom = e, this.recalcVerticalPos(!1)
//         }, setHeader: function setHeader(e) {
//           e ? this.$element.find("." + n + "-header").show() : (this.headerHeight = 0, this.$element.find("." + n + "-header").hide())
//         }, setTitle: function setTitle(e) {
//           this.options.title = e, 0 === this.headerHeight && this.createHeader(), 0 === this.$header.find("." + n + "-header-title").length && this.$header.append('<h2 class="' + n + '-header-title"></h2>'), this.$header.find("." + n + "-header-title").html(e)
//         }, setSubtitle: function setSubtitle(e) {
//           "" === e ? (this.$header.find("." + n + "-header-subtitle").remove(), this.$header.addClass(n + "-noSubtitle")) : (0 === this.$header.find("." + n + "-header-subtitle").length && this.$header.append('<p class="' + n + '-header-subtitle"></p>'), this.$header.removeClass(n + "-noSubtitle")), this.$header.find("." + n + "-header-subtitle").html(e), this.options.subtitle = e
//         }, setIcon: function setIcon(e) {
//           0 === this.$header.find("." + n + "-header-icon").length && this.$header.prepend('<i class="' + n + '-header-icon"></i>'), this.$header.find("." + n + "-header-icon").attr("class", n + "-header-icon " + e), this.options.icon = e
//         }, setIconText: function setIconText(e) {
//           this.$header.find("." + n + "-header-icon").html(e), this.options.iconText = e
//         }, setHeaderColor: function setHeaderColor(e) {
//           !0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + e), this.$header.css("background", e), this.options.headerColor = e
//         }, setBackground: function setBackground(e) {
//           !1 === e ? (this.options.background = null, this.$element.css("background", "")) : (this.$element.css("background", e), this.options.background = e)
//         }, setZindex: function setZindex(e) {
//           isNaN(parseInt(this.options.zindex)) || (this.options.zindex = e, this.$element.css("z-index", e), this.$navigate.css("z-index", e - 1), this.$overlay.css("z-index", e - 2))
//         }, setFullscreen: function setFullscreen(e) {
//           e ? (this.isFullscreen = !0, this.$element.addClass("isFullscreen")) : (this.isFullscreen = !1, this.$element.removeClass("isFullscreen"))
//         }, setContent: function setContent(e) {
//           "object" == (void 0 === e ? "undefined" : r(e)) && (!0 === (e.default || !1) && (this.content = e.content), e = e.content);
//           !1 === this.options.iframe && this.$element.find("." + n + "-content").html(e)
//         }, setTransitionIn: function setTransitionIn(e) {
//           this.options.transitionIn = e
//         }, setTransitionOut: function setTransitionOut(e) {
//           this.options.transitionOut = e
//         }, setTimeout: function setTimeout(e) {
//           this.options.timeout = e
//         }, resetContent: function resetContent() {
//           this.$element.find("." + n + "-content").html(this.content)
//         }, startLoading: function startLoading() {
//           this.$element.find("." + n + "-loader").length || this.$element.append('<div class="' + n + '-loader fadeIn"></div>'), this.$element.find("." + n + "-loader").css({
//             top: this.headerHeight,
//             borderRadius: this.options.radius
//           })
//         }, stopLoading: function stopLoading() {
//           var e = this.$element.find("." + n + "-loader");
//           e.length || (this.$element.prepend('<div class="' + n + '-loader fadeIn"></div>'), e = this.$element.find("." + n + "-loader").css("border-radius", this.options.radius)), e.removeClass("fadeIn").addClass("fadeOut"), setTimeout(function () {
//             e.remove()
//           }, 600)
//         }, recalcWidth: function recalcWidth() {
//           if (this.$element.css("max-width", this.options.width), isIE()) {
//             var e = this.options.width;
//             e.toString().split("%").length > 1 && (e = this.$element.outerWidth()), this.$element.css({
//               left: "50%",
//               marginLeft: -e / 2
//             })
//           }
//         }, recalcVerticalPos: function recalcVerticalPos(e) {
//           null !== this.options.top && !1 !== this.options.top ? (this.$element.css("margin-top", this.options.top), 0 === this.options.top && this.$element.css({
//             borderTopRightRadius: 0,
//             borderTopLeftRadius: 0
//           })) : !1 === e && this.$element.css({
//             marginTop: "",
//             borderRadius: this.options.radius
//           }), null !== this.options.bottom && !1 !== this.options.bottom ? (this.$element.css("margin-bottom", this.options.bottom), 0 === this.options.bottom && this.$element.css({
//             borderBottomRightRadius: 0,
//             borderBottomLeftRadius: 0
//           })) : !1 === e && this.$element.css({marginBottom: "", borderRadius: this.options.radius})
//         }, recalcLayout: function recalcLayout() {
//           var i = this, r = t.height(), s = this.$element.outerHeight(), a = this.$element.outerWidth(),
//             l = this.$element.find("." + n + "-content")[0].scrollHeight, u = l + this.headerHeight,
//             c = this.$element.innerHeight() - this.headerHeight,
//             h = (parseInt(-(this.$element.innerHeight() + 1) / 2), this.$wrap.scrollTop()), d = 0;
//           isIE() && (a >= t.width() || !0 === this.isFullscreen ? this.$element.css({
//             left: "0",
//             marginLeft: ""
//           }) : this.$element.css({
//             left: "50%",
//             marginLeft: -a / 2
//           })), !0 === this.options.borderBottom && "" !== this.options.title && (d = 3), this.$element.find("." + n + "-header").length && this.$element.find("." + n + "-header").is(":visible") ? (this.headerHeight = parseInt(this.$element.find("." + n + "-header").innerHeight()), this.$element.css("overflow", "hidden")) : (this.headerHeight = 0, this.$element.css("overflow", "")), this.$element.find("." + n + "-loader").length && this.$element.find("." + n + "-loader").css("top", this.headerHeight), s !== this.modalHeight && (this.modalHeight = s, this.options.onResize && "function" == typeof this.options.onResize && this.options.onResize(this)), this.state != o.OPENED && this.state != o.OPENING || (!0 === this.options.iframe && (r < this.options.iframeHeight + this.headerHeight + d || !0 === this.isFullscreen ? this.$element.find("." + n + "-iframe").css("height", r - (this.headerHeight + d)) : this.$element.find("." + n + "-iframe").css("height", this.options.iframeHeight)), s == r ? this.$element.addClass("isAttached") : this.$element.removeClass("isAttached"), !1 === this.isFullscreen && this.$element.width() >= t.width() ? this.$element.find("." + n + "-button-fullscreen").hide() : this.$element.find("." + n + "-button-fullscreen").show(), this.recalcButtons(), !1 === this.isFullscreen && (r = r - (clearValue(this.options.top) || 0) - (clearValue(this.options.bottom) || 0)), u > r ? (this.options.top > 0 && null === this.options.bottom && l < t.height() && this.$element.addClass("isAttachedBottom"), this.options.bottom > 0 && null === this.options.top && l < t.height() && this.$element.addClass("isAttachedTop"), 1 === e("." + n + ":visible").length && e("html").addClass(n + "-isAttached"), this.$element.css("height", r)) : (this.$element.css("height", l + (this.headerHeight + d)), this.$element.removeClass("isAttachedTop isAttachedBottom"), 1 === e("." + n + ":visible").length && e("html").removeClass(n + "-isAttached")), function applyScroll() {
//             l > c && u > r ? (i.$element.addClass("hasScroll"), i.$wrap.css("height", s - (i.headerHeight + d))) : (i.$element.removeClass("hasScroll"), i.$wrap.css("height", "auto"))
//           }(), function applyShadow() {
//             c + h < l - 30 ? i.$element.addClass("hasShadow") : i.$element.removeClass("hasShadow")
//           }())
//         }, recalcButtons: function recalcButtons() {
//           var e = this.$header.find("." + n + "-header-buttons").innerWidth() + 10;
//           !0 === this.options.rtl ? this.$header.css("padding-left", e) : this.$header.css("padding-right", e)
//         }
//       }, t.off("load." + n).on("load." + n, function (t) {
//         var i = document.location.hash;
//         if (0 === window.$iziModal.autoOpen && !e("." + n).is(":visible")) try {
//           var r = e(i).data();
//           void 0 !== r && !1 !== r.iziModal.options.autoOpen && e(i).iziModal("open")
//         } catch (e) {
//         }
//       }), t.off("hashchange." + n).on("hashchange." + n, function (t) {
//         var i = document.location.hash;
//         if ("" !== i) try {
//           void 0 !== e(i).data() && "opening" !== e(i).iziModal("getState") && setTimeout(function () {
//             e(i).iziModal("open", {preventClose: !1})
//           }, 200)
//         } catch (e) {
//         } else window.$iziModal.history && e.each(e("." + n), function (t, i) {
//           if (void 0 !== e(i).data().iziModal) {
//             var r = e(i).iziModal("getState");
//             "opened" != r && "opening" != r || e(i).iziModal("close")
//           }
//         })
//       }), i.off("click", "[data-" + n + "-open]").on("click", "[data-" + n + "-open]", function (t) {
//         t.preventDefault();
//         var i = e("." + n + ":visible"), r = e(t.currentTarget).attr("data-" + n + "-open"),
//           o = e(t.currentTarget).attr("data-" + n + "-preventClose"),
//           s = e(t.currentTarget).attr("data-" + n + "-transitionIn"),
//           a = e(t.currentTarget).attr("data-" + n + "-transitionOut"),
//           l = e(t.currentTarget).attr("data-" + n + "-zindex");
//         void 0 !== l && e(r).iziModal("setZindex", l), void 0 === o && (void 0 !== a ? i.iziModal("close", {transition: a}) : i.iziModal("close")), setTimeout(function () {
//           void 0 !== s ? e(r).iziModal("open", {transition: s}) : e(r).iziModal("open")
//         }, 200)
//       }), i.off("keyup." + n).on("keyup." + n, function (t) {
//         if (e("." + n + ":visible").length) {
//           var i = e("." + n + ":visible")[0].id, r = e("#" + i).data().iziModal.options.arrowKeys,
//             o = e("#" + i).iziModal("getGroup"), s = t || window.event, a = s.target || s.srcElement;
//           void 0 === i || !r || void 0 === o.name || s.ctrlKey || s.metaKey || s.altKey || "INPUT" === a.tagName.toUpperCase() || "TEXTAREA" == a.tagName.toUpperCase() || (37 === s.keyCode ? e("#" + i).iziModal("prev", s) : 39 === s.keyCode && e("#" + i).iziModal("next", s))
//         }
//       }), e.fn[n] = function (t, i) {
//         if (!e(this).length && "object" == (void 0 === t ? "undefined" : r(t))) {
//           var o = {$el: document.createElement("div"), id: this.selector.split("#"), class: this.selector.split(".")};
//           if (o.id.length > 1) {
//             try {
//               o.$el = document.createElement(id[0])
//             } catch (e) {
//             }
//             o.$el.id = this.selector.split("#")[1].trim()
//           } else if (o.class.length > 1) {
//             try {
//               o.$el = document.createElement(o.class[0])
//             } catch (e) {
//             }
//             for (var s = 1; s < o.class.length; s++) o.$el.classList.add(o.class[s].trim())
//           }
//           document.body.appendChild(o.$el), this.push(e(this.selector))
//         }
//         for (var a = 0; a < this.length; a++) {
//           var u = e(this[a]), c = u.data(n),
//             h = e.extend({}, e.fn[n].defaults, u.data(), "object" == (void 0 === t ? "undefined" : r(t)) && t);
//           if (c || t && "object" != (void 0 === t ? "undefined" : r(t))) {
//             if ("string" == typeof t && void 0 !== c) return c[t].apply(c, [].concat(i))
//           } else u.data(n, c = new l(u, h));
//           h.autoOpen && (isNaN(parseInt(h.autoOpen)) ? !0 === h.autoOpen && c.open() : setTimeout(function () {
//             c.open()
//           }, h.autoOpen), window.$iziModal.autoOpen++)
//         }
//         return this
//       }, e.fn[n].defaults = {
//         title: "",
//         subtitle: "",
//         headerColor: "#88A0B9",
//         background: null,
//         theme: "",
//         icon: null,
//         iconText: null,
//         iconColor: "",
//         rtl: !1,
//         width: 600,
//         top: null,
//         bottom: null,
//         borderBottom: !0,
//         padding: 0,
//         radius: 3,
//         zindex: 999,
//         iframe: !1,
//         iframeHeight: 400,
//         iframeURL: null,
//         focusInput: !0,
//         group: "",
//         loop: !1,
//         arrowKeys: !0,
//         navigateCaption: !0,
//         navigateArrows: !0,
//         history: !1,
//         restoreDefaultContent: !1,
//         autoOpen: 0,
//         bodyOverflow: !1,
//         fullscreen: !1,
//         openFullscreen: !1,
//         closeOnEscape: !0,
//         closeButton: !0,
//         appendTo: "body",
//         appendToOverlay: "body",
//         overlay: !0,
//         overlayClose: !0,
//         overlayColor: "rgba(0, 0, 0, 0.4)",
//         timeout: !1,
//         timeoutProgressbar: !1,
//         pauseOnHover: !1,
//         timeoutProgressbarColor: "rgba(255,255,255,0.5)",
//         transitionIn: "comingIn",
//         transitionOut: "comingOut",
//         transitionInOverlay: "fadeIn",
//         transitionOutOverlay: "fadeOut",
//         onFullscreen: function onFullscreen() {
//         },
//         onResize: function onResize() {
//         },
//         onOpening: function onOpening() {
//         },
//         onOpened: function onOpened() {
//         },
//         onClosing: function onClosing() {
//         },
//         onClosed: function onClosed() {
//         },
//         afterRender: function afterRender() {
//         }
//       }, e.fn[n].Constructor = l, e.fn.iziModal
//     })
//   }).call(this, i(50)(e), i(4))
// }
//
// ,
//
// function (e, t, i) {
//   i(135), i(136), i(137), i(138), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
// }
//
// ,
//
// function (e, t, i) {
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(51));
//   Object.assign || (Object.assign = r.default)
// }
//
// ,
//
// function (e, t, i) {
//   (function (e) {
//     if (Date.now && Date.prototype.getTime || (Date.now = function now() {
//       return (new Date).getTime()
//     }), !e.performance || !e.performance.now) {
//       var t = Date.now();
//       e.performance || (e.performance = {}), e.performance.now = function () {
//         return Date.now() - t
//       }
//     }
//     for (var i = Date.now(), r = ["ms", "moz", "webkit", "o"], n = 0; n < r.length && !e.requestAnimationFrame; ++n) {
//       var o = r[n];
//       e.requestAnimationFrame = e[o + "RequestAnimationFrame"], e.cancelAnimationFrame = e[o + "CancelAnimationFrame"] || e[o + "CancelRequestAnimationFrame"]
//     }
//     e.requestAnimationFrame || (e.requestAnimationFrame = function (e) {
//       if ("function" != typeof e) throw new TypeError(e + "is not a function");
//       var t = Date.now(), r = 16 + i - t;
//       return r < 0 && (r = 0), i = t, setTimeout(function () {
//         i = Date.now(), e(performance.now())
//       }, r)
//     }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (e) {
//       return clearTimeout(e)
//     })
//   }).call(this, i(19))
// }
//
// ,
//
// function (e, t) {
//   Math.sign || (Math.sign = function mathSign(e) {
//     return 0 === (e = Number(e)) || isNaN(e) ? e : e > 0 ? 1 : -1
//   })
// }
//
// ,
//
// function (e, t) {
//   Number.isInteger || (Number.isInteger = function numberIsInteger(e) {
//     return "number" == typeof e && isFinite(e) && Math.floor(e) === e
//   })
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(35)), n = i(1);
//   var o = function () {
//     function Circle() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
//         t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
//         i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Circle), this.x = e, this.y = t, this.radius = i, this.type = n.SHAPES.CIRC
//     }
//
//     return Circle.prototype.clone = function clone() {
//       return new Circle(this.x, this.y, this.radius)
//     }, Circle.prototype.contains = function contains(e, t) {
//       if (this.radius <= 0) return !1;
//       var i = this.radius * this.radius, r = this.x - e, n = this.y - t;
//       return (r *= r) + (n *= n) <= i
//     }, Circle.prototype.getBounds = function getBounds() {
//       return new r.default(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
//     }, Circle
//   }();
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(35)), n = i(1);
//   var o = function () {
//     function Ellipse() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
//         t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
//         i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
//         r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Ellipse), this.x = e, this.y = t, this.width = i, this.height = r, this.type = n.SHAPES.ELIP
//     }
//
//     return Ellipse.prototype.clone = function clone() {
//       return new Ellipse(this.x, this.y, this.width, this.height)
//     }, Ellipse.prototype.contains = function contains(e, t) {
//       if (this.width <= 0 || this.height <= 0) return !1;
//       var i = (e - this.x) / this.width, r = (t - this.y) / this.height;
//       return (i *= i) + (r *= r) <= 1
//     }, Ellipse.prototype.getBounds = function getBounds() {
//       return new r.default(this.x - this.width, this.y - this.height, this.width, this.height)
//     }, Ellipse
//   }();
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(33)), n = i(1);
//   var o = function () {
//     function Polygon() {
//       for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
//       if (function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Polygon), Array.isArray(t[0]) && (t = t[0]), t[0] instanceof r.default) {
//         for (var o = [], s = 0, a = t.length; s < a; s++) o.push(t[s].x, t[s].y);
//         t = o
//       }
//       this.closed = !0, this.points = t, this.type = n.SHAPES.POLY
//     }
//
//     return Polygon.prototype.clone = function clone() {
//       return new Polygon(this.points.slice())
//     }, Polygon.prototype.close = function close() {
//       var e = this.points;
//       e[0] === e[e.length - 2] && e[1] === e[e.length - 1] || e.push(e[0], e[1])
//     }, Polygon.prototype.contains = function contains(e, t) {
//       for (var i = !1, r = this.points.length / 2, n = 0, o = r - 1; n < r; o = n++) {
//         var s = this.points[2 * n], a = this.points[2 * n + 1], l = this.points[2 * o], u = this.points[2 * o + 1];
//         a > t != u > t && e < (t - a) / (u - a) * (l - s) + s && (i = !i)
//       }
//       return i
//     }, Polygon
//   }();
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(1);
//   var n = function () {
//     function RoundedRectangle() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
//         t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
//         i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
//         n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
//         o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 20;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, RoundedRectangle), this.x = e, this.y = t, this.width = i, this.height = n, this.radius = o, this.type = r.SHAPES.RREC
//     }
//
//     return RoundedRectangle.prototype.clone = function clone() {
//       return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius)
//     }, RoundedRectangle.prototype.contains = function contains(e, t) {
//       if (this.width <= 0 || this.height <= 0) return !1;
//       if (e >= this.x && e <= this.x + this.width && t >= this.y && t <= this.y + this.height) {
//         if (t >= this.y + this.radius && t <= this.y + this.height - this.radius || e >= this.x + this.radius && e <= this.x + this.width - this.radius) return !0;
//         var i = e - (this.x + this.radius), r = t - (this.y + this.radius), n = this.radius * this.radius;
//         if (i * i + r * r <= n) return !0;
//         if ((i = e - (this.x + this.width - this.radius)) * i + r * r <= n) return !0;
//         if (i * i + (r = t - (this.y + this.height - this.radius)) * r <= n) return !0;
//         if ((i = e - (this.x + this.radius)) * i + r * r <= n) return !0
//       }
//       return !1
//     }, RoundedRectangle
//   }();
//   t.default = n
// }
//
// ,
//
// function (e, t) {
//   e.exports = function (e, t) {
//     var i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
//     if (!i) throw new Error("This browser does not support webGL. Try using the canvas renderer");
//     return i
//   }
// }
//
// ,
//
// function (e, t) {
//   var i = new ArrayBuffer(0), r = function (e, t, r, n) {
//     this.gl = e, this.buffer = e.createBuffer(), this.type = t || e.ARRAY_BUFFER, this.drawType = n || e.STATIC_DRAW, this.data = i, r && this.upload(r), this._updateID = 0
//   };
//   r.prototype.upload = function (e, t, i) {
//     i || this.bind();
//     var r = this.gl;
//     e = e || this.data, t = t || 0, this.data.byteLength >= e.byteLength ? r.bufferSubData(this.type, t, e) : r.bufferData(this.type, e, this.drawType), this.data = e
//   }, r.prototype.bind = function () {
//     this.gl.bindBuffer(this.type, this.buffer)
//   }, r.createVertexBuffer = function (e, t, i) {
//     return new r(e, e.ARRAY_BUFFER, t, i)
//   }, r.createIndexBuffer = function (e, t, i) {
//     return new r(e, e.ELEMENT_ARRAY_BUFFER, t, i)
//   }, r.create = function (e, t, i, n) {
//     return new r(e, t, i, n)
//   }, r.prototype.destroy = function () {
//     this.gl.deleteBuffer(this.buffer)
//   }, e.exports = r
// }
//
// ,
//
// function (e, t, i) {
//   var r = i(55), n = function (e, t, i) {
//     this.gl = e, this.framebuffer = e.createFramebuffer(), this.stencil = null, this.texture = null, this.width = t || 100, this.height = i || 100
//   };
//   n.prototype.enableTexture = function (e) {
//     var t = this.gl;
//     this.texture = e || new r(t), this.texture.bind(), this.bind(), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture.texture, 0)
//   }, n.prototype.enableStencil = function () {
//     if (!this.stencil) {
//       var e = this.gl;
//       this.stencil = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, this.stencil), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, this.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, this.width, this.height)
//     }
//   }, n.prototype.clear = function (e, t, i, r) {
//     this.bind();
//     var n = this.gl;
//     n.clearColor(e, t, i, r), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)
//   }, n.prototype.bind = function () {
//     var e = this.gl;
//     e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer)
//   }, n.prototype.unbind = function () {
//     var e = this.gl;
//     e.bindFramebuffer(e.FRAMEBUFFER, null)
//   }, n.prototype.resize = function (e, t) {
//     var i = this.gl;
//     this.width = e, this.height = t, this.texture && this.texture.uploadData(null, e, t), this.stencil && (i.bindRenderbuffer(i.RENDERBUFFER, this.stencil), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, e, t))
//   }, n.prototype.destroy = function () {
//     var e = this.gl;
//     this.texture && this.texture.destroy(), e.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
//   }, n.createRGBA = function (e, t, i, o) {
//     var s = r.fromData(e, null, t, i);
//     s.enableNearestScaling(), s.enableWrapClamp();
//     var a = new n(e, t, i);
//     return a.enableTexture(s), a.unbind(), a
//   }, n.createFloat32 = function (e, t, i, o) {
//     var s = new r.fromData(e, o, t, i);
//     s.enableNearestScaling(), s.enableWrapClamp();
//     var a = new n(e, t, i);
//     return a.enableTexture(s), a.unbind(), a
//   }, e.exports = n
// }
//
// ,
//
// function (e, t, i) {
//   var r = i(56), n = i(57), o = i(59), s = i(61), a = i(62), l = function (e, t, i, l, u) {
//     this.gl = e, l && (t = s(t, l), i = s(i, l)), this.program = r(e, t, i, u), this.attributes = n(e, this.program), this.uniformData = o(e, this.program), this.uniforms = a(e, this.uniformData)
//   };
//   l.prototype.bind = function () {
//     return this.gl.useProgram(this.program), this
//   }, l.prototype.destroy = function () {
//     this.attributes = null, this.uniformData = null, this.uniforms = null, this.gl.deleteProgram(this.program)
//   }, e.exports = l
// }
//
// ,
//
// function (e, t, i) {
//   var r = i(54);
//
//   function VertexArrayObject(e, t) {
//     if (this.nativeVaoExtension = null, VertexArrayObject.FORCE_NATIVE || (this.nativeVaoExtension = e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = t, this.nativeVaoExtension) {
//       this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
//       var i = e.getParameter(e.MAX_VERTEX_ATTRIBS);
//       this.nativeState = {tempAttribState: new Array(i), attribState: new Array(i)}
//     }
//     this.gl = e, this.attributes = [], this.indexBuffer = null, this.dirty = !1
//   }
//
//   VertexArrayObject.prototype.constructor = VertexArrayObject, e.exports = VertexArrayObject, VertexArrayObject.FORCE_NATIVE = !1, VertexArrayObject.prototype.bind = function () {
//     if (this.nativeVao) {
//       if (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty) return this.dirty = !1, this.activate(), this;
//       this.indexBuffer && this.indexBuffer.bind()
//     } else this.activate();
//     return this
//   }, VertexArrayObject.prototype.unbind = function () {
//     return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
//   }, VertexArrayObject.prototype.activate = function () {
//     for (var e = this.gl, t = null, i = 0; i < this.attributes.length; i++) {
//       var n = this.attributes[i];
//       t !== n.buffer && (n.buffer.bind(), t = n.buffer), e.vertexAttribPointer(n.attribute.location, n.attribute.size, n.type || e.FLOAT, n.normalized || !1, n.stride || 0, n.start || 0)
//     }
//     return r(e, this.attributes, this.nativeState), this.indexBuffer && this.indexBuffer.bind(), this
//   }, VertexArrayObject.prototype.addAttribute = function (e, t, i, r, n, o) {
//     return this.attributes.push({
//       buffer: e,
//       attribute: t,
//       location: t.location,
//       type: i || this.gl.FLOAT,
//       normalized: r || !1,
//       stride: n || 0,
//       start: o || 0
//     }), this.dirty = !0, this
//   }, VertexArrayObject.prototype.addIndex = function (e) {
//     return this.indexBuffer = e, this.dirty = !0, this
//   }, VertexArrayObject.prototype.clear = function () {
//     return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
//   }, VertexArrayObject.prototype.draw = function (e, t, i) {
//     var r = this.gl;
//     return this.indexBuffer ? r.drawElements(e, t || this.indexBuffer.data.length, r.UNSIGNED_SHORT, 2 * (i || 0)) : r.drawArrays(e, i, t || this.getSize()), this
//   }, VertexArrayObject.prototype.destroy = function () {
//     this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
//   }, VertexArrayObject.prototype.getSize = function () {
//     var e = this.attributes[0];
//     return e.buffer.data.length / (e.stride / 4 || e.attribute.size)
//   }
// }
//
// ,
//
// function (e, t, i) {
//   e.exports = {
//     compileProgram: i(56),
//     defaultValue: i(60),
//     extractAttributes: i(57),
//     extractUniforms: i(59),
//     generateUniformAccessObject: i(62),
//     setPrecision: i(61),
//     mapSize: i(58),
//     mapType: i(36)
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function maxRecommendedTextures(e) {
//     if (r.default.tablet || r.default.phone) return 4;
//     return e
//   };
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(38))
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = function canUploadSameBuffer() {
//     return !(navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
//   }
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = {
//     mixin: function mixin(e) {
//       !function pluginTarget(e) {
//         e.__plugins = {}, e.registerPlugin = function registerPlugin(t, i) {
//           e.__plugins[t] = i
//         }, e.prototype.initPlugins = function initPlugins() {
//           for (var t in this.plugins = this.plugins || {}, e.__plugins) this.plugins[t] = new e.__plugins[t](this)
//         }, e.prototype.destroyPlugins = function destroyPlugins() {
//           for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
//           this.plugins = null
//         }
//       }(e)
//     }
//   }
// }
//
// ,
//
// function (e, t) {
//   function mixin(e, t) {
//     if (e && t) for (var i = Object.keys(t), r = 0; r < i.length; ++r) {
//       var n = i[r];
//       Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
//     }
//   }
//
//   t.__esModule = !0, t.mixin = mixin, t.delayMixin = function delayMixin(e, t) {
//     i.push(e, t)
//   }, t.performMixins = function performMixins() {
//     for (var e = 0; e < i.length; e += 2) mixin(i[e], i[e + 1]);
//     i.length = 0
//   };
//   var i = []
// }
//
// ,
//
// function (e, t) {
//   e.exports = function removeItems(e, t, i) {
//     var r, n = e.length;
//     if (!(t >= n || 0 === i)) {
//       var o = n - (i = t + i > n ? n - t : i);
//       for (r = t; r < o; ++r) e[r] = e[r + i];
//       e.length = o
//     }
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function mapPremultipliedBlendModes() {
//     for (var e = [], t = [], i = 0; i < 32; i++) e[i] = i, t[i] = i;
//     e[r.BLEND_MODES.NORMAL_NPM] = r.BLEND_MODES.NORMAL, e[r.BLEND_MODES.ADD_NPM] = r.BLEND_MODES.ADD, e[r.BLEND_MODES.SCREEN_NPM] = r.BLEND_MODES.SCREEN, t[r.BLEND_MODES.NORMAL] = r.BLEND_MODES.NORMAL_NPM, t[r.BLEND_MODES.ADD] = r.BLEND_MODES.ADD_NPM, t[r.BLEND_MODES.SCREEN] = r.BLEND_MODES.SCREEN_NPM;
//     var n = [];
//     return n.push(t), n.push(e), n
//   };
//   var r = i(1)
// }
//
// ,
//
// function (e, t, i) {
//   (function (e, i) {
//     !function (r) {
//       var n = "object" == typeof t && t && !t.nodeType && t, o = "object" == typeof e && e && !e.nodeType && e,
//         s = "object" == typeof i && i;
//       s.global !== s && s.window !== s && s.self !== s || (r = s);
//       var a, l, u = 2147483647, c = 36, h = 1, d = 26, f = 38, p = 700, g = 72, m = 128, v = "-", y = /^xn--/,
//         _ = /[^\x20-\x7E]/, b = /[\x2E\u3002\uFF0E\uFF61]/g, x = {
//           overflow: "Overflow: input needs wider integers to process",
//           "not-basic": "Illegal input >= 0x80 (not a basic code point)",
//           "invalid-input": "Invalid input"
//         }, w = c - h, T = Math.floor, C = String.fromCharCode;
//
//       function error(e) {
//         throw new RangeError(x[e])
//       }
//
//       function map(e, t) {
//         for (var i = e.length, r = []; i--;) r[i] = t(e[i]);
//         return r
//       }
//
//       function mapDomain(e, t) {
//         var i = e.split("@"), r = "";
//         return i.length > 1 && (r = i[0] + "@", e = i[1]), r + map((e = e.replace(b, ".")).split("."), t).join(".")
//       }
//
//       function ucs2decode(e) {
//         for (var t, i, r = [], n = 0, o = e.length; n < o;) (t = e.charCodeAt(n++)) >= 55296 && t <= 56319 && n < o ? 56320 == (64512 & (i = e.charCodeAt(n++))) ? r.push(((1023 & t) << 10) + (1023 & i) + 65536) : (r.push(t), n--) : r.push(t);
//         return r
//       }
//
//       function ucs2encode(e) {
//         return map(e, function (e) {
//           var t = "";
//           return e > 65535 && (t += C((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += C(e)
//         }).join("")
//       }
//
//       function basicToDigit(e) {
//         return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : c
//       }
//
//       function digitToBasic(e, t) {
//         return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
//       }
//
//       function adapt(e, t, i) {
//         var r = 0;
//         for (e = i ? T(e / p) : e >> 1, e += T(e / t); e > w * d >> 1; r += c) e = T(e / w);
//         return T(r + (w + 1) * e / (e + f))
//       }
//
//       function decode(e) {
//         var t, i, r, n, o, s, a, l, f, p, y = [], _ = e.length, b = 0, x = m, w = g;
//         for ((i = e.lastIndexOf(v)) < 0 && (i = 0), r = 0; r < i; ++r) e.charCodeAt(r) >= 128 && error("not-basic"), y.push(e.charCodeAt(r));
//         for (n = i > 0 ? i + 1 : 0; n < _;) {
//           for (o = b, s = 1, a = c; n >= _ && error("invalid-input"), ((l = basicToDigit(e.charCodeAt(n++))) >= c || l > T((u - b) / s)) && error("overflow"), b += l * s, !(l < (f = a <= w ? h : a >= w + d ? d : a - w)); a += c) s > T(u / (p = c - f)) && error("overflow"), s *= p;
//           w = adapt(b - o, t = y.length + 1, 0 == o), T(b / t) > u - x && error("overflow"), x += T(b / t), b %= t, y.splice(b++, 0, x)
//         }
//         return ucs2encode(y)
//       }
//
//       function encode(e) {
//         var t, i, r, n, o, s, a, l, f, p, y, _, b, x, w, S = [];
//         for (_ = (e = ucs2decode(e)).length, t = m, i = 0, o = g, s = 0; s < _; ++s) (y = e[s]) < 128 && S.push(C(y));
//         for (r = n = S.length, n && S.push(v); r < _;) {
//           for (a = u, s = 0; s < _; ++s) (y = e[s]) >= t && y < a && (a = y);
//           for (a - t > T((u - i) / (b = r + 1)) && error("overflow"), i += (a - t) * b, t = a, s = 0; s < _; ++s) if ((y = e[s]) < t && ++i > u && error("overflow"), y == t) {
//             for (l = i, f = c; !(l < (p = f <= o ? h : f >= o + d ? d : f - o)); f += c) w = l - p, x = c - p, S.push(C(digitToBasic(p + w % x, 0))), l = T(w / x);
//             S.push(C(digitToBasic(l, 0))), o = adapt(i, b, r == n), i = 0, ++r
//           }
//           ++i, ++t
//         }
//         return S.join("")
//       }
//
//       if (a = {
//         version: "1.4.1",
//         ucs2: {decode: ucs2decode, encode: ucs2encode},
//         decode: decode,
//         encode: encode,
//         toASCII: function toASCII(e) {
//           return mapDomain(e, function (e) {
//             return _.test(e) ? "xn--" + encode(e) : e
//           })
//         },
//         toUnicode: function toUnicode(e) {
//           return mapDomain(e, function (e) {
//             return y.test(e) ? decode(e.slice(4).toLowerCase()) : e
//           })
//         }
//       }, n && o) if (e.exports == n) o.exports = a; else for (l in a) a.hasOwnProperty(l) && (n[l] = a[l]); else r.punycode = a
//     }(this)
//   }).call(this, i(50)(e), i(19))
// }
//
// ,
//
// function (e, t) {
//   e.exports = {
//     isString: function (e) {
//       return "string" == typeof e
//     }, isObject: function (e) {
//       return "object" == typeof e && null !== e
//     }, isNull: function (e) {
//       return null === e
//     }, isNullOrUndefined: function (e) {
//       return null == e
//     }
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.decode = t.parse = i(158), t.encode = t.stringify = i(159)
// }
//
// ,
//
// function (e, t) {
//   function hasOwnProperty(e, t) {
//     return Object.prototype.hasOwnProperty.call(e, t)
//   }
//
//   e.exports = function (e, t, r, n) {
//     t = t || "&", r = r || "=";
//     var o = {};
//     if ("string" != typeof e || 0 === e.length) return o;
//     var s = /\+/g;
//     e = e.split(t);
//     var a = 1e3;
//     n && "number" == typeof n.maxKeys && (a = n.maxKeys);
//     var l = e.length;
//     a > 0 && l > a && (l = a);
//     for (var u = 0; u < l; ++u) {
//       var c, h, d, f, p = e[u].replace(s, "%20"), g = p.indexOf(r);
//       g >= 0 ? (c = p.substr(0, g), h = p.substr(g + 1)) : (c = p, h = ""), d = decodeURIComponent(c), f = decodeURIComponent(h), hasOwnProperty(o, d) ? i(o[d]) ? o[d].push(f) : o[d] = [o[d], f] : o[d] = f
//     }
//     return o
//   };
//   var i = Array.isArray || function (e) {
//     return "[object Array]" === Object.prototype.toString.call(e)
//   }
// }
//
// ,
//
// function (e, t) {
//   var i = function (e) {
//     switch (typeof e) {
//       case"string":
//         return e;
//       case"boolean":
//         return e ? "true" : "false";
//       case"number":
//         return isFinite(e) ? e : "";
//       default:
//         return ""
//     }
//   };
//   e.exports = function (e, t, o, s) {
//     return t = t || "&", o = o || "=", null === e && (e = void 0), "object" == typeof e ? map(n(e), function (n) {
//       var s = encodeURIComponent(i(n)) + o;
//       return r(e[n]) ? map(e[n], function (e) {
//         return s + encodeURIComponent(i(e))
//       }).join(t) : s + encodeURIComponent(i(e[n]))
//     }).join(t) : s ? encodeURIComponent(i(s)) + o + encodeURIComponent(i(e)) : ""
//   };
//   var r = Array.isArray || function (e) {
//     return "[object Array]" === Object.prototype.toString.call(e)
//   };
//
//   function map(e, t) {
//     if (e.map) return e.map(t);
//     for (var i = [], r = 0; r < e.length; r++) i.push(t(e[r], r));
//     return i
//   }
//
//   var n = Object.keys || function (e) {
//     var t = [];
//     for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.push(i);
//     return t
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = _interopRequireDefault(i(5)), o = i(1), s = _interopRequireDefault(i(161));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var a = function () {
//     function Ticker() {
//       var e = this;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Ticker), this._head = new s.default(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / n.default.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._tick = function (t) {
//         e._requestId = null, e.started && (e.update(t), e.started && null === e._requestId && e._head.next && (e._requestId = requestAnimationFrame(e._tick)))
//       }
//     }
//
//     return Ticker.prototype._requestIfNeeded = function _requestIfNeeded() {
//       null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
//     }, Ticker.prototype._cancelIfNeeded = function _cancelIfNeeded() {
//       null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
//     }, Ticker.prototype._startIfPossible = function _startIfPossible() {
//       this.started ? this._requestIfNeeded() : this.autoStart && this.start()
//     }, Ticker.prototype.add = function add(e, t) {
//       var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UPDATE_PRIORITY.NORMAL;
//       return this._addListener(new s.default(e, t, i))
//     }, Ticker.prototype.addOnce = function addOnce(e, t) {
//       var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UPDATE_PRIORITY.NORMAL;
//       return this._addListener(new s.default(e, t, i, !0))
//     }, Ticker.prototype._addListener = function _addListener(e) {
//       var t = this._head.next, i = this._head;
//       if (t) {
//         for (; t;) {
//           if (e.priority > t.priority) {
//             e.connect(i);
//             break
//           }
//           i = t, t = t.next
//         }
//         e.previous || e.connect(i)
//       } else e.connect(i);
//       return this._startIfPossible(), this
//     }, Ticker.prototype.remove = function remove(e, t) {
//       for (var i = this._head.next; i;) i = i.match(e, t) ? i.destroy() : i.next;
//       return this._head.next || this._cancelIfNeeded(), this
//     }, Ticker.prototype.start = function start() {
//       this.started || (this.started = !0, this._requestIfNeeded())
//     }, Ticker.prototype.stop = function stop() {
//       this.started && (this.started = !1, this._cancelIfNeeded())
//     }, Ticker.prototype.destroy = function destroy() {
//       this.stop();
//       for (var e = this._head.next; e;) e = e.destroy(!0);
//       this._head.destroy(), this._head = null
//     }, Ticker.prototype.update = function update() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now(), t = void 0;
//       if (e > this.lastTime) {
//         (t = this.elapsedMS = e - this.lastTime) > this._maxElapsedMS && (t = this._maxElapsedMS), this.deltaTime = t * n.default.TARGET_FPMS * this.speed;
//         for (var i = this._head, r = i.next; r;) r = r.emit(this.deltaTime);
//         i.next || this._cancelIfNeeded()
//       } else this.deltaTime = this.elapsedMS = 0;
//       this.lastTime = e
//     }, r(Ticker, [{
//       key: "FPS", get: function get() {
//         return 1e3 / this.elapsedMS
//       }
//     }, {
//       key: "minFPS", get: function get() {
//         return 1e3 / this._maxElapsedMS
//       }, set: function set(e) {
//         var t = Math.min(Math.max(0, e) / 1e3, n.default.TARGET_FPMS);
//         this._maxElapsedMS = 1 / t
//       }
//     }]), Ticker
//   }();
//   t.default = a
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function TickerListener(e) {
//       var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
//         i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
//         r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TickerListener), this.fn = e, this.context = t, this.priority = i, this.once = r, this.next = null, this.previous = null, this._destroyed = !1
//     }
//
//     return TickerListener.prototype.match = function match(e, t) {
//       return t = t || null, this.fn === e && this.context === t
//     }, TickerListener.prototype.emit = function emit(e) {
//       this.fn && (this.context ? this.fn.call(this.context, e) : this.fn(e));
//       var t = this.next;
//       return this.once && this.destroy(!0), this._destroyed && (this.next = null), t
//     }, TickerListener.prototype.connect = function connect(e) {
//       this.previous = e, e.next && (e.next.previous = this), this.next = e.next, e.next = this
//     }, TickerListener.prototype.destroy = function destroy() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
//       this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
//       var t = this.next;
//       return this.next = e ? null : t, this.previous = null, t
//     }, TickerListener
//   }();
//   t.default = i
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(21)), n = i(1), o = i(7), s = _interopRequireDefault(i(45));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var a = new o.Matrix, l = function () {
//     function CanvasSpriteRenderer(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, CanvasSpriteRenderer), this.renderer = e
//     }
//
//     return CanvasSpriteRenderer.prototype.render = function render(e) {
//       var t = e._texture, i = this.renderer, r = t._frame.width, l = t._frame.height, u = e.transform.worldTransform,
//         c = 0, h = 0;
//       if (!(t.orig.width <= 0 || t.orig.height <= 0) && t.baseTexture.source && (i.setBlendMode(e.blendMode), t.valid)) {
//         i.context.globalAlpha = e.worldAlpha;
//         var d = t.baseTexture.scaleMode === n.SCALE_MODES.LINEAR;
//         i.smoothProperty && i.context[i.smoothProperty] !== d && (i.context[i.smoothProperty] = d), t.trim ? (c = t.trim.width / 2 + t.trim.x - e.anchor.x * t.orig.width, h = t.trim.height / 2 + t.trim.y - e.anchor.y * t.orig.height) : (c = (.5 - e.anchor.x) * t.orig.width, h = (.5 - e.anchor.y) * t.orig.height), t.rotate && (u.copy(a), u = a, o.GroupD8.matrixAppendRotationInv(u, t.rotate, c, h), c = 0, h = 0), c -= r / 2, h -= l / 2, i.roundPixels ? (i.context.setTransform(u.a, u.b, u.c, u.d, u.tx * i.resolution | 0, u.ty * i.resolution | 0), c |= 0, h |= 0) : i.context.setTransform(u.a, u.b, u.c, u.d, u.tx * i.resolution, u.ty * i.resolution);
//         var f = t.baseTexture.resolution;
//         16777215 !== e.tint ? (e.cachedTint === e.tint && e.tintedTexture.tintId === e._texture._updateID || (e.cachedTint = e.tint, e.tintedTexture = s.default.getTintedTexture(e, e.tint)), i.context.drawImage(e.tintedTexture, 0, 0, r * f, l * f, c * i.resolution, h * i.resolution, r * i.resolution, l * i.resolution)) : i.context.drawImage(t.baseTexture.source, t._frame.x * f, t._frame.y * f, r * f, l * f, c * i.resolution, h * i.resolution, r * i.resolution, l * i.resolution)
//       }
//     }, CanvasSpriteRenderer.prototype.destroy = function destroy() {
//       this.renderer = null
//     }, CanvasSpriteRenderer
//   }();
//   t.default = l, r.default.registerPlugin("sprite", l)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(1);
//   var n = function () {
//     function CanvasMaskManager(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, CanvasMaskManager), this.renderer = e
//     }
//
//     return CanvasMaskManager.prototype.pushMask = function pushMask(e) {
//       var t = this.renderer;
//       t.context.save();
//       var i = e.alpha, r = e.transform.worldTransform, n = t.resolution;
//       t.context.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n), e._texture || (this.renderGraphicsShape(e), t.context.clip()), e.worldAlpha = i
//     }, CanvasMaskManager.prototype.renderGraphicsShape = function renderGraphicsShape(e) {
//       var t = this.renderer.context, i = e.graphicsData.length;
//       if (0 !== i) {
//         t.beginPath();
//         for (var n = 0; n < i; n++) {
//           var o = e.graphicsData[n], s = o.shape;
//           if (o.type === r.SHAPES.POLY) {
//             var a = s.points;
//             t.moveTo(a[0], a[1]);
//             for (var l = 1; l < a.length / 2; l++) t.lineTo(a[2 * l], a[2 * l + 1]);
//             a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && t.closePath()
//           } else if (o.type === r.SHAPES.RECT) t.rect(s.x, s.y, s.width, s.height), t.closePath(); else if (o.type === r.SHAPES.CIRC) t.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), t.closePath(); else if (o.type === r.SHAPES.ELIP) {
//             var u = 2 * s.width, c = 2 * s.height, h = s.x - u / 2, d = s.y - c / 2, f = u / 2 * .5522848,
//               p = c / 2 * .5522848, g = h + u, m = d + c, v = h + u / 2, y = d + c / 2;
//             t.moveTo(h, y), t.bezierCurveTo(h, y - p, v - f, d, v, d), t.bezierCurveTo(v + f, d, g, y - p, g, y), t.bezierCurveTo(g, y + p, v + f, m, v, m), t.bezierCurveTo(v - f, m, h, y + p, h, y), t.closePath()
//           } else if (o.type === r.SHAPES.RREC) {
//             var _ = s.x, b = s.y, x = s.width, w = s.height, T = s.radius, C = Math.min(x, w) / 2 | 0;
//             T = T > C ? C : T, t.moveTo(_, b + T), t.lineTo(_, b + w - T), t.quadraticCurveTo(_, b + w, _ + T, b + w), t.lineTo(_ + x - T, b + w), t.quadraticCurveTo(_ + x, b + w, _ + x, b + w - T), t.lineTo(_ + x, b + T), t.quadraticCurveTo(_ + x, b, _ + x - T, b), t.lineTo(_ + T, b), t.quadraticCurveTo(_, b, _, b + T), t.closePath()
//           }
//         }
//       }
//     }, CanvasMaskManager.prototype.popMask = function popMask(e) {
//       e.context.restore(), e.invalidateBlendMode()
//     }, CanvasMaskManager.prototype.destroy = function destroy() {
//     }, CanvasMaskManager
//   }();
//   t.default = n
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function mapCanvasBlendModesToPixi() {
//     var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
//     (0, n.default)() ? (e[r.BLEND_MODES.NORMAL] = "source-over", e[r.BLEND_MODES.ADD] = "lighter", e[r.BLEND_MODES.MULTIPLY] = "multiply", e[r.BLEND_MODES.SCREEN] = "screen", e[r.BLEND_MODES.OVERLAY] = "overlay", e[r.BLEND_MODES.DARKEN] = "darken", e[r.BLEND_MODES.LIGHTEN] = "lighten", e[r.BLEND_MODES.COLOR_DODGE] = "color-dodge", e[r.BLEND_MODES.COLOR_BURN] = "color-burn", e[r.BLEND_MODES.HARD_LIGHT] = "hard-light", e[r.BLEND_MODES.SOFT_LIGHT] = "soft-light", e[r.BLEND_MODES.DIFFERENCE] = "difference", e[r.BLEND_MODES.EXCLUSION] = "exclusion", e[r.BLEND_MODES.HUE] = "hue", e[r.BLEND_MODES.SATURATION] = "saturate", e[r.BLEND_MODES.COLOR] = "color", e[r.BLEND_MODES.LUMINOSITY] = "luminosity") : (e[r.BLEND_MODES.NORMAL] = "source-over", e[r.BLEND_MODES.ADD] = "lighter", e[r.BLEND_MODES.MULTIPLY] = "source-over", e[r.BLEND_MODES.SCREEN] = "source-over", e[r.BLEND_MODES.OVERLAY] = "source-over", e[r.BLEND_MODES.DARKEN] = "source-over", e[r.BLEND_MODES.LIGHTEN] = "source-over", e[r.BLEND_MODES.COLOR_DODGE] = "source-over", e[r.BLEND_MODES.COLOR_BURN] = "source-over", e[r.BLEND_MODES.HARD_LIGHT] = "source-over", e[r.BLEND_MODES.SOFT_LIGHT] = "source-over", e[r.BLEND_MODES.DIFFERENCE] = "source-over", e[r.BLEND_MODES.EXCLUSION] = "source-over", e[r.BLEND_MODES.HUE] = "source-over", e[r.BLEND_MODES.SATURATION] = "source-over", e[r.BLEND_MODES.COLOR] = "source-over", e[r.BLEND_MODES.LUMINOSITY] = "source-over");
//     return e[r.BLEND_MODES.NORMAL_NPM] = e[r.BLEND_MODES.NORMAL], e[r.BLEND_MODES.ADD_NPM] = e[r.BLEND_MODES.ADD], e[r.BLEND_MODES.SCREEN_NPM] = e[r.BLEND_MODES.SCREEN], e
//   };
//   var r = i(1), n = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(73))
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(27)), n = _interopRequireDefault(i(28)), o = _interopRequireDefault(i(46)),
//     s = _interopRequireDefault(i(178)), a = _interopRequireDefault(i(179)), l = _interopRequireDefault(i(180)),
//     u = _interopRequireDefault(i(5)), c = i(3), h = _interopRequireDefault(i(9)), d = _interopRequireDefault(i(42));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var f = 0, p = 0, g = function (e) {
//     function SpriteRenderer(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, SpriteRenderer);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       i.vertSize = 5, i.vertByteSize = 4 * i.vertSize, i.size = u.default.SPRITE_BATCH_SIZE, i.buffers = [];
//       for (var r = 1; r <= d.default.nextPow2(i.size); r *= 2) i.buffers.push(new l.default(4 * r * i.vertByteSize));
//       i.indices = (0, o.default)(i.size), i.shader = null, i.currentIndex = 0, i.groups = [];
//       for (var n = 0; n < i.size; n++) i.groups[n] = {
//         textures: [],
//         textureCount: 0,
//         ids: [],
//         size: 0,
//         start: 0,
//         blend: 0
//       };
//       return i.sprites = [], i.vertexBuffers = [], i.vaos = [], i.vaoMax = 2, i.vertexCount = 0, i.renderer.on("prerender", i.onPrerender, i), i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(SpriteRenderer, e), SpriteRenderer.prototype.onContextChange = function onContextChange() {
//       var e = this.renderer.gl;
//       this.renderer.legacy ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), u.default.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = (0, a.default)(this.MAX_TEXTURES, e)), this.shader = (0, s.default)(e, this.MAX_TEXTURES), this.indexBuffer = h.default.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW), this.renderer.bindVao(null);
//       for (var t = this.shader.attributes, i = 0; i < this.vaoMax; i++) {
//         var r = this.vertexBuffers[i] = h.default.GLBuffer.createVertexBuffer(e, null, e.STREAM_DRAW),
//           n = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(r, t.aVertexPosition, e.FLOAT, !1, this.vertByteSize, 0).addAttribute(r, t.aTextureCoord, e.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(r, t.aColor, e.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
//         t.aTextureId && n.addAttribute(r, t.aTextureId, e.FLOAT, !1, this.vertByteSize, 16), this.vaos[i] = n
//       }
//       this.vao = this.vaos[0], this.currentBlendMode = 99999, this.boundTextures = new Array(this.MAX_TEXTURES)
//     }, SpriteRenderer.prototype.onPrerender = function onPrerender() {
//       this.vertexCount = 0
//     }, SpriteRenderer.prototype.render = function render(e) {
//       this.currentIndex >= this.size && this.flush(), e._texture._uvs && (this.sprites[this.currentIndex++] = e)
//     }, SpriteRenderer.prototype.flush = function flush() {
//       if (0 !== this.currentIndex) {
//         var e = this.renderer.gl, t = this.MAX_TEXTURES, i = d.default.nextPow2(this.currentIndex),
//           r = d.default.log2(i), n = this.buffers[r], o = this.sprites, s = this.groups, a = n.float32View,
//           l = n.uint32View, g = this.boundTextures, m = this.renderer.boundTextures, v = this.renderer.textureGC.count,
//           y = 0, _ = void 0, b = void 0, x = 1, w = 0, T = s[0], C = void 0, S = void 0,
//           E = c.premultiplyBlendMode[o[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][o[0].blendMode];
//         T.textureCount = 0, T.start = 0, T.blend = E, f++;
//         var P = void 0;
//         for (P = 0; P < t; ++P) {
//           var M = m[P];
//           M._enabled !== f ? (g[P] = M, M._virtalBoundId = P, M._enabled = f) : g[P] = this.renderer.emptyTextures[P]
//         }
//         for (f++, P = 0; P < this.currentIndex; ++P) {
//           var O = o[P];
//           o[P] = null, _ = O._texture.baseTexture;
//           var R = c.premultiplyBlendMode[Number(_.premultipliedAlpha)][O.blendMode];
//           if (E !== R && (E = R, b = null, w = t, f++), b !== _ && (b = _, _._enabled !== f)) {
//             if (w === t && (f++, T.size = P - T.start, w = 0, (T = s[x++]).blend = E, T.textureCount = 0, T.start = P), _.touched = v, -1 === _._virtalBoundId) for (var D = 0; D < t; ++D) {
//               var A = (D + p) % t, k = g[A];
//               if (k._enabled !== f) {
//                 p++, k._virtalBoundId = -1, _._virtalBoundId = A, g[A] = _;
//                 break
//               }
//             }
//             _._enabled = f, T.textureCount++, T.ids[w] = _._virtalBoundId, T.textures[w++] = _
//           }
//           if (C = O.vertexData, S = O._texture._uvs.uvsUint32, this.renderer.roundPixels) {
//             var I = this.renderer.resolution;
//             a[y] = (C[0] * I | 0) / I, a[y + 1] = (C[1] * I | 0) / I, a[y + 5] = (C[2] * I | 0) / I, a[y + 6] = (C[3] * I | 0) / I, a[y + 10] = (C[4] * I | 0) / I, a[y + 11] = (C[5] * I | 0) / I, a[y + 15] = (C[6] * I | 0) / I, a[y + 16] = (C[7] * I | 0) / I
//           } else a[y] = C[0], a[y + 1] = C[1], a[y + 5] = C[2], a[y + 6] = C[3], a[y + 10] = C[4], a[y + 11] = C[5], a[y + 15] = C[6], a[y + 16] = C[7];
//           l[y + 2] = S[0], l[y + 7] = S[1], l[y + 12] = S[2], l[y + 17] = S[3];
//           var L = Math.min(O.worldAlpha, 1),
//             N = L < 1 && _.premultipliedAlpha ? (0, c.premultiplyTint)(O._tintRGB, L) : O._tintRGB + (255 * L << 24);
//           l[y + 3] = l[y + 8] = l[y + 13] = l[y + 18] = N, a[y + 4] = a[y + 9] = a[y + 14] = a[y + 19] = _._virtalBoundId, y += 20
//         }
//         if (T.size = P - T.start, u.default.CAN_UPLOAD_SAME_BUFFER) this.vertexBuffers[this.vertexCount].upload(n.vertices, 0, !0); else {
//           if (this.vaoMax <= this.vertexCount) {
//             this.vaoMax++;
//             var F = this.shader.attributes,
//               B = this.vertexBuffers[this.vertexCount] = h.default.GLBuffer.createVertexBuffer(e, null, e.STREAM_DRAW),
//               j = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(B, F.aVertexPosition, e.FLOAT, !1, this.vertByteSize, 0).addAttribute(B, F.aTextureCoord, e.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(B, F.aColor, e.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
//             F.aTextureId && j.addAttribute(B, F.aTextureId, e.FLOAT, !1, this.vertByteSize, 16), this.vaos[this.vertexCount] = j
//           }
//           this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].upload(n.vertices, 0, !1), this.vertexCount++
//         }
//         for (P = 0; P < t; ++P) m[P]._virtalBoundId = -1;
//         for (P = 0; P < x; ++P) {
//           for (var z = s[P], U = z.textureCount, q = 0; q < U; q++) b = z.textures[q], m[z.ids[q]] !== b && this.renderer.bindTexture(b, z.ids[q], !0), b._virtalBoundId = -1;
//           this.renderer.state.setBlendMode(z.blend), e.drawElements(e.TRIANGLES, 6 * z.size, e.UNSIGNED_SHORT, 6 * z.start * 2)
//         }
//         this.currentIndex = 0
//       }
//     }, SpriteRenderer.prototype.start = function start() {
//       this.renderer.bindShader(this.shader), u.default.CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].bind())
//     }, SpriteRenderer.prototype.stop = function stop() {
//       this.flush()
//     }, SpriteRenderer.prototype.destroy = function destroy() {
//       for (var t = 0; t < this.vaoMax; t++) this.vertexBuffers[t] && this.vertexBuffers[t].destroy(), this.vaos[t] && this.vaos[t].destroy();
//       this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), e.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null;
//       for (var i = 0; i < this.buffers.length; ++i) this.buffers[i].destroy()
//     }, SpriteRenderer
//   }(r.default);
//   t.default = g, n.default.registerPlugin("sprite", g)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(22)), n = _interopRequireDefault(i(74));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var o = function (e) {
//     function MaskManager(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, MaskManager);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.scissor = !1, i.scissorData = null, i.scissorRenderTarget = null, i.enableScissor = !0, i.alphaMaskPool = [], i.alphaMaskIndex = 0, i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(MaskManager, e), MaskManager.prototype.pushMask = function pushMask(e, t) {
//       if (t.texture) this.pushSpriteMask(e, t); else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && t.isFastRect()) {
//         var i = t.worldTransform, r = Math.atan2(i.b, i.a);
//         (r = Math.round(r * (180 / Math.PI))) % 90 ? this.pushStencilMask(t) : this.pushScissorMask(e, t)
//       } else this.pushStencilMask(t)
//     }, MaskManager.prototype.popMask = function popMask(e, t) {
//       t.texture ? this.popSpriteMask(e, t) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(e, t) : this.popStencilMask(e, t)
//     }, MaskManager.prototype.pushSpriteMask = function pushSpriteMask(e, t) {
//       var i = this.alphaMaskPool[this.alphaMaskIndex];
//       i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new n.default(t)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = t, e.filterArea = t.getBounds(!0), this.renderer.filterManager.pushFilter(e, i), this.alphaMaskIndex++
//     }, MaskManager.prototype.popSpriteMask = function popSpriteMask() {
//       this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
//     }, MaskManager.prototype.pushStencilMask = function pushStencilMask(e) {
//       this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(e)
//     }, MaskManager.prototype.popStencilMask = function popStencilMask() {
//       this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
//     }, MaskManager.prototype.pushScissorMask = function pushScissorMask(e, t) {
//       t.renderable = !0;
//       var i = this.renderer._activeRenderTarget, r = t.getBounds();
//       r.fit(i.size), t.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
//       var n = this.renderer.resolution;
//       this.renderer.gl.scissor(r.x * n, (i.root ? i.size.height - r.y - r.height : r.y) * n, r.width * n, r.height * n), this.scissorRenderTarget = i, this.scissorData = t, this.scissor = !0
//     }, MaskManager.prototype.popScissorMask = function popScissorMask() {
//       this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
//       var e = this.renderer.gl;
//       e.disable(e.SCISSOR_TEST)
//     }, MaskManager
//   }(r.default);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function extractUniformsFromSrc(e, t, i) {
//     var r = extractUniformsFromString(e), n = extractUniformsFromString(t);
//     return Object.assign(r, n)
//   };
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(9)).default.shader.defaultValue;
//
//   function extractUniformsFromString(e) {
//     for (var t = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"), i = {}, n = void 0, o = e.replace(/\s+/g, " ").split(/\s*;\s*/), s = 0; s < o.length; s++) {
//       var a = o[s].trim();
//       if (a.indexOf("uniform") > -1) {
//         var l = a.split(" "), u = l[1], c = l[2], h = 1;
//         c.indexOf("[") > -1 && (c = (n = c.split(/\[|]/))[0], h *= Number(n[1])), c.match(t) || (i[c] = {
//           value: r(u, h),
//           name: c,
//           type: u
//         })
//       }
//     }
//     return i
//   }
// }
//
// ,
//
// function (e, t) {
//   var i, r, n = e.exports = {};
//
//   function defaultSetTimout() {
//     throw new Error("setTimeout has not been defined")
//   }
//
//   function defaultClearTimeout() {
//     throw new Error("clearTimeout has not been defined")
//   }
//
//   function runTimeout(e) {
//     if (i === setTimeout) return setTimeout(e, 0);
//     if ((i === defaultSetTimout || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
//     try {
//       return i(e, 0)
//     } catch (t) {
//       try {
//         return i.call(null, e, 0)
//       } catch (t) {
//         return i.call(this, e, 0)
//       }
//     }
//   }
//
//   !function () {
//     try {
//       i = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
//     } catch (e) {
//       i = defaultSetTimout
//     }
//     try {
//       r = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
//     } catch (e) {
//       r = defaultClearTimeout
//     }
//   }();
//   var o, s = [], a = !1, l = -1;
//
//   function cleanUpNextTick() {
//     a && o && (a = !1, o.length ? s = o.concat(s) : l = -1, s.length && drainQueue())
//   }
//
//   function drainQueue() {
//     if (!a) {
//       var e = runTimeout(cleanUpNextTick);
//       a = !0;
//       for (var t = s.length; t;) {
//         for (o = s, s = []; ++l < t;) o && o[l].run();
//         l = -1, t = s.length
//       }
//       o = null, a = !1, function runClearTimeout(e) {
//         if (r === clearTimeout) return clearTimeout(e);
//         if ((r === defaultClearTimeout || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
//         try {
//           return r(e)
//         } catch (t) {
//           try {
//             return r.call(null, e)
//           } catch (t) {
//             return r.call(this, e)
//           }
//         }
//       }(e)
//     }
//   }
//
//   function Item(e, t) {
//     this.fun = e, this.array = t
//   }
//
//   function noop() {
//   }
//
//   n.nextTick = function (e) {
//     var t = new Array(arguments.length - 1);
//     if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
//     s.push(new Item(e, t)), 1 !== s.length || a || runTimeout(drainQueue)
//   }, Item.prototype.run = function () {
//     this.fun.apply(null, this.array)
//   }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = noop, n.addListener = noop, n.once = noop, n.off = noop, n.removeListener = noop, n.removeAllListeners = noop, n.emit = noop, n.prependListener = noop, n.prependOnceListener = noop, n.listeners = function (e) {
//     return []
//   }, n.binding = function (e) {
//     throw new Error("process.binding is not supported")
//   }, n.cwd = function () {
//     return "/"
//   }, n.chdir = function (e) {
//     throw new Error("process.chdir is not supported")
//   }, n.umask = function () {
//     return 0
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(22));
//   var n = function (e) {
//     function StencilManager(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, StencilManager);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.stencilMaskStack = null, i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(StencilManager, e), StencilManager.prototype.setMaskStack = function setMaskStack(e) {
//       this.stencilMaskStack = e;
//       var t = this.renderer.gl;
//       0 === e.length ? t.disable(t.STENCIL_TEST) : t.enable(t.STENCIL_TEST)
//     }, StencilManager.prototype.pushStencil = function pushStencil(e) {
//       this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
//       var t = this.renderer.gl, i = this.stencilMaskStack.length;
//       0 === i && t.enable(t.STENCIL_TEST), this.stencilMaskStack.push(e), t.colorMask(!1, !1, !1, !1), t.stencilFunc(t.EQUAL, i, this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.INCR), this.renderer.plugins.graphics.render(e), this._useCurrent()
//     }, StencilManager.prototype.popStencil = function popStencil() {
//       this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
//       var e = this.renderer.gl, t = this.stencilMaskStack.pop();
//       0 === this.stencilMaskStack.length ? (e.disable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.clearStencil(0)) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), this.renderer.plugins.graphics.render(t), this._useCurrent())
//     }, StencilManager.prototype._useCurrent = function _useCurrent() {
//       var e = this.renderer.gl;
//       e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
//     }, StencilManager.prototype._getBitwiseMask = function _getBitwiseMask() {
//       return (1 << this.stencilMaskStack.length) - 1
//     }, StencilManager.prototype.destroy = function destroy() {
//       r.default.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
//     }, StencilManager
//   }(r.default);
//   t.default = n
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(22)), n = _interopRequireDefault(i(29)), o = _interopRequireDefault(i(77)), s = i(7),
//     a = _interopRequireDefault(i(23)), l = function _interopRequireWildcard(e) {
//       if (e && e.__esModule) return e;
//       var t = {};
//       if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//       return t.default = e, t
//     }(i(171)), u = _interopRequireDefault(i(42));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   function _classCallCheck(e, t) {
//     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//   }
//
//   var c = function () {
//     function FilterState() {
//       _classCallCheck(this, FilterState), this.renderTarget = null, this.target = null, this.resolution = 1, this.sourceFrame = new s.Rectangle, this.destinationFrame = new s.Rectangle, this.filters = []
//     }
//
//     return FilterState.prototype.clear = function clear() {
//       this.filters = null, this.target = null, this.renderTarget = null
//     }, FilterState
//   }(), h = function (e) {
//     function FilterManager(t) {
//       _classCallCheck(this, FilterManager);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.gl = i.renderer.gl, i.quad = new o.default(i.gl, t.state.attribState), i.shaderCache = {}, i.pool = {}, i.filterData = null, i.managedFilters = [], i.renderer.on("prerender", i.onPrerender, i), i._screenWidth = t.view.width, i._screenHeight = t.view.height, i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(FilterManager, e), FilterManager.prototype.pushFilter = function pushFilter(e, t) {
//       var i = this.renderer, r = this.filterData;
//       if (!r) {
//         r = this.renderer._activeRenderTarget.filterStack;
//         var n = new c;
//         n.sourceFrame = n.destinationFrame = this.renderer._activeRenderTarget.size, n.renderTarget = i._activeRenderTarget, this.renderer._activeRenderTarget.filterData = r = {
//           index: 0,
//           stack: [n]
//         }, this.filterData = r
//       }
//       var o = r.stack[++r.index], s = r.stack[0].destinationFrame;
//       o || (o = r.stack[r.index] = new c);
//       var a = e.filterArea && 0 === e.filterArea.x && 0 === e.filterArea.y && e.filterArea.width === i.screen.width && e.filterArea.height === i.screen.height,
//         l = t[0].resolution, u = 0 | t[0].padding, h = a ? i.screen : e.filterArea || e.getBounds(!0),
//         d = o.sourceFrame, f = o.destinationFrame;
//       d.x = (h.x * l | 0) / l, d.y = (h.y * l | 0) / l, d.width = (h.width * l | 0) / l, d.height = (h.height * l | 0) / l, a || (r.stack[0].renderTarget.transform || t[0].autoFit && d.fit(s), d.pad(u)), f.width = d.width, f.height = d.height;
//       var p = this.getPotRenderTarget(i.gl, d.width, d.height, l);
//       o.target = e, o.filters = t, o.resolution = l, o.renderTarget = p, p.setFrame(f, d), i.bindRenderTarget(p), p.clear()
//     }, FilterManager.prototype.popFilter = function popFilter() {
//       var e = this.filterData, t = e.stack[e.index - 1], i = e.stack[e.index];
//       this.quad.map(i.renderTarget.size, i.sourceFrame).upload();
//       var r = i.filters;
//       if (1 === r.length) r[0].apply(this, i.renderTarget, t.renderTarget, !1, i), this.freePotRenderTarget(i.renderTarget); else {
//         var n = i.renderTarget,
//           o = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, i.resolution);
//         o.setFrame(i.destinationFrame, i.sourceFrame), o.clear();
//         var s = 0;
//         for (s = 0; s < r.length - 1; ++s) {
//           r[s].apply(this, n, o, !0, i);
//           var a = n;
//           n = o, o = a
//         }
//         r[s].apply(this, n, t.renderTarget, !1, i), this.freePotRenderTarget(n), this.freePotRenderTarget(o)
//       }
//       i.clear(), e.index--, 0 === e.index && (this.filterData = null)
//     }, FilterManager.prototype.applyFilter = function applyFilter(e, t, i, r) {
//       var n = this.renderer, o = n.gl, s = e.glShaders[n.CONTEXT_UID];
//       s || (e.glShaderKey ? (s = this.shaderCache[e.glShaderKey]) || (s = new a.default(this.gl, e.vertexSrc, e.fragmentSrc), e.glShaders[n.CONTEXT_UID] = this.shaderCache[e.glShaderKey] = s, this.managedFilters.push(e)) : (s = e.glShaders[n.CONTEXT_UID] = new a.default(this.gl, e.vertexSrc, e.fragmentSrc), this.managedFilters.push(e)), n.bindVao(null), this.quad.initVao(s)), n.bindVao(this.quad.vao), n.bindRenderTarget(i), r && (o.disable(o.SCISSOR_TEST), n.clear(), o.enable(o.SCISSOR_TEST)), i === n.maskManager.scissorRenderTarget && n.maskManager.pushScissorMask(null, n.maskManager.scissorData), n.bindShader(s);
//       var l = this.renderer.emptyTextures[0];
//       this.renderer.boundTextures[0] = l, this.syncUniforms(s, e), n.state.setBlendMode(e.blendMode), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, t.texture.texture), this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0), o.bindTexture(o.TEXTURE_2D, l._glTextures[this.renderer.CONTEXT_UID].texture)
//     }, FilterManager.prototype.syncUniforms = function syncUniforms(e, t) {
//       var i = t.uniformData, r = t.uniforms, n = 1, o = void 0;
//       if (e.uniforms.filterArea) {
//         o = this.filterData.stack[this.filterData.index];
//         var s = e.uniforms.filterArea;
//         s[0] = o.renderTarget.size.width, s[1] = o.renderTarget.size.height, s[2] = o.sourceFrame.x, s[3] = o.sourceFrame.y, e.uniforms.filterArea = s
//       }
//       if (e.uniforms.filterClamp) {
//         o = o || this.filterData.stack[this.filterData.index];
//         var a = e.uniforms.filterClamp;
//         a[0] = 0, a[1] = 0, a[2] = (o.sourceFrame.width - 1) / o.renderTarget.size.width, a[3] = (o.sourceFrame.height - 1) / o.renderTarget.size.height, e.uniforms.filterClamp = a
//       }
//       for (var l in i) {
//         var u = i[l].type;
//         if ("sampler2d" === u && 0 !== r[l]) {
//           if (r[l].baseTexture) e.uniforms[l] = this.renderer.bindTexture(r[l].baseTexture, n); else {
//             e.uniforms[l] = n;
//             var c = this.renderer.gl;
//             this.renderer.boundTextures[n] = this.renderer.emptyTextures[n], c.activeTexture(c.TEXTURE0 + n), r[l].texture.bind()
//           }
//           n++
//         } else if ("mat3" === u) void 0 !== r[l].a ? e.uniforms[l] = r[l].toArray(!0) : e.uniforms[l] = r[l]; else if ("vec2" === u) if (void 0 !== r[l].x) {
//           var h = e.uniforms[l] || new Float32Array(2);
//           h[0] = r[l].x, h[1] = r[l].y, e.uniforms[l] = h
//         } else e.uniforms[l] = r[l]; else "float" === u ? e.uniforms.data[l].value !== i[l] && (e.uniforms[l] = r[l]) : e.uniforms[l] = r[l]
//       }
//     }, FilterManager.prototype.getRenderTarget = function getRenderTarget(e, t) {
//       var i = this.filterData.stack[this.filterData.index],
//         r = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, t || i.resolution);
//       return r.setFrame(i.destinationFrame, i.sourceFrame), r
//     }, FilterManager.prototype.returnRenderTarget = function returnRenderTarget(e) {
//       this.freePotRenderTarget(e)
//     }, FilterManager.prototype.calculateScreenSpaceMatrix = function calculateScreenSpaceMatrix(e) {
//       var t = this.filterData.stack[this.filterData.index];
//       return l.calculateScreenSpaceMatrix(e, t.sourceFrame, t.renderTarget.size)
//     }, FilterManager.prototype.calculateNormalizedScreenSpaceMatrix = function calculateNormalizedScreenSpaceMatrix(e) {
//       var t = this.filterData.stack[this.filterData.index];
//       return l.calculateNormalizedScreenSpaceMatrix(e, t.sourceFrame, t.renderTarget.size, t.destinationFrame)
//     }, FilterManager.prototype.calculateSpriteMatrix = function calculateSpriteMatrix(e, t) {
//       var i = this.filterData.stack[this.filterData.index];
//       return l.calculateSpriteMatrix(e, i.sourceFrame, i.renderTarget.size, t)
//     }, FilterManager.prototype.destroy = function destroy() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.renderer,
//         i = this.managedFilters;
//       t.off("prerender", this.onPrerender, this);
//       for (var r = 0; r < i.length; r++) e || i[r].glShaders[t.CONTEXT_UID].destroy(), delete i[r].glShaders[t.CONTEXT_UID];
//       this.shaderCache = {}, e ? this.pool = {} : this.emptyPool()
//     }, FilterManager.prototype.getPotRenderTarget = function getPotRenderTarget(e, t, i, r) {
//       var o = "screen";
//       i *= r, (t *= r) === this._screenWidth && i === this._screenHeight || (o = (65535 & (t = u.default.nextPow2(t))) << 16 | 65535 & (i = u.default.nextPow2(i))), this.pool[o] || (this.pool[o] = []);
//       var s = this.pool[o].pop();
//       if (!s) {
//         var a = this.renderer.boundTextures[0];
//         e.activeTexture(e.TEXTURE0), s = new n.default(e, t, i, null, 1), e.bindTexture(e.TEXTURE_2D, a._glTextures[this.renderer.CONTEXT_UID].texture)
//       }
//       return s.resolution = r, s.defaultFrame.width = s.size.width = t / r, s.defaultFrame.height = s.size.height = i / r, s.filterPoolKey = o, s
//     }, FilterManager.prototype.emptyPool = function emptyPool() {
//       for (var e in this.pool) {
//         var t = this.pool[e];
//         if (t) for (var i = 0; i < t.length; i++) t[i].destroy(!0)
//       }
//       this.pool = {}
//     }, FilterManager.prototype.freePotRenderTarget = function freePotRenderTarget(e) {
//       this.pool[e.filterPoolKey].push(e)
//     }, FilterManager.prototype.onPrerender = function onPrerender() {
//       if (this._screenWidth !== this.renderer.view.width || this._screenHeight !== this.renderer.view.height) {
//         this._screenWidth = this.renderer.view.width, this._screenHeight = this.renderer.view.height;
//         var e = this.pool.screen;
//         if (e) for (var t = 0; t < e.length; t++) e[t].destroy(!0);
//         this.pool.screen = []
//       }
//     }, FilterManager
//   }(r.default);
//   t.default = h
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.calculateScreenSpaceMatrix = function calculateScreenSpaceMatrix(e, t, i) {
//     var r = e.identity();
//     return r.translate(t.x / i.width, t.y / i.height), r.scale(i.width, i.height), r
//   }, t.calculateNormalizedScreenSpaceMatrix = function calculateNormalizedScreenSpaceMatrix(e, t, i) {
//     var r = e.identity();
//     r.translate(t.x / i.width, t.y / i.height);
//     var n = i.width / t.width, o = i.height / t.height;
//     return r.scale(n, o), r
//   }, t.calculateSpriteMatrix = function calculateSpriteMatrix(e, t, i, n) {
//     var o = n._texture.orig, s = e.set(i.width, 0, 0, i.height, t.x, t.y),
//       a = n.worldTransform.copy(r.Matrix.TEMP_MATRIX);
//     return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(n.anchor.x, n.anchor.y), s
//   };
//   var r = i(7)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(9), n = i(1), o = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(29)), s = i(3);
//   var a = function () {
//     function TextureManager(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TextureManager), this.renderer = e, this.gl = e.gl, this._managedTextures = []
//     }
//
//     return TextureManager.prototype.bindTexture = function bindTexture() {
//     }, TextureManager.prototype.getTexture = function getTexture() {
//     }, TextureManager.prototype.updateTexture = function updateTexture(e, t) {
//       var i = this.gl, s = !!e._glRenderTargets;
//       if (!e.hasLoaded) return null;
//       var a = this.renderer.boundTextures;
//       if (void 0 === t) {
//         t = 0;
//         for (var l = 0; l < a.length; ++l) if (a[l] === e) {
//           t = l;
//           break
//         }
//       }
//       a[t] = e, i.activeTexture(i.TEXTURE0 + t);
//       var u = e._glTextures[this.renderer.CONTEXT_UID];
//       if (u) s ? e._glRenderTargets[this.renderer.CONTEXT_UID].resize(e.width, e.height) : u.upload(e.source); else {
//         if (s) {
//           var c = new o.default(this.gl, e.width, e.height, e.scaleMode, e.resolution);
//           c.resize(e.width, e.height), e._glRenderTargets[this.renderer.CONTEXT_UID] = c, u = c.texture
//         } else (u = new r.GLTexture(this.gl, null, null, null, null)).bind(t), u.premultiplyAlpha = !0, u.upload(e.source);
//         e._glTextures[this.renderer.CONTEXT_UID] = u, e.on("update", this.updateTexture, this), e.on("dispose", this.destroyTexture, this), this._managedTextures.push(e), e.isPowerOfTwo ? (e.mipmap && u.enableMipmap(), e.wrapMode === n.WRAP_MODES.CLAMP ? u.enableWrapClamp() : e.wrapMode === n.WRAP_MODES.REPEAT ? u.enableWrapRepeat() : u.enableWrapMirrorRepeat()) : u.enableWrapClamp(), e.scaleMode === n.SCALE_MODES.NEAREST ? u.enableNearestScaling() : u.enableLinearScaling()
//       }
//       return u
//     }, TextureManager.prototype.destroyTexture = function destroyTexture(e, t) {
//       if ((e = e.baseTexture || e).hasLoaded) {
//         var i = this.renderer.CONTEXT_UID, r = e._glTextures, n = e._glRenderTargets;
//         if (r[i] && (this.renderer.unbindTexture(e), r[i].destroy(), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this), delete r[i], !t)) {
//           var o = this._managedTextures.indexOf(e);
//           -1 !== o && (0, s.removeItems)(this._managedTextures, o, 1)
//         }
//         n && n[i] && (n[i].destroy(), delete n[i])
//       }
//     }, TextureManager.prototype.removeAll = function removeAll() {
//       for (var e = 0; e < this._managedTextures.length; ++e) {
//         var t = this._managedTextures[e];
//         t._glTextures[this.renderer.CONTEXT_UID] && delete t._glTextures[this.renderer.CONTEXT_UID]
//       }
//     }, TextureManager.prototype.destroy = function destroy() {
//       for (var e = 0; e < this._managedTextures.length; ++e) {
//         var t = this._managedTextures[e];
//         this.destroyTexture(t, !0), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this)
//       }
//       this._managedTextures = null
//     }, TextureManager
//   }();
//   t.default = a
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(1), n = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(5));
//   var o = function () {
//     function TextureGarbageCollector(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TextureGarbageCollector), this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = n.default.GC_MAX_IDLE, this.checkCountMax = n.default.GC_MAX_CHECK_COUNT, this.mode = n.default.GC_MODE
//     }
//
//     return TextureGarbageCollector.prototype.update = function update() {
//       this.count++, this.mode !== r.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
//     }, TextureGarbageCollector.prototype.run = function run() {
//       for (var e = this.renderer.textureManager, t = e._managedTextures, i = !1, r = 0; r < t.length; r++) {
//         var n = t[r];
//         !n._glRenderTargets && this.count - n.touched > this.maxIdle && (e.destroyTexture(n, !0), t[r] = null, i = !0)
//       }
//       if (i) {
//         for (var o = 0, s = 0; s < t.length; s++) null !== t[s] && (t[o++] = t[s]);
//         t.length = o
//       }
//     }, TextureGarbageCollector.prototype.unload = function unload(e) {
//       var t = this.renderer.textureManager;
//       e._texture && e._texture._glRenderTargets && t.destroyTexture(e._texture, !0);
//       for (var i = e.children.length - 1; i >= 0; i--) this.unload(e.children[i])
//     }, TextureGarbageCollector
//   }();
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(175));
//   var n = function () {
//     function WebGLState(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, WebGLState), this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = e, this.maxAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.attribState = {
//         tempAttribState: new Array(this.maxAttribs),
//         attribState: new Array(this.maxAttribs)
//       }, this.blendModes = (0, r.default)(e), this.nativeVaoExtension = e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object")
//     }
//
//     return WebGLState.prototype.push = function push() {
//       var e = this.stack[this.stackIndex];
//       e || (e = this.stack[this.stackIndex] = new Uint8Array(16)), ++this.stackIndex;
//       for (var t = 0; t < this.activeState.length; t++) e[t] = this.activeState[t]
//     }, WebGLState.prototype.pop = function pop() {
//       var e = this.stack[--this.stackIndex];
//       this.setState(e)
//     }, WebGLState.prototype.setState = function setState(e) {
//       this.setBlend(e[0]), this.setDepthTest(e[1]), this.setFrontFace(e[2]), this.setCullFace(e[3]), this.setBlendMode(e[4])
//     }, WebGLState.prototype.setBlend = function setBlend(e) {
//       e = e ? 1 : 0, this.activeState[0] !== e && (this.activeState[0] = e, this.gl[e ? "enable" : "disable"](this.gl.BLEND))
//     }, WebGLState.prototype.setBlendMode = function setBlendMode(e) {
//       if (e !== this.activeState[4]) {
//         this.activeState[4] = e;
//         var t = this.blendModes[e];
//         2 === t.length ? this.gl.blendFunc(t[0], t[1]) : this.gl.blendFuncSeparate(t[0], t[1], t[2], t[3])
//       }
//     }, WebGLState.prototype.setDepthTest = function setDepthTest(e) {
//       e = e ? 1 : 0, this.activeState[1] !== e && (this.activeState[1] = e, this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST))
//     }, WebGLState.prototype.setCullFace = function setCullFace(e) {
//       e = e ? 1 : 0, this.activeState[3] !== e && (this.activeState[3] = e, this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE))
//     }, WebGLState.prototype.setFrontFace = function setFrontFace(e) {
//       e = e ? 1 : 0, this.activeState[2] !== e && (this.activeState[2] = e, this.gl.frontFace(this.gl[e ? "CW" : "CCW"]))
//     }, WebGLState.prototype.resetAttributes = function resetAttributes() {
//       for (var e = 0; e < this.attribState.tempAttribState.length; e++) this.attribState.tempAttribState[e] = 0;
//       for (var t = 0; t < this.attribState.attribState.length; t++) this.attribState.attribState[t] = 0;
//       for (var i = 1; i < this.maxAttribs; i++) this.gl.disableVertexAttribArray(i)
//     }, WebGLState.prototype.resetToDefault = function resetToDefault() {
//       this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
//       for (var e = 0; e < this.activeState.length; ++e) this.activeState[e] = 32;
//       this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
//     }, WebGLState
//   }();
//   t.default = n
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function mapWebGLBlendModesToPixi(e) {
//     var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
//     return t[r.BLEND_MODES.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.ADD] = [e.ONE, e.DST_ALPHA], t[r.BLEND_MODES.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR], t[r.BLEND_MODES.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[r.BLEND_MODES.ADD_NPM] = [e.SRC_ALPHA, e.DST_ALPHA, e.ONE, e.DST_ALPHA], t[r.BLEND_MODES.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_COLOR], t
//   };
//   var r = i(1)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function mapWebGLDrawModesToPixi(e) {
//     var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//     return t[r.DRAW_MODES.POINTS] = e.POINTS, t[r.DRAW_MODES.LINES] = e.LINES, t[r.DRAW_MODES.LINE_LOOP] = e.LINE_LOOP, t[r.DRAW_MODES.LINE_STRIP] = e.LINE_STRIP, t[r.DRAW_MODES.TRIANGLES] = e.TRIANGLES, t[r.DRAW_MODES.TRIANGLE_STRIP] = e.TRIANGLE_STRIP, t[r.DRAW_MODES.TRIANGLE_FAN] = e.TRIANGLE_FAN, t
//   };
//   var r = i(1)
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = function validateContext(e) {
//     e.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function generateMultiTextureShader(e, t) {
//     var i = n;
//     i = (i = i.replace(/%count%/gi, t)).replace(/%forloop%/gi, function generateSampleSrc(e) {
//       var t = "";
//       t += "\n", t += "\n";
//       for (var i = 0; i < e; i++) i > 0 && (t += "\nelse "), i < e - 1 && (t += "if(textureId == " + i + ".0)"), t += "\n{", t += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);", t += "\n}";
//       return t += "\n", t += "\n"
//     }(t));
//     for (var o = new r.default(e, "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n", i), s = [], a = 0; a < t; a++) s[a] = a;
//     return o.bind(), o.uniforms.uSamplers = s, o
//   };
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(23));
//   i(11);
//   var n = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n")
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function checkMaxIfStatmentsInShader(e, t) {
//     var i = !t;
//     if (0 === e) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
//     if (i) {
//       var o = document.createElement("canvas");
//       o.width = 1, o.height = 1, t = r.default.createContext(o)
//     }
//     var s = t.createShader(t.FRAGMENT_SHADER);
//     while (!0) {
//       var a = n.replace(/%forloop%/gi, generateIfTestSrc(e));
//       if (t.shaderSource(s, a), t.compileShader(s), t.getShaderParameter(s, t.COMPILE_STATUS)) break;
//       e = e / 2 | 0
//     }
//     i && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").loseContext();
//     return e
//   };
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(9));
//   var n = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");
//
//   function generateIfTestSrc(e) {
//     for (var t = "", i = 0; i < e; ++i) i > 0 && (t += "\nelse "), i < e - 1 && (t += "if(test == " + i + ".0){}");
//     return t
//   }
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function Buffer(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Buffer), this.vertices = new ArrayBuffer(e), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
//     }
//
//     return Buffer.prototype.destroy = function destroy() {
//       this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
//     }, Buffer
//   }();
//   t.default = i
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//       function defineProperties(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var r = t[i];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//         }
//       }
//
//       return function (e, t, i) {
//         return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//       }
//     }(), n = _interopRequireDefault(i(41)), o = _interopRequireDefault(i(14)), s = i(7), a = i(3), l = i(1),
//     u = _interopRequireDefault(i(5)), c = _interopRequireDefault(i(78)), h = _interopRequireDefault(i(79)),
//     d = _interopRequireDefault(i(182));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var f = {texture: !0, children: !1, baseTexture: !0}, p = function (e) {
//     function Text(t, i, r) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Text), (r = r || document.createElement("canvas")).width = 3, r.height = 3;
//       var n = o.default.fromCanvas(r, u.default.SCALE_MODE, "text");
//       n.orig = new s.Rectangle, n.trim = new s.Rectangle;
//       var a = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, n));
//       return o.default.addToCache(a._texture, a._texture.baseTexture.textureCacheIds[0]), a.canvas = r, a.context = a.canvas.getContext("2d"), a.resolution = u.default.RESOLUTION, a._text = null, a._style = null, a._styleListener = null, a._font = "", a.text = t, a.style = i, a.localStyleID = -1, a
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(Text, e), Text.prototype.updateText = function updateText(e) {
//       var t = this._style;
//       if (this.localStyleID !== t.styleID && (this.dirty = !0, this.localStyleID = t.styleID), this.dirty || !e) {
//         this._font = this._style.toFontString();
//         var i = this.context, r = h.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas),
//           n = r.width, o = r.height, s = r.lines, a = r.lineHeight, l = r.lineWidths, u = r.maxLineWidth,
//           c = r.fontProperties;
//         this.canvas.width = Math.ceil((Math.max(1, n) + 2 * t.padding) * this.resolution), this.canvas.height = Math.ceil((Math.max(1, o) + 2 * t.padding) * this.resolution), i.scale(this.resolution, this.resolution), i.clearRect(0, 0, this.canvas.width, this.canvas.height), i.font = this._font, i.strokeStyle = t.stroke, i.lineWidth = t.strokeThickness, i.textBaseline = t.textBaseline, i.lineJoin = t.lineJoin, i.miterLimit = t.miterLimit;
//         var d = void 0, f = void 0;
//         if (t.dropShadow) {
//           i.fillStyle = t.dropShadowColor, i.globalAlpha = t.dropShadowAlpha, i.shadowBlur = t.dropShadowBlur, t.dropShadowBlur > 0 && (i.shadowColor = t.dropShadowColor);
//           for (var p = Math.cos(t.dropShadowAngle) * t.dropShadowDistance, g = Math.sin(t.dropShadowAngle) * t.dropShadowDistance, m = 0; m < s.length; m++) d = t.strokeThickness / 2, f = t.strokeThickness / 2 + m * a + c.ascent, "right" === t.align ? d += u - l[m] : "center" === t.align && (d += (u - l[m]) / 2), t.fill && (this.drawLetterSpacing(s[m], d + p + t.padding, f + g + t.padding), t.stroke && t.strokeThickness && (i.strokeStyle = t.dropShadowColor, this.drawLetterSpacing(s[m], d + p + t.padding, f + g + t.padding, !0), i.strokeStyle = t.stroke))
//         }
//         i.shadowBlur = 0, i.globalAlpha = 1, i.fillStyle = this._generateFillStyle(t, s);
//         for (var v = 0; v < s.length; v++) d = t.strokeThickness / 2, f = t.strokeThickness / 2 + v * a + c.ascent, "right" === t.align ? d += u - l[v] : "center" === t.align && (d += (u - l[v]) / 2), t.stroke && t.strokeThickness && this.drawLetterSpacing(s[v], d + t.padding, f + t.padding, !0), t.fill && this.drawLetterSpacing(s[v], d + t.padding, f + t.padding);
//         this.updateTexture()
//       }
//     }, Text.prototype.drawLetterSpacing = function drawLetterSpacing(e, t, i) {
//       var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], n = this._style.letterSpacing;
//       if (0 !== n) for (var o = String.prototype.split.call(e, ""), s = t, a = 0, l = ""; a < e.length;) l = o[a++], r ? this.context.strokeText(l, s, i) : this.context.fillText(l, s, i), s += this.context.measureText(l).width + n; else r ? this.context.strokeText(e, t, i) : this.context.fillText(e, t, i)
//     }, Text.prototype.updateTexture = function updateTexture() {
//       var e = this.canvas;
//       if (this._style.trim) {
//         var t = (0, d.default)(e);
//         t.data && (e.width = t.width, e.height = t.height, this.context.putImageData(t.data, 0, 0))
//       }
//       var i = this._texture, r = this._style, n = r.trim ? 0 : r.padding, o = i.baseTexture;
//       o.hasLoaded = !0, o.resolution = this.resolution, o.realWidth = e.width, o.realHeight = e.height, o.width = e.width / this.resolution, o.height = e.height / this.resolution, i.trim.width = i._frame.width = e.width / this.resolution, i.trim.height = i._frame.height = e.height / this.resolution, i.trim.x = -n, i.trim.y = -n, i.orig.width = i._frame.width - 2 * n, i.orig.height = i._frame.height - 2 * n, this._onTextureUpdate(), o.emit("update", o), this.dirty = !1
//     }, Text.prototype.renderWebGL = function renderWebGL(t) {
//       this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), e.prototype.renderWebGL.call(this, t)
//     }, Text.prototype._renderCanvas = function _renderCanvas(t) {
//       this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), e.prototype._renderCanvas.call(this, t)
//     }, Text.prototype.getLocalBounds = function getLocalBounds(t) {
//       return this.updateText(!0), e.prototype.getLocalBounds.call(this, t)
//     }, Text.prototype._calculateBounds = function _calculateBounds() {
//       this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
//     }, Text.prototype._onStyleChange = function _onStyleChange() {
//       this.dirty = !0
//     }, Text.prototype._generateFillStyle = function _generateFillStyle(e, t) {
//       if (!Array.isArray(e.fill)) return e.fill;
//       if (navigator.isCocoonJS) return e.fill[0];
//       var i = void 0, r = void 0, n = void 0, o = void 0, s = this.canvas.width / this.resolution,
//         a = this.canvas.height / this.resolution, u = e.fill.slice(), c = e.fillGradientStops.slice();
//       if (!c.length) for (var h = u.length + 1, d = 1; d < h; ++d) c.push(d / h);
//       if (u.unshift(e.fill[0]), c.unshift(0), u.push(e.fill[e.fill.length - 1]), c.push(1), e.fillGradientType === l.TEXT_GRADIENT.LINEAR_VERTICAL) {
//         i = this.context.createLinearGradient(s / 2, 0, s / 2, a), r = (u.length + 1) * t.length, n = 0;
//         for (var f = 0; f < t.length; f++) {
//           n += 1;
//           for (var p = 0; p < u.length; p++) o = "number" == typeof c[p] ? c[p] / t.length + f / t.length : n / r, i.addColorStop(o, u[p]), n++
//         }
//       } else {
//         i = this.context.createLinearGradient(0, a / 2, s, a / 2), r = u.length + 1, n = 1;
//         for (var g = 0; g < u.length; g++) o = "number" == typeof c[g] ? c[g] : n / r, i.addColorStop(o, u[g]), n++
//       }
//       return i
//     }, Text.prototype.destroy = function destroy(t) {
//       "boolean" == typeof t && (t = {children: t}), t = Object.assign({}, f, t), e.prototype.destroy.call(this, t), this.context = null, this.canvas = null, this._style = null
//     }, r(Text, [{
//       key: "width", get: function get() {
//         return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
//       }, set: function set(e) {
//         this.updateText(!0);
//         var t = (0, a.sign)(this.scale.x) || 1;
//         this.scale.x = t * e / this._texture.orig.width, this._width = e
//       }
//     }, {
//       key: "height", get: function get() {
//         return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
//       }, set: function set(e) {
//         this.updateText(!0);
//         var t = (0, a.sign)(this.scale.y) || 1;
//         this.scale.y = t * e / this._texture.orig.height, this._height = e
//       }
//     }, {
//       key: "style", get: function get() {
//         return this._style
//       }, set: function set(e) {
//         (e = e || {}) instanceof c.default ? this._style = e : this._style = new c.default(e), this.localStyleID = -1, this.dirty = !0
//       }
//     }, {
//       key: "text", get: function get() {
//         return this._text
//       }, set: function set(e) {
//         e = String("" === e || null === e || void 0 === e ? " " : e), this._text !== e && (this._text = e, this.dirty = !0)
//       }
//     }]), Text
//   }(n.default);
//   t.default = p
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = function trimCanvas(e) {
//     var t = e.width, i = e.height, r = e.getContext("2d"), n = r.getImageData(0, 0, t, i).data, o = n.length,
//       s = {top: null, left: null, right: null, bottom: null}, a = null, l = void 0, u = void 0, c = void 0;
//     for (l = 0; l < o; l += 4) 0 !== n[l + 3] && (u = l / 4 % t, c = ~~(l / 4 / t), null === s.top && (s.top = c), null === s.left ? s.left = u : u < s.left && (s.left = u), null === s.right ? s.right = u + 1 : s.right < u && (s.right = u + 1), null === s.bottom ? s.bottom = c : s.bottom < c && (s.bottom = c));
//     null !== s.top && (t = s.right - s.left, i = s.bottom - s.top + 1, a = r.getImageData(s.left, s.top, t, i));
//     return {height: i, width: t, data: a}
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(20)), n = _interopRequireDefault(i(44)), o = _interopRequireDefault(i(14)),
//     s = _interopRequireDefault(i(80)), a = _interopRequireDefault(i(41)), l = i(7), u = i(3), c = i(1),
//     h = _interopRequireDefault(i(37)), d = _interopRequireDefault(i(184)), f = _interopRequireDefault(i(21));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var p = void 0, g = new l.Matrix, m = new l.Point, v = new Float32Array(4), y = new Float32Array(4),
//     _ = function (e) {
//       function Graphics() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
//         !function _classCallCheck(e, t) {
//           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//         }(this, Graphics);
//         var i = function _possibleConstructorReturn(e, t) {
//           if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//           return !t || "object" != typeof t && "function" != typeof t ? e : t
//         }(this, e.call(this));
//         return i.fillAlpha = 1, i.lineWidth = 0, i.nativeLines = t, i.lineColor = 0, i.lineAlignment = .5, i.graphicsData = [], i.tint = 16777215, i._prevTint = 16777215, i.blendMode = c.BLEND_MODES.NORMAL, i.currentPath = null, i._webGL = {}, i.isMask = !1, i.boundsPadding = 0, i._localBounds = new h.default, i.dirty = 0, i.fastRectDirty = -1, i.clearDirty = 0, i.boundsDirty = -1, i.cachedSpriteDirty = !1, i._spriteRect = null, i._fastRect = !1, i._prevRectTint = null, i._prevRectFillColor = null, i
//       }
//
//       return function _inherits(e, t) {
//         if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//         e.prototype = Object.create(t && t.prototype, {
//           constructor: {
//             value: e,
//             enumerable: !1,
//             writable: !0,
//             configurable: !0
//           }
//         }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//       }(Graphics, e), Graphics.prototype.clone = function clone() {
//         var clone = new Graphics;
//         clone.renderable = this.renderable, clone.fillAlpha = this.fillAlpha, clone.lineWidth = this.lineWidth, clone.lineColor = this.lineColor, clone.lineAlignment = this.lineAlignment, clone.tint = this.tint, clone.blendMode = this.blendMode, clone.isMask = this.isMask, clone.boundsPadding = this.boundsPadding, clone.dirty = 0, clone.cachedSpriteDirty = this.cachedSpriteDirty;
//         for (var e = 0; e < this.graphicsData.length; ++e) clone.graphicsData.push(this.graphicsData[e].clone());
//         return clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1], clone.updateLocalBounds(), clone
//       }, Graphics.prototype._quadraticCurveLength = function _quadraticCurveLength(e, t, i, r, n, o) {
//         var s = e - (2 * i + n), a = t - (2 * r + o), l = (i - 2) * e * 2, u = (r - 2) * t * 2, c = 4 * (s * s + a * a),
//           h = 4 * (s * l + a * u), d = l * l + u * u, f = 2 * Math.sqrt(c + h + d), p = Math.sqrt(c), g = 2 * c * p,
//           m = 2 * Math.sqrt(d), v = h / p;
//         return (g * f + p * h * (f - m) + (4 * d * c - h * h) * Math.log((2 * p + v + f) / (v + m))) / (4 * g)
//       }, Graphics.prototype._bezierCurveLength = function _bezierCurveLength(e, t, i, r, n, o, s, a) {
//         for (var l = 0, u = 0, c = 0, h = 0, d = 0, f = 0, p = 0, g = 0, m = 0, v = 0, y = 0, _ = e, b = t, x = 1; x <= 10; ++x) v = _ - (g = (p = (f = (d = 1 - (u = x / 10)) * d) * d) * e + 3 * f * u * i + 3 * d * (c = u * u) * n + (h = c * u) * s), y = b - (m = p * t + 3 * f * u * r + 3 * d * c * o + h * a), _ = g, b = m, l += Math.sqrt(v * v + y * y);
//         return l
//       }, Graphics.prototype._segmentsCount = function _segmentsCount(e) {
//         var t = Math.ceil(e / Graphics.CURVES.maxLength);
//         return t < Graphics.CURVES.minSegments ? t = Graphics.CURVES.minSegments : t > Graphics.CURVES.maxSegments && (t = Graphics.CURVES.maxSegments), t
//       }, Graphics.prototype.lineStyle = function lineStyle() {
//         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
//           t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
//           i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
//           r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
//         if (this.lineWidth = e, this.lineColor = t, this.lineAlpha = i, this.lineAlignment = r, this.currentPath) if (this.currentPath.shape.points.length) {
//           var n = new l.Polygon(this.currentPath.shape.points.slice(-2));
//           n.closed = !1, this.drawShape(n)
//         } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha, this.currentPath.lineAlignment = this.lineAlignment;
//         return this
//       }, Graphics.prototype.moveTo = function moveTo(e, t) {
//         var i = new l.Polygon([e, t]);
//         return i.closed = !1, this.drawShape(i), this
//       }, Graphics.prototype.lineTo = function lineTo(e, t) {
//         var i = this.currentPath.shape.points, r = i[i.length - 2], n = i[i.length - 1];
//         return r === e && n === t || (i.push(e, t), this.dirty++), this
//       }, Graphics.prototype.quadraticCurveTo = function quadraticCurveTo(e, t, i, r) {
//         this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
//         var n = this.currentPath.shape.points, o = 0, s = 0;
//         0 === n.length && this.moveTo(0, 0);
//         for (var a = n[n.length - 2], l = n[n.length - 1], u = Graphics.CURVES.adaptive ? this._segmentsCount(this._quadraticCurveLength(a, l, e, t, i, r)) : 20, c = 1; c <= u; ++c) {
//           var h = c / u;
//           o = a + (e - a) * h, s = l + (t - l) * h, n.push(o + (e + (i - e) * h - o) * h, s + (t + (r - t) * h - s) * h)
//         }
//         return this.dirty++, this
//       }, Graphics.prototype.bezierCurveTo = function bezierCurveTo(e, t, i, r, n, o) {
//         this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
//         var s = this.currentPath.shape.points, a = s[s.length - 2], l = s[s.length - 1];
//         s.length -= 2;
//         var u = Graphics.CURVES.adaptive ? this._segmentsCount(this._bezierCurveLength(a, l, e, t, i, r, n, o)) : 20;
//         return (0, d.default)(a, l, e, t, i, r, n, o, u, s), this.dirty++, this
//       }, Graphics.prototype.arcTo = function arcTo(e, t, i, r, n) {
//         this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(e, t) : this.moveTo(e, t);
//         var o = this.currentPath.shape.points, s = o[o.length - 2], a = o[o.length - 1] - t, l = s - e, u = r - t,
//           c = i - e, h = Math.abs(a * c - l * u);
//         if (h < 1e-8 || 0 === n) o[o.length - 2] === e && o[o.length - 1] === t || o.push(e, t); else {
//           var d = a * a + l * l, f = u * u + c * c, p = a * u + l * c, g = n * Math.sqrt(d) / h,
//             m = n * Math.sqrt(f) / h, v = g * p / d, y = m * p / f, _ = g * c + m * l, b = g * u + m * a,
//             x = l * (m + v), w = a * (m + v), T = c * (g + y), C = u * (g + y), S = Math.atan2(w - b, x - _),
//             E = Math.atan2(C - b, T - _);
//           this.arc(_ + e, b + t, n, S, E, l * u > c * a)
//         }
//         return this.dirty++, this
//       }, Graphics.prototype.arc = function arc(e, t, i, r, n) {
//         var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
//         if (r === n) return this;
//         !o && n <= r ? n += c.PI_2 : o && r <= n && (r += c.PI_2);
//         var s = n - r,
//           a = Graphics.CURVES.adaptive ? this._segmentsCount(Math.abs(s) * i) : 40 * Math.ceil(Math.abs(s) / c.PI_2);
//         if (0 === s) return this;
//         var l = e + Math.cos(r) * i, u = t + Math.sin(r) * i,
//           h = this.currentPath ? this.currentPath.shape.points : null;
//         if (h) {
//           var d = Math.abs(h[h.length - 2] - l), f = Math.abs(h[h.length - 1] - u);
//           d < .001 && f < .001 || h.push(l, u)
//         } else this.moveTo(l, u), h = this.currentPath.shape.points;
//         for (var p = s / (2 * a), g = 2 * p, m = Math.cos(p), v = Math.sin(p), y = a - 1, _ = y % 1 / y, b = 0; b <= y; ++b) {
//           var x = p + r + g * (b + _ * b), w = Math.cos(x), T = -Math.sin(x);
//           h.push((m * w + v * T) * i + e, (m * -T + v * w) * i + t)
//         }
//         return this.dirty++, this
//       }, Graphics.prototype.beginFill = function beginFill() {
//         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
//           t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
//         return this.filling = !0, this.fillColor = e, this.fillAlpha = t, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
//       }, Graphics.prototype.endFill = function endFill() {
//         return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
//       }, Graphics.prototype.drawRect = function drawRect(e, t, i, r) {
//         return this.drawShape(new l.Rectangle(e, t, i, r)), this
//       }, Graphics.prototype.drawRoundedRect = function drawRoundedRect(e, t, i, r, n) {
//         return this.drawShape(new l.RoundedRectangle(e, t, i, r, n)), this
//       }, Graphics.prototype.drawCircle = function drawCircle(e, t, i) {
//         return this.drawShape(new l.Circle(e, t, i)), this
//       }, Graphics.prototype.drawEllipse = function drawEllipse(e, t, i, r) {
//         return this.drawShape(new l.Ellipse(e, t, i, r)), this
//       }, Graphics.prototype.drawPolygon = function drawPolygon(e) {
//         var t = e, i = !0;
//         if (t instanceof l.Polygon && (i = t.closed, t = t.points), !Array.isArray(t)) {
//           t = new Array(arguments.length);
//           for (var r = 0; r < t.length; ++r) t[r] = arguments[r]
//         }
//         var n = new l.Polygon(t);
//         return n.closed = i, this.drawShape(n), this
//       }, Graphics.prototype.drawStar = function drawStar(e, t, i, r, n) {
//         var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
//         n = n || r / 2;
//         for (var s = -1 * Math.PI / 2 + o, a = 2 * i, l = c.PI_2 / a, u = [], h = 0; h < a; h++) {
//           var d = h % 2 ? n : r, f = h * l + s;
//           u.push(e + d * Math.cos(f), t + d * Math.sin(f))
//         }
//         return this.drawPolygon(u)
//       }, Graphics.prototype.clear = function clear() {
//         return (this.lineWidth || this.filling || this.graphicsData.length > 0) && (this.lineWidth = 0, this.lineAlignment = .5, this.filling = !1, this.boundsDirty = -1, this.canvasTintDirty = -1, this.dirty++, this.clearDirty++, this.graphicsData.length = 0), this.currentPath = null, this._spriteRect = null, this
//       }, Graphics.prototype.isFastRect = function isFastRect() {
//         return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === c.SHAPES.RECT && !this.graphicsData[0].lineWidth
//       }, Graphics.prototype._renderWebGL = function _renderWebGL(e) {
//         this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(e) : (e.setObjectRenderer(e.plugins.graphics), e.plugins.graphics.render(this))
//       }, Graphics.prototype._renderSpriteRect = function _renderSpriteRect(e) {
//         var t = this.graphicsData[0].shape;
//         this._spriteRect || (this._spriteRect = new a.default(new o.default(o.default.WHITE)));
//         var i = this._spriteRect, r = this.graphicsData[0].fillColor;
//         if (16777215 === this.tint) i.tint = r; else if (this.tint !== this._prevRectTint || r !== this._prevRectFillColor) {
//           var n = v, s = y;
//           (0, u.hex2rgb)(r, n), (0, u.hex2rgb)(this.tint, s), n[0] *= s[0], n[1] *= s[1], n[2] *= s[2], i.tint = (0, u.rgb2hex)(n), this._prevRectTint = this.tint, this._prevRectFillColor = r
//         }
//         i.alpha = this.graphicsData[0].fillAlpha, i.worldAlpha = this.worldAlpha * i.alpha, i.blendMode = this.blendMode, i._texture._frame.width = t.width, i._texture._frame.height = t.height, i.transform.worldTransform = this.transform.worldTransform, i.anchor.set(-t.x / t.width, -t.y / t.height), i._onAnchorUpdate(), i._renderWebGL(e)
//       }, Graphics.prototype._renderCanvas = function _renderCanvas(e) {
//         !0 !== this.isMask && e.plugins.graphics.render(this)
//       }, Graphics.prototype._calculateBounds = function _calculateBounds() {
//         this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.cachedSpriteDirty = !0);
//         var e = this._localBounds;
//         this._bounds.addFrame(this.transform, e.minX, e.minY, e.maxX, e.maxY)
//       }, Graphics.prototype.containsPoint = function containsPoint(e) {
//         this.worldTransform.applyInverse(e, m);
//         for (var t = this.graphicsData, i = 0; i < t.length; ++i) {
//           var r = t[i];
//           if (r.fill && (r.shape && r.shape.contains(m.x, m.y))) {
//             if (r.holes) for (var n = 0; n < r.holes.length; n++) {
//               if (r.holes[n].contains(m.x, m.y)) return !1
//             }
//             return !0
//           }
//         }
//         return !1
//       }, Graphics.prototype.updateLocalBounds = function updateLocalBounds() {
//         var e = 1 / 0, t = -1 / 0, i = 1 / 0, r = -1 / 0;
//         if (this.graphicsData.length) for (var n = 0, o = 0, s = 0, a = 0, l = 0, u = 0; u < this.graphicsData.length; u++) {
//           var h = this.graphicsData[u], d = h.type, f = h.lineWidth;
//           if (n = h.shape, d === c.SHAPES.RECT || d === c.SHAPES.RREC) o = n.x - f / 2, s = n.y - f / 2, a = n.width + f, l = n.height + f, e = o < e ? o : e, t = o + a > t ? o + a : t, i = s < i ? s : i, r = s + l > r ? s + l : r; else if (d === c.SHAPES.CIRC) o = n.x, s = n.y, a = n.radius + f / 2, l = n.radius + f / 2, e = o - a < e ? o - a : e, t = o + a > t ? o + a : t, i = s - l < i ? s - l : i, r = s + l > r ? s + l : r; else if (d === c.SHAPES.ELIP) o = n.x, s = n.y, a = n.width + f / 2, l = n.height + f / 2, e = o - a < e ? o - a : e, t = o + a > t ? o + a : t, i = s - l < i ? s - l : i, r = s + l > r ? s + l : r; else for (var p = n.points, g = 0, m = 0, v = 0, y = 0, _ = 0, b = 0, x = 0, w = 0, T = 0; T + 2 < p.length; T += 2) o = p[T], s = p[T + 1], g = p[T + 2], m = p[T + 3], v = Math.abs(g - o), y = Math.abs(m - s), l = f, (a = Math.sqrt(v * v + y * y)) < 1e-9 || (b = (l / a * v + y) / 2, w = (m + s) / 2, e = (x = (g + o) / 2) - (_ = (l / a * y + v) / 2) < e ? x - _ : e, t = x + _ > t ? x + _ : t, i = w - b < i ? w - b : i, r = w + b > r ? w + b : r)
//         } else e = 0, t = 0, i = 0, r = 0;
//         var C = this.boundsPadding;
//         this._localBounds.minX = e - C, this._localBounds.maxX = t + C, this._localBounds.minY = i - C, this._localBounds.maxY = r + C
//       }, Graphics.prototype.drawShape = function drawShape(e) {
//         this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
//         var t = new s.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, e, this.lineAlignment);
//         return this.graphicsData.push(t), t.type === c.SHAPES.POLY && (t.shape.closed = t.shape.closed, this.currentPath = t), this.dirty++, t
//       }, Graphics.prototype.generateCanvasTexture = function generateCanvasTexture(e) {
//         var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = this.getLocalBounds(),
//           r = n.default.create(i.width, i.height, e, t);
//         p || (p = new f.default), this.transform.updateLocalTransform(), this.transform.localTransform.copy(g), g.invert(), g.tx -= i.x, g.ty -= i.y, p.render(this, r, !0, g);
//         var s = o.default.fromCanvas(r.baseTexture._canvasRenderTarget.canvas, e, "graphics");
//         return s.baseTexture.resolution = t, s.baseTexture.update(), s
//       }, Graphics.prototype.closePath = function closePath() {
//         var e = this.currentPath;
//         return e && e.shape && e.shape.close(), this
//       }, Graphics.prototype.addHole = function addHole() {
//         var e = this.graphicsData.pop();
//         return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(e.shape), this.currentPath = null, this
//       }, Graphics.prototype.destroy = function destroy(t) {
//         e.prototype.destroy.call(this, t);
//         for (var i = 0; i < this.graphicsData.length; ++i) this.graphicsData[i].destroy();
//         for (var r in this._webGL) for (var n = 0; n < this._webGL[r].data.length; ++n) this._webGL[r].data[n].destroy();
//         this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webGL = null, this._localBounds = null
//       }, Graphics
//     }(r.default);
//   t.default = _, _._SPRITE_TEXTURE = null, _.CURVES = {adaptive: !1, maxLength: 10, minSegments: 8, maxSegments: 2048}
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = function bezierCurveTo(e, t, i, r, n, o, s, a, l) {
//     var u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [], c = 0, h = 0, d = 0, f = 0, p = 0;
//     u.push(e, t);
//     for (var g = 1, m = 0; g <= l; ++g) d = (h = (c = 1 - (m = g / l)) * c) * c, p = (f = m * m) * m, u.push(d * e + 3 * h * m * i + 3 * c * f * n + p * s, d * t + 3 * h * m * r + 3 * c * f * o + p * a);
//     return u
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(3), n = i(1), o = _interopRequireDefault(i(27)), s = _interopRequireDefault(i(28)),
//     a = _interopRequireDefault(i(186)), l = _interopRequireDefault(i(187)), u = _interopRequireDefault(i(188)),
//     c = _interopRequireDefault(i(189)), h = _interopRequireDefault(i(190)), d = _interopRequireDefault(i(191));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var f = function (e) {
//     function GraphicsRenderer(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, GraphicsRenderer);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.graphicsDataPool = [], i.primitiveShader = null, i.gl = t.gl, i.CONTEXT_UID = 0, i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(GraphicsRenderer, e), GraphicsRenderer.prototype.onContextChange = function onContextChange() {
//       this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new l.default(this.gl)
//     }, GraphicsRenderer.prototype.destroy = function destroy() {
//       o.default.prototype.destroy.call(this);
//       for (var e = 0; e < this.graphicsDataPool.length; ++e) this.graphicsDataPool[e].destroy();
//       this.graphicsDataPool = null
//     }, GraphicsRenderer.prototype.render = function render(e) {
//       var t = this.renderer, i = t.gl, n = void 0, o = e._webGL[this.CONTEXT_UID];
//       o && e.dirty === o.dirty || (this.updateGraphics(e), o = e._webGL[this.CONTEXT_UID]);
//       var s = this.primitiveShader;
//       t.bindShader(s), t.state.setBlendMode(e.blendMode);
//       for (var a = 0, l = o.data.length; a < l; a++) {
//         var u = (n = o.data[a]).shader;
//         t.bindShader(u), u.uniforms.translationMatrix = e.transform.worldTransform.toArray(!0), u.uniforms.tint = (0, r.hex2rgb)(e.tint), u.uniforms.alpha = e.worldAlpha, t.bindVao(n.vao), n.nativeLines ? i.drawArrays(i.LINES, 0, n.points.length / 6) : n.vao.draw(i.TRIANGLE_STRIP, n.indices.length)
//       }
//     }, GraphicsRenderer.prototype.updateGraphics = function updateGraphics(e) {
//       var t = this.renderer.gl, i = e._webGL[this.CONTEXT_UID];
//       if (i || (i = e._webGL[this.CONTEXT_UID] = {
//         lastIndex: 0,
//         data: [],
//         gl: t,
//         clearDirty: -1,
//         dirty: -1
//       }), i.dirty = e.dirty, e.clearDirty !== i.clearDirty) {
//         i.clearDirty = e.clearDirty;
//         for (var r = 0; r < i.data.length; r++) this.graphicsDataPool.push(i.data[r]);
//         i.data.length = 0, i.lastIndex = 0
//       }
//       for (var o = void 0, s = void 0, a = i.lastIndex; a < e.graphicsData.length; a++) {
//         var l = e.graphicsData[a];
//         o = this.getWebGLData(i, 0), l.nativeLines && l.lineWidth && (s = this.getWebGLData(i, 0, !0), i.lastIndex++), l.type === n.SHAPES.POLY && (0, u.default)(l, o, s), l.type === n.SHAPES.RECT ? (0, c.default)(l, o, s) : l.type === n.SHAPES.CIRC || l.type === n.SHAPES.ELIP ? (0, d.default)(l, o, s) : l.type === n.SHAPES.RREC && (0, h.default)(l, o, s), i.lastIndex++
//       }
//       this.renderer.bindVao(null);
//       for (var f = 0; f < i.data.length; f++) (o = i.data[f]).dirty && o.upload()
//     }, GraphicsRenderer.prototype.getWebGLData = function getWebGLData(e, t, i) {
//       var r = e.data[e.data.length - 1];
//       return (!r || r.nativeLines !== i || r.points.length > 32e4) && ((r = this.graphicsDataPool.pop() || new a.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState)).nativeLines = i, r.reset(t), e.data.push(r)), r.dirty = !0, r
//     }, GraphicsRenderer
//   }(o.default);
//   t.default = f, s.default.registerPlugin("graphics", f)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(9));
//   var n = function () {
//     function WebGLGraphicsData(e, t, i) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, WebGLGraphicsData), this.gl = e, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = r.default.GLBuffer.createVertexBuffer(e), this.indexBuffer = r.default.GLBuffer.createIndexBuffer(e), this.dirty = !0, this.nativeLines = !1, this.glPoints = null, this.glIndices = null, this.shader = t, this.vao = new r.default.VertexArrayObject(e, i).addIndex(this.indexBuffer).addAttribute(this.buffer, t.attributes.aVertexPosition, e.FLOAT, !1, 24, 0).addAttribute(this.buffer, t.attributes.aColor, e.FLOAT, !1, 24, 8)
//     }
//
//     return WebGLGraphicsData.prototype.reset = function reset() {
//       this.points.length = 0, this.indices.length = 0
//     }, WebGLGraphicsData.prototype.upload = function upload() {
//       this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
//     }, WebGLGraphicsData.prototype.destroy = function destroy() {
//       this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
//     }, WebGLGraphicsData
//   }();
//   t.default = n
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function (e) {
//     function PrimitiveShader(t) {
//       return function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, PrimitiveShader), function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n")))
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(PrimitiveShader, e), PrimitiveShader
//   }(function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(23)).default);
//   t.default = r
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function buildPoly(e, t, i) {
//     e.points = e.shape.points.slice();
//     var s = e.points;
//     if (e.fill && s.length >= 6) {
//       for (var a = [], l = e.holes, u = 0; u < l.length; u++) {
//         var c = l[u];
//         a.push(s.length / 2), s = s.concat(c.points)
//       }
//       var h = t.points, d = t.indices, f = s.length / 2, p = (0, n.hex2rgb)(e.fillColor), g = e.fillAlpha, m = p[0] * g,
//         v = p[1] * g, y = p[2] * g, _ = (0, o.default)(s, a, 2);
//       if (!_) return;
//       for (var b = h.length / 6, x = 0; x < _.length; x += 3) d.push(_[x] + b), d.push(_[x] + b), d.push(_[x + 1] + b), d.push(_[x + 2] + b), d.push(_[x + 2] + b);
//       for (var w = 0; w < f; w++) h.push(s[2 * w], s[2 * w + 1], m, v, y, g)
//     }
//     e.lineWidth > 0 && (0, r.default)(e, t, i)
//   };
//   var r = _interopRequireDefault(i(30)), n = i(3), o = _interopRequireDefault(i(40));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function buildRectangle(e, t, i) {
//     var o = e.shape, s = o.x, a = o.y, l = o.width, u = o.height;
//     if (e.fill) {
//       var c = (0, n.hex2rgb)(e.fillColor), h = e.fillAlpha, d = c[0] * h, f = c[1] * h, p = c[2] * h, g = t.points,
//         m = t.indices, v = g.length / 6;
//       g.push(s, a), g.push(d, f, p, h), g.push(s + l, a), g.push(d, f, p, h), g.push(s, a + u), g.push(d, f, p, h), g.push(s + l, a + u), g.push(d, f, p, h), m.push(v, v, v + 1, v + 2, v + 3, v + 3)
//     }
//     if (e.lineWidth) {
//       var y = e.points;
//       e.points = [s, a, s + l, a, s + l, a + u, s, a + u, s, a], (0, r.default)(e, t, i), e.points = y
//     }
//   };
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(30)), n = i(3)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function buildRoundedRectangle(e, t, i) {
//     var s = e.shape, a = s.x, l = s.y, u = s.width, c = s.height, h = s.radius, d = [];
//     if (d.push(a, l + h), quadraticBezierCurve(a, l + c - h, a, l + c, a + h, l + c, d), quadraticBezierCurve(a + u - h, l + c, a + u, l + c, a + u, l + c - h, d), quadraticBezierCurve(a + u, l + h, a + u, l, a + u - h, l, d), quadraticBezierCurve(a + h, l, a, l, a, l + h + 1e-10, d), e.fill) {
//       for (var f = (0, o.hex2rgb)(e.fillColor), p = e.fillAlpha, g = f[0] * p, m = f[1] * p, v = f[2] * p, y = t.points, _ = t.indices, b = y.length / 6, x = (0, r.default)(d, null, 2), w = 0, T = x.length; w < T; w += 3) _.push(x[w] + b), _.push(x[w] + b), _.push(x[w + 1] + b), _.push(x[w + 2] + b), _.push(x[w + 2] + b);
//       for (var C = 0, S = d.length; C < S; C++) y.push(d[C], d[++C], g, m, v, p)
//     }
//     if (e.lineWidth) {
//       var E = e.points;
//       e.points = d, (0, n.default)(e, t, i), e.points = E
//     }
//   };
//   var r = _interopRequireDefault(i(40)), n = _interopRequireDefault(i(30)), o = i(3);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   function getPt(e, t, i) {
//     return e + (t - e) * i
//   }
//
//   function quadraticBezierCurve(e, t, i, r, n, o) {
//     for (var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [], a = 0, l = 0, u = 0, c = 0, h = 0, d = 0, f = 0, p = 0; f <= 20; ++f) a = getPt(e, i, p = f / 20), l = getPt(t, r, p), u = getPt(i, n, p), c = getPt(r, o, p), h = getPt(a, u, p), d = getPt(l, c, p), s.push(h, d);
//     return s
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.default = function buildCircle(e, t, i) {
//     var s = e.shape, a = s.x, l = s.y, u = void 0, c = void 0;
//     e.type === n.SHAPES.CIRC ? (u = s.radius, c = s.radius) : (u = s.width, c = s.height);
//     if (0 === u || 0 === c) return;
//     var h = Math.floor(30 * Math.sqrt(s.radius)) || Math.floor(15 * Math.sqrt(s.width + s.height)), d = 2 * Math.PI / h;
//     if (e.fill) {
//       var f = (0, o.hex2rgb)(e.fillColor), p = e.fillAlpha, g = f[0] * p, m = f[1] * p, v = f[2] * p, y = t.points,
//         _ = t.indices, b = y.length / 6;
//       _.push(b);
//       for (var x = 0; x < h + 1; x++) y.push(a, l, g, m, v, p), y.push(a + Math.sin(d * x) * u, l + Math.cos(d * x) * c, g, m, v, p), _.push(b++, b++);
//       _.push(b - 1)
//     }
//     if (e.lineWidth) {
//       var w = e.points;
//       e.points = [];
//       for (var T = 0; T < h; T++) e.points.push(a + Math.sin(d * -T) * u, l + Math.cos(d * -T) * c);
//       e.points.push(e.points[0], e.points[1]), (0, r.default)(e, t, i), e.points = w
//     }
//   };
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(30)), n = i(1), o = i(3)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(21)), n = i(1);
//   var o = function () {
//     function CanvasGraphicsRenderer(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, CanvasGraphicsRenderer), this.renderer = e
//     }
//
//     return CanvasGraphicsRenderer.prototype.render = function render(e) {
//       var t = this.renderer, i = t.context, r = e.worldAlpha, o = e.transform.worldTransform, s = t.resolution;
//       i.setTransform(o.a * s, o.b * s, o.c * s, o.d * s, o.tx * s, o.ty * s), e.canvasTintDirty === e.dirty && e._prevTint === e.tint || this.updateGraphicsTint(e), t.setBlendMode(e.blendMode);
//       for (var a = 0; a < e.graphicsData.length; a++) {
//         var l = e.graphicsData[a], u = l.shape, c = l._fillTint, h = l._lineTint;
//         if (i.lineWidth = l.lineWidth, l.type === n.SHAPES.POLY) {
//           i.beginPath(), this.renderPolygon(u.points, u.closed, i);
//           for (var d = 0; d < l.holes.length; d++) this.renderPolygon(l.holes[d].points, !0, i);
//           l.fill && (i.globalAlpha = l.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), l.lineWidth && (i.globalAlpha = l.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
//         } else if (l.type === n.SHAPES.RECT) (l.fillColor || 0 === l.fillColor) && (i.globalAlpha = l.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fillRect(u.x, u.y, u.width, u.height)), l.lineWidth && (i.globalAlpha = l.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.strokeRect(u.x, u.y, u.width, u.height)); else if (l.type === n.SHAPES.CIRC) i.beginPath(), i.arc(u.x, u.y, u.radius, 0, 2 * Math.PI), i.closePath(), l.fill && (i.globalAlpha = l.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), l.lineWidth && (i.globalAlpha = l.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke()); else if (l.type === n.SHAPES.ELIP) {
//           var f = 2 * u.width, p = 2 * u.height, g = u.x - f / 2, m = u.y - p / 2;
//           i.beginPath();
//           var v = f / 2 * .5522848, y = p / 2 * .5522848, _ = g + f, b = m + p, x = g + f / 2, w = m + p / 2;
//           i.moveTo(g, w), i.bezierCurveTo(g, w - y, x - v, m, x, m), i.bezierCurveTo(x + v, m, _, w - y, _, w), i.bezierCurveTo(_, w + y, x + v, b, x, b), i.bezierCurveTo(x - v, b, g, w + y, g, w), i.closePath(), l.fill && (i.globalAlpha = l.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), l.lineWidth && (i.globalAlpha = l.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
//         } else if (l.type === n.SHAPES.RREC) {
//           var T = u.x, C = u.y, S = u.width, E = u.height, P = u.radius, M = Math.min(S, E) / 2 | 0;
//           P = P > M ? M : P, i.beginPath(), i.moveTo(T, C + P), i.lineTo(T, C + E - P), i.quadraticCurveTo(T, C + E, T + P, C + E), i.lineTo(T + S - P, C + E), i.quadraticCurveTo(T + S, C + E, T + S, C + E - P), i.lineTo(T + S, C + P), i.quadraticCurveTo(T + S, C, T + S - P, C), i.lineTo(T + P, C), i.quadraticCurveTo(T, C, T, C + P), i.closePath(), (l.fillColor || 0 === l.fillColor) && (i.globalAlpha = l.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), l.lineWidth && (i.globalAlpha = l.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
//         }
//       }
//     }, CanvasGraphicsRenderer.prototype.updateGraphicsTint = function updateGraphicsTint(e) {
//       e._prevTint = e.tint, e.canvasTintDirty = e.dirty;
//       for (var t = (e.tint >> 16 & 255) / 255, i = (e.tint >> 8 & 255) / 255, r = (255 & e.tint) / 255, n = 0; n < e.graphicsData.length; ++n) {
//         var o = e.graphicsData[n], s = 0 | o.fillColor, a = 0 | o.lineColor;
//         o._fillTint = ((s >> 16 & 255) / 255 * t * 255 << 16) + ((s >> 8 & 255) / 255 * i * 255 << 8) + (255 & s) / 255 * r * 255, o._lineTint = ((a >> 16 & 255) / 255 * t * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * r * 255
//       }
//     }, CanvasGraphicsRenderer.prototype.renderPolygon = function renderPolygon(e, t, i) {
//       i.moveTo(e[0], e[1]);
//       for (var r = 1; r < e.length / 2; ++r) i.lineTo(e[2 * r], e[2 * r + 1]);
//       t && i.closePath()
//     }, CanvasGraphicsRenderer.prototype.destroy = function destroy() {
//       this.renderer = null
//     }, CanvasGraphicsRenderer
//   }();
//   t.default = o, r.default.registerPlugin("graphics", o)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = i(2), o = i(3);
//   var s = function () {
//     function Spritesheet(e, t) {
//       var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Spritesheet), this.baseTexture = e, this.textures = {}, this.animations = {}, this.data = t, this.resolution = this._updateResolution(i || this.baseTexture.imageUrl), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
//     }
//
//     return r(Spritesheet, null, [{
//       key: "BATCH_SIZE", get: function get() {
//         return 1e3
//       }
//     }]), Spritesheet.prototype._updateResolution = function _updateResolution(e) {
//       var t = this.data.meta.scale, i = (0, o.getResolutionOfUrl)(e, null);
//       return null === i && (i = void 0 !== t ? parseFloat(t) : 1), 1 !== i && (this.baseTexture.resolution = i, this.baseTexture.update()), i
//     }, Spritesheet.prototype.parse = function parse(e) {
//       this._batchIndex = 0, this._callback = e, this._frameKeys.length <= Spritesheet.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
//     }, Spritesheet.prototype._processFrames = function _processFrames(e) {
//       for (var t = e, i = Spritesheet.BATCH_SIZE, r = this.baseTexture.sourceScale; t - e < i && t < this._frameKeys.length;) {
//         var o = this._frameKeys[t], s = this._frames[o], a = s.frame;
//         if (a) {
//           var l = null, u = null, c = !1 !== s.trimmed && s.sourceSize ? s.sourceSize : s.frame,
//             h = new n.Rectangle(0, 0, Math.floor(c.w * r) / this.resolution, Math.floor(c.h * r) / this.resolution);
//           l = s.rotated ? new n.Rectangle(Math.floor(a.x * r) / this.resolution, Math.floor(a.y * r) / this.resolution, Math.floor(a.h * r) / this.resolution, Math.floor(a.w * r) / this.resolution) : new n.Rectangle(Math.floor(a.x * r) / this.resolution, Math.floor(a.y * r) / this.resolution, Math.floor(a.w * r) / this.resolution, Math.floor(a.h * r) / this.resolution), !1 !== s.trimmed && s.spriteSourceSize && (u = new n.Rectangle(Math.floor(s.spriteSourceSize.x * r) / this.resolution, Math.floor(s.spriteSourceSize.y * r) / this.resolution, Math.floor(a.w * r) / this.resolution, Math.floor(a.h * r) / this.resolution)), this.textures[o] = new n.Texture(this.baseTexture, l, h, u, s.rotated ? 2 : 0, s.anchor), n.Texture.addToCache(this.textures[o], o)
//         }
//         t++
//       }
//     }, Spritesheet.prototype._processAnimations = function _processAnimations() {
//       var e = this.data.animations || {};
//       for (var t in e) {
//         this.animations[t] = [];
//         var i = e[t], r = Array.isArray(i), n = 0;
//         for (i = r ? i : i[Symbol.iterator](); ;) {
//           var o;
//           if (r) {
//             if (n >= i.length) break;
//             o = i[n++]
//           } else {
//             if ((n = i.next()).done) break;
//             o = n.value
//           }
//           var s = o;
//           this.animations[t].push(this.textures[s])
//         }
//       }
//     }, Spritesheet.prototype._parseComplete = function _parseComplete() {
//       var e = this._callback;
//       this._callback = null, this._batchIndex = 0, e.call(this, this.textures)
//     }, Spritesheet.prototype._nextBatch = function _nextBatch() {
//       var e = this;
//       this._processFrames(this._batchIndex * Spritesheet.BATCH_SIZE), this._batchIndex++, setTimeout(function () {
//         e._batchIndex * Spritesheet.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(), e._parseComplete())
//       }, 0)
//     }, Spritesheet.prototype.destroy = function destroy() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
//       for (var t in this.textures) this.textures[t].destroy();
//       this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, e && this.baseTexture.destroy(), this.baseTexture = null
//     }, Spritesheet
//   }();
//   t.default = s
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0, t.default = function deprecation(e) {
//     var t = e.mesh, i = e.particles, r = e.extras, n = e.filters, o = e.prepare, s = e.loaders, a = e.interaction;
//     Object.defineProperties(e, {
//       SpriteBatch: {
//         get: function get() {
//           throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
//         }
//       }, AssetLoader: {
//         get: function get() {
//           throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.")
//         }
//       }, Stage: {
//         get: function get() {
//           return warn("You do not need to use a PIXI Stage any more, you can simply render any container."), e.Container
//         }
//       }, DisplayObjectContainer: {
//         get: function get() {
//           return warn("DisplayObjectContainer has been shortened to Container, please use Container from now on."), e.Container
//         }
//       }, Strip: {
//         get: function get() {
//           return warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), t.Mesh
//         }
//       }, Rope: {
//         get: function get() {
//           return warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), t.Rope
//         }
//       }, ParticleContainer: {
//         get: function get() {
//           return warn("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."), i.ParticleContainer
//         }
//       }, MovieClip: {
//         get: function get() {
//           return warn("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite."), r.AnimatedSprite
//         }
//       }, TilingSprite: {
//         get: function get() {
//           return warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), r.TilingSprite
//         }
//       }, BitmapText: {
//         get: function get() {
//           return warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), r.BitmapText
//         }
//       }, blendModes: {
//         get: function get() {
//           return warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), e.BLEND_MODES
//         }
//       }, scaleModes: {
//         get: function get() {
//           return warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), e.SCALE_MODES
//         }
//       }, BaseTextureCache: {
//         get: function get() {
//           return warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), e.utils.BaseTextureCache
//         }
//       }, TextureCache: {
//         get: function get() {
//           return warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), e.utils.TextureCache
//         }
//       }, math: {
//         get: function get() {
//           return warn("The math namespace is deprecated, please access members already accessible on PIXI."), e
//         }
//       }, AbstractFilter: {
//         get: function get() {
//           return warn("AstractFilter has been renamed to Filter, please use PIXI.Filter"), e.Filter
//         }
//       }, TransformManual: {
//         get: function get() {
//           return warn("TransformManual has been renamed to TransformBase, please update your pixi-spine"), e.TransformBase
//         }
//       }, TARGET_FPMS: {
//         get: function get() {
//           return warn("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), e.settings.TARGET_FPMS
//         }, set: function set(t) {
//           warn("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), e.settings.TARGET_FPMS = t
//         }
//       }, FILTER_RESOLUTION: {
//         get: function get() {
//           return warn("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), e.settings.FILTER_RESOLUTION
//         }, set: function set(t) {
//           warn("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), e.settings.FILTER_RESOLUTION = t
//         }
//       }, RESOLUTION: {
//         get: function get() {
//           return warn("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), e.settings.RESOLUTION
//         }, set: function set(t) {
//           warn("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), e.settings.RESOLUTION = t
//         }
//       }, MIPMAP_TEXTURES: {
//         get: function get() {
//           return warn("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), e.settings.MIPMAP_TEXTURES
//         }, set: function set(t) {
//           warn("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), e.settings.MIPMAP_TEXTURES = t
//         }
//       }, SPRITE_BATCH_SIZE: {
//         get: function get() {
//           return warn("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), e.settings.SPRITE_BATCH_SIZE
//         }, set: function set(t) {
//           warn("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), e.settings.SPRITE_BATCH_SIZE = t
//         }
//       }, SPRITE_MAX_TEXTURES: {
//         get: function get() {
//           return warn("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), e.settings.SPRITE_MAX_TEXTURES
//         }, set: function set(t) {
//           warn("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), e.settings.SPRITE_MAX_TEXTURES = t
//         }
//       }, RETINA_PREFIX: {
//         get: function get() {
//           return warn("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), e.settings.RETINA_PREFIX
//         }, set: function set(t) {
//           warn("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), e.settings.RETINA_PREFIX = t
//         }
//       }, DEFAULT_RENDER_OPTIONS: {
//         get: function get() {
//           return warn("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS"), e.settings.RENDER_OPTIONS
//         }
//       }
//     });
//     for (var l = [{parent: "TRANSFORM_MODE", target: "TRANSFORM_MODE"}, {
//       parent: "GC_MODES",
//       target: "GC_MODE"
//     }, {parent: "WRAP_MODES", target: "WRAP_MODE"}, {parent: "SCALE_MODES", target: "SCALE_MODE"}, {
//       parent: "PRECISION",
//       target: "PRECISION_FRAGMENT"
//     }], u = function _loop(t) {
//       var i = l[t];
//       Object.defineProperty(e[i.parent], "DEFAULT", {
//         get: function get() {
//           return warn("PIXI." + i.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + i.target), e.settings[i.target]
//         }, set: function set(t) {
//           warn("PIXI." + i.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + i.target), e.settings[i.target] = t
//         }
//       })
//     }, c = 0; c < l.length; c++) u(c);
//     Object.defineProperties(e.settings, {
//       PRECISION: {
//         get: function get() {
//           return warn("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), e.settings.PRECISION_FRAGMENT
//         }, set: function set(t) {
//           warn("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), e.settings.PRECISION_FRAGMENT = t
//         }
//       }
//     }), r.AnimatedSprite && Object.defineProperties(r, {
//       MovieClip: {
//         get: function get() {
//           return warn("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on."), r.AnimatedSprite
//         }
//       }
//     });
//     r && Object.defineProperties(r, {
//       TextureTransform: {
//         get: function get() {
//           return warn("The TextureTransform class has been renamed to TextureMatrix, please use PIXI.TextureMatrix from now on."), e.TextureMatrix
//         }
//       }
//     });
//     e.DisplayObject.prototype.generateTexture = function generateTexture(e, t, i) {
//       return warn("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"), e.generateTexture(this, t, i)
//     }, e.Graphics.prototype.generateTexture = function generateTexture(e, t) {
//       return warn("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"), this.generateCanvasTexture(e, t)
//     }, e.GroupD8.isSwapWidthHeight = function isSwapWidthHeight(t) {
//       return warn("GroupD8.isSwapWidthHeight was renamed to GroupD8.isVertical"), e.GroupD8.isVertical(t)
//     }, e.RenderTexture.prototype.render = function render(e, t, i, r) {
//       this.legacyRenderer.render(e, this, i, t, !r), warn("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")
//     }, e.RenderTexture.prototype.getImage = function getImage(e) {
//       return warn("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"), this.legacyRenderer.extract.image(e)
//     }, e.RenderTexture.prototype.getBase64 = function getBase64(e) {
//       return warn("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"), this.legacyRenderer.extract.base64(e)
//     }, e.RenderTexture.prototype.getCanvas = function getCanvas(e) {
//       return warn("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"), this.legacyRenderer.extract.canvas(e)
//     }, e.RenderTexture.prototype.getPixels = function getPixels(e) {
//       return warn("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"), this.legacyRenderer.pixels(e)
//     }, e.Sprite.prototype.setTexture = function setTexture(e) {
//       this.texture = e, warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
//     }, r.BitmapText && (r.BitmapText.prototype.setText = function setText(e) {
//       this.text = e, warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
//     });
//     e.Text.prototype.setText = function setText(e) {
//       this.text = e, warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
//     }, e.Text.calculateFontProperties = function calculateFontProperties(t) {
//       return warn("Text.calculateFontProperties is now deprecated, please use the TextMetrics.measureFont"), e.TextMetrics.measureFont(t)
//     }, Object.defineProperties(e.Text, {
//       fontPropertiesCache: {
//         get: function get() {
//           return warn("Text.fontPropertiesCache is deprecated"), e.TextMetrics._fonts
//         }
//       }, fontPropertiesCanvas: {
//         get: function get() {
//           return warn("Text.fontPropertiesCanvas is deprecated"), e.TextMetrics._canvas
//         }
//       }, fontPropertiesContext: {
//         get: function get() {
//           return warn("Text.fontPropertiesContext is deprecated"), e.TextMetrics._context
//         }
//       }
//     }), e.Text.prototype.setStyle = function setStyle(e) {
//       this.style = e, warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
//     }, e.Text.prototype.determineFontProperties = function determineFontProperties(t) {
//       return warn("determineFontProperties is now deprecated, please use TextMetrics.measureFont method"), e.TextMetrics.measureFont(t)
//     }, e.Text.getFontStyle = function getFontStyle(t) {
//       return warn("getFontStyle is now deprecated, please use TextStyle.toFontString() instead"), (t = t || {}) instanceof e.TextStyle || (t = new e.TextStyle(t)), t.toFontString()
//     }, Object.defineProperties(e.TextStyle.prototype, {
//       font: {
//         get: function get() {
//           warn("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");
//           var e = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
//           return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + e + " " + this._fontFamily
//         }, set: function set(e) {
//           warn("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"), e.indexOf("italic") > 1 ? this._fontStyle = "italic" : e.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal", e.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
//           var t = e.split(" "), i = -1;
//           this._fontSize = 26;
//           for (var r = 0; r < t.length; ++r) if (t[r].match(/(px|pt|em|%)/)) {
//             i = r, this._fontSize = t[r];
//             break
//           }
//           this._fontWeight = "normal";
//           for (var n = 0; n < i; ++n) if (t[n].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
//             this._fontWeight = t[n];
//             break
//           }
//           if (i > -1 && i < t.length - 1) {
//             this._fontFamily = "";
//             for (var o = i + 1; o < t.length; ++o) this._fontFamily += t[o] + " ";
//             this._fontFamily = this._fontFamily.slice(0, -1)
//           } else this._fontFamily = "Arial";
//           this.styleID++
//         }
//       }
//     }), e.Texture.prototype.setFrame = function setFrame(e) {
//       this.frame = e, warn("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;")
//     }, e.Texture.addTextureToCache = function addTextureToCache(t, i) {
//       e.Texture.addToCache(t, i), warn("Texture.addTextureToCache is deprecated, please use Texture.addToCache from now on.")
//     }, e.Texture.removeTextureFromCache = function removeTextureFromCache(t) {
//       return warn("Texture.removeTextureFromCache is deprecated, please use Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not automatically its BaseTexture from the BaseTextureCache. For that, use BaseTexture.removeFromCache"), e.BaseTexture.removeFromCache(t), e.Texture.removeFromCache(t)
//     }, Object.defineProperties(n, {
//       AbstractFilter: {
//         get: function get() {
//           return warn("AstractFilter has been renamed to Filter, please use PIXI.Filter"), e.AbstractFilter
//         }
//       }, SpriteMaskFilter: {
//         get: function get() {
//           return warn("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), e.SpriteMaskFilter
//         }
//       }, VoidFilter: {
//         get: function get() {
//           return warn("VoidFilter has been renamed to AlphaFilter, please use PIXI.filters.AlphaFilter"), n.AlphaFilter
//         }
//       }
//     }), e.utils.uuid = function () {
//       return warn("utils.uuid() is deprecated, please use utils.uid() from now on."), e.utils.uid()
//     }, e.utils.canUseNewCanvasBlendModes = function () {
//       return warn("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"), e.CanvasTinter.canUseMultiply
//     };
//     var h = !0;
//     Object.defineProperty(e.utils, "_saidHello", {
//       set: function set(e) {
//         e && (warn("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()"), this.skipHello()), h = e
//       }, get: function get() {
//         return h
//       }
//     }), o.BasePrepare && (o.BasePrepare.prototype.register = function register(e, t) {
//       return warn("renderer.plugins.prepare.register is now deprecated, please use renderer.plugins.prepare.registerFindHook & renderer.plugins.prepare.registerUploadHook"), e && this.registerFindHook(e), t && this.registerUploadHook(t), this
//     });
//     o.canvas && Object.defineProperty(o.canvas, "UPLOADS_PER_FRAME", {
//       set: function set() {
//         warn("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
//       }, get: function get() {
//         return warn("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
//       }
//     });
//     o.webgl && Object.defineProperty(o.webgl, "UPLOADS_PER_FRAME", {
//       set: function set() {
//         warn("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
//       }, get: function get() {
//         return warn("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
//       }
//     });
//     if (s.Loader) {
//       var d = s.Resource, f = s.Loader;
//       Object.defineProperties(d.prototype, {
//         isJson: {
//           get: function get() {
//             return warn("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`."), this.type === d.TYPE.JSON
//           }
//         }, isXml: {
//           get: function get() {
//             return warn("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`."), this.type === d.TYPE.XML
//           }
//         }, isImage: {
//           get: function get() {
//             return warn("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`."), this.type === d.TYPE.IMAGE
//           }
//         }, isAudio: {
//           get: function get() {
//             return warn("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`."), this.type === d.TYPE.AUDIO
//           }
//         }, isVideo: {
//           get: function get() {
//             return warn("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`."), this.type === d.TYPE.VIDEO
//           }
//         }
//       }), Object.defineProperties(f.prototype, {
//         before: {
//           get: function get() {
//             return warn("The before() method is deprecated, please use pre()."), this.pre
//           }
//         }, after: {
//           get: function get() {
//             return warn("The after() method is deprecated, please use use()."), this.use
//           }
//         }
//       })
//     }
//     a.interactiveTarget && Object.defineProperty(a.interactiveTarget, "defaultCursor", {
//       set: function set(e) {
//         warn("Property defaultCursor has been replaced with 'cursor'. "), this.cursor = e
//       }, get: function get() {
//         return warn("Property defaultCursor has been replaced with 'cursor'. "), this.cursor
//       }
//     });
//     a.InteractionManager && (Object.defineProperty(a.InteractionManager, "defaultCursorStyle", {
//       set: function set(e) {
//         warn("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default = e
//       }, get: function get() {
//         return warn("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default
//       }
//     }), Object.defineProperty(a.InteractionManager, "currentCursorStyle", {
//       set: function set(e) {
//         warn("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode = e
//       }, get: function get() {
//         return warn("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode
//       }
//     }))
//   };
//   var i = {};
//
//   function warn(e) {
//     if (!i[e]) {
//       var t = (new Error).stack;
//       void 0 === t ? console.warn("Deprecation Warning: ", e) : (t = t.split("\n").splice(3).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cDeprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e), console.warn(t), console.groupEnd()) : (console.warn("Deprecation Warning: ", e), console.warn(t))), i[e] = !0
//     }
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(83);
//   Object.defineProperty(t, "accessibleTarget", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   });
//   var n = i(196);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   Object.defineProperty(t, "AccessibilityManager", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   })
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), n = _interopRequireDefault(i(38)), o = _interopRequireDefault(i(83));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   r.utils.mixins.delayMixin(r.DisplayObject.prototype, o.default);
//   var s = 100, a = 0, l = 0, u = 2, c = function () {
//     function AccessibilityManager(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, AccessibilityManager), !n.default.tablet && !n.default.phone || navigator.isCocoonJS || this.createTouchHook();
//       var t = document.createElement("div");
//       t.style.width = s + "px", t.style.height = s + "px", t.style.position = "absolute", t.style.top = a + "px", t.style.left = l + "px", t.style.zIndex = u, this.div = t, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = e, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1)
//     }
//
//     return AccessibilityManager.prototype.createTouchHook = function createTouchHook() {
//       var e = this, t = document.createElement("button");
//       t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", t.style.zIndex = 2, t.style.backgroundColor = "#FF0000", t.title = "HOOK DIV", t.addEventListener("focus", function () {
//         e.isMobileAccessabillity = !0, e.activate(), document.body.removeChild(t)
//       }), document.body.appendChild(t)
//     }, AccessibilityManager.prototype.activate = function activate() {
//       this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
//     }, AccessibilityManager.prototype.deactivate = function deactivate() {
//       this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
//     }, AccessibilityManager.prototype.updateAccessibleObjects = function updateAccessibleObjects(e) {
//       if (e.visible) {
//         e.accessible && e.interactive && (e._accessibleActive || this.addChild(e), e.renderId = this.renderId);
//         for (var t = e.children, i = 0; i < t.length; i++) this.updateAccessibleObjects(t[i])
//       }
//     }, AccessibilityManager.prototype.update = function update() {
//       if (this.renderer.renderingToScreen) {
//         this.updateAccessibleObjects(this.renderer._lastObjectRendered);
//         var e = this.renderer.view.getBoundingClientRect(), t = e.width / this.renderer.width,
//           i = e.height / this.renderer.height, n = this.div;
//         n.style.left = e.left + "px", n.style.top = e.top + "px", n.style.width = this.renderer.width + "px", n.style.height = this.renderer.height + "px";
//         for (var o = 0; o < this.children.length; o++) {
//           var s = this.children[o];
//           if (s.renderId !== this.renderId) s._accessibleActive = !1, r.utils.removeItems(this.children, o, 1), this.div.removeChild(s._accessibleDiv), this.pool.push(s._accessibleDiv), s._accessibleDiv = null, o--, 0 === this.children.length && this.deactivate(); else {
//             n = s._accessibleDiv;
//             var a = s.hitArea, l = s.worldTransform;
//             s.hitArea ? (n.style.left = (l.tx + a.x * l.a) * t + "px", n.style.top = (l.ty + a.y * l.d) * i + "px", n.style.width = a.width * l.a * t + "px", n.style.height = a.height * l.d * i + "px") : (a = s.getBounds(), this.capHitArea(a), n.style.left = a.x * t + "px", n.style.top = a.y * i + "px", n.style.width = a.width * t + "px", n.style.height = a.height * i + "px", n.title !== s.accessibleTitle && null !== s.accessibleTitle && (n.title = s.accessibleTitle), n.getAttribute("aria-label") !== s.accessibleHint && null !== s.accessibleHint && n.setAttribute("aria-label", s.accessibleHint))
//           }
//         }
//         this.renderId++
//       }
//     }, AccessibilityManager.prototype.capHitArea = function capHitArea(e) {
//       e.x < 0 && (e.width += e.x, e.x = 0), e.y < 0 && (e.height += e.y, e.y = 0), e.x + e.width > this.renderer.width && (e.width = this.renderer.width - e.x), e.y + e.height > this.renderer.height && (e.height = this.renderer.height - e.y)
//     }, AccessibilityManager.prototype.addChild = function addChild(e) {
//       var t = this.pool.pop();
//       t || ((t = document.createElement("button")).style.width = s + "px", t.style.height = s + "px", t.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", t.style.position = "absolute", t.style.zIndex = u, t.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? t.setAttribute("aria-live", "off") : t.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? t.setAttribute("aria-relevant", "additions") : t.setAttribute("aria-relevant", "text"), t.addEventListener("click", this._onClick.bind(this)), t.addEventListener("focus", this._onFocus.bind(this)), t.addEventListener("focusout", this._onFocusOut.bind(this))), e.accessibleTitle && null !== e.accessibleTitle ? t.title = e.accessibleTitle : e.accessibleHint && null !== e.accessibleHint || (t.title = "displayObject " + e.tabIndex), e.accessibleHint && null !== e.accessibleHint && t.setAttribute("aria-label", e.accessibleHint), e._accessibleActive = !0, e._accessibleDiv = t, t.displayObject = e, this.children.push(e), this.div.appendChild(e._accessibleDiv), e._accessibleDiv.tabIndex = e.tabIndex
//     }, AccessibilityManager.prototype._onClick = function _onClick(e) {
//       var t = this.renderer.plugins.interaction;
//       t.dispatchEvent(e.target.displayObject, "click", t.eventData)
//     }, AccessibilityManager.prototype._onFocus = function _onFocus(e) {
//       e.target.getAttribute("aria-live", "off") || e.target.setAttribute("aria-live", "assertive");
//       var t = this.renderer.plugins.interaction;
//       t.dispatchEvent(e.target.displayObject, "mouseover", t.eventData)
//     }, AccessibilityManager.prototype._onFocusOut = function _onFocusOut(e) {
//       e.target.getAttribute("aria-live", "off") || e.target.setAttribute("aria-live", "polite");
//       var t = this.renderer.plugins.interaction;
//       t.dispatchEvent(e.target.displayObject, "mouseout", t.eventData)
//     }, AccessibilityManager.prototype._onKeyDown = function _onKeyDown(e) {
//       9 === e.keyCode && this.activate()
//     }, AccessibilityManager.prototype._onMouseMove = function _onMouseMove(e) {
//       0 === e.movementX && 0 === e.movementY || this.deactivate()
//     }, AccessibilityManager.prototype.destroy = function destroy() {
//       this.div = null;
//       for (var e = 0; e < this.children.length; e++) this.children[e].div = null;
//       window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
//     }, AccessibilityManager
//   }();
//   t.default = c, r.WebGLRenderer.registerPlugin("accessibility", c), r.CanvasRenderer.registerPlugin("accessibility", c)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(198);
//   Object.defineProperty(t, "webgl", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   });
//   var n = i(199);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   Object.defineProperty(t, "canvas", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   })
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   var n = new r.Rectangle, o = function () {
//     function WebGLExtract(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, WebGLExtract), this.renderer = e, e.extract = this
//     }
//
//     return WebGLExtract.prototype.image = function image(e) {
//       var image = new Image;
//       return image.src = this.base64(e), image
//     }, WebGLExtract.prototype.base64 = function base64(e) {
//       return this.canvas(e).toDataURL()
//     }, WebGLExtract.prototype.canvas = function canvas(e) {
//       var t = this.renderer, i = void 0, o = void 0, s = void 0, a = !1, l = void 0, u = !1;
//       e && (e instanceof r.RenderTexture ? l = e : (l = this.renderer.generateTexture(e), u = !0)), l ? (o = (i = l.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]).resolution, s = l.frame, a = !1) : (o = (i = this.renderer.rootRenderTarget).resolution, a = !0, (s = n).width = i.size.width, s.height = i.size.height);
//       var c = s.width * o, h = s.height * o, d = new r.CanvasRenderTarget(c, h, 1);
//       if (i) {
//         t.bindRenderTarget(i);
//         var f = new Uint8Array(4 * c * h), p = t.gl;
//         p.readPixels(s.x * o, s.y * o, c, h, p.RGBA, p.UNSIGNED_BYTE, f);
//         var g = d.context.getImageData(0, 0, c, h);
//         g.data.set(f), d.context.putImageData(g, 0, 0), a && (d.context.scale(1, -1), d.context.drawImage(d.canvas, 0, -h))
//       }
//       return u && l.destroy(!0), d.canvas
//     }, WebGLExtract.prototype.pixels = function pixels(e) {
//       var t = this.renderer, i = void 0, o = void 0, s = void 0, a = void 0, l = !1;
//       e && (e instanceof r.RenderTexture ? a = e : (a = this.renderer.generateTexture(e), l = !0)), a ? (o = (i = a.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]).resolution, s = a.frame) : (o = (i = this.renderer.rootRenderTarget).resolution, (s = n).width = i.size.width, s.height = i.size.height);
//       var u = s.width * o, c = s.height * o, h = new Uint8Array(4 * u * c);
//       if (i) {
//         t.bindRenderTarget(i);
//         var d = t.gl;
//         d.readPixels(s.x * o, s.y * o, u, c, d.RGBA, d.UNSIGNED_BYTE, h)
//       }
//       return l && a.destroy(!0), h
//     }, WebGLExtract.prototype.destroy = function destroy() {
//       this.renderer.extract = null, this.renderer = null
//     }, WebGLExtract
//   }();
//   t.default = o, r.WebGLRenderer.registerPlugin("extract", o)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   var n = new r.Rectangle, o = function () {
//     function CanvasExtract(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, CanvasExtract), this.renderer = e, e.extract = this
//     }
//
//     return CanvasExtract.prototype.image = function image(e) {
//       var image = new Image;
//       return image.src = this.base64(e), image
//     }, CanvasExtract.prototype.base64 = function base64(e) {
//       return this.canvas(e).toDataURL()
//     }, CanvasExtract.prototype.canvas = function canvas(e) {
//       var t = this.renderer, i = void 0, o = void 0, s = void 0, a = void 0;
//       e && (a = e instanceof r.RenderTexture ? e : t.generateTexture(e)), a ? (i = a.baseTexture._canvasRenderTarget.context, o = a.baseTexture._canvasRenderTarget.resolution, s = a.frame) : (i = t.rootContext, (s = n).width = this.renderer.width, s.height = this.renderer.height);
//       var l = s.width * o, u = s.height * o, c = new r.CanvasRenderTarget(l, u, 1),
//         h = i.getImageData(s.x * o, s.y * o, l, u);
//       return c.context.putImageData(h, 0, 0), c.canvas
//     }, CanvasExtract.prototype.pixels = function pixels(e) {
//       var t = this.renderer, i = void 0, o = void 0, s = void 0, a = void 0;
//       return e && (a = e instanceof r.RenderTexture ? e : t.generateTexture(e)), a ? (i = a.baseTexture._canvasRenderTarget.context, o = a.baseTexture._canvasRenderTarget.resolution, s = a.frame) : (i = t.rootContext, (s = n).width = t.width, s.height = t.height), i.getImageData(0, 0, s.width * o, s.height * o).data
//     }, CanvasExtract.prototype.destroy = function destroy() {
//       this.renderer.extract = null, this.renderer = null
//     }, CanvasExtract
//   }();
//   t.default = o, r.CanvasRenderer.registerPlugin("extract", o)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   var o = function (e) {
//     function AnimatedSprite(t, i) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, AnimatedSprite);
//       var r = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t[0] instanceof n.Texture ? t[0] : t[0].texture));
//       return r._textures = null, r._durations = null, r.textures = t, r._autoUpdate = !1 !== i, r.animationSpeed = 1, r.loop = !0, r.onComplete = null, r.onFrameChange = null, r.onLoop = null, r._currentTime = 0, r.playing = !1, r
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(AnimatedSprite, e), AnimatedSprite.prototype.stop = function stop() {
//       this.playing && (this.playing = !1, this._autoUpdate && n.ticker.shared.remove(this.update, this))
//     }, AnimatedSprite.prototype.play = function play() {
//       this.playing || (this.playing = !0, this._autoUpdate && n.ticker.shared.add(this.update, this, n.UPDATE_PRIORITY.HIGH))
//     }, AnimatedSprite.prototype.gotoAndStop = function gotoAndStop(e) {
//       this.stop();
//       var t = this.currentFrame;
//       this._currentTime = e, t !== this.currentFrame && this.updateTexture()
//     }, AnimatedSprite.prototype.gotoAndPlay = function gotoAndPlay(e) {
//       var t = this.currentFrame;
//       this._currentTime = e, t !== this.currentFrame && this.updateTexture(), this.play()
//     }, AnimatedSprite.prototype.update = function update(e) {
//       var t = this.animationSpeed * e, i = this.currentFrame;
//       if (null !== this._durations) {
//         var r = this._currentTime % 1 * this._durations[this.currentFrame];
//         for (r += t / 60 * 1e3; r < 0;) this._currentTime--, r += this._durations[this.currentFrame];
//         var n = Math.sign(this.animationSpeed * e);
//         for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];) r -= this._durations[this.currentFrame] * n, this._currentTime += n;
//         this._currentTime += r / this._durations[this.currentFrame]
//       } else this._currentTime += t;
//       this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : i !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < i ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > i && this.onLoop()), this.updateTexture())
//     }, AnimatedSprite.prototype.updateTexture = function updateTexture() {
//       this._texture = this._textures[this.currentFrame], this._textureID = -1, this.cachedTint = 16777215, this.onFrameChange && this.onFrameChange(this.currentFrame)
//     }, AnimatedSprite.prototype.destroy = function destroy(t) {
//       this.stop(), e.prototype.destroy.call(this, t)
//     }, AnimatedSprite.fromFrames = function fromFrames(e) {
//       for (var t = [], i = 0; i < e.length; ++i) t.push(n.Texture.fromFrame(e[i]));
//       return new AnimatedSprite(t)
//     }, AnimatedSprite.fromImages = function fromImages(e) {
//       for (var t = [], i = 0; i < e.length; ++i) t.push(n.Texture.fromImage(e[i]));
//       return new AnimatedSprite(t)
//     }, r(AnimatedSprite, [{
//       key: "totalFrames", get: function get() {
//         return this._textures.length
//       }
//     }, {
//       key: "textures", get: function get() {
//         return this._textures
//       }, set: function set(e) {
//         if (e[0] instanceof n.Texture) this._textures = e, this._durations = null; else {
//           this._textures = [], this._durations = [];
//           for (var t = 0; t < e.length; t++) this._textures.push(e[t].texture), this._durations.push(e[t].time)
//         }
//         this.gotoAndStop(0), this.updateTexture()
//       }
//     }, {
//       key: "currentFrame", get: function get() {
//         var e = Math.floor(this._currentTime) % this._textures.length;
//         return e < 0 && (e += this._textures.length), e
//       }
//     }]), AnimatedSprite
//   }(n.Sprite);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), o = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(45));
//   var s = new n.Point, a = function (e) {
//     function TilingSprite(t) {
//       var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
//         r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TilingSprite);
//       var o = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return o.tileTransform = new n.TransformStatic, o._width = i, o._height = r, o._canvasPattern = null, o.uvTransform = t.transform || new n.TextureMatrix(t), o.pluginName = "tilingSprite", o.uvRespectAnchor = !1, o
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(TilingSprite, e), TilingSprite.prototype._onTextureUpdate = function _onTextureUpdate() {
//       this.uvTransform && (this.uvTransform.texture = this._texture), this.cachedTint = 16777215
//     }, TilingSprite.prototype._renderWebGL = function _renderWebGL(e) {
//       var t = this._texture;
//       t && t.valid && (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), e.setObjectRenderer(e.plugins[this.pluginName]), e.plugins[this.pluginName].render(this))
//     }, TilingSprite.prototype._renderCanvas = function _renderCanvas(e) {
//       var t = this._texture;
//       if (t.baseTexture.hasLoaded) {
//         var i = e.context, r = this.worldTransform, s = e.resolution, a = t.baseTexture, l = a.resolution,
//           u = this.tilePosition.x / this.tileScale.x % t._frame.width * l,
//           c = this.tilePosition.y / this.tileScale.y % t._frame.height * l;
//         if (this._textureID !== this._texture._updateID || this.cachedTint !== this.tint) {
//           this._textureID = this._texture._updateID;
//           var h = new n.CanvasRenderTarget(t._frame.width, t._frame.height, l);
//           16777215 !== this.tint ? (this.tintedTexture = o.default.getTintedTexture(this, this.tint), h.context.drawImage(this.tintedTexture, 0, 0)) : h.context.drawImage(a.source, -t._frame.x * l, -t._frame.y * l), this.cachedTint = this.tint, this._canvasPattern = h.context.createPattern(h.canvas, "repeat")
//         }
//         i.globalAlpha = this.worldAlpha, i.setTransform(r.a * s, r.b * s, r.c * s, r.d * s, r.tx * s, r.ty * s), e.setBlendMode(this.blendMode), i.fillStyle = this._canvasPattern, i.scale(this.tileScale.x / l, this.tileScale.y / l);
//         var d = this.anchor.x * -this._width, f = this.anchor.y * -this._height;
//         this.uvRespectAnchor ? (i.translate(u, c), i.fillRect(-u + d, -c + f, this._width / this.tileScale.x * l, this._height / this.tileScale.y * l)) : (i.translate(u + d, c + f), i.fillRect(-u, -c, this._width / this.tileScale.x * l, this._height / this.tileScale.y * l))
//       }
//     }, TilingSprite.prototype._calculateBounds = function _calculateBounds() {
//       var e = this._width * -this._anchor._x, t = this._height * -this._anchor._y,
//         i = this._width * (1 - this._anchor._x), r = this._height * (1 - this._anchor._y);
//       this._bounds.addFrame(this.transform, e, t, i, r)
//     }, TilingSprite.prototype.getLocalBounds = function getLocalBounds(t) {
//       return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new n.Rectangle), t = this._localBoundsRect), this._bounds.getRectangle(t)) : e.prototype.getLocalBounds.call(this, t)
//     }, TilingSprite.prototype.containsPoint = function containsPoint(e) {
//       this.worldTransform.applyInverse(e, s);
//       var t = this._width, i = this._height, r = -t * this.anchor._x;
//       if (s.x >= r && s.x < r + t) {
//         var n = -i * this.anchor._y;
//         if (s.y >= n && s.y < n + i) return !0
//       }
//       return !1
//     }, TilingSprite.prototype.destroy = function destroy(t) {
//       e.prototype.destroy.call(this, t), this.tileTransform = null, this.uvTransform = null
//     }, TilingSprite.from = function from(e, t, i) {
//       return new TilingSprite(n.Texture.from(e), t, i)
//     }, TilingSprite.fromFrame = function fromFrame(e, t, i) {
//       var r = n.utils.TextureCache[e];
//       if (!r) throw new Error('The frameId "' + e + '" does not exist in the texture cache ' + this);
//       return new TilingSprite(r, t, i)
//     }, TilingSprite.fromImage = function fromImage(e, t, i, r, o) {
//       return new TilingSprite(n.Texture.fromImage(e, r, o), t, i)
//     }, r(TilingSprite, [{
//       key: "clampMargin", get: function get() {
//         return this.uvTransform.clampMargin
//       }, set: function set(e) {
//         this.uvTransform.clampMargin = e, this.uvTransform.update(!0)
//       }
//     }, {
//       key: "tileScale", get: function get() {
//         return this.tileTransform.scale
//       }, set: function set(e) {
//         this.tileTransform.scale.copy(e)
//       }
//     }, {
//       key: "tilePosition", get: function get() {
//         return this.tileTransform.position
//       }, set: function set(e) {
//         this.tileTransform.position.copy(e)
//       }
//     }, {
//       key: "width", get: function get() {
//         return this._width
//       }, set: function set(e) {
//         this._width = e
//       }
//     }, {
//       key: "height", get: function get() {
//         return this._height
//       }, set: function set(e) {
//         this._height = e
//       }
//     }]), TilingSprite
//   }(n.Sprite);
//   t.default = a
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), n = i(1);
//   i(11);
//   var o = new r.Matrix, s = function (e) {
//     function TilingSpriteRenderer(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TilingSpriteRenderer);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.shader = null, i.simpleShader = null, i.quad = null, i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(TilingSpriteRenderer, e), TilingSpriteRenderer.prototype.onContextChange = function onContextChange() {
//       var e = this.renderer.gl;
//       this.shader = new r.Shader(e, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n"), this.simpleShader = new r.Shader(e, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n"), this.renderer.bindVao(null), this.quad = new r.Quad(e, this.renderer.state.attribState), this.quad.initVao(this.shader)
//     }, TilingSpriteRenderer.prototype.render = function render(e) {
//       var t = this.renderer, i = this.quad;
//       t.bindVao(i.vao);
//       var s = i.vertices;
//       s[0] = s[6] = e._width * -e.anchor.x, s[1] = s[3] = e._height * -e.anchor.y, s[2] = s[4] = e._width * (1 - e.anchor.x), s[5] = s[7] = e._height * (1 - e.anchor.y), e.uvRespectAnchor && ((s = i.uvs)[0] = s[6] = -e.anchor.x, s[1] = s[3] = -e.anchor.y, s[2] = s[4] = 1 - e.anchor.x, s[5] = s[7] = 1 - e.anchor.y), i.upload();
//       var a = e._texture, l = a.baseTexture, u = e.tileTransform.localTransform, c = e.uvTransform,
//         h = l.isPowerOfTwo && a.frame.width === l.width && a.frame.height === l.height;
//       h && (l._glTextures[t.CONTEXT_UID] ? h = l.wrapMode !== n.WRAP_MODES.CLAMP : l.wrapMode === n.WRAP_MODES.CLAMP && (l.wrapMode = n.WRAP_MODES.REPEAT));
//       var d = h ? this.simpleShader : this.shader;
//       t.bindShader(d);
//       var f = a.width, p = a.height, g = e._width, m = e._height;
//       o.set(u.a * f / g, u.b * f / m, u.c * p / g, u.d * p / m, u.tx / g, u.ty / m), o.invert(), h ? o.prepend(c.mapCoord) : (d.uniforms.uMapCoord = c.mapCoord.toArray(!0), d.uniforms.uClampFrame = c.uClampFrame, d.uniforms.uClampOffset = c.uClampOffset), d.uniforms.uTransform = o.toArray(!0), d.uniforms.uColor = r.utils.premultiplyTintToRgba(e.tint, e.worldAlpha, d.uniforms.uColor, l.premultipliedAlpha), d.uniforms.translationMatrix = e.transform.worldTransform.toArray(!0), d.uniforms.uSampler = t.bindTexture(a), t.setBlendMode(r.utils.correctBlendMode(e.blendMode, l.premultipliedAlpha)), i.vao.draw(this.renderer.gl.TRIANGLES, 6, 0)
//     }, TilingSpriteRenderer
//   }(r.ObjectRenderer);
//   t.default = s, r.WebGLRenderer.registerPlugin("tilingSprite", s)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), o = _interopRequireDefault(i(52)), s = i(3), a = _interopRequireDefault(i(5));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var l = function (e) {
//     function BitmapText(t) {
//       var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, BitmapText);
//       var r = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this));
//       return r._textWidth = 0, r._textHeight = 0, r._glyphs = [], r._font = {
//         tint: void 0 !== i.tint ? i.tint : 16777215,
//         align: i.align || "left",
//         name: null,
//         size: 0
//       }, r.font = i.font, r._text = t, r._maxWidth = 0, r._maxLineHeight = 0, r._letterSpacing = 0, r._anchor = new o.default(function () {
//         r.dirty = !0
//       }, r, 0, 0), r.dirty = !1, r.updateText(), r
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(BitmapText, e), BitmapText.prototype.updateText = function updateText() {
//       for (var e = BitmapText.fonts[this._font.name], t = this._font.size / e.size, i = new n.Point, r = [], o = [], s = this.text.replace(/(?:\r\n|\r)/g, "\n"), a = s.length, l = this._maxWidth * e.size / this._font.size, u = null, c = 0, h = 0, d = 0, f = -1, p = 0, g = 0, m = 0, v = 0; v < a; v++) {
//         var y = s.charCodeAt(v), _ = s.charAt(v);
//         if (/(?:\s)/.test(_) && (f = v, p = c), "\r" !== _ && "\n" !== _) {
//           var b = e.chars[y];
//           b && (u && b.kerning[u] && (i.x += b.kerning[u]), r.push({
//             texture: b.texture,
//             line: d,
//             charCode: y,
//             position: new n.Point(i.x + b.xOffset + this._letterSpacing / 2, i.y + b.yOffset)
//           }), i.x += b.xAdvance + this._letterSpacing, c = i.x, m = Math.max(m, b.yOffset + b.texture.height), u = y, -1 !== f && l > 0 && i.x > l && (++g, n.utils.removeItems(r, 1 + f - g, 1 + v - f), v = f, f = -1, o.push(p), h = Math.max(h, p), d++, i.x = 0, i.y += e.lineHeight, u = null))
//         } else o.push(c), h = Math.max(h, c), ++d, ++g, i.x = 0, i.y += e.lineHeight, u = null
//       }
//       var x = s.charAt(s.length - 1);
//       "\r" !== x && "\n" !== x && (/(?:\s)/.test(x) && (c = p), o.push(c), h = Math.max(h, c));
//       for (var w = [], T = 0; T <= d; T++) {
//         var C = 0;
//         "right" === this._font.align ? C = h - o[T] : "center" === this._font.align && (C = (h - o[T]) / 2), w.push(C)
//       }
//       for (var S = r.length, E = this.tint, P = 0; P < S; P++) {
//         var M = this._glyphs[P];
//         M ? M.texture = r[P].texture : (M = new n.Sprite(r[P].texture), this._glyphs.push(M)), M.position.x = (r[P].position.x + w[r[P].line]) * t, M.position.y = r[P].position.y * t, M.scale.x = M.scale.y = t, M.tint = E, M.parent || this.addChild(M)
//       }
//       for (var O = S; O < this._glyphs.length; ++O) this.removeChild(this._glyphs[O]);
//       if (this._textWidth = h * t, this._textHeight = (i.y + e.lineHeight) * t, 0 !== this.anchor.x || 0 !== this.anchor.y) for (var R = 0; R < S; R++) this._glyphs[R].x -= this._textWidth * this.anchor.x, this._glyphs[R].y -= this._textHeight * this.anchor.y;
//       this._maxLineHeight = m * t
//     }, BitmapText.prototype.updateTransform = function updateTransform() {
//       this.validate(), this.containerUpdateTransform()
//     }, BitmapText.prototype.getLocalBounds = function getLocalBounds() {
//       return this.validate(), e.prototype.getLocalBounds.call(this)
//     }, BitmapText.prototype.validate = function validate() {
//       this.dirty && (this.updateText(), this.dirty = !1)
//     }, BitmapText.registerFont = function registerFont(e, t) {
//       var i = {}, r = e.getElementsByTagName("info")[0], o = e.getElementsByTagName("common")[0],
//         l = e.getElementsByTagName("page"),
//         u = (0, s.getResolutionOfUrl)(l[0].getAttribute("file"), a.default.RESOLUTION), c = {};
//       i.font = r.getAttribute("face"), i.size = parseInt(r.getAttribute("size"), 10), i.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) / u, i.chars = {}, t instanceof n.Texture && (t = [t]);
//       for (var h = 0; h < l.length; h++) {
//         var d = l[h].getAttribute("id"), f = l[h].getAttribute("file");
//         c[d] = t instanceof Array ? t[h] : t[f]
//       }
//       for (var p = e.getElementsByTagName("char"), g = 0; g < p.length; g++) {
//         var m = p[g], v = parseInt(m.getAttribute("id"), 10), y = m.getAttribute("page") || 0,
//           _ = new n.Rectangle(parseInt(m.getAttribute("x"), 10) / u + c[y].frame.x / u, parseInt(m.getAttribute("y"), 10) / u + c[y].frame.y / u, parseInt(m.getAttribute("width"), 10) / u, parseInt(m.getAttribute("height"), 10) / u);
//         i.chars[v] = {
//           xOffset: parseInt(m.getAttribute("xoffset"), 10) / u,
//           yOffset: parseInt(m.getAttribute("yoffset"), 10) / u,
//           xAdvance: parseInt(m.getAttribute("xadvance"), 10) / u,
//           kerning: {},
//           texture: new n.Texture(c[y].baseTexture, _),
//           page: y
//         }
//       }
//       for (var b = e.getElementsByTagName("kerning"), x = 0; x < b.length; x++) {
//         var w = b[x], T = parseInt(w.getAttribute("first"), 10) / u, C = parseInt(w.getAttribute("second"), 10) / u,
//           S = parseInt(w.getAttribute("amount"), 10) / u;
//         i.chars[C] && (i.chars[C].kerning[T] = S)
//       }
//       return BitmapText.fonts[i.font] = i, i
//     }, r(BitmapText, [{
//       key: "tint", get: function get() {
//         return this._font.tint
//       }, set: function set(e) {
//         this._font.tint = "number" == typeof e && e >= 0 ? e : 16777215, this.dirty = !0
//       }
//     }, {
//       key: "align", get: function get() {
//         return this._font.align
//       }, set: function set(e) {
//         this._font.align = e || "left", this.dirty = !0
//       }
//     }, {
//       key: "anchor", get: function get() {
//         return this._anchor
//       }, set: function set(e) {
//         "number" == typeof e ? this._anchor.set(e) : this._anchor.copy(e)
//       }
//     }, {
//       key: "font", get: function get() {
//         return this._font
//       }, set: function set(e) {
//         e && ("string" == typeof e ? (e = e.split(" "), this._font.name = 1 === e.length ? e[0] : e.slice(1).join(" "), this._font.size = e.length >= 2 ? parseInt(e[0], 10) : BitmapText.fonts[this._font.name].size) : (this._font.name = e.name, this._font.size = "number" == typeof e.size ? e.size : parseInt(e.size, 10)), this.dirty = !0)
//       }
//     }, {
//       key: "text", get: function get() {
//         return this._text
//       }, set: function set(e) {
//         e = e.toString() || " ", this._text !== e && (this._text = e, this.dirty = !0)
//       }
//     }, {
//       key: "maxWidth", get: function get() {
//         return this._maxWidth
//       }, set: function set(e) {
//         this._maxWidth !== e && (this._maxWidth = e, this.dirty = !0)
//       }
//     }, {
//       key: "maxLineHeight", get: function get() {
//         return this.validate(), this._maxLineHeight
//       }
//     }, {
//       key: "textWidth", get: function get() {
//         return this.validate(), this._textWidth
//       }
//     }, {
//       key: "letterSpacing", get: function get() {
//         return this._letterSpacing
//       }, set: function set(e) {
//         this._letterSpacing !== e && (this._letterSpacing = e, this.dirty = !0)
//       }
//     }, {
//       key: "textHeight", get: function get() {
//         return this.validate(), this._textHeight
//       }
//     }]), BitmapText
//   }(n.Container);
//   t.default = l, l.fonts = {}
// }
//
// ,
//
// function (e, t, i) {
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), n = _interopRequireDefault(i(14)), o = _interopRequireDefault(i(18)), s = i(3);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var a = r.DisplayObject, l = new r.Matrix;
//   a.prototype._cacheAsBitmap = !1, a.prototype._cacheData = !1;
//   var u = function CacheData() {
//     !function _classCallCheck(e, t) {
//       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//     }(this, CacheData), this.textureCacheId = null, this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
//   };
//   Object.defineProperties(a.prototype, {
//     cacheAsBitmap: {
//       get: function get() {
//         return this._cacheAsBitmap
//       }, set: function set(e) {
//         if (this._cacheAsBitmap !== e) {
//           this._cacheAsBitmap = e;
//           var t = void 0;
//           e ? (this._cacheData || (this._cacheData = new u), (t = this._cacheData).originalRenderWebGL = this.renderWebGL, t.originalRenderCanvas = this.renderCanvas, t.originalUpdateTransform = this.updateTransform, t.originalCalculateBounds = this._calculateBounds, t.originalGetLocalBounds = this.getLocalBounds, t.originalDestroy = this.destroy, t.originalContainsPoint = this.containsPoint, t.originalMask = this._mask, t.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((t = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.renderWebGL = t.originalRenderWebGL, this.renderCanvas = t.originalRenderCanvas, this._calculateBounds = t.originalCalculateBounds, this.getLocalBounds = t.originalGetLocalBounds, this.destroy = t.originalDestroy, this.updateTransform = t.originalUpdateTransform, this.containsPoint = t.originalContainsPoint, this._mask = t.originalMask, this.filterArea = t.originalFilterArea)
//         }
//       }
//     }
//   }), a.prototype._renderCachedWebGL = function _renderCachedWebGL(e) {
//     !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(e), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(e))
//   }, a.prototype._initCachedDisplayObject = function _initCachedDisplayObject(e) {
//     if (!this._cacheData || !this._cacheData.sprite) {
//       var t = this.alpha;
//       this.alpha = 1, e.currentRenderer.flush();
//       var i = this.getLocalBounds().clone();
//       if (this._filters) {
//         var a = this._filters[0].padding;
//         i.pad(a)
//       }
//       var u = e._activeRenderTarget, c = e.filterManager.filterStack,
//         h = r.RenderTexture.create(0 | i.width, 0 | i.height), d = "cacheAsBitmap_" + (0, s.uid)();
//       this._cacheData.textureCacheId = d, o.default.addToCache(h.baseTexture, d), n.default.addToCache(h, d);
//       var f = l;
//       f.tx = -i.x, f.ty = -i.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, e.render(this, h, !0, f, !0), e.bindRenderTarget(u), e.filterManager.filterStack = c, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
//       var p = new r.Sprite(h);
//       p.transform.worldTransform = this.transform.worldTransform, p.anchor.x = -i.x / i.width, p.anchor.y = -i.y / i.height, p.alpha = t, p._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = p, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = e._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = p.containsPoint.bind(p)
//     }
//   }, a.prototype._renderCachedCanvas = function _renderCachedCanvas(e) {
//     !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(e), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(e))
//   }, a.prototype._initCachedDisplayObjectCanvas = function _initCachedDisplayObjectCanvas(e) {
//     if (!this._cacheData || !this._cacheData.sprite) {
//       var t = this.getLocalBounds(), i = this.alpha;
//       this.alpha = 1;
//       var a = e.context, u = r.RenderTexture.create(0 | t.width, 0 | t.height), c = "cacheAsBitmap_" + (0, s.uid)();
//       this._cacheData.textureCacheId = c, o.default.addToCache(u.baseTexture, c), n.default.addToCache(u, c);
//       var h = l;
//       this.transform.localTransform.copy(h), h.invert(), h.tx -= t.x, h.ty -= t.y, this.renderCanvas = this._cacheData.originalRenderCanvas, e.render(this, u, !0, h, !1), e.context = a, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
//       var d = new r.Sprite(u);
//       d.transform.worldTransform = this.transform.worldTransform, d.anchor.x = -t.x / t.width, d.anchor.y = -t.y / t.height, d._bounds = this._bounds, d.alpha = i, this.parent ? this.updateTransform() : (this.parent = e._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = d, this.containsPoint = d.containsPoint.bind(d)
//     }
//   }, a.prototype._calculateCachedBounds = function _calculateCachedBounds() {
//     this._cacheData.sprite._calculateBounds()
//   }, a.prototype._getCachedLocalBounds = function _getCachedLocalBounds() {
//     return this._cacheData.sprite.getLocalBounds()
//   }, a.prototype._destroyCachedDisplayObject = function _destroyCachedDisplayObject() {
//     this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, o.default.removeFromCache(this._cacheData.textureCacheId), n.default.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
//   }, a.prototype._cacheAsBitmapDestroy = function _cacheAsBitmapDestroy(e) {
//     this.cacheAsBitmap = !1, this.destroy(e)
//   }
// }
//
// ,
//
// function (e, t, i) {
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   r.DisplayObject.prototype.name = null, r.Container.prototype.getChildByName = function getChildByName(e) {
//     for (var t = 0; t < this.children.length; t++) if (this.children[t].name === e) return this.children[t];
//     return null
//   }
// }
//
// ,
//
// function (e, t, i) {
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   r.DisplayObject.prototype.getGlobalPosition = function getGlobalPosition() {
//     var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new r.Point,
//       t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
//     return this.parent ? this.parent.toGlobal(this.position, e, t) : (e.x = this.position.x, e.y = this.position.y), e
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(208);
//   Object.defineProperty(t, "FXAAFilter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   });
//   var n = i(209);
//   Object.defineProperty(t, "NoiseFilter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   });
//   var o = i(210);
//   Object.defineProperty(t, "DisplacementFilter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(o).default
//     }
//   });
//   var s = i(211);
//   Object.defineProperty(t, "BlurFilter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(s).default
//     }
//   });
//   var a = i(85);
//   Object.defineProperty(t, "BlurXFilter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(a).default
//     }
//   });
//   var l = i(89);
//   Object.defineProperty(t, "BlurYFilter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(l).default
//     }
//   });
//   var u = i(212);
//   Object.defineProperty(t, "ColorMatrixFilter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(u).default
//     }
//   });
//   var c = i(213);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   Object.defineProperty(t, "AlphaFilter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(c).default
//     }
//   })
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   i(11);
//   var n = function (e) {
//     function FXAAFilter() {
//       return function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, FXAAFilter), function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'))
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(FXAAFilter, e), FXAAFilter
//   }(r.Filter);
//   t.default = n
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   i(11);
//   var o = function (e) {
//     function NoiseFilter() {
//       var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
//         i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random();
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, NoiseFilter);
//       var r = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n"));
//       return r.noise = t, r.seed = i, r
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(NoiseFilter, e), r(NoiseFilter, [{
//       key: "noise", get: function get() {
//         return this.uniforms.uNoise
//       }, set: function set(e) {
//         this.uniforms.uNoise = e
//       }
//     }, {
//       key: "seed", get: function get() {
//         return this.uniforms.uSeed
//       }, set: function set(e) {
//         this.uniforms.uSeed = e
//       }
//     }]), NoiseFilter
//   }(n.Filter);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   i(11);
//   var o = function (e) {
//     function DisplacementFilter(t, i) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, DisplacementFilter);
//       var r = new n.Matrix;
//       t.renderable = !1;
//       var o = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy *= scale / filterArea.xy;\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));
//       return o.maskSprite = t, o.maskMatrix = r, o.uniforms.mapSampler = t._texture, o.uniforms.filterMatrix = r, o.uniforms.scale = {
//         x: 1,
//         y: 1
//       }, null !== i && void 0 !== i || (i = 20), o.scale = new n.Point(i, i), o
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(DisplacementFilter, e), DisplacementFilter.prototype.apply = function apply(e, t, i) {
//       this.uniforms.filterMatrix = e.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y, e.applyFilter(this, t, i)
//     }, r(DisplacementFilter, [{
//       key: "map", get: function get() {
//         return this.uniforms.mapSampler
//       }, set: function set(e) {
//         this.uniforms.mapSampler = e
//       }
//     }]), DisplacementFilter
//   }(n.Filter);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), o = _interopRequireDefault(i(85)), s = _interopRequireDefault(i(89));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var a = function (e) {
//     function BlurFilter(t, i, r, a) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, BlurFilter);
//       var l = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this));
//       return l.blurXFilter = new o.default(t, i, r, a), l.blurYFilter = new s.default(t, i, r, a), l.padding = 0, l.resolution = r || n.settings.RESOLUTION, l.quality = i || 4, l.blur = t || 8, l
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(BlurFilter, e), BlurFilter.prototype.apply = function apply(e, t, i) {
//       var r = e.getRenderTarget(!0);
//       this.blurXFilter.apply(e, t, r, !0), this.blurYFilter.apply(e, r, i, !1), e.returnRenderTarget(r)
//     }, r(BlurFilter, [{
//       key: "blur", get: function get() {
//         return this.blurXFilter.blur
//       }, set: function set(e) {
//         this.blurXFilter.blur = this.blurYFilter.blur = e, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
//       }
//     }, {
//       key: "quality", get: function get() {
//         return this.blurXFilter.quality
//       }, set: function set(e) {
//         this.blurXFilter.quality = this.blurYFilter.quality = e
//       }
//     }, {
//       key: "blurX", get: function get() {
//         return this.blurXFilter.blur
//       }, set: function set(e) {
//         this.blurXFilter.blur = e, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
//       }
//     }, {
//       key: "blurY", get: function get() {
//         return this.blurYFilter.blur
//       }, set: function set(e) {
//         this.blurYFilter.blur = e, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
//       }
//     }, {
//       key: "blendMode", get: function get() {
//         return this.blurYFilter._blendMode
//       }, set: function set(e) {
//         this.blurYFilter._blendMode = e
//       }
//     }]), BlurFilter
//   }(n.Filter);
//   t.default = a
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   i(11);
//   var o = function (e) {
//     function ColorMatrixFilter() {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, ColorMatrixFilter);
//       var t = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n"));
//       return t.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], t.alpha = 1, t
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(ColorMatrixFilter, e), ColorMatrixFilter.prototype._loadMatrix = function _loadMatrix(e) {
//       var t = e;
//       arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (this._multiply(t, this.uniforms.m, e), t = this._colorMatrix(t)), this.uniforms.m = t
//     }, ColorMatrixFilter.prototype._multiply = function _multiply(e, t, i) {
//       return e[0] = t[0] * i[0] + t[1] * i[5] + t[2] * i[10] + t[3] * i[15], e[1] = t[0] * i[1] + t[1] * i[6] + t[2] * i[11] + t[3] * i[16], e[2] = t[0] * i[2] + t[1] * i[7] + t[2] * i[12] + t[3] * i[17], e[3] = t[0] * i[3] + t[1] * i[8] + t[2] * i[13] + t[3] * i[18], e[4] = t[0] * i[4] + t[1] * i[9] + t[2] * i[14] + t[3] * i[19] + t[4], e[5] = t[5] * i[0] + t[6] * i[5] + t[7] * i[10] + t[8] * i[15], e[6] = t[5] * i[1] + t[6] * i[6] + t[7] * i[11] + t[8] * i[16], e[7] = t[5] * i[2] + t[6] * i[7] + t[7] * i[12] + t[8] * i[17], e[8] = t[5] * i[3] + t[6] * i[8] + t[7] * i[13] + t[8] * i[18], e[9] = t[5] * i[4] + t[6] * i[9] + t[7] * i[14] + t[8] * i[19] + t[9], e[10] = t[10] * i[0] + t[11] * i[5] + t[12] * i[10] + t[13] * i[15], e[11] = t[10] * i[1] + t[11] * i[6] + t[12] * i[11] + t[13] * i[16], e[12] = t[10] * i[2] + t[11] * i[7] + t[12] * i[12] + t[13] * i[17], e[13] = t[10] * i[3] + t[11] * i[8] + t[12] * i[13] + t[13] * i[18], e[14] = t[10] * i[4] + t[11] * i[9] + t[12] * i[14] + t[13] * i[19] + t[14], e[15] = t[15] * i[0] + t[16] * i[5] + t[17] * i[10] + t[18] * i[15], e[16] = t[15] * i[1] + t[16] * i[6] + t[17] * i[11] + t[18] * i[16], e[17] = t[15] * i[2] + t[16] * i[7] + t[17] * i[12] + t[18] * i[17], e[18] = t[15] * i[3] + t[16] * i[8] + t[17] * i[13] + t[18] * i[18], e[19] = t[15] * i[4] + t[16] * i[9] + t[17] * i[14] + t[18] * i[19] + t[19], e
//     }, ColorMatrixFilter.prototype._colorMatrix = function _colorMatrix(e) {
//       var t = new Float32Array(e);
//       return t[4] /= 255, t[9] /= 255, t[14] /= 255, t[19] /= 255, t
//     }, ColorMatrixFilter.prototype.brightness = function brightness(e, t) {
//       var i = [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0];
//       this._loadMatrix(i, t)
//     }, ColorMatrixFilter.prototype.greyscale = function greyscale(e, t) {
//       var i = [e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0];
//       this._loadMatrix(i, t)
//     }, ColorMatrixFilter.prototype.blackAndWhite = function blackAndWhite(e) {
//       this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.hue = function hue(e, t) {
//       e = (e || 0) / 180 * Math.PI;
//       var i = Math.cos(e), r = Math.sin(e), n = 1 / 3, o = (0, Math.sqrt)(n),
//         s = [i + (1 - i) * n, n * (1 - i) - o * r, n * (1 - i) + o * r, 0, 0, n * (1 - i) + o * r, i + n * (1 - i), n * (1 - i) - o * r, 0, 0, n * (1 - i) - o * r, n * (1 - i) + o * r, i + n * (1 - i), 0, 0, 0, 0, 0, 1, 0];
//       this._loadMatrix(s, t)
//     }, ColorMatrixFilter.prototype.contrast = function contrast(e, t) {
//       var i = (e || 0) + 1, r = -.5 * (i - 1), n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
//       this._loadMatrix(n, t)
//     }, ColorMatrixFilter.prototype.saturate = function saturate() {
//       var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments[1], i = 2 * e / 3 + 1,
//         r = -.5 * (i - 1), n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
//       this._loadMatrix(n, t)
//     }, ColorMatrixFilter.prototype.desaturate = function desaturate() {
//       this.saturate(-1)
//     }, ColorMatrixFilter.prototype.negative = function negative(e) {
//       this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.sepia = function sepia(e) {
//       this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.technicolor = function technicolor(e) {
//       this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.polaroid = function polaroid(e) {
//       this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.toBGR = function toBGR(e) {
//       this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.kodachrome = function kodachrome(e) {
//       this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.browni = function browni(e) {
//       this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.vintage = function vintage(e) {
//       this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.colorTone = function colorTone(e, t, i, r, n) {
//       e = e || .2, t = t || .15;
//       var o = ((i = i || 16770432) >> 16 & 255) / 255, s = (i >> 8 & 255) / 255, a = (255 & i) / 255,
//         l = ((r = r || 3375104) >> 16 & 255) / 255, u = (r >> 8 & 255) / 255, c = (255 & r) / 255,
//         h = [.3, .59, .11, 0, 0, o, s, a, e, 0, l, u, c, t, 0, o - l, s - u, a - c, 0, 0];
//       this._loadMatrix(h, n)
//     }, ColorMatrixFilter.prototype.night = function night(e, t) {
//       var i = [-2 * (e = e || .1), -e, 0, 0, 0, -e, 0, e, 0, 0, 0, e, 2 * e, 0, 0, 0, 0, 0, 1, 0];
//       this._loadMatrix(i, t)
//     }, ColorMatrixFilter.prototype.predator = function predator(e, t) {
//       var i = [11.224130630493164 * e, -4.794486999511719 * e, -2.8746118545532227 * e, 0 * e, .40342438220977783 * e, -3.6330697536468506 * e, 9.193157196044922 * e, -2.951810836791992 * e, 0 * e, -1.316135048866272 * e, -3.2184197902679443 * e, -4.2375030517578125 * e, 7.476448059082031 * e, 0 * e, .8044459223747253 * e, 0, 0, 0, 1, 0];
//       this._loadMatrix(i, t)
//     }, ColorMatrixFilter.prototype.lsd = function lsd(e) {
//       this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], e)
//     }, ColorMatrixFilter.prototype.reset = function reset() {
//       this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
//     }, r(ColorMatrixFilter, [{
//       key: "matrix", get: function get() {
//         return this.uniforms.m
//       }, set: function set(e) {
//         this.uniforms.m = e
//       }
//     }, {
//       key: "alpha", get: function get() {
//         return this.uniforms.uAlpha
//       }, set: function set(e) {
//         this.uniforms.uAlpha = e
//       }
//     }]), ColorMatrixFilter
//   }(n.Filter);
//   t.default = o, o.prototype.grayscale = o.prototype.greyscale
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   i(11);
//   var o = function (e) {
//     function AlphaFilter() {
//       var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, AlphaFilter);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n"));
//       return i.alpha = t, i.glShaderKey = "alpha", i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(AlphaFilter, e), r(AlphaFilter, [{
//       key: "alpha", get: function get() {
//         return this.uniforms.uAlpha
//       }, set: function set(e) {
//         this.uniforms.uAlpha = e
//       }
//     }]), AlphaFilter
//   }(n.Filter);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(90);
//   Object.defineProperty(t, "InteractionData", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   });
//   var n = i(215);
//   Object.defineProperty(t, "InteractionManager", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   });
//   var o = i(93);
//   Object.defineProperty(t, "interactiveTarget", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(o).default
//     }
//   });
//   var s = i(92);
//   Object.defineProperty(t, "InteractionTrackingData", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(s).default
//     }
//   });
//   var a = i(91);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   Object.defineProperty(t, "InteractionEvent", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(a).default
//     }
//   })
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//       return typeof e
//     } : function (e) {
//       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//     }, n = function _interopRequireWildcard(e) {
//       if (e && e.__esModule) return e;
//       var t = {};
//       if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//       return t.default = e, t
//     }(i(2)), o = _interopRequireDefault(i(90)), s = _interopRequireDefault(i(91)), a = _interopRequireDefault(i(92)),
//     l = _interopRequireDefault(i(15)), u = _interopRequireDefault(i(93));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   n.utils.mixins.delayMixin(n.DisplayObject.prototype, u.default);
//   var c = 1, h = {target: null, data: {global: null}}, d = function (e) {
//     function InteractionManager(t, i) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, InteractionManager);
//       var r = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this));
//       return i = i || {}, r.renderer = t, r.autoPreventDefault = void 0 === i.autoPreventDefault || i.autoPreventDefault, r.interactionFrequency = i.interactionFrequency || 10, r.mouse = new o.default, r.mouse.identifier = c, r.mouse.global.set(-999999), r.activeInteractionData = {}, r.activeInteractionData[c] = r.mouse, r.interactionDataPool = [], r.eventData = new s.default, r.interactionDOMElement = null, r.moveWhenInside = !1, r.eventsAdded = !1, r.mouseOverRenderer = !1, r.supportsTouchEvents = "ontouchstart" in window, r.supportsPointerEvents = !!window.PointerEvent, r.onPointerUp = r.onPointerUp.bind(r), r.processPointerUp = r.processPointerUp.bind(r), r.onPointerCancel = r.onPointerCancel.bind(r), r.processPointerCancel = r.processPointerCancel.bind(r), r.onPointerDown = r.onPointerDown.bind(r), r.processPointerDown = r.processPointerDown.bind(r), r.onPointerMove = r.onPointerMove.bind(r), r.processPointerMove = r.processPointerMove.bind(r), r.onPointerOut = r.onPointerOut.bind(r), r.processPointerOverOut = r.processPointerOverOut.bind(r), r.onPointerOver = r.onPointerOver.bind(r), r.cursorStyles = {
//         default: "inherit",
//         pointer: "pointer"
//       }, r.currentCursorMode = null, r.cursor = null, r._tempPoint = new n.Point, r.resolution = 1, r.setTargetElement(r.renderer.view, r.renderer.resolution), r
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(InteractionManager, e), InteractionManager.prototype.hitTest = function hitTest(e, t) {
//       return h.target = null, h.data.global = e, t || (t = this.renderer._lastObjectRendered), this.processInteractive(h, t, null, !0), h.target
//     }, InteractionManager.prototype.setTargetElement = function setTargetElement(e) {
//       var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
//       this.removeEvents(), this.interactionDOMElement = e, this.resolution = t, this.addEvents()
//     }, InteractionManager.prototype.addEvents = function addEvents() {
//       this.interactionDOMElement && (n.ticker.shared.add(this.update, this, n.UPDATE_PRIORITY.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0)
//     }, InteractionManager.prototype.removeEvents = function removeEvents() {
//       this.interactionDOMElement && (n.ticker.shared.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
//     }, InteractionManager.prototype.update = function update(e) {
//       if (this._deltaTime += e, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) if (this.didMove) this.didMove = !1; else {
//         for (var t in this.cursor = null, this.activeInteractionData) if (this.activeInteractionData.hasOwnProperty(t)) {
//           var i = this.activeInteractionData[t];
//           if (i.originalEvent && "touch" !== i.pointerType) {
//             var r = this.configureInteractionEventForDOMEvent(this.eventData, i.originalEvent, i);
//             this.processInteractive(r, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
//           }
//         }
//         this.setCursorMode(this.cursor)
//       }
//     }, InteractionManager.prototype.setCursorMode = function setCursorMode(e) {
//       if (e = e || "default", this.currentCursorMode !== e) {
//         this.currentCursorMode = e;
//         var t = this.cursorStyles[e];
//         if (t) switch (void 0 === t ? "undefined" : r(t)) {
//           case"string":
//             this.interactionDOMElement.style.cursor = t;
//             break;
//           case"function":
//             t(e);
//             break;
//           case"object":
//             Object.assign(this.interactionDOMElement.style, t)
//         } else "string" != typeof e || Object.prototype.hasOwnProperty.call(this.cursorStyles, e) || (this.interactionDOMElement.style.cursor = e)
//       }
//     }, InteractionManager.prototype.dispatchEvent = function dispatchEvent(e, t, i) {
//       i.stopped || (i.currentTarget = e, i.type = t, e.emit(t, i), e[t] && e[t](i))
//     }, InteractionManager.prototype.mapPositionToPoint = function mapPositionToPoint(e, t, i) {
//       var r = void 0;
//       r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
//         x: 0,
//         y: 0,
//         width: 0,
//         height: 0
//       };
//       var n = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
//       e.x = (t - r.left) * (this.interactionDOMElement.width / r.width) * n, e.y = (i - r.top) * (this.interactionDOMElement.height / r.height) * n
//     }, InteractionManager.prototype.processInteractive = function processInteractive(e, t, i, r, n) {
//       if (!t || !t.visible) return !1;
//       var o = e.data.global, s = !1, a = n = t.interactive || n, l = !0;
//       if (t.hitArea ? (r && (t.worldTransform.applyInverse(o, this._tempPoint), t.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (r = !1, l = !1)), a = !1) : t._mask && r && (t._mask.containsPoint(o) || (r = !1, l = !1)), l && t.interactiveChildren && t.children) for (var u = t.children, c = u.length - 1; c >= 0; c--) {
//         var h = u[c], d = this.processInteractive(e, h, i, r, a);
//         if (d) {
//           if (!h.parent) continue;
//           a = !1, d && (e.target && (r = !1), s = !0)
//         }
//       }
//       return n && (r && !e.target && !t.hitArea && t.containsPoint && t.containsPoint(o) && (s = !0), t.interactive && (s && !e.target && (e.target = t), i && i(e, t, !!s))), s
//     }, InteractionManager.prototype.onPointerDown = function onPointerDown(e) {
//       if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
//         var t = this.normalizeToPointerData(e);
//         this.autoPreventDefault && t[0].isNormalized && e.preventDefault();
//         for (var i = t.length, r = 0; r < i; r++) {
//           var n = t[r], o = this.getInteractionDataForPointerId(n),
//             s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
//           if (s.data.originalEvent = e, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s); else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
//             var a = 2 === n.button;
//             this.emit(a ? "rightdown" : "mousedown", this.eventData)
//           }
//         }
//       }
//     }, InteractionManager.prototype.processPointerDown = function processPointerDown(e, t, i) {
//       var r = e.data, n = e.data.identifier;
//       if (i) if (t.trackedPointers[n] || (t.trackedPointers[n] = new a.default(n)), this.dispatchEvent(t, "pointerdown", e), "touch" === r.pointerType) this.dispatchEvent(t, "touchstart", e); else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
//         var o = 2 === r.button;
//         o ? t.trackedPointers[n].rightDown = !0 : t.trackedPointers[n].leftDown = !0, this.dispatchEvent(t, o ? "rightdown" : "mousedown", e)
//       }
//     }, InteractionManager.prototype.onPointerComplete = function onPointerComplete(e, t, i) {
//       for (var r = this.normalizeToPointerData(e), n = r.length, o = e.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
//         var a = r[s], l = this.getInteractionDataForPointerId(a),
//           u = this.configureInteractionEventForDOMEvent(this.eventData, a, l);
//         if (u.data.originalEvent = e, this.processInteractive(u, this.renderer._lastObjectRendered, i, t || !o), this.emit(t ? "pointercancel" : "pointerup" + o, u), "mouse" === a.pointerType || "pen" === a.pointerType) {
//           var c = 2 === a.button;
//           this.emit(c ? "rightup" + o : "mouseup" + o, u)
//         } else "touch" === a.pointerType && (this.emit(t ? "touchcancel" : "touchend" + o, u), this.releaseInteractionDataForPointerId(a.pointerId, l))
//       }
//     }, InteractionManager.prototype.onPointerCancel = function onPointerCancel(e) {
//       this.supportsTouchEvents && "touch" === e.pointerType || this.onPointerComplete(e, !0, this.processPointerCancel)
//     }, InteractionManager.prototype.processPointerCancel = function processPointerCancel(e, t) {
//       var i = e.data, r = e.data.identifier;
//       void 0 !== t.trackedPointers[r] && (delete t.trackedPointers[r], this.dispatchEvent(t, "pointercancel", e), "touch" === i.pointerType && this.dispatchEvent(t, "touchcancel", e))
//     }, InteractionManager.prototype.onPointerUp = function onPointerUp(e) {
//       this.supportsTouchEvents && "touch" === e.pointerType || this.onPointerComplete(e, !1, this.processPointerUp)
//     }, InteractionManager.prototype.processPointerUp = function processPointerUp(e, t, i) {
//       var r = e.data, n = e.data.identifier, o = t.trackedPointers[n], s = "touch" === r.pointerType,
//         l = "mouse" === r.pointerType || "pen" === r.pointerType, u = !1;
//       if (l) {
//         var c = 2 === r.button, h = a.default.FLAGS, d = c ? h.RIGHT_DOWN : h.LEFT_DOWN,
//           f = void 0 !== o && o.flags & d;
//         i ? (this.dispatchEvent(t, c ? "rightup" : "mouseup", e), f && (this.dispatchEvent(t, c ? "rightclick" : "click", e), u = !0)) : f && this.dispatchEvent(t, c ? "rightupoutside" : "mouseupoutside", e), o && (c ? o.rightDown = !1 : o.leftDown = !1)
//       }
//       i ? (this.dispatchEvent(t, "pointerup", e), s && this.dispatchEvent(t, "touchend", e), o && (l && !u || this.dispatchEvent(t, "pointertap", e), s && (this.dispatchEvent(t, "tap", e), o.over = !1))) : o && (this.dispatchEvent(t, "pointerupoutside", e), s && this.dispatchEvent(t, "touchendoutside", e)), o && o.none && delete t.trackedPointers[n]
//     }, InteractionManager.prototype.onPointerMove = function onPointerMove(e) {
//       if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
//         var t = this.normalizeToPointerData(e);
//         "mouse" !== t[0].pointerType && "pen" !== t[0].pointerType || (this.didMove = !0, this.cursor = null);
//         for (var i = t.length, r = 0; r < i; r++) {
//           var n = t[r], o = this.getInteractionDataForPointerId(n),
//             s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
//           s.data.originalEvent = e;
//           var a = "touch" !== n.pointerType || this.moveWhenInside;
//           this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, a), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s)
//         }
//         "mouse" === t[0].pointerType && this.setCursorMode(this.cursor)
//       }
//     }, InteractionManager.prototype.processPointerMove = function processPointerMove(e, t, i) {
//       var r = e.data, n = "touch" === r.pointerType, o = "mouse" === r.pointerType || "pen" === r.pointerType;
//       o && this.processPointerOverOut(e, t, i), this.moveWhenInside && !i || (this.dispatchEvent(t, "pointermove", e), n && this.dispatchEvent(t, "touchmove", e), o && this.dispatchEvent(t, "mousemove", e))
//     }, InteractionManager.prototype.onPointerOut = function onPointerOut(e) {
//       if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
//         var t = this.normalizeToPointerData(e)[0];
//         "mouse" === t.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
//         var i = this.getInteractionDataForPointerId(t),
//           r = this.configureInteractionEventForDOMEvent(this.eventData, t, i);
//         r.data.originalEvent = t, this.processInteractive(r, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", r), "mouse" === t.pointerType || "pen" === t.pointerType ? this.emit("mouseout", r) : this.releaseInteractionDataForPointerId(i.identifier)
//       }
//     }, InteractionManager.prototype.processPointerOverOut = function processPointerOverOut(e, t, i) {
//       var r = e.data, n = e.data.identifier, o = "mouse" === r.pointerType || "pen" === r.pointerType,
//         s = t.trackedPointers[n];
//       i && !s && (s = t.trackedPointers[n] = new a.default(n)), void 0 !== s && (i && this.mouseOverRenderer ? (s.over || (s.over = !0, this.dispatchEvent(t, "pointerover", e), o && this.dispatchEvent(t, "mouseover", e)), o && null === this.cursor && (this.cursor = t.cursor)) : s.over && (s.over = !1, this.dispatchEvent(t, "pointerout", this.eventData), o && this.dispatchEvent(t, "mouseout", e), s.none && delete t.trackedPointers[n]))
//     }, InteractionManager.prototype.onPointerOver = function onPointerOver(e) {
//       var t = this.normalizeToPointerData(e)[0], i = this.getInteractionDataForPointerId(t),
//         r = this.configureInteractionEventForDOMEvent(this.eventData, t, i);
//       r.data.originalEvent = t, "mouse" === t.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", r), "mouse" !== t.pointerType && "pen" !== t.pointerType || this.emit("mouseover", r)
//     }, InteractionManager.prototype.getInteractionDataForPointerId = function getInteractionDataForPointerId(e) {
//       var t = e.pointerId, i = void 0;
//       return t === c || "mouse" === e.pointerType ? i = this.mouse : this.activeInteractionData[t] ? i = this.activeInteractionData[t] : ((i = this.interactionDataPool.pop() || new o.default).identifier = t, this.activeInteractionData[t] = i), i.copyEvent(e), i
//     }, InteractionManager.prototype.releaseInteractionDataForPointerId = function releaseInteractionDataForPointerId(e) {
//       var t = this.activeInteractionData[e];
//       t && (delete this.activeInteractionData[e], t.reset(), this.interactionDataPool.push(t))
//     }, InteractionManager.prototype.configureInteractionEventForDOMEvent = function configureInteractionEventForDOMEvent(e, t, i) {
//       return e.data = i, this.mapPositionToPoint(i.global, t.clientX, t.clientY), navigator.isCocoonJS && "touch" === t.pointerType && (i.global.x = i.global.x / this.resolution, i.global.y = i.global.y / this.resolution), "touch" === t.pointerType && (t.globalX = i.global.x, t.globalY = i.global.y), i.originalEvent = t, e.reset(), e
//     }, InteractionManager.prototype.normalizeToPointerData = function normalizeToPointerData(e) {
//       var t = [];
//       if (this.supportsTouchEvents && e instanceof TouchEvent) for (var i = 0, r = e.changedTouches.length; i < r; i++) {
//         var n = e.changedTouches[i];
//         void 0 === n.button && (n.button = e.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = e.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === e.touches.length && "touchstart" === e.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), n.twist = 0, n.tangentialPressure = 0, void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, t.push(n)
//       } else !(e instanceof MouseEvent) || this.supportsPointerEvents && e instanceof window.PointerEvent ? t.push(e) : (void 0 === e.isPrimary && (e.isPrimary = !0), void 0 === e.width && (e.width = 1), void 0 === e.height && (e.height = 1), void 0 === e.tiltX && (e.tiltX = 0), void 0 === e.tiltY && (e.tiltY = 0), void 0 === e.pointerType && (e.pointerType = "mouse"), void 0 === e.pointerId && (e.pointerId = c), void 0 === e.pressure && (e.pressure = .5), e.twist = 0, e.tangentialPressure = 0, e.isNormalized = !0, t.push(e));
//       return t
//     }, InteractionManager.prototype.destroy = function destroy() {
//       this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this._tempPoint = null
//     }, InteractionManager
//   }(l.default);
//   t.default = d, n.WebGLRenderer.registerPlugin("interaction", d), n.CanvasRenderer.registerPlugin("interaction", d)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0, t.shared = t.Resource = t.textureParser = t.getResourcePath = t.spritesheetParser = t.parseBitmapFontData = t.bitmapFontParser = t.Loader = void 0;
//   var r = i(94);
//   Object.defineProperty(t, "bitmapFontParser", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   }), Object.defineProperty(t, "parseBitmapFontData", {
//     enumerable: !0, get: function get() {
//       return r.parse
//     }
//   });
//   var n = i(99);
//   Object.defineProperty(t, "spritesheetParser", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   }), Object.defineProperty(t, "getResourcePath", {
//     enumerable: !0, get: function get() {
//       return n.getResourcePath
//     }
//   });
//   var o = i(100);
//   Object.defineProperty(t, "textureParser", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(o).default
//     }
//   });
//   var s = i(24);
//   Object.defineProperty(t, "Resource", {
//     enumerable: !0, get: function get() {
//       return s.Resource
//     }
//   });
//   var a = _interopRequireDefault(i(81)), l = _interopRequireDefault(i(218));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   t.Loader = l.default;
//   var u = new l.default;
//   u.destroy = function () {
//   }, t.shared = u;
//   var c = a.default.prototype;
//   c._loader = null, Object.defineProperty(c, "loader", {
//     get: function get() {
//       if (!this._loader) {
//         var e = this._options.sharedLoader;
//         this._loader = e ? u : new l.default
//       }
//       return this._loader
//     }
//   }), c._parentDestroy = c.destroy, c.destroy = function destroy(e, t) {
//     this._loader && (this._loader.destroy(), this._loader = null), this._parentDestroy(e, t)
//   }
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//     return typeof e
//   } : function (e) {
//     return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//   }, n = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), o = _interopRequireDefault(i(95)), s = _interopRequireDefault(i(96)), a = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(97)), l = _interopRequireDefault(i(47));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var u = /(#[\w-]+)?$/, c = function () {
//     function Loader() {
//       var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
//         i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Loader), this.baseUrl = t, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function (t, i) {
//         return e._loadResource(t, i)
//       }, this._queue = a.queue(this._boundLoadResource, i), this._queue.pause(), this.resources = {}, this.onProgress = new o.default, this.onError = new o.default, this.onLoad = new o.default, this.onStart = new o.default, this.onComplete = new o.default
//     }
//
//     return Loader.prototype.add = function add(e, t, i, n) {
//       if (Array.isArray(e)) {
//         for (var o = 0; o < e.length; ++o) this.add(e[o]);
//         return this
//       }
//       if ("object" === (void 0 === e ? "undefined" : r(e)) && (n = t || e.callback || e.onComplete, i = e, t = e.url, e = e.name || e.key || e.url), "string" != typeof t && (n = i, i = t, t = e), "string" != typeof t) throw new Error("No url passed to add resource to loader.");
//       if ("function" == typeof i && (n = i, i = null), this.loading && (!i || !i.parentResource)) throw new Error("Cannot add resources while the loader is running.");
//       if (this.resources[e]) throw new Error('Resource named "' + e + '" already exists.');
//       if (t = this._prepareUrl(t), this.resources[e] = new l.default(e, t, i), "function" == typeof n && this.resources[e].onAfterMiddleware.once(n), this.loading) {
//         for (var s = i.parentResource, a = [], u = 0; u < s.children.length; ++u) s.children[u].isComplete || a.push(s.children[u]);
//         var c = s.progressChunk * (a.length + 1) / (a.length + 2);
//         s.children.push(this.resources[e]), s.progressChunk = c;
//         for (var h = 0; h < a.length; ++h) a[h].progressChunk = c;
//         this.resources[e].progressChunk = c
//       }
//       return this._queue.push(this.resources[e]), this
//     }, Loader.prototype.pre = function pre(e) {
//       return this._beforeMiddleware.push(e), this
//     }, Loader.prototype.use = function use(e) {
//       return this._afterMiddleware.push(e), this
//     }, Loader.prototype.reset = function reset() {
//       for (var e in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
//         var t = this.resources[e];
//         t._onLoadBinding && t._onLoadBinding.detach(), t.isLoading && t.abort()
//       }
//       return this.resources = {}, this
//     }, Loader.prototype.load = function load(e) {
//       if ("function" == typeof e && this.onComplete.once(e), this.loading) return this;
//       if (this._queue.idle()) this._onStart(), this._onComplete(); else {
//         for (var t = 100 / this._queue._tasks.length, i = 0; i < this._queue._tasks.length; ++i) this._queue._tasks[i].data.progressChunk = t;
//         this._onStart(), this._queue.resume()
//       }
//       return this
//     }, Loader.prototype._prepareUrl = function _prepareUrl(e) {
//       var t = (0, s.default)(e, {strictMode: !0}), i = void 0;
//       if (i = t.protocol || !t.path || 0 === e.indexOf("//") ? e : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== e.charAt(0) ? this.baseUrl + "/" + e : this.baseUrl + e, this.defaultQueryString) {
//         var r = u.exec(i)[0];
//         -1 !== (i = i.substr(0, i.length - r.length)).indexOf("?") ? i += "&" + this.defaultQueryString : i += "?" + this.defaultQueryString, i += r
//       }
//       return i
//     }, Loader.prototype._loadResource = function _loadResource(e, t) {
//       var i = this;
//       e._dequeue = t, a.eachSeries(this._beforeMiddleware, function (t, r) {
//         t.call(i, e, function () {
//           r(e.isComplete ? {} : null)
//         })
//       }, function () {
//         e.isComplete ? i._onLoad(e) : (e._onLoadBinding = e.onComplete.once(i._onLoad, i), e.load())
//       }, !0)
//     }, Loader.prototype._onStart = function _onStart() {
//       this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
//     }, Loader.prototype._onComplete = function _onComplete() {
//       this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
//     }, Loader.prototype._onLoad = function _onLoad(e) {
//       var t = this;
//       e._onLoadBinding = null, this._resourcesParsing.push(e), e._dequeue(), a.eachSeries(this._afterMiddleware, function (i, r) {
//         i.call(t, e, r)
//       }, function () {
//         e.onAfterMiddleware.dispatch(e), t.progress += e.progressChunk, t.onProgress.dispatch(t, e), e.error ? t.onError.dispatch(e.error, t, e) : t.onLoad.dispatch(t, e), t._resourcesParsing.splice(t._resourcesParsing.indexOf(e), 1), t._queue.idle() && 0 === t._resourcesParsing.length && t._onComplete()
//       }, !0)
//     }, n(Loader, [{
//       key: "concurrency", get: function get() {
//         return this._queue.concurrency
//       }, set: function set(e) {
//         this._queue.concurrency = e
//       }
//     }]), Loader
//   }();
//   t.default = c
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(24)), n = i(219), o = _interopRequireDefault(i(15)),
//     s = _interopRequireDefault(i(100)), a = _interopRequireDefault(i(99)), l = _interopRequireDefault(i(94));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var u = function (e) {
//     function Loader(t, i) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Loader);
//       var r = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t, i));
//       o.default.call(r);
//       for (var n = 0; n < Loader._pixiMiddleware.length; ++n) r.use(Loader._pixiMiddleware[n]());
//       return r.onStart.add(function (e) {
//         return r.emit("start", e)
//       }), r.onProgress.add(function (e, t) {
//         return r.emit("progress", e, t)
//       }), r.onError.add(function (e, t, i) {
//         return r.emit("error", e, t, i)
//       }), r.onLoad.add(function (e, t) {
//         return r.emit("load", e, t)
//       }), r.onComplete.add(function (e, t) {
//         return r.emit("complete", e, t)
//       }), r
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(Loader, e), Loader.addPixiMiddleware = function addPixiMiddleware(e) {
//       Loader._pixiMiddleware.push(e)
//     }, Loader.prototype.destroy = function destroy() {
//       this.removeAllListeners(), this.reset()
//     }, Loader
//   }(r.default);
//   for (var c in t.default = u, o.default.prototype) u.prototype[c] = o.default.prototype[c];
//   u._pixiMiddleware = [n.blobMiddlewareFactory, s.default, a.default, l.default];
//   var h = r.default.Resource;
//   h.setExtensionXhrType("fnt", h.XHR_RESPONSE_TYPE.DOCUMENT)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//     return typeof e
//   } : function (e) {
//     return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//   };
//   t.blobMiddlewareFactory = function blobMiddlewareFactory() {
//     return function blobMiddleware(e, t) {
//       if (e.data) {
//         if (e.xhr && e.xhrType === n.default.XHR_RESPONSE_TYPE.BLOB) if (window.Blob && "string" != typeof e.data) {
//           if (0 === e.data.type.indexOf("image")) {
//             var i = function () {
//               var i = s.createObjectURL(e.data);
//               return e.blob = e.data, e.data = new Image, e.data.src = i, e.type = n.default.TYPE.IMAGE, e.data.onload = function () {
//                 s.revokeObjectURL(i), e.data.onload = null, t()
//               }, {v: void 0}
//             }();
//             if ("object" === (void 0 === i ? "undefined" : r(i))) return i.v
//           }
//         } else {
//           var a = e.xhr.getResponseHeader("content-type");
//           if (a && 0 === a.indexOf("image")) return e.data = new Image, e.data.src = "data:" + a + ";base64," + o.default.encodeBinary(e.xhr.responseText), e.type = n.default.TYPE.IMAGE, void (e.data.onload = function () {
//             e.data.onload = null, t()
//           })
//         }
//         t()
//       } else t()
//     }
//   };
//   var n = _interopRequireDefault(i(47)), o = _interopRequireDefault(i(98));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var s = window.URL || window.webkitURL
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(25);
//   Object.defineProperty(t, "Mesh", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   });
//   var n = i(221);
//   Object.defineProperty(t, "MeshRenderer", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   });
//   var o = i(222);
//   Object.defineProperty(t, "CanvasMeshRenderer", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(o).default
//     }
//   });
//   var s = i(101);
//   Object.defineProperty(t, "Plane", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(s).default
//     }
//   });
//   var a = i(223);
//   Object.defineProperty(t, "NineSlicePlane", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(a).default
//     }
//   });
//   var l = i(224);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   Object.defineProperty(t, "Rope", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(l).default
//     }
//   })
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), n = _interopRequireDefault(i(9)), o = _interopRequireDefault(i(25));
//   i(11);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var s = r.Matrix.IDENTITY, a = function (e) {
//     function MeshRenderer(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, MeshRenderer);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.shader = null, i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(MeshRenderer, e), MeshRenderer.prototype.onContextChange = function onContextChange() {
//       var e = this.renderer.gl;
//       this.shader = new r.Shader(e, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n")
//     }, MeshRenderer.prototype.render = function render(e) {
//       var t = this.renderer, i = t.gl, a = e._texture;
//       if (a.valid) {
//         var l = e._glDatas[t.CONTEXT_UID];
//         l || (t.bindVao(null), (l = {
//           shader: this.shader,
//           vertexBuffer: n.default.GLBuffer.createVertexBuffer(i, e.vertices, i.STREAM_DRAW),
//           uvBuffer: n.default.GLBuffer.createVertexBuffer(i, e.uvs, i.STREAM_DRAW),
//           indexBuffer: n.default.GLBuffer.createIndexBuffer(i, e.indices, i.STATIC_DRAW),
//           vao: null,
//           dirty: e.dirty,
//           indexDirty: e.indexDirty,
//           vertexDirty: e.vertexDirty
//         }).vao = new n.default.VertexArrayObject(i).addIndex(l.indexBuffer).addAttribute(l.vertexBuffer, l.shader.attributes.aVertexPosition, i.FLOAT, !1, 8, 0).addAttribute(l.uvBuffer, l.shader.attributes.aTextureCoord, i.FLOAT, !1, 8, 0), e._glDatas[t.CONTEXT_UID] = l), t.bindVao(l.vao), e.dirty !== l.dirty && (l.dirty = e.dirty, l.uvBuffer.upload(e.uvs)), e.indexDirty !== l.indexDirty && (l.indexDirty = e.indexDirty, l.indexBuffer.upload(e.indices)), e.vertexDirty !== l.vertexDirty && (l.vertexDirty = e.vertexDirty, l.vertexBuffer.upload(e.vertices)), t.bindShader(l.shader), l.shader.uniforms.uSampler = t.bindTexture(a), t.state.setBlendMode(r.utils.correctBlendMode(e.blendMode, a.baseTexture.premultipliedAlpha)), l.shader.uniforms.uTransform && (e.uploadUvTransform ? l.shader.uniforms.uTransform = e._uvTransform.mapCoord.toArray(!0) : l.shader.uniforms.uTransform = s.toArray(!0)), l.shader.uniforms.translationMatrix = e.worldTransform.toArray(!0), l.shader.uniforms.uColor = r.utils.premultiplyRgba(e.tintRgb, e.worldAlpha, l.shader.uniforms.uColor, a.baseTexture.premultipliedAlpha);
//         var u = e.drawMode === o.default.DRAW_MODES.TRIANGLE_MESH ? i.TRIANGLE_STRIP : i.TRIANGLES;
//         l.vao.draw(u, e.indices.length, 0)
//       }
//     }, MeshRenderer
//   }(r.ObjectRenderer);
//   t.default = a, r.WebGLRenderer.registerPlugin("mesh", a)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), n = function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(25));
//   var o = function () {
//     function MeshSpriteRenderer(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, MeshSpriteRenderer), this.renderer = e
//     }
//
//     return MeshSpriteRenderer.prototype.render = function render(e) {
//       var t = this.renderer, i = t.context, r = e.worldTransform, o = t.resolution;
//       t.roundPixels ? i.setTransform(r.a * o, r.b * o, r.c * o, r.d * o, r.tx * o | 0, r.ty * o | 0) : i.setTransform(r.a * o, r.b * o, r.c * o, r.d * o, r.tx * o, r.ty * o), t.context.globalAlpha = e.worldAlpha, t.setBlendMode(e.blendMode), e.drawMode === n.default.DRAW_MODES.TRIANGLE_MESH ? this._renderTriangleMesh(e) : this._renderTriangles(e)
//     }, MeshSpriteRenderer.prototype._renderTriangleMesh = function _renderTriangleMesh(e) {
//       for (var t = e.vertices.length / 2, i = 0; i < t - 2; i++) {
//         var r = 2 * i;
//         this._renderDrawTriangle(e, r, r + 2, r + 4)
//       }
//     }, MeshSpriteRenderer.prototype._renderTriangles = function _renderTriangles(e) {
//       for (var t = e.indices, i = t.length, r = 0; r < i; r += 3) {
//         var n = 2 * t[r], o = 2 * t[r + 1], s = 2 * t[r + 2];
//         this._renderDrawTriangle(e, n, o, s)
//       }
//     }, MeshSpriteRenderer.prototype._renderDrawTriangle = function _renderDrawTriangle(e, t, i, r) {
//       var n = this.renderer.context, o = e.uvs, s = e.vertices, a = e._texture;
//       if (a.valid) {
//         var l = a.baseTexture, u = l.source, c = l.width, h = l.height, d = void 0, f = void 0, p = void 0, g = void 0,
//           m = void 0, v = void 0;
//         if (e.uploadUvTransform) {
//           var y = e._uvTransform.mapCoord;
//           d = (o[t] * y.a + o[t + 1] * y.c + y.tx) * l.width, f = (o[i] * y.a + o[i + 1] * y.c + y.tx) * l.width, p = (o[r] * y.a + o[r + 1] * y.c + y.tx) * l.width, g = (o[t] * y.b + o[t + 1] * y.d + y.ty) * l.height, m = (o[i] * y.b + o[i + 1] * y.d + y.ty) * l.height, v = (o[r] * y.b + o[r + 1] * y.d + y.ty) * l.height
//         } else d = o[t] * l.width, f = o[i] * l.width, p = o[r] * l.width, g = o[t + 1] * l.height, m = o[i + 1] * l.height, v = o[r + 1] * l.height;
//         var _ = s[t], b = s[i], x = s[r], w = s[t + 1], T = s[i + 1], C = s[r + 1],
//           S = e.canvasPadding / this.renderer.resolution;
//         if (S > 0) {
//           var E = S / Math.abs(e.worldTransform.a), P = S / Math.abs(e.worldTransform.d), M = (_ + b + x) / 3,
//             O = (w + T + C) / 3, R = _ - M, D = w - O, A = Math.sqrt(R * R + D * D);
//           _ = M + R / A * (A + E), w = O + D / A * (A + P), D = T - O, b = M + (R = b - M) / (A = Math.sqrt(R * R + D * D)) * (A + E), T = O + D / A * (A + P), D = C - O, x = M + (R = x - M) / (A = Math.sqrt(R * R + D * D)) * (A + E), C = O + D / A * (A + P)
//         }
//         n.save(), n.beginPath(), n.moveTo(_, w), n.lineTo(b, T), n.lineTo(x, C), n.closePath(), n.clip();
//         var k = d * m + g * p + f * v - m * p - g * f - d * v, I = _ * m + g * x + b * v - m * x - g * b - _ * v,
//           L = d * b + _ * p + f * x - b * p - _ * f - d * x,
//           N = d * m * x + g * b * p + _ * f * v - _ * m * p - g * f * x - d * b * v,
//           F = w * m + g * C + T * v - m * C - g * T - w * v, B = d * T + w * p + f * C - T * p - w * f - d * C,
//           j = d * m * C + g * T * p + w * f * v - w * m * p - g * f * C - d * T * v;
//         n.transform(I / k, F / k, L / k, B / k, N / k, j / k), n.drawImage(u, 0, 0, c * l.resolution, h * l.resolution, 0, 0, c, h), n.restore(), this.renderer.invalidateBlendMode()
//       }
//     }, MeshSpriteRenderer.prototype.renderMeshFlat = function renderMeshFlat(e) {
//       var t = this.renderer.context, i = e.vertices, r = i.length / 2;
//       t.beginPath();
//       for (var n = 1; n < r - 2; ++n) {
//         var o = 2 * n, s = i[o], a = i[o + 1], l = i[o + 2], u = i[o + 3], c = i[o + 4], h = i[o + 5];
//         t.moveTo(s, a), t.lineTo(l, u), t.lineTo(c, h)
//       }
//       t.fillStyle = "#FF0000", t.fill(), t.closePath()
//     }, MeshSpriteRenderer.prototype.destroy = function destroy() {
//       this.renderer = null
//     }, MeshSpriteRenderer
//   }();
//   t.default = o, r.CanvasRenderer.registerPlugin("mesh", o)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }();
//   var n = 10, o = function (e) {
//     function NineSlicePlane(t, i, r, o, s) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, NineSlicePlane);
//       var a = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t, 4, 4));
//       return a._origWidth = t.orig.width, a._origHeight = t.orig.height, a._width = a._origWidth, a._height = a._origHeight, a._leftWidth = void 0 !== i ? i : n, a._rightWidth = void 0 !== o ? o : n, a._topHeight = void 0 !== r ? r : n, a._bottomHeight = void 0 !== s ? s : n, a.refresh(!0), a
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(NineSlicePlane, e), NineSlicePlane.prototype.updateHorizontalVertices = function updateHorizontalVertices() {
//       var e = this.vertices, t = this._topHeight + this._bottomHeight, i = this._height > t ? 1 : this._height / t;
//       e[9] = e[11] = e[13] = e[15] = this._topHeight * i, e[17] = e[19] = e[21] = e[23] = this._height - this._bottomHeight * i, e[25] = e[27] = e[29] = e[31] = this._height
//     }, NineSlicePlane.prototype.updateVerticalVertices = function updateVerticalVertices() {
//       var e = this.vertices, t = this._leftWidth + this._rightWidth, i = this._width > t ? 1 : this._width / t;
//       e[2] = e[10] = e[18] = e[26] = this._leftWidth * i, e[4] = e[12] = e[20] = e[28] = this._width - this._rightWidth * i, e[6] = e[14] = e[22] = e[30] = this._width
//     }, NineSlicePlane.prototype._renderCanvas = function _renderCanvas(e) {
//       var t = e.context;
//       t.globalAlpha = this.worldAlpha, e.setBlendMode(this.blendMode);
//       var i = this.worldTransform, r = e.resolution;
//       e.roundPixels ? t.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r | 0, i.ty * r | 0) : t.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r, i.ty * r);
//       var n = this._texture.baseTexture, o = n.source, s = n.width * n.resolution, a = n.height * n.resolution;
//       this.drawSegment(t, o, s, a, 0, 1, 10, 11), this.drawSegment(t, o, s, a, 2, 3, 12, 13), this.drawSegment(t, o, s, a, 4, 5, 14, 15), this.drawSegment(t, o, s, a, 8, 9, 18, 19), this.drawSegment(t, o, s, a, 10, 11, 20, 21), this.drawSegment(t, o, s, a, 12, 13, 22, 23), this.drawSegment(t, o, s, a, 16, 17, 26, 27), this.drawSegment(t, o, s, a, 18, 19, 28, 29), this.drawSegment(t, o, s, a, 20, 21, 30, 31)
//     }, NineSlicePlane.prototype.drawSegment = function drawSegment(e, t, i, r, n, o, s, a) {
//       var l = this.uvs, u = this.vertices, c = (l[s] - l[n]) * i, h = (l[a] - l[o]) * r, d = u[s] - u[n],
//         f = u[a] - u[o];
//       c < 1 && (c = 1), h < 1 && (h = 1), d < 1 && (d = 1), f < 1 && (f = 1), e.drawImage(t, l[n] * i, l[o] * r, c, h, u[n], u[o], d, f)
//     }, NineSlicePlane.prototype._refresh = function _refresh() {
//       e.prototype._refresh.call(this);
//       var t = this.uvs, i = this._texture;
//       this._origWidth = i.orig.width, this._origHeight = i.orig.height;
//       var r = 1 / this._origWidth, n = 1 / this._origHeight;
//       t[0] = t[8] = t[16] = t[24] = 0, t[1] = t[3] = t[5] = t[7] = 0, t[6] = t[14] = t[22] = t[30] = 1, t[25] = t[27] = t[29] = t[31] = 1, t[2] = t[10] = t[18] = t[26] = r * this._leftWidth, t[4] = t[12] = t[20] = t[28] = 1 - r * this._rightWidth, t[9] = t[11] = t[13] = t[15] = n * this._topHeight, t[17] = t[19] = t[21] = t[23] = 1 - n * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.dirty++, this.multiplyUvs()
//     }, r(NineSlicePlane, [{
//       key: "width", get: function get() {
//         return this._width
//       }, set: function set(e) {
//         this._width = e, this._refresh()
//       }
//     }, {
//       key: "height", get: function get() {
//         return this._height
//       }, set: function set(e) {
//         this._height = e, this._refresh()
//       }
//     }, {
//       key: "leftWidth", get: function get() {
//         return this._leftWidth
//       }, set: function set(e) {
//         this._leftWidth = e, this._refresh()
//       }
//     }, {
//       key: "rightWidth", get: function get() {
//         return this._rightWidth
//       }, set: function set(e) {
//         this._rightWidth = e, this._refresh()
//       }
//     }, {
//       key: "topHeight", get: function get() {
//         return this._topHeight
//       }, set: function set(e) {
//         this._topHeight = e, this._refresh()
//       }
//     }, {
//       key: "bottomHeight", get: function get() {
//         return this._bottomHeight
//       }, set: function set(e) {
//         this._bottomHeight = e, this._refresh()
//       }
//     }]), NineSlicePlane
//   }(function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(101)).default);
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function (e) {
//     function Rope(t, i) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, Rope);
//       var r = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return r.points = i, r.vertices = new Float32Array(4 * i.length), r.uvs = new Float32Array(4 * i.length), r.colors = new Float32Array(2 * i.length), r.indices = new Uint16Array(2 * i.length), r.autoUpdate = !0, r.refresh(), r
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(Rope, e), Rope.prototype._refresh = function _refresh() {
//       var e = this.points;
//       if (!(e.length < 1) && this._texture._uvs) {
//         this.vertices.length / 4 !== e.length && (this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length));
//         var t = this.uvs, i = this.indices, r = this.colors;
//         t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, r[0] = 1, r[1] = 1, i[0] = 0, i[1] = 1;
//         for (var n = e.length, o = 1; o < n; o++) {
//           var s = 4 * o, a = o / (n - 1);
//           t[s] = a, t[s + 1] = 0, t[s + 2] = a, t[s + 3] = 1, r[s = 2 * o] = 1, r[s + 1] = 1, i[s = 2 * o] = s, i[s + 1] = s + 1
//         }
//         this.dirty++, this.indexDirty++, this.multiplyUvs(), this.refreshVertices()
//       }
//     }, Rope.prototype.refreshVertices = function refreshVertices() {
//       var e = this.points;
//       if (!(e.length < 1)) for (var t = e[0], i = void 0, r = 0, n = 0, o = this.vertices, s = e.length, a = 0; a < s; a++) {
//         var l = e[a], u = 4 * a;
//         n = -((i = a < e.length - 1 ? e[a + 1] : l).x - t.x), r = i.y - t.y;
//         var c = 10 * (1 - a / (s - 1));
//         c > 1 && (c = 1);
//         var h = Math.sqrt(r * r + n * n), d = this._texture.height / 2;
//         r /= h, n /= h, r *= d, n *= d, o[u] = l.x + r, o[u + 1] = l.y + n, o[u + 2] = l.x - r, o[u + 3] = l.y - n, t = l
//       }
//     }, Rope.prototype.updateTransform = function updateTransform() {
//       this.autoUpdate && this.refreshVertices(), this.containerUpdateTransform()
//     }, Rope
//   }(function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(25)).default);
//   t.default = r
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(226);
//   Object.defineProperty(t, "ParticleContainer", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   });
//   var n = i(227);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   Object.defineProperty(t, "ParticleRenderer", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   })
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function () {
//     function defineProperties(e, t) {
//       for (var i = 0; i < t.length; i++) {
//         var r = t[i];
//         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
//       }
//     }
//
//     return function (e, t, i) {
//       return t && defineProperties(e.prototype, t), i && defineProperties(e, i), e
//     }
//   }(), n = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), o = i(3);
//   var s = function (e) {
//     function ParticleContainer() {
//       var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500, i = arguments[1],
//         r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
//         o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, ParticleContainer);
//       var s = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this));
//       return r > 16384 && (r = 16384), r > t && (r = t), s._properties = [!1, !0, !1, !1, !1], s._maxSize = t, s._batchSize = r, s._glBuffers = {}, s._bufferUpdateIDs = [], s._updateID = 0, s.interactiveChildren = !1, s.blendMode = n.BLEND_MODES.NORMAL, s.autoResize = o, s.roundPixels = !0, s.baseTexture = null, s.setProperties(i), s._tint = 0, s.tintRgb = new Float32Array(4), s.tint = 16777215, s
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(ParticleContainer, e), ParticleContainer.prototype.setProperties = function setProperties(e) {
//       e && (this._properties[0] = "vertices" in e || "scale" in e ? !!e.vertices || !!e.scale : this._properties[0], this._properties[1] = "position" in e ? !!e.position : this._properties[1], this._properties[2] = "rotation" in e ? !!e.rotation : this._properties[2], this._properties[3] = "uvs" in e ? !!e.uvs : this._properties[3], this._properties[4] = "tint" in e || "alpha" in e ? !!e.tint || !!e.alpha : this._properties[4])
//     }, ParticleContainer.prototype.updateTransform = function updateTransform() {
//       this.displayObjectUpdateTransform()
//     }, ParticleContainer.prototype.renderWebGL = function renderWebGL(e) {
//       var t = this;
//       this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function () {
//         return t.onChildrenChange(0)
//       })), e.setObjectRenderer(e.plugins.particle), e.plugins.particle.render(this))
//     }, ParticleContainer.prototype.onChildrenChange = function onChildrenChange(e) {
//       for (var t = Math.floor(e / this._batchSize); this._bufferUpdateIDs.length < t;) this._bufferUpdateIDs.push(0);
//       this._bufferUpdateIDs[t] = ++this._updateID
//     }, ParticleContainer.prototype.renderCanvas = function renderCanvas(e) {
//       if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
//         var t = e.context, i = this.worldTransform, r = !0, n = 0, o = 0, s = 0, a = 0;
//         e.setBlendMode(this.blendMode), t.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
//         for (var l = 0; l < this.children.length; ++l) {
//           var u = this.children[l];
//           if (u.visible) {
//             var c = u._texture.frame;
//             if (t.globalAlpha = this.worldAlpha * u.alpha, u.rotation % (2 * Math.PI) == 0) r && (t.setTransform(i.a, i.b, i.c, i.d, i.tx * e.resolution, i.ty * e.resolution), r = !1), n = u.anchor.x * (-c.width * u.scale.x) + u.position.x + .5, o = u.anchor.y * (-c.height * u.scale.y) + u.position.y + .5, s = c.width * u.scale.x, a = c.height * u.scale.y; else {
//               r || (r = !0), u.displayObjectUpdateTransform();
//               var h = u.worldTransform;
//               e.roundPixels ? t.setTransform(h.a, h.b, h.c, h.d, h.tx * e.resolution | 0, h.ty * e.resolution | 0) : t.setTransform(h.a, h.b, h.c, h.d, h.tx * e.resolution, h.ty * e.resolution), n = u.anchor.x * -c.width + .5, o = u.anchor.y * -c.height + .5, s = c.width, a = c.height
//             }
//             var d = u._texture.baseTexture.resolution;
//             t.drawImage(u._texture.baseTexture.source, c.x * d, c.y * d, c.width * d, c.height * d, n * e.resolution, o * e.resolution, s * e.resolution, a * e.resolution)
//           }
//         }
//       }
//     }, ParticleContainer.prototype.destroy = function destroy(t) {
//       if (e.prototype.destroy.call(this, t), this._buffers) for (var i = 0; i < this._buffers.length; ++i) this._buffers[i].destroy();
//       this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
//     }, r(ParticleContainer, [{
//       key: "tint", get: function get() {
//         return this._tint
//       }, set: function set(e) {
//         this._tint = e, (0, o.hex2rgb)(e, this.tintRgb)
//       }
//     }]), ParticleContainer
//   }(n.Container);
//   t.default = s
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2)), n = _interopRequireDefault(i(228)), o = _interopRequireDefault(i(229)), s = i(3);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var a = function (e) {
//     function ParticleRenderer(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, ParticleRenderer);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.shader = null, i.indexBuffer = null, i.properties = null, i.tempMatrix = new r.Matrix, i.CONTEXT_UID = 0, i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(ParticleRenderer, e), ParticleRenderer.prototype.onContextChange = function onContextChange() {
//       var e = this.renderer.gl;
//       this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new n.default(e), this.properties = [{
//         attribute: this.shader.attributes.aVertexPosition,
//         size: 2,
//         uploadFunction: this.uploadVertices,
//         offset: 0
//       }, {
//         attribute: this.shader.attributes.aPositionCoord,
//         size: 2,
//         uploadFunction: this.uploadPosition,
//         offset: 0
//       }, {
//         attribute: this.shader.attributes.aRotation,
//         size: 1,
//         uploadFunction: this.uploadRotation,
//         offset: 0
//       }, {
//         attribute: this.shader.attributes.aTextureCoord,
//         size: 2,
//         uploadFunction: this.uploadUvs,
//         offset: 0
//       }, {
//         attribute: this.shader.attributes.aColor,
//         size: 1,
//         unsignedByte: !0,
//         uploadFunction: this.uploadTint,
//         offset: 0
//       }]
//     }, ParticleRenderer.prototype.start = function start() {
//       this.renderer.bindShader(this.shader)
//     }, ParticleRenderer.prototype.render = function render(e) {
//       var t = e.children, i = e._maxSize, n = e._batchSize, o = this.renderer, s = t.length;
//       if (0 !== s) {
//         s > i && (s = i);
//         var a = e._glBuffers[o.CONTEXT_UID];
//         a || (a = e._glBuffers[o.CONTEXT_UID] = this.generateBuffers(e));
//         var l = t[0]._texture.baseTexture;
//         this.renderer.setBlendMode(r.utils.correctBlendMode(e.blendMode, l.premultipliedAlpha));
//         var u = o.gl, c = e.worldTransform.copy(this.tempMatrix);
//         c.prepend(o._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = c.toArray(!0), this.shader.uniforms.uColor = r.utils.premultiplyRgba(e.tintRgb, e.worldAlpha, this.shader.uniforms.uColor, l.premultipliedAlpha), this.shader.uniforms.uSampler = o.bindTexture(l);
//         for (var h = !1, d = 0, f = 0; d < s; d += n, f += 1) {
//           var p = s - d;
//           if (p > n && (p = n), f >= a.length) {
//             if (!e.autoResize) break;
//             a.push(this._generateOneMoreBuffer(e))
//           }
//           var g = a[f];
//           g.uploadDynamic(t, d, p);
//           var m = e._bufferUpdateIDs[f] || 0;
//           (h = h || g._updateID < m) && (g._updateID = e._updateID, g.uploadStatic(t, d, p)), o.bindVao(g.vao), g.vao.draw(u.TRIANGLES, 6 * p)
//         }
//       }
//     }, ParticleRenderer.prototype.generateBuffers = function generateBuffers(e) {
//       for (var t = this.renderer.gl, i = [], r = e._maxSize, n = e._batchSize, s = e._properties, a = 0; a < r; a += n) i.push(new o.default(t, this.properties, s, n));
//       return i
//     }, ParticleRenderer.prototype._generateOneMoreBuffer = function _generateOneMoreBuffer(e) {
//       var t = this.renderer.gl, i = e._batchSize, r = e._properties;
//       return new o.default(t, this.properties, r, i)
//     }, ParticleRenderer.prototype.uploadVertices = function uploadVertices(e, t, i, r, n, o) {
//       for (var s = 0, a = 0, l = 0, u = 0, c = 0; c < i; ++c) {
//         var h = e[t + c], d = h._texture, f = h.scale.x, p = h.scale.y, g = d.trim, m = d.orig;
//         g ? (s = (a = g.x - h.anchor.x * m.width) + g.width, l = (u = g.y - h.anchor.y * m.height) + g.height) : (s = m.width * (1 - h.anchor.x), a = m.width * -h.anchor.x, l = m.height * (1 - h.anchor.y), u = m.height * -h.anchor.y), r[o] = a * f, r[o + 1] = u * p, r[o + n] = s * f, r[o + n + 1] = u * p, r[o + 2 * n] = s * f, r[o + 2 * n + 1] = l * p, r[o + 3 * n] = a * f, r[o + 3 * n + 1] = l * p, o += 4 * n
//       }
//     }, ParticleRenderer.prototype.uploadPosition = function uploadPosition(e, t, i, r, n, o) {
//       for (var s = 0; s < i; s++) {
//         var a = e[t + s].position;
//         r[o] = a.x, r[o + 1] = a.y, r[o + n] = a.x, r[o + n + 1] = a.y, r[o + 2 * n] = a.x, r[o + 2 * n + 1] = a.y, r[o + 3 * n] = a.x, r[o + 3 * n + 1] = a.y, o += 4 * n
//       }
//     }, ParticleRenderer.prototype.uploadRotation = function uploadRotation(e, t, i, r, n, o) {
//       for (var s = 0; s < i; s++) {
//         var a = e[t + s].rotation;
//         r[o] = a, r[o + n] = a, r[o + 2 * n] = a, r[o + 3 * n] = a, o += 4 * n
//       }
//     }, ParticleRenderer.prototype.uploadUvs = function uploadUvs(e, t, i, r, n, o) {
//       for (var s = 0; s < i; ++s) {
//         var a = e[t + s]._texture._uvs;
//         a ? (r[o] = a.x0, r[o + 1] = a.y0, r[o + n] = a.x1, r[o + n + 1] = a.y1, r[o + 2 * n] = a.x2, r[o + 2 * n + 1] = a.y2, r[o + 3 * n] = a.x3, r[o + 3 * n + 1] = a.y3, o += 4 * n) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + 2 * n] = 0, r[o + 2 * n + 1] = 0, r[o + 3 * n] = 0, r[o + 3 * n + 1] = 0, o += 4 * n)
//       }
//     }, ParticleRenderer.prototype.uploadTint = function uploadTint(e, t, i, r, n, o) {
//       for (var a = 0; a < i; ++a) {
//         var l = e[t + a], u = l._texture.baseTexture.premultipliedAlpha, c = l.alpha,
//           h = c < 1 && u ? (0, s.premultiplyTint)(l._tintRGB, c) : l._tintRGB + (255 * c << 24);
//         r[o] = h, r[o + n] = h, r[o + 2 * n] = h, r[o + 3 * n] = h, o += 4 * n
//       }
//     }, ParticleRenderer.prototype.destroy = function destroy() {
//       this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), e.prototype.destroy.call(this), this.shader.destroy(), this.indices = null, this.tempMatrix = null
//     }, ParticleRenderer
//   }(r.ObjectRenderer);
//   t.default = a, r.WebGLRenderer.registerPlugin("particle", a)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function (e) {
//     function ParticleShader(t) {
//       return function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, ParticleShader), function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "attribute vec2 aPositionCoord;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "uniform vec4 uColor;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   vec2 v = vec2(x, y);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor * uColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor;", "  gl_FragColor = color;", "}"].join("\n")))
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(ParticleShader, e), ParticleShader
//   }(function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(23)).default);
//   t.default = r
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = _interopRequireDefault(i(9)), n = _interopRequireDefault(i(46));
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   var o = function () {
//     function ParticleBuffer(e, t, i, r) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, ParticleBuffer), this.gl = e, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
//       for (var n = 0; n < t.length; ++n) {
//         var o = t[n];
//         o = {
//           attribute: o.attribute,
//           size: o.size,
//           uploadFunction: o.uploadFunction,
//           unsignedByte: o.unsignedByte,
//           offset: o.offset
//         }, i[n] ? this.dynamicProperties.push(o) : this.staticProperties.push(o)
//       }
//       this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
//     }
//
//     return ParticleBuffer.prototype.initBuffers = function initBuffers() {
//       var e = this.gl, t = 0;
//       this.indices = (0, n.default)(this.size), this.indexBuffer = r.default.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW), this.dynamicStride = 0;
//       for (var i = 0; i < this.dynamicProperties.length; ++i) {
//         var o = this.dynamicProperties[i];
//         o.offset = t, t += o.size, this.dynamicStride += o.size
//       }
//       var s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
//       this.dynamicData = new Float32Array(s), this.dynamicDataUint32 = new Uint32Array(s), this.dynamicBuffer = r.default.GLBuffer.createVertexBuffer(e, s, e.STREAM_DRAW);
//       var a = 0;
//       this.staticStride = 0;
//       for (var l = 0; l < this.staticProperties.length; ++l) {
//         var u = this.staticProperties[l];
//         u.offset = a, a += u.size, this.staticStride += u.size
//       }
//       var c = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
//       this.staticData = new Float32Array(c), this.staticDataUint32 = new Uint32Array(c), this.staticBuffer = r.default.GLBuffer.createVertexBuffer(e, c, e.STATIC_DRAW), this.vao = new r.default.VertexArrayObject(e).addIndex(this.indexBuffer);
//       for (var h = 0; h < this.dynamicProperties.length; ++h) {
//         var d = this.dynamicProperties[h];
//         d.unsignedByte ? this.vao.addAttribute(this.dynamicBuffer, d.attribute, e.UNSIGNED_BYTE, !0, 4 * this.dynamicStride, 4 * d.offset) : this.vao.addAttribute(this.dynamicBuffer, d.attribute, e.FLOAT, !1, 4 * this.dynamicStride, 4 * d.offset)
//       }
//       for (var f = 0; f < this.staticProperties.length; ++f) {
//         var p = this.staticProperties[f];
//         p.unsignedByte ? this.vao.addAttribute(this.staticBuffer, p.attribute, e.UNSIGNED_BYTE, !0, 4 * this.staticStride, 4 * p.offset) : this.vao.addAttribute(this.staticBuffer, p.attribute, e.FLOAT, !1, 4 * this.staticStride, 4 * p.offset)
//       }
//     }, ParticleBuffer.prototype.uploadDynamic = function uploadDynamic(e, t, i) {
//       for (var r = 0; r < this.dynamicProperties.length; r++) {
//         var n = this.dynamicProperties[r];
//         n.uploadFunction(e, t, i, n.unsignedByte ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
//       }
//       this.dynamicBuffer.upload()
//     }, ParticleBuffer.prototype.uploadStatic = function uploadStatic(e, t, i) {
//       for (var r = 0; r < this.staticProperties.length; r++) {
//         var n = this.staticProperties[r];
//         n.uploadFunction(e, t, i, n.unsignedByte ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
//       }
//       this.staticBuffer.upload()
//     }, ParticleBuffer.prototype.destroy = function destroy() {
//       this.dynamicProperties = null, this.dynamicBuffer.destroy(), this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer.destroy(), this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null
//     }, ParticleBuffer
//   }();
//   t.default = o
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = i(231);
//   Object.defineProperty(t, "webgl", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(r).default
//     }
//   });
//   var n = i(232);
//   Object.defineProperty(t, "canvas", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(n).default
//     }
//   });
//   var o = i(48);
//   Object.defineProperty(t, "BasePrepare", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(o).default
//     }
//   });
//   var s = i(102);
//   Object.defineProperty(t, "CountLimiter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(s).default
//     }
//   });
//   var a = i(233);
//
//   function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }
//
//   Object.defineProperty(t, "TimeLimiter", {
//     enumerable: !0, get: function get() {
//       return _interopRequireDefault(a).default
//     }
//   })
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   var n = function (e) {
//     function WebGLPrepare(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, WebGLPrepare);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.uploadHookHelper = i.renderer, i.registerFindHook(findGraphics), i.registerUploadHook(uploadBaseTextures), i.registerUploadHook(uploadGraphics), i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(WebGLPrepare, e), WebGLPrepare
//   }(function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(48)).default);
//
//   function uploadBaseTextures(e, t) {
//     return t instanceof r.BaseTexture && (t._glTextures[e.CONTEXT_UID] || e.textureManager.updateTexture(t), !0)
//   }
//
//   function uploadGraphics(e, t) {
//     return t instanceof r.Graphics && ((t.dirty || t.clearDirty || !t._webGL[e.plugins.graphics.CONTEXT_UID]) && e.plugins.graphics.updateGraphics(t), !0)
//   }
//
//   function findGraphics(e, t) {
//     return e instanceof r.Graphics && (t.push(e), !0)
//   }
//
//   t.default = n, r.WebGLRenderer.registerPlugin("prepare", n)
// }
//
// ,
//
// function (e, t, i) {
//   t.__esModule = !0;
//   var r = function _interopRequireWildcard(e) {
//     if (e && e.__esModule) return e;
//     var t = {};
//     if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
//     return t.default = e, t
//   }(i(2));
//   var n = 16, o = function (e) {
//     function CanvasPrepare(t) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, CanvasPrepare);
//       var i = function _possibleConstructorReturn(e, t) {
//         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return !t || "object" != typeof t && "function" != typeof t ? e : t
//       }(this, e.call(this, t));
//       return i.uploadHookHelper = i, i.canvas = document.createElement("canvas"), i.canvas.width = n, i.canvas.height = n, i.ctx = i.canvas.getContext("2d"), i.registerUploadHook(uploadBaseTextures), i
//     }
//
//     return function _inherits(e, t) {
//       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//       e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//           value: e,
//           enumerable: !1,
//           writable: !0,
//           configurable: !0
//         }
//       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
//     }(CanvasPrepare, e), CanvasPrepare.prototype.destroy = function destroy() {
//       e.prototype.destroy.call(this), this.ctx = null, this.canvas = null
//     }, CanvasPrepare
//   }(function _interopRequireDefault(e) {
//     return e && e.__esModule ? e : {default: e}
//   }(i(48)).default);
//
//   function uploadBaseTextures(e, t) {
//     if (t instanceof r.BaseTexture) {
//       var i = t.source, n = 0 === i.width ? e.canvas.width : Math.min(e.canvas.width, i.width),
//         o = 0 === i.height ? e.canvas.height : Math.min(e.canvas.height, i.height);
//       return e.ctx.drawImage(i, 0, 0, n, o, 0, 0, e.canvas.width, e.canvas.height), !0
//     }
//     return !1
//   }
//
//   t.default = o, r.CanvasRenderer.registerPlugin("prepare", o)
// }
//
// ,
//
// function (e, t) {
//   t.__esModule = !0;
//   var i = function () {
//     function TimeLimiter(e) {
//       !function _classCallCheck(e, t) {
//         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//       }(this, TimeLimiter), this.maxMilliseconds = e, this.frameStart = 0
//     }
//
//     return TimeLimiter.prototype.beginFrame = function beginFrame() {
//       this.frameStart = Date.now()
//     }, TimeLimiter.prototype.allowedToUpload = function allowedToUpload() {
//       return Date.now() - this.frameStart < this.maxMilliseconds
//     }, TimeLimiter
//   }();
//   t.default = i
// }
//
// ,
//
// function (e, t, i) {
//   (function (t) {
//     var i = void 0 !== e && e.exports && void 0 !== t ? t : this || window;
