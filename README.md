![Pindakaas logo](http://i.imgur.com/fDHZYfC.png)

[![Build Status](https://travis-ci.org/simplyGits/pindakaas.svg)](https://travis-ci.org/simplyGits/pindakaas)

A Dutch language parser written in JavaScript.

To compile from source:

    browserify index.js -s pindakaas -o bundle.js && uglifyjs -o bundle.min.js bundle.js
