<template>
  <div class="custom-loader">
    <div class="circle-loader">
      <div class="preloader-container">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-gray-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import Loading from './function.vue'
	export default Loading
</script>
