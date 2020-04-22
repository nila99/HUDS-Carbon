 <?php


    use Phppot\DataSource;

    require_once "../config.php";
    $db = new DataSource();
    $conn = $db->getConnection();

    // mysqli_options($conn, MYSQLI_OPT_LOCAL_INFILE, true);



    if(isset($_POST["submit"])) {
      $fileName = $_FILES["file"]["tmp_name"];
    
      if ($_FILES["file"]["size"] > 0) {
          
          $file = fopen($fileName, "r");
          
          while (($column = fgetcsv($file, 10000, ",")) !== FALSE) {
              
              $id = "";
              if (isset($column[0])) {
                  $id = mysqli_real_escape_string($conn, $column[0]);
              }
              $itemname = "";
              if (isset($column[1])) {
                  $itemname = mysqli_real_escape_string($conn, $column[1]);
              }

              $sqlInsert = "INSERT into items (id, name)
                   values (?,?)";
              $paramType = "is";
              $paramArray = array(
                  $id,
                  $itemname
              );
              $insertId = $db->insert($sqlInsert, $paramType, $paramArray);
              
              if (! empty($insertId)) {
                  $type = "success";
                  $message = "CSV Data Imported into the Database";
              } else {
                  $type = "error";
                  $message = "Problem in Importing CSV Data";
              }

          }
      }
  }

?>

<?php include "templates/header.php"; ?>
<?php include "templates/footer.php"; ?>