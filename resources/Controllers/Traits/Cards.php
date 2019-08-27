<?php


namespace Controllers\Traits;


trait Cards {

    public static function postCard($post) {
        if ($post) {
            $post_id = is_object( $post ) ? $post->ID : $post;
            $date_format = get_option( 'date_format' );

            return (object)[
                'id'    => $post_id,
                'link'  => get_the_permalink( $post_id ),
                'title' => get_the_title( $post_id ),
                'date'  => get_the_date( $date_format, $post_id ),
                'image' => get_the_post_thumbnail_url( $post_id, 'full' ),
            ];
        } else {
            return false;
        }
    }

    public static function projectCard($post_id) {
        $types = get_the_terms($post_id, 'project_type');

        return (object) [
            'id' => $post_id,
            'title' => get_the_title($post_id),
            'link' => get_the_permalink($post_id),
            'type' => (!empty($types)) ? $types[0]->name : false,
            'image' => get_the_post_thumbnail_url($post_id, 'full'),
        ];
    }

}
