<?php
/**
 * Created by PhpStorm.
 * User: skipin
 * Date: 19.04.18
 * Time: 10:33
 */

namespace Theme;

use function App\config;

class TGMPA
{
    public function __construct() {
//        $conf = config('assets');
//
//        var_dump($conf);
        add_action( 'tgmpa_register', array(__CLASS__, 'themeRecommendPlugin') );
    }

    public static function themeRecommendPlugin() {

        $plugins = array(
            // Include plugin from the WordPress Plugin Repository
            array(
                'name' => 'Advanced Custom Fields Pro', // The plugin name.
                'slug' => 'advanced-custom-fields-pro', // The plugin slug (typically the folder name).
                'source' => Help::assetSource('plugins/advanced-custom-fields-pro.zip', 'path'),
                'version' => '5.6.10', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'ACF Columns', // The plugin name.
                'slug' => 'acf-columns', // The plugin slug (typically the folder name).
                'version' => '1.2.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'ACF QuickEdit Fields', // The plugin name.
                'slug' => 'acf-quick-edit-fields', // The plugin slug (typically the folder name).
                'source' => Help::assetSource('plugins/acf-quick-edit-fields.zip', 'path'),
                'version' => '2.4.5', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

//            array(
//                'name' => 'ACF qTranslate', // The plugin name.
//                'slug' => 'acf-qtranslate', // The plugin slug (typically the folder name).
//                'version' => '1.7.23', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

            //            array(
            //                'name' => 'AceIDE', // The plugin name.
            //                'slug' => 'aceide', // The plugin slug (typically the folder name).
            //                'version' => '2.6.1', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            //            ),

            array(
                'name' => 'Admin Columns', // The plugin name.
                'slug' => 'codepress-admin-columns', // The plugin slug (typically the folder name).
                'version' => '3.1.5', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'Advanced Custom Fields: Font Awesome', // The plugin name.
                'slug' => 'advanced-custom-fields-font-awesome', // The plugin slug (typically the folder name).
                'version' => '2.1.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'Advanced Custom Fields: Image Crop Add-on', // The plugin name.
                'slug' => 'acf-image-crop-add-on', // The plugin slug (typically the folder name).
                'version' => '1.4.12', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'Ari adminer', // The plugin name. ari-adminer.zip
                'slug' => 'ari-adminer', // The plugin slug (typically the folder name).
                'source' => Help::assetSource('plugins/ari-adminer.zip', 'path'),
                'version' => '1.1.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'Contact Form 7', // The plugin name.
                'slug' => 'contact-form-7', // The plugin slug (typically the folder name).
                'version' => '5.0.1', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            //            array(
            //                'name' => 'Contact Form 7 Honeypot', // The plugin name.
            //                'slug' => 'contact-form-7-honeypot', // The plugin slug (typically the folder name).
            //                'version' => '1.13', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            //            ),

            array(
                'name' => 'Contact Form Submissions', // The plugin name.
                'slug' => 'contact-form-submissions', // The plugin slug (typically the folder name).
                'version' => '1.6.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'Custom Post Type UI', // The plugin name.
                'slug' => 'custom-post-type-ui', // The plugin slug (typically the folder name).
                'version' => '1.5.8', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            //            array(
            //                'name' => 'Duplicate Post', // The plugin name.
            //                'slug' => 'duplicate-post', // The plugin slug (typically the folder name).
            //                'version' => '3.2.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            //            ),

            array(
                'name' => 'Regenerate Thumbnails', // The plugin name.
                'slug' => 'regenerate-thumbnails', // The plugin slug (typically the folder name).
                'version' => '3.0.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'Simple Custom Post Order', // The plugin name.
                'slug' => 'simple-custom-post-order', // The plugin slug (typically the folder name).
                'version' => '2.3.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

            array(
                'name' => 'SVG Support', // The plugin name.
                'slug' => 'svg-support', // The plugin slug (typically the folder name).
                'version' => '2.3.15', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
            ),

//            array(
//                'name' => 'TinyMCE Advanced', // The plugin name.
//                'slug' => 'tinymce-advanced', // The plugin slug (typically the folder name).
//                'version' => '4.6.7', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

//            array(
//                'name' => 'qTranslate-X', // The plugin name.
//                'slug' => 'qtranslate-x', // The plugin slug (typically the folder name).
//                'version' => '3.4.6.8', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

//            array(
//                'name' => 'WP Mail SMTP', // The plugin name.
//                'slug' => 'wp-mail-smtp', // The plugin slug (typically the folder name).
//                'version' => '1.2.5', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

//            array(
//                'name' => 'WP Multilang', // The plugin name.
//                'slug' => 'wp-multilang', // The plugin slug (typically the folder name).
//                'version' => '2.2.6', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

//            array(
//                'name' => 'WP Translitera', // The plugin name.
//                'slug' => 'wp-translitera', // The plugin slug (typically the folder name).
//                'version' => 'p1.2.4', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

//            array(
//                'name' => 'Smush', // The plugin name.
//                'slug' => 'wp-smushit', // The plugin slug (typically the folder name).
//                'version' => '2.7.9.1', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

//            array(
//                'name' => 'Snazzy Maps', // The plugin name.
//                'slug' => 'snazzy-maps', // The plugin slug (typically the folder name).
//                'version' => '1.1.3', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

//            array(
//                'name' => 'Easy Forms for MailChimp', // The plugin name.
//                'slug' => 'yikes-inc-easy-mailchimp-extender', // The plugin slug (typically the folder name).
//                'version' => '6.4.3', // E.g. 1.0.0. If set, the active plugin must be this version or higher.
//            ),

        );

        tgmpa( $plugins);

    }

}
