<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <FlexboxLayout justifyContent="center" alignItems="center" @tap="runWorker">
      <Label text="tap Screen to run Worker" style="font-size: 20"> </Label>
    </FlexboxLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
  computed: {
    message() {
      return "Blank {N}-Vue app";
    },
  },
  methods: {
    runWorker() {
      const worker = new Worker("./Worker");
      worker.postMessage("dummy");
      worker.onmessage = function (msg) {
        worker.terminate(); // call this line before call on worker to  Utils.android.getApplicationContext() break app
      };
    },
  },
});
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
