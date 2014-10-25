<?php
include_once 'setting.inc.php';

$_lang['modyametrika'] = 'Yandex.Metrika';
$_lang['modyametrika_menu_desc'] = '';

$_lang['modyametrika_counter_tab_info'] = 'Information on the counter';
$_lang['modyametrika_counter_tab_stat'] = 'Statistics';
$_lang['modyametrika_counter_tab_setup'] = 'Settings';

$_lang['modyametrika_counter_id'] = 'Counter number';
$_lang['modyametrika_counter_name'] = 'Name of the site';
$_lang['modyametrika_counter_code'] = 'HTML-code counter';
$_lang['modyametrika_counter_owner_login'] = 'Login owner';
$_lang['modyametrika_counter_code_status'] = 'Installation status';
$_lang['modyametrika_counter_site'] = 'Domain site';
$_lang['modyametrika_counter_permission'] = 'Access Level';
$_lang['modyametrika_counter_token'] = 'Authorization token';
$_lang['modyametrika_counter_type'] = 'Counter type';
$_lang['modyametrika_counter_tech_info'] = 'Technical information';
$_lang ['modyametrika_counter_opt_clickmap'] = 'Collect statistics for the report card clicks'; 
$_lang ['modyametrika_counter_opt_external_links'] = 'Collect statistics on the links to external resources'; 
$_lang ['modyametrika_counter_opt_async'] = 'An asynchronous counter code'; 
$_lang ['modyametrika_counter_opt_visor'] = 'Recording and analysis of the behavior of visitors to the site'; 
$_lang ['modyametrika_counter_opt_params'] ='Passing parameters to the report «Options visits»'; 
$_lang ['modyametrika_counter_opt_denial'] = 'The exact bounce rate'; 
$_lang ['modyametrika_counter_opt_ut'] = 'The ban on sending indexed pages'; 
$_lang ['modyametrika_counter_opt_track_hash'] = 'Tracking the hash in your browser'; 
$_lang ['modyametrika_counter_code_options'] = 'Settings counter code'; 
$_lang ['modyametrika_counter_informer'] = 'Informer'; 
$_lang ['modyametrika_counter_informer_enabled'] = 'Enable display informer'; 
$_lang ['modyametrika_counter_informer_type'] = 'Type informer'; 
$_lang ['modyametrika_counter_informer_type_simple'] = 'Simple'; 
$_lang ['modyametrika_counter_informer_type_ext'] = 'Advanced'; 
$_lang ['modyametrika_counter_informer_size'] = 'Type the size of the informer'; 
$_lang ['modyametrika_counter_informer_size_1'] = '80x15'; 
$_lang ['modyametrika_counter_informer_size_2'] = '80x31'; 
$_lang ['modyametrika_counter_informer_size_3'] = '88x31'; 
$_lang ['modyametrika_counter_informer_indicator'] = 'index, which will appear on the informer'; 
$_lang ['modyametrika_counter_informer_indicator_pageviews'] = 'Views'; 
$_lang ['modyametrika_counter_informer_indicator_visits'] = 'Visits'; 
$_lang ['modyametrika_counter_informer_indicator_uniques'] = 'Customers'; 
$_lang ['modyametrika_counter_informer_color_start'] = 'Initial (top) widget color'; 
$_lang ['modyametrika_counter_informer_color_end'] = 'end (bottom) widget color'; 
$_lang ['modyametrika_counter_informer_color_text'] = 'text color on the informer'; 
$_lang ['modyametrika_counter_informer_color_text_0'] = 'black'; 
$_lang ['modyametrika_counter_informer_color_text_1'] = 'White'; 
$_lang ['modyametrika_counter_informer_color_arrow'] = 'The color of the arrows on the informer'; 
$_lang ['modyametrika_counter_informer_color_arrow_0'] = 'black'; 
$_lang ['modyametrika_counter_informer_color_arrow_1'] = 'Purple'; 
$_lang ['modyametrika_counter_informer_allowed'] = 'Enable the inclusion of HTML code in the widget code counter'; 

$_lang ['modyametrika_setup_counter_code'] = 'HTML-code counter on this site'; 

$_lang ['modyametrika_counter_btn_refresh_from_api'] = 'Update details'; 
$_lang ['modyametrika_counter_btn_use_in_site'] = 'Use this site'; 

