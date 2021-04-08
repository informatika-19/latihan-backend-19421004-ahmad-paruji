const userModel = require('../model/User')
const bcrypt = require('bcrypt')

exports.register = (data) =>
new Promise((resolve, reject) => {
    //console.log(data)
    userModel.findOne({
        username: data.username
    }).then(adaUser => {
        if (adaUser) {
            resolve({
                status: false,
                pesan: 'user telah terdaftar'
            })
        } else {
            bcrypt.hash(data.password, 10, (err, hash) => {
                data.password = hash
                userModel.create(data)
                .then(() => {
                    //console.log('berhasil Insert')
                    resolve({
                        status: true,
                        pesan: 'berhasil insert data user'
                    })
                }).catch(() => {
                    //console.log('gagal Insert')
                    reject({
                        status: false,
                        pesan: 'gagal insert data user'
                    })
                })
            })
        }
    })
})