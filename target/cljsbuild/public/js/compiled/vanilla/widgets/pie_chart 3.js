// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('vanilla.widgets.pie_chart');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('dashboard_clj.widgets.core');
goog.require('vanilla.widgets.basic_widget');
goog.require('vanilla.widgets.util');
vanilla.widgets.pie_chart.render = (function vanilla$widgets$pie_chart$render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null)], null)], null);
});
vanilla.widgets.pie_chart.pie_chart_config = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"pie",cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$labels,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fontFamily,"monospace",cljs.core.cst$kw$color,"#FFFFFF"], null)], null)], null),cljs.core.cst$kw$yAxis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#000000"], null)], null),cljs.core.cst$kw$labels,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#ffffff"], null)], null),cljs.core.cst$kw$xAxis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$labels,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#fff"], null)], null)], null),cljs.core.cst$kw$credits,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enabled,false], null)], null);
vanilla.widgets.pie_chart.plot_pie = (function vanilla$widgets$pie_chart$plot_pie(this$){
var config = cljs.core.cst$kw$chart_DASH_options.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
var all_config = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union,cljs.core.array_seq([vanilla.widgets.pie_chart.pie_chart_config,config], 0));
console.log([cljs.core.str("plot-pie ")].join(''));

return (new Highcharts.Chart(reagent.core.dom_node(this$),cljs.core.clj__GT_js(all_config)));
});
vanilla.widgets.pie_chart.pie_chart = (function vanilla$widgets$pie_chart$pie_chart(chart_options){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reagent_DASH_render,vanilla.widgets.pie_chart.render,cljs.core.cst$kw$component_DASH_did_DASH_mount,vanilla.widgets.pie_chart.plot_pie,cljs.core.cst$kw$component_DASH_did_DASH_update,vanilla.widgets.pie_chart.plot_pie], null));
});
vanilla.widgets.pie_chart.embed_pie = (function vanilla$widgets$pie_chart$embed_pie(data,options){
var dats = vanilla.widgets.util.process_data(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$extract], null))], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$slice_DASH_at], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.pie_chart.pie_chart,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$chart_DASH_options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,""], null),cljs.core.cst$kw$plotOptions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$series,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz,cljs.core.cst$kw$animation], null),false)], null)], null),cljs.core.cst$kw$tooltip,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz,cljs.core.cst$kw$tooltip], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$series,dats], null)], null)], null);
});
dashboard_clj.widgets.core.register_widget(cljs.core.cst$kw$pie_DASH_chart,(function (data,options){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.basic_widget.basic_widget,data,options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.pie_chart.embed_pie,data,options], null)], null)], null);
}));
