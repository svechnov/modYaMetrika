<?php

abstract class modYaMetrikaMainController extends modExtraManagerController {

	public $modYaMetrika;

	public function initialize() {
		$corePath = $this->modx->getOption('modyametrika_core_path', null, $this->modx->getOption('core_path') . 'components/modyametrika/');
		require_once $corePath . 'model/modyametrika/modyametrika.class.php';

		$this->modYaMetrika = new modYaMetrika($this->modx);
		$this->addCss($this->modYaMetrika->config['cssUrl'] . 'mgr/main.css');
		$this->addJavascript($this->modYaMetrika->config['jsUrl'] . 'mgr/modyametrika.js');
		$this->addHtml('
		<script type="text/javascript">
			modYaMetrika.config = ' . $this->modx->toJSON($this->modYaMetrika->config) . ';
			modYaMetrika.config.connector_url = "' . $this->modYaMetrika->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}

	public function getLanguageTopics() {
		return array('modyametrika:default');
	}

	public function checkPermissions() {
		return true;
	}
}

class IndexManagerController extends modYaMetrikaMainController {

	public static function getDefaultController() {
		return 'counter';
	}
}