package rethink.uml.ui.contentassist.antlr.internal; 

import java.io.InputStream;
import org.eclipse.xtext.*;
import org.eclipse.xtext.parser.*;
import org.eclipse.xtext.parser.impl.*;
import org.eclipse.emf.ecore.util.EcoreUtil;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.xtext.parser.antlr.XtextTokenStream;
import org.eclipse.xtext.parser.antlr.XtextTokenStream.HiddenTokens;
import org.eclipse.xtext.ui.editor.contentassist.antlr.internal.AbstractInternalContentAssistParser;
import org.eclipse.xtext.ui.editor.contentassist.antlr.internal.DFA;
import rethink.uml.services.ClassDiagramGrammarAccess;



import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

@SuppressWarnings("all")
public class InternalClassDiagramParser extends AbstractInternalContentAssistParser {
    public static final String[] tokenNames = new String[] {
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "RULE_ID", "RULE_STRING", "RULE_ANY_OTHER", "RULE_END_LINE", "RULE_WS", "RULE_MULTI", "RULE_ML_COMMENT", "RULE_SL_COMMENT", "'up'", "'down'", "'left'", "'right'", "'top'", "'bottom'", "'null'", "'string'", "'number'", "'integer'", "'boolean'", "'package'", "'class'", "'enum'", "'note'", "'as'", "'of'", "':'", "'?'", "'Node'", "'Rect'", "'Folder'", "'Frame'", "'Cloud'", "'Database'", "'none'", "'*'", "'o'", "'@startuml'", "'@enduml'", "'{'", "'}'", "'<<'", "'>>'", "'-'", "'.'", "'['", "']'", "'|'", "'end note'", "'>'", "'|>'", "'='", "'[]'"
    };
    public static final int T__50=50;
    public static final int T__19=19;
    public static final int RULE_END_LINE=7;
    public static final int T__15=15;
    public static final int T__16=16;
    public static final int T__17=17;
    public static final int T__18=18;
    public static final int T__55=55;
    public static final int T__12=12;
    public static final int T__13=13;
    public static final int T__14=14;
    public static final int T__51=51;
    public static final int T__52=52;
    public static final int T__53=53;
    public static final int T__54=54;
    public static final int RULE_ID=4;
    public static final int RULE_MULTI=9;
    public static final int T__26=26;
    public static final int T__27=27;
    public static final int T__28=28;
    public static final int T__29=29;
    public static final int T__22=22;
    public static final int RULE_ML_COMMENT=10;
    public static final int T__23=23;
    public static final int T__24=24;
    public static final int T__25=25;
    public static final int T__20=20;
    public static final int T__21=21;
    public static final int RULE_STRING=5;
    public static final int RULE_SL_COMMENT=11;
    public static final int T__37=37;
    public static final int T__38=38;
    public static final int T__39=39;
    public static final int T__33=33;
    public static final int T__34=34;
    public static final int T__35=35;
    public static final int T__36=36;
    public static final int EOF=-1;
    public static final int T__30=30;
    public static final int T__31=31;
    public static final int T__32=32;
    public static final int RULE_WS=8;
    public static final int RULE_ANY_OTHER=6;
    public static final int T__48=48;
    public static final int T__49=49;
    public static final int T__44=44;
    public static final int T__45=45;
    public static final int T__46=46;
    public static final int T__47=47;
    public static final int T__40=40;
    public static final int T__41=41;
    public static final int T__42=42;
    public static final int T__43=43;

    // delegates
    // delegators


        public InternalClassDiagramParser(TokenStream input) {
            this(input, new RecognizerSharedState());
        }
        public InternalClassDiagramParser(TokenStream input, RecognizerSharedState state) {
            super(input, state);
             
        }
        

    public String[] getTokenNames() { return InternalClassDiagramParser.tokenNames; }
    public String getGrammarFileName() { return "../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g"; }


     
     	private ClassDiagramGrammarAccess grammarAccess;
     	
        public void setGrammarAccess(ClassDiagramGrammarAccess grammarAccess) {
        	this.grammarAccess = grammarAccess;
        }
        
        @Override
        protected Grammar getGrammar() {
        	return grammarAccess.getGrammar();
        }
        
        @Override
        protected String getValueForTokenName(String tokenName) {
        	return tokenName;
        }




