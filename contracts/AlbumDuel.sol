// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract AlbumDuel {
    struct Album {
        uint256 albumIndex;
        string name;
        string imageURI;
        uint256 hp;
        uint256 maxHp;
        uint256 attackDamage;
    }
    Album[] albums;

    constructor(Album[] memory charAtts) {
        for (uint256 i = 0; i < charAtts.length; i += 1) {
            albums.push(charAtts[i]);
            Album memory c = albums[i];
            console.log(
                "Done initializing %s w/ HP %s, img %s",
                c.name,
                c.hp,
                c.imageURI
            );
        }
    }
}
