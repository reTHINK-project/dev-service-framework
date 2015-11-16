/**
 * Created by amo on 14/11/2015.
 */
class RuntimeConstraint {

    constructor(constraint, runtimeHypertyCapabilityType)
    {
        this._constraint = constraint;
        this._runtimeHypertyCapabilityType = runtimeHypertyCapabilityType;
    }

    get constraint() { return this._constraint; }
    get runtimeHypertyCapabilityType() { return this._runtimeHypertyCapabilityType; }
}
export default RuntimeConstraint;