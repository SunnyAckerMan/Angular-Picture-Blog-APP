import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: SinglePostComponent },
  { path: 'category', component: SingleCategoryComponent },
  { path: 'terms-and-condition', component: TermsAndConditionComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'subscribe', component: SubscriptionFormComponent },
  { path: 'comment-list', component: CommentListComponent },
  { path: 'comment-form', component: CommentFormComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'category-navbar', component: CategoryNavbarComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
