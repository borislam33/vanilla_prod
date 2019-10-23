// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args15154 = [];
var len__7014__auto___15160 = arguments.length;
var i__7015__auto___15161 = (0);
while(true){
if((i__7015__auto___15161 < len__7014__auto___15160)){
args15154.push((arguments[i__7015__auto___15161]));

var G__15162 = (i__7015__auto___15161 + (1));
i__7015__auto___15161 = G__15162;
continue;
} else {
}
break;
}

var G__15156 = args15154.length;
switch (G__15156) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15154.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15157 = (function (f,blockable,meta15158){
this.f = f;
this.blockable = blockable;
this.meta15158 = meta15158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15159,meta15158__$1){
var self__ = this;
var _15159__$1 = this;
return (new cljs.core.async.t_cljs$core$async15157(self__.f,self__.blockable,meta15158__$1));
});

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15159){
var self__ = this;
var _15159__$1 = this;
return self__.meta15158;
});

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15158], null);
});

cljs.core.async.t_cljs$core$async15157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15157";

cljs.core.async.t_cljs$core$async15157.cljs$lang$ctorPrWriter = (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async15157");
});

cljs.core.async.__GT_t_cljs$core$async15157 = (function cljs$core$async$__GT_t_cljs$core$async15157(f__$1,blockable__$1,meta15158){
return (new cljs.core.async.t_cljs$core$async15157(f__$1,blockable__$1,meta15158));
});

}

return (new cljs.core.async.t_cljs$core$async15157(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args15166 = [];
var len__7014__auto___15169 = arguments.length;
var i__7015__auto___15170 = (0);
while(true){
if((i__7015__auto___15170 < len__7014__auto___15169)){
args15166.push((arguments[i__7015__auto___15170]));

var G__15171 = (i__7015__auto___15170 + (1));
i__7015__auto___15170 = G__15171;
continue;
} else {
}
break;
}

var G__15168 = args15166.length;
switch (G__15168) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15166.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args15173 = [];
var len__7014__auto___15176 = arguments.length;
var i__7015__auto___15177 = (0);
while(true){
if((i__7015__auto___15177 < len__7014__auto___15176)){
args15173.push((arguments[i__7015__auto___15177]));

var G__15178 = (i__7015__auto___15177 + (1));
i__7015__auto___15177 = G__15178;
continue;
} else {
}
break;
}

var G__15175 = args15173.length;
switch (G__15175) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15173.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args15180 = [];
var len__7014__auto___15183 = arguments.length;
var i__7015__auto___15184 = (0);
while(true){
if((i__7015__auto___15184 < len__7014__auto___15183)){
args15180.push((arguments[i__7015__auto___15184]));

var G__15185 = (i__7015__auto___15184 + (1));
i__7015__auto___15184 = G__15185;
continue;
} else {
}
break;
}

var G__15182 = args15180.length;
switch (G__15182) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15180.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15187 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15187) : fn1.call(null,val_15187));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15187,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15187) : fn1.call(null,val_15187));
});})(val_15187,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args15188 = [];
var len__7014__auto___15191 = arguments.length;
var i__7015__auto___15192 = (0);
while(true){
if((i__7015__auto___15192 < len__7014__auto___15191)){
args15188.push((arguments[i__7015__auto___15192]));

var G__15193 = (i__7015__auto___15192 + (1));
i__7015__auto___15192 = G__15193;
continue;
} else {
}
break;
}

var G__15190 = args15188.length;
switch (G__15190) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15188.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6859__auto___15195 = n;
var x_15196 = (0);
while(true){
if((x_15196 < n__6859__auto___15195)){
(a[x_15196] = (0));

var G__15197 = (x_15196 + (1));
x_15196 = G__15197;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15198 = (i + (1));
i = G__15198;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15202 = (function (alt_flag,flag,meta15203){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15203 = meta15203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15204,meta15203__$1){
var self__ = this;
var _15204__$1 = this;
return (new cljs.core.async.t_cljs$core$async15202(self__.alt_flag,self__.flag,meta15203__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15204){
var self__ = this;
var _15204__$1 = this;
return self__.meta15203;
});})(flag))
;

cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15202.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15203], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15202";

cljs.core.async.t_cljs$core$async15202.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async15202");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15202 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15202(alt_flag__$1,flag__$1,meta15203){
return (new cljs.core.async.t_cljs$core$async15202(alt_flag__$1,flag__$1,meta15203));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15202(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15208 = (function (alt_handler,flag,cb,meta15209){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15209 = meta15209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15210,meta15209__$1){
var self__ = this;
var _15210__$1 = this;
return (new cljs.core.async.t_cljs$core$async15208(self__.alt_handler,self__.flag,self__.cb,meta15209__$1));
});

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15210){
var self__ = this;
var _15210__$1 = this;
return self__.meta15209;
});

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15209], null);
});

cljs.core.async.t_cljs$core$async15208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15208";

cljs.core.async.t_cljs$core$async15208.cljs$lang$ctorPrWriter = (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async15208");
});

cljs.core.async.__GT_t_cljs$core$async15208 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15208(alt_handler__$1,flag__$1,cb__$1,meta15209){
return (new cljs.core.async.t_cljs$core$async15208(alt_handler__$1,flag__$1,cb__$1,meta15209));
});

}

