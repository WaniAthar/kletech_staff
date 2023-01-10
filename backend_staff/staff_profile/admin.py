from django.contrib import admin
from .models import Staff, WorkExperience, Education, Publication, Contact
from django.contrib.auth.models import User


class staffAdmin(admin.ModelAdmin):
    list_display = ['user','department','designation']
    ordering = ['user'] 
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user=request.user)
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if request.user.is_superuser:
            return super().formfield_for_foreignkey(db_field, request, **kwargs)
        if db_field.name == "user":
            kwargs["queryset"] = User.objects.filter(username=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

class workExperienceAdmin(admin.ModelAdmin):
    list_display = ['staff','place','designation']
    ordering = ['staff']
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(staff__user=request.user)
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if request.user.is_superuser:
            return super().formfield_for_foreignkey(db_field, request, **kwargs)
        if db_field.name == "staff":
            kwargs["queryset"] = Staff.objects.filter(user=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

class educationAdmin(admin.ModelAdmin):
    list_display = ['staff','degree','institute']
    ordering = ['staff']
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(staff__user=request.user)
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if request.user.is_superuser:
            return super().formfield_for_foreignkey(db_field, request, **kwargs)
        elif db_field.name == "staff":
            kwargs["queryset"] = Staff.objects.filter(user=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

class publicationAdmin(admin.ModelAdmin):
    list_display = ['staff','title','journal']
    ordering = ['staff']
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(staff__user=request.user)
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        # if the user is admin then show all the staff
        # else show only the staff of the user
        if request.user.is_superuser:
            return super().formfield_for_foreignkey(db_field, request, **kwargs)
        elif db_field.name == "staff":
            kwargs["queryset"] = Staff.objects.filter(user=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
    
class contactAdmin(admin.ModelAdmin):
    list_display = ['department']
    ordering = ['department']

admin.site.register(Staff, staffAdmin)
admin.site.register(WorkExperience, workExperienceAdmin)
admin.site.register(Education, educationAdmin)
admin.site.register(Publication, publicationAdmin)
admin.site.register(Contact, contactAdmin)
