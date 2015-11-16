/**
 * Created by amo on 14/11/2015.
 */
class SourcePackage{
    constructor(sourceCode, sourceCodeClassname){
        this._sourceCode = sourceCode;
        this._sourceCodeClassname = sourceCodeClassname;

        this._encoding = null;
        this._signature = null;
    }

    get sourceCode (){ return this._sourceCode; }

    get sourceCodeClassname(){return this._sourceCode; }

    get encoding(){ return this._encoding; }

    get signature(){ return this._signature; }

    set encoding(encoding){
        if(encoding)
            this._encoding = encoding;
    }

    set signature(sign){
        if(sign)
            this._signature = sign;
    }
}

export default SourcePackage;
