import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    product: {},
  }),

  actions: {
    async useProductsList() {
      try {
        const response = await fetch("/api/prisma/get-all-products");
        const data = await response.json();
        this.products = data;
        console.log(this.products, "products in store");
      } catch (error) {
        console.log(error, "errorr fetching products");
        return error;
      }
    },
    async useProduct(id) {
      try {
        const response = await fetch(
          `/api/prisma/get-product-by-id/${id}`
        );
        const data = await response.json();
        this.product = data;
      } catch (error) {
        console.log(error, "errorr fetching product");
        return error;
      }
    },
  },
});
