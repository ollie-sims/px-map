'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}(function(){'use strict';var PxMap=function(){function PxMap(){_classCallCheck(this,PxMap)}_createClass(PxMap,[{key:'attached',value:function attached(){window.requestAnimationFrame(this._drawMap.bind(this,0,10));if(this.fitToMarkers){this.listen(this,'px-map-marker-add','_fitMapToMakers')}}},{key:'detached',value:function detached(){if(this.fitToMarkers){this.unlisten(this,'px-map-marker-add','_fitMapToMakers')}}},{key:'_fitMapToMakers',value:function _fitMapToMakers(){var _this=this;if(this.elementInst&&this.fitToMarkers){var fitFn=function fitFn(){var bounds=_this._getAllMarkerGeoms();if(!bounds.isValid||!bounds.isValid())return;_this.elementInst.fitBounds(bounds)};this.debounce('fit-map-to-markers',fitFn,1)}}},{key:'_getAllMarkerGeoms',value:function _getAllMarkerGeoms(){var bounds=new L.LatLngBounds;this.elementInst.eachLayer(function(layer){if(layer.options&&layer.options.icon){var markerGeom=layer.getLatLng();bounds.extend(markerGeom)}if(layer.Cluster&&layer.Cluster.ComputeGlobalBounds){var clusterBounds=layer.Cluster.ComputeGlobalBounds();var composedBounds=L.latLngBounds([clusterBounds.minLat,clusterBounds.maxLng],[clusterBounds.maxLat,clusterBounds.minLng]);bounds.extend(composedBounds)}});return bounds}},{key:'_drawMap',value:function _drawMap(){var retries=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var maxRetries=arguments.length>1&&arguments[1]!==undefined?arguments[1]:10;var x=this._drawX=this.parentElement.clientWidth;var y=this._drawY=this.parentElement.clientHeight;if(!x||!y){if(retries<maxRetries){window.requestAnimationFrame(this._drawMap.bind(this,retries+1,maxRetries))}return}if(!this.elementInst){var mapDrawEl=Polymer.dom(this.root).querySelector('#map');var map=L.map(mapDrawEl,{minZoom:this.minZoom,maxZoom:this.maxZoom,zoomControl:false});this.scopeSubtree(this.$.map,true);this._setElementInst(map);this.fire('px-map-layer-instance-created')}this._updateMapView();this._fitMapToMakers()}},{key:'_updateMapView',value:function _updateMapView(){var _this2=this;if(this.elementInst){var updateFn=function updateFn(){_this2.elementInst.setView([_this2.lat,_this2.lng],_this2.zoom)};this.debounce('update-map-view',updateFn,1)}}},{key:'is',get:function get(){return'px-map'}},{key:'behaviors',get:function get(){return[PxMapBehavior.MapLayerParentBase]}},{key:'properties',get:function get(){return{elementInst:{type:Object,notify:true,readOnly:true},crs:{type:String,value:'L.CRS.EPSG3857',notify:true},lat:{type:Number,value:37.7672375,notify:true},lng:{type:Number,value:-121.9584131,notify:true},zoom:{type:Number,value:10,notify:true},maxZoom:{type:Number},minZoom:{type:Number},bounds:{type:Array},fitToMarkers:{type:Boolean,value:false,observer:'_fitMapToMakers'},flexToSize:{type:Boolean,reflectToAttribute:true,value:false}}}}]);return PxMap}();Polymer(PxMap)})();
//# sourceMappingURL=px-map.js.map
