<template>
  <v-col cols="12" lg="3" md="4">
    <v-card class="mx-auto" max-width="344">
      <v-img :src="url" height="200px" cover></v-img>

      <v-card-title> {{ title }} </v-card-title>

      <v-card-subtitle>
        {{ disc }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="green darken-1" text @click="dialog = true"> Show </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialog" width="600px">
      <v-card class="mx-auto">
        <v-img :src="url" height="200px" cover></v-img>

        <v-card-title> {{ title }} </v-card-title>

        <v-card-subtitle>
          {{ disc }}
        </v-card-subtitle>

        <template>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(proper, i) in propers" :key="i">
              <v-expansion-panel-header>{{
                proper.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ proper.discription }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import ExcaliburUmbra from "@/components/global/ExcaliburUmbra.vue";
export default {
  props: ["title", "disc", "url", "propers", "info"],
  name: "WarFrames",
  data: () => ({
    show: false,
    hide: false,
    dialog: false,
  }),
  componants: {
    ExcaliburUmbra,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
