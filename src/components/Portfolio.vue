<template>
    <transition name="fade">
        <div>
            <div class='nav-sticky'>
                <div>
                    <router-link to="/"><img src="/img/home.png" class="normal-font" class="logo-link"></router-link>
                </div>
                    <div class="nav-links">
                        <div class="link">
                            <router-link to="/portfolio/print" class="normal-font" active-class="makeBold">PRINT</router-link>
                        </div>
                        <div class="link">
                            <router-link to="/portfolio/branding" class="normal-font" active-class="makeBold">BRANDING</router-link>
                        </div>
                        <div class="link">
                            <router-link to="/portfolio/ads" class="normal-font" active-class="makeBold">ADVERTISING</router-link>
                        </div>
                        <div class="link">
                            <router-link to="/portfolio/uiux" class="normal-font" active-class="makeBold">UI/UX</router-link>
                        </div>
                    </div>
                <div>
                    <p class="bold-font">PORTFOLIO</p>
                </div>
            </div>
            <div class="portfolio col-lg-12">
                <div class="row">
                    <div class="col-lg-12">
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
        </div>
    </transition>
</template>

