// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.db');
goog.require('re_frame.utils');
re_frame.subs.key__GT_fn = (function (){var G__12379 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12379) : cljs.core.atom.call(null,G__12379));
})();
/**
 * Unregisters all subscription handlers
 */
re_frame.subs.clear_handlers_BANG_ = (function re_frame$subs$clear_handlers_BANG_(){
var G__12382 = re_frame.subs.key__GT_fn;
var G__12383 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12382,G__12383) : cljs.core.reset_BANG_.call(null,G__12382,G__12383));
});
/**
 * Registers a handler function for an id
 */
re_frame.subs.register = (function re_frame$subs$register(key_v,handler_fn){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.key__GT_fn) : cljs.core.deref.call(null,re_frame.subs.key__GT_fn)),key_v)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: overwriting subscription-handler for: ",key_v], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.key__GT_fn,cljs.core.assoc,key_v,handler_fn);
});
/**
 * Returns a reagent/reaction which observes a part of app-db
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args12385 = [];
var len__7014__auto___12393 = arguments.length;
var i__7015__auto___12394 = (0);
while(true){
if((i__7015__auto___12394 < len__7014__auto___12393)){
args12385.push((arguments[i__7015__auto___12394]));

var G__12395 = (i__7015__auto___12394 + (1));
i__7015__auto___12394 = G__12395;
continue;
} else {
}
break;
}

var G__12387 = args12385.length;
switch (G__12387) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12385.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (v){
var key_v = re_frame.utils.first_in_vector(v);
var handler_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.key__GT_fn) : cljs.core.deref.call(null,re_frame.subs.key__GT_fn)),key_v);
if((handler_fn == null)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: no subscription handler registered for: \"",key_v,"\". Returning a nil subscription."], 0));
} else {
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,v) : handler_fn.call(null,re_frame.db.app_db,v));
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
var key_v = re_frame.utils.first_in_vector(v);
var handler_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.key__GT_fn) : cljs.core.deref.call(null,re_frame.subs.key__GT_fn)),key_v);
if(goog.DEBUG){
var temp__4657__auto___12397 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (key_v,handler_fn){
return (function (p1__12384_SHARP_){
if(!((p1__12384_SHARP_ == null))){
if((false) || (p1__12384_SHARP_.reagent$ratom$IReactiveAtom$)){
return true;
} else {
return false;
}
} else {
return false;
}
});})(key_v,handler_fn))
,dynv));
if(temp__4657__auto___12397){
var not_reactive_12398 = temp__4657__auto___12397;
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: dynv contained parameters that don't implement IReactiveAtom: ",not_reactive_12398], 0));
} else {
}
} else {
}

if((handler_fn == null)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: no subscription handler registered for: \"",key_v,"\". Returning a nil subscription."], 0));
} else {
var dyn_vals = reagent.ratom.make_reaction(((function (key_v,handler_fn){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(key_v,handler_fn))
);
var sub = reagent.ratom.make_reaction(((function (dyn_vals,key_v,handler_fn){
return (function (){
var G__12389 = re_frame.db.app_db;
var G__12390 = v;
var G__12391 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__12389,G__12390,G__12391) : handler_fn.call(null,G__12389,G__12390,G__12391));
});})(dyn_vals,key_v,handler_fn))
);
return reagent.ratom.make_reaction(((function (dyn_vals,sub,key_v,handler_fn){
return (function (){
var G__12392 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12392) : cljs.core.deref.call(null,G__12392));
});})(dyn_vals,sub,key_v,handler_fn))
);
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;
