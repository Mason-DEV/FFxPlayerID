<?php  
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}



$_SESSION["CLICKS_8"] = isset($_COOKIE["CLICKS_8"]) ? $_COOKIE["CLICKS_8"] : '';
$_SESSION["TIME_8"] = isset($_COOKIE["TIME_8"]) ? $_COOKIE["TIME_8"] : '';
$_SESSION["ACC_8"] = isset($_COOKIE["ACC_8"]) ? $_COOKIE["ACC_8"] : '';

if (isset($_SESSION['CLICKS_9']) && !empty($_SESSION['CLICKS_9'])) {
   header("Location: play10.php");
} 

?>
<html>
    <head>
        <?php include 'header.php'; ?>

        <script type="text/javascript" src="js/play9.js"></script>

    </head>
    <body>
        <?php include 'playerSelector.php'; ?>
        <div id="contentwrapper">
            <div id="contentcolumn">
                <?php include 'playholder.php'; ?>
            </div>
        </div>
        <div oncontextmenu="return false;" id="leftcolumn">
            <div id="playPosition"><h1>Beginning of Play</h1></div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="95%">
                <svg id="svgHome" x="20" y="20"width="82%" height="60%"></svg>
                <svg id="svgEnd" x="20" y="20" width="82%" height="60%" style="visibility: hidden;"></svg>
            </svg>

        </div>
    </body>
</html>
