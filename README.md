# Merkle Tree GiftList

This project is an educational application to understand how **Merkle Trees** work and how they are used in **blockchain** to efficiently verify data without storing it all on-chain.

## 📚 Purpose of the Project

As a student exploring **blockchain technology**, this project helped me understand:

- The concept of **data integrity and verification** using Merkle Trees.
- How **proofs** can be generated on the client side to verify membership in a list without revealing the entire list.
- How to **minimize storage** on-chain or server-side by storing just the **Merkle Root**, a single 32-byte hash.
- How blockchain systems like Ethereum use these concepts for storing smart contract state variables efficiently.

---

## ⚙️ How It Works

1. A list of "nice" people (`niceList.json`) is used to build a Merkle Tree.
2. The Merkle Root is stored on the server (like it would be on a blockchain).
3. A user (client) proves they are in the list by generating a **Merkle proof**.
4. The server verifies the proof using the stored Merkle Root.
5. If valid, the user gets a "gift"!

---

## 🧱 Technologies Used

- **Node.js**
- **Express.js**
- **Merkle Tree logic (custom)**
- `ethereum-cryptography` package (to simulate real crypto hashing)
- **Axios** (for client-server HTTP requests)

---

## 🚀 How to Run It Locally

1. **Clone the project:**
   ```bash
   git clone https://github.com/jainam1810/Merkle-GiftList.git
   cd Merkle-GiftList