    // $ANTLR start "entryRuleDomainModel"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:60:1: entryRuleDomainModel : ruleDomainModel EOF ;
    public final void entryRuleDomainModel() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:61:1: ( ruleDomainModel EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:62:1: ruleDomainModel EOF
            {
             before(grammarAccess.getDomainModelRule()); 
            pushFollow(FOLLOW_ruleDomainModel_in_entryRuleDomainModel61);
            ruleDomainModel();

            state._fsp--;

             after(grammarAccess.getDomainModelRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleDomainModel68); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleDomainModel"


    // $ANTLR start "ruleDomainModel"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:69:1: ruleDomainModel : ( ( rule__DomainModel__Group__0 ) ) ;
    public final void ruleDomainModel() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:73:2: ( ( ( rule__DomainModel__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:74:1: ( ( rule__DomainModel__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:74:1: ( ( rule__DomainModel__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:75:1: ( rule__DomainModel__Group__0 )
            {
             before(grammarAccess.getDomainModelAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:76:1: ( rule__DomainModel__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:76:2: rule__DomainModel__Group__0
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__0_in_ruleDomainModel94);
            rule__DomainModel__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getDomainModelAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleDomainModel"


    // $ANTLR start "entryRuleElement"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:88:1: entryRuleElement : ruleElement EOF ;
    public final void entryRuleElement() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:89:1: ( ruleElement EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:90:1: ruleElement EOF
            {
             before(grammarAccess.getElementRule()); 
            pushFollow(FOLLOW_ruleElement_in_entryRuleElement121);
            ruleElement();

            state._fsp--;

             after(grammarAccess.getElementRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleElement128); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleElement"


    // $ANTLR start "ruleElement"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:97:1: ruleElement : ( ( rule__Element__Alternatives ) ) ;
    public final void ruleElement() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:101:2: ( ( ( rule__Element__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:102:1: ( ( rule__Element__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:102:1: ( ( rule__Element__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:103:1: ( rule__Element__Alternatives )
            {
             before(grammarAccess.getElementAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:104:1: ( rule__Element__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:104:2: rule__Element__Alternatives
            {
            pushFollow(FOLLOW_rule__Element__Alternatives_in_ruleElement154);
            rule__Element__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getElementAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleElement"


    // $ANTLR start "entryRuleEntityAndNote"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:116:1: entryRuleEntityAndNote : ruleEntityAndNote EOF ;
    public final void entryRuleEntityAndNote() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:117:1: ( ruleEntityAndNote EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:118:1: ruleEntityAndNote EOF
            {
             before(grammarAccess.getEntityAndNoteRule()); 
            pushFollow(FOLLOW_ruleEntityAndNote_in_entryRuleEntityAndNote181);
            ruleEntityAndNote();

            state._fsp--;

             after(grammarAccess.getEntityAndNoteRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleEntityAndNote188); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleEntityAndNote"


    // $ANTLR start "ruleEntityAndNote"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:125:1: ruleEntityAndNote : ( ( rule__EntityAndNote__Alternatives ) ) ;
    public final void ruleEntityAndNote() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:129:2: ( ( ( rule__EntityAndNote__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:130:1: ( ( rule__EntityAndNote__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:130:1: ( ( rule__EntityAndNote__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:131:1: ( rule__EntityAndNote__Alternatives )
            {
             before(grammarAccess.getEntityAndNoteAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:132:1: ( rule__EntityAndNote__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:132:2: rule__EntityAndNote__Alternatives
            {
            pushFollow(FOLLOW_rule__EntityAndNote__Alternatives_in_ruleEntityAndNote214);
            rule__EntityAndNote__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getEntityAndNoteAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleEntityAndNote"


    // $ANTLR start "entryRuleEntity"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:144:1: entryRuleEntity : ruleEntity EOF ;
    public final void entryRuleEntity() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:145:1: ( ruleEntity EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:146:1: ruleEntity EOF
            {
             before(grammarAccess.getEntityRule()); 
            pushFollow(FOLLOW_ruleEntity_in_entryRuleEntity241);
            ruleEntity();

            state._fsp--;

             after(grammarAccess.getEntityRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleEntity248); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleEntity"


    // $ANTLR start "ruleEntity"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:153:1: ruleEntity : ( ( rule__Entity__Alternatives ) ) ;
    public final void ruleEntity() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:157:2: ( ( ( rule__Entity__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:158:1: ( ( rule__Entity__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:158:1: ( ( rule__Entity__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:159:1: ( rule__Entity__Alternatives )
            {
             before(grammarAccess.getEntityAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:160:1: ( rule__Entity__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:160:2: rule__Entity__Alternatives
            {
            pushFollow(FOLLOW_rule__Entity__Alternatives_in_ruleEntity274);
            rule__Entity__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getEntityAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleEntity"


    // $ANTLR start "entryRuleCPackage"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:172:1: entryRuleCPackage : ruleCPackage EOF ;
    public final void entryRuleCPackage() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:173:1: ( ruleCPackage EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:174:1: ruleCPackage EOF
            {
             before(grammarAccess.getCPackageRule()); 
            pushFollow(FOLLOW_ruleCPackage_in_entryRuleCPackage301);
            ruleCPackage();

            state._fsp--;

             after(grammarAccess.getCPackageRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleCPackage308); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleCPackage"


    // $ANTLR start "ruleCPackage"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:181:1: ruleCPackage : ( ( rule__CPackage__Group__0 ) ) ;
    public final void ruleCPackage() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:185:2: ( ( ( rule__CPackage__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:186:1: ( ( rule__CPackage__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:186:1: ( ( rule__CPackage__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:187:1: ( rule__CPackage__Group__0 )
            {
             before(grammarAccess.getCPackageAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:188:1: ( rule__CPackage__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:188:2: rule__CPackage__Group__0
            {
            pushFollow(FOLLOW_rule__CPackage__Group__0_in_ruleCPackage334);
            rule__CPackage__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getCPackageAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleCPackage"


    // $ANTLR start "entryRuleRelation"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:200:1: entryRuleRelation : ruleRelation EOF ;
    public final void entryRuleRelation() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:201:1: ( ruleRelation EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:202:1: ruleRelation EOF
            {
             before(grammarAccess.getRelationRule()); 
            pushFollow(FOLLOW_ruleRelation_in_entryRuleRelation361);
            ruleRelation();

            state._fsp--;

             after(grammarAccess.getRelationRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleRelation368); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleRelation"


    // $ANTLR start "ruleRelation"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:209:1: ruleRelation : ( ( rule__Relation__Group__0 ) ) ;
    public final void ruleRelation() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:213:2: ( ( ( rule__Relation__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:214:1: ( ( rule__Relation__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:214:1: ( ( rule__Relation__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:215:1: ( rule__Relation__Group__0 )
            {
             before(grammarAccess.getRelationAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:216:1: ( rule__Relation__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:216:2: rule__Relation__Group__0
            {
            pushFollow(FOLLOW_rule__Relation__Group__0_in_ruleRelation394);
            rule__Relation__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getRelationAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleRelation"


    // $ANTLR start "entryRuleRelationParse"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:228:1: entryRuleRelationParse : ruleRelationParse EOF ;
    public final void entryRuleRelationParse() throws RecognitionException {

        	HiddenTokens myHiddenTokenState = ((XtextTokenStream)input).setHiddenTokens();

        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:232:1: ( ruleRelationParse EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:233:1: ruleRelationParse EOF
            {
             before(grammarAccess.getRelationParseRule()); 
            pushFollow(FOLLOW_ruleRelationParse_in_entryRuleRelationParse426);
            ruleRelationParse();

            state._fsp--;

             after(grammarAccess.getRelationParseRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleRelationParse433); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	myHiddenTokenState.restore();

        }
        return ;
    }
    // $ANTLR end "entryRuleRelationParse"


    // $ANTLR start "ruleRelationParse"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:243:1: ruleRelationParse : ( ( rule__RelationParse__Alternatives ) ) ;
    public final void ruleRelationParse() throws RecognitionException {

        		HiddenTokens myHiddenTokenState = ((XtextTokenStream)input).setHiddenTokens();
        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:248:2: ( ( ( rule__RelationParse__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:249:1: ( ( rule__RelationParse__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:249:1: ( ( rule__RelationParse__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:250:1: ( rule__RelationParse__Alternatives )
            {
             before(grammarAccess.getRelationParseAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:251:1: ( rule__RelationParse__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:251:2: rule__RelationParse__Alternatives
            {
            pushFollow(FOLLOW_rule__RelationParse__Alternatives_in_ruleRelationParse463);
            rule__RelationParse__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getRelationParseAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);
            	myHiddenTokenState.restore();

        }
        return ;
    }
    // $ANTLR end "ruleRelationParse"


    // $ANTLR start "entryRuleRelationType"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:264:1: entryRuleRelationType : ruleRelationType EOF ;
    public final void entryRuleRelationType() throws RecognitionException {

        	HiddenTokens myHiddenTokenState = ((XtextTokenStream)input).setHiddenTokens();

        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:268:1: ( ruleRelationType EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:269:1: ruleRelationType EOF
            {
             before(grammarAccess.getRelationTypeRule()); 
            pushFollow(FOLLOW_ruleRelationType_in_entryRuleRelationType495);
            ruleRelationType();

            state._fsp--;

             after(grammarAccess.getRelationTypeRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleRelationType502); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	myHiddenTokenState.restore();

        }
        return ;
    }
    // $ANTLR end "entryRuleRelationType"


    // $ANTLR start "ruleRelationType"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:279:1: ruleRelationType : ( ( rule__RelationType__Alternatives ) ) ;
    public final void ruleRelationType() throws RecognitionException {

        		HiddenTokens myHiddenTokenState = ((XtextTokenStream)input).setHiddenTokens();
        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:284:2: ( ( ( rule__RelationType__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:285:1: ( ( rule__RelationType__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:285:1: ( ( rule__RelationType__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:286:1: ( rule__RelationType__Alternatives )
            {
             before(grammarAccess.getRelationTypeAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:287:1: ( rule__RelationType__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:287:2: rule__RelationType__Alternatives
            {
            pushFollow(FOLLOW_rule__RelationType__Alternatives_in_ruleRelationType532);
            rule__RelationType__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getRelationTypeAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);
            	myHiddenTokenState.restore();

        }
        return ;
    }
    // $ANTLR end "ruleRelationType"


    // $ANTLR start "entryRuleStrongRel"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:300:1: entryRuleStrongRel : ruleStrongRel EOF ;
    public final void entryRuleStrongRel() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:301:1: ( ruleStrongRel EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:302:1: ruleStrongRel EOF
            {
             before(grammarAccess.getStrongRelRule()); 
            pushFollow(FOLLOW_ruleStrongRel_in_entryRuleStrongRel559);
            ruleStrongRel();

            state._fsp--;

             after(grammarAccess.getStrongRelRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleStrongRel566); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleStrongRel"


    // $ANTLR start "ruleStrongRel"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:309:1: ruleStrongRel : ( ( rule__StrongRel__Group__0 ) ) ;
    public final void ruleStrongRel() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:313:2: ( ( ( rule__StrongRel__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:314:1: ( ( rule__StrongRel__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:314:1: ( ( rule__StrongRel__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:315:1: ( rule__StrongRel__Group__0 )
            {
             before(grammarAccess.getStrongRelAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:316:1: ( rule__StrongRel__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:316:2: rule__StrongRel__Group__0
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__0_in_ruleStrongRel592);
            rule__StrongRel__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getStrongRelAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleStrongRel"


    // $ANTLR start "entryRuleWeakRel"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:328:1: entryRuleWeakRel : ruleWeakRel EOF ;
    public final void entryRuleWeakRel() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:329:1: ( ruleWeakRel EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:330:1: ruleWeakRel EOF
            {
             before(grammarAccess.getWeakRelRule()); 
            pushFollow(FOLLOW_ruleWeakRel_in_entryRuleWeakRel619);
            ruleWeakRel();

            state._fsp--;

             after(grammarAccess.getWeakRelRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleWeakRel626); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleWeakRel"


    // $ANTLR start "ruleWeakRel"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:337:1: ruleWeakRel : ( ( rule__WeakRel__Group__0 ) ) ;
    public final void ruleWeakRel() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:341:2: ( ( ( rule__WeakRel__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:342:1: ( ( rule__WeakRel__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:342:1: ( ( rule__WeakRel__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:343:1: ( rule__WeakRel__Group__0 )
            {
             before(grammarAccess.getWeakRelAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:344:1: ( rule__WeakRel__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:344:2: rule__WeakRel__Group__0
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__0_in_ruleWeakRel652);
            rule__WeakRel__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getWeakRelAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleWeakRel"


    // $ANTLR start "entryRuleEnumer"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:356:1: entryRuleEnumer : ruleEnumer EOF ;
    public final void entryRuleEnumer() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:357:1: ( ruleEnumer EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:358:1: ruleEnumer EOF
            {
             before(grammarAccess.getEnumerRule()); 
            pushFollow(FOLLOW_ruleEnumer_in_entryRuleEnumer679);
            ruleEnumer();

            state._fsp--;

             after(grammarAccess.getEnumerRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleEnumer686); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleEnumer"


    // $ANTLR start "ruleEnumer"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:365:1: ruleEnumer : ( ( rule__Enumer__Group__0 ) ) ;
    public final void ruleEnumer() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:369:2: ( ( ( rule__Enumer__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:370:1: ( ( rule__Enumer__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:370:1: ( ( rule__Enumer__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:371:1: ( rule__Enumer__Group__0 )
            {
             before(grammarAccess.getEnumerAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:372:1: ( rule__Enumer__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:372:2: rule__Enumer__Group__0
            {
            pushFollow(FOLLOW_rule__Enumer__Group__0_in_ruleEnumer712);
            rule__Enumer__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getEnumerAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleEnumer"


    // $ANTLR start "entryRuleClazz"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:384:1: entryRuleClazz : ruleClazz EOF ;
    public final void entryRuleClazz() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:385:1: ( ruleClazz EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:386:1: ruleClazz EOF
            {
             before(grammarAccess.getClazzRule()); 
            pushFollow(FOLLOW_ruleClazz_in_entryRuleClazz739);
            ruleClazz();

            state._fsp--;

             after(grammarAccess.getClazzRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleClazz746); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleClazz"


    // $ANTLR start "ruleClazz"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:393:1: ruleClazz : ( ( rule__Clazz__Group__0 ) ) ;
    public final void ruleClazz() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:397:2: ( ( ( rule__Clazz__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:398:1: ( ( rule__Clazz__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:398:1: ( ( rule__Clazz__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:399:1: ( rule__Clazz__Group__0 )
            {
             before(grammarAccess.getClazzAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:400:1: ( rule__Clazz__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:400:2: rule__Clazz__Group__0
            {
            pushFollow(FOLLOW_rule__Clazz__Group__0_in_ruleClazz772);
            rule__Clazz__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getClazzAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleClazz"


    // $ANTLR start "entryRuleProperty"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:412:1: entryRuleProperty : ruleProperty EOF ;
    public final void entryRuleProperty() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:413:1: ( ruleProperty EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:414:1: ruleProperty EOF
            {
             before(grammarAccess.getPropertyRule()); 
            pushFollow(FOLLOW_ruleProperty_in_entryRuleProperty799);
            ruleProperty();

            state._fsp--;

             after(grammarAccess.getPropertyRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleProperty806); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleProperty"


    // $ANTLR start "ruleProperty"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:421:1: ruleProperty : ( ( rule__Property__Group__0 ) ) ;
    public final void ruleProperty() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:425:2: ( ( ( rule__Property__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:426:1: ( ( rule__Property__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:426:1: ( ( rule__Property__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:427:1: ( rule__Property__Group__0 )
            {
             before(grammarAccess.getPropertyAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:428:1: ( rule__Property__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:428:2: rule__Property__Group__0
            {
            pushFollow(FOLLOW_rule__Property__Group__0_in_ruleProperty832);
            rule__Property__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getPropertyAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleProperty"


    // $ANTLR start "entryRuleEntityList"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:440:1: entryRuleEntityList : ruleEntityList EOF ;
    public final void entryRuleEntityList() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:441:1: ( ruleEntityList EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:442:1: ruleEntityList EOF
            {
             before(grammarAccess.getEntityListRule()); 
            pushFollow(FOLLOW_ruleEntityList_in_entryRuleEntityList859);
            ruleEntityList();

            state._fsp--;

             after(grammarAccess.getEntityListRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleEntityList866); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleEntityList"


    // $ANTLR start "ruleEntityList"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:449:1: ruleEntityList : ( ( rule__EntityList__Group__0 ) ) ;
    public final void ruleEntityList() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:453:2: ( ( ( rule__EntityList__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:454:1: ( ( rule__EntityList__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:454:1: ( ( rule__EntityList__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:455:1: ( rule__EntityList__Group__0 )
            {
             before(grammarAccess.getEntityListAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:456:1: ( rule__EntityList__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:456:2: rule__EntityList__Group__0
            {
            pushFollow(FOLLOW_rule__EntityList__Group__0_in_ruleEntityList892);
            rule__EntityList__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getEntityListAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleEntityList"


    // $ANTLR start "entryRuleNote"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:468:1: entryRuleNote : ruleNote EOF ;
    public final void entryRuleNote() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:469:1: ( ruleNote EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:470:1: ruleNote EOF
            {
             before(grammarAccess.getNoteRule()); 
            pushFollow(FOLLOW_ruleNote_in_entryRuleNote919);
            ruleNote();

            state._fsp--;

             after(grammarAccess.getNoteRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleNote926); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleNote"


    // $ANTLR start "ruleNote"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:477:1: ruleNote : ( ( rule__Note__Group__0 ) ) ;
    public final void ruleNote() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:481:2: ( ( ( rule__Note__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:482:1: ( ( rule__Note__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:482:1: ( ( rule__Note__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:483:1: ( rule__Note__Group__0 )
            {
             before(grammarAccess.getNoteAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:484:1: ( rule__Note__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:484:2: rule__Note__Group__0
            {
            pushFollow(FOLLOW_rule__Note__Group__0_in_ruleNote952);
            rule__Note__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleNote"


    // $ANTLR start "entryRuleDataType"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:496:1: entryRuleDataType : ruleDataType EOF ;
    public final void entryRuleDataType() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:497:1: ( ruleDataType EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:498:1: ruleDataType EOF
            {
             before(grammarAccess.getDataTypeRule()); 
            pushFollow(FOLLOW_ruleDataType_in_entryRuleDataType979);
            ruleDataType();

            state._fsp--;

             after(grammarAccess.getDataTypeRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleDataType986); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleDataType"


    // $ANTLR start "ruleDataType"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:505:1: ruleDataType : ( ( rule__DataType__Group__0 ) ) ;
    public final void ruleDataType() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:509:2: ( ( ( rule__DataType__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:510:1: ( ( rule__DataType__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:510:1: ( ( rule__DataType__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:511:1: ( rule__DataType__Group__0 )
            {
             before(grammarAccess.getDataTypeAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:512:1: ( rule__DataType__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:512:2: rule__DataType__Group__0
            {
            pushFollow(FOLLOW_rule__DataType__Group__0_in_ruleDataType1012);
            rule__DataType__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getDataTypeAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleDataType"


    // $ANTLR start "entryRuleQualifiedName"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:524:1: entryRuleQualifiedName : ruleQualifiedName EOF ;
    public final void entryRuleQualifiedName() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:525:1: ( ruleQualifiedName EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:526:1: ruleQualifiedName EOF
            {
             before(grammarAccess.getQualifiedNameRule()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_entryRuleQualifiedName1039);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getQualifiedNameRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleQualifiedName1046); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleQualifiedName"


    // $ANTLR start "ruleQualifiedName"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:533:1: ruleQualifiedName : ( ( rule__QualifiedName__Group__0 ) ) ;
    public final void ruleQualifiedName() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:537:2: ( ( ( rule__QualifiedName__Group__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:538:1: ( ( rule__QualifiedName__Group__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:538:1: ( ( rule__QualifiedName__Group__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:539:1: ( rule__QualifiedName__Group__0 )
            {
             before(grammarAccess.getQualifiedNameAccess().getGroup()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:540:1: ( rule__QualifiedName__Group__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:540:2: rule__QualifiedName__Group__0
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group__0_in_ruleQualifiedName1072);
            rule__QualifiedName__Group__0();

            state._fsp--;


            }

             after(grammarAccess.getQualifiedNameAccess().getGroup()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleQualifiedName"


    // $ANTLR start "entryRuleText"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:552:1: entryRuleText : ruleText EOF ;
    public final void entryRuleText() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:553:1: ( ruleText EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:554:1: ruleText EOF
            {
             before(grammarAccess.getTextRule()); 
            pushFollow(FOLLOW_ruleText_in_entryRuleText1099);
            ruleText();

            state._fsp--;

             after(grammarAccess.getTextRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleText1106); 

            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {
        }
        return ;
    }
    // $ANTLR end "entryRuleText"


    // $ANTLR start "ruleText"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:561:1: ruleText : ( ( ( rule__Text__Alternatives ) ) ( ( rule__Text__Alternatives )* ) ) ;
    public final void ruleText() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:565:2: ( ( ( ( rule__Text__Alternatives ) ) ( ( rule__Text__Alternatives )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:566:1: ( ( ( rule__Text__Alternatives ) ) ( ( rule__Text__Alternatives )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:566:1: ( ( ( rule__Text__Alternatives ) ) ( ( rule__Text__Alternatives )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:567:1: ( ( rule__Text__Alternatives ) ) ( ( rule__Text__Alternatives )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:567:1: ( ( rule__Text__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:568:1: ( rule__Text__Alternatives )
            {
             before(grammarAccess.getTextAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:569:1: ( rule__Text__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:569:2: rule__Text__Alternatives
            {
            pushFollow(FOLLOW_rule__Text__Alternatives_in_ruleText1134);
            rule__Text__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getTextAccess().getAlternatives()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:572:1: ( ( rule__Text__Alternatives )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:573:1: ( rule__Text__Alternatives )*
            {
             before(grammarAccess.getTextAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:574:1: ( rule__Text__Alternatives )*
            loop1:
            do {
                int alt1=2;
                int LA1_0 = input.LA(1);

                if ( ((LA1_0>=RULE_ID && LA1_0<=RULE_ANY_OTHER)||(LA1_0>=12 && LA1_0<=30)) ) {
                    alt1=1;
                }


                switch (alt1) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:574:2: rule__Text__Alternatives
            	    {
            	    pushFollow(FOLLOW_rule__Text__Alternatives_in_ruleText1146);
            	    rule__Text__Alternatives();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop1;
                }
            } while (true);

             after(grammarAccess.getTextAccess().getAlternatives()); 

            }


            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleText"


    // $ANTLR start "rulePackageStyle"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:588:1: rulePackageStyle : ( ( rule__PackageStyle__Alternatives ) ) ;
    public final void rulePackageStyle() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:592:1: ( ( ( rule__PackageStyle__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:593:1: ( ( rule__PackageStyle__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:593:1: ( ( rule__PackageStyle__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:594:1: ( rule__PackageStyle__Alternatives )
            {
             before(grammarAccess.getPackageStyleAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:595:1: ( rule__PackageStyle__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:595:2: rule__PackageStyle__Alternatives
            {
            pushFollow(FOLLOW_rule__PackageStyle__Alternatives_in_rulePackageStyle1186);
            rule__PackageStyle__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getPackageStyleAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rulePackageStyle"


    // $ANTLR start "ruleCompType"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:607:1: ruleCompType : ( ( rule__CompType__Alternatives ) ) ;
    public final void ruleCompType() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:611:1: ( ( ( rule__CompType__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:612:1: ( ( rule__CompType__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:612:1: ( ( rule__CompType__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:613:1: ( rule__CompType__Alternatives )
            {
             before(grammarAccess.getCompTypeAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:614:1: ( rule__CompType__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:614:2: rule__CompType__Alternatives
            {
            pushFollow(FOLLOW_rule__CompType__Alternatives_in_ruleCompType1222);
            rule__CompType__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getCompTypeAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleCompType"


    // $ANTLR start "ruleNotePosition"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:626:1: ruleNotePosition : ( ( rule__NotePosition__Alternatives ) ) ;
    public final void ruleNotePosition() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:630:1: ( ( ( rule__NotePosition__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:631:1: ( ( rule__NotePosition__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:631:1: ( ( rule__NotePosition__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:632:1: ( rule__NotePosition__Alternatives )
            {
             before(grammarAccess.getNotePositionAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:633:1: ( rule__NotePosition__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:633:2: rule__NotePosition__Alternatives
            {
            pushFollow(FOLLOW_rule__NotePosition__Alternatives_in_ruleNotePosition1258);
            rule__NotePosition__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getNotePositionAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleNotePosition"


    // $ANTLR start "ruleNativeType"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:645:1: ruleNativeType : ( ( rule__NativeType__Alternatives ) ) ;
    public final void ruleNativeType() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:649:1: ( ( ( rule__NativeType__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:650:1: ( ( rule__NativeType__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:650:1: ( ( rule__NativeType__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:651:1: ( rule__NativeType__Alternatives )
            {
             before(grammarAccess.getNativeTypeAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:652:1: ( rule__NativeType__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:652:2: rule__NativeType__Alternatives
            {
            pushFollow(FOLLOW_rule__NativeType__Alternatives_in_ruleNativeType1294);
            rule__NativeType__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getNativeTypeAccess().getAlternatives()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "ruleNativeType"


    // $ANTLR start "rule__Element__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:663:1: rule__Element__Alternatives : ( ( ruleRelation ) | ( ruleCPackage ) | ( ruleEntityAndNote ) );
    public final void rule__Element__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:667:1: ( ( ruleRelation ) | ( ruleCPackage ) | ( ruleEntityAndNote ) )
            int alt2=3;
            switch ( input.LA(1) ) {
            case RULE_ID:
                {
                alt2=1;
                }
                break;
            case 23:
                {
                alt2=2;
                }
                break;
            case 24:
            case 25:
            case 26:
                {
                alt2=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 2, 0, input);

                throw nvae;
            }

            switch (alt2) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:668:1: ( ruleRelation )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:668:1: ( ruleRelation )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:669:1: ruleRelation
                    {
                     before(grammarAccess.getElementAccess().getRelationParserRuleCall_0()); 
                    pushFollow(FOLLOW_ruleRelation_in_rule__Element__Alternatives1329);
                    ruleRelation();

                    state._fsp--;

                     after(grammarAccess.getElementAccess().getRelationParserRuleCall_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:674:6: ( ruleCPackage )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:674:6: ( ruleCPackage )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:675:1: ruleCPackage
                    {
                     before(grammarAccess.getElementAccess().getCPackageParserRuleCall_1()); 
                    pushFollow(FOLLOW_ruleCPackage_in_rule__Element__Alternatives1346);
                    ruleCPackage();

                    state._fsp--;

                     after(grammarAccess.getElementAccess().getCPackageParserRuleCall_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:680:6: ( ruleEntityAndNote )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:680:6: ( ruleEntityAndNote )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:681:1: ruleEntityAndNote
                    {
                     before(grammarAccess.getElementAccess().getEntityAndNoteParserRuleCall_2()); 
                    pushFollow(FOLLOW_ruleEntityAndNote_in_rule__Element__Alternatives1363);
                    ruleEntityAndNote();

                    state._fsp--;

                     after(grammarAccess.getElementAccess().getEntityAndNoteParserRuleCall_2()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Element__Alternatives"


    // $ANTLR start "rule__EntityAndNote__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:691:1: rule__EntityAndNote__Alternatives : ( ( ruleEntity ) | ( ruleNote ) );
    public final void rule__EntityAndNote__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:695:1: ( ( ruleEntity ) | ( ruleNote ) )
            int alt3=2;
            int LA3_0 = input.LA(1);

            if ( ((LA3_0>=24 && LA3_0<=25)) ) {
                alt3=1;
            }
            else if ( (LA3_0==26) ) {
                alt3=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 3, 0, input);

                throw nvae;
            }
            switch (alt3) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:696:1: ( ruleEntity )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:696:1: ( ruleEntity )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:697:1: ruleEntity
                    {
                     before(grammarAccess.getEntityAndNoteAccess().getEntityParserRuleCall_0()); 
                    pushFollow(FOLLOW_ruleEntity_in_rule__EntityAndNote__Alternatives1395);
                    ruleEntity();

                    state._fsp--;

                     after(grammarAccess.getEntityAndNoteAccess().getEntityParserRuleCall_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:702:6: ( ruleNote )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:702:6: ( ruleNote )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:703:1: ruleNote
                    {
                     before(grammarAccess.getEntityAndNoteAccess().getNoteParserRuleCall_1()); 
                    pushFollow(FOLLOW_ruleNote_in_rule__EntityAndNote__Alternatives1412);
                    ruleNote();

                    state._fsp--;

                     after(grammarAccess.getEntityAndNoteAccess().getNoteParserRuleCall_1()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityAndNote__Alternatives"


    // $ANTLR start "rule__Entity__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:713:1: rule__Entity__Alternatives : ( ( ruleEnumer ) | ( ruleClazz ) );
    public final void rule__Entity__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:717:1: ( ( ruleEnumer ) | ( ruleClazz ) )
            int alt4=2;
            int LA4_0 = input.LA(1);

            if ( (LA4_0==25) ) {
                alt4=1;
            }
            else if ( (LA4_0==24) ) {
                alt4=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 4, 0, input);

                throw nvae;
            }
            switch (alt4) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:718:1: ( ruleEnumer )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:718:1: ( ruleEnumer )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:719:1: ruleEnumer
                    {
                     before(grammarAccess.getEntityAccess().getEnumerParserRuleCall_0()); 
                    pushFollow(FOLLOW_ruleEnumer_in_rule__Entity__Alternatives1444);
                    ruleEnumer();

                    state._fsp--;

                     after(grammarAccess.getEntityAccess().getEnumerParserRuleCall_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:724:6: ( ruleClazz )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:724:6: ( ruleClazz )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:725:1: ruleClazz
                    {
                     before(grammarAccess.getEntityAccess().getClazzParserRuleCall_1()); 
                    pushFollow(FOLLOW_ruleClazz_in_rule__Entity__Alternatives1461);
                    ruleClazz();

                    state._fsp--;

                     after(grammarAccess.getEntityAccess().getClazzParserRuleCall_1()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Entity__Alternatives"


    // $ANTLR start "rule__RelationParse__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:735:1: rule__RelationParse__Alternatives : ( ( ( rule__RelationParse__Group_0__0 ) ) | ( ( rule__RelationParse__Group_1__0 ) ) );
    public final void rule__RelationParse__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:739:1: ( ( ( rule__RelationParse__Group_0__0 ) ) | ( ( rule__RelationParse__Group_1__0 ) ) )
            int alt5=2;
            int LA5_0 = input.LA(1);

            if ( ((LA5_0>=37 && LA5_0<=39)) ) {
                alt5=1;
            }
            else if ( ((LA5_0>=46 && LA5_0<=47)) ) {
                alt5=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 5, 0, input);

                throw nvae;
            }
            switch (alt5) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:740:1: ( ( rule__RelationParse__Group_0__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:740:1: ( ( rule__RelationParse__Group_0__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:741:1: ( rule__RelationParse__Group_0__0 )
                    {
                     before(grammarAccess.getRelationParseAccess().getGroup_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:742:1: ( rule__RelationParse__Group_0__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:742:2: rule__RelationParse__Group_0__0
                    {
                    pushFollow(FOLLOW_rule__RelationParse__Group_0__0_in_rule__RelationParse__Alternatives1493);
                    rule__RelationParse__Group_0__0();

                    state._fsp--;


                    }

                     after(grammarAccess.getRelationParseAccess().getGroup_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:746:6: ( ( rule__RelationParse__Group_1__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:746:6: ( ( rule__RelationParse__Group_1__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:747:1: ( rule__RelationParse__Group_1__0 )
                    {
                     before(grammarAccess.getRelationParseAccess().getGroup_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:748:1: ( rule__RelationParse__Group_1__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:748:2: rule__RelationParse__Group_1__0
                    {
                    pushFollow(FOLLOW_rule__RelationParse__Group_1__0_in_rule__RelationParse__Alternatives1511);
                    rule__RelationParse__Group_1__0();

                    state._fsp--;


                    }

                     after(grammarAccess.getRelationParseAccess().getGroup_1()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Alternatives"


    // $ANTLR start "rule__RelationParse__Alternatives_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:757:1: rule__RelationParse__Alternatives_1_1 : ( ( ( rule__RelationParse__DirectAssignment_1_1_0 ) ) | ( ( rule__RelationParse__ExtAssignment_1_1_1 ) ) );
    public final void rule__RelationParse__Alternatives_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:761:1: ( ( ( rule__RelationParse__DirectAssignment_1_1_0 ) ) | ( ( rule__RelationParse__ExtAssignment_1_1_1 ) ) )
            int alt6=2;
            int LA6_0 = input.LA(1);

            if ( (LA6_0==52) ) {
                alt6=1;
            }
            else if ( (LA6_0==53) ) {
                alt6=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 6, 0, input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:762:1: ( ( rule__RelationParse__DirectAssignment_1_1_0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:762:1: ( ( rule__RelationParse__DirectAssignment_1_1_0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:763:1: ( rule__RelationParse__DirectAssignment_1_1_0 )
                    {
                     before(grammarAccess.getRelationParseAccess().getDirectAssignment_1_1_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:764:1: ( rule__RelationParse__DirectAssignment_1_1_0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:764:2: rule__RelationParse__DirectAssignment_1_1_0
                    {
                    pushFollow(FOLLOW_rule__RelationParse__DirectAssignment_1_1_0_in_rule__RelationParse__Alternatives_1_11544);
                    rule__RelationParse__DirectAssignment_1_1_0();

                    state._fsp--;


                    }

                     after(grammarAccess.getRelationParseAccess().getDirectAssignment_1_1_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:768:6: ( ( rule__RelationParse__ExtAssignment_1_1_1 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:768:6: ( ( rule__RelationParse__ExtAssignment_1_1_1 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:769:1: ( rule__RelationParse__ExtAssignment_1_1_1 )
                    {
                     before(grammarAccess.getRelationParseAccess().getExtAssignment_1_1_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:770:1: ( rule__RelationParse__ExtAssignment_1_1_1 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:770:2: rule__RelationParse__ExtAssignment_1_1_1
                    {
                    pushFollow(FOLLOW_rule__RelationParse__ExtAssignment_1_1_1_in_rule__RelationParse__Alternatives_1_11562);
                    rule__RelationParse__ExtAssignment_1_1_1();

                    state._fsp--;


                    }

                     after(grammarAccess.getRelationParseAccess().getExtAssignment_1_1_1()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Alternatives_1_1"


    // $ANTLR start "rule__RelationType__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:779:1: rule__RelationType__Alternatives : ( ( ( rule__RelationType__StrongAssignment_0 ) ) | ( ( rule__RelationType__WeakAssignment_1 ) ) );
    public final void rule__RelationType__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:783:1: ( ( ( rule__RelationType__StrongAssignment_0 ) ) | ( ( rule__RelationType__WeakAssignment_1 ) ) )
            int alt7=2;
            int LA7_0 = input.LA(1);

            if ( (LA7_0==46) ) {
                alt7=1;
            }
            else if ( (LA7_0==47) ) {
                alt7=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 7, 0, input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:784:1: ( ( rule__RelationType__StrongAssignment_0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:784:1: ( ( rule__RelationType__StrongAssignment_0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:785:1: ( rule__RelationType__StrongAssignment_0 )
                    {
                     before(grammarAccess.getRelationTypeAccess().getStrongAssignment_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:786:1: ( rule__RelationType__StrongAssignment_0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:786:2: rule__RelationType__StrongAssignment_0
                    {
                    pushFollow(FOLLOW_rule__RelationType__StrongAssignment_0_in_rule__RelationType__Alternatives1595);
                    rule__RelationType__StrongAssignment_0();

                    state._fsp--;


                    }

                     after(grammarAccess.getRelationTypeAccess().getStrongAssignment_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:790:6: ( ( rule__RelationType__WeakAssignment_1 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:790:6: ( ( rule__RelationType__WeakAssignment_1 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:791:1: ( rule__RelationType__WeakAssignment_1 )
                    {
                     before(grammarAccess.getRelationTypeAccess().getWeakAssignment_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:792:1: ( rule__RelationType__WeakAssignment_1 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:792:2: rule__RelationType__WeakAssignment_1
                    {
                    pushFollow(FOLLOW_rule__RelationType__WeakAssignment_1_in_rule__RelationType__Alternatives1613);
                    rule__RelationType__WeakAssignment_1();

                    state._fsp--;


                    }

                     after(grammarAccess.getRelationTypeAccess().getWeakAssignment_1()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationType__Alternatives"


    // $ANTLR start "rule__StrongRel__Alternatives_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:801:1: rule__StrongRel__Alternatives_1 : ( ( 'up' ) | ( 'down' ) | ( 'left' ) | ( 'right' ) );
    public final void rule__StrongRel__Alternatives_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:805:1: ( ( 'up' ) | ( 'down' ) | ( 'left' ) | ( 'right' ) )
            int alt8=4;
            switch ( input.LA(1) ) {
            case 12:
                {
                alt8=1;
                }
                break;
            case 13:
                {
                alt8=2;
                }
                break;
            case 14:
                {
                alt8=3;
                }
                break;
            case 15:
                {
                alt8=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 8, 0, input);

                throw nvae;
            }

            switch (alt8) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:806:1: ( 'up' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:806:1: ( 'up' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:807:1: 'up'
                    {
                     before(grammarAccess.getStrongRelAccess().getUpKeyword_1_0()); 
                    match(input,12,FOLLOW_12_in_rule__StrongRel__Alternatives_11647); 
                     after(grammarAccess.getStrongRelAccess().getUpKeyword_1_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:814:6: ( 'down' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:814:6: ( 'down' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:815:1: 'down'
                    {
                     before(grammarAccess.getStrongRelAccess().getDownKeyword_1_1()); 
                    match(input,13,FOLLOW_13_in_rule__StrongRel__Alternatives_11667); 
                     after(grammarAccess.getStrongRelAccess().getDownKeyword_1_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:822:6: ( 'left' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:822:6: ( 'left' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:823:1: 'left'
                    {
                     before(grammarAccess.getStrongRelAccess().getLeftKeyword_1_2()); 
                    match(input,14,FOLLOW_14_in_rule__StrongRel__Alternatives_11687); 
                     after(grammarAccess.getStrongRelAccess().getLeftKeyword_1_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:830:6: ( 'right' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:830:6: ( 'right' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:831:1: 'right'
                    {
                     before(grammarAccess.getStrongRelAccess().getRightKeyword_1_3()); 
                    match(input,15,FOLLOW_15_in_rule__StrongRel__Alternatives_11707); 
                     after(grammarAccess.getStrongRelAccess().getRightKeyword_1_3()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__StrongRel__Alternatives_1"


    // $ANTLR start "rule__WeakRel__Alternatives_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:843:1: rule__WeakRel__Alternatives_1 : ( ( 'up' ) | ( 'down' ) | ( 'left' ) | ( 'right' ) );
    public final void rule__WeakRel__Alternatives_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:847:1: ( ( 'up' ) | ( 'down' ) | ( 'left' ) | ( 'right' ) )
            int alt9=4;
            switch ( input.LA(1) ) {
            case 12:
                {
                alt9=1;
                }
                break;
            case 13:
                {
                alt9=2;
                }
                break;
            case 14:
                {
                alt9=3;
                }
                break;
            case 15:
                {
                alt9=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 9, 0, input);

                throw nvae;
            }

            switch (alt9) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:848:1: ( 'up' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:848:1: ( 'up' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:849:1: 'up'
                    {
                     before(grammarAccess.getWeakRelAccess().getUpKeyword_1_0()); 
                    match(input,12,FOLLOW_12_in_rule__WeakRel__Alternatives_11742); 
                     after(grammarAccess.getWeakRelAccess().getUpKeyword_1_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:856:6: ( 'down' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:856:6: ( 'down' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:857:1: 'down'
                    {
                     before(grammarAccess.getWeakRelAccess().getDownKeyword_1_1()); 
                    match(input,13,FOLLOW_13_in_rule__WeakRel__Alternatives_11762); 
                     after(grammarAccess.getWeakRelAccess().getDownKeyword_1_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:864:6: ( 'left' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:864:6: ( 'left' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:865:1: 'left'
                    {
                     before(grammarAccess.getWeakRelAccess().getLeftKeyword_1_2()); 
                    match(input,14,FOLLOW_14_in_rule__WeakRel__Alternatives_11782); 
                     after(grammarAccess.getWeakRelAccess().getLeftKeyword_1_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:872:6: ( 'right' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:872:6: ( 'right' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:873:1: 'right'
                    {
                     before(grammarAccess.getWeakRelAccess().getRightKeyword_1_3()); 
                    match(input,15,FOLLOW_15_in_rule__WeakRel__Alternatives_11802); 
                     after(grammarAccess.getWeakRelAccess().getRightKeyword_1_3()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__WeakRel__Alternatives_1"


    // $ANTLR start "rule__Property__Alternatives_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:885:1: rule__Property__Alternatives_1 : ( ( ( rule__Property__Group_1_0__0 ) ) | ( ( rule__Property__Group_1_1__0 ) ) );
    public final void rule__Property__Alternatives_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:889:1: ( ( ( rule__Property__Group_1_0__0 ) ) | ( ( rule__Property__Group_1_1__0 ) ) )
            int alt10=2;
            int LA10_0 = input.LA(1);

            if ( (LA10_0==RULE_END_LINE||(LA10_0>=29 && LA10_0<=30)) ) {
                alt10=1;
            }
            else if ( (LA10_0==54) ) {
                alt10=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 10, 0, input);

                throw nvae;
            }
            switch (alt10) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:890:1: ( ( rule__Property__Group_1_0__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:890:1: ( ( rule__Property__Group_1_0__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:891:1: ( rule__Property__Group_1_0__0 )
                    {
                     before(grammarAccess.getPropertyAccess().getGroup_1_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:892:1: ( rule__Property__Group_1_0__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:892:2: rule__Property__Group_1_0__0
                    {
                    pushFollow(FOLLOW_rule__Property__Group_1_0__0_in_rule__Property__Alternatives_11836);
                    rule__Property__Group_1_0__0();

                    state._fsp--;


                    }

                     after(grammarAccess.getPropertyAccess().getGroup_1_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:896:6: ( ( rule__Property__Group_1_1__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:896:6: ( ( rule__Property__Group_1_1__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:897:1: ( rule__Property__Group_1_1__0 )
                    {
                     before(grammarAccess.getPropertyAccess().getGroup_1_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:898:1: ( rule__Property__Group_1_1__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:898:2: rule__Property__Group_1_1__0
                    {
                    pushFollow(FOLLOW_rule__Property__Group_1_1__0_in_rule__Property__Alternatives_11854);
                    rule__Property__Group_1_1__0();

                    state._fsp--;


                    }

                     after(grammarAccess.getPropertyAccess().getGroup_1_1()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Alternatives_1"


    // $ANTLR start "rule__Property__Alternatives_1_0_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:907:1: rule__Property__Alternatives_1_0_1_1 : ( ( ( rule__Property__TypeAssignment_1_0_1_1_0 ) ) | ( ( rule__Property__EntityAssignment_1_0_1_1_1 ) ) | ( ( rule__Property__EntityListAssignment_1_0_1_1_2 ) ) );
    public final void rule__Property__Alternatives_1_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:911:1: ( ( ( rule__Property__TypeAssignment_1_0_1_1_0 ) ) | ( ( rule__Property__EntityAssignment_1_0_1_1_1 ) ) | ( ( rule__Property__EntityListAssignment_1_0_1_1_2 ) ) )
            int alt11=3;
            switch ( input.LA(1) ) {
            case 19:
            case 20:
            case 21:
            case 22:
                {
                alt11=1;
                }
                break;
            case RULE_ID:
                {
                alt11=2;
                }
                break;
            case 48:
                {
                alt11=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 11, 0, input);

                throw nvae;
            }

            switch (alt11) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:912:1: ( ( rule__Property__TypeAssignment_1_0_1_1_0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:912:1: ( ( rule__Property__TypeAssignment_1_0_1_1_0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:913:1: ( rule__Property__TypeAssignment_1_0_1_1_0 )
                    {
                     before(grammarAccess.getPropertyAccess().getTypeAssignment_1_0_1_1_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:914:1: ( rule__Property__TypeAssignment_1_0_1_1_0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:914:2: rule__Property__TypeAssignment_1_0_1_1_0
                    {
                    pushFollow(FOLLOW_rule__Property__TypeAssignment_1_0_1_1_0_in_rule__Property__Alternatives_1_0_1_11887);
                    rule__Property__TypeAssignment_1_0_1_1_0();

                    state._fsp--;


                    }

                     after(grammarAccess.getPropertyAccess().getTypeAssignment_1_0_1_1_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:918:6: ( ( rule__Property__EntityAssignment_1_0_1_1_1 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:918:6: ( ( rule__Property__EntityAssignment_1_0_1_1_1 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:919:1: ( rule__Property__EntityAssignment_1_0_1_1_1 )
                    {
                     before(grammarAccess.getPropertyAccess().getEntityAssignment_1_0_1_1_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:920:1: ( rule__Property__EntityAssignment_1_0_1_1_1 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:920:2: rule__Property__EntityAssignment_1_0_1_1_1
                    {
                    pushFollow(FOLLOW_rule__Property__EntityAssignment_1_0_1_1_1_in_rule__Property__Alternatives_1_0_1_11905);
                    rule__Property__EntityAssignment_1_0_1_1_1();

                    state._fsp--;


                    }

                     after(grammarAccess.getPropertyAccess().getEntityAssignment_1_0_1_1_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:924:6: ( ( rule__Property__EntityListAssignment_1_0_1_1_2 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:924:6: ( ( rule__Property__EntityListAssignment_1_0_1_1_2 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:925:1: ( rule__Property__EntityListAssignment_1_0_1_1_2 )
                    {
                     before(grammarAccess.getPropertyAccess().getEntityListAssignment_1_0_1_1_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:926:1: ( rule__Property__EntityListAssignment_1_0_1_1_2 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:926:2: rule__Property__EntityListAssignment_1_0_1_1_2
                    {
                    pushFollow(FOLLOW_rule__Property__EntityListAssignment_1_0_1_1_2_in_rule__Property__Alternatives_1_0_1_11923);
                    rule__Property__EntityListAssignment_1_0_1_1_2();

                    state._fsp--;


                    }

                     after(grammarAccess.getPropertyAccess().getEntityListAssignment_1_0_1_1_2()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Alternatives_1_0_1_1"


    // $ANTLR start "rule__Note__Alternatives_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:935:1: rule__Note__Alternatives_1 : ( ( ( rule__Note__Alternatives_1_0 ) ) | ( ( rule__Note__Group_1_1__0 ) ) );
    public final void rule__Note__Alternatives_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:939:1: ( ( ( rule__Note__Alternatives_1_0 ) ) | ( ( rule__Note__Group_1_1__0 ) ) )
            int alt12=2;
            int LA12_0 = input.LA(1);

            if ( ((LA12_0>=14 && LA12_0<=17)||LA12_0==28) ) {
                alt12=1;
            }
            else if ( (LA12_0==27) ) {
                alt12=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 12, 0, input);

                throw nvae;
            }
            switch (alt12) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:940:1: ( ( rule__Note__Alternatives_1_0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:940:1: ( ( rule__Note__Alternatives_1_0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:941:1: ( rule__Note__Alternatives_1_0 )
                    {
                     before(grammarAccess.getNoteAccess().getAlternatives_1_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:942:1: ( rule__Note__Alternatives_1_0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:942:2: rule__Note__Alternatives_1_0
                    {
                    pushFollow(FOLLOW_rule__Note__Alternatives_1_0_in_rule__Note__Alternatives_11956);
                    rule__Note__Alternatives_1_0();

                    state._fsp--;


                    }

                     after(grammarAccess.getNoteAccess().getAlternatives_1_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:946:6: ( ( rule__Note__Group_1_1__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:946:6: ( ( rule__Note__Group_1_1__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:947:1: ( rule__Note__Group_1_1__0 )
                    {
                     before(grammarAccess.getNoteAccess().getGroup_1_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:948:1: ( rule__Note__Group_1_1__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:948:2: rule__Note__Group_1_1__0
                    {
                    pushFollow(FOLLOW_rule__Note__Group_1_1__0_in_rule__Note__Alternatives_11974);
                    rule__Note__Group_1_1__0();

                    state._fsp--;


                    }

                     after(grammarAccess.getNoteAccess().getGroup_1_1()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Alternatives_1"


    // $ANTLR start "rule__Note__Alternatives_1_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:957:1: rule__Note__Alternatives_1_0 : ( ( ( rule__Note__Group_1_0_0__0 ) ) | ( ( rule__Note__Group_1_0_1__0 ) ) );
    public final void rule__Note__Alternatives_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:961:1: ( ( ( rule__Note__Group_1_0_0__0 ) ) | ( ( rule__Note__Group_1_0_1__0 ) ) )
            int alt13=2;
            int LA13_0 = input.LA(1);

            if ( ((LA13_0>=14 && LA13_0<=17)) ) {
                alt13=1;
            }
            else if ( (LA13_0==28) ) {
                alt13=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 13, 0, input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:962:1: ( ( rule__Note__Group_1_0_0__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:962:1: ( ( rule__Note__Group_1_0_0__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:963:1: ( rule__Note__Group_1_0_0__0 )
                    {
                     before(grammarAccess.getNoteAccess().getGroup_1_0_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:964:1: ( rule__Note__Group_1_0_0__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:964:2: rule__Note__Group_1_0_0__0
                    {
                    pushFollow(FOLLOW_rule__Note__Group_1_0_0__0_in_rule__Note__Alternatives_1_02007);
                    rule__Note__Group_1_0_0__0();

                    state._fsp--;


                    }

                     after(grammarAccess.getNoteAccess().getGroup_1_0_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:968:6: ( ( rule__Note__Group_1_0_1__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:968:6: ( ( rule__Note__Group_1_0_1__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:969:1: ( rule__Note__Group_1_0_1__0 )
                    {
                     before(grammarAccess.getNoteAccess().getGroup_1_0_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:970:1: ( rule__Note__Group_1_0_1__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:970:2: rule__Note__Group_1_0_1__0
                    {
                    pushFollow(FOLLOW_rule__Note__Group_1_0_1__0_in_rule__Note__Alternatives_1_02025);
                    rule__Note__Group_1_0_1__0();

                    state._fsp--;


                    }

                     after(grammarAccess.getNoteAccess().getGroup_1_0_1()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Alternatives_1_0"


    // $ANTLR start "rule__Text__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:979:1: rule__Text__Alternatives : ( ( RULE_ID ) | ( RULE_STRING ) | ( RULE_ANY_OTHER ) | ( 'up' ) | ( 'down' ) | ( 'top' ) | ( 'bottom' ) | ( 'left' ) | ( 'right' ) | ( 'null' ) | ( 'string' ) | ( 'number' ) | ( 'integer' ) | ( 'boolean' ) | ( 'package' ) | ( 'class' ) | ( 'enum' ) | ( 'note' ) | ( 'as' ) | ( 'of' ) | ( ':' ) | ( '?' ) );
    public final void rule__Text__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:983:1: ( ( RULE_ID ) | ( RULE_STRING ) | ( RULE_ANY_OTHER ) | ( 'up' ) | ( 'down' ) | ( 'top' ) | ( 'bottom' ) | ( 'left' ) | ( 'right' ) | ( 'null' ) | ( 'string' ) | ( 'number' ) | ( 'integer' ) | ( 'boolean' ) | ( 'package' ) | ( 'class' ) | ( 'enum' ) | ( 'note' ) | ( 'as' ) | ( 'of' ) | ( ':' ) | ( '?' ) )
            int alt14=22;
            switch ( input.LA(1) ) {
            case RULE_ID:
                {
                alt14=1;
                }
                break;
            case RULE_STRING:
                {
                alt14=2;
                }
                break;
            case RULE_ANY_OTHER:
                {
                alt14=3;
                }
                break;
            case 12:
                {
                alt14=4;
                }
                break;
            case 13:
                {
                alt14=5;
                }
                break;
            case 16:
                {
                alt14=6;
                }
                break;
            case 17:
                {
                alt14=7;
                }
                break;
            case 14:
                {
                alt14=8;
                }
                break;
            case 15:
                {
                alt14=9;
                }
                break;
            case 18:
                {
                alt14=10;
                }
                break;
            case 19:
                {
                alt14=11;
                }
                break;
            case 20:
                {
                alt14=12;
                }
                break;
            case 21:
                {
                alt14=13;
                }
                break;
            case 22:
                {
                alt14=14;
                }
                break;
            case 23:
                {
                alt14=15;
                }
                break;
            case 24:
                {
                alt14=16;
                }
                break;
            case 25:
                {
                alt14=17;
                }
                break;
            case 26:
                {
                alt14=18;
                }
                break;
            case 27:
                {
                alt14=19;
                }
                break;
            case 28:
                {
                alt14=20;
                }
                break;
            case 29:
                {
                alt14=21;
                }
                break;
            case 30:
                {
                alt14=22;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 14, 0, input);

                throw nvae;
            }

            switch (alt14) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:984:1: ( RULE_ID )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:984:1: ( RULE_ID )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:985:1: RULE_ID
                    {
                     before(grammarAccess.getTextAccess().getIDTerminalRuleCall_0()); 
                    match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Text__Alternatives2058); 
                     after(grammarAccess.getTextAccess().getIDTerminalRuleCall_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:990:6: ( RULE_STRING )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:990:6: ( RULE_STRING )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:991:1: RULE_STRING
                    {
                     before(grammarAccess.getTextAccess().getSTRINGTerminalRuleCall_1()); 
                    match(input,RULE_STRING,FOLLOW_RULE_STRING_in_rule__Text__Alternatives2075); 
                     after(grammarAccess.getTextAccess().getSTRINGTerminalRuleCall_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:996:6: ( RULE_ANY_OTHER )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:996:6: ( RULE_ANY_OTHER )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:997:1: RULE_ANY_OTHER
                    {
                     before(grammarAccess.getTextAccess().getANY_OTHERTerminalRuleCall_2()); 
                    match(input,RULE_ANY_OTHER,FOLLOW_RULE_ANY_OTHER_in_rule__Text__Alternatives2092); 
                     after(grammarAccess.getTextAccess().getANY_OTHERTerminalRuleCall_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1002:6: ( 'up' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1002:6: ( 'up' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1003:1: 'up'
                    {
                     before(grammarAccess.getTextAccess().getUpKeyword_3()); 
                    match(input,12,FOLLOW_12_in_rule__Text__Alternatives2110); 
                     after(grammarAccess.getTextAccess().getUpKeyword_3()); 

                    }


                    }
                    break;
                case 5 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1010:6: ( 'down' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1010:6: ( 'down' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1011:1: 'down'
                    {
                     before(grammarAccess.getTextAccess().getDownKeyword_4()); 
                    match(input,13,FOLLOW_13_in_rule__Text__Alternatives2130); 
                     after(grammarAccess.getTextAccess().getDownKeyword_4()); 

                    }


                    }
                    break;
                case 6 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1018:6: ( 'top' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1018:6: ( 'top' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1019:1: 'top'
                    {
                     before(grammarAccess.getTextAccess().getTopKeyword_5()); 
                    match(input,16,FOLLOW_16_in_rule__Text__Alternatives2150); 
                     after(grammarAccess.getTextAccess().getTopKeyword_5()); 

                    }


                    }
                    break;
                case 7 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1026:6: ( 'bottom' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1026:6: ( 'bottom' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1027:1: 'bottom'
                    {
                     before(grammarAccess.getTextAccess().getBottomKeyword_6()); 
                    match(input,17,FOLLOW_17_in_rule__Text__Alternatives2170); 
                     after(grammarAccess.getTextAccess().getBottomKeyword_6()); 

                    }


                    }
                    break;
                case 8 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1034:6: ( 'left' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1034:6: ( 'left' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1035:1: 'left'
                    {
                     before(grammarAccess.getTextAccess().getLeftKeyword_7()); 
                    match(input,14,FOLLOW_14_in_rule__Text__Alternatives2190); 
                     after(grammarAccess.getTextAccess().getLeftKeyword_7()); 

                    }


                    }
                    break;
                case 9 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1042:6: ( 'right' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1042:6: ( 'right' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1043:1: 'right'
                    {
                     before(grammarAccess.getTextAccess().getRightKeyword_8()); 
                    match(input,15,FOLLOW_15_in_rule__Text__Alternatives2210); 
                     after(grammarAccess.getTextAccess().getRightKeyword_8()); 

                    }


                    }
                    break;
                case 10 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1050:6: ( 'null' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1050:6: ( 'null' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1051:1: 'null'
                    {
                     before(grammarAccess.getTextAccess().getNullKeyword_9()); 
                    match(input,18,FOLLOW_18_in_rule__Text__Alternatives2230); 
                     after(grammarAccess.getTextAccess().getNullKeyword_9()); 

                    }


                    }
                    break;
                case 11 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1058:6: ( 'string' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1058:6: ( 'string' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1059:1: 'string'
                    {
                     before(grammarAccess.getTextAccess().getStringKeyword_10()); 
                    match(input,19,FOLLOW_19_in_rule__Text__Alternatives2250); 
                     after(grammarAccess.getTextAccess().getStringKeyword_10()); 

                    }


                    }
                    break;
                case 12 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1066:6: ( 'number' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1066:6: ( 'number' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1067:1: 'number'
                    {
                     before(grammarAccess.getTextAccess().getNumberKeyword_11()); 
                    match(input,20,FOLLOW_20_in_rule__Text__Alternatives2270); 
                     after(grammarAccess.getTextAccess().getNumberKeyword_11()); 

                    }


                    }
                    break;
                case 13 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1074:6: ( 'integer' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1074:6: ( 'integer' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1075:1: 'integer'
                    {
                     before(grammarAccess.getTextAccess().getIntegerKeyword_12()); 
                    match(input,21,FOLLOW_21_in_rule__Text__Alternatives2290); 
                     after(grammarAccess.getTextAccess().getIntegerKeyword_12()); 

                    }


                    }
                    break;
                case 14 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1082:6: ( 'boolean' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1082:6: ( 'boolean' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1083:1: 'boolean'
                    {
                     before(grammarAccess.getTextAccess().getBooleanKeyword_13()); 
                    match(input,22,FOLLOW_22_in_rule__Text__Alternatives2310); 
                     after(grammarAccess.getTextAccess().getBooleanKeyword_13()); 

                    }


                    }
                    break;
                case 15 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1090:6: ( 'package' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1090:6: ( 'package' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1091:1: 'package'
                    {
                     before(grammarAccess.getTextAccess().getPackageKeyword_14()); 
                    match(input,23,FOLLOW_23_in_rule__Text__Alternatives2330); 
                     after(grammarAccess.getTextAccess().getPackageKeyword_14()); 

                    }


                    }
                    break;
                case 16 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1098:6: ( 'class' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1098:6: ( 'class' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1099:1: 'class'
                    {
                     before(grammarAccess.getTextAccess().getClassKeyword_15()); 
                    match(input,24,FOLLOW_24_in_rule__Text__Alternatives2350); 
                     after(grammarAccess.getTextAccess().getClassKeyword_15()); 

                    }


                    }
                    break;
                case 17 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1106:6: ( 'enum' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1106:6: ( 'enum' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1107:1: 'enum'
                    {
                     before(grammarAccess.getTextAccess().getEnumKeyword_16()); 
                    match(input,25,FOLLOW_25_in_rule__Text__Alternatives2370); 
                     after(grammarAccess.getTextAccess().getEnumKeyword_16()); 

                    }


                    }
                    break;
                case 18 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1114:6: ( 'note' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1114:6: ( 'note' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1115:1: 'note'
                    {
                     before(grammarAccess.getTextAccess().getNoteKeyword_17()); 
                    match(input,26,FOLLOW_26_in_rule__Text__Alternatives2390); 
                     after(grammarAccess.getTextAccess().getNoteKeyword_17()); 

                    }


                    }
                    break;
                case 19 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1122:6: ( 'as' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1122:6: ( 'as' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1123:1: 'as'
                    {
                     before(grammarAccess.getTextAccess().getAsKeyword_18()); 
                    match(input,27,FOLLOW_27_in_rule__Text__Alternatives2410); 
                     after(grammarAccess.getTextAccess().getAsKeyword_18()); 

                    }


                    }
                    break;
                case 20 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1130:6: ( 'of' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1130:6: ( 'of' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1131:1: 'of'
                    {
                     before(grammarAccess.getTextAccess().getOfKeyword_19()); 
                    match(input,28,FOLLOW_28_in_rule__Text__Alternatives2430); 
                     after(grammarAccess.getTextAccess().getOfKeyword_19()); 

                    }


                    }
                    break;
                case 21 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1138:6: ( ':' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1138:6: ( ':' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1139:1: ':'
                    {
                     before(grammarAccess.getTextAccess().getColonKeyword_20()); 
                    match(input,29,FOLLOW_29_in_rule__Text__Alternatives2450); 
                     after(grammarAccess.getTextAccess().getColonKeyword_20()); 

                    }


                    }
                    break;
                case 22 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1146:6: ( '?' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1146:6: ( '?' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1147:1: '?'
                    {
                     before(grammarAccess.getTextAccess().getQuestionMarkKeyword_21()); 
                    match(input,30,FOLLOW_30_in_rule__Text__Alternatives2470); 
                     after(grammarAccess.getTextAccess().getQuestionMarkKeyword_21()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Text__Alternatives"


    // $ANTLR start "rule__PackageStyle__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1159:1: rule__PackageStyle__Alternatives : ( ( ( 'Node' ) ) | ( ( 'Rect' ) ) | ( ( 'Folder' ) ) | ( ( 'Frame' ) ) | ( ( 'Cloud' ) ) | ( ( 'Database' ) ) );
    public final void rule__PackageStyle__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1163:1: ( ( ( 'Node' ) ) | ( ( 'Rect' ) ) | ( ( 'Folder' ) ) | ( ( 'Frame' ) ) | ( ( 'Cloud' ) ) | ( ( 'Database' ) ) )
            int alt15=6;
            switch ( input.LA(1) ) {
            case 31:
                {
                alt15=1;
                }
                break;
            case 32:
                {
                alt15=2;
                }
                break;
            case 33:
                {
                alt15=3;
                }
                break;
            case 34:
                {
                alt15=4;
                }
                break;
            case 35:
                {
                alt15=5;
                }
                break;
            case 36:
                {
                alt15=6;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 15, 0, input);

                throw nvae;
            }

            switch (alt15) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1164:1: ( ( 'Node' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1164:1: ( ( 'Node' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1165:1: ( 'Node' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getNodeEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1166:1: ( 'Node' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1166:3: 'Node'
                    {
                    match(input,31,FOLLOW_31_in_rule__PackageStyle__Alternatives2505); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getNodeEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1171:6: ( ( 'Rect' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1171:6: ( ( 'Rect' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1172:1: ( 'Rect' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getRectEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1173:1: ( 'Rect' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1173:3: 'Rect'
                    {
                    match(input,32,FOLLOW_32_in_rule__PackageStyle__Alternatives2526); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getRectEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1178:6: ( ( 'Folder' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1178:6: ( ( 'Folder' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1179:1: ( 'Folder' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getFolderEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1180:1: ( 'Folder' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1180:3: 'Folder'
                    {
                    match(input,33,FOLLOW_33_in_rule__PackageStyle__Alternatives2547); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getFolderEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1185:6: ( ( 'Frame' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1185:6: ( ( 'Frame' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1186:1: ( 'Frame' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getFrameEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1187:1: ( 'Frame' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1187:3: 'Frame'
                    {
                    match(input,34,FOLLOW_34_in_rule__PackageStyle__Alternatives2568); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getFrameEnumLiteralDeclaration_3()); 

                    }


                    }
                    break;
                case 5 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1192:6: ( ( 'Cloud' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1192:6: ( ( 'Cloud' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1193:1: ( 'Cloud' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getCloudEnumLiteralDeclaration_4()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1194:1: ( 'Cloud' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1194:3: 'Cloud'
                    {
                    match(input,35,FOLLOW_35_in_rule__PackageStyle__Alternatives2589); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getCloudEnumLiteralDeclaration_4()); 

                    }


                    }
                    break;
                case 6 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1199:6: ( ( 'Database' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1199:6: ( ( 'Database' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1200:1: ( 'Database' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getDatabaseEnumLiteralDeclaration_5()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1201:1: ( 'Database' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1201:3: 'Database'
                    {
                    match(input,36,FOLLOW_36_in_rule__PackageStyle__Alternatives2610); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getDatabaseEnumLiteralDeclaration_5()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__PackageStyle__Alternatives"


    // $ANTLR start "rule__CompType__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1211:1: rule__CompType__Alternatives : ( ( ( 'none' ) ) | ( ( '*' ) ) | ( ( 'o' ) ) );
    public final void rule__CompType__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1215:1: ( ( ( 'none' ) ) | ( ( '*' ) ) | ( ( 'o' ) ) )
            int alt16=3;
            switch ( input.LA(1) ) {
            case 37:
                {
                alt16=1;
                }
                break;
            case 38:
                {
                alt16=2;
                }
                break;
            case 39:
                {
                alt16=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 16, 0, input);

                throw nvae;
            }

            switch (alt16) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1216:1: ( ( 'none' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1216:1: ( ( 'none' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1217:1: ( 'none' )
                    {
                     before(grammarAccess.getCompTypeAccess().getNoneEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1218:1: ( 'none' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1218:3: 'none'
                    {
                    match(input,37,FOLLOW_37_in_rule__CompType__Alternatives2646); 

                    }

                     after(grammarAccess.getCompTypeAccess().getNoneEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1223:6: ( ( '*' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1223:6: ( ( '*' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1224:1: ( '*' )
                    {
                     before(grammarAccess.getCompTypeAccess().getCompEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1225:1: ( '*' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1225:3: '*'
                    {
                    match(input,38,FOLLOW_38_in_rule__CompType__Alternatives2667); 

                    }

                     after(grammarAccess.getCompTypeAccess().getCompEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1230:6: ( ( 'o' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1230:6: ( ( 'o' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1231:1: ( 'o' )
                    {
                     before(grammarAccess.getCompTypeAccess().getAgreEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1232:1: ( 'o' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1232:3: 'o'
                    {
                    match(input,39,FOLLOW_39_in_rule__CompType__Alternatives2688); 

                    }

                     after(grammarAccess.getCompTypeAccess().getAgreEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CompType__Alternatives"


    // $ANTLR start "rule__NotePosition__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1242:1: rule__NotePosition__Alternatives : ( ( ( 'top' ) ) | ( ( 'bottom' ) ) | ( ( 'left' ) ) | ( ( 'right' ) ) );
    public final void rule__NotePosition__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1246:1: ( ( ( 'top' ) ) | ( ( 'bottom' ) ) | ( ( 'left' ) ) | ( ( 'right' ) ) )
            int alt17=4;
            switch ( input.LA(1) ) {
            case 16:
                {
                alt17=1;
                }
                break;
            case 17:
                {
                alt17=2;
                }
                break;
            case 14:
                {
                alt17=3;
                }
                break;
            case 15:
                {
                alt17=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 17, 0, input);

                throw nvae;
            }

            switch (alt17) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1247:1: ( ( 'top' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1247:1: ( ( 'top' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1248:1: ( 'top' )
                    {
                     before(grammarAccess.getNotePositionAccess().getTopEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1249:1: ( 'top' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1249:3: 'top'
                    {
                    match(input,16,FOLLOW_16_in_rule__NotePosition__Alternatives2724); 

                    }

                     after(grammarAccess.getNotePositionAccess().getTopEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1254:6: ( ( 'bottom' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1254:6: ( ( 'bottom' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1255:1: ( 'bottom' )
                    {
                     before(grammarAccess.getNotePositionAccess().getBottomEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1256:1: ( 'bottom' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1256:3: 'bottom'
                    {
                    match(input,17,FOLLOW_17_in_rule__NotePosition__Alternatives2745); 

                    }

                     after(grammarAccess.getNotePositionAccess().getBottomEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1261:6: ( ( 'left' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1261:6: ( ( 'left' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1262:1: ( 'left' )
                    {
                     before(grammarAccess.getNotePositionAccess().getLeftEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1263:1: ( 'left' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1263:3: 'left'
                    {
                    match(input,14,FOLLOW_14_in_rule__NotePosition__Alternatives2766); 

                    }

                     after(grammarAccess.getNotePositionAccess().getLeftEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1268:6: ( ( 'right' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1268:6: ( ( 'right' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1269:1: ( 'right' )
                    {
                     before(grammarAccess.getNotePositionAccess().getRightEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1270:1: ( 'right' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1270:3: 'right'
                    {
                    match(input,15,FOLLOW_15_in_rule__NotePosition__Alternatives2787); 

                    }

                     after(grammarAccess.getNotePositionAccess().getRightEnumLiteralDeclaration_3()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__NotePosition__Alternatives"


    // $ANTLR start "rule__NativeType__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1280:1: rule__NativeType__Alternatives : ( ( ( 'string' ) ) | ( ( 'number' ) ) | ( ( 'integer' ) ) | ( ( 'boolean' ) ) );
    public final void rule__NativeType__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1284:1: ( ( ( 'string' ) ) | ( ( 'number' ) ) | ( ( 'integer' ) ) | ( ( 'boolean' ) ) )
            int alt18=4;
            switch ( input.LA(1) ) {
            case 19:
                {
                alt18=1;
                }
                break;
            case 20:
                {
                alt18=2;
                }
                break;
            case 21:
                {
                alt18=3;
                }
                break;
            case 22:
                {
                alt18=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 18, 0, input);

                throw nvae;
            }

            switch (alt18) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1285:1: ( ( 'string' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1285:1: ( ( 'string' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1286:1: ( 'string' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getStringEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1287:1: ( 'string' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1287:3: 'string'
                    {
                    match(input,19,FOLLOW_19_in_rule__NativeType__Alternatives2823); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getStringEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1292:6: ( ( 'number' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1292:6: ( ( 'number' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1293:1: ( 'number' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getNumberEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1294:1: ( 'number' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1294:3: 'number'
                    {
                    match(input,20,FOLLOW_20_in_rule__NativeType__Alternatives2844); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getNumberEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1299:6: ( ( 'integer' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1299:6: ( ( 'integer' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1300:1: ( 'integer' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getIntegerEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1301:1: ( 'integer' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1301:3: 'integer'
                    {
                    match(input,21,FOLLOW_21_in_rule__NativeType__Alternatives2865); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getIntegerEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1306:6: ( ( 'boolean' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1306:6: ( ( 'boolean' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1307:1: ( 'boolean' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getBooleanEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1308:1: ( 'boolean' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1308:3: 'boolean'
                    {
                    match(input,22,FOLLOW_22_in_rule__NativeType__Alternatives2886); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getBooleanEnumLiteralDeclaration_3()); 

                    }


                    }
                    break;

            }
        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__NativeType__Alternatives"


    // $ANTLR start "rule__DomainModel__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1320:1: rule__DomainModel__Group__0 : rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1 ;
    public final void rule__DomainModel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1324:1: ( rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1325:2: rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__0__Impl_in_rule__DomainModel__Group__02919);
            rule__DomainModel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__1_in_rule__DomainModel__Group__02922);
            rule__DomainModel__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__0"


    // $ANTLR start "rule__DomainModel__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1332:1: rule__DomainModel__Group__0__Impl : ( '@startuml' ) ;
    public final void rule__DomainModel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1336:1: ( ( '@startuml' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1337:1: ( '@startuml' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1337:1: ( '@startuml' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1338:1: '@startuml'
            {
             before(grammarAccess.getDomainModelAccess().getStartumlKeyword_0()); 
            match(input,40,FOLLOW_40_in_rule__DomainModel__Group__0__Impl2950); 
             after(grammarAccess.getDomainModelAccess().getStartumlKeyword_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__0__Impl"


    // $ANTLR start "rule__DomainModel__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1351:1: rule__DomainModel__Group__1 : rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2 ;
    public final void rule__DomainModel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1355:1: ( rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1356:2: rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__1__Impl_in_rule__DomainModel__Group__12981);
            rule__DomainModel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__2_in_rule__DomainModel__Group__12984);
            rule__DomainModel__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__1"


    // $ANTLR start "rule__DomainModel__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1363:1: rule__DomainModel__Group__1__Impl : ( () ) ;
    public final void rule__DomainModel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1367:1: ( ( () ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1368:1: ( () )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1368:1: ( () )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1369:1: ()
            {
             before(grammarAccess.getDomainModelAccess().getDomainModelAction_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1370:1: ()
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1372:1: 
            {
            }

             after(grammarAccess.getDomainModelAccess().getDomainModelAction_1()); 

            }


            }

        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__1__Impl"


    // $ANTLR start "rule__DomainModel__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1382:1: rule__DomainModel__Group__2 : rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3 ;
    public final void rule__DomainModel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1386:1: ( rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1387:2: rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__2__Impl_in_rule__DomainModel__Group__23042);
            rule__DomainModel__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__3_in_rule__DomainModel__Group__23045);
            rule__DomainModel__Group__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__2"


    // $ANTLR start "rule__DomainModel__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1394:1: rule__DomainModel__Group__2__Impl : ( ( rule__DomainModel__FileAssignment_2 )? ) ;
    public final void rule__DomainModel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1398:1: ( ( ( rule__DomainModel__FileAssignment_2 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1399:1: ( ( rule__DomainModel__FileAssignment_2 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1399:1: ( ( rule__DomainModel__FileAssignment_2 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1400:1: ( rule__DomainModel__FileAssignment_2 )?
            {
             before(grammarAccess.getDomainModelAccess().getFileAssignment_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1401:1: ( rule__DomainModel__FileAssignment_2 )?
            int alt19=2;
            int LA19_0 = input.LA(1);

            if ( (LA19_0==RULE_STRING) ) {
                alt19=1;
            }
            switch (alt19) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1401:2: rule__DomainModel__FileAssignment_2
                    {
                    pushFollow(FOLLOW_rule__DomainModel__FileAssignment_2_in_rule__DomainModel__Group__2__Impl3072);
                    rule__DomainModel__FileAssignment_2();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getDomainModelAccess().getFileAssignment_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__2__Impl"


    // $ANTLR start "rule__DomainModel__Group__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1411:1: rule__DomainModel__Group__3 : rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4 ;
    public final void rule__DomainModel__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1415:1: ( rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1416:2: rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__3__Impl_in_rule__DomainModel__Group__33103);
            rule__DomainModel__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__4_in_rule__DomainModel__Group__33106);
            rule__DomainModel__Group__4();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__3"


    // $ANTLR start "rule__DomainModel__Group__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1423:1: rule__DomainModel__Group__3__Impl : ( RULE_END_LINE ) ;
    public final void rule__DomainModel__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1427:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1428:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1428:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1429:1: RULE_END_LINE
            {
             before(grammarAccess.getDomainModelAccess().getEND_LINETerminalRuleCall_3()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__DomainModel__Group__3__Impl3133); 
             after(grammarAccess.getDomainModelAccess().getEND_LINETerminalRuleCall_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__3__Impl"


    // $ANTLR start "rule__DomainModel__Group__4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1440:1: rule__DomainModel__Group__4 : rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5 ;
    public final void rule__DomainModel__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1444:1: ( rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1445:2: rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__4__Impl_in_rule__DomainModel__Group__43162);
            rule__DomainModel__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__5_in_rule__DomainModel__Group__43165);
            rule__DomainModel__Group__5();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__4"


    // $ANTLR start "rule__DomainModel__Group__4__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1452:1: rule__DomainModel__Group__4__Impl : ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) ) ;
    public final void rule__DomainModel__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1456:1: ( ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1457:1: ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1457:1: ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1458:1: ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1458:1: ( ( rule__DomainModel__PackagesAssignment_4 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1459:1: ( rule__DomainModel__PackagesAssignment_4 )
            {
             before(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1460:1: ( rule__DomainModel__PackagesAssignment_4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1460:2: rule__DomainModel__PackagesAssignment_4
            {
            pushFollow(FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3194);
            rule__DomainModel__PackagesAssignment_4();

            state._fsp--;


            }

             after(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1463:1: ( ( rule__DomainModel__PackagesAssignment_4 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1464:1: ( rule__DomainModel__PackagesAssignment_4 )*
            {
             before(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1465:1: ( rule__DomainModel__PackagesAssignment_4 )*
            loop20:
            do {
                int alt20=2;
                int LA20_0 = input.LA(1);

                if ( (LA20_0==23) ) {
                    alt20=1;
                }


                switch (alt20) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1465:2: rule__DomainModel__PackagesAssignment_4
            	    {
            	    pushFollow(FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3206);
            	    rule__DomainModel__PackagesAssignment_4();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop20;
                }
            } while (true);

             after(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 

            }


            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__4__Impl"


    // $ANTLR start "rule__DomainModel__Group__5"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1476:1: rule__DomainModel__Group__5 : rule__DomainModel__Group__5__Impl ;
    public final void rule__DomainModel__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1480:1: ( rule__DomainModel__Group__5__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1481:2: rule__DomainModel__Group__5__Impl
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__5__Impl_in_rule__DomainModel__Group__53239);
            rule__DomainModel__Group__5__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__5"


    // $ANTLR start "rule__DomainModel__Group__5__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1487:1: rule__DomainModel__Group__5__Impl : ( '@enduml' ) ;
    public final void rule__DomainModel__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1491:1: ( ( '@enduml' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1492:1: ( '@enduml' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1492:1: ( '@enduml' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1493:1: '@enduml'
            {
             before(grammarAccess.getDomainModelAccess().getEndumlKeyword_5()); 
            match(input,41,FOLLOW_41_in_rule__DomainModel__Group__5__Impl3267); 
             after(grammarAccess.getDomainModelAccess().getEndumlKeyword_5()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__Group__5__Impl"


    // $ANTLR start "rule__CPackage__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1518:1: rule__CPackage__Group__0 : rule__CPackage__Group__0__Impl rule__CPackage__Group__1 ;
    public final void rule__CPackage__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1522:1: ( rule__CPackage__Group__0__Impl rule__CPackage__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1523:2: rule__CPackage__Group__0__Impl rule__CPackage__Group__1
            {
            pushFollow(FOLLOW_rule__CPackage__Group__0__Impl_in_rule__CPackage__Group__03310);
            rule__CPackage__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__1_in_rule__CPackage__Group__03313);
            rule__CPackage__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__0"


    // $ANTLR start "rule__CPackage__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1530:1: rule__CPackage__Group__0__Impl : ( 'package' ) ;
    public final void rule__CPackage__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1534:1: ( ( 'package' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1535:1: ( 'package' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1535:1: ( 'package' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1536:1: 'package'
            {
             before(grammarAccess.getCPackageAccess().getPackageKeyword_0()); 
            match(input,23,FOLLOW_23_in_rule__CPackage__Group__0__Impl3341); 
             after(grammarAccess.getCPackageAccess().getPackageKeyword_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__0__Impl"


    // $ANTLR start "rule__CPackage__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1549:1: rule__CPackage__Group__1 : rule__CPackage__Group__1__Impl rule__CPackage__Group__2 ;
    public final void rule__CPackage__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1553:1: ( rule__CPackage__Group__1__Impl rule__CPackage__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1554:2: rule__CPackage__Group__1__Impl rule__CPackage__Group__2
            {
            pushFollow(FOLLOW_rule__CPackage__Group__1__Impl_in_rule__CPackage__Group__13372);
            rule__CPackage__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__2_in_rule__CPackage__Group__13375);
            rule__CPackage__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__1"


    // $ANTLR start "rule__CPackage__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1561:1: rule__CPackage__Group__1__Impl : ( ( rule__CPackage__NameAssignment_1 ) ) ;
    public final void rule__CPackage__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1565:1: ( ( ( rule__CPackage__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1566:1: ( ( rule__CPackage__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1566:1: ( ( rule__CPackage__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1567:1: ( rule__CPackage__NameAssignment_1 )
            {
             before(grammarAccess.getCPackageAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1568:1: ( rule__CPackage__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1568:2: rule__CPackage__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__CPackage__NameAssignment_1_in_rule__CPackage__Group__1__Impl3402);
            rule__CPackage__NameAssignment_1();

            state._fsp--;


            }

             after(grammarAccess.getCPackageAccess().getNameAssignment_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__1__Impl"


    // $ANTLR start "rule__CPackage__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1578:1: rule__CPackage__Group__2 : rule__CPackage__Group__2__Impl rule__CPackage__Group__3 ;
    public final void rule__CPackage__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1582:1: ( rule__CPackage__Group__2__Impl rule__CPackage__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1583:2: rule__CPackage__Group__2__Impl rule__CPackage__Group__3
            {
            pushFollow(FOLLOW_rule__CPackage__Group__2__Impl_in_rule__CPackage__Group__23432);
            rule__CPackage__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__3_in_rule__CPackage__Group__23435);
            rule__CPackage__Group__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__2"


    // $ANTLR start "rule__CPackage__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1590:1: rule__CPackage__Group__2__Impl : ( ( rule__CPackage__Group_2__0 )? ) ;
    public final void rule__CPackage__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1594:1: ( ( ( rule__CPackage__Group_2__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1595:1: ( ( rule__CPackage__Group_2__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1595:1: ( ( rule__CPackage__Group_2__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1596:1: ( rule__CPackage__Group_2__0 )?
            {
             before(grammarAccess.getCPackageAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1597:1: ( rule__CPackage__Group_2__0 )?
            int alt21=2;
            int LA21_0 = input.LA(1);

            if ( (LA21_0==44) ) {
                alt21=1;
            }
            switch (alt21) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1597:2: rule__CPackage__Group_2__0
                    {
                    pushFollow(FOLLOW_rule__CPackage__Group_2__0_in_rule__CPackage__Group__2__Impl3462);
                    rule__CPackage__Group_2__0();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getCPackageAccess().getGroup_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__2__Impl"


    // $ANTLR start "rule__CPackage__Group__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1607:1: rule__CPackage__Group__3 : rule__CPackage__Group__3__Impl rule__CPackage__Group__4 ;
    public final void rule__CPackage__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1611:1: ( rule__CPackage__Group__3__Impl rule__CPackage__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1612:2: rule__CPackage__Group__3__Impl rule__CPackage__Group__4
            {
            pushFollow(FOLLOW_rule__CPackage__Group__3__Impl_in_rule__CPackage__Group__33493);
            rule__CPackage__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__4_in_rule__CPackage__Group__33496);
            rule__CPackage__Group__4();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__3"


    // $ANTLR start "rule__CPackage__Group__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1619:1: rule__CPackage__Group__3__Impl : ( '{' ) ;
    public final void rule__CPackage__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1623:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1624:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1624:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1625:1: '{'
            {
             before(grammarAccess.getCPackageAccess().getLeftCurlyBracketKeyword_3()); 
            match(input,42,FOLLOW_42_in_rule__CPackage__Group__3__Impl3524); 
             after(grammarAccess.getCPackageAccess().getLeftCurlyBracketKeyword_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__3__Impl"


    // $ANTLR start "rule__CPackage__Group__4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1638:1: rule__CPackage__Group__4 : rule__CPackage__Group__4__Impl rule__CPackage__Group__5 ;
    public final void rule__CPackage__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1642:1: ( rule__CPackage__Group__4__Impl rule__CPackage__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1643:2: rule__CPackage__Group__4__Impl rule__CPackage__Group__5
            {
            pushFollow(FOLLOW_rule__CPackage__Group__4__Impl_in_rule__CPackage__Group__43555);
            rule__CPackage__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__5_in_rule__CPackage__Group__43558);
            rule__CPackage__Group__5();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__4"


    // $ANTLR start "rule__CPackage__Group__4__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1650:1: rule__CPackage__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__CPackage__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1654:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1655:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1655:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1656:1: RULE_END_LINE
            {
             before(grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__4__Impl3585); 
             after(grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_4()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__4__Impl"


    // $ANTLR start "rule__CPackage__Group__5"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1667:1: rule__CPackage__Group__5 : rule__CPackage__Group__5__Impl rule__CPackage__Group__6 ;
    public final void rule__CPackage__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1671:1: ( rule__CPackage__Group__5__Impl rule__CPackage__Group__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1672:2: rule__CPackage__Group__5__Impl rule__CPackage__Group__6
            {
            pushFollow(FOLLOW_rule__CPackage__Group__5__Impl_in_rule__CPackage__Group__53614);
            rule__CPackage__Group__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__6_in_rule__CPackage__Group__53617);
            rule__CPackage__Group__6();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__5"


    // $ANTLR start "rule__CPackage__Group__5__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1679:1: rule__CPackage__Group__5__Impl : ( ( rule__CPackage__ElementsAssignment_5 )* ) ;
    public final void rule__CPackage__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1683:1: ( ( ( rule__CPackage__ElementsAssignment_5 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1684:1: ( ( rule__CPackage__ElementsAssignment_5 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1684:1: ( ( rule__CPackage__ElementsAssignment_5 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1685:1: ( rule__CPackage__ElementsAssignment_5 )*
            {
             before(grammarAccess.getCPackageAccess().getElementsAssignment_5()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1686:1: ( rule__CPackage__ElementsAssignment_5 )*
            loop22:
            do {
                int alt22=2;
                int LA22_0 = input.LA(1);

                if ( (LA22_0==RULE_ID||(LA22_0>=23 && LA22_0<=26)) ) {
                    alt22=1;
                }


                switch (alt22) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1686:2: rule__CPackage__ElementsAssignment_5
            	    {
            	    pushFollow(FOLLOW_rule__CPackage__ElementsAssignment_5_in_rule__CPackage__Group__5__Impl3644);
            	    rule__CPackage__ElementsAssignment_5();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop22;
                }
            } while (true);

             after(grammarAccess.getCPackageAccess().getElementsAssignment_5()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__5__Impl"


    // $ANTLR start "rule__CPackage__Group__6"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1696:1: rule__CPackage__Group__6 : rule__CPackage__Group__6__Impl rule__CPackage__Group__7 ;
    public final void rule__CPackage__Group__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1700:1: ( rule__CPackage__Group__6__Impl rule__CPackage__Group__7 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1701:2: rule__CPackage__Group__6__Impl rule__CPackage__Group__7
            {
            pushFollow(FOLLOW_rule__CPackage__Group__6__Impl_in_rule__CPackage__Group__63675);
            rule__CPackage__Group__6__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__7_in_rule__CPackage__Group__63678);
            rule__CPackage__Group__7();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__6"


    // $ANTLR start "rule__CPackage__Group__6__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1708:1: rule__CPackage__Group__6__Impl : ( '}' ) ;
    public final void rule__CPackage__Group__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1712:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1713:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1713:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1714:1: '}'
            {
             before(grammarAccess.getCPackageAccess().getRightCurlyBracketKeyword_6()); 
            match(input,43,FOLLOW_43_in_rule__CPackage__Group__6__Impl3706); 
             after(grammarAccess.getCPackageAccess().getRightCurlyBracketKeyword_6()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__6__Impl"


    // $ANTLR start "rule__CPackage__Group__7"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1727:1: rule__CPackage__Group__7 : rule__CPackage__Group__7__Impl ;
    public final void rule__CPackage__Group__7() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1731:1: ( rule__CPackage__Group__7__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1732:2: rule__CPackage__Group__7__Impl
            {
            pushFollow(FOLLOW_rule__CPackage__Group__7__Impl_in_rule__CPackage__Group__73737);
            rule__CPackage__Group__7__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__7"


    // $ANTLR start "rule__CPackage__Group__7__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1738:1: rule__CPackage__Group__7__Impl : ( RULE_END_LINE ) ;
    public final void rule__CPackage__Group__7__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1742:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1743:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1743:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1744:1: RULE_END_LINE
            {
             before(grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_7()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__7__Impl3764); 
             after(grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_7()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group__7__Impl"


    // $ANTLR start "rule__CPackage__Group_2__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1771:1: rule__CPackage__Group_2__0 : rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1 ;
    public final void rule__CPackage__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1775:1: ( rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1776:2: rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__0__Impl_in_rule__CPackage__Group_2__03809);
            rule__CPackage__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group_2__1_in_rule__CPackage__Group_2__03812);
            rule__CPackage__Group_2__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group_2__0"


    // $ANTLR start "rule__CPackage__Group_2__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1783:1: rule__CPackage__Group_2__0__Impl : ( '<<' ) ;
    public final void rule__CPackage__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1787:1: ( ( '<<' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1788:1: ( '<<' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1788:1: ( '<<' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1789:1: '<<'
            {
             before(grammarAccess.getCPackageAccess().getLessThanSignLessThanSignKeyword_2_0()); 
            match(input,44,FOLLOW_44_in_rule__CPackage__Group_2__0__Impl3840); 
             after(grammarAccess.getCPackageAccess().getLessThanSignLessThanSignKeyword_2_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group_2__0__Impl"


    // $ANTLR start "rule__CPackage__Group_2__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1802:1: rule__CPackage__Group_2__1 : rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2 ;
    public final void rule__CPackage__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1806:1: ( rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1807:2: rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__1__Impl_in_rule__CPackage__Group_2__13871);
            rule__CPackage__Group_2__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group_2__2_in_rule__CPackage__Group_2__13874);
            rule__CPackage__Group_2__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group_2__1"


    // $ANTLR start "rule__CPackage__Group_2__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1814:1: rule__CPackage__Group_2__1__Impl : ( ( rule__CPackage__StyleAssignment_2_1 ) ) ;
    public final void rule__CPackage__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1818:1: ( ( ( rule__CPackage__StyleAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1819:1: ( ( rule__CPackage__StyleAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1819:1: ( ( rule__CPackage__StyleAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1820:1: ( rule__CPackage__StyleAssignment_2_1 )
            {
             before(grammarAccess.getCPackageAccess().getStyleAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1821:1: ( rule__CPackage__StyleAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1821:2: rule__CPackage__StyleAssignment_2_1
            {
            pushFollow(FOLLOW_rule__CPackage__StyleAssignment_2_1_in_rule__CPackage__Group_2__1__Impl3901);
            rule__CPackage__StyleAssignment_2_1();

            state._fsp--;


            }

             after(grammarAccess.getCPackageAccess().getStyleAssignment_2_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group_2__1__Impl"


    // $ANTLR start "rule__CPackage__Group_2__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1831:1: rule__CPackage__Group_2__2 : rule__CPackage__Group_2__2__Impl ;
    public final void rule__CPackage__Group_2__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1835:1: ( rule__CPackage__Group_2__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1836:2: rule__CPackage__Group_2__2__Impl
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__2__Impl_in_rule__CPackage__Group_2__23931);
            rule__CPackage__Group_2__2__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group_2__2"


    // $ANTLR start "rule__CPackage__Group_2__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1842:1: rule__CPackage__Group_2__2__Impl : ( '>>' ) ;
    public final void rule__CPackage__Group_2__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1846:1: ( ( '>>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1847:1: ( '>>' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1847:1: ( '>>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1848:1: '>>'
            {
             before(grammarAccess.getCPackageAccess().getGreaterThanSignGreaterThanSignKeyword_2_2()); 
            match(input,45,FOLLOW_45_in_rule__CPackage__Group_2__2__Impl3959); 
             after(grammarAccess.getCPackageAccess().getGreaterThanSignGreaterThanSignKeyword_2_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__Group_2__2__Impl"


    // $ANTLR start "rule__Relation__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1867:1: rule__Relation__Group__0 : rule__Relation__Group__0__Impl rule__Relation__Group__1 ;
    public final void rule__Relation__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1871:1: ( rule__Relation__Group__0__Impl rule__Relation__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1872:2: rule__Relation__Group__0__Impl rule__Relation__Group__1
            {
            pushFollow(FOLLOW_rule__Relation__Group__0__Impl_in_rule__Relation__Group__03996);
            rule__Relation__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__1_in_rule__Relation__Group__03999);
            rule__Relation__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__0"


    // $ANTLR start "rule__Relation__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1879:1: rule__Relation__Group__0__Impl : ( ( rule__Relation__LeftRefAssignment_0 ) ) ;
    public final void rule__Relation__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1883:1: ( ( ( rule__Relation__LeftRefAssignment_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1884:1: ( ( rule__Relation__LeftRefAssignment_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1884:1: ( ( rule__Relation__LeftRefAssignment_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1885:1: ( rule__Relation__LeftRefAssignment_0 )
            {
             before(grammarAccess.getRelationAccess().getLeftRefAssignment_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1886:1: ( rule__Relation__LeftRefAssignment_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1886:2: rule__Relation__LeftRefAssignment_0
            {
            pushFollow(FOLLOW_rule__Relation__LeftRefAssignment_0_in_rule__Relation__Group__0__Impl4026);
            rule__Relation__LeftRefAssignment_0();

            state._fsp--;


            }

             after(grammarAccess.getRelationAccess().getLeftRefAssignment_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__0__Impl"


    // $ANTLR start "rule__Relation__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1896:1: rule__Relation__Group__1 : rule__Relation__Group__1__Impl rule__Relation__Group__2 ;
    public final void rule__Relation__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1900:1: ( rule__Relation__Group__1__Impl rule__Relation__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1901:2: rule__Relation__Group__1__Impl rule__Relation__Group__2
            {
            pushFollow(FOLLOW_rule__Relation__Group__1__Impl_in_rule__Relation__Group__14056);
            rule__Relation__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__2_in_rule__Relation__Group__14059);
            rule__Relation__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__1"


    // $ANTLR start "rule__Relation__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1908:1: rule__Relation__Group__1__Impl : ( ( rule__Relation__RelTypeAssignment_1 ) ) ;
    public final void rule__Relation__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1912:1: ( ( ( rule__Relation__RelTypeAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1913:1: ( ( rule__Relation__RelTypeAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1913:1: ( ( rule__Relation__RelTypeAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1914:1: ( rule__Relation__RelTypeAssignment_1 )
            {
             before(grammarAccess.getRelationAccess().getRelTypeAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1915:1: ( rule__Relation__RelTypeAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1915:2: rule__Relation__RelTypeAssignment_1
            {
            pushFollow(FOLLOW_rule__Relation__RelTypeAssignment_1_in_rule__Relation__Group__1__Impl4086);
            rule__Relation__RelTypeAssignment_1();

            state._fsp--;


            }

             after(grammarAccess.getRelationAccess().getRelTypeAssignment_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__1__Impl"


    // $ANTLR start "rule__Relation__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1925:1: rule__Relation__Group__2 : rule__Relation__Group__2__Impl rule__Relation__Group__3 ;
    public final void rule__Relation__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1929:1: ( rule__Relation__Group__2__Impl rule__Relation__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1930:2: rule__Relation__Group__2__Impl rule__Relation__Group__3
            {
            pushFollow(FOLLOW_rule__Relation__Group__2__Impl_in_rule__Relation__Group__24116);
            rule__Relation__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__3_in_rule__Relation__Group__24119);
            rule__Relation__Group__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__2"


    // $ANTLR start "rule__Relation__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1937:1: rule__Relation__Group__2__Impl : ( ( rule__Relation__RightRefAssignment_2 ) ) ;
    public final void rule__Relation__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1941:1: ( ( ( rule__Relation__RightRefAssignment_2 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1942:1: ( ( rule__Relation__RightRefAssignment_2 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1942:1: ( ( rule__Relation__RightRefAssignment_2 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1943:1: ( rule__Relation__RightRefAssignment_2 )
            {
             before(grammarAccess.getRelationAccess().getRightRefAssignment_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1944:1: ( rule__Relation__RightRefAssignment_2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1944:2: rule__Relation__RightRefAssignment_2
            {
            pushFollow(FOLLOW_rule__Relation__RightRefAssignment_2_in_rule__Relation__Group__2__Impl4146);
            rule__Relation__RightRefAssignment_2();

            state._fsp--;


            }

             after(grammarAccess.getRelationAccess().getRightRefAssignment_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__2__Impl"


    // $ANTLR start "rule__Relation__Group__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1954:1: rule__Relation__Group__3 : rule__Relation__Group__3__Impl rule__Relation__Group__4 ;
    public final void rule__Relation__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1958:1: ( rule__Relation__Group__3__Impl rule__Relation__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1959:2: rule__Relation__Group__3__Impl rule__Relation__Group__4
            {
            pushFollow(FOLLOW_rule__Relation__Group__3__Impl_in_rule__Relation__Group__34176);
            rule__Relation__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__4_in_rule__Relation__Group__34179);
            rule__Relation__Group__4();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__3"


    // $ANTLR start "rule__Relation__Group__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1966:1: rule__Relation__Group__3__Impl : ( ( rule__Relation__Group_3__0 )? ) ;
    public final void rule__Relation__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1970:1: ( ( ( rule__Relation__Group_3__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1971:1: ( ( rule__Relation__Group_3__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1971:1: ( ( rule__Relation__Group_3__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1972:1: ( rule__Relation__Group_3__0 )?
            {
             before(grammarAccess.getRelationAccess().getGroup_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1973:1: ( rule__Relation__Group_3__0 )?
            int alt23=2;
            int LA23_0 = input.LA(1);

            if ( (LA23_0==29) ) {
                alt23=1;
            }
            switch (alt23) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1973:2: rule__Relation__Group_3__0
                    {
                    pushFollow(FOLLOW_rule__Relation__Group_3__0_in_rule__Relation__Group__3__Impl4206);
                    rule__Relation__Group_3__0();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getRelationAccess().getGroup_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__3__Impl"


    // $ANTLR start "rule__Relation__Group__4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1983:1: rule__Relation__Group__4 : rule__Relation__Group__4__Impl ;
    public final void rule__Relation__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1987:1: ( rule__Relation__Group__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1988:2: rule__Relation__Group__4__Impl
            {
            pushFollow(FOLLOW_rule__Relation__Group__4__Impl_in_rule__Relation__Group__44237);
            rule__Relation__Group__4__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__4"


    // $ANTLR start "rule__Relation__Group__4__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1994:1: rule__Relation__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Relation__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1998:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1999:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1999:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2000:1: RULE_END_LINE
            {
             before(grammarAccess.getRelationAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Relation__Group__4__Impl4264); 
             after(grammarAccess.getRelationAccess().getEND_LINETerminalRuleCall_4()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group__4__Impl"


    // $ANTLR start "rule__Relation__Group_3__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2021:1: rule__Relation__Group_3__0 : rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1 ;
    public final void rule__Relation__Group_3__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2025:1: ( rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2026:2: rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1
            {
            pushFollow(FOLLOW_rule__Relation__Group_3__0__Impl_in_rule__Relation__Group_3__04303);
            rule__Relation__Group_3__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group_3__1_in_rule__Relation__Group_3__04306);
            rule__Relation__Group_3__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group_3__0"


    // $ANTLR start "rule__Relation__Group_3__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2033:1: rule__Relation__Group_3__0__Impl : ( ':' ) ;
    public final void rule__Relation__Group_3__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2037:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2038:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2038:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2039:1: ':'
            {
             before(grammarAccess.getRelationAccess().getColonKeyword_3_0()); 
            match(input,29,FOLLOW_29_in_rule__Relation__Group_3__0__Impl4334); 
             after(grammarAccess.getRelationAccess().getColonKeyword_3_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group_3__0__Impl"


    // $ANTLR start "rule__Relation__Group_3__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2052:1: rule__Relation__Group_3__1 : rule__Relation__Group_3__1__Impl ;
    public final void rule__Relation__Group_3__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2056:1: ( rule__Relation__Group_3__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2057:2: rule__Relation__Group_3__1__Impl
            {
            pushFollow(FOLLOW_rule__Relation__Group_3__1__Impl_in_rule__Relation__Group_3__14365);
            rule__Relation__Group_3__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group_3__1"


    // $ANTLR start "rule__Relation__Group_3__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2063:1: rule__Relation__Group_3__1__Impl : ( ( rule__Relation__NameAssignment_3_1 ) ) ;
    public final void rule__Relation__Group_3__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2067:1: ( ( ( rule__Relation__NameAssignment_3_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2068:1: ( ( rule__Relation__NameAssignment_3_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2068:1: ( ( rule__Relation__NameAssignment_3_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2069:1: ( rule__Relation__NameAssignment_3_1 )
            {
             before(grammarAccess.getRelationAccess().getNameAssignment_3_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2070:1: ( rule__Relation__NameAssignment_3_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2070:2: rule__Relation__NameAssignment_3_1
            {
            pushFollow(FOLLOW_rule__Relation__NameAssignment_3_1_in_rule__Relation__Group_3__1__Impl4392);
            rule__Relation__NameAssignment_3_1();

            state._fsp--;


            }

             after(grammarAccess.getRelationAccess().getNameAssignment_3_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__Group_3__1__Impl"


    // $ANTLR start "rule__RelationParse__Group_0__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2084:1: rule__RelationParse__Group_0__0 : rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1 ;
    public final void rule__RelationParse__Group_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2088:1: ( rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2089:2: rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__0__Impl_in_rule__RelationParse__Group_0__04426);
            rule__RelationParse__Group_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__1_in_rule__RelationParse__Group_0__04429);
            rule__RelationParse__Group_0__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__0"


    // $ANTLR start "rule__RelationParse__Group_0__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2096:1: rule__RelationParse__Group_0__0__Impl : ( ( rule__RelationParse__CompAssignment_0_0 ) ) ;
    public final void rule__RelationParse__Group_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2100:1: ( ( ( rule__RelationParse__CompAssignment_0_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2101:1: ( ( rule__RelationParse__CompAssignment_0_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2101:1: ( ( rule__RelationParse__CompAssignment_0_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2102:1: ( rule__RelationParse__CompAssignment_0_0 )
            {
             before(grammarAccess.getRelationParseAccess().getCompAssignment_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2103:1: ( rule__RelationParse__CompAssignment_0_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2103:2: rule__RelationParse__CompAssignment_0_0
            {
            pushFollow(FOLLOW_rule__RelationParse__CompAssignment_0_0_in_rule__RelationParse__Group_0__0__Impl4456);
            rule__RelationParse__CompAssignment_0_0();

            state._fsp--;


            }

             after(grammarAccess.getRelationParseAccess().getCompAssignment_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__0__Impl"


    // $ANTLR start "rule__RelationParse__Group_0__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2113:1: rule__RelationParse__Group_0__1 : rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2 ;
    public final void rule__RelationParse__Group_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2117:1: ( rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2118:2: rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__1__Impl_in_rule__RelationParse__Group_0__14486);
            rule__RelationParse__Group_0__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__2_in_rule__RelationParse__Group_0__14489);
            rule__RelationParse__Group_0__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__1"


    // $ANTLR start "rule__RelationParse__Group_0__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2125:1: rule__RelationParse__Group_0__1__Impl : ( ( rule__RelationParse__TypeAssignment_0_1 ) ) ;
    public final void rule__RelationParse__Group_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2129:1: ( ( ( rule__RelationParse__TypeAssignment_0_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2130:1: ( ( rule__RelationParse__TypeAssignment_0_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2130:1: ( ( rule__RelationParse__TypeAssignment_0_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2131:1: ( rule__RelationParse__TypeAssignment_0_1 )
            {
             before(grammarAccess.getRelationParseAccess().getTypeAssignment_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2132:1: ( rule__RelationParse__TypeAssignment_0_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2132:2: rule__RelationParse__TypeAssignment_0_1
            {
            pushFollow(FOLLOW_rule__RelationParse__TypeAssignment_0_1_in_rule__RelationParse__Group_0__1__Impl4516);
            rule__RelationParse__TypeAssignment_0_1();

            state._fsp--;


            }

             after(grammarAccess.getRelationParseAccess().getTypeAssignment_0_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__1__Impl"


    // $ANTLR start "rule__RelationParse__Group_0__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2142:1: rule__RelationParse__Group_0__2 : rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3 ;
    public final void rule__RelationParse__Group_0__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2146:1: ( rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2147:2: rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__2__Impl_in_rule__RelationParse__Group_0__24546);
            rule__RelationParse__Group_0__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__3_in_rule__RelationParse__Group_0__24549);
            rule__RelationParse__Group_0__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__2"


    // $ANTLR start "rule__RelationParse__Group_0__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2154:1: rule__RelationParse__Group_0__2__Impl : ( ( rule__RelationParse__DirectAssignment_0_2 )? ) ;
    public final void rule__RelationParse__Group_0__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2158:1: ( ( ( rule__RelationParse__DirectAssignment_0_2 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2159:1: ( ( rule__RelationParse__DirectAssignment_0_2 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2159:1: ( ( rule__RelationParse__DirectAssignment_0_2 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2160:1: ( rule__RelationParse__DirectAssignment_0_2 )?
            {
             before(grammarAccess.getRelationParseAccess().getDirectAssignment_0_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2161:1: ( rule__RelationParse__DirectAssignment_0_2 )?
            int alt24=2;
            int LA24_0 = input.LA(1);

            if ( (LA24_0==52) ) {
                alt24=1;
            }
            switch (alt24) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2161:2: rule__RelationParse__DirectAssignment_0_2
                    {
                    pushFollow(FOLLOW_rule__RelationParse__DirectAssignment_0_2_in_rule__RelationParse__Group_0__2__Impl4576);
                    rule__RelationParse__DirectAssignment_0_2();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getRelationParseAccess().getDirectAssignment_0_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__2__Impl"


    // $ANTLR start "rule__RelationParse__Group_0__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2171:1: rule__RelationParse__Group_0__3 : rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4 ;
    public final void rule__RelationParse__Group_0__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2175:1: ( rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2176:2: rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__3__Impl_in_rule__RelationParse__Group_0__34607);
            rule__RelationParse__Group_0__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__4_in_rule__RelationParse__Group_0__34610);
            rule__RelationParse__Group_0__4();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__3"


    // $ANTLR start "rule__RelationParse__Group_0__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2183:1: rule__RelationParse__Group_0__3__Impl : ( RULE_WS ) ;
    public final void rule__RelationParse__Group_0__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2187:1: ( ( RULE_WS ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2188:1: ( RULE_WS )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2188:1: ( RULE_WS )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2189:1: RULE_WS
            {
             before(grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_0_3()); 
            match(input,RULE_WS,FOLLOW_RULE_WS_in_rule__RelationParse__Group_0__3__Impl4637); 
             after(grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_0_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__3__Impl"


    // $ANTLR start "rule__RelationParse__Group_0__4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2200:1: rule__RelationParse__Group_0__4 : rule__RelationParse__Group_0__4__Impl ;
    public final void rule__RelationParse__Group_0__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2204:1: ( rule__RelationParse__Group_0__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2205:2: rule__RelationParse__Group_0__4__Impl
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__4__Impl_in_rule__RelationParse__Group_0__44666);
            rule__RelationParse__Group_0__4__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__4"


    // $ANTLR start "rule__RelationParse__Group_0__4__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2211:1: rule__RelationParse__Group_0__4__Impl : ( ( rule__RelationParse__MultiAssignment_0_4 )? ) ;
    public final void rule__RelationParse__Group_0__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2215:1: ( ( ( rule__RelationParse__MultiAssignment_0_4 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2216:1: ( ( rule__RelationParse__MultiAssignment_0_4 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2216:1: ( ( rule__RelationParse__MultiAssignment_0_4 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2217:1: ( rule__RelationParse__MultiAssignment_0_4 )?
            {
             before(grammarAccess.getRelationParseAccess().getMultiAssignment_0_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2218:1: ( rule__RelationParse__MultiAssignment_0_4 )?
            int alt25=2;
            int LA25_0 = input.LA(1);

            if ( (LA25_0==RULE_MULTI) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2218:2: rule__RelationParse__MultiAssignment_0_4
                    {
                    pushFollow(FOLLOW_rule__RelationParse__MultiAssignment_0_4_in_rule__RelationParse__Group_0__4__Impl4693);
                    rule__RelationParse__MultiAssignment_0_4();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getRelationParseAccess().getMultiAssignment_0_4()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_0__4__Impl"


    // $ANTLR start "rule__RelationParse__Group_1__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2238:1: rule__RelationParse__Group_1__0 : rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1 ;
    public final void rule__RelationParse__Group_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2242:1: ( rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2243:2: rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__0__Impl_in_rule__RelationParse__Group_1__04734);
            rule__RelationParse__Group_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__1_in_rule__RelationParse__Group_1__04737);
            rule__RelationParse__Group_1__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_1__0"


    // $ANTLR start "rule__RelationParse__Group_1__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2250:1: rule__RelationParse__Group_1__0__Impl : ( ( rule__RelationParse__TypeAssignment_1_0 ) ) ;
    public final void rule__RelationParse__Group_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2254:1: ( ( ( rule__RelationParse__TypeAssignment_1_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2255:1: ( ( rule__RelationParse__TypeAssignment_1_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2255:1: ( ( rule__RelationParse__TypeAssignment_1_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2256:1: ( rule__RelationParse__TypeAssignment_1_0 )
            {
             before(grammarAccess.getRelationParseAccess().getTypeAssignment_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2257:1: ( rule__RelationParse__TypeAssignment_1_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2257:2: rule__RelationParse__TypeAssignment_1_0
            {
            pushFollow(FOLLOW_rule__RelationParse__TypeAssignment_1_0_in_rule__RelationParse__Group_1__0__Impl4764);
            rule__RelationParse__TypeAssignment_1_0();

            state._fsp--;


            }

             after(grammarAccess.getRelationParseAccess().getTypeAssignment_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_1__0__Impl"


    // $ANTLR start "rule__RelationParse__Group_1__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2267:1: rule__RelationParse__Group_1__1 : rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2 ;
    public final void rule__RelationParse__Group_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2271:1: ( rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2272:2: rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__1__Impl_in_rule__RelationParse__Group_1__14794);
            rule__RelationParse__Group_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__2_in_rule__RelationParse__Group_1__14797);
            rule__RelationParse__Group_1__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_1__1"


    // $ANTLR start "rule__RelationParse__Group_1__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2279:1: rule__RelationParse__Group_1__1__Impl : ( ( rule__RelationParse__Alternatives_1_1 )? ) ;
    public final void rule__RelationParse__Group_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2283:1: ( ( ( rule__RelationParse__Alternatives_1_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2284:1: ( ( rule__RelationParse__Alternatives_1_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2284:1: ( ( rule__RelationParse__Alternatives_1_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2285:1: ( rule__RelationParse__Alternatives_1_1 )?
            {
             before(grammarAccess.getRelationParseAccess().getAlternatives_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2286:1: ( rule__RelationParse__Alternatives_1_1 )?
            int alt26=2;
            int LA26_0 = input.LA(1);

            if ( ((LA26_0>=52 && LA26_0<=53)) ) {
                alt26=1;
            }
            switch (alt26) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2286:2: rule__RelationParse__Alternatives_1_1
                    {
                    pushFollow(FOLLOW_rule__RelationParse__Alternatives_1_1_in_rule__RelationParse__Group_1__1__Impl4824);
                    rule__RelationParse__Alternatives_1_1();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getRelationParseAccess().getAlternatives_1_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_1__1__Impl"


    // $ANTLR start "rule__RelationParse__Group_1__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2296:1: rule__RelationParse__Group_1__2 : rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3 ;
    public final void rule__RelationParse__Group_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2300:1: ( rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2301:2: rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__2__Impl_in_rule__RelationParse__Group_1__24855);
            rule__RelationParse__Group_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__3_in_rule__RelationParse__Group_1__24858);
            rule__RelationParse__Group_1__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_1__2"


    // $ANTLR start "rule__RelationParse__Group_1__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2308:1: rule__RelationParse__Group_1__2__Impl : ( RULE_WS ) ;
    public final void rule__RelationParse__Group_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2312:1: ( ( RULE_WS ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2313:1: ( RULE_WS )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2313:1: ( RULE_WS )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2314:1: RULE_WS
            {
             before(grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_1_2()); 
            match(input,RULE_WS,FOLLOW_RULE_WS_in_rule__RelationParse__Group_1__2__Impl4885); 
             after(grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_1_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_1__2__Impl"


    // $ANTLR start "rule__RelationParse__Group_1__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2325:1: rule__RelationParse__Group_1__3 : rule__RelationParse__Group_1__3__Impl ;
    public final void rule__RelationParse__Group_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2329:1: ( rule__RelationParse__Group_1__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2330:2: rule__RelationParse__Group_1__3__Impl
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__3__Impl_in_rule__RelationParse__Group_1__34914);
            rule__RelationParse__Group_1__3__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_1__3"


    // $ANTLR start "rule__RelationParse__Group_1__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2336:1: rule__RelationParse__Group_1__3__Impl : ( ( rule__RelationParse__MultiAssignment_1_3 )? ) ;
    public final void rule__RelationParse__Group_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2340:1: ( ( ( rule__RelationParse__MultiAssignment_1_3 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2341:1: ( ( rule__RelationParse__MultiAssignment_1_3 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2341:1: ( ( rule__RelationParse__MultiAssignment_1_3 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2342:1: ( rule__RelationParse__MultiAssignment_1_3 )?
            {
             before(grammarAccess.getRelationParseAccess().getMultiAssignment_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2343:1: ( rule__RelationParse__MultiAssignment_1_3 )?
            int alt27=2;
            int LA27_0 = input.LA(1);

            if ( (LA27_0==RULE_MULTI) ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2343:2: rule__RelationParse__MultiAssignment_1_3
                    {
                    pushFollow(FOLLOW_rule__RelationParse__MultiAssignment_1_3_in_rule__RelationParse__Group_1__3__Impl4941);
                    rule__RelationParse__MultiAssignment_1_3();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getRelationParseAccess().getMultiAssignment_1_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__Group_1__3__Impl"


    // $ANTLR start "rule__StrongRel__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2361:1: rule__StrongRel__Group__0 : rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1 ;
    public final void rule__StrongRel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2365:1: ( rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2366:2: rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__0__Impl_in_rule__StrongRel__Group__04980);
            rule__StrongRel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__StrongRel__Group__1_in_rule__StrongRel__Group__04983);
            rule__StrongRel__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__StrongRel__Group__0"


    // $ANTLR start "rule__StrongRel__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2373:1: rule__StrongRel__Group__0__Impl : ( '-' ) ;
    public final void rule__StrongRel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2377:1: ( ( '-' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2378:1: ( '-' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2378:1: ( '-' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2379:1: '-'
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_0()); 
            match(input,46,FOLLOW_46_in_rule__StrongRel__Group__0__Impl5011); 
             after(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__StrongRel__Group__0__Impl"


    // $ANTLR start "rule__StrongRel__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2392:1: rule__StrongRel__Group__1 : rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2 ;
    public final void rule__StrongRel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2396:1: ( rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2397:2: rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__1__Impl_in_rule__StrongRel__Group__15042);
            rule__StrongRel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__StrongRel__Group__2_in_rule__StrongRel__Group__15045);
            rule__StrongRel__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__StrongRel__Group__1"


    // $ANTLR start "rule__StrongRel__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2404:1: rule__StrongRel__Group__1__Impl : ( ( rule__StrongRel__Alternatives_1 )? ) ;
    public final void rule__StrongRel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2408:1: ( ( ( rule__StrongRel__Alternatives_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2409:1: ( ( rule__StrongRel__Alternatives_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2409:1: ( ( rule__StrongRel__Alternatives_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2410:1: ( rule__StrongRel__Alternatives_1 )?
            {
             before(grammarAccess.getStrongRelAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2411:1: ( rule__StrongRel__Alternatives_1 )?
            int alt28=2;
            int LA28_0 = input.LA(1);

            if ( ((LA28_0>=12 && LA28_0<=15)) ) {
                alt28=1;
            }
            switch (alt28) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2411:2: rule__StrongRel__Alternatives_1
                    {
                    pushFollow(FOLLOW_rule__StrongRel__Alternatives_1_in_rule__StrongRel__Group__1__Impl5072);
                    rule__StrongRel__Alternatives_1();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getStrongRelAccess().getAlternatives_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__StrongRel__Group__1__Impl"


    // $ANTLR start "rule__StrongRel__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2421:1: rule__StrongRel__Group__2 : rule__StrongRel__Group__2__Impl ;
    public final void rule__StrongRel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2425:1: ( rule__StrongRel__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2426:2: rule__StrongRel__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__2__Impl_in_rule__StrongRel__Group__25103);
            rule__StrongRel__Group__2__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__StrongRel__Group__2"


    // $ANTLR start "rule__StrongRel__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2432:1: rule__StrongRel__Group__2__Impl : ( ( ( '-' ) ) ( ( '-' )* ) ) ;
    public final void rule__StrongRel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2436:1: ( ( ( ( '-' ) ) ( ( '-' )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2437:1: ( ( ( '-' ) ) ( ( '-' )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2437:1: ( ( ( '-' ) ) ( ( '-' )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2438:1: ( ( '-' ) ) ( ( '-' )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2438:1: ( ( '-' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2439:1: ( '-' )
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2440:1: ( '-' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2441:2: '-'
            {
            match(input,46,FOLLOW_46_in_rule__StrongRel__Group__2__Impl5134); 

            }

             after(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2445:1: ( ( '-' )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2446:1: ( '-' )*
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2447:1: ( '-' )*
            loop29:
            do {
                int alt29=2;
                int LA29_0 = input.LA(1);

                if ( (LA29_0==46) ) {
                    alt29=1;
                }


                switch (alt29) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2448:2: '-'
            	    {
            	    match(input,46,FOLLOW_46_in_rule__StrongRel__Group__2__Impl5150); 

            	    }
            	    break;

            	default :
            	    break loop29;
                }
            } while (true);

             after(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 

            }


            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__StrongRel__Group__2__Impl"


    // $ANTLR start "rule__WeakRel__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2466:1: rule__WeakRel__Group__0 : rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1 ;
    public final void rule__WeakRel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2470:1: ( rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2471:2: rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__0__Impl_in_rule__WeakRel__Group__05191);
            rule__WeakRel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__WeakRel__Group__1_in_rule__WeakRel__Group__05194);
            rule__WeakRel__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__WeakRel__Group__0"


    // $ANTLR start "rule__WeakRel__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2478:1: rule__WeakRel__Group__0__Impl : ( '.' ) ;
    public final void rule__WeakRel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2482:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2483:1: ( '.' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2483:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2484:1: '.'
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_0()); 
            match(input,47,FOLLOW_47_in_rule__WeakRel__Group__0__Impl5222); 
             after(grammarAccess.getWeakRelAccess().getFullStopKeyword_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__WeakRel__Group__0__Impl"


    // $ANTLR start "rule__WeakRel__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2497:1: rule__WeakRel__Group__1 : rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2 ;
    public final void rule__WeakRel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2501:1: ( rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2502:2: rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__1__Impl_in_rule__WeakRel__Group__15253);
            rule__WeakRel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__WeakRel__Group__2_in_rule__WeakRel__Group__15256);
            rule__WeakRel__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__WeakRel__Group__1"


    // $ANTLR start "rule__WeakRel__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2509:1: rule__WeakRel__Group__1__Impl : ( ( rule__WeakRel__Alternatives_1 )? ) ;
    public final void rule__WeakRel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2513:1: ( ( ( rule__WeakRel__Alternatives_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2514:1: ( ( rule__WeakRel__Alternatives_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2514:1: ( ( rule__WeakRel__Alternatives_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2515:1: ( rule__WeakRel__Alternatives_1 )?
            {
             before(grammarAccess.getWeakRelAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2516:1: ( rule__WeakRel__Alternatives_1 )?
            int alt30=2;
            int LA30_0 = input.LA(1);

            if ( ((LA30_0>=12 && LA30_0<=15)) ) {
                alt30=1;
            }
            switch (alt30) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2516:2: rule__WeakRel__Alternatives_1
                    {
                    pushFollow(FOLLOW_rule__WeakRel__Alternatives_1_in_rule__WeakRel__Group__1__Impl5283);
                    rule__WeakRel__Alternatives_1();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getWeakRelAccess().getAlternatives_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__WeakRel__Group__1__Impl"


    // $ANTLR start "rule__WeakRel__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2526:1: rule__WeakRel__Group__2 : rule__WeakRel__Group__2__Impl ;
    public final void rule__WeakRel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2530:1: ( rule__WeakRel__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2531:2: rule__WeakRel__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__2__Impl_in_rule__WeakRel__Group__25314);
            rule__WeakRel__Group__2__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__WeakRel__Group__2"


    // $ANTLR start "rule__WeakRel__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2537:1: rule__WeakRel__Group__2__Impl : ( ( ( '.' ) ) ( ( '.' )* ) ) ;
    public final void rule__WeakRel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2541:1: ( ( ( ( '.' ) ) ( ( '.' )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2542:1: ( ( ( '.' ) ) ( ( '.' )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2542:1: ( ( ( '.' ) ) ( ( '.' )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2543:1: ( ( '.' ) ) ( ( '.' )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2543:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2544:1: ( '.' )
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2545:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2546:2: '.'
            {
            match(input,47,FOLLOW_47_in_rule__WeakRel__Group__2__Impl5345); 

            }

             after(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2550:1: ( ( '.' )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2551:1: ( '.' )*
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2552:1: ( '.' )*
            loop31:
            do {
                int alt31=2;
                int LA31_0 = input.LA(1);

                if ( (LA31_0==47) ) {
                    alt31=1;
                }


                switch (alt31) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2553:2: '.'
            	    {
            	    match(input,47,FOLLOW_47_in_rule__WeakRel__Group__2__Impl5361); 

            	    }
            	    break;

            	default :
            	    break loop31;
                }
            } while (true);

             after(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 

            }


            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__WeakRel__Group__2__Impl"


    // $ANTLR start "rule__Enumer__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2571:1: rule__Enumer__Group__0 : rule__Enumer__Group__0__Impl rule__Enumer__Group__1 ;
    public final void rule__Enumer__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2575:1: ( rule__Enumer__Group__0__Impl rule__Enumer__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2576:2: rule__Enumer__Group__0__Impl rule__Enumer__Group__1
            {
            pushFollow(FOLLOW_rule__Enumer__Group__0__Impl_in_rule__Enumer__Group__05402);
            rule__Enumer__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__1_in_rule__Enumer__Group__05405);
            rule__Enumer__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__0"


    // $ANTLR start "rule__Enumer__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2583:1: rule__Enumer__Group__0__Impl : ( 'enum' ) ;
    public final void rule__Enumer__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2587:1: ( ( 'enum' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2588:1: ( 'enum' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2588:1: ( 'enum' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2589:1: 'enum'
            {
             before(grammarAccess.getEnumerAccess().getEnumKeyword_0()); 
            match(input,25,FOLLOW_25_in_rule__Enumer__Group__0__Impl5433); 
             after(grammarAccess.getEnumerAccess().getEnumKeyword_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__0__Impl"


    // $ANTLR start "rule__Enumer__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2602:1: rule__Enumer__Group__1 : rule__Enumer__Group__1__Impl rule__Enumer__Group__2 ;
    public final void rule__Enumer__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2606:1: ( rule__Enumer__Group__1__Impl rule__Enumer__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2607:2: rule__Enumer__Group__1__Impl rule__Enumer__Group__2
            {
            pushFollow(FOLLOW_rule__Enumer__Group__1__Impl_in_rule__Enumer__Group__15464);
            rule__Enumer__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__2_in_rule__Enumer__Group__15467);
            rule__Enumer__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__1"


    // $ANTLR start "rule__Enumer__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2614:1: rule__Enumer__Group__1__Impl : ( ( rule__Enumer__NameAssignment_1 ) ) ;
    public final void rule__Enumer__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2618:1: ( ( ( rule__Enumer__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2619:1: ( ( rule__Enumer__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2619:1: ( ( rule__Enumer__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2620:1: ( rule__Enumer__NameAssignment_1 )
            {
             before(grammarAccess.getEnumerAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2621:1: ( rule__Enumer__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2621:2: rule__Enumer__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__Enumer__NameAssignment_1_in_rule__Enumer__Group__1__Impl5494);
            rule__Enumer__NameAssignment_1();

            state._fsp--;


            }

             after(grammarAccess.getEnumerAccess().getNameAssignment_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__1__Impl"


    // $ANTLR start "rule__Enumer__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2631:1: rule__Enumer__Group__2 : rule__Enumer__Group__2__Impl rule__Enumer__Group__3 ;
    public final void rule__Enumer__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2635:1: ( rule__Enumer__Group__2__Impl rule__Enumer__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2636:2: rule__Enumer__Group__2__Impl rule__Enumer__Group__3
            {
            pushFollow(FOLLOW_rule__Enumer__Group__2__Impl_in_rule__Enumer__Group__25524);
            rule__Enumer__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__3_in_rule__Enumer__Group__25527);
            rule__Enumer__Group__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__2"


    // $ANTLR start "rule__Enumer__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2643:1: rule__Enumer__Group__2__Impl : ( '{' ) ;
    public final void rule__Enumer__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2647:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2648:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2648:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2649:1: '{'
            {
             before(grammarAccess.getEnumerAccess().getLeftCurlyBracketKeyword_2()); 
            match(input,42,FOLLOW_42_in_rule__Enumer__Group__2__Impl5555); 
             after(grammarAccess.getEnumerAccess().getLeftCurlyBracketKeyword_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__2__Impl"


    // $ANTLR start "rule__Enumer__Group__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2662:1: rule__Enumer__Group__3 : rule__Enumer__Group__3__Impl rule__Enumer__Group__4 ;
    public final void rule__Enumer__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2666:1: ( rule__Enumer__Group__3__Impl rule__Enumer__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2667:2: rule__Enumer__Group__3__Impl rule__Enumer__Group__4
            {
            pushFollow(FOLLOW_rule__Enumer__Group__3__Impl_in_rule__Enumer__Group__35586);
            rule__Enumer__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__4_in_rule__Enumer__Group__35589);
            rule__Enumer__Group__4();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__3"


    // $ANTLR start "rule__Enumer__Group__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2674:1: rule__Enumer__Group__3__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Enumer__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2678:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2679:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2679:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2680:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2681:1: ( RULE_END_LINE )?
            int alt32=2;
            int LA32_0 = input.LA(1);

            if ( (LA32_0==RULE_END_LINE) ) {
                alt32=1;
            }
            switch (alt32) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2681:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__3__Impl5617); 

                    }
                    break;

            }

             after(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__3__Impl"


    // $ANTLR start "rule__Enumer__Group__4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2691:1: rule__Enumer__Group__4 : rule__Enumer__Group__4__Impl rule__Enumer__Group__5 ;
    public final void rule__Enumer__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2695:1: ( rule__Enumer__Group__4__Impl rule__Enumer__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2696:2: rule__Enumer__Group__4__Impl rule__Enumer__Group__5
            {
            pushFollow(FOLLOW_rule__Enumer__Group__4__Impl_in_rule__Enumer__Group__45648);
            rule__Enumer__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__5_in_rule__Enumer__Group__45651);
            rule__Enumer__Group__5();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__4"


    // $ANTLR start "rule__Enumer__Group__4__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2703:1: rule__Enumer__Group__4__Impl : ( ( rule__Enumer__Group_4__0 )* ) ;
    public final void rule__Enumer__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2707:1: ( ( ( rule__Enumer__Group_4__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2708:1: ( ( rule__Enumer__Group_4__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2708:1: ( ( rule__Enumer__Group_4__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2709:1: ( rule__Enumer__Group_4__0 )*
            {
             before(grammarAccess.getEnumerAccess().getGroup_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2710:1: ( rule__Enumer__Group_4__0 )*
            loop33:
            do {
                int alt33=2;
                int LA33_0 = input.LA(1);

                if ( (LA33_0==RULE_ID) ) {
                    alt33=1;
                }


                switch (alt33) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2710:2: rule__Enumer__Group_4__0
            	    {
            	    pushFollow(FOLLOW_rule__Enumer__Group_4__0_in_rule__Enumer__Group__4__Impl5678);
            	    rule__Enumer__Group_4__0();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop33;
                }
            } while (true);

             after(grammarAccess.getEnumerAccess().getGroup_4()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__4__Impl"


    // $ANTLR start "rule__Enumer__Group__5"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2720:1: rule__Enumer__Group__5 : rule__Enumer__Group__5__Impl rule__Enumer__Group__6 ;
    public final void rule__Enumer__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2724:1: ( rule__Enumer__Group__5__Impl rule__Enumer__Group__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2725:2: rule__Enumer__Group__5__Impl rule__Enumer__Group__6
            {
            pushFollow(FOLLOW_rule__Enumer__Group__5__Impl_in_rule__Enumer__Group__55709);
            rule__Enumer__Group__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__6_in_rule__Enumer__Group__55712);
            rule__Enumer__Group__6();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__5"


    // $ANTLR start "rule__Enumer__Group__5__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2732:1: rule__Enumer__Group__5__Impl : ( '}' ) ;
    public final void rule__Enumer__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2736:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2737:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2737:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2738:1: '}'
            {
             before(grammarAccess.getEnumerAccess().getRightCurlyBracketKeyword_5()); 
            match(input,43,FOLLOW_43_in_rule__Enumer__Group__5__Impl5740); 
             after(grammarAccess.getEnumerAccess().getRightCurlyBracketKeyword_5()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__5__Impl"


    // $ANTLR start "rule__Enumer__Group__6"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2751:1: rule__Enumer__Group__6 : rule__Enumer__Group__6__Impl ;
    public final void rule__Enumer__Group__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2755:1: ( rule__Enumer__Group__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2756:2: rule__Enumer__Group__6__Impl
            {
            pushFollow(FOLLOW_rule__Enumer__Group__6__Impl_in_rule__Enumer__Group__65771);
            rule__Enumer__Group__6__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__6"


    // $ANTLR start "rule__Enumer__Group__6__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2762:1: rule__Enumer__Group__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Enumer__Group__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2766:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2767:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2767:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2768:1: RULE_END_LINE
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__6__Impl5798); 
             after(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_6()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group__6__Impl"


    // $ANTLR start "rule__Enumer__Group_4__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2793:1: rule__Enumer__Group_4__0 : rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1 ;
    public final void rule__Enumer__Group_4__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2797:1: ( rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2798:2: rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1
            {
            pushFollow(FOLLOW_rule__Enumer__Group_4__0__Impl_in_rule__Enumer__Group_4__05841);
            rule__Enumer__Group_4__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group_4__1_in_rule__Enumer__Group_4__05844);
            rule__Enumer__Group_4__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group_4__0"


    // $ANTLR start "rule__Enumer__Group_4__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2805:1: rule__Enumer__Group_4__0__Impl : ( ( rule__Enumer__TypesAssignment_4_0 ) ) ;
    public final void rule__Enumer__Group_4__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2809:1: ( ( ( rule__Enumer__TypesAssignment_4_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2810:1: ( ( rule__Enumer__TypesAssignment_4_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2810:1: ( ( rule__Enumer__TypesAssignment_4_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2811:1: ( rule__Enumer__TypesAssignment_4_0 )
            {
             before(grammarAccess.getEnumerAccess().getTypesAssignment_4_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2812:1: ( rule__Enumer__TypesAssignment_4_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2812:2: rule__Enumer__TypesAssignment_4_0
            {
            pushFollow(FOLLOW_rule__Enumer__TypesAssignment_4_0_in_rule__Enumer__Group_4__0__Impl5871);
            rule__Enumer__TypesAssignment_4_0();

            state._fsp--;


            }

             after(grammarAccess.getEnumerAccess().getTypesAssignment_4_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group_4__0__Impl"


    // $ANTLR start "rule__Enumer__Group_4__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2822:1: rule__Enumer__Group_4__1 : rule__Enumer__Group_4__1__Impl ;
    public final void rule__Enumer__Group_4__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2826:1: ( rule__Enumer__Group_4__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2827:2: rule__Enumer__Group_4__1__Impl
            {
            pushFollow(FOLLOW_rule__Enumer__Group_4__1__Impl_in_rule__Enumer__Group_4__15901);
            rule__Enumer__Group_4__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group_4__1"


    // $ANTLR start "rule__Enumer__Group_4__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2833:1: rule__Enumer__Group_4__1__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Enumer__Group_4__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2837:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2838:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2838:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2839:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_4_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2840:1: ( RULE_END_LINE )?
            int alt34=2;
            int LA34_0 = input.LA(1);

            if ( (LA34_0==RULE_END_LINE) ) {
                alt34=1;
            }
            switch (alt34) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2840:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group_4__1__Impl5929); 

                    }
                    break;

            }

             after(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_4_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__Group_4__1__Impl"


    // $ANTLR start "rule__Clazz__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2854:1: rule__Clazz__Group__0 : rule__Clazz__Group__0__Impl rule__Clazz__Group__1 ;
    public final void rule__Clazz__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2858:1: ( rule__Clazz__Group__0__Impl rule__Clazz__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2859:2: rule__Clazz__Group__0__Impl rule__Clazz__Group__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group__0__Impl_in_rule__Clazz__Group__05964);
            rule__Clazz__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__1_in_rule__Clazz__Group__05967);
            rule__Clazz__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__0"


    // $ANTLR start "rule__Clazz__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2866:1: rule__Clazz__Group__0__Impl : ( 'class' ) ;
    public final void rule__Clazz__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2870:1: ( ( 'class' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2871:1: ( 'class' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2871:1: ( 'class' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2872:1: 'class'
            {
             before(grammarAccess.getClazzAccess().getClassKeyword_0()); 
            match(input,24,FOLLOW_24_in_rule__Clazz__Group__0__Impl5995); 
             after(grammarAccess.getClazzAccess().getClassKeyword_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__0__Impl"


    // $ANTLR start "rule__Clazz__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2885:1: rule__Clazz__Group__1 : rule__Clazz__Group__1__Impl rule__Clazz__Group__2 ;
    public final void rule__Clazz__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2889:1: ( rule__Clazz__Group__1__Impl rule__Clazz__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2890:2: rule__Clazz__Group__1__Impl rule__Clazz__Group__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group__1__Impl_in_rule__Clazz__Group__16026);
            rule__Clazz__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__2_in_rule__Clazz__Group__16029);
            rule__Clazz__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__1"


    // $ANTLR start "rule__Clazz__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2897:1: rule__Clazz__Group__1__Impl : ( ( rule__Clazz__NameAssignment_1 ) ) ;
    public final void rule__Clazz__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2901:1: ( ( ( rule__Clazz__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2902:1: ( ( rule__Clazz__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2902:1: ( ( rule__Clazz__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2903:1: ( rule__Clazz__NameAssignment_1 )
            {
             before(grammarAccess.getClazzAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2904:1: ( rule__Clazz__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2904:2: rule__Clazz__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__Clazz__NameAssignment_1_in_rule__Clazz__Group__1__Impl6056);
            rule__Clazz__NameAssignment_1();

            state._fsp--;


            }

             after(grammarAccess.getClazzAccess().getNameAssignment_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__1__Impl"


    // $ANTLR start "rule__Clazz__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2914:1: rule__Clazz__Group__2 : rule__Clazz__Group__2__Impl rule__Clazz__Group__3 ;
    public final void rule__Clazz__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2918:1: ( rule__Clazz__Group__2__Impl rule__Clazz__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2919:2: rule__Clazz__Group__2__Impl rule__Clazz__Group__3
            {
            pushFollow(FOLLOW_rule__Clazz__Group__2__Impl_in_rule__Clazz__Group__26086);
            rule__Clazz__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__3_in_rule__Clazz__Group__26089);
            rule__Clazz__Group__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__2"


    // $ANTLR start "rule__Clazz__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2926:1: rule__Clazz__Group__2__Impl : ( ( rule__Clazz__Group_2__0 )? ) ;
    public final void rule__Clazz__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2930:1: ( ( ( rule__Clazz__Group_2__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2931:1: ( ( rule__Clazz__Group_2__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2931:1: ( ( rule__Clazz__Group_2__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2932:1: ( rule__Clazz__Group_2__0 )?
            {
             before(grammarAccess.getClazzAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2933:1: ( rule__Clazz__Group_2__0 )?
            int alt35=2;
            int LA35_0 = input.LA(1);

            if ( (LA35_0==44) ) {
                alt35=1;
            }
            switch (alt35) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2933:2: rule__Clazz__Group_2__0
                    {
                    pushFollow(FOLLOW_rule__Clazz__Group_2__0_in_rule__Clazz__Group__2__Impl6116);
                    rule__Clazz__Group_2__0();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getClazzAccess().getGroup_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__2__Impl"


    // $ANTLR start "rule__Clazz__Group__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2943:1: rule__Clazz__Group__3 : rule__Clazz__Group__3__Impl rule__Clazz__Group__4 ;
    public final void rule__Clazz__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2947:1: ( rule__Clazz__Group__3__Impl rule__Clazz__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2948:2: rule__Clazz__Group__3__Impl rule__Clazz__Group__4
            {
            pushFollow(FOLLOW_rule__Clazz__Group__3__Impl_in_rule__Clazz__Group__36147);
            rule__Clazz__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__4_in_rule__Clazz__Group__36150);
            rule__Clazz__Group__4();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__3"


    // $ANTLR start "rule__Clazz__Group__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2955:1: rule__Clazz__Group__3__Impl : ( ( rule__Clazz__Group_3__0 )? ) ;
    public final void rule__Clazz__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2959:1: ( ( ( rule__Clazz__Group_3__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2960:1: ( ( rule__Clazz__Group_3__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2960:1: ( ( rule__Clazz__Group_3__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2961:1: ( rule__Clazz__Group_3__0 )?
            {
             before(grammarAccess.getClazzAccess().getGroup_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2962:1: ( rule__Clazz__Group_3__0 )?
            int alt36=2;
            int LA36_0 = input.LA(1);

            if ( (LA36_0==42) ) {
                alt36=1;
            }
            switch (alt36) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2962:2: rule__Clazz__Group_3__0
                    {
                    pushFollow(FOLLOW_rule__Clazz__Group_3__0_in_rule__Clazz__Group__3__Impl6177);
                    rule__Clazz__Group_3__0();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getClazzAccess().getGroup_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__3__Impl"


    // $ANTLR start "rule__Clazz__Group__4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2972:1: rule__Clazz__Group__4 : rule__Clazz__Group__4__Impl ;
    public final void rule__Clazz__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2976:1: ( rule__Clazz__Group__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2977:2: rule__Clazz__Group__4__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group__4__Impl_in_rule__Clazz__Group__46208);
            rule__Clazz__Group__4__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__4"


    // $ANTLR start "rule__Clazz__Group__4__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2983:1: rule__Clazz__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Clazz__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2987:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2988:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2988:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2989:1: RULE_END_LINE
            {
             before(grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Clazz__Group__4__Impl6235); 
             after(grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_4()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group__4__Impl"


    // $ANTLR start "rule__Clazz__Group_2__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3010:1: rule__Clazz__Group_2__0 : rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1 ;
    public final void rule__Clazz__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3014:1: ( rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3015:2: rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__0__Impl_in_rule__Clazz__Group_2__06274);
            rule__Clazz__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_2__1_in_rule__Clazz__Group_2__06277);
            rule__Clazz__Group_2__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_2__0"


    // $ANTLR start "rule__Clazz__Group_2__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3022:1: rule__Clazz__Group_2__0__Impl : ( '<<' ) ;
    public final void rule__Clazz__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3026:1: ( ( '<<' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3027:1: ( '<<' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3027:1: ( '<<' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3028:1: '<<'
            {
             before(grammarAccess.getClazzAccess().getLessThanSignLessThanSignKeyword_2_0()); 
            match(input,44,FOLLOW_44_in_rule__Clazz__Group_2__0__Impl6305); 
             after(grammarAccess.getClazzAccess().getLessThanSignLessThanSignKeyword_2_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_2__0__Impl"


    // $ANTLR start "rule__Clazz__Group_2__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3041:1: rule__Clazz__Group_2__1 : rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2 ;
    public final void rule__Clazz__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3045:1: ( rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3046:2: rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__1__Impl_in_rule__Clazz__Group_2__16336);
            rule__Clazz__Group_2__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_2__2_in_rule__Clazz__Group_2__16339);
            rule__Clazz__Group_2__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_2__1"


    // $ANTLR start "rule__Clazz__Group_2__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3053:1: rule__Clazz__Group_2__1__Impl : ( ( rule__Clazz__StereotypeAssignment_2_1 ) ) ;
    public final void rule__Clazz__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3057:1: ( ( ( rule__Clazz__StereotypeAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3058:1: ( ( rule__Clazz__StereotypeAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3058:1: ( ( rule__Clazz__StereotypeAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3059:1: ( rule__Clazz__StereotypeAssignment_2_1 )
            {
             before(grammarAccess.getClazzAccess().getStereotypeAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3060:1: ( rule__Clazz__StereotypeAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3060:2: rule__Clazz__StereotypeAssignment_2_1
            {
            pushFollow(FOLLOW_rule__Clazz__StereotypeAssignment_2_1_in_rule__Clazz__Group_2__1__Impl6366);
            rule__Clazz__StereotypeAssignment_2_1();

            state._fsp--;


            }

             after(grammarAccess.getClazzAccess().getStereotypeAssignment_2_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_2__1__Impl"


    // $ANTLR start "rule__Clazz__Group_2__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3070:1: rule__Clazz__Group_2__2 : rule__Clazz__Group_2__2__Impl ;
    public final void rule__Clazz__Group_2__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3074:1: ( rule__Clazz__Group_2__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3075:2: rule__Clazz__Group_2__2__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__2__Impl_in_rule__Clazz__Group_2__26396);
            rule__Clazz__Group_2__2__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_2__2"


    // $ANTLR start "rule__Clazz__Group_2__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3081:1: rule__Clazz__Group_2__2__Impl : ( '>>' ) ;
    public final void rule__Clazz__Group_2__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3085:1: ( ( '>>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3086:1: ( '>>' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3086:1: ( '>>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3087:1: '>>'
            {
             before(grammarAccess.getClazzAccess().getGreaterThanSignGreaterThanSignKeyword_2_2()); 
            match(input,45,FOLLOW_45_in_rule__Clazz__Group_2__2__Impl6424); 
             after(grammarAccess.getClazzAccess().getGreaterThanSignGreaterThanSignKeyword_2_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_2__2__Impl"


    // $ANTLR start "rule__Clazz__Group_3__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3106:1: rule__Clazz__Group_3__0 : rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1 ;
    public final void rule__Clazz__Group_3__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3110:1: ( rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3111:2: rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__0__Impl_in_rule__Clazz__Group_3__06461);
            rule__Clazz__Group_3__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__1_in_rule__Clazz__Group_3__06464);
            rule__Clazz__Group_3__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_3__0"


    // $ANTLR start "rule__Clazz__Group_3__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3118:1: rule__Clazz__Group_3__0__Impl : ( '{' ) ;
    public final void rule__Clazz__Group_3__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3122:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3123:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3123:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3124:1: '{'
            {
             before(grammarAccess.getClazzAccess().getLeftCurlyBracketKeyword_3_0()); 
            match(input,42,FOLLOW_42_in_rule__Clazz__Group_3__0__Impl6492); 
             after(grammarAccess.getClazzAccess().getLeftCurlyBracketKeyword_3_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_3__0__Impl"


    // $ANTLR start "rule__Clazz__Group_3__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3137:1: rule__Clazz__Group_3__1 : rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2 ;
    public final void rule__Clazz__Group_3__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3141:1: ( rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3142:2: rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__1__Impl_in_rule__Clazz__Group_3__16523);
            rule__Clazz__Group_3__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__2_in_rule__Clazz__Group_3__16526);
            rule__Clazz__Group_3__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_3__1"


    // $ANTLR start "rule__Clazz__Group_3__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3149:1: rule__Clazz__Group_3__1__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Clazz__Group_3__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3153:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3154:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3154:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3155:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_3_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3156:1: ( RULE_END_LINE )?
            int alt37=2;
            int LA37_0 = input.LA(1);

            if ( (LA37_0==RULE_END_LINE) ) {
                alt37=1;
            }
            switch (alt37) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3156:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Clazz__Group_3__1__Impl6554); 

                    }
                    break;

            }

             after(grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_3_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_3__1__Impl"


    // $ANTLR start "rule__Clazz__Group_3__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3166:1: rule__Clazz__Group_3__2 : rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3 ;
    public final void rule__Clazz__Group_3__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3170:1: ( rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3171:2: rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__2__Impl_in_rule__Clazz__Group_3__26585);
            rule__Clazz__Group_3__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__3_in_rule__Clazz__Group_3__26588);
            rule__Clazz__Group_3__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_3__2"


    // $ANTLR start "rule__Clazz__Group_3__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3178:1: rule__Clazz__Group_3__2__Impl : ( ( rule__Clazz__PropertiesAssignment_3_2 )* ) ;
    public final void rule__Clazz__Group_3__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3182:1: ( ( ( rule__Clazz__PropertiesAssignment_3_2 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3183:1: ( ( rule__Clazz__PropertiesAssignment_3_2 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3183:1: ( ( rule__Clazz__PropertiesAssignment_3_2 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3184:1: ( rule__Clazz__PropertiesAssignment_3_2 )*
            {
             before(grammarAccess.getClazzAccess().getPropertiesAssignment_3_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3185:1: ( rule__Clazz__PropertiesAssignment_3_2 )*
            loop38:
            do {
                int alt38=2;
                int LA38_0 = input.LA(1);

                if ( (LA38_0==RULE_ID) ) {
                    alt38=1;
                }


                switch (alt38) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3185:2: rule__Clazz__PropertiesAssignment_3_2
            	    {
            	    pushFollow(FOLLOW_rule__Clazz__PropertiesAssignment_3_2_in_rule__Clazz__Group_3__2__Impl6615);
            	    rule__Clazz__PropertiesAssignment_3_2();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop38;
                }
            } while (true);

             after(grammarAccess.getClazzAccess().getPropertiesAssignment_3_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_3__2__Impl"


    // $ANTLR start "rule__Clazz__Group_3__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3195:1: rule__Clazz__Group_3__3 : rule__Clazz__Group_3__3__Impl ;
    public final void rule__Clazz__Group_3__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3199:1: ( rule__Clazz__Group_3__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3200:2: rule__Clazz__Group_3__3__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__3__Impl_in_rule__Clazz__Group_3__36646);
            rule__Clazz__Group_3__3__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_3__3"


    // $ANTLR start "rule__Clazz__Group_3__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3206:1: rule__Clazz__Group_3__3__Impl : ( '}' ) ;
    public final void rule__Clazz__Group_3__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3210:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3211:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3211:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3212:1: '}'
            {
             before(grammarAccess.getClazzAccess().getRightCurlyBracketKeyword_3_3()); 
            match(input,43,FOLLOW_43_in_rule__Clazz__Group_3__3__Impl6674); 
             after(grammarAccess.getClazzAccess().getRightCurlyBracketKeyword_3_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__Group_3__3__Impl"


    // $ANTLR start "rule__Property__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3233:1: rule__Property__Group__0 : rule__Property__Group__0__Impl rule__Property__Group__1 ;
    public final void rule__Property__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3237:1: ( rule__Property__Group__0__Impl rule__Property__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3238:2: rule__Property__Group__0__Impl rule__Property__Group__1
            {
            pushFollow(FOLLOW_rule__Property__Group__0__Impl_in_rule__Property__Group__06713);
            rule__Property__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group__1_in_rule__Property__Group__06716);
            rule__Property__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group__0"


    // $ANTLR start "rule__Property__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3245:1: rule__Property__Group__0__Impl : ( ( rule__Property__NameAssignment_0 ) ) ;
    public final void rule__Property__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3249:1: ( ( ( rule__Property__NameAssignment_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3250:1: ( ( rule__Property__NameAssignment_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3250:1: ( ( rule__Property__NameAssignment_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3251:1: ( rule__Property__NameAssignment_0 )
            {
             before(grammarAccess.getPropertyAccess().getNameAssignment_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3252:1: ( rule__Property__NameAssignment_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3252:2: rule__Property__NameAssignment_0
            {
            pushFollow(FOLLOW_rule__Property__NameAssignment_0_in_rule__Property__Group__0__Impl6743);
            rule__Property__NameAssignment_0();

            state._fsp--;


            }

             after(grammarAccess.getPropertyAccess().getNameAssignment_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group__0__Impl"


    // $ANTLR start "rule__Property__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3262:1: rule__Property__Group__1 : rule__Property__Group__1__Impl rule__Property__Group__2 ;
    public final void rule__Property__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3266:1: ( rule__Property__Group__1__Impl rule__Property__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3267:2: rule__Property__Group__1__Impl rule__Property__Group__2
            {
            pushFollow(FOLLOW_rule__Property__Group__1__Impl_in_rule__Property__Group__16773);
            rule__Property__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group__2_in_rule__Property__Group__16776);
            rule__Property__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group__1"


    // $ANTLR start "rule__Property__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3274:1: rule__Property__Group__1__Impl : ( ( rule__Property__Alternatives_1 ) ) ;
    public final void rule__Property__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3278:1: ( ( ( rule__Property__Alternatives_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3279:1: ( ( rule__Property__Alternatives_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3279:1: ( ( rule__Property__Alternatives_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3280:1: ( rule__Property__Alternatives_1 )
            {
             before(grammarAccess.getPropertyAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3281:1: ( rule__Property__Alternatives_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3281:2: rule__Property__Alternatives_1
            {
            pushFollow(FOLLOW_rule__Property__Alternatives_1_in_rule__Property__Group__1__Impl6803);
            rule__Property__Alternatives_1();

            state._fsp--;


            }

             after(grammarAccess.getPropertyAccess().getAlternatives_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group__1__Impl"


    // $ANTLR start "rule__Property__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3291:1: rule__Property__Group__2 : rule__Property__Group__2__Impl ;
    public final void rule__Property__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3295:1: ( rule__Property__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3296:2: rule__Property__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group__2__Impl_in_rule__Property__Group__26833);
            rule__Property__Group__2__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group__2"


    // $ANTLR start "rule__Property__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3302:1: rule__Property__Group__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Property__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3306:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3307:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3307:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3308:1: RULE_END_LINE
            {
             before(grammarAccess.getPropertyAccess().getEND_LINETerminalRuleCall_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Property__Group__2__Impl6860); 
             after(grammarAccess.getPropertyAccess().getEND_LINETerminalRuleCall_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group__2__Impl"


    // $ANTLR start "rule__Property__Group_1_0__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3325:1: rule__Property__Group_1_0__0 : rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1 ;
    public final void rule__Property__Group_1_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3329:1: ( rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3330:2: rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0__0__Impl_in_rule__Property__Group_1_0__06895);
            rule__Property__Group_1_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_0__1_in_rule__Property__Group_1_0__06898);
            rule__Property__Group_1_0__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_0__0"


    // $ANTLR start "rule__Property__Group_1_0__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3337:1: rule__Property__Group_1_0__0__Impl : ( ( rule__Property__OptionalAssignment_1_0_0 )? ) ;
    public final void rule__Property__Group_1_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3341:1: ( ( ( rule__Property__OptionalAssignment_1_0_0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3342:1: ( ( rule__Property__OptionalAssignment_1_0_0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3342:1: ( ( rule__Property__OptionalAssignment_1_0_0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3343:1: ( rule__Property__OptionalAssignment_1_0_0 )?
            {
             before(grammarAccess.getPropertyAccess().getOptionalAssignment_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3344:1: ( rule__Property__OptionalAssignment_1_0_0 )?
            int alt39=2;
            int LA39_0 = input.LA(1);

            if ( (LA39_0==30) ) {
                alt39=1;
            }
            switch (alt39) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3344:2: rule__Property__OptionalAssignment_1_0_0
                    {
                    pushFollow(FOLLOW_rule__Property__OptionalAssignment_1_0_0_in_rule__Property__Group_1_0__0__Impl6925);
                    rule__Property__OptionalAssignment_1_0_0();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getPropertyAccess().getOptionalAssignment_1_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_0__0__Impl"


    // $ANTLR start "rule__Property__Group_1_0__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3354:1: rule__Property__Group_1_0__1 : rule__Property__Group_1_0__1__Impl ;
    public final void rule__Property__Group_1_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3358:1: ( rule__Property__Group_1_0__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3359:2: rule__Property__Group_1_0__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0__1__Impl_in_rule__Property__Group_1_0__16956);
            rule__Property__Group_1_0__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_0__1"


    // $ANTLR start "rule__Property__Group_1_0__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3365:1: rule__Property__Group_1_0__1__Impl : ( ( rule__Property__Group_1_0_1__0 )? ) ;
    public final void rule__Property__Group_1_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3369:1: ( ( ( rule__Property__Group_1_0_1__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3370:1: ( ( rule__Property__Group_1_0_1__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3370:1: ( ( rule__Property__Group_1_0_1__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3371:1: ( rule__Property__Group_1_0_1__0 )?
            {
             before(grammarAccess.getPropertyAccess().getGroup_1_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3372:1: ( rule__Property__Group_1_0_1__0 )?
            int alt40=2;
            int LA40_0 = input.LA(1);

            if ( (LA40_0==29) ) {
                alt40=1;
            }
            switch (alt40) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3372:2: rule__Property__Group_1_0_1__0
                    {
                    pushFollow(FOLLOW_rule__Property__Group_1_0_1__0_in_rule__Property__Group_1_0__1__Impl6983);
                    rule__Property__Group_1_0_1__0();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getPropertyAccess().getGroup_1_0_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_0__1__Impl"


    // $ANTLR start "rule__Property__Group_1_0_1__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3386:1: rule__Property__Group_1_0_1__0 : rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1 ;
    public final void rule__Property__Group_1_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3390:1: ( rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3391:2: rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0_1__0__Impl_in_rule__Property__Group_1_0_1__07018);
            rule__Property__Group_1_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_0_1__1_in_rule__Property__Group_1_0_1__07021);
            rule__Property__Group_1_0_1__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_0_1__0"


    // $ANTLR start "rule__Property__Group_1_0_1__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3398:1: rule__Property__Group_1_0_1__0__Impl : ( ':' ) ;
    public final void rule__Property__Group_1_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3402:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3403:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3403:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3404:1: ':'
            {
             before(grammarAccess.getPropertyAccess().getColonKeyword_1_0_1_0()); 
            match(input,29,FOLLOW_29_in_rule__Property__Group_1_0_1__0__Impl7049); 
             after(grammarAccess.getPropertyAccess().getColonKeyword_1_0_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_0_1__0__Impl"


    // $ANTLR start "rule__Property__Group_1_0_1__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3417:1: rule__Property__Group_1_0_1__1 : rule__Property__Group_1_0_1__1__Impl ;
    public final void rule__Property__Group_1_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3421:1: ( rule__Property__Group_1_0_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3422:2: rule__Property__Group_1_0_1__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0_1__1__Impl_in_rule__Property__Group_1_0_1__17080);
            rule__Property__Group_1_0_1__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_0_1__1"


    // $ANTLR start "rule__Property__Group_1_0_1__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3428:1: rule__Property__Group_1_0_1__1__Impl : ( ( rule__Property__Alternatives_1_0_1_1 ) ) ;
    public final void rule__Property__Group_1_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3432:1: ( ( ( rule__Property__Alternatives_1_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3433:1: ( ( rule__Property__Alternatives_1_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3433:1: ( ( rule__Property__Alternatives_1_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3434:1: ( rule__Property__Alternatives_1_0_1_1 )
            {
             before(grammarAccess.getPropertyAccess().getAlternatives_1_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3435:1: ( rule__Property__Alternatives_1_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3435:2: rule__Property__Alternatives_1_0_1_1
            {
            pushFollow(FOLLOW_rule__Property__Alternatives_1_0_1_1_in_rule__Property__Group_1_0_1__1__Impl7107);
            rule__Property__Alternatives_1_0_1_1();

            state._fsp--;


            }

             after(grammarAccess.getPropertyAccess().getAlternatives_1_0_1_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_0_1__1__Impl"


    // $ANTLR start "rule__Property__Group_1_1__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3449:1: rule__Property__Group_1_1__0 : rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1 ;
    public final void rule__Property__Group_1_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3453:1: ( rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3454:2: rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_1__0__Impl_in_rule__Property__Group_1_1__07141);
            rule__Property__Group_1_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_1__1_in_rule__Property__Group_1_1__07144);
            rule__Property__Group_1_1__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_1__0"


    // $ANTLR start "rule__Property__Group_1_1__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3461:1: rule__Property__Group_1_1__0__Impl : ( ( rule__Property__ConstantAssignment_1_1_0 ) ) ;
    public final void rule__Property__Group_1_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3465:1: ( ( ( rule__Property__ConstantAssignment_1_1_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3466:1: ( ( rule__Property__ConstantAssignment_1_1_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3466:1: ( ( rule__Property__ConstantAssignment_1_1_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3467:1: ( rule__Property__ConstantAssignment_1_1_0 )
            {
             before(grammarAccess.getPropertyAccess().getConstantAssignment_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3468:1: ( rule__Property__ConstantAssignment_1_1_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3468:2: rule__Property__ConstantAssignment_1_1_0
            {
            pushFollow(FOLLOW_rule__Property__ConstantAssignment_1_1_0_in_rule__Property__Group_1_1__0__Impl7171);
            rule__Property__ConstantAssignment_1_1_0();

            state._fsp--;


            }

             after(grammarAccess.getPropertyAccess().getConstantAssignment_1_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_1__0__Impl"


    // $ANTLR start "rule__Property__Group_1_1__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3478:1: rule__Property__Group_1_1__1 : rule__Property__Group_1_1__1__Impl ;
    public final void rule__Property__Group_1_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3482:1: ( rule__Property__Group_1_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3483:2: rule__Property__Group_1_1__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_1__1__Impl_in_rule__Property__Group_1_1__17201);
            rule__Property__Group_1_1__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_1__1"


    // $ANTLR start "rule__Property__Group_1_1__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3489:1: rule__Property__Group_1_1__1__Impl : ( ( rule__Property__ValueAssignment_1_1_1 ) ) ;
    public final void rule__Property__Group_1_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3493:1: ( ( ( rule__Property__ValueAssignment_1_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3494:1: ( ( rule__Property__ValueAssignment_1_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3494:1: ( ( rule__Property__ValueAssignment_1_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3495:1: ( rule__Property__ValueAssignment_1_1_1 )
            {
             before(grammarAccess.getPropertyAccess().getValueAssignment_1_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3496:1: ( rule__Property__ValueAssignment_1_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3496:2: rule__Property__ValueAssignment_1_1_1
            {
            pushFollow(FOLLOW_rule__Property__ValueAssignment_1_1_1_in_rule__Property__Group_1_1__1__Impl7228);
            rule__Property__ValueAssignment_1_1_1();

            state._fsp--;


            }

             after(grammarAccess.getPropertyAccess().getValueAssignment_1_1_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__Group_1_1__1__Impl"


    // $ANTLR start "rule__EntityList__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3510:1: rule__EntityList__Group__0 : rule__EntityList__Group__0__Impl rule__EntityList__Group__1 ;
    public final void rule__EntityList__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3514:1: ( rule__EntityList__Group__0__Impl rule__EntityList__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3515:2: rule__EntityList__Group__0__Impl rule__EntityList__Group__1
            {
            pushFollow(FOLLOW_rule__EntityList__Group__0__Impl_in_rule__EntityList__Group__07262);
            rule__EntityList__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__1_in_rule__EntityList__Group__07265);
            rule__EntityList__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group__0"


    // $ANTLR start "rule__EntityList__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3522:1: rule__EntityList__Group__0__Impl : ( '[' ) ;
    public final void rule__EntityList__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3526:1: ( ( '[' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3527:1: ( '[' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3527:1: ( '[' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3528:1: '['
            {
             before(grammarAccess.getEntityListAccess().getLeftSquareBracketKeyword_0()); 
            match(input,48,FOLLOW_48_in_rule__EntityList__Group__0__Impl7293); 
             after(grammarAccess.getEntityListAccess().getLeftSquareBracketKeyword_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group__0__Impl"


    // $ANTLR start "rule__EntityList__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3541:1: rule__EntityList__Group__1 : rule__EntityList__Group__1__Impl rule__EntityList__Group__2 ;
    public final void rule__EntityList__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3545:1: ( rule__EntityList__Group__1__Impl rule__EntityList__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3546:2: rule__EntityList__Group__1__Impl rule__EntityList__Group__2
            {
            pushFollow(FOLLOW_rule__EntityList__Group__1__Impl_in_rule__EntityList__Group__17324);
            rule__EntityList__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__2_in_rule__EntityList__Group__17327);
            rule__EntityList__Group__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group__1"


    // $ANTLR start "rule__EntityList__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3553:1: rule__EntityList__Group__1__Impl : ( ( rule__EntityList__RefsAssignment_1 ) ) ;
    public final void rule__EntityList__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3557:1: ( ( ( rule__EntityList__RefsAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3558:1: ( ( rule__EntityList__RefsAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3558:1: ( ( rule__EntityList__RefsAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3559:1: ( rule__EntityList__RefsAssignment_1 )
            {
             before(grammarAccess.getEntityListAccess().getRefsAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3560:1: ( rule__EntityList__RefsAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3560:2: rule__EntityList__RefsAssignment_1
            {
            pushFollow(FOLLOW_rule__EntityList__RefsAssignment_1_in_rule__EntityList__Group__1__Impl7354);
            rule__EntityList__RefsAssignment_1();

            state._fsp--;


            }

             after(grammarAccess.getEntityListAccess().getRefsAssignment_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group__1__Impl"


    // $ANTLR start "rule__EntityList__Group__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3570:1: rule__EntityList__Group__2 : rule__EntityList__Group__2__Impl rule__EntityList__Group__3 ;
    public final void rule__EntityList__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3574:1: ( rule__EntityList__Group__2__Impl rule__EntityList__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3575:2: rule__EntityList__Group__2__Impl rule__EntityList__Group__3
            {
            pushFollow(FOLLOW_rule__EntityList__Group__2__Impl_in_rule__EntityList__Group__27384);
            rule__EntityList__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__3_in_rule__EntityList__Group__27387);
            rule__EntityList__Group__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group__2"


    // $ANTLR start "rule__EntityList__Group__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3582:1: rule__EntityList__Group__2__Impl : ( ( rule__EntityList__Group_2__0 )* ) ;
    public final void rule__EntityList__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3586:1: ( ( ( rule__EntityList__Group_2__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3587:1: ( ( rule__EntityList__Group_2__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3587:1: ( ( rule__EntityList__Group_2__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3588:1: ( rule__EntityList__Group_2__0 )*
            {
             before(grammarAccess.getEntityListAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3589:1: ( rule__EntityList__Group_2__0 )*
            loop41:
            do {
                int alt41=2;
                int LA41_0 = input.LA(1);

                if ( (LA41_0==50) ) {
                    alt41=1;
                }


                switch (alt41) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3589:2: rule__EntityList__Group_2__0
            	    {
            	    pushFollow(FOLLOW_rule__EntityList__Group_2__0_in_rule__EntityList__Group__2__Impl7414);
            	    rule__EntityList__Group_2__0();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop41;
                }
            } while (true);

             after(grammarAccess.getEntityListAccess().getGroup_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group__2__Impl"


    // $ANTLR start "rule__EntityList__Group__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3599:1: rule__EntityList__Group__3 : rule__EntityList__Group__3__Impl ;
    public final void rule__EntityList__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3603:1: ( rule__EntityList__Group__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3604:2: rule__EntityList__Group__3__Impl
            {
            pushFollow(FOLLOW_rule__EntityList__Group__3__Impl_in_rule__EntityList__Group__37445);
            rule__EntityList__Group__3__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group__3"


    // $ANTLR start "rule__EntityList__Group__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3610:1: rule__EntityList__Group__3__Impl : ( ']' ) ;
    public final void rule__EntityList__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3614:1: ( ( ']' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3615:1: ( ']' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3615:1: ( ']' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3616:1: ']'
            {
             before(grammarAccess.getEntityListAccess().getRightSquareBracketKeyword_3()); 
            match(input,49,FOLLOW_49_in_rule__EntityList__Group__3__Impl7473); 
             after(grammarAccess.getEntityListAccess().getRightSquareBracketKeyword_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group__3__Impl"


    // $ANTLR start "rule__EntityList__Group_2__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3637:1: rule__EntityList__Group_2__0 : rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1 ;
    public final void rule__EntityList__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3641:1: ( rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3642:2: rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1
            {
            pushFollow(FOLLOW_rule__EntityList__Group_2__0__Impl_in_rule__EntityList__Group_2__07512);
            rule__EntityList__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group_2__1_in_rule__EntityList__Group_2__07515);
            rule__EntityList__Group_2__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group_2__0"


    // $ANTLR start "rule__EntityList__Group_2__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3649:1: rule__EntityList__Group_2__0__Impl : ( '|' ) ;
    public final void rule__EntityList__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3653:1: ( ( '|' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3654:1: ( '|' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3654:1: ( '|' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3655:1: '|'
            {
             before(grammarAccess.getEntityListAccess().getVerticalLineKeyword_2_0()); 
            match(input,50,FOLLOW_50_in_rule__EntityList__Group_2__0__Impl7543); 
             after(grammarAccess.getEntityListAccess().getVerticalLineKeyword_2_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group_2__0__Impl"


    // $ANTLR start "rule__EntityList__Group_2__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3668:1: rule__EntityList__Group_2__1 : rule__EntityList__Group_2__1__Impl ;
    public final void rule__EntityList__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3672:1: ( rule__EntityList__Group_2__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3673:2: rule__EntityList__Group_2__1__Impl
            {
            pushFollow(FOLLOW_rule__EntityList__Group_2__1__Impl_in_rule__EntityList__Group_2__17574);
            rule__EntityList__Group_2__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group_2__1"


    // $ANTLR start "rule__EntityList__Group_2__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3679:1: rule__EntityList__Group_2__1__Impl : ( ( rule__EntityList__RefsAssignment_2_1 ) ) ;
    public final void rule__EntityList__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3683:1: ( ( ( rule__EntityList__RefsAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3684:1: ( ( rule__EntityList__RefsAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3684:1: ( ( rule__EntityList__RefsAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3685:1: ( rule__EntityList__RefsAssignment_2_1 )
            {
             before(grammarAccess.getEntityListAccess().getRefsAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3686:1: ( rule__EntityList__RefsAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3686:2: rule__EntityList__RefsAssignment_2_1
            {
            pushFollow(FOLLOW_rule__EntityList__RefsAssignment_2_1_in_rule__EntityList__Group_2__1__Impl7601);
            rule__EntityList__RefsAssignment_2_1();

            state._fsp--;


            }

             after(grammarAccess.getEntityListAccess().getRefsAssignment_2_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__Group_2__1__Impl"


    // $ANTLR start "rule__Note__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3700:1: rule__Note__Group__0 : rule__Note__Group__0__Impl rule__Note__Group__1 ;
    public final void rule__Note__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3704:1: ( rule__Note__Group__0__Impl rule__Note__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3705:2: rule__Note__Group__0__Impl rule__Note__Group__1
            {
            pushFollow(FOLLOW_rule__Note__Group__0__Impl_in_rule__Note__Group__07635);
            rule__Note__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group__1_in_rule__Note__Group__07638);
            rule__Note__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group__0"


    // $ANTLR start "rule__Note__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3712:1: rule__Note__Group__0__Impl : ( 'note' ) ;
    public final void rule__Note__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3716:1: ( ( 'note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3717:1: ( 'note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3717:1: ( 'note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3718:1: 'note'
            {
             before(grammarAccess.getNoteAccess().getNoteKeyword_0()); 
            match(input,26,FOLLOW_26_in_rule__Note__Group__0__Impl7666); 
             after(grammarAccess.getNoteAccess().getNoteKeyword_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group__0__Impl"


    // $ANTLR start "rule__Note__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3731:1: rule__Note__Group__1 : rule__Note__Group__1__Impl ;
    public final void rule__Note__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3735:1: ( rule__Note__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3736:2: rule__Note__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group__1__Impl_in_rule__Note__Group__17697);
            rule__Note__Group__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group__1"


    // $ANTLR start "rule__Note__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3742:1: rule__Note__Group__1__Impl : ( ( rule__Note__Alternatives_1 ) ) ;
    public final void rule__Note__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3746:1: ( ( ( rule__Note__Alternatives_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3747:1: ( ( rule__Note__Alternatives_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3747:1: ( ( rule__Note__Alternatives_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3748:1: ( rule__Note__Alternatives_1 )
            {
             before(grammarAccess.getNoteAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3749:1: ( rule__Note__Alternatives_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3749:2: rule__Note__Alternatives_1
            {
            pushFollow(FOLLOW_rule__Note__Alternatives_1_in_rule__Note__Group__1__Impl7724);
            rule__Note__Alternatives_1();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getAlternatives_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group__1__Impl"


    // $ANTLR start "rule__Note__Group_1_0_0__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3763:1: rule__Note__Group_1_0_0__0 : rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1 ;
    public final void rule__Note__Group_1_0_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3767:1: ( rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3768:2: rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0__0__Impl_in_rule__Note__Group_1_0_0__07758);
            rule__Note__Group_1_0_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0__1_in_rule__Note__Group_1_0_0__07761);
            rule__Note__Group_1_0_0__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0__0"


    // $ANTLR start "rule__Note__Group_1_0_0__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3775:1: rule__Note__Group_1_0_0__0__Impl : ( ( rule__Note__PositionAssignment_1_0_0_0 ) ) ;
    public final void rule__Note__Group_1_0_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3779:1: ( ( ( rule__Note__PositionAssignment_1_0_0_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3780:1: ( ( rule__Note__PositionAssignment_1_0_0_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3780:1: ( ( rule__Note__PositionAssignment_1_0_0_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3781:1: ( rule__Note__PositionAssignment_1_0_0_0 )
            {
             before(grammarAccess.getNoteAccess().getPositionAssignment_1_0_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3782:1: ( rule__Note__PositionAssignment_1_0_0_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3782:2: rule__Note__PositionAssignment_1_0_0_0
            {
            pushFollow(FOLLOW_rule__Note__PositionAssignment_1_0_0_0_in_rule__Note__Group_1_0_0__0__Impl7788);
            rule__Note__PositionAssignment_1_0_0_0();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getPositionAssignment_1_0_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0__0__Impl"


    // $ANTLR start "rule__Note__Group_1_0_0__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3792:1: rule__Note__Group_1_0_0__1 : rule__Note__Group_1_0_0__1__Impl ;
    public final void rule__Note__Group_1_0_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3796:1: ( rule__Note__Group_1_0_0__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3797:2: rule__Note__Group_1_0_0__1__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0__1__Impl_in_rule__Note__Group_1_0_0__17818);
            rule__Note__Group_1_0_0__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0__1"


    // $ANTLR start "rule__Note__Group_1_0_0__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3803:1: rule__Note__Group_1_0_0__1__Impl : ( ( rule__Note__Group_1_0_0_1__0 ) ) ;
    public final void rule__Note__Group_1_0_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3807:1: ( ( ( rule__Note__Group_1_0_0_1__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3808:1: ( ( rule__Note__Group_1_0_0_1__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3808:1: ( ( rule__Note__Group_1_0_0_1__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3809:1: ( rule__Note__Group_1_0_0_1__0 )
            {
             before(grammarAccess.getNoteAccess().getGroup_1_0_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3810:1: ( rule__Note__Group_1_0_0_1__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3810:2: rule__Note__Group_1_0_0_1__0
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__0_in_rule__Note__Group_1_0_0__1__Impl7845);
            rule__Note__Group_1_0_0_1__0();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getGroup_1_0_0_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0__1__Impl"


    // $ANTLR start "rule__Note__Group_1_0_0_1__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3824:1: rule__Note__Group_1_0_0_1__0 : rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1 ;
    public final void rule__Note__Group_1_0_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3828:1: ( rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3829:2: rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__0__Impl_in_rule__Note__Group_1_0_0_1__07879);
            rule__Note__Group_1_0_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__1_in_rule__Note__Group_1_0_0_1__07882);
            rule__Note__Group_1_0_0_1__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0_1__0"


    // $ANTLR start "rule__Note__Group_1_0_0_1__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3836:1: rule__Note__Group_1_0_0_1__0__Impl : ( ':' ) ;
    public final void rule__Note__Group_1_0_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3840:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3841:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3841:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3842:1: ':'
            {
             before(grammarAccess.getNoteAccess().getColonKeyword_1_0_0_1_0()); 
            match(input,29,FOLLOW_29_in_rule__Note__Group_1_0_0_1__0__Impl7910); 
             after(grammarAccess.getNoteAccess().getColonKeyword_1_0_0_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0_1__0__Impl"


    // $ANTLR start "rule__Note__Group_1_0_0_1__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3855:1: rule__Note__Group_1_0_0_1__1 : rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2 ;
    public final void rule__Note__Group_1_0_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3859:1: ( rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3860:2: rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__1__Impl_in_rule__Note__Group_1_0_0_1__17941);
            rule__Note__Group_1_0_0_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__2_in_rule__Note__Group_1_0_0_1__17944);
            rule__Note__Group_1_0_0_1__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0_1__1"


    // $ANTLR start "rule__Note__Group_1_0_0_1__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3867:1: rule__Note__Group_1_0_0_1__1__Impl : ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) ) ;
    public final void rule__Note__Group_1_0_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3871:1: ( ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3872:1: ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3872:1: ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3873:1: ( rule__Note__ValueAssignment_1_0_0_1_1 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_0_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3874:1: ( rule__Note__ValueAssignment_1_0_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3874:2: rule__Note__ValueAssignment_1_0_0_1_1
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_0_0_1_1_in_rule__Note__Group_1_0_0_1__1__Impl7971);
            rule__Note__ValueAssignment_1_0_0_1_1();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getValueAssignment_1_0_0_1_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0_1__1__Impl"


    // $ANTLR start "rule__Note__Group_1_0_0_1__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3884:1: rule__Note__Group_1_0_0_1__2 : rule__Note__Group_1_0_0_1__2__Impl ;
    public final void rule__Note__Group_1_0_0_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3888:1: ( rule__Note__Group_1_0_0_1__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3889:2: rule__Note__Group_1_0_0_1__2__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__2__Impl_in_rule__Note__Group_1_0_0_1__28001);
            rule__Note__Group_1_0_0_1__2__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0_1__2"


    // $ANTLR start "rule__Note__Group_1_0_0_1__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3895:1: rule__Note__Group_1_0_0_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_0_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3899:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3900:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3900:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3901:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_0_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_0_1__2__Impl8028); 
             after(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_0_1_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_0_1__2__Impl"


    // $ANTLR start "rule__Note__Group_1_0_1__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3918:1: rule__Note__Group_1_0_1__0 : rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1 ;
    public final void rule__Note__Group_1_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3922:1: ( rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3923:2: rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__0__Impl_in_rule__Note__Group_1_0_1__08063);
            rule__Note__Group_1_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__1_in_rule__Note__Group_1_0_1__08066);
            rule__Note__Group_1_0_1__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__0"


    // $ANTLR start "rule__Note__Group_1_0_1__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3930:1: rule__Note__Group_1_0_1__0__Impl : ( 'of' ) ;
    public final void rule__Note__Group_1_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3934:1: ( ( 'of' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3935:1: ( 'of' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3935:1: ( 'of' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3936:1: 'of'
            {
             before(grammarAccess.getNoteAccess().getOfKeyword_1_0_1_0()); 
            match(input,28,FOLLOW_28_in_rule__Note__Group_1_0_1__0__Impl8094); 
             after(grammarAccess.getNoteAccess().getOfKeyword_1_0_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__0__Impl"


    // $ANTLR start "rule__Note__Group_1_0_1__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3949:1: rule__Note__Group_1_0_1__1 : rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2 ;
    public final void rule__Note__Group_1_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3953:1: ( rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3954:2: rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__1__Impl_in_rule__Note__Group_1_0_1__18125);
            rule__Note__Group_1_0_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__2_in_rule__Note__Group_1_0_1__18128);
            rule__Note__Group_1_0_1__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__1"


    // $ANTLR start "rule__Note__Group_1_0_1__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3961:1: rule__Note__Group_1_0_1__1__Impl : ( ( rule__Note__OfAssignment_1_0_1_1 ) ) ;
    public final void rule__Note__Group_1_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3965:1: ( ( ( rule__Note__OfAssignment_1_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3966:1: ( ( rule__Note__OfAssignment_1_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3966:1: ( ( rule__Note__OfAssignment_1_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3967:1: ( rule__Note__OfAssignment_1_0_1_1 )
            {
             before(grammarAccess.getNoteAccess().getOfAssignment_1_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3968:1: ( rule__Note__OfAssignment_1_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3968:2: rule__Note__OfAssignment_1_0_1_1
            {
            pushFollow(FOLLOW_rule__Note__OfAssignment_1_0_1_1_in_rule__Note__Group_1_0_1__1__Impl8155);
            rule__Note__OfAssignment_1_0_1_1();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getOfAssignment_1_0_1_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__1__Impl"


    // $ANTLR start "rule__Note__Group_1_0_1__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3978:1: rule__Note__Group_1_0_1__2 : rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3 ;
    public final void rule__Note__Group_1_0_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3982:1: ( rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3983:2: rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__2__Impl_in_rule__Note__Group_1_0_1__28185);
            rule__Note__Group_1_0_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__3_in_rule__Note__Group_1_0_1__28188);
            rule__Note__Group_1_0_1__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__2"


    // $ANTLR start "rule__Note__Group_1_0_1__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3990:1: rule__Note__Group_1_0_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3994:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3995:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3995:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3996:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__2__Impl8215); 
             after(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__2__Impl"


    // $ANTLR start "rule__Note__Group_1_0_1__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4007:1: rule__Note__Group_1_0_1__3 : rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4 ;
    public final void rule__Note__Group_1_0_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4011:1: ( rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4012:2: rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__3__Impl_in_rule__Note__Group_1_0_1__38244);
            rule__Note__Group_1_0_1__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__4_in_rule__Note__Group_1_0_1__38247);
            rule__Note__Group_1_0_1__4();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__3"


    // $ANTLR start "rule__Note__Group_1_0_1__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4019:1: rule__Note__Group_1_0_1__3__Impl : ( ( rule__Note__ValueAssignment_1_0_1_3 ) ) ;
    public final void rule__Note__Group_1_0_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4023:1: ( ( ( rule__Note__ValueAssignment_1_0_1_3 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4024:1: ( ( rule__Note__ValueAssignment_1_0_1_3 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4024:1: ( ( rule__Note__ValueAssignment_1_0_1_3 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4025:1: ( rule__Note__ValueAssignment_1_0_1_3 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_0_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4026:1: ( rule__Note__ValueAssignment_1_0_1_3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4026:2: rule__Note__ValueAssignment_1_0_1_3
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_0_1_3_in_rule__Note__Group_1_0_1__3__Impl8274);
            rule__Note__ValueAssignment_1_0_1_3();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getValueAssignment_1_0_1_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__3__Impl"


    // $ANTLR start "rule__Note__Group_1_0_1__4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4036:1: rule__Note__Group_1_0_1__4 : rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5 ;
    public final void rule__Note__Group_1_0_1__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4040:1: ( rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4041:2: rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__4__Impl_in_rule__Note__Group_1_0_1__48304);
            rule__Note__Group_1_0_1__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__5_in_rule__Note__Group_1_0_1__48307);
            rule__Note__Group_1_0_1__5();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__4"


    // $ANTLR start "rule__Note__Group_1_0_1__4__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4048:1: rule__Note__Group_1_0_1__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4052:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4053:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4053:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4054:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__4__Impl8334); 
             after(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_4()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__4__Impl"


    // $ANTLR start "rule__Note__Group_1_0_1__5"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4065:1: rule__Note__Group_1_0_1__5 : rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6 ;
    public final void rule__Note__Group_1_0_1__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4069:1: ( rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4070:2: rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__5__Impl_in_rule__Note__Group_1_0_1__58363);
            rule__Note__Group_1_0_1__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__6_in_rule__Note__Group_1_0_1__58366);
            rule__Note__Group_1_0_1__6();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__5"


    // $ANTLR start "rule__Note__Group_1_0_1__5__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4077:1: rule__Note__Group_1_0_1__5__Impl : ( 'end note' ) ;
    public final void rule__Note__Group_1_0_1__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4081:1: ( ( 'end note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4082:1: ( 'end note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4082:1: ( 'end note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4083:1: 'end note'
            {
             before(grammarAccess.getNoteAccess().getEndNoteKeyword_1_0_1_5()); 
            match(input,51,FOLLOW_51_in_rule__Note__Group_1_0_1__5__Impl8394); 
             after(grammarAccess.getNoteAccess().getEndNoteKeyword_1_0_1_5()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__5__Impl"


    // $ANTLR start "rule__Note__Group_1_0_1__6"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4096:1: rule__Note__Group_1_0_1__6 : rule__Note__Group_1_0_1__6__Impl ;
    public final void rule__Note__Group_1_0_1__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4100:1: ( rule__Note__Group_1_0_1__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4101:2: rule__Note__Group_1_0_1__6__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__6__Impl_in_rule__Note__Group_1_0_1__68425);
            rule__Note__Group_1_0_1__6__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__6"


    // $ANTLR start "rule__Note__Group_1_0_1__6__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4107:1: rule__Note__Group_1_0_1__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4111:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4112:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4112:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4113:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__6__Impl8452); 
             after(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_6()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_0_1__6__Impl"


    // $ANTLR start "rule__Note__Group_1_1__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4138:1: rule__Note__Group_1_1__0 : rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1 ;
    public final void rule__Note__Group_1_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4142:1: ( rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4143:2: rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__0__Impl_in_rule__Note__Group_1_1__08495);
            rule__Note__Group_1_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__1_in_rule__Note__Group_1_1__08498);
            rule__Note__Group_1_1__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__0"


    // $ANTLR start "rule__Note__Group_1_1__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4150:1: rule__Note__Group_1_1__0__Impl : ( 'as' ) ;
    public final void rule__Note__Group_1_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4154:1: ( ( 'as' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4155:1: ( 'as' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4155:1: ( 'as' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4156:1: 'as'
            {
             before(grammarAccess.getNoteAccess().getAsKeyword_1_1_0()); 
            match(input,27,FOLLOW_27_in_rule__Note__Group_1_1__0__Impl8526); 
             after(grammarAccess.getNoteAccess().getAsKeyword_1_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__0__Impl"


    // $ANTLR start "rule__Note__Group_1_1__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4169:1: rule__Note__Group_1_1__1 : rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2 ;
    public final void rule__Note__Group_1_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4173:1: ( rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4174:2: rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__1__Impl_in_rule__Note__Group_1_1__18557);
            rule__Note__Group_1_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__2_in_rule__Note__Group_1_1__18560);
            rule__Note__Group_1_1__2();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__1"


    // $ANTLR start "rule__Note__Group_1_1__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4181:1: rule__Note__Group_1_1__1__Impl : ( ( rule__Note__NameAssignment_1_1_1 ) ) ;
    public final void rule__Note__Group_1_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4185:1: ( ( ( rule__Note__NameAssignment_1_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4186:1: ( ( rule__Note__NameAssignment_1_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4186:1: ( ( rule__Note__NameAssignment_1_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4187:1: ( rule__Note__NameAssignment_1_1_1 )
            {
             before(grammarAccess.getNoteAccess().getNameAssignment_1_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4188:1: ( rule__Note__NameAssignment_1_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4188:2: rule__Note__NameAssignment_1_1_1
            {
            pushFollow(FOLLOW_rule__Note__NameAssignment_1_1_1_in_rule__Note__Group_1_1__1__Impl8587);
            rule__Note__NameAssignment_1_1_1();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getNameAssignment_1_1_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__1__Impl"


    // $ANTLR start "rule__Note__Group_1_1__2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4198:1: rule__Note__Group_1_1__2 : rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3 ;
    public final void rule__Note__Group_1_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4202:1: ( rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4203:2: rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__2__Impl_in_rule__Note__Group_1_1__28617);
            rule__Note__Group_1_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__3_in_rule__Note__Group_1_1__28620);
            rule__Note__Group_1_1__3();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__2"


    // $ANTLR start "rule__Note__Group_1_1__2__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4210:1: rule__Note__Group_1_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4214:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4215:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4215:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4216:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__2__Impl8647); 
             after(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_2()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__2__Impl"


    // $ANTLR start "rule__Note__Group_1_1__3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4227:1: rule__Note__Group_1_1__3 : rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4 ;
    public final void rule__Note__Group_1_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4231:1: ( rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4232:2: rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__3__Impl_in_rule__Note__Group_1_1__38676);
            rule__Note__Group_1_1__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__4_in_rule__Note__Group_1_1__38679);
            rule__Note__Group_1_1__4();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__3"


    // $ANTLR start "rule__Note__Group_1_1__3__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4239:1: rule__Note__Group_1_1__3__Impl : ( ( rule__Note__ValueAssignment_1_1_3 ) ) ;
    public final void rule__Note__Group_1_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4243:1: ( ( ( rule__Note__ValueAssignment_1_1_3 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4244:1: ( ( rule__Note__ValueAssignment_1_1_3 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4244:1: ( ( rule__Note__ValueAssignment_1_1_3 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4245:1: ( rule__Note__ValueAssignment_1_1_3 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4246:1: ( rule__Note__ValueAssignment_1_1_3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4246:2: rule__Note__ValueAssignment_1_1_3
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_1_3_in_rule__Note__Group_1_1__3__Impl8706);
            rule__Note__ValueAssignment_1_1_3();

            state._fsp--;


            }

             after(grammarAccess.getNoteAccess().getValueAssignment_1_1_3()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__3__Impl"


    // $ANTLR start "rule__Note__Group_1_1__4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4256:1: rule__Note__Group_1_1__4 : rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5 ;
    public final void rule__Note__Group_1_1__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4260:1: ( rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4261:2: rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__4__Impl_in_rule__Note__Group_1_1__48736);
            rule__Note__Group_1_1__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__5_in_rule__Note__Group_1_1__48739);
            rule__Note__Group_1_1__5();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__4"


    // $ANTLR start "rule__Note__Group_1_1__4__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4268:1: rule__Note__Group_1_1__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4272:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4273:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4273:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4274:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__4__Impl8766); 
             after(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_4()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__4__Impl"


    // $ANTLR start "rule__Note__Group_1_1__5"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4285:1: rule__Note__Group_1_1__5 : rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6 ;
    public final void rule__Note__Group_1_1__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4289:1: ( rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4290:2: rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__5__Impl_in_rule__Note__Group_1_1__58795);
            rule__Note__Group_1_1__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__6_in_rule__Note__Group_1_1__58798);
            rule__Note__Group_1_1__6();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__5"


    // $ANTLR start "rule__Note__Group_1_1__5__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4297:1: rule__Note__Group_1_1__5__Impl : ( 'end note' ) ;
    public final void rule__Note__Group_1_1__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4301:1: ( ( 'end note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4302:1: ( 'end note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4302:1: ( 'end note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4303:1: 'end note'
            {
             before(grammarAccess.getNoteAccess().getEndNoteKeyword_1_1_5()); 
            match(input,51,FOLLOW_51_in_rule__Note__Group_1_1__5__Impl8826); 
             after(grammarAccess.getNoteAccess().getEndNoteKeyword_1_1_5()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__5__Impl"


    // $ANTLR start "rule__Note__Group_1_1__6"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4316:1: rule__Note__Group_1_1__6 : rule__Note__Group_1_1__6__Impl ;
    public final void rule__Note__Group_1_1__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4320:1: ( rule__Note__Group_1_1__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4321:2: rule__Note__Group_1_1__6__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__6__Impl_in_rule__Note__Group_1_1__68857);
            rule__Note__Group_1_1__6__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__6"


    // $ANTLR start "rule__Note__Group_1_1__6__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4327:1: rule__Note__Group_1_1__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4331:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4332:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4332:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4333:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__6__Impl8884); 
             after(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_6()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__Group_1_1__6__Impl"


    // $ANTLR start "rule__DataType__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4358:1: rule__DataType__Group__0 : rule__DataType__Group__0__Impl rule__DataType__Group__1 ;
    public final void rule__DataType__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4362:1: ( rule__DataType__Group__0__Impl rule__DataType__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4363:2: rule__DataType__Group__0__Impl rule__DataType__Group__1
            {
            pushFollow(FOLLOW_rule__DataType__Group__0__Impl_in_rule__DataType__Group__08927);
            rule__DataType__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DataType__Group__1_in_rule__DataType__Group__08930);
            rule__DataType__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DataType__Group__0"


    // $ANTLR start "rule__DataType__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4370:1: rule__DataType__Group__0__Impl : ( ( rule__DataType__NativeAssignment_0 ) ) ;
    public final void rule__DataType__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4374:1: ( ( ( rule__DataType__NativeAssignment_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4375:1: ( ( rule__DataType__NativeAssignment_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4375:1: ( ( rule__DataType__NativeAssignment_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4376:1: ( rule__DataType__NativeAssignment_0 )
            {
             before(grammarAccess.getDataTypeAccess().getNativeAssignment_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4377:1: ( rule__DataType__NativeAssignment_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4377:2: rule__DataType__NativeAssignment_0
            {
            pushFollow(FOLLOW_rule__DataType__NativeAssignment_0_in_rule__DataType__Group__0__Impl8957);
            rule__DataType__NativeAssignment_0();

            state._fsp--;


            }

             after(grammarAccess.getDataTypeAccess().getNativeAssignment_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DataType__Group__0__Impl"


    // $ANTLR start "rule__DataType__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4387:1: rule__DataType__Group__1 : rule__DataType__Group__1__Impl ;
    public final void rule__DataType__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4391:1: ( rule__DataType__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4392:2: rule__DataType__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__DataType__Group__1__Impl_in_rule__DataType__Group__18987);
            rule__DataType__Group__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DataType__Group__1"


    // $ANTLR start "rule__DataType__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4398:1: rule__DataType__Group__1__Impl : ( ( rule__DataType__IsArrayAssignment_1 )? ) ;
    public final void rule__DataType__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4402:1: ( ( ( rule__DataType__IsArrayAssignment_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4403:1: ( ( rule__DataType__IsArrayAssignment_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4403:1: ( ( rule__DataType__IsArrayAssignment_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4404:1: ( rule__DataType__IsArrayAssignment_1 )?
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4405:1: ( rule__DataType__IsArrayAssignment_1 )?
            int alt42=2;
            int LA42_0 = input.LA(1);

            if ( (LA42_0==55) ) {
                alt42=1;
            }
            switch (alt42) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4405:2: rule__DataType__IsArrayAssignment_1
                    {
                    pushFollow(FOLLOW_rule__DataType__IsArrayAssignment_1_in_rule__DataType__Group__1__Impl9014);
                    rule__DataType__IsArrayAssignment_1();

                    state._fsp--;


                    }
                    break;

            }

             after(grammarAccess.getDataTypeAccess().getIsArrayAssignment_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DataType__Group__1__Impl"


    // $ANTLR start "rule__QualifiedName__Group__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4419:1: rule__QualifiedName__Group__0 : rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1 ;
    public final void rule__QualifiedName__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4423:1: ( rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4424:2: rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group__0__Impl_in_rule__QualifiedName__Group__09049);
            rule__QualifiedName__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__QualifiedName__Group__1_in_rule__QualifiedName__Group__09052);
            rule__QualifiedName__Group__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__QualifiedName__Group__0"


    // $ANTLR start "rule__QualifiedName__Group__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4431:1: rule__QualifiedName__Group__0__Impl : ( RULE_ID ) ;
    public final void rule__QualifiedName__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4435:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4436:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4436:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4437:1: RULE_ID
            {
             before(grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__QualifiedName__Group__0__Impl9079); 
             after(grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__QualifiedName__Group__0__Impl"


    // $ANTLR start "rule__QualifiedName__Group__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4448:1: rule__QualifiedName__Group__1 : rule__QualifiedName__Group__1__Impl ;
    public final void rule__QualifiedName__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4452:1: ( rule__QualifiedName__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4453:2: rule__QualifiedName__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group__1__Impl_in_rule__QualifiedName__Group__19108);
            rule__QualifiedName__Group__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__QualifiedName__Group__1"


    // $ANTLR start "rule__QualifiedName__Group__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4459:1: rule__QualifiedName__Group__1__Impl : ( ( rule__QualifiedName__Group_1__0 )* ) ;
    public final void rule__QualifiedName__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4463:1: ( ( ( rule__QualifiedName__Group_1__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4464:1: ( ( rule__QualifiedName__Group_1__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4464:1: ( ( rule__QualifiedName__Group_1__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4465:1: ( rule__QualifiedName__Group_1__0 )*
            {
             before(grammarAccess.getQualifiedNameAccess().getGroup_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4466:1: ( rule__QualifiedName__Group_1__0 )*
            loop43:
            do {
                int alt43=2;
                int LA43_0 = input.LA(1);

                if ( (LA43_0==47) ) {
                    int LA43_2 = input.LA(2);

                    if ( (LA43_2==RULE_ID) ) {
                        alt43=1;
                    }


                }


                switch (alt43) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4466:2: rule__QualifiedName__Group_1__0
            	    {
            	    pushFollow(FOLLOW_rule__QualifiedName__Group_1__0_in_rule__QualifiedName__Group__1__Impl9135);
            	    rule__QualifiedName__Group_1__0();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop43;
                }
            } while (true);

             after(grammarAccess.getQualifiedNameAccess().getGroup_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__QualifiedName__Group__1__Impl"


    // $ANTLR start "rule__QualifiedName__Group_1__0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4480:1: rule__QualifiedName__Group_1__0 : rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1 ;
    public final void rule__QualifiedName__Group_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4484:1: ( rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4485:2: rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group_1__0__Impl_in_rule__QualifiedName__Group_1__09170);
            rule__QualifiedName__Group_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__QualifiedName__Group_1__1_in_rule__QualifiedName__Group_1__09173);
            rule__QualifiedName__Group_1__1();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__QualifiedName__Group_1__0"


    // $ANTLR start "rule__QualifiedName__Group_1__0__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4492:1: rule__QualifiedName__Group_1__0__Impl : ( '.' ) ;
    public final void rule__QualifiedName__Group_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4496:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4497:1: ( '.' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4497:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4498:1: '.'
            {
             before(grammarAccess.getQualifiedNameAccess().getFullStopKeyword_1_0()); 
            match(input,47,FOLLOW_47_in_rule__QualifiedName__Group_1__0__Impl9201); 
             after(grammarAccess.getQualifiedNameAccess().getFullStopKeyword_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__QualifiedName__Group_1__0__Impl"


    // $ANTLR start "rule__QualifiedName__Group_1__1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4511:1: rule__QualifiedName__Group_1__1 : rule__QualifiedName__Group_1__1__Impl ;
    public final void rule__QualifiedName__Group_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4515:1: ( rule__QualifiedName__Group_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4516:2: rule__QualifiedName__Group_1__1__Impl
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group_1__1__Impl_in_rule__QualifiedName__Group_1__19232);
            rule__QualifiedName__Group_1__1__Impl();

            state._fsp--;


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__QualifiedName__Group_1__1"


    // $ANTLR start "rule__QualifiedName__Group_1__1__Impl"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4522:1: rule__QualifiedName__Group_1__1__Impl : ( RULE_ID ) ;
    public final void rule__QualifiedName__Group_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4526:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4527:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4527:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4528:1: RULE_ID
            {
             before(grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_1_1()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__QualifiedName__Group_1__1__Impl9259); 
             after(grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_1_1()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__QualifiedName__Group_1__1__Impl"


    // $ANTLR start "rule__DomainModel__FileAssignment_2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4544:1: rule__DomainModel__FileAssignment_2 : ( RULE_STRING ) ;
    public final void rule__DomainModel__FileAssignment_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4548:1: ( ( RULE_STRING ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4549:1: ( RULE_STRING )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4549:1: ( RULE_STRING )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4550:1: RULE_STRING
            {
             before(grammarAccess.getDomainModelAccess().getFileSTRINGTerminalRuleCall_2_0()); 
            match(input,RULE_STRING,FOLLOW_RULE_STRING_in_rule__DomainModel__FileAssignment_29297); 
             after(grammarAccess.getDomainModelAccess().getFileSTRINGTerminalRuleCall_2_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__FileAssignment_2"


    // $ANTLR start "rule__DomainModel__PackagesAssignment_4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4559:1: rule__DomainModel__PackagesAssignment_4 : ( ruleCPackage ) ;
    public final void rule__DomainModel__PackagesAssignment_4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4563:1: ( ( ruleCPackage ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4564:1: ( ruleCPackage )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4564:1: ( ruleCPackage )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4565:1: ruleCPackage
            {
             before(grammarAccess.getDomainModelAccess().getPackagesCPackageParserRuleCall_4_0()); 
            pushFollow(FOLLOW_ruleCPackage_in_rule__DomainModel__PackagesAssignment_49328);
            ruleCPackage();

            state._fsp--;

             after(grammarAccess.getDomainModelAccess().getPackagesCPackageParserRuleCall_4_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DomainModel__PackagesAssignment_4"


    // $ANTLR start "rule__CPackage__NameAssignment_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4574:1: rule__CPackage__NameAssignment_1 : ( ruleQualifiedName ) ;
    public final void rule__CPackage__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4578:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4579:1: ( ruleQualifiedName )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4579:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4580:1: ruleQualifiedName
            {
             before(grammarAccess.getCPackageAccess().getNameQualifiedNameParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__CPackage__NameAssignment_19359);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getCPackageAccess().getNameQualifiedNameParserRuleCall_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__NameAssignment_1"


    // $ANTLR start "rule__CPackage__StyleAssignment_2_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4589:1: rule__CPackage__StyleAssignment_2_1 : ( rulePackageStyle ) ;
    public final void rule__CPackage__StyleAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4593:1: ( ( rulePackageStyle ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4594:1: ( rulePackageStyle )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4594:1: ( rulePackageStyle )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4595:1: rulePackageStyle
            {
             before(grammarAccess.getCPackageAccess().getStylePackageStyleEnumRuleCall_2_1_0()); 
            pushFollow(FOLLOW_rulePackageStyle_in_rule__CPackage__StyleAssignment_2_19390);
            rulePackageStyle();

            state._fsp--;

             after(grammarAccess.getCPackageAccess().getStylePackageStyleEnumRuleCall_2_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__StyleAssignment_2_1"


    // $ANTLR start "rule__CPackage__ElementsAssignment_5"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4604:1: rule__CPackage__ElementsAssignment_5 : ( ruleElement ) ;
    public final void rule__CPackage__ElementsAssignment_5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4608:1: ( ( ruleElement ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4609:1: ( ruleElement )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4609:1: ( ruleElement )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4610:1: ruleElement
            {
             before(grammarAccess.getCPackageAccess().getElementsElementParserRuleCall_5_0()); 
            pushFollow(FOLLOW_ruleElement_in_rule__CPackage__ElementsAssignment_59421);
            ruleElement();

            state._fsp--;

             after(grammarAccess.getCPackageAccess().getElementsElementParserRuleCall_5_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__CPackage__ElementsAssignment_5"


    // $ANTLR start "rule__Relation__LeftRefAssignment_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4619:1: rule__Relation__LeftRefAssignment_0 : ( ( ruleQualifiedName ) ) ;
    public final void rule__Relation__LeftRefAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4623:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4624:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4624:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4625:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getRelationAccess().getLeftRefEntityAndNoteCrossReference_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4626:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4627:1: ruleQualifiedName
            {
             before(grammarAccess.getRelationAccess().getLeftRefEntityAndNoteQualifiedNameParserRuleCall_0_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__Relation__LeftRefAssignment_09456);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getRelationAccess().getLeftRefEntityAndNoteQualifiedNameParserRuleCall_0_0_1()); 

            }

             after(grammarAccess.getRelationAccess().getLeftRefEntityAndNoteCrossReference_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__LeftRefAssignment_0"


    // $ANTLR start "rule__Relation__RelTypeAssignment_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4638:1: rule__Relation__RelTypeAssignment_1 : ( ruleRelationParse ) ;
    public final void rule__Relation__RelTypeAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4642:1: ( ( ruleRelationParse ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4643:1: ( ruleRelationParse )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4643:1: ( ruleRelationParse )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4644:1: ruleRelationParse
            {
             before(grammarAccess.getRelationAccess().getRelTypeRelationParseParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleRelationParse_in_rule__Relation__RelTypeAssignment_19491);
            ruleRelationParse();

            state._fsp--;

             after(grammarAccess.getRelationAccess().getRelTypeRelationParseParserRuleCall_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__RelTypeAssignment_1"


    // $ANTLR start "rule__Relation__RightRefAssignment_2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4653:1: rule__Relation__RightRefAssignment_2 : ( ( ruleQualifiedName ) ) ;
    public final void rule__Relation__RightRefAssignment_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4657:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4658:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4658:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4659:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getRelationAccess().getRightRefEntityAndNoteCrossReference_2_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4660:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4661:1: ruleQualifiedName
            {
             before(grammarAccess.getRelationAccess().getRightRefEntityAndNoteQualifiedNameParserRuleCall_2_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__Relation__RightRefAssignment_29526);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getRelationAccess().getRightRefEntityAndNoteQualifiedNameParserRuleCall_2_0_1()); 

            }

             after(grammarAccess.getRelationAccess().getRightRefEntityAndNoteCrossReference_2_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__RightRefAssignment_2"


    // $ANTLR start "rule__Relation__NameAssignment_3_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4672:1: rule__Relation__NameAssignment_3_1 : ( ruleText ) ;
    public final void rule__Relation__NameAssignment_3_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4676:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4677:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4677:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4678:1: ruleText
            {
             before(grammarAccess.getRelationAccess().getNameTextParserRuleCall_3_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Relation__NameAssignment_3_19561);
            ruleText();

            state._fsp--;

             after(grammarAccess.getRelationAccess().getNameTextParserRuleCall_3_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Relation__NameAssignment_3_1"


    // $ANTLR start "rule__RelationParse__CompAssignment_0_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4687:1: rule__RelationParse__CompAssignment_0_0 : ( ruleCompType ) ;
    public final void rule__RelationParse__CompAssignment_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4691:1: ( ( ruleCompType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4692:1: ( ruleCompType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4692:1: ( ruleCompType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4693:1: ruleCompType
            {
             before(grammarAccess.getRelationParseAccess().getCompCompTypeEnumRuleCall_0_0_0()); 
            pushFollow(FOLLOW_ruleCompType_in_rule__RelationParse__CompAssignment_0_09592);
            ruleCompType();

            state._fsp--;

             after(grammarAccess.getRelationParseAccess().getCompCompTypeEnumRuleCall_0_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__CompAssignment_0_0"


    // $ANTLR start "rule__RelationParse__TypeAssignment_0_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4702:1: rule__RelationParse__TypeAssignment_0_1 : ( ruleRelationType ) ;
    public final void rule__RelationParse__TypeAssignment_0_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4706:1: ( ( ruleRelationType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4707:1: ( ruleRelationType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4707:1: ( ruleRelationType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4708:1: ruleRelationType
            {
             before(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_0_1_0()); 
            pushFollow(FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_0_19623);
            ruleRelationType();

            state._fsp--;

             after(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_0_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__TypeAssignment_0_1"


    // $ANTLR start "rule__RelationParse__DirectAssignment_0_2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4717:1: rule__RelationParse__DirectAssignment_0_2 : ( ( '>' ) ) ;
    public final void rule__RelationParse__DirectAssignment_0_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4721:1: ( ( ( '>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4722:1: ( ( '>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4722:1: ( ( '>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4723:1: ( '>' )
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4724:1: ( '>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4725:1: '>'
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0()); 
            match(input,52,FOLLOW_52_in_rule__RelationParse__DirectAssignment_0_29659); 
             after(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0()); 

            }

             after(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__DirectAssignment_0_2"


    // $ANTLR start "rule__RelationParse__MultiAssignment_0_4"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4740:1: rule__RelationParse__MultiAssignment_0_4 : ( RULE_MULTI ) ;
    public final void rule__RelationParse__MultiAssignment_0_4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4744:1: ( ( RULE_MULTI ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4745:1: ( RULE_MULTI )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4745:1: ( RULE_MULTI )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4746:1: RULE_MULTI
            {
             before(grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_0_4_0()); 
            match(input,RULE_MULTI,FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_0_49698); 
             after(grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_0_4_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__MultiAssignment_0_4"


    // $ANTLR start "rule__RelationParse__TypeAssignment_1_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4755:1: rule__RelationParse__TypeAssignment_1_0 : ( ruleRelationType ) ;
    public final void rule__RelationParse__TypeAssignment_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4759:1: ( ( ruleRelationType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4760:1: ( ruleRelationType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4760:1: ( ruleRelationType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4761:1: ruleRelationType
            {
             before(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_1_0_0()); 
            pushFollow(FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_1_09729);
            ruleRelationType();

            state._fsp--;

             after(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_1_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__TypeAssignment_1_0"


    // $ANTLR start "rule__RelationParse__DirectAssignment_1_1_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4770:1: rule__RelationParse__DirectAssignment_1_1_0 : ( ( '>' ) ) ;
    public final void rule__RelationParse__DirectAssignment_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4774:1: ( ( ( '>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4775:1: ( ( '>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4775:1: ( ( '>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4776:1: ( '>' )
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4777:1: ( '>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4778:1: '>'
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0()); 
            match(input,52,FOLLOW_52_in_rule__RelationParse__DirectAssignment_1_1_09765); 
             after(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0()); 

            }

             after(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__DirectAssignment_1_1_0"


    // $ANTLR start "rule__RelationParse__ExtAssignment_1_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4793:1: rule__RelationParse__ExtAssignment_1_1_1 : ( ( '|>' ) ) ;
    public final void rule__RelationParse__ExtAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4797:1: ( ( ( '|>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4798:1: ( ( '|>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4798:1: ( ( '|>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4799:1: ( '|>' )
            {
             before(grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4800:1: ( '|>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4801:1: '|>'
            {
             before(grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0()); 
            match(input,53,FOLLOW_53_in_rule__RelationParse__ExtAssignment_1_1_19809); 
             after(grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0()); 

            }

             after(grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__ExtAssignment_1_1_1"


    // $ANTLR start "rule__RelationParse__MultiAssignment_1_3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4816:1: rule__RelationParse__MultiAssignment_1_3 : ( RULE_MULTI ) ;
    public final void rule__RelationParse__MultiAssignment_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4820:1: ( ( RULE_MULTI ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4821:1: ( RULE_MULTI )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4821:1: ( RULE_MULTI )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4822:1: RULE_MULTI
            {
             before(grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_1_3_0()); 
            match(input,RULE_MULTI,FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_1_39848); 
             after(grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_1_3_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationParse__MultiAssignment_1_3"


    // $ANTLR start "rule__RelationType__StrongAssignment_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4831:1: rule__RelationType__StrongAssignment_0 : ( ruleStrongRel ) ;
    public final void rule__RelationType__StrongAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4835:1: ( ( ruleStrongRel ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4836:1: ( ruleStrongRel )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4836:1: ( ruleStrongRel )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4837:1: ruleStrongRel
            {
             before(grammarAccess.getRelationTypeAccess().getStrongStrongRelParserRuleCall_0_0()); 
            pushFollow(FOLLOW_ruleStrongRel_in_rule__RelationType__StrongAssignment_09879);
            ruleStrongRel();

            state._fsp--;

             after(grammarAccess.getRelationTypeAccess().getStrongStrongRelParserRuleCall_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationType__StrongAssignment_0"


    // $ANTLR start "rule__RelationType__WeakAssignment_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4846:1: rule__RelationType__WeakAssignment_1 : ( ruleWeakRel ) ;
    public final void rule__RelationType__WeakAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4850:1: ( ( ruleWeakRel ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4851:1: ( ruleWeakRel )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4851:1: ( ruleWeakRel )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4852:1: ruleWeakRel
            {
             before(grammarAccess.getRelationTypeAccess().getWeakWeakRelParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleWeakRel_in_rule__RelationType__WeakAssignment_19910);
            ruleWeakRel();

            state._fsp--;

             after(grammarAccess.getRelationTypeAccess().getWeakWeakRelParserRuleCall_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__RelationType__WeakAssignment_1"


    // $ANTLR start "rule__Enumer__NameAssignment_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4861:1: rule__Enumer__NameAssignment_1 : ( RULE_ID ) ;
    public final void rule__Enumer__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4865:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4866:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4866:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4867:1: RULE_ID
            {
             before(grammarAccess.getEnumerAccess().getNameIDTerminalRuleCall_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Enumer__NameAssignment_19941); 
             after(grammarAccess.getEnumerAccess().getNameIDTerminalRuleCall_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__NameAssignment_1"


    // $ANTLR start "rule__Enumer__TypesAssignment_4_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4876:1: rule__Enumer__TypesAssignment_4_0 : ( RULE_ID ) ;
    public final void rule__Enumer__TypesAssignment_4_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4880:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4881:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4881:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4882:1: RULE_ID
            {
             before(grammarAccess.getEnumerAccess().getTypesIDTerminalRuleCall_4_0_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Enumer__TypesAssignment_4_09972); 
             after(grammarAccess.getEnumerAccess().getTypesIDTerminalRuleCall_4_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Enumer__TypesAssignment_4_0"


    // $ANTLR start "rule__Clazz__NameAssignment_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4891:1: rule__Clazz__NameAssignment_1 : ( RULE_ID ) ;
    public final void rule__Clazz__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4895:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4896:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4896:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4897:1: RULE_ID
            {
             before(grammarAccess.getClazzAccess().getNameIDTerminalRuleCall_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Clazz__NameAssignment_110003); 
             after(grammarAccess.getClazzAccess().getNameIDTerminalRuleCall_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__NameAssignment_1"


    // $ANTLR start "rule__Clazz__StereotypeAssignment_2_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4906:1: rule__Clazz__StereotypeAssignment_2_1 : ( ruleText ) ;
    public final void rule__Clazz__StereotypeAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4910:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4911:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4911:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4912:1: ruleText
            {
             before(grammarAccess.getClazzAccess().getStereotypeTextParserRuleCall_2_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Clazz__StereotypeAssignment_2_110034);
            ruleText();

            state._fsp--;

             after(grammarAccess.getClazzAccess().getStereotypeTextParserRuleCall_2_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__StereotypeAssignment_2_1"


    // $ANTLR start "rule__Clazz__PropertiesAssignment_3_2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4921:1: rule__Clazz__PropertiesAssignment_3_2 : ( ruleProperty ) ;
    public final void rule__Clazz__PropertiesAssignment_3_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4925:1: ( ( ruleProperty ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4926:1: ( ruleProperty )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4926:1: ( ruleProperty )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4927:1: ruleProperty
            {
             before(grammarAccess.getClazzAccess().getPropertiesPropertyParserRuleCall_3_2_0()); 
            pushFollow(FOLLOW_ruleProperty_in_rule__Clazz__PropertiesAssignment_3_210065);
            ruleProperty();

            state._fsp--;

             after(grammarAccess.getClazzAccess().getPropertiesPropertyParserRuleCall_3_2_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Clazz__PropertiesAssignment_3_2"


    // $ANTLR start "rule__Property__NameAssignment_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4936:1: rule__Property__NameAssignment_0 : ( RULE_ID ) ;
    public final void rule__Property__NameAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4940:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4941:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4941:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4942:1: RULE_ID
            {
             before(grammarAccess.getPropertyAccess().getNameIDTerminalRuleCall_0_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Property__NameAssignment_010096); 
             after(grammarAccess.getPropertyAccess().getNameIDTerminalRuleCall_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__NameAssignment_0"


    // $ANTLR start "rule__Property__OptionalAssignment_1_0_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4951:1: rule__Property__OptionalAssignment_1_0_0 : ( ( '?' ) ) ;
    public final void rule__Property__OptionalAssignment_1_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4955:1: ( ( ( '?' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4956:1: ( ( '?' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4956:1: ( ( '?' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4957:1: ( '?' )
            {
             before(grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4958:1: ( '?' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4959:1: '?'
            {
             before(grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0()); 
            match(input,30,FOLLOW_30_in_rule__Property__OptionalAssignment_1_0_010132); 
             after(grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0()); 

            }

             after(grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__OptionalAssignment_1_0_0"


    // $ANTLR start "rule__Property__TypeAssignment_1_0_1_1_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4974:1: rule__Property__TypeAssignment_1_0_1_1_0 : ( ruleDataType ) ;
    public final void rule__Property__TypeAssignment_1_0_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4978:1: ( ( ruleDataType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4979:1: ( ruleDataType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4979:1: ( ruleDataType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4980:1: ruleDataType
            {
             before(grammarAccess.getPropertyAccess().getTypeDataTypeParserRuleCall_1_0_1_1_0_0()); 
            pushFollow(FOLLOW_ruleDataType_in_rule__Property__TypeAssignment_1_0_1_1_010171);
            ruleDataType();

            state._fsp--;

             after(grammarAccess.getPropertyAccess().getTypeDataTypeParserRuleCall_1_0_1_1_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__TypeAssignment_1_0_1_1_0"


    // $ANTLR start "rule__Property__EntityAssignment_1_0_1_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4989:1: rule__Property__EntityAssignment_1_0_1_1_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__Property__EntityAssignment_1_0_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4993:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4994:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4994:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4995:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getPropertyAccess().getEntityEntityCrossReference_1_0_1_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4996:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4997:1: ruleQualifiedName
            {
             before(grammarAccess.getPropertyAccess().getEntityEntityQualifiedNameParserRuleCall_1_0_1_1_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__Property__EntityAssignment_1_0_1_1_110206);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getPropertyAccess().getEntityEntityQualifiedNameParserRuleCall_1_0_1_1_1_0_1()); 

            }

             after(grammarAccess.getPropertyAccess().getEntityEntityCrossReference_1_0_1_1_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__EntityAssignment_1_0_1_1_1"


    // $ANTLR start "rule__Property__EntityListAssignment_1_0_1_1_2"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5008:1: rule__Property__EntityListAssignment_1_0_1_1_2 : ( ruleEntityList ) ;
    public final void rule__Property__EntityListAssignment_1_0_1_1_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5012:1: ( ( ruleEntityList ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5013:1: ( ruleEntityList )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5013:1: ( ruleEntityList )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5014:1: ruleEntityList
            {
             before(grammarAccess.getPropertyAccess().getEntityListEntityListParserRuleCall_1_0_1_1_2_0()); 
            pushFollow(FOLLOW_ruleEntityList_in_rule__Property__EntityListAssignment_1_0_1_1_210241);
            ruleEntityList();

            state._fsp--;

             after(grammarAccess.getPropertyAccess().getEntityListEntityListParserRuleCall_1_0_1_1_2_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__EntityListAssignment_1_0_1_1_2"


    // $ANTLR start "rule__Property__ConstantAssignment_1_1_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5023:1: rule__Property__ConstantAssignment_1_1_0 : ( ( '=' ) ) ;
    public final void rule__Property__ConstantAssignment_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5027:1: ( ( ( '=' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5028:1: ( ( '=' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5028:1: ( ( '=' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5029:1: ( '=' )
            {
             before(grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5030:1: ( '=' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5031:1: '='
            {
             before(grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0()); 
            match(input,54,FOLLOW_54_in_rule__Property__ConstantAssignment_1_1_010277); 
             after(grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0()); 

            }

             after(grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__ConstantAssignment_1_1_0"


    // $ANTLR start "rule__Property__ValueAssignment_1_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5046:1: rule__Property__ValueAssignment_1_1_1 : ( ruleText ) ;
    public final void rule__Property__ValueAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5050:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5051:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5051:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5052:1: ruleText
            {
             before(grammarAccess.getPropertyAccess().getValueTextParserRuleCall_1_1_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Property__ValueAssignment_1_1_110316);
            ruleText();

            state._fsp--;

             after(grammarAccess.getPropertyAccess().getValueTextParserRuleCall_1_1_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Property__ValueAssignment_1_1_1"


    // $ANTLR start "rule__EntityList__RefsAssignment_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5061:1: rule__EntityList__RefsAssignment_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__EntityList__RefsAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5065:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5066:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5066:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5067:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5068:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5069:1: ruleQualifiedName
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityQualifiedNameParserRuleCall_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_110351);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getEntityListAccess().getRefsEntityQualifiedNameParserRuleCall_1_0_1()); 

            }

             after(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__RefsAssignment_1"


    // $ANTLR start "rule__EntityList__RefsAssignment_2_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5080:1: rule__EntityList__RefsAssignment_2_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__EntityList__RefsAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5084:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5085:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5085:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5086:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_2_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5087:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5088:1: ruleQualifiedName
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityQualifiedNameParserRuleCall_2_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_2_110390);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getEntityListAccess().getRefsEntityQualifiedNameParserRuleCall_2_1_0_1()); 

            }

             after(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_2_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__EntityList__RefsAssignment_2_1"


    // $ANTLR start "rule__Note__PositionAssignment_1_0_0_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5099:1: rule__Note__PositionAssignment_1_0_0_0 : ( ruleNotePosition ) ;
    public final void rule__Note__PositionAssignment_1_0_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5103:1: ( ( ruleNotePosition ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5104:1: ( ruleNotePosition )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5104:1: ( ruleNotePosition )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5105:1: ruleNotePosition
            {
             before(grammarAccess.getNoteAccess().getPositionNotePositionEnumRuleCall_1_0_0_0_0()); 
            pushFollow(FOLLOW_ruleNotePosition_in_rule__Note__PositionAssignment_1_0_0_010425);
            ruleNotePosition();

            state._fsp--;

             after(grammarAccess.getNoteAccess().getPositionNotePositionEnumRuleCall_1_0_0_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__PositionAssignment_1_0_0_0"


    // $ANTLR start "rule__Note__ValueAssignment_1_0_0_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5114:1: rule__Note__ValueAssignment_1_0_0_1_1 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_0_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5118:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5119:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5119:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5120:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_0_1_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_0_1_110456);
            ruleText();

            state._fsp--;

             after(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_0_1_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__ValueAssignment_1_0_0_1_1"


    // $ANTLR start "rule__Note__OfAssignment_1_0_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5129:1: rule__Note__OfAssignment_1_0_1_1 : ( ( RULE_ID ) ) ;
    public final void rule__Note__OfAssignment_1_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5133:1: ( ( ( RULE_ID ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5134:1: ( ( RULE_ID ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5134:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5135:1: ( RULE_ID )
            {
             before(grammarAccess.getNoteAccess().getOfEntityCrossReference_1_0_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5136:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5137:1: RULE_ID
            {
             before(grammarAccess.getNoteAccess().getOfEntityIDTerminalRuleCall_1_0_1_1_0_1()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Note__OfAssignment_1_0_1_110491); 
             after(grammarAccess.getNoteAccess().getOfEntityIDTerminalRuleCall_1_0_1_1_0_1()); 

            }

             after(grammarAccess.getNoteAccess().getOfEntityCrossReference_1_0_1_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__OfAssignment_1_0_1_1"


    // $ANTLR start "rule__Note__ValueAssignment_1_0_1_3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5148:1: rule__Note__ValueAssignment_1_0_1_3 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_0_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5152:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5153:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5153:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5154:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_1_3_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_1_310526);
            ruleText();

            state._fsp--;

             after(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_1_3_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__ValueAssignment_1_0_1_3"


    // $ANTLR start "rule__Note__NameAssignment_1_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5163:1: rule__Note__NameAssignment_1_1_1 : ( RULE_ID ) ;
    public final void rule__Note__NameAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5167:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5168:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5168:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5169:1: RULE_ID
            {
             before(grammarAccess.getNoteAccess().getNameIDTerminalRuleCall_1_1_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Note__NameAssignment_1_1_110557); 
             after(grammarAccess.getNoteAccess().getNameIDTerminalRuleCall_1_1_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__NameAssignment_1_1_1"


    // $ANTLR start "rule__Note__ValueAssignment_1_1_3"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5178:1: rule__Note__ValueAssignment_1_1_3 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5182:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5183:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5183:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5184:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_1_3_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_1_310588);
            ruleText();

            state._fsp--;

             after(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_1_3_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__Note__ValueAssignment_1_1_3"


    // $ANTLR start "rule__DataType__NativeAssignment_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5193:1: rule__DataType__NativeAssignment_0 : ( ruleNativeType ) ;
    public final void rule__DataType__NativeAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5197:1: ( ( ruleNativeType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5198:1: ( ruleNativeType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5198:1: ( ruleNativeType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5199:1: ruleNativeType
            {
             before(grammarAccess.getDataTypeAccess().getNativeNativeTypeEnumRuleCall_0_0()); 
            pushFollow(FOLLOW_ruleNativeType_in_rule__DataType__NativeAssignment_010619);
            ruleNativeType();

            state._fsp--;

             after(grammarAccess.getDataTypeAccess().getNativeNativeTypeEnumRuleCall_0_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DataType__NativeAssignment_0"


    // $ANTLR start "rule__DataType__IsArrayAssignment_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5208:1: rule__DataType__IsArrayAssignment_1 : ( ( '[]' ) ) ;
    public final void rule__DataType__IsArrayAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5212:1: ( ( ( '[]' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5213:1: ( ( '[]' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5213:1: ( ( '[]' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5214:1: ( '[]' )
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5215:1: ( '[]' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5216:1: '[]'
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0()); 
            match(input,55,FOLLOW_55_in_rule__DataType__IsArrayAssignment_110655); 
             after(grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0()); 

            }

             after(grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0()); 

            }


            }

        }
        catch (RecognitionException re) {
            reportError(re);
            recover(input,re);
        }
        finally {

            	restoreStackSize(stackSize);

        }
        return ;
    }
    // $ANTLR end "rule__DataType__IsArrayAssignment_1"

    // Delegated rules


 

    public static final BitSet FOLLOW_ruleDomainModel_in_entryRuleDomainModel61 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleDomainModel68 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__0_in_ruleDomainModel94 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleElement_in_entryRuleElement121 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleElement128 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Element__Alternatives_in_ruleElement154 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityAndNote_in_entryRuleEntityAndNote181 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleEntityAndNote188 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityAndNote__Alternatives_in_ruleEntityAndNote214 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntity_in_entryRuleEntity241 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleEntity248 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Entity__Alternatives_in_ruleEntity274 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCPackage_in_entryRuleCPackage301 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleCPackage308 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__0_in_ruleCPackage334 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelation_in_entryRuleRelation361 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleRelation368 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__0_in_ruleRelation394 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationParse_in_entryRuleRelationParse426 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleRelationParse433 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Alternatives_in_ruleRelationParse463 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_entryRuleRelationType495 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleRelationType502 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationType__Alternatives_in_ruleRelationType532 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleStrongRel_in_entryRuleStrongRel559 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleStrongRel566 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__0_in_ruleStrongRel592 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleWeakRel_in_entryRuleWeakRel619 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleWeakRel626 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__0_in_ruleWeakRel652 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEnumer_in_entryRuleEnumer679 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleEnumer686 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__0_in_ruleEnumer712 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleClazz_in_entryRuleClazz739 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleClazz746 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__0_in_ruleClazz772 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleProperty_in_entryRuleProperty799 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleProperty806 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__0_in_ruleProperty832 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityList_in_entryRuleEntityList859 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleEntityList866 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__0_in_ruleEntityList892 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNote_in_entryRuleNote919 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleNote926 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group__0_in_ruleNote952 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleDataType_in_entryRuleDataType979 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleDataType986 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Group__0_in_ruleDataType1012 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_entryRuleQualifiedName1039 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleQualifiedName1046 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__0_in_ruleQualifiedName1072 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_entryRuleText1099 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleText1106 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Text__Alternatives_in_ruleText1134 = new BitSet(new long[]{0x000000007FFFF072L});
    public static final BitSet FOLLOW_rule__Text__Alternatives_in_ruleText1146 = new BitSet(new long[]{0x000000007FFFF072L});
    public static final BitSet FOLLOW_rule__PackageStyle__Alternatives_in_rulePackageStyle1186 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CompType__Alternatives_in_ruleCompType1222 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__NotePosition__Alternatives_in_ruleNotePosition1258 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__NativeType__Alternatives_in_ruleNativeType1294 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelation_in_rule__Element__Alternatives1329 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCPackage_in_rule__Element__Alternatives1346 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityAndNote_in_rule__Element__Alternatives1363 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntity_in_rule__EntityAndNote__Alternatives1395 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNote_in_rule__EntityAndNote__Alternatives1412 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEnumer_in_rule__Entity__Alternatives1444 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleClazz_in_rule__Entity__Alternatives1461 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__0_in_rule__RelationParse__Alternatives1493 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__0_in_rule__RelationParse__Alternatives1511 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__DirectAssignment_1_1_0_in_rule__RelationParse__Alternatives_1_11544 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__ExtAssignment_1_1_1_in_rule__RelationParse__Alternatives_1_11562 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationType__StrongAssignment_0_in_rule__RelationType__Alternatives1595 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationType__WeakAssignment_1_in_rule__RelationType__Alternatives1613 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_12_in_rule__StrongRel__Alternatives_11647 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_13_in_rule__StrongRel__Alternatives_11667 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_14_in_rule__StrongRel__Alternatives_11687 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_15_in_rule__StrongRel__Alternatives_11707 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_12_in_rule__WeakRel__Alternatives_11742 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_13_in_rule__WeakRel__Alternatives_11762 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_14_in_rule__WeakRel__Alternatives_11782 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_15_in_rule__WeakRel__Alternatives_11802 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__0_in_rule__Property__Alternatives_11836 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__0_in_rule__Property__Alternatives_11854 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__TypeAssignment_1_0_1_1_0_in_rule__Property__Alternatives_1_0_1_11887 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__EntityAssignment_1_0_1_1_1_in_rule__Property__Alternatives_1_0_1_11905 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__EntityListAssignment_1_0_1_1_2_in_rule__Property__Alternatives_1_0_1_11923 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Alternatives_1_0_in_rule__Note__Alternatives_11956 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__0_in_rule__Note__Alternatives_11974 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__0_in_rule__Note__Alternatives_1_02007 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__0_in_rule__Note__Alternatives_1_02025 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Text__Alternatives2058 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_STRING_in_rule__Text__Alternatives2075 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ANY_OTHER_in_rule__Text__Alternatives2092 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_12_in_rule__Text__Alternatives2110 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_13_in_rule__Text__Alternatives2130 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_16_in_rule__Text__Alternatives2150 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_17_in_rule__Text__Alternatives2170 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_14_in_rule__Text__Alternatives2190 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_15_in_rule__Text__Alternatives2210 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_18_in_rule__Text__Alternatives2230 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_19_in_rule__Text__Alternatives2250 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_20_in_rule__Text__Alternatives2270 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_21_in_rule__Text__Alternatives2290 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_22_in_rule__Text__Alternatives2310 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_23_in_rule__Text__Alternatives2330 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_24_in_rule__Text__Alternatives2350 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_25_in_rule__Text__Alternatives2370 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_26_in_rule__Text__Alternatives2390 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_27_in_rule__Text__Alternatives2410 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_28_in_rule__Text__Alternatives2430 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Text__Alternatives2450 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_30_in_rule__Text__Alternatives2470 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_31_in_rule__PackageStyle__Alternatives2505 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_32_in_rule__PackageStyle__Alternatives2526 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_33_in_rule__PackageStyle__Alternatives2547 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_34_in_rule__PackageStyle__Alternatives2568 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_35_in_rule__PackageStyle__Alternatives2589 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_36_in_rule__PackageStyle__Alternatives2610 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_rule__CompType__Alternatives2646 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_38_in_rule__CompType__Alternatives2667 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_39_in_rule__CompType__Alternatives2688 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_16_in_rule__NotePosition__Alternatives2724 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_17_in_rule__NotePosition__Alternatives2745 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_14_in_rule__NotePosition__Alternatives2766 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_15_in_rule__NotePosition__Alternatives2787 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_19_in_rule__NativeType__Alternatives2823 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_20_in_rule__NativeType__Alternatives2844 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_21_in_rule__NativeType__Alternatives2865 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_22_in_rule__NativeType__Alternatives2886 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__0__Impl_in_rule__DomainModel__Group__02919 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__1_in_rule__DomainModel__Group__02922 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_40_in_rule__DomainModel__Group__0__Impl2950 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__1__Impl_in_rule__DomainModel__Group__12981 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__2_in_rule__DomainModel__Group__12984 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__2__Impl_in_rule__DomainModel__Group__23042 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__3_in_rule__DomainModel__Group__23045 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__FileAssignment_2_in_rule__DomainModel__Group__2__Impl3072 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__3__Impl_in_rule__DomainModel__Group__33103 = new BitSet(new long[]{0x0000000000800000L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__4_in_rule__DomainModel__Group__33106 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__DomainModel__Group__3__Impl3133 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__4__Impl_in_rule__DomainModel__Group__43162 = new BitSet(new long[]{0x0000020000000000L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__5_in_rule__DomainModel__Group__43165 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3194 = new BitSet(new long[]{0x0000000000800002L});
    public static final BitSet FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3206 = new BitSet(new long[]{0x0000000000800002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__5__Impl_in_rule__DomainModel__Group__53239 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_41_in_rule__DomainModel__Group__5__Impl3267 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__0__Impl_in_rule__CPackage__Group__03310 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__1_in_rule__CPackage__Group__03313 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_23_in_rule__CPackage__Group__0__Impl3341 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__1__Impl_in_rule__CPackage__Group__13372 = new BitSet(new long[]{0x0000140000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group__2_in_rule__CPackage__Group__13375 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__NameAssignment_1_in_rule__CPackage__Group__1__Impl3402 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__2__Impl_in_rule__CPackage__Group__23432 = new BitSet(new long[]{0x0000140000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group__3_in_rule__CPackage__Group__23435 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__0_in_rule__CPackage__Group__2__Impl3462 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__3__Impl_in_rule__CPackage__Group__33493 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__CPackage__Group__4_in_rule__CPackage__Group__33496 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_42_in_rule__CPackage__Group__3__Impl3524 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__4__Impl_in_rule__CPackage__Group__43555 = new BitSet(new long[]{0x0000080007800010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__5_in_rule__CPackage__Group__43558 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__4__Impl3585 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__5__Impl_in_rule__CPackage__Group__53614 = new BitSet(new long[]{0x0000080007800010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__6_in_rule__CPackage__Group__53617 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__ElementsAssignment_5_in_rule__CPackage__Group__5__Impl3644 = new BitSet(new long[]{0x0000000007800012L});
    public static final BitSet FOLLOW_rule__CPackage__Group__6__Impl_in_rule__CPackage__Group__63675 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__CPackage__Group__7_in_rule__CPackage__Group__63678 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_rule__CPackage__Group__6__Impl3706 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__7__Impl_in_rule__CPackage__Group__73737 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__7__Impl3764 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__0__Impl_in_rule__CPackage__Group_2__03809 = new BitSet(new long[]{0x0000001F80000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__1_in_rule__CPackage__Group_2__03812 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_44_in_rule__CPackage__Group_2__0__Impl3840 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__1__Impl_in_rule__CPackage__Group_2__13871 = new BitSet(new long[]{0x0000200000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__2_in_rule__CPackage__Group_2__13874 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__StyleAssignment_2_1_in_rule__CPackage__Group_2__1__Impl3901 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__2__Impl_in_rule__CPackage__Group_2__23931 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_45_in_rule__CPackage__Group_2__2__Impl3959 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__0__Impl_in_rule__Relation__Group__03996 = new BitSet(new long[]{0x0000C0E000000000L});
    public static final BitSet FOLLOW_rule__Relation__Group__1_in_rule__Relation__Group__03999 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__LeftRefAssignment_0_in_rule__Relation__Group__0__Impl4026 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__1__Impl_in_rule__Relation__Group__14056 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Relation__Group__2_in_rule__Relation__Group__14059 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__RelTypeAssignment_1_in_rule__Relation__Group__1__Impl4086 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__2__Impl_in_rule__Relation__Group__24116 = new BitSet(new long[]{0x0000000020000080L});
    public static final BitSet FOLLOW_rule__Relation__Group__3_in_rule__Relation__Group__24119 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__RightRefAssignment_2_in_rule__Relation__Group__2__Impl4146 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__3__Impl_in_rule__Relation__Group__34176 = new BitSet(new long[]{0x0000000020000080L});
    public static final BitSet FOLLOW_rule__Relation__Group__4_in_rule__Relation__Group__34179 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__0_in_rule__Relation__Group__3__Impl4206 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__4__Impl_in_rule__Relation__Group__44237 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Relation__Group__4__Impl4264 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__0__Impl_in_rule__Relation__Group_3__04303 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__1_in_rule__Relation__Group_3__04306 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Relation__Group_3__0__Impl4334 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__1__Impl_in_rule__Relation__Group_3__14365 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__NameAssignment_3_1_in_rule__Relation__Group_3__1__Impl4392 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__0__Impl_in_rule__RelationParse__Group_0__04426 = new BitSet(new long[]{0x0000C0E000000000L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__1_in_rule__RelationParse__Group_0__04429 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__CompAssignment_0_0_in_rule__RelationParse__Group_0__0__Impl4456 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__1__Impl_in_rule__RelationParse__Group_0__14486 = new BitSet(new long[]{0x0010000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__2_in_rule__RelationParse__Group_0__14489 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__TypeAssignment_0_1_in_rule__RelationParse__Group_0__1__Impl4516 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__2__Impl_in_rule__RelationParse__Group_0__24546 = new BitSet(new long[]{0x0010000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__3_in_rule__RelationParse__Group_0__24549 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__DirectAssignment_0_2_in_rule__RelationParse__Group_0__2__Impl4576 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__3__Impl_in_rule__RelationParse__Group_0__34607 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__4_in_rule__RelationParse__Group_0__34610 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_WS_in_rule__RelationParse__Group_0__3__Impl4637 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__4__Impl_in_rule__RelationParse__Group_0__44666 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__MultiAssignment_0_4_in_rule__RelationParse__Group_0__4__Impl4693 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__0__Impl_in_rule__RelationParse__Group_1__04734 = new BitSet(new long[]{0x0030000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__1_in_rule__RelationParse__Group_1__04737 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__TypeAssignment_1_0_in_rule__RelationParse__Group_1__0__Impl4764 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__1__Impl_in_rule__RelationParse__Group_1__14794 = new BitSet(new long[]{0x0030000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__2_in_rule__RelationParse__Group_1__14797 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Alternatives_1_1_in_rule__RelationParse__Group_1__1__Impl4824 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__2__Impl_in_rule__RelationParse__Group_1__24855 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__3_in_rule__RelationParse__Group_1__24858 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_WS_in_rule__RelationParse__Group_1__2__Impl4885 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__3__Impl_in_rule__RelationParse__Group_1__34914 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__MultiAssignment_1_3_in_rule__RelationParse__Group_1__3__Impl4941 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__0__Impl_in_rule__StrongRel__Group__04980 = new BitSet(new long[]{0x000040000000F000L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__1_in_rule__StrongRel__Group__04983 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_rule__StrongRel__Group__0__Impl5011 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__1__Impl_in_rule__StrongRel__Group__15042 = new BitSet(new long[]{0x000040000000F000L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__2_in_rule__StrongRel__Group__15045 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Alternatives_1_in_rule__StrongRel__Group__1__Impl5072 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__2__Impl_in_rule__StrongRel__Group__25103 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_rule__StrongRel__Group__2__Impl5134 = new BitSet(new long[]{0x0000400000000002L});
    public static final BitSet FOLLOW_46_in_rule__StrongRel__Group__2__Impl5150 = new BitSet(new long[]{0x0000400000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__0__Impl_in_rule__WeakRel__Group__05191 = new BitSet(new long[]{0x000080000000F000L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__1_in_rule__WeakRel__Group__05194 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__WeakRel__Group__0__Impl5222 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__1__Impl_in_rule__WeakRel__Group__15253 = new BitSet(new long[]{0x000080000000F000L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__2_in_rule__WeakRel__Group__15256 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Alternatives_1_in_rule__WeakRel__Group__1__Impl5283 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__2__Impl_in_rule__WeakRel__Group__25314 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__WeakRel__Group__2__Impl5345 = new BitSet(new long[]{0x0000800000000002L});
    public static final BitSet FOLLOW_47_in_rule__WeakRel__Group__2__Impl5361 = new BitSet(new long[]{0x0000800000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__0__Impl_in_rule__Enumer__Group__05402 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Enumer__Group__1_in_rule__Enumer__Group__05405 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_25_in_rule__Enumer__Group__0__Impl5433 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__1__Impl_in_rule__Enumer__Group__15464 = new BitSet(new long[]{0x0000040000000000L});
    public static final BitSet FOLLOW_rule__Enumer__Group__2_in_rule__Enumer__Group__15467 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__NameAssignment_1_in_rule__Enumer__Group__1__Impl5494 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__2__Impl_in_rule__Enumer__Group__25524 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__3_in_rule__Enumer__Group__25527 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_42_in_rule__Enumer__Group__2__Impl5555 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__3__Impl_in_rule__Enumer__Group__35586 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__4_in_rule__Enumer__Group__35589 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__3__Impl5617 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__4__Impl_in_rule__Enumer__Group__45648 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__5_in_rule__Enumer__Group__45651 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__0_in_rule__Enumer__Group__4__Impl5678 = new BitSet(new long[]{0x0000000000000012L});
    public static final BitSet FOLLOW_rule__Enumer__Group__5__Impl_in_rule__Enumer__Group__55709 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Enumer__Group__6_in_rule__Enumer__Group__55712 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_rule__Enumer__Group__5__Impl5740 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__6__Impl_in_rule__Enumer__Group__65771 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__6__Impl5798 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__0__Impl_in_rule__Enumer__Group_4__05841 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__1_in_rule__Enumer__Group_4__05844 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__TypesAssignment_4_0_in_rule__Enumer__Group_4__0__Impl5871 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__1__Impl_in_rule__Enumer__Group_4__15901 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group_4__1__Impl5929 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__0__Impl_in_rule__Clazz__Group__05964 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Clazz__Group__1_in_rule__Clazz__Group__05967 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_24_in_rule__Clazz__Group__0__Impl5995 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__1__Impl_in_rule__Clazz__Group__16026 = new BitSet(new long[]{0x0000140000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__2_in_rule__Clazz__Group__16029 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__NameAssignment_1_in_rule__Clazz__Group__1__Impl6056 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__2__Impl_in_rule__Clazz__Group__26086 = new BitSet(new long[]{0x0000140000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__3_in_rule__Clazz__Group__26089 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__0_in_rule__Clazz__Group__2__Impl6116 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__3__Impl_in_rule__Clazz__Group__36147 = new BitSet(new long[]{0x0000140000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__4_in_rule__Clazz__Group__36150 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__0_in_rule__Clazz__Group__3__Impl6177 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__4__Impl_in_rule__Clazz__Group__46208 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Clazz__Group__4__Impl6235 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__0__Impl_in_rule__Clazz__Group_2__06274 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__1_in_rule__Clazz__Group_2__06277 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_44_in_rule__Clazz__Group_2__0__Impl6305 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__1__Impl_in_rule__Clazz__Group_2__16336 = new BitSet(new long[]{0x0000200000000000L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__2_in_rule__Clazz__Group_2__16339 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__StereotypeAssignment_2_1_in_rule__Clazz__Group_2__1__Impl6366 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__2__Impl_in_rule__Clazz__Group_2__26396 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_45_in_rule__Clazz__Group_2__2__Impl6424 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__0__Impl_in_rule__Clazz__Group_3__06461 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__1_in_rule__Clazz__Group_3__06464 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_42_in_rule__Clazz__Group_3__0__Impl6492 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__1__Impl_in_rule__Clazz__Group_3__16523 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__2_in_rule__Clazz__Group_3__16526 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Clazz__Group_3__1__Impl6554 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__2__Impl_in_rule__Clazz__Group_3__26585 = new BitSet(new long[]{0x0000080000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__3_in_rule__Clazz__Group_3__26588 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__PropertiesAssignment_3_2_in_rule__Clazz__Group_3__2__Impl6615 = new BitSet(new long[]{0x0000000000000012L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__3__Impl_in_rule__Clazz__Group_3__36646 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_rule__Clazz__Group_3__3__Impl6674 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__0__Impl_in_rule__Property__Group__06713 = new BitSet(new long[]{0x0040000060000000L});
    public static final BitSet FOLLOW_rule__Property__Group__1_in_rule__Property__Group__06716 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__NameAssignment_0_in_rule__Property__Group__0__Impl6743 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__1__Impl_in_rule__Property__Group__16773 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Property__Group__2_in_rule__Property__Group__16776 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Alternatives_1_in_rule__Property__Group__1__Impl6803 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__2__Impl_in_rule__Property__Group__26833 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Property__Group__2__Impl6860 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__0__Impl_in_rule__Property__Group_1_0__06895 = new BitSet(new long[]{0x0000000060000000L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__1_in_rule__Property__Group_1_0__06898 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__OptionalAssignment_1_0_0_in_rule__Property__Group_1_0__0__Impl6925 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__1__Impl_in_rule__Property__Group_1_0__16956 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__0_in_rule__Property__Group_1_0__1__Impl6983 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__0__Impl_in_rule__Property__Group_1_0_1__07018 = new BitSet(new long[]{0x0001000000780010L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__1_in_rule__Property__Group_1_0_1__07021 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Property__Group_1_0_1__0__Impl7049 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__1__Impl_in_rule__Property__Group_1_0_1__17080 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Alternatives_1_0_1_1_in_rule__Property__Group_1_0_1__1__Impl7107 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__0__Impl_in_rule__Property__Group_1_1__07141 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__1_in_rule__Property__Group_1_1__07144 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__ConstantAssignment_1_1_0_in_rule__Property__Group_1_1__0__Impl7171 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__1__Impl_in_rule__Property__Group_1_1__17201 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__ValueAssignment_1_1_1_in_rule__Property__Group_1_1__1__Impl7228 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__0__Impl_in_rule__EntityList__Group__07262 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__EntityList__Group__1_in_rule__EntityList__Group__07265 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_48_in_rule__EntityList__Group__0__Impl7293 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__1__Impl_in_rule__EntityList__Group__17324 = new BitSet(new long[]{0x0006000000000000L});
    public static final BitSet FOLLOW_rule__EntityList__Group__2_in_rule__EntityList__Group__17327 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__RefsAssignment_1_in_rule__EntityList__Group__1__Impl7354 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__2__Impl_in_rule__EntityList__Group__27384 = new BitSet(new long[]{0x0006000000000000L});
    public static final BitSet FOLLOW_rule__EntityList__Group__3_in_rule__EntityList__Group__27387 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__0_in_rule__EntityList__Group__2__Impl7414 = new BitSet(new long[]{0x0004000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__3__Impl_in_rule__EntityList__Group__37445 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_49_in_rule__EntityList__Group__3__Impl7473 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__0__Impl_in_rule__EntityList__Group_2__07512 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__1_in_rule__EntityList__Group_2__07515 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_50_in_rule__EntityList__Group_2__0__Impl7543 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__1__Impl_in_rule__EntityList__Group_2__17574 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__RefsAssignment_2_1_in_rule__EntityList__Group_2__1__Impl7601 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group__0__Impl_in_rule__Note__Group__07635 = new BitSet(new long[]{0x000000001803C000L});
    public static final BitSet FOLLOW_rule__Note__Group__1_in_rule__Note__Group__07638 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_26_in_rule__Note__Group__0__Impl7666 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group__1__Impl_in_rule__Note__Group__17697 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Alternatives_1_in_rule__Note__Group__1__Impl7724 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__0__Impl_in_rule__Note__Group_1_0_0__07758 = new BitSet(new long[]{0x0000000020000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__1_in_rule__Note__Group_1_0_0__07761 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__PositionAssignment_1_0_0_0_in_rule__Note__Group_1_0_0__0__Impl7788 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__1__Impl_in_rule__Note__Group_1_0_0__17818 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__0_in_rule__Note__Group_1_0_0__1__Impl7845 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__0__Impl_in_rule__Note__Group_1_0_0_1__07879 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__1_in_rule__Note__Group_1_0_0_1__07882 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Note__Group_1_0_0_1__0__Impl7910 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__1__Impl_in_rule__Note__Group_1_0_0_1__17941 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__2_in_rule__Note__Group_1_0_0_1__17944 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_0_0_1_1_in_rule__Note__Group_1_0_0_1__1__Impl7971 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__2__Impl_in_rule__Note__Group_1_0_0_1__28001 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_0_1__2__Impl8028 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__0__Impl_in_rule__Note__Group_1_0_1__08063 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__1_in_rule__Note__Group_1_0_1__08066 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_28_in_rule__Note__Group_1_0_1__0__Impl8094 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__1__Impl_in_rule__Note__Group_1_0_1__18125 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__2_in_rule__Note__Group_1_0_1__18128 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__OfAssignment_1_0_1_1_in_rule__Note__Group_1_0_1__1__Impl8155 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__2__Impl_in_rule__Note__Group_1_0_1__28185 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__3_in_rule__Note__Group_1_0_1__28188 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__2__Impl8215 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__3__Impl_in_rule__Note__Group_1_0_1__38244 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__4_in_rule__Note__Group_1_0_1__38247 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_0_1_3_in_rule__Note__Group_1_0_1__3__Impl8274 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__4__Impl_in_rule__Note__Group_1_0_1__48304 = new BitSet(new long[]{0x0008000000000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__5_in_rule__Note__Group_1_0_1__48307 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__4__Impl8334 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__5__Impl_in_rule__Note__Group_1_0_1__58363 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__6_in_rule__Note__Group_1_0_1__58366 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_51_in_rule__Note__Group_1_0_1__5__Impl8394 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__6__Impl_in_rule__Note__Group_1_0_1__68425 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__6__Impl8452 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__0__Impl_in_rule__Note__Group_1_1__08495 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__1_in_rule__Note__Group_1_1__08498 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_27_in_rule__Note__Group_1_1__0__Impl8526 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__1__Impl_in_rule__Note__Group_1_1__18557 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__2_in_rule__Note__Group_1_1__18560 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__NameAssignment_1_1_1_in_rule__Note__Group_1_1__1__Impl8587 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__2__Impl_in_rule__Note__Group_1_1__28617 = new BitSet(new long[]{0x000000007FFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__3_in_rule__Note__Group_1_1__28620 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__2__Impl8647 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__3__Impl_in_rule__Note__Group_1_1__38676 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__4_in_rule__Note__Group_1_1__38679 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_1_3_in_rule__Note__Group_1_1__3__Impl8706 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__4__Impl_in_rule__Note__Group_1_1__48736 = new BitSet(new long[]{0x0008000000000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__5_in_rule__Note__Group_1_1__48739 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__4__Impl8766 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__5__Impl_in_rule__Note__Group_1_1__58795 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__6_in_rule__Note__Group_1_1__58798 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_51_in_rule__Note__Group_1_1__5__Impl8826 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__6__Impl_in_rule__Note__Group_1_1__68857 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__6__Impl8884 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Group__0__Impl_in_rule__DataType__Group__08927 = new BitSet(new long[]{0x0080000000000000L});
    public static final BitSet FOLLOW_rule__DataType__Group__1_in_rule__DataType__Group__08930 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__NativeAssignment_0_in_rule__DataType__Group__0__Impl8957 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Group__1__Impl_in_rule__DataType__Group__18987 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__IsArrayAssignment_1_in_rule__DataType__Group__1__Impl9014 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__0__Impl_in_rule__QualifiedName__Group__09049 = new BitSet(new long[]{0x0000800000000000L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__1_in_rule__QualifiedName__Group__09052 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__QualifiedName__Group__0__Impl9079 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__1__Impl_in_rule__QualifiedName__Group__19108 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__0_in_rule__QualifiedName__Group__1__Impl9135 = new BitSet(new long[]{0x0000800000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__0__Impl_in_rule__QualifiedName__Group_1__09170 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__1_in_rule__QualifiedName__Group_1__09173 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__QualifiedName__Group_1__0__Impl9201 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__1__Impl_in_rule__QualifiedName__Group_1__19232 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__QualifiedName__Group_1__1__Impl9259 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_STRING_in_rule__DomainModel__FileAssignment_29297 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCPackage_in_rule__DomainModel__PackagesAssignment_49328 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__CPackage__NameAssignment_19359 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rulePackageStyle_in_rule__CPackage__StyleAssignment_2_19390 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleElement_in_rule__CPackage__ElementsAssignment_59421 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__Relation__LeftRefAssignment_09456 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationParse_in_rule__Relation__RelTypeAssignment_19491 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__Relation__RightRefAssignment_29526 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Relation__NameAssignment_3_19561 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCompType_in_rule__RelationParse__CompAssignment_0_09592 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_0_19623 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_52_in_rule__RelationParse__DirectAssignment_0_29659 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_0_49698 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_1_09729 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_52_in_rule__RelationParse__DirectAssignment_1_1_09765 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_53_in_rule__RelationParse__ExtAssignment_1_1_19809 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_1_39848 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleStrongRel_in_rule__RelationType__StrongAssignment_09879 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleWeakRel_in_rule__RelationType__WeakAssignment_19910 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Enumer__NameAssignment_19941 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Enumer__TypesAssignment_4_09972 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Clazz__NameAssignment_110003 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Clazz__StereotypeAssignment_2_110034 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleProperty_in_rule__Clazz__PropertiesAssignment_3_210065 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Property__NameAssignment_010096 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_30_in_rule__Property__OptionalAssignment_1_0_010132 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleDataType_in_rule__Property__TypeAssignment_1_0_1_1_010171 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__Property__EntityAssignment_1_0_1_1_110206 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityList_in_rule__Property__EntityListAssignment_1_0_1_1_210241 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_54_in_rule__Property__ConstantAssignment_1_1_010277 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Property__ValueAssignment_1_1_110316 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_110351 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_2_110390 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNotePosition_in_rule__Note__PositionAssignment_1_0_0_010425 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_0_1_110456 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Note__OfAssignment_1_0_1_110491 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_1_310526 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Note__NameAssignment_1_1_110557 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_1_310588 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNativeType_in_rule__DataType__NativeAssignment_010619 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_55_in_rule__DataType__IsArrayAssignment_110655 = new BitSet(new long[]{0x0000000000000002L});

}