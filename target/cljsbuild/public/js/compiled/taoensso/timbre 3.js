// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(33),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.33);
}
/**
 * Default (fn [data]) -> string output fn.
 *   You can modify default options with `(partial default-output-fn <opts-map>)`.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var args17945 = [];
var len__7014__auto___17953 = arguments.length;
var i__7015__auto___17954 = (0);
while(true){
if((i__7015__auto___17954 < len__7014__auto___17953)){
args17945.push((arguments[i__7015__auto___17954]));

var G__17955 = (i__7015__auto___17954 + (1));
i__7015__auto___17954 = G__17955;
continue;
} else {
}
break;
}

var G__17947 = args17945.length;
switch (G__17947) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17945.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (p__17948,data){
var map__17949 = p__17948;
var map__17949__$1 = ((((!((map__17949 == null)))?((((map__17949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17949):map__17949);
var opts = map__17949__$1;
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__17951 = data;
var map__17951__$1 = ((((!((map__17951 == null)))?((((map__17951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17951):map__17951);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$level);
var _QMARK_err_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$_QMARK_err_);
var vargs_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$vargs_);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$_QMARK_line);
return [cljs.core.str(clojure.string.upper_case(cljs.core.name(level))),cljs.core.str(" "),cljs.core.str("["),cljs.core.str((function (){var or__5945__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return "?";
}
})()),cljs.core.str(":"),cljs.core.str((function (){var or__5945__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return "?";
}
})()),cljs.core.str("] - "),cljs.core.str(cljs.core.force(msg_)),cljs.core.str((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__4657__auto__ = cljs.core.force(_QMARK_err_);
if(cljs.core.truth_(temp__4657__auto__)){
var err = temp__4657__auto__;
return [cljs.core.str("\n"),cljs.core.str((taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,opts) : taoensso.timbre.stacktrace.call(null,err,opts)))].join('');
} else {
return null;
}
})()))].join('');
});

taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2;

taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Example (+default) Timbre v4 config map.
 * 
 *   APPENDERS
 *  An appender is a map with keys:
 *    :min-level       ; Level keyword, or nil (=> no minimum level)
 *    :enabled?        ;
 *    :async?          ; Dispatch using agent? Useful for slow appenders
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 * 
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String, or nil
 *    :?file           ; String, or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 * 
 *    :?err_           ; Delay - first-arg platform error, or nil
 *    :vargs_          ; Delay - raw args vector
 *    :hostname_       ; Delay - string (clj only)
 *    :msg_            ; Delay - args string
 *    :timestamp_      ; Delay - string
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 * 
 *    :context         ; *context* value at log time (see `with-context`)
 *    :profile-stats   ; From `profile` macro
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware returns
 *  nil, NO dispatching will occur (i.e. the event will be filtered).
 * 
 *   The `example-config` source code contains further settings and details.
 *   See also `set-config!`, `merge-config!`, `set-level!`.
 */
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_whitelist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$ns_DASH_blacklist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__17957 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__17957) : taoensso.timbre.console_appender.call(null,G__17957));
})()], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
 * See `example-config` for info.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___17960 = arguments.length;
var i__7015__auto___17961 = (0);
while(true){
if((i__7015__auto___17961 < len__7014__auto___17960)){
args__7021__auto__.push((arguments[i__7015__auto___17961]));

var G__17962 = (i__7015__auto___17961 + (1));
i__7015__auto___17961 = G__17962;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args);
});

taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq17958){
var G__17959 = cljs.core.first(seq17958);
var seq17958__$1 = cljs.core.next(seq17958);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17959,seq17958__$1);
});
taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (old){
return (taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$2(old,m) : taoensso.encore.nested_merge.call(null,old,m));
}));
});
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$level,level], null)], 0));
}));
});
taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);
taoensso.timbre.scored_levels = cljs.core.zipmap(taoensso.timbre.ordered_levels,cljs.core.next(cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
taoensso.timbre.valid_levels = cljs.core.set(taoensso.timbre.ordered_levels);
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(level){
var or__5945__auto__ = (taoensso.timbre.valid_levels.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.valid_levels.cljs$core$IFn$_invoke$arity$1(level) : taoensso.timbre.valid_levels.call(null,level));
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid logging level: "),cljs.core.str(level)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$level,level], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (cljs.core.long$((function (){var G__17965 = taoensso.timbre.valid_level(x);
return (taoensso.timbre.scored_levels.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.scored_levels.cljs$core$IFn$_invoke$arity$1(G__17965) : taoensso.timbre.scored_levels.call(null,G__17965));
})()) >= cljs.core.long$((function (){var G__17966 = taoensso.timbre.valid_level(y);
return (taoensso.timbre.scored_levels.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.scored_levels.cljs$core$IFn$_invoke$arity$1(G__17966) : taoensso.timbre.scored_levels.call(null,G__17966));
})()));
});
/**
 * (fn [whitelist blacklist]) -> (fn [ns]) -> ?unfiltered-ns
 */
