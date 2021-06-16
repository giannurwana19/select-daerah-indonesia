import {
  getKecamatan,
  getKelurahan,
  getKota,
  getProvinsi,
  viewOption,
} from './API.js';

document.addEventListener('DOMContentLoaded', async () => {
  const provinsi = document.getElementById('provinsi');
  const kota = document.getElementById('kota');
  const kecamatan = document.getElementById('kecamatan');
  const kelurahan = document.getElementById('kelurahan');
  const form = document.getElementById('form');
  const result = document.getElementById('result');

  const dataProvinsi = await getProvinsi();

  let optionProvinsi = '<option>Pilih provinsi</option>';
  dataProvinsi.forEach(item => {
    optionProvinsi += viewOption(item);
  });

  provinsi.innerHTML = optionProvinsi;

  // kota
  provinsi.addEventListener('change', async e => {
    const dataKota = await getKota(e.target.value);

    let optionKota = '';
    dataKota.forEach(item => {
      optionKota += viewOption(item);
    });

    kota.innerHTML = optionKota;
  });

  // kecamatan
  kota.addEventListener('change', async e => {
    const dataKecamatan = await getKecamatan(e.target.value);

    let optionKecamatan = '';
    dataKecamatan.forEach(item => {
      optionKecamatan += viewOption(item);
    });

    kecamatan.innerHTML = optionKecamatan;
  });

  kecamatan.addEventListener('change', async e => {
    const dataKelurahan = await getKelurahan(e.target.value);

    let optionKelurahan = '';
    dataKelurahan.forEach(item => {
      optionKelurahan += viewOption(item);
    });

    kelurahan.innerHTML = optionKelurahan;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(provinsi.options[provinsi.selectedIndex].text);
  });
});
