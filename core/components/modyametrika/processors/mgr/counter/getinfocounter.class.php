<?php
class modYaMetrikaGetInfoCounterProcessor extends modProcessor {

	public $modYaMetrika;

	public function getLanguageTopics() {
			return array('modyametrika');
	}
	
	public function initialize() {
		$this->modYaMetrika = $this->modx->getService('modyametrika','modYaMetrika',$this->modx->getOption('modyametrika_core_path',null,$this->modx->getOption('core_path').'components/modyametrika/').'model/modyametrika/',$scriptProperties);
		if (!($this->modYaMetrika instanceof modYaMetrika)) return false;
		return parent::initialize();
	}
	
  public function process() {
		$counterId = $this->getProperty('id');
		$counterToken = $this->getProperty('token');
		
		if (empty($counterId) or empty($counterToken)) return $this->failure();
		
		$api_action = 'counter/'.$counterId.'.json';
		$method = $this->getProperty('method','GET');
		$paramArray = array('oauth_token' => $counterToken);
		
		$response = $this->modYaMetrika->requestApi($api_action,$method,$paramArray);
		
		if ($response->json != null) {
			return $this->success('',$response->json);
		} else {
			return $this->failure($response->response);
		}
	}
	
}

return 'modYaMetrikaGetInfoCounterProcessor';
