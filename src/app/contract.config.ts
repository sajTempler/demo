export const contractAddress = '0xb9bb5ad4fb18026435cfc377802f4529e47cc356';

export const contractAbi = [{
  'constant': true,
  'inputs': [],
  'name': 'readUsersLog',
  'outputs': [{'name': '_addr', 'type': 'address[]'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_addr', 'type': 'address'}],
  'name': 'readUserState',
  'outputs': [{'name': '_name', 'type': 'string'}, {'name': '_state', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_name', 'type': 'string'}, {'name': '_state', 'type': 'uint256'}],
  'name': 'saveUserState',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}];
