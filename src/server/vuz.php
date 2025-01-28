<?php
function getAutosFromDatabase() {
  try {
    include 'config.php';

    // Запрос к базе данных
    $sql = "SELECT * FROM vuz";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    // Получение данных из результата запроса
    $car = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $car;

  } catch(PDOException $e) {
    echo "Ошибка подключения: " . $e->getMessage();
    return false;
  }
}

// Вызов функции и вывод данных в JSON
$data = getAutosFromDatabase();
if ($data !== false) {
  header('Content-Type: application/json');
  echo json_encode($data);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Ошибка при получении данных']);
}
?>