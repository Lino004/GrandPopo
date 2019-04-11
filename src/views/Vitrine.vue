<template>
  <div>
    <section>
      <h3 class="title has-text-info">Page Vitrine</h3>
      <a>
        <router-link
          :to="{name: 'home'}"
          class="subtitle has-text-black">
          Cliquez ici pour resoindre l'accueil
        </router-link>
      </a>
    </section>
  </div>
</template>

<script>

export default {
  name: 'vitrine',
  components: {}
}
</script>
