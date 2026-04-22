# ── ADDED: register models so they appear in Django admin ────────────────────
from .models import User, Review
# ── END ADDED ─────────────────────────────────────────────────────────────────

from django.contrib import admin

# Register your models here.

# ── ADDED ─────────────────────────────────────────────────────────────────────
admin.site.register(User)
admin.site.register(Review)
# ── END ADDED ─────────────────────────────────────────────────────────────────