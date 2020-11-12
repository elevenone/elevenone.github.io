<?php
/**
 * launch script
 */
declare(strict_types = 1);


$config = [
    'path_views' => __DIR__ . '/template/views',
];



//////////////////////////////////////////////////////////////////////////////////////////
$number = [
    1234235345345345,
    3545435454354543,
    5674765786886788,
    0000000000000042,
    7896768545353535
];

$rand_keys = array_rand($number, 2);
$serial = $number[$rand_keys[0]];

$payload = [
    'status' => '42',
    'message' => 'hello world',
    'serial' => $serial,
    'pool' => $number,
    'check' => 'https://p5js.org/examples/math-map.html',
    'sine' => 'https://bl.ocks.org/gkhays/c58a109172d543ee095e57f0eb3606f2',
    'view' => 'viewfiles'
];


//////////////////////////////////////////////////////////////////////////////////////////






// view stuff
use elevenone\View\ViewFactory;

$view_factory = new ViewFactory;
$view = $view_factory->newInstance();

// set views and layouts
$view_registry = $view->getViewRegistry();
$view_registry->set('index_view', __DIR__ . '/template/_index.php');
$view_registry->set('_item', __DIR__ . '/template/_item.php');

$layout_registry = $view->getLayoutRegistry();
$layout_registry->set('layout', __DIR__ . '/template/layout.php');
$layout_registry->set('_animation', __DIR__ . '/template/_animation.php');


$data = [
    [
        'id' => '1',
        'name' => 'mikka'
    ],
    [
        'id' => '2',
        'name' => 'makka'
    ],
    [
        'id' => '3',
        'name' => 'zorro'
    ]
];



$view->setData(['payload' => $payload]);

// set current view and layout
$view->setView('index_view');
$view->setLayout('layout');



// result
$response = $view->__invoke(); // or just $view()

header('Content-Type: text/html; charset=utf-8');
echo $response;








// $layout = include __DIR__ . '/template/layout.php';

















exit;



/*
use Atlas\Pdo\Connection;

$connection = Connection::new(
    'pgsql:host=localhost;dbname=',
    '',
    ''
);

$stm  = 'SELECT * FROM project WHERE published = :published';
$bind = ['published' => 1];
$mth = $connection->prepare($stm);
$mth->execute($bind);
$result = $mth->fetchAll(PDO::FETCH_ASSOC);

print_r($result);

echo 'YIELDING';
echo '<hr>';
foreach ($connection->yieldAll($stm, $bind) as $row) {
    print_r($row);
}
echo '<hr>';
*/