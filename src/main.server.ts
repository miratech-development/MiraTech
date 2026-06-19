import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { config } from './app.config.servernfig.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);

export default bootstrap;
