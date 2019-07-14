$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "/api/mathers",
        success: function (data) {
            console.log(data);
            var source = {
                "timeline": {
                    "headline": "数学家简史",
                    "type": "default",
                    "text": "Timeline of Mathematics",
                    "startDate": "1700",
                    "date": []
                }
            }
            data.forEach(v => {
                var item = {
                    "startDate": v.year_born.toString(),
                    "endDate": v.year_die.toString(),
                    "headline": v.name_cn||v.name_en,
                    "text": v.information,
                    "asset": {
                        "media": v.avatar,
                        "credit": "",
                        "caption": ""
                    }
                }
                source.timeline.date.push(item);
            })
          
            createStoryJS({
                type: 'timeline',
                width: '100%',
                height: '100%',
                lang:"zh-cn",
                source: source,
                embed_id: 'my-timeline'
            });
        }
    })

});