<?php


namespace Controllers;


use Controllers\Traits\Localize;
use Controllers\Traits\RegisterAjax;
use Controllers\Traits\SelfData;
use Sober\Controller\Controller;

class TemplateAbout extends Controller {

    use SelfData;
    use RegisterAjax;
    use Localize;

    public function projects() {
        $args = [
            'post_type'      => 'projects',
            'posts_per_page' => 2,
            'fields'         => 'ids',
        ];
        $posts = get_posts( $args );

        $projects = [];
        foreach ( $posts as $post_id ) {
            $types = get_the_terms( $post_id, 'project_type' );

            $projects[] = (object)[
                'id'    => $post_id,
                'title' => get_the_title( $post_id ),
                'link'  => get_the_permalink( $post_id ),
                'type'  => (!empty( $types )) ? $types[0]->name : false,
                'image' => get_the_post_thumbnail_url( $post_id, 'full' ),
            ];
        }

        return (object)[
            'items' => $projects,
        ];
    }

    public function members() {
        return self::getMembers();
    }

    public static function ajax_nopriv_getMembers() {
        $page = self::getPostVar('page');

        $members = self::getMembers($page);

        wp_send_json_success(['members' => $members]);
    }

    public static function getMembers( $page = false ) {
        if ( $page ) {
            $paged = $page;
        } else {
            $paged = (get_query_var( 'paged' )) ? get_query_var( 'paged' ) : 1;
        }

        $args = [
            'post_type'      => 'members',
            'posts_per_page' => 6,
            'fields'         => 'ids',
            'paged'          => $paged,
        ];
        $query = new \WP_Query( $args );

        $objects = [];
        foreach ( $query->posts as $post_id ) {
            $objects[] = (object)[
                'id'       => $post_id,
                'title'    => get_the_title( $post_id ),
                'position' => get_field( 'position', $post_id ),
                'image'    => get_the_post_thumbnail_url( $post_id, 'full' ),
            ];
        }

        return (object)[
            'items' => $objects,
            'max'   => $query->max_num_pages,
            'page'  => intval($paged),
        ];
    }

}