$_lang ['modyametrika_counter_code_status_CS_ERR_CONNECT'] = 'Failed to check (connection error)'; 
$_lang ['modyametrika_counter_code_status_CS_ERR_DUPLICATED'] = 'Installed more than once'; 
$_lang ['modyametrika_counter_code_status_CS_ERR_HTML_CODE'] = 'not installed correctly'; 
$_lang ['modyametrika_counter_code_status_CS_ERR_OTHER_HTML_CODE'] = 'You have already installed another counter'; 
$_lang ['modyametrika_counter_code_status_CS_ERR_TIMEOUT'] = 'Failed to check (timeout)'; 
$_lang ['modyametrika_counter_code_status_CS_ERR_UNKNOWN'] = 'Unknown error'; 
$_lang ['modyametrika_counter_code_status_CS_NEW_COUNTER'] = 'newly created'; 
$_lang ['modyametrika_counter_code_status_CS_NA'] = 'Not applicable to this counter'; 
$_lang ['modyametrika_counter_code_status_CS_NOT_EVERYWHERE'] = 'is not installed on all pages'; 
$_lang ['modyametrika_counter_code_status_CS_NOT_FOUND'] = 'Do not set'; 
$_lang ['modyametrika_counter_code_status_CS_NOT_FOUND_HOME'] = 'is not installed on the main page'; 
$_lang ['modyametrika_counter_code_status_CS_NOT_FOUND_HOME_LOAD_DATA'] = 'is not installed on the main page, but the data is coming'; 
$_lang ['modyametrika_counter_code_status_CS_OBSOLETE'] = 'an outdated version of the counter code'; 
$_lang ['modyametrika_counter_code_status_CS_OK'] = 'installed correctly'; 
$_lang ['modyametrika_counter_code_status_CS_OK_NO_DATA'] = 'is set, but the data are not available'; 
$_lang ['modyametrika_counter_code_status_CS_WAIT_FOR_CHECKING'] = 'Pending availability'; 
$_lang ['modyametrika_counter_code_status_CS_WAIT_FOR_CHECKING_LOAD_DATA'] = 'Pending availability, data is coming'; 

$_lang ['modyametrika_counter_permission_own'] = 'own counter'; 
$_lang ['modyametrika_counter_permission_view'] = 'Guest (view only)'; 
$_lang ['modyametrika_counter_permission_edit'] = 'Guest (full access)'; 

$_lang ['modyametrika_counter_type_simple'] = 'Counter created in the metrics'; 
$_lang ['modyametrika_counter_type_partner'] = 'Counter imported from RSA'; 

$_lang ['modyametrika_msg_no_options'] = 'In the settings module should fill the meter number and an authorization token'; 
$_lang ['modyametrika_msg_site_do_not_match'] = 'The domain of the counter and the site does not match'; 

$_lang ['modyametrika_resourse_settings_code_show'] = 'Display counter on this page'; 

$_lang ['modyametrika_report'] = 'Report to view'; 
$_lang ['modyametrika_report_select'] = 'Select the report'; 
$_lang ['modyametrika_report_error_render'] = 'An error occurred while generating the report'; 

$_lang ['modyametrika_report_traffic_summary'] = 'visitors'; 
$_lang ['modyametrika_report_traffic_summary_visits'] = 'Visits'; 
$_lang ['modyametrika_report_traffic_summary_page_views'] = 'views'; 
$_lang ['modyametrika_report_traffic_summary_visitors'] = 'Customers'; 
$_lang ['modyametrika_report_traffic_summary_new_visitors'] = 'New Visitors'; 

$_lang ['modyametrika_report_traffic_deepness'] = 'involvement'; 

$_lang ['modyametrika_report_sources_summary'] = 'Sources'; 

$_lang ['modyametrika_report_filter_apply'] = 'Apply Filter'; 
$_lang ['modyametrika_report_filter_date1'] = 'start date'; 
$_lang ['modyametrika_report_filter_date2'] = 'End Date'; 
$_lang ['modyametrika_report_filter_group'] = 'Significant Groupings in time'; 
$_lang ['modyametrika_report_filter_group_day'] = 'For days'; 
$_lang ['modyametrika_report_filter_group_week'] = 'Weekly'; 
$_lang ['modyametrika_report_filter_group_month'] = 'Monthly'; 
$_lang ['modyametrika_report_filter_deepness_type'] = 'parameter'; 
$_lang ['modyametrika_report_filter_deepness_type_time'] = 'At the time'; 
$_lang ['modyametrika_report_filter_deepness_type_depth'] = 'In depth view';