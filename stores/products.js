import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
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
  },
});
