// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('vanilla.widgets.side_by_side_chart');
goog.require('cljs.core');
goog.require('vanilla.widgets.util');
goog.require('vanilla.widgets.bar_chart');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('vanilla.widgets.basic_widget');
goog.require('vanilla.widgets.pie_chart');
goog.require('dashboard_clj.widgets.core');
goog.require('vanilla.widgets.chart');
dashboard_clj.widgets.core.register_widget(cljs.core.cst$kw$side_DASH_by_DASH_side_DASH_chart,(function (data,options){
console.log([cljs.core.str(":side-by-side-chart "),cljs.core.str(data)].join(''));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.basic_widget.basic_widget,data,options,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$marginTop,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_two_DASH_thirds,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"200px"], null)], null),(function (){var dats = vanilla.widgets.util.pie__GT_bar(data,options,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$slice_DASH_at], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.bar_chart.embed_bar,data,options,cljs.core.cst$kw$series.cljs$core$IFn$_invoke$arity$1(dats)], null);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_third,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"200px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.pie_chart.embed_pie,data,options], null)], null)], null)], null);
}));
