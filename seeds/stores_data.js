const knex = require("knex")(require("../knexfile"));
async function seedDb() {
  await knex("stores").del();
  await knex("stores").insert([
    {
      id: 1,
      name: "Alchemy Vintage by Stephanian",
      address: "412 College St, Toronto, ON M5T 1T3",
      media: "https://www.instagram.com/alchemyvintage412/",
      categories: JSON.stringify(["Jewelry", "Collectibles", "Home Decor"]),
    },
    {
      id: 2,
      name: "Courage My Love",
      address: "14 Kensington Ave, Toronto, ON M5T 2J7",
      media: "https://www.instagram.com/cececourage/?hl=en",
      categories: JSON.stringify(["Jewelry", "Oddities", "Home Decor"]),
    },
    {
      id: 3,
      name: "Old Times Antiques ",
      address: "607 B Queen Street West , Toronto, ON,  M5V 2B7",
      media:
        "https://www.facebook.com/people/Old-Times-Antiques/100054361668021/",
      categories: JSON.stringify([
        "Jewelry",
        "Home decor",
        "Lighting",
        "China",
      ]),
    },
    {
      id: 4,
      name: "Black Bird Vintage Finds",
      address: "11 Trinity Street, Toronto, Ont. M5A 3C4",
      media: "https://www.blackbirdvintage.com/",
      categories: JSON.stringify(["Jewelry", "Home decor", "Books"]),
    },
    {
      id: 5,
      name: "Suitcase Antiques",
      address: "2009 Dundas St W, Toronto, ON M6R 1W7",
      media: "https://www.suitcaseantiques.com/",
      categories: JSON.stringify([
        "Jewelry",
        "Art",
        "China",
        "Furniture",
        "Lighting",
      ]),
    },
    {
      id: 6,
      name: "Green's Antiques",
      address: "529 Parliament St., Toronto, ON M4X 1P3",
      media: "rowValue1",
      categories: JSON.stringify(["category_name1", "category_name2"]),
    },
    {
      id: 7,
      name: "Vintage & Antiques",
      address: "1462 Kingston Road Toronto, ON M4E 3N9",
      media: "https://www.facebook.com/mdainteriorstoronto/?ref=bookmarks",
      categories: JSON.stringify(["Furniture", "Oddeties", "Art"]),
    },
    {
      id: 8,
      name: "Alexandre Antique",
      address: "593 Mt Pleasant Rd, Toronto, ON M4S 2M5",
      media: "https://www.alexandremaps.com/",
      categories: JSON.stringify(["Maps", "Books", "Prints"]),
    },
    {
      id: 9,
      name: "Mrs Huizenga",
      address: "2906 Dundas St W, Toronto, ON M6P 1Y8",
      media: "https://www.instagram.com/mrs_huizenga",
      categories: JSON.stringify(["Art", "Apparel", "Furniture"]),
    },
    {
      id: 10,
      name: "Old Trunk Antiques",
      address: "28 Roncesvalles Ave, Toronto, ON M6R 2K3",
      media: "https://www.instagram.com/1706oldtrunk/?hl=en",
      categories: JSON.stringify(["Collectibles", "China", "Lighting"]),
    },
    {
      id: 11,
      name: "Bernardi's Antiques",
      address: "699 Mount Pleasant Road, Toronto, ON  M4S 2N4",
      media: "https://bernardisantiques.com/",
      categories: JSON.stringify(["Jewelry", "Lighting", "Art", "Furniture"]),
    },
    {
      id: 12,
      name: "Williams Design",
      address: "387 Keele Street, Toronto ON M6P 2K9",
      media: "https://williamsdesign.ca/?page_id=8472",
      categories: JSON.stringify(["Funiture", "Lighting", "Maps", "Art"]),
    },
    {
      id: 13,
      name: "Era Antiques",
      address: "1629 Queen St W, Toronto, ON M6R 1A9",
      media: "https://www.instagram.com/eraantiques/",
      categories: JSON.stringify(["Lighting", "Furniture", "Art"]),
    },
    {
      id: 14,
      name: "Eclectic Revival",
      address: "3075 Dundas Street West, Toronto, ON, M6P 1Z5",
      media: "https://www.eclecticrevival.com/",
      categories: JSON.stringify(["Lighting"]),
    },
    {
      id: 15,
      name: "Toronto Antiques On King",
      address: "284 King St W, Toronto, ON M5V 1J2",
      media: "https://www.torontoantiquesonking.com/",
      categories: JSON.stringify(["Art", "Furniture"]),
    },
    {
      id: 16,
      name: "Exile Vintage",
      address: "60 Kensington Ave, Toronto, ON M5T 2K1",
      media: "https://exilevintage.ca/",
      categories: JSON.stringify(["Apparel"]),
    },
    {
      id: 17,
      name: "Hideaway",
      address: "95 Ottawa st N, Hamilton, ON L8H 3Z4",
      media: "https://www.hideawayantiques.com/contact",
      categories: JSON.stringify(["Furniture", "Home Decor"]),
    },
    {
      id: 18,
      name: "Abrahams Mirror Plus",
      address: "635 Queen Street West, Toronto, ON M5V 2B7",
      media: "https://abrahamsmirrorplus.com/shop",
      categories: JSON.stringify(["Mirrors", "Home Decor", "Collectibles"]),
    },
    {
      id: 19,
      name: "Second Voyage Vintage",
      address: "264 Queen st E, Toronto, ON, M5A 1S3",
      media: "https://www.secondvoyage.ca/contact-us",
      categories: JSON.stringify([
        "Home Decor",
        "China",
        "Art",
        "Photography, Jewelry",
      ]),
    },
    {
      id: 20,
      name: "Yorkville Antiques",
      address: "160 Davenport Rd, Toronto, ON M5R 1J1",
      media: "https://www.yorkville-antiques.com/",
      categories: JSON.stringify([
        "Home Decor",
        "China",
        "Art",
        "Collectibles",
        "Jewelry",
        "Oddeties",
      ]),
    },
  ]);
  process.exit();
}

seedDb();
