[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

<image src="https://user-images.githubusercontent.com/5190217/30834260-b90148f8-a228-11e7-8682-d09df8721da4.png" width="300">

# Envronment Boilerplate

Envronment Boilerplate gives us a simple and modern way to create WebVR applications using [A-FRAME](https://aframe.io/), the Mozilla's web framework for building virtual reality experiences. The boilerplate uses [Babel](https://babeljs.io/) and [Webpack](https://webpack.js.org/) so you are able to write ES6 and make your code reusable.


## Getting started

Clone repository:

```shell
git clone --depth=1 --branch=master https://github.com/envronment/envronment-boilerplate.git PROJECT_NAME

```

Run dev server

```shell
npm run start
# or
yarn start
```

After run dev server: [localhost:8884](http://localhost:8884)


Run build:

```shell
npm run build
# or
yarn build
```

Every built file will be in `/public` folder


## Templates

[A-FRAME](https://aframe.io/) enables you do a wide range of VR/AR stuff pretty quickly. But you will write a lots of code "HTML" (it's like HTML). What's not actually bad. Altought it's not bad, it still being a problem for project maintenance once there is too much code. Too much static content.

Template engines are good to organize static content. HTML page is breaked in partials that extend the same template. It works wonderfully with A-FRAME pages. The template engine used for this boilerplate is [Nunjucks](https://mozilla.github.io/nunjucks/templating.html). This engine has block inheritance and macros. That's exactly what we need.

### Sample

`src/image.tmpl`

```html
{% set title = "360 Image - Envronment Boilerplate" %}

{% extends "layouts/default.tmpl" %}

{% block assets %}
<img id="image-360" src="assets/image-360.jpg">
{% endblock %}

{% block content %}
<a-sky src="#image-360" rotation="0 -130 0" rotate-image="speed: .3"></a-sky>
{% endblock %}

```

`src/layouts/default.tmpl`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
  <meta name="apple-mobile-web-app-capable" content="yes">
</head>
<body>
  <a-scene {{ scene_properties }}>
    <a-assets>
      {% block assets %}{% endblock %}
    </a-assets>
    {% block content %}{% endblock %}
  </a-scene>
</body>
</html>
```

## Project structure

```
/src
  /assets
  /elements
  /javascripts
  /layouts
/config
  /scripts
  /webpack
/public
```

* `src` where all scene have to stay. Each `.tmpl` page is a scene
  * `assets` static files (images, videos, 3d models etc)
  * `elements` Nunjucks macros. Reusable elements like a `room` or `hand controls`
  * `javascripts` I think the name is self explained
  * `layouts` Templates to be extended
* `config` project environment settings
  * `scripts` node tooling
  * `webpack` webpack environment setting files
* `public` webpack build target


## JavaScript

The main JavaScript file is `index.js`. Every script imported there will be executed on scene. You can change this setting in `config/webpack/config.js`.

As the project has Webpack and Babe, the ES6 (and a little of ES7) syntax is able to be applied. [A-FRAME components]() can be easily imported.

`src/javascripts/index.js`

```javascript
import aframe from 'aframe';
import aframeExtras from 'aframe-extras';

import rotateImage from './rotate-image'

aframeExtras.registerAll();

aframe.registerComponent('rotate-image', rotateImage);
```

`src/javascripts/rotateImage.js`

```javascript
export default {
  schema: {
    speed: { default: 10 },
  },
  tick() {
    const el = this.el;
    const { speed } = this.data;
    const rotation = el.getAttribute('rotation');
    rotation.y += speed;
    el.setAttribute('rotation', rotation);
  },
};
```

--

Made with some :beers: by [@taltk9](https://github.com/taltk9) and [@sergiomurilovarela](https://github.com/sergiomurilovarela)
