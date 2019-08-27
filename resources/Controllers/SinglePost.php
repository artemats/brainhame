<?php


namespace Controllers;


use Controllers\Traits\Cards;
use Controllers\Traits\Localize;
use Controllers\Traits\RegisterAjax;
use Controllers\Traits\SelfData;
use Sober\Controller\Controller;
use Theme\Help;
use Theme\helpers\SocialMedia;

class SinglePost extends Controller {

    use SelfData;
    use RegisterAjax;
    use Localize;
    use Cards;

    public function date() {
        return get_the_date();
    }

    public function postCategory() {
        $categories = wp_get_object_terms( get_the_ID(), 'category', [ 'fields' => 'names' ] );

        if (count($categories)) {
            return $categories[0];
        } else {
            return 0;
        }
    }

    public function socialsLinks() {
        $socialMedia = new SocialMedia();

        $social_media_urls = $socialMedia->GetSocialMediaSiteLinks_WithShareLinks([
            'url'=> get_the_permalink(),
            'title'=> get_the_title(),
        ]);

        $sharing = get_field('social_sharing', 'options');
        $socials = [];
        foreach ($sharing as $item) {
            if (isset($social_media_urls[$item])) {
                $socials[$item] = $social_media_urls[$item];
            }
        }

        return (object) $socials;
    }

    public function adjacentPosts() {
        $prev = get_adjacent_post( true, '', true);
        $next = get_adjacent_post( true, '', false);

        return (object)[
            'prev' => self::postCard($prev),
            'next' => self::postCard($next),
        ];
    }

    public static function ajax_nopriv_getContent() {
        $post_id = intval( self::getPostVar('postId') );

        $content = Help::getContent($post_id);

        wp_send_json_success(['content' => $content]);
    }

    public function subscribe() {
        $post_id = get_page_by_path('blog');
        $field = get_field('subscribe', $post_id);

        return json_decode(json_encode($field));
    }

}
