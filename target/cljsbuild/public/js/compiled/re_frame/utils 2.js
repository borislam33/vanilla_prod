// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,(function (p1__12315_SHARP_){
return console.log(p1__12315_SHARP_);
}),cljs.core.cst$kw$warn,(function (p1__12316_SHARP_){
return console.warn(p1__12316_SHARP_);
}),cljs.core.cst$kw$error,(function (p1__12317_SHARP_){
return console.error(p1__12317_SHARP_);
}),cljs.core.cst$kw$group,(function (p1__12318_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__12318_SHARP_);
} else {
return console.log(p1__12318_SHARP_);
}
}),cljs.core.cst$kw$groupEnd,(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_frame.utils.default_loggers) : cljs.core.atom.call(null,re_frame.utils.default_loggers));
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))")].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__7021__auto__ = [];
var len__7014__auto___12320 = arguments.length;
var i__7015__auto___12321 = (0);
while(true){
if((i__7015__auto___12321 < len__7014__auto___12320)){
args__7021__auto__.push((arguments[i__7015__auto___12321]));

var G__12322 = (i__7015__auto___12321 + (1));
i__7015__auto___12321 = G__12322;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$log.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq12319){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12319));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__7021__auto__ = [];
var len__7014__auto___12324 = arguments.length;
var i__7015__auto___12325 = (0);
while(true){
if((i__7015__auto___12325 < len__7014__auto___12324)){
args__7021__auto__.push((arguments[i__7015__auto___12325]));

var G__12326 = (i__7015__auto___12325 + (1));
i__7015__auto___12325 = G__12326;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$warn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq12323){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12323));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__7021__auto__ = [];
var len__7014__auto___12328 = arguments.length;
var i__7015__auto___12329 = (0);
while(true){
if((i__7015__auto___12329 < len__7014__auto___12328)){
args__7021__auto__.push((arguments[i__7015__auto___12329]));

var G__12330 = (i__7015__auto___12329 + (1));
i__7015__auto___12329 = G__12330;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq12327){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12327));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__7021__auto__ = [];
var len__7014__auto___12332 = arguments.length;
var i__7015__auto___12333 = (0);
while(true){
if((i__7015__auto___12333 < len__7014__auto___12332)){
args__7021__auto__.push((arguments[i__7015__auto___12333]));

var G__12334 = (i__7015__auto___12333 + (1));
i__7015__auto___12333 = G__12334;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$groupEnd.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq12331){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12331));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__7021__auto__ = [];
var len__7014__auto___12336 = arguments.length;
var i__7015__auto___12337 = (0);
while(true){
if((i__7015__auto___12337 < len__7014__auto___12336)){
args__7021__auto__.push((arguments[i__7015__auto___12337]));

var G__12338 = (i__7015__auto___12337 + (1));
i__7015__auto___12337 = G__12338;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq12335){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12335));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: expected a vector event, but got: ",v], 0));
}
});
