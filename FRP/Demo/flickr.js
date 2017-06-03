requirejs.config({
    paths: {
        ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
    }
});

require([
        'ramda',
        'jquery'
    ],
    function (_, $) {
        var trace = _.curry(function(tag, x) {
            console.log(tag," ----> ", x);
            return x;
        });

        var Impure = {
            getJson:_.curry(function (callback,url) {
                $.getJSON(url,callback);
            }),
            setHtml:_.curry(function (el,html) {
                $(el).append(html);
            })
        }

        var url = function (term) {
            return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?';
        }

        var img = function (url) {
            return $('<img />', { src: url });
        };

        var mediaUrl = _.compose(_.prop("m"),_.prop("media"));

        var mediaToImg = _.compose(img,mediaUrl);

        var srcs = _.compose(_.map(mediaToImg),_.prop("items"));

        var renderImg = _.compose(Impure.setHtml("body"),srcs);

        var app = _.compose(Impure.getJson(renderImg),url);

        app("cats");
    });