taoensso.timbre.compile_ns_filters = (function (){var __GT_re_pattern = (function (x){
if(cljs.core.truth_(taoensso.encore.re_pattern_QMARK_(x))){
return x;
} else {
if(typeof x === 'string'){
var s = clojure.string.replace(clojure.string.replace([cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)");
return cljs.core.re_pattern(s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching clause",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
return taoensso.encore.memoize_(((function (__GT_re_pattern){
return (function (whitelist,blacklist){
var whitelist_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(__GT_re_pattern,whitelist);
var blacklist_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(__GT_re_pattern,blacklist);
var white_filter = ((cljs.core.empty_QMARK_(whitelist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return cljs.core.some(((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (p1__17967_SHARP_){
return cljs.core.re_find(p1__17967_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
,whitelist_STAR_);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))

);
var black_filter = ((cljs.core.empty_QMARK_(blacklist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return cljs.core.not(cljs.core.some(((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (p1__17968_SHARP_){
return cljs.core.re_find(p1__17968_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
,blacklist_STAR_));
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))

);
return ((function (whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern){
return (function (ns){
if(cljs.core.truth_((function (){var and__5933__auto__ = (white_filter.cljs$core$IFn$_invoke$arity$1 ? white_filter.cljs$core$IFn$_invoke$arity$1(ns) : white_filter.call(null,ns));
if(cljs.core.truth_(and__5933__auto__)){
return (black_filter.cljs$core$IFn$_invoke$arity$1 ? black_filter.cljs$core$IFn$_invoke$arity$1(ns) : black_filter.call(null,ns));
} else {
return and__5933__auto__;
}
})())){
return ns;
} else {
return null;
}
});
;})(whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern))
});})(__GT_re_pattern))
);
})();
/**
 * (fn [whitelist blacklist ns]) -> ?unfiltered-ns
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_((function (whitelist,blacklist,ns){
if(cljs.core.truth_((function (){var __x = ns;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e17969){if((e17969 instanceof Error)){
var __t = e17969;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.timbre",null,"(string? ns)",__x,__t,null);
} else {
throw e17969;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? ns)"));
}

return (taoensso.timbre.compile_ns_filters.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.compile_ns_filters.cljs$core$IFn$_invoke$arity$2(whitelist,blacklist) : taoensso.timbre.compile_ns_filters.call(null,whitelist,blacklist)).call(null,ns);
}));
taoensso.timbre.__GT_delay = (function taoensso$timbre$__GT_delay(x){
if(cljs.core.delay_QMARK_(x)){
return x;
} else {
return (new cljs.core.Delay((function (){
return x;
}),null));
}
});
taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = taoensso.encore.nil__GT_str(x);
if(cljs.core.record_QMARK_(x__$1)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__$1], 0));
} else {
return x__$1;

}
})),xs);
});
/**
 * Used for rate limiters, some appenders (e.g. Carmine), etc.
 *   Goal: (hash data-1) = (hash data-2) iff data-1 "the same" as data-2 for
 *   rate-limiting purposes, etc.
 */
taoensso.timbre.default_data_hash_fn = (function taoensso$timbre$default_data_hash_fn(data){
var map__17972 = data;
var map__17972__$1 = ((((!((map__17972 == null)))?((((map__17972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17972):map__17972);
var _QMARK_hash_arg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17972__$1,cljs.core.cst$kw$_QMARK_hash_DASH_arg);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17972__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17972__$1,cljs.core.cst$kw$_QMARK_line);
var vargs_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17972__$1,cljs.core.cst$kw$vargs_);
return [cljs.core.str((function (){var or__5945__auto__ = _QMARK_hash_arg;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_ns_str,(function (){var or__5945__auto____$1 = _QMARK_line;
if(cljs.core.truth_(or__5945__auto____$1)){
return or__5945__auto____$1;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vargs_) : cljs.core.deref.call(null,vargs_));
}
})()], null);
}
})())].join('');
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_((function (appender_id,specs){
return taoensso.encore.rate_limiter_STAR_(specs);
}));
}
taoensso.timbre.inherit_over = (function taoensso$timbre$inherit_over(k,appender,config,default$){
var or__5945__auto__ = (function (){var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,k);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$inherit) : taoensso.encore.kw_identical_QMARK_.call(null,a,cljs.core.cst$kw$inherit)))){
return null;
} else {
return a;
}
})();
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
var or__5945__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,k);
if(cljs.core.truth_(or__5945__auto____$1)){
return or__5945__auto____$1;
} else {
return default$;
}
}
});
taoensso.timbre.inherit_into = (function taoensso$timbre$inherit_into(k,appender,config,default$){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,k),(function (){var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,k);
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$inherit) : taoensso.encore.kw_identical_QMARK_.call(null,a,cljs.core.cst$kw$inherit)))){
return null;
} else {
return a;
}
})()], 0));
});
/**
 * General-purpose dynamic logging context. Context will be included in appender
 *   data map at logging time.
 */
