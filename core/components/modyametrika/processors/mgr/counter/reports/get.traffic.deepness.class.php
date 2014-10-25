<?php
class modYaMetrikaGetStatReportTrafficDeepnessProcessor extends modProcessor {

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

		$params = array();
		$dataArray = array();
		$results = array();
		
		$params['id'] = $this->getProperty('id');
		$params['oauth_token'] = $this->getProperty('oauth_token');
		$date1 = $this->getProperty('date1');
		$date2 = $this->getProperty('date2');
		
		if (!empty($params['id']) and !empty($params['oauth_token'])) { 
			$api_action = 'stat/traffic/deepness.json';
			
			if (!empty($date1)) $params['date1'] = date('Ymd',strtotime($date1));
			if (!empty($date2)) $params['date2'] = date('Ymd',strtotime($date2));
			
			$response = $this->modYaMetrika->requestApi($api_action,'GET',$params);
			
			if ($response->json != null) {
				$this->getProperty('deepness_type','time') == 'time'
					? $dataArray = $response->json['data_time']
					: $dataArray = $response->json['data_depth'];
			
				foreach($dataArray as $data) {
					$results[] = array(
						'name' => $data['name'],
						'visits' => $data['visits'],
					);
				}
			}
		}

		return $this->outputArray($results);
	}
	
}

return 'modYaMetrikaGetStatReportTrafficDeepnessProcessor';
