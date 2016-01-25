/**
 * Created by amo on 14/11/2015.
 */
class RuntimeConstraint {

    constructor(constraint, runtimeHypertyCapabilityType) {
        this._constraint = constraint;
        this._runtimeHypertyCapabilityType = runtimeHypertyCapabilityType;
    }

    get constraint() {
        return this._constraint;
    }

    get runtimeHypertyCapabilityType() {
        return this._runtimeHypertyCapabilityType;
    }

    set constraint(constraint) {
        if (constraint)
            this._constraint = constraint;
    }

    set runtimeHypertyCapabilityType(runtimeHypertyCapabilityType) {
        if (runtimeHypertyCapabilityType)
            this._runtimeHypertyCapabilityType = runtimeHypertyCapabilityType;
    }
}
export default RuntimeConstraint;