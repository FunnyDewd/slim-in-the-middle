# A Middleman Template

A Middleman template for prototyping web applications with [Slim](www.slim-lang.com), [Susy](susy.oddbird.net), [Jasmine spec runner](http://github.com/pivotal/jasmine) via [Jasmine gem](https://github.com/pivotal/jasmine-gem)
, the [Solarized color palette](http://ethanschoonover.com/solarized), [H5BP Mobile Boilerplate](http://html5boilerplate.com/mobile/)
, and [Twitter Bootstrap](http://twitter.github.io/bootstrap/). Ready to rock and roll!

## Installation

    $ git clone https://github.com/melindavoo/slim-in-the-middle.git ~/.middleman/mobile-slim
    $ bundle install

### Jasmine

There's a `src` folder inside the default Jasmine spec folder for coffeescript files. To run the coffeescript compiler and the Jasmine rake tasks use:

    foreman start

If you prefer the default, plain JS runner, use the Jasmine rake task:

    rake jasmine

To run the automated CI task with Selenium:

    rake jasmine:ci
