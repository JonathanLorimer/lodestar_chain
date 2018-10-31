import {initializeValues} from "../utils/utils";

class SpecialRecord {

    fields = {
      // Kind
      'kind' : 'uint8',
      // Data
      'data': ['bytes']
    };

    defaults = {
      'kind': 0,
      'data': new Buffer()
    };

    /*
    * Takes in an object with the fields that need to be initialized.
    * If a field is not initialized, it will use the default as in this.defaults
    */
    constructor(toSet) {
        this.fields = initializeValues(toSet, this.fields, this.defaults)
    }

}

export default SpecialRecord
