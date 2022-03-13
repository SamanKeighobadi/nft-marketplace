// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {
    // varibalse
    address payable public immutable feeAccount; // the account that receives fees
    uint256 public immutable feePercent; // the fee percentage on sales
    uint256 public itemCount;

    struct Item {
        uint256 itemId;
        IERC721 nft;
        uint256 tokenId;
        uint256 price;
        address payable seller;
        bool sold;
    }

    mapping(uint256 => Item) public items;
    // Define events
    event Offered(
        uint256 itemId,
        address indexed nft,
        uint256 tokenId,
        uint256 price,
        address indexed seller
    );
    event Bought(
        uint256 itemId,
        address indexed nft,
        uint256 tokenId,
        uint256 price,
        address indexed seller,
        address indexed buyer
    );

    constructor(uint256 _feePercent) {
        feeAccount = payable(msg.sender);
        feePercent = _feePercent;
    }

    function makeItem(
        IERC721 _nft,
        uint256 _tokenId,
        uint256 _price
    ) external nonReentrant {
        require(_price > 0, "must be greater than zero");
        itemCount++;

        _nft.transferFrom(msg.sender, address(this), _tokenId);

        items[itemCount] = Item(
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            false
        );

        // emit  Event
        emit Offered(itemCount, address(_nft), _tokenId, _price, msg.sender);
    }

    function getTotalPrice(uint256 _itemId) public view returns (uint256) {
        return ((items[_itemId].price * (100 + feePercent)) / 100);
    }

    
    function purchaseItem(uint256 _itemId) external payable nonReentrant {
        uint256 _totalPrice = getTotalPrice(_itemId);
        Item storage item = items[_itemId];
        // Conditions
        require(_itemId > 0 && _itemId <= itemCount, "item doesn't exist");
        require(
            msg.value >= _totalPrice,
            "not enough ether to cover item price and market fee"
        );
        require(!item.sold, "item already sold");
        // Payments and transfers
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price);
        // Change the status of the item to sold
        item.sold = true;
        // trnasfer nft to buyer
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);
        // emit event
        emit Bought(_itemId, address(item.nft), item.tokenId, item.price, item.seller, msg.sender);
    }
}
