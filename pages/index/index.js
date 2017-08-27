import ComponentA from '../../components/componentA/index'

Page({
  data: {
    id: 'instance 1'
  },
  onLoad(){
    new ComponentA('instance 1')
  }
})
