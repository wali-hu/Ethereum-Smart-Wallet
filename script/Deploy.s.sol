// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/SmartWallet.sol";

contract DeploySmartWallet is Script {
    function run() external {
        vm.startBroadcast();
        new SmartWallet();
        vm.stopBroadcast();
    }
}
