<?php

namespace Theme;

class OptionPageAcf {

	public function __construct() {

		if (function_exists('acf_add_options_page' )) {

			// Theme settings
			acf_add_options_page( array(
				'page_title' => __('Theme Settings', 'Theme'),
				'menu_title' => __('Theme Settings', 'Theme'),
				'menu_slug'  => 'theme-settings',
				'capability' => 'edit_posts',
				'position'   => 40,
				'redirect'   => false,
			));

//			acf_add_options_sub_page(array(
//				'page_title'  => __('Translations', 'Theme'),
//				'menu_slug'   => 'translation',
//				'parent_slug' => 'theme-settings',
//			));

//			self::addFields();
//			self::addNewTranslations();
		}
	}

	public static function addNewTranslations() {
		if ( is_admin() && isset($_GET['page']) && $_GET['page'] === 'translation' ) {
			$new_translation = get_field( 'new_translation', 'options' );

			if ( $new_translation ) {
				foreach ($new_translation as $row) {
					$isset = self::checkExistTranslation($row['slug']);
					if ( !$isset ) {
						add_row('translates', $row, 'options');
					}
				}

				update_field('new_translation', [], 'options');
			}
		}
	}

	public static function checkExistTranslation($slug, $name = 'translates') {
		$labels = get_field( $name, 'options' );
		$value = false;

		if ( $labels ) {
			foreach ( $labels as $key => $label ) {
				if ( $label['slug'] === $slug ) {
					$value = $label['title'];
				}
			}
		}

		return $value;
	}

	public static function addFields() {
		if( function_exists('acf_add_local_field_group') ):

			acf_add_local_field_group(array(
				'key' => 'group_5bdac7b37853d',
				'title' => 'Translations',
				'fields' => array(
					array(
						'key' => 'field_5bdac7c29bc18',
						'label' => 'Current',
						'name' => '',
						'type' => 'tab',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'placement' => 'top',
						'endpoint' => 0,
					),
					array(
						'key' => 'field_5bdac7ee9bc1a',
						'label' => 'Translation',
						'name' => 'translates',
						'type' => 'repeater',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'collapsed' => '',
						'min' => 0,
						'max' => 0,
						'layout' => 'table',
						'button_label' => '',
						'sub_fields' => array(
							array(
								'key' => 'field_5bdac7fa9bc1b',
								'label' => 'Slug',
								'name' => 'slug',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
								'maxlength' => '',
								'disallow_translate' => 1,
								'show_column' => 0,
								'show_column_sortable' => 0,
								'show_column_weight' => 1000,
								'allow_quickedit' => 0,
								'allow_bulkedit' => 0,
							),
							array(
								'key' => 'field_5bdac8139bc1c',
								'label' => 'Title',
								'name' => 'title',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
								'maxlength' => '',
								'disallow_translate' => 0,
								'show_column' => 0,
								'show_column_sortable' => 0,
								'show_column_weight' => 1000,
								'allow_quickedit' => 0,
								'allow_bulkedit' => 0,
							),
						),
					),
					array(
						'key' => 'field_5bdac7dc9bc19',
						'label' => 'New',
						'name' => '',
						'type' => 'tab',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'placement' => 'top',
						'endpoint' => 0,
					),
					array(
						'key' => 'field_5bdac8289bc1d',
						'label' => 'New translation',
						'name' => 'new_translation',
						'type' => 'repeater',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'collapsed' => '',
						'min' => 0,
						'max' => 0,
						'layout' => 'table',
						'button_label' => '',
						'sub_fields' => array(
							array(
								'key' => 'field_5bdac8289bc1e',
								'label' => 'Slug',
								'name' => 'slug',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
								'maxlength' => '',
								'disallow_translate' => 1,
								'show_column' => 0,
								'show_column_sortable' => 0,
								'show_column_weight' => 1000,
								'allow_quickedit' => 0,
								'allow_bulkedit' => 0,
							),
							array(
								'key' => 'field_5bdac8289bc1f',
								'label' => 'Title',
								'name' => 'title',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
								'maxlength' => '',
								'disallow_translate' => 0,
								'show_column' => 0,
								'show_column_sortable' => 0,
								'show_column_weight' => 1000,
								'allow_quickedit' => 0,
								'allow_bulkedit' => 0,
							),
						),
					),
				),
				'location' => array(
					array(
						array(
							'param' => 'options_page',
							'operator' => '==',
							'value' => 'translation',
						),
					),
				),
				'menu_order' => 0,
				'position' => 'normal',
				'style' => 'default',
				'label_placement' => 'top',
				'instruction_placement' => 'label',
				'hide_on_screen' => '',
				'active' => 1,
				'description' => '',
			));

		endif;
	}
}
