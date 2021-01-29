// ==UserScript==
// @name         PRD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *
// @grant        none
// ==/UserScript==

(function (global) {
  'use strict';
  class PRD {
    static EPSILON = 0.00000000000001;

    P2C(probability) {
      let low = 0;
      let last = 0;
      let high = probability;
      let middle = 0;
      while (true) {
        middle = (high + low) / 2;
        const pr = this.C2P(middle);
        if (Math.abs(pr - last) <= PRD.EPSILON) break;
        if (pr > probability) {
          high = middle;
        } else {
          low = middle;
        }
        last = pr;
      }
      return middle;
    }

    C2P(cons) {
      let expectation = 0;
      let successP = 0;
      let currentP = 0;
      const $times = Math.ceil(1 / cons);
      for (let i = 1; i <= $times; i++) {
        currentP = (1 - successP) * Math.min(1, cons * i);
        successP += currentP;
        expectation += currentP * i;
      }
      return 1 / expectation;
    }
  }

  global.prd = new PRD();
})(window);
