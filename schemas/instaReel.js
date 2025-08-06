const instaReel = {
    name: 'instaReel',
    title: 'Instagram Reel',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'instaLink',
            title: 'Instagram Reel Link',
            type: 'url',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https'],
            }),
        },
        {
            name: 'video',
            title: 'Reel Video',
            type: 'file',
            options: {
                accept: 'video/*',
            },
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'number',
            initialValue: 0,
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Name', type: 'string' },
                        { name: 'comment', title: 'Comment', type: 'string' },
                        { name: 'timestamp', title: 'Timestamp', type: 'datetime' },
                    ],
                },
            ],
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: (new Date()).toISOString(),
            readOnly: true,
        },
    ],
};

export default instaReel;
