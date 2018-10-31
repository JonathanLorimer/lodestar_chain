import { initializeValues } from '../utils/utils'

class AttestationRecord {

    fields = {
        // Slot number
        'slot': 'int64',
        // Shard ID
        'shard': 'int16',
        // List of block hashes that this signature is signing over that
        // are NOT part of the current chain, in order of oldest to newest
        'oblique_parent_hashes': ['hash32'],
        // Block hash in the shard that we are attesting to
        'shard_block_hash': 'hash32',
        // Who is participating
        'attester_bitfield': 'bytes',
        // Slot of last justified block
        'justified_slot': 'int64',
        // Hash of last justified block
        'justified_block_hash': 'hash32',
        // The actual signature
        'aggregate_sig': ['int256']
    }

    defaults = {
        'slot': 0,
        'shard': 0,
        'oblique_parent_hashes': [],
        'shard_block_hash': new Buffer(32),
        'attester_bitfield': new Buffer(),
        'justified_slot': 0,
        'justified_block_hash': new Buffer(32),
        'aggregate_sig': [],
    }

    constructor(toSet) {
        this.fields = initializeValues(toSet, this.fields, this.defaults)
    }
}

export default AttestationRecord
