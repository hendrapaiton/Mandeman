from django.test import TestCase
from perkamen.models import Keluar, Masuk, Disposisi, Divisi
from datetime import datetime

class KeluarModelTest(TestCase):
    def setUp(self):
        self.keluar = Keluar.objects.create(
            penerima_surat="John Doe",
            tanggal_kirim=datetime.now().date(),
            tanggal_surat=datetime.now().date(),
            nomor_surat="12345",
            judul_surat="Test Judul",
            tujuan_surat="Test Tujuan",
            keterangan="Test Keterangan"
        )

    def test_keluar_creation(self):
        self.assertTrue(isinstance(self.keluar, Keluar))
        self.assertEqual(self.keluar.__str__(), self.keluar.index)

    def test_generate_unique_index(self):
        self.assertTrue(self.keluar.index.startswith(str(datetime.now().year)))
        self.assertEqual(len(self.keluar.index.split('-')[1]), 10)


class MasukModelTest(TestCase):
    def setUp(self):
        self.divisi = Divisi.objects.create(nama="Test Divisi")
        self.disposisi = Disposisi.objects.create(
            tanggal_menerima=datetime.now().date(),
            nomor_agenda="12345",
            perihal="Test Perihal",
            tanggal_surat=datetime.now().date(),
            nomor_surat="54321",
            asal_surat="Test Asal",
            status=Disposisi.Status.BS,
            diteruskan_ke=self.divisi
        )
        self.masuk = Masuk.objects.create(
            berkas=None,
            disposisi=self.disposisi
        )

    def test_masuk_creation(self):
        self.assertTrue(isinstance(self.masuk, Masuk))
        self.assertEqual(self.masuk.__str__(), self.masuk.index)

    def test_generate_unique_index(self):
        self.assertTrue(self.masuk.index.startswith(str(datetime.now().year)))
        self.assertEqual(len(self.masuk.index.split('-')[1]), 10)

    def test_disposisi_creation(self):
        self.assertTrue(isinstance(self.disposisi, Disposisi))
        self.assertEqual(self.disposisi.__str__(), f"Disposisi untuk {self.masuk.index}")
