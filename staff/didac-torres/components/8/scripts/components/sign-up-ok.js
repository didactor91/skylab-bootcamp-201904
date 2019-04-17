'use strict';

function SignUpOk(section, onNavigateToLogin, literals, defaultLanguage, onLanguageChange) {
    Component.call(this, section);

    var link = this.container.children[1];
    this.container.children[0].innerText = literals.title;
    this.container.children[1].innerText = literals.link;
    this.__literals__ = literals;
    this.__onLanguageChange__ = onLanguageChange;

    this.language = defaultLanguage;

    link.addEventListener('click', function(event) {
        event.preventDefault();

        onNavigateToLogin();
    });
}

SignUpOk.prototype = Object.create(Component.prototype);
SignUpOk.prototype.constructor = SignUpOk;

Object.defineProperty(SignUpOk.prototype, 'language', {
    set: function (language) {
        var literals = this.__literals__[language];

        this.container.children[0].innerText = literals.title;
        this.container.children[1].innerText = literals.link;

        if (this.__onLanguageChange__) this.__onLanguageChange__(language);
    }
});