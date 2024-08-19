export default {
    title: 'Region',
    name: 'region',
    type: 'document',
    fields: [
        {
            title: 'Region name',
            name: 'regionName',
            type: 'string',
            readOnly: true,
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Estimated delivery time in days (minimum)",
            name: "estimatedDeliveryTimeMin",
            type: "number",
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Estimated delivery time in days (maximum)",
            name: "estimatedDeliveryTimeMax",
            type: "number",
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Up to 0.5 kg',
            description: 'Price in USD',
            name: 'to500',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: '0.5 kg to 1 kg',
            description: 'Price in USD',
            name: 'to1000',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: '1 kg to 1.5 kg',
            description: 'Price in USD',
            name: 'to1500',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: '1.5 kg to 2 kg',
            description: 'Price in USD',
            name: 'to2000',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Over 2 kg',
            description: 'Price in USD',
            name: 'max',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        },
    ]
}
