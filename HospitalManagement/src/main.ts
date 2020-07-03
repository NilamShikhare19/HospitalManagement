import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import {PatientHomeModule} from './PatientHome/PatientHome.module';
import {PatientEditModule} from './PatientEdit/PatientEdit.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PatientHomeModule)
  .catch(err => console.error(err));
