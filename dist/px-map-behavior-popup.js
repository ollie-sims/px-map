'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}(function(){'use strict';var namespace=window.PxMapBehavior=window.PxMapBehavior||{};var MapPopupImpl={properties:{active:{type:Boolean,value:false,readOnly:true},bindToControl:{type:String}},addInst:function addInst(parent){if(parent&&parent.getPopup()!==this.elementInst){parent.bindPopup(this.elementInst)}},removeInst:function removeInst(parent){if(parent&&parent.getPopup()===this.elementInst){parent.unbindPopup(this.elementInst)}}};namespace.MapPopup=[namespace.MapLayer,MapPopupImpl];var MapPopupInfoImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},description:{type:String,observer:'shouldUpdateInst'},imgSrc:{type:String,observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.InfoPopup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.description!==nextOptions.description){updates.description=nextOptions.description}if(lastOptions.imgSrc!==nextOptions.imgSrc){updates.imgSrc=nextOptions.imgSrc}if(Object.keys(updates).length){this.elementInst.updateSettings(updates)}},getInstOptions:function getInstOptions(){return{title:this.title,description:this.description,imgSrc:this.imgSrc}}};namespace.MapPopupInfo=[namespace.MapPopup,MapPopupInfoImpl];var MapPopupDataImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},data:{type:Object,value:function value(){return{}},observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.DataPopup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.data!==nextOptions.data){updates.data=nextOptions.data}if(Object.keys(updates).length){this.elementInst.updateSettings(updates)}},getInstOptions:function getInstOptions(){return{title:this.title,data:this.data}}};namespace.MapPopupData=[namespace.MapPopup,MapPopupDataImpl];var klass=window.PxMap=window.PxMap||{};var InfoPopup=function(_L$Popup){_inherits(InfoPopup,_L$Popup);function InfoPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _ret;var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,InfoPopup);var _this=_possibleConstructorReturn(this,(InfoPopup.__proto__||Object.getPrototypeOf(InfoPopup)).call(this));_this._createPopup(settings,config);return _ret=_this,_possibleConstructorReturn(_this,_ret)}_createClass(InfoPopup,[{key:'_createPopup',value:function _createPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.settings=settings;var title=settings.title,description=settings.description,imgSrc=settings.imgSrc;var content=this._generatePopupContent(title,description,imgSrc);var defaultConfig={className:'map-popup-info'};var composedConfig={};Object.assign(composedConfig,defaultConfig,config);this.initialize(composedConfig);this.setContent(content)}},{key:'_generatePopupContent',value:function _generatePopupContent(title,description,imgSrc){var _this2=this;var tmplFnIf=function tmplFnIf(fn){for(var _len=arguments.length,vals=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){vals[_key-1]=arguments[_key]}return vals.length&&vals[0]!==undefined?fn.call.apply(fn,[_this2].concat(vals)):''};var imgTmpl=function imgTmpl(imgSrc){return'\n        <div class="map-box-info__image">\n          <img src="'+imgSrc+'" />\n        </div>\n      '};var titleTmpl=function titleTmpl(title){return'\n        <p class="map-box-info__title">'+title+'</p>\n      '};var descriptionTmpl=function descriptionTmpl(description){return'\n        <p class="map-box-info__description">'+description+'</p>\n      '};return'\n        <section class="map-box-info">\n          '+tmplFnIf(imgTmpl,imgSrc)+'\n          <div class="map-box-info__content">\n            '+tmplFnIf(titleTmpl,title)+'\n            '+tmplFnIf(descriptionTmpl,description)+'\n          </div>\n        </section>\n      '}},{key:'updateSettings',value:function updateSettings(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};Object.assign(this.settings,settings);var _settings=this.settings,title=_settings.title,description=_settings.description,imgSrc=_settings.imgSrc;var content=this._generatePopupContent(title,description,imgSrc);this.setContent(content);this.update()}}]);return InfoPopup}(L.Popup);;klass.InfoPopup=InfoPopup;var DataPopup=function(_L$Popup2){_inherits(DataPopup,_L$Popup2);function DataPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _ret2;var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,DataPopup);var _this3=_possibleConstructorReturn(this,(DataPopup.__proto__||Object.getPrototypeOf(DataPopup)).call(this));_this3._createPopup(settings,config);return _ret2=_this3,_possibleConstructorReturn(_this3,_ret2)}_createClass(DataPopup,[{key:'_createPopup',value:function _createPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.settings=settings;var _settings2=this.settings,title=_settings2.title,data=_settings2.data;var content=this._generatePopupContent(title,data);var defaultConfig={className:'map-popup-data',maxWidth:400,minWidth:300};var composedConfig={};Object.assign(composedConfig,defaultConfig,config);this.initialize(composedConfig);this.setContent(content)}},{key:'_generatePopupContent',value:function _generatePopupContent(title,data){var _this4=this;var tmplFnIf=function tmplFnIf(fn){for(var _len2=arguments.length,vals=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){vals[_key2-1]=arguments[_key2]}return vals.length&&vals[0]!==undefined?fn.call.apply(fn,[_this4].concat(vals)):''};var titleTmpl=function titleTmpl(title){return'\n        <div class="map-data-box__header">\n          <h3 class="map-data-box__header__text">'+title+'</h3>\n        </div>\n      '};var dataTmpl=function dataTmpl(data){var dataList=Object.keys(data).reduce(function(accum,key){return accum.concat([dataItemTmpl(key,data[key])])},[]).join('');return'\n          <div class="map-data-box__table">\n            '+dataList+'\n          </div>\n        '};var dataItemTmpl=function dataItemTmpl(label,value){return'\n        <div class="map-data-box__table__cell"><p>'+label+'</p></div>\n        <div class="map-data-box__table__cell"><p>'+value+'</p></div>\n      '};return'\n        <section class="map-box-data">\n          '+tmplFnIf(titleTmpl,title)+'\n          '+tmplFnIf(dataTmpl,data)+'\n        </section>\n      '}},{key:'updateSettings',value:function updateSettings(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};Object.assign(this.settings,settings);var _settings3=this.settings,title=_settings3.title,data=_settings3.data;var content=this._generatePopupContent(title,data);this.setContent(content);this.update()}}]);return DataPopup}(L.Popup);;klass.DataPopup=DataPopup})();
//# sourceMappingURL=px-map-behavior-popup.js.map
