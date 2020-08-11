import { INodeProperties } from 'n8n-workflow';

export const customerOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a customer.',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a customer.',
            },
            {
				name: 'Update',
				value: 'update',
				description: 'Update a customer.',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const customerFields = [

/* -------------------------------------------------------------------------- */
/*                                   customer:create/update/delete            */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
				operation: [
					'create', 'update', 'delete'
				]
			},
		},
		description: 'The unique identifier for the customer.',
    },
    {
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
				operation: [
					'create', 'update'
				]
			},
		},
		description: 'The email address of the user.',
    },
    {
		displayName: 'Created at',
		name: 'createdAt',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
				operation: [
					'create', 'update'
				]
			},
		},
		description: 'The UNIX timestamp from when the user was created.',
    },
    {
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		type: 'boolean',
		default: false,
		description: '',
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
				operation: [
					'create', 'update'
				],
			},
		},
	},
	{
		displayName: ' Additional Fields',
		name: 'additionalFieldsJson',
		type: 'json',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
				operation: [
					'create', 'update'
				],
				jsonParameters: [
					true,
				],
			},
		},
		description: 'Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-companys---companies-api" target="_blank">here</a>.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
				operation: [
					'create', 'update'
				],
				jsonParameters: [
					false,
				],
			},
		},
		options: [
			{
				displayName: 'Custom Properties',
				name: 'customProperties',
				type: 'fixedCollection',
				description: 'Custom Properties',
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						displayName: 'Property',
						name: 'customProperty',
						values: [
							{
								displayName: 'Key',
								name: 'key',
								type: 'string',
								required: true,
								default: '',
                                description: 'Property name.',
                                placeholder: 'Plan'
							},

							{
								displayName: 'Value',
								name: 'value',
                                type: 'string',
                                required: true,
								default: '',
                                description: 'Property value.',
                                placeholder: 'Basic'
							},
						],
					},
				]
			},
		],
	},
] as INodeProperties[];
