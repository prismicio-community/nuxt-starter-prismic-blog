import MyComponent from '../../../../slices/Text';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Text'
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
      mock: {"variation":"default","name":"Default","slice_type":"text","items":[],"primary":{"title":[{"type":"heading1","text":"Expedite distributed initiatives","spans":[]}],"description":[{"type":"paragraph","text":"Quis sunt voluptate eiusmod enim exercitation irure quis consectetur eiusmod excepteur cupidatat nulla laborum dolore qui. Elit labore minim velit.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
