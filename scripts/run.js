const hre = require('hardhat');

const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('AlbumDuel');
    const gameContract = await gameContractFactory.deploy();
    await gameContract.deployed();
    console.log(`contract deployed to: ${gameContract.address}`);
};

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();