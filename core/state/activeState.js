import AttestationRecord from './attestationRecord'
import SpecialRecord from './specialRecord'

class ActiveState {

    fields = {
        // Attestations that have not yet been processed
        'pending_attestations': [AttestationRecord],
        // Specials not yet been processed
        'pending_specials': [SpecialRecord],
        // Most recent 2 * CYCLE_LENGTH block hashes, older to newer
        'recent_block_hashes': ['hash32'],
        // RANDAO state
        'randao_mix': 'hash32'
    };

    defaults = {
        'pending_attestations': [],
        'pending_specials': [],
        'recent_block_hashes': [],
        'randao_mix': new Buffer(32)
    };


    /*
    * Takes in an object with the fields that need to be initialized.
    * If a field is not initialized, it will use the default as in this.defaults
    */
    constructor(toSet) {
        this.fields.keys.map((key) => {
            if (this.fields.hasOwnProperty(key)) {
                if (toSet.hasOwnProperty(key)) {
                    this[key] = toSet[key];
                } else {
                    this[key] = this.defaults.key;
                }
            }
        })
    }

    // Returns the number of recent attesters
    numPendingAttestations() {
        return this.fields.pending_attestations.length;
    }

}

export default ActiveState
