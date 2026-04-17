async function fetchMenu() {
  const url = 'https://www.foodpanda.pk/restaurant/jq2x/baraka-biryani';
  const res = await fetch(url);
  const text = await res.text();
  const match = text.match(/window\.__PRELOADED_STATE__\s*=\s*(\{.*?\});/);
  if (match) {
    const data = JSON.parse(match[1]);
    const menu = data?.entities?.menus?.menus;
    if (!menu) {
        console.log("No menu found in state.");
        return;
    }
    // just dump some category items
    for (const key in data.entities.menus.items) {
        const item = data.entities.menus.items[key];
        console.log(item.name + " -> " + item.price);
    }
  } else {
    console.log("No PRELOADED_STATE found.");
  }
}
fetchMenu().catch(console.error);
