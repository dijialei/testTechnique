import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TodoService } from './services/todo.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),TodoService]
  
};
