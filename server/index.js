const express = require('express');
const verifyProof = require('../utils/verifyProof');
const niceList = require('../utils/niceList.json');     // ✅ Add this line
const MerkleTree = require('../utils/MerkleTree');      // ✅ Add this line
const port = 1225;

const app = express();
app.use(express.json());
const merkleTree = new MerkleTree(niceList);
const MERKLE_ROOT = merkleTree.getRoot();

app.post('/gift', (req, res) => {
  const { name, proof } = req.body;
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  const body = req.body;

  if (isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
