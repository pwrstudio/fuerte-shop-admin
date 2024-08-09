export default {
    title: 'Landing page',
    name: 'landingPage',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Products',
            name: 'products',
            type: 'array',
            of: [{
                title: 'Product',
                type: 'object',
                fields: [
                    {
                        title: 'Size',
                        name: 'size',
                        type: 'string',
                        options: {
                            list: [{
                                title: 'Full',
                                value: 'full'
                            }, {
                                title: 'Half',
                                value: 'half'
                            }, {
                                title: 'Third',
                                value: 'third'
                            }],
                        }
                    },
                    {
                        title: 'Product',
                        name: 'product',
                        type: 'reference',
                        to: [{ type: 'product' }]
                    }
                ],
                preview: {
                    select: {
                        title: 'product.title',
                        size: 'size',
                        image: 'product.mainImage'
                    },
                    prepare(selection: any) {
                        const { title, size, image } = selection
                        return {
                            title: title,
                            subtitle: size,
                            media: image
                        }
                    }
                }
            }]
        },
    ],
}