taoensso.timbre._STAR_context_STAR_ = null;
/**
 * Runtime check: would Timbre currently log at the given logging level?
 *  * `?ns-str` arg required to support ns filtering
 *  * `config`  arg required to support non-global config
 */
taoensso.timbre.log_QMARK_ = (function taoensso$timbre$log_QMARK_(var_args){
var args17974 = [];
var len__7014__auto___17983 = arguments.length;
var i__7015__auto___17984 = (0);
while(true){
if((i__7015__auto___17984 < len__7014__auto___17983)){
args17974.push((arguments[i__7015__auto___17984]));

var G__17985 = (i__7015__auto___17984 + (1));
i__7015__auto___17984 = G__17985;
continue;
} else {
}
break;
}

var G__17976 = args17974.length;
switch (G__17976) {
case 1:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17974.length)].join('')));

}
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,null,null);
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,null);
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,config){
var config__$1 = (function (){var or__5945__auto__ = config;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var active_level = (function (){var or__5945__auto__ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.cst$kw$report;
}
})();
var and__5933__auto__ = taoensso.timbre.level_GT__EQ_(level,active_level);
if(cljs.core.truth_(and__5933__auto__)){
var and__5933__auto____$1 = (function (){var G__17980 = cljs.core.cst$kw$ns_DASH_whitelist.cljs$core$IFn$_invoke$arity$1(config__$1);
var G__17981 = cljs.core.cst$kw$ns_DASH_blacklist.cljs$core$IFn$_invoke$arity$1(config__$1);
var G__17982 = (function (){var or__5945__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return "";
}
})();
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__17980,G__17981,G__17982) : taoensso.timbre.ns_filter.call(null,G__17980,G__17981,G__17982));
})();
if(cljs.core.truth_(and__5933__auto____$1)){
return true;
} else {
return and__5933__auto____$1;
}
} else {
return and__5933__auto__;
}
});

taoensso.timbre.log_QMARK_.cljs$lang$maxFixedArity = 3;
/**
 * Processes vargs to extract special a0s
 */
