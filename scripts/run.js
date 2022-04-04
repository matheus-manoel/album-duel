const hre = require('hardhat');

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('AlbumDuel');
  const gameContract = await gameContractFactory.deploy(
    [
        [0, "The Dark Side of The Moon", "https://ipfs.io/ipfs/QmV5HAwkiXFXWo4wiqwCJ4LjoNb74dGrWKKTzCmCM9qmu9?filename=dark.jpg", 100, 100, 100],
        [1, "Aang", "https://i.imgur.com/xVu4vFL.png", 200, 200, 50],
        [2, "Pikachu", "https://i.imgur.com/WMB6g9u.png", 300, 300, 25]
    ]
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();