<template>
  <div class="single-project">
    <project-hero></project-hero>
    <project-info></project-info>
    <project-concept></project-concept>
    <project-experience></project-experience>
    <project-gallery></project-gallery>
    <project-summarize></project-summarize>
    <project-adjacent></project-adjacent>
  </div>
</template>

<script>
  import ProjectHero from "./project/projectHero";
  import ProjectInfo from "./project/projectInfo";
  import ProjectConcept from "./project/projectConcept";
  import ProjectExperience from "./project/projectExperience";
  import ProjectGallery from "./project/projectGallery";
  import ProjectSummarize from "./project/projectSummarize";
  import ProjectAdjacent from "./project/projectAdjacent";

  export default {
    name: "singlePortfolio",
    components: {
      ProjectAdjacent,
      ProjectSummarize, ProjectGallery, ProjectExperience, ProjectConcept, ProjectInfo, ProjectHero}
  }
</script>

<style scoped>

</style>
