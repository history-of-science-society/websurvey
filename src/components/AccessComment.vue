<template>
  <section>
    <b-tabs v-model="activeTab" :multiline="multiline">
      <template
        v-for="(tab, index) in $static.data.edges[0].node.accessibilityComment"
      >
        <b-tab-item :key="index" :label="(index + 1).toString()">
          <div class="content">
            <p>
              {{ tab }}
            </p>
          </div>
        </b-tab-item>
      </template>
    </b-tabs>
  </section>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        accessibilityComment 
        }
      }
    }
  }

</static-query>

<script>
export default {
  data() {
    return {
      activeTab: 0,

      multiline: true
    };
  }
};
</script>
