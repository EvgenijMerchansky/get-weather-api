import axios from 'axios';

export const test = (arg) => {
  return function(dispatch){
    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${arg}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`, //http://weather.yahooapis.com/forecastrss?w=location
      {
      method: 'get',
      key: 'a4fc0f9419419e1b36361fd1f44d3c603e5a1be2',
      headers:
        {
        // 'Access-Control-Allow-Origin' : 'http://weather.yahooapis.com',
        // 'X-Requested-With': 'XMLHttpRequest',
        }
      // params: {
      //   // city: location,
      // }
    }).then(response => {
      // - - - -
      // const data = response.data.query.results.channel.item;
      // const total = {
      //   title: title,
      //   data: data
      // }
      // - - - -
      const genDel = arg.charAt(0).toUpperCase();
      const sl = arg.slice(1,20);
      const totalString = genDel + sl;
      dispatch({
        type: 'TEST',
        payloadTitle: response.data.query.results.channel.item.condition,
        title: totalString
      })
    })
  }
}
