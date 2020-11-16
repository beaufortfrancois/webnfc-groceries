function k(r,t,i,s){var e=u();if(s)for(var o=0;o<s.length;o++)e=s[o](e);var n=t(function(c){e.initializeInstanceElements(c,a.elements)},i),a=e.decorateClass(b(n.d.map(w)),r);return e.initializeClassElements(n.F,a.elements),e.runClassFinishers(n.F,a.finishers)}function u(){u=function(){return r};var r={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,i){["method","field"].forEach(function(s){i.forEach(function(e){e.kind===s&&e.placement==="own"&&this.defineClassElement(t,e)},this)},this)},initializeClassElements:function(t,i){var s=t.prototype;["method","field"].forEach(function(e){i.forEach(function(o){var n=o.placement;if(o.kind===e&&(n==="static"||n==="prototype")){var a=n==="static"?t:s;this.defineClassElement(a,o)}},this)},this)},defineClassElement:function(t,i){var s=i.descriptor;if(i.kind==="field"){var e=i.initializer;s={enumerable:s.enumerable,writable:s.writable,configurable:s.configurable,value:e===void 0?void 0:e.call(t)}}Object.defineProperty(t,i.key,s)},decorateClass:function(t,i){var s=[],e=[],o={static:[],prototype:[],own:[]};if(t.forEach(function(a){this.addElementPlacement(a,o)},this),t.forEach(function(a){if(!d(a))return s.push(a);var l=this.decorateElement(a,o);s.push(l.element),s.push.apply(s,l.extras),e.push.apply(e,l.finishers)},this),!i)return{elements:s,finishers:e};var n=this.decorateConstructor(s,i);return e.push.apply(e,n.finishers),n.finishers=e,n},addElementPlacement:function(t,i,s){var e=i[t.placement];if(!s&&e.indexOf(t.key)!==-1)throw new TypeError("Duplicated element ("+t.key+")");e.push(t.key)},decorateElement:function(t,i){for(var s=[],e=[],o=t.decorators,n=o.length-1;n>=0;n--){var a=i[t.placement];a.splice(a.indexOf(t.key),1);var l=this.fromElementDescriptor(t),c=this.toElementFinisherExtras((0,o[n])(l)||l);t=c.element,this.addElementPlacement(t,i),c.finisher&&e.push(c.finisher);var h=c.extras;if(h){for(var p=0;p<h.length;p++)this.addElementPlacement(h[p],i);s.push.apply(s,h)}}return{element:t,finishers:e,extras:s}},decorateConstructor:function(t,i){for(var s=[],e=i.length-1;e>=0;e--){var o=this.fromClassDescriptor(t),n=this.toClassDescriptor((0,i[e])(o)||o);if(n.finisher!==void 0&&s.push(n.finisher),n.elements!==void 0){t=n.elements;for(var a=0;a<t.length-1;a++)for(var l=a+1;l<t.length;l++)if(t[a].key===t[l].key&&t[a].placement===t[l].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:s}},fromElementDescriptor:function(t){var i={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor},s={value:"Descriptor",configurable:!0};return Object.defineProperty(i,Symbol.toStringTag,s),t.kind==="field"&&(i.initializer=t.initializer),i},toElementDescriptors:function(t){return t===void 0?void 0:_(t).map(function(i){var s=this.toElementDescriptor(i);return this.disallowProperty(i,"finisher","An element descriptor"),this.disallowProperty(i,"extras","An element descriptor"),s},this)},toElementDescriptor:function(t){var i=String(t.kind);if(i!=="method"&&i!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+i+'"');var s=m(t.key),e=String(t.placement);if(e!=="static"&&e!=="prototype"&&e!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+e+'"');var o=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var n={kind:i,key:s,placement:e,descriptor:Object.assign({},o)};return i!=="field"?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=t.initializer),n},toElementFinisherExtras:function(t){var i=this.toElementDescriptor(t),s=y(t,"finisher"),e=this.toElementDescriptors(t.extras);return{element:i,finisher:s,extras:e}},fromClassDescriptor:function(t){var i={kind:"class",elements:t.map(this.fromElementDescriptor,this)},s={value:"Descriptor",configurable:!0};return Object.defineProperty(i,Symbol.toStringTag,s),i},toClassDescriptor:function(t){var i=String(t.kind);if(i!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+i+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var s=y(t,"finisher"),e=this.toElementDescriptors(t.elements);return{elements:e,finisher:s}},runClassFinishers:function(t,i){for(var s=0;s<i.length;s++){var e=(0,i[s])(t);if(e!==void 0){if(typeof e!="function")throw new TypeError("Finishers must return a constructor.");t=e}}return t},disallowProperty:function(t,i,s){if(t[i]!==void 0)throw new TypeError(s+" can't have a ."+i+" property.")}};return r}function w(r){var t=m(r.key),i;r.kind==="method"?i={value:r.value,writable:!0,configurable:!0,enumerable:!1}:r.kind==="get"?i={get:r.value,configurable:!0,enumerable:!1}:r.kind==="set"?i={set:r.value,configurable:!0,enumerable:!1}:r.kind==="field"&&(i={configurable:!0,writable:!0,enumerable:!0});var s={kind:r.kind==="field"?"field":"method",key:t,placement:r.static?"static":r.kind==="field"?"own":"prototype",descriptor:i};return r.decorators&&(s.decorators=r.decorators),r.kind==="field"&&(s.initializer=r.value),s}function g(r,t){r.descriptor.get!==void 0?t.descriptor.get=r.descriptor.get:t.descriptor.set=r.descriptor.set}function b(r){for(var t=[],i=function(n){return n.kind==="method"&&n.key===e.key&&n.placement===e.placement},s=0;s<r.length;s++){var e=r[s],o;if(e.kind==="method"&&(o=t.find(i)))if(f(e.descriptor)||f(o.descriptor)){if(d(e)||d(o))throw new ReferenceError("Duplicated methods ("+e.key+") can't be decorated.");o.descriptor=e.descriptor}else{if(d(e)){if(d(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+e.key+").");o.decorators=e.decorators}g(e,o)}else t.push(e)}return t}function d(r){return r.decorators&&r.decorators.length}function f(r){return r!==void 0&&!(r.value===void 0&&r.writable===void 0)}function y(r,t){var i=r[t];if(i!==void 0&&typeof i!="function")throw new TypeError("Expected '"+t+"' to be a function");return i}function m(r){var t=E(r,"string");return typeof t=="symbol"?t:String(t)}function E(r,t){if(typeof r!="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function _(r){return S(r)||D(r)||T(r)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(r,t){if(!r)return;if(typeof r=="string")return v(r,t);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return v(r,t)}function v(r,t){(t==null||t>r.length)&&(t=r.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=r[i];return s}function D(r){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(r))return Array.from(r)}function S(r){if(Array.isArray(r))return r}import{LitElement as C,html as A,css as x,customElement as X}from"../web_modules/lit-element.js";import{style as I}from"./mwc-list-item-css.js";const M=.4,z=5;class L{constructor(){this._recentTouchMoves=[],this._timeWindow=50}_pruneHistory(r){const t=this._recentTouchMoves.findIndex(i=>i.timeStamp>r-this._timeWindow);this._recentTouchMoves.splice(0,t+1)}update(r){this._pruneHistory(r.timeStamp),this._recentTouchMoves.push(r);const t=this._recentTouchMoves[0],i=r.clientX-t.clientX,s=r.timeStamp-t.timeStamp;return{velocityX:s>0?i/s:0}}}export let DismissableItem=k([X("dismissable-item")],function(r,t){class i extends t{constructor(){super();r(this),this.scroller=null,this.position=0,this.itemIndex=0,this.width=0,this.state="initial",this.addEventListener("touchstart",this,{passive:!0}),this.addEventListener("touchmove",this,{passive:!0}),this.addEventListener("touchend",this,{passive:!0}),this.addEventListener("pointerdown",this,{passive:!0}),this.addEventListener("pointermove",this,{passive:!0}),this.addEventListener("pointerup",this,{passive:!0})}}return{F:i,d:[{kind:"field",static:!0,key:"styles",value(){return[I,x`
      :host {
        overflow: hidden;
      }
      #contentWrapper {
        contain: content;
        will-change: transform, opacity;
        background-color: var(--item-bg-color);
        width: 100%;
        height: 100%;
      }
    `]}},{kind:"method",key:"render",value:function(){return A`
      <div id="contentWrapper" class="mdc-list-item">
        <slot></slot>
      </div>
    `}},{kind:"method",key:"firstUpdated",value:function(){this.wrapper=this.shadowRoot.querySelector("#contentWrapper")}},{kind:"method",key:"disconnectedCallback",value:function(){this.scroller=null}},{kind:"method",key:"handleEvent",value:function(e){if(e.pointerType&&e.pointerType!=="touch")return;switch(e.type){case"pointerdown":this._onPointerDown(e);break;case"pointermove":e.pressure&&(this.setPointerCapture(e.pointerId),this._onPointerPan(e));break;case"pointerup":this.releasePointerCapture(e.pointerId),this._onPointerUp(e);break;case"touchstart":this._onPointerDown(e.changedTouches[0]);break;case"touchmove":this._onPointerPan(e.changedTouches[0]);break;case"touchend":this._onPointerUp(e.changedTouches[0]);break}}},{kind:"method",key:"setPosition",value:function(e){this.position=e,this.width=this.offsetWidth,this.wrapper.style.opacity=(this.width-Math.abs(e))/this.width,this.wrapper.style.transform=`translateX(${e}px)`}},{kind:"method",key:"_dismiss",value:function(){this.style.opacity=0;const e=getComputedStyle(this).height,o=this.animate({height:[e,"0px"]},{duration:100,iterations:1,fill:"forwards"});o.onfinish=()=>{this.setPosition(0),this.style.opacity=1;const n=new CustomEvent("remove",{detail:{itemIndex:this.itemIndex},bubbles:!0});this.dispatchEvent(n)}}},{kind:"method",key:"settle",value:function(e){if(this.state="initial",e===this.position)return;const o=e!==0,n=this.wrapper.animate({transform:[`translateX(${this.position}px)`,`translateX(${e}px)`],opacity:[this.wrapper.style.opacity,o?0:1]},{duration:Math.abs(e-this.position)*.5,iterations:1});this.position=e,n.onfinish=()=>o?this._dismiss():this.setPosition(0)}},{kind:"method",key:"fling",value:function(e){this.state="initial";const o=e<0?-this.width:this.width,n=this.wrapper.animate({transform:[`translateX(${this.position}px)`,`translateX(${o}px)`],opacity:[this.wrapper.style.opacity,0]},{duration:Math.abs(o-this.position)/Math.abs(e),iterations:1});n.onfinish=this._dismiss.bind(this)}},{kind:"method",key:"_settleToClosestPosition",value:function(){const e=this.position/this.width;e>.5?this.settle(this.width):e<-.5?this.settle(-this.width):this.settle(0)}},{kind:"method",key:"_onPointerDown",value:function(e){this.state="initial",this.startX=e.clientX,this.startY=e.clientY,this.startPosition=0}},{kind:"method",key:"_onPointerPan",value:function(e){if(this.state=="initial"){const o=e.clientX-this.startX,n=e.clientY-this.startY;if(o**2+n**2<z**2)return;if(Math.abs(n)>Math.abs(o)){this.state="ignoring";return}this.state="dragging",this.scroller||(this.scroller=this.offsetParent,this._scrollerOverflow=this.scroller.style.overflow),this.scroller.style.overflow="hidden"}if(this.state=="dragging"){this._tracker=this._tracker||new L,this._tracker.update(e);const o=e.clientX-this.startX;this.setPosition(this.startPosition+o)}}},{kind:"method",key:"_onPointerUp",value:function(e){if(this.state=="dragging"){this.scroller.style.overflow=this._scrollerOverflow;const o=this._tracker.update(e).velocityX;this._tracker=null,Math.abs(o)>M?this.fling(o):this._settleToClosestPosition()}}}]}},C);
