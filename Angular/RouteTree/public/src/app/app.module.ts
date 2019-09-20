import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    BrandComponent,
    CategoryComponent,
    ReviewComponent,
    ReviewDetailComponent,
    AuthorComponent,
    AllReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
