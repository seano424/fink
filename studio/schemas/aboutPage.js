import { MdInsertEmoticon } from 'react-icons/md'

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: MdInsertEmoticon,
  fields: [
    {
      name: 'name',
      title: "Your name or the header you'd like",
      description:
        'This is the about page information. You can add your name, a description, a main image which will show up on the about page, and you can add more images of you and they can be used in other parts of your website.',
      type: 'string',
    },
    {
      name: 'main_image',
      description: 'This is the image that will be seen in your about page.',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'main_image',
    },
  },
}
