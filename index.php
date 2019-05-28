<?php  
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}


if (isset($_SESSION['CLICKS_1']) && !empty($_SESSION['CLICKS_1'])) {
   header("Location: play2php");
} 
?>
?>
<html>
    <head>
        <?php include 'header.php'; ?>
        <script type="text/javascript" src="js/index.js"></script>
    </head>
    <body>
        <?php include 'playerSelector.php'; ?>
        <div id="contentwrapper">
            <div id="contentcolumn">
            </div>
        </div>
        <div oncontextmenu="return false;" id="leftcolumn">
            <div id="intro">
                <div class="course_title">Player ID Training Instructions</div>
                <div class="titleTab">Game Description</div>
                <div class="descTab">This training game is designed to mimic the same key combinations used in the Field F/x Resolver application. <br>This introduction will walk you through how to tag the ID of each player successfully.</div>
                <div class="title2Tab">Selecting a player ID</div>
                <div class="descTab">In order to tag a player, you must first select the correct ID of the player, using your keyboard. The banner at the top of the screen will reflect which ID you have selected by highlighting blue.
                    <br>Try selecting some players using the hotkeys below, and see how the banner changes.<br><ul>
                        <li>Position players &#8594; 1 thru 9</li>
                        <li>Batter &#8594; 0</li>
                        <li>1st Base Runner &#8594; Forward Slash ( / )</li>
                        <li>2nd Base Runner &#8594; Asterisk ( * )</li>
                        <li>3rd Base Runner &#8594; Minus ( - )</li>
                    </ul></div>
                <div class="title2Tab">Tagging players</div>
                <div class="descTab">Resolver has two different ways to tag a player. <br> Right Click &#8594; Manually creates a player ID path. For this game, these will be represented by <font color="red"><b>red</b> </font> squares.<br> Left Click &#8594; Assigns a computer generated path to the selected ID. For this game, these will be represented by <font color="cyan"><b>cyan</b> </font>squares.<br>
                    For the example below, select player 1 using the hotkey. Then right click the square. Then select player 2, with the hotkey. Then Left click his square.<br> Both players tags should now be green.
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="150">
                    <svg id="svgHomeINDEX" x="20" y="20"width="82%" height="120"></svg>
                </div>
                <div class="title2Tab">Switching between Start and End of play</div>
                <div class="descTab">Players require having an ID tag assigned to them from the Start of the play, to the End of the play. This applies to all pitches for the entire game. <br> Resolver uses the <b>Home</b> and <b>End</b> keys on the keyboard to switch between the two. <br> Press the <b>Home</b> and <b>End</b> key now and see how that changes the status of the play below.<br><h1 id="playStatus">Beginning of Play</h1></div>
                <div class="title2Tab">Verify a Play</div>
                <div class="descTab">Once a play is completed, it needs to marked "Verified". <br> This is done with the F12 key on your keyboard. <br> In the game, when you have changed all the player ID squares to green. You will hit F12 to log your time, and move on to the next level.</div>
                <div class="title2Tab">Lets Play!</div>
                <div class="descTab">Hit the button below to get started.</div>
                <input id="btntest" type="button" value="Start" style="background-color: #A0B28F; /* Green */  border: none;  color: white;  padding: 15px 32px;  text-align: center;  text-decoration: none;  display: inline-block; margin-left: 30; margin-bottom: 60; font-size: 16px;"  onclick="window.location.href = 'play1.php'" />
            </div>
        </div>

        <!--
        
                </div>
            </body>
        </html>