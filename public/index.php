<!DOCTYPE html>
<html>
    <body>
        <?php
            include __DIR__ . "/../vendor/autoload.php";

            $path = $_SERVER['REQUEST_URI'];
            $loader = new \Twig\Loader\FilesystemLoader(__DIR__ . "/../src/routes");

            $twig = new \Twig\Environment($loader, []);
            echo $twig->render('comp/nav.twig');

            switch ($path) {
                case "/login":
                    echo $twig->render('login.twig');
                    break;

                case "/register":
                    echo $twig->render('register.twig');
                    break;

                default:
                    echo $twig->render('404.twig');
                    break;
            }
        ?>
    </body>
</html>
