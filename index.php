<html>
    <head>
        <title>Kurs www</title>
    </head>
    <body>
    Kurs WWW 2019<br>
        <?php
        header('Cache-Control: max-age=86400'); 
        print_r($_REQUEST, FALSE);
        echo "<br>";
        print_r($_GET, FALSE);
        echo "<br>";
        print_r($_POST, FALSE);
        echo "<br>";
        echo date("h:i") . "\r\n";
        echo "<br>";
        print_r($_SERVER, FALSE);
        ?>
    </body>
</html>
