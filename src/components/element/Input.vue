<template>
  <div>
    <label class="text-blue-500">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      class="
        w-full
        bg-grey-400
        h-11
        p-2.5
        outline-none
        border-2 border-transparent
        duration-300
        focus:border-green-400
        rounded-md
        mt-1.5
      "
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
</style>