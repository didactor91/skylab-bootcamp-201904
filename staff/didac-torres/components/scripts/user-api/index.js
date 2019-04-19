'use strict'

const userApi = {
    __url__: 'https://skylabcoders.herokuapp.com/api',
    __call__(action, path, callback) {
        // TODO validate inputs

        const xhr = new XMLHttpRequest

        xhr.open(action, `${this.__url__}/${path}`)

        xhr.addEventListener('load', function () {
            callback(JSON.parse(this.responseText))
        })

        xhr.send()
    },

    registrateUser(id, callback) {

        this.__call__("POST", `/user`, callback)

    },
    retrieveUser(id, callback) {

        this.__call__("GET", `/users/${id}`, callback)
    },
    updateUser(id, callback) {

        this.__call__("PUT", `/user/${id}`, callback)

    },
    deleteUser(id, callback) {

        this.__call__("DELETE", `/users/${id}`, callback)

    },
    authenticateUser(id, callback) {

        this.__call__("POST", `/auth`, callback)

    }



}
