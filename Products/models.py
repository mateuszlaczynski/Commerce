from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=250, unique=True)
    slug = models.SlugField(blank=True, null=True, unique=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name
    
    def save(self):
        self.slug = slugify(self.name)
        super(Category, self).save()
    
    def get_absolute_url(self):
        return f'/{self.slug}/'

class Product (models.Model):
    name = models.CharField(max_length=250, unique=True)
    description = models.TextField(max_length=5000)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_added = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    image = models.ImageField(upload_to='uploads/')

    def __str__(self):
        return self.name
    
    def save(self):
        self.slug = slugify(self.name)
        super(Product, self).save()

    def get_image(self):
        return 'http://127.0.0.1:8000' + self.image.url

    def get_absolute_url(self):
        return f'/{self.category.slug}/{self.slug}/'
