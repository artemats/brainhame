<?php


namespace Theme;


use Theme\helpers\AjaxHelper;

class AjaxActions extends AjaxHelper {

    public function __construct() {
        self::declaration_ajax();
    }

    public static function ajax_nopriv_getContactForm() {
        $form_id = intval( self::getPostVar('formId') );
        $form = Help::getContactForm($form_id);

        wp_send_json_success(['form'=>$form]);
    }

}
