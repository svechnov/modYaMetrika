modYaMetrika.panel.Setup = function (config) {
	config = config || {};

	Ext.apply(config, {
		id: 'modyametrika-panel-counter-setup'
		,cls: 'container form-with-labels'
		,defaults: { collapsible: false ,autoHeight: true }
		,forceLayout: true
		,items: this.getItems(config)
	});

	modYaMetrika.panel.Setup.superclass.constructor.call(this, config);
};
Ext.extend(modYaMetrika.panel.Setup, MODx.FormPanel, {

	getItems: function(config) {
		var items = [];
		var leftColumnItems = [];
		var rightColumnItems = [];
		
		leftColumnItems.push({
			xtype: 'textarea'
			,fieldLabel: _('modyametrika_setup_counter_code')
			,name: 'counter_code'
			,anchor: '100%'
			,height: 250
			,value: config.options.counter_code
		});
		
		rightColumnItems.push({
			xtype: 'combo-boolean'
			,fieldLabel: _('setting_modyametrika_counter_code_show')
			,anchor: '99%'
			,name: 'counter_code_show'
			,value: config.options.counter_code_show
		});
		
		rightColumnItems.push(MODx.PanelSpacer);
		
		rightColumnItems.push({
			xtype: 'button'
			,anchor: '99%'
			,text: _('save')
			,listeners: {
				'click': {fn: this.saveOptions, scope: this}
			}
		});

		items.push({
			layout:'column'
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
					columnWidth: .8
					,layout: 'form'
					,defaults: { msgTarget: 'under' }
					,items: leftColumnItems
				}
				,{
					columnWidth: .2
					,layout: 'form'
					,defaults: { msgTarget: 'under' }
					,items: rightColumnItems
				}
			]
		});
		return items;
	}
	
	,saveOptions: function() {
		var values = this.getForm().getValues();
		MODx.Ajax.request({
			url: modYaMetrika.config.connector_url,
			params: {
				action: 'mgr/counter/saveoptions'
				,counter_code: values.counter_code
				,counter_code_show: values.counter_code_show
			},
			listeners: {
				success: {
					fn: function (r) {
						MODx.msg.status({
							title: _('success')
							,message: r.message != '' ? r.message : _('save_successful')
							,dontHide: r.message != '' ? true : false
						});
					}, scope: this
				}
			}
		});
	}

});
Ext.reg('modyametrika-panel-counter-setup', modYaMetrika.panel.Setup);	