let api_link = 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=14';
fetch(api_link)
    .then(
        function(response) {
            if (!response.ok) {
                console.log('ERROR' + response.status);
                return;
            }

            response.json().then(function(json) {
                console.log(json);
                
                for(let i = 0; i < 4; i++) {
                    let title = 'title' + (i+1);
                    let synopsis = 'synopsis' + (i+1);
                    let banner = 'banner' + (i+1);
                    let rating = 'rating' + (i+1);
                    let status = 'status' + (i+1);
                    let ep_count = 'ep_count' + (i+1);
                    let end_date = 'end_date' + (i+1);
                    let bot_title = 'bot_title' + (i+1);
                    let video = 'video' + (i+1);

                    document.getElementById(title).innerHTML = json.data[i].attributes.canonicalTitle;
                    document.getElementById(synopsis).innerHTML = json.data[i].attributes.synopsis;
                    document.getElementById(banner).src = json.data[i].attributes.coverImage.original;
                    document.getElementById(rating).innerHTML = 'Rating: '+json.data[i].attributes.averageRating;
                    document.getElementById(status).innerHTML = 'Status: '+json.data[i].attributes.status;
                    document.getElementById(ep_count).innerHTML = 'Episode Count: '+json.data[i].attributes.episodeCount;
                    document.getElementById(end_date).innerHTML = 'End Date: '+json.data[i].attributes.endDate;
                    document.getElementById(bot_title).innerHTML = json.data[i].attributes.canonicalTitle;
                    document.getElementById(video).src = json.data[i].attributes.posterImage.large;
                }

            });
    })
    .catch(
        function(error) {
            console.log('ERROR 404');
        }
    );