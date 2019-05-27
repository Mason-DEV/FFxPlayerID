<html>
    <head>
        <?php include 'header.php'; ?>

        <!-- <script type="text/javascript" src="js/submit.js"></script> -->

    </head>
    <body>

        <?php include 'playerSelector.php'; ?>
        <?php $play1Clicks = isset($_COOKIE["CLICKS_1"]) ? $_COOKIE["CLICKS_1"] : ''; ?>
        <?php
        $play1Acc = isset($_COOKIE["ACC_1"]) ? $_COOKIE["ACC_1"] : '';
        ;
        ?>
        <?php
        $play1Time = isset($_COOKIE["TIME_1"]) ? $_COOKIE["TIME_1"] : '';
        ;
        ?>

        <?php
        $play2Clicks = isset($_COOKIE["CLICKS_2"]) ? $_COOKIE["CLICKS_2"] : '';
        ;
        ?>
        <?php
        $play2Acc = isset($_COOKIE["ACC_2"]) ? $_COOKIE["ACC_2"] : '';
        ;
        ?>
        <?php
        $play2Time = isset($_COOKIE["TIME_2"]) ? $_COOKIE["TIME_2"] : '';
        ;
        ?>

        <?php
        $play3Clicks = isset($_COOKIE["CLICKS_3"]) ? $_COOKIE["CLICKS_3"] : '';
        ;
        ?>
        <?php
        $play3Acc = isset($_COOKIE["ACC_3"]) ? $_COOKIE["ACC_3"] : '';
        ;
        ?>
        <?php
        $play3Time = isset($_COOKIE["TIME_3"]) ? $_COOKIE["TIME_3"] : '';
        ;
        ?>

        <?php
        $play4Clicks = isset($_COOKIE["CLICKS_4"]) ? $_COOKIE["CLICKS_4"] : '';
        ;
        ?>
        <?php
        $play4Acc = isset($_COOKIE["ACC_4"]) ? $_COOKIE["ACC_4"] : '';
        ;
        ?>
        <?php
        $play4Time = isset($_COOKIE["TIME_4"]) ? $_COOKIE["TIME_4"] : '';
        ;
        ?>

        <?php
        $play5Clicks = isset($_COOKIE["CLICKS_5"]) ? $_COOKIE["CLICKS_5"] : '';
        ;
        ?>
        <?php
        $play5Acc = isset($_COOKIE["ACC_5"]) ? $_COOKIE["ACC_5"] : '';
        ;
        ?>
        <?php
        $play5Time = isset($_COOKIE["TIME_5"]) ? $_COOKIE["TIME_5"] : '';
        ;
        ?>

        <?php
        $play6Clicks = isset($_COOKIE["CLICKS_6"]) ? $_COOKIE["CLICKS_6"] : '';
        ;
        ?>
        <?php
        $play6Acc = isset($_COOKIE["ACC_6"]) ? $_COOKIE["ACC_6"] : '';
        ;
        ?>
        <?php
        $play6Time = isset($_COOKIE["TIME_6"]) ? $_COOKIE["TIME_6"] : '';
        ;
        ?>

        <?php
        $play7Clicks = isset($_COOKIE["CLICKS_7"]) ? $_COOKIE["CLICKS_7"] : '';
        ;
        ?>
        <?php
        $play7Acc = isset($_COOKIE["ACC_7"]) ? $_COOKIE["ACC_7"] : '';
        ;
        ?>
        <?php
        $play7Time = isset($_COOKIE["TIME_7"]) ? $_COOKIE["TIME_7"] : '';
        ;
        ?>

        <?php
        $play8Clicks = isset($_COOKIE["CLICKS_8"]) ? $_COOKIE["CLICKS_8"] : '';
        ;
        ?>
        <?php
        $play8Acc = isset($_COOKIE["ACC_8"]) ? $_COOKIE["ACC_8"] : '';
        ;
        ?>
        <?php
        $play8Time = isset($_COOKIE["TIME_8"]) ? $_COOKIE["TIME_8"] : '';
        ;
        ?>

        <?php
        $play9Clicks = isset($_COOKIE["CLICKS_9"]) ? $_COOKIE["CLICKS_9"] : '';
        ;
        ?>
        <?php
        $play9Acc = isset($_COOKIE["ACC_9"]) ? $_COOKIE["ACC_9"] : '';
        ;
        ?>
        <?php
        $play9Time = isset($_COOKIE["TIME_9"]) ? $_COOKIE["TIME_9"] : '';
        ;
        ?>

        <?php
        $play10Clicks = isset($_COOKIE["CLICKS_10"]) ? $_COOKIE["CLICKS_10"] : '';
        ;
        ?>
        <?php
        $play10Acc = isset($_COOKIE["ACC_10"]) ? $_COOKIE["ACC_10"] : '';
        ;
        ?>
        <?php
        $play10Time = isset($_COOKIE["TIME_10"]) ? $_COOKIE["TIME_10"] : '';
        ;
        ?>





        <div id="contentwrapper">
            <div id="contentcolumn">
            </div>
        </div>
        <div oncontextmenu="return false;" id="leftcolumn">
            <div class="course_title">Player ID Training Final Scores</div>
            <div class="titleTab">Results</div>
            <div class="descTab">
                <table id="results" class="resultTable">
                    <tr id="header">
                        <th class="odd">Play Number</th>
                        <th class="odd">Number of Clicks</th>
                        <th class="odd">Accuracy</th>
                        <th class="odd">Time To Resolve</th>
                    </tr>
                    <tr id="play1">
                        <td class="even">1</td>
                        <td class="even"><?php echo $play1Clicks; ?></td>
                        <td class="even"><?php echo $play1Acc; ?></td>
                        <td class="even"><?php echo $play1Time; ?></td>
                    </tr>
                    <tr id="play2">
                        <td class="odd">2</td>
                        <td class="odd"><?php echo $play2Clicks; ?></td>
                        <td class="odd"><?php echo $play2Acc; ?></td>
                        <td class="odd"><?php echo $play2Time; ?></td>
                    </tr>
                    <tr id="play3">
                        <td class="even">3</td>
                        <td class="even"><?php echo $play3Clicks; ?></td>
                        <td class="even"><?php echo $play3Acc; ?></td>
                        <td class="even"><?php echo $play3Time; ?></td>
                    </tr>
                    <tr id="play4">
                        <td class="odd">4</td>
                        <td class="odd"><?php echo $play4Clicks; ?></td>
                        <td class="odd"><?php echo $play4Acc; ?></td>
                        <td class="odd"><?php echo $play4Time; ?></td>
                    </tr>
                    <tr id="play5">
                        <td class="even">5</td>
                        <td class="even"><?php echo $play5Clicks; ?></td>
                        <td class="even"><?php echo $play5Acc; ?></td>
                        <td class="even"><?php echo $play5Time; ?></td>
                    </tr>
                    <tr id="play6">
                        <td class="odd">6</td>
                        <td class="odd"><?php echo $play6Clicks; ?></td>
                        <td class="odd"><?php echo $play6Acc; ?></td>
                        <td class="odd"><?php echo $play6Time; ?></td>
                    </tr>
                    <tr id="play7">
                        <td class="even">7</td>
                        <td class="even"><?php echo $play7Clicks; ?></td>
                        <td class="even"><?php echo $play7Acc; ?></td>
                        <td class="even"><?php echo $play7Time; ?></td>
                    </tr>
                    <tr id="play8">
                        <td class="odd">8</td>
                        <td class="odd"><?php echo $play8Clicks; ?></td>
                        <td class="odd"><?php echo $play8Acc; ?></td>
                        <td class="odd"><?php echo $play8Time; ?></td>
                    </tr>
                    <tr id="play9">
                        <td class="even">9</td>
                        <td class="even"><?php echo $play9Clicks; ?></td>
                        <td class="even"><?php echo $play9Acc; ?></td>
                        <td class="even"><?php echo $play9Time; ?></td>
                    </tr>
                    <tr id="play10">
                        <td class="odd">10</td>
                        <td class="odd"><?php echo $play10Clicks; ?></td>
                        <td class="odd"><?php echo $play10Acc; ?></td>
                        <td class="odd"><?php echo $play10Time; ?></td>
                    </tr>
                </table>
            </div>
            <div class="titleTab">Submit Scores</div>
            <div class="form-style-6">
                <form action="" method="post">
                    <input type="text" name="name" placeholder="Your Name"/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="submit" value="Submit Scores" />
                    <input type="hidden" name="button_pressed" value="1" />
                </form>
            </div>
            <?php
            if (isset($_POST['button_pressed'])) {

                $to = 'm.guy@smt.com, s.king@smt.com, p.mclaughlin@smt.com, c.santin@smt.com, s.reyes@smt.com';

                $name = $_POST['name'];
                $email = $_POST['email'];
                $subject = '' . $name . ' - FF/x Dexterity Score Submission';

                $headers = '';
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
                $headers .= 'From: FFx Dexterity <no-reply@smt.com>\r\n';

                // subject
                $message = '
                        <style>
                    .resultTable  { margin: 10px auto;}
                    .resultTable td{}
                    .resultTable th{}
                    .resultTable .even{background-color:#eee8d5;border-color:#000000;text-align:center;vertical-align:top}
                    .resultTable .odd{border-color:#000000;text-align:center;vertical-align:top}
                    </style>
                    
                    <h3>Player Name: ' . $name . '</h3>
                    <h3>Player Email: ' . $email . '</h3>

                    <table id="results" class="resultTable" style="border-collapse:collapse;border-spacing:0;border-color:#93a1a1;" >
                    <tr id="header" style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#A0B28F;">
                        <th class="odd" style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;border-color:#000000;text-align:center;vertical-align:top">Play Number</th>
                        <th class="odd" style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;border-color:#000000;text-align:center;vertical-align:top">Number of Clicks</th>
                        <th class="odd" style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;border-color:#000000;text-align:center;vertical-align:top">Accuracy</th>
                        <th class="odd" style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;border-color:#000000;text-align:center;vertical-align:top">Time To Resolve</th>
                    </tr>
                    <tr id="play1">
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">1</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play1Clicks . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play1Acc . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play1Time . '</td>
                    </tr>
                    <tr id="play2">
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">2</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play2Clicks . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play2Acc . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play2Time . '</td>
                    </tr>
                    <tr id="play3">
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">3</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play3Clicks . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play3Acc . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play3Time . '</td>
                    </tr>
                    <tr id="play4">
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">4</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play4Clicks . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play4Acc . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play4Time . '</td>
                    </tr>
                    <tr id="play5">
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">5</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play5Clicks . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play5Acc . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play5Time . '</td>
                    </tr>
                    <tr id="play6">
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">6</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play6Clicks . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play6Acc . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play6Time . '</td>
                    </tr>
                    <tr id="play7">
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">7</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play7Clicks . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play7Acc . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play7Time . '</td>
                    </tr>
                    <tr id="play8">
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">8</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play8Clicks . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play8Acc . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play8Time . '</td>
                    </tr>
                    <tr id="play9">
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">9</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play9Clicks . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play9Acc . '</td>
                        <td class="even"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#eee8d5; border-color:#000000;text-align:center;vertical-align:top">' . $play9Time . '</td>
                    </tr>
                    <tr id="play10">
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">10</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play10Clicks . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play10Acc . '</td>
                        <td class="odd"style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#93a1a1;color:#000;background-color:#fdf6e3; border-color:#000000;text-align:center;vertical-align:top">' . $play10Time . '</td>
                    </tr>
                </table>
            </div>
                    ';
                if (mail($to, $subject, $message, $headers)) {
                    echo "<script>alert('Scores were submitted!');</script>";
                    echo "<script>document.location.href='index.php'</script>";
                } else {
                    echo "<script>alert('There was an error submitting your score, please try again.');</script>";
                }





                echo 'Email Sent.';
            }
            ?>

        </div>
    </body>
</html>
