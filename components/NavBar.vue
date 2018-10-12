<template>
    <header class="fixed-top">
        <div class="navbar navbar-dark bg-dark box-shadow">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <strong>Takao Giken</strong>
            </a>
            <b-btn v-b-toggle.navbarHeader class="navbar-toggler">About us</b-btn>
          </div>
        </div>
        <b-collapse id="navbarHeader" class="bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">About us</h4>
                <p class="text-muted">
                  高尾技研は，主に技術書を対象とする同人サークルです．
                  各種同人イベント，またはオンラインで同人誌を頒布しています．
                </p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Links</h4>
                <ul class="list-unstyled">
                  <li><a href="https://takanakahiko.booth.pm/" class="text-white" >Booth</a></li>
                  <li><a href="https://portal.circle.ms/Circle/Index/10383639" class="text-white">Comiket Online Catalog</a></li>
                  <li><a href="https://taimen.jp/shops/show/236" class="text-white">対面電書(DL Card)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </b-collapse>
    </header>
</template>

