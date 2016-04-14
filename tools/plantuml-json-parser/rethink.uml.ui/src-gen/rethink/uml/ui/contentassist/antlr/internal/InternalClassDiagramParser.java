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
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "RULE_ID", "RULE_STRING", "RULE_ANY_OTHER", "RULE_END_LINE", "RULE_WS", "RULE_MULTI", "RULE_ML_COMMENT", "RULE_SL_COMMENT", "'up'", "'down'", "'left'", "'right'", "'top'", "'bottom'", "'null'", "'string'", "'number'", "'integer'", "'boolean'", "'date'", "'object'", "'package'", "'class'", "'enum'", "'note'", "'as'", "'of'", "':'", "'?'", "'['", "']'", "'Node'", "'Rect'", "'Folder'", "'Frame'", "'Cloud'", "'Database'", "'none'", "'*'", "'o'", "'@startuml'", "'@enduml'", "'{'", "'}'", "'<<'", "'>>'", "'-'", "'.'", "'|'", "'end note'", "'>'", "'|>'", "'='", "'[]'"
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
    public static final int T__56=56;
    public static final int T__13=13;
    public static final int T__57=57;
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


    // $ANTLR start "entryRuleNode"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:116:1: entryRuleNode : ruleNode EOF ;
    public final void entryRuleNode() throws RecognitionException {
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:117:1: ( ruleNode EOF )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:118:1: ruleNode EOF
            {
             before(grammarAccess.getNodeRule()); 
            pushFollow(FOLLOW_ruleNode_in_entryRuleNode181);
            ruleNode();

            state._fsp--;

             after(grammarAccess.getNodeRule()); 
            match(input,EOF,FOLLOW_EOF_in_entryRuleNode188); 

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
    // $ANTLR end "entryRuleNode"


    // $ANTLR start "ruleNode"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:125:1: ruleNode : ( ( rule__Node__Alternatives ) ) ;
    public final void ruleNode() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:129:2: ( ( ( rule__Node__Alternatives ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:130:1: ( ( rule__Node__Alternatives ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:130:1: ( ( rule__Node__Alternatives ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:131:1: ( rule__Node__Alternatives )
            {
             before(grammarAccess.getNodeAccess().getAlternatives()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:132:1: ( rule__Node__Alternatives )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:132:2: rule__Node__Alternatives
            {
            pushFollow(FOLLOW_rule__Node__Alternatives_in_ruleNode214);
            rule__Node__Alternatives();

            state._fsp--;


            }

             after(grammarAccess.getNodeAccess().getAlternatives()); 

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
    // $ANTLR end "ruleNode"


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

                if ( ((LA1_0>=RULE_ID && LA1_0<=RULE_ANY_OTHER)||(LA1_0>=12 && LA1_0<=34)) ) {
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:663:1: rule__Element__Alternatives : ( ( ruleRelation ) | ( ruleNode ) );
    public final void rule__Element__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:667:1: ( ( ruleRelation ) | ( ruleNode ) )
            int alt2=2;
            int LA2_0 = input.LA(1);

            if ( (LA2_0==RULE_ID) ) {
                alt2=1;
            }
            else if ( ((LA2_0>=25 && LA2_0<=28)) ) {
                alt2=2;
            }
            else {
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
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:674:6: ( ruleNode )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:674:6: ( ruleNode )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:675:1: ruleNode
                    {
                     before(grammarAccess.getElementAccess().getNodeParserRuleCall_1()); 
                    pushFollow(FOLLOW_ruleNode_in_rule__Element__Alternatives1346);
                    ruleNode();

                    state._fsp--;

                     after(grammarAccess.getElementAccess().getNodeParserRuleCall_1()); 

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


    // $ANTLR start "rule__Node__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:685:1: rule__Node__Alternatives : ( ( ruleCPackage ) | ( ruleEntity ) | ( ruleNote ) );
    public final void rule__Node__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:689:1: ( ( ruleCPackage ) | ( ruleEntity ) | ( ruleNote ) )
            int alt3=3;
            switch ( input.LA(1) ) {
            case 25:
                {
                alt3=1;
                }
                break;
            case 26:
            case 27:
                {
                alt3=2;
                }
                break;
            case 28:
                {
                alt3=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 3, 0, input);

                throw nvae;
            }

            switch (alt3) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:690:1: ( ruleCPackage )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:690:1: ( ruleCPackage )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:691:1: ruleCPackage
                    {
                     before(grammarAccess.getNodeAccess().getCPackageParserRuleCall_0()); 
                    pushFollow(FOLLOW_ruleCPackage_in_rule__Node__Alternatives1378);
                    ruleCPackage();

                    state._fsp--;

                     after(grammarAccess.getNodeAccess().getCPackageParserRuleCall_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:696:6: ( ruleEntity )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:696:6: ( ruleEntity )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:697:1: ruleEntity
                    {
                     before(grammarAccess.getNodeAccess().getEntityParserRuleCall_1()); 
                    pushFollow(FOLLOW_ruleEntity_in_rule__Node__Alternatives1395);
                    ruleEntity();

                    state._fsp--;

                     after(grammarAccess.getNodeAccess().getEntityParserRuleCall_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:702:6: ( ruleNote )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:702:6: ( ruleNote )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:703:1: ruleNote
                    {
                     before(grammarAccess.getNodeAccess().getNoteParserRuleCall_2()); 
                    pushFollow(FOLLOW_ruleNote_in_rule__Node__Alternatives1412);
                    ruleNote();

                    state._fsp--;

                     after(grammarAccess.getNodeAccess().getNoteParserRuleCall_2()); 

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
    // $ANTLR end "rule__Node__Alternatives"


    // $ANTLR start "rule__Entity__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:713:1: rule__Entity__Alternatives : ( ( ruleEnumer ) | ( ruleClazz ) );
    public final void rule__Entity__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:717:1: ( ( ruleEnumer ) | ( ruleClazz ) )
            int alt4=2;
            int LA4_0 = input.LA(1);

            if ( (LA4_0==27) ) {
                alt4=1;
            }
            else if ( (LA4_0==26) ) {
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

            if ( ((LA5_0>=41 && LA5_0<=43)) ) {
                alt5=1;
            }
            else if ( ((LA5_0>=50 && LA5_0<=51)) ) {
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

            if ( (LA6_0==54) ) {
                alt6=1;
            }
            else if ( (LA6_0==55) ) {
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

            if ( (LA7_0==50) ) {
                alt7=1;
            }
            else if ( (LA7_0==51) ) {
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

            if ( (LA10_0==RULE_END_LINE||(LA10_0>=31 && LA10_0<=32)) ) {
                alt10=1;
            }
            else if ( (LA10_0==56) ) {
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:907:1: rule__Property__Alternatives_1_0_1_1 : ( ( ( rule__Property__TypeAssignment_1_0_1_1_0 ) ) | ( ( rule__Property__EntityListAssignment_1_0_1_1_1 ) ) );
    public final void rule__Property__Alternatives_1_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:911:1: ( ( ( rule__Property__TypeAssignment_1_0_1_1_0 ) ) | ( ( rule__Property__EntityListAssignment_1_0_1_1_1 ) ) )
            int alt11=2;
            int LA11_0 = input.LA(1);

            if ( (LA11_0==RULE_ID||(LA11_0>=19 && LA11_0<=24)) ) {
                alt11=1;
            }
            else if ( (LA11_0==33) ) {
                alt11=2;
            }
            else {
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
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:918:6: ( ( rule__Property__EntityListAssignment_1_0_1_1_1 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:918:6: ( ( rule__Property__EntityListAssignment_1_0_1_1_1 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:919:1: ( rule__Property__EntityListAssignment_1_0_1_1_1 )
                    {
                     before(grammarAccess.getPropertyAccess().getEntityListAssignment_1_0_1_1_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:920:1: ( rule__Property__EntityListAssignment_1_0_1_1_1 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:920:2: rule__Property__EntityListAssignment_1_0_1_1_1
                    {
                    pushFollow(FOLLOW_rule__Property__EntityListAssignment_1_0_1_1_1_in_rule__Property__Alternatives_1_0_1_11905);
                    rule__Property__EntityListAssignment_1_0_1_1_1();

                    state._fsp--;


                    }

                     after(grammarAccess.getPropertyAccess().getEntityListAssignment_1_0_1_1_1()); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:929:1: rule__Note__Alternatives_1 : ( ( ( rule__Note__Alternatives_1_0 ) ) | ( ( rule__Note__Group_1_1__0 ) ) );
    public final void rule__Note__Alternatives_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:933:1: ( ( ( rule__Note__Alternatives_1_0 ) ) | ( ( rule__Note__Group_1_1__0 ) ) )
            int alt12=2;
            int LA12_0 = input.LA(1);

            if ( ((LA12_0>=14 && LA12_0<=17)||LA12_0==30) ) {
                alt12=1;
            }
            else if ( (LA12_0==29) ) {
                alt12=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 12, 0, input);

                throw nvae;
            }
            switch (alt12) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:934:1: ( ( rule__Note__Alternatives_1_0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:934:1: ( ( rule__Note__Alternatives_1_0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:935:1: ( rule__Note__Alternatives_1_0 )
                    {
                     before(grammarAccess.getNoteAccess().getAlternatives_1_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:936:1: ( rule__Note__Alternatives_1_0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:936:2: rule__Note__Alternatives_1_0
                    {
                    pushFollow(FOLLOW_rule__Note__Alternatives_1_0_in_rule__Note__Alternatives_11938);
                    rule__Note__Alternatives_1_0();

                    state._fsp--;


                    }

                     after(grammarAccess.getNoteAccess().getAlternatives_1_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:940:6: ( ( rule__Note__Group_1_1__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:940:6: ( ( rule__Note__Group_1_1__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:941:1: ( rule__Note__Group_1_1__0 )
                    {
                     before(grammarAccess.getNoteAccess().getGroup_1_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:942:1: ( rule__Note__Group_1_1__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:942:2: rule__Note__Group_1_1__0
                    {
                    pushFollow(FOLLOW_rule__Note__Group_1_1__0_in_rule__Note__Alternatives_11956);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:951:1: rule__Note__Alternatives_1_0 : ( ( ( rule__Note__Group_1_0_0__0 ) ) | ( ( rule__Note__Group_1_0_1__0 ) ) );
    public final void rule__Note__Alternatives_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:955:1: ( ( ( rule__Note__Group_1_0_0__0 ) ) | ( ( rule__Note__Group_1_0_1__0 ) ) )
            int alt13=2;
            int LA13_0 = input.LA(1);

            if ( ((LA13_0>=14 && LA13_0<=17)) ) {
                alt13=1;
            }
            else if ( (LA13_0==30) ) {
                alt13=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 13, 0, input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:956:1: ( ( rule__Note__Group_1_0_0__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:956:1: ( ( rule__Note__Group_1_0_0__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:957:1: ( rule__Note__Group_1_0_0__0 )
                    {
                     before(grammarAccess.getNoteAccess().getGroup_1_0_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:958:1: ( rule__Note__Group_1_0_0__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:958:2: rule__Note__Group_1_0_0__0
                    {
                    pushFollow(FOLLOW_rule__Note__Group_1_0_0__0_in_rule__Note__Alternatives_1_01989);
                    rule__Note__Group_1_0_0__0();

                    state._fsp--;


                    }

                     after(grammarAccess.getNoteAccess().getGroup_1_0_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:962:6: ( ( rule__Note__Group_1_0_1__0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:962:6: ( ( rule__Note__Group_1_0_1__0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:963:1: ( rule__Note__Group_1_0_1__0 )
                    {
                     before(grammarAccess.getNoteAccess().getGroup_1_0_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:964:1: ( rule__Note__Group_1_0_1__0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:964:2: rule__Note__Group_1_0_1__0
                    {
                    pushFollow(FOLLOW_rule__Note__Group_1_0_1__0_in_rule__Note__Alternatives_1_02007);
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


    // $ANTLR start "rule__DataType__Alternatives_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:973:1: rule__DataType__Alternatives_0 : ( ( ( rule__DataType__NativeAssignment_0_0 ) ) | ( ( rule__DataType__EntityAssignment_0_1 ) ) );
    public final void rule__DataType__Alternatives_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:977:1: ( ( ( rule__DataType__NativeAssignment_0_0 ) ) | ( ( rule__DataType__EntityAssignment_0_1 ) ) )
            int alt14=2;
            int LA14_0 = input.LA(1);

            if ( ((LA14_0>=19 && LA14_0<=24)) ) {
                alt14=1;
            }
            else if ( (LA14_0==RULE_ID) ) {
                alt14=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 14, 0, input);

                throw nvae;
            }
            switch (alt14) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:978:1: ( ( rule__DataType__NativeAssignment_0_0 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:978:1: ( ( rule__DataType__NativeAssignment_0_0 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:979:1: ( rule__DataType__NativeAssignment_0_0 )
                    {
                     before(grammarAccess.getDataTypeAccess().getNativeAssignment_0_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:980:1: ( rule__DataType__NativeAssignment_0_0 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:980:2: rule__DataType__NativeAssignment_0_0
                    {
                    pushFollow(FOLLOW_rule__DataType__NativeAssignment_0_0_in_rule__DataType__Alternatives_02040);
                    rule__DataType__NativeAssignment_0_0();

                    state._fsp--;


                    }

                     after(grammarAccess.getDataTypeAccess().getNativeAssignment_0_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:984:6: ( ( rule__DataType__EntityAssignment_0_1 ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:984:6: ( ( rule__DataType__EntityAssignment_0_1 ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:985:1: ( rule__DataType__EntityAssignment_0_1 )
                    {
                     before(grammarAccess.getDataTypeAccess().getEntityAssignment_0_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:986:1: ( rule__DataType__EntityAssignment_0_1 )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:986:2: rule__DataType__EntityAssignment_0_1
                    {
                    pushFollow(FOLLOW_rule__DataType__EntityAssignment_0_1_in_rule__DataType__Alternatives_02058);
                    rule__DataType__EntityAssignment_0_1();

                    state._fsp--;


                    }

                     after(grammarAccess.getDataTypeAccess().getEntityAssignment_0_1()); 

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
    // $ANTLR end "rule__DataType__Alternatives_0"


    // $ANTLR start "rule__Text__Alternatives"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:995:1: rule__Text__Alternatives : ( ( RULE_ID ) | ( RULE_STRING ) | ( RULE_ANY_OTHER ) | ( 'up' ) | ( 'down' ) | ( 'top' ) | ( 'bottom' ) | ( 'left' ) | ( 'right' ) | ( 'null' ) | ( 'string' ) | ( 'number' ) | ( 'integer' ) | ( 'boolean' ) | ( 'date' ) | ( 'object' ) | ( 'package' ) | ( 'class' ) | ( 'enum' ) | ( 'note' ) | ( 'as' ) | ( 'of' ) | ( ':' ) | ( '?' ) | ( '[' ) | ( ']' ) );
    public final void rule__Text__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:999:1: ( ( RULE_ID ) | ( RULE_STRING ) | ( RULE_ANY_OTHER ) | ( 'up' ) | ( 'down' ) | ( 'top' ) | ( 'bottom' ) | ( 'left' ) | ( 'right' ) | ( 'null' ) | ( 'string' ) | ( 'number' ) | ( 'integer' ) | ( 'boolean' ) | ( 'date' ) | ( 'object' ) | ( 'package' ) | ( 'class' ) | ( 'enum' ) | ( 'note' ) | ( 'as' ) | ( 'of' ) | ( ':' ) | ( '?' ) | ( '[' ) | ( ']' ) )
            int alt15=26;
            switch ( input.LA(1) ) {
            case RULE_ID:
                {
                alt15=1;
                }
                break;
            case RULE_STRING:
                {
                alt15=2;
                }
                break;
            case RULE_ANY_OTHER:
                {
                alt15=3;
                }
                break;
            case 12:
                {
                alt15=4;
                }
                break;
            case 13:
                {
                alt15=5;
                }
                break;
            case 16:
                {
                alt15=6;
                }
                break;
            case 17:
                {
                alt15=7;
                }
                break;
            case 14:
                {
                alt15=8;
                }
                break;
            case 15:
                {
                alt15=9;
                }
                break;
            case 18:
                {
                alt15=10;
                }
                break;
            case 19:
                {
                alt15=11;
                }
                break;
            case 20:
                {
                alt15=12;
                }
                break;
            case 21:
                {
                alt15=13;
                }
                break;
            case 22:
                {
                alt15=14;
                }
                break;
            case 23:
                {
                alt15=15;
                }
                break;
            case 24:
                {
                alt15=16;
                }
                break;
            case 25:
                {
                alt15=17;
                }
                break;
            case 26:
                {
                alt15=18;
                }
                break;
            case 27:
                {
                alt15=19;
                }
                break;
            case 28:
                {
                alt15=20;
                }
                break;
            case 29:
                {
                alt15=21;
                }
                break;
            case 30:
                {
                alt15=22;
                }
                break;
            case 31:
                {
                alt15=23;
                }
                break;
            case 32:
                {
                alt15=24;
                }
                break;
            case 33:
                {
                alt15=25;
                }
                break;
            case 34:
                {
                alt15=26;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 15, 0, input);

                throw nvae;
            }

            switch (alt15) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1000:1: ( RULE_ID )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1000:1: ( RULE_ID )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1001:1: RULE_ID
                    {
                     before(grammarAccess.getTextAccess().getIDTerminalRuleCall_0()); 
                    match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Text__Alternatives2091); 
                     after(grammarAccess.getTextAccess().getIDTerminalRuleCall_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1006:6: ( RULE_STRING )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1006:6: ( RULE_STRING )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1007:1: RULE_STRING
                    {
                     before(grammarAccess.getTextAccess().getSTRINGTerminalRuleCall_1()); 
                    match(input,RULE_STRING,FOLLOW_RULE_STRING_in_rule__Text__Alternatives2108); 
                     after(grammarAccess.getTextAccess().getSTRINGTerminalRuleCall_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1012:6: ( RULE_ANY_OTHER )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1012:6: ( RULE_ANY_OTHER )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1013:1: RULE_ANY_OTHER
                    {
                     before(grammarAccess.getTextAccess().getANY_OTHERTerminalRuleCall_2()); 
                    match(input,RULE_ANY_OTHER,FOLLOW_RULE_ANY_OTHER_in_rule__Text__Alternatives2125); 
                     after(grammarAccess.getTextAccess().getANY_OTHERTerminalRuleCall_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1018:6: ( 'up' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1018:6: ( 'up' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1019:1: 'up'
                    {
                     before(grammarAccess.getTextAccess().getUpKeyword_3()); 
                    match(input,12,FOLLOW_12_in_rule__Text__Alternatives2143); 
                     after(grammarAccess.getTextAccess().getUpKeyword_3()); 

                    }


                    }
                    break;
                case 5 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1026:6: ( 'down' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1026:6: ( 'down' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1027:1: 'down'
                    {
                     before(grammarAccess.getTextAccess().getDownKeyword_4()); 
                    match(input,13,FOLLOW_13_in_rule__Text__Alternatives2163); 
                     after(grammarAccess.getTextAccess().getDownKeyword_4()); 

                    }


                    }
                    break;
                case 6 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1034:6: ( 'top' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1034:6: ( 'top' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1035:1: 'top'
                    {
                     before(grammarAccess.getTextAccess().getTopKeyword_5()); 
                    match(input,16,FOLLOW_16_in_rule__Text__Alternatives2183); 
                     after(grammarAccess.getTextAccess().getTopKeyword_5()); 

                    }


                    }
                    break;
                case 7 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1042:6: ( 'bottom' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1042:6: ( 'bottom' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1043:1: 'bottom'
                    {
                     before(grammarAccess.getTextAccess().getBottomKeyword_6()); 
                    match(input,17,FOLLOW_17_in_rule__Text__Alternatives2203); 
                     after(grammarAccess.getTextAccess().getBottomKeyword_6()); 

                    }


                    }
                    break;
                case 8 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1050:6: ( 'left' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1050:6: ( 'left' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1051:1: 'left'
                    {
                     before(grammarAccess.getTextAccess().getLeftKeyword_7()); 
                    match(input,14,FOLLOW_14_in_rule__Text__Alternatives2223); 
                     after(grammarAccess.getTextAccess().getLeftKeyword_7()); 

                    }


                    }
                    break;
                case 9 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1058:6: ( 'right' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1058:6: ( 'right' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1059:1: 'right'
                    {
                     before(grammarAccess.getTextAccess().getRightKeyword_8()); 
                    match(input,15,FOLLOW_15_in_rule__Text__Alternatives2243); 
                     after(grammarAccess.getTextAccess().getRightKeyword_8()); 

                    }


                    }
                    break;
                case 10 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1066:6: ( 'null' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1066:6: ( 'null' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1067:1: 'null'
                    {
                     before(grammarAccess.getTextAccess().getNullKeyword_9()); 
                    match(input,18,FOLLOW_18_in_rule__Text__Alternatives2263); 
                     after(grammarAccess.getTextAccess().getNullKeyword_9()); 

                    }


                    }
                    break;
                case 11 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1074:6: ( 'string' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1074:6: ( 'string' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1075:1: 'string'
                    {
                     before(grammarAccess.getTextAccess().getStringKeyword_10()); 
                    match(input,19,FOLLOW_19_in_rule__Text__Alternatives2283); 
                     after(grammarAccess.getTextAccess().getStringKeyword_10()); 

                    }


                    }
                    break;
                case 12 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1082:6: ( 'number' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1082:6: ( 'number' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1083:1: 'number'
                    {
                     before(grammarAccess.getTextAccess().getNumberKeyword_11()); 
                    match(input,20,FOLLOW_20_in_rule__Text__Alternatives2303); 
                     after(grammarAccess.getTextAccess().getNumberKeyword_11()); 

                    }


                    }
                    break;
                case 13 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1090:6: ( 'integer' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1090:6: ( 'integer' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1091:1: 'integer'
                    {
                     before(grammarAccess.getTextAccess().getIntegerKeyword_12()); 
                    match(input,21,FOLLOW_21_in_rule__Text__Alternatives2323); 
                     after(grammarAccess.getTextAccess().getIntegerKeyword_12()); 

                    }


                    }
                    break;
                case 14 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1098:6: ( 'boolean' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1098:6: ( 'boolean' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1099:1: 'boolean'
                    {
                     before(grammarAccess.getTextAccess().getBooleanKeyword_13()); 
                    match(input,22,FOLLOW_22_in_rule__Text__Alternatives2343); 
                     after(grammarAccess.getTextAccess().getBooleanKeyword_13()); 

                    }


                    }
                    break;
                case 15 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1106:6: ( 'date' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1106:6: ( 'date' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1107:1: 'date'
                    {
                     before(grammarAccess.getTextAccess().getDateKeyword_14()); 
                    match(input,23,FOLLOW_23_in_rule__Text__Alternatives2363); 
                     after(grammarAccess.getTextAccess().getDateKeyword_14()); 

                    }


                    }
                    break;
                case 16 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1114:6: ( 'object' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1114:6: ( 'object' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1115:1: 'object'
                    {
                     before(grammarAccess.getTextAccess().getObjectKeyword_15()); 
                    match(input,24,FOLLOW_24_in_rule__Text__Alternatives2383); 
                     after(grammarAccess.getTextAccess().getObjectKeyword_15()); 

                    }


                    }
                    break;
                case 17 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1122:6: ( 'package' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1122:6: ( 'package' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1123:1: 'package'
                    {
                     before(grammarAccess.getTextAccess().getPackageKeyword_16()); 
                    match(input,25,FOLLOW_25_in_rule__Text__Alternatives2403); 
                     after(grammarAccess.getTextAccess().getPackageKeyword_16()); 

                    }


                    }
                    break;
                case 18 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1130:6: ( 'class' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1130:6: ( 'class' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1131:1: 'class'
                    {
                     before(grammarAccess.getTextAccess().getClassKeyword_17()); 
                    match(input,26,FOLLOW_26_in_rule__Text__Alternatives2423); 
                     after(grammarAccess.getTextAccess().getClassKeyword_17()); 

                    }


                    }
                    break;
                case 19 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1138:6: ( 'enum' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1138:6: ( 'enum' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1139:1: 'enum'
                    {
                     before(grammarAccess.getTextAccess().getEnumKeyword_18()); 
                    match(input,27,FOLLOW_27_in_rule__Text__Alternatives2443); 
                     after(grammarAccess.getTextAccess().getEnumKeyword_18()); 

                    }


                    }
                    break;
                case 20 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1146:6: ( 'note' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1146:6: ( 'note' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1147:1: 'note'
                    {
                     before(grammarAccess.getTextAccess().getNoteKeyword_19()); 
                    match(input,28,FOLLOW_28_in_rule__Text__Alternatives2463); 
                     after(grammarAccess.getTextAccess().getNoteKeyword_19()); 

                    }


                    }
                    break;
                case 21 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1154:6: ( 'as' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1154:6: ( 'as' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1155:1: 'as'
                    {
                     before(grammarAccess.getTextAccess().getAsKeyword_20()); 
                    match(input,29,FOLLOW_29_in_rule__Text__Alternatives2483); 
                     after(grammarAccess.getTextAccess().getAsKeyword_20()); 

                    }


                    }
                    break;
                case 22 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1162:6: ( 'of' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1162:6: ( 'of' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1163:1: 'of'
                    {
                     before(grammarAccess.getTextAccess().getOfKeyword_21()); 
                    match(input,30,FOLLOW_30_in_rule__Text__Alternatives2503); 
                     after(grammarAccess.getTextAccess().getOfKeyword_21()); 

                    }


                    }
                    break;
                case 23 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1170:6: ( ':' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1170:6: ( ':' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1171:1: ':'
                    {
                     before(grammarAccess.getTextAccess().getColonKeyword_22()); 
                    match(input,31,FOLLOW_31_in_rule__Text__Alternatives2523); 
                     after(grammarAccess.getTextAccess().getColonKeyword_22()); 

                    }


                    }
                    break;
                case 24 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1178:6: ( '?' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1178:6: ( '?' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1179:1: '?'
                    {
                     before(grammarAccess.getTextAccess().getQuestionMarkKeyword_23()); 
                    match(input,32,FOLLOW_32_in_rule__Text__Alternatives2543); 
                     after(grammarAccess.getTextAccess().getQuestionMarkKeyword_23()); 

                    }


                    }
                    break;
                case 25 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1186:6: ( '[' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1186:6: ( '[' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1187:1: '['
                    {
                     before(grammarAccess.getTextAccess().getLeftSquareBracketKeyword_24()); 
                    match(input,33,FOLLOW_33_in_rule__Text__Alternatives2563); 
                     after(grammarAccess.getTextAccess().getLeftSquareBracketKeyword_24()); 

                    }


                    }
                    break;
                case 26 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1194:6: ( ']' )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1194:6: ( ']' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1195:1: ']'
                    {
                     before(grammarAccess.getTextAccess().getRightSquareBracketKeyword_25()); 
                    match(input,34,FOLLOW_34_in_rule__Text__Alternatives2583); 
                     after(grammarAccess.getTextAccess().getRightSquareBracketKeyword_25()); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1207:1: rule__PackageStyle__Alternatives : ( ( ( 'Node' ) ) | ( ( 'Rect' ) ) | ( ( 'Folder' ) ) | ( ( 'Frame' ) ) | ( ( 'Cloud' ) ) | ( ( 'Database' ) ) );
    public final void rule__PackageStyle__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1211:1: ( ( ( 'Node' ) ) | ( ( 'Rect' ) ) | ( ( 'Folder' ) ) | ( ( 'Frame' ) ) | ( ( 'Cloud' ) ) | ( ( 'Database' ) ) )
            int alt16=6;
            switch ( input.LA(1) ) {
            case 35:
                {
                alt16=1;
                }
                break;
            case 36:
                {
                alt16=2;
                }
                break;
            case 37:
                {
                alt16=3;
                }
                break;
            case 38:
                {
                alt16=4;
                }
                break;
            case 39:
                {
                alt16=5;
                }
                break;
            case 40:
                {
                alt16=6;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 16, 0, input);

                throw nvae;
            }

            switch (alt16) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1212:1: ( ( 'Node' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1212:1: ( ( 'Node' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1213:1: ( 'Node' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getNodeEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1214:1: ( 'Node' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1214:3: 'Node'
                    {
                    match(input,35,FOLLOW_35_in_rule__PackageStyle__Alternatives2618); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getNodeEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1219:6: ( ( 'Rect' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1219:6: ( ( 'Rect' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1220:1: ( 'Rect' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getRectEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1221:1: ( 'Rect' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1221:3: 'Rect'
                    {
                    match(input,36,FOLLOW_36_in_rule__PackageStyle__Alternatives2639); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getRectEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1226:6: ( ( 'Folder' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1226:6: ( ( 'Folder' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1227:1: ( 'Folder' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getFolderEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1228:1: ( 'Folder' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1228:3: 'Folder'
                    {
                    match(input,37,FOLLOW_37_in_rule__PackageStyle__Alternatives2660); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getFolderEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1233:6: ( ( 'Frame' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1233:6: ( ( 'Frame' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1234:1: ( 'Frame' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getFrameEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1235:1: ( 'Frame' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1235:3: 'Frame'
                    {
                    match(input,38,FOLLOW_38_in_rule__PackageStyle__Alternatives2681); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getFrameEnumLiteralDeclaration_3()); 

                    }


                    }
                    break;
                case 5 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1240:6: ( ( 'Cloud' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1240:6: ( ( 'Cloud' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1241:1: ( 'Cloud' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getCloudEnumLiteralDeclaration_4()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1242:1: ( 'Cloud' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1242:3: 'Cloud'
                    {
                    match(input,39,FOLLOW_39_in_rule__PackageStyle__Alternatives2702); 

                    }

                     after(grammarAccess.getPackageStyleAccess().getCloudEnumLiteralDeclaration_4()); 

                    }


                    }
                    break;
                case 6 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1247:6: ( ( 'Database' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1247:6: ( ( 'Database' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1248:1: ( 'Database' )
                    {
                     before(grammarAccess.getPackageStyleAccess().getDatabaseEnumLiteralDeclaration_5()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1249:1: ( 'Database' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1249:3: 'Database'
                    {
                    match(input,40,FOLLOW_40_in_rule__PackageStyle__Alternatives2723); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1259:1: rule__CompType__Alternatives : ( ( ( 'none' ) ) | ( ( '*' ) ) | ( ( 'o' ) ) );
    public final void rule__CompType__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1263:1: ( ( ( 'none' ) ) | ( ( '*' ) ) | ( ( 'o' ) ) )
            int alt17=3;
            switch ( input.LA(1) ) {
            case 41:
                {
                alt17=1;
                }
                break;
            case 42:
                {
                alt17=2;
                }
                break;
            case 43:
                {
                alt17=3;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 17, 0, input);

                throw nvae;
            }

            switch (alt17) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1264:1: ( ( 'none' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1264:1: ( ( 'none' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1265:1: ( 'none' )
                    {
                     before(grammarAccess.getCompTypeAccess().getNoneEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1266:1: ( 'none' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1266:3: 'none'
                    {
                    match(input,41,FOLLOW_41_in_rule__CompType__Alternatives2759); 

                    }

                     after(grammarAccess.getCompTypeAccess().getNoneEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1271:6: ( ( '*' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1271:6: ( ( '*' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1272:1: ( '*' )
                    {
                     before(grammarAccess.getCompTypeAccess().getCompEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1273:1: ( '*' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1273:3: '*'
                    {
                    match(input,42,FOLLOW_42_in_rule__CompType__Alternatives2780); 

                    }

                     after(grammarAccess.getCompTypeAccess().getCompEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1278:6: ( ( 'o' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1278:6: ( ( 'o' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1279:1: ( 'o' )
                    {
                     before(grammarAccess.getCompTypeAccess().getAgreEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1280:1: ( 'o' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1280:3: 'o'
                    {
                    match(input,43,FOLLOW_43_in_rule__CompType__Alternatives2801); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1290:1: rule__NotePosition__Alternatives : ( ( ( 'top' ) ) | ( ( 'bottom' ) ) | ( ( 'left' ) ) | ( ( 'right' ) ) );
    public final void rule__NotePosition__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1294:1: ( ( ( 'top' ) ) | ( ( 'bottom' ) ) | ( ( 'left' ) ) | ( ( 'right' ) ) )
            int alt18=4;
            switch ( input.LA(1) ) {
            case 16:
                {
                alt18=1;
                }
                break;
            case 17:
                {
                alt18=2;
                }
                break;
            case 14:
                {
                alt18=3;
                }
                break;
            case 15:
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
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1295:1: ( ( 'top' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1295:1: ( ( 'top' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1296:1: ( 'top' )
                    {
                     before(grammarAccess.getNotePositionAccess().getTopEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1297:1: ( 'top' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1297:3: 'top'
                    {
                    match(input,16,FOLLOW_16_in_rule__NotePosition__Alternatives2837); 

                    }

                     after(grammarAccess.getNotePositionAccess().getTopEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1302:6: ( ( 'bottom' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1302:6: ( ( 'bottom' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1303:1: ( 'bottom' )
                    {
                     before(grammarAccess.getNotePositionAccess().getBottomEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1304:1: ( 'bottom' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1304:3: 'bottom'
                    {
                    match(input,17,FOLLOW_17_in_rule__NotePosition__Alternatives2858); 

                    }

                     after(grammarAccess.getNotePositionAccess().getBottomEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1309:6: ( ( 'left' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1309:6: ( ( 'left' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1310:1: ( 'left' )
                    {
                     before(grammarAccess.getNotePositionAccess().getLeftEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1311:1: ( 'left' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1311:3: 'left'
                    {
                    match(input,14,FOLLOW_14_in_rule__NotePosition__Alternatives2879); 

                    }

                     after(grammarAccess.getNotePositionAccess().getLeftEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1316:6: ( ( 'right' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1316:6: ( ( 'right' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1317:1: ( 'right' )
                    {
                     before(grammarAccess.getNotePositionAccess().getRightEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1318:1: ( 'right' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1318:3: 'right'
                    {
                    match(input,15,FOLLOW_15_in_rule__NotePosition__Alternatives2900); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1328:1: rule__NativeType__Alternatives : ( ( ( 'string' ) ) | ( ( 'number' ) ) | ( ( 'integer' ) ) | ( ( 'boolean' ) ) | ( ( 'date' ) ) | ( ( 'object' ) ) );
    public final void rule__NativeType__Alternatives() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1332:1: ( ( ( 'string' ) ) | ( ( 'number' ) ) | ( ( 'integer' ) ) | ( ( 'boolean' ) ) | ( ( 'date' ) ) | ( ( 'object' ) ) )
            int alt19=6;
            switch ( input.LA(1) ) {
            case 19:
                {
                alt19=1;
                }
                break;
            case 20:
                {
                alt19=2;
                }
                break;
            case 21:
                {
                alt19=3;
                }
                break;
            case 22:
                {
                alt19=4;
                }
                break;
            case 23:
                {
                alt19=5;
                }
                break;
            case 24:
                {
                alt19=6;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 19, 0, input);

                throw nvae;
            }

            switch (alt19) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1333:1: ( ( 'string' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1333:1: ( ( 'string' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1334:1: ( 'string' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getStringEnumLiteralDeclaration_0()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1335:1: ( 'string' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1335:3: 'string'
                    {
                    match(input,19,FOLLOW_19_in_rule__NativeType__Alternatives2936); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getStringEnumLiteralDeclaration_0()); 

                    }


                    }
                    break;
                case 2 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1340:6: ( ( 'number' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1340:6: ( ( 'number' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1341:1: ( 'number' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getNumberEnumLiteralDeclaration_1()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1342:1: ( 'number' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1342:3: 'number'
                    {
                    match(input,20,FOLLOW_20_in_rule__NativeType__Alternatives2957); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getNumberEnumLiteralDeclaration_1()); 

                    }


                    }
                    break;
                case 3 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1347:6: ( ( 'integer' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1347:6: ( ( 'integer' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1348:1: ( 'integer' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getIntegerEnumLiteralDeclaration_2()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1349:1: ( 'integer' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1349:3: 'integer'
                    {
                    match(input,21,FOLLOW_21_in_rule__NativeType__Alternatives2978); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getIntegerEnumLiteralDeclaration_2()); 

                    }


                    }
                    break;
                case 4 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1354:6: ( ( 'boolean' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1354:6: ( ( 'boolean' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1355:1: ( 'boolean' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getBooleanEnumLiteralDeclaration_3()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1356:1: ( 'boolean' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1356:3: 'boolean'
                    {
                    match(input,22,FOLLOW_22_in_rule__NativeType__Alternatives2999); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getBooleanEnumLiteralDeclaration_3()); 

                    }


                    }
                    break;
                case 5 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1361:6: ( ( 'date' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1361:6: ( ( 'date' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1362:1: ( 'date' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getDateEnumLiteralDeclaration_4()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1363:1: ( 'date' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1363:3: 'date'
                    {
                    match(input,23,FOLLOW_23_in_rule__NativeType__Alternatives3020); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getDateEnumLiteralDeclaration_4()); 

                    }


                    }
                    break;
                case 6 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1368:6: ( ( 'object' ) )
                    {
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1368:6: ( ( 'object' ) )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1369:1: ( 'object' )
                    {
                     before(grammarAccess.getNativeTypeAccess().getObjectEnumLiteralDeclaration_5()); 
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1370:1: ( 'object' )
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1370:3: 'object'
                    {
                    match(input,24,FOLLOW_24_in_rule__NativeType__Alternatives3041); 

                    }

                     after(grammarAccess.getNativeTypeAccess().getObjectEnumLiteralDeclaration_5()); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1382:1: rule__DomainModel__Group__0 : rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1 ;
    public final void rule__DomainModel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1386:1: ( rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1387:2: rule__DomainModel__Group__0__Impl rule__DomainModel__Group__1
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__0__Impl_in_rule__DomainModel__Group__03074);
            rule__DomainModel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__1_in_rule__DomainModel__Group__03077);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1394:1: rule__DomainModel__Group__0__Impl : ( '@startuml' ) ;
    public final void rule__DomainModel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1398:1: ( ( '@startuml' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1399:1: ( '@startuml' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1399:1: ( '@startuml' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1400:1: '@startuml'
            {
             before(grammarAccess.getDomainModelAccess().getStartumlKeyword_0()); 
            match(input,44,FOLLOW_44_in_rule__DomainModel__Group__0__Impl3105); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1413:1: rule__DomainModel__Group__1 : rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2 ;
    public final void rule__DomainModel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1417:1: ( rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1418:2: rule__DomainModel__Group__1__Impl rule__DomainModel__Group__2
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__1__Impl_in_rule__DomainModel__Group__13136);
            rule__DomainModel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__2_in_rule__DomainModel__Group__13139);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1425:1: rule__DomainModel__Group__1__Impl : ( () ) ;
    public final void rule__DomainModel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1429:1: ( ( () ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1430:1: ( () )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1430:1: ( () )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1431:1: ()
            {
             before(grammarAccess.getDomainModelAccess().getDomainModelAction_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1432:1: ()
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1434:1: 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1444:1: rule__DomainModel__Group__2 : rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3 ;
    public final void rule__DomainModel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1448:1: ( rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1449:2: rule__DomainModel__Group__2__Impl rule__DomainModel__Group__3
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__2__Impl_in_rule__DomainModel__Group__23197);
            rule__DomainModel__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__3_in_rule__DomainModel__Group__23200);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1456:1: rule__DomainModel__Group__2__Impl : ( ( rule__DomainModel__FileAssignment_2 )? ) ;
    public final void rule__DomainModel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1460:1: ( ( ( rule__DomainModel__FileAssignment_2 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1461:1: ( ( rule__DomainModel__FileAssignment_2 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1461:1: ( ( rule__DomainModel__FileAssignment_2 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1462:1: ( rule__DomainModel__FileAssignment_2 )?
            {
             before(grammarAccess.getDomainModelAccess().getFileAssignment_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1463:1: ( rule__DomainModel__FileAssignment_2 )?
            int alt20=2;
            int LA20_0 = input.LA(1);

            if ( (LA20_0==RULE_STRING) ) {
                alt20=1;
            }
            switch (alt20) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1463:2: rule__DomainModel__FileAssignment_2
                    {
                    pushFollow(FOLLOW_rule__DomainModel__FileAssignment_2_in_rule__DomainModel__Group__2__Impl3227);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1473:1: rule__DomainModel__Group__3 : rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4 ;
    public final void rule__DomainModel__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1477:1: ( rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1478:2: rule__DomainModel__Group__3__Impl rule__DomainModel__Group__4
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__3__Impl_in_rule__DomainModel__Group__33258);
            rule__DomainModel__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__4_in_rule__DomainModel__Group__33261);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1485:1: rule__DomainModel__Group__3__Impl : ( RULE_END_LINE ) ;
    public final void rule__DomainModel__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1489:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1490:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1490:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1491:1: RULE_END_LINE
            {
             before(grammarAccess.getDomainModelAccess().getEND_LINETerminalRuleCall_3()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__DomainModel__Group__3__Impl3288); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1502:1: rule__DomainModel__Group__4 : rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5 ;
    public final void rule__DomainModel__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1506:1: ( rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1507:2: rule__DomainModel__Group__4__Impl rule__DomainModel__Group__5
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__4__Impl_in_rule__DomainModel__Group__43317);
            rule__DomainModel__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DomainModel__Group__5_in_rule__DomainModel__Group__43320);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1514:1: rule__DomainModel__Group__4__Impl : ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) ) ;
    public final void rule__DomainModel__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1518:1: ( ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1519:1: ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1519:1: ( ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1520:1: ( ( rule__DomainModel__PackagesAssignment_4 ) ) ( ( rule__DomainModel__PackagesAssignment_4 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1520:1: ( ( rule__DomainModel__PackagesAssignment_4 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1521:1: ( rule__DomainModel__PackagesAssignment_4 )
            {
             before(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1522:1: ( rule__DomainModel__PackagesAssignment_4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1522:2: rule__DomainModel__PackagesAssignment_4
            {
            pushFollow(FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3349);
            rule__DomainModel__PackagesAssignment_4();

            state._fsp--;


            }

             after(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1525:1: ( ( rule__DomainModel__PackagesAssignment_4 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1526:1: ( rule__DomainModel__PackagesAssignment_4 )*
            {
             before(grammarAccess.getDomainModelAccess().getPackagesAssignment_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1527:1: ( rule__DomainModel__PackagesAssignment_4 )*
            loop21:
            do {
                int alt21=2;
                int LA21_0 = input.LA(1);

                if ( (LA21_0==25) ) {
                    alt21=1;
                }


                switch (alt21) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1527:2: rule__DomainModel__PackagesAssignment_4
            	    {
            	    pushFollow(FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3361);
            	    rule__DomainModel__PackagesAssignment_4();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop21;
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1538:1: rule__DomainModel__Group__5 : rule__DomainModel__Group__5__Impl ;
    public final void rule__DomainModel__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1542:1: ( rule__DomainModel__Group__5__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1543:2: rule__DomainModel__Group__5__Impl
            {
            pushFollow(FOLLOW_rule__DomainModel__Group__5__Impl_in_rule__DomainModel__Group__53394);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1549:1: rule__DomainModel__Group__5__Impl : ( '@enduml' ) ;
    public final void rule__DomainModel__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1553:1: ( ( '@enduml' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1554:1: ( '@enduml' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1554:1: ( '@enduml' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1555:1: '@enduml'
            {
             before(grammarAccess.getDomainModelAccess().getEndumlKeyword_5()); 
            match(input,45,FOLLOW_45_in_rule__DomainModel__Group__5__Impl3422); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1580:1: rule__CPackage__Group__0 : rule__CPackage__Group__0__Impl rule__CPackage__Group__1 ;
    public final void rule__CPackage__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1584:1: ( rule__CPackage__Group__0__Impl rule__CPackage__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1585:2: rule__CPackage__Group__0__Impl rule__CPackage__Group__1
            {
            pushFollow(FOLLOW_rule__CPackage__Group__0__Impl_in_rule__CPackage__Group__03465);
            rule__CPackage__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__1_in_rule__CPackage__Group__03468);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1592:1: rule__CPackage__Group__0__Impl : ( 'package' ) ;
    public final void rule__CPackage__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1596:1: ( ( 'package' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1597:1: ( 'package' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1597:1: ( 'package' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1598:1: 'package'
            {
             before(grammarAccess.getCPackageAccess().getPackageKeyword_0()); 
            match(input,25,FOLLOW_25_in_rule__CPackage__Group__0__Impl3496); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1611:1: rule__CPackage__Group__1 : rule__CPackage__Group__1__Impl rule__CPackage__Group__2 ;
    public final void rule__CPackage__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1615:1: ( rule__CPackage__Group__1__Impl rule__CPackage__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1616:2: rule__CPackage__Group__1__Impl rule__CPackage__Group__2
            {
            pushFollow(FOLLOW_rule__CPackage__Group__1__Impl_in_rule__CPackage__Group__13527);
            rule__CPackage__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__2_in_rule__CPackage__Group__13530);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1623:1: rule__CPackage__Group__1__Impl : ( ( rule__CPackage__NameAssignment_1 ) ) ;
    public final void rule__CPackage__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1627:1: ( ( ( rule__CPackage__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1628:1: ( ( rule__CPackage__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1628:1: ( ( rule__CPackage__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1629:1: ( rule__CPackage__NameAssignment_1 )
            {
             before(grammarAccess.getCPackageAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1630:1: ( rule__CPackage__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1630:2: rule__CPackage__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__CPackage__NameAssignment_1_in_rule__CPackage__Group__1__Impl3557);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1640:1: rule__CPackage__Group__2 : rule__CPackage__Group__2__Impl rule__CPackage__Group__3 ;
    public final void rule__CPackage__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1644:1: ( rule__CPackage__Group__2__Impl rule__CPackage__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1645:2: rule__CPackage__Group__2__Impl rule__CPackage__Group__3
            {
            pushFollow(FOLLOW_rule__CPackage__Group__2__Impl_in_rule__CPackage__Group__23587);
            rule__CPackage__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__3_in_rule__CPackage__Group__23590);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1652:1: rule__CPackage__Group__2__Impl : ( ( rule__CPackage__Group_2__0 )? ) ;
    public final void rule__CPackage__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1656:1: ( ( ( rule__CPackage__Group_2__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1657:1: ( ( rule__CPackage__Group_2__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1657:1: ( ( rule__CPackage__Group_2__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1658:1: ( rule__CPackage__Group_2__0 )?
            {
             before(grammarAccess.getCPackageAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1659:1: ( rule__CPackage__Group_2__0 )?
            int alt22=2;
            int LA22_0 = input.LA(1);

            if ( (LA22_0==48) ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1659:2: rule__CPackage__Group_2__0
                    {
                    pushFollow(FOLLOW_rule__CPackage__Group_2__0_in_rule__CPackage__Group__2__Impl3617);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1669:1: rule__CPackage__Group__3 : rule__CPackage__Group__3__Impl rule__CPackage__Group__4 ;
    public final void rule__CPackage__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1673:1: ( rule__CPackage__Group__3__Impl rule__CPackage__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1674:2: rule__CPackage__Group__3__Impl rule__CPackage__Group__4
            {
            pushFollow(FOLLOW_rule__CPackage__Group__3__Impl_in_rule__CPackage__Group__33648);
            rule__CPackage__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__4_in_rule__CPackage__Group__33651);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1681:1: rule__CPackage__Group__3__Impl : ( '{' ) ;
    public final void rule__CPackage__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1685:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1686:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1686:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1687:1: '{'
            {
             before(grammarAccess.getCPackageAccess().getLeftCurlyBracketKeyword_3()); 
            match(input,46,FOLLOW_46_in_rule__CPackage__Group__3__Impl3679); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1700:1: rule__CPackage__Group__4 : rule__CPackage__Group__4__Impl rule__CPackage__Group__5 ;
    public final void rule__CPackage__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1704:1: ( rule__CPackage__Group__4__Impl rule__CPackage__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1705:2: rule__CPackage__Group__4__Impl rule__CPackage__Group__5
            {
            pushFollow(FOLLOW_rule__CPackage__Group__4__Impl_in_rule__CPackage__Group__43710);
            rule__CPackage__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__5_in_rule__CPackage__Group__43713);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1712:1: rule__CPackage__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__CPackage__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1716:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1717:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1717:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1718:1: RULE_END_LINE
            {
             before(grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__4__Impl3740); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1729:1: rule__CPackage__Group__5 : rule__CPackage__Group__5__Impl rule__CPackage__Group__6 ;
    public final void rule__CPackage__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1733:1: ( rule__CPackage__Group__5__Impl rule__CPackage__Group__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1734:2: rule__CPackage__Group__5__Impl rule__CPackage__Group__6
            {
            pushFollow(FOLLOW_rule__CPackage__Group__5__Impl_in_rule__CPackage__Group__53769);
            rule__CPackage__Group__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__6_in_rule__CPackage__Group__53772);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1741:1: rule__CPackage__Group__5__Impl : ( ( rule__CPackage__ElementsAssignment_5 )* ) ;
    public final void rule__CPackage__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1745:1: ( ( ( rule__CPackage__ElementsAssignment_5 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1746:1: ( ( rule__CPackage__ElementsAssignment_5 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1746:1: ( ( rule__CPackage__ElementsAssignment_5 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1747:1: ( rule__CPackage__ElementsAssignment_5 )*
            {
             before(grammarAccess.getCPackageAccess().getElementsAssignment_5()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1748:1: ( rule__CPackage__ElementsAssignment_5 )*
            loop23:
            do {
                int alt23=2;
                int LA23_0 = input.LA(1);

                if ( (LA23_0==RULE_ID||(LA23_0>=25 && LA23_0<=28)) ) {
                    alt23=1;
                }


                switch (alt23) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1748:2: rule__CPackage__ElementsAssignment_5
            	    {
            	    pushFollow(FOLLOW_rule__CPackage__ElementsAssignment_5_in_rule__CPackage__Group__5__Impl3799);
            	    rule__CPackage__ElementsAssignment_5();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop23;
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1758:1: rule__CPackage__Group__6 : rule__CPackage__Group__6__Impl rule__CPackage__Group__7 ;
    public final void rule__CPackage__Group__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1762:1: ( rule__CPackage__Group__6__Impl rule__CPackage__Group__7 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1763:2: rule__CPackage__Group__6__Impl rule__CPackage__Group__7
            {
            pushFollow(FOLLOW_rule__CPackage__Group__6__Impl_in_rule__CPackage__Group__63830);
            rule__CPackage__Group__6__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group__7_in_rule__CPackage__Group__63833);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1770:1: rule__CPackage__Group__6__Impl : ( '}' ) ;
    public final void rule__CPackage__Group__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1774:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1775:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1775:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1776:1: '}'
            {
             before(grammarAccess.getCPackageAccess().getRightCurlyBracketKeyword_6()); 
            match(input,47,FOLLOW_47_in_rule__CPackage__Group__6__Impl3861); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1789:1: rule__CPackage__Group__7 : rule__CPackage__Group__7__Impl ;
    public final void rule__CPackage__Group__7() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1793:1: ( rule__CPackage__Group__7__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1794:2: rule__CPackage__Group__7__Impl
            {
            pushFollow(FOLLOW_rule__CPackage__Group__7__Impl_in_rule__CPackage__Group__73892);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1800:1: rule__CPackage__Group__7__Impl : ( RULE_END_LINE ) ;
    public final void rule__CPackage__Group__7__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1804:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1805:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1805:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1806:1: RULE_END_LINE
            {
             before(grammarAccess.getCPackageAccess().getEND_LINETerminalRuleCall_7()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__7__Impl3919); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1833:1: rule__CPackage__Group_2__0 : rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1 ;
    public final void rule__CPackage__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1837:1: ( rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1838:2: rule__CPackage__Group_2__0__Impl rule__CPackage__Group_2__1
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__0__Impl_in_rule__CPackage__Group_2__03964);
            rule__CPackage__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group_2__1_in_rule__CPackage__Group_2__03967);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1845:1: rule__CPackage__Group_2__0__Impl : ( '<<' ) ;
    public final void rule__CPackage__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1849:1: ( ( '<<' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1850:1: ( '<<' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1850:1: ( '<<' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1851:1: '<<'
            {
             before(grammarAccess.getCPackageAccess().getLessThanSignLessThanSignKeyword_2_0()); 
            match(input,48,FOLLOW_48_in_rule__CPackage__Group_2__0__Impl3995); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1864:1: rule__CPackage__Group_2__1 : rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2 ;
    public final void rule__CPackage__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1868:1: ( rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1869:2: rule__CPackage__Group_2__1__Impl rule__CPackage__Group_2__2
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__1__Impl_in_rule__CPackage__Group_2__14026);
            rule__CPackage__Group_2__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__CPackage__Group_2__2_in_rule__CPackage__Group_2__14029);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1876:1: rule__CPackage__Group_2__1__Impl : ( ( rule__CPackage__StyleAssignment_2_1 ) ) ;
    public final void rule__CPackage__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1880:1: ( ( ( rule__CPackage__StyleAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1881:1: ( ( rule__CPackage__StyleAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1881:1: ( ( rule__CPackage__StyleAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1882:1: ( rule__CPackage__StyleAssignment_2_1 )
            {
             before(grammarAccess.getCPackageAccess().getStyleAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1883:1: ( rule__CPackage__StyleAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1883:2: rule__CPackage__StyleAssignment_2_1
            {
            pushFollow(FOLLOW_rule__CPackage__StyleAssignment_2_1_in_rule__CPackage__Group_2__1__Impl4056);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1893:1: rule__CPackage__Group_2__2 : rule__CPackage__Group_2__2__Impl ;
    public final void rule__CPackage__Group_2__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1897:1: ( rule__CPackage__Group_2__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1898:2: rule__CPackage__Group_2__2__Impl
            {
            pushFollow(FOLLOW_rule__CPackage__Group_2__2__Impl_in_rule__CPackage__Group_2__24086);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1904:1: rule__CPackage__Group_2__2__Impl : ( '>>' ) ;
    public final void rule__CPackage__Group_2__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1908:1: ( ( '>>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1909:1: ( '>>' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1909:1: ( '>>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1910:1: '>>'
            {
             before(grammarAccess.getCPackageAccess().getGreaterThanSignGreaterThanSignKeyword_2_2()); 
            match(input,49,FOLLOW_49_in_rule__CPackage__Group_2__2__Impl4114); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1929:1: rule__Relation__Group__0 : rule__Relation__Group__0__Impl rule__Relation__Group__1 ;
    public final void rule__Relation__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1933:1: ( rule__Relation__Group__0__Impl rule__Relation__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1934:2: rule__Relation__Group__0__Impl rule__Relation__Group__1
            {
            pushFollow(FOLLOW_rule__Relation__Group__0__Impl_in_rule__Relation__Group__04151);
            rule__Relation__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__1_in_rule__Relation__Group__04154);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1941:1: rule__Relation__Group__0__Impl : ( ( rule__Relation__LeftRefAssignment_0 ) ) ;
    public final void rule__Relation__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1945:1: ( ( ( rule__Relation__LeftRefAssignment_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1946:1: ( ( rule__Relation__LeftRefAssignment_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1946:1: ( ( rule__Relation__LeftRefAssignment_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1947:1: ( rule__Relation__LeftRefAssignment_0 )
            {
             before(grammarAccess.getRelationAccess().getLeftRefAssignment_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1948:1: ( rule__Relation__LeftRefAssignment_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1948:2: rule__Relation__LeftRefAssignment_0
            {
            pushFollow(FOLLOW_rule__Relation__LeftRefAssignment_0_in_rule__Relation__Group__0__Impl4181);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1958:1: rule__Relation__Group__1 : rule__Relation__Group__1__Impl rule__Relation__Group__2 ;
    public final void rule__Relation__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1962:1: ( rule__Relation__Group__1__Impl rule__Relation__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1963:2: rule__Relation__Group__1__Impl rule__Relation__Group__2
            {
            pushFollow(FOLLOW_rule__Relation__Group__1__Impl_in_rule__Relation__Group__14211);
            rule__Relation__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__2_in_rule__Relation__Group__14214);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1970:1: rule__Relation__Group__1__Impl : ( ( rule__Relation__RelTypeAssignment_1 ) ) ;
    public final void rule__Relation__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1974:1: ( ( ( rule__Relation__RelTypeAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1975:1: ( ( rule__Relation__RelTypeAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1975:1: ( ( rule__Relation__RelTypeAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1976:1: ( rule__Relation__RelTypeAssignment_1 )
            {
             before(grammarAccess.getRelationAccess().getRelTypeAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1977:1: ( rule__Relation__RelTypeAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1977:2: rule__Relation__RelTypeAssignment_1
            {
            pushFollow(FOLLOW_rule__Relation__RelTypeAssignment_1_in_rule__Relation__Group__1__Impl4241);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1987:1: rule__Relation__Group__2 : rule__Relation__Group__2__Impl rule__Relation__Group__3 ;
    public final void rule__Relation__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1991:1: ( rule__Relation__Group__2__Impl rule__Relation__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1992:2: rule__Relation__Group__2__Impl rule__Relation__Group__3
            {
            pushFollow(FOLLOW_rule__Relation__Group__2__Impl_in_rule__Relation__Group__24271);
            rule__Relation__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__3_in_rule__Relation__Group__24274);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:1999:1: rule__Relation__Group__2__Impl : ( ( rule__Relation__RightRefAssignment_2 ) ) ;
    public final void rule__Relation__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2003:1: ( ( ( rule__Relation__RightRefAssignment_2 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2004:1: ( ( rule__Relation__RightRefAssignment_2 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2004:1: ( ( rule__Relation__RightRefAssignment_2 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2005:1: ( rule__Relation__RightRefAssignment_2 )
            {
             before(grammarAccess.getRelationAccess().getRightRefAssignment_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2006:1: ( rule__Relation__RightRefAssignment_2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2006:2: rule__Relation__RightRefAssignment_2
            {
            pushFollow(FOLLOW_rule__Relation__RightRefAssignment_2_in_rule__Relation__Group__2__Impl4301);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2016:1: rule__Relation__Group__3 : rule__Relation__Group__3__Impl rule__Relation__Group__4 ;
    public final void rule__Relation__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2020:1: ( rule__Relation__Group__3__Impl rule__Relation__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2021:2: rule__Relation__Group__3__Impl rule__Relation__Group__4
            {
            pushFollow(FOLLOW_rule__Relation__Group__3__Impl_in_rule__Relation__Group__34331);
            rule__Relation__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group__4_in_rule__Relation__Group__34334);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2028:1: rule__Relation__Group__3__Impl : ( ( rule__Relation__Group_3__0 )? ) ;
    public final void rule__Relation__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2032:1: ( ( ( rule__Relation__Group_3__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2033:1: ( ( rule__Relation__Group_3__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2033:1: ( ( rule__Relation__Group_3__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2034:1: ( rule__Relation__Group_3__0 )?
            {
             before(grammarAccess.getRelationAccess().getGroup_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2035:1: ( rule__Relation__Group_3__0 )?
            int alt24=2;
            int LA24_0 = input.LA(1);

            if ( (LA24_0==31) ) {
                alt24=1;
            }
            switch (alt24) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2035:2: rule__Relation__Group_3__0
                    {
                    pushFollow(FOLLOW_rule__Relation__Group_3__0_in_rule__Relation__Group__3__Impl4361);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2045:1: rule__Relation__Group__4 : rule__Relation__Group__4__Impl ;
    public final void rule__Relation__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2049:1: ( rule__Relation__Group__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2050:2: rule__Relation__Group__4__Impl
            {
            pushFollow(FOLLOW_rule__Relation__Group__4__Impl_in_rule__Relation__Group__44392);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2056:1: rule__Relation__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Relation__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2060:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2061:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2061:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2062:1: RULE_END_LINE
            {
             before(grammarAccess.getRelationAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Relation__Group__4__Impl4419); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2083:1: rule__Relation__Group_3__0 : rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1 ;
    public final void rule__Relation__Group_3__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2087:1: ( rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2088:2: rule__Relation__Group_3__0__Impl rule__Relation__Group_3__1
            {
            pushFollow(FOLLOW_rule__Relation__Group_3__0__Impl_in_rule__Relation__Group_3__04458);
            rule__Relation__Group_3__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Relation__Group_3__1_in_rule__Relation__Group_3__04461);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2095:1: rule__Relation__Group_3__0__Impl : ( ':' ) ;
    public final void rule__Relation__Group_3__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2099:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2100:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2100:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2101:1: ':'
            {
             before(grammarAccess.getRelationAccess().getColonKeyword_3_0()); 
            match(input,31,FOLLOW_31_in_rule__Relation__Group_3__0__Impl4489); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2114:1: rule__Relation__Group_3__1 : rule__Relation__Group_3__1__Impl ;
    public final void rule__Relation__Group_3__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2118:1: ( rule__Relation__Group_3__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2119:2: rule__Relation__Group_3__1__Impl
            {
            pushFollow(FOLLOW_rule__Relation__Group_3__1__Impl_in_rule__Relation__Group_3__14520);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2125:1: rule__Relation__Group_3__1__Impl : ( ( rule__Relation__NameAssignment_3_1 ) ) ;
    public final void rule__Relation__Group_3__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2129:1: ( ( ( rule__Relation__NameAssignment_3_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2130:1: ( ( rule__Relation__NameAssignment_3_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2130:1: ( ( rule__Relation__NameAssignment_3_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2131:1: ( rule__Relation__NameAssignment_3_1 )
            {
             before(grammarAccess.getRelationAccess().getNameAssignment_3_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2132:1: ( rule__Relation__NameAssignment_3_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2132:2: rule__Relation__NameAssignment_3_1
            {
            pushFollow(FOLLOW_rule__Relation__NameAssignment_3_1_in_rule__Relation__Group_3__1__Impl4547);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2146:1: rule__RelationParse__Group_0__0 : rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1 ;
    public final void rule__RelationParse__Group_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2150:1: ( rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2151:2: rule__RelationParse__Group_0__0__Impl rule__RelationParse__Group_0__1
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__0__Impl_in_rule__RelationParse__Group_0__04581);
            rule__RelationParse__Group_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__1_in_rule__RelationParse__Group_0__04584);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2158:1: rule__RelationParse__Group_0__0__Impl : ( ( rule__RelationParse__CompAssignment_0_0 ) ) ;
    public final void rule__RelationParse__Group_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2162:1: ( ( ( rule__RelationParse__CompAssignment_0_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2163:1: ( ( rule__RelationParse__CompAssignment_0_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2163:1: ( ( rule__RelationParse__CompAssignment_0_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2164:1: ( rule__RelationParse__CompAssignment_0_0 )
            {
             before(grammarAccess.getRelationParseAccess().getCompAssignment_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2165:1: ( rule__RelationParse__CompAssignment_0_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2165:2: rule__RelationParse__CompAssignment_0_0
            {
            pushFollow(FOLLOW_rule__RelationParse__CompAssignment_0_0_in_rule__RelationParse__Group_0__0__Impl4611);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2175:1: rule__RelationParse__Group_0__1 : rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2 ;
    public final void rule__RelationParse__Group_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2179:1: ( rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2180:2: rule__RelationParse__Group_0__1__Impl rule__RelationParse__Group_0__2
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__1__Impl_in_rule__RelationParse__Group_0__14641);
            rule__RelationParse__Group_0__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__2_in_rule__RelationParse__Group_0__14644);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2187:1: rule__RelationParse__Group_0__1__Impl : ( ( rule__RelationParse__TypeAssignment_0_1 ) ) ;
    public final void rule__RelationParse__Group_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2191:1: ( ( ( rule__RelationParse__TypeAssignment_0_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2192:1: ( ( rule__RelationParse__TypeAssignment_0_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2192:1: ( ( rule__RelationParse__TypeAssignment_0_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2193:1: ( rule__RelationParse__TypeAssignment_0_1 )
            {
             before(grammarAccess.getRelationParseAccess().getTypeAssignment_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2194:1: ( rule__RelationParse__TypeAssignment_0_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2194:2: rule__RelationParse__TypeAssignment_0_1
            {
            pushFollow(FOLLOW_rule__RelationParse__TypeAssignment_0_1_in_rule__RelationParse__Group_0__1__Impl4671);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2204:1: rule__RelationParse__Group_0__2 : rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3 ;
    public final void rule__RelationParse__Group_0__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2208:1: ( rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2209:2: rule__RelationParse__Group_0__2__Impl rule__RelationParse__Group_0__3
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__2__Impl_in_rule__RelationParse__Group_0__24701);
            rule__RelationParse__Group_0__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__3_in_rule__RelationParse__Group_0__24704);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2216:1: rule__RelationParse__Group_0__2__Impl : ( ( rule__RelationParse__DirectAssignment_0_2 )? ) ;
    public final void rule__RelationParse__Group_0__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2220:1: ( ( ( rule__RelationParse__DirectAssignment_0_2 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2221:1: ( ( rule__RelationParse__DirectAssignment_0_2 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2221:1: ( ( rule__RelationParse__DirectAssignment_0_2 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2222:1: ( rule__RelationParse__DirectAssignment_0_2 )?
            {
             before(grammarAccess.getRelationParseAccess().getDirectAssignment_0_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2223:1: ( rule__RelationParse__DirectAssignment_0_2 )?
            int alt25=2;
            int LA25_0 = input.LA(1);

            if ( (LA25_0==54) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2223:2: rule__RelationParse__DirectAssignment_0_2
                    {
                    pushFollow(FOLLOW_rule__RelationParse__DirectAssignment_0_2_in_rule__RelationParse__Group_0__2__Impl4731);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2233:1: rule__RelationParse__Group_0__3 : rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4 ;
    public final void rule__RelationParse__Group_0__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2237:1: ( rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2238:2: rule__RelationParse__Group_0__3__Impl rule__RelationParse__Group_0__4
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__3__Impl_in_rule__RelationParse__Group_0__34762);
            rule__RelationParse__Group_0__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_0__4_in_rule__RelationParse__Group_0__34765);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2245:1: rule__RelationParse__Group_0__3__Impl : ( RULE_WS ) ;
    public final void rule__RelationParse__Group_0__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2249:1: ( ( RULE_WS ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2250:1: ( RULE_WS )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2250:1: ( RULE_WS )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2251:1: RULE_WS
            {
             before(grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_0_3()); 
            match(input,RULE_WS,FOLLOW_RULE_WS_in_rule__RelationParse__Group_0__3__Impl4792); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2262:1: rule__RelationParse__Group_0__4 : rule__RelationParse__Group_0__4__Impl ;
    public final void rule__RelationParse__Group_0__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2266:1: ( rule__RelationParse__Group_0__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2267:2: rule__RelationParse__Group_0__4__Impl
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_0__4__Impl_in_rule__RelationParse__Group_0__44821);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2273:1: rule__RelationParse__Group_0__4__Impl : ( ( rule__RelationParse__MultiAssignment_0_4 )? ) ;
    public final void rule__RelationParse__Group_0__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2277:1: ( ( ( rule__RelationParse__MultiAssignment_0_4 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2278:1: ( ( rule__RelationParse__MultiAssignment_0_4 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2278:1: ( ( rule__RelationParse__MultiAssignment_0_4 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2279:1: ( rule__RelationParse__MultiAssignment_0_4 )?
            {
             before(grammarAccess.getRelationParseAccess().getMultiAssignment_0_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2280:1: ( rule__RelationParse__MultiAssignment_0_4 )?
            int alt26=2;
            int LA26_0 = input.LA(1);

            if ( (LA26_0==RULE_MULTI) ) {
                alt26=1;
            }
            switch (alt26) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2280:2: rule__RelationParse__MultiAssignment_0_4
                    {
                    pushFollow(FOLLOW_rule__RelationParse__MultiAssignment_0_4_in_rule__RelationParse__Group_0__4__Impl4848);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2300:1: rule__RelationParse__Group_1__0 : rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1 ;
    public final void rule__RelationParse__Group_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2304:1: ( rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2305:2: rule__RelationParse__Group_1__0__Impl rule__RelationParse__Group_1__1
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__0__Impl_in_rule__RelationParse__Group_1__04889);
            rule__RelationParse__Group_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__1_in_rule__RelationParse__Group_1__04892);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2312:1: rule__RelationParse__Group_1__0__Impl : ( ( rule__RelationParse__TypeAssignment_1_0 ) ) ;
    public final void rule__RelationParse__Group_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2316:1: ( ( ( rule__RelationParse__TypeAssignment_1_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2317:1: ( ( rule__RelationParse__TypeAssignment_1_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2317:1: ( ( rule__RelationParse__TypeAssignment_1_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2318:1: ( rule__RelationParse__TypeAssignment_1_0 )
            {
             before(grammarAccess.getRelationParseAccess().getTypeAssignment_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2319:1: ( rule__RelationParse__TypeAssignment_1_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2319:2: rule__RelationParse__TypeAssignment_1_0
            {
            pushFollow(FOLLOW_rule__RelationParse__TypeAssignment_1_0_in_rule__RelationParse__Group_1__0__Impl4919);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2329:1: rule__RelationParse__Group_1__1 : rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2 ;
    public final void rule__RelationParse__Group_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2333:1: ( rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2334:2: rule__RelationParse__Group_1__1__Impl rule__RelationParse__Group_1__2
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__1__Impl_in_rule__RelationParse__Group_1__14949);
            rule__RelationParse__Group_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__2_in_rule__RelationParse__Group_1__14952);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2341:1: rule__RelationParse__Group_1__1__Impl : ( ( rule__RelationParse__Alternatives_1_1 )? ) ;
    public final void rule__RelationParse__Group_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2345:1: ( ( ( rule__RelationParse__Alternatives_1_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2346:1: ( ( rule__RelationParse__Alternatives_1_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2346:1: ( ( rule__RelationParse__Alternatives_1_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2347:1: ( rule__RelationParse__Alternatives_1_1 )?
            {
             before(grammarAccess.getRelationParseAccess().getAlternatives_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2348:1: ( rule__RelationParse__Alternatives_1_1 )?
            int alt27=2;
            int LA27_0 = input.LA(1);

            if ( ((LA27_0>=54 && LA27_0<=55)) ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2348:2: rule__RelationParse__Alternatives_1_1
                    {
                    pushFollow(FOLLOW_rule__RelationParse__Alternatives_1_1_in_rule__RelationParse__Group_1__1__Impl4979);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2358:1: rule__RelationParse__Group_1__2 : rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3 ;
    public final void rule__RelationParse__Group_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2362:1: ( rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2363:2: rule__RelationParse__Group_1__2__Impl rule__RelationParse__Group_1__3
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__2__Impl_in_rule__RelationParse__Group_1__25010);
            rule__RelationParse__Group_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__RelationParse__Group_1__3_in_rule__RelationParse__Group_1__25013);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2370:1: rule__RelationParse__Group_1__2__Impl : ( RULE_WS ) ;
    public final void rule__RelationParse__Group_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2374:1: ( ( RULE_WS ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2375:1: ( RULE_WS )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2375:1: ( RULE_WS )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2376:1: RULE_WS
            {
             before(grammarAccess.getRelationParseAccess().getWSTerminalRuleCall_1_2()); 
            match(input,RULE_WS,FOLLOW_RULE_WS_in_rule__RelationParse__Group_1__2__Impl5040); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2387:1: rule__RelationParse__Group_1__3 : rule__RelationParse__Group_1__3__Impl ;
    public final void rule__RelationParse__Group_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2391:1: ( rule__RelationParse__Group_1__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2392:2: rule__RelationParse__Group_1__3__Impl
            {
            pushFollow(FOLLOW_rule__RelationParse__Group_1__3__Impl_in_rule__RelationParse__Group_1__35069);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2398:1: rule__RelationParse__Group_1__3__Impl : ( ( rule__RelationParse__MultiAssignment_1_3 )? ) ;
    public final void rule__RelationParse__Group_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2402:1: ( ( ( rule__RelationParse__MultiAssignment_1_3 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2403:1: ( ( rule__RelationParse__MultiAssignment_1_3 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2403:1: ( ( rule__RelationParse__MultiAssignment_1_3 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2404:1: ( rule__RelationParse__MultiAssignment_1_3 )?
            {
             before(grammarAccess.getRelationParseAccess().getMultiAssignment_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2405:1: ( rule__RelationParse__MultiAssignment_1_3 )?
            int alt28=2;
            int LA28_0 = input.LA(1);

            if ( (LA28_0==RULE_MULTI) ) {
                alt28=1;
            }
            switch (alt28) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2405:2: rule__RelationParse__MultiAssignment_1_3
                    {
                    pushFollow(FOLLOW_rule__RelationParse__MultiAssignment_1_3_in_rule__RelationParse__Group_1__3__Impl5096);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2423:1: rule__StrongRel__Group__0 : rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1 ;
    public final void rule__StrongRel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2427:1: ( rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2428:2: rule__StrongRel__Group__0__Impl rule__StrongRel__Group__1
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__0__Impl_in_rule__StrongRel__Group__05135);
            rule__StrongRel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__StrongRel__Group__1_in_rule__StrongRel__Group__05138);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2435:1: rule__StrongRel__Group__0__Impl : ( '-' ) ;
    public final void rule__StrongRel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2439:1: ( ( '-' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2440:1: ( '-' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2440:1: ( '-' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2441:1: '-'
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_0()); 
            match(input,50,FOLLOW_50_in_rule__StrongRel__Group__0__Impl5166); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2454:1: rule__StrongRel__Group__1 : rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2 ;
    public final void rule__StrongRel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2458:1: ( rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2459:2: rule__StrongRel__Group__1__Impl rule__StrongRel__Group__2
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__1__Impl_in_rule__StrongRel__Group__15197);
            rule__StrongRel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__StrongRel__Group__2_in_rule__StrongRel__Group__15200);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2466:1: rule__StrongRel__Group__1__Impl : ( ( rule__StrongRel__Alternatives_1 )? ) ;
    public final void rule__StrongRel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2470:1: ( ( ( rule__StrongRel__Alternatives_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2471:1: ( ( rule__StrongRel__Alternatives_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2471:1: ( ( rule__StrongRel__Alternatives_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2472:1: ( rule__StrongRel__Alternatives_1 )?
            {
             before(grammarAccess.getStrongRelAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2473:1: ( rule__StrongRel__Alternatives_1 )?
            int alt29=2;
            int LA29_0 = input.LA(1);

            if ( ((LA29_0>=12 && LA29_0<=15)) ) {
                alt29=1;
            }
            switch (alt29) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2473:2: rule__StrongRel__Alternatives_1
                    {
                    pushFollow(FOLLOW_rule__StrongRel__Alternatives_1_in_rule__StrongRel__Group__1__Impl5227);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2483:1: rule__StrongRel__Group__2 : rule__StrongRel__Group__2__Impl ;
    public final void rule__StrongRel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2487:1: ( rule__StrongRel__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2488:2: rule__StrongRel__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__StrongRel__Group__2__Impl_in_rule__StrongRel__Group__25258);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2494:1: rule__StrongRel__Group__2__Impl : ( ( ( '-' ) ) ( ( '-' )* ) ) ;
    public final void rule__StrongRel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2498:1: ( ( ( ( '-' ) ) ( ( '-' )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2499:1: ( ( ( '-' ) ) ( ( '-' )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2499:1: ( ( ( '-' ) ) ( ( '-' )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2500:1: ( ( '-' ) ) ( ( '-' )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2500:1: ( ( '-' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2501:1: ( '-' )
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2502:1: ( '-' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2503:2: '-'
            {
            match(input,50,FOLLOW_50_in_rule__StrongRel__Group__2__Impl5289); 

            }

             after(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2507:1: ( ( '-' )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2508:1: ( '-' )*
            {
             before(grammarAccess.getStrongRelAccess().getHyphenMinusKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2509:1: ( '-' )*
            loop30:
            do {
                int alt30=2;
                int LA30_0 = input.LA(1);

                if ( (LA30_0==50) ) {
                    alt30=1;
                }


                switch (alt30) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2510:2: '-'
            	    {
            	    match(input,50,FOLLOW_50_in_rule__StrongRel__Group__2__Impl5305); 

            	    }
            	    break;

            	default :
            	    break loop30;
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2528:1: rule__WeakRel__Group__0 : rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1 ;
    public final void rule__WeakRel__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2532:1: ( rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2533:2: rule__WeakRel__Group__0__Impl rule__WeakRel__Group__1
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__0__Impl_in_rule__WeakRel__Group__05346);
            rule__WeakRel__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__WeakRel__Group__1_in_rule__WeakRel__Group__05349);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2540:1: rule__WeakRel__Group__0__Impl : ( '.' ) ;
    public final void rule__WeakRel__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2544:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2545:1: ( '.' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2545:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2546:1: '.'
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_0()); 
            match(input,51,FOLLOW_51_in_rule__WeakRel__Group__0__Impl5377); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2559:1: rule__WeakRel__Group__1 : rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2 ;
    public final void rule__WeakRel__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2563:1: ( rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2564:2: rule__WeakRel__Group__1__Impl rule__WeakRel__Group__2
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__1__Impl_in_rule__WeakRel__Group__15408);
            rule__WeakRel__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__WeakRel__Group__2_in_rule__WeakRel__Group__15411);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2571:1: rule__WeakRel__Group__1__Impl : ( ( rule__WeakRel__Alternatives_1 )? ) ;
    public final void rule__WeakRel__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2575:1: ( ( ( rule__WeakRel__Alternatives_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2576:1: ( ( rule__WeakRel__Alternatives_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2576:1: ( ( rule__WeakRel__Alternatives_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2577:1: ( rule__WeakRel__Alternatives_1 )?
            {
             before(grammarAccess.getWeakRelAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2578:1: ( rule__WeakRel__Alternatives_1 )?
            int alt31=2;
            int LA31_0 = input.LA(1);

            if ( ((LA31_0>=12 && LA31_0<=15)) ) {
                alt31=1;
            }
            switch (alt31) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2578:2: rule__WeakRel__Alternatives_1
                    {
                    pushFollow(FOLLOW_rule__WeakRel__Alternatives_1_in_rule__WeakRel__Group__1__Impl5438);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2588:1: rule__WeakRel__Group__2 : rule__WeakRel__Group__2__Impl ;
    public final void rule__WeakRel__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2592:1: ( rule__WeakRel__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2593:2: rule__WeakRel__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__WeakRel__Group__2__Impl_in_rule__WeakRel__Group__25469);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2599:1: rule__WeakRel__Group__2__Impl : ( ( ( '.' ) ) ( ( '.' )* ) ) ;
    public final void rule__WeakRel__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2603:1: ( ( ( ( '.' ) ) ( ( '.' )* ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2604:1: ( ( ( '.' ) ) ( ( '.' )* ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2604:1: ( ( ( '.' ) ) ( ( '.' )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2605:1: ( ( '.' ) ) ( ( '.' )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2605:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2606:1: ( '.' )
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2607:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2608:2: '.'
            {
            match(input,51,FOLLOW_51_in_rule__WeakRel__Group__2__Impl5500); 

            }

             after(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 

            }

            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2612:1: ( ( '.' )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2613:1: ( '.' )*
            {
             before(grammarAccess.getWeakRelAccess().getFullStopKeyword_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2614:1: ( '.' )*
            loop32:
            do {
                int alt32=2;
                int LA32_0 = input.LA(1);

                if ( (LA32_0==51) ) {
                    alt32=1;
                }


                switch (alt32) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2615:2: '.'
            	    {
            	    match(input,51,FOLLOW_51_in_rule__WeakRel__Group__2__Impl5516); 

            	    }
            	    break;

            	default :
            	    break loop32;
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2633:1: rule__Enumer__Group__0 : rule__Enumer__Group__0__Impl rule__Enumer__Group__1 ;
    public final void rule__Enumer__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2637:1: ( rule__Enumer__Group__0__Impl rule__Enumer__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2638:2: rule__Enumer__Group__0__Impl rule__Enumer__Group__1
            {
            pushFollow(FOLLOW_rule__Enumer__Group__0__Impl_in_rule__Enumer__Group__05557);
            rule__Enumer__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__1_in_rule__Enumer__Group__05560);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2645:1: rule__Enumer__Group__0__Impl : ( 'enum' ) ;
    public final void rule__Enumer__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2649:1: ( ( 'enum' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2650:1: ( 'enum' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2650:1: ( 'enum' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2651:1: 'enum'
            {
             before(grammarAccess.getEnumerAccess().getEnumKeyword_0()); 
            match(input,27,FOLLOW_27_in_rule__Enumer__Group__0__Impl5588); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2664:1: rule__Enumer__Group__1 : rule__Enumer__Group__1__Impl rule__Enumer__Group__2 ;
    public final void rule__Enumer__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2668:1: ( rule__Enumer__Group__1__Impl rule__Enumer__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2669:2: rule__Enumer__Group__1__Impl rule__Enumer__Group__2
            {
            pushFollow(FOLLOW_rule__Enumer__Group__1__Impl_in_rule__Enumer__Group__15619);
            rule__Enumer__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__2_in_rule__Enumer__Group__15622);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2676:1: rule__Enumer__Group__1__Impl : ( ( rule__Enumer__NameAssignment_1 ) ) ;
    public final void rule__Enumer__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2680:1: ( ( ( rule__Enumer__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2681:1: ( ( rule__Enumer__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2681:1: ( ( rule__Enumer__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2682:1: ( rule__Enumer__NameAssignment_1 )
            {
             before(grammarAccess.getEnumerAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2683:1: ( rule__Enumer__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2683:2: rule__Enumer__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__Enumer__NameAssignment_1_in_rule__Enumer__Group__1__Impl5649);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2693:1: rule__Enumer__Group__2 : rule__Enumer__Group__2__Impl rule__Enumer__Group__3 ;
    public final void rule__Enumer__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2697:1: ( rule__Enumer__Group__2__Impl rule__Enumer__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2698:2: rule__Enumer__Group__2__Impl rule__Enumer__Group__3
            {
            pushFollow(FOLLOW_rule__Enumer__Group__2__Impl_in_rule__Enumer__Group__25679);
            rule__Enumer__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__3_in_rule__Enumer__Group__25682);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2705:1: rule__Enumer__Group__2__Impl : ( '{' ) ;
    public final void rule__Enumer__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2709:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2710:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2710:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2711:1: '{'
            {
             before(grammarAccess.getEnumerAccess().getLeftCurlyBracketKeyword_2()); 
            match(input,46,FOLLOW_46_in_rule__Enumer__Group__2__Impl5710); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2724:1: rule__Enumer__Group__3 : rule__Enumer__Group__3__Impl rule__Enumer__Group__4 ;
    public final void rule__Enumer__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2728:1: ( rule__Enumer__Group__3__Impl rule__Enumer__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2729:2: rule__Enumer__Group__3__Impl rule__Enumer__Group__4
            {
            pushFollow(FOLLOW_rule__Enumer__Group__3__Impl_in_rule__Enumer__Group__35741);
            rule__Enumer__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__4_in_rule__Enumer__Group__35744);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2736:1: rule__Enumer__Group__3__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Enumer__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2740:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2741:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2741:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2742:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2743:1: ( RULE_END_LINE )?
            int alt33=2;
            int LA33_0 = input.LA(1);

            if ( (LA33_0==RULE_END_LINE) ) {
                alt33=1;
            }
            switch (alt33) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2743:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__3__Impl5772); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2753:1: rule__Enumer__Group__4 : rule__Enumer__Group__4__Impl rule__Enumer__Group__5 ;
    public final void rule__Enumer__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2757:1: ( rule__Enumer__Group__4__Impl rule__Enumer__Group__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2758:2: rule__Enumer__Group__4__Impl rule__Enumer__Group__5
            {
            pushFollow(FOLLOW_rule__Enumer__Group__4__Impl_in_rule__Enumer__Group__45803);
            rule__Enumer__Group__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__5_in_rule__Enumer__Group__45806);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2765:1: rule__Enumer__Group__4__Impl : ( ( rule__Enumer__Group_4__0 )* ) ;
    public final void rule__Enumer__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2769:1: ( ( ( rule__Enumer__Group_4__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2770:1: ( ( rule__Enumer__Group_4__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2770:1: ( ( rule__Enumer__Group_4__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2771:1: ( rule__Enumer__Group_4__0 )*
            {
             before(grammarAccess.getEnumerAccess().getGroup_4()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2772:1: ( rule__Enumer__Group_4__0 )*
            loop34:
            do {
                int alt34=2;
                int LA34_0 = input.LA(1);

                if ( (LA34_0==RULE_ID) ) {
                    alt34=1;
                }


                switch (alt34) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2772:2: rule__Enumer__Group_4__0
            	    {
            	    pushFollow(FOLLOW_rule__Enumer__Group_4__0_in_rule__Enumer__Group__4__Impl5833);
            	    rule__Enumer__Group_4__0();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop34;
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2782:1: rule__Enumer__Group__5 : rule__Enumer__Group__5__Impl rule__Enumer__Group__6 ;
    public final void rule__Enumer__Group__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2786:1: ( rule__Enumer__Group__5__Impl rule__Enumer__Group__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2787:2: rule__Enumer__Group__5__Impl rule__Enumer__Group__6
            {
            pushFollow(FOLLOW_rule__Enumer__Group__5__Impl_in_rule__Enumer__Group__55864);
            rule__Enumer__Group__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group__6_in_rule__Enumer__Group__55867);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2794:1: rule__Enumer__Group__5__Impl : ( '}' ) ;
    public final void rule__Enumer__Group__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2798:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2799:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2799:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2800:1: '}'
            {
             before(grammarAccess.getEnumerAccess().getRightCurlyBracketKeyword_5()); 
            match(input,47,FOLLOW_47_in_rule__Enumer__Group__5__Impl5895); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2813:1: rule__Enumer__Group__6 : rule__Enumer__Group__6__Impl ;
    public final void rule__Enumer__Group__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2817:1: ( rule__Enumer__Group__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2818:2: rule__Enumer__Group__6__Impl
            {
            pushFollow(FOLLOW_rule__Enumer__Group__6__Impl_in_rule__Enumer__Group__65926);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2824:1: rule__Enumer__Group__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Enumer__Group__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2828:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2829:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2829:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2830:1: RULE_END_LINE
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__6__Impl5953); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2855:1: rule__Enumer__Group_4__0 : rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1 ;
    public final void rule__Enumer__Group_4__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2859:1: ( rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2860:2: rule__Enumer__Group_4__0__Impl rule__Enumer__Group_4__1
            {
            pushFollow(FOLLOW_rule__Enumer__Group_4__0__Impl_in_rule__Enumer__Group_4__05996);
            rule__Enumer__Group_4__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Enumer__Group_4__1_in_rule__Enumer__Group_4__05999);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2867:1: rule__Enumer__Group_4__0__Impl : ( ( rule__Enumer__TypesAssignment_4_0 ) ) ;
    public final void rule__Enumer__Group_4__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2871:1: ( ( ( rule__Enumer__TypesAssignment_4_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2872:1: ( ( rule__Enumer__TypesAssignment_4_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2872:1: ( ( rule__Enumer__TypesAssignment_4_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2873:1: ( rule__Enumer__TypesAssignment_4_0 )
            {
             before(grammarAccess.getEnumerAccess().getTypesAssignment_4_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2874:1: ( rule__Enumer__TypesAssignment_4_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2874:2: rule__Enumer__TypesAssignment_4_0
            {
            pushFollow(FOLLOW_rule__Enumer__TypesAssignment_4_0_in_rule__Enumer__Group_4__0__Impl6026);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2884:1: rule__Enumer__Group_4__1 : rule__Enumer__Group_4__1__Impl ;
    public final void rule__Enumer__Group_4__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2888:1: ( rule__Enumer__Group_4__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2889:2: rule__Enumer__Group_4__1__Impl
            {
            pushFollow(FOLLOW_rule__Enumer__Group_4__1__Impl_in_rule__Enumer__Group_4__16056);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2895:1: rule__Enumer__Group_4__1__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Enumer__Group_4__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2899:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2900:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2900:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2901:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getEnumerAccess().getEND_LINETerminalRuleCall_4_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2902:1: ( RULE_END_LINE )?
            int alt35=2;
            int LA35_0 = input.LA(1);

            if ( (LA35_0==RULE_END_LINE) ) {
                alt35=1;
            }
            switch (alt35) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2902:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Enumer__Group_4__1__Impl6084); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2916:1: rule__Clazz__Group__0 : rule__Clazz__Group__0__Impl rule__Clazz__Group__1 ;
    public final void rule__Clazz__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2920:1: ( rule__Clazz__Group__0__Impl rule__Clazz__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2921:2: rule__Clazz__Group__0__Impl rule__Clazz__Group__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group__0__Impl_in_rule__Clazz__Group__06119);
            rule__Clazz__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__1_in_rule__Clazz__Group__06122);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2928:1: rule__Clazz__Group__0__Impl : ( 'class' ) ;
    public final void rule__Clazz__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2932:1: ( ( 'class' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2933:1: ( 'class' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2933:1: ( 'class' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2934:1: 'class'
            {
             before(grammarAccess.getClazzAccess().getClassKeyword_0()); 
            match(input,26,FOLLOW_26_in_rule__Clazz__Group__0__Impl6150); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2947:1: rule__Clazz__Group__1 : rule__Clazz__Group__1__Impl rule__Clazz__Group__2 ;
    public final void rule__Clazz__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2951:1: ( rule__Clazz__Group__1__Impl rule__Clazz__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2952:2: rule__Clazz__Group__1__Impl rule__Clazz__Group__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group__1__Impl_in_rule__Clazz__Group__16181);
            rule__Clazz__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__2_in_rule__Clazz__Group__16184);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2959:1: rule__Clazz__Group__1__Impl : ( ( rule__Clazz__NameAssignment_1 ) ) ;
    public final void rule__Clazz__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2963:1: ( ( ( rule__Clazz__NameAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2964:1: ( ( rule__Clazz__NameAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2964:1: ( ( rule__Clazz__NameAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2965:1: ( rule__Clazz__NameAssignment_1 )
            {
             before(grammarAccess.getClazzAccess().getNameAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2966:1: ( rule__Clazz__NameAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2966:2: rule__Clazz__NameAssignment_1
            {
            pushFollow(FOLLOW_rule__Clazz__NameAssignment_1_in_rule__Clazz__Group__1__Impl6211);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2976:1: rule__Clazz__Group__2 : rule__Clazz__Group__2__Impl rule__Clazz__Group__3 ;
    public final void rule__Clazz__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2980:1: ( rule__Clazz__Group__2__Impl rule__Clazz__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2981:2: rule__Clazz__Group__2__Impl rule__Clazz__Group__3
            {
            pushFollow(FOLLOW_rule__Clazz__Group__2__Impl_in_rule__Clazz__Group__26241);
            rule__Clazz__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__3_in_rule__Clazz__Group__26244);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2988:1: rule__Clazz__Group__2__Impl : ( ( rule__Clazz__Group_2__0 )? ) ;
    public final void rule__Clazz__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2992:1: ( ( ( rule__Clazz__Group_2__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2993:1: ( ( rule__Clazz__Group_2__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2993:1: ( ( rule__Clazz__Group_2__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2994:1: ( rule__Clazz__Group_2__0 )?
            {
             before(grammarAccess.getClazzAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2995:1: ( rule__Clazz__Group_2__0 )?
            int alt36=2;
            int LA36_0 = input.LA(1);

            if ( (LA36_0==48) ) {
                alt36=1;
            }
            switch (alt36) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:2995:2: rule__Clazz__Group_2__0
                    {
                    pushFollow(FOLLOW_rule__Clazz__Group_2__0_in_rule__Clazz__Group__2__Impl6271);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3005:1: rule__Clazz__Group__3 : rule__Clazz__Group__3__Impl rule__Clazz__Group__4 ;
    public final void rule__Clazz__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3009:1: ( rule__Clazz__Group__3__Impl rule__Clazz__Group__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3010:2: rule__Clazz__Group__3__Impl rule__Clazz__Group__4
            {
            pushFollow(FOLLOW_rule__Clazz__Group__3__Impl_in_rule__Clazz__Group__36302);
            rule__Clazz__Group__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group__4_in_rule__Clazz__Group__36305);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3017:1: rule__Clazz__Group__3__Impl : ( ( rule__Clazz__Group_3__0 )? ) ;
    public final void rule__Clazz__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3021:1: ( ( ( rule__Clazz__Group_3__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3022:1: ( ( rule__Clazz__Group_3__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3022:1: ( ( rule__Clazz__Group_3__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3023:1: ( rule__Clazz__Group_3__0 )?
            {
             before(grammarAccess.getClazzAccess().getGroup_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3024:1: ( rule__Clazz__Group_3__0 )?
            int alt37=2;
            int LA37_0 = input.LA(1);

            if ( (LA37_0==46) ) {
                alt37=1;
            }
            switch (alt37) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3024:2: rule__Clazz__Group_3__0
                    {
                    pushFollow(FOLLOW_rule__Clazz__Group_3__0_in_rule__Clazz__Group__3__Impl6332);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3034:1: rule__Clazz__Group__4 : rule__Clazz__Group__4__Impl ;
    public final void rule__Clazz__Group__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3038:1: ( rule__Clazz__Group__4__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3039:2: rule__Clazz__Group__4__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group__4__Impl_in_rule__Clazz__Group__46363);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3045:1: rule__Clazz__Group__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Clazz__Group__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3049:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3050:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3050:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3051:1: RULE_END_LINE
            {
             before(grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Clazz__Group__4__Impl6390); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3072:1: rule__Clazz__Group_2__0 : rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1 ;
    public final void rule__Clazz__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3076:1: ( rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3077:2: rule__Clazz__Group_2__0__Impl rule__Clazz__Group_2__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__0__Impl_in_rule__Clazz__Group_2__06429);
            rule__Clazz__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_2__1_in_rule__Clazz__Group_2__06432);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3084:1: rule__Clazz__Group_2__0__Impl : ( '<<' ) ;
    public final void rule__Clazz__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3088:1: ( ( '<<' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3089:1: ( '<<' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3089:1: ( '<<' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3090:1: '<<'
            {
             before(grammarAccess.getClazzAccess().getLessThanSignLessThanSignKeyword_2_0()); 
            match(input,48,FOLLOW_48_in_rule__Clazz__Group_2__0__Impl6460); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3103:1: rule__Clazz__Group_2__1 : rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2 ;
    public final void rule__Clazz__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3107:1: ( rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3108:2: rule__Clazz__Group_2__1__Impl rule__Clazz__Group_2__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__1__Impl_in_rule__Clazz__Group_2__16491);
            rule__Clazz__Group_2__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_2__2_in_rule__Clazz__Group_2__16494);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3115:1: rule__Clazz__Group_2__1__Impl : ( ( rule__Clazz__StereotypeAssignment_2_1 ) ) ;
    public final void rule__Clazz__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3119:1: ( ( ( rule__Clazz__StereotypeAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3120:1: ( ( rule__Clazz__StereotypeAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3120:1: ( ( rule__Clazz__StereotypeAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3121:1: ( rule__Clazz__StereotypeAssignment_2_1 )
            {
             before(grammarAccess.getClazzAccess().getStereotypeAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3122:1: ( rule__Clazz__StereotypeAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3122:2: rule__Clazz__StereotypeAssignment_2_1
            {
            pushFollow(FOLLOW_rule__Clazz__StereotypeAssignment_2_1_in_rule__Clazz__Group_2__1__Impl6521);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3132:1: rule__Clazz__Group_2__2 : rule__Clazz__Group_2__2__Impl ;
    public final void rule__Clazz__Group_2__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3136:1: ( rule__Clazz__Group_2__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3137:2: rule__Clazz__Group_2__2__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group_2__2__Impl_in_rule__Clazz__Group_2__26551);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3143:1: rule__Clazz__Group_2__2__Impl : ( '>>' ) ;
    public final void rule__Clazz__Group_2__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3147:1: ( ( '>>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3148:1: ( '>>' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3148:1: ( '>>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3149:1: '>>'
            {
             before(grammarAccess.getClazzAccess().getGreaterThanSignGreaterThanSignKeyword_2_2()); 
            match(input,49,FOLLOW_49_in_rule__Clazz__Group_2__2__Impl6579); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3168:1: rule__Clazz__Group_3__0 : rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1 ;
    public final void rule__Clazz__Group_3__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3172:1: ( rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3173:2: rule__Clazz__Group_3__0__Impl rule__Clazz__Group_3__1
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__0__Impl_in_rule__Clazz__Group_3__06616);
            rule__Clazz__Group_3__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__1_in_rule__Clazz__Group_3__06619);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3180:1: rule__Clazz__Group_3__0__Impl : ( '{' ) ;
    public final void rule__Clazz__Group_3__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3184:1: ( ( '{' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3185:1: ( '{' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3185:1: ( '{' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3186:1: '{'
            {
             before(grammarAccess.getClazzAccess().getLeftCurlyBracketKeyword_3_0()); 
            match(input,46,FOLLOW_46_in_rule__Clazz__Group_3__0__Impl6647); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3199:1: rule__Clazz__Group_3__1 : rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2 ;
    public final void rule__Clazz__Group_3__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3203:1: ( rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3204:2: rule__Clazz__Group_3__1__Impl rule__Clazz__Group_3__2
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__1__Impl_in_rule__Clazz__Group_3__16678);
            rule__Clazz__Group_3__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__2_in_rule__Clazz__Group_3__16681);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3211:1: rule__Clazz__Group_3__1__Impl : ( ( RULE_END_LINE )? ) ;
    public final void rule__Clazz__Group_3__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3215:1: ( ( ( RULE_END_LINE )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3216:1: ( ( RULE_END_LINE )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3216:1: ( ( RULE_END_LINE )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3217:1: ( RULE_END_LINE )?
            {
             before(grammarAccess.getClazzAccess().getEND_LINETerminalRuleCall_3_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3218:1: ( RULE_END_LINE )?
            int alt38=2;
            int LA38_0 = input.LA(1);

            if ( (LA38_0==RULE_END_LINE) ) {
                alt38=1;
            }
            switch (alt38) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3218:3: RULE_END_LINE
                    {
                    match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Clazz__Group_3__1__Impl6709); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3228:1: rule__Clazz__Group_3__2 : rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3 ;
    public final void rule__Clazz__Group_3__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3232:1: ( rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3233:2: rule__Clazz__Group_3__2__Impl rule__Clazz__Group_3__3
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__2__Impl_in_rule__Clazz__Group_3__26740);
            rule__Clazz__Group_3__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Clazz__Group_3__3_in_rule__Clazz__Group_3__26743);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3240:1: rule__Clazz__Group_3__2__Impl : ( ( rule__Clazz__PropertiesAssignment_3_2 )* ) ;
    public final void rule__Clazz__Group_3__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3244:1: ( ( ( rule__Clazz__PropertiesAssignment_3_2 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3245:1: ( ( rule__Clazz__PropertiesAssignment_3_2 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3245:1: ( ( rule__Clazz__PropertiesAssignment_3_2 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3246:1: ( rule__Clazz__PropertiesAssignment_3_2 )*
            {
             before(grammarAccess.getClazzAccess().getPropertiesAssignment_3_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3247:1: ( rule__Clazz__PropertiesAssignment_3_2 )*
            loop39:
            do {
                int alt39=2;
                int LA39_0 = input.LA(1);

                if ( (LA39_0==RULE_ID) ) {
                    alt39=1;
                }


                switch (alt39) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3247:2: rule__Clazz__PropertiesAssignment_3_2
            	    {
            	    pushFollow(FOLLOW_rule__Clazz__PropertiesAssignment_3_2_in_rule__Clazz__Group_3__2__Impl6770);
            	    rule__Clazz__PropertiesAssignment_3_2();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop39;
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3257:1: rule__Clazz__Group_3__3 : rule__Clazz__Group_3__3__Impl ;
    public final void rule__Clazz__Group_3__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3261:1: ( rule__Clazz__Group_3__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3262:2: rule__Clazz__Group_3__3__Impl
            {
            pushFollow(FOLLOW_rule__Clazz__Group_3__3__Impl_in_rule__Clazz__Group_3__36801);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3268:1: rule__Clazz__Group_3__3__Impl : ( '}' ) ;
    public final void rule__Clazz__Group_3__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3272:1: ( ( '}' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3273:1: ( '}' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3273:1: ( '}' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3274:1: '}'
            {
             before(grammarAccess.getClazzAccess().getRightCurlyBracketKeyword_3_3()); 
            match(input,47,FOLLOW_47_in_rule__Clazz__Group_3__3__Impl6829); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3295:1: rule__Property__Group__0 : rule__Property__Group__0__Impl rule__Property__Group__1 ;
    public final void rule__Property__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3299:1: ( rule__Property__Group__0__Impl rule__Property__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3300:2: rule__Property__Group__0__Impl rule__Property__Group__1
            {
            pushFollow(FOLLOW_rule__Property__Group__0__Impl_in_rule__Property__Group__06868);
            rule__Property__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group__1_in_rule__Property__Group__06871);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3307:1: rule__Property__Group__0__Impl : ( ( rule__Property__NameAssignment_0 ) ) ;
    public final void rule__Property__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3311:1: ( ( ( rule__Property__NameAssignment_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3312:1: ( ( rule__Property__NameAssignment_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3312:1: ( ( rule__Property__NameAssignment_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3313:1: ( rule__Property__NameAssignment_0 )
            {
             before(grammarAccess.getPropertyAccess().getNameAssignment_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3314:1: ( rule__Property__NameAssignment_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3314:2: rule__Property__NameAssignment_0
            {
            pushFollow(FOLLOW_rule__Property__NameAssignment_0_in_rule__Property__Group__0__Impl6898);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3324:1: rule__Property__Group__1 : rule__Property__Group__1__Impl rule__Property__Group__2 ;
    public final void rule__Property__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3328:1: ( rule__Property__Group__1__Impl rule__Property__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3329:2: rule__Property__Group__1__Impl rule__Property__Group__2
            {
            pushFollow(FOLLOW_rule__Property__Group__1__Impl_in_rule__Property__Group__16928);
            rule__Property__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group__2_in_rule__Property__Group__16931);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3336:1: rule__Property__Group__1__Impl : ( ( rule__Property__Alternatives_1 ) ) ;
    public final void rule__Property__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3340:1: ( ( ( rule__Property__Alternatives_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3341:1: ( ( rule__Property__Alternatives_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3341:1: ( ( rule__Property__Alternatives_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3342:1: ( rule__Property__Alternatives_1 )
            {
             before(grammarAccess.getPropertyAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3343:1: ( rule__Property__Alternatives_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3343:2: rule__Property__Alternatives_1
            {
            pushFollow(FOLLOW_rule__Property__Alternatives_1_in_rule__Property__Group__1__Impl6958);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3353:1: rule__Property__Group__2 : rule__Property__Group__2__Impl ;
    public final void rule__Property__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3357:1: ( rule__Property__Group__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3358:2: rule__Property__Group__2__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group__2__Impl_in_rule__Property__Group__26988);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3364:1: rule__Property__Group__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Property__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3368:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3369:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3369:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3370:1: RULE_END_LINE
            {
             before(grammarAccess.getPropertyAccess().getEND_LINETerminalRuleCall_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Property__Group__2__Impl7015); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3387:1: rule__Property__Group_1_0__0 : rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1 ;
    public final void rule__Property__Group_1_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3391:1: ( rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3392:2: rule__Property__Group_1_0__0__Impl rule__Property__Group_1_0__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0__0__Impl_in_rule__Property__Group_1_0__07050);
            rule__Property__Group_1_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_0__1_in_rule__Property__Group_1_0__07053);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3399:1: rule__Property__Group_1_0__0__Impl : ( ( rule__Property__OptionalAssignment_1_0_0 )? ) ;
    public final void rule__Property__Group_1_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3403:1: ( ( ( rule__Property__OptionalAssignment_1_0_0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3404:1: ( ( rule__Property__OptionalAssignment_1_0_0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3404:1: ( ( rule__Property__OptionalAssignment_1_0_0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3405:1: ( rule__Property__OptionalAssignment_1_0_0 )?
            {
             before(grammarAccess.getPropertyAccess().getOptionalAssignment_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3406:1: ( rule__Property__OptionalAssignment_1_0_0 )?
            int alt40=2;
            int LA40_0 = input.LA(1);

            if ( (LA40_0==32) ) {
                alt40=1;
            }
            switch (alt40) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3406:2: rule__Property__OptionalAssignment_1_0_0
                    {
                    pushFollow(FOLLOW_rule__Property__OptionalAssignment_1_0_0_in_rule__Property__Group_1_0__0__Impl7080);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3416:1: rule__Property__Group_1_0__1 : rule__Property__Group_1_0__1__Impl ;
    public final void rule__Property__Group_1_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3420:1: ( rule__Property__Group_1_0__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3421:2: rule__Property__Group_1_0__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0__1__Impl_in_rule__Property__Group_1_0__17111);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3427:1: rule__Property__Group_1_0__1__Impl : ( ( rule__Property__Group_1_0_1__0 )? ) ;
    public final void rule__Property__Group_1_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3431:1: ( ( ( rule__Property__Group_1_0_1__0 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3432:1: ( ( rule__Property__Group_1_0_1__0 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3432:1: ( ( rule__Property__Group_1_0_1__0 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3433:1: ( rule__Property__Group_1_0_1__0 )?
            {
             before(grammarAccess.getPropertyAccess().getGroup_1_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3434:1: ( rule__Property__Group_1_0_1__0 )?
            int alt41=2;
            int LA41_0 = input.LA(1);

            if ( (LA41_0==31) ) {
                alt41=1;
            }
            switch (alt41) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3434:2: rule__Property__Group_1_0_1__0
                    {
                    pushFollow(FOLLOW_rule__Property__Group_1_0_1__0_in_rule__Property__Group_1_0__1__Impl7138);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3448:1: rule__Property__Group_1_0_1__0 : rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1 ;
    public final void rule__Property__Group_1_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3452:1: ( rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3453:2: rule__Property__Group_1_0_1__0__Impl rule__Property__Group_1_0_1__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0_1__0__Impl_in_rule__Property__Group_1_0_1__07173);
            rule__Property__Group_1_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_0_1__1_in_rule__Property__Group_1_0_1__07176);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3460:1: rule__Property__Group_1_0_1__0__Impl : ( ':' ) ;
    public final void rule__Property__Group_1_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3464:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3465:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3465:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3466:1: ':'
            {
             before(grammarAccess.getPropertyAccess().getColonKeyword_1_0_1_0()); 
            match(input,31,FOLLOW_31_in_rule__Property__Group_1_0_1__0__Impl7204); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3479:1: rule__Property__Group_1_0_1__1 : rule__Property__Group_1_0_1__1__Impl ;
    public final void rule__Property__Group_1_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3483:1: ( rule__Property__Group_1_0_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3484:2: rule__Property__Group_1_0_1__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_0_1__1__Impl_in_rule__Property__Group_1_0_1__17235);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3490:1: rule__Property__Group_1_0_1__1__Impl : ( ( rule__Property__Alternatives_1_0_1_1 ) ) ;
    public final void rule__Property__Group_1_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3494:1: ( ( ( rule__Property__Alternatives_1_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3495:1: ( ( rule__Property__Alternatives_1_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3495:1: ( ( rule__Property__Alternatives_1_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3496:1: ( rule__Property__Alternatives_1_0_1_1 )
            {
             before(grammarAccess.getPropertyAccess().getAlternatives_1_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3497:1: ( rule__Property__Alternatives_1_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3497:2: rule__Property__Alternatives_1_0_1_1
            {
            pushFollow(FOLLOW_rule__Property__Alternatives_1_0_1_1_in_rule__Property__Group_1_0_1__1__Impl7262);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3511:1: rule__Property__Group_1_1__0 : rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1 ;
    public final void rule__Property__Group_1_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3515:1: ( rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3516:2: rule__Property__Group_1_1__0__Impl rule__Property__Group_1_1__1
            {
            pushFollow(FOLLOW_rule__Property__Group_1_1__0__Impl_in_rule__Property__Group_1_1__07296);
            rule__Property__Group_1_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Property__Group_1_1__1_in_rule__Property__Group_1_1__07299);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3523:1: rule__Property__Group_1_1__0__Impl : ( ( rule__Property__ConstantAssignment_1_1_0 ) ) ;
    public final void rule__Property__Group_1_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3527:1: ( ( ( rule__Property__ConstantAssignment_1_1_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3528:1: ( ( rule__Property__ConstantAssignment_1_1_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3528:1: ( ( rule__Property__ConstantAssignment_1_1_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3529:1: ( rule__Property__ConstantAssignment_1_1_0 )
            {
             before(grammarAccess.getPropertyAccess().getConstantAssignment_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3530:1: ( rule__Property__ConstantAssignment_1_1_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3530:2: rule__Property__ConstantAssignment_1_1_0
            {
            pushFollow(FOLLOW_rule__Property__ConstantAssignment_1_1_0_in_rule__Property__Group_1_1__0__Impl7326);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3540:1: rule__Property__Group_1_1__1 : rule__Property__Group_1_1__1__Impl ;
    public final void rule__Property__Group_1_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3544:1: ( rule__Property__Group_1_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3545:2: rule__Property__Group_1_1__1__Impl
            {
            pushFollow(FOLLOW_rule__Property__Group_1_1__1__Impl_in_rule__Property__Group_1_1__17356);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3551:1: rule__Property__Group_1_1__1__Impl : ( ( rule__Property__ValueAssignment_1_1_1 ) ) ;
    public final void rule__Property__Group_1_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3555:1: ( ( ( rule__Property__ValueAssignment_1_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3556:1: ( ( rule__Property__ValueAssignment_1_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3556:1: ( ( rule__Property__ValueAssignment_1_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3557:1: ( rule__Property__ValueAssignment_1_1_1 )
            {
             before(grammarAccess.getPropertyAccess().getValueAssignment_1_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3558:1: ( rule__Property__ValueAssignment_1_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3558:2: rule__Property__ValueAssignment_1_1_1
            {
            pushFollow(FOLLOW_rule__Property__ValueAssignment_1_1_1_in_rule__Property__Group_1_1__1__Impl7383);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3572:1: rule__EntityList__Group__0 : rule__EntityList__Group__0__Impl rule__EntityList__Group__1 ;
    public final void rule__EntityList__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3576:1: ( rule__EntityList__Group__0__Impl rule__EntityList__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3577:2: rule__EntityList__Group__0__Impl rule__EntityList__Group__1
            {
            pushFollow(FOLLOW_rule__EntityList__Group__0__Impl_in_rule__EntityList__Group__07417);
            rule__EntityList__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__1_in_rule__EntityList__Group__07420);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3584:1: rule__EntityList__Group__0__Impl : ( '[' ) ;
    public final void rule__EntityList__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3588:1: ( ( '[' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3589:1: ( '[' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3589:1: ( '[' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3590:1: '['
            {
             before(grammarAccess.getEntityListAccess().getLeftSquareBracketKeyword_0()); 
            match(input,33,FOLLOW_33_in_rule__EntityList__Group__0__Impl7448); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3603:1: rule__EntityList__Group__1 : rule__EntityList__Group__1__Impl rule__EntityList__Group__2 ;
    public final void rule__EntityList__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3607:1: ( rule__EntityList__Group__1__Impl rule__EntityList__Group__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3608:2: rule__EntityList__Group__1__Impl rule__EntityList__Group__2
            {
            pushFollow(FOLLOW_rule__EntityList__Group__1__Impl_in_rule__EntityList__Group__17479);
            rule__EntityList__Group__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__2_in_rule__EntityList__Group__17482);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3615:1: rule__EntityList__Group__1__Impl : ( ( rule__EntityList__RefsAssignment_1 ) ) ;
    public final void rule__EntityList__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3619:1: ( ( ( rule__EntityList__RefsAssignment_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3620:1: ( ( rule__EntityList__RefsAssignment_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3620:1: ( ( rule__EntityList__RefsAssignment_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3621:1: ( rule__EntityList__RefsAssignment_1 )
            {
             before(grammarAccess.getEntityListAccess().getRefsAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3622:1: ( rule__EntityList__RefsAssignment_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3622:2: rule__EntityList__RefsAssignment_1
            {
            pushFollow(FOLLOW_rule__EntityList__RefsAssignment_1_in_rule__EntityList__Group__1__Impl7509);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3632:1: rule__EntityList__Group__2 : rule__EntityList__Group__2__Impl rule__EntityList__Group__3 ;
    public final void rule__EntityList__Group__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3636:1: ( rule__EntityList__Group__2__Impl rule__EntityList__Group__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3637:2: rule__EntityList__Group__2__Impl rule__EntityList__Group__3
            {
            pushFollow(FOLLOW_rule__EntityList__Group__2__Impl_in_rule__EntityList__Group__27539);
            rule__EntityList__Group__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group__3_in_rule__EntityList__Group__27542);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3644:1: rule__EntityList__Group__2__Impl : ( ( rule__EntityList__Group_2__0 )* ) ;
    public final void rule__EntityList__Group__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3648:1: ( ( ( rule__EntityList__Group_2__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3649:1: ( ( rule__EntityList__Group_2__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3649:1: ( ( rule__EntityList__Group_2__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3650:1: ( rule__EntityList__Group_2__0 )*
            {
             before(grammarAccess.getEntityListAccess().getGroup_2()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3651:1: ( rule__EntityList__Group_2__0 )*
            loop42:
            do {
                int alt42=2;
                int LA42_0 = input.LA(1);

                if ( (LA42_0==52) ) {
                    alt42=1;
                }


                switch (alt42) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3651:2: rule__EntityList__Group_2__0
            	    {
            	    pushFollow(FOLLOW_rule__EntityList__Group_2__0_in_rule__EntityList__Group__2__Impl7569);
            	    rule__EntityList__Group_2__0();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop42;
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3661:1: rule__EntityList__Group__3 : rule__EntityList__Group__3__Impl ;
    public final void rule__EntityList__Group__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3665:1: ( rule__EntityList__Group__3__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3666:2: rule__EntityList__Group__3__Impl
            {
            pushFollow(FOLLOW_rule__EntityList__Group__3__Impl_in_rule__EntityList__Group__37600);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3672:1: rule__EntityList__Group__3__Impl : ( ']' ) ;
    public final void rule__EntityList__Group__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3676:1: ( ( ']' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3677:1: ( ']' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3677:1: ( ']' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3678:1: ']'
            {
             before(grammarAccess.getEntityListAccess().getRightSquareBracketKeyword_3()); 
            match(input,34,FOLLOW_34_in_rule__EntityList__Group__3__Impl7628); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3699:1: rule__EntityList__Group_2__0 : rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1 ;
    public final void rule__EntityList__Group_2__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3703:1: ( rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3704:2: rule__EntityList__Group_2__0__Impl rule__EntityList__Group_2__1
            {
            pushFollow(FOLLOW_rule__EntityList__Group_2__0__Impl_in_rule__EntityList__Group_2__07667);
            rule__EntityList__Group_2__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__EntityList__Group_2__1_in_rule__EntityList__Group_2__07670);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3711:1: rule__EntityList__Group_2__0__Impl : ( '|' ) ;
    public final void rule__EntityList__Group_2__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3715:1: ( ( '|' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3716:1: ( '|' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3716:1: ( '|' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3717:1: '|'
            {
             before(grammarAccess.getEntityListAccess().getVerticalLineKeyword_2_0()); 
            match(input,52,FOLLOW_52_in_rule__EntityList__Group_2__0__Impl7698); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3730:1: rule__EntityList__Group_2__1 : rule__EntityList__Group_2__1__Impl ;
    public final void rule__EntityList__Group_2__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3734:1: ( rule__EntityList__Group_2__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3735:2: rule__EntityList__Group_2__1__Impl
            {
            pushFollow(FOLLOW_rule__EntityList__Group_2__1__Impl_in_rule__EntityList__Group_2__17729);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3741:1: rule__EntityList__Group_2__1__Impl : ( ( rule__EntityList__RefsAssignment_2_1 ) ) ;
    public final void rule__EntityList__Group_2__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3745:1: ( ( ( rule__EntityList__RefsAssignment_2_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3746:1: ( ( rule__EntityList__RefsAssignment_2_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3746:1: ( ( rule__EntityList__RefsAssignment_2_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3747:1: ( rule__EntityList__RefsAssignment_2_1 )
            {
             before(grammarAccess.getEntityListAccess().getRefsAssignment_2_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3748:1: ( rule__EntityList__RefsAssignment_2_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3748:2: rule__EntityList__RefsAssignment_2_1
            {
            pushFollow(FOLLOW_rule__EntityList__RefsAssignment_2_1_in_rule__EntityList__Group_2__1__Impl7756);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3762:1: rule__Note__Group__0 : rule__Note__Group__0__Impl rule__Note__Group__1 ;
    public final void rule__Note__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3766:1: ( rule__Note__Group__0__Impl rule__Note__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3767:2: rule__Note__Group__0__Impl rule__Note__Group__1
            {
            pushFollow(FOLLOW_rule__Note__Group__0__Impl_in_rule__Note__Group__07790);
            rule__Note__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group__1_in_rule__Note__Group__07793);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3774:1: rule__Note__Group__0__Impl : ( 'note' ) ;
    public final void rule__Note__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3778:1: ( ( 'note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3779:1: ( 'note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3779:1: ( 'note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3780:1: 'note'
            {
             before(grammarAccess.getNoteAccess().getNoteKeyword_0()); 
            match(input,28,FOLLOW_28_in_rule__Note__Group__0__Impl7821); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3793:1: rule__Note__Group__1 : rule__Note__Group__1__Impl ;
    public final void rule__Note__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3797:1: ( rule__Note__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3798:2: rule__Note__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group__1__Impl_in_rule__Note__Group__17852);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3804:1: rule__Note__Group__1__Impl : ( ( rule__Note__Alternatives_1 ) ) ;
    public final void rule__Note__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3808:1: ( ( ( rule__Note__Alternatives_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3809:1: ( ( rule__Note__Alternatives_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3809:1: ( ( rule__Note__Alternatives_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3810:1: ( rule__Note__Alternatives_1 )
            {
             before(grammarAccess.getNoteAccess().getAlternatives_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3811:1: ( rule__Note__Alternatives_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3811:2: rule__Note__Alternatives_1
            {
            pushFollow(FOLLOW_rule__Note__Alternatives_1_in_rule__Note__Group__1__Impl7879);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3825:1: rule__Note__Group_1_0_0__0 : rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1 ;
    public final void rule__Note__Group_1_0_0__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3829:1: ( rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3830:2: rule__Note__Group_1_0_0__0__Impl rule__Note__Group_1_0_0__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0__0__Impl_in_rule__Note__Group_1_0_0__07913);
            rule__Note__Group_1_0_0__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0__1_in_rule__Note__Group_1_0_0__07916);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3837:1: rule__Note__Group_1_0_0__0__Impl : ( ( rule__Note__PositionAssignment_1_0_0_0 ) ) ;
    public final void rule__Note__Group_1_0_0__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3841:1: ( ( ( rule__Note__PositionAssignment_1_0_0_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3842:1: ( ( rule__Note__PositionAssignment_1_0_0_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3842:1: ( ( rule__Note__PositionAssignment_1_0_0_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3843:1: ( rule__Note__PositionAssignment_1_0_0_0 )
            {
             before(grammarAccess.getNoteAccess().getPositionAssignment_1_0_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3844:1: ( rule__Note__PositionAssignment_1_0_0_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3844:2: rule__Note__PositionAssignment_1_0_0_0
            {
            pushFollow(FOLLOW_rule__Note__PositionAssignment_1_0_0_0_in_rule__Note__Group_1_0_0__0__Impl7943);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3854:1: rule__Note__Group_1_0_0__1 : rule__Note__Group_1_0_0__1__Impl ;
    public final void rule__Note__Group_1_0_0__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3858:1: ( rule__Note__Group_1_0_0__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3859:2: rule__Note__Group_1_0_0__1__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0__1__Impl_in_rule__Note__Group_1_0_0__17973);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3865:1: rule__Note__Group_1_0_0__1__Impl : ( ( rule__Note__Group_1_0_0_1__0 ) ) ;
    public final void rule__Note__Group_1_0_0__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3869:1: ( ( ( rule__Note__Group_1_0_0_1__0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3870:1: ( ( rule__Note__Group_1_0_0_1__0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3870:1: ( ( rule__Note__Group_1_0_0_1__0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3871:1: ( rule__Note__Group_1_0_0_1__0 )
            {
             before(grammarAccess.getNoteAccess().getGroup_1_0_0_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3872:1: ( rule__Note__Group_1_0_0_1__0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3872:2: rule__Note__Group_1_0_0_1__0
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__0_in_rule__Note__Group_1_0_0__1__Impl8000);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3886:1: rule__Note__Group_1_0_0_1__0 : rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1 ;
    public final void rule__Note__Group_1_0_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3890:1: ( rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3891:2: rule__Note__Group_1_0_0_1__0__Impl rule__Note__Group_1_0_0_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__0__Impl_in_rule__Note__Group_1_0_0_1__08034);
            rule__Note__Group_1_0_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__1_in_rule__Note__Group_1_0_0_1__08037);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3898:1: rule__Note__Group_1_0_0_1__0__Impl : ( ':' ) ;
    public final void rule__Note__Group_1_0_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3902:1: ( ( ':' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3903:1: ( ':' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3903:1: ( ':' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3904:1: ':'
            {
             before(grammarAccess.getNoteAccess().getColonKeyword_1_0_0_1_0()); 
            match(input,31,FOLLOW_31_in_rule__Note__Group_1_0_0_1__0__Impl8065); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3917:1: rule__Note__Group_1_0_0_1__1 : rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2 ;
    public final void rule__Note__Group_1_0_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3921:1: ( rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3922:2: rule__Note__Group_1_0_0_1__1__Impl rule__Note__Group_1_0_0_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__1__Impl_in_rule__Note__Group_1_0_0_1__18096);
            rule__Note__Group_1_0_0_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__2_in_rule__Note__Group_1_0_0_1__18099);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3929:1: rule__Note__Group_1_0_0_1__1__Impl : ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) ) ;
    public final void rule__Note__Group_1_0_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3933:1: ( ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3934:1: ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3934:1: ( ( rule__Note__ValueAssignment_1_0_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3935:1: ( rule__Note__ValueAssignment_1_0_0_1_1 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_0_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3936:1: ( rule__Note__ValueAssignment_1_0_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3936:2: rule__Note__ValueAssignment_1_0_0_1_1
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_0_0_1_1_in_rule__Note__Group_1_0_0_1__1__Impl8126);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3946:1: rule__Note__Group_1_0_0_1__2 : rule__Note__Group_1_0_0_1__2__Impl ;
    public final void rule__Note__Group_1_0_0_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3950:1: ( rule__Note__Group_1_0_0_1__2__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3951:2: rule__Note__Group_1_0_0_1__2__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_0_1__2__Impl_in_rule__Note__Group_1_0_0_1__28156);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3957:1: rule__Note__Group_1_0_0_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_0_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3961:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3962:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3962:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3963:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_0_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_0_1__2__Impl8183); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3980:1: rule__Note__Group_1_0_1__0 : rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1 ;
    public final void rule__Note__Group_1_0_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3984:1: ( rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3985:2: rule__Note__Group_1_0_1__0__Impl rule__Note__Group_1_0_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__0__Impl_in_rule__Note__Group_1_0_1__08218);
            rule__Note__Group_1_0_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__1_in_rule__Note__Group_1_0_1__08221);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3992:1: rule__Note__Group_1_0_1__0__Impl : ( 'of' ) ;
    public final void rule__Note__Group_1_0_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3996:1: ( ( 'of' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3997:1: ( 'of' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3997:1: ( 'of' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:3998:1: 'of'
            {
             before(grammarAccess.getNoteAccess().getOfKeyword_1_0_1_0()); 
            match(input,30,FOLLOW_30_in_rule__Note__Group_1_0_1__0__Impl8249); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4011:1: rule__Note__Group_1_0_1__1 : rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2 ;
    public final void rule__Note__Group_1_0_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4015:1: ( rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4016:2: rule__Note__Group_1_0_1__1__Impl rule__Note__Group_1_0_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__1__Impl_in_rule__Note__Group_1_0_1__18280);
            rule__Note__Group_1_0_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__2_in_rule__Note__Group_1_0_1__18283);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4023:1: rule__Note__Group_1_0_1__1__Impl : ( ( rule__Note__OfAssignment_1_0_1_1 ) ) ;
    public final void rule__Note__Group_1_0_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4027:1: ( ( ( rule__Note__OfAssignment_1_0_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4028:1: ( ( rule__Note__OfAssignment_1_0_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4028:1: ( ( rule__Note__OfAssignment_1_0_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4029:1: ( rule__Note__OfAssignment_1_0_1_1 )
            {
             before(grammarAccess.getNoteAccess().getOfAssignment_1_0_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4030:1: ( rule__Note__OfAssignment_1_0_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4030:2: rule__Note__OfAssignment_1_0_1_1
            {
            pushFollow(FOLLOW_rule__Note__OfAssignment_1_0_1_1_in_rule__Note__Group_1_0_1__1__Impl8310);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4040:1: rule__Note__Group_1_0_1__2 : rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3 ;
    public final void rule__Note__Group_1_0_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4044:1: ( rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4045:2: rule__Note__Group_1_0_1__2__Impl rule__Note__Group_1_0_1__3
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__2__Impl_in_rule__Note__Group_1_0_1__28340);
            rule__Note__Group_1_0_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__3_in_rule__Note__Group_1_0_1__28343);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4052:1: rule__Note__Group_1_0_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4056:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4057:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4057:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4058:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__2__Impl8370); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4069:1: rule__Note__Group_1_0_1__3 : rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4 ;
    public final void rule__Note__Group_1_0_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4073:1: ( rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4074:2: rule__Note__Group_1_0_1__3__Impl rule__Note__Group_1_0_1__4
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__3__Impl_in_rule__Note__Group_1_0_1__38399);
            rule__Note__Group_1_0_1__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__4_in_rule__Note__Group_1_0_1__38402);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4081:1: rule__Note__Group_1_0_1__3__Impl : ( ( rule__Note__ValueAssignment_1_0_1_3 ) ) ;
    public final void rule__Note__Group_1_0_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4085:1: ( ( ( rule__Note__ValueAssignment_1_0_1_3 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4086:1: ( ( rule__Note__ValueAssignment_1_0_1_3 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4086:1: ( ( rule__Note__ValueAssignment_1_0_1_3 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4087:1: ( rule__Note__ValueAssignment_1_0_1_3 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_0_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4088:1: ( rule__Note__ValueAssignment_1_0_1_3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4088:2: rule__Note__ValueAssignment_1_0_1_3
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_0_1_3_in_rule__Note__Group_1_0_1__3__Impl8429);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4098:1: rule__Note__Group_1_0_1__4 : rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5 ;
    public final void rule__Note__Group_1_0_1__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4102:1: ( rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4103:2: rule__Note__Group_1_0_1__4__Impl rule__Note__Group_1_0_1__5
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__4__Impl_in_rule__Note__Group_1_0_1__48459);
            rule__Note__Group_1_0_1__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__5_in_rule__Note__Group_1_0_1__48462);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4110:1: rule__Note__Group_1_0_1__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4114:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4115:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4115:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4116:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__4__Impl8489); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4127:1: rule__Note__Group_1_0_1__5 : rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6 ;
    public final void rule__Note__Group_1_0_1__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4131:1: ( rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4132:2: rule__Note__Group_1_0_1__5__Impl rule__Note__Group_1_0_1__6
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__5__Impl_in_rule__Note__Group_1_0_1__58518);
            rule__Note__Group_1_0_1__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_0_1__6_in_rule__Note__Group_1_0_1__58521);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4139:1: rule__Note__Group_1_0_1__5__Impl : ( 'end note' ) ;
    public final void rule__Note__Group_1_0_1__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4143:1: ( ( 'end note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4144:1: ( 'end note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4144:1: ( 'end note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4145:1: 'end note'
            {
             before(grammarAccess.getNoteAccess().getEndNoteKeyword_1_0_1_5()); 
            match(input,53,FOLLOW_53_in_rule__Note__Group_1_0_1__5__Impl8549); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4158:1: rule__Note__Group_1_0_1__6 : rule__Note__Group_1_0_1__6__Impl ;
    public final void rule__Note__Group_1_0_1__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4162:1: ( rule__Note__Group_1_0_1__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4163:2: rule__Note__Group_1_0_1__6__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_0_1__6__Impl_in_rule__Note__Group_1_0_1__68580);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4169:1: rule__Note__Group_1_0_1__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_0_1__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4173:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4174:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4174:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4175:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_0_1_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__6__Impl8607); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4200:1: rule__Note__Group_1_1__0 : rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1 ;
    public final void rule__Note__Group_1_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4204:1: ( rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4205:2: rule__Note__Group_1_1__0__Impl rule__Note__Group_1_1__1
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__0__Impl_in_rule__Note__Group_1_1__08650);
            rule__Note__Group_1_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__1_in_rule__Note__Group_1_1__08653);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4212:1: rule__Note__Group_1_1__0__Impl : ( 'as' ) ;
    public final void rule__Note__Group_1_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4216:1: ( ( 'as' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4217:1: ( 'as' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4217:1: ( 'as' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4218:1: 'as'
            {
             before(grammarAccess.getNoteAccess().getAsKeyword_1_1_0()); 
            match(input,29,FOLLOW_29_in_rule__Note__Group_1_1__0__Impl8681); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4231:1: rule__Note__Group_1_1__1 : rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2 ;
    public final void rule__Note__Group_1_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4235:1: ( rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4236:2: rule__Note__Group_1_1__1__Impl rule__Note__Group_1_1__2
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__1__Impl_in_rule__Note__Group_1_1__18712);
            rule__Note__Group_1_1__1__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__2_in_rule__Note__Group_1_1__18715);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4243:1: rule__Note__Group_1_1__1__Impl : ( ( rule__Note__NameAssignment_1_1_1 ) ) ;
    public final void rule__Note__Group_1_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4247:1: ( ( ( rule__Note__NameAssignment_1_1_1 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4248:1: ( ( rule__Note__NameAssignment_1_1_1 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4248:1: ( ( rule__Note__NameAssignment_1_1_1 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4249:1: ( rule__Note__NameAssignment_1_1_1 )
            {
             before(grammarAccess.getNoteAccess().getNameAssignment_1_1_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4250:1: ( rule__Note__NameAssignment_1_1_1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4250:2: rule__Note__NameAssignment_1_1_1
            {
            pushFollow(FOLLOW_rule__Note__NameAssignment_1_1_1_in_rule__Note__Group_1_1__1__Impl8742);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4260:1: rule__Note__Group_1_1__2 : rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3 ;
    public final void rule__Note__Group_1_1__2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4264:1: ( rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4265:2: rule__Note__Group_1_1__2__Impl rule__Note__Group_1_1__3
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__2__Impl_in_rule__Note__Group_1_1__28772);
            rule__Note__Group_1_1__2__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__3_in_rule__Note__Group_1_1__28775);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4272:1: rule__Note__Group_1_1__2__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__2__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4276:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4277:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4277:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4278:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_2()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__2__Impl8802); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4289:1: rule__Note__Group_1_1__3 : rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4 ;
    public final void rule__Note__Group_1_1__3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4293:1: ( rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4294:2: rule__Note__Group_1_1__3__Impl rule__Note__Group_1_1__4
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__3__Impl_in_rule__Note__Group_1_1__38831);
            rule__Note__Group_1_1__3__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__4_in_rule__Note__Group_1_1__38834);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4301:1: rule__Note__Group_1_1__3__Impl : ( ( rule__Note__ValueAssignment_1_1_3 ) ) ;
    public final void rule__Note__Group_1_1__3__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4305:1: ( ( ( rule__Note__ValueAssignment_1_1_3 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4306:1: ( ( rule__Note__ValueAssignment_1_1_3 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4306:1: ( ( rule__Note__ValueAssignment_1_1_3 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4307:1: ( rule__Note__ValueAssignment_1_1_3 )
            {
             before(grammarAccess.getNoteAccess().getValueAssignment_1_1_3()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4308:1: ( rule__Note__ValueAssignment_1_1_3 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4308:2: rule__Note__ValueAssignment_1_1_3
            {
            pushFollow(FOLLOW_rule__Note__ValueAssignment_1_1_3_in_rule__Note__Group_1_1__3__Impl8861);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4318:1: rule__Note__Group_1_1__4 : rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5 ;
    public final void rule__Note__Group_1_1__4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4322:1: ( rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4323:2: rule__Note__Group_1_1__4__Impl rule__Note__Group_1_1__5
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__4__Impl_in_rule__Note__Group_1_1__48891);
            rule__Note__Group_1_1__4__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__5_in_rule__Note__Group_1_1__48894);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4330:1: rule__Note__Group_1_1__4__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__4__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4334:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4335:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4335:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4336:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_4()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__4__Impl8921); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4347:1: rule__Note__Group_1_1__5 : rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6 ;
    public final void rule__Note__Group_1_1__5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4351:1: ( rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4352:2: rule__Note__Group_1_1__5__Impl rule__Note__Group_1_1__6
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__5__Impl_in_rule__Note__Group_1_1__58950);
            rule__Note__Group_1_1__5__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__Note__Group_1_1__6_in_rule__Note__Group_1_1__58953);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4359:1: rule__Note__Group_1_1__5__Impl : ( 'end note' ) ;
    public final void rule__Note__Group_1_1__5__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4363:1: ( ( 'end note' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4364:1: ( 'end note' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4364:1: ( 'end note' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4365:1: 'end note'
            {
             before(grammarAccess.getNoteAccess().getEndNoteKeyword_1_1_5()); 
            match(input,53,FOLLOW_53_in_rule__Note__Group_1_1__5__Impl8981); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4378:1: rule__Note__Group_1_1__6 : rule__Note__Group_1_1__6__Impl ;
    public final void rule__Note__Group_1_1__6() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4382:1: ( rule__Note__Group_1_1__6__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4383:2: rule__Note__Group_1_1__6__Impl
            {
            pushFollow(FOLLOW_rule__Note__Group_1_1__6__Impl_in_rule__Note__Group_1_1__69012);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4389:1: rule__Note__Group_1_1__6__Impl : ( RULE_END_LINE ) ;
    public final void rule__Note__Group_1_1__6__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4393:1: ( ( RULE_END_LINE ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4394:1: ( RULE_END_LINE )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4394:1: ( RULE_END_LINE )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4395:1: RULE_END_LINE
            {
             before(grammarAccess.getNoteAccess().getEND_LINETerminalRuleCall_1_1_6()); 
            match(input,RULE_END_LINE,FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__6__Impl9039); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4420:1: rule__DataType__Group__0 : rule__DataType__Group__0__Impl rule__DataType__Group__1 ;
    public final void rule__DataType__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4424:1: ( rule__DataType__Group__0__Impl rule__DataType__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4425:2: rule__DataType__Group__0__Impl rule__DataType__Group__1
            {
            pushFollow(FOLLOW_rule__DataType__Group__0__Impl_in_rule__DataType__Group__09082);
            rule__DataType__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__DataType__Group__1_in_rule__DataType__Group__09085);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4432:1: rule__DataType__Group__0__Impl : ( ( rule__DataType__Alternatives_0 ) ) ;
    public final void rule__DataType__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4436:1: ( ( ( rule__DataType__Alternatives_0 ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4437:1: ( ( rule__DataType__Alternatives_0 ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4437:1: ( ( rule__DataType__Alternatives_0 ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4438:1: ( rule__DataType__Alternatives_0 )
            {
             before(grammarAccess.getDataTypeAccess().getAlternatives_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4439:1: ( rule__DataType__Alternatives_0 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4439:2: rule__DataType__Alternatives_0
            {
            pushFollow(FOLLOW_rule__DataType__Alternatives_0_in_rule__DataType__Group__0__Impl9112);
            rule__DataType__Alternatives_0();

            state._fsp--;


            }

             after(grammarAccess.getDataTypeAccess().getAlternatives_0()); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4449:1: rule__DataType__Group__1 : rule__DataType__Group__1__Impl ;
    public final void rule__DataType__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4453:1: ( rule__DataType__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4454:2: rule__DataType__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__DataType__Group__1__Impl_in_rule__DataType__Group__19142);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4460:1: rule__DataType__Group__1__Impl : ( ( rule__DataType__IsArrayAssignment_1 )? ) ;
    public final void rule__DataType__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4464:1: ( ( ( rule__DataType__IsArrayAssignment_1 )? ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4465:1: ( ( rule__DataType__IsArrayAssignment_1 )? )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4465:1: ( ( rule__DataType__IsArrayAssignment_1 )? )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4466:1: ( rule__DataType__IsArrayAssignment_1 )?
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayAssignment_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4467:1: ( rule__DataType__IsArrayAssignment_1 )?
            int alt43=2;
            int LA43_0 = input.LA(1);

            if ( (LA43_0==57) ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4467:2: rule__DataType__IsArrayAssignment_1
                    {
                    pushFollow(FOLLOW_rule__DataType__IsArrayAssignment_1_in_rule__DataType__Group__1__Impl9169);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4481:1: rule__QualifiedName__Group__0 : rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1 ;
    public final void rule__QualifiedName__Group__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4485:1: ( rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4486:2: rule__QualifiedName__Group__0__Impl rule__QualifiedName__Group__1
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group__0__Impl_in_rule__QualifiedName__Group__09204);
            rule__QualifiedName__Group__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__QualifiedName__Group__1_in_rule__QualifiedName__Group__09207);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4493:1: rule__QualifiedName__Group__0__Impl : ( RULE_ID ) ;
    public final void rule__QualifiedName__Group__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4497:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4498:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4498:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4499:1: RULE_ID
            {
             before(grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__QualifiedName__Group__0__Impl9234); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4510:1: rule__QualifiedName__Group__1 : rule__QualifiedName__Group__1__Impl ;
    public final void rule__QualifiedName__Group__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4514:1: ( rule__QualifiedName__Group__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4515:2: rule__QualifiedName__Group__1__Impl
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group__1__Impl_in_rule__QualifiedName__Group__19263);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4521:1: rule__QualifiedName__Group__1__Impl : ( ( rule__QualifiedName__Group_1__0 )* ) ;
    public final void rule__QualifiedName__Group__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4525:1: ( ( ( rule__QualifiedName__Group_1__0 )* ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4526:1: ( ( rule__QualifiedName__Group_1__0 )* )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4526:1: ( ( rule__QualifiedName__Group_1__0 )* )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4527:1: ( rule__QualifiedName__Group_1__0 )*
            {
             before(grammarAccess.getQualifiedNameAccess().getGroup_1()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4528:1: ( rule__QualifiedName__Group_1__0 )*
            loop44:
            do {
                int alt44=2;
                int LA44_0 = input.LA(1);

                if ( (LA44_0==51) ) {
                    int LA44_2 = input.LA(2);

                    if ( (LA44_2==RULE_ID) ) {
                        alt44=1;
                    }


                }


                switch (alt44) {
            	case 1 :
            	    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4528:2: rule__QualifiedName__Group_1__0
            	    {
            	    pushFollow(FOLLOW_rule__QualifiedName__Group_1__0_in_rule__QualifiedName__Group__1__Impl9290);
            	    rule__QualifiedName__Group_1__0();

            	    state._fsp--;


            	    }
            	    break;

            	default :
            	    break loop44;
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4542:1: rule__QualifiedName__Group_1__0 : rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1 ;
    public final void rule__QualifiedName__Group_1__0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4546:1: ( rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1 )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4547:2: rule__QualifiedName__Group_1__0__Impl rule__QualifiedName__Group_1__1
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group_1__0__Impl_in_rule__QualifiedName__Group_1__09325);
            rule__QualifiedName__Group_1__0__Impl();

            state._fsp--;

            pushFollow(FOLLOW_rule__QualifiedName__Group_1__1_in_rule__QualifiedName__Group_1__09328);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4554:1: rule__QualifiedName__Group_1__0__Impl : ( '.' ) ;
    public final void rule__QualifiedName__Group_1__0__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4558:1: ( ( '.' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4559:1: ( '.' )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4559:1: ( '.' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4560:1: '.'
            {
             before(grammarAccess.getQualifiedNameAccess().getFullStopKeyword_1_0()); 
            match(input,51,FOLLOW_51_in_rule__QualifiedName__Group_1__0__Impl9356); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4573:1: rule__QualifiedName__Group_1__1 : rule__QualifiedName__Group_1__1__Impl ;
    public final void rule__QualifiedName__Group_1__1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4577:1: ( rule__QualifiedName__Group_1__1__Impl )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4578:2: rule__QualifiedName__Group_1__1__Impl
            {
            pushFollow(FOLLOW_rule__QualifiedName__Group_1__1__Impl_in_rule__QualifiedName__Group_1__19387);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4584:1: rule__QualifiedName__Group_1__1__Impl : ( RULE_ID ) ;
    public final void rule__QualifiedName__Group_1__1__Impl() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4588:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4589:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4589:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4590:1: RULE_ID
            {
             before(grammarAccess.getQualifiedNameAccess().getIDTerminalRuleCall_1_1()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__QualifiedName__Group_1__1__Impl9414); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4606:1: rule__DomainModel__FileAssignment_2 : ( RULE_STRING ) ;
    public final void rule__DomainModel__FileAssignment_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4610:1: ( ( RULE_STRING ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4611:1: ( RULE_STRING )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4611:1: ( RULE_STRING )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4612:1: RULE_STRING
            {
             before(grammarAccess.getDomainModelAccess().getFileSTRINGTerminalRuleCall_2_0()); 
            match(input,RULE_STRING,FOLLOW_RULE_STRING_in_rule__DomainModel__FileAssignment_29452); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4621:1: rule__DomainModel__PackagesAssignment_4 : ( ruleCPackage ) ;
    public final void rule__DomainModel__PackagesAssignment_4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4625:1: ( ( ruleCPackage ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4626:1: ( ruleCPackage )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4626:1: ( ruleCPackage )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4627:1: ruleCPackage
            {
             before(grammarAccess.getDomainModelAccess().getPackagesCPackageParserRuleCall_4_0()); 
            pushFollow(FOLLOW_ruleCPackage_in_rule__DomainModel__PackagesAssignment_49483);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4636:1: rule__CPackage__NameAssignment_1 : ( ruleQualifiedName ) ;
    public final void rule__CPackage__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4640:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4641:1: ( ruleQualifiedName )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4641:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4642:1: ruleQualifiedName
            {
             before(grammarAccess.getCPackageAccess().getNameQualifiedNameParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__CPackage__NameAssignment_19514);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4651:1: rule__CPackage__StyleAssignment_2_1 : ( rulePackageStyle ) ;
    public final void rule__CPackage__StyleAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4655:1: ( ( rulePackageStyle ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4656:1: ( rulePackageStyle )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4656:1: ( rulePackageStyle )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4657:1: rulePackageStyle
            {
             before(grammarAccess.getCPackageAccess().getStylePackageStyleEnumRuleCall_2_1_0()); 
            pushFollow(FOLLOW_rulePackageStyle_in_rule__CPackage__StyleAssignment_2_19545);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4666:1: rule__CPackage__ElementsAssignment_5 : ( ruleElement ) ;
    public final void rule__CPackage__ElementsAssignment_5() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4670:1: ( ( ruleElement ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4671:1: ( ruleElement )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4671:1: ( ruleElement )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4672:1: ruleElement
            {
             before(grammarAccess.getCPackageAccess().getElementsElementParserRuleCall_5_0()); 
            pushFollow(FOLLOW_ruleElement_in_rule__CPackage__ElementsAssignment_59576);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4681:1: rule__Relation__LeftRefAssignment_0 : ( ( ruleQualifiedName ) ) ;
    public final void rule__Relation__LeftRefAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4685:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4686:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4686:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4687:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getRelationAccess().getLeftRefNodeCrossReference_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4688:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4689:1: ruleQualifiedName
            {
             before(grammarAccess.getRelationAccess().getLeftRefNodeQualifiedNameParserRuleCall_0_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__Relation__LeftRefAssignment_09611);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getRelationAccess().getLeftRefNodeQualifiedNameParserRuleCall_0_0_1()); 

            }

             after(grammarAccess.getRelationAccess().getLeftRefNodeCrossReference_0_0()); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4700:1: rule__Relation__RelTypeAssignment_1 : ( ruleRelationParse ) ;
    public final void rule__Relation__RelTypeAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4704:1: ( ( ruleRelationParse ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4705:1: ( ruleRelationParse )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4705:1: ( ruleRelationParse )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4706:1: ruleRelationParse
            {
             before(grammarAccess.getRelationAccess().getRelTypeRelationParseParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleRelationParse_in_rule__Relation__RelTypeAssignment_19646);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4715:1: rule__Relation__RightRefAssignment_2 : ( ( ruleQualifiedName ) ) ;
    public final void rule__Relation__RightRefAssignment_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4719:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4720:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4720:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4721:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getRelationAccess().getRightRefNodeCrossReference_2_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4722:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4723:1: ruleQualifiedName
            {
             before(grammarAccess.getRelationAccess().getRightRefNodeQualifiedNameParserRuleCall_2_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__Relation__RightRefAssignment_29681);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getRelationAccess().getRightRefNodeQualifiedNameParserRuleCall_2_0_1()); 

            }

             after(grammarAccess.getRelationAccess().getRightRefNodeCrossReference_2_0()); 

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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4734:1: rule__Relation__NameAssignment_3_1 : ( ruleText ) ;
    public final void rule__Relation__NameAssignment_3_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4738:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4739:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4739:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4740:1: ruleText
            {
             before(grammarAccess.getRelationAccess().getNameTextParserRuleCall_3_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Relation__NameAssignment_3_19716);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4749:1: rule__RelationParse__CompAssignment_0_0 : ( ruleCompType ) ;
    public final void rule__RelationParse__CompAssignment_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4753:1: ( ( ruleCompType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4754:1: ( ruleCompType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4754:1: ( ruleCompType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4755:1: ruleCompType
            {
             before(grammarAccess.getRelationParseAccess().getCompCompTypeEnumRuleCall_0_0_0()); 
            pushFollow(FOLLOW_ruleCompType_in_rule__RelationParse__CompAssignment_0_09747);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4764:1: rule__RelationParse__TypeAssignment_0_1 : ( ruleRelationType ) ;
    public final void rule__RelationParse__TypeAssignment_0_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4768:1: ( ( ruleRelationType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4769:1: ( ruleRelationType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4769:1: ( ruleRelationType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4770:1: ruleRelationType
            {
             before(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_0_1_0()); 
            pushFollow(FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_0_19778);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4779:1: rule__RelationParse__DirectAssignment_0_2 : ( ( '>' ) ) ;
    public final void rule__RelationParse__DirectAssignment_0_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4783:1: ( ( ( '>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4784:1: ( ( '>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4784:1: ( ( '>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4785:1: ( '>' )
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4786:1: ( '>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4787:1: '>'
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_0_2_0()); 
            match(input,54,FOLLOW_54_in_rule__RelationParse__DirectAssignment_0_29814); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4802:1: rule__RelationParse__MultiAssignment_0_4 : ( RULE_MULTI ) ;
    public final void rule__RelationParse__MultiAssignment_0_4() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4806:1: ( ( RULE_MULTI ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4807:1: ( RULE_MULTI )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4807:1: ( RULE_MULTI )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4808:1: RULE_MULTI
            {
             before(grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_0_4_0()); 
            match(input,RULE_MULTI,FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_0_49853); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4817:1: rule__RelationParse__TypeAssignment_1_0 : ( ruleRelationType ) ;
    public final void rule__RelationParse__TypeAssignment_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4821:1: ( ( ruleRelationType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4822:1: ( ruleRelationType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4822:1: ( ruleRelationType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4823:1: ruleRelationType
            {
             before(grammarAccess.getRelationParseAccess().getTypeRelationTypeParserRuleCall_1_0_0()); 
            pushFollow(FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_1_09884);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4832:1: rule__RelationParse__DirectAssignment_1_1_0 : ( ( '>' ) ) ;
    public final void rule__RelationParse__DirectAssignment_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4836:1: ( ( ( '>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4837:1: ( ( '>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4837:1: ( ( '>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4838:1: ( '>' )
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4839:1: ( '>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4840:1: '>'
            {
             before(grammarAccess.getRelationParseAccess().getDirectGreaterThanSignKeyword_1_1_0_0()); 
            match(input,54,FOLLOW_54_in_rule__RelationParse__DirectAssignment_1_1_09920); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4855:1: rule__RelationParse__ExtAssignment_1_1_1 : ( ( '|>' ) ) ;
    public final void rule__RelationParse__ExtAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4859:1: ( ( ( '|>' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4860:1: ( ( '|>' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4860:1: ( ( '|>' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4861:1: ( '|>' )
            {
             before(grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4862:1: ( '|>' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4863:1: '|>'
            {
             before(grammarAccess.getRelationParseAccess().getExtVerticalLineGreaterThanSignKeyword_1_1_1_0()); 
            match(input,55,FOLLOW_55_in_rule__RelationParse__ExtAssignment_1_1_19964); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4878:1: rule__RelationParse__MultiAssignment_1_3 : ( RULE_MULTI ) ;
    public final void rule__RelationParse__MultiAssignment_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4882:1: ( ( RULE_MULTI ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4883:1: ( RULE_MULTI )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4883:1: ( RULE_MULTI )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4884:1: RULE_MULTI
            {
             before(grammarAccess.getRelationParseAccess().getMultiMULTITerminalRuleCall_1_3_0()); 
            match(input,RULE_MULTI,FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_1_310003); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4893:1: rule__RelationType__StrongAssignment_0 : ( ruleStrongRel ) ;
    public final void rule__RelationType__StrongAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4897:1: ( ( ruleStrongRel ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4898:1: ( ruleStrongRel )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4898:1: ( ruleStrongRel )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4899:1: ruleStrongRel
            {
             before(grammarAccess.getRelationTypeAccess().getStrongStrongRelParserRuleCall_0_0()); 
            pushFollow(FOLLOW_ruleStrongRel_in_rule__RelationType__StrongAssignment_010034);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4908:1: rule__RelationType__WeakAssignment_1 : ( ruleWeakRel ) ;
    public final void rule__RelationType__WeakAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4912:1: ( ( ruleWeakRel ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4913:1: ( ruleWeakRel )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4913:1: ( ruleWeakRel )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4914:1: ruleWeakRel
            {
             before(grammarAccess.getRelationTypeAccess().getWeakWeakRelParserRuleCall_1_0()); 
            pushFollow(FOLLOW_ruleWeakRel_in_rule__RelationType__WeakAssignment_110065);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4923:1: rule__Enumer__NameAssignment_1 : ( RULE_ID ) ;
    public final void rule__Enumer__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4927:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4928:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4928:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4929:1: RULE_ID
            {
             before(grammarAccess.getEnumerAccess().getNameIDTerminalRuleCall_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Enumer__NameAssignment_110096); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4938:1: rule__Enumer__TypesAssignment_4_0 : ( RULE_ID ) ;
    public final void rule__Enumer__TypesAssignment_4_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4942:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4943:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4943:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4944:1: RULE_ID
            {
             before(grammarAccess.getEnumerAccess().getTypesIDTerminalRuleCall_4_0_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Enumer__TypesAssignment_4_010127); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4953:1: rule__Clazz__NameAssignment_1 : ( RULE_ID ) ;
    public final void rule__Clazz__NameAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4957:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4958:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4958:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4959:1: RULE_ID
            {
             before(grammarAccess.getClazzAccess().getNameIDTerminalRuleCall_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Clazz__NameAssignment_110158); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4968:1: rule__Clazz__StereotypeAssignment_2_1 : ( ruleText ) ;
    public final void rule__Clazz__StereotypeAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4972:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4973:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4973:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4974:1: ruleText
            {
             before(grammarAccess.getClazzAccess().getStereotypeTextParserRuleCall_2_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Clazz__StereotypeAssignment_2_110189);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4983:1: rule__Clazz__PropertiesAssignment_3_2 : ( ruleProperty ) ;
    public final void rule__Clazz__PropertiesAssignment_3_2() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4987:1: ( ( ruleProperty ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4988:1: ( ruleProperty )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4988:1: ( ruleProperty )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4989:1: ruleProperty
            {
             before(grammarAccess.getClazzAccess().getPropertiesPropertyParserRuleCall_3_2_0()); 
            pushFollow(FOLLOW_ruleProperty_in_rule__Clazz__PropertiesAssignment_3_210220);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:4998:1: rule__Property__NameAssignment_0 : ( RULE_ID ) ;
    public final void rule__Property__NameAssignment_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5002:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5003:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5003:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5004:1: RULE_ID
            {
             before(grammarAccess.getPropertyAccess().getNameIDTerminalRuleCall_0_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Property__NameAssignment_010251); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5013:1: rule__Property__OptionalAssignment_1_0_0 : ( ( '?' ) ) ;
    public final void rule__Property__OptionalAssignment_1_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5017:1: ( ( ( '?' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5018:1: ( ( '?' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5018:1: ( ( '?' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5019:1: ( '?' )
            {
             before(grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5020:1: ( '?' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5021:1: '?'
            {
             before(grammarAccess.getPropertyAccess().getOptionalQuestionMarkKeyword_1_0_0_0()); 
            match(input,32,FOLLOW_32_in_rule__Property__OptionalAssignment_1_0_010287); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5036:1: rule__Property__TypeAssignment_1_0_1_1_0 : ( ruleDataType ) ;
    public final void rule__Property__TypeAssignment_1_0_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5040:1: ( ( ruleDataType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5041:1: ( ruleDataType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5041:1: ( ruleDataType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5042:1: ruleDataType
            {
             before(grammarAccess.getPropertyAccess().getTypeDataTypeParserRuleCall_1_0_1_1_0_0()); 
            pushFollow(FOLLOW_ruleDataType_in_rule__Property__TypeAssignment_1_0_1_1_010326);
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


    // $ANTLR start "rule__Property__EntityListAssignment_1_0_1_1_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5051:1: rule__Property__EntityListAssignment_1_0_1_1_1 : ( ruleEntityList ) ;
    public final void rule__Property__EntityListAssignment_1_0_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5055:1: ( ( ruleEntityList ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5056:1: ( ruleEntityList )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5056:1: ( ruleEntityList )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5057:1: ruleEntityList
            {
             before(grammarAccess.getPropertyAccess().getEntityListEntityListParserRuleCall_1_0_1_1_1_0()); 
            pushFollow(FOLLOW_ruleEntityList_in_rule__Property__EntityListAssignment_1_0_1_1_110357);
            ruleEntityList();

            state._fsp--;

             after(grammarAccess.getPropertyAccess().getEntityListEntityListParserRuleCall_1_0_1_1_1_0()); 

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
    // $ANTLR end "rule__Property__EntityListAssignment_1_0_1_1_1"


    // $ANTLR start "rule__Property__ConstantAssignment_1_1_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5066:1: rule__Property__ConstantAssignment_1_1_0 : ( ( '=' ) ) ;
    public final void rule__Property__ConstantAssignment_1_1_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5070:1: ( ( ( '=' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5071:1: ( ( '=' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5071:1: ( ( '=' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5072:1: ( '=' )
            {
             before(grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5073:1: ( '=' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5074:1: '='
            {
             before(grammarAccess.getPropertyAccess().getConstantEqualsSignKeyword_1_1_0_0()); 
            match(input,56,FOLLOW_56_in_rule__Property__ConstantAssignment_1_1_010393); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5089:1: rule__Property__ValueAssignment_1_1_1 : ( ruleText ) ;
    public final void rule__Property__ValueAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5093:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5094:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5094:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5095:1: ruleText
            {
             before(grammarAccess.getPropertyAccess().getValueTextParserRuleCall_1_1_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Property__ValueAssignment_1_1_110432);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5104:1: rule__EntityList__RefsAssignment_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__EntityList__RefsAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5108:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5109:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5109:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5110:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5111:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5112:1: ruleQualifiedName
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityQualifiedNameParserRuleCall_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_110467);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5123:1: rule__EntityList__RefsAssignment_2_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__EntityList__RefsAssignment_2_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5127:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5128:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5128:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5129:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityCrossReference_2_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5130:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5131:1: ruleQualifiedName
            {
             before(grammarAccess.getEntityListAccess().getRefsEntityQualifiedNameParserRuleCall_2_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_2_110506);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5142:1: rule__Note__PositionAssignment_1_0_0_0 : ( ruleNotePosition ) ;
    public final void rule__Note__PositionAssignment_1_0_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5146:1: ( ( ruleNotePosition ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5147:1: ( ruleNotePosition )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5147:1: ( ruleNotePosition )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5148:1: ruleNotePosition
            {
             before(grammarAccess.getNoteAccess().getPositionNotePositionEnumRuleCall_1_0_0_0_0()); 
            pushFollow(FOLLOW_ruleNotePosition_in_rule__Note__PositionAssignment_1_0_0_010541);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5157:1: rule__Note__ValueAssignment_1_0_0_1_1 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_0_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5161:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5162:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5162:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5163:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_0_1_1_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_0_1_110572);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5172:1: rule__Note__OfAssignment_1_0_1_1 : ( ( RULE_ID ) ) ;
    public final void rule__Note__OfAssignment_1_0_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5176:1: ( ( ( RULE_ID ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5177:1: ( ( RULE_ID ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5177:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5178:1: ( RULE_ID )
            {
             before(grammarAccess.getNoteAccess().getOfEntityCrossReference_1_0_1_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5179:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5180:1: RULE_ID
            {
             before(grammarAccess.getNoteAccess().getOfEntityIDTerminalRuleCall_1_0_1_1_0_1()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Note__OfAssignment_1_0_1_110607); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5191:1: rule__Note__ValueAssignment_1_0_1_3 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_0_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5195:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5196:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5196:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5197:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_0_1_3_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_1_310642);
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5206:1: rule__Note__NameAssignment_1_1_1 : ( RULE_ID ) ;
    public final void rule__Note__NameAssignment_1_1_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5210:1: ( ( RULE_ID ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5211:1: ( RULE_ID )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5211:1: ( RULE_ID )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5212:1: RULE_ID
            {
             before(grammarAccess.getNoteAccess().getNameIDTerminalRuleCall_1_1_1_0()); 
            match(input,RULE_ID,FOLLOW_RULE_ID_in_rule__Note__NameAssignment_1_1_110673); 
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
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5221:1: rule__Note__ValueAssignment_1_1_3 : ( ruleText ) ;
    public final void rule__Note__ValueAssignment_1_1_3() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5225:1: ( ( ruleText ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5226:1: ( ruleText )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5226:1: ( ruleText )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5227:1: ruleText
            {
             before(grammarAccess.getNoteAccess().getValueTextParserRuleCall_1_1_3_0()); 
            pushFollow(FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_1_310704);
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


    // $ANTLR start "rule__DataType__NativeAssignment_0_0"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5236:1: rule__DataType__NativeAssignment_0_0 : ( ruleNativeType ) ;
    public final void rule__DataType__NativeAssignment_0_0() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5240:1: ( ( ruleNativeType ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5241:1: ( ruleNativeType )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5241:1: ( ruleNativeType )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5242:1: ruleNativeType
            {
             before(grammarAccess.getDataTypeAccess().getNativeNativeTypeEnumRuleCall_0_0_0()); 
            pushFollow(FOLLOW_ruleNativeType_in_rule__DataType__NativeAssignment_0_010735);
            ruleNativeType();

            state._fsp--;

             after(grammarAccess.getDataTypeAccess().getNativeNativeTypeEnumRuleCall_0_0_0()); 

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
    // $ANTLR end "rule__DataType__NativeAssignment_0_0"


    // $ANTLR start "rule__DataType__EntityAssignment_0_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5251:1: rule__DataType__EntityAssignment_0_1 : ( ( ruleQualifiedName ) ) ;
    public final void rule__DataType__EntityAssignment_0_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5255:1: ( ( ( ruleQualifiedName ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5256:1: ( ( ruleQualifiedName ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5256:1: ( ( ruleQualifiedName ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5257:1: ( ruleQualifiedName )
            {
             before(grammarAccess.getDataTypeAccess().getEntityEntityCrossReference_0_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5258:1: ( ruleQualifiedName )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5259:1: ruleQualifiedName
            {
             before(grammarAccess.getDataTypeAccess().getEntityEntityQualifiedNameParserRuleCall_0_1_0_1()); 
            pushFollow(FOLLOW_ruleQualifiedName_in_rule__DataType__EntityAssignment_0_110770);
            ruleQualifiedName();

            state._fsp--;

             after(grammarAccess.getDataTypeAccess().getEntityEntityQualifiedNameParserRuleCall_0_1_0_1()); 

            }

             after(grammarAccess.getDataTypeAccess().getEntityEntityCrossReference_0_1_0()); 

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
    // $ANTLR end "rule__DataType__EntityAssignment_0_1"


    // $ANTLR start "rule__DataType__IsArrayAssignment_1"
    // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5270:1: rule__DataType__IsArrayAssignment_1 : ( ( '[]' ) ) ;
    public final void rule__DataType__IsArrayAssignment_1() throws RecognitionException {

        		int stackSize = keepStackSize();
            
        try {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5274:1: ( ( ( '[]' ) ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5275:1: ( ( '[]' ) )
            {
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5275:1: ( ( '[]' ) )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5276:1: ( '[]' )
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0()); 
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5277:1: ( '[]' )
            // ../rethink.uml.ui/src-gen/rethink/uml/ui/contentassist/antlr/internal/InternalClassDiagram.g:5278:1: '[]'
            {
             before(grammarAccess.getDataTypeAccess().getIsArrayLeftSquareBracketRightSquareBracketKeyword_1_0()); 
            match(input,57,FOLLOW_57_in_rule__DataType__IsArrayAssignment_110810); 
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
    public static final BitSet FOLLOW_ruleNode_in_entryRuleNode181 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_EOF_in_entryRuleNode188 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Node__Alternatives_in_ruleNode214 = new BitSet(new long[]{0x0000000000000002L});
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
    public static final BitSet FOLLOW_rule__Text__Alternatives_in_ruleText1134 = new BitSet(new long[]{0x00000007FFFFF072L});
    public static final BitSet FOLLOW_rule__Text__Alternatives_in_ruleText1146 = new BitSet(new long[]{0x00000007FFFFF072L});
    public static final BitSet FOLLOW_rule__PackageStyle__Alternatives_in_rulePackageStyle1186 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CompType__Alternatives_in_ruleCompType1222 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__NotePosition__Alternatives_in_ruleNotePosition1258 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__NativeType__Alternatives_in_ruleNativeType1294 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelation_in_rule__Element__Alternatives1329 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNode_in_rule__Element__Alternatives1346 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCPackage_in_rule__Node__Alternatives1378 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntity_in_rule__Node__Alternatives1395 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNote_in_rule__Node__Alternatives1412 = new BitSet(new long[]{0x0000000000000002L});
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
    public static final BitSet FOLLOW_rule__Property__EntityListAssignment_1_0_1_1_1_in_rule__Property__Alternatives_1_0_1_11905 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Alternatives_1_0_in_rule__Note__Alternatives_11938 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__0_in_rule__Note__Alternatives_11956 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__0_in_rule__Note__Alternatives_1_01989 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__0_in_rule__Note__Alternatives_1_02007 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__NativeAssignment_0_0_in_rule__DataType__Alternatives_02040 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__EntityAssignment_0_1_in_rule__DataType__Alternatives_02058 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Text__Alternatives2091 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_STRING_in_rule__Text__Alternatives2108 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ANY_OTHER_in_rule__Text__Alternatives2125 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_12_in_rule__Text__Alternatives2143 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_13_in_rule__Text__Alternatives2163 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_16_in_rule__Text__Alternatives2183 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_17_in_rule__Text__Alternatives2203 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_14_in_rule__Text__Alternatives2223 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_15_in_rule__Text__Alternatives2243 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_18_in_rule__Text__Alternatives2263 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_19_in_rule__Text__Alternatives2283 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_20_in_rule__Text__Alternatives2303 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_21_in_rule__Text__Alternatives2323 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_22_in_rule__Text__Alternatives2343 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_23_in_rule__Text__Alternatives2363 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_24_in_rule__Text__Alternatives2383 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_25_in_rule__Text__Alternatives2403 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_26_in_rule__Text__Alternatives2423 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_27_in_rule__Text__Alternatives2443 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_28_in_rule__Text__Alternatives2463 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Text__Alternatives2483 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_30_in_rule__Text__Alternatives2503 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_31_in_rule__Text__Alternatives2523 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_32_in_rule__Text__Alternatives2543 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_33_in_rule__Text__Alternatives2563 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_34_in_rule__Text__Alternatives2583 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_35_in_rule__PackageStyle__Alternatives2618 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_36_in_rule__PackageStyle__Alternatives2639 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_37_in_rule__PackageStyle__Alternatives2660 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_38_in_rule__PackageStyle__Alternatives2681 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_39_in_rule__PackageStyle__Alternatives2702 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_40_in_rule__PackageStyle__Alternatives2723 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_41_in_rule__CompType__Alternatives2759 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_42_in_rule__CompType__Alternatives2780 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_43_in_rule__CompType__Alternatives2801 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_16_in_rule__NotePosition__Alternatives2837 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_17_in_rule__NotePosition__Alternatives2858 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_14_in_rule__NotePosition__Alternatives2879 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_15_in_rule__NotePosition__Alternatives2900 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_19_in_rule__NativeType__Alternatives2936 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_20_in_rule__NativeType__Alternatives2957 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_21_in_rule__NativeType__Alternatives2978 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_22_in_rule__NativeType__Alternatives2999 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_23_in_rule__NativeType__Alternatives3020 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_24_in_rule__NativeType__Alternatives3041 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__0__Impl_in_rule__DomainModel__Group__03074 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__1_in_rule__DomainModel__Group__03077 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_44_in_rule__DomainModel__Group__0__Impl3105 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__1__Impl_in_rule__DomainModel__Group__13136 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__2_in_rule__DomainModel__Group__13139 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__2__Impl_in_rule__DomainModel__Group__23197 = new BitSet(new long[]{0x00000000000000A0L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__3_in_rule__DomainModel__Group__23200 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__FileAssignment_2_in_rule__DomainModel__Group__2__Impl3227 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__3__Impl_in_rule__DomainModel__Group__33258 = new BitSet(new long[]{0x0000000002000000L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__4_in_rule__DomainModel__Group__33261 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__DomainModel__Group__3__Impl3288 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__4__Impl_in_rule__DomainModel__Group__43317 = new BitSet(new long[]{0x0000200000000000L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__5_in_rule__DomainModel__Group__43320 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3349 = new BitSet(new long[]{0x0000000002000002L});
    public static final BitSet FOLLOW_rule__DomainModel__PackagesAssignment_4_in_rule__DomainModel__Group__4__Impl3361 = new BitSet(new long[]{0x0000000002000002L});
    public static final BitSet FOLLOW_rule__DomainModel__Group__5__Impl_in_rule__DomainModel__Group__53394 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_45_in_rule__DomainModel__Group__5__Impl3422 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__0__Impl_in_rule__CPackage__Group__03465 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__1_in_rule__CPackage__Group__03468 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_25_in_rule__CPackage__Group__0__Impl3496 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__1__Impl_in_rule__CPackage__Group__13527 = new BitSet(new long[]{0x0001400000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group__2_in_rule__CPackage__Group__13530 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__NameAssignment_1_in_rule__CPackage__Group__1__Impl3557 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__2__Impl_in_rule__CPackage__Group__23587 = new BitSet(new long[]{0x0001400000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group__3_in_rule__CPackage__Group__23590 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__0_in_rule__CPackage__Group__2__Impl3617 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__3__Impl_in_rule__CPackage__Group__33648 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__CPackage__Group__4_in_rule__CPackage__Group__33651 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_rule__CPackage__Group__3__Impl3679 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__4__Impl_in_rule__CPackage__Group__43710 = new BitSet(new long[]{0x000080001E000010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__5_in_rule__CPackage__Group__43713 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__4__Impl3740 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__5__Impl_in_rule__CPackage__Group__53769 = new BitSet(new long[]{0x000080001E000010L});
    public static final BitSet FOLLOW_rule__CPackage__Group__6_in_rule__CPackage__Group__53772 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__ElementsAssignment_5_in_rule__CPackage__Group__5__Impl3799 = new BitSet(new long[]{0x000000001E000012L});
    public static final BitSet FOLLOW_rule__CPackage__Group__6__Impl_in_rule__CPackage__Group__63830 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__CPackage__Group__7_in_rule__CPackage__Group__63833 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__CPackage__Group__6__Impl3861 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group__7__Impl_in_rule__CPackage__Group__73892 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__CPackage__Group__7__Impl3919 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__0__Impl_in_rule__CPackage__Group_2__03964 = new BitSet(new long[]{0x000001F800000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__1_in_rule__CPackage__Group_2__03967 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_48_in_rule__CPackage__Group_2__0__Impl3995 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__1__Impl_in_rule__CPackage__Group_2__14026 = new BitSet(new long[]{0x0002000000000000L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__2_in_rule__CPackage__Group_2__14029 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__StyleAssignment_2_1_in_rule__CPackage__Group_2__1__Impl4056 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__CPackage__Group_2__2__Impl_in_rule__CPackage__Group_2__24086 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_49_in_rule__CPackage__Group_2__2__Impl4114 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__0__Impl_in_rule__Relation__Group__04151 = new BitSet(new long[]{0x000C0E0000000000L});
    public static final BitSet FOLLOW_rule__Relation__Group__1_in_rule__Relation__Group__04154 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__LeftRefAssignment_0_in_rule__Relation__Group__0__Impl4181 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__1__Impl_in_rule__Relation__Group__14211 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Relation__Group__2_in_rule__Relation__Group__14214 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__RelTypeAssignment_1_in_rule__Relation__Group__1__Impl4241 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__2__Impl_in_rule__Relation__Group__24271 = new BitSet(new long[]{0x0000000080000080L});
    public static final BitSet FOLLOW_rule__Relation__Group__3_in_rule__Relation__Group__24274 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__RightRefAssignment_2_in_rule__Relation__Group__2__Impl4301 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__3__Impl_in_rule__Relation__Group__34331 = new BitSet(new long[]{0x0000000080000080L});
    public static final BitSet FOLLOW_rule__Relation__Group__4_in_rule__Relation__Group__34334 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__0_in_rule__Relation__Group__3__Impl4361 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group__4__Impl_in_rule__Relation__Group__44392 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Relation__Group__4__Impl4419 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__0__Impl_in_rule__Relation__Group_3__04458 = new BitSet(new long[]{0x00000007FFFFF070L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__1_in_rule__Relation__Group_3__04461 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_31_in_rule__Relation__Group_3__0__Impl4489 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__Group_3__1__Impl_in_rule__Relation__Group_3__14520 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Relation__NameAssignment_3_1_in_rule__Relation__Group_3__1__Impl4547 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__0__Impl_in_rule__RelationParse__Group_0__04581 = new BitSet(new long[]{0x000C0E0000000000L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__1_in_rule__RelationParse__Group_0__04584 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__CompAssignment_0_0_in_rule__RelationParse__Group_0__0__Impl4611 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__1__Impl_in_rule__RelationParse__Group_0__14641 = new BitSet(new long[]{0x0040000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__2_in_rule__RelationParse__Group_0__14644 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__TypeAssignment_0_1_in_rule__RelationParse__Group_0__1__Impl4671 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__2__Impl_in_rule__RelationParse__Group_0__24701 = new BitSet(new long[]{0x0040000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__3_in_rule__RelationParse__Group_0__24704 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__DirectAssignment_0_2_in_rule__RelationParse__Group_0__2__Impl4731 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__3__Impl_in_rule__RelationParse__Group_0__34762 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__4_in_rule__RelationParse__Group_0__34765 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_WS_in_rule__RelationParse__Group_0__3__Impl4792 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_0__4__Impl_in_rule__RelationParse__Group_0__44821 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__MultiAssignment_0_4_in_rule__RelationParse__Group_0__4__Impl4848 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__0__Impl_in_rule__RelationParse__Group_1__04889 = new BitSet(new long[]{0x00C0000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__1_in_rule__RelationParse__Group_1__04892 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__TypeAssignment_1_0_in_rule__RelationParse__Group_1__0__Impl4919 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__1__Impl_in_rule__RelationParse__Group_1__14949 = new BitSet(new long[]{0x00C0000000000100L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__2_in_rule__RelationParse__Group_1__14952 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Alternatives_1_1_in_rule__RelationParse__Group_1__1__Impl4979 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__2__Impl_in_rule__RelationParse__Group_1__25010 = new BitSet(new long[]{0x0000000000000200L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__3_in_rule__RelationParse__Group_1__25013 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_WS_in_rule__RelationParse__Group_1__2__Impl5040 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__Group_1__3__Impl_in_rule__RelationParse__Group_1__35069 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__RelationParse__MultiAssignment_1_3_in_rule__RelationParse__Group_1__3__Impl5096 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__0__Impl_in_rule__StrongRel__Group__05135 = new BitSet(new long[]{0x000400000000F000L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__1_in_rule__StrongRel__Group__05138 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_50_in_rule__StrongRel__Group__0__Impl5166 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__1__Impl_in_rule__StrongRel__Group__15197 = new BitSet(new long[]{0x000400000000F000L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__2_in_rule__StrongRel__Group__15200 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Alternatives_1_in_rule__StrongRel__Group__1__Impl5227 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__StrongRel__Group__2__Impl_in_rule__StrongRel__Group__25258 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_50_in_rule__StrongRel__Group__2__Impl5289 = new BitSet(new long[]{0x0004000000000002L});
    public static final BitSet FOLLOW_50_in_rule__StrongRel__Group__2__Impl5305 = new BitSet(new long[]{0x0004000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__0__Impl_in_rule__WeakRel__Group__05346 = new BitSet(new long[]{0x000800000000F000L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__1_in_rule__WeakRel__Group__05349 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_51_in_rule__WeakRel__Group__0__Impl5377 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__1__Impl_in_rule__WeakRel__Group__15408 = new BitSet(new long[]{0x000800000000F000L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__2_in_rule__WeakRel__Group__15411 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Alternatives_1_in_rule__WeakRel__Group__1__Impl5438 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__WeakRel__Group__2__Impl_in_rule__WeakRel__Group__25469 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_51_in_rule__WeakRel__Group__2__Impl5500 = new BitSet(new long[]{0x0008000000000002L});
    public static final BitSet FOLLOW_51_in_rule__WeakRel__Group__2__Impl5516 = new BitSet(new long[]{0x0008000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__0__Impl_in_rule__Enumer__Group__05557 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Enumer__Group__1_in_rule__Enumer__Group__05560 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_27_in_rule__Enumer__Group__0__Impl5588 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__1__Impl_in_rule__Enumer__Group__15619 = new BitSet(new long[]{0x0000400000000000L});
    public static final BitSet FOLLOW_rule__Enumer__Group__2_in_rule__Enumer__Group__15622 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__NameAssignment_1_in_rule__Enumer__Group__1__Impl5649 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__2__Impl_in_rule__Enumer__Group__25679 = new BitSet(new long[]{0x0000800000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__3_in_rule__Enumer__Group__25682 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_rule__Enumer__Group__2__Impl5710 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__3__Impl_in_rule__Enumer__Group__35741 = new BitSet(new long[]{0x0000800000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__4_in_rule__Enumer__Group__35744 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__3__Impl5772 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__4__Impl_in_rule__Enumer__Group__45803 = new BitSet(new long[]{0x0000800000000090L});
    public static final BitSet FOLLOW_rule__Enumer__Group__5_in_rule__Enumer__Group__45806 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__0_in_rule__Enumer__Group__4__Impl5833 = new BitSet(new long[]{0x0000000000000012L});
    public static final BitSet FOLLOW_rule__Enumer__Group__5__Impl_in_rule__Enumer__Group__55864 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Enumer__Group__6_in_rule__Enumer__Group__55867 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__Enumer__Group__5__Impl5895 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group__6__Impl_in_rule__Enumer__Group__65926 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group__6__Impl5953 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__0__Impl_in_rule__Enumer__Group_4__05996 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__1_in_rule__Enumer__Group_4__05999 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__TypesAssignment_4_0_in_rule__Enumer__Group_4__0__Impl6026 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Enumer__Group_4__1__Impl_in_rule__Enumer__Group_4__16056 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Enumer__Group_4__1__Impl6084 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__0__Impl_in_rule__Clazz__Group__06119 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Clazz__Group__1_in_rule__Clazz__Group__06122 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_26_in_rule__Clazz__Group__0__Impl6150 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__1__Impl_in_rule__Clazz__Group__16181 = new BitSet(new long[]{0x0001400000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__2_in_rule__Clazz__Group__16184 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__NameAssignment_1_in_rule__Clazz__Group__1__Impl6211 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__2__Impl_in_rule__Clazz__Group__26241 = new BitSet(new long[]{0x0001400000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__3_in_rule__Clazz__Group__26244 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__0_in_rule__Clazz__Group__2__Impl6271 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__3__Impl_in_rule__Clazz__Group__36302 = new BitSet(new long[]{0x0001400000000080L});
    public static final BitSet FOLLOW_rule__Clazz__Group__4_in_rule__Clazz__Group__36305 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__0_in_rule__Clazz__Group__3__Impl6332 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group__4__Impl_in_rule__Clazz__Group__46363 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Clazz__Group__4__Impl6390 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__0__Impl_in_rule__Clazz__Group_2__06429 = new BitSet(new long[]{0x00000007FFFFF070L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__1_in_rule__Clazz__Group_2__06432 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_48_in_rule__Clazz__Group_2__0__Impl6460 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__1__Impl_in_rule__Clazz__Group_2__16491 = new BitSet(new long[]{0x0002000000000000L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__2_in_rule__Clazz__Group_2__16494 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__StereotypeAssignment_2_1_in_rule__Clazz__Group_2__1__Impl6521 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_2__2__Impl_in_rule__Clazz__Group_2__26551 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_49_in_rule__Clazz__Group_2__2__Impl6579 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__0__Impl_in_rule__Clazz__Group_3__06616 = new BitSet(new long[]{0x0000800000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__1_in_rule__Clazz__Group_3__06619 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_46_in_rule__Clazz__Group_3__0__Impl6647 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__1__Impl_in_rule__Clazz__Group_3__16678 = new BitSet(new long[]{0x0000800000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__2_in_rule__Clazz__Group_3__16681 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Clazz__Group_3__1__Impl6709 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__2__Impl_in_rule__Clazz__Group_3__26740 = new BitSet(new long[]{0x0000800000000090L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__3_in_rule__Clazz__Group_3__26743 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Clazz__PropertiesAssignment_3_2_in_rule__Clazz__Group_3__2__Impl6770 = new BitSet(new long[]{0x0000000000000012L});
    public static final BitSet FOLLOW_rule__Clazz__Group_3__3__Impl_in_rule__Clazz__Group_3__36801 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_47_in_rule__Clazz__Group_3__3__Impl6829 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__0__Impl_in_rule__Property__Group__06868 = new BitSet(new long[]{0x0100000180000000L});
    public static final BitSet FOLLOW_rule__Property__Group__1_in_rule__Property__Group__06871 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__NameAssignment_0_in_rule__Property__Group__0__Impl6898 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__1__Impl_in_rule__Property__Group__16928 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Property__Group__2_in_rule__Property__Group__16931 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Alternatives_1_in_rule__Property__Group__1__Impl6958 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group__2__Impl_in_rule__Property__Group__26988 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Property__Group__2__Impl7015 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__0__Impl_in_rule__Property__Group_1_0__07050 = new BitSet(new long[]{0x0000000180000000L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__1_in_rule__Property__Group_1_0__07053 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__OptionalAssignment_1_0_0_in_rule__Property__Group_1_0__0__Impl7080 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0__1__Impl_in_rule__Property__Group_1_0__17111 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__0_in_rule__Property__Group_1_0__1__Impl7138 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__0__Impl_in_rule__Property__Group_1_0_1__07173 = new BitSet(new long[]{0x0000000201F80010L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__1_in_rule__Property__Group_1_0_1__07176 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_31_in_rule__Property__Group_1_0_1__0__Impl7204 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_0_1__1__Impl_in_rule__Property__Group_1_0_1__17235 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Alternatives_1_0_1_1_in_rule__Property__Group_1_0_1__1__Impl7262 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__0__Impl_in_rule__Property__Group_1_1__07296 = new BitSet(new long[]{0x00000007FFFFF070L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__1_in_rule__Property__Group_1_1__07299 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__ConstantAssignment_1_1_0_in_rule__Property__Group_1_1__0__Impl7326 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__Group_1_1__1__Impl_in_rule__Property__Group_1_1__17356 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Property__ValueAssignment_1_1_1_in_rule__Property__Group_1_1__1__Impl7383 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__0__Impl_in_rule__EntityList__Group__07417 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__EntityList__Group__1_in_rule__EntityList__Group__07420 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_33_in_rule__EntityList__Group__0__Impl7448 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__1__Impl_in_rule__EntityList__Group__17479 = new BitSet(new long[]{0x0010000400000000L});
    public static final BitSet FOLLOW_rule__EntityList__Group__2_in_rule__EntityList__Group__17482 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__RefsAssignment_1_in_rule__EntityList__Group__1__Impl7509 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__2__Impl_in_rule__EntityList__Group__27539 = new BitSet(new long[]{0x0010000400000000L});
    public static final BitSet FOLLOW_rule__EntityList__Group__3_in_rule__EntityList__Group__27542 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__0_in_rule__EntityList__Group__2__Impl7569 = new BitSet(new long[]{0x0010000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group__3__Impl_in_rule__EntityList__Group__37600 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_34_in_rule__EntityList__Group__3__Impl7628 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__0__Impl_in_rule__EntityList__Group_2__07667 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__1_in_rule__EntityList__Group_2__07670 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_52_in_rule__EntityList__Group_2__0__Impl7698 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__Group_2__1__Impl_in_rule__EntityList__Group_2__17729 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__EntityList__RefsAssignment_2_1_in_rule__EntityList__Group_2__1__Impl7756 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group__0__Impl_in_rule__Note__Group__07790 = new BitSet(new long[]{0x000000006003C000L});
    public static final BitSet FOLLOW_rule__Note__Group__1_in_rule__Note__Group__07793 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_28_in_rule__Note__Group__0__Impl7821 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group__1__Impl_in_rule__Note__Group__17852 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Alternatives_1_in_rule__Note__Group__1__Impl7879 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__0__Impl_in_rule__Note__Group_1_0_0__07913 = new BitSet(new long[]{0x0000000080000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__1_in_rule__Note__Group_1_0_0__07916 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__PositionAssignment_1_0_0_0_in_rule__Note__Group_1_0_0__0__Impl7943 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0__1__Impl_in_rule__Note__Group_1_0_0__17973 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__0_in_rule__Note__Group_1_0_0__1__Impl8000 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__0__Impl_in_rule__Note__Group_1_0_0_1__08034 = new BitSet(new long[]{0x00000007FFFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__1_in_rule__Note__Group_1_0_0_1__08037 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_31_in_rule__Note__Group_1_0_0_1__0__Impl8065 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__1__Impl_in_rule__Note__Group_1_0_0_1__18096 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__2_in_rule__Note__Group_1_0_0_1__18099 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_0_0_1_1_in_rule__Note__Group_1_0_0_1__1__Impl8126 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_0_1__2__Impl_in_rule__Note__Group_1_0_0_1__28156 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_0_1__2__Impl8183 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__0__Impl_in_rule__Note__Group_1_0_1__08218 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__1_in_rule__Note__Group_1_0_1__08221 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_30_in_rule__Note__Group_1_0_1__0__Impl8249 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__1__Impl_in_rule__Note__Group_1_0_1__18280 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__2_in_rule__Note__Group_1_0_1__18283 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__OfAssignment_1_0_1_1_in_rule__Note__Group_1_0_1__1__Impl8310 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__2__Impl_in_rule__Note__Group_1_0_1__28340 = new BitSet(new long[]{0x00000007FFFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__3_in_rule__Note__Group_1_0_1__28343 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__2__Impl8370 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__3__Impl_in_rule__Note__Group_1_0_1__38399 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__4_in_rule__Note__Group_1_0_1__38402 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_0_1_3_in_rule__Note__Group_1_0_1__3__Impl8429 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__4__Impl_in_rule__Note__Group_1_0_1__48459 = new BitSet(new long[]{0x0020000000000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__5_in_rule__Note__Group_1_0_1__48462 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__4__Impl8489 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__5__Impl_in_rule__Note__Group_1_0_1__58518 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__6_in_rule__Note__Group_1_0_1__58521 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_53_in_rule__Note__Group_1_0_1__5__Impl8549 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_0_1__6__Impl_in_rule__Note__Group_1_0_1__68580 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_0_1__6__Impl8607 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__0__Impl_in_rule__Note__Group_1_1__08650 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__1_in_rule__Note__Group_1_1__08653 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_29_in_rule__Note__Group_1_1__0__Impl8681 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__1__Impl_in_rule__Note__Group_1_1__18712 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__2_in_rule__Note__Group_1_1__18715 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__NameAssignment_1_1_1_in_rule__Note__Group_1_1__1__Impl8742 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__2__Impl_in_rule__Note__Group_1_1__28772 = new BitSet(new long[]{0x00000007FFFFF070L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__3_in_rule__Note__Group_1_1__28775 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__2__Impl8802 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__3__Impl_in_rule__Note__Group_1_1__38831 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__4_in_rule__Note__Group_1_1__38834 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__ValueAssignment_1_1_3_in_rule__Note__Group_1_1__3__Impl8861 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__4__Impl_in_rule__Note__Group_1_1__48891 = new BitSet(new long[]{0x0020000000000000L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__5_in_rule__Note__Group_1_1__48894 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__4__Impl8921 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__5__Impl_in_rule__Note__Group_1_1__58950 = new BitSet(new long[]{0x0000000000000080L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__6_in_rule__Note__Group_1_1__58953 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_53_in_rule__Note__Group_1_1__5__Impl8981 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__Note__Group_1_1__6__Impl_in_rule__Note__Group_1_1__69012 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_END_LINE_in_rule__Note__Group_1_1__6__Impl9039 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Group__0__Impl_in_rule__DataType__Group__09082 = new BitSet(new long[]{0x0200000000000000L});
    public static final BitSet FOLLOW_rule__DataType__Group__1_in_rule__DataType__Group__09085 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Alternatives_0_in_rule__DataType__Group__0__Impl9112 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__Group__1__Impl_in_rule__DataType__Group__19142 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__DataType__IsArrayAssignment_1_in_rule__DataType__Group__1__Impl9169 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__0__Impl_in_rule__QualifiedName__Group__09204 = new BitSet(new long[]{0x0008000000000000L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__1_in_rule__QualifiedName__Group__09207 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__QualifiedName__Group__0__Impl9234 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group__1__Impl_in_rule__QualifiedName__Group__19263 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__0_in_rule__QualifiedName__Group__1__Impl9290 = new BitSet(new long[]{0x0008000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__0__Impl_in_rule__QualifiedName__Group_1__09325 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__1_in_rule__QualifiedName__Group_1__09328 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_51_in_rule__QualifiedName__Group_1__0__Impl9356 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rule__QualifiedName__Group_1__1__Impl_in_rule__QualifiedName__Group_1__19387 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__QualifiedName__Group_1__1__Impl9414 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_STRING_in_rule__DomainModel__FileAssignment_29452 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCPackage_in_rule__DomainModel__PackagesAssignment_49483 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__CPackage__NameAssignment_19514 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_rulePackageStyle_in_rule__CPackage__StyleAssignment_2_19545 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleElement_in_rule__CPackage__ElementsAssignment_59576 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__Relation__LeftRefAssignment_09611 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationParse_in_rule__Relation__RelTypeAssignment_19646 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__Relation__RightRefAssignment_29681 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Relation__NameAssignment_3_19716 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleCompType_in_rule__RelationParse__CompAssignment_0_09747 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_0_19778 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_54_in_rule__RelationParse__DirectAssignment_0_29814 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_0_49853 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleRelationType_in_rule__RelationParse__TypeAssignment_1_09884 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_54_in_rule__RelationParse__DirectAssignment_1_1_09920 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_55_in_rule__RelationParse__ExtAssignment_1_1_19964 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_MULTI_in_rule__RelationParse__MultiAssignment_1_310003 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleStrongRel_in_rule__RelationType__StrongAssignment_010034 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleWeakRel_in_rule__RelationType__WeakAssignment_110065 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Enumer__NameAssignment_110096 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Enumer__TypesAssignment_4_010127 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Clazz__NameAssignment_110158 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Clazz__StereotypeAssignment_2_110189 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleProperty_in_rule__Clazz__PropertiesAssignment_3_210220 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Property__NameAssignment_010251 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_32_in_rule__Property__OptionalAssignment_1_0_010287 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleDataType_in_rule__Property__TypeAssignment_1_0_1_1_010326 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleEntityList_in_rule__Property__EntityListAssignment_1_0_1_1_110357 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_56_in_rule__Property__ConstantAssignment_1_1_010393 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Property__ValueAssignment_1_1_110432 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_110467 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__EntityList__RefsAssignment_2_110506 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNotePosition_in_rule__Note__PositionAssignment_1_0_0_010541 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_0_1_110572 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Note__OfAssignment_1_0_1_110607 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_0_1_310642 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_RULE_ID_in_rule__Note__NameAssignment_1_1_110673 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleText_in_rule__Note__ValueAssignment_1_1_310704 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleNativeType_in_rule__DataType__NativeAssignment_0_010735 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_ruleQualifiedName_in_rule__DataType__EntityAssignment_0_110770 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_57_in_rule__DataType__IsArrayAssignment_110810 = new BitSet(new long[]{0x0000000000000002L});

}