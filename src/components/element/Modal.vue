<template>
  <Transition name="fade">
    <section
      v-if="showModal"
      @click="$emit('closeModal')"
      class="bg-black-rgba w-full min-h-full fixed top-0 left-0 z-10"
    >
      <Transition name="fade">
        <div
          class="
            md:px-10
            px-5
            bg-white
            absolute
            top-1/2
            left-1/2
            z-20
            modal
            rounded-lg
          "
          :class="classModal"
          v-if="showModal"
        >
          <slot />
        </div>
      </Transition>
    </section>
  </Transition>
</template>

<script>
export default {
  name: "Modal",
  props: { showModal: Boolean, classModal: String },
  emits: ["closeModal"],
};
</script>

<style scoped>
.modal {
  transform: translateY(-50%) translateX(-50%);
}
.bg-black-rgba {
  background: rgba(0, 0, 0, 0.7);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>