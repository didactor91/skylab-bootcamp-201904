'use strict';

var logic = {
    register: function (name, surname, email, password, password2) {
        if (typeof name !== 'string') throw TypeError(name + ' is not a valid name');
        if (typeof surname !== 'string') throw TypeError(surname + ' is not a valid surname');
        if (password != password2) throw TypeError('Passwords do not match');
        // TODO add more validations

        // TODO verify user does not exists already, otherwise error 'user already exists'

        users.push({
            name: name,
            surname: surname,
            email: email,
            password: password
        });
    },

    login: function (email, password) {
        // TODO validate input data

        var user = users.find(function(user) { return user.email === email });

        // TODO validate user found, otherwise error 'wrong credentials'

        if (user.password === password) {
            this.__userEmail__ = email;
            this.__accessTime__ = Date.now();
        } // TODO else throw error 'wrong credentials'
    }
}
