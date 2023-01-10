
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

DEPARTMENTS = (
    ('Computer Science and Engineering', 'Computer Science and Engineering'),
    ('Electronics and Communication Engineering', 'Electronics and Communication Engineering'),
    ('Electrical and Electronics Engineering', 'Electrical and Electronics Engineering'),
    ('Mechanical Engineering', 'Mechanical Engineering'),
    ('Civil Engineering', 'Civil Engineering'),
    ('Robotics and Automation', 'Robotics and Automation'),
)


class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    department = models.CharField(max_length=100, choices=DEPARTMENTS, default='Computer Science and Engineering')
    fields_of_interest = models.CharField(max_length=100)
    join_date = models.DateField()
    scholar_id_link = models.CharField(max_length=100)
    slug = models.SlugField(max_length=255, default='Dont_enter_text_here', blank=True)
    irns_link = models.CharField(max_length=100)
    image = models.ImageField(upload_to='display_pictures', blank=True)
    
    def __str__(self):
        return self.user.get_username()
    # default slug is username
    def save(self, *args, **kwargs):
        self.slug = slugify(self.user.get_username())
        super(Staff, self).save(*args, **kwargs)
    
class WorkExperience(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE, default=1)
    place = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    def __str__(self):
        return self.staff.user.get_username() 

class Education(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE, default=1)
    degree = models.CharField(max_length=100)
    institute = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    def __str__(self):
        return self.staff.user.get_username() 

class Publication(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE, default=1)
    title = models.CharField(max_length=100)
    journal = models.CharField(max_length=100)
    date = models.DateField()
    link = models.CharField(max_length=100)
    publication_type = models.CharField(max_length=100)
    authors = models.CharField(max_length=100)
    def __str__(self):
        return self.staff.user.get_username()

class Contact(models.Model):
    department = models.CharField(choices=DEPARTMENTS, default='Computer Science and Engineering', max_length=100)
    HOD_name = models.CharField(max_length=100)
    HOD_email = models.EmailField(max_length=100)
    HOD_phone = models.CharField(max_length=10)
    office_incharge = models.CharField(max_length=100)
    incharge_phone = models.CharField(max_length=10)
    incharge_email = models.EmailField(max_length=100)
    def __str__(self) -> str:
        return self.department