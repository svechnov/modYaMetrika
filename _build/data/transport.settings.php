<?php

$settings = array();

$tmp = array(
	'token' => array(
		'xtype' => 'textfield',
		'value' => '05dd3dd84ff948fdae2bc4fb91f13e22',
		'area' => 'modyametrika_main',
	),
	'counter' => array(
		'xtype' => 'textfield',
		'value' => '2138128',
		'area' => 'modyametrika_main',
	),
	'api_url' => array(
		'xtype' => 'textfield',
		'value' => 'http://api-metrika.yandex.ru/',
		'area' => 'modyametrika_main',
	),
	'counter_code' => array(
		'xtype' => 'textarea',
		'value' => '',
		'area' => 'modyametrika_main',
	),
	'counter_code_show' => array(
		'xtype' => 'combo-boolean',
		'value' => false,
		'area' => 'modyametrika_main',
	),
	'only_static' => array(
		'xtype' => 'combo-boolean',
		'value' => false,
		'area' => 'modyametrika_main',
	),
);

foreach ($tmp as $k => $v) {
	/* @var modSystemSetting $setting */
	$setting = $modx->newObject('modSystemSetting');
	$setting->fromArray(array_merge(
		array(
			'key' => 'modyametrika_' . $k,
			'namespace' => PKG_NAME_LOWER,
		), $v
	), '', true, true);

	$settings[] = $setting;
}

unset($tmp);
return $settings;
