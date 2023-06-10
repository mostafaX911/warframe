<template>
  <div class="home">
    <v-text-field
      outlined
      v-model="search"
      placeholder="search"
      :items="cards"
      item-value="title"
      item-text="title"
    ></v-text-field>
    <v-row>
      <WarFrames
        v-for="card in FilteredCards"
        :key="card.id"
        :title="card.title"
        :disc="card.disc"
        :url="card.url"
        :propers="card.propers"
        :info="card.info"
      />
    </v-row>
  </div>
</template>

<script>
import JasonCards from "../json/cards.json";
// @ is an alias to /src
import WarFrames from "@/components/WarFrames.vue";
export default {
  data: () => {
    return {
      cards: JasonCards,
      search: "",
    };
  },
  computed: {
    FilteredCards: function () {
      const { cards, search } = this;
      if (search) {
        return cards.filter((card) =>
          card.title.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return cards;
      }
    },
  },

  name: "HomeView",
  components: {
    WarFrames,
  },
};
</script>
