<?php
add_filter('rwmb_meta_boxes', 'chapter_meta_boxes');
function chapter_meta_boxes($meta_boxes)
{

    $meta_boxes[] = array(
        'title'      => 'Опции категории',
        'taxonomies' => 'chapter-cat',
        'fields' => array(
            array(
                'name' => 'Сложность',
                'id'     => 'cat_level',
                'type'   => 'number',
                'admin_columns' => 'after title', 
            ),
            array(
                'name' => 'Тип',
                'id'     => 'cat_type',
                'type'   => 'number',
                'admin_columns' => 'after title', 
            ),
            array(
                'name' => 'Новый',
                'id'     => 'cat_isnew',
                'type'   => 'checkbox',
            ),
        )
    );

    $meta_boxes[] = array(
        'title'      => 'Опции главы',
        'post_types' => 'chapter',
        'fields' => array(
            array(
                'name' => 'Имя файла',
                'id'     => 'fileName',
                'type'   => 'text',
            ),
            array(
                'name' => 'Путь',
                'id'     => 'bookFolder',
                'type'   => 'text',
            ),
        )
    );

    return $meta_boxes;
}
