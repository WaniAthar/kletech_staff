
from email.policy import default
from django.db import models
from django.contrib.auth.models import User

DEPARTMENTS = (
    ('CSE', 'Computer Science and Engineering'),
    ('ECE', 'Electronics and Communication Engineering'),
    ('EEE', 'Electrical and Electronics Engineering'),
    ('ME', 'Mechanical Engineering'),
    ('CE', 'Civil Engineering'),
    ('R&A', 'Robotics and Automation'),
)


class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    department = models.CharField(max_length=3, choices=DEPARTMENTS, default='CSE')
    bio = models.CharField(max_length=1000)
    join_date = models.DateField()
    scholar_id_link = models.CharField(max_length=100)
    irns_link = models.CharField(max_length=100)
    image = models.ImageField(upload_to='display_pictures', blank=True)
    def __str__(self):
        return self.user.get_username()+ " " + self.department + " " + self.designation
    
class WorkExperience(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE, default=1)
    place = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    def __str__(self):
        return self.staff.user.get_username() + " " + self.place + " " + self.designation

class Education(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE, default=1)
    degree = models.CharField(max_length=100)
    institute = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    def __str__(self):
        return self.staff.user.get_username() + " " + self.degree + " " + self.institute

class Publication(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE, default=1)
    title = models.CharField(max_length=100)
    journal = models.CharField(max_length=100)
    date = models.DateField()
    link = models.CharField(max_length=100)
    publication_type = models.CharField(max_length=100)
    def __str__(self):
        return self.staff.user.get_username() + " " + self.title + " " + self.journal