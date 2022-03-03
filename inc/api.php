<?php
add_action('rest_api_init', function () {
    register_rest_route('chapters/v1', '/chapter-cat', array(
        'methods'  => 'GET',
        'callback' => function () {
            $args = [
                'taxonomy'      => ['chapter_cat'], // название таксономии с WP 4.5
                'hide_empty'    => true,
                'count'         => false,
                'parent'         => 0,
                'hierarchical'  => true,
                'order' => 'menu_order',
            ];

            $terms = get_terms($args);
            $result = [];

            foreach ($terms as $term) {;
                $termData = [];

                $termData['title'] = $term->name;
                $termData['description'] = $term->description;
                $termData['url'] = get_term_link($term->term_id, 'chapter_cat');
                $termData['level'] = intVal(get_term_meta($term->term_id, 'cat_level')[0]);
                $termData['type'] = intVal(get_term_meta($term->term_id, 'cat_type')[0]);
                $termData['isNew'] = boolval(get_term_meta($term->term_id, 'cat_isnew')[0]);

                $result[] = $termData;
            }

            return $result;
        }
    ));

    register_rest_route('chapters/v1', '/chapter-cat/(?P<id>\d+)', array(
        'methods'  => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $id = $request['id'];
            $cat = [];
            $catTitle = get_term($id, 'chapter_cat')->name;
            $chapters = [];

            $args = array(
                'posts_per_page' => -1,
                'order' => 'menu_order',
                'post_type' => 'chapter',
                'tax_query' => [
                    [
                        'taxonomy' => 'chapter_cat',
                        'field'    => 'id',
                        'terms'    => $id
                    ]
                ]
            );

            $query = new WP_Query($args);

            // Цикл
            if ($query->have_posts()) {
                while ($query->have_posts()) {
                    $query->the_post();

                    $chapter = [];

                    $chapter['title'] = get_the_title();
                    $chapter['url'] = get_permalink();

                    $chapters[] = $chapter;
                }
            }
            wp_reset_postdata();

            $cat['catTitle'] = $catTitle;
            $cat['chapters'] = $chapters;


            return $cat;
        },
    ));

    register_rest_route('chapters/v1', '/chapter/(?P<id>\d+)', array(
        'methods'  => 'GET',
        'callback' => function (WP_REST_Request $request) {

            global $post;

            $chapter = [];
            $id = $request['id'];
            $post = get_post($id);

            $bookFolder = get_post_meta($id, 'bookFolder')[0];
            $fileName = get_post_meta($id, 'fileName')[0];

            $chapter_cat = get_the_terms( $id, 'chapter_cat' )[0];

            $args = [
                'orderby' => 'menu_order',
                'post_type' => 'chapter',
                'tax_query' => [
                    [
                        'taxonomy' => 'chapter_cat',
                        'field'    => 'id',
                        'terms'    => $chapter_cat->term_id,
                    ]
                ]
            ];

            $chapterlist = get_posts($args);

            $chapters = array();

            foreach ($chapterlist as $page) {
                $chapters[] += $page->ID;
            }

            $current = array_search(get_the_ID(), $chapters);
            $prevID = $chapters[$current - 1];
            $nextID = $chapters[$current + 1];

            $chapter['title'] = get_the_title($id);
            $chapter['track'] = "https://entrainings.ru/files/{$bookFolder}/{$fileName}/audio.mp3";
            $chapter['en'] = file_get_contents("https://entrainings.ru/files/{$bookFolder}/{$fileName}/sub_en.srt");
            $chapter['ru'] = file_get_contents("https://entrainings.ru/files/{$bookFolder}/{$fileName}/sub_ru.srt");
            $chapter['prev'] = get_permalink($prevID);
            $chapter['next'] = get_permalink($nextID);
            $chapter['catLink'] = get_term_link( $chapter_cat, 'chapter_cat' );
            $chapter['catTitle'] = $chapter_cat->name;


            return $chapter;
        }
    ));
});;
