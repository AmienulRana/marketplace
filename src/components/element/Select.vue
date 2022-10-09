<template>
  <div>
    <label class="text-blue-500">{{ label }}</label>
    <select
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
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="modelValue === option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    label: String,
    options: [],
    modelValue: String | Boolean,
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
</style>