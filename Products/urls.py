from django.urls import path,include
from .views import ProductList, ProductDetail

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('<slug:category_slug>/<slug:product_slug>/', ProductDetail.as_view()),
]