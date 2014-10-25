<?php

class modYaMetrika {

	public $modx;

	function __construct(modX &$modx, array $config = array()) {
		$this->modx =& $modx;

		$corePath = $this->modx->getOption('modyametrika_core_path', $config, $this->modx->getOption('core_path') . 'components/modyametrika/');
		$assetsUrl = $this->modx->getOption('modyametrika_assets_url', $config, $this->modx->getOption('assets_url') . 'components/modyametrika/');
		$connectorUrl = $assetsUrl . 'connector.php';

		$this->config = array_merge(array(
			'assetsUrl' => $assetsUrl,
			'cssUrl' => $assetsUrl . 'css/',
			'jsUrl' => $assetsUrl . 'js/',
			'imagesUrl' => $assetsUrl . 'images/',
			'connectorUrl' => $connectorUrl,

			'corePath' => $corePath,
			'modelPath' => $corePath . 'model/',
			'chunksPath' => $corePath . 'elements/chunks/',
			'templatesPath' => $corePath . 'elements/templates/',
			'chunkSuffix' => '.chunk.tpl',
			'snippetsPath' => $corePath . 'elements/snippets/',
			'processorsPath' => $corePath . 'processors/'
		), $config);

		$this->modx->addPackage('modyametrika', $this->config['modelPath']);
		$this->modx->lexicon->load('modyametrika:default');
	}

	function requestApi($api_action,$method = 'GET',array $params = array()) {
		if (empty($api_action)) return false;
		if ($this->modx->rest == null) {
			$this->modx->getService('rest','rest.modRestClient');
			if (!$this->modx->rest->getConnection()) return false;
		}
		$this->modx->rest->setResponseType('json');
		$url = $this->modx->getOption('modyametrika_api_url').$api_action;
		return $this->modx->rest->request($url,'',$method,$params);
	}
	
	// function addTabResourse() {
		// $this->modx->regClientStartupHTMLBlock('<script type="text/javascript">
			// MODx.on("ready",function() {
				// MODx.addTab("modx-resource-tabs",{
					// id: "modyametrika-resourse-settings"
					// ,title: "'.$this->modx->lexicon('modyametrika').'"
					// ,cls: "modx-resource-tab"
					// ,layout: "form"
					// ,forceLayout: true
					// ,deferredRender: false
					// ,labelWidth: 200
					// ,bodyCssClass: "main-wrapper"
					// ,autoHeight: true
					// ,defaults: {
						// border: false
						// ,msgTarget: "under"
					// }
					// ,items: [
						// {
							// xtype: "xcheckbox"
							// ,boxLabel: "'.$this->modx->lexicon('modyametrika_resourse_settings_code_show').'"
							// ,hideLabel: true
							// ,name: "modyametrika_show_code"
						// }
					// ]
				// });
			// });                
		// </script>');
	// }

}