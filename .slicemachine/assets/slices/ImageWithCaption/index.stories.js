import MyComponent from '../../../../slices/ImageWithCaption';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageWithCaption'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_with_caption","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Velit reprehenderit velit officia eu ut ipsum qui elit consequat.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _FullWidthImage = () => ({
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
      mock: {"variation":"fullWidthImage","name":"Full Width Image","slice_type":"image_with_caption","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Laborum sint ipsum culpa ipsum sit quis do esse. Duis aute sunt reprehenderit cupidatat ex cillum qui nostrud. Et irure id cillum voluptate incididunt.","spans":[]}]},"id":"_FullWidthImage"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullWidthImage.storyName = 'Full Width Image'
