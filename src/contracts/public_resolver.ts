import { Contract } from '@/contract'
export const PUBLIC_RESOLVER: Contract = {
	name: 'Public Resolver',
	address: '0x507eb5107c59a2b5af923c38e83af8d59443b62d',
	abi: [
		{
			inputs: [],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'InvalidContentType',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'contentType',
					type: 'uint256',
				},
			],
			name: 'ABIChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'AddrChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: 'approved',
					type: 'bool',
				},
			],
			name: 'ApprovalForAll',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'delegate',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'bool',
					name: 'approved',
					type: 'bool',
				},
			],
			name: 'Approved',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'hash',
					type: 'bytes',
				},
			],
			name: 'ContentHashChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'name',
					type: 'bytes',
				},
				{
					indexed: false,
					internalType: 'uint16',
					name: 'resource',
					type: 'uint16',
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'record',
					type: 'bytes',
				},
			],
			name: 'DNSRecordChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'name',
					type: 'bytes',
				},
				{
					indexed: false,
					internalType: 'uint16',
					name: 'resource',
					type: 'uint16',
				},
			],
			name: 'DNSRecordDeleted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'lastzonehash',
					type: 'bytes',
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'zonehash',
					type: 'bytes',
				},
			],
			name: 'DNSZonehashChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint8',
					name: 'version',
					type: 'uint8',
				},
			],
			name: 'Initialized',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes4',
					name: 'interfaceID',
					type: 'bytes4',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'implementer',
					type: 'address',
				},
			],
			name: 'InterfaceChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'name',
					type: 'string',
				},
			],
			name: 'NameChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'bytes32',
					name: 'x',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'bytes32',
					name: 'y',
					type: 'bytes32',
				},
			],
			name: 'PubkeyChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'string',
					name: 'indexedKey',
					type: 'string',
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'key',
					type: 'string',
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'value',
					type: 'string',
				},
			],
			name: 'TextChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'uint64',
					name: 'newVersion',
					type: 'uint64',
				},
			],
			name: 'VersionChanged',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'contentTypes',
					type: 'uint256',
				},
			],
			name: 'ABI',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
			],
			name: 'addr',
			outputs: [
				{
					internalType: 'address payable',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
			],
			name: 'clearRecords',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
			],
			name: 'contentHash',
			outputs: [
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes32',
					name: 'name',
					type: 'bytes32',
				},
				{
					internalType: 'uint16',
					name: 'resource',
					type: 'uint16',
				},
			],
			name: 'dnsRecord',
			outputs: [
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getRNSUnified',
			outputs: [
				{
					internalType: 'contract INSUnified',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getReverseRegistrar',
			outputs: [
				{
					internalType: 'contract INSReverseRegistrar',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes32',
					name: 'name',
					type: 'bytes32',
				},
			],
			name: 'hasDNSRecords',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract INSUnified',
					name: 'rnsUnified',
					type: 'address',
				},
				{
					internalType: 'contract INSReverseRegistrar',
					name: 'reverseRegistrar',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes4',
					name: 'interfaceID',
					type: 'bytes4',
				},
			],
			name: 'interfaceImplementer',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'isAuthorized',
			outputs: [
				{
					internalType: 'bool',
					name: 'authorized',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes[]',
					name: 'data',
					type: 'bytes[]',
				},
			],
			name: 'multicall',
			outputs: [
				{
					internalType: 'bytes[]',
					name: 'results',
					type: 'bytes[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes[]',
					name: 'data',
					type: 'bytes[]',
				},
			],
			name: 'multicallWithNodeCheck',
			outputs: [
				{
					internalType: 'bytes[]',
					name: 'results',
					type: 'bytes[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
			],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
			],
			name: 'pubkey',
			outputs: [
				{
					internalType: 'bytes32',
					name: 'x',
					type: 'bytes32',
				},
				{
					internalType: 'bytes32',
					name: 'y',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
			],
			name: 'recordVersions',
			outputs: [
				{
					internalType: 'uint64',
					name: '',
					type: 'uint64',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'contentType',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'data',
					type: 'bytes',
				},
			],
			name: 'setABI',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'addr_',
					type: 'address',
				},
			],
			name: 'setAddr',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes',
					name: 'hash',
					type: 'bytes',
				},
			],
			name: 'setContentHash',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes',
					name: 'data',
					type: 'bytes',
				},
			],
			name: 'setDNSRecords',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes4',
					name: 'interfaceID',
					type: 'bytes4',
				},
				{
					internalType: 'address',
					name: 'implementer',
					type: 'address',
				},
			],
			name: 'setInterface',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'string',
					name: 'newName',
					type: 'string',
				},
			],
			name: 'setName',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes32',
					name: 'x',
					type: 'bytes32',
				},
				{
					internalType: 'bytes32',
					name: 'y',
					type: 'bytes32',
				},
			],
			name: 'setPubkey',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'string',
					name: 'key',
					type: 'string',
				},
				{
					internalType: 'string',
					name: 'value',
					type: 'string',
				},
			],
			name: 'setText',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'bytes',
					name: 'hash',
					type: 'bytes',
				},
			],
			name: 'setZonehash',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'interfaceID',
					type: 'bytes4',
				},
			],
			name: 'supportsInterface',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
				{
					internalType: 'string',
					name: 'key',
					type: 'string',
				},
			],
			name: 'text',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bool',
					name: 'requireSuccess',
					type: 'bool',
				},
				{
					internalType: 'bytes[]',
					name: 'data',
					type: 'bytes[]',
				},
			],
			name: 'tryMulticall',
			outputs: [
				{
					internalType: 'bytes[]',
					name: 'results',
					type: 'bytes[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'node',
					type: 'bytes32',
				},
			],
			name: 'zonehash',
			outputs: [
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
	],
}
