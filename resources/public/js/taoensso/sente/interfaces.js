// Compiled by ClojureScript 0.0-2356
goog.provide('taoensso.sente.interfaces');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
taoensso.sente.interfaces.IPacker = (function (){var obj12372 = {};return obj12372;
})();
taoensso.sente.interfaces.pack = (function pack(_,x){if((function (){var and__3452__auto__ = _;if(and__3452__auto__)
{return _.taoensso$sente$interfaces$IPacker$pack$arity$2;
} else
{return and__3452__auto__;
}
})())
{return _.taoensso$sente$interfaces$IPacker$pack$arity$2(_,x);
} else
{var x__4100__auto__ = (((_ == null))?null:_);return (function (){var or__3464__auto__ = (taoensso.sente.interfaces.pack[goog.typeOf(x__4100__auto__)]);if(or__3464__auto__)
{return or__3464__auto__;
} else
{var or__3464__auto____$1 = (taoensso.sente.interfaces.pack["_"]);if(or__3464__auto____$1)
{return or__3464__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPacker.pack",_);
}
}
})().call(null,_,x);
}
});
taoensso.sente.interfaces.unpack = (function unpack(_,x){if((function (){var and__3452__auto__ = _;if(and__3452__auto__)
{return _.taoensso$sente$interfaces$IPacker$unpack$arity$2;
} else
{return and__3452__auto__;
}
})())
{return _.taoensso$sente$interfaces$IPacker$unpack$arity$2(_,x);
} else
{var x__4100__auto__ = (((_ == null))?null:_);return (function (){var or__3464__auto__ = (taoensso.sente.interfaces.unpack[goog.typeOf(x__4100__auto__)]);if(or__3464__auto__)
{return or__3464__auto__;
} else
{var or__3464__auto____$1 = (taoensso.sente.interfaces.unpack["_"]);if(or__3464__auto____$1)
{return or__3464__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPacker.unpack",_);
}
}
})().call(null,_,x);
}
});

/**
* @constructor
*/
taoensso.sente.interfaces.EdnPacker = (function (){
})
taoensso.sente.interfaces.EdnPacker.cljs$lang$type = true;
taoensso.sente.interfaces.EdnPacker.cljs$lang$ctorStr = "taoensso.sente.interfaces/EdnPacker";
taoensso.sente.interfaces.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4040__auto__,writer__4041__auto__,opt__4042__auto__){return cljs.core._write.call(null,writer__4041__auto__,"taoensso.sente.interfaces/EdnPacker");
});
taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;
taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){var self__ = this;
var ___$1 = this;return cljs.core.pr_str.call(null,x);
});
taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return cljs.reader.read_string.call(null,s);
});
taoensso.sente.interfaces.__GT_EdnPacker = (function __GT_EdnPacker(){return (new taoensso.sente.interfaces.EdnPacker());
});
/**
* Default Edn packer.
*/
taoensso.sente.interfaces.edn_packer = taoensso.sente.interfaces.__GT_EdnPacker.call(null);
taoensso.sente.interfaces.coerce_packer = (function coerce_packer(x){if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885)))
{return taoensso.sente.interfaces.edn_packer;
} else
{if((function (){var G__12374 = x;if(G__12374)
{var bit__4127__auto__ = null;if(cljs.core.truth_((function (){var or__3464__auto__ = bit__4127__auto__;if(cljs.core.truth_(or__3464__auto__))
{return or__3464__auto__;
} else
{return G__12374.taoensso$sente$interfaces$IPacker$;
}
})()))
{return true;
} else
{if((!G__12374.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,G__12374);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,G__12374);
}
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IPacker","IPacker",266151414,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))));
}
return x;
}
});
