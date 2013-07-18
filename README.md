# Diet Middleman

A Middleman template for prototyping web applications with [Slim](www.slim-lang.com), [Susy](susy.oddbird.net), [Jasmine spec runner](http://github.com/pivotal/jasmine) via [Jasmine gem](https://github.com/pivotal/jasmine-gem)
, the [Solarized colors](http://ethanschoonover.com/solarized), [H5BP Mobile Boilerplate](http://html5boilerplate.com/mobile/)
, and [Twitter Bootstrap](http://twitter.github.io/bootstrap/). Ready to rock and roll!

## Installation

    git clone https://github.com/melindavoo/slim-in-the-middle.git ~/.middleman/mobile-slim
    bundle install

## Create a new project

	middleman init <new-project-name> --template=mobile-slim

### Jasmine

If you prefer writing your specs in coffeescript, there's a `src` folder inside the default Jasmine spec folder. To run the coffeescript compiler and the Jasmine rake tasks use:

    foreman start

If you want to use the default (just javascript) runner, run the rake task:

    rake jasmine

To run the automated CI task with Selenium:

    rake jasmine:ci


