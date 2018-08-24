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

#### Remind
Make sure every theme with `name` property
