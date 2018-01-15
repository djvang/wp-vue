/* eslint-disable eol-last */
import Vue from 'vue'
Vue.filter('slugify', (value) => {
  value = value.replace(/^\s+|\s+$/g, '')
  value = value.toLowerCase()
  let from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  let to = 'aaaaaeeeeeiiiiooooouuuunc------'
  for (let i = 0, l = from.length; i < l; i++) {
    value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }
  value = value.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
  return value
})