# FrontendGems :: Project Boilerplate

[FrontendGems](http://frontendgems.com/) is a collection of carefully crafted
web components, forged by the world's finest frontend developers. It aims to
be a home for creative collaborators who want to solve real world problems
with the most elegant solution.

-------------------------------

This is the FrontendGems boilerplate project. All gem projects should be based
off this repository.

For more details about FrontendGems and this boilerplate, you can read the blog
post about it [here](http://frontendgems.com/blog/html-css-boilerplate/).

## Installation

Clone this repository:

`git clone https://github.com/alexpriceonline/frontendgems-boilerplate.git`

Open directory:

`cd frontendgems-boilerplate`

Get the npm packages:

`npm install`

## Run

In one terminal tab run the gulp build process:

`gulp`

In another terminal tab serve the files, I use a Python simple HTTP server:

`python -m SimpleHTTPServer 8000`

Open [http://localhost:8000](http://localhost:8000)

## Code standard

FrontendGems are design to be the pinnacle of front-end development
programming. This boilerplate (_as closely as possible_) follows the
[Trello CSS guide](https://gist.github.com/bobbygrace/9e961e8982f42eb91b80).

It also tries to keep all CSS attributes in alphabetical order with mixins
and `@extend`s at the top of the block. _NB. Responsive mixins should go at
the bottom of the CSS block_.

## Contributors

* Alex Price ([@alexpriceonline](https://twitter.com/alexpriceonline))

## Change log

* __13 Oct 15:__ Initial boilerplate setup
* __20 Oct 15:__ Updated README
* __22 Oct 15:__ Moved base module, removed FrontendGem chrome and added a link
to the blog post
* __29 Jan 16:__ Removed unnecessary code surrounding footer and logo

## Support

Please [open an issue](https://github.com/alexpriceonline/frontendgems-boilerplate/issues/new)
if appropriate, or contact [Alex](http://twitter.com/alexpriceonline/) on
Twitter.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/).
Create a branch, add commits, and [open a pull request](https://github.com/alexpriceonline/frontendgems-boilerplate/compare/).
