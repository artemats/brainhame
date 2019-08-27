<?php

namespace Controllers;

use Controllers\Traits\Cards;
use Controllers\Traits\Localize;
use Controllers\Traits\RegisterAjax;
use Controllers\Traits\SelfData;
use Sober\Controller\Controller;
use Theme\Help;

class App extends Controller {

    use SelfData;
    use RegisterAjax;
    use Localize;
    use Cards;

    protected $acf = true;

    public function siteName() {
        return get_bloginfo( 'name' );
    }

    public function title() {
        if ( is_home() ) {
            if ( $home = get_option( 'page_for_posts', true ) ) {
                return get_the_title( $home );
            }
            return __( 'Latest Posts', 'sage' );
        }
        if ( is_archive() ) {
            return get_the_archive_title();
        }
        if ( is_search() ) {
            return sprintf( __( 'Search Results for %s', 'sage' ), get_search_query() );
        }
        if ( is_404() ) {
            return __( 'Not Found', 'sage' );
        }
        return get_the_title();
    }

    public function browserSync() {
        if ( $_SERVER['HTTP_HOST'] === 'wp.docker.localhost:8000' ) {
            return 1;
        }

        return 0;
    }

    public function logo() {
        $logo = get_field('logo', 'options');
        $image = Help::getImageElement($logo);

        return $image;
    }

    public function footerInfo() {
        $footer_field = get_field('footer_info', 'options');
        $logo = Help::getImageElement($footer_field['logo']);
        $footer_field['logo'] = $logo;

        return json_decode(json_encode($footer_field));
    }

    public function currentPage() {
        $slug = 0;

        if ( is_page() ) {
            $slug = get_queried_object()->post_name;
        } else {
            $slug = get_the_ID();
        }

        return $slug;
    }

    public function bodyClasses() {
        $classes = ['active-preloader'];

        $detect = new \Mobile_Detect();
        if ( $detect->isMobile() ) {
            $classes[] = 'isMobile';
        }

//        if ( !is_user_logged_in() ) {
//            $classes = disabled
//        }

        return implode(' ', $classes);
    }

    public function contactInfo() {
        $page_id = get_page_by_path('/contact/');
        $field = get_field('info', $page_id);

        return json_decode(json_encode($field));
    }

    public function postThumbnail() {
        $thumb = get_the_post_thumbnail_url(get_the_ID(), 'full');

        return $thumb ? $thumb : 0;
    }

    public function popular() {
        $args = [
            'post_type'      => 'post',
            'posts_per_page' => 3,
            'fields'         => 'ids',
            'tax_query' => [
                [
                    'taxonomy' => 'category',
                    'field'    => 'slug',
                    'terms'    => 'popular-posts',
                ]
            ],
        ];
        $posts = get_posts($args);

        $popular = [];
        foreach ( $posts as $post_id ) {
            $popular[] = self::postCard( $post_id );
        }

        return (object)[
            'title' => __('Popular posts'),
            'items' => $popular,
        ];
    }

    public function footerArrow() {
        $folder = dirname(get_template_directory()) . '/resources/assets/icons/';
        $fullpath = $folder . 'prev-arrow.svg';
        $dom = new \DOMDocument('1.0', 'UTF-8');
        $xml_content = file_get_contents($fullpath);

        $dom->loadXML($xml_content);

        return $dom->saveXML();
    }

}
