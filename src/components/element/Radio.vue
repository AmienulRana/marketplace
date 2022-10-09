<template>
  <label class="flex items-center my-3.5 relative cursor-pointer" :for="id">
    <input
      type="radio"
      :value="modelValue"
      name="status"
      class="opacity-0 absolute top-0"
      :id="id"
      @change="$emit('change', e.target.value)"
      :checked="checked"
    />
    <div
      class="
        w-3
        h-3
        rounded-full
        outline outline-offset-3
        mr-2.5
        box-border
        duration-100
        ease-in
      "
    ></div>
    <span class="value">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "Radio",
  props: {
    label: { type: String, required: true },
    id: String,
    checked: Boolean,
  },
  emits: ["change"],
};
</script>

<style scoped>
.outline {
  outline: 1px solid #a3a3a3;
}
.outline-offset-3 {
  outline-offset: 3px;
}
input[type="radio"]:checked ~ .w-3 {
  background: #29a867;
}

input[type="radio"]:checked ~ .value {
  color: #29a867;
}
</style>