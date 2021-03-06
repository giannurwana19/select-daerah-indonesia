const url = 'http://dev.farizdotid.com/api/daerahindonesia';

export const viewOption = item => {
  return /* html */ `<option value="${item.id}">${item.nama}</option>`;
};

export const viewData = data => {
  return /* html */ `<div class="data-result">
    <p>Provinsi: ${data.provinsi}</p>
    <p>Kota: ${data.kota}</p>
    <p>Kecamatan: ${data.kecamatan}</p>
    <p>Kelurahan: ${data.kelurahan}</p>
  </div>`;
};

export const getProvinsi = async () => {
  const response = await fetch(`${url}/provinsi`);
  const { provinsi } = await response.json();

  return provinsi;
};

export const getKota = async value => {
  const response = await fetch(`${url}/kota?id_provinsi=${value}`);
  const { kota_kabupaten } = await response.json();

  return kota_kabupaten;
};

export const getKecamatan = async value => {
  const response = await fetch(`${url}/kecamatan?id_kota=${value}`);
  const { kecamatan } = await response.json();

  return kecamatan;
};

export const getKelurahan = async value => {
  const response = await fetch(`${url}/kelurahan?id_kecamatan=${value}`);
  const { kelurahan } = await response.json();

  return kelurahan;
};
