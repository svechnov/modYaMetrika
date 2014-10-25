<?php

class modYaMetrikaCounterManagerController extends modYaMetrikaMainController {

	public $modYaMetrika;
	public $modYaMetrikaOptions = array();

	public function process(array $scriptProperties = array()) {
		$this->modYaMetrikaOptions['only_static'] = $this->modx->getOption('modyametrika_only_static');
		if ($this->modYaMetrikaOptions['only_static'] != '1') {
			$this->modYaMetrikaOptions['counter_id'] = $this->modx->getOption('modyametrika_counter');
			$this->modYaMetrikaOptions['counter_token'] = $this->modx->getOption('modyametrika_token');
		}
		$this->modYaMetrikaOptions['counter_code_show'] = $this->modx->getOption('modyametrika_counter_code_show');
		$this->modYaMetrikaOptions['counter_code'] = $this->modx->getOption('modyametrika_counter_code');
	}

	public function getPageTitle() {
		return $this->modx->lexicon('modyametrika');
	}

	public function loadCustomCssJs() {
		$this->addCss($this->modYaMetrika->config['cssUrl'] . 'mgr/main.css');
		$this->addCss($this->modYaMetrika->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
		$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/misc/utils.js');
		$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/misc/combo.js');
		if ($this->modYaMetrikaOptions['only_static'] != '1') {
			$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/widgets/counter/info.form.panel.js');
			$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/widgets/counter/report/stat.traffic.summary.form.js');
			$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/widgets/counter/report/stat.traffic.deepness.form.js');
			$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/widgets/counter/report/stat.sources.summary.form.js');
			$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/widgets/counter/stat.panel.js');
		}
		$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/widgets/counter/setup.form.panel.js');
		$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/widgets/counter/panel.js');
		$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/sections/counter.js');
		
		$this->addHtml('<script type="text/javascript">
		Ext.onReady(function() {
			MODx.load({
				xtype: "modyametrika-page-counter"
				,options: '.$this->modx->toJSON($this->modYaMetrikaOptions).'
			});
		});
		</script>');
		
	}

	public function getTemplateFile() {
		return $this->modYaMetrika->config['templatesPath'] . 'counter.tpl';
	}
}