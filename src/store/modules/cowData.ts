import { defineStore } from "pinia";
import { cowData } from "@/http/api";

export const useCowDataStore = defineStore("cowData", {
  state: () => ({
    cowData: [],
  }),
  getters: {
    cowDataValue: (state) =>
      state.cowData.map((el: { name: string }) => el.name),
  },
  actions: {
    async getCowData() {
      return await cowData
        .post("/")
        .then((cowData) => (this.cowData = cowData.data.results));
    },
  },
});
