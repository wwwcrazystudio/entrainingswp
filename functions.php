<?php

/**
 * Entrainings functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Entrainings
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

define('THEME_PATH', get_template_directory_uri());

if (!function_exists('entrainings_setup')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function entrainings_setup()
	{
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Entrainings, use a find and replace
		 * to change 'entrainings' to the name of your theme in all the template files.
		 */
		load_theme_textdomain('entrainings', get_template_directory() . '/languages');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'gallery',
				'caption',
				'style',
				'script',
			)
		);
	}
endif;
add_action('after_setup_theme', 'entrainings_setup');

/**
 * Enqueue scripts and styles.
 */
function entrainings_scripts()
{
	wp_enqueue_style('styles', THEME_PATH . '/assets/css/app.css', array(), _S_VERSION);
	wp_enqueue_style('entrainings-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_style_add_data('entrainings-style', 'rtl', 'replace');

	wp_enqueue_script('scripts', THEME_PATH . '/assets/js/app.js', array(), _S_VERSION, true);
}
add_action('wp_enqueue_scripts', 'entrainings_scripts');

add_action('init', function () {
	register_post_type('chapter', array(
		'labels'             => array(
			'name'               => 'Главы',
			'singular_name'      => 'Глава',
			'add_new'            => 'Добавить новую',
			'add_new_item'       => 'Добавить новую главу',
			'edit_item'          => 'Редактировать главу',
			'new_item'           => 'Новая глава',
			'view_item'          => 'Посмотреть главу',
			'search_items'       => 'Найти главу',
			'not_found'          => 'Глав не найдено',
			'not_found_in_trash' => 'В корзине глав не найдено',
			'parent_item_colon'  => '',
			'menu_name'          => 'Главы'

		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array('title')
	));


	register_taxonomy('chapter_cat', array('chapter'), array(
		'hierarchical'  => true,
		'labels'        => array(
			'name'              => 'Категории глав',
			'singular_name'     => 'Категория главы',
			'search_items'      => 'Найти категорию',
			'all_items'         => 'Все категории',
			'parent_item'       => 'Родит. категория',
			'parent_item_colon' => 'Родит. кат.',
			'edit_item'         => 'Редактировать',
			'update_item'       => 'Обновить',
			'add_new_item'      => 'Добавить новую',
			'new_item_name'     => 'Имя новой категории',
			'menu_name'         => 'Категории глав',
		),
		'show_ui'       => true,
		'query_var'     => true,
		//'rewrite'       => array( 'slug' => 'the_genre' ), // свой слаг в URL
	));
});


require get_template_directory() . '/inc/metabox.php';
require get_template_directory() . '/inc/chapters-import.php';
require get_template_directory() . '/inc/api.php';

add_action('wp_enqueue_scripts', 'ajax_path_js');
function ajax_path_js()
{
	wp_localize_script('scripts', 'ajax_path', array(
		'url' => admin_url('admin-ajax.php'),
		'api' => get_rest_url(),
		'object_id' => get_queried_object_id(),
	));
}

add_action('wp_ajax_translate_word', 'translate_word');
add_action('wp_ajax_nopriv_translate_word', 'translate_word');

function translate_word()
{
	if (isset($_POST['word'])) {
		$word = $_POST['word'];
		$servername = "localhost";
		$database = "u27578_vocabulary";
		$username = "";
		$password = "";

		$db = new wpdb($username, $password, $database, $servername);

		$query = $db->get_results($db->prepare("SELECT definition FROM vocabulary WHERE word = %s ", $word));

		if (isset($query[0]->definition)) {
			echo $query[0]->definition;
		}

		$db->close();

		wp_die();
	}
}
