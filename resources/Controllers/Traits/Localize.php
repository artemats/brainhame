<?php

namespace Controllers\Traits;


use Theme\Help;
use Theme\SetupTheme;

trait Localize {

    static $page_data;

    public function __construct() {
        self::declaration_ajax();
    }

    public function __after() {
        add_action( 'wp_footer', array($this, 'localizeVar') );
        self::$page_data = $this->data;

//        self::getSelfData();
//        Help::debug($this->data);

//        $page_data = self::getSelfData();
//        var_dump($page_data);

        // $this->class


//        $data = [];
//        foreach ($this->data as $key => $value) {
//            if ( substr($key, 0, 1) !== '_' && $key !== "acf_options" ) {
//                $data[$key] = $value;
//            }
//        }
//        SetupTheme::$footer_vars['viewData'] = $data;
    }

    public static function ajax_nopriv_getPageFields() {
//        global $page_data;
        $pageName = self::getPostVar('page');
        $page_id = get_page_by_path($pageName);
        $fields = get_fields($page_id);
//
//        wp_send_json_success([
//            'fields'=>$fields
//        ]);
        $page_data = self::getSelfData();
        if ( $fields ) {
            $page_data = array_merge($fields, $page_data);
        }

        wp_send_json_success($page_data);
    }
    
    public static function localizeVar() {
        $exclude = ['acf_options', 'localize_var'];

        echo "<script>";
        echo "window.viewData = {};" . "\n";
        echo "</script>";

        foreach ( self::$page_data as $key => $value ) {
            if ( substr($key, 0, 1) !== '_' && !in_array($key, $exclude) ) {

                echo "<script>";
                if ( is_array( $value ) || is_object($value) ) {
                    $value = json_encode( $value, JSON_UNESCAPED_UNICODE );
                } elseif ( is_string( $value ) ) {
//                    $value = "'$value'";
                    $clear = preg_replace('/\R+/', " ", $value);
                    $value = "'{$clear}'";
                }

                echo "window.viewData.{$key} = {$value};" . "\n";
                echo "</script>";
            }
        }

        return false;
    }

}
