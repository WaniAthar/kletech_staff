from django.urls import path, include
from . import views
from django.contrib import admin
from django.conf import settings  
from django.conf.urls.static import static  

admin.site.site_header = "KLE Staff"
admin.site.site_title = "KLE Admin Portal"
admin.site.index_title = "Welcome to KLE Staff Administration"


urlpatterns = [
    path('', views.home, name='home'),
    path('staff/', include('staff_profile.urls')),
    path('admin/', admin.site.urls),
    path('about/', views.about, name='aboutus'),
    path('contact/', views.contact, name='contactus'),
]
if settings.DEBUG:  
        urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT) 