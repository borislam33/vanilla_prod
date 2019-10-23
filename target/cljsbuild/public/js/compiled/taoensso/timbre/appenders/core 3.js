// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14086 = arguments.length;
var i__7015__auto___14087 = (0);
while(true){
if((i__7015__auto___14087 < len__7014__auto___14086)){
args__7021__auto__.push((arguments[i__7015__auto___14087]));

var G__14088 = (i__7015__auto___14087 + (1));
i__7015__auto___14087 = G__14088;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__14082){
var vec__14083 = p__14082;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14083,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__14083,_opts){
return (function (data){
var map__14084 = data;
var map__14084__$1 = ((((!((map__14084 == null)))?((((map__14084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14084):map__14084);
var output_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.cst$kw$output_DASH_fn);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(data) : output_fn.call(null,data))], 0));
});})(vec__14083,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq14081){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14081));
});
/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__7021__auto__ = [];
var len__7014__auto___14099 = arguments.length;
var i__7015__auto___14100 = (0);
while(true){
if((i__7015__auto___14100 < len__7014__auto___14099)){
args__7021__auto__.push((arguments[i__7015__auto___14100]));

var G__14101 = (i__7015__auto___14100 + (1));
i__7015__auto___14100 = G__14101;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__14090){
var vec__14091 = p__14090;
var map__14092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(0),null);
var map__14092__$1 = ((((!((map__14092 == null)))?((((map__14092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14092):map__14092);
var raw_output_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,cljs.core.cst$kw$raw_DASH_output_QMARK_);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,(cljs.core.truth_((function (){var and__5933__auto__ = typeof console !== 'undefined';
if(and__5933__auto__){
return console.log;
} else {
return and__5933__auto__;
}
})())?(function (){var level__GT_logger = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(function (){var or__5945__auto__ = console.trace;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return console.log;
}
})(),cljs.core.cst$kw$debug,(function (){var or__5945__auto__ = console.debug;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return console.log;
}
})(),cljs.core.cst$kw$info,(function (){var or__5945__auto__ = console.info;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return console.log;
}
})(),cljs.core.cst$kw$warn,(function (){var or__5945__auto__ = console.warn;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return console.log;
}
})(),cljs.core.cst$kw$error,(function (){var or__5945__auto__ = console.error;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return console.log;
}
})(),cljs.core.cst$kw$fatal,(function (){var or__5945__auto__ = console.error;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return console.log;
}
})(),cljs.core.cst$kw$report,(function (){var or__5945__auto__ = console.info;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return console.log;
}
})()], null);
return ((function (level__GT_logger,vec__14091,map__14092,map__14092__$1,raw_output_QMARK_){
return (function (data){
var map__14094 = data;
var map__14094__$1 = ((((!((map__14094 == null)))?((((map__14094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14094):map__14094);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14094__$1,cljs.core.cst$kw$level);
var output_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14094__$1,cljs.core.cst$kw$output_DASH_fn);
var vargs_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14094__$1,cljs.core.cst$kw$vargs_);
var vargs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vargs_) : cljs.core.deref.call(null,vargs_));
var vec__14095 = taoensso.encore.vsplit_first(vargs);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14095,(0),null);
var vnext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14095,(1),null);
var logger = (level__GT_logger.cljs$core$IFn$_invoke$arity$2 ? level__GT_logger.cljs$core$IFn$_invoke$arity$2(level,console.log) : level__GT_logger.call(null,level,console.log));
if(cljs.core.truth_((function (){var or__5945__auto__ = raw_output_QMARK_;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v1,cljs.core.cst$kw$timbre_SLASH_raw);
}
})())){
var output = (function (){var G__14097 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$msg_,(new cljs.core.Delay(((function (map__14094,map__14094__$1,level,output_fn,vargs_,vargs,vec__14095,v1,vnext,logger,level__GT_logger,vec__14091,map__14092,map__14092__$1,raw_output_QMARK_){
return (function (){
return "";
});})(map__14094,map__14094__$1,level,output_fn,vargs_,vargs,vec__14095,v1,vnext,logger,level__GT_logger,vec__14091,map__14092,map__14092__$1,raw_output_QMARK_))
,null)),cljs.core.cst$kw$_QMARK_err_,(new cljs.core.Delay(((function (map__14094,map__14094__$1,level,output_fn,vargs_,vargs,vec__14095,v1,vnext,logger,level__GT_logger,vec__14091,map__14092,map__14092__$1,raw_output_QMARK_){
return (function (){
return null;
});})(map__14094,map__14094__$1,level,output_fn,vargs_,vargs,vec__14095,v1,vnext,logger,level__GT_logger,vec__14091,map__14092,map__14092__$1,raw_output_QMARK_))
,null))], null)], 0));
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__14097) : output_fn.call(null,G__14097));
})();
var args = cljs.core.cons(output,cljs.core.cons((function (){var G__14098 = cljs.core.cst$kw$_QMARK_err_.cljs$core$IFn$_invoke$arity$1(data);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14098) : cljs.core.deref.call(null,G__14098));
})(),vnext));
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,(output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(data) : output_fn.call(null,data)));
}
});
;})(level__GT_logger,vec__14091,map__14092,map__14092__$1,raw_output_QMARK_))
})():((function (vec__14091,map__14092,map__14092__$1,raw_output_QMARK_){
return (function (data){
return null;
});})(vec__14091,map__14092,map__14092__$1,raw_output_QMARK_))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq14089){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14089));
});
/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
