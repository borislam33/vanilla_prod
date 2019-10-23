// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_(x))){
return cljs.core.cst$kw$wrong_DASH_type;
} else {
if(cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count(x)))){
return cljs.core.cst$kw$wrong_DASH_length;
} else {
var vec__18035 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return cljs.core.cst$kw$wrong_DASH_id_DASH_type;
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return cljs.core.cst$kw$unnamespaced_DASH_id;
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_(x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_event,x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_fmt = [cljs.core.str((function (){var G__18037 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__18037) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(err_fmt,cljs.core.array_seq([[cljs.core.str(x)].join('')], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$malformed_DASH_event,x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__5933__auto__ = cljs.core.map_QMARK_(x);
if(and__5933__auto__){
var and__5933__auto____$1 = taoensso.encore.keys_EQ_(x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null));
if(cljs.core.truth_(and__5933__auto____$1)){
var map__18041 = x;
var map__18041__$1 = ((((!((map__18041 == null)))?((((map__18041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18041):map__18041);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$event);
var and__5933__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(cljs.core.truth_(and__5933__auto____$2)){
var and__5933__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__5933__auto____$3){
var and__5933__auto____$4 = taoensso.encore.atom_QMARK_(state);
if(cljs.core.truth_(and__5933__auto____$4)){
return taoensso.sente.event_QMARK_(event);
} else {
return and__5933__auto____$4;
}
} else {
return and__5933__auto____$3;
}
} else {
return and__5933__auto____$2;
}
} else {
return and__5933__auto____$1;
}
} else {
return and__5933__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__5933__auto__ = cljs.core.map_QMARK_(x);
if(and__5933__auto__){
var and__5933__auto____$1 = taoensso.encore.keys_EQ_(x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$_QMARK_reply_DASH_fn,null,cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$connected_DASH_uids,null,cljs.core.cst$kw$uid,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$ring_DASH_req,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null));
if(cljs.core.truth_(and__5933__auto____$1)){
var map__18045 = x;
var map__18045__$1 = ((((!((map__18045 == null)))?((((map__18045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18045):map__18045);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18045__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var and__5933__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(cljs.core.truth_(and__5933__auto____$2)){
var and__5933__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__5933__auto____$3){
var and__5933__auto____$4 = taoensso.encore.atom_QMARK_(connected_uids);
if(cljs.core.truth_(and__5933__auto____$4)){
var and__5933__auto____$5 = cljs.core.map_QMARK_(ring_req);
if(and__5933__auto____$5){
var and__5933__auto____$6 = taoensso.encore.nblank_str_QMARK_(client_id);
if(cljs.core.truth_(and__5933__auto____$6)){
var and__5933__auto____$7 = taoensso.sente.event_QMARK_(event);
if(cljs.core.truth_(and__5933__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn));
} else {
return and__5933__auto____$7;
}
} else {
return and__5933__auto____$6;
}
} else {
return and__5933__auto____$5;
}
} else {
return and__5933__auto____$4;
}
} else {
return and__5933__auto____$3;
}
} else {
return and__5933__auto____$2;
}
} else {
return and__5933__auto____$1;
}
} else {
return and__5933__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__18047){
var map__18051 = p__18047;
var map__18051__$1 = ((((!((map__18051 == null)))?((((map__18051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18051):map__18051);
var ev_msg = map__18051__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18051__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18051__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__18053 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18053,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18053,(1),null);
var valid_event = vec__18053;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if(cljs.core.not(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_))){
return taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",159,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__18053,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__18051,map__18051__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__18053,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__18051,map__18051__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack(packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18057){if((e18057 instanceof Error)){
var __t = e18057;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e18057;

}
}})());
}catch (e18056){var t = e18056;
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",175,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq(_QMARK_m)){
return cljs.core.with_meta(x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args18058 = [];
var len__7014__auto___18061 = arguments.length;
var i__7015__auto___18062 = (0);
while(true){
if((i__7015__auto___18062 < len__7014__auto___18061)){
args18058.push((arguments[i__7015__auto___18062]));

var G__18063 = (i__7015__auto___18062 + (1));
i__7015__auto___18062 = G__18063;
continue;
} else {
}
break;
}

var G__18060 = args18058.length;
switch (G__18060) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18058.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack(packer,taoensso.sente.with__QMARK_meta(clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack(packer,taoensso.sente.with__QMARK_meta(wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__7021__auto__ = [];
var len__7014__auto___18066 = arguments.length;
var i__7015__auto___18067 = (0);
while(true){
if((i__7015__auto___18067 < len__7014__auto___18066)){
args__7021__auto__.push((arguments[i__7015__auto___18067]));

var G__18068 = (i__7015__auto___18067 + (1));
i__7015__auto___18067 = G__18068;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((0) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__7022__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",193,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq18065){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18065));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_18075 = prefixed_pstr;
try{if(typeof __x_18075 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18072){if((e18072 instanceof Error)){
var __t_18076 = e18072;
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_18075,__t_18076,null);
} else {
throw e18072;

}
}
var prefix = taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(prefixed_pstr,(0),cljs.core.array_seq([(1)], 0));
var pstr = taoensso.encore.substr(prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_(packer,pstr);
var wrapped_QMARK_ = (function (){var G__18074 = prefix;
switch (G__18074) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__18073 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",205,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__18073,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__18073,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation (experimental).
 * 
 *   [1] e.g. `taoensso.sente.server-adapters.http-kit/http-kit-adapter` or
 *         `taoensso.sente.server-adapters.immutant/immutant-adapter`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___18252 = arguments.length;
var i__7015__auto___18253 = (0);
while(true){
if((i__7015__auto___18253 < len__7014__auto___18252)){
args__7021__auto__.push((arguments[i__7015__auto___18253]));

var G__18254 = (i__7015__auto___18253 + (1));
i__7015__auto___18253 = G__18254;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__18081){
var vec__18082 = p__18081;
var map__18083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18082,(0),null);
var map__18083__$1 = ((((!((map__18083 == null)))?((((map__18083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18083):map__18083);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18083__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18083__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18083__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18083__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18083__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__5945__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$csrf_DASH_token], null));
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
var or__5945__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$ring$middleware$anti_DASH_forgery_SLASH_anti_DASH_forgery_DASH_token], null));
if(cljs.core.truth_(or__5945__auto____$1)){
return or__5945__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,"__anti-forgery-token"], null));
}
}
});})(vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18083__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18083__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18085){if((e18085 instanceof Error)){
var __t = e18085;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e18085;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18086){if((e18086 instanceof Error)){
var __t = e18086;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e18086;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__18078_SHARP_){
if(!((p1__18078_SHARP_ == null))){
if((false) || (p1__18078_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__18078_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__18078_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__18078_SHARP_);
}
});})(__x,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18087){if((e18087 instanceof Error)){
var __t = e18087;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"((fn* [p1__18078#] (satisfies? interfaces/IServerChanAdapter p1__18078#)) web-server-adapter)",__x,__t,null);
} else {
throw e18087;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__18078#] (satisfies? interfaces/IServerChanAdapter p1__18078#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var conns_ = (function (){var G__18089 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18089) : cljs.core.atom.call(null,G__18089));
})();
var connected_uids_ = (function (){var G__18090 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18090) : cljs.core.atom.call(null,G__18090));
})();
var send_buffers_ = (function (){var G__18091 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18091) : cljs.core.atom.call(null,G__18091));
})();
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__5945__auto__ = (function (){var G__18093 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__18093) : user_id_fn.call(null,G__18093));
})();
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_(__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18094){if((e18094 instanceof Error)){
var __t = e18094;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e18094;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__18095){
var map__18096 = p__18095;
var map__18096__$1 = ((((!((map__18096 == null)))?((((map__18096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18096):map__18096);
var old_m = map__18096__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,cljs.core.cst$kw$ws);
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__18098 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18098) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_(old_any,uid))) && (cljs.core.contains_QMARK_(new_any,uid))){
return cljs.core.cst$kw$newly_DASH_connected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_(__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18099){if((e18099 instanceof Error)){
var __t = e18099;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e18099;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__18100){
var map__18101 = p__18100;
var map__18101__$1 = ((((!((map__18101 == null)))?((((map__18101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18101):map__18101);
var old_m = map__18101__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18101__$1,cljs.core.cst$kw$ws);
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18101__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18101__$1,cljs.core.cst$kw$any);
var conns_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_));
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ws.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ajax.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),cljs.core.cst$kw$ajax,((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),cljs.core.cst$kw$any,((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_(old_any,uid)) && (!(cljs.core.contains_QMARK_(new_any,uid)))){
return cljs.core.cst$kw$newly_DASH_disconnected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__18256__delegate = function (user_id,ev,p__18103){
var vec__18104 = p__18103;
var map__18105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18104,(0),null);
var map__18105__$1 = ((((!((map__18105 == null)))?((((map__18105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18105):map__18105);
var opts = map__18105__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18105__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_18257 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __18258 = taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",324,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_18257,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_18257,ev], null);
});})(uid_18257,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __18259__$1 = (cljs.core.truth_(uid_18257)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __18260__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_18261 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__18262 = ((function (uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__18107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_18257);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18107,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18107,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_18261)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_18257),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_18257));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__18108 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108,(1),null);
var __x_18263 = buffered_evs;
try{if(cljs.core.vector_QMARK_(__x_18263)){
} else {
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18109){if((e18109 instanceof Error)){
var __t_18264 = e18109;
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(vector? buffered-evs)",__x_18263,__t_18264,null);
} else {
throw e18109;

}
}
var __x_18265 = ev_uuids;
try{if(cljs.core.set_QMARK_(__x_18265)){
} else {
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18110){if((e18110 instanceof Error)){
var __t_18266 = e18110;
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(set? ev-uuids)",__x_18265,__t_18266,null);
} else {
throw e18110;

}
}
var packer_metas = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([packer__$1,combined_packer_meta,buffered_evs], 0));
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",357,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__18108,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__18108,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__18111 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18111) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_18257,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_18257,buffered_evs_ppstr));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_18257,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_18257,buffered_evs_ppstr));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",367,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_18257], null);
});})(uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__18112_18268 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__18113_18269 = null;
var count__18114_18270 = (0);
var i__18115_18271 = (0);
while(true){
if((i__18115_18271 < count__18114_18270)){
var type_18272 = chunk__18113_18269.cljs$core$IIndexed$_nth$arity$2(null,i__18115_18271);
flush_buffer_BANG__18262(type_18272);

var G__18273 = seq__18112_18268;
var G__18274 = chunk__18113_18269;
var G__18275 = count__18114_18270;
var G__18276 = (i__18115_18271 + (1));
seq__18112_18268 = G__18273;
chunk__18113_18269 = G__18274;
count__18114_18270 = G__18275;
i__18115_18271 = G__18276;
continue;
} else {
var temp__4657__auto___18277 = cljs.core.seq(seq__18112_18268);
if(temp__4657__auto___18277){
var seq__18112_18278__$1 = temp__4657__auto___18277;
if(cljs.core.chunked_seq_QMARK_(seq__18112_18278__$1)){
var c__6756__auto___18279 = cljs.core.chunk_first(seq__18112_18278__$1);
var G__18280 = cljs.core.chunk_rest(seq__18112_18278__$1);
var G__18281 = c__6756__auto___18279;
var G__18282 = cljs.core.count(c__6756__auto___18279);
var G__18283 = (0);
seq__18112_18268 = G__18280;
chunk__18113_18269 = G__18281;
count__18114_18270 = G__18282;
i__18115_18271 = G__18283;
continue;
} else {
var type_18284 = cljs.core.first(seq__18112_18278__$1);
flush_buffer_BANG__18262(type_18284);

var G__18285 = cljs.core.next(seq__18112_18278__$1);
var G__18286 = null;
var G__18287 = (0);
var G__18288 = (0);
seq__18112_18268 = G__18285;
chunk__18113_18269 = G__18286;
count__18114_18270 = G__18287;
i__18115_18271 = G__18288;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__18116_18289 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_18257], null))));
var chunk__18117_18290 = null;
var count__18118_18291 = (0);
var i__18119_18292 = (0);
while(true){
if((i__18119_18292 < count__18118_18291)){
var server_ch_18293 = chunk__18117_18290.cljs$core$IIndexed$_nth$arity$2(null,i__18119_18292);
taoensso.sente.interfaces.sch_close_BANG_(server_ch_18293);

var G__18294 = seq__18116_18289;
var G__18295 = chunk__18117_18290;
var G__18296 = count__18118_18291;
var G__18297 = (i__18119_18292 + (1));
seq__18116_18289 = G__18294;
chunk__18117_18290 = G__18295;
count__18118_18291 = G__18296;
i__18119_18292 = G__18297;
continue;
} else {
var temp__4657__auto___18298 = cljs.core.seq(seq__18116_18289);
if(temp__4657__auto___18298){
var seq__18116_18299__$1 = temp__4657__auto___18298;
if(cljs.core.chunked_seq_QMARK_(seq__18116_18299__$1)){
var c__6756__auto___18300 = cljs.core.chunk_first(seq__18116_18299__$1);
var G__18301 = cljs.core.chunk_rest(seq__18116_18299__$1);
var G__18302 = c__6756__auto___18300;
var G__18303 = cljs.core.count(c__6756__auto___18300);
var G__18304 = (0);
seq__18116_18289 = G__18301;
chunk__18117_18290 = G__18302;
count__18118_18291 = G__18303;
i__18119_18292 = G__18304;
continue;
} else {
var server_ch_18305 = cljs.core.first(seq__18116_18299__$1);
taoensso.sente.interfaces.sch_close_BANG_(server_ch_18305);

var G__18306 = cljs.core.next(seq__18116_18299__$1);
var G__18307 = null;
var G__18308 = (0);
var G__18309 = (0);
seq__18116_18289 = G__18306;
chunk__18117_18290 = G__18307;
count__18118_18291 = G__18308;
i__18119_18292 = G__18309;
continue;
}
} else {
}
}
break;
}

var seq__18120_18310 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_18257], null))));
var chunk__18121_18311 = null;
var count__18122_18312 = (0);
var i__18123_18313 = (0);
while(true){
if((i__18123_18313 < count__18122_18312)){
var vec__18124_18314 = chunk__18121_18311.cljs$core$IIndexed$_nth$arity$2(null,i__18123_18313);
var _QMARK_server_ch_18315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124_18314,(0),null);
var __18316__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124_18314,(1),null);
var temp__4657__auto___18317 = _QMARK_server_ch_18315;
if(cljs.core.truth_(temp__4657__auto___18317)){
var server_ch_18318 = temp__4657__auto___18317;
taoensso.sente.interfaces.sch_close_BANG_(server_ch_18318);
} else {
}

var G__18319 = seq__18120_18310;
var G__18320 = chunk__18121_18311;
var G__18321 = count__18122_18312;
var G__18322 = (i__18123_18313 + (1));
seq__18120_18310 = G__18319;
chunk__18121_18311 = G__18320;
count__18122_18312 = G__18321;
i__18123_18313 = G__18322;
continue;
} else {
var temp__4657__auto___18323 = cljs.core.seq(seq__18120_18310);
if(temp__4657__auto___18323){
var seq__18120_18324__$1 = temp__4657__auto___18323;
if(cljs.core.chunked_seq_QMARK_(seq__18120_18324__$1)){
var c__6756__auto___18325 = cljs.core.chunk_first(seq__18120_18324__$1);
var G__18326 = cljs.core.chunk_rest(seq__18120_18324__$1);
var G__18327 = c__6756__auto___18325;
var G__18328 = cljs.core.count(c__6756__auto___18325);
var G__18329 = (0);
seq__18120_18310 = G__18326;
chunk__18121_18311 = G__18327;
count__18122_18312 = G__18328;
i__18123_18313 = G__18329;
continue;
} else {
var vec__18125_18330 = cljs.core.first(seq__18120_18324__$1);
var _QMARK_server_ch_18331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18125_18330,(0),null);
var __18332__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18125_18330,(1),null);
var temp__4657__auto___18333__$1 = _QMARK_server_ch_18331;
if(cljs.core.truth_(temp__4657__auto___18333__$1)){
var server_ch_18334 = temp__4657__auto___18333__$1;
taoensso.sente.interfaces.sch_close_BANG_(server_ch_18334);
} else {
}

var G__18335 = cljs.core.next(seq__18120_18324__$1);
var G__18336 = null;
var G__18337 = (0);
var G__18338 = (0);
seq__18120_18310 = G__18335;
chunk__18121_18311 = G__18336;
count__18122_18312 = G__18337;
i__18123_18313 = G__18338;
continue;
}
} else {
}
}
break;
}
} else {
var seq__18126_18339 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__18127_18340 = null;
var count__18128_18341 = (0);
var i__18129_18342 = (0);
while(true){
if((i__18129_18342 < count__18128_18341)){
var type_18343 = chunk__18127_18340.cljs$core$IIndexed$_nth$arity$2(null,i__18129_18342);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_18343,uid_18257], null),((function (seq__18126_18339,chunk__18127_18340,count__18128_18341,i__18129_18342,type_18343,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_18261], true)], null);
} else {
var vec__18130 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18130,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18130,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_18261)], null);
}
});})(seq__18126_18339,chunk__18127_18340,count__18128_18341,i__18129_18342,type_18343,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__18344 = seq__18126_18339;
var G__18345 = chunk__18127_18340;
var G__18346 = count__18128_18341;
var G__18347 = (i__18129_18342 + (1));
seq__18126_18339 = G__18344;
chunk__18127_18340 = G__18345;
count__18128_18341 = G__18346;
i__18129_18342 = G__18347;
continue;
} else {
var temp__4657__auto___18348 = cljs.core.seq(seq__18126_18339);
if(temp__4657__auto___18348){
var seq__18126_18349__$1 = temp__4657__auto___18348;
if(cljs.core.chunked_seq_QMARK_(seq__18126_18349__$1)){
var c__6756__auto___18350 = cljs.core.chunk_first(seq__18126_18349__$1);
var G__18351 = cljs.core.chunk_rest(seq__18126_18349__$1);
var G__18352 = c__6756__auto___18350;
var G__18353 = cljs.core.count(c__6756__auto___18350);
var G__18354 = (0);
seq__18126_18339 = G__18351;
chunk__18127_18340 = G__18352;
count__18128_18341 = G__18353;
i__18129_18342 = G__18354;
continue;
} else {
var type_18355 = cljs.core.first(seq__18126_18349__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_18355,uid_18257], null),((function (seq__18126_18339,chunk__18127_18340,count__18128_18341,i__18129_18342,type_18355,seq__18126_18349__$1,temp__4657__auto___18348,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_18261], true)], null);
} else {
var vec__18131 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18131,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18131,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_18261)], null);
}
});})(seq__18126_18339,chunk__18127_18340,count__18128_18341,i__18129_18342,type_18355,seq__18126_18349__$1,temp__4657__auto___18348,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__18356 = cljs.core.next(seq__18126_18349__$1);
var G__18357 = null;
var G__18358 = (0);
var G__18359 = (0);
seq__18126_18339 = G__18356;
chunk__18127_18340 = G__18357;
count__18128_18341 = G__18358;
i__18129_18342 = G__18359;
continue;
}
} else {
}
}
break;
}

