from django.urls import path
from .views import register_user,user_details
urlpatterns = [
    path('register/',register_user,name="register_user"),
    path('user_details/',user_details,name="user_details")
]
