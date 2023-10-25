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
      } catch (error) {
        console.log(error, "errorr fetching products");
        return error;
      }
    },
  },
});
