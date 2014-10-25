modYaMetrika.page.Counter = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'modyametrika-panel-counter'
			,renderTo: 'modyametrika-panel-counter-div'
			,options: config.options
		}]
	});

	modYaMetrika.page.Counter.superclass.constructor.call(this, config);
};
Ext.extend(modYaMetrika.page.Counter, MODx.Component);
Ext.reg('modyametrika-page-counter', modYaMetrika.page.Counter);