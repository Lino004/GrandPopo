<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Page Vitrine</h3>
            <div>
              <router-link
                :to="{name: 'home'}"
                class="subtitle has-text-grey">
                Cliquez ici pour resoindre l'accueil
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'vitrine',
  components: {}
}
</script>
