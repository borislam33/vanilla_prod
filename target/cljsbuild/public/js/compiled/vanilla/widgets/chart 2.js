// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('vanilla.widgets.chart');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('dashboard_clj.widgets.core');
goog.require('vanilla.widgets.basic_widget');
vanilla.widgets.chart.render = (function vanilla$widgets$chart$render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null)], null)], null);
});
vanilla.widgets.chart.line_chart_config = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$line,cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$labels,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fontFamily,"monospace",cljs.core.cst$kw$color,"#FFFFFF"], null)], null)], null),cljs.core.cst$kw$yAxis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#000000"], null)], null),cljs.core.cst$kw$labels,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#ffffff"], null)], null),cljs.core.cst$kw$xAxis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$labels,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#fff"], null)], null)], null),cljs.core.cst$kw$credits,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enabled,false], null)], null);
vanilla.widgets.chart.plot_line = (function vanilla$widgets$chart$plot_line(this$){
var config = cljs.core.cst$kw$chart_DASH_options.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
var all_config = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union,cljs.core.array_seq([vanilla.widgets.chart.line_chart_config,config], 0));
console.log([cljs.core.str("plot-line ")].join(''));

return (new Highcharts.Chart(reagent.core.dom_node(this$),cljs.core.clj__GT_js(all_config)));
});
vanilla.widgets.chart.line_chart = (function vanilla$widgets$chart$line_chart(chart_options){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reagent_DASH_render,vanilla.widgets.chart.render,cljs.core.cst$kw$component_DASH_did_DASH_mount,vanilla.widgets.chart.plot_line,cljs.core.cst$kw$component_DASH_did_DASH_update,vanilla.widgets.chart.plot_line], null));
});
vanilla.widgets.chart.embed_line = (function vanilla$widgets$chart$embed_line(data,options){
return (function (data__$1,options__$1){
var dats = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$extract], null))], null));
var num = cljs.core.count(dats);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.chart.line_chart,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$chart_DASH_options,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$chart,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zoomType,"x"], null),cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,""], null),cljs.core.cst$kw$xAxis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz,cljs.core.cst$kw$x_DASH_title], null),"x-axis")], null)], null),cljs.core.cst$kw$yAxis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz,cljs.core.cst$kw$y_DASH_title], null),"y-axis")], null)], null),cljs.core.cst$kw$plotOptions,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lineWidth,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz,cljs.core.cst$kw$line_DASH_width], null),(1))], null),cljs.core.cst$kw$series,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz,cljs.core.cst$kw$animation], null),false)], null),cljs.core.cst$kw$tooltip,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz,cljs.core.cst$kw$tooltip], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.cst$kw$series,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__6725__auto__ = ((function (dats,num){
return (function vanilla$widgets$chart$embed_line_$_iter__19508(s__19509){
return (new cljs.core.LazySeq(null,((function (dats,num){
return (function (){
var s__19509__$1 = s__19509;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19509__$1);
if(temp__4657__auto__){
var s__19509__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19509__$2)){
var c__6723__auto__ = cljs.core.chunk_first(s__19509__$2);
var size__6724__auto__ = cljs.core.count(c__6723__auto__);
var b__19511 = cljs.core.chunk_buffer(size__6724__auto__);
if((function (){var i__19510 = (0);
while(true){
if((i__19510 < size__6724__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6723__auto__,i__19510);
cljs.core.chunk_append(b__19511,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(dats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$name], null),cljs.core.cst$kw$name)], null),[cljs.core.str("set "),cljs.core.str(n)].join('')),cljs.core.cst$kw$data,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$values], null),cljs.core.cst$kw$values)], null)))], null));

var G__19514 = (i__19510 + (1));
i__19510 = G__19514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19511),vanilla$widgets$chart$embed_line_$_iter__19508(cljs.core.chunk_rest(s__19509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19511),null);
}
} else {
var n = cljs.core.first(s__19509__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(dats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$name], null),cljs.core.cst$kw$name)], null),[cljs.core.str("set "),cljs.core.str(n)].join('')),cljs.core.cst$kw$data,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$values], null),cljs.core.cst$kw$values)], null)))], null),vanilla$widgets$chart$embed_line_$_iter__19508(cljs.core.rest(s__19509__$2)));
}
} else {
return null;
}
break;
}
});})(dats,num))
,null,null));
});})(dats,num))
;
return iter__6725__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num));
})())], null)], null)], null);
});
});
dashboard_clj.widgets.core.register_widget(cljs.core.cst$kw$line_DASH_chart,(function (data,options){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.basic_widget.basic_widget,data,options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"95%",cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanilla.widgets.chart.embed_line,data,options], null)], null)], null);
}));
