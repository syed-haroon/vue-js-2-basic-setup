// Globally require jQuery, you cannot access jQuery from Console without this code
window.$ = require('jquery')

import 'bootstrap' // importing bootstrap.js
import "bootstrap/scss/bootstrap.scss"
import "./assets/scss/main.scss"

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})