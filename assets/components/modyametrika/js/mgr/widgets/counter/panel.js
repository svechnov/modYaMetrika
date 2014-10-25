modYaMetrika.panel.Counter = function (config) {
	config = config || {};

	Ext.apply(config, {
		id: 'modyametrika-panel-counter'
		,cls: 'container form-with-labels'
		,defaults: { collapsible: false, autoHeight: true }
		,forceLayout: true
		,layout: 'anchor'
		,hideMode: 'offsets'
		,items: [
			{
				html: '<h2>'+_('modyametrika')+'</h2>'
				,cls: 'modx-page-header'
				,border: false
				,forceLayout: true
				,anchor: '100%'
			}
			,{
				id: 'modyametrika-counter-tabs'
				,xtype: 'modx-tabs'
				,forceLayout: true
				,deferredRender: false
				// ,activeItem: 1
				,anchor: '99%'
				,items: this.getTabs(config)
			}
		]
	});
	
	modYaMetrika.panel.Counter.superclass.constructor.call(this, config);
	
};
Ext.extend(modYaMetrika.panel.Counter, MODx.Panel, {

	getTabs: function(config) {
		var tabs = [];
		if (config.options.only_static != '1') {
			tabs.push({
				title: _('modyametrika_counter_tab_info')
				,hideMode: 'offsets'
				,cls: 'modx-tab'
				,layout: 'form'
				,labelAlign: 'top'
				,labelSeparator: ''
				,bodyCssClass: 'tab-panel-wrapper main-wrapper'
				,autoHeight: true
				,defaults: { border: false, msgTarget: 'under' }
				,items: [{
					xtype: 'modyametrika-panel-counter-info'
					,options: config.options
					,readOnly: true
				}]			
			});
			tabs.push({
				title: _('modyametrika_counter_tab_stat')
				,hideMode: 'offsets'
				,cls: 'modx-tab'
				,bodyCssClass: 'tab-panel-wrapper main-wrapper'
				,autoHeight: true
				,defaults: { border: false, msgTarget: 'under' }
				,items: [{
					xtype: 'modyametrika-panel-counter-stat'
					,options: config.options
				}]
			});
		}
		tabs.push({
			title: _('modyametrika_counter_tab_setup')
			,hideMode: 'offsets'
			,cls: 'modx-tab'
			,bodyCssClass: 'tab-panel-wrapper main-wrapper'
			,autoHeight: true
			,defaults: { border: false, msgTarget: 'under' }
			,items: [{
				xtype: 'modyametrika-panel-counter-setup'
				,options: config.options
			}]
		});
		return tabs;
	}
	
});
Ext.reg('modyametrika-panel-counter', modYaMetrika.panel.Counter);
