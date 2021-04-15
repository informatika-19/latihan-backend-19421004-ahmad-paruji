const kegiatanModel = require('../model/Kegiatan')

exports.create = (data) =>
new Promise((resolve, reject) => {
//fungsi untuk menyimpan kegiatan
    kegiatanModel.create(data)
    .then(() => resolve( {
        status: true,
        pesan: 'Berhasil input kegiatan'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal input kegiatan'
    }))
})