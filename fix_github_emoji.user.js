// ==UserScript==
// @name         fuck github emoji
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       desnoah
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  var style = document.createElement('style')
  style.innerHTML = 'g-emoji { display: inline!important }'
  document.head.appendChild(style)
})()
