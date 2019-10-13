<html>
    <head>
        <title>Kurs www</title>
    </head>
    <body>
    Kurs WWW 2019<br>
        <?php 
        print_r($_REQUEST, FALSE);
        print_r($_GET, FALSE);
        print_r($_POST, FALSE);
        echo("\r\n");
        echo date("h:i") . "\r\n";
        print_r($_SERVER, FALSE);
        ?>
    </body>
</html>
