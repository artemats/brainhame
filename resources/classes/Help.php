<?php

namespace Theme;

class Help {

	/**
	 * Get post content by post_id
	 *
	 * @param $post_id
	 * @param bool $format
	 *
	 * @return array|mixed|string|void
	 */

	public static function topMenu() {
		global $post;
		$thePostID     = $post->ID;
		$menuLocations = get_nav_menu_locations();
		$menuID        = $menuLocations['primary_navigation'];
		$primaryNav    = wp_get_nav_menu_items( $menuID );
		$list          = '';

		foreach ( $primaryNav as $navItem ) {
			if ( $thePostID == $navItem->object_id ) :
				$list .= '<li class="nav__item nav__item--active"><a class="nav__link" href="' . $navItem->url . '" title="' . $navItem->title . '">' . $navItem->title . '</a></li>';
			else:
				$list .= '<li class="nav__item"><a class="nav__link" href="' . $navItem->url . '" title="' . $navItem->title . '">' . $navItem->title . '</a></li>';
			endif;
		}
		echo $list;
	}

	public static function footerMenu() {
		$menuLocations = get_nav_menu_locations();
		$menuID        = $menuLocations['footer-menu'];
		$primaryNav    = wp_get_nav_menu_items( $menuID );
		$list          = '';

		foreach ( $primaryNav as $navItem ) {
			$list .= '<li class="footer__item"><a class="footer__link"  href="' . $navItem->url . '" title="' . $navItem->title . '">' . $navItem->title . '</a></li>';
		}
		echo $list;
	}

    public static function getImageElement($image) {
        if ( is_string($image) ) {
            $image_id = attachment_url_to_postid($image);
            $image = self::getAttachmentData($image_id);
        } elseif ( is_integer($image) ) {
            $image = self::getAttachmentData($image);
        } elseif ( is_array($image) ) {
            $image = $image;
        } elseif ( is_object($image) ) {
            $image = json_decode(json_encode($image), true);
        }

        $dom = new \DOMDocument('1.0', 'UTF-8');

        if ($image['mime_type'] === 'image/svg+xml') {
            $fullpath = get_attached_file($image['ID']);
            $xml_content = file_get_contents($fullpath);

            $dom->loadXML($xml_content);

            return $dom->saveXML();
        } else {
            $img = $dom->appendChild($dom->createElement('img'));
            $img->setAttribute('src', $image['url']);
            $img->setAttribute('alt', $image['alt']);

            return $dom->saveHTML();
        }
    }

    public static function getAttachmentData($attachment_id) {
        $image_data = wp_prepare_attachment_for_js($attachment_id);

        return [
            'ID' => $image_data['id'],
            'mime_type' => $image_data['mime'],
            'alt' => $image_data['alt'],
            'url' => $image_data['url'],
        ];
    }

	public static function getContent($post_id = null) {
	    $post = get_post($post_id);
	    if ( $post ) {
	        $content = apply_filters('the_content', $post->post_content);

	        return $content;
        } else {
	        return '';
        }
	}

	public static function getExcerpt($post_id, $words = 55) {
	    $post = get_post($post_id);
	    if ( $post ) {
	        $text = !empty($post->post_excerpt) ? $post->post_excerpt : $post->post_content;
	        $trim = wp_trim_words($text, $words, '...');
	        $content = apply_filters('the_content', $trim);

	        return $content;
        } else {
	        return '';
        }
	}

	public static function getThumbnail($post_id) {
	    $image = get_the_post_thumbnail_url($post_id, 'full');
	    $placeholder = get_field('no_image_horizontal', 'options');

	    if ( !$image && $placeholder ) {
            $image = $placeholder;
        }

	    return $image;
	}

	/**
	 * @param $slug
	 * Translate
	 *
	 * @return bool|string
	 */
	public static function translate( $slug ) {
		$replace   = str_replace( '_', ' ', $slug );
		$value     = ucfirst( $replace );
		$new_value = false;

		if ( function_exists( 'get_field' ) ) {
			$new_value = self::checkExistTranslation( $slug );

			if ( ! $new_value ) {
				$field_name    = 'new_translation';
				$new_translate = self::checkExistTranslation( $slug, $field_name );

				if ( ! $new_translate ) {
					$row = [
						'slug'  => $slug,
						'title' => $value
					];

					add_row( $field_name, $row, 'options' );
				}
			}
		}

		return ( $new_value ) ? $new_value : $value;
	}

	/**
	 * @param $slug
	 * @param string $name
	 * Translate method
	 * @return bool
	 */
	public static function checkExistTranslation( $slug, $name = 'translates' ) {
		$labels = get_field( $name, 'options' );
		$value  = false;
		if ( $labels && is_array( $labels ) ) {
			foreach ( $labels as $key => $label ) {
				if ( $label['slug'] === $slug ) {
					$value = $label['title'];
				}
			}
		}

		return $value;
	}

	public static function hierarchy() {
        global $wp_query;
        $templates = (new \Brain\Hierarchy\Hierarchy())->getTemplates($wp_query);
        $templates[] = 'app.php';

        $templates = array_map(function ($template) {
            if ($template === 'index') {
                $template = 'index.php';
            }
            if (strpos($template, '.blade.php')) {
                $template = str_replace('.blade', '', $template);
            }

            $template = ucwords(preg_replace('/\-([a-z])/', ' $1', basename($template)));
            return str_replace(' ', '', $template);
        }, $templates);

        $templates = array_reverse(array_unique($templates));

        $path = get_stylesheet_directory() . '/controllers';
        $path = (has_filter('sober/controller/path') ? apply_filters('sober/controller/path', rtrim($path)) : dirname(get_template_directory()) . '/app/controllers');
//        $path = basename($path);
        $path = str_replace(dirname(get_template_directory()), '', $path);

        $return = '<pre><strong>Hierarchy Debugger:</strong><ul>';
        foreach ($templates as $template) {
            $return .= "<li>" . $path . '/' . $template . "</li>";
        }
        $return .= '</ul></pre>';

        return $return;
	}

    public static function is_dev() {
        if (WP_ENV == 'development') {
            return true;
        } else {
            return false;
        }
    }

    public static function getFileUrl($value) {
        if ( is_numeric($value) ) {
            $file_id = intval($value);

            return wp_get_attachment_url($value);
        } elseif ( is_array($value) ) {
            return $value['url'];
        }

        return $value;
    }

    public static function assetSource( $url = '', $return = 'url' ) {
        $source = [
            'path' => get_theme_file_path() . '/resources/assets/',
            'url'  => get_theme_file_uri() . '/resources/assets/',
        ];

        return $source[ $return ] . $url;
    }

    public static function debug( $var ) {
        echo "<pre>";

        if ( is_array( $var ) ) {
            print_r( $var );
        } else {
            var_dump( $var );
        }

        echo "</pre>";
    }

    public static function getContactForm($form_code)
    {
        $form_id = '';

        if(is_numeric($form_code)) {
            $form_id = intval($form_code);
        } else {
            preg_match('/id\=\"([0-9]*)\"/', $form_code, $matches);

            if(count($matches)) {
                $form_id = array_pop($matches);
            }
        }

        $form = wpcf7_contact_form(intval($form_id));

//        Help::debug($form);
//        Help::debug($form->form_elements());

        return $form->form_html();
    }
}
