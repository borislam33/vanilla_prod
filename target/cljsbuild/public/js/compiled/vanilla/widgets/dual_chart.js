// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('vanilla.widgets.dual_chart');
goog.require('cljs.core');
goog.require('vanilla.widgets.util');
goog.require('vanilla.widgets.bar_chart');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('vanilla.widgets.basic_widget');
goog.require('dashboard_clj.widgets.core');
goog.require('vanilla.widgets.chart');
dashboard_clj.widgets.core.register_widget(cljs.core.cst$kw$dual_DASH_chart,(function (data,options){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.basic_widget.basic_widget,data,options,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"95%",cljs.core.cst$kw$height,"65%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.chart.embed_line,data,options], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"95%",cljs.core.cst$kw$height,"65%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.bar_chart.embed_bar,data,options,vanilla.widgets.util.line__GT_bar(data,options)], null)], null)], null)], null);
}));
