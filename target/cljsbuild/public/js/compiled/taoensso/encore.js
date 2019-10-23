// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(36),(2)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__13203 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13203,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13203,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13203,(2),null);
var vec__13204 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.re_seq(/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204,(2),null);
var vec__13205 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__13203,xc,yc,zc,vec__13204,xm,ym,zm){
return (function (p1__13199_SHARP_){
var or__5945__auto__ = (taoensso.encore.as__QMARK_int.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.as__QMARK_int.cljs$core$IFn$_invoke$arity$1(p1__13199_SHARP_) : taoensso.encore.as__QMARK_int.call(null,p1__13199_SHARP_));
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return (0);
}
});})(vec__13203,xc,yc,zc,vec__13204,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13205,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13205,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13205,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Insufficient com.taoensso/encore version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__13208 = ((typeof cljs.core.first(macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(macro_args),cljs.core.next(macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13208,(0),null);
var macro_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13208,(1),null);
var vec__13209 = ((cljs.core.map_QMARK_(cljs.core.first(macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(macro_args__$1),cljs.core.next(macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13209,(0),null);
var macro_args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13209,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,cljs.core.cst$kw$doc,docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta(name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(name,attr__$2),macro_args__$2], null);
});
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data();
});

/**
 * Experimental. Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a bit of a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args13210 = [];
var len__7014__auto___13215 = arguments.length;
var i__7015__auto___13216 = (0);
while(true){
if((i__7015__auto___13216 < len__7014__auto___13215)){
args13210.push((arguments[i__7015__auto___13216]));

var G__13217 = (i__7015__auto___13216 + (1));
i__7015__auto___13216 = G__13217;
continue;
} else {
}
break;
}

var G__13212 = args13210.length;
switch (G__13212) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13210.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(!(typeof s === 'string')){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arg,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
} else {
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = ((cljs.core.not((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic) : taoensso.encore.kw_identical_QMARK_.call(null,readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic))))?readers:(function (){var G__13213 = cljs.core.symbol;
var G__13214 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_));
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__13213,G__13214) : taoensso.encore.map_keys.call(null,G__13213,G__13214));
})());
var default$__$1 = ((cljs.core.not((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(default$,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic) : taoensso.encore.kw_identical_QMARK_.call(null,default$,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic))))?default$:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)));
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$readers,readers__$1,cljs.core.cst$kw$default,default$__$1], null)], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args13219 = [];
var len__7014__auto___13224 = arguments.length;
var i__7015__auto___13225 = (0);
while(true){
if((i__7015__auto___13225 < len__7014__auto___13224)){
args13219.push((arguments[i__7015__auto___13225]));

var G__13226 = (i__7015__auto___13225 + (1));
i__7015__auto___13225 = G__13226;
continue;
} else {
}
break;
}

var G__13221 = args13219.length;
switch (G__13221) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13219.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_13222 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_13223 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_13223;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_13222;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__5945__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map], 0));
} else {
return null;
}
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_(x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_(x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_((2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_((3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_(x))){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_(x))){
var n = cljs.core.name(x);
var temp__4655__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4657__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(temp__4657__auto__)){
var email = temp__4657__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});
taoensso.encore._QMARK_as_throw = (function taoensso$encore$_QMARK_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("nil as-?"),cljs.core.str(cljs.core.name(as_name)),cljs.core.str(" against arg: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arg,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__5945__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$nblank,x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__5945__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$kw,x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__5945__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$name,x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__5945__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$qname,x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if(!((_QMARK_b == null))){
return _QMARK_b;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$bool,x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__5945__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$int,x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__5945__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$float,x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__5945__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$email,x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__5945__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore._QMARK_as_throw(cljs.core.cst$kw$nemail,x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args13232 = [];
var len__7014__auto___13238 = arguments.length;
var i__7015__auto___13239 = (0);
while(true){
if((i__7015__auto___13239 < len__7014__auto___13238)){
args13232.push((arguments[i__7015__auto___13239]));

var G__13240 = (i__7015__auto___13239 + (1));
i__7015__auto___13239 = G__13240;
continue;
} else {
}
break;
}

var G__13237 = args13232.length;
switch (G__13237) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7033__auto__ = (new cljs.core.IndexedSeq(args13232.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7033__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__5933__auto__ = taoensso.encore.nnil_QMARK_(x);
if(cljs.core.truth_(and__5933__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return and__5933__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__5933__auto__ = taoensso.encore.nnil_QMARK_(x);
if(cljs.core.truth_(and__5933__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more);
} else {
return and__5933__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq13233){
var G__13234 = cljs.core.first(seq13233);
var seq13233__$1 = cljs.core.next(seq13233);
var G__13235 = cljs.core.first(seq13233__$1);
var seq13233__$2 = cljs.core.next(seq13233__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__13234,G__13235,seq13233__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
/**
 * Like `name` but includes keyword namespaces in name string
 */
taoensso.encore.qname = taoensso.encore.as_qname;
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2((taoensso.encore.qname.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.qname.cljs$core$IFn$_invoke$arity$1(k) : taoensso.encore.qname.call(null,k)),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13246 = arguments.length;
var i__7015__auto___13247 = (0);
while(true){
if((i__7015__auto___13247 < len__7014__auto___13246)){
args__7021__auto__.push((arguments[i__7015__auto___13247]));

var G__13248 = (i__7015__auto___13247 + (1));
i__7015__auto___13247 = G__13248;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13244){
var vec__13245 = p__13244;
var no_slash_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13245,(0),null);
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13245,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,taoensso.encore.explode_keyword(in$));
} else {
return acc;
}
});})(vec__13245,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_(parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.empty_QMARK_(ppop))?null:clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop)),cljs.core.peek(parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq13242){
var G__13243 = cljs.core.first(seq13242);
var seq13242__$1 = cljs.core.next(seq13242);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__13243,seq13242__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args13249 = [];
var len__7014__auto___13253 = arguments.length;
var i__7015__auto___13254 = (0);
while(true){
if((i__7015__auto___13254 < len__7014__auto___13253)){
args13249.push((arguments[i__7015__auto___13254]));

var G__13255 = (i__7015__auto___13254 + (1));
i__7015__auto___13254 = G__13255;
continue;
} else {
}
break;
}

var G__13251 = args13249.length;
switch (G__13251) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13249.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not(modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__13252 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13252) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null));

}
})();
if(cljs.core.not(modifier)){
return cljs.core.long$(rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__13259 = (n * 10.0);
return Math.round(G__13259);
})() / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__13261 = (n * 100.0);
return Math.round(G__13261);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13270 = arguments.length;
var i__7015__auto___13271 = (0);
while(true){
if((i__7015__auto___13271 < len__7014__auto___13270)){
args__7021__auto__.push((arguments[i__7015__auto___13271]));

var G__13272 = (i__7015__auto___13271 + (1));
i__7015__auto___13271 = G__13272;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__13264){
var vec__13265 = p__13264;
var map__13266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13265,(0),null);
var map__13266__$1 = ((((!((map__13266 == null)))?((((map__13266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13266):map__13266);
var min_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13266__$1,cljs.core.cst$kw$min);
var max_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13266__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13266__$1,cljs.core.cst$kw$factor,(1000));
var binary_exp = (function (){var G__13268 = (2);
var G__13269 = (nattempt - (1));
return Math.pow(G__13268,G__13269);
})();
var time = (((binary_exp + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(binary_exp)) * 0.5) * factor);
return cljs.core.long$((function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__6276__auto__ = cljs.core.long$(min_SINGLEQUOTE_);
var y__6277__auto__ = cljs.core.long$(time);
return ((x__6276__auto__ > y__6277__auto__) ? x__6276__auto__ : y__6277__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__6283__auto__ = cljs.core.long$(max_SINGLEQUOTE_);
var y__6284__auto__ = cljs.core.long$(time__$1);
return ((x__6283__auto__ < y__6284__auto__) ? x__6283__auto__ : y__6284__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq13262){
var G__13263 = cljs.core.first(seq13262);
var seq13262__$1 = cljs.core.next(seq13262);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__13263,seq13262__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13290 = arguments.length;
var i__7015__auto___13291 = (0);
while(true){
if((i__7015__auto___13291 < len__7014__auto___13290)){
args__7021__auto__.push((arguments[i__7015__auto___13291]));

var G__13292 = (i__7015__auto___13291 + (1));
i__7015__auto___13291 = G__13292;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__13286){
var map__13287 = p__13286;
var map__13287__$1 = ((((!((map__13287 == null)))?((((map__13287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13287):map__13287);
var opts = map__13287__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13287__$1,cljs.core.cst$kw$ms);
if(cljs.core.truth_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__13287,map__13287__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13289){if((e13289 instanceof Error)){
var __t = e13289;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e13289;

}
}});})(map__13287,map__13287__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq13285){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13285));
});
taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args13297 = [];
var len__7014__auto___13304 = arguments.length;
var i__7015__auto___13305 = (0);
while(true){
if((i__7015__auto___13305 < len__7014__auto___13304)){
args13297.push((arguments[i__7015__auto___13305]));

var G__13306 = (i__7015__auto___13305 + (1));
i__7015__auto___13305 = G__13306;
continue;
} else {
}
break;
}

var G__13303 = args13297.length;
switch (G__13303) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7033__auto__ = (new cljs.core.IndexedSeq(args13297.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7033__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4657__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(o,k1);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4657__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3(o,k1,k2);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq13298){
var G__13299 = cljs.core.first(seq13298);
var seq13298__$1 = cljs.core.next(seq13298);
var G__13300 = cljs.core.first(seq13298__$1);
var seq13298__$2 = cljs.core.next(seq13298__$1);
var G__13301 = cljs.core.first(seq13298__$2);
var seq13298__$3 = cljs.core.next(seq13298__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__13299,G__13300,G__13301,seq13298__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
var vec__13309 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13309,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__13311 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13311,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.set_STAR_(x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args13312 = [];
var len__7014__auto___13318 = arguments.length;
var i__7015__auto___13319 = (0);
while(true){
if((i__7015__auto___13319 < len__7014__auto___13318)){
args13312.push((arguments[i__7015__auto___13319]));

var G__13320 = (i__7015__auto___13319 + (1));
i__7015__auto___13319 = G__13320;
continue;
} else {
}
break;
}

var G__13317 = args13312.length;
switch (G__13317) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7033__auto__ = (new cljs.core.IndexedSeq(args13312.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7033__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_(_QMARK_x))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq13313){
var G__13314 = cljs.core.first(seq13313);
var seq13313__$1 = cljs.core.next(seq13313);
var G__13315 = cljs.core.first(seq13313__$1);
var seq13313__$2 = cljs.core.next(seq13313__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__13314,G__13315,seq13313__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__13324_SHARP_,p2__13322_SHARP_,p3__13323_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__13322_SHARP_,p3__13323_SHARP_) : proc.call(null,p2__13322_SHARP_,p3__13323_SHARP_));
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13326_SHARP_,p2__13325_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__13325_SHARP_) : proc.call(null,p2__13325_SHARP_));
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var temp__4657__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
/**
 * Faster `every?` based on `reduce`
 */
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__13327_SHARP_){
return taoensso.encore.nnil_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__13327_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_(ks)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
} else {
var vec__13333 = ks;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13333,(0),null);
var ks__$1 = cljs.core.nthnext(vec__13333,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso$encore$update_in_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__13334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13334) : f.call(null,G__13334));
})());
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__6283__auto__ = signed_idx;
var y__6284__auto__ = max_idx;
return ((x__6283__auto__ < y__6284__auto__) ? x__6283__auto__ : y__6284__auto__);
} else {
var x__6276__auto__ = (0);
var y__6277__auto__ = (signed_idx + max_idx);
return ((x__6276__auto__ > y__6277__auto__) ? x__6276__auto__ : y__6277__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13341 = arguments.length;
var i__7015__auto___13342 = (0);
while(true){
if((i__7015__auto___13342 < len__7014__auto___13341)){
args__7021__auto__.push((arguments[i__7015__auto___13342]));

var G__13343 = (i__7015__auto___13342 + (1));
i__7015__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((2) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7022__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__13338){
var map__13339 = p__13338;
var map__13339__$1 = ((((!((map__13339 == null)))?((((map__13339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13339):map__13339);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13339__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13339__$1,cljs.core.cst$kw$end_DASH_idx);
if(cljs.core.truth_((function (){var __x = max_len;
if(cljs.core.truth_(((function (__x,map__13339,map__13339__$1,max_len,end_idx){
return (function (__x__$1){
var or__5945__auto__ = taoensso.truss.impl.non_throwing(cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__13339,map__13339__$1,max_len,end_idx))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"([:or nil? nneg-int?] max-len)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] max-len)"));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__10941__auto__ = (start_idx_STAR_ + max_len);
var n2__10942__auto__ = xlen;
if((n1__10941__auto__ > n2__10942__auto__)){
return n2__10942__auto__;
} else {
return n1__10941__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen
)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq13335){
var G__13336 = cljs.core.first(seq13335);
var seq13335__$1 = cljs.core.next(seq13335);
var G__13337 = cljs.core.first(seq13335__$1);
var seq13335__$2 = cljs.core.next(seq13335__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__13336,G__13337,seq13335__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13351 = arguments.length;
var i__7015__auto___13352 = (0);
while(true){
if((i__7015__auto___13352 < len__7014__auto___13351)){
args__7021__auto__.push((arguments[i__7015__auto___13352]));

var G__13353 = (i__7015__auto___13352 + (1));
i__7015__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((2) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7022__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__13347){
var vec__13348 = p__13347;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13348,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_(__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13349){if((e13349 instanceof Error)){
var __t = e13349;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e13349;

}
}})())){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__13350 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13350,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13350,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq13344){
var G__13345 = cljs.core.first(seq13344);
var seq13344__$1 = cljs.core.next(seq13344);
var G__13346 = cljs.core.first(seq13344__$1);
var seq13344__$2 = cljs.core.next(seq13344__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13345,G__13346,seq13344__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args13358 = [];
var len__7014__auto___13361 = arguments.length;
var i__7015__auto___13362 = (0);
while(true){
if((i__7015__auto___13362 < len__7014__auto___13361)){
args13358.push((arguments[i__7015__auto___13362]));

var G__13363 = (i__7015__auto___13362 + (1));
i__7015__auto___13362 = G__13363;
continue;
} else {
}
break;
}

var G__13360 = args13358.length;
switch (G__13360) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13358.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;
taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});
/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args13367 = [];
var len__7014__auto___13370 = arguments.length;
var i__7015__auto___13371 = (0);
while(true){
if((i__7015__auto___13371 < len__7014__auto___13370)){
args13367.push((arguments[i__7015__auto___13371]));

var G__13372 = (i__7015__auto___13371 + (1));
i__7015__auto___13371 = G__13372;
continue;
} else {
}
break;
}

var G__13369 = args13367.length;
switch (G__13369) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13367.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4(n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4(n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.butlast(ks)),cljs.core.last(ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13377 = arguments.length;
var i__7015__auto___13378 = (0);
while(true){
if((i__7015__auto___13378 < len__7014__auto___13377)){
args__7021__auto__.push((arguments[i__7015__auto___13378]));

var G__13379 = (i__7015__auto___13378 + (1));
i__7015__auto___13378 = G__13379;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((2) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((2)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7022__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_(m,ks,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq13374){
var G__13375 = cljs.core.first(seq13374);
var seq13374__$1 = cljs.core.next(seq13374);
var G__13376 = cljs.core.first(seq13374__$1);
var seq13374__$2 = cljs.core.next(seq13374__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__13375,G__13376,seq13374__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13394 = arguments.length;
var i__7015__auto___13395 = (0);
while(true){
if((i__7015__auto___13395 < len__7014__auto___13394)){
args__7021__auto__.push((arguments[i__7015__auto___13395]));

var G__13396 = (i__7015__auto___13395 + (1));
i__7015__auto___13395 = G__13396;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count(kvs);
}catch (e13382){if((e13382 instanceof Error)){
var __t = e13382;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e13382;

}
}})();
try{if(cljs.core.even_QMARK_(__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13383){if((e13383 instanceof Error)){
var __t = e13383;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e13383;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5945__auto__ = m;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__6725__auto__ = (function taoensso$encore$iter__13384(s__13385){
return (new cljs.core.LazySeq(null,(function (){
var s__13385__$1 = s__13385;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13385__$1);
if(temp__4657__auto__){
var s__13385__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13385__$2)){
var c__6723__auto__ = cljs.core.chunk_first(s__13385__$2);
var size__6724__auto__ = cljs.core.count(c__6723__auto__);
var b__13387 = cljs.core.chunk_buffer(size__6724__auto__);
if((function (){var i__13386 = (0);
while(true){
if((i__13386 < size__6724__auto__)){
var vec__13392 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6723__auto__,i__13386);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13392,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13392,(1),null);
if(!((v == null))){
cljs.core.chunk_append(b__13387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__13397 = (i__13386 + (1));
i__13386 = G__13397;
continue;
} else {
var G__13398 = (i__13386 + (1));
i__13386 = G__13398;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13387),taoensso$encore$iter__13384(cljs.core.chunk_rest(s__13385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13387),null);
}
} else {
var vec__13393 = cljs.core.first(s__13385__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(1),null);
if(!((v == null))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__13384(cljs.core.rest(s__13385__$2)));
} else {
var G__13399 = cljs.core.rest(s__13385__$2);
s__13385__$1 = G__13399;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6725__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq13380){
var G__13381 = cljs.core.first(seq13380);
var seq13380__$1 = cljs.core.next(seq13380);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__13381,seq13380__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13414 = arguments.length;
var i__7015__auto___13415 = (0);
while(true){
if((i__7015__auto___13415 < len__7014__auto___13414)){
args__7021__auto__.push((arguments[i__7015__auto___13415]));

var G__13416 = (i__7015__auto___13415 + (1));
i__7015__auto___13415 = G__13416;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count(kvs);
}catch (e13402){if((e13402 instanceof Error)){
var __t = e13402;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e13402;

}
}})();
try{if(cljs.core.even_QMARK_(__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13403){if((e13403 instanceof Error)){
var __t = e13403;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e13403;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5945__auto__ = m;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__6725__auto__ = (function taoensso$encore$iter__13404(s__13405){
return (new cljs.core.LazySeq(null,(function (){
var s__13405__$1 = s__13405;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13405__$1);
if(temp__4657__auto__){
var s__13405__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13405__$2)){
var c__6723__auto__ = cljs.core.chunk_first(s__13405__$2);
var size__6724__auto__ = cljs.core.count(c__6723__auto__);
var b__13407 = cljs.core.chunk_buffer(size__6724__auto__);
if((function (){var i__13406 = (0);
while(true){
if((i__13406 < size__6724__auto__)){
var vec__13412 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6723__auto__,i__13406);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13412,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__13407,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__13417 = (i__13406 + (1));
i__13406 = G__13417;
continue;
} else {
var G__13418 = (i__13406 + (1));
i__13406 = G__13418;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13407),taoensso$encore$iter__13404(cljs.core.chunk_rest(s__13405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13407),null);
}
} else {
var vec__13413 = cljs.core.first(s__13405__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13413,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__13404(cljs.core.rest(s__13405__$2)));
} else {
var G__13419 = cljs.core.rest(s__13405__$2);
s__13405__$1 = G__13419;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6725__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq13400){
var G__13401 = cljs.core.first(seq13400);
var seq13400__$1 = cljs.core.next(seq13400);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__13401,seq13400__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args13420 = [];
var len__7014__auto___13423 = arguments.length;
var i__7015__auto___13424 = (0);
while(true){
if((i__7015__auto___13424 < len__7014__auto___13423)){
args13420.push((arguments[i__7015__auto___13424]));

var G__13425 = (i__7015__auto___13424 + (1));
i__7015__auto___13424 = G__13425;
continue;
} else {
}
break;
}

var G__13422 = args13420.length;
switch (G__13422) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13420.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13428 = arguments.length;
var i__7015__auto___13429 = (0);
while(true){
if((i__7015__auto___13429 < len__7014__auto___13428)){
args__7021__auto__.push((arguments[i__7015__auto___13429]));

var G__13430 = (i__7015__auto___13429 + (1));
i__7015__auto___13429 = G__13430;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq13427){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13427));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13434 = arguments.length;
var i__7015__auto___13435 = (0);
while(true){
if((i__7015__auto___13435 < len__7014__auto___13434)){
args__7021__auto__.push((arguments[i__7015__auto___13435]));

var G__13436 = (i__7015__auto___13435 + (1));
i__7015__auto___13435 = G__13436;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),(function (){var G__13433 = cljs.core.last(args);
return (taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(G__13433) : taoensso.encore.seq_kvs.call(null,G__13433));
})()));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq13431){
var G__13432 = cljs.core.first(seq13431);
var seq13431__$1 = cljs.core.next(seq13431);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__13432,seq13431__$1);
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not(m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf
);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(kf,cljs.core.cst$kw$keywordize) : taoensso.encore.kw_identical_QMARK_.call(null,kf,cljs.core.cst$kw$keywordize)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf
));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs(null,(function (_,v){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}),m);
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs((cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$keywordize) : taoensso.encore.kw_identical_QMARK_.call(null,f,cljs.core.cst$kw$keywordize)))?cljs.core.cst$kw$keywordize:(function (k,_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
})),null,m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not(m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__5933__auto__ = (predk.cljs$core$IFn$_invoke$arity$1 ? predk.cljs$core$IFn$_invoke$arity$1(k) : predk.call(null,k));
if(cljs.core.truth_(and__5933__auto__)){
return (predv.cljs$core$IFn$_invoke$arity$1 ? predv.cljs$core$IFn$_invoke$arity$1(v) : predv.call(null,v));
} else {
return and__5933__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs(pred,cljs.core.constantly(true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs(cljs.core.constantly(true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not(m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not(m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.as_map_STAR_ = (function taoensso$encore$as_map_STAR_(kf,vf,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$2((function (acc,p__13443){
var vec__13444 = p__13443;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13444,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13444,(1),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(kf.cljs$core$IFn$_invoke$arity$2 ? kf.cljs$core$IFn$_invoke$arity$2(k,v) : kf.call(null,k,v)),(vf.cljs$core$IFn$_invoke$arity$2 ? vf.cljs$core$IFn$_invoke$arity$2(k,v) : vf.call(null,k,v)));
}),cljs.core.persistent_BANG_),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13449 = arguments.length;
var i__7015__auto___13450 = (0);
while(true){
if((i__7015__auto___13450 < len__7014__auto___13449)){
args__7021__auto__.push((arguments[i__7015__auto___13450]));

var G__13451 = (i__7015__auto___13450 + (1));
i__7015__auto___13450 = G__13451;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__13447){
var vec__13448 = p__13447;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13448,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13448,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__13448,kf,vf){
return (function (_,v){
return v;
});})(vec__13448,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__13448,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__13448,kf,vf))
:(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(kf,cljs.core.cst$kw$keywordize) : taoensso.encore.kw_identical_QMARK_.call(null,kf,cljs.core.cst$kw$keywordize)))?((function (vf__$1,vec__13448,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__13448,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_(kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq13445){
var G__13446 = cljs.core.first(seq13445);
var seq13445__$1 = cljs.core.next(seq13445);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__13446,seq13445__$1);
});
/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_(m);
} else {
var G__13452 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__13453 = cljs.core.next(ks__$1);
var G__13454 = cljs.core.next(vs__$1);
m = G__13452;
ks__$1 = G__13453;
vs__$1 = G__13454;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args13455 = [];
var len__7014__auto___13461 = arguments.length;
var i__7015__auto___13462 = (0);
while(true){
if((i__7015__auto___13462 < len__7014__auto___13461)){
args13455.push((arguments[i__7015__auto___13462]));

var G__13463 = (i__7015__auto___13462 + (1));
i__7015__auto___13462 = G__13463;
continue;
} else {
}
break;
}

var G__13460 = args13455.length;
switch (G__13460) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7033__auto__ = (new cljs.core.IndexedSeq(args13455.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7033__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq13456){
var G__13457 = cljs.core.first(seq13456);
var seq13456__$1 = cljs.core.next(seq13456);
var G__13458 = cljs.core.first(seq13456__$1);
var seq13456__$2 = cljs.core.next(seq13456__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__13457,G__13458,seq13456__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args13465 = [];
var len__7014__auto___13471 = arguments.length;
var i__7015__auto___13472 = (0);
while(true){
if((i__7015__auto___13472 < len__7014__auto___13471)){
args13465.push((arguments[i__7015__auto___13472]));

var G__13473 = (i__7015__auto___13472 + (1));
i__7015__auto___13472 = G__13473;
continue;
} else {
}
break;
}

var G__13470 = args13465.length;
switch (G__13470) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7033__auto__ = (new cljs.core.IndexedSeq(args13465.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7033__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq13466){
var G__13467 = cljs.core.first(seq13466);
var seq13466__$1 = cljs.core.next(seq13466);
var G__13468 = cljs.core.first(seq13466__$1);
var seq13466__$2 = cljs.core.next(seq13466__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__13467,G__13468,seq13466__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__13485,seen__$1){
while(true){
var vec__13486 = p__13485;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13486,(0),null);
var xs__$1 = vec__13486;
var temp__4657__auto__ = cljs.core.seq(xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__13487 = cljs.core.rest(s);
var G__13488 = seen__$1;
p__13485 = G__13487;
seen__$1 = G__13488;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args13493 = [];
var len__7014__auto___13496 = arguments.length;
var i__7015__auto___13497 = (0);
while(true){
if((i__7015__auto___13497 < len__7014__auto___13496)){
args13493.push((arguments[i__7015__auto___13497]));

var G__13498 = (i__7015__auto___13497 + (1));
i__7015__auto___13497 = G__13498;
continue;
} else {
}
break;
}

var G__13495 = args13493.length;
switch (G__13495) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13493.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__13500 = null;
var G__13500__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13500__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__13500__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen_) : cljs.core.deref.call(null,seen_)),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__13500 = function(acc,input){
switch(arguments.length){
case 0:
return G__13500__0.call(this);
case 1:
return G__13500__1.call(this,acc);
case 2:
return G__13500__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13500.cljs$core$IFn$_invoke$arity$0 = G__13500__0;
G__13500.cljs$core$IFn$_invoke$arity$1 = G__13500__1;
G__13500.cljs$core$IFn$_invoke$arity$2 = G__13500__2;
return G__13500;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(coll,(0),cljs.core.array_seq([n], 0));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args13505 = [];
var len__7014__auto___13510 = arguments.length;
var i__7015__auto___13511 = (0);
while(true){
if((i__7015__auto___13511 < len__7014__auto___13510)){
args13505.push((arguments[i__7015__auto___13511]));

var G__13512 = (i__7015__auto___13511 + (1));
i__7015__auto___13511 = G__13512;
continue;
} else {
}
break;
}

var G__13507 = args13505.length;
switch (G__13507) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13505.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__13508,in$){
var vec__13509 = p__13508;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13509,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13509,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(!(cljs.core.contains_QMARK_(seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13516 = arguments.length;
var i__7015__auto___13517 = (0);
while(true){
if((i__7015__auto___13517 < len__7014__auto___13516)){
args__7021__auto__.push((arguments[i__7015__auto___13517]));

var G__13518 = (i__7015__auto___13517 + (1));
i__7015__auto___13517 = G__13518;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key(e);
var rv = cljs.core.val(e);
if(!(cljs.core.contains_QMARK_(m,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,rv);
} else {
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if((cljs.core.map_QMARK_(lv)) && (cljs.core.map_QMARK_(rv))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.array_seq([lv,rv], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv)));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__5945__auto__ = m1;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq13514){
var G__13515 = cljs.core.first(seq13514);
var seq13514__$1 = cljs.core.next(seq13514);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__13515,seq13514__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_(x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((function (){var and__5933__auto__ = (n > (10));
if(and__5933__auto__){
if(!((coll == null))){
if(((coll.cljs$lang$protocol_mask$partition1$ & (4))) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__5933__auto__;
}
})()){
var v = cljs.core.transient$(coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_(v);
} else {
var G__13523 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
var G__13524 = (idx + (1));
v = G__13523;
idx = G__13524;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx === n)){
return v;
} else {
var G__13525 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
var G__13526 = (idx + (1));
v = G__13525;
idx = G__13526;
continue;
}
break;
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6567__auto__,k__6568__auto__){
var self__ = this;
var this__6567__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6567__auto____$1,k__6568__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6569__auto__,k13528,else__6570__auto__){
var self__ = this;
var this__6569__auto____$1 = this;
var G__13530 = (((k13528 instanceof cljs.core.Keyword))?k13528.fqn:null);
switch (G__13530) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13528,else__6570__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6581__auto__,writer__6582__auto__,opts__6583__auto__){
var self__ = this;
var this__6581__auto____$1 = this;
var pr_pair__6584__auto__ = ((function (this__6581__auto____$1){
return (function (keyval__6585__auto__){
return cljs.core.pr_sequential_writer(writer__6582__auto__,cljs.core.pr_writer,""," ","",opts__6583__auto__,keyval__6585__auto__);
});})(this__6581__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6582__auto__,pr_pair__6584__auto__,"#taoensso.encore.Swapped{",", ","}",opts__6583__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$new_DASH_val,self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$return_DASH_val,self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13527){
var self__ = this;
var G__13527__$1 = this;
return (new cljs.core.RecordIter((0),G__13527__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_val,cljs.core.cst$kw$return_DASH_val], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6565__auto__){
var self__ = this;
var this__6565__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6561__auto__){
var self__ = this;
var this__6561__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6571__auto__){
var self__ = this;
var this__6571__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6562__auto__){
var self__ = this;
var this__6562__auto____$1 = this;
var h__6380__auto__ = self__.__hash;
if(!((h__6380__auto__ == null))){
return h__6380__auto__;
} else {
var h__6380__auto____$1 = cljs.core.hash_imap(this__6562__auto____$1);
self__.__hash = h__6380__auto____$1;

return h__6380__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6563__auto__,other__6564__auto__){
var self__ = this;
var this__6563__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5933__auto__ = other__6564__auto__;
if(cljs.core.truth_(and__5933__auto__)){
var and__5933__auto____$1 = (this__6563__auto____$1.constructor === other__6564__auto__.constructor);
if(and__5933__auto____$1){
return cljs.core.equiv_map(this__6563__auto____$1,other__6564__auto__);
} else {
return and__5933__auto____$1;
}
} else {
return and__5933__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6576__auto__,k__6577__auto__){
var self__ = this;
var this__6576__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$return_DASH_val,null,cljs.core.cst$kw$new_DASH_val,null], null), null),k__6577__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6576__auto____$1),self__.__meta),k__6577__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6577__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6574__auto__,k__6575__auto__,G__13527){
var self__ = this;
var this__6574__auto____$1 = this;
var pred__13531 = cljs.core.keyword_identical_QMARK_;
var expr__13532 = k__6575__auto__;
if(cljs.core.truth_((pred__13531.cljs$core$IFn$_invoke$arity$2 ? pred__13531.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new_DASH_val,expr__13532) : pred__13531.call(null,cljs.core.cst$kw$new_DASH_val,expr__13532)))){
return (new taoensso.encore.Swapped(G__13527,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13531.cljs$core$IFn$_invoke$arity$2 ? pred__13531.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return_DASH_val,expr__13532) : pred__13531.call(null,cljs.core.cst$kw$return_DASH_val,expr__13532)))){
return (new taoensso.encore.Swapped(self__.new_val,G__13527,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6575__auto__,G__13527),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6579__auto__){
var self__ = this;
var this__6579__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$new_DASH_val,self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$return_DASH_val,self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6566__auto__,G__13527){
var self__ = this;
var this__6566__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__13527,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6572__auto__,entry__6573__auto__){
var self__ = this;
var this__6572__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6573__auto__)){
return cljs.core._assoc(this__6572__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6573__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6573__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6572__auto____$1,entry__6573__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_val,cljs.core.cst$sym$return_DASH_val], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__6601__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__6601__auto__,writer__6602__auto__){
return cljs.core._write(writer__6602__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__13529){
return (new taoensso.encore.Swapped(cljs.core.cst$kw$new_DASH_val.cljs$core$IFn$_invoke$arity$1(G__13529),cljs.core.cst$kw$return_DASH_val.cljs$core$IFn$_invoke$arity$1(G__13529),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13529,cljs.core.cst$kw$new_DASH_val,cljs.core.array_seq([cljs.core.cst$kw$return_DASH_val], 0)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_(x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_val.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$return_DASH_val.cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.cst$kw$swap_SLASH_dissoc) : taoensso.encore.kw_identical_QMARK_.call(null,f,cljs.core.cst$kw$swap_SLASH_dissoc)))){
return taoensso.encore.swapped_STAR_(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.butlast(ks),cljs.core.array_seq([cljs.core.last(ks)], 0)));
} else {
var old_val_in = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var vec__13536 = taoensso.encore.swapped_STAR_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val_in) : f.call(null,old_val_in)));
var new_val_in = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(1),null);
var new_val = (cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new_val_in,cljs.core.cst$kw$swap_SLASH_dissoc) : taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,cljs.core.cst$kw$swap_SLASH_dissoc)))?taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.butlast(ks),cljs.core.array_seq([cljs.core.last(ks)], 0)):cljs.core.assoc_in(m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,_QMARK_op){
if(cljs.core.not(_QMARK_op)){
return accum;
} else {
var vec__13539 = ((cljs.core.not(_QMARK_vf_type))?_QMARK_op:cljs.core.cons(_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13539,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13539,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13539,(2),null);
var G__13540 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__13540) {
case "reset":
if(cljs.core.empty_QMARK_(ks)){
return valf;
} else {
return cljs.core.assoc_in(accum,ks,valf);
}

break;
case "swap":
if((valf == null)){
return accum;
} else {
if(cljs.core.empty_QMARK_(ks)){
return (valf.cljs$core$IFn$_invoke$arity$1 ? valf.cljs$core$IFn$_invoke$arity$1(accum) : valf.call(null,accum));
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(taoensso.encore.swapped_STAR__in(accum,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13544 = arguments.length;
var i__7015__auto___13545 = (0);
while(true){
if((i__7015__auto___13545 < len__7014__auto___13544)){
args__7021__auto__.push((arguments[i__7015__auto___13545]));

var G__13546 = (i__7015__auto___13545 + (1));
i__7015__auto___13545 = G__13546;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_(null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq13542){
var G__13543 = cljs.core.first(seq13542);
var seq13542__$1 = cljs.core.next(seq13542);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__13543,seq13542__$1);
});
/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore.platform_cas_BANG_ = (function taoensso$encore$platform_cas_BANG_(atom_,old_val,new_val){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,new_val) : cljs.core.reset_BANG_.call(null,atom_,new_val));

return true;
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args13547 = [];
var len__7014__auto___13558 = arguments.length;
var i__7015__auto___13559 = (0);
while(true){
if((i__7015__auto___13559 < len__7014__auto___13558)){
args13547.push((arguments[i__7015__auto___13559]));

var G__13560 = (i__7015__auto___13559 + (1));
i__7015__auto___13559 = G__13560;
continue;
} else {
}
break;
}

var G__13553 = args13547.length;
switch (G__13553) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7033__auto__ = (new cljs.core.IndexedSeq(args13547.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7033__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_(ks)){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var vec__13554 = taoensso.encore.swapped_STAR_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val)));
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13554,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13554,(1),null);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_(atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
} else {
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var vec__13555 = taoensso.encore.swapped_STAR__in(old_val,ks,f);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13555,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13555,(1),null);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_(atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count(more);
}catch (e13556){if((e13556 instanceof Error)){
var __t = e13556;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e13556;

}
}})();
try{if(cljs.core.even_QMARK_(__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13557){if((e13557 instanceof Error)){
var __t = e13557;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e13557;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),more));
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var new_val = taoensso.encore.replace_in_STAR_(cljs.core.cst$kw$swap,old_val,pairs);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_(atom_,old_val,new_val))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$old,old_val,cljs.core.cst$kw$new,new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq13548){
var G__13549 = cljs.core.first(seq13548);
var seq13548__$1 = cljs.core.next(seq13548);
var G__13550 = cljs.core.first(seq13548__$1);
var seq13548__$2 = cljs.core.next(seq13548__$1);
var G__13551 = cljs.core.first(seq13548__$2);
var seq13548__$3 = cljs.core.next(seq13548__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13549,G__13550,G__13551,seq13548__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args13562 = [];
var len__7014__auto___13571 = arguments.length;
var i__7015__auto___13572 = (0);
while(true){
if((i__7015__auto___13572 < len__7014__auto___13571)){
args13562.push((arguments[i__7015__auto___13572]));

var G__13573 = (i__7015__auto___13572 + (1));
i__7015__auto___13572 = G__13573;
continue;
} else {
}
break;
}

var G__13568 = args13562.length;
switch (G__13568) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7033__auto__ = (new cljs.core.IndexedSeq(args13562.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7033__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_(ks)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,new_val) : cljs.core.reset_BANG_.call(null,atom_,new_val));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,(function (old_val){
return cljs.core.assoc_in(old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count(more);
}catch (e13569){if((e13569 instanceof Error)){
var __t = e13569;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e13569;

}
}})();
try{if(cljs.core.even_QMARK_(__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13570){if((e13570 instanceof Error)){
var __t = e13570;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e13570;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),more));
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var new_val__$1 = taoensso.encore.replace_in_STAR_(cljs.core.cst$kw$reset,old_val,pairs);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_(atom_,old_val,new_val__$1))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$old,old_val,cljs.core.cst$kw$new,new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq13563){
var G__13564 = cljs.core.first(seq13563);
var seq13563__$1 = cljs.core.next(seq13563);
var G__13565 = cljs.core.first(seq13563__$1);
var seq13563__$2 = cljs.core.next(seq13563__$1);
var G__13566 = cljs.core.first(seq13563__$2);
var seq13563__$3 = cljs.core.next(seq13563__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13564,G__13565,G__13566,seq13563__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(str_builder,s){
return str_builder.append(s);
});
/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_(acc))){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append((cljs.core.truth_(taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args13579 = [];
var len__7014__auto___13582 = arguments.length;
var i__7015__auto___13583 = (0);
while(true){
if((i__7015__auto___13583 < len__7014__auto___13582)){
args13579.push((arguments[i__7015__auto___13583]));

var G__13584 = (i__7015__auto___13583 + (1));
i__7015__auto___13583 = G__13584;
continue;
} else {
}
break;
}

var G__13581 = args13579.length;
switch (G__13581) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13579.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__5933__auto__ = separator;
if(cljs.core.truth_(and__5933__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__5933__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__5945__auto__ = fmt;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13588 = arguments.length;
var i__7015__auto___13589 = (0);
while(true){
if((i__7015__auto___13589 < len__7014__auto___13588)){
args__7021__auto__.push((arguments[i__7015__auto___13589]));

var G__13590 = (i__7015__auto___13589 + (1));
i__7015__auto___13589 = G__13590;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq13586){
var G__13587 = cljs.core.first(seq13586);
var seq13586__$1 = cljs.core.next(seq13586);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__13587,seq13586__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides proper consistent Clojure/Script replace behaviour.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__13593__delegate = function (args){
var G__13592 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__13592) : replacement.call(null,G__13592));
};
var G__13593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13594__i = 0, G__13594__a = new Array(arguments.length -  0);
while (G__13594__i < G__13594__a.length) {G__13594__a[G__13594__i] = arguments[G__13594__i + 0]; ++G__13594__i;}
  args = new cljs.core.IndexedSeq(G__13594__a,0);
} 
return G__13593__delegate.call(this,args);};
G__13593.cljs$lang$maxFixedArity = 0;
G__13593.cljs$lang$applyTo = (function (arglist__13595){
var args = cljs.core.seq(arglist__13595);
return G__13593__delegate(args);
});
G__13593.cljs$core$IFn$_invoke$arity$variadic = G__13593__delegate;
return G__13593;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13603 = arguments.length;
var i__7015__auto___13604 = (0);
while(true){
if((i__7015__auto___13604 < len__7014__auto___13603)){
args__7021__auto__.push((arguments[i__7015__auto___13604]));

var G__13605 = (i__7015__auto___13604 + (1));
i__7015__auto___13604 = G__13605;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((2) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7022__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__13599){
var vec__13600 = p__13599;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13600,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13601){if((e13601 instanceof Error)){
var __t = e13601;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e13601;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__13602 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13602,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13602,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq13596){
var G__13597 = cljs.core.first(seq13596);
var seq13596__$1 = cljs.core.next(seq13596);
var G__13598 = cljs.core.first(seq13596__$1);
var seq13596__$2 = cljs.core.next(seq13596__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__13597,G__13598,seq13596__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13611 = arguments.length;
var i__7015__auto___13612 = (0);
while(true){
if((i__7015__auto___13612 < len__7014__auto___13611)){
args__7021__auto__.push((arguments[i__7015__auto___13612]));

var G__13613 = (i__7015__auto___13612 + (1));
i__7015__auto___13612 = G__13613;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((2) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((2)),(0),null)):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7022__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__13609){
var vec__13610 = p__13609;
var start_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13610,(0),null);
var last_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13610,(1),null);
var start_idx__$1 = ((function (){var or__5945__auto__ = start_idx;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq13606){
var G__13607 = cljs.core.first(seq13606);
var seq13606__$1 = cljs.core.next(seq13606);
var G__13608 = cljs.core.first(seq13606__$1);
var seq13606__$2 = cljs.core.next(seq13606__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__13607,G__13608,seq13606__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13616 = arguments.length;
var i__7015__auto___13617 = (0);
while(true){
if((i__7015__auto___13617 < len__7014__auto___13616)){
args__7021__auto__.push((arguments[i__7015__auto___13617]));

var G__13618 = (i__7015__auto___13617 + (1));
i__7015__auto___13617 = G__13618;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_(s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1__$1,"")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq13614){
var G__13615 = cljs.core.first(seq13614);
var seq13614__$1 = cljs.core.next(seq13614);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__13615,seq13614__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13620 = arguments.length;
var i__7015__auto___13621 = (0);
while(true){
if((i__7015__auto___13621 < len__7014__auto___13620)){
args__7021__auto__.push((arguments[i__7015__auto___13621]));

var G__13622 = (i__7015__auto___13621 + (1));
i__7015__auto___13621 = G__13622;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq13619){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13619));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args13623 = [];
var len__7014__auto___13626 = arguments.length;
var i__7015__auto___13627 = (0);
while(true){
if((i__7015__auto___13627 < len__7014__auto___13626)){
args13623.push((arguments[i__7015__auto___13627]));

var G__13628 = (i__7015__auto___13627 + (1));
i__7015__auto___13627 = G__13628;
continue;
} else {
}
break;
}

var G__13625 = args13623.length;
switch (G__13625) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13623.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),cljs.core.array_seq([max_length], 0));
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str("-"),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex()),cljs.core.str(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e13631){if((e13631 instanceof Error)){
var _ = e13631;
return false;
} else {
throw e13631;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args13632 = [];
var len__7014__auto___13635 = arguments.length;
var i__7015__auto___13636 = (0);
while(true){
if((i__7015__auto___13636 < len__7014__auto___13635)){
args13632.push((arguments[i__7015__auto___13636]));

var G__13637 = (i__7015__auto___13636 + (1));
i__7015__auto___13636 = G__13637;
continue;
} else {
}
break;
}

var G__13634 = args13632.length;
switch (G__13634) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13632.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(x)){
return x;
} else {
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,x);
}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arg,x,cljs.core.cst$kw$arg_DASH_type,cljs.core.type(x)], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Experimental. For use with `if-let`s, `when-let`s, etc.
 */
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value. Specialized, fast
 *   `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var new_v = (function (){var G__13640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13640) : f.call(null,G__13640));
})();
var new_m = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_m,k,new_v);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_(atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `clojure.core/memoize` but faster, uses delays to avoid write races
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = (function (){var G__13643 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13643) : cljs.core.atom.call(null,G__13643));
})();
return ((function (cache_){
return (function() { 
var G__13645__delegate = function (args){
var G__13644 = (function (){var or__5945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),args);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore.swap_val_BANG_(cache_,args,((function (or__5945__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__5945__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__5945__auto__,cache_))
,null));
}
});})(or__5945__auto__,cache_))
);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13644) : cljs.core.deref.call(null,G__13644));
};
var G__13645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13646__i = 0, G__13646__a = new Array(arguments.length -  0);
while (G__13646__i < G__13646__a.length) {G__13646__a[G__13646__i] = arguments[G__13646__i + 0]; ++G__13646__i;}
  args = new cljs.core.IndexedSeq(G__13646__a,0);
} 
return G__13645__delegate.call(this,args);};
G__13645.cljs$lang$maxFixedArity = 0;
G__13645.cljs$lang$applyTo = (function (arglist__13647){
var args = cljs.core.seq(arglist__13647);
return G__13645__delegate(args);
});
G__13645.cljs$core$IFn$_invoke$arity$variadic = G__13645__delegate;
return G__13645;
})()
;
;})(cache_))
});
/**
 * Fastest possible 0-arg `memoize_`
 */
taoensso.encore.memoize_a0_ = (function taoensso$encore$memoize_a0_(f){
var cache_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
return ((function (cache_){
return (function (){
var G__13649 = (function (){var or__5945__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_));
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__5945__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__5945__auto__,cache_){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(or__5945__auto__,cache_))
,null));
}
});})(or__5945__auto__,cache_))
);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13649) : cljs.core.deref.call(null,G__13649));
});
;})(cache_))
});
/**
 * Fastest possible 0/1-arg `memoize_`
 */
taoensso.encore.memoize_a1_ = (function taoensso$encore$memoize_a1_(f){
var cache_ = (function (){var G__13653 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13653) : cljs.core.atom.call(null,G__13653));
})();
return ((function (cache_){
return (function() {
var G__13656 = null;
var G__13656__0 = (function (){
var G__13654 = (function (){var or__5945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),taoensso.encore.sentinel);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore.swap_val_BANG_(cache_,taoensso.encore.sentinel,((function (or__5945__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__5945__auto__,cache_){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(or__5945__auto__,cache_))
,null));
}
});})(or__5945__auto__,cache_))
);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13654) : cljs.core.deref.call(null,G__13654));
});
var G__13656__1 = (function (x){
var G__13655 = (function (){var or__5945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),x);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore.swap_val_BANG_(cache_,x,((function (or__5945__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__5945__auto__,cache_){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});})(or__5945__auto__,cache_))
,null));
}
});})(or__5945__auto__,cache_))
);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13655) : cljs.core.deref.call(null,G__13655));
});
G__13656 = function(x){
switch(arguments.length){
case 0:
return G__13656__0.call(this);
case 1:
return G__13656__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13656.cljs$core$IFn$_invoke$arity$0 = G__13656__0;
G__13656.cljs$core$IFn$_invoke$arity$1 = G__13656__1;
return G__13656;
})()
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = (function (){var G__13659 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13659) : cljs.core.atom.call(null,G__13659));
})();
return ((function (cache_){
return (function() { 
var G__13661__delegate = function (args){
var G__13660 = (function (){var or__5945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),args);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__5945__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__5945__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__5945__auto__,cache_))
,null))], true, false);
}
});})(or__5945__auto__,cache_))
),args);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13660) : cljs.core.deref.call(null,G__13660));
};
var G__13661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13662__i = 0, G__13662__a = new Array(arguments.length -  0);
while (G__13662__i < G__13662__a.length) {G__13662__a[G__13662__i] = arguments[G__13662__i + 0]; ++G__13662__i;}
  args = new cljs.core.IndexedSeq(G__13662__a,0);
} 
return G__13661__delegate.call(this,args);};
G__13661.cljs$lang$maxFixedArity = 0;
G__13661.cljs$lang$applyTo = (function (arglist__13663){
var args = cljs.core.seq(arglist__13663);
return G__13661__delegate(args);
});
G__13661.cljs$core$IFn$_invoke$arity$variadic = G__13661__delegate;
return G__13661;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13668 = arguments.length;
var i__7015__auto___13669 = (0);
while(true){
if((i__7015__auto___13669 < len__7014__auto___13668)){
args__7021__auto__.push((arguments[i__7015__auto___13669]));

var G__13670 = (i__7015__auto___13669 + (1));
i__7015__auto___13669 = G__13670;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((2) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7022__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not(cache)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
var G__13667 = taoensso.encore.swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
}));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13667) : cljs.core.deref.call(null,G__13667));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq13664){
var G__13665 = cljs.core.first(seq13664);
var seq13664__$1 = cljs.core.next(seq13664);
var G__13666 = cljs.core.first(seq13664__$1);
var seq13664__$2 = cljs.core.next(seq13664__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__13665,G__13666,seq13664__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Can be significantly faster (depends on opts)
 *  * Uses delays to prevent race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` option
 *  * Supports cache size limit & gc with `cache-size` option
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args13671 = [];
var len__7014__auto___13710 = arguments.length;
var i__7015__auto___13711 = (0);
while(true){
if((i__7015__auto___13711 < len__7014__auto___13710)){
args13671.push((arguments[i__7015__auto___13711]));

var G__13712 = (i__7015__auto___13711 + (1));
i__7015__auto___13711 = G__13712;
continue;
} else {
}
break;
}

var G__13673 = args13671.length;
switch (G__13673) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13671.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = (function (){var G__13674 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13674) : cljs.core.atom.call(null,G__13674));
})();
return ((function (cache_){
return (function() { 
var G__13714__delegate = function (p__13675){
var vec__13676 = p__13675;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13676,(0),null);
var argn = cljs.core.nthnext(vec__13676,(1));
var args = vec__13676;
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_debug) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_debug)))){
return cache_;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_del) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_del)))){
if(cljs.core.truth_((function (){var G__13677 = cljs.core.first(argn);
var G__13678 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__13677,G__13678) : taoensso.encore.kw_identical_QMARK_.call(null,G__13677,G__13678));
})())){
var G__13679_13715 = cache_;
var G__13680_13716 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13679_13715,G__13680_13716) : cljs.core.reset_BANG_.call(null,G__13679_13715,G__13680_13716));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_fresh) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_fresh));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var G__13681 = (function (){var or__5945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),args__$1);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore.swap_val_BANG_(cache_,args__$1,((function (or__5945__auto__,fresh_QMARK_,args__$1,vec__13676,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__5933__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__5933__auto__)){
return cljs.core.not(fresh_QMARK_);
} else {
return and__5933__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__5945__auto__,fresh_QMARK_,args__$1,vec__13676,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(or__5945__auto__,fresh_QMARK_,args__$1,vec__13676,arg1,argn,args,cache_))
,null));
}
});})(or__5945__auto__,fresh_QMARK_,args__$1,vec__13676,arg1,argn,args,cache_))
);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13681) : cljs.core.deref.call(null,G__13681));

}
}
};
var G__13714 = function (var_args){
var p__13675 = null;
if (arguments.length > 0) {
var G__13717__i = 0, G__13717__a = new Array(arguments.length -  0);
while (G__13717__i < G__13717__a.length) {G__13717__a[G__13717__i] = arguments[G__13717__i + 0]; ++G__13717__i;}
  p__13675 = new cljs.core.IndexedSeq(G__13717__a,0);
} 
return G__13714__delegate.call(this,p__13675);};
G__13714.cljs$lang$maxFixedArity = 0;
G__13714.cljs$lang$applyTo = (function (arglist__13718){
var p__13675 = cljs.core.seq(arglist__13718);
return G__13714__delegate(p__13675);
});
G__13714.cljs$core$IFn$_invoke$arity$variadic = G__13714__delegate;
return G__13714;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_13719 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(__x_13719))){
} else {
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13682){if((e13682 instanceof Error)){
var __t_13720 = e13682;
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_13719,__t_13720,null);
} else {
throw e13682;

}
}
var cache_ = (function (){var G__13683 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13683) : cljs.core.atom.call(null,G__13683));
})();
var gc_running_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__5933__auto__ = taoensso.encore.gc_now_QMARK_();
if(cljs.core.truth_(and__5933__auto__)){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__5933__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped(true,cljs.core.not(b));
});})(and__5933__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__5933__auto__;
}
})())){
var instant = taoensso.encore.now_udt();
var snapshot = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_));
var ks_to_gc = cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__13684){
var vec__13685 = p__13684;
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(1),null);
var cv = vec__13685;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$(m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(gc_running_QMARK__,false) : cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false));
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__13721__delegate = function (p__13686){
var vec__13687 = p__13686;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687,(0),null);
var argn = cljs.core.nthnext(vec__13687,(1));
var args = vec__13687;
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_debug) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_debug)))){
return cache_;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_del) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_del)))){
if(cljs.core.truth_((function (){var G__13688 = cljs.core.first(argn);
var G__13689 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__13688,G__13689) : taoensso.encore.kw_identical_QMARK_.call(null,G__13688,G__13689));
})())){
var G__13690_13722 = cache_;
var G__13691_13723 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13690_13722,G__13691_13723) : cljs.core.reset_BANG_.call(null,G__13690_13722,G__13691_13723));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn();

var fresh_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_fresh) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_fresh));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt();
var vec__13692 = taoensso.encore.swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__13687,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__5933__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__5933__auto__)){
var and__5933__auto____$1 = cljs.core.not(fresh_QMARK_);
if(and__5933__auto____$1){
var vec__13694 = _QMARK_cv;
var _dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__5933__auto____$1;
}
} else {
return and__5933__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__13687,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__13687,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__13687,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13692,(0),null);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dv) : cljs.core.deref.call(null,dv));

}
}
};
var G__13721 = function (var_args){
var p__13686 = null;
if (arguments.length > 0) {
var G__13724__i = 0, G__13724__a = new Array(arguments.length -  0);
while (G__13724__i < G__13724__a.length) {G__13724__a[G__13724__i] = arguments[G__13724__i + 0]; ++G__13724__i;}
  p__13686 = new cljs.core.IndexedSeq(G__13724__a,0);
} 
return G__13721__delegate.call(this,p__13686);};
G__13721.cljs$lang$maxFixedArity = 0;
G__13721.cljs$lang$applyTo = (function (arglist__13725){
var p__13686 = cljs.core.seq(arglist__13725);
return G__13721__delegate(p__13686);
});
G__13721.cljs$core$IFn$_invoke$arity$variadic = G__13721__delegate;
return G__13721;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_13726 = ttl_ms;
if(cljs.core.truth_(((function (__x_13726){
return (function (__x__$1){
var or__5945__auto__ = taoensso.truss.impl.non_throwing(cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_13726))
.call(null,__x_13726))){
} else {
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_13726,null,null);
}

var __x_13727 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(__x_13727))){
} else {
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e13695){if((e13695 instanceof Error)){
var __t_13728 = e13695;
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(pos-int? cache-size)",__x_13727,__t_13728,null);
} else {
throw e13695;

}
}
var state_ = (function (){var G__13696 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13696) : cljs.core.atom.call(null,G__13696));
})();
var gc_running_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$((function (){var or__5945__auto__ = ttl_ms;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$(cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__5933__auto__ = taoensso.encore.gc_now_QMARK_();
if(cljs.core.truth_(and__5933__auto__)){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__5933__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped(true,cljs.core.not(b));
});})(and__5933__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__5933__auto__;
}
})())){
var instant = taoensso.encore.now_udt();
if(ttl_ms_QMARK_){
var snapshot_13729 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)),cljs.core.cst$kw$tick);
var ks_to_gc_13730 = cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (snapshot_13729,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__13697){
var vec__13698 = p__13697;
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(3),null);
var cv = vec__13698;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(snapshot_13729,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),snapshot_13729));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (snapshot_13729,ks_to_gc_13730,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (snapshot_13729,ks_to_gc_13730,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(snapshot_13729,ks_to_gc_13730,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(m),ks_to_gc_13730));
});})(snapshot_13729,ks_to_gc_13730,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_13731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)),cljs.core.cst$kw$tick);
var n_to_gc_13732 = (cljs.core.count(snapshot_13731) - cache_size__$1);
if((n_to_gc_13732 > (64))){
var ks_to_gc_13733 = taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(n_to_gc_13732,((function (snapshot_13731,n_to_gc_13732,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__13699 = (snapshot_13731.cljs$core$IFn$_invoke$arity$1 ? snapshot_13731.cljs$core$IFn$_invoke$arity$1(k) : snapshot_13731.call(null,k));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13699,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13699,(1),null);
var tick_lru = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13699,(2),null);
var tick_lfu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13699,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_13731,n_to_gc_13732,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys(snapshot_13731));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (ks_to_gc_13733,snapshot_13731,n_to_gc_13732,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_13733,snapshot_13731,n_to_gc_13732,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_13733,snapshot_13731,n_to_gc_13732,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$(m),ks_to_gc_13733));
});})(ks_to_gc_13733,snapshot_13731,n_to_gc_13732,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(gc_running_QMARK__,false) : cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false));
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((!(ttl_ms_QMARK_))?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore.swap_val_BANG_(state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__5933__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__5933__auto__)){
return cljs.core.not(fresh_QMARK_);
} else {
return and__5933__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt();
return taoensso.encore.swap_val_BANG_(state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__5933__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__5933__auto__)){
var and__5933__auto____$1 = cljs.core.not(fresh_QMARK_);
if(and__5933__auto____$1){
var vec__13701 = _QMARK_cv;
var _dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__5933__auto____$1;
}
} else {
return and__5933__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__13734__delegate = function (p__13702){
var vec__13703 = p__13702;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(0),null);
var argn = cljs.core.nthnext(vec__13703,(1));
var args = vec__13703;
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_debug) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_debug)))){
return state_;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_del) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_del)))){
if(cljs.core.truth_((function (){var G__13704 = cljs.core.first(argn);
var G__13705 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__13704,G__13705) : taoensso.encore.kw_identical_QMARK_.call(null,G__13704,G__13705));
})())){
var G__13706_13735 = state_;
var G__13707_13736 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,(0)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13706_13735,G__13707_13736) : cljs.core.reset_BANG_.call(null,G__13706_13735,G__13707_13736));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn();

