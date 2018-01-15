<?php

//  Add post image support
add_theme_support( 'post-thumbnails' );

//  Add menu support
if (function_exists('add_theme_support')) {
    add_theme_support('menus');
}

register_nav_menus( array(
	'main' => 'Main Menu',
	'footer' => 'Footer Menu',
) );

// Remove all default WP template redirects/lookups
remove_action('template_redirect', 'redirect_canonical');
// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');
// Load scripts
function scripts() {
    wp_enqueue_style('blankslate/app.css', get_template_directory_uri() . '/dist/styles/app.css', false, null);
}
add_action('wp_enqueue_scripts', 'scripts', 100);



function prepare_rest($data, $post, $request){
    $_data = $data->data;

    $prevPost = get_adjacent_post(false, '', false );
    $prevPost = $prevPost;
    $nextPost = get_adjacent_post(false, '', true );
    $nextPost = $nextPost;

    $_data['previous'] = $prevPost;
    $_data['next'] = $nextPost;

    $data->data = $_data;
    return $data;
}
add_filter('rest_prepare_post', 'prepare_rest', 10, 3);