var c__15109__auto___18360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___18360,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___18360,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_18141){
var state_val_18142 = (state_18141[(1)]);
if((state_val_18142 === (1))){
var state_18141__$1 = state_18141;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_18143_18361 = state_18141__$1;
(statearr_18143_18361[(1)] = (2));

} else {
var statearr_18144_18362 = state_18141__$1;
(statearr_18144_18362[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18142 === (2))){
var state_18141__$1 = state_18141;
var statearr_18145_18363 = state_18141__$1;
(statearr_18145_18363[(2)] = null);

(statearr_18145_18363[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18142 === (3))){
var inst_18134 = cljs.core.async.timeout(send_buf_ms_ws);
var state_18141__$1 = state_18141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18141__$1,(5),inst_18134);
} else {
if((state_val_18142 === (4))){
var inst_18138 = (state_18141[(2)]);
var inst_18139 = flush_buffer_BANG__18262(cljs.core.cst$kw$ws);
var state_18141__$1 = (function (){var statearr_18146 = state_18141;
(statearr_18146[(7)] = inst_18138);

return statearr_18146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18141__$1,inst_18139);
} else {
if((state_val_18142 === (5))){
var inst_18136 = (state_18141[(2)]);
var state_18141__$1 = state_18141;
var statearr_18147_18364 = state_18141__$1;
(statearr_18147_18364[(2)] = inst_18136);

(statearr_18147_18364[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
});})(c__15109__auto___18360,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__14995__auto__,c__15109__auto___18360,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__14996__auto__ = null;
var taoensso$sente$state_machine__14996__auto____0 = (function (){
var statearr_18151 = [null,null,null,null,null,null,null,null];
(statearr_18151[(0)] = taoensso$sente$state_machine__14996__auto__);

(statearr_18151[(1)] = (1));

return statearr_18151;
});
var taoensso$sente$state_machine__14996__auto____1 = (function (state_18141){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_18141);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e18152){if((e18152 instanceof Object)){
var ex__14999__auto__ = e18152;
var statearr_18153_18365 = state_18141;
(statearr_18153_18365[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18141);

return cljs.core.cst$kw$recur;
} else {
throw e18152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__18366 = state_18141;
state_18141 = G__18366;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
taoensso$sente$state_machine__14996__auto__ = function(state_18141){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__14996__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__14996__auto____1.call(this,state_18141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__14996__auto____0;
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__14996__auto____1;
return taoensso$sente$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___18360,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__15111__auto__ = (function (){var statearr_18154 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_18154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___18360);

return statearr_18154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___18360,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__15109__auto___18367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___18367,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___18367,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_18164){
var state_val_18165 = (state_18164[(1)]);
if((state_val_18165 === (1))){
var state_18164__$1 = state_18164;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_18166_18368 = state_18164__$1;
(statearr_18166_18368[(1)] = (2));

} else {
var statearr_18167_18369 = state_18164__$1;
(statearr_18167_18369[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (2))){
var state_18164__$1 = state_18164;
var statearr_18168_18370 = state_18164__$1;
(statearr_18168_18370[(2)] = null);

(statearr_18168_18370[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (3))){
var inst_18157 = cljs.core.async.timeout(send_buf_ms_ajax);
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18164__$1,(5),inst_18157);
} else {
if((state_val_18165 === (4))){
var inst_18161 = (state_18164[(2)]);
var inst_18162 = flush_buffer_BANG__18262(cljs.core.cst$kw$ajax);
var state_18164__$1 = (function (){var statearr_18169 = state_18164;
(statearr_18169[(7)] = inst_18161);

return statearr_18169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18164__$1,inst_18162);
} else {
if((state_val_18165 === (5))){
var inst_18159 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18170_18371 = state_18164__$1;
(statearr_18170_18371[(2)] = inst_18159);

(statearr_18170_18371[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
});})(c__15109__auto___18367,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__14995__auto__,c__15109__auto___18367,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__14996__auto__ = null;
var taoensso$sente$state_machine__14996__auto____0 = (function (){
var statearr_18174 = [null,null,null,null,null,null,null,null];
(statearr_18174[(0)] = taoensso$sente$state_machine__14996__auto__);

(statearr_18174[(1)] = (1));

return statearr_18174;
});
var taoensso$sente$state_machine__14996__auto____1 = (function (state_18164){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_18164);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e18175){if((e18175 instanceof Object)){
var ex__14999__auto__ = e18175;
var statearr_18176_18372 = state_18164;
(statearr_18176_18372[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18164);

return cljs.core.cst$kw$recur;
} else {
throw e18175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__18373 = state_18164;
state_18164 = G__18373;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
taoensso$sente$state_machine__14996__auto__ = function(state_18164){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__14996__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__14996__auto____1.call(this,state_18164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__14996__auto____0;
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__14996__auto____1;
return taoensso$sente$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___18367,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__15111__auto__ = (function (){var statearr_18177 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_18177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___18367);

return statearr_18177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___18367,uid_18257,__18258,__18259__$1,__18260__$2,ev_uuid_18261,flush_buffer_BANG__18262,vec__18104,map__18105,map__18105__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__18256 = function (user_id,ev,var_args){
var p__18103 = null;
if (arguments.length > 2) {
var G__18374__i = 0, G__18374__a = new Array(arguments.length -  2);
while (G__18374__i < G__18374__a.length) {G__18374__a[G__18374__i] = arguments[G__18374__i + 2]; ++G__18374__i;}
  p__18103 = new cljs.core.IndexedSeq(G__18374__a,0);
} 
return G__18256__delegate.call(this,user_id,ev,p__18103);};
G__18256.cljs$lang$maxFixedArity = 2;
G__18256.cljs$lang$applyTo = (function (arglist__18375){
var user_id = cljs.core.first(arglist__18375);
arglist__18375 = cljs.core.next(arglist__18375);
var ev = cljs.core.first(arglist__18375);
var p__18103 = cljs.core.rest(arglist__18375);
return G__18256__delegate(user_id,ev,p__18103);
});
G__18256.cljs$core$IFn$_invoke$arity$variadic = G__18256__delegate;
return G__18256;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__18178 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18178,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18178,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__18178,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",435,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (params,ppstr,client_id,vec__18178,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__18178,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$3(server_ch,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([packer__$1,cljs.core.meta(resp_clj),resp_clj], 0)),cljs.core.cst$kw$close_DASH_after_DASH_send);
});})(params,ppstr,client_id,vec__18178,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",442,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (params,ppstr,client_id,vec__18178,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__18178,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$3(server_ch,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([packer__$1,null,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200], 0)),cljs.core.cst$kw$close_DASH_after_DASH_send);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var uid = user_id_fn__$1(ring_req,client_id);
var websocket_QMARK_ = cljs.core.cst$kw$websocket_QMARK_.cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__18376__delegate = function (event,p__18179){
var vec__18180 = p__18179;
var _QMARK_reply_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$uid,uid], null)], 0)));
};
var G__18376 = function (event,var_args){
var p__18179 = null;
if (arguments.length > 1) {
var G__18377__i = 0, G__18377__a = new Array(arguments.length -  1);
while (G__18377__i < G__18377__a.length) {G__18377__a[G__18377__i] = arguments[G__18377__i + 1]; ++G__18377__i;}
  p__18179 = new cljs.core.IndexedSeq(G__18377__a,0);
} 
return G__18376__delegate.call(this,event,p__18179);};
G__18376.cljs$lang$maxFixedArity = 1;
G__18376.cljs$lang$applyTo = (function (arglist__18378){
var event = cljs.core.first(arglist__18378);
var p__18179 = cljs.core.rest(arglist__18378);
return G__18376__delegate(event,p__18179);
});
G__18376.cljs$core$IFn$_invoke$arity$variadic = G__18376__delegate;
return G__18376;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",467,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$3(server_ch,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([packer__$1,null,handshake_ev], 0)),cljs.core.not(websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",479,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_open,((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",487,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ws,uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open], null));
} else {
}

return handshake_BANG_(server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt()], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__5945__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.cst$kw$handshake_QMARK_.cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ajax,uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return handshake_BANG_(server_ch);
} else {
return null;
}
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_msg,((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__18181 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18181,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18181,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$variadic(clj,cljs.core.array_seq([(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__18181,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",514,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__18181,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__18181,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$2(server_ch,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([packer__$1,cljs.core.meta(resp_clj),resp_clj,_QMARK_cb_uuid], 0)));
});})(vec__18181,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], 0));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_close,((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_m,client_id);
if(cljs.core.empty_QMARK_(new_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__15109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_18195){
var state_val_18196 = (state_18195[(1)]);
if((state_val_18196 === (1))){
var inst_18182 = cljs.core.async.timeout((5000));
var state_18195__$1 = state_18195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18195__$1,(2),inst_18182);
} else {
if((state_val_18196 === (2))){
var inst_18184 = (state_18195[(2)]);
var inst_18185 = upd_connected_uid_BANG_(uid);
var state_18195__$1 = (function (){var statearr_18197 = state_18195;
(statearr_18197[(7)] = inst_18184);

return statearr_18197;
})();
if(cljs.core.truth_(inst_18185)){
var statearr_18198_18379 = state_18195__$1;
(statearr_18198_18379[(1)] = (3));

} else {
var statearr_18199_18380 = state_18195__$1;
(statearr_18199_18380[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18196 === (3))){
var inst_18187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18188 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close];
var inst_18189 = (new cljs.core.PersistentVector(null,1,(5),inst_18187,inst_18188,null));
var inst_18190 = receive_event_msg_BANG_(inst_18189);
var state_18195__$1 = state_18195;
var statearr_18200_18381 = state_18195__$1;
(statearr_18200_18381[(2)] = inst_18190);

(statearr_18200_18381[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18196 === (4))){
var state_18195__$1 = state_18195;
var statearr_18201_18382 = state_18195__$1;
(statearr_18201_18382[(2)] = null);

(statearr_18201_18382[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18196 === (5))){
var inst_18193 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18195__$1,inst_18193);
} else {
return null;
}
}
}
}
}
});})(c__15109__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__14995__auto__,c__15109__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__14996__auto__ = null;
var taoensso$sente$state_machine__14996__auto____0 = (function (){
var statearr_18205 = [null,null,null,null,null,null,null,null];
(statearr_18205[(0)] = taoensso$sente$state_machine__14996__auto__);

(statearr_18205[(1)] = (1));

return statearr_18205;
});
var taoensso$sente$state_machine__14996__auto____1 = (function (state_18195){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_18195);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e18206){if((e18206 instanceof Object)){
var ex__14999__auto__ = e18206;
var statearr_18207_18383 = state_18195;
(statearr_18207_18383[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18195);

return cljs.core.cst$kw$recur;
} else {
throw e18206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__18384 = state_18195;
state_18195 = G__18384;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
taoensso$sente$state_machine__14996__auto__ = function(state_18195){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__14996__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__14996__auto____1.call(this,state_18195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__14996__auto____0;
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__14996__auto____1;
return taoensso$sente$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__15111__auto__ = (function (){var statearr_18208 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_18208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto__);

return statearr_18208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__15109__auto__;
} else {
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,cljs.core.cst$kw$ajax,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__18209){
var vec__18210 = p__18209;
var server_ch__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18210,(0),null);
var udt_last_connected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18210,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt();
var c__15109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_18233){
var state_val_18234 = (state_18233[(1)]);
if((state_val_18234 === (1))){
var inst_18211 = cljs.core.async.timeout((5000));
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18233__$1,(2),inst_18211);
} else {
if((state_val_18234 === (2))){
var inst_18213 = (state_18233[(2)]);
var inst_18214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18215 = [cljs.core.cst$kw$ajax,uid];
var inst_18216 = (new cljs.core.PersistentVector(null,2,(5),inst_18214,inst_18215,null));
var inst_18217 = (function (){return ((function (inst_18213,inst_18214,inst_18215,inst_18216,state_val_18234,c__15109__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__18235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_m,client_id);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18235,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18235,(1),null);
var disconnected_QMARK_ = (function (){var and__5933__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__5933__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__5933__auto__;
}
})();
if(cljs.core.not(disconnected_QMARK_)){
return taoensso.encore.swapped(_QMARK_m,cljs.core.not(cljs.core.cst$kw$disconnected));
} else {
var new_m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_m,client_id);
return taoensso.encore.swapped(((cljs.core.empty_QMARK_(new_m))?cljs.core.cst$kw$swap_SLASH_dissoc:new_m),cljs.core.cst$kw$disconnected);
}
});
;})(inst_18213,inst_18214,inst_18215,inst_18216,state_val_18234,c__15109__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_18218 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_18216,inst_18217);
var state_18233__$1 = (function (){var statearr_18236 = state_18233;
(statearr_18236[(7)] = inst_18213);

return statearr_18236;
})();
if(cljs.core.truth_(inst_18218)){
var statearr_18237_18385 = state_18233__$1;
(statearr_18237_18385[(1)] = (3));

} else {
var statearr_18238_18386 = state_18233__$1;
(statearr_18238_18386[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18234 === (3))){
var inst_18220 = upd_connected_uid_BANG_(uid);
var state_18233__$1 = state_18233;
if(cljs.core.truth_(inst_18220)){
var statearr_18239_18387 = state_18233__$1;
(statearr_18239_18387[(1)] = (6));

} else {
var statearr_18240_18388 = state_18233__$1;
(statearr_18240_18388[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18234 === (4))){
var state_18233__$1 = state_18233;
var statearr_18241_18389 = state_18233__$1;
(statearr_18241_18389[(2)] = null);

(statearr_18241_18389[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18234 === (5))){
var inst_18231 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18233__$1,inst_18231);
} else {
if((state_val_18234 === (6))){
var inst_18222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18223 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close];
var inst_18224 = (new cljs.core.PersistentVector(null,1,(5),inst_18222,inst_18223,null));
var inst_18225 = receive_event_msg_BANG_(inst_18224);
var state_18233__$1 = state_18233;
var statearr_18242_18390 = state_18233__$1;
(statearr_18242_18390[(2)] = inst_18225);

(statearr_18242_18390[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18234 === (7))){
var state_18233__$1 = state_18233;
var statearr_18243_18391 = state_18233__$1;
(statearr_18243_18391[(2)] = null);

(statearr_18243_18391[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18234 === (8))){
var inst_18228 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18244_18392 = state_18233__$1;
(statearr_18244_18392[(2)] = inst_18228);

(statearr_18244_18392[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15109__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__14995__auto__,c__15109__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__14996__auto__ = null;
var taoensso$sente$state_machine__14996__auto____0 = (function (){
var statearr_18248 = [null,null,null,null,null,null,null,null];
(statearr_18248[(0)] = taoensso$sente$state_machine__14996__auto__);

(statearr_18248[(1)] = (1));

return statearr_18248;
});
var taoensso$sente$state_machine__14996__auto____1 = (function (state_18233){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_18233);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e18249){if((e18249 instanceof Object)){
var ex__14999__auto__ = e18249;
var statearr_18250_18393 = state_18233;
(statearr_18250_18393[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18233);

return cljs.core.cst$kw$recur;
} else {
throw e18249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__18394 = state_18233;
state_18233 = G__18394;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
taoensso$sente$state_machine__14996__auto__ = function(state_18233){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__14996__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__14996__auto____1.call(this,state_18233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__14996__auto____0;
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__14996__auto____1;
return taoensso$sente$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__15111__auto__ = (function (){var statearr_18251 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_18251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto__);

return statearr_18251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__15109__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__18082,map__18083,map__18083__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq18079){
var G__18080 = cljs.core.first(seq18079);
var seq18079__$1 = cljs.core.next(seq18079);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18080,seq18079__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",576,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__18399 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null))));
var chunk__18400 = null;
var count__18401 = (0);
var i__18402 = (0);
while(true){
if((i__18402 < count__18401)){
var server_ch = chunk__18400.cljs$core$IIndexed$_nth$arity$2(null,i__18402);
taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$2(server_ch,buffered_evs_pstr);

var G__18403 = seq__18399;
var G__18404 = chunk__18400;
var G__18405 = count__18401;
var G__18406 = (i__18402 + (1));
seq__18399 = G__18403;
chunk__18400 = G__18404;
count__18401 = G__18405;
i__18402 = G__18406;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18399);
if(temp__4657__auto__){
var seq__18399__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18399__$1)){
var c__6756__auto__ = cljs.core.chunk_first(seq__18399__$1);
var G__18407 = cljs.core.chunk_rest(seq__18399__$1);
var G__18408 = c__6756__auto__;
var G__18409 = cljs.core.count(c__6756__auto__);
var G__18410 = (0);
seq__18399 = G__18407;
chunk__18400 = G__18408;
count__18401 = G__18409;
i__18402 = G__18410;
continue;
} else {
var server_ch = cljs.core.first(seq__18399__$1);
taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$2(server_ch,buffered_evs_pstr);

var G__18411 = cljs.core.next(seq__18399__$1);
var G__18412 = null;
var G__18413 = (0);
var G__18414 = (0);
seq__18399 = G__18411;
chunk__18400 = G__18412;
count__18401 = G__18413;
i__18402 = G__18414;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___18504 = arguments.length;
var i__7015__auto___18505 = (0);
while(true){
if((i__7015__auto___18505 < len__7014__auto___18504)){
args__7021__auto__.push((arguments[i__7015__auto___18505]));

var G__18506 = (i__7015__auto___18505 + (1));
i__7015__auto___18505 = G__18506;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((3) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7022__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__18419){
var vec__18420 = p__18419;
var map__18421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420,(0),null);
var map__18421__$1 = ((((!((map__18421 == null)))?((((map__18421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18421):map__18421);
var nmax_attempts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18421__$1,cljs.core.cst$kw$nmax_DASH_attempts,(7));
var ms_base = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18421__$1,cljs.core.cst$kw$ms_DASH_base,(90));
var ms_rand = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18421__$1,cljs.core.cst$kw$ms_DASH_rand,(90));

taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",589,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conns_) : cljs.core.deref.call(null,conns_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__15109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_18470){
var state_val_18471 = (state_18470[(1)]);
if((state_val_18471 === (7))){
var inst_18425 = (state_18470[(7)]);
var inst_18424 = (state_18470[(8)]);
var inst_18431 = (state_18470[(9)]);
var inst_18442 = (function (){var n = inst_18424;
var client_ids_satisfied = inst_18425;
var _QMARK_pulled = inst_18431;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_18425,inst_18424,inst_18431,state_val_18471,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__18441){
var vec__18472 = p__18441;
var _QMARK_server_ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18472,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18472,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not(taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$3(_QMARK_server_ch,buffered_evs_pstr,cljs.core.cst$kw$close_DASH_after_DASH_send)))){
return s;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_18425,inst_18424,inst_18431,state_val_18471,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_18443 = cljs.core.PersistentHashSet.EMPTY;
var inst_18444 = cljs.core.reduce_kv(inst_18442,inst_18443,inst_18431);
var state_18470__$1 = state_18470;
var statearr_18473_18507 = state_18470__$1;
(statearr_18473_18507[(2)] = inst_18444);

(statearr_18473_18507[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (1))){
var inst_18423 = cljs.core.PersistentHashSet.EMPTY;
var inst_18424 = (0);
var inst_18425 = inst_18423;
var state_18470__$1 = (function (){var statearr_18474 = state_18470;
(statearr_18474[(7)] = inst_18425);

(statearr_18474[(8)] = inst_18424);

return statearr_18474;
})();
var statearr_18475_18508 = state_18470__$1;
(statearr_18475_18508[(2)] = null);

(statearr_18475_18508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (4))){
var state_18470__$1 = state_18470;
var statearr_18476_18509 = state_18470__$1;
(statearr_18476_18509[(2)] = true);

(statearr_18476_18509[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (15))){
var inst_18466 = (state_18470[(2)]);
var state_18470__$1 = state_18470;
var statearr_18477_18510 = state_18470__$1;
(statearr_18477_18510[(2)] = inst_18466);

(statearr_18477_18510[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (13))){
var inst_18457 = cljs.core.rand_int(ms_rand);
var inst_18458 = (ms_base + inst_18457);
var inst_18459 = cljs.core.async.timeout(inst_18458);
var state_18470__$1 = state_18470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18470__$1,(16),inst_18459);
} else {
if((state_val_18471 === (6))){
var inst_18431 = (state_18470[(9)]);
var inst_18439 = (state_18470[(2)]);
var state_18470__$1 = (function (){var statearr_18478 = state_18470;
(statearr_18478[(10)] = inst_18439);

return statearr_18478;
})();
if(cljs.core.truth_(inst_18431)){
var statearr_18479_18511 = state_18470__$1;
(statearr_18479_18511[(1)] = (7));

} else {
var statearr_18480_18512 = state_18470__$1;
(statearr_18480_18512[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (3))){
var inst_18468 = (state_18470[(2)]);
var state_18470__$1 = state_18470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18470__$1,inst_18468);
} else {
if((state_val_18471 === (12))){
var inst_18455 = (state_18470[(2)]);
var state_18470__$1 = state_18470;
if(cljs.core.truth_(inst_18455)){
var statearr_18481_18513 = state_18470__$1;
(statearr_18481_18513[(1)] = (13));

} else {
var statearr_18482_18514 = state_18470__$1;
(statearr_18482_18514[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (2))){
var inst_18425 = (state_18470[(7)]);
var inst_18424 = (state_18470[(8)]);
var inst_18431 = (state_18470[(9)]);
var inst_18427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18428 = [cljs.core.cst$kw$ajax,uid];
var inst_18429 = (new cljs.core.PersistentVector(null,2,(5),inst_18427,inst_18428,null));
var inst_18430 = (function (){var n = inst_18424;
var client_ids_satisfied = inst_18425;
return ((function (n,client_ids_satisfied,inst_18425,inst_18424,inst_18431,inst_18427,inst_18428,inst_18429,state_val_18471,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_18425,inst_18424,inst_18431,inst_18427,inst_18428,inst_18429,state_val_18471,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__18483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_server_ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18483,(0),null);
var udt_last_connected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18483,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_18425,inst_18424,inst_18431,inst_18427,inst_18428,inst_18429,state_val_18471,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_18425,inst_18424,inst_18431,inst_18427,inst_18428,inst_18429,state_val_18471,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_18431__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_18429,inst_18430);
var inst_18432 = (function (){var n = inst_18424;
var client_ids_satisfied = inst_18425;
var _QMARK_pulled = inst_18431__$1;
var __x = inst_18431__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_18425,inst_18424,inst_18431,inst_18427,inst_18428,inst_18429,inst_18430,inst_18431__$1,state_val_18471,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__5945__auto__ = taoensso.truss.impl.non_throwing(cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_18425,inst_18424,inst_18431,inst_18427,inst_18428,inst_18429,inst_18430,inst_18431__$1,state_val_18471,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_18433 = (inst_18432.cljs$core$IFn$_invoke$arity$1 ? inst_18432.cljs$core$IFn$_invoke$arity$1(inst_18431__$1) : inst_18432.call(null,inst_18431__$1));
var state_18470__$1 = (function (){var statearr_18484 = state_18470;
(statearr_18484[(9)] = inst_18431__$1);

return statearr_18484;
})();
if(cljs.core.truth_(inst_18433)){
var statearr_18485_18515 = state_18470__$1;
(statearr_18485_18515[(1)] = (4));

} else {
var statearr_18486_18516 = state_18470__$1;
(statearr_18486_18516[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (11))){
var inst_18449 = (state_18470[(11)]);
var state_18470__$1 = state_18470;
var statearr_18487_18517 = state_18470__$1;
(statearr_18487_18517[(2)] = inst_18449);

(statearr_18487_18517[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (9))){
var inst_18449 = (state_18470[(11)]);
var inst_18425 = (state_18470[(7)]);
var inst_18424 = (state_18470[(8)]);
var inst_18447 = (state_18470[(2)]);
var inst_18448 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_18425,inst_18447);
var inst_18449__$1 = (inst_18424 < nmax_attempts);
var state_18470__$1 = (function (){var statearr_18488 = state_18470;
(statearr_18488[(11)] = inst_18449__$1);

(statearr_18488[(12)] = inst_18448);

return statearr_18488;
})();
if(cljs.core.truth_(inst_18449__$1)){
var statearr_18489_18518 = state_18470__$1;
(statearr_18489_18518[(1)] = (10));

} else {
var statearr_18490_18519 = state_18470__$1;
(statearr_18490_18519[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (5))){
var inst_18431 = (state_18470[(9)]);
var inst_18436 = "([:or nil? map?] ?pulled)";
var inst_18437 = taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,inst_18436,inst_18431,null,null);
var state_18470__$1 = state_18470;
var statearr_18491_18520 = state_18470__$1;
(statearr_18491_18520[(2)] = inst_18437);

(statearr_18491_18520[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (14))){
var state_18470__$1 = state_18470;
var statearr_18492_18521 = state_18470__$1;
(statearr_18492_18521[(2)] = null);

(statearr_18492_18521[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (16))){
var inst_18424 = (state_18470[(8)]);
var inst_18448 = (state_18470[(12)]);
var inst_18461 = (state_18470[(2)]);
var inst_18462 = (inst_18424 + (1));
var inst_18424__$1 = inst_18462;
var inst_18425 = inst_18448;
var state_18470__$1 = (function (){var statearr_18493 = state_18470;
(statearr_18493[(13)] = inst_18461);

(statearr_18493[(7)] = inst_18425);

(statearr_18493[(8)] = inst_18424__$1);

return statearr_18493;
})();
var statearr_18494_18522 = state_18470__$1;
(statearr_18494_18522[(2)] = null);

(statearr_18494_18522[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (10))){
var inst_18448 = (state_18470[(12)]);
var inst_18451 = cljs.core.complement(inst_18448);
var inst_18452 = cljs.core.some(inst_18451,client_ids_unsatisfied);
var state_18470__$1 = state_18470;
var statearr_18495_18523 = state_18470__$1;
(statearr_18495_18523[(2)] = inst_18452);

(statearr_18495_18523[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18471 === (8))){
var state_18470__$1 = state_18470;
var statearr_18496_18524 = state_18470__$1;
(statearr_18496_18524[(2)] = null);

(statearr_18496_18524[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__14995__auto__,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__14996__auto__ = null;
var taoensso$sente$state_machine__14996__auto____0 = (function (){
var statearr_18500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18500[(0)] = taoensso$sente$state_machine__14996__auto__);

(statearr_18500[(1)] = (1));

return statearr_18500;
});
var taoensso$sente$state_machine__14996__auto____1 = (function (state_18470){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_18470);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e18501){if((e18501 instanceof Object)){
var ex__14999__auto__ = e18501;
var statearr_18502_18525 = state_18470;
(statearr_18502_18525[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18470);

return cljs.core.cst$kw$recur;
} else {
throw e18501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__18526 = state_18470;
state_18470 = G__18526;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
taoensso$sente$state_machine__14996__auto__ = function(state_18470){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__14996__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__14996__auto____1.call(this,state_18470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__14996__auto____0;
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__14996__auto____1;
return taoensso$sente$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__15111__auto__ = (function (){var statearr_18503 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_18503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto__);

return statearr_18503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto__,client_ids_unsatisfied,vec__18420,map__18421,map__18421__$1,nmax_attempts,ms_base,ms_rand))
);

return c__15109__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq18415){
var G__18416 = cljs.core.first(seq18415);
var seq18415__$1 = cljs.core.next(seq18415);
var G__18417 = cljs.core.first(seq18415__$1);
var seq18415__$2 = cljs.core.next(seq18415__$1);
var G__18418 = cljs.core.first(seq18415__$2);
var seq18415__$3 = cljs.core.next(seq18415__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18416,G__18417,G__18418,seq18415__$3);
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail
 */
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__6608__auto__ = (((chsk == null))?null:chsk);
var m__6609__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__6609__auto__.call(null,chsk));
} else {
var m__6609__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__6609__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
}
});

/**
 * Implementation detail
 */
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__6608__auto__ = (((chsk == null))?null:chsk);
var m__6609__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__6609__auto__.call(null,chsk,ev,opts));
} else {
var m__6609__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__6609__auto____$1.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
}
});

/**
 * DEPRECATED: Please use `chsk-disconnect!` instead
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__6608__auto__ = (((chsk == null))?null:chsk);
var m__6609__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__6609__auto__.call(null,chsk));
} else {
var m__6609__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__6609__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Disconnects channel socket
 */
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(chsk);
} else {
var x__6608__auto__ = (((chsk == null))?null:chsk);
var m__6609__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__6609__auto__.call(null,chsk));
} else {
var m__6609__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__6609__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.chsk-disconnect!",chsk);
}
}
}
});

/**
 * Reconnects channel socket (useful for reauthenticating after login/logout, etc.)
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__6608__auto__ = (((chsk == null))?null:chsk);
var m__6609__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__6609__auto__.call(null,chsk));
} else {
var m__6609__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__6609__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args18527 = [];
var len__7014__auto___18530 = arguments.length;
var i__7015__auto___18531 = (0);
while(true){
if((i__7015__auto___18531 < len__7014__auto___18530)){
args18527.push((arguments[i__7015__auto___18531]));

var G__18532 = (i__7015__auto___18531 + (1));
i__7015__auto___18531 = G__18532;
continue;
} else {
}
break;
}

var G__18529 = args18527.length;
switch (G__18529) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18527.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$timeout_DASH_ms,_QMARK_timeout_ms,cljs.core.cst$kw$cb,_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",646,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if(cljs.core.truth_((function (){var or__5945__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__5945__auto__){
return or__5945__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_(_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic("cb requires a timeout; timeout-ms should be a +ive integer: %s",cljs.core.array_seq([_QMARK_timeout_ms], 0))),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__5945__auto__ = (_QMARK_cb == null);
if(or__5945__auto__){
return or__5945__auto__;
} else {
var or__5945__auto____$1 = cljs.core.ifn_QMARK_(_QMARK_cb);
if(or__5945__auto____$1){
return or__5945__auto____$1;
} else {
return taoensso.encore.chan_QMARK_(_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic("cb should be nil, an ifn, or a channel: %s",cljs.core.array_seq([cljs.core.type(_QMARK_cb)], 0))),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__18534,merge_state){
var map__18538 = p__18534;
var map__18538__$1 = ((((!((map__18538 == null)))?((((map__18538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18538):map__18538);
var chsk = map__18538__$1;
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18538__$1,cljs.core.cst$kw$chs);
var state_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18538__$1,cljs.core.cst$kw$state_);
var vec__18540 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(state_,cljs.core.PersistentVector.EMPTY,((function (map__18538,map__18538__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,merge_state], 0));
var new_state__$1 = ((cljs.core.not((function (){var and__5933__auto__ = cljs.core.cst$kw$requested_DASH_reconnect_DASH_pending_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__5933__auto__)){
var and__5933__auto____$1 = cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__5933__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__5933__auto____$1;
}
} else {
return and__5933__auto__;
}
})()))?new_state:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state,cljs.core.cst$kw$requested_DASH_reconnect_DASH_pending_QMARK_),cljs.core.cst$kw$requested_DASH_reconnect_QMARK_,true));
return taoensso.encore.swapped(new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__18538,map__18538__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18540,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18540,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_18545 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_(__x_18545))){
} else {
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18543){if((e18543 instanceof Error)){
var __t_18546 = e18543;
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_18545,__t_18546,null);
} else {
throw e18543;

}
}
taoensso.sente.assert_event(ev);

var vec__18544 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18544,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18544,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__18544,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str((taoensso.encore.fq_name.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.fq_name.cljs$core$IFn$_invoke$arity$1(ev_id) : taoensso.encore.fq_name.call(null,ev_id))),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__18544,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",703,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_(__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18552){if((e18552 instanceof Error)){
var __t = e18552;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e18552;

}
}})();
var seq__18553 = cljs.core.seq(buffered_evs);
var chunk__18554 = null;
var count__18555 = (0);
var i__18556 = (0);
while(true){
if((i__18556 < count__18555)){
var ev = chunk__18554.cljs$core$IIndexed$_nth$arity$2(null,i__18556);
taoensso.sente.assert_event(ev);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__18557 = seq__18553;
var G__18558 = chunk__18554;
var G__18559 = count__18555;
var G__18560 = (i__18556 + (1));
seq__18553 = G__18557;
chunk__18554 = G__18558;
count__18555 = G__18559;
i__18556 = G__18560;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18553);
if(temp__4657__auto__){
var seq__18553__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18553__$1)){
var c__6756__auto__ = cljs.core.chunk_first(seq__18553__$1);
var G__18561 = cljs.core.chunk_rest(seq__18553__$1);
var G__18562 = c__6756__auto__;
var G__18563 = cljs.core.count(c__6756__auto__);
var G__18564 = (0);
seq__18553 = G__18561;
chunk__18554 = G__18562;
count__18555 = G__18563;
i__18556 = G__18564;
continue;
} else {
var ev = cljs.core.first(seq__18553__$1);
taoensso.sente.assert_event(ev);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__18565 = cljs.core.next(seq__18553__$1);
var G__18566 = null;
var G__18567 = (0);
var G__18568 = (0);
seq__18553 = G__18565;
chunk__18554 = G__18566;
count__18555 = G__18567;
i__18556 = G__18568;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_(clj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj),cljs.core.cst$kw$chsk_SLASH_handshake));
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",713,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?cljs.core.cst$kw$handshake:cljs.core.cst$kw$non_DASH_handshake),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__18571 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18571,(0),null);
var vec__18572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18571,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18572,(2),null);
var handshake_ev = vec__18571;
if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",719,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__18571,_,vec__18572,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__18571,_,vec__18572,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_(chsk,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token], null));

taoensso.sente.assert_event(handshake_ev);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return cljs.core.cst$kw$handled;
} else {
return null;
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6567__auto__,k__6568__auto__){
var self__ = this;
var this__6567__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6567__auto____$1,k__6568__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6569__auto__,k18574,else__6570__auto__){
var self__ = this;
var this__6569__auto____$1 = this;
var G__18576 = (((k18574 instanceof cljs.core.Keyword))?k18574.fqn:null);
switch (G__18576) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18574,else__6570__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6581__auto__,writer__6582__auto__,opts__6583__auto__){
var self__ = this;
var this__6581__auto____$1 = this;
var pr_pair__6584__auto__ = ((function (this__6581__auto____$1){
return (function (keyval__6585__auto__){
return cljs.core.pr_sequential_writer(writer__6582__auto__,cljs.core.pr_writer,""," ","",opts__6583__auto__,keyval__6585__auto__);
});})(this__6581__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6582__auto__,pr_pair__6584__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__6583__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$kalive_DASH_ms,self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$kalive_DASH_timer_,self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$kalive_DASH_due_QMARK__,self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$active_DASH_retry_DASH_id_,self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18573){
var self__ = this;
var G__18573__$1 = this;
return (new cljs.core.RecordIter((0),G__18573__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$kalive_DASH_ms,cljs.core.cst$kw$kalive_DASH_timer_,cljs.core.cst$kw$kalive_DASH_due_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$active_DASH_retry_DASH_id_,cljs.core.cst$kw$retry_DASH_count_], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6565__auto__){
var self__ = this;
var this__6565__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6561__auto__){
var self__ = this;
var this__6561__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6571__auto__){
var self__ = this;
var this__6571__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6562__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6563__auto__,other__6564__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6576__auto__,k__6577__auto__){
var self__ = this;
var this__6576__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$kalive_DASH_ms,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$retry_DASH_count_,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$socket_,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$active_DASH_retry_DASH_id_,null,cljs.core.cst$kw$kalive_DASH_due_QMARK__,null,cljs.core.cst$kw$cbs_DASH_waiting_,null,cljs.core.cst$kw$kalive_DASH_timer_,null,cljs.core.cst$kw$state_,null], null), null),k__6577__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6576__auto____$1),self__.__meta),k__6577__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6577__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6574__auto__,k__6575__auto__,G__18573){
var self__ = this;
var this__6574__auto____$1 = this;
var pred__18577 = cljs.core.keyword_identical_QMARK_;
var expr__18578 = k__6575__auto__;
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$client_DASH_id,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$client_DASH_id,expr__18578)))){
return (new taoensso.sente.ChWebSocket(G__18573,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chs,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$chs,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__18573,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$params,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__18573,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$packer,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$packer,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__18573,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$url,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$url,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__18573,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$state_,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__18573,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cbs_DASH_waiting_,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$cbs_DASH_waiting_,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__18573,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$socket_,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$socket_,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__18573,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$kalive_DASH_ms,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$kalive_DASH_ms,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__18573,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$kalive_DASH_timer_,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$kalive_DASH_timer_,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__18573,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$kalive_DASH_due_QMARK__,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$kalive_DASH_due_QMARK__,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__18573,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__18573,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$active_DASH_retry_DASH_id_,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$active_DASH_retry_DASH_id_,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__18573,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18577.cljs$core$IFn$_invoke$arity$2 ? pred__18577.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retry_DASH_count_,expr__18578) : pred__18577.call(null,cljs.core.cst$kw$retry_DASH_count_,expr__18578)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__18573,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6575__auto__,G__18573),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6579__auto__){
var self__ = this;
var this__6579__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$kalive_DASH_ms,self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$kalive_DASH_timer_,self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$kalive_DASH_due_QMARK__,self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$active_DASH_retry_DASH_id_,self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6566__auto__,G__18573){
var self__ = this;
var this__6566__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__18573,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6572__auto__,entry__6573__auto__){
var self__ = this;
var this__6572__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6573__auto__)){
return cljs.core._assoc(this__6572__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6573__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6573__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6572__auto____$1,entry__6573__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__18580){
var self__ = this;
var map__18581 = p__18580;
var map__18581__$1 = ((((!((map__18581 == null)))?((((map__18581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18581):map__18581);
var opts = map__18581__$1;
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18581__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18581__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18581__$1,cljs.core.cst$kw$flush_QMARK_);
var chsk__$1 = this;
taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",750,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chsk_SLASH_closed) : _QMARK_cb_fn.call(null,cljs.core.cst$kw$chsk_SLASH_closed));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.packer,cljs.core.meta(ev),ev,_QMARK_cb_uuid], 0));
var temp__4657__auto___18633 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___18633)){
var cb_uuid_18634 = temp__4657__auto___18633;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_18634], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_(__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18583){if((e18583 instanceof Error)){
var __t = e18583;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e18583;

}
}})());

var temp__4657__auto___18635__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___18635__$1)){
var timeout_ms_18636 = temp__4657__auto___18635__$1;
var c__15109__auto___18637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___18637,timeout_ms_18636,temp__4657__auto___18635__$1,cb_uuid_18634,temp__4657__auto___18633,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___18637,timeout_ms_18636,temp__4657__auto___18635__$1,cb_uuid_18634,temp__4657__auto___18633,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_18594){
var state_val_18595 = (state_18594[(1)]);
if((state_val_18595 === (1))){
var inst_18584 = cljs.core.async.timeout(timeout_ms_18636);
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18594__$1,(2),inst_18584);
} else {
if((state_val_18595 === (2))){
var inst_18587 = (state_18594[(7)]);
var inst_18586 = (state_18594[(2)]);
var inst_18587__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_18594__$1 = (function (){var statearr_18596 = state_18594;
(statearr_18596[(8)] = inst_18586);

(statearr_18596[(7)] = inst_18587__$1);

return statearr_18596;
})();
if(cljs.core.truth_(inst_18587__$1)){
var statearr_18597_18638 = state_18594__$1;
(statearr_18597_18638[(1)] = (3));

} else {
var statearr_18598_18639 = state_18594__$1;
(statearr_18598_18639[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (3))){
var inst_18587 = (state_18594[(7)]);
var inst_18589 = (inst_18587.cljs$core$IFn$_invoke$arity$1 ? inst_18587.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chsk_SLASH_timeout) : inst_18587.call(null,cljs.core.cst$kw$chsk_SLASH_timeout));
var state_18594__$1 = state_18594;
var statearr_18599_18640 = state_18594__$1;
(statearr_18599_18640[(2)] = inst_18589);

(statearr_18599_18640[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (4))){
var state_18594__$1 = state_18594;
var statearr_18600_18641 = state_18594__$1;
(statearr_18600_18641[(2)] = null);

(statearr_18600_18641[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18595 === (5))){
var inst_18592 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18594__$1,inst_18592);
} else {
return null;
}
}
}
}
}
});})(c__15109__auto___18637,timeout_ms_18636,temp__4657__auto___18635__$1,cb_uuid_18634,temp__4657__auto___18633,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__14995__auto__,c__15109__auto___18637,timeout_ms_18636,temp__4657__auto___18635__$1,cb_uuid_18634,temp__4657__auto___18633,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__14996__auto__ = null;
var taoensso$sente$state_machine__14996__auto____0 = (function (){
var statearr_18604 = [null,null,null,null,null,null,null,null,null];
(statearr_18604[(0)] = taoensso$sente$state_machine__14996__auto__);

(statearr_18604[(1)] = (1));

return statearr_18604;
});
var taoensso$sente$state_machine__14996__auto____1 = (function (state_18594){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_18594);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e18605){if((e18605 instanceof Object)){
var ex__14999__auto__ = e18605;
var statearr_18606_18642 = state_18594;
(statearr_18606_18642[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18594);

return cljs.core.cst$kw$recur;
} else {
throw e18605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__18643 = state_18594;
state_18594 = G__18643;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
taoensso$sente$state_machine__14996__auto__ = function(state_18594){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__14996__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__14996__auto____1.call(this,state_18594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__14996__auto____0;
taoensso$sente$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__14996__auto____1;
return taoensso$sente$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___18637,timeout_ms_18636,temp__4657__auto___18635__$1,cb_uuid_18634,temp__4657__auto___18633,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__15111__auto__ = (function (){var statearr_18607 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_18607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___18637);

return statearr_18607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___18637,timeout_ms_18636,temp__4657__auto___18635__$1,cb_uuid_18634,temp__4657__auto___18633,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.socket_) : cljs.core.deref.call(null,self__.socket_)).send(ppstr);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.kalive_due_QMARK__,false) : cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false));

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e18608){if((e18608 instanceof Error)){
var e = e18608;
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",769,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__18581,map__18581__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4657__auto___18644 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___18644)){
var cb_uuid_18645 = temp__4657__auto___18644;
var cb_fn_STAR__18646 = (function (){var or__5945__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_18645);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_(__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18609){if((e18609 instanceof Error)){
var __t = e18609;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e18609;

}
}}
})();
(cb_fn_STAR__18646.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__18646.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chsk_SLASH_error) : cb_fn_STAR__18646.call(null,cljs.core.cst$kw$chsk_SLASH_error));
} else {
}

return false;
} else {
throw e18608;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_(chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.active_retry_id_,"disconnected") : cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected"));

taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open_QMARK_,false], null));

var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.socket_) : cljs.core.deref.call(null,self__.socket_));
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.active_retry_id_,"reconnecting") : cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting"));

taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$requested_DASH_reconnect_DASH_pending_QMARK_,true], null));

var temp__4657__auto___18647 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.socket_) : cljs.core.deref.call(null,self__.socket_));
if(cljs.core.truth_(temp__4657__auto___18647)){
var s_18648 = temp__4657__auto___18647;
s_18648.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_(chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__5945__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(window,"WebSocket");
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var retry_id = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var connect_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.active_retry_id_) : cljs.core.deref.call(null,self__.active_retry_id_)),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
window.clearInterval((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.kalive_timer_) : cljs.core.deref.call(null,self__.kalive_timer_)));

taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",800,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e18621){if((e18621 instanceof Error)){
var e = e18621;
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",811,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e18621;

}
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
var G__18626 = self__.socket_;
var G__18627 = (function (){var G__18628 = _QMARK_socket;
(G__18628["onerror"] = ((function (G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",820,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
});})(G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__18628["onmessage"] = ((function (G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__18629 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18629,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18629,(1),null);
var or__5945__auto__ = (function (){var and__5933__auto__ = taoensso.sente.handle_when_handshake_BANG_(chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__5933__auto__)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,(0)) : cljs.core.reset_BANG_.call(null,self__.retry_count_,(0)));
} else {
return and__5933__auto__;
}
})();
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",838,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__5945__auto__,ppstr,vec__18629,clj,_QMARK_cb_uuid,G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__5945__auto__,ppstr,vec__18629,clj,_QMARK_cb_uuid,G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
});})(G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__18628["onopen"] = ((function (G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
var G__18630 = self__.kalive_timer_;
var G__18631 = window.setInterval(((function (G__18630,G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.kalive_due_QMARK__) : cljs.core.deref.call(null,self__.kalive_due_QMARK__)))){
taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2(chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping], null));
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.kalive_due_QMARK__,true) : cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true));
});})(G__18630,G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,self__.kalive_ms);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18630,G__18631) : cljs.core.reset_BANG_.call(null,G__18630,G__18631));
});})(G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__18628["onclose"] = ((function (G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open_QMARK_,false], null));

return retry_fn();
});})(G__18628,G__18626,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__18628;
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18626,G__18627) : cljs.core.reset_BANG_.call(null,G__18626,G__18627));
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.active_retry_id_,retry_id) : cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,(0)) : cljs.core.reset_BANG_.call(null,self__.retry_count_,(0)));

connect_fn();

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$state_,cljs.core.cst$sym$cbs_DASH_waiting_,cljs.core.cst$sym$socket_,cljs.core.cst$sym$kalive_DASH_ms,cljs.core.cst$sym$kalive_DASH_timer_,cljs.core.cst$sym$kalive_DASH_due_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$active_DASH_retry_DASH_id_,cljs.core.cst$sym$retry_DASH_count_], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__6601__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__6601__auto__,writer__6602__auto__){
return cljs.core._write(writer__6602__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__18575){
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$kalive_DASH_timer_.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$kalive_DASH_due_QMARK__.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$active_DASH_retry_DASH_id_.cljs$core$IFn$_invoke$arity$1(G__18575),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__18575),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18575,cljs.core.cst$kw$client_DASH_id,cljs.core.array_seq([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$kalive_DASH_ms,cljs.core.cst$kw$kalive_DASH_timer_,cljs.core.cst$kw$kalive_DASH_due_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$active_DASH_retry_DASH_id_,cljs.core.cst$kw$retry_DASH_count_], 0)),null));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.active_retry_id_ = active_retry_id_;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6567__auto__,k__6568__auto__){
var self__ = this;
var this__6567__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6567__auto____$1,k__6568__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6569__auto__,k18650,else__6570__auto__){
var self__ = this;
var this__6569__auto____$1 = this;
var G__18652 = (((k18650 instanceof cljs.core.Keyword))?k18650.fqn:null);
switch (G__18652) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18650,else__6570__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6581__auto__,writer__6582__auto__,opts__6583__auto__){
var self__ = this;
var this__6581__auto____$1 = this;
var pr_pair__6584__auto__ = ((function (this__6581__auto____$1){
return (function (keyval__6585__auto__){
return cljs.core.pr_sequential_writer(writer__6582__auto__,cljs.core.pr_writer,""," ","",opts__6583__auto__,keyval__6585__auto__);
});})(this__6581__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6582__auto__,pr_pair__6584__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__6583__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$timeout_DASH_ms,self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$active_DASH_retry_DASH_id_,self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18649){
var self__ = this;
var G__18649__$1 = this;
return (new cljs.core.RecordIter((0),G__18649__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$timeout_DASH_ms,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_,cljs.core.cst$kw$active_DASH_retry_DASH_id_,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn], null),cljs.core._iterator(self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6565__auto__){
var self__ = this;
var this__6565__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6561__auto__){
var self__ = this;
var this__6561__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6571__auto__){
var self__ = this;
var this__6571__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6562__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6563__auto__,other__6564__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6576__auto__,k__6577__auto__){
var self__ = this;
var this__6576__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$curr_DASH_xhr_,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$active_DASH_retry_DASH_id_,null,cljs.core.cst$kw$ajax_DASH_opts,null,cljs.core.cst$kw$timeout_DASH_ms,null,cljs.core.cst$kw$state_,null], null), null),k__6577__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6576__auto____$1),self__.__meta),k__6577__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6577__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6574__auto__,k__6575__auto__,G__18649){
var self__ = this;
var this__6574__auto____$1 = this;
var pred__18653 = cljs.core.keyword_identical_QMARK_;
var expr__18654 = k__6575__auto__;
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$client_DASH_id,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$client_DASH_id,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(G__18649,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chs,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$chs,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__18649,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$params,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__18649,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$packer,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$packer,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__18649,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$url,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$url,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__18649,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$state_,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__18649,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timeout_DASH_ms,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$timeout_DASH_ms,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__18649,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ajax_DASH_opts,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$ajax_DASH_opts,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__18649,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$curr_DASH_xhr_,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$curr_DASH_xhr_,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__18649,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$active_DASH_retry_DASH_id_,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$active_DASH_retry_DASH_id_,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__18649,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18653.cljs$core$IFn$_invoke$arity$2 ? pred__18653.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,expr__18654) : pred__18653.call(null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,expr__18654)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__18649,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6575__auto__,G__18649),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6579__auto__){
var self__ = this;
var this__6579__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$timeout_DASH_ms,self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$active_DASH_retry_DASH_id_,self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6566__auto__,G__18649){
var self__ = this;
var this__6566__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__18649,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6572__auto__,entry__6573__auto__){
var self__ = this;
var this__6572__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6573__auto__)){
return cljs.core._assoc(this__6572__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6573__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6573__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6572__auto____$1,entry__6573__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__18656){
var self__ = this;
var map__18657 = p__18656;
var map__18657__$1 = ((((!((map__18657 == null)))?((((map__18657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18657):map__18657);
var opts = map__18657__$1;
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18657__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18657__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18657__$1,cljs.core.cst$kw$flush_QMARK_);
var chsk__$1 = this;
taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",879,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__18657,map__18657__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__18657,map__18657__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chsk_SLASH_closed) : _QMARK_cb_fn.call(null,cljs.core.cst$kw$chsk_SLASH_closed));
} else {
return null;
}
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_)));
var G__18659_18714 = self__.url;
var G__18660_18715 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,_QMARK_timeout_ms,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$headers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,csrf_token], null)], 0)),cljs.core.cst$kw$params,(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.packer,cljs.core.meta(ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?cljs.core.cst$kw$ajax_DASH_cb:null)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$_,taoensso.encore.now_udt(),cljs.core.cst$kw$csrf_DASH_token,csrf_token,cljs.core.cst$kw$client_DASH_id,self__.client_id,cljs.core.cst$kw$ppstr,ppstr], null)], 0));
})()], null)], 0));
var G__18661_18716 = ((function (G__18659_18714,G__18660_18715,csrf_token,_QMARK_cb_fn,chsk__$1,map__18657,map__18657__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__18662){
var map__18666 = p__18662;
var map__18666__$1 = ((((!((map__18666 == null)))?((((map__18666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18666):map__18666);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18666__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18666__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chsk_SLASH_timeout) : _QMARK_cb_fn.call(null,cljs.core.cst$kw$chsk_SLASH_timeout));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open_QMARK_,false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chsk_SLASH_error) : _QMARK_cb_fn.call(null,cljs.core.cst$kw$chsk_SLASH_error));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__18668 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",919,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__18668,resp_clj,_,map__18666,map__18666__$1,_QMARK_error,_QMARK_content,G__18659_18714,G__18660_18715,csrf_token,_QMARK_cb_fn,chsk__$1,map__18657,map__18657__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__18668,resp_clj,_,map__18666,map__18666__$1,_QMARK_error,_QMARK_content,G__18659_18714,G__18660_18715,csrf_token,_QMARK_cb_fn,chsk__$1,map__18657,map__18657__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open_QMARK_,true], null));
}
});})(G__18659_18714,G__18660_18715,csrf_token,_QMARK_cb_fn,chsk__$1,map__18657,map__18657__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__18659_18714,G__18660_18715,G__18661_18716) : taoensso.sente.ajax_lite.call(null,G__18659_18714,G__18660_18715,G__18661_18716));

return cljs.core.cst$kw$apparent_DASH_success;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_(chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.active_retry_id_,"disconnected") : cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected"));

taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open_QMARK_,false], null));

var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.curr_xhr_) : cljs.core.deref.call(null,self__.curr_xhr_));
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.active_retry_id_,"reconnecting") : cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting"));

taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$requested_DASH_reconnect_DASH_pending_QMARK_,true], null));

var temp__4657__auto___18717 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.curr_xhr_) : cljs.core.deref.call(null,self__.curr_xhr_));
if(cljs.core.truth_(temp__4657__auto___18717)){
var x_18718 = temp__4657__auto___18717;
x_18718.abort();
} else {
}

return taoensso.sente._chsk_connect_BANG_(chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",940,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.active_retry_id_) : cljs.core.deref.call(null,self__.active_retry_id_)),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",946,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
var G__18701 = self__.curr_xhr_;
var G__18702 = (function (){var G__18703 = self__.url;
var G__18704 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,self__.timeout_ms,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state_) : cljs.core.deref.call(null,self__.state_))))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__18705 = ((function (G__18703,G__18704,G__18701,retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__18706){
var map__18710 = p__18706;
var map__18710__$1 = ((((!((map__18710 == null)))?((((map__18710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18710):map__18710);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18710__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18710__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open_QMARK_,false], null));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__18712 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18712,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18712,(1),null);
var or__5945__auto___18719 = taoensso.sente.handle_when_handshake_BANG_(chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__5945__auto___18719)){
} else {
var buffered_evs_18720 = clj;
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs_18720);

taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open_QMARK_,true], null));
}

return taoensso$sente$poll_fn((0));
}
});})(G__18703,G__18704,G__18701,retry_fn,retry_id,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__18703,G__18704,G__18705) : taoensso.sente.ajax_lite.call(null,G__18703,G__18704,G__18705));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18701,G__18702) : cljs.core.reset_BANG_.call(null,G__18701,G__18702));
});})(retry_id,chsk__$1))
;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.active_retry_id_,retry_id) : cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id));

poll_fn((0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$state_,cljs.core.cst$sym$timeout_DASH_ms,cljs.core.cst$sym$ajax_DASH_opts,cljs.core.cst$sym$curr_DASH_xhr_,cljs.core.cst$sym$active_DASH_retry_DASH_id_,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__6601__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__6601__auto__,writer__6602__auto__){
return cljs.core._write(writer__6602__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__18651){
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$active_DASH_retry_DASH_id_.cljs$core$IFn$_invoke$arity$1(G__18651),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__18651),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18651,cljs.core.cst$kw$client_DASH_id,cljs.core.array_seq([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$timeout_DASH_ms,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_,cljs.core.cst$kw$active_DASH_retry_DASH_id_,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn], 0)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__18722 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18722) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([chsk_host,chsk_path], 0)))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket-server!`.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___18748 = arguments.length;
var i__7015__auto___18749 = (0);
while(true){
if((i__7015__auto___18749 < len__7014__auto___18748)){
args__7021__auto__.push((arguments[i__7015__auto___18749]));

var G__18750 = (i__7015__auto___18749 + (1));
i__7015__auto___18749 = G__18750;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__18727){
var vec__18728 = p__18727;
var map__18729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18728,(0),null);
var map__18729__$1 = ((((!((map__18729 == null)))?((((map__18729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18729):map__18729);
var opts = map__18729__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18729__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,(25000));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18729__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,(25000));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18729__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__5945__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18729__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18729__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18729__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18729__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18729__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18728,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_(taoensso.truss.impl.set_STAR_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null)),__x__$1);
});})(__x,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18731){if((e18731 instanceof Error)){
var __t = e18731;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e18731;

}
}})())){
} else {
throw (new Error("Assert failed: (have? [:in #{:ws :ajax :auto}] type)"));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_(__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18732){if((e18732 instanceof Error)){
var __t = e18732;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e18732;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",1055,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",1057,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer(packer);
var win_location = taoensso.encore.get_window_location();
var win_protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__5945__auto__ = host;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__5945__auto__ = path;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.cst$kw$pathname.cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n)], null);
var ever_opened_QMARK__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__5945__auto__ = cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(state));
if(or__5945__auto__){
return or__5945__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ever_opened_QMARK__) : cljs.core.deref.call(null,ever_opened_QMARK__));
}
})())){
return state;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ever_opened_QMARK__,true) : cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$first_DASH_open_QMARK_,true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_(((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,state_STAR_(state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_(((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_(((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__18733 = ev;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18733,(0),null);
var _QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18733,(1),null);
var __x_18751 = (function (){try{return cljs.core.namespace(id);
}catch (e18734){if((e18734 instanceof Error)){
var __t = e18734;
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"((fn* [p1__18724#] (not= p1__18724# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e18734;

}
}})();
try{if(((function (__x_18751,vec__18733,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__18724_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__18724_SHARP_,"chsk");
});})(__x_18751,vec__18733,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_18751)){
} else {
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}catch (e18735){if((e18735 instanceof Error)){
var __t_18752 = e18735;
taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(true,"taoensso.sente",null,"((fn* [p1__18724#] (not= p1__18724# \"chsk\")) (namespace id))",__x_18751,__t_18752,null);
} else {
throw e18735;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__5945__auto__ = (function (){var and__5933__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$ajax);
if(and__5933__auto__){
return taoensso.sente._chsk_connect_BANG_(taoensso.sente.map__GT_ChWebSocket(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$kalive_DASH_ms,cljs.core.cst$kw$packer,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$socket_,cljs.core.cst$kw$url,cljs.core.cst$kw$active_DASH_retry_DASH_id_,cljs.core.cst$kw$kalive_DASH_due_QMARK__,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$kalive_DASH_timer_,cljs.core.cst$kw$state_],[client_id,ws_kalive_ms,packer__$1,private_chs,params,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),backoff_ms_fn,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),(function (){var temp__4655__auto__ = cljs.core.cst$kw$chsk_DASH_url_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_location,cljs.core.cst$kw$ws) : f.call(null,path__$1,win_location,cljs.core.cst$kw$ws));
} else {
return taoensso.sente.get_chsk_url(win_protocol,host__$1,path__$1,cljs.core.cst$kw$ws);
}
})(),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1("pending") : cljs.core.atom.call(null,"pending")),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true)),(function (){var G__18742 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18742) : cljs.core.atom.call(null,G__18742));
})(),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),(function (){var G__18743 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$ws,cljs.core.cst$kw$open_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18743) : cljs.core.atom.call(null,G__18743));
})()])));
} else {
return and__5933__auto__;
}
})();
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
var and__5933__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$ws);
if(and__5933__auto__){
return taoensso.sente._chsk_connect_BANG_(taoensso.sente.map__GT_ChAjaxSocket(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$curr_DASH_xhr_,cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$packer,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$url,cljs.core.cst$kw$active_DASH_retry_DASH_id_,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$timeout_DASH_ms,cljs.core.cst$kw$state_],[(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null)),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4655__auto__ = cljs.core.cst$kw$chsk_DASH_url_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_location,cljs.core.cst$kw$ajax) : f.call(null,path__$1,win_location,cljs.core.cst$kw$ajax));
} else {
return taoensso.sente.get_chsk_url(win_protocol,host__$1,path__$1,cljs.core.cst$kw$ajax);
}
})(),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1("pending") : cljs.core.atom.call(null,"pending")),ajax_opts,lp_timeout_ms,(function (){var G__18745 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$ajax,cljs.core.cst$kw$open_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18745) : cljs.core.atom.call(null,G__18745));
})()])));
} else {
return and__5933__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_(((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__18747 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18747,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18747,(1),null);
var ev__$1 = vec__18747;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,public_ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__18728,map__18729,map__18729__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,public_ch_recv__$1,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq18725){
var G__18726 = cljs.core.first(seq18725);
var seq18725__$1 = cljs.core.next(seq18725);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18726,seq18725__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__18959 = opts;
var map__18959__$1 = ((((!((map__18959 == null)))?((((map__18959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18959):map__18959);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18959__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18959__$1,cljs.core.cst$kw$error_DASH_handler);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__15109__auto___19165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_19090){
var state_val_19091 = (state_19090[(1)]);
if((state_val_19091 === (7))){
var inst_19086 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19092_19166 = state_19090__$1;
(statearr_19092_19166[(2)] = inst_19086);

(statearr_19092_19166[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (20))){
var inst_18995 = (state_19090[(7)]);
var inst_18969 = (state_19090[(8)]);
var inst_18970 = (state_19090[(9)]);
var inst_18967 = (state_19090[(10)]);
var inst_18968 = (state_19090[(11)]);
var inst_18994 = (state_19090[(12)]);
var inst_19005 = (function (){var vec__18962 = inst_18967;
var v = inst_18968;
var p = inst_18969;
var stop_QMARK_ = inst_18970;
var map__18973 = inst_18994;
var event_msg = inst_18994;
var event = inst_18995;
return ((function (vec__18962,v,p,stop_QMARK_,map__18973,event_msg,event,inst_18995,inst_18969,inst_18970,inst_18967,inst_18968,inst_18994,state_val_19091,c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__18962,v,p,stop_QMARK_,map__18973,event_msg,event,inst_18995,inst_18969,inst_18970,inst_18967,inst_18968,inst_18994,state_val_19091,c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_19006 = (new cljs.core.Delay(inst_19005,null));
var inst_19007 = taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",1176,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_19006,null);
var state_19090__$1 = state_19090;
var statearr_19093_19167 = state_19090__$1;
(statearr_19093_19167[(2)] = inst_19007);

(statearr_19093_19167[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (27))){
var inst_18994 = (state_19090[(12)]);
var inst_19012 = (state_19090[(2)]);
var inst_19013 = "(server-event-msg? event-msg)";
var inst_19014 = taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(null,"taoensso.sente",null,inst_19013,inst_18994,inst_19012,null);
var state_19090__$1 = state_19090;
var statearr_19094_19168 = state_19090__$1;
(statearr_19094_19168[(2)] = inst_19014);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (1))){
var state_19090__$1 = state_19090;
var statearr_19095_19169 = state_19090__$1;
(statearr_19095_19169[(2)] = null);

(statearr_19095_19169[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (24))){
var state_19090__$1 = state_19090;
var statearr_19096_19170 = state_19090__$1;
(statearr_19096_19170[(2)] = null);

(statearr_19096_19170[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (39))){
var state_19090__$1 = state_19090;
var statearr_19097_19171 = state_19090__$1;
(statearr_19097_19171[(2)] = null);

(statearr_19097_19171[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (46))){
var inst_19059 = (state_19090[(13)]);
var inst_19067 = (state_19090[(2)]);
var inst_19068 = [inst_19067,null];
var inst_19069 = (new cljs.core.PersistentVector(null,2,(5),inst_19059,inst_19068,null));
var state_19090__$1 = state_19090;
var statearr_19098_19172 = state_19090__$1;
(statearr_19098_19172[(2)] = inst_19069);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (4))){
var inst_18969 = (state_19090[(8)]);
var inst_18970 = (state_19090[(9)]);
var inst_18967 = (state_19090[(10)]);
var inst_18967__$1 = (state_19090[(2)]);
var inst_18968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18967__$1,(0),null);
var inst_18969__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18967__$1,(1),null);
var inst_18970__$1 = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(inst_18969__$1,ch_ctrl) : taoensso.encore.kw_identical_QMARK_.call(null,inst_18969__$1,ch_ctrl));
var state_19090__$1 = (function (){var statearr_19099 = state_19090;
(statearr_19099[(8)] = inst_18969__$1);

(statearr_19099[(9)] = inst_18970__$1);

(statearr_19099[(10)] = inst_18967__$1);

(statearr_19099[(11)] = inst_18968);

return statearr_19099;
})();
if(cljs.core.truth_(inst_18970__$1)){
var statearr_19100_19173 = state_19090__$1;
(statearr_19100_19173[(1)] = (5));

} else {
var statearr_19101_19174 = state_19090__$1;
(statearr_19101_19174[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (15))){
var inst_18968 = (state_19090[(11)]);
var state_19090__$1 = state_19090;
var statearr_19102_19175 = state_19090__$1;
(statearr_19102_19175[(2)] = inst_18968);

(statearr_19102_19175[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (48))){
var state_19090__$1 = state_19090;
var statearr_19103_19176 = state_19090__$1;
(statearr_19103_19176[(2)] = null);

(statearr_19103_19176[(1)] = (49));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (21))){
var state_19090__$1 = state_19090;
var statearr_19104_19177 = state_19090__$1;
(statearr_19104_19177[(2)] = null);

(statearr_19104_19177[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (31))){
var inst_19023 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19105_19178 = state_19090__$1;
(statearr_19105_19178[(2)] = inst_19023);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (32))){
var inst_19040 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19106_19179 = state_19090__$1;
(statearr_19106_19179[(2)] = inst_19040);

(statearr_19106_19179[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (40))){
var inst_19083 = (state_19090[(2)]);
var state_19090__$1 = (function (){var statearr_19107 = state_19090;
(statearr_19107[(14)] = inst_19083);

return statearr_19107;
})();
var statearr_19108_19180 = state_19090__$1;
(statearr_19108_19180[(2)] = null);

(statearr_19108_19180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (33))){
var inst_18994 = (state_19090[(12)]);
var inst_19027 = (state_19090[(2)]);
var inst_19028 = "(client-event-msg? event-msg)";
var inst_19029 = taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7(null,"taoensso.sente",null,inst_19028,inst_18994,inst_19027,null);
var state_19090__$1 = state_19090;
var statearr_19109_19181 = state_19090__$1;
(statearr_19109_19181[(2)] = inst_19029);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (13))){
var inst_18986 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19110_19182 = state_19090__$1;
(statearr_19110_19182[(2)] = inst_18986);

(statearr_19110_19182[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (22))){
var inst_19010 = (state_19090[(2)]);
var state_19090__$1 = (function (){var statearr_19111 = state_19090;
(statearr_19111[(15)] = inst_19010);

return statearr_19111;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_19112_19183 = state_19090__$1;
(statearr_19112_19183[(1)] = (23));

} else {
var statearr_19113_19184 = state_19090__$1;
(statearr_19113_19184[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (36))){
var inst_19036 = taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_19090__$1 = state_19090;
var statearr_19114_19185 = state_19090__$1;
(statearr_19114_19185[(2)] = inst_19036);

(statearr_19114_19185[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (41))){
var inst_19071 = (state_19090[(16)]);
var inst_19073 = (state_19090[(17)]);
var inst_19071__$1 = (state_19090[(2)]);
var inst_19072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19071__$1,(0),null);
var inst_19073__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19071__$1,(1),null);
var state_19090__$1 = (function (){var statearr_19115 = state_19090;
(statearr_19115[(16)] = inst_19071__$1);

(statearr_19115[(17)] = inst_19073__$1);

(statearr_19115[(18)] = inst_19072);

return statearr_19115;
})();
if(cljs.core.truth_(inst_19073__$1)){
var statearr_19116_19186 = state_19090__$1;
(statearr_19116_19186[(1)] = (47));

} else {
var statearr_19117_19187 = state_19090__$1;
(statearr_19117_19187[(1)] = (48));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19090,(42),Error,null,(41));
var inst_19059 = cljs.core.PersistentVector.EMPTY_NODE;
var state_19090__$1 = (function (){var statearr_19118 = state_19090;
(statearr_19118[(13)] = inst_19059);

return statearr_19118;
})();
if(cljs.core.truth_(error_handler)){
var statearr_19119_19188 = state_19090__$1;
(statearr_19119_19188[(1)] = (44));

} else {
var statearr_19120_19189 = state_19090__$1;
(statearr_19120_19189[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (29))){
var inst_18994 = (state_19090[(12)]);
var state_19090__$1 = state_19090;
var statearr_19121_19190 = state_19090__$1;
(statearr_19121_19190[(2)] = inst_18994);

(statearr_19121_19190[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (44))){
var inst_18994 = (state_19090[(12)]);
var inst_19049 = (state_19090[(19)]);
var inst_19061 = (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(inst_19049,inst_18994) : error_handler.call(null,inst_19049,inst_18994));
var state_19090__$1 = state_19090;
var statearr_19122_19191 = state_19090__$1;
(statearr_19122_19191[(2)] = inst_19061);

(statearr_19122_19191[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (6))){
var inst_18968 = (state_19090[(11)]);
var inst_18976 = (inst_18968 == null);
var inst_18977 = cljs.core.not(inst_18976);
var state_19090__$1 = state_19090;
if(inst_18977){
var statearr_19123_19192 = state_19090__$1;
(statearr_19123_19192[(1)] = (8));

} else {
var statearr_19124_19193 = state_19090__$1;
(statearr_19124_19193[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (28))){
var inst_18994 = (state_19090[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19090,(27),Error,null,(26));
var inst_19018 = taoensso.sente.server_event_msg_QMARK_(inst_18994);
var state_19090__$1 = state_19090;
if(cljs.core.truth_(inst_19018)){
var statearr_19125_19194 = state_19090__$1;
(statearr_19125_19194[(1)] = (29));

} else {
var statearr_19126_19195 = state_19090__$1;
(statearr_19126_19195[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (25))){
var inst_19003 = (state_19090[(20)]);
var inst_19042 = (state_19090[(2)]);
var inst_19043 = (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(inst_19042) : event_msg_handler.call(null,inst_19042));
var inst_19044 = [inst_19043,null];
var inst_19045 = (new cljs.core.PersistentVector(null,2,(5),inst_19003,inst_19044,null));
var state_19090__$1 = state_19090;
var statearr_19127_19196 = state_19090__$1;
(statearr_19127_19196[(2)] = inst_19045);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (34))){
var inst_18994 = (state_19090[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19090,(33),Error,null,(32));
var inst_19033 = taoensso.sente.client_event_msg_QMARK_(inst_18994);
var state_19090__$1 = state_19090;
if(cljs.core.truth_(inst_19033)){
var statearr_19128_19197 = state_19090__$1;
(statearr_19128_19197[(1)] = (35));

} else {
var statearr_19129_19198 = state_19090__$1;
(statearr_19129_19198[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (17))){
var inst_19047 = (state_19090[(21)]);
var inst_19049 = (state_19090[(19)]);
var inst_19047__$1 = (state_19090[(2)]);
var inst_19048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19047__$1,(0),null);
var inst_19049__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19047__$1,(1),null);
var state_19090__$1 = (function (){var statearr_19130 = state_19090;
(statearr_19130[(21)] = inst_19047__$1);

(statearr_19130[(22)] = inst_19048);

(statearr_19130[(19)] = inst_19049__$1);

return statearr_19130;
})();
if(cljs.core.truth_(inst_19049__$1)){
var statearr_19131_19199 = state_19090__$1;
(statearr_19131_19199[(1)] = (38));

} else {
var statearr_19132_19200 = state_19090__$1;
(statearr_19132_19200[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (3))){
var inst_19088 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19090__$1,inst_19088);
} else {
if((state_val_19091 === (12))){
var state_19090__$1 = state_19090;
var statearr_19133_19201 = state_19090__$1;
(statearr_19133_19201[(2)] = false);

(statearr_19133_19201[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (2))){
var inst_18963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18964 = [ch_recv,ch_ctrl];
var inst_18965 = (new cljs.core.PersistentVector(null,2,(5),inst_18963,inst_18964,null));
var state_19090__$1 = state_19090;
return cljs.core.async.ioc_alts_BANG_(state_19090__$1,(4),inst_18965);
} else {
if((state_val_19091 === (23))){
var state_19090__$1 = state_19090;
var statearr_19134_19202 = state_19090__$1;
(statearr_19134_19202[(2)] = null);

(statearr_19134_19202[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (47))){
var inst_19047 = (state_19090[(21)]);
var inst_18995 = (state_19090[(7)]);
var inst_19071 = (state_19090[(16)]);
var inst_18969 = (state_19090[(8)]);
var inst_18970 = (state_19090[(9)]);
var inst_19073 = (state_19090[(17)]);
var inst_18967 = (state_19090[(10)]);
var inst_19072 = (state_19090[(18)]);
var inst_18968 = (state_19090[(11)]);
var inst_18994 = (state_19090[(12)]);
var inst_19049 = (state_19090[(19)]);
var inst_19075 = (function (){var map__18973 = inst_18994;
var p = inst_18969;
var _QMARK_error = inst_19049;
var vec__19051 = inst_19071;
var v = inst_18968;
var _ = inst_19072;
var e2 = inst_19073;
var _QMARK_error2 = inst_19073;
var vec__18974 = inst_19047;
var event_msg = inst_18994;
var e = inst_19049;
var vec__18962 = inst_18967;
var temp__4657__auto__ = inst_19073;
var event = inst_18995;
var stop_QMARK_ = inst_18970;
return ((function (map__18973,p,_QMARK_error,vec__19051,v,_,e2,_QMARK_error2,vec__18974,event_msg,e,vec__18962,temp__4657__auto__,event,stop_QMARK_,inst_19047,inst_18995,inst_19071,inst_18969,inst_18970,inst_19073,inst_18967,inst_19072,inst_18968,inst_18994,inst_19049,state_val_19091,c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(map__18973,p,_QMARK_error,vec__19051,v,_,e2,_QMARK_error2,vec__18974,event_msg,e,vec__18962,temp__4657__auto__,event,stop_QMARK_,inst_19047,inst_18995,inst_19071,inst_18969,inst_18970,inst_19073,inst_18967,inst_19072,inst_18968,inst_18994,inst_19049,state_val_19091,c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_19076 = (new cljs.core.Delay(inst_19075,null));
var inst_19077 = taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",1189,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_19076,null);
var state_19090__$1 = state_19090;
var statearr_19135_19203 = state_19090__$1;
(statearr_19135_19203[(2)] = inst_19077);

(statearr_19135_19203[(1)] = (49));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (35))){
var inst_18994 = (state_19090[(12)]);
var state_19090__$1 = state_19090;
var statearr_19136_19204 = state_19090__$1;
(statearr_19136_19204[(2)] = inst_18994);

(statearr_19136_19204[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19090,(18),Error,null,(17));
var inst_19003 = cljs.core.PersistentVector.EMPTY_NODE;
var state_19090__$1 = (function (){var statearr_19137 = state_19090;
(statearr_19137[(20)] = inst_19003);

return statearr_19137;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_19138_19205 = state_19090__$1;
(statearr_19138_19205[(1)] = (20));

} else {
var statearr_19139_19206 = state_19090__$1;
(statearr_19139_19206[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (11))){
var state_19090__$1 = state_19090;
var statearr_19140_19207 = state_19090__$1;
(statearr_19140_19207[(2)] = true);

(statearr_19140_19207[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (9))){
var state_19090__$1 = state_19090;
var statearr_19141_19208 = state_19090__$1;
(statearr_19141_19208[(2)] = false);

(statearr_19141_19208[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (5))){
var state_19090__$1 = state_19090;
var statearr_19142_19209 = state_19090__$1;
(statearr_19142_19209[(2)] = null);

(statearr_19142_19209[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (14))){
var inst_18968 = (state_19090[(11)]);
var inst_18991 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18968);
var state_19090__$1 = state_19090;
var statearr_19143_19210 = state_19090__$1;
(statearr_19143_19210[(2)] = inst_18991);

(statearr_19143_19210[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (45))){
var inst_19047 = (state_19090[(21)]);
var inst_18995 = (state_19090[(7)]);
var inst_18969 = (state_19090[(8)]);
var inst_18970 = (state_19090[(9)]);
var inst_18967 = (state_19090[(10)]);
var inst_19048 = (state_19090[(22)]);
var inst_18968 = (state_19090[(11)]);
var inst_18994 = (state_19090[(12)]);
var inst_19049 = (state_19090[(19)]);
var inst_19063 = (function (){var map__18973 = inst_18994;
var p = inst_18969;
var _QMARK_error = inst_19049;
var v = inst_18968;
var temp__4655__auto__ = error_handler;
var _ = inst_19048;
var vec__18974 = inst_19047;
var event_msg = inst_18994;
var e = inst_19049;
var vec__18962 = inst_18967;
var temp__4657__auto__ = inst_19049;
var event = inst_18995;
var stop_QMARK_ = inst_18970;
return ((function (map__18973,p,_QMARK_error,v,temp__4655__auto__,_,vec__18974,event_msg,e,vec__18962,temp__4657__auto__,event,stop_QMARK_,inst_19047,inst_18995,inst_18969,inst_18970,inst_18967,inst_19048,inst_18968,inst_18994,inst_19049,state_val_19091,c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(map__18973,p,_QMARK_error,v,temp__4655__auto__,_,vec__18974,event_msg,e,vec__18962,temp__4657__auto__,event,stop_QMARK_,inst_19047,inst_18995,inst_18969,inst_18970,inst_18967,inst_19048,inst_18968,inst_18994,inst_19049,state_val_19091,c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_19064 = (new cljs.core.Delay(inst_19063,null));
var inst_19065 = taoensso.timbre._log_BANG_(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente","/private/var/folders/30/q_r12bds42n64byjlp9y66640000gn/T/form-init2721238680838463030.clj",1187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_19064,null);
var state_19090__$1 = state_19090;
var statearr_19144_19211 = state_19090__$1;
(statearr_19144_19211[(2)] = inst_19065);

(statearr_19144_19211[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (26))){
var inst_19025 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19145_19212 = state_19090__$1;
(statearr_19145_19212[(2)] = inst_19025);

(statearr_19145_19212[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (16))){
var inst_18994 = (state_19090[(12)]);
var inst_18994__$1 = (state_19090[(2)]);
var inst_18995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18994__$1,cljs.core.cst$kw$event);
var state_19090__$1 = (function (){var statearr_19146 = state_19090;
(statearr_19146[(7)] = inst_18995);

(statearr_19146[(12)] = inst_18994__$1);

return statearr_19146;
})();
var statearr_19147_19213 = state_19090__$1;
(statearr_19147_19213[(2)] = null);

(statearr_19147_19213[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (38))){
var state_19090__$1 = state_19090;
var statearr_19148_19214 = state_19090__$1;
(statearr_19148_19214[(2)] = null);

(statearr_19148_19214[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (30))){
var inst_19021 = taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_19090__$1 = state_19090;
var statearr_19149_19215 = state_19090__$1;
(statearr_19149_19215[(2)] = inst_19021);

(statearr_19149_19215[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (10))){
var inst_18989 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
if(cljs.core.truth_(inst_18989)){
var statearr_19150_19216 = state_19090__$1;
(statearr_19150_19216[(1)] = (14));

} else {
var statearr_19151_19217 = state_19090__$1;
(statearr_19151_19217[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (18))){
var inst_18996 = (state_19090[(2)]);
var inst_18997 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18998 = [null,inst_18996];
var inst_18999 = (new cljs.core.PersistentVector(null,2,(5),inst_18997,inst_18998,null));
var state_19090__$1 = state_19090;
var statearr_19152_19218 = state_19090__$1;
(statearr_19152_19218[(2)] = inst_18999);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (42))){
var inst_19052 = (state_19090[(2)]);
var inst_19053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19054 = [null,inst_19052];
var inst_19055 = (new cljs.core.PersistentVector(null,2,(5),inst_19053,inst_19054,null));
var state_19090__$1 = state_19090;
var statearr_19153_19219 = state_19090__$1;
(statearr_19153_19219[(2)] = inst_19055);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (37))){
var inst_19038 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19154_19220 = state_19090__$1;
(statearr_19154_19220[(2)] = inst_19038);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (8))){
var inst_18968 = (state_19090[(11)]);
var inst_18979 = inst_18968.cljs$lang$protocol_mask$partition0$;
var inst_18980 = (inst_18979 & (64));
var inst_18981 = inst_18968.cljs$core$ISeq$;
var inst_18982 = (inst_18980) || (inst_18981);
var state_19090__$1 = state_19090;
if(cljs.core.truth_(inst_18982)){
var statearr_19155_19221 = state_19090__$1;
(statearr_19155_19221[(1)] = (11));

} else {
var statearr_19156_19222 = state_19090__$1;
(statearr_19156_19222[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (49))){
var inst_19080 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19157_19223 = state_19090__$1;
(statearr_19157_19223[(2)] = inst_19080);

(statearr_19157_19223[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__14995__auto__,c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto____0 = (function (){
var statearr_19161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19161[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto__);

(statearr_19161[(1)] = (1));

return statearr_19161;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto____1 = (function (state_19090){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_19090);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e19162){if((e19162 instanceof Object)){
var ex__14999__auto__ = e19162;
var statearr_19163_19224 = state_19090;
(statearr_19163_19224[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090);

return cljs.core.cst$kw$recur;
} else {
throw e19162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__19225 = state_19090;
state_19090 = G__19225;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto__ = function(state_19090){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto____1.call(this,state_19090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__15111__auto__ = (function (){var statearr_19164 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_19164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___19165);

return statearr_19164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___19165,map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__18959,map__18959__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___19233 = arguments.length;
var i__7015__auto___19234 = (0);
while(true){
if((i__7015__auto___19234 < len__7014__auto___19233)){
args__7021__auto__.push((arguments[i__7015__auto___19234]));

var G__19235 = (i__7015__auto___19234 + (1));
i__7015__auto___19234 = G__19235;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((2) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7022__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__19229){
var vec__19230 = p__19229;
var map__19231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19230,(0),null);
var map__19231__$1 = ((((!((map__19231 == null)))?((((map__19231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19231):map__19231);
var opts = map__19231__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq19226){
var G__19227 = cljs.core.first(seq19226);
var seq19226__$1 = cljs.core.next(seq19226);
var G__19228 = cljs.core.first(seq19226__$1);
var seq19226__$2 = cljs.core.next(seq19226__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19227,G__19228,seq19226__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___19243 = arguments.length;
var i__7015__auto___19244 = (0);
while(true){
if((i__7015__auto___19244 < len__7014__auto___19243)){
args__7021__auto__.push((arguments[i__7015__auto___19244]));

var G__19245 = (i__7015__auto___19244 + (1));
i__7015__auto___19244 = G__19245;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((2) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7022__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__19239){
var vec__19240 = p__19239;
var map__19241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19240,(0),null);
var map__19241__$1 = ((((!((map__19241 == null)))?((((map__19241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19241):map__19241);
var opts = map__19241__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19241__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19241__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq19236){
var G__19237 = cljs.core.first(seq19236);
var seq19236__$1 = cljs.core.next(seq19236);
var G__19238 = cljs.core.first(seq19236__$1);
var seq19236__$2 = cljs.core.next(seq19236__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19237,G__19238,seq19236__$2);
});
taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__19248 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__19249 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__19248,G__19249) : event_handler.call(null,G__19248,G__19249));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_(level);
});
/**
 * DEPRECATED: Please use `ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__19250,websocket_QMARK_){
var map__19253 = p__19250;
var map__19253__$1 = ((((!((map__19253 == null)))?((((map__19253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19253):map__19253);
var location = map__19253__$1;
var adjusted_protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,cljs.core.cst$kw$adjusted_DASH_protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,cljs.core.cst$kw$pathname);
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__5945__auto__ = path;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return pathname;
}
})())].join('');
});
