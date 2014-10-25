modYaMetrika.panel.ReportTrafficSummary = function (config) {
	config = config || {};

	config.date2 = new Date();
	config.date1 = new Date(config.date2 - 6*1000*60*60*24)

	this.store = new Ext.data.JsonStore({
		url: modYaMetrika.config.connectorUrl
		,baseParams: {}
		,root: 'results'
		,fields: [
			'date'
			,'visits'
			,'page_views'
			,'visitors'
			,'new_visitors'
		]
		,autoDestroy: true
		,autoLoad: false
		,listeners: {
			beforeload: {
				fn: function () {
					Ext.MessageBox.show({ title:_('loading'), width:300, wait:true, waitConfig:{interval:100} });		
				}, scope: this
			}
			,load: {
				fn: function () {
					Ext.MessageBox.hide();
				}, scope: this
			}
		}
	});
	
	Ext.apply(config, {
		id: 'modyametrika-panel-counter-stat-report-traffic-summary'
		,cls: 'container form-with-labels'
		,defaults: { collapsible: false ,autoHeight: false }
		,forceLayout: true
		,items: [
			{xtype: 'hidden', name: 'id', value: config.options.counter_id}
			,{xtype: 'hidden', name: 'oauth_token', value: config.options.counter_token}
			,{
				layout:'column'
				,id: 'modyametrika-panel-counter-stat-report-traffic-summary-filter'
				,border: false
				,anchor: '100%'
				,defaults: {
					labelSeparator: ''
					,labelAlign: 'top'
					,border: false
					,msgTarget: 'under'
				}
				,items: [
					{
						columnWidth: .25
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: [
							{
								xtype: 'datefield'
								,fieldLabel: _('modyametrika_report_filter_date1')
								,name: 'date1'
								,allowBlank: false
								,anchor: '99%'
								,format:'d-m-Y'
								,altFormats: 'm/d/Y'
								,value: config.date1
								,maxValue: config.date2
							}
							,{
								xtype: 'xcheckbox'
								,boxLabel: _('modyametrika_report_traffic_summary_visits')
								,name: 'visits'
								,checked: true
							}
						]
					}
					,{
						columnWidth: .25
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: [
							{
								xtype: 'datefield'
								,fieldLabel: _('modyametrika_report_filter_date2')
								,name: 'date2'
								,allowBlank: false
								,anchor: '99%'
								,format:'d-m-Y'
								,altFormats: 'm/d/Y'
								,value: config.date2
								,maxValue: config.date2
							}
							,{
								xtype: 'xcheckbox'
								,boxLabel: _('modyametrika_report_traffic_summary_page_views')
								,name: 'page_views'
								,checked: true
							}
						]
					}
					,{
						columnWidth: .25
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: [
							{
								xtype: 'modyametrika-combo-stat-group-period'
								,fieldLabel: _('modyametrika_report_filter_group')
								,anchor: '99%'
								,value: 'day'
							}
							,{
								xtype: 'xcheckbox'
								,boxLabel: _('modyametrika_report_traffic_summary_visitors')
								,name: 'visitors'
								,checked: true
							}
						]
					}
					,{
						columnWidth: .25
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: [MODx.PanelSpacer
							,{
								xtype: 'button'
								,anchor: '99%'
								,text: _('modyametrika_report_filter_apply')
								,listeners: {
									'click': {fn: this.filter, scope: this}
								}
							}
							,{
								xtype: 'xcheckbox'
								,boxLabel: _('modyametrika_report_traffic_summary_new_visitors')
								,name: 'new_visitors'
								,checked: true
							}
						]
					}
				]
			}
			,MODx.PanelSpacer
			,{
				xtype: 'columnchart'
				,store: this.store
				,height: 400
				,xField: 'date'
				,chartStyle: {
					animationEnabled: true
					,legend: { display:'bottom' } // when displaying the animation does not work ((( may be bug
				}
				,series: [
					{ yField:'visits', type:'line', displayName:_('modyametrika_report_traffic_summary_visits') }
					,{ yField:'page_views', type:'column', displayName:_('modyametrika_report_traffic_summary_page_views') }
					,{ yField:'visitors', type:'line', displayName:_('modyametrika_report_traffic_summary_visitors') }
					,{ yField:'new_visitors', type:'line', displayName:_('modyametrika_report_traffic_summary_new_visitors') }
				]
			}
		]
	});

	modYaMetrika.panel.ReportTrafficSummary.superclass.constructor.call(this, config);
	
};
Ext.extend(modYaMetrika.panel.ReportTrafficSummary, MODx.FormPanel, {

	filter: function() {
		if (this.store) {
			this.store.baseParams = this.getForm().getValues();
			this.store.baseParams.action = 'mgr/counter/reports/get.traffic.summary'
			this.store.load();
		}
	}

});
Ext.reg('modyametrika-panel-counter-stat-report-traffic-summary', modYaMetrika.panel.ReportTrafficSummary);		