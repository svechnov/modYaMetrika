modYaMetrika.panel.Stat = function (config) {
	config = config || {};

	Ext.apply(config, {
		id: 'modyametrika-panel-counter-stat'
		,cls: 'container form-with-labels'
		,defaults: { collapsible: false, autoHeight: true }
		,forceLayout: true
		,layout: 'anchor'
		,hideMode: 'offsets'
		,items: [
			{
				layout:'column'
				,border: false
				,anchor: '100%'
				,defaults: {
					labelSeparator: ''
					,labelAlign: 'left'
					,labelWidth: 150
					,border: false
					,msgTarget: 'under'
				}
				,items: [
					{
						columnWidth: .6
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: [{
							xtype: 'modyametrika-combo-stat-report'
							,fieldLabel: _('modyametrika_report')
							,anchor: '99%'
							,listeners: {'select': {fn:this.onChangeReport,scope:this}}
						}]
					}
					,{
						columnWidth: .4
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: []
					}
				]
			}
			,MODx.PanelSpacer
			,{ html: '<div id="modyametrika-stat-report"></div>' }
		]
	});
	
	modYaMetrika.panel.Stat.superclass.constructor.call(this, config);
};
Ext.extend(modYaMetrika.panel.Stat, MODx.Panel, {
	
	reports: {}
	
	,onChangeReport: function(f) {
		var xtypeReport = f.getValue();
		if (xtypeReport) {
			for(var key in this.reports) {
				if (this.reports[key].displayed){
					this.reports[key].hide();
					this.reports[key].displayed = false;
				}
			}
			if (!this.reports[xtypeReport]) {
				this.reports[xtypeReport] = MODx.load({
					xtype: xtypeReport
					,options: this.config.options
				});
				this.reports[xtypeReport].render('modyametrika-stat-report');
			} else {
				this.reports[xtypeReport].show();
			}
			this.reports[xtypeReport].displayed = true;
		} else {
			MODx.msg.alert(_('error'),_('modyametrika_report_error_render'));
		}
	}

});
Ext.reg('modyametrika-panel-counter-stat', modYaMetrika.panel.Stat);
