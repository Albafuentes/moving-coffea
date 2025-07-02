export enum ProductsCategory {
  COFFEA = "coffea",
  COFFEAMIX = "coffea mix",
  DESSERTS = "desserts",
}

export enum Coffea {
  COFFEASHORT = "coffea short",
  COFFEALARGE = "coffea large",
  COFFEAMILKYSHORT = "coffea milky short",
  COFFEAMIDDLE = "coffea middle",
  COFFEAMILKYLARGE = "coffea milky large",
}
export enum CoffeaMix {
  COFFEACARAMEL = "coffea caramel",
  COFFEACHOCOLATE = "coffea chocolate",
  COFFEASPICYCINAMON = "coffea spicy cinamon",
  MILKYCHAI = "milky chai",
  MILKYMACHA = "milky macha",
  MILKYCHOCOLATE = "milky chocolate",
}
export enum Desserts {
  CARROTSHOT = "carrot shot",
  APPLESHOT = "apple shot",
  ORANGESHOT = "orange shot",
  BANANASHOT = "banana shot",
  SEASONSHOT = "season shot",
}

export type Products = Coffea & CoffeaMix & Desserts;
