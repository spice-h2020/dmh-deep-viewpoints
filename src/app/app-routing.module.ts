import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { ContributionManagementComponent } from './contributionManagement.component';
import { OtherPeopleComponent } from './otherPeople.component';
import { ScriptAuthoringComponent } from './scriptAuthoring.component';
import { ThemeTableComponent } from './themeTable.component';
import { SlowLookingActivityComponent } from './slowLookingActivity.component';
import { ArtworkTableComponent } from './artworkTable.component';
import { ModelResolver1 } from './model.resolver1';
import { ModelResolver2 } from './model.resolver2';
import { ModelResolver3 } from './model.resolver3';
import { ModelResolver4 } from './model.resolver4';
import { UserTableComponent } from './userTable.component';
import { ModelResolver5 } from './model.resolver5';
import { UserLoginComponent } from './userLogin.component';
import { AllResponsesComponent } from './allResponses.component';
import { OverviewComponent } from './overview.component';
import { ExhibitionTableComponent } from './exhibitionTable.component';
import { ModelResolver6 } from './model.resolver6';
import { ScriptWizardComponent } from './scriptWizard.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent, resolve: { model1: ModelResolver1, model2: ModelResolver2, model3: ModelResolver3 } },
  { path: 'slowLooking/:id', component: SlowLookingActivityComponent, resolve: { model1: ModelResolver1, model2: ModelResolver2, model3: ModelResolver3 } },
  { path: 'management', component: ContributionManagementComponent, resolve: {model4: ModelResolver4 } },
  { path: 'otherPeople', component: OtherPeopleComponent, resolve: { model1: ModelResolver1, model2: ModelResolver2, model3: ModelResolver3, model4: ModelResolver4 }  },
  { path: 'authoring', component: ScriptAuthoringComponent, resolve: { model1: ModelResolver1, model3: ModelResolver3, model6: ModelResolver6} },
  { path: 'wizard', component: ScriptWizardComponent, resolve: { model1: ModelResolver1, model3: ModelResolver3, model6: ModelResolver6} },
  { path: 'themes', component: ThemeTableComponent, resolve: { model3: ModelResolver3 } },
  { path: 'artworks', component: ArtworkTableComponent, resolve: { model2: ModelResolver2 } },
  { path: 'users', component: UserTableComponent, resolve: { model5: ModelResolver5 } },
  { path: 'exhibitions', component: ExhibitionTableComponent, resolve: { model6: ModelResolver6 } },
  { path: 'login', component: UserLoginComponent, resolve: { model5: ModelResolver5 } },
  { path: 'allResponses/:id', component: AllResponsesComponent, resolve: { model1: ModelResolver1, model2: ModelResolver2, model4: ModelResolver4 } },
  { path: 'overview', component: OverviewComponent, resolve: {model1: ModelResolver1, model2: ModelResolver2, model3: ModelResolver3, model6: ModelResolver6}},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
