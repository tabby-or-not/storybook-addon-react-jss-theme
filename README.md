See [storybook-addon-styled-component-theme](https://github.com/echoulen/storybook-addon-styled-component-theme)

This is a direct copy, adapted to work for react-jss

#### Installation
```bash
yarn add storybook-addon-react-jss-theme --dev
```

#### Add to .storybook/addons.js

```javascript
import 'storybook-addon-react-jss-theme/dist/register';
```

#### addDecorator to .storybook/config.js
```javascript
import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-react-jss-theme';

const themes = [theme1, theme2];
addDecorator(withThemesProvider(themes));
```

> or

#### addDecorator to stories

```javascript
import {withThemesProvider} from 'storybook-addon-react-jss-theme';

const themes = [theme1, theme2];

storiesOf("demo", module)
  .addDecorator(withThemesProvider(themes))
  .add("demo div", () => <div>DEMO</div>);
```

#### Reminder
Make sure every theme has a `name` property


#### Troubleshooting
If you have addon channel errors, please update the version of your storybook and related addons to match.

See https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel
