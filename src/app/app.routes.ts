import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos';
const routes: Routes = [
    {
        path: '',
        component:TodosComponent
    },];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);