from django.contrib import admin
from .models import Staff, WorkExperience, Education, Publication

admin.site.register(Staff)
admin.site.register(WorkExperience)
admin.site.register(Education)
admin.site.register(Publication)

