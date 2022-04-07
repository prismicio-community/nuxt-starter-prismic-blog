import MyComponent from '../../../../slices/Quote';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Quote'
}


export const _DefaultSlice = () => ({
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quote","items":[],"primary":{"quote":[{"type":"paragraph","text":"Ad tempor dolore nisi minim laborum laborum. Id tempor Lorem nisi adipisicing commodo nisi nisi. Fugiat non sint do Lorem ullamco consectetur occaecat proident aliquip ullamco et ullamco excepteur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
