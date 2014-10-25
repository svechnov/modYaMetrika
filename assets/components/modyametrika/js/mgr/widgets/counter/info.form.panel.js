modYaMetrika.panel.Info = function (config) {
	config = config || {};

	Ext.apply(config, {
		id: 'modyametrika-panel-counter-info'
		,cls: 'container form-with-labels'
		,defaults: { collapsible: false ,autoHeight: true }
		,forceLayout: true
		,items: [
			{
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
						columnWidth: .75
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: this.getMainFields(config)
					}
					,{
						columnWidth: .25
						,layout: 'form'
						,defaults: { msgTarget: 'under' }
						,items: this.getRightColumn(config)
					}
				]
			}
		]
	});
	
	modYaMetrika.panel.Info.superclass.constructor.call(this, config);

	this.on('setup',this.loadFromAPI(),this);
};
Ext.extend(modYaMetrika.panel.Info, MODx.FormPanel, {
	
	fillForm: function(data) {
		if (data.code_options) {
			for(var key in data.code_options){
				data['code_options_'+key] = data.code_options[key];
			}
		}
		if (data.code_options.informer) {
			for(var key in data.code_options.informer){
				data['code_options_informer_'+key] = data.code_options.informer[key];
			}
		}
		if (!data.token) data.token = this.config.options.counter_token;
		if (data.code_status) data.code_status = _('modyametrika_counter_code_status_'+data.code_status);
		if (data.type) data.type = _('modyametrika_counter_type_'+data.type);
		if (data.permission) data.permission = _('modyametrika_counter_permission_'+data.permission)
		
		this.getForm().setValues(data);
	}

	,getMainFields: function(config) {
		var items = [];
		
		var col_1 = [];
		var col_2 = [];
		var col_3 = [];
	
		col_1.push({
			xtype: 'textfield'
			,fieldLabel: _('modyametrika_counter_name')
			,name: 'name'
			,readOnly: config.readOnly
		});
		col_2.push({
			xtype: 'textfield'
			,fieldLabel: _('modyametrika_counter_site')
			,name: 'site'
			,readOnly: config.readOnly
		});
		col_3.push({
			xtype: 'textfield'
			,fieldLabel: _('modyametrika_counter_code_status')
			,name: 'code_status'
			,readOnly: config.readOnly
		});
		
		col_1.push({
			xtype: 'textfield'
			,fieldLabel: _('modyametrika_counter_owner_login')
			,name: 'owner_login'
			,readOnly: config.readOnly
		});
		col_2.push({
			xtype: 'textfield'
			,fieldLabel: _('modyametrika_counter_type')
			,name: 'type'
			,readOnly: config.readOnly
		});
		col_3.push({
			xtype: 'textfield'
			,fieldLabel: _('modyametrika_counter_permission')
			,name: 'permission'
			,readOnly: config.readOnly
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
					columnWidth: .33
					,layout: 'form'
					,defaults: { msgTarget: 'under' }
					,items: col_1
				}
				,{
					columnWidth: .33
					,layout: 'form'
					,defaults: { msgTarget: 'under' }
					,items: col_2
				}
				,{
					columnWidth: .33
					,layout: 'form'
					,defaults: { msgTarget: 'under' }
					,items: col_3
				}
			]
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
					columnWidth: .55
					,layout: 'form'
					,defaults: { msgTarget: 'under' }
					,items: [{
						xtype: 'fieldset'
						,collapsible: true
						,collapsed: true
						,title: _('modyametrika_counter_code_options')
						,items: this.getCodeOptions(config)
					}]
				}
				,{
					columnWidth: .45
					,layout: 'form'
					,defaults: { msgTarget: 'under' }
					,items: [{
						xtype: 'fieldset'
						,collapsible: true
						,collapsed: true
						,title: _('modyametrika_counter_informer')
						,items: this.getInformerOptions(config)
					}]
				}
			]
		});
		
		if (config.readOnly) {
			items.push({
				xtype: 'textarea'
				,fieldLabel: _('modyametrika_counter_code')
				,name: 'code'
				,anchor: '100%'
				,height: 250
				,readOnly: true
			});
		}
		
		return items;
	}

	,getRightColumn: function(config) {
		var techItems = [];
		var items = [];
		
		techItems.push({
			xtype: 'textfield'
			,fieldLabel: _('modyametrika_counter_id')
			,name: 'id'
			,readOnly: true
			,value: config.options.counter_id
		});
		
		techItems.push({
			xtype: 'textfield'
			,fieldLabel: _('modyametrika_counter_token')
			,name: 'token'
			,anchor: '99%'
			,readOnly: true
			,value: config.options.counter_token
		});
		
		items.push({
			xtype: 'fieldset'
			,title: _('modyametrika_counter_tech_info')
			,collapsible: true
			,collapsed: true
			,items: techItems
		});
		
		items.push(this.getAction(config));
		
		return items;
	}
	
	,getAction: function(config) {
		var actions = [];
		if (config.readOnly) {
			actions.push(MODx.PanelSpacer);
			actions.push({
				xtype: 'button'
				,anchor: '99%'
				,text: _('modyametrika_counter_btn_refresh_from_api')
				,listeners: {
					'click': {fn: this.loadFromAPI, scope: this}
				}
			});
			actions.push(MODx.PanelSpacer);
			actions.push({
				xtype: 'button'
				,anchor: '99%'
				,text: _('modyametrika_counter_btn_use_in_site')
				,listeners: {
					'click': {fn: this.setupOnSite, scope: this}
				}
			});
		}
		return actions;
	}
	
	,getCodeOptions: function(config) {
		return [
			{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_opt_clickmap')
				,hideLabel: true
				,name: 'code_options_clickmap'
				,inputValue: 1
				,disabled: config.readOnly
			}
			,{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_opt_external_links')
				,hideLabel: true
				,name: 'code_options_external_links'
				,inputValue: 1
				,disabled: config.readOnly
			}
			,{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_opt_async')
				,hideLabel: true
				,name: 'code_options_async'
				,inputValue: 1
				,disabled: config.readOnly
			}
			,{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_opt_visor')
				,hideLabel: true
				,name: 'code_options_visor'
				,inputValue: 1
				,disabled: config.readOnly
			}
			,{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_opt_params')
				,hideLabel: true
				,name: 'code_options_params'
				,inputValue: 1
				,disabled: config.readOnly
			}
			,{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_opt_denial')
				,hideLabel: true
				,name: 'code_options_denial'
				,inputValue: 1
				,disabled: config.readOnly
			}
			,{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_opt_ut')
				,hideLabel: true
				,name: 'code_options_ut'
				,inputValue: 1
				,disabled: config.readOnly
			}
			,{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_opt_track_hash')
				,hideLabel: true
				,name: 'code_options_track_hash'
				,inputValue: 1
				,disabled: config.readOnly
			}
		];
	}

	,getInformerOptions: function(config) {
		return [
			{
				xtype: 'xcheckbox'
				,boxLabel: _('modyametrika_counter_informer_enabled')
				,hideLabel: true
				,name: 'code_options_informer_enabled'
				,inputValue: 1
				,disabled: config.readOnly
			}
			,{
				xtype: 'modyametrika-combo-code_options-informer-type'
				,fieldLabel: _('modyametrika_counter_informer_type')
				,name: 'code_options_informer_type'
				,anchor: '70%'
				,disabled: config.readOnly
			}
			,{
				xtype: 'modyametrika-combo-code_options-informer-size'
				,fieldLabel: _('modyametrika_counter_informer_size')
				,name: 'code_options_informer_size'
				,anchor: '70%'
				,disabled: config.readOnly
			}
			,{
				xtype: 'modyametrika-combo-code_options-informer-indicator'
				,fieldLabel: _('modyametrika_counter_informer_indicator')
				,name: 'code_options_informer_indicator'
				,anchor: '70%'
				,disabled: config.readOnly
			}
			,{
				xtype: 'textfield'
				,fieldLabel: _('modyametrika_counter_informer_color_start')
				,name: 'code_options_informer_color_start'
				,disabled: config.readOnly
			}
			,{
				xtype: 'textfield'
				,fieldLabel: _('modyametrika_counter_informer_color_end')
				,name: 'code_options_informer_color_end'
				,disabled: config.readOnly
			}
			,{
				xtype: 'modyametrika-combo-code_options-informer-color_text'
				,fieldLabel: _('modyametrika_counter_informer_color_text')
				,name: 'code_options_informer_color_text'
				,anchor: '70%'
				,disabled: config.readOnly
			}
			,{
				xtype: 'modyametrika-combo-code_options-informer-color_arrow'
				,fieldLabel: _('modyametrika_counter_informer_color_arrow')
				,name: 'code_options_informer_color_arrow'
				,anchor: '70%'
				,disabled: config.readOnly
			}
		];
	}
	
	,loadFromAPI: function() {
		if (!this.config.options.counter_id || !this.config.options.counter_token) {
			MODx.msg.alert(_('error'),_('modyametrika_msg_no_options'));
		} else {
			Ext.MessageBox.show({ title:_('loading'), width:300, wait:true, waitConfig:{interval:100} });		
			MODx.Ajax.request({
				url: modYaMetrika.config.connector_url,
				params: {
					action: 'mgr/counter/getinfocounter'
					,id: this.config.options.counter_id
					,token: this.config.options.counter_token
				},
				listeners: {
					success: {
						fn: function (r) {
							this.fillForm(r.object.counter);
							Ext.MessageBox.hide();
						}, scope: this
					}
				}
			});
		}
	}
	
	,setupOnSite: function() {
		var setupFormPanel = Ext.getCmp('modyametrika-panel-counter-setup');
		if (setupFormPanel) {
			var counterData = this.getForm().getValues();
			if (counterData.site != MODx.config.http_host) {
				MODx.msg.alert(_('warning'),_('modyametrika_msg_site_do_not_match'));
			}
			setupFormPanel.getForm().setValues({
				counter_code: counterData.code
				,counter_code_show: true
			});
			setupFormPanel.saveOptions();
		}
	}
	
});
Ext.reg('modyametrika-panel-counter-info', modYaMetrika.panel.Info);