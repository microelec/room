// Compiled by ClojureScript 0.0-2356
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.sente.interfaces');
goog.require('taoensso.sente.interfaces');
goog.require('taoensso.encore');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
taoensso.sente.tracef = taoensso.encore.tracef;
taoensso.sente.debugf = taoensso.encore.debugf;
taoensso.sente.infof = taoensso.encore.infof;
taoensso.sente.warnf = taoensso.encore.warnf;
taoensso.sente.errorf = taoensso.encore.errorf;
taoensso.sente.set_logging_level_BANG_ = (function set_logging_level_BANG_(level){return cljs.core.reset_BANG_.call(null,taoensso.encore.logging_level,level);
});
/**
* Alpha - subject to change.
* Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
* Ref. https://developers.google.com/closure/library/docs/xhrio.
* 
* (ajax-call "/my-post-route"
* {:method     :post
* :params     {:username "Rich Hickey"
* :type     "Awesome"}
* :headers    {"Foo" "Bar"}
* :resp-type  :text
* :timeout-ms 7000}
* (fn async-callback [resp-map]
* (let [{:keys [?status ?error ?content ?content-type]} resp-map]
* ;; ?status - 200, 404, ..., or nil on no response
* ;; ?error  - e/o #{:xhr-pool-depleted :exception :http-error :abort
* ;;                 :timeout <http-error-status> nil}
* (js/alert (str "Ajax response: " resp-map)))))
*/
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
taoensso.sente.validate_event = (function validate_event(x){if(!(cljs.core.vector_QMARK_.call(null,x)))
{return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else
{if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x))))
{return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else
{var vec__11982 = x;var ev_id = cljs.core.nth.call(null,vec__11982,(0),null);var _ = cljs.core.nth.call(null,vec__11982,(1),null);if(!((ev_id instanceof cljs.core.Keyword)))
{return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else
{if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id)))
{return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else
{return null;

}
}

}
}
});
/**
* Valid [ev-id ?ev-data] form?
*/
taoensso.sente.event_QMARK_ = (function event_QMARK_(x){return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function as_event(x){if(taoensso.sente.event_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function assert_event(x){var temp__4126__auto__ = taoensso.sente.validate_event.call(null,x);if(cljs.core.truth_(temp__4126__auto__))
{var _QMARK_err = temp__4126__auto__;var err_fmt = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11984 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);switch (G__11984) {
case "else":
return "Malformed event (unknown error).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-type":
return "Malformed event (wrong type).";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err))));

}
})())+" Event should be of `[ev-id ?ev-data]` form: %s");throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else
{return null;
}
});
taoensso.sente.chan_QMARK_ = (function chan_QMARK_(x){return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.sente.event_msg_QMARK_ = (function event_msg_QMARK_(x){var and__3452__auto__ = cljs.core.map_QMARK_.call(null,x);if(and__3452__auto__)
{var and__3452__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));if(and__3452__auto____$1)
{var map__11991 = x;var map__11991__$1 = ((cljs.core.seq_QMARK_.call(null,map__11991))?cljs.core.apply.call(null,cljs.core.hash_map,map__11991):map__11991);var event = cljs.core.get.call(null,map__11991__$1,new cljs.core.Keyword(null,"event","event",301435442));var state = cljs.core.get.call(null,map__11991__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn = cljs.core.get.call(null,map__11991__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv = cljs.core.get.call(null,map__11991__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));return (taoensso.sente.chan_QMARK_.call(null,ch_recv)) && (cljs.core.ifn_QMARK_.call(null,send_fn)) && (taoensso.encore.atom_QMARK_.call(null,state)) && (taoensso.sente.event_QMARK_.call(null,event));
} else
{return and__3452__auto____$1;
}
} else
{return and__3452__auto__;
}
});
/**
* Note that cb reply need _not_ be `event` form!
*/
taoensso.sente.cb_success_QMARK_ = (function cb_success_QMARK_(cb_reply_clj){return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
* pstr->clj
*/
taoensso.sente.unpack_STAR_ = (function unpack_STAR_(packer,pstr){try{if(typeof pstr === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"pstr","pstr",221763868,null)))))));
}
return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e11993){var t = e11993;taoensso.sente.debugf.call(null,"Bad package: %s (%s)",pstr,t);
throw t;
}});
taoensso.sente.with__QMARK_meta = (function with__QMARK_meta(x,_QMARK_m){if(cljs.core.seq.call(null,_QMARK_m))
{return cljs.core.with_meta.call(null,x,_QMARK_m);
} else
{return x;
}
});
/**
* clj->prefixed-pstr
*/
taoensso.sente.pack_STAR_ = (function() {
var pack_STAR_ = null;
var pack_STAR___3 = (function (packer,_QMARK_packer_meta,clj){return ("-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta))));
});
var pack_STAR___4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));return ("+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta))));
});
pack_STAR_ = function(packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
switch(arguments.length){
case 3:
return pack_STAR___3.call(this,packer,_QMARK_packer_meta,clj);
case 4:
return pack_STAR___4.call(this,packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pack_STAR_.cljs$core$IFn$_invoke$arity$3 = pack_STAR___3;
pack_STAR_.cljs$core$IFn$_invoke$arity$4 = pack_STAR___4;
return pack_STAR_;
})()
;
/**
* @param {...*} var_args
*/
taoensso.sente.pack = (function() { 
var pack__delegate = function (args){var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);taoensso.sente.tracef.call(null,"Packing: %s -> %s",args,pstr);
return pstr;
};
var pack = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pack__delegate.call(this,args);};
pack.cljs$lang$maxFixedArity = 0;
pack.cljs$lang$applyTo = (function (arglist__11994){
var args = cljs.core.seq(arglist__11994);
return pack__delegate(args);
});
pack.cljs$core$IFn$_invoke$arity$variadic = pack__delegate;
return pack;
})()
;
/**
* prefixed-pstr->[clj ?cb-uuid]
*/
taoensso.sente.unpack = (function unpack(packer,prefixed_pstr){if(typeof prefixed_pstr === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null)))))));
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);var wrapped_QMARK_ = (function (){var G__11998 = prefix;switch (G__11998) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix))));

}
})();var vec__11997 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));var clj__$1 = cljs.core.nth.call(null,vec__11997,(0),null);var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__11997,(1),null);var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);taoensso.sente.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.IChSocket = (function (){var obj12001 = {};return obj12001;
})();
taoensso.sente.chsk_init_BANG_ = (function chsk_init_BANG_(chsk){if((function (){var and__3452__auto__ = chsk;if(and__3452__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1;
} else
{return and__3452__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else
{var x__4100__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3464__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__4100__auto__)]);if(or__3464__auto__)
{return or__3464__auto__;
} else
{var or__3464__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);if(or__3464__auto____$1)
{return or__3464__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.chsk_destroy_BANG_ = (function chsk_destroy_BANG_(chsk){if((function (){var and__3452__auto__ = chsk;if(and__3452__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1;
} else
{return and__3452__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else
{var x__4100__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3464__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__4100__auto__)]);if(or__3464__auto__)
{return or__3464__auto__;
} else
{var or__3464__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);if(or__3464__auto____$1)
{return or__3464__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.chsk_reconnect_BANG_ = (function chsk_reconnect_BANG_(chsk){if((function (){var and__3452__auto__ = chsk;if(and__3452__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1;
} else
{return and__3452__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else
{var x__4100__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3464__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__4100__auto__)]);if(or__3464__auto__)
{return or__3464__auto__;
} else
{var or__3464__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);if(or__3464__auto____$1)
{return or__3464__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.chsk_send_BANG__STAR_ = (function chsk_send_BANG__STAR_(chsk,ev,opts){if((function (){var and__3452__auto__ = chsk;if(and__3452__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3;
} else
{return and__3452__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else
{var x__4100__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3464__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__4100__auto__)]);if(or__3464__auto__)
{return or__3464__auto__;
} else
{var or__3464__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);if(or__3464__auto____$1)
{return or__3464__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
})().call(null,chsk,ev,opts);
}
});
/**
* Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
*/
taoensso.sente.chsk_send_BANG_ = (function() {
var chsk_send_BANG_ = null;
var chsk_send_BANG___2 = (function (chsk,ev){return chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});
var chsk_send_BANG___3 = (function (chsk,ev,opts){taoensso.sente.tracef.call(null,"Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev);
return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});
var chsk_send_BANG___4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){return chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});
chsk_send_BANG_ = function(chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
switch(arguments.length){
case 2:
return chsk_send_BANG___2.call(this,chsk,ev);
case 3:
return chsk_send_BANG___3.call(this,chsk,ev,_QMARK_timeout_ms);
case 4:
return chsk_send_BANG___4.call(this,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = chsk_send_BANG___2;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = chsk_send_BANG___3;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = chsk_send_BANG___4;
return chsk_send_BANG_;
})()
;
taoensso.sente.assert_send_args = (function assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){taoensso.sente.assert_event.call(null,x);
if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("encore","nneg-int?","encore/nneg-int?",1565384456,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)))))))));
}
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.sente.chan_QMARK_.call(null,_QMARK_cb)))
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",1219428,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))))))));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){if(cljs.core.truth_(_QMARK_cb_uuid))
{return cljs.core.first.call(null,cljs.core.swap_BANG_.call(null,cbs_waiting_,(function (p__12004){var vec__12005 = p__12004;var _ = cljs.core.nth.call(null,vec__12005,(0),null);var m = cljs.core.nth.call(null,vec__12005,(1),null);var temp__4124__auto__ = m.call(null,_QMARK_cb_uuid);if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.dissoc.call(null,m,_QMARK_cb_uuid)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
}
})));
} else
{return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function merge_GT_chsk_state_BANG_(p__12006,merge_state){var map__12009 = p__12006;var map__12009__$1 = ((cljs.core.seq_QMARK_.call(null,map__12009))?cljs.core.apply.call(null,cljs.core.hash_map,map__12009):map__12009);var chsk = map__12009__$1;var state_ = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"state_","state_",957667102));var chs = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"chs","chs",376886120));var vec__12010 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__12009,map__12009__$1,chsk,state_,chs){
return (function (old_state){var new_state = cljs.core.merge.call(null,old_state,merge_state);return taoensso.encore.swapped.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
});})(map__12009,map__12009__$1,chsk,state_,chs))
);var old_state = cljs.core.nth.call(null,vec__12010,(0),null);var new_state = cljs.core.nth.call(null,vec__12010,(1),null);if(cljs.core.not_EQ_.call(null,old_state,new_state))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);
return new_state;
} else
{return null;
}
});
/**
* Experimental, undocumented. Allows a core.async channel to be provided
* instead of a cb-fn. The channel will receive values of form
* [<event-id>.cb <reply>].
*/
taoensso.sente.cb_chan_as_fn = (function cb_chan_as_fn(_QMARK_cb,ev){if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)))
{return _QMARK_cb;
} else
{if(taoensso.sente.chan_QMARK_.call(null,_QMARK_cb))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",1219428,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))));
}
taoensso.sente.assert_event.call(null,ev);
var vec__12012 = ev;var ev_id = cljs.core.nth.call(null,vec__12012,(0),null);var _ = cljs.core.nth.call(null,vec__12012,(1),null);var cb_ch = _QMARK_cb;return ((function (vec__12012,ev_id,_,cb_ch){
return (function (reply){return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.fq_name.call(null,ev_id))+".cb")),reply], null));
});
;})(vec__12012,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(ch_recv,clj){taoensso.sente.tracef.call(null,"receive-buffered-evs!: %s",clj);
if(cljs.core.vector_QMARK_.call(null,clj))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"clj","clj",980036099,null)))))));
}
var buffered_evs = clj;var seq__12017 = cljs.core.seq.call(null,buffered_evs);var chunk__12018 = null;var count__12019 = (0);var i__12020 = (0);while(true){
if((i__12020 < count__12019))
{var ev = cljs.core._nth.call(null,chunk__12018,i__12020);taoensso.sente.assert_event.call(null,ev);
cljs.core.async.put_BANG_.call(null,ch_recv,ev);
{
var G__12021 = seq__12017;
var G__12022 = chunk__12018;
var G__12023 = count__12019;
var G__12024 = (i__12020 + (1));
seq__12017 = G__12021;
chunk__12018 = G__12022;
count__12019 = G__12023;
i__12020 = G__12024;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12017);if(temp__4126__auto__)
{var seq__12017__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12017__$1))
{var c__4233__auto__ = cljs.core.chunk_first.call(null,seq__12017__$1);{
var G__12025 = cljs.core.chunk_rest.call(null,seq__12017__$1);
var G__12026 = c__4233__auto__;
var G__12027 = cljs.core.count.call(null,c__4233__auto__);
var G__12028 = (0);
seq__12017 = G__12025;
chunk__12018 = G__12026;
count__12019 = G__12027;
i__12020 = G__12028;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__12017__$1);taoensso.sente.assert_event.call(null,ev);
cljs.core.async.put_BANG_.call(null,ch_recv,ev);
{
var G__12029 = cljs.core.next.call(null,seq__12017__$1);
var G__12030 = null;
var G__12031 = (0);
var G__12032 = (0);
seq__12017 = G__12029;
chunk__12018 = G__12030;
count__12019 = G__12031;
i__12020 = G__12032;
continue;
}
}
} else
{return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function handle_when_handshake_BANG_(chsk,clj){taoensso.sente.tracef.call(null,"handle-when-handshake!: %s",clj);
if((cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686))))
{var vec__12035 = clj;var _ = cljs.core.nth.call(null,vec__12035,(0),null);var vec__12036 = cljs.core.nth.call(null,vec__12035,(1),null);var uid = cljs.core.nth.call(null,vec__12036,(0),null);var csrf_token = cljs.core.nth.call(null,vec__12036,(1),null);if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,csrf_token)))
{taoensso.sente.warnf.call(null,"Sente warning: NO CSRF TOKEN AVAILABLE");
} else
{}
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null));
return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function() { 
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__12037){var vec__12039 = p__12037;var nattempt = cljs.core.nth.call(null,vec__12039,(0),null);return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3464__auto__ = nattempt;if(cljs.core.truth_(or__3464__auto__))
{return or__3464__auto__;
} else
{return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__12037 = null;if (arguments.length > 1) {
  p__12037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__12037);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__12040){
var nullary_f = cljs.core.first(arglist__12040);
var p__12037 = cljs.core.rest(arglist__12040);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__12037);
});
set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_exp_backoff_timeout_BANG___delegate;
return set_exp_backoff_timeout_BANG_;
})()
;

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChWebSocket = (function (url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,__meta,__extmap){
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>10){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4059__auto__,k__4060__auto__){var self__ = this;
var this__4059__auto____$1 = this;return cljs.core._lookup.call(null,this__4059__auto____$1,k__4060__auto__,null);
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4061__auto__,k12042,else__4062__auto__){var self__ = this;
var this__4061__auto____$1 = this;var G__12044 = (((k12042 instanceof cljs.core.Keyword))?k12042.fqn:null);switch (G__12044) {
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12042,else__4062__auto__);

}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4073__auto__,writer__4074__auto__,opts__4075__auto__){var self__ = this;
var this__4073__auto____$1 = this;var pr_pair__4076__auto__ = ((function (this__4073__auto____$1){
return (function (keyval__4077__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4074__auto__,cljs.core.pr_writer,""," ","",opts__4075__auto__,keyval__4077__auto__);
});})(this__4073__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4074__auto__,pr_pair__4076__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4057__auto__){var self__ = this;
var this__4057__auto____$1 = this;return self__.__meta;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4053__auto__){var self__ = this;
var this__4053__auto____$1 = this;return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4063__auto__){var self__ = this;
var this__4063__auto____$1 = this;return (10 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4054__auto__){var self__ = this;
var this__4054__auto____$1 = this;var h__3875__auto__ = self__.__hash;if(!((h__3875__auto__ == null)))
{return h__3875__auto__;
} else
{var h__3875__auto____$1 = cljs.core.hash_imap.call(null,this__4054__auto____$1);self__.__hash = h__3875__auto____$1;
return h__3875__auto____$1;
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4055__auto__,other__4056__auto__){var self__ = this;
var this__4055__auto____$1 = this;if(cljs.core.truth_((function (){var and__3452__auto__ = other__4056__auto__;if(cljs.core.truth_(and__3452__auto__))
{return ((this__4055__auto____$1.constructor === other__4056__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4055__auto____$1,other__4056__auto__));
} else
{return and__3452__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4068__auto__,k__4069__auto__){var self__ = this;
var this__4068__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4069__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4068__auto____$1),self__.__meta),k__4069__auto__);
} else
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4069__auto__)),null));
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4066__auto__,k__4067__auto__,G__12041){var self__ = this;
var this__4066__auto____$1 = this;var pred__12045 = cljs.core.keyword_identical_QMARK_;var expr__12046 = k__4067__auto__;if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__12046)))
{return (new taoensso.sente.ChWebSocket(G__12041,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,G__12041,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,G__12041,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,G__12041,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__12041,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__12041,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__12041,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__12041,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__12041,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12045.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__12046)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__12041,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4067__auto__,G__12041),null));
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
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4058__auto__,G__12041){var self__ = this;
var this__4058__auto____$1 = this;return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__12041,self__.__extmap,self__.__hash));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4064__auto__,entry__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4065__auto__))
{return cljs.core._assoc.call(null,this__4064__auto____$1,cljs.core._nth.call(null,entry__4065__auto__,(0)),cljs.core._nth.call(null,entry__4065__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4064__auto____$1,entry__4065__auto__);
}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__12048){var self__ = this;
var map__12049 = p__12048;var map__12049__$1 = ((cljs.core.seq_QMARK_.call(null,map__12049))?cljs.core.apply.call(null,cljs.core.hash_map,map__12049):map__12049);var opts = map__12049__$1;var flush_QMARK_ = cljs.core.get.call(null,map__12049__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));var _QMARK_timeout_ms = cljs.core.get.call(null,map__12049__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));var _QMARK_cb = cljs.core.get.call(null,map__12049__$1,new cljs.core.Keyword(null,"cb","cb",589947841));var chsk__$1 = this;taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))))
{taoensso.sente.warnf.call(null,"Chsk send against closed chsk.");
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else
{return null;
}
} else
{var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);if(cljs.core.truth_(_QMARK_cb_uuid))
{cljs.core.swap_BANG_.call(null,self__.cbs_waiting_,((function (_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__12049,map__12049__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (p__12050){var vec__12051 = p__12050;var _ = cljs.core.nth.call(null,vec__12051,(0),null);var m = cljs.core.nth.call(null,vec__12051,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,_QMARK_cb_uuid,_QMARK_cb_fn)], null);
});})(_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__12049,map__12049__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);
if(cljs.core.truth_(_QMARK_timeout_ms))
{var c__6391__auto___12084 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___12084,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__12049,map__12049__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){var f__6392__auto__ = (function (){var switch__6326__auto__ = ((function (c__6391__auto___12084,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__12049,map__12049__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (state_12062){var state_val_12063 = (state_12062[(1)]);if((state_val_12063 === (5)))
{var inst_12060 = (state_12062[(2)]);var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12062__$1,inst_12060);
} else
{if((state_val_12063 === (4)))
{var state_12062__$1 = state_12062;var statearr_12064_12085 = state_12062__$1;(statearr_12064_12085[(2)] = null);
(statearr_12064_12085[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (3)))
{var inst_12055 = (state_12062[(7)]);var inst_12057 = inst_12055.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));var state_12062__$1 = state_12062;var statearr_12065_12086 = state_12062__$1;(statearr_12065_12086[(2)] = inst_12057);
(statearr_12065_12086[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (2)))
{var inst_12055 = (state_12062[(7)]);var inst_12054 = (state_12062[(2)]);var inst_12055__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);var state_12062__$1 = (function (){var statearr_12066 = state_12062;(statearr_12066[(8)] = inst_12054);
(statearr_12066[(7)] = inst_12055__$1);
return statearr_12066;
})();if(cljs.core.truth_(inst_12055__$1))
{var statearr_12067_12087 = state_12062__$1;(statearr_12067_12087[(1)] = (3));
} else
{var statearr_12068_12088 = state_12062__$1;(statearr_12068_12088[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (1)))
{var inst_12052 = cljs.core.async.timeout.call(null,_QMARK_timeout_ms);var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12062__$1,(2),inst_12052);
} else
{return null;
}
}
}
}
}
});})(c__6391__auto___12084,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__12049,map__12049__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
;return ((function (switch__6326__auto__,c__6391__auto___12084,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__12049,map__12049__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function() {
var state_machine__6327__auto__ = null;
var state_machine__6327__auto____0 = (function (){var statearr_12072 = [null,null,null,null,null,null,null,null,null];(statearr_12072[(0)] = state_machine__6327__auto__);
(statearr_12072[(1)] = (1));
return statearr_12072;
});
var state_machine__6327__auto____1 = (function (state_12062){while(true){
var ret_value__6328__auto__ = (function (){try{while(true){
var result__6329__auto__ = switch__6326__auto__.call(null,state_12062);if(cljs.core.keyword_identical_QMARK_.call(null,result__6329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6329__auto__;
}
break;
}
}catch (e12073){if((e12073 instanceof Object))
{var ex__6330__auto__ = e12073;var statearr_12074_12089 = state_12062;(statearr_12074_12089[(5)] = ex__6330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12073;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12090 = state_12062;
state_12062 = G__12090;
continue;
}
} else
{return ret_value__6328__auto__;
}
break;
}
});
state_machine__6327__auto__ = function(state_12062){
switch(arguments.length){
case 0:
return state_machine__6327__auto____0.call(this);
case 1:
return state_machine__6327__auto____1.call(this,state_12062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6327__auto____0;
state_machine__6327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6327__auto____1;
return state_machine__6327__auto__;
})()
;})(switch__6326__auto__,c__6391__auto___12084,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__12049,map__12049__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
})();var state__6393__auto__ = (function (){var statearr_12075 = f__6392__auto__.call(null);(statearr_12075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___12084);
return statearr_12075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___12084,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__12049,map__12049__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);
} else
{}
} else
{}
try{cljs.core.deref.call(null,self__.socket_).send(ppstr);
cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);
return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e12076){if((e12076 instanceof Error))
{var e = e12076;taoensso.sente.errorf.call(null,"Chsk send error: %s",e);
if(cljs.core.truth_(_QMARK_cb_uuid))
{var cb_fn_STAR__12091 = (function (){var or__3464__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);if(cljs.core.truth_(or__3464__auto__))
{return or__3464__auto__;
} else
{return _QMARK_cb_fn;
}
})();cb_fn_STAR__12091.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else
{}
return false;
} else
{throw e12076;

}
}}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = cljs.core.deref.call(null,self__.socket_);if(cljs.core.truth_(temp__4126__auto__))
{var s = temp__4126__auto__;return s.close();
} else
{return null;
}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return taoensso.sente.chsk_reconnect_BANG_.call(null,chsk__$1);
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = (function (){var or__3464__auto__ = (window["WebSocket"]);if(cljs.core.truth_(or__3464__auto__))
{return or__3464__auto__;
} else
{return (window["MozWebSocket"]);
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var WebSocket = temp__4126__auto__;((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function connect_BANG_(){if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))))
{return null;
} else
{var retry_BANG_ = ((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function (){var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));
taoensso.sente.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);
return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4126__auto__,chsk__$1))
;var temp__4124__auto__ = (function (){try{return (new WebSocket(self__.url));
}catch (e12080){if((e12080 instanceof Error))
{var e = e12080;taoensso.sente.errorf.call(null,"WebSocket js/Error: %s",e);
return null;
} else
{throw e12080;

}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var socket = temp__4124__auto__;return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__12081 = socket;(G__12081["onerror"] = ((function (G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){return taoensso.sente.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__12081["onmessage"] = ((function (G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){var ppstr = (ws_ev["data"]);var vec__12082 = taoensso.sente.unpack.call(null,self__.packer,ppstr);var clj = cljs.core.nth.call(null,vec__12082,(0),null);var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__12082,(1),null);var or__3464__auto__ = (function (){var and__3452__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);if(cljs.core.truth_(and__3452__auto__))
{return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else
{return and__3452__auto__;
}
})();if(cljs.core.truth_(or__3464__auto__))
{return or__3464__auto__;
} else
{if(cljs.core.truth_(_QMARK_cb_uuid))
{var temp__4124__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);if(cljs.core.truth_(temp__4124__auto____$1))
{var cb_fn = temp__4124__auto____$1;return cb_fn.call(null,clj);
} else
{return taoensso.sente.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else
{var buffered_evs = clj;return taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs);
}
}
});})(G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__12081["onopen"] = ((function (G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__)))
{taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else
{}
return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__12081["onclose"] = ((function (G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return retry_BANG_.call(null);
});})(G__12081,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
return G__12081;
})());
} else
{return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4126__auto__,chsk__$1))
.call(null);
return chsk__$1;
} else
{return null;
}
});
taoensso.sente.ChWebSocket.cljs$lang$type = true;
taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4093__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});
taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4093__auto__,writer__4094__auto__){return cljs.core._write.call(null,writer__4094__auto__,"taoensso.sente/ChWebSocket");
});
taoensso.sente.__GT_ChWebSocket = (function __GT_ChWebSocket(url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer){return (new taoensso.sente.ChWebSocket(url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer));
});
taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__12043){return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__12043),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__12043),null,cljs.core.dissoc.call(null,G__12043,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544))));
});

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} timeout_ms
* @param {*} ajax_client_uuid
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChAjaxSocket = (function (url,chs,timeout_ms,ajax_client_uuid,curr_xhr_,state_,packer,__meta,__extmap){
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_client_uuid = ajax_client_uuid;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4059__auto__,k__4060__auto__){var self__ = this;
var this__4059__auto____$1 = this;return cljs.core._lookup.call(null,this__4059__auto____$1,k__4060__auto__,null);
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4061__auto__,k12093,else__4062__auto__){var self__ = this;
var this__4061__auto____$1 = this;var G__12095 = (((k12093 instanceof cljs.core.Keyword))?k12093.fqn:null);switch (G__12095) {
case "packer":
return self__.packer;

break;
case "state_":
return self__.state_;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ajax-client-uuid":
return self__.ajax_client_uuid;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "chs":
return self__.chs;

break;
case "url":
return self__.url;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12093,else__4062__auto__);

}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4073__auto__,writer__4074__auto__,opts__4075__auto__){var self__ = this;
var this__4073__auto____$1 = this;var pr_pair__4076__auto__ = ((function (this__4073__auto____$1){
return (function (keyval__4077__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4074__auto__,cljs.core.pr_writer,""," ","",opts__4075__auto__,keyval__4077__auto__);
});})(this__4073__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4074__auto__,pr_pair__4076__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4057__auto__){var self__ = this;
var this__4057__auto____$1 = this;return self__.__meta;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4053__auto__){var self__ = this;
var this__4053__auto____$1 = this;return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4063__auto__){var self__ = this;
var this__4063__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4054__auto__){var self__ = this;
var this__4054__auto____$1 = this;var h__3875__auto__ = self__.__hash;if(!((h__3875__auto__ == null)))
{return h__3875__auto__;
} else
{var h__3875__auto____$1 = cljs.core.hash_imap.call(null,this__4054__auto____$1);self__.__hash = h__3875__auto____$1;
return h__3875__auto____$1;
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4055__auto__,other__4056__auto__){var self__ = this;
var this__4055__auto____$1 = this;if(cljs.core.truth_((function (){var and__3452__auto__ = other__4056__auto__;if(cljs.core.truth_(and__3452__auto__))
{return ((this__4055__auto____$1.constructor === other__4056__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4055__auto____$1,other__4056__auto__));
} else
{return and__3452__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4068__auto__,k__4069__auto__){var self__ = this;
var this__4068__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4069__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4068__auto____$1),self__.__meta),k__4069__auto__);
} else
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4069__auto__)),null));
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4066__auto__,k__4067__auto__,G__12092){var self__ = this;
var this__4066__auto____$1 = this;var pred__12096 = cljs.core.keyword_identical_QMARK_;var expr__12097 = k__4067__auto__;if(cljs.core.truth_(pred__12096.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__12097)))
{return (new taoensso.sente.ChAjaxSocket(G__12092,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12096.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__12097)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,G__12092,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12096.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__12097)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,G__12092,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12096.call(null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),expr__12097)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,G__12092,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12096.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__12097)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,G__12092,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12096.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__12097)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,G__12092,self__.packer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12096.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__12097)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,G__12092,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4067__auto__,G__12092),null));
}
}
}
}
}
}
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4058__auto__,G__12092){var self__ = this;
var this__4058__auto____$1 = this;return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,G__12092,self__.__extmap,self__.__hash));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4064__auto__,entry__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4065__auto__))
{return cljs.core._assoc.call(null,this__4064__auto____$1,cljs.core._nth.call(null,entry__4065__auto__,(0)),cljs.core._nth.call(null,entry__4065__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4064__auto____$1,entry__4065__auto__);
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__12099){var self__ = this;
var map__12100 = p__12099;var map__12100__$1 = ((cljs.core.seq_QMARK_.call(null,map__12100))?cljs.core.apply.call(null,cljs.core.hash_map,map__12100):map__12100);var opts = map__12100__$1;var flush_QMARK_ = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));var _QMARK_timeout_ms = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));var _QMARK_cb = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"cb","cb",589947841));var chsk__$1 = this;taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))))
{taoensso.sente.warnf.call(null,"Chsk send against closed chsk.");
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else
{return null;
}
} else
{taoensso.sente.ajax_call.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))], null);
})()], null),((function (_QMARK_cb_fn,chsk__$1,map__12100,map__12100__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function ajax_cb(p__12101){var map__12104 = p__12101;var map__12104__$1 = ((cljs.core.seq_QMARK_.call(null,map__12104))?cljs.core.apply.call(null,cljs.core.hash_map,map__12104):map__12104);var _QMARK_content = cljs.core.get.call(null,map__12104__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));var _QMARK_error = cljs.core.get.call(null,map__12104__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));if(cljs.core.truth_(_QMARK_error))
{if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318)))
{if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else
{return null;
}
} else
{taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else
{return null;
}
}
} else
{var content = _QMARK_content;var resp_ppstr = content;var vec__12105 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);var resp_clj = cljs.core.nth.call(null,vec__12105,(0),null);var _ = cljs.core.nth.call(null,vec__12105,(1),null);if(cljs.core.truth_(_QMARK_cb_fn))
{_QMARK_cb_fn.call(null,resp_clj);
} else
{if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)))
{taoensso.sente.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else
{}
}
return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__12100,map__12100__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);
return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);if(cljs.core.truth_(temp__4126__auto__))
{var x = temp__4126__auto__;return x.abort();
} else
{return null;
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return taoensso.sente.chsk_reconnect_BANG_.call(null,chsk__$1);
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;((function (chsk__$1){
return (function async_poll_for_update_BANG_(nattempt){taoensso.sente.tracef.call(null,"async-poll-for-update!");
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))))
{return null;
} else
{var retry_BANG_ = ((function (chsk__$1){
return (function (){var nattempt_STAR_ = (nattempt + (1));taoensso.sente.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);
return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;var ajax_req_BANG_ = ((function (retry_BANG_,chsk__$1){
return (function (){return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_call.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid], null)], null),((function (retry_BANG_,chsk__$1){
return (function ajax_cb(p__12111){var map__12114 = p__12111;var map__12114__$1 = ((cljs.core.seq_QMARK_.call(null,map__12114))?cljs.core.apply.call(null,cljs.core.hash_map,map__12114):map__12114);var _QMARK_content = cljs.core.get.call(null,map__12114__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));var _QMARK_error = cljs.core.get.call(null,map__12114__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));if(cljs.core.truth_(_QMARK_error))
{if((cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))) || (cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"abort","abort",521193198))))
{return async_poll_for_update_BANG_.call(null,(0));
} else
{taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return retry_BANG_.call(null);
}
} else
{var content = _QMARK_content;var ppstr = content;var vec__12115 = taoensso.sente.unpack.call(null,self__.packer,ppstr);var clj = cljs.core.nth.call(null,vec__12115,(0),null);var _ = cljs.core.nth.call(null,vec__12115,(1),null);var or__3464__auto___12117 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);if(cljs.core.truth_(or__3464__auto___12117))
{} else
{var buffered_evs_12118 = clj;taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs_12118);
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
return async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
});})(retry_BANG_,chsk__$1))
;var temp__4124__auto__ = (window["Pace"]);if(cljs.core.truth_(temp__4124__auto__))
{var pace = temp__4124__auto__;return pace.ignore(ajax_req_BANG_);
} else
{return ajax_req_BANG_.call(null);
}
}
});})(chsk__$1))
.call(null,(0));
return chsk__$1;
});
taoensso.sente.ChAjaxSocket.cljs$lang$type = true;
taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4093__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});
taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4093__auto__,writer__4094__auto__){return cljs.core._write.call(null,writer__4094__auto__,"taoensso.sente/ChAjaxSocket");
});
taoensso.sente.__GT_ChAjaxSocket = (function __GT_ChAjaxSocket(url,chs,timeout_ms,ajax_client_uuid,curr_xhr_,state_,packer){return (new taoensso.sente.ChAjaxSocket(url,chs,timeout_ms,ajax_client_uuid,curr_xhr_,state_,packer));
});
taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__12094){return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__12094),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__12094),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__12094),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580).cljs$core$IFn$_invoke$arity$1(G__12094),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__12094),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__12094),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__12094),null,cljs.core.dissoc.call(null,G__12094,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544))));
});
/**
* (ƒ [path window-location websocket?]) -> server-side chsk route URL string.
* 
* * path       - As provided to client-side `make-channel-socket!` fn
* (usu. "/chsk").
* * websocket? - True for WebSocket connections, false for Ajax (long-polling)
* connections.
* * window-location - Map with keys:
* :href     ; "http://www.example.org:80/foo/bar?q=baz#bang"
* :protocol ; "http:" ; Note the :
* :hostname ; "example.org"
* :host     ; "example.org:80"
* :pathname ; "/foo/bar"
* :search   ; "?q=baz"
* :hash     ; "#bang"
* 
* Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
* routes should be configured accordingly.
*/
taoensso.sente.default_chsk_url_fn = (function default_chsk_url_fn(path,p__12119,websocket_QMARK_){var map__12121 = p__12119;var map__12121__$1 = ((cljs.core.seq_QMARK_.call(null,map__12121))?cljs.core.apply.call(null,cljs.core.hash_map,map__12121):map__12121);var window_location = map__12121__$1;var pathname = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));var host = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"host","host",-1558485167));var protocol = cljs.core.get.call(null,map__12121__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:")))+"//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3464__auto__ = path;if(cljs.core.truth_(or__3464__auto__))
{return or__3464__auto__;
} else
{return pathname;
}
})()));
});
/**
* Returns a map with keys:
* :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
* ; May `put!` (inject) arbitrary `event`s to this channel.
* :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
* :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
* :chsk    ; IChSocket implementer. You can usu. ignore this.
* 
* Common options:
* :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
* :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
* ; number of milliseconds.
* :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''.
* :chsk-url-fn  ; Please see `default-chsk-url-fn` for details.
* :packer       ; :edn (default), or an IPacker implementation (experimental).
* @param {...*} var_args
*/
taoensso.sente.make_channel_socket_BANG_ = (function() { 
var make_channel_socket_BANG___delegate = function (path,p__12122){var vec__12127 = p__12122;var map__12128 = cljs.core.nth.call(null,vec__12127,(0),null);var map__12128__$1 = ((cljs.core.seq_QMARK_.call(null,map__12128))?cljs.core.apply.call(null,cljs.core.hash_map,map__12128):map__12128);var opts = map__12128__$1;var packer = cljs.core.get.call(null,map__12128__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));var chsk_url_fn = cljs.core.get.call(null,map__12128__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);var lp_timeout_ms = cljs.core.get.call(null,map__12128__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));var ws_kalive_ms = cljs.core.get.call(null,map__12128__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));var recv_buf_or_n = cljs.core.get.call(null,map__12128__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));var type = cljs.core.get.call(null,map__12128__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));var _deprecated_more_opts = cljs.core.nth.call(null,vec__12127,(1),null);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null).call(null,type)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Symbol(null,"type","type",-1480165421,null)))))));
}
if(!((_deprecated_more_opts == null)))
{taoensso.sente.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else
{}
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302)))
{taoensso.sente.warnf.call(null,":lp-timeout opt has CHANGED; please use :lp-timout-ms.");
} else
{}
var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);var window_location = taoensso.encore.get_window_location.call(null);var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);var ever_opened_QMARK__ = cljs.core.atom.call(null,false);var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__12127,map__12128,map__12128__$1,opts,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){if(cljs.core.truth_((function (){var or__3464__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));if(or__3464__auto__)
{return or__3464__auto__;
} else
{return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})()))
{return state;
} else
{cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__12127,map__12128,map__12128__$1,opts,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12127,map__12128,map__12128__$1,opts,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12127,map__12128,map__12128__$1,opts,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12127,map__12128,map__12128__$1,opts,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12127,map__12128,map__12128__$1,opts,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs))], null));var chsk = (function (){var or__3464__auto__ = (function (){var and__3452__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));if(and__3452__auto__)
{return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,cljs.core.atom.call(null,null),chsk_url_fn.call(null,path,window_location,new cljs.core.Keyword(null,"ws","ws",86841443)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null)),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else
{return and__3452__auto__;
}
})();if(cljs.core.truth_(or__3464__auto__))
{return or__3464__auto__;
} else
{var and__3452__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));if(and__3452__auto__)
{var ajax_client_uuid = taoensso.encore.uuid_str.call(null);return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"url","url",276297046),chsk_url_fn.call(null,path,window_location,cljs.core.not.call(null,new cljs.core.Keyword(null,"ws","ws",86841443))),new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),lp_timeout_ms,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),ajax_client_uuid,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))], null)));
} else
{return and__3452__auto__;
}
}
})();var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,send_fn,vec__12127,map__12128,map__12128__$1,opts,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function ev__GT_ev_msg(ev){var vec__12130 = taoensso.sente.as_event.call(null,ev);var ev_id = cljs.core.nth.call(null,vec__12130,(0),null);var ev__QMARK_data = cljs.core.nth.call(null,vec__12130,(1),null);var ev__$1 = vec__12130;return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,send_fn,vec__12127,map__12128,map__12128__$1,opts,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,public_ch_recv);if(cljs.core.truth_(chsk))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else
{return null;
}
};
var make_channel_socket_BANG_ = function (path,var_args){
var p__12122 = null;if (arguments.length > 1) {
  p__12122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_channel_socket_BANG___delegate.call(this,path,p__12122);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__12131){
var path = cljs.core.first(arglist__12131);
var p__12122 = cljs.core.rest(arglist__12131);
return make_channel_socket_BANG___delegate(path,p__12122);
});
make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = make_channel_socket_BANG___delegate;
return make_channel_socket_BANG_;
})()
;
/**
* Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
* `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
* write their own loop against `ch-recv`.
* @param {...*} var_args
*/
taoensso.sente.start_chsk_router_BANG_ = (function() { 
var start_chsk_router_BANG___delegate = function (ch_recv,event_msg_handler,p__12132){var vec__12236 = p__12132;var map__12237 = cljs.core.nth.call(null,vec__12236,(0),null);var map__12237__$1 = ((cljs.core.seq_QMARK_.call(null,map__12237))?cljs.core.apply.call(null,cljs.core.hash_map,map__12237):map__12237);var opts = map__12237__$1;var trace_evs_QMARK_ = cljs.core.get.call(null,map__12237__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));var ch_ctrl = cljs.core.async.chan.call(null);var c__6391__auto___12339 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6391__auto___12339,ch_ctrl,vec__12236,map__12237,map__12237__$1,opts,trace_evs_QMARK_){
return (function (){var f__6392__auto__ = (function (){var switch__6326__auto__ = ((function (c__6391__auto___12339,ch_ctrl,vec__12236,map__12237,map__12237__$1,opts,trace_evs_QMARK_){
return (function (state_12296){var state_val_12297 = (state_12296[(1)]);if((state_val_12297 === (7)))
{var inst_12249 = (state_12296[(2)]);var inst_12250 = cljs.core.nth.call(null,inst_12249,(0),null);var inst_12251 = cljs.core.nth.call(null,inst_12249,(1),null);var inst_12252 = taoensso.encore.kw_identical_QMARK_.call(null,inst_12251,ch_ctrl);var state_12296__$1 = (function (){var statearr_12298 = state_12296;(statearr_12298[(7)] = inst_12250);
return statearr_12298;
})();if(cljs.core.truth_(inst_12252))
{var statearr_12299_12340 = state_12296__$1;(statearr_12299_12340[(1)] = (8));
} else
{var statearr_12300_12341 = state_12296__$1;(statearr_12300_12341[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (20)))
{var inst_12262 = (state_12296[(8)]);var inst_12276 = taoensso.sente.errorf.call(null,"Bad event: %s",inst_12262);var state_12296__$1 = state_12296;var statearr_12301_12342 = state_12296__$1;(statearr_12301_12342[(2)] = inst_12276);
(statearr_12301_12342[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (1)))
{var state_12296__$1 = state_12296;var statearr_12302_12343 = state_12296__$1;(statearr_12302_12343[(2)] = null);
(statearr_12302_12343[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (24)))
{var state_12296__$1 = state_12296;var statearr_12303_12344 = state_12296__$1;(statearr_12303_12344[(2)] = null);
(statearr_12303_12344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (4)))
{var inst_12286 = (state_12296[(2)]);var inst_12287 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_12286);var state_12296__$1 = state_12296;if(cljs.core.truth_(inst_12287))
{var statearr_12304_12345 = state_12296__$1;(statearr_12304_12345[(1)] = (23));
} else
{var statearr_12305_12346 = state_12296__$1;(statearr_12305_12346[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (15)))
{var inst_12262 = (state_12296[(8)]);var inst_12263 = (state_12296[(2)]);var inst_12264 = taoensso.sente.errorf.call(null,"Chsk router handling error: %s",inst_12262);var state_12296__$1 = (function (){var statearr_12306 = state_12296;(statearr_12306[(9)] = inst_12263);
return statearr_12306;
})();var statearr_12307_12347 = state_12296__$1;(statearr_12307_12347[(2)] = inst_12264);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12296__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (21)))
{var inst_12261 = (state_12296[(10)]);var inst_12278 = event_msg_handler.call(null,inst_12261);var state_12296__$1 = state_12296;var statearr_12308_12348 = state_12296__$1;(statearr_12308_12348[(2)] = inst_12278);
(statearr_12308_12348[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (13)))
{var inst_12261 = (state_12296[(10)]);var inst_12261__$1 = (state_12296[(2)]);var inst_12262 = cljs.core.get.call(null,inst_12261__$1,new cljs.core.Keyword(null,"event","event",301435442));var state_12296__$1 = (function (){var statearr_12309 = state_12296;(statearr_12309[(8)] = inst_12262);
(statearr_12309[(10)] = inst_12261__$1);
return statearr_12309;
})();var statearr_12310_12349 = state_12296__$1;(statearr_12310_12349[(2)] = null);
(statearr_12310_12349[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (22)))
{var inst_12280 = (state_12296[(2)]);var state_12296__$1 = (function (){var statearr_12311 = state_12296;(statearr_12311[(11)] = inst_12280);
return statearr_12311;
})();var statearr_12312_12350 = state_12296__$1;(statearr_12312_12350[(2)] = null);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12296__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (6)))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12296,(5),new cljs.core.Keyword(null,"default","default",-1987822328),null,(4));var inst_12245 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12246 = [ch_recv,ch_ctrl];var inst_12247 = (new cljs.core.PersistentVector(null,2,(5),inst_12245,inst_12246,null));var state_12296__$1 = state_12296;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12296__$1,(7),inst_12247);
} else
{if((state_val_12297 === (25)))
{var inst_12292 = (state_12296[(2)]);var state_12296__$1 = state_12296;var statearr_12313_12351 = state_12296__$1;(statearr_12313_12351[(2)] = inst_12292);
(statearr_12313_12351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (17)))
{var inst_12262 = (state_12296[(8)]);var inst_12269 = taoensso.sente.tracef.call(null,"Pre-handler event: %s",inst_12262);var state_12296__$1 = state_12296;var statearr_12314_12352 = state_12296__$1;(statearr_12314_12352[(2)] = inst_12269);
(statearr_12314_12352[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (3)))
{var inst_12294 = (state_12296[(2)]);var state_12296__$1 = state_12296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12296__$1,inst_12294);
} else
{if((state_val_12297 === (12)))
{var inst_12250 = (state_12296[(7)]);var state_12296__$1 = state_12296;var statearr_12315_12353 = state_12296__$1;(statearr_12315_12353[(2)] = inst_12250);
(statearr_12315_12353[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (2)))
{var state_12296__$1 = state_12296;var statearr_12316_12354 = state_12296__$1;(statearr_12316_12354[(2)] = null);
(statearr_12316_12354[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (23)))
{var state_12296__$1 = state_12296;var statearr_12317_12355 = state_12296__$1;(statearr_12317_12355[(2)] = null);
(statearr_12317_12355[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (19)))
{var inst_12261 = (state_12296[(10)]);var inst_12272 = (state_12296[(2)]);var inst_12273 = taoensso.sente.event_msg_QMARK_.call(null,inst_12261);var inst_12274 = !(inst_12273);var state_12296__$1 = (function (){var statearr_12318 = state_12296;(statearr_12318[(12)] = inst_12272);
return statearr_12318;
})();if(inst_12274)
{var statearr_12319_12356 = state_12296__$1;(statearr_12319_12356[(1)] = (20));
} else
{var statearr_12320_12357 = state_12296__$1;(statearr_12320_12357[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (11)))
{var inst_12250 = (state_12296[(7)]);var inst_12258 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12250);var state_12296__$1 = state_12296;var statearr_12321_12358 = state_12296__$1;(statearr_12321_12358[(2)] = inst_12258);
(statearr_12321_12358[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (9)))
{var inst_12250 = (state_12296[(7)]);var inst_12256 = cljs.core.seq_QMARK_.call(null,inst_12250);var state_12296__$1 = state_12296;if(inst_12256)
{var statearr_12322_12359 = state_12296__$1;(statearr_12322_12359[(1)] = (11));
} else
{var statearr_12323_12360 = state_12296__$1;(statearr_12323_12360[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (5)))
{var inst_12239 = (state_12296[(2)]);var inst_12240 = taoensso.sente.errorf.call(null,"Chsk router channel error!");var state_12296__$1 = (function (){var statearr_12324 = state_12296;(statearr_12324[(13)] = inst_12239);
return statearr_12324;
})();var statearr_12325_12361 = state_12296__$1;(statearr_12325_12361[(2)] = inst_12240);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12296__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (14)))
{var inst_12282 = (state_12296[(2)]);var state_12296__$1 = state_12296;var statearr_12326_12362 = state_12296__$1;(statearr_12326_12362[(2)] = inst_12282);
(statearr_12326_12362[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (16)))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12296,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));var state_12296__$1 = state_12296;if(cljs.core.truth_(trace_evs_QMARK_))
{var statearr_12327_12363 = state_12296__$1;(statearr_12327_12363[(1)] = (17));
} else
{var statearr_12328_12364 = state_12296__$1;(statearr_12328_12364[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (10)))
{var inst_12284 = (state_12296[(2)]);var state_12296__$1 = state_12296;var statearr_12329_12365 = state_12296__$1;(statearr_12329_12365[(2)] = inst_12284);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12296__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (18)))
{var state_12296__$1 = state_12296;var statearr_12330_12366 = state_12296__$1;(statearr_12330_12366[(2)] = null);
(statearr_12330_12366[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12297 === (8)))
{var state_12296__$1 = state_12296;var statearr_12331_12367 = state_12296__$1;(statearr_12331_12367[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));
(statearr_12331_12367[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6391__auto___12339,ch_ctrl,vec__12236,map__12237,map__12237__$1,opts,trace_evs_QMARK_))
;return ((function (switch__6326__auto__,c__6391__auto___12339,ch_ctrl,vec__12236,map__12237,map__12237__$1,opts,trace_evs_QMARK_){
return (function() {
var state_machine__6327__auto__ = null;
var state_machine__6327__auto____0 = (function (){var statearr_12335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12335[(0)] = state_machine__6327__auto__);
(statearr_12335[(1)] = (1));
return statearr_12335;
});
var state_machine__6327__auto____1 = (function (state_12296){while(true){
var ret_value__6328__auto__ = (function (){try{while(true){
var result__6329__auto__ = switch__6326__auto__.call(null,state_12296);if(cljs.core.keyword_identical_QMARK_.call(null,result__6329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6329__auto__;
}
break;
}
}catch (e12336){if((e12336 instanceof Object))
{var ex__6330__auto__ = e12336;var statearr_12337_12368 = state_12296;(statearr_12337_12368[(5)] = ex__6330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12296);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12369 = state_12296;
state_12296 = G__12369;
continue;
}
} else
{return ret_value__6328__auto__;
}
break;
}
});
state_machine__6327__auto__ = function(state_12296){
switch(arguments.length){
case 0:
return state_machine__6327__auto____0.call(this);
case 1:
return state_machine__6327__auto____1.call(this,state_12296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6327__auto____0;
state_machine__6327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6327__auto____1;
return state_machine__6327__auto__;
})()
;})(switch__6326__auto__,c__6391__auto___12339,ch_ctrl,vec__12236,map__12237,map__12237__$1,opts,trace_evs_QMARK_))
})();var state__6393__auto__ = (function (){var statearr_12338 = f__6392__auto__.call(null);(statearr_12338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6391__auto___12339);
return statearr_12338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6393__auto__);
});})(c__6391__auto___12339,ch_ctrl,vec__12236,map__12237,map__12237__$1,opts,trace_evs_QMARK_))
);
return ((function (ch_ctrl,vec__12236,map__12237,map__12237__$1,opts,trace_evs_QMARK_){
return (function stop_BANG_(){return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__12236,map__12237,map__12237__$1,opts,trace_evs_QMARK_))
};
var start_chsk_router_BANG_ = function (ch_recv,event_msg_handler,var_args){
var p__12132 = null;if (arguments.length > 2) {
  p__12132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return start_chsk_router_BANG___delegate.call(this,ch_recv,event_msg_handler,p__12132);};
start_chsk_router_BANG_.cljs$lang$maxFixedArity = 2;
start_chsk_router_BANG_.cljs$lang$applyTo = (function (arglist__12370){
var ch_recv = cljs.core.first(arglist__12370);
arglist__12370 = cljs.core.next(arglist__12370);
var event_msg_handler = cljs.core.first(arglist__12370);
var p__12132 = cljs.core.rest(arglist__12370);
return start_chsk_router_BANG___delegate(ch_recv,event_msg_handler,p__12132);
});
start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = start_chsk_router_BANG___delegate;
return start_chsk_router_BANG_;
})()
;
/**
* DEPRECATED: Please use `start-chsk-router!` instead.
*/
taoensso.sente.start_chsk_router_loop_BANG_ = (function start_chsk_router_loop_BANG_(event_handler,ch_recv){return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
