import {debounce} from './utils'

export const itemisListerMinin={
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh,200)
    this.itemisLister =()=>{
      refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemisLister)

  },
}
