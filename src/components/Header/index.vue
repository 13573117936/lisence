<template>
  <header class="header">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>

</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #07bcff;
  font-size: .16rem;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
}
</style>