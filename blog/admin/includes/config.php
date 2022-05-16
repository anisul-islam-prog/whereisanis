<?php
// DB credentials.
define('DB_HOST', 'sql107.epizy.com');
define('DB_USER', 'epiz_31434967');
define('DB_PASS', 'N6xRA4qJMyAwBLJ');
define('DB_NAME', 'epiz_31434967_blog');
// Establish database connection.
try {
    $dbh = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
} catch (PDOException $e) {
    exit("Error: " . $e->getMessage());
}
?>