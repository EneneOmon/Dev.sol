import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";
//const keypair = Keypair.generate();
//import 'dotenv/config'
require('dotenv').config();
//console.log(`✅ Generated keypair!`)
//console.log(`The public key is: `, keypair.publicKey.toBase58());
//console.log(`The secret key is: `, keypair.secretKey);
//console.log(`✅ Finished!`);

//GENERATE A NEW KEY PAIR
//const keypair = getKeypairFromEnvironment("SECRET_KEY");

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

//console.log(
 // `✅ Finished! We've loaded our secret key securely, using an env file!`
//);


