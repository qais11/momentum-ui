<template>
  <md-accordion @select="onSelect">
    <md-accordion-group>
      <md-accordion-header>
        <div>Accordion 1</div>
      </md-accordion-header>
      <md-accordion-content>
        <md-list-item label="Content 1" />
      </md-accordion-content>
    </md-accordion-group>
    <md-accordion-group>
      <md-accordion-header>
        <div>Accordion 2</div>
      </md-accordion-header>
      <md-accordion-content>
        <md-list-item label="Content 2" />
      </md-accordion-content>
    </md-accordion-group>
  </md-accordion>
</template>

<script>
export default {
  name: 'ExampleAccordionDefault',

  methods: {
    onSelect(newIndex, lastIndex) {}
  },
};
</script>

