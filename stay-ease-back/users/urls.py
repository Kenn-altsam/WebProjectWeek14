# ── ADDED: routes for CBV, logout, me ────────────────────────────────────────
from .views import ReviewListCreateView, ReviewDetailView, logout_view, me
# ── END ADDED ─────────────────────────────────────────────────────────────────

from django.urls import path
from . import views

urlpatterns = [
    # ── ADDED ────────────────────────────────────────────────────────────────
    path('me/', me),                                        # GET  – current user profile
    path('logout/', logout_view),                           # POST – logout
    path('reviews/', ReviewListCreateView.as_view()),       # GET / POST – reviews
    path('reviews/<int:pk>/', ReviewDetailView.as_view()),  # GET / PUT / DELETE – review detail
    # ── END ADDED ─────────────────────────────────────────────────────────────
    path('register/', views.register),
    path('login/', views.login_view),
]