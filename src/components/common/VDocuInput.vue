<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="form-input"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: ["value", "type", "placeholder"]

}
</script>

<style></style>
