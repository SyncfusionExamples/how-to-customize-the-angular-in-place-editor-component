import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2VlhhQlJCfV5DQmJMYVF2R2BJfl56d1BMYllBNQtUQF1hSn9Td01iW35ccnFdQGVa");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
