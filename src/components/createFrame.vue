<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Create Frame
        </v-btn>
      </template>

      <v-card class="pa-2">
        <v-text-field
          v-model="title"
          label="title"
          placeholder="warframe title"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="url"
          label="url"
          placeholder="warframe url"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="disc"
          label="disc"
          placeholder="warframe disc"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="passive"
          label="passive"
          placeholder="warframe passive"
          outlined
        ></v-text-field>
        <v-combobox
          v-model="abilities"
          :items="items"
          label="abilities"
          multiple
          chips
          counter="4"
        ></v-combobox>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="createFrame">
            Create frame
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      abilities: [],
      title: "",
      url: "",
      disc: "",
      passive: "",
      dialog: false,
    };
  },
  methods: {
    async createFrame() {
      const { title, url, disc, passive, abilities } = this;
      const response = await this.$store.dispatch("createFrame", {
        title,
        url,
        disc,
        passive,
        abilities,
      });
      this.dialog = false;
      console.log(response);
    },
  },
};
</script>
