import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        loadChildren: './tabs/tabs.module#TabsPageModule'
    },  { path: 'notekle', loadChildren: './notekle/notekle.module#NoteklePageModule' },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule {
}
