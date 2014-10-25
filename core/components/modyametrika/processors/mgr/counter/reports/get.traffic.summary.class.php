<?php
class modYaMetrikaGetStatReportTrafficSummaryProcessor extends modProcessor {

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
		$results = array();
		
		$params['id'] = $this->getProperty('id');
		$params['oauth_token'] = $this->getProperty('oauth_token');
		$date1 = $this->getProperty('date1');
		$date2 = $this->getProperty('date2');
		$params['group'] = $this->getProperty('group','day');
		
		if (!empty($params['id']) and !empty($params['oauth_token'])) { 
			$api_action = 'stat/traffic/summary.json';
			
			if (!empty($date1)) $params['date1'] = date('Ymd',strtotime($date1));
			if (!empty($date2)) $params['date2'] = date('Ymd',strtotime($date2));
			
			$response = $this->modYaMetrika->requestApi($api_action,'GET',$params);
			
			if ($response->json != null) {
				foreach ($response->json['data'] as $key => $row) { $date[$key]  = $row['date']; }
				array_multisort($date, SORT_ASC, $response->json['data']);
				foreach($response->json['data'] as $data) {
					$results[] = array(
						'date' => $params['group'] == 'month' ? date('M-Y',strtotime($data['date'])).' ' : date('d-m-Y',strtotime($data['date'])).' ',
						'visits' => $this->getProperty('visits') > 0 ? $data['visits'] : '',
						'page_views' => $this->getProperty('page_views') > 0 ? $data['page_views'] : 0,
						'visitors' => $this->getProperty('visitors') > 0 ? $data['visitors'] : 0,
						'new_visitors' => $this->getProperty('new_visitors') > 0 ? $data['new_visitors'] : 0,
					);
				}
			}
		}

		return $this->outputArray($results);
	}
	
}

return 'modYaMetrikaGetStatReportTrafficSummaryProcessor';
