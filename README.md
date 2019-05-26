# Romanian Messages for React-Admin

Romanian messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

```sh
npm install --save ra-language-romanian
```

## Usage

```js
import romanianMessages from 'ra-language-romanian';

const messages = {
    'ro': romanianMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="ro" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License, and sponsored by [marmelab](http://marmelab.com).