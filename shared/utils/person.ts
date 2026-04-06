import { definePerson } from 'nuxt-schema-org/schema'
import blogConfig from '../../blog.config'

export const person = definePerson({
  name: blogConfig.author.name,

  image: blogConfig.author.avatar,
  description: 'Student and a programmer.',

  email: blogConfig.author.email,
  url: 'csbig.top',
  sameAs: ['https://twitter.com/chenshuaige998', 'https://github.com/csbigcaptain'],

  jobTitle: 'Student',
  worksFor: {
    type: 'Organization',
    name: 'Shandong University of Technology',
    url: 'www.sdut.edu.cn',
  },
})
