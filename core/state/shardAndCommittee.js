import {initializeValues} from "../utils/utils";

class ShardAndCommittee {

    fields = {
        // The shard ID
        'shard': 'int16',
        // Validator indices
        'committee': ['int24']
    }

    defaults = {
        'shard': 0,
        'committee': []
    }

    constructor(toSet) {
        this.fields = initializeValues(toSet, this.fields, this.defaults)
    }
}

export default ShardAndCommittee
