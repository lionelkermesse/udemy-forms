import {RouterModule, Routes} from "@angular/router";
import {FormTemplComponent} from "./form-templ/form-templ.component";
import {FormReactComponent} from "./form-react/form-react.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  {path: '', redirectTo: 'template', pathMatch: 'full'},
  {path: 'template', component: FormTemplComponent},
  {path: 'reactive', component: FormReactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
