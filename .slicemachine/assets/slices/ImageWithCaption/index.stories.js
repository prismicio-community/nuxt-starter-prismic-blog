import MyComponent from '../../../../slices/ImageWithCaption';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageWithCaption'
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
      mock: {"variation":"default","name":"Default","slice_type":"image_with_caption","items":[],"primary":{"title":[{"type":"heading1","text":"Implement visionary synergies","spans":[]}],"description":[{"type":"paragraph","text":"Velit enim officia velit dolore. Nostrud pariatur dolore adipisicing magna consectetur officia dolor. Ut nulla nisi quis minim non amet adipisicing excepteur velit eu mollit commodo in mollit elit.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
