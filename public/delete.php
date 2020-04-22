<?php


    use Phppot\DataSource;

    require_once "../config.php";
    $db = new DataSource();
    $conn = $db->getConnection();

	if (isset($_POST["delete"]))
	    {
	        $first = "TRUNCATE TABLE food_data.items;";
	        $faresult = mysqli_query($conn, $first);
	    }

?>