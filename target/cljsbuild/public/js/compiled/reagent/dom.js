// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__5945__auto__ = (function (){var and__5933__auto__ = typeof ReactDOM !== 'undefined';
if(and__5933__auto__){
return ReactDOM;
} else {
return and__5933__auto__;
}
})();
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
var and__5933__auto__ = typeof require !== 'undefined';
if(and__5933__auto__){
return require("react-dom");
} else {
return and__5933__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__12184 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12184) : cljs.core.atom.call(null,G__12184));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12187 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_12187){
return (function (){
var _STAR_always_update_STAR_12188 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12188;
}});})(_STAR_always_update_STAR_12187))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12187;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12189 = [];
var len__7014__auto___12192 = arguments.length;
var i__7015__auto___12193 = (0);
while(true){
if((i__7015__auto___12193 < len__7014__auto___12192)){
args12189.push((arguments[i__7015__auto___12193]));

var G__12194 = (i__7015__auto___12193 + (1));
i__7015__auto___12193 = G__12194;
continue;
} else {
}
break;
}

var G__12191 = args12189.length;
switch (G__12191) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12189.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__12200_12204 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__12201_12205 = null;
var count__12202_12206 = (0);
var i__12203_12207 = (0);
while(true){
if((i__12203_12207 < count__12202_12206)){
var v_12208 = chunk__12201_12205.cljs$core$IIndexed$_nth$arity$2(null,i__12203_12207);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12208);

var G__12209 = seq__12200_12204;
var G__12210 = chunk__12201_12205;
var G__12211 = count__12202_12206;
var G__12212 = (i__12203_12207 + (1));
seq__12200_12204 = G__12209;
chunk__12201_12205 = G__12210;
count__12202_12206 = G__12211;
i__12203_12207 = G__12212;
continue;
} else {
var temp__4657__auto___12213 = cljs.core.seq(seq__12200_12204);
if(temp__4657__auto___12213){
var seq__12200_12214__$1 = temp__4657__auto___12213;
if(cljs.core.chunked_seq_QMARK_(seq__12200_12214__$1)){
var c__6756__auto___12215 = cljs.core.chunk_first(seq__12200_12214__$1);
var G__12216 = cljs.core.chunk_rest(seq__12200_12214__$1);
var G__12217 = c__6756__auto___12215;
var G__12218 = cljs.core.count(c__6756__auto___12215);
var G__12219 = (0);
seq__12200_12204 = G__12216;
chunk__12201_12205 = G__12217;
count__12202_12206 = G__12218;
i__12203_12207 = G__12219;
continue;
} else {
var v_12220 = cljs.core.first(seq__12200_12214__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12220);

var G__12221 = cljs.core.next(seq__12200_12214__$1);
var G__12222 = null;
var G__12223 = (0);
var G__12224 = (0);
seq__12200_12204 = G__12221;
chunk__12201_12205 = G__12222;
count__12202_12206 = G__12223;
i__12203_12207 = G__12224;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
