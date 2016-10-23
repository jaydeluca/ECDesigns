<template>
    <transition name="fade">
        <div class="portfolio col-lg-12">
            <div class="row">
                <div class="col-sm-12">
                    <router-link to="/"><img src="/img/home.png" class="logo-link"></router-link>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-sm-8 col-lg-offset-2" style="text-align: center;">
                            <p class="bold-font">PORTFOLIO</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" style="text-align: center; margin-top: 20px;">
                            <p class="normal-font">
                                <router-link to="/portfolio/print" active-class="makeBold">PRINT</router-link> &nbsp;&nbsp;|&nbsp;&nbsp;
                                <router-link to="/portfolio/branding" active-class="makeBold">BRANDING</router-link> &nbsp;&nbsp;|&nbsp;&nbsp;
                                <router-link to="/portfolio/ads" active-class="makeBold">ADVERTISING</router-link> &nbsp;&nbsp;|&nbsp;&nbsp;
                                <router-link to="/portfolio/web" active-class="makeBold">WEB</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="portfolio-container">
                            <transition name='fade'>
                                <router-view></router-view>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </transition>
</template>

