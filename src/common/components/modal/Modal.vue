<template>
  <transition name="modal" appear>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          
          <div class="modal-header">
            <slot name="header">
            <!-- Header Content Here -->
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>        
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <!-- Footer Content here -->
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      sampleData : false,
    };
  },
  methods : {
    // hideContainer() {
    //   let overlay = document.getElementById('modal_wrapper_body');
    //   let container = document.getElementById('modal_container_body');
    //   console.log(overlay);
    // },
  }
};
</script>

<style lang="scss">

.modal-enter-active,
.modal-leave-active {
    /* transition: opacity; */
  -webkit-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
   -moz-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
     -o-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
        transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); /* easeInOutCirc */

-webkit-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
   -moz-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
     -o-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
        transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); /* easeInOutCirc */
}
.modal-enter,
.modal-leave-to {
  opacity: 0; 
}

</style>