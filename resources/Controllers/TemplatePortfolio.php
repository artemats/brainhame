<?php


namespace Controllers;


use Controllers\Traits\Cards;
use Controllers\Traits\Localize;
use Controllers\Traits\RegisterAjax;
use Controllers\Traits\SelfData;
use Sober\Controller\Controller;
use Theme\Help;

class TemplatePortfolio extends Controller {

    use SelfData;
    use RegisterAjax;
    use Localize;
    use Cards;

    public function portfolio() {
        return (object)[
            'title'   => get_the_title(),
            'content' => Help::getContent(),
        ];
    }

    public function projects() {
        return self::getProjects();
    }

    public static function ajax_nopriv_getProjects() {
        $page = self::getPostVar( 'page' );

        $posts = self::getProjects( $page );

        wp_send_json_success( [ 'projects' => $posts ] );
    }

    public static function getProjects( $page = false ) {
        if ( $page ) {
            $paged = $page;
        } else {
            $paged = (get_query_var( 'paged' )) ? get_query_var( 'paged' ) : 1;
        }

        $args = [
            'post_type'      => 'projects',
            'posts_per_page' => 7,
            'fields'         => 'ids',
            'paged'          => $paged,
        ];
        $query = new \WP_Query( $args );

        $objects = [];
        foreach ( $query->posts as $post_id ) {
            $objects[] = self::projectCard( $post_id );
        }

        return (object)[
            'items' => $objects,
            'max'   => $query->max_num_pages,
            'page'  => intval( $paged ),
        ];
    }

}
