// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('dashboard_clj.layouts.core');
goog.require('cljs.core');
dashboard_clj.layouts.core.layout_store = (function (){var G__13061 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13061) : cljs.core.atom.call(null,G__13061));
})();
dashboard_clj.layouts.core.register_layout = (function dashboard_clj$layouts$core$register_layout(name,l){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dashboard_clj.layouts.core.layout_store,cljs.core.assoc,name,l);
});
dashboard_clj.layouts.core.setup_layout = (function dashboard_clj$layouts$core$setup_layout(name,p__13062){
var map__13065 = p__13062;
var map__13065__$1 = ((((!((map__13065 == null)))?((((map__13065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13065):map__13065);
var widgets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13065__$1,cljs.core.cst$kw$widgets);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13065__$1,cljs.core.cst$kw$options);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dashboard_clj.layouts.core.layout_store) : cljs.core.deref.call(null,dashboard_clj.layouts.core.layout_store)),name),widgets,options], null);
});