taoensso.timbre.vargs__GT_margs = (function taoensso$timbre$vargs__GT_margs(vargs,a0_err_QMARK_){
var vec__17991 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991,(0),null);
var v = vec__17991;
var vec__17992 = (cljs.core.truth_((function (){var and__5933__auto__ = a0_err_QMARK_;
if(cljs.core.truth_(and__5933__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__5933__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,taoensso.encore.vnext(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
var _QMARK_err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17992,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17992,(1),null);
var vec__17993 = v__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17993,(0),null);
var v__$2 = vec__17993;
var vec__17994 = (((cljs.core.map_QMARK_(v0__$1)) && (cljs.core.contains_QMARK_(v0__$1,cljs.core.cst$kw$timbre_SLASH_hash)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timbre_SLASH_hash.cljs$core$IFn$_invoke$arity$1(v0__$1),taoensso.encore.vnext(v__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v__$2], null));
var _QMARK_hash_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17994,(0),null);
var v__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17994,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_QMARK_err,_QMARK_err,cljs.core.cst$kw$_QMARK_hash_DASH_arg,_QMARK_hash_arg,cljs.core.cst$kw$vargs,v__$3], null);
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
if(cljs.core.truth_(taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,config))){
var instant_18005 = taoensso.encore.now_dt();
var context_18006 = taoensso.timbre._STAR_context_STAR_;
var a0_err_QMARK__18007 = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_err,cljs.core.cst$kw$auto) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,cljs.core.cst$kw$auto));
var margs__18008 = (new cljs.core.Delay(((function (instant_18005,context_18006,a0_err_QMARK__18007){
return (function (){
return taoensso.timbre.vargs__GT_margs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vargs_) : cljs.core.deref.call(null,vargs_)),a0_err_QMARK__18007);
});})(instant_18005,context_18006,a0_err_QMARK__18007))
,null));
var _QMARK_err__18009 = (new cljs.core.Delay(((function (instant_18005,context_18006,a0_err_QMARK__18007,margs__18008){
return (function (){
if(cljs.core.truth_(a0_err_QMARK__18007)){
return cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(margs__18008) : cljs.core.deref.call(null,margs__18008)));
} else {
return _QMARK_err;
}
});})(instant_18005,context_18006,a0_err_QMARK__18007,margs__18008))
,null));
var _QMARK_hash_arg__18010 = (new cljs.core.Delay(((function (instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009){
return (function (){
return cljs.core.cst$kw$_QMARK_hash_DASH_arg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(margs__18008) : cljs.core.deref.call(null,margs__18008)));
});})(instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009))
,null));
var vargs__18011__$1 = (new cljs.core.Delay(((function (instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010){
return (function (){
return cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(margs__18008) : cljs.core.deref.call(null,margs__18008)));
});})(instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010))
,null));
var data_18012 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([_QMARK_base_data,((cljs.core.map_QMARK_(context_18006))?context_18006:null),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$instant,cljs.core.cst$kw$config,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$vargs_,cljs.core.cst$kw$_QMARK_hash_DASH_arg_,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_],[instant_18005,config,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null).call(null,level),_QMARK_ns_str,level,vargs__18011__$1,_QMARK_hash_arg__18010,context_18006,_QMARK_line,_QMARK_err__18009])], 0));
var msg_fn_18013 = ((function (instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012){
return (function (vargs___$2){
if((msg_type == null)){
return null;
} else {
var temp__4657__auto__ = (function (){var __x = (function (){try{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vargs___$2) : cljs.core.deref.call(null,vargs___$2));
}catch (e18000){if((e18000 instanceof Error)){
var __t = e18000;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.timbre",null,"([:or nil? vector?] (clojure.core/deref vargs_))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e18000;

}
}})();
if(cljs.core.truth_(((function (__x,instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012){
return (function (__x__$1){
var or__5945__auto__ = taoensso.truss.impl.non_throwing(cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.vector_QMARK_).call(null,__x__$1);
}
});})(__x,instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012))
.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.timbre",null,"([:or nil? vector?] (clojure.core/deref vargs_))",__x,null,null);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var vargs = temp__4657__auto__;
var G__18001 = (((msg_type instanceof cljs.core.Keyword))?msg_type.fqn:null);
switch (G__18001) {
case "p":
return taoensso.timbre.str_join(vargs);

break;
case "f":
var vec__18002 = taoensso.encore.vsplit_first(vargs);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18002,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18002,(1),null);
return taoensso.encore.format_STAR_(fmt,args);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
} else {
return null;
}
}
});})(instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012))
;
var _QMARK_data_18014 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012,msg_fn_18013){
return (function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
});})(instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012,msg_fn_18013))
,data_18012,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var _QMARK_data_18015__$1 = (function (){var temp__4657__auto__ = _QMARK_data_18014;
if(cljs.core.truth_(temp__4657__auto__)){
var data__$1 = temp__4657__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data__$1,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_QMARK_err_,taoensso.timbre.__GT_delay(cljs.core.cst$kw$_QMARK_err_.cljs$core$IFn$_invoke$arity$1(data__$1)),cljs.core.cst$kw$_QMARK_hash_DASH_arg_,taoensso.timbre.__GT_delay(cljs.core.cst$kw$_QMARK_hash_DASH_arg_.cljs$core$IFn$_invoke$arity$1(data__$1)),cljs.core.cst$kw$vargs_,taoensso.timbre.__GT_delay(cljs.core.cst$kw$vargs_.cljs$core$IFn$_invoke$arity$1(data__$1))], null)], 0));
} else {
return null;
}
})();
var temp__4657__auto___18017 = _QMARK_data_18015__$1;
if(cljs.core.truth_(temp__4657__auto___18017)){
var data_18018__$1 = temp__4657__auto___18017;
cljs.core.reduce_kv(((function (data_18018__$1,temp__4657__auto___18017,instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012,msg_fn_18013,_QMARK_data_18014,_QMARK_data_18015__$1){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__5933__auto__ = cljs.core.cst$kw$enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__5933__auto__)){
return taoensso.timbre.level_GT__EQ_(level,(function (){var or__5945__auto__ = cljs.core.cst$kw$min_DASH_level.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.cst$kw$trace;
}
})());
} else {
return and__5933__auto__;
}
})())){
var rate_limit_specs = cljs.core.cst$kw$rate_DASH_limit.cljs$core$IFn$_invoke$arity$1(appender);
var data_hash_fn = taoensso.timbre.inherit_over(cljs.core.cst$kw$data_DASH_hash_DASH_fn,appender,config,taoensso.timbre.default_data_hash_fn);
var rate_limit_okay_QMARK_ = (function (){var or__5945__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__5945__auto__){
return or__5945__auto__;
} else {
var rl_fn = (taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2(id,rate_limit_specs) : taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs));
var data_hash = (data_hash_fn.cljs$core$IFn$_invoke$arity$1 ? data_hash_fn.cljs$core$IFn$_invoke$arity$1(data_18018__$1) : data_hash_fn.call(null,data_18018__$1));
return cljs.core.not((rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(data_hash) : rl_fn.call(null,data_hash)));
}
})();
if(rate_limit_okay_QMARK_){
var map__18003 = appender;
var map__18003__$1 = ((((!((map__18003 == null)))?((((map__18003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18003):map__18003);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18003__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18003__$1,cljs.core.cst$kw$async_QMARK_);
var msg_ = (new cljs.core.Delay(((function (map__18003,map__18003__$1,apfn,async_QMARK_,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_18018__$1,temp__4657__auto___18017,instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012,msg_fn_18013,_QMARK_data_18014,_QMARK_data_18015__$1){
return (function (){
return msg_fn_18013(cljs.core.cst$kw$vargs_.cljs$core$IFn$_invoke$arity$1(data_18018__$1));
});})(map__18003,map__18003__$1,apfn,async_QMARK_,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_18018__$1,temp__4657__auto___18017,instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012,msg_fn_18013,_QMARK_data_18014,_QMARK_data_18015__$1))
,null));
var output_fn = taoensso.timbre.inherit_over(cljs.core.cst$kw$output_DASH_fn,appender,config,taoensso.timbre.default_output_fn);
var data__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data_18018__$1,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$msg_,msg_,cljs.core.cst$kw$msg_DASH_fn,msg_fn_18013,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$data_DASH_hash_DASH_fn,data_hash_fn], null)], 0));
if(cljs.core.not(async_QMARK_)){
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$2) : apfn.call(null,data__$2));
} else {
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$2) : apfn.call(null,data__$2));
}
} else {
return null;
}
} else {
return null;
}
});})(data_18018__$1,temp__4657__auto___18017,instant_18005,context_18006,a0_err_QMARK__18007,margs__18008,_QMARK_err__18009,_QMARK_hash_arg__18010,vargs__18011__$1,data_18012,msg_fn_18013,_QMARK_data_18014,_QMARK_data_18015__$1))
,null,taoensso.encore.clj1098(cljs.core.cst$kw$appenders.cljs$core$IFn$_invoke$arity$1(config)));
} else {
}
} else {
}

