<?php
// For debug
 ini_set('display_errors', 1);
 ini_set('error_reporting', -1);

// require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
	require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
} else {
	require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}


require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
require_once MODX_CONNECTORS_PATH . 'index.php';

$modYaMetrika = $modx->getService('modyametrika', 'modYaMetrika', $modx->getOption('modyametrika_core_path', null, $modx->getOption('core_path') . 'components/modyametrika/') . 'model/modyametrika/');
$modx->lexicon->load('modyametrika:default');


$corePath = $modx->getOption('modyametrika_core_path', null, $modx->getOption('core_path') . 'components/modyametrika/');
$path = $modx->getOption('processorsPath', $modYaMetrika->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));
