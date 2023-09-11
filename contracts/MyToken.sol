// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {

    string public name = "Dapp Token";
    string public symbol = "DAPP";
    string public standard = "@dapp v 0.0.1";
    uint256 public totalSupply;
    address public ownerOfContract;
    uint256 public _userId;

    address[] public holderToken;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _tokenOwner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => TokenHolderInfo) public tokenHolderInfos;

    struct TokenHolderInfo {
        address _to;
        address _from;
        uint256 _totalToken;
        uint256 _tokenId;
        bool _tokenHolder; // is token holder?
    }

    mapping(address => uint256) public balanceOf;

    mapping(address => mapping(address => uint256)) public allowance;

    constructor (uint256 _initialSupply) {
        ownerOfContract = msg.sender;
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    // Increase User Id
    function inc () public {
        _userId++;
    }

    // Transfer
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Not enough balance");
        inc ();

        balanceOf[msg.sender] -= _value;
        
        balanceOf[_to] += _value;

        TokenHolderInfo storage tokenHolderInfo = tokenHolderInfos[_to];

        tokenHolderInfo._to = _to;
        tokenHolderInfo._from = msg.sender;
        tokenHolderInfo._totalToken = _value;
        tokenHolderInfo._tokenId = _userId;
        tokenHolderInfo._tokenHolder = true;

        holderToken.push(_to);

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    // Transfer From
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from], "Not enough balance");
        require(_value <= allowance[_from][msg.sender], "Not enough allowance");

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }

    // Get Token Holder Data
    function getTokenHolderData(address _address) public view returns (uint256 , address , address , uint256 , bool) {
        return (
            tokenHolderInfos[_address]._tokenId,
            tokenHolderInfos[_address]._from,
            tokenHolderInfos[_address]._to,
            tokenHolderInfos[_address]._totalToken,
            tokenHolderInfos[_address]._tokenHolder
        );
    } 

    // Get Token Holder
    function getTokenHolder() public view returns (address[] memory) {
        return holderToken;
    }
}
