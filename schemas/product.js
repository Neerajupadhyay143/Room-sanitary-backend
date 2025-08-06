const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'object',
            fields: [
                {
                    name: 'unitPrice',
                    title: 'Unit Price',
                    type: 'number',
                },
                {
                    name: 'basinPrice',
                    title: 'Basin Price',
                    type: 'number',
                },
                {
                    name: 'combinedPrice',
                    title: 'Combined Price',
                    type: 'number',
                    description: 'Sum of Unit and Basin Price (enter manually or calculate in frontend)',
                },
            ],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
    ],
};

export default product;
