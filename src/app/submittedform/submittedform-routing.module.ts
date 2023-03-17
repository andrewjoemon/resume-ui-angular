import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmittedformComponent } from './submittedform.component';
import { SubmitformguardGuard } from './submittedformguard/submitformguard.guard';

const routes: Routes = [{ path: '', component: SubmittedformComponent, canDeactivate:[SubmitformguardGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmittedformRoutingModule { }
