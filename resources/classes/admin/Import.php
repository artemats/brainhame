<?php
/**
 * Created by PhpStorm.
 * User: skipin
 * Date: 25.10.18
 * Time: 17:27
 */

namespace Theme\admin;

use Theme\helpers\AjaxHelper;
use Theme\libs\GoogleSheetsApi;
use Theme\SageAdminPages;

class Import extends AjaxHelper {
    static $page_title;
    static $page_slug;

    public function __construct() {
        self::$page_title = SageAdminPages::createPageTitle( get_class() );
        self::$page_slug  = SageAdminPages::createPageSlug( get_class() );

        add_action( 'admin_menu', array( $this, 'addSubpage' ) );

        add_action( 'admin_head', array( __CLASS__, 'admin_header' ) );

        self::declaration_ajax();
    }

    public static function debug($var) {
        echo "<pre>";
        var_dump($var);
        echo "</pre>";
    }

    public static function admin_header() {
//        $page = ( isset($_GET['page'] ) ) ? esc_attr( $_GET['page'] ) : false;
//        if( self::$page_slug != $page )
//            return;

        echo '<style type="text/css">';

        echo ".result_import { min-height: 400px; margin-top: 30px; }";

        echo '</style>';
    }

    public function addSubpage() {
//        add_submenu_page(
//            SageAdminPages::$page_slug,
//            self::$page_title,
//            self::$page_title,
//            'edit_posts',
//            self::$page_slug,
//            array( $this, 'pageInner' ) );
        add_submenu_page(
            SageAdminPages::$page_slug,
            self::$page_title,
            self::$page_title,
            'edit_posts',
            SageAdminPages::$page_slug,
            array( $this, 'pageInner' ) );
    }

    public function pageInner() {
//        add_action( 'admin_footer', array( 'Theme\SageAdminPages', 'adminBrowserSync' ) );
//        wp_enqueue_media();

//      echo "<pre>";
//	    parseAttributes::parseFile(self::$dir . $filename);
//	    echo "</pre>";

//        $items = self::getItems();
//
//        $list = self::$list;
//        $list->updateParams([
//            'items' => $items,
//            'total' => self::getCount(),
//            'per_page' => self::getScreenPostPerPage(),
//        ]);
//        $list->prepare_items();

        $template = SageAdminPages::getTemplateName( __CLASS__ );
        SageAdminPages::renderView( $template, [
//            'table' => $list
        ] );
    }

    public static function ajax_readFromDocs() {
        $ids = [];

        $api = new GoogleSheetsApi();
        $ids = $api->parseCategories();

        $template = 'Insert term with id (%d) - %s';
        $message = sprintf($template, count($ids), implode(', ', $ids));

        wp_send_json_success(['message' => $message]);

        wp_die();
    }

}
