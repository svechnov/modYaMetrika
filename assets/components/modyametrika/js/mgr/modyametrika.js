var modYaMetrika = function (config) {
	config = config || {};
	modYaMetrika.superclass.constructor.call(this, config);
};
Ext.extend(modYaMetrika, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('modyametrika', modYaMetrika);

modYaMetrika = new modYaMetrika();