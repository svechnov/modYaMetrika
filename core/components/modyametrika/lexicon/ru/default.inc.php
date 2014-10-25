<?php
include_once 'setting.inc.php';

$_lang['modyametrika'] = 'Яндекс.Метрика';
$_lang['modyametrika_menu_desc'] = '';

$_lang['modyametrika_counter_tab_info'] = 'Информация о счетчике';
$_lang['modyametrika_counter_tab_stat'] = 'Статистика';
$_lang['modyametrika_counter_tab_setup'] = 'Настройки';

$_lang['modyametrika_counter_id'] = 'Номер счетчика';
$_lang['modyametrika_counter_name'] = 'Наименование сайта';
$_lang['modyametrika_counter_code'] = 'HTML-код счетчика';
$_lang['modyametrika_counter_owner_login'] = 'Логин владельца';
$_lang['modyametrika_counter_code_status'] = 'Статус установки';
$_lang['modyametrika_counter_site'] = 'Полный домен сайта';
$_lang['modyametrika_counter_permission'] = 'Уровень доступа';
$_lang['modyametrika_counter_token'] = 'Авторизационный токен';
$_lang['modyametrika_counter_type'] = 'Тип счетчика';
$_lang['modyametrika_counter_tech_info'] = 'Техническая информация';
$_lang['modyametrika_counter_opt_clickmap'] = 'Сбор статистики для работы отчета Карта кликов';
$_lang['modyametrika_counter_opt_external_links'] = 'Сбор статистики по ссылкам на внешние ресурсы';
$_lang['modyametrika_counter_opt_async'] = 'Асинхронный код счетчика';
$_lang['modyametrika_counter_opt_visor'] = 'Запись и анализ поведения посетителей сайта';
$_lang['modyametrika_counter_opt_params'] = 'Передача параметров в отчет «Параметры визитов»';
$_lang['modyametrika_counter_opt_denial'] = 'Точный показатель отказов';
$_lang['modyametrika_counter_opt_ut'] = 'Запрет отправки на индексацию страниц сайта';
$_lang['modyametrika_counter_opt_track_hash'] = 'Отслеживание хеша в адресной строке браузера';
$_lang['modyametrika_counter_code_options'] = 'Настройки кода счетчика';
$_lang['modyametrika_counter_informer'] = 'Информер';
$_lang['modyametrika_counter_informer_enabled'] = 'Разрешение отображения информера';
$_lang['modyametrika_counter_informer_type'] = 'Тип информера';
$_lang['modyametrika_counter_informer_type_simple'] = 'Простой';
$_lang['modyametrika_counter_informer_type_ext'] = 'Расширенный';
$_lang['modyametrika_counter_informer_size'] = 'Тип размера информера';
$_lang['modyametrika_counter_informer_size_1'] = '80х15';
$_lang['modyametrika_counter_informer_size_2'] = '80х31';
$_lang['modyametrika_counter_informer_size_3'] = '88х31';
$_lang['modyametrika_counter_informer_indicator'] = 'Показатель, который будет отображаться на информере';
$_lang['modyametrika_counter_informer_indicator_pageviews'] = 'Просмотры';
$_lang['modyametrika_counter_informer_indicator_visits'] = 'Визиты';
$_lang['modyametrika_counter_informer_indicator_uniques'] = 'Посетители';
$_lang['modyametrika_counter_informer_color_start'] = 'Начальный (верхний) цвет информера';
$_lang['modyametrika_counter_informer_color_end'] = 'Конечный (нижний) цвет информера';
$_lang['modyametrika_counter_informer_color_text'] = 'Цвет текста на информере';
$_lang['modyametrika_counter_informer_color_text_0'] = 'Черный';
$_lang['modyametrika_counter_informer_color_text_1'] = 'Белый';
$_lang['modyametrika_counter_informer_color_arrow'] = 'Цвет стрелки на информере';
$_lang['modyametrika_counter_informer_color_arrow_0'] = 'Черный';
$_lang['modyametrika_counter_informer_color_arrow_1'] = 'Фиолетовый';
$_lang['modyametrika_counter_informer_allowed'] = 'Разрешение включения HTML кода информера в код счетчика';

$_lang['modyametrika_setup_counter_code'] = 'HTML-код счетчика на этом сайте';

$_lang['modyametrika_counter_btn_refresh_from_api'] = 'Обновить данные';
$_lang['modyametrika_counter_btn_use_in_site'] = 'Использовать на этом сайте';

