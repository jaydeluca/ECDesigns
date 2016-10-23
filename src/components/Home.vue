<template>
    <div class="home-page">
        <div class="main">
            <div class="bio">
                <img src="img/1_logo.png">
                <div class="bold-font" style="margin-bottom: 10px;">
                    <img src="img/a1.png" style="width: 176px; height: 64px">
                </div>
                <div class="normal-font">
                    CREATIVE WHIZ<br />
                    10+ YEARS EXPERIENCE<br />
                    LOCAL TO BOSTON<br />
                    <br />
                    PEOPLE CALL ME THE MUSHROOM,<br />
                    BECAUSE I’M A “FUN GUY”.<br />
                </div>
            </div>
            <div class="bio-bottom">
                508.431.3920<br />
                <a href="mailto:ECTHEDESIGNGUY@GMAIL.COM" style="text-decoration: none; color: white;">ECTHEDESIGNGUY@GMAIL.COM</a><br />
            </div>
        </div>
        <div class="side">
            <div class="top-right sides">
                <router-link to="/portfolio"><img src="img/a2.png" class="bottom-align-text imgshrink"></router-link>
            </div>
            <div class="bottom-right sides">
                <router-link to="/resume"><img src="img/a3.png" class="bottom-align-text imgshrink"></router-link>
            </div>
        </div>
    </div>
</template>