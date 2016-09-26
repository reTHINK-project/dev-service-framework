import { divideURL } from '../utils/utils';
import RuntimeCatalogue from './RuntimeCatalogue';

class RuntimeCatalogueLocal extends RuntimeCatalogue {

    constructor(runtimeFactory) {
      super(runtimeFactory);
    }

}

export default RuntimeCatalogueLocal;
