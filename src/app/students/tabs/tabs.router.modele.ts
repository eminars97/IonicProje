import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';

const routes: Routes = [    
    { path: '',
        component: TabsPage,   
        children:[
            { path: 'dersler', loadChildren: '../dersler/dersler.module#DerslerPageModule' },
            { path: 'nothesabi', loadChildren: '../nothesabi/nothesabi.module#NothesabiPageModule' },
            { path: 'derslistele', loadChildren: '../derslistele/derslistele.module#DerslistelePageModule' },
            { path: 'cameraa', loadChildren: '../cameraa/cameraa.module#CameraaPageModule' } ,
            { path: 'notekle', loadChildren: '../notekle/notekle.module#NoteklePageModule' } 
        ]  
    } 
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsRoutingModule {}