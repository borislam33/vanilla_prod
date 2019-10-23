// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('dashboard_clj.widgets.core');
goog.require('cljs.core');
goog.require('re_frame.core');
dashboard_clj.widgets.core.widget_store = (function (){var G__12607 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12607) : cljs.core.atom.call(null,G__12607));
})();
dashboard_clj.widgets.core.register_widget = (function dashboard_clj$widgets$core$register_widget(name,w){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dashboard_clj.widgets.core.widget_store,cljs.core.assoc,name,w);
});
dashboard_clj.widgets.core.setup_widget = (function dashboard_clj$widgets$core$setup_widget(p__12608){
var map__12612 = p__12608;
var map__12612__$1 = ((((!((map__12612 == null)))?((((map__12612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12612):map__12612);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$data_DASH_source);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$type);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$options);
if(cljs.core.truth_(data_source)){
var data = (function (){var G__12614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_DASH_db,data_source], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12614) : re_frame.core.subscribe.call(null,G__12614));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dashboard_clj.widgets.core.widget_store) : cljs.core.deref.call(null,dashboard_clj.widgets.core.widget_store)),type),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)),options], null);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dashboard_clj.widgets.core.widget_store) : cljs.core.deref.call(null,dashboard_clj.widgets.core.widget_store)),type).call(null,null,options);
}
});
