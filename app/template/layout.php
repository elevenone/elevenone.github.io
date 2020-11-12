<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>elevenone.space</title>
    <link rel="stylesheet" href="/ui/css/main.css" />
    <link rel="icon" href="/ui/favicon.png" />
</head>
<body>

<?php
$this->setSection('animation', $this->render('_animation'));
echo $this->getSection('animation');
?>

<div id="header">
<pre>
<code>
<?php echo $this->getContent(); ?>
</code>
</pre>
</div>



</body>
</html>