<template>

</template>

<script>
export default {
  name: "tutorial-list.component",
  data() {
    return {
      tutorials: [],
      tutorialDialog: false,
      deleteTutorialDialog: false,
      deleteTutorialsDialog: false,
      tutorial: {},
      selectedTutorials: null,
      filters: {},
      submitted: false,
      statuses: [
        { label: 'Published', value: 'published'},
        { label: 'Unpublished', value: 'unpublished'}
      ],
      tutorialsService: null
    };
  },
  created() {

  },
  methods: {
    getDisplayableTutorial(tutorial) {
      tutorial.status = tutorial.published ?
          this.statuses[0].label :
          this.statuses[1].label;
      return tutorial;
    },

    getStorableTutorial(displayableTutorial) {
      return {
        id: displayableTutorial.id,
        title: displayableTutorial.title,
        description: displayableTutorial.description,
        published: displayableTutorial.status.label === 'Published',
      };
    },

    openNew() {
      this.tutorial = {};
      this.submitted = false;
      this.tutorialDialog = true;
    },

    hideDialog() {
      this.tutorialDialog = false;
      this.submitted = false;
    },

    findIndexById(id) {
      console.log(`current id: ${id}`);
      return this.tutorials.findIndex((tutorial) => tutorial.id === id);
    }
  }
}
</script>

<style scoped>

</style>
