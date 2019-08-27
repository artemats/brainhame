<?php

namespace Controllers;

use Controllers\Traits\Cards;
use Controllers\Traits\Localize;
use Controllers\Traits\RegisterAjax;
use Controllers\Traits\SelfData;
use Sober\Controller\Controller;
use Theme\Help;

class FrontPage extends Controller {

    use SelfData;
    use RegisterAjax;
    use Localize;
    use Cards;

    public function projects() {
        $args = [
            'post_type' => 'projects',
            'posts_per_page' => 3,
            'fields' => 'ids',
        ];
        $posts = get_posts($args);

        $projects = [];
        foreach ($posts as $post_id) {
            $projects[] = self::projectCard($post_id);
        }

        return (object)[
            'items' => $projects,
        ];
    }

    public function members() {
        $args = [
            'post_type' => 'members',
            'posts_per_page' => 4,
            'fields' => 'ids',
        ];
        $posts = get_posts($args);

        $objects = [];
        foreach ($posts as $post_id) {
            $objects[] = (object) [
                'id' => $post_id,
                'title' => get_the_title($post_id),
                'position' => get_field('position', $post_id),
                'image' => get_the_post_thumbnail_url($post_id, 'full'),
            ];
        }

        return $objects;
    }

    public function contactFormID() {
        $contact = get_field('contact', get_the_ID());

//        return Help::getContactForm($contact['contact_form']);
        return isset($contact['contact_form']) ? $contact['contact_form'] : 0;
    }

    public function articles() {
        $args = [
            'post_type' => 'post',
            'fields' => 'ids',
        ];
        $posts = get_posts($args);

        $objects = [];
        foreach ($posts as $post_id) {
            $objects[] = (object) [
                'id' => $post_id,
                'title' => get_the_title($post_id),
                'excerpt' => Help::getExcerpt($post_id),
                'link' => get_the_permalink($post_id),
                'date' => get_the_date(get_option('date_format'), $post_id),
                'image' => get_the_post_thumbnail_url($post_id, 'full'),
            ];
        }

        return $objects;
    }

}
