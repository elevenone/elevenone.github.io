<?php
/**
 * stardust / a project skeleton for darkmatter
 */
declare(strict_types = 1);

// date_default_timezone_set('UTC');

// running under built-in server route static assets and return false
if (php_sapi_name() == "cli-server") {
    echo 'built-in server';
    $extensions = array("php", "jpg", "gif", "css", "png", "js", "ico", "svg");
    $path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
    $ext = pathinfo($path, PATHINFO_EXTENSION);
    if (in_array($ext, $extensions)) {
        return false;
    }
}

// vendor
require dirname(__DIR__) . '/vendor/autoload.php';

// commencing countdown
require dirname(__DIR__) . '/app/boot.php';
