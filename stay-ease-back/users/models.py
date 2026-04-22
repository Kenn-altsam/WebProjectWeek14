from django.contrib.auth.models import AbstractUser
from django.db import models

# ── ADDED: Custom model manager for Review ──────────────────────────────────
class ReviewManager(models.Manager):
    """Custom manager: filter reviews by rating or linked to a specific user."""

    def by_user(self, user):
        return self.filter(user=user)

    def high_rated(self):
        return self.filter(rating__gte=4)
# ── END ADDED ────────────────────────────────────────────────────────────────


class User(AbstractUser):
    phone = models.CharField(max_length=20, blank=True)
    
    class Meta:
        db_table = 'users'

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    hotel = models.ForeignKey('api.Hotel', on_delete=models.CASCADE, related_name='reviews')
    text = models.TextField()
    rating = models.IntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)

    # ADDED: attach the custom manager
    objects = ReviewManager()

    def __str__(self):
        return f"Review by {self.user.username}"