<?php


namespace Controllers;


use Controllers\Traits\Cards;
use Controllers\Traits\Localize;
use Controllers\Traits\RegisterAjax;
use Controllers\Traits\SelfData;
use Sober\Controller\Controller;

class TemplateBlog extends Controller {

    use SelfData;
    use RegisterAjax;
    use Localize;
    use Cards;

    public function posts() {
        return self::getPosts();
    }

    public static function ajax_nopriv_getPosts() {
        $page = self::getPostVar('page');
        $taxonomies = self::getPostVar('taxonomies');
        $terms = [];

        foreach ($taxonomies as $key => $item) {
            if ( $item['value'] !== 'all' ) {
                $terms[$key] = $item['value'];
            }
        }

        $posts = self::getPosts($page, $terms);

        wp_send_json_success(['posts' => $posts]);
    }

    public static function getPosts( $page = false, $terms = [] ) {
        if ( $page ) {
            $paged = $page;
        } else {
            $paged = (get_query_var( 'paged' )) ? get_query_var( 'paged' ) : 1;
        }

        $args = [
            'post_type'      => 'post',
            'posts_per_page' => 6,
            'fields'         => 'ids',
            'paged'          => $paged,
        ];

        if ( count($terms) ) {
            $args['tax_query'] = [];

            foreach ($terms as $taxonomy => $term) {
                $args['tax_query'][] = [
                    'taxonomy' => $taxonomy,
                    'field'    => 'slug',
                    'terms'    => $term,
                ];
            }
        }


        $query = new \WP_Query( $args );

        $objects = [];
        foreach ( $query->posts as $post_id ) {
            $objects[] = self::postCard( $post_id );
        }

        return (object)[
            'items' => $objects,
            'max'   => $query->max_num_pages,
            'page'  => intval( $paged ),
        ];
    }

    public function taxonomies() {
        $categories = self::getTerms( 'category' );
        $defaultCategory = self::createDefault( [
            'name' => 'All articles',
            'slug' => 'all',
        ] );

        $tags = self::getTerms( 'post_tag' );
        $defaultTag = self::createDefault( [
            'name' => 'All posts',
            'slug' => 'all',
        ] );


        return (object)[
            'categories' => array_merge( [ $defaultCategory ], $categories ),
            'tags'       => array_merge( [ $defaultTag ], $tags ),
        ];
    }

    public static function getTerms( $taxonomy ) {
        $args = [
            'taxonomy' => $taxonomy,
            'exclude'  => 1,
        ];

        $objects = [];
        $terms = get_terms( $args );
        foreach ( $terms as $term ) {
            $objects[] = self::termCard( $term );
        }

        return $objects;
    }

    public static function termCard( $term ) {
        return (object)[
            'label' => $term->name,
            'value' => $term->slug,
        ];
    }

    public static function createDefault( $arr ) {
        return (object)[
            'label' => $arr['name'],
            'value' => $arr['slug'],
        ];
    }
}
