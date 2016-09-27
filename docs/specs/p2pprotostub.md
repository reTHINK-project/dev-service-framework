### P2PProtostub

The main idea is to use the WebRTC Data Channel as a protostub that provides a P2P connection between two Hyperty Runtimes.

The P2PProtostub would be provisioned in the catalogue.

The P2PProtostub would be deployed in a iFrame sandbox in order to have access to WebRTC API (Web Workers don't provide access to this API).

The Domain Registry would have a new type of registry entry for each runtime instance providing info required to instantiate the P2PProtostub plus the catalogue URL from where the P2PProtostub would be loaded.

Each Hyperty Instance in the Domain Registry would have a pointer for the Runtime Instance registered in the Domain Registry. In this way hyperty discovery can be performed as today and in addition a P2P connection can be established to communicate with the discovered Hyperty instance.
