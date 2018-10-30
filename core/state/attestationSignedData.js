class AttestationSignedData {

    fields = {
        // Chain version
        'version' : 'int64',
        // Slot number
        'slot' : 'int64',
        // Shard number
        'shard' : 'int16',
        // 31 parent hashes
        'parent_hashes' : ['hash32'],
        // Shard block hash
        'shard_block_hash' : 'hash32',
        // Slot of last justified block referenced in the attestation
        'justified_slot' : 'int64'
    }

    defaults = {
        'version': 0,
        'slot': 0,
        'shard': 0,
        'parent_hashes': [],
        'justified_slot': 0,

    }

    constructor(toSet) {
        this.fields.map((key) => {
            if(this.fields.hasOwnProperty(key)){
                if(toSet.hasOwnProperty(key)) {
                    this.key = toSet.key;
                } else {
                    this.key = this.defaults.key;
                }
            }
        })

    }
}

exports.AttestationSignedData = AttestationSignedData;
