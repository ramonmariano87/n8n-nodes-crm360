import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['sendByPhone'],
	resource: ['message'],
};

export const messageSendByPhoneDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phone',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show },
		placeholder: '5511999887766',
		description: 'Phone number with country code (digits only)',
		routing: { send: { type: 'body', property: 'phone' } },
	},
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'WhatsApp channel ID to send from',
		routing: { send: { type: 'body', property: 'channel_id' } },
	},
	{
		displayName: 'Message Type',
		name: 'messageType',
		type: 'options',
		displayOptions: { show },
		options: [
			{ name: 'Text', value: 'text' },
			{ name: 'Image', value: 'image' },
			{ name: 'Document', value: 'document' },
			{ name: 'Video', value: 'video' },
			{ name: 'Audio', value: 'audio' },
		],
		default: 'text',
		routing: { send: { type: 'body', property: 'type' } },
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: { show },
		description: 'Text content (or caption for media)',
		routing: { send: { type: 'body', property: 'content' } },
	},
	{
		displayName: 'Media URL',
		name: 'mediaUrl',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				...show,
				messageType: ['image', 'document', 'video', 'audio'],
			},
		},
		description: 'Public URL of the media file',
		routing: { send: { type: 'body', property: 'media_url' } },
	},
	{
		displayName: 'Filename',
		name: 'filename',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				...show,
				messageType: ['document'],
			},
		},
		description: 'Filename for the document',
		routing: { send: { type: 'body', property: 'filename' } },
	},
];
