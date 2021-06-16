import {
  getKecamatan,
  getKelurahan,
  getKota,
  getProvinsi,
  viewData,
  viewOption,
} from './API.js';

document.addEventListener('DOMContentLoaded', async () => {
  const provinsi = document.getElementById('provinsi');
  const kota = document.getElementById('kota');
  const kecamatan = document.getElementById('kecamatan');
  const kelurahan = document.getElementById('kelurahan');
  const form = document.getElementById('form');
  const result = document.getElementById('result');
  const resetButton = document.getElementById('reset');

  const dataProvinsi = await getProvinsi();

  let optionProvinsi = '<option>Pilih provinsi</option>';
  dataProvinsi.forEach(item => {
    optionProvinsi += viewOption(item);
  });

  provinsi.innerHTML = optionProvinsi;

  // kota
  provinsi.onchange = async e => {
    const dataKota = await getKota(e.target.value);

    let optionKota = '';
    dataKota.forEach(item => {
      optionKota += viewOption(item);
    });

    kota.innerHTML = optionKota;
  };

  // kecamatan
  kota.onchange = async e => {
    const dataKecamatan = await getKecamatan(e.target.value);

    let optionKecamatan = '';
    dataKecamatan.forEach(item => {
      optionKecamatan += viewOption(item);
    });

    kecamatan.innerHTML = optionKecamatan;
  };

  kecamatan.onchange = async e => {
    const dataKelurahan = await getKelurahan(e.target.value);

    let optionKelurahan = '';
    dataKelurahan.forEach(item => {
      optionKelurahan += viewOption(item);
    });

    kelurahan.innerHTML = optionKelurahan;
  };

  resetButton.onclick = () => {
    location.reload();
  };

  form.onsubmit = e => {
    e.preventDefault();
    const data = {
      provinsi: provinsi.options[provinsi.selectedIndex].text,
      kota: kota.options[kota.selectedIndex].text,
      kecamatan: kecamatan.options[kecamatan.selectedIndex].text,
      kelurahan: kelurahan.options[kelurahan.selectedIndex].text,
    };

    result.innerHTML = viewData(data);
  };
});
