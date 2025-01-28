<?php
// db.php
try {
        // Подключение к базе данных
    $pdo = new PDO("mysql:host=127.0.0.1;dbname=kirillwor3;port=3308", 'kirillwor3', '73HotCat91');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Ошибка подключения: ' . $e->getMessage(); 
    exit;
}
?>