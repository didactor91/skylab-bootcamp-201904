'use strict';

function Detail(ul) {
    Component.call(this, ul);
}

Detail.prototype = Object.create(Component.prototype);
Detail.prototype.constructor = Detail;