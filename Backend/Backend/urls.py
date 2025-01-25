from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.views import LoginView 


urlpatterns = [
     path('admin/', admin.site.urls),  # this use to go to admin dashboard
     path('api/', include('api.urls')), 
       # Any URLs defined in the api.urls file will be prefixed with api/
        path('api/login/', LoginView.as_view(), name='login'),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
