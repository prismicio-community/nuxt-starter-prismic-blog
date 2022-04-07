import MyComponent from '../../../../slices/Quote';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Quote'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"quote","items":[],"primary":{"title":[{"type":"heading1","text":"Envisioneer magnetic partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Nostrud minim aliquip laborum adipisicing non cillum anim enim anim. Anim pariatur consectetur fugiat cillum.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
