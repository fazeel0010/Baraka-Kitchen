import http from 'https';

const req = http.request('https://www.foodpanda.pk/restaurant/jq2x/baraka-biryani', {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
}, (res) => {
  let text = '';
  res.on('data', (chunk) => text += chunk);
  res.on('end', () => {
    const match = text.match(/window\.__PRELOADED_STATE__\s*=\s*(\{.*?\});/);
    if (match) {
      const data = JSON.parse(match[1]);
      const it = data?.entities?.menus?.items;
      if (it) {
        for(const k in it) {
          console.log(it[k].name + '|' + it[k].price);
        }
      }
    } else {
      console.log('No PRELOADED_STATE found');
    }
  });
});

req.on('error', console.error);
req.end();
