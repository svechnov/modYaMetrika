<?php
class modYaMetrikaSaveOptionsProcessor extends modProcessor {

	public function getLanguageTopics() {
			return array('modyametrika');
	}
	
  public function process() {
	
		$counter_code = $this->getProperty('counter_code');
		$counter_code_show = $this->getProperty('counter_code_show');
		if (!is_numeric($counter_code_show)) {
			$counter_code_show = in_array($counter_code_show, array($this->modx->lexicon('yes'), 'true', 'True')) ? 1 : 0;
			$this->setProperty('counter_code_show',$counter_code_show);
		}
		
		if (!$objOptionCode = $this->modx->getObject('modSystemSetting',array('key' => 'modyametrika_counter_code'))) return $this->failure();
		
		if (!$objOptionCodeShow = $this->modx->getObject('modSystemSetting',array('key' => 'modyametrika_counter_code_show'))) return $this->failure();

		$objOptionCode->set('value',$counter_code);
		$objOptionCodeShow->set('value',$counter_code_show);
		
		if (!$objOptionCode->save() or !$objOptionCodeShow->save()) return $this->failure();
		
		$this->modx->cacheManager->refresh();

		return $this->success();
	}
	
}

return 'modYaMetrikaSaveOptionsProcessor';
