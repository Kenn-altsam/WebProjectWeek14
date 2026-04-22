from django.urls import path
from . import views

urlpatterns = [
    path('hotels/', views.hotel_list),
    path('hotels/<int:pk>/', views.hotel_detail),
    path('bookings/', views.BookingListView.as_view()),
    path('bookings/<int:pk>/', views.BookingDetailView.as_view()),
]
