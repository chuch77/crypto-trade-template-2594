import { MUJER_PRODUCTS } from './mujerProducts';
import { HOMBRE_PRODUCTS } from './hombreProducts';
import { NINOS_PRODUCTS } from './ninosProducts';
import { NINAS_PRODUCTS } from './ninasProducts';

const RAW_PRODUCTS = [
  {
    "id": "dummy-83",
    "source": "dummyjson",
    "title": "Blue & Black Check Shirt",
    "price": 539.82,
    "currency": "MXN",
    "category": "mens shirts",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
    "rating": 3.64
  },
  {
    "id": "dummy-84",
    "source": "dummyjson",
    "title": "Gigabyte Aorus Men Tshirt",
    "price": 449.82,
    "currency": "MXN",
    "category": "mens shirts",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
    "rating": 3.18
  },
  {
    "id": "dummy-85",
    "source": "dummyjson",
    "title": "Man Plaid Shirt",
    "price": 629.82,
    "currency": "MXN",
    "category": "mens shirts",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
    "rating": 3.46
  },
  {
    "id": "dummy-86",
    "source": "dummyjson",
    "title": "Man Short Sleeve Shirt",
    "price": 359.82,
    "currency": "MXN",
    "category": "mens shirts",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
    "rating": 2.9
  },
  {
    "id": "dummy-87",
    "source": "dummyjson",
    "title": "Men Check Shirt",
    "price": 503.82,
    "currency": "MXN",
    "category": "mens shirts",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
    "rating": 2.72
  },
  {
    "id": "dummy-88",
    "source": "dummyjson",
    "title": "Nike Air Jordan 1 Red And Black",
    "price": 2699.82,
    "currency": "MXN",
    "category": "mens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
    "rating": 4.77
  },
  {
    "id": "dummy-89",
    "source": "dummyjson",
    "title": "Nike Baseball Cleats",
    "price": 1439.82,
    "currency": "MXN",
    "category": "mens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
    "rating": 3.88
  },
  {
    "id": "dummy-90",
    "source": "dummyjson",
    "title": "Puma Future Rider Trainers",
    "price": 1619.82,
    "currency": "MXN",
    "category": "mens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
    "rating": 4.9
  },
  {
    "id": "dummy-91",
    "source": "dummyjson",
    "title": "Sports Sneakers Off White & Red",
    "price": 2159.82,
    "currency": "MXN",
    "category": "mens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
    "rating": 4.77
  },
  {
    "id": "dummy-92",
    "source": "dummyjson",
    "title": "Sports Sneakers Off White Red",
    "price": 1979.82,
    "currency": "MXN",
    "category": "mens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
    "rating": 4.69
  },
  {
    "id": "dummy-93",
    "source": "dummyjson",
    "title": "Brown Leather Belt Watch",
    "price": 1619.82,
    "currency": "MXN",
    "category": "mens watches",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
    "rating": 4.19
  },
  {
    "id": "dummy-94",
    "source": "dummyjson",
    "title": "Longines Master Collection",
    "price": 26999.82,
    "currency": "MXN",
    "category": "mens watches",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
    "rating": 3.87
  },
  {
    "id": "dummy-95",
    "source": "dummyjson",
    "title": "Rolex Cellini Date Black Dial",
    "price": 161999.82,
    "currency": "MXN",
    "category": "mens watches",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
    "rating": 4.97
  },
  {
    "id": "dummy-96",
    "source": "dummyjson",
    "title": "Rolex Cellini Moonphase",
    "price": 233999.82,
    "currency": "MXN",
    "category": "mens watches",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
    "rating": 2.58
  },
  {
    "id": "dummy-97",
    "source": "dummyjson",
    "title": "Rolex Datejust",
    "price": 197999.82,
    "currency": "MXN",
    "category": "mens watches",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
    "rating": 3.66
  },
  {
    "id": "dummy-98",
    "source": "dummyjson",
    "title": "Rolex Submariner Watch",
    "price": 251999.82,
    "currency": "MXN",
    "category": "mens watches",
    "images": [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
    "rating": 2.69
  },
  {
    "id": "dummy-177",
    "source": "dummyjson",
    "title": "Black Women's Gown",
    "price": 2339.82,
    "currency": "MXN",
    "category": "womens dresses",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/1.webp",
    "rating": 3.64
  },
  {
    "id": "dummy-178",
    "source": "dummyjson",
    "title": "Corset Leather With Skirt",
    "price": 1619.82,
    "currency": "MXN",
    "category": "womens dresses",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/1.webp",
    "rating": 3.05
  },
  {
    "id": "dummy-179",
    "source": "dummyjson",
    "title": "Corset With Black Skirt",
    "price": 1439.82,
    "currency": "MXN",
    "category": "womens dresses",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp",
    "rating": 4.52
  },
  {
    "id": "dummy-180",
    "source": "dummyjson",
    "title": "Dress Pea",
    "price": 899.82,
    "currency": "MXN",
    "category": "womens dresses",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/1.webp",
    "rating": 4.88
  },
  {
    "id": "dummy-181",
    "source": "dummyjson",
    "title": "Marni Red & Black Suit",
    "price": 3239.82,
    "currency": "MXN",
    "category": "womens dresses",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/1.webp",
    "rating": 4.48
  },
  {
    "id": "dummy-185",
    "source": "dummyjson",
    "title": "Black & Brown Slipper",
    "price": 359.82,
    "currency": "MXN",
    "category": "womens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp",
    "rating": 2.53
  },
  {
    "id": "dummy-186",
    "source": "dummyjson",
    "title": "Calvin Klein Heel Shoes",
    "price": 1439.82,
    "currency": "MXN",
    "category": "womens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/1.webp",
    "rating": 4.92
  },
  {
    "id": "dummy-187",
    "source": "dummyjson",
    "title": "Golden Shoes Woman",
    "price": 899.82,
    "currency": "MXN",
    "category": "womens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/1.webp",
    "rating": 3.26
  },
  {
    "id": "dummy-188",
    "source": "dummyjson",
    "title": "Pampi Shoes",
    "price": 539.82,
    "currency": "MXN",
    "category": "womens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/1.webp",
    "rating": 3.05
  },
  {
    "id": "dummy-189",
    "source": "dummyjson",
    "title": "Red Shoes",
    "price": 629.82,
    "currency": "MXN",
    "category": "womens shoes",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/1.webp",
    "rating": 3.25
  },
  {
    "id": "dummy-172",
    "source": "dummyjson",
    "title": "Blue Women's Handbag",
    "price": 899.82,
    "currency": "MXN",
    "category": "womens bags",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp",
    "rating": 2.92
  },
  {
    "id": "dummy-173",
    "source": "dummyjson",
    "title": "Heshe Women's Leather Bag",
    "price": 2339.82,
    "currency": "MXN",
    "category": "womens bags",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp",
    "rating": 4.92
  },
  {
    "id": "dummy-174",
    "source": "dummyjson",
    "title": "Prada Women Bag",
    "price": 10799.82,
    "currency": "MXN",
    "category": "womens bags",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/1.webp",
    "rating": 2.71
  },
  {
    "id": "dummy-175",
    "source": "dummyjson",
    "title": "White Faux Leather Backpack",
    "price": 719.82,
    "currency": "MXN",
    "category": "womens bags",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/1.webp",
    "rating": 3.36
  },
  {
    "id": "dummy-176",
    "source": "dummyjson",
    "title": "Women Handbag Black",
    "price": 1079.82,
    "currency": "MXN",
    "category": "womens bags",
    "images": [
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp",
    "rating": 2.89
  },
  {
    "id": "platzi-2",
    "source": "platzi",
    "title": "Classic Red Pullover Hoodie",
    "price": 180,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/1twoaDy.jpeg",
      "https://i.imgur.com/FDwQgLy.jpeg",
      "https://i.imgur.com/kg1ZhhH.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/1twoaDy.jpeg",
    "rating": 4.1812009803287875
  },
  {
    "id": "platzi-3",
    "source": "platzi",
    "title": "Classic Heather Gray Hoodie",
    "price": 1242,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/cHddUCu.jpeg",
      "https://i.imgur.com/CFOjAgK.jpeg",
      "https://i.imgur.com/wbIMMme.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/cHddUCu.jpeg",
    "rating": 4.469773969755549
  },
  {
    "id": "platzi-4",
    "source": "platzi",
    "title": "Classic Grey Hooded Sweatshirt",
    "price": 1620,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/R2PN9Wq.jpeg",
      "https://i.imgur.com/IvxMPFr.jpeg",
      "https://i.imgur.com/7eW9nXP.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/R2PN9Wq.jpeg",
    "rating": 4.446967618678911
  },
  {
    "id": "platzi-5",
    "source": "platzi",
    "title": "Classic Black Hooded Sweatshirt",
    "price": 1422,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/cSytoSD.jpeg",
      "https://i.imgur.com/WwKucXb.jpeg",
      "https://i.imgur.com/cE2Dxh9.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/cSytoSD.jpeg",
    "rating": 4.467145143880237
  },
  {
    "id": "platzi-6",
    "source": "platzi",
    "title": "Classic Comfort Fit Joggers",
    "price": 450,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/ZKGofuB.jpeg",
      "https://i.imgur.com/GJi73H0.jpeg",
      "https://i.imgur.com/633Fqrz.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/ZKGofuB.jpeg",
    "rating": 4.913150182107739
  },
  {
    "id": "platzi-7",
    "source": "platzi",
    "title": "Classic Comfort Drawstring Joggers",
    "price": 1422,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/mp3rUty.jpeg",
      "https://i.imgur.com/JQRGIc2.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/mp3rUty.jpeg",
    "rating": 4.410462136974529
  },
  {
    "id": "platzi-8",
    "source": "platzi",
    "title": "Classic Red Jogger Sweatpants",
    "price": 1764,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/9LFjwpI.jpeg",
      "https://i.imgur.com/vzrTgUR.jpeg",
      "https://i.imgur.com/p5NdI6n.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/9LFjwpI.jpeg",
    "rating": 4.6561060134098256
  },
  {
    "id": "platzi-9",
    "source": "platzi",
    "title": "Classic Navy Blue Baseball Cap",
    "price": 1098,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/R3iobJA.jpeg",
      "https://i.imgur.com/Wv2KTsf.jpeg",
      "https://i.imgur.com/76HAxcA.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/R3iobJA.jpeg",
    "rating": 4.330064607140015
  },
  {
    "id": "platzi-10",
    "source": "platzi",
    "title": "Classic Blue Baseball Cap",
    "price": 1548,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/wXuQ7bm.jpeg",
      "https://i.imgur.com/BZrIEmb.jpeg",
      "https://i.imgur.com/KcT6BE0.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/wXuQ7bm.jpeg",
    "rating": 4.766566421698874
  },
  {
    "id": "platzi-11",
    "source": "platzi",
    "title": "Classic Red Baseball Cap",
    "price": 630,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/cBuLvBi.jpeg",
      "https://i.imgur.com/N1GkCIR.jpeg",
      "https://i.imgur.com/kKc9A5p.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/cBuLvBi.jpeg",
    "rating": 4.820596964244514
  },
  {
    "id": "platzi-12",
    "source": "platzi",
    "title": "Classic Black Baseball Cap",
    "price": 1044,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/KeqG6r4.jpeg",
      "https://i.imgur.com/xGQOw3p.jpeg",
      "https://i.imgur.com/oO5OUjb.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/KeqG6r4.jpeg",
    "rating": 4.156112574902889
  },
  {
    "id": "platzi-13",
    "source": "platzi",
    "title": "Classic Olive Chino Shorts",
    "price": 1512,
    "currency": "MXN",
    "category": "Clothes",
    "images": [
      "https://i.imgur.com/UsFIvYs.jpeg",
      "https://i.imgur.com/YIq57b6.jpeg"
    ],
    "thumbnail": "https://i.imgur.com/UsFIvYs.jpeg",
    "rating": 4.689469846615285
  },
  {
    "id": "fake-1",
    "source": "fakestore",
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 1979.1,
    "currency": "MXN",
    "category": "men's clothing",
    "images": [
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": 3.9
  },
  {
    "id": "fake-2",
    "source": "fakestore",
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 401.4,
    "currency": "MXN",
    "category": "men's clothing",
    "images": [
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": 4.1
  },
  {
    "id": "fake-3",
    "source": "fakestore",
    "title": "Mens Cotton Jacket",
    "price": 1007.82,
    "currency": "MXN",
    "category": "men's clothing",
    "images": [
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": 4.7
  },
  {
    "id": "fake-4",
    "source": "fakestore",
    "title": "Mens Casual Slim Fit",
    "price": 287.82,
    "currency": "MXN",
    "category": "men's clothing",
    "images": [
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "rating": 2.1
  },
  {
    "id": "fake-5",
    "source": "fakestore",
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 12510,
    "currency": "MXN",
    "category": "jewelery",
    "images": [
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    "rating": 4.6
  },
  {
    "id": "fake-6",
    "source": "fakestore",
    "title": "Solid Gold Petite Micropave ",
    "price": 3024,
    "currency": "MXN",
    "category": "jewelery",
    "images": [
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    "rating": 3.9
  },
  {
    "id": "fake-7",
    "source": "fakestore",
    "title": "White Gold Plated Princess",
    "price": 179.82,
    "currency": "MXN",
    "category": "jewelery",
    "images": [
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    "rating": 3
  },
  {
    "id": "fake-8",
    "source": "fakestore",
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 197.82,
    "currency": "MXN",
    "category": "jewelery",
    "images": [
      "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    "rating": 1.9
  },
  {
    "id": "fake-15",
    "source": "fakestore",
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 1025.82,
    "currency": "MXN",
    "category": "women's clothing",
    "images": [
      "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    "rating": 2.6
  },
  {
    "id": "fake-16",
    "source": "fakestore",
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 539.1,
    "currency": "MXN",
    "category": "women's clothing",
    "images": [
      "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    "rating": 2.9
  },
  {
    "id": "fake-17",
    "source": "fakestore",
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 719.82,
    "currency": "MXN",
    "category": "women's clothing",
    "images": [
      "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    "rating": 3.8
  },
  {
    "id": "fake-18",
    "source": "fakestore",
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 177.3,
    "currency": "MXN",
    "category": "women's clothing",
    "images": [
      "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    "rating": 4.7
  },
  {
    "id": "fake-19",
    "source": "fakestore",
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 143.1,
    "currency": "MXN",
    "category": "women's clothing",
    "images": [
      "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    "rating": 4.5
  },
  {
    "id": "fake-20",
    "source": "fakestore",
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 233.82,
    "currency": "MXN",
    "category": "women's clothing",
    "images": [
      "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png"
    ],
    "thumbnail": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    "rating": 3.6
  },
  {
    "id": "hombre-1",
    "source": "custom",
    "title": "Camisa Casual Azul Marino",
    "price": 899,
    "currency": "MXN",
    "category": "hombre",
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop",
    "rating": 4.5
  },
  {
    "id": "hombre-2",
    "source": "custom",
    "title": "Jeans Slim Fit Negro",
    "price": 1299,
    "currency": "MXN",
    "category": "hombre",
    "images": [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
    "rating": 4.7
  },
  {
    "id": "hombre-3",
    "source": "custom",
    "title": "Polo Clásico Blanco",
    "price": 649,
    "currency": "MXN",
    "category": "hombre",
    "images": [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop",
    "rating": 4.3
  },
  {
    "id": "hombre-4",
    "source": "custom",
    "title": "Chaqueta de Cuero Marrón",
    "price": 2499,
    "currency": "MXN",
    "category": "hombre",
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
    "rating": 4.8
  },
  {
    "id": "hombre-5",
    "source": "custom",
    "title": "Sudadera Gris Moderna",
    "price": 799,
    "currency": "MXN",
    "category": "hombre",
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
    "rating": 4.4
  },
  {
    "id": "hombre-6",
    "source": "custom",
    "title": "Pantalón Chino Beige",
    "price": 999,
    "currency": "MXN",
    "category": "hombre",
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop",
    "rating": 4.2
  },
  {
    "id": "reloj-1",
    "source": "custom",
    "title": "Reloj Deportivo Negro",
    "price": 1899,
    "currency": "MXN",
    "category": "relojes",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop",
    "rating": 4.6
  },
  {
    "id": "reloj-2",
    "source": "custom",
    "title": "Reloj Clásico Dorado",
    "price": 2499,
    "currency": "MXN",
    "category": "relojes",
    "images": [
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500&h=600&fit=crop",
    "rating": 4.8
  },
  {
    "id": "reloj-3",
    "source": "custom",
    "title": "Smartwatch Moderno",
    "price": 3299,
    "currency": "MXN",
    "category": "relojes",
    "images": [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop",
    "rating": 4.9
  },
  {
    "id": "reloj-4",
    "source": "custom",
    "title": "Reloj Minimalista Plata",
    "price": 1599,
    "currency": "MXN",
    "category": "relojes",
    "images": [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=600&fit=crop",
    "rating": 4.4
  },
  {
    "id": "mujer-1",
    "source": "custom",
    "title": "Vestido Elegante Negro",
    "price": 1599,
    "currency": "MXN",
    "category": "mujer",
    "images": [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
    "rating": 4.7
  },
  {
    "id": "mujer-2",
    "source": "custom",
    "title": "Blusa Blanca Casual",
    "price": 799,
    "currency": "MXN",
    "category": "mujer",
    "images": [
      "https://images.unsplash.com/photo-1564257577-2d5d8b2b8c8b?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1564257577-2d5d8b2b8c8b?w=500&h=600&fit=crop",
    "rating": 4.3
  },
  {
    "id": "mujer-3",
    "source": "custom",
    "title": "Falda Midi Rosa",
    "price": 999,
    "currency": "MXN",
    "category": "mujer",
    "images": [
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=500&h=600&fit=crop",
    "rating": 4.5
  },
  {
    "id": "mujer-4",
    "source": "custom",
    "title": "Jeans Skinny Azul",
    "price": 1299,
    "currency": "MXN",
    "category": "mujer",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop",
    "rating": 4.6
  },
  {
    "id": "ninos-1",
    "source": "custom",
    "title": "Playera Azul Niño",
    "price": 399,
    "currency": "MXN",
    "category": "ninos",
    "images": [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=600&fit=crop",
    "rating": 4.2
  },
  {
    "id": "ninos-2",
    "source": "custom",
    "title": "Pantalón Deportivo Niño",
    "price": 599,
    "currency": "MXN",
    "category": "ninos",
    "images": [
      "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=500&h=600&fit=crop",
    "rating": 4.4
  },
  {
    "id": "ninas-1",
    "source": "custom",
    "title": "Vestido Rosa Niña",
    "price": 699,
    "currency": "MXN",
    "category": "ninas",
    "images": [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&h=600&fit=crop",
    "rating": 4.8
  },
  {
    "id": "ninas-2",
    "source": "custom",
    "title": "Blusa Floral Niña",
    "price": 499,
    "currency": "MXN",
    "category": "ninas",
    "images": [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=600&fit=crop"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=600&fit=crop",
    "rating": 4.6
  }
] as const;

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  image_url: string;
  images: string[];
  rating: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
  is_new: boolean;
  is_on_sale: boolean;
  discount_percent: number;
};

// Transform raw API data to expected format
const transformedProducts = RAW_PRODUCTS.map(product => ({
  id: product.id,
  title: product.title,
  description: product.title,
  price: product.price,
  currency: product.currency,
  category: product.category,
  image_url: product.thumbnail,
  images: product.images,
  rating: product.rating,
  colors: [
    { name: 'Negro', hex: '#000000' },
    { name: 'Blanco', hex: '#FFFFFF' },
    { name: 'Azul', hex: '#3B82F6' }
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  is_new: Math.random() > 0.7,
  is_on_sale: Math.random() > 0.8,
  discount_percent: Math.random() > 0.8 ? Math.floor(Math.random() * 30) + 10 : 0
}));

// Transform category products to expected format
const transformProduct = (product: any, categoryColors: any[]) => ({
  id: product.id,
  title: product.title,
  description: product.title,
  price: product.price,
  currency: 'MXN',
  category: product.category,
  image_url: product.image_url,
  images: [product.image_url],
  rating: product.rating,
  colors: categoryColors,
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  is_new: Math.random() > 0.6,
  is_on_sale: product.is_on_sale,
  discount_percent: product.discount_percent
});

const transformedMujerProducts = MUJER_PRODUCTS.map(p => transformProduct(p, [
  { name: 'Negro', hex: '#000000' },
  { name: 'Blanco', hex: '#FFFFFF' },
  { name: 'Rosa', hex: '#F472B6' }
]));

const transformedHombreProducts = HOMBRE_PRODUCTS.map(p => transformProduct(p, [
  { name: 'Negro', hex: '#000000' },
  { name: 'Azul', hex: '#3B82F6' },
  { name: 'Gris', hex: '#6B7280' }
]));

const transformedNinosProducts = NINOS_PRODUCTS.map(p => transformProduct(p, [
  { name: 'Azul', hex: '#3B82F6' },
  { name: 'Verde', hex: '#10B981' },
  { name: 'Rojo', hex: '#EF4444' }
]));

const transformedNinasProducts = NINAS_PRODUCTS.map(p => transformProduct(p, [
  { name: 'Rosa', hex: '#F472B6' },
  { name: 'Morado', hex: '#A855F7' },
  { name: 'Blanco', hex: '#FFFFFF' }
]));

export const PRODUCTS: Product[] = [
  ...transformedProducts,
  ...transformedMujerProducts,
  ...transformedHombreProducts,
  ...transformedNinosProducts,
  ...transformedNinasProducts
];

export const categories = [
  {
    id: 'hombre',
    name: 'Hombre',
    description: 'Moda masculina moderna',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 'mujer',
    name: 'Mujer',
    description: 'Elegancia femenina',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 'ninos',
    name: 'Niños',
    description: 'Ropa cómoda para niños',
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 'ninas',
    name: 'Niñas',
    description: 'Estilo divertido para niñas',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop&crop=face'
  }
];