return null;
});
taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(and_form));
});
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var args__7021__auto__ = [];
var len__7014__auto___18025 = arguments.length;
var i__7015__auto___18026 = (0);
while(true){
if((i__7015__auto___18026 < len__7014__auto___18025)){
args__7021__auto__.push((arguments[i__7015__auto___18026]));

var G__18027 = (i__7015__auto___18026 + (1));
i__7015__auto___18026 = G__18027;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic = (function (err,p__18021){
var vec__18022 = p__18021;
var map__18023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18022,(0),null);
var map__18023__$1 = ((((!((map__18023 == null)))?((((map__18023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18023):map__18023);
var opts = map__18023__$1;
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18023__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
return [cljs.core.str(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = (1);

taoensso.timbre.stacktrace.cljs$lang$applyTo = (function (seq18019){
var G__18020 = cljs.core.first(seq18019);
var seq18019__$1 = cljs.core.next(seq18019);
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic(G__18020,seq18019__$1);
});
taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,[cljs.core.str(compile_time_ns)].join(''));
});
taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__7021__auto__ = [];
var len__7014__auto___18029 = arguments.length;
var i__7015__auto___18030 = (0);
while(true){
if((i__7015__auto___18030 < len__7014__auto___18029)){
args__7021__auto__.push((arguments[i__7015__auto___18030]));

var G__18031 = (i__7015__auto___18030 + (1));
i__7015__auto___18030 = G__18031;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join(xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq18028){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18028));
});
