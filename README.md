# dark-horse-ui

Polymer based UI for Dark Horse.

## Usage

The Dark Horse UI is based on [Web Components](http://webcomponents.org/) and [Polymer](https://www.polymer-project.org/).

The [Web Components polyfill](https://www.npmjs.com/package/webcomponents.js) should be load first:

    <script src="node_modules/webcomponents.js/webcomponents.js"></script>

Than you can import Polymer the Web Component way:

    <link rel="import" href="node_modules/Polymer/polymer.html">

Now you can import the Dark Horse UI:

    <link rel="import" href="dark-horse.html">

There are to versions of the `dark-horse.html`.
The file in the root folder of the package will load additional files.
The dist folder contains a bundled version which contains all required files.

Now you can use the `<dh-thing></dh-thing>` element, which will automatically detect the type of the thing and render the right component.

    <dh-thing iri="..."></dh-thing>
