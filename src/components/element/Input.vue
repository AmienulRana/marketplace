<template>
  <div>
    <label :class="disabled ? 'text-grey-600' : 'text-blue-500'">{{
      label
    }}</label>
    <input
      :type="type"
      :value="modelValue"
      autocomplete="off"
      class="
        w-full
        h-11
        p-2.5
        outline-none
        border-2 border-transparent
        duration-300
        focus:border-green-400
        rounded-md
        mt-1.5
        bg-grey-400
      "
      :class="disabled ? 'text-grey-600' : ''"
      @input="$emit('update:modelValue', $event.target.value, $event)"
      @keydown="$emit('keydown:modelValue', $event.target.value, $event)"
      :disabled="disabled"
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
    disabled: { type: Boolean },
  },
  emits: ["update:modelValue", "keydown:modelValue"],
};
</script>

<style scoped>
</style>