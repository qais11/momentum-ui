<template>
  <div class='timePicker-container'>
    <md-time-picker
      :selectedTime="new Date('Tue Oct 01 2019 18:19:00 GMT-0500 (Central Daylight Time)')"
      inputId="24hour"
      militaryTime
    />
  </div>
</template>

<script>
export default {
  name: 'ExampleTimePicker24Hour',
};
</script>

