import Loadable from 'react-loadable'
import Loading from './loading'

/**
 * 异步引入组件
 */
export default (componentName) => {
  return Loadable({
    loader: () => {
      return import(/* webpackChunkName: '[request]' */ `../container/${componentName}.js`)
        .then(object => object.default)
    },
    loading: Loading,
  })
}
