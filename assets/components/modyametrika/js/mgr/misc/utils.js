Ext.chart.Chart.CHART_URL = 'assets/ext3/resources/charts.swf';

modYaMetrika.reports = new Ext.data.ArrayStore({
	fields: ['name','xtype']
	,data: [
		[ _('modyametrika_report_traffic_summary'), 'modyametrika-panel-counter-stat-report-traffic-summary' ]
		,[ _('modyametrika_report_traffic_deepness'), 'modyametrika-panel-counter-stat-report-traffic-deepness' ]
		,[ _('modyametrika_report_sources_summary'), 'modyametrika-panel-counter-stat-report-sources-summary']
	]
});
