export default {
    title: 'Product',
    name: 'product',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Stripe ID',
            name: 'stripeId',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Main image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor'
        },
        {
            title: 'Slideshow',
            name: 'slideshow',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true // <-- Defaults to false
                    },
                }
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200
            },
            validation: (Rule: any) => Rule.required()
        },
    ],
}
