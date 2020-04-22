<?php

    use Phppot\DataSource;

    require_once "../config.php";
    require "../common.php";
    $db = new DataSource();
    $conn = $db->getConnection();


		$sql = "SELECT * FROM items";
		$result = mysqli_query($conn, $sql);
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // Free result set
    mysqli_free_result($result);

    mysqli_close($conn);
?>

<?php require "templates/header.php"; ?>

<h2>Update users</h2>

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Item Name</th>

    </tr>
  </thead>
  <tbody>
  <?php foreach ($rows as $row) : ?>
    <tr>
      <td><?php echo escape($row["id"]); ?></td>
      <td><?php echo escape($row["itemname"]); ?></td>

  </tr>
  <?php endforeach; ?>
  </tbody>
</table>

<a href="index.php">Back to home</a>

