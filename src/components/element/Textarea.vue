<template>
  <label class="text-blue-500">{{ label }}</label>
  <textarea
    class="
      w-full
      bg-grey-400
      p-2.5
      outline-none
      border-2 border-transparent
      duration-300
      focus:border-green-400
      rounded-md
      mt-1.5
      resize-none
    "
    rows="4"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
  </textarea>
</template>

<script>
export default {
  name: "Textarea",
  props: { label: String, modelValue: String },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
</style>