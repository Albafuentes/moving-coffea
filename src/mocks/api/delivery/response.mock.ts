import type { DeliveryModel } from "@/types/delivery/model.type";
import { Coffea, CoffeaMix, Desserts, ProductsCategory } from "@/types/products.types";

export const response: DeliveryModel.Item[] = [
  {
    productId: "a0b859d6-2673-4257-9e49-c2228fe1539c",
    productName: Coffea.COFFEASHORT,
    productDescription: "Pure coffee essence, crafted by extracting the richest flavors in a single shot, delivering a bold and intense aroma that awakens the senses.",
    productPrice: 1.50,
    productCategory: ProductsCategory.COFFEA,
    productImageUrl: "#",

    discount: false
  }, {
    productId: "3a834323-5466-4bf6-aff7-3ec69caf66b8",
    productName: Coffea.COFFEALARGE,
    productDescription: "An extended shot of pure coffee, slowly extracted to unveil deeper, more complex aromas and a smooth, lingering intensity.",
    productPrice: 2.00,
    productCategory: ProductsCategory.COFFEA,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "b535a1a7-6504-4f6d-a7bd-b80506223435",
    productName: Coffea.COFFEAMILKYSHORT,
    productDescription: "An extended pour of rich coffee with just a touch of milk, designed to amplify the coffee’s depth while softening its intensity with a light creaminess.",
    productPrice: 2.10,
    productCategory: ProductsCategory.COFFEA,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "c72a7114-9b17-461a-9fb5-a2d91b1f3bb7",
    productName: Coffea.COFFEAMIDDLE,
    productDescription: "Half coffee, half milk, made by aerating the coffee at a stable temperature to bring out the fullest aroma.",
    productPrice: 2.25,
    productCategory: ProductsCategory.COFFEA,
    productImageUrl: "#",
    productStock: 25,
    discount: true
  }, {
    productId: "681f7871-a391-45f2-8485-195259b5ff25",
    productName: Coffea.COFFEAMILKYLARGE,
    productDescription: "A gentle blend of steamed milk and a smooth pour of coffee, balanced to create a creamy and mellow experience with a subtle coffee aroma.",
    productPrice: 2.25,
    productCategory: ProductsCategory.COFFEA,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "1187c730-c363-4f7d-8fd7-35ca7713bf8a",
    productName: CoffeaMix.COFFEACARAMEL,
    productDescription: "A luscious blend of rich coffee and velvety caramel, where the sweetness melts into the boldness, creating a warm and indulgent aroma that lingers.",
    productPrice: 2.55,
    productCategory: ProductsCategory.COFFEAMIX,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "aef7debc-58da-4596-a4ff-e336f781f54b",
    productName: CoffeaMix.COFFEACHOCOLATE,
    productDescription: "Deep coffee notes harmonized with smooth, melted chocolate, crafting a decadent and comforting flavor that enchants the palate.",
    productPrice: 2.55,
    productCategory: ProductsCategory.COFFEAMIX,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "19c6d2ee-6e21-4a31-88dc-4c82ce5e2850",
    productName: CoffeaMix.COFFEASPICYCINAMON,
    productDescription: "Spiced with a whisper of cinnamon, this coffee reveals a cozy warmth and aromatic complexity, elevating each sip with subtle sweetness and spice.",
    productPrice: 2.55,
    productCategory: ProductsCategory.COFFEAMIX,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "fb497f19-cb9c-4491-8c76-c3362ceb5f4b",
    productName: CoffeaMix.MILKYCHAI,
    productDescription: "A fragrant fusion of spiced black tea and creamy steamed milk, infused with cinnamon, cardamom, and cloves, delivering a soothing and exotic aroma.",
    productPrice: 2.75,
    productCategory: ProductsCategory.COFFEAMIX,
    productImageUrl: "#",
    productStock: 70,
    discount: true,
  }, {
    productId: "47a83978-601c-4a14-91ba-4a2b1df8c720",
    productName: CoffeaMix.MILKYMACHA,
    productDescription: "Vibrant green matcha whisked to perfection, combining earthy vegetal notes with a creamy texture that refreshes and energizes.",
    productPrice: 2.75,
    productCategory: ProductsCategory.COFFEAMIX,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "0aa072fb-fd7e-44cc-90a7-924bf8773e7f",
    productName: CoffeaMix.MILKYCHOCOLATE,
    productDescription: "Silky milk blended with rich chocolate, creating a smooth, sweet embrace that comforts with every velvety sip.",
    productPrice: 2.10,
    productCategory: ProductsCategory.COFFEAMIX,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "67c44d13-e32a-4c39-8362-085a0d9f7ae2",
    productName: Desserts.APPLESHOT,
    productDescription: "A tender cake infused with juicy apple pieces and a touch of cinnamon, evoking cozy memories with each fragrant, flavorful slice.",
    productPrice: 4.25,
    productCategory: ProductsCategory.DESSERTS,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "51cc1e08-d5e9-4b1c-8d6c-3fbb515ef52c",
    productName: Desserts.BANANASHOT,
    productDescription: "Moist and naturally sweet, this banana cake offers a comforting warmth with soft textures and delicate fruity undertones, perfect for every occasion.",
    productPrice: 4.25,
    productCategory: ProductsCategory.DESSERTS,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "ff661624-fa30-4075-a195-9f6ec497b949",
    productName: Desserts.CARROTSHOT,
    productDescription: "Rich and spiced, this carrot cake blends earthy sweetness with hints of cinnamon and nutmeg, enveloped in a creamy frosting that melts smoothly.",
    productPrice: 4.25,
    productCategory: ProductsCategory.DESSERTS,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "850fe403-f032-4f24-9ecd-84f181227957",
    productName: Desserts.ORANGESHOT,
    productDescription: "Zesty and bright, this orange-infused cake bursts with citrus aroma and a tender crumb, delivering a refreshing sweetness balanced by subtle tang.",
    productPrice: 4.25,
    productCategory: ProductsCategory.DESSERTS,
    productImageUrl: "#",
    discount: false
  }, {
    productId: "38137371-dde1-47f5-a809-a6464ffed0c5",
    productName: Desserts.SEASONSHOT,
    productDescription: "A celebration of the season’s freshest flavors, this cake combines rustic warmth with vibrant notes, crafted to delight with every moist, flavorful bite.",
    productPrice: 3.45,
    productCategory: ProductsCategory.DESSERTS,
    productImageUrl: "#",
    discount: true,
    productStock: 10
  },
];
