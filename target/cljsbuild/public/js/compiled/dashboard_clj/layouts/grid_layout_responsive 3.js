// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('dashboard_clj.layouts.grid_layout_responsive');
goog.require('cljs.core');
goog.require('dashboard_clj.layouts.core');
goog.require('dashboard_clj.widgets.core');
goog.require('reagent.core');
dashboard_clj.layouts.grid_layout_responsive.responsive_grid_layout = ReactGridLayout.Responsive;
dashboard_clj.layouts.grid_layout_responsive.width_provider = ReactGridLayout.WidthProvider;
dashboard_clj.layouts.grid_layout_responsive.responsive_grid_layout_adapter = reagent.core.adapt_react_class((new dashboard_clj.layouts.grid_layout_responsive.width_provider(dashboard_clj.layouts.grid_layout_responsive.responsive_grid_layout)));
dashboard_clj.layouts.grid_layout_responsive.calculate_layout = (function dashboard_clj$layouts$grid_layout_responsive$calculate_layout(widgets){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6725__auto__ = (function dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551(s__19552){
return (new cljs.core.LazySeq(null,(function (){
var s__19552__$1 = s__19552;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19552__$1);
if(temp__4657__auto__){
var s__19552__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19552__$2)){
var c__6723__auto__ = cljs.core.chunk_first(s__19552__$2);
var size__6724__auto__ = cljs.core.count(c__6723__auto__);
var b__19554 = cljs.core.chunk_buffer(size__6724__auto__);
if((function (){var i__19553 = (0);
while(true){
if((i__19553 < size__6724__auto__)){
var brp = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6723__auto__,i__19553);
var brp_pos = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__6725__auto__ = ((function (i__19553,s__19552__$1,brp,c__6723__auto__,size__6724__auto__,b__19554,s__19552__$2,temp__4657__auto__){
return (function dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551_$_iter__19569(s__19570){
return (new cljs.core.LazySeq(null,((function (i__19553,s__19552__$1,brp,c__6723__auto__,size__6724__auto__,b__19554,s__19552__$2,temp__4657__auto__){
return (function (){
var s__19570__$1 = s__19570;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19570__$1);
if(temp__4657__auto____$1){
var s__19570__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19570__$2)){
var c__6723__auto____$1 = cljs.core.chunk_first(s__19570__$2);
var size__6724__auto____$1 = cljs.core.count(c__6723__auto____$1);
var b__19572 = cljs.core.chunk_buffer(size__6724__auto____$1);
if((function (){var i__19571 = (0);
while(true){
if((i__19571 < size__6724__auto____$1)){
var widget = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6723__auto____$1,i__19571);
var pos = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(widget,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$layout_DASH_opts,cljs.core.cst$kw$position,brp], null));
if(!((pos == null))){
cljs.core.chunk_append(b__19572,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pos,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$i,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(widget)], null)], 0)));

var G__19581 = (i__19571 + (1));
i__19571 = G__19581;
continue;
} else {
var G__19582 = (i__19571 + (1));
i__19571 = G__19582;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19572),dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551_$_iter__19569(cljs.core.chunk_rest(s__19570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19572),null);
}
} else {
var widget = cljs.core.first(s__19570__$2);
var pos = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(widget,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$layout_DASH_opts,cljs.core.cst$kw$position,brp], null));
if(!((pos == null))){
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pos,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$i,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(widget)], null)], 0)),dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551_$_iter__19569(cljs.core.rest(s__19570__$2)));
} else {
var G__19583 = cljs.core.rest(s__19570__$2);
s__19570__$1 = G__19583;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__19553,s__19552__$1,brp,c__6723__auto__,size__6724__auto__,b__19554,s__19552__$2,temp__4657__auto__))
,null,null));
});})(i__19553,s__19552__$1,brp,c__6723__auto__,size__6724__auto__,b__19554,s__19552__$2,temp__4657__auto__))
;
return iter__6725__auto__(widgets);
})());
if(cljs.core.truth_(cljs.core.not_empty(brp_pos))){
cljs.core.chunk_append(b__19554,cljs.core.PersistentArrayMap.fromArray([brp,brp_pos], true, false));

var G__19584 = (i__19553 + (1));
i__19553 = G__19584;
continue;
} else {
var G__19585 = (i__19553 + (1));
i__19553 = G__19585;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19554),dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551(cljs.core.chunk_rest(s__19552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19554),null);
}
} else {
var brp = cljs.core.first(s__19552__$2);
var brp_pos = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__6725__auto__ = ((function (s__19552__$1,brp,s__19552__$2,temp__4657__auto__){
return (function dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551_$_iter__19575(s__19576){
return (new cljs.core.LazySeq(null,((function (s__19552__$1,brp,s__19552__$2,temp__4657__auto__){
return (function (){
var s__19576__$1 = s__19576;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19576__$1);
if(temp__4657__auto____$1){
var s__19576__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19576__$2)){
var c__6723__auto__ = cljs.core.chunk_first(s__19576__$2);
var size__6724__auto__ = cljs.core.count(c__6723__auto__);
var b__19578 = cljs.core.chunk_buffer(size__6724__auto__);
if((function (){var i__19577 = (0);
while(true){
if((i__19577 < size__6724__auto__)){
var widget = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6723__auto__,i__19577);
var pos = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(widget,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$layout_DASH_opts,cljs.core.cst$kw$position,brp], null));
if(!((pos == null))){
cljs.core.chunk_append(b__19578,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pos,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$i,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(widget)], null)], 0)));

var G__19586 = (i__19577 + (1));
i__19577 = G__19586;
continue;
} else {
var G__19587 = (i__19577 + (1));
i__19577 = G__19587;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19578),dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551_$_iter__19575(cljs.core.chunk_rest(s__19576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19578),null);
}
} else {
var widget = cljs.core.first(s__19576__$2);
var pos = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(widget,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$layout_DASH_opts,cljs.core.cst$kw$position,brp], null));
if(!((pos == null))){
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pos,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$i,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(widget)], null)], 0)),dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551_$_iter__19575(cljs.core.rest(s__19576__$2)));
} else {
var G__19588 = cljs.core.rest(s__19576__$2);
s__19576__$1 = G__19588;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__19552__$1,brp,s__19552__$2,temp__4657__auto__))
,null,null));
});})(s__19552__$1,brp,s__19552__$2,temp__4657__auto__))
;
return iter__6725__auto__(widgets);
})());
if(cljs.core.truth_(cljs.core.not_empty(brp_pos))){
return cljs.core.cons(cljs.core.PersistentArrayMap.fromArray([brp,brp_pos], true, false),dashboard_clj$layouts$grid_layout_responsive$calculate_layout_$_iter__19551(cljs.core.rest(s__19552__$2)));
} else {
var G__19589 = cljs.core.rest(s__19552__$2);
s__19552__$1 = G__19589;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6725__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lg,cljs.core.cst$kw$md,cljs.core.cst$kw$sm,cljs.core.cst$kw$xs,cljs.core.cst$kw$xxs], null));
})());
});
dashboard_clj.layouts.grid_layout_responsive.default_layout_opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"layout"], null);
dashboard_clj.layouts.grid_layout_responsive.widget_wrapper = (function dashboard_clj$layouts$grid_layout_responsive$widget_wrapper(w){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(w),cljs.core.cst$kw$class,"widget"], null),dashboard_clj.widgets.core.setup_widget(w)], null);
});
dashboard_clj.layouts.core.register_layout(cljs.core.cst$kw$responsive_DASH_grid_DASH_layout,(function (widgets,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dashboard_clj.layouts.grid_layout_responsive.responsive_grid_layout_adapter,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([dashboard_clj.layouts.grid_layout_responsive.default_layout_opts,cljs.core.cst$kw$layout_DASH_opts.cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$layouts,dashboard_clj.layouts.grid_layout_responsive.calculate_layout(widgets)], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__6725__auto__ = (function dashboard_clj$layouts$grid_layout_responsive$iter__19590(s__19591){
return (new cljs.core.LazySeq(null,(function (){
var s__19591__$1 = s__19591;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19591__$1);
if(temp__4657__auto__){
var s__19591__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19591__$2)){
var c__6723__auto__ = cljs.core.chunk_first(s__19591__$2);
var size__6724__auto__ = cljs.core.count(c__6723__auto__);
var b__19593 = cljs.core.chunk_buffer(size__6724__auto__);
if((function (){var i__19592 = (0);
while(true){
if((i__19592 < size__6724__auto__)){
var widget = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6723__auto__,i__19592);
cljs.core.chunk_append(b__19593,dashboard_clj.layouts.grid_layout_responsive.widget_wrapper(widget));

var G__19596 = (i__19592 + (1));
i__19592 = G__19596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19593),dashboard_clj$layouts$grid_layout_responsive$iter__19590(cljs.core.chunk_rest(s__19591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19593),null);
}
} else {
var widget = cljs.core.first(s__19591__$2);
return cljs.core.cons(dashboard_clj.layouts.grid_layout_responsive.widget_wrapper(widget),dashboard_clj$layouts$grid_layout_responsive$iter__19590(cljs.core.rest(s__19591__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6725__auto__(widgets);
})())], null);
}));
