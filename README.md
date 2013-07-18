# A Middleman Template

A Middleman template for prototyping web applications. 

## What's inside?
It's as close to the default Middleman template with the following add-ons:

* [Slim Templates](www.slim-lang.com)
* [Susy Grid](susy.oddbird.net)
* [Jasmine Spec Runner](http://github.com/pivotal/jasmine) via [Jasmine Gem](https://github.com/pivotal/jasmine-gem)
* [Solarized Color Palette](http://ethanschoonover.com/solarized)
* [H5BP Mobile Boilerplate](http://html5boilerplate.com/mobile/)
* [Twitter Bootstrap](http://twitter.github.io/bootstrap/)

## Installation

    $ git clone https://github.com/melindavoo/slim-in-the-middle.git ~/.middleman/mobile-slim
    $ bundle install

### Jasmine
I've included Jasmine spec runner initialization.
To run using coffeescript:

    foreman start

Plain JS, run:

    rake jasmine

To run the automated CI task with Selenium:

    rake jasmine:ci
