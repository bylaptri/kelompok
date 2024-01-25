/**
 * Highcharts Gantt JS v11.3.0 (2024-01-10)
 *
 * StaticScale
 *
 * (c) 2016-2024 Torstein Honsi, Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/static-scale",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function i(t,e,i,s){t.hasOwnProperty(e)||(t[e]=s.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}i(e,"Extensions/StaticScale.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(t,e){let{composed:i}=t,{addEvent:s,defined:o,isNumber:a,pick:n,pushUnique:r}=e;function l(){let t=this.chart.options.chart;!this.horiz&&a(this.options.staticScale)&&(!t.height||t.scrollablePlotArea&&t.scrollablePlotArea.minHeight)&&(this.staticScale=this.options.staticScale)}function h(){if("adjustHeight"!==this.redrawTrigger){for(let t of this.axes||[]){let e=t.chart,i=!!e.initiatedScale&&e.options.animation,s=t.options.staticScale;if(t.staticScale&&o(t.min)){let o=n(t.brokenAxis&&t.brokenAxis.unitLength,t.max+t.tickInterval-t.min)*s,a=(o=Math.max(o,s))-e.plotHeight;!e.scrollablePixelsY&&Math.abs(a)>=1&&(e.plotHeight=o,e.redrawTrigger="adjustHeight",e.setSize(void 0,e.chartHeight+a,i)),t.series.forEach(function(t){let i=t.sharedClipKey&&e.sharedClips[t.sharedClipKey];i&&i.attr(e.inverted?{width:e.plotHeight}:{height:e.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=null}return{compose:function t(e,o){if(r(i,t)){let t=o.prototype;s(e,"afterSetOptions",l),t.adjustHeight=h,s(o,"render",t.adjustHeight)}}}}),i(e,"masters/modules/static-scale.src.js",[e["Core/Globals.js"],e["Extensions/StaticScale.js"]],function(t,e){e.compose(t.Axis,t.Chart)})});