var fresh_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(arg1,cljs.core.cst$kw$mem_SLASH_fresh) : taoensso.encore.kw_identical_QMARK_.call(null,arg1,cljs.core.cst$kw$mem_SLASH_fresh));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var tick = cljs.core.cst$kw$tick.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_) : cljs.core.deref.call(null,state_)));
var vec__13708 = (cv_fn.cljs$core$IFn$_invoke$arity$3 ? cv_fn.cljs$core$IFn$_invoke$arity$3(args__$1,fresh_QMARK_,tick) : cv_fn.call(null,args__$1,fresh_QMARK_,tick));
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_,((function (fresh_QMARK_,args__$1,tick,vec__13708,dv,vec__13703,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,args__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__13709 = temp__4655__auto__;
var dv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13709,(0),null);
var _QMARK_udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13709,(1),null);
var tick_lru = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13709,(2),null);
var tick_lfu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13709,(3),null);
var cv = vec__13709;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$tick,(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tick,(tick + (1))], null)], 0));
}
});})(fresh_QMARK_,args__$1,tick,vec__13708,dv,vec__13703,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dv) : cljs.core.deref.call(null,dv));

}
}
};
var G__13734 = function (var_args){
var p__13702 = null;
if (arguments.length > 0) {
var G__13737__i = 0, G__13737__a = new Array(arguments.length -  0);
while (G__13737__i < G__13737__a.length) {G__13737__a[G__13737__i] = arguments[G__13737__i + 0]; ++G__13737__i;}
  p__13702 = new cljs.core.IndexedSeq(G__13737__a,0);
} 
return G__13734__delegate.call(this,p__13702);};
G__13734.cljs$lang$maxFixedArity = 0;
G__13734.cljs$lang$applyTo = (function (arglist__13738){
var p__13702 = cljs.core.seq(arglist__13738);
return G__13734__delegate(p__13702);
});
G__13734.cljs$core$IFn$_invoke$arity$variadic = G__13734__delegate;
return G__13734;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return cljs.core.constantly(null);
} else {
var vspecs = cljs.core.vec(specs);
var vstates_ = (function (){var G__13779 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13779) : cljs.core.atom.call(null,G__13779));
})();
var max_win_ms = cljs.core.long$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vspecs,vstates_){
return (function (p__13780){
var vec__13781 = p__13780;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13781,(0),null);
var win_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13781,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13781,(2),null);
var spec = vec__13781;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count(vspecs);
var nid_specs = cljs.core.count(cljs.core.filterv(((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__13782){
var vec__13783 = p__13782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13783,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13783,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13783,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__13784){
var vec__13802 = p__13784;
var _QMARK_a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(0),null);
var _QMARK_a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(1),null);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_debug) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,cljs.core.cst$kw$rl_SLASH_debug)))){
return vstates_;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_reset) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,cljs.core.cst$kw$rl_SLASH_reset)))){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_a2,cljs.core.cst$kw$rl_SLASH_all) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a2,cljs.core.cst$kw$rl_SLASH_all)))){
var G__13803_13819 = vstates_;
var G__13804_13820 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13803_13819,G__13804_13820) : cljs.core.reset_BANG_.call(null,G__13803_13819,G__13804_13820));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_a1,cljs.core.cst$kw$rl_SLASH_peek) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,cljs.core.cst$kw$rl_SLASH_peek));
var req_id = (cljs.core.truth_(peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt();
if(cljs.core.truth_((function (){var and__5933__auto__ = req_id;
if(cljs.core.truth_(and__5933__auto__)){
return taoensso.encore.gc_now_QMARK_();
} else {
return and__5933__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv(((function (peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__13807){
var vec__13808 = p__13807;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808,(2),null);
var x__6276__auto__ = acc;
var y__6277__auto__ = udt;
return ((x__6276__auto__ > y__6277__auto__) ? x__6276__auto__ : y__6277__auto__);
});})(peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not(_QMARK_vstate)){
if(cljs.core.truth_(peek_QMARK_)){
return taoensso.encore.swapped(_QMARK_vstate,null);
} else {
return taoensso.encore.swapped(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
} else {
var vec__13809 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__13810 = in_vspecs;
var vec__13811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13810,(0),null);
var ncalls_limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13811,(0),null);
var win_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13811,(1),null);
var _QMARK_spec_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13811,(2),null);
var next_in_vspecs = cljs.core.nthnext(vec__13810,(1));
var vec__13812 = in_vstate;
var vec__13813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13812,(0),null);
var ncalls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13813,(0),null);
var udt_win_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13813,(1),null);
var next_in_vstate = cljs.core.nthnext(vec__13812,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__5945__auto__ = (_QMARK_worst_limit_offence == null);
if(or__5945__auto__){
return or__5945__auto__;
} else {
var vec__13815 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not(next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__13821 = next_in_vspecs;
var G__13822 = next_in_vstate;
var G__13823 = new_out_vstate;
var G__13824 = new__QMARK_worst_limit_offence;
in_vspecs = G__13821;
in_vstate = G__13822;
out_vstate = G__13823;
_QMARK_worst_limit_offence = G__13824;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13809,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13809,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = (cljs.core.truth_(peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__13809,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__13816){
var vec__13817 = p__13816;
var ncalls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13817,(0),null);
var udt_win_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13817,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__13809,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)
));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__13818 = wlo;
var ms_wait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13818,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13818,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped(new_vstate,result);
}
});})(peek_QMARK_,req_id,instant,vec__13802,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);

}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__13784 = null;
if (arguments.length > 0) {
var G__13825__i = 0, G__13825__a = new Array(arguments.length -  0);
while (G__13825__i < G__13825__a.length) {G__13825__a[G__13825__i] = arguments[G__13825__i + 0]; ++G__13825__i;}
  p__13784 = new cljs.core.IndexedSeq(G__13825__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__13784);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__13826){
var p__13784 = cljs.core.seq(arglist__13826);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__13784);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__13827__delegate = function (args){
var temp__4655__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__13827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13828__i = 0, G__13828__a = new Array(arguments.length -  0);
while (G__13828__i < G__13828__a.length) {G__13828__a[G__13828__i] = arguments[G__13828__i + 0]; ++G__13828__i;}
  args = new cljs.core.IndexedSeq(G__13828__a,0);
} 
return G__13827__delegate.call(this,args);};
G__13827.cljs$lang$maxFixedArity = 0;
G__13827.cljs$lang$applyTo = (function (arglist__13829){
var args = cljs.core.seq(arglist__13829);
return G__13827__delegate(args);
});
G__13827.cljs$core$IFn$_invoke$arity$variadic = G__13827__delegate;
return G__13827;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = (function (){var and__5933__auto__ = typeof window !== 'undefined';
if(and__5933__auto__){
return (window["performance"]);
} else {
return and__5933__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__5945__auto__ = (perf["now"]);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
var or__5945__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__5945__auto____$1)){
return or__5945__auto____$1;
} else {
var or__5945__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__5945__auto____$2)){
return or__5945__auto____$2;
} else {
var or__5945__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__5945__auto____$3)){
return or__5945__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$((1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt());
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt());
});
;})(temp__4655__auto__))
}
})();
taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__5933__auto__ = typeof console !== 'undefined';
if(and__5933__auto__){
return console.log;
} else {
return and__5933__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13841 = arguments.length;
var i__7015__auto___13842 = (0);
while(true){
if((i__7015__auto___13842 < len__7014__auto___13841)){
args__7021__auto__.push((arguments[i__7015__auto___13842]));

var G__13843 = (i__7015__auto___13842 + (1));
i__7015__auto___13842 = G__13843;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.console_log.call(null,xs));
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq13830){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13830));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13844 = arguments.length;
var i__7015__auto___13845 = (0);
while(true){
if((i__7015__auto___13845 < len__7014__auto___13844)){
args__7021__auto__.push((arguments[i__7015__auto___13845]));

var G__13846 = (i__7015__auto___13845 + (1));
i__7015__auto___13845 = G__13846;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__13832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.spaced_str_with_nils.call(null,xs))], null);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__13832) : taoensso.encore.console_log.call(null,G__13832));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq13831){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13831));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13847 = arguments.length;
var i__7015__auto___13848 = (0);
while(true){
if((i__7015__auto___13848 < len__7014__auto___13847)){
args__7021__auto__.push((arguments[i__7015__auto___13848]));

var G__13849 = (i__7015__auto___13848 + (1));
i__7015__auto___13848 = G__13849;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__13835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_(fmt,xs)], null);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__13835) : taoensso.encore.console_log.call(null,G__13835));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq13833){
var G__13834 = cljs.core.first(seq13833);
var seq13833__$1 = cljs.core.next(seq13833);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__13834,seq13833__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13850 = arguments.length;
var i__7015__auto___13851 = (0);
while(true){
if((i__7015__auto___13851 < len__7014__auto___13850)){
args__7021__auto__.push((arguments[i__7015__auto___13851]));

var G__13852 = (i__7015__auto___13851 + (1));
i__7015__auto___13851 = G__13852;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__13837 = (taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.spaced_str_with_nils.cljs$core$IFn$_invoke$arity$1(xs) : taoensso.encore.spaced_str_with_nils.call(null,xs));
return alert(G__13837);
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq13836){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13836));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13853 = arguments.length;
var i__7015__auto___13854 = (0);
while(true){
if((i__7015__auto___13854 < len__7014__auto___13853)){
args__7021__auto__.push((arguments[i__7015__auto___13854]));

var G__13855 = (i__7015__auto___13854 + (1));
i__7015__auto___13854 = G__13855;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__13840 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__13840);
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq13838){
var G__13839 = cljs.core.first(seq13838);
var seq13838__$1 = cljs.core.next(seq13838);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__13839,seq13838__$1);
});
/**
 * Returns browser window's current location. These details can be forged!
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc_STAR_.href,cljs.core.cst$kw$protocol,loc_STAR_.protocol,cljs.core.cst$kw$hostname,loc_STAR_.hostname,cljs.core.cst$kw$host,loc_STAR_.host,cljs.core.cst$kw$pathname,loc_STAR_.pathname,cljs.core.cst$kw$search,loc_STAR_.search,cljs.core.cst$kw$hash,loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var __x = params;
if(cljs.core.truth_(((function (__x){
return (function (__x__$1){
var or__5945__auto__ = taoensso.truss.impl.non_throwing(cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_).call(null,__x__$1);
}
});})(__x))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"([:or nil? map?] params)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_(params))?null:(function (){var s = (function (){var G__13858 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__13858);
})().toString();
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return s;
}
})());
var G__13859 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__13859) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__13863,callback){
var map__13903 = p__13863;
var map__13903__$1 = ((((!((map__13903 == null)))?((((map__13903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13903):map__13903);
var opts = map__13903__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13903__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13903__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13903__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var progress_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,cljs.core.cst$kw$progress_DASH_fn);
var errorf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13903__$1,cljs.core.cst$kw$errorf,taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__5945__auto__ = taoensso.truss.impl.non_throwing(cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"([:or nil? nneg-int?] timeout-ms)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] timeout-ms)"));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__5945__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__13907 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__13907) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys(cljs.core.name,params);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys(cljs.core.name,headers)], 0));
var vec__13906 = taoensso.encore.coerce_xhr_params(uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13906,(0),null);
var post_content_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13906,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js(((cljs.core.not(post_content_STAR_))?headers__$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__13908_13943 = xhr;
var G__13909_13944 = G__13908_13943;
var G__13910_13945 = goog.net.EventType.READY;
var G__13911_13946 = ((function (G__13909_13944,G__13910_13945,G__13908_13943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13906,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);
});})(G__13909_13944,G__13910_13945,G__13908_13943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13906,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listenOnce(G__13909_13944,G__13910_13945,G__13911_13946);

var G__13922_13947 = G__13908_13943;
var G__13923_13948 = goog.net.EventType.COMPLETE;
var G__13924_13949 = ((function (G__13922_13947,G__13923_13948,G__13908_13943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13906,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto)))?resp_type:(function (){var pred__13930 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__13922_13947,G__13923_13948,G__13908_13943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13906,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__13862_SHARP_,p2__13861_SHARP_){
return taoensso.encore.str_contains_QMARK_(p2__13861_SHARP_,p1__13862_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__13922_13947,G__13923_13948,G__13908_13943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13906,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__13931 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__13930("/edn",expr__13931))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(pred__13930("/json",expr__13931))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(pred__13930("/xml",expr__13931))){
return cljs.core.cst$kw$xml;
} else {
if(cljs.core.truth_(pred__13930("/html",expr__13931))){
return cljs.core.cst$kw$text;
} else {
return cljs.core.cst$kw$text;
}
}
}
}
})());
try{var G__13934 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__13934) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e13933){if((e13933 instanceof Error)){
var e = e13933;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e13933;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_content_DASH_type,(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_status,_QMARK_http_status,cljs.core.cst$kw$_QMARK_error,(function (){var or__5945__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout], true, false),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown));
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return cljs.core.cst$kw$no_DASH_content;
} else {
return null;
}
}
})()], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(cb_arg) : callback.call(null,cb_arg));
});})(G__13922_13947,G__13923_13948,G__13908_13943,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13906,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listenOnce(G__13922_13947,G__13923_13948,G__13924_13949);


var temp__4657__auto___13951 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___13951)){
var pf_13952 = temp__4657__auto___13951;
var G__13936_13953 = xhr;
var G__13937_13954 = goog.net.EventType.PROGRESS;
var G__13938_13955 = ((function (G__13936_13953,G__13937_13954,pf_13952,temp__4657__auto___13951,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13906,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__5933__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__5933__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__5933__auto__;
}
})())?(loaded / total):null);
var G__13939 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_13952.cljs$core$IFn$_invoke$arity$1 ? pf_13952.cljs$core$IFn$_invoke$arity$1(G__13939) : pf_13952.call(null,G__13939));
});})(G__13936_13953,G__13937_13954,pf_13952,temp__4657__auto___13951,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13906,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__13903,map__13903__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
goog.events.listen(G__13936_13953,G__13937_13954,G__13938_13955);
} else {
}

var G__13940_13956 = xhr;
var temp__4657__auto___13957 = cljs.core.cst$kw$always;
if(cljs.core.truth_(temp__4657__auto___13957)){
var x_13958 = temp__4657__auto___13957;
G__13940_13956.setTimeoutInterval((function (){var or__5945__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4657__auto___13959 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4657__auto___13959)){
var x_13960 = temp__4657__auto___13959;
G__13940_13956.setWithCredentials(true);
} else {
}

var temp__4657__auto___13961 = cljs.core.cst$kw$always;
if(cljs.core.truth_(temp__4657__auto___13961)){
var x_13962 = temp__4657__auto___13961;
G__13940_13956.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e13905){if((e13905 instanceof Error)){
var e = e13905;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);

return null;
} else {
throw e13905;

}
}} else {
var G__13941_13963 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__13941_13963) : callback.call(null,G__13941_13963));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__13966 = [cljs.core.str(s)].join('');
var G__13967 = s;
return encodeURIComponent(G__13966,G__13967);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__7021__auto__ = [];
var len__7014__auto___13972 = arguments.length;
var i__7015__auto___13973 = (0);
while(true){
if((i__7015__auto___13973 < len__7014__auto___13972)){
args__7021__auto__.push((arguments[i__7015__auto___13973]));

var G__13974 = (i__7015__auto___13973 + (1));
i__7015__auto___13973 = G__13974;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__13970){
var vec__13971 = p__13970;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq13968){
var G__13969 = cljs.core.first(seq13968);
var seq13968__$1 = cljs.core.next(seq13968);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__13969,seq13968__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode((taoensso.encore.qname.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.qname.cljs$core$IFn$_invoke$arity$1(k) : taoensso.encore.qname.call(null,k)))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode((function (){var or__5945__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__6725__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__13985(s__13986){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__13986__$1 = s__13986;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13986__$1);
if(temp__4657__auto__){
var s__13986__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13986__$2)){
var c__6723__auto__ = cljs.core.chunk_first(s__13986__$2);
var size__6724__auto__ = cljs.core.count(c__6723__auto__);
var b__13988 = cljs.core.chunk_buffer(size__6724__auto__);
if((function (){var i__13987 = (0);
while(true){
if((i__13987 < size__6724__auto__)){
var vec__13993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6723__auto__,i__13987);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13993,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13993,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_(v))){
cljs.core.chunk_append(b__13988,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5945__auto__ = cljs.core.seq(v);
if(or__5945__auto__){
return or__5945__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__13995 = (i__13987 + (1));
i__13987 = G__13995;
continue;
} else {
var G__13996 = (i__13987 + (1));
i__13987 = G__13996;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13988),taoensso$encore$format_query_string_$_iter__13985(cljs.core.chunk_rest(s__13986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13988),null);
}
} else {
var vec__13994 = cljs.core.first(s__13986__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13994,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_(v))){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__5945__auto__ = cljs.core.seq(v);
if(or__5945__auto__){
return or__5945__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__13985(cljs.core.rest(s__13986__$2)));
} else {
var G__13997 = cljs.core.rest(s__13986__$2);
s__13986__$1 = G__13997;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__6725__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14004 = arguments.length;
var i__7015__auto___14005 = (0);
while(true){
if((i__7015__auto___14005 < len__7014__auto___14004)){
args__7021__auto__.push((arguments[i__7015__auto___14005]));

var G__14006 = (i__7015__auto___14005 + (1));
i__7015__auto___14005 = G__14006;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__14000){
var vec__14001 = p__14000;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14001,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14001,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_(s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(s,"?"))?taoensso.encore.substr(s,(1)):s);
if(cljs.core.not(taoensso.encore.str_contains_QMARK_(s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__14001,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__14002 = temp__4655__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14002,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__14001,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.not(keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map(m);
}
}
})());
if(cljs.core.truth_((function (){var __x = _PERCENT_;
try{if(cljs.core.map_QMARK_(__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e14003){if((e14003 instanceof Error)){
var __t = e14003;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e14003;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq13998){
var G__13999 = cljs.core.first(seq13998);
var seq13998__$1 = cljs.core.next(seq13998);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__13999,seq13998__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__14008 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14008,(1),null);
var qmap = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map(taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.keywordize_map(m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var temp__4655__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4655__auto__)){
var qstr = temp__4655__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore.a0_memoize_ = taoensso.encore.memoize_a0_;
taoensso.encore.a1_memoize_ = taoensso.encore.memoize_a1_;
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG__STAR_;
taoensso.encore.fq_name = taoensso.encore.qname;
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14013 = arguments.length;
var i__7015__auto___14014 = (0);
while(true){
if((i__7015__auto___14014 < len__7014__auto___14013)){
args__7021__auto__.push((arguments[i__7015__auto___14014]));

var G__14015 = (i__7015__auto___14014 + (1));
i__7015__auto___14014 = G__14015;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__14011){
var vec__14012 = p__14011;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14012,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14012,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__5945__auto__ = type;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq14009){
var G__14010 = cljs.core.first(seq14009);
var seq14009__$1 = cljs.core.next(seq14009);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__14010,seq14009__$1);
});
taoensso.encore.logging_level = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug) : cljs.core.atom.call(null,cljs.core.cst$kw$debug));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14020 = arguments.length;
var i__7015__auto___14021 = (0);
while(true){
if((i__7015__auto___14021 < len__7014__auto___14020)){
args__7021__auto__.push((arguments[i__7015__auto___14021]));

var G__14022 = (i__7015__auto___14021 + (1));
i__7015__auto___14021 = G__14022;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__14018){
var vec__14019 = p__14018;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14019,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff((function (){var or__5945__auto__ = nattempt;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq14016){
var G__14017 = cljs.core.first(seq14016);
var seq14016__$1 = cljs.core.next(seq14016);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14017,seq14016__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__14023__delegate = function (args){
var temp__4655__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__14023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14024__i = 0, G__14024__a = new Array(arguments.length -  0);
while (G__14024__i < G__14024__a.length) {G__14024__a[G__14024__i] = arguments[G__14024__i + 0]; ++G__14024__i;}
  args = new cljs.core.IndexedSeq(G__14024__a,0);
} 
return G__14023__delegate.call(this,args);};
G__14023.cljs$lang$maxFixedArity = 0;
G__14023.cljs$lang$applyTo = (function (arglist__14025){
var args = cljs.core.seq(arglist__14025);
return G__14023__delegate(args);
});
G__14023.cljs$core$IFn$_invoke$arity$variadic = G__14023__delegate;
return G__14023;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14040 = arguments.length;
var i__7015__auto___14041 = (0);
while(true){
if((i__7015__auto___14041 < len__7014__auto___14040)){
args__7021__auto__.push((arguments[i__7015__auto___14041]));

var G__14042 = (i__7015__auto___14041 + (1));
i__7015__auto___14041 = G__14042;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$trace) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$trace)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq14026){
var G__14027 = cljs.core.first(seq14026);
var seq14026__$1 = cljs.core.next(seq14026);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__14027,seq14026__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14043 = arguments.length;
var i__7015__auto___14044 = (0);
while(true){
if((i__7015__auto___14044 < len__7014__auto___14043)){
args__7021__auto__.push((arguments[i__7015__auto___14044]));

var G__14045 = (i__7015__auto___14044 + (1));
i__7015__auto___14044 = G__14045;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$debug)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq14028){
var G__14029 = cljs.core.first(seq14028);
var seq14028__$1 = cljs.core.next(seq14028);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__14029,seq14028__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14046 = arguments.length;
var i__7015__auto___14047 = (0);
while(true){
if((i__7015__auto___14047 < len__7014__auto___14046)){
args__7021__auto__.push((arguments[i__7015__auto___14047]));

var G__14048 = (i__7015__auto___14047 + (1));
i__7015__auto___14047 = G__14048;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$info)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq14030){
var G__14031 = cljs.core.first(seq14030);
var seq14030__$1 = cljs.core.next(seq14030);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__14031,seq14030__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14049 = arguments.length;
var i__7015__auto___14050 = (0);
while(true){
if((i__7015__auto___14050 < len__7014__auto___14049)){
args__7021__auto__.push((arguments[i__7015__auto___14050]));

var G__14051 = (i__7015__auto___14050 + (1));
i__7015__auto___14050 = G__14051;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$warn) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$warn)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq14032){
var G__14033 = cljs.core.first(seq14032);
var seq14032__$1 = cljs.core.next(seq14032);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__14033,seq14032__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14052 = arguments.length;
var i__7015__auto___14053 = (0);
while(true){
if((i__7015__auto___14053 < len__7014__auto___14052)){
args__7021__auto__.push((arguments[i__7015__auto___14053]));

var G__14054 = (i__7015__auto___14053 + (1));
i__7015__auto___14053 = G__14054;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$error)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq14034){
var G__14035 = cljs.core.first(seq14034);
var seq14034__$1 = cljs.core.next(seq14034);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__14035,seq14034__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14055 = arguments.length;
var i__7015__auto___14056 = (0);
while(true){
if((i__7015__auto___14056 < len__7014__auto___14055)){
args__7021__auto__.push((arguments[i__7015__auto___14056]));

var G__14057 = (i__7015__auto___14056 + (1));
i__7015__auto___14056 = G__14057;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fatal) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$fatal)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq14036){
var G__14037 = cljs.core.first(seq14036);
var seq14036__$1 = cljs.core.next(seq14036);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__14037,seq14036__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14058 = arguments.length;
var i__7015__auto___14059 = (0);
while(true){
if((i__7015__auto___14059 < len__7014__auto___14058)){
args__7021__auto__.push((arguments[i__7015__auto___14059]));

var G__14060 = (i__7015__auto___14059 + (1));
i__7015__auto___14059 = G__14060;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$report) : taoensso.encore.log_QMARK_.call(null,cljs.core.cst$kw$report)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq14038){
var G__14039 = cljs.core.first(seq14038);
var seq14038__$1 = cljs.core.next(seq14038);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__14039,seq14038__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14067 = arguments.length;
var i__7015__auto___14068 = (0);
while(true){
if((i__7015__auto___14068 < len__7014__auto___14067)){
args__7021__auto__.push((arguments[i__7015__auto___14068]));

var G__14069 = (i__7015__auto___14068 + (1));
i__7015__auto___14068 = G__14069;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__14065){
var vec__14066 = p__14065;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(0),null);
var comparator = (function (){var or__5945__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__14066,_QMARK_comparator){
return (function (p1__14061_SHARP_,p2__14062_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__14061_SHARP_,p2__14062_SHARP_) : comparator.call(null,p1__14061_SHARP_,p2__14062_SHARP_)) > (0))){
return p2__14062_SHARP_;
} else {
return p1__14061_SHARP_;
}
});})(comparator,vec__14066,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq14063){
var G__14064 = cljs.core.first(seq14063);
var seq14063__$1 = cljs.core.next(seq14063);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__14064,seq14063__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14076 = arguments.length;
var i__7015__auto___14077 = (0);
while(true){
if((i__7015__auto___14077 < len__7014__auto___14076)){
args__7021__auto__.push((arguments[i__7015__auto___14077]));

var G__14078 = (i__7015__auto___14077 + (1));
i__7015__auto___14077 = G__14078;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__14074){
var vec__14075 = p__14074;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14075,(0),null);
var comparator = (function (){var or__5945__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__14075,_QMARK_comparator){
return (function (p1__14070_SHARP_,p2__14071_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__14070_SHARP_,p2__14071_SHARP_) : comparator.call(null,p1__14070_SHARP_,p2__14071_SHARP_)) < (0))){
return p2__14071_SHARP_;
} else {
return p1__14070_SHARP_;
}
});})(comparator,vec__14075,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq14072){
var G__14073 = cljs.core.first(seq14072);
var seq14072__$1 = cljs.core.next(seq14072);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__14073,seq14072__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__5945__auto__ = x;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
