/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
  port: 8080,

  language: 'ru',
  timeFormat: 24,
  units: 'metric',

  modules: [
    {
      module: 'alert',
    },
    {
      module: 'clock',
      position: 'top_left'
    },
    {
      module: 'calendar',
      header: 'Праздники',
      position: 'top_left',
      config: {
        calendars: [
          {
            symbol: 'calendar-check-o ',
            url: 'http://www.calend.ru/ical/ical-ukraine.ics'
          }
        ]
      }
    },
    {
      module: 'compliments',
      position: 'lower_third'
    },
    {
      module: 'currentweather',
      position: 'top_right',
      config: {
        location: 'Kharkiv',
        locationID: '706483',  //ID from http://www.openweathermap.org
        appid: '0b5ffe66ba16811c89af8bf9228a2be7'
      }
    },
    {
      module: 'weatherforecast',
      position: 'top_right',
      header: 'Прогноз погоды',
      config: {
        location: 'Kharkiv',
        locationID: '706483',  //ID from http://www.openweathermap.org
        appid: '0b5ffe66ba16811c89af8bf9228a2be7'
      }
    },
    {
      module: 'newsfeed',
      position: 'bottom_bar',
      config: {
        feeds: [
          {
            title: "Корреспондент",
            url: "http://k.img.com.ua/rss/ru/all_news2.0.xml"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}

