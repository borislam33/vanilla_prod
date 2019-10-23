// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('dashboard_clj.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('dashboard_clj.layouts.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (db,_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([db,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_sources,cljs.core.PersistentArrayMap.EMPTY], null)], 0));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_data_DASH_source,(function (app_state,p__19257){
var vec__19258 = p__19257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19258,(0),null);
var data_source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19258,(1),null);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19258,(2),null);
return cljs.core.assoc_in(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_sources,data_source], null),new_val);
}));
dashboard_clj.core.register_global_app_state_subscription = (function dashboard_clj$core$register_global_app_state_subscription(){
var G__19267 = cljs.core.cst$kw$app_DASH_db;
var G__19268 = ((function (G__19267){
return (function (db,p__19269){
var vec__19270 = p__19269;
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19270,(0),null);
var db_path = cljs.core.nthnext(vec__19270,(1));
return reagent.ratom.make_reaction(((function (vec__19270,sid,db_path,G__19267){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_sources,db_path], null)));
});})(vec__19270,sid,db_path,G__19267))
);
});})(G__19267))
;
return (re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__19267,G__19268) : re_frame.core.register_sub.call(null,G__19267,G__19268));
});
dashboard_clj.core.connect_to_data_sources = (function dashboard_clj$core$connect_to_data_sources(){
var map__19371 = (function (){var G__19372 = "/chsk";
var G__19373 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto], null);
return (taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$2(G__19372,G__19373) : taoensso.sente.make_channel_socket_BANG_.call(null,G__19372,G__19373));
})();
var map__19371__$1 = ((((!((map__19371 == null)))?((((map__19371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19371):map__19371);
var chsk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,cljs.core.cst$kw$chsk);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,cljs.core.cst$kw$state);
var c__15109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto__,map__19371,map__19371__$1,chsk,ch_recv,send_fn,state){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto__,map__19371,map__19371__$1,chsk,ch_recv,send_fn,state){
return (function (state_19435){
var state_val_19436 = (state_19435[(1)]);
if((state_val_19436 === (7))){
var inst_19393 = (state_19435[(2)]);
var state_19435__$1 = state_19435;
if(cljs.core.truth_(inst_19393)){
var statearr_19437_19471 = state_19435__$1;
(statearr_19437_19471[(1)] = (11));

} else {
var statearr_19438_19472 = state_19435__$1;
(statearr_19438_19472[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (1))){
var state_19435__$1 = state_19435;
var statearr_19439_19473 = state_19435__$1;
(statearr_19439_19473[(2)] = null);

(statearr_19439_19473[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (4))){
var inst_19378 = (state_19435[(7)]);
var inst_19378__$1 = (state_19435[(2)]);
var inst_19380 = (inst_19378__$1 == null);
var inst_19381 = cljs.core.not(inst_19380);
var state_19435__$1 = (function (){var statearr_19440 = state_19435;
(statearr_19440[(7)] = inst_19378__$1);

return statearr_19440;
})();
if(inst_19381){
var statearr_19441_19474 = state_19435__$1;
(statearr_19441_19474[(1)] = (5));

} else {
var statearr_19442_19475 = state_19435__$1;
(statearr_19442_19475[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (15))){
var state_19435__$1 = state_19435;
var statearr_19443_19476 = state_19435__$1;
(statearr_19443_19476[(2)] = null);

(statearr_19443_19476[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (13))){
var inst_19401 = (state_19435[(8)]);
var inst_19398 = (state_19435[(2)]);
var inst_19399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19398,cljs.core.cst$kw$event);
var inst_19400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19398,cljs.core.cst$kw$id);
var inst_19401__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19398,cljs.core.cst$kw$_QMARK_data);
var inst_19402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19398,cljs.core.cst$kw$send_DASH_fn);
var inst_19403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19401__$1,(0));
var inst_19404 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19403,cljs.core.cst$kw$data_DASH_source_SLASH_event);
var state_19435__$1 = (function (){var statearr_19444 = state_19435;
(statearr_19444[(9)] = inst_19400);

(statearr_19444[(10)] = inst_19402);

(statearr_19444[(8)] = inst_19401__$1);

(statearr_19444[(11)] = inst_19399);

return statearr_19444;
})();
if(inst_19404){
var statearr_19445_19477 = state_19435__$1;
(statearr_19445_19477[(1)] = (14));

} else {
var statearr_19446_19478 = state_19435__$1;
(statearr_19446_19478[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (6))){
var state_19435__$1 = state_19435;
var statearr_19447_19479 = state_19435__$1;
(statearr_19447_19479[(2)] = false);

(statearr_19447_19479[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (17))){
var inst_19402 = (state_19435[(10)]);
var inst_19424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19425 = [cljs.core.cst$kw$dashboard_DASH_clj$core_SLASH_sync];
var inst_19426 = (new cljs.core.PersistentVector(null,1,(5),inst_19424,inst_19425,null));
var inst_19427 = (inst_19402.cljs$core$IFn$_invoke$arity$1 ? inst_19402.cljs$core$IFn$_invoke$arity$1(inst_19426) : inst_19402.call(null,inst_19426));
var state_19435__$1 = state_19435;
var statearr_19448_19480 = state_19435__$1;
(statearr_19448_19480[(2)] = inst_19427);

(statearr_19448_19480[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (3))){
var inst_19433 = (state_19435[(2)]);
var state_19435__$1 = state_19435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19435__$1,inst_19433);
} else {
if((state_val_19436 === (12))){
var inst_19378 = (state_19435[(7)]);
var state_19435__$1 = state_19435;
var statearr_19449_19481 = state_19435__$1;
(statearr_19449_19481[(2)] = inst_19378);

(statearr_19449_19481[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (2))){
var state_19435__$1 = state_19435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19435__$1,(4),ch_recv);
} else {
if((state_val_19436 === (19))){
var inst_19430 = (state_19435[(2)]);
var state_19435__$1 = (function (){var statearr_19450 = state_19435;
(statearr_19450[(12)] = inst_19430);

return statearr_19450;
})();
var statearr_19451_19482 = state_19435__$1;
(statearr_19451_19482[(2)] = null);

(statearr_19451_19482[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (11))){
var inst_19378 = (state_19435[(7)]);
var inst_19395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19378);
var state_19435__$1 = state_19435;
var statearr_19452_19483 = state_19435__$1;
(statearr_19452_19483[(2)] = inst_19395);

(statearr_19452_19483[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (9))){
var state_19435__$1 = state_19435;
var statearr_19453_19484 = state_19435__$1;
(statearr_19453_19484[(2)] = false);

(statearr_19453_19484[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (5))){
var inst_19378 = (state_19435[(7)]);
var inst_19383 = inst_19378.cljs$lang$protocol_mask$partition0$;
var inst_19384 = (inst_19383 & (64));
var inst_19385 = inst_19378.cljs$core$ISeq$;
var inst_19386 = (inst_19384) || (inst_19385);
var state_19435__$1 = state_19435;
if(cljs.core.truth_(inst_19386)){
var statearr_19454_19485 = state_19435__$1;
(statearr_19454_19485[(1)] = (8));

} else {
var statearr_19455_19486 = state_19435__$1;
(statearr_19455_19486[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (14))){
var inst_19401 = (state_19435[(8)]);
var inst_19408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19401,(0),null);
var inst_19409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19401,(1),null);
var inst_19410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19409,(0),null);
var inst_19411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19409,(1),null);
var inst_19412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19413 = [cljs.core.cst$kw$update_DASH_data_DASH_source,inst_19410,inst_19411];
var inst_19414 = (new cljs.core.PersistentVector(null,3,(5),inst_19412,inst_19413,null));
var inst_19415 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_19414) : re_frame.core.dispatch.call(null,inst_19414));
var state_19435__$1 = (function (){var statearr_19456 = state_19435;
(statearr_19456[(13)] = inst_19408);

return statearr_19456;
})();
var statearr_19457_19487 = state_19435__$1;
(statearr_19457_19487[(2)] = inst_19415);

(statearr_19457_19487[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (16))){
var inst_19400 = (state_19435[(9)]);
var inst_19401 = (state_19435[(8)]);
var inst_19418 = (state_19435[(2)]);
var inst_19419 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19400,cljs.core.cst$kw$chsk_SLASH_state);
var inst_19420 = cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_19401);
var inst_19421 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19420,true);
var inst_19422 = (inst_19419) && (inst_19421);
var state_19435__$1 = (function (){var statearr_19458 = state_19435;
(statearr_19458[(14)] = inst_19418);

return statearr_19458;
})();
if(cljs.core.truth_(inst_19422)){
var statearr_19459_19488 = state_19435__$1;
(statearr_19459_19488[(1)] = (17));

} else {
var statearr_19460_19489 = state_19435__$1;
(statearr_19460_19489[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (10))){
var inst_19390 = (state_19435[(2)]);
var state_19435__$1 = state_19435;
var statearr_19461_19490 = state_19435__$1;
(statearr_19461_19490[(2)] = inst_19390);

(statearr_19461_19490[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (18))){
var state_19435__$1 = state_19435;
var statearr_19462_19491 = state_19435__$1;
(statearr_19462_19491[(2)] = null);

(statearr_19462_19491[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19436 === (8))){
var state_19435__$1 = state_19435;
var statearr_19463_19492 = state_19435__$1;
(statearr_19463_19492[(2)] = true);

(statearr_19463_19492[(1)] = (10));


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
});})(c__15109__auto__,map__19371,map__19371__$1,chsk,ch_recv,send_fn,state))
;
return ((function (switch__14995__auto__,c__15109__auto__,map__19371,map__19371__$1,chsk,ch_recv,send_fn,state){
return (function() {
var dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto__ = null;
var dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto____0 = (function (){
var statearr_19467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19467[(0)] = dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto__);

(statearr_19467[(1)] = (1));

return statearr_19467;
});
var dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto____1 = (function (state_19435){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_19435);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e19468){if((e19468 instanceof Object)){
var ex__14999__auto__ = e19468;
var statearr_19469_19493 = state_19435;
(statearr_19469_19493[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19435);

return cljs.core.cst$kw$recur;
} else {
throw e19468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__19494 = state_19435;
state_19435 = G__19494;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto__ = function(state_19435){
switch(arguments.length){
case 0:
return dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto____0.call(this);
case 1:
return dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto____1.call(this,state_19435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto____0;
dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto____1;
return dashboard_clj$core$connect_to_data_sources_$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto__,map__19371,map__19371__$1,chsk,ch_recv,send_fn,state))
})();
var state__15111__auto__ = (function (){var statearr_19470 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_19470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto__);

return statearr_19470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto__,map__19371,map__19371__$1,chsk,ch_recv,send_fn,state))
);

return c__15109__auto__;
});
dashboard_clj.core.start_dashboard = (function dashboard_clj$core$start_dashboard(dashboard,element_id){
var G__19496_19497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19496_19497) : re_frame.core.dispatch_sync.call(null,G__19496_19497));

dashboard_clj.core.register_global_app_state_subscription();

dashboard_clj.core.connect_to_data_sources();

var new_layout = dashboard_clj.layouts.core.setup_layout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dashboard,cljs.core.cst$kw$layout),dashboard);
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new_layout,document.getElementById(element_id));
});