return (new cljs.core.async.t_cljs$core$async15208(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15211_SHARP_){
var G__15215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15211_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15215) : fret.call(null,G__15215));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15212_SHARP_){
var G__15216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15212_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15216) : fret.call(null,G__15216));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__5945__auto__ = wport;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15217 = (i + (1));
i = G__15217;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5945__auto__ = ret;
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__5933__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5933__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5933__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___15223 = arguments.length;
var i__7015__auto___15224 = (0);
while(true){
if((i__7015__auto___15224 < len__7014__auto___15223)){
args__7021__auto__.push((arguments[i__7015__auto___15224]));

var G__15225 = (i__7015__auto___15224 + (1));
i__7015__auto___15224 = G__15225;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((1) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7022__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15220){
var map__15221 = p__15220;
var map__15221__$1 = ((((!((map__15221 == null)))?((((map__15221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15221):map__15221);
var opts = map__15221__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15218){
var G__15219 = cljs.core.first(seq15218);
var seq15218__$1 = cljs.core.next(seq15218);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15219,seq15218__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args15226 = [];
var len__7014__auto___15276 = arguments.length;
var i__7015__auto___15277 = (0);
while(true){
if((i__7015__auto___15277 < len__7014__auto___15276)){
args15226.push((arguments[i__7015__auto___15277]));

var G__15278 = (i__7015__auto___15277 + (1));
i__7015__auto___15277 = G__15278;
continue;
} else {
}
break;
}

var G__15228 = args15226.length;
switch (G__15228) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15226.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15109__auto___15280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___15280){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___15280){
return (function (state_15252){
var state_val_15253 = (state_15252[(1)]);
if((state_val_15253 === (7))){
var inst_15248 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
var statearr_15254_15281 = state_15252__$1;
(statearr_15254_15281[(2)] = inst_15248);

(statearr_15254_15281[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (1))){
var state_15252__$1 = state_15252;
var statearr_15255_15282 = state_15252__$1;
(statearr_15255_15282[(2)] = null);

(statearr_15255_15282[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (4))){
var inst_15231 = (state_15252[(7)]);
var inst_15231__$1 = (state_15252[(2)]);
var inst_15232 = (inst_15231__$1 == null);
var state_15252__$1 = (function (){var statearr_15256 = state_15252;
(statearr_15256[(7)] = inst_15231__$1);

return statearr_15256;
})();
if(cljs.core.truth_(inst_15232)){
var statearr_15257_15283 = state_15252__$1;
(statearr_15257_15283[(1)] = (5));

} else {
var statearr_15258_15284 = state_15252__$1;
(statearr_15258_15284[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (13))){
var state_15252__$1 = state_15252;
var statearr_15259_15285 = state_15252__$1;
(statearr_15259_15285[(2)] = null);

(statearr_15259_15285[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (6))){
var inst_15231 = (state_15252[(7)]);
var state_15252__$1 = state_15252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15252__$1,(11),to,inst_15231);
} else {
if((state_val_15253 === (3))){
var inst_15250 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15252__$1,inst_15250);
} else {
if((state_val_15253 === (12))){
var state_15252__$1 = state_15252;
var statearr_15260_15286 = state_15252__$1;
(statearr_15260_15286[(2)] = null);

(statearr_15260_15286[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (2))){
var state_15252__$1 = state_15252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15252__$1,(4),from);
} else {
if((state_val_15253 === (11))){
var inst_15241 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
if(cljs.core.truth_(inst_15241)){
var statearr_15261_15287 = state_15252__$1;
(statearr_15261_15287[(1)] = (12));

} else {
var statearr_15262_15288 = state_15252__$1;
(statearr_15262_15288[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (9))){
var state_15252__$1 = state_15252;
var statearr_15263_15289 = state_15252__$1;
(statearr_15263_15289[(2)] = null);

(statearr_15263_15289[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (5))){
var state_15252__$1 = state_15252;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15264_15290 = state_15252__$1;
(statearr_15264_15290[(1)] = (8));

} else {
var statearr_15265_15291 = state_15252__$1;
(statearr_15265_15291[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (14))){
var inst_15246 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
var statearr_15266_15292 = state_15252__$1;
(statearr_15266_15292[(2)] = inst_15246);

(statearr_15266_15292[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (10))){
var inst_15238 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
var statearr_15267_15293 = state_15252__$1;
(statearr_15267_15293[(2)] = inst_15238);

(statearr_15267_15293[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15253 === (8))){
var inst_15235 = cljs.core.async.close_BANG_(to);
var state_15252__$1 = state_15252;
var statearr_15268_15294 = state_15252__$1;
(statearr_15268_15294[(2)] = inst_15235);

(statearr_15268_15294[(1)] = (10));


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
});})(c__15109__auto___15280))
;
return ((function (switch__14995__auto__,c__15109__auto___15280){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_15272 = [null,null,null,null,null,null,null,null];
(statearr_15272[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_15272[(1)] = (1));

return statearr_15272;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_15252){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15252);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15273){if((e15273 instanceof Object)){
var ex__14999__auto__ = e15273;
var statearr_15274_15295 = state_15252;
(statearr_15274_15295[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15252);

return cljs.core.cst$kw$recur;
} else {
throw e15273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15296 = state_15252;
state_15252 = G__15296;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_15252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_15252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___15280))
})();
var state__15111__auto__ = (function (){var statearr_15275 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___15280);

return statearr_15275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___15280))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15480){
var vec__15481 = p__15480;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15481,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15481,(1),null);
var job = vec__15481;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15109__auto___15663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___15663,res,vec__15481,v,p,job,jobs,results){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___15663,res,vec__15481,v,p,job,jobs,results){
return (function (state_15486){
var state_val_15487 = (state_15486[(1)]);
if((state_val_15487 === (1))){
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15486__$1,(2),res,v);
} else {
if((state_val_15487 === (2))){
var inst_15483 = (state_15486[(2)]);
var inst_15484 = cljs.core.async.close_BANG_(res);
var state_15486__$1 = (function (){var statearr_15488 = state_15486;
(statearr_15488[(7)] = inst_15483);

return statearr_15488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15486__$1,inst_15484);
} else {
return null;
}
}
});})(c__15109__auto___15663,res,vec__15481,v,p,job,jobs,results))
;
return ((function (switch__14995__auto__,c__15109__auto___15663,res,vec__15481,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0 = (function (){
var statearr_15492 = [null,null,null,null,null,null,null,null];
(statearr_15492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__);

(statearr_15492[(1)] = (1));

return statearr_15492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1 = (function (state_15486){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15486);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15493){if((e15493 instanceof Object)){
var ex__14999__auto__ = e15493;
var statearr_15494_15664 = state_15486;
(statearr_15494_15664[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15486);

return cljs.core.cst$kw$recur;
} else {
throw e15493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15665 = state_15486;
state_15486 = G__15665;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = function(state_15486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1.call(this,state_15486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___15663,res,vec__15481,v,p,job,jobs,results))
})();
var state__15111__auto__ = (function (){var statearr_15495 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___15663);

return statearr_15495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___15663,res,vec__15481,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15496){
var vec__15497 = p__15496;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15497,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15497,(1),null);
var job = vec__15497;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__6859__auto___15666 = n;
var __15667 = (0);
while(true){
if((__15667 < n__6859__auto___15666)){
var G__15498_15668 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15498_15668) {
case "compute":
var c__15109__auto___15670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15667,c__15109__auto___15670,G__15498_15668,n__6859__auto___15666,jobs,results,process,async){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (__15667,c__15109__auto___15670,G__15498_15668,n__6859__auto___15666,jobs,results,process,async){
return (function (state_15511){
var state_val_15512 = (state_15511[(1)]);
if((state_val_15512 === (1))){
var state_15511__$1 = state_15511;
var statearr_15513_15671 = state_15511__$1;
(statearr_15513_15671[(2)] = null);

(statearr_15513_15671[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15512 === (2))){
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15511__$1,(4),jobs);
} else {
if((state_val_15512 === (3))){
var inst_15509 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15511__$1,inst_15509);
} else {
if((state_val_15512 === (4))){
var inst_15501 = (state_15511[(2)]);
var inst_15502 = process(inst_15501);
var state_15511__$1 = state_15511;
if(cljs.core.truth_(inst_15502)){
var statearr_15514_15672 = state_15511__$1;
(statearr_15514_15672[(1)] = (5));

} else {
var statearr_15515_15673 = state_15511__$1;
(statearr_15515_15673[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15512 === (5))){
var state_15511__$1 = state_15511;
var statearr_15516_15674 = state_15511__$1;
(statearr_15516_15674[(2)] = null);

(statearr_15516_15674[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15512 === (6))){
var state_15511__$1 = state_15511;
var statearr_15517_15675 = state_15511__$1;
(statearr_15517_15675[(2)] = null);

(statearr_15517_15675[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15512 === (7))){
var inst_15507 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15518_15676 = state_15511__$1;
(statearr_15518_15676[(2)] = inst_15507);

(statearr_15518_15676[(1)] = (3));


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
});})(__15667,c__15109__auto___15670,G__15498_15668,n__6859__auto___15666,jobs,results,process,async))
;
return ((function (__15667,switch__14995__auto__,c__15109__auto___15670,G__15498_15668,n__6859__auto___15666,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0 = (function (){
var statearr_15522 = [null,null,null,null,null,null,null];
(statearr_15522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__);

(statearr_15522[(1)] = (1));

return statearr_15522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1 = (function (state_15511){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15511);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15523){if((e15523 instanceof Object)){
var ex__14999__auto__ = e15523;
var statearr_15524_15677 = state_15511;
(statearr_15524_15677[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15511);

return cljs.core.cst$kw$recur;
} else {
throw e15523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15678 = state_15511;
state_15511 = G__15678;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = function(state_15511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1.call(this,state_15511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__;
})()
;})(__15667,switch__14995__auto__,c__15109__auto___15670,G__15498_15668,n__6859__auto___15666,jobs,results,process,async))
})();
var state__15111__auto__ = (function (){var statearr_15525 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___15670);

return statearr_15525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(__15667,c__15109__auto___15670,G__15498_15668,n__6859__auto___15666,jobs,results,process,async))
);


break;
case "async":
var c__15109__auto___15679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15667,c__15109__auto___15679,G__15498_15668,n__6859__auto___15666,jobs,results,process,async){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (__15667,c__15109__auto___15679,G__15498_15668,n__6859__auto___15666,jobs,results,process,async){
return (function (state_15538){
var state_val_15539 = (state_15538[(1)]);
if((state_val_15539 === (1))){
var state_15538__$1 = state_15538;
var statearr_15540_15680 = state_15538__$1;
(statearr_15540_15680[(2)] = null);

(statearr_15540_15680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15539 === (2))){
var state_15538__$1 = state_15538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15538__$1,(4),jobs);
} else {
if((state_val_15539 === (3))){
var inst_15536 = (state_15538[(2)]);
var state_15538__$1 = state_15538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15538__$1,inst_15536);
} else {
if((state_val_15539 === (4))){
var inst_15528 = (state_15538[(2)]);
var inst_15529 = async(inst_15528);
var state_15538__$1 = state_15538;
if(cljs.core.truth_(inst_15529)){
var statearr_15541_15681 = state_15538__$1;
(statearr_15541_15681[(1)] = (5));

} else {
var statearr_15542_15682 = state_15538__$1;
(statearr_15542_15682[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15539 === (5))){
var state_15538__$1 = state_15538;
var statearr_15543_15683 = state_15538__$1;
(statearr_15543_15683[(2)] = null);

(statearr_15543_15683[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15539 === (6))){
var state_15538__$1 = state_15538;
var statearr_15544_15684 = state_15538__$1;
(statearr_15544_15684[(2)] = null);

(statearr_15544_15684[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15539 === (7))){
var inst_15534 = (state_15538[(2)]);
var state_15538__$1 = state_15538;
var statearr_15545_15685 = state_15538__$1;
(statearr_15545_15685[(2)] = inst_15534);

(statearr_15545_15685[(1)] = (3));


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
});})(__15667,c__15109__auto___15679,G__15498_15668,n__6859__auto___15666,jobs,results,process,async))
;
return ((function (__15667,switch__14995__auto__,c__15109__auto___15679,G__15498_15668,n__6859__auto___15666,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0 = (function (){
var statearr_15549 = [null,null,null,null,null,null,null];
(statearr_15549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__);

(statearr_15549[(1)] = (1));

return statearr_15549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1 = (function (state_15538){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15538);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15550){if((e15550 instanceof Object)){
var ex__14999__auto__ = e15550;
var statearr_15551_15686 = state_15538;
(statearr_15551_15686[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15538);

return cljs.core.cst$kw$recur;
} else {
throw e15550;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15687 = state_15538;
state_15538 = G__15687;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = function(state_15538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1.call(this,state_15538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__;
})()
;})(__15667,switch__14995__auto__,c__15109__auto___15679,G__15498_15668,n__6859__auto___15666,jobs,results,process,async))
})();
var state__15111__auto__ = (function (){var statearr_15552 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___15679);

return statearr_15552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(__15667,c__15109__auto___15679,G__15498_15668,n__6859__auto___15666,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15688 = (__15667 + (1));
__15667 = G__15688;
continue;
} else {
}
break;
}

var c__15109__auto___15689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___15689,jobs,results,process,async){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___15689,jobs,results,process,async){
return (function (state_15574){
var state_val_15575 = (state_15574[(1)]);
if((state_val_15575 === (1))){
var state_15574__$1 = state_15574;
var statearr_15576_15690 = state_15574__$1;
(statearr_15576_15690[(2)] = null);

(statearr_15576_15690[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (2))){
var state_15574__$1 = state_15574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15574__$1,(4),from);
} else {
if((state_val_15575 === (3))){
var inst_15572 = (state_15574[(2)]);
var state_15574__$1 = state_15574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15574__$1,inst_15572);
} else {
if((state_val_15575 === (4))){
var inst_15555 = (state_15574[(7)]);
var inst_15555__$1 = (state_15574[(2)]);
var inst_15556 = (inst_15555__$1 == null);
var state_15574__$1 = (function (){var statearr_15577 = state_15574;
(statearr_15577[(7)] = inst_15555__$1);

return statearr_15577;
})();
if(cljs.core.truth_(inst_15556)){
var statearr_15578_15691 = state_15574__$1;
(statearr_15578_15691[(1)] = (5));

} else {
var statearr_15579_15692 = state_15574__$1;
(statearr_15579_15692[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (5))){
var inst_15558 = cljs.core.async.close_BANG_(jobs);
var state_15574__$1 = state_15574;
var statearr_15580_15693 = state_15574__$1;
(statearr_15580_15693[(2)] = inst_15558);

(statearr_15580_15693[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (6))){
var inst_15560 = (state_15574[(8)]);
var inst_15555 = (state_15574[(7)]);
var inst_15560__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15562 = [inst_15555,inst_15560__$1];
var inst_15563 = (new cljs.core.PersistentVector(null,2,(5),inst_15561,inst_15562,null));
var state_15574__$1 = (function (){var statearr_15581 = state_15574;
(statearr_15581[(8)] = inst_15560__$1);

return statearr_15581;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15574__$1,(8),jobs,inst_15563);
} else {
if((state_val_15575 === (7))){
var inst_15570 = (state_15574[(2)]);
var state_15574__$1 = state_15574;
var statearr_15582_15694 = state_15574__$1;
(statearr_15582_15694[(2)] = inst_15570);

(statearr_15582_15694[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15575 === (8))){
var inst_15560 = (state_15574[(8)]);
var inst_15565 = (state_15574[(2)]);
var state_15574__$1 = (function (){var statearr_15583 = state_15574;
(statearr_15583[(9)] = inst_15565);

return statearr_15583;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15574__$1,(9),results,inst_15560);
} else {
if((state_val_15575 === (9))){
var inst_15567 = (state_15574[(2)]);
var state_15574__$1 = (function (){var statearr_15584 = state_15574;
(statearr_15584[(10)] = inst_15567);

return statearr_15584;
})();
var statearr_15585_15695 = state_15574__$1;
(statearr_15585_15695[(2)] = null);

(statearr_15585_15695[(1)] = (2));


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
});})(c__15109__auto___15689,jobs,results,process,async))
;
return ((function (switch__14995__auto__,c__15109__auto___15689,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0 = (function (){
var statearr_15589 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__);

(statearr_15589[(1)] = (1));

return statearr_15589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1 = (function (state_15574){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15574);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15590){if((e15590 instanceof Object)){
var ex__14999__auto__ = e15590;
var statearr_15591_15696 = state_15574;
(statearr_15591_15696[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15574);

return cljs.core.cst$kw$recur;
} else {
throw e15590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15697 = state_15574;
state_15574 = G__15697;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = function(state_15574){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1.call(this,state_15574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___15689,jobs,results,process,async))
})();
var state__15111__auto__ = (function (){var statearr_15592 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___15689);

return statearr_15592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___15689,jobs,results,process,async))
);


var c__15109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto__,jobs,results,process,async){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto__,jobs,results,process,async){
return (function (state_15630){
var state_val_15631 = (state_15630[(1)]);
if((state_val_15631 === (7))){
var inst_15626 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15632_15698 = state_15630__$1;
(statearr_15632_15698[(2)] = inst_15626);

(statearr_15632_15698[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (20))){
var state_15630__$1 = state_15630;
var statearr_15633_15699 = state_15630__$1;
(statearr_15633_15699[(2)] = null);

(statearr_15633_15699[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (1))){
var state_15630__$1 = state_15630;
var statearr_15634_15700 = state_15630__$1;
(statearr_15634_15700[(2)] = null);

(statearr_15634_15700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (4))){
var inst_15595 = (state_15630[(7)]);
var inst_15595__$1 = (state_15630[(2)]);
var inst_15596 = (inst_15595__$1 == null);
var state_15630__$1 = (function (){var statearr_15635 = state_15630;
(statearr_15635[(7)] = inst_15595__$1);

return statearr_15635;
})();
if(cljs.core.truth_(inst_15596)){
var statearr_15636_15701 = state_15630__$1;
(statearr_15636_15701[(1)] = (5));

} else {
var statearr_15637_15702 = state_15630__$1;
(statearr_15637_15702[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (15))){
var inst_15608 = (state_15630[(8)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15630__$1,(18),to,inst_15608);
} else {
if((state_val_15631 === (21))){
var inst_15621 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15638_15703 = state_15630__$1;
(statearr_15638_15703[(2)] = inst_15621);

(statearr_15638_15703[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (13))){
var inst_15623 = (state_15630[(2)]);
var state_15630__$1 = (function (){var statearr_15639 = state_15630;
(statearr_15639[(9)] = inst_15623);

return statearr_15639;
})();
var statearr_15640_15704 = state_15630__$1;
(statearr_15640_15704[(2)] = null);

(statearr_15640_15704[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (6))){
var inst_15595 = (state_15630[(7)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15630__$1,(11),inst_15595);
} else {
if((state_val_15631 === (17))){
var inst_15616 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
if(cljs.core.truth_(inst_15616)){
var statearr_15641_15705 = state_15630__$1;
(statearr_15641_15705[(1)] = (19));

} else {
var statearr_15642_15706 = state_15630__$1;
(statearr_15642_15706[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (3))){
var inst_15628 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15630__$1,inst_15628);
} else {
if((state_val_15631 === (12))){
var inst_15605 = (state_15630[(10)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15630__$1,(14),inst_15605);
} else {
if((state_val_15631 === (2))){
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15630__$1,(4),results);
} else {
if((state_val_15631 === (19))){
var state_15630__$1 = state_15630;
var statearr_15643_15707 = state_15630__$1;
(statearr_15643_15707[(2)] = null);

(statearr_15643_15707[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (11))){
var inst_15605 = (state_15630[(2)]);
var state_15630__$1 = (function (){var statearr_15644 = state_15630;
(statearr_15644[(10)] = inst_15605);

return statearr_15644;
})();
var statearr_15645_15708 = state_15630__$1;
(statearr_15645_15708[(2)] = null);

(statearr_15645_15708[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (9))){
var state_15630__$1 = state_15630;
var statearr_15646_15709 = state_15630__$1;
(statearr_15646_15709[(2)] = null);

(statearr_15646_15709[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (5))){
var state_15630__$1 = state_15630;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15647_15710 = state_15630__$1;
(statearr_15647_15710[(1)] = (8));

} else {
var statearr_15648_15711 = state_15630__$1;
(statearr_15648_15711[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (14))){
var inst_15610 = (state_15630[(11)]);
var inst_15608 = (state_15630[(8)]);
var inst_15608__$1 = (state_15630[(2)]);
var inst_15609 = (inst_15608__$1 == null);
var inst_15610__$1 = cljs.core.not(inst_15609);
var state_15630__$1 = (function (){var statearr_15649 = state_15630;
(statearr_15649[(11)] = inst_15610__$1);

(statearr_15649[(8)] = inst_15608__$1);

return statearr_15649;
})();
if(inst_15610__$1){
var statearr_15650_15712 = state_15630__$1;
(statearr_15650_15712[(1)] = (15));

} else {
var statearr_15651_15713 = state_15630__$1;
(statearr_15651_15713[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (16))){
var inst_15610 = (state_15630[(11)]);
var state_15630__$1 = state_15630;
var statearr_15652_15714 = state_15630__$1;
(statearr_15652_15714[(2)] = inst_15610);

(statearr_15652_15714[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (10))){
var inst_15602 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15653_15715 = state_15630__$1;
(statearr_15653_15715[(2)] = inst_15602);

(statearr_15653_15715[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (18))){
var inst_15613 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15654_15716 = state_15630__$1;
(statearr_15654_15716[(2)] = inst_15613);

(statearr_15654_15716[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15631 === (8))){
var inst_15599 = cljs.core.async.close_BANG_(to);
var state_15630__$1 = state_15630;
var statearr_15655_15717 = state_15630__$1;
(statearr_15655_15717[(2)] = inst_15599);

(statearr_15655_15717[(1)] = (10));


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
});})(c__15109__auto__,jobs,results,process,async))
;
return ((function (switch__14995__auto__,c__15109__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0 = (function (){
var statearr_15659 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__);

(statearr_15659[(1)] = (1));

return statearr_15659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1 = (function (state_15630){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15630);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15660){if((e15660 instanceof Object)){
var ex__14999__auto__ = e15660;
var statearr_15661_15718 = state_15630;
(statearr_15661_15718[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15630);

return cljs.core.cst$kw$recur;
} else {
throw e15660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15719 = state_15630;
state_15630 = G__15719;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__ = function(state_15630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1.call(this,state_15630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14996__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto__,jobs,results,process,async))
})();
var state__15111__auto__ = (function (){var statearr_15662 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto__);

return statearr_15662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto__,jobs,results,process,async))
);

return c__15109__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15720 = [];
var len__7014__auto___15723 = arguments.length;
var i__7015__auto___15724 = (0);
while(true){
if((i__7015__auto___15724 < len__7014__auto___15723)){
args15720.push((arguments[i__7015__auto___15724]));

var G__15725 = (i__7015__auto___15724 + (1));
i__7015__auto___15724 = G__15725;
continue;
} else {
}
break;
}

var G__15722 = args15720.length;
switch (G__15722) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15720.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15727 = [];
var len__7014__auto___15730 = arguments.length;
var i__7015__auto___15731 = (0);
while(true){
if((i__7015__auto___15731 < len__7014__auto___15730)){
args15727.push((arguments[i__7015__auto___15731]));

var G__15732 = (i__7015__auto___15731 + (1));
i__7015__auto___15731 = G__15732;
continue;
} else {
}
break;
}

var G__15729 = args15727.length;
switch (G__15729) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15727.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15734 = [];
var len__7014__auto___15787 = arguments.length;
var i__7015__auto___15788 = (0);
while(true){
if((i__7015__auto___15788 < len__7014__auto___15787)){
args15734.push((arguments[i__7015__auto___15788]));

var G__15789 = (i__7015__auto___15788 + (1));
i__7015__auto___15788 = G__15789;
continue;
} else {
}
break;
}

var G__15736 = args15734.length;
switch (G__15736) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15734.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15109__auto___15791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___15791,tc,fc){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___15791,tc,fc){
return (function (state_15762){
var state_val_15763 = (state_15762[(1)]);
if((state_val_15763 === (7))){
var inst_15758 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
var statearr_15764_15792 = state_15762__$1;
(statearr_15764_15792[(2)] = inst_15758);

(statearr_15764_15792[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (1))){
var state_15762__$1 = state_15762;
var statearr_15765_15793 = state_15762__$1;
(statearr_15765_15793[(2)] = null);

(statearr_15765_15793[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (4))){
var inst_15739 = (state_15762[(7)]);
var inst_15739__$1 = (state_15762[(2)]);
var inst_15740 = (inst_15739__$1 == null);
var state_15762__$1 = (function (){var statearr_15766 = state_15762;
(statearr_15766[(7)] = inst_15739__$1);

return statearr_15766;
})();
if(cljs.core.truth_(inst_15740)){
var statearr_15767_15794 = state_15762__$1;
(statearr_15767_15794[(1)] = (5));

} else {
var statearr_15768_15795 = state_15762__$1;
(statearr_15768_15795[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (13))){
var state_15762__$1 = state_15762;
var statearr_15769_15796 = state_15762__$1;
(statearr_15769_15796[(2)] = null);

(statearr_15769_15796[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (6))){
var inst_15739 = (state_15762[(7)]);
var inst_15745 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15739) : p.call(null,inst_15739));
var state_15762__$1 = state_15762;
if(cljs.core.truth_(inst_15745)){
var statearr_15770_15797 = state_15762__$1;
(statearr_15770_15797[(1)] = (9));

} else {
var statearr_15771_15798 = state_15762__$1;
(statearr_15771_15798[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (3))){
var inst_15760 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15762__$1,inst_15760);
} else {
if((state_val_15763 === (12))){
var state_15762__$1 = state_15762;
var statearr_15772_15799 = state_15762__$1;
(statearr_15772_15799[(2)] = null);

(statearr_15772_15799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (2))){
var state_15762__$1 = state_15762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15762__$1,(4),ch);
} else {
if((state_val_15763 === (11))){
var inst_15739 = (state_15762[(7)]);
var inst_15749 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15762__$1,(8),inst_15749,inst_15739);
} else {
if((state_val_15763 === (9))){
var state_15762__$1 = state_15762;
var statearr_15773_15800 = state_15762__$1;
(statearr_15773_15800[(2)] = tc);

(statearr_15773_15800[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (5))){
var inst_15742 = cljs.core.async.close_BANG_(tc);
var inst_15743 = cljs.core.async.close_BANG_(fc);
var state_15762__$1 = (function (){var statearr_15774 = state_15762;
(statearr_15774[(8)] = inst_15742);

return statearr_15774;
})();
var statearr_15775_15801 = state_15762__$1;
(statearr_15775_15801[(2)] = inst_15743);

(statearr_15775_15801[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (14))){
var inst_15756 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
var statearr_15776_15802 = state_15762__$1;
(statearr_15776_15802[(2)] = inst_15756);

(statearr_15776_15802[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (10))){
var state_15762__$1 = state_15762;
var statearr_15777_15803 = state_15762__$1;
(statearr_15777_15803[(2)] = fc);

(statearr_15777_15803[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15763 === (8))){
var inst_15751 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
if(cljs.core.truth_(inst_15751)){
var statearr_15778_15804 = state_15762__$1;
(statearr_15778_15804[(1)] = (12));

} else {
var statearr_15779_15805 = state_15762__$1;
(statearr_15779_15805[(1)] = (13));

}

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
});})(c__15109__auto___15791,tc,fc))
;
return ((function (switch__14995__auto__,c__15109__auto___15791,tc,fc){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_15783 = [null,null,null,null,null,null,null,null,null];
(statearr_15783[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_15783[(1)] = (1));

return statearr_15783;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_15762){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15762);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15784){if((e15784 instanceof Object)){
var ex__14999__auto__ = e15784;
var statearr_15785_15806 = state_15762;
(statearr_15785_15806[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15762);

return cljs.core.cst$kw$recur;
} else {
throw e15784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15807 = state_15762;
state_15762 = G__15807;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_15762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_15762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___15791,tc,fc))
})();
var state__15111__auto__ = (function (){var statearr_15786 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___15791);

return statearr_15786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___15791,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto__){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto__){
return (function (state_15871){
var state_val_15872 = (state_15871[(1)]);
if((state_val_15872 === (7))){
var inst_15867 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
var statearr_15873_15894 = state_15871__$1;
(statearr_15873_15894[(2)] = inst_15867);

(statearr_15873_15894[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (1))){
var inst_15851 = init;
var state_15871__$1 = (function (){var statearr_15874 = state_15871;
(statearr_15874[(7)] = inst_15851);

return statearr_15874;
})();
var statearr_15875_15895 = state_15871__$1;
(statearr_15875_15895[(2)] = null);

(statearr_15875_15895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (4))){
var inst_15854 = (state_15871[(8)]);
var inst_15854__$1 = (state_15871[(2)]);
var inst_15855 = (inst_15854__$1 == null);
var state_15871__$1 = (function (){var statearr_15876 = state_15871;
(statearr_15876[(8)] = inst_15854__$1);

return statearr_15876;
})();
if(cljs.core.truth_(inst_15855)){
var statearr_15877_15896 = state_15871__$1;
(statearr_15877_15896[(1)] = (5));

} else {
var statearr_15878_15897 = state_15871__$1;
(statearr_15878_15897[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (6))){
var inst_15858 = (state_15871[(9)]);
var inst_15851 = (state_15871[(7)]);
var inst_15854 = (state_15871[(8)]);
var inst_15858__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15851,inst_15854) : f.call(null,inst_15851,inst_15854));
var inst_15859 = cljs.core.reduced_QMARK_(inst_15858__$1);
var state_15871__$1 = (function (){var statearr_15879 = state_15871;
(statearr_15879[(9)] = inst_15858__$1);

return statearr_15879;
})();
if(inst_15859){
var statearr_15880_15898 = state_15871__$1;
(statearr_15880_15898[(1)] = (8));

} else {
var statearr_15881_15899 = state_15871__$1;
(statearr_15881_15899[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (3))){
var inst_15869 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15871__$1,inst_15869);
} else {
if((state_val_15872 === (2))){
var state_15871__$1 = state_15871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15871__$1,(4),ch);
} else {
if((state_val_15872 === (9))){
var inst_15858 = (state_15871[(9)]);
var inst_15851 = inst_15858;
var state_15871__$1 = (function (){var statearr_15882 = state_15871;
(statearr_15882[(7)] = inst_15851);

return statearr_15882;
})();
var statearr_15883_15900 = state_15871__$1;
(statearr_15883_15900[(2)] = null);

(statearr_15883_15900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (5))){
var inst_15851 = (state_15871[(7)]);
var state_15871__$1 = state_15871;
var statearr_15884_15901 = state_15871__$1;
(statearr_15884_15901[(2)] = inst_15851);

(statearr_15884_15901[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (10))){
var inst_15865 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
var statearr_15885_15902 = state_15871__$1;
(statearr_15885_15902[(2)] = inst_15865);

(statearr_15885_15902[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (8))){
var inst_15858 = (state_15871[(9)]);
var inst_15861 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15858) : cljs.core.deref.call(null,inst_15858));
var state_15871__$1 = state_15871;
var statearr_15886_15903 = state_15871__$1;
(statearr_15886_15903[(2)] = inst_15861);

(statearr_15886_15903[(1)] = (10));


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
});})(c__15109__auto__))
;
return ((function (switch__14995__auto__,c__15109__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14996__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14996__auto____0 = (function (){
var statearr_15890 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15890[(0)] = cljs$core$async$reduce_$_state_machine__14996__auto__);

(statearr_15890[(1)] = (1));

return statearr_15890;
});
var cljs$core$async$reduce_$_state_machine__14996__auto____1 = (function (state_15871){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15871);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15891){if((e15891 instanceof Object)){
var ex__14999__auto__ = e15891;
var statearr_15892_15904 = state_15871;
(statearr_15892_15904[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15871);

return cljs.core.cst$kw$recur;
} else {
throw e15891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15905 = state_15871;
state_15871 = G__15905;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14996__auto__ = function(state_15871){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14996__auto____1.call(this,state_15871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14996__auto____0;
cljs$core$async$reduce_$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14996__auto____1;
return cljs$core$async$reduce_$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto__))
})();
var state__15111__auto__ = (function (){var statearr_15893 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto__);

return statearr_15893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto__))
);

return c__15109__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15906 = [];
var len__7014__auto___15958 = arguments.length;
var i__7015__auto___15959 = (0);
while(true){
if((i__7015__auto___15959 < len__7014__auto___15958)){
args15906.push((arguments[i__7015__auto___15959]));

var G__15960 = (i__7015__auto___15959 + (1));
i__7015__auto___15959 = G__15960;
continue;
} else {
}
break;
}

var G__15908 = args15906.length;
switch (G__15908) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15906.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto__){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto__){
return (function (state_15933){
var state_val_15934 = (state_15933[(1)]);
if((state_val_15934 === (7))){
var inst_15915 = (state_15933[(2)]);
var state_15933__$1 = state_15933;
var statearr_15935_15962 = state_15933__$1;
(statearr_15935_15962[(2)] = inst_15915);

(statearr_15935_15962[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (1))){
var inst_15909 = cljs.core.seq(coll);
var inst_15910 = inst_15909;
var state_15933__$1 = (function (){var statearr_15936 = state_15933;
(statearr_15936[(7)] = inst_15910);

return statearr_15936;
})();
var statearr_15937_15963 = state_15933__$1;
(statearr_15937_15963[(2)] = null);

(statearr_15937_15963[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (4))){
var inst_15910 = (state_15933[(7)]);
var inst_15913 = cljs.core.first(inst_15910);
var state_15933__$1 = state_15933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15933__$1,(7),ch,inst_15913);
} else {
if((state_val_15934 === (13))){
var inst_15927 = (state_15933[(2)]);
var state_15933__$1 = state_15933;
var statearr_15938_15964 = state_15933__$1;
(statearr_15938_15964[(2)] = inst_15927);

(statearr_15938_15964[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (6))){
var inst_15918 = (state_15933[(2)]);
var state_15933__$1 = state_15933;
if(cljs.core.truth_(inst_15918)){
var statearr_15939_15965 = state_15933__$1;
(statearr_15939_15965[(1)] = (8));

} else {
var statearr_15940_15966 = state_15933__$1;
(statearr_15940_15966[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (3))){
var inst_15931 = (state_15933[(2)]);
var state_15933__$1 = state_15933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15933__$1,inst_15931);
} else {
if((state_val_15934 === (12))){
var state_15933__$1 = state_15933;
var statearr_15941_15967 = state_15933__$1;
(statearr_15941_15967[(2)] = null);

(statearr_15941_15967[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (2))){
var inst_15910 = (state_15933[(7)]);
var state_15933__$1 = state_15933;
if(cljs.core.truth_(inst_15910)){
var statearr_15942_15968 = state_15933__$1;
(statearr_15942_15968[(1)] = (4));

} else {
var statearr_15943_15969 = state_15933__$1;
(statearr_15943_15969[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (11))){
var inst_15924 = cljs.core.async.close_BANG_(ch);
var state_15933__$1 = state_15933;
var statearr_15944_15970 = state_15933__$1;
(statearr_15944_15970[(2)] = inst_15924);

(statearr_15944_15970[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (9))){
var state_15933__$1 = state_15933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15945_15971 = state_15933__$1;
(statearr_15945_15971[(1)] = (11));

} else {
var statearr_15946_15972 = state_15933__$1;
(statearr_15946_15972[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (5))){
var inst_15910 = (state_15933[(7)]);
var state_15933__$1 = state_15933;
var statearr_15947_15973 = state_15933__$1;
(statearr_15947_15973[(2)] = inst_15910);

(statearr_15947_15973[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (10))){
var inst_15929 = (state_15933[(2)]);
var state_15933__$1 = state_15933;
var statearr_15948_15974 = state_15933__$1;
(statearr_15948_15974[(2)] = inst_15929);

(statearr_15948_15974[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15934 === (8))){
var inst_15910 = (state_15933[(7)]);
var inst_15920 = cljs.core.next(inst_15910);
var inst_15910__$1 = inst_15920;
var state_15933__$1 = (function (){var statearr_15949 = state_15933;
(statearr_15949[(7)] = inst_15910__$1);

return statearr_15949;
})();
var statearr_15950_15975 = state_15933__$1;
(statearr_15950_15975[(2)] = null);

(statearr_15950_15975[(1)] = (2));


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
});})(c__15109__auto__))
;
return ((function (switch__14995__auto__,c__15109__auto__){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_15954 = [null,null,null,null,null,null,null,null];
(statearr_15954[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_15954[(1)] = (1));

return statearr_15954;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_15933){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_15933);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e15955){if((e15955 instanceof Object)){
var ex__14999__auto__ = e15955;
var statearr_15956_15976 = state_15933;
(statearr_15956_15976[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15933);

return cljs.core.cst$kw$recur;
} else {
throw e15955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__15977 = state_15933;
state_15933 = G__15977;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_15933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_15933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto__))
})();
var state__15111__auto__ = (function (){var statearr_15957 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_15957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto__);

return statearr_15957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto__))
);

return c__15109__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6608__auto__ = (((_ == null))?null:_);
var m__6609__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6609__auto__.call(null,_));
} else {
var m__6609__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6609__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6608__auto__ = (((m == null))?null:m);
var m__6609__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6609__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6609__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6609__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6608__auto__ = (((m == null))?null:m);
var m__6609__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6609__auto__.call(null,m,ch));
} else {
var m__6609__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6609__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6608__auto__ = (((m == null))?null:m);
var m__6609__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6609__auto__.call(null,m));
} else {
var m__6609__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6609__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__16202 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16202) : cljs.core.atom.call(null,G__16202));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16203 = (function (mult,ch,cs,meta16204){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16204 = meta16204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16205,meta16204__$1){
var self__ = this;
var _16205__$1 = this;
return (new cljs.core.async.t_cljs$core$async16203(self__.mult,self__.ch,self__.cs,meta16204__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16205){
var self__ = this;
var _16205__$1 = this;
return self__.meta16204;
});})(cs))
;

cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16206_16426 = self__.cs;
var G__16207_16427 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16206_16426,G__16207_16427) : cljs.core.reset_BANG_.call(null,G__16206_16426,G__16207_16427));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16203.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16204], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16203";

cljs.core.async.t_cljs$core$async16203.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async16203");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16203 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16203(mult__$1,ch__$1,cs__$1,meta16204){
return (new cljs.core.async.t_cljs$core$async16203(mult__$1,ch__$1,cs__$1,meta16204));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16203(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15109__auto___16428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___16428,cs,m,dchan,dctr,done){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___16428,cs,m,dchan,dctr,done){
return (function (state_16338){
var state_val_16339 = (state_16338[(1)]);
if((state_val_16339 === (7))){
var inst_16334 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16340_16429 = state_16338__$1;
(statearr_16340_16429[(2)] = inst_16334);

(statearr_16340_16429[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (20))){
var inst_16239 = (state_16338[(7)]);
var inst_16249 = cljs.core.first(inst_16239);
var inst_16250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16249,(0),null);
var inst_16251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16249,(1),null);
var state_16338__$1 = (function (){var statearr_16341 = state_16338;
(statearr_16341[(8)] = inst_16250);

return statearr_16341;
})();
if(cljs.core.truth_(inst_16251)){
var statearr_16342_16430 = state_16338__$1;
(statearr_16342_16430[(1)] = (22));

} else {
var statearr_16343_16431 = state_16338__$1;
(statearr_16343_16431[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (27))){
var inst_16286 = (state_16338[(9)]);
var inst_16279 = (state_16338[(10)]);
var inst_16281 = (state_16338[(11)]);
var inst_16210 = (state_16338[(12)]);
var inst_16286__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16279,inst_16281);
var inst_16287 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16286__$1,inst_16210,done);
var state_16338__$1 = (function (){var statearr_16344 = state_16338;
(statearr_16344[(9)] = inst_16286__$1);

return statearr_16344;
})();
if(cljs.core.truth_(inst_16287)){
var statearr_16345_16432 = state_16338__$1;
(statearr_16345_16432[(1)] = (30));

} else {
var statearr_16346_16433 = state_16338__$1;
(statearr_16346_16433[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (1))){
var state_16338__$1 = state_16338;
var statearr_16347_16434 = state_16338__$1;
(statearr_16347_16434[(2)] = null);

(statearr_16347_16434[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (24))){
var inst_16239 = (state_16338[(7)]);
var inst_16256 = (state_16338[(2)]);
var inst_16257 = cljs.core.next(inst_16239);
var inst_16219 = inst_16257;
var inst_16220 = null;
var inst_16221 = (0);
var inst_16222 = (0);
var state_16338__$1 = (function (){var statearr_16348 = state_16338;
(statearr_16348[(13)] = inst_16219);

(statearr_16348[(14)] = inst_16221);

(statearr_16348[(15)] = inst_16220);

(statearr_16348[(16)] = inst_16222);

(statearr_16348[(17)] = inst_16256);

return statearr_16348;
})();
var statearr_16349_16435 = state_16338__$1;
(statearr_16349_16435[(2)] = null);

(statearr_16349_16435[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (39))){
var state_16338__$1 = state_16338;
var statearr_16353_16436 = state_16338__$1;
(statearr_16353_16436[(2)] = null);

(statearr_16353_16436[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (4))){
var inst_16210 = (state_16338[(12)]);
var inst_16210__$1 = (state_16338[(2)]);
var inst_16211 = (inst_16210__$1 == null);
var state_16338__$1 = (function (){var statearr_16354 = state_16338;
(statearr_16354[(12)] = inst_16210__$1);

return statearr_16354;
})();
if(cljs.core.truth_(inst_16211)){
var statearr_16355_16437 = state_16338__$1;
(statearr_16355_16437[(1)] = (5));

} else {
var statearr_16356_16438 = state_16338__$1;
(statearr_16356_16438[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (15))){
var inst_16219 = (state_16338[(13)]);
var inst_16221 = (state_16338[(14)]);
var inst_16220 = (state_16338[(15)]);
var inst_16222 = (state_16338[(16)]);
var inst_16235 = (state_16338[(2)]);
var inst_16236 = (inst_16222 + (1));
var tmp16350 = inst_16219;
var tmp16351 = inst_16221;
var tmp16352 = inst_16220;
var inst_16219__$1 = tmp16350;
var inst_16220__$1 = tmp16352;
var inst_16221__$1 = tmp16351;
var inst_16222__$1 = inst_16236;
var state_16338__$1 = (function (){var statearr_16357 = state_16338;
(statearr_16357[(13)] = inst_16219__$1);

(statearr_16357[(14)] = inst_16221__$1);

(statearr_16357[(15)] = inst_16220__$1);

(statearr_16357[(16)] = inst_16222__$1);

(statearr_16357[(18)] = inst_16235);

return statearr_16357;
})();
var statearr_16358_16439 = state_16338__$1;
(statearr_16358_16439[(2)] = null);

(statearr_16358_16439[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (21))){
var inst_16260 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16362_16440 = state_16338__$1;
(statearr_16362_16440[(2)] = inst_16260);

(statearr_16362_16440[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (31))){
var inst_16286 = (state_16338[(9)]);
var inst_16290 = done(null);
var inst_16291 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16286);
var state_16338__$1 = (function (){var statearr_16363 = state_16338;
(statearr_16363[(19)] = inst_16290);

return statearr_16363;
})();
var statearr_16364_16441 = state_16338__$1;
(statearr_16364_16441[(2)] = inst_16291);

(statearr_16364_16441[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (32))){
var inst_16279 = (state_16338[(10)]);
var inst_16281 = (state_16338[(11)]);
var inst_16280 = (state_16338[(20)]);
var inst_16278 = (state_16338[(21)]);
var inst_16293 = (state_16338[(2)]);
var inst_16294 = (inst_16281 + (1));
var tmp16359 = inst_16279;
var tmp16360 = inst_16280;
var tmp16361 = inst_16278;
var inst_16278__$1 = tmp16361;
var inst_16279__$1 = tmp16359;
var inst_16280__$1 = tmp16360;
var inst_16281__$1 = inst_16294;
var state_16338__$1 = (function (){var statearr_16365 = state_16338;
(statearr_16365[(10)] = inst_16279__$1);

(statearr_16365[(11)] = inst_16281__$1);

(statearr_16365[(20)] = inst_16280__$1);

(statearr_16365[(22)] = inst_16293);

(statearr_16365[(21)] = inst_16278__$1);

return statearr_16365;
})();
var statearr_16366_16442 = state_16338__$1;
(statearr_16366_16442[(2)] = null);

(statearr_16366_16442[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (40))){
var inst_16306 = (state_16338[(23)]);
var inst_16310 = done(null);
var inst_16311 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16306);
var state_16338__$1 = (function (){var statearr_16367 = state_16338;
(statearr_16367[(24)] = inst_16310);

return statearr_16367;
})();
var statearr_16368_16443 = state_16338__$1;
(statearr_16368_16443[(2)] = inst_16311);

(statearr_16368_16443[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (33))){
var inst_16297 = (state_16338[(25)]);
var inst_16299 = cljs.core.chunked_seq_QMARK_(inst_16297);
var state_16338__$1 = state_16338;
if(inst_16299){
var statearr_16369_16444 = state_16338__$1;
(statearr_16369_16444[(1)] = (36));

} else {
var statearr_16370_16445 = state_16338__$1;
(statearr_16370_16445[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (13))){
var inst_16229 = (state_16338[(26)]);
var inst_16232 = cljs.core.async.close_BANG_(inst_16229);
var state_16338__$1 = state_16338;
var statearr_16371_16446 = state_16338__$1;
(statearr_16371_16446[(2)] = inst_16232);

(statearr_16371_16446[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (22))){
var inst_16250 = (state_16338[(8)]);
var inst_16253 = cljs.core.async.close_BANG_(inst_16250);
var state_16338__$1 = state_16338;
var statearr_16372_16447 = state_16338__$1;
(statearr_16372_16447[(2)] = inst_16253);

(statearr_16372_16447[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (36))){
var inst_16297 = (state_16338[(25)]);
var inst_16301 = cljs.core.chunk_first(inst_16297);
var inst_16302 = cljs.core.chunk_rest(inst_16297);
var inst_16303 = cljs.core.count(inst_16301);
var inst_16278 = inst_16302;
var inst_16279 = inst_16301;
var inst_16280 = inst_16303;
var inst_16281 = (0);
var state_16338__$1 = (function (){var statearr_16373 = state_16338;
(statearr_16373[(10)] = inst_16279);

(statearr_16373[(11)] = inst_16281);

(statearr_16373[(20)] = inst_16280);

(statearr_16373[(21)] = inst_16278);

return statearr_16373;
})();
var statearr_16374_16448 = state_16338__$1;
(statearr_16374_16448[(2)] = null);

(statearr_16374_16448[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (41))){
var inst_16297 = (state_16338[(25)]);
var inst_16313 = (state_16338[(2)]);
var inst_16314 = cljs.core.next(inst_16297);
var inst_16278 = inst_16314;
var inst_16279 = null;
var inst_16280 = (0);
var inst_16281 = (0);
var state_16338__$1 = (function (){var statearr_16375 = state_16338;
(statearr_16375[(10)] = inst_16279);

(statearr_16375[(11)] = inst_16281);

(statearr_16375[(20)] = inst_16280);

(statearr_16375[(27)] = inst_16313);

(statearr_16375[(21)] = inst_16278);

return statearr_16375;
})();
var statearr_16376_16449 = state_16338__$1;
(statearr_16376_16449[(2)] = null);

(statearr_16376_16449[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (43))){
var state_16338__$1 = state_16338;
var statearr_16377_16450 = state_16338__$1;
(statearr_16377_16450[(2)] = null);

(statearr_16377_16450[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (29))){
var inst_16322 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16378_16451 = state_16338__$1;
(statearr_16378_16451[(2)] = inst_16322);

(statearr_16378_16451[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (44))){
var inst_16331 = (state_16338[(2)]);
var state_16338__$1 = (function (){var statearr_16379 = state_16338;
(statearr_16379[(28)] = inst_16331);

return statearr_16379;
})();
var statearr_16380_16452 = state_16338__$1;
(statearr_16380_16452[(2)] = null);

(statearr_16380_16452[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (6))){
var inst_16270 = (state_16338[(29)]);
var inst_16269 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16270__$1 = cljs.core.keys(inst_16269);
var inst_16271 = cljs.core.count(inst_16270__$1);
var inst_16272 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16271) : cljs.core.reset_BANG_.call(null,dctr,inst_16271));
var inst_16277 = cljs.core.seq(inst_16270__$1);
var inst_16278 = inst_16277;
var inst_16279 = null;
var inst_16280 = (0);
var inst_16281 = (0);
var state_16338__$1 = (function (){var statearr_16381 = state_16338;
(statearr_16381[(30)] = inst_16272);

(statearr_16381[(10)] = inst_16279);

(statearr_16381[(11)] = inst_16281);

(statearr_16381[(20)] = inst_16280);

(statearr_16381[(29)] = inst_16270__$1);

(statearr_16381[(21)] = inst_16278);

return statearr_16381;
})();
var statearr_16382_16453 = state_16338__$1;
(statearr_16382_16453[(2)] = null);

(statearr_16382_16453[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (28))){
var inst_16297 = (state_16338[(25)]);
var inst_16278 = (state_16338[(21)]);
var inst_16297__$1 = cljs.core.seq(inst_16278);
var state_16338__$1 = (function (){var statearr_16383 = state_16338;
(statearr_16383[(25)] = inst_16297__$1);

return statearr_16383;
})();
if(inst_16297__$1){
var statearr_16384_16454 = state_16338__$1;
(statearr_16384_16454[(1)] = (33));

} else {
var statearr_16385_16455 = state_16338__$1;
(statearr_16385_16455[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (25))){
var inst_16281 = (state_16338[(11)]);
var inst_16280 = (state_16338[(20)]);
var inst_16283 = (inst_16281 < inst_16280);
var inst_16284 = inst_16283;
var state_16338__$1 = state_16338;
if(cljs.core.truth_(inst_16284)){
var statearr_16386_16456 = state_16338__$1;
(statearr_16386_16456[(1)] = (27));

} else {
var statearr_16387_16457 = state_16338__$1;
(statearr_16387_16457[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (34))){
var state_16338__$1 = state_16338;
var statearr_16388_16458 = state_16338__$1;
(statearr_16388_16458[(2)] = null);

(statearr_16388_16458[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (17))){
var state_16338__$1 = state_16338;
var statearr_16389_16459 = state_16338__$1;
(statearr_16389_16459[(2)] = null);

(statearr_16389_16459[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (3))){
var inst_16336 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16338__$1,inst_16336);
} else {
if((state_val_16339 === (12))){
var inst_16265 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16390_16460 = state_16338__$1;
(statearr_16390_16460[(2)] = inst_16265);

(statearr_16390_16460[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (2))){
var state_16338__$1 = state_16338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16338__$1,(4),ch);
} else {
if((state_val_16339 === (23))){
var state_16338__$1 = state_16338;
var statearr_16391_16461 = state_16338__$1;
(statearr_16391_16461[(2)] = null);

(statearr_16391_16461[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (35))){
var inst_16320 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16392_16462 = state_16338__$1;
(statearr_16392_16462[(2)] = inst_16320);

(statearr_16392_16462[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (19))){
var inst_16239 = (state_16338[(7)]);
var inst_16243 = cljs.core.chunk_first(inst_16239);
var inst_16244 = cljs.core.chunk_rest(inst_16239);
var inst_16245 = cljs.core.count(inst_16243);
var inst_16219 = inst_16244;
var inst_16220 = inst_16243;
var inst_16221 = inst_16245;
var inst_16222 = (0);
var state_16338__$1 = (function (){var statearr_16393 = state_16338;
(statearr_16393[(13)] = inst_16219);

(statearr_16393[(14)] = inst_16221);

(statearr_16393[(15)] = inst_16220);

(statearr_16393[(16)] = inst_16222);

return statearr_16393;
})();
var statearr_16394_16463 = state_16338__$1;
(statearr_16394_16463[(2)] = null);

(statearr_16394_16463[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (11))){
var inst_16219 = (state_16338[(13)]);
var inst_16239 = (state_16338[(7)]);
var inst_16239__$1 = cljs.core.seq(inst_16219);
var state_16338__$1 = (function (){var statearr_16395 = state_16338;
(statearr_16395[(7)] = inst_16239__$1);

return statearr_16395;
})();
if(inst_16239__$1){
var statearr_16396_16464 = state_16338__$1;
(statearr_16396_16464[(1)] = (16));

} else {
var statearr_16397_16465 = state_16338__$1;
(statearr_16397_16465[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (9))){
var inst_16267 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16398_16466 = state_16338__$1;
(statearr_16398_16466[(2)] = inst_16267);

(statearr_16398_16466[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (5))){
var inst_16217 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16218 = cljs.core.seq(inst_16217);
var inst_16219 = inst_16218;
var inst_16220 = null;
var inst_16221 = (0);
var inst_16222 = (0);
var state_16338__$1 = (function (){var statearr_16399 = state_16338;
(statearr_16399[(13)] = inst_16219);

(statearr_16399[(14)] = inst_16221);

(statearr_16399[(15)] = inst_16220);

(statearr_16399[(16)] = inst_16222);

return statearr_16399;
})();
var statearr_16400_16467 = state_16338__$1;
(statearr_16400_16467[(2)] = null);

(statearr_16400_16467[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (14))){
var state_16338__$1 = state_16338;
var statearr_16401_16468 = state_16338__$1;
(statearr_16401_16468[(2)] = null);

(statearr_16401_16468[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (45))){
var inst_16328 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16402_16469 = state_16338__$1;
(statearr_16402_16469[(2)] = inst_16328);

(statearr_16402_16469[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (26))){
var inst_16270 = (state_16338[(29)]);
var inst_16324 = (state_16338[(2)]);
var inst_16325 = cljs.core.seq(inst_16270);
var state_16338__$1 = (function (){var statearr_16403 = state_16338;
(statearr_16403[(31)] = inst_16324);

return statearr_16403;
})();
if(inst_16325){
var statearr_16404_16470 = state_16338__$1;
(statearr_16404_16470[(1)] = (42));

} else {
var statearr_16405_16471 = state_16338__$1;
(statearr_16405_16471[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (16))){
var inst_16239 = (state_16338[(7)]);
var inst_16241 = cljs.core.chunked_seq_QMARK_(inst_16239);
var state_16338__$1 = state_16338;
if(inst_16241){
var statearr_16406_16472 = state_16338__$1;
(statearr_16406_16472[(1)] = (19));

} else {
var statearr_16407_16473 = state_16338__$1;
(statearr_16407_16473[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (38))){
var inst_16317 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16408_16474 = state_16338__$1;
(statearr_16408_16474[(2)] = inst_16317);

(statearr_16408_16474[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (30))){
var state_16338__$1 = state_16338;
var statearr_16409_16475 = state_16338__$1;
(statearr_16409_16475[(2)] = null);

(statearr_16409_16475[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (10))){
var inst_16220 = (state_16338[(15)]);
var inst_16222 = (state_16338[(16)]);
var inst_16228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16220,inst_16222);
var inst_16229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16228,(0),null);
var inst_16230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16228,(1),null);
var state_16338__$1 = (function (){var statearr_16410 = state_16338;
(statearr_16410[(26)] = inst_16229);

return statearr_16410;
})();
if(cljs.core.truth_(inst_16230)){
var statearr_16411_16476 = state_16338__$1;
(statearr_16411_16476[(1)] = (13));

} else {
var statearr_16412_16477 = state_16338__$1;
(statearr_16412_16477[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (18))){
var inst_16263 = (state_16338[(2)]);
var state_16338__$1 = state_16338;
var statearr_16413_16478 = state_16338__$1;
(statearr_16413_16478[(2)] = inst_16263);

(statearr_16413_16478[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (42))){
var state_16338__$1 = state_16338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16338__$1,(45),dchan);
} else {
if((state_val_16339 === (37))){
var inst_16297 = (state_16338[(25)]);
var inst_16306 = (state_16338[(23)]);
var inst_16210 = (state_16338[(12)]);
var inst_16306__$1 = cljs.core.first(inst_16297);
var inst_16307 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16306__$1,inst_16210,done);
var state_16338__$1 = (function (){var statearr_16414 = state_16338;
(statearr_16414[(23)] = inst_16306__$1);

return statearr_16414;
})();
if(cljs.core.truth_(inst_16307)){
var statearr_16415_16479 = state_16338__$1;
(statearr_16415_16479[(1)] = (39));

} else {
var statearr_16416_16480 = state_16338__$1;
(statearr_16416_16480[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16339 === (8))){
var inst_16221 = (state_16338[(14)]);
var inst_16222 = (state_16338[(16)]);
var inst_16224 = (inst_16222 < inst_16221);
var inst_16225 = inst_16224;
var state_16338__$1 = state_16338;
if(cljs.core.truth_(inst_16225)){
var statearr_16417_16481 = state_16338__$1;
(statearr_16417_16481[(1)] = (10));

} else {
var statearr_16418_16482 = state_16338__$1;
(statearr_16418_16482[(1)] = (11));

}

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
});})(c__15109__auto___16428,cs,m,dchan,dctr,done))
;
return ((function (switch__14995__auto__,c__15109__auto___16428,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14996__auto__ = null;
var cljs$core$async$mult_$_state_machine__14996__auto____0 = (function (){
var statearr_16422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16422[(0)] = cljs$core$async$mult_$_state_machine__14996__auto__);

(statearr_16422[(1)] = (1));

return statearr_16422;
});
var cljs$core$async$mult_$_state_machine__14996__auto____1 = (function (state_16338){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_16338);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e16423){if((e16423 instanceof Object)){
var ex__14999__auto__ = e16423;
var statearr_16424_16483 = state_16338;
(statearr_16424_16483[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16338);

return cljs.core.cst$kw$recur;
} else {
throw e16423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__16484 = state_16338;
state_16338 = G__16484;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14996__auto__ = function(state_16338){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14996__auto____1.call(this,state_16338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14996__auto____0;
cljs$core$async$mult_$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14996__auto____1;
return cljs$core$async$mult_$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___16428,cs,m,dchan,dctr,done))
})();
var state__15111__auto__ = (function (){var statearr_16425 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_16425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___16428);

return statearr_16425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___16428,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16485 = [];
var len__7014__auto___16488 = arguments.length;
var i__7015__auto___16489 = (0);
while(true){
if((i__7015__auto___16489 < len__7014__auto___16488)){
args16485.push((arguments[i__7015__auto___16489]));

var G__16490 = (i__7015__auto___16489 + (1));
i__7015__auto___16489 = G__16490;
continue;
} else {
}
break;
}

var G__16487 = args16485.length;
switch (G__16487) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16485.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6608__auto__ = (((m == null))?null:m);
var m__6609__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6609__auto__.call(null,m,ch));
} else {
var m__6609__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6609__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6608__auto__ = (((m == null))?null:m);
var m__6609__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6609__auto__.call(null,m,ch));
} else {
var m__6609__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6609__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6608__auto__ = (((m == null))?null:m);
var m__6609__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6609__auto__.call(null,m));
} else {
var m__6609__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6609__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6608__auto__ = (((m == null))?null:m);
var m__6609__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6609__auto__.call(null,m,state_map));
} else {
var m__6609__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6609__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6608__auto__ = (((m == null))?null:m);
var m__6609__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6609__auto__.call(null,m,mode));
} else {
var m__6609__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6609__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7021__auto__ = [];
var len__7014__auto___16502 = arguments.length;
var i__7015__auto___16503 = (0);
while(true){
if((i__7015__auto___16503 < len__7014__auto___16502)){
args__7021__auto__.push((arguments[i__7015__auto___16503]));

var G__16504 = (i__7015__auto___16503 + (1));
i__7015__auto___16503 = G__16504;
continue;
} else {
}
break;
}

var argseq__7022__auto__ = ((((3) < args__7021__auto__.length))?(new cljs.core.IndexedSeq(args__7021__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7022__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16496){
var map__16497 = p__16496;
var map__16497__$1 = ((((!((map__16497 == null)))?((((map__16497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16497):map__16497);
var opts = map__16497__$1;
var statearr_16499_16505 = state;
(statearr_16499_16505[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16497,map__16497__$1,opts){
return (function (val){
var statearr_16500_16506 = state;
(statearr_16500_16506[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16497,map__16497__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16501_16507 = state;
(statearr_16501_16507[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16492){
var G__16493 = cljs.core.first(seq16492);
var seq16492__$1 = cljs.core.next(seq16492);
var G__16494 = cljs.core.first(seq16492__$1);
var seq16492__$2 = cljs.core.next(seq16492__$1);
var G__16495 = cljs.core.first(seq16492__$2);
var seq16492__$3 = cljs.core.next(seq16492__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16493,G__16494,G__16495,seq16492__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16674 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16674) : cljs.core.atom.call(null,G__16674));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16675 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16676){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16676 = meta16676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16677,meta16676__$1){
var self__ = this;
var _16677__$1 = this;
return (new cljs.core.async.t_cljs$core$async16675(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16676__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16677){
var self__ = this;
var _16677__$1 = this;
return self__.meta16676;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16678_16840 = self__.cs;
var G__16679_16841 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16678_16840,G__16679_16841) : cljs.core.reset_BANG_.call(null,G__16678_16840,G__16679_16841));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16676], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16675";

cljs.core.async.t_cljs$core$async16675.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async16675");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16675 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16675(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16676){
return (new cljs.core.async.t_cljs$core$async16675(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16676));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16675(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15109__auto___16842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___16842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___16842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16777){
var state_val_16778 = (state_16777[(1)]);
if((state_val_16778 === (7))){
var inst_16695 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16779_16843 = state_16777__$1;
(statearr_16779_16843[(2)] = inst_16695);

(statearr_16779_16843[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (20))){
var inst_16707 = (state_16777[(7)]);
var state_16777__$1 = state_16777;
var statearr_16780_16844 = state_16777__$1;
(statearr_16780_16844[(2)] = inst_16707);

(statearr_16780_16844[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (27))){
var state_16777__$1 = state_16777;
var statearr_16781_16845 = state_16777__$1;
(statearr_16781_16845[(2)] = null);

(statearr_16781_16845[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (1))){
var inst_16683 = (state_16777[(8)]);
var inst_16683__$1 = calc_state();
var inst_16685 = (inst_16683__$1 == null);
var inst_16686 = cljs.core.not(inst_16685);
var state_16777__$1 = (function (){var statearr_16782 = state_16777;
(statearr_16782[(8)] = inst_16683__$1);

return statearr_16782;
})();
if(inst_16686){
var statearr_16783_16846 = state_16777__$1;
(statearr_16783_16846[(1)] = (2));

} else {
var statearr_16784_16847 = state_16777__$1;
(statearr_16784_16847[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (24))){
var inst_16737 = (state_16777[(9)]);
var inst_16751 = (state_16777[(10)]);
var inst_16730 = (state_16777[(11)]);
var inst_16751__$1 = (inst_16730.cljs$core$IFn$_invoke$arity$1 ? inst_16730.cljs$core$IFn$_invoke$arity$1(inst_16737) : inst_16730.call(null,inst_16737));
var state_16777__$1 = (function (){var statearr_16785 = state_16777;
(statearr_16785[(10)] = inst_16751__$1);

return statearr_16785;
})();
if(cljs.core.truth_(inst_16751__$1)){
var statearr_16786_16848 = state_16777__$1;
(statearr_16786_16848[(1)] = (29));

} else {
var statearr_16787_16849 = state_16777__$1;
(statearr_16787_16849[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (4))){
var inst_16698 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16698)){
var statearr_16788_16850 = state_16777__$1;
(statearr_16788_16850[(1)] = (8));

} else {
var statearr_16789_16851 = state_16777__$1;
(statearr_16789_16851[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (15))){
var inst_16724 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16724)){
var statearr_16790_16852 = state_16777__$1;
(statearr_16790_16852[(1)] = (19));

} else {
var statearr_16791_16853 = state_16777__$1;
(statearr_16791_16853[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (21))){
var inst_16729 = (state_16777[(12)]);
var inst_16729__$1 = (state_16777[(2)]);
var inst_16730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16729__$1,cljs.core.cst$kw$solos);
var inst_16731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16729__$1,cljs.core.cst$kw$mutes);
var inst_16732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16729__$1,cljs.core.cst$kw$reads);
var state_16777__$1 = (function (){var statearr_16792 = state_16777;
(statearr_16792[(12)] = inst_16729__$1);

(statearr_16792[(13)] = inst_16731);

(statearr_16792[(11)] = inst_16730);

return statearr_16792;
})();
return cljs.core.async.ioc_alts_BANG_(state_16777__$1,(22),inst_16732);
} else {
if((state_val_16778 === (31))){
var inst_16759 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16759)){
var statearr_16793_16854 = state_16777__$1;
(statearr_16793_16854[(1)] = (32));

} else {
var statearr_16794_16855 = state_16777__$1;
(statearr_16794_16855[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (32))){
var inst_16736 = (state_16777[(14)]);
var state_16777__$1 = state_16777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16777__$1,(35),out,inst_16736);
} else {
if((state_val_16778 === (33))){
var inst_16729 = (state_16777[(12)]);
var inst_16707 = inst_16729;
var state_16777__$1 = (function (){var statearr_16795 = state_16777;
(statearr_16795[(7)] = inst_16707);

return statearr_16795;
})();
var statearr_16796_16856 = state_16777__$1;
(statearr_16796_16856[(2)] = null);

(statearr_16796_16856[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (13))){
var inst_16707 = (state_16777[(7)]);
var inst_16714 = inst_16707.cljs$lang$protocol_mask$partition0$;
var inst_16715 = (inst_16714 & (64));
var inst_16716 = inst_16707.cljs$core$ISeq$;
var inst_16717 = (inst_16715) || (inst_16716);
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16717)){
var statearr_16797_16857 = state_16777__$1;
(statearr_16797_16857[(1)] = (16));

} else {
var statearr_16798_16858 = state_16777__$1;
(statearr_16798_16858[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (22))){
var inst_16737 = (state_16777[(9)]);
var inst_16736 = (state_16777[(14)]);
var inst_16735 = (state_16777[(2)]);
var inst_16736__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16735,(0),null);
var inst_16737__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16735,(1),null);
var inst_16738 = (inst_16736__$1 == null);
var inst_16739 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16737__$1,change);
var inst_16740 = (inst_16738) || (inst_16739);
var state_16777__$1 = (function (){var statearr_16799 = state_16777;
(statearr_16799[(9)] = inst_16737__$1);

(statearr_16799[(14)] = inst_16736__$1);

return statearr_16799;
})();
if(cljs.core.truth_(inst_16740)){
var statearr_16800_16859 = state_16777__$1;
(statearr_16800_16859[(1)] = (23));

} else {
var statearr_16801_16860 = state_16777__$1;
(statearr_16801_16860[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (36))){
var inst_16729 = (state_16777[(12)]);
var inst_16707 = inst_16729;
var state_16777__$1 = (function (){var statearr_16802 = state_16777;
(statearr_16802[(7)] = inst_16707);

return statearr_16802;
})();
var statearr_16803_16861 = state_16777__$1;
(statearr_16803_16861[(2)] = null);

(statearr_16803_16861[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (29))){
var inst_16751 = (state_16777[(10)]);
var state_16777__$1 = state_16777;
var statearr_16804_16862 = state_16777__$1;
(statearr_16804_16862[(2)] = inst_16751);

(statearr_16804_16862[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (6))){
var state_16777__$1 = state_16777;
var statearr_16805_16863 = state_16777__$1;
(statearr_16805_16863[(2)] = false);

(statearr_16805_16863[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (28))){
var inst_16747 = (state_16777[(2)]);
var inst_16748 = calc_state();
var inst_16707 = inst_16748;
var state_16777__$1 = (function (){var statearr_16806 = state_16777;
(statearr_16806[(7)] = inst_16707);

(statearr_16806[(15)] = inst_16747);

return statearr_16806;
})();
var statearr_16807_16864 = state_16777__$1;
(statearr_16807_16864[(2)] = null);

(statearr_16807_16864[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (25))){
var inst_16773 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16808_16865 = state_16777__$1;
(statearr_16808_16865[(2)] = inst_16773);

(statearr_16808_16865[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (34))){
var inst_16771 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16809_16866 = state_16777__$1;
(statearr_16809_16866[(2)] = inst_16771);

(statearr_16809_16866[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (17))){
var state_16777__$1 = state_16777;
var statearr_16810_16867 = state_16777__$1;
(statearr_16810_16867[(2)] = false);

(statearr_16810_16867[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (3))){
var state_16777__$1 = state_16777;
var statearr_16811_16868 = state_16777__$1;
(statearr_16811_16868[(2)] = false);

(statearr_16811_16868[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (12))){
var inst_16775 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16777__$1,inst_16775);
} else {
if((state_val_16778 === (2))){
var inst_16683 = (state_16777[(8)]);
var inst_16688 = inst_16683.cljs$lang$protocol_mask$partition0$;
var inst_16689 = (inst_16688 & (64));
var inst_16690 = inst_16683.cljs$core$ISeq$;
var inst_16691 = (inst_16689) || (inst_16690);
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16691)){
var statearr_16812_16869 = state_16777__$1;
(statearr_16812_16869[(1)] = (5));

} else {
var statearr_16813_16870 = state_16777__$1;
(statearr_16813_16870[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (23))){
var inst_16736 = (state_16777[(14)]);
var inst_16742 = (inst_16736 == null);
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16742)){
var statearr_16814_16871 = state_16777__$1;
(statearr_16814_16871[(1)] = (26));

} else {
var statearr_16815_16872 = state_16777__$1;
(statearr_16815_16872[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (35))){
var inst_16762 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16762)){
var statearr_16816_16873 = state_16777__$1;
(statearr_16816_16873[(1)] = (36));

} else {
var statearr_16817_16874 = state_16777__$1;
(statearr_16817_16874[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (19))){
var inst_16707 = (state_16777[(7)]);
var inst_16726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16707);
var state_16777__$1 = state_16777;
var statearr_16818_16875 = state_16777__$1;
(statearr_16818_16875[(2)] = inst_16726);

(statearr_16818_16875[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (11))){
var inst_16707 = (state_16777[(7)]);
var inst_16711 = (inst_16707 == null);
var inst_16712 = cljs.core.not(inst_16711);
var state_16777__$1 = state_16777;
if(inst_16712){
var statearr_16819_16876 = state_16777__$1;
(statearr_16819_16876[(1)] = (13));

} else {
var statearr_16820_16877 = state_16777__$1;
(statearr_16820_16877[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (9))){
var inst_16683 = (state_16777[(8)]);
var state_16777__$1 = state_16777;
var statearr_16821_16878 = state_16777__$1;
(statearr_16821_16878[(2)] = inst_16683);

(statearr_16821_16878[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (5))){
var state_16777__$1 = state_16777;
var statearr_16822_16879 = state_16777__$1;
(statearr_16822_16879[(2)] = true);

(statearr_16822_16879[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (14))){
var state_16777__$1 = state_16777;
var statearr_16823_16880 = state_16777__$1;
(statearr_16823_16880[(2)] = false);

(statearr_16823_16880[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (26))){
var inst_16737 = (state_16777[(9)]);
var inst_16744 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16737);
var state_16777__$1 = state_16777;
var statearr_16824_16881 = state_16777__$1;
(statearr_16824_16881[(2)] = inst_16744);

(statearr_16824_16881[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (16))){
var state_16777__$1 = state_16777;
var statearr_16825_16882 = state_16777__$1;
(statearr_16825_16882[(2)] = true);

(statearr_16825_16882[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (38))){
var inst_16767 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16826_16883 = state_16777__$1;
(statearr_16826_16883[(2)] = inst_16767);

(statearr_16826_16883[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (30))){
var inst_16737 = (state_16777[(9)]);
var inst_16731 = (state_16777[(13)]);
var inst_16730 = (state_16777[(11)]);
var inst_16754 = cljs.core.empty_QMARK_(inst_16730);
var inst_16755 = (inst_16731.cljs$core$IFn$_invoke$arity$1 ? inst_16731.cljs$core$IFn$_invoke$arity$1(inst_16737) : inst_16731.call(null,inst_16737));
var inst_16756 = cljs.core.not(inst_16755);
var inst_16757 = (inst_16754) && (inst_16756);
var state_16777__$1 = state_16777;
var statearr_16827_16884 = state_16777__$1;
(statearr_16827_16884[(2)] = inst_16757);

(statearr_16827_16884[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (10))){
var inst_16683 = (state_16777[(8)]);
var inst_16703 = (state_16777[(2)]);
var inst_16704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16703,cljs.core.cst$kw$solos);
var inst_16705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16703,cljs.core.cst$kw$mutes);
var inst_16706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16703,cljs.core.cst$kw$reads);
var inst_16707 = inst_16683;
var state_16777__$1 = (function (){var statearr_16828 = state_16777;
(statearr_16828[(16)] = inst_16705);

(statearr_16828[(7)] = inst_16707);

(statearr_16828[(17)] = inst_16704);

(statearr_16828[(18)] = inst_16706);

return statearr_16828;
})();
var statearr_16829_16885 = state_16777__$1;
(statearr_16829_16885[(2)] = null);

(statearr_16829_16885[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (18))){
var inst_16721 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16830_16886 = state_16777__$1;
(statearr_16830_16886[(2)] = inst_16721);

(statearr_16830_16886[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (37))){
var state_16777__$1 = state_16777;
var statearr_16831_16887 = state_16777__$1;
(statearr_16831_16887[(2)] = null);

(statearr_16831_16887[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16778 === (8))){
var inst_16683 = (state_16777[(8)]);
var inst_16700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16683);
var state_16777__$1 = state_16777;
var statearr_16832_16888 = state_16777__$1;
(statearr_16832_16888[(2)] = inst_16700);

(statearr_16832_16888[(1)] = (10));


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
});})(c__15109__auto___16842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14995__auto__,c__15109__auto___16842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14996__auto__ = null;
var cljs$core$async$mix_$_state_machine__14996__auto____0 = (function (){
var statearr_16836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16836[(0)] = cljs$core$async$mix_$_state_machine__14996__auto__);

(statearr_16836[(1)] = (1));

return statearr_16836;
});
var cljs$core$async$mix_$_state_machine__14996__auto____1 = (function (state_16777){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_16777);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e16837){if((e16837 instanceof Object)){
var ex__14999__auto__ = e16837;
var statearr_16838_16889 = state_16777;
(statearr_16838_16889[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16777);

return cljs.core.cst$kw$recur;
} else {
throw e16837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__16890 = state_16777;
state_16777 = G__16890;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14996__auto__ = function(state_16777){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14996__auto____1.call(this,state_16777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14996__auto____0;
cljs$core$async$mix_$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14996__auto____1;
return cljs$core$async$mix_$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___16842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15111__auto__ = (function (){var statearr_16839 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_16839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___16842);

return statearr_16839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___16842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6608__auto__ = (((p == null))?null:p);
var m__6609__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6609__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6609__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6609__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6608__auto__ = (((p == null))?null:p);
var m__6609__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6609__auto__.call(null,p,v,ch));
} else {
var m__6609__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6609__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16891 = [];
var len__7014__auto___16894 = arguments.length;
var i__7015__auto___16895 = (0);
while(true){
if((i__7015__auto___16895 < len__7014__auto___16894)){
args16891.push((arguments[i__7015__auto___16895]));

var G__16896 = (i__7015__auto___16895 + (1));
i__7015__auto___16895 = G__16896;
continue;
} else {
}
break;
}

var G__16893 = args16891.length;
switch (G__16893) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16891.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6608__auto__ = (((p == null))?null:p);
var m__6609__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6609__auto__.call(null,p));
} else {
var m__6609__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6609__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6608__auto__ = (((p == null))?null:p);
var m__6609__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6608__auto__)]);
if(!((m__6609__auto__ == null))){
return (m__6609__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6609__auto__.call(null,p,v));
} else {
var m__6609__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6609__auto____$1 == null))){
return (m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6609__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6609__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16899 = [];
var len__7014__auto___17027 = arguments.length;
var i__7015__auto___17028 = (0);
while(true){
if((i__7015__auto___17028 < len__7014__auto___17027)){
args16899.push((arguments[i__7015__auto___17028]));

var G__17029 = (i__7015__auto___17028 + (1));
i__7015__auto___17028 = G__17029;
continue;
} else {
}
break;
}

var G__16901 = args16899.length;
switch (G__16901) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16899.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16902 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16902) : cljs.core.atom.call(null,G__16902));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__5945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__5945__auto__)){
return or__5945__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5945__auto__,mults){
return (function (p1__16898_SHARP_){
if(cljs.core.truth_((p1__16898_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16898_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16898_SHARP_.call(null,topic)))){
return p1__16898_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16898_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5945__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16903 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16904){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16904 = meta16904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16905,meta16904__$1){
var self__ = this;
var _16905__$1 = this;
return (new cljs.core.async.t_cljs$core$async16903(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16904__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16905){
var self__ = this;
var _16905__$1 = this;
return self__.meta16904;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16906 = self__.mults;
var G__16907 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16906,G__16907) : cljs.core.reset_BANG_.call(null,G__16906,G__16907));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16903.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16904], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16903";

cljs.core.async.t_cljs$core$async16903.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async16903");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16903 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16904){
return (new cljs.core.async.t_cljs$core$async16903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16904));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16903(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15109__auto___17031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___17031,mults,ensure_mult,p){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___17031,mults,ensure_mult,p){
return (function (state_16979){
var state_val_16980 = (state_16979[(1)]);
if((state_val_16980 === (7))){
var inst_16975 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
var statearr_16981_17032 = state_16979__$1;
(statearr_16981_17032[(2)] = inst_16975);

(statearr_16981_17032[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (20))){
var state_16979__$1 = state_16979;
var statearr_16982_17033 = state_16979__$1;
(statearr_16982_17033[(2)] = null);

(statearr_16982_17033[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (1))){
var state_16979__$1 = state_16979;
var statearr_16983_17034 = state_16979__$1;
(statearr_16983_17034[(2)] = null);

(statearr_16983_17034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (24))){
var inst_16958 = (state_16979[(7)]);
var inst_16967 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16958);
var state_16979__$1 = state_16979;
var statearr_16984_17035 = state_16979__$1;
(statearr_16984_17035[(2)] = inst_16967);

(statearr_16984_17035[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (4))){
var inst_16910 = (state_16979[(8)]);
var inst_16910__$1 = (state_16979[(2)]);
var inst_16911 = (inst_16910__$1 == null);
var state_16979__$1 = (function (){var statearr_16985 = state_16979;
(statearr_16985[(8)] = inst_16910__$1);

return statearr_16985;
})();
if(cljs.core.truth_(inst_16911)){
var statearr_16986_17036 = state_16979__$1;
(statearr_16986_17036[(1)] = (5));

} else {
var statearr_16987_17037 = state_16979__$1;
(statearr_16987_17037[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (15))){
var inst_16952 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
var statearr_16988_17038 = state_16979__$1;
(statearr_16988_17038[(2)] = inst_16952);

(statearr_16988_17038[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (21))){
var inst_16972 = (state_16979[(2)]);
var state_16979__$1 = (function (){var statearr_16989 = state_16979;
(statearr_16989[(9)] = inst_16972);

return statearr_16989;
})();
var statearr_16990_17039 = state_16979__$1;
(statearr_16990_17039[(2)] = null);

(statearr_16990_17039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (13))){
var inst_16934 = (state_16979[(10)]);
var inst_16936 = cljs.core.chunked_seq_QMARK_(inst_16934);
var state_16979__$1 = state_16979;
if(inst_16936){
var statearr_16991_17040 = state_16979__$1;
(statearr_16991_17040[(1)] = (16));

} else {
var statearr_16992_17041 = state_16979__$1;
(statearr_16992_17041[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (22))){
var inst_16964 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
if(cljs.core.truth_(inst_16964)){
var statearr_16993_17042 = state_16979__$1;
(statearr_16993_17042[(1)] = (23));

} else {
var statearr_16994_17043 = state_16979__$1;
(statearr_16994_17043[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (6))){
var inst_16960 = (state_16979[(11)]);
var inst_16958 = (state_16979[(7)]);
var inst_16910 = (state_16979[(8)]);
var inst_16958__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16910) : topic_fn.call(null,inst_16910));
var inst_16959 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16960__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16959,inst_16958__$1);
var state_16979__$1 = (function (){var statearr_16995 = state_16979;
(statearr_16995[(11)] = inst_16960__$1);

(statearr_16995[(7)] = inst_16958__$1);

return statearr_16995;
})();
if(cljs.core.truth_(inst_16960__$1)){
var statearr_16996_17044 = state_16979__$1;
(statearr_16996_17044[(1)] = (19));

} else {
var statearr_16997_17045 = state_16979__$1;
(statearr_16997_17045[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (25))){
var inst_16969 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
var statearr_16998_17046 = state_16979__$1;
(statearr_16998_17046[(2)] = inst_16969);

(statearr_16998_17046[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (17))){
var inst_16934 = (state_16979[(10)]);
var inst_16943 = cljs.core.first(inst_16934);
var inst_16944 = cljs.core.async.muxch_STAR_(inst_16943);
var inst_16945 = cljs.core.async.close_BANG_(inst_16944);
var inst_16946 = cljs.core.next(inst_16934);
var inst_16920 = inst_16946;
var inst_16921 = null;
var inst_16922 = (0);
var inst_16923 = (0);
var state_16979__$1 = (function (){var statearr_16999 = state_16979;
(statearr_16999[(12)] = inst_16923);

(statearr_16999[(13)] = inst_16945);

(statearr_16999[(14)] = inst_16921);

(statearr_16999[(15)] = inst_16922);

(statearr_16999[(16)] = inst_16920);

return statearr_16999;
})();
var statearr_17000_17047 = state_16979__$1;
(statearr_17000_17047[(2)] = null);

(statearr_17000_17047[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (3))){
var inst_16977 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16979__$1,inst_16977);
} else {
if((state_val_16980 === (12))){
var inst_16954 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
var statearr_17001_17048 = state_16979__$1;
(statearr_17001_17048[(2)] = inst_16954);

(statearr_17001_17048[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (2))){
var state_16979__$1 = state_16979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16979__$1,(4),ch);
} else {
if((state_val_16980 === (23))){
var state_16979__$1 = state_16979;
var statearr_17002_17049 = state_16979__$1;
(statearr_17002_17049[(2)] = null);

(statearr_17002_17049[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (19))){
var inst_16960 = (state_16979[(11)]);
var inst_16910 = (state_16979[(8)]);
var inst_16962 = cljs.core.async.muxch_STAR_(inst_16960);
var state_16979__$1 = state_16979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16979__$1,(22),inst_16962,inst_16910);
} else {
if((state_val_16980 === (11))){
var inst_16920 = (state_16979[(16)]);
var inst_16934 = (state_16979[(10)]);
var inst_16934__$1 = cljs.core.seq(inst_16920);
var state_16979__$1 = (function (){var statearr_17003 = state_16979;
(statearr_17003[(10)] = inst_16934__$1);

return statearr_17003;
})();
if(inst_16934__$1){
var statearr_17004_17050 = state_16979__$1;
(statearr_17004_17050[(1)] = (13));

} else {
var statearr_17005_17051 = state_16979__$1;
(statearr_17005_17051[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (9))){
var inst_16956 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
var statearr_17006_17052 = state_16979__$1;
(statearr_17006_17052[(2)] = inst_16956);

(statearr_17006_17052[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (5))){
var inst_16917 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16918 = cljs.core.vals(inst_16917);
var inst_16919 = cljs.core.seq(inst_16918);
var inst_16920 = inst_16919;
var inst_16921 = null;
var inst_16922 = (0);
var inst_16923 = (0);
var state_16979__$1 = (function (){var statearr_17007 = state_16979;
(statearr_17007[(12)] = inst_16923);

(statearr_17007[(14)] = inst_16921);

(statearr_17007[(15)] = inst_16922);

(statearr_17007[(16)] = inst_16920);

return statearr_17007;
})();
var statearr_17008_17053 = state_16979__$1;
(statearr_17008_17053[(2)] = null);

(statearr_17008_17053[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (14))){
var state_16979__$1 = state_16979;
var statearr_17012_17054 = state_16979__$1;
(statearr_17012_17054[(2)] = null);

(statearr_17012_17054[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (16))){
var inst_16934 = (state_16979[(10)]);
var inst_16938 = cljs.core.chunk_first(inst_16934);
var inst_16939 = cljs.core.chunk_rest(inst_16934);
var inst_16940 = cljs.core.count(inst_16938);
var inst_16920 = inst_16939;
var inst_16921 = inst_16938;
var inst_16922 = inst_16940;
var inst_16923 = (0);
var state_16979__$1 = (function (){var statearr_17013 = state_16979;
(statearr_17013[(12)] = inst_16923);

(statearr_17013[(14)] = inst_16921);

(statearr_17013[(15)] = inst_16922);

(statearr_17013[(16)] = inst_16920);

return statearr_17013;
})();
var statearr_17014_17055 = state_16979__$1;
(statearr_17014_17055[(2)] = null);

(statearr_17014_17055[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (10))){
var inst_16923 = (state_16979[(12)]);
var inst_16921 = (state_16979[(14)]);
var inst_16922 = (state_16979[(15)]);
var inst_16920 = (state_16979[(16)]);
var inst_16928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16921,inst_16923);
var inst_16929 = cljs.core.async.muxch_STAR_(inst_16928);
var inst_16930 = cljs.core.async.close_BANG_(inst_16929);
var inst_16931 = (inst_16923 + (1));
var tmp17009 = inst_16921;
var tmp17010 = inst_16922;
var tmp17011 = inst_16920;
var inst_16920__$1 = tmp17011;
var inst_16921__$1 = tmp17009;
var inst_16922__$1 = tmp17010;
var inst_16923__$1 = inst_16931;
var state_16979__$1 = (function (){var statearr_17015 = state_16979;
(statearr_17015[(12)] = inst_16923__$1);

(statearr_17015[(17)] = inst_16930);

(statearr_17015[(14)] = inst_16921__$1);

(statearr_17015[(15)] = inst_16922__$1);

(statearr_17015[(16)] = inst_16920__$1);

return statearr_17015;
})();
var statearr_17016_17056 = state_16979__$1;
(statearr_17016_17056[(2)] = null);

(statearr_17016_17056[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (18))){
var inst_16949 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
var statearr_17017_17057 = state_16979__$1;
(statearr_17017_17057[(2)] = inst_16949);

(statearr_17017_17057[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16980 === (8))){
var inst_16923 = (state_16979[(12)]);
var inst_16922 = (state_16979[(15)]);
var inst_16925 = (inst_16923 < inst_16922);
var inst_16926 = inst_16925;
var state_16979__$1 = state_16979;
if(cljs.core.truth_(inst_16926)){
var statearr_17018_17058 = state_16979__$1;
(statearr_17018_17058[(1)] = (10));

} else {
var statearr_17019_17059 = state_16979__$1;
(statearr_17019_17059[(1)] = (11));

}

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
});})(c__15109__auto___17031,mults,ensure_mult,p))
;
return ((function (switch__14995__auto__,c__15109__auto___17031,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_17023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17023[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_17023[(1)] = (1));

return statearr_17023;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_16979){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_16979);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17024){if((e17024 instanceof Object)){
var ex__14999__auto__ = e17024;
var statearr_17025_17060 = state_16979;
(statearr_17025_17060[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16979);

return cljs.core.cst$kw$recur;
} else {
throw e17024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17061 = state_16979;
state_16979 = G__17061;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_16979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_16979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___17031,mults,ensure_mult,p))
})();
var state__15111__auto__ = (function (){var statearr_17026 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___17031);

return statearr_17026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___17031,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args17062 = [];
var len__7014__auto___17065 = arguments.length;
var i__7015__auto___17066 = (0);
while(true){
if((i__7015__auto___17066 < len__7014__auto___17065)){
args17062.push((arguments[i__7015__auto___17066]));

var G__17067 = (i__7015__auto___17066 + (1));
i__7015__auto___17066 = G__17067;
continue;
} else {
}
break;
}

var G__17064 = args17062.length;
switch (G__17064) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17062.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args17069 = [];
var len__7014__auto___17072 = arguments.length;
var i__7015__auto___17073 = (0);
while(true){
if((i__7015__auto___17073 < len__7014__auto___17072)){
args17069.push((arguments[i__7015__auto___17073]));

var G__17074 = (i__7015__auto___17073 + (1));
i__7015__auto___17073 = G__17074;
continue;
} else {
}
break;
}

var G__17071 = args17069.length;
switch (G__17071) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17069.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args17076 = [];
var len__7014__auto___17147 = arguments.length;
var i__7015__auto___17148 = (0);
while(true){
if((i__7015__auto___17148 < len__7014__auto___17147)){
args17076.push((arguments[i__7015__auto___17148]));

var G__17149 = (i__7015__auto___17148 + (1));
i__7015__auto___17148 = G__17149;
continue;
} else {
}
break;
}

var G__17078 = args17076.length;
switch (G__17078) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17076.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15109__auto___17151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___17151,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___17151,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17117){
var state_val_17118 = (state_17117[(1)]);
if((state_val_17118 === (7))){
var state_17117__$1 = state_17117;
var statearr_17119_17152 = state_17117__$1;
(statearr_17119_17152[(2)] = null);

(statearr_17119_17152[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (1))){
var state_17117__$1 = state_17117;
var statearr_17120_17153 = state_17117__$1;
(statearr_17120_17153[(2)] = null);

(statearr_17120_17153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (4))){
var inst_17081 = (state_17117[(7)]);
var inst_17083 = (inst_17081 < cnt);
var state_17117__$1 = state_17117;
if(cljs.core.truth_(inst_17083)){
var statearr_17121_17154 = state_17117__$1;
(statearr_17121_17154[(1)] = (6));

} else {
var statearr_17122_17155 = state_17117__$1;
(statearr_17122_17155[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (15))){
var inst_17113 = (state_17117[(2)]);
var state_17117__$1 = state_17117;
var statearr_17123_17156 = state_17117__$1;
(statearr_17123_17156[(2)] = inst_17113);

(statearr_17123_17156[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (13))){
var inst_17106 = cljs.core.async.close_BANG_(out);
var state_17117__$1 = state_17117;
var statearr_17124_17157 = state_17117__$1;
(statearr_17124_17157[(2)] = inst_17106);

(statearr_17124_17157[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (6))){
var state_17117__$1 = state_17117;
var statearr_17125_17158 = state_17117__$1;
(statearr_17125_17158[(2)] = null);

(statearr_17125_17158[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (3))){
var inst_17115 = (state_17117[(2)]);
var state_17117__$1 = state_17117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17117__$1,inst_17115);
} else {
if((state_val_17118 === (12))){
var inst_17103 = (state_17117[(8)]);
var inst_17103__$1 = (state_17117[(2)]);
var inst_17104 = cljs.core.some(cljs.core.nil_QMARK_,inst_17103__$1);
var state_17117__$1 = (function (){var statearr_17126 = state_17117;
(statearr_17126[(8)] = inst_17103__$1);

return statearr_17126;
})();
if(cljs.core.truth_(inst_17104)){
var statearr_17127_17159 = state_17117__$1;
(statearr_17127_17159[(1)] = (13));

} else {
var statearr_17128_17160 = state_17117__$1;
(statearr_17128_17160[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (2))){
var inst_17080 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17081 = (0);
var state_17117__$1 = (function (){var statearr_17129 = state_17117;
(statearr_17129[(9)] = inst_17080);

(statearr_17129[(7)] = inst_17081);

return statearr_17129;
})();
var statearr_17130_17161 = state_17117__$1;
(statearr_17130_17161[(2)] = null);

(statearr_17130_17161[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (11))){
var inst_17081 = (state_17117[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17117,(10),Object,null,(9));
var inst_17090 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17081) : chs__$1.call(null,inst_17081));
var inst_17091 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17081) : done.call(null,inst_17081));
var inst_17092 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17090,inst_17091);
var state_17117__$1 = state_17117;
var statearr_17131_17162 = state_17117__$1;
(statearr_17131_17162[(2)] = inst_17092);


cljs.core.async.impl.ioc_helpers.process_exception(state_17117__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (9))){
var inst_17081 = (state_17117[(7)]);
var inst_17094 = (state_17117[(2)]);
var inst_17095 = (inst_17081 + (1));
var inst_17081__$1 = inst_17095;
var state_17117__$1 = (function (){var statearr_17132 = state_17117;
(statearr_17132[(10)] = inst_17094);

(statearr_17132[(7)] = inst_17081__$1);

return statearr_17132;
})();
var statearr_17133_17163 = state_17117__$1;
(statearr_17133_17163[(2)] = null);

(statearr_17133_17163[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (5))){
var inst_17101 = (state_17117[(2)]);
var state_17117__$1 = (function (){var statearr_17134 = state_17117;
(statearr_17134[(11)] = inst_17101);

return statearr_17134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17117__$1,(12),dchan);
} else {
if((state_val_17118 === (14))){
var inst_17103 = (state_17117[(8)]);
var inst_17108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17103);
var state_17117__$1 = state_17117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17117__$1,(16),out,inst_17108);
} else {
if((state_val_17118 === (16))){
var inst_17110 = (state_17117[(2)]);
var state_17117__$1 = (function (){var statearr_17135 = state_17117;
(statearr_17135[(12)] = inst_17110);

return statearr_17135;
})();
var statearr_17136_17164 = state_17117__$1;
(statearr_17136_17164[(2)] = null);

(statearr_17136_17164[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (10))){
var inst_17085 = (state_17117[(2)]);
var inst_17086 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17117__$1 = (function (){var statearr_17137 = state_17117;
(statearr_17137[(13)] = inst_17085);

return statearr_17137;
})();
var statearr_17138_17165 = state_17117__$1;
(statearr_17138_17165[(2)] = inst_17086);


cljs.core.async.impl.ioc_helpers.process_exception(state_17117__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17118 === (8))){
var inst_17099 = (state_17117[(2)]);
var state_17117__$1 = state_17117;
var statearr_17139_17166 = state_17117__$1;
(statearr_17139_17166[(2)] = inst_17099);

(statearr_17139_17166[(1)] = (5));


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
});})(c__15109__auto___17151,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14995__auto__,c__15109__auto___17151,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_17143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17143[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_17143[(1)] = (1));

return statearr_17143;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_17117){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_17117);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17144){if((e17144 instanceof Object)){
var ex__14999__auto__ = e17144;
var statearr_17145_17167 = state_17117;
(statearr_17145_17167[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17117);

return cljs.core.cst$kw$recur;
} else {
throw e17144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17168 = state_17117;
state_17117 = G__17168;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_17117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_17117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___17151,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15111__auto__ = (function (){var statearr_17146 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___17151);

return statearr_17146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___17151,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args17170 = [];
var len__7014__auto___17226 = arguments.length;
var i__7015__auto___17227 = (0);
while(true){
if((i__7015__auto___17227 < len__7014__auto___17226)){
args17170.push((arguments[i__7015__auto___17227]));

var G__17228 = (i__7015__auto___17227 + (1));
i__7015__auto___17227 = G__17228;
continue;
} else {
}
break;
}

var G__17172 = args17170.length;
switch (G__17172) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17170.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15109__auto___17230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___17230,out){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___17230,out){
return (function (state_17202){
var state_val_17203 = (state_17202[(1)]);
if((state_val_17203 === (7))){
var inst_17181 = (state_17202[(7)]);
var inst_17182 = (state_17202[(8)]);
var inst_17181__$1 = (state_17202[(2)]);
var inst_17182__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17181__$1,(0),null);
var inst_17183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17181__$1,(1),null);
var inst_17184 = (inst_17182__$1 == null);
var state_17202__$1 = (function (){var statearr_17204 = state_17202;
(statearr_17204[(9)] = inst_17183);

(statearr_17204[(7)] = inst_17181__$1);

(statearr_17204[(8)] = inst_17182__$1);

return statearr_17204;
})();
if(cljs.core.truth_(inst_17184)){
var statearr_17205_17231 = state_17202__$1;
(statearr_17205_17231[(1)] = (8));

} else {
var statearr_17206_17232 = state_17202__$1;
(statearr_17206_17232[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17203 === (1))){
var inst_17173 = cljs.core.vec(chs);
var inst_17174 = inst_17173;
var state_17202__$1 = (function (){var statearr_17207 = state_17202;
(statearr_17207[(10)] = inst_17174);

return statearr_17207;
})();
var statearr_17208_17233 = state_17202__$1;
(statearr_17208_17233[(2)] = null);

(statearr_17208_17233[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17203 === (4))){
var inst_17174 = (state_17202[(10)]);
var state_17202__$1 = state_17202;
return cljs.core.async.ioc_alts_BANG_(state_17202__$1,(7),inst_17174);
} else {
if((state_val_17203 === (6))){
var inst_17198 = (state_17202[(2)]);
var state_17202__$1 = state_17202;
var statearr_17209_17234 = state_17202__$1;
(statearr_17209_17234[(2)] = inst_17198);

(statearr_17209_17234[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17203 === (3))){
var inst_17200 = (state_17202[(2)]);
var state_17202__$1 = state_17202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17202__$1,inst_17200);
} else {
if((state_val_17203 === (2))){
var inst_17174 = (state_17202[(10)]);
var inst_17176 = cljs.core.count(inst_17174);
var inst_17177 = (inst_17176 > (0));
var state_17202__$1 = state_17202;
if(cljs.core.truth_(inst_17177)){
var statearr_17211_17235 = state_17202__$1;
(statearr_17211_17235[(1)] = (4));

} else {
var statearr_17212_17236 = state_17202__$1;
(statearr_17212_17236[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17203 === (11))){
var inst_17174 = (state_17202[(10)]);
var inst_17191 = (state_17202[(2)]);
var tmp17210 = inst_17174;
var inst_17174__$1 = tmp17210;
var state_17202__$1 = (function (){var statearr_17213 = state_17202;
(statearr_17213[(10)] = inst_17174__$1);

(statearr_17213[(11)] = inst_17191);

return statearr_17213;
})();
var statearr_17214_17237 = state_17202__$1;
(statearr_17214_17237[(2)] = null);

(statearr_17214_17237[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17203 === (9))){
var inst_17182 = (state_17202[(8)]);
var state_17202__$1 = state_17202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17202__$1,(11),out,inst_17182);
} else {
if((state_val_17203 === (5))){
var inst_17196 = cljs.core.async.close_BANG_(out);
var state_17202__$1 = state_17202;
var statearr_17215_17238 = state_17202__$1;
(statearr_17215_17238[(2)] = inst_17196);

(statearr_17215_17238[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17203 === (10))){
var inst_17194 = (state_17202[(2)]);
var state_17202__$1 = state_17202;
var statearr_17216_17239 = state_17202__$1;
(statearr_17216_17239[(2)] = inst_17194);

(statearr_17216_17239[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17203 === (8))){
var inst_17174 = (state_17202[(10)]);
var inst_17183 = (state_17202[(9)]);
var inst_17181 = (state_17202[(7)]);
var inst_17182 = (state_17202[(8)]);
var inst_17186 = (function (){var cs = inst_17174;
var vec__17179 = inst_17181;
var v = inst_17182;
var c = inst_17183;
return ((function (cs,vec__17179,v,c,inst_17174,inst_17183,inst_17181,inst_17182,state_val_17203,c__15109__auto___17230,out){
return (function (p1__17169_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17169_SHARP_);
});
;})(cs,vec__17179,v,c,inst_17174,inst_17183,inst_17181,inst_17182,state_val_17203,c__15109__auto___17230,out))
})();
var inst_17187 = cljs.core.filterv(inst_17186,inst_17174);
var inst_17174__$1 = inst_17187;
var state_17202__$1 = (function (){var statearr_17217 = state_17202;
(statearr_17217[(10)] = inst_17174__$1);

return statearr_17217;
})();
var statearr_17218_17240 = state_17202__$1;
(statearr_17218_17240[(2)] = null);

(statearr_17218_17240[(1)] = (2));


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
});})(c__15109__auto___17230,out))
;
return ((function (switch__14995__auto__,c__15109__auto___17230,out){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_17222 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17222[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_17222[(1)] = (1));

return statearr_17222;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_17202){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_17202);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17223){if((e17223 instanceof Object)){
var ex__14999__auto__ = e17223;
var statearr_17224_17241 = state_17202;
(statearr_17224_17241[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17202);

return cljs.core.cst$kw$recur;
} else {
throw e17223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17242 = state_17202;
state_17202 = G__17242;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_17202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_17202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___17230,out))
})();
var state__15111__auto__ = (function (){var statearr_17225 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___17230);

return statearr_17225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___17230,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17243 = [];
var len__7014__auto___17292 = arguments.length;
var i__7015__auto___17293 = (0);
while(true){
if((i__7015__auto___17293 < len__7014__auto___17292)){
args17243.push((arguments[i__7015__auto___17293]));

var G__17294 = (i__7015__auto___17293 + (1));
i__7015__auto___17293 = G__17294;
continue;
} else {
}
break;
}

var G__17245 = args17243.length;
switch (G__17245) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17243.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15109__auto___17296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___17296,out){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___17296,out){
return (function (state_17269){
var state_val_17270 = (state_17269[(1)]);
if((state_val_17270 === (7))){
var inst_17251 = (state_17269[(7)]);
var inst_17251__$1 = (state_17269[(2)]);
var inst_17252 = (inst_17251__$1 == null);
var inst_17253 = cljs.core.not(inst_17252);
var state_17269__$1 = (function (){var statearr_17271 = state_17269;
(statearr_17271[(7)] = inst_17251__$1);

return statearr_17271;
})();
if(inst_17253){
var statearr_17272_17297 = state_17269__$1;
(statearr_17272_17297[(1)] = (8));

} else {
var statearr_17273_17298 = state_17269__$1;
(statearr_17273_17298[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17270 === (1))){
var inst_17246 = (0);
var state_17269__$1 = (function (){var statearr_17274 = state_17269;
(statearr_17274[(8)] = inst_17246);

return statearr_17274;
})();
var statearr_17275_17299 = state_17269__$1;
(statearr_17275_17299[(2)] = null);

(statearr_17275_17299[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17270 === (4))){
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17269__$1,(7),ch);
} else {
if((state_val_17270 === (6))){
var inst_17264 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17276_17300 = state_17269__$1;
(statearr_17276_17300[(2)] = inst_17264);

(statearr_17276_17300[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17270 === (3))){
var inst_17266 = (state_17269[(2)]);
var inst_17267 = cljs.core.async.close_BANG_(out);
var state_17269__$1 = (function (){var statearr_17277 = state_17269;
(statearr_17277[(9)] = inst_17266);

return statearr_17277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17269__$1,inst_17267);
} else {
if((state_val_17270 === (2))){
var inst_17246 = (state_17269[(8)]);
var inst_17248 = (inst_17246 < n);
var state_17269__$1 = state_17269;
if(cljs.core.truth_(inst_17248)){
var statearr_17278_17301 = state_17269__$1;
(statearr_17278_17301[(1)] = (4));

} else {
var statearr_17279_17302 = state_17269__$1;
(statearr_17279_17302[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17270 === (11))){
var inst_17246 = (state_17269[(8)]);
var inst_17256 = (state_17269[(2)]);
var inst_17257 = (inst_17246 + (1));
var inst_17246__$1 = inst_17257;
var state_17269__$1 = (function (){var statearr_17280 = state_17269;
(statearr_17280[(8)] = inst_17246__$1);

(statearr_17280[(10)] = inst_17256);

return statearr_17280;
})();
var statearr_17281_17303 = state_17269__$1;
(statearr_17281_17303[(2)] = null);

(statearr_17281_17303[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17270 === (9))){
var state_17269__$1 = state_17269;
var statearr_17282_17304 = state_17269__$1;
(statearr_17282_17304[(2)] = null);

(statearr_17282_17304[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17270 === (5))){
var state_17269__$1 = state_17269;
var statearr_17283_17305 = state_17269__$1;
(statearr_17283_17305[(2)] = null);

(statearr_17283_17305[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17270 === (10))){
var inst_17261 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17284_17306 = state_17269__$1;
(statearr_17284_17306[(2)] = inst_17261);

(statearr_17284_17306[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17270 === (8))){
var inst_17251 = (state_17269[(7)]);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17269__$1,(11),out,inst_17251);
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
});})(c__15109__auto___17296,out))
;
return ((function (switch__14995__auto__,c__15109__auto___17296,out){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_17288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17288[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_17288[(1)] = (1));

return statearr_17288;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_17269){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_17269);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17289){if((e17289 instanceof Object)){
var ex__14999__auto__ = e17289;
var statearr_17290_17307 = state_17269;
(statearr_17290_17307[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17269);

return cljs.core.cst$kw$recur;
} else {
throw e17289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17308 = state_17269;
state_17269 = G__17308;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___17296,out))
})();
var state__15111__auto__ = (function (){var statearr_17291 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___17296);

return statearr_17291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___17296,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17318 = (function (map_LT_,f,ch,meta17319){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17319 = meta17319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17320,meta17319__$1){
var self__ = this;
var _17320__$1 = this;
return (new cljs.core.async.t_cljs$core$async17318(self__.map_LT_,self__.f,self__.ch,meta17319__$1));
});

cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17320){
var self__ = this;
var _17320__$1 = this;
return self__.meta17319;
});

cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17321 = (function (map_LT_,f,ch,meta17319,_,fn1,meta17322){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17319 = meta17319;
this._ = _;
this.fn1 = fn1;
this.meta17322 = meta17322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17323,meta17322__$1){
var self__ = this;
var _17323__$1 = this;
return (new cljs.core.async.t_cljs$core$async17321(self__.map_LT_,self__.f,self__.ch,self__.meta17319,self__._,self__.fn1,meta17322__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17323){
var self__ = this;
var _17323__$1 = this;
return self__.meta17322;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17309_SHARP_){
var G__17324 = (((p1__17309_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17309_SHARP_) : self__.f.call(null,p1__17309_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17324) : f1.call(null,G__17324));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17321.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17319,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17318], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17322], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17321";

cljs.core.async.t_cljs$core$async17321.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async17321");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17321 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17321(map_LT___$1,f__$1,ch__$1,meta17319__$1,___$2,fn1__$1,meta17322){
return (new cljs.core.async.t_cljs$core$async17321(map_LT___$1,f__$1,ch__$1,meta17319__$1,___$2,fn1__$1,meta17322));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17321(self__.map_LT_,self__.f,self__.ch,self__.meta17319,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5933__auto__ = ret;
if(cljs.core.truth_(and__5933__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__5933__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17325 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17325) : self__.f.call(null,G__17325));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17319], null);
});

cljs.core.async.t_cljs$core$async17318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17318";

cljs.core.async.t_cljs$core$async17318.cljs$lang$ctorPrWriter = (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async17318");
});

cljs.core.async.__GT_t_cljs$core$async17318 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17318(map_LT___$1,f__$1,ch__$1,meta17319){
return (new cljs.core.async.t_cljs$core$async17318(map_LT___$1,f__$1,ch__$1,meta17319));
});

}

return (new cljs.core.async.t_cljs$core$async17318(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17329 = (function (map_GT_,f,ch,meta17330){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17330 = meta17330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17331,meta17330__$1){
var self__ = this;
var _17331__$1 = this;
return (new cljs.core.async.t_cljs$core$async17329(self__.map_GT_,self__.f,self__.ch,meta17330__$1));
});

cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17331){
var self__ = this;
var _17331__$1 = this;
return self__.meta17330;
});

cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17330], null);
});

cljs.core.async.t_cljs$core$async17329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17329";

cljs.core.async.t_cljs$core$async17329.cljs$lang$ctorPrWriter = (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async17329");
});

cljs.core.async.__GT_t_cljs$core$async17329 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17329(map_GT___$1,f__$1,ch__$1,meta17330){
return (new cljs.core.async.t_cljs$core$async17329(map_GT___$1,f__$1,ch__$1,meta17330));
});

}

return (new cljs.core.async.t_cljs$core$async17329(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17335 = (function (filter_GT_,p,ch,meta17336){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17336 = meta17336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17337,meta17336__$1){
var self__ = this;
var _17337__$1 = this;
return (new cljs.core.async.t_cljs$core$async17335(self__.filter_GT_,self__.p,self__.ch,meta17336__$1));
});

cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17337){
var self__ = this;
var _17337__$1 = this;
return self__.meta17336;
});

cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17336], null);
});

cljs.core.async.t_cljs$core$async17335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17335";

cljs.core.async.t_cljs$core$async17335.cljs$lang$ctorPrWriter = (function (this__6551__auto__,writer__6552__auto__,opt__6553__auto__){
return cljs.core._write(writer__6552__auto__,"cljs.core.async/t_cljs$core$async17335");
});

cljs.core.async.__GT_t_cljs$core$async17335 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17335(filter_GT___$1,p__$1,ch__$1,meta17336){
return (new cljs.core.async.t_cljs$core$async17335(filter_GT___$1,p__$1,ch__$1,meta17336));
});

}

return (new cljs.core.async.t_cljs$core$async17335(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17338 = [];
var len__7014__auto___17382 = arguments.length;
var i__7015__auto___17383 = (0);
while(true){
if((i__7015__auto___17383 < len__7014__auto___17382)){
args17338.push((arguments[i__7015__auto___17383]));

var G__17384 = (i__7015__auto___17383 + (1));
i__7015__auto___17383 = G__17384;
continue;
} else {
}
break;
}

var G__17340 = args17338.length;
switch (G__17340) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17338.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15109__auto___17386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___17386,out){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___17386,out){
return (function (state_17361){
var state_val_17362 = (state_17361[(1)]);
if((state_val_17362 === (7))){
var inst_17357 = (state_17361[(2)]);
var state_17361__$1 = state_17361;
var statearr_17363_17387 = state_17361__$1;
(statearr_17363_17387[(2)] = inst_17357);

(statearr_17363_17387[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17362 === (1))){
var state_17361__$1 = state_17361;
var statearr_17364_17388 = state_17361__$1;
(statearr_17364_17388[(2)] = null);

(statearr_17364_17388[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17362 === (4))){
var inst_17343 = (state_17361[(7)]);
var inst_17343__$1 = (state_17361[(2)]);
var inst_17344 = (inst_17343__$1 == null);
var state_17361__$1 = (function (){var statearr_17365 = state_17361;
(statearr_17365[(7)] = inst_17343__$1);

return statearr_17365;
})();
if(cljs.core.truth_(inst_17344)){
var statearr_17366_17389 = state_17361__$1;
(statearr_17366_17389[(1)] = (5));

} else {
var statearr_17367_17390 = state_17361__$1;
(statearr_17367_17390[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17362 === (6))){
var inst_17343 = (state_17361[(7)]);
var inst_17348 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17343) : p.call(null,inst_17343));
var state_17361__$1 = state_17361;
if(cljs.core.truth_(inst_17348)){
var statearr_17368_17391 = state_17361__$1;
(statearr_17368_17391[(1)] = (8));

} else {
var statearr_17369_17392 = state_17361__$1;
(statearr_17369_17392[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17362 === (3))){
var inst_17359 = (state_17361[(2)]);
var state_17361__$1 = state_17361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17361__$1,inst_17359);
} else {
if((state_val_17362 === (2))){
var state_17361__$1 = state_17361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17361__$1,(4),ch);
} else {
if((state_val_17362 === (11))){
var inst_17351 = (state_17361[(2)]);
var state_17361__$1 = state_17361;
var statearr_17370_17393 = state_17361__$1;
(statearr_17370_17393[(2)] = inst_17351);

(statearr_17370_17393[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17362 === (9))){
var state_17361__$1 = state_17361;
var statearr_17371_17394 = state_17361__$1;
(statearr_17371_17394[(2)] = null);

(statearr_17371_17394[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17362 === (5))){
var inst_17346 = cljs.core.async.close_BANG_(out);
var state_17361__$1 = state_17361;
var statearr_17372_17395 = state_17361__$1;
(statearr_17372_17395[(2)] = inst_17346);

(statearr_17372_17395[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17362 === (10))){
var inst_17354 = (state_17361[(2)]);
var state_17361__$1 = (function (){var statearr_17373 = state_17361;
(statearr_17373[(8)] = inst_17354);

return statearr_17373;
})();
var statearr_17374_17396 = state_17361__$1;
(statearr_17374_17396[(2)] = null);

(statearr_17374_17396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17362 === (8))){
var inst_17343 = (state_17361[(7)]);
var state_17361__$1 = state_17361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17361__$1,(11),out,inst_17343);
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
});})(c__15109__auto___17386,out))
;
return ((function (switch__14995__auto__,c__15109__auto___17386,out){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_17378 = [null,null,null,null,null,null,null,null,null];
(statearr_17378[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_17378[(1)] = (1));

return statearr_17378;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_17361){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_17361);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17379){if((e17379 instanceof Object)){
var ex__14999__auto__ = e17379;
var statearr_17380_17397 = state_17361;
(statearr_17380_17397[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17361);

return cljs.core.cst$kw$recur;
} else {
throw e17379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17398 = state_17361;
state_17361 = G__17398;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_17361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_17361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___17386,out))
})();
var state__15111__auto__ = (function (){var statearr_17381 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___17386);

return statearr_17381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___17386,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17399 = [];
var len__7014__auto___17402 = arguments.length;
var i__7015__auto___17403 = (0);
while(true){
if((i__7015__auto___17403 < len__7014__auto___17402)){
args17399.push((arguments[i__7015__auto___17403]));

var G__17404 = (i__7015__auto___17403 + (1));
i__7015__auto___17403 = G__17404;
continue;
} else {
}
break;
}

var G__17401 = args17399.length;
switch (G__17401) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17399.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15109__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto__){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto__){
return (function (state_17571){
var state_val_17572 = (state_17571[(1)]);
if((state_val_17572 === (7))){
var inst_17567 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17573_17614 = state_17571__$1;
(statearr_17573_17614[(2)] = inst_17567);

(statearr_17573_17614[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (20))){
var inst_17537 = (state_17571[(7)]);
var inst_17548 = (state_17571[(2)]);
var inst_17549 = cljs.core.next(inst_17537);
var inst_17523 = inst_17549;
var inst_17524 = null;
var inst_17525 = (0);
var inst_17526 = (0);
var state_17571__$1 = (function (){var statearr_17574 = state_17571;
(statearr_17574[(8)] = inst_17523);

(statearr_17574[(9)] = inst_17524);

(statearr_17574[(10)] = inst_17525);

(statearr_17574[(11)] = inst_17548);

(statearr_17574[(12)] = inst_17526);

return statearr_17574;
})();
var statearr_17575_17615 = state_17571__$1;
(statearr_17575_17615[(2)] = null);

(statearr_17575_17615[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (1))){
var state_17571__$1 = state_17571;
var statearr_17576_17616 = state_17571__$1;
(statearr_17576_17616[(2)] = null);

(statearr_17576_17616[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (4))){
var inst_17512 = (state_17571[(13)]);
var inst_17512__$1 = (state_17571[(2)]);
var inst_17513 = (inst_17512__$1 == null);
var state_17571__$1 = (function (){var statearr_17577 = state_17571;
(statearr_17577[(13)] = inst_17512__$1);

return statearr_17577;
})();
if(cljs.core.truth_(inst_17513)){
var statearr_17578_17617 = state_17571__$1;
(statearr_17578_17617[(1)] = (5));

} else {
var statearr_17579_17618 = state_17571__$1;
(statearr_17579_17618[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (15))){
var state_17571__$1 = state_17571;
var statearr_17583_17619 = state_17571__$1;
(statearr_17583_17619[(2)] = null);

(statearr_17583_17619[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (21))){
var state_17571__$1 = state_17571;
var statearr_17584_17620 = state_17571__$1;
(statearr_17584_17620[(2)] = null);

(statearr_17584_17620[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (13))){
var inst_17523 = (state_17571[(8)]);
var inst_17524 = (state_17571[(9)]);
var inst_17525 = (state_17571[(10)]);
var inst_17526 = (state_17571[(12)]);
var inst_17533 = (state_17571[(2)]);
var inst_17534 = (inst_17526 + (1));
var tmp17580 = inst_17523;
var tmp17581 = inst_17524;
var tmp17582 = inst_17525;
var inst_17523__$1 = tmp17580;
var inst_17524__$1 = tmp17581;
var inst_17525__$1 = tmp17582;
var inst_17526__$1 = inst_17534;
var state_17571__$1 = (function (){var statearr_17585 = state_17571;
(statearr_17585[(8)] = inst_17523__$1);

(statearr_17585[(9)] = inst_17524__$1);

(statearr_17585[(14)] = inst_17533);

(statearr_17585[(10)] = inst_17525__$1);

(statearr_17585[(12)] = inst_17526__$1);

return statearr_17585;
})();
var statearr_17586_17621 = state_17571__$1;
(statearr_17586_17621[(2)] = null);

(statearr_17586_17621[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (22))){
var state_17571__$1 = state_17571;
var statearr_17587_17622 = state_17571__$1;
(statearr_17587_17622[(2)] = null);

(statearr_17587_17622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (6))){
var inst_17512 = (state_17571[(13)]);
var inst_17521 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17512) : f.call(null,inst_17512));
var inst_17522 = cljs.core.seq(inst_17521);
var inst_17523 = inst_17522;
var inst_17524 = null;
var inst_17525 = (0);
var inst_17526 = (0);
var state_17571__$1 = (function (){var statearr_17588 = state_17571;
(statearr_17588[(8)] = inst_17523);

(statearr_17588[(9)] = inst_17524);

(statearr_17588[(10)] = inst_17525);

(statearr_17588[(12)] = inst_17526);

return statearr_17588;
})();
var statearr_17589_17623 = state_17571__$1;
(statearr_17589_17623[(2)] = null);

(statearr_17589_17623[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (17))){
var inst_17537 = (state_17571[(7)]);
var inst_17541 = cljs.core.chunk_first(inst_17537);
var inst_17542 = cljs.core.chunk_rest(inst_17537);
var inst_17543 = cljs.core.count(inst_17541);
var inst_17523 = inst_17542;
var inst_17524 = inst_17541;
var inst_17525 = inst_17543;
var inst_17526 = (0);
var state_17571__$1 = (function (){var statearr_17590 = state_17571;
(statearr_17590[(8)] = inst_17523);

(statearr_17590[(9)] = inst_17524);

(statearr_17590[(10)] = inst_17525);

(statearr_17590[(12)] = inst_17526);

return statearr_17590;
})();
var statearr_17591_17624 = state_17571__$1;
(statearr_17591_17624[(2)] = null);

(statearr_17591_17624[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (3))){
var inst_17569 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17571__$1,inst_17569);
} else {
if((state_val_17572 === (12))){
var inst_17557 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17592_17625 = state_17571__$1;
(statearr_17592_17625[(2)] = inst_17557);

(statearr_17592_17625[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (2))){
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17571__$1,(4),in$);
} else {
if((state_val_17572 === (23))){
var inst_17565 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17593_17626 = state_17571__$1;
(statearr_17593_17626[(2)] = inst_17565);

(statearr_17593_17626[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (19))){
var inst_17552 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17594_17627 = state_17571__$1;
(statearr_17594_17627[(2)] = inst_17552);

(statearr_17594_17627[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (11))){
var inst_17523 = (state_17571[(8)]);
var inst_17537 = (state_17571[(7)]);
var inst_17537__$1 = cljs.core.seq(inst_17523);
var state_17571__$1 = (function (){var statearr_17595 = state_17571;
(statearr_17595[(7)] = inst_17537__$1);

return statearr_17595;
})();
if(inst_17537__$1){
var statearr_17596_17628 = state_17571__$1;
(statearr_17596_17628[(1)] = (14));

} else {
var statearr_17597_17629 = state_17571__$1;
(statearr_17597_17629[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (9))){
var inst_17559 = (state_17571[(2)]);
var inst_17560 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17571__$1 = (function (){var statearr_17598 = state_17571;
(statearr_17598[(15)] = inst_17559);

return statearr_17598;
})();
if(cljs.core.truth_(inst_17560)){
var statearr_17599_17630 = state_17571__$1;
(statearr_17599_17630[(1)] = (21));

} else {
var statearr_17600_17631 = state_17571__$1;
(statearr_17600_17631[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (5))){
var inst_17515 = cljs.core.async.close_BANG_(out);
var state_17571__$1 = state_17571;
var statearr_17601_17632 = state_17571__$1;
(statearr_17601_17632[(2)] = inst_17515);

(statearr_17601_17632[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (14))){
var inst_17537 = (state_17571[(7)]);
var inst_17539 = cljs.core.chunked_seq_QMARK_(inst_17537);
var state_17571__$1 = state_17571;
if(inst_17539){
var statearr_17602_17633 = state_17571__$1;
(statearr_17602_17633[(1)] = (17));

} else {
var statearr_17603_17634 = state_17571__$1;
(statearr_17603_17634[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (16))){
var inst_17555 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17604_17635 = state_17571__$1;
(statearr_17604_17635[(2)] = inst_17555);

(statearr_17604_17635[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17572 === (10))){
var inst_17524 = (state_17571[(9)]);
var inst_17526 = (state_17571[(12)]);
var inst_17531 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17524,inst_17526);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17571__$1,(13),out,inst_17531);
} else {
if((state_val_17572 === (18))){
var inst_17537 = (state_17571[(7)]);
var inst_17546 = cljs.core.first(inst_17537);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17571__$1,(20),out,inst_17546);
} else {
if((state_val_17572 === (8))){
var inst_17525 = (state_17571[(10)]);
var inst_17526 = (state_17571[(12)]);
var inst_17528 = (inst_17526 < inst_17525);
var inst_17529 = inst_17528;
var state_17571__$1 = state_17571;
if(cljs.core.truth_(inst_17529)){
var statearr_17605_17636 = state_17571__$1;
(statearr_17605_17636[(1)] = (10));

} else {
var statearr_17606_17637 = state_17571__$1;
(statearr_17606_17637[(1)] = (11));

}

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
});})(c__15109__auto__))
;
return ((function (switch__14995__auto__,c__15109__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14996__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14996__auto____0 = (function (){
var statearr_17610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17610[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14996__auto__);

(statearr_17610[(1)] = (1));

return statearr_17610;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14996__auto____1 = (function (state_17571){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_17571);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17611){if((e17611 instanceof Object)){
var ex__14999__auto__ = e17611;
var statearr_17612_17638 = state_17571;
(statearr_17612_17638[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17571);

return cljs.core.cst$kw$recur;
} else {
throw e17611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17639 = state_17571;
state_17571 = G__17639;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14996__auto__ = function(state_17571){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14996__auto____1.call(this,state_17571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14996__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14996__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto__))
})();
var state__15111__auto__ = (function (){var statearr_17613 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto__);

return statearr_17613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto__))
);

return c__15109__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17640 = [];
var len__7014__auto___17643 = arguments.length;
var i__7015__auto___17644 = (0);
while(true){
if((i__7015__auto___17644 < len__7014__auto___17643)){
args17640.push((arguments[i__7015__auto___17644]));

var G__17645 = (i__7015__auto___17644 + (1));
i__7015__auto___17644 = G__17645;
continue;
} else {
}
break;
}

var G__17642 = args17640.length;
switch (G__17642) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17640.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17647 = [];
var len__7014__auto___17650 = arguments.length;
var i__7015__auto___17651 = (0);
while(true){
if((i__7015__auto___17651 < len__7014__auto___17650)){
args17647.push((arguments[i__7015__auto___17651]));

var G__17652 = (i__7015__auto___17651 + (1));
i__7015__auto___17651 = G__17652;
continue;
} else {
}
break;
}

var G__17649 = args17647.length;
switch (G__17649) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17647.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17654 = [];
var len__7014__auto___17705 = arguments.length;
var i__7015__auto___17706 = (0);
while(true){
if((i__7015__auto___17706 < len__7014__auto___17705)){
args17654.push((arguments[i__7015__auto___17706]));

var G__17707 = (i__7015__auto___17706 + (1));
i__7015__auto___17706 = G__17707;
continue;
} else {
}
break;
}

var G__17656 = args17654.length;
switch (G__17656) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17654.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15109__auto___17709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___17709,out){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___17709,out){
return (function (state_17680){
var state_val_17681 = (state_17680[(1)]);
if((state_val_17681 === (7))){
var inst_17675 = (state_17680[(2)]);
var state_17680__$1 = state_17680;
var statearr_17682_17710 = state_17680__$1;
(statearr_17682_17710[(2)] = inst_17675);

(statearr_17682_17710[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17681 === (1))){
var inst_17657 = null;
var state_17680__$1 = (function (){var statearr_17683 = state_17680;
(statearr_17683[(7)] = inst_17657);

return statearr_17683;
})();
var statearr_17684_17711 = state_17680__$1;
(statearr_17684_17711[(2)] = null);

(statearr_17684_17711[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17681 === (4))){
var inst_17660 = (state_17680[(8)]);
var inst_17660__$1 = (state_17680[(2)]);
var inst_17661 = (inst_17660__$1 == null);
var inst_17662 = cljs.core.not(inst_17661);
var state_17680__$1 = (function (){var statearr_17685 = state_17680;
(statearr_17685[(8)] = inst_17660__$1);

return statearr_17685;
})();
if(inst_17662){
var statearr_17686_17712 = state_17680__$1;
(statearr_17686_17712[(1)] = (5));

} else {
var statearr_17687_17713 = state_17680__$1;
(statearr_17687_17713[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17681 === (6))){
var state_17680__$1 = state_17680;
var statearr_17688_17714 = state_17680__$1;
(statearr_17688_17714[(2)] = null);

(statearr_17688_17714[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17681 === (3))){
var inst_17677 = (state_17680[(2)]);
var inst_17678 = cljs.core.async.close_BANG_(out);
var state_17680__$1 = (function (){var statearr_17689 = state_17680;
(statearr_17689[(9)] = inst_17677);

return statearr_17689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17680__$1,inst_17678);
} else {
if((state_val_17681 === (2))){
var state_17680__$1 = state_17680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17680__$1,(4),ch);
} else {
if((state_val_17681 === (11))){
var inst_17660 = (state_17680[(8)]);
var inst_17669 = (state_17680[(2)]);
var inst_17657 = inst_17660;
var state_17680__$1 = (function (){var statearr_17690 = state_17680;
(statearr_17690[(7)] = inst_17657);

(statearr_17690[(10)] = inst_17669);

return statearr_17690;
})();
var statearr_17691_17715 = state_17680__$1;
(statearr_17691_17715[(2)] = null);

(statearr_17691_17715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17681 === (9))){
var inst_17660 = (state_17680[(8)]);
var state_17680__$1 = state_17680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17680__$1,(11),out,inst_17660);
} else {
if((state_val_17681 === (5))){
var inst_17657 = (state_17680[(7)]);
var inst_17660 = (state_17680[(8)]);
var inst_17664 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17660,inst_17657);
var state_17680__$1 = state_17680;
if(inst_17664){
var statearr_17693_17716 = state_17680__$1;
(statearr_17693_17716[(1)] = (8));

} else {
var statearr_17694_17717 = state_17680__$1;
(statearr_17694_17717[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17681 === (10))){
var inst_17672 = (state_17680[(2)]);
var state_17680__$1 = state_17680;
var statearr_17695_17718 = state_17680__$1;
(statearr_17695_17718[(2)] = inst_17672);

(statearr_17695_17718[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17681 === (8))){
var inst_17657 = (state_17680[(7)]);
var tmp17692 = inst_17657;
var inst_17657__$1 = tmp17692;
var state_17680__$1 = (function (){var statearr_17696 = state_17680;
(statearr_17696[(7)] = inst_17657__$1);

return statearr_17696;
})();
var statearr_17697_17719 = state_17680__$1;
(statearr_17697_17719[(2)] = null);

(statearr_17697_17719[(1)] = (2));


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
});})(c__15109__auto___17709,out))
;
return ((function (switch__14995__auto__,c__15109__auto___17709,out){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_17701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17701[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_17701[(1)] = (1));

return statearr_17701;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_17680){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_17680);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17702){if((e17702 instanceof Object)){
var ex__14999__auto__ = e17702;
var statearr_17703_17720 = state_17680;
(statearr_17703_17720[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17680);

return cljs.core.cst$kw$recur;
} else {
throw e17702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17721 = state_17680;
state_17680 = G__17721;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_17680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_17680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___17709,out))
})();
var state__15111__auto__ = (function (){var statearr_17704 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___17709);

return statearr_17704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___17709,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17722 = [];
var len__7014__auto___17792 = arguments.length;
var i__7015__auto___17793 = (0);
while(true){
if((i__7015__auto___17793 < len__7014__auto___17792)){
args17722.push((arguments[i__7015__auto___17793]));

var G__17794 = (i__7015__auto___17793 + (1));
i__7015__auto___17793 = G__17794;
continue;
} else {
}
break;
}

var G__17724 = args17722.length;
switch (G__17724) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17722.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15109__auto___17796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___17796,out){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___17796,out){
return (function (state_17762){
var state_val_17763 = (state_17762[(1)]);
if((state_val_17763 === (7))){
var inst_17758 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
var statearr_17764_17797 = state_17762__$1;
(statearr_17764_17797[(2)] = inst_17758);

(statearr_17764_17797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (1))){
var inst_17725 = (new Array(n));
var inst_17726 = inst_17725;
var inst_17727 = (0);
var state_17762__$1 = (function (){var statearr_17765 = state_17762;
(statearr_17765[(7)] = inst_17727);

(statearr_17765[(8)] = inst_17726);

return statearr_17765;
})();
var statearr_17766_17798 = state_17762__$1;
(statearr_17766_17798[(2)] = null);

(statearr_17766_17798[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (4))){
var inst_17730 = (state_17762[(9)]);
var inst_17730__$1 = (state_17762[(2)]);
var inst_17731 = (inst_17730__$1 == null);
var inst_17732 = cljs.core.not(inst_17731);
var state_17762__$1 = (function (){var statearr_17767 = state_17762;
(statearr_17767[(9)] = inst_17730__$1);

return statearr_17767;
})();
if(inst_17732){
var statearr_17768_17799 = state_17762__$1;
(statearr_17768_17799[(1)] = (5));

} else {
var statearr_17769_17800 = state_17762__$1;
(statearr_17769_17800[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (15))){
var inst_17752 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
var statearr_17770_17801 = state_17762__$1;
(statearr_17770_17801[(2)] = inst_17752);

(statearr_17770_17801[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (13))){
var state_17762__$1 = state_17762;
var statearr_17771_17802 = state_17762__$1;
(statearr_17771_17802[(2)] = null);

(statearr_17771_17802[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (6))){
var inst_17727 = (state_17762[(7)]);
var inst_17748 = (inst_17727 > (0));
var state_17762__$1 = state_17762;
if(cljs.core.truth_(inst_17748)){
var statearr_17772_17803 = state_17762__$1;
(statearr_17772_17803[(1)] = (12));

} else {
var statearr_17773_17804 = state_17762__$1;
(statearr_17773_17804[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (3))){
var inst_17760 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17762__$1,inst_17760);
} else {
if((state_val_17763 === (12))){
var inst_17726 = (state_17762[(8)]);
var inst_17750 = cljs.core.vec(inst_17726);
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17762__$1,(15),out,inst_17750);
} else {
if((state_val_17763 === (2))){
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17762__$1,(4),ch);
} else {
if((state_val_17763 === (11))){
var inst_17742 = (state_17762[(2)]);
var inst_17743 = (new Array(n));
var inst_17726 = inst_17743;
var inst_17727 = (0);
var state_17762__$1 = (function (){var statearr_17774 = state_17762;
(statearr_17774[(7)] = inst_17727);

(statearr_17774[(8)] = inst_17726);

(statearr_17774[(10)] = inst_17742);

return statearr_17774;
})();
var statearr_17775_17805 = state_17762__$1;
(statearr_17775_17805[(2)] = null);

(statearr_17775_17805[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (9))){
var inst_17726 = (state_17762[(8)]);
var inst_17740 = cljs.core.vec(inst_17726);
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17762__$1,(11),out,inst_17740);
} else {
if((state_val_17763 === (5))){
var inst_17730 = (state_17762[(9)]);
var inst_17727 = (state_17762[(7)]);
var inst_17726 = (state_17762[(8)]);
var inst_17735 = (state_17762[(11)]);
var inst_17734 = (inst_17726[inst_17727] = inst_17730);
var inst_17735__$1 = (inst_17727 + (1));
var inst_17736 = (inst_17735__$1 < n);
var state_17762__$1 = (function (){var statearr_17776 = state_17762;
(statearr_17776[(12)] = inst_17734);

(statearr_17776[(11)] = inst_17735__$1);

return statearr_17776;
})();
if(cljs.core.truth_(inst_17736)){
var statearr_17777_17806 = state_17762__$1;
(statearr_17777_17806[(1)] = (8));

} else {
var statearr_17778_17807 = state_17762__$1;
(statearr_17778_17807[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (14))){
var inst_17755 = (state_17762[(2)]);
var inst_17756 = cljs.core.async.close_BANG_(out);
var state_17762__$1 = (function (){var statearr_17780 = state_17762;
(statearr_17780[(13)] = inst_17755);

return statearr_17780;
})();
var statearr_17781_17808 = state_17762__$1;
(statearr_17781_17808[(2)] = inst_17756);

(statearr_17781_17808[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (10))){
var inst_17746 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
var statearr_17782_17809 = state_17762__$1;
(statearr_17782_17809[(2)] = inst_17746);

(statearr_17782_17809[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17763 === (8))){
var inst_17726 = (state_17762[(8)]);
var inst_17735 = (state_17762[(11)]);
var tmp17779 = inst_17726;
var inst_17726__$1 = tmp17779;
var inst_17727 = inst_17735;
var state_17762__$1 = (function (){var statearr_17783 = state_17762;
(statearr_17783[(7)] = inst_17727);

(statearr_17783[(8)] = inst_17726__$1);

return statearr_17783;
})();
var statearr_17784_17810 = state_17762__$1;
(statearr_17784_17810[(2)] = null);

(statearr_17784_17810[(1)] = (2));


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
});})(c__15109__auto___17796,out))
;
return ((function (switch__14995__auto__,c__15109__auto___17796,out){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_17788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17788[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_17788[(1)] = (1));

return statearr_17788;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_17762){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_17762);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17789){if((e17789 instanceof Object)){
var ex__14999__auto__ = e17789;
var statearr_17790_17811 = state_17762;
(statearr_17790_17811[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17762);

return cljs.core.cst$kw$recur;
} else {
throw e17789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17812 = state_17762;
state_17762 = G__17812;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_17762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_17762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___17796,out))
})();
var state__15111__auto__ = (function (){var statearr_17791 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___17796);

return statearr_17791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___17796,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17813 = [];
var len__7014__auto___17887 = arguments.length;
var i__7015__auto___17888 = (0);
while(true){
if((i__7015__auto___17888 < len__7014__auto___17887)){
args17813.push((arguments[i__7015__auto___17888]));

var G__17889 = (i__7015__auto___17888 + (1));
i__7015__auto___17888 = G__17889;
continue;
} else {
}
break;
}

var G__17815 = args17813.length;
switch (G__17815) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17813.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15109__auto___17891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15109__auto___17891,out){
return (function (){
var f__15110__auto__ = (function (){var switch__14995__auto__ = ((function (c__15109__auto___17891,out){
return (function (state_17857){
var state_val_17858 = (state_17857[(1)]);
if((state_val_17858 === (7))){
var inst_17853 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17859_17892 = state_17857__$1;
(statearr_17859_17892[(2)] = inst_17853);

(statearr_17859_17892[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (1))){
var inst_17816 = [];
var inst_17817 = inst_17816;
var inst_17818 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17857__$1 = (function (){var statearr_17860 = state_17857;
(statearr_17860[(7)] = inst_17817);

(statearr_17860[(8)] = inst_17818);

return statearr_17860;
})();
var statearr_17861_17893 = state_17857__$1;
(statearr_17861_17893[(2)] = null);

(statearr_17861_17893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (4))){
var inst_17821 = (state_17857[(9)]);
var inst_17821__$1 = (state_17857[(2)]);
var inst_17822 = (inst_17821__$1 == null);
var inst_17823 = cljs.core.not(inst_17822);
var state_17857__$1 = (function (){var statearr_17862 = state_17857;
(statearr_17862[(9)] = inst_17821__$1);

return statearr_17862;
})();
if(inst_17823){
var statearr_17863_17894 = state_17857__$1;
(statearr_17863_17894[(1)] = (5));

} else {
var statearr_17864_17895 = state_17857__$1;
(statearr_17864_17895[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (15))){
var inst_17847 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17865_17896 = state_17857__$1;
(statearr_17865_17896[(2)] = inst_17847);

(statearr_17865_17896[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (13))){
var state_17857__$1 = state_17857;
var statearr_17866_17897 = state_17857__$1;
(statearr_17866_17897[(2)] = null);

(statearr_17866_17897[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (6))){
var inst_17817 = (state_17857[(7)]);
var inst_17842 = inst_17817.length;
var inst_17843 = (inst_17842 > (0));
var state_17857__$1 = state_17857;
if(cljs.core.truth_(inst_17843)){
var statearr_17867_17898 = state_17857__$1;
(statearr_17867_17898[(1)] = (12));

} else {
var statearr_17868_17899 = state_17857__$1;
(statearr_17868_17899[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (3))){
var inst_17855 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17857__$1,inst_17855);
} else {
if((state_val_17858 === (12))){
var inst_17817 = (state_17857[(7)]);
var inst_17845 = cljs.core.vec(inst_17817);
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17857__$1,(15),out,inst_17845);
} else {
if((state_val_17858 === (2))){
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17857__$1,(4),ch);
} else {
if((state_val_17858 === (11))){
var inst_17821 = (state_17857[(9)]);
var inst_17825 = (state_17857[(10)]);
var inst_17835 = (state_17857[(2)]);
var inst_17836 = [];
var inst_17837 = inst_17836.push(inst_17821);
var inst_17817 = inst_17836;
var inst_17818 = inst_17825;
var state_17857__$1 = (function (){var statearr_17869 = state_17857;
(statearr_17869[(11)] = inst_17835);

(statearr_17869[(7)] = inst_17817);

(statearr_17869[(12)] = inst_17837);

(statearr_17869[(8)] = inst_17818);

return statearr_17869;
})();
var statearr_17870_17900 = state_17857__$1;
(statearr_17870_17900[(2)] = null);

(statearr_17870_17900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (9))){
var inst_17817 = (state_17857[(7)]);
var inst_17833 = cljs.core.vec(inst_17817);
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17857__$1,(11),out,inst_17833);
} else {
if((state_val_17858 === (5))){
var inst_17821 = (state_17857[(9)]);
var inst_17825 = (state_17857[(10)]);
var inst_17818 = (state_17857[(8)]);
var inst_17825__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17821) : f.call(null,inst_17821));
var inst_17826 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17825__$1,inst_17818);
var inst_17827 = cljs.core.keyword_identical_QMARK_(inst_17818,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17828 = (inst_17826) || (inst_17827);
var state_17857__$1 = (function (){var statearr_17871 = state_17857;
(statearr_17871[(10)] = inst_17825__$1);

return statearr_17871;
})();
if(cljs.core.truth_(inst_17828)){
var statearr_17872_17901 = state_17857__$1;
(statearr_17872_17901[(1)] = (8));

} else {
var statearr_17873_17902 = state_17857__$1;
(statearr_17873_17902[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (14))){
var inst_17850 = (state_17857[(2)]);
var inst_17851 = cljs.core.async.close_BANG_(out);
var state_17857__$1 = (function (){var statearr_17875 = state_17857;
(statearr_17875[(13)] = inst_17850);

return statearr_17875;
})();
var statearr_17876_17903 = state_17857__$1;
(statearr_17876_17903[(2)] = inst_17851);

(statearr_17876_17903[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (10))){
var inst_17840 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17877_17904 = state_17857__$1;
(statearr_17877_17904[(2)] = inst_17840);

(statearr_17877_17904[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17858 === (8))){
var inst_17821 = (state_17857[(9)]);
var inst_17817 = (state_17857[(7)]);
var inst_17825 = (state_17857[(10)]);
var inst_17830 = inst_17817.push(inst_17821);
var tmp17874 = inst_17817;
var inst_17817__$1 = tmp17874;
var inst_17818 = inst_17825;
var state_17857__$1 = (function (){var statearr_17878 = state_17857;
(statearr_17878[(7)] = inst_17817__$1);

(statearr_17878[(8)] = inst_17818);

(statearr_17878[(14)] = inst_17830);

return statearr_17878;
})();
var statearr_17879_17905 = state_17857__$1;
(statearr_17879_17905[(2)] = null);

(statearr_17879_17905[(1)] = (2));


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
});})(c__15109__auto___17891,out))
;
return ((function (switch__14995__auto__,c__15109__auto___17891,out){
return (function() {
var cljs$core$async$state_machine__14996__auto__ = null;
var cljs$core$async$state_machine__14996__auto____0 = (function (){
var statearr_17883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17883[(0)] = cljs$core$async$state_machine__14996__auto__);

(statearr_17883[(1)] = (1));

return statearr_17883;
});
var cljs$core$async$state_machine__14996__auto____1 = (function (state_17857){
while(true){
var ret_value__14997__auto__ = (function (){try{while(true){
var result__14998__auto__ = switch__14995__auto__(state_17857);
if(cljs.core.keyword_identical_QMARK_(result__14998__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14998__auto__;
}
break;
}
}catch (e17884){if((e17884 instanceof Object)){
var ex__14999__auto__ = e17884;
var statearr_17885_17906 = state_17857;
(statearr_17885_17906[(5)] = ex__14999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17857);

return cljs.core.cst$kw$recur;
} else {
throw e17884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14997__auto__,cljs.core.cst$kw$recur)){
var G__17907 = state_17857;
state_17857 = G__17907;
continue;
} else {
return ret_value__14997__auto__;
}
break;
}
});
cljs$core$async$state_machine__14996__auto__ = function(state_17857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14996__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14996__auto____1.call(this,state_17857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14996__auto____0;
cljs$core$async$state_machine__14996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14996__auto____1;
return cljs$core$async$state_machine__14996__auto__;
})()
;})(switch__14995__auto__,c__15109__auto___17891,out))
})();
var state__15111__auto__ = (function (){var statearr_17886 = (f__15110__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15110__auto__.cljs$core$IFn$_invoke$arity$0() : f__15110__auto__.call(null));
(statearr_17886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15109__auto___17891);

return statearr_17886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15111__auto__);
});})(c__15109__auto___17891,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
