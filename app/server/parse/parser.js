var request = require("request"),
    cheerio = require("cheerio");

var config = require('../config');

// todo logger
function requestPosts(onParsed, onError) {
    request(config.SITE_URL, function (error, response, body) {
        if (error) {
            console.log("Error: " + error);
            onError(error);
        } else {
            var parsedResults = [];

            var $ = cheerio.load(body);

            $('div.item').each(function (i, element) {
                var item = $(this);
                var header = item.children('.itemhead').children('h3').children('a').prev().text();
                var text = item.children('.itemtext').text();
                var url = item.children('.itemhead').children('h3').children('a').prev().attr('href');
                var img = item.children('.itemtext').children('p').children('a').children('img').attr("src");

                var metadata = {
                    header: header,
                    text: text,
                    url: url,
                    img: img
                };
                parsedResults.push(metadata);
            });
            onParsed(parsedResults);
        }
    });
}

function fetchPosts() {
    return new Promise((onParsed, onError) => {
        requestPosts(onParsed, onError);
    });
}

module.exports = {fetchPosts};