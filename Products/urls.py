from django.urls import path,include
from .views import ProductList, ProductDetail, CategoryList, CategoryView, search

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('products/search/', search),
    path('categories/', CategoryList.as_view()),
    path('<slug:category_slug>/<slug:product_slug>/', ProductDetail.as_view()),
    path('<slug:category_slug>/', CategoryView.as_view()),
]