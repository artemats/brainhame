<?php
/**
 * Created by PhpStorm.
 * User: skipin
 * Date: 05.10.18
 * Time: 16:07
 */

namespace Theme;

use function App\asset_path as asset_path;

class SetupTheme {

    static $front_vars = [];
    static $footer_vars = [];
    static $admin_vars = [];

    static $taxonomies = [];


    public function __construct() {
        self::setupControllers();

        add_action('admin_enqueue_scripts', array(__CLASS__, 'adminAssets') );
        add_action('wp_enqueue_scripts', array(__CLASS__, 'themeAssets'));

        add_action( 'admin_head', array(__CLASS__, 'localAdminVars') );
        add_action( 'wp_head', array(__CLASS__, 'localFrontVars') );
        add_action( 'wp_footer', array(__CLASS__, 'localFooterVars') );

	    add_filter('upload_mimes', array(__CLASS__, 'cc_mime_types'));
//	    add_theme_support( 'woocommerce' );

	    self::register();
	    self::registerWhoops();

//	    add_action('plugins_loaded', array(__CLASS__, 'setupColumns'));

//        add_filter("manage_edit-product_sortable_columns", array(__CLASS__, 'addProductSortableCols'), 15, 1);
//        add_filter("manage_edit-brands_sortable_columns", array(__CLASS__, 'addProductSortableCols'));

//	    self::sortableTaxCols();
//        add_filter("manage_edit-product_columns", array(__CLASS__, 'checkProductCols'));
//        add_filter("manage_edit-product_custom_column", array(__CLASS__, 'checkProductCols'));


//	    self::getData();

        add_filter('bcn_breadcrumb_title', array(__CLASS__, 'breadcrumbTitle'), 3, 10);

        add_filter('sanitize_html_class', array(__CLASS__, 'classFilter'), 10, 2);

//        add_filter('wp_all_import_auto_create_csv_headers', array(__CLASS__, 'filterHeaders'), 10, 2);
    }
    
    public static function setupColumns() {
        add_filter("manage_edit-product_sortable_columns", array(__CLASS__, 'addProductSortableCols'));
        add_filter("manage_edit-brands_sortable_columns", array(__CLASS__, 'addProductSortableCols'));
    }

    public static function checkProductCols($columns) {
        $col_id = 'taxonomy-collections';
        var_dump($columns);
        $columns[$col_id] = 'test';
//        wp_die();

        return $columns;
    }

    public static function addProductSortableCols($columns) {
        $col_id = 'taxonomy-collections';
        $columns[$col_id] = $col_id;
//        $columns[$col_id] = 'collections';

        return $columns;
    }

    public static function registerWhoops() {
        if ( WP_DEBUG && class_exists( 'Whoops\\Run' ) && !is_admin() ) {
            $whoops = new \Whoops\Run;
            $whoops->pushHandler( new \Whoops\Handler\PrettyPageHandler );
            $whoops->register();
        }
    }

    public static function localAdminVars() {
        $filter_vars = apply_filters( 'admin_vars', self::$admin_vars );

        echo "<script>";
        foreach ( $filter_vars as $key => $value ) {
            if ( is_array( $value ) || is_object($value) ) {
                $value = json_encode( $value, JSON_UNESCAPED_UNICODE );
            } elseif ( is_string( $value ) ) {
                $value = "'$value'";
            }

            echo "window.{$key} = {$value};" . "\n";
        }
        echo "</script>";
    }

    public static function localFrontVars() {
        $filter_vars = apply_filters( 'locale_vars', self::$front_vars );

        foreach ( $filter_vars as $key => $value ) {
            echo "<script>";
            if ( !is_string( $value ) ) {
                $value = json_encode( $value, JSON_UNESCAPED_UNICODE );
            } elseif ( is_string( $value ) ) {
                $value = "'$value'";
            }

            echo "window.{$key} = {$value};" . "\n";
            echo "</script>";
        }
    }

    public static function localFooterVars() {
        $filter_vars = apply_filters( 'footer_vars', self::$footer_vars );

        foreach ( $filter_vars as $key => $value ) {
            echo "<script>";
            if ( is_array( $value ) || is_object($value) ) {
                $value = json_encode( $value, JSON_UNESCAPED_UNICODE );
            } elseif ( is_string( $value ) ) {
                $value = "'$value'";
            }

            echo "window.{$key} = {$value};" . "\n";
            echo "</script>";
        }
    }

    public static function filterHeaders($create_headers, $import_id) {
//        var_dump($headers);
        var_dump($import_id);

//        wp_die();
        return true;
    }

    public static function classFilter($sanitized, $class) {
        if ( 0 === strpos( $class, 'dashicons-' ) ) {
            return $class;
        } else {
            return $sanitized;
        }
    }

    public static function breadcrumbTitle($title, $type, $id) {
        if(in_array('home', $type)) {
            $frontpage_id = get_option( 'page_on_front' );
            $title = get_the_title($frontpage_id);
        }

        return $title;
    }

	public static function register() {
		register_nav_menus([
			'footer-menu' => __('Footer menu', 'Theme')
		]);
	}

    public static function setupControllers() {
        /**
         * Change folder connect controllers
         */
        add_filter('sober/controller/path', function () {
            return dirname(get_template_directory()) . '/resources/Controllers';
        });
        add_filter('sober/controller/namespace', function () {
            return 'Controllers';
        });
    }

    public static function realAssets($file = '') {
        return dirname(get_template_directory_uri()) . '/resources/assets/' . $file;
    }

    public static function adminAssets() {
        $ver = microtime( 1 );
        wp_enqueue_style('admin/fontawesome', '//use.fontawesome.com/releases/v5.6.3/css/all.css', false, null);
        wp_enqueue_style('sage/admin', asset_path('styles/admin.css'), false, $ver);
        wp_enqueue_script('sage/admin', asset_path('scripts/admin.js'), ['jquery'], $ver, true);
    }

    public static function themeAssets() {
        $ver = microtime( 1 );
//        if ( function_exists('get_field') ) {
//            $site_setting = array(
//                'setting' => get_fields( 'options' )
//            );
//            wp_localize_script( 'jquery', 'site_setting', $site_setting );
//        }

        wp_enqueue_style('sage/fonts', self::realAssets('fonts/fonts.css'), false, $ver);

		wp_enqueue_script('sage/vue', asset_path('scripts/vue.js'), ['jquery'], $ver, true);
        wp_enqueue_style('sage/vue', asset_path('styles/vue.css'), false, $ver);

	    wp_localize_script('jquery', 'ajaxurl',  admin_url('admin-ajax.php'));
    }

	public static function cc_mime_types($mimes) {
		$types = array(
			'svg' => 'image/svg+xml',
		);

		foreach ($types as $key => $value) {
			$mimes[$key] = $value;
		}

		return $mimes;
	}

}
