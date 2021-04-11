import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { ConnectionComponent } from "./connection/connection.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: ConnectionComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }