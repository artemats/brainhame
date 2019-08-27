<?php
/**
 * Created by PhpStorm.
 * User: skipin
 * Date: 14.09.18
 * Time: 15:06
 */

namespace Theme;

use HaydenPierce\ClassFinder\ClassFinder;
use Theme\helpers\TemplateLoader;

class SageAdminPages {

    private static $page_title;

    private static $page_subtitle;

    static $page_slug;

    public static function init() {
        self::$page_title    = __( 'Обновление', 'Mes' );
        self::$page_subtitle = __( 'Обновление', 'Mes' );
        self::$page_slug = self::createPageSlug(get_class());


        add_action('admin_menu', array(__CLASS__, 'addMainPage'));

        self::registerSubpage();
    }

    public static function createPageTitle($class) {
        $true_name = self::getTrueClassName($class);
        $lower = ucwords(preg_replace('/[A-Z]/', ' $0', $true_name));

        return substr($lower, 1);
    }

    public static function createPageSlug($class) {
        $true_name = self::getTrueClassName($class);
        $lower = strtolower(preg_replace('/[A-Z]/', '_$0', $true_name));

        return substr($lower, 1);
    }

    public static function getTrueClassName( $class = null ) {
        $reflect = new \ReflectionClass( $class );

        return $reflect->getShortName();
    }

    public static function addMainPage() {
        add_menu_page(self::$page_title, self::$page_title, 'edit_posts', self::$page_slug, null, 'dashicons-upload');
    }

    public static function registerSubpage() {
//        $pages_path = plugin_dir_path(__FILE__) . get_class() . '/';
//        foreach (glob($pages_path . '*.*') as $file) {
//            include_once ( $pages_path . basename($file) );
//            $name = explode('.', basename($file))[0];
//            $this->{$name} = new $name($this);
//        }

        $classes = ClassFinder::getClassesInNamespace(__NAMESPACE__ . '\admin');
        foreach($classes as $class) {
            new $class();
        }
    }

    public static function renderView( $file, $args = array() ) {
        $fullpath = dirname( __FILE__ ) . '/admin/templates/' . $file;

        TemplateLoader::render_template_part($fullpath, null, $args, true);
    }

    public static function adminBrowserSync() {
        self::renderView( 'browser_sync.php' );
    }
    
    public static function getTemplateName($class) {
        $short = self::getTrueClassName($class);
        $name = strtolower( preg_replace("/([A-Z])/", "-$1", $short) );

        $template = substr($name, 1);
        return $template;
    }

}
