<template>
  <footer class="footer">
    <p>
      <a href="https://prismic.io" target="_blank" rel="noopener">
        <img class="logo" src="../assets/img/prismic-logo.svg" alt="Prismic">
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterPrismic'
}
</script>

<style lang="sass" scoped>
.footer
  max-width: 700px
  padding: 0 
  margin: auto
  color: #9A9A9A
  font-family: 'Lato', sans-serif
  font-size: 16px
  font-style: italic
  text-align: center
  min-height: 20vh
  @media (max-width: 767px)
    padding: 0 20px
  
  p
    border-top: 1px solid #DADADA
    padding: 2rem 0
    margin-bottom: 0

.logo
  width: 100px
</style>
