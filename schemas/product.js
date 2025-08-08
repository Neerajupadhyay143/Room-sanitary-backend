export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Furniture', value: 'furniture' },
                    { title: 'Worktops', value: 'worktops' },
                    { title: 'Bath Panels', value: 'bath-panels' },
                    { title: 'Sanitaryware', value: 'sanitaryware' },
                    { title: 'Cisterns & Frames', value: 'cisterns' },
                    { title: 'Brassware', value: 'brassware' },
                    { title: 'Concealed Showers', value: 'concealed-showers' },
                    { title: 'LED Mirrors', value: 'led-mirrors' },
                    { title: 'Waste & Accessories', value: 'accessories' },
                ]
            }
        },
        { name: 'description', type: 'text', title: 'Short Description' },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'variants',
            title: 'Variants',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'color', type: 'string', title: 'Color' },
                        { name: 'dimension', type: 'string', title: 'Dimension (LxBxH)' },
                        { name: 'material', type: 'string', title: 'Material' },
                        { name: 'productCode', type: 'string', title: 'Product Code' },
                        { name: 'price', type: 'number', title: 'Price (£)' }
                    ]
                }
            ]
        },
        {
            name: 'specifications',
            title: 'Technical Specs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'value', type: 'string', title: 'Value' }
                    ]
                }
            ]
        },
        {
            name: 'pricing',
            title: 'Pricing',
            type: 'object',
            fields: [
                { name: 'unitPrice', type: 'number', title: 'Unit Price (£)' },
                { name: 'basinPrice', type: 'number', title: 'Basin Price (£)' },
                { name: 'combinedPrice', type: 'number', title: 'Combined Price (£)' },
                { name: 'flushPlatePrice', type: 'number', title: 'Flush Plate Price (£)' }
            ]
        },
        { name: 'guarantee', type: 'string', title: 'Guarantee' },
        { name: 'installationType', type: 'string', title: 'Installation Type' },
        { name: 'material', type: 'string', title: 'Material' },
        { name: 'flushType', type: 'string', title: 'Flush Type' },

        // ✅ Waterproof field added here
        { name: 'waterproof', type: 'boolean', title: '100% Waterproof?' }
    ]
}
