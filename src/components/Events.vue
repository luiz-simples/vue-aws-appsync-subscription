<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>Total {{events.length}}</h2>
  </div>
</template>

<script>
import listEvents from '@/queries/listEvents'
import oncreateEvent from '@/subscription/oncreateEvent'

export default {
  name: 'Events',

  data () {
    return {
      msg: 'All Events',
      events: []
    }
  },

  apollo: {
    events: {
      query: () => listEvents,
      update: ({listEvents}) => listEvents.items,
      subscribeToMore: [{
        document: oncreateEvent,
        updateQuery: (previous, {subscriptionData: {data: {oncreateEvent}}}) => {
          console.log(oncreateEvent)

          const listEvents = {
            ...previous.listEvents,
            items: [oncreateEvent].concat(previous.listEvents.items)
          }

          return {listEvents}
        }
      }]
    }
  }
}
</script>

<style scoped>
  h1,h2 {font-weight: normal}
</style>
