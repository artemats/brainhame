<?php


namespace Controllers;


use Controllers\Traits\Cards;
use Controllers\Traits\Localize;
use Controllers\Traits\RegisterAjax;
use Controllers\Traits\SelfData;
use Sober\Controller\Controller;

class SingleProjects extends Controller {

    use SelfData;
    use RegisterAjax;
    use Localize;
    use Cards;

    public function projectTypes() {
        $terms = wp_get_object_terms( get_the_ID(), 'project_type', [ 'fields' => 'names' ] );

        if (count($terms)) {
            return implode(', ', $terms);
        } else {
            return 0;
        }
    }

    public function adjacentPosts() {
        $prev = get_adjacent_post( false, '', true);
        $next = get_adjacent_post( false, '', false);

        return (object)[
            'prev' => self::postCard($prev),
            'next' => self::postCard($next),
        ];
    }

}
