


 <?php include "templates/header.php"; ?>


        <form action="viewold.php" method="post">
        <input type="submit" value="Use 2018-2019 Data" name="delete">
        </form>

        <form action="viewnew.php" method="post" enctype="multipart/form-data">
          Select a file to upload:
          <input type="file" name="file" id="file">
          <input type="submit" value="Upload File" name="submit">
        </form>



  <?php include "templates/footer.php"; ?>
  