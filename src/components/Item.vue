<template>
   <a :href="item.html_url" class="list-group-item list-group-item-action flex-column align-items-start">
       <span class="badge badge-default badge-pill">{{item.watchers_count }}</span>
      <div class="d-flex w-100 justify-content-between">
        <h3 class="mb-1">{{ item.full_name}}</h3>
        <small class="text-muted">{{ item.pushed_at }}</small>
      </div>
      <p class="mb-1">{{item.description}}</p>
      <small class="text-muted">Donec id elit non mi porta.</small>
    </a>
</template>

<script>
export default {
  name: 'Item',
  props: ['item']
}
</script>
<style lang="">
  
</style>