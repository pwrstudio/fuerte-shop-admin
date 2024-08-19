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
            title: "Price",
            name: "price",
            type: "number",
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Weight (in grams)',
            name: 'weight',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Product has variants",
            name: "productHasVariants",
            type: "boolean"
        },
        {
            title: 'Stripe ID',
            name: 'stripeId',
            type: 'string',
            hidden: ({ document }) => document?.productHasVariants,
            validation: (Rule: any) => Rule.custom((value, { document: { productHasVariants } }) => {
                return !productHasVariants && !value ? "Field required" : true
            })
        },
        {
            title: "Coming soon",
            name: "comingSoon",
            type: "boolean",
        },
        {
            title: "Out of stock",
            name: "outOfStock",
            type: "boolean",
            hidden: ({ document }) => document?.productHasVariants,
        },
        {
            title: "Product variants legend",
            name: "productVariantsLegend",
            type: "string",
            hidden: ({ document }) => !document?.productHasVariants,
        },
        {
            title: "Product variants",
            name: "productVariants",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            title: "Title",
                            name: "label",
                            type: "string"
                        },
                        {
                            title: "Stripe ID",
                            name: "value",
                            type: "string",
                            validation: (Rule: any) => Rule.custom((value, { document: { productHasVariants } }) => {
                                return productHasVariants && !value ? "Field required" : true
                            })
                        },
                        {
                            title: "Out of stock",
                            name: "outOfStock",
                            type: "boolean"
                        },
                    ],
                    preview: {
                        select: {
                            title: "label",
                            outOfStock: "outOfStock"
                        },
                        prepare({ title, outOfStock }) {
                            return {
                                title: title,
                                subtitle: outOfStock ? "Out of stock" : ""
                            }
                        }

                    }
                }
            ],
            hidden: ({ document }) => !document?.productHasVariants
        },
        // {
        //     title: "Shipping rates",
        //     name: "shippingRates",
        //     type: "array",
        //     of: [
        //         {
        //             type: "object",
        //             fields: [
        //                 {
        //                     title: "Title",
        //                     name: "title",
        //                     type: "string"
        //                 },
        //                 {
        //                     title: "Price",
        //                     name: "price",
        //                     type: "number"
        //                 },
        //                 {
        //                     title: "Estimated delivery time in days (minimum)",
        //                     name: "estimatedDeliveryTimeMin",
        //                     type: "number"
        //                 },
        //                 {
        //                     title: "Estimated delivery time in days (maximum)",
        //                     name: "estimatedDeliveryTimeMax",
        //                     type: "number"
        //                 }
        //             ]
        //         }
        //     ]
        // },
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
                        hotspot: true
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
    preview: {
        select: {
            title: "title",
            image: "mainImage",
            outOfStock: "outOfStock",
            comingSoon: "comingSoon"
        },
        prepare({ title, image, outOfStock, comingSoon }) {
            const subtitle = comingSoon ? "Coming soon" : outOfStock ? "Out of stock" : "In stock"
            return {
                title: title,
                media: image,
                subtitle: subtitle
            }
        }

    }
}
