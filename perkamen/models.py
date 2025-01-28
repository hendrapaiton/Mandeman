from django.db import models
from django.utils.translation import gettext_lazy as _
import random
import string
from datetime import datetime


class Divisi(models.Model):
    nama = models.CharField(max_length=100, unique=True)
    keterangan = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nama

    class Meta:
        verbose_name = "Bagian"
        ordering = ['nama']


class Disposisi(models.Model):
    class Status(models.TextChoices):
        RA = 'RA', _('Rahasia')
        SR = 'SR', _('Sangat Rahasia')
        PG = 'PG', _('Penting')
        SP = 'SP', _('Sangat Penting')
        RT = 'RT', _('Rutin')
        BS = 'BS', _('Biasa')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    tanggal_menerima = models.DateField()
    nomor_agenda = models.CharField(max_length=15)
    perihal = models.TextField()
    tanggal_surat = models.DateField()
    nomor_surat = models.CharField(max_length=15)
    asal_surat = models.CharField(max_length=50)
    status = models.CharField(
        max_length=2,
        choices=Status.choices,
        default=Status.BS,
    )
    diteruskan_ke = models.ForeignKey(
        Divisi, related_name='disposisi', on_delete=models.CASCADE)

    def __str__(self):
        return f"Disposisi untuk {self.surat.index}"

    class Meta:
        verbose_name = "Disposisi"
        ordering = ['-tanggal_menerima']


class Masuk(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    index = models.CharField(max_length=15, unique=True)
    berkas = models.FileField(upload_to='berkas/', blank=True, null=True)
    disposisi = models.OneToOneField(
        Disposisi, related_name='surat', on_delete=models.CASCADE, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.index:
            self.index = self.generate_unique_index()
        super().save(*args, **kwargs)

    def generate_unique_index(self):
        year = datetime.now().year
        random_digits = ''.join(random.choices(string.digits, k=10))
        return f"{year}-{random_digits}"

    def __str__(self):
        return self.index

    class Meta:
        verbose_name = "Surat Masuk"
        ordering = ['-tanggal_terima']


class Keluar(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    index = models.CharField(max_length=15, unique=True)
    penerima_surat = models.CharField(max_length=100)
    tanggal_kirim = models.DateField()
    tanggal_surat = models.DateField()
    nomor_surat = models.CharField(max_length=15)
    judul_surat = models.CharField(max_length=100)
    tujuan_surat = models.CharField(max_length=100)
    keterangan = models.TextField(blank=True, null=True)
    berkas_surat = models.FileField(upload_to='berkas/', blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.index:
            self.index = self.generate_unique_index()
        super().save(*args, **kwargs)

    def generate_unique_index(self):
        year = datetime.now().year
        random_digits = ''.join(random.choices(string.digits, k=10))
        return f"{year}-{random_digits}"

    def __str__(self):
        return self.index

    class Meta:
        verbose_name = "Surat Keluar"
        ordering = ['-tanggal_kirim']
