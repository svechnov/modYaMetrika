<?php
switch ($modx->event->name) {
	case 'OnWebPageInit':
		if ($modx->getOption('modyametrika_counter_code_show') != '1') return '';
		if ($addJs = $modx->getOption('modyametrika_counter_code')) {
			$modx->regClientScript($addJs);
		}
		break;		
	// case 'OnDocFormRender': //Будет допилено, когда будет понимание того, что тут должно быть
		// if ($modx->getOption('modyametrika_counter_code_show') != '1') return '';
		// $modx->modYaMetrika = $modx->getService('modyametrika','modYaMetrika',$modx->getOption('modyametrika_core_path',null,$modx->getOption('core_path').'components/modyametrika/').'model/modyametrika/',$scriptProperties);
		// if ($modx->modYaMetrika instanceof modYaMetrika) {
			// $modx->modYaMetrika->addTabResourse();
		// }
		
		// break;
}