define([
], function(
){

    return {

        last: function(){
            var url = window.location.href,
                parts = url.split('/');

            return parts[parts.length - 1];
        }

    }

});