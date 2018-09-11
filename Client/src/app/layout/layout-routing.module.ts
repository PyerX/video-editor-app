import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SettingsComponent } from './settings/settings.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'project'},
            { path: 'project', loadChildren: './project/project.module#ProjectModule' },
            { path: 'video-studio/:prj_id', loadChildren: './video-studio/video-studio.module#VideoStudioModule'},
            { path: 'settings', component: SettingsComponent},
            { path: 'usermng', component: UserManagementComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
