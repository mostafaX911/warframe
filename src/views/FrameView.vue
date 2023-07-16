<template>
  <v-card class="mx-auto">
    <v-img :src="card.url" height="600px" cover></v-img>

    <v-card-title> {{ card.title }} </v-card-title>

    <v-card-subtitle>
      {{ card.disc }}
    </v-card-subtitle>

    <template>
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(proper, i) in card.propers" :key="i">
          <v-expansion-panel-header>{{
            proper.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ proper.discription }}
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header> card.abilities </v-expansion-panel-header>
          <v-expansion-panel-content class="mt-2">
            <v-row class="">
              <v-col cols="6">
                <h3 class="grey darken-3 white--text">1st Ability</h3>
              </v-col>
              <v-col cols="auto">
                <span class="">{{ card.abilities[0] }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6"
                ><h3 class="grey darken-3 white--text">2nd Ability</h3></v-col
              >
              <v-col cols="auto"
                ><span class="">{{ card.abilities[1] }}</span></v-col
              >
            </v-row>
            <v-row>
              <v-col cols="6"
                ><h3 class="grey darken-3 white--text">3rd Ability</h3></v-col
              >
              <v-col cols="auto"
                ><span class="">{{ card.abilities[2] }}</span></v-col
              >
            </v-row>
            <v-row>
              <v-col cols="6"
                ><h3 class="grey darken-3 white--text">4th Ability</h3></v-col
              >
              <v-col cols="auto"
                ><span class="">{{ card.abilities[3] }}</span></v-col
              >
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => {
    return {
      card: {},
      search: "",
    };
  },
  methods: {
    ...mapActions(["getMonster"]),
    async getMonsterd() {
      const response = await this.getMonster(this.$route.params.id);
      this.card = response.item;
    },
  },
  mounted() {
    this.getMonsterd();
  },
  name: "FrameView",
};
</script>