$_lang['modyametrika_counter_code_status_CS_ERR_CONNECT'] = 'Не удалось проверить (ошибка соединения)';
$_lang['modyametrika_counter_code_status_CS_ERR_DUPLICATED'] = 'Установлен более одного раза';
$_lang['modyametrika_counter_code_status_CS_ERR_HTML_CODE'] = 'Установлен некорректно';
$_lang['modyametrika_counter_code_status_CS_ERR_OTHER_HTML_CODE'] = 'Уже установлен другой счетчик';
$_lang['modyametrika_counter_code_status_CS_ERR_TIMEOUT'] = 'Не удалось проверить (превышено время ожидания)';
$_lang['modyametrika_counter_code_status_CS_ERR_UNKNOWN'] = 'Неизвестная ошибка';
$_lang['modyametrika_counter_code_status_CS_NEW_COUNTER'] = 'Недавно создан';
$_lang['modyametrika_counter_code_status_CS_NA'] = 'Не применим к данному счетчику';
$_lang['modyametrika_counter_code_status_CS_NOT_EVERYWHERE'] = 'Установлен не на всех страницах';
$_lang['modyametrika_counter_code_status_CS_NOT_FOUND'] = 'Не установлен';
$_lang['modyametrika_counter_code_status_CS_NOT_FOUND_HOME'] = 'Не установлен на главной странице';
$_lang['modyametrika_counter_code_status_CS_NOT_FOUND_HOME_LOAD_DATA'] = 'Не установлен на главной странице, но данные поступают';
$_lang['modyametrika_counter_code_status_CS_OBSOLETE'] = 'Установлена устаревшая версия кода счетчика';
$_lang['modyametrika_counter_code_status_CS_OK'] = 'Корректно установлен';
$_lang['modyametrika_counter_code_status_CS_OK_NO_DATA'] = 'Установлен, но данные не поступают';
$_lang['modyametrika_counter_code_status_CS_WAIT_FOR_CHECKING'] = 'Ожидает проверки наличия';
$_lang['modyametrika_counter_code_status_CS_WAIT_FOR_CHECKING_LOAD_DATA'] = 'Ожидает проверки наличия, данные поступают';

$_lang['modyametrika_counter_permission_own'] = 'Собственный счетчик';
$_lang['modyametrika_counter_permission_view'] = 'Гостевой (только просмотр)';
$_lang['modyametrika_counter_permission_edit'] = 'Гостевой (полный доступ)';

$_lang['modyametrika_counter_type_simple'] = 'Счетчик создан в Метрике';
$_lang['modyametrika_counter_type_partner'] = 'Счетчик импортирован из РСЯ';

$_lang['modyametrika_msg_no_options'] = 'В настройках модуля необходимо заполнить номер счетчика и авторизационный токен';
$_lang['modyametrika_msg_site_do_not_match'] = 'Домен счетчика и сайта не совпадают';

$_lang['modyametrika_resourse_settings_code_show'] = 'Отображать счетчик на этой странице';

$_lang['modyametrika_report'] = 'Отчет для просмотра';
$_lang['modyametrika_report_select'] = 'Выбрать отчет';
$_lang['modyametrika_report_error_render'] = 'Ошибка при генерации отчета';

$_lang['modyametrika_report_traffic_summary'] = 'Посещаемость';
$_lang['modyametrika_report_traffic_summary_visits'] = 'Визиты';
$_lang['modyametrika_report_traffic_summary_page_views'] = 'Просмотры';
$_lang['modyametrika_report_traffic_summary_visitors'] = 'Посетители';
$_lang['modyametrika_report_traffic_summary_new_visitors'] = 'Новые посетители';

$_lang['modyametrika_report_traffic_deepness'] = 'Вовлечение';

$_lang['modyametrika_report_sources_summary'] = 'Источники';

$_lang['modyametrika_report_filter_apply'] = 'Применить фильтр';
$_lang['modyametrika_report_filter_date1'] = 'Дата начала';
$_lang['modyametrika_report_filter_date2'] = 'Дата окончания';
$_lang['modyametrika_report_filter_group'] = 'Групировка по времени';
$_lang['modyametrika_report_filter_group_day'] = 'По дням';
$_lang['modyametrika_report_filter_group_week'] = 'По неделям';
$_lang['modyametrika_report_filter_group_month'] = 'По месяцам';
$_lang['modyametrika_report_filter_deepness_type'] = 'Параметр';
$_lang['modyametrika_report_filter_deepness_type_time'] = 'По времени';
$_lang['modyametrika_report_filter_deepness_type_depth'] = 'По глубине просмотра';
