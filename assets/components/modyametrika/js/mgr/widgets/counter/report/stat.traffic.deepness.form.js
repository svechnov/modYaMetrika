modYaMetrika.panel.ReportTrafficDeepness = function (config) {
	config = config || {};

	config.date2 = new Date();
	config.date1 = new Date(config.date2 - 6*1000*60*60*24)

	this.store = new Ext.data.JsonStore({
		url: modYaMetrika.config.connectorUrl
		,baseParams: {}
		,root: 'results'
		,fields: [ 'name','visits' ]
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
		id: 'modyametrika-panel-counter-stat-report-traffic-deepness'
		,cls: 'container form-with-labels'
		,defaults: { collapsible: false ,autoHeight: false }
		,forceLayout: true
		,items: [
			{xtype: 'hidden', name: 'id', value: config.options.counter_id}
			,{xtype: 'hidden', name: 'oauth_token', value: config.options.counter_token}
			,{
				layout:'column'
				,id: 'modyametrika-panel-counter-stat-report-traffic-deepness-filter'
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
						]
					}
					,{
						columnWidth: .25
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: [
							{
								xtype: 'modyametrika-combo-stat-deepness-type'
								,fieldLabel: _('modyametrika_report_filter_deepness_type')
								,anchor: '99%'
								,value: 'time'
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
						]
					}
				]
			}
			,MODx.PanelSpacer
			,{
				xtype: 'barchart'
				,store: this.store
				,height: 400
				,yField: 'name'
				,chartStyle: { animationEnabled: true }
				,series: [
					{ xField:'visits', displayName:_('modyametrika_report_traffic_summary_visits') }
				]
			}
		]
	});

	modYaMetrika.panel.ReportTrafficDeepness.superclass.constructor.call(this, config);
	
};
Ext.extend(modYaMetrika.panel.ReportTrafficDeepness, MODx.FormPanel, {

	filter: function() {
		if (this.store) {
			this.store.baseParams = this.getForm().getValues();
			this.store.baseParams.action = 'mgr/counter/reports/get.traffic.deepness'
			this.store.load();
		}
	}

});
Ext.reg('modyametrika-panel-counter-stat-report-traffic-deepness', modYaMetrika.panel.ReportTrafficDeepness);		