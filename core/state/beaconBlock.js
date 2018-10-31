import { initializeValues } from "../utils/utils";
import { AttestationRecord } from "./attestationRecord"
import { SpecialRecord } from './specialRecord'
import Blake from '../utils/blake'
import ssz from 'ssz'


class BeaconBlock {

    fields = {
      // Slot number (for the PoS mechanism)
      'slot_number': 'int64',
      // Randao commitment reveal
      'randao_reveal': 'hash32',
      // Reference to PoW chain block
      'pow_chain_ref': 'hash32',
      // Skip list of ancestor block hashes (i'th item is 2^i'th ancestor i in {0,...,31})
      'ancestor_hashes': ['hash32'],
      // Hash of the active state
      'active_state_root': 'hash32',
      // Hash of the crystallized state
      'crystallized_state_root': 'hash32',
      // Attestations
      'attestations': [AttestationRecord],
      // Specials (e.g. logouts penalties)
      'specials': [SpecialRecord]

    }

    defaults = {
        'slot_number': 0,
        'randao_reveal': new Buffer(32),
        'pow_chain_ref': new Buffer(32),
        'ancestor_hashes': []
        'active_state_root': new Buffer(32),
        'crystallized_state_root': new Buffer(32),
        'attestations': [],
        'specials' : []
    }

    constructor(toSet) {
        this.fields = initializeValues(toSet, this.fields, this.defaults)
    }

    hash() {
        return Blake.blake(ssz.serialize(this, this));
    }

    num_attestations() {
        return this.fields.attestations.length;
    }
}

export default BeaconBlock
