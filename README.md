# DBI Organization VC Verifier Server

## Server functionality

- Allows [Socket.io polling](https://socket.io/docs/v3/how-it-works/) to emit session specific events back to connected clients

- Generates a [Query Based Request](https://0xpolygonid.github.io/tutorials/verifier/verification-library/request-api-guide/#query-based-request) in the form of a QR code that the user can scan to prove they own a credential that satisfies certain requirements. It also specifies the callback endpoint for verification

- Reports [Verification](https://0xpolygonid.github.io/tutorials/verifier/verification-library/verification-api-guide/) of the proof sent by the user from their Polygon ID Wallet via callback

## Designed For

- Act as Proof of organization 

- Utilizing Polygon ZK Proof for securely verifying while preserving privacy
