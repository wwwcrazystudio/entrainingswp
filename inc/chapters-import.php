<?php


add_action('wp_ajax_import_chapters', 'import_chapters');
add_action('wp_ajax_nopriv_import_chapters', 'import_chapters');

function import_chapters()
{

    $developer_data = json_decode(file_get_contents('https://entrainings.ru/files/appdata_72_dev/bookslist/books.json'));

    var_dump($developer_data);

    if (!$developer_data)
        return false;

    foreach ($developer_data as $item) {

        $term_id = NULL;
        $term = wp_insert_term($item->title, 'chapter_cat', array(
            'description' => isset($item->description) ? $item->description : '',
            'parent'      => 0,
        ));

        if (is_wp_error($term)) {
            $term_id = $term->error_data['term_exists'];
        } else {
            $term_id = $term['term_id'];
        }

        if ($term_id != NULL) {

            var_dump(intVal(boolval($item->isNew)));

            update_term_meta($term_id, 'cat_level', intVal($item->level));
            update_term_meta($term_id, 'cat_type', intVal($item->type));
            update_term_meta($term_id, 'cat_isnew', intVal(boolval($item->isNew)));

            $chapters = $item->chapters;

            foreach ($chapters as $chapter) {
                $post_data = array(
                    'post_title'    => $chapter->title,
                    'post_content'  => '',
                    'post_status'   => 'publish',
                    'tax_input' => [
                        "chapter_cat" => [$term_id]
                    ],
                    'post_type' => 'chapter',
                );

                // Вставляем данные в БД
                $post_id = wp_insert_post(wp_slash($post_data));

                update_post_meta($post_id, 'fileName', $chapter->fileName);
                update_post_meta($post_id, 'bookFolder', $chapter->bookFolder);

            }
        }
    }

    wp_die();
}


function import_btn_handler($hook)
{
    if (!is_admin()) {
        return;
    }
    wp_enqueue_script('import_btn_handler', THEME_PATH . '/assets/js/import.js');
};

add_action('admin_enqueue_scripts', 'import_btn_handler');

function custom_button_example($wp_admin_bar)
{
    $args = array(
        'id' => 'importbtn',
        'title' => 'Импорт',
        'href' => '#',
    );
    $wp_admin_bar->add_node($args);
}

add_action('admin_bar_menu', 'custom_button_example', 50);
