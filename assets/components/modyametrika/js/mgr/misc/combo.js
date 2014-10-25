modYaMetrika.combo.InformerType = function(config) {
	config = config || {};

	Ext.applyIf(config,{
		name: 'code_options_informer_type'
		,hiddenName: 'code_options_informer_type'
		,displayField: 'name'
		,valueField: 'code_options_informer_type'
		,mode:'local'
		,lazyRender: true
		,store: new Ext.data.ArrayStore({
			id: 0
			,fields: ['code_options_informer_type','name']
			,data: [
				[ 'simple', _('modyametrika_counter_informer_type_simple') ]
				,[ 'ext', _('modyametrika_counter_informer_type_ext') ]
			]
		})
	});
	modYaMetrika.combo.InformerType.superclass.constructor.call(this,config);
};
Ext.extend(modYaMetrika.combo.InformerType,MODx.combo.ComboBox);
Ext.reg('modyametrika-combo-code_options-informer-type',modYaMetrika.combo.InformerType);

modYaMetrika.combo.InformerSize = function(config) {
	config = config || {};

	Ext.applyIf(config,{
		name: 'code_options_informer_size'
		,hiddenName: 'code_options_informer_size'
		,displayField: 'name'
		,valueField: 'code_options_informer_size'
		,mode:'local'
		,lazyRender: true
		,store: new Ext.data.ArrayStore({
			id: 0
			,fields: ['code_options_informer_size','name']
			,data: [
				[ '1', _('modyametrika_counter_informer_size_1') ]
				,[ '2', _('modyametrika_counter_informer_size_2') ]
				,[ '3', _('modyametrika_counter_informer_size_3') ]
			]
		})
	});
	modYaMetrika.combo.InformerSize.superclass.constructor.call(this,config);
};
Ext.extend(modYaMetrika.combo.InformerSize,MODx.combo.ComboBox);
Ext.reg('modyametrika-combo-code_options-informer-size',modYaMetrika.combo.InformerSize);

modYaMetrika.combo.InformerIndicator = function(config) {
	config = config || {};

	Ext.applyIf(config,{
		name: 'code_options_informer_indicator'
		,hiddenName: 'code_options_informer_indicator'
		,displayField: 'name'
		,valueField: 'code_options_informer_indicator'
		,mode:'local'
		,lazyRender: true
		,store: new Ext.data.ArrayStore({
			id: 0
			,fields: ['code_options_informer_indicator','name']
			,data: [
				[ 'pageviews', _('modyametrika_counter_informer_indicator_pageviews') ]
				,[ 'visits', _('modyametrika_counter_informer_indicator_visits') ]
				,[ 'uniques', _('modyametrika_counter_informer_indicator_uniques') ]
			]
		})
	});
	modYaMetrika.combo.InformerIndicator.superclass.constructor.call(this,config);
};
Ext.extend(modYaMetrika.combo.InformerIndicator,MODx.combo.ComboBox);
Ext.reg('modyametrika-combo-code_options-informer-indicator',modYaMetrika.combo.InformerIndicator);

modYaMetrika.combo.InformerColorText = function(config) {
	config = config || {};

	Ext.applyIf(config,{
		name: 'code_options_informer_color_text'
		,hiddenName: 'code_options_informer_color_text'
		,displayField: 'name'
		,valueField: 'code_options_informer_color_text'
		,mode:'local'
		,lazyRender: true
		,store: new Ext.data.ArrayStore({
			id: 0
			,fields: ['code_options_informer_color_text','name']
			,data: [
				[ '0', _('modyametrika_counter_informer_color_text_0') ]
				,[ '1', _('modyametrika_counter_informer_color_text_1') ]
			]
		})
	});
	modYaMetrika.combo.InformerColorText.superclass.constructor.call(this,config);
};
Ext.extend(modYaMetrika.combo.InformerColorText,MODx.combo.ComboBox);
Ext.reg('modyametrika-combo-code_options-informer-color_text',modYaMetrika.combo.InformerColorText);

modYaMetrika.combo.InformerColorArrow = function(config) {
	config = config || {};

	Ext.applyIf(config,{
		name: 'code_options_informer_color_arrow'
		,hiddenName: 'code_options_informer_color_arrow'
		,displayField: 'name'
		,valueField: 'code_options_informer_color_arrow'
		,mode:'local'
		,lazyRender: true
		,store: new Ext.data.ArrayStore({
			id: 0
			,fields: ['code_options_informer_color_arrow','name']
			,data: [
				[ '0', _('modyametrika_counter_informer_color_arrow_0') ]
				,[ '1', _('modyametrika_counter_informer_color_arrow_1') ]
			]
		})
	});
	modYaMetrika.combo.InformerColorArrow.superclass.constructor.call(this,config);
};
Ext.extend(modYaMetrika.combo.InformerColorArrow,MODx.combo.ComboBox);
Ext.reg('modyametrika-combo-code_options-informer-color_arrow',modYaMetrika.combo.InformerColorArrow);

modYaMetrika.combo.StatReport = function(config) {
	config = config || {};

	Ext.applyIf(config,{
		name: 'xtype'
		,emptyText: _('modyametrika_report_select')
		,hiddenName: 'xtype'
		,displayField: 'name'
		,valueField: 'xtype'
		,mode:'local'
		,lazyRender: true
		,store: modYaMetrika.reports
	});
	modYaMetrika.combo.StatReport.superclass.constructor.call(this,config);
};
Ext.extend(modYaMetrika.combo.StatReport,MODx.combo.ComboBox);
Ext.reg('modyametrika-combo-stat-report',modYaMetrika.combo.StatReport);

modYaMetrika.combo.GroupPeriod = function(config) {
	config = config || {};

	Ext.applyIf(config,{
		name: 'group'
		,hiddenName: 'group'
		,displayField: 'name'
		,valueField: 'group'
		,mode:'local'
		,lazyRender: true
		,store: new Ext.data.ArrayStore({
			id: 0
			,fields: ['group','name']
			,data: [
				[ 'day', _('modyametrika_report_filter_group_day') ]
				,[ 'week', _('modyametrika_report_filter_group_week') ]
				,[ 'month', _('modyametrika_report_filter_group_month') ]
			]
		})
	});
	modYaMetrika.combo.GroupPeriod.superclass.constructor.call(this,config);
};
Ext.extend(modYaMetrika.combo.GroupPeriod,MODx.combo.ComboBox);
Ext.reg('modyametrika-combo-stat-group-period',modYaMetrika.combo.GroupPeriod);

modYaMetrika.combo.DeepnessType = function(config) {
	config = config || {};

	Ext.applyIf(config,{
		name: 'deepness_type'
		,hiddenName: 'deepness_type'
		,displayField: 'name'
		,valueField: 'deepness_type'
		,mode:'local'
		,lazyRender: true
		,store: new Ext.data.ArrayStore({
			id: 0
			,fields: ['deepness_type','name']
			,data: [
				[ 'time', _('modyametrika_report_filter_deepness_type_time') ]
				,[ 'depth', _('modyametrika_report_filter_deepness_type_depth') ]
			]
		})
	});
	modYaMetrika.combo.DeepnessType.superclass.constructor.call(this,config);
};
Ext.extend(modYaMetrika.combo.DeepnessType,MODx.combo.ComboBox);
Ext.reg('modyametrika-combo-stat-deepness-type',modYaMetrika.combo.DeepnessType);

