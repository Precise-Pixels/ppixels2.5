<?php
# Backend framework by http://jalproductions.co.uk/

$q = $_GET['q'];

$path = preg_replace('#\/$|.php#', '', $q);

if(empty($path)) {                                  // HOME
    $file = 'index';
} elseif(file_exists("views/$path.php")) {          // PAGE
    $file = $path;
} else {                                            // NOT FOUND
    $file = '404';
}

$isHome    = ($q == '');
$isResults = preg_match('#^results+/?$#', $q);

if($isResults) {
    require_once('model-results.php');
}

require_once('front-view.php');