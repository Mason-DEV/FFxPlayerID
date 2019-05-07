<?php ?>
<html>
    <head>
        <?php include 'header.php'; ?>
        <script type="text/javascript" src="js/playerSelector.js"></script>
        <script type="text/javascript" src="js/play1.js"></script>
        <script type="text/javascript" src="js/squares.js"></script>
    </head>
    <body>
        <?php include 'playerSelector.php'; ?>
        <div id="contentwrapper">
            <div id="contentcolumn">
                <?php include 'playholder.php'; ?>
            </div>
        </div>
        <div id="leftcolumn">
            <svg xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
                <svg id="svgHome" x="20" y="20"width="82%" height="60%"></svg>
                <svg id="svgEnd" x="20" y="20" width="82%" height="60%" style="visibility: hidden;"></svg>
            </svg>
            <!--            <svg width="100%" height="100%" style=" fill:pink">
                        <rect id="svgWrapper" width="100%" height="100%" style="fill:rgb(0,255,255)"/>
                        <rect id="svgHome" x="20" y="20"width="82%" height="60%" style="fill:rgb(0,0,255); visibility: visible;" />
                        <rect id="svgEnd" x="20" y="20" width="82%" height="60%" style="fill:rgb(0,255,255); visibility: hidden;" />
                        <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
                              style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />-->
        </div>
    </body>
</html>
