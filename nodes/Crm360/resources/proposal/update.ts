import type { INodeProperties } from 'n8n-workflow';

const show = {
	operation: ['update'],
	resource: ['proposal'],
};

export const proposalUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Proposal ID',
		name: 'proposalId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show },
		description: 'The ID of the proposal to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: { show },
		default: {},
		options: [
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'title' } },
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'subject' } },
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Draft', value: 'draft' },
					{ name: 'Sent', value: 'sent' },
					{ name: 'Accepted', value: 'accepted' },
					{ name: 'Rejected', value: 'rejected' },
					{ name: 'Expired', value: 'expired' },
				],
				default: 'draft',
				routing: { send: { type: 'body', property: 'status' } },
			},
			{
				displayName: 'Contact ID',
				name: 'contact_id',
				type: 'number',
				default: 0,
				routing: { send: { type: 'body', property: 'contact_id' } },
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'number',
				default: 0,
				routing: { send: { type: 'body', property: 'deal_id' } },
			},
			{
				displayName: 'Valid Until',
				name: 'valid_until',
				type: 'dateTime',
				default: '',
				routing: { send: { type: 'body', property: 'valid_until' } },
			},
			{
				displayName: 'Discount Amount',
				name: 'discount_amount',
				type: 'number',
				default: 0,
				routing: { send: { type: 'body', property: 'discount_amount' } },
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: { rows: 5 },
				default: '',
				routing: { send: { type: 'body', property: 'content' } },
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: { rows: 3 },
				default: '',
				routing: { send: { type: 'body', property: 'notes' } },
			},
			{
				displayName: 'Terms',
				name: 'terms',
				type: 'string',
				typeOptions: { rows: 3 },
				default: '',
				routing: { send: { type: 'body', property: 'terms' } },
			},
		],
	},
];
